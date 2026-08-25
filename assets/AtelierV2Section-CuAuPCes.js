var go=Object.defineProperty;var bo=(e,a,r)=>a in e?go(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var En=(e,a,r)=>bo(e,typeof a!="symbol"?a+"":a,r);import{r as m,u as vo,a as yo,b as wo,R as ea,L as ko,j as t,C as Cn,c as jo,d as No,l as Ma,o as pa,i as Sr,g as So,e as Eo,f as Co,h as zn,k as zo,m as An,n as Tn,p as Ln,q as Ao,s as To,t as Lo,v as qo,w as Mo,S as pn,x as Ro,y as Fo,z as qe,A as un,B as ct,D as bt,E as Oo,F as Po,G as Do,H as ze,N as Io,I as Bo,J as $o,K as Ie,M as _o,O as Uo,P as qn,Q as Ho,T as ut,U as Vo,V as qt,W as mn,X as Er,Y as Wo,Z as Ua,_ as Ha,$ as Yo,a0 as Go,a1 as Ko,a2 as fn,a3 as Mn,a4 as Rn,a5 as Mt,a6 as Va,a7 as vt,a8 as Ue,a9 as Qo,aa as Jo,ab as Fn,ac as Cr,ad as Xo,ae as Zo,af as zr,ag as ei,ah as Ar,ai as ti,aj as ai,ak as zt,al as ni,am as Qt,an as ri,ao as Rt,ap as oi,aq as xn,ar as xa,as as On,at as ii,au as si,av as li,aw as di,ax as Wa,ay as ci,az as pi,aA as ui,aB as Pn,aC as mi,aD as fi,aE as xi,aF as hi,aG as Ya,aH as gi,aI as Dn,aJ as bi,aK as vi,aL as yi,aM as In,aN as wi,aO as ki,aP as Bn,aQ as ji,aR as Ni,aS as Si,aT as Ei,aU as Ci,aV as zi,aW as Ai,aX as Ti,aY as Li,aZ as qi,a_ as Pt,a$ as Ra,b0 as Mi,b1 as Ri,b2 as Fi}from"./index-DpLRcQRe.js";const Oi=({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:i,onInit:o,onPageChange:l,onSubmit:d})=>{const[c,f]=m.useState(!0),s=vo({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:i});yo(s,{onInit:o,onPageChange:l,onSubmit:d});const[x,u]=m.useState();return wo(s,"form_resized",h=>{const p=h.size;typeof p=="number"&&u(p)},{disabled:!i}),ea.createElement("div",{className:"fillout-standard-embed",style:{height:i?typeof x=="number"?x:256:"100%",transition:i?"height 150ms ease":void 0}},c&&ea.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},ea.createElement(ko,null)),s&&ea.createElement("iframe",{src:s.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>f(!1),style:{width:c?0:"100%",height:c?0:"100%",opacity:c?0:1,borderRadius:10,border:0,minHeight:256}}))};function Re(e){return(e||"").trim().toLowerCase()}function Pi(e,a){const r=Math.max(60,a*60);return Math.max(2,Math.min(97,Math.round(e/r*100)))}function Di(e){const a=Math.max(0,Math.floor(e)),r=Math.floor(a/60),n=a%60;return r+":"+String(n).padStart(2,"0")}function Ii(e){const a=new Date(e);return String(a.getHours()).padStart(2,"0")+":"+String(a.getMinutes()).padStart(2,"0")}function Ht({item:e,serverOff:a,bootLbl:r,endLabel:n}){const[i,o]=m.useState(()=>Date.now()/1e3);if(m.useEffect(()=>{const x=window.setInterval(()=>o(Date.now()/1e3),1e3);return()=>window.clearInterval(x)},[]),e.status==="boot"||!(e.started>0))return t.jsxs("span",{className:"runtrack boot",children:[t.jsx("span",{className:"runchrono",children:r}),t.jsx("span",{className:"runbar",children:t.jsx("i",{className:"ind"})})]});if(e.status==="error")return t.jsx("span",{className:"runerr",children:e.error||"erreur"});if(e.status==="done")return t.jsx("span",{className:"rundone",children:"✓"});const l=i-a-e.started,d=e.estMin||15,c=d*60-l,f=Pi(l,d),s=c>0&&n?" · "+n.replace("{t}",Ii((e.started+d*60+a)*1e3)):"";return t.jsxs("span",{className:"runtrack",children:[t.jsx("span",{className:"runchrono",children:"⏱ "+Di(l)+" · "+f+"%"+(c>0?" · ~"+Math.ceil(c/60)+" min":" · …")+s}),t.jsx("span",{className:"runbar",children:t.jsx("i",{style:{width:f+"%"}})})]})}function Bi({items:e,serverOff:a,labels:r,onOpen:n}){const i=e.filter(o=>o.status!=="done"||Date.now()/1e3-(o.started||0)<1200);return i.length?t.jsxs("div",{className:"livestrip",role:"button",onClick:n,title:r.open,children:[t.jsx("span",{className:"ls-ico",children:"⚡"}),t.jsx("span",{className:"ls-lab",children:r.strip}),i.slice(0,6).map(o=>t.jsxs("span",{className:"ls-chip"+(o.status==="error"?" err":o.status==="done"?" done":""),children:[t.jsx("b",{children:o.name}),o.status==="done"&&o.url?t.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:l=>l.stopPropagation(),children:r.memo}):t.jsx(Ht,{item:o,serverOff:a,bootLbl:r.boot,endLabel:r.end})]},o.name)),i.length>6&&t.jsxs("span",{className:"ls-more",children:["+",i.length-6]}),t.jsxs("span",{className:"ls-go",children:[r.open," →"]})]}):null}const $i={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Tout ce que STAN a passé au crible sur la fenêtre : chaque société évaluée selon vos critères, retenue ou écartée automatiquement.","STAN a retenu ces sociétés selon vos critères, décision justifiée. NOUS vérifions ses choix — écartez, validez, ou lancez une analyse sur les incertaines.","Les mémos de STAN, relus par NOUS : synergies chiffrées, verdict argumenté. Validez celles à contacter, mettez « à trancher » celles où vous hésitez.","À VOUS de jouer : les meilleures cibles, présentées le lundi par votre Corporate Developer. Tranchez OUI ou NON — vos oui passent en Validées.","Vos OUI — la short-list à contacter. NOUS préparons l’approche, ou l’engageons en votre nom (offre Entreprise).","Écartées par STAN ou par VOUS. Chaque NON affine les critères de Stan. Repêchez-en une à tout moment.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(e,a,r)=>`<b>${e} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${r} sans réponse.</b>`,morningThesis:(e,a,r)=>`Ce matin, <b>${e}</b> société${e===1?"":"s"} criblée${e===1?"":"s"} par vos moteurs`+(typeof r=="number"?`, <b>${r}</b> retenue${r===1?"":"s"}.`:".")+(a?` <b>${a}</b> attend${a>1?"ent":""} votre évaluation.`:' <span class="ok">Tout est évalué.</span>'),morningEnginesTitle:"Ces sociétés viennent UNIQUEMENT du sourcing de votre thèse : vos codes d’activité, vos pays, vos angles d’acquisition, vos critères d’exclusion. Aucune société d’un autre fonds n’entre ici. Seule la veille d’actualité part d’un ratissage commun pour des raisons de coût — mais chaque opération qui en sort est ensuite confrontée à vos critères, et n’entre dans votre page que si elle les passe.",morningLast:(e,a,r)=>`Dernier passage des moteurs le <b>${r}</b> : <b>${e}</b> société${e===1?"":"s"} sourcée${e===1?"":"s"}.`+(a?` <b>${a}</b> restante${a>1?"s":""} pas encore évaluée${a>1?"s":""}.`:' <span class="ok">Tout est évalué.</span>'),morningEval:e=>`▶ Les traiter (${e})`,identTitle:e=>`Cibles pour ${e}`,identCoverage:"COUVERTURE DU MARCHÉ",identCoverageOf:(e,a)=>`<b>${e}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"MOTEUR DE MÉMOS",identPerDay:"mémo/jour",identPending:e=>`→ ${e} en attente`,identPendingWait:"→ lecture de la file…",identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Inverser l’ordre de tri",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:e=>`Décision annulée sur ${e}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ OUI",actNo:"✗ NON",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:e=>`${e} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"CRIBLE · MÉMO",colCrible:"CRIBLE",colMemo:"MÉMO",colScore:"SCORE",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:e=>`Depuis le verdict de Stan : ${e} j`,waitChip:e=>`⏱ ${e} j`,densList:"LISTE",densOpen:"DÉPLIÉ",densLigne:"LIGNE",densMaxi:"MAXI",unfoldAll:"Tout déplier",foldAllLbl:"Tout replier",foldArts:"Articles",zoomSrc:"Source",viewLink:"Voir l’article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Site web de la société",viewSiteBusyHint:"Recherche du site web…",viewSrcHint:"Article source",viewLinkClose:"Fermer l’article",viewLinkTab:"Ouvrir dans un onglet",viewLinkHint:"S’ouvre dans une nouvelle fenêtre",zoomSimilar:"Voir les similaires",zoomInCockpit:"Isoler dans la liste",zoomArt:"Edito du jour",zoomEvalHint:"Crible selon vos critères",zoomSimilarHint:"Même secteur dans la liste",zoomIsolateHint:"Ne garder que cette société",zoomNewsMark:"Décryptage de l’édition — le texte s’ouvre à droite",zoomPulseEval:"évaluables",zoomPulseExplore:"à explorer",zoomPulseArts:"actualités",doNews:"📰 Actualités",zoomPulseEd:"dans l’article du jour",zoomPulseBtn:"Édition du jour",zoomPulseWeek:"7 derniers jours",zoomPulseWeekEd:"cette semaine",doAll:"Tout",doEdito:"📖 Edito du jour",doEval:"⚡ Évaluables",doExplore:"🔎 À explorer",doTodo:"⚡ À évaluer",doDone:"✓ Déjà évaluées",cdMemoTab:"📖 Mémo",evalPickSite:"plusieurs sites portent ce nom — ouvrez pour vérifier, puis validez celui qui est le bon.",evalPickGo:"✓ C’est celui-ci",chainMemoGo:"⚡ Lancer le mémo (1 crédit)",analyseConfirm:e=>`Lancer ${e} mémo${e>1?"s":""} d’analyse ?

Cela consomme ${e} crédit${e>1?"s":""} mémo. Les sociétés partiront en « Analysées » ou « À trancher » une fois le mémo prêt.`,sortBy:"Trier par",sortSig:"Signal",sortAmount:"Montant",sortAge:"Récence",sortName:"Nom",sortCountry:"Pays",sortStage:"Stade",sortCrible:"Crible",sortMemo:"Mémo",sortScore:"Score",fMenu:"Filtres",memoSynth:"SYNTHÈSE",memoOpenFull:"📖 Lire le mémo complet →",memoDeep:"⚡ Mémo détaillé",memoDeepHint:"Pour ce dossier à trancher, vous pouvez lancer l’analyse détaillée : étude de marché, quadrant concurrentiel, scénarios.",memoDeepSent:e=>`Mémo détaillé lancé sur ${e} — prêt dans 35 à 40 minutes`,memoInstantSent:e=>`Analyse lancée sur ${e} — mémo prêt dans ~15 minutes`,liveStrip:"Analyses en direct",liveBoot:"lancement…",liveEnd:"fin {t}",liveOpenQueue:"Voir la file",memoNone:"Aucun mémo pour ce dossier — lancez l’analyse.",creditsCap:"CRÉDITS MÉMO",creditsToday:"aujourd’hui",creditsRecharge:"Recharger →",creditsCost:e=>`−${e} crédit${e>1?"s":""}`,creditsNone:"Crédit épuisé — rechargez ou attendez demain 7 h.",rechargeTitle:"Crédits mémo",rechargeHint:e=>`Votre offre comprend <b>${e} crédits par jour</b>, rechargés chaque matin. Besoin de plus tout de suite ?`,rechargeNote:"Les crédits achetés n’expirent pas. Ils s’utilisent après vos crédits quotidiens.",rechargeBuy:"Ajouter",rechargeUnit:(e,a)=>`${e} crédits — ${a} €`,onbTag:"APERÇU PRIVÉ · LECTURE SEULE",onbTitle:e=>`Votre deal flow est prêt — <b>${e} cibles retenues</b> par Stan`,onbSub:e=>`${e} sociétés passées au crible sur votre thèse. Les dix premières lignes sont ouvertes ; le reste se débloque en trente minutes.`,onbSteps:[["Stan a étudié votre présence en ligne","Site, offres d’emploi, presse — il en a déduit vos angles d’acquisition."],["Il a criblé le marché","Chaque société confrontée à vos critères."],["Il a rédigé des mémos","Analyses chiffrées, synergies, verdicts."],["À vous de trancher","Trente minutes pour régler votre deal flow et tout débloquer."]],onbCta:"Choisir un créneau →",lockbarText:"Paramétrons votre deal flow rêvé en 30 minutes, avec un Corporate Developer",lockbarContactBefore:"Alexandre — ",lockbarContactMid:" · ",lockbarCta:"Choisir un créneau",rdvHeading:"Paramétrons votre deal flow rêvé en 30 minutes",rdvSubBefore:"Choisissez un créneau ci-dessous, ou contactez votre expert Corporate Development directement au ",rdvSubMid:" ou par email à ",rdvCoFallback:"votre société",rdvUnlockLabel:e=>`Déblocage ${e}`,rdvUnlocks:e=>[["Accédez à toutes vos cibles retenues","Mémos d’investissement complets, synergies, contacts, angle d’approche."],["Stratégie d’acquisition construite avec vous","Hypothèse + stratégie d’acquisition recalibrées en live, avec vous."],["Tranchons ensemble les cibles que vous voulez","OUI / NON, sourcing de sociétés similaires, export et synchronisation CRM."],["Votre AI Corporate Developer est lancé",`Stan travaille pour ${e} chaque matin — vous n’avez plus qu’à décider.`]],identRepub:"Republier la page maintenant — re-rend la page avec ce qui est déjà connu. Gratuit : aucun moteur ne repart, aucun modèle n’est appelé si votre thèse n’a pas changé.",identRepubDone:"Republication lancée — vos chiffres se rafraîchissent en une trentaine de secondes. Actualisez la page pour les voir.",plugHow1:"Dans votre outil (Make, Zapier, n8n, HubSpot, Pipedrive…), créez un déclencheur « webhook » et copiez l’URL qu’il vous donne.",plugHow2:"Collez-la ci-dessous, Enregistrez, puis Testez : un message d’exemple part aussitôt dans votre outil.",plugHow3:"C’est fini. Trois moments déclenchent un envoi : vous validez une cible, vous la faites avancer d’un stade, ou une approche est préparée.",plugExT:"Ce que votre outil reçoit, exactement",plugExResult:"Dans votre CRM, vous obtenez une ligne par société validée : son nom, votre note, le score de Stan, son site et le lien du mémo.",plugApiT:"Une seule société, depuis un script ou Make",plugQuota:"Ce raccourci est plafonné à 10 sociétés par jour et par lien — le chemin normal reste la barre d’évaluation de la page.",plugFeeds:"Les flux JSON, CSV, Google Sheets et Excel vivent dans le bouton 📥 Exporter, juste à côté — ils ne sont pas répétés ici.",plugTokenNote:"⚠️ Ces liens portent la clé d’accès de cette page : partout où vous les collez, ils ouvrent vos cibles. Ne les mettez que dans vos propres outils.",plugDoc:"Documentation complète → proplace.co/api/",csNone:"Statut",csAnaNeedMemo:"Pour passer en « Analysée », il faut un mémo.",csAnaRun:"⚡ Lancer le mémo (1 crédit)",csAnaAnyway:"Marquer quand même",qOffer:"VOTRE OFFRE",qDelay:"délai de verdict",qRate:e=>`${e} mémo${e>1?"s":""} par jour`,qManual:e=>`${e} mémo par jour, à votre demande`,qPaused:"aucun mémo automatique",qManualSet:"rythme réglé à la main",qEta:(e,a,r)=>`À ce rythme (${a}/jour), il reste ${e} mémo${e>1?"s":""} à écrire — toute la file est traitée en ${r} jour${r>1?"s":""}.`,qEtaPaused:"Rythme à zéro : rien ne part. Activez une offre pour projeter une date.",qEtaDone:"Toute la file est déjà analysée.",qLate:(e,a)=>`Le délai « ${e} » ne peut pas être tenu : il faudrait dépasser le plafond de ${a} mémos par jour.`,qRunning:"En cours",qUpNext:e=>`À venir — ${e} société${e>1?"s":""} dans la file, dans l’ordre de tirage`,qHedge:"Ordre projeté, recalculé chaque matin. Un lead frais tombé dans la nuit passe devant.",qFresh:"frais",qLater:"plus tard",qVerdictsT:"Les verdicts de Stan — où part chaque dossier",qVerdicts:[["CALL","sa meilleure trouvaille : à vous de trancher OUI ou NON → onglet « À trancher »."],["CONSIDER","solide, mérite un regard de plus → onglet « Analysées »."],["MONITOR","à garder à l’œil, pas encore prioritaire → onglet « Analysées »."],["PASS","hors sujet pour l’instant → onglet « Écartées »."]],covHowT:"D’où vient ce chiffre ?",covTotal:"Total du marché",covColCode:"Code · pays",covColN:"Sociétés",covColSource:"Source",covWide:e=>`${e} non publié — élargi au code parent`,covMissing:"aucune donnée publiée",covRejected:e=>`Codes écartés faute de sociétés trouvées : ${e}.`,covComputedAt:e=>`calculé le ${e}`,filterOff:"Retirer ce filtre",fSelected:"sélectionnés",funScreened:(e,a)=>`sociétés criblées${e?a?` du ${e} au ${a}`:` depuis le ${e}`:""}`,funKept:"retenues comme cibles sérieuses",funAnalyzed:"analysées en profondeur",funShown:"publiées sur votre page, tous filtres levés",sigStripMore:e=>`+ voir les ${e} autre${e>1?"s":""}`,boxCollapse:"Réduire",boxExpand:"Agrandir",memoReadHere:"📄 Lire le mémo ici",memoHideHere:"▴ Replier le mémo",sigChipTitle:(e,a)=>`Signalé ${e} · ${a}`,funPerWindow:(e,a)=>`Du ${e} au ${a}`,funPerAll:"Depuis le début",funOfMarket:(e,a)=>`sur ~${e} sociétés de VOTRE marché, soit ${a} %`,funScope:"Sourcing de votre thèse uniquement — vos codes d’activité, vos pays, vos angles. Aucune société d’un autre fonds n’est comptée ici.",funToday:e=>`dont ${e} aujourd’hui`,actTitle:"Activité des 30 derniers jours",actScreened:"criblées",actKept:"retenues",actToday:"aujourd’hui",fstatsShow:"Voir l’activité des 30 derniers jours",fstatsHide:"Masquer l’activité",sinceTitle:(e,a)=>`${e} nouvelle${e>1?"s":""} cible${e>1?"s":""} depuis votre dernière visite (${a})`,sinceSub:"arrivées depuis votre dernier passage — à parcourir en premier",sinceMore:e=>`+${e} autres`,sinceOut:e=>`${e} sortie${e>1?"s":""} de la liste`,identSyncConfirm:"Relancer le sourcing maintenant ? Un passage des moteurs prend quelques minutes.",plugAutoOn:e=>`⚡ Envoi automatique ACTIF (${e}) — chaque cible que vous validez part toute seule en séquence.`,plugAutoOff:"Envoi automatique inactif — valider une cible ne l’envoie nulle part.",plugCrm:"Créer les dossiers dans mon CRM",plugCrmHint:"Collez l’URL de webhook de votre outil : chaque décision y arrive aussitôt.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Enregistrer",plugSaved:"Webhook enregistré",plugTest:"Tester",plugTested:"Test envoyé",plugTestThrottled:"Déjà testé il y a moins de 5 s — rien n’est reparti.",plugRemove:"Retirer",plugRemoved:"Webhook retiré",plugMcp:"Claude & IA (MCP)",plugBulk:"Contacter mes cibles",plugBulkHint:"Voyez d’abord qui partirait : l’aperçu ne contacte personne.",plugBulkTabs:[["valides","Validées"],["call","À trancher"],["retenus","Retenues"]],plugBulkPreview:"👁 Aperçu",bulkArm:"📤 Envoyer pour de vrai",bulkNoDest:"Aucune destination enregistrée : renseignez d’abord votre outil ci-dessus.",bulkScope:"Ce qui part, c’est l’onglet entier côté serveur — pas la vue filtrée à l’écran.",bulkWarn:(e,a)=>`Vous allez contacter ${e} société${e>1?"s":""} via ${a}. C’est irréversible, et le serveur ne vérifie pas si elles ont déjà été contactées.`,bulkConfirm:e=>`Oui, envoyer via ${e}`,bulkCancel:"Annuler",bulkSending:"Envoi en cours…",bulkDone:(e,a,r)=>`${e} société${e>1?"s":""} envoyée${e>1?"s":""}. ${a} joignable${a>1?"s":""} sur LinkedIn seulement, ${r} sans email.`,bulkNone:"Aucune société n’avait d’email : rien n’a été envoyé.",bulkLocked:(e,a)=>`Envoyé le ${e} — ${a} société${a>1?"s":""}. Nouvel envoi possible dans 24 h.`,bulkPreviewFirst:"Lancez d’abord l’aperçu : il dit exactement qui partirait.",cdConviction:"Conviction",cdAnalyse:"Analyse",cdSociete:"Société",cdContact:"Contact",cdSuivi:"Suivi",cdCrible:"au crible",cdMemo:e=>e?`après mémo ${e}`:"après mémo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict du",cdSector:"Secteur",cdStage:"Stade",cdCountry:"Où",cdSite:"Site",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Détectée le",cdName:"Dirigeant",cdEmail:"Email",cdCeoStatus:"Votre décision",cdEngagement:"Engagement",qaTitle:"Décrire cette société",qaHint:"Lecture de son site, puis quatre blocs : à qui elle s’adresse, ce qu’elle vend, comment elle gagne de l’argent, et ce qu’il faut en retenir. Aucun verdict — le crible a déjà tranché.",qaRun:"📄 Décrire",qaBusy:"Lecture du site…",qaVP:"À qui, et pour quel problème",qaProduct:"Ce qu’elle vend",qaModel:"Comment elle gagne de l’argent",qaSummary:"À retenir",qaSources:e=>`${e} page${e>1?"s":""} lue${e>1?"s":""}`,qaQuota:"Plafond du jour atteint : réessayez demain.",qaEmpty:"Le site ne dit rien d’exploitable — rien n’a été inventé.",dsBtn:"🗂 Dossier comité",dsHint:"Un A4 par société : le verdict du crible et sa raison, l’identité, l’analyse quand elle a été lancée, et votre décision. Aucun chiffre financier — nous n’en recevons aucun.",dsTitle:e=>`Dossier comité — ${e} société${e>1?"s":""}`,dsCap:(e,a)=>`Les ${e} premières sur ${a} : un comité ne lit pas ${a} pages.`,dsWhy:"Pourquoi cette société est devant vous",dsAnalysis:"Ce qu’elle fait",dsDecision:"Votre décision",dsEmpty:"Aucune société dans la sélection courante.",dsFoot:e=>`Sélection établie par Proplace pour ${e} — document interne, ne pas diffuser.`,covFunnel:"Votre marché, au crible",covScreened:e=>`${e} sociétés passées au crible`,covOf:e=>`sur ~${e} sociétés pertinentes`,covNoEst:"Votre marché adressable n’est pas encore chiffré : la couverture s’affichera dès qu’il le sera.",covPace:e=>`${e} sociétés criblées par jour`,covEta:e=>e<=0?"Votre marché est entièrement couvert.":e<60?`Couverture complète dans ~${e} jours, à ce rythme.`:`Couverture complète dans ~${Math.round(e/30)} mois, à ce rythme.`,covRate:"Rythme d’analyse",covRateHint:"Combien de sociétés retenues reçoivent un verdict argumenté chaque jour. À zéro, l’analyse est en pause.",covRateNow:e=>e<=0?"En pause":`${e} par jour`,covKept:"retenues",covAna:"analysées",covShown:"présentées ici",bulkReplayed:"Cet envoi avait déjà été enregistré : rien n’est reparti. Vos cibles n’ont été contactées qu’une fois.",bulkPending:"L’envoi précédent est encore en cours : rien n’a été renvoyé.",plugBulkResult:(e,a,r)=>`${e} partiraient par email · ${a} par LinkedIn · ${r} sans contact.`,memoAlertTitle:"🔔 Votre alerte mémo",memoAlertSub:"Recevez un email dès qu’un mémo de votre fonds est finalisé — avec son lien direct.",memoAlertToggle:"M’envoyer chaque mémo terminé",memoAlertEmail:"Destinataire",memoAlertSaved:"Enregistré ✓",memoAlertErr:"Échec d’enregistrement — réessayez",memoAlertSections:"Sections de l’email",memoAlertSec:[["swot","SWOT"],["action","Plan d’action"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Verdict de Stan"]],memoAlertPreview:"👁 Prévisualiser",memoAlertBtn:"Votre alerte mémo",alertTabDaily:"Quotidien",alertTabWeekly:"Hebdomadaire",alertTabMarket:"Le marché",alertSections:"Sections de l’email",alertSec:[["pending","Dossiers à trancher"],["stats","Vos chiffres clés"],["autonomous","Décisions automatiques de Stan"],["market","Analyse de marché"],["sourcing","Votre sourcing du jour"]],alertSecSlow:"(plus long à générer)",alertSecNote:"Décocher l’analyse de marché rend l’aperçu instantané.",alertPreview:"👁 Prévisualiser l’email d’aujourd’hui",alertPreviewWeekly:"👁 Prévisualiser le bilan",alertSubject:"Objet :",alertPreviewBusy:"Aperçu en cours de génération, réessayez dans quelques secondes.",alertPreviewRetry:e=>`Génération en cours — nouvel essai dans ${e} s…`,alertPreviewFail:"Aperçu indisponible pour l’instant — décochez « Analyse de marché » pour l’obtenir tout de suite.",alertPreviewEmpty:"À cet instant : rien à trancher — l’email ne partira pas.",alertTest:"✉ M’envoyer un test",alertTestOk:e=>`✓ Envoyé à ${e} — vérifiez aussi vos spams/promotions.`,alertTestHint:"N’affecte pas l’envoi quotidien.",alertWeeklySub:"Un email par semaine : le bilan de la semaine et ce que votre thèse a appris de vos décisions.",alertWeeklyOn:"📬 Recevoir votre bilan de la semaine",alertWeeklyWhen:"Jour et heure d’envoi (Paris)",alertDow:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],alertLoadError:"Impossible de charger vos préférences.",alertThrottled:"Trop vite — attendez quelques secondes et refaites le réglage.",alertInactive:"Votre accès n’est pas encore actif — parlons-en.",alertNoLead:"Destinataire à définir avec nous.",exportViewTitle:"CSV de la vue filtrée",exportViewDesc:e=>`Les ${e} lignes de votre sélection actuelle — onglet, facettes, recherche et fenêtre comprises. Séparateur « ; », prêt pour Excel.`,exportViewBtn:"Télécharger",exportViewDone:e=>`${e} ligne${e>1?"s":""} exportée${e>1?"s":""}`,printTitle:"Imprimer la sélection",printDesc:e=>`Les ${e} lignes à l'écran, en A4 : pour qui, à quelle date, l'entonnoir chiffré, puis la liste. La carte, les filtres et les boutons ne sont pas imprimés.`,printBtn:"Imprimer",exportViewHead:"Société|Statut|Verdict Stan|Score|Pays|Secteur|Étape post-OUI|Contact|Email|Lien mémo|Date|Raison",tourStart:"Lancer le guide pas à pas",tourIntro:"La visite guidée couvre toute la page de A à Z, sur la vraie page : chaque étape éclaire l’endroit exact — de votre thèse à votre alerte email.",tourStep:(e,a)=>`Étape ${e}/${a}`,tourPrev:"← Précédent",tourNext:"Suivant →",tourDone:"Terminer",tourClose:"Fermer",tourPlayTitle:"Visite guidée",ahaATitle1:"1 dossier attend votre décision",ahaATitleN:e=>`${e} dossiers attendent votre décision`,ahaABody:"OUI = on prépare l’approche ; NON = on affine le tir.",ahaABtn:"Trancher maintenant →",ahaBTitle:"Un mémo complet vous attend",ahaBBody:e=>`${e} a déjà son mémo d’analyse — lisible en 3 minutes.`,ahaBBtn:"Ouvrir le mémo →",ahaRetTitle:e=>e===1?"1 société retenue vous attend":`${e} sociétés retenues vous attendent`,ahaRetBody:"Le tri de Stan est fait — chaque retenue a sa fiche, sa carte et son signal.",ahaRetBtn:"Voir les sociétés retenues →",ahaEvalTitle:e=>e===1?"1 société attend votre évaluation":`${e} sociétés attendent votre évaluation`,ahaEvalBody:"Rien n’est encore retenu : c’est la première pile à dérouler. Une société à la fois, Stan fait le crible.",ahaEvalBtn:"Ouvrir la pile à évaluer →",loadMsgs:["Réveil des moteurs de sourcing…","Chargement de vos cibles…","Les cartes et les signaux arrivent…","Tri selon votre thèse…","Encore un instant — le premier chargement est le plus long."],ahaCTitle:"Vos premières cibles sont là",ahaCBody:"Dites-nous si ça vise juste — chaque retour affine la machine.",ahaCBtn:"Voir mes critères →",howto:[["**Réglez votre ciblage.** Ouvrez « Vos critères » : c’est votre thèse — ce que vous cherchez, ce que vous écartez. Corrigez-la en langage naturel dès que quelque chose cloche ; le sourcing du lendemain matin s’y réaligne tout seul.","crit"],["**Sourcez un maximum de cibles.** Évaluez une société en collant son nom ou son site — ou une liste entière —, et regardez vos moteurs ratisser le web avec vos réglages.","eval"],["**Faites avancer chaque cible dans le tunnel, de gauche à droite** — Évaluées › Retenues › Analysées › À trancher › Validées › Écartées. Sur chaque carte, « Votre statut » la classe en un clic ; votre note « pourquoi » reste visible. Les 👍/👎 ne classent jamais : ils affinent votre thèse.","tab1"],["**Tranchez les « À trancher ».** Stan vous laisse le dernier mot : OUI (Validée) ou NON (Écartée), avec un mot sur le pourquoi.","tab3"],["**Comprenez comment Stan classe vos cibles.** Votre statut prime toujours sur le verdict de Stan. Le pont entre les deux est expliqué dans « Vos critères » : Retenu ↔ MATCH, Analysé ↔ CONSIDER · MONITOR, À trancher ↔ CALL, Écarté ↔ NO MATCH · PASS…","crit"],["**Concentrez-vous sur les Validées** — et menez chaque dossier jusqu’au bout du closing !","tab4"],["**Faites sortir tout ça de la page.** Le bouton 🔌 la branche sur vos outils : envoyer vos cibles dans votre séquence d’emailing, créer les fiches dans votre CRM, enrichir les dossiers que vous y avez déjà.","plug"],["**Ne revenez que si ça vaut le coup.** Le bouton 🔔 règle deux emails : le quotidien des dossiers à trancher, et le bilan de la semaine.","alert"]],fhintLive:"Ce qui bouge en ce moment sur votre marché — cliquez une vignette pour ouvrir la source.",fhintGoal:"Ce que les moteurs ont sourcé au dernier passage, et ce qu’il reste à évaluer.",fhintGoalAt:e=>`Dernier passage des moteurs : **${e}**.
Cette barre dit ce qu’il a rapporté, et combien de sociétés attendent encore d’être évaluées.`,fhintDec:"La décision de Stan, dite et justifiée : c’est à quoi renvoient les « STEP A, C… ».",fhintStatus:"Votre statut prime toujours sur le verdict de Stan — et il s’enregistre aussitôt.",fhintFunnel:`Chaque cible avance **de gauche à droite** : Évaluées › Retenues › Analysées › À trancher › Validées › Écartées.
· Cliquez un onglet pour n’afficher que cette étape.
· « Votre statut », sur la fiche, fait avancer une cible en un clic.
· Vos 👍 / 👎 ne classent jamais : ils affinent votre thèse.`,fhintChips:`Sur chaque ligne, l’état se lit sans rien ouvrir.
· **MATCH · NO MATCH** — le crible de Stan sur votre thèse.
· **CONSIDER · MONITOR · CALL · PASS** — le verdict du mémo, quand il existe.
· **Mémo à lancer** — la société est retenue, son mémo n’a pas encore tourné.`,fhintMemo:`L’onglet **Mémo** porte l’analyse : la synthèse, puis le mémo complet en pleine page.
· « Ouvrir le mémo ↗ » affiche le document tel qu’il a été écrit.
· « Mémo détaillé » relance une analyse approfondie — **1 crédit**, une société à la fois.`,fhintIdent:`Tout en haut : le nom de votre fonds, et l’heure à laquelle cette page a été actualisée.
· À droite, vos raccourcis — export, outils, alertes, relance du sourcing.
· Le **▶** relance cette visite quand vous voulez.`,fhintCover:`Combien de votre marché vous avez déjà regardé.
· Le **dénominateur** est chiffré à la création de votre thèse : vos codes d’activité, comptés sur les registres officiels (SIRENE en France, Eurostat en Europe).
· Le **numérateur**, ce sont vos sociétés criblées. Cliquez pour voir le détail du calcul.`,fhintEngine:`Le rythme auquel vos mémos sont écrits.
· **N par jour** : ce que le moteur s’autorise à lancer — réglable dans la couverture.
· **En attente** : les retenues dont le mémo n’a pas encore tourné. Cliquez pour voir la file.
· Un mémo = **1 crédit**, une société à la fois : rien ne part jamais en lot.`,tourToday:"ce matin",tourNoRun:"aucun passage enregistré",tourT:{ident:"Le bandeau de votre fonds",cover:"Votre couverture du marché",engine:"Le moteur de mémos",live:"Le direct",goal:"Le dernier sourcing",funnel:"Le tunnel",tuto:"L’étape en cours",demand:"Évaluer une société",chips:"Les statuts, sur la ligne",dec:"Pourquoi cette décision",memo:"Le mémo détaillé",status:"Votre statut",learn:"Vos 👍 / 👎",tools:"Brancher vos outils",exportT:"Exporter en CSV",alerts:"Vos alertes email",crit:"Le paramétrage de Stan"},fhintExport:"Sortez vos cibles au format CSV — la sélection courante, avec ses colonnes, prête pour votre tableur ou votre CRM.",fhintAlerts:"Réglez ce qui vous arrive par email : le brief du matin, le bilan de la semaine, et l’alerte quand un mémo est prêt.",csLabel:"Votre statut :",csKept:"Retenu",csAnalysed:"Analysé",csPending:"À trancher",csValidated:"Validé",csOut:"Écarté",csYes:"✓ Oui",csNo:"✗ Non",csSaved:"✓ enreg.",csNoteSaved:"note ajoutée ✓",csNoteOk:"OK",csNotePh:"Pourquoi ? (une ligne)",csAnaConfirm:"Aucun mémo sur ce dossier — le passer en Analysé quand même ?",whySend:"Envoyer",whyYesPh:"Pourquoi ce OUI ? (une ligne — ça affine votre thèse)",whyNoPh:"Pourquoi ce NON ? (une ligne — ça affine votre thèse)",stgLabel:"Votre avancement :",stg:[["todo","○ À faire"],["sent","✉ Contactée"],["replied","💬 A répondu"],["meeting","🤝 RDV"],["loi","📄 LOI"],["signed","✅ Signée"],["lost","✖ Perdue"]],j4Badge:e=>`⏰ Sans réponse depuis ${e} j — relancer ?`,actRepeche:"↩ Repêcher",actErr:"Envoi impossible — réessayez dans un instant.",actNotPersisted:"Impossible d’enregistrer ce statut sur ce dossier.",decidedYes:e=>`${e} validée — place à l’approche`,decidedNo:e=>`${e} écartée`,repeched:e=>`${e} repêchée — de retour dans Retenues`,critHypTitle:"Notre hypothèse sur votre stratégie",critHypSub:"Toute la sélection en découle. Si elle est à côté, corrigez-la ci-dessous — la recherche est réalignée et vous recevez une sélection corrigée.",critProfilsTitle:"Vos profils de cibles",critProfilsSub:"Les familles de cibles que la machine traque en continu — chaque profil se déplie.",critLookFor:"Ce que nous recherchons",critRuleOut:"Ce que nous écartons",critGateTitle:"Le crible de Stan — comment il décide Retenu / Écarté",critGateSub:"Chaque société est confrontée à ces critères. C’est à eux que renvoient les « STEP A, C… » des raisons affichées sur les lignes.",rubricTitle:"Comment Stan décide l’analyse (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Une fois retenu, Stan approfondit et tranche. Voici ce qui fait pencher la balance.",qvTitle:"Les verdicts de Stan — où va chaque dossier",qv:[["CALL PENDING","le choix n°1 de Stan : à trancher OUI/NON maintenant → onglet « À trancher »."],["CALL YES","vous avez tranché OUI — le dossier rejoint « Validées », place à l’approche."],["CALL NO","vous avez tranché NON — le dossier rejoint « Écartées »."],["CONSIDER","solide, mérite un regard plus attentif → onglet « Analysées »."],["MONITOR","à surveiller, pas prioritaire pour l’instant → onglet « Analysées »."],["PASS","non pertinent pour le moment → onglet « Écartées »."]],brTitle:"Le routage automatique — où le verdict de Stan envoie chaque dossier",br:[["Retenu","MATCH — retenue au sourcing, mémo à venir → onglet « Retenues »"],["Analysé","CONSIDER · MONITOR — mémo fait, pas de call → onglet « Analysées »"],["À trancher","CALL PENDING — Stan propose un call, votre OUI/NON est attendu → onglet « À trancher »"],["Validé","CALL YES — vous avez tranché OUI → onglet « Validées »"],["Écarté","NO MATCH · PASS · CALL NO — refus de Stan, ou votre NON sur un call → onglet « Écartées »"]],brNote:"Un CALL passe par 3 états : CALL PENDING (le mémo est TERMINÉ, Stan propose le call — votre décision est en attente) › CALL YES (vous validez) › CALL NO (vous écartez). PENDING ne veut jamais dire « en cours d’analyse » : l’analyse est déjà faite.",vt:{MATCH:"MATCH — retenu : correspond à vos critères.","NO MATCH":"NO MATCH — écarté par vos critères.","CALL PENDING":"CALL — le choix n°1 de Stan : à trancher OUI/NON maintenant.","CALL YES":"CALL YES — vous avez tranché OUI : le dossier rejoint « Validées ».","CALL NO":"CALL NO — vous avez tranché NON : le dossier rejoint « Écartées ».",CONSIDER:"CONSIDER — solide, mérite un regard plus attentif.",MONITOR:"MONITOR — à surveiller, pas prioritaire pour l’instant.",PASS:"PASS — non pertinent pour le moment."},vKept:"Retenu",vOut:"Écarté",learnLine:"Comme sur Netflix, chaque 👍/👎 affine ce que Stan vous montre ensuite — vous jugez, il apprend.",learnLink:"Ajuster mes critères →",funnelHint:"Retrouvez ici toutes vos cibles sourcées automatiquement dans <b>évaluées</b> puis passez celles que vous souhaitez contacter dans <b>validées</b>.",fhintClose:"Masquer cette aide",queueTitle:"File de traitement",queueDone:(e,a)=>`<b>${e} / ${a}</b> mémos générés`,queueTomorrow:"À VENIR — ORDRE PROJETÉ, RECALCULÉ CHAQUE MATIN",queueToday:"ANALYSÉS AUJOURD’HUI",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugConfigured:"Configuré",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(e,a)=>`<b>${e}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:e=>`${e} passées au crible`,alertTitle:"🔔 Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"VOS ANGLES D’ACQUISITION",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarBusy:"🧬 Recherche…",similarNote:"Les retenues entrent dans votre liste au prochain rafraîchissement.",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:e=>`actualisée le ${e}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:e=>`actualisée le ${e}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:e=>`Onboarding lancé pour ${e} — suivez l’avancement dans le cockpit`,rsOpen:"🔎 Rechercher des sociétés à évaluer",rsUrlPh:"coller l’URL d’un article, d’une vidéo ou d’une note",rsTextPh:"Coller ici l’article complet",rsOr:"ou",rsGo:"🔎 Résumer et rechercher des sociétés",rsHint:"RÉSUMÉ · CARTE MENTALE · SOCIÉTÉS",rsRunning:"Lecture en cours…",rsRunningVid:"Transcription de la vidéo…",rsElapsed:e=>`${e} s`,rsNeed:"Collez une URL, ou le texte complet de l’article.",rsFound:e=>e?`${e} société${e>1?"s":""} trouvée${e>1?"s":""} dans ce contenu.`:"Aucune société nommée dans ce contenu.",rsLink:"Voir la page publiée ↗",rsPublishing:"Publication de la fiche…",rsPublishFail:"Fiche produite, page non publiée",rsTags:"TAGS",rsClose:"Fermer",rsMindmap:"CARTE MENTALE",rsSource:"Source ↗",rsSaving:"Enregistrement…",rsSaved:"✓ Enregistrée dans votre cockpit",rsSavedIn:e=>`✓ Enregistrée dans le carnet de ${e}`,rsSaveFail:"Fiche produite, NON enregistrée",rsArchOpen:e=>`voir les ${e} recherche${e>1?"s":""} déjà lancée${e>1?"s":""}`,rsArchTitle:"Recherches déjà lancées",rsArchBack:"← toutes les recherches",rsArchLoading:"Chargement…",rsArchEmpty:"Aucune recherche enregistrée pour l’instant.",rsArchGone:"Cette recherche n’est plus disponible.",rsRowCounts:(e,a)=>`${e} citée${e>1?"s":""} · ${a} à évaluer`,rsPub:"Publiée",rsPriv:"Non publiée",rsCited:"Sociétés citées",rsCitedHint:"Toutes les sociétés nommées dans ce contenu.",rsMatch:"Sociétés qui pourraient correspondre",rsMatchHint:"Suggérées à partir de la thèse du contenu — elles n’y sont pas forcément nommées.",rsEvalOne:"⚡ Évaluer",rsAddAll:e=>`＋ Ajouter les ${e} à la liste`,rsNoCompanies:"Aucune société dans ce contenu.",rsConclusion:"Ce que ça implique",rsCriteria:"Critères de sourcing",rsSources:"Pour creuser",groupEngine:"Moteur",groupNone:"Rien",browse:e=>`Parcourir les ${e}`,chainAll:e=>`Évaluer les ${e}`,chainHint:"selon votre thèse, l’une après l’autre",winMenu:"Période",datesShort:["Aujourd’hui","7 jours","30 jours","Tout"],colCompany:"SOCIÉTÉ & DESCRIPTION",grpCount:(e,a)=>`${e} à envoyer sur ${a} sourcées`,emptyTab:"AUCUNE CIBLE DANS CET ONGLET",emptyScope:"AUCUNE SOCIÉTÉ DANS CE PÉRIMÈTRE",contWorld:"Monde",evalGoOn:e=>`⚡ Évaluer ${e}`,rowExtract:"🔎 Extraire les sociétés",toSendCtx:(e,a)=>`sur ${e} dans l'édition${a>0?` (${a} sans société identifiable)`:""}`,grpCard:"la carte du jour",grpMa:"Opérations M&A",grpLev:"Levées de fonds",grpNews:"Actualités",grpNom:"Actualités · Nominations",grpNewsOther:"Actualités · Autres",grpHire:"Actualités · Recrutements",edLabel:"dans l'édition du jour",edSplit:(e,a)=>`⚡ ${e} évaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} à explorer`:""}`},_i={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Everything STAN ran through the screen on this window: every company judged against your criteria, kept or discarded automatically.","STAN kept these companies against your criteria, decisions justified. WE verify its picks — discard, validate, or launch an analysis on the uncertain ones.","STAN’s memos, reviewed by US: quantified synergies, argued verdict. Validate the ones to contact, set “to decide” where you hesitate.","YOUR move: the best targets, presented on Monday by your Corporate Developer. Call YES or NO — your yeses move to Validated.","Your YESES — the shortlist to contact. WE prepare the approach, or engage it on your behalf (Enterprise plan).","Discarded by STAN or by YOU. Every NO sharpens Stan’s criteria. Recover one anytime.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(e,a,r)=>`<b>${e} Stan CALL${e>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${r} awaiting answer.</b>`,morningThesis:(e,a,r)=>`This morning, <b>${e}</b> compan${e===1?"y":"ies"} screened by your engines`+(typeof r=="number"?`, <b>${r}</b> kept.`:".")+(a?` <b>${a}</b> awaiting your evaluation.`:' <span class="ok">All screened.</span>'),morningEnginesTitle:"Your engines are tuned to YOUR thesis: activity codes, countries, acquisition angles, exclusion criteria. Only the news watch starts from a sweep shared across funds — but every deal it surfaces is then screened against your criteria, and only enters here if it passes.",morningLast:(e,a,r)=>`Engines last ran on <b>${r}</b>: <b>${e}</b> compan${e===1?"y":"ies"} sourced.`+(a?` <b>${a}</b> still to screen.`:' <span class="ok">All screened.</span>'),morningEval:e=>`▶ Work through them (${e})`,identTitle:e=>`Targets for ${e}`,identCoverage:"MARKET COVERAGE",identCoverageOf:(e,a)=>`<b>${e}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"MEMO ENGINE",identPerDay:"memo/day",identPending:e=>`→ ${e} queued`,identPendingWait:"→ reading the queue…",identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Reverse sort order",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:e=>`Decision undone on ${e}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ YES",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:e=>`${e} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"SCREEN · MEMO",colCrible:"SCREEN",colMemo:"MEMO",colScore:"SCORE",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:e=>`Since Stan’s verdict: ${e} d`,waitChip:e=>`⏱ ${e} d`,densList:"LIST",densOpen:"OPEN",densLigne:"ROWS",densMaxi:"CARDS",unfoldAll:"Unfold all",foldAllLbl:"Fold all",foldArts:"Articles",zoomSrc:"Source",viewLink:"View article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Company website",viewSiteBusyHint:"Looking up the company website…",viewSrcHint:"Source article",viewLinkClose:"Close article",viewLinkTab:"Open in a tab",viewLinkHint:"Opens in a new window",zoomSimilar:"See similar",zoomInCockpit:"Isolate in the list",zoomArt:"Today's editorial",zoomEvalHint:"Screen against your thesis",zoomSimilarHint:"Same sector in the list",zoomIsolateHint:"Keep only this company",zoomNewsMark:"Edition note — opens on the right",zoomPulseEval:"evaluable",zoomPulseExplore:"to explore",zoomPulseArts:"news",doNews:"📰 News",zoomPulseEd:"in today’s article",zoomPulseBtn:"Today’s edition",zoomPulseWeek:"Last 7 days",zoomPulseWeekEd:"this week",doAll:"All",doEdito:"📖 Today's editorial",doEval:"⚡ Evaluable",doExplore:"🔎 To explore",doTodo:"⚡ To evaluate",doDone:"✓ Already evaluated",cdMemoTab:"📖 Memo",evalPickSite:"several sites share this name — open to check, then confirm the right one.",evalPickGo:"✓ This one",chainMemoGo:"⚡ Launch the memo (1 credit)",analyseConfirm:e=>`Launch ${e} analysis memo${e>1?"s":""}?

This uses ${e} memo credit${e>1?"s":""}. Companies move to "Analysed" or "To decide" once the memo is ready.`,sortBy:"Sort by",sortSig:"Signal",sortAmount:"Amount",sortAge:"Recency",sortName:"Name",sortCountry:"Country",sortStage:"Stage",sortCrible:"Screen",sortMemo:"Memo",sortScore:"Score",fMenu:"Filters",memoSynth:"SUMMARY",memoOpenFull:"📖 Read the full memo →",memoDeep:"⚡ Detailed memo",memoDeepHint:"For this file to decide, you can launch the detailed analysis: market study, competitive quadrant, scenarios.",memoDeepSent:e=>`Detailed memo launched on ${e} — ready in 35 to 40 minutes`,memoInstantSent:e=>`Analysis launched on ${e} — memo ready in ~15 minutes`,liveStrip:"Live analyses",liveBoot:"starting…",liveEnd:"done {t}",liveOpenQueue:"Open the queue",memoNone:"No memo for this file yet — launch the analysis.",creditsCap:"MEMO CREDITS",creditsToday:"today",creditsRecharge:"Top up →",creditsCost:e=>`−${e} credit${e>1?"s":""}`,creditsNone:"Out of credits — top up or wait for tomorrow 7am.",rechargeTitle:"Memo credits",rechargeHint:e=>`Your plan includes <b>${e} credits per day</b>, refilled every morning. Need more right now?`,rechargeNote:"Purchased credits never expire. They are used after your daily credits.",rechargeBuy:"Add",rechargeUnit:(e,a)=>`${e} credits — €${a}`,onbTag:"PRIVATE PREVIEW · READ ONLY",onbTitle:e=>`Your deal flow is ready — <b>${e} targets kept</b> by Stan`,onbSub:e=>`${e} companies screened against your thesis. The first ten rows are open; the rest unlocks in thirty minutes.`,onbSteps:[["Stan studied your online presence","Website, job posts, press — it inferred your acquisition angles."],["It screened the market","Every company checked against your criteria."],["It wrote memos","Quantified analyses, synergies, verdicts."],["Your turn to decide","Thirty minutes to tune your deal flow and unlock everything."]],onbCta:"Pick a slot →",lockbarText:"Let’s set up your dream deal flow in 30 minutes, with a Corporate Developer",lockbarContactBefore:"Alexandre — ",lockbarContactMid:" · ",lockbarCta:"Pick a slot",rdvHeading:"Let’s set up your ideal deal flow in 30 minutes",rdvSubBefore:"Pick a slot below, or reach your Corporate Development expert directly at ",rdvSubMid:" or by email at ",rdvCoFallback:"your company",rdvUnlockLabel:e=>`Unlock ${e}`,rdvUnlocks:e=>[["Access every target you kept","Full investment memos, synergies, contacts, approach angle."],["Acquisition strategy built with you","Hypothesis + acquisition strategy recalibrated live, with you."],["Let’s decide together on the targets you want","YES / NO, sourcing of similar companies, export and CRM sync."],["Your AI Corporate Developer is live",`Stan works for ${e} every morning — all you have to do is decide.`]],identRepub:"Republish the page now — re-renders it from what is already known. Free: no engine runs, and no model is called if your thesis has not changed.",identRepubDone:"Republish started — your numbers refresh in about thirty seconds. Reload the page to see them.",plugHow1:"In your tool (Make, Zapier, n8n, HubSpot, Pipedrive…), create a “webhook” trigger and copy the URL it gives you.",plugHow2:"Paste it below, Save, then Test: one sample message goes out to your tool right away.",plugHow3:"Done. Three moments trigger a send: you validate a target, you move it a stage, or an approach is prepared.",plugExT:"Exactly what your tool receives",plugExResult:"In your CRM you get one row per validated company: its name, your note, Stan’s score, its website and the memo link.",plugApiT:"One company at a time, from a script or Make",plugQuota:"This shortcut is capped at 10 companies per day per link — the normal path is the page’s evaluation bar.",plugFeeds:"The JSON, CSV, Google Sheets and Excel feeds live in the 📥 Export button next door — they are not repeated here.",plugTokenNote:"⚠️ These links carry this page’s access key: wherever you paste them, they open your targets. Only put them in your own tools.",plugDoc:"Full documentation → proplace.co/api/",csNone:"Status",csAnaNeedMemo:"Moving to “Analysed” needs a memo.",csAnaRun:"⚡ Run the memo (1 credit)",csAnaAnyway:"Mark it anyway",qOffer:"YOUR PLAN",qDelay:"verdict within",qRate:e=>`${e} memo${e>1?"s":""} a day`,qManual:e=>`${e} memo a day, on request`,qPaused:"no automatic memo",qManualSet:"rate set by hand",qEta:(e,a,r)=>`At this rate (${a}/day), ${e} memo${e>1?"s":""} left to write — the whole queue is processed in ${r} day${r>1?"s":""}.`,qEtaPaused:"Rate at zero: nothing goes out. Activate a plan to project a date.",qEtaDone:"The whole queue is already analysed.",qLate:(e,a)=>`The “${e}” promise cannot be met: it would take more than the ${a} memos a day cap.`,qRunning:"In progress",qUpNext:e=>`Coming up — ${e} compan${e>1?"ies":"y"} in the queue, in pick order`,qHedge:"Projected order, recomputed every morning. A fresh lead landing overnight goes first.",qFresh:"fresh",qLater:"later",qVerdictsT:"Stan’s verdicts — where each file goes",qVerdicts:[["CALL","his top pick: decide YES or NO → “To decide” tab."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],covHowT:"Where does this number come from?",covTotal:"Market total",covColCode:"Code · country",covColN:"Companies",covColSource:"Source",covWide:e=>`${e} not published — widened to its parent code`,covMissing:"no data published",covRejected:e=>`Codes dropped, no companies found: ${e}.`,covComputedAt:e=>`computed on ${e}`,filterOff:"Remove this filter",fSelected:"selected",funScreened:(e,a)=>`companies screened${e?a?` from ${e} to ${a}`:` since ${e}`:""}`,funKept:"kept as serious targets",funAnalyzed:"analysed in depth",funShown:"published on your page, all filters cleared",sigStripMore:e=>`+ see the other ${e}`,boxCollapse:"Collapse",boxExpand:"Expand",memoReadHere:"📄 Read the memo here",memoHideHere:"▴ Collapse the memo",sigChipTitle:(e,a)=>`Flagged ${e} · ${a}`,funPerWindow:(e,a)=>`From ${e} to ${a}`,funPerAll:"Since the start",funOfMarket:(e,a)=>`of ~${e} companies on YOUR market, i.e. ${a} %`,funScope:"Sourcing from your thesis only — your activity codes, your countries, your angles. No company from another fund is counted here.",funToday:e=>`incl. ${e} today`,actTitle:"Last 30 days of activity",actScreened:"screened",actKept:"kept",actToday:"today",fstatsShow:"Show the last 30 days of activity",fstatsHide:"Hide activity",sinceTitle:(e,a)=>`${e} new target${e>1?"s":""} since your last visit (${a})`,sinceSub:"arrived since your last visit — start here",sinceMore:e=>`+${e} more`,sinceOut:e=>`${e} left the list`,identSyncConfirm:"Relaunch sourcing now? An engine pass takes a few minutes.",plugAutoOn:e=>`⚡ Automatic sending ACTIVE (${e}) — every target you validate goes into the sequence on its own.`,plugAutoOff:"Automatic sending off — validating a target sends it nowhere.",plugCrm:"Create the records in my CRM",plugCrmHint:"Paste your tool’s webhook URL: every decision lands there right away.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Save",plugSaved:"Webhook saved",plugTest:"Test",plugTested:"Test sent",plugTestThrottled:"Already tested less than 5s ago — nothing was sent.",plugRemove:"Remove",plugRemoved:"Webhook removed",plugMcp:"Claude & AI (MCP)",plugBulk:"Contact my targets",plugBulkHint:"See who would go out first: the preview contacts nobody.",plugBulkTabs:[["valides","Validated"],["call","To decide"],["retenus","Kept"]],plugBulkPreview:"👁 Preview",bulkArm:"📤 Send for real",bulkNoDest:"No destination saved: set up your tool above first.",bulkScope:"What goes out is the whole server-side tab — not the filtered view on screen.",bulkWarn:(e,a)=>`You are about to contact ${e} compan${e>1?"ies":"y"} via ${a}. This cannot be undone, and the server does not check whether they were already contacted.`,bulkConfirm:e=>`Yes, send via ${e}`,bulkCancel:"Cancel",bulkSending:"Sending…",bulkDone:(e,a,r)=>`${e} compan${e>1?"ies":"y"} sent. ${a} reachable on LinkedIn only, ${r} with no email.`,bulkNone:"No company had an email: nothing was sent.",bulkLocked:(e,a)=>`Sent on ${e} — ${a} compan${a>1?"ies":"y"}. Next send available in 24 h.`,bulkPreviewFirst:"Run the preview first: it says exactly who would go out.",cdConviction:"Conviction",cdAnalyse:"Analysis",cdSociete:"Company",cdContact:"Contact",cdSuivi:"Follow-up",cdCrible:"screening",cdMemo:e=>e?`after ${e} memo`:"after memo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict on",cdSector:"Sector",cdStage:"Stage",cdCountry:"Where",cdSite:"Website",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Detected on",cdName:"Decision-maker",cdEmail:"Email",cdCeoStatus:"Your decision",cdEngagement:"Engagement",qaTitle:"Describe this company",qaHint:"Reads its website, then four blocks: who it serves, what it sells, how it makes money, and what to remember. No verdict — the screening already decided.",qaRun:"📄 Describe",qaBusy:"Reading the website…",qaVP:"Who, and for what problem",qaProduct:"What it sells",qaModel:"How it makes money",qaSummary:"Takeaway",qaSources:e=>`${e} page${e>1?"s":""} read`,qaQuota:"Daily cap reached: try again tomorrow.",qaEmpty:"The website says nothing usable — nothing was invented.",dsBtn:"🗂 Committee pack",dsHint:"One A4 per company: the screening verdict and its reason, the identity, the analysis when it was run, and your decision. No financial figures — we receive none.",dsTitle:e=>`Committee pack — ${e} compan${e>1?"ies":"y"}`,dsCap:(e,a)=>`The first ${e} of ${a}: a committee will not read ${a} pages.`,dsWhy:"Why this company is in front of you",dsAnalysis:"What it does",dsDecision:"Your decision",dsEmpty:"No company in the current selection.",dsFoot:e=>`Selection by Proplace for ${e} — internal document, do not circulate.`,covFunnel:"Your market, screened",covScreened:e=>`${e} companies screened`,covOf:e=>`out of ~${e} relevant companies`,covNoEst:"Your addressable market is not sized yet: coverage will show as soon as it is.",covPace:e=>`${e} companies screened per day`,covEta:e=>e<=0?"Your market is fully covered.":e<60?`Full coverage in ~${e} days at this pace.`:`Full coverage in ~${Math.round(e/30)} months at this pace.`,covRate:"Analysis pace",covRateHint:"How many kept companies get a reasoned verdict each day. At zero, analysis is paused.",covRateNow:e=>e<=0?"Paused":`${e} per day`,covKept:"kept",covAna:"analysed",covShown:"shown here",bulkReplayed:"This send was already recorded: nothing went out again. Your targets were contacted once.",bulkPending:"The previous send is still running: nothing was sent again.",plugBulkResult:(e,a,r)=>`${e} would go by email · ${a} by LinkedIn · ${r} with no contact.`,memoAlertTitle:"🔔 Your memo alert",memoAlertSub:"Get an email as soon as one of your fund’s memos is finalised — with its direct link.",memoAlertToggle:"Send me every finished memo",memoAlertEmail:"Recipient",memoAlertSaved:"Saved ✓",memoAlertErr:"Could not save — try again",memoAlertSections:"Sections of the email",memoAlertSec:[["swot","SWOT"],["action","Action plan"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Stan’s verdict"]],memoAlertPreview:"👁 Preview",memoAlertBtn:"Your memo alert",alertTabDaily:"Daily",alertTabWeekly:"Weekly",alertTabMarket:"Market",alertSections:"Sections of the email",alertSec:[["pending","Files to decide on"],["stats","Your key numbers"],["autonomous","Stan’s automatic decisions"],["market","Market analysis"],["sourcing","Your sourcing of the day"]],alertSecSlow:"(slower to generate)",alertSecNote:"Unticking the market analysis makes the preview instant.",alertPreview:"👁 Preview today’s email",alertPreviewWeekly:"👁 Preview the weekly",alertSubject:"Subject:",alertPreviewBusy:"Preview being generated, try again in a few seconds.",alertPreviewRetry:e=>`Generating — new attempt in ${e}s…`,alertPreviewFail:"Preview unavailable right now — untick “Market analysis” to get it immediately.",alertPreviewEmpty:"Right now: nothing to decide on — the email will not go out.",alertTest:"✉ Send me a test",alertTestOk:e=>`✓ Sent to ${e} — check your spam/promotions too.`,alertTestHint:"Does not affect the daily send.",alertWeeklySub:"One email a week: the week in review and what your thesis learned from your decisions.",alertWeeklyOn:"📬 Receive your week in review",alertWeeklyWhen:"Day and time (Paris)",alertDow:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],alertLoadError:"Could not load your preferences.",alertThrottled:"Too fast — wait a few seconds and set it again.",alertInactive:"Your access is not active yet — let’s talk about it.",alertNoLead:"Recipient to be set with us.",exportViewTitle:"CSV of the filtered view",exportViewDesc:e=>`The ${e} rows of your current selection — tab, facets, search and window included. Semicolon separated, ready for Excel.`,exportViewBtn:"Download",exportViewDone:e=>`${e} row${e>1?"s":""} exported`,printTitle:"Print the selection",printDesc:e=>`The ${e} rows on screen, on A4: who it is for, as of when, the funnel figures, then the list. The map, filters and buttons are not printed.`,printBtn:"Print",exportViewHead:"Company|Status|Stan verdict|Score|Country|Sector|Post-YES stage|Contact|Email|Memo link|Date|Reason",tourStart:"Start the step-by-step guide",tourIntro:"The guided tour covers the whole page A to Z, on the live page: each step spotlights the exact spot — from your thesis to your email alert.",tourStep:(e,a)=>`Step ${e}/${a}`,tourPrev:"← Previous",tourNext:"Next →",tourDone:"Finish",tourClose:"Close",tourPlayTitle:"Guided tour",ahaATitle1:"1 file awaits your decision",ahaATitleN:e=>`${e} files await your decision`,ahaABody:"YES = we prepare the approach; NO = we sharpen the aim.",ahaABtn:"Decide now →",ahaBTitle:"A full memo is waiting for you",ahaBBody:e=>`${e} already has its analysis memo — a 3-minute read.`,ahaBBtn:"Open the memo →",ahaRetTitle:e=>e===1?"1 kept company is waiting for you":`${e} kept companies are waiting for you`,ahaRetBody:"Stan’s sorting is done — every kept company has its sheet, card and signal.",ahaRetBtn:"See the kept companies →",ahaEvalTitle:e=>e===1?"1 company is waiting for your evaluation":`${e} companies are waiting for your evaluation`,ahaEvalBody:"Nothing is kept yet: this is the first pile to work through. One company at a time, Stan does the screening.",ahaEvalBtn:"Open the pile to evaluate →",loadMsgs:["Waking up the sourcing engines…","Loading your targets…","Cards and signals are coming…","Sorting by your thesis…","One more moment — the first load is the longest."],ahaCTitle:"Your first targets are here",ahaCBody:"Tell us if the aim is right — every signal sharpens the machine.",ahaCBtn:"See my criteria →",howto:[["**Set your targeting.** Open “Your criteria”: it’s your thesis — what you look for and what you rule out. Fix it in plain language whenever something is off; the next morning’s sourcing realigns on its own.","crit"],["**Source as many targets as you can.** Evaluate a company by pasting its name or website — or a whole list — and watch your engines comb the web with your settings.","eval"],["**Move every target through the funnel, left to right** — Evaluated › Kept › Analysed › To decide › Validated › Ruled out. On each card, “Your status” files it in one click; your “why” note stays visible. The 👍/👎 never file anything: they sharpen your thesis.","tab1"],["**Settle the “To decide”.** Stan leaves you the final word: YES (Validated) or NO (Ruled out), with a word on the why.","tab3"],["**Understand how Stan sorts your targets.** Your status always overrides Stan’s verdict. The bridge between the two is explained in “Your criteria”: Kept ↔ MATCH, Analysed ↔ CONSIDER · MONITOR, To decide ↔ CALL, Ruled out ↔ NO MATCH · PASS…","crit"],["**Focus on the Validated** — and take every file all the way to closing!","tab4"],["**Push all of this out of the page.** The 🔌 button wires it into your tools: send your targets to your emailing sequence, create the records in your CRM, enrich the files you already have there.","plug"],["**Only come back when it’s worth it.** The 🔔 button sets two emails: the daily one for files to decide on, and the week in review.","alert"]],fhintLive:"What is moving on your market right now — click a tile to open the source.",fhintGoal:"What the engines sourced on the last run, and what is left to evaluate.",fhintGoalAt:e=>`Engines last ran: **${e}**.
This bar says what came back, and how many companies are still waiting to be evaluated.`,fhintDec:"Stan’s decision, stated and justified: this is what the “STEP A, C…” refer to.",fhintStatus:"Your status always overrides Stan’s verdict — and it is saved right away.",fhintFunnel:`Every target moves **left to right**: Evaluated › Kept › Analysed › To decide › Validated › Ruled out.
· Click a tab to show only that step.
· “Your status”, on the card, moves a target in one click.
· Your 👍 / 👎 never sort: they sharpen your thesis.`,fhintChips:`On every row, the state reads without opening anything.
· **MATCH · NO MATCH** — Stan’s screen against your thesis.
· **CONSIDER · MONITOR · CALL · PASS** — the memo verdict, when there is one.
· **Memo to run** — the company is kept, its memo has not run yet.`,fhintMemo:`The **Memo** tab holds the analysis: the synthesis, then the full memo in a page of its own.
· “Open the memo ↗” shows the document as it was written.
· “Detailed memo” runs a deeper analysis — **1 credit**, one company at a time.`,fhintIdent:`Right at the top: your fund’s name, and when this page was last refreshed.
· On the right, your shortcuts — export, tools, alerts, re-run sourcing.
· The **▶** restarts this tour whenever you want.`,fhintCover:`How much of your market you have already looked at.
· The **denominator** is sized when your thesis is created: your activity codes, counted on the official registers (SIRENE in France, Eurostat in Europe).
· The **numerator** is your screened companies. Click to see the calculation.`,fhintEngine:`The pace at which your memos get written.
· **N per day**: what the engine allows itself to start — adjustable from the coverage panel.
· **Waiting**: kept companies whose memo has not run yet. Click to see the queue.
· One memo = **1 credit**, one company at a time: nothing ever goes out in bulk.`,tourToday:"this morning",tourNoRun:"no run recorded",tourT:{ident:"Your fund’s header",cover:"Your market coverage",engine:"The memo engine",live:"Live",goal:"The last sourcing",funnel:"The funnel",tuto:"The current step",demand:"Evaluate a company",chips:"Statuses, on the row",dec:"Why this decision",memo:"The detailed memo",status:"Your status",learn:"Your 👍 / 👎",tools:"Connect your tools",exportT:"Export to CSV",alerts:"Your email alerts",crit:"Stan’s settings"},fhintExport:"Take your targets out as CSV — the current selection with its columns, ready for your spreadsheet or CRM.",fhintAlerts:"Set what reaches your inbox: the morning brief, the weekly recap, and the alert when a memo is ready.",csLabel:"Your status:",csKept:"Kept",csAnalysed:"Analysed",csPending:"To decide",csValidated:"Validated",csOut:"Ruled out",csYes:"✓ Yes",csNo:"✗ No",csSaved:"✓ saved",csNoteSaved:"note added ✓",csNoteOk:"OK",csNotePh:"Why? (one line)",csAnaConfirm:"No memo on this file — mark it Analysed anyway?",whySend:"Send",whyYesPh:"Why this YES? (one line — it sharpens your thesis)",whyNoPh:"Why this NO? (one line — it sharpens your thesis)",stgLabel:"Your progress:",stg:[["todo","○ To do"],["sent","✉ Contacted"],["replied","💬 Replied"],["meeting","🤝 Meeting"],["loi","📄 LOI"],["signed","✅ Signed"],["lost","✖ Lost"]],j4Badge:e=>`⏰ No reply for ${e} days — follow up?`,actRepeche:"↩ Recover",actErr:"Could not save — try again in a moment.",actNotPersisted:"This status cannot be saved on this record.",decidedYes:e=>`${e} validated — on to the approach`,decidedNo:e=>`${e} ruled out`,repeched:e=>`${e} recovered — back in Kept`,critHypTitle:"Our hypothesis about your strategy",critHypSub:"The whole selection follows from it. If it is off, correct it below — the search is realigned and you get a corrected selection.",critProfilsTitle:"Your target profiles",critProfilsSub:"The families of targets the machine tracks continuously — each profile unfolds.",critLookFor:"What we look for",critRuleOut:"What we rule out",critGateTitle:"Stan’s screen — how it decides Kept / Ruled out",critGateSub:"Every company is checked against these criteria. They are what the “STEP A, C…” in the reasons on each row refer to.",rubricTitle:"How Stan decides the analysis (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Once kept, Stan digs deeper and rules. Here’s what tips the balance.",qvTitle:"Stan’s verdicts — where each file goes",qv:[["CALL PENDING","Stan’s top pick: decide YES/NO now → “To decide” tab."],["CALL YES","you decided YES — the file joins “Validated”, on to the approach."],["CALL NO","you decided NO — the file joins “Ruled out”."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],brTitle:"Automatic routing — where Stan’s verdict sends each file",br:[["Kept","MATCH — kept at sourcing, memo to come → “Kept” tab"],["Analysed","CONSIDER · MONITOR — memo done, no call → “Analysed” tab"],["To decide","CALL PENDING — Stan proposes a call, your YES/NO is awaited → “To decide” tab"],["Validated","CALL YES — you ruled YES → “Validated” tab"],["Ruled out","NO MATCH · PASS · CALL NO — Stan’s refusal, or your NO on a call → “Ruled out” tab"]],brNote:"A CALL goes through 3 states: CALL PENDING (the memo is DONE, Stan proposes the call — your decision is awaited) › CALL YES (you validate) › CALL NO (you rule out). PENDING never means “being analysed”: the analysis is already done.",vt:{MATCH:"MATCH — kept: it fits your criteria.","NO MATCH":"NO MATCH — ruled out by your criteria.","CALL PENDING":"CALL — Stan’s top pick: worth a YES/NO decision now.","CALL YES":"CALL YES — you ruled YES: the file joins “Validated”.","CALL NO":"CALL NO — you ruled NO: the file joins “Ruled out”.",CONSIDER:"CONSIDER — solid, worth a closer look.",MONITOR:"MONITOR — keep an eye on it, not a priority yet.",PASS:"PASS — not relevant right now."},vKept:"Kept",vOut:"Ruled out",learnLine:"Like Netflix, every 👍/👎 sharpens what Stan shows you next — you judge, it learns.",learnLink:"Tune my criteria →",funnelHint:"Find here all your automatically sourced targets in <b>evaluated</b>, then move the ones you want to contact into <b>validated</b>.",fhintClose:"Hide this hint",queueTitle:"Processing queue",queueDone:(e,a)=>`<b>${e} / ${a}</b> memos generated`,queueTomorrow:"UP NEXT — PROJECTED ORDER, RECOMPUTED EVERY MORNING",queueToday:"ANALYZED TODAY",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugConfigured:"Configured",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(e,a)=>`<b>${e}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:e=>`${e} screened`,alertTitle:"🔔 Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"YOUR ACQUISITION ANGLES",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarBusy:"🧬 Searching…",similarNote:"The kept ones enter your list at the next refresh.",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:e=>`updated ${e}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:e=>`updated ${e}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:e=>`Onboarding launched for ${e} — track progress in the cockpit`,rsOpen:"🔎 Find companies to evaluate",rsUrlPh:"paste the URL of an article, a video or a note",rsTextPh:"Paste the full article here",rsOr:"or",rsGo:"🔎 Summarize and find companies",rsHint:"SUMMARY · MIND MAP · COMPANIES",rsRunning:"Reading…",rsRunningVid:"Transcribing the video…",rsElapsed:e=>`${e}s`,rsNeed:"Paste a URL, or the full text of the article.",rsFound:e=>e?`${e} compan${e>1?"ies":"y"} found in this content.`:"No company named in this content.",rsLink:"See the published page ↗",rsPublishing:"Publishing the note…",rsPublishFail:"Note produced, page not published",rsTags:"TAGS",rsClose:"Close",rsMindmap:"MIND MAP",rsSource:"Source ↗",rsSaving:"Saving…",rsSaved:"✓ Saved to your cockpit",rsSavedIn:e=>`✓ Saved to ${e}'s notebook`,rsSaveFail:"Note produced, NOT saved",rsArchOpen:e=>`see the ${e} research run${e>1?"s":""} already launched`,rsArchTitle:"Research already launched",rsArchBack:"← all research runs",rsArchLoading:"Loading…",rsArchEmpty:"No research saved yet.",rsArchGone:"This research is no longer available.",rsRowCounts:(e,a)=>`${e} mentioned · ${a} to evaluate`,rsPub:"Published",rsPriv:"Not published",rsCited:"Companies mentioned",rsCitedHint:"Every company named in this content.",rsMatch:"Companies that could match",rsMatchHint:"Suggested from the content’s thesis — they are not necessarily named in it.",rsEvalOne:"⚡ Evaluate",rsAddAll:e=>`＋ Add all ${e} to the list`,rsNoCompanies:"No company in this content.",rsConclusion:"What it implies",rsCriteria:"Sourcing criteria",rsSources:"Dig deeper",groupEngine:"Engine",groupNone:"None",browse:e=>`Browse the ${e}`,chainAll:e=>`Evaluate the ${e}`,chainHint:"against your thesis, one after another",winMenu:"Period",datesShort:["Today","7 days","30 days","All"],colCompany:"COMPANY & DESCRIPTION",grpCount:(e,a)=>`${e} to send out of ${a} sourced`,emptyTab:"NO TARGET IN THIS TAB",emptyScope:"NO COMPANY IN THIS SCOPE",contWorld:"World",evalGoOn:e=>`⚡ Evaluate ${e}`,rowExtract:"🔎 Extract companies",toSendCtx:(e,a)=>`of ${e} in the edition${a>0?` (${a} without an identifiable company)`:""}`,grpCard:"today's card",grpMa:"M&A deals",grpLev:"Fundraising",grpNews:"News",grpNom:"News · Appointments",grpNewsOther:"News · Other",grpHire:"News · Hiring",edLabel:"in today's edition",edSplit:(e,a)=>`⚡ ${e} evaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} to explore`:""}`},Ui={fr:{...Cn.fr,...$i},en:{...Cn.en,..._i}},Hi=`.atl2{
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
.atl2 .bulk .side .hint{white-space:nowrap}`,Vi=`
/* coque : hauteur pilotée par le montage (page /carte, iframe onglet ⑤, démo home) */
.atl2{height:var(--atelier-h,calc(100dvh - 60px));display:block;position:relative;overflow:hidden;border-radius:inherit}
.atl2 .app{height:100%}
/* ── LA BARRE D'APERÇU EN HAUT, COLLANTE (17/08). Elle vivait en bas de page,
   dernier enfant : la déplacer en premier enfant est la moitié du correctif,
   l'autre moitié est ici. Le conteneur devient une colonne flex pour que la
   barre garde sa hauteur et que le cockpit prenne le reste. Rang 40 :
   au-dessus de la carte, qui monte à 20. */
.atl2:has(> .lockbar.on){display:flex;flex-direction:column;
  min-height:calc(100dvh - var(--pp-gap,60px))}
.atl2:has(> .lockbar.on) .app{flex:1 1 auto;min-height:0;height:auto;padding-bottom:8px}
/* RDV : collée EN BAS, juste au-dessus du footer (plus sous la nav). */
.atl2 .lockbar{position:sticky;top:auto;bottom:0;z-index:40;
  flex-wrap:wrap;margin:0;border-radius:0;margin-top:auto;
  box-shadow:0 -10px 28px -16px rgba(15,23,42,.5)}
body.pp-navfold .atl2 .lockbar{top:auto;bottom:0}
@media (max-width:760px){.atl2 .lockbar{top:auto;bottom:0}}
body.pp-desk:has(.atl2 .lockbar.on) footer{padding-bottom:84px}
/* ── CE QUI RESTE SOUS LA MAIN QUAND ON DESCEND (17/08 : « laisse le ticker
   sticky, et aussi les filtres essentiels quand on scroll »). La page s'allonge
   sur 3 400 px et laissait le direct comme l'en-tête de liste tout en haut,
   hors de portée : pour changer de période ou de mode il fallait remonter.
   ⚠️ Le composant Band ne pose AUCUN nœud — il n'enveloppe rien. Les
   sélecteurs doivent donc viser les racines réelles : .ticker (le direct,
   enfant direct de .app) et .listhead (le compte, les filtres actifs et
   les modes d'affichage). Les décalages sont cumulés — nav, puis barre
   d'aperçu, puis direct — sinon ils se recouvrent. */
/* ⚠️ LE FIL N'EST PAS ENFANT DE .app — mesuré : il vit dans .live-stack
   (le bloc sombre qui réunit le direct et la bande des jours). Mon premier
   sélecteur .app > .ticker ne matchait donc RIEN, d'où « le ticker n'est pas
   sticky ». On colle la PILE entière : le fil et les jours ensemble, comme
   ils sont dessinés. */
/* ⚠️ LE DIRECT N'EST PLUS COLLANT (17/08, après essai : « laisse le LIVE en haut
   et NON sticky »). Collé, il mangeait 48 px de hauteur en permanence et se
   superposait au reste ; en haut de page, il se lit une fois et laisse la place.
   La barre d'aperçu, elle, RESTE collante — c'est un appel à l'action, pas une
   information à consulter. */
/* ⚠️ L'EN-TÊTE COLLANT PASSAIT PAR-DESSUS LA FENÊTRE DE TIR (17/08 : « toutes
   les cibles avec un signal fort apparaissent SOUS les menus, c'est
   catastrophique »). C'est ma régression : rendre l'en-tête collant l'a sorti
   du flux, et la box des signaux — qui vient APRÈS lui dans le DOM — se
   retrouvait recouverte. Un élément collant doit laisser passer ce qui le suit.
   La box reçoit donc un rang supérieur et sa propre surface opaque : elle
   glisse SOUS l'en-tête quand on défile, jamais dessous à l'arrêt. */
.atl2 .listhead{position:sticky;z-index:24;background:var(--panel);
  top:var(--pp-gap,60px)}
.atl2 .sigstrip,.atl2 .since{position:relative;z-index:26}
body.pp-navfold .atl2 .listhead{top:26px}
@media (max-width:760px){.atl2 .listhead{position:static}}
.atl2 .lockbar .lb-c{font-size:12px;color:#C7D5E5}
.atl2 .lockbar .lb-c a{color:#fff;font-weight:700;text-decoration:none;white-space:nowrap}
.atl2 .lockbar .lb-c a:hover{text-decoration:underline}

/* ── LIVE + jours collés (/cibles) ────────────────────────────────────────
   « exactement le même look & feel que les jours collés au LIVE dans
   /actualites » (Antoine, 15/08) : UNE seule surface d'encre, le ticker et la
   bande des jours dedans, un filet entre les deux — le miroir de .pp-band
   (src/live/core.ts). L'ancienne surface claire est ABANDONNÉE : elle faisait
   deux bandeaux différents pour le même objet. */
.atl2 .live-stack{flex:none;display:flex;flex-direction:column;background:#0B1220;
  border-bottom:1px solid var(--line,#e2e8f0)}
/* /cibles : le LIVE reste sous la main quand on descend (25/08).
   /actualites (.ops) : le fil n'est PAS collant — il se lit une fois. */
.atl2.cibles .live-stack{position:sticky;z-index:27;top:var(--pp-gap,60px)}
body.pp-navfold .atl2.cibles .live-stack{top:26px}
.atl2.cibles .listhead{top:calc(var(--pp-gap,60px) + 48px)}
body.pp-navfold .atl2.cibles .listhead{top:74px}
.atl2 .live-stack--cibles .ticker{border-bottom:1px solid #1E2C41;height:48px}
.atl2 .ticker .dytog{flex:none;width:40px;height:100%;border:0;border-left:1px solid #1E2C41;
background:transparent;color:#C5D4E3;cursor:pointer;display:grid;place-items:center}
.atl2 .ticker .dytog:hover{background:#16233A;color:#fff}
.atl2 .ticker .dytog[aria-pressed="true"]{color:#7FD8A6;background:#0E1A2C}
.atl2 .live-stack--cibles .thesis-days{border-top:0;padding-top:0}
/* LES PUCES DU LIVE (15/08) — « 48 » vit à côté de « Tout », plus dans un
   bloc « 48 ouverts » qui mangeait la largeur du fil. Même grammaire que le
   bandeau public (.pp-fil / .pp-film de src/live/core.ts). */
.atl2 .ticker .lbl .cnt{display:none}
.atl2 .tkfil{flex:none;position:relative;display:flex;align-items:center;padding:0 10px;
  border-right:1px solid #1E293B}
.atl2 .tkfilb{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);
  font-size:9px;letter-spacing:.08em;font-weight:600;color:#D5E3F0;background:transparent;
  border:1px solid #1E2C41;border-radius:4px;padding:5px 9px;cursor:pointer;white-space:nowrap}
.atl2 .tkfilb:hover{color:#fff;border-color:#5FD39B}
.atl2 .tkfilb b,.atl2 .tkfilm button b{font-family:var(--mono);font-size:10px;font-weight:700;
  letter-spacing:0;color:#fff;background:rgba(255,255,255,.16);border-radius:3px;padding:1px 6px}
.atl2 .tkfilb b{background:#0E8A4F}
.atl2 .tkfilm{position:absolute;top:calc(100% + 4px);left:0;z-index:60;min-width:180px;
  display:flex;flex-direction:column;background:#0B1220;border:1px solid #1E2C41;
  border-radius:8px;padding:4px;box-shadow:0 16px 40px rgba(0,0,0,.45)}
.atl2 .tkfilm[hidden]{display:none!important}
.atl2 .tkfilm button{display:flex;align-items:center;justify-content:space-between;gap:16px;
  text-align:left;font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;font-weight:600;
  color:#D5E3F0;background:transparent;border:0;border-radius:5px;padding:8px 10px;
  cursor:pointer;white-space:nowrap}
.atl2 .tkfilm button:hover{background:#16233A;color:#fff}
.atl2 .tkfilm button[aria-pressed="true"]{background:#0E8A4F;color:#fff}
/* Ce que le LIVE regroupe, en tête du menu (16/08) : la SEULE ligne du
   déroulant qui se lit, donc la seule qui revient à la ligne. */
/* L'ACHETEUR sur la ligne (17/08) : discret, mais cliquable — c'est une
   entrée dans le cockpit, pas une décoration. */
.atl2 .racq{margin-left:8px;flex:0 0 auto;font-family:var(--mono);font-size:10.5px;
  font-weight:700;letter-spacing:.02em;color:#5B6B7F;background:transparent;border:0;
  border-bottom:1px dashed #CBD5E1;padding:0 0 1px;cursor:pointer;white-space:nowrap}
.atl2 .racq:hover{color:#0A6B3D;border-bottom-color:#0A6B3D}
.atl2 .acqchip{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);
  font-size:10.5px;font-weight:700;letter-spacing:.04em;color:#0A6B3D;background:#F0FDF4;
  border:1px solid #BBF7D0;border-radius:999px;padding:5px 10px}
.atl2 .acqchip button{border:0;background:none;color:#0A6B3D;cursor:pointer;
  font:inherit;padding:0;opacity:.7}
.atl2 .acqchip button:hover{opacity:1}
.atl2 .tkfilscope{display:block;max-width:290px;padding:9px 10px 10px;margin-bottom:3px;
  border-bottom:1px solid #1E2C41;font-family:var(--mono);font-size:9.5px;line-height:1.6;
  letter-spacing:.03em;font-weight:600;color:#9DB2CA;white-space:normal;text-transform:none}
/* les deux axes : rubriques d'édition, puis signaux ouverts */
.atl2 .tkfilg{font-family:var(--mono);font-size:8px;letter-spacing:.16em;font-weight:600;
  color:#5A6E85;padding:9px 10px 4px}
/* elle reste sur téléphone : c'est le seul compteur de la barre */
/* UN ONGLET VIDE MÈNE QUELQUE PART : le chiffre, la phrase, la sortie.
   La liste ne doit pas s'effondrer à 0 px quand elle est vide, sinon son
   contenu déborde par-dessus la ligne d'apprentissage et lui donne le clic. */
.atl2 .list.list-empty{flex:none;min-height:190px;overflow:visible}
.atl2 .void.void-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:8px;padding:34px 18px 38px;text-align:center}
.atl2 .void-empty b{font-size:16px;font-weight:700;letter-spacing:-.01em;color:var(--ink,#0F172A);
  text-transform:none}
.atl2 .void-empty span{font-size:13.5px;color:var(--muted,#64748B);text-transform:none;
  letter-spacing:0}
.atl2 .void-empty .abtn{margin-top:4px;padding:10px 18px;font-size:13px;font-weight:700;
  color:#fff;background:var(--ink,#0F172A);border:1.5px solid var(--ink,#0F172A);
  border-radius:var(--ra,8px);cursor:pointer}
.atl2 .void-empty .abtn:hover{background:#1E293B;border-color:#1E293B}
/* brief sous liste : fluide dans le scroll app */
.atl2 .app > .thesis-brief{flex:none}
/* Afficher plus — vrai bouton encre (pas un lien vert) */
.atl2 .moregrp{display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:5px;width:100%;padding:18px 16px 20px;background:var(--panel,#fff);
  border:0;border-top:1px solid var(--line);cursor:pointer;font:inherit}
.atl2 .moregrp .more-label{display:inline-flex;align-items:center;justify-content:center;
  min-width:220px;padding:12px 22px;font-size:13.5px;font-weight:700;letter-spacing:-.01em;
  color:#fff;background:var(--ink,#0F172A);border:1.5px solid var(--ink,#0F172A);
  border-radius:var(--ra,8px);transition:background .12s,border-color .12s}
.atl2 .moregrp:hover .more-label{background:#1E293B;border-color:#1E293B}
.atl2 .moregrp .more-meta{font-family:var(--mono);font-size:10.5px;font-weight:600;
  letter-spacing:.06em;color:var(--dim,#94A3B8)}

/* ── retours Antoine 15/08 : cockpit = LA surface de lecture ─────────────── */
/* « ⚡ Évaluer {nom} » sur chaque ligne : libellé ellipsé, jamais de casse */
.atl2 .rev{min-width:0}
.atl2 .rev .lbl{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
/* lignes ACTUALITÉ : « faut écrire ⚡ Évaluer X sinon on comprend plus rien »
   (15/08 soir 4) — les DEUX gestes en toutes lettres, EMPILÉS dans la
   cellule d'action, plus jamais d'icône nue (ex-stylesPatch.ts, refusionné) */
.atl2 .cell.cell-duo{display:flex;flex-direction:column;align-items:stretch;gap:5px}
.atl2 .cell.cell-duo .rev{flex:none;width:100%;min-width:0}
/* pistes d'action élargies (le nom entre dans le bouton) — reprises des
   gabarits EFFECTIFS styles.gen.ts:1375/1378/1381, en prenant sur le nom */
.atl2 .row,.atl2 .cols{grid-template-columns:11px 30px minmax(180px,1fr) 84px 78px 186px 200px}
@media (max-width:1440px){
.atl2 .app:not(.pipe) .row,.atl2 .app:not(.pipe) .cols{grid-template-columns:11px 30px minmax(170px,1fr) 80px 180px 196px}}
@media (max-width:1200px){
.atl2 .app:not(.pipe) .row,.atl2 .app:not(.pipe) .cols{grid-template-columns:11px 30px minmax(160px,1fr) 174px 188px}}
.atl2 .app.pipe .row,.atl2 .app.pipe .cols{grid-template-columns:11px 30px minmax(175px,1fr) 72px 66px 168px 130px 42px 138px 48px}
@media (max-width:1440px){
.atl2 .app.pipe .row,.atl2 .app.pipe .cols{grid-template-columns:11px 30px minmax(165px,1fr) 70px 166px 130px 42px 138px 50px}}
@media (max-width:1200px){
.atl2 .app.pipe .row,.atl2 .app.pipe .cols{grid-template-columns:11px 30px minmax(150px,1fr) 160px 126px 40px 134px 50px}}
/* ── LE DÉPLIÉ OPS, grammaire unique (carte blanche 15/08 soir) ───────────
   Texte à gauche (mesure de lecture), carte sociale à COLONNE FIXE à droite,
   une rangée de méta en pastilles mono, une rangée d'actions. Rythme calme :
   fond panel2, panneaux blancs, filets doux, rayons 10. */
.atl2 .row.on+.card{display:grid;grid-template-columns:1fr 300px;gap:20px;padding-top:14px}
.atl2 .card.ops-open{display:grid!important;grid-template-columns:minmax(0,1fr) 340px;
  justify-content:stretch;gap:36px;align-items:start;padding:22px 28px 26px;background:#FBFCFE;
  border-bottom:1px solid var(--line)}
@media (max-width:1000px){.atl2 .card.ops-open{grid-template-columns:1fr;gap:18px;padding:18px 16px 20px}}
.atl2 .ops-open .oc-main{min-width:0;max-width:68ch}
/* le décryptage : titre fort, source discrète, prose de lecture */
.atl2 .ops-open .ed-decrypt-b{margin:0;padding:0;background:none;border:0}
.atl2 .card .ed-decrypt-b h4{margin:2px 0 6px;font-size:17px;font-weight:700;
  line-height:1.3;letter-spacing:-.02em;color:var(--ink)}
.atl2 .card .ed-decrypt-b .art-srcline{margin:0 0 12px;font-family:var(--mono);
  font-size:9.5px;letter-spacing:.06em;color:var(--dim)}
.atl2 .card .ed-decrypt-b .art-srcline a{color:var(--dim)}
.atl2 .card .ed-decrypt-b p{margin:0 0 11px;font-size:14px;line-height:1.68;
  color:#3F4E61}
.atl2 .card .ed-decrypt-b p:last-child{margin-bottom:0}
.atl2 .card .ed-decrypt-b em{color:#5B6B7F}
.atl2 .card .ed-decrypt-b a{color:var(--brand-d,#0A6B3D)}
/* pas de décryptage : le titre plein, jamais tronqué */
.atl2 .ops-open .oc-head{margin:2px 0 0;font-size:15.5px;line-height:1.5;
  font-weight:500;color:var(--ink)}
/* UNE rangée de méta — pastilles monospace calmes */
.atl2 .ops-open .oc-meta{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 0}
/* les chips sont des FILTRES (16/08 : « quand je clique sur un tag, ça
   personnalise le cockpit ») — même habit span/button, la main en plus */
.atl2 .ops-open .oc-meta span,.atl2 .ops-open .oc-meta button{
  font:inherit;font-family:var(--mono);font-size:9px;
  letter-spacing:.08em;text-transform:uppercase;color:#64748B;background:#F1F5F9;
  border:1px solid var(--line);border-radius:5px;padding:4px 8px}
.atl2 .ops-open .oc-meta button{cursor:pointer}
.atl2 .ops-open .oc-meta button:hover{color:var(--ink);border-color:var(--ink)}
.atl2 .ops-open .oc-meta .oc-amt{color:var(--ink);font-weight:700;background:#fff}
.atl2 .card .tg button{font:inherit;font-size:10px;background:var(--panel3);
  border:1px solid transparent;border-radius:var(--rs);padding:3px 8px;
  color:var(--muted);cursor:pointer}
.atl2 .card .tg button:hover{color:var(--ink);border-color:var(--ink)}
/* UNE rangée d'actions — un CTA plein, un ghost, la source en lien mono */
.atl2 .ops-open .oc-acts{display:flex;flex-wrap:wrap;align-items:center;
  gap:10px;margin:16px 0 0}
.atl2 .ops-open .oc-cta{background:var(--brand);color:#fff;border:0;
  border-radius:8px;padding:10px 16px;font:inherit;font-size:12.5px;
  font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .ops-open .oc-cta:hover{background:var(--brand-d,#0A6B3D)}
.atl2 .ops-open .oc-ghost{background:#fff;border:1px solid var(--line2);
  border-radius:8px;padding:10px 14px;font:inherit;font-size:12.5px;
  font-weight:600;color:var(--ink);cursor:pointer;white-space:nowrap}
.atl2 .ops-open .oc-ghost:hover{border-color:var(--ink)}
.atl2 .ops-open .oc-src{margin-left:auto;font-family:var(--mono);font-size:9.5px;
  letter-spacing:.06em;color:var(--dim);text-decoration:none;white-space:nowrap}
.atl2 .ops-open .oc-src:hover{color:var(--brand-d,#0A6B3D)}
/* la carte : colonne fixe, cadre doux, clic = grand (déjà câblé) */
.atl2 .ops-open .oc-side{min-width:0}
.atl2 .ops-open .oc-side>div{margin-top:0!important}
@media (max-width:1000px){.atl2 .ops-open .oc-side{max-width:420px}}

/* ── LIVE : poste de travail (liste | lecture) ───────────────────────────
   La page ne s'allonge plus : le cockpit tient l'écran, la liste défile,
   le décryptage occupe la colonne de droite (plus d'île 62ch dans le vide). */
.atl2.ops .app{min-height:0}
.atl2.ops .app > .listhead,
.atl2.ops .app > .since,
.atl2.ops .app > .sigstrip{flex:none}
.atl2.ops .listhead{z-index:28}
.atl2.ops .readpane{z-index:20}
.atl2.ops .desk{display:grid;
  grid-template-columns:minmax(0,1fr) minmax(280px,38%);
  align-items:start;border-top:1px solid var(--line);background:var(--panel)}
.atl2.ops .desk-list{min-width:0;display:flex;flex-direction:column;overflow:hidden}
.atl2.ops .desk-list .list{flex:none;overflow:hidden;max-width:100%}
.atl2.ops .desk-list .list.maxi{display:grid;grid-template-columns:1fr;gap:10px;
  padding:10px 12px 20px;background:#F7F9FB}
@media (min-width:1100px){.atl2.ops .desk-list .list.maxi{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}}
.atl2.ops .desk-list .list.maxi .grp-h{grid-column:1/-1;position:static;background:transparent;
  border:0;padding:12px 2px 0;margin:0}
.atl2.ops .desk-list .dcard.dops .dimg{display:none}
.atl2.ops .desk-list .list.ligne{padding:6px 10px 16px}
.atl2.ops .desk-list .dcard.sel{box-shadow:inset 4px 0 0 #0E8A4F;outline:2px solid #0E8A4F;
  outline-offset:-2px}
.atl2.ops .desk-list .cols{flex:none;position:sticky;top:0;z-index:2;
  background:var(--panel)}
/* dans le split, la ligne = drapeau + nom + action. Montant / stade / signal
   vivent dans le panneau (sinon le nom se retrouve à 4 lettres). */
.atl2.ops .desk-list .row,
.atl2.ops .desk-list .cols{
  grid-template-columns:11px 28px minmax(0,1fr) minmax(132px,168px)!important}
.atl2.ops .desk-list .c-amt,
.atl2.ops .desk-list .c-stade,
.atl2.ops .desk-list .c-sig,
.atl2.ops .desk-list .h-amt,
.atl2.ops .desk-list .h-stade,
.atl2.ops .desk-list .h-sig{display:none!important}
.atl2.ops .desk-list .nd{min-width:0}
.atl2.ops .desk-list .rnm,
.atl2.ops .desk-list .rds{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2.ops .row,
.atl2.ops .dcard{scroll-margin-top:calc(104px + var(--demand-h,56px) + var(--listhead-h,52px) + 8px)}
.atl2.ops .row.sel,.atl2.ops .row.sel.on,
.atl2.cibles .row.sel,.atl2.cibles .row.sel.on,
.atl2.ops .demand.pair{background:#DFF3E6;
  box-shadow:inset 4px 0 0 #0E8A4F;outline:none}
.atl2.ops .row.sel .rnm,.atl2.cibles .row.sel .rnm{font-weight:750;color:#0A6B3D}
.atl2.ops .row.sel .cell .rev,.atl2.cibles .row.sel .cell .rev{box-shadow:none}
.atl2.ops .demand.pair .dfield input{color:#0A6B3D;font-weight:700}
.atl2.ops .row.sel.echo,.atl2.ops .demand.pair.echo{
  animation:pp-echo .85s ease}
@keyframes pp-echo{
  0%{background:#B7E6C8;box-shadow:inset 4px 0 0 #0E8A4F,0 0 0 0 rgba(14,138,79,.35)}
  55%{background:#DFF3E6;box-shadow:inset 4px 0 0 #0E8A4F,0 0 0 6px rgba(14,138,79,.12)}
  100%{background:#DFF3E6;box-shadow:inset 4px 0 0 #0E8A4F,0 0 0 0 rgba(14,138,79,0)}}
/* UN SEUL scroll = la fenêtre. L'encadré colle, mais overflow:visible :
   la molette au-dessus reste le défilement natif de la page (pas un
   preventDefault JS, trop lent). */
body.pp-desk .atl2.ops,
body.pp-desk .atl2.ops .app{height:auto!important;max-height:none!important;
  overflow:visible!important}
body.pp-desk .atl2.ops .list,
body.pp-desk .atl2.ops .desk-list .list{flex:none!important;max-height:none!important;
  overflow:visible!important}
body.pp-desk .atl2.ops .desk,
body.pp-desk .atl2.ops .desk-list,
body.pp-desk .atl2.ops .grp{
  overflow:visible!important;overflow-x:visible!important;overflow-y:visible!important}
.atl2.ops .desk-list{overflow:visible}
.atl2.ops .readpane{min-width:0;position:sticky;align-self:start;z-index:35;
  top:calc(104px + var(--demand-h,56px));
  min-height:calc(100dvh - 104px - var(--demand-h,56px));
  height:auto;max-height:none;overflow:visible;
  background:#F7F9FB;border-left:1px solid var(--line);
  box-shadow:-1px 0 0 var(--line,#e2e8f0)}
.atl2.ops .readpane .zoom,
.atl2.ops .readpane .zoom-pipe,
.atl2.ops .readpane .readpane-empty{position:static;max-height:none;
  overflow:visible;background:transparent}
.atl2.ops .readpane .zoom-k{position:static;margin:0 0 10px;padding:0}
.atl2.ops .readpane .card.ops-open{display:flex!important;flex-direction:column;
  grid-template-columns:none;justify-content:stretch;gap:0;
  padding:28px 32px 40px;background:transparent;border-bottom:0}
.atl2.ops .readpane .oc-main{max-width:68ch}
.atl2.ops .readpane .oc-side{margin-top:22px;max-width:340px}
.atl2.ops .readpane-empty{margin:48px 32px;font-size:14.5px;line-height:1.55;color:#64748B;
  max-width:32ch}
/* carte plein cadre : les vides océan sont DES CARTES (édition + filtres)
   posées PAR-DESSUS, plus un rail qui rétrécit le planisphère. */
.atl2.ops .stage:not(.folded){display:block!important;position:relative;
  flex-direction:unset;--rail:384px}
.atl2.ops .stage:not(.folded) .fpanel{z-index:5;max-height:calc(100% - 24px);
  border-radius:12px;overflow:auto}
.atl2.ops .map-pulse{position:absolute;z-index:4;left:12px;top:12px;
  width:min(220px,28%);text-align:left;padding:14px 16px 12px;
  background:rgba(255,255,255,.93);backdrop-filter:blur(12px);
  border:1px solid rgba(15,23,42,.10);border-radius:12px;
  box-shadow:0 10px 32px rgba(11,18,32,.10);cursor:pointer;font:inherit;color:inherit}
.atl2.ops .map-pulse:hover{border-color:rgba(14,138,79,.45)}
.atl2.ops .map-pulse.on{border-color:#0E8A4F;box-shadow:0 0 0 2px rgba(14,138,79,.18),
  0 10px 32px rgba(11,18,32,.10)}
.atl2.ops .map-pulse em{display:block;font-style:normal;font-family:var(--mono);
  font-size:9.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
  color:#0E8A4F;margin:0 0 6px}
.atl2.ops .map-pulse b{font-size:32px;font-weight:800;letter-spacing:-.04em;
  line-height:1;color:var(--ink)}
.atl2.ops .map-pulse>span{display:block;font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;
  text-transform:uppercase;color:var(--dim);margin:4px 0 10px}
.atl2.ops .map-pulse ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:5px}
.atl2.ops .map-pulse li{font-size:12.5px;color:#334155;line-height:1.35}
.atl2.ops .stage:not(.folded) .fbar{position:absolute;z-index:4;right:12px;top:12px;
  bottom:12px;width:min(360px,38%);height:auto!important;max-height:calc(100% - 24px);
  box-sizing:border-box;padding:12px 14px;overflow-y:auto;overscroll-behavior:auto;
  background:rgba(255,255,255,.94);backdrop-filter:blur(12px);
  border:1px solid rgba(15,23,42,.10);border-radius:12px;
  box-shadow:0 10px 32px rgba(11,18,32,.10)}
.atl2.ops .zoom{padding:22px 26px 36px;max-width:40rem}
.atl2.ops .zoom-k{font-family:var(--mono);font-size:10px;font-weight:600;
  letter-spacing:.12em;text-transform:uppercase;color:#0E8A4F;margin:0 0 10px}
.atl2.ops .zoom-h{margin:0;font-size:19px;font-weight:700;letter-spacing:-.03em;
  line-height:1.28;color:var(--ink)}
.atl2.ops .zoom .ed-decrypt-b{margin:0}
.atl2.ops .zoom-body{margin:14px 0 0;padding-top:14px;border-top:1px solid var(--line)}
.atl2.ops .zoom-body h4{margin:0 0 10px;font-size:16px;font-weight:700;
  letter-spacing:-.02em;line-height:1.3}
.atl2.ops .zoom-srcbox{display:flex;flex-direction:column;align-items:flex-start;
  gap:6px;margin:18px 0 0;padding:12px 14px;background:#fff;
  border:1px solid #E8EEF4;border-radius:12px}
.atl2.ops .zoom-src{display:inline-block;margin:0;font-family:var(--mono);
  font-size:11px;letter-spacing:.04em;color:#64748B;text-decoration:none;
  border-bottom:1px solid #E2E8F0}
.atl2.ops .zoom-src:hover{color:#0A6B3D;border-color:#0A6B3D}
.atl2.ops .zoom-src-art{color:#0A6B3D;font-weight:700;border-color:#BBF7D0}
.atl2.ops .zoom-meta{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 0}
.atl2.ops .zoom-meta button,.atl2.ops .zoom-meta span{
  font:inherit;font-family:var(--mono);font-size:9px;letter-spacing:.08em;
  text-transform:uppercase;color:#64748B;background:#F1F5F9;border:1px solid var(--line);
  border-radius:5px;padding:4px 8px}
.atl2.ops .zoom-meta button{cursor:pointer}
.atl2.ops .zoom-meta button:hover{color:var(--ink);border-color:var(--ink)}
.atl2.ops .zoom-meta .oc-amt{color:var(--ink);font-weight:700;background:#fff}
.atl2.ops .zoom-card{margin:16px 0 0;width:100%}
.atl2 .zoom-card-host{width:100%;margin:0;line-height:0;border:1px solid #E2E8F0;
  border-radius:10px;overflow:hidden;cursor:zoom-in;background:#fff}
.atl2.ops .zoom-cta,.atl2.ops .zoom-acts{display:flex;flex-direction:column;
  gap:10px;margin:20px 0 0;padding-top:16px;border-top:1px solid var(--line)}
.atl2.ops a.zp-go{text-decoration:none;color:inherit;box-sizing:border-box}
.atl2.ops .zp-go{display:flex;align-items:center;gap:12px;width:100%;
  text-align:left;background:#0E8A4F;color:#fff;border:0;border-radius:12px;
  padding:12px 14px;font:inherit;cursor:pointer}
.atl2.ops .zp-go:hover{background:#0A6B3D}
.atl2.ops .zp-go:disabled{opacity:.55;cursor:default}
.atl2.ops .zp-go.ghost{background:#fff;color:var(--ink);border:1px solid #D7E2EC}
.atl2.ops .zp-go.ghost:hover{border-color:#0E8A4F;background:#F4FBF6}
.atl2.ops .zp-ico{flex:none;width:28px;height:28px;border-radius:8px;
  display:grid;place-items:center;background:rgba(255,255,255,.16);font-size:14px}
.atl2.ops .zp-go.ghost .zp-ico{background:#F1F5F9}
.atl2.ops .zp-txt{display:flex;flex-direction:column;gap:1px;min-width:0}
.atl2.ops .zp-txt b{font-size:13.5px;font-weight:700;letter-spacing:-.01em}
.atl2.ops .zp-txt em{font-style:normal;font-size:11.5px;opacity:.78}
.atl2.ops .zp-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
@media (max-width:1100px){.atl2.ops .zp-row{grid-template-columns:1fr}}
.atl2.ops .zp-sec{display:flex;flex-direction:column;align-items:flex-start;gap:2px;
  text-align:left;background:#fff;border:1px solid #E2E8F0;border-radius:12px;
  padding:11px 12px;font:inherit;cursor:pointer;min-width:0}
.atl2.ops .zp-sec:hover{border-color:#0E8A4F;background:#F8FBF9}
.atl2.ops .zp-k{font-family:var(--mono);font-size:9.5px;font-weight:700;
  letter-spacing:.08em;text-transform:uppercase;color:#0E8A4F}
.atl2.ops .zp-v{font-size:13px;font-weight:650;color:var(--ink);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}
.atl2.ops .zp-sec em{font-style:normal;font-size:11.5px;color:#64748B}
.atl2 .arttog{background:none;border:1px solid var(--line);border-radius:6px;
  font:inherit;font-size:10.5px;font-weight:600;color:var(--muted);
  padding:5px 9px;cursor:pointer;white-space:nowrap;margin-left:8px}
.atl2 .arttog:hover{color:var(--ink);border-color:var(--ink)}
.atl2 .arttog[aria-pressed="true"]{color:var(--brand-d);border-color:var(--brand);
  background:var(--brand-l,#F0FDF4)}
.atl2 .demand .drow.has-url .dfield input{border-color:rgba(14,138,79,.45)!important}
/* Toute la ligne « Collez une URL » colle sous LIVE, pas seulement le champ. */
body.pp-desk .atl2.ops .eval-stick{position:sticky;top:104px;z-index:36;
  align-self:flex-start;width:100%;background:var(--panel2,#fff);
  box-shadow:0 1px 0 var(--line,#e2e8f0)}
body.pp-desk .atl2.ops .readpane{top:calc(104px + var(--demand-h,56px));
  min-height:calc(100dvh - 104px - var(--demand-h,56px));
  height:auto;max-height:none;overflow:visible}
.atl2.ops .demand{scroll-margin-top:104px;background:transparent}
.atl2.ops .demand.pair{border-radius:0}
/* Le bandeau LISTE / filtres reste à GAUCHE : sinon il recouvre Radar / titre. */
body.pp-desk .atl2.ops .listhead,
body.pp-desk .atl2.ops .listhead.mapoff{top:calc(104px + var(--demand-h,56px))!important;
  z-index:34;width:62%;max-width:calc(100% - 280px);box-sizing:border-box}
.atl2.ops .readpane.is-edito,
body.pp-desk .atl2.ops .readpane.is-edito{
  position:static;top:auto;min-height:0;height:auto;max-height:none;
  align-self:stretch}
.atl2 .demand .drow.flash .dfield input{border-color:rgba(14,138,79,.55)!important}
@keyframes pp-prefill{0%{background:rgba(14,138,79,.10)}100%{background:transparent}}
.atl2 .demand .drow.flash{animation:pp-prefill .9s ease}
/* carte plus basse sur LIVE : la liste+lecture gardent la main */
.atl2.ops .mapzone{height:320px;min-height:320px;max-height:320px}
.atl2.ops .mapzone svg{height:320px!important;max-height:320px!important;width:100%}
@media (min-width:1400px){
  .atl2.ops .mapzone{height:380px;min-height:380px;max-height:380px}
  .atl2.ops .mapzone svg{height:380px!important;max-height:380px!important}}
@media (min-width:1800px){
  .atl2.ops .mapzone{height:420px;min-height:420px;max-height:420px}
  .atl2.ops .mapzone svg{height:420px!important;max-height:420px!important}}
@media (max-width:1000px){
  .atl2.ops .map-pulse,.atl2.ops .stage:not(.folded) .fbar{position:static;width:auto;
    max-height:none;bottom:auto;box-shadow:none;border-radius:0;backdrop-filter:none}
  .atl2.ops .stage:not(.folded){display:flex!important;flex-direction:column}}
body.pp-desk .atl2.ops .listhead,
body.pp-desk .atl2.ops .app:has(.stage.folded) .listhead,
body.pp-desk .atl2.ops .app:has(> .fzone:has(.stage.folded)) .listhead{
  top:calc(104px + var(--demand-h,56px))}
.atl2.ops .zoom-body .ed-box{margin:0 0 22px;padding:0;background:none;border:0}
.atl2.ops .zoom-body .ed-box > h2{display:flex;align-items:baseline;gap:8px;
  margin:20px 0 10px;font-size:12px;font-weight:700;letter-spacing:.04em;
  text-transform:uppercase;color:#0E8A4F}
.atl2.ops .zoom-body .ed-box:first-child > h2{margin-top:0}
.atl2.ops .zoom-body .ed-decrypt{margin:0 0 16px}
.atl2.ops .zoom-body .ed-ecartes,.atl2.ops .zoom-body .ed-rest,
.atl2.ops .zoom-body .art-allops{display:none}
.atl2.ops .ckdock{flex:none;display:flex;flex-direction:column;gap:0;
  border-top:1px solid var(--line);background:#F7F9FB}
.atl2.ops .ckdock-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;
  padding:14px 28px;border-bottom:1px solid var(--line)}
.atl2.ops .ckdock-row:last-child{border-bottom:0}
.atl2.ops .ckdock-k{flex:1 1 220px;min-width:0}
.atl2.ops .ckdock-k b{display:block;font-size:14px;font-weight:700;letter-spacing:-.01em;
  color:var(--ink)}
.atl2.ops .ckdock-k span{display:block;margin-top:2px;font-size:12.5px;color:#64748B}
.atl2.ops .ckdock-act{display:flex;flex-wrap:wrap;align-items:center;gap:8px;flex:1 1 340px}
.atl2.ops .ckdock-act input[type=email]{flex:1 1 200px;min-width:160px;height:40px;
  padding:0 12px;border:1px solid var(--line);border-radius:8px;background:#fff;
  font:inherit;font-size:14px}
.atl2.ops .ckdock-act button{height:40px;padding:0 16px;border:0;border-radius:8px;
  background:var(--brand,#0E8A4F);color:#fff;font:inherit;font-size:13.5px;
  font-weight:700;cursor:pointer}
.atl2.ops .ckdock-act button:hover{background:#0A6B3D}
.atl2.ops .ckdock-act a{font-size:12.5px;color:#64748B;text-decoration:none;
  border-bottom:1px solid #E2E8F0}
.atl2.ops .ckdock-act a:hover{color:var(--ink)}
.atl2.ops .ckdock-hp{position:absolute;left:-9999px;height:0;width:0;border:0;padding:0}
.atl2.ops .ckdock-msg{flex:1 0 100%;margin:0;font-size:12.5px;color:#0A6B3D}
.atl2.ops .ckdock-msg.err{color:#DC2626}
.atl2.ops .ckdock-site .ur{display:flex;gap:8px;margin:0;max-width:none;
  justify-content:flex-start;width:100%}
.atl2.ops .ckdock-site .uf{display:flex;align-items:center;gap:8px;flex:1;height:40px;
  padding:0 12px;background:#fff;border:1px solid var(--line);border-radius:8px}
.atl2.ops .ckdock-site .uf input{flex:1;border:0;outline:none;font:inherit;font-size:14px;
  background:none;min-width:0}
.atl2.ops .ckdock-site .ub{flex:none;height:40px;padding:0 16px;border:0;border-radius:8px;
  background:var(--brand,#0E8A4F);color:#fff;font:inherit;font-size:13.5px;font-weight:700;
  cursor:pointer;white-space:nowrap}
.atl2.ops .ckdock-site .ub:hover{background:#0A6B3D}
.atl2.ops .ckdock-site .usug{display:flex;gap:6px;margin-top:6px;flex-wrap:wrap}
@media (max-width:1000px){
  .atl2.ops .desk{grid-template-columns:1fr;grid-template-rows:auto auto}
  .atl2.ops .readpane,.atl2.ops .readpane.is-edito,
  body.pp-desk .atl2.ops .readpane,body.pp-desk .atl2.ops .readpane.is-edito{
    position:relative;top:auto;height:auto;min-height:0;max-height:none;
    overflow:visible;border-left:0;border-top:1px solid var(--line);
    align-self:stretch}
  .atl2.ops .readpane .card.ops-open{padding:20px 18px 28px}
  body.pp-desk .atl2.ops .listhead,body.pp-desk .atl2.ops .listhead.mapoff{
    width:100%;max-width:none}
  .atl2.ops .desk-list .row,
  .atl2.ops .desk-list .cols{
    grid-template-columns:11px 26px minmax(0,1fr) minmax(108px,140px)!important}}

/* ── /cibles : même poste liste | lecture, page qui défile, panneau collé ─ */
.atl2.cibles .desk{display:grid;grid-template-columns:minmax(360px,1fr) minmax(320px,38%);
  align-items:start;border-top:1px solid var(--line);background:var(--panel)}
.atl2.cibles .desk-list{min-width:0}
.atl2.cibles .desk-list .list{overflow:visible;flex:none;max-height:none}
.atl2.cibles .desk-list .list.maxi{display:grid;grid-template-columns:1fr;gap:10px;
  padding:10px 12px 20px;background:#F7F9FB}
@media (min-width:720px){.atl2.cibles .desk-list .list.maxi{grid-template-columns:1fr 1fr}}
.atl2.cibles .desk-list .list.maxi .grp-h{grid-column:1/-1;position:static;background:transparent;
  border:0;padding:12px 2px 0}
.atl2.cibles .desk-list .list.ligne{padding:6px 10px 16px}
.atl2.cibles .desk-list .dcard.sel{box-shadow:inset 4px 0 0 #0E8A4F;outline:2px solid #0E8A4F;
  outline-offset:-2px}
.atl2.cibles .desk-list .row,
.atl2.cibles .desk-list .cols{
  grid-template-columns:11px 28px minmax(0,1fr) minmax(120px,168px) minmax(110px,150px) 48px!important}
.atl2.cibles .desk-list .c-amt,
.atl2.cibles .desk-list .c-stade,
.atl2.cibles .desk-list .c-sig,
.atl2.cibles .desk-list .c-sc,
.atl2.cibles .desk-list .h-amt,
.atl2.cibles .desk-list .h-stade,
.atl2.cibles .desk-list .h-sig,
.atl2.cibles .desk-list .h-sc{display:none!important}
.atl2.cibles .readpane{position:sticky;z-index:20;align-self:start;
  top:calc(var(--pp-gap,60px) + 48px);
  max-height:none;overflow:visible;overscroll-behavior:auto;
  background:#F7F9FB;border-left:1px solid var(--line);min-width:0}
body.pp-navfold .atl2.cibles .readpane{top:74px}
body.pp-desk .atl2.cibles .eval-stick{position:sticky;z-index:36;
  top:calc(var(--pp-gap,60px) + 48px);align-self:flex-start;width:100%;
  background:var(--panel2,#fff);box-shadow:0 1px 0 var(--line,#e2e8f0)}
body.pp-desk .atl2.cibles .readpane{
  top:calc(var(--pp-gap,60px) + 48px + var(--demand-h,56px))}
body.pp-desk .atl2.cibles .listhead{
  top:calc(var(--pp-gap,60px) + 48px + var(--demand-h,56px))!important}
body.pp-desk .atl2.cibles .drow{
  display:flex;flex-wrap:nowrap;align-items:stretch;width:100%;gap:8px}
body.pp-desk .atl2.cibles .dfield{flex:1 1 auto!important;min-width:0!important;max-width:none}
body.pp-desk .atl2.cibles .dacts{flex:none;margin-left:0}
.atl2.cibles .zoom-pipe{padding:22px 22px 36px}
.atl2.cibles .zoom-pipe .zoom-h{margin:0 0 8px;font-size:22px;font-weight:750;
  letter-spacing:-.03em;line-height:1.2}
.atl2.cibles .zoom-pipe .zoom-cta{margin:14px 0 18px;padding:0;border:0}
.atl2.cibles .zoom-pipe .zoom-cta .cell{display:block;width:100%}
.atl2.cibles .zoom-pipe .zoom-cta .rev{width:100%}
/* onglets DU PANNEAU, pas un tableau dans un cadre */
.atl2.cibles .readpane .cdtabs{border:0;border-radius:0;margin:0;background:transparent;
  overflow:visible}
.atl2.cibles .readpane .cdnav{background:transparent;gap:2px;flex-wrap:wrap;
  border-bottom:1px solid var(--line);padding:0 0 2px}
.atl2.cibles .readpane .cdnav button{padding:8px 11px;font-size:12px;font-weight:650;
  letter-spacing:-.01em;border-bottom-width:2px}
.atl2.cibles .readpane .cdbody{padding:16px 0 8px}
.atl2.cibles .readpane .cdgrid{grid-template-columns:1fr;gap:0}
.atl2.cibles .readpane .cdl{flex-direction:column;align-items:stretch;gap:2px;
  padding:10px 0;border-bottom:1px solid #F1F5F9}
.atl2.cibles .readpane .cdk{min-width:0;font-size:10px}
.atl2.cibles .readpane .cdv{white-space:normal;font-size:14px;line-height:1.45}
.atl2.cibles .readpane .cdrich{max-height:none;overflow:visible;font-size:14px;line-height:1.6}
.atl2.cibles .readpane .cdtxt{font-size:14px;line-height:1.6;color:#334155}
@media (max-width:1000px){
  .atl2.cibles .desk{grid-template-columns:1fr}
  .atl2.cibles .readpane{position:relative;top:auto;max-height:none;
    border-left:0;border-top:1px solid var(--line)}}

.atl2 .rdvcard{max-width:720px;width:min(720px,94vw);max-height:90dvh;overflow:auto}
.atl2 .rdv-unlocks{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0 16px}
.atl2 .rdv-u{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--panel2)}
.atl2 .rdv-u em{display:block;font-style:normal;font-size:10px;font-weight:700;
  letter-spacing:.08em;text-transform:uppercase;color:var(--brand);margin-bottom:4px}
.atl2 .rdv-u b{display:block;font-size:13px;line-height:1.35;margin-bottom:3px}
.atl2 .rdv-u span{display:block;font-size:12px;line-height:1.45;color:var(--muted)}
.atl2 .rdv-emb{min-height:520px}
@media (max-width:640px){.atl2 .rdv-unlocks{grid-template-columns:1fr}}
/* 📖 sur une ligne : un décryptage éditorial à creuser (clic = dépli) */
.atl2 .nd .rdec{flex:none;font-size:12px;line-height:1;opacity:.85;cursor:help}
.atl2 .edito-go{flex:none;font:inherit;font-size:11.5px;font-weight:650;color:#0A6B3D;
  background:#F4FBF6;border:1px solid #BBF7D0;border-radius:6px;padding:5px 9px;
  cursor:pointer;white-space:nowrap}
.atl2 .edito-go:hover{border-color:#0E8A4F}
.atl2 .edito-go[aria-pressed="true"]{background:#0E8A4F;color:#fff;border-color:#0E8A4F}
.atl2.ops .readpane .pane-edito{display:block;width:calc(100% - 32px);
  margin:12px 16px 8px;text-align:left}
.atl2 .zoom-src.zoom-src-art{background:none;border:0;border-bottom:1px solid #BBF7D0;
  padding:0;cursor:pointer;font:inherit}
/* LIGHTBOX des images/cartes du cockpit — clic n'importe où pour fermer */
.atl2 .atl2-lb{position:fixed;inset:0;z-index:90;background:rgba(11,18,32,.72);
  display:grid;place-items:center;padding:24px;cursor:zoom-out}
.atl2 .atl2-lb img{max-width:min(1100px,92vw);max-height:88vh;width:auto;
  border-radius:10px;box-shadow:0 30px 80px rgba(11,18,32,.5)}
.atl2 .atl2-lb-x{position:fixed;top:14px;right:18px;background:none;border:0;
  color:#fff;font-size:30px;cursor:pointer;line-height:1}

/* ÉCRAN ÉTROIT : ON SORT DU MODÈLE DE BOÎTE FIXE.
   Mesuré à 390x844 : les bandeaux s'y enroulent et coûtent 1202 px pour une
   boîte de 776 — la liste tombait à ZÉRO ligne, et aucun réglage de hauteur ne
   pouvait la sauver, parce que le chrome seul dépassait déjà l'écran. Ce n'est
   pas un problème de réglage, c'est le modèle qui ne convient pas : sous 861 px
   de large la V1 était une PAGE QUI DÉFILE, et c'est ce qu'on rétablit ici.
   L'app pousse à sa hauteur naturelle, la liste rend toutes ses lignes, le
   navigateur fait le reste. Mesure après : liste 3808 px, 12 lignes à l'écran
   une fois descendu jusqu'à elle, contre zéro.
   Seuil aligné sur celui du plancher d'app (CartePage/foldCss) : au-dessus,
   boîte fixe avec plancher ; en dessous, flux. Rien ne dépend du défilement
   PROPRE de la liste — la visite guidée écoute en phase de capture, et les
   appels scrollIntoView fonctionnent dans les deux modèles. */
/* IMPRIMER LA SELECTION — mesure avant : le cockpit sortait 3 lignes sur 60,
   parce que la liste reste une boite de 189 px a overflow:hidden, et la page
   /cibles sortait UNE page tronquee (l'iframe est coupee a sa hauteur visible).
   Autrement dit : la fonction existait, elle ne rendait rien d'exploitable.

   Ce qu'on imprime, c'est EXACTEMENT ce qui est a l'ecran — meme onglet, memes
   facettes, meme recherche — comme l'export CSV de la vue. On garde ce qui fait
   un document lisible par un tiers : pour qui, a quelle date, l'entonnoir chiffre,
   l'onglet, puis la liste. On enleve tout ce qui ne veut rien dire sur papier :
   le bandeau LIVE, la carte, les filtres, les boutons d'action, la pedagogie.

   Ce n'est PAS le « Dossier comite » de la V1 (A4 par societe, SWOT, synergies
   chiffrees, P&L) : ces donnees ne transitent pas par /cibles/list.json — les 35
   champs servis n'en portent aucune. C'est la SELECTION imprimable. */
@media print {
  .atl2{height:auto!important;overflow:visible!important;border-radius:0}
  .atl2 .app{height:auto!important;overflow:visible!important}
  .atl2 .list{flex:none!important;overflow:visible!important;max-height:none!important;
    background:none!important;background-image:none!important}
  /* rien qui ne veuille dire quelque chose sur papier */
  .atl2 .ticker, .atl2 .goal, .atl2 .since, .atl2 .fhint, .atl2 .tuto,
  .atl2 .fzone, .atl2 .demand, .atl2 .learn, .atl2 .lockbar,
  .atl2 .fst-x, .atl2 .ident .ic, .atl2 .ident .isrch, .atl2 .listhead button,
  .atl2 .cell, .atl2 .thu{display:none!important}
  /* les deux dernieres colonnes de la grille sont les ACTIONS et les pouces :
     on ne les cache pas seulement, on retire leur piste, sinon la ligne garde
     198 px de vide a droite. Le nom recupere la place. */
  .atl2 .app.pipe .row, .atl2 .app.pipe .cols{
    grid-template-columns:11px 30px minmax(190px,1fr) 76px 70px 132px 140px 44px!important}
  /* une societe ne doit jamais etre coupee en deux pages */
  .atl2 .row{break-inside:avoid;page-break-inside:avoid;background:none!important}
  .atl2 .ident, .atl2 .fstats, .atl2 .funnel{break-inside:avoid;page-break-inside:avoid}
  .atl2 .fstats{break-after:avoid;page-break-after:avoid}
  .atl2 *{box-shadow:none!important}
}
@page{size:A4;margin:12mm}

@media (max-width: 860px) {
  .atl2{height:auto;overflow:visible}
  .atl2 .app{height:auto;overflow:visible}
  .atl2 .list{flex:none;overflow-y:visible;max-height:none}
}

/* ...ET LA LISTE PASSE EN PREMIER.
   Mesuré : 1 060 px de bandeaux avant la première société — une écran et demi à
   descendre pour voir ce qu'on est venu voir. Les compacter ne suffisait pas :
   identité 203, filtres 157, évaluateur 133, pédagogie 143, et chacun a sa raison
   d'être. C'est l'ORDRE qui était faux, pas la taille.
   Restent en tête ce qui dit DE QUOI on parle : identité, entonnoir chiffré,
   onglets du tunnel. Tout ce qui sert à FILTRER ou à ÉVALUER passe sous la liste —
   on s'en sert après avoir regardé, pas avant. Rien n'est masqué : le contenu est
   là, il a seulement cessé de faire barrage.
   La propriete order sur une colonne flex : aucun changement de balisage, rien à maintenir en
   double, et sur grand écran l'ordre du DOM s'applique tel quel. */
@media (max-width: 860px) {
  .atl2 .app > *{order:5}
  .atl2 .app > .ident{order:0}
  .atl2 .app > .fstats{order:1}
  .atl2 .app > .funnel{order:2}
  .atl2 .app > .listhead{order:3}
  .atl2 .app > .cols{order:3}
  .atl2 .app > .list{order:4}
  /* sous la liste, dans l'ordre où l'on s'en sert */
  .atl2 .app > .fzone{order:6}
  .atl2 .app > .demand{order:7}
  .atl2 .app > .goal{order:8}
  .atl2 .app > .fhint{order:8}
  .atl2 .app > .tuto{order:8}
  .atl2 .app > .since{order:8}
  .atl2 .app > .learn{order:9}
  .atl2 .app > .ticker,.atl2 .app > .live-stack{order:10}
  .atl2 .app > .thesis-brief{order:11}
}

/* ...et les bandeaux qui s'y ENROULENT poussent la liste hors de l'ecran.
   Mesure a 390 px : il faut descendre de 1191 px avant de voir la premiere
   societe. Les deux plus gros postes ne sont pas ceux qu'on croit :
   · la barre de filtres, 194 px, DANS la carte pourtant repliee ;
   · le tunnel, 149 px, parce que ses trois rangees s'empilent.
   Ils defilent donc lateralement au lieu de s'enrouler — rien n'est retire,
   tout reste atteignable d'un glissement, et la liste remonte d'autant.
   fpanel (le menu d'une facette) est monte HORS de la barre : il n'est pas
   rogne par ce defilement. listhead est laisse tel quel : le proto y pose un
   overflow:visible delibere sur ecran etroit, et overflow-x:auto forcerait
   aussi l'axe vertical (regle CSS), donc rognerait ce qui doit en sortir. */
@media (max-width: 860px) {
  /* .facets est vise par des selecteurs a DEUX classes dans le proto
     (.atl2 .stage.folded .fbar .facets, ligne 1342 de styles.gen) : une regle
     a une seule classe se fait ecraser sur flex-wrap — mesure : overflow-x
     passait, flex-wrap restait a wrap et la barre gardait ses deux rangees.
     On egale donc leur specificite. */
  .atl2 .fbar .facets, .atl2 .stage.folded .fbar .facets,
  .atl2 .facets, .atl2 .frow2, .atl2 .funnel{
    display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;
    scrollbar-width:none;-webkit-overflow-scrolling:touch}
  .atl2 .fbar .seg{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;
    scrollbar-width:none}
  .atl2 .fbar .seg > *{flex:none}
  .atl2 .facets::-webkit-scrollbar,
  .atl2 .frow2::-webkit-scrollbar,
  .atl2 .funnel::-webkit-scrollbar{display:none}
  .atl2 .facets > *, .atl2 .frow2 > *, .atl2 .funnel > *{flex:none}
}
/* Carte OUVERTE seulement — repliée, .fzone n'est plus monté. Ne plus
   plafonner à 300 px : ça coupait le planisphère (hauteur carte = 460).
   Les onglets de continent sont le chrome de la carte, pas de la liste. */
.atl2 .fzone{flex:0 0 auto;height:auto;min-height:0;max-height:none;
  display:flex;flex-direction:column;background:var(--panel);
  border-bottom:1px solid var(--line)}
.atl2 .fzone .conts{flex:none;background:var(--panel);
  border-bottom:1px solid var(--line)}
.atl2 .stage{flex:1;height:auto;min-height:0;max-height:none}
.atl2 .stage.folded{flex:none;height:auto;min-height:0}
.atl2 .fzone:has(.stage.folded){height:auto;min-height:0}
/* ── LES FILTRES ESSENTIELS RESTENT SOUS LA MAIN, CARTE REPLIÉE (17/08,
   resserré 24/08). Carte repliée, plus de rangée de continents dans le
   sticky — un menu compact + recherche + Filtres. Carte DÉPLIÉE on ne
   colle rien : 460 px de planisphère épinglés, ce serait pire. */
.atl2 .app > .fzone:has(.stage.folded){position:static;box-shadow:none}
.atl2 .app:has(.stage.folded) .listhead{top:var(--pp-gap,60px)}
@media (max-width:760px){
  .atl2 .app > .fzone:has(.stage.folded){position:static}}
.atl2 .mapzone svg{max-height:100%}
/* les portails (popup, modales, toast) montent sur document.body AVEC la classe
   .atl2 sur leur racine : le scope s'applique, position:fixed reste viewport. */

/* ENCADRÉ RAISON — l'étiquette Retenu/Écarté et sa variante rouge, reprises de
   .cb-reasonbox / .cb-rbox-kept / .cb-rbox-out (cibles_publish.py:2401-2407).
   Le cas « retenu » réutilise tel quel le fond vert déjà posé sur .dec. */
.atl2 .card .dec em{display:block;font-style:normal;font-size:10px;font-weight:800;
  letter-spacing:.09em;text-transform:uppercase;color:#0f6e3f;margin-bottom:4px}
.atl2 .card .dec.out{background:#fdf1f1;border-left-color:#b3261e;color:#5c2b2b}
.atl2 .card .dec.out em{color:#b3261e}
.atl2 .card .ceonote{margin:-4px 0 11px;font-size:12px;line-height:1.45;color:#56697e}
.atl2 .card .ceonote i{color:#334155}

/* LIGNE D'APPRENTISSAGE — sous la liste, à côté de .tally : elle donne leur sens
   aux pouces (cibles_publish.py:24826). flex:none obligatoire, .list est le seul
   conteneur qui a le droit de grandir. */
.atl2 .learn{flex:none;display:flex;align-items:center;gap:8px;flex-wrap:wrap;
  padding:7px 14px;border-top:1px solid var(--line);background:var(--panel);
  font-size:11.5px;color:var(--sub)}
.atl2 .learn button{background:none;border:0;padding:0;cursor:pointer;font:inherit;
  font-weight:700;color:var(--brand-d);text-decoration:underline}
.atl2 .learn button:hover{opacity:.75}

/* SÉLECTEUR DE STATUT, NOTE « POURQUOI ? » et SUIVI POST-OUI — gabarit repris
   de .cb-cs-* / .cb-stg-* (cibles_publish.py:3540-3562 et 3874-3900). */
.atl2 .csp{margin:2px 0 10px}
.atl2 .csrow{display:flex;align-items:center;gap:5px;flex-wrap:wrap}
.atl2 .cslb{font-size:10px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;
  color:var(--dim);margin-right:2px}
.atl2 .csb{font:inherit;font-size:10.5px;font-weight:700;color:#56697e;background:var(--panel3);
  border:1px solid var(--line);border-radius:6px;padding:4px 9px;cursor:pointer;line-height:1;
  transition:background .12s ease,border-color .12s ease}
.atl2 .csb:hover:not(:disabled){background:var(--line2);border-color:var(--line2)}
.atl2 .csb.on{background:var(--ink);border-color:var(--ink);color:#fff}
.atl2 .csb:disabled{opacity:.55;cursor:default}
.atl2 .csb.busy{opacity:.7}
.atl2 .csok{font-size:10px;font-weight:800;color:var(--brand-d)}
.atl2 .csnote{display:flex;gap:5px;align-items:center;margin:6px 0 0}
.atl2 .csnote input{flex:1 1 auto;min-width:0;font:inherit;font-size:10.5px;color:var(--ink);
  border:1px solid var(--line);border-radius:6px;padding:4px 7px;background:var(--panel)}
.atl2 .csnote input::placeholder{color:var(--dim)}
.atl2 .csnote button{flex:0 0 auto;font:inherit;font-size:10px;font-weight:700;color:#56697e;
  background:var(--panel3);border:1px solid var(--line);border-radius:6px;padding:4px 9px;cursor:pointer;line-height:1}
.atl2 .csnote button:disabled{opacity:.5;cursor:default}
.atl2 .csnote.why input{border-color:var(--brand);background:var(--gp,#F3FAF6)}

.atl2 .stg{display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin:0 0 10px}
.atl2 .stglb{font-size:10px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;
  color:var(--dim);margin-right:2px}
.atl2 .stgb{font:inherit;font-size:10.5px;font-weight:600;color:#56697e;background:var(--panel3);
  border:1px solid var(--line);border-radius:99px;padding:3px 9px;cursor:pointer;line-height:1.3}
.atl2 .stgb:hover:not(:disabled){background:var(--line2)}
.atl2 .stgb.on{background:var(--brand);border-color:var(--brand);color:#fff}
.atl2 .stgb:disabled{opacity:.55;cursor:default}
.atl2 .stgj4{font-size:10.5px;font-weight:700;color:#8A5008;background:#FAF0DF;
  border:1px solid #EBD9B8;border-radius:99px;padding:3px 9px}

.atl2 .mnote.warn{color:#8A5008;background:#FAF0DF;border:1px solid #EBD9B8;
  border-radius:var(--r);padding:7px 10px}
.atl2 .exb.pri{background:var(--ink);border-color:var(--ink);color:#fff}

/* MODALE D'ALERTE — onglets, checklist des sections, aperçu de l'email. */
.atl2 .ntabs{display:flex;gap:4px;margin:0 0 14px;border-bottom:1px solid var(--line)}
.atl2 .ntabs button{font:inherit;font-size:12.5px;font-weight:700;color:var(--muted);
  background:none;border:0;border-bottom:2px solid transparent;padding:7px 12px;cursor:pointer;
  margin-bottom:-1px}
.atl2 .ntabs button:hover{color:var(--ink)}
.atl2 .ntabs button.on{color:var(--ink);border-bottom-color:var(--brand)}
.atl2 .secl{display:flex;flex-direction:column;gap:5px;margin:2px 0 6px}
.atl2 .secli{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--sub);cursor:pointer}
.atl2 .secli input{accent-color:var(--brand);flex:none}
.atl2 .secli i{font-style:normal;color:var(--dim);font-size:11.5px}
.atl2 .mnote.dim{color:var(--dim);font-size:11.5px}
.atl2 .mailp{margin:12px 0 4px;padding-top:12px;border-top:1px solid var(--line)}
.atl2 .mailp-row{display:flex;gap:8px;flex-wrap:wrap}
.atl2 .mailp-frame{width:100%;height:420px;margin-top:10px;border:1px solid var(--line);
  border-radius:var(--r);background:#fff}
.atl2 .qset select{font:inherit;font-size:12px;padding:4px 7px;border:1px solid var(--line);
  border-radius:6px;background:var(--panel);color:var(--ink)}

.atl2 .ebell{background:none;border:0;padding:0 0 0 6px;cursor:pointer;font-size:11px;
  line-height:1;opacity:.55}
.atl2 .ebell:hover{opacity:1}
.atl2 .mailin{font:inherit;font-size:12px;padding:4px 7px;border:1px solid var(--line);
  border-radius:6px;background:var(--panel);color:var(--ink);min-width:0;width:180px}

.atl2 .lk{background:none;border:0;padding:0;cursor:pointer;font:inherit;font-size:inherit;
  color:var(--brand-d);text-decoration:underline}
.atl2 .lk:disabled{opacity:.5;cursor:default;text-decoration:none}
.atl2 .mfield select{font:inherit;font-size:12px;padding:5px 8px;border:1px solid var(--line);
  border-radius:6px;background:var(--panel);color:var(--ink)}

/* 🧬 SIMILAIRES — dans la fiche societe, sous le corps et au-dessus du pied. */
.atl2 .simb{margin:0 0 10px}
.atl2 .pbody .simb,.atl2 .pf ~ .simb{padding:0 16px 12px;margin:0}
.atl2 .siml{margin:8px 0 4px;padding:0;list-style:none;display:flex;flex-direction:column;gap:6px;
  max-height:200px;overflow-y:auto}
.atl2 .siml li{font-size:12px;line-height:1.45;color:var(--sub)}
.atl2 .siml b{display:block;font-size:12.5px}
.atl2 .siml b.ok{color:#0f6e3f}
.atl2 .siml b.ko{color:#b3261e}

/* LE DOSSIER COMITÉ — un A4 par société, relisible à l'écran et taillé pour le
   papier. Une société n'est JAMAIS coupée entre deux pages : c'est la seule
   chose qui compte vraiment quand le document circule autour d'une table. */
.atl2 .dossier{max-height:64vh;overflow-y:auto;padding-right:4px}
.atl2 .dsbar{display:flex;align-items:center;gap:10px;margin-bottom:10px;
  padding-bottom:9px;border-bottom:1px solid var(--line)}
.atl2 .dsbar b{font-size:13px;color:var(--ink)}
.atl2 .dssp{flex:1}
.atl2 .dscover{margin-bottom:14px;padding:11px 12px;border-radius:var(--r);
  background:var(--panel2);border:1px solid var(--line)}
.atl2 .dscover b{font-size:15px;color:var(--ink)}
.atl2 .dscover p{margin:3px 0 0;font-size:12px;color:var(--sub)}
.atl2 .dspage{padding:13px 14px;margin-bottom:12px;border:1px solid var(--line);
  border-radius:var(--r);background:var(--panel)}
.atl2 .dsh{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;
  padding-bottom:9px;margin-bottom:10px;border-bottom:1px solid var(--line)}
.atl2 .dsh b{font-size:15px;color:var(--ink)}
.atl2 .dsh p{margin:2px 0 0;font-size:12px;color:var(--sub);max-width:60ch}
.atl2 .dsv{flex:none;font-size:11px;font-weight:800;letter-spacing:.05em;color:#0f6e3f;
  text-align:right}
.atl2 .dsv.out{color:#b3261e}
.atl2 .dsv em{display:block;font-style:normal;font-size:10.5px;font-weight:700;
  color:var(--ink);margin-top:2px}
.atl2 .dspage h3{margin:11px 0 5px;font-size:10.5px;text-transform:uppercase;
  letter-spacing:.06em;color:var(--dim);font-weight:800}
.atl2 .dstxt{margin:0 0 6px;font-size:12.5px;line-height:1.55;color:var(--sub);max-width:78ch}
.atl2 .dsgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:3px 18px;margin-top:8px}
.atl2 .dsl{display:flex;align-items:baseline;gap:8px;min-width:0}
.atl2 .dsl span{flex:none;font-size:10.5px;text-transform:uppercase;letter-spacing:.05em;
  color:var(--dim);min-width:74px}
.atl2 .dsl b{font-size:12.5px;font-weight:600;color:var(--ink);overflow:hidden;
  text-overflow:ellipsis;white-space:nowrap}
.atl2 .dsb{margin-bottom:7px}
.atl2 .dsb span{display:block;font-size:10.5px;text-transform:uppercase;
  letter-spacing:.05em;color:var(--dim)}
.atl2 .dsb p{margin:1px 0 0;font-size:12.5px;line-height:1.5;color:var(--ink);max-width:78ch}
.atl2 .dsf{margin-top:11px;padding-top:8px;border-top:1px solid var(--line);
  font-size:10.5px;color:var(--dim)}
@media print{
  /* le dossier est la SEULE chose qui s'imprime quand il est ouvert : la modale
     devient le document, le cockpit dessous disparait. */
  .atl2 .modal.on{position:static!important;background:none!important;padding:0!important}
  .atl2 .modal.on .mcard{width:auto!important;max-width:none!important;border:0!important;
    box-shadow:none!important;border-radius:0!important}
  .atl2 .modal.on .mh, .atl2 .dsbar{display:none!important}
  .atl2 .dossier{max-height:none!important;overflow:visible!important}
  .atl2 .dspage{break-inside:avoid;page-break-inside:avoid;break-after:page;
    page-break-after:always;border:0;padding:0}
  .atl2 .dspage:last-child{break-after:auto;page-break-after:auto}
  .atl2 .app{display:none!important}
}

/* LES QUATRE BLOCS DESCRIPTIFS — sobres : ils vivent DANS un onglet d'une fiche
   qui s'ouvre sous une ligne de liste, pas dans une page a eux. */
.atl2 .qab{margin-top:2px}
.atl2 .qal{margin:0 0 9px}
.atl2 .qak{display:block;font-size:10.5px;text-transform:uppercase;letter-spacing:.05em;
  color:var(--dim);margin-bottom:2px}
.atl2 .qal p{margin:0;font-size:12.5px;line-height:1.5;color:var(--ink);max-width:70ch}

/* LA COUVERTURE UNIFIÉE — la jauge garde son côté jeu (une barre qui se
   remplit), mais elle dit enfin quelque chose de vrai : le VRAI total criblé
   sur le marché adressable, et le délai qu'il reste. Le rythme est en bas,
   volontairement discret : c'est un réglage, pas une décision quotidienne. */
.atl2 .covg{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin-bottom:8px}
.atl2 .covg b{font-size:17px;font-weight:800;color:var(--ink)}
.atl2 .covg span{font-size:12.5px;color:var(--sub)}
.atl2 .covbar{position:relative;height:16px;border-radius:99px;background:var(--panel3);
  border:1px solid var(--line);overflow:hidden;margin:4px 0 8px}
.atl2 .covbar i{display:block;height:100%;border-radius:99px;
  background:linear-gradient(90deg,#2f9e63,#15884a);transition:width .6s cubic-bezier(.2,.8,.2,1)}
.atl2 .covbar em{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  font-style:normal;font-size:10.5px;font-weight:800;color:var(--ink);letter-spacing:.03em}
.atl2 .covf{display:flex;gap:16px;flex-wrap:wrap;margin:10px 0 2px;padding-top:9px;
  border-top:1px solid var(--line)}
.atl2 .covf span{font-size:12px;color:var(--sub)}
.atl2 .covf b{font-family:var(--mono);font-size:14px;color:var(--ink);margin-right:4px}
.atl2 .covr{margin-top:12px;padding-top:10px;border-top:1px solid var(--line)}
.atl2 .covrh{display:flex;align-items:baseline;justify-content:space-between;gap:10px;
  font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--dim)}
.atl2 .covrh b{font-size:12px;text-transform:none;letter-spacing:0;color:var(--ink)}
.atl2 .covrb{display:flex;gap:5px;margin:6px 0 4px}
.atl2 .covrb button{flex:none;min-width:32px;font:inherit;font-size:11.5px;font-weight:700;
  color:var(--sub);background:var(--panel2);border:1px solid var(--line);border-radius:7px;
  padding:4px 8px;cursor:pointer}
.atl2 .covrb button:hover:not(:disabled){border-color:var(--line2);color:var(--ink)}
.atl2 .covrb button.on{background:var(--brand);border-color:var(--brand);color:#fff}
.atl2 .covrb button:disabled{opacity:.5;cursor:default}

/* LA FICHE À ONGLETS — 35 champs servis, 7 affichés jusqu'ici (CardTabs.tsx).
   Les onglets restent SOBRES : la fiche s'ouvre sous une ligne de liste, elle
   ne doit pas ressembler à une seconde application. Un onglet vide n'est jamais
   rendu, donc la barre reste courte. */
.atl2 .cdtabs{margin:8px 0 2px;border:1px solid var(--line);border-radius:var(--r);
  background:var(--panel);overflow:hidden}
.atl2 .cdnav{display:flex;gap:0;border-bottom:1px solid var(--line);background:var(--panel2);
  overflow-x:auto;scrollbar-width:none}
.atl2 .cdnav::-webkit-scrollbar{display:none}
.atl2 .cdnav button{flex:none;font:inherit;font-size:11.5px;font-weight:700;letter-spacing:.01em;
  color:var(--sub);background:none;border:0;border-bottom:2px solid transparent;
  padding:7px 12px;cursor:pointer;white-space:nowrap}
.atl2 .cdnav button:hover{color:var(--ink)}
.atl2 .cdnav button.on{color:var(--brand-d);border-bottom-color:var(--brand)}
.atl2 .cdbody{padding:10px 12px}
/* les deux niveaux de verdict, l'un sous l'autre : le crible d'abord, le memo
   ensuite — les ecraser ferait perdre l'etape deja payee */
.atl2 .cdv1{display:flex;align-items:baseline;gap:7px;margin-bottom:5px}
.atl2 .cdv1 b{font-size:12px;font-weight:800;letter-spacing:.04em;color:#0f6e3f}
.atl2 .cdv1.out b{color:#b3261e}
.atl2 .cdv1.memo b{color:var(--ink)}
.atl2 .cdw{font-size:10.5px;color:var(--dim);text-transform:uppercase;letter-spacing:.06em}
.atl2 .cdtxt{margin:0 0 8px;font-size:12.5px;line-height:1.5;color:var(--sub)}
.atl2 .cdgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:4px 16px}
.atl2 .cdl{display:flex;align-items:baseline;gap:8px;min-width:0}
.atl2 .cdk{flex:none;font-size:10.5px;text-transform:uppercase;letter-spacing:.05em;
  color:var(--dim);min-width:78px}
.atl2 .cdv{font-size:12.5px;color:var(--ink);overflow:hidden;text-overflow:ellipsis;
  white-space:nowrap}
.atl2 a.cdv{color:var(--brand-d);text-decoration:none}
.atl2 a.cdv:hover{text-decoration:underline}
/* l'analyse de Stan : du texte long, donc une colonne lisible et bornee */
.atl2 .cdrich{font-size:12.5px;line-height:1.55;color:var(--sub);max-height:260px;
  overflow-y:auto;max-width:70ch}
.atl2 .cdrich b{color:var(--ink);font-weight:700}
.atl2 .cdacts{display:flex;gap:8px;margin-top:9px;flex-wrap:wrap}
.atl2 .cdacts a.abtn{text-decoration:none;display:inline-flex;align-items:center}
@media print{
  /* sur papier, pas de barre d'onglets : seul le contenu ouvert a un sens */
  .atl2 .cdnav{display:none!important}
  .atl2 .cdrich{max-height:none!important;overflow:visible!important}
  .atl2 .cdtabs{break-inside:avoid;page-break-inside:avoid}
}

/* ENVOI RÉEL — le seul bouton du cockpit qui contacte de vrais prospects et
   qu'on ne peut pas défaire. Il ne ressemble donc à aucun autre : rouge plein,
   et la confirmation est encadrée pour qu'on ne clique pas au travers. */
.atl2 .abtn.dgr{background:#b3261e;border-color:#b3261e;color:#fff}
.atl2 .abtn.dgr:hover:not(:disabled){background:#8f1e18;border-color:#8f1e18}
.atl2 .abtn.dgr:disabled{opacity:.55}
.atl2 .bulkc{margin-top:8px;padding:10px 11px;border-radius:var(--r);
  border:1px solid #f0c8c4;background:#fdf4f3;display:flex;flex-direction:column;gap:8px}
.atl2 .bulkc .mnote.warn{margin:0}

/* ENTONNOIR DATÉ + ACTIVITÉ 30 J — flex:none, comme tous les enfants de .app. */
.atl2 .fstats{flex:none;margin:0 14px 4px;padding:4px 12px;border-radius:var(--r);
  background:var(--panel3);border:1px solid var(--line)}
.atl2 .fstats.on{padding:9px 12px;margin-bottom:6px}
.atl2 .fst-row{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.atl2 .fst-t{display:flex;align-items:baseline;gap:5px}
.atl2 .fst-x{margin-left:auto;background:none;border:0;cursor:pointer;font-size:11px;
  line-height:1;color:var(--muted);padding:2px 4px}
.atl2 .fst-x:hover{color:var(--ink)}
.atl2 .fst-t b{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--ink)}
.atl2 .fst-t i{font-style:normal;font-size:11px;color:var(--sub);white-space:nowrap}
.atl2 .fst-t em{font-style:normal;font-size:10.5px;font-weight:700;color:var(--brand-d)}
.atl2 .fst-ar{color:var(--dim);font-size:12px}
.atl2 .fst-act{margin-top:9px}
.atl2 .fst-ah{display:flex;align-items:center;gap:10px;font-size:10.5px;color:var(--dim);
  margin-bottom:3px}
.atl2 .fst-lg{display:inline-flex;align-items:center;gap:4px}
.atl2 .fst-lg i{width:8px;height:8px;border-radius:2px;display:inline-block}
/* SUR ECRAN ETROIT la ligne s'enroulait sur quatre niveaux : 109 px mesures,
   soit le troisieme poste de la boite derriere la carte et l'identite, pour un
   bloc qui n'est qu'un rappel. Elle defile lateralement au lieu de s'enrouler —
   la premiere etape (« N criblees depuis le … »), qui porte l'essentiel, reste
   visible sans geste. */
@media (max-width: 860px) {
  .atl2 .fst-row{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;
    -webkit-overflow-scrolling:touch}
  .atl2 .fst-row::-webkit-scrollbar{display:none}
  .atl2 .fst-t{flex:none}
  .atl2 .fst-x{position:sticky;right:0;margin-left:6px;background:var(--panel3)}
}
.atl2 .fst-act svg{width:100%;height:46px;display:block}
.atl2 .fst-ax{display:flex;justify-content:space-between;font-size:10px;color:var(--dim);
  margin-top:2px}

/* ✨ DEPUIS VOTRE DERNIÈRE VISITE — bandeau refermable, flex:none comme tous
   les enfants de .app (seule .list a le droit de grandir). */
/* L'ENCART « nouvelles depuis votre visite » RESTE VERT (17/08 : « pour les
   nouvelles cibles en vert, je ne veux pas la perdre, et bien l'organiser »).
   Je l'avais dégradé en note grise pour calmer la page — c'était trop : cet
   encart dit ce qui est arrivé depuis la dernière fois, et c'est la première
   chose qu'on cherche en ouvrant. Il garde donc sa couleur, mais il est ORDONNÉ :
   un en-tête sur une ligne avec ses deux contrôles à droite (réduire, fermer),
   et les noms en dessous. Et il se réduit, comme la box rouge. */
.atl2 .since{flex:none;margin:0 14px 8px;padding:9px 12px;border-radius:var(--r);
  background:#F3FAF6;border:1px solid #CFE9DA;border-left:4px solid #0E8A4F}
.atl2 .since-h{display:flex;align-items:center;gap:8px}
.atl2 .since-h b{flex:1;font-size:12.5px;color:#0f6e3f;font-weight:700}
.atl2 .since .sg-x{background:none;border:0;cursor:pointer;font-size:14px;line-height:1;
  color:#5f8f76;padding:1px 5px;border-radius:5px}
.atl2 .since .sg-x:hover{background:#E7F6EE;color:#0b5c34}
.atl2 .since.mini .since-c{display:none}
.atl2 .since-h .x{background:none;border:0;cursor:pointer;font-size:15px;line-height:1;
  color:var(--muted);padding:0 3px}
.atl2 .since-h .x:hover{color:var(--ink)}
.atl2 .since-c{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px}
.atl2 .since-c button{font:inherit;font-size:11px;font-weight:600;color:#0f6e3f;background:#fff;
  border:1px solid #CFE9DA;border-radius:99px;padding:3px 9px;cursor:pointer}
.atl2 .since-c button:hover{background:#EAF6EF}
.atl2 .since-c button.mr{color:var(--sub);border-color:var(--line);font-weight:500}
.atl2 .since-c .gone{font-size:11px;color:var(--dim);text-decoration:line-through;
  padding:3px 7px}

/* VISITE GUIDÉE — voile + anneau projecteur. Le voile ET le trou tiennent en UN
   seul élément : une ombre portée immense autour du rectangle de la cible. */
.atl2 .tour{position:fixed;inset:0;z-index:200}
.atl2 .tour-veil{position:fixed;inset:0;background:rgba(11,18,32,.62)}
.atl2 .tour-hole{position:fixed;border-radius:10px;pointer-events:none;
  box-shadow:0 0 0 9999px rgba(11,18,32,.62),0 0 0 2px var(--brand) inset;
  transition:left .18s ease,top .18s ease,width .18s ease,height .18s ease}
.atl2 .tour-card{position:fixed;z-index:201;background:var(--panel);border-radius:14px;
  box-shadow:0 18px 46px rgba(11,18,32,.34);padding:15px 20px 14px}
.atl2 .tour-card.fin{width:min(420px,calc(100vw - 32px));text-align:center;padding:26px 24px 20px}
/* le compteur ET sa barre sur la même ligne : on sait où on en est sans lire */
.atl2 .tour-n{display:flex;align-items:center;gap:9px;font-family:var(--mono);font-size:10px;
  letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin-bottom:7px}
.atl2 .tour-bar{flex:1;height:3px;border-radius:2px;background:var(--panel3);overflow:hidden}
.atl2 .tour-bar i{display:block;height:100%;background:var(--brand);border-radius:2px;
  transition:width .2s ease}
.atl2 .tour-card h3{margin:0 0 8px;font-size:15.5px;font-weight:800;color:var(--ink);line-height:1.3}
.atl2 .tour-card.fin h3{font-size:19px;margin-bottom:8px}
/* AÉRATION (16/08 : « c'est moche, pas aéré ») — les paragraphes respirent,
   et le dernier ne colle pas aux boutons. */
.atl2 .tour-card p{margin:0 0 9px;font-size:12.5px;line-height:1.62;color:var(--sub)}
.atl2 .tour-card p:last-of-type{margin-bottom:13px}
.atl2 .tour-card p b{color:var(--ink);font-weight:700}
.atl2 .tour-ul{margin:0 0 13px;padding:0;list-style:none;display:grid;gap:5px}
.atl2 .tour-ul li{position:relative;padding-left:14px;font-size:12.5px;line-height:1.5;color:var(--sub)}
.atl2 .tour-ul li:before{content:'';position:absolute;left:3px;top:7px;width:4px;height:4px;
  border-radius:50%;background:var(--brand)}
.atl2 .tour-ul li b{color:var(--ink);font-weight:700}
.atl2 .tour-nav{display:flex;gap:8px;justify-content:flex-end;align-items:center}
.atl2 .tour-card.fin .tour-nav{justify-content:center}
.atl2 .tour-nav button{font:inherit;font-size:12px;font-weight:700;border-radius:8px;
  padding:7px 13px;cursor:pointer;line-height:1;border:1px solid var(--line)}
.atl2 .tour-nav .gh{background:var(--panel3);color:var(--sub)}
.atl2 .tour-nav .gh:disabled{opacity:.45;cursor:default}
.atl2 .tour-nav .pri{background:var(--ink);border-color:var(--ink);color:#fff}
.atl2 .tour-nav .pri:hover{opacity:.9}
.atl2 .tour-x{position:absolute;top:8px;right:9px;background:none;border:0;cursor:pointer;
  font-size:17px;line-height:1;color:var(--dim);padding:2px 5px}
.atl2 .tour-x:hover{color:var(--ink)}
@media (prefers-reduced-motion:reduce){.atl2 .tour-hole{transition:none}}

/* PANNEAU « COMMENT UTILISER CETTE PAGE » — 8 étapes CLIQUABLES : chacune ouvre
   la surface dont elle parle, au lieu d'être une liste morte. */
.atl2 .howto{display:flex;flex-direction:column;gap:6px;margin:0 0 14px;padding:0;list-style:none}
.atl2 .howto li{display:grid;grid-template-columns:22px 1fr;gap:10px;align-items:start;
  border:1px solid var(--line);border-radius:var(--r);padding:9px 11px;background:var(--panel);
  cursor:pointer;text-align:left;font:inherit;color:var(--sub);font-size:12.5px;line-height:1.5;
  width:100%}
.atl2 .howto li:hover{background:var(--panel3);border-color:var(--line2)}
.atl2 .howto li b{color:var(--ink)}
.atl2 .howto .n{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--brand-d);
  background:var(--gp,#F3FAF6);border-radius:6px;text-align:center;padding:2px 0}
.atl2 .howto-go{display:flex;align-items:center;gap:10px;margin:0 0 14px;padding:11px 13px;
  border:1px solid var(--brand);border-radius:var(--r);background:var(--gp,#F3FAF6)}
.atl2 .howto-go p{flex:1;margin:0;font-size:12px;line-height:1.5;color:var(--sub)}
.atl2 .howto-go button{flex:none;font:inherit;font-size:12px;font-weight:700;color:#fff;
  background:var(--brand);border:0;border-radius:8px;padding:8px 13px;cursor:pointer}

/* « POURQUOI CE OUI / CE NON ? » — posée au-dessus du toast, donc toujours
   visible : la ligne, elle, vient de quitter son onglet. */
.atl2 .whydock{position:absolute;left:50%;bottom:62px;transform:translateX(-50%);z-index:110;
  width:min(460px,calc(100% - 32px));background:var(--panel);border:1px solid var(--line);
  border-radius:var(--r);box-shadow:0 10px 30px rgba(15,31,51,.16);padding:10px 12px}
.atl2 .whydock > b{display:block;font-size:11px;color:var(--ink);margin-bottom:5px}
.atl2 .whydock .csnote{margin:0}

/* TOAST D'ERREUR — il n'en existait aucune variante : un échec total (réseau
   coupé, token expiré, 502 Airtable) s'affichait avec le style d'un succès. */
.atl2 .flash.err{background:#7F1D1D;box-shadow:0 8px 24px rgba(127,29,29,.32)}
.atl2 .flash.err::before{content:'⚠ ';opacity:.9}

/* « VOS CRITÈRES » — hypothèse, profils de cibles, crible. Gabarit repris de
   _criteria_html / _gate_steps_html de la page V1. */
.atl2 .critpts{margin:6px 0 12px;padding-left:18px;font-size:12.5px;line-height:1.55;color:var(--sub)}
.atl2 .critpts li{margin-bottom:4px}
.atl2 .prof{border:1px solid var(--line);border-radius:var(--r);margin:0 0 7px;background:var(--panel)}
.atl2 .prof summary{cursor:pointer;list-style:none;padding:9px 12px;font-size:13px;font-weight:700;
  color:var(--ink);display:flex;align-items:center;gap:8px}
.atl2 .prof summary::-webkit-details-marker{display:none}
.atl2 .prof summary::before{content:'▸';color:var(--muted);font-size:11px;transition:transform .15s ease}
.atl2 .prof[open] summary::before{transform:rotate(90deg)}
.atl2 .prof summary:hover{background:var(--panel3)}
.atl2 .prof .why{margin:0;padding:0 12px 10px 28px;font-size:12.5px;line-height:1.5;color:var(--sub)}
.atl2 .prof .lo{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 12px 11px 28px}
.atl2 .prof .lo em{display:block;font-style:normal;font-size:10px;font-weight:800;letter-spacing:.07em;
  text-transform:uppercase;color:#0f6e3f;margin-bottom:4px}
.atl2 .prof .lo .ko em{color:#b3261e}
.atl2 .prof .lo ul{margin:0;padding-left:16px;font-size:12px;line-height:1.5;color:var(--sub)}
.atl2 .prof .lo li{margin-bottom:3px}
.atl2 .gate1{margin:2px 0 14px;padding:10px 12px;background:var(--panel3);border-radius:var(--r);
  font-size:12.5px;line-height:1.55;color:var(--sub)}
.atl2 .gatesteps{margin:2px 0 14px;padding-left:20px;font-size:12.5px;line-height:1.55;color:var(--sub)}
.atl2 .gatesteps li{margin-bottom:5px}
.atl2 .gatesteps b{color:var(--ink);margin-right:5px}
@media (max-width:560px){.atl2 .prof .lo{grid-template-columns:1fr}}

/* GLOSSAIRE DES VERDICTS et ROUTAGE verdict → onglet, dans « Vos critères ».
   Deux listes de même gabarit : une pastille (ou une étiquette de statut) à
   gauche, la phrase à droite. */
.atl2 .vlist{display:flex;flex-direction:column;gap:7px;margin:2px 0 14px}
.atl2 .vrow{display:grid;grid-template-columns:auto 1fr;gap:9px;align-items:baseline;
  font-size:12.5px;line-height:1.45;color:var(--sub)}
.atl2 .vrow .vd{justify-self:start}
.atl2 .vtag{justify-self:start;font-size:10px;font-weight:800;letter-spacing:.06em;
  text-transform:uppercase;padding:3px 7px;border-radius:5px;white-space:nowrap;
  background:var(--panel3);color:var(--ink);box-shadow:inset 0 0 0 1px var(--line)}

/* LÉGENDE DU TUNNEL — la phrase qui fait des chevrons un PARCOURS, au-dessus de
   la barre d'onglets comme en V1 (24806). */
.atl2 .fhint{flex:none;display:flex;align-items:center;gap:7px;
  padding:6px 14px 0;font-size:11.5px;line-height:1.4;color:var(--sub)}
.atl2 .fhint b{color:var(--ink);font-weight:700}
.atl2 .fhint svg{flex:none;opacity:.5}
.atl2 .fhint span{flex:1;min-width:0}
.atl2 .fhint button{flex:none;background:none;border:0;padding:0 2px;cursor:pointer;
  font:inherit;font-size:11px;color:var(--muted);opacity:.55}
.atl2 .fhint button:hover{opacity:1;color:var(--ink)}

/* ── L'ATELIER DE RECHERCHE ────────────────────────────────────────────────
   Le jumeau de « ＋ Évaluer plusieurs à la fois », à sa droite, et son panneau
   est bâti sur EXACTEMENT la même grammaire que le panneau de masse : la zone
   de saisie à gauche, la colonne d'action à droite (bouton + légende), pour
   qu'on lise les deux gestes comme deux entrées d'un même geste.

   BUDGET VERTICAL — .atl2 est une boîte à hauteur fixe et tout ce qui vit
   au-dessus de la liste se paie en lignes visibles (mesuré : 519 px de
   bandeaux permanents sur une fenêtre de 900). Ces deux blocs n'apparaissent
   donc QUE sur un geste, et la fiche est PLAFONNÉE avec son propre
   défilement : sans ce plafond, un résumé long chassait la liste de l'écran. */
.atl2 .dunder{gap:16px;flex-wrap:wrap;align-items:center}
/* même gris que « Évaluer plusieurs » — pas de vert « lien » sur la recherche */
.atl2 .dmulti.dsearch{color:var(--muted)}
.atl2 .dmulti.dsearch:hover{color:var(--ink)}
.atl2 .dmulti.dsearch.on{font-weight:700;color:var(--ink)}
/* Le carnet, À DROITE de la recherche : une PARENTHÈSE, pas une troisième porte
   d'entrée. Elle ne fait pas un geste de plus, elle rouvre ce qui a été fait. */
.atl2 .dmulti.darch{color:var(--dim);font-size:11px}
.atl2 .dmulti.darch::before{content:'(';}
.atl2 .dmulti.darch::after{content:')';}
.atl2 .dmulti.darch:hover{color:var(--brand-d);text-decoration:underline}
.atl2 .dmulti.darch.on{color:var(--ink);font-weight:700}

.atl2 .rsp{display:flex;margin-top:10px;gap:9px;align-items:flex-start}
.atl2 .rsp .rsf{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}
.atl2 .rsp .rsurl{width:100%;height:40px;background:var(--panel);border:1.5px solid var(--line2);
  border-radius:var(--ra);padding:0 13px;font:inherit;font-size:13px;color:var(--ink);outline:none}
.atl2 .rsp .rsurl:focus{border-color:var(--brand)}
.atl2 .rsp .rsor{font-family:var(--mono);font-size:8.5px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--dim)}
.atl2 .rsp .rstext{width:100%;min-height:72px;overflow:auto;border:1.5px solid var(--line2);
  border-radius:var(--ra);padding:9px 11px;font:inherit;font-size:13px;line-height:1.5;
  color:var(--ink);background:var(--panel);outline:none;resize:vertical}
.atl2 .rsp .rstext:focus{border-color:var(--brand)}
.atl2 .rsp .side{display:flex;flex-direction:column;gap:6px;flex:none;width:210px}
.atl2 .rsp .side .evalbtn{width:100%;white-space:normal;line-height:1.25;padding:0 14px;min-width:0}
.atl2 .rsp .hint{font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;
  color:var(--dim);text-align:center}
.atl2 .demand.rs-mode .evalbtn{white-space:nowrap;padding:0 14px;min-width:0}
.atl2 .viewbtn{flex:none;height:42px;padding:0 12px;background:#fff;color:var(--ink);
  border:1.5px solid var(--line2);border-radius:var(--ra);font:inherit;font-weight:650;
  font-size:13px;cursor:pointer;white-space:nowrap;gap:7px}
.atl2 .viewbtn:hover{border-color:var(--ink)}
.atl2 .viewbtn.on{border-color:#0E8A4F;color:#0A6B3D;background:#F4FBF6}
.atl2 .viewbtn.off{opacity:.45;pointer-events:none;cursor:default}
.atl2 a.viewbtn{display:inline-flex;align-items:center;text-decoration:none}
.atl2 .viewbtn.sm{padding:0 10px;font-size:12.5px;gap:5px}
.atl2 .viewbtn.searching{
  opacity:1;pointer-events:none;cursor:wait;position:relative;overflow:hidden;
  color:#0A6B3D;border-color:#86EFAC;background:#F0FDF4}
.atl2 .viewbtn.searching .sitespin{
  width:11px;height:11px;border:1.6px solid #BBF7D0;border-top-color:#0E8A4F;
  border-radius:50%;flex:none;animation:pp-sitespin .65s linear infinite}
.atl2 .viewbtn.searching::after{
  content:'';position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(90deg,transparent,rgba(14,138,79,.18),transparent);
  animation:pp-siteshimmer .95s ease infinite}
@keyframes pp-sitespin{to{transform:rotate(360deg)}}
@keyframes pp-siteshimmer{from{transform:translateX(-100%)}to{transform:translateX(100%)}}
@media (prefers-reduced-motion:reduce){
  .atl2 .viewbtn.searching .sitespin,.atl2 .viewbtn.searching::after{animation:none}
}
.atl2 .extico{flex:none;display:block}
.atl2 .dacts{display:flex;align-items:stretch;gap:8px;flex:none}
body.pp-desk .atl2.ops .drow{
  display:flex;flex-wrap:nowrap;align-items:stretch;width:100%;gap:8px}
body.pp-desk .atl2.ops .dfield{flex:1 1 auto!important;min-width:0!important;max-width:none}
body.pp-desk .atl2.ops .dfield input{width:100%}
body.pp-desk .atl2.ops .dacts{flex:none;margin-left:0}
.atl2 .detect{transition:opacity .2s ease}
.atl2 .detect.off{opacity:0}
.atl2 .demand.swap{animation:pp-bar-swap .55s ease}
@keyframes pp-bar-swap{
  0%{background:#fff}
  40%{background:#E7F7EE}
  100%{background:transparent}}
.atl2 .demand.swap .dfield::after{
  content:'';position:absolute;inset:3px;border-radius:inherit;pointer-events:none;
  background:linear-gradient(90deg,transparent,rgba(14,138,79,.18),transparent);
  animation:pp-bar-shimmer .55s ease}
@keyframes pp-bar-shimmer{
  from{transform:translateX(-70%)}
  to{transform:translateX(70%)}}
.atl2 .demand.swap .dfield input{animation:pp-bar-ink .4s ease}
@keyframes pp-bar-ink{
  0%{opacity:.2}
  100%{opacity:1}}
.atl2.ops .zp-pair{display:grid;grid-template-columns:1fr 1fr;gap:8px;width:100%}
@media (max-width:1100px){.atl2.ops .zp-pair{grid-template-columns:1fr}}
.atl2 .rsp.slim{display:grid;grid-template-rows:1fr;flex-direction:unset;gap:0;margin-top:8px;
  overflow:hidden;
  transition:grid-template-rows .32s ease,opacity .22s ease,margin .32s ease}
.atl2 .rsp.slim.off{grid-template-rows:0fr;opacity:0;margin-top:0;pointer-events:none}
.atl2 .rsp.slim .rsp-in{min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:6px}
.atl2 .rsp.slim .rstext{width:100%;min-height:72px;max-height:140px;resize:vertical}
.atl2 .rspaste{display:inline-flex;align-items:center;gap:6px;margin:0;padding:0;
  background:none;border:0;font:inherit;font-size:12px;color:var(--muted);cursor:pointer}
.atl2 .rspaste:hover{color:var(--ink)}
.atl2 .rspaste i{font-style:normal;font-size:10px;opacity:.7}
.atl2.ops .zoom-ext{display:inline-flex;align-items:center;gap:7px;margin:10px 0 0;
  padding:8px 12px;background:#fff;color:#0A6B3D;border:1.5px solid #BBF7D0;
  border-radius:10px;font:inherit;font-size:13.5px;font-weight:700;text-decoration:none;
  width:fit-content;max-width:100%}
.atl2.ops .zoom-ext:hover{background:#F4FBF6;border-color:#0E8A4F}
.atl2.ops .zoom-ext em{font-style:normal;font-weight:500;font-size:11.5px;color:#64748B;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:18ch}

.atl2 .rserr{margin-top:8px;padding:8px 11px;border-radius:var(--ra);font-size:12px;
  line-height:1.45;color:#9f1239;background:#FEF2F2;border:1px solid #FECACA}

/* La fiche : titre, tags, carte mentale, résumé — l'aperçu du studio, au format
   du cockpit. Le PNG vient du worker (mindmap_png_b64) : aucune bibliothèque
   distante à charger, donc rien à voir avec un CDN bloqué. */
.atl2 .rscard{margin-top:9px;border:1px solid var(--line);border-radius:var(--ra);
  background:var(--panel);overflow:hidden}
.atl2 .rscard .rsh{display:flex;align-items:center;gap:9px;padding:9px 11px;
  border-bottom:1px solid var(--line);background:var(--panel3)}
.atl2 .rscard .rsh b{flex:1;min-width:0;font-size:13px;line-height:1.3;color:var(--ink);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .rscard .rsh a{flex:none;font-size:11px;color:var(--brand-d);text-decoration:none}
.atl2 .rscard .rsh a:hover{text-decoration:underline}
.atl2 .rscard .rsx{flex:none;background:none;border:0;font:inherit;font-size:16px;line-height:1;
  color:var(--muted);cursor:pointer;padding:0 2px}
.atl2 .rscard .rsx:hover{color:var(--ink)}
.atl2 .rscard .rsmk{margin:9px 11px 0;font-size:12.5px;line-height:1.5;color:var(--ink)}
.atl2 .rscard .rstags{display:flex;flex-wrap:wrap;align-items:center;gap:5px;padding:8px 11px 0}
.atl2 .rscard .rstags em{font-style:normal;font-family:var(--mono);font-size:8.5px;
  letter-spacing:.12em;color:var(--dim);margin-right:2px}
.atl2 .rscard .rstags span{font-size:10.5px;font-weight:700;color:var(--muted);
  background:var(--panel3);border:1px solid var(--line);border-radius:5px;padding:2px 7px}
/* MESURÉ le 11/08 sur une fenêtre de 900 px : avec un plafond FIXE de 240 px, la
   liste tombait de 542 à 147 px au moment où la fiche s'affiche — c'est-à-dire
   au moment précis où les sociétés viennent d'y être versées. Le plafond suit
   donc l'écran : pleine taille au-dessus de ~1330 px de haut, et il rend ses
   pixels à la liste sur les écrans courts, où ils manquent vraiment. */
.atl2 .rscard .rsbody{display:flex;gap:12px;padding:9px 11px;
  max-height:min(240px,18vh);overflow-y:auto}
.atl2 .rscard .rsmm{flex:none;width:44%;max-width:340px;margin:0}
.atl2 .rscard .rsmm img{width:100%;display:block;border:1px solid var(--line);border-radius:6px;
  background:#fff}
.atl2 .rscard .rsmm figcaption{margin-top:4px;font-family:var(--mono);font-size:8.5px;
  letter-spacing:.12em;color:var(--dim);text-align:center}
.atl2 .rscard .rssum{flex:1;min-width:0;font-size:12.5px;line-height:1.55;color:var(--muted)}
.atl2 .rscard .rssum p{margin:0 0 7px}
.atl2 .rscard .rsfoot{display:flex;align-items:center;gap:10px;padding:8px 11px;
  border-top:1px solid var(--line);font-size:11.5px;color:var(--muted);background:var(--panel3)}
.atl2 .rscard .rsfoot>span{flex:1;min-width:0}
.atl2 .rscard .rsfoot .rslink{flex:none;padding:4px 9px}

/* Le lien vers la fiche publiée, dans la colonne d'action de la liste
   pré-remplie — au même niveau que ⚡ Évaluer la liste. Trois états, et
   l'échec est DIT : afficher un lien vers une page qui n'a pas été publiée
   serait le même mensonge que « enregistré » avant la réponse du serveur. */
.atl2 .rslink{font-size:11px;text-align:center;text-decoration:none;color:var(--brand-d);
  border:1px solid var(--line2);border-radius:var(--ra);padding:6px 8px;line-height:1.25}
.atl2 a.rslink:hover{border-color:var(--brand);background:var(--brand-l)}
.atl2 .rslink.pend{color:var(--dim);border-style:dashed}
.atl2 .rslink.fail{color:#9f1239;border-color:#FECACA;background:#FEF2F2}

.atl2 .rslink.ok{color:var(--brand-d);border-color:var(--brand);background:var(--brand-l)}

/* ── LES DEUX LISTES DE SOCIÉTÉS ───────────────────────────────────────────
   🏷 citées (ce que le contenu NOMME) et 🎯 correspondantes (ce que le modèle
   PROPOSE). Même gabarit de rangée pour les deux — la différence se lit dans
   l'en-tête, pas dans l'habillage : donner deux styles à deux listes qui
   s'évaluent du même geste ferait croire à deux mécaniques.

   PLAFOND + DÉFILEMENT PROPRE : un article nomme volontiers vingt sociétés, et
   .atl2 est une boîte à hauteur fixe où tout ce qui vit au-dessus de la liste
   se paie en lignes visibles. */
.atl2 .rsblk{border-top:1px solid var(--line);padding:9px 11px 10px}
.atl2 .rsblk-h{display:flex;align-items:center;gap:8px;margin-bottom:2px}
.atl2 .rsblk-h b{font-size:12px;color:var(--ink)}
.atl2 .rsblk-h .n{font-family:var(--mono);font-size:9.5px;color:var(--dim);
  border:1px solid var(--line);border-radius:5px;padding:1px 6px}
.atl2 .rsblk-all{margin-left:auto;background:none;border:1px solid var(--line2);
  border-radius:var(--ra);font:inherit;font-size:10.5px;color:var(--muted);
  padding:3px 8px;cursor:pointer;white-space:nowrap}
.atl2 .rsblk-all:hover{border-color:var(--brand);color:var(--brand-d);background:var(--brand-l)}
.atl2 .rsblk-hint{margin:0 0 7px;font-size:11px;line-height:1.4;color:var(--dim)}
.atl2 .rsblk-none{margin:0;padding:10px 11px;border-top:1px solid var(--line);
  font-size:11.5px;color:var(--dim)}
.atl2 .rsblk-rows{display:flex;flex-direction:column;gap:5px;
  max-height:min(230px,26vh);overflow-y:auto}
.atl2 .rsrow{display:flex;align-items:flex-start;gap:9px;padding:7px 9px;
  border:1px solid var(--line);border-radius:var(--ra);background:var(--panel3)}
.atl2 .rsrow-t{flex:1;min-width:0}
.atl2 .rsrow-h{display:flex;align-items:baseline;flex-wrap:wrap;gap:6px}
.atl2 .rsrow-h .nm{font-size:12.5px;font-weight:700;color:var(--ink)}
.atl2 .rsrow-h .ch{font-family:var(--mono);font-size:9px;letter-spacing:.08em;
  text-transform:uppercase;color:var(--dim);border:1px solid var(--line2);
  border-radius:4px;padding:1px 5px}
.atl2 .rsrow .w{margin:3px 0 0;font-size:11.5px;line-height:1.45;color:var(--muted)}
.atl2 .rsrow .r{margin:2px 0 0;font-size:11px;line-height:1.4;color:var(--dim);font-style:italic}
.atl2 .rsrow-go{flex:none;background:none;border:1px solid var(--line2);border-radius:var(--ra);
  font:inherit;font-size:10.5px;color:var(--muted);padding:4px 9px;cursor:pointer;white-space:nowrap}
.atl2 .rsrow-go:hover{border-color:var(--brand);color:var(--brand-d);background:var(--brand-l)}

/* ── LE CARNET ─────────────────────────────────────────────────────────────
   La liste des recherches du cockpit, et le lecteur d'une recherche. Il vit
   sous la barre, au même endroit que la fiche d'aperçu : c'est la MÊME chose
   qu'on regarde, hier ou à l'instant. */
.atl2 .rsarch{margin-top:9px;border:1px solid var(--line);border-radius:var(--ra);
  background:var(--panel);overflow:hidden}
.atl2 .rsarch-h{display:flex;align-items:center;gap:9px;padding:9px 11px;
  border-bottom:1px solid var(--line);background:var(--panel3)}
.atl2 .rsarch-h b{font-size:12.5px;color:var(--ink)}
.atl2 .rsarch-h .ti{flex:1;min-width:0;font-size:12px;color:var(--muted);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .rsarch-h .n{font-family:var(--mono);font-size:9.5px;color:var(--dim);
  border:1px solid var(--line);border-radius:5px;padding:1px 6px;margin-right:auto}
.atl2 .rsarch-back{background:none;border:0;font:inherit;font-size:11.5px;
  color:var(--brand-d);cursor:pointer;padding:0;flex:none}
.atl2 .rsarch-back:hover{text-decoration:underline}
.atl2 .rsarch .rsx{flex:none;background:none;border:0;font:inherit;font-size:16px;line-height:1;
  color:var(--muted);cursor:pointer;padding:0 2px}
.atl2 .rsarch .rsx:hover{color:var(--ink)}
.atl2 .rsarch-msg{margin:0;padding:14px 11px;font-size:11.5px;color:var(--dim)}
.atl2 .rsarch-list{display:flex;flex-direction:column;max-height:min(320px,34vh);overflow-y:auto}
.atl2 .rsarch-row{display:flex;align-items:center;gap:10px;width:100%;text-align:left;
  background:none;border:0;border-bottom:1px solid var(--line);font:inherit;
  padding:9px 11px;cursor:pointer}
.atl2 .rsarch-row:hover{background:var(--panel3)}
.atl2 .rsarch-row .ti{flex:1;min-width:0;font-size:12.5px;font-weight:700;color:var(--ink);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .rsarch-row .me{flex:none;font-family:var(--mono);font-size:9.5px;color:var(--dim)}
.atl2 .rsarch-row .cn{flex:none;font-size:10.5px;color:var(--muted)}
.atl2 .rsarch-row .st,.atl2 .rsarch-sub .st{flex:none;font-family:var(--mono);font-size:9px;
  letter-spacing:.08em;text-transform:uppercase;color:var(--dim);
  border:1px solid var(--line2);border-radius:4px;padding:1px 6px}
.atl2 .rsarch-row .st.on,.atl2 .rsarch-sub .st.on{color:var(--brand-d);
  border-color:var(--brand);background:var(--brand-l)}
.atl2 .rsarch-one{max-height:min(460px,46vh);overflow-y:auto}
.atl2 .rsarch-sub{display:flex;align-items:center;gap:10px;padding:8px 11px;
  border-bottom:1px solid var(--line)}
.atl2 .rsarch-sub a{font-size:11px;color:var(--brand-d);text-decoration:none}
.atl2 .rsarch-sub a:hover{text-decoration:underline}

/* Le lecteur de fiche : mêmes briques que l'aperçu (.rscard), sans son plafond
   serré — ici on vient POUR lire, la liste des dossiers n'attend pas dessous. */
.atl2 .rsdet .rsmk{margin:9px 11px 0;font-size:12.5px;line-height:1.5;color:var(--ink)}
.atl2 .rsdet .rstags{display:flex;flex-wrap:wrap;align-items:center;gap:5px;padding:8px 11px 0}
.atl2 .rsdet .rstags em{font-style:normal;font-family:var(--mono);font-size:8.5px;
  letter-spacing:.12em;color:var(--dim);margin-right:2px}
.atl2 .rsdet .rstags span{font-size:10.5px;font-weight:700;color:var(--muted);
  background:var(--panel3);border:1px solid var(--line);border-radius:5px;padding:2px 7px}
.atl2 .rsdet .rsbody{display:flex;gap:12px;padding:9px 11px}
.atl2 .rsdet .rsmm{flex:none;width:44%;max-width:340px;margin:0}
.atl2 .rsdet .rsmm img{width:100%;display:block;border:1px solid var(--line);border-radius:6px;
  background:#fff}
.atl2 .rsdet .rsmm figcaption{margin-top:4px;font-family:var(--mono);font-size:8.5px;
  letter-spacing:.12em;color:var(--dim);text-align:center}
.atl2 .rsdet .rssum{flex:1;min-width:0;font-size:12.5px;line-height:1.55;color:var(--muted)}
.atl2 .rsdet .rssum p{margin:0 0 7px}
.atl2 .rsdet .rsblk-rows{max-height:none}
.atl2 .rspro-c{margin:0 0 8px;font-size:12px;line-height:1.55;color:var(--muted)}
.atl2 .rspro-l{margin:0;padding-left:16px;font-size:11.5px;line-height:1.5;color:var(--muted)}
.atl2 .rssrc{display:flex;flex-wrap:wrap;gap:6px}
.atl2 .rssrc a{font-size:11px;color:var(--brand-d);text-decoration:none;
  border:1px solid var(--line2);border-radius:var(--ra);padding:3px 8px;
  max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .rssrc a:hover{border-color:var(--brand);background:var(--brand-l)}

@media (max-width:760px){
  .atl2 .rsp{flex-direction:column}
  .atl2 .rsp .side{width:100%}
  .atl2 .rscard .rsbody,.atl2 .rsdet .rsbody{flex-direction:column;max-height:300px}
  .atl2 .rscard .rsmm,.atl2 .rsdet .rsmm{width:100%;max-width:none}
  .atl2 .rsarch-row{flex-wrap:wrap;gap:4px 10px}
  .atl2 .rsarch-row .ti{flex:1 0 100%}
}
/* ── LISTE UNIFIÉE (16/08 : « quand on clique ça passe en mode carte ») :
   les lignes PLIÉES restent des lignes compactes ; une ligne OUVERTE (+ son
   panneau) devient un BLOC blanc bordé à coins ronds qui respire — le look
   déplié validé, appliqué ligne par ligne. Scopé .opsl (feed ops). */
.atl2 .list.opsl .row.open{margin-top:12px;background:#fff;
  border:1px solid #E2E8F0;border-bottom:0;border-radius:10px 10px 0 0}
.atl2 .list.opsl .row.open + .card,
.atl2 .list.opsl .card{background:#fff;border:1px solid #E2E8F0;
  border-top:0;border-radius:0 0 10px 10px;margin-bottom:12px;
  box-shadow:0 1px 2px rgba(15,23,42,.04)}
/* « Tout déplier / Tout replier » — deux gestes discrets près du sélecteur */
.atl2 .foldall{display:inline-flex;gap:4px;margin-left:8px}
.atl2 .foldall button{background:none;border:1px solid var(--line);
  border-radius:6px;font:inherit;font-size:10.5px;font-weight:600;
  color:var(--muted);padding:5px 9px;cursor:pointer;white-space:nowrap}
.atl2 .foldall button:hover{color:var(--ink);border-color:var(--ink)}
.atl2 .foldall button[aria-pressed=true]{color:var(--brand-d);
  border-color:var(--brand);background:var(--brand-l)}
/* MAXI : le tri au menu (plus de colonnes dans la grille) */
.atl2 .sortsel{display:inline-flex;align-items:center;gap:6px;margin-left:8px}
.atl2 .sortsel span{font-family:var(--mono);font-size:9px;letter-spacing:.08em;
  text-transform:uppercase;color:var(--dim)}
.atl2 .sortsel select{font:inherit;font-size:11.5px;border:1px solid var(--line);
  border-radius:6px;padding:4px 6px;background:#fff;color:var(--ink)}
/* ── LIGNE (16/08 : « le déplié de tout à l'heure avec les bords arrondis
   et l'arrière-plan gris, c'était vraiment bien ») : la nappe grise commune,
   CHAQUE ligne devient un bloc blanc arrondi — pliée ou ouverte — et l'air
   sépare. Les en-têtes de groupe flottent sur la nappe. */
.atl2 .list.ligne{background:#F1F5F9;padding:6px 28px 32px}
@media (max-width:760px){.atl2 .list.ligne{padding:4px 12px 20px}}
.atl2 .list.ligne .row{margin-top:10px;background:#fff;
  border:1px solid #E2E8F0;border-radius:10px;
  box-shadow:0 1px 2px rgba(15,23,42,.04)}
.atl2 .list.ligne .row.open{border-radius:10px 10px 0 0;border-bottom:0;
  box-shadow:none;margin-top:12px}
.atl2 .list.ligne .card{background:#fff;border:1px solid #E2E8F0;
  border-top:0;border-radius:0 0 10px 10px;margin-bottom:2px;
  box-shadow:0 1px 2px rgba(15,23,42,.04)}
.atl2 .list.ligne .grp-h{background:transparent;border:0;margin-top:18px;
  padding-left:2px}
.atl2 .list.ligne .moregrp{background:transparent}
/* ── LA CARTE À HAUTEUR CONSTANTE (16/08 : « que les continents fassent la
   même hauteur que la map monde ») : l'Europe en portrait doublait la page.
   Le viewBox garde son aspect, la hauteur est bornée, le fond centre. */
/* hauteur IDENTIQUE pour tous les onglets (16/08 : « je veux la même hauteur
   pour toutes ») : un plafond ne suffisait pas — Monde tombait à 448 et
   l'Amérique du Nord tenait 520. Hauteur FIXE, le viewBox se centre dedans
   (preserveAspectRatio par défaut : xMidYMid meet). */
/* la CARTE remplit la scène : min 460 partout (hauteur uniforme /actualites),
   et si le rail est plus haut (/cibles : 11 contrôles), la carte S'ÉTIRE à sa
   hauteur — le continent ENTIER se centre dedans (meet), jamais coupé, et le
   rail ne déborde plus sur « Effacer / Alerte email » (16/08). */
/* hauteur FIXE (jamais le ratio du continent : l'Europe portrait montait à
   925px, 16/08) — la scène vaut donc max(460, rail) et contient tout. */
.atl2 .mapzone{display:flex;height:460px;min-height:460px;max-height:460px}
.atl2 .mapzone svg{display:block;width:100%;height:460px!important;
  flex:1;max-height:460px!important;margin:0 auto}
@media (min-width:1400px){
  .atl2 .mapzone{height:500px;min-height:500px;max-height:500px}
  .atl2 .mapzone svg{height:500px!important;max-height:500px!important}
}
.atl2 .stage:not(.folded){flex-direction:row}
.atl2 .fzone .conts{padding:0 12px 0 20px}
.atl2 .listhead{padding-left:28px;padding-right:28px}
@media (max-width:760px){
  .atl2 .listhead{padding-left:12px;padding-right:12px}
  .atl2 .fzone .conts{padding:0 8px}
}
/* JAMAIS DE SCROLL DANS LE RAIL (16/08 : « je ne veux pas de scroll vertical
   sur le menu à droite, comme dans /actualites ») : le rail portait
   overflow-y:auto (styles.gen:866) et se coupait dès que la carte était plus
   courte que ses filtres. Il pousse maintenant la scène à SA hauteur. */
.atl2 .fbar{overflow-y:visible;overflow-x:visible;height:auto}
.atl2 .stage{align-items:stretch}
/* l'attente habitée S'ÉTEND à la carte et au pipeline (16/08) : la surface
   respire au lieu d'afficher un planisphère mort et des zéros. */
.atl2 .mapzone.waiting svg{animation:lwmap 1.6s ease-in-out infinite}
.atl2 .funnel.waiting{animation:lwmap 1.6s ease-in-out infinite}
.atl2 .funnel.waiting .n{color:transparent!important;
  background:linear-gradient(90deg,#EEF2F6 25%,#E2E8F0 45%,#EEF2F6 65%);
  background-size:200% 100%;border-radius:6px;animation:lws 1.4s linear infinite}
@keyframes lwmap{0%,100%{opacity:1}50%{opacity:.55}}
/* L'ESSENTIEL DU JOUR de la thèse — même grammaire que l'intro /actualites :
   libellé mono, puces légères, pleine largeur. */
.atl2 .thesis-lead{padding:14px 16px 4px;background:var(--panel)}
.atl2 .thesis-lead .tlk{display:block;font-family:var(--mono);font-size:9.5px;
  font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--dim);
  margin:0 0 7px}
.atl2 .thesis-lead ul{margin:0;padding:0;list-style:none}
.atl2 .thesis-lead li{position:relative;padding-left:16px;margin:0 0 5px;
  font-size:13.5px;line-height:1.6;color:#46566B}
.atl2 .thesis-lead li::before{content:'·';position:absolute;left:4px;top:-1px;
  color:#94A3B8;font-weight:700}
.atl2 .thesis-lead .tlp{margin:0;font-size:13.5px;line-height:1.6;color:#46566B}
/* le menu « ce qu'on peut faire » S'OUVRE SUR PLACE, jamais sous la liste
   (16/08 : PJ3) — l'ancêtre .listhead doit laisser sortir l'absolu.
   ⚠️ PLUS DE position:relative ICI. Cette ligne écrasait le position:sticky
   posé plus haut — même spécificité, mais plus bas dans le fichier, donc elle
   gagnait. Résultat mesuré : l'en-tête restait relative AVEC mon top:158px,
   donc décalé de 158 px vers le bas au lieu d'être collé, et il recouvrait la
   box des signaux (17/08 : « les cibles avec un signal fort apparaissent SOUS
   les menus »). sticky crée le même contexte de positionnement que relative
   pour l'absolu du menu : rien n'est perdu. */
.atl2 .listhead{overflow:visible;flex-wrap:wrap}
.atl2 .listhead .conts{flex:1 0 100%;border:0;padding:6px 0 0;background:transparent}
.atl2 .listhead.mapoff{align-items:center;row-gap:8px;padding:8px 28px 10px}
.atl2 .listhead.mapoff .ctx{flex:1 1 auto;min-width:0;order:unset}
body.pp-desk .atl2.ops .listhead.mapoff .groupbar{display:none}
.atl2 .listhead .lh-top{display:contents}
/* 2 rangées, largeur de la LISTE seulement.
   1) compte · Monde · LISTE · Tout ▾ · Évaluer
   2) recherche · Filtres · Effacer · Alerte */
body.pp-desk .atl2.ops .listhead.mapoff{
  display:flex!important;flex-direction:column!important;flex-wrap:nowrap!important;
  align-items:stretch!important;gap:0;padding:8px 14px 10px;overflow:visible}
body.pp-desk .atl2.ops .listhead.mapoff .lh-top{
  display:flex!important;flex-direction:row;flex-wrap:nowrap;align-items:center;
  gap:8px;width:100%;min-width:0;min-height:40px}
body.pp-desk .atl2.ops .listhead.mapoff .lh-top .main,
body.pp-desk .atl2.ops .listhead.mapoff .lh-top .ctx{min-width:0}
body.pp-desk .atl2.ops .listhead.mapoff .chainwrap{
  flex-direction:row;align-items:center;gap:8px;margin-left:auto;flex:none}
body.pp-desk .atl2.ops .listhead.mapoff .chainhint{display:none}
body.pp-desk .atl2.ops .listhead.mapoff .lh-tools{
  display:flex;flex-direction:row;align-items:center;width:100%;flex:none;
  gap:8px;padding:8px 0 0;margin:6px 0 0;border-top:1px solid var(--line);
  min-height:44px;box-sizing:border-box}
body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip{
  display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;
  align-items:center;flex:1 1 auto!important;width:100%;min-width:0;
  padding:0;margin:0;border:0;order:unset!important;gap:8px}
body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip-b,
body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .frow2{
  display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;gap:8px}
body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip-b{flex:1;min-width:0}
body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .frow2{margin-left:auto;flex:none}
body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fsrch{
  flex:1 1 180px;min-width:120px;max-width:240px}
body.pp-desk .atl2.ops .grp{display:block}
body.pp-desk .atl2.ops .list.maxi .grp{display:contents}
.atl2.ops .grp-pin{position:fixed;z-index:33;display:flex;align-items:center;gap:10px;
  padding:8px 14px;box-sizing:border-box;background:var(--panel2,#fff);
  border-bottom:1px solid var(--line,#e2e8f0);box-shadow:0 1px 0 var(--line,#e2e8f0);
  pointer-events:none}
.atl2.ops .grp-pin .ic{width:24px;height:24px;border-radius:var(--r,6px);background:var(--ink);
  color:#fff;display:grid;place-items:center;font-size:12px;flex:none}
.atl2.ops .grp-pin .t{font-weight:700;font-size:13px}
.atl2.ops .grp-pin .s{font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--muted)}
/* Carte encore à l'écran : UNE ligne, Évaluer tout à droite.
   (ctx en 100% + wrap envoyait Tout / Évaluer sur une 2e rangée.) */
body.pp-desk .atl2.ops .listhead:not(.mapoff){
  flex-wrap:nowrap!important;align-items:center;gap:8px;padding:6px 16px}
body.pp-desk .atl2.ops .listhead:not(.mapoff) .ctx{
  flex:1 1 auto!important;min-width:0;order:unset!important;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
body.pp-desk .atl2.ops .listhead:not(.mapoff) .chainwrap{
  flex-direction:row;align-items:center;gap:8px;margin-left:auto}
body.pp-desk .atl2.ops .listhead:not(.mapoff) .chainhint{display:none}
body.pp-desk .atl2.ops .listhead:not(.mapoff) .doable{margin-left:0}
.atl2 .chainwrap{display:inline-flex;flex-direction:column;align-items:flex-end;
  gap:2px;margin-left:auto;flex:none}
.atl2 .chainwrap .chain{margin-left:0}
.atl2 .chainhint{font-style:normal;font-size:10px;line-height:1.2;color:var(--muted);
  letter-spacing:.01em;max-width:22ch;text-align:right}
.atl2 .fstrip .mapbtn{flex:none}
.atl2 .fstrip{flex:1 0 100%;display:flex;flex-direction:row;flex-wrap:wrap;
  align-items:center;gap:8px;padding:6px 0 0;min-width:0;
  border-top:1px solid var(--line)}
.atl2 .fstrip-a{flex:none}
.atl2 .fstrip-a .seg{display:flex;flex-wrap:wrap;gap:6px;width:auto;
  grid-template-columns:none;background:none;border:0;overflow:visible}
.atl2 .fstrip-a .seg button{flex:0 1 auto;min-width:0;display:inline-flex;
  align-items:center;gap:6px;height:auto;padding:7px 10px;font-size:11px;
  border:1px solid var(--line);border-radius:var(--r);background:var(--panel);
  color:var(--ink);cursor:pointer;white-space:nowrap}
.atl2 .fstrip-a .seg button:last-child{border-right:1px solid var(--line)}
.atl2 .fstrip-a .seg button[aria-pressed="true"]{border-color:var(--ink);
  background:var(--ink);color:#fff}
.atl2 .fstrip-a .seg button b{font-family:var(--mono);font-size:11px;color:var(--dim)}
.atl2 .fstrip-a .seg button[aria-pressed="true"] b{color:#fff}
.atl2 .fstrip-b{display:flex;flex-wrap:wrap;align-items:center;gap:6px;
  flex:1 1 220px;min-width:0}
.atl2 .fstrip .fsrch{flex:0 1 220px;min-width:140px}
.atl2 .fstrip .facets{display:flex;flex-wrap:wrap;gap:6px}
.atl2 .fstrip .frow2{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-left:auto}
.atl2 .listhead .fpanel{position:absolute;left:0;right:0;top:100%;width:auto;
  z-index:30;max-height:52vh}
.atl2 .doable{position:relative}
.atl2 .doable .dolist{z-index:220}
/* CRIBLE · MÉMO sur UNE ligne (16/08 : « garder MATCH mais mettre mémo à
   lancer sur la même ligne, ça augmente trop la hauteur ») — badges en rang,
   ellipsés, jamais d'empilement dans la cellule. */
/* ⚠️ styles.gen:555 pose .atl2 .app.pipe .c-vd (flex-direction:column) —
   PLUS SPÉCIFIQUE que .atl2 .row .c-vd : ma première règle ne gagnait pas,
   « mémo à lancer » restait sous MATCH (16/08, vu en navigation privée).
   On reprend donc le même niveau de spécificité. */
.atl2 .app.pipe .c-vd,.atl2 .app .row .c-vd,.atl2 .row .c-vd{
  display:inline-flex!important;flex-direction:row!important;
  flex-wrap:nowrap!important;align-items:center;gap:4px;min-width:0;
  max-width:100%;overflow:hidden}
/* UNE LIGNE, toujours : le 11ᵉ enfant (Statut) et .c-sig en colonne
   faisaient tomber pouces + Analyser à la ligne. */
.atl2 .list .row{align-items:center}
.atl2 .nd{flex-wrap:nowrap}
.atl2 .nd .racq{flex:none;max-width:14ch;overflow:hidden;text-overflow:ellipsis;
  white-space:nowrap}
.atl2 .row .c-sig{flex-direction:row!important;flex-wrap:nowrap;align-items:center;
  gap:6px;overflow:hidden}
.atl2 .row .c-sig .sigwin{display:none}
.atl2 .row .rstat{flex:none}
.atl2 .row .c-vd>*{flex:0 1 auto;min-width:0;white-space:nowrap;overflow:hidden;
  text-overflow:ellipsis}
.atl2 .row .c-vd .vd.wait{max-width:96px;border:0!important;background:none!important;
  padding-left:0;padding-right:0}
/* le filet sous MATCH ne sépare plus rien depuis que tout tient sur une
   ligne (16/08 : « une ligne au-dessus qui ne sert à rien ») */
.atl2 .row .c-vd::after,.atl2 .row .c-vd::before{display:none!important}
.atl2 .row .c-vd{border:0!important;border-top:0!important;border-bottom:0!important}
/* ── L'EN-TÊTE DU FONDS : deux modules LISIBLES (16/08 soir) ─────────────
   « COUVERTURE DU MARCHÉ » chevauchait « MOTEUR DE MÉMOS » : les libellés se
   superposaient et le chiffre restait seul, sans dire de quoi il parle. Les
   deux modules sont désormais des blocs autonomes qui passent à la ligne
   plutôt que de se marcher dessus, avec leur libellé en entier. */
.atl2 .idmain{display:flex;flex-wrap:nowrap;align-items:center;gap:8px;min-width:0}
.atl2 .idmain .cover,.atl2 .idmain .engine{flex:0 1 auto;min-width:0;
  display:inline-flex;flex-direction:row;flex-wrap:nowrap;align-items:center;
  gap:8px;padding:6px 12px;height:36px;box-sizing:border-box;
  border:1px solid var(--line);border-radius:10px;background:var(--panel);
  cursor:pointer}
.atl2 .idmain .cover:hover,.atl2 .idmain .engine:hover{border-color:var(--ink)}
.atl2 .idmain .el{position:static!important;font-family:var(--mono);font-size:8.5px;
  letter-spacing:.12em;text-transform:uppercase;color:var(--dim);white-space:nowrap;
  overflow:visible;width:auto;height:auto;clip:auto;flex:none}
.atl2 .idmain .ev{display:inline-flex;align-items:center;gap:6px;white-space:nowrap;
  font-size:13px;color:var(--ink)}
.atl2 .idmain .edv{display:none}
.atl2 .idmain .bar{width:52px;height:6px;border-radius:3px;background:var(--line);
  overflow:hidden;display:inline-block}
.atl2 .idmain .bar i{display:block;height:100%;background:var(--brand)}
.atl2 .idmain .idsp{flex:1 1 auto;min-width:8px}
.atl2 .idmain .icgrp,.atl2 .idmain .isrch{flex:none}
@media (max-width:900px){
  .atl2 .idmain{flex-wrap:wrap}
  .atl2 .idmain .cover,.atl2 .idmain .engine{height:auto;min-height:36px;flex-wrap:wrap}
}
/* ── ALERTES EMAIL : la présentation (16/08 soir) ────────────────────────
   « les OFF débordent, les + − ne sont pas précis, les cases à cocher sont
   illisibles ». Une rangée = libellé à gauche qui peut aller à la ligne,
   commande à droite qui ne rétrécit jamais ; boutons ± carrés et lisibles ;
   cases à cocher à taille réelle avec leur libellé aligné. */
/* ⚠️ CORRECTIF DU CORRECTIF (17/08 : « le popup Vos alertes email n'a toujours
   pas été corrigé, c'est catastrophique, Tous les jours débordent »). Le
   16/08 j'avais mis flex-wrap:nowrap avec la commande en flex:none : deux
   boutons « Jours ouvrés » + « Tous les jours » ne tiennent PAS dans la
   largeur, et nowrap + flex:none les fait DÉBORDER de la carte, qui les
   coupe. Interdire le retour à la ligne ne fait pas rentrer un contenu trop
   large : ça le pousse dehors. La rangée peut donc passer à la ligne, et la
   commande y descend en entier plutôt que d'être rognée. */
.atl2 .qrow{display:flex;align-items:center;gap:10px 14px;flex-wrap:wrap}
.atl2 .qrow>span:first-child{flex:1 1 180px;min-width:0}
.atl2 .qrow .qset{flex:0 1 auto;max-width:100%;display:inline-flex;align-items:center;
  gap:8px;flex-wrap:wrap;justify-content:flex-end}
.atl2 .qrow .qset .abtn{min-width:0;justify-content:center;padding:8px 12px;
  font-weight:700;letter-spacing:.04em;white-space:nowrap}
/* la pastille ON/OFF garde sa largeur : elle doit rester cliquable et lisible */
.atl2 .qrow .qset .abtn.onoff{min-width:62px}
.atl2 .qrow .qset button:not(.abtn){width:34px;height:34px;display:inline-grid;
  place-items:center;padding:0;font-size:16px;line-height:1;border:1px solid var(--line);
  border-radius:8px;background:#fff;cursor:pointer;color:var(--ink)}
.atl2 .qrow .qset button:not(.abtn):hover:not(:disabled){border-color:var(--ink)}
.atl2 .qrow .qset button:not(.abtn):disabled{opacity:.45;cursor:default}
.atl2 .qrow .qset b{min-width:56px;text-align:center;font-size:14px}
/* les jours : deux boutons qui tiennent, jamais coupés */
.atl2 .qrow .qset .abtn+.abtn{margin-left:0}
/* sections de l'email : cases à cocher lisibles */
.atl2 .secl{display:flex;flex-direction:column;gap:8px;margin:6px 0 2px}
.atl2 .secl .secli{display:flex;align-items:flex-start;gap:10px;font-size:13.5px;
  line-height:1.45;color:var(--ink);cursor:pointer}
.atl2 .secl .secli input[type=checkbox]{flex:none;width:17px;height:17px;
  margin:1px 0 0;accent-color:var(--brand);cursor:pointer}
.atl2 .secl .secli i{color:var(--dim);font-size:12px;font-style:italic}
/* L'APERÇU : UN SEUL ascenseur (16/08 : « quand je clique sur prévisualiser
   il y a un scroll vertical ») — l'iframe prend toute la hauteur de son
   contenu et c'est la modale qui défile, pas un cadre dans le cadre. */
.atl2 .mailp-frame{width:100%;height:78vh;min-height:420px;border:1px solid var(--line);
  border-radius:10px;background:#fff;display:block;margin-top:10px}
.atl2 .mailp-row{display:flex;gap:8px;flex-wrap:wrap}
/* le choix du bon site quand plusieurs le portent (16/08) */
.atl2 .sitepick{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;width:100%}
.atl2 .sitepick .sp1{display:inline-flex;align-items:center;gap:6px;
  border:1px solid var(--line);border-radius:8px;padding:4px 6px 4px 10px;background:#fff}
.atl2 .sitepick a{font-family:var(--mono);font-size:10.5px;color:var(--muted);
  text-decoration:none}
.atl2 .sitepick a:hover{color:var(--ink)}
.atl2 .sitepick button{font:inherit;font-size:11px;font-weight:700;cursor:pointer;
  color:#fff;background:var(--brand);border:0;border-radius:6px;padding:5px 9px}
.atl2 .sitepick button:hover{background:var(--brand-d)}
/* la ligne qu'on vient de rejoindre se signale (16/08) */
.atl2 .row.flashrow{animation:flashrow 2.2s ease-out}
@keyframes flashrow{0%,60%{background:var(--brand-l);box-shadow:inset 3px 0 0 var(--brand)}
  100%{background:transparent;box-shadow:none}}
/* LES COMPTEURS EN ENTIER dans le rail (16/08 : « 650 » coupé en « 65 ») :
   le libellé peut s'ellipser, JAMAIS le nombre. */
.atl2 .fbar .seg button{font-size:10px;padding:7px 7px;gap:4px}
.atl2 .fbar .seg button b{flex:none!important;margin-left:auto;overflow:visible!important;
  text-overflow:clip!important;font-size:10px}
/* CRÉDITS MÉMO (16/08 : « ils sont tous mal affichés ») — grille propre :
   le libellé « N crédits · P € » AU-DESSUS, le bouton dessous, rien qui
   chevauche et une hauteur égale par carte. */
.atl2 .packs{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
  gap:12px;align-items:stretch}
.atl2 .packs .pack{display:flex;flex-direction:column;gap:10px;min-width:0;
  padding:14px;border:1px solid var(--line);border-radius:10px;background:var(--panel)}
.atl2 .packs .pack .pt{font-size:13px;font-weight:700;color:var(--ink);
  line-height:1.35;white-space:normal;order:0}
.atl2 .packs .pack button{order:1;margin-top:auto;width:100%;justify-content:center}
/* UNE seule surface matin + stats (16/08 : « un encadré arrondi et une ligne
   séparatrice en trop — fondre tout cet espace ») : la phrase du matin, la
   chaîne 1132 → 86 → 1 → 41 et le graphe respirent dans le même bloc, sans
   cadre interne ; le chevron agrandir/réduire reste. */
.atl2 .goal{border-bottom:0!important;padding-bottom:6px}
.atl2 .fstats{border:0!important;border-radius:0!important;box-shadow:none!important;
  margin:0!important;background:var(--panel);border-bottom:1px solid var(--line)!important;
  padding-top:2px}
.atl2 .fstats .fst-row{border-top:0}
/* ── L'ENTONNOIR AVEC SES PÉRIODES À GAUCHE (17/08 : « relie, montre la
   logique »). Une rangée = une période nommée + la même chaîne de nombres.
   C'est l'alignement des libellés de période qui fait comprendre que le jour
   est dans la fenêtre et la fenêtre dans le total. */
.atl2 .fstats .fst-lab{display:flex;align-items:baseline;flex-wrap:wrap;gap:2px 8px;
  padding:3px 0}
.atl2 .fstats .fst-per{flex:none;min-width:132px;font-family:var(--mono);font-size:9.5px;
  letter-spacing:.07em;text-transform:uppercase;color:var(--dim)}
.atl2 .fstats .fst-mkt i{color:var(--dim)}
/* ── LA FENÊTRE DE TIR, portée de la V1 (17/08) : les puces par cible sous le
   titre rouge. Une box qui ne donne qu'un nombre ne dit pas qui contacter. */
.atl2 .sigstrip .sg-h{display:flex;align-items:baseline;gap:9px;flex-wrap:wrap}
.atl2 .sigstrip .sg-sp{flex:1}
.atl2 .sigstrip .sg-c{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.atl2 .sigstrip .sg-chip{display:inline-flex;align-items:baseline;gap:6px;
  padding:5px 10px;border:1px solid #f0b8b8;border-radius:11px;background:#fff;
  font:inherit;cursor:pointer;text-align:left;max-width:340px}
.atl2 .sigstrip .sg-chip:hover{border-color:#e79a9a}
.atl2 .sigstrip .sg-chip b{font-size:12px;color:#b3261e;font-weight:800;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:150px}
.atl2 .sigstrip .sg-chip i{font-style:normal;font-size:11px;color:#b3261e;opacity:.82;
  font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .sigstrip .sg-chip em{font-style:normal;font-size:10px;color:#9a6a63;white-space:nowrap}
.atl2 .sigstrip .sg-more{font:inherit;font-size:11.5px;font-weight:800;color:#b3261e;
  background:#fff;border:1px solid #f0b8b8;border-radius:999px;padding:5px 11px;cursor:pointer}
.atl2 .sigstrip .sg-x{background:none;border:0;cursor:pointer;font-size:14px;line-height:1;
  color:#c08a86;padding:1px 5px;border-radius:5px}
.atl2 .sigstrip .sg-x:hover{background:#fbe4e2;color:#8a1d17}
.atl2 .sigstrip.mini .sg-c{display:none}
/* le mémo en ONGLET (16/08) */
.atl2 .cdmemo .cdtxt{margin:0 0 10px}
.atl2 .cdmemo .cdacts{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
/* ── le segment de dates RENTRE dans le rail (16/08 : « déborde à droite,
   c'est moche ») : grille 2×2 pleine largeur, libellés ellipsés. */
.atl2 .fbar .seg{display:grid;grid-template-columns:1fr 1fr;gap:6px;width:100%;min-width:0}
/* ⚠️ CE BLOC-CI EST CELUI QUI GAGNE. Il existe un bloc identique en
   spécificité plus haut (« LES COMPTEURS EN ENTIER », 16/08) : à spécificité
   égale, c'est l'ordre source qui tranche, donc corriger le premier ne change
   RIEN à l'écran. C'est exactement ce qui s'est passé le 16/08 — Antoine a
   revu « 269 » et « 518 » coupés le lendemain.
   Le bouton ne rogne plus (overflow visible) : c'est le LIBELLÉ qui s'ellipse
   (.sl), et le nombre garde sa place quoi qu'il arrive. */
.atl2 .fbar .seg button{min-width:0;display:flex;align-items:center;gap:5px;
  overflow:visible;white-space:nowrap;font-size:10.5px;padding:7px 8px}
.atl2 .fbar .seg button .sl{min-width:0;overflow:hidden;text-overflow:ellipsis;
  white-space:nowrap}
.atl2 .fbar .seg button b{flex:none;margin-left:auto;overflow:visible;
  text-overflow:clip}
/* ── REMONTER EN HAUT (17/08) : discret, en bas à droite, au-dessus de tout —
   la barre d'aperçu est à 40, la carte à 25. */
.atl2 .totop{position:fixed;right:16px;bottom:18px;z-index:60;width:38px;height:38px;
  border-radius:50%;border:1px solid var(--line);background:var(--panel);color:var(--ink);
  font:inherit;font-size:16px;line-height:1;cursor:pointer;
  box-shadow:0 6px 18px rgba(15,23,42,.16)}
.atl2 .totop:hover{border-color:var(--ink);background:var(--panel2)}
/* ── LA BOX MOTEUR DE MÉMOS DÉBORDAIT (17/08, PJ1). Elle a une hauteur FIXE de
   36 px pour trois à quatre informations — rythme, état de pause, file, cloche —
   qui ne tiennent pas sur une ligne à cette largeur : le contenu sortait par le
   bas, hors du cadre. On laisse la boîte prendre la hauteur de ce qu'elle
   contient, et les éléments passer à la ligne proprement. Même traitement pour
   la couverture, qui a la même contrainte et le même risque. */
.atl2 .engine,.atl2 .cover{height:36px;min-height:36px;flex-wrap:nowrap;
  padding:6px 12px;row-gap:0;align-items:center;overflow:hidden}
.atl2 .engine .ev,.atl2 .cover .ev{white-space:nowrap}
.atl2 .engine .ego{white-space:nowrap}
/* ── LE PANNEAU OUTILS, complété d'après la V1 (17/08) : les trois étapes
   numérotées, et le message d'exemple dépliable. */
.atl2 .plughow{margin:6px 0 10px;padding-left:20px;display:grid;gap:5px}
.atl2 .plughow li{font-size:12.5px;line-height:1.5;color:var(--sub)}
.atl2 .plugex{margin:8px 0 4px}
.atl2 .plugex summary{cursor:pointer;font-size:12.5px;font-weight:700;color:var(--ink);
  list-style:none;padding:2px 0}
.atl2 .plugex summary::-webkit-details-marker{display:none}
.atl2 .plugex summary:before{content:'▸ ';color:var(--dim)}
.atl2 .plugex[open] summary:before{content:'▾ '}
.atl2 .mnote.warn{color:#8a5300}
/* ── LE STATUT DEPUIS LA LIGNE (17/08) : un menu compact posé dans la cellule
   de verdict, et un panneau qui propose de lancer le mémo quand on demande
   « Analysée » sans mémo — au lieu d'une boîte système qui ne dit ni le coût
   ni ce qu'on y gagne. */
.atl2 .rstat{position:relative;display:inline-flex;margin-left:6px}
.atl2 .rstb{display:inline-flex;align-items:center;gap:3px;padding:1px 5px;
  border:1px solid var(--line);border-radius:6px;background:var(--panel);
  color:var(--sub);font:inherit;font-size:9.5px;line-height:1.6;cursor:pointer;
  white-space:nowrap;max-width:96px;overflow:hidden;text-overflow:ellipsis}
.atl2 .rstb:hover{border-color:var(--brand);color:var(--ink)}
.atl2 .rstb i{font-style:normal;font-size:8px;color:var(--dim)}
.atl2 .rstm{position:absolute;top:calc(100% + 3px);right:0;z-index:30;
  display:flex;flex-direction:column;min-width:150px;padding:4px;
  border:1px solid var(--line);border-radius:8px;background:var(--panel);
  box-shadow:0 10px 26px rgba(15,23,42,.16)}
.atl2 .rsti{text-align:left;padding:5px 8px;border:0;border-radius:6px;
  background:none;color:var(--ink);font:inherit;font-size:11.5px;cursor:pointer}
.atl2 .rsti:hover{background:var(--panel2)}
.atl2 .rsti.on{background:var(--brand-l);color:var(--brand);font-weight:700}
.atl2 .rsti.busy{opacity:.5;cursor:default}
.atl2 .rstask{display:flex;flex-direction:column;gap:6px;padding:6px 7px;max-width:230px}
.atl2 .rstask b{font-size:11.5px;line-height:1.45;color:var(--ink);font-weight:600}
.atl2 .rsta{padding:5px 9px;border:1px solid var(--line);border-radius:6px;
  background:var(--panel2);color:var(--sub);font:inherit;font-size:11px;cursor:pointer}
.atl2 .rsta.pri{background:var(--ink);border-color:var(--ink);color:#fff;font-weight:700}
.atl2 .rsta:disabled{opacity:.5;cursor:default}
/* ── LA FILE DE TRAITEMENT, reprise de la V1 (17/08). En tête, l'offre et son
   DÉLAI DE VERDICT — la question à laquelle ce popup doit répondre. Puis
   l'échéance en clair, et la file entière avec rang, date réelle et extrait.
   Le bandeau passe en rouge sobre quand le délai vendu ne peut pas être tenu :
   un retard annoncé vaut mieux qu'un retard découvert. */
.atl2 .qoffre{display:flex;align-items:center;gap:9px;flex-wrap:wrap;
  padding:10px 14px;margin:0 0 10px;border:1px solid var(--line);border-radius:10px;
  background:var(--panel2);font-size:12.5px}
.atl2 .qoffre.late{border-color:var(--red);background:#FEF2F2}
.atl2 .qoffre .ol{font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;
  text-transform:uppercase;color:var(--dim)}
.atl2 .qoffre b{color:var(--ink);font-weight:800}
.atl2 .qoffre .od{color:var(--sub)}
.atl2 .qoffre .osp{flex:1}
.atl2 .qoffre .or{color:var(--ink);font-weight:700}
.atl2 .qoffre .or.dim{color:var(--dim);font-weight:600}
.atl2 .qeta{margin:8px 0 0;font-size:12px;line-height:1.5;color:var(--sub)}
.atl2 .qeta em{font-style:normal;color:var(--red);font-weight:700}
.atl2 .qhedge{margin:2px 0 8px;font-size:11px;color:var(--dim);line-height:1.45}
/* UN SEUL ascenseur : celui de la carte (.mb). La file entière se déroule
   dedans — plus de cadre dans le cadre (17/08 : « ne mets pas de double
   scroll, tout doit apparaître »). */
.atl2 .qrows.qfile{max-height:none;overflow:visible}
.atl2 .qr2.qfl{display:grid;grid-template-columns:34px 74px minmax(0,1fr) auto auto auto;
  gap:8px;align-items:center}
.atl2 .qr2.qfl .qex{grid-column:3 / -1;font-size:11px;color:var(--dim);line-height:1.45;
  display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .qwhen{font-family:var(--mono);font-size:9.5px;letter-spacing:.04em;
  text-transform:uppercase;color:var(--dim);white-space:nowrap}
.atl2 .qwhen.soon{color:var(--brand);font-weight:700}
.atl2 .qfresh{font-size:9.5px;font-family:var(--mono);text-transform:uppercase;
  letter-spacing:.06em;color:#0E8A4F;background:#E7F6EE;border-radius:999px;
  padding:1px 6px;white-space:nowrap}
.atl2 .qverd{margin:6px 0 0;padding:0 0 0 2px;list-style:none;display:grid;gap:5px}
.atl2 .qverd li{font-size:11.5px;line-height:1.5;color:var(--sub)}
.atl2 .qverd li b{font-family:var(--mono);font-size:10.5px;color:var(--ink)}
/* ── LE CALCUL DU MARCHÉ, dépliable dans le popup Couverture (17/08) : un
   tableau sobre, une ligne par code d'activité et par pays, le total en bas.
   Les lignes à zéro sont grisées — elles disent honnêtement qu'un pays n'a
   rien apporté plutôt que de disparaître. */
.atl2 .covcalc{margin:14px 0 0;border:1px solid var(--line);border-radius:12px;
  padding:14px 14px 10px;background:var(--panel2)}
.atl2 .covcalc h3{margin:0 0 8px;font-size:13px;font-weight:800;color:var(--ink);
  letter-spacing:-.01em}
.atl2 .covcalc table{width:100%;border-collapse:separate;border-spacing:0;
  margin:10px 0 8px;font-size:12px;background:#fff;border:1px solid var(--line);
  border-radius:10px;overflow:hidden}
.atl2 .covcalc thead th{padding:8px 10px;background:#0F172A;color:#fff;
  font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;
  font-weight:700;text-align:left}
.atl2 .covcalc thead th.cn{text-align:right}
.atl2 .covcalc td{padding:8px 10px;border-bottom:1px solid var(--line);vertical-align:top}
.atl2 .covcalc .cc{font-family:var(--mono);color:var(--ink);white-space:nowrap;
  font-weight:600}
.atl2 .covcalc .cn{text-align:right;font-family:var(--mono);color:var(--ink);width:88px;
  font-variant-numeric:tabular-nums}
.atl2 .covcalc .cs{color:var(--sub);font-size:11.5px}
.atl2 .covcalc .cs span{display:block}
.atl2 .covcalc .cs em{display:block;font-style:normal;color:var(--dim);font-size:11px;
  margin-top:2px}
.atl2 .covcalc tr.zero .cc,.atl2 .covcalc tr.zero .cn{color:var(--dim)}
.atl2 .covcalc tr.zero td{background:#FAFBFC}
.atl2 .covcalc tr.tot td{border-bottom:0;background:#F1F5F9;padding-top:10px;
  padding-bottom:10px;font-weight:800}
/* ── L'ATTENTE MISE EN SCÈNE (17/08 : « fais charger la carte avec une
   animation dynamique sérieuse, et aussi Cibles pour… »). Des pins qui
   apparaissent l'un après l'autre sur la carte, un message qui dit ce qui se
   charge, et des barres qui scintillent à la place du titre — au lieu d'un
   « Cibles pour … » en typographie finale qui sautait ensuite au vrai nom. */
.atl2 .mapzone{position:relative}
.atl2 .mapskel{position:absolute;inset:0;pointer-events:none;z-index:2}
.atl2 .mapskel i{position:absolute;width:11px;height:11px;margin:-5px 0 0 -5px;
  border-radius:50%;background:var(--brand);opacity:.25;
  animation:mskpin 1.9s ease-in-out infinite;animation-delay:var(--d)}
@keyframes mskpin{0%,100%{transform:scale(.55);opacity:.18}
  50%{transform:scale(1);opacity:.8}}
.atl2 .mapskel .mskm{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
  font-size:12.5px;color:var(--sub);background:rgba(255,255,255,.86);
  border:1px solid var(--line);border-radius:999px;padding:6px 14px;white-space:nowrap;
  box-shadow:0 2px 10px rgba(15,23,42,.06)}
.atl2 .skt{display:inline-block;border-radius:5px;vertical-align:middle;
  background:linear-gradient(90deg,var(--panel3) 25%,var(--line) 37%,var(--panel3) 63%);
  background-size:400% 100%;animation:sktsh 1.4s ease-in-out infinite}
@keyframes sktsh{0%{background-position:100% 0}100%{background-position:0 0}}
.atl2 .skt.sk-h1{width:210px;height:19px}
.atl2 .skt.sk-ini{width:16px;height:11px}
.atl2 .skt.sk-nm{width:74px;height:9px}
.atl2 .skt.sk-upd{width:132px;height:10px}
@media (prefers-reduced-motion:reduce){
  .atl2 .mapskel i,.atl2 .skt{animation:none}}
/* ── APERÇU : TOUTES LES LIGNES, SEUL LE NOM EST VOILÉ (17/08 : « afficher
   toutes les entreprises de 1 à 10 comme aujourd'hui, et pour toutes les
   autres uniquement flouter leurs noms mais toutes les mettre »). Avant, la
   ligne entière était floutée — activité, verdict, score et pays devenaient
   illisibles alors que ce sont eux qui donnent envie. */
.atl2 .row.tzr .rnm.nmx{filter:blur(5px);user-select:none}
.atl2 .row.tzr .rnm.nmx .tb{display:none}
.atl2 .dcard.tzr .dnm{filter:blur(5px);user-select:none}
/* ── LES PUCES DE FILTRE du fil d'Ariane (17/08 : « pour qu'on comprenne bien
   que c'est une liste filtrée ») : discrètes, cliquables, elles disent ce qui
   restreint le nombre affiché juste à leur gauche. */
.atl2 .listhead .ctx .fpuce{display:inline-flex;align-items:center;gap:4px;
  margin-left:6px;padding:2px 6px 2px 7px;border:1px solid var(--line);
  border-radius:999px;background:var(--panel2);color:var(--sub);
  font:inherit;font-size:10.5px;line-height:1.5;cursor:pointer;vertical-align:middle}
.atl2 .listhead .ctx .fpuce:hover{border-color:var(--brand);color:var(--ink)}
.atl2 .listhead .ctx .fpuce i{font-style:normal;font-size:12px;color:var(--dim);line-height:1}
.atl2 .listhead .ctx .fpuce:hover i{color:var(--red)}
/* ── L'ATTENTE HABITÉE (16/08 : « une animation hyper jolie qui permette de
   patienter et qui soit utile ») : point de marque qui pulse, message qui
   dit ce qui se charge, squelette de lignes qui scintille. */
.atl2 .loadwait{padding:18px 16px 28px}
.atl2 .loadwait .lw-top{display:flex;align-items:center;gap:10px;margin:6px 0 18px}
.atl2 .loadwait .lw-dot{width:10px;height:10px;border-radius:50%;
  background:var(--brand);animation:lwp 1.2s ease-in-out infinite}
.atl2 .loadwait .lw-msg{font-size:13px;color:var(--muted)}
.atl2 .loadwait .lw-row{display:flex;gap:14px;margin:12px 0;opacity:0;
  animation:lwf .4s both;animation-delay:var(--d)}
.atl2 .loadwait .lw-c{height:14px;border-radius:7px;
  background:linear-gradient(90deg,#EEF2F6 25%,#E2E8F0 45%,#EEF2F6 65%);
  background-size:200% 100%;animation:lws 1.4s linear infinite}
.atl2 .loadwait .lw-c1{width:24%}
.atl2 .loadwait .lw-c2{flex:1}
.atl2 .loadwait .lw-c3{width:11%}
@keyframes lwp{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.65);opacity:.4}}
@keyframes lws{from{background-position:200% 0}to{background-position:-200% 0}}
@keyframes lwf{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}
/* MAXI ops : la carte sociale EST l'image de la tuile — et la tuile porte
   TOUT ce que porte la ligne dépliée (16/08 soir) : chips-filtres, montant,
   moteur, signal, source, geste. */
.atl2 .dcard.dops{display:flex;flex-direction:column;gap:8px}
.atl2 .dcard.dops .dimg{margin:-2px -2px 2px;border-radius:8px;overflow:hidden}
.atl2 .dcard.dops .ddesc{font-size:12.5px;line-height:1.5;color:#33404E}
.atl2 .dcard.dops .dtags{display:flex;flex-wrap:wrap;gap:5px}
.atl2 .dcard.dops .dtags span,.atl2 .dcard.dops .dtags button{
  font:inherit;font-family:var(--mono);font-size:9px;letter-spacing:.07em;
  text-transform:uppercase;color:#64748B;background:#F1F5F9;
  border:1px solid var(--line);border-radius:5px;padding:3px 7px}
.atl2 .dcard.dops .dtags button{cursor:pointer}
.atl2 .dcard.dops .dtags button:hover{color:var(--ink);border-color:var(--ink)}
.atl2 .dcard.dops .dtags .damt{color:var(--ink);font-weight:700;background:#fff}
.atl2 .dcard.dops .dsig{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.atl2 .dcard.dops .dmo{font-size:10.5px;color:var(--muted)}
.atl2 .dcard.dops .dsrc{font-family:var(--mono);font-size:9.5px;color:var(--dim);
  text-decoration:none;border-bottom:1px dotted var(--line2)}
.atl2 .dcard.dops .dsrc:hover{color:var(--ink);border-bottom-color:var(--ink)}
.atl2 .dcard.dops .dact{margin-top:auto}
.atl2 .dcard.dops .dact .cell{display:flex}
.atl2 .dcard.dops .rdec{margin-left:6px}
/* « ce qu'on peut faire » — MENU VERTICAL compact (16/08 soir : trois boutons
   côte à côte décalaient « Enchaîner ») : un bouton, la liste par-dessus. */
.atl2 .doable{position:relative;display:inline-flex;margin-left:8px}
.atl2 .doable button{background:none;border:1px solid var(--line);border-radius:6px;
  font:inherit;font-size:10.5px;font-weight:600;color:var(--muted);padding:5px 9px;
  cursor:pointer;white-space:nowrap}
.atl2 .doable button:hover{color:var(--ink);border-color:var(--ink)}
.atl2 .doable .dobtn i{font-style:normal;margin-left:6px;opacity:.6}
.atl2 .doable .dolist{position:absolute;z-index:80;top:calc(100% + 5px);left:0;right:auto;
  display:flex;flex-direction:column;gap:2px;min-width:196px;padding:4px;
  background:#fff;border:1px solid var(--line);border-radius:8px;
  box-shadow:0 14px 34px -18px rgba(15,23,42,.55)}
.atl2 .doable .dolist button{width:100%;text-align:left;border-color:transparent}
.atl2 .doable .dolist button[aria-pressed=true]{color:var(--brand-d);
  border-color:var(--brand);background:var(--brand-l)}
.atl2 .doable .dolist{z-index:90}
/* ── UN AXE COMMUN POUR LA LIGNE DU MATIN (17/08, PJ3 : « essaye d'afficher les
   boutons mieux alignés, et idem pour Ce matin, 33 sociétés criblées… »).
   La phrase, « Tout est évalué », la barre de progression et le bouton
   flottaient sans axe : la barre s'étirait jusqu'à 200 px n'importe où dans la
   ligne, et le bouton était collé au bord. On pose une grille en trois zones —
   la phrase prend la place, puis la mesure, puis l'action — toutes alignées sur
   la même ligne médiane. */
.atl2 .goal{display:flex;align-items:center;gap:8px 16px;flex-wrap:wrap}
.atl2 .goal .gtxt{flex:1 1 340px;min-width:0}
.atl2 .goal .pbar{flex:0 0 160px;max-width:160px;margin-left:auto;align-self:center}
.atl2 .goal .pilebtn{flex:none;align-self:center;white-space:nowrap}
/* la cale vide de fin de ligne ne sert plus qu'à séparer : elle ne doit pas
   pousser le bouton hors de l'axe */
.atl2 .goal .gspace{display:none}
/* ── LA BOX VERTE = LA BOX ROUGE (17/08) : même géométrie, même en-tête,
   mêmes puces, seuls le fond et l'encre changent. */
.atl2 .since{display:block;margin:0 0 8px;padding:10px 14px;border-radius:0;
  background:#F0FDF4;border:0;border-bottom:1px solid #BBF7D0;border-left:0}
.atl2 .since .sg-h{display:flex;align-items:baseline;gap:9px;flex-wrap:wrap}
.atl2 .since .t{font-size:13.5px;font-weight:700;color:#0F6E3F}
.atl2 .since .s{font-size:12.5px;color:#3F8F68}
.atl2 .since .sg-sp{flex:1}
.atl2 .since .sg-c{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.atl2 .since .sg-chip{display:inline-flex;align-items:baseline;gap:6px;
  padding:5px 10px;border:1px solid #86D4A8;border-radius:11px;background:#fff;
  font:inherit;cursor:pointer;text-align:left;max-width:340px}
.atl2 .since .sg-chip:hover{border-color:#0E8A4F}
.atl2 .since .sg-chip b{font-size:12px;color:#0F6E3F;font-weight:800;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:220px}
.atl2 .since .sg-more{font:inherit;font-size:11.5px;font-weight:800;color:#0F6E3F;
  background:#fff;border:1px solid #86D4A8;border-radius:999px;padding:5px 11px;cursor:pointer}
.atl2 .since .sg-x{background:none;border:0;cursor:pointer;font-size:14px;line-height:1;
  color:#5f8f76;padding:1px 5px;border-radius:5px}
.atl2 .since .sg-x:hover{background:#DCFCE7;color:#0b5c34}
.atl2 .since.mini .sg-c{display:none}
.atl2 .since .gone{font-size:11px;color:var(--dim);text-decoration:line-through;
  padding:3px 7px}
.atl2 .sigstrip{margin-left:0;margin-right:0}
/* ── LE MÉMO LU SUR PLACE (17/08) : le bouton bleu de la V1, et le document
   dans la fiche plutôt que dans un onglet perdu. Hauteur généreuse mais bornée
   pour que la liste reste atteignable dessous. */
.atl2 .cdmemo .btn.b{background:#1E5FCC;border-color:#1E5FCC;color:#fff;font-weight:700}
.atl2 .cdmemo .btn.b:hover{background:#1a52b0;border-color:#1a52b0}
.atl2 .cdembed{width:100%;height:70vh;min-height:420px;margin-top:11px;display:block;
  border:1px solid var(--line);border-radius:10px;background:#fff}
/* ── OÙ EN EST CE DOSSIER, en tête du popup (17/08) : les mêmes pastilles que
   la ligne du cockpit, plus l'étape du tunnel et le statut posé par le
   dirigeant. Sans elles, le popup affichait une justification sous le titre
   « VERDICT » sans jamais dire le verdict. */
.atl2 .pstat{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin:9px 0 2px}
.atl2 .pstat .pstep{font-family:var(--mono);font-size:9.5px;letter-spacing:.09em;
  text-transform:uppercase;color:var(--dim);border:1px solid var(--line);
  border-radius:999px;padding:2px 8px}
.atl2 .pstat .pstep.own{color:var(--brand-d);border-color:var(--brand)}

/* ══ TYPOGRAPHIE DES MODALES — une échelle, cinq niveaux (17/08) ═══════════
   Antoine : « c'est catastrophique… l'écriture c'est des pattes de mouche,
   toutes les polices sont mal choisies mal ordonnées ». Mesuré avant, sur cinq
   popups (outils, export, alertes, file, couverture) : QUATORZE tailles
   cohabitaient, 93 nœuds sur 267 passaient sous 12 px, et le titre de section
   — du mono de 9 px très tracké — était PLUS PETIT de 3 px que le corps qu'il
   annonce. Une hiérarchie inversée : voilà pourquoi rien ne se lisait.

   Cinq niveaux, rien sous 12 px, et le mono rendu à son seul usage légitime :
   le code. Les titres de section passent en sans, gras, encre pleine, avec un
   filet de séparation — ils redeviennent plus gros que leur corps.

   PORTÉE VOLONTAIREMENT LIMITÉE À .modal : les mêmes classes (.mnote, .qsec)
   vivent aussi dans les fiches et la liste, où elles sont bien réglées. Les
   toucher globalement casserait le cockpit pour réparer les popups. */
.atl2 .modal{
  --m1:20px;    /* titre de modale  */
  --m2:15px;    /* titre de section */
  --m3:13px;    /* corps            */
  --m4:12px;    /* note             */
  --m5:12.5px;  /* mono / code      */
}
/* ① le titre, et la croix qui redevient plus PETITE que lui — elle était à
      21 px contre 19, donc l'œil tombait d'abord sur le bouton de fermeture. */
.atl2 .modal .mcard .mh h2{font-size:var(--m1);font-weight:700;
  letter-spacing:-.01em;line-height:1.3}
.atl2 .modal .mcard .mh .x{font-size:18px;line-height:1}
/* ② titre de section : plus jamais un mono minuscule. Les variantes ne
      changent QUE la couleur, jamais le rang. */
.atl2 .modal .qsec{font-family:inherit;font-size:var(--m2);font-weight:700;
  letter-spacing:0;color:var(--ink);line-height:1.35;text-transform:none;
  margin:22px 0 9px;padding-top:15px;border-top:1px solid var(--line)}
.atl2 .modal .mb>.qsec:first-child{margin-top:0;padding-top:0;border-top:0}
.atl2 .modal .qsec.ok{color:var(--brand-d)}
.atl2 .modal .qsec.todo{color:#B45309}
.atl2 .modal .qsec.run{color:var(--ink)}
/* ③ le corps — une seule taille pour tout ce qui se lit en phrases */
.atl2 .modal .qrow,
.atl2 .modal .lead2,
.atl2 .modal .secl .secli,
.atl2 .modal .plughow li,
.atl2 .modal .qverd li,
.atl2 .modal .exi p,
.atl2 .modal .qeta,
.atl2 .modal details>summary{font-size:var(--m3);line-height:1.55}
/* ④ les notes : secondaires, mais LISIBLES — plusieurs étaient à 10,5 px */
.atl2 .modal .mnote,
.atl2 .modal .hint,
.atl2 .modal .qhedge,
.atl2 .modal .qrate{font-size:var(--m4);line-height:1.6}
/* ⑤ le mono, réservé au code — et il RESPIRE : les blocs sortaient sur une
      seule ligne compacte, illisibles (retour d'Antoine sur le curl et le
      JSON). Retour à la ligne, hauteur d'interligne, et un fond qui les
      détache du texte. */
.atl2 .modal .cpy{display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;
  background:var(--panel2);border:1px solid var(--line);border-radius:9px;
  padding:11px 12px;margin:8px 0 4px}
.atl2 .modal .cpy code{flex:1 1 260px;min-width:0;font-family:var(--mono);
  font-size:var(--m5);line-height:1.65;color:var(--ink);white-space:pre-wrap;
  word-break:break-word;background:none;padding:0}
.atl2 .modal .cpy button{flex:none;align-self:flex-start}
/* ⑥ les étapes numérotées du panneau outils : de vraies puces alignées */
.atl2 .modal .plughow{margin:8px 0 12px;padding-left:22px;display:grid;gap:7px}
.atl2 .modal .plughow li{color:var(--sub)}
.atl2 .modal .plughow li::marker{color:var(--dim);font-weight:700}
/* ⑦ le pied d'une rangée de réglage ne colle plus à la suivante */
.atl2 .modal .qrow{padding:9px 0;border-bottom:1px solid var(--line)}
.atl2 .modal .qrow:last-of-type{border-bottom:0}
.atl2 .modal .qrow>span:first-child{color:var(--ink)}
.atl2 .modal .qrow>span:first-child div{font-size:var(--m4);line-height:1.5}

/* ── NOTICE = COULEUR DE L'ÉTAPE (17/08) : la ligne sous les flèches reprend
   --p0…--pf, plus de teinte maison. Texte via --tc (encre ou blanc).
   25/08 : p b color inherit peignait le chip .tstep de la même encre
   que le fond (noir sur noir / blanc sur blanc). Le nowrap coupait le texte. */
.atl2 .tuto{background:var(--bg);align-items:flex-start}
.atl2 .tuto.mini p,.atl2 .tuto p{
  display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 10px;
  color:var(--tc,var(--ink))!important;
  white-space:normal!important;overflow:visible!important;text-overflow:unset;
  line-height:1.45;max-width:none}
.atl2 .tuto.mini p b,.atl2 .tuto p b{color:inherit}
.atl2 .tuto p b.tstep,.atl2 .tuto.mini p b.tstep{
  flex:none;display:inline-block;font-size:10.5px;letter-spacing:.1em;
  color:var(--stt,#fff)!important;background:var(--stc,var(--ink));
  padding:3px 8px;margin-right:0;border-radius:var(--rs);line-height:1.2}
.atl2 .tuto .tbody{flex:1 1 14em;min-width:0;white-space:normal}
.atl2 .tuto .tprim{flex:none;align-self:center}
.atl2 .tuto.on-dark .tprim{background:#fff;color:var(--ink)}
.atl2 .tuto.on-dark .tprim:hover{filter:brightness(.96)}
.atl2 .step .l{font-size:9.5px;letter-spacing:.06em}

/* Monde n'est plus un îlot vert — même grammaire que les autres continents. */
.atl2 .cbtn.hint{background:none;color:inherit;font-weight:inherit}
.atl2 .cbtn.hint .n{background:var(--panel3);color:var(--muted)}
.atl2 .cbtn[aria-selected="true"].hint .n{background:var(--ink);color:#fff}

/* CRIBLE · MÉMO : deux tris dans la même cellule d'en-tête. */
.atl2 .app.pipe .cols .h-vd.h-vd-sort{flex-direction:row;align-items:center;gap:4px}
.atl2 .h-vd-sort button{font:inherit;letter-spacing:inherit;color:inherit;
  background:none;border:0;padding:4px 0;cursor:pointer;display:inline-flex;
  align-items:center;gap:3px}
.atl2 .h-vd-sort button[aria-sort="ascending"],
.atl2 .h-vd-sort button[aria-sort="descending"]{color:var(--ink)}
.atl2 .h-vd-sort i{font-style:normal;opacity:.4;padding:0 1px}

.atl2 .listhead:has(.fstrip){align-items:center}
.atl2 .listhead .fstrip{order:9}
.atl2 .winpick{position:relative;flex:none}
.atl2 .winpick-btn{display:inline-flex;align-items:center;gap:6px;
  background:#fff;border:1px solid var(--line);border-radius:6px;
  padding:6px 10px;font:inherit;font-size:12px;color:var(--ink);cursor:pointer;
  white-space:nowrap}
.atl2 .winpick-btn:hover{border-color:var(--ink)}
.atl2 .winpick-k{font-family:var(--mono);font-size:9px;font-weight:700;
  letter-spacing:.08em;text-transform:uppercase;color:var(--dim)}
.atl2 .winpick-v{font-weight:650}
.atl2 .winpick-btn b{font-family:var(--mono);font-size:11px;color:var(--dim)}
.atl2 .winpick-btn i{font-style:normal;font-size:9px;color:var(--dim)}
.atl2 .winpick-pop{position:absolute;z-index:80;top:calc(100% + 5px);left:0;
  display:flex;flex-direction:column;gap:2px;min-width:180px;padding:4px;
  background:#fff;border:1px solid var(--line);border-radius:8px;
  box-shadow:0 14px 34px -18px rgba(15,23,42,.55)}
.atl2 .winpick-pop button{display:flex;align-items:center;justify-content:space-between;
  gap:16px;width:100%;text-align:left;background:none;border:0;border-radius:5px;
  padding:8px 10px;font:inherit;font-size:12.5px;cursor:pointer;color:var(--ink)}
.atl2 .winpick-pop button:hover{background:#F1F5F9}
.atl2 .winpick-pop button[aria-selected="true"]{background:#F0FDF4;color:#0A6B3D;font-weight:650}
.atl2 .winpick-pop .n{font-family:var(--mono);font-size:11px;color:var(--dim)}
.atl2 .listhead .conts + .conts{display:none}

/* Menu continent compact — carte repliée. Même grammaire que « Tout ▾ ». */
.atl2 .contpick{position:relative;display:inline-flex;align-items:center;gap:10px;flex:none}
.atl2 .contpick > .mapbtn{flex:none;font-size:11px;font-weight:700;letter-spacing:.04em;
  text-transform:uppercase;border:1px solid var(--line);color:var(--ink)}
.atl2 .contpick-btn{display:inline-flex;align-items:center;gap:6px;
  background:none;border:0;border-bottom:2.5px solid var(--ink);border-radius:0;
  padding:2px 2px 4px;font:inherit;font-size:13px;font-weight:700;color:var(--ink);
  cursor:pointer;white-space:nowrap}
.atl2 .contpick-btn .n{font-family:var(--mono);font-size:9.5px;font-weight:700;
  background:var(--ink);color:#fff;border-radius:var(--rs);padding:1px 7px}
.atl2 .contpick-btn i{font-style:normal;font-size:9px;color:var(--dim);margin-left:2px}
.atl2 .contpick-btn:hover{color:var(--ink)}
.atl2 .contpick-pop{position:absolute;z-index:60;top:calc(100% + 6px);left:0;
  display:flex;flex-direction:column;gap:2px;min-width:220px;padding:6px;
  background:#fff;border:1px solid var(--line);border-radius:8px;
  box-shadow:0 14px 34px -18px rgba(15,23,42,.55)}
.atl2 .contpick-pop button{display:flex;align-items:center;justify-content:space-between;
  gap:12px;width:100%;text-align:left;background:none;border:0;border-radius:6px;
  padding:7px 10px;font:inherit;font-size:13px;color:var(--muted);cursor:pointer}
.atl2 .contpick-pop button:hover{background:var(--panel2);color:var(--ink)}
.atl2 .contpick-pop button[aria-selected="true"]{color:var(--ink);font-weight:700;
  background:var(--panel2)}
.atl2 .contpick-pop button .n{font-family:var(--mono);font-size:9.5px;
  background:var(--panel3);color:var(--muted);border-radius:var(--rs);padding:1px 7px}
.atl2 .contpick-pop button[aria-selected="true"] .n{background:var(--ink);color:#fff}

/* Menu Filtres : les 7 facettes ne s'étalent plus, elles s'ouvrent au clic. */
.atl2 .fmenu{position:relative;flex:none;z-index:30}
.atl2 .fmenu-pop{position:absolute;left:0;top:calc(100% + 5px);z-index:32;
  display:flex;flex-wrap:wrap;gap:5px;min-width:280px;
  max-width:min(540px,calc(100vw - 40px));padding:10px;
  background:var(--panel);border:1px solid var(--line2);border-radius:8px;
  box-shadow:0 10px 28px rgba(15,23,42,.14)}
.atl2 .fmenu-pop .facets{display:flex;flex-wrap:wrap;gap:5px}
.atl2 .fmenu-btn.on:not([aria-expanded="true"]){border-color:var(--ink)}
@media (max-width:700px){
  .atl2 .fmenu-pop{left:0;right:0;min-width:0;max-width:none}}
/* Sous 900 px le proto empilait nom + description (2–3 lignes) et
   cachait trop de pistes : pouces et Analyser tombaient hors grille.
   On garde UNE ligne : nom ellipsé, action + pouces visibles. */
@media (max-width:900px){
  .atl2 .nd{flex-direction:row!important;align-items:baseline!important;gap:8px!important}
  .atl2 .nd .rnm{max-width:46%!important}
  .atl2 .nd .rds{white-space:nowrap!important;display:block!important;
    overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:unset;
    -webkit-box-orient:unset}
  .atl2 .app.pipe .row,.atl2 .app.pipe .cols{
    grid-template-columns:11px 26px minmax(0,1fr) 90px 36px!important}
}

/* ── MÉMO EN DIRECT (V1 cb-live-strip / cb-run-track) ─────────────────── */
.atl2 .livestrip{display:flex;flex-wrap:wrap;align-items:center;gap:8px;
  margin:0 14px 10px;padding:10px 14px;border:1px solid #bfe3cf;border-radius:13px;
  cursor:pointer;background:linear-gradient(180deg,#f2fbf6,#e9f7f0);
  box-shadow:0 1px 4px rgba(15,90,50,.07)}
.atl2 .livestrip:hover{border-color:#15884a}
.atl2 .ls-ico{font-size:14px}
.atl2 .ls-lab{font-size:12px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;
  color:#0f6e3f}
.atl2 .ls-chip{display:inline-flex;align-items:center;gap:8px;background:#fff;
  border:1px solid #d7e2ee;border-radius:999px;padding:5px 12px;font-size:12px;
  font-weight:600;color:#0f1f33}
.atl2 .ls-chip b{font-weight:800}
.atl2 .ls-chip.err{border-color:#f2c9c6;color:#b3261e}
.atl2 .ls-chip.done{border-color:#bfe3cf;background:#f2fbf6;color:#0f6e3f}
.atl2 .ls-more{font-size:11px;font-weight:800;color:#56697e}
.atl2 .ls-go{margin-left:auto;font-size:12px;font-weight:800;color:#0f6e3f}
.atl2 .runtrack{display:inline-flex;flex-direction:column;gap:3px;min-width:140px}
.atl2 .runchrono{font-size:10.5px;font-weight:700;color:#43536a;white-space:nowrap}
.atl2 .runbar{display:block;width:100%;height:6px;border-radius:999px;background:#e6ecf3;
  overflow:hidden}
.atl2 .runbar i{display:block;height:100%;border-radius:999px;
  background:linear-gradient(90deg,#7cc7ff,#2563eb);transition:width 1s linear}
.atl2 .runbar i.ind{width:35%;animation:runind 1.3s ease-in-out infinite alternate}
@keyframes runind{from{margin-left:0}to{margin-left:65%}}
.atl2 .runerr{font-size:11px;font-weight:700;color:#b3261e}
.atl2 .rundone{font-size:12px;font-weight:800;color:#0f6e3f}
.atl2 .evalbtn.analyse{background:#1E5FCC}
.atl2 .evalbtn.analyse:hover{filter:brightness(1.08)}
.atl2 .result.memolive{align-items:center;gap:10px}
.atl2 .result.memolive .runtrack{min-width:160px}
.atl2 .cell .runtrack{min-width:118px;align-items:flex-start}
@media(max-width:760px){
  .atl2 .livestrip{flex-direction:column;align-items:stretch}
  .atl2 .ls-go{margin-left:0}
  .atl2 .ls-chip{width:100%;justify-content:space-between}
  .atl2.ops .mapzone{height:180px;min-height:180px;max-height:180px}
  .atl2.ops .mapzone svg{height:180px!important;max-height:180px!important}
  .atl2.ops .grp-pin{display:none}
  .atl2.ops .desk-list .row,
  .atl2.ops .desk-list .cols{
    grid-template-columns:11px 22px minmax(0,1fr) minmax(92px,118px)!important}
  .atl2 .demand{padding:8px 12px}
  .atl2 .viewbtn,.atl2 .viewbtn.sm,.atl2 .evalbtn{height:40px}
  body.pp-desk .atl2.ops .drow{flex-wrap:wrap}
  body.pp-desk .atl2.ops .dfield{flex:1 1 100%!important}
  body.pp-desk .atl2.ops .dacts{flex:1 1 100%;justify-content:flex-end;flex-wrap:wrap}
  body.pp-desk .atl2.ops .dacts .evalbtn{flex:1 1 auto;min-width:140px}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-top,
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools,
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip,
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip-b,
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .frow2{flex-wrap:wrap!important}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools{min-height:0}
}
`,Wi=Hi+Vi;function Ga(e){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(e)||""}catch{return""}}function Yi(){const e=Ga("teaser");if(e==="0"||e==="1")return e;try{if(typeof window<"u"&&window.parent&&window.parent!==window){const a=new URL(window.parent.location.href).searchParams.get("teaser");if(a==="0"||a==="1")return a;if(/\/cibles\/[^/]+\/open\/?$/i.test(window.parent.location.pathname||""))return"0"}}catch{}return""}function Gi(e,a){if(e||a.mode!=="client"||!a.token)return"visiteur";const r=Yi();return r==="0"?"client":r==="1"||Ga("embed")==="1"&&Ga("chrome")==="1"?"apercu":"client"}const Ki={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0,showMorning:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0}},Qi=e=>Ki[e];function ha(e){const a=(e||"").trim();return a.length<3?!1:!!(/^[^\p{L}(]/u.test(a)||/[:—]\s|…|\.{3}/.test(a)||a.split(/\s+/).length>=3&&/\b(icymi|round-?up|wrap|weekly|podcast|interview|what|why|how|biggest|watch|inside|according)\b/i.test(a))}const xt=e=>{if(e.noCo===void 0){const a=(e.name||"").trim();(!Sr(a)||ha(a))&&(e.noCo=!0)}return Object.assign(e,{continent:Ro(e.cc)})};function Fa(e){const a=new Set,r=[];for(const n of e){const i=(n.name||"").toLowerCase();!i||a.has(i)||(a.add(i),r.push(n))}return r}const Ji=60*60*1e3;function Xi(e){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+e)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>Ji?null:a}catch{return null}}function ta(e,a){try{sessionStorage.setItem("ppmap:swr:"+e,JSON.stringify({...a,ts:Date.now()}))}catch{}}const Zi=e=>e==="default"?"":e==="ops"?"ops":"research:"+e.research;function es(e,a,r="default"){const n=r!=="default",i=m.useMemo(()=>e||n?{mode:"anon"}:jo(),[e,n]),o=m.useMemo(()=>n?"visiteur":Gi(e,i),[e,i,n]),l=m.useMemo(()=>Qi(o),[o]),d=o!=="visiteur",c=Zi(r),[f,s]=m.useState([]),[x,u]=m.useState(""),[h,p]=m.useState(null),[b,y]=m.useState(null),[g,j]=m.useState(null),[N,w]=m.useState(()=>new Map),[C,T]=m.useState(()=>new Map),[A,L]=m.useState(""),[z,S]=m.useState(new Set),[O,U]=m.useState(null),[M,D]=m.useState(!0),[v,q]=m.useState(!1),[V,B]=m.useState(0),[$,K]=m.useState(0),X=m.useRef(0),te=m.useMemo(()=>{var ae;if(o!=="client")return"";try{return((ae=No())==null?void 0:ae.email)||""}catch{return""}},[o]);m.useEffect(()=>{const ae=++X.current;let ve=!0;const W=()=>ve&&ae===X.current,ie=(d&&i.token?i.token:"pub:"+a)+(c?":"+c:""),fe=Xi(ie);return fe?(s(fe.objs.map(xt)),fe.fund&&u(fe.fund),p(fe.marketEstimate??null),y(fe.criteria??null),j(fe.stats??null),L(fe.generatedAt||""),D(!1)):D(!0),(async()=>{try{if(r==="ops"){const Ne=await Ma(),ge=((Ne==null?void 0:Ne.recent_ops)||[]).map(Z=>{const re=pa(Z.company_name||Z.title?Z:{...Z,title:(Z.headline_fr||Z.headline||"").slice(0,120)},a),Q=String(Z.rubrique||"").toLowerCase();return re&&(Q==="nominations"||Q==="recrutements")&&(re.engine=Q),re&&!String(Z.company_name||"").trim()&&(re.noCo=!0),re}).filter(Z=>!!Z).map(Z=>(Sr((Z.name||"").trim())||(Z.noCo=!0),Z));try{const Z=So(),re=await Eo(),Q=((re==null?void 0:re.date)||"").slice(0,10),G=Z?Z.doc:re,ke=Co(G),ce=((Z==null?void 0:Z.day)||(G==null?void 0:G.date)||Q||"").slice(0,10);if(ce&&ke.length){const pe=new Set;for(const oe of ge){if((oe.date||"").slice(0,10)!==ce)continue;const ne=zn(ke,pe,oe.name,"");ne>=0&&(pe.add(ne),oe.decryptHtml=ke[ne].html)}for(const oe of ge){if(oe.decryptHtml||(oe.date||"").slice(0,10)!==ce)continue;const ne=zn(ke,pe,"",oe.headline||oe.tagline||oe.name);ne>=0&&(pe.add(ne),oe.decryptHtml=ke[ne].html)}}if(ce){const pe=((G==null?void 0:G.title_fr)||"").trim(),oe=((G==null?void 0:G.lead_fr)||"").trim(),ne=zo(G),Te=((G==null?void 0:G.url)||"").trim();pe&&(ne||Te)&&ge.unshift({id:`edito:${ce}`,kind:"op",name:pe,cc:null,date:ce,engine:"edito",dealKind:"other",headline:oe||pe,tagline:oe||pe,decryptHtml:ne||void 0,url:Te,noCo:!0})}}catch{}if(!W())return;s(ge.map(xt)),ta(ie,{objs:ge})}else if(typeof r=="object"){const ge=(await An()||[]).filter(re=>(re.slug||"")===r.research).map(re=>Tn(re,a)).filter(re=>!!re),Z=Fa(await Ln(ge,a));if(!W())return;s(Z.map(xt)),ta(ie,{objs:Z})}else if(d&&i.token){const Ne=Ao(i.token),ge=Ma(),Z=To(i.token),re=Lo(i.token),Q=qo(i.token),G=await Ne;let ke=G?G.targets:[];W()&&G&&(u(G.fund||""),p(G.marketEstimate??null),y(G.criteria??null),j(G.stats??null),L(G.generatedAt||""),s(ke.map(xt)),D(!1),q(!1));const[ce,pe,oe,ne]=await Promise.all([ge,Z,re,Q]),Te=((ce==null?void 0:ce.recent_ops)||[]).map(Ae=>pa(Ae,a)).filter(Ae=>!!Ae);if(ke=[...ke,...Te],!W())return;s(ke.map(xt));const Le=new Set;for(const Ae of pe){const He=(Ae.id||Ae.co||"").toString().trim().toLowerCase();He&&Le.add(He.startsWith("t:")?He:"t:"+He)}S(Le),w(oe),T(ne),G&&ta(ie,{fund:G.fund,marketEstimate:G.marketEstimate,criteria:G.criteria,stats:G.stats,generatedAt:G.generatedAt,objs:ke})}else{const Ne=Mo(),ge=An(),Z=Ma(),re=await Ne;W()&&re.length&&(s(Fa(re).map(xt)),D(!1),q(!1));const[Q,G]=await Promise.all([ge,Z]),ke=(Q||[]).map(ne=>Tn(ne,a)).filter(ne=>!!ne),ce=await Ln(ke,a),pe=((G==null?void 0:G.recent_ops)||[]).map(ne=>pa(ne,a)).filter(ne=>!!ne),oe=Fa([...re,...ce,...pe]);if(!W())return;s(oe.map(xt)),ta(ie,{objs:oe})}W()&&q(!1)}catch{W()&&!fe&&q(!0)}finally{W()&&D(!1)}})(),()=>{ve=!1}},[d,i.token,a,V,c]),m.useEffect(()=>{if(!l.showCredits||!te){U(null);return}let ae=!0;return(async()=>{try{const ve=await fetch(`${pn}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:te})});if(!ve.ok)return;const W=await ve.json();ae&&W&&W.ok!==!1&&U(W)}catch{}})(),()=>{ae=!1}},[l.showCredits,te,$]);const le=m.useCallback(ae=>S(new Set(ae)),[]);return{session:i,mode:o,caps:l,fund:x,email:te,marketEstimate:h,generatedAt:A,criteria:b,stats:g,thumbs:N,stages:C,dossiers:f,favIds:z,setFavIds:le,credits:O,reloadCredits:()=>K(ae=>ae+1),loading:M,error:v,refresh:()=>B(ae=>ae+1)}}function rt(e){return e?e.engine==="edito"||String(e.id||"").startsWith("edito:"):!1}const Tr=()=>({win:"all",day:"",status:"all",signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],acquirer:"",search:""}),ts=(e="europe",a=!1,r)=>({continent:e,ptab:(r==null?void 0:r.ptab)??1,dens:(r==null?void 0:r.dens)??"liste",filters:{...Tr(),...Object.fromEntries(Object.entries((r==null?void 0:r.filters)||{}).filter(([,n])=>n!==void 0))},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,focusId:null,modal:(r==null?void 0:r.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,memoTab:0,undo:[],mapFolded:a}),as=new Set(["signal","amount","score","crible","memo"]);function ns(e,a){switch(a.type){case"continent":return{...e,continent:a.key,filters:{...e.filters,country:[]},shown:{},popupId:null,focusId:null,openFacet:null};case"ptab":return{...e,ptab:a.tab,shown:{},popupId:null,focusId:null};case"dens":return{...e,dens:a.dens,shown:{}};case"filters":return{...e,filters:{...e.filters,...a.patch},shown:{}};case"toggleFacet":{const r=e.filters[a.facet],n=r.includes(a.value)?r.filter(i=>i!==a.value):[...r,a.value];return{...e,filters:{...e.filters,[a.facet]:n},shown:{}}}case"toggleMemoLevel":{const r=e.filters.memoLevel,n=r.includes(a.value)?r.filter(i=>i!==a.value):[...r,a.value];return{...e,filters:{...e.filters,memoLevel:n},shown:{}}}case"acquirer":return{...e,filters:{...e.filters,acquirer:a.value,day:"",win:"all"},shown:{}};case"clearFacet":return{...e,filters:{...e.filters,[a.facet]:[]},shown:{}};case"reset":return{...e,filters:Tr(),shown:{},openFacet:null};case"sort":return{...e,sort:e.sort.key===a.key?{key:a.key,dir:e.sort.dir*-1}:{key:a.key,dir:as.has(a.key)?-1:1}};case"groupBy":return{...e,groupBy:a.groupBy};case"more":return{...e,shown:{...e.shown,[a.group]:(e.shown[a.group]??a.base??Lr)+a.by}};case"pile":return{...e,pileMode:a.on,popupId:null};case"openFacet":return{...e,openFacet:e.openFacet===a.facet?null:a.facet};case"popup":return{...e,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"focus":return{...e,focusId:a.id,popupId:a.id?null:e.popupId};case"modal":return{...e,modal:a.modal,popupId:a.modal?null:e.popupId};case"chainStart":return{...e,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...e,chain:{...e.chain,idx:e.chain.idx+1}};case"spaceTab":return{...e,spaceTab:a.tab};case"memoConsole":return{...e,memoConsole:a.id,memoTab:0};case"memoTab":return{...e,memoTab:a.tab};case"undoPush":return{...e,undo:[...e.undo,a.entry].slice(-50)};case"undoPop":return{...e,undo:e.undo.slice(0,-1)};case"mapFold":return{...e,mapFolded:a.folded,openFacet:null};default:return e}}const Lr=80;function ga(e,a,r,n){var i;if(n!=="signal"&&a.signalOnly&&(!qe(e)||a.signalEngines.length&&!a.signalEngines.includes(e.engine||""))||n!=="dealKind"&&((i=a.dealKind)!=null&&i.length)&&!a.dealKind.includes(e.dealKind||"")||n!=="sector"&&a.sector.length&&!a.sector.includes(e.sector||"")||n!=="acquirer"&&a.acquirer.trim()&&(e.acquirer||"").trim().toLowerCase()!==a.acquirer.trim().toLowerCase()||n!=="engine"&&a.engine.length&&!a.engine.includes(e.engine||"")||n!=="stage"&&a.stage.length&&!a.stage.includes(e.stage||"")||n!=="angle"&&r&&a.angle.length&&!a.angle.includes(e.angle||"")||n!=="memoLevel"&&r&&a.memoLevel.length&&!a.memoLevel.includes(un(e)))return!1;if(n!=="win"){if(a.day){if((e.date||"").slice(0,10)!==a.day)return!1}else if(a.win!=="all"){const o=a.win==="1"?0:a.win==="7"?7:30;if(ct(e.date)>o)return!1}}if(n!=="status"&&!r&&a.status!=="all"&&bt(e)!==a.status)return!1;if(n!=="search"&&a.search.trim()){const o=a.search.trim().toLowerCase();if(!`${e.name||""} ${e.tagline||""} ${e.sector||""} ${e.acquirer||""}`.toLowerCase().includes(o))return!1}return!0}function qr(e,a,r){return rt(e)?ga(e,a.filters,r):a.continent!=="monde"&&e.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(e.cc||"")?!1:ga(e,a.filters,r)}function rs(e,a,r,n){return!(!qr(e,a,r)||r&&!Fo(e,a.ptab,n))}function hn(e,a){const r=a.key,n=i=>{switch(r){case"name":return(i.name||"").toLowerCase();case"country":return i.countryLabel||i.cc||"";case"stage":return i.stage||"";case"amount":return i.amountEur||-1;case"age":return-ct(i.date);case"score":return typeof i.score=="number"?i.score:-1;case"crible":return Po(i);case"memo":return Oo(i);case"signal":{const o=qe(i);return o?100-(o.left??0):-1}}};return[...e].sort((i,o)=>{const l=n(i),d=n(o);return l<d?-a.dir:l>d?a.dir:(i.name||"").localeCompare(o.name||"")})}const Oa={},$n=(Oa==null?void 0:Oa.VITE_API_BASE)||"https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function _n(){return new Date().toISOString().slice(0,10)}const gn=m.createContext(null);function Mr(){return m.useContext(gn)}function os(e){if(!e||typeof DOMParser>"u")return[];const a=[];try{const r=new DOMParser().parseFromString(e,"text/html");for(const n of[...r.querySelectorAll("p")]){if((n.textContent||"").replace(/\s+/g," ").trim().length<40)continue;const o=n.querySelector("strong,b"),l=((o==null?void 0:o.textContent)||"").replace(/\s+/g," ").trim();if(!l||l.length<2||l.length>60)continue;const d=n.cloneNode(!0);d.querySelectorAll("script,style,iframe").forEach(c=>c.remove()),d.querySelectorAll("*").forEach(c=>{const f=c.tagName==="A"?c.getAttribute("href"):null;[...c.attributes].forEach(s=>c.removeAttribute(s.name)),f&&/^https?:\/\//i.test(f)&&(c.setAttribute("href",f),c.setAttribute("target","_blank"),c.setAttribute("rel","nofollow noopener"))}),a.push({t:l.toLowerCase(),html:d.outerHTML})}}catch{}return a}function Un(e,a=!1){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||"");if(!r)return e;const o=(a?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||"",l=String(Number(r[3]));return a?`${o} ${l}, ${r[1]}`:`${l==="1"?"1ᵉʳ":l} ${o} ${r[1]}`}function Rr(){const e=m.useContext(gn);if(!e)throw new Error("ThesisEdition* must be under ThesisEditionProvider");return e}function is({token:e,children:a}){const{dispatch:r,st:n,lang:i}=_(),[o,l]=m.useState(()=>n.filters.day||_n()),[d,c]=m.useState(null),[f,s]=m.useState(!1),x=m.useCallback(b=>{if(/^\d{4}-\d{2}-\d{2}$/.test(b)){l(b);try{r({type:"filters",patch:{day:b,win:"all"}})}catch{}}},[r]),u=m.useCallback(()=>{l(_n());try{r({type:"filters",patch:{day:"",win:"all"}})}catch{}},[r]);m.useEffect(()=>{const b=y=>{var j;const g=(j=y.detail)==null?void 0:j.day;typeof g=="string"&&x(g)};return window.addEventListener("pp-edition-day",b),()=>window.removeEventListener("pp-edition-day",b)},[x]),m.useEffect(()=>{n.filters.day&&n.filters.day!==o&&l(n.filters.day)},[n.filters.day]),m.useEffect(()=>{if(!e||!o)return;let b=!1;s(!0);const y=new URLSearchParams({token:e,date:o});return fetch(`${$n}/cibles/edition.json?${y}`).then(g=>g.json()).then(g=>{b||c(g)}).catch(()=>{b||c({ok:!1,error:"network"})}).finally(()=>{b||s(!1)}),()=>{b=!0}},[e,o]);const h=m.useMemo(()=>`${$n}/cibles/editions.json?token=${encodeURIComponent(e)}`,[e]),p=m.useMemo(()=>({token:e,day:o,ed:d,loading:f,pickDay:x,pickWindow:u,dayPicked:!!n.filters.day,daysUrl:h,isEn:i==="en"}),[e,o,d,f,x,u,n.filters.day,h,i]);return t.jsx(gn.Provider,{value:p,children:a})}function ss(){const{day:e,daysUrl:a,pickDay:r,dayPicked:n}=Rr(),[i,o]=m.useState(n);return m.useEffect(()=>{n&&o(!0)},[n]),t.jsxs("div",{className:"thesis-days",children:[t.jsx("style",{children:`
        .thesis-days{margin:0;padding:0 12px 2px;background:#0B1220;border:none}
        .thesis-days .tdtog{display:flex;align-items:center;gap:7px;width:100%;
          background:none;border:0;cursor:pointer;padding:5px 2px;
          font-family:ui-monospace,monospace;font-size:9.5px;letter-spacing:.12em;
          text-transform:uppercase;color:#7E8CA0}
        .thesis-days .tdtog:hover{color:#C7D5E5}
        .thesis-days .tdtog i{font-style:normal}
      `}),t.jsxs("button",{type:"button",className:"tdtog","aria-expanded":i,onClick:()=>o(l=>!l),children:[t.jsx("i",{children:i?"▾":"▸"}),i?"Masquer les dates":"Voir les autres jours"]}),i&&t.jsx(Do,{mode:"local",theme:"dark",month:e.slice(0,7),current:n?e:"",windowDays:0,daysUrl:a,onPick:r})]})}function ls(){const{day:e,ed:a,loading:r,pickWindow:n,dayPicked:i,isEn:o}=Rr(),l=!!(a!=null&&a.ok&&(a.html||a.acquirers_html)),d=(a==null?void 0:a.ok)&&!l,c=a&&!a.ok;return t.jsxs("section",{className:"thesis-brief","data-day":(a==null?void 0:a.date)||e,"data-fund":(a==null?void 0:a.fund)||"",children:[t.jsx("style",{children:`
        .thesis-brief{margin:0;padding:18px 16px 22px;background:transparent;border:none;
          border-top:1px solid var(--line,#e2e8f0)}
        .thesis-brief__hd{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin:0 0 8px}
        .thesis-brief__kicker{font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.14em;
          text-transform:uppercase;color:var(--muted,#64748b);font-weight:700}
        .thesis-brief__title{margin:0;font-size:16px;font-weight:700;letter-spacing:-.015em;color:#0f172a}
        .thesis-brief__date{margin-left:auto;font-family:ui-monospace,monospace;font-size:11px;color:#94a3b8}
        .thesis-brief__hint{margin:0 0 12px;font-size:12.5px;color:#64748b;line-height:1.45;max-width:62ch}
        .thesis-brief__body,.thesis-brief__acq{font-size:14px;line-height:1.6;color:#0f172a}
        .thesis-brief__body p{margin:0 0 10px}
        .thesis-brief__body a{color:#0E8A4F;font-weight:600}
        .thesis-brief__body h2,.thesis-brief__body h3{font-size:14.5px;font-weight:700;margin:16px 0 8px;color:#0f172a}
        .thesis-brief__body ul{margin:0 0 10px;padding-left:1.2em}
        .thesis-brief__body li{margin:0 0 4px}
        .thesis-brief__body .ed-sec{margin:16px 0 0}
        .thesis-brief__body .ed-sec-h,.thesis-brief__body .mk-sec h2{font-size:14px;font-weight:700;
          letter-spacing:-.01em;margin:0 0 8px;padding-bottom:6px;border-bottom:1px solid #e2e8f0;color:#0f172a}
        .thesis-brief__body .ed-ops,.thesis-brief__body .mk-ops{list-style:none;margin:0;padding:0}
        .thesis-brief__body .ed-op,.thesis-brief__body .mk-op{padding:10px 0;border-bottom:1px solid #f1f5f9}
        .thesis-brief__body .ed-op-t,.thesis-brief__body .mk-op-t{font-size:14px;line-height:1.4;color:#0f172a}
        .thesis-brief__body .ed-op-m,.thesis-brief__body .mk-op-m{margin-top:2px;font-size:12.5px;color:#64748b}
        .thesis-brief__loading,.thesis-brief__empty,.thesis-brief__err{
          margin:0;font-size:13px;color:#64748b;line-height:1.5}
        .thesis-brief__empty b{color:#0f172a}
        .thesis-brief__err{color:#b91c1c}
        .thesis-brief__clear{margin-top:12px;font-size:12.5px;font-weight:700;color:#0E8A4F;
          background:none;border:none;cursor:pointer;padding:0;text-decoration:underline}
      `}),t.jsxs("header",{className:"thesis-brief__hd",children:[t.jsx("span",{className:"thesis-brief__kicker",children:o?"Daily brief":"Brief du jour"}),t.jsxs("h2",{className:"thesis-brief__title",children:[o?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",(a==null?void 0:a.count)!=null&&a.count>0?` · ${a.count}`:""]}),((a==null?void 0:a.date)||e)&&t.jsx("time",{className:"thesis-brief__date",dateTime:(a==null?void 0:a.date)||e,children:(a==null?void 0:a.date)||e})]}),t.jsx("p",{className:"thesis-brief__hint",children:o?"Same content as your daily email for this fund. Pick a day above the map to change this brief and the LIVE ticker.":"Même contenu que l’email quotidien de ce fonds. Choisir un jour au-dessus de la carte change ce brief et le LIVE."}),r&&!l&&t.jsx("p",{className:"thesis-brief__loading",children:o?"Loading your thesis brief…":"Chargement de votre brief de thèse…"}),c&&t.jsxs("p",{className:"thesis-brief__err",children:[o?"Could not load this brief.":"Impossible de charger ce brief.",a!=null&&a.error?` (${a.error})`:""]}),d&&!r&&t.jsx("p",{className:"thesis-brief__empty",children:o?t.jsxs(t.Fragment,{children:["Edition of ",t.jsx("b",{children:Un(e,!0)}),"."]}):t.jsxs(t.Fragment,{children:["Édition du ",t.jsx("b",{children:Un(e)}),"."]})}),l&&(a!=null&&a.html)?t.jsx("div",{className:"thesis-brief__body",dangerouslySetInnerHTML:{__html:a.html}}):null,l&&(a!=null&&a.acquirers_html)?t.jsx("div",{className:"thesis-brief__acq",dangerouslySetInnerHTML:{__html:a.acquirers_html}}):null,i&&t.jsx("button",{type:"button",className:"thesis-brief__clear",onClick:n,children:o?"← See all":"← Voir tout"})]})}const ds=300,aa=7,cs={fr:{ma:"🤝 M&A",levees:"🚀 Levées de fonds",nominations:"👤 Nominations",recrutements:"💼 Offres d'emploi",actualites:"📰 Autres actualités"},en:{ma:"🤝 M&A",levees:"🚀 Fundraising",nominations:"👤 Appointments",recrutements:"💼 Job offers",actualites:"📰 Other news"}},Fr={fr:{hiring:"💼 Recrute",raised:"💰 Lève des fonds",news:"📰 Presse",posting:"📣 Publie",building:"💻 Construit",community:"💬 Communauté",registry:"🆕 Nouveau",exodus:"👋 Départs",other:"🔔 Signal"},en:{hiring:"💼 Hiring",raised:"💰 Raising",news:"📰 Press",posting:"📣 Posting",building:"💻 Building",community:"💬 Community",registry:"🆕 New",exodus:"👋 Exodus",other:"🔔 Signal"}},ps=["hiring","raised","news","posting","building","community","registry","exodus","other"];function Pa(e){const a=(e.rubrique||"").toLowerCase();if(a==="ma"||a==="levees"||a==="nominations"||a==="recrutements")return a;if(e.dealKind==="ma")return"ma";if(e.dealKind==="levee")return"levees";const r=(e.engine||"").toLowerCase();if(r==="nominations")return"nominations";if(r==="recrutements")return"recrutements";if(_o(r)&&r!=="media")return"news:"+r;const n=qe(e);return n?"sig:"+(n.theme&&Fr.fr[n.theme]?n.theme:"other"):"actualites"}function us(){const{dossiers:e,st:a,t:r,dispatch:n,contName:i,pipe:o,lang:l,fund:d}=_(),c=Mr(),f=l==="en",[s,x]=m.useState("all"),[u,h]=m.useState(!1),p=m.useMemo(()=>{var ve;const v=(a.filters.day||"").slice(0,10),q=W=>!(!o&&a.continent!=="monde"&&W.continent!==a.continent||v&&(W.date||"").slice(0,10)!==v),V=e.filter(W=>q(W)&&qe(W)&&(!o||W.kind!=="target"||ze(W)!==5)),B=o&&(((ve=c==null?void 0:c.ed)==null?void 0:ve.ops)||[]).length?c.ed.ops.map(W=>pa(W,l)).filter(W=>!!W).filter(W=>!v||(W.date||"").slice(0,10)===v):[],$=e.filter(W=>q(W)&&W.kind==="op"&&(v?!0:ct(W.date)<=aa)),K=o?B.length?B:$.filter(W=>{const ie=(d||"").trim().toLowerCase();if(!ie)return!1;const fe=W.match||null;return fe?Object.keys(fe).map(Ne=>Ne.trim().toLowerCase()).includes(ie):!1}):$,X=v||new Date().toISOString().slice(0,10),te=W=>{const ie=Pa(W);return ie==="ma"?0:ie==="levees"?1:2};K.sort((W,ie)=>{const fe=te(W)-te(ie);if(fe)return fe;const Ne=(W.date||"").slice(0,10)===X?0:1,ge=(ie.date||"").slice(0,10)===X?0:1;return Ne!==ge?Ne-ge:(ie.amountEur||0)-(W.amountEur||0)});const le=new Set,ae=[];for(const W of[...K,...hn(V,{key:"signal",dir:-1})]){const ie=W.id||W.name;!ie||le.has(ie)||(le.add(ie),ae.push(W))}return o&&ae.length===0?e.filter(ie=>q(ie)&&ct(ie.date)<=aa).sort((ie,fe)=>(fe.date||"").localeCompare(ie.date||"")).slice(0,80):ae},[e,a.continent,a.filters.day,o,d,l,c]),b=m.useMemo(()=>{const v={};for(const q of p){const V=Pa(q);v[V]=(v[V]||0)+1}return v},[p]),y=m.useMemo(()=>s==="all"?p:p.filter(v=>Pa(v)===s),[p,s]),g=m.useMemo(()=>y.slice(0,ds),[y]),j=y.length-g.length,N=m.useRef(null);m.useEffect(()=>{var K,X;const v=N.current;if(!v)return;const q=()=>{const te=v.scrollWidth;te<200||(v.style.animationDuration=Math.max(18,Math.round(te/130))+"s")};q();const V=requestAnimationFrame(q),B=window.setTimeout(q,1200);let $=!0;return(X=(K=document.fonts)==null?void 0:K.ready)==null||X.then(()=>{$&&q()}),()=>{$=!1,cancelAnimationFrame(V),window.clearTimeout(B)}},[g.length,s]);const w=v=>v==="all"?p.length:b[v]||0,C=v=>{if(v==="all")return f?"All":"Tout";if(v.startsWith("sig:"))return Fr[f?"en":"fr"][v.slice(4)]||"🔔";if(v.startsWith("news:")){const q=v.slice(5);return Bo[q]?$o(q,f?"en":"fr"):v}return cs[f?"en":"fr"][v]},T=[{k:"all"}],A=["ma","levees"].filter(v=>w(v)>0||v===s);if(A.length){T.push({g:f?"Deals":"Opérations"});for(const v of A)T.push({k:v})}const L=["nominations","recrutements"].filter(v=>w(v)>0||v===s),z=Io.filter(v=>v!=="media").map(v=>"news:"+v).filter(v=>w(v)>0||v===s),S=w("actualites")>0||s==="actualites"?["actualites"]:[];if(L.length||z.length||S.length){T.push({g:f?"News":"Actualités"});for(const v of L)T.push({k:v});for(const v of z)T.push({k:v});for(const v of S)T.push({k:v})}const O=ps.map(v=>"sig:"+v).filter(v=>w(v)>0||v===s);if(O.length){T.push({g:f?"Signals (your engines)":"Signaux (vos moteurs)"});for(const v of O)T.push({k:v})}const U=v=>{try{return new Date(v+"T12:00:00Z").toLocaleDateString(f?"en-GB":"fr-FR",{day:"numeric",month:"long"})}catch{return v}},M=(()=>{const v=(a.filters.day||"").slice(0,10),q=!o&&a.continent!=="monde"&&i?f?` Scope: ${i}.`:` Périmètre : ${i}.`:"";return v?(f?`LIVE covers the events of ${U(v)}.`:`Le LIVE regroupe les événements du ${U(v)}.`)+q:(f?`LIVE covers the still-open signals and the deals of the last ${aa} days.`:`Le LIVE regroupe les signaux encore ouverts et les opérations des ${aa} derniers jours.`)+q})(),D=v=>g.map(q=>t.jsxs("button",{type:"button",className:"tk"+(Ie(q)?" spent":""),onClick:V=>{if(n({type:"focus",id:q.id}),a.dens!=="liste"){const B=V.currentTarget.getBoundingClientRect();n({type:"popup",id:q.id,anchor:{x:B.left+B.width/2,y:B.bottom}})}},title:q.name+(q.tagline?" — "+q.tagline:""),children:[t.jsx(kt,{o:q}),t.jsxs("span",{className:"who",children:[t.jsx(xo,{o:q}),t.jsx("span",{className:"co",children:q.name})]}),typeof q.amountEur=="number"&&q.amountEur>0&&t.jsx("span",{className:"am",children:Bd(q.amountEur)}),q.sector&&t.jsx("span",{className:"mt",children:q.sector}),t.jsx(za,{o:q}),t.jsx("span",{className:"tkgo",children:"→"})]},v+(q.id||q.name))).concat(j>0?[t.jsx("span",{className:"tk quiet",children:f?`+ ${j} more — filter by section to see them`:`+ ${j} autres — filtrez par rubrique pour les voir`},v+":more")]:[]);return t.jsxs("div",{className:"ticker",children:[t.jsxs("span",{className:"lbl",children:[t.jsx("i",{}),r.live]}),t.jsxs("span",{className:"tkfil",onBlur:v=>{v.currentTarget.contains(v.relatedTarget)||h(!1)},children:[t.jsxs("button",{type:"button",className:"tkfilb","aria-expanded":u,onClick:()=>h(v=>!v),children:[C(s),t.jsx("b",{children:w(s)}),t.jsx("span",{"aria-hidden":"true",children:"▾"})]}),t.jsxs("div",{className:"tkfilm",hidden:!u,children:[t.jsx("span",{className:"tkfilscope",children:M}),T.map(v=>"g"in v?t.jsx("span",{className:"tkfilg",children:v.g},v.g):t.jsxs("button",{type:"button","aria-pressed":v.k===s,onClick:()=>{x(v.k),h(!1)},children:[C(v.k),t.jsx("b",{children:w(v.k)})]},v.k))]})]}),t.jsx("div",{className:"win",children:g.length?t.jsxs("div",{className:"run",ref:N,children:[D(0),D(1)]}):t.jsx("div",{className:"run",style:{animation:"none"},children:t.jsx("span",{className:"tk quiet",children:r.liveQuiet(i)})})}),!!c&&t.jsx(fs,{isEn:f})]})}const ms=t.jsxs("svg",{viewBox:"0 0 16 16",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"1.4","aria-hidden":"true",children:[t.jsx("rect",{x:"2",y:"3.5",width:"12",height:"10.5",rx:"1.5"}),t.jsx("path",{d:"M2 6.5h12M5.5 2v3M10.5 2v3"})]});function fs({isEn:e}){const[a,r]=m.useState(()=>Uo());m.useEffect(()=>{const i=o=>{var l;return r(!!((l=o.detail)!=null&&l.open))};return window.addEventListener(qn,i),()=>window.removeEventListener(qn,i)},[]);const n=a?e?"Hide the days":"Masquer les jours":e?"Show the days":"Voir les jours";return t.jsx("button",{type:"button",className:"dytog","aria-pressed":a,title:n,"aria-label":n,onClick:()=>Ho(!a),children:ms})}const bn="+33 6 83 10 72 86",ba="alexandre@proplace.co",Or=`tel:${bn.replace(/[^\d+]/g,"")}`;function xs(){return null}class Oe extends m.Component{constructor(){super(...arguments);En(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(r,n){console.error(`[atl2] bandeau « ${this.props.name} » en échec :`,r,n.componentStack)}render(){return this.state.dead?this.props.fallback??null:this.props.children}}const Da=600,ht=62,Hn="atl2:fstats";function hs(){const{t:e,lang:a,data:r,caps:n,st:i,dispatch:o}=_(),[l,d]=m.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem(Hn)==="on"}catch{return!1}}),c=r.stats,f=m.useMemo(()=>((c==null?void 0:c.by_day)||[]).slice(-30),[c]),s=(c==null?void 0:c.since)||"";if(!n.showFunnel||!c||typeof c.screened!="number")return null;const x=C=>a==="en"?C.slice(5,10):`${C.slice(8,10)}/${C.slice(5,7)}`,u=C=>C.toLocaleString(a==="en"?"en-US":"fr-FR"),h=f.reduce((C,T)=>Math.max(C,T.s||0),0),p=f.length?Da/f.length:0,b=Math.max(4,p-4),y=f.length>=5&&h>0,g=r.marketEstimate||0,j=x(new Date().toISOString().slice(0,10)),N=C=>[...typeof C=="number"?[[C,e.funScreened("","")]]:[],...typeof c.kept=="number"?[[c.kept,e.funKept]]:[],...typeof c.analyzed=="number"?[[c.analyzed,e.funAnalyzed]]:[],...typeof c.shown=="number"?[[c.shown,e.funShown]]:[]],w=[];return typeof c.screened_window=="number"&&s&&w.push({cle:"fenetre",periode:e.funPerWindow(x(s),j),etapes:[[c.screened_window,e.funScreened("","")]]}),typeof c.screened=="number"&&w.push({cle:"total",periode:e.funPerAll,etapes:N(c.screened)}),t.jsxs("div",{className:"fstats"+(l?" on":""),children:[w.map(C=>t.jsxs("div",{className:"fst-row fst-lab",title:e.funScope,children:[t.jsx("span",{className:"fst-per",children:C.periode}),C.etapes.map(([T,A],L)=>t.jsxs("span",{className:"fst-t",children:[L>0&&t.jsx("span",{className:"fst-ar",children:"→"}),t.jsx("b",{children:u(T)}),t.jsx("i",{children:A})]},C.cle+A)),C.cle==="total"&&g>0&&t.jsxs("span",{className:"fst-t fst-mkt",children:[t.jsx("span",{className:"fst-ar",children:"·"}),t.jsx("i",{children:e.funOfMarket(u(g),Math.min(100,Math.round((c.screened||0)/g*100)))})]}),C.cle===w[w.length-1].cle&&y&&t.jsx("button",{type:"button",className:"fst-x","aria-expanded":l,title:l?e.fstatsHide:e.fstatsShow,onClick:()=>{const T=!l;d(T),T&&!i.mapFolded&&o({type:"mapFold",folded:!0});try{localStorage.setItem(Hn,T?"on":"off")}catch{}},children:l?"⌃":"⌄"})]},C.cle)),l&&y&&t.jsxs("div",{className:"fst-act",children:[t.jsxs("div",{className:"fst-ah",children:[t.jsx("span",{children:e.actTitle}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#185c38"}}),e.actKept]}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#cfe0d6"}}),e.actScreened]})]}),t.jsxs("svg",{viewBox:`0 0 ${Da} ${ht}`,preserveAspectRatio:"none",role:"img","aria-label":e.actTitle,children:[f.map((C,T)=>{const A=(C.s||0)/h*(ht-4),L=(C.m||0)/h*(ht-4),z=T*p+(p-b)/2;return t.jsxs("g",{children:[t.jsx("title",{children:`${x(C.d)} — ${C.s} ${e.actScreened} · ${C.m} ${e.actKept}`}),t.jsx("rect",{x:z,y:ht-2-A,width:b,height:A,fill:"#cfe0d6"}),t.jsx("rect",{x:z,y:ht-2-L,width:b,height:L,fill:"#185c38"})]},C.d)}),t.jsx("line",{x1:0,y1:ht-1.5,x2:Da,y2:ht-1.5,stroke:"#dbe5df",strokeWidth:1})]}),t.jsxs("div",{className:"fst-ax",children:[t.jsx("span",{children:x(f[0].d)}),t.jsx("span",{children:e.actToday})]})]})]})}const Pr=[["Retenu","csKept"],["Analysé","csAnalysed"],["À trancher","csPending"],["Validé","csValidated"],["Écarté","csOut"]];function gs(e,a){if((ut(e)||"").startsWith("CALL")&&ze(e)===3)return[["Validé",a.csYes],["Écarté",a.csNo]];const n=ze(e)>=2;return Pr.filter(([i])=>!(n&&i==="Retenu")).map(([i,o])=>[i,a[o]])}function bs({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:i,doAnalyse:o,memoQueued:l}=_(),[d,c]=m.useState(!1),[f,s]=m.useState(""),[x,u]=m.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const h=(e.ceoStatus||"").trim(),p=async b=>{if(f)return;if(b==="Analysé"&&!e.memoUrl){u(!0);return}s(b);const y=await i(e,b);s(""),y&&(c(!1),u(!1))};return t.jsxs("span",{className:"rstat",onClick:b=>b.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"rstb",title:a.csLabel,onClick:()=>{c(b=>!b),u(!1)},children:[h||a.csNone,t.jsx("i",{children:"▾"})]}),d&&t.jsx("span",{className:"rstm",children:x?t.jsxs("span",{className:"rstask",children:[t.jsx("b",{children:a.csAnaNeedMemo}),t.jsx("button",{type:"button",className:"rsta pri",disabled:l.has(e.id),onClick:()=>{o(e),u(!1),c(!1)},children:l.has(e.id)?a.actMemoQueue:a.csAnaRun}),t.jsx("button",{type:"button",className:"rsta",onClick:()=>{(async()=>{s("Analysé");const b=await i(e,"Analysé");s(""),b&&(c(!1),u(!1))})()},children:a.csAnaAnyway})]}):gs(e,a).map(([b,y])=>t.jsx("button",{type:"button",className:"rsti"+(h===b?" on":"")+(f===b?" busy":""),disabled:!!f,onClick:()=>{p(b)},children:y},b))})]})}function vs({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:i}=_(),[o,l]=m.useState(""),[d,c]=m.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const f=(e.ceoStatus||"").trim(),s=(ut(e)||"").startsWith("CALL")&&ze(e)===3,x=ze(e)>=2,u=async p=>{if(o||p==="Analysé"&&!e.memoUrl&&!window.confirm(a.csAnaConfirm))return;l(p);const b=await i(e,p);l(""),b&&(c(!0),setTimeout(()=>c(!1),2200))},h=s?[["Validé",a.csYes],["Écarté",a.csNo]]:Pr.filter(([p])=>!(x&&p==="Retenu")).map(([p,b])=>[p,a[b]]);return t.jsxs("div",{className:"csp",onClick:p=>p.stopPropagation(),children:[t.jsxs("div",{className:"csrow",children:[t.jsx("span",{className:"cslb",children:a.csLabel}),h.map(([p,b])=>t.jsx("button",{type:"button",className:"csb"+(f===p?" on":"")+(o===p?" busy":""),disabled:!!o,onClick:()=>{u(p)},children:b},p)),d&&t.jsx("span",{className:"csok",children:a.csSaved})]}),t.jsx(ys,{o:e})]})}function ys({o:e}){const{t:a,saveNote:r,flash:n}=_(),[i,o]=m.useState(e.ceoNote||""),[l,d]=m.useState(!1),[c,f]=m.useState(!1),s=i.trim()!==(e.ceoNote||"").trim(),x=async()=>{if(l||!s)return;d(!0);const u=await r(e,i.trim());d(!1),u&&(f(!0),setTimeout(()=>f(!1),2200),n(a.csNoteSaved))};return t.jsxs("div",{className:"csnote",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:a.csNotePh,value:i,disabled:l,onChange:u=>o(u.target.value),onKeyDown:u=>{u.key==="Enter"&&x()}}),t.jsx("button",{type:"button",disabled:l||!s,onClick:()=>{x()},children:c?a.csNoteSaved:a.csNoteOk})]})}function ws({placeholder:e,onDone:a}){const{t:r}=_(),[n,i]=m.useState("");return t.jsxs("div",{className:"csnote why",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:e,value:n,autoFocus:!0,onChange:o=>i(o.target.value),onKeyDown:o=>{o.key==="Enter"&&a(n.trim()),o.key==="Escape"&&a("")},onBlur:()=>{n.trim()||a("")}}),t.jsx("button",{type:"button",onClick:()=>a(n.trim()),children:r.whySend})]})}function ks({o:e}){var y;const{t:a,token:r,caps:n,canWrite:i,stageOf:o,setStage:l,flashErr:d}=_(),[c,f]=m.useState(!1);if(!n.pipe||!i||n.lockActions||ze(e)!==4)return null;const s=o(e),x=(s==null?void 0:s.stage)||"todo",u=async g=>{if(c||g===x)return;f(!0);const j=s;l(e,{stage:g,stamps:(s==null?void 0:s.stamps)||{}});const N=Math.max(Date.now(),Vn+=1);Vn=N;const w=await Vo(r,{company:e.name||"",stage:g,cts:N,deal_id:e.airtableId,check_id:e.checkId});f(!1),!w.stale&&(w.ok||(l(e,j),d(a.actErr)))},h=(y=s==null?void 0:s.stamps)==null?void 0:y.sent,p=h?Math.floor((Date.now()-Date.parse(h))/864e5):0,b=x==="sent"&&h&&p>=4;return t.jsxs("div",{className:"stg",onClick:g=>g.stopPropagation(),children:[t.jsx("span",{className:"stglb",children:a.stgLabel}),a.stg.map(([g,j])=>t.jsx("button",{type:"button",className:"stgb"+(x===g?" on":""),disabled:c,onClick:()=>{u(g)},children:j},g)),b&&t.jsx("span",{className:"stgj4",children:a.j4Badge(p)})]})}let Vn=0;const na=8,ra=360;function Wn({text:e}){const a=e.split(/\*\*(.+?)\*\*/g);return t.jsx(t.Fragment,{children:a.map((r,n)=>n%2?t.jsx("b",{children:r},n):t.jsx("span",{children:r},n))})}function Yn({text:e}){const a=(e||"").split(`
`).map(n=>n.trim()).filter(Boolean),r=a.filter(n=>n.startsWith("·"));return t.jsxs(t.Fragment,{children:[a.filter(n=>!n.startsWith("·")).map((n,i)=>t.jsx("p",{children:t.jsx(Wn,{text:n})},"p"+i)),r.length>0&&t.jsx("ul",{className:"tour-ul",children:r.map((n,i)=>t.jsx("li",{children:t.jsx(Wn,{text:n.replace(/^·\s*/,"")})},"l"+i))})]})}function js({steps:e,onClose:a}){const{t:r,dispatch:n,counts:i,st:o}=_(),[l,d]=m.useState(0),[c,f]=m.useState(null),[s,x]=m.useState([]),u=m.useRef(!1),h=m.useRef({ptab:o.ptab,dens:o.dens,modal:o.modal}),p=m.useRef(!1);m.useEffect(()=>{const A=h.current;return()=>{p.current||(n({type:"ptab",tab:A.ptab}),n({type:"dens",dens:A.dens}),n({type:"modal",modal:A.modal}))}},[]),m.useEffect(()=>{u.current||(u.current=!0,x(e.filter(A=>!!document.querySelector(A.need||A.sel))))},[e]);const b=s[l],y=l>=s.length;m.useEffect(()=>{if(b&&(b.ptab!==void 0&&o.ptab!==b.ptab&&n({type:"ptab",tab:b.ptab}),b.dens&&o.dens!==b.dens&&n({type:"dens",dens:b.dens}),o.modal!==(b.modal??null)&&n({type:"modal",modal:b.modal??null}),b.click)){const A=b.click,L=window.setTimeout(()=>{const z=document.querySelector(A);z&&z.getAttribute("aria-selected")!=="true"&&z.click()},60);return()=>window.clearTimeout(L)}},[l,b]);const g=m.useRef(-1),j=m.useCallback(()=>{if(!b){f(null);return}const A=document.querySelector(b.sel)||(b.need?document.querySelector(b.need):null);if(!A){f(null);return}g.current!==l&&(g.current=l,A.scrollIntoView({block:"nearest",behavior:"smooth"}));const L=A.getBoundingClientRect();f(z=>z&&Math.abs(z.top-L.top)<1&&Math.abs(z.left-L.left)<1&&Math.abs(z.width-L.width)<1&&Math.abs(z.height-L.height)<1?z:L)},[b,l]);m.useLayoutEffect(()=>{j();const A=[90,300,700,1300].map(z=>window.setTimeout(j,z)),L=()=>j();return window.addEventListener("scroll",L,!0),window.addEventListener("resize",L),()=>{A.forEach(z=>window.clearTimeout(z)),window.removeEventListener("scroll",L,!0),window.removeEventListener("resize",L)}},[j]);const N=m.useRef(a);if(N.current=a,m.useEffect(()=>{const A=L=>{L.key==="Escape"?(L.preventDefault(),L.stopPropagation(),N.current()):L.key==="ArrowRight"?d(z=>z+1):L.key==="ArrowLeft"&&d(z=>Math.max(0,z-1))};return document.addEventListener("keydown",A,!0),()=>document.removeEventListener("keydown",A,!0)},[]),!s.length)return null;let w=null;const C=A=>()=>{p.current=!0,n({type:"modal",modal:null}),A()};if(y){const A=i[3]||0;A>0?w={title:A===1?r.ahaATitle1:r.ahaATitleN(A),body:r.ahaABody,btn:r.ahaABtn,go:C(()=>{n({type:"ptab",tab:3}),a()})}:(i[1]||0)>0?w={title:r.ahaRetTitle(i[1]||0),body:r.ahaRetBody,btn:r.ahaRetBtn,go:C(()=>{n({type:"ptab",tab:1}),a()})}:(i[0]||0)>0?w={title:r.ahaEvalTitle(i[0]||0),body:r.ahaEvalBody,btn:r.ahaEvalBtn,go:C(()=>{n({type:"ptab",tab:0}),a()})}:w={title:r.ahaCTitle,body:r.ahaCBody,btn:r.ahaCBtn,go:C(()=>{n({type:"modal",modal:"crit"}),a()})}}let T={left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:ra};if(!y&&c){const A=c.bottom+14,z=window.innerHeight-A>190?A:Math.max(12,c.top-200);T={left:Math.min(Math.max(12,c.left+c.width/2-ra/2),window.innerWidth-ra-12),top:z,width:ra}}return qt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"tour",role:"dialog","aria-modal":"true",children:[!y&&c&&t.jsx("div",{className:"tour-hole",style:{left:c.left-na,top:c.top-na,width:c.width+na*2,height:c.height+na*2}}),(y||!c)&&t.jsx("div",{className:"tour-veil"}),t.jsxs("div",{className:"tour-card"+(y?" fin":""),style:T,children:[y&&w?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:w.title}),t.jsx(Yn,{text:w.body}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",onClick:()=>d(s.length-1),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:w.go,children:w.btn})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"tour-n",children:[r.tourStep(l+1,s.length),t.jsx("span",{className:"tour-bar",children:t.jsx("i",{style:{width:(l+1)/s.length*100+"%"}})})]}),t.jsx("h3",{children:b==null?void 0:b.title}),t.jsx(Yn,{text:(b==null?void 0:b.body)||""}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",disabled:l===0,onClick:()=>d(A=>Math.max(0,A-1)),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:()=>d(A=>A+1),children:l===s.length-1?r.tourDone:r.tourNext})]})]}),t.jsx("button",{type:"button",className:"tour-x","aria-label":r.tourClose,title:r.tourClose,onClick:a,children:"×"})]})]})}),document.body)}function Dr(e){let a="";for(const r of e){const n=(r.date||"").slice(0,10);n&&n>a&&(a=n)}return a}function Ir(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(e||"");return r?a==="en"?`${r[2]}/${r[3]}`:`${r[3]}/${r[2]}`:""}function Ns(){var L,z;const{dossiers:e,scopedAll:a,pipe:r,mode:n,t:i,st:o,lang:l,data:d,dispatch:c}=_(),f=r?a:e,s=m.useMemo(()=>f.filter(S=>ct(S.date)===0&&S.kind==="target"),[f]),x=m.useMemo(()=>r?a.filter(S=>S.kind==="target"&&ze(S)===0).slice().sort((S,O)=>(O.date||"").localeCompare(S.date||"")):[],[a,r]),u=m.useMemo(()=>s.filter(S=>r?ze(S)===0:!Ie(S)),[s,r]),h=r?x:u,p=r?a.length-x.length:s.length-u.length,b=r?a.length:s.length,y=b?Math.min(100,p/b*100):100,g=m.useMemo(()=>Dr(f),[f]),j=!!g&&ct(g)>0,N=m.useMemo(()=>j?f.filter(S=>(S.date||"").slice(0,10)===g):[],[f,g,j]),w=typeof((L=d.stats)==null?void 0:L.kept_today)=="number"?d.stats.kept_today:null,C=typeof((z=d.stats)==null?void 0:z.screened_today)=="number"?d.stats.screened_today:s.length;let T;j?T=i.morningLast(N.length,x.length,Ir(g,l)):r?T=i.morningThesis(C,x.length,w):s.length?p===0?T=i.goalSourced(s.length):p>=s.length?T=i.goalCleared:T=i.goalDone(p,s.length):T=i.goalSourced(0);const A=()=>{if(!r){c({type:"pile",on:!0});return}c({type:"ptab",tab:0}),n==="client"&&x.length&&c({type:"chainStart",queue:x.map(S=>S.id)})};return t.jsxs("div",{className:"goal",children:[t.jsx("span",{className:"gtxt",title:r?i.morningEnginesTitle:void 0,dangerouslySetInnerHTML:{__html:T}}),t.jsx("div",{className:"pbar",children:t.jsx("i",{style:{width:y+"%"}})}),h.length>0&&t.jsx("button",{type:"button",className:"pilebtn",onClick:A,children:r?i.morningEval(h.length):o.pileMode?i.goalContinue(h.length):i.goalTreat}),t.jsx("span",{className:"gspace"})]})}function Ss(){var V,B;const{t:e,lang:a,st:r,dispatch:n,token:i,fund:o,data:l,dossiers:d,mode:c,doSync:f,startTour:s,flash:x,flashErr:u}=_(),[h,p]=m.useState(null),[b,y]=m.useState(!0),[g,j]=m.useState([]),N=c==="client";m.useEffect(()=>{if(!i||!o)return;let $=!0;return y(!0),(async()=>{const[K,X]=await Promise.all([mn(o),Er(i)]);$&&(K&&p(K),y(!1),j(X))})(),()=>{$=!1}},[i,o]);const[w,C]=m.useState(!1),T=()=>{!N||w||!o||(C(!0),Wo(o).then($=>{C(!1),$?x(e.identRepubDone):u(e.actErr)}))},A=(h==null?void 0:h.per_day)??null,L=((V=h==null?void 0:h.pool_order)==null?void 0:V.length)??0,z=g.filter($=>$.status==="running").length,S=m.useMemo(()=>d.filter($=>$.kind==="target"&&Ie($)).length,[d]),O=l.marketEstimate,U=typeof((B=l.stats)==null?void 0:B.screened)=="number"?l.stats.screened:S,M=O&&O>0?Math.min(100,Math.round(U/O*100)):null,D=$=>$.toLocaleString(a==="en"?"en-US":"fr-FR"),v=(o||"P").split(/\s+/).map($=>$[0]).join("").slice(0,2).toUpperCase(),q=(()=>{const $=Date.parse(l.generatedAt||"");if(Number.isNaN($))return"";const K=new Date($),X=te=>String(te).padStart(2,"0");return`${X(K.getDate())}/${X(K.getMonth()+1)} à ${X(K.getHours())}:${X(K.getMinutes())}`})();return t.jsxs("div",{className:"ident",children:[t.jsxs("div",{className:"idtop",children:[t.jsxs("span",{className:"brand",children:[t.jsx("b",{children:o?v:t.jsx("span",{className:"skt sk-ini"})}),t.jsx("i",{children:o||t.jsx("span",{className:"skt sk-nm"})})]}),t.jsx("h1",{children:o?e.identTitle(o):t.jsx("span",{className:"skt sk-h1","aria-label":e.loadingV2})}),t.jsx("span",{className:"idsp"}),q?t.jsx("span",{className:"idupd",children:e.identUpdatedAt(q)}):t.jsx("span",{className:"skt sk-upd"}),t.jsx("button",{type:"button",className:"ic",title:e.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),t.jsx("button",{type:"button",className:"ic",title:e.tourPlayTitle,onClick:s,children:"▶"})]}),t.jsxs("div",{className:"idmain",children:[M===null&&U>0&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsx("span",{className:"ev",children:t.jsx("b",{children:D(U)})})]}),M!==null&&O&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsxs("span",{className:"ev",children:[t.jsx("span",{className:"bar",children:t.jsx("i",{style:{width:M+"%"}})}),t.jsxs("b",{children:[M," %"]})]}),t.jsx("span",{className:"edv"}),t.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:e.identCoverageOf(U,O)}})]}),t.jsxs("span",{className:"engine",title:e.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[t.jsx("span",{className:"el",children:e.identEngine}),A!==null&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"ev",children:[t.jsx("b",{className:"q",children:A})," ",e.identPerDay]}),t.jsx("span",{className:"edv"})]}),A===0&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"epause",title:e.identPauseTitle,children:e.identPause}),t.jsx("span",{className:"edv"})]}),z>0&&t.jsxs("span",{className:"ev",children:["⏳ ",z]}),t.jsx("span",{className:"ego",children:b?e.identPendingWait:e.identPending(L)}),t.jsx("button",{type:"button",className:"ebell",title:e.memoAlertBtn,onClick:$=>{$.stopPropagation(),n({type:"modal",modal:"memoalert"})},children:"🔔"})]}),t.jsx("span",{className:"idsp"}),t.jsxs("span",{className:"icgrp",children:[t.jsx("button",{type:"button",className:"ic","data-tour":"export",title:e.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),t.jsx("button",{type:"button",className:"ic","data-tour":"plug",title:e.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),t.jsx("button",{type:"button",className:"ic","data-tour":"alert",title:e.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),t.jsx("button",{type:"button",className:"ic",title:e.identRepub,disabled:!N||w,onClick:T,children:w?"⏳":"📰"}),t.jsx("button",{type:"button",className:"ic",title:e.identSync,disabled:!N,onClick:f,children:"🔄"})]}),t.jsxs("span",{className:"isrch",children:["🔍",t.jsx("input",{placeholder:e.identSearch,value:r.filters.search,onChange:$=>n({type:"filters",patch:{search:$.target.value}})})]})]})]})}function Es(){const{st:e,dispatch:a,counts:r,t:n,doUndo:i,data:o,dossiers:l}=_(),d=o.loading&&!l.length,c=m.useRef({});m.useEffect(()=>{c.current={...r}},[r]);const f=u=>{const h=c.current[u],p=h!==void 0?r[u]-h:0;return t.jsxs("button",{type:"button",className:"step"+(u===3&&r[3]>0?" wait":""),style:{"--c":`var(${Ua[u]})`,"--tc":u<=3?"var(--ink)":"#fff"},"aria-selected":e.ptab===u,title:n.phelp[u],onClick:()=>a({type:"ptab",tab:u}),children:[t.jsxs("span",{className:"l",children:[n.plabels[u].toUpperCase(),u===3&&r[3]>0&&t.jsx("i",{className:"wd"})]}),t.jsxs("span",{className:"n"+(p>0?" up":p<0?" down":""),children:[r[u],p!==0&&t.jsxs("em",{className:"delta",children:[p>0?"+":"−",Math.abs(p)]})]})]},u)},s=(u,h,p)=>t.jsxs("button",{type:"button",className:"off"+(h?" view":""),style:{"--c":`var(${Ua[u]})`},"aria-selected":e.ptab===u,title:n.phelp[u],onClick:()=>a({type:"ptab",tab:u}),children:[t.jsx("span",{className:"l",children:p.toUpperCase()}),t.jsx("span",{className:"n",children:r[u]})]},u),x=(u,h,p,b=!1)=>t.jsx("button",{type:"button",className:"tool",title:h,disabled:b,onClick:p,children:u},h);return t.jsxs("div",{className:"funnel"+(d?" waiting":""),children:[t.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(f)}),t.jsxs("div",{className:"offtrack",children:[s(5,!1,n.plabels[5]),s(7,!0,n.plabels[7]),s(6,!0,"★ "+n.plabels[6])]}),t.jsxs("span",{className:"ftools",children:[x("↩",n.toolUndo,i,e.undo.length===0),x("↺",n.toolReset,()=>{a({type:"reset"})}),x("⇅",n.toolSort,()=>a({type:"sort",key:e.sort.key})),x("▶",n.toolTuto,()=>a({type:"modal",modal:"tuto"})),x("⚙",n.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}function Cs(){const{st:e,dispatch:a,t:r,scoped:n,memoQueued:i,doAnalyse:o,mode:l}=_(),d=m.useRef(null),[c,f]=m.useState(60);m.useEffect(()=>{let p=0;const b=()=>{var w;const y=d.current;if(!y)return;const g=(w=y.parentElement)==null?void 0:w.querySelector('.funnel [aria-selected="true"]');if(!g)return;const j=g.getBoundingClientRect(),N=y.getBoundingClientRect();f(Math.max(20,Math.min(j.left+j.width/2-N.left,N.width-30)))};return p=requestAnimationFrame(b),window.addEventListener("resize",b),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",b)}},[e.ptab]);const s=e.ptab;let x=r.tuto[s].p;if(s===3){const p=n.filter(g=>g.kind==="target"&&ze(g)===3),b=p.filter(g=>Ha(g)==="auto").length,y=p.filter(g=>Ha(g)==="cd").length;x=r.tutoPending(b,y,p.length)}const u=(()=>{if(l!=="client")return null;if(s===0&&n.length)return{label:r.tuto[0].a,run:()=>a({type:"chainStart",queue:n.map(p=>p.id)})};if(s===1){const p=n.filter(b=>b.kind==="target"&&ze(b)===1&&!i.has(b.id)).slice(0,10);if(p.length)return{label:r.tuto[1].a,run:()=>a({type:"chainStart",queue:p.map(b=>b.id)})}}return null})(),h=Yo(s);return t.jsxs("div",{ref:d,className:"tuto mini"+(h?"":" on-dark"),style:{"--bg":`var(${Ua[s]})`,"--ax":c+"px","--stc":h?"var(--ink)":"#fff","--stt":h?"#fff":"var(--ink)","--tc":h?"var(--ink)":"#fff"},children:[t.jsx("span",{className:"txt",children:t.jsxs("p",{children:[t.jsx("b",{className:"tstep",children:r.plabels[s].toUpperCase()}),t.jsx("span",{className:"tbody",dangerouslySetInnerHTML:{__html:x}})]})}),u&&t.jsx("button",{type:"button",className:"tprim",onClick:u.run,children:u.label})]})}class yt{constructor(){this._partials=new Float64Array(32),this._n=0}add(a){const r=this._partials;let n=0;for(let i=0;i<this._n&&i<32;i++){const o=r[i],l=a+o,d=Math.abs(a)<Math.abs(o)?a-(l-o):o-(l-a);d&&(r[n++]=d),a=l}return r[n]=a,this._n=n+1,this}valueOf(){const a=this._partials;let r=this._n,n,i,o,l=0;if(r>0){for(l=a[--r];r>0&&(n=l,i=a[--r],l=n+i,o=i-(l-n),!o););r>0&&(o<0&&a[r-1]<0||o>0&&a[r-1]>0)&&(i=o*2,n=l+i,i==n-l&&(l=n))}return l}}function*zs(e){for(const a of e)yield*a}function Br(e){return Array.from(zs(e))}var be=1e-6,de=Math.PI,Ge=de/2,Gn=de/4,Qe=de*2,lt=180/de,_e=de/180,we=Math.abs,As=Math.atan,Vt=Math.atan2,Se=Math.cos,Ee=Math.sin,Ts=Math.sign||function(e){return e>0?1:e<0?-1:0},jt=Math.sqrt;function Ls(e){return e>1?0:e<-1?de:Math.acos(e)}function Wt(e){return e>1?Ge:e<-1?-Ge:Math.asin(e)}function Ke(){}function va(e,a){e&&Qn.hasOwnProperty(e.type)&&Qn[e.type](e,a)}var Kn={Feature:function(e,a){va(e.geometry,a)},FeatureCollection:function(e,a){for(var r=e.features,n=-1,i=r.length;++n<i;)va(r[n].geometry,a)}},Qn={Sphere:function(e,a){a.sphere()},Point:function(e,a){e=e.coordinates,a.point(e[0],e[1],e[2])},MultiPoint:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)e=r[n],a.point(e[0],e[1],e[2])},LineString:function(e,a){Ka(e.coordinates,a,0)},MultiLineString:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)Ka(r[n],a,0)},Polygon:function(e,a){Jn(e.coordinates,a)},MultiPolygon:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)Jn(r[n],a)},GeometryCollection:function(e,a){for(var r=e.geometries,n=-1,i=r.length;++n<i;)va(r[n],a)}};function Ka(e,a,r){var n=-1,i=e.length-r,o;for(a.lineStart();++n<i;)o=e[n],a.point(o[0],o[1],o[2]);a.lineEnd()}function Jn(e,a){var r=-1,n=e.length;for(a.polygonStart();++r<n;)Ka(e[r],a,1);a.polygonEnd()}function St(e,a){e&&Kn.hasOwnProperty(e.type)?Kn[e.type](e,a):va(e,a)}function Qa(e){return[Vt(e[1],e[0]),Wt(e[2])]}function At(e){var a=e[0],r=e[1],n=Se(r);return[n*Se(a),n*Ee(a),Ee(r)]}function oa(e,a){return e[0]*a[0]+e[1]*a[1]+e[2]*a[2]}function ya(e,a){return[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]]}function Ia(e,a){e[0]+=a[0],e[1]+=a[1],e[2]+=a[2]}function ia(e,a){return[e[0]*a,e[1]*a,e[2]*a]}function Ja(e){var a=jt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=a,e[1]/=a,e[2]/=a}function Xa(e,a){function r(n,i){return n=e(n,i),a(n[0],n[1])}return e.invert&&a.invert&&(r.invert=function(n,i){return n=a.invert(n,i),n&&e.invert(n[0],n[1])}),r}function Za(e,a){return we(e)>de&&(e-=Math.round(e/Qe)*Qe),[e,a]}Za.invert=Za;function qs(e,a,r){return(e%=Qe)?a||r?Xa(Zn(e),er(a,r)):Zn(e):a||r?er(a,r):Za}function Xn(e){return function(a,r){return a+=e,we(a)>de&&(a-=Math.round(a/Qe)*Qe),[a,r]}}function Zn(e){var a=Xn(e);return a.invert=Xn(-e),a}function er(e,a){var r=Se(e),n=Ee(e),i=Se(a),o=Ee(a);function l(d,c){var f=Se(c),s=Se(d)*f,x=Ee(d)*f,u=Ee(c),h=u*r+s*n;return[Vt(x*i-h*o,s*r-u*n),Wt(h*i+x*o)]}return l.invert=function(d,c){var f=Se(c),s=Se(d)*f,x=Ee(d)*f,u=Ee(c),h=u*i-x*o;return[Vt(x*i+u*o,s*r+h*n),Wt(h*r-s*n)]},l}function Ms(e,a,r,n,i,o){if(r){var l=Se(a),d=Ee(a),c=n*r;i==null?(i=a+n*Qe,o=a-c/2):(i=tr(l,i),o=tr(l,o),(n>0?i<o:i>o)&&(i+=n*Qe));for(var f,s=i;n>0?s>o:s<o;s-=c)f=Qa([l,-d*Se(s),-d*Ee(s)]),e.point(f[0],f[1])}}function tr(e,a){a=At(a),a[0]-=e,Ja(a);var r=Ls(-a[1]);return((-a[2]<0?-r:r)+Qe-be)%Qe}function $r(){var e=[],a;return{point:function(r,n,i){a.push([r,n,i])},lineStart:function(){e.push(a=[])},lineEnd:Ke,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],a=null,r}}}function ua(e,a){return we(e[0]-a[0])<be&&we(e[1]-a[1])<be}function sa(e,a,r,n){this.x=e,this.z=a,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function _r(e,a,r,n,i){var o=[],l=[],d,c;if(e.forEach(function(p){if(!((b=p.length-1)<=0)){var b,y=p[0],g=p[b],j;if(ua(y,g)){if(!y[2]&&!g[2]){for(i.lineStart(),d=0;d<b;++d)i.point((y=p[d])[0],y[1]);i.lineEnd();return}g[0]+=2*be}o.push(j=new sa(y,p,null,!0)),l.push(j.o=new sa(y,null,j,!1)),o.push(j=new sa(g,p,null,!1)),l.push(j.o=new sa(g,null,j,!0))}}),!!o.length){for(l.sort(a),ar(o),ar(l),d=0,c=l.length;d<c;++d)l[d].e=r=!r;for(var f=o[0],s,x;;){for(var u=f,h=!0;u.v;)if((u=u.n)===f)return;s=u.z,i.lineStart();do{if(u.v=u.o.v=!0,u.e){if(h)for(d=0,c=s.length;d<c;++d)i.point((x=s[d])[0],x[1]);else n(u.x,u.n.x,1,i);u=u.n}else{if(h)for(s=u.p.z,d=s.length-1;d>=0;--d)i.point((x=s[d])[0],x[1]);else n(u.x,u.p.x,-1,i);u=u.p}u=u.o,s=u.z,h=!h}while(!u.v);i.lineEnd()}}}function ar(e){if(a=e.length){for(var a,r=0,n=e[0],i;++r<a;)n.n=i=e[r],i.p=n,n=i;n.n=i=e[0],i.p=n}}function Ba(e){return we(e[0])<=de?e[0]:Ts(e[0])*((we(e[0])+de)%Qe-de)}function Rs(e,a){var r=Ba(a),n=a[1],i=Ee(n),o=[Ee(r),-Se(r),0],l=0,d=0,c=new yt;i===1?n=Ge+be:i===-1&&(n=-Ge-be);for(var f=0,s=e.length;f<s;++f)if(u=(x=e[f]).length)for(var x,u,h=x[u-1],p=Ba(h),b=h[1]/2+Gn,y=Ee(b),g=Se(b),j=0;j<u;++j,p=w,y=T,g=A,h=N){var N=x[j],w=Ba(N),C=N[1]/2+Gn,T=Ee(C),A=Se(C),L=w-p,z=L>=0?1:-1,S=z*L,O=S>de,U=y*T;if(c.add(Vt(U*z*Ee(S),g*A+U*Se(S))),l+=O?L+z*Qe:L,O^p>=r^w>=r){var M=ya(At(h),At(N));Ja(M);var D=ya(o,M);Ja(D);var v=(O^L>=0?-1:1)*Wt(D[2]);(n>v||n===v&&(M[0]||M[1]))&&(d+=O^L>=0?1:-1)}}return(l<-be||l<be&&c<-1e-12)^d&1}function Ur(e,a,r,n){return function(i){var o=a(i),l=$r(),d=a(l),c=!1,f,s,x,u={point:h,lineStart:b,lineEnd:y,polygonStart:function(){u.point=g,u.lineStart=j,u.lineEnd=N,s=[],f=[]},polygonEnd:function(){u.point=h,u.lineStart=b,u.lineEnd=y,s=Br(s);var w=Rs(f,n);s.length?(c||(i.polygonStart(),c=!0),_r(s,Os,w,r,i)):w&&(c||(i.polygonStart(),c=!0),i.lineStart(),r(null,null,1,i),i.lineEnd()),c&&(i.polygonEnd(),c=!1),s=f=null},sphere:function(){i.polygonStart(),i.lineStart(),r(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function h(w,C){e(w,C)&&i.point(w,C)}function p(w,C){o.point(w,C)}function b(){u.point=p,o.lineStart()}function y(){u.point=h,o.lineEnd()}function g(w,C){x.push([w,C]),d.point(w,C)}function j(){d.lineStart(),x=[]}function N(){g(x[0][0],x[0][1]),d.lineEnd();var w=d.clean(),C=l.result(),T,A=C.length,L,z,S;if(x.pop(),f.push(x),x=null,!!A){if(w&1){if(z=C[0],(L=z.length-1)>0){for(c||(i.polygonStart(),c=!0),i.lineStart(),T=0;T<L;++T)i.point((S=z[T])[0],S[1]);i.lineEnd()}return}A>1&&w&2&&C.push(C.pop().concat(C.shift())),s.push(C.filter(Fs))}}return u}}function Fs(e){return e.length>1}function Os(e,a){return((e=e.x)[0]<0?e[1]-Ge-be:Ge-e[1])-((a=a.x)[0]<0?a[1]-Ge-be:Ge-a[1])}const nr=Ur(function(){return!0},Ps,Is,[-de,-Ge]);function Ps(e){var a=NaN,r=NaN,n=NaN,i;return{lineStart:function(){e.lineStart(),i=1},point:function(o,l){var d=o>0?de:-de,c=we(o-a);we(c-de)<be?(e.point(a,r=(r+l)/2>0?Ge:-Ge),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(d,r),e.point(o,r),i=0):n!==d&&c>=de&&(we(a-n)<be&&(a-=n*be),we(o-d)<be&&(o-=d*be),r=Ds(a,r,o,l),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(d,r),i=0),e.point(a=o,r=l),n=d},lineEnd:function(){e.lineEnd(),a=r=NaN},clean:function(){return 2-i}}}function Ds(e,a,r,n){var i,o,l=Ee(e-r);return we(l)>be?As((Ee(a)*(o=Se(n))*Ee(r)-Ee(n)*(i=Se(a))*Ee(e))/(i*o*l)):(a+n)/2}function Is(e,a,r,n){var i;if(e==null)i=r*Ge,n.point(-de,i),n.point(0,i),n.point(de,i),n.point(de,0),n.point(de,-i),n.point(0,-i),n.point(-de,-i),n.point(-de,0),n.point(-de,i);else if(we(e[0]-a[0])>be){var o=e[0]<a[0]?de:-de;i=r*o/2,n.point(-o,i),n.point(0,i),n.point(o,i)}else n.point(a[0],a[1])}function Bs(e){var a=Se(e),r=2*_e,n=a>0,i=we(a)>be;function o(s,x,u,h){Ms(h,e,r,u,s,x)}function l(s,x){return Se(s)*Se(x)>a}function d(s){var x,u,h,p,b;return{lineStart:function(){p=h=!1,b=1},point:function(y,g){var j=[y,g],N,w=l(y,g),C=n?w?0:f(y,g):w?f(y+(y<0?de:-de),g):0;if(!x&&(p=h=w)&&s.lineStart(),w!==h&&(N=c(x,j),(!N||ua(x,N)||ua(j,N))&&(j[2]=1)),w!==h)b=0,w?(s.lineStart(),N=c(j,x),s.point(N[0],N[1])):(N=c(x,j),s.point(N[0],N[1],2),s.lineEnd()),x=N;else if(i&&x&&n^w){var T;!(C&u)&&(T=c(j,x,!0))&&(b=0,n?(s.lineStart(),s.point(T[0][0],T[0][1]),s.point(T[1][0],T[1][1]),s.lineEnd()):(s.point(T[1][0],T[1][1]),s.lineEnd(),s.lineStart(),s.point(T[0][0],T[0][1],3)))}w&&(!x||!ua(x,j))&&s.point(j[0],j[1]),x=j,h=w,u=C},lineEnd:function(){h&&s.lineEnd(),x=null},clean:function(){return b|(p&&h)<<1}}}function c(s,x,u){var h=At(s),p=At(x),b=[1,0,0],y=ya(h,p),g=oa(y,y),j=y[0],N=g-j*j;if(!N)return!u&&s;var w=a*g/N,C=-a*j/N,T=ya(b,y),A=ia(b,w),L=ia(y,C);Ia(A,L);var z=T,S=oa(A,z),O=oa(z,z),U=S*S-O*(oa(A,A)-1);if(!(U<0)){var M=jt(U),D=ia(z,(-S-M)/O);if(Ia(D,A),D=Qa(D),!u)return D;var v=s[0],q=x[0],V=s[1],B=x[1],$;q<v&&($=v,v=q,q=$);var K=q-v,X=we(K-de)<be,te=X||K<be;if(!X&&B<V&&($=V,V=B,B=$),te?X?V+B>0^D[1]<(we(D[0]-v)<be?V:B):V<=D[1]&&D[1]<=B:K>de^(v<=D[0]&&D[0]<=q)){var le=ia(z,(-S+M)/O);return Ia(le,A),[D,Qa(le)]}}}function f(s,x){var u=n?e:de-e,h=0;return s<-u?h|=1:s>u&&(h|=2),x<-u?h|=4:x>u&&(h|=8),h}return Ur(l,d,o,n?[0,-e]:[-de,e-de])}function $s(e,a,r,n,i,o){var l=e[0],d=e[1],c=a[0],f=a[1],s=0,x=1,u=c-l,h=f-d,p;if(p=r-l,!(!u&&p>0)){if(p/=u,u<0){if(p<s)return;p<x&&(x=p)}else if(u>0){if(p>x)return;p>s&&(s=p)}if(p=i-l,!(!u&&p<0)){if(p/=u,u<0){if(p>x)return;p>s&&(s=p)}else if(u>0){if(p<s)return;p<x&&(x=p)}if(p=n-d,!(!h&&p>0)){if(p/=h,h<0){if(p<s)return;p<x&&(x=p)}else if(h>0){if(p>x)return;p>s&&(s=p)}if(p=o-d,!(!h&&p<0)){if(p/=h,h<0){if(p>x)return;p>s&&(s=p)}else if(h>0){if(p<s)return;p<x&&(x=p)}return s>0&&(e[0]=l+s*u,e[1]=d+s*h),x<1&&(a[0]=l+x*u,a[1]=d+x*h),!0}}}}}var Dt=1e9,la=-Dt;function _s(e,a,r,n){function i(f,s){return e<=f&&f<=r&&a<=s&&s<=n}function o(f,s,x,u){var h=0,p=0;if(f==null||(h=l(f,x))!==(p=l(s,x))||c(f,s)<0^x>0)do u.point(h===0||h===3?e:r,h>1?n:a);while((h=(h+x+4)%4)!==p);else u.point(s[0],s[1])}function l(f,s){return we(f[0]-e)<be?s>0?0:3:we(f[0]-r)<be?s>0?2:1:we(f[1]-a)<be?s>0?1:0:s>0?3:2}function d(f,s){return c(f.x,s.x)}function c(f,s){var x=l(f,1),u=l(s,1);return x!==u?x-u:x===0?s[1]-f[1]:x===1?f[0]-s[0]:x===2?f[1]-s[1]:s[0]-f[0]}return function(f){var s=f,x=$r(),u,h,p,b,y,g,j,N,w,C,T,A={point:L,lineStart:U,lineEnd:M,polygonStart:S,polygonEnd:O};function L(v,q){i(v,q)&&s.point(v,q)}function z(){for(var v=0,q=0,V=h.length;q<V;++q)for(var B=h[q],$=1,K=B.length,X=B[0],te,le,ae=X[0],ve=X[1];$<K;++$)te=ae,le=ve,X=B[$],ae=X[0],ve=X[1],le<=n?ve>n&&(ae-te)*(n-le)>(ve-le)*(e-te)&&++v:ve<=n&&(ae-te)*(n-le)<(ve-le)*(e-te)&&--v;return v}function S(){s=x,u=[],h=[],T=!0}function O(){var v=z(),q=T&&v,V=(u=Br(u)).length;(q||V)&&(f.polygonStart(),q&&(f.lineStart(),o(null,null,1,f),f.lineEnd()),V&&_r(u,d,v,o,f),f.polygonEnd()),s=f,u=h=p=null}function U(){A.point=D,h&&h.push(p=[]),C=!0,w=!1,j=N=NaN}function M(){u&&(D(b,y),g&&w&&x.rejoin(),u.push(x.result())),A.point=L,w&&s.lineEnd()}function D(v,q){var V=i(v,q);if(h&&p.push([v,q]),C)b=v,y=q,g=V,C=!1,V&&(s.lineStart(),s.point(v,q));else if(V&&w)s.point(v,q);else{var B=[j=Math.max(la,Math.min(Dt,j)),N=Math.max(la,Math.min(Dt,N))],$=[v=Math.max(la,Math.min(Dt,v)),q=Math.max(la,Math.min(Dt,q))];$s(B,$,e,a,r,n)?(w||(s.lineStart(),s.point(B[0],B[1])),s.point($[0],$[1]),V||s.lineEnd(),T=!1):V&&(s.lineStart(),s.point(v,q),T=!1)}j=v,N=q,w=V}return A}}const en=e=>e;var $a=new yt,tn=new yt,Hr,Vr,an,nn,dt={point:Ke,lineStart:Ke,lineEnd:Ke,polygonStart:function(){dt.lineStart=Us,dt.lineEnd=Vs},polygonEnd:function(){dt.lineStart=dt.lineEnd=dt.point=Ke,$a.add(we(tn)),tn=new yt},result:function(){var e=$a/2;return $a=new yt,e}};function Us(){dt.point=Hs}function Hs(e,a){dt.point=Wr,Hr=an=e,Vr=nn=a}function Wr(e,a){tn.add(nn*e-an*a),an=e,nn=a}function Vs(){Wr(Hr,Vr)}var Tt=1/0,wa=Tt,Yt=-Tt,ka=Yt,ja={point:Ws,lineStart:Ke,lineEnd:Ke,polygonStart:Ke,polygonEnd:Ke,result:function(){var e=[[Tt,wa],[Yt,ka]];return Yt=ka=-(wa=Tt=1/0),e}};function Ws(e,a){e<Tt&&(Tt=e),e>Yt&&(Yt=e),a<wa&&(wa=a),a>ka&&(ka=a)}var rn=0,on=0,It=0,Na=0,Sa=0,Et=0,sn=0,ln=0,Bt=0,Yr,Gr,at,nt,Ye={point:wt,lineStart:rr,lineEnd:or,polygonStart:function(){Ye.lineStart=Ks,Ye.lineEnd=Qs},polygonEnd:function(){Ye.point=wt,Ye.lineStart=rr,Ye.lineEnd=or},result:function(){var e=Bt?[sn/Bt,ln/Bt]:Et?[Na/Et,Sa/Et]:It?[rn/It,on/It]:[NaN,NaN];return rn=on=It=Na=Sa=Et=sn=ln=Bt=0,e}};function wt(e,a){rn+=e,on+=a,++It}function rr(){Ye.point=Ys}function Ys(e,a){Ye.point=Gs,wt(at=e,nt=a)}function Gs(e,a){var r=e-at,n=a-nt,i=jt(r*r+n*n);Na+=i*(at+e)/2,Sa+=i*(nt+a)/2,Et+=i,wt(at=e,nt=a)}function or(){Ye.point=wt}function Ks(){Ye.point=Js}function Qs(){Kr(Yr,Gr)}function Js(e,a){Ye.point=Kr,wt(Yr=at=e,Gr=nt=a)}function Kr(e,a){var r=e-at,n=a-nt,i=jt(r*r+n*n);Na+=i*(at+e)/2,Sa+=i*(nt+a)/2,Et+=i,i=nt*e-at*a,sn+=i*(at+e),ln+=i*(nt+a),Bt+=i*3,wt(at=e,nt=a)}function Qr(e){this._context=e}Qr.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,a){switch(this._point){case 0:{this._context.moveTo(e,a),this._point=1;break}case 1:{this._context.lineTo(e,a);break}default:{this._context.moveTo(e+this._radius,a),this._context.arc(e,a,this._radius,0,Qe);break}}},result:Ke};var dn=new yt,_a,Jr,Xr,$t,_t,Gt={point:Ke,lineStart:function(){Gt.point=Xs},lineEnd:function(){_a&&Zr(Jr,Xr),Gt.point=Ke},polygonStart:function(){_a=!0},polygonEnd:function(){_a=null},result:function(){var e=+dn;return dn=new yt,e}};function Xs(e,a){Gt.point=Zr,Jr=$t=e,Xr=_t=a}function Zr(e,a){$t-=e,_t-=a,dn.add(jt($t*$t+_t*_t)),$t=e,_t=a}let ir,Ea,sr,lr;class dr{constructor(a){this._append=a==null?eo:Zs(a),this._radius=4.5,this._=""}pointRadius(a){return this._radius=+a,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(a,r){switch(this._point){case 0:{this._append`M${a},${r}`,this._point=1;break}case 1:{this._append`L${a},${r}`;break}default:{if(this._append`M${a},${r}`,this._radius!==sr||this._append!==Ea){const n=this._radius,i=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,sr=n,Ea=this._append,lr=this._,this._=i}this._+=lr;break}}}result(){const a=this._;return this._="",a.length?a:null}}function eo(e){let a=1;this._+=e[0];for(const r=e.length;a<r;++a)this._+=arguments[a]+e[a]}function Zs(e){const a=Math.floor(e);if(!(a>=0))throw new RangeError(`invalid digits: ${e}`);if(a>15)return eo;if(a!==ir){const r=10**a;ir=a,Ea=function(i){let o=1;this._+=i[0];for(const l=i.length;o<l;++o)this._+=Math.round(arguments[o]*r)/r+i[o]}}return Ea}function el(e,a){let r=3,n=4.5,i,o;function l(d){return d&&(typeof n=="function"&&o.pointRadius(+n.apply(this,arguments)),St(d,i(o))),o.result()}return l.area=function(d){return St(d,i(dt)),dt.result()},l.measure=function(d){return St(d,i(Gt)),Gt.result()},l.bounds=function(d){return St(d,i(ja)),ja.result()},l.centroid=function(d){return St(d,i(Ye)),Ye.result()},l.projection=function(d){return arguments.length?(i=d==null?(e=null,en):(e=d).stream,l):e},l.context=function(d){return arguments.length?(o=d==null?(a=null,new dr(r)):new Qr(a=d),typeof n!="function"&&o.pointRadius(n),l):a},l.pointRadius=function(d){return arguments.length?(n=typeof d=="function"?d:(o.pointRadius(+d),+d),l):n},l.digits=function(d){if(!arguments.length)return r;if(d==null)r=null;else{const c=Math.floor(d);if(!(c>=0))throw new RangeError(`invalid digits: ${d}`);r=c}return a===null&&(o=new dr(r)),l},l.projection(e).digits(r).context(a)}function vn(e){return function(a){var r=new cn;for(var n in e)r[n]=e[n];return r.stream=a,r}}function cn(){}cn.prototype={constructor:cn,point:function(e,a){this.stream.point(e,a)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function yn(e,a,r){var n=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),n!=null&&e.clipExtent(null),St(r,e.stream(ja)),a(ja.result()),n!=null&&e.clipExtent(n),e}function to(e,a,r){return yn(e,function(n){var i=a[1][0]-a[0][0],o=a[1][1]-a[0][1],l=Math.min(i/(n[1][0]-n[0][0]),o/(n[1][1]-n[0][1])),d=+a[0][0]+(i-l*(n[1][0]+n[0][0]))/2,c=+a[0][1]+(o-l*(n[1][1]+n[0][1]))/2;e.scale(150*l).translate([d,c])},r)}function tl(e,a,r){return to(e,[[0,0],a],r)}function al(e,a,r){return yn(e,function(n){var i=+a,o=i/(n[1][0]-n[0][0]),l=(i-o*(n[1][0]+n[0][0]))/2,d=-o*n[0][1];e.scale(150*o).translate([l,d])},r)}function nl(e,a,r){return yn(e,function(n){var i=+a,o=i/(n[1][1]-n[0][1]),l=-o*n[0][0],d=(i-o*(n[1][1]+n[0][1]))/2;e.scale(150*o).translate([l,d])},r)}var cr=16,rl=Se(30*_e);function pr(e,a){return+a?il(e,a):ol(e)}function ol(e){return vn({point:function(a,r){a=e(a,r),this.stream.point(a[0],a[1])}})}function il(e,a){function r(n,i,o,l,d,c,f,s,x,u,h,p,b,y){var g=f-n,j=s-i,N=g*g+j*j;if(N>4*a&&b--){var w=l+u,C=d+h,T=c+p,A=jt(w*w+C*C+T*T),L=Wt(T/=A),z=we(we(T)-1)<be||we(o-x)<be?(o+x)/2:Vt(C,w),S=e(z,L),O=S[0],U=S[1],M=O-n,D=U-i,v=j*M-g*D;(v*v/N>a||we((g*M+j*D)/N-.5)>.3||l*u+d*h+c*p<rl)&&(r(n,i,o,l,d,c,O,U,z,w/=A,C/=A,T,b,y),y.point(O,U),r(O,U,z,w,C,T,f,s,x,u,h,p,b,y))}}return function(n){var i,o,l,d,c,f,s,x,u,h,p,b,y={point:g,lineStart:j,lineEnd:w,polygonStart:function(){n.polygonStart(),y.lineStart=C},polygonEnd:function(){n.polygonEnd(),y.lineStart=j}};function g(L,z){L=e(L,z),n.point(L[0],L[1])}function j(){x=NaN,y.point=N,n.lineStart()}function N(L,z){var S=At([L,z]),O=e(L,z);r(x,u,s,h,p,b,x=O[0],u=O[1],s=L,h=S[0],p=S[1],b=S[2],cr,n),n.point(x,u)}function w(){y.point=g,n.lineEnd()}function C(){j(),y.point=T,y.lineEnd=A}function T(L,z){N(i=L,z),o=x,l=u,d=h,c=p,f=b,y.point=N}function A(){r(x,u,s,h,p,b,o,l,i,d,c,f,cr,n),y.lineEnd=w,w()}return y}}var sl=vn({point:function(e,a){this.stream.point(e*_e,a*_e)}});function ll(e){return vn({point:function(a,r){var n=e(a,r);return this.stream.point(n[0],n[1])}})}function dl(e,a,r,n,i){function o(l,d){return l*=n,d*=i,[a+e*l,r-e*d]}return o.invert=function(l,d){return[(l-a)/e*n,(r-d)/e*i]},o}function ur(e,a,r,n,i,o){if(!o)return dl(e,a,r,n,i);var l=Se(o),d=Ee(o),c=l*e,f=d*e,s=l/e,x=d/e,u=(d*r-l*a)/e,h=(d*a+l*r)/e;function p(b,y){return b*=n,y*=i,[c*b-f*y+a,r-f*b-c*y]}return p.invert=function(b,y){return[n*(s*b-x*y+u),i*(h-x*b-s*y)]},p}function cl(e){return pl(function(){return e})()}function pl(e){var a,r=150,n=480,i=250,o=0,l=0,d=0,c=0,f=0,s,x=0,u=1,h=1,p=null,b=nr,y=null,g,j,N,w=en,C=.5,T,A,L,z,S;function O(v){return L(v[0]*_e,v[1]*_e)}function U(v){return v=L.invert(v[0],v[1]),v&&[v[0]*lt,v[1]*lt]}O.stream=function(v){return z&&S===v?z:z=sl(ll(s)(b(T(w(S=v)))))},O.preclip=function(v){return arguments.length?(b=v,p=void 0,D()):b},O.postclip=function(v){return arguments.length?(w=v,y=g=j=N=null,D()):w},O.clipAngle=function(v){return arguments.length?(b=+v?Bs(p=v*_e):(p=null,nr),D()):p*lt},O.clipExtent=function(v){return arguments.length?(w=v==null?(y=g=j=N=null,en):_s(y=+v[0][0],g=+v[0][1],j=+v[1][0],N=+v[1][1]),D()):y==null?null:[[y,g],[j,N]]},O.scale=function(v){return arguments.length?(r=+v,M()):r},O.translate=function(v){return arguments.length?(n=+v[0],i=+v[1],M()):[n,i]},O.center=function(v){return arguments.length?(o=v[0]%360*_e,l=v[1]%360*_e,M()):[o*lt,l*lt]},O.rotate=function(v){return arguments.length?(d=v[0]%360*_e,c=v[1]%360*_e,f=v.length>2?v[2]%360*_e:0,M()):[d*lt,c*lt,f*lt]},O.angle=function(v){return arguments.length?(x=v%360*_e,M()):x*lt},O.reflectX=function(v){return arguments.length?(u=v?-1:1,M()):u<0},O.reflectY=function(v){return arguments.length?(h=v?-1:1,M()):h<0},O.precision=function(v){return arguments.length?(T=pr(A,C=v*v),D()):jt(C)},O.fitExtent=function(v,q){return to(O,v,q)},O.fitSize=function(v,q){return tl(O,v,q)},O.fitWidth=function(v,q){return al(O,v,q)},O.fitHeight=function(v,q){return nl(O,v,q)};function M(){var v=ur(r,0,0,u,h,x).apply(null,a(o,l)),q=ur(r,n-v[0],i-v[1],u,h,x);return s=qs(d,c,f),A=Xa(a,q),L=Xa(s,A),T=pr(A,C),D()}function D(){return z=S=null,O}return function(){return a=e.apply(this,arguments),O.invert=a.invert&&U,M()}}function ao(e,a){var r=a*a,n=r*r;return[e*(.8707-.131979*r+n*(-.013791+n*(.003971*r-.001529*n))),a*(1.007226+r*(.015085+n*(-.044475+.028874*r-.005916*n)))]}ao.invert=function(e,a){var r=a,n=25,i;do{var o=r*r,l=o*o;r-=i=(r*(1.007226+o*(.015085+l*(-.044475+.028874*o-.005916*l)))-a)/(1.007226+o*(.015085*3+l*(-.044475*7+.028874*9*o-.005916*11*l)))}while(we(i)>be&&--n>0);return[e/(.8707+(o=r*r)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),r]};function ul(){return cl(ao).scale(175.295)}function ml(e){return e}function fl(e){if(e==null)return ml;var a,r,n=e.scale[0],i=e.scale[1],o=e.translate[0],l=e.translate[1];return function(d,c){c||(a=r=0);var f=2,s=d.length,x=new Array(s);for(x[0]=(a+=d[0])*n+o,x[1]=(r+=d[1])*i+l;f<s;)x[f]=d[f],++f;return x}}function xl(e,a){for(var r,n=e.length,i=n-a;i<--n;)r=e[i],e[i++]=e[n],e[n]=r}function hl(e,a){return typeof a=="string"&&(a=e.objects[a]),a.type==="GeometryCollection"?{type:"FeatureCollection",features:a.geometries.map(function(r){return mr(e,r)})}:mr(e,a)}function mr(e,a){var r=a.id,n=a.bbox,i=a.properties==null?{}:a.properties,o=gl(e,a);return r==null&&n==null?{type:"Feature",properties:i,geometry:o}:n==null?{type:"Feature",id:r,properties:i,geometry:o}:{type:"Feature",id:r,bbox:n,properties:i,geometry:o}}function gl(e,a){var r=fl(e.transform),n=e.arcs;function i(s,x){x.length&&x.pop();for(var u=n[s<0?~s:s],h=0,p=u.length;h<p;++h)x.push(r(u[h],h));s<0&&xl(x,p)}function o(s){return r(s)}function l(s){for(var x=[],u=0,h=s.length;u<h;++u)i(s[u],x);return x.length<2&&x.push(x[0]),x}function d(s){for(var x=l(s);x.length<4;)x.push(x[0]);return x}function c(s){return s.map(d)}function f(s){var x=s.type,u;switch(x){case"GeometryCollection":return{type:x,geometries:s.geometries.map(f)};case"Point":u=o(s.coordinates);break;case"MultiPoint":u=s.coordinates.map(o);break;case"LineString":u=l(s.arcs);break;case"MultiLineString":u=s.arcs.map(l);break;case"Polygon":u=c(s.arcs);break;case"MultiPolygon":u=s.arcs.map(c);break;default:return null}return{type:x,coordinates:u}}return f(a)}const no={US:[{k:["new york","nyc","brooklyn","manhattan"],ll:[-74,40.7]},{k:["san francisco","sf","palo alto","mountain view","menlo park","san jose","oakland"],ll:[-122.3,37.6]},{k:["los angeles","santa monica","irvine"],ll:[-118.2,34.1]},{k:["seattle","bellevue","redmond"],ll:[-122.3,47.6]},{k:["austin"],ll:[-97.7,30.3]},{k:["boston","cambridge"],ll:[-71.1,42.4]},{k:["chicago"],ll:[-87.6,41.9]},{k:["miami"],ll:[-80.2,25.8]},{k:["denver","boulder"],ll:[-105,39.7]},{k:["atlanta"],ll:[-84.4,33.7]},{k:["washington","arlington","dc"],ll:[-77,38.9]},{k:["dallas","houston"],ll:[-96.8,31.5]},{k:["salt lake","provo"],ll:[-111.9,40.8]},{k:["phoenix","tempe"],ll:[-112.1,33.4]}],CA:[{k:["toronto","waterloo"],ll:[-79.4,43.7]},{k:["montreal"],ll:[-73.6,45.5]},{k:["vancouver"],ll:[-123.1,49.3]},{k:["calgary"],ll:[-114.1,51]},{k:["ottawa"],ll:[-75.7,45.4]}],AU:[{k:["sydney"],ll:[151.2,-33.9]},{k:["melbourne"],ll:[145,-37.8]},{k:["brisbane"],ll:[153,-27.5]},{k:["perth"],ll:[115.9,-32]}],BR:[{k:["sao paulo"],ll:[-46.6,-23.5]},{k:["rio"],ll:[-43.2,-22.9]}],IN:[{k:["bengaluru","bangalore"],ll:[77.6,13]},{k:["mumbai"],ll:[72.9,19.1]},{k:["delhi","gurgaon","gurugram","noida"],ll:[77.2,28.6]},{k:["hyderabad"],ll:[78.5,17.4]},{k:["chennai"],ll:[80.3,13.1]}],CN:[{k:["beijing","pekin"],ll:[116.4,39.9]},{k:["shanghai"],ll:[121.5,31.2]},{k:["shenzhen","canton","guangzhou"],ll:[113.9,22.7]}],RU:[{k:["moscou","moscow"],ll:[37.6,55.8]},{k:["saint petersbourg","saint petersburg"],ll:[30.3,59.9]}]},bl=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim();function vl(e,a,r){const n=no[e];if(!n||!n.length)return-1;const i=bl(a||"");if(i){for(let o=0;o<n.length;o++)if(n[o].k.some(l=>i.includes(l)))return o}return Math.floor(r*n.length)%n.length}let da=null;function yl(){return da||(da=(async()=>{var e;try{const a=await fetch("/world/countries-110m.json");if(!a.ok)return null;const r=await a.json(),n=(e=r==null?void 0:r.objects)==null?void 0:e.countries;if(!n)return null;const i=hl(r,n),o=ul().fitExtent([[8,8],[992,492]],{type:"Sphere"}),l=el(o),d=(i.features||[]).filter(s=>{var x;return(((x=s.properties)==null?void 0:x.name)||"")!=="Antarctica"}).map(s=>{var h;const x=((h=s.properties)==null?void 0:h.name)||"",u=l(s)||"";return u?{i2:Go(x)||null,n:x,d:u}:null}).filter(s=>!!s);if(!d.length)return null;const c={};for(const[s,x]of Object.entries(Ko)){const u=o(x);u&&(c[s]={x:u[0],y:u[1]})}const f={};for(const[s,x]of Object.entries(no)){const u=x.map(h=>o(h.ll)).filter(h=>!!h).map(([h,p])=>({x:h,y:p}));u.length&&(f[s]=u)}return{key:"monde",viewBox:"40 48 920 360",fr:"Monde",en:"World",countries:d,anchors:c,metros:f}}catch{return null}})(),da)}function wl(e){const[a,r]=m.useState(null);return m.useEffect(()=>{if(!e||a)return;let n=!1;return yl().then(i=>{!n&&i&&r(i)}),()=>{n=!0}},[e,a]),a}const kl="8 40 984 210",jl={"northam:US":{fx:.64,fy:.68,sx:.44,sy:.28},"northam:CA":{fx:.58,fy:.86,sx:.34,sy:.1},"oceania:AU":{fx:.72,fy:.62,sx:.34,sy:.3},"europe:RU":{fx:.18,fy:.62,sx:.14,sy:.3}},fr=["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"];function xr(e){let a=2166136261;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function Nl(e,a){const[r,n]=m.useState(1);return m.useEffect(()=>{let i=!0,o=0;const l=()=>{var f;if(!i)return;const c=(f=e.current)==null?void 0:f.getScreenCTM();c&&c.a>0?n(c.a):o=requestAnimationFrame(l)};l();const d=new ResizeObserver(()=>l());return e.current&&d.observe(e.current),window.addEventListener("resize",l),()=>{i=!1,cancelAnimationFrame(o),d.disconnect(),window.removeEventListener("resize",l)}},[e,a]),r}function hr({msgs:e}){const[a,r]=m.useState(0);m.useEffect(()=>{const i=window.setInterval(()=>r(o=>o+1),2400);return()=>window.clearInterval(i)},[]);const n=[[46,34],[52,41],[41,46],[57,30],[49,52],[36,38],[61,45],[44,27]];return t.jsxs("div",{className:"mapskel","aria-hidden":"true",children:[n.map(([i,o],l)=>t.jsx("i",{style:{left:i+"%",top:o+"%","--d":l*.18+"s"}},l)),t.jsx("span",{className:"mskm",children:e[a%e.length]})]})}function Sl(){const{st:e,dispatch:a,scoped:r,pipe:n,markRow:i,markedId:o,byId:l,lang:d,t:c,data:f,dossiers:s,source:x}=_(),u=f.loading&&!s.length,h=m.useRef(null),p=m.useRef(null),b=wl(e.continent==="monde"),y=e.continent==="monde"?b:fn.find(v=>v.key===e.continent)||null,g=Nl(h,e.continent+":"+e.mapFolded+":"+!!y),[j,N]=m.useState(new Map),[w,C]=m.useState(null);m.useEffect(()=>{const v=h.current;if(!v)return;const q=new Map;v.querySelectorAll("path[data-i2]").forEach(V=>{const B=V.dataset.i2;if(B)try{const $=V.getBBox();$.width>0&&q.set(B,{x:$.x,y:$.y,w:$.width,h:$.height})}catch{}}),N(q)},[e.continent,g,y]);const T=m.useMemo(()=>r.filter(v=>v.cc),[r]),A=m.useMemo(()=>{const v=new Map;return T.forEach(q=>v.set(q.cc,(v.get(q.cc)||0)+1)),v},[T]),L=e.continent==="monde"&&b?b.anchors:null,z=e.continent==="monde"&&b?b.metros:null,S=m.useMemo(()=>T.map(v=>{const q=xr(v.name||v.id||""),V=xr((v.id||v.name||"")+"·y");if(L&&v.cc){const te=z?z[v.cc]:void 0;if(te&&te.length){const ae=vl(v.cc,v.city,q);if(ae>=0&&te[ae])return{d:v,x:te[ae].x+(q-.5)*5,y:te[ae].y+(V-.5)*5}}const le=L[v.cc];if(le)return{d:v,x:le.x+(q-.5)*10,y:le.y+(V-.5)*10}}const B=v.cc?j.get(v.cc):void 0;if(!B)return null;const $=jl[`${e.continent}:${v.cc||""}`];if($)return{d:v,x:B.x+B.w*($.fx+(q-.5)*$.sx),y:B.y+B.h*($.fy+(V-.5)*$.sy)};const K=(q-.5)*Math.min(B.w*.55,60),X=(V-.5)*Math.min(B.h*.55,60);return{d:v,x:B.x+B.w/2+K,y:B.y+B.h/2+X}}).filter(v=>!!v),[T,j,L,z,e.continent]),O=v=>g>0?v/g:v,U=m.useMemo(()=>n?[0,1,2,3,4,5].map(v=>({c:fr[v],fr:c.plabels[v].toUpperCase(),en:c.plabels[v].toUpperCase(),n:r.filter(q=>q.kind==="target"&&ze(q)===v).length})).filter(v=>v.n>0):Mn.map((v,q)=>({...v,n:r.filter(V=>Rn(V)===q).length})),[r,n,c.plabels]),M=o?l.get(o):null,D=M?S.find(v=>v.d.id===M.id):null;return y?t.jsxs("div",{className:"mapzone"+(u?" waiting":""),ref:p,children:[u&&t.jsx(hr,{msgs:c.loadMsgs}),t.jsxs("svg",{ref:h,viewBox:x==="ops"&&e.continent==="monde"?kl:y.viewBox,preserveAspectRatio:x==="ops"&&e.continent==="monde"?"xMidYMin slice":"xMidYMid meet",role:"img","aria-label":d==="fr"?y.fr:y.en,onMouseLeave:()=>{C(null),i(null)},children:[t.jsx("g",{children:y.countries.map((v,q)=>t.jsx("g",{className:"ct"+(v.i2&&A.get(v.i2)?"":" empty"),children:t.jsx("path",{d:v.d,"data-i2":v.i2||void 0})},q))}),t.jsx("g",{children:S.map(v=>{const q=Mn[Rn(v.d)],V=!!qe(v.d),B=v.d.kind==="target",$=n&&B?fr[ze(v.d)]:q.c,K=!n&&Ie(v.d);return t.jsxs("g",{className:"co"+(K?" done":""),onMouseEnter:()=>{var le,ae;const X=(le=p.current)==null?void 0:le.getBoundingClientRect(),te=(ae=h.current)==null?void 0:ae.createSVGPoint();if(te&&h.current&&X){te.x=v.x,te.y=v.y;const ve=te.matrixTransform(h.current.getScreenCTM());C({x:ve.x-X.left,y:ve.y-X.top,label:v.d.name+" · "+(Mt(v.d.cc,d)||v.d.countryLabel||"")})}i(v.d.id)},onMouseLeave:()=>{C(null),i(null)},onClick:()=>{var le;if(x==="ops"){window.dispatchEvent(new CustomEvent("ppmap:reveal")),a({type:"focus",id:v.d.id}),(v.d.noCo||["media","nominations","recrutements"].includes(v.d.engine||""))&&(v.d.url||v.d.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:v.d.url||"",text:[v.d.headline,v.d.tagline].filter(Boolean).join(`
`)}})):v.d.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:v.d.name,url:v.d.url||"",website:v.d.website||"",domain:v.d.domain||""}}));return}const X=(le=h.current)==null?void 0:le.createSVGPoint();let te=null;if(X&&h.current){X.x=v.x,X.y=v.y;const ae=X.matrixTransform(h.current.getScreenCTM());te={x:ae.x,y:ae.y}}a({type:"popup",id:v.d.id,anchor:te})},children:[t.jsx("circle",{className:"h",cx:v.x,cy:v.y,r:O(Math.max(11,q.px+7))}),t.jsx("circle",{className:"v",cx:v.x,cy:v.y,r:O(q.px),fill:$,stroke:V?"#DC2626":"#ffffff",strokeWidth:O(V?2.2:1.3)})]},v.d.id||v.d.name)})}),D&&t.jsx("circle",{className:"ring on",cx:D.x,cy:D.y,r:O(13),fill:"none",stroke:"#0F172A",strokeWidth:O(2)})]}),t.jsx("div",{className:"hov"+(w?" on":""),style:w?{left:w.x,top:w.y}:void 0,children:w==null?void 0:w.label}),t.jsx("div",{className:"legend",children:U.map((v,q)=>t.jsxs("span",{children:[t.jsx("i",{style:{"--c":v.c}}),d==="fr"?v.fr:v.en," ",t.jsx("b",{children:v.n})]},q))}),r.some(v=>!v.cc)&&t.jsx("div",{className:"legend",style:{left:"auto",right:10},children:t.jsxs("span",{children:["🌐 ",c.notLocated," ",t.jsx("b",{children:r.filter(v=>!v.cc).length})]})})]}):t.jsx("div",{className:"mapzone"+(u?" waiting":""),ref:p,children:t.jsx(hr,{msgs:c.loadMsgs})})}function El(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!r)return e;const i=(a==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||r[2],o=Number(r[3]);return a==="en"?`${i} ${o}, ${r[1]}`:`${o} ${i} ${r[1]}`}function ro({compact:e=!1}){const{st:a,dispatch:r,dossiers:n,t:i,pipe:o,contName:l,lang:d}=_(),c=a.filters,[f,s]=m.useState(!1),[x,u]=m.useState(!1),h=m.useRef(null),p=m.useRef(null),b=m.useMemo(()=>a.continent==="monde"?n:n.filter(M=>M.continent===a.continent),[n,a.continent]),y=M=>b.filter(D=>M!=="country"&&c.country.length&&!c.country.includes(D.cc||"")?!1:ga(D,c,o,M==="country"?void 0:M)),g=m.useMemo(()=>{const M=y("win"),D=v=>M.filter(q=>(q.date?Math.max(0,Math.floor((Date.now()-Date.parse(q.date))/864e5)):9999)<=v).length;return[D(0),D(7),D(30),M.length]},[b,c,o]),j=m.useMemo(()=>c.day?y("win").filter(M=>(M.date||"").slice(0,10)===c.day).length:0,[b,c,o]),N=(c.signalOnly?1:0)+c.sector.length+c.country.length+c.engine.length+c.stage.length+c.angle.length+c.memoLevel.length,w=N+(c.acquirer.trim()?1:0)+(c.day||c.win!=="all"?1:0)+(c.search.trim()?1:0);m.useEffect(()=>{a.openFacet&&s(!1)},[a.openFacet]),m.useEffect(()=>{if(!f&&!x)return;const M=v=>{var V,B;const q=v.target;f&&!((V=h.current)!=null&&V.contains(q))&&s(!1),x&&!((B=p.current)!=null&&B.contains(q))&&u(!1)},D=v=>{v.key==="Escape"&&(s(!1),u(!1))};return document.addEventListener("mousedown",M),document.addEventListener("keydown",D),()=>{document.removeEventListener("mousedown",M),document.removeEventListener("keydown",D)}},[f,x]);const C=(M,D,v,q="fbtn")=>t.jsxs("button",{type:"button",className:q,"aria-expanded":a.openFacet===M,onClick:()=>r({type:"openFacet",facet:M}),children:[t.jsx("span",{className:"fl",children:D}),v>0&&t.jsx("span",{className:"n",children:v}),t.jsx("span",{className:"cv",children:"▾"})]},M),T=["1","7","30","all"],A=Math.max(0,T.indexOf(c.win||"all")),L=c.day?t.jsxs("div",{className:"seg",children:[t.jsxs("button",{type:"button","aria-pressed":!0,children:[t.jsx("span",{className:"sl",children:i.fDay(El(c.day,d))}),t.jsx("b",{children:j})]}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{day:"",win:"all"}}),children:i.fDayOff})]}):e?t.jsxs("div",{className:"winpick",ref:p,children:[t.jsxs("button",{type:"button",className:"winpick-btn","aria-expanded":x,"aria-haspopup":"listbox",onClick:()=>u(M=>!M),children:[t.jsx("span",{className:"winpick-k",children:i.winMenu}),t.jsx("span",{className:"winpick-v",children:i.datesShort[A]}),t.jsx("b",{children:g[A]}),t.jsx("i",{children:x?"▴":"▾"})]}),x&&t.jsx("div",{className:"winpick-pop",role:"listbox",children:T.map((M,D)=>t.jsxs("button",{type:"button",role:"option","aria-selected":c.win===M,onClick:()=>{r({type:"filters",patch:{win:M}}),u(!1)},children:[i.datesShort[D],t.jsx("span",{className:"n",children:g[D]})]},M))})]}):t.jsx("div",{className:"seg",children:T.map((M,D)=>t.jsxs("button",{type:"button","aria-pressed":c.win===M,onClick:()=>r({type:"filters",patch:{win:M}}),children:[t.jsx("span",{className:"sl",children:i.dates[D]}),t.jsx("b",{children:g[D]})]},M))}),z=t.jsxs("span",{className:"fsrch",children:["🔍",t.jsx("input",{placeholder:i.identSearch,value:c.search,onChange:M=>r({type:"filters",patch:{search:M.target.value}})})]}),S=t.jsxs("div",{className:"facets",children:[t.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":a.openFacet==="sig",onClick:()=>r({type:"openFacet",facet:"sig"}),children:[t.jsx("span",{className:"fl",children:i.fSignal}),c.signalOnly&&t.jsx("span",{className:"n",children:c.signalEngines.length||"✓"}),t.jsx("span",{className:"cv",children:"▾"})]}),c.sector.length===1?t.jsxs("button",{type:"button",className:"fbtn on","aria-expanded":a.openFacet==="sec",onClick:()=>r({type:"openFacet",facet:"sec"}),title:c.sector[0],children:[t.jsx("span",{className:"fl",children:i.fSector}),t.jsx("span",{className:"n",style:{maxWidth:"16ch",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c.sector[0]}),t.jsx("span",{className:"cv",children:"▾"})]}):C("sec",i.fSector,c.sector.length),C("pay",i.fCountry,c.country.length),C("det",i.fEngine,c.engine.length),C("sta",i.fStage,c.stage.length),o&&C("ang","Angle",c.angle.length),o&&C("mem","Mémo",c.memoLevel.length)]}),O=(M=!1)=>t.jsxs("div",{className:"frow2",children:[w>0&&t.jsxs("button",{type:"button",className:"resetbtn on",title:i.clearTitle(b.length,l),onClick:()=>r({type:"reset"}),children:[t.jsx("span",{className:"rot",children:"↺"}),t.jsx("span",{children:i.clear(w)})]}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:i.alertBtn}),M&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>r({type:"mapFold",folded:!1}),children:i.showMap})]}),U=t.jsxs("div",{className:"fmenu",ref:h,children:[t.jsxs("button",{type:"button",className:"fbtn fmenu-btn"+(N?" on":""),"aria-expanded":f,"aria-haspopup":"true",onClick:()=>{s(M=>!M),a.openFacet&&r({type:"openFacet",facet:null})},children:[t.jsx("span",{className:"fl",children:i.fMenu}),N>0&&t.jsx("span",{className:"n",children:N}),t.jsx("span",{className:"cv",children:f?"▴":"▾"})]}),f&&t.jsx("div",{className:"fmenu-pop",role:"menu",children:S})]});return e?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"fstrip"+(c.day?" noday":""),children:[t.jsx("div",{className:"fstrip-a",children:L}),t.jsxs("div",{className:"fstrip-b",children:[z,U,O(!1)]})]}),a.openFacet&&t.jsx(gr,{poolFor:y})]}):t.jsxs(t.Fragment,{children:[t.jsxs("aside",{className:"fbar",children:[L,z,S,t.jsx("span",{className:"fgrow"}),O()]}),a.openFacet&&t.jsx(gr,{poolFor:y})]})}function gr({poolFor:e}){const{st:a,dispatch:r,t:n,lang:i}=_(),o=a.filters,l=a.openFacet,{title:d,cols:c,options:f}=m.useMemo(()=>{if(l==="sig"){const p=e("signal").filter(g=>qe(g)),b=new Map;p.forEach(g=>{const j=g.engine||"";b.set(j,(b.get(j)||0)+1)});const y=[{v:"*",label:n.fpSigAll,n:p.length,html:!0,on:o.signalOnly&&!o.signalEngines.length},...Va([...b.keys()],i).map(g=>({v:g,label:vt(g)+" "+Ue(g,i),n:b.get(g)||0,html:!1,on:o.signalOnly&&o.signalEngines.includes(g)}))];return{title:n.fpSigTitle,cols:2,options:y}}if(l==="sec"){const p=e("sector"),b=new Map;return p.forEach(y=>{y.sector&&b.set(y.sector,(b.get(y.sector)||0)+1)}),{title:n.fSector.toUpperCase(),cols:3,options:[...b.entries()].sort((y,g)=>g[1]-y[1]).map(([y,g])=>({v:y,label:y,n:g,html:!1,on:o.sector.includes(y)}))}}if(l==="pay"){const p=e("country"),b=new Map;return p.forEach(y=>{y.cc&&b.set(y.cc,(b.get(y.cc)||0)+1)}),{title:n.fCountry.toUpperCase(),cols:3,options:[...b.entries()].sort((y,g)=>g[1]-y[1]).map(([y,g])=>({v:y,label:Mt(y,i)||y,n:g,html:!1,on:o.country.includes(y)}))}}if(l==="det"){const p=e("engine"),b=new Map;return p.forEach(y=>{y.engine&&b.set(y.engine,(b.get(y.engine)||0)+1)}),{title:n.fEngine.toUpperCase(),cols:2,options:Va([...b.keys()],i).map(y=>({v:y,label:vt(y)+" "+Ue(y,i)+' <span style="color:var(--dim);font-size:10px">· '+Qo(Jo(y),i)+"</span>",n:b.get(y)||0,html:!0,on:o.engine.includes(y)}))}}if(l==="ang"){const p=e("angle"),b=new Map;return p.forEach(y=>{y.angle&&b.set(y.angle,(b.get(y.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...b.entries()].sort((y,g)=>g[1]-y[1]).map(([y,g])=>({v:y,label:y.replace(/[_-]+/g," "),n:g,html:!1,on:o.angle.includes(y)}))}}if(l==="mem"){const p=e("memoLevel"),b=new Map;p.forEach(g=>{if(g.kind==="target"){const j=un(g);b.set(j,(b.get(j)||0)+1)}});const y=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(g=>({v:String(g),label:y[g],n:b.get(g)||0,html:!1,on:o.memoLevel.includes(g)}))}}const u=e("stage"),h=new Map;return u.forEach(p=>{p.stage&&h.set(p.stage,(h.get(p.stage)||0)+1)}),{title:n.fStage.toUpperCase(),cols:2,options:[...h.entries()].sort((p,b)=>b[1]-p[1]).map(([p,b])=>({v:p,label:p,n:b,html:!1,on:o.stage.includes(p)}))}},[l,a,i]),s=u=>{if(l==="sig"){if(u==="*")r({type:"filters",patch:{signalOnly:!(o.signalOnly&&!o.signalEngines.length),signalEngines:[]}});else{const p=o.signalEngines.includes(u)?o.signalEngines.filter(b=>b!==u):[...o.signalEngines,u];r({type:"filters",patch:{signalOnly:!0,signalEngines:p}})}return}if(l==="mem"){r({type:"toggleMemoLevel",value:Number(u)});return}r({type:"toggleFacet",facet:l==="sec"?"sector":l==="pay"?"country":l==="det"?"engine":l==="ang"?"angle":"stage",value:u})},x=()=>{r(l==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:l==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:l==="sec"?"sector":l==="pay"?"country":l==="det"?"engine":l==="ang"?"angle":"stage"})};return t.jsxs("div",{className:"fpanel on",children:[t.jsxs("div",{className:"ph",children:[t.jsx("b",{children:d}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",onClick:x,children:n.fpNone}),t.jsx("button",{type:"button",onClick:()=>r({type:"openFacet",facet:null}),children:n.fpClose})]}),t.jsx("div",{className:"fcols"+(c===2?" two":""),children:f.map(u=>t.jsxs("button",{type:"button",className:"opt","aria-pressed":u.on,onClick:()=>s(u.v),children:[t.jsx("span",{className:"bx"}),u.html?t.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:u.label}}):t.jsx("span",{className:"l",children:u.label}),t.jsx("span",{className:"n",children:u.n})]},u.v))}),t.jsxs("div",{className:"pf",children:[t.jsx("span",{className:"t",children:n.alertReady}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:n.alertCreate})]})]})}function oo({mapToggle:e=!0,variant:a="tabs"}){const{dossiers:r,st:n,dispatch:i,pipe:o,lang:l,t:d}=_(),c=m.useMemo(()=>{const h={};return r.forEach(p=>{ga(p,n.filters,o)&&(h.monde=(h.monde||0)+1,p.continent&&(h[p.continent]=(h[p.continent]||0)+1))}),h},[r,n.filters,o]),[f,s]=m.useState(!1),x=m.useRef(null);m.useEffect(()=>{if(!f)return;const h=b=>{var y;(y=x.current)!=null&&y.contains(b.target)||s(!1)},p=b=>{b.key==="Escape"&&s(!1)};return document.addEventListener("mousedown",h),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",h),document.removeEventListener("keydown",p)}},[f]);const u=h=>{const p=fn.find(b=>b.key===h);return h==="monde"?d.contWorld:l==="fr"?p.fr:p.en};return a==="compact"?t.jsxs("div",{className:"contpick",ref:x,children:[t.jsxs("button",{type:"button",className:"contpick-btn","aria-expanded":f,"aria-haspopup":"listbox",onClick:()=>s(h=>!h),children:[u(n.continent),t.jsx("span",{className:"n",children:c[n.continent]||0}),t.jsx("i",{children:f?"▴":"▾"})]}),f&&t.jsx("div",{className:"contpick-pop",role:"listbox",children:Fn.map(h=>t.jsxs("button",{type:"button",role:"option","aria-selected":n.continent===h,onClick:()=>{i({type:"continent",key:h}),s(!1)},children:[u(h),t.jsx("span",{className:"n",children:c[h]||0})]},h))}),e&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>i({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?d.showMap:d.hideMap})]}):t.jsxs("div",{className:"conts",children:[Fn.map(h=>t.jsxs("button",{type:"button",className:"cbtn","aria-selected":n.continent===h,onClick:()=>i({type:"continent",key:h}),children:[u(h),t.jsx("span",{className:"n",children:c[h]||0})]},h)),e&&t.jsx("span",{className:"side",children:t.jsx("button",{type:"button",onClick:()=>i({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?d.showMap:d.hideMap})})]})}function io(e){return String(e||"").split(`
`).map(a=>a.replace(/^#{1,6}\s*/,"").replace(/[*_`>]/g,"").trimEnd()).filter(a=>a.trim().length>0)}function Cl(e){var i;const a=[],r=new Set,n=o=>{const l=(o||"").trim();!l||r.has(l.toLowerCase())||(r.add(l.toLowerCase()),a.push(l))};return((e==null?void 0:e.companies_cited)||[]).forEach(o=>n(o==null?void 0:o.name)),(((i=e==null?void 0:e.prospective)==null?void 0:i.companies_to_evaluate)||[]).forEach(o=>n(o==null?void 0:o.name)),a}function br({icon:e,title:a,hint:r,rows:n,addLabel:i,onEvaluate:o,onAddAll:l}){const{t:d}=_();return n.length?t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:[e," ",a]}),t.jsx("span",{className:"n",children:n.length}),l&&t.jsx("button",{type:"button",className:"rsblk-all",onClick:()=>l(n.map(c=>c.name)),children:i})]}),t.jsx("p",{className:"rsblk-hint",children:r}),t.jsx("div",{className:"rsblk-rows",children:n.map(c=>t.jsxs("div",{className:"rsrow",children:[t.jsxs("div",{className:"rsrow-t",children:[t.jsxs("div",{className:"rsrow-h",children:[t.jsx("span",{className:"nm",children:c.name}),c.chips.map(f=>t.jsx("span",{className:"ch",children:f},f))]}),c.line1&&t.jsx("p",{className:"w",children:c.line1}),c.line2&&t.jsx("p",{className:"r",children:c.line2})]}),t.jsx("button",{type:"button",className:"rsrow-go",onClick:()=>o(c.name),children:d.rsEvalOne})]},c.name))})]}):null}function so({card:e,onEvaluate:a,onAddAll:r}){var l;const{t:n}=_(),i=((e==null?void 0:e.companies_cited)||[]).filter(d=>d&&(d.name||"").trim()).map(d=>({name:(d.name||"").trim(),line1:(d.what||"").trim(),line2:(d.role||"").trim(),chips:[(d.country||"").trim()].filter(Boolean)})),o=(((l=e==null?void 0:e.prospective)==null?void 0:l.companies_to_evaluate)||[]).filter(d=>d&&(d.name||"").trim()).map(d=>({name:(d.name||"").trim(),line1:(d.why||"").trim(),chips:[(d.country||"").trim(),(d.stage||"").trim()].filter(Boolean)}));return!i.length&&!o.length?t.jsx("p",{className:"rsblk-none",children:n.rsNoCompanies}):t.jsxs(t.Fragment,{children:[t.jsx(br,{icon:"🏷",title:n.rsCited,hint:n.rsCitedHint,rows:i,addLabel:n.rsAddAll(i.length),onEvaluate:a,onAddAll:r}),t.jsx(br,{icon:"🎯",title:n.rsMatch,hint:n.rsMatchHint,rows:o,addLabel:n.rsAddAll(o.length),onEvaluate:a,onAddAll:r})]})}function zl({card:e,onEvaluate:a,onAddAll:r}){var d,c,f;const{t:n}=_(),i=[e.industry,...e.market_tags||[],e.author].map(s=>(s||"").trim()).filter(Boolean),o=(((d=e.prospective)==null?void 0:d.criteria)||[]).filter(Boolean),l=(e.sources||[]).filter(s=>s&&s.url);return t.jsxs("div",{className:"rsdet",children:[e.market&&t.jsx("p",{className:"rsmk",children:e.market}),i.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:n.rsTags}),i.map(s=>t.jsx("span",{children:s},s))]}),t.jsxs("div",{className:"rsbody",children:[e.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${e.mindmap_png_b64}`,alt:n.rsMindmap}),t.jsx("figcaption",{children:n.rsMindmap})]}),t.jsx("div",{className:"rssum",children:io(e.summary_md||"").map((s,x)=>t.jsx("p",{children:s},x))})]}),t.jsx(so,{card:e,onEvaluate:a,onAddAll:r}),(((c=e.prospective)==null?void 0:c.conclusion)||o.length>0)&&t.jsxs("section",{className:"rsblk rspro",children:[t.jsx("div",{className:"rsblk-h",children:t.jsxs("b",{children:["🔮 ",n.rsConclusion]})}),((f=e.prospective)==null?void 0:f.conclusion)&&t.jsx("p",{className:"rspro-c",children:e.prospective.conclusion}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"rsblk-hint",children:n.rsCriteria}),t.jsx("ul",{className:"rspro-l",children:o.map(s=>t.jsx("li",{children:s},s))})]})]}),l.length>0&&t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:["🔗 ",n.rsSources]}),t.jsx("span",{className:"n",children:l.length})]}),t.jsx("div",{className:"rssrc",children:l.map(s=>t.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",children:s.label||s.url},s.url))})]})]})}function Al(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{day:"2-digit",month:"short"})}function Tl({onClose:e,onEvaluate:a,onAddAll:r,bump:n,cbToken:i}){const{t:o,email:l}=_(),d=i,[c,f]=m.useState(null),[s,x]=m.useState(null),[u,h]=m.useState(null),[p,b]=m.useState(!1);m.useEffect(()=>{let g=!0;return(async()=>{const j=await Cr({email:l,cbToken:d});g&&f(j)})(),()=>{g=!1}},[l,d,n]);const y=g=>{x(g),h(null),b(!0),(async()=>{const j=await Xo(g.id);h(j),b(!1)})()};return t.jsxs("div",{className:"rsarch",children:[t.jsxs("div",{className:"rsarch-h",children:[s?t.jsx("button",{type:"button",className:"rsarch-back",onClick:()=>{x(null),h(null)},children:o.rsArchBack}):t.jsxs("b",{children:["🗂 ",o.rsArchTitle]}),s&&t.jsx("span",{className:"ti",children:s.title}),!s&&c&&t.jsx("span",{className:"n",children:c.length}),t.jsx("button",{type:"button",className:"rsx",title:o.rsClose,onClick:e,children:"×"})]}),!s&&t.jsxs("div",{className:"rsarch-list",children:[c===null&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchLoading}),c!==null&&c.length===0&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchEmpty}),(c||[]).map(g=>t.jsxs("button",{type:"button",className:"rsarch-row",onClick:()=>y(g),children:[t.jsx("span",{className:"ti",children:g.title}),t.jsxs("span",{className:"me",children:[Al(g.created_at),g.industry?` · ${g.industry}`:"",g.author?` · ${g.author}`:""]}),t.jsx("span",{className:"cn",children:o.rsRowCounts(g.cited_n||0,g.evaluate_n||0)}),t.jsx("span",{className:"st"+(g.published?" on":""),children:g.published?o.rsPub:o.rsPriv})]},g.id))]}),s&&t.jsxs("div",{className:"rsarch-one",children:[t.jsxs("div",{className:"rsarch-sub",children:[s.source_url&&t.jsx("a",{href:s.source_url,target:"_blank",rel:"noopener noreferrer",children:o.rsSource}),s.published&&s.page_url&&t.jsx("a",{href:s.page_url,target:"_blank",rel:"noopener noreferrer",children:o.rsLink}),t.jsx("span",{className:"st"+(s.published?" on":""),children:s.published?o.rsPub:o.rsPriv})]}),p&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchLoading}),!p&&!u&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchGone}),!p&&u&&t.jsx(zl,{card:u,onEvaluate:a,onAddAll:r})]})]})}const ma=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function Ut(e){return/^https?:\/\//i.test((e||"").trim())}function et(e){const a=(e||"").trim();return a?Ut(a)?a:ma.test(a)&&!/\s/.test(a)?"https://"+a.replace(/^\/+/,""):"":""}function Ll(){return t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]})}function ql(){const{t:e,mode:a,token:r,email:n,askEvaluate:i,sessTally:o,dispatch:l,evalBusy:d,evalCards:c,caps:f,data:s,canWrite:x,source:u,dossiers:h,doAnalyse:p,liveMemos:b,pipe:y}=_(),g=a==="client",j=m.useMemo(()=>r||(u!=="default"?Zo():""),[r,u]),[N,w]=m.useState(""),[C,T]=m.useState(!1),[A,L]=m.useState(""),[z,S]=m.useState(""),[O,U]=m.useState(""),[M,D]=m.useState(!1),[v,q]=m.useState(!1),[V,B]=m.useState(""),[$,K]=m.useState(!1),[X,te]=m.useState(""),[le,ae]=m.useState([]),ve=m.useRef(!1),[W,ie]=m.useState(!1),[fe,Ne]=m.useState(!1),[ge,Z]=m.useState(!1),re=m.useRef(!1),[Q,G]=m.useState(""),[ke,ce]=m.useState(""),[pe,oe]=m.useState(!1),[ne,Te]=m.useState(!1),[Le,Ae]=m.useState(0),[He,Ve]=m.useState(""),[xe,pt]=m.useState(null),[Fe,ot]=m.useState(null),[Xe,E]=m.useState(!1),[I,Y]=m.useState(null),[ue,Ce]=m.useState(0),me=m.useRef(!1),ye=N.trim()?ma.test(N.trim())?e.evalUrl:e.evalName:e.evalWaiting,je=m.useMemo(()=>V.split(`
`).map(P=>P.trim()).filter(Boolean).slice(0,15),[V]);m.useEffect(()=>{if(typeof window>"u")return;const P=new URLSearchParams(window.location.search),k=(P.get("rs")||"").trim(),F=(P.get("rstext")||"").trim();k&&/^https?:\/\//i.test(k)&&G(k),F&&ce(F),(k&&/^https?:\/\//i.test(k)||F)&&ie(!0)},[]),m.useEffect(()=>{const P=k=>{const F=k.detail||{},R=String(F.url||"").trim(),H=String(F.text||"").trim();R&&/^https?:\/\//i.test(R)&&G(R),H&&ce(H),(R&&/^https?:\/\//i.test(R)||H)&&(ie(!0),w(""),L(""),oe(!0),window.setTimeout(()=>oe(!1),900))};return window.addEventListener("ppmap:research",P),()=>window.removeEventListener("ppmap:research",P)},[]),m.useEffect(()=>{const P=k=>{const F=k.detail||{},R=String(F.name||"").trim();if(!R)return;ie(!1),w(R),L(R);const H=et(String(F.website||F.domain||""));S(H),U(et(String(F.url||""))),D(!H),T(!0),window.setTimeout(()=>T(!1),900)};return window.addEventListener("ppmap:prefill",P),()=>window.removeEventListener("ppmap:prefill",P)},[]),m.useEffect(()=>{const P=(A||"").trim();if(!P||W||z){(z||!P||W)&&D(!1);return}const k=h.find(H=>Re(H.name)===Re(P)),F=et((k==null?void 0:k.website)||"")||et((k==null?void 0:k.domain)||"");if(F){S(F),D(!1);return}let R=!0;return D(!0),zr(P).then(H=>{var ee,se;if(!R)return;const J=et(H.website||"")||et(((se=(ee=H.candidates)==null?void 0:ee[0])==null?void 0:se.url)||"");J&&S(J)}).catch(()=>{}).finally(()=>{R&&D(!1)}),()=>{R=!1}},[A,W,z,h]),m.useEffect(()=>{const P=k=>{var R;const F=String(((R=k.detail)==null?void 0:R.url)||"").trim();Ut(F)&&window.open(F,"_blank","noopener,noreferrer")};return window.addEventListener("ppmap:view",P),()=>window.removeEventListener("ppmap:view",P)},[]),m.useEffect(()=>{if(re.current===W)return;re.current=W,Z(!0);const P=window.setTimeout(()=>Z(!1),560);return()=>window.clearTimeout(P)},[W]),m.useEffect(()=>{if(typeof window>"u")return;const P=document.querySelector(".atl2 .eval-stick")||document.querySelector(".atl2 .demand"),k=document.querySelector(".atl2.ops, .atl2.cibles");if(!P||!k)return;const F=()=>k.style.setProperty("--demand-h",`${P.offsetHeight}px`);F();const R=new ResizeObserver(F);return R.observe(P),()=>R.disconnect()},[u,C,pe,v,W,ge,M]),m.useEffect(()=>{if(!x&&!j){Y(null);return}let P=!0;return(async()=>{const k=await Cr({email:n,cbToken:j});P&&Y(k.length)})(),()=>{P=!1}},[x,j,n,ue]);const Ze=le.length?le:c,Me=s.credits,it=m.useCallback(P=>{const k=P.map(F=>(F||"").trim()).filter(Boolean);k.length&&(B(F=>{const R=F.split(`
`).map(ee=>ee.trim()).filter(Boolean),H=new Set(R.map(ee=>ee.toLowerCase())),J=k.filter(ee=>!H.has(ee.toLowerCase()));return[...R,...J].slice(0,15).join(`
`)}),q(!0))},[]);m.useEffect(()=>{if(!ne)return;Ae(0);const P=window.setInterval(()=>Ae(k=>k+1),1e3);return()=>window.clearInterval(P)},[ne]);const st=m.useMemo(()=>{const P=N.trim().toLowerCase();return!P||!y?null:h.find(k=>Re(k.name)===P&&ze(k)===1)||null},[N,h,y]),mt=()=>{const P=N.trim();if(P){if(st){p(st);return}i(null,P),g&&w("")}},We=async()=>{if(!g){i(null,je[0]||"");return}if(!je.length||$)return;K(!0),ve.current=!1;const P=[];for(let k=0;k<je.length&&!ve.current;k++){te(e.evaluating(k+1,je.length,je[k]));const F=await Ar(r,je[k],"atelier2");if(P.unshift({name:F.company||je[k],verdict:F.verdict,reason:F.reason||"",remaining:F.remaining??null}),ae([...P]),F.verdict==="quota"){P.unshift({name:"",verdict:"quota",reason:e.quota(je.length-k-1),remaining:0}),ae([...P]),B(je.slice(k+1).join(`
`)),te(""),K(!1);return}}te(""),B(ve.current?je.slice(P.length).join(`
`):""),K(!1)},Xt=async()=>{var F,R,H;if(me.current)return;const P=Q.trim().replace(/\s+/g,""),k=ke.trim();if(!P&&!k){Ve(e.rsNeed);return}if(!g&&!j){i(null,P||k.slice(0,80));return}me.current=!0,Ve(""),pt(null),ot(null),Te(!0);try{const J=await ti({url:P,text:k,email:n,cbToken:j});if(Te(!1),!J||J.status!=="success"){Ve((J==null?void 0:J.message)||"Erreur");return}pt(J),ie(!1),it((((F=J.prospective)==null?void 0:F.companies_to_evaluate)||[]).map(se=>(se==null?void 0:se.name)||"")),ot({state:"pending"});const ee=await ai(J,{email:n,cbToken:j});ot(ee.ok?{state:"ok",scopeLabel:((R=ee.summary)==null?void 0:R.scope_label)||"",scope:((H=ee.summary)==null?void 0:H.scope)||""}:{state:"fail",msg:ee.error||""}),ee.ok&&Ce(se=>se+1)}finally{me.current=!1,Te(!1)}},Zt=[xe==null?void 0:xe.industry,...(xe==null?void 0:xe.market_tags)||[],xe==null?void 0:xe.author].map(P=>(P||"").trim()).filter(Boolean),Ft=(Fe==null?void 0:Fe.state)==="pending",Aa=Fe&&(Ft?t.jsx("span",{className:"rslink pend",children:e.rsSaving}):Fe.state==="ok"?t.jsx("span",{className:"rslink ok",children:Fe.scope&&Fe.scope!=="public"?e.rsSavedIn(Fe.scopeLabel||Fe.scope.replace(/^fund:/,"")):e.rsSaved}):t.jsx("span",{className:"rslink fail",title:Fe.msg,children:e.rsSaveFail})),Ta=Cl(xe).length,De=W,ft=(A||N).trim(),Je=h.find(P=>Re(P.name)===Re(ft)),Nt=et(N)||z||et((Je==null?void 0:Je.website)||"")||et((Je==null?void 0:Je.domain)||""),Ot=O||et((Je==null?void 0:Je.url)||""),La=st?e.actAnalyse:ft?e.evalGoOn(ft.length>22?ft.slice(0,21)+"…":ft):e.evalGo,qa=ne?`${ei(Q.trim())==="youtube"&&Q.trim()?e.rsRunningVid:e.rsRunning} ${e.rsElapsed(Le)}`:Ft?e.rsSaving:e.rowExtract;return t.jsxs("div",{className:"demand"+(De?" rs-mode":"")+(A&&N.trim()===A||C||pe?" pair":"")+(C||pe||ge?" echo":"")+(ge?" swap":""),children:[t.jsxs("div",{className:"drow"+((De?pe:C)||ge?" flash":"")+((De?Q.trim():ma.test(N.trim()))?" has-url":""),children:[t.jsxs("span",{className:"dfield",children:[t.jsx("input",{value:De?Q:N,placeholder:De?e.rsUrlPh:e.evalPh,autoComplete:"off",maxLength:De?600:200,spellCheck:De?!1:void 0,inputMode:De?"url":void 0,onChange:P=>{if(De){G(P.target.value);return}w(P.target.value),A&&P.target.value.trim()!==A&&(L(""),S(""),U(""),D(!1))},onKeyDown:P=>{P.key==="Enter"&&(De?Xt():mt())}}),t.jsx("span",{className:"detect"+(De?" off":"")+(ma.test(N.trim())?" url":""),children:ye})]}),t.jsx("span",{className:"dacts",children:De?t.jsxs(t.Fragment,{children:[t.jsxs("a",{className:"viewbtn"+(Ut(Q)?"":" off"),href:Ut(Q)?Q.trim():void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewLinkHint,onClick:P=>{Ut(Q)||P.preventDefault()},children:[t.jsx(Ll,{}),e.viewLink]}),t.jsxs("button",{type:"button",className:"evalbtn"+(ne?" loading":""),disabled:ne||Ft||!Q.trim()&&!ke.trim(),onClick:()=>{Xt()},children:[t.jsx("span",{className:"fill"}),qa]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("a",{className:"viewbtn sm"+(M?" searching":Nt?"":" off"),href:Nt||void 0,target:"_blank",rel:"noopener noreferrer","aria-busy":M||void 0,title:M?e.viewSiteBusyHint:e.viewSiteHint,onClick:P=>{Nt||P.preventDefault()},children:[M&&t.jsx("span",{className:"sitespin","aria-hidden":"true"}),M?e.viewSiteBusy:e.viewSite]}),t.jsx("a",{className:"viewbtn sm"+(Ot?"":" off"),href:Ot||void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewSrcHint,onClick:P=>{Ot||P.preventDefault()},children:e.viewSrc}),t.jsxs("button",{type:"button",className:"evalbtn"+(st?" analyse":"")+(d?" loading":""),disabled:d,onClick:mt,children:[t.jsx("span",{className:"fill"}),La]})]})}),f.showCredits&&Me&&t.jsxs("button",{type:"button",className:"credits"+(Me.total_available<=0&&!Me.unlimited?" empty":""),onClick:()=>l({type:"modal",modal:"recharge"}),children:[t.jsx("span",{className:"cl",children:e.creditsCap}),t.jsx("b",{children:Me.unlimited?"∞":Me.total_available}),!Me.unlimited&&t.jsxs("span",{className:"cm",children:["/ ",Me.daily_grant+Me.purchased]}),Me.total_available<=0&&!Me.unlimited?t.jsx("span",{className:"rc",children:e.creditsRecharge}):t.jsx("span",{className:"cd",children:e.creditsToday})]})]}),b.items.filter(P=>P.status==="boot"||P.status==="running").map(P=>t.jsxs("div",{className:"result on memolive",children:[t.jsx("span",{className:"vv",children:t.jsxs("span",{className:"vp",children:["⚡ ",e.actAnalyse]})}),t.jsx("span",{className:"rn",children:P.name}),t.jsx(Ht,{item:P,serverOff:b.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),t.jsxs("button",{type:"button",className:"go",onClick:()=>l({type:"modal",modal:"queue"}),children:[e.liveOpenQueue," →"]})]},"live-"+P.name)),t.jsxs("div",{className:"dunder",children:[t.jsx("button",{type:"button",className:"dmulti",onClick:()=>q(!v),children:e.evalMulti}),t.jsx("button",{type:"button",className:"dmulti dsearch"+(W?" on":""),onClick:()=>ie(!W),children:e.rsOpen}),I!==null&&I>0&&t.jsx("button",{type:"button",className:"dmulti darch"+(Xe?" on":""),onClick:()=>E(!Xe),children:e.rsArchOpen(I)})]}),Xe&&t.jsx(Tl,{bump:ue,cbToken:j,onClose:()=>E(!1),onEvaluate:P=>i(null,P),onAddAll:it}),t.jsx("div",{className:"rsp slim"+(W?" on":" off"),"aria-hidden":!W,children:t.jsxs("div",{className:"rsp-in",children:[t.jsxs("button",{type:"button",className:"rspaste",tabIndex:W?void 0:-1,onClick:()=>Ne(P=>!P),children:[e.rsOr," · ",e.rsTextPh,t.jsx("i",{children:fe?"▴":"▾"})]}),fe&&t.jsx("textarea",{className:"rstext",value:ke,placeholder:e.rsTextPh,tabIndex:W?void 0:-1,onChange:P=>ce(P.target.value)})]})}),He&&t.jsx("div",{className:"rserr",children:He}),xe&&t.jsxs("div",{className:"rscard",children:[t.jsxs("div",{className:"rsh",children:[t.jsx("b",{children:xe.title}),xe.source_url&&t.jsx("a",{href:xe.source_url,target:"_blank",rel:"noopener noreferrer",children:e.rsSource}),t.jsx("button",{type:"button",className:"rsx",title:e.rsClose,onClick:()=>{pt(null),ot(null)},children:"×"})]}),xe.market&&t.jsx("p",{className:"rsmk",children:xe.market}),Zt.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:e.rsTags}),Zt.map(P=>t.jsx("span",{children:P},P))]}),t.jsxs("div",{className:"rsbody",children:[xe.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${xe.mindmap_png_b64}`,alt:e.rsMindmap}),t.jsx("figcaption",{children:e.rsMindmap})]}),t.jsx("div",{className:"rssum",children:io(xe.summary_md||"").map((P,k)=>t.jsx("p",{children:P},k))})]}),t.jsx(so,{card:xe,onEvaluate:P=>i(null,P),onAddAll:it}),t.jsxs("div",{className:"rsfoot",children:[t.jsx("span",{children:e.rsFound(Ta)}),Aa]})]}),v&&t.jsxs("div",{className:"bulk on",children:[t.jsx("textarea",{value:V,placeholder:e.bulkPh,onChange:P=>B(P.target.value.split(`
`).slice(0,15).join(`
`))}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+($?" loading":""),style:{justifyContent:"center"},disabled:$||!je.length,onClick:()=>{We()},children:[t.jsx("span",{className:"fill"}),$&&X?X:e.evalList]}),t.jsx("span",{className:"hint",children:e.bulkCount(je.length)})]})]}),Ze.slice(0,1).map((P,k)=>{const F=P.verdict==="kept",R=P.verdict==="quota",H=F?"var(--brand)":R?"var(--bolt)":"var(--red)",J=F?"var(--brand-l)":R?"#FEF3C7":"#FEF2F2";return t.jsxs("div",{className:"result on",style:{"--c":H,"--bgc":J},children:[t.jsx("span",{className:"vv",children:t.jsx("span",{className:"vp",children:F?"✓ "+e.kept:R?"⏳":"✗ "+e.dropped})}),P.name&&t.jsx("span",{className:"rn",children:P.name}),t.jsx("span",{className:"rr",children:P.reason?t.jsxs(t.Fragment,{children:[t.jsx("b",{children:e.why})," ",P.reason]}):null}),!!(P.candidates&&P.candidates.length)&&t.jsx("span",{className:"sitepick",children:P.candidates.map(ee=>t.jsxs("span",{className:"sp1",children:[t.jsxs("a",{href:ee.url.startsWith("http")?ee.url:`https://${ee.url}`,target:"_blank",rel:"nofollow noopener",children:[(ee.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,34)," ↗"]}),t.jsx("button",{type:"button",onClick:()=>i(null,ee.url),children:e.evalPickGo})]},ee.url))}),!R&&t.jsx("button",{type:"button",className:"go",onClick:()=>{l({type:"ptab",tab:F?1:5});const ee=(P.name||"").trim().toLowerCase();window.setTimeout(()=>{const se=[...document.querySelectorAll(".atl2 .list .row")].find($e=>{var he;return(((he=$e.querySelector(".rnm"))==null?void 0:he.textContent)||"").trim().toLowerCase().includes(ee)});se&&(se.scrollIntoView({behavior:"smooth",block:"center"}),se.classList.add("flashrow"),window.setTimeout(()=>se.classList.remove("flashrow"),2200))},260)},children:e.seeSpace(F?e.statusKeep.replace("✅ ",""):e.statusDrop.replace("❌ ",""))})]},k)}),g&&(o.kept+o.dropped>0||Ze.length>0)&&t.jsxs("div",{className:"tally",children:[t.jsx("span",{dangerouslySetInnerHTML:{__html:e.session(o.kept,o.dropped)}})," ","·"," ",t.jsx("a",{onClick:()=>l({type:"modal",modal:"space"}),children:e.seeMySpace})]})]})}function Ml(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Rl(){const{st:e,dispatch:a,byId:r,t:n,doDeep:i}=_(),o=e.memoConsole?r.get(e.memoConsole):null,l=m.useMemo(()=>o?[o.reasoning||"",Ml(o.summary||"")].filter(Boolean).join(`

`):"",[o]);if(!o)return null;const d=ut(o),c=un(o);return t.jsx("div",{className:"demand",style:{paddingTop:0},children:t.jsxs("div",{className:"memo",style:{marginTop:0},children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"nm",children:o.name}),d&&t.jsx("span",{className:"vv",children:d}),typeof o.score=="number"&&t.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[o.score,"/100"]}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),t.jsx("div",{className:"tabs2",children:t.jsx("button",{type:"button","aria-selected":"true",children:n.memoSynth})}),t.jsx("div",{className:"mb2",children:l?l.split(`

`).map((f,s)=>t.jsx("p",{style:{margin:"0 0 10px"},children:f},s)):t.jsx("p",{children:n.memoNone})}),t.jsxs("div",{className:"mf",children:[zt(o)?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"t",children:n.memoDeepHint}),t.jsx("button",{type:"button",className:"deep",onClick:()=>i(o),children:n.memoDeep})]}):t.jsx("span",{className:"t",children:c===2?n.critMemoKinds:""}),o.memoUrl&&t.jsx("a",{className:"go",href:o.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:n.memoOpenFull})]})]})})}function wn({name:e}){const{t:a,token:r,caps:n,mode:i,flashErr:o}=_(),[l,d]=m.useState(!1),[c,f]=m.useState(null),s=n.pipe&&i==="client"&&!n.lockActions,x=async()=>{if(!s||l)return;d(!0);const u=await ni(r,e);if(d(!1),!u){o(a.actErr);return}f(u.results||[])};return m.useEffect(()=>{if(!s)return;const u=h=>{var b;const p=String(((b=h.detail)==null?void 0:b.name)||"").trim();p&&p.toLowerCase()===e.toLowerCase()&&x()};return window.addEventListener("ppmap:similar",u),()=>window.removeEventListener("ppmap:similar",u)},[e,s]),m.useEffect(()=>{if(s)try{const u=(sessionStorage.getItem("pp:similar")||"").trim();u&&u.toLowerCase()===e.toLowerCase()&&(sessionStorage.removeItem("pp:similar"),x())}catch{}},[e,s]),s?t.jsxs("div",{className:"simb",onClick:u=>u.stopPropagation(),children:[t.jsx("button",{type:"button",className:"abtn",disabled:l,onClick:()=>{x()},children:l?a.similarBusy:a.similar}),c&&(c.length===0?t.jsx("p",{className:"mnote",children:a.similarNone}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"siml",children:c.map(u=>t.jsxs("li",{children:[t.jsx("b",{className:u.verdict==="kept"?"ok":"ko",children:u.company}),u.reason&&t.jsx("span",{children:u.reason})]},u.company))}),t.jsx("p",{className:"mnote dim",children:a.similarNote})]}))]}):null}const Fl=new Set(["b","strong","i","em","u","br","p","ul","ol","li","h4","h5"]),ca=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Ol(e){const a=String(e||"");if(!a)return"";let r="",n=0;for(;n<a.length;){const i=a.indexOf("<",n);if(i<0){r+=ca(a.slice(n));break}r+=ca(a.slice(n,i));const o=a.indexOf(">",i);if(o<0){r+=ca(a.slice(i));break}const l=a.slice(i+1,o).trim(),d=/^(\/?)([a-zA-Z0-9]+)/.exec(l),c=d?d[2].toLowerCase():"";d&&Fl.has(c)?r+=`<${d[1]}${c}>`:r+=ca(a.slice(i,o+1)),n=o+1}return r}const vr=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function Pe({k:e,v:a,href:r}){return a==null||a===""?null:t.jsxs("div",{className:"cdl",children:[t.jsx("span",{className:"cdk",children:e}),r?t.jsx("a",{className:"cdv",href:r,target:"_blank",rel:"noopener noreferrer",children:String(a)}):t.jsx("span",{className:"cdv",children:String(a)})]})}function Pl(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Dl({o:e}){const{t:a,doDeep:r}=_(),[n,i]=m.useState(!1),o=ut(e),l=[e.reasoning||"",Pl(e.summary||"")].filter(Boolean);return t.jsxs("div",{className:"cdmemo",children:[o&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:o}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),l.length?l.join(`

`).split(`

`).map((d,c)=>t.jsx("p",{className:"cdtxt",children:d},c)):t.jsx("p",{className:"cdtxt",children:a.memoNone}),t.jsxs("div",{className:"cdacts",children:[zt(e)&&t.jsx("button",{type:"button",className:"btn p",onClick:d=>{d.stopPropagation(),r(e)},children:a.memoDeep}),e.memoUrl&&t.jsx("button",{type:"button",className:"btn b",onClick:d=>{d.stopPropagation(),i(c=>!c)},children:n?a.memoHideHere:a.memoReadHere}),e.memoUrl&&t.jsx("a",{className:"btn d",href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",onClick:d=>d.stopPropagation(),children:a.memoOpenFull})]}),n&&e.memoUrl&&t.jsx("iframe",{className:"cdembed",src:e.memoUrl,loading:"lazy",title:a.cdMemoTab,referrerPolicy:"no-referrer-when-downgrade",onClick:d=>d.stopPropagation()})]})}function kn({o:e}){const{t:a,lang:r,dispatch:n,caps:i}=_(),o=Qt(e),l=ut(e),d=(e.cribleStatus||"").trim().toUpperCase()||(o==="NO MATCH"?"NO MATCH":o==="MATCH"?"MATCH":""),c=[e.sector,e.stage,e.countryLabel,e.city,e.website,e.domain,e.linkedinCompany,e.angle,e.date].filter(Boolean).length,f=[e.contactName,e.contactEmail,e.contactLinkedin].filter(Boolean).length,s=[e.ceoStatus,e.ceoNote,i.pipe?e.memoUrl:"",i.pipe?e.memoPdfUrl:""].filter(Boolean).length+(typeof e.engagement=="number"&&e.engagement>0?1:0),x=m.useMemo(()=>[{k:"conv",lib:a.cdConviction,n:(d?1:0)+(e.reasoning?1:0)+(l?1:0)},{k:"ana",lib:a.cdAnalyse,n:(e.summary?1:0)+(i.pipe&&!i.lockActions?1:0)},{k:"soc",lib:a.cdSociete,n:c},{k:"ctc",lib:a.cdContact,n:f},{k:"suivi",lib:a.cdSuivi,n:s},{k:"memo",lib:a.cdMemoTab,n:e.memoUrl||e.summary||zt(e)?1:0}].filter(b=>b.n>0),[e,a,d,l,c,f,s]),[u,h]=m.useState("");if(!x.length)return null;const p=x.some(b=>b.k===u)?u:x[0].k;return t.jsxs("div",{className:"cdtabs",children:[t.jsx("div",{className:"cdnav",role:"tablist",children:x.map(b=>t.jsx("button",{type:"button",role:"tab","aria-selected":p===b.k,"data-tour":"tab-"+b.k,className:p===b.k?"on":"",onClick:y=>{y.stopPropagation(),h(b.k)},children:b.lib},b.k))}),t.jsxs("div",{className:"cdbody",onClick:b=>b.stopPropagation(),children:[p==="conv"&&t.jsxs(t.Fragment,{children:[d&&t.jsxs("div",{className:"cdv1"+(d==="NO MATCH"?" out":""),children:[t.jsx("b",{children:d==="NO MATCH"?a.vOut:a.vKept}),t.jsx("span",{className:"cdw",children:a.cdCrible})]}),e.reasoning&&t.jsx("p",{className:"cdtxt",children:e.reasoning}),l&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:l}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"cdgrid",children:[t.jsx(Pe,{k:a.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(Pe,{k:a.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(Pe,{k:a.cdVerdictDate,v:vr(e.verdictDate,r)})]})]}),p==="ana"&&t.jsxs(t.Fragment,{children:[e.summary&&t.jsx("div",{className:"cdrich",dangerouslySetInnerHTML:{__html:Ol(e.summary)}}),i.pipe&&!i.lockActions&&t.jsx(Il,{o:e})]}),p==="soc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Pe,{k:a.cdSector,v:e.sector}),t.jsx(Pe,{k:a.cdStage,v:e.stage}),t.jsx(Pe,{k:a.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(Pe,{k:a.cdSite,v:e.domain||e.website,href:e.website||void 0}),t.jsx(Pe,{k:a.cdLinkedin,v:e.linkedinCompany?"LinkedIn":"",href:e.linkedinCompany}),t.jsx(Pe,{k:a.cdAngle,v:e.angle}),t.jsx(Pe,{k:a.cdDetected,v:vr(e.date,r)})]}),p==="ctc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Pe,{k:a.cdName,v:e.contactName}),t.jsx(Pe,{k:a.cdEmail,v:e.contactEmail,href:e.contactEmail?`mailto:${e.contactEmail}`:void 0}),t.jsx(Pe,{k:a.cdLinkedin,v:e.contactLinkedin?"LinkedIn":"",href:e.contactLinkedin})]}),p==="memo"&&t.jsx(Dl,{o:e}),p==="suivi"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"cdgrid",children:[t.jsx(Pe,{k:a.cdCeoStatus,v:e.ceoStatus}),t.jsx(Pe,{k:a.cdEngagement,v:typeof e.engagement=="number"&&e.engagement>0?e.engagement:""})]}),e.ceoNote&&t.jsxs("p",{className:"cdtxt",children:["💬 ",e.ceoNote]}),i.pipe&&(e.memoUrl||e.memoPdfUrl)&&t.jsxs("div",{className:"cdacts",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"abtn",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemo," →"]}),e.memoPdfUrl&&t.jsx("a",{className:"abtn",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"})]})]})]})]})}function Il({o:e}){const{t:a,token:r}=_(),[n,i]=m.useState(!1),[o,l]=m.useState(null),d=async()=>{n||(i(!0),l(await ri(r,e.name,e.website||e.domain||"")),i(!1))},c=(o==null?void 0:o.blocs)||{},f=[[a.qaVP,c.value_prop],[a.qaProduct,c.produit],[a.qaModel,c.modele],[a.qaSummary,c.synthese]],s=f.some(([,x])=>x);return t.jsxs("div",{className:"qab",children:[!o&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mnote dim",children:a.qaHint}),t.jsx("button",{type:"button",className:"abtn",disabled:n,onClick:()=>{d()},children:n?a.qaBusy:a.qaRun})]}),o&&s&&t.jsxs(t.Fragment,{children:[f.filter(([,x])=>x).map(([x,u])=>t.jsxs("div",{className:"qal",children:[t.jsx("span",{className:"qak",children:x}),t.jsx("p",{children:u})]},x)),!!(o.pages||[]).length&&t.jsx("p",{className:"mnote dim",children:a.qaSources((o.pages||[]).length)})]}),o&&!s&&t.jsx("p",{className:"mnote warn",children:o.quota?a.qaQuota:a.qaEmpty})]})}function Jt({spec:e}){const a=m.useRef(null),r=m.useRef(null),[n,i]=m.useState(!1);return m.useEffect(()=>{const o=a.current;if(!o)return;let l=!1;const d=()=>{const f=Math.max(280,Math.min(560,o.clientWidth||320));On({kind:"op",card:e},f).then(s=>{!l&&s&&o.isConnected&&o.replaceChildren(s)})},c=window.requestAnimationFrame(d);return()=>{l=!0,window.cancelAnimationFrame(c),o.replaceChildren()}},[e]),m.useEffect(()=>{if(!n)return;const o=r.current;if(!o)return;let l=!1;On({kind:"op",card:e},Math.min(1100,Math.floor(window.innerWidth*.92))).then(c=>{!l&&c&&o.isConnected&&o.replaceChildren(c)});const d=c=>{c.key==="Escape"&&i(!1)};return document.addEventListener("keydown",d),()=>{l=!0,document.removeEventListener("keydown",d)}},[n,e]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:a,className:"zoom-card-host",title:"Agrandir",onClick:()=>i(!0)}),n&&qt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"atl2-lb",onClick:()=>i(!1),children:[t.jsx("div",{ref:r,style:{lineHeight:0}}),t.jsx("button",{type:"button",className:"atl2-lb-x","aria-label":"Fermer",onClick:()=>i(!1),children:"×"})]})}),document.body)]})}const Bl=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function $l(e,a=!1){if(!e||typeof window>"u")return;const r=352,n=a?620:430,i=window.innerWidth,o=window.innerHeight,l=Math.min(Math.max(e.x-r/2,8),Math.max(8,i-r-8));let d=e.y+10;return d+n>o-8&&(d=Math.max(8,e.y-n-14)),d<8&&(d=8),{left:l,top:d}}function _l(){const{st:e,dispatch:a,byId:r,t:n,lang:i,caps:o,mode:l,askEvaluate:d,doAnalyse:c,doDecide:f,doPromote:s,doRepeche:x,doApproach:u,doDeep:h,doOnboard:p,outbound:b,evalBusy:y}=_(),g=e.popupId?r.get(e.popupId):null;if(!g)return null;const j=qe(g),N=ze(g),w=ut(g),C=Qt(g),T=g.kind==="target",A=L=>{a({type:"filters",patch:L}),a({type:"popup",id:null})};return qt.createPortal(t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:Bl}),t.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),t.jsxs("div",{className:"pop on "+(e.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:$l(e.popupAnchor,!!g.card),onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{className:"ph",children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h3",{children:g.name}),t.jsx("span",{className:"id",children:n.detected(n.daysAgo(ct(g.date)),Ue(g.engine,i))})]}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),t.jsxs("div",{className:"pb",children:[t.jsxs("div",{className:"tags",children:[g.cc&&t.jsx("button",{type:"button",className:"hi",onClick:()=>A({country:[g.cc]}),children:(Mt(g.cc,i)||g.countryLabel||"").toUpperCase()}),g.sector&&t.jsx("button",{type:"button",onClick:()=>A({sector:[g.sector]}),children:g.sector.toUpperCase()}),g.stage&&t.jsx("button",{type:"button",onClick:()=>A({stage:[g.stage]}),children:g.stage.toUpperCase()}),typeof g.amountEur=="number"&&g.amountEur>0&&t.jsx("span",{className:"am2",children:Rt(g.amountEur,i)})]}),o.pipe&&T&&t.jsxs("div",{className:"pstat",children:[C&&t.jsx("span",{className:"vd "+(C==="MATCH"?"v-ok":"v-no"),title:n.vt[C],children:C}),w&&t.jsx("span",{className:"vd v-cons",title:n.vt[w],children:w}),t.jsx("span",{className:"pstep",children:n.plabels[N]}),g.ceoStatus&&t.jsx("span",{className:"pstep own",children:g.ceoStatus})]}),(g.tagline||g.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:g.tagline||g.headline})]}),t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.how}),t.jsxs("p",{children:[vt(g.engine)," ",t.jsx("b",{children:Ue(g.engine,i)})," — ",oi(g.engine,i),g.noteTitle&&t.jsxs(t.Fragment,{children:[" · ",g.noteTitle]})]}),j?t.jsxs("p",{className:"psig",style:{marginTop:9},children:[t.jsx(kt,{o:g,lg:!0})," ",t.jsx(za,{o:g,src:!0}),t.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[n.signaledOn(xn(j,i))," · ",n.win7(xa(j,i))]})]}):t.jsx("p",{className:"pnos",style:{marginTop:5},children:n.noSignal})]}),g.card?t.jsx(Jt,{spec:g.card}):null,g.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:o.pipe&&N>=1?n.verdictCap:n.memo}),t.jsx("p",{className:"memo",children:g.reasoning})]}),o.pipe&&T&&w&&t.jsx("div",{className:"fld",children:t.jsxs("p",{style:{fontWeight:700},children:[w,typeof g.score=="number"&&g.score>0?" · "+n.score(g.score):""]})}),o.pipe&&T&&t.jsx(kn,{o:g})]}),t.jsx(wn,{name:g.name}),t.jsxs("div",{className:"pf",children:[o.lockActions||l!=="client"&&o.pipe?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[t.jsx("span",{className:"fill"}),"🔒 ",n.lockbarCta]}):o.pipe?t.jsxs(t.Fragment,{children:[N===0&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:y,onClick:()=>d(g),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(g.name.length>22?g.name.slice(0,21)+"…":g.name)]}),N===1&&t.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{c(g),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actAnalyse]}),N===2&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{s(g),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actPromote]}),N===3&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{f(g,!0),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actYes]}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{f(g,!1),a({type:"popup",id:null})},children:n.actNo}),zt(g)&&t.jsx("button",{type:"button",className:"abtn",title:n.memoDeepHint,onClick:()=>{h(g),a({type:"popup",id:null})},children:n.memoDeep})]}),N===4&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{u(g),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actApproach]}),N===5&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{x(g),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actRepeche]}),g.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:g.id}),a({type:"popup",id:null})},children:"📄"}),b&&t.jsx("button",{type:"button",className:"abtn",title:n.actOnboardTitle,onClick:()=>{p(g),a({type:"popup",id:null})},children:"🚀"})]}):g.engine==="media"&&g.url&&o.showDemand?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{var L;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:g.url}}))}catch{}a({type:"popup",id:null}),(L=document.querySelector(".atl2 .demand"))==null||L.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rsOpen]}),t.jsx("button",{type:"button",className:"abtn",disabled:y,title:n.evalGoOn(g.name),onClick:()=>d(g),children:"⚡"})]}):t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:y,onClick:()=>d(g),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(g.name.length>22?g.name.slice(0,21)+"…":g.name)," →"]}),g.website&&t.jsx("a",{className:"psite",href:g.website.startsWith("http")?g.website:"https://"+g.website,target:"_blank",rel:"noopener noreferrer",title:g.website,children:"🌐"})]})]})]}),document.body)}const Ul=8;function Hl(){const{t:e,lang:a,token:r,dossiers:n,caps:i,markRow:o,dispatch:l}=_(),[d,c]=m.useState(!1),[f,s]=m.useState(!1),[x,u]=m.useState(!1),h=`atl2:sincemini:${r||"home"}`,[p,b]=m.useState(()=>{try{return localStorage.getItem(h)==="1"}catch{return!1}}),y=()=>{b(L=>{try{localStorage.setItem(h,L?"0":"1")}catch{}return!L})},g=r||"home",{names:j,verdicts:N}=m.useMemo(()=>{const L=[],z={};return n.forEach(S=>{S.kind!=="target"||!S.name||(L.push(S.name),z[S.name]=ii(S)||"")}),{names:L,verdicts:z}},[n]),w=m.useMemo(()=>j.length?si(g,j,N,a):null,[g,j.length]);if(!i.pipe||d||!w||w.firstVisit||!w.added.length&&!w.gone.length)return null;const C=f?w.added:w.added.slice(0,Ul),T=w.added.length-C.length,A=L=>{const z=n.find(S=>S.name===L);z&&(o(z.id),l({type:"popup",id:z.id}))};return t.jsxs("div",{className:"since"+(p?" mini":""),children:[t.jsxs("div",{className:"sg-h",children:[t.jsxs("span",{className:"t",children:["✨ ",e.sinceTitle(w.added.length,w.lastDate)]}),t.jsx("span",{className:"s",children:e.sinceSub}),t.jsx("span",{className:"sg-sp"}),t.jsx("button",{type:"button",className:"sg-x","aria-expanded":!p,title:p?e.boxExpand:e.boxCollapse,onClick:y,children:p?"▸":"▾"}),t.jsx("button",{type:"button",className:"sg-x","aria-label":e.tourClose,title:e.tourClose,onClick:()=>{c(!0),li(g,j,N,w.fp,a)},children:"×"})]}),!!w.added.length&&t.jsxs("div",{className:"sg-c",children:[C.map(L=>t.jsx("button",{type:"button",className:"sg-chip",onClick:()=>A(L),children:t.jsx("b",{children:L})},L)),T>0&&t.jsx("button",{type:"button",className:"sg-more",onClick:()=>s(!0),children:e.sinceMore(T)})]}),!!w.gone.length&&t.jsxs("div",{className:"sg-c",children:[t.jsx("button",{type:"button",className:"sg-more",onClick:()=>u(L=>!L),children:e.sinceOut(w.gone.length)}),x&&w.gone.slice(0,20).map(L=>t.jsx("span",{className:"gone",children:L},L))]})]})}const lo={"CALL PENDING":"call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function jn({o:e,locked:a=!1}){const{t:r}=_(),n=Qt(e),i=ut(e),o=ze(e),l=Ha(e),d=ci(e);return t.jsxs("span",{className:"c-vd",children:[n?t.jsx("span",{className:"vd "+(n==="MATCH"?"v-ok":"v-no"),title:r.vt[n],children:n}):t.jsx("span",{className:"vd wait",children:r.actToEval}),i?t.jsx("span",{className:"vd "+(lo[i]||"v-cons"),title:r.vt[i],children:i}):o===1?t.jsx("span",{className:"vd wait",children:r.actMemoQueue}):null,o===3&&l==="auto"&&t.jsx("span",{className:"org au",title:r.orgAutoTitle,children:r.orgAuto}),o===3&&l==="cd"&&t.jsx("span",{className:"org cd",title:r.orgCdTitle,children:r.orgCd}),o===3&&d!==null&&t.jsx("span",{className:"wait2 "+(d>10?"hot":d>=5?"warm":""),title:r.waitTitle(d),children:r.waitChip(d)}),!a&&t.jsx(bs,{o:e})]})}const Lt=e=>e.length>22?e.slice(0,21)+"…":e,fa=new Set(["media","nominations","recrutements","tribunes","listes","evenements","partenariats","produits","regul","marche"]);function Ca(e){return fa.has(e.engine||"")}function gt(e){return!!e.noCo||Ca(e)&&!!e.url}function Kt(e){const a=(e.url||"").trim(),r=[e.headline,e.tagline].filter(n=>n&&n!==e.name).join(`
`);if(!(!a&&!r))try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:a,text:r}}))}catch{}}function co(){let e=0;return document.querySelectorAll("body.pp-desk .pph, body.pp-desk .pp-nav, body.pp-desk .pp-band, .atl2.ops .eval-stick, .atl2.ops .listhead").forEach(a=>{const r=a.getBoundingClientRect();r.height<4||r.top<window.innerHeight*.55&&r.bottom>e&&(e=r.bottom)}),e}function Vl({on:e,rev:a}){const[r,n]=m.useState(null),[i,o]=m.useState({top:0,left:0,width:0});return m.useEffect(()=>{if(!e){n(null);return}const l=()=>{var p,b,y;const d=document.querySelector(".atl2.ops .desk-list"),c=document.querySelector(".atl2.ops .listhead");if(!d){n(null);return}const f=d.getBoundingClientRect(),s=c?c.getBoundingClientRect().bottom:f.top;o({top:Math.round(s),left:Math.round(f.left),width:Math.round(f.width)});const x=[...d.querySelectorAll(":scope .grp")];let u=null;for(const g of x){const j=g.querySelector(".grp-h");j&&j.getBoundingClientRect().bottom<=s+2&&(u=g)}if(!u){n(null);return}const h=u.querySelector(".grp-h");if(!h){n(null);return}n({ic:(((p=h.querySelector(".ic"))==null?void 0:p.textContent)||"").trim(),t:(((b=h.querySelector(".t"))==null?void 0:b.textContent)||"").trim(),s:(((y=h.querySelector(".s"))==null?void 0:y.textContent)||"").trim()})};return l(),window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}},[e,a]),!e||!r||i.width<80?null:t.jsxs("div",{className:"grp-pin",style:{top:i.top,left:i.left,width:i.width},children:[t.jsx("span",{className:"ic",children:r.ic}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:r.t}),t.jsx("div",{className:"s",children:r.s})]})]})}function Wl(e){const r=()=>{const n=co(),i=e.getBoundingClientRect().top-n-8;Math.abs(i)<2||window.scrollBy({top:i,left:0,behavior:"auto"})};r(),requestAnimationFrame(()=>requestAnimationFrame(r))}function yr({o:e}){const{t:a,askEvaluate:r,evalBusy:n,lang:i}=_(),[o,l]=m.useState(!1);if(m.useEffect(()=>{n||l(!1)},[n]),Ie(e)){const f=(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("span",{className:"verdict",style:{"--c":f?"var(--brand)":"var(--red)"},title:e.reasoning||"",children:[f?"✓":"✗"," ",t.jsx("b",{children:f?a.kept:a.dropped}),typeof e.score=="number"&&e.score>0?" "+e.score:""]})}const c=o&&n;return t.jsxs("button",{type:"button",className:"rev"+(c?" loading":""),disabled:n,title:a.evalGoOn(e.name),onClick:f=>{f.stopPropagation(),l(!0),r(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(Lt(e.name))})]})}function Nn({o:e}){const{t:a,caps:r,memoQueued:n,approachDone:i,doAnalyse:o,doDecide:l,doPromote:d,doRepeche:c,doApproach:f,dispatch:s,liveMemos:x}=_();if(r.lockActions)return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",onClick:p=>{p.stopPropagation(),s({type:"modal",modal:"rdv"})},children:a.actAnalyse})});if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:p=>{p.stopPropagation(),Kt(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});if(!r.pipe)return Ca(e)&&e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:p=>{p.stopPropagation(),Kt(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):e.noCo?t.jsx("span",{className:"cell"}):t.jsx("span",{className:"cell",children:t.jsx(yr,{o:e})});const u=ze(e),h=p=>b=>{b.stopPropagation(),p()};if(u===0)return t.jsx("span",{className:"cell",children:t.jsx(yr,{o:e})});if(u===1){const p=x.liveOf(e.name);if(p&&(p.status==="boot"||p.status==="running"))return t.jsx("span",{className:"cell",children:t.jsx(Ht,{item:p,serverOff:x.serverOff,bootLbl:a.liveBoot,endLabel:a.liveEnd})});const b=n.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",disabled:b,onClick:h(()=>o(e)),children:b?a.actAnalyseQueued:a.actAnalyse})})}if(u===3)return t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:h(()=>l(e,!0)),children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:h(()=>l(e,!1)),children:a.actNo}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:h(()=>s({type:"memoConsole",id:e.id})),children:"📄"})]})});if(u===4){const p=i.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",disabled:p,onClick:h(()=>f(e)),children:p?a.actApproachSent:a.actApproach})})}return u===2?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:h(()=>d(e)),children:a.actPromote}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:h(()=>s({type:"memoConsole",id:e.id})),children:"📄"})]})}):u===5?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:h(()=>c(e)),children:a.actRepeche}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:h(()=>s({type:"memoConsole",id:e.id})),children:"📄"})]})}):t.jsx("span",{className:"cell",children:e.memoUrl?t.jsx("button",{type:"button",className:"memobtn read",onClick:h(()=>s({type:"memoConsole",id:e.id})),children:a.actMemo}):t.jsx("span",{className:"rc",children:"—"})})}function Yl({o:e}){const{t:a,doThumb:r,thumbOf:n}=_(),i=n(e);return t.jsxs("span",{className:"thu",children:[t.jsx("button",{type:"button",className:"tb up"+(i==="yes"?" on":""),title:a.thumbUp,onClick:o=>{o.stopPropagation(),r(e,!0)},children:"👍"}),t.jsx("button",{type:"button",className:"tb dn"+(i==="no"?" on":""),title:a.thumbDn,onClick:o=>{o.stopPropagation(),r(e,!1)},children:"👎"})]})}function Gl({o:e}){const{lang:a}=_();return qe(e)?t.jsxs("span",{className:"c-sig",children:[t.jsx(kt,{o:e}),t.jsx(za,{o:e,src:!0})]}):t.jsx("span",{className:"c-sig",children:t.jsxs("span",{className:"mo",children:[vt(e.engine||"")," ",Ue(e.engine||"",a)]})})}function Kl({o:e,locked:a,open:r,onToggle:n,selected:i,echo:o,onSelect:l}){const{dispatch:d,caps:c,markRow:f,markedId:s,favIds:x,toggleFav:u,t:h}=_(),p=ze(e),b=["#0F172A","#475C6E","#8798A8","#B9C6D2"],y=e.date?Math.max(0,Math.floor((Date.now()-Date.parse(e.date))/864e5)):9999,g=y<=0?0:y<=7?1:y<=30?2:3,j=c.pipe&&e.kind==="target"?["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"][p]:b[g],N=x.has(e.id),w=C=>{if(a)return;if(l){l(e.id);return}if(c.pipe||e.kind==="op"){n();return}const T=C.currentTarget.getBoundingClientRect();d({type:"popup",id:e.id,anchor:{x:T.left+Math.min(280,T.width/3),y:T.bottom}})};return t.jsxs(m.Fragment,{children:[t.jsxs("div",{className:"row"+(s===e.id||r||i?" on":"")+(r?" open":"")+(i?" sel":"")+(o?" echo":"")+(a?" tzr":""),"aria-selected":i||void 0,onMouseEnter:()=>f(e.id),onMouseLeave:()=>f(null),onClick:w,children:[t.jsx("span",{className:"pt",style:{"--c":j}}),t.jsx(xo,{o:e}),t.jsxs("span",{className:"nd",children:[t.jsxs("span",{className:"rnm"+(a?" nmx":""),title:a?void 0:e.name,children:[c.pipe&&t.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:N?1:.35,padding:0,marginRight:4},onClick:C=>{C.stopPropagation(),u(e)},children:N?"★":"☆"}),e.name]}),t.jsx("span",{className:"rds",title:e.tagline||e.headline||"",children:[e.tagline,e.headline,e.reasoning].find(C=>C&&C!==e.name)||""}),e.acquirer&&t.jsxs("button",{type:"button",className:"racq",title:h.acqSee(e.acquirer),onClick:C=>{C.stopPropagation(),d({type:"acquirer",value:e.acquirer||""})},children:["← ",Lt(e.acquirer)]}),rt(e)?t.jsx("span",{className:"rdec",title:h.doEdito,children:"📖"}):e.decryptHtml?t.jsx("span",{className:"rdec",title:h.zoomNewsMark,children:"📰"}):null]}),t.jsx(Ql,{o:e}),t.jsx("span",{className:"c-stade",children:e.stage||""}),t.jsx(Gl,{o:e}),c.pipe&&t.jsx(jn,{o:e,locked:a}),c.pipe&&t.jsxs("span",{className:"c-sc",children:[typeof e.score=="number"?e.score:"",typeof e.score=="number"&&t.jsx("s",{children:"/100"})]}),t.jsx(Nn,{o:e}),c.showThumbs&&t.jsx(Yl,{o:e})]}),r&&!a&&!l&&t.jsx(Zl,{o:e})]})}function Ql({o:e}){const{lang:a,caps:r}=_();if(r.pipe&&e.kind==="target")return t.jsx("span",{className:"c-amt none",children:"—"});const n=Rt(e.amountEur,a);return t.jsx("span",{className:"c-amt"+(n?"":" none"),children:n||"—"})}function Jl({o:e}){const{t:a,lang:r,askEvaluate:n,evalBusy:i,dispatch:o}=_(),l=(u,h=!1)=>p=>{p.stopPropagation(),h&&o({type:"continent",key:"monde"}),o({type:"filters",patch:u})},d=(()=>{const u=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return u?u[1].slice(0,40):""})(),c=Rt(e.amountEur,r),f=(e.date||"").slice(0,10).split("-").reverse().join("/"),s=Ie(e),x=s&&(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("div",{className:"card ops-open",children:[t.jsxs("div",{className:"oc-main",children:[e.decryptHtml?t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}):t.jsx("p",{className:"oc-head",children:e.headline||e.tagline||e.name}),t.jsxs("div",{className:"oc-meta",children:[e.sector&&t.jsx("button",{type:"button",onClick:l({sector:[e.sector]}),children:e.sector}),e.countryLabel&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:l({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:l({stage:[e.stage]}),children:e.stage}),c&&t.jsx("span",{className:"oc-amt",children:c}),f&&t.jsx("span",{children:f})]}),t.jsxs("div",{className:"oc-acts",children:[s?t.jsxs("span",{className:"verdict",style:{"--c":x?"var(--brand)":"var(--red)"},children:[x?"✓":"✗"," ",t.jsx("b",{children:x?a.kept:a.dropped})]}):gt(e)?t.jsxs(t.Fragment,{children:[e.url&&t.jsx("button",{type:"button",className:"oc-cta",onClick:u=>{u.stopPropagation(),Kt(e)},children:a.rowExtract}),!e.noCo&&t.jsx("button",{type:"button",className:"oc-ghost",disabled:i,onClick:u=>{u.stopPropagation(),n(e)},children:a.evalGoOn(Lt(e.name))})]}):t.jsx("button",{type:"button",className:"oc-cta",disabled:i,onClick:u=>{u.stopPropagation(),n(e)},children:a.evalGoOn(Lt(e.name))}),e.url&&t.jsxs("a",{className:"oc-src",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:u=>u.stopPropagation(),children:[(r==="fr"?"lire la source":"read the source")+(d?` · ${d}`:"")," ↗"]})]})]}),e.card&&t.jsx("div",{className:"oc-side",children:t.jsx(Jt,{spec:e.card})})]})}function Xl({o:e}){const{t:a,lang:r,caps:n,dispatch:i}=_();if(!e)return t.jsx("p",{className:"readpane-empty",children:r==="fr"?"Cliquez une ligne — le dossier s’ouvre ici, sans quitter la liste.":"Click a row — the file opens here, without leaving the list."});const o=(e.date||"").slice(0,10).split("-").reverse().join("/");return t.jsxs("div",{className:"zoom zoom-pipe",children:[t.jsxs("div",{className:"zoom-k",children:[Ue(e.engine||"",r),o?` · ${o}`:""]}),t.jsx("h3",{className:"zoom-h",children:e.name}),(e.sector||e.countryLabel||e.stage)&&t.jsxs("div",{className:"zoom-meta",children:[e.sector?t.jsx("span",{children:e.sector}):null,e.countryLabel?t.jsx("span",{children:e.countryLabel}):null,e.stage?t.jsx("span",{children:e.stage}):null]}),t.jsx("div",{className:"zoom-cta",children:n.lockActions?t.jsx("button",{type:"button",className:"oc-cta",onClick:()=>i({type:"modal",modal:"rdv"}),children:a.lockbarCta}):t.jsx(Nn,{o:e})}),t.jsx(kn,{o:e})]})}function po({o:e,extra:a}){const{t:r,lang:n,askEvaluate:i,evalBusy:o,dispatch:l,caps:d,dossiers:c}=_();if(!e&&!a){const M=c.find(rt);if(M)return t.jsx(po,{o:M})}const f=((e==null?void 0:e.name)||(a==null?void 0:a.name)||"").trim(),s=((e==null?void 0:e.url)||(a==null?void 0:a.url)||"").trim(),x=(e==null?void 0:e.headline)||(e==null?void 0:e.tagline)||(a==null?void 0:a.headline)||f,u=(e==null?void 0:e.card)||(a==null?void 0:a.card),h=e?!!e.noCo:!f||ha(f),p=(e==null?void 0:e.engine)||"",b=rt(e),y=e?Rt(e.amountEur,n):"",g=((e==null?void 0:e.date)||"").slice(0,10).split("-").reverse().join("/"),j=(()=>{const M=/https?:\/\/(?:www\.)?([^/]+)/.exec(s);return M?M[1].replace(/^www\./,"").slice(0,40):""})(),N=c.find(rt),w=((N==null?void 0:N.url)||"").trim(),C=!!s&&!!w&&(s===w||s.endsWith(w)||w.endsWith(s)),T=(M,D=!1)=>v=>{v.stopPropagation(),D&&l({type:"continent",key:"monde"}),l({type:"filters",patch:M})};if(!e&&!a)return t.jsx("p",{className:"readpane-empty",children:n==="fr"?"Cliquez une ligne, un pin ou le ticker — le dossier s’ouvre ici.":"Click a row, a pin or the ticker — the file opens here."});const A=()=>{f&&(l({type:"continent",key:"monde"}),l({type:"filters",patch:{search:f}}))},L=()=>{e!=null&&e.sector&&l({type:"filters",patch:{sector:[e.sector]}})},z=()=>{Kt({url:s,headline:x,tagline:e==null?void 0:e.tagline,name:f})},S=e?Ie(e):!1,O=S&&e&&(e.verdict||"").toUpperCase()!=="NO MATCH",U=b?r.doEdito.replace(/^📖\s*/,""):p?Ue(p,n):n==="fr"?"Dossier":"File";return t.jsxs("div",{className:"zoom",children:[t.jsxs("div",{className:"zoom-k",children:[U,g?` · ${g}`:""]}),t.jsx("h3",{className:"zoom-h",children:x}),s&&!b&&(h||Ca({engine:p}))&&t.jsxs("a",{className:"zoom-ext",href:s,target:"_blank",rel:"noopener noreferrer",title:r.viewLinkHint,onClick:M=>M.stopPropagation(),children:[t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]}),r.viewLink,j?t.jsx("em",{children:j}):null]}),(e==null?void 0:e.decryptHtml)&&t.jsx("div",{className:"ed-decrypt-b zoom-body",dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsxs("div",{className:"zoom-meta",children:[(e==null?void 0:e.sector)&&t.jsx("button",{type:"button",onClick:T({sector:[e.sector]}),children:e.sector}),(e==null?void 0:e.countryLabel)&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:T({country:[e.cc]},!0),children:e.countryLabel}):e!=null&&e.countryLabel?t.jsx("span",{children:e.countryLabel}):null),(e==null?void 0:e.stage)&&t.jsx("button",{type:"button",onClick:T({stage:[e.stage]}),children:e.stage}),y&&t.jsx("span",{className:"oc-amt",children:y})]}),u&&t.jsx("div",{className:"zoom-card",children:t.jsx(Jt,{spec:u})}),(s&&!C&&!b||N&&!b)&&t.jsxs("div",{className:"zoom-srcbox",children:[s&&!C&&!b&&t.jsxs("a",{className:"zoom-src",href:s,target:"_blank",rel:"nofollow noopener",onClick:M=>M.stopPropagation(),children:[r.zoomSrc,j?` · ${j}`:""," ↗"]}),N&&!b&&t.jsxs("button",{type:"button",className:"zoom-src zoom-src-art",onClick:M=>{M.stopPropagation(),l({type:"focus",id:N.id})},children:[r.doEdito," →"]})]}),t.jsxs("div",{className:"zoom-acts",children:[S?t.jsxs("span",{className:"verdict",style:{"--c":O?"var(--brand)":"var(--red)"},children:[O?"✓":"✗"," ",t.jsx("b",{children:O?r.kept:r.dropped})]}):!h&&f?t.jsxs("button",{type:"button",className:"zp-go",disabled:o,onClick:M=>{M.stopPropagation(),i(e,f)},children:[t.jsx("span",{className:"zp-ico",children:"⚡"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.evalGoOn(Lt(f))}),t.jsx("em",{children:r.zoomEvalHint})]})]}):null,s&&!b&&(h||Ca({engine:p}))&&t.jsxs("button",{type:"button",className:"zp-go"+(!h&&f?" ghost":""),onClick:M=>{M.stopPropagation(),z()},children:[t.jsx("span",{className:"zp-ico",children:"🔎"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.rowExtract}),t.jsx("em",{children:r.rsOpen})]})]}),!h&&f&&t.jsxs("div",{className:"zp-row",children:[(e==null?void 0:e.sector)&&!d.pipe&&t.jsxs("button",{type:"button",className:"zp-sec",onClick:M=>{M.stopPropagation(),L()},children:[t.jsx("span",{className:"zp-k",children:r.zoomSimilar}),t.jsx("span",{className:"zp-v",children:e.sector}),t.jsx("em",{children:r.zoomSimilarHint})]}),t.jsxs("button",{type:"button",className:"zp-sec",onClick:M=>{M.stopPropagation(),A()},children:[t.jsx("span",{className:"zp-k",children:r.zoomInCockpit}),t.jsx("span",{className:"zp-v",children:Lt(f)}),t.jsx("em",{children:r.zoomIsolateHint})]})]}),!h&&f&&d.pipe&&t.jsx(wn,{name:f})]})]})}function Zl({o:e}){const{t:a,lang:r,dispatch:n,caps:i,outbound:o,doOnboard:l}=_();return!i.pipe&&e.kind==="op"?t.jsx(Jl,{o:e}):t.jsxs("div",{className:"card",style:{display:"grid"},children:[t.jsxs("div",{children:[e.tagline&&t.jsx("p",{className:"lead",children:e.tagline}),e.decryptHtml&&t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsx(kn,{o:e}),t.jsx(vs,{o:e}),t.jsx(ks,{o:e}),t.jsx(wn,{name:e.name}),t.jsxs("div",{className:"tg",children:[e.sector&&t.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),n({type:"filters",patch:{sector:[e.sector]}})},children:e.sector}),e.stage&&t.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),n({type:"filters",patch:{stage:[e.stage]}})},children:e.stage}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),n({type:"continent",key:"monde"}),n({type:"filters",patch:{country:[e.cc]}})},children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.city&&t.jsx("span",{children:e.city})]})]}),t.jsxs("div",{className:"cside",children:[t.jsxs("div",{className:"top",children:[typeof e.score=="number"&&t.jsx("span",{className:"sc3",children:e.score}),t.jsx("span",{className:"vv",children:t.jsx(jn,{o:e})})]}),e.card&&t.jsx(Jt,{spec:e.card}),t.jsxs("div",{className:"sec2",children:[t.jsxs("div",{className:"k2",children:[vt(e.engine||"")," ",Ue(e.engine||"",r)]}),qe(e)&&t.jsx("div",{style:{marginTop:8},children:t.jsx(kt,{o:e})})]}),i.pipe&&(e.memoUrl||o)&&t.jsx("div",{className:"sec2 acts2",children:o&&t.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>l(e),children:a.actOnboard})})]})]})}function ed({o:e,locked:a,selected:r,onSelect:n}){const{t:i,dispatch:o,caps:l,doDecide:d,lang:c}=_();if(!l.pipe&&e.kind==="op"){const x=Rt(e.amountEur,c),u=(()=>{const p=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return p?p[1].slice(0,32):""})(),h=(p,b=!1)=>y=>{y.stopPropagation(),b&&o({type:"continent",key:"monde"}),o({type:"filters",patch:p})};return t.jsxs("div",{className:"dcard dops"+(a?" tzr":"")+(r?" sel":""),onClick:()=>{!a&&n&&n(e.id)},children:[e.card&&t.jsx("div",{className:"dimg",children:t.jsx(Jt,{spec:e.card})}),t.jsxs("div",{className:"dh",children:[t.jsx("span",{className:"dnm",title:e.name,children:e.name}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial",children:"📖"})]}),e.headline&&e.headline!==e.name&&t.jsx("div",{className:"ddesc",children:e.headline}),t.jsxs("div",{className:"dtags",children:[e.sector&&t.jsx("button",{type:"button",onClick:h({sector:[e.sector]}),children:e.sector}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:h({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:h({stage:[e.stage]}),children:e.stage}),x&&t.jsx("span",{className:"damt",children:x})]}),t.jsxs("div",{className:"dsig",children:[t.jsxs("span",{className:"dmo",children:[vt(e.engine||"")," ",Ue(e.engine||"",c)]}),qe(e)&&t.jsx(kt,{o:e})]}),e.url&&t.jsxs("a",{className:"dsrc",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:p=>p.stopPropagation(),children:[(c==="fr"?"lire la source":"read the source")+(u?` · ${u}`:"")," ↗"]}),!a&&t.jsx("div",{className:"dact",children:t.jsx(Nn,{o:e})})]})}const f=ze(e),s=["#E7EBF0","#E7F3EC","#C4E0D0","#7FC0A0","#0E8A4F","#DC2626"][f];return t.jsxs("div",{className:"dcard"+(a?" tzr":"")+(r?" sel":""),style:{"--c":s},onClick:()=>{!a&&n&&n(e.id)},children:[t.jsxs("div",{className:"dh",children:[typeof e.score=="number"&&t.jsx("span",{className:"dsc",children:e.score}),t.jsx("span",{className:"dnm",title:e.name,children:e.name})]}),t.jsxs("div",{className:"dv",children:[t.jsx(jn,{o:e}),qe(e)&&t.jsx(kt,{o:e})]}),t.jsx("div",{className:"dmeta",children:[e.countryLabel,e.stage,e.sector].filter(Boolean).join(" · ").toUpperCase()}),(e.tagline||e.reasoning)&&t.jsx("div",{className:"ddesc",children:e.tagline||e.reasoning}),!a&&l.pipe&&f===3&&t.jsxs("div",{className:"dyn",children:[t.jsx("button",{type:"button",style:{"--c3":"#0A6B3D"},onClick:()=>d(e,!0),children:i.actYes}),t.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>d(e,!1),children:i.actNo})]}),!a&&e.memoUrl&&t.jsxs("button",{type:"button",className:"dmemo",onClick:()=>o({type:"memoConsole",id:e.id}),children:[i.actMemo," →"]})]})}function td(){const{t:e}=_(),[a,r]=m.useState(0);return m.useEffect(()=>{const n=window.setInterval(()=>r(i=>i+1),2400);return()=>window.clearInterval(n)},[]),t.jsxs("div",{className:"loadwait","aria-live":"polite",children:[t.jsxs("div",{className:"lw-top",children:[t.jsx("span",{className:"lw-dot"}),t.jsx("span",{className:"lw-msg",children:e.loadMsgs[a%e.loadMsgs.length]})]}),[0,1,2,3,4,5].map(n=>t.jsxs("div",{className:"lw-row",style:{"--d":`${n*.12}s`},children:[t.jsx("span",{className:"lw-c lw-c1"}),t.jsx("span",{className:"lw-c lw-c2"}),t.jsx("span",{className:"lw-c lw-c3"})]},n))]})}function ad({counts:e}){const{st:a,dispatch:r,t:n,lang:i}=_(),o=i==="en",l=s=>n.plabels[s]||"",d=[0,1,2,3,4,5,6,7].filter(s=>s!==a.ptab&&(e[s]||0)>0),c=d.includes(0)?0:d.sort((s,x)=>(e[x]||0)-(e[s]||0))[0];if(c===void 0)return t.jsx("div",{className:"void",children:n.emptyTab});const f=e[c]||0;return t.jsxs("div",{className:"void void-empty",children:[t.jsx("b",{children:o?`No “${l(a.ptab)}” for now.`:`0 ${l(a.ptab).toLowerCase().replace(/s$/,"")} pour l’instant.`}),t.jsx("span",{children:c===0?o?`${f} ${f>1?"files are":"file is"} waiting for your screening`:`${f} dossier${f>1?"s":""} attende${f>1?"nt":""} votre évaluation`:o?`${f} ${f>1?"files":"file"} in “${l(c)}”`:`${f} dossier${f>1?"s":""} dans « ${l(c)} »`}),t.jsxs("button",{type:"button",className:"abtn",onClick:()=>r({type:"ptab",tab:c}),children:[(o?"Open ":"Ouvrir ")+l(c)," →"]})]})}function nd(){var ot,Xe;const e=_(),{st:a,dispatch:r,t:n,caps:i,counts:o,scoped:l,scopedAll:d,markRow:c,lang:f,sessTally:s,data:x,dossiers:u,source:h,focusExtra:p,byId:b}=e,y=E=>i.lockRowsAfter!==null||h==="ops"?Number.MAX_SAFE_INTEGER:Lr,[g,j]=m.useState(new Set);m.useEffect(()=>{j(new Set)},[a.ptab,a.continent]);const[N,w]=m.useState(null);m.useEffect(()=>{w(null)},[a.ptab,a.continent]);const[C,T]=m.useState(!a.mapFolded);m.useEffect(()=>{if(a.mapFolded){T(!1);return}const E=document.getElementById("atl2-stage");if(!E){T(!1);return}const I=new IntersectionObserver(([Y])=>T(!!Y&&Y.isIntersecting),{root:null,rootMargin:"-120px 0px 0px 0px",threshold:0});return I.observe(E),()=>I.disconnect()},[a.mapFolded]);const A=a.mapFolded||!C,L=E=>j(I=>{const Y=new Set(I);return Y.has(E)?Y.delete(E):Y.add(E),Y}),z=h==="ops"||i.pipe,[S,O]=m.useState("all"),[U,M]=m.useState(null),[D,v]=m.useState(!1),q=m.useRef(!0);m.useEffect(()=>{if(q.current){q.current=!1;return}O("all"),v(!1)},[a.ptab,a.continent]),m.useEffect(()=>{if(!D)return;const E=I=>{var Y,ue;(ue=(Y=I.target)==null?void 0:Y.closest)!=null&&ue.call(Y,".atl2 .doable")||v(!1)};return document.addEventListener("click",E),()=>document.removeEventListener("click",E)},[D]);const V=Mr(),B=m.useMemo(()=>{var I;const E=new Map;for(const Y of os(((I=V==null?void 0:V.ed)==null?void 0:I.html)||""))E.has(Y.t)||E.set(Y.t,Y.html);return E},[(ot=V==null?void 0:V.ed)==null?void 0:ot.html]),$=m.useCallback(E=>{if(E.decryptHtml)return E.decryptHtml;if(!B.size)return;const I=(E.name||"").trim().toLowerCase();if(I.length<3)return;const Y=B.get(I);if(Y)return Y;for(const[ue,Ce]of B)if(ue.includes(I)||I.includes(ue))return Ce},[B]),K=m.useMemo(()=>{let E=hn(l,a.sort);return E=E.filter(I=>!rt(I)),S==="explore"?E=E.filter(gt):S==="eval"&&(E=E.filter(I=>!gt(I)&&!I.noCo)),E},[l,a.sort,S,$]),X=m.useMemo(()=>i.pipe?d.filter(E=>qe(E)&&di(E)):K.filter(E=>qe(E)&&!Ie(E)),[i.pipe,d,K]),te=X.length,[le,ae]=m.useState(!1),[ve,W]=m.useState(!1),ie=`atl2:sigmini:${((Xe=x.session)==null?void 0:Xe.token)||"home"}`,[fe,Ne]=m.useState(()=>{try{return localStorage.getItem(ie)==="1"}catch{return!1}}),ge=m.useMemo(()=>i.pipe?K:K.filter(E=>!Ie(E)&&!E.noCo),[K,i.pipe]),Z=h==="ops"?K.filter(gt).length:0,re=i.pipe?n.plabels[a.ptab].toLowerCase():h==="ops"?n.edLabel:a.filters.status==="retenu"?n.keptByStan:a.filters.status==="ecarte"?n.droppedByStan:n.toSend,Q=a.filters,G=[];if(Q.day)G.push({k:"day",lib:n.fDay(Q.day.slice(8,10)+"/"+Q.day.slice(5,7)),off:()=>r({type:"filters",patch:{day:"",win:"all"}})});else if(Q.win&&Q.win!=="all"){const E=["1","7","30"].indexOf(Q.win);E>=0&&G.push({k:"win",lib:n.dates[E],off:()=>r({type:"filters",patch:{win:"all"}})})}const ke=E=>E.length<=2?E.join(", "):`${E.length} ${n.fSelected}`;for(const E of["sector","country","engine"]){const I=Q[E];I&&I.length&&G.push({k:E,lib:ke(I),off:()=>r({type:"clearFacet",facet:E})})}Q.search&&G.push({k:"search",lib:"🔍 "+Q.search,off:()=>r({type:"filters",patch:{search:""}})});const ce=(E,I,Y="",ue=!1)=>t.jsxs("button",{type:"button","data-s":E,className:Y,"aria-sort":a.sort.key===E?a.sort.dir===1?"ascending":"descending":"none",style:ue?{justifyContent:"flex-end"}:void 0,onClick:()=>r({type:"sort",key:E}),children:[I,t.jsx("span",{className:"ar",children:a.sort.key===E&&a.sort.dir===1?"▴":"▾"})]},E),pe=m.useMemo(()=>{if(i.pipe||a.groupBy==="none")return null;const E=new Map;K.forEach(ue=>{const Ce=ue.engine||"?";E.has(Ce)||E.set(Ce,[]),E.get(Ce).push(ue)});const I={ma:0,fundraising:1,partenariats:2,produits:3,regul:4,marche:5,nominations:6,recrutements:7,evenements:8,listes:9,tribunes:10,media:11,edito:12},Y=Va([...E.keys()],f);return[...E.entries()].sort((ue,Ce)=>{const me=I[ue[0]]??10+Y.indexOf(ue[0]),ye=I[Ce[0]]??10+Y.indexOf(Ce[0]);return me-ye})},[K,i.pipe,a.groupBy,f]),oe=pe?pe.filter(([E])=>fa.has(E)).length:0,ne=(()=>{var I;return((I=(pe?pe.flatMap(([,Y])=>Y):K)[0])==null?void 0:I.id)??null})(),Te=m.useRef(!1),Le=m.useMemo(()=>u.find(rt)||null,[u]);m.useEffect(()=>{const E=()=>{Te.current=!0};return window.addEventListener("ppmap:reveal",E),window.addEventListener("ppmap:focus",E),()=>{window.removeEventListener("ppmap:reveal",E),window.removeEventListener("ppmap:focus",E)}},[]),m.useEffect(()=>{const E=()=>{Le&&r({type:"focus",id:Le.id})};return window.addEventListener("ppmap:edito",E),()=>window.removeEventListener("ppmap:edito",E)},[Le,r]),m.useEffect(()=>{if(!a.focusId)return;M(a.focusId);const E=window.setTimeout(()=>M(null),900);return()=>window.clearTimeout(E)},[a.focusId]),m.useEffect(()=>{if(z&&!(a.focusId&&(K.some(E=>E.id===a.focusId)||u.some(E=>E.id===a.focusId)))&&!p){if(h==="ops"&&Le){r({type:"focus",id:Le.id});return}ne&&r({type:"focus",id:ne})}},[z,a.focusId,K,ne,p,r,u,h,Le]),m.useEffect(()=>{if(!(!z||!a.focusId)&&S!=="all"&&!K.some(E=>E.id===a.focusId)&&u.some(E=>E.id===a.focusId)){if(Te.current){O("all");return}ne&&r({type:"focus",id:ne})}},[z,a.focusId,S,K,u,ne,r]),m.useEffect(()=>{if(!z||!a.focusId||!Te.current)return;Te.current=!1;const E=document.querySelector(".atl2.ops .row.sel, .atl2.ops .dcard.sel");if(!E)return;const I=co(),Y=E.getBoundingClientRect();Y.top>=I-2&&Y.bottom<=window.innerHeight-4||Wl(E)},[z,a.focusId]),m.useEffect(()=>{if(typeof window>"u")return;const E=document.querySelector(".atl2.ops .listhead"),I=document.querySelector(".atl2.ops");if(!E||!I)return;const Y=()=>I.style.setProperty("--listhead-h",`${E.offsetHeight}px`);Y();const ue=new ResizeObserver(Y);return ue.observe(E),()=>ue.disconnect()},[A,a.dens,a.mapFolded]);const Ae=m.useMemo(()=>{if(!z||!a.focusId)return null;const E=K.find(Y=>Y.id===a.focusId)||u.find(Y=>Y.id===a.focusId)||null;if(!E)return null;const I=$(E);return I&&I!==E.decryptHtml?{...E,decryptHtml:I}:E},[z,a.focusId,K,u,$]),He=i.lockRowsAfter;let Ve=0;const xe=(E,I)=>{let Y=a.shown[I]||y();return E.length-Y<=4&&(Y=E.length),E.slice(0,Y).map(me=>{const ye=He!==null&&Ve>=He;Ve++;const je=$(me),Ze=je&&je!==me.decryptHtml?{...me,decryptHtml:je}:me,Me=!z&&a.dens!=="maxi"&&(a.dens==="deplie"||(N?N==="open":!!je)),it=g.has(me.id)?!Me:Me,st=z?mt=>{Te.current=!0,r({type:"focus",id:mt});const We=b.get(mt);We&&(gt(We)?Kt(We):We.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:We.name,url:We.url||"",website:We.website||"",domain:We.domain||""}})))}:void 0;return a.dens==="maxi"?t.jsx(ed,{o:Ze,locked:ye,selected:z&&a.focusId===me.id,onSelect:st},me.id):t.jsx(Kl,{o:Ze,locked:ye,open:it,onToggle:()=>L(me.id),selected:z&&a.focusId===me.id,echo:U===me.id,onSelect:st},me.id)})},pt="list"+(a.dens==="maxi"?" maxi":a.dens==="ligne"||a.dens==="deplie"?" ligne":"")+(h==="ops"?" opsl":"")+(K.length?"":" list-empty"),Fe=t.jsxs(t.Fragment,{children:[pe?pe.map(([E,I])=>t.jsxs("div",{className:"grp",children:[t.jsxs("div",{className:"grp-h",children:[t.jsx("span",{className:"ic",children:vt(E)}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:E==="ma"?n.grpMa:E==="fundraising"?n.grpLev:fa.has(E)&&oe<=1?n.grpNews:E==="nominations"?n.grpNom:E==="media"?n.grpNewsOther:E==="recrutements"?n.grpHire:fa.has(E)?n.grpNews+" · "+Ue(E,f):Ue(E,f)}),t.jsx("div",{className:"s",children:n.grpCount(I.filter(Y=>!Ie(Y)).length,I.length)})]})]}),xe(I,E)]},E)):xe(K,"pt"+a.ptab),x.loading&&!u.length&&t.jsx(td,{}),!K.length&&!(x.loading&&!u.length)&&(i.pipe?t.jsx(ad,{counts:o}):t.jsx("div",{className:"void",children:n.emptyScope}))]});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"listhead"+(A?" mapoff":""),children:[t.jsxs("div",{className:"lh-top",children:[t.jsxs("span",{className:"main",children:[t.jsx("b",{children:K.length})," ",re]}),t.jsx("span",{className:"dot",children:"·"}),A&&t.jsx(oo,{variant:"compact",mapToggle:!!a.mapFolded}),t.jsxs("span",{className:"ctx",children:[A?i.pipe&&e.fund?e.fund:null:t.jsxs(t.Fragment,{children:[e.contName,i.pipe&&e.fund?" · "+e.fund:""]}),G.map(E=>t.jsxs("button",{type:"button",className:"fpuce",title:n.filterOff,onClick:I=>{I.stopPropagation(),E.off()},children:[E.lib,t.jsx("i",{children:"×"})]},E.k)),h==="ops"&&K.length>0&&!A&&t.jsxs("span",{className:"edsplit",children:[" — ","⚡ ",K.length-Z," ",n.zoomPulseEval,Z>0?t.jsxs(t.Fragment,{children:[" · 🔎 ",Z," ",n.zoomPulseExplore]}):null]})]}),a.filters.acquirer.trim()&&t.jsxs("span",{className:"acqchip",children:["🏢 ",n.acqOn(a.filters.acquirer),t.jsx("button",{type:"button",title:n.acqClear,onClick:()=>r({type:"acquirer",value:""}),children:"✕"})]}),i.showGroupBar&&t.jsxs("span",{className:"groupbar",children:[t.jsx("span",{className:"gl",children:n.groupBy}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>r({type:"groupBy",groupBy:"engine"}),children:n.groupEngine}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>r({type:"groupBy",groupBy:"none"}),children:n.groupNone})]}),a.pileMode&&t.jsx("button",{type:"button",className:"exitpile",onClick:()=>r({type:"pile",on:!1}),children:n.exitPile}),(i.showFunnel||h==="ops")&&t.jsx("span",{className:"dens",children:[["liste",n.densList],["ligne",n.densLigne],["maxi",n.densMaxi]].map(([E,I])=>t.jsxs("button",{type:"button","data-d":E,"aria-pressed":a.dens===E||E==="ligne"&&a.dens==="deplie",onClick:()=>r({type:"dens",dens:E}),children:[t.jsx("i",{children:t.jsx("em",{})}),t.jsx("b",{children:I})]},E))}),!z&&i.showFunnel&&a.dens!=="maxi"&&t.jsxs("span",{className:"foldall",children:[t.jsx("button",{type:"button","aria-pressed":N==="open",onClick:()=>{w("open"),j(new Set)},children:n.unfoldAll}),t.jsx("button",{type:"button","aria-pressed":N==="closed",onClick:()=>{w("closed"),j(new Set)},children:n.foldAllLbl})]}),(i.showFunnel||h==="ops")&&(()=>{var me;const E=l.filter(ye=>!rt(ye)),I=E.filter(ye=>!gt(ye)&&!ye.noCo).length,Y=E.filter(gt).length,ue=[["all",n.doAll],["eval",`${n.doEval}${I?` ${I}`:""}`],["explore",`${n.doExplore}${Y?` ${Y}`:""}`]],Ce=((me=ue.find(([ye])=>ye===S))==null?void 0:me[1])||n.doAll;return t.jsxs("span",{className:"doable",children:[t.jsxs("button",{type:"button",className:"dobtn","aria-expanded":D,onClick:()=>v(ye=>!ye),children:[Ce,t.jsx("i",{children:"▾"})]}),D&&t.jsx("div",{className:"dolist",children:ue.map(([ye,je])=>t.jsx("button",{type:"button","aria-pressed":S===ye,onClick:()=>{O(ye),v(!1)},children:je},ye))})]})})(),a.dens==="maxi"&&t.jsxs("label",{className:"sortsel",children:[t.jsx("span",{children:n.sortBy}),t.jsx("select",{value:a.sort.key,onChange:E=>r({type:"sort",key:E.target.value}),children:[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage],...i.pipe?[["crible",n.sortCrible],["memo",n.sortMemo],["score",n.sortScore]]:[]].map(([E,I])=>t.jsx("option",{value:E,children:I},E))})]}),i.showChain&&ge.length>0&&t.jsxs("span",{className:"chainwrap",children:[t.jsxs("button",{type:"button",className:"chain",title:n.chainHint,onClick:()=>r({type:"chainStart",queue:ge.map(E=>E.id)}),children:[t.jsx("span",{className:"b",children:"▶"})," ",i.pipe?n.browse(ge.length):n.chainAll(ge.length)]}),t.jsx("em",{className:"chainhint",children:n.chainHint})]})]}),A&&t.jsx("div",{className:"lh-tools",children:t.jsx(ro,{compact:!0})})]}),t.jsx(Hl,{}),te>0&&!a.filters.signalOnly&&!ve&&t.jsxs("div",{className:"sigstrip"+(fe?" mini":""),children:[t.jsxs("div",{className:"sg-h",children:[t.jsx("span",{className:"t",dangerouslySetInnerHTML:{__html:n.sigStrip(te)}}),t.jsx("span",{className:"s",children:n.sigStripSub}),t.jsx("span",{className:"sg-sp"}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{signalOnly:!0,signalEngines:[]}}),children:n.sigStripGo}),t.jsx("button",{type:"button",className:"sg-x","aria-expanded":!fe,title:fe?n.boxExpand:n.boxCollapse,onClick:()=>Ne(E=>{try{localStorage.setItem(ie,E?"0":"1")}catch{}return!E}),children:fe?"▸":"▾"}),t.jsx("button",{type:"button",className:"sg-x",title:n.tourClose,onClick:()=>W(!0),children:"×"})]}),t.jsxs("div",{className:"sg-c",children:[(le?X:X.slice(0,12)).map(E=>{const I=qe(E);return I?t.jsxs("button",{type:"button",className:"sg-chip",title:n.sigChipTitle(xn(I,f),xa(I,f)),onClick:()=>{c(E.id),r({type:"popup",id:E.id})},children:[t.jsx("b",{children:E.name}),t.jsxs("i",{children:[I.emoji," ",Wa(I,f)]}),t.jsx("em",{children:xa(I,f)})]},"sg-"+E.id):null}),!le&&X.length>12&&t.jsx("button",{type:"button",className:"sg-more",onClick:()=>ae(!0),children:n.sigStripMore(X.length-12)})]})]}),a.dens!=="maxi"&&!z&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),ce("country",n.colCountry),ce("name",n.colCompany),ce("amount",n.colAmount,"h-amt",!0),ce("stage",n.colStage,"h-stade"),ce("signal",n.colSignal,"h-sig"),i.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[ce("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),ce("memo",n.colMemo)]}),i.pipe&&ce("score",n.colScore,"h-sc",!0),t.jsx("span",{}),i.showThumbs&&t.jsx("span",{className:"h-thu",children:n.colThumbs})]}),z?t.jsxs("div",{className:"desk",children:[t.jsxs("div",{className:"desk-list",children:[a.dens==="liste"&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),ce("country",n.colCountry),ce("name",n.colCompany),ce("amount",n.colAmount,"h-amt",!0),ce("stage",n.colStage,"h-stade"),ce("signal",n.colSignal,"h-sig"),t.jsx("span",{})]}),t.jsx("div",{className:pt,children:Fe})]}),t.jsxs("aside",{className:"readpane"+(h==="ops"&&(Ae?rt(Ae):!p)?" is-edito":""),"aria-label":f==="fr"?"Dossier":"File",children:[h==="ops"&&Le&&t.jsx("button",{type:"button",className:"edito-go pane-edito","aria-pressed":a.focusId===Le.id,onClick:()=>r({type:"focus",id:Le.id}),children:n.doEdito}),i.pipe?t.jsx(Xl,{o:Ae}):t.jsx(po,{o:Ae,extra:Ae?null:p})]})]}):t.jsx("div",{className:pt,children:Fe}),(()=>{const E=pe||[["pt"+a.ptab,K]];let I=0,Y=0;for(const[Ce,me]of E){Y+=me.length;let ye=a.shown[Ce]||y();me.length-ye<=4&&(ye=me.length),I+=Math.min(me.length,ye)}const ue=Y-I;return ue<=0?null:t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>E.forEach(([Ce,me])=>r({type:"more",group:Ce,by:me.length,base:y()})),children:[t.jsx("span",{className:"more-label",children:n.more(ue,ue)}),t.jsx("span",{className:"more-meta",children:n.moreMeta(I,Y)})]})})(),i.showThumbs&&t.jsxs("p",{className:"learn",children:[n.learnLine,t.jsx("button",{type:"button",onClick:()=>r({type:"modal",modal:"crit"}),children:n.learnLink})]}),(s.kept>0||s.dropped>0)&&t.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:n.session(s.kept,s.dropped)}}),z&&h==="ops"&&a.dens!=="maxi"&&t.jsx(Vl,{on:!!pe,rev:(pe||[]).map(([E,I])=>E+I.length).join("|")})]})}function wr(e){let a=e==null?"":String(e);return/^[=+\-@\t]/.test(a)&&(a=`'${a}`),/[";\n\r]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}function rd(e,a){const r=pi(e);return a[{retenu:1,ana:2,pending:3,valide:4,ecarte:5}[r]??1]||""}function od(e,a){const n=[a.head.split("|").map(wr).join(";")];for(const i of e){const o=a.stageOf(i);n.push([i.name||"",rd(i,a.plabels),Qt(i)||i.verdict||"",typeof i.score=="number"?i.score:"",i.countryLabel||i.cc||"",i.sector||"",o?a.stageLabel(o.stage):"",i.contactName||"",i.contactEmail||"",i.memoUrl||"",(i.date||"").slice(0,10),(i.reasoning||"").replace(/\s+/g," ").trim().slice(0,280)].map(wr).join(";"))}return`\uFEFF${n.join(`\r
`)}`}function id(e){const a=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=`cibles_vue_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(n),n.click(),window.setTimeout(()=>{URL.revokeObjectURL(r);try{document.body.removeChild(n)}catch{}},400)}const sd=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function tt({k:e,v:a}){return a==null||a===""?null:t.jsxs("div",{className:"dsl",children:[t.jsx("span",{children:e}),t.jsx("b",{children:String(a)})]})}function ld({o:e,qa:a}){const{t:r,lang:n,fund:i}=_(),o=(e.cribleStatus||"").trim().toUpperCase()||(Qt(e)==="NO MATCH"?"NO MATCH":"MATCH"),l=ut(e),d=(a==null?void 0:a.blocs)||{},c=[[r.qaVP,d.value_prop],[r.qaProduct,d.produit],[r.qaModel,d.modele],[r.qaSummary,d.synthese]];return t.jsxs("article",{className:"dspage",children:[t.jsxs("header",{className:"dsh",children:[t.jsxs("div",{children:[t.jsx("b",{children:e.name}),e.tagline&&t.jsx("p",{children:e.tagline})]}),t.jsxs("span",{className:"dsv"+(o==="NO MATCH"?" out":""),children:[o==="NO MATCH"?r.vOut:r.vKept,l&&t.jsx("em",{children:l})]})]}),e.reasoning&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsWhy}),t.jsx("p",{className:"dstxt",children:e.reasoning})]}),t.jsxs("section",{className:"dsgrid",children:[t.jsx(tt,{k:r.cdSector,v:e.sector}),t.jsx(tt,{k:r.cdStage,v:e.stage}),t.jsx(tt,{k:r.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(tt,{k:r.cdSite,v:e.domain||e.website}),t.jsx(tt,{k:r.cdName,v:e.contactName}),t.jsx(tt,{k:r.cdEmail,v:e.contactEmail}),t.jsx(tt,{k:r.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(tt,{k:r.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(tt,{k:r.cdAngle,v:e.angle}),t.jsx(tt,{k:r.cdDetected,v:sd(e.date,n)})]}),c.some(([,f])=>f)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsAnalysis}),c.filter(([,f])=>f).map(([f,s])=>t.jsxs("div",{className:"dsb",children:[t.jsx("span",{children:f}),t.jsx("p",{children:s})]},f))]}),(e.ceoStatus||e.ceoNote)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsDecision}),e.ceoStatus&&t.jsx("p",{className:"dstxt",children:t.jsx("b",{children:e.ceoStatus})}),e.ceoNote&&t.jsxs("p",{className:"dstxt",children:["« ",e.ceoNote," »"]})]}),t.jsx("footer",{className:"dsf",children:r.dsFoot(i)})]})}function dd(){const{t:e,lang:a,token:r,scoped:n,fund:i,data:o,dispatch:l}=_(),[d,c]=m.useState({}),f=25,s=m.useMemo(()=>n.slice(0,f),[n]);m.useEffect(()=>{s.length&&ui(r,s.map(h=>h.name)).then(c)},[r,s]);const x=o.stats,u=h=>h.toLocaleString(a==="en"?"en-US":"fr-FR");return t.jsxs("div",{className:"dossier",children:[t.jsxs("div",{className:"dsbar",children:[t.jsx("b",{children:e.dsTitle(s.length)}),n.length>f&&t.jsx("span",{className:"mnote dim",children:e.dsCap(f,n.length)}),t.jsx("span",{className:"dssp"}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{l({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)},children:e.printBtn})]}),t.jsxs("div",{className:"dscover",children:[t.jsx("b",{children:i}),x&&typeof x.screened=="number"&&t.jsxs("p",{children:[u(x.screened)," ",e.funScreened(""),typeof x.kept=="number"&&t.jsxs(t.Fragment,{children:[" · ",u(x.kept)," ",e.covKept]}),typeof o.marketEstimate=="number"&&o.marketEstimate>0&&t.jsxs(t.Fragment,{children:[" · ",e.covOf(u(o.marketEstimate)),", ",Math.round(x.screened/o.marketEstimate*100)," %"]})]})]}),s.map(h=>t.jsx(ld,{o:h,qa:d[h.name]},h.id)),!s.length&&t.jsx("p",{className:"mnote",children:e.dsEmpty})]})}const cd=50;function Sn({label:e,onPreview:a,onTest:r,readOnly:n}){const{t:i}=_(),[o,l]=m.useState(null),[d,c]=m.useState(!1),[f,s]=m.useState(""),[x,u]=m.useState(0),[h,p]=m.useState(""),[b,y]=m.useState(!1),g=m.useRef(null);m.useEffect(()=>()=>{g.current&&window.clearInterval(g.current)},[]);const j=async w=>{c(!0),s("");const C=await a();if(c(!1),C.ok){l(C);return}if(C.busy){s(i.alertPreviewBusy);return}if(!w){s(i.alertPreviewFail);return}u(cd),g.current=window.setInterval(()=>{u(T=>T>1?T-1:(g.current&&window.clearInterval(g.current),j(!1),0))},1e3)},N=async()=>{if(n||b)return;y(!0),p("");const w=await r();y(!1),p(w.ok?i.alertTestOk(w.sentTo||""):w.error||i.actErr)};return t.jsxs("div",{className:"mailp",children:[t.jsxs("div",{className:"mailp-row",children:[t.jsx("button",{type:"button",className:"abtn",disabled:d||x>0,onClick:()=>{j(!0)},children:d?"…":e}),t.jsx("button",{type:"button",className:"abtn",disabled:n||b,onClick:()=>{N()},children:b?"…":i.alertTest})]}),x>0&&t.jsx("p",{className:"mnote",children:i.alertPreviewRetry(x)}),f&&t.jsx("p",{className:"mnote warn",children:f}),h&&t.jsx("p",{className:"mnote",children:h}),!h&&t.jsx("p",{className:"mnote dim",children:i.alertTestHint}),(o==null?void 0:o.ok)&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mnote",children:[t.jsx("b",{children:i.alertSubject})," ",o.subject]}),o.pending===0&&t.jsx("p",{className:"mnote warn",children:i.alertPreviewEmpty}),t.jsx("iframe",{className:"mailp-frame",sandbox:"",srcDoc:o.html,title:e})]})]})}const Ct="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function Be({title:e,icon:a,children:r,wide:n}){const{dispatch:i}=_();return qt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:o=>{o.target===o.currentTarget&&i({type:"modal",modal:null})},children:t.jsxs("div",{className:"mcard",style:n?{width:"min(760px,100%)"}:void 0,children:[t.jsxs("div",{className:"mh",children:[a&&t.jsx("span",{className:"no g",children:a}),t.jsx("h2",{children:e}),t.jsx("button",{type:"button",className:"x",onClick:()=>i({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"mb",children:r})]})})}),document.body)}function pd(){const{st:e}=_();switch(e.modal){case"chain":return t.jsx(md,{});case"space":return t.jsx(fd,{});case"alert":return t.jsx(xd,{});case"queue":return t.jsx(yd,{});case"export":return t.jsx(wd,{});case"plug":return t.jsx(Nd,{});case"recharge":return t.jsx(Ed,{});case"cover":return t.jsx(zd,{});case"dossier":return t.jsx(Cd,{});case"crit":return t.jsx(Ad,{});case"tuto":return t.jsx(Td,{});case"rdv":return t.jsx(ud,{});case"memoalert":return t.jsx(kd,{});default:return null}}function ud(){const{dispatch:e,fund:a,t:r}=_(),n=a||r.rdvCoFallback;return qt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:()=>e({type:"modal",modal:null}),children:t.jsxs("div",{className:"mcard rdvcard",onClick:i=>i.stopPropagation(),children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"no g",children:"📅"}),t.jsx("h2",{children:r.rdvHeading}),t.jsx("button",{type:"button",className:"x",onClick:()=>e({type:"modal",modal:null}),children:"×"})]}),t.jsxs("div",{className:"mb",children:[t.jsxs("p",{className:"mnote",children:[r.rdvSubBefore,t.jsx("a",{href:Or,children:bn}),r.rdvSubMid,t.jsx("a",{href:`mailto:${ba}`,children:ba})]}),t.jsx("div",{className:"rdv-unlocks",children:r.rdvUnlocks(n).map(([i,o],l)=>t.jsxs("div",{className:"rdv-u",children:[t.jsx("em",{children:r.rdvUnlockLabel(l+1)}),t.jsx("b",{children:i}),t.jsx("span",{children:o})]},i))}),t.jsx("div",{className:"rdv-emb",children:t.jsx(Oi,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0})})]})]})})}),document.body)}function md(){const{st:e,dispatch:a,byId:r,t:n,lang:i,mode:o,askEvaluate:l,evalBusy:d,caps:c,memoQueued:f,doAnalyse:s}=_(),x=o==="client",u=e.chain.queue.map(y=>r.get(y)).filter(y=>!!y),h=e.chain.idx,p=u[h],b=h>=u.length;return qt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",children:t.jsxs("div",{className:"fcard",children:[t.jsxs("div",{className:"fh",children:[t.jsx("span",{className:"c",children:b?n.finished:`${h+1} / ${u.length}`}),t.jsx("span",{className:"p",children:t.jsx("i",{style:{width:(b?100:h/Math.max(1,u.length)*100)+"%"}})}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"fb",children:b||!p?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🏁"}),t.jsx("div",{className:"t",children:n.chainDone}),t.jsx("div",{className:"s",children:n.chainDoneSub(u.length)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:p.name}),t.jsx("div",{className:"sub",children:[Mt(p.cc,i)||p.countryLabel,p.sector,p.stage,n.daysAgo(ct(p.date))].filter(Boolean).map(y=>String(y).toUpperCase()).join(" · ")}),t.jsxs("div",{className:"tags",children:[t.jsx("span",{className:"hi",children:Ue(p.engine,i).toUpperCase()}),typeof p.amountEur=="number"&&p.amountEur>0&&t.jsx("span",{children:Rt(p.amountEur,i)})]}),qe(p)&&t.jsxs("div",{style:{marginBottom:12},children:[t.jsx(kt,{o:p,lg:!0})," ",t.jsx(za,{o:p,src:!0})]}),(p.tagline||p.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:p.tagline||p.headline})]}),p.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.memo}),t.jsx("p",{className:"memo",children:p.reasoning})]}),x&&Ie(p)&&t.jsxs("div",{className:"vbox",style:{"--c":bt(p)==="retenu"?"var(--brand)":bt(p)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[t.jsx("span",{className:"vt",children:bt(p)==="retenu"?"✓ "+n.kept:bt(p)==="pending"?"📞 "+n.pending:"✗ "+n.dropped}),t.jsx("span",{className:"vd",children:p.reasoning||""})]})]})}),t.jsxs("div",{className:"ff",children:[!b&&p&&c.pipe&&ze(p)===1&&!f.has(p.id)?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{s(p),a({type:"chainNext"})},children:[t.jsx("span",{className:"fill"}),n.chainMemoGo]}):!b&&p&&!(x&&Ie(p))&&(p.noCo&&p.url?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{var y;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:p.url}}))}catch{}a({type:"modal",modal:null}),(y=document.querySelector(".atl2 .demand"))==null||y.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rowExtract]}):t.jsxs("button",{type:"button",className:"evalbtn"+(d?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:d,onClick:()=>{l(p)},children:[t.jsx("span",{className:"fill"}),n.launchEval]})),t.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(b?{type:"modal",modal:null}:{type:"chainNext"}),children:b?n.closeBtn:n.skip})]})]})})}),document.body)}function fd(){const{st:e,dispatch:a,dossiers:r,t:n,mode:i}=_(),o=i==="client",l=m.useMemo(()=>o?r.filter(x=>Ie(x)):[],[r,o]),d=m.useMemo(()=>hn(l.filter(x=>bt(x)==="retenu"),{key:"signal",dir:-1}),[l]),c=m.useMemo(()=>l.filter(x=>bt(x)==="ecarte"),[l]),f=e.spaceTab==="retenu"?d:c,s=e.spaceTab==="retenu"?"var(--brand)":"var(--red)";return t.jsxs(Be,{title:n.spaceTitle,children:[t.jsxs("div",{className:"sp-tabs",children:[t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":e.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",n.statusKeep.replace("✅ ","")," ",t.jsx("b",{children:d.length})]}),t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":e.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",n.statusDrop.replace("❌ ","")," ",t.jsx("b",{children:c.length})]})]}),f.length===0&&t.jsx("div",{className:"sp-empty",children:n.spEmpty}),f.slice(0,40).map(x=>t.jsxs("div",{className:"sp-row",children:[t.jsx("span",{className:"sc",style:{"--c":s},children:typeof x.score=="number"&&x.score>0?x.score:"—"}),t.jsxs("span",{children:[t.jsx("div",{className:"nm",children:x.name}),t.jsx("div",{className:"rr",children:x.reasoning||x.tagline||""})]})]},x.id)),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:n.spNote}})]})}function xd(){const{mode:e}=_();return e==="client"||e==="apercu"?t.jsx(hd,{}):t.jsx(vd,{})}function hd(){const{t:e,token:a,flash:r,flashErr:n,mode:i}=_(),[o,l]=m.useState("d"),d=i!=="client";return t.jsxs(Be,{title:e.alertTitle,icon:"🔔",children:[t.jsxs("div",{className:"ntabs",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":o==="d",className:o==="d"?"on":"",onClick:()=>l("d"),children:e.alertTabDaily}),t.jsx("button",{type:"button",role:"tab","aria-selected":o==="w",className:o==="w"?"on":"",onClick:()=>l("w"),children:e.alertTabWeekly}),t.jsx("button",{type:"button",role:"tab","aria-selected":o==="m",className:o==="m"?"on":"",onClick:()=>l("m"),children:e.alertTabMarket})]}),o==="d"&&t.jsx(gd,{t:e,token:a,readOnly:d,flash:r,flashErr:n}),o==="w"&&t.jsx(bd,{t:e,token:a,readOnly:d,flash:r,flashErr:n}),o==="m"&&t.jsx(uo,{})]})}function gd({t:e,token:a,readOnly:r,flash:n,flashErr:i}){const[o,l]=m.useState(null),[d,c]=m.useState(!1),[f,s]=m.useState(0);m.useEffect(()=>{let p=!0;return c(!1),In(a).then(b=>{p&&(b?l(b):c(!0))}),()=>{p=!1}},[a,f]);const x=p=>{r||In(a,p).then(b=>{if(!b){i(e.actErr);return}l(b),b.throttled?i(e.alertThrottled):n(e.alertSaved)})};if(d)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>s(p=>p+1),children:e.retry})]});if(!o)return t.jsx("div",{className:"sp-empty",children:"…"});const u=p=>!o.sections||o.sections.includes(p),h=p=>{const b=o.sections||e.alertSec.map(([y])=>y);x({sections:u(p)?b.filter(y=>y!==p):[...b,p]})};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qrow",children:[t.jsxs("span",{children:[t.jsx("b",{children:e.alertDaily}),t.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:e.alertDailyHint})]}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":o.enabled===!0,disabled:r,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>x({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertHour}),t.jsxs("span",{className:"qset",children:[t.jsx("button",{type:"button",onClick:()=>x({hour:Math.max(6,(o.hour??7)-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[o.hour??7," h"]}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.min(21,(o.hour??7)+1)}),disabled:r,children:"＋"})]})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertDays}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("button",{type:"button",className:"abtn",disabled:r,style:o.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>x({days:"weekdays"}),children:e.alertWeekdays}),t.jsx("button",{type:"button",className:"abtn",disabled:r,style:o.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>x({days:"daily"}),children:e.alertEveryday})]})]}),t.jsx("div",{className:"qsec ok",children:e.alertSections}),t.jsx("div",{className:"secl",children:e.alertSec.map(([p,b])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:u(p),disabled:r,onChange:()=>h(p)}),t.jsxs("span",{children:[b,p==="market"&&t.jsxs("i",{children:[" ",e.alertSecSlow]})]})]},p))}),t.jsx("p",{className:"mnote dim",children:e.alertSecNote}),t.jsx(Sn,{label:e.alertPreview,readOnly:r,onPreview:()=>ki(a),onTest:()=>wi(a)}),o.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),o.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${e.updatedAt(o.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function bd({t:e,token:a,readOnly:r,flash:n,flashErr:i}){const[o,l]=m.useState(null),[d,c]=m.useState(!1),[f,s]=m.useState(0);m.useEffect(()=>{let p=!0;return c(!1),Bn(a).then(b=>{p&&(b?l(b):c(!0))}),()=>{p=!1}},[a,f]);const x=p=>{r||Bn(a,p).then(b=>{if(!b){i(e.actErr);return}l(b),n(e.alertSaved)})};if(d)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>s(p=>p+1),children:e.retry})]});if(!o)return t.jsx("div",{className:"sp-empty",children:"…"});const u=o.dow??0,h=o.hour??16;return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"lead2",children:e.alertWeeklySub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.alertWeeklyOn})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":o.enabled===!0,disabled:r,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>x({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertWeeklyWhen}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("select",{value:u,disabled:r,onChange:p=>x({dow:Number(p.target.value)}),children:e.alertDow.map((p,b)=>t.jsx("option",{value:b,children:p},p))}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.max(6,h-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[h," h"]}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.min(21,h+1)}),disabled:r,children:"＋"})]})]}),t.jsx(Sn,{label:e.alertPreviewWeekly,readOnly:r,onPreview:()=>Ni(a),onTest:()=>ji(a)}),o.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),o.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${e.updatedAt(o.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function uo(){const{st:e,t:a,lang:r,scoped:n,contName:i,email:o}=_(),[l,d]=m.useState(o||""),[c,f]=m.useState(!1),[s,x]=m.useState(!1);m.useEffect(()=>{o&&d(o)},[o]);const u=e.filters,h=m.useMemo(()=>n.filter(g=>qe(g)).length,[n]),p=u.win==="1"?0:u.win==="7"?1:u.win==="30"?2:3,b=async()=>{if(!(!/.+@.+\..+/.test(l)||s)){x(!0);try{await fetch(`${pn}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.trim(),sectors:u.sector,countries:u.country,source:o?"atelier2-client":"atelier2",website:""})}),f(!0)}finally{x(!1)}}},y=[[a.amRows.continent,i],[a.amRows.since,a.amSince[p]],[a.amRows.signal,u.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,u.engine.length?u.engine.map(g=>Ue(g,r)).join(", "):a.amAllEngines],[a.amRows.sectors,u.sector.length?u.sector.join(", "):a.amAllSectors],[a.amRows.countries,u.country.length?u.country.map(g=>Mt(g,r)||g).join(", "):a.amAllCountries],[a.amRows.stages,u.stage.length?u.stage.join(", "):a.amAllStages]];return c?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🔔"}),t.jsx("div",{className:"t",children:a.amOk}),t.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(l)}})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"crit",children:y.map(([g,j])=>t.jsxs("div",{className:"r",children:[t.jsx("span",{className:"k",children:g}),t.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:j}})]},g))}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:l,readOnly:!!o,onChange:g=>d(g.target.value),onKeyDown:g=>{g.key==="Enter"&&b()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(s?" loading":""),style:{padding:"12px 18px"},onClick:()=>void b(),children:[t.jsx("span",{className:"fill"}),a.amActivate]})]}),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(n.length,h)}}),t.jsx("p",{className:"mnote",children:a.amHonest})]})}function vd(){const{t:e}=_();return t.jsx(Be,{title:e.alertTitle,icon:"🔔",children:t.jsx(uo,{})})}function yd(){var L,z;const{t:e,token:a,fund:r,mode:n,dossiers:i,doAnalyse:o,memoQueued:l,caps:d,dispatch:c,liveMemos:f}=_(),[s,x]=m.useState(null),[u,h]=m.useState([]),[p,b]=m.useState(0),y=n==="client",g=m.useMemo(()=>{const S=new Map;return i.forEach(O=>{const U=(O.name||"").trim().toLowerCase();U&&!S.has(U)&&S.set(U,O)}),S},[i]);m.useEffect(()=>{let S=!0;return(async()=>{const[O,U]=await Promise.all([mn(r),Er(a)]);S&&(O&&x(O),h(U))})(),()=>{S=!1}},[a,r,p]);const j=(s==null?void 0:s.per_day)??0,N=((L=s==null?void 0:s.analyzed_today)==null?void 0:L.length)??0,w=s==null?void 0:s.offre,C=(s==null?void 0:s.pool_meta)||[],T=m.useMemo(()=>{const S=new Map;for(const O of(s==null?void 0:s.scheduled)||[])for(const U of O.names||[])S.has(U)||S.set(U,{label:O.day_label,date:O.date});return S},[s==null?void 0:s.scheduled]),A=(s==null?void 0:s.in_progress)||[];return t.jsxs(Be,{title:e.queueTitle,wide:!0,children:[w&&t.jsxs("div",{className:"qoffre"+(w.en_retard?" late":""),children:[t.jsx("span",{className:"ol",children:e.qOffer}),t.jsx("b",{children:w.libelle}),t.jsxs("span",{className:"od",children:[e.qDelay," ",t.jsx("b",{children:w.delai})]}),t.jsx("span",{className:"osp"}),w.rythme>0?t.jsx("span",{className:"or",children:e.qRate(w.rythme)}):w.manuel_par_jour?t.jsx("span",{className:"or",children:e.qManual(w.manuel_par_jour)}):t.jsx("span",{className:"or dim",children:e.qPaused})]}),t.jsxs("div",{className:"qbox",children:[t.jsx("div",{className:"qhead",children:t.jsx("b",{dangerouslySetInnerHTML:{__html:e.queueDone(N,N+(((z=s==null?void 0:s.pool_order)==null?void 0:z.length)??0))}})}),w&&t.jsxs("div",{className:"qeta",children:[w.file===0?e.qEtaDone:w.rythme<=0?e.qEtaPaused:e.qEta(w.file,w.rythme,w.jours_restants),w.en_retard&&t.jsxs("em",{children:[" ",e.qLate(w.delai,w.plafond)]})]}),t.jsxs("div",{className:"qrate",children:[e.covRate," — ",t.jsx("b",{children:e.covRateNow(j)}),(w==null?void 0:w.reglage_manuel)&&t.jsxs("span",{className:"dim",children:[" · ",e.qManualSet]})]})]}),(A.length>0||f.items.some(S=>S.status==="boot"||S.status==="running"))&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec run",children:["⌛ ",e.qRunning]}),t.jsxs("div",{className:"qrows",children:[f.items.filter(S=>S.status==="boot"||S.status==="running"||S.status==="error").map(S=>t.jsxs("div",{className:"qr2 qfl",children:[t.jsx("b",{children:S.name}),t.jsx("span",{className:"qd",children:S.memoType||""}),t.jsx(Ht,{item:S,serverOff:f.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd})]},"live-"+S.name)),A.filter(S=>!f.liveOf(S.name)).map(S=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:S.name}),t.jsxs("span",{className:"qd",children:[S.memo_type||"",S.age_min?` · ${Math.round(S.age_min)} min`:""]}),t.jsx("span",{className:"qt",children:S.state||""})]},"ip-"+S.name))]})]}),u.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec ok",children:["⏳ ",e.queueToday]}),t.jsx("div",{className:"qrows",children:u.map(S=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:S.company}),t.jsxs("span",{className:"qd",children:[S.memo_type,typeof S.est_min=="number"?` · ~${S.est_min} min`:""]}),t.jsx("span",{className:"qt",children:S.status}),S.url&&t.jsx("a",{className:"qgo",href:S.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.actMemo}),y&&S.status==="error"&&t.jsx("button",{type:"button",className:"qgo an",onClick:()=>{Dn(a,S.company,"retry").then(()=>b(O=>O+1))},children:e.queueRetry}),y&&S.status!=="done"&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{Dn(a,S.company,"delete").then(()=>b(O=>O+1))},children:e.queueDelete})]},S.company))})]}),t.jsxs("div",{className:"qsec todo",children:["⚡ ",e.qUpNext(C.length)]}),t.jsx("div",{className:"qhedge",children:e.qHedge}),t.jsxs("div",{className:"qrows qfile",children:[C.length===0&&t.jsx("div",{className:"sp-empty",children:e.queueEmpty}),C.map((S,O)=>{const U=T.get(S.name),M=g.get((S.name||"").trim().toLowerCase()),D=f.liveOf(S.name),v=!!(M&&l.has(M.id))||!!(D&&(D.status==="boot"||D.status==="running")),q=!!(M&&ze(M)===1&&!M.memoUrl)&&!D;return t.jsxs("div",{className:"qr2 qfl",children:[t.jsxs("span",{className:"qn2",children:["#",O+1]}),U?t.jsx("span",{className:"qwhen"+(U.label==="demain"?" soon":""),children:U.label}):t.jsx("span",{className:"qwhen later",children:e.qLater}),t.jsx("b",{children:S.name}),S.fresh&&t.jsx("span",{className:"qfresh",children:e.qFresh}),typeof S.score=="number"&&t.jsx("span",{className:"qs2",children:S.score}),D&&(D.status==="boot"||D.status==="running")&&t.jsx(Ht,{item:D,serverOff:f.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),q&&(d.lockActions||!y?t.jsx("button",{type:"button",className:"qgo an",onClick:()=>c({type:"modal",modal:"rdv"}),children:e.actLocked}):t.jsx("button",{type:"button",className:"qgo an",disabled:v,onClick:()=>{o(M),b(V=>V+1)},children:v?e.actAnalyseQueued:e.actAnalyse})),S.excerpt&&t.jsx("span",{className:"qex",children:S.excerpt})]},S.name+":"+O)})]}),t.jsxs("div",{className:"qsec",children:["🧭 ",e.qVerdictsT]}),t.jsx("ul",{className:"qverd",children:e.qVerdicts.map(([S,O])=>t.jsxs("li",{children:[t.jsx("b",{children:S})," — ",O]},S))})]})}function wd(){const{t:e,token:a,flash:r,scoped:n,caps:i,stageOf:o,dispatch:l}=_(),d=`${Ct}/cibles/list.csv?token=${a}`,c=`${Ct}/cibles/list.json?token=${a}`,f=`${Ct}/cibles/export.xlsx?token=${a}&scope=full`,s=`=IMPORTDATA("${d}")`,x=y=>{var g;(g=navigator.clipboard)==null||g.writeText(y).then(()=>r(e.exportCopied))},u=[{def:e.exportCsv,value:d,href:d},{def:e.exportSheet,value:s},{def:e.exportLive,value:c,href:c},{def:e.exportXlsx,value:f,href:f}],h=!i.lockActions&&n.length>0,p=()=>{id(od(n,{plabels:e.plabels,head:e.exportViewHead,stageOf:o,stageLabel:y=>(e.stg.find(([g])=>g===y)||["",""])[1]})),r(e.exportViewDone(n.length))},b=()=>{l({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)};return t.jsxs(Be,{title:e.exportTitle,icon:"📥",children:[t.jsx("p",{className:"lead2",children:e.exportLead}),h&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🖨️"}),t.jsxs("div",{children:[t.jsx("b",{children:e.printTitle}),t.jsx("p",{children:e.printDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb",onClick:b,children:e.printBtn})]})}),h&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🗂"}),t.jsxs("div",{children:[t.jsx("b",{children:e.dsBtn}),t.jsx("p",{children:e.dsHint})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>l({type:"modal",modal:"dossier"}),children:e.exportViewBtn})]})}),h&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"📄"}),t.jsxs("div",{children:[t.jsx("b",{children:e.exportViewTitle}),t.jsx("p",{children:e.exportViewDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb pri",onClick:p,children:e.exportViewBtn})]})}),t.jsx("div",{className:"expl",children:u.map(({def:y,value:g,href:j})=>t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:y[0]}),t.jsxs("div",{children:[t.jsx("b",{children:y[1]}),t.jsx("p",{children:y[2]})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>x(g),children:e.exportCopy}),j&&t.jsx("a",{className:"exb",href:j,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.exportOpen})]},y[1]))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.exportKeyWarning})]})}function kd(){const{t:e,token:a,flash:r,flashErr:n,mode:i}=_(),o=i!=="client",[l,d]=m.useState(null),[c,f]=m.useState(!1),[s,x]=m.useState(0),[u,h]=m.useState(!1);m.useEffect(()=>{let g=!0;return f(!1),Pn(a).then(j=>{g&&(j?d(j):f(!0))}),()=>{g=!1}},[a,s]);const p=()=>(l==null?void 0:l.sections)||{swot:!0,action:!0,synergies:!0,quadrant:!0,verdict:!0},b=g=>{if(o||!l)return;const j={enabled:g.enabled??!!l.enabled,email:g.email??(l.email||""),sections:g.sections??p()};h(!0),Pn(a,j).then(N=>{if(h(!1),!N){n(e.memoAlertErr);return}d(N),r(e.memoAlertSaved)})};if(c)return t.jsx(Be,{title:e.memoAlertTitle,icon:"🔔",children:t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>x(g=>g+1),children:e.retry})]})});if(!l)return t.jsx(Be,{title:e.memoAlertTitle,icon:"🔔",children:t.jsx("div",{className:"sp-empty",children:"…"})});const y=p();return t.jsxs(Be,{title:e.memoAlertTitle,icon:"🔔",children:[t.jsx("p",{className:"lead2",children:e.memoAlertSub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.memoAlertToggle})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":l.enabled===!0,disabled:o||u,style:l.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>b({enabled:!l.enabled}),children:l.enabled?"ON":"OFF"})})]}),t.jsx(jd,{value:l.email||"",readOnly:o||u,label:e.memoAlertEmail,okLabel:e.csNoteOk,onSave:g=>b({email:g})}),t.jsx("div",{className:"qsec ok",children:e.memoAlertSections}),t.jsx("div",{className:"secl",children:e.memoAlertSec.map(([g,j])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:!!y[g],disabled:o||u,onChange:()=>b({sections:{...y,[g]:!y[g]}})}),t.jsx("span",{children:j})]},g))}),t.jsx(Sn,{label:e.memoAlertPreview,readOnly:o,onPreview:()=>fi(a,y),onTest:()=>mi(a,y)})]})}function jd({value:e,readOnly:a,label:r,okLabel:n,onSave:i}){const[o,l]=m.useState(e);m.useEffect(()=>{l(e)},[e]);const d=o.trim()!==e.trim(),c=!o.trim()||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(o.trim());return t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:r}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("input",{type:"email",className:"mailin",value:o,disabled:a,onChange:f=>l(f.target.value),onKeyDown:f=>{f.key==="Enter"&&d&&c&&i(o.trim())}}),t.jsx("button",{type:"button",className:"abtn",disabled:a||!d||!c,onClick:()=>i(o.trim()),children:n})]})]})}function Nd(){const{t:e,token:a,flash:r,flashErr:n,canWrite:i}=_(),[o,l]=m.useState(null),[d,c]=m.useState(!1),[f,s]=m.useState(null),[x,u]=m.useState(""),[h,p]=m.useState(0);m.useEffect(()=>{let N=!0;return c(!1),Ya(a).then(w=>{N&&(w?l({configured:w.configured,url_hint:w.url_hint}):c(!0))}),gi(a).then(w=>{N&&s(w)}),()=>{N=!1}},[a,h]);const b=(N,w)=>{i&&Ya(a,N).then(C=>{if(!C||C.ok===!1){n(e.actErr);return}N.test&&C.sent===!1?n(e.plugTestThrottled):r(w),p(T=>T+1)})},y='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}',g=JSON.stringify({event:"status",company:"Aitona",status:"Validée",note:"très bon fit — introduction chaude possible",score:90,website:"https://aitona.com",memo_url:"https://analysis.proplace.co/…"},null,2),j=`curl -X POST ${Ct}/cibles/evaluate \\
  -H "Content-Type: application/json" \\
  -d '{"token":"${a}","q":"nom ou URL de la société"}'`;return t.jsxs(Be,{title:e.plugTitle,icon:"🔌",wide:!0,children:[f&&t.jsx("p",{className:"mnote"+(f.enabled?" warn":""),children:f.enabled?e.plugAutoOn(f.destination||"webhook"):e.plugAutoOff}),d?t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>p(N=>N+1),children:e.retry})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugCrm}),t.jsx("p",{className:"mnote",children:e.plugCrmHint}),t.jsxs("ol",{className:"plughow",children:[t.jsx("li",{children:e.plugHow1}),t.jsx("li",{children:e.plugHow2}),t.jsx("li",{children:e.plugHow3})]}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"url",maxLength:500,placeholder:e.plugUrlPh,value:x,disabled:!i,onChange:N=>u(N.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:!i||!x.trim(),onClick:()=>b({url:x.trim()},e.plugSaved),children:e.plugSave})]}),(o==null?void 0:o.configured)&&t.jsxs("p",{className:"mnote",children:["✓ ",o.url_hint||""," ",t.jsx("button",{type:"button",className:"lk",disabled:!i,onClick:()=>b({test:!0},e.plugTested),children:e.plugTest})," · ",t.jsx("button",{type:"button",className:"lk",disabled:!i,onClick:()=>b({remove:!0},e.plugRemoved),children:e.plugRemove})]}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugExT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:g}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var N;(N=navigator.clipboard)==null||N.writeText(g).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugExResult})]}),t.jsx(Sd,{}),t.jsx("div",{className:"qsec ok",children:e.plugApiT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:j}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var N;(N=navigator.clipboard)==null||N.writeText(j).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote dim",children:e.plugQuota}),t.jsx("div",{className:"qsec ok",children:e.plugMcp}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:y}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var N;(N=navigator.clipboard)==null||N.writeText(y).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugFeeds}),t.jsx("p",{className:"mnote warn",children:e.plugTokenNote}),t.jsx("p",{className:"mnote dim",children:t.jsx("a",{href:"https://proplace.co/api/",target:"_blank",rel:"noopener noreferrer",children:e.plugDoc})})]})]})}function Sd(){const{t:e,token:a,lang:r}=_(),[n,i]=m.useState("valides"),[o,l]=m.useState(!1),[d,c]=m.useState(null),[f,s]=m.useState(null),[x,u]=m.useState(!1),[h,p]=m.useState(!1),[b,y]=m.useState(null),[g,j]=m.useState(null),[N,w]=m.useState(null),C=`atl2:bulk:${a}:${n}`;m.useEffect(()=>{Ya(a).then(U=>{j(U&&U.configured?U.url_hint||"webhook":null)})},[a]),m.useEffect(()=>{c(null),s(null),u(!1),y(null);try{const U=JSON.parse(localStorage.getItem(C)||"null");w(U&&Date.now()-Date.parse(U.t)<24*3600*1e3?U:null)}catch{w(null)}},[C]);const T=async()=>{l(!0),u(!1),y(null);const U=await vi(a,n);c(U),s(U.ok?n:null),l(!1)},A=m.useRef(!1),L=async()=>{if(A.current)return;A.current=!0,p(!0);const U=`${a}:${n}:${Date.now()}:${Math.random().toString(36).slice(2,10)}`;let M;try{M=await yi(a,n,"webhook",void 0,U)}finally{A.current=!1}if(p(!1),u(!1),y(M),M.ok&&(M.pushed||0)>0){const D={t:new Date().toISOString(),n:M.pushed||0};w(D);try{localStorage.setItem(C,JSON.stringify(D))}catch{}}},z=d!=null&&d.ok&&d.ready||0,S=!!(d!=null&&d.ok)&&f===n&&z>0&&!!g&&!N,O=N?new Date(N.t).toLocaleString(r==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugBulk}),t.jsx("p",{className:"mnote",children:e.plugBulkHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("select",{value:n,onChange:U=>i(U.target.value),children:e.plugBulkTabs.map(([U,M])=>t.jsx("option",{value:U,children:M},U))}),t.jsx("button",{type:"button",className:"abtn",disabled:o,onClick:()=>{T()},children:o?"…":e.plugBulkPreview})]}),d&&(d.ok?t.jsx("p",{className:"mnote",children:e.plugBulkResult(d.ready||0,d.linkedinReady||0,(d.noContact||[]).length)}):t.jsx("p",{className:"mnote warn",children:e.actErr})),!!(d!=null&&d.ok)&&t.jsx("p",{className:"mnote dim",children:e.bulkScope}),N&&t.jsx("p",{className:"mnote",children:e.bulkLocked(O,N.n)}),!N&&!!(d!=null&&d.ok)&&!g&&t.jsx("p",{className:"mnote warn",children:e.bulkNoDest}),!N&&!d&&t.jsx("p",{className:"mnote dim",children:e.bulkPreviewFirst}),S&&!x&&t.jsx("button",{type:"button",className:"abtn dgr",onClick:()=>u(!0),children:e.bulkArm}),S&&x&&t.jsxs("div",{className:"bulkc",children:[t.jsx("p",{className:"mnote warn",children:e.bulkWarn(z,g||"")}),t.jsx("button",{type:"button",className:"abtn dgr",disabled:h,onClick:()=>{L()},children:h?e.bulkSending:e.bulkConfirm(g||"")}),t.jsx("button",{type:"button",className:"abtn",disabled:h,onClick:()=>u(!1),children:e.bulkCancel})]}),b&&(b.ok?b.replayed?t.jsx("p",{className:"mnote",children:b.pending?e.bulkPending:e.bulkReplayed}):(b.pushed||0)>0?t.jsx("p",{className:"mnote",children:e.bulkDone(b.pushed||0,b.linkedinReady||0,b.skippedNoEmail||0)}):t.jsx("p",{className:"mnote warn",children:e.bulkNone}):t.jsx("p",{className:"mnote warn",children:b.error||e.actErr}))]})}function Ed(){const{t:e,data:a,lang:r}=_(),n=a.credits,i=a.email,o=async l=>{if(!i)return;const d=window.location.href.split("?")[0];try{const f=await(await fetch(`${pn}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,lookup_key:l,success_url:d+"?credits=ok",cancel_url:d+"?credits=cancel"})})).json();f.url&&(window.location.href=f.url)}catch{}};return t.jsxs(Be,{title:e.rechargeTitle,icon:"⚡",children:[n&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:e.rechargeHint(n.daily_grant)}}),n.costs&&t.jsxs("p",{className:"mnote",children:["① ",e.creditsCost(n.costs.instant)," · ② ",e.creditsCost(n.costs.detailed)]}),t.jsx("div",{className:"packs",children:(n.packs||[]).map(l=>t.jsxs("div",{className:"pack",children:[t.jsx("div",{className:"pt",children:e.rechargeUnit(l.credits,l.price_eur)}),t.jsx("button",{type:"button",onClick:()=>{o(l.lookup_key)},children:e.rechargeBuy})]},l.lookup_key))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.rechargeNote})]}),!n&&t.jsx("div",{className:"sp-empty",children:e.creditsNone})]})}function Cd(){const{t:e}=_();return t.jsx(Be,{title:e.dsBtn,icon:"🗂",wide:!0,children:t.jsx(dd,{})})}function zd(){const{t:e,lang:a,data:r,dossiers:n,token:i,fund:o,canWrite:l,flash:d}=_(),[c,f]=m.useState(null),[s,x]=m.useState(!1);m.useEffect(()=>{let z=!0;if(o)return mn(o).then(S=>{z&&S&&typeof S.per_day=="number"&&f(S.per_day)}),()=>{z=!1}},[o]);const[u,h]=m.useState(null);m.useEffect(()=>{if(!i)return;let z=!0;return hi(i).then(S=>{z&&h(S)}),()=>{z=!1}},[i]);const p=r.stats,b=typeof(p==null?void 0:p.screened)=="number"?p.screened:n.filter(z=>z.kind==="target"&&Ie(z)).length,y=r.marketEstimate||0,g=y>0?Math.min(100,Math.round(b/y*100)):null,j=(p==null?void 0:p.window_days)||30,N=b>0?b/j:0,w=y>0?Math.max(0,y-b):0,T=y>0&&N>0&&b>=100?Math.round(w/N):null,A=z=>Math.round(z).toLocaleString(a==="en"?"en-US":"fr-FR"),L=z=>{s||!l||(x(!0),bi(i,z).then(S=>{if(x(!1),S===null){d(e.actErr);return}f(S),d(e.alertSaved)}))};return t.jsxs(Be,{title:e.coverTitle,icon:"🌍",children:[t.jsxs("div",{className:"covg",children:[t.jsx("b",{children:e.covScreened(A(b))}),y>0&&t.jsx("span",{children:e.covOf(A(y))})]}),g!==null?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"covbar",children:[t.jsx("i",{style:{width:g+"%"}}),t.jsxs("em",{children:[g," %"]})]}),T!==null&&t.jsx("p",{className:"mnote",children:e.covEta(T)})]}):t.jsx("p",{className:"mnote dim",children:e.covNoEst}),N>=1&&t.jsx("p",{className:"mnote",children:e.covPace(A(N))}),(u==null?void 0:u.ok)&&(u.detail||[]).length>0&&t.jsxs("div",{className:"covcalc",children:[t.jsx("h3",{children:e.covHowT}),u.perimetre&&t.jsx("p",{className:"mnote",children:u.perimetre}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"cc",children:e.covColCode}),t.jsx("th",{className:"cn",children:e.covColN}),t.jsx("th",{className:"cs",children:e.covColSource})]})}),t.jsxs("tbody",{children:[(u.detail||[]).map((z,S)=>t.jsxs("tr",{className:z.n?"":"zero",children:[t.jsxs("td",{className:"cc",children:[z.code,z.geo?` · ${z.geo}`:" · FR"]}),t.jsx("td",{className:"cn",children:typeof z.n=="number"?A(z.n):"—"}),t.jsxs("td",{className:"cs",children:[t.jsx("span",{children:z.source}),z.elargi&&t.jsx("em",{children:e.covWide(String(z.demande||""))}),z.erreur&&t.jsx("em",{children:e.covMissing})]})]},S)),t.jsxs("tr",{className:"tot",children:[t.jsx("td",{className:"cc",children:e.covTotal}),t.jsx("td",{className:"cn",children:t.jsx("b",{children:A(u.total||y)})}),t.jsx("td",{className:"cs"})]})]})]}),(u.rejetes||[]).length>0&&t.jsx("p",{className:"mnote dim",children:e.covRejected((u.rejetes||[]).join(", "))}),t.jsxs("p",{className:"mnote dim",children:[(u.sources||[]).join(" · "),u.calcule_le?` — ${e.covComputedAt(u.calcule_le.slice(0,10).split("-").reverse().join("/"))}`:""]})]}),p&&t.jsxs("div",{className:"covf",children:[typeof p.kept=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:A(p.kept)})," ",e.covKept]}),typeof p.analyzed=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:A(p.analyzed)})," ",e.covAna]}),typeof p.shown=="number"&&p.shown!==p.kept&&t.jsxs("span",{children:[t.jsx("b",{children:A(p.shown)})," ",e.funShown]})]}),l&&c!==null&&t.jsxs("div",{className:"covr",children:[t.jsxs("div",{className:"covrh",children:[t.jsx("span",{children:e.covRate}),t.jsx("b",{children:e.covRateNow(c)})]}),t.jsx("div",{className:"covrb",children:[0,1,2,3,5,10].map(z=>t.jsx("button",{type:"button",className:c===z?"on":"",disabled:s,onClick:()=>L(z),children:z===0?"⏸":z},z))}),t.jsx("p",{className:"mnote dim",children:e.covRateHint})]})]})}function Ad(){var g,j,N;const{t:e,dossiers:a,token:r,mode:n,flash:i,criteria:o,fund:l,lang:d}=_(),c=n==="client",f=m.useMemo(()=>{const w=new Set;return a.forEach(C=>{C.angle&&w.add(C.angle)}),[...w]},[a]),[s,x]=m.useState(""),[u,h]=m.useState(""),[p,b]=m.useState(!1),y=async()=>{const w=s.trim();if(!(!w||p||!c)){b(!0),h("");try{const T=await(await fetch(`${Ct}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r,message:w,who:"atelier2"})})).json().catch(()=>({}));if(T.reply&&h(String(T.reply)),T.job_id){h(e.critChatRunning);const A=async()=>{const L=await fetch(`${Ct}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:T.job_id})}).then(z=>z.json()).catch(()=>null);if(L&&L.done){h(String(L.reply||L.clarification||L.summary||"✓")),b(!1),L.applied&&i(e.alertSaved);return}setTimeout(()=>{A()},8e3)};setTimeout(()=>{A()},8e3),x("");return}x("")}finally{u.startsWith("⏳")||b(!1)}}};return t.jsxs(Be,{title:e.critTitle,icon:"⚙",wide:!0,children:[(o==null?void 0:o.lead)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critHypTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:o.lead}),!!((g=o.points)!=null&&g.length)&&t.jsx("ul",{className:"critpts",children:o.points.map(w=>t.jsx("li",{children:w},w))}),t.jsx("p",{className:"mnote",children:e.critHypSub})]}),!!((j=o==null?void 0:o.angles)!=null&&j.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critProfilsTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:o.method||e.critProfilsSub}),o.angles.map(w=>{var C,T;return t.jsxs("details",{className:"prof",children:[t.jsx("summary",{children:w.title}),w.why&&t.jsx("p",{className:"why",children:w.why}),t.jsxs("div",{className:"lo",children:[!!((C=w.look)!=null&&C.length)&&t.jsxs("div",{children:[t.jsx("em",{children:e.critLookFor}),t.jsx("ul",{children:w.look.map(A=>t.jsx("li",{children:A},A))})]}),!!((T=w.out)!=null&&T.length)&&t.jsxs("div",{className:"ko",children:[t.jsx("em",{children:e.critRuleOut}),t.jsx("ul",{children:w.out.map(A=>t.jsx("li",{children:A},A))})]})]})]},w.title)})]}),!!((N=o==null?void 0:o.gate)!=null&&N.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critGateTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:e.critGateSub}),o.gate.length===1&&!o.gate[0].k?t.jsx("p",{className:"gate1",children:o.gate[0].t}):t.jsx("ol",{className:"gatesteps",children:o.gate.map(w=>t.jsxs("li",{children:[w.k&&t.jsx("b",{children:w.k}),w.t]},w.t))})]}),f.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critAngles}),t.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:f.map(w=>t.jsx("li",{style:{marginBottom:5},children:w.replace(/[_-]+/g," ")},w))})]}),t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.critChatTitle}),t.jsx("p",{children:e.critChatHint}),t.jsxs("div",{className:"mfield",style:{marginTop:10},children:[t.jsx("input",{placeholder:e.critChatPh,value:s,disabled:!c||p,onChange:w=>x(w.target.value),onKeyDown:w=>{w.key==="Enter"&&y()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(p?" loading":""),style:{padding:"12px 18px"},disabled:!c||p||!s.trim(),onClick:()=>void y(),children:[t.jsx("span",{className:"fill"}),e.critChatSend]})]}),u&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:u})]}),t.jsx("div",{style:{marginBottom:14},children:t.jsx(xi,{fund:l,lang:d,limit:30,compact:!0})}),t.jsx("div",{className:"qsec ok",children:e.qvTitle}),t.jsx("div",{className:"vlist",children:e.qv.map(([w,C])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vd "+(lo[w]||"v-cons"),children:w}),t.jsx("span",{children:C})]},w))}),t.jsx("div",{className:"qsec ok",children:e.brTitle}),t.jsx("div",{className:"vlist",children:e.br.map(([w,C])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vtag",children:w}),t.jsxs("span",{children:["← ",C]})]},w))}),t.jsx("p",{className:"mnote",children:e.brNote}),t.jsx("p",{className:"mnote",children:e.critMemoKinds})]})}function Td(){const{t:e,dispatch:a,startTour:r}=_(),n=i=>{var o,l;a({type:"modal",modal:null}),i==="crit"||i==="plug"||i==="alert"?a({type:"modal",modal:i}):i.startsWith("tab")?a({type:"ptab",tab:Number(i.slice(3))}):i==="eval"&&((o=document.querySelector(".atl2 .demand input"))==null||o.scrollIntoView({block:"center",behavior:"smooth"}),(l=document.querySelector(".atl2 .demand input"))==null||l.focus())};return t.jsxs(Be,{title:e.tutoTitle,icon:"▶",children:[t.jsxs("div",{className:"howto-go",children:[t.jsx("p",{children:e.tourIntro}),t.jsxs("button",{type:"button",onClick:()=>{a({type:"modal",modal:null}),r()},children:["▶ ",e.tourStart]})]}),t.jsx("ul",{className:"howto",children:e.howto.map(([i,o],l)=>t.jsxs("li",{role:"button",tabIndex:0,onClick:()=>n(o),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),n(o))},children:[t.jsx("span",{className:"n",children:l+1}),t.jsx("span",{dangerouslySetInnerHTML:{__html:i.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}})]},o+l))})]})}const mo="atl2:mapfold",Ld=()=>{if(typeof window>"u")return!1;try{const e=localStorage.getItem(mo);if(e==="on")return!0;if(e==="off")return!1}catch{}try{const e=new URLSearchParams(window.location.search);if(e.get("embed")==="1"&&(e.get("source")||"").toLowerCase()==="ops")return!0}catch{}return window.innerHeight<1e3},qd=()=>{if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search).get("embed")==="1")return!0}catch{}return!1},fo=m.createContext(null),_=()=>{const e=m.useContext(fo);if(!e)throw new Error("AtelierV2Ctx manquant");return e};function kt({o:e,lg:a}){const{lang:r}=_(),n=qe(e);return n?t.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:Wa(n,r),children:[n.emoji," ",Wa(n,r)]}):null}function za({o:e,src:a}){const{lang:r,t:n}=_(),i=qe(e);if(!i)return null;const o=Ti(i),l=Li(i);return t.jsxs("em",{className:"sigwin"+(l?" hot":""),title:n.signaledOn(xn(i,r))+" · "+n.win7(xa(i,r)),children:[t.jsx("span",{className:"gg",children:Array.from({length:7},(d,c)=>t.jsx("i",{className:c<o?"on":""},c))}),t.jsx("span",{className:"lb",children:l?n.lastDay:n.daysLeft(Math.max(0,i.left??0))}),a&&i.url&&t.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",title:n.seeSource,onClick:d=>d.stopPropagation(),children:"↗"})]})}function Md(e,a,r){const n=(r||"").trim();if(n){const o=e.find(l=>(l.url||"")===n);if(o)return o}const i=Re(a);if(i)return e.find(o=>Re(o.name)===i)||e.find(o=>{const l=Re(o.name);return l.length>=3&&(i.includes(l)||l.includes(i))})}function Rd(){const{scoped:e,t:a,st:r,dispatch:n}=_(),i=m.useRef(r.filters.day);r.filters.day&&(i.current=r.filters.day);const o=!!r.filters.day,l=e.filter(x=>!rt(x)),d=l.length,c=l.filter(x=>!x.noCo).length,f=l.filter(x=>!!x.noCo).length,s=(r.filters.sector||[]).length>0;return t.jsxs("button",{type:"button",className:"map-pulse"+(o?" on":""),"aria-pressed":o,title:o?a.zoomPulseBtn:a.zoomPulseWeek,onClick:()=>{if(o)n({type:"filters",patch:{day:"",win:s?"7":"all"}});else{const x=i.current||new Date().toISOString().slice(0,10);n({type:"filters",patch:{day:x,win:"all"}})}},children:[t.jsx("em",{children:o?a.zoomPulseBtn:a.zoomPulseWeek}),t.jsx("b",{children:d}),t.jsx("span",{children:o?a.zoomPulseEd:a.zoomPulseWeekEd}),t.jsxs("ul",{children:[t.jsxs("li",{children:["⚡ ",c," ",a.zoomPulseEval]}),t.jsxs("li",{children:["🔎 ",f," ",a.zoomPulseExplore]})]})]})}function xo({o:e}){const{lang:a}=_(),r=Ai(e.cc),n=e.cc?Mt(e.cc,a)||e.countryLabel||e.cc:e.countryLabel||"—";return t.jsx("span",{className:"c-flag",title:n||void 0,children:r?t.jsx("img",{src:r,width:24,height:18,alt:n||""}):t.jsx("span",{className:"em",children:"🌐"})})}const kr="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap",Fd=!1;function Od(){const[e,a]=m.useState(!1);return m.useEffect(()=>{const r=document.scrollingElement||document.documentElement,n=()=>a((r.scrollTop||0)>600);return n(),window.addEventListener("scroll",n,!0),()=>window.removeEventListener("scroll",n,!0)},[]),e?t.jsx("button",{type:"button",className:"totop",title:"Remonter en haut",onClick:()=>{(document.scrollingElement||document.documentElement).scrollTo({top:0,behavior:"smooth"})},children:"↑"}):null}const ho=e=>`atl2:tour:${e||"anon"}`;function Pd(e){try{return localStorage.getItem(ho(e))==="1"}catch{return!0}}function jr(e){try{localStorage.setItem(ho(e),"1")}catch{}}function Dd(e,a,r,n,i){const o=e.tourT,l=e.howto;return[{sel:".atl2 .ident",title:o.ident,body:e.fhintIdent},i?{sel:".atl2 .cover",title:o.cover,body:e.fhintCover,need:".atl2 .ident"}:null,{sel:".atl2 .engine",title:o.engine,body:e.fhintEngine},{sel:".atl2 .ticker",title:o.live,body:e.fhintLive},{sel:".atl2 .goal",title:o.goal,body:e.fhintGoalAt(a)},{sel:".atl2 .funnel",title:o.funnel,body:e.fhintFunnel,ptab:n},{sel:".atl2 .tuto",title:o.tuto,body:l[3][0],ptab:3,need:".atl2 .tuto"},{sel:".atl2 .demand",title:o.demand,body:l[1][0]},{sel:".atl2 .c-vd",need:".atl2 .list",title:o.chips,body:e.fhintChips,ptab:n,dens:"liste"},{sel:".atl2 .card .cdbody",need:".atl2 .list",title:o.dec,body:e.fhintDec,ptab:n,dens:"deplie"},r?{sel:".atl2 .card .cdtabs",need:".atl2 .list",click:'.atl2 [data-tour="tab-memo"]',title:o.memo,body:e.fhintMemo,ptab:n,dens:"deplie"}:null,{sel:".atl2 .csp",need:".atl2 .list",title:o.status,body:e.fhintStatus,ptab:n,dens:"deplie"},{sel:".atl2 .learn",title:o.learn,body:e.learnLine},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=export]",title:o.exportT,body:e.fhintExport,modal:"export"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=plug]",title:o.tools,body:l[6][0],modal:"plug"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=alert]",title:o.alerts,body:e.fhintAlerts,modal:"alert"},{sel:".atl2 .modal.on .mcard",title:o.crit,body:l[0][0],modal:"crit"}].filter(Boolean)}function Ud({demo:e=!1,source:a="default",initialFilters:r,initialUi:n,capsOverride:i,onFiltersChange:o}){var P;const{lang:l}=Si(),d=Ui[l],c=es(e,l,a),[f,s]=m.useReducer(ns,void 0,()=>ts((n==null?void 0:n.continent)??(a==="ops"?"monde":"europe"),e||(a==="ops"?qd():Ld()),{ptab:n==null?void 0:n.ptab,dens:(n==null?void 0:n.dens)??"liste",filters:r,modal:n==null?void 0:n.modal})),x=m.useRef(!0);m.useEffect(()=>{if(x.current){x.current=!1;return}if(!(e||a==="ops"))try{localStorage.setItem(mo,f.mapFolded?"on":"off")}catch{}},[f.mapFolded,e,a]);const u=m.useRef(o);u.current=o,m.useEffect(()=>{var k;(k=u.current)==null||k.call(u,f.filters)},[f.filters]);const[h,p]=m.useState(null),[b,y]=m.useState(null),[g,j]=m.useState(null),[N,w]=m.useState({kept:0,dropped:0}),[C,T]=m.useState(!1),[A,L]=m.useState(""),[z,S]=m.useState(!1),[O,U]=m.useState(null),[M,D]=m.useState(!1),[v,q]=m.useState(!1),[,V]=m.useState(0),B=()=>V(k=>k+1),$=m.useRef([]),K=m.useRef(new Set),X=m.useRef(new Set),[te,le]=m.useState([]),[ae,ve]=m.useState([]),[W,ie]=m.useState(0),fe=m.useRef(new Map),Ne=m.useRef(null),{mode:ge}=c,Z=m.useMemo(()=>({...c.caps,...a==="ops"?{showMorning:!1}:null,...i||null}),[c.caps,i,a]),re=Z.pipe,Q=c.session.token||"",G=ge==="client"&&!e;m.useEffect(()=>{if(!Q||!re)return;let k=!0;const F=async()=>{const J=await qi(Q);!k||!J||(ve(J.runs),ie(Date.now()/1e3-J.now),le(ee=>ee.filter(se=>!J.runs.some($e=>Re($e.company)===Re(se.name)))))};F();const R=te.length>0||ae.some(J=>J.status==="running"),H=window.setInterval(()=>{F()},R?8e3:25e3);return()=>{k=!1,window.clearInterval(H)}},[Q,re,te.length,ae.some(k=>k.status==="running")]);const ke=m.useMemo(()=>{const k=[],F=new Set;for(const R of te){const H=Re(R.name);!H||F.has(H)||(F.add(H),k.push({name:R.name,id:R.id,status:"boot",started:R.started,estMin:R.estMin,memoType:"instant"}))}for(const R of ae){const H=Re(R.company);if(!H||F.has(H))continue;F.add(H);const J=R.status==="error"?"error":R.status==="done"?"done":"running";k.push({name:R.company,status:J,started:R.started||0,estMin:R.est_min||(R.memo_type==="detailed"?40:15),url:R.url,error:R.error,memoType:R.memo_type})}return k},[te,ae]),ce=k=>ke.find(F=>Re(F.name)===Re(k))||null,pe=(k,F)=>{le(R=>R.some(H=>Re(H.name)===Re(k.name))?R:[...R,{name:k.name,id:k.id,started:Date.now()/1e3,estMin:F==="detailed"?40:15}]),K.current.add(k.id),B()};m.useEffect(()=>{if(document.querySelector(`link[href="${kr}"]`))return;const k=document.createElement("link");k.rel="stylesheet",k.href=kr,document.head.appendChild(k)},[]);const oe=(k,F=!1)=>{L(k),S(F),Ne.current&&clearTimeout(Ne.current),Ne.current=setTimeout(()=>L(""),F?4200:2400)},ne=k=>oe(k,!0),Te=m.useMemo(()=>{const k=new Map;return c.dossiers.forEach(F=>{F.id&&k.set(F.id,F)}),k},[c.dossiers]),Le=m.useMemo(()=>c.dossiers.filter(k=>qr(k,f,re)),[c.dossiers,f,re]),Ae=m.useRef(!1);m.useEffect(()=>{if(Ae.current||e||c.loading||!c.dossiers.length)return;if(!Z.showFunnel||Pd(c.session.token||"")){Ae.current=!0;return}Ae.current=!0;const k=window.setTimeout(()=>{jr(c.session.token||""),D(!0)},700);return()=>window.clearTimeout(k)},[e,c.loading,c.dossiers.length,Z.showFunnel,c.session.token]);const He=m.useMemo(()=>c.dossiers.filter(k=>rs(k,f,re,c.favIds)),[c.dossiers,f,re,c.favIds]),Ve=m.useMemo(()=>Ei(Le,c.favIds),[Le,c.favIds]),xe=m.useRef(!1);m.useEffect(()=>{if(xe.current)return;if(!re||a==="ops"){xe.current=!0;return}if((n==null?void 0:n.ptab)!==void 0){xe.current=!0;return}if(c.loading)return;xe.current=!0;const k=Ci(Ve);k!==f.ptab&&s({type:"ptab",tab:k})},[re,a,n==null?void 0:n.ptab,c.loading,Ve,f.ptab]);const pt=m.useMemo(()=>{const k=Dr(c.dossiers);return k?ct(k)===0?d.tourToday:Ir(k,l):d.tourNoRun},[c.dossiers,d,l]),Fe=m.useMemo(()=>c.dossiers.some(k=>!!k.memoUrl||!!k.summary||zt(k)),[c.dossiers]),[ot,Xe]=m.useState(!1);m.useEffect(()=>{if(c.loading){Xe(!1);return}if(c.dossiers.length>0||c.error){Xe(!0);return}const k=window.setTimeout(()=>Xe(!0),6e3);return()=>window.clearTimeout(k)},[c.loading,c.dossiers.length,c.error]);const E=(c.marketEstimate||0)>0||typeof((P=c.stats)==null?void 0:P.screened)=="number"&&c.stats.screened>0,I=m.useMemo(()=>[1,0,2,4,5,3].find(k=>(Ve[k]||0)>0)??0,[Ve]),Y=fn.find(k=>k.key===f.continent),ue=f.continent==="monde"?d.contWorld:(l==="fr"?Y==null?void 0:Y.fr:Y==null?void 0:Y.en)||"";m.useEffect(()=>{const k=F=>{var H;const R=(((H=F.detail)==null?void 0:H.name)||"").trim();R&&Ce(null,R)};return window.addEventListener("ppmap:evaluate",k),()=>window.removeEventListener("ppmap:evaluate",k)}),m.useEffect(()=>{if(a!=="ops")return;const k=F=>{const R=F.detail||{},H=String(R.id||"").trim(),J=String(R.name||"").trim(),ee=String(R.url||"").trim(),se=H&&Te.get(H)||Md(c.dossiers,J,ee);if(se){y(null),window.dispatchEvent(new CustomEvent("ppmap:reveal")),s({type:"focus",id:se.id}),(se.noCo||["media","nominations","recrutements"].includes(se.engine||""))&&(se.url||se.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:se.url||"",text:[se.headline,se.tagline].filter(Boolean).join(`
`)}})):se.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:se.name,url:se.url||"",website:se.website||"",domain:se.domain||""}}));return}!J&&!ee||(s({type:"focus",id:null}),y({name:J,headline:String(R.text||"").trim()||J,url:ee,card:R.card}),ee&&(ha(J)||!J)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:ee,text:String(R.text||"").trim()}})):J&&!ha(J)&&window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:J}})))};return window.addEventListener("ppmap:focus",k),()=>window.removeEventListener("ppmap:focus",k)}),m.useEffect(()=>{const k=H=>{const J={},ee=String((H==null?void 0:H.sector)||"").trim();ee&&(J.sector=[ee]);const se=String((H==null?void 0:H.day)||"").slice(0,10);/^\d{4}-\d{2}-\d{2}$/.test(se)&&(J.day=se);const $e=String((H==null?void 0:H.search)||"").trim();$e&&(J.search=$e);const he=String((H==null?void 0:H.dealKind)||"").trim();(he==="ma"||he==="levee"||he==="other")&&(J.dealKind=[he]),Object.keys(J).length&&s({type:"filters",patch:J})},F=H=>k(H.detail),R=H=>{H.data&&H.data.type==="pp-filter"&&k(H.data)};return window.addEventListener("ppmap:filter",F),window.addEventListener("message",R),()=>{window.removeEventListener("ppmap:filter",F),window.removeEventListener("message",R)}},[]),m.useEffect(()=>{const k=F=>{var J;const R=(((J=F.detail)==null?void 0:J.name)||"").trim().toLowerCase();if(!R)return;const H=c.dossiers.find(ee=>(ee.name||"").trim().toLowerCase()===R);H&&s(a==="ops"?{type:"focus",id:H.id}:{type:"popup",id:H.id})};return window.addEventListener("ppmap:similar",k),()=>window.removeEventListener("ppmap:similar",k)});const Ce=(k,F)=>{const R=((k==null?void 0:k.name)||F||"").trim();if(!G){j({kicker:R});return}!R||C||(T(!0),(async()=>{try{let H=R;const J=((k==null?void 0:k.website)||(k==null?void 0:k.domain)||"").trim();if(J)H=J;else try{const he=await zr(R);if(he!=null&&he.website)H=he.website;else if(((he==null?void 0:he.candidates)||[]).length===1)H=he.candidates[0].url;else if(((he==null?void 0:he.candidates)||[]).length>1){$.current=[{name:R,verdict:"unresolved",remaining:null,reason:d.evalPickSite,candidates:(he.candidates||[]).slice(0,5)},...$.current].slice(0,8),B();return}}catch{}const ee=await Ar(Q,H,"atelier2"),se={name:ee.company||R,verdict:ee.verdict,reason:ee.reason||"",remaining:ee.remaining??null};$.current=[se,...$.current].slice(0,8),ee.verdict==="kept"&&w(he=>({...he,kept:he.kept+1})),ee.verdict==="ruled_out"&&w(he=>({...he,dropped:he.dropped+1}));const $e=k||c.dossiers.find(he=>(he.name||"").toLowerCase()===R.toLowerCase());$e&&(ee.verdict==="kept"?$e.verdict=$e.verdict||"MATCH":ee.verdict==="ruled_out"&&($e.verdict="NO MATCH"),ee.reason&&($e.reasoning=ee.reason)),B()}finally{T(!1)}})())},me=k=>{if(!G){j({kicker:k.name});return}pe(k,"instant"),Pt(Q,"fast_request",k.name||"",""),oe(d.memoInstantSent(k.name))},ye=k=>fe.current.get(k.id)??c.thumbs.get((k.name||"").trim().toLowerCase()),je=(k,F)=>s({type:"undoPush",entry:{id:k.id,name:k.name,prevCeoStatus:F}}),Ze=async(k,F,R)=>{const H=k.ceoStatus||"";k.ceoStatus=F,B();const J=await Ra(Q,{status:F,airtable_id:k.airtableId,check_id:k.checkId,company:k.name,...(R==null?void 0:R.note)!==void 0?{note:R.note}:{},...R!=null&&R.via?{via:R.via}:{}});return J.ok?J.skipped?(k.ceoStatus=H,B(),ne(d.actNotPersisted),!1):((R==null?void 0:R.undo)!==!1&&je(k,H),R!=null&&R.msg&&oe(R.msg),(F==="Validé"||F==="Écarté")&&!k.ceoNote&&(R==null?void 0:R.note)===void 0&&U({o:k,yes:F==="Validé"}),!0):(k.ceoStatus=H,B(),ne(d.actErr),!1)},Me=async(k,F)=>{const R=await Ra(Q,{status:k.ceoStatus||"Retenu",airtable_id:k.airtableId,check_id:k.checkId,company:k.name,note:F,via:"note"});return!R.ok||R.skipped?(ne(R.skipped?d.actNotPersisted:d.actErr),!1):(k.ceoNote=F,B(),!0)},it=m.useRef(new Map),st=k=>it.current.has(k.id)?it.current.get(k.id):c.stages.get((k.name||"").trim().toLowerCase()),mt=(k,F)=>{it.current.set(k.id,F),B()},We=(k,F)=>{G&&Ze(k,F?"Validé":"Écarté",{msg:F?d.decidedYes(k.name):d.decidedNo(k.name)})},Xt=k=>{G&&Ze(k,"À trancher",{msg:d.promoted(k.name)})},Zt=k=>{G&&(async()=>{const F=k.ceoStatus||"";k.ceoStatus="Retenu",B();const R=await Ra(Q,{status:"Retenu",check_id:k.checkId,company:k.name});if(!R.ok||R.skipped){k.ceoStatus=F,B(),ne(R.skipped?d.actNotPersisted:d.actErr);return}je(k,F),oe(d.repeched(k.name))})()},Ft=()=>{const k=f.undo[f.undo.length-1];if(!k){oe(d.undoNone);return}const F=Te.get(k.id);if(!F){s({type:"undoPop"}),oe(d.undoNone);return}let R=k.prevCeoStatus;if(!R)if((F.verdict||"").toUpperCase().includes("CALL"))R="À trancher";else{oe(d.undoLockedTitle);return}(async()=>await Ze(F,R,{undo:!1})&&(s({type:"undoPop"}),F.ceoStatus=k.prevCeoStatus,B(),oe(d.undoDone(F.name))))()},Aa=k=>{G&&(X.current.add(k.id),B(),(async()=>{const F=await Mi(Q,k.name,"email");if(!F||F.ok===!1){X.current.delete(k.id),B(),ne(d.actErr);return}Pt(Q,"approach",k.name||"",""),oe(d.actApproachSent)})())},Ta=(k,F)=>{G&&(async()=>{if(!(await Pt(Q,F?"yes":"no",k.name||"","")).ok){ne(d.actErr);return}fe.current.set(k.id,F?"yes":"no"),B(),oe(F?d.thumbUpDone:d.thumbDnDone)})()},De=k=>{!G||!zt(k)||(pe(k,"detailed"),Pt(Q,"detailed_request",k.name||"",""),oe(d.memoDeepSent(k.name)))},ft=k=>{const F=new Set(c.favIds),R=F.has(k.id);R?F.delete(k.id):F.add(k.id),c.setFavIds(F),G&&Ri(Q,{id:k.id,co:k.name},R)},Je=()=>{!G||v||window.confirm(d.identSyncConfirm)&&(q(!0),(async()=>{const k=await Fi(Q);q(!1),k?oe(d.identSyncDone):ne(d.actErr)})())},Nt=/proplace/i.test(c.fund||""),Ot=k=>{!G||!Nt||(Pt(Q,"onboard_request",k.name||"",""),oe(d.onboardSent(k.name)))},La={st:f,dispatch:s,t:d,lang:l,mode:ge,caps:Z,pipe:re,token:Q,fund:c.fund,email:c.email,criteria:c.criteria,source:a||"default",data:c,doRepeche:Zt,thumbOf:ye,canWrite:G,commitStatus:Ze,saveNote:Me,stageOf:st,setStage:mt,flashErr:ne,startTour:()=>D(!0),dossiers:c.dossiers,scopedAll:Le,scoped:He,counts:Ve,byId:Te,contName:ue,favIds:c.favIds,toggleFav:ft,askEvaluate:Ce,doAnalyse:me,doDecide:We,doPromote:Xt,doApproach:Aa,doThumb:Ta,doDeep:De,doUndo:Ft,doSync:Je,doOnboard:Ot,outbound:Nt,memoQueued:K.current,liveMemos:{items:ke,serverOff:W,liveOf:ce},approachDone:X.current,sessTally:N,evalCards:$.current,evalBusy:C,markRow:p,markedId:h,flash:oe,focusExtra:b};m.useEffect(()=>{const k=F=>{F.key==="Escape"&&(s({type:"popup",id:null}),s({type:"modal",modal:null}),s({type:"openFacet",facet:null}))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[]);const qa=k=>Q?t.jsx(is,{token:Q,children:k}):t.jsx(t.Fragment,{children:k});return t.jsx(fo.Provider,{value:La,children:t.jsxs("div",{className:"atl2"+(a==="ops"?" ops":"")+(Q?" cibles":""),children:[t.jsx("style",{children:Wi}),qa(t.jsxs("div",{className:"app"+(re?" pipe":"")+(Q?" has-thesis":""),children:[Z.showTicker&&t.jsx(Oe,{name:"live",children:t.jsxs("div",{className:"live-stack"+(Q?" live-stack--cibles":""),children:[t.jsx(us,{}),!!Q&&t.jsx(ss,{})]})}),Z.showIdent&&t.jsx(Oe,{name:"identite",children:t.jsx(Ss,{})}),!1,!!Q&&t.jsx(Oe,{name:"brief",children:t.jsx(ls,{})}),Fd,Z.showMorning&&t.jsx(Oe,{name:"matin",children:t.jsx(Ns,{})}),t.jsx(Oe,{name:"mesure",children:t.jsx(hs,{})}),Z.showFunnel&&t.jsx(Oe,{name:"entonnoir",children:t.jsx(Id,{})}),Z.showFunnel&&t.jsx(Oe,{name:"tunnel",children:t.jsx(Es,{})}),Z.showFunnel&&t.jsx(Oe,{name:"tuto",children:t.jsx(Cs,{})}),!f.mapFolded&&t.jsx(Oe,{name:"carte",fallback:t.jsx("div",{className:"void",children:d.loadError}),children:t.jsxs("div",{className:"fzone",children:[t.jsx(oo,{}),t.jsxs("div",{className:"stage",id:"atl2-stage",children:[a==="ops"&&t.jsx(Rd,{}),t.jsx(Sl,{}),t.jsx(ro,{})]})]})}),Z.showDemand&&re&&t.jsx(Oe,{name:"direct",children:t.jsx(Bi,{items:ke,serverOff:W,labels:{strip:d.liveStrip,boot:d.liveBoot,end:d.liveEnd,open:d.liveOpenQueue,memo:d.actMemo},onOpen:()=>s({type:"modal",modal:"queue"})})}),Z.showDemand&&t.jsx(Oe,{name:"evaluation",children:t.jsx("div",{className:"eval-stick",children:t.jsx(ql,{})})}),Z.showDemand&&f.memoConsole&&t.jsx(Oe,{name:"console",children:t.jsx(Rl,{})}),t.jsx(Oe,{name:"liste",fallback:t.jsxs("div",{className:"void",children:[d.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>window.location.reload(),children:d.retry})]}),children:t.jsx(nd,{})}),c.loading&&t.jsx("div",{className:"void",children:d.loadingV2}),c.error&&!c.loading&&t.jsxs("div",{className:"void",children:[d.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:c.refresh,children:d.retry})]})]})),f.popupId&&f.dens!=="liste"&&a!=="ops"&&t.jsx(Oe,{name:"fiche",children:t.jsx(_l,{})}),t.jsx(Oe,{name:"modales",children:t.jsx(pd,{})}),t.jsx(xs,{}),O&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:O.o.name}),t.jsx(ws,{placeholder:O.yes?d.whyYesPh:d.whyNoPh,onDone:k=>{const F=O.o;U(null),k&&Me(F,k).then(R=>{R&&oe(d.csNoteSaved)})}})]}),M&&ot&&t.jsx(js,{steps:Dd(d,pt,Fe,I,E),onClose:()=>{D(!1),jr(Q)}}),t.jsx(Od,{}),Z.showOnb&&t.jsxs("div",{className:"lockbar on",children:[t.jsx("b",{children:d.lockbarText}),t.jsxs("span",{className:"lb-c",children:[d.lockbarContactBefore,t.jsx("a",{href:Or,children:bn}),d.lockbarContactMid,t.jsx("a",{href:`mailto:${ba}`,children:ba})]}),t.jsx("button",{type:"button",onClick:()=>s({type:"modal",modal:"rdv"}),children:d.lockbarCta})]}),A&&t.jsx("div",{className:"flash on"+(z?" err":""),children:A}),g&&t.jsx(zi,{variant:"acquirer",initialCompany:Nr().co,initialWebsite:Nr().site,onClose:()=>j(null)})]})})}function Id(){const{t:e}=_(),[a,r]=m.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem("atl2:fhint")==="off"}catch{return!1}});return a?null:t.jsxs("p",{className:"fhint",children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:t.jsx("path",{d:"M1 2h10M2.5 5.5h7M4.5 9h3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})}),t.jsx("span",{dangerouslySetInnerHTML:{__html:e.funnelHint}}),t.jsx("button",{type:"button","aria-label":"Fermer",title:e.fhintClose,onClick:()=>{r(!0);try{localStorage.setItem("atl2:fhint","off")}catch{}},children:"✕"})]})}function Nr(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function Bd(e){return e>=1e9?(e/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":e>=1e6?Math.round(e/1e6)+" M€":Math.round(e/1e3)+" k€"}export{xo as FlagCell,kt as SigBadge,za as SigWin,Ud as default,Bd as fmtShort,_ as useV2};
