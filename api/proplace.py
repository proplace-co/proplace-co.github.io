"""Proplace API — minimal Python client (no dependency beyond httpx).

    pip install httpx
    from proplace import Proplace
    pp = Proplace("pk_live_…")                      # key from https://proplace.co/fr/compte
    me = pp.me()                                    # fund, plan, credits
    verdicts = pp.screen(me["fund_type"], ["https://exemple.fr", "Atelier Morvan"])
    memo = pp.memo(me["fund_type"], "Atelier Morvan", website="https://exemple.fr", tier="instant")
    final = pp.wait(memo["slug"])                   # polls every 60 s until ready / failed
    pdf = pp.pdf(memo["slug"])                      # bytes

Docs: https://proplace.co/api/ · OpenAPI: {BASE}/v1/openapi.json
"""

from __future__ import annotations

import time
import uuid
from typing import Any

import httpx

BASE = "https://alexandre-79537--sourcing-agent-fastapi-app.modal.run"


class ProplaceError(Exception):
    def __init__(self, status: int, detail: Any):
        super().__init__(f"{status}: {detail}")
        self.status = status
        self.detail = detail


class Proplace:
    def __init__(self, token: str, base: str = BASE, timeout: float = 130.0):
        self._c = httpx.Client(base_url=f"{base.rstrip('/')}/v1", timeout=timeout,
                               headers={"Authorization": f"Bearer {token}"})

    # ── low level ──────────────────────────────────────────────────────────
    def _r(self, method: str, path: str, **kw) -> Any:
        r = self._c.request(method, path, **kw)
        if r.status_code >= 400:
            try:
                detail = r.json().get("detail")
            except Exception:
                detail = r.text[:300]
            raise ProplaceError(r.status_code, detail)
        if r.headers.get("content-type", "").startswith("application/pdf"):
            return r.content
        return r.json() if r.content else {}

    # ── account ────────────────────────────────────────────────────────────
    def me(self) -> dict:
        return self._r("GET", "/me")

    def funds(self) -> list:
        return self._r("GET", "/funds")

    def thesis(self, fund_type: str, lang: str | None = None) -> dict:
        return self._r("GET", f"/funds/{fund_type}/thesis", params={"lang": lang} if lang else None)

    # ── deal flow ──────────────────────────────────────────────────────────
    def deals(self, fund_type: str, status: str | None = None, limit: int = 200) -> dict:
        params: dict[str, Any] = {"limit": limit}
        if status:
            params["status"] = status
        return self._r("GET", f"/funds/{fund_type}/deals", params=params)

    def screen(self, fund_type: str, companies: list[str | dict], enrich: bool = False, wait: bool = True) -> dict:
        items = [c if isinstance(c, dict) else ({"url": c} if "." in c and " " not in c else {"name": c})
                 for c in companies]
        return self._r("POST", f"/funds/{fund_type}/screen", json={"companies": items, "enrich": enrich},
                       params={"wait": str(wait).lower()})

    def add_targets(self, fund_type: str, companies: list[str], force: bool = False, wait: bool = True) -> dict:
        return self._r("POST", f"/funds/{fund_type}/targets",
                       json={"companies": [{"name_or_url": c} for c in companies], "force_reevaluate": force},
                       params={"wait": str(wait).lower()})

    def job(self, job_id: str) -> dict:
        return self._r("GET", f"/jobs/{job_id}")

    def decide(self, deal_id: str, decision: str, note: str | None = None) -> dict:
        body: dict[str, Any] = {"decision": decision}
        if note:
            body["note"] = note
        return self._r("POST", f"/targets/{deal_id}/decision", json=body)

    def webhook(self, fund_type: str, url: str | None = None, test: bool = False) -> dict:
        if url is None:
            return self._r("GET", f"/funds/{fund_type}/webhook")
        return self._r("POST", f"/funds/{fund_type}/webhook", json={"url": url}, params={"test": str(test).lower()})

    # ── memos ──────────────────────────────────────────────────────────────
    def memo(self, fund_type: str, name: str, tier: str = "detailed", dry_run: bool = False,
             idempotency_key: str | None = None, **company) -> dict:
        body = {"fund_type": fund_type, "company": {"name": name, **company}, "memo_type": tier}
        headers = {"Idempotency-Key": idempotency_key or str(uuid.uuid4())}
        return self._r("POST", "/memos", json=body, headers=headers, params={"dry_run": str(dry_run).lower()})

    def memo_status(self, slug: str) -> dict:
        return self._r("GET", f"/memos/{slug}")

    def wait(self, slug: str, every: int = 60, max_minutes: int = 60) -> dict:
        deadline = time.time() + max_minutes * 60
        while True:
            st = self.memo_status(slug)
            if st.get("status") in ("ready", "failed") or time.time() > deadline:
                return st
            time.sleep(every)

    def pdf(self, slug: str) -> bytes:
        return self._r("GET", f"/memos/{slug}/pdf")

    def deck(self, slug: str, mode: str = "vc", every: int = 15, max_minutes: int = 10) -> bytes:
        self._r("POST", f"/memos/{slug}/deck", json={"mode": mode})
        deadline = time.time() + max_minutes * 60
        while time.time() < deadline:
            r = self._c.get(f"/memos/{slug}/deck", params={"mode": mode})
            if r.status_code == 200:
                return r.content
            if r.status_code != 202:
                raise ProplaceError(r.status_code, r.text[:300])
            time.sleep(every)
        raise ProplaceError(504, "deck not ready in time")

    def skill(self, slug: str, key: str, lang: str | None = None) -> dict:
        return self._r("POST", f"/memos/{slug}/skills/{key}", json={"lang": lang} if lang else {})

    # ── market, briefs, models ─────────────────────────────────────────────
    def news(self, fund_type: str, lang: str = "fr") -> dict:
        return self._r("GET", f"/funds/{fund_type}/news", params={"lang": lang})

    def brief(self, fund_type: str, period: str = "daily", lang: str = "fr") -> dict:
        return self._r("GET", f"/funds/{fund_type}/brief", params={"period": period, "lang": lang})

    def model(self, fund_type: str, name: str, website: str | None = None, mode: str | None = None,
              deal_params: dict | None = None) -> dict:
        body: dict[str, Any] = {"fund_type": fund_type, "company": {"name": name, "website": website},
                                "deal_params": deal_params or {}}
        if mode:
            body["mode"] = mode
        return self._r("POST", "/models", json=body)
