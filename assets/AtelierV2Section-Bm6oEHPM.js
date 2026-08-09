import{r as u,u as ht,a as vt,b as yt,R as me,L as wt,C as Oe,c as kt,d as jt,l as we,o as ke,e as Re,n as Le,f as Ie,g as Nt,h as Ct,i as zt,S as ze,j as St,k as Et,m as _,p as Se,q as se,s as re,t as e,v as U,w as ve,x as X,y as tt,z as at,A as rt,B as Ce,D as Ee,E as Pe,F as _e,G as de,H as $e,I as ie,J as ae,K as Tt,M as At,N as nt,O as Te,P as Ae,Q as Ft,T as Mt,U as Fe,V as Dt,W as ot,X as lt,Y as qt,Z as Bt,_ as Ue,$ as He,a0 as Ve,a1 as Ot,a2 as Rt,a3 as Lt,a4 as It,a5 as Ye,a6 as Pt,a7 as _t,a8 as ge,a9 as je,aa as $t,ab as Ut,ac as Ht,ad as Vt}from"./index-BdrfXCSu.js";const Yt=({filloutId:t,domain:a,inheritParameters:n,parameters:r,dynamicResize:o,onInit:s,onPageChange:d,onSubmit:c})=>{const[f,p]=u.useState(!0),x=ht({filloutId:t,domain:a,inheritParameters:n,parameters:r,dynamicResize:o});vt(x,{onInit:s,onPageChange:d,onSubmit:c});const[i,h]=u.useState();return yt(x,"form_resized",b=>{const g=b.size;typeof g=="number"&&h(g)},{disabled:!o}),me.createElement("div",{className:"fillout-standard-embed",style:{height:o?typeof i=="number"?i:256:"100%",transition:o?"height 150ms ease":void 0}},f&&me.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},me.createElement(wt,null)),x&&me.createElement("iframe",{src:x.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>p(!1),style:{width:f?0:"100%",height:f?0:"100%",opacity:f?0:1,borderRadius:10,border:0,minHeight:256}}))},Wt={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Entrées des moteurs, pas encore passées au crible.","MATCH au crible. Le mémo n’a pas encore été lancé.","Mémo produit — verdict CONSIDER ou MONITOR.","Mémo produit — verdict CALL : votre OUI ou NON est attendu.","Vos OUI. Place à la prise de contact.","NO MATCH au crible, ou PASS après mémo.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(t,a,n)=>`<b>${t} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${n} sans réponse.</b>`,morningThesis:(t,a,n)=>`<b>${t}</b> cibles sourcées ce matin — <b>${a}</b> déjà évaluées par Stan`+(n?`, <b>${n}</b> restent à évaluer.`:'. <span class="ok">Rien à faire.</span>'),morningEval:t=>`▶ Les évaluer (${t})`,identTitle:t=>`Cibles pour ${t}`,identCoverage:"COUVERTURE DU MARCHÉ",identCoverageOf:(t,a)=>`<b>${t}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"MOTEUR DE MÉMOS",identPerDay:"mémo/jour",identPending:t=>`→ ${t} en attente`,identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Inverser l’ordre de tri",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:t=>`Décision annulée sur ${t}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ OUI",actNo:"✗ NON",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:t=>`${t} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"CRIBLE · MÉMO",colScore:"SCORE",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:t=>`Depuis le verdict de Stan : ${t} j`,waitChip:t=>`⏱ ${t} j`,densList:"LISTE",densOpen:"DÉPLIÉ",densMaxi:"MAXI",memoSynth:"SYNTHÈSE",memoOpenFull:"📖 Lire le mémo complet →",memoDeep:"⚡ Mémo détaillé",memoDeepHint:"Pour ce dossier à trancher, vous pouvez lancer l’analyse détaillée : étude de marché, quadrant concurrentiel, scénarios.",memoDeepSent:t=>`Mémo détaillé lancé sur ${t} — prêt dans 35 à 40 minutes`,memoInstantSent:t=>`Analyse lancée sur ${t} — mémo prêt dans ~15 minutes`,memoNone:"Aucun mémo pour ce dossier — lancez l’analyse.",creditsCap:"CRÉDITS MÉMO",creditsToday:"aujourd’hui",creditsRecharge:"Recharger →",creditsCost:t=>`−${t} crédit${t>1?"s":""}`,creditsNone:"Crédit épuisé — rechargez ou attendez demain 7 h.",rechargeTitle:"Crédits mémo",rechargeHint:t=>`Votre offre comprend <b>${t} crédits par jour</b>, rechargés chaque matin. Besoin de plus tout de suite ?`,rechargeNote:"Les crédits achetés n’expirent pas. Ils s’utilisent après vos crédits quotidiens.",rechargeBuy:"Ajouter",rechargeUnit:(t,a)=>`${t} crédits — ${a} €`,onbTag:"APERÇU PRIVÉ · LECTURE SEULE",onbTitle:t=>`Votre deal flow est prêt — <b>${t} cibles retenues</b> par Stan`,onbSub:t=>`${t} sociétés passées au crible sur votre thèse. Les dix premières lignes sont ouvertes ; le reste se débloque en trente minutes.`,onbSteps:[["Stan a étudié votre présence en ligne","Site, offres d’emploi, presse — il en a déduit vos angles d’acquisition."],["Il a criblé le marché","Chaque société confrontée à vos critères."],["Il a rédigé des mémos","Analyses chiffrées, synergies, verdicts."],["À vous de trancher","Trente minutes pour régler votre deal flow et tout débloquer."]],onbCta:"Choisir un créneau →",lockbarText:"Paramétrons votre deal flow rêvé en 30 minutes",lockbarCta:"Choisir un créneau",rdvHeading:"Paramétrons votre deal flow rêvé en 30 minutes",rdvSubBefore:"Choisissez un créneau ci-dessous, ou contactez votre expert Corporate Development directement au ",rdvSubMid:" ou par email à ",rdvCoFallback:"votre société",rdvUnlockLabel:t=>`Déblocage ${t}`,rdvUnlocks:t=>[["Accédez à toutes vos cibles retenues","Mémos d’investissement complets, synergies, contacts, angle d’approche."],["Stratégie d’acquisition construite avec vous","Hypothèse + stratégie d’acquisition recalibrées en live, avec vous."],["Tranchons ensemble les cibles que vous voulez","OUI / NON, sourcing de sociétés similaires, export et synchronisation CRM."],["Votre AI Corporate Developer est lancé",`Stan travaille pour ${t} chaque matin — vous n’avez plus qu’à décider.`]],queueTitle:"File de traitement",queueDone:(t,a)=>`<b>${t} / ${a}</b> mémos générés`,queueTomorrow:"À VENIR — ORDRE PROJETÉ, RECALCULÉ CHAQUE MATIN",queueToday:"ANALYSÉS AUJOURD’HUI",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugSave:"Enregistrer",plugTest:"Tester",plugRemove:"Retirer",plugConfigured:"Configuré",plugMcp:"Claude & IA (MCP)",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(t,a)=>`<b>${t}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:t=>`${t} passées au crible`,alertTitle:"🔔 Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"VOS ANGLES D’ACQUISITION",critVerdicts:"Verdicts possibles : <b>CALL</b> (appel recommandé) · <b>CONSIDER</b> / <b>MONITOR</b> (à creuser) · <b>PASS</b> (écartée après analyse).",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:t=>`actualisée le ${t}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:t=>`actualisée le ${t}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:t=>`Onboarding lancé pour ${t} — suivez l’avancement dans le cockpit`,groupEngine:"Moteur",groupNone:"Rien",browse:t=>`Parcourir les ${t}`,chainAll:t=>`Enchaîner les ${t}`,colCompany:"SOCIÉTÉ & DESCRIPTION",grpCount:(t,a)=>`${t} à envoyer sur ${a} sourcées`,emptyTab:"AUCUNE CIBLE DANS CET ONGLET",emptyScope:"AUCUNE SOCIÉTÉ DANS CE PÉRIMÈTRE"},Gt={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Engine finds not yet screened.","MATCH at screening. Memo not launched yet.","Memo produced — CONSIDER or MONITOR verdict.","Memo produced — CALL verdict: your YES or NO is expected.","Your YES list. Time to reach out.","NO MATCH at screening, or PASS after memo.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(t,a,n)=>`<b>${t} Stan CALL${t>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${n} awaiting answer.</b>`,morningThesis:(t,a,n)=>`<b>${t}</b> targets sourced this morning — <b>${a}</b> already screened by Stan`+(n?`, <b>${n}</b> left to screen.`:'. <span class="ok">Nothing to do.</span>'),morningEval:t=>`▶ Screen them (${t})`,identTitle:t=>`Targets for ${t}`,identCoverage:"MARKET COVERAGE",identCoverageOf:(t,a)=>`<b>${t}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"MEMO ENGINE",identPerDay:"memo/day",identPending:t=>`→ ${t} queued`,identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Reverse sort order",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:t=>`Decision undone on ${t}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ YES",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:t=>`${t} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"SCREEN · MEMO",colScore:"SCORE",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:t=>`Since Stan’s verdict: ${t} d`,waitChip:t=>`⏱ ${t} d`,densList:"LIST",densOpen:"OPEN",densMaxi:"CARDS",memoSynth:"SUMMARY",memoOpenFull:"📖 Read the full memo →",memoDeep:"⚡ Detailed memo",memoDeepHint:"For this file to decide, you can launch the detailed analysis: market study, competitive quadrant, scenarios.",memoDeepSent:t=>`Detailed memo launched on ${t} — ready in 35 to 40 minutes`,memoInstantSent:t=>`Analysis launched on ${t} — memo ready in ~15 minutes`,memoNone:"No memo for this file yet — launch the analysis.",creditsCap:"MEMO CREDITS",creditsToday:"today",creditsRecharge:"Top up →",creditsCost:t=>`−${t} credit${t>1?"s":""}`,creditsNone:"Out of credits — top up or wait for tomorrow 7am.",rechargeTitle:"Memo credits",rechargeHint:t=>`Your plan includes <b>${t} credits per day</b>, refilled every morning. Need more right now?`,rechargeNote:"Purchased credits never expire. They are used after your daily credits.",rechargeBuy:"Add",rechargeUnit:(t,a)=>`${t} credits — €${a}`,onbTag:"PRIVATE PREVIEW · READ ONLY",onbTitle:t=>`Your deal flow is ready — <b>${t} targets kept</b> by Stan`,onbSub:t=>`${t} companies screened against your thesis. The first ten rows are open; the rest unlocks in thirty minutes.`,onbSteps:[["Stan studied your online presence","Website, job posts, press — it inferred your acquisition angles."],["It screened the market","Every company checked against your criteria."],["It wrote memos","Quantified analyses, synergies, verdicts."],["Your turn to decide","Thirty minutes to tune your deal flow and unlock everything."]],onbCta:"Pick a slot →",lockbarText:"Let’s set up your dream deal flow in 30 minutes",lockbarCta:"Pick a slot",rdvHeading:"Let’s set up your ideal deal flow in 30 minutes",rdvSubBefore:"Pick a slot below, or reach your Corporate Development expert directly at ",rdvSubMid:" or by email at ",rdvCoFallback:"your company",rdvUnlockLabel:t=>`Unlock ${t}`,rdvUnlocks:t=>[["Access every target you kept","Full investment memos, synergies, contacts, approach angle."],["Acquisition strategy built with you","Hypothesis + acquisition strategy recalibrated live, with you."],["Let’s decide together on the targets you want","YES / NO, sourcing of similar companies, export and CRM sync."],["Your AI Corporate Developer is live",`Stan works for ${t} every morning — all you have to do is decide.`]],queueTitle:"Processing queue",queueDone:(t,a)=>`<b>${t} / ${a}</b> memos generated`,queueTomorrow:"UP NEXT — PROJECTED ORDER, RECOMPUTED EVERY MORNING",queueToday:"ANALYZED TODAY",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugSave:"Save",plugTest:"Test",plugRemove:"Remove",plugConfigured:"Configured",plugMcp:"Claude & AI (MCP)",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(t,a)=>`<b>${t}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:t=>`${t} screened`,alertTitle:"🔔 Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"YOUR ACQUISITION ANGLES",critVerdicts:"Possible verdicts: <b>CALL</b> (call recommended) · <b>CONSIDER</b> / <b>MONITOR</b> (worth digging) · <b>PASS</b> (ruled out after analysis).",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:t=>`updated ${t}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:t=>`updated ${t}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:t=>`Onboarding launched for ${t} — track progress in the cockpit`,groupEngine:"Engine",groupNone:"None",browse:t=>`Browse the ${t}`,chainAll:t=>`Chain the ${t}`,colCompany:"COMPANY & DESCRIPTION",grpCount:(t,a)=>`${t} to send out of ${a} sourced`,emptyTab:"NO TARGET IN THIS TAB",emptyScope:"NO COMPANY IN THIS SCOPE"},Kt={fr:{...Oe.fr,...Wt},en:{...Oe.en,...Gt}},Qt=`.atl2{
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
.atl2 .bulk .side .hint{white-space:nowrap}`,Jt=`
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
`,Xt=Qt+Jt;function Zt(t){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(t)||""}catch{return""}}function ea(t,a){return t||a.mode!=="client"||!a.token?"visiteur":Zt("teaser")==="1"?"apercu":"client"}const ta={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!1,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0}},aa=t=>ta[t],oe=t=>Object.assign(t,{continent:St(t.cc)});function Ne(t){const a=new Set,n=[];for(const r of t){const o=(r.name||"").toLowerCase();!o||a.has(o)||(a.add(o),n.push(r))}return n}const ra=60*60*1e3;function na(t){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+t)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>ra?null:a}catch{return null}}function be(t,a){try{sessionStorage.setItem("ppmap:swr:"+t,JSON.stringify({...a,ts:Date.now()}))}catch{}}const oa=t=>t==="default"?"":t==="ops"?"ops":"research:"+t.research;function la(t,a,n="default"){const r=n!=="default",o=u.useMemo(()=>t||r?{mode:"anon"}:kt(),[t,r]),s=u.useMemo(()=>r?"visiteur":ea(t,o),[t,o,r]),d=u.useMemo(()=>aa(s),[s]),c=s!=="visiteur",f=oa(n),[p,x]=u.useState([]),[i,h]=u.useState(""),[b,g]=u.useState(null),[v,l]=u.useState(""),[w,j]=u.useState(new Set),[y,C]=u.useState(null),[T,R]=u.useState(!0),[P,m]=u.useState(!1),[N,A]=u.useState(0),[F,D]=u.useState(0),q=u.useRef(0),z=u.useMemo(()=>{var E;if(s!=="client")return"";try{return((E=jt())==null?void 0:E.email)||""}catch{return""}},[s]);u.useEffect(()=>{const E=++q.current;let B=!0;const I=()=>B&&E===q.current,Y=(c&&o.token?o.token:"pub:"+a)+(f?":"+f:""),ee=na(Y);return ee?(x(ee.objs.map(oe)),ee.fund&&h(ee.fund),g(ee.marketEstimate??null),l(ee.generatedAt||""),R(!1)):R(!0),(async()=>{try{if(n==="ops"){const K=await we(),W=((K==null?void 0:K.recent_ops)||[]).map(H=>ke(H,a)).filter(H=>!!H);if(!I())return;x(W.map(oe)),be(Y,{objs:W})}else if(typeof n=="object"){const W=(await Re()||[]).filter(L=>(L.slug||"")===n.research).map(L=>Le(L,a)).filter(L=>!!L),H=Ne(await Ie(W,a));if(!I())return;x(H.map(oe)),be(Y,{objs:H})}else if(c&&o.token){const K=Nt(o.token),W=we(),H=Ct(o.token),L=await K;let te=L?L.targets:[];I()&&L&&(h(L.fund||""),g(L.marketEstimate??null),l(L.generatedAt||""),x(te.map(oe)),R(!1),m(!1));const[Q,ce]=await Promise.all([W,H]),fe=((Q==null?void 0:Q.recent_ops)||[]).map(G=>ke(G,a)).filter(G=>!!G);if(te=[...te,...fe],!I())return;x(te.map(oe));const le=new Set;for(const G of ce){const $=(G.id||G.co||"").toString().trim().toLowerCase();$&&le.add($.startsWith("t:")?$:"t:"+$)}j(le),L&&be(Y,{fund:L.fund,marketEstimate:L.marketEstimate,generatedAt:L.generatedAt,objs:te})}else{const K=zt(),W=Re(),H=we(),L=await K;I()&&L.length&&(x(Ne(L).map(oe)),R(!1),m(!1));const[te,Q]=await Promise.all([W,H]),ce=(te||[]).map($=>Le($,a)).filter($=>!!$),fe=await Ie(ce,a),le=((Q==null?void 0:Q.recent_ops)||[]).map($=>ke($,a)).filter($=>!!$),G=Ne([...L,...fe,...le]);if(!I())return;x(G.map(oe)),be(Y,{objs:G})}I()&&m(!1)}catch{I()&&!ee&&m(!0)}finally{I()&&R(!1)}})(),()=>{B=!1}},[c,o.token,a,N,f]),u.useEffect(()=>{if(!d.showCredits||!z){C(null);return}let E=!0;return(async()=>{try{const B=await fetch(`${ze}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:z})});if(!B.ok)return;const I=await B.json();E&&I&&I.ok!==!1&&C(I)}catch{}})(),()=>{E=!1}},[d.showCredits,z,F]);const M=u.useCallback(E=>j(new Set(E)),[]);return{session:o,mode:s,caps:d,fund:i,email:z,marketEstimate:b,generatedAt:v,dossiers:p,favIds:w,setFavIds:M,credits:y,reloadCredits:()=>D(E=>E+1),loading:T,error:P,refresh:()=>A(E=>E+1)}}const it=()=>({win:"all",status:"all",signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],search:""}),ia=(t="europe",a=!1,n)=>({continent:t,ptab:(n==null?void 0:n.ptab)??1,dens:(n==null?void 0:n.dens)??"liste",filters:{...it(),...(n==null?void 0:n.filters)||{}},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,modal:(n==null?void 0:n.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,memoTab:0,undo:[],mapFolded:a});function sa(t,a){switch(a.type){case"continent":return{...t,continent:a.key,filters:{...t.filters,country:[]},shown:{},popupId:null,openFacet:null};case"ptab":return{...t,ptab:a.tab,shown:{},popupId:null};case"dens":return{...t,dens:a.dens,shown:{}};case"filters":return{...t,filters:{...t.filters,...a.patch},shown:{}};case"toggleFacet":{const n=t.filters[a.facet],r=n.includes(a.value)?n.filter(o=>o!==a.value):[...n,a.value];return{...t,filters:{...t.filters,[a.facet]:r},shown:{}}}case"toggleMemoLevel":{const n=t.filters.memoLevel,r=n.includes(a.value)?n.filter(o=>o!==a.value):[...n,a.value];return{...t,filters:{...t.filters,memoLevel:r},shown:{}}}case"clearFacet":return{...t,filters:{...t.filters,[a.facet]:[]},shown:{}};case"reset":return{...t,filters:it(),shown:{},openFacet:null};case"sort":return{...t,sort:t.sort.key===a.key?{key:a.key,dir:t.sort.dir*-1}:{key:a.key,dir:a.key==="signal"||a.key==="amount"||a.key==="score"?-1:1}};case"groupBy":return{...t,groupBy:a.groupBy};case"more":return{...t,shown:{...t.shown,[a.group]:(t.shown[a.group]||he)+a.by}};case"pile":return{...t,pileMode:a.on,popupId:null};case"openFacet":return{...t,openFacet:t.openFacet===a.facet?null:a.facet};case"popup":return{...t,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"modal":return{...t,modal:a.modal,popupId:a.modal?null:t.popupId};case"chainStart":return{...t,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...t,chain:{...t.chain,idx:t.chain.idx+1}};case"spaceTab":return{...t,spaceTab:a.tab};case"memoConsole":return{...t,memoConsole:a.id,memoTab:0};case"memoTab":return{...t,memoTab:a.tab};case"undoPush":return{...t,undo:[...t.undo,a.entry].slice(-50)};case"undoPop":return{...t,undo:t.undo.slice(0,-1)};case"mapFold":return{...t,mapFolded:a.folded,openFacet:null};default:return t}}const he=60;function Me(t,a,n,r){if(r!=="signal"&&a.signalOnly&&(!_(t)||a.signalEngines.length&&!a.signalEngines.includes(t.engine||""))||r!=="dealKind"&&a.dealKind.length&&!a.dealKind.includes(t.dealKind||"")||r!=="sector"&&a.sector.length&&!a.sector.includes(t.sector||"")||r!=="engine"&&a.engine.length&&!a.engine.includes(t.engine||"")||r!=="stage"&&a.stage.length&&!a.stage.includes(t.stage||"")||r!=="angle"&&n&&a.angle.length&&!a.angle.includes(t.angle||"")||r!=="memoLevel"&&n&&a.memoLevel.length&&!a.memoLevel.includes(Se(t)))return!1;if(r!=="win"&&a.win!=="all"){const o=a.win==="1"?0:a.win==="7"?7:30;if(se(t.date)>o)return!1}if(r!=="status"&&!n&&a.status!=="all"&&re(t)!==a.status)return!1;if(r!=="search"&&a.search.trim()){const o=a.search.trim().toLowerCase();if(!`${t.name||""} ${t.tagline||""} ${t.sector||""}`.toLowerCase().includes(o))return!1}return!0}function st(t,a,n){return t.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(t.cc||"")?!1:Me(t,a.filters,n)}function da(t,a,n,r){return!(!st(t,a,n)||n&&!Et(t,a.ptab,r))}function De(t,a){const n=a.key,r=o=>{switch(n){case"name":return(o.name||"").toLowerCase();case"country":return o.countryLabel||o.cc||"";case"stage":return o.stage||"";case"amount":return o.amountEur||-1;case"age":return-se(o.date);case"score":return typeof o.score=="number"?o.score:-1;case"signal":{const s=_(o);return s?100-(s.left??0):-1}}};return[...t].sort((o,s)=>{const d=r(o),c=r(s);return d<c?-a.dir:d>c?a.dir:(o.name||"").localeCompare(s.name||"")})}function pa(){const{dossiers:t,st:a,t:n,dispatch:r,contName:o,pipe:s}=S(),d=u.useMemo(()=>{const f=i=>s?!0:i.continent===a.continent,p=t.filter(i=>f(i)&&_(i)),x=t.filter(i=>f(i)&&i.kind==="op"&&!_(i)&&(i.dealKind==="ma"||i.dealKind==="levee")&&se(i.date)<=2);return x.sort((i,h)=>(h.amountEur||0)-(i.amountEur||0)),[...De(p,{key:"signal",dir:-1}),...x].slice(0,40)},[t,a.continent,s]),c=f=>d.map(p=>e.jsxs("button",{type:"button",className:"tk"+(U(p)?" spent":""),onClick:x=>{const i=x.currentTarget.getBoundingClientRect();r({type:"popup",id:p.id,anchor:{x:i.left+i.width/2,y:i.bottom}})},title:p.name+(p.tagline?" — "+p.tagline:""),children:[e.jsx(pe,{o:p}),e.jsxs("span",{className:"who",children:[e.jsx(ct,{o:p}),e.jsx("span",{className:"co",children:p.name})]}),typeof p.amountEur=="number"&&p.amountEur>0&&e.jsx("span",{className:"am",children:nr(p.amountEur)}),p.sector&&e.jsx("span",{className:"mt",children:p.sector}),e.jsx(ye,{o:p}),e.jsx("span",{className:"tkgo",children:"→"})]},f+(p.id||p.name)));return e.jsxs("div",{className:"ticker",children:[e.jsxs("span",{className:"lbl",children:[e.jsx("i",{}),n.live,e.jsx("span",{className:"cnt",children:d.length})]}),e.jsx("div",{className:"win",children:d.length?e.jsxs("div",{className:"run",children:[c(0),c(1)]}):e.jsx("div",{className:"run",style:{animation:"none"},children:e.jsx("span",{className:"tk quiet",children:n.liveQuiet(o)})})})]})}const ca="aDx8z7Hzksus",dt="+33 6 83 10 72 86",We="alexandre@proplace.co",fa=`tel:${dt.replace(/[^\d+]/g,"")}`,Ge="pp-rdv-slot";function ua(){const t=typeof document<"u"&&document.getElementById("rdv");return t?(t.scrollIntoView({behavior:"smooth",block:"start"}),!0):!1}function xa(){const{t,caps:a,fund:n}=S(),r=a.showOnb,o=n||t.rdvCoFallback;return e.jsxs("section",{id:"rdv",className:`pp-rdv${r?" is-teaser":""}`,children:[e.jsx("style",{children:ga}),e.jsx("h2",{children:t.rdvHeading}),e.jsxs("p",{className:"pp-rdv-sub",children:[t.rdvSubBefore,e.jsx("a",{href:fa,children:dt}),t.rdvSubMid,e.jsx("a",{href:`mailto:${We}`,children:We})]}),r&&e.jsx("div",{className:"pp-rdv-unlocks",children:t.rdvUnlocks(o).map(([s,d],c)=>e.jsxs("div",{className:"pp-rdv-u",children:[e.jsx("em",{children:t.rdvUnlockLabel(c+1)}),e.jsx("b",{children:s}),e.jsx("span",{children:d})]},s))}),e.jsx("div",{className:"pp-rdv-emb",children:e.jsx(Yt,{filloutId:ca,parameters:n?{company_name:n}:void 0})})]})}function ma(){const[t,a]=u.useState(()=>typeof document>"u"?null:document.getElementById(Ge));return u.useEffect(()=>{t||a(document.getElementById(Ge))},[t]),t?ve.createPortal(e.jsx(xa,{}),t):null}const ga=`
.pp-rdv { border-top: 1px solid #e2e7ee; margin-top: 40px; padding-top: 30px;
  scroll-margin-top: 80px; }
.pp-rdv h2 { margin: 0 0 8px; font-size: 22px; font-weight: 800; color: #0f1f33;
  letter-spacing: -.01em; }
.pp-rdv .pp-rdv-sub { margin: 0 0 18px; font-size: 15px; line-height: 1.55; color: #56697e; }
.pp-rdv .pp-rdv-sub a { color: #2c3a4d; font-weight: 700; text-decoration: none;
  white-space: nowrap; }
.pp-rdv .pp-rdv-sub a:hover { text-decoration: underline; }
.pp-rdv .pp-rdv-emb { width: 100%; min-height: 620px; }

.pp-rdv.is-teaser { border-top: 0; border-radius: 20px; padding: 26px 22px 16px;
  background: linear-gradient(160deg, #0b1220, #13253f 55%, #0f1f33); }
.pp-rdv.is-teaser h2 { color: #fff; }
.pp-rdv.is-teaser .pp-rdv-sub { color: #b7c5d6; }
.pp-rdv.is-teaser .pp-rdv-sub a { color: #fff; }
.pp-rdv-unlocks { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 8px; margin: 0 0 18px; }
.pp-rdv-u { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.08);
  border-radius: 12px; padding: 12px 13px; }
.pp-rdv-u em { display: block; font-style: normal; font-size: 10.5px; font-weight: 700;
  letter-spacing: .08em; text-transform: uppercase; color: #4AC67F; margin-bottom: 5px; }
.pp-rdv-u b { display: block; font-size: 12.5px; line-height: 1.35; color: #fff;
  margin-bottom: 4px; }
.pp-rdv-u span { display: block; font-size: 11.5px; line-height: 1.45; color: #93a5ba; }

/* index.css impose min-height:600px !important (et 100vh sous 768px) à TOUTE
   iframe dont le src contient « fillout » — écrit pour la modale. L'embed en
   ligne se redimensionne lui-même : on rend la main, ici seulement. */
.pp-rdv .pp-rdv-emb iframe[src*="fillout"] { min-height: 620px !important;
  height: 100% !important; }
@media (max-width: 768px) {
  .pp-rdv .pp-rdv-emb { min-height: 700px; }
  .pp-rdv .pp-rdv-emb iframe[src*="fillout"] { min-height: 700px !important; }
}
`;function ba(){const{dossiers:t,pipe:a,t:n,st:r,dispatch:o}=S(),s=u.useMemo(()=>t.filter(i=>se(i.date)===0&&i.kind==="target"),[t]),d=u.useMemo(()=>s.filter(i=>a?X(i)===0:!U(i)),[s,a]),c=s.length-d.length,f=s.length?Math.min(100,c/s.length*100):100;let p;a?p=n.morningThesis(s.length,c,d.length):s.length?c===0?p=n.goalSourced(s.length):c>=s.length?p=n.goalCleared:p=n.goalDone(c,s.length):p=n.goalSourced(0);const x=()=>{a?(o({type:"ptab",tab:0}),o({type:"filters",patch:{win:"1"}})):o({type:"pile",on:!0})};return e.jsxs("div",{className:"goal",children:[e.jsx("span",{className:"gtxt",dangerouslySetInnerHTML:{__html:p}}),e.jsx("div",{className:"pbar",children:e.jsx("i",{style:{width:f+"%"}})}),d.length>0&&e.jsx("button",{type:"button",className:"pilebtn",onClick:x,children:a?n.morningEval(d.length):r.pileMode?n.goalContinue(d.length):n.goalTreat}),e.jsx("span",{className:"gspace"})]})}function ha(){var N;const{t,st:a,dispatch:n,token:r,fund:o,data:s,dossiers:d,mode:c,doSync:f}=S(),[p,x]=u.useState(null),[i,h]=u.useState([]),[b,g]=u.useState(!1),v=c==="client";u.useEffect(()=>{if(!r||!o)return;let A=!0;return(async()=>{const[F,D]=await Promise.all([tt(o),at(r)]);A&&(F&&x(F),h(D))})(),()=>{A=!1}},[r,o]);const l=(p==null?void 0:p.per_day)??null,w=((N=p==null?void 0:p.pool_order)==null?void 0:N.length)??0,j=i.filter(A=>A.status==="running").length,y=A=>{if(!v||l===null||b)return;const F=Math.max(0,Math.min(10,l+A));F!==l&&(g(!0),x(D=>D&&{...D,per_day:F}),rt(r,F).then(D=>{g(!1),x(D===null?q=>q&&{...q,per_day:l}:q=>q&&{...q,per_day:D})}))},C=u.useMemo(()=>d.filter(A=>A.kind==="target"&&U(A)).length,[d]),T=s.marketEstimate,R=T&&T>0?Math.min(100,Math.round(C/T*100)):null,P=(o||"P").split(/\s+/).map(A=>A[0]).join("").slice(0,2).toUpperCase(),m=(()=>{const A=Date.parse(s.generatedAt||"");if(Number.isNaN(A))return"";const F=new Date(A),D=q=>String(q).padStart(2,"0");return`${D(F.getDate())}/${D(F.getMonth()+1)} à ${D(F.getHours())}:${D(F.getMinutes())}`})();return e.jsxs("div",{className:"ident",children:[e.jsxs("div",{className:"idtop",children:[e.jsxs("span",{className:"brand",children:[e.jsx("b",{children:P}),e.jsx("i",{children:o})]}),e.jsx("h1",{children:t.identTitle(o||"…")}),e.jsx("span",{className:"idsp"}),m&&e.jsx("span",{className:"idupd",children:t.identUpdatedAt(m)}),e.jsx("button",{type:"button",className:"ic",title:t.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),e.jsx("button",{type:"button",className:"ic",title:t.identTuto,onClick:()=>n({type:"modal",modal:"tuto"}),children:"▶"})]}),e.jsxs("div",{className:"idmain",children:[R!==null&&T&&e.jsxs("span",{className:"cover",title:t.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[e.jsx("span",{className:"el",children:t.identCoverage}),e.jsxs("span",{className:"ev",children:[e.jsx("span",{className:"bar",children:e.jsx("i",{style:{width:R+"%"}})}),e.jsxs("b",{children:[R," %"]})]}),e.jsx("span",{className:"edv"}),e.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:t.identCoverageOf(C,T)}})]}),e.jsxs("span",{className:"engine",title:t.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[e.jsx("span",{className:"el",children:t.identEngine}),l!==null&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"ev",children:[e.jsx("b",{className:"mi",onClick:A=>{A.stopPropagation(),y(-1)},children:"−"}),e.jsx("b",{className:"q",children:l})," ",t.identPerDay,e.jsx("b",{className:"mi",onClick:A=>{A.stopPropagation(),y(1)},children:"+"})]}),e.jsx("span",{className:"edv"})]}),l===0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"epause",title:t.identPauseTitle,children:t.identPause}),e.jsx("span",{className:"edv"})]}),j>0&&e.jsxs("span",{className:"ev",children:["⏳ ",j]}),e.jsx("span",{className:"ego",children:t.identPending(w)})]}),e.jsx("span",{className:"idsp"}),e.jsxs("span",{className:"icgrp",children:[e.jsx("button",{type:"button",className:"ic",title:t.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),e.jsx("button",{type:"button",className:"ic",title:t.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),e.jsx("button",{type:"button",className:"ic",title:t.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),e.jsx("button",{type:"button",className:"ic",title:t.identSync,disabled:!v,onClick:f,children:"🔄"})]}),e.jsxs("span",{className:"isrch",children:["🔍",e.jsx("input",{placeholder:t.identSearch,value:a.filters.search,onChange:A=>n({type:"filters",patch:{search:A.target.value}})})]})]})]})}function va(){const{t,counts:a,dispatch:n}=S();return e.jsxs("div",{className:"onb",children:[e.jsxs("div",{className:"onbh",children:[e.jsxs("span",{className:"tag",children:[e.jsx("i",{}),t.onbTag]}),e.jsx("h2",{dangerouslySetInnerHTML:{__html:t.onbTitle(a[1]+a[2]+a[3])}}),e.jsx("div",{className:"sub",children:t.onbSub(a[7])})]}),e.jsx("div",{className:"steps4",children:t.onbSteps.map(([r,o],s)=>{const d=s===t.onbSteps.length-1;return e.jsxs("div",{className:"s4"+(d?" go":""),children:[e.jsx("span",{className:"s4n",children:s+1}),e.jsx("div",{className:"s4t",children:r}),e.jsx("div",{className:"s4d",children:o}),d&&e.jsx("button",{type:"button",className:"s4b p",onClick:()=>n({type:"modal",modal:"rdv"}),children:t.onbCta})]},s)})})]})}const ya=["--p0","--p1","--p2","--p3","--p4"];function wa(){const{st:t,dispatch:a,counts:n,t:r,doUndo:o}=S(),s=u.useRef({});u.useEffect(()=>{s.current={...n}},[n]);const d=p=>{const x=s.current[p],i=x!==void 0?n[p]-x:0;return e.jsxs("button",{type:"button",className:"step"+(p===3&&n[3]>0?" wait":""),style:{"--c":`var(${ya[p]})`,"--tc":p<=3?"var(--ink)":"#fff"},"aria-selected":t.ptab===p,title:r.phelp[p],onClick:()=>a({type:"ptab",tab:p}),children:[e.jsxs("span",{className:"l",children:[r.plabels[p].toUpperCase(),p===3&&n[3]>0&&e.jsx("i",{className:"wd"})]}),e.jsxs("span",{className:"n"+(i>0?" up":i<0?" down":""),children:[n[p],i!==0&&e.jsxs("em",{className:"delta",children:[i>0?"+":"−",Math.abs(i)]})]})]},p)},c=(p,x,i)=>e.jsxs("button",{type:"button",className:"off"+(x?" view":""),style:{"--c":p===5?"var(--p5)":p===6?"var(--pf)":"var(--pv)"},"aria-selected":t.ptab===p,title:r.phelp[p],onClick:()=>a({type:"ptab",tab:p}),children:[e.jsx("span",{className:"l",children:i.toUpperCase()}),e.jsx("span",{className:"n",children:n[p]})]},p),f=(p,x,i,h=!1)=>e.jsx("button",{type:"button",className:"tool",title:x,disabled:h,onClick:i,children:p},x);return e.jsxs("div",{className:"funnel",children:[e.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(d)}),e.jsxs("div",{className:"offtrack",children:[c(5,!1,r.plabels[5]),c(7,!0,r.plabels[7]),c(6,!0,"★ "+r.plabels[6])]}),e.jsxs("span",{className:"ftools",children:[f("↩",r.toolUndo,o,t.undo.length===0),f("↺",r.toolReset,()=>{a({type:"reset"})}),f("⇅",r.toolSort,()=>a({type:"sort",key:t.sort.key})),f("▶",r.toolTuto,()=>a({type:"modal",modal:"tuto"})),f("⚙",r.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}const ka=["#eef1f5","#eaf6ef","#e2f0e8","#fdf3e2","#e2efe7","#fdeaea","#fdf6de","#e8eaee"];function ja(){const{st:t,dispatch:a,t:n,scoped:r,memoQueued:o,doAnalyse:s,mode:d}=S(),c=u.useRef(null),[f,p]=u.useState(60);u.useEffect(()=>{let b=0;const g=()=>{var y;const v=c.current;if(!v)return;const l=(y=v.parentElement)==null?void 0:y.querySelector('.funnel [aria-selected="true"]');if(!l)return;const w=l.getBoundingClientRect(),j=v.getBoundingClientRect();p(Math.max(20,Math.min(w.left+w.width/2-j.left,j.width-30)))};return b=requestAnimationFrame(g),window.addEventListener("resize",g),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",g)}},[t.ptab]);const x=t.ptab;let i=n.tuto[x].p;if(x===3){const b=r.filter(l=>l.kind==="target"&&X(l)===3),g=b.filter(l=>Ce(l)==="auto").length,v=b.filter(l=>Ce(l)==="cd").length;i=n.tutoPending(g,v,b.length)}const h=(()=>{if(d!=="client")return null;if(x===0&&r.length)return{label:n.tuto[0].a,run:()=>a({type:"chainStart",queue:r.map(b=>b.id)})};if(x===1){const b=r.filter(g=>g.kind==="target"&&X(g)===1&&!o.has(g.id)).slice(0,10);if(b.length)return{label:n.tuto[1].a,run:()=>b.forEach(g=>s(g))}}return null})();return e.jsxs("div",{ref:c,className:"tuto mini",style:{"--bg":ka[x],"--ax":f+"px","--stc":"var(--ink)"},children:[e.jsx("span",{className:"txt",children:e.jsxs("p",{children:[e.jsx("b",{className:"tstep",children:n.plabels[x].toUpperCase()}),e.jsx("span",{dangerouslySetInnerHTML:{__html:i}})]})}),h&&e.jsx("button",{type:"button",className:"tprim",onClick:h.run,children:h.label})]})}const Ke=["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"];function Qe(t){let a=2166136261;for(let n=0;n<t.length;n++)a^=t.charCodeAt(n),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function Na(t,a){const[n,r]=u.useState(1);return u.useEffect(()=>{let o=!0,s=0;const d=()=>{var p;if(!o)return;const f=(p=t.current)==null?void 0:p.getScreenCTM();f&&f.a>0?r(f.a):s=requestAnimationFrame(d)};d();const c=new ResizeObserver(()=>d());return t.current&&c.observe(t.current),window.addEventListener("resize",d),()=>{o=!1,cancelAnimationFrame(s),c.disconnect(),window.removeEventListener("resize",d)}},[t,a]),n}function Ca(){const{st:t,dispatch:a,scoped:n,pipe:r,markRow:o,markedId:s,byId:d,lang:c,t:f}=S(),p=u.useRef(null),x=u.useRef(null),i=Ee.find(m=>m.key===t.continent),h=Na(p,t.continent+":"+t.mapFolded),[b,g]=u.useState(new Map),[v,l]=u.useState(null);u.useEffect(()=>{const m=p.current;if(!m)return;const N=new Map;m.querySelectorAll("path[data-i2]").forEach(A=>{const F=A.dataset.i2;if(F)try{const D=A.getBBox();D.width>0&&N.set(F,{x:D.x,y:D.y,w:D.width,h:D.height})}catch{}}),g(N)},[t.continent,h]);const w=u.useMemo(()=>n.filter(m=>m.cc),[n]),j=u.useMemo(()=>{const m=new Map;return w.forEach(N=>m.set(N.cc,(m.get(N.cc)||0)+1)),m},[w]),y=u.useMemo(()=>w.map(m=>{const N=m.cc?b.get(m.cc):void 0;if(!N)return null;const A=Qe(m.name||m.id||""),F=Qe((m.id||m.name||"")+"·y"),D=(A-.5)*Math.min(N.w*.55,60),q=(F-.5)*Math.min(N.h*.55,60);return{d:m,x:N.x+N.w/2+D,y:N.y+N.h/2+q}}).filter(m=>!!m),[w,b]),C=m=>h>0?m/h:m,T=u.useMemo(()=>r?[0,1,2,3,4,5].map(m=>({c:Ke[m],fr:f.plabels[m].toUpperCase(),en:f.plabels[m].toUpperCase(),n:n.filter(N=>N.kind==="target"&&X(N)===m).length})).filter(m=>m.n>0):Pe.map((m,N)=>({...m,n:n.filter(A=>_e(A)===N).length})),[n,r,f.plabels]),R=s?d.get(s):null,P=R?y.find(m=>m.d.id===R.id):null;return e.jsxs("div",{className:"mapzone",ref:x,children:[e.jsxs("svg",{ref:p,viewBox:i.viewBox,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":c==="fr"?i.fr:i.en,onMouseLeave:()=>{l(null),o(null)},children:[e.jsx("g",{children:i.countries.map((m,N)=>e.jsx("g",{className:"ct"+(m.i2&&j.get(m.i2)?"":" empty"),children:e.jsx("path",{d:m.d,"data-i2":m.i2||void 0})},N))}),e.jsx("g",{children:y.map(m=>{const N=Pe[_e(m.d)],A=!!_(m.d),F=m.d.kind==="target",D=r&&F?Ke[X(m.d)]:N.c,q=!r&&U(m.d);return e.jsxs("g",{className:"co"+(q?" done":""),onMouseEnter:()=>{var E,B;const z=(E=x.current)==null?void 0:E.getBoundingClientRect(),M=(B=p.current)==null?void 0:B.createSVGPoint();if(M&&p.current&&z){M.x=m.x,M.y=m.y;const I=M.matrixTransform(p.current.getScreenCTM());l({x:I.x-z.left,y:I.y-z.top,label:m.d.name+" · "+(de(m.d.cc,c)||m.d.countryLabel||"")})}o(m.d.id)},onMouseLeave:()=>{l(null),o(null)},onClick:()=>{var E;const z=(E=p.current)==null?void 0:E.createSVGPoint();let M=null;if(z&&p.current){z.x=m.x,z.y=m.y;const B=z.matrixTransform(p.current.getScreenCTM());M={x:B.x,y:B.y}}a({type:"popup",id:m.d.id,anchor:M})},children:[e.jsx("circle",{className:"h",cx:m.x,cy:m.y,r:C(Math.max(11,N.px+7))}),e.jsx("circle",{className:"v",cx:m.x,cy:m.y,r:C(N.px),fill:D,stroke:A?"#DC2626":"#ffffff",strokeWidth:C(A?2.2:1.3)})]},m.d.id||m.d.name)})}),P&&e.jsx("circle",{className:"ring on",cx:P.x,cy:P.y,r:C(13),fill:"none",stroke:"#0F172A",strokeWidth:C(2)})]}),e.jsx("div",{className:"hov"+(v?" on":""),style:v?{left:v.x,top:v.y}:void 0,children:v==null?void 0:v.label}),e.jsx("div",{className:"legend",children:T.map((m,N)=>e.jsxs("span",{children:[e.jsx("i",{style:{"--c":m.c}}),c==="fr"?m.fr:m.en," ",e.jsx("b",{children:m.n})]},N))}),n.some(m=>!m.cc)&&e.jsx("div",{className:"legend",style:{left:"auto",right:10},children:e.jsxs("span",{children:["🌐 ",f.notLocated," ",e.jsx("b",{children:n.filter(m=>!m.cc).length})]})})]})}function za(){const{st:t,dispatch:a,dossiers:n,t:r,pipe:o,contName:s}=S(),d=t.filters,c=u.useMemo(()=>n.filter(b=>b.continent===t.continent),[n,t.continent]),f=b=>c.filter(g=>b!=="country"&&d.country.length&&!d.country.includes(g.cc||"")?!1:Me(g,d,o,b==="country"?void 0:b)),p=u.useMemo(()=>{const b=f("win"),g=v=>b.filter(l=>(l.date?Math.max(0,Math.floor((Date.now()-Date.parse(l.date))/864e5)):9999)<=v).length;return[g(0),g(7),g(30),b.length]},[c,d,o]),x=u.useMemo(()=>{if(o)return null;const b=f("status"),g={all:b.length,todo:0,retenu:0,pending:0,ecarte:0};return b.forEach(v=>{g[re(v)]+=1}),g},[c,d,o]),i=d.sector.length+d.country.length+d.engine.length+d.stage.length+d.angle.length+d.memoLevel.length+(d.signalOnly?1:0)+(d.win!=="all"?1:0)+(!o&&d.status!=="all"?1:0)+(d.search.trim()?1:0),h=(b,g,v,l="fbtn")=>e.jsxs("button",{type:"button",className:l,"aria-expanded":t.openFacet===b,onClick:()=>a({type:"openFacet",facet:b}),children:[e.jsx("span",{className:"fl",children:g}),v>0&&e.jsx("span",{className:"n",children:v}),e.jsx("span",{className:"cv",children:"▾"})]},b);return e.jsxs(e.Fragment,{children:[e.jsxs("aside",{className:"fbar",children:[e.jsx("div",{className:"seg",children:["1","7","30","all"].map((b,g)=>e.jsxs("button",{type:"button","aria-pressed":d.win===b,onClick:()=>a({type:"filters",patch:{win:b}}),children:[r.dates[g],e.jsx("b",{children:p[g]})]},b))}),e.jsxs("span",{className:"fsrch",children:["🔍",e.jsx("input",{placeholder:r.identSearch,value:d.search,onChange:b=>a({type:"filters",patch:{search:b.target.value}})})]}),!o&&x&&e.jsx("div",{className:"statusf",children:[["all",r.statusAll],["todo",r.statusTodo],["retenu",r.statusKeep],["pending",r.statusPending],["ecarte",r.statusDrop]].map(([b,g])=>e.jsxs("button",{type:"button","aria-pressed":d.status===b,onClick:()=>a({type:"filters",patch:{status:b}}),children:[g,e.jsx("b",{children:x[b]??0})]},b))}),e.jsxs("div",{className:"facets",children:[e.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":t.openFacet==="sig",onClick:()=>a({type:"openFacet",facet:"sig"}),children:[e.jsx("span",{className:"fl",children:r.fSignal}),d.signalOnly&&e.jsx("span",{className:"n",children:d.signalEngines.length||"✓"}),e.jsx("span",{className:"cv",children:"▾"})]}),h("sec",r.fSector,d.sector.length),h("pay",r.fCountry,d.country.length),h("det",r.fEngine,d.engine.length),h("sta",r.fStage,d.stage.length),o&&h("ang","Angle",d.angle.length),o&&h("mem","Mémo",d.memoLevel.length)]}),e.jsx("span",{className:"fgrow"}),e.jsxs("div",{className:"frow2",children:[t.mapFolded&&e.jsxs("button",{type:"button",className:"mapbtn",onClick:()=>a({type:"mapFold",folded:!1}),children:["🗺 ",r.showMap.replace("🗺 ","")]}),i>0&&e.jsxs("button",{type:"button",className:"resetbtn on",title:r.clearTitle(c.length,s),onClick:()=>a({type:"reset"}),children:[e.jsx("span",{className:"rot",children:"↺"}),e.jsx("span",{children:r.clear(i)})]}),e.jsx("button",{type:"button",className:"alertbtn",onClick:()=>a({type:"modal",modal:"alert"}),children:r.alertBtn})]})]}),t.openFacet&&e.jsx(Sa,{poolFor:f})]})}function Sa({poolFor:t}){const{st:a,dispatch:n,t:r,lang:o}=S(),s=a.filters,d=a.openFacet,{title:c,cols:f,options:p}=u.useMemo(()=>{if(d==="sig"){const g=t("signal").filter(w=>_(w)),v=new Map;g.forEach(w=>{const j=w.engine||"";v.set(j,(v.get(j)||0)+1)});const l=[{v:"*",label:r.fpSigAll,n:g.length,html:!0,on:s.signalOnly&&!s.signalEngines.length},...$e([...v.keys()],o).map(w=>({v:w,label:ie(w)+" "+ae(w,o),n:v.get(w)||0,html:!1,on:s.signalOnly&&s.signalEngines.includes(w)}))];return{title:r.fpSigTitle,cols:2,options:l}}if(d==="sec"){const g=t("sector"),v=new Map;return g.forEach(l=>{l.sector&&v.set(l.sector,(v.get(l.sector)||0)+1)}),{title:r.fSector.toUpperCase(),cols:3,options:[...v.entries()].sort((l,w)=>w[1]-l[1]).map(([l,w])=>({v:l,label:l,n:w,html:!1,on:s.sector.includes(l)}))}}if(d==="pay"){const g=t("country"),v=new Map;return g.forEach(l=>{l.cc&&v.set(l.cc,(v.get(l.cc)||0)+1)}),{title:r.fCountry.toUpperCase(),cols:3,options:[...v.entries()].sort((l,w)=>w[1]-l[1]).map(([l,w])=>({v:l,label:de(l,o)||l,n:w,html:!1,on:s.country.includes(l)}))}}if(d==="det"){const g=t("engine"),v=new Map;return g.forEach(l=>{l.engine&&v.set(l.engine,(v.get(l.engine)||0)+1)}),{title:r.fEngine.toUpperCase(),cols:2,options:$e([...v.keys()],o).map(l=>({v:l,label:ie(l)+" "+ae(l,o)+' <span style="color:var(--dim);font-size:10px">· '+Tt(At(l),o)+"</span>",n:v.get(l)||0,html:!0,on:s.engine.includes(l)}))}}if(d==="ang"){const g=t("angle"),v=new Map;return g.forEach(l=>{l.angle&&v.set(l.angle,(v.get(l.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...v.entries()].sort((l,w)=>w[1]-l[1]).map(([l,w])=>({v:l,label:l.replace(/[_-]+/g," "),n:w,html:!1,on:s.angle.includes(l)}))}}if(d==="mem"){const g=t("memoLevel"),v=new Map;g.forEach(w=>{if(w.kind==="target"){const j=Se(w);v.set(j,(v.get(j)||0)+1)}});const l=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(w=>({v:String(w),label:l[w],n:v.get(w)||0,html:!1,on:s.memoLevel.includes(w)}))}}const h=t("stage"),b=new Map;return h.forEach(g=>{g.stage&&b.set(g.stage,(b.get(g.stage)||0)+1)}),{title:r.fStage.toUpperCase(),cols:2,options:[...b.entries()].sort((g,v)=>v[1]-g[1]).map(([g,v])=>({v:g,label:g,n:v,html:!1,on:s.stage.includes(g)}))}},[d,a,o]),x=h=>{if(d==="sig"){if(h==="*")n({type:"filters",patch:{signalOnly:!(s.signalOnly&&!s.signalEngines.length),signalEngines:[]}});else{const g=s.signalEngines.includes(h)?s.signalEngines.filter(v=>v!==h):[...s.signalEngines,h];n({type:"filters",patch:{signalOnly:!0,signalEngines:g}})}return}if(d==="mem"){n({type:"toggleMemoLevel",value:Number(h)});return}n({type:"toggleFacet",facet:d==="sec"?"sector":d==="pay"?"country":d==="det"?"engine":d==="ang"?"angle":"stage",value:h})},i=()=>{n(d==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:d==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:d==="sec"?"sector":d==="pay"?"country":d==="det"?"engine":d==="ang"?"angle":"stage"})};return e.jsxs("div",{className:"fpanel on",children:[e.jsxs("div",{className:"ph",children:[e.jsx("b",{children:c}),e.jsx("span",{className:"sp"}),e.jsx("button",{type:"button",onClick:i,children:r.fpNone}),e.jsx("button",{type:"button",onClick:()=>n({type:"openFacet",facet:null}),children:r.fpClose})]}),e.jsx("div",{className:"fcols"+(f===2?" two":""),children:p.map(h=>e.jsxs("button",{type:"button",className:"opt","aria-pressed":h.on,onClick:()=>x(h.v),children:[e.jsx("span",{className:"bx"}),h.html?e.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:h.label}}):e.jsx("span",{className:"l",children:h.label}),e.jsx("span",{className:"n",children:h.n})]},h.v))}),e.jsxs("div",{className:"pf",children:[e.jsx("span",{className:"t",children:r.alertReady}),e.jsx("button",{type:"button",className:"alertbtn",onClick:()=>n({type:"modal",modal:"alert"}),children:r.alertCreate})]})]})}const Je=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function Ea(){const{t,mode:a,token:n,askEvaluate:r,sessTally:o,dispatch:s,evalBusy:d,evalCards:c,caps:f,data:p}=S(),x=a==="client",[i,h]=u.useState(""),[b,g]=u.useState(!1),[v,l]=u.useState(""),[w,j]=u.useState(!1),[y,C]=u.useState(""),[T,R]=u.useState([]),P=u.useRef(!1),m=i.trim()?Je.test(i.trim())?t.evalUrl:t.evalName:t.evalWaiting,N=u.useMemo(()=>v.split(`
`).map(z=>z.trim()).filter(Boolean).slice(0,15),[v]),A=T.length?T:c,F=p.credits,D=()=>{const z=i.trim();z&&(r(null,z),h(""))},q=async()=>{if(!x){r(null,N[0]||"");return}if(!N.length||w)return;j(!0),P.current=!1;const z=[];for(let M=0;M<N.length&&!P.current;M++){C(t.evaluating(M+1,N.length,N[M]));const E=await nt(n,N[M],"atelier2");if(z.unshift({name:E.company||N[M],verdict:E.verdict,reason:E.reason||"",remaining:E.remaining??null}),R([...z]),E.verdict==="quota"){z.unshift({name:"",verdict:"quota",reason:t.quota(N.length-M-1),remaining:0}),R([...z]);break}}C(""),l(""),j(!1)};return e.jsxs("div",{className:"demand",children:[e.jsxs("div",{className:"drow",children:[e.jsxs("span",{className:"dfield",children:[e.jsx("input",{value:i,placeholder:t.evalPh,autoComplete:"off",maxLength:200,onChange:z=>h(z.target.value),onKeyDown:z=>{z.key==="Enter"&&D()}}),e.jsx("span",{className:"detect"+(Je.test(i.trim())?" url":""),children:m})]}),e.jsxs("button",{type:"button",className:"evalbtn"+(d?" loading":""),disabled:d,onClick:D,children:[e.jsx("span",{className:"fill"}),t.evalGo]}),f.showCredits&&F&&e.jsxs("button",{type:"button",className:"credits"+(F.total_available<=0&&!F.unlimited?" empty":""),onClick:()=>s({type:"modal",modal:"recharge"}),children:[e.jsx("span",{className:"cl",children:t.creditsCap}),e.jsx("b",{children:F.unlimited?"∞":F.total_available}),!F.unlimited&&e.jsxs("span",{className:"cm",children:["/ ",F.daily_grant+F.purchased]}),F.total_available<=0&&!F.unlimited?e.jsx("span",{className:"rc",children:t.creditsRecharge}):e.jsx("span",{className:"cd",children:t.creditsToday})]})]}),e.jsx("div",{className:"dunder",children:e.jsx("button",{type:"button",className:"dmulti",onClick:()=>g(!b),children:t.evalMulti})}),b&&e.jsxs("div",{className:"bulk on",children:[e.jsx("textarea",{value:v,placeholder:t.bulkPh,onChange:z=>l(z.target.value.split(`
`).slice(0,15).join(`
`))}),e.jsxs("div",{className:"side",children:[e.jsxs("button",{type:"button",className:"evalbtn"+(w?" loading":""),style:{justifyContent:"center"},disabled:w||!N.length,onClick:()=>{q()},children:[e.jsx("span",{className:"fill"}),w&&y?y:t.evalList]}),e.jsx("span",{className:"hint",children:t.bulkCount(N.length)})]})]}),A.slice(0,1).map((z,M)=>{const E=z.verdict==="kept",B=z.verdict==="quota",I=E?"var(--brand)":B?"var(--bolt)":"var(--red)",Y=E?"var(--brand-l)":B?"#FEF3C7":"#FEF2F2";return e.jsxs("div",{className:"result on",style:{"--c":I,"--bgc":Y},children:[e.jsx("span",{className:"vv",children:e.jsx("span",{className:"vp",children:E?"✓ "+t.kept:B?"⏳":"✗ "+t.dropped})}),z.name&&e.jsx("span",{className:"rn",children:z.name}),e.jsx("span",{className:"rr",children:z.reason?e.jsxs(e.Fragment,{children:[e.jsx("b",{children:t.why})," ",z.reason]}):null}),!B&&e.jsx("button",{type:"button",className:"go",onClick:()=>s({type:"modal",modal:"space"}),children:t.seeSpace(E?t.statusKeep.replace("✅ ",""):t.statusDrop.replace("❌ ",""))})]},M)}),x&&(o.kept+o.dropped>0||A.length>0)&&e.jsxs("div",{className:"tally",children:[e.jsx("span",{dangerouslySetInnerHTML:{__html:t.session(o.kept,o.dropped)}})," ","·"," ",e.jsx("a",{onClick:()=>s({type:"modal",modal:"space"}),children:t.seeMySpace})]})]})}function Ta(t){return t.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Aa(){const{st:t,dispatch:a,byId:n,t:r,doDeep:o}=S(),s=t.memoConsole?n.get(t.memoConsole):null,d=u.useMemo(()=>s?[s.reasoning||"",Ta(s.summary||"")].filter(Boolean).join(`

`):"",[s]);if(!s)return null;const c=Te(s),f=Se(s);return e.jsx("div",{className:"demand",style:{paddingTop:0},children:e.jsxs("div",{className:"memo",style:{marginTop:0},children:[e.jsxs("div",{className:"mh",children:[e.jsx("span",{className:"nm",children:s.name}),c&&e.jsx("span",{className:"vv",children:c}),typeof s.score=="number"&&e.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[s.score,"/100"]}),e.jsx("span",{className:"sp"}),e.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),e.jsx("div",{className:"tabs2",children:e.jsx("button",{type:"button","aria-selected":"true",children:r.memoSynth})}),e.jsx("div",{className:"mb2",children:d?d.split(`

`).map((p,x)=>e.jsx("p",{style:{margin:"0 0 10px"},children:p},x)):e.jsx("p",{children:r.memoNone})}),e.jsxs("div",{className:"mf",children:[Ae(s)?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"t",children:r.memoDeepHint}),e.jsx("button",{type:"button",className:"deep",onClick:()=>o(s),children:r.memoDeep})]}):e.jsx("span",{className:"t",children:f===2?r.critMemoKinds:""}),s.memoUrl&&e.jsx("a",{className:"go",href:s.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:r.memoOpenFull})]})]})})}const Fa={"CALL PENDING":"v-call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function qe({o:t}){const{t:a}=S(),n=Ft(t),r=Te(t),o=X(t),s=Ce(t),d=Mt(t);return e.jsxs("span",{className:"c-vd",children:[n?e.jsx("span",{className:"vd "+(n==="MATCH"?"v-ok":"v-no"),children:n}):e.jsx("span",{className:"vd wait",children:a.actToEval}),r?e.jsx("span",{className:"vd "+(Fa[r]||"v-cons"),children:r}):o===1?e.jsx("span",{className:"vd wait",children:a.actMemoQueue}):null,o===3&&s==="auto"&&e.jsx("span",{className:"org au",title:a.orgAutoTitle,children:a.orgAuto}),o===3&&s==="cd"&&e.jsx("span",{className:"org cd",title:a.orgCdTitle,children:a.orgCd}),o===3&&d!==null&&e.jsx("span",{className:"wait2 "+(d>10?"hot":d>=5?"warm":""),title:a.waitTitle(d),children:a.waitChip(d)})]})}function Xe({o:t}){const{t:a,askEvaluate:n,evalBusy:r,lang:o}=S(),[s,d]=u.useState(!1);if(u.useEffect(()=>{r||d(!1)},[r]),U(t)){const p=(t.verdict||"").toUpperCase()!=="NO MATCH";return e.jsxs("span",{className:"verdict",style:{"--c":p?"var(--brand)":"var(--red)"},title:t.reasoning||"",children:[p?"✓":"✗"," ",e.jsx("b",{children:p?a.kept:a.dropped}),typeof t.score=="number"&&t.score>0?" "+t.score:""]})}const f=s&&r;return e.jsxs("button",{type:"button",className:"rev"+(f?" loading":""),disabled:r,onClick:p=>{p.stopPropagation(),d(!0),n(t)},children:[e.jsx("span",{className:"fill"}),a.evalGo]})}function Ma({o:t}){const{t:a,caps:n,memoQueued:r,approachDone:o,doAnalyse:s,doDecide:d,doPromote:c,doApproach:f,dispatch:p}=S();if(n.lockActions)return e.jsx("span",{className:"cell",children:e.jsxs("button",{type:"button",className:"stbtn",style:{"--c":"var(--line2)","--tc":"var(--dim)"},onClick:h=>{h.stopPropagation(),p({type:"modal",modal:"rdv"})},children:[e.jsx("span",{className:"lk",children:"🔒"}),a.actLocked.replace("🔒 ","")]})});if(!n.pipe)return e.jsx("span",{className:"cell",children:e.jsx(Xe,{o:t})});const x=X(t),i=h=>b=>{b.stopPropagation(),h()};if(x===0)return e.jsx("span",{className:"cell",children:e.jsx(Xe,{o:t})});if(x===1){const h=r.has(t.id);return e.jsx("span",{className:"cell",children:e.jsx("button",{type:"button",className:"memobtn",disabled:h,onClick:i(()=>s(t)),children:h?a.actAnalyseQueued:a.actAnalyse})})}if(x===3)return e.jsx("span",{className:"cell",children:e.jsxs("span",{className:"yn",children:[e.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:i(()=>d(t,!0)),children:a.actYes}),e.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:i(()=>d(t,!1)),children:a.actNo}),t.memoUrl&&e.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:i(()=>p({type:"memoConsole",id:t.id})),children:"📄"})]})});if(x===4){const h=o.has(t.id);return e.jsx("span",{className:"cell",children:e.jsx("button",{type:"button",className:"approach",disabled:h,onClick:i(()=>f(t)),children:h?a.actApproachSent:a.actApproach})})}return x===2?e.jsx("span",{className:"cell",children:e.jsxs("span",{className:"yn",children:[e.jsx("button",{type:"button",className:"promo",onClick:i(()=>c(t)),children:a.actPromote}),t.memoUrl&&e.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:i(()=>p({type:"memoConsole",id:t.id})),children:"📄"})]})}):e.jsx("span",{className:"cell",children:t.memoUrl?e.jsx("button",{type:"button",className:"memobtn read",onClick:i(()=>p({type:"memoConsole",id:t.id})),children:a.actMemo}):e.jsx("span",{className:"rc",children:"—"})})}function Da({o:t}){const{t:a,doThumb:n}=S();return e.jsxs("span",{className:"thu",children:[e.jsx("button",{type:"button",className:"tb up",title:a.thumbUp,onClick:r=>{r.stopPropagation(),n(t,!0),r.currentTarget.classList.add("on")},children:"👍"}),e.jsx("button",{type:"button",className:"tb dn",title:a.thumbDn,onClick:r=>{r.stopPropagation(),n(t,!1),r.currentTarget.classList.add("on")},children:"👎"})]})}function qa({o:t}){const{lang:a}=S();return _(t)?e.jsxs("span",{className:"c-sig",children:[e.jsx(pe,{o:t}),e.jsx(ye,{o:t,src:!0})]}):e.jsx("span",{className:"c-sig",children:e.jsxs("span",{className:"mo",children:[ie(t.engine||"")," ",ae(t.engine||"",a)]})})}function Ba({o:t,locked:a,open:n,onToggle:r}){const{st:o,dispatch:s,caps:d,markRow:c,markedId:f,favIds:p,toggleFav:x}=S(),i=X(t),h=["#0F172A","#475C6E","#8798A8","#B9C6D2"],b=t.date?Math.max(0,Math.floor((Date.now()-Date.parse(t.date))/864e5)):9999,g=b<=0?0:b<=7?1:b<=30?2:3,v=d.pipe&&t.kind==="target"?["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"][i]:h[g],l=p.has(t.id),w=j=>{if(a)return;if(d.pipe){r();return}const y=j.currentTarget.getBoundingClientRect();s({type:"popup",id:t.id,anchor:{x:y.left+Math.min(280,y.width/3),y:y.bottom}})};return e.jsxs(u.Fragment,{children:[e.jsxs("div",{className:"row"+(f===t.id||n?" on":"")+(a?" locked":""),onMouseEnter:()=>c(t.id),onMouseLeave:()=>c(null),onClick:w,children:[e.jsx("span",{className:"pt",style:{"--c":v}}),e.jsx(ct,{o:t}),e.jsxs("span",{className:"nd",children:[e.jsxs("span",{className:"rnm",title:t.name,children:[d.pipe&&e.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:l?1:.35,padding:0,marginRight:4},onClick:j=>{j.stopPropagation(),x(t)},children:l?"★":"☆"}),t.name]}),e.jsx("span",{className:"rds",title:t.tagline||t.headline||"",children:[t.tagline,t.headline,t.reasoning].find(j=>j&&j!==t.name)||""})]}),e.jsx(Oa,{o:t}),e.jsx("span",{className:"c-stade",children:t.stage||""}),e.jsx(qa,{o:t}),d.pipe&&e.jsx(qe,{o:t}),d.pipe&&e.jsxs("span",{className:"c-sc",children:[typeof t.score=="number"?t.score:"",typeof t.score=="number"&&e.jsx("s",{children:"/100"})]}),e.jsx(Ma,{o:t}),d.showThumbs&&e.jsx(Da,{o:t})]}),(n||o.dens==="deplie")&&!a&&e.jsx(Ra,{o:t})]})}function Oa({o:t}){const{lang:a,caps:n}=S();if(n.pipe&&t.kind==="target")return e.jsx("span",{className:"c-amt none",children:"—"});const r=Fe(t.amountEur,a);return e.jsx("span",{className:"c-amt"+(r?"":" none"),children:r||"—"})}function Ra({o:t}){const{t:a,lang:n,dispatch:r,caps:o,outbound:s,doOnboard:d}=S();return e.jsxs("div",{className:"card",style:{display:"grid"},children:[e.jsxs("div",{children:[t.tagline&&e.jsx("p",{className:"lead",children:t.tagline}),t.reasoning&&e.jsxs("div",{className:"dec",children:[e.jsx("b",{children:a.why})," ",t.reasoning]}),e.jsxs("div",{className:"tg",children:[t.sector&&e.jsx("span",{children:t.sector}),t.stage&&e.jsx("span",{children:t.stage}),t.countryLabel&&e.jsx("span",{children:t.countryLabel}),t.city&&e.jsx("span",{children:t.city})]})]}),e.jsxs("div",{className:"cside",children:[e.jsxs("div",{className:"top",children:[typeof t.score=="number"&&e.jsx("span",{className:"sc3",children:t.score}),e.jsx("span",{className:"vv",children:e.jsx(qe,{o:t})})]}),e.jsxs("div",{className:"sec2",children:[e.jsxs("div",{className:"k2",children:[ie(t.engine||"")," ",ae(t.engine||"",n)]}),_(t)&&e.jsx("div",{style:{marginTop:8},children:e.jsx(pe,{o:t})})]}),o.pipe&&(t.memoUrl||s)&&e.jsxs("div",{className:"sec2 acts2",children:[t.memoUrl&&e.jsxs("button",{type:"button",className:"btn p",onClick:()=>r({type:"memoConsole",id:t.id}),children:[a.actMemo," →"]}),s&&e.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>d(t),children:a.actOnboard})]})]})]})}function La({o:t,locked:a}){const{t:n,dispatch:r,caps:o,doDecide:s}=S(),d=X(t),c=["#E7EBF0","#E7F3EC","#C4E0D0","#7FC0A0","#0E8A4F","#DC2626"][d];return e.jsxs("div",{className:"dcard"+(a?" locked":""),style:{"--c":c},children:[e.jsxs("div",{className:"dh",children:[typeof t.score=="number"&&e.jsx("span",{className:"dsc",children:t.score}),e.jsx("span",{className:"dnm",title:t.name,children:t.name})]}),e.jsxs("div",{className:"dv",children:[e.jsx(qe,{o:t}),_(t)&&e.jsx(pe,{o:t})]}),e.jsx("div",{className:"dmeta",children:[t.countryLabel,t.stage,t.sector].filter(Boolean).join(" · ").toUpperCase()}),(t.tagline||t.reasoning)&&e.jsx("div",{className:"ddesc",children:t.tagline||t.reasoning}),!a&&o.pipe&&d===3&&e.jsxs("div",{className:"dyn",children:[e.jsx("button",{type:"button",style:{"--c3":"#0A6B3D"},onClick:()=>s(t,!0),children:n.actYes}),e.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>s(t,!1),children:n.actNo})]}),!a&&t.memoUrl&&e.jsxs("button",{type:"button",className:"dmemo",onClick:()=>r({type:"memoConsole",id:t.id}),children:[n.actMemo," →"]})]})}function Ia(){const t=S(),{st:a,dispatch:n,t:r,caps:o,scoped:s,lang:d,sessTally:c}=t,[f,p]=u.useState(new Set);u.useEffect(()=>{p(new Set)},[a.ptab,a.continent]);const x=y=>p(C=>{const T=new Set(C);return T.has(y)?T.delete(y):T.add(y),T}),i=u.useMemo(()=>De(s,a.sort),[s,a.sort]),h=u.useMemo(()=>i.filter(y=>_(y)&&!U(y)).length,[i]),b=o.pipe?r.plabels[a.ptab].toLowerCase():a.filters.status==="retenu"?r.keptByStan:a.filters.status==="ecarte"?r.droppedByStan:r.toSend,g=(y,C,T="",R=!1)=>e.jsxs("button",{type:"button","data-s":y,className:T,"aria-sort":a.sort.key===y?a.sort.dir===1?"ascending":"descending":"none",style:R?{justifyContent:"flex-end"}:void 0,onClick:()=>n({type:"sort",key:y}),children:[C,e.jsx("span",{className:"ar",children:a.sort.key===y&&a.sort.dir===1?"▴":"▾"})]},y),v=u.useMemo(()=>{if(o.pipe||a.groupBy==="none")return null;const y=new Map;return i.forEach(C=>{const T=C.engine||"?";y.has(T)||y.set(T,[]),y.get(T).push(C)}),[...y.entries()]},[i,o.pipe,a.groupBy]),l=o.lockRowsAfter;let w=0;const j=(y,C)=>{const T=a.shown[C]||he,P=y.slice(0,T).map(m=>{const N=l!==null&&w>=l;return w++,a.dens==="maxi"?e.jsx(La,{o:m,locked:N},m.id):e.jsx(Ba,{o:m,locked:N,open:f.has(m.id),onToggle:()=>x(m.id)},m.id)});return y.length>T&&P.push(e.jsx("button",{type:"button",className:"moregrp",onClick:()=>n({type:"more",group:C,by:he}),children:r.more(Math.min(he,y.length-T),y.length-T)},C+":more")),P};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"listhead",children:[e.jsxs("span",{className:"main",children:[e.jsx("b",{children:i.length})," ",b]}),e.jsx("span",{className:"dot",children:"·"}),e.jsxs("span",{className:"ctx",children:[t.contName,o.pipe&&t.fund?" · "+t.fund:""]}),o.showGroupBar&&e.jsxs("span",{className:"groupbar",children:[e.jsx("span",{className:"gl",children:r.groupBy}),e.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>n({type:"groupBy",groupBy:"engine"}),children:r.groupEngine}),e.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>n({type:"groupBy",groupBy:"none"}),children:r.groupNone})]}),a.pileMode&&e.jsx("button",{type:"button",className:"exitpile",onClick:()=>n({type:"pile",on:!1}),children:r.exitPile}),o.showFunnel&&e.jsx("span",{className:"dens",children:[["liste",r.densList],["deplie",r.densOpen],["maxi",r.densMaxi]].map(([y,C])=>e.jsxs("button",{type:"button","data-d":y,"aria-pressed":a.dens===y,onClick:()=>n({type:"dens",dens:y}),children:[e.jsx("i",{children:e.jsx("em",{})}),e.jsx("b",{children:C})]},y))}),o.showChain&&i.length>0&&e.jsxs("button",{type:"button",className:"chain",onClick:()=>n({type:"chainStart",queue:i.filter(y=>o.pipe?!0:!U(y)).map(y=>y.id)}),children:[e.jsx("span",{className:"b",children:"▶"})," ",o.pipe?r.browse(i.length):r.chainAll(i.filter(y=>!U(y)).length)]})]}),h>0&&!a.filters.signalOnly&&e.jsxs("div",{className:"sigstrip",children:[e.jsx("span",{className:"t",dangerouslySetInnerHTML:{__html:r.sigStrip(h)}}),e.jsx("span",{className:"s",children:r.sigStripSub}),e.jsx("button",{type:"button",onClick:()=>n({type:"filters",patch:{signalOnly:!0,signalEngines:[]}}),children:r.sigStripGo})]}),a.dens!=="maxi"&&e.jsxs("div",{className:"cols",children:[e.jsx("span",{}),g("country",r.colCountry),g("name",r.colCompany),g("amount",r.colAmount,"h-amt",!0),g("stage",r.colStage,"h-stade"),g("signal",r.colSignal,"h-sig"),o.pipe&&e.jsx("span",{className:"h-vd",children:r.colVerdict}),o.pipe&&g("score",r.colScore,"h-sc",!0),e.jsx("span",{}),o.showThumbs&&e.jsx("span",{className:"h-thu",children:r.colThumbs})]}),e.jsxs("div",{className:"list"+(a.dens!=="liste"?" "+a.dens:""),children:[v?v.map(([y,C])=>e.jsxs(u.Fragment,{children:[e.jsxs("div",{className:"grp-h",children:[e.jsx("span",{className:"ic",children:ie(y)}),e.jsxs("span",{children:[e.jsx("span",{className:"t",children:ae(y,d)}),e.jsx("div",{className:"s",children:r.grpCount(C.filter(T=>!U(T)).length,C.length)})]})]}),j(C,y)]},y)):j(i,"pt"+a.ptab),!i.length&&e.jsx("div",{className:"void",children:o.pipe?r.emptyTab:r.emptyScope})]}),(c.kept>0||c.dropped>0)&&e.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:r.session(c.kept,c.dropped)}})]})}const Pa=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function _a(t){if(!t||typeof window>"u")return;const a=352,n=430,r=window.innerWidth,o=window.innerHeight,s=Math.min(Math.max(t.x-a/2,8),Math.max(8,r-a-8));let d=t.y+10;return d+n>o-8&&(d=Math.max(8,t.y-n-14)),d<8&&(d=8),{left:s,top:d}}function $a(){const{st:t,dispatch:a,byId:n,t:r,lang:o,caps:s,mode:d,askEvaluate:c,doAnalyse:f,doDecide:p,doPromote:x,doApproach:i,doDeep:h,doOnboard:b,outbound:g,evalBusy:v}=S(),l=t.popupId?n.get(t.popupId):null;if(!l)return null;const w=_(l),j=X(l),y=Te(l),C=l.kind==="target",T=R=>{a({type:"filters",patch:R}),a({type:"popup",id:null})};return ve.createPortal(e.jsxs("div",{className:"atl2",children:[e.jsx("style",{children:Pa}),e.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),e.jsxs("div",{className:"pop on "+(t.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:_a(t.popupAnchor),onClick:R=>R.stopPropagation(),children:[e.jsxs("div",{className:"ph",children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{children:l.name}),e.jsx("span",{className:"id",children:r.detected(r.daysAgo(se(l.date)),ae(l.engine,o))})]}),e.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),e.jsxs("div",{className:"pb",children:[e.jsxs("div",{className:"tags",children:[l.cc&&e.jsx("button",{type:"button",className:"hi",onClick:()=>T({country:[l.cc]}),children:(de(l.cc,o)||l.countryLabel||"").toUpperCase()}),l.sector&&e.jsx("button",{type:"button",onClick:()=>T({sector:[l.sector]}),children:l.sector.toUpperCase()}),l.stage&&e.jsx("button",{type:"button",onClick:()=>T({stage:[l.stage]}),children:l.stage.toUpperCase()}),typeof l.amountEur=="number"&&l.amountEur>0&&e.jsx("span",{className:"am2",children:Fe(l.amountEur,o)})]}),(l.tagline||l.headline)&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:r.desc}),e.jsx("p",{children:l.tagline||l.headline})]}),e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:r.how}),e.jsxs("p",{children:[ie(l.engine)," ",e.jsx("b",{children:ae(l.engine,o)})," — ",Dt(l.engine,o),l.noteTitle&&e.jsxs(e.Fragment,{children:[" · ",l.noteTitle]})]}),w?e.jsxs("p",{className:"psig",style:{marginTop:9},children:[e.jsx(pe,{o:l,lg:!0})," ",e.jsx(ye,{o:l,src:!0}),e.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[r.signaledOn(ot(w,o))," · ",r.win7(lt(w,o))]})]}):e.jsx("p",{className:"pnos",style:{marginTop:5},children:r.noSignal})]}),l.reasoning&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:s.pipe&&j>=1?r.verdictCap:r.memo}),e.jsx("p",{className:"memo",children:l.reasoning})]}),s.pipe&&C&&y&&e.jsx("div",{className:"fld",children:e.jsxs("p",{style:{fontWeight:700},children:[y,typeof l.score=="number"&&l.score>0?" · "+r.score(l.score):""]})})]}),e.jsxs("div",{className:"pf",children:[s.lockActions||d!=="client"&&s.pipe?e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[e.jsx("span",{className:"fill"}),"🔒 ",r.lockbarCta]}):s.pipe?e.jsxs(e.Fragment,{children:[j===0&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:v,onClick:()=>c(l),children:[e.jsx("span",{className:"fill"}),r.evalGo]}),j===1&&e.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{f(l),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),r.actAnalyse]}),j===2&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{x(l),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),r.actPromote]}),j===3&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{p(l,!0),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),r.actYes]}),e.jsx("button",{type:"button",className:"abtn",onClick:()=>{p(l,!1),a({type:"popup",id:null})},children:r.actNo}),Ae(l)&&e.jsx("button",{type:"button",className:"abtn",title:r.memoDeepHint,onClick:()=>{h(l),a({type:"popup",id:null})},children:r.memoDeep})]}),j===4&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{i(l),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),r.actApproach]}),j===5&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{x(l),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),"↩ ",r.statusKeep.replace("✅ ","")]}),l.memoUrl&&e.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:l.id}),a({type:"popup",id:null})},children:"📄"}),g&&e.jsx("button",{type:"button",className:"abtn",title:r.actOnboardTitle,onClick:()=>{b(l),a({type:"popup",id:null})},children:"🚀"})]}):e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:v,onClick:()=>c(l),children:[e.jsx("span",{className:"fill"}),r.evalGo," →"]}),l.website&&e.jsx("a",{className:"psite",href:l.website.startsWith("http")?l.website:"https://"+l.website,target:"_blank",rel:"noopener noreferrer",title:l.website,children:"🌐"})]})]})]}),document.body)}const xe="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function Z({title:t,icon:a,children:n,wide:r}){const{dispatch:o}=S();return ve.createPortal(e.jsx("div",{className:"atl2",children:e.jsx("div",{className:"modal on",onClick:s=>{s.target===s.currentTarget&&o({type:"modal",modal:null})},children:e.jsxs("div",{className:"mcard",style:r?{width:"min(760px,100%)"}:void 0,children:[e.jsxs("div",{className:"mh",children:[a&&e.jsx("span",{className:"no g",children:a}),e.jsx("h2",{children:t}),e.jsx("button",{type:"button",className:"x",onClick:()=>o({type:"modal",modal:null}),children:"×"})]}),e.jsx("div",{className:"mb",children:n})]})})}),document.body)}function Ua(){const{st:t}=S();switch(t.modal){case"chain":return e.jsx(Va,{});case"space":return e.jsx(Ya,{});case"alert":return e.jsx(Wa,{});case"queue":return e.jsx(Qa,{});case"export":return e.jsx(Ja,{});case"plug":return e.jsx(Xa,{});case"recharge":return e.jsx(Za,{});case"cover":return e.jsx(er,{});case"crit":return e.jsx(tr,{});case"tuto":return e.jsx(ar,{});case"rdv":return e.jsx(Ha,{});default:return null}}function Ha(){const{dispatch:t,fund:a}=S(),n=typeof document<"u"&&!!document.getElementById("rdv");return u.useEffect(()=>{n&&(t({type:"modal",modal:null}),ua())},[n,t]),n?null:e.jsx(qt,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0,onClose:()=>t({type:"modal",modal:null})})}function Va(){const{st:t,dispatch:a,byId:n,t:r,lang:o,mode:s,askEvaluate:d,evalBusy:c}=S(),f=s==="client",p=t.chain.queue.map(b=>n.get(b)).filter(b=>!!b),x=t.chain.idx,i=p[x],h=x>=p.length;return ve.createPortal(e.jsx("div",{className:"atl2",children:e.jsx("div",{className:"modal on",children:e.jsxs("div",{className:"fcard",children:[e.jsxs("div",{className:"fh",children:[e.jsx("span",{className:"c",children:h?r.finished:`${x+1} / ${p.length}`}),e.jsx("span",{className:"p",children:e.jsx("i",{style:{width:(h?100:x/Math.max(1,p.length)*100)+"%"}})}),e.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),e.jsx("div",{className:"fb",children:h||!i?e.jsxs("div",{className:"fin",children:[e.jsx("div",{className:"em",children:"🏁"}),e.jsx("div",{className:"t",children:r.chainDone}),e.jsx("div",{className:"s",children:r.chainDoneSub(p.length)})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:i.name}),e.jsx("div",{className:"sub",children:[de(i.cc,o)||i.countryLabel,i.sector,i.stage,r.daysAgo(se(i.date))].filter(Boolean).map(b=>String(b).toUpperCase()).join(" · ")}),e.jsxs("div",{className:"tags",children:[e.jsx("span",{className:"hi",children:ae(i.engine,o).toUpperCase()}),typeof i.amountEur=="number"&&i.amountEur>0&&e.jsx("span",{children:Fe(i.amountEur,o)})]}),_(i)&&e.jsxs("div",{style:{marginBottom:12},children:[e.jsx(pe,{o:i,lg:!0})," ",e.jsx(ye,{o:i,src:!0})]}),(i.tagline||i.headline)&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:r.desc}),e.jsx("p",{children:i.tagline||i.headline})]}),i.reasoning&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:r.memo}),e.jsx("p",{className:"memo",children:i.reasoning})]}),f&&U(i)&&e.jsxs("div",{className:"vbox",style:{"--c":re(i)==="retenu"?"var(--brand)":re(i)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[e.jsx("span",{className:"vt",children:re(i)==="retenu"?"✓ "+r.kept:re(i)==="pending"?"📞 "+r.pending:"✗ "+r.dropped}),e.jsx("span",{className:"vd",children:i.reasoning||""})]})]})}),e.jsxs("div",{className:"ff",children:[!h&&i&&!(f&&U(i))&&e.jsxs("button",{type:"button",className:"evalbtn"+(c?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:c,onClick:()=>{d(i)},children:[e.jsx("span",{className:"fill"}),r.launchEval]}),e.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(h?{type:"modal",modal:null}:{type:"chainNext"}),children:h?r.closeBtn:r.skip})]})]})})}),document.body)}function Ya(){const{st:t,dispatch:a,dossiers:n,t:r,mode:o}=S(),s=o==="client",d=u.useMemo(()=>s?n.filter(i=>U(i)):[],[n,s]),c=u.useMemo(()=>De(d.filter(i=>re(i)==="retenu"),{key:"signal",dir:-1}),[d]),f=u.useMemo(()=>d.filter(i=>re(i)==="ecarte"),[d]),p=t.spaceTab==="retenu"?c:f,x=t.spaceTab==="retenu"?"var(--brand)":"var(--red)";return e.jsxs(Z,{title:r.spaceTitle,children:[e.jsxs("div",{className:"sp-tabs",children:[e.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":t.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",r.statusKeep.replace("✅ ","")," ",e.jsx("b",{children:c.length})]}),e.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":t.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",r.statusDrop.replace("❌ ","")," ",e.jsx("b",{children:f.length})]})]}),p.length===0&&e.jsx("div",{className:"sp-empty",children:r.spEmpty}),p.slice(0,40).map(i=>e.jsxs("div",{className:"sp-row",children:[e.jsx("span",{className:"sc",style:{"--c":x},children:typeof i.score=="number"&&i.score>0?i.score:"—"}),e.jsxs("span",{children:[e.jsx("div",{className:"nm",children:i.name}),e.jsx("div",{className:"rr",children:i.reasoning||i.tagline||""})]})]},i.id)),e.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:r.spNote}})]})}function Wa(){const{mode:t}=S();return t==="client"||t==="apercu"?e.jsx(Ga,{}):e.jsx(Ka,{})}function Ga(){const{t,token:a,flash:n,mode:r}=S(),[o,s]=u.useState(null),d=r!=="client";u.useEffect(()=>{let f=!0;return Ve(a).then(p=>{f&&s(p)}),()=>{f=!1}},[a]);const c=f=>{d||Ve(a,f).then(p=>{p&&(s(p),n(t.alertSaved))})};return e.jsx(Z,{title:t.alertTitle,icon:"🔔",children:o?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"qrow",children:[e.jsxs("span",{children:[e.jsx("b",{children:t.alertDaily}),e.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:t.alertDailyHint})]}),e.jsx("span",{className:"qset",children:e.jsx("button",{type:"button",className:"abtn","aria-pressed":o.enabled===!0,disabled:d,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>c({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),e.jsxs("div",{className:"qrow",children:[e.jsx("span",{children:t.alertHour}),e.jsxs("span",{className:"qset",children:[e.jsx("button",{type:"button",onClick:()=>c({hour:Math.max(6,(o.hour??7)-1)}),disabled:d,children:"−"}),e.jsxs("b",{children:[o.hour??7," h"]}),e.jsx("button",{type:"button",onClick:()=>c({hour:Math.min(21,(o.hour??7)+1)}),disabled:d,children:"＋"})]})]}),e.jsxs("div",{className:"qrow",children:[e.jsx("span",{children:t.alertDays}),e.jsxs("span",{className:"qset",style:{gap:6},children:[e.jsx("button",{type:"button",className:"abtn",disabled:d,style:o.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>c({days:"weekdays"}),children:t.alertWeekdays}),e.jsx("button",{type:"button",className:"abtn",disabled:d,style:o.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>c({days:"daily"}),children:t.alertEveryday})]})]}),o.email_lead&&e.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${t.updatedAt(o.last_sent.slice(0,10))}`:""]})]}):e.jsx("div",{className:"sp-empty",children:"…"})})}function Ka(){const{st:t,t:a,lang:n,scoped:r,contName:o}=S(),[s,d]=u.useState(""),[c,f]=u.useState(!1),[p,x]=u.useState(!1),i=t.filters,h=u.useMemo(()=>r.filter(l=>_(l)).length,[r]),b=i.win==="1"?0:i.win==="7"?1:i.win==="30"?2:3,g=async()=>{if(!(!/.+@.+\..+/.test(s)||p)){x(!0);try{await fetch(`${ze}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.trim(),sectors:i.sector,countries:i.country,source:"atelier2",website:""})}),f(!0)}finally{x(!1)}}},v=[[a.amRows.continent,o],[a.amRows.since,a.amSince[b]],[a.amRows.signal,i.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,i.engine.length?i.engine.map(l=>ae(l,n)).join(", "):a.amAllEngines],[a.amRows.sectors,i.sector.length?i.sector.join(", "):a.amAllSectors],[a.amRows.countries,i.country.length?i.country.map(l=>de(l,n)||l).join(", "):a.amAllCountries],[a.amRows.stages,i.stage.length?i.stage.join(", "):a.amAllStages]];return e.jsx(Z,{title:a.alertTitle,icon:"🔔",children:c?e.jsxs("div",{className:"fin",children:[e.jsx("div",{className:"em",children:"🔔"}),e.jsx("div",{className:"t",children:a.amOk}),e.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(s)}})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"crit",children:v.map(([l,w])=>e.jsxs("div",{className:"r",children:[e.jsx("span",{className:"k",children:l}),e.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:w}})]},l))}),e.jsxs("div",{className:"mfield",children:[e.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:s,onChange:l=>d(l.target.value),onKeyDown:l=>{l.key==="Enter"&&g()}}),e.jsxs("button",{type:"button",className:"evalbtn"+(p?" loading":""),style:{padding:"12px 18px"},onClick:()=>void g(),children:[e.jsx("span",{className:"fill"}),a.amActivate]})]}),e.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(r.length,h)}}),e.jsx("p",{className:"mnote",children:a.amHonest})]})})}function Qa(){var v,l,w;const{t,token:a,fund:n,mode:r,flash:o}=S(),[s,d]=u.useState(null),[c,f]=u.useState([]),[p,x]=u.useState(0),i=r==="client";u.useEffect(()=>{let j=!0;return(async()=>{const[y,C]=await Promise.all([tt(n),at(a)]);j&&(y&&d(y),f(C))})(),()=>{j=!1}},[a,n,p]);const h=(s==null?void 0:s.per_day)??2,b=((v=s==null?void 0:s.analyzed_today)==null?void 0:v.length)??0,g=(l=s==null?void 0:s.tomorrow)!=null&&l.length?s.tomorrow:((s==null?void 0:s.pool_meta)||[]).slice(0,10);return e.jsxs(Z,{title:t.queueTitle,wide:!0,children:[e.jsxs("div",{className:"qbox",children:[e.jsx("div",{className:"qhead",children:e.jsx("b",{dangerouslySetInnerHTML:{__html:t.queueDone(b,b+(((w=s==null?void 0:s.pool_order)==null?void 0:w.length)??0))}})}),e.jsx("div",{className:"qrate",children:t.queueRate}),e.jsx("div",{className:"qrates",children:[1,2,3,5,10].map(j=>e.jsx("button",{type:"button",className:"qr"+(h===j?" on":""),disabled:!i,onClick:()=>{rt(a,j).then(y=>{y!==null&&(x(C=>C+1),o(t.alertSaved))})},children:e.jsxs("b",{children:[j,"/j"]})},j))})]}),c.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"qsec ok",children:["⏳ ",t.queueToday]}),e.jsx("div",{className:"qrows",children:c.map(j=>e.jsxs("div",{className:"qr2",children:[e.jsx("b",{children:j.company}),e.jsxs("span",{className:"qd",children:[j.memo_type,typeof j.est_min=="number"?` · ~${j.est_min} min`:""]}),e.jsx("span",{className:"qt",children:j.status}),j.url&&e.jsx("a",{className:"qgo",href:j.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:t.actMemo}),i&&j.status==="error"&&e.jsx("button",{type:"button",className:"qgo an",onClick:()=>{He(a,j.company,"retry").then(()=>x(y=>y+1))},children:t.queueRetry}),i&&j.status!=="done"&&e.jsx("button",{type:"button",className:"abtn",onClick:()=>{He(a,j.company,"delete").then(()=>x(y=>y+1))},children:t.queueDelete})]},j.company))})]}),e.jsxs("div",{className:"qsec todo",children:["⚡ ",t.queueTomorrow]}),e.jsxs("div",{className:"qrows",children:[g.length===0&&e.jsx("div",{className:"sp-empty",children:t.queueEmpty}),g.slice(0,10).map((j,y)=>e.jsxs("div",{className:"qr2",children:[e.jsxs("span",{className:"qn2",children:["#",y+1]}),e.jsx("b",{children:j.name}),typeof j.score=="number"&&e.jsx("span",{className:"qs2",children:j.score})]},j.name))]})]})}function Ja(){const{t,token:a,flash:n}=S(),r=`${xe}/cibles/list.csv?token=${a}`,o=`${xe}/cibles/list.json?token=${a}`,s=`${xe}/cibles/export.xlsx?token=${a}&scope=full`,d=`=IMPORTDATA("${r}")`,c=p=>{var x;(x=navigator.clipboard)==null||x.writeText(p).then(()=>n(t.exportCopied))},f=[{def:t.exportCsv,value:r,href:r},{def:t.exportSheet,value:d},{def:t.exportLive,value:o,href:o},{def:t.exportXlsx,value:s,href:s}];return e.jsxs(Z,{title:t.exportTitle,icon:"📥",children:[e.jsx("p",{className:"lead2",children:t.exportLead}),e.jsx("div",{className:"expl",children:f.map(({def:p,value:x,href:i})=>e.jsxs("div",{className:"exi",children:[e.jsx("span",{className:"exic",children:p[0]}),e.jsxs("div",{children:[e.jsx("b",{children:p[1]}),e.jsx("p",{children:p[2]})]}),e.jsx("button",{type:"button",className:"exb",onClick:()=>c(x),children:t.exportCopy}),i&&e.jsx("a",{className:"exb",href:i,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:t.exportOpen})]},p[1]))}),e.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:t.exportKeyWarning})]})}function Xa(){const{t,token:a,flash:n,mode:r}=S(),[o,s]=u.useState(null),[d,c]=u.useState(""),f=r==="client";u.useEffect(()=>{let i=!0;return Ue(a).then(h=>{i&&h&&s(h)}),()=>{i=!1}},[a]);const p=(i,h)=>{f&&Ue(a,i).then(b=>{b&&b.ok!==!1&&(n(h),s({configured:!i.remove&&(i.url?!0:o==null?void 0:o.configured),url_hint:b.url_hint}))})},x='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}';return e.jsxs(Z,{title:t.plugTitle,icon:"🔌",children:[e.jsxs("div",{className:"rule",children:[e.jsx("b",{children:t.plugWebhook}),e.jsxs("p",{children:[t.plugWebhookHint,o!=null&&o.configured?` — ${t.plugConfigured}${o.url_hint?` (${o.url_hint})`:""}`:""]}),e.jsxs("div",{className:"mfield",style:{marginTop:10},children:[e.jsx("input",{placeholder:"https://…",value:d,onChange:i=>c(i.target.value),disabled:!f}),e.jsx("button",{type:"button",className:"abtn p",disabled:!f||!d.trim(),onClick:()=>p({url:d.trim()},t.alertSaved),children:t.plugSave}),e.jsx("button",{type:"button",className:"abtn",disabled:!f||!(o!=null&&o.configured),onClick:()=>p({test:!0},t.plugTest+" ✓"),children:t.plugTest}),e.jsx("button",{type:"button",className:"abtn",disabled:!f||!(o!=null&&o.configured),onClick:()=>p({remove:!0},t.plugRemove+" ✓"),children:t.plugRemove})]})]}),e.jsxs("div",{className:"rule",children:[e.jsx("b",{children:t.plugMcp}),e.jsx("p",{children:t.plugMcpHint}),e.jsxs("div",{className:"mfield",style:{marginTop:10},children:[e.jsx("input",{readOnly:!0,value:x}),e.jsx("button",{type:"button",className:"abtn",onClick:()=>{var i;(i=navigator.clipboard)==null||i.writeText(x).then(()=>n(t.exportCopied))},children:t.exportCopy})]})]})]})}function Za(){const{t,data:a,lang:n}=S(),r=a.credits,o=a.email,s=async d=>{if(!o)return;const c=window.location.href.split("?")[0];try{const p=await(await fetch(`${ze}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,lookup_key:d,success_url:c+"?credits=ok",cancel_url:c+"?credits=cancel"})})).json();p.url&&(window.location.href=p.url)}catch{}};return e.jsxs(Z,{title:t.rechargeTitle,icon:"⚡",children:[r&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:t.rechargeHint(r.daily_grant)}}),r.costs&&e.jsxs("p",{className:"mnote",children:["① ",t.creditsCost(r.costs.instant)," · ② ",t.creditsCost(r.costs.detailed)]}),e.jsx("div",{className:"packs",children:(r.packs||[]).map(d=>e.jsxs("div",{className:"pack",children:[e.jsx("div",{className:"pt",children:t.rechargeUnit(d.credits,d.price_eur)}),e.jsx("button",{type:"button",onClick:()=>{s(d.lookup_key)},children:t.rechargeBuy})]},d.lookup_key))}),e.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:t.rechargeNote})]}),!r&&e.jsx("div",{className:"sp-empty",children:t.creditsNone})]})}function er(){const{t,data:a,dossiers:n}=S(),r=n.filter(s=>s.kind==="target"&&U(s)).length,o=a.marketEstimate||0;return e.jsx(Z,{title:t.coverTitle,icon:"🌍",children:o>0?e.jsx("p",{dangerouslySetInnerHTML:{__html:t.coverBody(r,o)}}):e.jsx("p",{children:t.coverScreened(r)})})}function tr(){const{t,dossiers:a,token:n,mode:r,flash:o}=S(),s=r==="client",d=u.useMemo(()=>{const l=new Set;return a.forEach(w=>{w.angle&&l.add(w.angle)}),[...l]},[a]),[c,f]=u.useState(null);u.useEffect(()=>{let l=!0;return Bt(n).then(w=>{l&&f(w.thumbs)}),()=>{l=!1}},[n]);const[p,x]=u.useState(""),[i,h]=u.useState(""),[b,g]=u.useState(!1),v=async()=>{const l=p.trim();if(!(!l||b||!s)){g(!0),h("");try{const j=await(await fetch(`${xe}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,message:l,who:"atelier2"})})).json().catch(()=>({}));if(j.reply&&h(String(j.reply)),j.job_id){h(t.critChatRunning);const y=async()=>{const C=await fetch(`${xe}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:j.job_id})}).then(T=>T.json()).catch(()=>null);if(C&&C.done){h(String(C.reply||C.clarification||C.summary||"✓")),g(!1),C.applied&&o(t.alertSaved);return}setTimeout(()=>{y()},8e3)};setTimeout(()=>{y()},8e3),x("");return}x("")}finally{i.startsWith("⏳")||g(!1)}}};return e.jsxs(Z,{title:t.critTitle,icon:"⚙",wide:!0,children:[d.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"qsec ok",children:t.critAngles}),e.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:d.map(l=>e.jsx("li",{style:{marginBottom:5},children:l.replace(/[_-]+/g," ")},l))})]}),e.jsxs("div",{className:"rule",children:[e.jsx("b",{children:t.critChatTitle}),e.jsx("p",{children:t.critChatHint}),e.jsxs("div",{className:"mfield",style:{marginTop:10},children:[e.jsx("input",{placeholder:t.critChatPh,value:p,disabled:!s||b,onChange:l=>x(l.target.value),onKeyDown:l=>{l.key==="Enter"&&v()}}),e.jsxs("button",{type:"button",className:"evalbtn"+(b?" loading":""),style:{padding:"12px 18px"},disabled:!s||b||!p.trim(),onClick:()=>void v(),children:[e.jsx("span",{className:"fill"}),t.critChatSend]})]}),i&&e.jsx("p",{className:"mnote",style:{marginTop:10},children:i})]}),e.jsx("div",{className:"qsec ok",children:t.critThumbsTitle}),c===null?e.jsx("div",{className:"sp-empty",children:"…"}):c.length===0?e.jsx("p",{className:"mnote",children:t.critThumbsEmpty}):e.jsx("div",{className:"qrows",style:{marginBottom:14},children:c.slice(0,12).map((l,w)=>e.jsxs("div",{className:"qr2",children:[e.jsx("span",{className:"qn2",children:l.kind==="YES"?"👍":"👎"}),e.jsx("b",{children:l.company}),e.jsx("span",{className:"qd",children:(l.ts||"").slice(0,10)})]},w))}),e.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:t.critVerdicts}}),e.jsx("p",{className:"mnote",children:t.critMemoKinds})]})}function ar(){const{t}=S();return e.jsx(Z,{title:t.tutoTitle,icon:"▶",children:e.jsx("ol",{className:"steps2",children:t.tutoSteps.map(([a,n],r)=>e.jsxs("li",{children:[e.jsx("b",{children:a}),e.jsx("span",{children:n})]},r))})})}const pt=u.createContext(null),S=()=>{const t=u.useContext(pt);if(!t)throw new Error("AtelierV2Ctx manquant");return t};function pe({o:t,lg:a}){const{lang:n}=S(),r=_(t);return r?e.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:Ye(r,n),children:[r.emoji," ",Ye(r,n)]}):null}function ye({o:t,src:a}){const{lang:n,t:r}=S(),o=_(t);if(!o)return null;const s=Pt(o),d=_t(o);return e.jsxs("em",{className:"sigwin"+(d?" hot":""),title:r.signaledOn(ot(o,n))+" · "+r.win7(lt(o,n)),children:[e.jsx("span",{className:"gg",children:Array.from({length:7},(c,f)=>e.jsx("i",{className:f<s?"on":""},f))}),e.jsx("span",{className:"lb",children:d?r.lastDay:r.daysLeft(Math.max(0,o.left??0))}),a&&o.url&&e.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",title:r.seeSource,onClick:c=>c.stopPropagation(),children:"↗"})]})}function ct({o:t}){const{lang:a}=S(),n=It(t.cc),r=t.cc?de(t.cc,a)||t.countryLabel||t.cc:t.countryLabel||"—";return e.jsx("span",{className:"c-flag",title:r||void 0,children:n?e.jsx("img",{src:n,width:24,height:18,alt:r||""}):e.jsx("span",{className:"em",children:"🌐"})})}const Ze="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap";function lr({demo:t=!1,source:a="default",initialFilters:n,initialUi:r,capsOverride:o,onFiltersChange:s}){const{lang:d}=Ot(),c=Kt[d],f=la(t,d,a),[p,x]=u.useReducer(sa,void 0,()=>ia((r==null?void 0:r.continent)??"europe",t,{ptab:r==null?void 0:r.ptab,dens:r==null?void 0:r.dens,filters:n,modal:r==null?void 0:r.modal})),i=u.useRef(s);i.current=s,u.useEffect(()=>{var k;(k=i.current)==null||k.call(i,p.filters)},[p.filters]);const[h,b]=u.useState(null),[g,v]=u.useState(null),[l,w]=u.useState({kept:0,dropped:0}),[j,y]=u.useState(!1),[C,T]=u.useState(""),[,R]=u.useState(0),P=()=>R(k=>k+1),m=u.useRef([]),N=u.useRef(new Set),A=u.useRef(new Set),F=u.useRef(null),{mode:D}=f,q=u.useMemo(()=>o?{...f.caps,...o}:f.caps,[f.caps,o]),z=q.pipe,M=f.session.token||"",E=D==="client"&&!t;u.useEffect(()=>{if(document.querySelector(`link[href="${Ze}"]`))return;const k=document.createElement("link");k.rel="stylesheet",k.href=Ze,document.head.appendChild(k)},[]);const B=k=>{T(k),F.current&&clearTimeout(F.current),F.current=setTimeout(()=>T(""),2400)},I=u.useMemo(()=>{const k=new Map;return f.dossiers.forEach(O=>{O.id&&k.set(O.id,O)}),k},[f.dossiers]),Y=u.useMemo(()=>f.dossiers.filter(k=>st(k,p,z)),[f.dossiers,p,z]),ee=u.useMemo(()=>f.dossiers.filter(k=>da(k,p,z,f.favIds)),[f.dossiers,p,z,f.favIds]),K=u.useMemo(()=>Rt(Y,f.favIds),[Y,f.favIds]),W=Ee.find(k=>k.key===p.continent),H=d==="fr"?W.fr:W.en,L=(k,O)=>{const V=((k==null?void 0:k.name)||O||"").trim();if(!E){v({kicker:V});return}!V||j||(y(!0),(async()=>{try{const J=await nt(M,V,"atelier2"),bt={name:J.company||V,verdict:J.verdict,reason:J.reason||"",remaining:J.remaining??null};m.current=[bt,...m.current].slice(0,8),J.verdict==="kept"&&w(ne=>({...ne,kept:ne.kept+1})),J.verdict==="ruled_out"&&w(ne=>({...ne,dropped:ne.dropped+1}));const ue=k||f.dossiers.find(ne=>(ne.name||"").toLowerCase()===V.toLowerCase());ue&&(J.verdict==="kept"?ue.verdict=ue.verdict||"MATCH":J.verdict==="ruled_out"&&(ue.verdict="NO MATCH"),J.reason&&(ue.reasoning=J.reason)),P()}finally{y(!1)}})())},te=k=>{if(!E){v({kicker:k.name});return}N.current.add(k.id),ge(M,"fast_request",k.name||"",""),B(c.memoInstantSent(k.name)),P()},Q=k=>x({type:"undoPush",entry:{id:k.id,name:k.name,prevCeoStatus:k.ceoStatus||""}}),ce=(k,O)=>{E&&(Q(k),je(M,{status:O?"Validé":"Écarté",airtable_id:k.airtableId,check_id:k.checkId,company:k.name}),k.ceoStatus=O?"Validé":"Écarté",P())},fe=k=>{E&&(Q(k),je(M,{status:"À trancher",airtable_id:k.airtableId,check_id:k.checkId,company:k.name}),k.ceoStatus="À trancher",B(c.promoted(k.name)),P())},le=()=>{const k=p.undo[p.undo.length-1];if(!k){B(c.undoNone);return}const O=I.get(k.id);if(x({type:"undoPop"}),!O){B(c.undoNone);return}let V=k.prevCeoStatus;if(!V)if((O.verdict||"").toUpperCase().includes("CALL"))V="À trancher";else{B(c.undoLockedTitle);return}je(M,{status:V,airtable_id:O.airtableId,check_id:O.checkId,company:O.name}),O.ceoStatus=k.prevCeoStatus,B(c.undoDone(O.name)),P()},G=k=>{E&&(A.current.add(k.id),P(),(async()=>{const O=await $t(M,k.name,"email");B(O&&O.ok!==!1?c.actApproachSent:c.loadError)})())},$=(k,O)=>{E&&(ge(M,O?"yes":"no",k.name||"",""),B(O?c.thumbUpDone:c.thumbDnDone))},ft=k=>{!E||!Ae(k)||(ge(M,"detailed_request",k.name||"",""),B(c.memoDeepSent(k.name)))},ut=k=>{const O=new Set(f.favIds),V=O.has(k.id);V?O.delete(k.id):O.add(k.id),f.setFavIds(O),E&&Ut(M,{id:k.id,co:k.name},V)},xt=()=>{E&&(Ht(M),B(c.identSyncDone))},Be=/proplace/i.test(f.fund||""),mt=k=>{!E||!Be||(ge(M,"onboard_request",k.name||"",""),B(c.onboardSent(k.name)))},gt={st:p,dispatch:x,t:c,lang:d,mode:D,caps:q,pipe:z,token:M,fund:f.fund,email:f.email,data:f,dossiers:f.dossiers,scopedAll:Y,scoped:ee,counts:K,byId:I,contName:H,favIds:f.favIds,toggleFav:ut,askEvaluate:L,doAnalyse:te,doDecide:ce,doPromote:fe,doApproach:G,doThumb:$,doDeep:ft,doUndo:le,doSync:xt,doOnboard:mt,outbound:Be,memoQueued:N.current,approachDone:A.current,sessTally:l,evalCards:m.current,evalBusy:j,markRow:b,markedId:h,flash:B};return u.useEffect(()=>{const k=O=>{O.key==="Escape"&&(x({type:"popup",id:null}),x({type:"modal",modal:null}),x({type:"openFacet",facet:null}))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[]),e.jsx(pt.Provider,{value:gt,children:e.jsxs("div",{className:"atl2",children:[e.jsx("style",{children:Xt}),e.jsxs("div",{className:"app"+(z?" pipe":""),children:[q.showTicker&&e.jsx(pa,{}),q.showIdent&&e.jsx(ha,{}),q.showOnb&&e.jsx(va,{}),e.jsx(ba,{}),q.showFunnel&&e.jsx(wa,{}),q.showFunnel&&e.jsx(ja,{}),e.jsxs("div",{className:"fzone",children:[e.jsx(rr,{}),e.jsxs("div",{className:"stage"+(p.mapFolded?" folded":""),id:"atl2-stage",children:[e.jsx(Ca,{}),e.jsx(za,{})]})]}),q.showDemand&&e.jsx(Ea,{}),q.showDemand&&p.memoConsole&&e.jsx(Aa,{}),e.jsx(Ia,{}),f.loading&&e.jsx("div",{className:"void",children:c.loadingV2}),f.error&&!f.loading&&e.jsxs("div",{className:"void",children:[c.loadError," ",e.jsx("button",{type:"button",className:"abtn",onClick:f.refresh,children:c.retry})]})]}),q.showOnb&&e.jsxs("div",{className:"lockbar on",children:[e.jsx("b",{children:c.lockbarText}),e.jsx("button",{type:"button",onClick:()=>x({type:"modal",modal:"rdv"}),children:c.lockbarCta})]}),p.popupId&&e.jsx($a,{}),e.jsx(Ua,{}),e.jsx(ma,{}),C&&e.jsx("div",{className:"flash on",children:C}),g&&e.jsx(Lt,{variant:"acquirer",initialCompany:et().co,initialWebsite:et().site,onClose:()=>v(null)})]})})}function rr(){const{dossiers:t,st:a,dispatch:n,pipe:r,lang:o,t:s}=S(),d=u.useMemo(()=>{const c={};return t.forEach(f=>{f.continent&&Me(f,a.filters,r)&&(c[f.continent]=(c[f.continent]||0)+1)}),c},[t,a.filters,r]);return e.jsxs("div",{className:"conts",children:[Vt.map(c=>{const f=Ee.find(p=>p.key===c);return e.jsxs("button",{type:"button",className:"cbtn","aria-selected":a.continent===c,onClick:()=>n({type:"continent",key:c}),children:[o==="fr"?f.fr:f.en,e.jsx("span",{className:"n",children:d[c]||0})]},c)}),e.jsx("span",{className:"side",children:e.jsx("button",{type:"button",onClick:()=>n({type:"mapFold",folded:!a.mapFolded}),children:a.mapFolded?s.showMap:s.hideMap})})]})}function et(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function nr(t){return t>=1e9?(t/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":t>=1e6?Math.round(t/1e6)+" M€":Math.round(t/1e3)+" k€"}export{ct as FlagCell,pe as SigBadge,ye as SigWin,lr as default,nr as fmtShort,S as useV2};
