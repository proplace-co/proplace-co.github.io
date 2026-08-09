import{C as Be,r as x,a as gt,b as mt,l as ye,o as we,c as Re,n as Le,d as Pe,e as bt,f as ht,g as vt,S as Ce,h as yt,i as U,j as ze,v as wt,k as le,m as _,p as re,q as e,s as Ze,t as et,u as tt,w as Se,A as Ie,x as _e,y as de,z as $e,B as se,D as ae,E as kt,F as jt,G as at,H as Ee,I as Te,J as Nt,K as rt,L as nt,M as Ct,N as zt,O as Ue,P as He,Q as Ve,R as St,T as Et,U as Tt,V as Ye,W as At,X as Ft,Y as ge,Z as ke,_ as Mt,$ as Dt,a0 as Ot,a1 as qt}from"./index-e1TJCY7q.js";const Bt={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Entrées des moteurs, pas encore passées au crible.","MATCH au crible. Le mémo n’a pas encore été lancé.","Mémo produit — verdict CONSIDER ou MONITOR.","Mémo produit — verdict CALL : votre OUI ou NON est attendu.","Vos OUI. Place à la prise de contact.","NO MATCH au crible, ou PASS après mémo.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(t,a,n)=>`<b>${t} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${n} sans réponse.</b>`,morningThesis:(t,a,n)=>`<b>${t}</b> cibles sourcées ce matin — <b>${a}</b> déjà évaluées par Stan`+(n?`, <b>${n}</b> restent à évaluer.`:'. <span class="ok">Rien à faire.</span>'),morningEval:t=>`▶ Les évaluer (${t})`,identTitle:t=>`Cibles pour ${t}`,identCoverage:"COUVERTURE DU MARCHÉ",identCoverageOf:(t,a)=>`<b>${t}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"MOTEUR DE MÉMOS",identPerDay:"mémo/jour",identPending:t=>`→ ${t} en attente`,identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Inverser l’ordre de tri",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:t=>`Décision annulée sur ${t}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ OUI",actNo:"✗ NON",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:t=>`${t} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"CRIBLE · MÉMO",colScore:"SCORE",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:t=>`Depuis le verdict de Stan : ${t} j`,waitChip:t=>`⏱ ${t} j`,densList:"LISTE",densOpen:"DÉPLIÉ",densMaxi:"MAXI",memoSynth:"SYNTHÈSE",memoOpenFull:"📖 Lire le mémo complet →",memoDeep:"⚡ Mémo détaillé",memoDeepHint:"Pour ce dossier à trancher, vous pouvez lancer l’analyse détaillée : étude de marché, quadrant concurrentiel, scénarios.",memoDeepSent:t=>`Mémo détaillé lancé sur ${t} — prêt dans 35 à 40 minutes`,memoInstantSent:t=>`Analyse lancée sur ${t} — mémo prêt dans ~15 minutes`,memoNone:"Aucun mémo pour ce dossier — lancez l’analyse.",creditsCap:"CRÉDITS MÉMO",creditsToday:"aujourd’hui",creditsRecharge:"Recharger →",creditsCost:t=>`−${t} crédit${t>1?"s":""}`,creditsNone:"Crédit épuisé — rechargez ou attendez demain 7 h.",rechargeTitle:"Crédits mémo",rechargeHint:t=>`Votre offre comprend <b>${t} crédits par jour</b>, rechargés chaque matin. Besoin de plus tout de suite ?`,rechargeNote:"Les crédits achetés n’expirent pas. Ils s’utilisent après vos crédits quotidiens.",rechargeBuy:"Ajouter",rechargeUnit:(t,a)=>`${t} crédits — ${a} €`,onbTag:"APERÇU PRIVÉ · LECTURE SEULE",onbTitle:t=>`Votre deal flow est prêt — <b>${t} cibles retenues</b> par Stan`,onbSub:t=>`${t} sociétés passées au crible sur votre thèse. Les dix premières lignes sont ouvertes ; le reste se débloque en trente minutes.`,onbSteps:[["Stan a étudié votre présence en ligne","Site, offres d’emploi, presse — il en a déduit vos angles d’acquisition."],["Il a criblé le marché","Chaque société confrontée à vos critères."],["Il a rédigé des mémos","Analyses chiffrées, synergies, verdicts."],["À vous de trancher","Trente minutes pour régler votre deal flow et tout débloquer."]],onbCta:"Choisir un créneau →",lockbarText:"Paramétrons votre deal flow rêvé en 30 minutes",lockbarCta:"Choisir un créneau",queueTitle:"File de traitement",queueDone:(t,a)=>`<b>${t} / ${a}</b> mémos générés`,queueTomorrow:"À VENIR — ORDRE PROJETÉ, RECALCULÉ CHAQUE MATIN",queueToday:"ANALYSÉS AUJOURD’HUI",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugSave:"Enregistrer",plugTest:"Tester",plugRemove:"Retirer",plugConfigured:"Configuré",plugMcp:"Claude & IA (MCP)",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(t,a)=>`<b>${t}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:t=>`${t} passées au crible`,alertTitle:"🔔 Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"VOS ANGLES D’ACQUISITION",critVerdicts:"Verdicts possibles : <b>CALL</b> (appel recommandé) · <b>CONSIDER</b> / <b>MONITOR</b> (à creuser) · <b>PASS</b> (écartée après analyse).",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:t=>`actualisée le ${t}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:t=>`actualisée le ${t}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:t=>`Onboarding lancé pour ${t} — suivez l’avancement dans le cockpit`,groupEngine:"Moteur",groupNone:"Rien",browse:t=>`Parcourir les ${t}`,chainAll:t=>`Enchaîner les ${t}`,colCompany:"SOCIÉTÉ & DESCRIPTION",grpCount:(t,a)=>`${t} à envoyer sur ${a} sourcées`,emptyTab:"AUCUNE CIBLE DANS CET ONGLET",emptyScope:"AUCUNE SOCIÉTÉ DANS CE PÉRIMÈTRE"},Rt={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Engine finds not yet screened.","MATCH at screening. Memo not launched yet.","Memo produced — CONSIDER or MONITOR verdict.","Memo produced — CALL verdict: your YES or NO is expected.","Your YES list. Time to reach out.","NO MATCH at screening, or PASS after memo.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(t,a,n)=>`<b>${t} Stan CALL${t>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${n} awaiting answer.</b>`,morningThesis:(t,a,n)=>`<b>${t}</b> targets sourced this morning — <b>${a}</b> already screened by Stan`+(n?`, <b>${n}</b> left to screen.`:'. <span class="ok">Nothing to do.</span>'),morningEval:t=>`▶ Screen them (${t})`,identTitle:t=>`Targets for ${t}`,identCoverage:"MARKET COVERAGE",identCoverageOf:(t,a)=>`<b>${t}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"MEMO ENGINE",identPerDay:"memo/day",identPending:t=>`→ ${t} queued`,identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Reverse sort order",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:t=>`Decision undone on ${t}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ YES",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:t=>`${t} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"SCREEN · MEMO",colScore:"SCORE",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:t=>`Since Stan’s verdict: ${t} d`,waitChip:t=>`⏱ ${t} d`,densList:"LIST",densOpen:"OPEN",densMaxi:"CARDS",memoSynth:"SUMMARY",memoOpenFull:"📖 Read the full memo →",memoDeep:"⚡ Detailed memo",memoDeepHint:"For this file to decide, you can launch the detailed analysis: market study, competitive quadrant, scenarios.",memoDeepSent:t=>`Detailed memo launched on ${t} — ready in 35 to 40 minutes`,memoInstantSent:t=>`Analysis launched on ${t} — memo ready in ~15 minutes`,memoNone:"No memo for this file yet — launch the analysis.",creditsCap:"MEMO CREDITS",creditsToday:"today",creditsRecharge:"Top up →",creditsCost:t=>`−${t} credit${t>1?"s":""}`,creditsNone:"Out of credits — top up or wait for tomorrow 7am.",rechargeTitle:"Memo credits",rechargeHint:t=>`Your plan includes <b>${t} credits per day</b>, refilled every morning. Need more right now?`,rechargeNote:"Purchased credits never expire. They are used after your daily credits.",rechargeBuy:"Add",rechargeUnit:(t,a)=>`${t} credits — €${a}`,onbTag:"PRIVATE PREVIEW · READ ONLY",onbTitle:t=>`Your deal flow is ready — <b>${t} targets kept</b> by Stan`,onbSub:t=>`${t} companies screened against your thesis. The first ten rows are open; the rest unlocks in thirty minutes.`,onbSteps:[["Stan studied your online presence","Website, job posts, press — it inferred your acquisition angles."],["It screened the market","Every company checked against your criteria."],["It wrote memos","Quantified analyses, synergies, verdicts."],["Your turn to decide","Thirty minutes to tune your deal flow and unlock everything."]],onbCta:"Pick a slot →",lockbarText:"Let’s set up your dream deal flow in 30 minutes",lockbarCta:"Pick a slot",queueTitle:"Processing queue",queueDone:(t,a)=>`<b>${t} / ${a}</b> memos generated`,queueTomorrow:"UP NEXT — PROJECTED ORDER, RECOMPUTED EVERY MORNING",queueToday:"ANALYZED TODAY",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugSave:"Save",plugTest:"Test",plugRemove:"Remove",plugConfigured:"Configured",plugMcp:"Claude & AI (MCP)",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(t,a)=>`<b>${t}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:t=>`${t} screened`,alertTitle:"🔔 Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"YOUR ACQUISITION ANGLES",critVerdicts:"Possible verdicts: <b>CALL</b> (call recommended) · <b>CONSIDER</b> / <b>MONITOR</b> (worth digging) · <b>PASS</b> (ruled out after analysis).",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:t=>`updated ${t}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:t=>`updated ${t}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:t=>`Onboarding launched for ${t} — track progress in the cockpit`,groupEngine:"Engine",groupNone:"None",browse:t=>`Browse the ${t}`,chainAll:t=>`Chain the ${t}`,colCompany:"COMPANY & DESCRIPTION",grpCount:(t,a)=>`${t} to send out of ${a} sourced`,emptyTab:"NO TARGET IN THIS TAB",emptyScope:"NO COMPANY IN THIS SCOPE"},Lt={fr:{...Be.fr,...Bt},en:{...Be.en,...Rt}},Pt=`.atl2{
  --brand:#0E8A4F; --brand-d:#0A6B3D; --brand-l:#E4F2EA;
  --blue:#1E5FCC; --bolt:#F59E0B; --red:#DC2626;
  --panel:#FFFFFF; --panel2:#F8FAFC; --panel3:#F1F5F9;
  --line:#E2E8F0; --line2:#CBD5E1;
  --ink:#0F172A; --muted:#64748B; --dim:#94A3B8;
  --sea:#E4EDF3; --land:#FFFFFF; --landline:#B2C2D0; --empty:#F1F5F9; --emptyline:#DCE4EB;
  --rail:240px;
  --r:5px;        
  --rs:3px;       
  --ra:8px;       
  --rb:12px;      
  
  --p0:#E7EBF0; --p1:#E7F3EC; --p2:#C4E0D0; --p3:#7FC0A0; --p4:#0E8A4F;
  --p5:#DC2626; --pv:#334155; --pf:#F59E0B;
  
  --d0:#94A3B8; --d1:#9BD1B4; --d2:#5FB98C; --d3:#2E9A66; --d4:#0A6B3D;
  --mono:"IBM Plex Mono",ui-monospace,Menlo,monospace;
  --body:"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
}
.atl2,.atl2 *{box-sizing:border-box}
.atl2,.atl2{height:100%;margin:0;overflow:hidden}
.atl2{background:var(--panel2);color:var(--ink);font-family:var(--body);font-size:14px;line-height:1.45;-webkit-font-smoothing:antialiased}
.atl2 button,.atl2 input,.atl2 textarea{font-family:inherit}
.atl2,.atl2 *{scrollbar-width:thin;scrollbar-color:var(--line2) transparent}
.atl2 ::-webkit-scrollbar{width:11px;height:11px}
.atl2 ::-webkit-scrollbar-track{background:transparent}
.atl2 ::-webkit-scrollbar-thumb{background:var(--line2);border-radius:6px;border:3px solid var(--panel);background-clip:padding-box}
.atl2 ::-webkit-scrollbar-thumb:hover{background:var(--muted);border-width:2px}
.atl2 .app{display:flex;flex-direction:column;height:100dvh;overflow:hidden}
@keyframes atl2-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}
.atl2 .ident{flex:none;background:var(--panel);border-bottom:1px solid var(--line);padding:9px 14px}
.atl2 .ident[hidden]{display:none}
.atl2 .idrow{display:flex;align-items:center;gap:11px;flex-wrap:wrap}
.atl2 .idrow .eyebrow{font-family:var(--mono);font-size:8.5px;letter-spacing:.16em;color:var(--brand-d);font-weight:700}
.atl2 .idrow h1{margin:0;font-size:22px;font-weight:700;letter-spacing:-.02em}
.atl2 .idpill{display:flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:99px;
  padding:4px 11px;font-family:var(--mono);font-size:9.5px;color:var(--muted)}
.atl2 .idpill .bar{width:46px;height:5px;background:var(--panel3);border-radius:99px;overflow:hidden}
.atl2 .idpill .bar i{display:block;height:100%;background:var(--brand)}
.atl2 .idpill.pause{color:#EA7C0B;border-color:#FDE4C7;background:#FFF7ED}
.atl2 .idsp{flex:1}
.atl2 .idupd{font-family:var(--mono);font-size:9px;color:var(--dim)}
.atl2 .idrow .ic{width:26px;height:26px;border-radius:var(--r);border:1px solid var(--line);display:grid;
  place-items:center;font-size:12px;color:var(--muted);cursor:pointer;background:var(--panel)}
.atl2 .idrow .ic:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .idrow .ic.sm{width:22px;height:20px;font-size:11px;margin-left:4px}
.atl2 .idsep{width:1px;height:20px;background:var(--line);margin:0 3px}
.atl2 .eyebrow .lang{display:inline-flex;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;
  margin-left:8px;vertical-align:middle}
.atl2 .eyebrow .lang b,.atl2 .eyebrow .lang span{padding:2px 7px;font-size:9px;font-weight:700;color:var(--muted);background:var(--panel)}
.atl2 .eyebrow .lang b{background:var(--ink);color:#fff}
.atl2 .isrch{display:flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:var(--r);
  padding:0 10px;height:28px;background:var(--panel);width:170px}
.atl2 .isrch input{border:0;outline:none;font-size:12px;flex:1;min-width:0;background:none}
.atl2 .idpill .mi{cursor:pointer;color:var(--muted);padding:0 2px}
.atl2 .idpill .mi:hover{color:var(--ink)}
.atl2 .idlogo{font-weight:700;font-size:12.5px;border:1px solid var(--line);padding:5px 10px;border-radius:var(--r)}
.atl2 .funnel{flex:none;background:var(--panel);border-bottom:1px solid var(--line);padding:9px 14px;
  display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.atl2 .funnel[hidden]{display:none}
.atl2 .chain2{display:flex;align-items:stretch;flex:1 1 440px;min-width:0}
.atl2 .step{flex:1 1 0;min-width:0;position:relative;display:flex;flex-direction:column;justify-content:center;gap:2px;
  padding:7px 12px 7px 25px;background:var(--panel3);color:var(--muted);cursor:pointer;border:0;text-align:left;
  clip-path:polygon(0 0,calc(100% - 13px) 0,100% 50%,calc(100% - 13px) 100%,0 100%,13px 50%);
  margin-left:-13px;transition:background .13s}
.atl2 .step:first-child{margin-left:0;padding-left:14px;
  clip-path:polygon(0 0,calc(100% - 13px) 0,100% 50%,calc(100% - 13px) 100%,0 100%)}
.atl2 .step:hover{background:#E4EBF2;color:var(--ink);z-index:4}
.atl2 .step[aria-selected="true"]{background:var(--c);color:var(--tc,#fff);z-index:5}
.atl2 .step .l{font-family:var(--mono);font-size:7.5px;letter-spacing:.14em;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.atl2 .step .n{font-size:17px;font-weight:800;letter-spacing:-.02em;line-height:1}
.atl2 .step .warn{position:absolute;top:5px;right:9px;width:7px;height:7px;border-radius:50%;background:#EA7C0B;
  box-shadow:0 0 0 3px rgba(234,124,11,.25);animation:atl2-pulse2 1.8s infinite}
@keyframes atl2-pulse2{0%,100%{opacity:1}50%{opacity:.35}}
.atl2 .offtrack{display:flex;align-items:stretch;gap:5px;flex:none}
.atl2 .ftools{display:flex;align-items:center;gap:4px;flex:none}
.atl2 .tool{background:var(--panel);border:1px solid var(--line);border-radius:var(--r);padding:6px 10px;cursor:pointer;
  font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--muted);display:flex;align-items:center;gap:6px;white-space:nowrap}
.atl2 .tool:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .tool[aria-pressed="true"]{background:var(--ink);border-color:var(--ink);color:#fff;font-weight:600}
.atl2 .offtrack .div{width:1px;background:var(--line);margin:3px}
.atl2 .off{display:flex;flex-direction:column;justify-content:center;gap:2px;padding:7px 12px;background:var(--panel);
  border:1px solid var(--line);border-radius:var(--r);cursor:pointer;color:var(--muted);text-align:left}
.atl2 .off:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .off .l{font-family:var(--mono);font-size:7.5px;letter-spacing:.14em;white-space:nowrap}
.atl2 .off .n{font-size:15px;font-weight:700;line-height:1;color:var(--ink)}
.atl2 .off[aria-selected="true"]{background:var(--c);border-color:var(--c);color:#fff}
.atl2 .off[aria-selected="true"] .n{color:#fff}
.atl2 .off.view{border-style:dashed}
.atl2 .off .lock{font-size:10px;opacity:.6}
.atl2 .tuto{flex:none;position:relative;background:var(--bg);border-bottom:1px solid var(--line);
  padding:10px 14px;display:flex;gap:12px;align-items:flex-start}
.atl2 .tuto[hidden]{display:none}
.atl2 .tuto::before{content:"";position:absolute;top:-7px;left:var(--ax,60px);width:14px;height:14px;
  background:var(--bg);transform:rotate(45deg)}
.atl2 .tuto.mini{padding:7px 14px}
.atl2 .tuto.mini p{margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500;color:var(--muted)}
.atl2 .tuto.mini .acts,.atl2 .tuto.mini .goal{display:none}
.atl2 .fbar{flex:none;background:var(--panel);border-bottom:1px solid var(--line);padding:10px 14px}
.atl2 .fbar[hidden]{display:none}
.atl2 .fbar .act{background:var(--panel2);border:1px solid var(--line);border-radius:var(--ra);padding:10px 12px;margin-bottom:9px}
.atl2 .fbar .act .hd{display:flex;align-items:center;gap:12px;font-size:12px;font-weight:600;margin-bottom:8px;flex-wrap:wrap}
.atl2 .fbar .act .hd .lg{display:flex;gap:11px;margin-left:auto;font-size:11px;color:var(--muted);font-weight:500}
.atl2 .fbar .act .hd .lg i{display:inline-block;width:8px;height:8px;border-radius:2px;margin-right:4px}
.atl2 .fbar .bars{display:flex;align-items:flex-end;gap:3px;height:56px}
.atl2 .fbar .bars .b{flex:1;display:flex;flex-direction:column;justify-content:flex-end;cursor:pointer;min-width:0}
.atl2 .fbar .bars .b:hover{opacity:.75}
.atl2 .fbar .bars .b i{display:block;width:100%}
.atl2 .fbar .ax{display:flex;justify-content:space-between;font-family:var(--mono);font-size:8.5px;color:var(--dim);margin-top:4px}
.atl2 .fbar .chips{display:flex;flex-wrap:wrap;gap:5px}
.atl2 .fbar .chips .srch{display:flex;align-items:center;gap:6px;border:1px solid var(--line2);border-radius:var(--r);
  padding:0 10px;height:30px;background:var(--panel);min-width:210px}
.atl2 .fbar .chips .srch input{border:0;outline:none;font-size:12.5px;flex:1;min-width:0}
.atl2 .fchip{display:flex;align-items:center;gap:6px;height:30px;padding:0 11px;background:var(--panel);
  border:1px solid var(--line);border-radius:var(--r);font-size:11.5px;color:var(--muted);cursor:pointer;white-space:nowrap}
.atl2 .fchip:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .fchip b{color:var(--ink);font-weight:700}
.atl2 .fchip .cv{font-size:8px;color:var(--dim)}
.atl2 .tuto .fold{background:none;border:0;font-family:var(--mono);font-size:8.5px;letter-spacing:.12em;
  color:var(--muted);cursor:pointer;padding:3px 6px;flex:none;align-self:center}
.atl2 .tuto .fold:hover{color:var(--ink)}
.atl2 .tuto p{margin:0 0 8px;font-size:12.5px;font-weight:600;max-width:90ch;line-height:1.5}
.atl2 .tuto .acts{display:flex;gap:6px;flex-wrap:wrap}
.atl2 .tuto .acts button{font-size:12px;font-weight:600;border:0;border-radius:var(--ra);padding:7px 14px;cursor:pointer;color:#fff;background:var(--ink)}
.atl2 .tuto .acts button.ghost{background:var(--panel);color:var(--ink);border:1px solid var(--line2);font-weight:500}
.atl2 .tuto .goal{flex:none;font-family:var(--mono);font-size:9px;color:var(--muted);border:1px solid var(--line);
  background:var(--panel);border-radius:var(--r);padding:6px 10px}
.atl2 .onb{flex:none;margin:0;background:#0B1220;color:#fff;padding:18px 20px;border-bottom:1px solid var(--line)}
.atl2 .onb[hidden]{display:none}
.atl2 .onb .tag{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:8.5px;
  letter-spacing:.18em;color:#5FB98C;font-weight:700;margin-bottom:9px}
.atl2 .onb .tag i{width:7px;height:7px;border-radius:50%;background:#5FB98C}
.atl2 .onb h2{margin:0 0 5px;font-size:21px;font-weight:700;letter-spacing:-.02em}
.atl2 .onb .sub{font-size:13px;color:#9FB6CA;margin-bottom:14px}
.atl2 .onb .steps{display:flex;gap:10px;align-items:stretch;flex-wrap:wrap}
.atl2 .onb .st{flex:1 1 190px;background:#16233A;border-radius:var(--rb);padding:13px 15px;position:relative}
.atl2 .onb .st.go{background:var(--brand)}
.atl2 .onb .st .h{font-size:14.5px;font-weight:700;margin-bottom:3px}
.atl2 .onb .st .d{font-size:12px;color:#9FB6CA;margin-bottom:10px}
.atl2 .onb .st.go .d{color:#E4F2EA}
.atl2 .onb .st button{background:#22334A;color:#fff;border:0;border-radius:99px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer}
.atl2 .onb .st.go button{background:#0B1220}
.atl2 .onb .foot{margin-top:13px;font-size:12px;color:#9FB6CA}
.atl2 .onb .foot b{color:#fff}
.atl2 .row.locked{filter:blur(4px);pointer-events:none;user-select:none}
.atl2 .lockbar{flex:none;display:none;align-items:center;gap:14px;justify-content:center;padding:11px 14px;
  background:var(--ink);color:#fff;position:sticky;bottom:0;z-index:20}
.atl2 .lockbar.on{display:flex}
.atl2 .lockbar b{font-weight:600;font-size:13px}
.atl2 .lockbar button{background:#fff;color:var(--ink);border:0;border-radius:99px;padding:9px 18px;font-size:13px;font-weight:700;cursor:pointer}
.atl2 .lk{font-size:10px;opacity:.75;margin-right:3px}
.atl2 .c-vd{display:flex;flex-direction:column;gap:3px;align-items:flex-start;min-width:0}
.atl2 .vd{display:inline-flex;align-items:center;font-size:10px;font-weight:700;border-radius:var(--rs);
  padding:3px 8px;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis;letter-spacing:.01em}
.atl2 .vd.v-ok{background:var(--brand);color:#fff}
.atl2 .vd.v-no{background:var(--red);color:#fff}
.atl2 .vd.call{background:#E4F2EA;color:#0A6B3D;box-shadow:inset 0 0 0 1px #B6DCC6}
.atl2 .vd.v-yes{background:#7C3AED;color:#fff}
.atl2 .vd.v-pass,.atl2 .vd.v-no2{background:#FEE2E2;color:#B91C1C;box-shadow:inset 0 0 0 1px #F5C2C2}
.atl2 .vd.v-cons{background:#EFF6FF;color:#1D4ED8;box-shadow:inset 0 0 0 1px #C7DDFA}
.atl2 .vd.v-mon{background:var(--panel3);color:var(--muted);box-shadow:inset 0 0 0 1px var(--line)}
.atl2 .vd.wait{background:none;color:var(--dim);font-weight:500;font-style:italic;padding-left:0}
.atl2 .c-sc{font-family:var(--mono);font-size:12px;font-weight:700;text-align:right}
.atl2 .c-sc s{text-decoration:none;font-size:8.5px;color:var(--dim)}
.atl2 .stbtn{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--c);color:var(--tc,var(--c));
  background:var(--bgc,var(--panel));border-radius:var(--r);padding:5px 10px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .memobtn{background:var(--blue);color:#fff;border:0;border-radius:var(--ra);padding:6px 11px;font-size:11.5px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .memobtn:hover{filter:brightness(1.1)}
.atl2 .yn{display:flex;gap:4px}
.atl2 .ynb{border-radius:var(--ra);padding:5px 10px;font-size:11.5px;font-weight:700;cursor:pointer;
  border:1.5px solid var(--c);background:var(--panel);color:var(--c);white-space:nowrap}
.atl2 .ynb.oui{--c:#0A6B3D}
.atl2 .ynb.non{--c:var(--red)}
.atl2 .ynb:hover{background:var(--c);color:#fff}
.atl2 .ticker{flex:none;display:flex;height:46px;background:#0B1220;color:#fff;border-bottom:1px solid #1E293B}
.atl2 .ticker .lbl{flex:none;display:flex;align-items:center;gap:9px;padding:0 17px;background:var(--red);
  font-family:var(--mono);font-size:10.5px;letter-spacing:.2em;font-weight:700;
  box-shadow:1px 0 0 rgba(255,255,255,.16)}
.atl2 .ticker .lbl .cnt{font-size:10px;letter-spacing:0;font-weight:700;background:rgba(255,255,255,.24);
  border-radius:var(--rs);padding:1px 7px;min-width:22px;text-align:center}
.atl2 .tk.quiet{color:#7E97B2;font-size:12.5px;cursor:default;border:0}
.atl2 .ticker .lbl i{width:7px;height:7px;border-radius:50%;background:#fff;animation:atl2-blink 1.6s infinite}
@keyframes atl2-blink{0%,100%{opacity:1}50%{opacity:.2}}
.atl2 .ticker .win{flex:1;min-width:0;overflow:hidden;mask-image:linear-gradient(90deg,transparent,#000 26px,#000 calc(100% - 26px),transparent)}
.atl2 .ticker .run{display:flex;width:max-content;animation:atl2-roll 140s linear infinite}
.atl2 .ticker:hover .run{animation-play-state:paused}
@keyframes atl2-roll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.atl2 .tk{display:flex;align-items:center;gap:11px;flex:none;padding:0 20px;height:46px;background:none;border:0;
  border-right:1px solid #22334A;white-space:nowrap;cursor:pointer;transition:background .12s}
.atl2 .tk:hover{background:#16233A}
.atl2 .tk .sig{flex:none}
.atl2 .tk .sigwin{margin:0;font-size:10.5px;color:#9FB6CA}
.atl2 .tk .sigwin .gg i{background:rgba(255,255,255,.18)}
.atl2 .tk .sigwin .gg i.on{background:#9FB6CA}
.atl2 .tk .sigwin.hot{color:#FCA5A5;font-weight:600}
.atl2 .tk .sigwin.hot .gg i.on{background:#FCA5A5}
.atl2 .tk .sigwin a{display:none}
.atl2 .tk .tkfl{width:21px;height:16px;object-fit:cover;border-radius:var(--rs);flex:none;
  box-shadow:0 0 0 1px rgba(255,255,255,.22)}
.atl2 .tk .who{display:flex;align-items:center;gap:7px;flex:none}
.atl2 .tk .co{font-weight:700;font-size:15px;color:#fff;letter-spacing:-.015em}
.atl2 .tk .what{font-size:12.5px;color:#AFC2D3}
.atl2 .tk .am{font-family:var(--mono);font-size:13px;color:#fff;font-weight:600;
  background:rgba(255,255,255,.09);border-radius:var(--rs);padding:3px 8px}
.atl2 .tk .mt{font-size:11px;color:#B7C9D8;border:1px solid rgba(255,255,255,.2);border-radius:var(--rs);
  padding:2px 8px;letter-spacing:.01em}
.atl2 .tk .ang{font-family:var(--mono);font-size:8px;letter-spacing:.12em;color:#FDBA74;
  border:1px solid rgba(253,186,116,.4);border-radius:var(--rs);padding:2px 7px}
.atl2 .tk .tkgo{font-size:13px;color:#4A6379;transition:color .12s,transform .12s}
.atl2 .tk:hover .tkgo{color:#fff;transform:translateX(3px)}
.atl2 .tk.spent{opacity:.32}
.atl2 .tk.spent .co{color:#94A3B8}
.atl2 .tk .ty.sig{background:#F9A8D4}
.atl2 .goal{flex:none;display:flex;align-items:center;gap:9px 14px;padding:6px 14px;background:var(--panel);
  border-bottom:1px solid var(--line);flex-wrap:wrap}
.atl2 .gtxt{font-size:15px;font-weight:500;color:var(--ink)}
.atl2 .gtxt b{font-weight:700;font-size:17px}
.atl2 .gtxt .ok{color:var(--brand-d);font-weight:700}
.atl2 .gtxt a{color:var(--muted);cursor:pointer;text-decoration:underline;text-underline-offset:3px}
.atl2 .gtxt a:hover{color:var(--ink)}
.atl2 .pbar{flex:1;min-width:90px;max-width:200px;height:6px;background:var(--panel3);border-radius:99px;overflow:hidden}
.atl2 .pbar i{display:block;height:100%;width:0;background:var(--brand);border-radius:99px;transition:width .45s cubic-bezier(.22,1,.36,1)}
.atl2 .pilebtn{background:var(--ink);color:#fff;border:0;border-radius:var(--ra);padding:9px 16px;font-size:13px;
  font-weight:700;cursor:pointer;white-space:nowrap;flex:none}
.atl2 .pilebtn:hover{background:#000}
.atl2 .pilebtn[hidden]{display:none}
.atl2 .gxtra{font-size:12.5px;color:var(--muted)}
.atl2 .gspace{flex:1}
.atl2 .conts{flex:none;display:flex;background:var(--panel);border-bottom:1px solid var(--line);overflow-x:auto}
.atl2 .cbtn{display:flex;align-items:center;gap:7px;background:none;border:0;border-bottom:2.5px solid transparent;
  padding:5px 14px;cursor:pointer;font-size:12.5px;color:var(--muted);white-space:nowrap}
.atl2 .cbtn:hover{background:var(--panel2);color:var(--ink)}
.atl2 .cbtn[aria-selected="true"]{color:var(--ink);font-weight:700;border-bottom-color:var(--ink)}
.atl2 .cbtn .n{font-family:var(--mono);font-size:9.5px;background:var(--panel3);border-radius:var(--rs);padding:1px 7px;color:var(--muted)}
.atl2 .cbtn.hint{background:var(--brand-l);color:var(--brand-d);font-weight:700}
.atl2 .cbtn.hint .n{background:var(--brand);color:#fff}
.atl2 .cbtn[aria-selected="true"] .n{background:var(--ink);color:#fff}
.atl2 .conts .side{margin-left:auto;display:flex;align-items:center;flex:none}
.atl2 .conts .side button{background:none;border:0;border-left:1px solid var(--line);padding:0 14px;height:100%;
  font-family:var(--mono);font-size:9px;letter-spacing:.1em;color:var(--muted);cursor:pointer}
.atl2 .conts .side button:hover{color:var(--ink)}
.atl2 .mapzone{flex:1;min-width:0;position:relative;background:var(--sea);overflow:hidden}
.atl2 .mapzone svg{width:100%;height:100%;display:block}
.atl2 .ct path{fill:var(--land);stroke:var(--landline);stroke-width:.55;transition:fill .12s}
.atl2 .ct.empty path{fill:var(--empty);stroke:var(--emptyline)}
.atl2 .ct:hover path{fill:#F0F7FC}
.atl2 g.co{cursor:pointer;transition:opacity .16s}
.atl2 g.co circle.h{fill:#000;fill-opacity:0;pointer-events:all}
.atl2 g.co circle.v{pointer-events:none;stroke:#fff;stroke-opacity:.92}
.atl2 g.co.off{opacity:.05;pointer-events:none}
.atl2 g.co.done circle.v{fill-opacity:.32;stroke-opacity:.4}
.atl2 g.co:hover circle.v{stroke:var(--ink);stroke-opacity:1}
.atl2 .ring{pointer-events:none;opacity:0}
.atl2 .ring.on{opacity:1}
.atl2 .hov{position:absolute;pointer-events:none;opacity:0;z-index:6;background:var(--ink);color:#fff;padding:5px 9px;
  border-radius:var(--r);font-family:var(--mono);font-size:10px;white-space:nowrap;transform:translate(-50%,-165%)}
.atl2 .hov.on{opacity:1}
.atl2 .legend{position:absolute;left:10px;bottom:9px;display:flex;align-items:center;gap:11px;z-index:4;opacity:.4;
  transition:opacity .15s;font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;color:var(--ink)}
.atl2 .legend:hover{opacity:1}
.atl2 .legend span{display:flex;align-items:center;gap:5px}
.atl2 .legend i{width:7px;height:7px;border-radius:50%;background:var(--c)}
.atl2 .legend b{font-weight:600}
.atl2 .fzone{position:relative;flex:none;z-index:25;display:flex;flex-direction:column}
.atl2 .stage{display:flex;height:30vh;min-height:316px;max-height:38vh;
  border-bottom:1px solid var(--line);transition:height .2s}
.atl2 .stage.folded{height:auto;min-height:0}
.atl2 .stage.folded .mapzone{display:none}
.atl2 .frail{width:var(--rail);flex:none;background:var(--panel);border-left:1px solid var(--line);
  display:flex;flex-direction:column;gap:0;padding:11px 10px;overflow-y:auto;overflow-x:hidden}
.atl2 .stage.folded .frail{width:auto;flex:1;border-left:0;flex-direction:row;flex-wrap:wrap;
  align-items:center;overflow:visible;padding:9px 12px;gap:7px}
.atl2 .stage.folded .frail .cap{margin:0 1px 0 0;line-height:1;align-self:center}
.atl2 .stage.folded .frail .cap+*{margin-bottom:0}
.atl2 .stage.folded .frail .statusf{margin-bottom:0;flex-direction:row}
.atl2 .stage.folded .frail .dates,.atl2 .stage.folded .frail .fgrid{align-self:center}
.atl2 .stage.folded .frail .sep2{width:1px;height:20px;background:var(--line);flex:none;margin:0 3px}
.atl2 .frail .cap{font-family:var(--mono);font-size:7.5px;letter-spacing:.16em;color:var(--dim);
  padding:0 1px;line-height:1.4;margin-bottom:7px}
.atl2 .frail .cap+*{margin-bottom:15px}
.atl2 .frail .fgrid{margin-bottom:0}
.atl2 .sig{display:inline-flex;align-items:center;gap:6px;background:var(--red);color:#fff;border-radius:var(--rs);
  padding:3px 9px;font-size:11px;font-weight:600;white-space:nowrap;line-height:1.5;letter-spacing:.01em;
  font-family:var(--body);border:0}
.atl2 .sig-lg{font-size:12.5px;padding:5px 12px;gap:7px}
.atl2 .sig-o{background:transparent;color:var(--red);box-shadow:inset 0 0 0 1px #F0B4B4}
.atl2 .sig-o:hover{box-shadow:inset 0 0 0 1px var(--red)}
.atl2 .sigwin{display:block;margin-top:3px;font-style:normal;
  font-family:var(--body);font-size:11px;color:var(--muted);line-height:1.3}
.atl2 .sigwin .gg{display:flex;gap:2px;flex:none}
.atl2 .sigwin .gg i{width:5px;height:3px;border-radius:1px;background:var(--line2)}
.atl2 .sigwin .gg i.on{background:var(--muted)}
.atl2 .sigwin .lb{white-space:nowrap}
.atl2 .sigwin a{color:var(--dim);text-decoration:none;font-size:11px;line-height:1}
.atl2 .sigwin a:hover{color:var(--ink)}
.atl2 .sigwin.hot{color:var(--red);font-weight:600}
.atl2 .sigwin.hot .gg i.on{background:var(--red)}
.atl2 .sigwin a{color:inherit;text-decoration:none;border-bottom:1px dotted currentColor;opacity:.7}
.atl2 .sigwin a:hover{opacity:1}
.atl2 .sigstrip{display:flex;align-items:center;gap:12px;padding:10px 14px;background:#FEF2F2;
  border-bottom:1px solid #FCD9D9;flex-wrap:wrap}
.atl2 .sigstrip .t{font-size:13.5px;font-weight:700;color:#B91C1C}
.atl2 .sigstrip .s{font-size:12.5px;color:#9F5A5A}
.atl2 .sigstrip button{margin-left:auto;background:var(--red);color:#fff;border:0;border-radius:var(--ra);
  padding:7px 14px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .sigstrip button:hover{filter:brightness(1.1)}
.atl2 .sigstrip[hidden]{display:none}
.atl2 .fbtn.fsig{border-color:#F0B4B4;color:var(--red);grid-column:1 / -1}
.atl2 .fbtn.fsig:hover{border-color:var(--red)}
.atl2 .fbtn.fsig .cv{color:#E9A0A0}
.atl2 .fbtn.fsig .n{background:var(--red)}
.atl2 .fbtn.fsig[aria-expanded="true"]{background:var(--red);border-color:var(--red);color:#fff}
.atl2 .fbtn.fsig[aria-expanded="true"] .n{background:#fff;color:var(--red)}
.atl2 .opt .sig{pointer-events:none}
.atl2 .statusf{display:flex;flex-direction:column;gap:5px;margin-bottom:15px}
.atl2 .statusf[hidden]{display:none}
.atl2 .statusf button{display:flex;align-items:center;gap:7px;border:1px solid var(--line);background:var(--panel);
  border-radius:var(--r);padding:0 10px;height:28px;font-size:11.5px;color:var(--muted);cursor:pointer;text-align:left}
.atl2 .statusf button:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .statusf button[aria-pressed="true"]{background:var(--ink);border-color:var(--ink);color:#fff;font-weight:600}
.atl2 .statusf button b{margin-left:auto;font-family:var(--mono);font-size:9px;font-weight:700;
  background:var(--panel3);color:var(--muted);border-radius:var(--rs);padding:1px 6px}
.atl2 .statusf button[aria-pressed="true"] b{background:rgba(255,255,255,.22);color:#fff}
.atl2 .statusf{gap:5px}
.atl2 .stage.folded .statusf{flex-direction:row}
.atl2 .stage.folded .sigtypes{display:none}
.atl2 .dates{display:flex;flex-direction:column;flex:none;border:1px solid var(--line);border-radius:var(--r);overflow:hidden}
.atl2 .dates button{display:flex;align-items:center;gap:9px;width:100%;height:28px;padding:0 10px;background:var(--panel);
  border:0;border-bottom:1px solid var(--line);cursor:pointer;font-family:var(--body);font-size:11.5px;
  font-weight:600;color:var(--muted);text-align:left}
.atl2 .dates button:last-child{border-bottom:0}
.atl2 .dates button:hover{background:var(--panel2);color:var(--ink)}
.atl2 .dates button .rd{width:10px;height:10px;border-radius:50%;border:1.5px solid var(--line2);flex:none;position:relative}
.atl2 .dates button[aria-pressed="true"]{background:var(--ink);color:#fff}
.atl2 .dates button[aria-pressed="true"] .rd{border-color:#fff}
.atl2 .dates button[aria-pressed="true"] .rd::after{content:"";position:absolute;inset:2px;border-radius:50%;background:#fff}
.atl2 .dates button .dn{margin-left:auto;font-family:var(--mono);font-size:9.5px;color:var(--muted);font-weight:700;
  background:var(--panel3);border-radius:var(--rs);padding:1px 6px}
.atl2 .dates button[aria-pressed="true"] .dn{background:rgba(255,255,255,.22);color:#fff}
.atl2 .stage.folded .dates{flex-direction:row;align-items:center;gap:0;border-radius:var(--r)}
.atl2 .stage.folded .dates .dbh{display:none}
.atl2 .stage.folded .dates button{width:auto;height:28px;padding:0 11px;border-bottom:0;
  border-right:1px solid var(--line);white-space:nowrap;font-size:11.5px}
.atl2 .stage.folded .dates button:last-child{border-right:0}
.atl2 .frow{display:flex;gap:5px;flex-wrap:wrap;min-width:0}
.atl2 .frow .alertbtn{flex:1 1 84px}
.atl2 .frow .resetbtn{flex:0 0 auto}
.atl2 .fgrid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.atl2 .stage.folded .fgrid{display:flex;gap:4px}
.atl2 .stage.folded .fbtn.fsig{grid-column:auto}
.atl2 .fbtn{display:flex;align-items:center;gap:7px;background:var(--panel);border:1px solid var(--line);
  border-radius:var(--r);padding:0 10px;height:28px;cursor:pointer;font-family:var(--body);font-size:11.5px;
  font-weight:600;color:var(--muted);white-space:nowrap;overflow:hidden;text-align:left}
.atl2 .fbtn:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .fbtn .sp{flex:1}
.atl2 .fbtn .cv{font-size:8px;color:var(--dim);transition:transform .14s}
.atl2 .fbtn .n{background:var(--ink);color:#fff;border-radius:var(--rs);padding:1px 6px;
  font-family:var(--mono);font-size:9px;font-weight:700}
.atl2 .fbtn .n[hidden]{display:none}
.atl2 .fbtn[aria-expanded="true"]{background:var(--ink);border-color:var(--ink);color:#fff}
.atl2 .fbtn[aria-expanded="true"] .cv{color:#fff;transform:rotate(-90deg)}
.atl2 .fbtn[aria-expanded="true"] .n{background:#fff;color:var(--ink)}
.atl2 .alertbtn{background:var(--brand);color:#fff;border:0;border-radius:var(--ra);height:30px;padding:0 10px;font-size:11.5px;
  font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.atl2 .alertbtn:hover{background:var(--brand-d)}
.atl2 .resetbtn{display:none;align-items:center;gap:5px;background:var(--panel);border:1px dashed var(--line2);
  border-radius:var(--ra);height:30px;padding:0 10px;font-family:var(--body);font-size:11.5px;font-weight:600;
  color:var(--muted);cursor:pointer;white-space:nowrap}
.atl2 .resetbtn.on{display:flex}
.atl2 .resetbtn:hover{border-style:solid;border-color:var(--ink);color:var(--ink)}
.atl2 .resetbtn .rot{display:inline-block;font-size:12px}
.atl2 .resetbtn.spin .rot{animation:atl2-spin .5s ease}
@keyframes atl2-spin{from{transform:rotate(0)}to{transform:rotate(-360deg)}}
.atl2 .frail .grow{flex:1}
.atl2 .stage.folded .frail .grow{display:none}
.atl2 .fpanel{position:absolute;right:var(--rail);top:0;width:min(640px,calc(100% - var(--rail) - 10px));
  background:var(--panel);border-left:1px solid var(--line2);border-right:1px solid var(--line2);
  border-bottom:1px solid var(--line2);box-shadow:-16px 6px 34px rgba(15,23,42,.16);
  display:none;flex-direction:column;max-height:min(52vh,430px);z-index:30}
.atl2 .fpanel.on{display:flex}
.atl2 .stage.folded ~ .fpanel{right:0;left:0;top:100%;width:auto;border-left:0;border-right:0;
  box-shadow:0 20px 36px rgba(15,23,42,.16)}
.atl2 .fpanel .ph{display:flex;align-items:center;gap:10px;padding:9px 14px;border-bottom:1px solid var(--line);background:var(--panel2)}
.atl2 .fpanel .ph b{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em}
.atl2 .fpanel .ph .sp{flex:1}
.atl2 .fpanel .ph button{background:none;border:0;font-family:var(--mono);font-size:9px;letter-spacing:.1em;color:var(--muted);cursor:pointer;padding:3px 6px}
.atl2 .fpanel .ph button:hover{color:var(--ink)}
.atl2 .fcols{flex:1;min-height:0;overflow:auto;padding:10px 14px;columns:3;column-gap:16px}
.atl2 .fcols.two{columns:2}
.atl2 .opt{width:100%;display:flex;align-items:center;gap:8px;padding:5px 6px;background:none;border:0;cursor:pointer;
  text-align:left;font-size:12px;color:var(--muted);border-radius:var(--r);break-inside:avoid}
.atl2 .opt:hover{background:var(--panel2);color:var(--ink)}
.atl2 .opt .bx{width:12px;height:12px;border:1.5px solid var(--line2);border-radius:var(--rs);flex:none;position:relative}
.atl2 .opt[aria-pressed="true"] .bx{background:var(--brand);border-color:var(--brand)}
.atl2 .opt[aria-pressed="true"] .bx::after{content:"";position:absolute;left:2.8px;top:.4px;width:3.6px;height:6.4px;
  border:solid #fff;border-width:0 1.6px 1.6px 0;transform:rotate(42deg)}
.atl2 .opt[aria-pressed="true"]{color:var(--ink);font-weight:600}
.atl2 .opt .l{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}
.atl2 .opt .n{font-family:var(--mono);font-size:9px;color:var(--dim)}
.atl2 .fpanel .pf{border-top:1px solid var(--line);padding:10px 14px;background:var(--panel2);display:flex;align-items:center;gap:10px}
.atl2 .fpanel .pf .t{font-size:12px;color:var(--muted);flex:1}
.atl2 .no{width:21px;height:21px;border-radius:50%;background:var(--ink);color:#fff;display:inline-grid;place-items:center;
  font-family:var(--mono);font-size:11px;font-weight:700;flex:none}
.atl2 .no.g{background:var(--brand)}
.atl2 .demand{flex:none;background:var(--panel2);border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);padding:10px 14px}
.atl2 .drow{display:flex;align-items:stretch;gap:9px;flex-wrap:wrap}
.atl2 .dfield{flex:1;min-width:230px;position:relative;display:flex;align-items:center}
.atl2 .dfield input{width:100%;height:46px;background:var(--panel);border:1px solid var(--line2);
  border-radius:var(--ra);padding:0 100px 0 15px;font-size:15px;outline:none;transition:.14s;
  box-shadow:0 1px 2px rgba(15,23,42,.05)}
.atl2 .dfield input:focus{border-color:var(--brand);box-shadow:0 0 0 3px rgba(22,163,74,.15)}
.atl2 .dfield.pulse input{animation:atl2-pulse .7s ease}
@keyframes atl2-pulse{0%{box-shadow:0 0 0 0 rgba(22,163,74,.45)}100%{box-shadow:0 0 0 12px rgba(22,163,74,0)}}
.atl2 .detect{position:absolute;right:13px;font-family:var(--mono);font-size:8.5px;letter-spacing:.1em;background:var(--panel3);
  color:var(--muted);border-radius:var(--rs);padding:3px 8px;pointer-events:none}
.atl2 .detect.url{background:var(--brand-l);color:var(--brand-d)}
.atl2 .dunder{margin-top:6px;display:flex}
.atl2 .memo{margin-top:12px;background:var(--panel);border:0;border-top:2px solid var(--ink);
  border-radius:0 0 var(--ra) var(--ra);overflow:hidden;box-shadow:0 6px 18px rgba(15,23,42,.07)}
.atl2 .memo[hidden]{display:none}
.atl2 .memo .mh{display:flex;align-items:center;gap:10px;padding:11px 16px 9px;background:var(--panel)}
.atl2 .memo .mh .nm{font-weight:700;font-size:14.5px}
.atl2 .memo .mh .vv{font-family:var(--mono);font-size:9px;letter-spacing:.12em;background:#EFF6FF;color:#1D4ED8;
  border-radius:var(--rs);padding:3px 8px;font-weight:700}
.atl2 .memo .mh .sp{flex:1}
.atl2 .memo .mh .x{background:none;border:0;font-size:18px;color:var(--dim);cursor:pointer}
.atl2 .memo .tabs2{display:flex;gap:0;border-bottom:1px solid var(--line);overflow-x:auto;background:var(--panel);padding:0 10px}
.atl2 .memo .tabs2 button{flex:none;background:none;border:0;border-bottom:2.5px solid transparent;padding:9px 15px;
  font-family:var(--mono);font-size:9px;letter-spacing:.12em;color:var(--muted);cursor:pointer;white-space:nowrap}
.atl2 .memo .tabs2 button:hover{color:var(--ink)}
.atl2 .memo .tabs2 button[aria-selected="true"]{border-bottom-color:var(--blue);color:var(--ink);font-weight:700}
.atl2 .memo .mb2{padding:15px 16px 17px;max-height:240px;overflow:auto;font-size:13.5px;line-height:1.65;color:var(--muted)}
.atl2 .memo .mb2 b{color:var(--ink)}
.atl2 .memo .mb2 ul{margin:0;padding:0;list-style:none}
.atl2 .memo .mb2 li{position:relative;padding-left:16px;margin-bottom:6px}
.atl2 .memo .mb2 li::before{content:"—";position:absolute;left:0;color:var(--brand)}
.atl2 .memo .msyn{width:100%;border-collapse:collapse;font-size:12.5px}
.atl2 .memo .msyn td{padding:6px 0;border-bottom:1px solid var(--line)}
.atl2 .memo .msyn td:last-child{text-align:right;font-family:var(--mono);font-weight:700;color:var(--ink)}
.atl2 .memo .msyn .tot td{border-bottom:0;font-weight:700;color:var(--ink)}
.atl2 .memo .msyn .tot td:last-child{color:var(--brand-d);font-size:14px}
.atl2 .memo .mf{display:flex;align-items:center;gap:12px;padding:11px 16px;border-top:1px solid var(--line);background:var(--panel2)}
.atl2 .memo .mf .t{flex:1;font-size:12px;color:var(--muted)}
.atl2 .memo .mf .go{background:var(--blue);color:#fff;border:0;border-radius:var(--ra);padding:10px 18px;
  font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .memo .mf .go:hover{filter:brightness(1.1)}
.atl2 .evalbtn{position:relative;overflow:hidden;background:var(--brand);color:#fff;border:0;border-radius:var(--ra);
  height:46px;padding:0 30px;flex:none;font-size:15px;font-weight:700;box-shadow:0 1px 2px rgba(15,23,42,.08);cursor:pointer;flex:none;display:flex;align-items:center;gap:8px}
.atl2 .evalbtn:hover{background:var(--brand-d)}
.atl2 .evalbtn[disabled]{opacity:.6;cursor:default}
.atl2 .evalbtn .fill{position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,255,255,.28)}
.atl2 .evalbtn.loading .fill{width:100%;transition:width 1.15s linear}
.atl2 .dmulti{background:none;border:0;font-size:12px;color:var(--muted);cursor:pointer;text-decoration:underline;text-underline-offset:3px;flex:none}
.atl2 .dmulti:hover{color:var(--brand-d)}
.atl2 .bulk{display:none;margin-top:10px;gap:9px;align-items:flex-start}
.atl2 .bulk.on{display:flex}
.atl2 .bulk textarea{flex:1;min-height:118px;overflow:hidden;border:1.5px solid var(--line2);border-radius:var(--ra);
  padding:11px 13px;font-size:13.5px;line-height:1.7;resize:none;outline:none;font-family:var(--mono)}
.atl2 .bulk textarea:focus{border-color:var(--brand)}
.atl2 .bulk .side{display:flex;flex-direction:column;gap:6px;flex:none;width:180px}
.atl2 .bulk .hint{font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;color:var(--dim);text-align:center}
.atl2 .result{display:none;margin-top:10px;border-radius:var(--r);border:1.5px solid var(--c);background:var(--bgc);
  padding:11px 14px;align-items:center;gap:14px;flex-wrap:wrap;animation:atl2-pop .22s ease}
.atl2 .result.on{display:flex}
@keyframes atl2-pop{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
.atl2 .result .vv{display:flex;align-items:center;gap:8px;flex:none}
.atl2 .result .vp{font-family:var(--mono);font-size:10px;letter-spacing:.14em;font-weight:700;color:#fff;
  background:var(--c);border-radius:var(--rs);padding:5px 10px}
.atl2 .result .vs{font-family:var(--mono);font-size:17px;font-weight:700;color:var(--c)}
.atl2 .result .vs s{text-decoration:none;font-size:10px;color:var(--muted)}
.atl2 .result .rn{font-weight:700;font-size:14px}
.atl2 .result .rr{flex:1;min-width:180px;font-size:12.5px;color:var(--muted)}
.atl2 .result .rr b{color:var(--ink);font-weight:600}
.atl2 .result .go{background:var(--c);color:#fff;border:0;border-radius:var(--ra);padding:8px 13px;font-size:11.5px;
  font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .tally{display:flex;align-items:center;gap:10px;margin-top:9px;font-family:var(--mono);font-size:9.5px;
  letter-spacing:.08em;color:var(--dim);flex-wrap:wrap}
.atl2 .tally b{color:var(--ink);font-weight:700;font-size:12px}
.atl2 .tally .k{color:var(--brand-d)}
.atl2 .tally .d{color:var(--red)}
.atl2 .tally a{color:var(--muted);text-decoration:underline;text-underline-offset:3px;cursor:pointer}
.atl2 .tally a:hover{color:var(--ink)}
.atl2 .mcard .fgrp{margin-bottom:14px}
.atl2 .mcard .fgrp label{display:block;font-size:12.5px;font-weight:600;margin-bottom:5px}
.atl2 .mcard .fgrp input{width:100%;border:1.5px solid var(--line2);border-radius:var(--ra);padding:11px 13px;font-size:14px;outline:none}
.atl2 .mcard .fgrp input:focus{border-color:var(--brand);box-shadow:0 0 0 3px var(--brand-l)}
.atl2 .mcard .fgrp .h{font-size:11.5px;color:var(--muted);margin-top:4px}
.atl2 .mcard .lead{font-size:13.5px;line-height:1.55;color:var(--ink);margin:0 0 16px}
.atl2 .mcard .lead b{font-weight:700}
.atl2 .mcard .ctx{background:var(--panel3);border-left:3px solid var(--brand);padding:10px 13px;border-radius:0 5px 5px 0;
  font-size:12.5px;margin-bottom:14px}
.atl2 .mcard .opt-more{background:none;border:0;color:var(--muted);font-size:12px;cursor:pointer;text-decoration:underline;
  text-underline-offset:3px;padding:0;margin-bottom:14px}
.atl2 .mcard .note{font-size:12px;color:var(--muted);margin:0 0 14px}
.atl2 .mcard .cta{width:100%;justify-content:center;padding:14px;font-size:14.5px}
.atl2 .groupbar{display:flex;align-items:center;gap:4px;margin-left:auto;flex:none}
.atl2 .groupbar .gl{font-family:var(--mono);font-size:7.5px;letter-spacing:.16em;color:var(--dim);margin-right:3px}
.atl2 .groupbar button{font-size:11.5px;background:var(--panel);border:1px solid var(--line);border-radius:var(--r);
  padding:5px 11px;cursor:pointer;color:var(--muted)}
.atl2 .groupbar button:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .groupbar button[aria-pressed="true"]{background:var(--ink);border-color:var(--ink);color:#fff;font-weight:600}
.atl2 .groupbar[hidden]{display:none}
.atl2 .subh{padding:9px 14px 7px;border-bottom:1px solid var(--line);background:#FBFDFE}
.atl2 .subh b{display:block;font-size:12.5px;font-weight:700}
.atl2 .subh span{font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--dim)}
.atl2 .listhead{flex:none;display:flex;align-items:baseline;gap:9px;padding:6px 14px;background:var(--panel2);
  border-bottom:1px solid var(--line);overflow:hidden}
.atl2 .listhead .main{font-size:13.5px;font-weight:600;color:var(--ink);white-space:nowrap;flex:none}
.atl2 .listhead .main b{font-size:17px;font-weight:700;letter-spacing:-.01em}
.atl2 .listhead .dot{color:var(--line2);flex:none}
.atl2 .listhead .ctx{font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;color:var(--dim);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1 1 auto}
.atl2 .listhead .chain{align-self:center;flex:none;margin-left:9px}
.atl2 .exitpile{background:none;border:1px solid var(--line2);border-radius:var(--r);padding:5px 10px;
  font-family:var(--mono);font-size:8.5px;letter-spacing:.1em;color:var(--muted);cursor:pointer;align-self:center}
.atl2 .exitpile:hover{border-color:var(--red);color:var(--red)}
.atl2 .exitpile[hidden]{display:none}
.atl2 .sp-tabs{display:flex;gap:6px;margin-bottom:14px}
.atl2 .sp-tab{display:flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:var(--ra);padding:8px 13px;
  font-size:12.5px;font-weight:600;background:var(--panel);cursor:pointer}
.atl2 .sp-tab[aria-selected="true"]{background:var(--c);border-color:var(--c);color:#fff}
.atl2 .sp-row{display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--line)}
.atl2 .sp-row:last-child{border-bottom:0}
.atl2 .sp-row .sc{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--c);flex:none;width:34px}
.atl2 .sp-row .nm{font-weight:700;font-size:13.5px}
.atl2 .sp-row .rr{font-size:12px;color:var(--muted);margin-top:2px}
.atl2 .sp-empty{padding:26px;text-align:center;font-size:13px;color:var(--muted)}
.atl2 .chain{margin-left:auto;background:var(--ink);color:#fff;border:0;border-radius:var(--ra);padding:8px 16px;font-size:12.5px;
  font-weight:700;cursor:pointer;display:flex;align-items:center;gap:7px}
.atl2 .chain:hover{background:#000}
.atl2 .chain .b{color:var(--brand)}
.atl2 .list{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;background:var(--panel)}
.atl2 .row>*{min-width:0}
.atl2 .grp-h{display:flex;align-items:center;gap:10px;padding:8px 14px;background:var(--panel3);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:3}
.atl2 .grp-h .ic{width:24px;height:24px;border-radius:var(--r);background:var(--ink);color:#fff;display:grid;place-items:center;font-size:12px}
.atl2 .grp-h .t{font-weight:700;font-size:13px}
.atl2 .grp-h .s{font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--muted)}
.atl2 .grp-h .go{margin-left:auto;background:var(--panel);border:1px solid var(--line2);border-radius:var(--ra);padding:6px 12px;
  font-size:11.5px;font-weight:600;cursor:pointer}
.atl2 .grp-h .go:hover{background:var(--ink);color:#fff;border-color:var(--ink)}
.atl2 .row,.atl2 .cols{display:grid;
  grid-template-columns:11px 30px minmax(260px,1fr) 86px 80px 168px 158px;
  gap:12px;align-items:center;padding:6px 14px}
.atl2 .c-vd,.atl2 .h-vd,.atl2 .c-sc,.atl2 .h-sc{display:none}
.atl2 .app.pipe .row,.atl2 .app.pipe .cols{grid-template-columns:11px 30px minmax(190px,1fr) 76px 70px 132px 140px 44px 146px 52px}
.atl2 .app.pipe .c-vd,.atl2 .app.pipe .h-vd{display:flex;flex-direction:column;gap:3px;align-items:flex-start;min-width:0}
.atl2 .app.pipe .c-sc,.atl2 .app.pipe .h-sc{display:flex;justify-content:flex-end}
.atl2 .nd{min-width:0;display:flex;align-items:baseline;gap:9px}
.atl2 .nd .rnm{font-weight:700;font-size:13.5px;flex:none;max-width:44%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .nd .rds{font-size:12.5px;color:var(--muted);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .c-amt{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--ink);text-align:right}
.atl2 .c-amt.none{color:var(--dim);font-weight:400}
.atl2 .c-flag{display:flex;align-items:center;justify-content:center}
.atl2 .c-flag img{width:24px;height:18px;object-fit:cover;border-radius:var(--rs);box-shadow:0 0 0 1px rgba(15,23,42,.12)}
.atl2 .c-flag .em{font-size:16px}
.atl2 .row{border-bottom:1px solid var(--line);cursor:pointer}
.atl2 .cols{flex:none;padding:0 14px;background:var(--panel2);border-bottom:1px solid var(--line);align-items:stretch}
.atl2 .cols>*{display:flex;align-items:center;font-family:var(--mono);font-size:8px;letter-spacing:.14em;
  color:var(--dim);background:none;border:0;padding:4px 0;text-align:left;min-width:0}
.atl2 .cols button{cursor:pointer;gap:4px}
.atl2 .cols button:hover{color:var(--ink)}
.atl2 .cols button .ar{opacity:0;font-size:9px}
.atl2 .cols button[aria-sort]:not([aria-sort="none"]){color:var(--ink);font-weight:700}
.atl2 .cols button[aria-sort]:not([aria-sort="none"]) .ar{opacity:1}
.atl2 .c-flag{display:flex;align-items:center;gap:5px;min-width:0}
.atl2 .c-flag .fl{font-size:15px;line-height:1}
.atl2 .c-flag .cc{font-family:var(--mono);font-size:8.5px;letter-spacing:.06em;color:var(--dim)}
.atl2 .c-stade{font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;color:var(--muted);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .card{display:none;padding:0 14px 16px;background:var(--panel2);border-bottom:1px solid var(--line)}
.atl2 .row.open+.card{display:grid;grid-template-columns:1fr 300px;gap:20px;padding-top:14px}
.atl2 .card .lead{font-style:italic;font-size:13px;margin:0 0 10px}
.atl2 .card ul{margin:0 0 11px;padding:0;list-style:none}
.atl2 .card li{position:relative;padding-left:16px;font-size:12.5px;color:var(--muted);margin-bottom:5px}
.atl2 .card li::before{content:"—";position:absolute;left:0;color:var(--brand)}
.atl2 .card .dec{background:#F3FAF6;border-left:3px solid var(--brand);padding:10px 12px;font-size:12.5px;
  margin-bottom:11px;border-radius:0 var(--r) var(--r) 0}
.atl2 .card .dec b{color:var(--brand-d)}
.atl2 .card .tg{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px}
.atl2 .card .tg span{font-size:10px;background:var(--panel3);border-radius:var(--rs);padding:3px 8px;color:var(--muted)}
.atl2 .card .im{font-family:var(--mono);font-size:9px;color:var(--dim);letter-spacing:.06em;margin-top:6px}
.atl2 .card .im b{color:var(--ink);font-weight:600;font-family:var(--body);font-size:12px;letter-spacing:0}
.atl2 .cside{background:var(--panel);border:1px solid var(--line);border-radius:var(--r);padding:13px}
.atl2 .cside .lb{font-family:var(--mono);font-size:8px;letter-spacing:.16em;color:var(--dim);display:block;margin-bottom:6px}
.atl2 .cside .blk{margin-bottom:13px}
.atl2 .cside .blk:last-child{margin-bottom:0}
.atl2 .cside .sc2{font-size:22px;font-weight:700}
.atl2 .cside .sc2 s{text-decoration:none;font-size:11px;color:var(--dim)}
.atl2 .cside .found{font-size:11.5px;color:var(--muted);line-height:1.5}
.atl2 .cside .found b{color:var(--ink)}
.atl2 .cside .btn{width:100%;border-radius:var(--ra);padding:9px;font-size:12px;font-weight:600;cursor:pointer;
  border:0;margin-bottom:6px;display:flex;align-items:center;justify-content:center;gap:6px}
.atl2 .cside .btn.p{background:var(--blue);color:#fff}
.atl2 .cside .btn.g{background:var(--panel);color:var(--ink);border:1px solid var(--line2)}
.atl2 .cside .btn.d{background:var(--ink);color:#fff}
.atl2 .stsw{display:flex;flex-wrap:wrap;gap:3px}
.atl2 .stsw button{font-size:10.5px;border:1px solid var(--line);background:var(--panel);color:var(--muted);
  padding:4px 8px;border-radius:var(--rs);cursor:pointer}
.atl2 .stsw button[aria-pressed="true"]{background:var(--c);border-color:var(--c);color:var(--tc,#fff);font-weight:700}
.atl2 .thumbs{display:flex;gap:6px}
.atl2 .thumbs button{border:1px solid var(--line);background:var(--panel);border-radius:var(--rs);padding:4px 9px;cursor:pointer}
@media (max-width:960px){
.atl2 .row.open+.card{grid-template-columns:1fr}}
.atl2 .moregrp{width:100%;padding:11px 14px;background:var(--panel2);border:0;border-bottom:1px solid var(--line);
  font-family:var(--mono);font-size:9.5px;letter-spacing:.11em;color:var(--muted);cursor:pointer;text-align:left}
.atl2 .moregrp:hover{color:var(--ink);background:var(--panel3)}
.atl2 .c-sig{min-width:0;display:flex;flex-direction:column;gap:0;align-items:flex-start}
.atl2 .c-sig .mo{font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;color:var(--muted);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}
.atl2 .c-sig .win{display:block;font-style:normal;font-family:var(--mono);font-size:8.5px;letter-spacing:.06em;color:var(--dim);margin-top:4px}
.atl2 .c-sig .sig{max-width:100%;overflow:hidden}
.atl2 .row:hover,.atl2 .row.on{background:#F6FBF8}
.atl2 .row.on{box-shadow:inset 3px 0 0 var(--brand)}
.atl2 .pt{width:11px;height:11px;border-radius:50%;background:var(--c)}
.atl2 .rnm{font-weight:700;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .rds{font-size:12px;color:var(--muted);line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.atl2 .rc{font-family:var(--mono);font-size:9.5px;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .rc em{display:block;font-style:normal;color:var(--dim);font-size:8.5px;margin-top:2px}
.atl2 .rev{position:relative;overflow:hidden;background:var(--brand);color:#fff;border:0;border-radius:var(--ra);padding:8px 10px;
  font-size:11.5px;font-weight:700;cursor:pointer;width:100%;display:flex;align-items:center;justify-content:center;gap:6px;
  white-space:nowrap}
.atl2 .cell{min-width:0}
.atl2 .cell>*{white-space:nowrap}
.atl2 .memobtn,.atl2 .stbtn,.atl2 .ynb{white-space:nowrap}
.atl2 .rev:hover{background:var(--brand-d)}
.atl2 .rev .fill{position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,255,255,.3)}
.atl2 .rev.loading .fill{width:100%;transition:width 1.15s linear}
.atl2 .verdict{display:flex;align-items:center;justify-content:center;gap:5px;border-radius:var(--r);padding:7px 6px;
  font-family:var(--mono);font-size:9px;letter-spacing:.08em;font-weight:700;border:1px solid var(--c);color:var(--c);background:var(--panel)}
.atl2 .verdict b{font-family:var(--body);font-size:11px}
.atl2 .artic{display:flex;gap:12px;align-items:flex-start;padding:12px 14px;border-bottom:1px solid var(--line)}
.atl2 .artic .kind{font-family:var(--mono);font-size:8px;letter-spacing:.12em;border-radius:var(--rs);padding:3px 7px;flex:none;
  background:var(--panel3);color:var(--muted);font-weight:600}
.atl2 .artic .kind.new{background:var(--brand);color:#fff}
.atl2 .artic .body{flex:1;min-width:0}
.atl2 .artic .ti{font-weight:600;font-size:13.5px;line-height:1.35;margin-bottom:3px}
.atl2 .artic .me{font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--dim)}
.atl2 .artic .acts{display:flex;gap:6px;flex:none;flex-wrap:wrap;justify-content:flex-end}
.atl2 .abtn{background:var(--panel);border:1px solid var(--line2);border-radius:var(--ra);padding:7px 12px;font-size:11.5px;font-weight:600;cursor:pointer;white-space:nowrap}
.atl2 .abtn:hover{background:var(--ink);color:#fff;border-color:var(--ink)}
.atl2 .abtn.p{background:var(--brand);border-color:var(--brand);color:#fff}
.atl2 .abtn.p:hover{background:var(--brand-d)}
.atl2 .void{padding:48px;text-align:center;font-family:var(--mono);font-size:10px;letter-spacing:.12em;color:var(--dim)}
.atl2 .fin{padding:34px 20px;text-align:center}
.atl2 .fin .em{font-size:30px}
.atl2 .fin .t{font-weight:700;font-size:16px;margin:8px 0 4px}
.atl2 .fin .s{font-size:13px;color:var(--muted)}
.atl2 .pop{position:fixed;width:322px;z-index:60;opacity:0;pointer-events:none;background:var(--panel);border:1px solid var(--line2);
  border-radius:var(--r);box-shadow:0 18px 48px rgba(15,23,42,.24);transition:opacity .11s}
.atl2 .pop.on{opacity:1;pointer-events:auto}
.atl2 .pop .ph{padding:13px 15px 10px;border-bottom:1px solid var(--line);display:flex;gap:9px;align-items:flex-start}
.atl2 .pop .ph h3{margin:0;font-size:17px;font-weight:700;flex:1;letter-spacing:-.01em}
.atl2 .pop .ph .id{display:block;font-family:var(--mono);font-size:8px;letter-spacing:.1em;color:var(--dim);margin-top:3px;font-weight:400}
.atl2 .pop .x{background:none;border:0;font-size:19px;color:var(--dim);cursor:pointer;line-height:1}
.atl2 .pop .pb{padding:12px 15px;max-height:min(38vh,320px);overflow:auto}
.atl2 .tags{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:11px}
.atl2 .tags span{font-family:var(--mono);font-size:8.5px;letter-spacing:.1em;border:1px solid var(--line);color:var(--muted);padding:4px 7px;border-radius:var(--rs)}
.atl2 .tags span.hi{background:var(--panel3);color:var(--ink);font-weight:600}
.atl2 .fld{margin-bottom:12px}
.atl2 .fld:last-child{margin-bottom:0}
.atl2 .fld .l{font-family:var(--mono);font-size:8px;letter-spacing:.18em;color:var(--dim);display:block;margin-bottom:5px}
.atl2 .fld p{margin:0;font-size:12.5px;line-height:1.5}
.atl2 .fld .memo{font-size:12px;color:var(--muted);border-left:2px solid var(--line);padding-left:10px}
.atl2 .pop .pf{padding:11px 15px;border-top:1px solid var(--line);background:var(--panel2)}
.atl2 .modal{position:fixed;inset:0;z-index:80;background:rgba(15,23,42,.55);display:none;align-items:center;justify-content:center;padding:20px}
.atl2 .modal.on{display:flex}
.atl2 .mcard{background:var(--panel);border-radius:var(--rb);width:min(560px,100%);max-height:88vh;display:flex;flex-direction:column;overflow:hidden}
.atl2 .mcard .mh{padding:15px 20px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:12px}
.atl2 .mcard .mh h2{margin:0;font-size:18px;font-weight:700;flex:1}
.atl2 .mcard .mh .x{background:none;border:0;font-size:21px;color:var(--dim);cursor:pointer}
.atl2 .mcard .mb{padding:18px 20px;overflow:auto;flex:1}
.atl2 .cs{display:flex;gap:13px;margin-bottom:20px}
.atl2 .cs .no{width:24px;height:24px;border-radius:50%;background:var(--ink);color:#fff;flex:none;
  display:grid;place-items:center;font-size:11.5px;font-weight:700}
.atl2 .cs h3{margin:0 0 5px;font-size:15px;font-weight:700}
.atl2 .cs p{margin:0 0 8px;font-size:13px;line-height:1.6;color:var(--muted)}
.atl2 .cs .hint{font-size:12px;color:var(--dim)}
.atl2 .cs ul,.atl2 .cs ol.abc{margin:0;padding:0;list-style:none}
.atl2 .cs li{position:relative;padding-left:17px;font-size:13px;color:var(--muted);margin-bottom:6px;line-height:1.5}
.atl2 .cs ul li::before{content:"—";position:absolute;left:0;color:var(--brand)}
.atl2 .cs ol.abc li{padding-left:24px}
.atl2 .cs ol.abc li b{position:absolute;left:0;color:var(--ink)}
.atl2 .acc{display:flex;align-items:center;justify-content:space-between;border:1px solid var(--line);
  border-radius:var(--r);padding:11px 14px;margin-bottom:6px;font-size:13.5px;cursor:pointer;background:var(--panel)}
.atl2 .acc:hover{border-color:var(--line2)}
.atl2 .acc span{color:var(--brand);font-weight:700}
.atl2 .two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.atl2 .two .dp{border:1px solid #C9E3D5;background:#F5FBF7;border-radius:var(--r);padding:12px}
.atl2 .two .dp.blue{border-color:#C7DDFA;background:#F5F9FF}
.atl2 .two .dp b{font-size:13px}
.atl2 .two .dp p{font-size:12px;margin:5px 0 0}
.atl2 .qrow{display:flex;align-items:center;gap:12px;border:1px solid var(--line);border-radius:var(--r);
  padding:11px 14px;margin-bottom:12px;font-size:13px}
.atl2 .qset{display:flex;align-items:center;gap:8px;margin-left:auto}
.atl2 .qset button{width:24px;height:24px;border:1px solid var(--line);background:var(--panel);border-radius:var(--rs);cursor:pointer}
.atl2 .qst{font-size:11px;color:#EA7C0B;border:1px solid #FDE4C7;background:#FFF7ED;border-radius:99px;padding:3px 10px}
.atl2 .qlist{border:1px solid var(--line);border-radius:var(--r);overflow:hidden;margin-bottom:12px}
.atl2 .qi{display:flex;align-items:center;gap:11px;padding:9px 13px;border-bottom:1px solid var(--line);font-size:13px}
.atl2 .qi:last-child{border-bottom:0}
.atl2 .qn{width:20px;height:20px;border-radius:50%;background:var(--panel3);display:grid;place-items:center;
  font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--muted)}
.atl2 .qs{margin-left:auto;font-family:var(--mono);font-size:11px;color:var(--muted)}
.atl2 .qe{font-family:var(--mono);font-size:9px;letter-spacing:.1em;color:var(--dim);width:62px;text-align:right}
@media (max-width:660px){
.atl2 .two{grid-template-columns:1fr}}
.atl2 .crit{border:1px solid var(--line);border-radius:var(--r);overflow:hidden;margin-bottom:16px}
.atl2 .crit .r{display:flex;gap:12px;padding:9px 13px;border-bottom:1px solid var(--line);font-size:12.5px}
.atl2 .crit .r:last-child{border-bottom:0}
.atl2 .crit .k{font-family:var(--mono);font-size:9px;letter-spacing:.12em;color:var(--dim);width:112px;flex:none;padding-top:2px}
.atl2 .crit .v{flex:1;font-weight:500}
.atl2 .crit .v em{font-style:normal;color:var(--muted);font-weight:400}
.atl2 .mfield{display:flex;gap:8px}
.atl2 .mfield input{flex:1;border:1.5px solid var(--line2);border-radius:var(--ra);padding:12px 13px;font-size:14px;outline:none}
.atl2 .mfield input:focus{border-color:var(--brand);box-shadow:0 0 0 3px var(--brand-l)}
.atl2 .mnote{font-size:12px;color:var(--muted);margin:12px 0 0}
.atl2 .fcard{background:var(--panel);border-radius:var(--rb);width:min(660px,100%);max-height:88vh;display:flex;flex-direction:column;overflow:hidden}
.atl2 .fcard .fh{padding:12px 18px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:12px}
.atl2 .fcard .fh .p{flex:1;height:6px;background:var(--panel3);border-radius:99px;overflow:hidden}
.atl2 .fcard .fh .p i{display:block;height:100%;background:var(--brand);border-radius:99px;transition:width .3s}
.atl2 .fcard .fh .c{font-family:var(--mono);font-size:10px;letter-spacing:.1em;color:var(--muted)}
.atl2 .fcard .fh .x{background:none;border:0;font-size:20px;color:var(--dim);cursor:pointer}
.atl2 .fcard .fb{padding:20px 22px;overflow:auto;flex:1}
.atl2 .fcard h2{margin:0 0 4px;font-size:25px;font-weight:700;letter-spacing:-.02em}
.atl2 .fcard .sub{font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;color:var(--dim);margin-bottom:14px}
.atl2 .fcard .ff{padding:14px 18px;border-top:1px solid var(--line);background:var(--panel2);display:flex;gap:9px}
.atl2 .vbox{border-radius:var(--rb);padding:16px;display:flex;align-items:center;gap:14px;border:2px solid var(--c);background:var(--panel)}
.atl2 .vbox .vs{font-size:30px;font-weight:800;color:var(--c);line-height:1}
.atl2 .vbox .vt{font-weight:700;font-size:15px;color:var(--c)}
.atl2 .vbox .vd{font-size:12.5px;color:var(--muted)}
.atl2 .plus{position:fixed;z-index:90;font-weight:800;font-size:22px;color:var(--brand);pointer-events:none;animation:atl2-up 1s ease forwards}
@keyframes atl2-up{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-46px)}}
@media (max-width:1440px){
.atl2 .row,.atl2 .cols{grid-template-columns:11px 30px minmax(230px,1fr) 84px 162px 154px}
.atl2 .app.pipe .row,.atl2 .app.pipe .cols{grid-template-columns:11px 30px minmax(172px,1fr) 70px 128px 136px 42px 142px 52px}
.atl2 .c-stade,.atl2 .h-stade{display:none}}
@media (max-width:1200px){
.atl2 .row,.atl2 .cols{grid-template-columns:11px 30px minmax(200px,1fr) 158px 150px}
.atl2 .app.pipe .row,.atl2 .app.pipe .cols{grid-template-columns:11px 30px minmax(155px,1fr) 126px 132px 40px 138px 52px}
.atl2 .c-amt,.atl2 .h-amt{display:none}}
@media (max-width:900px){
.atl2 .stage{flex-direction:column;height:auto;min-height:0;max-height:none}
.atl2 .mapzone{height:26vh;min-height:150px;flex:none}
.atl2 .frail{width:auto;flex:1;border-left:0;border-top:1px solid var(--line);
    flex-direction:row;flex-wrap:wrap;align-items:center;overflow:visible;padding:9px 10px;gap:6px}
.atl2 .frail .cap{margin:0 1px 0 0;line-height:1;align-self:center}
.atl2 .frail .cap+*{margin-bottom:0}
.atl2 .frail .statusf{margin-bottom:0;flex-direction:row}
.atl2 .dates{flex-direction:row;flex-wrap:wrap;gap:4px}
.atl2 .dates .dbh{display:none}
.atl2 .dates button{width:auto;height:29px;padding:0 11px;border-bottom:0;border-right:1px solid var(--line);font-size:12px}
.atl2 .dates button .dn{margin-left:6px}
.atl2 .fgrid{display:flex;flex-wrap:wrap;gap:4px}
.atl2 .frail .grow{display:none}
.atl2 .frow{flex:1 1 auto;justify-content:flex-end}
.atl2 .fpanel{right:0;left:0;top:100%;width:auto;border-left:0;border-right:0;max-height:52vh;
    box-shadow:0 20px 36px rgba(15,23,42,.18)}
.atl2 .fcols{columns:2}
.atl2 .listhead{flex-wrap:wrap;overflow:visible}
.atl2 .listhead .ctx{flex:1 1 100%;order:3}
.atl2 .groupbar{margin-left:0}
.atl2 .row,.atl2 .cols{grid-template-columns:11px 26px 1fr 142px;gap:9px;padding:9px 11px}
.atl2 .app.pipe .row,.atl2 .app.pipe .cols{grid-template-columns:11px 26px 1fr 142px}
.atl2 .c-vd,.atl2 .h-vd,.atl2 .c-sc,.atl2 .h-sc{display:none}
.atl2 .c-amt,.atl2 .h-amt,.atl2 .c-stade,.atl2 .h-stade,.atl2 .c-sig,.atl2 .h-sig{display:none}
.atl2 .nd{flex-direction:column;align-items:flex-start;gap:2px}
.atl2 .nd .rnm{max-width:100%}
.atl2 .nd .rds{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.atl2 .demand{padding:10px 11px}
.atl2 .pop{width:calc(100vw - 20px);left:10px!important;top:auto!important;bottom:10px}
.atl2 .goal{gap:8px 12px;padding:9px 11px}
.atl2 .pbar{max-width:none}
.atl2 .sigstrip .s{display:none}
.atl2 .bulk{flex-direction:column}
.atl2 .bulk .side{width:100%}}
@media (max-width:560px){
.atl2 .mapzone{height:22vh;min-height:120px}
.atl2 .fcols{columns:1}
.atl2 .row,.atl2 .cols{grid-template-columns:11px 24px 1fr 92px;gap:8px}
.atl2 .cols>*{font-size:7.5px}
.atl2 .listhead .main{font-size:12.5px}
.atl2 .listhead .main b{font-size:15px}
.atl2 .chain{padding:7px 11px;font-size:11.5px}
.atl2 .fcard,.atl2 .mcard{width:100%;max-height:92vh}
.atl2 .fcard .ff{flex-direction:column}
.atl2 .fcard .ff .abtn{flex:1 1 auto}}
@media (prefers-reduced-motion:reduce){
.atl2,.atl2 *{transition:none!important;animation:none!important}}
.atl2 .fzone2{position:relative;flex:none;z-index:24}
.atl2 .fbar{display:flex;align-items:center;gap:7px;padding:9px 14px;background:var(--panel);
  border-bottom:1px solid var(--line);flex-wrap:wrap}
.atl2 .seg{display:flex;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;flex:none}
.atl2 .seg button{background:var(--panel);border:0;border-right:1px solid var(--line);height:30px;padding:0 11px;
  font-size:11.5px;font-weight:600;color:var(--muted);cursor:pointer;display:flex;align-items:center;gap:6px;white-space:nowrap}
.atl2 .seg button:last-child{border-right:0}
.atl2 .seg button:hover{background:var(--panel2);color:var(--ink)}
.atl2 .seg button b{font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--dim)}
.atl2 .seg button[aria-pressed="true"]{background:var(--ink);color:#fff}
.atl2 .seg button[aria-pressed="true"] b{color:#fff;opacity:.8}
.atl2 .fsep{width:1px;align-self:stretch;background:var(--line);margin:0 3px}
.atl2 .fsrch{display:flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:var(--r);
  padding:0 10px;height:30px;background:var(--panel);min-width:190px;flex:1 1 190px;max-width:280px}
.atl2 .fsrch input{border:0;outline:none;font-size:12.5px;flex:1;min-width:0;background:none}
.atl2 .fbtn{display:flex;align-items:center;gap:7px;background:var(--panel);border:1px solid var(--line);
  border-radius:var(--r);padding:0 11px;height:30px;cursor:pointer;font-size:11.5px;font-weight:600;
  color:var(--muted);white-space:nowrap;flex:none}
.atl2 .fbtn:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .fbtn .v{font-weight:400;color:var(--dim)}
.atl2 .fbtn .n{background:var(--ink);color:#fff;border-radius:var(--rs);padding:1px 6px;font-family:var(--mono);font-size:9px;font-weight:700}
.atl2 .fbtn .n[hidden]{display:none}
.atl2 .fbtn .cv{font-size:8px;color:var(--dim)}
.atl2 .fbtn[aria-expanded="true"]{background:var(--ink);border-color:var(--ink);color:#fff}
.atl2 .fbtn[aria-expanded="true"] .v,.atl2 .fbtn[aria-expanded="true"] .cv{color:rgba(255,255,255,.75)}
.atl2 .fbtn[aria-expanded="true"] .n{background:#fff;color:var(--ink)}
.atl2 .fbtn.fsig{border-color:#F0B4B4;color:var(--red)}
.atl2 .fbtn.fsig:hover{border-color:var(--red)}
.atl2 .fbtn.fsig .n{background:var(--red)}
.atl2 .fbtn.fsig[aria-expanded="true"]{background:var(--red);border-color:var(--red);color:#fff}
.atl2 .fbtn.fsig[aria-expanded="true"] .n{background:#fff;color:var(--red)}
.atl2 .fgrow{flex:1}
.atl2 .resetbtn{display:none;align-items:center;gap:5px;background:var(--panel);border:1px dashed var(--line2);
  border-radius:var(--ra);height:30px;padding:0 11px;font-size:11.5px;font-weight:600;color:var(--muted);
  cursor:pointer;white-space:nowrap;flex:none}
.atl2 .resetbtn.on{display:flex}
.atl2 .resetbtn:hover{border-style:solid;border-color:var(--ink);color:var(--ink)}
.atl2 .resetbtn .rot{display:inline-block;font-size:12px}
.atl2 .resetbtn.spin .rot{animation:atl2-spin .5s ease}
.atl2 .alertbtn{background:var(--brand);color:#fff;border:0;border-radius:var(--ra);height:30px;padding:0 13px;
  font-size:11.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;white-space:nowrap;flex:none}
.atl2 .alertbtn:hover{background:var(--brand-d)}
.atl2 .fpanel{position:absolute;left:0;right:0;top:100%;background:var(--panel);border-bottom:1px solid var(--line2);
  box-shadow:0 20px 36px rgba(15,23,42,.16);display:none;flex-direction:column;max-height:min(54vh,440px);z-index:30}
.atl2 .fpanel.on{display:flex}
.atl2 .fpanel .ph{display:flex;align-items:center;gap:10px;padding:9px 14px;border-bottom:1px solid var(--line);background:var(--panel2)}
.atl2 .fpanel .ph b{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em}
.atl2 .fpanel .ph .sp{flex:1}
.atl2 .fpanel .ph button{background:none;border:0;font-family:var(--mono);font-size:9px;letter-spacing:.1em;color:var(--muted);cursor:pointer;padding:3px 6px}
.atl2 .fpanel .ph button:hover{color:var(--ink)}
.atl2 .fcols{flex:1;min-height:0;overflow:auto;padding:10px 14px;columns:4;column-gap:16px}
.atl2 .fcols.two{columns:2}
.atl2 .fpanel .pf{border-top:1px solid var(--line);padding:10px 14px;background:var(--panel2);display:flex;align-items:center;gap:10px}
.atl2 .fpanel .pf .t{font-size:12px;color:var(--muted);flex:1}
.atl2 .act{flex:none;background:var(--panel2);border-bottom:1px solid var(--line);padding:9px 14px}
.atl2 .act[hidden]{display:none}
.atl2 .act .hd{display:flex;align-items:center;gap:12px;font-size:11.5px;font-weight:600;margin-bottom:7px;flex-wrap:wrap;color:var(--muted)}
.atl2 .act .hd .lg{display:flex;gap:11px;margin-left:auto;font-size:11px;font-weight:500}
.atl2 .act .hd .lg i{display:inline-block;width:8px;height:8px;border-radius:2px;margin-right:4px}
.atl2 .act .bars{display:flex;align-items:flex-end;gap:3px;height:44px}
.atl2 .act .bars .b{flex:1;display:flex;flex-direction:column;justify-content:flex-end;cursor:pointer;min-width:0}
.atl2 .act .bars .b:hover{opacity:.7}
.atl2 .act .bars .b i{display:block;width:100%}
.atl2 .act .ax{display:flex;justify-content:space-between;font-family:var(--mono);font-size:8.5px;color:var(--dim);margin-top:4px}
.atl2 .app:not(.pipe) .h-vd,.atl2 .app:not(.pipe) .h-sc,.atl2 .app:not(.pipe) .c-vd,.atl2 .app:not(.pipe) .c-sc{display:none}
.atl2 .cols{flex-wrap:nowrap}
.atl2 .cols>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .stage{display:flex}
.atl2 .fzone2{display:contents}
.atl2 .fbar{width:var(--rail,256px);flex:none;flex-direction:column;align-items:stretch;gap:5px;
  padding:11px 10px;background:var(--panel);border-left:1px solid var(--line);border-bottom:0;
  overflow-y:auto;overflow-x:hidden;flex-wrap:nowrap}
.atl2 .fbar .seg{display:grid;grid-template-columns:1fr 1fr;gap:5px;border:0;border-radius:0;overflow:visible}
.atl2 .fbar .seg button{border:1px solid var(--line);border-radius:var(--r);justify-content:space-between;padding:0 10px}
.atl2 .fbar .fsep{display:none}
.atl2 .fbar .fsrch{max-width:none;flex:none;width:100%}
.atl2 .fbar .fgrow{flex:1}
.atl2 .fbar .fbtn{justify-content:space-between;width:100%}
.atl2 .fbar .fbtn .v{margin-left:auto}
.atl2 .fbar .facets{display:grid;grid-template-columns:1fr 1fr;gap:5px}
.atl2 .fbar .frow2{display:flex;gap:5px}
.atl2 .fbar .frow2 .alertbtn{flex:1}
.atl2 .fpanel{position:absolute;right:var(--rail,256px);left:auto;top:0;
  width:min(660px,calc(100% - var(--rail,256px) - 10px));
  border-left:1px solid var(--line2);border-right:1px solid var(--line2);
  box-shadow:-16px 6px 34px rgba(15,23,42,.16);max-height:min(54vh,430px)}
.atl2 .fcols{columns:3}
.atl2 .stage.folded .fbar{width:auto;flex:1;flex-direction:row;flex-wrap:wrap;align-items:center;
  border-left:0;border-top:1px solid var(--line);overflow:visible;padding:9px 12px}
.atl2 .stage.folded .fbar .seg{display:flex;gap:4px}
.atl2 .stage.folded .fbar .fsrch{width:auto;flex:1 1 200px;max-width:280px}
.atl2 .stage.folded .fbar .facets{display:flex;flex-wrap:wrap;gap:5px}
.atl2 .stage.folded .fbar .fbtn{width:auto}
.atl2 .stage.folded .fbar .fgrow{display:none}
.atl2 .stage.folded ~ .fpanel{right:0;left:0;top:100%;width:auto;border-left:0;border-right:0;
  box-shadow:0 20px 36px rgba(15,23,42,.16)}
@media (max-width:960px){
.atl2 .stage{flex-direction:column}
.atl2 .fbar{width:auto;flex-direction:row;flex-wrap:wrap;align-items:center;border-left:0;
    border-top:1px solid var(--line);overflow:visible}
.atl2 .fbar .seg,.atl2 .fbar .facets{display:flex;flex-wrap:wrap;gap:5px}
.atl2 .fbar .fbtn{width:auto}
.atl2 .fbar .fsrch{width:auto;flex:1 1 180px}
.atl2 .fpanel{right:0;left:0;top:100%;width:auto;border-left:0;border-right:0}
.atl2 .fcols{columns:2}}
.atl2 .act{padding:0}
.atl2 .act .tog{width:100%;display:flex;align-items:center;gap:8px;background:none;border:0;padding:8px 14px;
  cursor:pointer;font-size:11.5px;font-weight:600;color:var(--muted);text-align:left}
.atl2 .act .tog:hover{color:var(--ink)}
.atl2 .act .tog .cv{font-size:9px;color:var(--dim)}
.atl2 .act .tog .lg{margin-left:auto;display:flex;gap:11px;font-size:11px;font-weight:500}
.atl2 .act .tog .lg i{display:inline-block;width:8px;height:8px;border-radius:2px;margin-right:4px}
.atl2 .act .body{padding:0 14px 10px}
.atl2 .act.closed .body,.atl2 .act.closed .tog .lg{display:none}
.atl2 .dens{display:flex;gap:0;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;flex:none;align-self:center}
.atl2 .dens button{background:var(--panel);border:0;border-right:1px solid var(--line);padding:5px 9px 4px;cursor:pointer;
  display:flex;flex-direction:column;align-items:center;gap:3px}
.atl2 .dens button:last-child{border-right:0}
.atl2 .dens button:hover{background:var(--panel2)}
.atl2 .dens button i{display:block;width:16px;height:9px;position:relative}
.atl2 .dens button i::before,.atl2 .dens button i::after,.atl2 .dens button i em{content:"";position:absolute;left:0;right:0;
  background:var(--line2);border-radius:1px}
.atl2 .dens button i::before{top:0;height:1.5px}
.atl2 .dens button i em{top:3.5px;height:1.5px;display:block;position:absolute}
.atl2 .dens button i::after{bottom:0;height:1.5px}
.atl2 .dens button[data-d="deplie"] i::before{height:2px}
.atl2 .dens button[data-d="deplie"] i em{top:3px;height:5px;background:var(--line)}
.atl2 .dens button[data-d="deplie"] i::after{display:none}
.atl2 .dens button[data-d="maxi"] i::before{height:4px;right:9px}
.atl2 .dens button[data-d="maxi"] i em{top:0;left:9px;bottom:5px;height:auto}
.atl2 .dens button[data-d="maxi"] i::after{height:4px;right:9px;top:5px;bottom:auto}
.atl2 .dens button b{font-family:var(--mono);font-size:7px;letter-spacing:.1em;color:var(--dim);font-weight:600}
.atl2 .dens button[aria-pressed="true"]{background:var(--ink)}
.atl2 .dens button[aria-pressed="true"] i::before,.atl2 .dens button[aria-pressed="true"] i em,.atl2 .dens button[aria-pressed="true"] i::after{background:#fff}
.atl2 .dens button[aria-pressed="true"] b{color:#fff}
.atl2 .list.deplie .card{display:grid;grid-template-columns:1fr 300px;gap:20px;padding-top:14px}
.atl2 .list.deplie .row{background:var(--panel2)}
.atl2 .list.maxi{display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));gap:12px;padding:12px;
  align-content:start;background:var(--panel2)}
.atl2 .dcard{background:var(--panel);border:1px solid var(--line);border-top:3px solid var(--c);border-radius:var(--rb);
  padding:14px;display:flex;flex-direction:column;gap:9px}
.atl2 .dcard .dh{display:flex;align-items:center;gap:9px}
.atl2 .dcard .dsc{width:38px;height:38px;border-radius:var(--r);background:var(--panel3);display:grid;place-items:center;
  font-family:var(--mono);font-size:15px;font-weight:800;color:var(--ink);flex:none}
.atl2 .dcard .dnm{font-size:16px;font-weight:700;letter-spacing:-.01em;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .dcard .dv{display:flex;gap:5px;flex-wrap:wrap}
.atl2 .dcard .dmeta{font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--dim)}
.atl2 .dcard .ddesc{font-size:12.5px;color:var(--muted);line-height:1.5;background:var(--panel2);
  border-radius:var(--r);padding:9px 11px}
.atl2 .dcard .dstat{display:flex;gap:3px;flex-wrap:wrap}
.atl2 .dcard .dstat button{font-size:10.5px;border:1px solid var(--line);background:var(--panel);color:var(--muted);
  padding:4px 9px;border-radius:var(--rs);cursor:pointer}
.atl2 .dcard .dstat button[aria-pressed="true"]{background:var(--c2);border-color:var(--c2);color:var(--tc2,#fff);font-weight:700}
.atl2 .dcard .dtags{display:flex;flex-wrap:wrap;gap:4px}
.atl2 .dcard .dtags span{font-size:10px;background:var(--panel3);border-radius:var(--rs);padding:3px 8px;color:var(--muted)}
.atl2 .dcard .dmemo{background:var(--ink);color:#fff;border:0;border-radius:var(--ra);padding:11px;font-size:12.5px;
  font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:7px}
.atl2 .dcard .dmemo:hover{background:#000}
.atl2 .dcard .dyn{display:flex;gap:7px}
.atl2 .dcard .dyn button{flex:1;border-radius:var(--ra);padding:10px;font-size:13px;font-weight:700;cursor:pointer;
  border:1.5px solid var(--c3);background:var(--panel);color:var(--c3)}
.atl2 .dcard .dyn button:hover{background:var(--c3);color:#fff}
.atl2 .dcard .pick{background:#FFFBEB;border-left:3px solid #F59E0B;border-radius:0 var(--r) var(--r) 0;padding:9px 11px}
.atl2 .dcard .pick b{font-size:11.5px;color:#92400E;display:block;margin-bottom:2px}
.atl2 .dcard .pick span{font-size:12px;color:#9A6B1F}
.atl2 .radar{width:100%;height:150px;display:block}
.atl2 .radar .grid{fill:none;stroke:var(--line);stroke-width:.7}
.atl2 .radar .axl{font-family:var(--mono);font-size:5.4px;letter-spacing:.06em;fill:var(--dim)}
.atl2 .radar .poly{fill:rgba(22,163,74,.18);stroke:var(--brand);stroke-width:1.6}
.atl2 .ident{padding:8px 14px 10px}
.atl2 .idtop{display:flex;align-items:center;gap:8px;margin-bottom:7px}
.atl2 .idmain{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.atl2 .idmain h1{margin:0;font-size:23px;font-weight:700;letter-spacing:-.025em;margin-right:3px}
.atl2 .eyebrow{font-family:var(--mono);font-size:8px;letter-spacing:.16em;color:var(--brand-d);font-weight:700;text-transform:uppercase}
.atl2 .idsp{flex:1}
.atl2 .idsep{width:1px;height:22px;background:var(--line);margin:0 3px}
.atl2 .idupd{font-family:var(--mono);font-size:8.5px;letter-spacing:.06em;color:var(--dim)}
.atl2 .idlogo{font-weight:700;font-size:11.5px;letter-spacing:.04em;border:1px solid var(--line);
  padding:4px 9px;border-radius:var(--r);color:var(--muted)}
.atl2 .lang{display:inline-flex;border:1px solid var(--line);border-radius:var(--r);overflow:hidden}
.atl2 .lang b,.atl2 .lang span{padding:2px 7px;font-size:8.5px;font-weight:700;color:var(--muted);background:var(--panel)}
.atl2 .lang b{background:var(--ink);color:#fff}
.atl2 .ic{width:28px;height:28px;border-radius:var(--r);border:1px solid var(--line);display:grid;place-items:center;
  font-size:12.5px;color:var(--muted);cursor:pointer;background:var(--panel);padding:0}
.atl2 .ic:hover{border-color:var(--line2);color:var(--ink);background:var(--panel2)}
.atl2 .ic.sm{width:24px;height:22px;font-size:11px}
.atl2 .icgrp{display:flex;gap:0}
.atl2 .icgrp .ic{border-radius:0;border-right-width:0}
.atl2 .icgrp .ic:first-child{border-radius:var(--r) 0 0 var(--r)}
.atl2 .icgrp .ic:last-child{border-radius:0 var(--r) var(--r) 0;border-right-width:1px}
.atl2 .idpill{display:flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:var(--r);
  height:28px;padding:0 11px;font-size:11.5px;color:var(--muted);white-space:nowrap}
.atl2 .idpill .bar{width:44px;height:5px;background:var(--panel3);border-radius:99px;overflow:hidden}
.atl2 .idpill .bar i{display:block;height:100%;background:var(--brand)}
.atl2 .idpill.pause{color:#B45309;border-color:#FDE4C7;background:#FFFBEB;font-weight:600}
.atl2 .idpill.quota{cursor:pointer}
.atl2 .idpill.quota:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .idpill .mi{width:16px;height:16px;border-radius:var(--rs);background:var(--panel3);display:grid;place-items:center;
  font-size:11px;color:var(--muted);font-weight:600}
.atl2 .idpill .q{font-weight:700;color:var(--ink);font-size:13px}
.atl2 .isrch{display:flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:var(--r);
  padding:0 11px;height:28px;background:var(--panel);width:180px}
.atl2 .isrch input{border:0;outline:none;font-size:12px;flex:1;min-width:0;background:none}
.atl2 .ftools .tool{width:30px;height:30px;padding:0;justify-content:center;font-size:13px;letter-spacing:0}
.atl2 .ftools .tool.spin{animation:atl2-spin .55s ease}
.atl2 .cside{padding:0;border:0;background:none}
.atl2 .cside .top{display:flex;align-items:center;gap:11px;padding-bottom:11px;border-bottom:1px solid var(--line)}
.atl2 .cside .sc3{width:46px;height:46px;border-radius:var(--r);background:var(--panel);border:1px solid var(--line);
  display:grid;place-items:center;font-family:var(--mono);font-size:18px;font-weight:800;flex:none}
.atl2 .cside .top .vv{display:flex;flex-direction:column;gap:4px;min-width:0}
.atl2 .cside .sec2{padding:12px 0;border-bottom:1px solid var(--line)}
.atl2 .cside .sec2:last-child{border-bottom:0;padding-bottom:0}
.atl2 .cside .k2{font-size:11px;color:var(--dim);margin-bottom:7px}
.atl2 .cside .found{font-size:12.5px;color:var(--muted);line-height:1.55}
.atl2 .cside .found b{color:var(--ink)}
.atl2 .stsw{display:flex;flex-wrap:wrap;gap:4px}
.atl2 .stsw button{font-size:11px;border:1px solid var(--line);background:var(--panel);color:var(--muted);
  padding:5px 10px;border-radius:var(--r);cursor:pointer}
.atl2 .stsw button:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .stsw button[aria-pressed="true"]{background:var(--c);border-color:var(--c);color:var(--tc,#fff);font-weight:700}
.atl2 .cside .acts2{display:flex;flex-direction:column;gap:6px}
.atl2 .cside .acts2 .r2{display:flex;gap:6px}
.atl2 .cside .acts2 .r2 button{flex:1}
.atl2 .cside .btn{border-radius:var(--ra);padding:10px;font-size:12.5px;font-weight:600;cursor:pointer;border:0;
  display:flex;align-items:center;justify-content:center;gap:6px}
.atl2 .cside .btn.p{background:var(--blue);color:#fff}
.atl2 .cside .btn.g{background:var(--panel);color:var(--ink);border:1px solid var(--line2);font-weight:500}
.atl2 .cside .fb{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted)}
.atl2 .cside .fb .th{margin-left:auto;display:flex;gap:5px}
.atl2 .cside .fb button{border:1px solid var(--line);background:var(--panel);border-radius:var(--r);
  width:30px;height:28px;cursor:pointer;font-size:13px}
.atl2 .cside .fb button:hover{border-color:var(--line2)}
.atl2 .mcard .mh{padding:18px 22px 15px}
.atl2 .mcard .mh h2{font-size:19px;letter-spacing:-.02em}
.atl2 .mcard .mb{padding:20px 22px 22px}
.atl2 .qrow{border:0;background:var(--panel2);border-radius:var(--ra);padding:13px 15px}
.atl2 .qlist{border:0;background:var(--panel2);border-radius:var(--ra);padding:4px 6px}
.atl2 .qi{border-bottom:1px solid rgba(15,23,42,.06);padding:9px 9px}
.atl2 .qi b{font-size:13.5px}
.atl2 .qn{background:var(--panel);border:1px solid var(--line)}
.atl2 .flash{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(10px);z-index:120;
  background:var(--ink);color:#fff;border-radius:99px;padding:10px 20px;font-size:13px;font-weight:600;
  opacity:0;pointer-events:none;transition:.18s}
.atl2 .flash.on{opacity:1;transform:translateX(-50%)}
.atl2 .brand{display:flex;align-items:center;gap:9px;padding-right:12px;border-right:1px solid var(--line);flex:none}
.atl2 .brand b{width:38px;height:38px;border-radius:var(--r);background:var(--ink);color:#fff;display:grid;
  place-items:center;font-size:14px;font-weight:800;letter-spacing:-.02em}
.atl2 .brand i{font-style:normal;font-size:9.5px;line-height:1.25;color:var(--muted);font-weight:600}
.atl2 .idttl{display:flex;flex-direction:column;gap:1px;min-width:0}
.atl2 .idttl h1{margin:0;font-size:22px;font-weight:700;letter-spacing:-.025em}
.atl2 .idupd{font-family:var(--body);font-size:11.5px;color:var(--dim);letter-spacing:0}
.atl2 .engine{display:flex;align-items:center;gap:10px;border:1px solid var(--line);border-radius:var(--ra);
  padding:0 13px;height:36px;background:var(--panel);cursor:pointer;position:relative}
.atl2 .engine:hover{border-color:var(--line2);background:var(--panel2)}
.atl2 .engine .el{position:absolute;top:-7px;left:11px;background:var(--panel);padding:0 6px;
  font-family:var(--mono);font-size:7px;letter-spacing:.16em;color:var(--dim)}
.atl2 .engine .ev{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--muted);white-space:nowrap}
.atl2 .engine .ev b{color:var(--ink);font-weight:700}
.atl2 .engine .bar{width:40px;height:5px;background:var(--panel3);border-radius:99px;overflow:hidden}
.atl2 .engine .bar i{display:block;height:100%;background:var(--brand)}
.atl2 .engine .edv{width:1px;height:16px;background:var(--line)}
.atl2 .engine .mi{width:17px;height:17px;border-radius:var(--rs);background:var(--panel3);display:grid;
  place-items:center;font-size:11px;color:var(--muted);font-weight:600}
.atl2 .engine .q{font-size:13.5px}
.atl2 .engine .epause{font-size:11px;font-weight:600;color:#B45309;background:#FFFBEB;border:1px solid #FDE4C7;
  border-radius:99px;padding:3px 10px}
.atl2 .engine .eic{width:20px;height:20px;border-radius:var(--rs);display:grid;place-items:center;font-size:11px;color:var(--muted)}
.atl2 .engine .eic:hover{background:var(--panel3);color:var(--ink)}
.atl2 .engine .ego{font-size:11.5px;font-weight:600;color:var(--brand-d)}
.atl2 .step .warn{position:absolute;top:0;left:0;right:0;width:auto;height:3px;background:#F59E0B;
  border-radius:0;box-shadow:none;animation:none}
.atl2 .step .wl{position:absolute;top:5px;right:11px;font-family:var(--mono);font-size:6.5px;
  letter-spacing:.14em;color:#B45309;font-weight:700}
.atl2 .step[aria-selected="true"] .wl{color:#fff}
.atl2 .list.deplie>div{border-bottom:9px solid var(--panel3)}
.atl2 .list.deplie .row{background:var(--panel);box-shadow:inset 3px 0 0 var(--ink)}
.atl2 .list.deplie .card{border-bottom:0}
.atl2 .listhead .ctx{font-family:var(--body);font-size:12px;letter-spacing:0;color:var(--muted)}
.atl2 .c-sig .mo{font-family:var(--body);font-size:12px;letter-spacing:0;text-transform:none}
.atl2 .c-stade{font-family:var(--body);font-size:12px;letter-spacing:0;text-transform:none}
.atl2 .approach{background:#7C3AED;color:#fff;border:0;border-radius:var(--ra);padding:7px 12px;
  font-size:11.5px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .approach:hover{filter:brightness(1.1)}
.atl2 .qi .qs{margin-left:auto;font-family:var(--mono);font-size:12px;font-weight:700;color:var(--ink);
  background:var(--panel);border:1px solid var(--line);border-radius:var(--rs);padding:2px 8px}
.atl2 .qi .qe{font-family:var(--body);font-size:11.5px;color:var(--muted);width:74px;text-align:right;letter-spacing:0}
.atl2 .credits{display:inline-flex;align-items:center;gap:7px;margin-top:8px;font-size:11.5px;color:var(--muted);
  border:1px solid var(--line);border-radius:99px;padding:4px 12px;cursor:pointer;background:var(--panel)}
.atl2 .credits b{color:var(--ink);font-weight:700;font-size:13px}
.atl2 .credits:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .credits.empty{border-color:#FDE4C7;background:#FFFBEB;color:#B45309}
.atl2 .credits .rc{font-weight:700;color:var(--brand-d)}
.atl2 .credits[hidden]{display:none}
.atl2 .evalbtn.read{background:var(--blue)}
.atl2 .evalbtn.read:hover{filter:brightness(1.12)}
.atl2 .memobtn.read{background:#EEF3FD;color:var(--blue);box-shadow:none;border:0}
.atl2 .memobtn.read:hover{background:#DFE9FB;filter:none}
.atl2 .memobtn.sm{padding:6px 10px;background:#EEF3FD;color:var(--blue)}
.atl2 .c-sc{font-family:var(--body);font-size:13px;font-weight:700;color:var(--ink);text-align:right;
  display:flex;align-items:center;justify-content:flex-end}
.atl2 .c-sc s{display:none}
.atl2 .qs2{font-family:var(--body);font-size:12px;font-weight:700;color:var(--muted)}
.atl2 .qsub{font-weight:400;font-size:13px;color:var(--muted)}
.atl2 .qbox{border:1px solid var(--line);border-radius:var(--rb);padding:16px 18px;margin-bottom:18px;background:var(--panel2)}
.atl2 .qhead{display:flex;align-items:baseline;gap:12px;margin-bottom:9px}
.atl2 .qhead b{font-size:17px;font-weight:700}
.atl2 .qpct{margin-left:auto;font-size:24px;font-weight:800;color:var(--brand-d);letter-spacing:-.02em}
.atl2 .qbar{height:9px;background:var(--panel3);border-radius:99px;overflow:hidden;margin-bottom:12px}
.atl2 .qbar i{display:block;height:100%;background:linear-gradient(90deg,#3FB584,var(--brand));border-radius:99px}
.atl2 .qchips{display:flex;gap:8px;margin-bottom:14px}
.atl2 .qc{font-size:12.5px;font-weight:600;border-radius:99px;padding:5px 13px}
.atl2 .qc.ok{background:#E4F2EA;color:#0A6B3D}
.atl2 .qc.todo{background:#FFF7ED;color:#B45309}
.atl2 .qrate{font-size:13px;color:var(--muted);border-top:1px dashed var(--line2);padding-top:13px;margin-bottom:10px}
.atl2 .qrate b{color:var(--ink)}
.atl2 .qrates{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:9px}
.atl2 .qr{flex:1;min-width:92px;border:1px solid var(--line);background:var(--panel);border-radius:var(--r);
  padding:9px 11px;cursor:pointer;text-align:center}
.atl2 .qr:hover{border-color:var(--line2)}
.atl2 .qr b{display:block;font-size:14px;font-weight:700}
.atl2 .qr span{display:block;font-size:10.5px;color:var(--dim);margin-top:2px}
.atl2 .qr.on{background:var(--brand);border-color:var(--brand)}
.atl2 .qr.on b,.atl2 .qr.on span{color:#fff}
.atl2 .qnote{font-size:12px;color:var(--dim);font-style:italic}
.atl2 .qsec{font-family:var(--mono);font-size:9px;letter-spacing:.14em;font-weight:700;margin:20px 0 8px}
.atl2 .qsec.ok{color:#0A6B3D}
.atl2 .qsec.todo{color:#B45309}
.atl2 .qrows{display:flex;flex-direction:column}
.atl2 .qr2{display:flex;align-items:center;gap:11px;padding:10px 2px;border-bottom:1px solid var(--line);font-size:13.5px}
.atl2 .qr2:last-child{border-bottom:0}
.atl2 .qr2 b{font-weight:700;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .qn2{font-family:var(--mono);font-size:10px;color:var(--dim);width:22px}
.atl2 .qday{font-size:11px;font-weight:600;color:#0A6B3D;background:#E4F2EA;border-radius:99px;padding:3px 10px;white-space:nowrap}
.atl2 .qd{font-size:11px;color:var(--muted);background:var(--panel3);border-radius:99px;padding:3px 9px}
.atl2 .qt{font-size:12.5px;color:var(--muted);white-space:nowrap}
.atl2 .qgo{background:var(--blue);color:#fff;border:0;border-radius:var(--ra);padding:7px 14px;font-size:12px;
  font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .qgo:hover{filter:brightness(1.1)}
.atl2 .qgo.an{background:var(--blue)}
.atl2 .packs{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin:14px 0}
.atl2 .pack{border:1px solid var(--line);border-radius:var(--rb);padding:14px;text-align:center}
.atl2 .pack.hi{border-color:var(--brand);box-shadow:0 0 0 3px var(--brand-l)}
.atl2 .pack .pt{font-size:12.5px;font-weight:600;color:var(--muted)}
.atl2 .pack .pp{font-size:22px;font-weight:800;letter-spacing:-.02em;margin:5px 0 2px}
.atl2 .pack .pd{font-size:11.5px;color:var(--dim);margin-bottom:11px}
.atl2 .pack button{width:100%;background:var(--ink);color:#fff;border:0;border-radius:var(--ra);padding:9px;
  font-size:12.5px;font-weight:700;cursor:pointer}
.atl2 .pack.hi button{background:var(--brand)}
.atl2 .credits{display:inline-flex;align-items:center;gap:7px;margin:0;font-size:12px;color:var(--muted);
  border:1px solid var(--line);border-radius:var(--ra);height:42px;padding:0 14px;flex:none;cursor:pointer;background:var(--panel)}
.atl2 .credits .cl{font-family:var(--mono);font-size:7.5px;letter-spacing:.14em;color:var(--dim)}
.atl2 .credits b{color:var(--ink);font-weight:800;font-size:17px;letter-spacing:-.02em}
.atl2 .credits .cm{color:var(--dim);font-size:12px;margin-left:-3px}
.atl2 .credits .cd{font-size:11px;color:var(--dim)}
.atl2 .credits:hover{border-color:var(--line2)}
.atl2 .credits.empty{border-color:#FDE4C7;background:#FFFBEB}
.atl2 .credits.empty b{color:#B45309}
.atl2 .credits .rc{font-weight:700;color:var(--brand-d);font-size:11.5px}
.atl2 .evalbtn.memo{background:var(--blue)}
.atl2 .evalbtn.memo:hover{filter:brightness(1.12)}
.atl2 .evalbtn em{font-style:normal;font-weight:600;font-size:11px;opacity:.75;margin-left:2px}
.atl2 .evalbtn.read{background:var(--blue)}
.atl2 .evalbtn.read:hover{filter:brightness(1.12)}
.atl2 .memobtn.read{background:#EEF3FD;color:var(--blue);box-shadow:none;border:0}
.atl2 .memobtn.read:hover{background:#DFE9FB;filter:none}
.atl2 .memo .mh .nm{font-size:15px}
.atl2 .memo .tabs2 button{padding:10px 14px 9px}
.atl2 .memo .mf .go{background:var(--blue)}
.atl2 .memo .mf .go:hover{filter:brightness(1.12)}
.atl2 .step .n{position:relative;transition:transform .18s}
.atl2 .step .n.up,.atl2 .step .n.down{animation:atl2-bump .5s ease}
@keyframes atl2-bump{0%{transform:translateY(0)}30%{transform:translateY(-4px)}100%{transform:translateY(0)}}
.atl2 .step .delta{position:absolute;top:-13px;right:-6px;font-style:normal;font-family:var(--mono);
  font-size:9px;font-weight:700;padding:1px 5px;border-radius:99px;animation:atl2-fade 1.8s ease forwards}
.atl2 .step .n.up .delta{background:#E4F2EA;color:#0A6B3D}
.atl2 .step .n.down .delta{background:#FEE2E2;color:#B91C1C}
@keyframes atl2-fade{0%{opacity:0;transform:translateY(4px)}20%{opacity:1;transform:translateY(0)}80%{opacity:1}100%{opacity:0}}
.atl2 .cover{display:flex;align-items:center;gap:9px;cursor:pointer;flex-wrap:wrap}
.atl2 .cover .cl2{font-family:var(--mono);font-size:7.5px;letter-spacing:.16em;color:var(--dim)}
.atl2 .cover .cbar{width:74px;height:5px;background:var(--panel3);border-radius:99px;overflow:hidden}
.atl2 .cover .cbar i{display:block;height:100%;background:var(--brand);border-radius:99px}
.atl2 .cover b{font-size:12.5px;font-weight:800;color:var(--brand-d)}
.atl2 .cover .cd2{font-size:11.5px;color:var(--muted)}
.atl2 .cover .cn{font-size:11px;color:var(--dim);border-left:1px solid var(--line);padding-left:9px}
.atl2 .cover:hover .cd2,.atl2 .cover:hover .cn{color:var(--ink)}
.atl2 .qc.neuf{background:var(--panel3);color:var(--muted)}
.atl2 .idtop{display:flex;align-items:center;gap:12px;margin-bottom:11px}
.atl2 .idtop h1{margin:0;font-size:23px;font-weight:700;letter-spacing:-.025em}
.atl2 .idmain{display:flex;align-items:center;gap:9px;flex-wrap:wrap}
.atl2 .cover{display:flex;align-items:center;gap:10px;border:1px solid var(--line);border-radius:var(--ra);
  padding:0 13px;height:36px;background:var(--panel);cursor:pointer;position:relative}
.atl2 .cover:hover{border-color:var(--line2);background:var(--panel2)}
.atl2 .cover .el{position:absolute;top:-7px;left:11px;background:var(--panel);padding:0 6px;
  font-family:var(--mono);font-size:7px;letter-spacing:.16em;color:var(--dim)}
.atl2 .cover .ev{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--muted);white-space:nowrap}
.atl2 .cover .ev b{color:var(--ink);font-weight:700}
.atl2 .cover .bar{width:52px;height:5px;background:var(--panel3);border-radius:99px;overflow:hidden}
.atl2 .cover .bar i{display:block;height:100%;background:var(--brand)}
.atl2 .cover .edv{width:1px;height:16px;background:var(--line)}
.atl2 .cover .ego{font-size:11.5px;font-weight:600;color:var(--brand-d)}
.atl2 .c-vd .vd{font-size:9.5px;padding:3px 7px}
.atl2 .step .wl{display:none}
.atl2 .step .l{display:flex;align-items:center;gap:6px}
.atl2 .step .wd{width:6px;height:6px;border-radius:50%;background:#F59E0B;flex:none;
  box-shadow:0 0 0 2.5px rgba(245,158,11,.22)}
.atl2 .step[aria-selected="true"] .wd{background:#fff;box-shadow:0 0 0 2.5px rgba(255,255,255,.3)}
.atl2 .step .warn{height:2.5px;background:#F59E0B}
.atl2 .bigbtn{width:100%;margin-top:14px;background:var(--brand);color:#fff;border:0;border-radius:var(--ra);
  height:48px;font-size:14.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;
  justify-content:center;gap:9px;letter-spacing:.01em}
.atl2 .bigbtn:hover{background:var(--brand-d)}
.atl2 .cs{align-items:flex-start}
.atl2 .cs .no{margin-top:1px}
.atl2 .cs h3{font-size:14.5px;margin-bottom:3px}
.atl2 .cs p{font-size:12.5px;margin-bottom:0;line-height:1.55}
.atl2 .cs+.cs{margin-top:16px}
.atl2 .step.wait{background:#FFF8ED}
.atl2 .step.wait .l,.atl2 .step.wait .n{color:#B45309}
.atl2 .step.wait:hover{background:#FEF0DC}
.atl2 .step.wait[aria-selected="true"]{background:var(--c)}
.atl2 .step.wait[aria-selected="true"] .l,.atl2 .step.wait[aria-selected="true"] .n{color:var(--tc,#fff)}
.atl2 .step .warn{position:absolute;top:0;left:14px;right:14px;width:auto;height:3px;background:#D97706;
  border-radius:0 0 2px 2px;box-shadow:none;animation:none}
.atl2 .step .wl,.atl2 .step .wd{display:none}
.atl2 .lead2{font-size:13.5px;color:var(--muted);margin:0 0 16px}
.atl2 .steps2{list-style:none;margin:0;padding:0;counter-reset:st}
.atl2 .steps2 li{counter-increment:st;position:relative;padding:0 0 14px 40px;margin-bottom:14px;border-bottom:1px solid var(--line)}
.atl2 .steps2 li:last-child{border-bottom:0;margin-bottom:0;padding-bottom:0}
.atl2 .steps2 li::before{content:counter(st);position:absolute;left:0;top:-1px;width:25px;height:25px;border-radius:50%;
  background:var(--ink);color:#fff;display:grid;place-items:center;font-size:11.5px;font-weight:700}
.atl2 .steps2 b{display:block;font-size:14.5px;font-weight:700;margin-bottom:3px}
.atl2 .steps2 span{display:block;font-size:13px;color:var(--muted);line-height:1.55}
.atl2 .mfoot{display:flex;gap:9px;justify-content:flex-end;align-items:center;margin-top:20px;padding-top:16px;border-top:1px solid var(--line)}
.atl2 .mfoot .evalbtn{height:42px;padding:0 22px;font-size:13.5px}
.atl2 .ghost2{background:none;border:0;color:var(--muted);font-size:13px;font-weight:600;cursor:pointer;padding:10px 14px}
.atl2 .ghost2:hover{color:var(--ink)}
.atl2 .list{scrollbar-width:thin;scrollbar-color:var(--line2) transparent;scroll-behavior:smooth}
.atl2 .list::-webkit-scrollbar{width:12px}
.atl2 .list::-webkit-scrollbar-track{background:transparent;margin:6px 0}
.atl2 .list::-webkit-scrollbar-thumb{background:var(--line2);border-radius:99px;min-height:44px;
  border:4px solid var(--panel);background-clip:padding-box;transition:background .15s}
.atl2 .list:hover::-webkit-scrollbar-thumb{background:#9AA8B8;background-clip:padding-box}
.atl2 .list::-webkit-scrollbar-thumb:hover{background:var(--muted);background-clip:padding-box;border-width:3px}
.atl2 .list::-webkit-scrollbar-thumb:active{background:var(--ink);background-clip:padding-box;border-width:3px}
.atl2 .list.maxi::-webkit-scrollbar-thumb{border-color:var(--panel2)}
.atl2 .list{background-image:linear-gradient(var(--panel) 30%,rgba(255,255,255,0)),
  linear-gradient(rgba(255,255,255,0),var(--panel) 70%) 0 100%,
  radial-gradient(farthest-side at 50% 0,rgba(15,23,42,.09),transparent),
  radial-gradient(farthest-side at 50% 100%,rgba(15,23,42,.09),transparent) 0 100%;
  background-repeat:no-repeat;background-size:100% 34px,100% 34px,100% 11px,100% 11px;
  background-attachment:local,local,scroll,scroll}
.atl2 .stage.folded .fbar,.atl2 .fbar{row-gap:6px}
.atl2 .stage.folded .fbar .fbtn,.atl2 .stage.folded .fbar .seg button{justify-content:flex-start}
.atl2 .stage.folded .fbar .fbtn .sp{display:none}
.atl2 .stage.folded .fbar .fbtn{padding:0 10px;gap:6px}
.atl2 .stage.folded .fbar .fbtn .v{margin-left:0}
.atl2 .stage.folded .fbar .seg{border:0;gap:4px}
.atl2 .stage.folded .fbar .seg button{border:1px solid var(--line);border-radius:var(--r);padding:0 10px;gap:5px}
.atl2 .stage.folded .fbar .fsrch{flex:0 1 156px;max-width:156px;min-width:120px}
.atl2 .stage.folded .fbar .frow2{flex:none;margin-left:auto}
.atl2 .stage.folded .fbar .fgrow{display:none}
@media (max-width:960px){
.atl2 .fbar .fbtn{justify-content:flex-start;padding:0 10px}
.atl2 .fbar .fbtn .sp{display:none}
.atl2 .fbar .seg{border:0;gap:4px}
.atl2 .fbar .seg button{border:1px solid var(--line);border-radius:var(--r)}
.atl2 .fbar .fsrch{flex:0 1 150px;max-width:150px}
.atl2 .fbar .frow2{margin-left:auto}}
.atl2 .demand{padding:8px 14px}
.atl2 .dfield input,.atl2 .evalbtn,.atl2 .credits{height:42px}
.atl2 .dunder{margin-top:5px}
.atl2 .list .row{padding-top:4px;padding-bottom:4px}
.atl2 .stage.folded .fbar,.atl2 .fbar{row-gap:6px}
.atl2 .stage.folded .fbar .fbtn,.atl2 .stage.folded .fbar .seg button{justify-content:flex-start}
.atl2 .stage.folded .fbar .fbtn .sp{display:none}
.atl2 .stage.folded .fbar .fbtn{padding:0 10px;gap:6px}
.atl2 .stage.folded .fbar .fbtn .v{margin-left:0}
.atl2 .stage.folded .fbar .seg{border:0;gap:4px}
.atl2 .stage.folded .fbar .seg button{border:1px solid var(--line);border-radius:var(--r);padding:0 10px;gap:5px}
.atl2 .stage.folded .fbar .fsrch{flex:0 1 156px;max-width:156px;min-width:120px}
.atl2 .stage.folded .fbar .frow2{flex:none;margin-left:auto}
.atl2 .stage.folded .fbar .fgrow{display:none}
@media (max-width:960px){
.atl2 .fbar .fbtn{justify-content:flex-start;padding:0 10px}
.atl2 .fbar .fbtn .sp{display:none}
.atl2 .fbar .seg{border:0;gap:4px}
.atl2 .fbar .seg button{border:1px solid var(--line);border-radius:var(--r)}
.atl2 .fbar .fsrch{flex:0 1 150px;max-width:150px}
.atl2 .fbar .frow2{margin-left:auto}}
.atl2 .demand{padding:8px 14px}
.atl2 .dfield input,.atl2 .evalbtn,.atl2 .credits{height:42px}
.atl2 .dunder{margin-top:5px}
.atl2 .list .row{padding-top:4px;padding-bottom:4px}
.atl2 .estab{margin-top:6px;border:1px solid var(--line);border-left:3px solid var(--brand);
  border-radius:0 var(--rb) var(--rb) 0;padding:15px 17px;background:var(--panel2)}
.atl2 .estab .eh{font-size:14px;font-weight:700;margin-bottom:7px}
.atl2 .estab p{font-size:13px;line-height:1.65;color:var(--muted);margin:0 0 12px}
.atl2 .estab .er{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.atl2 .estab .er span{font-size:11.5px;color:var(--dim);flex:1;min-width:180px}
.atl2 .ebtn{background:var(--panel);border:1px solid var(--line2);border-radius:var(--ra);padding:8px 14px;
  font-size:12.5px;font-weight:600;cursor:pointer;white-space:nowrap}
.atl2 .ebtn:hover{border-color:var(--ink)}
.atl2 .thu{display:flex;gap:3px;justify-content:flex-end}
.atl2 .thu .tb{border:1px solid var(--line);background:var(--panel);border-radius:var(--rs);
  width:24px;height:24px;font-size:11px;cursor:pointer;padding:0;line-height:1;opacity:.55;transition:.13s}
.atl2 .row:hover .thu .tb{opacity:1}
.atl2 .thu .tb:hover{border-color:var(--line2);transform:translateY(-1px)}
.atl2 .thu .tb.on{background:var(--brand);border-color:var(--brand)}
.atl2 .h-thu{justify-content:flex-end}
.atl2 .wait2{display:inline-flex;align-items:center;gap:4px;font-family:var(--mono);font-size:9px;
  letter-spacing:.06em;font-weight:700;border-radius:var(--rs);padding:2px 6px;
  background:var(--panel3);color:var(--muted)}
.atl2 .wait2.warm{background:#FFF7ED;color:#B45309}
.atl2 .wait2.hot{background:#FEE2E2;color:#B91C1C}
.atl2 .rule{border:1px solid var(--line);border-left:3px solid var(--brand);border-radius:0 var(--r) var(--r) 0;
  padding:14px 16px;margin:14px 0;background:var(--panel2)}
.atl2 .rule b{font-size:13.5px}
.atl2 .rule p{font-size:12.5px;line-height:1.65;color:var(--muted);margin:8px 0 0}
.atl2 .rule p b{color:var(--ink);font-size:12.5px}
.atl2 .org{display:inline-flex;align-items:center;gap:4px;font-size:9.5px;font-weight:600;
  border-radius:var(--rs);padding:2px 7px;white-space:nowrap}
.atl2 .org.au{background:#E7F3EC;color:var(--brand-d)}
.atl2 .org.cd{background:#F3EEFE;color:#6D28D9}
.atl2 .promo{background:var(--ink);color:#fff;border:0;border-radius:var(--ra);padding:6px 11px;
  font-size:11.5px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .promo:hover{background:#000}
.atl2 .fzone>.conts{border-bottom:0}
.atl2 .stage{border-top:1px solid var(--line)}
.atl2 .fbtn{display:inline-flex;align-items:center;gap:7px;height:30px;padding:0 11px;background:var(--panel);
  border:1px solid var(--line);border-radius:var(--r);cursor:pointer;font-size:11.5px;font-weight:600;
  color:var(--ink);white-space:nowrap;flex:none;justify-content:flex-start;width:auto}
.atl2 .fbtn>*{border:0!important;background:none;padding:0;margin:0}
.atl2 .fbtn .fl{font-weight:600}
.atl2 .fbtn .v{font-weight:400;color:var(--dim);font-size:11px}
.atl2 .fbtn .n{background:var(--ink)!important;color:#fff;border-radius:99px;padding:1px 7px!important;
  font-family:var(--mono);font-size:9px;font-weight:700}
.atl2 .fbtn .cv{font-size:8px;color:var(--dim);margin-left:1px}
.atl2 .fbtn:hover{border-color:var(--line2);background:var(--panel2)}
.atl2 .fbtn[aria-expanded="true"]{background:var(--ink);border-color:var(--ink);color:#fff}
.atl2 .fbtn[aria-expanded="true"] .v,.atl2 .fbtn[aria-expanded="true"] .cv{color:rgba(255,255,255,.72)}
.atl2 .fbtn[aria-expanded="true"] .n{background:#fff!important;color:var(--ink)}
.atl2 .fbtn.fsig{border-color:#F0B4B4;color:var(--red)}
.atl2 .fbtn.fsig .n{background:var(--red)!important}
.atl2 .fbtn.fsig[aria-expanded="true"]{background:var(--red);border-color:var(--red);color:#fff}
.atl2 .fbtn.fsig[aria-expanded="true"] .n{background:#fff!important;color:var(--red)}
.atl2 .fbar .facets,.atl2 .stage.folded .fbar .facets{display:flex;flex-wrap:wrap;gap:5px}
.atl2 .fbar:not(.col) .facets{display:flex}
.atl2 .stage:not(.folded) .fbar .facets{display:grid;grid-template-columns:1fr 1fr;gap:5px}
.atl2 .stage:not(.folded) .fbar .fbtn{width:100%;justify-content:space-between}
.atl2 .act .tog{all:unset;display:flex;align-items:center;gap:9px;width:100%;box-sizing:border-box;
  padding:7px 14px;cursor:pointer;font-family:var(--body);font-size:11.5px;font-weight:600;color:var(--muted)}
.atl2 .act .tog:hover{color:var(--ink)}
.atl2 .act .tog .cv{font-size:9px;color:var(--dim);width:9px}
.atl2 .act .tog .tt{white-space:nowrap}
.atl2 .act .tog .lg{margin-left:auto;display:flex;gap:11px;font-size:11px;font-weight:500}
.atl2 .tuto{align-items:center;gap:12px;padding:7px 14px}
.atl2 .tuto.mini{padding:6px 14px}
.atl2 .tuto .txt{flex:1;min-width:0}
.atl2 .tuto.mini p{margin:0;font-size:12.5px;font-weight:500;color:var(--ink);white-space:nowrap;
  overflow:hidden;text-overflow:ellipsis}
.atl2 .tuto:not(.mini) p{margin:0 0 8px}
.atl2 .tprim{flex:none;background:var(--ink);color:#fff;border:0;border-radius:var(--ra);padding:7px 14px;
  font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .tprim:hover{background:#000}
.atl2 .tuto .fold{flex:none;width:24px;height:24px;padding:0;border-radius:var(--rs);font-size:10px;
  letter-spacing:0;display:grid;place-items:center}
.atl2 .tuto .fold:hover{background:rgba(15,23,42,.06)}
.atl2 .act .tog{padding:5px 14px;font-size:11px}
.atl2 .act .tog .lg{font-size:10px}
.atl2 .act .tog .cv{font-size:8px}
.atl2 .fbtn{padding:0 9px;gap:6px;font-size:11.5px}
.atl2 .fbtn .v{font-weight:500;color:var(--muted);font-size:11px}
.atl2 .fbar .fsrch{flex:0 1 150px;max-width:150px;min-width:116px}
.atl2 .stage.folded .fbar .fsrch{flex:0 1 148px;max-width:148px}
.atl2 .stage.folded .fbar .seg button{padding:0 9px;gap:4px;font-size:11px}
.atl2 .act .tog .tgc{font-size:8px;color:var(--dim);width:9px;display:inline-block;background:none;border:0;padding:0}
.atl2 .stage.folded ~ .conts,.atl2 .fzone>.conts{transition:none}
.atl2 .fzone.mapoff>.conts{display:none}
.atl2 .row,.atl2 .cols{grid-template-columns:11px 30px minmax(200px,1fr) 84px 78px 186px 156px}
.atl2 .app.pipe .row,.atl2 .app.pipe .cols{grid-template-columns:11px 30px minmax(175px,1fr) 72px 66px 168px 130px 42px 138px 48px}
@media (max-width:1440px){
.atl2 .row,.atl2 .cols{grid-template-columns:11px 30px minmax(190px,1fr) 80px 180px 152px}
.atl2 .app.pipe .row,.atl2 .app.pipe .cols{grid-template-columns:11px 30px minmax(165px,1fr) 70px 166px 130px 42px 138px 50px}}
@media (max-width:1200px){
.atl2 .row,.atl2 .cols{grid-template-columns:11px 30px minmax(175px,1fr) 174px 148px}
.atl2 .app.pipe .row,.atl2 .app.pipe .cols{grid-template-columns:11px 30px minmax(150px,1fr) 160px 126px 40px 134px 50px}}
.atl2 .app:not(.pipe) .h-thu,.atl2 .app:not(.pipe) .thu{display:none}
.atl2 .mapbtn{display:flex;align-items:center;gap:6px;height:30px;padding:0 12px;background:var(--panel);
  border:1px solid var(--line);border-radius:var(--r);font-size:11.5px;font-weight:600;color:var(--muted);
  cursor:pointer;white-space:nowrap;flex:none}
.atl2 .mapbtn:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .fzone.mapoff .stage{border-top:0}
.atl2 .fzone.mapoff .fbar{border-top:0}
.atl2 .c-sig{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;
  gap:4px;min-width:0;overflow:visible;padding:2px 0}
.atl2 .c-sig>*{max-width:100%;flex:none}
.atl2 .c-sig .sig{display:inline-flex;align-items:center;gap:5px;flex:none;white-space:nowrap;
  overflow:hidden;text-overflow:ellipsis;max-width:100%;padding:3px 9px;font-size:10.5px;line-height:1.35}
.atl2 .c-sig .sigwin{display:flex;align-items:center;gap:5px;margin:0;font-size:11px;color:var(--muted);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.atl2 .c-sig .sigwin a{color:var(--dim);text-decoration:none;font-size:10px}
.atl2 .c-sig .sigwin a:hover{color:var(--ink)}
.atl2 .c-sig .sigwin.hot{color:#B91C1C;font-weight:600}
.atl2 .app:not(.pipe) .h-thu,.atl2 .app:not(.pipe) .thu{display:none!important}
.atl2 .fzone.mapoff>.conts{display:flex}
.atl2 .fzone.mapoff>.conts .cbtn{display:none}
.atl2 .fzone.mapoff>.conts{border-bottom:0;padding-top:4px;padding-bottom:4px}
.atl2 .fzone.mapoff .stage{border-top:0}
.atl2 .tuto.mini .goal{display:inline-flex;align-items:center;flex:none;font-size:11px;padding:4px 10px}
.atl2 .fzone.mapoff>.conts{display:none}
.atl2 .mapbtn{display:flex;align-items:center;gap:6px;height:30px;padding:0 12px;background:var(--panel);
  border:1px solid var(--line);border-radius:var(--r);font-size:11.5px;font-weight:600;color:var(--muted);
  cursor:pointer;white-space:nowrap;flex:none}
.atl2 .mapbtn:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .fbar .fsrch{height:30px;padding:0 10px;box-sizing:border-box;font-size:12px}
.atl2 .stage:not(.folded) .fbar .fsrch{width:100%;max-width:none;flex:none;min-width:0}
.atl2 .fbar .fsrch input{font-size:12px;height:100%}
.atl2 .fbar .fsrch{flex:0 1 128px;max-width:128px;min-width:104px}
.atl2 .stage.folded .fbar .fsrch{flex:0 1 128px;max-width:128px}
.atl2 .fbar .seg button{padding:0 9px;gap:5px}
.atl2 .alertbtn{padding:0 12px}
.atl2 .resetbtn{padding:0 10px}
.atl2 .tuto{align-items:center;gap:12px;padding:8px 14px 9px}
.atl2 .tuto::before{content:"";position:absolute;top:-6px;left:var(--ax,60px);width:13px;height:13px;
  background:var(--bg);transform:rotate(45deg);border-radius:2px}
.atl2 .tuto .fold{display:none}
.atl2 .tuto p{margin:0;font-size:12.5px;font-weight:500;color:var(--ink);white-space:nowrap;
  overflow:hidden;text-overflow:ellipsis}
.atl2 .tuto .acts{display:none}
.atl2 .fbar{gap:5px}
.atl2 .fbtn{padding:0 8px;gap:5px;font-size:11.5px}
.atl2 .fbar .seg{gap:4px}
.atl2 .fbar .seg button{padding:0 8px;gap:4px;font-size:11px}
.atl2 .fbar .frow2{gap:5px}
.atl2 .alertbtn{padding:0 11px}
.atl2 .mapbtn{padding:0 10px}
.atl2 .funnel{border-bottom:0;padding-bottom:0}
.atl2 .tuto{position:relative;margin-top:0;border-top:0;border-bottom:1px solid var(--line);
  padding:11px 14px 11px 14px;align-items:center;gap:12px}
.atl2 .tuto::before{content:"";position:absolute;top:-7px;left:var(--ax,60px);width:15px;height:15px;
  background:var(--bg);transform:rotate(45deg);border-radius:2px;z-index:2}
.atl2 .tstep{display:inline-block;font-family:var(--mono);font-size:8px;letter-spacing:.16em;font-weight:700;
  color:var(--ink);background:rgba(15,23,42,.07);border-radius:var(--rs);
  padding:3px 8px;margin-right:9px;vertical-align:1px}
.atl2 .tuto p{margin:0;font-size:12.5px;font-weight:500;color:var(--muted);white-space:nowrap;
  overflow:hidden;text-overflow:ellipsis}
.atl2 .tuto .goal{background:rgba(255,255,255,.6)}
.atl2 .drow{flex-wrap:nowrap}
.atl2 .dfield{flex:1 1 auto;min-width:0}
@media (max-width:900px){
.atl2 .drow{flex-wrap:wrap}}
.atl2 .memo .mf .deep{background:var(--blue);color:#fff;border:0;border-radius:var(--ra);padding:10px 16px;
  font-size:12.5px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .memo .mf .deep:hover{filter:brightness(1.12)}
.atl2 .memo .mf .deep em{font-style:normal;font-weight:600;font-size:11px;opacity:.8;margin-left:4px}
.atl2 .memo .mf .go{background:var(--ink)}
.atl2 .memo .mf .go:hover{background:#000;filter:none}
.atl2 .memo .mf .t b{color:var(--ink)}
.atl2 .funnel{align-items:stretch}
.atl2 .chain2{align-items:stretch}
.atl2 .offtrack{align-items:stretch}
.atl2 .offtrack .off{height:auto;justify-content:center;padding:7px 13px}
.atl2 .offtrack .div{align-self:stretch;margin:0 4px}
.atl2 .tuto::before{content:"";position:absolute;top:-8px;left:var(--ax,60px);width:17px;height:17px;
  background:var(--bg);transform:rotate(45deg);border-radius:3px;z-index:3;
  margin-left:-8px}
.atl2 .tstep{background:var(--stc,rgba(15,23,42,.07));color:var(--stt,#fff)}
.atl2 .funnel{border-bottom:0;padding-bottom:7px;background:var(--panel)}
.atl2 .tuto{position:relative;overflow:visible}
.atl2 .tuto::before{content:"";position:absolute;top:-9px;left:var(--ax,60px);margin-left:-9px;
  width:18px;height:18px;background:var(--bg);transform:rotate(45deg);border-radius:3px;z-index:4;
  border-top:1.5px solid var(--stc,var(--line2));border-left:1.5px solid var(--stc,var(--line2))}
.atl2 .funnel{border-bottom:0;padding-bottom:0;background:var(--panel);position:relative;z-index:1}
.atl2 .tuto{position:relative;overflow:visible;box-shadow:none;z-index:2}
.atl2 .tuto::before{content:"";position:absolute;top:-8px;left:var(--ax,60px);margin-left:-8px;
  width:16px;height:16px;background:var(--bg);transform:rotate(45deg);border-radius:2px;z-index:5;
  border-top:1px solid var(--stc,var(--line2));border-left:1px solid var(--stc,var(--line2))}
.atl2 .vd{width:auto!important;height:auto!important;border-radius:var(--rs)!important;display:inline-flex}
.atl2 .step .warn{display:none}
.atl2 .co.off{pointer-events:none}
.atl2 .co.off .h{pointer-events:none}
.atl2 .offtrack{display:flex;align-items:stretch;gap:0;flex:none;margin-left:10px;
  background:var(--panel);border:1px solid var(--line);border-radius:var(--r);overflow:hidden}
.atl2 .offtrack .div{display:none}
.atl2 .off{display:flex;flex-direction:column;justify-content:center;gap:2px;
  border:0;border-right:1px solid var(--line);border-radius:0;background:none;
  padding:7px 15px;cursor:pointer;color:var(--muted);text-align:left;transition:background .13s}
.atl2 .off:last-child{border-right:0}
.atl2 .off:hover{background:var(--panel2);color:var(--ink)}
.atl2 .off.view{border-style:solid}
.atl2 .off .l{font-family:var(--mono);font-size:7.5px;letter-spacing:.14em;white-space:nowrap;color:var(--dim)}
.atl2 .off .n{font-size:15px;font-weight:700;line-height:1;color:var(--ink)}
.atl2 .off[aria-selected="true"]{background:var(--c)}
.atl2 .off[aria-selected="true"] .l{color:rgba(255,255,255,.85)}
.atl2 .off[aria-selected="true"] .n{color:#fff}
.atl2 .off.view .l{color:var(--dim)}
.atl2 .off.view[aria-selected="true"]{background:var(--ink)}
.atl2 .offtrack{display:flex;align-items:stretch;gap:0;flex:none;margin-left:16px;
  background:none;border:0;border-radius:0;overflow:visible;
  border-left:1px solid var(--line);padding-left:16px}
.atl2 .off{border:0;border-right:1px solid var(--line);border-radius:0;background:none;padding:7px 15px}
.atl2 .off:last-child{border-right:0;padding-right:2px}
.atl2 .off:hover{background:none;color:var(--ink)}
.atl2 .off:hover .n{text-decoration:underline;text-underline-offset:3px}
.atl2 .off[aria-selected="true"]{background:none}
.atl2 .off[aria-selected="true"] .l{color:var(--c)}
.atl2 .off[aria-selected="true"] .n{color:var(--c);position:relative}
.atl2 .off.view[aria-selected="true"] .l,.atl2 .off.view[aria-selected="true"] .n{color:var(--ink)}
.atl2 .off[aria-selected="true"] .n::after{content:"";position:absolute;left:0;right:0;bottom:-5px;
  height:2px;background:currentColor;border-radius:2px}
.atl2 #pName{display:flex;align-items:center;gap:9px;flex-wrap:wrap}
.atl2 .pfl{width:20px;height:14px;border-radius:2px;object-fit:cover;box-shadow:0 0 0 1px rgba(15,23,42,.12)}
.atl2 .pctry{font-size:11.5px;font-weight:500;color:var(--muted)}
.atl2 .psrc{color:var(--muted);text-decoration:none;border-bottom:1px dotted var(--line2)}
.atl2 .psrc:hover{color:var(--ink)}
.atl2 #pMemo{border:0;border-left:2px solid var(--line2);border-radius:0;background:none;
  padding:2px 0 2px 13px;margin-top:6px;font-size:13px;line-height:1.6;color:var(--muted);font-style:italic}
.atl2 .pop .fld .l{margin-bottom:5px}
.atl2 .pop .fld+.fld{margin-top:14px}
.atl2 .memobtn,.atl2 .memobtn.read,.atl2 .memobtn.sm,.atl2 .memo .mf .go,.atl2 .memo .mf .deep,.atl2 .cside .btn.p,.atl2 .evalbtn.read,.atl2 .evalbtn.memo,.atl2 .qgo,.atl2 .qgo.an,.atl2 .dmemo{
  background:var(--blue);color:#fff;border:0;box-shadow:none}
.atl2 .memobtn:hover,.atl2 .memobtn.read:hover,.atl2 .memo .mf .go:hover,.atl2 .memo .mf .deep:hover,.atl2 .cside .btn.p:hover,.atl2 .evalbtn.read:hover,.atl2 .evalbtn.memo:hover,.atl2 .qgo:hover,.atl2 .dmemo:hover{
  filter:brightness(1.1);background:var(--blue)}
.atl2 .dmemo{background:var(--blue)}
.atl2 .offtrack{display:flex;align-items:stretch;gap:6px;flex:none;margin-left:14px;padding-left:0;
  background:none;border:0;border-radius:0;overflow:visible}
.atl2 .offtrack .div{display:none}
.atl2 .off{border:0!important;border-radius:var(--r);padding:7px 15px;
  background:color-mix(in srgb, var(--c) 13%, #fff);
  display:flex;flex-direction:column;justify-content:center;gap:2px;cursor:pointer;text-align:left}
.atl2 .off:hover{background:color-mix(in srgb, var(--c) 22%, #fff)}
.atl2 .off .l{font-family:var(--mono);font-size:7.5px;letter-spacing:.14em;white-space:nowrap;
  color:color-mix(in srgb, var(--c) 78%, #0F172A)}
.atl2 .off .n{font-size:15px;font-weight:700;line-height:1;
  color:color-mix(in srgb, var(--c) 62%, #0F172A);text-decoration:none}
.atl2 .off:hover .n{text-decoration:none}
.atl2 .off[aria-selected="true"]{background:var(--c)}
.atl2 .off[aria-selected="true"] .l{color:rgba(255,255,255,.85)}
.atl2 .off[aria-selected="true"] .n{color:#fff}
.atl2 .off .n::after{display:none}
.atl2 .off[style*="--pf"][aria-selected="true"] .l{color:rgba(15,23,42,.6)}
.atl2 .off[style*="--pf"][aria-selected="true"] .n{color:#0F172A}
.atl2 .expl{display:flex;flex-direction:column;gap:9px;margin:6px 0 14px}
.atl2 .exi{display:flex;align-items:center;gap:13px;border:1px solid var(--line);border-radius:var(--r);padding:13px 15px}
.atl2 .exic{font-size:17px;width:34px;height:34px;display:grid;place-items:center;background:var(--panel2);
  border-radius:var(--r);flex:none}
.atl2 .exi b{font-size:14px}
.atl2 .exi p{font-size:12.5px;color:var(--muted);margin:3px 0 0;line-height:1.55}
.atl2 .exi>div{flex:1;min-width:0}
.atl2 .exb{background:var(--panel);border:1px solid var(--line2);border-radius:var(--ra);padding:8px 14px;
  font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;flex:none}
.atl2 .exb:hover{border-color:var(--ink)}
.atl2 .ic.spin{animation:atl2-spin .6s ease}
.atl2 #pMemo,.atl2 .pop .memo{background:none!important;box-shadow:none!important;border:0;
  border-left:2px solid var(--line2);border-radius:0;padding:1px 0 1px 13px;margin-top:5px;
  font-size:13px;line-height:1.6;color:var(--muted);font-style:italic}
.atl2 .pop .tags button{font-family:var(--mono);font-size:8.5px;letter-spacing:.1em;border:1px solid var(--line);
  background:var(--panel);color:var(--muted);border-radius:var(--rs);padding:4px 8px;cursor:pointer}
.atl2 .pop .tags button:hover{border-color:var(--ink);color:var(--ink)}
.atl2 .pop .tags button.hi{background:var(--ink);border-color:var(--ink);color:#fff}
.atl2 .pop .tags button.hi:hover{filter:brightness(1.25)}
.atl2 .pop .tags .am2{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--ink);
  background:var(--panel3);border-radius:var(--rs);padding:3px 9px}
.atl2 .psig{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin-top:9px}
.atl2 .pdate{font-size:11.5px;color:var(--muted)}
.atl2 .pnos{margin-top:6px;font-size:11.5px;color:var(--dim)}
.atl2 .pop .pf{display:flex;gap:8px;align-items:stretch}
.atl2 .pop .pf .evalbtn{flex:1;justify-content:center}
.atl2 .psite{flex:none;width:46px;display:grid;place-items:center;border:1px solid var(--line2);
  border-radius:var(--ra);font-size:16px;text-decoration:none;background:var(--panel)}
.atl2 .psite:hover{border-color:var(--ink);background:var(--panel2)}
.atl2 .off{border-radius:0!important}
.atl2 .pop{width:352px}
.atl2 .pop .pb{max-height:none;overflow:visible;padding:13px 16px}
.atl2 .pop .pb .fld p{font-size:13px;line-height:1.6}
.atl2 .pop .pb .fld{margin-bottom:13px}
.atl2 .pop .pb .fld:last-child{margin-bottom:0}
@media (max-height:760px){
.atl2 .pop .pb .fld p{font-size:12.5px;line-height:1.55}
.atl2 .pop .pb{padding:11px 15px}}
.atl2 .off.view[aria-selected="true"],.atl2 .off[aria-selected="true"]{background:var(--c)}
.atl2 .off.view[aria-selected="true"] .l,.atl2 .off[aria-selected="true"] .l{color:rgba(255,255,255,.86)}
.atl2 .off.view[aria-selected="true"] .n,.atl2 .off[aria-selected="true"] .n{color:#fff}
.atl2 .off.view[style*="--pf"][aria-selected="true"] .l{color:rgba(15,23,42,.62)}
.atl2 .off.view[style*="--pf"][aria-selected="true"] .n{color:#0F172A}
.atl2 .off .n::after,.atl2 .off[aria-selected="true"] .n::after,.atl2 .off.view[aria-selected="true"] .n::after{display:none!important;content:none!important}
.atl2 .onb{background:#0B1220;color:#fff;padding:22px 22px 24px;border-bottom:1px solid var(--line)}
.atl2 .onbh{margin-bottom:20px}
.atl2 .onb .tag{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:8px;
  letter-spacing:.2em;color:#5FD39B;font-weight:700;margin-bottom:11px}
.atl2 .onb .tag i{width:6px;height:6px;border-radius:50%;background:#5FD39B;animation:atl2-blink 1.8s infinite}
.atl2 .onb h2{margin:0 0 7px;font-size:23px;font-weight:700;letter-spacing:-.028em;line-height:1.15}
.atl2 .onb h2 b{color:#5FD39B;font-weight:700}
.atl2 .onb .sub{font-size:13.5px;color:#9FB6CA;line-height:1.55;max-width:76ch}
.atl2 .steps4{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:0;position:relative}
.atl2 .s4{position:relative;padding:0 18px 0 0}
.atl2 .s4+.s4{padding-left:18px;border-left:1px solid #1E2C41}
.atl2 .s4n{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;
  background:#1B2A40;color:#7C93AB;font-family:var(--mono);font-size:11px;font-weight:700;margin-bottom:10px}
.atl2 .s4.go .s4n{background:var(--brand);color:#fff}
.atl2 .s4t{font-size:14.5px;font-weight:700;margin-bottom:4px}
.atl2 .s4d{font-size:12.5px;color:#93A9BE;line-height:1.5;margin-bottom:12px;min-height:38px}
.atl2 .s4b{background:none;border:1px solid #2A3B54;color:#C6D5E3;border-radius:99px;padding:8px 15px;
  font-size:12px;font-weight:600;cursor:pointer}
.atl2 .s4b:hover{border-color:#4A607E;color:#fff}
.atl2 .s4b.p{background:var(--brand);border-color:var(--brand);color:#fff;font-weight:700}
.atl2 .s4b.p:hover{filter:brightness(1.12)}
@media (max-width:820px){
.atl2 .s4+.s4{border-left:0;padding-left:0;margin-top:18px}}
.atl2 #rdvM .mcard{width:min(760px,100%)}
.atl2 #rdvM .mb{padding:0 22px 22px}
.atl2 .mksrc{padding:8px 12px;border-bottom:1px solid var(--line);background:var(--panel);
  font-size:11px;color:var(--dim);letter-spacing:.02em}
.atl2 .bulk .side{min-width:210px;flex:none}
.atl2 .bulk .side .evalbtn{width:100%;white-space:nowrap;padding:0 18px;min-width:0}
.atl2 .bulk .side .hint{white-space:nowrap}`,It=`
/* coque : hauteur pilotée par le montage (page /carte, iframe onglet ⑤, démo home) */
.atl2{height:var(--atelier-h,calc(100dvh - 60px));display:block;position:relative;overflow:hidden;border-radius:inherit}
.atl2 .app{height:100%}
/* le proto dimensionne la scène en vh (viewport) : dans une coque à hauteur fixe
   on raisonne en % du CONTENEUR — leçon v1 : le % se pose sur .fzone, ENFANT
   DIRECT de .app (hauteur définie), jamais sur un descendant en hauteur auto. */
.atl2 .fzone{flex:0 0 auto;height:38%;min-height:300px;max-height:470px;display:flex;flex-direction:column}
.atl2 .fzone .conts{flex:none}
.atl2 .stage{flex:1;height:auto;min-height:0;max-height:none}
.atl2 .stage.folded{flex:none;height:auto;min-height:0}
.atl2 .fzone:has(.stage.folded){height:auto;min-height:0}
.atl2 .mapzone svg{max-height:100%}
/* les portails (popup, modales, toast) montent sur document.body AVEC la classe
   .atl2 sur leur racine : le scope s'applique, position:fixed reste viewport. */
`,_t=Pt+It;function $t(t){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(t)||""}catch{return""}}function Ut(t,a){return t||a.mode!=="client"||!a.token?"visiteur":$t("teaser")==="1"?"apercu":"client"}const Ht={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!1,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0}},Vt=t=>Ht[t],oe=t=>Object.assign(t,{continent:yt(t.cc)});function je(t){const a=new Set,n=[];for(const r of t){const o=(r.name||"").toLowerCase();!o||a.has(o)||(a.add(o),n.push(r))}return n}const Yt=60*60*1e3;function Wt(t){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+t)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>Yt?null:a}catch{return null}}function me(t,a){try{sessionStorage.setItem("ppmap:swr:"+t,JSON.stringify({...a,ts:Date.now()}))}catch{}}const Gt=t=>t==="default"?"":t==="ops"?"ops":"research:"+t.research;function Kt(t,a,n="default"){const r=n!=="default",o=x.useMemo(()=>t||r?{mode:"anon"}:gt(),[t,r]),d=x.useMemo(()=>r?"visiteur":Ut(t,o),[t,o,r]),s=x.useMemo(()=>Vt(d),[d]),c=d!=="visiteur",f=Gt(n),[p,u]=x.useState([]),[i,h]=x.useState(""),[b,m]=x.useState(null),[v,l]=x.useState(""),[w,j]=x.useState(new Set),[y,C]=x.useState(null),[T,R]=x.useState(!0),[I,g]=x.useState(!1),[N,A]=x.useState(0),[F,D]=x.useState(0),O=x.useRef(0),z=x.useMemo(()=>{var S;if(d!=="client")return"";try{return((S=mt())==null?void 0:S.email)||""}catch{return""}},[d]);x.useEffect(()=>{const S=++O.current;let q=!0;const P=()=>q&&S===O.current,W=(c&&o.token?o.token:"pub:"+a)+(f?":"+f:""),ee=Wt(W);return ee?(u(ee.objs.map(oe)),ee.fund&&h(ee.fund),m(ee.marketEstimate??null),l(ee.generatedAt||""),R(!1)):R(!0),(async()=>{try{if(n==="ops"){const Q=await ye(),G=((Q==null?void 0:Q.recent_ops)||[]).map(V=>we(V,a)).filter(V=>!!V);if(!P())return;u(G.map(oe)),me(W,{objs:G})}else if(typeof n=="object"){const G=(await Re()||[]).filter(L=>(L.slug||"")===n.research).map(L=>Le(L,a)).filter(L=>!!L),V=je(await Pe(G,a));if(!P())return;u(V.map(oe)),me(W,{objs:V})}else if(c&&o.token){const Q=bt(o.token),G=ye(),V=ht(o.token),L=await Q;let te=L?L.targets:[];P()&&L&&(h(L.fund||""),m(L.marketEstimate??null),l(L.generatedAt||""),u(te.map(oe)),R(!1),g(!1));const[J,ce]=await Promise.all([G,V]),fe=((J==null?void 0:J.recent_ops)||[]).map(K=>we(K,a)).filter(K=>!!K);if(te=[...te,...fe],!P())return;u(te.map(oe));const ie=new Set;for(const K of ce){const $=(K.id||K.co||"").toString().trim().toLowerCase();$&&ie.add($.startsWith("t:")?$:"t:"+$)}j(ie),L&&me(W,{fund:L.fund,marketEstimate:L.marketEstimate,generatedAt:L.generatedAt,objs:te})}else{const Q=vt(),G=Re(),V=ye(),L=await Q;P()&&L.length&&(u(je(L).map(oe)),R(!1),g(!1));const[te,J]=await Promise.all([G,V]),ce=(te||[]).map($=>Le($,a)).filter($=>!!$),fe=await Pe(ce,a),ie=((J==null?void 0:J.recent_ops)||[]).map($=>we($,a)).filter($=>!!$),K=je([...L,...fe,...ie]);if(!P())return;u(K.map(oe)),me(W,{objs:K})}P()&&g(!1)}catch{P()&&!ee&&g(!0)}finally{P()&&R(!1)}})(),()=>{q=!1}},[c,o.token,a,N,f]),x.useEffect(()=>{if(!s.showCredits||!z){C(null);return}let S=!0;return(async()=>{try{const q=await fetch(`${Ce}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:z})});if(!q.ok)return;const P=await q.json();S&&P&&P.ok!==!1&&C(P)}catch{}})(),()=>{S=!1}},[s.showCredits,z,F]);const M=x.useCallback(S=>j(new Set(S)),[]);return{session:o,mode:d,caps:s,fund:i,email:z,marketEstimate:b,generatedAt:v,dossiers:p,favIds:w,setFavIds:M,credits:y,reloadCredits:()=>D(S=>S+1),loading:T,error:I,refresh:()=>A(S=>S+1)}}const Qt={retenu:1,ana:2,pending:3,valide:4,ecarte:5};function H(t){return U(t)?Qt[ze(t)]??1:0}function he(t){return t.memoUrl?(t.memoType||"").trim().toLowerCase()==="detailed"?2:1:0}function Jt(t){if(ze(t)!=="pending"||!t.verdictDate)return null;const a=le(t.verdictDate);return a>=0&&a<3650?a:null}function Ne(t){return ze(t)!=="pending"?null:(t.verdict||"").trim().toUpperCase().includes("CALL")?"auto":"cd"}function Xt(t){const a=(t.verdict||"").trim().toUpperCase();return!a||a==="NEW"||a==="LEAD"?null:a.includes("NO MATCH")?"NO MATCH":"MATCH"}function Ae(t){const a=(t.verdict||"").trim().toUpperCase();return a.includes("CALL")?wt(t):a==="CONSIDER"||a==="MONITOR"||a==="PASS"?a:null}function Fe(t){return H(t)===3&&he(t)===1}function Zt(t,a){const n={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0};for(const r of t){const o=H(r);n[o]++,o>=1&&n[7]++,a.has(r.id)&&n[6]++}return n}function ea(t,a,n){return a===6?n.has(t.id):a===7?H(t)>=1:H(t)===a}const ot=()=>({win:"all",status:"all",signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],search:""}),ta=(t="europe",a=!1,n)=>({continent:t,ptab:(n==null?void 0:n.ptab)??1,dens:(n==null?void 0:n.dens)??"liste",filters:{...ot(),...(n==null?void 0:n.filters)||{}},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,modal:null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,memoTab:0,undo:[],mapFolded:a});function aa(t,a){switch(a.type){case"continent":return{...t,continent:a.key,filters:{...t.filters,country:[]},shown:{},popupId:null,openFacet:null};case"ptab":return{...t,ptab:a.tab,shown:{},popupId:null};case"dens":return{...t,dens:a.dens,shown:{}};case"filters":return{...t,filters:{...t.filters,...a.patch},shown:{}};case"toggleFacet":{const n=t.filters[a.facet],r=n.includes(a.value)?n.filter(o=>o!==a.value):[...n,a.value];return{...t,filters:{...t.filters,[a.facet]:r},shown:{}}}case"toggleMemoLevel":{const n=t.filters.memoLevel,r=n.includes(a.value)?n.filter(o=>o!==a.value):[...n,a.value];return{...t,filters:{...t.filters,memoLevel:r},shown:{}}}case"clearFacet":return{...t,filters:{...t.filters,[a.facet]:[]},shown:{}};case"reset":return{...t,filters:ot(),shown:{},openFacet:null};case"sort":return{...t,sort:t.sort.key===a.key?{key:a.key,dir:t.sort.dir*-1}:{key:a.key,dir:a.key==="signal"||a.key==="amount"||a.key==="score"?-1:1}};case"groupBy":return{...t,groupBy:a.groupBy};case"more":return{...t,shown:{...t.shown,[a.group]:(t.shown[a.group]||be)+a.by}};case"pile":return{...t,pileMode:a.on,popupId:null};case"openFacet":return{...t,openFacet:t.openFacet===a.facet?null:a.facet};case"popup":return{...t,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"modal":return{...t,modal:a.modal,popupId:a.modal?null:t.popupId};case"chainStart":return{...t,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...t,chain:{...t.chain,idx:t.chain.idx+1}};case"spaceTab":return{...t,spaceTab:a.tab};case"memoConsole":return{...t,memoConsole:a.id,memoTab:0};case"memoTab":return{...t,memoTab:a.tab};case"undoPush":return{...t,undo:[...t.undo,a.entry].slice(-50)};case"undoPop":return{...t,undo:t.undo.slice(0,-1)};case"mapFold":return{...t,mapFolded:a.folded,openFacet:null};default:return t}}const be=60;function Me(t,a,n,r){if(r!=="signal"&&a.signalOnly&&(!_(t)||a.signalEngines.length&&!a.signalEngines.includes(t.engine||""))||r!=="dealKind"&&a.dealKind.length&&!a.dealKind.includes(t.dealKind||"")||r!=="sector"&&a.sector.length&&!a.sector.includes(t.sector||"")||r!=="engine"&&a.engine.length&&!a.engine.includes(t.engine||"")||r!=="stage"&&a.stage.length&&!a.stage.includes(t.stage||"")||r!=="angle"&&n&&a.angle.length&&!a.angle.includes(t.angle||"")||r!=="memoLevel"&&n&&a.memoLevel.length&&!a.memoLevel.includes(he(t)))return!1;if(r!=="win"&&a.win!=="all"){const o=a.win==="1"?0:a.win==="7"?7:30;if(le(t.date)>o)return!1}if(r!=="status"&&!n&&a.status!=="all"&&re(t)!==a.status)return!1;if(r!=="search"&&a.search.trim()){const o=a.search.trim().toLowerCase();if(!`${t.name||""} ${t.tagline||""} ${t.sector||""}`.toLowerCase().includes(o))return!1}return!0}function lt(t,a,n){return t.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(t.cc||"")?!1:Me(t,a.filters,n)}function ra(t,a,n,r){return!(!lt(t,a,n)||n&&!ea(t,a.ptab,r))}function De(t,a){const n=a.key,r=o=>{switch(n){case"name":return(o.name||"").toLowerCase();case"country":return o.countryLabel||o.cc||"";case"stage":return o.stage||"";case"amount":return o.amountEur||-1;case"age":return-le(o.date);case"score":return typeof o.score=="number"?o.score:-1;case"signal":{const d=_(o);return d?100-(d.left??0):-1}}};return[...t].sort((o,d)=>{const s=r(o),c=r(d);return s<c?-a.dir:s>c?a.dir:(o.name||"").localeCompare(d.name||"")})}function na(){const{dossiers:t,st:a,t:n,dispatch:r,contName:o,pipe:d}=E(),s=x.useMemo(()=>{const f=i=>d?!0:i.continent===a.continent,p=t.filter(i=>f(i)&&_(i)),u=t.filter(i=>f(i)&&i.kind==="op"&&!_(i)&&(i.dealKind==="ma"||i.dealKind==="levee")&&le(i.date)<=2);return u.sort((i,h)=>(h.amountEur||0)-(i.amountEur||0)),[...De(p,{key:"signal",dir:-1}),...u].slice(0,40)},[t,a.continent,d]),c=f=>s.map(p=>e.jsxs("button",{type:"button",className:"tk"+(U(p)?" spent":""),onClick:u=>{const i=u.currentTarget.getBoundingClientRect();r({type:"popup",id:p.id,anchor:{x:i.left+i.width/2,y:i.bottom}})},title:p.name+(p.tagline?" — "+p.tagline:""),children:[e.jsx(pe,{o:p}),e.jsxs("span",{className:"who",children:[e.jsx(st,{o:p}),e.jsx("span",{className:"co",children:p.name})]}),typeof p.amountEur=="number"&&p.amountEur>0&&e.jsx("span",{className:"am",children:Ya(p.amountEur)}),p.sector&&e.jsx("span",{className:"mt",children:p.sector}),e.jsx(ve,{o:p}),e.jsx("span",{className:"tkgo",children:"→"})]},f+(p.id||p.name)));return e.jsxs("div",{className:"ticker",children:[e.jsxs("span",{className:"lbl",children:[e.jsx("i",{}),n.live,e.jsx("span",{className:"cnt",children:s.length})]}),e.jsx("div",{className:"win",children:s.length?e.jsxs("div",{className:"run",children:[c(0),c(1)]}):e.jsx("div",{className:"run",style:{animation:"none"},children:e.jsx("span",{className:"tk quiet",children:n.liveQuiet(o)})})})]})}function oa(){const{dossiers:t,pipe:a,t:n,st:r,dispatch:o}=E(),d=x.useMemo(()=>t.filter(i=>le(i.date)===0&&i.kind==="target"),[t]),s=x.useMemo(()=>d.filter(i=>a?H(i)===0:!U(i)),[d,a]),c=d.length-s.length,f=d.length?Math.min(100,c/d.length*100):100;let p;a?p=n.morningThesis(d.length,c,s.length):d.length?c===0?p=n.goalSourced(d.length):c>=d.length?p=n.goalCleared:p=n.goalDone(c,d.length):p=n.goalSourced(0);const u=()=>{a?(o({type:"ptab",tab:0}),o({type:"filters",patch:{win:"1"}})):o({type:"pile",on:!0})};return e.jsxs("div",{className:"goal",children:[e.jsx("span",{className:"gtxt",dangerouslySetInnerHTML:{__html:p}}),e.jsx("div",{className:"pbar",children:e.jsx("i",{style:{width:f+"%"}})}),s.length>0&&e.jsx("button",{type:"button",className:"pilebtn",onClick:u,children:a?n.morningEval(s.length):r.pileMode?n.goalContinue(s.length):n.goalTreat}),e.jsx("span",{className:"gspace"})]})}function la(){var N;const{t,st:a,dispatch:n,token:r,fund:o,data:d,dossiers:s,mode:c,doSync:f}=E(),[p,u]=x.useState(null),[i,h]=x.useState([]),[b,m]=x.useState(!1),v=c==="client";x.useEffect(()=>{if(!r||!o)return;let A=!0;return(async()=>{const[F,D]=await Promise.all([Ze(o),et(r)]);A&&(F&&u(F),h(D))})(),()=>{A=!1}},[r,o]);const l=(p==null?void 0:p.per_day)??null,w=((N=p==null?void 0:p.pool_order)==null?void 0:N.length)??0,j=i.filter(A=>A.status==="running").length,y=A=>{if(!v||l===null||b)return;const F=Math.max(0,Math.min(10,l+A));F!==l&&(m(!0),u(D=>D&&{...D,per_day:F}),tt(r,F).then(D=>{m(!1),u(D===null?O=>O&&{...O,per_day:l}:O=>O&&{...O,per_day:D})}))},C=x.useMemo(()=>s.filter(A=>A.kind==="target"&&U(A)).length,[s]),T=d.marketEstimate,R=T&&T>0?Math.min(100,Math.round(C/T*100)):null,I=(o||"P").split(/\s+/).map(A=>A[0]).join("").slice(0,2).toUpperCase(),g=(()=>{const A=Date.parse(d.generatedAt||"");if(Number.isNaN(A))return"";const F=new Date(A),D=O=>String(O).padStart(2,"0");return`${D(F.getDate())}/${D(F.getMonth()+1)} à ${D(F.getHours())}:${D(F.getMinutes())}`})();return e.jsxs("div",{className:"ident",children:[e.jsxs("div",{className:"idtop",children:[e.jsxs("span",{className:"brand",children:[e.jsx("b",{children:I}),e.jsx("i",{children:o})]}),e.jsx("h1",{children:t.identTitle(o||"…")}),e.jsx("span",{className:"idsp"}),g&&e.jsx("span",{className:"idupd",children:t.identUpdatedAt(g)}),e.jsx("button",{type:"button",className:"ic",title:t.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),e.jsx("button",{type:"button",className:"ic",title:t.identTuto,onClick:()=>n({type:"modal",modal:"tuto"}),children:"▶"})]}),e.jsxs("div",{className:"idmain",children:[R!==null&&T&&e.jsxs("span",{className:"cover",title:t.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[e.jsx("span",{className:"el",children:t.identCoverage}),e.jsxs("span",{className:"ev",children:[e.jsx("span",{className:"bar",children:e.jsx("i",{style:{width:R+"%"}})}),e.jsxs("b",{children:[R," %"]})]}),e.jsx("span",{className:"edv"}),e.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:t.identCoverageOf(C,T)}})]}),e.jsxs("span",{className:"engine",title:t.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[e.jsx("span",{className:"el",children:t.identEngine}),l!==null&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"ev",children:[e.jsx("b",{className:"mi",onClick:A=>{A.stopPropagation(),y(-1)},children:"−"}),e.jsx("b",{className:"q",children:l})," ",t.identPerDay,e.jsx("b",{className:"mi",onClick:A=>{A.stopPropagation(),y(1)},children:"+"})]}),e.jsx("span",{className:"edv"})]}),l===0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"epause",title:t.identPauseTitle,children:t.identPause}),e.jsx("span",{className:"edv"})]}),j>0&&e.jsxs("span",{className:"ev",children:["⏳ ",j]}),e.jsx("span",{className:"ego",children:t.identPending(w)})]}),e.jsx("span",{className:"idsp"}),e.jsxs("span",{className:"icgrp",children:[e.jsx("button",{type:"button",className:"ic",title:t.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),e.jsx("button",{type:"button",className:"ic",title:t.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),e.jsx("button",{type:"button",className:"ic",title:t.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),e.jsx("button",{type:"button",className:"ic",title:t.identSync,disabled:!v,onClick:f,children:"🔄"})]}),e.jsxs("span",{className:"isrch",children:["🔍",e.jsx("input",{placeholder:t.identSearch,value:a.filters.search,onChange:A=>n({type:"filters",patch:{search:A.target.value}})})]})]})]})}function ia(){const{t,counts:a,dispatch:n}=E();return e.jsxs("div",{className:"onb",children:[e.jsxs("div",{className:"onbh",children:[e.jsxs("span",{className:"tag",children:[e.jsx("i",{}),t.onbTag]}),e.jsx("h2",{dangerouslySetInnerHTML:{__html:t.onbTitle(a[1]+a[2]+a[3])}}),e.jsx("div",{className:"sub",children:t.onbSub(a[7])})]}),e.jsx("div",{className:"steps4",children:t.onbSteps.map(([r,o],d)=>{const s=d===t.onbSteps.length-1;return e.jsxs("div",{className:"s4"+(s?" go":""),children:[e.jsx("span",{className:"s4n",children:d+1}),e.jsx("div",{className:"s4t",children:r}),e.jsx("div",{className:"s4d",children:o}),s&&e.jsx("button",{type:"button",className:"s4b p",onClick:()=>n({type:"modal",modal:"rdv"}),children:t.onbCta})]},d)})})]})}const sa=["--p0","--p1","--p2","--p3","--p4"];function da(){const{st:t,dispatch:a,counts:n,t:r,doUndo:o}=E(),d=x.useRef({});x.useEffect(()=>{d.current={...n}},[n]);const s=p=>{const u=d.current[p],i=u!==void 0?n[p]-u:0;return e.jsxs("button",{type:"button",className:"step"+(p===3&&n[3]>0?" wait":""),style:{"--c":`var(${sa[p]})`,"--tc":p<=3?"var(--ink)":"#fff"},"aria-selected":t.ptab===p,title:r.phelp[p],onClick:()=>a({type:"ptab",tab:p}),children:[e.jsxs("span",{className:"l",children:[r.plabels[p].toUpperCase(),p===3&&n[3]>0&&e.jsx("i",{className:"wd"})]}),e.jsxs("span",{className:"n"+(i>0?" up":i<0?" down":""),children:[n[p],i!==0&&e.jsxs("em",{className:"delta",children:[i>0?"+":"−",Math.abs(i)]})]})]},p)},c=(p,u,i)=>e.jsxs("button",{type:"button",className:"off"+(u?" view":""),style:{"--c":p===5?"var(--p5)":p===6?"var(--pf)":"var(--pv)"},"aria-selected":t.ptab===p,title:r.phelp[p],onClick:()=>a({type:"ptab",tab:p}),children:[e.jsx("span",{className:"l",children:i.toUpperCase()}),e.jsx("span",{className:"n",children:n[p]})]},p),f=(p,u,i,h=!1)=>e.jsx("button",{type:"button",className:"tool",title:u,disabled:h,onClick:i,children:p},u);return e.jsxs("div",{className:"funnel",children:[e.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(s)}),e.jsxs("div",{className:"offtrack",children:[c(5,!1,r.plabels[5]),c(7,!0,r.plabels[7]),c(6,!0,"★ "+r.plabels[6])]}),e.jsxs("span",{className:"ftools",children:[f("↩",r.toolUndo,o,t.undo.length===0),f("↺",r.toolReset,()=>{a({type:"reset"})}),f("⇅",r.toolSort,()=>a({type:"sort",key:t.sort.key})),f("▶",r.toolTuto,()=>a({type:"modal",modal:"tuto"})),f("⚙",r.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}const pa=["#eef1f5","#eaf6ef","#e2f0e8","#fdf3e2","#e2efe7","#fdeaea","#fdf6de","#e8eaee"];function ca(){const{st:t,dispatch:a,t:n,scoped:r,memoQueued:o,doAnalyse:d,mode:s}=E(),c=x.useRef(null),[f,p]=x.useState(60);x.useEffect(()=>{let b=0;const m=()=>{var y;const v=c.current;if(!v)return;const l=(y=v.parentElement)==null?void 0:y.querySelector('.funnel [aria-selected="true"]');if(!l)return;const w=l.getBoundingClientRect(),j=v.getBoundingClientRect();p(Math.max(20,Math.min(w.left+w.width/2-j.left,j.width-30)))};return b=requestAnimationFrame(m),window.addEventListener("resize",m),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",m)}},[t.ptab]);const u=t.ptab;let i=n.tuto[u].p;if(u===3){const b=r.filter(l=>l.kind==="target"&&H(l)===3),m=b.filter(l=>Ne(l)==="auto").length,v=b.filter(l=>Ne(l)==="cd").length;i=n.tutoPending(m,v,b.length)}const h=(()=>{if(s!=="client")return null;if(u===0&&r.length)return{label:n.tuto[0].a,run:()=>a({type:"chainStart",queue:r.map(b=>b.id)})};if(u===1){const b=r.filter(m=>m.kind==="target"&&H(m)===1&&!o.has(m.id)).slice(0,10);if(b.length)return{label:n.tuto[1].a,run:()=>b.forEach(m=>d(m))}}return null})();return e.jsxs("div",{ref:c,className:"tuto mini",style:{"--bg":pa[u],"--ax":f+"px","--stc":"var(--ink)"},children:[e.jsx("span",{className:"txt",children:e.jsxs("p",{children:[e.jsx("b",{className:"tstep",children:n.plabels[u].toUpperCase()}),e.jsx("span",{dangerouslySetInnerHTML:{__html:i}})]})}),h&&e.jsx("button",{type:"button",className:"tprim",onClick:h.run,children:h.label})]})}const We=["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"];function Ge(t){let a=2166136261;for(let n=0;n<t.length;n++)a^=t.charCodeAt(n),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function fa(t,a){const[n,r]=x.useState(1);return x.useEffect(()=>{let o=!0,d=0;const s=()=>{var p;if(!o)return;const f=(p=t.current)==null?void 0:p.getScreenCTM();f&&f.a>0?r(f.a):d=requestAnimationFrame(s)};s();const c=new ResizeObserver(()=>s());return t.current&&c.observe(t.current),window.addEventListener("resize",s),()=>{o=!1,cancelAnimationFrame(d),c.disconnect(),window.removeEventListener("resize",s)}},[t,a]),n}function xa(){const{st:t,dispatch:a,scoped:n,pipe:r,markRow:o,markedId:d,byId:s,lang:c,t:f}=E(),p=x.useRef(null),u=x.useRef(null),i=Se.find(g=>g.key===t.continent),h=fa(p,t.continent+":"+t.mapFolded),[b,m]=x.useState(new Map),[v,l]=x.useState(null);x.useEffect(()=>{const g=p.current;if(!g)return;const N=new Map;g.querySelectorAll("path[data-i2]").forEach(A=>{const F=A.dataset.i2;if(F)try{const D=A.getBBox();D.width>0&&N.set(F,{x:D.x,y:D.y,w:D.width,h:D.height})}catch{}}),m(N)},[t.continent,h]);const w=x.useMemo(()=>n.filter(g=>g.cc),[n]),j=x.useMemo(()=>{const g=new Map;return w.forEach(N=>g.set(N.cc,(g.get(N.cc)||0)+1)),g},[w]),y=x.useMemo(()=>w.map(g=>{const N=g.cc?b.get(g.cc):void 0;if(!N)return null;const A=Ge(g.name||g.id||""),F=Ge((g.id||g.name||"")+"·y"),D=(A-.5)*Math.min(N.w*.55,60),O=(F-.5)*Math.min(N.h*.55,60);return{d:g,x:N.x+N.w/2+D,y:N.y+N.h/2+O}}).filter(g=>!!g),[w,b]),C=g=>h>0?g/h:g,T=x.useMemo(()=>r?[0,1,2,3,4,5].map(g=>({c:We[g],fr:f.plabels[g].toUpperCase(),en:f.plabels[g].toUpperCase(),n:n.filter(N=>N.kind==="target"&&H(N)===g).length})).filter(g=>g.n>0):Ie.map((g,N)=>({...g,n:n.filter(A=>_e(A)===N).length})),[n,r,f.plabels]),R=d?s.get(d):null,I=R?y.find(g=>g.d.id===R.id):null;return e.jsxs("div",{className:"mapzone",ref:u,children:[e.jsxs("svg",{ref:p,viewBox:i.viewBox,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":c==="fr"?i.fr:i.en,onMouseLeave:()=>{l(null),o(null)},children:[e.jsx("g",{children:i.countries.map((g,N)=>e.jsx("g",{className:"ct"+(g.i2&&j.get(g.i2)?"":" empty"),children:e.jsx("path",{d:g.d,"data-i2":g.i2||void 0})},N))}),e.jsx("g",{children:y.map(g=>{const N=Ie[_e(g.d)],A=!!_(g.d),F=g.d.kind==="target",D=r&&F?We[H(g.d)]:N.c,O=!r&&U(g.d);return e.jsxs("g",{className:"co"+(O?" done":""),onMouseEnter:()=>{var S,q;const z=(S=u.current)==null?void 0:S.getBoundingClientRect(),M=(q=p.current)==null?void 0:q.createSVGPoint();if(M&&p.current&&z){M.x=g.x,M.y=g.y;const P=M.matrixTransform(p.current.getScreenCTM());l({x:P.x-z.left,y:P.y-z.top,label:g.d.name+" · "+(de(g.d.cc,c)||g.d.countryLabel||"")})}o(g.d.id)},onMouseLeave:()=>{l(null),o(null)},onClick:()=>{var S;const z=(S=p.current)==null?void 0:S.createSVGPoint();let M=null;if(z&&p.current){z.x=g.x,z.y=g.y;const q=z.matrixTransform(p.current.getScreenCTM());M={x:q.x,y:q.y}}a({type:"popup",id:g.d.id,anchor:M})},children:[e.jsx("circle",{className:"h",cx:g.x,cy:g.y,r:C(Math.max(11,N.px+7))}),e.jsx("circle",{className:"v",cx:g.x,cy:g.y,r:C(N.px),fill:D,stroke:A?"#DC2626":"#ffffff",strokeWidth:C(A?2.2:1.3)})]},g.d.id||g.d.name)})}),I&&e.jsx("circle",{className:"ring on",cx:I.x,cy:I.y,r:C(13),fill:"none",stroke:"#0F172A",strokeWidth:C(2)})]}),e.jsx("div",{className:"hov"+(v?" on":""),style:v?{left:v.x,top:v.y}:void 0,children:v==null?void 0:v.label}),e.jsx("div",{className:"legend",children:T.map((g,N)=>e.jsxs("span",{children:[e.jsx("i",{style:{"--c":g.c}}),c==="fr"?g.fr:g.en," ",e.jsx("b",{children:g.n})]},N))}),n.some(g=>!g.cc)&&e.jsx("div",{className:"legend",style:{left:"auto",right:10},children:e.jsxs("span",{children:["🌐 ",f.notLocated," ",e.jsx("b",{children:n.filter(g=>!g.cc).length})]})})]})}function ua(){const{st:t,dispatch:a,dossiers:n,t:r,pipe:o,contName:d}=E(),s=t.filters,c=x.useMemo(()=>n.filter(b=>b.continent===t.continent),[n,t.continent]),f=b=>c.filter(m=>b!=="country"&&s.country.length&&!s.country.includes(m.cc||"")?!1:Me(m,s,o,b==="country"?void 0:b)),p=x.useMemo(()=>{const b=f("win"),m=v=>b.filter(l=>(l.date?Math.max(0,Math.floor((Date.now()-Date.parse(l.date))/864e5)):9999)<=v).length;return[m(0),m(7),m(30),b.length]},[c,s,o]),u=x.useMemo(()=>{if(o)return null;const b=f("status"),m={all:b.length,todo:0,retenu:0,pending:0,ecarte:0};return b.forEach(v=>{m[re(v)]+=1}),m},[c,s,o]),i=s.sector.length+s.country.length+s.engine.length+s.stage.length+s.angle.length+s.memoLevel.length+(s.signalOnly?1:0)+(s.win!=="all"?1:0)+(!o&&s.status!=="all"?1:0)+(s.search.trim()?1:0),h=(b,m,v,l="fbtn")=>e.jsxs("button",{type:"button",className:l,"aria-expanded":t.openFacet===b,onClick:()=>a({type:"openFacet",facet:b}),children:[e.jsx("span",{className:"fl",children:m}),v>0&&e.jsx("span",{className:"n",children:v}),e.jsx("span",{className:"cv",children:"▾"})]},b);return e.jsxs(e.Fragment,{children:[e.jsxs("aside",{className:"fbar",children:[e.jsx("div",{className:"seg",children:["1","7","30","all"].map((b,m)=>e.jsxs("button",{type:"button","aria-pressed":s.win===b,onClick:()=>a({type:"filters",patch:{win:b}}),children:[r.dates[m],e.jsx("b",{children:p[m]})]},b))}),e.jsxs("span",{className:"fsrch",children:["🔍",e.jsx("input",{placeholder:r.identSearch,value:s.search,onChange:b=>a({type:"filters",patch:{search:b.target.value}})})]}),!o&&u&&e.jsx("div",{className:"statusf",children:[["all",r.statusAll],["todo",r.statusTodo],["retenu",r.statusKeep],["pending",r.statusPending],["ecarte",r.statusDrop]].map(([b,m])=>e.jsxs("button",{type:"button","aria-pressed":s.status===b,onClick:()=>a({type:"filters",patch:{status:b}}),children:[m,e.jsx("b",{children:u[b]??0})]},b))}),e.jsxs("div",{className:"facets",children:[e.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":t.openFacet==="sig",onClick:()=>a({type:"openFacet",facet:"sig"}),children:[e.jsx("span",{className:"fl",children:r.fSignal}),s.signalOnly&&e.jsx("span",{className:"n",children:s.signalEngines.length||"✓"}),e.jsx("span",{className:"cv",children:"▾"})]}),h("sec",r.fSector,s.sector.length),h("pay",r.fCountry,s.country.length),h("det",r.fEngine,s.engine.length),h("sta",r.fStage,s.stage.length),o&&h("ang","Angle",s.angle.length),o&&h("mem","Mémo",s.memoLevel.length)]}),e.jsx("span",{className:"fgrow"}),e.jsxs("div",{className:"frow2",children:[t.mapFolded&&e.jsxs("button",{type:"button",className:"mapbtn",onClick:()=>a({type:"mapFold",folded:!1}),children:["🗺 ",r.showMap.replace("🗺 ","")]}),i>0&&e.jsxs("button",{type:"button",className:"resetbtn on",title:r.clearTitle(c.length,d),onClick:()=>a({type:"reset"}),children:[e.jsx("span",{className:"rot",children:"↺"}),e.jsx("span",{children:r.clear(i)})]}),e.jsx("button",{type:"button",className:"alertbtn",onClick:()=>a({type:"modal",modal:"alert"}),children:r.alertBtn})]})]}),t.openFacet&&e.jsx(ga,{poolFor:f})]})}function ga({poolFor:t}){const{st:a,dispatch:n,t:r,lang:o}=E(),d=a.filters,s=a.openFacet,{title:c,cols:f,options:p}=x.useMemo(()=>{if(s==="sig"){const m=t("signal").filter(w=>_(w)),v=new Map;m.forEach(w=>{const j=w.engine||"";v.set(j,(v.get(j)||0)+1)});const l=[{v:"*",label:r.fpSigAll,n:m.length,html:!0,on:d.signalOnly&&!d.signalEngines.length},...$e([...v.keys()],o).map(w=>({v:w,label:se(w)+" "+ae(w,o),n:v.get(w)||0,html:!1,on:d.signalOnly&&d.signalEngines.includes(w)}))];return{title:r.fpSigTitle,cols:2,options:l}}if(s==="sec"){const m=t("sector"),v=new Map;return m.forEach(l=>{l.sector&&v.set(l.sector,(v.get(l.sector)||0)+1)}),{title:r.fSector.toUpperCase(),cols:3,options:[...v.entries()].sort((l,w)=>w[1]-l[1]).map(([l,w])=>({v:l,label:l,n:w,html:!1,on:d.sector.includes(l)}))}}if(s==="pay"){const m=t("country"),v=new Map;return m.forEach(l=>{l.cc&&v.set(l.cc,(v.get(l.cc)||0)+1)}),{title:r.fCountry.toUpperCase(),cols:3,options:[...v.entries()].sort((l,w)=>w[1]-l[1]).map(([l,w])=>({v:l,label:de(l,o)||l,n:w,html:!1,on:d.country.includes(l)}))}}if(s==="det"){const m=t("engine"),v=new Map;return m.forEach(l=>{l.engine&&v.set(l.engine,(v.get(l.engine)||0)+1)}),{title:r.fEngine.toUpperCase(),cols:2,options:$e([...v.keys()],o).map(l=>({v:l,label:se(l)+" "+ae(l,o)+' <span style="color:var(--dim);font-size:10px">· '+kt(jt(l),o)+"</span>",n:v.get(l)||0,html:!0,on:d.engine.includes(l)}))}}if(s==="ang"){const m=t("angle"),v=new Map;return m.forEach(l=>{l.angle&&v.set(l.angle,(v.get(l.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...v.entries()].sort((l,w)=>w[1]-l[1]).map(([l,w])=>({v:l,label:l.replace(/[_-]+/g," "),n:w,html:!1,on:d.angle.includes(l)}))}}if(s==="mem"){const m=t("memoLevel"),v=new Map;m.forEach(w=>{if(w.kind==="target"){const j=he(w);v.set(j,(v.get(j)||0)+1)}});const l=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(w=>({v:String(w),label:l[w],n:v.get(w)||0,html:!1,on:d.memoLevel.includes(w)}))}}const h=t("stage"),b=new Map;return h.forEach(m=>{m.stage&&b.set(m.stage,(b.get(m.stage)||0)+1)}),{title:r.fStage.toUpperCase(),cols:2,options:[...b.entries()].sort((m,v)=>v[1]-m[1]).map(([m,v])=>({v:m,label:m,n:v,html:!1,on:d.stage.includes(m)}))}},[s,a,o]),u=h=>{if(s==="sig"){if(h==="*")n({type:"filters",patch:{signalOnly:!(d.signalOnly&&!d.signalEngines.length),signalEngines:[]}});else{const m=d.signalEngines.includes(h)?d.signalEngines.filter(v=>v!==h):[...d.signalEngines,h];n({type:"filters",patch:{signalOnly:!0,signalEngines:m}})}return}if(s==="mem"){n({type:"toggleMemoLevel",value:Number(h)});return}n({type:"toggleFacet",facet:s==="sec"?"sector":s==="pay"?"country":s==="det"?"engine":s==="ang"?"angle":"stage",value:h})},i=()=>{n(s==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:s==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:s==="sec"?"sector":s==="pay"?"country":s==="det"?"engine":s==="ang"?"angle":"stage"})};return e.jsxs("div",{className:"fpanel on",children:[e.jsxs("div",{className:"ph",children:[e.jsx("b",{children:c}),e.jsx("span",{className:"sp"}),e.jsx("button",{type:"button",onClick:i,children:r.fpNone}),e.jsx("button",{type:"button",onClick:()=>n({type:"openFacet",facet:null}),children:r.fpClose})]}),e.jsx("div",{className:"fcols"+(f===2?" two":""),children:p.map(h=>e.jsxs("button",{type:"button",className:"opt","aria-pressed":h.on,onClick:()=>u(h.v),children:[e.jsx("span",{className:"bx"}),h.html?e.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:h.label}}):e.jsx("span",{className:"l",children:h.label}),e.jsx("span",{className:"n",children:h.n})]},h.v))}),e.jsxs("div",{className:"pf",children:[e.jsx("span",{className:"t",children:r.alertReady}),e.jsx("button",{type:"button",className:"alertbtn",onClick:()=>n({type:"modal",modal:"alert"}),children:r.alertCreate})]})]})}const Ke=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function ma(){const{t,mode:a,token:n,askEvaluate:r,sessTally:o,dispatch:d,evalBusy:s,evalCards:c,caps:f,data:p}=E(),u=a==="client",[i,h]=x.useState(""),[b,m]=x.useState(!1),[v,l]=x.useState(""),[w,j]=x.useState(!1),[y,C]=x.useState(""),[T,R]=x.useState([]),I=x.useRef(!1),g=i.trim()?Ke.test(i.trim())?t.evalUrl:t.evalName:t.evalWaiting,N=x.useMemo(()=>v.split(`
`).map(z=>z.trim()).filter(Boolean).slice(0,15),[v]),A=T.length?T:c,F=p.credits,D=()=>{const z=i.trim();z&&(r(null,z),h(""))},O=async()=>{if(!u){r(null,N[0]||"");return}if(!N.length||w)return;j(!0),I.current=!1;const z=[];for(let M=0;M<N.length&&!I.current;M++){C(t.evaluating(M+1,N.length,N[M]));const S=await at(n,N[M],"atelier2");if(z.unshift({name:S.company||N[M],verdict:S.verdict,reason:S.reason||"",remaining:S.remaining??null}),R([...z]),S.verdict==="quota"){z.unshift({name:"",verdict:"quota",reason:t.quota(N.length-M-1),remaining:0}),R([...z]);break}}C(""),l(""),j(!1)};return e.jsxs("div",{className:"demand",children:[e.jsxs("div",{className:"drow",children:[e.jsxs("span",{className:"dfield",children:[e.jsx("input",{value:i,placeholder:t.evalPh,autoComplete:"off",maxLength:200,onChange:z=>h(z.target.value),onKeyDown:z=>{z.key==="Enter"&&D()}}),e.jsx("span",{className:"detect"+(Ke.test(i.trim())?" url":""),children:g})]}),e.jsxs("button",{type:"button",className:"evalbtn"+(s?" loading":""),disabled:s,onClick:D,children:[e.jsx("span",{className:"fill"}),t.evalGo]}),f.showCredits&&F&&e.jsxs("button",{type:"button",className:"credits"+(F.total_available<=0&&!F.unlimited?" empty":""),onClick:()=>d({type:"modal",modal:"recharge"}),children:[e.jsx("span",{className:"cl",children:t.creditsCap}),e.jsx("b",{children:F.unlimited?"∞":F.total_available}),!F.unlimited&&e.jsxs("span",{className:"cm",children:["/ ",F.daily_grant+F.purchased]}),F.total_available<=0&&!F.unlimited?e.jsx("span",{className:"rc",children:t.creditsRecharge}):e.jsx("span",{className:"cd",children:t.creditsToday})]})]}),e.jsx("div",{className:"dunder",children:e.jsx("button",{type:"button",className:"dmulti",onClick:()=>m(!b),children:t.evalMulti})}),b&&e.jsxs("div",{className:"bulk on",children:[e.jsx("textarea",{value:v,placeholder:t.bulkPh,onChange:z=>l(z.target.value.split(`
`).slice(0,15).join(`
`))}),e.jsxs("div",{className:"side",children:[e.jsxs("button",{type:"button",className:"evalbtn"+(w?" loading":""),style:{justifyContent:"center"},disabled:w||!N.length,onClick:()=>{O()},children:[e.jsx("span",{className:"fill"}),w&&y?y:t.evalList]}),e.jsx("span",{className:"hint",children:t.bulkCount(N.length)})]})]}),A.slice(0,1).map((z,M)=>{const S=z.verdict==="kept",q=z.verdict==="quota",P=S?"var(--brand)":q?"var(--bolt)":"var(--red)",W=S?"var(--brand-l)":q?"#FEF3C7":"#FEF2F2";return e.jsxs("div",{className:"result on",style:{"--c":P,"--bgc":W},children:[e.jsx("span",{className:"vv",children:e.jsx("span",{className:"vp",children:S?"✓ "+t.kept:q?"⏳":"✗ "+t.dropped})}),z.name&&e.jsx("span",{className:"rn",children:z.name}),e.jsx("span",{className:"rr",children:z.reason?e.jsxs(e.Fragment,{children:[e.jsx("b",{children:t.why})," ",z.reason]}):null}),!q&&e.jsx("button",{type:"button",className:"go",onClick:()=>d({type:"modal",modal:"space"}),children:t.seeSpace(S?t.statusKeep.replace("✅ ",""):t.statusDrop.replace("❌ ",""))})]},M)}),u&&(o.kept+o.dropped>0||A.length>0)&&e.jsxs("div",{className:"tally",children:[e.jsx("span",{dangerouslySetInnerHTML:{__html:t.session(o.kept,o.dropped)}})," ","·"," ",e.jsx("a",{onClick:()=>d({type:"modal",modal:"space"}),children:t.seeMySpace})]})]})}function ba(t){return t.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function ha(){const{st:t,dispatch:a,byId:n,t:r,doDeep:o}=E(),d=t.memoConsole?n.get(t.memoConsole):null,s=x.useMemo(()=>d?[d.reasoning||"",ba(d.summary||"")].filter(Boolean).join(`

`):"",[d]);if(!d)return null;const c=Ae(d),f=he(d);return e.jsx("div",{className:"demand",style:{paddingTop:0},children:e.jsxs("div",{className:"memo",style:{marginTop:0},children:[e.jsxs("div",{className:"mh",children:[e.jsx("span",{className:"nm",children:d.name}),c&&e.jsx("span",{className:"vv",children:c}),typeof d.score=="number"&&e.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[d.score,"/100"]}),e.jsx("span",{className:"sp"}),e.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),e.jsx("div",{className:"tabs2",children:e.jsx("button",{type:"button","aria-selected":"true",children:r.memoSynth})}),e.jsx("div",{className:"mb2",children:s?s.split(`

`).map((p,u)=>e.jsx("p",{style:{margin:"0 0 10px"},children:p},u)):e.jsx("p",{children:r.memoNone})}),e.jsxs("div",{className:"mf",children:[Fe(d)?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"t",children:r.memoDeepHint}),e.jsx("button",{type:"button",className:"deep",onClick:()=>o(d),children:r.memoDeep})]}):e.jsx("span",{className:"t",children:f===2?r.critMemoKinds:""}),d.memoUrl&&e.jsx("a",{className:"go",href:d.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:r.memoOpenFull})]})]})})}const va={"CALL PENDING":"v-call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function Oe({o:t}){const{t:a}=E(),n=Xt(t),r=Ae(t),o=H(t),d=Ne(t),s=Jt(t);return e.jsxs("span",{className:"c-vd",children:[n?e.jsx("span",{className:"vd "+(n==="MATCH"?"v-ok":"v-no"),children:n}):e.jsx("span",{className:"vd wait",children:a.actToEval}),r?e.jsx("span",{className:"vd "+(va[r]||"v-cons"),children:r}):o===1?e.jsx("span",{className:"vd wait",children:a.actMemoQueue}):null,o===3&&d==="auto"&&e.jsx("span",{className:"org au",title:a.orgAutoTitle,children:a.orgAuto}),o===3&&d==="cd"&&e.jsx("span",{className:"org cd",title:a.orgCdTitle,children:a.orgCd}),o===3&&s!==null&&e.jsx("span",{className:"wait2 "+(s>10?"hot":s>=5?"warm":""),title:a.waitTitle(s),children:a.waitChip(s)})]})}function Qe({o:t}){const{t:a,askEvaluate:n,evalBusy:r,lang:o}=E(),[d,s]=x.useState(!1);if(x.useEffect(()=>{r||s(!1)},[r]),U(t)){const p=(t.verdict||"").toUpperCase()!=="NO MATCH";return e.jsxs("span",{className:"verdict",style:{"--c":p?"var(--brand)":"var(--red)"},title:t.reasoning||"",children:[p?"✓":"✗"," ",e.jsx("b",{children:p?a.kept:a.dropped}),typeof t.score=="number"&&t.score>0?" "+t.score:""]})}const f=d&&r;return e.jsxs("button",{type:"button",className:"rev"+(f?" loading":""),disabled:r,onClick:p=>{p.stopPropagation(),s(!0),n(t)},children:[e.jsx("span",{className:"fill"}),a.evalGo]})}function ya({o:t}){const{t:a,caps:n,memoQueued:r,approachDone:o,doAnalyse:d,doDecide:s,doPromote:c,doApproach:f,dispatch:p}=E();if(n.lockActions)return e.jsx("span",{className:"cell",children:e.jsxs("button",{type:"button",className:"stbtn",style:{"--c":"var(--line2)","--tc":"var(--dim)"},onClick:h=>{h.stopPropagation(),p({type:"modal",modal:"rdv"})},children:[e.jsx("span",{className:"lk",children:"🔒"}),a.actLocked.replace("🔒 ","")]})});if(!n.pipe)return e.jsx("span",{className:"cell",children:e.jsx(Qe,{o:t})});const u=H(t),i=h=>b=>{b.stopPropagation(),h()};if(u===0)return e.jsx("span",{className:"cell",children:e.jsx(Qe,{o:t})});if(u===1){const h=r.has(t.id);return e.jsx("span",{className:"cell",children:e.jsx("button",{type:"button",className:"memobtn",disabled:h,onClick:i(()=>d(t)),children:h?a.actAnalyseQueued:a.actAnalyse})})}if(u===3)return e.jsx("span",{className:"cell",children:e.jsxs("span",{className:"yn",children:[e.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:i(()=>s(t,!0)),children:a.actYes}),e.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:i(()=>s(t,!1)),children:a.actNo}),t.memoUrl&&e.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:i(()=>p({type:"memoConsole",id:t.id})),children:"📄"})]})});if(u===4){const h=o.has(t.id);return e.jsx("span",{className:"cell",children:e.jsx("button",{type:"button",className:"approach",disabled:h,onClick:i(()=>f(t)),children:h?a.actApproachSent:a.actApproach})})}return u===2?e.jsx("span",{className:"cell",children:e.jsxs("span",{className:"yn",children:[e.jsx("button",{type:"button",className:"promo",onClick:i(()=>c(t)),children:a.actPromote}),t.memoUrl&&e.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:i(()=>p({type:"memoConsole",id:t.id})),children:"📄"})]})}):e.jsx("span",{className:"cell",children:t.memoUrl?e.jsx("button",{type:"button",className:"memobtn read",onClick:i(()=>p({type:"memoConsole",id:t.id})),children:a.actMemo}):e.jsx("span",{className:"rc",children:"—"})})}function wa({o:t}){const{t:a,doThumb:n}=E();return e.jsxs("span",{className:"thu",children:[e.jsx("button",{type:"button",className:"tb up",title:a.thumbUp,onClick:r=>{r.stopPropagation(),n(t,!0),r.currentTarget.classList.add("on")},children:"👍"}),e.jsx("button",{type:"button",className:"tb dn",title:a.thumbDn,onClick:r=>{r.stopPropagation(),n(t,!1),r.currentTarget.classList.add("on")},children:"👎"})]})}function ka({o:t}){const{lang:a}=E();return _(t)?e.jsxs("span",{className:"c-sig",children:[e.jsx(pe,{o:t}),e.jsx(ve,{o:t,src:!0})]}):e.jsx("span",{className:"c-sig",children:e.jsxs("span",{className:"mo",children:[se(t.engine||"")," ",ae(t.engine||"",a)]})})}function ja({o:t,locked:a,open:n,onToggle:r}){const{st:o,dispatch:d,caps:s,markRow:c,markedId:f,favIds:p,toggleFav:u}=E(),i=H(t),h=["#0F172A","#475C6E","#8798A8","#B9C6D2"],b=t.date?Math.max(0,Math.floor((Date.now()-Date.parse(t.date))/864e5)):9999,m=b<=0?0:b<=7?1:b<=30?2:3,v=s.pipe&&t.kind==="target"?["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"][i]:h[m],l=p.has(t.id),w=j=>{if(a)return;if(s.pipe){r();return}const y=j.currentTarget.getBoundingClientRect();d({type:"popup",id:t.id,anchor:{x:y.left+Math.min(280,y.width/3),y:y.bottom}})};return e.jsxs(x.Fragment,{children:[e.jsxs("div",{className:"row"+(f===t.id||n?" on":"")+(a?" locked":""),onMouseEnter:()=>c(t.id),onMouseLeave:()=>c(null),onClick:w,children:[e.jsx("span",{className:"pt",style:{"--c":v}}),e.jsx(st,{o:t}),e.jsxs("span",{className:"nd",children:[e.jsxs("span",{className:"rnm",title:t.name,children:[s.pipe&&e.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:l?1:.35,padding:0,marginRight:4},onClick:j=>{j.stopPropagation(),u(t)},children:l?"★":"☆"}),t.name]}),e.jsx("span",{className:"rds",title:t.tagline||t.headline||"",children:[t.tagline,t.headline,t.reasoning].find(j=>j&&j!==t.name)||""})]}),e.jsx(Na,{o:t}),e.jsx("span",{className:"c-stade",children:t.stage||""}),e.jsx(ka,{o:t}),s.pipe&&e.jsx(Oe,{o:t}),s.pipe&&e.jsxs("span",{className:"c-sc",children:[typeof t.score=="number"?t.score:"",typeof t.score=="number"&&e.jsx("s",{children:"/100"})]}),e.jsx(ya,{o:t}),s.showThumbs&&e.jsx(wa,{o:t})]}),(n||o.dens==="deplie")&&!a&&e.jsx(Ca,{o:t})]})}function Na({o:t}){const{lang:a,caps:n}=E();if(n.pipe&&t.kind==="target")return e.jsx("span",{className:"c-amt none",children:"—"});const r=Ee(t.amountEur,a);return e.jsx("span",{className:"c-amt"+(r?"":" none"),children:r||"—"})}function Ca({o:t}){const{t:a,lang:n,dispatch:r,caps:o,outbound:d,doOnboard:s}=E();return e.jsxs("div",{className:"card",style:{display:"grid"},children:[e.jsxs("div",{children:[t.tagline&&e.jsx("p",{className:"lead",children:t.tagline}),t.reasoning&&e.jsxs("div",{className:"dec",children:[e.jsx("b",{children:a.why})," ",t.reasoning]}),e.jsxs("div",{className:"tg",children:[t.sector&&e.jsx("span",{children:t.sector}),t.stage&&e.jsx("span",{children:t.stage}),t.countryLabel&&e.jsx("span",{children:t.countryLabel}),t.city&&e.jsx("span",{children:t.city})]})]}),e.jsxs("div",{className:"cside",children:[e.jsxs("div",{className:"top",children:[typeof t.score=="number"&&e.jsx("span",{className:"sc3",children:t.score}),e.jsx("span",{className:"vv",children:e.jsx(Oe,{o:t})})]}),e.jsxs("div",{className:"sec2",children:[e.jsxs("div",{className:"k2",children:[se(t.engine||"")," ",ae(t.engine||"",n)]}),_(t)&&e.jsx("div",{style:{marginTop:8},children:e.jsx(pe,{o:t})})]}),o.pipe&&(t.memoUrl||d)&&e.jsxs("div",{className:"sec2 acts2",children:[t.memoUrl&&e.jsxs("button",{type:"button",className:"btn p",onClick:()=>r({type:"memoConsole",id:t.id}),children:[a.actMemo," →"]}),d&&e.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>s(t),children:a.actOnboard})]})]})]})}function za({o:t,locked:a}){const{t:n,dispatch:r,caps:o,doDecide:d}=E(),s=H(t),c=["#E7EBF0","#E7F3EC","#C4E0D0","#7FC0A0","#0E8A4F","#DC2626"][s];return e.jsxs("div",{className:"dcard"+(a?" locked":""),style:{"--c":c},children:[e.jsxs("div",{className:"dh",children:[typeof t.score=="number"&&e.jsx("span",{className:"dsc",children:t.score}),e.jsx("span",{className:"dnm",title:t.name,children:t.name})]}),e.jsxs("div",{className:"dv",children:[e.jsx(Oe,{o:t}),_(t)&&e.jsx(pe,{o:t})]}),e.jsx("div",{className:"dmeta",children:[t.countryLabel,t.stage,t.sector].filter(Boolean).join(" · ").toUpperCase()}),(t.tagline||t.reasoning)&&e.jsx("div",{className:"ddesc",children:t.tagline||t.reasoning}),!a&&o.pipe&&s===3&&e.jsxs("div",{className:"dyn",children:[e.jsx("button",{type:"button",style:{"--c3":"#0A6B3D"},onClick:()=>d(t,!0),children:n.actYes}),e.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>d(t,!1),children:n.actNo})]}),!a&&t.memoUrl&&e.jsxs("button",{type:"button",className:"dmemo",onClick:()=>r({type:"memoConsole",id:t.id}),children:[n.actMemo," →"]})]})}function Sa(){const t=E(),{st:a,dispatch:n,t:r,caps:o,scoped:d,lang:s,sessTally:c}=t,[f,p]=x.useState(new Set);x.useEffect(()=>{p(new Set)},[a.ptab,a.continent]);const u=y=>p(C=>{const T=new Set(C);return T.has(y)?T.delete(y):T.add(y),T}),i=x.useMemo(()=>De(d,a.sort),[d,a.sort]),h=x.useMemo(()=>i.filter(y=>_(y)&&!U(y)).length,[i]),b=o.pipe?r.plabels[a.ptab].toLowerCase():a.filters.status==="retenu"?r.keptByStan:a.filters.status==="ecarte"?r.droppedByStan:r.toSend,m=(y,C,T="",R=!1)=>e.jsxs("button",{type:"button","data-s":y,className:T,"aria-sort":a.sort.key===y?a.sort.dir===1?"ascending":"descending":"none",style:R?{justifyContent:"flex-end"}:void 0,onClick:()=>n({type:"sort",key:y}),children:[C,e.jsx("span",{className:"ar",children:a.sort.key===y&&a.sort.dir===1?"▴":"▾"})]},y),v=x.useMemo(()=>{if(o.pipe||a.groupBy==="none")return null;const y=new Map;return i.forEach(C=>{const T=C.engine||"?";y.has(T)||y.set(T,[]),y.get(T).push(C)}),[...y.entries()]},[i,o.pipe,a.groupBy]),l=o.lockRowsAfter;let w=0;const j=(y,C)=>{const T=a.shown[C]||be,I=y.slice(0,T).map(g=>{const N=l!==null&&w>=l;return w++,a.dens==="maxi"?e.jsx(za,{o:g,locked:N},g.id):e.jsx(ja,{o:g,locked:N,open:f.has(g.id),onToggle:()=>u(g.id)},g.id)});return y.length>T&&I.push(e.jsx("button",{type:"button",className:"moregrp",onClick:()=>n({type:"more",group:C,by:be}),children:r.more(Math.min(be,y.length-T),y.length-T)},C+":more")),I};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"listhead",children:[e.jsxs("span",{className:"main",children:[e.jsx("b",{children:i.length})," ",b]}),e.jsx("span",{className:"dot",children:"·"}),e.jsxs("span",{className:"ctx",children:[t.contName,o.pipe&&t.fund?" · "+t.fund:""]}),o.showGroupBar&&e.jsxs("span",{className:"groupbar",children:[e.jsx("span",{className:"gl",children:r.groupBy}),e.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>n({type:"groupBy",groupBy:"engine"}),children:r.groupEngine}),e.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>n({type:"groupBy",groupBy:"none"}),children:r.groupNone})]}),a.pileMode&&e.jsx("button",{type:"button",className:"exitpile",onClick:()=>n({type:"pile",on:!1}),children:r.exitPile}),o.showFunnel&&e.jsx("span",{className:"dens",children:[["liste",r.densList],["deplie",r.densOpen],["maxi",r.densMaxi]].map(([y,C])=>e.jsxs("button",{type:"button","data-d":y,"aria-pressed":a.dens===y,onClick:()=>n({type:"dens",dens:y}),children:[e.jsx("i",{children:e.jsx("em",{})}),e.jsx("b",{children:C})]},y))}),o.showChain&&i.length>0&&e.jsxs("button",{type:"button",className:"chain",onClick:()=>n({type:"chainStart",queue:i.filter(y=>o.pipe?!0:!U(y)).map(y=>y.id)}),children:[e.jsx("span",{className:"b",children:"▶"})," ",o.pipe?r.browse(i.length):r.chainAll(i.filter(y=>!U(y)).length)]})]}),h>0&&!a.filters.signalOnly&&e.jsxs("div",{className:"sigstrip",children:[e.jsx("span",{className:"t",dangerouslySetInnerHTML:{__html:r.sigStrip(h)}}),e.jsx("span",{className:"s",children:r.sigStripSub}),e.jsx("button",{type:"button",onClick:()=>n({type:"filters",patch:{signalOnly:!0,signalEngines:[]}}),children:r.sigStripGo})]}),a.dens!=="maxi"&&e.jsxs("div",{className:"cols",children:[e.jsx("span",{}),m("country",r.colCountry),m("name",r.colCompany),m("amount",r.colAmount,"h-amt",!0),m("stage",r.colStage,"h-stade"),m("signal",r.colSignal,"h-sig"),o.pipe&&e.jsx("span",{className:"h-vd",children:r.colVerdict}),o.pipe&&m("score",r.colScore,"h-sc",!0),e.jsx("span",{}),o.showThumbs&&e.jsx("span",{className:"h-thu",children:r.colThumbs})]}),e.jsxs("div",{className:"list"+(a.dens!=="liste"?" "+a.dens:""),children:[v?v.map(([y,C])=>e.jsxs(x.Fragment,{children:[e.jsxs("div",{className:"grp-h",children:[e.jsx("span",{className:"ic",children:se(y)}),e.jsxs("span",{children:[e.jsx("span",{className:"t",children:ae(y,s)}),e.jsx("div",{className:"s",children:r.grpCount(C.filter(T=>!U(T)).length,C.length)})]})]}),j(C,y)]},y)):j(i,"pt"+a.ptab),!i.length&&e.jsx("div",{className:"void",children:o.pipe?r.emptyTab:r.emptyScope})]}),(c.kept>0||c.dropped>0)&&e.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:r.session(c.kept,c.dropped)}})]})}const Ea=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function Ta(t){if(!t||typeof window>"u")return;const a=352,n=430,r=window.innerWidth,o=window.innerHeight,d=Math.min(Math.max(t.x-a/2,8),Math.max(8,r-a-8));let s=t.y+10;return s+n>o-8&&(s=Math.max(8,t.y-n-14)),s<8&&(s=8),{left:d,top:s}}function Aa(){const{st:t,dispatch:a,byId:n,t:r,lang:o,caps:d,mode:s,askEvaluate:c,doAnalyse:f,doDecide:p,doPromote:u,doApproach:i,doDeep:h,doOnboard:b,outbound:m,evalBusy:v}=E(),l=t.popupId?n.get(t.popupId):null;if(!l)return null;const w=_(l),j=H(l),y=Ae(l),C=l.kind==="target",T=R=>{a({type:"filters",patch:R}),a({type:"popup",id:null})};return Te.createPortal(e.jsxs("div",{className:"atl2",children:[e.jsx("style",{children:Ea}),e.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),e.jsxs("div",{className:"pop on "+(t.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:Ta(t.popupAnchor),onClick:R=>R.stopPropagation(),children:[e.jsxs("div",{className:"ph",children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{children:l.name}),e.jsx("span",{className:"id",children:r.detected(r.daysAgo(le(l.date)),ae(l.engine,o))})]}),e.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),e.jsxs("div",{className:"pb",children:[e.jsxs("div",{className:"tags",children:[l.cc&&e.jsx("button",{type:"button",className:"hi",onClick:()=>T({country:[l.cc]}),children:(de(l.cc,o)||l.countryLabel||"").toUpperCase()}),l.sector&&e.jsx("button",{type:"button",onClick:()=>T({sector:[l.sector]}),children:l.sector.toUpperCase()}),l.stage&&e.jsx("button",{type:"button",onClick:()=>T({stage:[l.stage]}),children:l.stage.toUpperCase()}),typeof l.amountEur=="number"&&l.amountEur>0&&e.jsx("span",{className:"am2",children:Ee(l.amountEur,o)})]}),(l.tagline||l.headline)&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:r.desc}),e.jsx("p",{children:l.tagline||l.headline})]}),e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:r.how}),e.jsxs("p",{children:[se(l.engine)," ",e.jsx("b",{children:ae(l.engine,o)})," — ",Nt(l.engine,o),l.noteTitle&&e.jsxs(e.Fragment,{children:[" · ",l.noteTitle]})]}),w?e.jsxs("p",{className:"psig",style:{marginTop:9},children:[e.jsx(pe,{o:l,lg:!0})," ",e.jsx(ve,{o:l,src:!0}),e.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[r.signaledOn(rt(w,o))," · ",r.win7(nt(w,o))]})]}):e.jsx("p",{className:"pnos",style:{marginTop:5},children:r.noSignal})]}),l.reasoning&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:d.pipe&&j>=1?r.verdictCap:r.memo}),e.jsx("p",{className:"memo",children:l.reasoning})]}),d.pipe&&C&&y&&e.jsx("div",{className:"fld",children:e.jsxs("p",{style:{fontWeight:700},children:[y,typeof l.score=="number"&&l.score>0?" · "+r.score(l.score):""]})})]}),e.jsxs("div",{className:"pf",children:[d.lockActions||s!=="client"&&d.pipe?e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[e.jsx("span",{className:"fill"}),"🔒 ",r.lockbarCta]}):d.pipe?e.jsxs(e.Fragment,{children:[j===0&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:v,onClick:()=>c(l),children:[e.jsx("span",{className:"fill"}),r.evalGo]}),j===1&&e.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{f(l),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),r.actAnalyse]}),j===2&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{u(l),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),r.actPromote]}),j===3&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{p(l,!0),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),r.actYes]}),e.jsx("button",{type:"button",className:"abtn",onClick:()=>{p(l,!1),a({type:"popup",id:null})},children:r.actNo}),Fe(l)&&e.jsx("button",{type:"button",className:"abtn",title:r.memoDeepHint,onClick:()=>{h(l),a({type:"popup",id:null})},children:r.memoDeep})]}),j===4&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{i(l),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),r.actApproach]}),j===5&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{u(l),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),"↩ ",r.statusKeep.replace("✅ ","")]}),l.memoUrl&&e.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:l.id}),a({type:"popup",id:null})},children:"📄"}),m&&e.jsx("button",{type:"button",className:"abtn",title:r.actOnboardTitle,onClick:()=>{b(l),a({type:"popup",id:null})},children:"🚀"})]}):e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:v,onClick:()=>c(l),children:[e.jsx("span",{className:"fill"}),r.evalGo," →"]}),l.website&&e.jsx("a",{className:"psite",href:l.website.startsWith("http")?l.website:"https://"+l.website,target:"_blank",rel:"noopener noreferrer",title:l.website,children:"🌐"})]})]})]}),document.body)}const ue="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function Z({title:t,icon:a,children:n,wide:r}){const{dispatch:o}=E();return Te.createPortal(e.jsx("div",{className:"atl2",children:e.jsx("div",{className:"modal on",onClick:d=>{d.target===d.currentTarget&&o({type:"modal",modal:null})},children:e.jsxs("div",{className:"mcard",style:r?{width:"min(760px,100%)"}:void 0,children:[e.jsxs("div",{className:"mh",children:[a&&e.jsx("span",{className:"no g",children:a}),e.jsx("h2",{children:t}),e.jsx("button",{type:"button",className:"x",onClick:()=>o({type:"modal",modal:null}),children:"×"})]}),e.jsx("div",{className:"mb",children:n})]})})}),document.body)}function Fa(){const{st:t}=E();switch(t.modal){case"chain":return e.jsx(Da,{});case"space":return e.jsx(Oa,{});case"alert":return e.jsx(qa,{});case"queue":return e.jsx(La,{});case"export":return e.jsx(Pa,{});case"plug":return e.jsx(Ia,{});case"recharge":return e.jsx(_a,{});case"cover":return e.jsx($a,{});case"crit":return e.jsx(Ua,{});case"tuto":return e.jsx(Ha,{});case"rdv":return e.jsx(Ma,{});default:return null}}function Ma(){const{dispatch:t}=E();return e.jsx(Ct,{filloutId:"aDx8z7Hzksus",onClose:()=>t({type:"modal",modal:null})})}function Da(){const{st:t,dispatch:a,byId:n,t:r,lang:o,mode:d,askEvaluate:s,evalBusy:c}=E(),f=d==="client",p=t.chain.queue.map(b=>n.get(b)).filter(b=>!!b),u=t.chain.idx,i=p[u],h=u>=p.length;return Te.createPortal(e.jsx("div",{className:"atl2",children:e.jsx("div",{className:"modal on",children:e.jsxs("div",{className:"fcard",children:[e.jsxs("div",{className:"fh",children:[e.jsx("span",{className:"c",children:h?r.finished:`${u+1} / ${p.length}`}),e.jsx("span",{className:"p",children:e.jsx("i",{style:{width:(h?100:u/Math.max(1,p.length)*100)+"%"}})}),e.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),e.jsx("div",{className:"fb",children:h||!i?e.jsxs("div",{className:"fin",children:[e.jsx("div",{className:"em",children:"🏁"}),e.jsx("div",{className:"t",children:r.chainDone}),e.jsx("div",{className:"s",children:r.chainDoneSub(p.length)})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:i.name}),e.jsx("div",{className:"sub",children:[de(i.cc,o)||i.countryLabel,i.sector,i.stage,r.daysAgo(le(i.date))].filter(Boolean).map(b=>String(b).toUpperCase()).join(" · ")}),e.jsxs("div",{className:"tags",children:[e.jsx("span",{className:"hi",children:ae(i.engine,o).toUpperCase()}),typeof i.amountEur=="number"&&i.amountEur>0&&e.jsx("span",{children:Ee(i.amountEur,o)})]}),_(i)&&e.jsxs("div",{style:{marginBottom:12},children:[e.jsx(pe,{o:i,lg:!0})," ",e.jsx(ve,{o:i,src:!0})]}),(i.tagline||i.headline)&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:r.desc}),e.jsx("p",{children:i.tagline||i.headline})]}),i.reasoning&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:r.memo}),e.jsx("p",{className:"memo",children:i.reasoning})]}),f&&U(i)&&e.jsxs("div",{className:"vbox",style:{"--c":re(i)==="retenu"?"var(--brand)":re(i)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[e.jsx("span",{className:"vt",children:re(i)==="retenu"?"✓ "+r.kept:re(i)==="pending"?"📞 "+r.pending:"✗ "+r.dropped}),e.jsx("span",{className:"vd",children:i.reasoning||""})]})]})}),e.jsxs("div",{className:"ff",children:[!h&&i&&!(f&&U(i))&&e.jsxs("button",{type:"button",className:"evalbtn"+(c?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:c,onClick:()=>{s(i)},children:[e.jsx("span",{className:"fill"}),r.launchEval]}),e.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(h?{type:"modal",modal:null}:{type:"chainNext"}),children:h?r.closeBtn:r.skip})]})]})})}),document.body)}function Oa(){const{st:t,dispatch:a,dossiers:n,t:r,mode:o}=E(),d=o==="client",s=x.useMemo(()=>d?n.filter(i=>U(i)):[],[n,d]),c=x.useMemo(()=>De(s.filter(i=>re(i)==="retenu"),{key:"signal",dir:-1}),[s]),f=x.useMemo(()=>s.filter(i=>re(i)==="ecarte"),[s]),p=t.spaceTab==="retenu"?c:f,u=t.spaceTab==="retenu"?"var(--brand)":"var(--red)";return e.jsxs(Z,{title:r.spaceTitle,children:[e.jsxs("div",{className:"sp-tabs",children:[e.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":t.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",r.statusKeep.replace("✅ ","")," ",e.jsx("b",{children:c.length})]}),e.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":t.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",r.statusDrop.replace("❌ ","")," ",e.jsx("b",{children:f.length})]})]}),p.length===0&&e.jsx("div",{className:"sp-empty",children:r.spEmpty}),p.slice(0,40).map(i=>e.jsxs("div",{className:"sp-row",children:[e.jsx("span",{className:"sc",style:{"--c":u},children:typeof i.score=="number"&&i.score>0?i.score:"—"}),e.jsxs("span",{children:[e.jsx("div",{className:"nm",children:i.name}),e.jsx("div",{className:"rr",children:i.reasoning||i.tagline||""})]})]},i.id)),e.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:r.spNote}})]})}function qa(){const{mode:t}=E();return t==="client"||t==="apercu"?e.jsx(Ba,{}):e.jsx(Ra,{})}function Ba(){const{t,token:a,flash:n,mode:r}=E(),[o,d]=x.useState(null),s=r!=="client";x.useEffect(()=>{let f=!0;return Ve(a).then(p=>{f&&d(p)}),()=>{f=!1}},[a]);const c=f=>{s||Ve(a,f).then(p=>{p&&(d(p),n(t.alertSaved))})};return e.jsx(Z,{title:t.alertTitle,icon:"🔔",children:o?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"qrow",children:[e.jsxs("span",{children:[e.jsx("b",{children:t.alertDaily}),e.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:t.alertDailyHint})]}),e.jsx("span",{className:"qset",children:e.jsx("button",{type:"button",className:"abtn","aria-pressed":o.enabled===!0,disabled:s,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>c({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),e.jsxs("div",{className:"qrow",children:[e.jsx("span",{children:t.alertHour}),e.jsxs("span",{className:"qset",children:[e.jsx("button",{type:"button",onClick:()=>c({hour:Math.max(6,(o.hour??7)-1)}),disabled:s,children:"−"}),e.jsxs("b",{children:[o.hour??7," h"]}),e.jsx("button",{type:"button",onClick:()=>c({hour:Math.min(21,(o.hour??7)+1)}),disabled:s,children:"＋"})]})]}),e.jsxs("div",{className:"qrow",children:[e.jsx("span",{children:t.alertDays}),e.jsxs("span",{className:"qset",style:{gap:6},children:[e.jsx("button",{type:"button",className:"abtn",disabled:s,style:o.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>c({days:"weekdays"}),children:t.alertWeekdays}),e.jsx("button",{type:"button",className:"abtn",disabled:s,style:o.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>c({days:"daily"}),children:t.alertEveryday})]})]}),o.email_lead&&e.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${t.updatedAt(o.last_sent.slice(0,10))}`:""]})]}):e.jsx("div",{className:"sp-empty",children:"…"})})}function Ra(){const{st:t,t:a,lang:n,scoped:r,contName:o}=E(),[d,s]=x.useState(""),[c,f]=x.useState(!1),[p,u]=x.useState(!1),i=t.filters,h=x.useMemo(()=>r.filter(l=>_(l)).length,[r]),b=i.win==="1"?0:i.win==="7"?1:i.win==="30"?2:3,m=async()=>{if(!(!/.+@.+\..+/.test(d)||p)){u(!0);try{await fetch(`${Ce}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d.trim(),sectors:i.sector,countries:i.country,source:"atelier2",website:""})}),f(!0)}finally{u(!1)}}},v=[[a.amRows.continent,o],[a.amRows.since,a.amSince[b]],[a.amRows.signal,i.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,i.engine.length?i.engine.map(l=>ae(l,n)).join(", "):a.amAllEngines],[a.amRows.sectors,i.sector.length?i.sector.join(", "):a.amAllSectors],[a.amRows.countries,i.country.length?i.country.map(l=>de(l,n)||l).join(", "):a.amAllCountries],[a.amRows.stages,i.stage.length?i.stage.join(", "):a.amAllStages]];return e.jsx(Z,{title:a.alertTitle,icon:"🔔",children:c?e.jsxs("div",{className:"fin",children:[e.jsx("div",{className:"em",children:"🔔"}),e.jsx("div",{className:"t",children:a.amOk}),e.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(d)}})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"crit",children:v.map(([l,w])=>e.jsxs("div",{className:"r",children:[e.jsx("span",{className:"k",children:l}),e.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:w}})]},l))}),e.jsxs("div",{className:"mfield",children:[e.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:d,onChange:l=>s(l.target.value),onKeyDown:l=>{l.key==="Enter"&&m()}}),e.jsxs("button",{type:"button",className:"evalbtn"+(p?" loading":""),style:{padding:"12px 18px"},onClick:()=>void m(),children:[e.jsx("span",{className:"fill"}),a.amActivate]})]}),e.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(r.length,h)}}),e.jsx("p",{className:"mnote",children:a.amHonest})]})})}function La(){var v,l,w;const{t,token:a,fund:n,mode:r,flash:o}=E(),[d,s]=x.useState(null),[c,f]=x.useState([]),[p,u]=x.useState(0),i=r==="client";x.useEffect(()=>{let j=!0;return(async()=>{const[y,C]=await Promise.all([Ze(n),et(a)]);j&&(y&&s(y),f(C))})(),()=>{j=!1}},[a,n,p]);const h=(d==null?void 0:d.per_day)??2,b=((v=d==null?void 0:d.analyzed_today)==null?void 0:v.length)??0,m=(l=d==null?void 0:d.tomorrow)!=null&&l.length?d.tomorrow:((d==null?void 0:d.pool_meta)||[]).slice(0,10);return e.jsxs(Z,{title:t.queueTitle,wide:!0,children:[e.jsxs("div",{className:"qbox",children:[e.jsx("div",{className:"qhead",children:e.jsx("b",{dangerouslySetInnerHTML:{__html:t.queueDone(b,b+(((w=d==null?void 0:d.pool_order)==null?void 0:w.length)??0))}})}),e.jsx("div",{className:"qrate",children:t.queueRate}),e.jsx("div",{className:"qrates",children:[1,2,3,5,10].map(j=>e.jsx("button",{type:"button",className:"qr"+(h===j?" on":""),disabled:!i,onClick:()=>{tt(a,j).then(y=>{y!==null&&(u(C=>C+1),o(t.alertSaved))})},children:e.jsxs("b",{children:[j,"/j"]})},j))})]}),c.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"qsec ok",children:["⏳ ",t.queueToday]}),e.jsx("div",{className:"qrows",children:c.map(j=>e.jsxs("div",{className:"qr2",children:[e.jsx("b",{children:j.company}),e.jsxs("span",{className:"qd",children:[j.memo_type,typeof j.est_min=="number"?` · ~${j.est_min} min`:""]}),e.jsx("span",{className:"qt",children:j.status}),j.url&&e.jsx("a",{className:"qgo",href:j.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:t.actMemo}),i&&j.status==="error"&&e.jsx("button",{type:"button",className:"qgo an",onClick:()=>{He(a,j.company,"retry").then(()=>u(y=>y+1))},children:t.queueRetry}),i&&j.status!=="done"&&e.jsx("button",{type:"button",className:"abtn",onClick:()=>{He(a,j.company,"delete").then(()=>u(y=>y+1))},children:t.queueDelete})]},j.company))})]}),e.jsxs("div",{className:"qsec todo",children:["⚡ ",t.queueTomorrow]}),e.jsxs("div",{className:"qrows",children:[m.length===0&&e.jsx("div",{className:"sp-empty",children:t.queueEmpty}),m.slice(0,10).map((j,y)=>e.jsxs("div",{className:"qr2",children:[e.jsxs("span",{className:"qn2",children:["#",y+1]}),e.jsx("b",{children:j.name}),typeof j.score=="number"&&e.jsx("span",{className:"qs2",children:j.score})]},j.name))]})]})}function Pa(){const{t,token:a,flash:n}=E(),r=`${ue}/cibles/list.csv?token=${a}`,o=`${ue}/cibles/list.json?token=${a}`,d=`${ue}/cibles/export.xlsx?token=${a}&scope=full`,s=`=IMPORTDATA("${r}")`,c=p=>{var u;(u=navigator.clipboard)==null||u.writeText(p).then(()=>n(t.exportCopied))},f=[{def:t.exportCsv,value:r,href:r},{def:t.exportSheet,value:s},{def:t.exportLive,value:o,href:o},{def:t.exportXlsx,value:d,href:d}];return e.jsxs(Z,{title:t.exportTitle,icon:"📥",children:[e.jsx("p",{className:"lead2",children:t.exportLead}),e.jsx("div",{className:"expl",children:f.map(({def:p,value:u,href:i})=>e.jsxs("div",{className:"exi",children:[e.jsx("span",{className:"exic",children:p[0]}),e.jsxs("div",{children:[e.jsx("b",{children:p[1]}),e.jsx("p",{children:p[2]})]}),e.jsx("button",{type:"button",className:"exb",onClick:()=>c(u),children:t.exportCopy}),i&&e.jsx("a",{className:"exb",href:i,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:t.exportOpen})]},p[1]))}),e.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:t.exportKeyWarning})]})}function Ia(){const{t,token:a,flash:n,mode:r}=E(),[o,d]=x.useState(null),[s,c]=x.useState(""),f=r==="client";x.useEffect(()=>{let i=!0;return Ue(a).then(h=>{i&&h&&d(h)}),()=>{i=!1}},[a]);const p=(i,h)=>{f&&Ue(a,i).then(b=>{b&&b.ok!==!1&&(n(h),d({configured:!i.remove&&(i.url?!0:o==null?void 0:o.configured),url_hint:b.url_hint}))})},u='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}';return e.jsxs(Z,{title:t.plugTitle,icon:"🔌",children:[e.jsxs("div",{className:"rule",children:[e.jsx("b",{children:t.plugWebhook}),e.jsxs("p",{children:[t.plugWebhookHint,o!=null&&o.configured?` — ${t.plugConfigured}${o.url_hint?` (${o.url_hint})`:""}`:""]}),e.jsxs("div",{className:"mfield",style:{marginTop:10},children:[e.jsx("input",{placeholder:"https://…",value:s,onChange:i=>c(i.target.value),disabled:!f}),e.jsx("button",{type:"button",className:"abtn p",disabled:!f||!s.trim(),onClick:()=>p({url:s.trim()},t.alertSaved),children:t.plugSave}),e.jsx("button",{type:"button",className:"abtn",disabled:!f||!(o!=null&&o.configured),onClick:()=>p({test:!0},t.plugTest+" ✓"),children:t.plugTest}),e.jsx("button",{type:"button",className:"abtn",disabled:!f||!(o!=null&&o.configured),onClick:()=>p({remove:!0},t.plugRemove+" ✓"),children:t.plugRemove})]})]}),e.jsxs("div",{className:"rule",children:[e.jsx("b",{children:t.plugMcp}),e.jsx("p",{children:t.plugMcpHint}),e.jsxs("div",{className:"mfield",style:{marginTop:10},children:[e.jsx("input",{readOnly:!0,value:u}),e.jsx("button",{type:"button",className:"abtn",onClick:()=>{var i;(i=navigator.clipboard)==null||i.writeText(u).then(()=>n(t.exportCopied))},children:t.exportCopy})]})]})]})}function _a(){const{t,data:a,lang:n}=E(),r=a.credits,o=a.email,d=async s=>{if(!o)return;const c=window.location.href.split("?")[0];try{const p=await(await fetch(`${Ce}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,lookup_key:s,success_url:c+"?credits=ok",cancel_url:c+"?credits=cancel"})})).json();p.url&&(window.location.href=p.url)}catch{}};return e.jsxs(Z,{title:t.rechargeTitle,icon:"⚡",children:[r&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:t.rechargeHint(r.daily_grant)}}),r.costs&&e.jsxs("p",{className:"mnote",children:["① ",t.creditsCost(r.costs.instant)," · ② ",t.creditsCost(r.costs.detailed)]}),e.jsx("div",{className:"packs",children:(r.packs||[]).map(s=>e.jsxs("div",{className:"pack",children:[e.jsx("div",{className:"pt",children:t.rechargeUnit(s.credits,s.price_eur)}),e.jsx("button",{type:"button",onClick:()=>{d(s.lookup_key)},children:t.rechargeBuy})]},s.lookup_key))}),e.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:t.rechargeNote})]}),!r&&e.jsx("div",{className:"sp-empty",children:t.creditsNone})]})}function $a(){const{t,data:a,dossiers:n}=E(),r=n.filter(d=>d.kind==="target"&&U(d)).length,o=a.marketEstimate||0;return e.jsx(Z,{title:t.coverTitle,icon:"🌍",children:o>0?e.jsx("p",{dangerouslySetInnerHTML:{__html:t.coverBody(r,o)}}):e.jsx("p",{children:t.coverScreened(r)})})}function Ua(){const{t,dossiers:a,token:n,mode:r,flash:o}=E(),d=r==="client",s=x.useMemo(()=>{const l=new Set;return a.forEach(w=>{w.angle&&l.add(w.angle)}),[...l]},[a]),[c,f]=x.useState(null);x.useEffect(()=>{let l=!0;return zt(n).then(w=>{l&&f(w.thumbs)}),()=>{l=!1}},[n]);const[p,u]=x.useState(""),[i,h]=x.useState(""),[b,m]=x.useState(!1),v=async()=>{const l=p.trim();if(!(!l||b||!d)){m(!0),h("");try{const j=await(await fetch(`${ue}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,message:l,who:"atelier2"})})).json().catch(()=>({}));if(j.reply&&h(String(j.reply)),j.job_id){h(t.critChatRunning);const y=async()=>{const C=await fetch(`${ue}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:j.job_id})}).then(T=>T.json()).catch(()=>null);if(C&&C.done){h(String(C.reply||C.clarification||C.summary||"✓")),m(!1),C.applied&&o(t.alertSaved);return}setTimeout(()=>{y()},8e3)};setTimeout(()=>{y()},8e3),u("");return}u("")}finally{i.startsWith("⏳")||m(!1)}}};return e.jsxs(Z,{title:t.critTitle,icon:"⚙",wide:!0,children:[s.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"qsec ok",children:t.critAngles}),e.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:s.map(l=>e.jsx("li",{style:{marginBottom:5},children:l.replace(/[_-]+/g," ")},l))})]}),e.jsxs("div",{className:"rule",children:[e.jsx("b",{children:t.critChatTitle}),e.jsx("p",{children:t.critChatHint}),e.jsxs("div",{className:"mfield",style:{marginTop:10},children:[e.jsx("input",{placeholder:t.critChatPh,value:p,disabled:!d||b,onChange:l=>u(l.target.value),onKeyDown:l=>{l.key==="Enter"&&v()}}),e.jsxs("button",{type:"button",className:"evalbtn"+(b?" loading":""),style:{padding:"12px 18px"},disabled:!d||b||!p.trim(),onClick:()=>void v(),children:[e.jsx("span",{className:"fill"}),t.critChatSend]})]}),i&&e.jsx("p",{className:"mnote",style:{marginTop:10},children:i})]}),e.jsx("div",{className:"qsec ok",children:t.critThumbsTitle}),c===null?e.jsx("div",{className:"sp-empty",children:"…"}):c.length===0?e.jsx("p",{className:"mnote",children:t.critThumbsEmpty}):e.jsx("div",{className:"qrows",style:{marginBottom:14},children:c.slice(0,12).map((l,w)=>e.jsxs("div",{className:"qr2",children:[e.jsx("span",{className:"qn2",children:l.kind==="YES"?"👍":"👎"}),e.jsx("b",{children:l.company}),e.jsx("span",{className:"qd",children:(l.ts||"").slice(0,10)})]},w))}),e.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:t.critVerdicts}}),e.jsx("p",{className:"mnote",children:t.critMemoKinds})]})}function Ha(){const{t}=E();return e.jsx(Z,{title:t.tutoTitle,icon:"▶",children:e.jsx("ol",{className:"steps2",children:t.tutoSteps.map(([a,n],r)=>e.jsxs("li",{children:[e.jsx("b",{children:a}),e.jsx("span",{children:n})]},r))})})}const it=x.createContext(null),E=()=>{const t=x.useContext(it);if(!t)throw new Error("AtelierV2Ctx manquant");return t};function pe({o:t,lg:a}){const{lang:n}=E(),r=_(t);return r?e.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:Ye(r,n),children:[r.emoji," ",Ye(r,n)]}):null}function ve({o:t,src:a}){const{lang:n,t:r}=E(),o=_(t);if(!o)return null;const d=At(o),s=Ft(o);return e.jsxs("em",{className:"sigwin"+(s?" hot":""),title:r.signaledOn(rt(o,n))+" · "+r.win7(nt(o,n)),children:[e.jsx("span",{className:"gg",children:Array.from({length:7},(c,f)=>e.jsx("i",{className:f<d?"on":""},f))}),e.jsx("span",{className:"lb",children:s?r.lastDay:r.daysLeft(Math.max(0,o.left??0))}),a&&o.url&&e.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",title:r.seeSource,onClick:c=>c.stopPropagation(),children:"↗"})]})}function st({o:t}){const{lang:a}=E(),n=Tt(t.cc),r=t.cc?de(t.cc,a)||t.countryLabel||t.cc:t.countryLabel||"—";return e.jsx("span",{className:"c-flag",title:r||void 0,children:n?e.jsx("img",{src:n,width:24,height:18,alt:r||""}):e.jsx("span",{className:"em",children:"🌐"})})}const Je="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap";function Ga({demo:t=!1,source:a="default",initialFilters:n,initialUi:r,capsOverride:o,onFiltersChange:d}){const{lang:s}=St(),c=Lt[s],f=Kt(t,s,a),[p,u]=x.useReducer(aa,void 0,()=>ta((r==null?void 0:r.continent)??"europe",t,{ptab:r==null?void 0:r.ptab,dens:r==null?void 0:r.dens,filters:n})),i=x.useRef(d);i.current=d,x.useEffect(()=>{var k;(k=i.current)==null||k.call(i,p.filters)},[p.filters]);const[h,b]=x.useState(null),[m,v]=x.useState(null),[l,w]=x.useState({kept:0,dropped:0}),[j,y]=x.useState(!1),[C,T]=x.useState(""),[,R]=x.useState(0),I=()=>R(k=>k+1),g=x.useRef([]),N=x.useRef(new Set),A=x.useRef(new Set),F=x.useRef(null),{mode:D}=f,O=x.useMemo(()=>o?{...f.caps,...o}:f.caps,[f.caps,o]),z=O.pipe,M=f.session.token||"",S=D==="client"&&!t;x.useEffect(()=>{if(document.querySelector(`link[href="${Je}"]`))return;const k=document.createElement("link");k.rel="stylesheet",k.href=Je,document.head.appendChild(k)},[]);const q=k=>{T(k),F.current&&clearTimeout(F.current),F.current=setTimeout(()=>T(""),2400)},P=x.useMemo(()=>{const k=new Map;return f.dossiers.forEach(B=>{B.id&&k.set(B.id,B)}),k},[f.dossiers]),W=x.useMemo(()=>f.dossiers.filter(k=>lt(k,p,z)),[f.dossiers,p,z]),ee=x.useMemo(()=>f.dossiers.filter(k=>ra(k,p,z,f.favIds)),[f.dossiers,p,z,f.favIds]),Q=x.useMemo(()=>Zt(W,f.favIds),[W,f.favIds]),G=Se.find(k=>k.key===p.continent),V=s==="fr"?G.fr:G.en,L=(k,B)=>{const Y=((k==null?void 0:k.name)||B||"").trim();if(!S){v({kicker:Y});return}!Y||j||(y(!0),(async()=>{try{const X=await at(M,Y,"atelier2"),ut={name:X.company||Y,verdict:X.verdict,reason:X.reason||"",remaining:X.remaining??null};g.current=[ut,...g.current].slice(0,8),X.verdict==="kept"&&w(ne=>({...ne,kept:ne.kept+1})),X.verdict==="ruled_out"&&w(ne=>({...ne,dropped:ne.dropped+1}));const xe=k||f.dossiers.find(ne=>(ne.name||"").toLowerCase()===Y.toLowerCase());xe&&(X.verdict==="kept"?xe.verdict=xe.verdict||"MATCH":X.verdict==="ruled_out"&&(xe.verdict="NO MATCH"),X.reason&&(xe.reasoning=X.reason)),I()}finally{y(!1)}})())},te=k=>{if(!S){v({kicker:k.name});return}N.current.add(k.id),ge(M,"fast_request",k.name||"",""),q(c.memoInstantSent(k.name)),I()},J=k=>u({type:"undoPush",entry:{id:k.id,name:k.name,prevCeoStatus:k.ceoStatus||""}}),ce=(k,B)=>{S&&(J(k),ke(M,{status:B?"Validé":"Écarté",airtable_id:k.airtableId,check_id:k.checkId,company:k.name}),k.ceoStatus=B?"Validé":"Écarté",I())},fe=k=>{S&&(J(k),ke(M,{status:"À trancher",airtable_id:k.airtableId,check_id:k.checkId,company:k.name}),k.ceoStatus="À trancher",q(c.promoted(k.name)),I())},ie=()=>{const k=p.undo[p.undo.length-1];if(!k){q(c.undoNone);return}const B=P.get(k.id);if(u({type:"undoPop"}),!B){q(c.undoNone);return}let Y=k.prevCeoStatus;if(!Y)if((B.verdict||"").toUpperCase().includes("CALL"))Y="À trancher";else{q(c.undoLockedTitle);return}ke(M,{status:Y,airtable_id:B.airtableId,check_id:B.checkId,company:B.name}),B.ceoStatus=k.prevCeoStatus,q(c.undoDone(B.name)),I()},K=k=>{S&&(A.current.add(k.id),I(),(async()=>{const B=await Mt(M,k.name,"email");q(B&&B.ok!==!1?c.actApproachSent:c.loadError)})())},$=(k,B)=>{S&&(ge(M,B?"yes":"no",k.name||"",""),q(B?c.thumbUpDone:c.thumbDnDone))},dt=k=>{!S||!Fe(k)||(ge(M,"detailed_request",k.name||"",""),q(c.memoDeepSent(k.name)))},pt=k=>{const B=new Set(f.favIds),Y=B.has(k.id);Y?B.delete(k.id):B.add(k.id),f.setFavIds(B),S&&Dt(M,{id:k.id,co:k.name},Y)},ct=()=>{S&&(Ot(M),q(c.identSyncDone))},qe=/proplace/i.test(f.fund||""),ft=k=>{!S||!qe||(ge(M,"onboard_request",k.name||"",""),q(c.onboardSent(k.name)))},xt={st:p,dispatch:u,t:c,lang:s,mode:D,caps:O,pipe:z,token:M,fund:f.fund,email:f.email,data:f,dossiers:f.dossiers,scopedAll:W,scoped:ee,counts:Q,byId:P,contName:V,favIds:f.favIds,toggleFav:pt,askEvaluate:L,doAnalyse:te,doDecide:ce,doPromote:fe,doApproach:K,doThumb:$,doDeep:dt,doUndo:ie,doSync:ct,doOnboard:ft,outbound:qe,memoQueued:N.current,approachDone:A.current,sessTally:l,evalCards:g.current,evalBusy:j,markRow:b,markedId:h,flash:q};return x.useEffect(()=>{const k=B=>{B.key==="Escape"&&(u({type:"popup",id:null}),u({type:"modal",modal:null}),u({type:"openFacet",facet:null}))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[]),e.jsx(it.Provider,{value:xt,children:e.jsxs("div",{className:"atl2",children:[e.jsx("style",{children:_t}),e.jsxs("div",{className:"app"+(z?" pipe":""),children:[O.showTicker&&e.jsx(na,{}),O.showIdent&&e.jsx(la,{}),O.showOnb&&e.jsx(ia,{}),e.jsx(oa,{}),O.showFunnel&&e.jsx(da,{}),O.showFunnel&&e.jsx(ca,{}),e.jsxs("div",{className:"fzone",children:[e.jsx(Va,{}),e.jsxs("div",{className:"stage"+(p.mapFolded?" folded":""),id:"atl2-stage",children:[e.jsx(xa,{}),e.jsx(ua,{})]})]}),O.showDemand&&e.jsx(ma,{}),O.showDemand&&p.memoConsole&&e.jsx(ha,{}),e.jsx(Sa,{}),f.loading&&e.jsx("div",{className:"void",children:c.loadingV2}),f.error&&!f.loading&&e.jsxs("div",{className:"void",children:[c.loadError," ",e.jsx("button",{type:"button",className:"abtn",onClick:f.refresh,children:c.retry})]})]}),O.showOnb&&e.jsxs("div",{className:"lockbar on",children:[e.jsx("b",{children:c.lockbarText}),e.jsx("button",{type:"button",onClick:()=>u({type:"modal",modal:"rdv"}),children:c.lockbarCta})]}),p.popupId&&e.jsx(Aa,{}),e.jsx(Fa,{}),C&&e.jsx("div",{className:"flash on",children:C}),m&&e.jsx(Et,{variant:"acquirer",initialCompany:Xe().co,initialWebsite:Xe().site,onClose:()=>v(null)})]})})}function Va(){const{dossiers:t,st:a,dispatch:n,pipe:r,lang:o,t:d}=E(),s=x.useMemo(()=>{const c={};return t.forEach(f=>{f.continent&&Me(f,a.filters,r)&&(c[f.continent]=(c[f.continent]||0)+1)}),c},[t,a.filters,r]);return e.jsxs("div",{className:"conts",children:[qt.map(c=>{const f=Se.find(p=>p.key===c);return e.jsxs("button",{type:"button",className:"cbtn","aria-selected":a.continent===c,onClick:()=>n({type:"continent",key:c}),children:[o==="fr"?f.fr:f.en,e.jsx("span",{className:"n",children:s[c]||0})]},c)}),e.jsx("span",{className:"side",children:e.jsx("button",{type:"button",onClick:()=>n({type:"mapFold",folded:!a.mapFolded}),children:a.mapFolded?d.showMap:d.hideMap})})]})}function Xe(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function Ya(t){return t>=1e9?(t/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":t>=1e6?Math.round(t/1e6)+" M€":Math.round(t/1e3)+" k€"}export{st as FlagCell,pe as SigBadge,ve as SigWin,Ga as default,Ya as fmtShort,E as useV2};
