/* <pp-run-story> — le récit EN DIRECT d'un run (sourcing, mémo) — v2 (03/10/2026).
 *
 * Servi par le proxy : GET /sourcing/run-story.js. Composant autonome (shadow DOM),
 * utilisé dans le cockpit, les pages /cibles, « Mon compte » et la popup d'inscription :
 *
 *   <script src="https://…proplace-chat-proxy…/sourcing/run-story.js" defer><\/script>
 *   <pp-run-story src="https://…/sourcing/run-story?token=XXXX"></pp-run-story>
 *
 * Attributs :
 *   src        URL JSON {status, pct, started_at, ended_at, steps[], story[], fund|gate}
 *   ops        présent → envoie la clé opérateur (localStorage pp:opskey) en X-Ops-Key
 *   heading    titre (défaut « Le sourcing en direct »)
 *   eyebrow    sur-titre (défaut « Sourcing »)
 *   compact    présent → version resserrée (popup)
 *   theme      light | dark (défaut : suit le système)
 *   replay     "off" → pas de bouton « Revoir le film »
 *   autoplay   présent → un run DÉJÀ terminé se rejoue tout seul à l'affichage
 *              (sinon : état final replié + « ▶ Revoir le film »)
 *   unit       libellé du compteur (défaut « fiches »)
 *   empty      texte quand aucun run n'existe encore
 *   waiting    présent → un run va démarrer : sondage toutes les 4 s tant qu'il n'existe pas
 *   flat       présent → sans ombre, coins 12 px (intégré dans une page)
 *   collapsible présent → replié sur UNE ligne (état · heure · résultat · ce qu'il fait
 *              en ce moment), « Détail ▾ » déplie — comme le « Réfléchi pendant… »
 *              de ChatGPT / Claude : on voit le travail sans allonger la page
 *   open       présent (avec collapsible) → déplié d'emblée
 *   maxh       hauteur max (px) de la chronologie, défilement interne (défaut 440 ;
 *              0 = illimitée)
 *   maxh-narrow même chose sur écran étroit (≤ 640 px) ; prioritaire sur maxh. « 0 » :
 *              le film se déroule dans la page, sans second ascenseur (Mon compte sur
 *              mobile). Absent : maxh s'applique partout (popups, fenêtres de mémo).
 *
 * Étapes : une étape « error » suivie d'autres étapes (le run a continué) ou d'un run
 * qui n'a pas échoué est un AVERTISSEMENT (pastille ambre cochée, repliée sur sa
 * phrase) — le rouge est réservé à l'étape où un run s'est réellement arrêté. Ex. :
 * « Réveil » avec un réservoir presque vide, « le run part quand même ».
 *
 * Défilement interne : la chronologie suit l'étape en cours tant que le visiteur ne
 * fait pas défiler lui-même ; s'il remonte lire, on ne le ramène plus de force.
 *
 * Look : celui de proplace.co (Instrument Sans, vert #12A150, encres navy, filets
 * #E3E8F0) — lu dans les tokens --pp-* de la page hôte quand ils existent.
 *
 * Événements : `pp-run-done` (detail = état) quand le run se termine sous nos yeux,
 * `pp-run-state` à chaque rafraîchissement.
 *
 * Mise en page : une chronologie verticale. Chaque étape porte ses propres lignes ;
 * l'étape en cours est ouverte et « réfléchit » (étoile + verbe) ; une étape finie
 * se replie sur son résumé. Le rejeu reconstruit l'état (étapes, barre, compteurs)
 * à l'instant rejoué : « Revoir le film » repart vraiment de zéro.
 */
