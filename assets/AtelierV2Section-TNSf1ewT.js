var bo=Object.defineProperty;var vo=(e,a,r)=>a in e?bo(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var Cn=(e,a,r)=>vo(e,typeof a!="symbol"?a+"":a,r);import{r as m,u as yo,a as wo,b as ko,R as aa,L as jo,j as t,C as zn,c as No,d as So,l as Fa,o as ma,i as Sr,g as Eo,e as Co,f as zo,h as An,k as Ao,m as Tn,n as Ln,p as qn,q as To,s as Lo,t as qo,v as Mo,w as Fo,S as un,x as Ro,y as Oo,z as Te,A as mn,B as st,D as yt,E as Po,F as Do,G as Er,H as ga,I as Io,J as ze,N as Bo,K as $o,M as _o,O as De,P as Uo,Q as Ho,T as pt,U as Vo,V as Pt,W as fn,X as Cr,Y as Wo,Z as Yo,_ as Go,$ as xn,a0 as Mn,a1 as Fn,a2 as Dt,a3 as Ha,a4 as wt,a5 as _e,a6 as Ko,a7 as Qo,a8 as Rn,a9 as zr,aa as Jo,ab as Xo,ac as Ar,ad as Zo,ae as Tr,af as ei,ag as ti,ah as Ft,ai,aj as ea,ak as ni,al as It,am as ri,an as hn,ao as ba,ap as On,aq as oi,ar as ii,as as si,at as Va,au as Wa,av as li,aw as di,ax as Ya,ay as ci,az as pi,aA as ui,aB as mi,aC as Pn,aD as fi,aE as xi,aF as hi,aG as gi,aH as Ga,aI as bi,aJ as Dn,aK as vi,aL as yi,aM as wi,aN as In,aO as ki,aP as ji,aQ as Bn,aR as Ni,aS as Si,aT as Ei,aU as Ci,aV as zi,aW as Ai,aX as Ti,aY as Li,aZ as qi,a_ as Mi,a$ as $t,b0 as Ra,b1 as Fi,b2 as Ri,b3 as Oi}from"./index-C_Nukmj0.js";const Pi=({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:i,onInit:o,onPageChange:s,onSubmit:d})=>{const[c,h]=m.useState(!0),l=yo({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:i});wo(l,{onInit:o,onPageChange:s,onSubmit:d});const[x,p]=m.useState();return ko(l,"form_resized",v=>{const u=v.size;typeof u=="number"&&p(u)},{disabled:!i}),aa.createElement("div",{className:"fillout-standard-embed",style:{height:i?typeof x=="number"?x:256:"100%",transition:i?"height 150ms ease":void 0}},c&&aa.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},aa.createElement(jo,null)),l&&aa.createElement("iframe",{src:l.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>h(!1),style:{width:c?0:"100%",height:c?0:"100%",opacity:c?0:1,borderRadius:10,border:0,minHeight:256}}))};function Le(e){return(e||"").trim().toLowerCase()}function Di(e,a){const r=Math.max(60,a*60);return Math.max(2,Math.min(97,Math.round(e/r*100)))}function Ii(e){const a=Math.max(0,Math.floor(e)),r=Math.floor(a/60),n=a%60;return r+":"+String(n).padStart(2,"0")}function Bi(e){const a=new Date(e);return String(a.getHours()).padStart(2,"0")+":"+String(a.getMinutes()).padStart(2,"0")}function Gt({item:e,serverOff:a,bootLbl:r,endLabel:n}){const[i,o]=m.useState(()=>Date.now()/1e3);if(m.useEffect(()=>{const x=window.setInterval(()=>o(Date.now()/1e3),1e3);return()=>window.clearInterval(x)},[]),e.status==="boot"||!(e.started>0))return t.jsxs("span",{className:"runtrack boot",children:[t.jsx("span",{className:"runchrono",children:r}),t.jsx("span",{className:"runbar",children:t.jsx("i",{className:"ind"})})]});if(e.status==="error")return t.jsx("span",{className:"runerr",children:e.error||"erreur"});if(e.status==="done")return t.jsx("span",{className:"rundone",children:"✓"});const s=i-a-e.started,d=e.estMin||15,c=d*60-s,h=Di(s,d),l=c>0&&n?" · "+n.replace("{t}",Bi((e.started+d*60+a)*1e3)):"";return t.jsxs("span",{className:"runtrack",children:[t.jsx("span",{className:"runchrono",children:"⏱ "+Ii(s)+" · "+h+"%"+(c>0?" · ~"+Math.ceil(c/60)+" min":" · …")+l}),t.jsx("span",{className:"runbar",children:t.jsx("i",{style:{width:h+"%"}})})]})}function $i({items:e,serverOff:a,labels:r,onOpen:n}){const i=e.filter(o=>o.status!=="done"||Date.now()/1e3-(o.started||0)<1200);return i.length?t.jsxs("div",{className:"livestrip",role:"button",onClick:n,title:r.open,children:[t.jsx("span",{className:"ls-ico",children:"⚡"}),t.jsx("span",{className:"ls-lab",children:r.strip}),i.slice(0,6).map(o=>t.jsxs("span",{className:"ls-chip"+(o.status==="error"?" err":o.status==="done"?" done":""),children:[t.jsx("b",{children:o.name}),o.status==="done"&&o.url?t.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),children:r.memo}):t.jsx(Gt,{item:o,serverOff:a,bootLbl:r.boot,endLabel:r.end})]},o.name)),i.length>6&&t.jsxs("span",{className:"ls-more",children:["+",i.length-6]}),t.jsxs("span",{className:"ls-go",children:[r.open," →"]})]}):null}const _i={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Tout ce que STAN a passé au crible sur la fenêtre : chaque société évaluée selon vos critères, retenue ou écartée automatiquement.","STAN a retenu ces sociétés selon vos critères, décision justifiée. NOUS vérifions ses choix — écartez, validez, ou lancez une analyse sur les incertaines.","Les mémos de STAN, relus par NOUS : synergies chiffrées, verdict argumenté. Validez celles à contacter, mettez « à trancher » celles où vous hésitez.","À VOUS de jouer : les meilleures cibles, présentées le lundi par votre Corporate Developer. Tranchez OUI ou NON — vos oui passent en Validées.","Vos OUI — la short-list à contacter. NOUS préparons l’approche, ou l’engageons en votre nom (offre Entreprise).","Écartées par STAN ou par VOUS. Chaque NON affine les critères de Stan. Repêchez-en une à tout moment.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(e,a,r)=>`<b>${e} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${r} sans réponse.</b>`,morningThesis:(e,a,r)=>`Ce matin, <b>${e}</b> société${e===1?"":"s"} criblée${e===1?"":"s"} par vos moteurs`+(typeof r=="number"?`, <b>${r}</b> retenue${r===1?"":"s"}.`:".")+(a?` <b>${a}</b> attend${a>1?"ent":""} votre évaluation.`:' <span class="ok">Tout est évalué.</span>'),morningEnginesTitle:"Ces sociétés viennent UNIQUEMENT du sourcing de votre thèse : vos codes d’activité, vos pays, vos angles d’acquisition, vos critères d’exclusion. Aucune société d’un autre fonds n’entre ici. Seule la veille d’actualité part d’un ratissage commun pour des raisons de coût — mais chaque opération qui en sort est ensuite confrontée à vos critères, et n’entre dans votre page que si elle les passe.",morningLast:(e,a,r)=>`Dernier passage des moteurs le <b>${r}</b> : <b>${e}</b> société${e===1?"":"s"} sourcée${e===1?"":"s"}.`+(a?` <b>${a}</b> restante${a>1?"s":""} pas encore évaluée${a>1?"s":""}.`:' <span class="ok">Tout est évalué.</span>'),morningEval:e=>`▶ Les traiter (${e})`,identTitle:e=>`Cibles pour ${e}`,identCoverage:"COUVERTURE DU MARCHÉ",identCoverageOf:(e,a)=>`<b>${e}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"MOTEUR DE MÉMOS",identPerDay:"mémo/jour",identPending:e=>`→ ${e} en attente`,identPendingWait:"→ lecture de la file…",identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Inverser l’ordre de tri",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:e=>`Décision annulée sur ${e}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ OUI",actNo:"✗ NON",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:e=>`${e} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"CRIBLE · MÉMO",colCrible:"CRIBLE",colMemo:"MÉMO",colScore:"SCORE",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:e=>`Depuis le verdict de Stan : ${e} j`,waitChip:e=>`⏱ ${e} j`,densList:"LISTE",densOpen:"DÉPLIÉ",densLigne:"LIGNE",densMaxi:"MAXI",unfoldAll:"Tout déplier",foldAllLbl:"Tout replier",foldArts:"Articles",zoomSrc:"Source",viewLink:"Voir l’article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Site web de la société",viewSiteBusyHint:"Recherche du site web…",viewSrcHint:"Article source",viewLinkClose:"Fermer l’article",viewLinkTab:"Ouvrir dans un onglet",viewLinkHint:"S’ouvre dans une nouvelle fenêtre",zoomSimilar:"Voir les similaires",zoomInCockpit:"Isoler dans la liste",zoomArt:"Edito du jour",zoomEvalHint:"Crible selon vos critères",zoomSimilarHint:"Même secteur dans la liste",zoomIsolateHint:"Ne garder que cette société",zoomNewsMark:"Décryptage de l’édition — le texte s’ouvre à droite",zoomPulseEval:"évaluables",zoomPulseExplore:"à explorer",zoomPulseArts:"actualités",doNews:"📰 Actualités",zoomPulseEd:"dans l’article du jour",zoomPulseBtn:"Édition du jour",zoomPulseWeek:"7 derniers jours",zoomPulseWeekEd:"cette semaine",doAll:"Tout",doEdito:"📖 Edito du jour",doBrief:"📖 Brief du jour",doEval:"⚡ Évaluables",doExplore:"🔎 À explorer",doBriefHint:"Afficher le brief du jour",doTodo:"⚡ À évaluer",doDone:"✓ Déjà évaluées",cdMemoTab:"📖 Mémo",evalPickSite:"plusieurs sites portent ce nom — ouvrez pour vérifier, puis validez celui qui est le bon.",evalPickGo:"✓ C’est celui-ci",chainMemoGo:"⚡ Lancer le mémo (1 crédit)",analyseConfirm:e=>`Lancer ${e} mémo${e>1?"s":""} d’analyse ?

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
· Un mémo = **1 crédit**, une société à la fois : rien ne part jamais en lot.`,tourToday:"ce matin",tourNoRun:"aucun passage enregistré",tourT:{ident:"Le bandeau de votre fonds",cover:"Votre couverture du marché",engine:"Le moteur de mémos",live:"Le direct",goal:"Le dernier sourcing",funnel:"Le tunnel",tuto:"L’étape en cours",demand:"Évaluer une société",chips:"Les statuts, sur la ligne",dec:"Pourquoi cette décision",memo:"Le mémo détaillé",status:"Votre statut",learn:"Vos 👍 / 👎",tools:"Brancher vos outils",exportT:"Exporter en CSV",alerts:"Vos alertes email",crit:"Le paramétrage de Stan"},fhintExport:"Sortez vos cibles au format CSV — la sélection courante, avec ses colonnes, prête pour votre tableur ou votre CRM.",fhintAlerts:"Réglez ce qui vous arrive par email : le brief du matin, le bilan de la semaine, et l’alerte quand un mémo est prêt.",csLabel:"Votre statut :",csKept:"Retenu",csAnalysed:"Analysé",csPending:"À trancher",csValidated:"Validé",csOut:"Écarté",csYes:"✓ Oui",csNo:"✗ Non",csSaved:"✓ enreg.",csNoteSaved:"note ajoutée ✓",csNoteOk:"OK",csNotePh:"Pourquoi ? (une ligne)",csAnaConfirm:"Aucun mémo sur ce dossier — le passer en Analysé quand même ?",whySend:"Envoyer",whyYesPh:"Pourquoi ce OUI ? (une ligne — ça affine votre thèse)",whyNoPh:"Pourquoi ce NON ? (une ligne — ça affine votre thèse)",stgLabel:"Votre avancement :",stg:[["todo","○ À faire"],["sent","✉ Contactée"],["replied","💬 A répondu"],["meeting","🤝 RDV"],["loi","📄 LOI"],["signed","✅ Signée"],["lost","✖ Perdue"]],j4Badge:e=>`⏰ Sans réponse depuis ${e} j — relancer ?`,actRepeche:"↩ Repêcher",actErr:"Envoi impossible — réessayez dans un instant.",actNotPersisted:"Impossible d’enregistrer ce statut sur ce dossier.",decidedYes:e=>`${e} validée — place à l’approche`,decidedNo:e=>`${e} écartée`,repeched:e=>`${e} repêchée — de retour dans Retenues`,critHypTitle:"Notre hypothèse sur votre stratégie",critHypSub:"Toute la sélection en découle. Si elle est à côté, corrigez-la ci-dessous — la recherche est réalignée et vous recevez une sélection corrigée.",critProfilsTitle:"Vos profils de cibles",critProfilsSub:"Les familles de cibles que la machine traque en continu — chaque profil se déplie.",critLookFor:"Ce que nous recherchons",critRuleOut:"Ce que nous écartons",critGateTitle:"Le crible de Stan — comment il décide Retenu / Écarté",critGateSub:"Chaque société est confrontée à ces critères. C’est à eux que renvoient les « STEP A, C… » des raisons affichées sur les lignes.",rubricTitle:"Comment Stan décide l’analyse (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Une fois retenu, Stan approfondit et tranche. Voici ce qui fait pencher la balance.",qvTitle:"Les verdicts de Stan — où va chaque dossier",qv:[["CALL PENDING","le choix n°1 de Stan : à trancher OUI/NON maintenant → onglet « À trancher »."],["CALL YES","vous avez tranché OUI — le dossier rejoint « Validées », place à l’approche."],["CALL NO","vous avez tranché NON — le dossier rejoint « Écartées »."],["CONSIDER","solide, mérite un regard plus attentif → onglet « Analysées »."],["MONITOR","à surveiller, pas prioritaire pour l’instant → onglet « Analysées »."],["PASS","non pertinent pour le moment → onglet « Écartées »."]],brTitle:"Le routage automatique — où le verdict de Stan envoie chaque dossier",br:[["Retenu","MATCH — retenue au sourcing, mémo à venir → onglet « Retenues »"],["Analysé","CONSIDER · MONITOR — mémo fait, pas de call → onglet « Analysées »"],["À trancher","CALL PENDING — Stan propose un call, votre OUI/NON est attendu → onglet « À trancher »"],["Validé","CALL YES — vous avez tranché OUI → onglet « Validées »"],["Écarté","NO MATCH · PASS · CALL NO — refus de Stan, ou votre NON sur un call → onglet « Écartées »"]],brNote:"Un CALL passe par 3 états : CALL PENDING (le mémo est TERMINÉ, Stan propose le call — votre décision est en attente) › CALL YES (vous validez) › CALL NO (vous écartez). PENDING ne veut jamais dire « en cours d’analyse » : l’analyse est déjà faite.",vt:{MATCH:"MATCH — retenu : correspond à vos critères.","NO MATCH":"NO MATCH — écarté par vos critères.","CALL PENDING":"CALL — le choix n°1 de Stan : à trancher OUI/NON maintenant.","CALL YES":"CALL YES — vous avez tranché OUI : le dossier rejoint « Validées ».","CALL NO":"CALL NO — vous avez tranché NON : le dossier rejoint « Écartées ».",CONSIDER:"CONSIDER — solide, mérite un regard plus attentif.",MONITOR:"MONITOR — à surveiller, pas prioritaire pour l’instant.",PASS:"PASS — non pertinent pour le moment."},vKept:"Retenu",vOut:"Écarté",learnLine:"Comme sur Netflix, chaque 👍/👎 affine ce que Stan vous montre ensuite — vous jugez, il apprend.",learnLink:"Ajuster mes critères →",funnelHint:"Retrouvez ici toutes vos cibles sourcées automatiquement dans <b>évaluées</b> puis passez celles que vous souhaitez contacter dans <b>validées</b>.",fhintClose:"Masquer cette aide",queueTitle:"File de traitement",queueDone:(e,a)=>`<b>${e} / ${a}</b> mémos générés`,queueTomorrow:"À VENIR — ORDRE PROJETÉ, RECALCULÉ CHAQUE MATIN",queueToday:"ANALYSÉS AUJOURD’HUI",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugConfigured:"Configuré",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(e,a)=>`<b>${e}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:e=>`${e} passées au crible`,alertTitle:"🔔 Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"VOS ANGLES D’ACQUISITION",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarBusy:"🧬 Recherche…",similarNote:"Les retenues entrent dans votre liste au prochain rafraîchissement.",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:e=>`actualisée le ${e}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:e=>`actualisée le ${e}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:e=>`Onboarding lancé pour ${e} — suivez l’avancement dans le cockpit`,rsOpen:"🔎 Rechercher des sociétés à évaluer",rsUrlPh:"coller l’URL d’un article, d’une vidéo ou d’une note",rsTextPh:"Coller ici l’article complet",rsOr:"ou",rsGo:"🔎 Résumer et rechercher des sociétés",rsHint:"RÉSUMÉ · CARTE MENTALE · SOCIÉTÉS",rsRunning:"Lecture en cours…",rsRunningVid:"Transcription de la vidéo…",rsElapsed:e=>`${e} s`,rsNeed:"Collez une URL, ou le texte complet de l’article.",rsFound:e=>e?`${e} société${e>1?"s":""} trouvée${e>1?"s":""} dans ce contenu.`:"Aucune société nommée dans ce contenu.",rsLink:"Voir la page publiée ↗",rsPublishing:"Publication de la fiche…",rsPublishFail:"Fiche produite, page non publiée",rsTags:"TAGS",rsClose:"Fermer",rsMindmap:"CARTE MENTALE",rsSource:"Source ↗",rsSaving:"Enregistrement…",rsSaved:"✓ Enregistrée dans votre cockpit",rsSavedIn:e=>`✓ Enregistrée dans le carnet de ${e}`,rsSaveFail:"Fiche produite, NON enregistrée",rsArchOpen:e=>`voir les ${e} recherche${e>1?"s":""} déjà lancée${e>1?"s":""}`,rsArchTitle:"Recherches déjà lancées",rsArchBack:"← toutes les recherches",rsArchLoading:"Chargement…",rsArchEmpty:"Aucune recherche enregistrée pour l’instant.",rsArchGone:"Cette recherche n’est plus disponible.",rsRowCounts:(e,a)=>`${e} citée${e>1?"s":""} · ${a} à évaluer`,rsPub:"Publiée",rsPriv:"Non publiée",rsCited:"Sociétés citées",rsCitedHint:"Toutes les sociétés nommées dans ce contenu.",rsMatch:"Sociétés qui pourraient correspondre",rsMatchHint:"Suggérées à partir de la thèse du contenu — elles n’y sont pas forcément nommées.",rsEvalOne:"⚡ Évaluer",rsAddAll:e=>`＋ Ajouter les ${e} à la liste`,rsNoCompanies:"Aucune société dans ce contenu.",rsConclusion:"Ce que ça implique",rsCriteria:"Critères de sourcing",rsSources:"Pour creuser",groupEngine:"Moteur",groupNone:"Rien",browse:e=>`Parcourir les ${e}`,chainAll:e=>`Évaluer les ${e}`,chainHint:"selon votre thèse, l’une après l’autre",winMenu:"Période",datesShort:["Aujourd’hui","7 jours","30 jours","Tout"],colCompany:"SOCIÉTÉ & DESCRIPTION",grpCount:(e,a)=>`${e} à envoyer sur ${a} sourcées`,emptyTab:"AUCUNE CIBLE DANS CET ONGLET",emptyScope:"AUCUNE SOCIÉTÉ DANS CE PÉRIMÈTRE",contWorld:"Monde",evalGoOn:e=>`⚡ Évaluer ${e}`,rowExtract:"🔎 Extraire les sociétés",toSendCtx:(e,a)=>`sur ${e} dans l'édition${a>0?` (${a} sans société identifiable)`:""}`,grpCard:"la carte du jour",grpMa:"Opérations M&A",grpLev:"Levées de fonds",grpNews:"Actualités",grpNom:"Actualités · Nominations",grpNewsOther:"Actualités · Autres",grpHire:"Actualités · Recrutements",edLabel:"dans l'édition du jour",edSplit:(e,a)=>`⚡ ${e} évaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} à explorer`:""}`},Ui={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Everything STAN ran through the screen on this window: every company judged against your criteria, kept or discarded automatically.","STAN kept these companies against your criteria, decisions justified. WE verify its picks — discard, validate, or launch an analysis on the uncertain ones.","STAN’s memos, reviewed by US: quantified synergies, argued verdict. Validate the ones to contact, set “to decide” where you hesitate.","YOUR move: the best targets, presented on Monday by your Corporate Developer. Call YES or NO — your yeses move to Validated.","Your YESES — the shortlist to contact. WE prepare the approach, or engage it on your behalf (Enterprise plan).","Discarded by STAN or by YOU. Every NO sharpens Stan’s criteria. Recover one anytime.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(e,a,r)=>`<b>${e} Stan CALL${e>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${r} awaiting answer.</b>`,morningThesis:(e,a,r)=>`This morning, <b>${e}</b> compan${e===1?"y":"ies"} screened by your engines`+(typeof r=="number"?`, <b>${r}</b> kept.`:".")+(a?` <b>${a}</b> awaiting your evaluation.`:' <span class="ok">All screened.</span>'),morningEnginesTitle:"Your engines are tuned to YOUR thesis: activity codes, countries, acquisition angles, exclusion criteria. Only the news watch starts from a sweep shared across funds — but every deal it surfaces is then screened against your criteria, and only enters here if it passes.",morningLast:(e,a,r)=>`Engines last ran on <b>${r}</b>: <b>${e}</b> compan${e===1?"y":"ies"} sourced.`+(a?` <b>${a}</b> still to screen.`:' <span class="ok">All screened.</span>'),morningEval:e=>`▶ Work through them (${e})`,identTitle:e=>`Targets for ${e}`,identCoverage:"MARKET COVERAGE",identCoverageOf:(e,a)=>`<b>${e}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"MEMO ENGINE",identPerDay:"memo/day",identPending:e=>`→ ${e} queued`,identPendingWait:"→ reading the queue…",identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Reverse sort order",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:e=>`Decision undone on ${e}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ YES",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:e=>`${e} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"SCREEN · MEMO",colCrible:"SCREEN",colMemo:"MEMO",colScore:"SCORE",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:e=>`Since Stan’s verdict: ${e} d`,waitChip:e=>`⏱ ${e} d`,densList:"LIST",densOpen:"OPEN",densLigne:"ROWS",densMaxi:"CARDS",unfoldAll:"Unfold all",foldAllLbl:"Fold all",foldArts:"Articles",zoomSrc:"Source",viewLink:"View article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Company website",viewSiteBusyHint:"Looking up the company website…",viewSrcHint:"Source article",viewLinkClose:"Close article",viewLinkTab:"Open in a tab",viewLinkHint:"Opens in a new window",zoomSimilar:"See similar",zoomInCockpit:"Isolate in the list",zoomArt:"Today's editorial",zoomEvalHint:"Screen against your thesis",zoomSimilarHint:"Same sector in the list",zoomIsolateHint:"Keep only this company",zoomNewsMark:"Edition note — opens on the right",zoomPulseEval:"evaluable",zoomPulseExplore:"to explore",zoomPulseArts:"news",doNews:"📰 News",zoomPulseEd:"in today’s article",zoomPulseBtn:"Today’s edition",zoomPulseWeek:"Last 7 days",zoomPulseWeekEd:"this week",doAll:"All",doEdito:"📖 Today's editorial",doBrief:"📖 Today's brief",doEval:"⚡ Evaluable",doExplore:"🔎 To explore",doBriefHint:"Show today's brief",doTodo:"⚡ To evaluate",doDone:"✓ Already evaluated",cdMemoTab:"📖 Memo",evalPickSite:"several sites share this name — open to check, then confirm the right one.",evalPickGo:"✓ This one",chainMemoGo:"⚡ Launch the memo (1 credit)",analyseConfirm:e=>`Launch ${e} analysis memo${e>1?"s":""}?

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
· One memo = **1 credit**, one company at a time: nothing ever goes out in bulk.`,tourToday:"this morning",tourNoRun:"no run recorded",tourT:{ident:"Your fund’s header",cover:"Your market coverage",engine:"The memo engine",live:"Live",goal:"The last sourcing",funnel:"The funnel",tuto:"The current step",demand:"Evaluate a company",chips:"Statuses, on the row",dec:"Why this decision",memo:"The detailed memo",status:"Your status",learn:"Your 👍 / 👎",tools:"Connect your tools",exportT:"Export to CSV",alerts:"Your email alerts",crit:"Stan’s settings"},fhintExport:"Take your targets out as CSV — the current selection with its columns, ready for your spreadsheet or CRM.",fhintAlerts:"Set what reaches your inbox: the morning brief, the weekly recap, and the alert when a memo is ready.",csLabel:"Your status:",csKept:"Kept",csAnalysed:"Analysed",csPending:"To decide",csValidated:"Validated",csOut:"Ruled out",csYes:"✓ Yes",csNo:"✗ No",csSaved:"✓ saved",csNoteSaved:"note added ✓",csNoteOk:"OK",csNotePh:"Why? (one line)",csAnaConfirm:"No memo on this file — mark it Analysed anyway?",whySend:"Send",whyYesPh:"Why this YES? (one line — it sharpens your thesis)",whyNoPh:"Why this NO? (one line — it sharpens your thesis)",stgLabel:"Your progress:",stg:[["todo","○ To do"],["sent","✉ Contacted"],["replied","💬 Replied"],["meeting","🤝 Meeting"],["loi","📄 LOI"],["signed","✅ Signed"],["lost","✖ Lost"]],j4Badge:e=>`⏰ No reply for ${e} days — follow up?`,actRepeche:"↩ Recover",actErr:"Could not save — try again in a moment.",actNotPersisted:"This status cannot be saved on this record.",decidedYes:e=>`${e} validated — on to the approach`,decidedNo:e=>`${e} ruled out`,repeched:e=>`${e} recovered — back in Kept`,critHypTitle:"Our hypothesis about your strategy",critHypSub:"The whole selection follows from it. If it is off, correct it below — the search is realigned and you get a corrected selection.",critProfilsTitle:"Your target profiles",critProfilsSub:"The families of targets the machine tracks continuously — each profile unfolds.",critLookFor:"What we look for",critRuleOut:"What we rule out",critGateTitle:"Stan’s screen — how it decides Kept / Ruled out",critGateSub:"Every company is checked against these criteria. They are what the “STEP A, C…” in the reasons on each row refer to.",rubricTitle:"How Stan decides the analysis (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Once kept, Stan digs deeper and rules. Here’s what tips the balance.",qvTitle:"Stan’s verdicts — where each file goes",qv:[["CALL PENDING","Stan’s top pick: decide YES/NO now → “To decide” tab."],["CALL YES","you decided YES — the file joins “Validated”, on to the approach."],["CALL NO","you decided NO — the file joins “Ruled out”."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],brTitle:"Automatic routing — where Stan’s verdict sends each file",br:[["Kept","MATCH — kept at sourcing, memo to come → “Kept” tab"],["Analysed","CONSIDER · MONITOR — memo done, no call → “Analysed” tab"],["To decide","CALL PENDING — Stan proposes a call, your YES/NO is awaited → “To decide” tab"],["Validated","CALL YES — you ruled YES → “Validated” tab"],["Ruled out","NO MATCH · PASS · CALL NO — Stan’s refusal, or your NO on a call → “Ruled out” tab"]],brNote:"A CALL goes through 3 states: CALL PENDING (the memo is DONE, Stan proposes the call — your decision is awaited) › CALL YES (you validate) › CALL NO (you rule out). PENDING never means “being analysed”: the analysis is already done.",vt:{MATCH:"MATCH — kept: it fits your criteria.","NO MATCH":"NO MATCH — ruled out by your criteria.","CALL PENDING":"CALL — Stan’s top pick: worth a YES/NO decision now.","CALL YES":"CALL YES — you ruled YES: the file joins “Validated”.","CALL NO":"CALL NO — you ruled NO: the file joins “Ruled out”.",CONSIDER:"CONSIDER — solid, worth a closer look.",MONITOR:"MONITOR — keep an eye on it, not a priority yet.",PASS:"PASS — not relevant right now."},vKept:"Kept",vOut:"Ruled out",learnLine:"Like Netflix, every 👍/👎 sharpens what Stan shows you next — you judge, it learns.",learnLink:"Tune my criteria →",funnelHint:"Find here all your automatically sourced targets in <b>evaluated</b>, then move the ones you want to contact into <b>validated</b>.",fhintClose:"Hide this hint",queueTitle:"Processing queue",queueDone:(e,a)=>`<b>${e} / ${a}</b> memos generated`,queueTomorrow:"UP NEXT — PROJECTED ORDER, RECOMPUTED EVERY MORNING",queueToday:"ANALYZED TODAY",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugConfigured:"Configured",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(e,a)=>`<b>${e}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:e=>`${e} screened`,alertTitle:"🔔 Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"YOUR ACQUISITION ANGLES",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarBusy:"🧬 Searching…",similarNote:"The kept ones enter your list at the next refresh.",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:e=>`updated ${e}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:e=>`updated ${e}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:e=>`Onboarding launched for ${e} — track progress in the cockpit`,rsOpen:"🔎 Find companies to evaluate",rsUrlPh:"paste the URL of an article, a video or a note",rsTextPh:"Paste the full article here",rsOr:"or",rsGo:"🔎 Summarize and find companies",rsHint:"SUMMARY · MIND MAP · COMPANIES",rsRunning:"Reading…",rsRunningVid:"Transcribing the video…",rsElapsed:e=>`${e}s`,rsNeed:"Paste a URL, or the full text of the article.",rsFound:e=>e?`${e} compan${e>1?"ies":"y"} found in this content.`:"No company named in this content.",rsLink:"See the published page ↗",rsPublishing:"Publishing the note…",rsPublishFail:"Note produced, page not published",rsTags:"TAGS",rsClose:"Close",rsMindmap:"MIND MAP",rsSource:"Source ↗",rsSaving:"Saving…",rsSaved:"✓ Saved to your cockpit",rsSavedIn:e=>`✓ Saved to ${e}'s notebook`,rsSaveFail:"Note produced, NOT saved",rsArchOpen:e=>`see the ${e} research run${e>1?"s":""} already launched`,rsArchTitle:"Research already launched",rsArchBack:"← all research runs",rsArchLoading:"Loading…",rsArchEmpty:"No research saved yet.",rsArchGone:"This research is no longer available.",rsRowCounts:(e,a)=>`${e} mentioned · ${a} to evaluate`,rsPub:"Published",rsPriv:"Not published",rsCited:"Companies mentioned",rsCitedHint:"Every company named in this content.",rsMatch:"Companies that could match",rsMatchHint:"Suggested from the content’s thesis — they are not necessarily named in it.",rsEvalOne:"⚡ Evaluate",rsAddAll:e=>`＋ Add all ${e} to the list`,rsNoCompanies:"No company in this content.",rsConclusion:"What it implies",rsCriteria:"Sourcing criteria",rsSources:"Dig deeper",groupEngine:"Engine",groupNone:"None",browse:e=>`Browse the ${e}`,chainAll:e=>`Evaluate the ${e}`,chainHint:"against your thesis, one after another",winMenu:"Period",datesShort:["Today","7 days","30 days","All"],colCompany:"COMPANY & DESCRIPTION",grpCount:(e,a)=>`${e} to send out of ${a} sourced`,emptyTab:"NO TARGET IN THIS TAB",emptyScope:"NO COMPANY IN THIS SCOPE",contWorld:"World",evalGoOn:e=>`⚡ Evaluate ${e}`,rowExtract:"🔎 Extract companies",toSendCtx:(e,a)=>`of ${e} in the edition${a>0?` (${a} without an identifiable company)`:""}`,grpCard:"today's card",grpMa:"M&A deals",grpLev:"Fundraising",grpNews:"News",grpNom:"News · Appointments",grpNewsOther:"News · Other",grpHire:"News · Hiring",edLabel:"in today's edition",edSplit:(e,a)=>`⚡ ${e} evaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} to explore`:""}`},Hi={fr:{...zn.fr,..._i},en:{...zn.en,...Ui}},Vi=`.atl2{
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
.atl2 .bulk .side .hint{white-space:nowrap}`,Wi=`
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
.atl2.cibles .listhead{top:calc(var(--pp-gap,60px) + 44px)}
body.pp-navfold .atl2.cibles .listhead{top:74px}
.atl2 .live-stack--cibles .ticker{border-bottom:1px solid #1E2C41;height:44px;
  align-items:center}
.atl2.cibles .ticker .tk .what{color:#E8EEF5}
.atl2.cibles .ticker .tk .co{color:#fff}
.atl2.cibles .ticker .tk .am{color:#fff;background:rgba(255,255,255,.16)}
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
.atl2.ops .dcard{scroll-margin-top:calc(var(--pp-gap,60px) + var(--pp-live-h,44px) + var(--demand-h,56px) + var(--listhead-h,52px) + 8px)}
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
  top:calc(var(--pp-gap,60px) + var(--pp-live-h,44px) + var(--demand-h,56px));
  min-height:calc(100dvh - var(--pp-gap,60px) - var(--pp-live-h,44px) - var(--demand-h,56px));
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
.atl2.ops .readpane.is-edito .zoom{max-width:none;padding:22px 28px 48px}
.atl2.ops .zoom-k{font-family:var(--mono);font-size:10px;font-weight:600;
  letter-spacing:.12em;text-transform:uppercase;color:#0E8A4F;margin:0 0 10px}
.atl2.ops .zoom-h{margin:0;font-size:19px;font-weight:700;letter-spacing:-.03em;
  line-height:1.28;color:var(--ink)}
.atl2.ops .zoom .ed-decrypt-b{margin:0}
.atl2.ops .zoom-body{margin:14px 0 0;padding-top:14px;border-top:1px solid var(--line)}
.atl2.ops .zoom-body h4{margin:0 0 10px;font-size:16px;font-weight:700;
  letter-spacing:-.02em;line-height:1.3}
/* Édito marché : même cadre que /actualites (une langue, sections, lignes). */
.atl2 .i18n-en{display:none}
html[lang^=en] .atl2 .i18n-en,html[data-pplang=en] .atl2 .i18n-en{display:inline}
html[lang^=en] .atl2 .i18n-fr,html[data-pplang=en] .atl2 .i18n-fr{display:none}
.atl2.ops .zoom-body .mk-edito{margin:0}
.atl2.ops .zoom-body .mk-lead,.atl2.ops .zoom-body .ed-lead{
  margin:0 0 22px;font-size:15px;line-height:1.65;color:#5B6B7F}
.atl2.ops .zoom-body .mk-sec{margin:26px 0 0}
.atl2.ops .zoom-body .mk-sec:first-child{margin-top:0}
.atl2.ops .zoom-body .mk-sec h2,.atl2.ops .zoom-body .acq-h{
  margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid var(--line,#E2E8F0);
  font-size:14.5px;font-weight:700;letter-spacing:-.02em;line-height:1.3;color:var(--ink)}
.atl2.ops .zoom-body .mk-ops{list-style:none;margin:0;padding:0}
.atl2.ops .zoom-body .mk-op{padding:12px 0;border-bottom:1px solid #F1F5F9}
.atl2.ops .zoom-body .mk-op:last-child{border-bottom:0}
.atl2.ops .zoom-body .mk-op-t{font-size:14.5px;font-weight:650;line-height:1.4;color:var(--ink)}
.atl2.ops .zoom-body .mk-op-t strong{font-weight:750}
.atl2.ops .zoom-body .mk-op-m{margin-top:4px;font-size:12.5px;line-height:1.45;color:#64748B}
.atl2.ops .zoom-body .mk-op-m a{color:#0A6B3D}
.atl2.ops .zoom-body .mk-empty{margin:8px 0 0;font-size:14px;color:#64748B}
.atl2.ops .zoom-body .acq-land{margin:18px 0 4px;padding:14px 14px 8px;background:#F8FAFC;
  border:1px solid #E8EEF4;border-radius:12px}
.atl2.ops .zoom-body .acq-h{font-size:13.5px;margin:0 0 8px;padding-bottom:6px}
.atl2.ops .zoom-body .acq-row{padding:10px 0;border-top:1px solid #E8EEF4}
.atl2.ops .zoom-body .acq-row:first-of-type{border-top:0;padding-top:0}
.atl2.ops .zoom-body .acq-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.atl2.ops .zoom-body .acq-n{font:inherit;font-size:14px;font-weight:750;color:var(--ink);
  background:none;border:0;padding:0;cursor:pointer;text-align:left;
  text-decoration:underline;text-decoration-style:dotted;text-underline-offset:3px}
.atl2.ops .zoom-body .acq-n:hover{color:#0A6B3D}
.atl2.ops .zoom-body .acq-c{font-size:12px;color:#64748B;font-weight:600}
.atl2.ops .zoom-body .acq-b{display:inline-block;font-size:10.5px;font-weight:700;
  border-radius:5px;padding:1px 7px}
.atl2.ops .zoom-body .acq-b-strat{color:#1d6fb8;background:rgba(29,111,184,.12)}
.atl2.ops .zoom-body .acq-b-fin{color:#9a6b00;background:rgba(214,158,0,.15)}
.atl2.ops .zoom-body .acq-tg{font-size:13px;color:#64748B;margin-top:4px;line-height:1.45}
.atl2.ops .zoom-body .acq-tg a{color:#0A6B3D}
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
body.pp-desk .atl2.ops .eval-stick{position:sticky;
  top:calc(var(--pp-gap,60px) + var(--pp-live-h,44px));z-index:36;
  align-self:flex-start;width:100%;background:var(--panel2,#fff);
  box-shadow:0 1px 0 var(--line,#e2e8f0)}
body.pp-desk .atl2.ops .readpane{
  top:calc(var(--pp-gap,60px) + var(--pp-live-h,44px) + var(--demand-h,56px));
  min-height:calc(100dvh - var(--pp-gap,60px) - var(--pp-live-h,44px) - var(--demand-h,56px));
  height:auto;max-height:none;overflow:visible}
.atl2.ops .demand{scroll-margin-top:calc(var(--pp-gap,60px) + var(--pp-live-h,44px));
  background:transparent}
.atl2.ops .demand.pair{border-radius:0}
/* Le bandeau LISTE / filtres reste à GAUCHE : sinon il recouvre Radar / titre. */
body.pp-desk .atl2.ops .listhead,
body.pp-desk .atl2.ops .listhead.mapoff{
  top:calc(var(--pp-gap,60px) + var(--pp-live-h,44px) + var(--demand-h,56px))!important;
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
  top:calc(var(--pp-gap,60px) + var(--pp-live-h,44px) + var(--demand-h,56px))}
.atl2.ops .zoom-body .ed-box{margin:0 0 28px;padding:0;background:none;border:0}
.atl2.ops .zoom-body .ed-box:first-child > h2{margin-top:0}
.atl2.ops .zoom-body .ed-decrypt{margin:0 0 16px}
.atl2.ops .zoom-body .ed-box:not(:has(.art-allops li, .ed-decrypt, .opcard, .ppcard, h4)){display:none}
.atl2.ops .zoom-body .art-allops{display:block;margin:0}
.atl2.ops .zoom-body .art-allops ul{list-style:none;margin:0;padding:0;
  border:1px solid #E2E8F0;background:#fff;border-radius:0 0 8px 8px}
.atl2.ops .zoom-body .art-allops li{padding:10px 14px;border-bottom:1px solid #F1F5F9;
  font-size:14px;line-height:1.45;color:var(--ink)}
.atl2.ops .zoom-body .art-allops li:last-child{border-bottom:0}
.atl2.ops .zoom-body .art-allops .aa-n{font-weight:700}
.atl2.ops .zoom-body .art-allops .aa-d{color:#334155}
.atl2.ops .zoom-body .art-allops .aa-meta{margin-top:3px;font-size:12.5px;color:#64748B}
.atl2.ops .zoom-body .art-allops .aa-meta a{color:#0A6B3D;text-decoration:none}
.atl2.ops .zoom-body .art-allops .aa-meta a:hover{text-decoration:underline}
.atl2.ops .zoom-body .art-srcline{margin:0 0 12px;font-size:13px;color:#94A3B8}
.atl2.ops .zoom-body .art-srcline a{color:#0A6B3D;text-decoration:none}
.atl2.ops .zoom-body .art-srcline a:hover{text-decoration:underline}
.atl2.ops .zoom-body .opcard{margin:12px 0 22px}
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
  top:calc(var(--pp-gap,60px) + 44px);align-self:flex-start;width:100%;
  background:var(--panel2,#fff);box-shadow:0 1px 0 var(--line,#e2e8f0)}
body.pp-desk .atl2.cibles .readpane{
  top:calc(var(--pp-gap,60px) + 44px + var(--demand-h,56px))}
body.pp-desk .atl2.cibles .listhead{
  top:calc(var(--pp-gap,60px) + 44px)!important}
body.pp-desk .atl2.cibles .drow{
  display:flex;flex-wrap:nowrap;align-items:stretch;width:100%;gap:8px}
body.pp-desk .atl2.cibles .dfield{flex:1 1 auto!important;min-width:0!important;max-width:none}
body.pp-desk .atl2.cibles .dacts{flex:none;margin-left:0}
body.pp-desk .atl2.cibles .listhead,
body.pp-desk .atl2.cibles .listhead.mapoff{
  display:flex!important;flex-direction:column!important;flex-wrap:nowrap!important;
  align-items:stretch!important;z-index:34;width:62%!important;max-width:calc(100% - 280px)!important;
  box-sizing:border-box;padding:8px 14px 10px;overflow:visible;background:var(--panel);
  left:0}
body.pp-desk .atl2.cibles .listhead .lh-funnel{width:100%;padding:0 0 8px;
  margin:0 0 6px;border-bottom:1px solid var(--line)}
body.pp-desk .atl2.cibles .listhead .lh-funnel .funnel{
  gap:8px;flex-wrap:nowrap;align-items:center;padding:4px 0;background:transparent;border:0}
body.pp-desk .atl2.cibles .listhead .lh-funnel .chain2{flex:1 1 auto;min-width:0}
body.pp-desk .atl2.cibles .listhead .lh-funnel .ftools{margin-left:auto;flex:none}
body.pp-desk .atl2.cibles .listhead .lh-funnel .tuto{margin:6px 0 0;width:100%}
body.pp-desk .atl2.cibles .listhead .lh-stats{width:100%;padding:6px 0 8px;
  margin:0 0 6px;border-bottom:1px solid var(--line)}
body.pp-desk .atl2.cibles .listhead .lh-stats .goal{padding:0 0 8px;margin:0;border:0;background:transparent}
body.pp-desk .atl2.cibles .listhead .lh-stats .fstats{margin:0;padding:0}
body.pp-desk .atl2.cibles .listhead.mapoff .lh-top{
  display:flex!important;flex-direction:row;flex-wrap:nowrap;align-items:center;
  gap:8px;width:100%;min-width:0}
body.pp-desk .atl2.cibles .listhead.mapoff .lh-tools{
  display:flex;flex-direction:row;align-items:center;width:100%;flex:none;
  gap:8px;padding:8px 0 0;margin:6px 0 0;border-top:1px solid var(--line)}
.atl2.cibles .readpane.is-edito{position:static;top:auto;min-height:0}
.atl2.cibles .zoom .thesis-brief{padding:4px 0 8px;border:0;background:transparent}
.atl2.cibles .zoom .thesis-brief__kicker{color:#0E8A4F}
.atl2 .ident .goal{padding:8px 16px 12px;margin:0;border-top:1px solid var(--line);
  background:var(--panel)}
.atl2 .ident .goal .pbar{max-width:200px}
.atl2 .ticker .tk-edito{flex:none;display:inline-flex;align-items:center;justify-content:center;
  align-self:center;height:28px;margin:0 8px;padding:0 10px;border:1px solid #1E2C41;border-radius:5px;
  background:transparent;color:#E8EEF5;font:inherit;font-size:11.5px;font-weight:650;
  cursor:pointer;white-space:nowrap;line-height:1}
.atl2 .ticker .tk-edito:hover{background:#16233A;color:#fff;border-color:#5FD39B}
.atl2 .live-stack--cibles .thesis-days{padding:0 8px 8px;background:#0B1220}
@media (max-width:1000px){
  body.pp-desk .atl2.cibles .listhead,body.pp-desk .atl2.cibles .listhead.mapoff{
    width:100%;max-width:none}}
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
  .atl2 .app > .eval-stick{order:2}
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
.atl2 .listhead .lh-acts{display:inline-flex;align-items:center;gap:8px;flex-wrap:wrap;
  margin-left:auto;flex:none}
/* 2 rangées, largeur de la LISTE seulement.
   1) compte · Monde · LISTE · Tout ▾ · Évaluer
   2) recherche · Filtres · Effacer · Alerte */
body.pp-desk .atl2.ops .listhead.mapoff{
  display:flex!important;flex-direction:column!important;flex-wrap:nowrap!important;
  align-items:stretch!important;gap:0;padding:8px 14px 10px;overflow:visible}
body.pp-desk .atl2.ops .listhead.mapoff .lh-top{
  display:flex!important;flex-direction:row;flex-wrap:nowrap;align-items:center;
  gap:8px;width:100%;min-width:0;min-height:40px}
body.pp-desk .atl2.ops .listhead.mapoff .lh-acts{flex-wrap:nowrap}
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
  padding:10px 14px;background:var(--panel2)}
.atl2 .covcalc > summary{cursor:pointer;list-style:none;font-size:13px;font-weight:700;
  color:var(--ink);padding:4px 0}
.atl2 .covcalc > summary::-webkit-details-marker{display:none}
.atl2 .covcalc > summary::after{content:' ▾';color:#64748B;font-weight:500}
.atl2 .covcalc[open] > summary::after{content:' ▴'}
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
/* Mobile /actualites : les menus du haut restent, mais s'alignent en rangées
   au lieu de partir chacun de son côté (nowrap desk trop large à 390 px). */
@media (max-width:760px){
  body.pp-desk .atl2.ops .eval-stick{
    position:sticky;width:100%;flex:none;
    top:calc(var(--pp-gap,48px) + var(--pp-live-h,44px));
    z-index:36;background:var(--panel2,#fff);
    box-shadow:0 1px 0 var(--line,#e2e8f0)}
  body.pp-desk .atl2.ops .listhead,
  body.pp-desk .atl2.ops .listhead.mapoff{
    position:sticky!important;
    width:100%!important;max-width:none!important;
    top:calc(var(--pp-gap,48px) + var(--pp-live-h,44px) + var(--demand-h,56px))!important}
  body.pp-desk .atl2.ops .list.maxi,
  body.pp-desk .atl2.ops .desk-list .list.maxi{
    overflow:visible!important;max-height:none!important;height:auto!important}
  body.pp-desk .atl2.ops .fzone,
  body.pp-desk .atl2.ops .mapzone,
  body.pp-desk .atl2.ops .stage{
    display:none!important;height:0!important;min-height:0!important;max-height:0!important}
  body.pp-desk .atl2.ops .contpick > .mapbtn{display:none}
  /* Filtres + Moteur : feuille collée en BAS d'écran (jamais top:100% hors champ). */
  body.pp-desk .atl2.ops .fmenu{position:static}
  body.pp-desk .atl2.ops .fmenu-pop,
  body.pp-desk .atl2.ops .listhead .fpanel,
  body.pp-desk .atl2.ops .fpanel.on,
  body.pp-desk .atl2.ops .winpick-pop{
    position:fixed!important;left:10px!important;right:10px!important;
    top:auto!important;bottom:12px!important;width:auto!important;
    max-width:none!important;min-width:0!important;
    max-height:min(42vh,320px);overflow-y:auto;-webkit-overflow-scrolling:touch;
    z-index:200;border-radius:14px;
    box-shadow:0 16px 40px rgba(15,23,42,.28)}
  body.pp-desk .atl2.ops .fpanel .fcols{
    columns:1;overflow-y:auto;-webkit-overflow-scrolling:touch;flex:1;min-height:0}
  body.pp-desk .atl2.ops .listhead.mapoff{padding:8px 12px 10px}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-top{
    flex-wrap:wrap!important;row-gap:8px;column-gap:8px;min-height:0}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-top .main,
  body.pp-desk .atl2.ops .listhead.mapoff .lh-top .ctx{flex:none}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-acts{
    flex:1 1 100%;justify-content:flex-start;margin-left:0;flex-wrap:wrap;
    gap:8px}
  body.pp-desk .atl2.ops .listhead.mapoff .chainwrap{margin-left:0}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools{
    padding-top:8px;margin-top:6px}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip{
    flex-wrap:wrap!important;row-gap:8px}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip-a{
    flex:1 1 100%;min-width:0}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip-a .seg{
    flex-wrap:wrap;gap:6px}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip-b,
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .frow2{
    flex:1 1 100%;flex-wrap:wrap!important;margin-left:0;justify-content:flex-start}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fsrch{
    flex:1 1 100%;max-width:none;min-width:0}
}
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
`,Yi=Vi+Wi;function Ka(e){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(e)||""}catch{return""}}function Gi(){const e=Ka("teaser");if(e==="0"||e==="1")return e;try{if(typeof window<"u"&&window.parent&&window.parent!==window){const a=new URL(window.parent.location.href).searchParams.get("teaser");if(a==="0"||a==="1")return a;if(/\/cibles\/[^/]+\/open\/?$/i.test(window.parent.location.pathname||""))return"0"}}catch{}return""}function Ki(e,a){if(e||a.mode!=="client"||!a.token)return"visiteur";const r=Gi();return r==="0"?"client":r==="1"||Ka("embed")==="1"&&Ka("chrome")==="1"?"apercu":"client"}const Qi={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0,showMorning:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0}},Ji=e=>Qi[e];function va(e){const a=(e||"").trim();return a.length<3?!1:!!(/^[^\p{L}(]/u.test(a)||/[:—]\s|…|\.{3}/.test(a)||a.split(/\s+/).length>=3&&/\b(icymi|round-?up|wrap|weekly|podcast|interview|what|why|how|biggest|watch|inside|according)\b/i.test(a))}const gt=e=>{if(e.noCo===void 0){const a=(e.name||"").trim();(!Sr(a)||va(a))&&(e.noCo=!0)}return Object.assign(e,{continent:Ro(e.cc)})};function Oa(e){const a=new Set,r=[];for(const n of e){const i=(n.name||"").toLowerCase();!i||a.has(i)||(a.add(i),r.push(n))}return r}const Xi=60*60*1e3;function Zi(e){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+e)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>Xi?null:a}catch{return null}}function na(e,a){try{sessionStorage.setItem("ppmap:swr:"+e,JSON.stringify({...a,ts:Date.now()}))}catch{}}const es=e=>e==="default"?"":e==="ops"?"ops":"research:"+e.research;function ts(e,a,r="default"){const n=r!=="default",i=m.useMemo(()=>e||n?{mode:"anon"}:No(),[e,n]),o=m.useMemo(()=>n?"visiteur":Ki(e,i),[e,i,n]),s=m.useMemo(()=>Ji(o),[o]),d=o!=="visiteur",c=es(r),[h,l]=m.useState([]),[x,p]=m.useState(""),[v,u]=m.useState(null),[b,y]=m.useState(null),[f,j]=m.useState(null),[C,k]=m.useState(()=>new Map),[N,T]=m.useState(()=>new Map),[A,q]=m.useState(""),[z,E]=m.useState(new Set),[P,I]=m.useState(null),[R,D]=m.useState(!0),[g,L]=m.useState(!1),[W,$]=m.useState(0),[U,oe]=m.useState(0),X=m.useRef(0),Y=m.useMemo(()=>{var te;if(o!=="client")return"";try{return((te=So())==null?void 0:te.email)||""}catch{return""}},[o]);m.useEffect(()=>{const te=++X.current;let ge=!0;const G=()=>ge&&te===X.current,de=(d&&i.token?i.token:"pub:"+a)+(c?":"+c:""),ye=Zi(de);return ye?(l(ye.objs.map(gt)),ye.fund&&p(ye.fund),u(ye.marketEstimate??null),y(ye.criteria??null),j(ye.stats??null),q(ye.generatedAt||""),D(!1)):D(!0),(async()=>{try{if(r==="ops"){const Se=await Fa(),be=((Se==null?void 0:Se.recent_ops)||[]).map(ne=>{const re=ma(ne.company_name||ne.title?ne:{...ne,title:(ne.headline_fr||ne.headline||"").slice(0,120)},a),Z=String(ne.rubrique||"").toLowerCase();return re&&(Z==="nominations"||Z==="recrutements")&&(re.engine=Z),re&&!String(ne.company_name||"").trim()&&(re.noCo=!0),re}).filter(ne=>!!ne).map(ne=>(Sr((ne.name||"").trim())||(ne.noCo=!0),ne));try{const ne=Eo(),re=await Co(),Z=((re==null?void 0:re.date)||"").slice(0,10),K=ne?ne.doc:re,me=zo(K),ke=((ne==null?void 0:ne.day)||(K==null?void 0:K.date)||Z||"").slice(0,10);if(ke&&me.length){const Ne=new Set;for(const Q of be){if((Q.date||"").slice(0,10)!==ke)continue;const ae=An(me,Ne,Q.name,"");ae>=0&&(Ne.add(ae),Q.decryptHtml=me[ae].html)}for(const Q of be){if(Q.decryptHtml||(Q.date||"").slice(0,10)!==ke)continue;const ae=An(me,Ne,"",Q.headline||Q.tagline||Q.name);ae>=0&&(Ne.add(ae),Q.decryptHtml=me[ae].html)}}if(ke){const Ne=((K==null?void 0:K.title_fr)||"").trim(),Q=((K==null?void 0:K.lead_fr)||"").trim(),ae=Ao(K),Oe=((K==null?void 0:K.url)||"").trim();Ne&&(ae||Oe)&&be.unshift({id:`edito:${ke}`,kind:"op",name:Ne,cc:null,date:ke,engine:"edito",dealKind:"other",headline:Ne,tagline:Q||Ne,decryptHtml:ae||void 0,url:Oe,noCo:!0})}}catch{}if(!G())return;l(be.map(gt)),na(de,{objs:be})}else if(typeof r=="object"){const be=(await Tn()||[]).filter(re=>(re.slug||"")===r.research).map(re=>Ln(re,a)).filter(re=>!!re),ne=Oa(await qn(be,a));if(!G())return;l(ne.map(gt)),na(de,{objs:ne})}else if(d&&i.token){const Se=To(i.token),be=Fa(),ne=Lo(i.token),re=qo(i.token),Z=Mo(i.token),K=await Se;let me=K?K.targets:[];G()&&K&&(p(K.fund||""),u(K.marketEstimate??null),y(K.criteria??null),j(K.stats??null),q(K.generatedAt||""),l(me.map(gt)),D(!1),L(!1));const[ke,Ne,Q,ae]=await Promise.all([be,ne,re,Z]),Oe=((ke==null?void 0:ke.recent_ops)||[]).map(Ae=>ma(Ae,a)).filter(Ae=>!!Ae);if(me=[...me,...Oe],!G())return;l(me.map(gt));const qe=new Set;for(const Ae of Ne){const we=(Ae.id||Ae.co||"").toString().trim().toLowerCase();we&&qe.add(we.startsWith("t:")?we:"t:"+we)}E(qe),k(Q),T(ae),K&&na(de,{fund:K.fund,marketEstimate:K.marketEstimate,criteria:K.criteria,stats:K.stats,generatedAt:K.generatedAt,objs:me})}else{const Se=Fo(),be=Tn(),ne=Fa(),re=await Se;G()&&re.length&&(l(Oa(re).map(gt)),D(!1),L(!1));const[Z,K]=await Promise.all([be,ne]),me=(Z||[]).map(ae=>Ln(ae,a)).filter(ae=>!!ae),ke=await qn(me,a),Ne=((K==null?void 0:K.recent_ops)||[]).map(ae=>ma(ae,a)).filter(ae=>!!ae),Q=Oa([...re,...ke,...Ne]);if(!G())return;l(Q.map(gt)),na(de,{objs:Q})}G()&&L(!1)}catch{G()&&!ye&&L(!0)}finally{G()&&D(!1)}})(),()=>{ge=!1}},[d,i.token,a,W,c]),m.useEffect(()=>{if(!s.showCredits||!Y){I(null);return}let te=!0;return(async()=>{try{const ge=await fetch(`${un}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:Y})});if(!ge.ok)return;const G=await ge.json();te&&G&&G.ok!==!1&&I(G)}catch{}})(),()=>{te=!1}},[s.showCredits,Y,U]);const ie=m.useCallback(te=>E(new Set(te)),[]);return{session:i,mode:o,caps:s,fund:x,email:Y,marketEstimate:v,generatedAt:A,criteria:b,stats:f,thumbs:C,stages:N,dossiers:h,favIds:z,setFavIds:ie,credits:P,reloadCredits:()=>oe(te=>te+1),loading:R,error:g,refresh:()=>$(te=>te+1)}}function Je(e){return e?e.engine==="edito"||String(e.id||"").startsWith("edito:"):!1}const Lr=()=>({win:"all",day:"",status:"all",signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],acquirer:"",search:""}),as=(e="europe",a=!1,r)=>({continent:e,ptab:(r==null?void 0:r.ptab)??1,dens:(r==null?void 0:r.dens)??"liste",filters:{...Lr(),...Object.fromEntries(Object.entries((r==null?void 0:r.filters)||{}).filter(([,n])=>n!==void 0))},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,focusId:null,modal:(r==null?void 0:r.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,memoTab:0,undo:[],mapFolded:a}),ns=new Set(["signal","amount","score","crible","memo"]);function rs(e,a){switch(a.type){case"continent":return{...e,continent:a.key,filters:{...e.filters,country:[]},shown:{},popupId:null,focusId:null,openFacet:null};case"ptab":return{...e,ptab:a.tab,shown:{},popupId:null,focusId:null};case"dens":return{...e,dens:a.dens,shown:{}};case"filters":return{...e,filters:{...e.filters,...a.patch},shown:{}};case"toggleFacet":{const r=e.filters[a.facet],n=r.includes(a.value)?r.filter(i=>i!==a.value):[...r,a.value];return{...e,filters:{...e.filters,[a.facet]:n},shown:{}}}case"toggleMemoLevel":{const r=e.filters.memoLevel,n=r.includes(a.value)?r.filter(i=>i!==a.value):[...r,a.value];return{...e,filters:{...e.filters,memoLevel:n},shown:{}}}case"acquirer":return{...e,filters:{...e.filters,acquirer:a.value,day:"",win:"all"},shown:{}};case"clearFacet":return{...e,filters:{...e.filters,[a.facet]:[]},shown:{}};case"reset":return{...e,filters:Lr(),shown:{},openFacet:null};case"sort":return{...e,sort:e.sort.key===a.key?{key:a.key,dir:e.sort.dir*-1}:{key:a.key,dir:ns.has(a.key)?-1:1}};case"groupBy":return{...e,groupBy:a.groupBy};case"more":return{...e,shown:{...e.shown,[a.group]:(e.shown[a.group]??a.base??qr)+a.by}};case"pile":return{...e,pileMode:a.on,popupId:null};case"openFacet":return{...e,openFacet:e.openFacet===a.facet?null:a.facet};case"popup":return{...e,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"focus":return{...e,focusId:a.id,popupId:a.id?null:e.popupId};case"modal":return{...e,modal:a.modal,popupId:a.modal?null:e.popupId};case"chainStart":return{...e,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...e,chain:{...e.chain,idx:e.chain.idx+1}};case"spaceTab":return{...e,spaceTab:a.tab};case"memoConsole":return{...e,memoConsole:a.id,memoTab:0};case"memoTab":return{...e,memoTab:a.tab};case"undoPush":return{...e,undo:[...e.undo,a.entry].slice(-50)};case"undoPop":return{...e,undo:e.undo.slice(0,-1)};case"mapFold":return{...e,mapFolded:a.folded,openFacet:null};default:return e}}const qr=80;function ya(e,a,r,n){var i;if(n!=="signal"&&a.signalOnly&&(!Te(e)||a.signalEngines.length&&!a.signalEngines.includes(e.engine||""))||n!=="dealKind"&&((i=a.dealKind)!=null&&i.length)&&!a.dealKind.includes(e.dealKind||"")||n!=="sector"&&a.sector.length&&!a.sector.includes(e.sector||"")||n!=="acquirer"&&a.acquirer.trim()&&(e.acquirer||"").trim().toLowerCase()!==a.acquirer.trim().toLowerCase()||n!=="engine"&&a.engine.length&&!a.engine.includes(e.engine||"")||n!=="stage"&&a.stage.length&&!a.stage.includes(e.stage||"")||n!=="angle"&&r&&a.angle.length&&!a.angle.includes(e.angle||"")||n!=="memoLevel"&&r&&a.memoLevel.length&&!a.memoLevel.includes(mn(e)))return!1;if(n!=="win"){if(a.day){if((e.date||"").slice(0,10)!==a.day)return!1}else if(a.win!=="all"){const o=a.win==="1"?0:a.win==="7"?7:30;if(st(e.date)>o)return!1}}if(n!=="status"&&!r&&a.status!=="all"&&yt(e)!==a.status)return!1;if(n!=="search"&&a.search.trim()){const o=a.search.trim().toLowerCase();if(!`${e.name||""} ${e.tagline||""} ${e.sector||""} ${e.acquirer||""}`.toLowerCase().includes(o))return!1}return!0}function Mr(e,a,r){return Je(e)?ya(e,a.filters,r):a.continent!=="monde"&&e.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(e.cc||"")?!1:ya(e,a.filters,r)}function os(e,a,r,n){return!(!Mr(e,a,r)||r&&!Oo(e,a.ptab,n))}function gn(e,a){const r=a.key,n=i=>{switch(r){case"name":return(i.name||"").toLowerCase();case"country":return i.countryLabel||i.cc||"";case"stage":return i.stage||"";case"amount":return i.amountEur||-1;case"age":return-st(i.date);case"score":return typeof i.score=="number"?i.score:-1;case"crible":return Do(i);case"memo":return Po(i);case"signal":{const o=Te(i);return o?100-(o.left??0):-1}}};return[...e].sort((i,o)=>{const s=n(i),d=n(o);return s<d?-a.dir:s>d?a.dir:(i.name||"").localeCompare(o.name||"")})}const Pa={},$n=(Pa==null?void 0:Pa.VITE_API_BASE)||"https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function _n(){return new Date().toISOString().slice(0,10)}const bn=m.createContext(null);function Fr(){return m.useContext(bn)}function is(e){if(!e||typeof DOMParser>"u")return[];const a=[];try{const r=new DOMParser().parseFromString(e,"text/html");for(const n of[...r.querySelectorAll("p")]){if((n.textContent||"").replace(/\s+/g," ").trim().length<40)continue;const o=n.querySelector("strong,b"),s=((o==null?void 0:o.textContent)||"").replace(/\s+/g," ").trim();if(!s||s.length<2||s.length>60)continue;const d=n.cloneNode(!0);d.querySelectorAll("script,style,iframe").forEach(c=>c.remove()),d.querySelectorAll("*").forEach(c=>{const h=c.tagName==="A"?c.getAttribute("href"):null;[...c.attributes].forEach(l=>c.removeAttribute(l.name)),h&&/^https?:\/\//i.test(h)&&(c.setAttribute("href",h),c.setAttribute("target","_blank"),c.setAttribute("rel","nofollow noopener"))}),a.push({t:s.toLowerCase(),html:d.outerHTML})}}catch{}return a}function Un(e,a=!1){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||"");if(!r)return e;const o=(a?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||"",s=String(Number(r[3]));return a?`${o} ${s}, ${r[1]}`:`${s==="1"?"1ᵉʳ":s} ${o} ${r[1]}`}function Rr(){const e=m.useContext(bn);if(!e)throw new Error("ThesisEdition* must be under ThesisEditionProvider");return e}function ss({token:e,children:a}){const{dispatch:r,st:n,lang:i}=_(),[o,s]=m.useState(()=>n.filters.day||_n()),[d,c]=m.useState(null),[h,l]=m.useState(!1),x=m.useCallback(b=>{if(/^\d{4}-\d{2}-\d{2}$/.test(b)){s(b);try{r({type:"filters",patch:{day:b,win:"all"}})}catch{}}},[r]),p=m.useCallback(()=>{s(_n());try{r({type:"filters",patch:{day:"",win:"all"}})}catch{}},[r]);m.useEffect(()=>{const b=y=>{var j;const f=(j=y.detail)==null?void 0:j.day;typeof f=="string"&&x(f)};return window.addEventListener("pp-edition-day",b),()=>window.removeEventListener("pp-edition-day",b)},[x]),m.useEffect(()=>{n.filters.day&&n.filters.day!==o&&s(n.filters.day)},[n.filters.day]),m.useEffect(()=>{if(!e||!o)return;let b=!1;l(!0);const y=new URLSearchParams({token:e,date:o});return fetch(`${$n}/cibles/edition.json?${y}`).then(f=>f.json()).then(f=>{b||c(f)}).catch(()=>{b||c({ok:!1,error:"network"})}).finally(()=>{b||l(!1)}),()=>{b=!0}},[e,o]);const v=m.useMemo(()=>`${$n}/cibles/editions.json?token=${encodeURIComponent(e)}`,[e]),u=m.useMemo(()=>({token:e,day:o,ed:d,loading:h,pickDay:x,pickWindow:p,dayPicked:!!n.filters.day,daysUrl:v,isEn:i==="en"}),[e,o,d,h,x,p,n.filters.day,v,i]);return t.jsx(bn.Provider,{value:u,children:a})}function ls(){const{day:e,daysUrl:a,pickDay:r,dayPicked:n}=Rr(),[i,o]=m.useState(()=>n||Er());return m.useEffect(()=>{n&&o(!0)},[n]),m.useEffect(()=>{const s=d=>{var c;return o(!!((c=d.detail)!=null&&c.open))};return window.addEventListener(ga,s),()=>window.removeEventListener(ga,s)},[]),i?t.jsx("div",{className:"thesis-days",children:t.jsx(Io,{mode:"local",theme:"dark",month:e.slice(0,7),current:n?e:"",windowDays:0,daysUrl:a,onPick:r})}):null}function ds(){const{day:e,ed:a,loading:r,pickWindow:n,dayPicked:i,isEn:o}=Rr(),s=!!(a!=null&&a.ok&&(a.html||a.acquirers_html)),d=(a==null?void 0:a.ok)&&!s,c=a&&!a.ok;return t.jsxs("section",{className:"thesis-brief","data-day":(a==null?void 0:a.date)||e,"data-fund":(a==null?void 0:a.fund)||"",children:[t.jsx("style",{children:`
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
      `}),t.jsxs("header",{className:"thesis-brief__hd",children:[t.jsx("span",{className:"thesis-brief__kicker",children:o?"Daily brief":"Brief du jour"}),t.jsxs("h2",{className:"thesis-brief__title",children:[o?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",(a==null?void 0:a.count)!=null&&a.count>0?` · ${a.count}`:""]}),((a==null?void 0:a.date)||e)&&t.jsx("time",{className:"thesis-brief__date",dateTime:(a==null?void 0:a.date)||e,children:(a==null?void 0:a.date)||e})]}),t.jsx("p",{className:"thesis-brief__hint",children:o?"Same content as your daily email for this fund. Pick a day above the map to change this brief and the LIVE ticker.":"Même contenu que l’email quotidien de ce fonds. Choisir un jour au-dessus de la carte change ce brief et le LIVE."}),r&&!s&&t.jsx("p",{className:"thesis-brief__loading",children:o?"Loading your thesis brief…":"Chargement de votre brief de thèse…"}),c&&t.jsxs("p",{className:"thesis-brief__err",children:[o?"Could not load this brief.":"Impossible de charger ce brief.",a!=null&&a.error?` (${a.error})`:""]}),d&&!r&&t.jsx("p",{className:"thesis-brief__empty",children:o?t.jsxs(t.Fragment,{children:["Edition of ",t.jsx("b",{children:Un(e,!0)}),"."]}):t.jsxs(t.Fragment,{children:["Édition du ",t.jsx("b",{children:Un(e)}),"."]})}),s&&(a!=null&&a.html)?t.jsx("div",{className:"thesis-brief__body",dangerouslySetInnerHTML:{__html:a.html}}):null,s&&(a!=null&&a.acquirers_html)?t.jsx("div",{className:"thesis-brief__acq",dangerouslySetInnerHTML:{__html:a.acquirers_html}}):null,i&&t.jsx("button",{type:"button",className:"thesis-brief__clear",onClick:n,children:o?"← See all":"← Voir tout"})]})}const cs=300,ra=7,ps={fr:{ma:"🤝 M&A",levees:"🚀 Levées de fonds",nominations:"👤 Nominations",recrutements:"💼 Offres d'emploi",actualites:"📰 Autres actualités"},en:{ma:"🤝 M&A",levees:"🚀 Fundraising",nominations:"👤 Appointments",recrutements:"💼 Job offers",actualites:"📰 Other news"}},Or={fr:{hiring:"💼 Recrute",raised:"💰 Lève des fonds",news:"📰 Presse",posting:"📣 Publie",building:"💻 Construit",community:"💬 Communauté",registry:"🆕 Nouveau",exodus:"👋 Départs",other:"🔔 Signal"},en:{hiring:"💼 Hiring",raised:"💰 Raising",news:"📰 Press",posting:"📣 Posting",building:"💻 Building",community:"💬 Community",registry:"🆕 New",exodus:"👋 Exodus",other:"🔔 Signal"}},us=["hiring","raised","news","posting","building","community","registry","exodus","other"];function Da(e){const a=(e.rubrique||"").toLowerCase();if(a==="ma"||a==="levees"||a==="nominations"||a==="recrutements")return a;if(e.dealKind==="ma")return"ma";if(e.dealKind==="levee")return"levees";const r=(e.engine||"").toLowerCase();if(r==="nominations")return"nominations";if(r==="recrutements")return"recrutements";if(Uo(r)&&r!=="media")return"news:"+r;const n=Te(e);return n?"sig:"+(n.theme&&Or.fr[n.theme]?n.theme:"other"):"actualites"}function ms(){const{dossiers:e,st:a,t:r,dispatch:n,contName:i,pipe:o,lang:s,fund:d}=_(),c=Fr(),h=s==="en",[l,x]=m.useState("all"),[p,v]=m.useState(!1),u=m.useMemo(()=>{var ge;const g=(a.filters.day||"").slice(0,10),L=G=>!(!o&&a.continent!=="monde"&&G.continent!==a.continent||g&&(G.date||"").slice(0,10)!==g),W=e.filter(G=>L(G)&&Te(G)&&(!o||G.kind!=="target"||ze(G)!==5)),$=o&&(((ge=c==null?void 0:c.ed)==null?void 0:ge.ops)||[]).length?c.ed.ops.map(G=>ma(G,s)).filter(G=>!!G).filter(G=>!g||(G.date||"").slice(0,10)===g):[],U=e.filter(G=>L(G)&&G.kind==="op"&&(g?!0:st(G.date)<=ra)),oe=o?$.length?$:U.filter(G=>{const de=(d||"").trim().toLowerCase();if(!de)return!1;const ye=G.match||null;return ye?Object.keys(ye).map(Se=>Se.trim().toLowerCase()).includes(de):!1}):U,X=g||new Date().toISOString().slice(0,10),Y=G=>{const de=Da(G);return de==="ma"?0:de==="levees"?1:2};oe.sort((G,de)=>{const ye=Y(G)-Y(de);if(ye)return ye;const Se=(G.date||"").slice(0,10)===X?0:1,be=(de.date||"").slice(0,10)===X?0:1;return Se!==be?Se-be:(de.amountEur||0)-(G.amountEur||0)});const ie=new Set,te=[];for(const G of[...oe,...gn(W,{key:"signal",dir:-1})]){const de=G.id||G.name;!de||ie.has(de)||(ie.add(de),te.push(G))}return o&&te.length===0?e.filter(de=>L(de)&&st(de.date)<=ra).sort((de,ye)=>(ye.date||"").localeCompare(de.date||"")).slice(0,80):te},[e,a.continent,a.filters.day,o,d,s,c]),b=m.useMemo(()=>{const g={};for(const L of u){const W=Da(L);g[W]=(g[W]||0)+1}return g},[u]),y=m.useMemo(()=>l==="all"?u:u.filter(g=>Da(g)===l),[u,l]),f=m.useMemo(()=>y.slice(0,cs),[y]),j=y.length-f.length,C=m.useRef(null);m.useEffect(()=>{var oe,X;const g=C.current;if(!g)return;const L=()=>{const Y=g.scrollWidth;Y<200||(g.style.animationDuration=Math.max(18,Math.round(Y/130))+"s")};L();const W=requestAnimationFrame(L),$=window.setTimeout(L,1200);let U=!0;return(X=(oe=document.fonts)==null?void 0:oe.ready)==null||X.then(()=>{U&&L()}),()=>{U=!1,cancelAnimationFrame(W),window.clearTimeout($)}},[f.length,l]);const k=g=>g==="all"?u.length:b[g]||0,N=g=>{if(g==="all")return h?"All":"Tout";if(g.startsWith("sig:"))return Or[h?"en":"fr"][g.slice(4)]||"🔔";if(g.startsWith("news:")){const L=g.slice(5);return $o[L]?_o(L,h?"en":"fr"):g}return ps[h?"en":"fr"][g]},T=[{k:"all"}],A=["ma","levees"].filter(g=>k(g)>0||g===l);if(A.length){T.push({g:h?"Deals":"Opérations"});for(const g of A)T.push({k:g})}const q=["nominations","recrutements"].filter(g=>k(g)>0||g===l),z=Bo.filter(g=>g!=="media").map(g=>"news:"+g).filter(g=>k(g)>0||g===l),E=k("actualites")>0||l==="actualites"?["actualites"]:[];if(q.length||z.length||E.length){T.push({g:h?"News":"Actualités"});for(const g of q)T.push({k:g});for(const g of z)T.push({k:g});for(const g of E)T.push({k:g})}const P=us.map(g=>"sig:"+g).filter(g=>k(g)>0||g===l);if(P.length){T.push({g:h?"Signals (your engines)":"Signaux (vos moteurs)"});for(const g of P)T.push({k:g})}const I=g=>{try{return new Date(g+"T12:00:00Z").toLocaleDateString(h?"en-GB":"fr-FR",{day:"numeric",month:"long"})}catch{return g}},R=(()=>{const g=(a.filters.day||"").slice(0,10),L=!o&&a.continent!=="monde"&&i?h?` Scope: ${i}.`:` Périmètre : ${i}.`:"";return g?(h?`LIVE covers the events of ${I(g)}.`:`Le LIVE regroupe les événements du ${I(g)}.`)+L:(h?`LIVE covers the still-open signals and the deals of the last ${ra} days.`:`Le LIVE regroupe les signaux encore ouverts et les opérations des ${ra} derniers jours.`)+L})(),D=g=>f.map(L=>t.jsxs("button",{type:"button",className:"tk"+(De(L)?" spent":""),onClick:W=>{if(n({type:"focus",id:L.id}),a.dens!=="liste"){const $=W.currentTarget.getBoundingClientRect();n({type:"popup",id:L.id,anchor:{x:$.left+$.width/2,y:$.bottom}})}},title:L.name+(L.tagline?" — "+L.tagline:""),children:[t.jsx(St,{o:L}),t.jsxs("span",{className:"who",children:[t.jsx(ho,{o:L}),t.jsx("span",{className:"co",children:L.name})]}),typeof L.amountEur=="number"&&L.amountEur>0&&t.jsx("span",{className:"am",children:$d(L.amountEur)}),L.sector&&t.jsx("span",{className:"mt",children:L.sector}),t.jsx(La,{o:L}),t.jsx("span",{className:"tkgo",children:"→"})]},g+(L.id||L.name))).concat(j>0?[t.jsx("span",{className:"tk quiet",children:h?`+ ${j} more — filter by section to see them`:`+ ${j} autres — filtrez par rubrique pour les voir`},g+":more")]:[]);return t.jsxs("div",{className:"ticker",children:[t.jsxs("span",{className:"lbl",children:[t.jsx("i",{}),r.live]}),t.jsxs("span",{className:"tkfil",onBlur:g=>{g.currentTarget.contains(g.relatedTarget)||v(!1)},children:[t.jsxs("button",{type:"button",className:"tkfilb","aria-expanded":p,onClick:()=>v(g=>!g),children:[N(l),t.jsx("b",{children:k(l)}),t.jsx("span",{"aria-hidden":"true",children:"▾"})]}),t.jsxs("div",{className:"tkfilm",hidden:!p,children:[t.jsx("span",{className:"tkfilscope",children:R}),T.map(g=>"g"in g?t.jsx("span",{className:"tkfilg",children:g.g},g.g):t.jsxs("button",{type:"button","aria-pressed":g.k===l,onClick:()=>{x(g.k),v(!1)},children:[N(g.k),t.jsx("b",{children:k(g.k)})]},g.k))]})]}),t.jsx("div",{className:"win",children:f.length?t.jsxs("div",{className:"run",ref:C,children:[D(0),D(1)]}):t.jsx("div",{className:"run",style:{animation:"none"},children:t.jsx("span",{className:"tk quiet",children:r.liveQuiet(i)})})}),!!c&&t.jsxs("button",{type:"button",className:"tk-edito",title:h?"Show today's editorial":"Afficher Edito du jour",onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:edito"))}catch{}},children:["📖 ",h?"Today's editorial":"Edito du jour"]}),!!c&&t.jsx(xs,{isEn:h})]})}const fs=t.jsxs("svg",{viewBox:"0 0 16 16",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"1.4","aria-hidden":"true",children:[t.jsx("rect",{x:"2",y:"3.5",width:"12",height:"10.5",rx:"1.5"}),t.jsx("path",{d:"M2 6.5h12M5.5 2v3M10.5 2v3"})]});function xs({isEn:e}){const[a,r]=m.useState(()=>Er());m.useEffect(()=>{const i=o=>{var s;return r(!!((s=o.detail)!=null&&s.open))};return window.addEventListener(ga,i),()=>window.removeEventListener(ga,i)},[]);const n=a?e?"Hide the days":"Masquer les jours":e?"Show the days":"Voir les jours";return t.jsx("button",{type:"button",className:"dytog","aria-pressed":a,title:n,"aria-label":n,onClick:()=>Ho(!a),children:fs})}const vn="+33 6 83 10 72 86",wa="alexandre@proplace.co",Pr=`tel:${vn.replace(/[^\d+]/g,"")}`;function hs(){return null}class Ze extends m.Component{constructor(){super(...arguments);Cn(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(r,n){console.error(`[atl2] bandeau « ${this.props.name} » en échec :`,r,n.componentStack)}render(){return this.state.dead?this.props.fallback??null:this.props.children}}const Dr=[["Retenu","csKept"],["Analysé","csAnalysed"],["À trancher","csPending"],["Validé","csValidated"],["Écarté","csOut"]];function gs(e,a){if((pt(e)||"").startsWith("CALL")&&ze(e)===3)return[["Validé",a.csYes],["Écarté",a.csNo]];const n=ze(e)>=2;return Dr.filter(([i])=>!(n&&i==="Retenu")).map(([i,o])=>[i,a[o]])}function bs({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:i,doAnalyse:o,memoQueued:s}=_(),[d,c]=m.useState(!1),[h,l]=m.useState(""),[x,p]=m.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const v=(e.ceoStatus||"").trim(),u=async b=>{if(h)return;if(b==="Analysé"&&!e.memoUrl){p(!0);return}l(b);const y=await i(e,b);l(""),y&&(c(!1),p(!1))};return t.jsxs("span",{className:"rstat",onClick:b=>b.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"rstb",title:a.csLabel,onClick:()=>{c(b=>!b),p(!1)},children:[v||a.csNone,t.jsx("i",{children:"▾"})]}),d&&t.jsx("span",{className:"rstm",children:x?t.jsxs("span",{className:"rstask",children:[t.jsx("b",{children:a.csAnaNeedMemo}),t.jsx("button",{type:"button",className:"rsta pri",disabled:s.has(e.id),onClick:()=>{o(e),p(!1),c(!1)},children:s.has(e.id)?a.actMemoQueue:a.csAnaRun}),t.jsx("button",{type:"button",className:"rsta",onClick:()=>{(async()=>{l("Analysé");const b=await i(e,"Analysé");l(""),b&&(c(!1),p(!1))})()},children:a.csAnaAnyway})]}):gs(e,a).map(([b,y])=>t.jsx("button",{type:"button",className:"rsti"+(v===b?" on":"")+(h===b?" busy":""),disabled:!!h,onClick:()=>{u(b)},children:y},b))})]})}function vs({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:i}=_(),[o,s]=m.useState(""),[d,c]=m.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const h=(e.ceoStatus||"").trim(),l=(pt(e)||"").startsWith("CALL")&&ze(e)===3,x=ze(e)>=2,p=async u=>{if(o||u==="Analysé"&&!e.memoUrl&&!window.confirm(a.csAnaConfirm))return;s(u);const b=await i(e,u);s(""),b&&(c(!0),setTimeout(()=>c(!1),2200))},v=l?[["Validé",a.csYes],["Écarté",a.csNo]]:Dr.filter(([u])=>!(x&&u==="Retenu")).map(([u,b])=>[u,a[b]]);return t.jsxs("div",{className:"csp",onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{className:"csrow",children:[t.jsx("span",{className:"cslb",children:a.csLabel}),v.map(([u,b])=>t.jsx("button",{type:"button",className:"csb"+(h===u?" on":"")+(o===u?" busy":""),disabled:!!o,onClick:()=>{p(u)},children:b},u)),d&&t.jsx("span",{className:"csok",children:a.csSaved})]}),t.jsx(ys,{o:e})]})}function ys({o:e}){const{t:a,saveNote:r,flash:n}=_(),[i,o]=m.useState(e.ceoNote||""),[s,d]=m.useState(!1),[c,h]=m.useState(!1),l=i.trim()!==(e.ceoNote||"").trim(),x=async()=>{if(s||!l)return;d(!0);const p=await r(e,i.trim());d(!1),p&&(h(!0),setTimeout(()=>h(!1),2200),n(a.csNoteSaved))};return t.jsxs("div",{className:"csnote",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:a.csNotePh,value:i,disabled:s,onChange:p=>o(p.target.value),onKeyDown:p=>{p.key==="Enter"&&x()}}),t.jsx("button",{type:"button",disabled:s||!l,onClick:()=>{x()},children:c?a.csNoteSaved:a.csNoteOk})]})}function ws({placeholder:e,onDone:a}){const{t:r}=_(),[n,i]=m.useState("");return t.jsxs("div",{className:"csnote why",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:e,value:n,autoFocus:!0,onChange:o=>i(o.target.value),onKeyDown:o=>{o.key==="Enter"&&a(n.trim()),o.key==="Escape"&&a("")},onBlur:()=>{n.trim()||a("")}}),t.jsx("button",{type:"button",onClick:()=>a(n.trim()),children:r.whySend})]})}function ks({o:e}){var y;const{t:a,token:r,caps:n,canWrite:i,stageOf:o,setStage:s,flashErr:d}=_(),[c,h]=m.useState(!1);if(!n.pipe||!i||n.lockActions||ze(e)!==4)return null;const l=o(e),x=(l==null?void 0:l.stage)||"todo",p=async f=>{if(c||f===x)return;h(!0);const j=l;s(e,{stage:f,stamps:(l==null?void 0:l.stamps)||{}});const C=Math.max(Date.now(),Hn+=1);Hn=C;const k=await Vo(r,{company:e.name||"",stage:f,cts:C,deal_id:e.airtableId,check_id:e.checkId});h(!1),!k.stale&&(k.ok||(s(e,j),d(a.actErr)))},v=(y=l==null?void 0:l.stamps)==null?void 0:y.sent,u=v?Math.floor((Date.now()-Date.parse(v))/864e5):0,b=x==="sent"&&v&&u>=4;return t.jsxs("div",{className:"stg",onClick:f=>f.stopPropagation(),children:[t.jsx("span",{className:"stglb",children:a.stgLabel}),a.stg.map(([f,j])=>t.jsx("button",{type:"button",className:"stgb"+(x===f?" on":""),disabled:c,onClick:()=>{p(f)},children:j},f)),b&&t.jsx("span",{className:"stgj4",children:a.j4Badge(u)})]})}let Hn=0;const oa=8,ia=360;function Vn({text:e}){const a=e.split(/\*\*(.+?)\*\*/g);return t.jsx(t.Fragment,{children:a.map((r,n)=>n%2?t.jsx("b",{children:r},n):t.jsx("span",{children:r},n))})}function Wn({text:e}){const a=(e||"").split(`
`).map(n=>n.trim()).filter(Boolean),r=a.filter(n=>n.startsWith("·"));return t.jsxs(t.Fragment,{children:[a.filter(n=>!n.startsWith("·")).map((n,i)=>t.jsx("p",{children:t.jsx(Vn,{text:n})},"p"+i)),r.length>0&&t.jsx("ul",{className:"tour-ul",children:r.map((n,i)=>t.jsx("li",{children:t.jsx(Vn,{text:n.replace(/^·\s*/,"")})},"l"+i))})]})}function js({steps:e,onClose:a}){const{t:r,dispatch:n,counts:i,st:o}=_(),[s,d]=m.useState(0),[c,h]=m.useState(null),[l,x]=m.useState([]),p=m.useRef(!1),v=m.useRef({ptab:o.ptab,dens:o.dens,modal:o.modal}),u=m.useRef(!1);m.useEffect(()=>{const A=v.current;return()=>{u.current||(n({type:"ptab",tab:A.ptab}),n({type:"dens",dens:A.dens}),n({type:"modal",modal:A.modal}))}},[]),m.useEffect(()=>{p.current||(p.current=!0,x(e.filter(A=>!!document.querySelector(A.need||A.sel))))},[e]);const b=l[s],y=s>=l.length;m.useEffect(()=>{if(b&&(b.ptab!==void 0&&o.ptab!==b.ptab&&n({type:"ptab",tab:b.ptab}),b.dens&&o.dens!==b.dens&&n({type:"dens",dens:b.dens}),o.modal!==(b.modal??null)&&n({type:"modal",modal:b.modal??null}),b.click)){const A=b.click,q=window.setTimeout(()=>{const z=document.querySelector(A);z&&z.getAttribute("aria-selected")!=="true"&&z.click()},60);return()=>window.clearTimeout(q)}},[s,b]);const f=m.useRef(-1),j=m.useCallback(()=>{if(!b){h(null);return}const A=document.querySelector(b.sel)||(b.need?document.querySelector(b.need):null);if(!A){h(null);return}f.current!==s&&(f.current=s,A.scrollIntoView({block:"nearest",behavior:"smooth"}));const q=A.getBoundingClientRect();h(z=>z&&Math.abs(z.top-q.top)<1&&Math.abs(z.left-q.left)<1&&Math.abs(z.width-q.width)<1&&Math.abs(z.height-q.height)<1?z:q)},[b,s]);m.useLayoutEffect(()=>{j();const A=[90,300,700,1300].map(z=>window.setTimeout(j,z)),q=()=>j();return window.addEventListener("scroll",q,!0),window.addEventListener("resize",q),()=>{A.forEach(z=>window.clearTimeout(z)),window.removeEventListener("scroll",q,!0),window.removeEventListener("resize",q)}},[j]);const C=m.useRef(a);if(C.current=a,m.useEffect(()=>{const A=q=>{q.key==="Escape"?(q.preventDefault(),q.stopPropagation(),C.current()):q.key==="ArrowRight"?d(z=>z+1):q.key==="ArrowLeft"&&d(z=>Math.max(0,z-1))};return document.addEventListener("keydown",A,!0),()=>document.removeEventListener("keydown",A,!0)},[]),!l.length)return null;let k=null;const N=A=>()=>{u.current=!0,n({type:"modal",modal:null}),A()};if(y){const A=i[3]||0;A>0?k={title:A===1?r.ahaATitle1:r.ahaATitleN(A),body:r.ahaABody,btn:r.ahaABtn,go:N(()=>{n({type:"ptab",tab:3}),a()})}:(i[1]||0)>0?k={title:r.ahaRetTitle(i[1]||0),body:r.ahaRetBody,btn:r.ahaRetBtn,go:N(()=>{n({type:"ptab",tab:1}),a()})}:(i[0]||0)>0?k={title:r.ahaEvalTitle(i[0]||0),body:r.ahaEvalBody,btn:r.ahaEvalBtn,go:N(()=>{n({type:"ptab",tab:0}),a()})}:k={title:r.ahaCTitle,body:r.ahaCBody,btn:r.ahaCBtn,go:N(()=>{n({type:"modal",modal:"crit"}),a()})}}let T={left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:ia};if(!y&&c){const A=c.bottom+14,z=window.innerHeight-A>190?A:Math.max(12,c.top-200);T={left:Math.min(Math.max(12,c.left+c.width/2-ia/2),window.innerWidth-ia-12),top:z,width:ia}}return Pt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"tour",role:"dialog","aria-modal":"true",children:[!y&&c&&t.jsx("div",{className:"tour-hole",style:{left:c.left-oa,top:c.top-oa,width:c.width+oa*2,height:c.height+oa*2}}),(y||!c)&&t.jsx("div",{className:"tour-veil"}),t.jsxs("div",{className:"tour-card"+(y?" fin":""),style:T,children:[y&&k?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:k.title}),t.jsx(Wn,{text:k.body}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",onClick:()=>d(l.length-1),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:k.go,children:k.btn})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"tour-n",children:[r.tourStep(s+1,l.length),t.jsx("span",{className:"tour-bar",children:t.jsx("i",{style:{width:(s+1)/l.length*100+"%"}})})]}),t.jsx("h3",{children:b==null?void 0:b.title}),t.jsx(Wn,{text:(b==null?void 0:b.body)||""}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",disabled:s===0,onClick:()=>d(A=>Math.max(0,A-1)),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:()=>d(A=>A+1),children:s===l.length-1?r.tourDone:r.tourNext})]})]}),t.jsx("button",{type:"button",className:"tour-x","aria-label":r.tourClose,title:r.tourClose,onClick:a,children:"×"})]})]})}),document.body)}function Ir(e){let a="";for(const r of e){const n=(r.date||"").slice(0,10);n&&n>a&&(a=n)}return a}function Br(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(e||"");return r?a==="en"?`${r[2]}/${r[3]}`:`${r[3]}/${r[2]}`:""}function Ns(){var q,z;const{dossiers:e,scopedAll:a,pipe:r,mode:n,t:i,st:o,lang:s,data:d,dispatch:c}=_(),h=r?a:e,l=m.useMemo(()=>h.filter(E=>st(E.date)===0&&E.kind==="target"),[h]),x=m.useMemo(()=>r?a.filter(E=>E.kind==="target"&&ze(E)===0).slice().sort((E,P)=>(P.date||"").localeCompare(E.date||"")):[],[a,r]),p=m.useMemo(()=>l.filter(E=>r?ze(E)===0:!De(E)),[l,r]),v=r?x:p,u=r?a.length-x.length:l.length-p.length,b=r?a.length:l.length,y=b?Math.min(100,u/b*100):100,f=m.useMemo(()=>Ir(h),[h]),j=!!f&&st(f)>0,C=m.useMemo(()=>j?h.filter(E=>(E.date||"").slice(0,10)===f):[],[h,f,j]),k=typeof((q=d.stats)==null?void 0:q.kept_today)=="number"?d.stats.kept_today:null,N=typeof((z=d.stats)==null?void 0:z.screened_today)=="number"?d.stats.screened_today:l.length;let T;j?T=i.morningLast(C.length,x.length,Br(f,s)):r?T=i.morningThesis(N,x.length,k):l.length?u===0?T=i.goalSourced(l.length):u>=l.length?T=i.goalCleared:T=i.goalDone(u,l.length):T=i.goalSourced(0);const A=()=>{if(!r){c({type:"pile",on:!0});return}c({type:"ptab",tab:0}),n==="client"&&x.length&&c({type:"chainStart",queue:x.map(E=>E.id)})};return t.jsxs("div",{className:"goal",children:[t.jsx("span",{className:"gtxt",title:r?i.morningEnginesTitle:void 0,dangerouslySetInnerHTML:{__html:T}}),t.jsx("div",{className:"pbar",children:t.jsx("i",{style:{width:y+"%"}})}),v.length>0&&t.jsx("button",{type:"button",className:"pilebtn",onClick:A,children:r?i.morningEval(v.length):o.pileMode?i.goalContinue(v.length):i.goalTreat}),t.jsx("span",{className:"gspace"})]})}function Ss(){var W,$;const{t:e,lang:a,st:r,dispatch:n,token:i,fund:o,data:s,dossiers:d,mode:c,doSync:h,startTour:l,flash:x,flashErr:p}=_(),[v,u]=m.useState(null),[b,y]=m.useState(!0),[f,j]=m.useState([]),C=c==="client";m.useEffect(()=>{if(!i||!o)return;let U=!0;return y(!0),(async()=>{const[oe,X]=await Promise.all([fn(o),Cr(i)]);U&&(oe&&u(oe),y(!1),j(X))})(),()=>{U=!1}},[i,o]);const[k,N]=m.useState(!1),T=()=>{!C||k||!o||(N(!0),Wo(o).then(U=>{N(!1),U?x(e.identRepubDone):p(e.actErr)}))},A=(v==null?void 0:v.per_day)??null,q=((W=v==null?void 0:v.pool_order)==null?void 0:W.length)??0,z=f.filter(U=>U.status==="running").length,E=m.useMemo(()=>d.filter(U=>U.kind==="target"&&De(U)).length,[d]),P=s.marketEstimate,I=typeof(($=s.stats)==null?void 0:$.screened)=="number"?s.stats.screened:E,R=P&&P>0?Math.min(100,Math.round(I/P*100)):null,D=U=>U.toLocaleString(a==="en"?"en-US":"fr-FR"),g=(o||"P").split(/\s+/).map(U=>U[0]).join("").slice(0,2).toUpperCase(),L=(()=>{const U=Date.parse(s.generatedAt||"");if(Number.isNaN(U))return"";const oe=new Date(U),X=Y=>String(Y).padStart(2,"0");return`${X(oe.getDate())}/${X(oe.getMonth()+1)} à ${X(oe.getHours())}:${X(oe.getMinutes())}`})();return t.jsxs("div",{className:"ident",children:[t.jsxs("div",{className:"idtop",children:[t.jsxs("span",{className:"brand",children:[t.jsx("b",{children:o?g:t.jsx("span",{className:"skt sk-ini"})}),t.jsx("i",{children:o||t.jsx("span",{className:"skt sk-nm"})})]}),t.jsx("h1",{children:o?e.identTitle(o):t.jsx("span",{className:"skt sk-h1","aria-label":e.loadingV2})}),t.jsx("span",{className:"idsp"}),L?t.jsx("span",{className:"idupd",children:e.identUpdatedAt(L)}):t.jsx("span",{className:"skt sk-upd"}),t.jsx("button",{type:"button",className:"ic",title:e.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),t.jsx("button",{type:"button",className:"ic",title:e.tourPlayTitle,onClick:l,children:"▶"})]}),t.jsxs("div",{className:"idmain",children:[R===null&&I>0&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsx("span",{className:"ev",children:t.jsx("b",{children:D(I)})})]}),R!==null&&P&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsxs("span",{className:"ev",children:[t.jsx("span",{className:"bar",children:t.jsx("i",{style:{width:R+"%"}})}),t.jsxs("b",{children:[R," %"]})]}),t.jsx("span",{className:"edv"}),t.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:e.identCoverageOf(I,P)}})]}),t.jsxs("span",{className:"engine",title:e.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[t.jsx("span",{className:"el",children:e.identEngine}),A!==null&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"ev",children:[t.jsx("b",{className:"q",children:A})," ",e.identPerDay]}),t.jsx("span",{className:"edv"})]}),A===0&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"epause",title:e.identPauseTitle,children:e.identPause}),t.jsx("span",{className:"edv"})]}),z>0&&t.jsxs("span",{className:"ev",children:["⏳ ",z]}),t.jsx("span",{className:"ego",children:b?e.identPendingWait:e.identPending(q)}),t.jsx("button",{type:"button",className:"ebell",title:e.memoAlertBtn,onClick:U=>{U.stopPropagation(),n({type:"modal",modal:"memoalert"})},children:"🔔"})]}),t.jsx("span",{className:"idsp"}),t.jsxs("span",{className:"icgrp",children:[t.jsx("button",{type:"button",className:"ic","data-tour":"export",title:e.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),t.jsx("button",{type:"button",className:"ic","data-tour":"plug",title:e.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),t.jsx("button",{type:"button",className:"ic","data-tour":"alert",title:e.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),t.jsx("button",{type:"button",className:"ic",title:e.identRepub,disabled:!C||k,onClick:T,children:k?"⏳":"📰"}),t.jsx("button",{type:"button",className:"ic",title:e.identSync,disabled:!C,onClick:h,children:"🔄"})]}),t.jsxs("span",{className:"isrch",children:["🔍",t.jsx("input",{placeholder:e.identSearch,value:r.filters.search,onChange:U=>n({type:"filters",patch:{search:U.target.value}})})]})]})]})}class kt{constructor(){this._partials=new Float64Array(32),this._n=0}add(a){const r=this._partials;let n=0;for(let i=0;i<this._n&&i<32;i++){const o=r[i],s=a+o,d=Math.abs(a)<Math.abs(o)?a-(s-o):o-(s-a);d&&(r[n++]=d),a=s}return r[n]=a,this._n=n+1,this}valueOf(){const a=this._partials;let r=this._n,n,i,o,s=0;if(r>0){for(s=a[--r];r>0&&(n=s,i=a[--r],s=n+i,o=i-(s-n),!o););r>0&&(o<0&&a[r-1]<0||o>0&&a[r-1]>0)&&(i=o*2,n=s+i,i==n-s&&(s=n))}return s}}function*Es(e){for(const a of e)yield*a}function $r(e){return Array.from(Es(e))}var ve=1e-6,pe=Math.PI,We=pe/2,Yn=pe/4,Ge=pe*2,ot=180/pe,$e=pe/180,je=Math.abs,Cs=Math.atan,Kt=Math.atan2,Ee=Math.cos,Ce=Math.sin,zs=Math.sign||function(e){return e>0?1:e<0?-1:0},Et=Math.sqrt;function As(e){return e>1?0:e<-1?pe:Math.acos(e)}function Qt(e){return e>1?We:e<-1?-We:Math.asin(e)}function Ye(){}function ka(e,a){e&&Kn.hasOwnProperty(e.type)&&Kn[e.type](e,a)}var Gn={Feature:function(e,a){ka(e.geometry,a)},FeatureCollection:function(e,a){for(var r=e.features,n=-1,i=r.length;++n<i;)ka(r[n].geometry,a)}},Kn={Sphere:function(e,a){a.sphere()},Point:function(e,a){e=e.coordinates,a.point(e[0],e[1],e[2])},MultiPoint:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)e=r[n],a.point(e[0],e[1],e[2])},LineString:function(e,a){Qa(e.coordinates,a,0)},MultiLineString:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)Qa(r[n],a,0)},Polygon:function(e,a){Qn(e.coordinates,a)},MultiPolygon:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)Qn(r[n],a)},GeometryCollection:function(e,a){for(var r=e.geometries,n=-1,i=r.length;++n<i;)ka(r[n],a)}};function Qa(e,a,r){var n=-1,i=e.length-r,o;for(a.lineStart();++n<i;)o=e[n],a.point(o[0],o[1],o[2]);a.lineEnd()}function Qn(e,a){var r=-1,n=e.length;for(a.polygonStart();++r<n;)Qa(e[r],a,1);a.polygonEnd()}function Lt(e,a){e&&Gn.hasOwnProperty(e.type)?Gn[e.type](e,a):ka(e,a)}function Ja(e){return[Kt(e[1],e[0]),Qt(e[2])]}function Rt(e){var a=e[0],r=e[1],n=Ee(r);return[n*Ee(a),n*Ce(a),Ce(r)]}function sa(e,a){return e[0]*a[0]+e[1]*a[1]+e[2]*a[2]}function ja(e,a){return[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]]}function Ia(e,a){e[0]+=a[0],e[1]+=a[1],e[2]+=a[2]}function la(e,a){return[e[0]*a,e[1]*a,e[2]*a]}function Xa(e){var a=Et(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=a,e[1]/=a,e[2]/=a}function Za(e,a){function r(n,i){return n=e(n,i),a(n[0],n[1])}return e.invert&&a.invert&&(r.invert=function(n,i){return n=a.invert(n,i),n&&e.invert(n[0],n[1])}),r}function en(e,a){return je(e)>pe&&(e-=Math.round(e/Ge)*Ge),[e,a]}en.invert=en;function Ts(e,a,r){return(e%=Ge)?a||r?Za(Xn(e),Zn(a,r)):Xn(e):a||r?Zn(a,r):en}function Jn(e){return function(a,r){return a+=e,je(a)>pe&&(a-=Math.round(a/Ge)*Ge),[a,r]}}function Xn(e){var a=Jn(e);return a.invert=Jn(-e),a}function Zn(e,a){var r=Ee(e),n=Ce(e),i=Ee(a),o=Ce(a);function s(d,c){var h=Ee(c),l=Ee(d)*h,x=Ce(d)*h,p=Ce(c),v=p*r+l*n;return[Kt(x*i-v*o,l*r-p*n),Qt(v*i+x*o)]}return s.invert=function(d,c){var h=Ee(c),l=Ee(d)*h,x=Ce(d)*h,p=Ce(c),v=p*i-x*o;return[Kt(x*i+p*o,l*r+v*n),Qt(v*r-l*n)]},s}function Ls(e,a,r,n,i,o){if(r){var s=Ee(a),d=Ce(a),c=n*r;i==null?(i=a+n*Ge,o=a-c/2):(i=er(s,i),o=er(s,o),(n>0?i<o:i>o)&&(i+=n*Ge));for(var h,l=i;n>0?l>o:l<o;l-=c)h=Ja([s,-d*Ee(l),-d*Ce(l)]),e.point(h[0],h[1])}}function er(e,a){a=Rt(a),a[0]-=e,Xa(a);var r=As(-a[1]);return((-a[2]<0?-r:r)+Ge-ve)%Ge}function _r(){var e=[],a;return{point:function(r,n,i){a.push([r,n,i])},lineStart:function(){e.push(a=[])},lineEnd:Ye,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],a=null,r}}}function fa(e,a){return je(e[0]-a[0])<ve&&je(e[1]-a[1])<ve}function da(e,a,r,n){this.x=e,this.z=a,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function Ur(e,a,r,n,i){var o=[],s=[],d,c;if(e.forEach(function(u){if(!((b=u.length-1)<=0)){var b,y=u[0],f=u[b],j;if(fa(y,f)){if(!y[2]&&!f[2]){for(i.lineStart(),d=0;d<b;++d)i.point((y=u[d])[0],y[1]);i.lineEnd();return}f[0]+=2*ve}o.push(j=new da(y,u,null,!0)),s.push(j.o=new da(y,null,j,!1)),o.push(j=new da(f,u,null,!1)),s.push(j.o=new da(f,null,j,!0))}}),!!o.length){for(s.sort(a),tr(o),tr(s),d=0,c=s.length;d<c;++d)s[d].e=r=!r;for(var h=o[0],l,x;;){for(var p=h,v=!0;p.v;)if((p=p.n)===h)return;l=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(v)for(d=0,c=l.length;d<c;++d)i.point((x=l[d])[0],x[1]);else n(p.x,p.n.x,1,i);p=p.n}else{if(v)for(l=p.p.z,d=l.length-1;d>=0;--d)i.point((x=l[d])[0],x[1]);else n(p.x,p.p.x,-1,i);p=p.p}p=p.o,l=p.z,v=!v}while(!p.v);i.lineEnd()}}}function tr(e){if(a=e.length){for(var a,r=0,n=e[0],i;++r<a;)n.n=i=e[r],i.p=n,n=i;n.n=i=e[0],i.p=n}}function Ba(e){return je(e[0])<=pe?e[0]:zs(e[0])*((je(e[0])+pe)%Ge-pe)}function qs(e,a){var r=Ba(a),n=a[1],i=Ce(n),o=[Ce(r),-Ee(r),0],s=0,d=0,c=new kt;i===1?n=We+ve:i===-1&&(n=-We-ve);for(var h=0,l=e.length;h<l;++h)if(p=(x=e[h]).length)for(var x,p,v=x[p-1],u=Ba(v),b=v[1]/2+Yn,y=Ce(b),f=Ee(b),j=0;j<p;++j,u=k,y=T,f=A,v=C){var C=x[j],k=Ba(C),N=C[1]/2+Yn,T=Ce(N),A=Ee(N),q=k-u,z=q>=0?1:-1,E=z*q,P=E>pe,I=y*T;if(c.add(Kt(I*z*Ce(E),f*A+I*Ee(E))),s+=P?q+z*Ge:q,P^u>=r^k>=r){var R=ja(Rt(v),Rt(C));Xa(R);var D=ja(o,R);Xa(D);var g=(P^q>=0?-1:1)*Qt(D[2]);(n>g||n===g&&(R[0]||R[1]))&&(d+=P^q>=0?1:-1)}}return(s<-ve||s<ve&&c<-1e-12)^d&1}function Hr(e,a,r,n){return function(i){var o=a(i),s=_r(),d=a(s),c=!1,h,l,x,p={point:v,lineStart:b,lineEnd:y,polygonStart:function(){p.point=f,p.lineStart=j,p.lineEnd=C,l=[],h=[]},polygonEnd:function(){p.point=v,p.lineStart=b,p.lineEnd=y,l=$r(l);var k=qs(h,n);l.length?(c||(i.polygonStart(),c=!0),Ur(l,Fs,k,r,i)):k&&(c||(i.polygonStart(),c=!0),i.lineStart(),r(null,null,1,i),i.lineEnd()),c&&(i.polygonEnd(),c=!1),l=h=null},sphere:function(){i.polygonStart(),i.lineStart(),r(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function v(k,N){e(k,N)&&i.point(k,N)}function u(k,N){o.point(k,N)}function b(){p.point=u,o.lineStart()}function y(){p.point=v,o.lineEnd()}function f(k,N){x.push([k,N]),d.point(k,N)}function j(){d.lineStart(),x=[]}function C(){f(x[0][0],x[0][1]),d.lineEnd();var k=d.clean(),N=s.result(),T,A=N.length,q,z,E;if(x.pop(),h.push(x),x=null,!!A){if(k&1){if(z=N[0],(q=z.length-1)>0){for(c||(i.polygonStart(),c=!0),i.lineStart(),T=0;T<q;++T)i.point((E=z[T])[0],E[1]);i.lineEnd()}return}A>1&&k&2&&N.push(N.pop().concat(N.shift())),l.push(N.filter(Ms))}}return p}}function Ms(e){return e.length>1}function Fs(e,a){return((e=e.x)[0]<0?e[1]-We-ve:We-e[1])-((a=a.x)[0]<0?a[1]-We-ve:We-a[1])}const ar=Hr(function(){return!0},Rs,Ps,[-pe,-We]);function Rs(e){var a=NaN,r=NaN,n=NaN,i;return{lineStart:function(){e.lineStart(),i=1},point:function(o,s){var d=o>0?pe:-pe,c=je(o-a);je(c-pe)<ve?(e.point(a,r=(r+s)/2>0?We:-We),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(d,r),e.point(o,r),i=0):n!==d&&c>=pe&&(je(a-n)<ve&&(a-=n*ve),je(o-d)<ve&&(o-=d*ve),r=Os(a,r,o,s),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(d,r),i=0),e.point(a=o,r=s),n=d},lineEnd:function(){e.lineEnd(),a=r=NaN},clean:function(){return 2-i}}}function Os(e,a,r,n){var i,o,s=Ce(e-r);return je(s)>ve?Cs((Ce(a)*(o=Ee(n))*Ce(r)-Ce(n)*(i=Ee(a))*Ce(e))/(i*o*s)):(a+n)/2}function Ps(e,a,r,n){var i;if(e==null)i=r*We,n.point(-pe,i),n.point(0,i),n.point(pe,i),n.point(pe,0),n.point(pe,-i),n.point(0,-i),n.point(-pe,-i),n.point(-pe,0),n.point(-pe,i);else if(je(e[0]-a[0])>ve){var o=e[0]<a[0]?pe:-pe;i=r*o/2,n.point(-o,i),n.point(0,i),n.point(o,i)}else n.point(a[0],a[1])}function Ds(e){var a=Ee(e),r=2*$e,n=a>0,i=je(a)>ve;function o(l,x,p,v){Ls(v,e,r,p,l,x)}function s(l,x){return Ee(l)*Ee(x)>a}function d(l){var x,p,v,u,b;return{lineStart:function(){u=v=!1,b=1},point:function(y,f){var j=[y,f],C,k=s(y,f),N=n?k?0:h(y,f):k?h(y+(y<0?pe:-pe),f):0;if(!x&&(u=v=k)&&l.lineStart(),k!==v&&(C=c(x,j),(!C||fa(x,C)||fa(j,C))&&(j[2]=1)),k!==v)b=0,k?(l.lineStart(),C=c(j,x),l.point(C[0],C[1])):(C=c(x,j),l.point(C[0],C[1],2),l.lineEnd()),x=C;else if(i&&x&&n^k){var T;!(N&p)&&(T=c(j,x,!0))&&(b=0,n?(l.lineStart(),l.point(T[0][0],T[0][1]),l.point(T[1][0],T[1][1]),l.lineEnd()):(l.point(T[1][0],T[1][1]),l.lineEnd(),l.lineStart(),l.point(T[0][0],T[0][1],3)))}k&&(!x||!fa(x,j))&&l.point(j[0],j[1]),x=j,v=k,p=N},lineEnd:function(){v&&l.lineEnd(),x=null},clean:function(){return b|(u&&v)<<1}}}function c(l,x,p){var v=Rt(l),u=Rt(x),b=[1,0,0],y=ja(v,u),f=sa(y,y),j=y[0],C=f-j*j;if(!C)return!p&&l;var k=a*f/C,N=-a*j/C,T=ja(b,y),A=la(b,k),q=la(y,N);Ia(A,q);var z=T,E=sa(A,z),P=sa(z,z),I=E*E-P*(sa(A,A)-1);if(!(I<0)){var R=Et(I),D=la(z,(-E-R)/P);if(Ia(D,A),D=Ja(D),!p)return D;var g=l[0],L=x[0],W=l[1],$=x[1],U;L<g&&(U=g,g=L,L=U);var oe=L-g,X=je(oe-pe)<ve,Y=X||oe<ve;if(!X&&$<W&&(U=W,W=$,$=U),Y?X?W+$>0^D[1]<(je(D[0]-g)<ve?W:$):W<=D[1]&&D[1]<=$:oe>pe^(g<=D[0]&&D[0]<=L)){var ie=la(z,(-E+R)/P);return Ia(ie,A),[D,Ja(ie)]}}}function h(l,x){var p=n?e:pe-e,v=0;return l<-p?v|=1:l>p&&(v|=2),x<-p?v|=4:x>p&&(v|=8),v}return Hr(s,d,o,n?[0,-e]:[-pe,e-pe])}function Is(e,a,r,n,i,o){var s=e[0],d=e[1],c=a[0],h=a[1],l=0,x=1,p=c-s,v=h-d,u;if(u=r-s,!(!p&&u>0)){if(u/=p,p<0){if(u<l)return;u<x&&(x=u)}else if(p>0){if(u>x)return;u>l&&(l=u)}if(u=i-s,!(!p&&u<0)){if(u/=p,p<0){if(u>x)return;u>l&&(l=u)}else if(p>0){if(u<l)return;u<x&&(x=u)}if(u=n-d,!(!v&&u>0)){if(u/=v,v<0){if(u<l)return;u<x&&(x=u)}else if(v>0){if(u>x)return;u>l&&(l=u)}if(u=o-d,!(!v&&u<0)){if(u/=v,v<0){if(u>x)return;u>l&&(l=u)}else if(v>0){if(u<l)return;u<x&&(x=u)}return l>0&&(e[0]=s+l*p,e[1]=d+l*v),x<1&&(a[0]=s+x*p,a[1]=d+x*v),!0}}}}}var _t=1e9,ca=-_t;function Bs(e,a,r,n){function i(h,l){return e<=h&&h<=r&&a<=l&&l<=n}function o(h,l,x,p){var v=0,u=0;if(h==null||(v=s(h,x))!==(u=s(l,x))||c(h,l)<0^x>0)do p.point(v===0||v===3?e:r,v>1?n:a);while((v=(v+x+4)%4)!==u);else p.point(l[0],l[1])}function s(h,l){return je(h[0]-e)<ve?l>0?0:3:je(h[0]-r)<ve?l>0?2:1:je(h[1]-a)<ve?l>0?1:0:l>0?3:2}function d(h,l){return c(h.x,l.x)}function c(h,l){var x=s(h,1),p=s(l,1);return x!==p?x-p:x===0?l[1]-h[1]:x===1?h[0]-l[0]:x===2?h[1]-l[1]:l[0]-h[0]}return function(h){var l=h,x=_r(),p,v,u,b,y,f,j,C,k,N,T,A={point:q,lineStart:I,lineEnd:R,polygonStart:E,polygonEnd:P};function q(g,L){i(g,L)&&l.point(g,L)}function z(){for(var g=0,L=0,W=v.length;L<W;++L)for(var $=v[L],U=1,oe=$.length,X=$[0],Y,ie,te=X[0],ge=X[1];U<oe;++U)Y=te,ie=ge,X=$[U],te=X[0],ge=X[1],ie<=n?ge>n&&(te-Y)*(n-ie)>(ge-ie)*(e-Y)&&++g:ge<=n&&(te-Y)*(n-ie)<(ge-ie)*(e-Y)&&--g;return g}function E(){l=x,p=[],v=[],T=!0}function P(){var g=z(),L=T&&g,W=(p=$r(p)).length;(L||W)&&(h.polygonStart(),L&&(h.lineStart(),o(null,null,1,h),h.lineEnd()),W&&Ur(p,d,g,o,h),h.polygonEnd()),l=h,p=v=u=null}function I(){A.point=D,v&&v.push(u=[]),N=!0,k=!1,j=C=NaN}function R(){p&&(D(b,y),f&&k&&x.rejoin(),p.push(x.result())),A.point=q,k&&l.lineEnd()}function D(g,L){var W=i(g,L);if(v&&u.push([g,L]),N)b=g,y=L,f=W,N=!1,W&&(l.lineStart(),l.point(g,L));else if(W&&k)l.point(g,L);else{var $=[j=Math.max(ca,Math.min(_t,j)),C=Math.max(ca,Math.min(_t,C))],U=[g=Math.max(ca,Math.min(_t,g)),L=Math.max(ca,Math.min(_t,L))];Is($,U,e,a,r,n)?(k||(l.lineStart(),l.point($[0],$[1])),l.point(U[0],U[1]),W||l.lineEnd(),T=!1):W&&(l.lineStart(),l.point(g,L),T=!1)}j=g,C=L,k=W}return A}}const tn=e=>e;var $a=new kt,an=new kt,Vr,Wr,nn,rn,it={point:Ye,lineStart:Ye,lineEnd:Ye,polygonStart:function(){it.lineStart=$s,it.lineEnd=Us},polygonEnd:function(){it.lineStart=it.lineEnd=it.point=Ye,$a.add(je(an)),an=new kt},result:function(){var e=$a/2;return $a=new kt,e}};function $s(){it.point=_s}function _s(e,a){it.point=Yr,Vr=nn=e,Wr=rn=a}function Yr(e,a){an.add(rn*e-nn*a),nn=e,rn=a}function Us(){Yr(Vr,Wr)}var Ot=1/0,Na=Ot,Jt=-Ot,Sa=Jt,Ea={point:Hs,lineStart:Ye,lineEnd:Ye,polygonStart:Ye,polygonEnd:Ye,result:function(){var e=[[Ot,Na],[Jt,Sa]];return Jt=Sa=-(Na=Ot=1/0),e}};function Hs(e,a){e<Ot&&(Ot=e),e>Jt&&(Jt=e),a<Na&&(Na=a),a>Sa&&(Sa=a)}var on=0,sn=0,Ut=0,Ca=0,za=0,qt=0,ln=0,dn=0,Ht=0,Gr,Kr,at,nt,Ve={point:jt,lineStart:nr,lineEnd:rr,polygonStart:function(){Ve.lineStart=Ys,Ve.lineEnd=Gs},polygonEnd:function(){Ve.point=jt,Ve.lineStart=nr,Ve.lineEnd=rr},result:function(){var e=Ht?[ln/Ht,dn/Ht]:qt?[Ca/qt,za/qt]:Ut?[on/Ut,sn/Ut]:[NaN,NaN];return on=sn=Ut=Ca=za=qt=ln=dn=Ht=0,e}};function jt(e,a){on+=e,sn+=a,++Ut}function nr(){Ve.point=Vs}function Vs(e,a){Ve.point=Ws,jt(at=e,nt=a)}function Ws(e,a){var r=e-at,n=a-nt,i=Et(r*r+n*n);Ca+=i*(at+e)/2,za+=i*(nt+a)/2,qt+=i,jt(at=e,nt=a)}function rr(){Ve.point=jt}function Ys(){Ve.point=Ks}function Gs(){Qr(Gr,Kr)}function Ks(e,a){Ve.point=Qr,jt(Gr=at=e,Kr=nt=a)}function Qr(e,a){var r=e-at,n=a-nt,i=Et(r*r+n*n);Ca+=i*(at+e)/2,za+=i*(nt+a)/2,qt+=i,i=nt*e-at*a,ln+=i*(at+e),dn+=i*(nt+a),Ht+=i*3,jt(at=e,nt=a)}function Jr(e){this._context=e}Jr.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,a){switch(this._point){case 0:{this._context.moveTo(e,a),this._point=1;break}case 1:{this._context.lineTo(e,a);break}default:{this._context.moveTo(e+this._radius,a),this._context.arc(e,a,this._radius,0,Ge);break}}},result:Ye};var cn=new kt,_a,Xr,Zr,Vt,Wt,Xt={point:Ye,lineStart:function(){Xt.point=Qs},lineEnd:function(){_a&&eo(Xr,Zr),Xt.point=Ye},polygonStart:function(){_a=!0},polygonEnd:function(){_a=null},result:function(){var e=+cn;return cn=new kt,e}};function Qs(e,a){Xt.point=eo,Xr=Vt=e,Zr=Wt=a}function eo(e,a){Vt-=e,Wt-=a,cn.add(Et(Vt*Vt+Wt*Wt)),Vt=e,Wt=a}let or,Aa,ir,sr;class lr{constructor(a){this._append=a==null?to:Js(a),this._radius=4.5,this._=""}pointRadius(a){return this._radius=+a,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(a,r){switch(this._point){case 0:{this._append`M${a},${r}`,this._point=1;break}case 1:{this._append`L${a},${r}`;break}default:{if(this._append`M${a},${r}`,this._radius!==ir||this._append!==Aa){const n=this._radius,i=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,ir=n,Aa=this._append,sr=this._,this._=i}this._+=sr;break}}}result(){const a=this._;return this._="",a.length?a:null}}function to(e){let a=1;this._+=e[0];for(const r=e.length;a<r;++a)this._+=arguments[a]+e[a]}function Js(e){const a=Math.floor(e);if(!(a>=0))throw new RangeError(`invalid digits: ${e}`);if(a>15)return to;if(a!==or){const r=10**a;or=a,Aa=function(i){let o=1;this._+=i[0];for(const s=i.length;o<s;++o)this._+=Math.round(arguments[o]*r)/r+i[o]}}return Aa}function Xs(e,a){let r=3,n=4.5,i,o;function s(d){return d&&(typeof n=="function"&&o.pointRadius(+n.apply(this,arguments)),Lt(d,i(o))),o.result()}return s.area=function(d){return Lt(d,i(it)),it.result()},s.measure=function(d){return Lt(d,i(Xt)),Xt.result()},s.bounds=function(d){return Lt(d,i(Ea)),Ea.result()},s.centroid=function(d){return Lt(d,i(Ve)),Ve.result()},s.projection=function(d){return arguments.length?(i=d==null?(e=null,tn):(e=d).stream,s):e},s.context=function(d){return arguments.length?(o=d==null?(a=null,new lr(r)):new Jr(a=d),typeof n!="function"&&o.pointRadius(n),s):a},s.pointRadius=function(d){return arguments.length?(n=typeof d=="function"?d:(o.pointRadius(+d),+d),s):n},s.digits=function(d){if(!arguments.length)return r;if(d==null)r=null;else{const c=Math.floor(d);if(!(c>=0))throw new RangeError(`invalid digits: ${d}`);r=c}return a===null&&(o=new lr(r)),s},s.projection(e).digits(r).context(a)}function yn(e){return function(a){var r=new pn;for(var n in e)r[n]=e[n];return r.stream=a,r}}function pn(){}pn.prototype={constructor:pn,point:function(e,a){this.stream.point(e,a)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function wn(e,a,r){var n=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),n!=null&&e.clipExtent(null),Lt(r,e.stream(Ea)),a(Ea.result()),n!=null&&e.clipExtent(n),e}function ao(e,a,r){return wn(e,function(n){var i=a[1][0]-a[0][0],o=a[1][1]-a[0][1],s=Math.min(i/(n[1][0]-n[0][0]),o/(n[1][1]-n[0][1])),d=+a[0][0]+(i-s*(n[1][0]+n[0][0]))/2,c=+a[0][1]+(o-s*(n[1][1]+n[0][1]))/2;e.scale(150*s).translate([d,c])},r)}function Zs(e,a,r){return ao(e,[[0,0],a],r)}function el(e,a,r){return wn(e,function(n){var i=+a,o=i/(n[1][0]-n[0][0]),s=(i-o*(n[1][0]+n[0][0]))/2,d=-o*n[0][1];e.scale(150*o).translate([s,d])},r)}function tl(e,a,r){return wn(e,function(n){var i=+a,o=i/(n[1][1]-n[0][1]),s=-o*n[0][0],d=(i-o*(n[1][1]+n[0][1]))/2;e.scale(150*o).translate([s,d])},r)}var dr=16,al=Ee(30*$e);function cr(e,a){return+a?rl(e,a):nl(e)}function nl(e){return yn({point:function(a,r){a=e(a,r),this.stream.point(a[0],a[1])}})}function rl(e,a){function r(n,i,o,s,d,c,h,l,x,p,v,u,b,y){var f=h-n,j=l-i,C=f*f+j*j;if(C>4*a&&b--){var k=s+p,N=d+v,T=c+u,A=Et(k*k+N*N+T*T),q=Qt(T/=A),z=je(je(T)-1)<ve||je(o-x)<ve?(o+x)/2:Kt(N,k),E=e(z,q),P=E[0],I=E[1],R=P-n,D=I-i,g=j*R-f*D;(g*g/C>a||je((f*R+j*D)/C-.5)>.3||s*p+d*v+c*u<al)&&(r(n,i,o,s,d,c,P,I,z,k/=A,N/=A,T,b,y),y.point(P,I),r(P,I,z,k,N,T,h,l,x,p,v,u,b,y))}}return function(n){var i,o,s,d,c,h,l,x,p,v,u,b,y={point:f,lineStart:j,lineEnd:k,polygonStart:function(){n.polygonStart(),y.lineStart=N},polygonEnd:function(){n.polygonEnd(),y.lineStart=j}};function f(q,z){q=e(q,z),n.point(q[0],q[1])}function j(){x=NaN,y.point=C,n.lineStart()}function C(q,z){var E=Rt([q,z]),P=e(q,z);r(x,p,l,v,u,b,x=P[0],p=P[1],l=q,v=E[0],u=E[1],b=E[2],dr,n),n.point(x,p)}function k(){y.point=f,n.lineEnd()}function N(){j(),y.point=T,y.lineEnd=A}function T(q,z){C(i=q,z),o=x,s=p,d=v,c=u,h=b,y.point=C}function A(){r(x,p,l,v,u,b,o,s,i,d,c,h,dr,n),y.lineEnd=k,k()}return y}}var ol=yn({point:function(e,a){this.stream.point(e*$e,a*$e)}});function il(e){return yn({point:function(a,r){var n=e(a,r);return this.stream.point(n[0],n[1])}})}function sl(e,a,r,n,i){function o(s,d){return s*=n,d*=i,[a+e*s,r-e*d]}return o.invert=function(s,d){return[(s-a)/e*n,(r-d)/e*i]},o}function pr(e,a,r,n,i,o){if(!o)return sl(e,a,r,n,i);var s=Ee(o),d=Ce(o),c=s*e,h=d*e,l=s/e,x=d/e,p=(d*r-s*a)/e,v=(d*a+s*r)/e;function u(b,y){return b*=n,y*=i,[c*b-h*y+a,r-h*b-c*y]}return u.invert=function(b,y){return[n*(l*b-x*y+p),i*(v-x*b-l*y)]},u}function ll(e){return dl(function(){return e})()}function dl(e){var a,r=150,n=480,i=250,o=0,s=0,d=0,c=0,h=0,l,x=0,p=1,v=1,u=null,b=ar,y=null,f,j,C,k=tn,N=.5,T,A,q,z,E;function P(g){return q(g[0]*$e,g[1]*$e)}function I(g){return g=q.invert(g[0],g[1]),g&&[g[0]*ot,g[1]*ot]}P.stream=function(g){return z&&E===g?z:z=ol(il(l)(b(T(k(E=g)))))},P.preclip=function(g){return arguments.length?(b=g,u=void 0,D()):b},P.postclip=function(g){return arguments.length?(k=g,y=f=j=C=null,D()):k},P.clipAngle=function(g){return arguments.length?(b=+g?Ds(u=g*$e):(u=null,ar),D()):u*ot},P.clipExtent=function(g){return arguments.length?(k=g==null?(y=f=j=C=null,tn):Bs(y=+g[0][0],f=+g[0][1],j=+g[1][0],C=+g[1][1]),D()):y==null?null:[[y,f],[j,C]]},P.scale=function(g){return arguments.length?(r=+g,R()):r},P.translate=function(g){return arguments.length?(n=+g[0],i=+g[1],R()):[n,i]},P.center=function(g){return arguments.length?(o=g[0]%360*$e,s=g[1]%360*$e,R()):[o*ot,s*ot]},P.rotate=function(g){return arguments.length?(d=g[0]%360*$e,c=g[1]%360*$e,h=g.length>2?g[2]%360*$e:0,R()):[d*ot,c*ot,h*ot]},P.angle=function(g){return arguments.length?(x=g%360*$e,R()):x*ot},P.reflectX=function(g){return arguments.length?(p=g?-1:1,R()):p<0},P.reflectY=function(g){return arguments.length?(v=g?-1:1,R()):v<0},P.precision=function(g){return arguments.length?(T=cr(A,N=g*g),D()):Et(N)},P.fitExtent=function(g,L){return ao(P,g,L)},P.fitSize=function(g,L){return Zs(P,g,L)},P.fitWidth=function(g,L){return el(P,g,L)},P.fitHeight=function(g,L){return tl(P,g,L)};function R(){var g=pr(r,0,0,p,v,x).apply(null,a(o,s)),L=pr(r,n-g[0],i-g[1],p,v,x);return l=Ts(d,c,h),A=Za(a,L),q=Za(l,A),T=cr(A,N),D()}function D(){return z=E=null,P}return function(){return a=e.apply(this,arguments),P.invert=a.invert&&I,R()}}function no(e,a){var r=a*a,n=r*r;return[e*(.8707-.131979*r+n*(-.013791+n*(.003971*r-.001529*n))),a*(1.007226+r*(.015085+n*(-.044475+.028874*r-.005916*n)))]}no.invert=function(e,a){var r=a,n=25,i;do{var o=r*r,s=o*o;r-=i=(r*(1.007226+o*(.015085+s*(-.044475+.028874*o-.005916*s)))-a)/(1.007226+o*(.015085*3+s*(-.044475*7+.028874*9*o-.005916*11*s)))}while(je(i)>ve&&--n>0);return[e/(.8707+(o=r*r)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),r]};function cl(){return ll(no).scale(175.295)}function pl(e){return e}function ul(e){if(e==null)return pl;var a,r,n=e.scale[0],i=e.scale[1],o=e.translate[0],s=e.translate[1];return function(d,c){c||(a=r=0);var h=2,l=d.length,x=new Array(l);for(x[0]=(a+=d[0])*n+o,x[1]=(r+=d[1])*i+s;h<l;)x[h]=d[h],++h;return x}}function ml(e,a){for(var r,n=e.length,i=n-a;i<--n;)r=e[i],e[i++]=e[n],e[n]=r}function fl(e,a){return typeof a=="string"&&(a=e.objects[a]),a.type==="GeometryCollection"?{type:"FeatureCollection",features:a.geometries.map(function(r){return ur(e,r)})}:ur(e,a)}function ur(e,a){var r=a.id,n=a.bbox,i=a.properties==null?{}:a.properties,o=xl(e,a);return r==null&&n==null?{type:"Feature",properties:i,geometry:o}:n==null?{type:"Feature",id:r,properties:i,geometry:o}:{type:"Feature",id:r,bbox:n,properties:i,geometry:o}}function xl(e,a){var r=ul(e.transform),n=e.arcs;function i(l,x){x.length&&x.pop();for(var p=n[l<0?~l:l],v=0,u=p.length;v<u;++v)x.push(r(p[v],v));l<0&&ml(x,u)}function o(l){return r(l)}function s(l){for(var x=[],p=0,v=l.length;p<v;++p)i(l[p],x);return x.length<2&&x.push(x[0]),x}function d(l){for(var x=s(l);x.length<4;)x.push(x[0]);return x}function c(l){return l.map(d)}function h(l){var x=l.type,p;switch(x){case"GeometryCollection":return{type:x,geometries:l.geometries.map(h)};case"Point":p=o(l.coordinates);break;case"MultiPoint":p=l.coordinates.map(o);break;case"LineString":p=s(l.arcs);break;case"MultiLineString":p=l.arcs.map(s);break;case"Polygon":p=c(l.arcs);break;case"MultiPolygon":p=l.arcs.map(c);break;default:return null}return{type:x,coordinates:p}}return h(a)}const ro={US:[{k:["new york","nyc","brooklyn","manhattan"],ll:[-74,40.7]},{k:["san francisco","sf","palo alto","mountain view","menlo park","san jose","oakland"],ll:[-122.3,37.6]},{k:["los angeles","santa monica","irvine"],ll:[-118.2,34.1]},{k:["seattle","bellevue","redmond"],ll:[-122.3,47.6]},{k:["austin"],ll:[-97.7,30.3]},{k:["boston","cambridge"],ll:[-71.1,42.4]},{k:["chicago"],ll:[-87.6,41.9]},{k:["miami"],ll:[-80.2,25.8]},{k:["denver","boulder"],ll:[-105,39.7]},{k:["atlanta"],ll:[-84.4,33.7]},{k:["washington","arlington","dc"],ll:[-77,38.9]},{k:["dallas","houston"],ll:[-96.8,31.5]},{k:["salt lake","provo"],ll:[-111.9,40.8]},{k:["phoenix","tempe"],ll:[-112.1,33.4]}],CA:[{k:["toronto","waterloo"],ll:[-79.4,43.7]},{k:["montreal"],ll:[-73.6,45.5]},{k:["vancouver"],ll:[-123.1,49.3]},{k:["calgary"],ll:[-114.1,51]},{k:["ottawa"],ll:[-75.7,45.4]}],AU:[{k:["sydney"],ll:[151.2,-33.9]},{k:["melbourne"],ll:[145,-37.8]},{k:["brisbane"],ll:[153,-27.5]},{k:["perth"],ll:[115.9,-32]}],BR:[{k:["sao paulo"],ll:[-46.6,-23.5]},{k:["rio"],ll:[-43.2,-22.9]}],IN:[{k:["bengaluru","bangalore"],ll:[77.6,13]},{k:["mumbai"],ll:[72.9,19.1]},{k:["delhi","gurgaon","gurugram","noida"],ll:[77.2,28.6]},{k:["hyderabad"],ll:[78.5,17.4]},{k:["chennai"],ll:[80.3,13.1]}],CN:[{k:["beijing","pekin"],ll:[116.4,39.9]},{k:["shanghai"],ll:[121.5,31.2]},{k:["shenzhen","canton","guangzhou"],ll:[113.9,22.7]}],RU:[{k:["moscou","moscow"],ll:[37.6,55.8]},{k:["saint petersbourg","saint petersburg"],ll:[30.3,59.9]}]},hl=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim();function gl(e,a,r){const n=ro[e];if(!n||!n.length)return-1;const i=hl(a||"");if(i){for(let o=0;o<n.length;o++)if(n[o].k.some(s=>i.includes(s)))return o}return Math.floor(r*n.length)%n.length}let pa=null;function bl(){return pa||(pa=(async()=>{var e;try{const a=await fetch("/world/countries-110m.json");if(!a.ok)return null;const r=await a.json(),n=(e=r==null?void 0:r.objects)==null?void 0:e.countries;if(!n)return null;const i=fl(r,n),o=cl().fitExtent([[8,8],[992,492]],{type:"Sphere"}),s=Xs(o),d=(i.features||[]).filter(l=>{var x;return(((x=l.properties)==null?void 0:x.name)||"")!=="Antarctica"}).map(l=>{var v;const x=((v=l.properties)==null?void 0:v.name)||"",p=s(l)||"";return p?{i2:Yo(x)||null,n:x,d:p}:null}).filter(l=>!!l);if(!d.length)return null;const c={};for(const[l,x]of Object.entries(Go)){const p=o(x);p&&(c[l]={x:p[0],y:p[1]})}const h={};for(const[l,x]of Object.entries(ro)){const p=x.map(v=>o(v.ll)).filter(v=>!!v).map(([v,u])=>({x:v,y:u}));p.length&&(h[l]=p)}return{key:"monde",viewBox:"40 48 920 360",fr:"Monde",en:"World",countries:d,anchors:c,metros:h}}catch{return null}})(),pa)}function vl(e){const[a,r]=m.useState(null);return m.useEffect(()=>{if(!e||a)return;let n=!1;return bl().then(i=>{!n&&i&&r(i)}),()=>{n=!0}},[e,a]),a}const yl="8 40 984 210",wl={"northam:US":{fx:.64,fy:.68,sx:.44,sy:.28},"northam:CA":{fx:.58,fy:.86,sx:.34,sy:.1},"oceania:AU":{fx:.72,fy:.62,sx:.34,sy:.3},"europe:RU":{fx:.18,fy:.62,sx:.14,sy:.3}},mr=["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"];function fr(e){let a=2166136261;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function kl(e,a){const[r,n]=m.useState(1);return m.useEffect(()=>{let i=!0,o=0;const s=()=>{var h;if(!i)return;const c=(h=e.current)==null?void 0:h.getScreenCTM();c&&c.a>0?n(c.a):o=requestAnimationFrame(s)};s();const d=new ResizeObserver(()=>s());return e.current&&d.observe(e.current),window.addEventListener("resize",s),()=>{i=!1,cancelAnimationFrame(o),d.disconnect(),window.removeEventListener("resize",s)}},[e,a]),r}function xr({msgs:e}){const[a,r]=m.useState(0);m.useEffect(()=>{const i=window.setInterval(()=>r(o=>o+1),2400);return()=>window.clearInterval(i)},[]);const n=[[46,34],[52,41],[41,46],[57,30],[49,52],[36,38],[61,45],[44,27]];return t.jsxs("div",{className:"mapskel","aria-hidden":"true",children:[n.map(([i,o],s)=>t.jsx("i",{style:{left:i+"%",top:o+"%","--d":s*.18+"s"}},s)),t.jsx("span",{className:"mskm",children:e[a%e.length]})]})}function jl(){const{st:e,dispatch:a,scoped:r,pipe:n,markRow:i,markedId:o,byId:s,lang:d,t:c,data:h,dossiers:l,source:x}=_(),p=h.loading&&!l.length,v=m.useRef(null),u=m.useRef(null),b=vl(e.continent==="monde"),y=e.continent==="monde"?b:xn.find(g=>g.key===e.continent)||null,f=kl(v,e.continent+":"+e.mapFolded+":"+!!y),[j,C]=m.useState(new Map),[k,N]=m.useState(null);m.useEffect(()=>{const g=v.current;if(!g)return;const L=new Map;g.querySelectorAll("path[data-i2]").forEach(W=>{const $=W.dataset.i2;if($)try{const U=W.getBBox();U.width>0&&L.set($,{x:U.x,y:U.y,w:U.width,h:U.height})}catch{}}),C(L)},[e.continent,f,y]);const T=m.useMemo(()=>r.filter(g=>g.cc),[r]),A=m.useMemo(()=>{const g=new Map;return T.forEach(L=>g.set(L.cc,(g.get(L.cc)||0)+1)),g},[T]),q=e.continent==="monde"&&b?b.anchors:null,z=e.continent==="monde"&&b?b.metros:null,E=m.useMemo(()=>T.map(g=>{const L=fr(g.name||g.id||""),W=fr((g.id||g.name||"")+"·y");if(q&&g.cc){const Y=z?z[g.cc]:void 0;if(Y&&Y.length){const te=gl(g.cc,g.city,L);if(te>=0&&Y[te])return{d:g,x:Y[te].x+(L-.5)*5,y:Y[te].y+(W-.5)*5}}const ie=q[g.cc];if(ie)return{d:g,x:ie.x+(L-.5)*10,y:ie.y+(W-.5)*10}}const $=g.cc?j.get(g.cc):void 0;if(!$)return null;const U=wl[`${e.continent}:${g.cc||""}`];if(U)return{d:g,x:$.x+$.w*(U.fx+(L-.5)*U.sx),y:$.y+$.h*(U.fy+(W-.5)*U.sy)};const oe=(L-.5)*Math.min($.w*.55,60),X=(W-.5)*Math.min($.h*.55,60);return{d:g,x:$.x+$.w/2+oe,y:$.y+$.h/2+X}}).filter(g=>!!g),[T,j,q,z,e.continent]),P=g=>f>0?g/f:g,I=m.useMemo(()=>n?[0,1,2,3,4,5].map(g=>({c:mr[g],fr:c.plabels[g].toUpperCase(),en:c.plabels[g].toUpperCase(),n:r.filter(L=>L.kind==="target"&&ze(L)===g).length})).filter(g=>g.n>0):Mn.map((g,L)=>({...g,n:r.filter(W=>Fn(W)===L).length})),[r,n,c.plabels]),R=o?s.get(o):null,D=R?E.find(g=>g.d.id===R.id):null;return y?t.jsxs("div",{className:"mapzone"+(p?" waiting":""),ref:u,children:[p&&t.jsx(xr,{msgs:c.loadMsgs}),t.jsxs("svg",{ref:v,viewBox:x==="ops"&&e.continent==="monde"?yl:y.viewBox,preserveAspectRatio:x==="ops"&&e.continent==="monde"?"xMidYMin slice":"xMidYMid meet",role:"img","aria-label":d==="fr"?y.fr:y.en,onMouseLeave:()=>{N(null),i(null)},children:[t.jsx("g",{children:y.countries.map((g,L)=>t.jsx("g",{className:"ct"+(g.i2&&A.get(g.i2)?"":" empty"),children:t.jsx("path",{d:g.d,"data-i2":g.i2||void 0})},L))}),t.jsx("g",{children:E.map(g=>{const L=Mn[Fn(g.d)],W=!!Te(g.d),$=g.d.kind==="target",U=n&&$?mr[ze(g.d)]:L.c,oe=!n&&De(g.d);return t.jsxs("g",{className:"co"+(oe?" done":""),onMouseEnter:()=>{var ie,te;const X=(ie=u.current)==null?void 0:ie.getBoundingClientRect(),Y=(te=v.current)==null?void 0:te.createSVGPoint();if(Y&&v.current&&X){Y.x=g.x,Y.y=g.y;const ge=Y.matrixTransform(v.current.getScreenCTM());N({x:ge.x-X.left,y:ge.y-X.top,label:g.d.name+" · "+(Dt(g.d.cc,d)||g.d.countryLabel||"")})}i(g.d.id)},onMouseLeave:()=>{N(null),i(null)},onClick:()=>{var ie;if(x==="ops"){window.dispatchEvent(new CustomEvent("ppmap:reveal")),a({type:"focus",id:g.d.id}),(g.d.noCo||["media","nominations","recrutements"].includes(g.d.engine||""))&&(g.d.url||g.d.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:g.d.url||"",text:[g.d.headline,g.d.tagline].filter(Boolean).join(`
`)}})):g.d.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:g.d.name,url:g.d.url||"",website:g.d.website||"",domain:g.d.domain||""}}));return}const X=(ie=v.current)==null?void 0:ie.createSVGPoint();let Y=null;if(X&&v.current){X.x=g.x,X.y=g.y;const te=X.matrixTransform(v.current.getScreenCTM());Y={x:te.x,y:te.y}}a({type:"popup",id:g.d.id,anchor:Y})},children:[t.jsx("circle",{className:"h",cx:g.x,cy:g.y,r:P(Math.max(11,L.px+7))}),t.jsx("circle",{className:"v",cx:g.x,cy:g.y,r:P(L.px),fill:U,stroke:W?"#DC2626":"#ffffff",strokeWidth:P(W?2.2:1.3)})]},g.d.id||g.d.name)})}),D&&t.jsx("circle",{className:"ring on",cx:D.x,cy:D.y,r:P(13),fill:"none",stroke:"#0F172A",strokeWidth:P(2)})]}),t.jsx("div",{className:"hov"+(k?" on":""),style:k?{left:k.x,top:k.y}:void 0,children:k==null?void 0:k.label}),t.jsx("div",{className:"legend",children:I.map((g,L)=>t.jsxs("span",{children:[t.jsx("i",{style:{"--c":g.c}}),d==="fr"?g.fr:g.en," ",t.jsx("b",{children:g.n})]},L))}),r.some(g=>!g.cc)&&t.jsx("div",{className:"legend",style:{left:"auto",right:10},children:t.jsxs("span",{children:["🌐 ",c.notLocated," ",t.jsx("b",{children:r.filter(g=>!g.cc).length})]})})]}):t.jsx("div",{className:"mapzone"+(p?" waiting":""),ref:u,children:t.jsx(xr,{msgs:c.loadMsgs})})}function Nl(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!r)return e;const i=(a==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||r[2],o=Number(r[3]);return a==="en"?`${i} ${o}, ${r[1]}`:`${o} ${i} ${r[1]}`}function oo({compact:e=!1}){const{st:a,dispatch:r,dossiers:n,t:i,pipe:o,contName:s,lang:d}=_(),c=a.filters,[h,l]=m.useState(!1),[x,p]=m.useState(!1),v=m.useRef(null),u=m.useRef(null),b=m.useMemo(()=>a.continent==="monde"?n:n.filter(R=>R.continent===a.continent),[n,a.continent]),y=R=>b.filter(D=>R!=="country"&&c.country.length&&!c.country.includes(D.cc||"")?!1:ya(D,c,o,R==="country"?void 0:R)),f=m.useMemo(()=>{const R=y("win"),D=g=>R.filter(L=>(L.date?Math.max(0,Math.floor((Date.now()-Date.parse(L.date))/864e5)):9999)<=g).length;return[D(0),D(7),D(30),R.length]},[b,c,o]),j=m.useMemo(()=>c.day?y("win").filter(R=>(R.date||"").slice(0,10)===c.day).length:0,[b,c,o]),C=(c.signalOnly?1:0)+c.sector.length+c.country.length+c.engine.length+c.stage.length+c.angle.length+c.memoLevel.length,k=C+(c.acquirer.trim()?1:0)+(c.day||c.win!=="all"?1:0)+(c.search.trim()?1:0);m.useEffect(()=>{a.openFacet&&l(!1)},[a.openFacet]),m.useEffect(()=>{if(!h&&!x)return;const R=g=>{var W,$;const L=g.target;h&&!((W=v.current)!=null&&W.contains(L))&&l(!1),x&&!(($=u.current)!=null&&$.contains(L))&&p(!1)},D=g=>{g.key==="Escape"&&(l(!1),p(!1))};return document.addEventListener("mousedown",R),document.addEventListener("keydown",D),()=>{document.removeEventListener("mousedown",R),document.removeEventListener("keydown",D)}},[h,x]);const N=(R,D,g,L="fbtn")=>t.jsxs("button",{type:"button",className:L,"aria-expanded":a.openFacet===R,onClick:()=>r({type:"openFacet",facet:R}),children:[t.jsx("span",{className:"fl",children:D}),g>0&&t.jsx("span",{className:"n",children:g}),t.jsx("span",{className:"cv",children:"▾"})]},R),T=["1","7","30","all"],A=Math.max(0,T.indexOf(c.win||"all")),q=c.day?t.jsxs("div",{className:"seg",children:[t.jsxs("button",{type:"button","aria-pressed":!0,children:[t.jsx("span",{className:"sl",children:i.fDay(Nl(c.day,d))}),t.jsx("b",{children:j})]}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{day:"",win:"all"}}),children:i.fDayOff})]}):e?t.jsxs("div",{className:"winpick",ref:u,children:[t.jsxs("button",{type:"button",className:"winpick-btn","aria-expanded":x,"aria-haspopup":"listbox",onClick:()=>p(R=>!R),children:[t.jsx("span",{className:"winpick-k",children:i.winMenu}),t.jsx("span",{className:"winpick-v",children:i.datesShort[A]}),t.jsx("b",{children:f[A]}),t.jsx("i",{children:x?"▴":"▾"})]}),x&&t.jsx("div",{className:"winpick-pop",role:"listbox",children:T.map((R,D)=>t.jsxs("button",{type:"button",role:"option","aria-selected":c.win===R,onClick:()=>{r({type:"filters",patch:{win:R}}),p(!1)},children:[i.datesShort[D],t.jsx("span",{className:"n",children:f[D]})]},R))})]}):t.jsx("div",{className:"seg",children:T.map((R,D)=>t.jsxs("button",{type:"button","aria-pressed":c.win===R,onClick:()=>r({type:"filters",patch:{win:R}}),children:[t.jsx("span",{className:"sl",children:i.dates[D]}),t.jsx("b",{children:f[D]})]},R))}),z=t.jsxs("span",{className:"fsrch",children:["🔍",t.jsx("input",{placeholder:i.identSearch,value:c.search,onChange:R=>r({type:"filters",patch:{search:R.target.value}})})]}),E=t.jsxs("div",{className:"facets",children:[t.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":a.openFacet==="sig",onClick:()=>r({type:"openFacet",facet:"sig"}),children:[t.jsx("span",{className:"fl",children:i.fSignal}),c.signalOnly&&t.jsx("span",{className:"n",children:c.signalEngines.length||"✓"}),t.jsx("span",{className:"cv",children:"▾"})]}),c.sector.length===1?t.jsxs("button",{type:"button",className:"fbtn on","aria-expanded":a.openFacet==="sec",onClick:()=>r({type:"openFacet",facet:"sec"}),title:c.sector[0],children:[t.jsx("span",{className:"fl",children:i.fSector}),t.jsx("span",{className:"n",style:{maxWidth:"16ch",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c.sector[0]}),t.jsx("span",{className:"cv",children:"▾"})]}):N("sec",i.fSector,c.sector.length),N("pay",i.fCountry,c.country.length),N("det",i.fEngine,c.engine.length),N("sta",i.fStage,c.stage.length),o&&N("ang","Angle",c.angle.length),o&&N("mem","Mémo",c.memoLevel.length)]}),P=(R=!1)=>t.jsxs("div",{className:"frow2",children:[k>0&&t.jsxs("button",{type:"button",className:"resetbtn on",title:i.clearTitle(b.length,s),onClick:()=>r({type:"reset"}),children:[t.jsx("span",{className:"rot",children:"↺"}),t.jsx("span",{children:i.clear(k)})]}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:i.alertBtn}),R&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>r({type:"mapFold",folded:!1}),children:i.showMap})]}),I=t.jsxs("div",{className:"fmenu",ref:v,children:[t.jsxs("button",{type:"button",className:"fbtn fmenu-btn"+(C?" on":""),"aria-expanded":h,"aria-haspopup":"true",onClick:()=>{l(R=>!R),a.openFacet&&r({type:"openFacet",facet:null})},children:[t.jsx("span",{className:"fl",children:i.fMenu}),C>0&&t.jsx("span",{className:"n",children:C}),t.jsx("span",{className:"cv",children:h?"▴":"▾"})]}),h&&t.jsx("div",{className:"fmenu-pop",role:"menu",children:E})]});return e?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"fstrip"+(c.day?" noday":""),children:[t.jsx("div",{className:"fstrip-a",children:q}),t.jsxs("div",{className:"fstrip-b",children:[z,I,P(!1)]})]}),a.openFacet&&t.jsx(hr,{poolFor:y})]}):t.jsxs(t.Fragment,{children:[t.jsxs("aside",{className:"fbar",children:[q,z,E,t.jsx("span",{className:"fgrow"}),P()]}),a.openFacet&&t.jsx(hr,{poolFor:y})]})}function hr({poolFor:e}){const{st:a,dispatch:r,t:n,lang:i}=_(),o=a.filters,s=a.openFacet,{title:d,cols:c,options:h}=m.useMemo(()=>{if(s==="sig"){const u=e("signal").filter(f=>Te(f)),b=new Map;u.forEach(f=>{const j=f.engine||"";b.set(j,(b.get(j)||0)+1)});const y=[{v:"*",label:n.fpSigAll,n:u.length,html:!0,on:o.signalOnly&&!o.signalEngines.length},...Ha([...b.keys()],i).map(f=>({v:f,label:wt(f)+" "+_e(f,i),n:b.get(f)||0,html:!1,on:o.signalOnly&&o.signalEngines.includes(f)}))];return{title:n.fpSigTitle,cols:2,options:y}}if(s==="sec"){const u=e("sector"),b=new Map;return u.forEach(y=>{y.sector&&b.set(y.sector,(b.get(y.sector)||0)+1)}),{title:n.fSector.toUpperCase(),cols:3,options:[...b.entries()].sort((y,f)=>f[1]-y[1]).map(([y,f])=>({v:y,label:y,n:f,html:!1,on:o.sector.includes(y)}))}}if(s==="pay"){const u=e("country"),b=new Map;return u.forEach(y=>{y.cc&&b.set(y.cc,(b.get(y.cc)||0)+1)}),{title:n.fCountry.toUpperCase(),cols:3,options:[...b.entries()].sort((y,f)=>f[1]-y[1]).map(([y,f])=>({v:y,label:Dt(y,i)||y,n:f,html:!1,on:o.country.includes(y)}))}}if(s==="det"){const u=e("engine"),b=new Map;return u.forEach(y=>{y.engine&&b.set(y.engine,(b.get(y.engine)||0)+1)}),{title:n.fEngine.toUpperCase(),cols:2,options:Ha([...b.keys()],i).map(y=>({v:y,label:wt(y)+" "+_e(y,i)+' <span style="color:var(--dim);font-size:10px">· '+Ko(Qo(y),i)+"</span>",n:b.get(y)||0,html:!0,on:o.engine.includes(y)}))}}if(s==="ang"){const u=e("angle"),b=new Map;return u.forEach(y=>{y.angle&&b.set(y.angle,(b.get(y.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...b.entries()].sort((y,f)=>f[1]-y[1]).map(([y,f])=>({v:y,label:y.replace(/[_-]+/g," "),n:f,html:!1,on:o.angle.includes(y)}))}}if(s==="mem"){const u=e("memoLevel"),b=new Map;u.forEach(f=>{if(f.kind==="target"){const j=mn(f);b.set(j,(b.get(j)||0)+1)}});const y=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(f=>({v:String(f),label:y[f],n:b.get(f)||0,html:!1,on:o.memoLevel.includes(f)}))}}const p=e("stage"),v=new Map;return p.forEach(u=>{u.stage&&v.set(u.stage,(v.get(u.stage)||0)+1)}),{title:n.fStage.toUpperCase(),cols:2,options:[...v.entries()].sort((u,b)=>b[1]-u[1]).map(([u,b])=>({v:u,label:u,n:b,html:!1,on:o.stage.includes(u)}))}},[s,a,i]),l=p=>{if(s==="sig"){if(p==="*")r({type:"filters",patch:{signalOnly:!(o.signalOnly&&!o.signalEngines.length),signalEngines:[]}});else{const u=o.signalEngines.includes(p)?o.signalEngines.filter(b=>b!==p):[...o.signalEngines,p];r({type:"filters",patch:{signalOnly:!0,signalEngines:u}})}return}if(s==="mem"){r({type:"toggleMemoLevel",value:Number(p)});return}r({type:"toggleFacet",facet:s==="sec"?"sector":s==="pay"?"country":s==="det"?"engine":s==="ang"?"angle":"stage",value:p})},x=()=>{r(s==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:s==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:s==="sec"?"sector":s==="pay"?"country":s==="det"?"engine":s==="ang"?"angle":"stage"})};return t.jsxs("div",{className:"fpanel on",children:[t.jsxs("div",{className:"ph",children:[t.jsx("b",{children:d}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",onClick:x,children:n.fpNone}),t.jsx("button",{type:"button",onClick:()=>r({type:"openFacet",facet:null}),children:n.fpClose})]}),t.jsx("div",{className:"fcols"+(c===2?" two":""),children:h.map(p=>t.jsxs("button",{type:"button",className:"opt","aria-pressed":p.on,onClick:()=>l(p.v),children:[t.jsx("span",{className:"bx"}),p.html?t.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:p.label}}):t.jsx("span",{className:"l",children:p.label}),t.jsx("span",{className:"n",children:p.n})]},p.v))}),t.jsxs("div",{className:"pf",children:[t.jsx("span",{className:"t",children:n.alertReady}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:n.alertCreate})]})]})}function io({mapToggle:e=!0,variant:a="tabs"}){const{dossiers:r,st:n,dispatch:i,pipe:o,lang:s,t:d}=_(),c=m.useMemo(()=>{const v={};return r.forEach(u=>{ya(u,n.filters,o)&&(v.monde=(v.monde||0)+1,u.continent&&(v[u.continent]=(v[u.continent]||0)+1))}),v},[r,n.filters,o]),[h,l]=m.useState(!1),x=m.useRef(null);m.useEffect(()=>{if(!h)return;const v=b=>{var y;(y=x.current)!=null&&y.contains(b.target)||l(!1)},u=b=>{b.key==="Escape"&&l(!1)};return document.addEventListener("mousedown",v),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",v),document.removeEventListener("keydown",u)}},[h]);const p=v=>{const u=xn.find(b=>b.key===v);return v==="monde"?d.contWorld:s==="fr"?u.fr:u.en};return a==="compact"?t.jsxs("div",{className:"contpick",ref:x,children:[t.jsxs("button",{type:"button",className:"contpick-btn","aria-expanded":h,"aria-haspopup":"listbox",onClick:()=>l(v=>!v),children:[p(n.continent),t.jsx("span",{className:"n",children:c[n.continent]||0}),t.jsx("i",{children:h?"▴":"▾"})]}),h&&t.jsx("div",{className:"contpick-pop",role:"listbox",children:Rn.map(v=>t.jsxs("button",{type:"button",role:"option","aria-selected":n.continent===v,onClick:()=>{i({type:"continent",key:v}),l(!1)},children:[p(v),t.jsx("span",{className:"n",children:c[v]||0})]},v))}),e&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>i({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?d.showMap:d.hideMap})]}):t.jsxs("div",{className:"conts",children:[Rn.map(v=>t.jsxs("button",{type:"button",className:"cbtn","aria-selected":n.continent===v,onClick:()=>i({type:"continent",key:v}),children:[p(v),t.jsx("span",{className:"n",children:c[v]||0})]},v)),e&&t.jsx("span",{className:"side",children:t.jsx("button",{type:"button",onClick:()=>i({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?d.showMap:d.hideMap})})]})}function so(e){return String(e||"").split(`
`).map(a=>a.replace(/^#{1,6}\s*/,"").replace(/[*_`>]/g,"").trimEnd()).filter(a=>a.trim().length>0)}function Sl(e){var i;const a=[],r=new Set,n=o=>{const s=(o||"").trim();!s||r.has(s.toLowerCase())||(r.add(s.toLowerCase()),a.push(s))};return((e==null?void 0:e.companies_cited)||[]).forEach(o=>n(o==null?void 0:o.name)),(((i=e==null?void 0:e.prospective)==null?void 0:i.companies_to_evaluate)||[]).forEach(o=>n(o==null?void 0:o.name)),a}function gr({icon:e,title:a,hint:r,rows:n,addLabel:i,onEvaluate:o,onAddAll:s}){const{t:d}=_();return n.length?t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:[e," ",a]}),t.jsx("span",{className:"n",children:n.length}),s&&t.jsx("button",{type:"button",className:"rsblk-all",onClick:()=>s(n.map(c=>c.name)),children:i})]}),t.jsx("p",{className:"rsblk-hint",children:r}),t.jsx("div",{className:"rsblk-rows",children:n.map(c=>t.jsxs("div",{className:"rsrow",children:[t.jsxs("div",{className:"rsrow-t",children:[t.jsxs("div",{className:"rsrow-h",children:[t.jsx("span",{className:"nm",children:c.name}),c.chips.map(h=>t.jsx("span",{className:"ch",children:h},h))]}),c.line1&&t.jsx("p",{className:"w",children:c.line1}),c.line2&&t.jsx("p",{className:"r",children:c.line2})]}),t.jsx("button",{type:"button",className:"rsrow-go",onClick:()=>o(c.name),children:d.rsEvalOne})]},c.name))})]}):null}function lo({card:e,onEvaluate:a,onAddAll:r}){var s;const{t:n}=_(),i=((e==null?void 0:e.companies_cited)||[]).filter(d=>d&&(d.name||"").trim()).map(d=>({name:(d.name||"").trim(),line1:(d.what||"").trim(),line2:(d.role||"").trim(),chips:[(d.country||"").trim()].filter(Boolean)})),o=(((s=e==null?void 0:e.prospective)==null?void 0:s.companies_to_evaluate)||[]).filter(d=>d&&(d.name||"").trim()).map(d=>({name:(d.name||"").trim(),line1:(d.why||"").trim(),chips:[(d.country||"").trim(),(d.stage||"").trim()].filter(Boolean)}));return!i.length&&!o.length?t.jsx("p",{className:"rsblk-none",children:n.rsNoCompanies}):t.jsxs(t.Fragment,{children:[t.jsx(gr,{icon:"🏷",title:n.rsCited,hint:n.rsCitedHint,rows:i,addLabel:n.rsAddAll(i.length),onEvaluate:a,onAddAll:r}),t.jsx(gr,{icon:"🎯",title:n.rsMatch,hint:n.rsMatchHint,rows:o,addLabel:n.rsAddAll(o.length),onEvaluate:a,onAddAll:r})]})}function El({card:e,onEvaluate:a,onAddAll:r}){var d,c,h;const{t:n}=_(),i=[e.industry,...e.market_tags||[],e.author].map(l=>(l||"").trim()).filter(Boolean),o=(((d=e.prospective)==null?void 0:d.criteria)||[]).filter(Boolean),s=(e.sources||[]).filter(l=>l&&l.url);return t.jsxs("div",{className:"rsdet",children:[e.market&&t.jsx("p",{className:"rsmk",children:e.market}),i.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:n.rsTags}),i.map(l=>t.jsx("span",{children:l},l))]}),t.jsxs("div",{className:"rsbody",children:[e.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${e.mindmap_png_b64}`,alt:n.rsMindmap}),t.jsx("figcaption",{children:n.rsMindmap})]}),t.jsx("div",{className:"rssum",children:so(e.summary_md||"").map((l,x)=>t.jsx("p",{children:l},x))})]}),t.jsx(lo,{card:e,onEvaluate:a,onAddAll:r}),(((c=e.prospective)==null?void 0:c.conclusion)||o.length>0)&&t.jsxs("section",{className:"rsblk rspro",children:[t.jsx("div",{className:"rsblk-h",children:t.jsxs("b",{children:["🔮 ",n.rsConclusion]})}),((h=e.prospective)==null?void 0:h.conclusion)&&t.jsx("p",{className:"rspro-c",children:e.prospective.conclusion}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"rsblk-hint",children:n.rsCriteria}),t.jsx("ul",{className:"rspro-l",children:o.map(l=>t.jsx("li",{children:l},l))})]})]}),s.length>0&&t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:["🔗 ",n.rsSources]}),t.jsx("span",{className:"n",children:s.length})]}),t.jsx("div",{className:"rssrc",children:s.map(l=>t.jsx("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",children:l.label||l.url},l.url))})]})]})}function Cl(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{day:"2-digit",month:"short"})}function zl({onClose:e,onEvaluate:a,onAddAll:r,bump:n,cbToken:i}){const{t:o,email:s}=_(),d=i,[c,h]=m.useState(null),[l,x]=m.useState(null),[p,v]=m.useState(null),[u,b]=m.useState(!1);m.useEffect(()=>{let f=!0;return(async()=>{const j=await zr({email:s,cbToken:d});f&&h(j)})(),()=>{f=!1}},[s,d,n]);const y=f=>{x(f),v(null),b(!0),(async()=>{const j=await Jo(f.id);v(j),b(!1)})()};return t.jsxs("div",{className:"rsarch",children:[t.jsxs("div",{className:"rsarch-h",children:[l?t.jsx("button",{type:"button",className:"rsarch-back",onClick:()=>{x(null),v(null)},children:o.rsArchBack}):t.jsxs("b",{children:["🗂 ",o.rsArchTitle]}),l&&t.jsx("span",{className:"ti",children:l.title}),!l&&c&&t.jsx("span",{className:"n",children:c.length}),t.jsx("button",{type:"button",className:"rsx",title:o.rsClose,onClick:e,children:"×"})]}),!l&&t.jsxs("div",{className:"rsarch-list",children:[c===null&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchLoading}),c!==null&&c.length===0&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchEmpty}),(c||[]).map(f=>t.jsxs("button",{type:"button",className:"rsarch-row",onClick:()=>y(f),children:[t.jsx("span",{className:"ti",children:f.title}),t.jsxs("span",{className:"me",children:[Cl(f.created_at),f.industry?` · ${f.industry}`:"",f.author?` · ${f.author}`:""]}),t.jsx("span",{className:"cn",children:o.rsRowCounts(f.cited_n||0,f.evaluate_n||0)}),t.jsx("span",{className:"st"+(f.published?" on":""),children:f.published?o.rsPub:o.rsPriv})]},f.id))]}),l&&t.jsxs("div",{className:"rsarch-one",children:[t.jsxs("div",{className:"rsarch-sub",children:[l.source_url&&t.jsx("a",{href:l.source_url,target:"_blank",rel:"noopener noreferrer",children:o.rsSource}),l.published&&l.page_url&&t.jsx("a",{href:l.page_url,target:"_blank",rel:"noopener noreferrer",children:o.rsLink}),t.jsx("span",{className:"st"+(l.published?" on":""),children:l.published?o.rsPub:o.rsPriv})]}),u&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchLoading}),!u&&!p&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchGone}),!u&&p&&t.jsx(El,{card:p,onEvaluate:a,onAddAll:r})]})]})}const xa=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function Yt(e){return/^https?:\/\//i.test((e||"").trim())}function et(e){const a=(e||"").trim();return a?Yt(a)?a:xa.test(a)&&!/\s/.test(a)?"https://"+a.replace(/^\/+/,""):"":""}function Al(){return t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]})}function Tl(){const{t:e,mode:a,token:r,email:n,askEvaluate:i,sessTally:o,dispatch:s,evalBusy:d,evalCards:c,caps:h,data:l,canWrite:x,source:p,dossiers:v,doAnalyse:u,liveMemos:b,pipe:y}=_(),f=a==="client",j=m.useMemo(()=>r||(p!=="default"?Xo():""),[r,p]),[C,k]=m.useState(""),[N,T]=m.useState(!1),[A,q]=m.useState(""),[z,E]=m.useState(""),[P,I]=m.useState(""),[R,D]=m.useState(!1),[g,L]=m.useState(!1),[W,$]=m.useState(""),[U,oe]=m.useState(!1),[X,Y]=m.useState(""),[ie,te]=m.useState([]),ge=m.useRef(!1),[G,de]=m.useState(!1),[ye,Se]=m.useState(!1),[be,ne]=m.useState(!1),re=m.useRef(!1),[Z,K]=m.useState(""),[me,ke]=m.useState(""),[Ne,Q]=m.useState(!1),[ae,Oe]=m.useState(!1),[qe,Ae]=m.useState(0),[we,Me]=m.useState(""),[fe,lt]=m.useState(null),[Fe,rt]=m.useState(null),[Xe,ut]=m.useState(!1),[dt,Ue]=m.useState(null),[mt,ft]=m.useState(0),S=m.useRef(!1),B=C.trim()?xa.test(C.trim())?e.evalUrl:e.evalName:e.evalWaiting,V=m.useMemo(()=>W.split(`
`).map(O=>O.trim()).filter(Boolean).slice(0,15),[W]);m.useEffect(()=>{if(typeof window>"u")return;const O=new URLSearchParams(window.location.search),w=(O.get("rs")||"").trim(),F=(O.get("rstext")||"").trim();w&&/^https?:\/\//i.test(w)&&K(w),F&&ke(F),(w&&/^https?:\/\//i.test(w)||F)&&de(!0)},[]),m.useEffect(()=>{const O=w=>{const F=w.detail||{},M=String(F.url||"").trim(),H=String(F.text||"").trim();M&&/^https?:\/\//i.test(M)&&K(M),H&&ke(H),(M&&/^https?:\/\//i.test(M)||H)&&(de(!0),k(""),q(""),Q(!0),window.setTimeout(()=>Q(!1),900))};return window.addEventListener("ppmap:research",O),()=>window.removeEventListener("ppmap:research",O)},[]),m.useEffect(()=>{const O=w=>{const F=w.detail||{},M=String(F.name||"").trim();if(!M)return;de(!1),k(M),q(M);const H=et(String(F.website||F.domain||""));E(H),I(et(String(F.url||""))),D(!H),T(!0),window.setTimeout(()=>T(!1),900)};return window.addEventListener("ppmap:prefill",O),()=>window.removeEventListener("ppmap:prefill",O)},[]),m.useEffect(()=>{const O=(A||"").trim();if(!O||G||z){(z||!O||G)&&D(!1);return}const w=v.find(H=>Le(H.name)===Le(O)),F=et((w==null?void 0:w.website)||"")||et((w==null?void 0:w.domain)||"");if(F){E(F),D(!1);return}let M=!0;return D(!0),Ar(O).then(H=>{var ee,le;if(!M)return;const J=et(H.website||"")||et(((le=(ee=H.candidates)==null?void 0:ee[0])==null?void 0:le.url)||"");J&&E(J)}).catch(()=>{}).finally(()=>{M&&D(!1)}),()=>{M=!1}},[A,G,z,v]),m.useEffect(()=>{const O=w=>{var M;const F=String(((M=w.detail)==null?void 0:M.url)||"").trim();Yt(F)&&window.open(F,"_blank","noopener,noreferrer")};return window.addEventListener("ppmap:view",O),()=>window.removeEventListener("ppmap:view",O)},[]),m.useEffect(()=>{if(re.current===G)return;re.current=G,ne(!0);const O=window.setTimeout(()=>ne(!1),560);return()=>window.clearTimeout(O)},[G]),m.useEffect(()=>{if(typeof window>"u")return;const O=document.querySelector(".atl2 .eval-stick")||document.querySelector(".atl2 .demand"),w=document.querySelector(".atl2.ops, .atl2.cibles");if(!O||!w)return;const F=()=>w.style.setProperty("--demand-h",`${O.offsetHeight}px`);F();const M=new ResizeObserver(F);return M.observe(O),()=>M.disconnect()},[p,N,Ne,g,G,be,R]),m.useEffect(()=>{if(!x&&!j){Ue(null);return}let O=!0;return(async()=>{const w=await zr({email:n,cbToken:j});O&&Ue(w.length)})(),()=>{O=!1}},[x,j,n,mt]);const se=ie.length?ie:c,ue=l.credits,ce=m.useCallback(O=>{const w=O.map(F=>(F||"").trim()).filter(Boolean);w.length&&($(F=>{const M=F.split(`
`).map(ee=>ee.trim()).filter(Boolean),H=new Set(M.map(ee=>ee.toLowerCase())),J=w.filter(ee=>!H.has(ee.toLowerCase()));return[...M,...J].slice(0,15).join(`
`)}),L(!0))},[]);m.useEffect(()=>{if(!ae)return;Ae(0);const O=window.setInterval(()=>Ae(w=>w+1),1e3);return()=>window.clearInterval(O)},[ae]);const xe=m.useMemo(()=>{const O=C.trim().toLowerCase();return!O||!y?null:v.find(w=>Le(w.name)===O&&ze(w)===1)||null},[C,v,y]),Ke=()=>{const O=C.trim();if(O){if(xe){u(xe);return}i(null,O),f&&k("")}},Ct=async()=>{if(!f){i(null,V[0]||"");return}if(!V.length||U)return;oe(!0),ge.current=!1;const O=[];for(let w=0;w<V.length&&!ge.current;w++){Y(e.evaluating(w+1,V.length,V[w]));const F=await Tr(r,V[w],"atelier2");if(O.unshift({name:F.company||V[w],verdict:F.verdict,reason:F.reason||"",remaining:F.remaining??null}),te([...O]),F.verdict==="quota"){O.unshift({name:"",verdict:"quota",reason:e.quota(V.length-w-1),remaining:0}),te([...O]),$(V.slice(w+1).join(`
`)),Y(""),oe(!1);return}}Y(""),$(ge.current?V.slice(O.length).join(`
`):""),oe(!1)},xt=async()=>{var F,M,H;if(S.current)return;const O=Z.trim().replace(/\s+/g,""),w=me.trim();if(!O&&!w){Me(e.rsNeed);return}if(!f&&!j){i(null,O||w.slice(0,80));return}S.current=!0,Me(""),lt(null),rt(null),Oe(!0);try{const J=await ei({url:O,text:w,email:n,cbToken:j});if(Oe(!1),!J||J.status!=="success"){Me((J==null?void 0:J.message)||"Erreur");return}lt(J),de(!1),ce((((F=J.prospective)==null?void 0:F.companies_to_evaluate)||[]).map(le=>(le==null?void 0:le.name)||"")),rt({state:"pending"});const ee=await ti(J,{email:n,cbToken:j});rt(ee.ok?{state:"ok",scopeLabel:((M=ee.summary)==null?void 0:M.scope_label)||"",scope:((H=ee.summary)==null?void 0:H.scope)||""}:{state:"fail",msg:ee.error||""}),ee.ok&&ft(le=>le+1)}finally{S.current=!1,Oe(!1)}},zt=[fe==null?void 0:fe.industry,...(fe==null?void 0:fe.market_tags)||[],fe==null?void 0:fe.author].map(O=>(O||"").trim()).filter(Boolean),ct=(Fe==null?void 0:Fe.state)==="pending",At=Fe&&(ct?t.jsx("span",{className:"rslink pend",children:e.rsSaving}):Fe.state==="ok"?t.jsx("span",{className:"rslink ok",children:Fe.scope&&Fe.scope!=="public"?e.rsSavedIn(Fe.scopeLabel||Fe.scope.replace(/^fund:/,"")):e.rsSaved}):t.jsx("span",{className:"rslink fail",title:Fe.msg,children:e.rsSaveFail})),He=Sl(fe).length,Pe=G,ht=(A||C).trim(),Qe=v.find(O=>Le(O.name)===Le(ht)),Tt=et(C)||z||et((Qe==null?void 0:Qe.website)||"")||et((Qe==null?void 0:Qe.domain)||""),Bt=P||et((Qe==null?void 0:Qe.url)||""),qa=xe?e.actAnalyse:ht?e.evalGoOn(ht.length>22?ht.slice(0,21)+"…":ht):e.evalGo,Ma=ae?`${Zo(Z.trim())==="youtube"&&Z.trim()?e.rsRunningVid:e.rsRunning} ${e.rsElapsed(qe)}`:ct?e.rsSaving:e.rowExtract;return t.jsxs("div",{className:"demand"+(Pe?" rs-mode":"")+(A&&C.trim()===A||N||Ne?" pair":"")+(N||Ne||be?" echo":"")+(be?" swap":""),children:[t.jsxs("div",{className:"drow"+((Pe?Ne:N)||be?" flash":"")+((Pe?Z.trim():xa.test(C.trim()))?" has-url":""),children:[t.jsxs("span",{className:"dfield",children:[t.jsx("input",{value:Pe?Z:C,placeholder:Pe?e.rsUrlPh:e.evalPh,autoComplete:"off",maxLength:Pe?600:200,spellCheck:Pe?!1:void 0,inputMode:Pe?"url":void 0,onChange:O=>{if(Pe){K(O.target.value);return}k(O.target.value),A&&O.target.value.trim()!==A&&(q(""),E(""),I(""),D(!1))},onKeyDown:O=>{O.key==="Enter"&&(Pe?xt():Ke())}}),t.jsx("span",{className:"detect"+(Pe?" off":"")+(xa.test(C.trim())?" url":""),children:B})]}),t.jsx("span",{className:"dacts",children:Pe?t.jsxs(t.Fragment,{children:[t.jsxs("a",{className:"viewbtn"+(Yt(Z)?"":" off"),href:Yt(Z)?Z.trim():void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewLinkHint,onClick:O=>{Yt(Z)||O.preventDefault()},children:[t.jsx(Al,{}),e.viewLink]}),t.jsxs("button",{type:"button",className:"evalbtn"+(ae?" loading":""),disabled:ae||ct||!Z.trim()&&!me.trim(),onClick:()=>{xt()},children:[t.jsx("span",{className:"fill"}),Ma]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("a",{className:"viewbtn sm"+(R?" searching":Tt?"":" off"),href:Tt||void 0,target:"_blank",rel:"noopener noreferrer","aria-busy":R||void 0,title:R?e.viewSiteBusyHint:e.viewSiteHint,onClick:O=>{Tt||O.preventDefault()},children:[R&&t.jsx("span",{className:"sitespin","aria-hidden":"true"}),R?e.viewSiteBusy:e.viewSite]}),t.jsx("a",{className:"viewbtn sm"+(Bt?"":" off"),href:Bt||void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewSrcHint,onClick:O=>{Bt||O.preventDefault()},children:e.viewSrc}),t.jsxs("button",{type:"button",className:"evalbtn"+(xe?" analyse":"")+(d?" loading":""),disabled:d,onClick:Ke,children:[t.jsx("span",{className:"fill"}),qa]})]})}),h.showCredits&&ue&&t.jsxs("button",{type:"button",className:"credits"+(ue.total_available<=0&&!ue.unlimited?" empty":""),onClick:()=>s({type:"modal",modal:"recharge"}),children:[t.jsx("span",{className:"cl",children:e.creditsCap}),t.jsx("b",{children:ue.unlimited?"∞":ue.total_available}),!ue.unlimited&&t.jsxs("span",{className:"cm",children:["/ ",ue.daily_grant+ue.purchased]}),ue.total_available<=0&&!ue.unlimited?t.jsx("span",{className:"rc",children:e.creditsRecharge}):t.jsx("span",{className:"cd",children:e.creditsToday})]})]}),b.items.filter(O=>O.status==="boot"||O.status==="running").map(O=>t.jsxs("div",{className:"result on memolive",children:[t.jsx("span",{className:"vv",children:t.jsxs("span",{className:"vp",children:["⚡ ",e.actAnalyse]})}),t.jsx("span",{className:"rn",children:O.name}),t.jsx(Gt,{item:O,serverOff:b.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),t.jsxs("button",{type:"button",className:"go",onClick:()=>s({type:"modal",modal:"queue"}),children:[e.liveOpenQueue," →"]})]},"live-"+O.name)),t.jsxs("div",{className:"dunder",children:[t.jsx("button",{type:"button",className:"dmulti",onClick:()=>L(!g),children:e.evalMulti}),t.jsx("button",{type:"button",className:"dmulti dsearch"+(G?" on":""),onClick:()=>de(!G),children:e.rsOpen}),dt!==null&&dt>0&&t.jsx("button",{type:"button",className:"dmulti darch"+(Xe?" on":""),onClick:()=>ut(!Xe),children:e.rsArchOpen(dt)})]}),Xe&&t.jsx(zl,{bump:mt,cbToken:j,onClose:()=>ut(!1),onEvaluate:O=>i(null,O),onAddAll:ce}),t.jsx("div",{className:"rsp slim"+(G?" on":" off"),"aria-hidden":!G,children:t.jsxs("div",{className:"rsp-in",children:[t.jsxs("button",{type:"button",className:"rspaste",tabIndex:G?void 0:-1,onClick:()=>Se(O=>!O),children:[e.rsOr," · ",e.rsTextPh,t.jsx("i",{children:ye?"▴":"▾"})]}),ye&&t.jsx("textarea",{className:"rstext",value:me,placeholder:e.rsTextPh,tabIndex:G?void 0:-1,onChange:O=>ke(O.target.value)})]})}),we&&t.jsx("div",{className:"rserr",children:we}),fe&&t.jsxs("div",{className:"rscard",children:[t.jsxs("div",{className:"rsh",children:[t.jsx("b",{children:fe.title}),fe.source_url&&t.jsx("a",{href:fe.source_url,target:"_blank",rel:"noopener noreferrer",children:e.rsSource}),t.jsx("button",{type:"button",className:"rsx",title:e.rsClose,onClick:()=>{lt(null),rt(null)},children:"×"})]}),fe.market&&t.jsx("p",{className:"rsmk",children:fe.market}),zt.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:e.rsTags}),zt.map(O=>t.jsx("span",{children:O},O))]}),t.jsxs("div",{className:"rsbody",children:[fe.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${fe.mindmap_png_b64}`,alt:e.rsMindmap}),t.jsx("figcaption",{children:e.rsMindmap})]}),t.jsx("div",{className:"rssum",children:so(fe.summary_md||"").map((O,w)=>t.jsx("p",{children:O},w))})]}),t.jsx(lo,{card:fe,onEvaluate:O=>i(null,O),onAddAll:ce}),t.jsxs("div",{className:"rsfoot",children:[t.jsx("span",{children:e.rsFound(He)}),At]})]}),g&&t.jsxs("div",{className:"bulk on",children:[t.jsx("textarea",{value:W,placeholder:e.bulkPh,onChange:O=>$(O.target.value.split(`
`).slice(0,15).join(`
`))}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+(U?" loading":""),style:{justifyContent:"center"},disabled:U||!V.length,onClick:()=>{Ct()},children:[t.jsx("span",{className:"fill"}),U&&X?X:e.evalList]}),t.jsx("span",{className:"hint",children:e.bulkCount(V.length)})]})]}),se.slice(0,1).map((O,w)=>{const F=O.verdict==="kept",M=O.verdict==="quota",H=F?"var(--brand)":M?"var(--bolt)":"var(--red)",J=F?"var(--brand-l)":M?"#FEF3C7":"#FEF2F2";return t.jsxs("div",{className:"result on",style:{"--c":H,"--bgc":J},children:[t.jsx("span",{className:"vv",children:t.jsx("span",{className:"vp",children:F?"✓ "+e.kept:M?"⏳":"✗ "+e.dropped})}),O.name&&t.jsx("span",{className:"rn",children:O.name}),t.jsx("span",{className:"rr",children:O.reason?t.jsxs(t.Fragment,{children:[t.jsx("b",{children:e.why})," ",O.reason]}):null}),!!(O.candidates&&O.candidates.length)&&t.jsx("span",{className:"sitepick",children:O.candidates.map(ee=>t.jsxs("span",{className:"sp1",children:[t.jsxs("a",{href:ee.url.startsWith("http")?ee.url:`https://${ee.url}`,target:"_blank",rel:"nofollow noopener",children:[(ee.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,34)," ↗"]}),t.jsx("button",{type:"button",onClick:()=>i(null,ee.url),children:e.evalPickGo})]},ee.url))}),!M&&t.jsx("button",{type:"button",className:"go",onClick:()=>{s({type:"ptab",tab:F?1:5});const ee=(O.name||"").trim().toLowerCase();window.setTimeout(()=>{const le=[...document.querySelectorAll(".atl2 .list .row")].find(Be=>{var he;return(((he=Be.querySelector(".rnm"))==null?void 0:he.textContent)||"").trim().toLowerCase().includes(ee)});le&&(le.scrollIntoView({behavior:"smooth",block:"center"}),le.classList.add("flashrow"),window.setTimeout(()=>le.classList.remove("flashrow"),2200))},260)},children:e.seeSpace(F?e.statusKeep.replace("✅ ",""):e.statusDrop.replace("❌ ",""))})]},w)}),f&&(o.kept+o.dropped>0||se.length>0)&&t.jsxs("div",{className:"tally",children:[t.jsx("span",{dangerouslySetInnerHTML:{__html:e.session(o.kept,o.dropped)}})," ","·"," ",t.jsx("a",{onClick:()=>s({type:"modal",modal:"space"}),children:e.seeMySpace})]})]})}function Ll(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function ql(){const{st:e,dispatch:a,byId:r,t:n,doDeep:i}=_(),o=e.memoConsole?r.get(e.memoConsole):null,s=m.useMemo(()=>o?[o.reasoning||"",Ll(o.summary||"")].filter(Boolean).join(`

`):"",[o]);if(!o)return null;const d=pt(o),c=mn(o);return t.jsx("div",{className:"demand",style:{paddingTop:0},children:t.jsxs("div",{className:"memo",style:{marginTop:0},children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"nm",children:o.name}),d&&t.jsx("span",{className:"vv",children:d}),typeof o.score=="number"&&t.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[o.score,"/100"]}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),t.jsx("div",{className:"tabs2",children:t.jsx("button",{type:"button","aria-selected":"true",children:n.memoSynth})}),t.jsx("div",{className:"mb2",children:s?s.split(`

`).map((h,l)=>t.jsx("p",{style:{margin:"0 0 10px"},children:h},l)):t.jsx("p",{children:n.memoNone})}),t.jsxs("div",{className:"mf",children:[Ft(o)?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"t",children:n.memoDeepHint}),t.jsx("button",{type:"button",className:"deep",onClick:()=>i(o),children:n.memoDeep})]}):t.jsx("span",{className:"t",children:c===2?n.critMemoKinds:""}),o.memoUrl&&t.jsx("a",{className:"go",href:o.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:n.memoOpenFull})]})]})})}function kn({name:e}){const{t:a,token:r,caps:n,mode:i,flashErr:o}=_(),[s,d]=m.useState(!1),[c,h]=m.useState(null),l=n.pipe&&i==="client"&&!n.lockActions,x=async()=>{if(!l||s)return;d(!0);const p=await ai(r,e);if(d(!1),!p){o(a.actErr);return}h(p.results||[])};return m.useEffect(()=>{if(!l)return;const p=v=>{var b;const u=String(((b=v.detail)==null?void 0:b.name)||"").trim();u&&u.toLowerCase()===e.toLowerCase()&&x()};return window.addEventListener("ppmap:similar",p),()=>window.removeEventListener("ppmap:similar",p)},[e,l]),m.useEffect(()=>{if(l)try{const p=(sessionStorage.getItem("pp:similar")||"").trim();p&&p.toLowerCase()===e.toLowerCase()&&(sessionStorage.removeItem("pp:similar"),x())}catch{}},[e,l]),l?t.jsxs("div",{className:"simb",onClick:p=>p.stopPropagation(),children:[t.jsx("button",{type:"button",className:"abtn",disabled:s,onClick:()=>{x()},children:s?a.similarBusy:a.similar}),c&&(c.length===0?t.jsx("p",{className:"mnote",children:a.similarNone}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"siml",children:c.map(p=>t.jsxs("li",{children:[t.jsx("b",{className:p.verdict==="kept"?"ok":"ko",children:p.company}),p.reason&&t.jsx("span",{children:p.reason})]},p.company))}),t.jsx("p",{className:"mnote dim",children:a.similarNote})]}))]}):null}const Ml=new Set(["b","strong","i","em","u","br","p","ul","ol","li","h4","h5"]),ua=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Fl(e){const a=String(e||"");if(!a)return"";let r="",n=0;for(;n<a.length;){const i=a.indexOf("<",n);if(i<0){r+=ua(a.slice(n));break}r+=ua(a.slice(n,i));const o=a.indexOf(">",i);if(o<0){r+=ua(a.slice(i));break}const s=a.slice(i+1,o).trim(),d=/^(\/?)([a-zA-Z0-9]+)/.exec(s),c=d?d[2].toLowerCase():"";d&&Ml.has(c)?r+=`<${d[1]}${c}>`:r+=ua(a.slice(i,o+1)),n=o+1}return r}const br=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function Re({k:e,v:a,href:r}){return a==null||a===""?null:t.jsxs("div",{className:"cdl",children:[t.jsx("span",{className:"cdk",children:e}),r?t.jsx("a",{className:"cdv",href:r,target:"_blank",rel:"noopener noreferrer",children:String(a)}):t.jsx("span",{className:"cdv",children:String(a)})]})}function Rl(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Ol({o:e}){const{t:a,doDeep:r}=_(),[n,i]=m.useState(!1),o=pt(e),s=[e.reasoning||"",Rl(e.summary||"")].filter(Boolean);return t.jsxs("div",{className:"cdmemo",children:[o&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:o}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),s.length?s.join(`

`).split(`

`).map((d,c)=>t.jsx("p",{className:"cdtxt",children:d},c)):t.jsx("p",{className:"cdtxt",children:a.memoNone}),t.jsxs("div",{className:"cdacts",children:[Ft(e)&&t.jsx("button",{type:"button",className:"btn p",onClick:d=>{d.stopPropagation(),r(e)},children:a.memoDeep}),e.memoUrl&&t.jsx("button",{type:"button",className:"btn b",onClick:d=>{d.stopPropagation(),i(c=>!c)},children:n?a.memoHideHere:a.memoReadHere}),e.memoUrl&&t.jsx("a",{className:"btn d",href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",onClick:d=>d.stopPropagation(),children:a.memoOpenFull})]}),n&&e.memoUrl&&t.jsx("iframe",{className:"cdembed",src:e.memoUrl,loading:"lazy",title:a.cdMemoTab,referrerPolicy:"no-referrer-when-downgrade",onClick:d=>d.stopPropagation()})]})}function jn({o:e}){const{t:a,lang:r,dispatch:n,caps:i}=_(),o=ea(e),s=pt(e),d=(e.cribleStatus||"").trim().toUpperCase()||(o==="NO MATCH"?"NO MATCH":o==="MATCH"?"MATCH":""),c=[e.sector,e.stage,e.countryLabel,e.city,e.website,e.domain,e.linkedinCompany,e.angle,e.date].filter(Boolean).length,h=[e.contactName,e.contactEmail,e.contactLinkedin].filter(Boolean).length,l=[e.ceoStatus,e.ceoNote,i.pipe?e.memoUrl:"",i.pipe?e.memoPdfUrl:""].filter(Boolean).length+(typeof e.engagement=="number"&&e.engagement>0?1:0),x=m.useMemo(()=>[{k:"conv",lib:a.cdConviction,n:(d?1:0)+(e.reasoning?1:0)+(s?1:0)},{k:"ana",lib:a.cdAnalyse,n:(e.summary?1:0)+(i.pipe&&!i.lockActions?1:0)},{k:"soc",lib:a.cdSociete,n:c},{k:"ctc",lib:a.cdContact,n:h},{k:"suivi",lib:a.cdSuivi,n:l},{k:"memo",lib:a.cdMemoTab,n:e.memoUrl||e.summary||Ft(e)?1:0}].filter(b=>b.n>0),[e,a,d,s,c,h,l]),[p,v]=m.useState("");if(!x.length)return null;const u=x.some(b=>b.k===p)?p:x[0].k;return t.jsxs("div",{className:"cdtabs",children:[t.jsx("div",{className:"cdnav",role:"tablist",children:x.map(b=>t.jsx("button",{type:"button",role:"tab","aria-selected":u===b.k,"data-tour":"tab-"+b.k,className:u===b.k?"on":"",onClick:y=>{y.stopPropagation(),v(b.k)},children:b.lib},b.k))}),t.jsxs("div",{className:"cdbody",onClick:b=>b.stopPropagation(),children:[u==="conv"&&t.jsxs(t.Fragment,{children:[d&&t.jsxs("div",{className:"cdv1"+(d==="NO MATCH"?" out":""),children:[t.jsx("b",{children:d==="NO MATCH"?a.vOut:a.vKept}),t.jsx("span",{className:"cdw",children:a.cdCrible})]}),e.reasoning&&t.jsx("p",{className:"cdtxt",children:e.reasoning}),s&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:s}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"cdgrid",children:[t.jsx(Re,{k:a.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(Re,{k:a.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(Re,{k:a.cdVerdictDate,v:br(e.verdictDate,r)})]})]}),u==="ana"&&t.jsxs(t.Fragment,{children:[e.summary&&t.jsx("div",{className:"cdrich",dangerouslySetInnerHTML:{__html:Fl(e.summary)}}),i.pipe&&!i.lockActions&&t.jsx(Pl,{o:e})]}),u==="soc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Re,{k:a.cdSector,v:e.sector}),t.jsx(Re,{k:a.cdStage,v:e.stage}),t.jsx(Re,{k:a.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(Re,{k:a.cdSite,v:e.domain||e.website,href:e.website||void 0}),t.jsx(Re,{k:a.cdLinkedin,v:e.linkedinCompany?"LinkedIn":"",href:e.linkedinCompany}),t.jsx(Re,{k:a.cdAngle,v:e.angle}),t.jsx(Re,{k:a.cdDetected,v:br(e.date,r)})]}),u==="ctc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Re,{k:a.cdName,v:e.contactName}),t.jsx(Re,{k:a.cdEmail,v:e.contactEmail,href:e.contactEmail?`mailto:${e.contactEmail}`:void 0}),t.jsx(Re,{k:a.cdLinkedin,v:e.contactLinkedin?"LinkedIn":"",href:e.contactLinkedin})]}),u==="memo"&&t.jsx(Ol,{o:e}),u==="suivi"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"cdgrid",children:[t.jsx(Re,{k:a.cdCeoStatus,v:e.ceoStatus}),t.jsx(Re,{k:a.cdEngagement,v:typeof e.engagement=="number"&&e.engagement>0?e.engagement:""})]}),e.ceoNote&&t.jsxs("p",{className:"cdtxt",children:["💬 ",e.ceoNote]}),i.pipe&&(e.memoUrl||e.memoPdfUrl)&&t.jsxs("div",{className:"cdacts",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"abtn",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemo," →"]}),e.memoPdfUrl&&t.jsx("a",{className:"abtn",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"})]})]})]})]})}function Pl({o:e}){const{t:a,token:r}=_(),[n,i]=m.useState(!1),[o,s]=m.useState(null),d=async()=>{n||(i(!0),s(await ni(r,e.name,e.website||e.domain||"")),i(!1))},c=(o==null?void 0:o.blocs)||{},h=[[a.qaVP,c.value_prop],[a.qaProduct,c.produit],[a.qaModel,c.modele],[a.qaSummary,c.synthese]],l=h.some(([,x])=>x);return t.jsxs("div",{className:"qab",children:[!o&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mnote dim",children:a.qaHint}),t.jsx("button",{type:"button",className:"abtn",disabled:n,onClick:()=>{d()},children:n?a.qaBusy:a.qaRun})]}),o&&l&&t.jsxs(t.Fragment,{children:[h.filter(([,x])=>x).map(([x,p])=>t.jsxs("div",{className:"qal",children:[t.jsx("span",{className:"qak",children:x}),t.jsx("p",{children:p})]},x)),!!(o.pages||[]).length&&t.jsx("p",{className:"mnote dim",children:a.qaSources((o.pages||[]).length)})]}),o&&!l&&t.jsx("p",{className:"mnote warn",children:o.quota?a.qaQuota:a.qaEmpty})]})}function ta({spec:e}){const a=m.useRef(null),r=m.useRef(null),[n,i]=m.useState(!1);return m.useEffect(()=>{const o=a.current;if(!o)return;let s=!1;const d=()=>{const h=Math.max(280,Math.min(560,o.clientWidth||320));On({kind:"op",card:e},h).then(l=>{!s&&l&&o.isConnected&&o.replaceChildren(l)})},c=window.requestAnimationFrame(d);return()=>{s=!0,window.cancelAnimationFrame(c),o.replaceChildren()}},[e]),m.useEffect(()=>{if(!n)return;const o=r.current;if(!o)return;let s=!1;On({kind:"op",card:e},Math.min(1100,Math.floor(window.innerWidth*.92))).then(c=>{!s&&c&&o.isConnected&&o.replaceChildren(c)});const d=c=>{c.key==="Escape"&&i(!1)};return document.addEventListener("keydown",d),()=>{s=!0,document.removeEventListener("keydown",d)}},[n,e]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:a,className:"zoom-card-host",title:"Agrandir",onClick:()=>i(!0)}),n&&Pt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"atl2-lb",onClick:()=>i(!1),children:[t.jsx("div",{ref:r,style:{lineHeight:0}}),t.jsx("button",{type:"button",className:"atl2-lb-x","aria-label":"Fermer",onClick:()=>i(!1),children:"×"})]})}),document.body)]})}const Dl=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function Il(e,a=!1){if(!e||typeof window>"u")return;const r=352,n=a?620:430,i=window.innerWidth,o=window.innerHeight,s=Math.min(Math.max(e.x-r/2,8),Math.max(8,i-r-8));let d=e.y+10;return d+n>o-8&&(d=Math.max(8,e.y-n-14)),d<8&&(d=8),{left:s,top:d}}function Bl(){const{st:e,dispatch:a,byId:r,t:n,lang:i,caps:o,mode:s,askEvaluate:d,doAnalyse:c,doDecide:h,doPromote:l,doRepeche:x,doApproach:p,doDeep:v,doOnboard:u,outbound:b,evalBusy:y}=_(),f=e.popupId?r.get(e.popupId):null;if(!f)return null;const j=Te(f),C=ze(f),k=pt(f),N=ea(f),T=f.kind==="target",A=q=>{a({type:"filters",patch:q}),a({type:"popup",id:null})};return Pt.createPortal(t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:Dl}),t.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),t.jsxs("div",{className:"pop on "+(e.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:Il(e.popupAnchor,!!f.card),onClick:q=>q.stopPropagation(),children:[t.jsxs("div",{className:"ph",children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h3",{children:f.name}),t.jsx("span",{className:"id",children:n.detected(n.daysAgo(st(f.date)),_e(f.engine,i))})]}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),t.jsxs("div",{className:"pb",children:[t.jsxs("div",{className:"tags",children:[f.cc&&t.jsx("button",{type:"button",className:"hi",onClick:()=>A({country:[f.cc]}),children:(Dt(f.cc,i)||f.countryLabel||"").toUpperCase()}),f.sector&&t.jsx("button",{type:"button",onClick:()=>A({sector:[f.sector]}),children:f.sector.toUpperCase()}),f.stage&&t.jsx("button",{type:"button",onClick:()=>A({stage:[f.stage]}),children:f.stage.toUpperCase()}),typeof f.amountEur=="number"&&f.amountEur>0&&t.jsx("span",{className:"am2",children:It(f.amountEur,i)})]}),o.pipe&&T&&t.jsxs("div",{className:"pstat",children:[N&&t.jsx("span",{className:"vd "+(N==="MATCH"?"v-ok":"v-no"),title:n.vt[N],children:N}),k&&t.jsx("span",{className:"vd v-cons",title:n.vt[k],children:k}),t.jsx("span",{className:"pstep",children:n.plabels[C]}),f.ceoStatus&&t.jsx("span",{className:"pstep own",children:f.ceoStatus})]}),(f.tagline||f.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:f.tagline||f.headline})]}),t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.how}),t.jsxs("p",{children:[wt(f.engine)," ",t.jsx("b",{children:_e(f.engine,i)})," — ",ri(f.engine,i),f.noteTitle&&t.jsxs(t.Fragment,{children:[" · ",f.noteTitle]})]}),j?t.jsxs("p",{className:"psig",style:{marginTop:9},children:[t.jsx(St,{o:f,lg:!0})," ",t.jsx(La,{o:f,src:!0}),t.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[n.signaledOn(hn(j,i))," · ",n.win7(ba(j,i))]})]}):t.jsx("p",{className:"pnos",style:{marginTop:5},children:n.noSignal})]}),f.card?t.jsx(ta,{spec:f.card}):null,f.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:o.pipe&&C>=1?n.verdictCap:n.memo}),t.jsx("p",{className:"memo",children:f.reasoning})]}),o.pipe&&T&&k&&t.jsx("div",{className:"fld",children:t.jsxs("p",{style:{fontWeight:700},children:[k,typeof f.score=="number"&&f.score>0?" · "+n.score(f.score):""]})}),o.pipe&&T&&t.jsx(jn,{o:f})]}),t.jsx(kn,{name:f.name}),t.jsxs("div",{className:"pf",children:[o.lockActions||s!=="client"&&o.pipe?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[t.jsx("span",{className:"fill"}),"🔒 ",n.lockbarCta]}):o.pipe?t.jsxs(t.Fragment,{children:[C===0&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:y,onClick:()=>d(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)]}),C===1&&t.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{c(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actAnalyse]}),C===2&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{l(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actPromote]}),C===3&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{h(f,!0),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actYes]}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{h(f,!1),a({type:"popup",id:null})},children:n.actNo}),Ft(f)&&t.jsx("button",{type:"button",className:"abtn",title:n.memoDeepHint,onClick:()=>{v(f),a({type:"popup",id:null})},children:n.memoDeep})]}),C===4&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{p(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actApproach]}),C===5&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{x(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actRepeche]}),f.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:f.id}),a({type:"popup",id:null})},children:"📄"}),b&&t.jsx("button",{type:"button",className:"abtn",title:n.actOnboardTitle,onClick:()=>{u(f),a({type:"popup",id:null})},children:"🚀"})]}):f.engine==="media"&&f.url&&o.showDemand?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{var q;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:f.url}}))}catch{}a({type:"popup",id:null}),(q=document.querySelector(".atl2 .demand"))==null||q.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rsOpen]}),t.jsx("button",{type:"button",className:"abtn",disabled:y,title:n.evalGoOn(f.name),onClick:()=>d(f),children:"⚡"})]}):t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:y,onClick:()=>d(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)," →"]}),f.website&&t.jsx("a",{className:"psite",href:f.website.startsWith("http")?f.website:"https://"+f.website,target:"_blank",rel:"noopener noreferrer",title:f.website,children:"🌐"})]})]})]}),document.body)}const $l=8;function _l(){const{t:e,lang:a,token:r,dossiers:n,caps:i,markRow:o,dispatch:s}=_(),[d,c]=m.useState(!1),[h,l]=m.useState(!1),[x,p]=m.useState(!1),v=`atl2:sincemini:${r||"home"}`,[u,b]=m.useState(()=>{try{return localStorage.getItem(v)==="1"}catch{return!1}}),y=()=>{b(q=>{try{localStorage.setItem(v,q?"0":"1")}catch{}return!q})},f=r||"home",{names:j,verdicts:C}=m.useMemo(()=>{const q=[],z={};return n.forEach(E=>{E.kind!=="target"||!E.name||(q.push(E.name),z[E.name]=oi(E)||"")}),{names:q,verdicts:z}},[n]),k=m.useMemo(()=>j.length?ii(f,j,C,a):null,[f,j.length]);if(!i.pipe||d||!k||k.firstVisit||!k.added.length&&!k.gone.length)return null;const N=h?k.added:k.added.slice(0,$l),T=k.added.length-N.length,A=q=>{const z=n.find(E=>E.name===q);z&&(o(z.id),s({type:"popup",id:z.id}))};return t.jsxs("div",{className:"since"+(u?" mini":""),children:[t.jsxs("div",{className:"sg-h",children:[t.jsxs("span",{className:"t",children:["✨ ",e.sinceTitle(k.added.length,k.lastDate)]}),t.jsx("span",{className:"s",children:e.sinceSub}),t.jsx("span",{className:"sg-sp"}),t.jsx("button",{type:"button",className:"sg-x","aria-expanded":!u,title:u?e.boxExpand:e.boxCollapse,onClick:y,children:u?"▸":"▾"}),t.jsx("button",{type:"button",className:"sg-x","aria-label":e.tourClose,title:e.tourClose,onClick:()=>{c(!0),si(f,j,C,k.fp,a)},children:"×"})]}),!!k.added.length&&t.jsxs("div",{className:"sg-c",children:[N.map(q=>t.jsx("button",{type:"button",className:"sg-chip",onClick:()=>A(q),children:t.jsx("b",{children:q})},q)),T>0&&t.jsx("button",{type:"button",className:"sg-more",onClick:()=>l(!0),children:e.sinceMore(T)})]}),!!k.gone.length&&t.jsxs("div",{className:"sg-c",children:[t.jsx("button",{type:"button",className:"sg-more",onClick:()=>p(q=>!q),children:e.sinceOut(k.gone.length)}),x&&k.gone.slice(0,20).map(q=>t.jsx("span",{className:"gone",children:q},q))]})]})}function Ul(){const{st:e,dispatch:a,counts:r,t:n,doUndo:i,data:o,dossiers:s}=_(),d=o.loading&&!s.length,c=m.useRef({});m.useEffect(()=>{c.current={...r}},[r]);const h=p=>{const v=c.current[p],u=v!==void 0?r[p]-v:0;return t.jsxs("button",{type:"button",className:"step"+(p===3&&r[3]>0?" wait":""),style:{"--c":`var(${Va[p]})`,"--tc":p<=3?"var(--ink)":"#fff"},"aria-selected":e.ptab===p,title:n.phelp[p],onClick:()=>a({type:"ptab",tab:p}),children:[t.jsxs("span",{className:"l",children:[n.plabels[p].toUpperCase(),p===3&&r[3]>0&&t.jsx("i",{className:"wd"})]}),t.jsxs("span",{className:"n"+(u>0?" up":u<0?" down":""),children:[r[p],u!==0&&t.jsxs("em",{className:"delta",children:[u>0?"+":"−",Math.abs(u)]})]})]},p)},l=(p,v,u)=>t.jsxs("button",{type:"button",className:"off"+(v?" view":""),style:{"--c":`var(${Va[p]})`},"aria-selected":e.ptab===p,title:n.phelp[p],onClick:()=>a({type:"ptab",tab:p}),children:[t.jsx("span",{className:"l",children:u.toUpperCase()}),t.jsx("span",{className:"n",children:r[p]})]},p),x=(p,v,u,b=!1)=>t.jsx("button",{type:"button",className:"tool",title:v,disabled:b,onClick:u,children:p},v);return t.jsxs("div",{className:"funnel"+(d?" waiting":""),children:[t.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(h)}),t.jsxs("div",{className:"offtrack",children:[l(5,!1,n.plabels[5]),l(7,!0,n.plabels[7]),l(6,!0,"★ "+n.plabels[6])]}),t.jsxs("span",{className:"ftools",style:{marginLeft:"auto"},children:[x("↩",n.toolUndo,i,e.undo.length===0),x("↺",n.toolReset,()=>{a({type:"reset"})}),x("⇅",n.toolSort,()=>a({type:"sort",key:e.sort.key})),x("▶",n.toolTuto,()=>a({type:"modal",modal:"tuto"})),x("⚙",n.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}function Hl(){const{st:e,dispatch:a,t:r,scoped:n,memoQueued:i,doAnalyse:o,mode:s}=_(),d=m.useRef(null),[c,h]=m.useState(60);m.useEffect(()=>{let u=0;const b=()=>{var k;const y=d.current;if(!y)return;const f=(k=y.parentElement)==null?void 0:k.querySelector('.funnel [aria-selected="true"]');if(!f)return;const j=f.getBoundingClientRect(),C=y.getBoundingClientRect();h(Math.max(20,Math.min(j.left+j.width/2-C.left,C.width-30)))};return u=requestAnimationFrame(b),window.addEventListener("resize",b),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",b)}},[e.ptab]);const l=e.ptab;let x=r.tuto[l].p;if(l===3){const u=n.filter(f=>f.kind==="target"&&ze(f)===3),b=u.filter(f=>Wa(f)==="auto").length,y=u.filter(f=>Wa(f)==="cd").length;x=r.tutoPending(b,y,u.length)}const p=(()=>{if(s!=="client")return null;if(l===0&&n.length)return{label:r.tuto[0].a,run:()=>a({type:"chainStart",queue:n.map(u=>u.id)})};if(l===1){const u=n.filter(b=>b.kind==="target"&&ze(b)===1&&!i.has(b.id)).slice(0,10);if(u.length)return{label:r.tuto[1].a,run:()=>a({type:"chainStart",queue:u.map(b=>b.id)})}}return null})(),v=li(l);return t.jsxs("div",{ref:d,className:"tuto mini"+(v?"":" on-dark"),style:{"--bg":`var(${Va[l]})`,"--ax":c+"px","--stc":v?"var(--ink)":"#fff","--stt":v?"#fff":"var(--ink)","--tc":v?"var(--ink)":"#fff"},children:[t.jsx("span",{className:"txt",children:t.jsxs("p",{children:[t.jsx("b",{className:"tstep",children:r.plabels[l].toUpperCase()}),t.jsx("span",{className:"tbody",dangerouslySetInnerHTML:{__html:x}})]})}),p&&t.jsx("button",{type:"button",className:"tprim",onClick:p.run,children:p.label})]})}const Ua=600,bt=62,vr="atl2:fstats";function Vl(){const{t:e,lang:a,data:r,caps:n,st:i,dispatch:o}=_(),[s,d]=m.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem(vr)==="on"}catch{return!1}}),c=r.stats,h=m.useMemo(()=>((c==null?void 0:c.by_day)||[]).slice(-30),[c]),l=(c==null?void 0:c.since)||"";if(!n.showFunnel||!c||typeof c.screened!="number")return null;const x=N=>a==="en"?N.slice(5,10):`${N.slice(8,10)}/${N.slice(5,7)}`,p=N=>N.toLocaleString(a==="en"?"en-US":"fr-FR"),v=h.reduce((N,T)=>Math.max(N,T.s||0),0),u=h.length?Ua/h.length:0,b=Math.max(4,u-4),y=h.length>=5&&v>0,f=r.marketEstimate||0,j=x(new Date().toISOString().slice(0,10)),C=N=>[...typeof N=="number"?[[N,e.funScreened("","")]]:[],...typeof c.kept=="number"?[[c.kept,e.funKept]]:[],...typeof c.analyzed=="number"?[[c.analyzed,e.funAnalyzed]]:[],...typeof c.shown=="number"?[[c.shown,e.funShown]]:[]],k=[];return typeof c.screened_window=="number"&&l&&k.push({cle:"fenetre",periode:e.funPerWindow(x(l),j),etapes:[[c.screened_window,e.funScreened("","")]]}),typeof c.screened=="number"&&k.push({cle:"total",periode:e.funPerAll,etapes:C(c.screened)}),t.jsxs("div",{className:"fstats"+(s?" on":""),children:[k.map(N=>t.jsxs("div",{className:"fst-row fst-lab",title:e.funScope,children:[t.jsx("span",{className:"fst-per",children:N.periode}),N.etapes.map(([T,A],q)=>t.jsxs("span",{className:"fst-t",children:[q>0&&t.jsx("span",{className:"fst-ar",children:"→"}),t.jsx("b",{children:p(T)}),t.jsx("i",{children:A})]},N.cle+A)),N.cle==="total"&&f>0&&t.jsxs("span",{className:"fst-t fst-mkt",children:[t.jsx("span",{className:"fst-ar",children:"·"}),t.jsx("i",{children:e.funOfMarket(p(f),Math.min(100,Math.round((c.screened||0)/f*100)))})]}),N.cle===k[k.length-1].cle&&y&&t.jsx("button",{type:"button",className:"fst-x","aria-expanded":s,title:s?e.fstatsHide:e.fstatsShow,onClick:()=>{const T=!s;d(T),T&&!i.mapFolded&&o({type:"mapFold",folded:!0});try{localStorage.setItem(vr,T?"on":"off")}catch{}},children:s?"⌃":"⌄"})]},N.cle)),s&&y&&t.jsxs("div",{className:"fst-act",children:[t.jsxs("div",{className:"fst-ah",children:[t.jsx("span",{children:e.actTitle}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#185c38"}}),e.actKept]}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#cfe0d6"}}),e.actScreened]})]}),t.jsxs("svg",{viewBox:`0 0 ${Ua} ${bt}`,preserveAspectRatio:"none",role:"img","aria-label":e.actTitle,children:[h.map((N,T)=>{const A=(N.s||0)/v*(bt-4),q=(N.m||0)/v*(bt-4),z=T*u+(u-b)/2;return t.jsxs("g",{children:[t.jsx("title",{children:`${x(N.d)} — ${N.s} ${e.actScreened} · ${N.m} ${e.actKept}`}),t.jsx("rect",{x:z,y:bt-2-A,width:b,height:A,fill:"#cfe0d6"}),t.jsx("rect",{x:z,y:bt-2-q,width:b,height:q,fill:"#185c38"})]},N.d)}),t.jsx("line",{x1:0,y1:bt-1.5,x2:Ua,y2:bt-1.5,stroke:"#dbe5df",strokeWidth:1})]}),t.jsxs("div",{className:"fst-ax",children:[t.jsx("span",{children:x(h[0].d)}),t.jsx("span",{children:e.actToday})]})]})]})}const co={"CALL PENDING":"call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function Nn({o:e,locked:a=!1}){const{t:r}=_(),n=ea(e),i=pt(e),o=ze(e),s=Wa(e),d=pi(e);return t.jsxs("span",{className:"c-vd",children:[n?t.jsx("span",{className:"vd "+(n==="MATCH"?"v-ok":"v-no"),title:r.vt[n],children:n}):t.jsx("span",{className:"vd wait",children:r.actToEval}),i?t.jsx("span",{className:"vd "+(co[i]||"v-cons"),title:r.vt[i],children:i}):o===1?t.jsx("span",{className:"vd wait",children:r.actMemoQueue}):null,o===3&&s==="auto"&&t.jsx("span",{className:"org au",title:r.orgAutoTitle,children:r.orgAuto}),o===3&&s==="cd"&&t.jsx("span",{className:"org cd",title:r.orgCdTitle,children:r.orgCd}),o===3&&d!==null&&t.jsx("span",{className:"wait2 "+(d>10?"hot":d>=5?"warm":""),title:r.waitTitle(d),children:r.waitChip(d)}),!a&&t.jsx(bs,{o:e})]})}const Nt=e=>e.length>22?e.slice(0,21)+"…":e,ha=new Set(["media","nominations","recrutements","tribunes","listes","evenements","partenariats","produits","regul","marche"]);function Ta(e){return ha.has(e.engine||"")}function vt(e){return!!e.noCo||Ta(e)&&!!e.url}function Zt(e){const a=(e.url||"").trim(),r=[e.headline,e.tagline].filter(n=>n&&n!==e.name).join(`
`);if(!(!a&&!r))try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:a,text:r}}))}catch{}}function po(){let e=0;return document.querySelectorAll("body.pp-desk .pph, body.pp-desk .pp-nav, body.pp-desk .pp-band, .atl2.ops .eval-stick, .atl2.ops .listhead").forEach(a=>{const r=a.getBoundingClientRect();r.height<4||r.top<window.innerHeight*.55&&r.bottom>e&&(e=r.bottom)}),e}function Wl({on:e,rev:a}){const[r,n]=m.useState(null),[i,o]=m.useState({top:0,left:0,width:0});return m.useEffect(()=>{if(!e){n(null);return}const s=()=>{var u,b,y;const d=document.querySelector(".atl2.ops .desk-list"),c=document.querySelector(".atl2.ops .listhead");if(!d){n(null);return}const h=d.getBoundingClientRect(),l=c?c.getBoundingClientRect().bottom:h.top;o({top:Math.round(l),left:Math.round(h.left),width:Math.round(h.width)});const x=[...d.querySelectorAll(":scope .grp")];let p=null;for(const f of x){const j=f.querySelector(".grp-h");j&&j.getBoundingClientRect().bottom<=l+2&&(p=f)}if(!p){n(null);return}const v=p.querySelector(".grp-h");if(!v){n(null);return}n({ic:(((u=v.querySelector(".ic"))==null?void 0:u.textContent)||"").trim(),t:(((b=v.querySelector(".t"))==null?void 0:b.textContent)||"").trim(),s:(((y=v.querySelector(".s"))==null?void 0:y.textContent)||"").trim()})};return s(),window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}},[e,a]),!e||!r||i.width<80?null:t.jsxs("div",{className:"grp-pin",style:{top:i.top,left:i.left,width:i.width},children:[t.jsx("span",{className:"ic",children:r.ic}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:r.t}),t.jsx("div",{className:"s",children:r.s})]})]})}function Yl(e){const r=()=>{const n=po(),i=e.getBoundingClientRect().top-n-8;Math.abs(i)<2||window.scrollBy({top:i,left:0,behavior:"auto"})};r(),requestAnimationFrame(()=>requestAnimationFrame(r))}function yr({o:e}){const{t:a,askEvaluate:r,evalBusy:n,lang:i}=_(),[o,s]=m.useState(!1);if(m.useEffect(()=>{n||s(!1)},[n]),De(e)){const h=(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("span",{className:"verdict",style:{"--c":h?"var(--brand)":"var(--red)"},title:e.reasoning||"",children:[h?"✓":"✗"," ",t.jsx("b",{children:h?a.kept:a.dropped}),typeof e.score=="number"&&e.score>0?" "+e.score:""]})}const c=o&&n;return t.jsxs("button",{type:"button",className:"rev"+(c?" loading":""),disabled:n,title:a.evalGoOn(e.name),onClick:h=>{h.stopPropagation(),s(!0),r(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(Nt(e.name))})]})}function Sn({o:e}){const{t:a,caps:r,memoQueued:n,approachDone:i,doAnalyse:o,doDecide:s,doPromote:d,doRepeche:c,doApproach:h,dispatch:l,liveMemos:x}=_(),p=u=>b=>{b.stopPropagation(),u()};if(r.lockActions){const u=p(()=>l({type:"modal",modal:"rdv"}));if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",onClick:u,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});const b=ze(e);return b===0?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",onClick:u,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(Nt(e.name))})]})}):b===1?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",onClick:u,children:a.actAnalyse})}):b===3?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",onClick:u,children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",onClick:u,children:a.actNo})]})}):b===2?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"promo",onClick:u,children:a.actPromote})}):b===4?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",onClick:u,children:a.actApproach})}):b===5?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"promo",onClick:u,children:a.actRepeche})}):t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn read",onClick:u,children:a.actMemo})})}if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:u=>{u.stopPropagation(),Zt(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});if(!r.pipe)return Ta(e)&&e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:u=>{u.stopPropagation(),Zt(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):e.noCo?t.jsx("span",{className:"cell"}):t.jsx("span",{className:"cell",children:t.jsx(yr,{o:e})});const v=ze(e);if(v===0)return t.jsx("span",{className:"cell",children:t.jsx(yr,{o:e})});if(v===1){const u=x.liveOf(e.name);if(u&&(u.status==="boot"||u.status==="running"))return t.jsx("span",{className:"cell",children:t.jsx(Gt,{item:u,serverOff:x.serverOff,bootLbl:a.liveBoot,endLabel:a.liveEnd})});const b=n.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",disabled:b,onClick:p(()=>o(e)),children:b?a.actAnalyseQueued:a.actAnalyse})})}if(v===3)return t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:p(()=>s(e,!0)),children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:p(()=>s(e,!1)),children:a.actNo}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:p(()=>l({type:"memoConsole",id:e.id})),children:"📄"})]})});if(v===4){const u=i.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",disabled:u,onClick:p(()=>h(e)),children:u?a.actApproachSent:a.actApproach})})}return v===2?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:p(()=>d(e)),children:a.actPromote}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:p(()=>l({type:"memoConsole",id:e.id})),children:"📄"})]})}):v===5?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:p(()=>c(e)),children:a.actRepeche}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:p(()=>l({type:"memoConsole",id:e.id})),children:"📄"})]})}):t.jsx("span",{className:"cell",children:e.memoUrl?t.jsx("button",{type:"button",className:"memobtn read",onClick:p(()=>l({type:"memoConsole",id:e.id})),children:a.actMemo}):t.jsx("span",{className:"rc",children:"—"})})}function Gl({o:e}){const{t:a,doThumb:r,thumbOf:n}=_(),i=n(e);return t.jsxs("span",{className:"thu",children:[t.jsx("button",{type:"button",className:"tb up"+(i==="yes"?" on":""),title:a.thumbUp,onClick:o=>{o.stopPropagation(),r(e,!0)},children:"👍"}),t.jsx("button",{type:"button",className:"tb dn"+(i==="no"?" on":""),title:a.thumbDn,onClick:o=>{o.stopPropagation(),r(e,!1)},children:"👎"})]})}function Kl({o:e}){const{lang:a}=_();return Te(e)?t.jsxs("span",{className:"c-sig",children:[t.jsx(St,{o:e}),t.jsx(La,{o:e,src:!0})]}):t.jsx("span",{className:"c-sig",children:t.jsxs("span",{className:"mo",children:[wt(e.engine||"")," ",_e(e.engine||"",a)]})})}function Ql({o:e,locked:a,open:r,onToggle:n,selected:i,echo:o,onSelect:s}){const{dispatch:d,caps:c,markRow:h,markedId:l,favIds:x,toggleFav:p,t:v}=_(),u=ze(e),b=["#0F172A","#475C6E","#8798A8","#B9C6D2"],y=e.date?Math.max(0,Math.floor((Date.now()-Date.parse(e.date))/864e5)):9999,f=y<=0?0:y<=7?1:y<=30?2:3,j=c.pipe&&e.kind==="target"?["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"][u]:b[f],C=x.has(e.id),k=N=>{if(a)return;if(s){s(e.id);return}if(c.pipe||e.kind==="op"){n();return}const T=N.currentTarget.getBoundingClientRect();d({type:"popup",id:e.id,anchor:{x:T.left+Math.min(280,T.width/3),y:T.bottom}})};return t.jsxs(m.Fragment,{children:[t.jsxs("div",{className:"row"+(l===e.id||r||i?" on":"")+(r?" open":"")+(i?" sel":"")+(o?" echo":"")+(a?" tzr":""),"aria-selected":i||void 0,onMouseEnter:()=>h(e.id),onMouseLeave:()=>h(null),onClick:k,children:[t.jsx("span",{className:"pt",style:{"--c":j}}),t.jsx(ho,{o:e}),t.jsxs("span",{className:"nd",children:[t.jsxs("span",{className:"rnm"+(a?" nmx":""),title:a?void 0:e.name,children:[c.pipe&&t.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:C?1:.35,padding:0,marginRight:4},onClick:N=>{N.stopPropagation(),p(e)},children:C?"★":"☆"}),e.name]}),t.jsx("span",{className:"rds",title:e.tagline||e.headline||"",children:[e.tagline,e.headline,e.reasoning].find(N=>N&&N!==e.name)||""}),e.acquirer&&t.jsxs("button",{type:"button",className:"racq",title:v.acqSee(e.acquirer),onClick:N=>{N.stopPropagation(),d({type:"acquirer",value:e.acquirer||""})},children:["← ",Nt(e.acquirer)]}),Je(e)?t.jsx("span",{className:"rdec",title:v.doEdito,children:"📖"}):e.decryptHtml?t.jsx("span",{className:"rdec",title:v.zoomNewsMark,children:"📰"}):null]}),t.jsx(Jl,{o:e}),t.jsx("span",{className:"c-stade",children:e.stage||""}),t.jsx(Kl,{o:e}),c.pipe&&t.jsx(Nn,{o:e,locked:a}),c.pipe&&t.jsxs("span",{className:"c-sc",children:[typeof e.score=="number"?e.score:"",typeof e.score=="number"&&t.jsx("s",{children:"/100"})]}),t.jsx(Sn,{o:e}),c.showThumbs&&t.jsx(Gl,{o:e})]}),r&&!a&&!s&&t.jsx(ed,{o:e})]})}function Jl({o:e}){const{lang:a,caps:r}=_();if(r.pipe&&e.kind==="target")return t.jsx("span",{className:"c-amt none",children:"—"});const n=It(e.amountEur,a);return t.jsx("span",{className:"c-amt"+(n?"":" none"),children:n||"—"})}function Xl({o:e}){const{t:a,lang:r,askEvaluate:n,evalBusy:i,dispatch:o}=_(),s=(p,v=!1)=>u=>{u.stopPropagation(),v&&o({type:"continent",key:"monde"}),o({type:"filters",patch:p})},d=(()=>{const p=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return p?p[1].slice(0,40):""})(),c=It(e.amountEur,r),h=(e.date||"").slice(0,10).split("-").reverse().join("/"),l=De(e),x=l&&(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("div",{className:"card ops-open",children:[t.jsxs("div",{className:"oc-main",children:[e.decryptHtml?t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}):t.jsx("p",{className:"oc-head",children:e.headline||e.tagline||e.name}),t.jsxs("div",{className:"oc-meta",children:[e.sector&&t.jsx("button",{type:"button",onClick:s({sector:[e.sector]}),children:e.sector}),e.countryLabel&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:s({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:s({stage:[e.stage]}),children:e.stage}),c&&t.jsx("span",{className:"oc-amt",children:c}),h&&t.jsx("span",{children:h})]}),t.jsxs("div",{className:"oc-acts",children:[l?t.jsxs("span",{className:"verdict",style:{"--c":x?"var(--brand)":"var(--red)"},children:[x?"✓":"✗"," ",t.jsx("b",{children:x?a.kept:a.dropped})]}):vt(e)?t.jsxs(t.Fragment,{children:[e.url&&t.jsx("button",{type:"button",className:"oc-cta",onClick:p=>{p.stopPropagation(),Zt(e)},children:a.rowExtract}),!e.noCo&&t.jsx("button",{type:"button",className:"oc-ghost",disabled:i,onClick:p=>{p.stopPropagation(),n(e)},children:a.evalGoOn(Nt(e.name))})]}):t.jsx("button",{type:"button",className:"oc-cta",disabled:i,onClick:p=>{p.stopPropagation(),n(e)},children:a.evalGoOn(Nt(e.name))}),e.url&&t.jsxs("a",{className:"oc-src",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:p=>p.stopPropagation(),children:[(r==="fr"?"lire la source":"read the source")+(d?` · ${d}`:"")," ↗"]})]})]}),e.card&&t.jsx("div",{className:"oc-side",children:t.jsx(ta,{spec:e.card})})]})}function Zl({o:e}){const{t:a,lang:r,caps:n,dispatch:i}=_();if(!e)return t.jsx("p",{className:"readpane-empty",children:r==="fr"?"Cliquez une ligne — le dossier s’ouvre ici, sans quitter la liste.":"Click a row — the file opens here, without leaving the list."});const o=(e.date||"").slice(0,10).split("-").reverse().join("/");return t.jsxs("div",{className:"zoom zoom-pipe",children:[t.jsxs("div",{className:"zoom-k",children:[_e(e.engine||"",r),o?` · ${o}`:""]}),t.jsx("h3",{className:"zoom-h",children:e.name}),(e.sector||e.countryLabel||e.stage)&&t.jsxs("div",{className:"zoom-meta",children:[e.sector?t.jsx("span",{children:e.sector}):null,e.countryLabel?t.jsx("span",{children:e.countryLabel}):null,e.stage?t.jsx("span",{children:e.stage}):null]}),t.jsx("div",{className:"zoom-cta",children:n.lockActions?t.jsx("button",{type:"button",className:"oc-cta",onClick:()=>i({type:"modal",modal:"rdv"}),children:a.lockbarCta}):t.jsx(Sn,{o:e})}),t.jsx(jn,{o:e})]})}function uo({o:e,extra:a}){const{t:r,lang:n,askEvaluate:i,evalBusy:o,dispatch:s,caps:d,dossiers:c}=_(),h=m.useRef(null),l=Je(e);if(m.useEffect(()=>{if(!l||!(e!=null&&e.decryptHtml))return;const g=h.current;if(!g)return;let L=!1;return ci(()=>import("./fit-BmXBiOvz.js"),[]).then(async W=>{await W.ensureEditoCss(),!L&&g.isConnected&&W.mountCardFits(g)}),()=>{L=!0}},[l,e==null?void 0:e.decryptHtml]),!e&&!a){const g=c.find(Je);if(g)return t.jsx(uo,{o:g})}const x=((e==null?void 0:e.name)||(a==null?void 0:a.name)||"").trim(),p=((e==null?void 0:e.url)||(a==null?void 0:a.url)||"").trim(),v=(e==null?void 0:e.headline)||(e==null?void 0:e.tagline)||(a==null?void 0:a.headline)||x,u=(e==null?void 0:e.card)||(a==null?void 0:a.card),b=e?!!e.noCo:!x||va(x),y=(e==null?void 0:e.engine)||"",f=Je(e),j=e?It(e.amountEur,n):"",C=((e==null?void 0:e.date)||"").slice(0,10).split("-").reverse().join("/"),k=(()=>{const g=/https?:\/\/(?:www\.)?([^/]+)/.exec(p);return g?g[1].replace(/^www\./,"").slice(0,40):""})(),N=c.find(Je),T=((N==null?void 0:N.url)||"").trim(),A=!!p&&!!T&&(p===T||p.endsWith(T)||T.endsWith(p)),q=(g,L=!1)=>W=>{W.stopPropagation(),L&&s({type:"continent",key:"monde"}),s({type:"filters",patch:g})};if(!e&&!a)return t.jsx("p",{className:"readpane-empty",children:n==="fr"?"Cliquez une ligne, un pin ou le ticker — le dossier s’ouvre ici.":"Click a row, a pin or the ticker — the file opens here."});const z=()=>{x&&(s({type:"continent",key:"monde"}),s({type:"filters",patch:{search:x}}))},E=()=>{e!=null&&e.sector&&s({type:"filters",patch:{sector:[e.sector]}})},P=()=>{Zt({url:p,headline:v,tagline:e==null?void 0:e.tagline,name:x})},I=e?De(e):!1,R=I&&e&&(e.verdict||"").toUpperCase()!=="NO MATCH",D=f?r.doEdito.replace(/^📖\s*/,""):y?_e(y,n):n==="fr"?"Dossier":"File";return t.jsxs("div",{className:"zoom",children:[t.jsxs("div",{className:"zoom-k",children:[D,C?` · ${C}`:""]}),t.jsx("h3",{className:"zoom-h",children:v}),p&&!f&&(b||Ta({engine:y}))&&t.jsxs("a",{className:"zoom-ext",href:p,target:"_blank",rel:"noopener noreferrer",title:r.viewLinkHint,onClick:g=>g.stopPropagation(),children:[t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]}),r.viewLink,k?t.jsx("em",{children:k}):null]}),(e==null?void 0:e.decryptHtml)&&t.jsx("div",{ref:h,className:"ed-decrypt-b zoom-body"+(f?" ppart":""),dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsxs("div",{className:"zoom-meta",children:[(e==null?void 0:e.sector)&&t.jsx("button",{type:"button",onClick:q({sector:[e.sector]}),children:e.sector}),(e==null?void 0:e.countryLabel)&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:q({country:[e.cc]},!0),children:e.countryLabel}):e!=null&&e.countryLabel?t.jsx("span",{children:e.countryLabel}):null),(e==null?void 0:e.stage)&&t.jsx("button",{type:"button",onClick:q({stage:[e.stage]}),children:e.stage}),j&&t.jsx("span",{className:"oc-amt",children:j})]}),u&&t.jsx("div",{className:"zoom-card",children:t.jsx(ta,{spec:u})}),(p&&!A&&!f||N&&!f)&&t.jsxs("div",{className:"zoom-srcbox",children:[p&&!A&&!f&&t.jsxs("a",{className:"zoom-src",href:p,target:"_blank",rel:"nofollow noopener",onClick:g=>g.stopPropagation(),children:[r.zoomSrc,k?` · ${k}`:""," ↗"]}),N&&!f&&t.jsxs("button",{type:"button",className:"zoom-src zoom-src-art",onClick:g=>{g.stopPropagation(),s({type:"focus",id:N.id})},children:[r.doEdito," →"]})]}),t.jsxs("div",{className:"zoom-acts",children:[I?t.jsxs("span",{className:"verdict",style:{"--c":R?"var(--brand)":"var(--red)"},children:[R?"✓":"✗"," ",t.jsx("b",{children:R?r.kept:r.dropped})]}):!b&&x?t.jsxs("button",{type:"button",className:"zp-go",disabled:o,onClick:g=>{g.stopPropagation(),i(e,x)},children:[t.jsx("span",{className:"zp-ico",children:"⚡"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.evalGoOn(Nt(x))}),t.jsx("em",{children:r.zoomEvalHint})]})]}):null,p&&!f&&(b||Ta({engine:y}))&&t.jsxs("button",{type:"button",className:"zp-go"+(!b&&x?" ghost":""),onClick:g=>{g.stopPropagation(),P()},children:[t.jsx("span",{className:"zp-ico",children:"🔎"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.rowExtract}),t.jsx("em",{children:r.rsOpen})]})]}),!b&&x&&t.jsxs("div",{className:"zp-row",children:[(e==null?void 0:e.sector)&&!d.pipe&&t.jsxs("button",{type:"button",className:"zp-sec",onClick:g=>{g.stopPropagation(),E()},children:[t.jsx("span",{className:"zp-k",children:r.zoomSimilar}),t.jsx("span",{className:"zp-v",children:e.sector}),t.jsx("em",{children:r.zoomSimilarHint})]}),t.jsxs("button",{type:"button",className:"zp-sec",onClick:g=>{g.stopPropagation(),z()},children:[t.jsx("span",{className:"zp-k",children:r.zoomInCockpit}),t.jsx("span",{className:"zp-v",children:Nt(x)}),t.jsx("em",{children:r.zoomIsolateHint})]})]}),!b&&x&&d.pipe&&t.jsx(kn,{name:x})]})]})}function ed({o:e}){const{t:a,lang:r,dispatch:n,caps:i,outbound:o,doOnboard:s}=_();return!i.pipe&&e.kind==="op"?t.jsx(Xl,{o:e}):t.jsxs("div",{className:"card",style:{display:"grid"},children:[t.jsxs("div",{children:[e.tagline&&t.jsx("p",{className:"lead",children:e.tagline}),e.decryptHtml&&t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsx(jn,{o:e}),t.jsx(vs,{o:e}),t.jsx(ks,{o:e}),t.jsx(kn,{name:e.name}),t.jsxs("div",{className:"tg",children:[e.sector&&t.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),n({type:"filters",patch:{sector:[e.sector]}})},children:e.sector}),e.stage&&t.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),n({type:"filters",patch:{stage:[e.stage]}})},children:e.stage}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),n({type:"continent",key:"monde"}),n({type:"filters",patch:{country:[e.cc]}})},children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.city&&t.jsx("span",{children:e.city})]})]}),t.jsxs("div",{className:"cside",children:[t.jsxs("div",{className:"top",children:[typeof e.score=="number"&&t.jsx("span",{className:"sc3",children:e.score}),t.jsx("span",{className:"vv",children:t.jsx(Nn,{o:e})})]}),e.card&&t.jsx(ta,{spec:e.card}),t.jsxs("div",{className:"sec2",children:[t.jsxs("div",{className:"k2",children:[wt(e.engine||"")," ",_e(e.engine||"",r)]}),Te(e)&&t.jsx("div",{style:{marginTop:8},children:t.jsx(St,{o:e})})]}),i.pipe&&(e.memoUrl||o)&&t.jsx("div",{className:"sec2 acts2",children:o&&t.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>s(e),children:a.actOnboard})})]})]})}function td({o:e,locked:a,selected:r,onSelect:n}){const{t:i,dispatch:o,caps:s,doDecide:d,lang:c}=_();if(!s.pipe&&e.kind==="op"){const x=It(e.amountEur,c),p=(()=>{const u=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return u?u[1].slice(0,32):""})(),v=(u,b=!1)=>y=>{y.stopPropagation(),b&&o({type:"continent",key:"monde"}),o({type:"filters",patch:u})};return t.jsxs("div",{className:"dcard dops"+(a?" tzr":"")+(r?" sel":""),onClick:()=>{!a&&n&&n(e.id)},children:[e.card&&t.jsx("div",{className:"dimg",children:t.jsx(ta,{spec:e.card})}),t.jsxs("div",{className:"dh",children:[t.jsx("span",{className:"dnm",title:e.name,children:e.name}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial",children:"📖"})]}),e.headline&&e.headline!==e.name&&t.jsx("div",{className:"ddesc",children:e.headline}),t.jsxs("div",{className:"dtags",children:[e.sector&&t.jsx("button",{type:"button",onClick:v({sector:[e.sector]}),children:e.sector}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:v({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:v({stage:[e.stage]}),children:e.stage}),x&&t.jsx("span",{className:"damt",children:x})]}),t.jsxs("div",{className:"dsig",children:[t.jsxs("span",{className:"dmo",children:[wt(e.engine||"")," ",_e(e.engine||"",c)]}),Te(e)&&t.jsx(St,{o:e})]}),e.url&&t.jsxs("a",{className:"dsrc",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:u=>u.stopPropagation(),children:[(c==="fr"?"lire la source":"read the source")+(p?` · ${p}`:"")," ↗"]}),!a&&t.jsx("div",{className:"dact",children:t.jsx(Sn,{o:e})})]})}const h=ze(e),l=["#E7EBF0","#E7F3EC","#C4E0D0","#7FC0A0","#0E8A4F","#DC2626"][h];return t.jsxs("div",{className:"dcard"+(a?" tzr":"")+(r?" sel":""),style:{"--c":l},onClick:()=>{!a&&n&&n(e.id)},children:[t.jsxs("div",{className:"dh",children:[typeof e.score=="number"&&t.jsx("span",{className:"dsc",children:e.score}),t.jsx("span",{className:"dnm",title:e.name,children:e.name})]}),t.jsxs("div",{className:"dv",children:[t.jsx(Nn,{o:e}),Te(e)&&t.jsx(St,{o:e})]}),t.jsx("div",{className:"dmeta",children:[e.countryLabel,e.stage,e.sector].filter(Boolean).join(" · ").toUpperCase()}),(e.tagline||e.reasoning)&&t.jsx("div",{className:"ddesc",children:e.tagline||e.reasoning}),!a&&s.pipe&&h===3&&t.jsxs("div",{className:"dyn",children:[t.jsx("button",{type:"button",style:{"--c3":"#0A6B3D"},onClick:()=>d(e,!0),children:i.actYes}),t.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>d(e,!1),children:i.actNo})]}),!a&&e.memoUrl&&t.jsxs("button",{type:"button",className:"dmemo",onClick:()=>o({type:"memoConsole",id:e.id}),children:[i.actMemo," →"]})]})}function ad(){const{t:e}=_(),[a,r]=m.useState(0);return m.useEffect(()=>{const n=window.setInterval(()=>r(i=>i+1),2400);return()=>window.clearInterval(n)},[]),t.jsxs("div",{className:"loadwait","aria-live":"polite",children:[t.jsxs("div",{className:"lw-top",children:[t.jsx("span",{className:"lw-dot"}),t.jsx("span",{className:"lw-msg",children:e.loadMsgs[a%e.loadMsgs.length]})]}),[0,1,2,3,4,5].map(n=>t.jsxs("div",{className:"lw-row",style:{"--d":`${n*.12}s`},children:[t.jsx("span",{className:"lw-c lw-c1"}),t.jsx("span",{className:"lw-c lw-c2"}),t.jsx("span",{className:"lw-c lw-c3"})]},n))]})}function nd({counts:e}){const{st:a,dispatch:r,t:n,lang:i}=_(),o=i==="en",s=l=>n.plabels[l]||"",d=[0,1,2,3,4,5,6,7].filter(l=>l!==a.ptab&&(e[l]||0)>0),c=d.includes(0)?0:d.sort((l,x)=>(e[x]||0)-(e[l]||0))[0];if(c===void 0)return t.jsx("div",{className:"void",children:n.emptyTab});const h=e[c]||0;return t.jsxs("div",{className:"void void-empty",children:[t.jsx("b",{children:o?`No “${s(a.ptab)}” for now.`:`0 ${s(a.ptab).toLowerCase().replace(/s$/,"")} pour l’instant.`}),t.jsx("span",{children:c===0?o?`${h} ${h>1?"files are":"file is"} waiting for your screening`:`${h} dossier${h>1?"s":""} attende${h>1?"nt":""} votre évaluation`:o?`${h} ${h>1?"files":"file"} in “${s(c)}”`:`${h} dossier${h>1?"s":""} dans « ${s(c)} »`}),t.jsxs("button",{type:"button",className:"abtn",onClick:()=>r({type:"ptab",tab:c}),children:[(o?"Open ":"Ouvrir ")+s(c)," →"]})]})}function rd(){var ut,dt,Ue,mt,ft;const e=_(),{st:a,dispatch:r,t:n,caps:i,counts:o,scoped:s,scopedAll:d,markRow:c,lang:h,sessTally:l,data:x,dossiers:p,source:v,focusExtra:u,byId:b,token:y}=e,f=Fr(),j=m.useMemo(()=>{var V,se,ue,ce;if(!y||v==="ops")return null;const S=(((V=f==null?void 0:f.ed)==null?void 0:V.date)||(f==null?void 0:f.day)||"").slice(0,10),B=[(se=f==null?void 0:f.ed)==null?void 0:se.html,(ue=f==null?void 0:f.ed)==null?void 0:ue.acquirers_html].filter(Boolean).join("");return{id:"edito:brief",kind:"op",name:h==="en"?"Today's brief":"Brief du jour",headline:h==="en"?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",tagline:((ce=f==null?void 0:f.ed)==null?void 0:ce.date)||S,decryptHtml:B||void 0,date:S,engine:"edito",dealKind:"other",noCo:!0,cc:null,continent:null}},[y,v,h,(ut=f==null?void 0:f.ed)==null?void 0:ut.html,(dt=f==null?void 0:f.ed)==null?void 0:dt.acquirers_html,(Ue=f==null?void 0:f.ed)==null?void 0:Ue.date,f==null?void 0:f.day]),C=S=>i.lockRowsAfter!==null||v==="ops"?Number.MAX_SAFE_INTEGER:qr,[k,N]=m.useState(new Set);m.useEffect(()=>{N(new Set)},[a.ptab,a.continent]);const[T,A]=m.useState(null);m.useEffect(()=>{A(null)},[a.ptab,a.continent]);const[q,z]=m.useState(!a.mapFolded);m.useEffect(()=>{if(a.mapFolded){z(!1);return}const S=document.getElementById("atl2-stage");if(!S){z(!1);return}const B=new IntersectionObserver(([V])=>z(!!V&&V.isIntersecting),{root:null,rootMargin:"-120px 0px 0px 0px",threshold:0});return B.observe(S),()=>B.disconnect()},[a.mapFolded]);const E=a.mapFolded||!q,P=S=>N(B=>{const V=new Set(B);return V.has(S)?V.delete(S):V.add(S),V}),I=v==="ops"||i.pipe,[R,D]=m.useState("all"),[g,L]=m.useState(null),[W,$]=m.useState(!1),U=m.useRef(!0);m.useEffect(()=>{if(U.current){U.current=!1;return}D("all"),$(!1)},[a.ptab,a.continent]),m.useEffect(()=>{if(!W)return;const S=B=>{var V,se;(se=(V=B.target)==null?void 0:V.closest)!=null&&se.call(V,".atl2 .doable")||$(!1)};return document.addEventListener("click",S),()=>document.removeEventListener("click",S)},[W]);const oe=m.useMemo(()=>{var B;const S=new Map;for(const V of is(((B=f==null?void 0:f.ed)==null?void 0:B.html)||""))S.has(V.t)||S.set(V.t,V.html);return S},[(mt=f==null?void 0:f.ed)==null?void 0:mt.html]),X=m.useCallback(S=>{if(S.decryptHtml)return S.decryptHtml;if(!oe.size)return;const B=(S.name||"").trim().toLowerCase();if(B.length<3)return;const V=oe.get(B);if(V)return V;for(const[se,ue]of oe)if(se.includes(B)||B.includes(se))return ue},[oe]),Y=m.useMemo(()=>{let S=gn(s,a.sort);return S=S.filter(B=>!Je(B)),R==="explore"?S=S.filter(vt):R==="eval"&&(S=S.filter(B=>!vt(B)&&!B.noCo)),S},[s,a.sort,R,X]),ie=m.useMemo(()=>i.pipe?d.filter(S=>Te(S)&&di(S)):Y.filter(S=>Te(S)&&!De(S)),[i.pipe,d,Y]),te=ie.length,[ge,G]=m.useState(!1),[de,ye]=m.useState(!1),Se=`atl2:sigmini:${((ft=x.session)==null?void 0:ft.token)||"home"}`,[be,ne]=m.useState(()=>{try{return localStorage.getItem(Se)==="1"}catch{return!1}}),re=m.useMemo(()=>i.pipe?Y:Y.filter(S=>!De(S)&&!S.noCo),[Y,i.pipe]),Z=v==="ops"?Y.filter(vt).length:0,K=i.pipe?n.plabels[a.ptab].toLowerCase():v==="ops"?n.edLabel:a.filters.status==="retenu"?n.keptByStan:a.filters.status==="ecarte"?n.droppedByStan:n.toSend,me=a.filters,ke=[];if(me.day)ke.push({k:"day",lib:n.fDay(me.day.slice(8,10)+"/"+me.day.slice(5,7)),off:()=>r({type:"filters",patch:{day:"",win:"all"}})});else if(me.win&&me.win!=="all"){const S=["1","7","30"].indexOf(me.win);S>=0&&ke.push({k:"win",lib:n.dates[S],off:()=>r({type:"filters",patch:{win:"all"}})})}const Ne=S=>S.length<=2?S.join(", "):`${S.length} ${n.fSelected}`;for(const S of["sector","country","engine"]){const B=me[S];B&&B.length&&ke.push({k:S,lib:Ne(B),off:()=>r({type:"clearFacet",facet:S})})}me.search&&ke.push({k:"search",lib:"🔍 "+me.search,off:()=>r({type:"filters",patch:{search:""}})});const Q=(S,B,V="",se=!1)=>t.jsxs("button",{type:"button","data-s":S,className:V,"aria-sort":a.sort.key===S?a.sort.dir===1?"ascending":"descending":"none",style:se?{justifyContent:"flex-end"}:void 0,onClick:()=>r({type:"sort",key:S}),children:[B,t.jsx("span",{className:"ar",children:a.sort.key===S&&a.sort.dir===1?"▴":"▾"})]},S),ae=m.useMemo(()=>{if(i.pipe||a.groupBy==="none")return null;const S=new Map;Y.forEach(se=>{const ue=se.engine||"?";S.has(ue)||S.set(ue,[]),S.get(ue).push(se)});const B={ma:0,fundraising:1,partenariats:2,produits:3,regul:4,marche:5,nominations:6,recrutements:7,evenements:8,listes:9,tribunes:10,media:11,edito:12},V=Ha([...S.keys()],h);return[...S.entries()].sort((se,ue)=>{const ce=B[se[0]]??10+V.indexOf(se[0]),xe=B[ue[0]]??10+V.indexOf(ue[0]);return ce-xe})},[Y,i.pipe,a.groupBy,h]),Oe=ae?ae.filter(([S])=>ha.has(S)).length:0,qe=(()=>{var B;return((B=(ae?ae.flatMap(([,V])=>V):Y)[0])==null?void 0:B.id)??null})(),Ae=m.useRef(!1),we=m.useMemo(()=>p.find(Je)||j,[p,j]);m.useEffect(()=>{const S=()=>{Ae.current=!0};return window.addEventListener("ppmap:reveal",S),window.addEventListener("ppmap:focus",S),()=>{window.removeEventListener("ppmap:reveal",S),window.removeEventListener("ppmap:focus",S)}},[]),m.useEffect(()=>{const S=()=>{we&&r({type:"focus",id:we.id})};return window.addEventListener("ppmap:edito",S),()=>window.removeEventListener("ppmap:edito",S)},[we,r]),m.useEffect(()=>{if(!a.focusId)return;L(a.focusId);const S=window.setTimeout(()=>L(null),900);return()=>window.clearTimeout(S)},[a.focusId]),m.useEffect(()=>{if(I&&!(a.focusId&&(Y.some(S=>S.id===a.focusId)||p.some(S=>S.id===a.focusId)||a.focusId===(we==null?void 0:we.id)))&&!u){if(we){r({type:"focus",id:we.id});return}qe&&r({type:"focus",id:qe})}},[I,a.focusId,Y,qe,u,r,p,v,we]),m.useEffect(()=>{if(!(!I||!a.focusId)&&R!=="all"&&!(we&&a.focusId===we.id)&&!Y.some(S=>S.id===a.focusId)&&p.some(S=>S.id===a.focusId)){if(Ae.current){D("all");return}qe&&r({type:"focus",id:qe})}},[I,a.focusId,R,Y,p,qe,r]),m.useEffect(()=>{if(!I||!a.focusId||!Ae.current)return;Ae.current=!1;const S=document.querySelector(".atl2.ops .row.sel, .atl2.ops .dcard.sel");if(!S)return;const B=po(),V=S.getBoundingClientRect();V.top>=B-2&&V.bottom<=window.innerHeight-4||Yl(S)},[I,a.focusId]),m.useEffect(()=>{if(typeof window>"u")return;const S=document.querySelector(".atl2.ops .listhead, .atl2.cibles .listhead"),B=document.querySelector(".atl2.ops, .atl2.cibles");if(!S||!B)return;const V=()=>B.style.setProperty("--listhead-h",`${S.offsetHeight}px`);V();const se=new ResizeObserver(V);return se.observe(S),()=>se.disconnect()},[E,a.dens,a.mapFolded]);const Me=m.useMemo(()=>{if(!I||!a.focusId)return null;if(j&&a.focusId===j.id)return j;const S=Y.find(V=>V.id===a.focusId)||p.find(V=>V.id===a.focusId)||null;if(!S)return null;const B=X(S);return B&&B!==S.decryptHtml?{...S,decryptHtml:B}:S},[I,a.focusId,Y,p,X,j]),fe=i.lockRowsAfter;let lt=0;const Fe=(S,B)=>{let V=a.shown[B]||C();return S.length-V<=4&&(V=S.length),S.slice(0,V).map(ce=>{const xe=fe!==null&&lt>=fe;lt++;const Ke=X(ce),Ct=Ke&&Ke!==ce.decryptHtml?{...ce,decryptHtml:Ke}:ce,xt=!I&&a.dens!=="maxi"&&(a.dens==="deplie"||(T?T==="open":!!Ke)),zt=k.has(ce.id)?!xt:xt,ct=I?At=>{Ae.current=!0,r({type:"focus",id:At});const He=b.get(At);He&&(vt(He)?Zt(He):He.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:He.name,url:He.url||"",website:He.website||"",domain:He.domain||""}})))}:void 0;return a.dens==="maxi"?t.jsx(td,{o:Ct,locked:xe,selected:I&&a.focusId===ce.id,onSelect:ct},ce.id):t.jsx(Ql,{o:Ct,locked:xe,open:zt,onToggle:()=>P(ce.id),selected:I&&a.focusId===ce.id,echo:g===ce.id,onSelect:ct},ce.id)})},rt="list"+(a.dens==="maxi"?" maxi":a.dens==="ligne"||a.dens==="deplie"?" ligne":"")+(v==="ops"?" opsl":"")+(Y.length?"":" list-empty"),Xe=t.jsxs(t.Fragment,{children:[ae?ae.map(([S,B])=>t.jsxs("div",{className:"grp",children:[t.jsxs("div",{className:"grp-h",children:[t.jsx("span",{className:"ic",children:wt(S)}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:S==="ma"?n.grpMa:S==="fundraising"?n.grpLev:ha.has(S)&&Oe<=1?n.grpNews:S==="nominations"?n.grpNom:S==="media"?n.grpNewsOther:S==="recrutements"?n.grpHire:ha.has(S)?n.grpNews+" · "+_e(S,h):_e(S,h)}),t.jsx("div",{className:"s",children:n.grpCount(B.filter(V=>!De(V)).length,B.length)})]})]}),Fe(B,S)]},S)):Fe(Y,"pt"+a.ptab),x.loading&&!p.length&&t.jsx(ad,{}),!Y.length&&!(x.loading&&!p.length)&&(i.pipe?t.jsx(nd,{counts:o}):t.jsx("div",{className:"void",children:n.emptyScope}))]});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"listhead"+(E?" mapoff":""),children:[i.showFunnel&&t.jsxs("div",{className:"lh-funnel",children:[t.jsx(Ul,{}),t.jsx(Hl,{})]}),i.showFunnel&&t.jsxs("div",{className:"lh-stats",children:[t.jsx(Ns,{}),t.jsx(Vl,{})]}),t.jsxs("div",{className:"lh-top",children:[t.jsxs("span",{className:"main",children:[t.jsx("b",{children:Y.length})," ",K]}),t.jsx("span",{className:"dot",children:"·"}),E&&t.jsx(io,{variant:"compact",mapToggle:!!a.mapFolded}),t.jsxs("span",{className:"ctx",children:[E?i.pipe&&e.fund?e.fund:null:t.jsxs(t.Fragment,{children:[e.contName,i.pipe&&e.fund?" · "+e.fund:""]}),ke.map(S=>t.jsxs("button",{type:"button",className:"fpuce",title:n.filterOff,onClick:B=>{B.stopPropagation(),S.off()},children:[S.lib,t.jsx("i",{children:"×"})]},S.k)),v==="ops"&&Y.length>0&&!E&&t.jsxs("span",{className:"edsplit",children:[" — ","⚡ ",Y.length-Z," ",n.zoomPulseEval,Z>0?t.jsxs(t.Fragment,{children:[" · 🔎 ",Z," ",n.zoomPulseExplore]}):null]})]}),a.filters.acquirer.trim()&&t.jsxs("span",{className:"acqchip",children:["🏢 ",n.acqOn(a.filters.acquirer),t.jsx("button",{type:"button",title:n.acqClear,onClick:()=>r({type:"acquirer",value:""}),children:"✕"})]}),i.showGroupBar&&t.jsxs("span",{className:"groupbar",children:[t.jsx("span",{className:"gl",children:n.groupBy}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>r({type:"groupBy",groupBy:"engine"}),children:n.groupEngine}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>r({type:"groupBy",groupBy:"none"}),children:n.groupNone})]}),a.pileMode&&t.jsx("button",{type:"button",className:"exitpile",onClick:()=>r({type:"pile",on:!1}),children:n.exitPile}),t.jsxs("span",{className:"lh-acts",children:[(i.showFunnel||v==="ops")&&t.jsx("span",{className:"dens",children:[["liste",n.densList],["ligne",n.densLigne],["maxi",n.densMaxi]].map(([S,B])=>t.jsxs("button",{type:"button","data-d":S,"aria-pressed":a.dens===S||S==="ligne"&&a.dens==="deplie",onClick:()=>r({type:"dens",dens:S}),children:[t.jsx("i",{children:t.jsx("em",{})}),t.jsx("b",{children:B})]},S))}),!I&&i.showFunnel&&a.dens!=="maxi"&&t.jsxs("span",{className:"foldall",children:[t.jsx("button",{type:"button","aria-pressed":T==="open",onClick:()=>{A("open"),N(new Set)},children:n.unfoldAll}),t.jsx("button",{type:"button","aria-pressed":T==="closed",onClick:()=>{A("closed"),N(new Set)},children:n.foldAllLbl})]}),(i.showFunnel||v==="ops")&&(()=>{var ce;const S=s.filter(xe=>!Je(xe)),B=S.filter(xe=>!vt(xe)&&!xe.noCo).length,V=S.filter(vt).length,se=[["all",n.doAll],["eval",`${n.doEval}${B?` ${B}`:""}`],["explore",`${n.doExplore}${V?` ${V}`:""}`]],ue=((ce=se.find(([xe])=>xe===R))==null?void 0:ce[1])||n.doAll;return t.jsxs("span",{className:"doable",children:[t.jsxs("button",{type:"button",className:"dobtn","aria-expanded":W,onClick:()=>$(xe=>!xe),children:[ue,t.jsx("i",{children:"▾"})]}),W&&t.jsx("div",{className:"dolist",children:se.map(([xe,Ke])=>t.jsx("button",{type:"button","aria-pressed":R===xe,onClick:()=>{D(xe),$(!1)},children:Ke},xe))})]})})(),a.dens==="maxi"&&t.jsxs("label",{className:"sortsel",children:[t.jsx("span",{children:n.sortBy}),t.jsx("select",{value:a.sort.key,onChange:S=>r({type:"sort",key:S.target.value}),children:[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage],...i.pipe?[["crible",n.sortCrible],["memo",n.sortMemo],["score",n.sortScore]]:[]].map(([S,B])=>t.jsx("option",{value:S,children:B},S))})]}),i.showChain&&re.length>0&&t.jsxs("span",{className:"chainwrap",children:[t.jsxs("button",{type:"button",className:"chain",title:n.chainHint,onClick:()=>r({type:"chainStart",queue:re.map(S=>S.id)}),children:[t.jsx("span",{className:"b",children:"▶"})," ",i.pipe?n.browse(re.length):n.chainAll(re.length)]}),t.jsx("em",{className:"chainhint",children:n.chainHint})]})]})]}),E&&t.jsx("div",{className:"lh-tools",children:t.jsx(oo,{compact:!0})})]}),t.jsx(_l,{}),te>0&&!a.filters.signalOnly&&!de&&t.jsxs("div",{className:"sigstrip"+(be?" mini":""),children:[t.jsxs("div",{className:"sg-h",children:[t.jsx("span",{className:"t",dangerouslySetInnerHTML:{__html:n.sigStrip(te)}}),t.jsx("span",{className:"s",children:n.sigStripSub}),t.jsx("span",{className:"sg-sp"}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{signalOnly:!0,signalEngines:[]}}),children:n.sigStripGo}),t.jsx("button",{type:"button",className:"sg-x","aria-expanded":!be,title:be?n.boxExpand:n.boxCollapse,onClick:()=>ne(S=>{try{localStorage.setItem(Se,S?"0":"1")}catch{}return!S}),children:be?"▸":"▾"}),t.jsx("button",{type:"button",className:"sg-x",title:n.tourClose,onClick:()=>ye(!0),children:"×"})]}),t.jsxs("div",{className:"sg-c",children:[(ge?ie:ie.slice(0,12)).map(S=>{const B=Te(S);return B?t.jsxs("button",{type:"button",className:"sg-chip",title:n.sigChipTitle(hn(B,h),ba(B,h)),onClick:()=>{c(S.id),r({type:"popup",id:S.id})},children:[t.jsx("b",{children:S.name}),t.jsxs("i",{children:[B.emoji," ",Ya(B,h)]}),t.jsx("em",{children:ba(B,h)})]},"sg-"+S.id):null}),!ge&&ie.length>12&&t.jsx("button",{type:"button",className:"sg-more",onClick:()=>G(!0),children:n.sigStripMore(ie.length-12)})]})]}),a.dens!=="maxi"&&!I&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),Q("country",n.colCountry),Q("name",n.colCompany),Q("amount",n.colAmount,"h-amt",!0),Q("stage",n.colStage,"h-stade"),Q("signal",n.colSignal,"h-sig"),i.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[Q("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),Q("memo",n.colMemo)]}),i.pipe&&Q("score",n.colScore,"h-sc",!0),t.jsx("span",{}),i.showThumbs&&t.jsx("span",{className:"h-thu",children:n.colThumbs})]}),I?t.jsxs("div",{className:"desk",children:[t.jsxs("div",{className:"desk-list",children:[a.dens==="liste"&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),Q("country",n.colCountry),Q("name",n.colCompany),Q("amount",n.colAmount,"h-amt",!0),Q("stage",n.colStage,"h-stade"),Q("signal",n.colSignal,"h-sig"),t.jsx("span",{})]}),t.jsx("div",{className:rt,children:Xe})]}),t.jsxs("aside",{className:"readpane"+((Me?Je(Me):!u&&we)?" is-edito":""),"aria-label":h==="fr"?"Dossier":"File",children:[we&&t.jsx("button",{type:"button",className:"edito-go pane-edito","aria-pressed":a.focusId===we.id,onClick:()=>r({type:"focus",id:we.id}),children:n.doEdito}),j&&a.focusId===j.id?t.jsx("div",{className:"zoom",children:t.jsx(ds,{})}):i.pipe?t.jsx(Zl,{o:Me}):t.jsx(uo,{o:Me,extra:Me?null:u})]})]}):t.jsx("div",{className:rt,children:Xe}),(()=>{const S=ae||[["pt"+a.ptab,Y]];let B=0,V=0;for(const[ue,ce]of S){V+=ce.length;let xe=a.shown[ue]||C();ce.length-xe<=4&&(xe=ce.length),B+=Math.min(ce.length,xe)}const se=V-B;return se<=0?null:t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>S.forEach(([ue,ce])=>r({type:"more",group:ue,by:ce.length,base:C()})),children:[t.jsx("span",{className:"more-label",children:n.more(se,se)}),t.jsx("span",{className:"more-meta",children:n.moreMeta(B,V)})]})})(),i.showThumbs&&t.jsxs("p",{className:"learn",children:[n.learnLine,t.jsx("button",{type:"button",onClick:()=>r({type:"modal",modal:"crit"}),children:n.learnLink})]}),(l.kept>0||l.dropped>0)&&t.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:n.session(l.kept,l.dropped)}}),I&&v==="ops"&&a.dens!=="maxi"&&t.jsx(Wl,{on:!!ae,rev:(ae||[]).map(([S,B])=>S+B.length).join("|")})]})}function wr(e){let a=e==null?"":String(e);return/^[=+\-@\t]/.test(a)&&(a=`'${a}`),/[";\n\r]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}function od(e,a){const r=ui(e);return a[{retenu:1,ana:2,pending:3,valide:4,ecarte:5}[r]??1]||""}function id(e,a){const n=[a.head.split("|").map(wr).join(";")];for(const i of e){const o=a.stageOf(i);n.push([i.name||"",od(i,a.plabels),ea(i)||i.verdict||"",typeof i.score=="number"?i.score:"",i.countryLabel||i.cc||"",i.sector||"",o?a.stageLabel(o.stage):"",i.contactName||"",i.contactEmail||"",i.memoUrl||"",(i.date||"").slice(0,10),(i.reasoning||"").replace(/\s+/g," ").trim().slice(0,280)].map(wr).join(";"))}return`\uFEFF${n.join(`\r
`)}`}function sd(e){const a=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=`cibles_vue_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(n),n.click(),window.setTimeout(()=>{URL.revokeObjectURL(r);try{document.body.removeChild(n)}catch{}},400)}const ld=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function tt({k:e,v:a}){return a==null||a===""?null:t.jsxs("div",{className:"dsl",children:[t.jsx("span",{children:e}),t.jsx("b",{children:String(a)})]})}function dd({o:e,qa:a}){const{t:r,lang:n,fund:i}=_(),o=(e.cribleStatus||"").trim().toUpperCase()||(ea(e)==="NO MATCH"?"NO MATCH":"MATCH"),s=pt(e),d=(a==null?void 0:a.blocs)||{},c=[[r.qaVP,d.value_prop],[r.qaProduct,d.produit],[r.qaModel,d.modele],[r.qaSummary,d.synthese]];return t.jsxs("article",{className:"dspage",children:[t.jsxs("header",{className:"dsh",children:[t.jsxs("div",{children:[t.jsx("b",{children:e.name}),e.tagline&&t.jsx("p",{children:e.tagline})]}),t.jsxs("span",{className:"dsv"+(o==="NO MATCH"?" out":""),children:[o==="NO MATCH"?r.vOut:r.vKept,s&&t.jsx("em",{children:s})]})]}),e.reasoning&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsWhy}),t.jsx("p",{className:"dstxt",children:e.reasoning})]}),t.jsxs("section",{className:"dsgrid",children:[t.jsx(tt,{k:r.cdSector,v:e.sector}),t.jsx(tt,{k:r.cdStage,v:e.stage}),t.jsx(tt,{k:r.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(tt,{k:r.cdSite,v:e.domain||e.website}),t.jsx(tt,{k:r.cdName,v:e.contactName}),t.jsx(tt,{k:r.cdEmail,v:e.contactEmail}),t.jsx(tt,{k:r.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(tt,{k:r.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(tt,{k:r.cdAngle,v:e.angle}),t.jsx(tt,{k:r.cdDetected,v:ld(e.date,n)})]}),c.some(([,h])=>h)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsAnalysis}),c.filter(([,h])=>h).map(([h,l])=>t.jsxs("div",{className:"dsb",children:[t.jsx("span",{children:h}),t.jsx("p",{children:l})]},h))]}),(e.ceoStatus||e.ceoNote)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsDecision}),e.ceoStatus&&t.jsx("p",{className:"dstxt",children:t.jsx("b",{children:e.ceoStatus})}),e.ceoNote&&t.jsxs("p",{className:"dstxt",children:["« ",e.ceoNote," »"]})]}),t.jsx("footer",{className:"dsf",children:r.dsFoot(i)})]})}function cd(){const{t:e,lang:a,token:r,scoped:n,fund:i,data:o,dispatch:s}=_(),[d,c]=m.useState({}),h=25,l=m.useMemo(()=>n.slice(0,h),[n]);m.useEffect(()=>{l.length&&mi(r,l.map(v=>v.name)).then(c)},[r,l]);const x=o.stats,p=v=>v.toLocaleString(a==="en"?"en-US":"fr-FR");return t.jsxs("div",{className:"dossier",children:[t.jsxs("div",{className:"dsbar",children:[t.jsx("b",{children:e.dsTitle(l.length)}),n.length>h&&t.jsx("span",{className:"mnote dim",children:e.dsCap(h,n.length)}),t.jsx("span",{className:"dssp"}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{s({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)},children:e.printBtn})]}),t.jsxs("div",{className:"dscover",children:[t.jsx("b",{children:i}),x&&typeof x.screened=="number"&&t.jsxs("p",{children:[p(x.screened)," ",e.funScreened(""),typeof x.kept=="number"&&t.jsxs(t.Fragment,{children:[" · ",p(x.kept)," ",e.covKept]}),typeof o.marketEstimate=="number"&&o.marketEstimate>0&&t.jsxs(t.Fragment,{children:[" · ",e.covOf(p(o.marketEstimate)),", ",Math.round(x.screened/o.marketEstimate*100)," %"]})]})]}),l.map(v=>t.jsx(dd,{o:v,qa:d[v.name]},v.id)),!l.length&&t.jsx("p",{className:"mnote",children:e.dsEmpty})]})}const pd=50;function En({label:e,onPreview:a,onTest:r,readOnly:n}){const{t:i}=_(),[o,s]=m.useState(null),[d,c]=m.useState(!1),[h,l]=m.useState(""),[x,p]=m.useState(0),[v,u]=m.useState(""),[b,y]=m.useState(!1),f=m.useRef(null);m.useEffect(()=>()=>{f.current&&window.clearInterval(f.current)},[]);const j=async k=>{c(!0),l("");const N=await a();if(c(!1),N.ok){s(N);return}if(N.busy){l(i.alertPreviewBusy);return}if(!k){l(i.alertPreviewFail);return}p(pd),f.current=window.setInterval(()=>{p(T=>T>1?T-1:(f.current&&window.clearInterval(f.current),j(!1),0))},1e3)},C=async()=>{if(n||b)return;y(!0),u("");const k=await r();y(!1),u(k.ok?i.alertTestOk(k.sentTo||""):k.error||i.actErr)};return t.jsxs("div",{className:"mailp",children:[t.jsxs("div",{className:"mailp-row",children:[t.jsx("button",{type:"button",className:"abtn",disabled:d||x>0,onClick:()=>{j(!0)},children:d?"…":e}),t.jsx("button",{type:"button",className:"abtn",disabled:n||b,onClick:()=>{C()},children:b?"…":i.alertTest})]}),x>0&&t.jsx("p",{className:"mnote",children:i.alertPreviewRetry(x)}),h&&t.jsx("p",{className:"mnote warn",children:h}),v&&t.jsx("p",{className:"mnote",children:v}),!v&&t.jsx("p",{className:"mnote dim",children:i.alertTestHint}),(o==null?void 0:o.ok)&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mnote",children:[t.jsx("b",{children:i.alertSubject})," ",o.subject]}),o.pending===0&&t.jsx("p",{className:"mnote warn",children:i.alertPreviewEmpty}),t.jsx("iframe",{className:"mailp-frame",sandbox:"",srcDoc:o.html,title:e})]})]})}const Mt="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function Ie({title:e,icon:a,children:r,wide:n}){const{dispatch:i}=_();return Pt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:o=>{o.target===o.currentTarget&&i({type:"modal",modal:null})},children:t.jsxs("div",{className:"mcard",style:n?{width:"min(760px,100%)"}:void 0,children:[t.jsxs("div",{className:"mh",children:[a&&t.jsx("span",{className:"no g",children:a}),t.jsx("h2",{children:e}),t.jsx("button",{type:"button",className:"x",onClick:()=>i({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"mb",children:r})]})})}),document.body)}function ud(){const{st:e}=_();switch(e.modal){case"chain":return t.jsx(fd,{});case"space":return t.jsx(xd,{});case"alert":return t.jsx(hd,{});case"queue":return t.jsx(wd,{});case"export":return t.jsx(kd,{});case"plug":return t.jsx(Sd,{});case"recharge":return t.jsx(Cd,{});case"cover":return t.jsx(Ad,{});case"dossier":return t.jsx(zd,{});case"crit":return t.jsx(Td,{});case"tuto":return t.jsx(Ld,{});case"rdv":return t.jsx(md,{});case"memoalert":return t.jsx(jd,{});default:return null}}function md(){const{dispatch:e,fund:a,t:r}=_(),n=a||r.rdvCoFallback;return Pt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:()=>e({type:"modal",modal:null}),children:t.jsxs("div",{className:"mcard rdvcard",onClick:i=>i.stopPropagation(),children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"no g",children:"📅"}),t.jsx("h2",{children:r.rdvHeading}),t.jsx("button",{type:"button",className:"x",onClick:()=>e({type:"modal",modal:null}),children:"×"})]}),t.jsxs("div",{className:"mb",children:[t.jsxs("p",{className:"mnote",children:[r.rdvSubBefore,t.jsx("a",{href:Pr,children:vn}),r.rdvSubMid,t.jsx("a",{href:`mailto:${wa}`,children:wa})]}),t.jsx("div",{className:"rdv-unlocks",children:r.rdvUnlocks(n).map(([i,o],s)=>t.jsxs("div",{className:"rdv-u",children:[t.jsx("em",{children:r.rdvUnlockLabel(s+1)}),t.jsx("b",{children:i}),t.jsx("span",{children:o})]},i))}),t.jsx("div",{className:"rdv-emb",children:t.jsx(Pi,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0})})]})]})})}),document.body)}function fd(){const{st:e,dispatch:a,byId:r,t:n,lang:i,mode:o,askEvaluate:s,evalBusy:d,caps:c,memoQueued:h,doAnalyse:l}=_(),x=o==="client",p=e.chain.queue.map(y=>r.get(y)).filter(y=>!!y),v=e.chain.idx,u=p[v],b=v>=p.length;return Pt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",children:t.jsxs("div",{className:"fcard",children:[t.jsxs("div",{className:"fh",children:[t.jsx("span",{className:"c",children:b?n.finished:`${v+1} / ${p.length}`}),t.jsx("span",{className:"p",children:t.jsx("i",{style:{width:(b?100:v/Math.max(1,p.length)*100)+"%"}})}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"fb",children:b||!u?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🏁"}),t.jsx("div",{className:"t",children:n.chainDone}),t.jsx("div",{className:"s",children:n.chainDoneSub(p.length)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:u.name}),t.jsx("div",{className:"sub",children:[Dt(u.cc,i)||u.countryLabel,u.sector,u.stage,n.daysAgo(st(u.date))].filter(Boolean).map(y=>String(y).toUpperCase()).join(" · ")}),t.jsxs("div",{className:"tags",children:[t.jsx("span",{className:"hi",children:_e(u.engine,i).toUpperCase()}),typeof u.amountEur=="number"&&u.amountEur>0&&t.jsx("span",{children:It(u.amountEur,i)})]}),Te(u)&&t.jsxs("div",{style:{marginBottom:12},children:[t.jsx(St,{o:u,lg:!0})," ",t.jsx(La,{o:u,src:!0})]}),(u.tagline||u.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:u.tagline||u.headline})]}),u.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.memo}),t.jsx("p",{className:"memo",children:u.reasoning})]}),x&&De(u)&&t.jsxs("div",{className:"vbox",style:{"--c":yt(u)==="retenu"?"var(--brand)":yt(u)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[t.jsx("span",{className:"vt",children:yt(u)==="retenu"?"✓ "+n.kept:yt(u)==="pending"?"📞 "+n.pending:"✗ "+n.dropped}),t.jsx("span",{className:"vd",children:u.reasoning||""})]})]})}),t.jsxs("div",{className:"ff",children:[!b&&u&&c.pipe&&ze(u)===1&&!h.has(u.id)?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{l(u),a({type:"chainNext"})},children:[t.jsx("span",{className:"fill"}),n.chainMemoGo]}):!b&&u&&!(x&&De(u))&&(u.noCo&&u.url?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{var y;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:u.url}}))}catch{}a({type:"modal",modal:null}),(y=document.querySelector(".atl2 .demand"))==null||y.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rowExtract]}):t.jsxs("button",{type:"button",className:"evalbtn"+(d?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:d,onClick:()=>{s(u)},children:[t.jsx("span",{className:"fill"}),n.launchEval]})),t.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(b?{type:"modal",modal:null}:{type:"chainNext"}),children:b?n.closeBtn:n.skip})]})]})})}),document.body)}function xd(){const{st:e,dispatch:a,dossiers:r,t:n,mode:i}=_(),o=i==="client",s=m.useMemo(()=>o?r.filter(x=>De(x)):[],[r,o]),d=m.useMemo(()=>gn(s.filter(x=>yt(x)==="retenu"),{key:"signal",dir:-1}),[s]),c=m.useMemo(()=>s.filter(x=>yt(x)==="ecarte"),[s]),h=e.spaceTab==="retenu"?d:c,l=e.spaceTab==="retenu"?"var(--brand)":"var(--red)";return t.jsxs(Ie,{title:n.spaceTitle,children:[t.jsxs("div",{className:"sp-tabs",children:[t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":e.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",n.statusKeep.replace("✅ ","")," ",t.jsx("b",{children:d.length})]}),t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":e.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",n.statusDrop.replace("❌ ","")," ",t.jsx("b",{children:c.length})]})]}),h.length===0&&t.jsx("div",{className:"sp-empty",children:n.spEmpty}),h.slice(0,40).map(x=>t.jsxs("div",{className:"sp-row",children:[t.jsx("span",{className:"sc",style:{"--c":l},children:typeof x.score=="number"&&x.score>0?x.score:"—"}),t.jsxs("span",{children:[t.jsx("div",{className:"nm",children:x.name}),t.jsx("div",{className:"rr",children:x.reasoning||x.tagline||""})]})]},x.id)),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:n.spNote}})]})}function hd(){const{mode:e}=_();return e==="client"||e==="apercu"?t.jsx(gd,{}):t.jsx(yd,{})}function gd(){const{t:e,token:a,flash:r,flashErr:n,mode:i}=_(),[o,s]=m.useState("d"),d=i!=="client";return t.jsxs(Ie,{title:e.alertTitle,icon:"🔔",children:[t.jsxs("div",{className:"ntabs",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":o==="d",className:o==="d"?"on":"",onClick:()=>s("d"),children:e.alertTabDaily}),t.jsx("button",{type:"button",role:"tab","aria-selected":o==="w",className:o==="w"?"on":"",onClick:()=>s("w"),children:e.alertTabWeekly}),t.jsx("button",{type:"button",role:"tab","aria-selected":o==="m",className:o==="m"?"on":"",onClick:()=>s("m"),children:e.alertTabMarket})]}),o==="d"&&t.jsx(bd,{t:e,token:a,readOnly:d,flash:r,flashErr:n}),o==="w"&&t.jsx(vd,{t:e,token:a,readOnly:d,flash:r,flashErr:n}),o==="m"&&t.jsx(mo,{})]})}function bd({t:e,token:a,readOnly:r,flash:n,flashErr:i}){const[o,s]=m.useState(null),[d,c]=m.useState(!1),[h,l]=m.useState(0);m.useEffect(()=>{let u=!0;return c(!1),In(a).then(b=>{u&&(b?s(b):c(!0))}),()=>{u=!1}},[a,h]);const x=u=>{r||In(a,u).then(b=>{if(!b){i(e.actErr);return}s(b),b.throttled?i(e.alertThrottled):n(e.alertSaved)})};if(d)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>l(u=>u+1),children:e.retry})]});if(!o)return t.jsx("div",{className:"sp-empty",children:"…"});const p=u=>!o.sections||o.sections.includes(u),v=u=>{const b=o.sections||e.alertSec.map(([y])=>y);x({sections:p(u)?b.filter(y=>y!==u):[...b,u]})};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qrow",children:[t.jsxs("span",{children:[t.jsx("b",{children:e.alertDaily}),t.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:e.alertDailyHint})]}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":o.enabled===!0,disabled:r,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>x({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertHour}),t.jsxs("span",{className:"qset",children:[t.jsx("button",{type:"button",onClick:()=>x({hour:Math.max(6,(o.hour??7)-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[o.hour??7," h"]}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.min(21,(o.hour??7)+1)}),disabled:r,children:"＋"})]})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertDays}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("button",{type:"button",className:"abtn",disabled:r,style:o.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>x({days:"weekdays"}),children:e.alertWeekdays}),t.jsx("button",{type:"button",className:"abtn",disabled:r,style:o.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>x({days:"daily"}),children:e.alertEveryday})]})]}),t.jsx("div",{className:"qsec ok",children:e.alertSections}),t.jsx("div",{className:"secl",children:e.alertSec.map(([u,b])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:p(u),disabled:r,onChange:()=>v(u)}),t.jsxs("span",{children:[b,u==="market"&&t.jsxs("i",{children:[" ",e.alertSecSlow]})]})]},u))}),t.jsx("p",{className:"mnote dim",children:e.alertSecNote}),t.jsx(En,{label:e.alertPreview,readOnly:r,onPreview:()=>ji(a),onTest:()=>ki(a)}),o.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),o.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${e.updatedAt(o.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function vd({t:e,token:a,readOnly:r,flash:n,flashErr:i}){const[o,s]=m.useState(null),[d,c]=m.useState(!1),[h,l]=m.useState(0);m.useEffect(()=>{let u=!0;return c(!1),Bn(a).then(b=>{u&&(b?s(b):c(!0))}),()=>{u=!1}},[a,h]);const x=u=>{r||Bn(a,u).then(b=>{if(!b){i(e.actErr);return}s(b),n(e.alertSaved)})};if(d)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>l(u=>u+1),children:e.retry})]});if(!o)return t.jsx("div",{className:"sp-empty",children:"…"});const p=o.dow??0,v=o.hour??16;return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"lead2",children:e.alertWeeklySub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.alertWeeklyOn})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":o.enabled===!0,disabled:r,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>x({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertWeeklyWhen}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("select",{value:p,disabled:r,onChange:u=>x({dow:Number(u.target.value)}),children:e.alertDow.map((u,b)=>t.jsx("option",{value:b,children:u},u))}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.max(6,v-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[v," h"]}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.min(21,v+1)}),disabled:r,children:"＋"})]})]}),t.jsx(En,{label:e.alertPreviewWeekly,readOnly:r,onPreview:()=>Si(a),onTest:()=>Ni(a)}),o.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),o.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${e.updatedAt(o.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function mo(){const{st:e,t:a,lang:r,scoped:n,contName:i,email:o}=_(),[s,d]=m.useState(o||""),[c,h]=m.useState(!1),[l,x]=m.useState(!1);m.useEffect(()=>{o&&d(o)},[o]);const p=e.filters,v=m.useMemo(()=>n.filter(f=>Te(f)).length,[n]),u=p.win==="1"?0:p.win==="7"?1:p.win==="30"?2:3,b=async()=>{if(!(!/.+@.+\..+/.test(s)||l)){x(!0);try{await fetch(`${un}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.trim(),sectors:p.sector,countries:p.country,source:o?"atelier2-client":"atelier2",website:""})}),h(!0)}finally{x(!1)}}},y=[[a.amRows.continent,i],[a.amRows.since,a.amSince[u]],[a.amRows.signal,p.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,p.engine.length?p.engine.map(f=>_e(f,r)).join(", "):a.amAllEngines],[a.amRows.sectors,p.sector.length?p.sector.join(", "):a.amAllSectors],[a.amRows.countries,p.country.length?p.country.map(f=>Dt(f,r)||f).join(", "):a.amAllCountries],[a.amRows.stages,p.stage.length?p.stage.join(", "):a.amAllStages]];return c?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🔔"}),t.jsx("div",{className:"t",children:a.amOk}),t.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(s)}})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"crit",children:y.map(([f,j])=>t.jsxs("div",{className:"r",children:[t.jsx("span",{className:"k",children:f}),t.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:j}})]},f))}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:s,readOnly:!!o,onChange:f=>d(f.target.value),onKeyDown:f=>{f.key==="Enter"&&b()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(l?" loading":""),style:{padding:"12px 18px"},onClick:()=>void b(),children:[t.jsx("span",{className:"fill"}),a.amActivate]})]}),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(n.length,v)}}),t.jsx("p",{className:"mnote",children:a.amHonest})]})}function yd(){const{t:e}=_();return t.jsx(Ie,{title:e.alertTitle,icon:"🔔",children:t.jsx(mo,{})})}function wd(){var q,z;const{t:e,token:a,fund:r,mode:n,dossiers:i,doAnalyse:o,memoQueued:s,caps:d,dispatch:c,liveMemos:h}=_(),[l,x]=m.useState(null),[p,v]=m.useState([]),[u,b]=m.useState(0),y=n==="client",f=m.useMemo(()=>{const E=new Map;return i.forEach(P=>{const I=(P.name||"").trim().toLowerCase();I&&!E.has(I)&&E.set(I,P)}),E},[i]);m.useEffect(()=>{let E=!0;return(async()=>{const[P,I]=await Promise.all([fn(r),Cr(a)]);E&&(P&&x(P),v(I))})(),()=>{E=!1}},[a,r,u]);const j=(l==null?void 0:l.per_day)??0,C=((q=l==null?void 0:l.analyzed_today)==null?void 0:q.length)??0,k=l==null?void 0:l.offre,N=(l==null?void 0:l.pool_meta)||[],T=m.useMemo(()=>{const E=new Map;for(const P of(l==null?void 0:l.scheduled)||[])for(const I of P.names||[])E.has(I)||E.set(I,{label:P.day_label,date:P.date});return E},[l==null?void 0:l.scheduled]),A=(l==null?void 0:l.in_progress)||[];return t.jsxs(Ie,{title:e.queueTitle,wide:!0,children:[k&&t.jsxs("div",{className:"qoffre"+(k.en_retard?" late":""),children:[t.jsx("span",{className:"ol",children:e.qOffer}),t.jsx("b",{children:k.libelle}),t.jsxs("span",{className:"od",children:[e.qDelay," ",t.jsx("b",{children:k.delai})]}),t.jsx("span",{className:"osp"}),k.rythme>0?t.jsx("span",{className:"or",children:e.qRate(k.rythme)}):k.manuel_par_jour?t.jsx("span",{className:"or",children:e.qManual(k.manuel_par_jour)}):t.jsx("span",{className:"or dim",children:e.qPaused})]}),t.jsxs("div",{className:"qbox",children:[t.jsx("div",{className:"qhead",children:t.jsx("b",{dangerouslySetInnerHTML:{__html:e.queueDone(C,C+(((z=l==null?void 0:l.pool_order)==null?void 0:z.length)??0))}})}),k&&t.jsxs("div",{className:"qeta",children:[k.file===0?e.qEtaDone:k.rythme<=0?e.qEtaPaused:e.qEta(k.file,k.rythme,k.jours_restants),k.en_retard&&t.jsxs("em",{children:[" ",e.qLate(k.delai,k.plafond)]})]}),t.jsxs("div",{className:"qrate",children:[e.covRate," — ",t.jsx("b",{children:e.covRateNow(j)}),(k==null?void 0:k.reglage_manuel)&&t.jsxs("span",{className:"dim",children:[" · ",e.qManualSet]})]})]}),(A.length>0||h.items.some(E=>E.status==="boot"||E.status==="running"))&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec run",children:["⌛ ",e.qRunning]}),t.jsxs("div",{className:"qrows",children:[h.items.filter(E=>E.status==="boot"||E.status==="running"||E.status==="error").map(E=>t.jsxs("div",{className:"qr2 qfl",children:[t.jsx("b",{children:E.name}),t.jsx("span",{className:"qd",children:E.memoType||""}),t.jsx(Gt,{item:E,serverOff:h.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd})]},"live-"+E.name)),A.filter(E=>!h.liveOf(E.name)).map(E=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:E.name}),t.jsxs("span",{className:"qd",children:[E.memo_type||"",E.age_min?` · ${Math.round(E.age_min)} min`:""]}),t.jsx("span",{className:"qt",children:E.state||""})]},"ip-"+E.name))]})]}),p.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec ok",children:["⏳ ",e.queueToday]}),t.jsx("div",{className:"qrows",children:p.map(E=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:E.company}),t.jsxs("span",{className:"qd",children:[E.memo_type,typeof E.est_min=="number"?` · ~${E.est_min} min`:""]}),t.jsx("span",{className:"qt",children:E.status}),E.url&&t.jsx("a",{className:"qgo",href:E.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.actMemo}),y&&E.status==="error"&&t.jsx("button",{type:"button",className:"qgo an",onClick:()=>{Dn(a,E.company,"retry").then(()=>b(P=>P+1))},children:e.queueRetry}),y&&E.status!=="done"&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{Dn(a,E.company,"delete").then(()=>b(P=>P+1))},children:e.queueDelete})]},E.company))})]}),t.jsxs("div",{className:"qsec todo",children:["⚡ ",e.qUpNext(N.length)]}),t.jsx("div",{className:"qhedge",children:e.qHedge}),t.jsxs("div",{className:"qrows qfile",children:[N.length===0&&t.jsx("div",{className:"sp-empty",children:e.queueEmpty}),N.map((E,P)=>{const I=T.get(E.name),R=f.get((E.name||"").trim().toLowerCase()),D=h.liveOf(E.name),g=!!(R&&s.has(R.id))||!!(D&&(D.status==="boot"||D.status==="running")),L=!!(R&&ze(R)===1&&!R.memoUrl)&&!D;return t.jsxs("div",{className:"qr2 qfl",children:[t.jsxs("span",{className:"qn2",children:["#",P+1]}),I?t.jsx("span",{className:"qwhen"+(I.label==="demain"?" soon":""),children:I.label}):t.jsx("span",{className:"qwhen later",children:e.qLater}),t.jsx("b",{children:E.name}),E.fresh&&t.jsx("span",{className:"qfresh",children:e.qFresh}),typeof E.score=="number"&&t.jsx("span",{className:"qs2",children:E.score}),D&&(D.status==="boot"||D.status==="running")&&t.jsx(Gt,{item:D,serverOff:h.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),L&&(d.lockActions||!y?t.jsx("button",{type:"button",className:"qgo an",onClick:()=>c({type:"modal",modal:"rdv"}),children:e.actLocked}):t.jsx("button",{type:"button",className:"qgo an",disabled:g,onClick:()=>{o(R),b(W=>W+1)},children:g?e.actAnalyseQueued:e.actAnalyse})),E.excerpt&&t.jsx("span",{className:"qex",children:E.excerpt})]},E.name+":"+P)})]}),t.jsxs("div",{className:"qsec",children:["🧭 ",e.qVerdictsT]}),t.jsx("ul",{className:"qverd",children:e.qVerdicts.map(([E,P])=>t.jsxs("li",{children:[t.jsx("b",{children:E})," — ",P]},E))})]})}function kd(){const{t:e,token:a,flash:r,scoped:n,caps:i,stageOf:o,dispatch:s}=_(),d=`${Mt}/cibles/list.csv?token=${a}`,c=`${Mt}/cibles/list.json?token=${a}`,h=`${Mt}/cibles/export.xlsx?token=${a}&scope=full`,l=`=IMPORTDATA("${d}")`,x=y=>{var f;(f=navigator.clipboard)==null||f.writeText(y).then(()=>r(e.exportCopied))},p=[{def:e.exportCsv,value:d,href:d},{def:e.exportSheet,value:l},{def:e.exportLive,value:c,href:c},{def:e.exportXlsx,value:h,href:h}],v=!i.lockActions&&n.length>0,u=()=>{sd(id(n,{plabels:e.plabels,head:e.exportViewHead,stageOf:o,stageLabel:y=>(e.stg.find(([f])=>f===y)||["",""])[1]})),r(e.exportViewDone(n.length))},b=()=>{s({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)};return t.jsxs(Ie,{title:e.exportTitle,icon:"📥",children:[t.jsx("p",{className:"lead2",children:e.exportLead}),v&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🖨️"}),t.jsxs("div",{children:[t.jsx("b",{children:e.printTitle}),t.jsx("p",{children:e.printDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb",onClick:b,children:e.printBtn})]})}),v&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🗂"}),t.jsxs("div",{children:[t.jsx("b",{children:e.dsBtn}),t.jsx("p",{children:e.dsHint})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>s({type:"modal",modal:"dossier"}),children:e.exportViewBtn})]})}),v&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"📄"}),t.jsxs("div",{children:[t.jsx("b",{children:e.exportViewTitle}),t.jsx("p",{children:e.exportViewDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb pri",onClick:u,children:e.exportViewBtn})]})}),t.jsx("div",{className:"expl",children:p.map(({def:y,value:f,href:j})=>t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:y[0]}),t.jsxs("div",{children:[t.jsx("b",{children:y[1]}),t.jsx("p",{children:y[2]})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>x(f),children:e.exportCopy}),j&&t.jsx("a",{className:"exb",href:j,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.exportOpen})]},y[1]))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.exportKeyWarning})]})}function jd(){const{t:e,token:a,flash:r,flashErr:n,mode:i}=_(),o=i!=="client",[s,d]=m.useState(null),[c,h]=m.useState(!1),[l,x]=m.useState(0),[p,v]=m.useState(!1);m.useEffect(()=>{let f=!0;return h(!1),Pn(a).then(j=>{f&&(j?d(j):h(!0))}),()=>{f=!1}},[a,l]);const u=()=>(s==null?void 0:s.sections)||{swot:!0,action:!0,synergies:!0,quadrant:!0,verdict:!0},b=f=>{if(o||!s)return;const j={enabled:f.enabled??!!s.enabled,email:f.email??(s.email||""),sections:f.sections??u()};v(!0),Pn(a,j).then(C=>{if(v(!1),!C){n(e.memoAlertErr);return}d(C),r(e.memoAlertSaved)})};if(c)return t.jsx(Ie,{title:e.memoAlertTitle,icon:"🔔",children:t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>x(f=>f+1),children:e.retry})]})});if(!s)return t.jsx(Ie,{title:e.memoAlertTitle,icon:"🔔",children:t.jsx("div",{className:"sp-empty",children:"…"})});const y=u();return t.jsxs(Ie,{title:e.memoAlertTitle,icon:"🔔",children:[t.jsx("p",{className:"lead2",children:e.memoAlertSub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.memoAlertToggle})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":s.enabled===!0,disabled:o||p,style:s.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>b({enabled:!s.enabled}),children:s.enabled?"ON":"OFF"})})]}),t.jsx(Nd,{value:s.email||"",readOnly:o||p,label:e.memoAlertEmail,okLabel:e.csNoteOk,onSave:f=>b({email:f})}),t.jsx("div",{className:"qsec ok",children:e.memoAlertSections}),t.jsx("div",{className:"secl",children:e.memoAlertSec.map(([f,j])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:!!y[f],disabled:o||p,onChange:()=>b({sections:{...y,[f]:!y[f]}})}),t.jsx("span",{children:j})]},f))}),t.jsx(En,{label:e.memoAlertPreview,readOnly:o,onPreview:()=>xi(a,y),onTest:()=>fi(a,y)})]})}function Nd({value:e,readOnly:a,label:r,okLabel:n,onSave:i}){const[o,s]=m.useState(e);m.useEffect(()=>{s(e)},[e]);const d=o.trim()!==e.trim(),c=!o.trim()||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(o.trim());return t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:r}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("input",{type:"email",className:"mailin",value:o,disabled:a,onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&d&&c&&i(o.trim())}}),t.jsx("button",{type:"button",className:"abtn",disabled:a||!d||!c,onClick:()=>i(o.trim()),children:n})]})]})}function Sd(){const{t:e,token:a,flash:r,flashErr:n,canWrite:i}=_(),[o,s]=m.useState(null),[d,c]=m.useState(!1),[h,l]=m.useState(null),[x,p]=m.useState(""),[v,u]=m.useState(0);m.useEffect(()=>{let C=!0;return c(!1),Ga(a).then(k=>{C&&(k?s({configured:k.configured,url_hint:k.url_hint}):c(!0))}),bi(a).then(k=>{C&&l(k)}),()=>{C=!1}},[a,v]);const b=(C,k)=>{i&&Ga(a,C).then(N=>{if(!N||N.ok===!1){n(e.actErr);return}C.test&&N.sent===!1?n(e.plugTestThrottled):r(k),u(T=>T+1)})},y='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}',f=JSON.stringify({event:"status",company:"Aitona",status:"Validée",note:"très bon fit — introduction chaude possible",score:90,website:"https://aitona.com",memo_url:"https://analysis.proplace.co/…"},null,2),j=`curl -X POST ${Mt}/cibles/evaluate \\
  -H "Content-Type: application/json" \\
  -d '{"token":"${a}","q":"nom ou URL de la société"}'`;return t.jsxs(Ie,{title:e.plugTitle,icon:"🔌",wide:!0,children:[h&&t.jsx("p",{className:"mnote"+(h.enabled?" warn":""),children:h.enabled?e.plugAutoOn(h.destination||"webhook"):e.plugAutoOff}),d?t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>u(C=>C+1),children:e.retry})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugCrm}),t.jsx("p",{className:"mnote",children:e.plugCrmHint}),t.jsxs("ol",{className:"plughow",children:[t.jsx("li",{children:e.plugHow1}),t.jsx("li",{children:e.plugHow2}),t.jsx("li",{children:e.plugHow3})]}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"url",maxLength:500,placeholder:e.plugUrlPh,value:x,disabled:!i,onChange:C=>p(C.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:!i||!x.trim(),onClick:()=>b({url:x.trim()},e.plugSaved),children:e.plugSave})]}),(o==null?void 0:o.configured)&&t.jsxs("p",{className:"mnote",children:["✓ ",o.url_hint||""," ",t.jsx("button",{type:"button",className:"lk",disabled:!i,onClick:()=>b({test:!0},e.plugTested),children:e.plugTest})," · ",t.jsx("button",{type:"button",className:"lk",disabled:!i,onClick:()=>b({remove:!0},e.plugRemoved),children:e.plugRemove})]}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugExT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:f}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var C;(C=navigator.clipboard)==null||C.writeText(f).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugExResult})]}),t.jsx(Ed,{}),t.jsx("div",{className:"qsec ok",children:e.plugApiT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:j}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var C;(C=navigator.clipboard)==null||C.writeText(j).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote dim",children:e.plugQuota}),t.jsx("div",{className:"qsec ok",children:e.plugMcp}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:y}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var C;(C=navigator.clipboard)==null||C.writeText(y).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugFeeds}),t.jsx("p",{className:"mnote warn",children:e.plugTokenNote}),t.jsx("p",{className:"mnote dim",children:t.jsx("a",{href:"https://proplace.co/api/",target:"_blank",rel:"noopener noreferrer",children:e.plugDoc})})]})]})}function Ed(){const{t:e,token:a,lang:r}=_(),[n,i]=m.useState("valides"),[o,s]=m.useState(!1),[d,c]=m.useState(null),[h,l]=m.useState(null),[x,p]=m.useState(!1),[v,u]=m.useState(!1),[b,y]=m.useState(null),[f,j]=m.useState(null),[C,k]=m.useState(null),N=`atl2:bulk:${a}:${n}`;m.useEffect(()=>{Ga(a).then(I=>{j(I&&I.configured?I.url_hint||"webhook":null)})},[a]),m.useEffect(()=>{c(null),l(null),p(!1),y(null);try{const I=JSON.parse(localStorage.getItem(N)||"null");k(I&&Date.now()-Date.parse(I.t)<24*3600*1e3?I:null)}catch{k(null)}},[N]);const T=async()=>{s(!0),p(!1),y(null);const I=await yi(a,n);c(I),l(I.ok?n:null),s(!1)},A=m.useRef(!1),q=async()=>{if(A.current)return;A.current=!0,u(!0);const I=`${a}:${n}:${Date.now()}:${Math.random().toString(36).slice(2,10)}`;let R;try{R=await wi(a,n,"webhook",void 0,I)}finally{A.current=!1}if(u(!1),p(!1),y(R),R.ok&&(R.pushed||0)>0){const D={t:new Date().toISOString(),n:R.pushed||0};k(D);try{localStorage.setItem(N,JSON.stringify(D))}catch{}}},z=d!=null&&d.ok&&d.ready||0,E=!!(d!=null&&d.ok)&&h===n&&z>0&&!!f&&!C,P=C?new Date(C.t).toLocaleString(r==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugBulk}),t.jsx("p",{className:"mnote",children:e.plugBulkHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("select",{value:n,onChange:I=>i(I.target.value),children:e.plugBulkTabs.map(([I,R])=>t.jsx("option",{value:I,children:R},I))}),t.jsx("button",{type:"button",className:"abtn",disabled:o,onClick:()=>{T()},children:o?"…":e.plugBulkPreview})]}),d&&(d.ok?t.jsx("p",{className:"mnote",children:e.plugBulkResult(d.ready||0,d.linkedinReady||0,(d.noContact||[]).length)}):t.jsx("p",{className:"mnote warn",children:e.actErr})),!!(d!=null&&d.ok)&&t.jsx("p",{className:"mnote dim",children:e.bulkScope}),C&&t.jsx("p",{className:"mnote",children:e.bulkLocked(P,C.n)}),!C&&!!(d!=null&&d.ok)&&!f&&t.jsx("p",{className:"mnote warn",children:e.bulkNoDest}),!C&&!d&&t.jsx("p",{className:"mnote dim",children:e.bulkPreviewFirst}),E&&!x&&t.jsx("button",{type:"button",className:"abtn dgr",onClick:()=>p(!0),children:e.bulkArm}),E&&x&&t.jsxs("div",{className:"bulkc",children:[t.jsx("p",{className:"mnote warn",children:e.bulkWarn(z,f||"")}),t.jsx("button",{type:"button",className:"abtn dgr",disabled:v,onClick:()=>{q()},children:v?e.bulkSending:e.bulkConfirm(f||"")}),t.jsx("button",{type:"button",className:"abtn",disabled:v,onClick:()=>p(!1),children:e.bulkCancel})]}),b&&(b.ok?b.replayed?t.jsx("p",{className:"mnote",children:b.pending?e.bulkPending:e.bulkReplayed}):(b.pushed||0)>0?t.jsx("p",{className:"mnote",children:e.bulkDone(b.pushed||0,b.linkedinReady||0,b.skippedNoEmail||0)}):t.jsx("p",{className:"mnote warn",children:e.bulkNone}):t.jsx("p",{className:"mnote warn",children:b.error||e.actErr}))]})}function Cd(){const{t:e,data:a,lang:r}=_(),n=a.credits,i=a.email,o=async s=>{if(!i)return;const d=window.location.href.split("?")[0];try{const h=await(await fetch(`${un}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,lookup_key:s,success_url:d+"?credits=ok",cancel_url:d+"?credits=cancel"})})).json();h.url&&(window.location.href=h.url)}catch{}};return t.jsxs(Ie,{title:e.rechargeTitle,icon:"⚡",children:[n&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:e.rechargeHint(n.daily_grant)}}),n.costs&&t.jsxs("p",{className:"mnote",children:["① ",e.creditsCost(n.costs.instant)," · ② ",e.creditsCost(n.costs.detailed)]}),t.jsx("div",{className:"packs",children:(n.packs||[]).map(s=>t.jsxs("div",{className:"pack",children:[t.jsx("div",{className:"pt",children:e.rechargeUnit(s.credits,s.price_eur)}),t.jsx("button",{type:"button",onClick:()=>{o(s.lookup_key)},children:e.rechargeBuy})]},s.lookup_key))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.rechargeNote})]}),!n&&t.jsx("div",{className:"sp-empty",children:e.creditsNone})]})}function zd(){const{t:e}=_();return t.jsx(Ie,{title:e.dsBtn,icon:"🗂",wide:!0,children:t.jsx(cd,{})})}function Ad(){const{t:e,lang:a,data:r,dossiers:n,token:i,fund:o,canWrite:s,flash:d}=_(),[c,h]=m.useState(null),[l,x]=m.useState(!1);m.useEffect(()=>{let z=!0;if(o)return fn(o).then(E=>{z&&E&&typeof E.per_day=="number"&&h(E.per_day)}),()=>{z=!1}},[o]);const[p,v]=m.useState(null);m.useEffect(()=>{if(!i)return;let z=!0;return gi(i).then(E=>{z&&v(E)}),()=>{z=!1}},[i]);const u=r.stats,b=typeof(u==null?void 0:u.screened)=="number"?u.screened:n.filter(z=>z.kind==="target"&&De(z)).length,y=r.marketEstimate||0,f=y>0?Math.min(100,Math.round(b/y*100)):null,j=(u==null?void 0:u.window_days)||30,C=b>0?b/j:0,k=y>0?Math.max(0,y-b):0,T=y>0&&C>0&&b>=100?Math.round(k/C):null,A=z=>Math.round(z).toLocaleString(a==="en"?"en-US":"fr-FR"),q=z=>{l||!s||(x(!0),vi(i,z).then(E=>{if(x(!1),E===null){d(e.actErr);return}h(E),d(e.alertSaved)}))};return t.jsxs(Ie,{title:e.coverTitle,icon:"🌍",children:[t.jsxs("div",{className:"covg",children:[t.jsx("b",{children:e.covScreened(A(b))}),y>0&&t.jsx("span",{children:e.covOf(A(y))})]}),f!==null?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"covbar",children:[t.jsx("i",{style:{width:f+"%"}}),t.jsxs("em",{children:[f," %"]})]}),T!==null&&t.jsx("p",{className:"mnote",children:e.covEta(T)})]}):t.jsx("p",{className:"mnote dim",children:e.covNoEst}),C>=1&&t.jsx("p",{className:"mnote",children:e.covPace(A(C))}),u&&t.jsxs("div",{className:"covf",children:[typeof u.kept=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:A(u.kept)})," ",e.covKept]}),typeof u.analyzed=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:A(u.analyzed)})," ",e.covAna]}),typeof u.shown=="number"&&u.shown!==u.kept&&t.jsxs("span",{children:[t.jsx("b",{children:A(u.shown)})," ",e.funShown]})]}),(p==null?void 0:p.ok)&&(p.detail||[]).length>0&&t.jsxs("details",{className:"covcalc",children:[t.jsx("summary",{children:e.covHowT}),p.perimetre&&t.jsx("p",{className:"mnote",children:p.perimetre}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"cc",children:e.covColCode}),t.jsx("th",{className:"cn",children:e.covColN}),t.jsx("th",{className:"cs",children:e.covColSource})]})}),t.jsxs("tbody",{children:[(p.detail||[]).map((z,E)=>t.jsxs("tr",{className:z.n?"":"zero",children:[t.jsxs("td",{className:"cc",children:[z.code,z.geo?` · ${z.geo}`:" · FR"]}),t.jsx("td",{className:"cn",children:typeof z.n=="number"?A(z.n):"—"}),t.jsxs("td",{className:"cs",children:[t.jsx("span",{children:z.source}),z.elargi&&t.jsx("em",{children:e.covWide(String(z.demande||""))}),z.erreur&&t.jsx("em",{children:e.covMissing})]})]},E)),t.jsxs("tr",{className:"tot",children:[t.jsx("td",{className:"cc",children:e.covTotal}),t.jsx("td",{className:"cn",children:t.jsx("b",{children:A(p.total||y)})}),t.jsx("td",{className:"cs"})]})]})]}),(p.rejetes||[]).length>0&&t.jsx("p",{className:"mnote dim",children:e.covRejected((p.rejetes||[]).join(", "))}),t.jsxs("p",{className:"mnote dim",children:[(p.sources||[]).join(" · "),p.calcule_le?` — ${e.covComputedAt(p.calcule_le.slice(0,10).split("-").reverse().join("/"))}`:""]})]}),s&&c!==null&&t.jsxs("div",{className:"covr",children:[t.jsxs("div",{className:"covrh",children:[t.jsx("span",{children:e.covRate}),t.jsx("b",{children:e.covRateNow(c)})]}),t.jsx("div",{className:"covrb",children:[0,1,2,3,5,10].map(z=>t.jsx("button",{type:"button",className:c===z?"on":"",disabled:l,onClick:()=>q(z),children:z===0?"⏸":z},z))}),t.jsx("p",{className:"mnote dim",children:e.covRateHint})]})]})}function Td(){var f,j,C;const{t:e,dossiers:a,token:r,mode:n,flash:i,criteria:o,fund:s,lang:d}=_(),c=n==="client",h=m.useMemo(()=>{const k=new Set;return a.forEach(N=>{N.angle&&k.add(N.angle)}),[...k]},[a]),[l,x]=m.useState(""),[p,v]=m.useState(""),[u,b]=m.useState(!1),y=async()=>{const k=l.trim();if(!(!k||u||!c)){b(!0),v("");try{const T=await(await fetch(`${Mt}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r,message:k,who:"atelier2"})})).json().catch(()=>({}));if(T.reply&&v(String(T.reply)),T.job_id){v(e.critChatRunning);const A=async()=>{const q=await fetch(`${Mt}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:T.job_id})}).then(z=>z.json()).catch(()=>null);if(q&&q.done){v(String(q.reply||q.clarification||q.summary||"✓")),b(!1),q.applied&&i(e.alertSaved);return}setTimeout(()=>{A()},8e3)};setTimeout(()=>{A()},8e3),x("");return}x("")}finally{p.startsWith("⏳")||b(!1)}}};return t.jsxs(Ie,{title:e.critTitle,icon:"⚙",wide:!0,children:[(o==null?void 0:o.lead)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critHypTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:o.lead}),!!((f=o.points)!=null&&f.length)&&t.jsx("ul",{className:"critpts",children:o.points.map(k=>t.jsx("li",{children:k},k))}),t.jsx("p",{className:"mnote",children:e.critHypSub})]}),!!((j=o==null?void 0:o.angles)!=null&&j.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critProfilsTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:o.method||e.critProfilsSub}),o.angles.map(k=>{var N,T;return t.jsxs("details",{className:"prof",children:[t.jsx("summary",{children:k.title}),k.why&&t.jsx("p",{className:"why",children:k.why}),t.jsxs("div",{className:"lo",children:[!!((N=k.look)!=null&&N.length)&&t.jsxs("div",{children:[t.jsx("em",{children:e.critLookFor}),t.jsx("ul",{children:k.look.map(A=>t.jsx("li",{children:A},A))})]}),!!((T=k.out)!=null&&T.length)&&t.jsxs("div",{className:"ko",children:[t.jsx("em",{children:e.critRuleOut}),t.jsx("ul",{children:k.out.map(A=>t.jsx("li",{children:A},A))})]})]})]},k.title)})]}),!!((C=o==null?void 0:o.gate)!=null&&C.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critGateTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:e.critGateSub}),o.gate.length===1&&!o.gate[0].k?t.jsx("p",{className:"gate1",children:o.gate[0].t}):t.jsx("ol",{className:"gatesteps",children:o.gate.map(k=>t.jsxs("li",{children:[k.k&&t.jsx("b",{children:k.k}),k.t]},k.t))})]}),h.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critAngles}),t.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:h.map(k=>t.jsx("li",{style:{marginBottom:5},children:k.replace(/[_-]+/g," ")},k))})]}),t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.critChatTitle}),t.jsx("p",{children:e.critChatHint}),t.jsxs("div",{className:"mfield",style:{marginTop:10},children:[t.jsx("input",{placeholder:e.critChatPh,value:l,disabled:!c||u,onChange:k=>x(k.target.value),onKeyDown:k=>{k.key==="Enter"&&y()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(u?" loading":""),style:{padding:"12px 18px"},disabled:!c||u||!l.trim(),onClick:()=>void y(),children:[t.jsx("span",{className:"fill"}),e.critChatSend]})]}),p&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:p})]}),t.jsx("div",{style:{marginBottom:14},children:t.jsx(hi,{fund:s,lang:d,limit:30,compact:!0})}),t.jsx("div",{className:"qsec ok",children:e.qvTitle}),t.jsx("div",{className:"vlist",children:e.qv.map(([k,N])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vd "+(co[k]||"v-cons"),children:k}),t.jsx("span",{children:N})]},k))}),t.jsx("div",{className:"qsec ok",children:e.brTitle}),t.jsx("div",{className:"vlist",children:e.br.map(([k,N])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vtag",children:k}),t.jsxs("span",{children:["← ",N]})]},k))}),t.jsx("p",{className:"mnote",children:e.brNote}),t.jsx("p",{className:"mnote",children:e.critMemoKinds})]})}function Ld(){const{t:e,dispatch:a,startTour:r}=_(),n=i=>{var o,s;a({type:"modal",modal:null}),i==="crit"||i==="plug"||i==="alert"?a({type:"modal",modal:i}):i.startsWith("tab")?a({type:"ptab",tab:Number(i.slice(3))}):i==="eval"&&((o=document.querySelector(".atl2 .demand input"))==null||o.scrollIntoView({block:"center",behavior:"smooth"}),(s=document.querySelector(".atl2 .demand input"))==null||s.focus())};return t.jsxs(Ie,{title:e.tutoTitle,icon:"▶",children:[t.jsxs("div",{className:"howto-go",children:[t.jsx("p",{children:e.tourIntro}),t.jsxs("button",{type:"button",onClick:()=>{a({type:"modal",modal:null}),r()},children:["▶ ",e.tourStart]})]}),t.jsx("ul",{className:"howto",children:e.howto.map(([i,o],s)=>t.jsxs("li",{role:"button",tabIndex:0,onClick:()=>n(o),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),n(o))},children:[t.jsx("span",{className:"n",children:s+1}),t.jsx("span",{dangerouslySetInnerHTML:{__html:i.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}})]},o+s))})]})}const fo="atl2:mapfold",qd=()=>{if(typeof window>"u")return!1;try{const e=localStorage.getItem(fo);if(e==="on")return!0;if(e==="off")return!1}catch{}try{const e=new URLSearchParams(window.location.search);if(e.get("embed")==="1"&&(e.get("source")||"").toLowerCase()==="ops")return!0}catch{}return window.innerHeight<1e3},Md=()=>{if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search).get("embed")==="1")return!0}catch{}return window.innerWidth<=760},xo=m.createContext(null),_=()=>{const e=m.useContext(xo);if(!e)throw new Error("AtelierV2Ctx manquant");return e};function St({o:e,lg:a}){const{lang:r}=_(),n=Te(e);return n?t.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:Ya(n,r),children:[n.emoji," ",Ya(n,r)]}):null}function La({o:e,src:a}){const{lang:r,t:n}=_(),i=Te(e);if(!i)return null;const o=Li(i),s=qi(i);return t.jsxs("em",{className:"sigwin"+(s?" hot":""),title:n.signaledOn(hn(i,r))+" · "+n.win7(ba(i,r)),children:[t.jsx("span",{className:"gg",children:Array.from({length:7},(d,c)=>t.jsx("i",{className:c<o?"on":""},c))}),t.jsx("span",{className:"lb",children:s?n.lastDay:n.daysLeft(Math.max(0,i.left??0))}),a&&i.url&&t.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",title:n.seeSource,onClick:d=>d.stopPropagation(),children:"↗"})]})}function Fd(e,a,r){const n=(r||"").trim();if(n){const o=e.find(s=>(s.url||"")===n);if(o)return o}const i=Le(a);if(i)return e.find(o=>Le(o.name)===i)||e.find(o=>{const s=Le(o.name);return s.length>=3&&(i.includes(s)||s.includes(i))})}function Rd(){const{scoped:e,t:a,st:r,dispatch:n}=_(),i=m.useRef(r.filters.day);r.filters.day&&(i.current=r.filters.day);const o=!!r.filters.day,s=e.filter(x=>!Je(x)),d=s.length,c=s.filter(x=>!x.noCo).length,h=s.filter(x=>!!x.noCo).length,l=(r.filters.sector||[]).length>0;return t.jsxs("button",{type:"button",className:"map-pulse"+(o?" on":""),"aria-pressed":o,title:o?a.zoomPulseBtn:a.zoomPulseWeek,onClick:()=>{if(o)n({type:"filters",patch:{day:"",win:l?"7":"all"}});else{const x=i.current||new Date().toISOString().slice(0,10);n({type:"filters",patch:{day:x,win:"all"}})}},children:[t.jsx("em",{children:o?a.zoomPulseBtn:a.zoomPulseWeek}),t.jsx("b",{children:d}),t.jsx("span",{children:o?a.zoomPulseEd:a.zoomPulseWeekEd}),t.jsxs("ul",{children:[t.jsxs("li",{children:["⚡ ",c," ",a.zoomPulseEval]}),t.jsxs("li",{children:["🔎 ",h," ",a.zoomPulseExplore]})]})]})}function ho({o:e}){const{lang:a}=_(),r=Ti(e.cc),n=e.cc?Dt(e.cc,a)||e.countryLabel||e.cc:e.countryLabel||"—";return t.jsx("span",{className:"c-flag",title:n||void 0,children:r?t.jsx("img",{src:r,width:24,height:18,alt:n||""}):t.jsx("span",{className:"em",children:"🌐"})})}const kr="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap",Od=!1;function Pd(){const[e,a]=m.useState(!1);return m.useEffect(()=>{const r=document.scrollingElement||document.documentElement,n=()=>a((r.scrollTop||0)>600);return n(),window.addEventListener("scroll",n,!0),()=>window.removeEventListener("scroll",n,!0)},[]),e?t.jsx("button",{type:"button",className:"totop",title:"Remonter en haut",onClick:()=>{(document.scrollingElement||document.documentElement).scrollTo({top:0,behavior:"smooth"})},children:"↑"}):null}const go=e=>`atl2:tour:${e||"anon"}`;function Dd(e){try{return localStorage.getItem(go(e))==="1"}catch{return!0}}function jr(e){try{localStorage.setItem(go(e),"1")}catch{}}function Id(e,a,r,n,i){const o=e.tourT,s=e.howto;return[{sel:".atl2 .ident",title:o.ident,body:e.fhintIdent},i?{sel:".atl2 .cover",title:o.cover,body:e.fhintCover,need:".atl2 .ident"}:null,{sel:".atl2 .engine",title:o.engine,body:e.fhintEngine},{sel:".atl2 .ticker",title:o.live,body:e.fhintLive},{sel:".atl2 .goal",title:o.goal,body:e.fhintGoalAt(a)},{sel:".atl2 .funnel",title:o.funnel,body:e.fhintFunnel,ptab:n},{sel:".atl2 .tuto",title:o.tuto,body:s[3][0],ptab:3,need:".atl2 .tuto"},{sel:".atl2 .demand",title:o.demand,body:s[1][0]},{sel:".atl2 .c-vd",need:".atl2 .list",title:o.chips,body:e.fhintChips,ptab:n,dens:"liste"},{sel:".atl2 .card .cdbody",need:".atl2 .list",title:o.dec,body:e.fhintDec,ptab:n,dens:"deplie"},r?{sel:".atl2 .card .cdtabs",need:".atl2 .list",click:'.atl2 [data-tour="tab-memo"]',title:o.memo,body:e.fhintMemo,ptab:n,dens:"deplie"}:null,{sel:".atl2 .csp",need:".atl2 .list",title:o.status,body:e.fhintStatus,ptab:n,dens:"deplie"},{sel:".atl2 .learn",title:o.learn,body:e.learnLine},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=export]",title:o.exportT,body:e.fhintExport,modal:"export"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=plug]",title:o.tools,body:s[6][0],modal:"plug"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=alert]",title:o.alerts,body:e.fhintAlerts,modal:"alert"},{sel:".atl2 .modal.on .mcard",title:o.crit,body:s[0][0],modal:"crit"}].filter(Boolean)}function Hd({demo:e=!1,source:a="default",initialFilters:r,initialUi:n,capsOverride:i,onFiltersChange:o}){var O;const{lang:s}=Ei(),d=Hi[s],c=ts(e,s,a),[h,l]=m.useReducer(rs,void 0,()=>as((n==null?void 0:n.continent)??(a==="ops"?"monde":"europe"),e||(a==="ops"?Md():qd()),{ptab:n==null?void 0:n.ptab,dens:(n==null?void 0:n.dens)??"liste",filters:r,modal:n==null?void 0:n.modal})),x=m.useRef(!0);m.useEffect(()=>{if(x.current){x.current=!1;return}if(!(e||a==="ops"))try{localStorage.setItem(fo,h.mapFolded?"on":"off")}catch{}},[h.mapFolded,e,a]),m.useEffect(()=>{if(a!=="ops"||typeof window>"u")return;const w=()=>{window.innerWidth<=760&&l({type:"mapFold",folded:!0})};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[a]);const p=m.useRef(o);p.current=o,m.useEffect(()=>{var w;(w=p.current)==null||w.call(p,h.filters)},[h.filters]);const[v,u]=m.useState(null),[b,y]=m.useState(null),[f,j]=m.useState(null),[C,k]=m.useState({kept:0,dropped:0}),[N,T]=m.useState(!1),[A,q]=m.useState(""),[z,E]=m.useState(!1),[P,I]=m.useState(null),[R,D]=m.useState(!1),[g,L]=m.useState(!1),[,W]=m.useState(0),$=()=>W(w=>w+1),U=m.useRef([]),oe=m.useRef(new Set),X=m.useRef(new Set),[Y,ie]=m.useState([]),[te,ge]=m.useState([]),[G,de]=m.useState(0),ye=m.useRef(new Map),Se=m.useRef(null),{mode:be}=c,ne=m.useMemo(()=>({...c.caps,...a==="ops"?{showMorning:!1}:null,...i||null}),[c.caps,i,a]),re=ne.pipe,Z=c.session.token||"",K=be==="client"&&!e;m.useEffect(()=>{if(!Z||!re)return;let w=!0;const F=async()=>{const J=await Mi(Z);!w||!J||(ge(J.runs),de(Date.now()/1e3-J.now),ie(ee=>ee.filter(le=>!J.runs.some(Be=>Le(Be.company)===Le(le.name)))))};F();const M=Y.length>0||te.some(J=>J.status==="running"),H=window.setInterval(()=>{F()},M?8e3:25e3);return()=>{w=!1,window.clearInterval(H)}},[Z,re,Y.length,te.some(w=>w.status==="running")]);const me=m.useMemo(()=>{const w=[],F=new Set;for(const M of Y){const H=Le(M.name);!H||F.has(H)||(F.add(H),w.push({name:M.name,id:M.id,status:"boot",started:M.started,estMin:M.estMin,memoType:"instant"}))}for(const M of te){const H=Le(M.company);if(!H||F.has(H))continue;F.add(H);const J=M.status==="error"?"error":M.status==="done"?"done":"running";w.push({name:M.company,status:J,started:M.started||0,estMin:M.est_min||(M.memo_type==="detailed"?40:15),url:M.url,error:M.error,memoType:M.memo_type})}return w},[Y,te]),ke=w=>me.find(F=>Le(F.name)===Le(w))||null,Ne=(w,F)=>{ie(M=>M.some(H=>Le(H.name)===Le(w.name))?M:[...M,{name:w.name,id:w.id,started:Date.now()/1e3,estMin:F==="detailed"?40:15}]),oe.current.add(w.id),$()};m.useEffect(()=>{if(document.querySelector(`link[href="${kr}"]`))return;const w=document.createElement("link");w.rel="stylesheet",w.href=kr,document.head.appendChild(w)},[]);const Q=(w,F=!1)=>{q(w),E(F),Se.current&&clearTimeout(Se.current),Se.current=setTimeout(()=>q(""),F?4200:2400)},ae=w=>Q(w,!0),Oe=m.useMemo(()=>{const w=new Map;return c.dossiers.forEach(F=>{F.id&&w.set(F.id,F)}),w},[c.dossiers]),qe=m.useMemo(()=>c.dossiers.filter(w=>Mr(w,h,re)),[c.dossiers,h,re]),Ae=m.useRef(!1);m.useEffect(()=>{if(Ae.current||e||c.loading||!c.dossiers.length)return;if(!ne.showFunnel||Dd(c.session.token||"")){Ae.current=!0;return}Ae.current=!0;const w=window.setTimeout(()=>{jr(c.session.token||""),D(!0)},700);return()=>window.clearTimeout(w)},[e,c.loading,c.dossiers.length,ne.showFunnel,c.session.token]);const we=m.useMemo(()=>c.dossiers.filter(w=>os(w,h,re,c.favIds)),[c.dossiers,h,re,c.favIds]),Me=m.useMemo(()=>Ci(qe,c.favIds),[qe,c.favIds]),fe=m.useRef(!1);m.useEffect(()=>{if(fe.current)return;if(!re||a==="ops"){fe.current=!0;return}if((n==null?void 0:n.ptab)!==void 0){fe.current=!0;return}if(c.loading)return;fe.current=!0;const w=zi(Me);w!==h.ptab&&l({type:"ptab",tab:w})},[re,a,n==null?void 0:n.ptab,c.loading,Me,h.ptab]);const lt=m.useMemo(()=>{const w=Ir(c.dossiers);return w?st(w)===0?d.tourToday:Br(w,s):d.tourNoRun},[c.dossiers,d,s]),Fe=m.useMemo(()=>c.dossiers.some(w=>!!w.memoUrl||!!w.summary||Ft(w)),[c.dossiers]),[rt,Xe]=m.useState(!1);m.useEffect(()=>{if(c.loading){Xe(!1);return}if(c.dossiers.length>0||c.error){Xe(!0);return}const w=window.setTimeout(()=>Xe(!0),6e3);return()=>window.clearTimeout(w)},[c.loading,c.dossiers.length,c.error]);const ut=(c.marketEstimate||0)>0||typeof((O=c.stats)==null?void 0:O.screened)=="number"&&c.stats.screened>0,dt=m.useMemo(()=>[1,0,2,4,5,3].find(w=>(Me[w]||0)>0)??0,[Me]),Ue=xn.find(w=>w.key===h.continent),mt=h.continent==="monde"?d.contWorld:(s==="fr"?Ue==null?void 0:Ue.fr:Ue==null?void 0:Ue.en)||"";m.useEffect(()=>{const w=F=>{var H;const M=(((H=F.detail)==null?void 0:H.name)||"").trim();M&&ft(null,M)};return window.addEventListener("ppmap:evaluate",w),()=>window.removeEventListener("ppmap:evaluate",w)}),m.useEffect(()=>{if(a!=="ops")return;const w=F=>{const M=F.detail||{},H=String(M.id||"").trim(),J=String(M.name||"").trim(),ee=String(M.url||"").trim(),le=H&&Oe.get(H)||Fd(c.dossiers,J,ee);if(le){y(null),window.dispatchEvent(new CustomEvent("ppmap:reveal")),l({type:"focus",id:le.id}),(le.noCo||["media","nominations","recrutements"].includes(le.engine||""))&&(le.url||le.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:le.url||"",text:[le.headline,le.tagline].filter(Boolean).join(`
`)}})):le.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:le.name,url:le.url||"",website:le.website||"",domain:le.domain||""}}));return}!J&&!ee||(l({type:"focus",id:null}),y({name:J,headline:String(M.text||"").trim()||J,url:ee,card:M.card}),ee&&(va(J)||!J)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:ee,text:String(M.text||"").trim()}})):J&&!va(J)&&window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:J}})))};return window.addEventListener("ppmap:focus",w),()=>window.removeEventListener("ppmap:focus",w)}),m.useEffect(()=>{const w=H=>{const J={},ee=String((H==null?void 0:H.sector)||"").trim();ee&&(J.sector=[ee]);const le=String((H==null?void 0:H.day)||"").slice(0,10);/^\d{4}-\d{2}-\d{2}$/.test(le)&&(J.day=le);const Be=String((H==null?void 0:H.search)||"").trim();Be&&(J.search=Be);const he=String((H==null?void 0:H.dealKind)||"").trim();(he==="ma"||he==="levee"||he==="other")&&(J.dealKind=[he]),Object.keys(J).length&&l({type:"filters",patch:J})},F=H=>w(H.detail),M=H=>{H.data&&H.data.type==="pp-filter"&&w(H.data)};return window.addEventListener("ppmap:filter",F),window.addEventListener("message",M),()=>{window.removeEventListener("ppmap:filter",F),window.removeEventListener("message",M)}},[]),m.useEffect(()=>{const w=F=>{var J;const M=(((J=F.detail)==null?void 0:J.name)||"").trim().toLowerCase();if(!M)return;const H=c.dossiers.find(ee=>(ee.name||"").trim().toLowerCase()===M);H&&l(a==="ops"?{type:"focus",id:H.id}:{type:"popup",id:H.id})};return window.addEventListener("ppmap:similar",w),()=>window.removeEventListener("ppmap:similar",w)});const ft=(w,F)=>{const M=((w==null?void 0:w.name)||F||"").trim();if(!K){j({kicker:M});return}!M||N||(T(!0),(async()=>{try{let H=M;const J=((w==null?void 0:w.website)||(w==null?void 0:w.domain)||"").trim();if(J)H=J;else try{const he=await Ar(M);if(he!=null&&he.website)H=he.website;else if(((he==null?void 0:he.candidates)||[]).length===1)H=he.candidates[0].url;else if(((he==null?void 0:he.candidates)||[]).length>1){U.current=[{name:M,verdict:"unresolved",remaining:null,reason:d.evalPickSite,candidates:(he.candidates||[]).slice(0,5)},...U.current].slice(0,8),$();return}}catch{}const ee=await Tr(Z,H,"atelier2"),le={name:ee.company||M,verdict:ee.verdict,reason:ee.reason||"",remaining:ee.remaining??null};U.current=[le,...U.current].slice(0,8),ee.verdict==="kept"&&k(he=>({...he,kept:he.kept+1})),ee.verdict==="ruled_out"&&k(he=>({...he,dropped:he.dropped+1}));const Be=w||c.dossiers.find(he=>(he.name||"").toLowerCase()===M.toLowerCase());Be&&(ee.verdict==="kept"?Be.verdict=Be.verdict||"MATCH":ee.verdict==="ruled_out"&&(Be.verdict="NO MATCH"),ee.reason&&(Be.reasoning=ee.reason)),$()}finally{T(!1)}})())},S=w=>{if(!K){j({kicker:w.name});return}Ne(w,"instant"),$t(Z,"fast_request",w.name||"",""),Q(d.memoInstantSent(w.name))},B=w=>ye.current.get(w.id)??c.thumbs.get((w.name||"").trim().toLowerCase()),V=(w,F)=>l({type:"undoPush",entry:{id:w.id,name:w.name,prevCeoStatus:F}}),se=async(w,F,M)=>{const H=w.ceoStatus||"";w.ceoStatus=F,$();const J=await Ra(Z,{status:F,airtable_id:w.airtableId,check_id:w.checkId,company:w.name,...(M==null?void 0:M.note)!==void 0?{note:M.note}:{},...M!=null&&M.via?{via:M.via}:{}});return J.ok?J.skipped?(w.ceoStatus=H,$(),ae(d.actNotPersisted),!1):((M==null?void 0:M.undo)!==!1&&V(w,H),M!=null&&M.msg&&Q(M.msg),(F==="Validé"||F==="Écarté")&&!w.ceoNote&&(M==null?void 0:M.note)===void 0&&I({o:w,yes:F==="Validé"}),!0):(w.ceoStatus=H,$(),ae(d.actErr),!1)},ue=async(w,F)=>{const M=await Ra(Z,{status:w.ceoStatus||"Retenu",airtable_id:w.airtableId,check_id:w.checkId,company:w.name,note:F,via:"note"});return!M.ok||M.skipped?(ae(M.skipped?d.actNotPersisted:d.actErr),!1):(w.ceoNote=F,$(),!0)},ce=m.useRef(new Map),xe=w=>ce.current.has(w.id)?ce.current.get(w.id):c.stages.get((w.name||"").trim().toLowerCase()),Ke=(w,F)=>{ce.current.set(w.id,F),$()},Ct=(w,F)=>{K&&se(w,F?"Validé":"Écarté",{msg:F?d.decidedYes(w.name):d.decidedNo(w.name)})},xt=w=>{K&&se(w,"À trancher",{msg:d.promoted(w.name)})},zt=w=>{K&&(async()=>{const F=w.ceoStatus||"";w.ceoStatus="Retenu",$();const M=await Ra(Z,{status:"Retenu",check_id:w.checkId,company:w.name});if(!M.ok||M.skipped){w.ceoStatus=F,$(),ae(M.skipped?d.actNotPersisted:d.actErr);return}V(w,F),Q(d.repeched(w.name))})()},ct=()=>{const w=h.undo[h.undo.length-1];if(!w){Q(d.undoNone);return}const F=Oe.get(w.id);if(!F){l({type:"undoPop"}),Q(d.undoNone);return}let M=w.prevCeoStatus;if(!M)if((F.verdict||"").toUpperCase().includes("CALL"))M="À trancher";else{Q(d.undoLockedTitle);return}(async()=>await se(F,M,{undo:!1})&&(l({type:"undoPop"}),F.ceoStatus=w.prevCeoStatus,$(),Q(d.undoDone(F.name))))()},At=w=>{K&&(X.current.add(w.id),$(),(async()=>{const F=await Fi(Z,w.name,"email");if(!F||F.ok===!1){X.current.delete(w.id),$(),ae(d.actErr);return}$t(Z,"approach",w.name||"",""),Q(d.actApproachSent)})())},He=(w,F)=>{K&&(async()=>{if(!(await $t(Z,F?"yes":"no",w.name||"","")).ok){ae(d.actErr);return}ye.current.set(w.id,F?"yes":"no"),$(),Q(F?d.thumbUpDone:d.thumbDnDone)})()},Pe=w=>{!K||!Ft(w)||(Ne(w,"detailed"),$t(Z,"detailed_request",w.name||"",""),Q(d.memoDeepSent(w.name)))},ht=w=>{const F=new Set(c.favIds),M=F.has(w.id);M?F.delete(w.id):F.add(w.id),c.setFavIds(F),K&&Ri(Z,{id:w.id,co:w.name},M)},Qe=()=>{!K||g||window.confirm(d.identSyncConfirm)&&(L(!0),(async()=>{const w=await Oi(Z);L(!1),w?Q(d.identSyncDone):ae(d.actErr)})())},Tt=/proplace/i.test(c.fund||""),Bt=w=>{!K||!Tt||($t(Z,"onboard_request",w.name||"",""),Q(d.onboardSent(w.name)))},qa={st:h,dispatch:l,t:d,lang:s,mode:be,caps:ne,pipe:re,token:Z,fund:c.fund,email:c.email,criteria:c.criteria,source:a||"default",data:c,doRepeche:zt,thumbOf:B,canWrite:K,commitStatus:se,saveNote:ue,stageOf:xe,setStage:Ke,flashErr:ae,startTour:()=>D(!0),dossiers:c.dossiers,scopedAll:qe,scoped:we,counts:Me,byId:Oe,contName:mt,favIds:c.favIds,toggleFav:ht,askEvaluate:ft,doAnalyse:S,doDecide:Ct,doPromote:xt,doApproach:At,doThumb:He,doDeep:Pe,doUndo:ct,doSync:Qe,doOnboard:Bt,outbound:Tt,memoQueued:oe.current,liveMemos:{items:me,serverOff:G,liveOf:ke},approachDone:X.current,sessTally:C,evalCards:U.current,evalBusy:N,markRow:u,markedId:v,flash:Q,focusExtra:b};m.useEffect(()=>{const w=F=>{F.key==="Escape"&&(l({type:"popup",id:null}),l({type:"modal",modal:null}),l({type:"openFacet",facet:null}))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[]);const Ma=w=>Z?t.jsx(ss,{token:Z,children:w}):t.jsx(t.Fragment,{children:w});return t.jsx(xo.Provider,{value:qa,children:t.jsxs("div",{className:"atl2"+(a==="ops"?" ops":"")+(Z?" cibles":""),children:[t.jsx("style",{children:Yi}),Ma(t.jsxs("div",{className:"app"+(re?" pipe":"")+(Z?" has-thesis":""),children:[ne.showTicker&&t.jsx(Ze,{name:"live",children:t.jsxs("div",{className:"live-stack"+(Z?" live-stack--cibles":""),children:[t.jsx(ms,{}),!!Z&&t.jsx(ls,{})]})}),ne.showIdent&&t.jsx(Ze,{name:"identite",children:t.jsx(Ss,{})}),!1,Od,ne.showFunnel&&t.jsx(Ze,{name:"entonnoir",children:t.jsx(Bd,{})}),!h.mapFolded&&t.jsx(Ze,{name:"carte",fallback:t.jsx("div",{className:"void",children:d.loadError}),children:t.jsxs("div",{className:"fzone",children:[t.jsx(io,{}),t.jsxs("div",{className:"stage",id:"atl2-stage",children:[a==="ops"&&t.jsx(Rd,{}),t.jsx(jl,{}),t.jsx(oo,{})]})]})}),ne.showDemand&&re&&t.jsx(Ze,{name:"direct",children:t.jsx($i,{items:me,serverOff:G,labels:{strip:d.liveStrip,boot:d.liveBoot,end:d.liveEnd,open:d.liveOpenQueue,memo:d.actMemo},onOpen:()=>l({type:"modal",modal:"queue"})})}),ne.showDemand&&t.jsx(Ze,{name:"evaluation",children:t.jsx("div",{className:"eval-stick",children:t.jsx(Tl,{})})}),ne.showDemand&&h.memoConsole&&t.jsx(Ze,{name:"console",children:t.jsx(ql,{})}),t.jsx(Ze,{name:"liste",fallback:t.jsxs("div",{className:"void",children:[d.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>window.location.reload(),children:d.retry})]}),children:t.jsx(rd,{})}),c.loading&&t.jsx("div",{className:"void",children:d.loadingV2}),c.error&&!c.loading&&t.jsxs("div",{className:"void",children:[d.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:c.refresh,children:d.retry})]})]})),h.popupId&&h.dens!=="liste"&&a!=="ops"&&t.jsx(Ze,{name:"fiche",children:t.jsx(Bl,{})}),t.jsx(Ze,{name:"modales",children:t.jsx(ud,{})}),t.jsx(hs,{}),P&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:P.o.name}),t.jsx(ws,{placeholder:P.yes?d.whyYesPh:d.whyNoPh,onDone:w=>{const F=P.o;I(null),w&&ue(F,w).then(M=>{M&&Q(d.csNoteSaved)})}})]}),R&&rt&&t.jsx(js,{steps:Id(d,lt,Fe,dt,ut),onClose:()=>{D(!1),jr(Z)}}),t.jsx(Pd,{}),ne.showOnb&&t.jsxs("div",{className:"lockbar on",children:[t.jsx("b",{children:d.lockbarText}),t.jsxs("span",{className:"lb-c",children:[d.lockbarContactBefore,t.jsx("a",{href:Pr,children:vn}),d.lockbarContactMid,t.jsx("a",{href:`mailto:${wa}`,children:wa})]}),t.jsx("button",{type:"button",onClick:()=>l({type:"modal",modal:"rdv"}),children:d.lockbarCta})]}),A&&t.jsx("div",{className:"flash on"+(z?" err":""),children:A}),f&&t.jsx(Ai,{variant:"acquirer",initialCompany:Nr().co,initialWebsite:Nr().site,onClose:()=>j(null)})]})})}function Bd(){const{t:e}=_(),[a,r]=m.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem("atl2:fhint")==="off"}catch{return!1}});return a?null:t.jsxs("p",{className:"fhint",children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:t.jsx("path",{d:"M1 2h10M2.5 5.5h7M4.5 9h3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})}),t.jsx("span",{dangerouslySetInnerHTML:{__html:e.funnelHint}}),t.jsx("button",{type:"button","aria-label":"Fermer",title:e.fhintClose,onClick:()=>{r(!0);try{localStorage.setItem("atl2:fhint","off")}catch{}},children:"✕"})]})}function Nr(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function $d(e){return e>=1e9?(e/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":e>=1e6?Math.round(e/1e6)+" M€":Math.round(e/1e3)+" k€"}export{ho as FlagCell,St as SigBadge,La as SigWin,Hd as default,$d as fmtShort,_ as useV2};
