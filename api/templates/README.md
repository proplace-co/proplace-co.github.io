# Proplace API — ready-made automations

All templates need two things: your `fund_type` (see `GET /v1/me`) and a key created on https://proplace.co/fr/compte, sent as `Authorization: Bearer <key>`.

## n8n — `n8n-screen-then-memo.json`

Import the file (Workflows → Import from file). It takes a list of companies (replace the Code node by a CSV, Google Sheets or CRM node), asks Proplace for a MATCH / NO MATCH verdict on each, launches an instant memo (2 credits) on every MATCH, polls every 60 s and downloads the PDF when the memo is ready. Set the environment variable `PROPLACE_FUND` and a Header Auth credential named `Authorization`.

## Make

Create a scenario with HTTP modules:

1. **HTTP · Make a request** — `POST …/v1/funds/{fund_type}/screen`, headers `Authorization: Bearer <key>` and `Content-Type: application/json`, body `{"companies":[{"url":"{{1.url}}"}]}`, parse response = yes.
2. **Iterator** on `results[]`, then a **Filter** `verdict = MATCH`.
3. **HTTP** — `POST …/v1/memos` with `{"fund_type":"<fund>","company":{"name":"{{company}}","website":"{{url}}"},"memo_type":"instant"}` and an `Idempotency-Key` header.
4. **Repeater + Sleep 60 s + HTTP GET** `…/v1/memos/{{slug}}` until `status = ready`; then **HTTP GET** `…/v1/memos/{{slug}}/pdf` (response = binary) and store the file where you want (Google Drive, Notion, e-mail).

## Zapier

Use **Webhooks by Zapier**: a `POST` action to `…/v1/funds/{fund_type}/screen` (JSON payload, header `Authorization`), a `Formatter` to keep `results` where `verdict = MATCH`, then a `POST` to `…/v1/memos`. For the polling loop prefer a `Delay` of 10 minutes (instant memo) or 45 minutes (detailed memo) followed by a `GET …/v1/memos/<slug>` step. Or set a CRM webhook with `POST …/v1/funds/{fund_type}/webhook` and let Proplace call your Zap (`memo.ready`, `validated`, `stage_changed`).

## ChatGPT (Custom GPT)

Actions → Import from URL `…/v1/openapi.json`, auth API Key / Bearer. Try: « Screen these ten websites for my fund, then write the LOI for the first MATCH ».

## Claude Desktop, Cursor, Windsurf (MCP)

```json
{ "mcpServers": { "proplace": { "url": "https://alexandre-79537--sourcing-agent-fastapi-app.modal.run/mcp",
                                "headers": { "Authorization": "Bearer <your key>" } } } }
```

## Python

`proplace.py` next to this file is a dependency-free client (needs `httpx`): `Proplace(token).screen(fund, [...])`, `.memo(...)`, `.wait(slug)`, `.pdf(slug)`, `.deck(slug, "lbo")`, `.skill(slug, "loi")`, `.model(fund, name, mode="lbo")`.