(function () {
  if (window.customElements && customElements.get('pp-run-story')) return;

  var SPIN = ['·', '✢', '✳', '✶', '✻', '✽', '✻', '✶', '✳', '✢'];
  var VERBS = {
    preflight: ['Se réveille', 'Vérifie les réservoirs'],
    prep: ['Lit la presse', 'Rassemble les opérations'],
    pipeline: ['Cherche', 'Fouille', 'Recoupe', 'Vérifie les sites', 'Trie', 'Pèse les dossiers', 'Juge'],
    hunter: ['Traque', 'Affûte les requêtes'],
    memos: ['Prépare les dossiers'],
    optimize: ['Relit les réglages'],
    cibles: ['Met la page à jour'],
    report: ['Écrit le rapport'],
    a: ['Identifie la société', 'Lit le site', 'Consulte le registre', 'Écoute l’actualité'],
    d1: ['Approfondit le dossier'],
    b: ['Analyse', 'Recoupe les chiffres', 'Confronte à la thèse'],
    d2: ['Passe les acteurs en revue'],
    mindmap: ['Cartographie'],
    d3: ['Pèse les synergies', 'Joue les scénarios'],
    c: ['Rédige', 'Vérifie chaque fait'],
    d: ['Publie'],
    _: ['Travaille', 'Analyse', 'Vérifie', 'Rédige'],
  };

  var CSS = '' +
    ':host{display:block;color:var(--ink);' +
    'font-family:var(--pp-body,"Instrument Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif);' +
    '--bg:var(--pp-bg,#ffffff);--ink:var(--pp-ink,#16233A);--ink2:var(--pp-ink-2,#4B5E78);--mute:var(--pp-ink-3,#61708A);' +
    '--faint:var(--pp-ink-4,#8FA0B8);--line:var(--pp-line,#E3E8F0);--wash:var(--pp-bg-zone,#F9FBFD);' +
    '--acc:var(--pp-green,#12A150);--run:var(--pp-navy,#0F1D33);--ok:var(--pp-green-tx,#0E7F3F);' +
    '--ok-wash:var(--pp-green-bg,#E7F6EE);--ok-bd:var(--pp-green-bd,#BFE6CF);--warn:#96690E;--warn-dot:var(--pp-amber,#E0A81E);--err:#C0353A;' +
    '--mono:var(--pp-body,"Instrument Sans",system-ui,sans-serif)}' +
    ':host([theme=dark]){--bg:#0F1D33;--ink:#EEF2F7;--ink2:#C9D6E6;--mute:#8FA0B8;--faint:#61708A;--line:#1B2F4E;' +
    '--wash:#13243F;--acc:#3FCB7E;--run:#C9D6E6;--ok:#6EDCA2;--ok-wash:#0E3424;--ok-bd:#1E5A3C;--warn:#F0C25A;--warn-dot:#F0C25A;--err:#FF8A8F}' +
    '*{box-sizing:border-box}' +
    '.box{background:var(--bg);border:1px solid var(--line);border-radius:16px;padding:22px 24px 18px;' +
    'box-shadow:0 6px 18px rgba(15,29,51,.05)}' +
    ':host([flat]) .box{box-shadow:none;border-radius:12px}' +
    ':host([compact]) .box{padding:14px 16px 12px;border-radius:12px;box-shadow:none}' +
    '.hd{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}' +
    '.eb{font-size:12px;font-weight:600;line-height:1.2;color:var(--faint)}' +
    '.ttl{font-size:19px;font-weight:700;letter-spacing:-.02em;line-height:1.2;margin-top:4px;color:var(--ink)}' +
    ':host([compact]) .ttl{font-size:16px}' +
    '.meta{font-size:12.5px;line-height:1.4;color:var(--mute);margin-top:4px;font-variant-numeric:tabular-nums}' +
    '.pill{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:600;color:var(--ink2);' +
    'border:1px solid var(--line);border-radius:999px;padding:5px 11px 5px 10px;white-space:nowrap;background:var(--bg)}' +
    '.pill.done{color:var(--ok);background:var(--ok-wash);border-color:var(--ok-bd)}' +
    '.pill i{width:6px;height:6px;border-radius:50%;background:var(--faint)}' +
    '.pill.live{color:var(--run)}.pill.live i{background:var(--acc);animation:ping 1.6s cubic-bezier(.2,.6,.3,1) infinite}' +
    '.pill.done i{background:var(--ok)}.pill.fail i{background:var(--err)}' +
    '@keyframes ping{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--acc) 45%,transparent)}100%{box-shadow:0 0 0 7px transparent}}' +
    '.bar{position:relative;height:3px;background:var(--line);border-radius:3px;margin:18px 0 4px;overflow:hidden}' +
    '.bar>i{position:absolute;left:0;top:0;bottom:0;background:var(--acc);border-radius:2px;transition:width .9s cubic-bezier(.2,.8,.2,1);overflow:hidden}' +
    '.bar.run>i:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent);animation:sweep 1.8s linear infinite}' +
    '@keyframes sweep{from{transform:translateX(-100%)}to{transform:translateX(100%)}}' +
    '.cnt{display:flex;align-items:baseline;gap:18px;flex-wrap:wrap;margin:12px 0 2px;font-size:12.5px;color:var(--mute)}' +
    '.cnt b{font-size:16px;font-weight:700;line-height:1;color:var(--ink);font-variant-numeric:tabular-nums;margin-right:5px}' +
    '.cnt .ok b{color:var(--ok)}' +
    '.tl{list-style:none;margin:14px 0 0;padding:0;position:relative}' +
    '.st{position:relative;padding:0 0 12px 26px}' +
    '.st:before{content:"";position:absolute;left:6px;top:16px;bottom:-2px;width:1px;background:var(--line)}' +
    '.st:last-child:before{display:none}' +
    '.st.done:before,.st.warn:before{background:color-mix(in srgb,var(--ok) 45%,var(--line))}' +
    '.dot{position:absolute;left:0;top:4px;width:13px;height:13px;border-radius:50%;border:1.5px solid var(--faint);background:var(--bg);display:grid;place-items:center}' +
    '.st.done .dot{border-color:var(--ok);background:var(--ok)}' +
    '.st.done .dot:after,.st.warn .dot:after{content:"";width:3px;height:6px;border:solid #fff;border-width:0 1.6px 1.6px 0;transform:translateY(-1px) rotate(45deg)}' +
    '.st.warn .dot{border-color:var(--warn-dot);background:var(--warn-dot)}' +
    '.st.warn .sd{color:var(--warn)}' +
    '.st.running .dot{border-color:var(--run)}' +
    '.st.running .dot:after{content:"";width:5px;height:5px;border-radius:50%;background:var(--run);animation:breathe 1.4s ease-in-out infinite}' +
    '.st.error .dot{border-color:var(--err);background:var(--err)}' +
    '.st.skipped .dot{border-style:dashed}' +
    '@keyframes breathe{50%{transform:scale(.55);opacity:.5}}' +
    '.sh{display:flex;align-items:baseline;gap:10px;cursor:pointer;user-select:none}' +
    '.sl{font-size:14px;font-weight:600;color:var(--ink);white-space:nowrap}' +
    '.st.pending .sl{color:var(--faint);font-weight:500}' +
    '.st.running .sl{background:linear-gradient(90deg,var(--ink) 30%,var(--faint) 50%,var(--ink) 70%);background-size:200% 100%;' +
    '-webkit-background-clip:text;background-clip:text;color:transparent;animation:shine 2.4s linear infinite}' +
    '@keyframes shine{from{background-position:100% 0}to{background-position:-100% 0}}' +
    '.sd{font-size:12px;color:var(--mute);flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '.tm{font-size:12px;font-weight:500;line-height:1;color:var(--faint);font-variant-numeric:tabular-nums;white-space:nowrap}' +
    '.lines{margin:6px 0 0;display:flex;flex-direction:column;gap:3px}' +
    '.st.closed .lines{display:none}' +
    '.ln{display:flex;gap:9px;align-items:baseline;font-size:13.5px;line-height:1.5;color:var(--ink2)}' +
    '.ln.new{animation:rise .5s cubic-bezier(.2,.8,.2,1) both}' +
    '@keyframes rise{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}' +
    '.mk{flex:0 0 12px;display:grid;place-items:center;height:18px}' +
    '.mk:before{content:"";width:4px;height:4px;border-radius:50%;background:var(--faint)}' +
    '.ln.ok .mk:before{background:var(--ink2)}' +
    '.ln.match .mk:before{width:7px;height:7px;background:var(--ok)}' +
    '.ln.warn .mk:before{background:var(--warn)}.ln.err .mk:before{background:var(--err)}' +
    '.ln.muted,.ln.skip{color:var(--faint)}' +
    '.ln.match{color:var(--ink);font-weight:600}' +
    '.ln.match .tx{background:var(--ok-wash);border-radius:6px;padding:0 6px;margin-left:-6px}' +
    '.ln.warn{color:var(--warn)}.ln.err{color:var(--err);font-weight:600}' +
    '.ln .tx{min-width:0}' +
    '.think{display:flex;gap:9px;align-items:baseline;font-size:13.5px;color:var(--acc);margin-top:3px}' +
    '.think .sp{flex:0 0 12px;text-align:center}' +
    '.think .vb{font-weight:600}' +
    '.think .el{color:var(--faint);font-size:12px;font-variant-numeric:tabular-nums}' +
    '.end{margin-top:6px;padding:13px 15px;border:1px solid var(--ok-bd);border-radius:12px;background:var(--ok-wash);font-size:13.5px;color:var(--ink2)}' +
    '.end b{color:var(--ink)}' +
    '.end.bad{border-color:#F5C6C8;background:#FDECEC;color:var(--err)}' +
    '.cta{display:inline-block;margin-top:9px;font-size:13px;font-weight:600;color:#fff;background:var(--acc);border-radius:10px;padding:8px 14px;text-decoration:none}' +
    '.cta:hover{filter:brightness(.95)}' +
    '.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}' +
    '.chip{font-size:12px;font-weight:600;color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:999px;padding:3px 10px;text-decoration:none}' +
    'a.chip:hover{border-color:var(--ok);color:var(--ok)}' +
    '.ft{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:12px;padding-top:10px;border-top:1px solid var(--line)}' +
    '.ft span{font-size:12px;color:var(--faint)}' +
    '.btn{font-family:inherit;font-size:13px;font-weight:600;color:var(--ok);background:var(--ok-wash);border:1px solid var(--ok-bd);' +
    'border-radius:999px;padding:6px 13px;cursor:pointer}' +
    '.btn:hover{filter:brightness(.97)}.btn:focus-visible{outline:2px solid var(--acc);outline-offset:2px}' +
    '.empty{font-size:13px;color:var(--mute);padding:4px 0}' +
    '.sum{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:10px;width:100%;cursor:pointer;min-height:24px}' +
    '.sum:focus-visible{outline:2px solid var(--acc);outline-offset:4px;border-radius:8px}' +
    '.sdot{flex:0 0 18px;height:18px;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:700;color:#fff;background:var(--faint)}' +
    '.sdot.live{background:none;color:var(--acc);font-size:14px}' +
    '.sdot.done{background:var(--ok)}.sdot.fail{background:var(--err)}' +
    '.stxt{flex:0 1 auto;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13.5px;color:var(--mute)}' +
    '.stxt b{color:var(--ink);font-weight:600}' +
    '.tick{flex:1 1 auto;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13px;color:var(--faint)}' +
    '.tick.new{animation:rise .5s cubic-bezier(.2,.8,.2,1) both}' +
    '.chev{flex:0 0 auto;font-size:12.5px;font-weight:600;color:var(--ok);white-space:nowrap}' +
    ':host([collapsible]) .box{padding:12px 16px}' +
    ':host([collapsible]) .box.open{padding:12px 16px 14px}' +
    '.inner{margin-top:12px;border-top:1px solid var(--line);padding-top:4px}' +
    '.tl.scroll{overflow-y:auto;overscroll-behavior:contain;padding-right:6px;scrollbar-width:thin;' +
    '-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 14px,#000 calc(100% - 14px),transparent 100%);' +
    'mask-image:linear-gradient(180deg,transparent 0,#000 14px,#000 calc(100% - 14px),transparent 100%);padding-top:8px;padding-bottom:8px}' +
    '.more{all:unset;cursor:pointer;font-size:12px;font-weight:600;color:var(--mute);padding:2px 0 2px 21px}' +
    '.more:hover{color:var(--ok)}' +
    // Écran étroit (téléphone) : moins de marge perdue (le film vit souvent dans une
    // carte), lignes plus longues, et le résumé d'une étape repliée passe SOUS son
    // libellé sur deux lignes au lieu d'être coupé à 3 mots par une ellipse.
    '@media (max-width:640px){' +
    '.box{padding:16px 14px 14px;border-radius:12px}' +
    ':host([compact]) .box{padding:14px 12px 12px}' +
    ':host([collapsible]) .box,:host([collapsible]) .box.open{padding:12px 14px}' +
    '.hd{gap:10px}.ttl{font-size:17px}' +
    '.pill{padding:4px 9px 4px 8px;font-size:11.5px}' +
    '.bar{margin-top:14px}.cnt{gap:14px}' +
    '.st{padding-left:22px}' +
    '.sh{flex-wrap:wrap;row-gap:2px}' +
    '.tm{order:2;margin-left:auto}' +
    '.sd{order:3;flex:1 0 100%;white-space:normal;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}' +
    '.sd:empty{display:none}' +
    '.ln,.think{gap:7px}.mk,.think .sp{flex-basis:10px}' +
    '.more{padding-left:17px}' +
    '.end{padding:12px 13px}' +
    // version repliée : titre · heure · résultat sur deux lignes, l'activité en dessous
    '.sum{flex-wrap:wrap;row-gap:3px}' +
    '.stxt{flex:1 1 0;white-space:normal;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}' +
    '.tick{order:3;flex:1 0 100%;padding-left:28px}.tick:empty{display:none}' +
    '}' +
    '@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function hhmm(ts) {
    if (!ts) return '';
    try { return new Date(ts * 1000).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }); } catch (e) { return ''; }
  }
  function dur(a, b) {
    if (!a) return '';
    var s = Math.max(0, Math.round((b || Date.now() / 1000) - a));
    if (s < 60) return s + ' s';
    var m = Math.floor(s / 60);
    return m < 60 ? m + ' min' : Math.floor(m / 60) + ' h ' + String(m % 60).padStart(2, '0');
  }
  function dayWord(ts) {
    if (!ts) return '';
    var d = new Date(ts * 1000), t = new Date();
    if (d.toDateString() === t.toDateString()) return d.getHours() < 12 ? 'Ce matin' : "Aujourd'hui";
    var y = new Date(t); y.setDate(t.getDate() - 1);
    if (d.toDateString() === y.toDateString()) return 'Hier';
    return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  }
  function shortLabel(l) { return String(l || '').replace(/^Étapes? [\d-]+ · /, ''); }

  class PPRunStory extends HTMLElement {
    constructor() {
      super();
      this._root = this.attachShadow({ mode: 'open' });
      this._state = null;
      this._shown = 0;          // lignes déjà affichées (rejeu progressif)
      this._renderedN = 0;      // lignes déjà rendues (seules les nouvelles s'animent)
      this._spinI = 0;
      this._verbI = 0;
      this._open = {};          // étapes ouvertes/fermées à la main
      this._acc = 0;            // rejeu : temps accumulé avant la prochaine ligne
      this._more = {};          // étapes dont on montre TOUTES les lignes
      this._expanded = null;    // mode collapsible : déplié ?
      this._lastTick = '';
      this._autoTop = null;     // dernière position de défilement posée par le suivi automatique
      this._wasRunning = false;
      this._timer = null;
      this._anim = null;
    }
    connectedCallback() {
      try {
        if (!document.querySelector('link[href*="Instrument+Sans"]')) {
          var l = document.createElement('link');
          l.rel = 'stylesheet';
          l.href = 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap';
          document.head.appendChild(l);
        }
      } catch (e) { /* noop */ }
      this._root.innerHTML = '<style>' + CSS + '</style><div class="box"><div class="empty">Chargement…</div></div>';
      this._fetch();
      var self = this;
      this._anim = setInterval(function () { self._tick(); }, 120);
    }
    disconnectedCallback() { clearTimeout(this._timer); clearInterval(this._anim); }
    static get observedAttributes() { return ['src']; }
    attributeChangedCallback(n, a, b) {
      if (n === 'src' && a !== b && this.isConnected) { this._state = null; this._shown = 0; this._renderedN = 0; this._fetch(); }
    }

    _fetch() {
      var src = this.getAttribute('src');
      if (!src) return;
      var self = this, headers = {};
      if (this.hasAttribute('ops')) {
        try { var k = localStorage.getItem('pp:opskey'); if (k) headers['X-Ops-Key'] = k; } catch (e) { /* noop */ }
      }
      clearTimeout(this._timer);
      fetch(src, { headers: headers, cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (j) {
        var running = j && j.found !== false && j.status === 'running' && !j.stale;
        var first = !self._state;
        self._state = (j && j.found !== false) ? j : null;
        if (first && self._state) {
          // Run fini → rejeu animé depuis le début (sauf replay="off").
          // Run en cours → l'existant d'un coup, la suite s'écrit en direct.
          self._shown = (running || !self.hasAttribute('autoplay')) ? (self._state.story || []).length : 0;
          self._renderedN = self._shown;
        }
        if (self._wasRunning && !running && self._state) {
          self.dispatchEvent(new CustomEvent('pp-run-done', { detail: self._state, bubbles: true, composed: true }));
        }
        self._wasRunning = running;
        self.dispatchEvent(new CustomEvent('pp-run-state', { detail: self._state, bubbles: true, composed: true }));
        self._render();
        // `waiting` : un run va démarrer (popup, Mon compte) → on sonde vite tant qu'il n'est pas là
        var idle = (!self._state && self.hasAttribute('waiting')) ? 4000 : 60000;
        self._timer = setTimeout(function () { self._fetch(); }, running ? 3000 : idle);
      }).catch(function () {
        self._timer = setTimeout(function () { self._fetch(); }, 8000);
      });
    }

    _live() { var s = this._state; return !!(s && s.status === 'running' && !s.stale); }

    /* Hauteur max de la chronologie (0 = illimitée) : `maxh-narrow` sur écran étroit,
       sinon `maxh` (défaut 440). */
    _maxh() {
      var narrow = false;
      try { narrow = !!(window.matchMedia && window.matchMedia('(max-width: 640px)').matches); } catch (e) { /* noop */ }
      if (narrow && this.hasAttribute('maxh-narrow')) return parseInt(this.getAttribute('maxh-narrow'), 10) || 0;
      return this.hasAttribute('maxh') ? (parseInt(this.getAttribute('maxh'), 10) || 0) : 440;
    }

    _tick() {
      var st = this._state;
      if (!st) return;
      var n = (st.story || []).length;
      this._spinI = (this._spinI + 1) % SPIN.length;
      if (this._spinI === 0) this._verbI += 1;
      if (this._shown < n) {
        if (this._live()) {
          this._shown += 1;                       // en direct : une ligne par tic
          this._render();
        } else {
          // rejeu d'un run fini : une ligne toutes les 0,45 à 1 s (lisible), ~26 s au total
          var per = Math.max(450, Math.min(1000, 26000 / n));
          this._acc += 120;
          if (this._acc >= per) { this._acc = 0; this._shown += 1; this._render(); }
          else this._renderThink();
        }
      } else {
        this._renderThink();
      }
    }

    /* L'état AFFICHÉ : pendant un rejeu, reconstruit à l'instant de la dernière ligne
       montrée (étapes, barre, compteurs) ; sinon l'état réel. */
    _view() {
      var st = this._state;
      var story = st.story || [];
      if (this._live() || this._shown >= story.length) return { st: st, replay: false };
      var T = this._shown > 0 ? story[this._shown - 1].t : st.started_at;
      var v = Object.assign({}, st, { status: 'running', ended_at: null });
      v.steps = (st.steps || []).map(function (s) {
        var y = Object.assign({}, s);
        if (s.ended_at && s.ended_at <= T) return y;
        if (s.started_at && s.started_at <= T) { y.status = 'running'; y.ended_at = null; y.detail = ''; return y; }
        y.status = 'pending'; y.started_at = null; y.ended_at = null; y.detail = '';
        return y;
      });
      var end = st.ended_at || st.updated_at || T;
      var span = end - st.started_at;
      v.pct = span > 0 ? Math.max(2, Math.min(99, Math.round(100 * (T - st.started_at) / span))) : 2;
      var shownN = this._shown;
      var gm = story.slice(0, shownN).filter(function (e) { return e.gm; }).length;
      var c = st.fund && st.fund.pairs ? st.fund : st.gate;
      if (c && (c.pairs || c.total)) {
        var tot = c.pairs || c.total;
        var first = -1, last = -1;
        story.forEach(function (e, i) {
          var tx = e.text || '';
          if (first < 0 && /crible|évaluations à mener/.test(tx)) first = i;
          if (/^Verdict/.test(tx)) last = i;
        });
        var frac = (first < 0 || shownN <= first) ? 0 : (last <= first ? 1 : Math.min(1, (shownN - first) / (last - first)));
        var cc = Object.assign({}, c, { done: Math.round(tot * frac), match: gm });
        if (st.fund && st.fund.pairs) v.fund = cc; else v.gate = cc;
      }
      return { st: v, replay: true, T: T };
    }

    _verb(st) {
      var cur = (st.steps || []).filter(function (s) { return s.status === 'running'; })[0];
      var list = VERBS[(cur && cur.key)] || VERBS._;
      return list[this._verbI % list.length];
    }

    _renderThink() {
      var sd = this._root.querySelector('.sdot.live');
      if (sd) sd.textContent = SPIN[this._spinI];
      var el = this._root.querySelector('.think');
      if (!el || !this._state) return;
      var vw = this._view();
      el.innerHTML = '<span class="sp">' + SPIN[this._spinI] + '</span><span class="vb">' + esc(this._verb(vw.st)) +
        '…</span><span class="el">' + esc(vw.replay ? hhmm(vw.T) : dur(this._state.started_at)) + '</span>';
    }

    _render() {
      var box = this._root.querySelector('.box');
      var heading = this.getAttribute('heading') || 'Le sourcing en direct';
      var eyebrow = this.getAttribute('eyebrow') || 'Sourcing';
      var raw = this._state;
      if (!raw && this.hasAttribute('collapsible')) {
        box.className = 'box';
        box.innerHTML = '<div class="sum" style="cursor:default"><span class="sdot"></span><span class="stxt"><b>' + esc(heading) +
          '</b></span><span class="tick">' + esc(this.getAttribute('empty') || 'Aucun run pour l’instant — le prochain part demain à 6 h.') + '</span></div>';
        return;
      }
      if (!raw) {
        box.innerHTML = '<div class="hd"><div><div class="eb">' + esc(eyebrow) + '</div><div class="ttl">' + esc(heading) + '</div>' +
          '<div class="meta">' + esc(this.getAttribute('empty') || 'Aucun run pour l’instant — le prochain part demain à 6 h.') + '</div></div>' +
          '<span class="pill"><i></i>En attente</span></div>';
        return;
      }
      var vw = this._view(), st = vw.st;
      var live = this._live();
      var failed = raw.status === 'error' || raw.failed;
      var collapsible = this.hasAttribute('collapsible');
      if (collapsible && this._expanded === null) this._expanded = this.hasAttribute('open');
      var expanded = !collapsible || this._expanded;
      var pill = live ? '<span class="pill live"><i></i>En direct</span>'
        : vw.replay ? '<span class="pill live"><i></i>Rejeu</span>'
          : failed ? '<span class="pill fail"><i></i>Interrompu</span>'
            : '<span class="pill done"><i></i>Terminé</span>';
      var meta = live ? 'Démarré à ' + hhmm(raw.started_at) + ' · ' + dur(raw.started_at)
        : dayWord(raw.started_at) + ' · ' + hhmm(raw.started_at) + (raw.ended_at ? ' → ' + hhmm(raw.ended_at) + ' · ' + dur(raw.started_at, raw.ended_at) : '');

      var c = st.fund && st.fund.pairs ? { total: st.fund.pairs, done: st.fund.done, match: st.fund.match }
        : (st.gate && st.gate.total ? st.gate : null);
      var unit = this.getAttribute('unit') || 'fiches';
      var cnt = c ? '<div class="cnt"><span><b>' + (c.done || 0) + '</b>/ ' + c.total + ' ' + esc(unit) + ' jugées</span>' +
        '<span class="ok"><b>' + (c.match || 0) + '</b>retenue' + ((c.match || 0) > 1 ? 's' : '') + '</span></div>' : '';

      var story = (raw.story || []).slice(0, this._shown);
      var ops = this.hasAttribute('ops');
      var byStep = {};
      story.forEach(function (e, i) { var k = e.step || 'pipeline'; (byStep[k] = byStep[k] || []).push([e, i]); });
      var steps = st.steps || [];
      var self = this;
      var LAST = 4;
      // Dernière étape entamée : seule elle peut porter l'arrêt d'un run échoué.
      var lastStarted = -1;
      steps.forEach(function (s, i) { if (s.started_at || (s.status && s.status !== 'pending')) lastStarted = i; });
      var tl = steps.map(function (s, i) {
        var all = byStep[s.key] || [];
        var hidden = (!self._more[s.key] && all.length > LAST + 1) ? all.length - LAST : 0;
        var lines = hidden ? all.slice(hidden) : all;
        var status = s.status || 'pending';
        // « error » sans arrêt du run (il a continué, ou il n'a pas échoué) = avertissement :
        // ex. Réveil « un réservoir presque vide, le run part quand même ».
        if (status === 'error' && !(failed && i >= lastStarted)) status = 'warn';
        var auto = status === 'running' || status === 'error';
        var open = self._open[s.key] !== undefined ? self._open[s.key] : auto;
        var finished = status === 'done' || status === 'skipped' || status === 'error' || status === 'warn';
        var detail = finished ? (s.detail || (all.length ? all[all.length - 1][0].text : '')) : '';
        var tm = s.started_at ? (s.ended_at ? dur(s.started_at, s.ended_at) : hhmm(s.started_at)) : '';
        var body = lines.map(function (p) {
          var e = p[0], isNew = p[1] >= self._renderedN;
          return '<div class="ln ' + esc(e.kind || 'info') + (isNew ? ' new' : '') + '"><span class="mk"></span>' +
            '<span class="tx">' + esc((ops && e.text_ops) || e.text) + '</span></div>';
        }).join('');
        if (hidden) body = '<button class="more" type="button" data-more="' + esc(s.key) + '">+ ' + hidden + ' ligne' + (hidden > 1 ? 's' : '') + ' plus haut</button>' + body;
        if (status === 'running' && (live || vw.replay)) body += '<div class="think"></div>';
        return '<li class="st ' + status + (open ? '' : ' closed') + '" data-k="' + esc(s.key) + '">' +
          '<span class="dot"></span><div class="sh"><span class="sl">' + esc(shortLabel(s.label)) + '</span>' +
          '<span class="sd">' + esc(open ? '' : detail) + '</span><span class="tm">' + esc(tm) + '</span></div>' +
          (body ? '<div class="lines">' + body + '</div>' : '') + '</li>';
      }).join('');

      var end = '';
      if (!live && !vw.replay) {
        if (failed) {
          end = '<div class="end bad">' + (raw.kind === 'memo' ? 'Le mémo s’est arrêté avant la fin.' : 'Le run s’est arrêté avant la fin. Il sera relancé.') +
            (raw.error_step ? ' Étape : ' + esc(raw.error_step) + '.' : '') + '</div>';
        } else if (raw.kind === 'memo' && raw.status === 'done') {
          end = '<div class="end"><b>Mémo publié.</b>' +
            (raw.url ? '<br><a class="cta" href="' + esc(raw.url) + '" target="_blank" rel="noopener">Lire le mémo</a>' : '') + '</div>';
        } else if (raw.status === 'done') {
          var m = raw.fund ? (raw.fund.matches || []) : [];
          var nM = raw.fund ? (raw.fund.match || 0) : ((raw.gate || {}).match || raw.matched || 0);
          end = '<div class="end"><b>' + nM + ' société' + (nM > 1 ? 's' : '') + ' retenue' + (nM > 1 ? 's' : '') + '</b>' +
            (raw.leads_found ? ' sur ' + raw.leads_found + ' examinées' : '') + '.' +
            (m.length ? '<div class="chips">' + m.slice(0, 12).map(function (x) {
              var nm = esc(x.name || '?');
              return x.url ? '<a class="chip" href="' + esc(x.url) + '" target="_blank" rel="noopener">' + nm + '</a>' : '<span class="chip">' + nm + '</span>';
            }).join('') + '</div>' : '') + '</div>';
        }
      }
      var n = (raw.story || []).length;
      var foot = (!live && n && this.getAttribute('replay') !== 'off')
        ? '<div class="ft"><span>' + n + ' événements racontés</span><button class="btn" data-replay type="button">▶ Revoir le film</button></div>' : '';

      var pct = Math.max(2, Math.min(100, st.pct || (raw.status === 'done' ? 100 : 0)));
      var mh = this._maxh();
      var tlAttr = mh > 0 ? ' class="tl scroll" style="max-height:' + mh + 'px"' : ' class="tl"';
      // Défilement interne : le visiteur a-t-il quitté la position posée par le suivi ?
      // (alors on garde SA position au lieu de le ramener de force à chaque ligne)
      var prevSc = box.querySelector('.tl.scroll'), keepTop = null;
      if (prevSc && this._autoTop !== null) {
        var atAuto = Math.abs(prevSc.scrollTop - this._autoTop) <= 24;
        var atEnd = prevSc.scrollTop + prevSc.clientHeight >= prevSc.scrollHeight - 24;
        if (!atAuto && !(atEnd && (live || vw.replay))) keepTop = prevSc.scrollTop;
      }
      var body = '<div class="bar' + ((live || vw.replay) ? ' run' : '') + '"><i style="width:' + pct + '%"></i></div>' +
        cnt + '<ol' + tlAttr + '>' + (tl || '<li class="empty">Le moteur se prépare…</li>') + '</ol>' + end + foot;
      if (collapsible) {
        var lastLine = story.length ? story[story.length - 1].text : '';
        var nM2 = raw.fund ? (raw.fund.match || 0) : ((raw.gate || {}).match || raw.matched || 0);
        var res = live || vw.replay ? (st.pct ? st.pct + ' %' : '')
          : failed ? 'interrompu'
            : raw.kind === 'memo' ? 'publié'
              : nM2 + ' retenue' + (nM2 > 1 ? 's' : '');
        var dotCls = (live || vw.replay) ? 'live' : failed ? 'fail' : 'done';
        var dotTxt = (live || vw.replay) ? SPIN[this._spinI] : failed ? '!' : '✓';
        var tick = (live || vw.replay) ? (this._verb(st) + '… ' + lastLine) : (expanded ? '' : lastLine);
        var tickNew = tick !== this._lastTick;
        this._lastTick = tick;
        var sum = '<button class="sum" type="button" data-sum aria-expanded="' + (expanded ? 'true' : 'false') + '">' +
          '<span class="sdot ' + dotCls + '">' + dotTxt + '</span>' +
          '<span class="stxt"><b>' + esc(heading) + '</b> · ' + esc(meta) + (res ? ' · ' + esc(res) : '') + '</span>' +
          '<span class="tick' + (tickNew ? ' new' : '') + '">' + esc(tick) + '</span>' +
          '<span class="chev">' + (expanded ? 'Replier ▴' : 'Détail ▾') + '</span></button>';
        box.className = 'box' + (expanded ? ' open' : '');
        box.innerHTML = sum + (expanded ? '<div class="inner">' + body + '</div>' : '');
      } else {
        box.innerHTML = '<div class="hd"><div><div class="eb">' + esc(eyebrow) + '</div><div class="ttl">' + esc(heading) + '</div>' +
          '<div class="meta">' + esc(meta) + '</div></div>' + pill + '</div>' + body;
      }
      // la chronologie bornée suit l'étape en cours — sauf si le visiteur a défilé lui-même
      var sc = box.querySelector('.tl.scroll');
      if (sc) {
        if (keepTop !== null) sc.scrollTop = keepTop;
        else {
          var cur = (live || vw.replay) ? sc.querySelector('.st.running') : null;
          sc.scrollTop = cur ? Math.max(0, cur.offsetTop - 12 + cur.offsetHeight - sc.clientHeight + 40) : 0;
          this._autoTop = sc.scrollTop;
        }
      } else {
        this._autoTop = null;
      }
      this._renderedN = story.length;
      this._renderThink();

      box.querySelectorAll('.sh').forEach(function (h) {
        h.addEventListener('click', function () {
          var li = h.parentNode, k = li.getAttribute('data-k');
          self._open[k] = li.classList.contains('closed');
          self._render();
        });
      });
      var sb = box.querySelector('[data-sum]');
      if (sb) sb.addEventListener('click', function () { self._expanded = !self._expanded; self._render(); });
      box.querySelectorAll('[data-more]').forEach(function (b) {
        b.addEventListener('click', function (ev) { ev.stopPropagation(); self._more[b.getAttribute('data-more')] = true; self._render(); });
      });
      var rb = box.querySelector('[data-replay]');
      if (rb) rb.addEventListener('click', function () {
        self._shown = 0; self._renderedN = 0; self._open = {}; self._more = {}; self._acc = 0;
        self._autoTop = null;
        if (self.hasAttribute('collapsible')) self._expanded = true;
        self._render();
      });
    }
  }
  customElements.define('pp-run-story', PPRunStory);
})();
