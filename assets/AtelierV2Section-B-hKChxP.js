var So=Object.defineProperty;var Co=(e,a,r)=>a in e?So(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var An=(e,a,r)=>Co(e,typeof a!="symbol"?a+"":a,r);import{r as u,u as zo,a as Ao,b as To,R as sa,L as qo,j as t,C as Tn,c as Lo,d as Ro,l as Oa,o as xa,i as Lr,g as Fo,e as Mo,f as Oo,h as qn,k as Do,m as Ln,n as Rn,p as Fn,q as Po,s as Io,t as Bo,v as _o,w as $o,S as hn,x as Uo,y as Ho,z as Fe,A as xn,B as ct,D as Et,E as Vo,F as Wo,G as Rr,H as ya,I as Go,_ as Ga,J as ze,N as Yo,K as Ko,M as Qo,O as _e,P as Jo,Q as Xo,T as xt,U as Zo,V as Pt,W as gn,X as Fr,Y as ei,Z as ti,$ as ai,a0 as bn,a1 as Mn,a2 as On,a3 as It,a4 as Ya,a5 as St,a6 as We,a7 as ni,a8 as ri,a9 as Dn,aa as Mr,ab as oi,ac as ii,ad as Or,ae as si,af as Dr,ag as li,ah as di,ai as Mt,aj as ci,ak as ra,al as pi,am as Bt,an as ui,ao as Pr,ap as Ir,aq as Pn,ar as mi,as as fi,at as Ka,au as Qa,av as hi,aw as xi,ax as gi,ay as bi,az as In,aA as vi,aB as yi,aC as wi,aD as ki,aE as Ja,aF as ji,aG as Da,aH as Bn,aI as Ni,aJ as Ei,aK as Si,aL as _n,aM as Ci,aN as zi,aO as $n,aP as Ai,aQ as Ti,aR as qi,aS as Li,aT as Ri,aU as Fi,aV as Mi,aW as Un,aX as Oi,aY as Di,aZ as Pi,a_ as Ht,a$ as Pa,b0 as Ii,b1 as Bi,b2 as _i}from"./index-B1Cun837.js";const $i=({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:o,onInit:i,onPageChange:s,onSubmit:d})=>{const[c,g]=u.useState(!0),l=zo({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:o});Ao(l,{onInit:i,onPageChange:s,onSubmit:d});const[h,p]=u.useState();return To(l,"form_resized",b=>{const m=b.size;typeof m=="number"&&p(m)},{disabled:!o}),sa.createElement("div",{className:"fillout-standard-embed",style:{height:o?typeof h=="number"?h:256:"100%",transition:o?"height 150ms ease":void 0}},c&&sa.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},sa.createElement(qo,null)),l&&sa.createElement("iframe",{src:l.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>g(!1),style:{width:c?0:"100%",height:c?0:"100%",opacity:c?0:1,borderRadius:10,border:0,minHeight:256}}))};function Pe(e){return(e||"").trim().toLowerCase()}function Ui(e,a){const r=Math.max(60,a*60);return Math.max(2,Math.min(97,Math.round(e/r*100)))}function Hi(e){const a=Math.max(0,Math.floor(e)),r=Math.floor(a/60),n=a%60;return r+":"+String(n).padStart(2,"0")}function Vi(e){const a=new Date(e);return String(a.getHours()).padStart(2,"0")+":"+String(a.getMinutes()).padStart(2,"0")}function Xt({item:e,serverOff:a,bootLbl:r,endLabel:n}){const[o,i]=u.useState(()=>Date.now()/1e3);if(u.useEffect(()=>{const h=window.setInterval(()=>i(Date.now()/1e3),1e3);return()=>window.clearInterval(h)},[]),e.status==="boot"||!(e.started>0))return t.jsxs("span",{className:"runtrack boot",children:[t.jsx("span",{className:"runchrono",children:r}),t.jsx("span",{className:"runbar",children:t.jsx("i",{className:"ind"})})]});if(e.status==="error")return t.jsx("span",{className:"runerr",children:e.error||"erreur"});if(e.status==="done")return t.jsx("span",{className:"rundone",children:"✓"});const s=o-a-e.started,d=e.estMin||15,c=d*60-s,g=Ui(s,d),l=c>0&&n?" · "+n.replace("{t}",Vi((e.started+d*60+a)*1e3)):"";return t.jsxs("span",{className:"runtrack",children:[t.jsx("span",{className:"runchrono",children:"⏱ "+Hi(s)+" · "+g+"%"+(c>0?" · ~"+Math.ceil(c/60)+" min":" · …")+l}),t.jsx("span",{className:"runbar",children:t.jsx("i",{style:{width:g+"%"}})})]})}function Wi({items:e,serverOff:a,labels:r,onOpen:n}){const o=e.filter(i=>i.status!=="done"||Date.now()/1e3-(i.started||0)<1200);return o.length?t.jsxs("div",{className:"livestrip",role:"button",onClick:n,title:r.open,children:[t.jsx("span",{className:"ls-ico",children:"⚡"}),t.jsx("span",{className:"ls-lab",children:r.strip}),o.slice(0,6).map(i=>t.jsxs("span",{className:"ls-chip"+(i.status==="error"?" err":i.status==="done"?" done":""),children:[t.jsx("b",{children:i.name}),i.status==="done"&&i.url?t.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),children:r.memo}):t.jsx(Xt,{item:i,serverOff:a,bootLbl:r.boot,endLabel:r.end})]},i.name)),o.length>6&&t.jsxs("span",{className:"ls-more",children:["+",o.length-6]}),t.jsxs("span",{className:"ls-go",children:[r.open," →"]})]}):null}const Gi={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Tout ce que STAN a passé au crible sur la fenêtre : chaque société évaluée selon vos critères, retenue ou écartée automatiquement.","STAN a retenu ces sociétés selon vos critères, décision justifiée. NOUS vérifions ses choix — écartez, validez, ou lancez une analyse sur les incertaines.","Les mémos de STAN, relus par NOUS : synergies chiffrées, verdict argumenté. Validez celles à contacter, mettez « à trancher » celles où vous hésitez.","À VOUS de jouer : les meilleures cibles, présentées le lundi par votre Corporate Developer. Tranchez OUI ou NON — vos oui passent en Validées.","Vos OUI — la short-list à contacter. NOUS préparons l’approche, ou l’engageons en votre nom (offre Entreprise).","Écartées par STAN ou par VOUS. Chaque NON affine les critères de Stan. Repêchez-en une à tout moment.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(e,a,r)=>`<b>${e} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${r} sans réponse.</b>`,morningThesis:(e,a,r)=>`Ce matin, <b>${e}</b> société${e===1?"":"s"} criblée${e===1?"":"s"} par vos moteurs`+(typeof r=="number"?`, <b>${r}</b> retenue${r===1?"":"s"}.`:".")+(a?` <b>${a}</b> attend${a>1?"ent":""} votre évaluation.`:' <span class="ok">Tout est évalué.</span>'),morningEnginesTitle:"Ces sociétés viennent UNIQUEMENT du sourcing de votre thèse : vos codes d’activité, vos pays, vos angles d’acquisition, vos critères d’exclusion. Aucune société d’un autre fonds n’entre ici. Seule la veille d’actualité part d’un ratissage commun pour des raisons de coût — mais chaque opération qui en sort est ensuite confrontée à vos critères, et n’entre dans votre page que si elle les passe.",morningLast:(e,a,r)=>`Dernier passage des moteurs le <b>${r}</b> : <b>${e}</b> société${e===1?"":"s"} sourcée${e===1?"":"s"}.`+(a?` <b>${a}</b> restante${a>1?"s":""} pas encore évaluée${a>1?"s":""}.`:' <span class="ok">Tout est évalué.</span>'),morningEval:e=>`▶ Les traiter (${e})`,identTitle:e=>`Cibles pour ${e}`,identCoverage:"COUVERTURE DU MARCHÉ",identCoverageOf:(e,a)=>`<b>${e}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"MOTEUR DE MÉMOS",identPerDay:"mémo/jour",identPending:e=>`→ ${e} en attente`,identPendingWait:"→ lecture de la file…",identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Inverser l’ordre de tri",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:e=>`Décision annulée sur ${e}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ OUI",actNo:"✗ NON",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:e=>`${e} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"CRIBLE · MÉMO",colCrible:"CRIBLE",colMemo:"MÉMO",colScore:"SCORE",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:e=>`Depuis le verdict de Stan : ${e} j`,waitChip:e=>`⏱ ${e} j`,densList:"LISTE",densOpen:"DÉPLIÉ",densLigne:"LIGNE",densMaxi:"MAXI",unfoldAll:"Tout déplier",foldAllLbl:"Tout replier",foldArts:"Articles",zoomSrc:"Source",viewLink:"Voir l’article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Site web de la société",viewSiteBusyHint:"Recherche du site web…",viewSrcHint:"Article source",viewLinkClose:"Fermer l’article",viewLinkTab:"Ouvrir dans un onglet",viewLinkHint:"S’ouvre dans une nouvelle fenêtre",zoomSimilar:"Voir les similaires",zoomInCockpit:"Isoler dans la liste",zoomArt:"Edito du jour",zoomEvalHint:"Crible selon vos critères",zoomSimilarHint:"Même secteur dans la liste",zoomIsolateHint:"Ne garder que cette société",zoomNewsMark:"Décryptage de l’édition — le texte s’ouvre à droite",zoomPulseEval:"évaluables",zoomPulseExplore:"à explorer",zoomPulseArts:"actualités",doNews:"📰 Actualités",zoomPulseEd:"dans l’article du jour",zoomPulseBtn:"Édition du jour",zoomPulseWeek:"7 derniers jours",zoomPulseWeekEd:"cette semaine",doAll:"Tout",doEdito:"📖 Edito du jour",doBrief:"📖 Brief du jour",doEval:"⚡ Évaluables",doExplore:"🔎 À explorer",doBriefHint:"Afficher le brief du jour",doTodo:"⚡ À évaluer",doDone:"✓ Déjà évaluées",cdMemoTab:"📖 Mémo",evalPickSite:"plusieurs sites portent ce nom — ouvrez pour vérifier, puis validez celui qui est le bon.",evalPickGo:"✓ C’est celui-ci",chainMemoGo:"⚡ Lancer le mémo (1 crédit)",analyseConfirm:e=>`Lancer ${e} mémo${e>1?"s":""} d’analyse ?

Cela consomme ${e} crédit${e>1?"s":""} mémo. Les sociétés partiront en « Analysées » ou « À trancher » une fois le mémo prêt.`,sortBy:"Trier par",sortSig:"Signal",sortAmount:"Montant",sortAge:"Récence",sortName:"Nom",sortCountry:"Pays",sortStage:"Stade",sortCrible:"Crible",sortMemo:"Mémo",sortScore:"Score",fMenu:"Filtres",memoSynth:"SYNTHÈSE",memoOpenFull:"📖 Lire le mémo complet →",memoDeep:"⚡ Mémo détaillé",memoDeepHint:"Pour ce dossier à trancher, vous pouvez lancer l’analyse détaillée : étude de marché, quadrant concurrentiel, scénarios.",memoDeepSent:e=>`Mémo détaillé lancé sur ${e} — prêt dans 35 à 40 minutes`,memoInstantSent:e=>`Analyse lancée sur ${e} — mémo prêt dans ~15 minutes`,liveStrip:"Analyses en direct",liveBoot:"lancement…",liveEnd:"fin {t}",liveOpenQueue:"Voir la file",memoNone:"Aucun mémo pour ce dossier — lancez l’analyse.",creditsCap:"CRÉDITS MÉMO",creditsToday:"aujourd’hui",creditsRecharge:"Recharger →",creditsCost:e=>`−${e} crédit${e>1?"s":""}`,creditsNone:"Crédit épuisé — rechargez ou attendez demain 7 h.",rechargeTitle:"Crédits mémo",rechargeHint:e=>`Votre offre comprend <b>${e} crédits par jour</b>, rechargés chaque matin. Besoin de plus tout de suite ?`,rechargeNote:"Les crédits achetés n’expirent pas. Ils s’utilisent après vos crédits quotidiens.",rechargeBuy:"Ajouter",rechargeUnit:(e,a)=>`${e} crédits — ${a} €`,onbTag:"APERÇU PRIVÉ · LECTURE SEULE",onbTitle:e=>`Votre deal flow est prêt — <b>${e} cibles retenues</b> par Stan`,onbSub:e=>`${e} sociétés passées au crible sur votre thèse. Les dix premières lignes sont ouvertes ; le reste se débloque en trente minutes.`,onbSteps:[["Stan a étudié votre présence en ligne","Site, offres d’emploi, presse — il en a déduit vos angles d’acquisition."],["Il a criblé le marché","Chaque société confrontée à vos critères."],["Il a rédigé des mémos","Analyses chiffrées, synergies, verdicts."],["À vous de trancher","Trente minutes pour régler votre deal flow et tout débloquer."]],onbCta:"Choisir un créneau →",lockbarText:"Paramétrons votre deal flow rêvé en 30 minutes, avec un Corporate Developer",lockbarContactBefore:"Alexandre — ",lockbarContactMid:" · ",lockbarCta:"Choisir un créneau",rdvHeading:"Paramétrons votre deal flow rêvé en 30 minutes",rdvSubBefore:"Choisissez un créneau ci-dessous, ou contactez votre expert Corporate Development directement au ",rdvSubMid:" ou par email à ",rdvCoFallback:"votre société",rdvUnlockLabel:e=>`Déblocage ${e}`,rdvUnlocks:e=>[["Accédez à toutes vos cibles retenues","Mémos d’investissement complets, synergies, contacts, angle d’approche."],["Stratégie d’acquisition construite avec vous","Hypothèse + stratégie d’acquisition recalibrées en live, avec vous."],["Tranchons ensemble les cibles que vous voulez","OUI / NON, sourcing de sociétés similaires, export et synchronisation CRM."],["Votre AI Corporate Developer est lancé",`Stan travaille pour ${e} chaque matin — vous n’avez plus qu’à décider.`]],identRepub:"Republier la page maintenant — re-rend la page avec ce qui est déjà connu. Gratuit : aucun moteur ne repart, aucun modèle n’est appelé si votre thèse n’a pas changé.",identRepubDone:"Republication lancée — vos chiffres se rafraîchissent en une trentaine de secondes. Actualisez la page pour les voir.",plugHow1:"Dans votre outil (Make, Zapier, n8n, HubSpot, Pipedrive…), créez un déclencheur « webhook » et copiez l’URL qu’il vous donne.",plugHow2:"Collez-la ci-dessous, Enregistrez, puis Testez : un message d’exemple part aussitôt dans votre outil.",plugHow3:"C’est fini. Trois moments déclenchent un envoi : vous validez une cible, vous la faites avancer d’un stade, ou une approche est préparée.",plugExT:"Ce que votre outil reçoit, exactement",plugExResult:"Dans votre CRM, vous obtenez une ligne par société validée : son nom, votre note, le score de Stan, son site et le lien du mémo.",plugApiT:"Une seule société, depuis un script ou Make",plugQuota:"Ce raccourci est plafonné à 10 sociétés par jour et par lien — le chemin normal reste la barre d’évaluation de la page.",plugFeeds:"Les flux JSON, CSV, Google Sheets et Excel vivent dans le bouton 📥 Exporter, juste à côté — ils ne sont pas répétés ici.",plugTokenNote:"⚠️ Ces liens portent la clé d’accès de cette page : partout où vous les collez, ils ouvrent vos cibles. Ne les mettez que dans vos propres outils.",plugDoc:"Documentation complète → proplace.co/api/",csNone:"Statut",csAnaNeedMemo:"Pour passer en « Analysée », il faut un mémo.",csAnaRun:"⚡ Lancer le mémo (1 crédit)",csAnaAnyway:"Marquer quand même",qOffer:"VOTRE OFFRE",qDelay:"délai de verdict",qRate:e=>`${e} mémo${e>1?"s":""} par jour`,qManual:e=>`${e} mémo par jour, à votre demande`,qPaused:"aucun mémo automatique",qManualSet:"rythme réglé à la main",qEta:(e,a,r)=>`À ce rythme (${a}/jour), il reste ${e} mémo${e>1?"s":""} à écrire — toute la file est traitée en ${r} jour${r>1?"s":""}.`,qEtaPaused:"Rythme à zéro : rien ne part. Activez une offre pour projeter une date.",qEtaDone:"Toute la file est déjà analysée.",qLate:(e,a)=>`Le délai « ${e} » ne peut pas être tenu : il faudrait dépasser le plafond de ${a} mémos par jour.`,qRunning:"En cours",qUpNext:e=>`À venir — ${e} société${e>1?"s":""} dans la file, dans l’ordre de tirage`,qUpNextWait:"À venir — lecture de la file…",qFileWait:"Lecture de la file en cours — quelques secondes.",qHedge:"Ordre projeté, recalculé chaque matin. Un lead frais tombé dans la nuit passe devant.",qFresh:"frais",qLater:"plus tard",qVerdictsT:"Les verdicts de Stan — où part chaque dossier",qVerdicts:[["CALL","sa meilleure trouvaille : à vous de trancher OUI ou NON → onglet « À trancher »."],["CONSIDER","solide, mérite un regard de plus → onglet « Analysées »."],["MONITOR","à garder à l’œil, pas encore prioritaire → onglet « Analysées »."],["PASS","hors sujet pour l’instant → onglet « Écartées »."]],covHowT:"D’où vient ce chiffre ?",covTotal:"Total du marché",covColCode:"Code · pays",covColN:"Sociétés",covColSource:"Source",covWide:e=>`${e} non publié — élargi au code parent`,covMissing:"aucune donnée publiée",covRejected:e=>`Codes écartés faute de sociétés trouvées : ${e}.`,covComputedAt:e=>`calculé le ${e}`,filterOff:"Retirer ce filtre",fSelected:"sélectionnés",funScreened:(e,a)=>`sociétés criblées${e?a?` du ${e} au ${a}`:` depuis le ${e}`:""}`,funKept:"retenues comme cibles sérieuses",funAnalyzed:"analysées en profondeur",funShown:"publiées sur votre page, tous filtres levés",sigStripMore:e=>`+ voir les ${e} autre${e>1?"s":""}`,boxCollapse:"Réduire",boxExpand:"Agrandir",memoReadHere:"📄 Lire le mémo ici",memoHideHere:"▴ Replier le mémo",sigChipTitle:(e,a)=>`Signalé ${e} · ${a}`,funPerWindow:(e,a)=>`Du ${e} au ${a}`,funPerAll:"Depuis le début",funOfMarket:(e,a)=>`sur ~${e} sociétés de VOTRE marché, soit ${a} %`,funScope:"Sourcing de votre thèse uniquement — vos codes d’activité, vos pays, vos angles. Aucune société d’un autre fonds n’est comptée ici.",funToday:e=>`dont ${e} aujourd’hui`,actTitle:"Activité des 30 derniers jours",actScreened:"criblées",actKept:"retenues",actToday:"aujourd’hui",fstatsShow:"Voir l’activité des 30 derniers jours",fstatsHide:"Masquer l’activité",sinceTitle:(e,a)=>`${e} nouvelle${e>1?"s":""} cible${e>1?"s":""} depuis votre dernière visite (${a})`,sinceSub:"arrivées depuis votre dernier passage — à parcourir en premier",sinceMore:e=>`+${e} autres`,sinceOut:e=>`${e} sortie${e>1?"s":""} de la liste`,morningDock:e=>e?`${e} criblées ce matin`:"Crible du matin",morningDockTitle:"Voir les sociétés criblées aujourd’hui — quel qu’ait été le verdict.",sinceDock:e=>`${e} nouvelle${e>1?"s":""}`,sigDock:e=>`${e} ${e>1?"signaux":"signal"}`,identSyncConfirm:"Relancer le sourcing maintenant ? Un passage des moteurs prend quelques minutes.",plugAutoOn:e=>`⚡ Envoi automatique ACTIF (${e}) — chaque cible que vous validez part toute seule en séquence.`,plugAutoOff:"Envoi automatique inactif — valider une cible ne l’envoie nulle part.",plugCrm:"Créer les dossiers dans mon CRM",plugCrmHint:"Collez l’URL de webhook de votre outil : chaque décision y arrive aussitôt.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Enregistrer",plugSaved:"Webhook enregistré",plugTest:"Tester",plugTested:"Test envoyé",plugTestThrottled:"Déjà testé il y a moins de 5 s — rien n’est reparti.",plugRemove:"Retirer",plugRemoved:"Webhook retiré",plugMcp:"Claude & IA (MCP)",plugBulk:"Contacter mes cibles",plugBulkHint:"Voyez d’abord qui partirait : l’aperçu ne contacte personne.",plugBulkTabs:[["valides","Validées"],["call","À trancher"],["retenus","Retenues"]],plugBulkPreview:"👁 Aperçu",bulkArm:"📤 Envoyer pour de vrai",bulkNoDest:"Aucune destination enregistrée : renseignez d’abord votre outil ci-dessus.",bulkScope:"Ce qui part, c’est l’onglet entier côté serveur — pas la vue filtrée à l’écran.",bulkWarn:(e,a)=>`Vous allez contacter ${e} société${e>1?"s":""} via ${a}. C’est irréversible, et le serveur ne vérifie pas si elles ont déjà été contactées.`,bulkConfirm:e=>`Oui, envoyer via ${e}`,bulkCancel:"Annuler",bulkSending:"Envoi en cours…",bulkDone:(e,a,r)=>`${e} société${e>1?"s":""} envoyée${e>1?"s":""}. ${a} joignable${a>1?"s":""} sur LinkedIn seulement, ${r} sans email.`,bulkNone:"Aucune société n’avait d’email : rien n’a été envoyé.",bulkLocked:(e,a)=>`Envoyé le ${e} — ${a} société${a>1?"s":""}. Nouvel envoi possible dans 24 h.`,bulkPreviewFirst:"Lancez d’abord l’aperçu : il dit exactement qui partirait.",cdConviction:"Conviction",cdAnalyse:"Analyse",cdSociete:"Société",cdContact:"Contact",cdSuivi:"Suivi",cdCrible:"au crible",cdMemo:e=>e?`après mémo ${e}`:"après mémo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict du",cdSector:"Secteur",cdStage:"Stade",cdCountry:"Où",cdSite:"Site",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Détectée le",cdName:"Dirigeant",cdEmail:"Email",cdCeoStatus:"Votre décision",cdEngagement:"Engagement",qaTitle:"Décrire cette société",qaHint:"Lecture de son site, puis quatre blocs : à qui elle s’adresse, ce qu’elle vend, comment elle gagne de l’argent, et ce qu’il faut en retenir. Aucun verdict — le crible a déjà tranché.",qaRun:"📄 Décrire",qaBusy:"Lecture du site…",qaVP:"À qui, et pour quel problème",qaProduct:"Ce qu’elle vend",qaModel:"Comment elle gagne de l’argent",qaSummary:"À retenir",qaSources:e=>`${e} page${e>1?"s":""} lue${e>1?"s":""}`,qaQuota:"Plafond du jour atteint : réessayez demain.",qaEmpty:"Le site ne dit rien d’exploitable — rien n’a été inventé.",dsBtn:"🗂 Dossier comité",dsHint:"Un A4 par société : le verdict du crible et sa raison, l’identité, l’analyse quand elle a été lancée, et votre décision. Aucun chiffre financier — nous n’en recevons aucun.",dsTitle:e=>`Dossier comité — ${e} société${e>1?"s":""}`,dsCap:(e,a)=>`Les ${e} premières sur ${a} : un comité ne lit pas ${a} pages.`,dsWhy:"Pourquoi cette société est devant vous",dsAnalysis:"Ce qu’elle fait",dsDecision:"Votre décision",dsEmpty:"Aucune société dans la sélection courante.",dsFoot:e=>`Sélection établie par Proplace pour ${e} — document interne, ne pas diffuser.`,covFunnel:"Votre marché, au crible",covScreened:e=>`${e} sociétés passées au crible`,covOf:e=>`sur ~${e} sociétés pertinentes`,covNoEst:"Votre marché adressable n’est pas encore chiffré : la couverture s’affichera dès qu’il le sera.",covPace:e=>`${e} sociétés criblées par jour`,covEta:e=>e<=0?"Votre marché est entièrement couvert.":e<60?`Couverture complète dans ~${e} jours, à ce rythme.`:`Couverture complète dans ~${Math.round(e/30)} mois, à ce rythme.`,covRate:"Rythme d’analyse",covRateHint:"Combien de sociétés retenues reçoivent un verdict argumenté chaque jour. À zéro, l’analyse est en pause.",covRateNow:e=>e<=0?"En pause":`${e} par jour`,covKept:"retenues",covAna:"analysées",covScopeAll:"sur le monde entier",covShown:"présentées ici",bulkReplayed:"Cet envoi avait déjà été enregistré : rien n’est reparti. Vos cibles n’ont été contactées qu’une fois.",bulkPending:"L’envoi précédent est encore en cours : rien n’a été renvoyé.",plugBulkResult:(e,a,r)=>`${e} partiraient par email · ${a} par LinkedIn · ${r} sans contact.`,memoAlertTitle:"Votre alerte mémo",memoAlertSub:"Recevez un email dès qu’un mémo de votre fonds est finalisé — avec son lien direct.",memoAlertToggle:"M’envoyer chaque mémo terminé",memoAlertEmail:"Destinataire",memoAlertSaved:"Enregistré ✓",memoAlertErr:"Échec d’enregistrement — réessayez",memoAlertSections:"Sections de l’email",memoAlertSec:[["swot","SWOT"],["action","Plan d’action"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Verdict de Stan"]],memoAlertPreview:"👁 Prévisualiser",memoAlertBtn:"Votre alerte mémo",alertTabDaily:"Quotidien",alertTabWeekly:"Hebdomadaire",alertTabMarket:"Le marché",alertSections:"Sections de l’email",alertSec:[["pending","Dossiers à trancher"],["stats","Vos chiffres clés"],["autonomous","Décisions automatiques de Stan"],["market","Analyse de marché"],["sourcing","Votre sourcing du jour"]],alertSecSlow:"(plus long à générer)",alertSecNote:"Décocher l’analyse de marché rend l’aperçu instantané.",alertPreview:"👁 Prévisualiser l’email d’aujourd’hui",alertPreviewWeekly:"👁 Prévisualiser le bilan",alertSubject:"Objet :",alertPreviewBusy:"Aperçu en cours de génération, réessayez dans quelques secondes.",alertPreviewRetry:e=>`Génération en cours — nouvel essai dans ${e} s…`,alertPreviewFail:"Aperçu indisponible pour l’instant — décochez « Analyse de marché » pour l’obtenir tout de suite.",alertPreviewEmpty:"À cet instant : rien à trancher — l’email ne partira pas.",alertTest:"✉ M’envoyer un test",alertTestOk:e=>`✓ Envoyé à ${e} — vérifiez aussi vos spams/promotions.`,alertTestHint:"N’affecte pas l’envoi quotidien.",alertBtnPrevBusy:"⏳ Fabrication…",alertBtnTestBusy:"⏳ Envoi…",alertPreviewWait:e=>`Fabrication de votre email — ${e} s. Le premier aperçu de la journée demande jusqu’à 90 s : il est rendu pour de vrai, pas simulé. Vous pouvez laisser la fenêtre ouverte.`,alertTestWait:e=>`Envoi en cours — ${e} s. L’email est d’abord fabriqué, puis expédié dans votre boîte. Ne refermez pas la fenêtre.`,csMoved:(e,a)=>`${e} → ${a} · la ligne rejoint l’onglet correspondant.`,sinceLabel:e=>e?`nouvelles depuis votre visite du ${e}`:"nouvelles depuis votre dernière visite",sinceChip:"nouvelles",sinceSince:e=>`depuis le ${e}`,alertSaving:"Enregistrement…",alertSavedShort:"✓ Enregistré",alertReadOnly:"Vue de démonstration : ces réglages sont en lecture seule.",alertWeeklySub:"Un email par semaine : le bilan de la semaine et ce que votre thèse a appris de vos décisions.",alertWeeklyOn:"📬 Recevoir votre bilan de la semaine",alertWeeklyWhen:"Jour et heure d’envoi (Paris)",alertDow:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],alertLoadError:"Impossible de charger vos préférences.",alertThrottled:"Trop vite — attendez quelques secondes et refaites le réglage.",alertInactive:"Votre accès n’est pas encore actif — parlons-en.",alertNoLead:"Destinataire à définir avec nous.",exportViewTitle:"CSV de la vue filtrée",exportViewDesc:e=>`Les ${e} lignes de votre sélection actuelle — onglet, facettes, recherche et fenêtre comprises. Séparateur « ; », prêt pour Excel.`,exportViewBtn:"Télécharger",exportViewDone:e=>`${e} ligne${e>1?"s":""} exportée${e>1?"s":""}`,printTitle:"Imprimer la sélection",printDesc:e=>`Les ${e} lignes à l'écran, en A4 : pour qui, à quelle date, l'entonnoir chiffré, puis la liste. La carte, les filtres et les boutons ne sont pas imprimés.`,printBtn:"Imprimer",exportViewHead:"Société|Statut|Verdict Stan|Score|Pays|Secteur|Étape post-OUI|Contact|Email|Lien mémo|Date|Raison",tourStart:"Lancer le guide pas à pas",tourIntro:"La visite guidée couvre toute la page de A à Z, sur la vraie page : chaque étape éclaire l’endroit exact — de votre thèse à votre alerte email.",tourStep:(e,a)=>`Étape ${e}/${a}`,tourPrev:"← Précédent",tourNext:"Suivant →",tourDone:"Terminer",tourClose:"Fermer",tourPlayTitle:"Visite guidée",ahaATitle1:"1 dossier attend votre décision",ahaATitleN:e=>`${e} dossiers attendent votre décision`,ahaABody:"OUI = on prépare l’approche ; NON = on affine le tir.",ahaABtn:"Trancher maintenant →",ahaBTitle:"Un mémo complet vous attend",ahaBBody:e=>`${e} a déjà son mémo d’analyse — lisible en 3 minutes.`,ahaBBtn:"Ouvrir le mémo →",ahaRetTitle:e=>e===1?"1 société retenue vous attend":`${e} sociétés retenues vous attendent`,ahaRetBody:"Le tri de Stan est fait — chaque retenue a sa fiche, sa carte et son signal.",ahaRetBtn:"Voir les sociétés retenues →",ahaEvalTitle:e=>e===1?"1 société attend votre évaluation":`${e} sociétés attendent votre évaluation`,ahaEvalBody:"Rien n’est encore retenu : c’est la première pile à dérouler. Une société à la fois, Stan fait le crible.",ahaEvalBtn:"Ouvrir la pile à évaluer →",loadMsgs:["Réveil des moteurs de sourcing…","Chargement de vos cibles…","Les cartes et les signaux arrivent…","Tri selon votre thèse…","Encore un instant — le premier chargement est le plus long."],ahaCTitle:"Vos premières cibles sont là",ahaCBody:"Dites-nous si ça vise juste — chaque retour affine la machine.",ahaCBtn:"Voir mes critères →",howto:[["**Réglez votre ciblage.** Ouvrez « Vos critères » : c’est votre thèse — ce que vous cherchez, ce que vous écartez. Corrigez-la en langage naturel dès que quelque chose cloche ; le sourcing du lendemain matin s’y réaligne tout seul.","crit"],["**Sourcez un maximum de cibles.** Évaluez une société en collant son nom ou son site — ou une liste entière —, et regardez vos moteurs ratisser le web avec vos réglages.","eval"],["**Faites avancer chaque cible dans le tunnel, de gauche à droite** — Évaluées › Retenues › Analysées › À trancher › Validées › Écartées. Sur chaque carte, « Votre statut » la classe en un clic ; votre note « pourquoi » reste visible. Les 👍/👎 ne classent jamais : ils affinent votre thèse.","tab1"],["**Tranchez les « À trancher ».** Stan vous laisse le dernier mot : OUI (Validée) ou NON (Écartée), avec un mot sur le pourquoi.","tab3"],["**Comprenez comment Stan classe vos cibles.** Votre statut prime toujours sur le verdict de Stan. Le pont entre les deux est expliqué dans « Vos critères » : Retenu ↔ MATCH, Analysé ↔ CONSIDER · MONITOR, À trancher ↔ CALL, Écarté ↔ NO MATCH · PASS…","crit"],["**Concentrez-vous sur les Validées** — et menez chaque dossier jusqu’au bout du closing !","tab4"],["**Faites sortir tout ça de la page.** Le bouton 🔌 la branche sur vos outils : envoyer vos cibles dans votre séquence d’emailing, créer les fiches dans votre CRM, enrichir les dossiers que vous y avez déjà.","plug"],["**Ne revenez que si ça vaut le coup.** Le bouton 🔔 règle deux emails : le quotidien des dossiers à trancher, et le bilan de la semaine.","alert"]],fhintLive:"Ce qui bouge en ce moment sur votre marché — cliquez une vignette pour ouvrir la source.",fhintGoal:"Ce que les moteurs ont sourcé au dernier passage, et ce qu’il reste à évaluer.",fhintGoalAt:e=>`Dernier passage des moteurs : **${e}**.
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
· Un mémo = **1 crédit**, une société à la fois : rien ne part jamais en lot.`,tourToday:"ce matin",tourNoRun:"aucun passage enregistré",tourT:{ident:"Le bandeau de votre fonds",cover:"Votre couverture du marché",engine:"Le moteur de mémos",live:"Le direct",goal:"Le dernier sourcing",funnel:"Le tunnel",tuto:"L’étape en cours",demand:"Évaluer une société",chips:"Les statuts, sur la ligne",dec:"Pourquoi cette décision",memo:"Le mémo détaillé",status:"Votre statut",learn:"Vos 👍 / 👎",tools:"Brancher vos outils",exportT:"Exporter en CSV",alerts:"Vos alertes email",crit:"Le paramétrage de Stan"},fhintExport:"Sortez vos cibles au format CSV — la sélection courante, avec ses colonnes, prête pour votre tableur ou votre CRM.",fhintAlerts:"Réglez ce qui vous arrive par email : le brief du matin, le bilan de la semaine, et l’alerte quand un mémo est prêt.",csLabel:"Votre statut :",csKept:"Retenu",csAnalysed:"Analysé",csPending:"À trancher",csValidated:"Validé",csOut:"Écarté",csYes:"✓ Oui",csNo:"✗ Non",csSaved:"✓ enreg.",csNoteSaved:"note ajoutée ✓",csNoteOk:"OK",csNotePh:"Pourquoi ? (une ligne)",csAnaConfirm:"Aucun mémo sur ce dossier — le passer en Analysé quand même ?",whySend:"Envoyer",whyYesPh:"Pourquoi ce OUI ? (une ligne — ça affine votre thèse)",whyNoPh:"Pourquoi ce NON ? (une ligne — ça affine votre thèse)",stgLabel:"Votre avancement :",stg:[["todo","○ À faire"],["sent","✉ Contactée"],["replied","💬 A répondu"],["meeting","🤝 RDV"],["loi","📄 LOI"],["signed","✅ Signée"],["lost","✖ Perdue"]],j4Badge:e=>`⏰ Sans réponse depuis ${e} j — relancer ?`,actRepeche:"↩ Repêcher",actErr:"Envoi impossible — réessayez dans un instant.",actNotPersisted:"Impossible d’enregistrer ce statut sur ce dossier.",decidedYes:e=>`${e} validée — place à l’approche`,decidedNo:e=>`${e} écartée`,repeched:e=>`${e} repêchée — de retour dans Retenues`,critHypTitle:"Notre hypothèse sur votre stratégie",critHypSub:"Toute la sélection en découle. Si elle est à côté, corrigez-la ci-dessous — la recherche est réalignée et vous recevez une sélection corrigée.",critProfilsTitle:"Vos profils de cibles",critProfilsSub:"Les familles de cibles que la machine traque en continu — chaque profil se déplie.",critLookFor:"Ce que nous recherchons",critRuleOut:"Ce que nous écartons",critGateTitle:"Le crible de Stan — comment il décide Retenu / Écarté",critGateSub:"Chaque société est confrontée à ces critères. C’est à eux que renvoient les « STEP A, C… » des raisons affichées sur les lignes.",rubricTitle:"Comment Stan décide l’analyse (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Une fois retenu, Stan approfondit et tranche. Voici ce qui fait pencher la balance.",qvTitle:"Les verdicts de Stan — où va chaque dossier",qv:[["CALL PENDING","le choix n°1 de Stan : à trancher OUI/NON maintenant → onglet « À trancher »."],["CALL YES","vous avez tranché OUI — le dossier rejoint « Validées », place à l’approche."],["CALL NO","vous avez tranché NON — le dossier rejoint « Écartées »."],["CONSIDER","solide, mérite un regard plus attentif → onglet « Analysées »."],["MONITOR","à surveiller, pas prioritaire pour l’instant → onglet « Analysées »."],["PASS","non pertinent pour le moment → onglet « Écartées »."]],brTitle:"Le routage automatique — où le verdict de Stan envoie chaque dossier",br:[["Retenu","MATCH — retenue au sourcing, mémo à venir → onglet « Retenues »"],["Analysé","CONSIDER · MONITOR — mémo fait, pas de call → onglet « Analysées »"],["À trancher","CALL PENDING — Stan propose un call, votre OUI/NON est attendu → onglet « À trancher »"],["Validé","CALL YES — vous avez tranché OUI → onglet « Validées »"],["Écarté","NO MATCH · PASS · CALL NO — refus de Stan, ou votre NON sur un call → onglet « Écartées »"]],brNote:"Un CALL passe par 3 états : CALL PENDING (le mémo est TERMINÉ, Stan propose le call — votre décision est en attente) › CALL YES (vous validez) › CALL NO (vous écartez). PENDING ne veut jamais dire « en cours d’analyse » : l’analyse est déjà faite.",vt:{MATCH:"MATCH — retenu : correspond à vos critères.","NO MATCH":"NO MATCH — écarté par vos critères.","CALL PENDING":"CALL — le choix n°1 de Stan : à trancher OUI/NON maintenant.","CALL YES":"CALL YES — vous avez tranché OUI : le dossier rejoint « Validées ».","CALL NO":"CALL NO — vous avez tranché NON : le dossier rejoint « Écartées ».",CONSIDER:"CONSIDER — solide, mérite un regard plus attentif.",MONITOR:"MONITOR — à surveiller, pas prioritaire pour l’instant.",PASS:"PASS — non pertinent pour le moment."},vKept:"Retenu",vOut:"Écarté",learnLine:"Comme sur Netflix, chaque 👍/👎 affine ce que Stan vous montre ensuite — vous jugez, il apprend.",learnLink:"Ajuster mes critères →",funnelHint:"Retrouvez ici toutes vos cibles sourcées automatiquement dans <b>évaluées</b> puis passez celles que vous souhaitez contacter dans <b>validées</b>.",fhintClose:"Masquer cette aide",queueTitle:"File de traitement",queueDone:(e,a)=>`<b>${e} / ${a}</b> mémos générés`,queueTomorrow:"À VENIR — ORDRE PROJETÉ, RECALCULÉ CHAQUE MATIN",queueToday:"ANALYSÉS AUJOURD’HUI",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugConfigured:"Configuré",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(e,a)=>`<b>${e}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:e=>`${e} passées au crible`,alertTitle:"Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"VOS ANGLES D’ACQUISITION",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarBusy:"🧬 Recherche…",similarNote:"Les retenues entrent dans votre liste au prochain rafraîchissement.",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:e=>`actualisée le ${e}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:e=>`actualisée le ${e}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:e=>`Onboarding lancé pour ${e} — suivez l’avancement dans le cockpit`,rsOpen:"🔎 Rechercher des sociétés à évaluer",rsUrlPh:"coller l’URL d’un article, d’une vidéo ou d’une note",rsTextPh:"Coller ici l’article complet",rsOr:"ou",rsGo:"🔎 Résumer et rechercher des sociétés",rsHint:"RÉSUMÉ · CARTE MENTALE · SOCIÉTÉS",rsRunning:"Lecture en cours…",rsRunningVid:"Transcription de la vidéo…",rsElapsed:e=>`${e} s`,rsNeed:"Collez une URL, ou le texte complet de l’article.",rsFound:e=>e?`${e} société${e>1?"s":""} trouvée${e>1?"s":""} dans ce contenu.`:"Aucune société nommée dans ce contenu.",rsLink:"Voir la page publiée ↗",rsPublishing:"Publication de la fiche…",rsPublishFail:"Fiche produite, page non publiée",rsTags:"TAGS",rsClose:"Fermer",rsMindmap:"CARTE MENTALE",rsSource:"Source ↗",rsSaving:"Enregistrement…",rsSaved:"✓ Enregistrée dans votre cockpit",rsSavedIn:e=>`✓ Enregistrée dans le carnet de ${e}`,rsSaveFail:"Fiche produite, NON enregistrée",rsArchOpen:e=>`voir les ${e} recherche${e>1?"s":""} déjà lancée${e>1?"s":""}`,rsArchTitle:"Recherches déjà lancées",rsArchBack:"← toutes les recherches",rsArchLoading:"Chargement…",rsArchEmpty:"Aucune recherche enregistrée pour l’instant.",rsArchGone:"Cette recherche n’est plus disponible.",rsRowCounts:(e,a)=>`${e} citée${e>1?"s":""} · ${a} à évaluer`,rsPub:"Publiée",rsPriv:"Non publiée",rsCited:"Sociétés citées",rsCitedHint:"Toutes les sociétés nommées dans ce contenu.",rsMatch:"Sociétés qui pourraient correspondre",rsMatchHint:"Suggérées à partir de la thèse du contenu — elles n’y sont pas forcément nommées.",rsEvalOne:"⚡ Évaluer",rsAddAll:e=>`＋ Ajouter les ${e} à la liste`,rsNoCompanies:"Aucune société dans ce contenu.",rsConclusion:"Ce que ça implique",rsCriteria:"Critères de sourcing",rsSources:"Pour creuser",groupEngine:"Moteur",groupNone:"Rien",browse:e=>`Parcourir les ${e}`,chainAll:e=>`Évaluer les ${e}`,chainHint:"selon votre thèse, l’une après l’autre",winMenu:"Période",datesShort:["Aujourd’hui","7 jours","30 jours","Tout"],colCompany:"SOCIÉTÉ & DESCRIPTION",grpCount:(e,a)=>`${e} à envoyer sur ${a} sourcées`,emptyTab:"AUCUNE CIBLE DANS CET ONGLET",emptyScope:"AUCUNE SOCIÉTÉ DANS CE PÉRIMÈTRE",contWorld:"Monde",evalGoOn:e=>`⚡ Évaluer ${e}`,chromeEval:"Évaluer",chromeFilt:"Filtres",chromeBoth:"Les deux",rowExtract:"🔎 Extraire les sociétés",toSendCtx:(e,a)=>`sur ${e} dans l'édition${a>0?` (${a} sans société identifiable)`:""}`,grpCard:"la carte du jour",grpMa:"Opérations M&A",grpLev:"Levées de fonds",grpNews:"Actualités",grpNom:"Actualités · Nominations",grpNewsOther:"Actualités · Autres",grpHire:"Actualités · Recrutements",edLabel:"dans l'édition du jour",edSplit:(e,a)=>`⚡ ${e} évaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} à explorer`:""}`},Yi={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Everything STAN ran through the screen on this window: every company judged against your criteria, kept or discarded automatically.","STAN kept these companies against your criteria, decisions justified. WE verify its picks — discard, validate, or launch an analysis on the uncertain ones.","STAN’s memos, reviewed by US: quantified synergies, argued verdict. Validate the ones to contact, set “to decide” where you hesitate.","YOUR move: the best targets, presented on Monday by your Corporate Developer. Call YES or NO — your yeses move to Validated.","Your YESES — the shortlist to contact. WE prepare the approach, or engage it on your behalf (Enterprise plan).","Discarded by STAN or by YOU. Every NO sharpens Stan’s criteria. Recover one anytime.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(e,a,r)=>`<b>${e} Stan CALL${e>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${r} awaiting answer.</b>`,morningThesis:(e,a,r)=>`This morning, <b>${e}</b> compan${e===1?"y":"ies"} screened by your engines`+(typeof r=="number"?`, <b>${r}</b> kept.`:".")+(a?` <b>${a}</b> awaiting your evaluation.`:' <span class="ok">All screened.</span>'),morningEnginesTitle:"Your engines are tuned to YOUR thesis: activity codes, countries, acquisition angles, exclusion criteria. Only the news watch starts from a sweep shared across funds — but every deal it surfaces is then screened against your criteria, and only enters here if it passes.",morningLast:(e,a,r)=>`Engines last ran on <b>${r}</b>: <b>${e}</b> compan${e===1?"y":"ies"} sourced.`+(a?` <b>${a}</b> still to screen.`:' <span class="ok">All screened.</span>'),morningEval:e=>`▶ Work through them (${e})`,identTitle:e=>`Targets for ${e}`,identCoverage:"MARKET COVERAGE",identCoverageOf:(e,a)=>`<b>${e}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"MEMO ENGINE",identPerDay:"memo/day",identPending:e=>`→ ${e} queued`,identPendingWait:"→ reading the queue…",identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Reverse sort order",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:e=>`Decision undone on ${e}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ YES",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:e=>`${e} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"SCREEN · MEMO",colCrible:"SCREEN",colMemo:"MEMO",colScore:"SCORE",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:e=>`Since Stan’s verdict: ${e} d`,waitChip:e=>`⏱ ${e} d`,densList:"LIST",densOpen:"OPEN",densLigne:"ROWS",densMaxi:"CARDS",unfoldAll:"Unfold all",foldAllLbl:"Fold all",foldArts:"Articles",zoomSrc:"Source",viewLink:"View article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Company website",viewSiteBusyHint:"Looking up the company website…",viewSrcHint:"Source article",viewLinkClose:"Close article",viewLinkTab:"Open in a tab",viewLinkHint:"Opens in a new window",zoomSimilar:"See similar",zoomInCockpit:"Isolate in the list",zoomArt:"Today's editorial",zoomEvalHint:"Screen against your thesis",zoomSimilarHint:"Same sector in the list",zoomIsolateHint:"Keep only this company",zoomNewsMark:"Edition note — opens on the right",zoomPulseEval:"evaluable",zoomPulseExplore:"to explore",zoomPulseArts:"news",doNews:"📰 News",zoomPulseEd:"in today’s article",zoomPulseBtn:"Today’s edition",zoomPulseWeek:"Last 7 days",zoomPulseWeekEd:"this week",doAll:"All",doEdito:"📖 Today's editorial",doBrief:"📖 Today's brief",doEval:"⚡ Evaluable",doExplore:"🔎 To explore",doBriefHint:"Show today's brief",doTodo:"⚡ To evaluate",doDone:"✓ Already evaluated",cdMemoTab:"📖 Memo",evalPickSite:"several sites share this name — open to check, then confirm the right one.",evalPickGo:"✓ This one",chainMemoGo:"⚡ Launch the memo (1 credit)",analyseConfirm:e=>`Launch ${e} analysis memo${e>1?"s":""}?

This uses ${e} memo credit${e>1?"s":""}. Companies move to "Analysed" or "To decide" once the memo is ready.`,sortBy:"Sort by",sortSig:"Signal",sortAmount:"Amount",sortAge:"Recency",sortName:"Name",sortCountry:"Country",sortStage:"Stage",sortCrible:"Screen",sortMemo:"Memo",sortScore:"Score",fMenu:"Filters",memoSynth:"SUMMARY",memoOpenFull:"📖 Read the full memo →",memoDeep:"⚡ Detailed memo",memoDeepHint:"For this file to decide, you can launch the detailed analysis: market study, competitive quadrant, scenarios.",memoDeepSent:e=>`Detailed memo launched on ${e} — ready in 35 to 40 minutes`,memoInstantSent:e=>`Analysis launched on ${e} — memo ready in ~15 minutes`,liveStrip:"Live analyses",liveBoot:"starting…",liveEnd:"done {t}",liveOpenQueue:"Open the queue",memoNone:"No memo for this file yet — launch the analysis.",creditsCap:"MEMO CREDITS",creditsToday:"today",creditsRecharge:"Top up →",creditsCost:e=>`−${e} credit${e>1?"s":""}`,creditsNone:"Out of credits — top up or wait for tomorrow 7am.",rechargeTitle:"Memo credits",rechargeHint:e=>`Your plan includes <b>${e} credits per day</b>, refilled every morning. Need more right now?`,rechargeNote:"Purchased credits never expire. They are used after your daily credits.",rechargeBuy:"Add",rechargeUnit:(e,a)=>`${e} credits — €${a}`,onbTag:"PRIVATE PREVIEW · READ ONLY",onbTitle:e=>`Your deal flow is ready — <b>${e} targets kept</b> by Stan`,onbSub:e=>`${e} companies screened against your thesis. The first ten rows are open; the rest unlocks in thirty minutes.`,onbSteps:[["Stan studied your online presence","Website, job posts, press — it inferred your acquisition angles."],["It screened the market","Every company checked against your criteria."],["It wrote memos","Quantified analyses, synergies, verdicts."],["Your turn to decide","Thirty minutes to tune your deal flow and unlock everything."]],onbCta:"Pick a slot →",lockbarText:"Let’s set up your dream deal flow in 30 minutes, with a Corporate Developer",lockbarContactBefore:"Alexandre — ",lockbarContactMid:" · ",lockbarCta:"Pick a slot",rdvHeading:"Let’s set up your ideal deal flow in 30 minutes",rdvSubBefore:"Pick a slot below, or reach your Corporate Development expert directly at ",rdvSubMid:" or by email at ",rdvCoFallback:"your company",rdvUnlockLabel:e=>`Unlock ${e}`,rdvUnlocks:e=>[["Access every target you kept","Full investment memos, synergies, contacts, approach angle."],["Acquisition strategy built with you","Hypothesis + acquisition strategy recalibrated live, with you."],["Let’s decide together on the targets you want","YES / NO, sourcing of similar companies, export and CRM sync."],["Your AI Corporate Developer is live",`Stan works for ${e} every morning — all you have to do is decide.`]],identRepub:"Republish the page now — re-renders it from what is already known. Free: no engine runs, and no model is called if your thesis has not changed.",identRepubDone:"Republish started — your numbers refresh in about thirty seconds. Reload the page to see them.",plugHow1:"In your tool (Make, Zapier, n8n, HubSpot, Pipedrive…), create a “webhook” trigger and copy the URL it gives you.",plugHow2:"Paste it below, Save, then Test: one sample message goes out to your tool right away.",plugHow3:"Done. Three moments trigger a send: you validate a target, you move it a stage, or an approach is prepared.",plugExT:"Exactly what your tool receives",plugExResult:"In your CRM you get one row per validated company: its name, your note, Stan’s score, its website and the memo link.",plugApiT:"One company at a time, from a script or Make",plugQuota:"This shortcut is capped at 10 companies per day per link — the normal path is the page’s evaluation bar.",plugFeeds:"The JSON, CSV, Google Sheets and Excel feeds live in the 📥 Export button next door — they are not repeated here.",plugTokenNote:"⚠️ These links carry this page’s access key: wherever you paste them, they open your targets. Only put them in your own tools.",plugDoc:"Full documentation → proplace.co/api/",csNone:"Status",csAnaNeedMemo:"Moving to “Analysed” needs a memo.",csAnaRun:"⚡ Run the memo (1 credit)",csAnaAnyway:"Mark it anyway",qOffer:"YOUR PLAN",qDelay:"verdict within",qRate:e=>`${e} memo${e>1?"s":""} a day`,qManual:e=>`${e} memo a day, on request`,qPaused:"no automatic memo",qManualSet:"rate set by hand",qEta:(e,a,r)=>`At this rate (${a}/day), ${e} memo${e>1?"s":""} left to write — the whole queue is processed in ${r} day${r>1?"s":""}.`,qEtaPaused:"Rate at zero: nothing goes out. Activate a plan to project a date.",qEtaDone:"The whole queue is already analysed.",qLate:(e,a)=>`The “${e}” promise cannot be met: it would take more than the ${a} memos a day cap.`,qRunning:"In progress",qUpNext:e=>`Coming up — ${e} compan${e>1?"ies":"y"} in the queue, in pick order`,qUpNextWait:"Coming up — reading the queue…",qFileWait:"Reading the queue — a few seconds.",qHedge:"Projected order, recomputed every morning. A fresh lead landing overnight goes first.",qFresh:"fresh",qLater:"later",qVerdictsT:"Stan’s verdicts — where each file goes",qVerdicts:[["CALL","his top pick: decide YES or NO → “To decide” tab."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],covHowT:"Where does this number come from?",covTotal:"Market total",covColCode:"Code · country",covColN:"Companies",covColSource:"Source",covWide:e=>`${e} not published — widened to its parent code`,covMissing:"no data published",covRejected:e=>`Codes dropped, no companies found: ${e}.`,covComputedAt:e=>`computed on ${e}`,filterOff:"Remove this filter",fSelected:"selected",funScreened:(e,a)=>`companies screened${e?a?` from ${e} to ${a}`:` since ${e}`:""}`,funKept:"kept as serious targets",funAnalyzed:"analysed in depth",funShown:"published on your page, all filters cleared",sigStripMore:e=>`+ see the other ${e}`,boxCollapse:"Collapse",boxExpand:"Expand",memoReadHere:"📄 Read the memo here",memoHideHere:"▴ Collapse the memo",sigChipTitle:(e,a)=>`Flagged ${e} · ${a}`,funPerWindow:(e,a)=>`From ${e} to ${a}`,funPerAll:"Since the start",funOfMarket:(e,a)=>`of ~${e} companies on YOUR market, i.e. ${a} %`,funScope:"Sourcing from your thesis only — your activity codes, your countries, your angles. No company from another fund is counted here.",funToday:e=>`incl. ${e} today`,actTitle:"Last 30 days of activity",actScreened:"screened",actKept:"kept",actToday:"today",fstatsShow:"Show the last 30 days of activity",fstatsHide:"Hide activity",sinceTitle:(e,a)=>`${e} new target${e>1?"s":""} since your last visit (${a})`,sinceSub:"arrived since your last visit — start here",sinceMore:e=>`+${e} more`,sinceOut:e=>`${e} left the list`,morningDock:e=>e?`${e} screened this morning`:"Morning screen",morningDockTitle:"See the companies screened today — whatever the verdict.",sinceDock:e=>`${e} new`,sigDock:e=>`${e} signal${e>1?"s":""}`,identSyncConfirm:"Relaunch sourcing now? An engine pass takes a few minutes.",plugAutoOn:e=>`⚡ Automatic sending ACTIVE (${e}) — every target you validate goes into the sequence on its own.`,plugAutoOff:"Automatic sending off — validating a target sends it nowhere.",plugCrm:"Create the records in my CRM",plugCrmHint:"Paste your tool’s webhook URL: every decision lands there right away.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Save",plugSaved:"Webhook saved",plugTest:"Test",plugTested:"Test sent",plugTestThrottled:"Already tested less than 5s ago — nothing was sent.",plugRemove:"Remove",plugRemoved:"Webhook removed",plugMcp:"Claude & AI (MCP)",plugBulk:"Contact my targets",plugBulkHint:"See who would go out first: the preview contacts nobody.",plugBulkTabs:[["valides","Validated"],["call","To decide"],["retenus","Kept"]],plugBulkPreview:"👁 Preview",bulkArm:"📤 Send for real",bulkNoDest:"No destination saved: set up your tool above first.",bulkScope:"What goes out is the whole server-side tab — not the filtered view on screen.",bulkWarn:(e,a)=>`You are about to contact ${e} compan${e>1?"ies":"y"} via ${a}. This cannot be undone, and the server does not check whether they were already contacted.`,bulkConfirm:e=>`Yes, send via ${e}`,bulkCancel:"Cancel",bulkSending:"Sending…",bulkDone:(e,a,r)=>`${e} compan${e>1?"ies":"y"} sent. ${a} reachable on LinkedIn only, ${r} with no email.`,bulkNone:"No company had an email: nothing was sent.",bulkLocked:(e,a)=>`Sent on ${e} — ${a} compan${a>1?"ies":"y"}. Next send available in 24 h.`,bulkPreviewFirst:"Run the preview first: it says exactly who would go out.",cdConviction:"Conviction",cdAnalyse:"Analysis",cdSociete:"Company",cdContact:"Contact",cdSuivi:"Follow-up",cdCrible:"screening",cdMemo:e=>e?`after ${e} memo`:"after memo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict on",cdSector:"Sector",cdStage:"Stage",cdCountry:"Where",cdSite:"Website",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Detected on",cdName:"Decision-maker",cdEmail:"Email",cdCeoStatus:"Your decision",cdEngagement:"Engagement",qaTitle:"Describe this company",qaHint:"Reads its website, then four blocks: who it serves, what it sells, how it makes money, and what to remember. No verdict — the screening already decided.",qaRun:"📄 Describe",qaBusy:"Reading the website…",qaVP:"Who, and for what problem",qaProduct:"What it sells",qaModel:"How it makes money",qaSummary:"Takeaway",qaSources:e=>`${e} page${e>1?"s":""} read`,qaQuota:"Daily cap reached: try again tomorrow.",qaEmpty:"The website says nothing usable — nothing was invented.",dsBtn:"🗂 Committee pack",dsHint:"One A4 per company: the screening verdict and its reason, the identity, the analysis when it was run, and your decision. No financial figures — we receive none.",dsTitle:e=>`Committee pack — ${e} compan${e>1?"ies":"y"}`,dsCap:(e,a)=>`The first ${e} of ${a}: a committee will not read ${a} pages.`,dsWhy:"Why this company is in front of you",dsAnalysis:"What it does",dsDecision:"Your decision",dsEmpty:"No company in the current selection.",dsFoot:e=>`Selection by Proplace for ${e} — internal document, do not circulate.`,covFunnel:"Your market, screened",covScreened:e=>`${e} companies screened`,covOf:e=>`out of ~${e} relevant companies`,covNoEst:"Your addressable market is not sized yet: coverage will show as soon as it is.",covPace:e=>`${e} companies screened per day`,covEta:e=>e<=0?"Your market is fully covered.":e<60?`Full coverage in ~${e} days at this pace.`:`Full coverage in ~${Math.round(e/30)} months at this pace.`,covRate:"Analysis pace",covRateHint:"How many kept companies get a reasoned verdict each day. At zero, analysis is paused.",covRateNow:e=>e<=0?"Paused":`${e} per day`,covKept:"kept",covAna:"analysed",covScopeAll:"worldwide",covShown:"shown here",bulkReplayed:"This send was already recorded: nothing went out again. Your targets were contacted once.",bulkPending:"The previous send is still running: nothing was sent again.",plugBulkResult:(e,a,r)=>`${e} would go by email · ${a} by LinkedIn · ${r} with no contact.`,memoAlertTitle:"Your memo alert",memoAlertSub:"Get an email as soon as one of your fund’s memos is finalised — with its direct link.",memoAlertToggle:"Send me every finished memo",memoAlertEmail:"Recipient",memoAlertSaved:"Saved ✓",memoAlertErr:"Could not save — try again",memoAlertSections:"Sections of the email",memoAlertSec:[["swot","SWOT"],["action","Action plan"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Stan’s verdict"]],memoAlertPreview:"👁 Preview",memoAlertBtn:"Your memo alert",alertTabDaily:"Daily",alertTabWeekly:"Weekly",alertTabMarket:"Market",alertSections:"Sections of the email",alertSec:[["pending","Files to decide on"],["stats","Your key numbers"],["autonomous","Stan’s automatic decisions"],["market","Market analysis"],["sourcing","Your sourcing of the day"]],alertSecSlow:"(slower to generate)",alertSecNote:"Unticking the market analysis makes the preview instant.",alertPreview:"👁 Preview today’s email",alertPreviewWeekly:"👁 Preview the weekly",alertSubject:"Subject:",alertPreviewBusy:"Preview being generated, try again in a few seconds.",alertPreviewRetry:e=>`Generating — new attempt in ${e}s…`,alertPreviewFail:"Preview unavailable right now — untick “Market analysis” to get it immediately.",alertPreviewEmpty:"Right now: nothing to decide on — the email will not go out.",alertTest:"✉ Send me a test",alertTestOk:e=>`✓ Sent to ${e} — check your spam/promotions too.`,alertTestHint:"Does not affect the daily send.",alertBtnPrevBusy:"⏳ Building…",alertBtnTestBusy:"⏳ Sending…",alertPreviewWait:e=>`Building your email — ${e}s. The first preview of the day takes up to 90s: it is rendered for real, not simulated. You can leave this window open.`,alertTestWait:e=>`Sending — ${e}s. The email is built first, then delivered to your inbox. Do not close this window.`,csMoved:(e,a)=>`${e} → ${a} · the row moves to the matching tab.`,sinceLabel:e=>e?`new since your visit of ${e}`:"new since your last visit",sinceChip:"new",sinceSince:e=>`since ${e}`,alertSaving:"Saving…",alertSavedShort:"✓ Saved",alertReadOnly:"Demo view: these settings are read-only.",alertWeeklySub:"One email a week: the week in review and what your thesis learned from your decisions.",alertWeeklyOn:"📬 Receive your week in review",alertWeeklyWhen:"Day and time (Paris)",alertDow:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],alertLoadError:"Could not load your preferences.",alertThrottled:"Too fast — wait a few seconds and set it again.",alertInactive:"Your access is not active yet — let’s talk about it.",alertNoLead:"Recipient to be set with us.",exportViewTitle:"CSV of the filtered view",exportViewDesc:e=>`The ${e} rows of your current selection — tab, facets, search and window included. Semicolon separated, ready for Excel.`,exportViewBtn:"Download",exportViewDone:e=>`${e} row${e>1?"s":""} exported`,printTitle:"Print the selection",printDesc:e=>`The ${e} rows on screen, on A4: who it is for, as of when, the funnel figures, then the list. The map, filters and buttons are not printed.`,printBtn:"Print",exportViewHead:"Company|Status|Stan verdict|Score|Country|Sector|Post-YES stage|Contact|Email|Memo link|Date|Reason",tourStart:"Start the step-by-step guide",tourIntro:"The guided tour covers the whole page A to Z, on the live page: each step spotlights the exact spot — from your thesis to your email alert.",tourStep:(e,a)=>`Step ${e}/${a}`,tourPrev:"← Previous",tourNext:"Next →",tourDone:"Finish",tourClose:"Close",tourPlayTitle:"Guided tour",ahaATitle1:"1 file awaits your decision",ahaATitleN:e=>`${e} files await your decision`,ahaABody:"YES = we prepare the approach; NO = we sharpen the aim.",ahaABtn:"Decide now →",ahaBTitle:"A full memo is waiting for you",ahaBBody:e=>`${e} already has its analysis memo — a 3-minute read.`,ahaBBtn:"Open the memo →",ahaRetTitle:e=>e===1?"1 kept company is waiting for you":`${e} kept companies are waiting for you`,ahaRetBody:"Stan’s sorting is done — every kept company has its sheet, card and signal.",ahaRetBtn:"See the kept companies →",ahaEvalTitle:e=>e===1?"1 company is waiting for your evaluation":`${e} companies are waiting for your evaluation`,ahaEvalBody:"Nothing is kept yet: this is the first pile to work through. One company at a time, Stan does the screening.",ahaEvalBtn:"Open the pile to evaluate →",loadMsgs:["Waking up the sourcing engines…","Loading your targets…","Cards and signals are coming…","Sorting by your thesis…","One more moment — the first load is the longest."],ahaCTitle:"Your first targets are here",ahaCBody:"Tell us if the aim is right — every signal sharpens the machine.",ahaCBtn:"See my criteria →",howto:[["**Set your targeting.** Open “Your criteria”: it’s your thesis — what you look for and what you rule out. Fix it in plain language whenever something is off; the next morning’s sourcing realigns on its own.","crit"],["**Source as many targets as you can.** Evaluate a company by pasting its name or website — or a whole list — and watch your engines comb the web with your settings.","eval"],["**Move every target through the funnel, left to right** — Evaluated › Kept › Analysed › To decide › Validated › Ruled out. On each card, “Your status” files it in one click; your “why” note stays visible. The 👍/👎 never file anything: they sharpen your thesis.","tab1"],["**Settle the “To decide”.** Stan leaves you the final word: YES (Validated) or NO (Ruled out), with a word on the why.","tab3"],["**Understand how Stan sorts your targets.** Your status always overrides Stan’s verdict. The bridge between the two is explained in “Your criteria”: Kept ↔ MATCH, Analysed ↔ CONSIDER · MONITOR, To decide ↔ CALL, Ruled out ↔ NO MATCH · PASS…","crit"],["**Focus on the Validated** — and take every file all the way to closing!","tab4"],["**Push all of this out of the page.** The 🔌 button wires it into your tools: send your targets to your emailing sequence, create the records in your CRM, enrich the files you already have there.","plug"],["**Only come back when it’s worth it.** The 🔔 button sets two emails: the daily one for files to decide on, and the week in review.","alert"]],fhintLive:"What is moving on your market right now — click a tile to open the source.",fhintGoal:"What the engines sourced on the last run, and what is left to evaluate.",fhintGoalAt:e=>`Engines last ran: **${e}**.
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
· One memo = **1 credit**, one company at a time: nothing ever goes out in bulk.`,tourToday:"this morning",tourNoRun:"no run recorded",tourT:{ident:"Your fund’s header",cover:"Your market coverage",engine:"The memo engine",live:"Live",goal:"The last sourcing",funnel:"The funnel",tuto:"The current step",demand:"Evaluate a company",chips:"Statuses, on the row",dec:"Why this decision",memo:"The detailed memo",status:"Your status",learn:"Your 👍 / 👎",tools:"Connect your tools",exportT:"Export to CSV",alerts:"Your email alerts",crit:"Stan’s settings"},fhintExport:"Take your targets out as CSV — the current selection with its columns, ready for your spreadsheet or CRM.",fhintAlerts:"Set what reaches your inbox: the morning brief, the weekly recap, and the alert when a memo is ready.",csLabel:"Your status:",csKept:"Kept",csAnalysed:"Analysed",csPending:"To decide",csValidated:"Validated",csOut:"Ruled out",csYes:"✓ Yes",csNo:"✗ No",csSaved:"✓ saved",csNoteSaved:"note added ✓",csNoteOk:"OK",csNotePh:"Why? (one line)",csAnaConfirm:"No memo on this file — mark it Analysed anyway?",whySend:"Send",whyYesPh:"Why this YES? (one line — it sharpens your thesis)",whyNoPh:"Why this NO? (one line — it sharpens your thesis)",stgLabel:"Your progress:",stg:[["todo","○ To do"],["sent","✉ Contacted"],["replied","💬 Replied"],["meeting","🤝 Meeting"],["loi","📄 LOI"],["signed","✅ Signed"],["lost","✖ Lost"]],j4Badge:e=>`⏰ No reply for ${e} days — follow up?`,actRepeche:"↩ Recover",actErr:"Could not save — try again in a moment.",actNotPersisted:"This status cannot be saved on this record.",decidedYes:e=>`${e} validated — on to the approach`,decidedNo:e=>`${e} ruled out`,repeched:e=>`${e} recovered — back in Kept`,critHypTitle:"Our hypothesis about your strategy",critHypSub:"The whole selection follows from it. If it is off, correct it below — the search is realigned and you get a corrected selection.",critProfilsTitle:"Your target profiles",critProfilsSub:"The families of targets the machine tracks continuously — each profile unfolds.",critLookFor:"What we look for",critRuleOut:"What we rule out",critGateTitle:"Stan’s screen — how it decides Kept / Ruled out",critGateSub:"Every company is checked against these criteria. They are what the “STEP A, C…” in the reasons on each row refer to.",rubricTitle:"How Stan decides the analysis (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Once kept, Stan digs deeper and rules. Here’s what tips the balance.",qvTitle:"Stan’s verdicts — where each file goes",qv:[["CALL PENDING","Stan’s top pick: decide YES/NO now → “To decide” tab."],["CALL YES","you decided YES — the file joins “Validated”, on to the approach."],["CALL NO","you decided NO — the file joins “Ruled out”."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],brTitle:"Automatic routing — where Stan’s verdict sends each file",br:[["Kept","MATCH — kept at sourcing, memo to come → “Kept” tab"],["Analysed","CONSIDER · MONITOR — memo done, no call → “Analysed” tab"],["To decide","CALL PENDING — Stan proposes a call, your YES/NO is awaited → “To decide” tab"],["Validated","CALL YES — you ruled YES → “Validated” tab"],["Ruled out","NO MATCH · PASS · CALL NO — Stan’s refusal, or your NO on a call → “Ruled out” tab"]],brNote:"A CALL goes through 3 states: CALL PENDING (the memo is DONE, Stan proposes the call — your decision is awaited) › CALL YES (you validate) › CALL NO (you rule out). PENDING never means “being analysed”: the analysis is already done.",vt:{MATCH:"MATCH — kept: it fits your criteria.","NO MATCH":"NO MATCH — ruled out by your criteria.","CALL PENDING":"CALL — Stan’s top pick: worth a YES/NO decision now.","CALL YES":"CALL YES — you ruled YES: the file joins “Validated”.","CALL NO":"CALL NO — you ruled NO: the file joins “Ruled out”.",CONSIDER:"CONSIDER — solid, worth a closer look.",MONITOR:"MONITOR — keep an eye on it, not a priority yet.",PASS:"PASS — not relevant right now."},vKept:"Kept",vOut:"Ruled out",learnLine:"Like Netflix, every 👍/👎 sharpens what Stan shows you next — you judge, it learns.",learnLink:"Tune my criteria →",funnelHint:"Find here all your automatically sourced targets in <b>evaluated</b>, then move the ones you want to contact into <b>validated</b>.",fhintClose:"Hide this hint",queueTitle:"Processing queue",queueDone:(e,a)=>`<b>${e} / ${a}</b> memos generated`,queueTomorrow:"UP NEXT — PROJECTED ORDER, RECOMPUTED EVERY MORNING",queueToday:"ANALYZED TODAY",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugConfigured:"Configured",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(e,a)=>`<b>${e}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:e=>`${e} screened`,alertTitle:"Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"YOUR ACQUISITION ANGLES",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarBusy:"🧬 Searching…",similarNote:"The kept ones enter your list at the next refresh.",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:e=>`updated ${e}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:e=>`updated ${e}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:e=>`Onboarding launched for ${e} — track progress in the cockpit`,rsOpen:"🔎 Find companies to evaluate",rsUrlPh:"paste the URL of an article, a video or a note",rsTextPh:"Paste the full article here",rsOr:"or",rsGo:"🔎 Summarize and find companies",rsHint:"SUMMARY · MIND MAP · COMPANIES",rsRunning:"Reading…",rsRunningVid:"Transcribing the video…",rsElapsed:e=>`${e}s`,rsNeed:"Paste a URL, or the full text of the article.",rsFound:e=>e?`${e} compan${e>1?"ies":"y"} found in this content.`:"No company named in this content.",rsLink:"See the published page ↗",rsPublishing:"Publishing the note…",rsPublishFail:"Note produced, page not published",rsTags:"TAGS",rsClose:"Close",rsMindmap:"MIND MAP",rsSource:"Source ↗",rsSaving:"Saving…",rsSaved:"✓ Saved to your cockpit",rsSavedIn:e=>`✓ Saved to ${e}'s notebook`,rsSaveFail:"Note produced, NOT saved",rsArchOpen:e=>`see the ${e} research run${e>1?"s":""} already launched`,rsArchTitle:"Research already launched",rsArchBack:"← all research runs",rsArchLoading:"Loading…",rsArchEmpty:"No research saved yet.",rsArchGone:"This research is no longer available.",rsRowCounts:(e,a)=>`${e} mentioned · ${a} to evaluate`,rsPub:"Published",rsPriv:"Not published",rsCited:"Companies mentioned",rsCitedHint:"Every company named in this content.",rsMatch:"Companies that could match",rsMatchHint:"Suggested from the content’s thesis — they are not necessarily named in it.",rsEvalOne:"⚡ Evaluate",rsAddAll:e=>`＋ Add all ${e} to the list`,rsNoCompanies:"No company in this content.",rsConclusion:"What it implies",rsCriteria:"Sourcing criteria",rsSources:"Dig deeper",groupEngine:"Engine",groupNone:"None",browse:e=>`Browse the ${e}`,chainAll:e=>`Evaluate the ${e}`,chainHint:"against your thesis, one after another",winMenu:"Period",datesShort:["Today","7 days","30 days","All"],colCompany:"COMPANY & DESCRIPTION",grpCount:(e,a)=>`${e} to send out of ${a} sourced`,emptyTab:"NO TARGET IN THIS TAB",emptyScope:"NO COMPANY IN THIS SCOPE",contWorld:"World",evalGoOn:e=>`⚡ Evaluate ${e}`,chromeEval:"Evaluate",chromeFilt:"Filters",chromeBoth:"Both",rowExtract:"🔎 Extract companies",toSendCtx:(e,a)=>`of ${e} in the edition${a>0?` (${a} without an identifiable company)`:""}`,grpCard:"today's card",grpMa:"M&A deals",grpLev:"Fundraising",grpNews:"News",grpNom:"News · Appointments",grpNewsOther:"News · Other",grpHire:"News · Hiring",edLabel:"in today's edition",edSplit:(e,a)=>`⚡ ${e} evaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} to explore`:""}`},Ki={fr:{...Tn.fr,...Gi},en:{...Tn.en,...Yi}},Qi=`.atl2{
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
.atl2 .bulk .side .hint{white-space:nowrap}`,Ji=`
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
/* LE PAVÉ ROUGE « LIVE » REPREND TOUTE LA HAUTEUR (29/08). 'align-items:center'
   ci-dessus retire le 'stretch' par défaut du flex : mesuré sur la page servie,
   la barre faisait 44 px et le pavé 15 px — la hauteur de son seul texte, d'où
   l'impression d'un badge qui flotte au milieu (retour Antoine). On rend le
   stretch à CE bloc, sans toucher aux autres enfants (la puce « Tout », le
   bouton Édito) qui portent, eux, leur propre hauteur. */
.atl2 .live-stack--cibles .ticker .lbl{align-self:stretch}
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
.atl2.ops .demand.pair,.atl2.cibles .demand.pair{background:#DFF3E6;
  box-shadow:inset 4px 0 0 #0E8A4F;outline:none}
.atl2.ops .row.sel .rnm,.atl2.cibles .row.sel .rnm{font-weight:750;color:#0A6B3D}
.atl2.ops .row.sel .cell .rev,.atl2.cibles .row.sel .cell .rev{box-shadow:none}
.atl2.ops .demand.pair .dfield input,.atl2.cibles .demand.pair .dfield input{color:#0A6B3D;font-weight:700}
.atl2.ops .row.sel.echo,.atl2.ops .demand.pair.echo,
.atl2.cibles .row.sel.echo,.atl2.cibles .demand.pair.echo{
  animation:pp-echo .85s ease}
.atl2.cibles .row,.atl2.cibles .dcard{scroll-margin-top:calc(var(--pp-gap,60px) + 44px + var(--demand-h,56px) + var(--listhead-h,52px) + 8px)}
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
/* ⚠️ …MAIS CES 62 % SONT CEUX DE LA PAGE, et en mode deux colonnes le bandeau
   vit DANS .desk-list — qui les porte déjà (.desk = 1fr | 38 %). Ils se
   multipliaient : 0,62 × 0,62 ≈ 38 % de la page. Mesuré le 27/08 à cinq
   largeurs : colonne 682/794/893/1190/1587 px pour un bandeau de
   402/492/554/738/984 px, soit 280 à 603 px de bandeau COLLANT TRANSPARENT à
   droite, où la liste défilait à découvert sous les filtres. La colonne fait
   déjà la largeur : le bandeau la prend toute. Même correction que /cibles
   (« Plus de 62% page qui recouvrait l'édito »). Le cas SANS colonne
   (!split, listhead enfant de .app) garde ses 62 % — c'est là qu'ils
   protègent le Radar. */
body.pp-desk .atl2.ops .desk-list .listhead,
body.pp-desk .atl2.ops .desk-list .listhead.mapoff{width:100%;max-width:none}
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
.atl2.ops .zoom-body .ed-box{margin:0 0 40px;padding:0;background:none;border:0}
.atl2.ops .zoom-body .ed-box:first-child > h2{margin-top:0}
.atl2.ops .zoom-body .ed-decrypt{margin:16px 0 0}
.atl2.ops .zoom-body .ed-box:not(:has(.art-allops li, .ed-decrypt, .opcard, .ppcard, h4)){display:none}
.atl2.ops .zoom-body .art-allops{display:block;margin:0}
.atl2.ops .zoom-body .art-allops ul{list-style:none;margin:0;padding:0;border:0;background:none}
.atl2.ops .zoom-body .opcard{margin:16px 0 28px}
.atl2.ops .zoom-body .mk-lead{margin:0 0 28px;font-size:15px;line-height:1.75;
  color:#5B6B7F;max-width:62ch}
.atl2.ops .zoom-body .mk-empty{display:none}
.atl2.ops .zoom-body .mk-sec:has(.mk-empty):not(:has(.mk-op,.ed-op,.acq-land,.art-allops li)){display:none}
.atl2.ops .zoom-body .mk-sec{margin:0 0 40px}
.atl2.ops .zoom-body .mk-op{padding:18px 0 20px;border-bottom:1px solid #EEF2F6}
.atl2.ops .zoom-body .mk-op-t{font-size:15.5px;font-weight:700;letter-spacing:-.02em;
  line-height:1.3}
.atl2.ops .zoom-body .mk-op-m{margin-top:8px;font-family:inherit;font-size:13px;
  letter-spacing:0;color:#64748B}
.atl2.ops .zoom-body .mk-op-m a{color:#0A6B3D}
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
  grid-template-columns:11px 28px minmax(0,1fr) minmax(92px,120px) max-content!important}
.atl2.cibles .desk-list .c-amt,
.atl2.cibles .desk-list .c-stade,
.atl2.cibles .desk-list .c-sig,
.atl2.cibles .desk-list .c-sc,
.atl2.cibles .desk-list .h-amt,
.atl2.cibles .desk-list .h-stade,
.atl2.cibles .desk-list .h-sig,
.atl2.cibles .desk-list .h-sc,
.atl2.cibles .desk-list .thu,
.atl2.cibles .desk-list .h-thu{display:none!important}
.atl2.cibles .desk-list .cell{justify-self:end}
.atl2.cibles .readpane{position:sticky;z-index:20;align-self:start;
  top:calc(var(--pp-gap,60px) + 48px);
  max-height:none;overflow-x:hidden;overflow-y:visible;overscroll-behavior:auto;
  background:#F7F9FB;border-left:1px solid var(--line);min-width:0}
body.pp-navfold .atl2.cibles .readpane{top:74px}
body.pp-desk .atl2.cibles .eval-stick{position:sticky;z-index:36;
  top:calc(var(--pp-gap,60px) + 44px);align-self:flex-start;width:100%;
  background:var(--panel2,#fff);box-shadow:0 1px 0 var(--line,#e2e8f0)}
body.pp-desk .atl2.cibles .readpane{
  top:calc(var(--pp-gap,60px) + 44px + var(--demand-h,56px))}
body.pp-desk .atl2.cibles .drow{
  display:flex;flex-wrap:nowrap;align-items:stretch;width:100%;gap:8px}
body.pp-desk .atl2.cibles .dfield{flex:1 1 auto!important;min-width:0!important;max-width:none}
body.pp-desk .atl2.cibles .dacts{flex:none;margin-left:0}
/* listhead VIT DANS la colonne liste : largeur 100% de cette colonne,
   collé au funnel → « 18 retenues ». Plus de 62% page qui recouvrait l'édito. */
body.pp-desk .atl2.cibles .desk-list .listhead,
body.pp-desk .atl2.cibles .desk-list .listhead.mapoff{
  display:flex!important;flex-direction:column!important;flex-wrap:nowrap!important;
  align-items:stretch!important;z-index:34;width:100%!important;max-width:none!important;
  box-sizing:border-box;padding:6px 14px 0;overflow:visible;background:var(--panel);
  position:sticky;left:auto;
  top:calc(var(--pp-gap,60px) + 44px + var(--demand-h,56px))}
.atl2.cibles .fhint{display:none}
.atl2.cibles .lh-dock{display:flex;flex-wrap:wrap;align-items:center;gap:6px;
  padding:0 0 6px;margin:0;order:2}
.atl2.cibles .dockbtn{height:28px;padding:0 10px;border:1px solid var(--line,#e2e8f0);
  border-radius:999px;background:#fff;color:#334155;font:inherit;font-size:12px;
  font-weight:650;cursor:pointer;white-space:nowrap}
.atl2.cibles .dockbtn:hover{border-color:#94a3b8;background:#f8fafc}
.atl2.cibles .dockbtn.on{border-color:#0E8A4F;background:#DFF3E6;color:#0A6B3D}
.atl2.cibles .dockbtn.since{border-color:#CFE9DA;color:#0F6E3F}
.atl2.cibles .dockbtn.since.on{background:#F3FAF6}
.atl2.cibles .dockbtn.sig{border-color:#FECACA;color:#B91C1C}
.atl2.cibles .dockbtn.sig.on{background:#FEF2F2}
body.pp-desk .atl2.cibles .listhead .lh-tools{order:1;width:100%;padding:0 0 8px;
  margin:0 0 4px;border-bottom:1px solid var(--line);display:flex;flex-direction:row;
  align-items:center;gap:8px}
body.pp-desk .atl2.cibles .listhead .lh-dock{order:2}
body.pp-desk .atl2.cibles .listhead .lh-stats{width:100%;padding:4px 0 8px;
  margin:0;border:0;order:3}
body.pp-desk .atl2.cibles .listhead .lh-stats .goal{padding:0 0 8px;margin:0;border:0;background:transparent}
body.pp-desk .atl2.cibles .listhead .lh-stats .fstats{margin:0;padding:0}
body.pp-desk .atl2.cibles .listhead .lh-funnel{width:100%;padding:2px 0 0;
  margin:0;border:0;order:4}
body.pp-desk .atl2.cibles .listhead .lh-funnel .funnel{
  gap:8px;flex-wrap:nowrap;align-items:center;padding:2px 0 0;background:transparent;border:0}
body.pp-desk .atl2.cibles .listhead .lh-funnel .chain2{flex:1 1 auto;min-width:0}
body.pp-desk .atl2.cibles .listhead .lh-funnel .ftools{margin-left:auto;flex:none}
body.pp-desk .atl2.cibles .listhead .lh-funnel .tuto{display:none}
body.pp-desk .atl2.cibles .listhead .lh-top{order:5;padding:0 0 8px;margin:0;
  border-bottom:1px solid var(--line)}
body.pp-desk .atl2.cibles .listhead.mapoff .lh-top{
  display:flex!important;flex-direction:row;flex-wrap:nowrap;align-items:center;
  gap:8px;width:100%;min-width:0}
/* Édito /cibles = même cadre que /actualites (.zoom + .zoom-body). */
.atl2.cibles .readpane.is-edito{overflow-x:hidden;min-width:0}
.atl2.cibles .readpane .zoom{padding:22px 26px 48px;max-width:none;min-width:0;
  overflow-x:hidden;box-sizing:border-box}
.atl2.cibles .zoom .thesis-brief{padding:0;margin:0;border:0;background:transparent;
  overflow:hidden;max-width:100%}
.atl2.cibles .zoom .thesis-brief__kicker{color:#0E8A4F;font-family:var(--mono);
  font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase}
.atl2.cibles .zoom .thesis-brief__title{font-size:19px;font-weight:700;letter-spacing:-.03em;
  line-height:1.28}
.atl2.cibles .zoom .thesis-brief__hint{display:none}
.atl2.cibles .thesis-brief__body,.atl2.cibles .thesis-brief__acq{
  margin:14px 0 0;padding-top:14px;border-top:1px solid var(--line);
  overflow-wrap:anywhere;word-break:break-word;max-width:100%}
.atl2.cibles .thesis-brief__body *,.atl2.cibles .thesis-brief__acq *{
  max-width:100%;box-sizing:border-box}
.atl2.cibles .thesis-brief__body .ed-lead{
  margin:0 0 22px;padding:0;background:none;border:0;
  font-size:15px;line-height:1.65;color:#5B6B7F}
.atl2.cibles .thesis-brief__body .ed-lead p{margin:0 0 8px;font-size:12px;font-weight:700;
  letter-spacing:.04em;text-transform:uppercase;color:#0E8A4F}
.atl2.cibles .thesis-brief__body .ed-lead ul{margin:0;padding-left:1.15em}
.atl2.cibles .thesis-brief__body .ed-lead li{margin:0 0 8px;color:#334155}
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
  .atl2 .app > .chrome-tog{order:1}
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
  padding:12px 18px 16px;background:var(--panel2)}
.atl2 .covcalc > summary{cursor:pointer;list-style:none;font-size:13px;font-weight:700;
  color:var(--ink);padding:4px 0}
.atl2 .covcalc > summary::-webkit-details-marker{display:none}
.atl2 .covcalc > summary::after{content:' ▾';color:#64748B;font-weight:500}
.atl2 .covcalc[open] > summary::after{content:' ▴'}
.atl2 .covcalc h3{margin:0 0 8px;font-size:13px;font-weight:800;color:var(--ink);
  letter-spacing:-.01em}
/* ── LE TABLEAU REPRIS (27/08 : « le tableau d'où vient ce chiffre est toujours
   horrible … rends-le propre, aéré, lisible avec une belle police, et retire
   le background du haut du tableau qui marche pas »).
   POURQUOI LE BANDEAU NE MARCHAIT PAS — mesuré, pas supposé : 'thead th'
   posait color:#fff sur un fond #0F172A, mais '.cc', '.cn' et '.cs'
   (trois classes) BATTENT 'thead th' (deux classes + un élément) et
   repeignaient l'encre en var(--ink)/var(--sub). Deux libellés sur trois
   étaient donc écrits en noir SUR NOIR — invisibles à l'écran. Aggravant :
   '--sub' n'est défini NULLE PART dans la feuille, donc var(--sub) sans
   repli retombe sur l'encre héritée. Le bandeau part : un en-tête clair posé
   sur un filet se lit toujours, et ne peut plus se retourner contre lui-même.
   Les repères de couleur sont écrits en dur avec repli — plus de dépendance
   à une variable fantôme. */
.atl2 .covcalc table{width:100%;border-collapse:collapse;margin:14px 0 4px;
  font-size:13px;background:none;border:0}
.atl2 .covcalc thead th{padding:0 12px 10px;background:none;
  font-family:var(--body);font-size:10.5px;letter-spacing:.1em;
  text-transform:uppercase;font-weight:700;text-align:left;white-space:nowrap;
  color:#64748B;border-bottom:1.5px solid var(--line2)}
.atl2 .covcalc thead th.mkc,
.atl2 .covcalc thead th.mkn,
.atl2 .covcalc thead th.mks{color:#64748B;font-family:var(--body);font-size:10.5px;
  font-weight:700}
.atl2 .covcalc thead th.mkn{text-align:right}
.atl2 .covcalc th:first-child,.atl2 .covcalc td:first-child{padding-left:2px}
.atl2 .covcalc th:last-child,.atl2 .covcalc td:last-child{padding-right:2px}
/* de l'air : une ligne de tableau à 8 px de haut se lit comme un mur */
.atl2 .covcalc td{padding:12px;border-bottom:1px solid var(--line);
  vertical-align:baseline;line-height:1.5;background:none}
.atl2 .covcalc td.mkc{font-family:var(--mono);font-size:12px;font-weight:600;
  letter-spacing:.01em;color:var(--ink);white-space:nowrap}
.atl2 .covcalc td.mkn{text-align:right;font-family:var(--body);font-size:14px;
  font-weight:700;color:var(--ink);width:96px;font-variant-numeric:tabular-nums;
  font-feature-settings:'tnum' 1}
.atl2 .covcalc td.mks{font-size:12.5px;color:#475569}
.atl2 .covcalc td.mks span{display:block}
.atl2 .covcalc td.mks em{display:block;font-style:normal;color:#94A3B8;
  font-size:11.5px;line-height:1.45;margin-top:3px}
/* une ligne à zéro reste lisible : elle pâlit, elle ne s'efface pas */
.atl2 .covcalc tr.zero td.mkc,.atl2 .covcalc tr.zero td.mkn{color:#94A3B8}
.atl2 .covcalc tr.zero td.mks{color:#94A3B8}
.atl2 .covcalc tr.tot td{border-bottom:0;border-top:1.5px solid var(--line2);
  padding-top:14px;padding-bottom:2px;font-weight:800}
.atl2 .covcalc tr.tot td.mkc{font-family:var(--body);font-size:12.5px;
  letter-spacing:.02em;color:var(--ink)}
.atl2 .covcalc tr.tot td.mkn{font-size:16px;color:var(--ink)}
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
    top:calc(var(--pp-gap,48px) + var(--pp-live-h,44px) + var(--chrome-tog-h,36px));
    z-index:36;background:var(--panel2,#fff);
    box-shadow:0 1px 0 var(--line,#e2e8f0)}
  body.pp-desk .atl2.ops .listhead,
  body.pp-desk .atl2.ops .listhead.mapoff{
    position:sticky!important;
    width:100%!important;max-width:none!important;
    top:calc(var(--pp-gap,48px) + var(--pp-live-h,44px) + var(--chrome-tog-h,36px) + var(--demand-h,56px))!important}
  body.pp-desk .atl2.ops.chrome-filt .listhead,
  body.pp-desk .atl2.ops.chrome-filt .listhead.mapoff{
    top:calc(var(--pp-gap,48px) + var(--pp-live-h,44px) + var(--chrome-tog-h,36px))!important}
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
.atl2 .evalbtn{display:inline-flex;align-items:center;justify-content:center;gap:4px}
.atl2 .evalbtn .elab{position:relative;z-index:1;min-width:0}
/* languette mobile : collée SOUS le LIVE, jamais au milieu de la liste */
.atl2 .chrome-tog{display:none}
@media (max-width:760px){
  body.pp-desk .atl2.ops{--chrome-tog-h:36px}
  body.pp-desk .atl2.ops .chrome-tog{
    display:flex;align-items:stretch;justify-content:stretch;gap:0;
    position:sticky;z-index:38;order:1;flex:none;width:100%;
    height:36px;margin:0;padding:3px;border:0;border-bottom:1px solid var(--line,#e2e8f0);
    background:#F1F5F9;top:calc(var(--pp-gap,48px) + var(--pp-live-h,44px))}
  body.pp-desk .atl2.ops .chrome-tog button{
    flex:1;min-width:0;margin:0;padding:0 6px;border:0;border-radius:6px;
    background:transparent;color:#64748B;font:inherit;font-size:12px;font-weight:650;
    cursor:pointer}
  body.pp-desk .atl2.ops .chrome-tog button[aria-selected="true"]{
    background:#fff;color:#0F172A;box-shadow:0 1px 2px rgba(15,23,42,.12)}
  body.pp-desk .atl2.ops.chrome-eval .listhead{display:none!important}
  body.pp-desk .atl2.ops.chrome-filt .eval-stick{display:none!important}
}
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
  body.pp-desk .atl2.ops .dacts{
    flex:1 1 100%;flex-wrap:nowrap;justify-content:flex-start;gap:6px;margin-left:0}
  body.pp-desk .atl2.ops .dacts .evalbtn{
    flex:1 1 auto;min-width:0;max-width:none;padding:0 10px;justify-content:center}
  body.pp-desk .atl2.ops .dacts .evalbtn .elab{
    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
  body.pp-desk .atl2.ops .dacts .viewbtn,
  body.pp-desk .atl2.ops .dacts .viewbtn.sm{flex:none;padding:0 10px}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-top,
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools,
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip,
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .fstrip-b,
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools .frow2{flex-wrap:wrap!important}
  body.pp-desk .atl2.ops .listhead.mapoff .lh-tools{min-height:0}
}
/* ── LES COMMANDES DES POPUPS D'ALERTES, TROISIÈME PASSE (27/08, PJ2 :
   « les menus aujourd'hui + et − sont décalés, faut corriger ça »).
   Bloc AUTONOME posé en fin de feuille : il n'édite aucune règle existante,
   il tranche par l'ordre de cascade — le worktree est partagé.

   CE QUI CLOCHAIT, mesuré au navigateur (getBoundingClientRect sur
   /fr/carte, popup « Vos alertes email », onglets Quotidien et Hebdomadaire) :
     · pastille ON / OFF ......................  62 × 24 px
     · boutons − et + .........................  34 × 34 px
     · menu déroulant du jour .................  90 × 27 px
     · « Jours ouvrés » / « Tous les jours » ..  26 × 24 px  ← cassés
   Trois hauteurs de commande sur des lignes voisines : c'est ça, « décalé ».
   Et les deux boutons de jours sortaient à 26 px de LARGE, texte en nowrap
   débordant l'un sur l'autre puis coupé par le bord de la carte — parce que
   la feuille générée pose '.atl2 .qset button{width:24px;height:24px}'
   (spécificité 0,2,1), qui attrape AUSSI les .abtn, et que
   '.atl2 .qrow .qset .abtn' (0,3,0) ne reposait jamais de largeur : min-width
   ne sauve que la pastille ON/OFF, qui en a une.
   Une seule hauteur pour tout ce que .qset contient, et les boutons de texte
   reprennent leur largeur naturelle. */
.atl2 .qrow .qset{--qh:34px;align-items:center;row-gap:8px}
.atl2 .qrow .qset .abtn{width:auto;min-width:0;max-width:100%;height:var(--qh);
  display:inline-flex;align-items:center;justify-content:center;padding:0 14px;
  font-size:12px;font-weight:700;letter-spacing:.03em;white-space:nowrap;
  border-radius:8px}
.atl2 .qrow .qset .abtn.onoff{min-width:62px}
/* − et + : mêmes carrés, même poids optique (le « ＋ » pleine chasse du JSX
   pesait plus lourd que le « − » d'en face — il est passé en + simple) */
.atl2 .qrow .qset button:not(.abtn){width:var(--qh);height:var(--qh);flex:none;
  font-size:17px;font-weight:600;line-height:1;border-radius:8px}
.atl2 .qrow .qset select{height:var(--qh);padding:0 10px;font-size:12.5px;
  border:1px solid var(--line);border-radius:8px;background:var(--panel);
  color:var(--ink);cursor:pointer}
.atl2 .qrow .qset select:disabled{opacity:.45;cursor:default}
.atl2 .qrow .qset input{height:var(--qh);padding:0 10px;font-size:12.5px;
  border-radius:8px}
.atl2 .qrow .qset b{min-width:56px;text-align:center;font-size:14px;
  font-variant-numeric:tabular-nums}

/* ── « LECTURE DE LA FILE » (27/08) : le popup File de traitement mettait
   jusqu'à ~55 s à répondre et affichait pendant tout ce temps « 0 / 0 » et
   « À venir — 0 sociétés », sous une barre qui annonçait déjà 19 en attente.
   Un point qui bat et une phrase valent mieux qu'un zéro qu'on n'a pas
   vérifié. Couleurs en dur : '--sub' n'est défini nulle part dans la feuille. */
.atl2 .modal .qwait{display:inline-flex;align-items:center;gap:9px;
  font-size:12.5px;line-height:1.5;color:#475569}
.atl2 .modal .qwait.qwrow{padding:12px 2px}
.atl2 .modal .qwait .qwd{flex:none;width:8px;height:8px;border-radius:50%;
  background:var(--brand);animation:lwp 1.2s ease-in-out infinite}
@media (prefers-reduced-motion:reduce){.atl2 .modal .qwait .qwd{animation:none}}

/* ── L'ÉTAT DE L'ENREGISTREMENT DES SECTIONS (27/08) : discret, à côté du titre,
   il devient vert une fois écrit. Sans lui, cocher une case ne produisait aucun
   signe à l'écran. */
.atl2 .modal .qsec .secsave{margin-left:10px;font-size:11.5px;font-weight:600;
  letter-spacing:.02em;color:#94A3B8;vertical-align:middle}
.atl2 .modal .qsec .secsave.done{color:var(--brand)}

/* ── LE PLANISPHÈRE DU COCKPIT AU TRAITEMENT DE /actualites (27/08 : « le menu
   droite avec les filtres et l'encadré gauche [ne sont] pas dessus le
   planisphère … le planisphère monde ne ressemble toujours pas au planisphère
   dans /actualites qui est beaucoup mieux. Je veux qu'il lui ressemble »).

   MESURÉ AVANT, sur les deux pages, viewport 1500 :
     /actualites  .stage display:block position:relative — carte 1500 px de
                  large, .fbar en position:absolute z-4 POSÉE DESSUS (360 px,
                  coins arrondis, ombre portée), encadré d'édition flottant
                  à gauche.
     /cibles      .stage display:flex — carte 1260 px, .fbar STATIQUE de
                  240 px collée à droite : la carte est amputée d'un sixième
                  et le panneau n'est pas une carte, juste une colonne.

   Mêmes valeurs que .ops, sélecteurs à part (le worktree est partagé et la
   session voisine travaille dans les règles .atl2.ops). */
.atl2.cibles .stage:not(.folded){display:block!important;position:relative;
  flex-direction:unset;--rail:384px}
.atl2.cibles .stage:not(.folded) .fpanel{z-index:5;max-height:calc(100% - 24px);
  border-radius:12px;overflow:auto}
.atl2.cibles .stage:not(.folded) .fbar{position:absolute;z-index:4;right:12px;top:12px;
  /* 29/08 : « trop d'espace vide dans ces filtres » — bottom:12px ETIRAIT la
     carte sur toute la hauteur du planisphere ; le vide entre les facettes et
     « Alerte email » n'etait que ca. Hauteur au contenu, plafond conserve. */
  bottom:auto;width:min(360px,38%);height:auto!important;max-height:calc(100% - 24px);
  box-sizing:border-box;padding:12px 14px;overflow-y:auto;overscroll-behavior:auto;
  background:rgba(255,255,255,.94);backdrop-filter:blur(12px);
  border:1px solid rgba(15,23,42,.10);border-radius:12px;
  box-shadow:0 10px 32px rgba(11,18,32,.10)}
.atl2.cibles .map-pulse{position:absolute;z-index:4;left:12px;top:12px;
  width:min(220px,28%);text-align:left;padding:14px 16px 12px;
  background:rgba(255,255,255,.93);backdrop-filter:blur(12px);
  border:1px solid rgba(15,23,42,.10);border-radius:12px;
  box-shadow:0 10px 32px rgba(11,18,32,.10);cursor:pointer;font:inherit;color:inherit}
.atl2.cibles .map-pulse:hover{border-color:rgba(14,138,79,.45)}
.atl2.cibles .map-pulse em{display:block;font-style:normal;font-family:var(--mono);
  font-size:9.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
  color:#0E8A4F;margin:0 0 6px}
.atl2.cibles .map-pulse b{font-size:32px;font-weight:800;letter-spacing:-.04em;
  line-height:1;color:var(--ink)}
.atl2.cibles .map-pulse>span{display:block;font-family:var(--mono);font-size:9.5px;
  letter-spacing:.1em;text-transform:uppercase;color:#94A3B8;margin:4px 0 10px}
.atl2.cibles .map-pulse ul{list-style:none;margin:0;padding:0;display:flex;
  flex-direction:column;gap:5px}
.atl2.cibles .map-pulse li{font-size:12.5px;color:#334155;line-height:1.35}
/* Le périmètre de la ligne « retenues » — discret mais présent : l'encadré
   compte le fonds entier, le tunnel d'à côté le seul continent ouvert. */
.atl2.cibles .map-pulse li .cpscope,.atl2.ops .map-pulse li .cpscope{
  font-style:normal;font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;
  text-transform:uppercase;color:#94A3B8;margin-left:5px}
/* SOUS 1000 px les deux cartes flottantes redeviennent des blocs empilés —
   même repli que /actualites : une carte de 360 px posée sur un planisphère
   de 700 px le recouvrirait entièrement. */
@media (max-width:1000px){
  .atl2.cibles .map-pulse,.atl2.cibles .stage:not(.folded) .fbar{position:static;
    width:auto;max-height:none;bottom:auto;box-shadow:none;border-radius:0;
    backdrop-filter:none}
  .atl2.cibles .stage:not(.folded){display:flex!important;flex-direction:column}}

/* ── LA LIGNE DE TITRE DE LA LISTE TENAIT SUR QUATRE LIGNES (29/08 : « au-dessus
   de la liste il y a beaucoup trop de hauteur qui sert à rien »).
   CAUSE, mesurée au navigateur : la feuille pose
   '.atl2 .listhead .lh-top{display:contents}' — la rangée est DISSOUTE dans la
   colonne flex du bandeau, donc chacun de ses enfants devient sa propre ligne.
   Elle n'était re-matérialisée en rangée que sous '.listhead.mapoff', c'est-à-
   dire CARTE REPLIÉE. Carte ouverte — le cas par défaut — on mesurait :
     lh-top      h=0    (display:contents : la boîte n'existe pas)
       .main     y=847  « 19 retenues »
       .dot      y=880  « · »      ← un point de séparation, seul sur sa ligne
       .ctx      y=909  « Europe · winhealthgroup »
       .lh-acts  y=936  LISTE · LIGNE · MAXI · Tout
   Soit ~120 px pour une ligne de texte, et un point d'énumération isolé au
   milieu. On la remet en rangée dans le cockpit, carte ouverte ou repliée. */
body.pp-desk .atl2.cibles .listhead .lh-top{
  display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;
  gap:8px;width:100%;min-width:0}
body.pp-desk .atl2.cibles .listhead .lh-top .main,
body.pp-desk .atl2.cibles .listhead .lh-top .ctx{min-width:0}
/* et le groupe d'actions reste UNE rangée : mesuré, il s'enroulait sur trois
   lignes (LISTE/LIGNE/MAXI, puis Tout, puis Parcourir) et redonnait au bandeau
   les 35 px qu'on venait de lui reprendre. */
body.pp-desk .atl2.cibles .listhead .lh-top .lh-acts{margin-left:auto;flex:none;
  display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;gap:8px}

/* ── « 📖 Edito du jour » AU MÊME TRAITEMENT QUE /actualites (29/08 : « je ne
   comprends pas pourquoi tu as mis la languette Edito du jour collée en haut à
   gauche, c'est pas beau, inspire-toi de la page /actualites »).
   La règle pleine largeur existait — et n'était écrite que pour '.atl2.ops' :
     .atl2.ops .readpane .pane-edito{display:block;width:calc(100% - 32px);
       margin:12px 16px 8px;text-align:left}
   Dans le cockpit, le bouton retombait sur la petite pastille en ligne de
   '.edito-go', sans marge, collée dans l'angle du panneau. Mêmes valeurs ici. */
.atl2.cibles .readpane .pane-edito{display:block;width:calc(100% - 32px);
  margin:12px 16px 8px;text-align:left}

/* ── LE BANDEAU DE LISTE, PASSE DU 29/08 (six retours d'Antoine d'un coup).
   Bloc autonome en fin de feuille : rien n'est édité au-dessus. */

/* ⑤ LE TUNNEL PASSE SOUS LA LIGNE DE TITRE (« le funnel devrait être plus bas,
   là il y a écrit Europe winhealthgroup »). L'ordre était : pastilles, stats,
   TUNNEL, puis « 19 retenues · Europe · winhealthgroup ». On inverse les deux
   derniers : on annonce d'abord CE QU'ON REGARDE, le tunnel vient ensuite. */
body.pp-desk .atl2.cibles .listhead .lh-funnel{order:6;padding:6px 0 0}

/* ④ LA BARRE VERTE NE SERT À RIEN (« à droite de ça il y a une barre verte qui
   sert à rien »). C'est la jauge de progression de la barre du matin : sur un
   fonds dont tout est évalué elle est pleine en permanence, donc elle
   n'informe jamais. Elle disparaît du cockpit ; la phrase suffit. */
body.pp-desk .atl2.cibles .listhead .lh-stats .goal .pbar{display:none}
body.pp-desk .atl2.cibles .listhead .lh-stats .goal{gap:8px}

/* ③ LES PASTILLES ALIGNÉES : même boîte, même hauteur, même ligne de base. */
.atl2.cibles .dockbtn{display:inline-flex;align-items:center;gap:5px;
  height:28px;line-height:1;vertical-align:middle}
.atl2.cibles .lh-dock{align-items:center;row-gap:6px}

/* ⑥ LE PAVÉ DE STATISTIQUES PRENAIT TROP DE HAUTEUR (« tout ce texte prend trop
   de hauteur »). Mesuré : la phrase du matin, puis deux lignes de bilan, puis
   la ligne de marché — quatre blocs empilés au-dessus d'une liste qui, elle,
   est le sujet. On resserre : corps plus petit, interlignes courts, moins de
   marges. Aucun chiffre n'est retiré. */
body.pp-desk .atl2.cibles .listhead .lh-stats{padding:2px 0 6px}
body.pp-desk .atl2.cibles .listhead .lh-stats .goal .gtxt{font-size:12.5px;line-height:1.45}
body.pp-desk .atl2.cibles .listhead .lh-stats .fstats{font-size:11.5px;line-height:1.4}
body.pp-desk .atl2.cibles .listhead .lh-stats .fstats .fsrow{margin:2px 0;gap:6px}
body.pp-desk .atl2.cibles .listhead .lh-stats .fstats b{font-size:12px}

/* ⑦ LE SIGNAL, ROUGE, COLLÉ AU NOM. La colonne .c-sig est masquée dans le
   cockpit : le badge est désormais rendu dans la cellule du nom, et doit y
   garder son fond rouge et sa place — jamais un retour à la ligne. */
.atl2.cibles .desk-list .row .sig{flex:none;margin-right:7px;white-space:nowrap}
.atl2.cibles .desk-list .row .rnm{min-width:0}

/* ── ④ LES TROIS PASTILLES REJOIGNENT LA LIGNE DE TITRE (29/08 : « on gagnerait
   de la place si tu mettais les pastilles sur la ligne 171 nouvelles · Europe …
   car là ça prend trop de hauteur pour rien »).
   Le bandeau est déjà un flex qui enroule : il suffit que les deux blocs
   cessent de réclamer 100 % de la largeur, et de leur donner le MÊME rang.
   La ligne de titre garde la priorité d'espace, les pastilles ne rétrécissent
   jamais, et si la largeur manque elles repassent en dessous d'elles-mêmes. */
/* Les pastilles sont maintenant DANS la rangée de titre : leur 'order' (qui
   les plaçait dans la colonne du bandeau) les renverrait après le groupe
   d'actions, donc à la ligne. Elles reprennent le rang par défaut. */
body.pp-desk .atl2.cibles .listhead .lh-top .lh-dock{order:0;width:auto;
  flex:0 0 auto;padding:0;margin:0 14px 0 0;border:0}
body.pp-desk .atl2.cibles .listhead .lh-top{width:100%}
body.pp-desk .atl2.cibles .listhead .lh-top .main{flex:0 0 auto}

/* ── ⑥ LE MENU « STATUT » NE RECEVAIT PAS LE CLIC (29/08 : « quand je clique sur
   statut sur la ligne ça met rien à jour »).
   Ce n'est pas l'action qui échouait : le clic n'arrivait JAMAIS au bouton.
   Playwright le dit mot pour mot — « <span class='vd wait'>mémo à lancer</span>
   intercepts pointer events ». Mesure de la rangée : la colonne verdict fait
   120 px et doit loger TROIS choses (le badge MATCH, « mémo à lancer », et le
   menu Statut) ; elle est en overflow:hidden, donc les enfants se chevauchent
   et c'est le libellé qui passe devant le bouton — un menu qu'on ne peut pas
   ouvrir a l'air d'un menu qui ne fait rien.
   On donne à la colonne la largeur qu'il lui faut, on la met en rangée qui ne
   s'enroule pas, et le menu passe au-dessus. */
.atl2.cibles .desk-list .row,
.atl2.cibles .desk-list .cols{
  grid-template-columns:11px 28px minmax(0,1fr) minmax(168px,214px) max-content!important}
.atl2.cibles .desk-list .c-vd{overflow:visible!important;display:flex;
  flex-wrap:nowrap;align-items:center;justify-content:flex-end;gap:7px}
.atl2.cibles .desk-list .c-vd > *{flex:none}
.atl2.cibles .desk-list .c-vd .rstat{position:relative;z-index:4}
/* Un LIBELLE ne doit pas capter le clic. « MATCH » et « memo a lancer » sont
   decoratifs ; c est pourtant l un d eux que le navigateur designait comme
   cible a la place du bouton. pointer-events:none les rend transparents au
   pointeur sans rien changer a ce qu ils affichent. */
.atl2.cibles .desk-list .c-vd .vd{white-space:nowrap;pointer-events:none}

/* ── PASSE DU 29/08, SUITE (7 retours) ─────────────────────────────────────── */

/* ③ PASTILLES : même boîte, même axe. Le décalage venait d'un reliquat de
   padding et du wrap ; on aligne tout au centre de la rangée, sans marge
   verticale possible. */
body.pp-desk .atl2.cibles .listhead .lh-top{align-items:center}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-dock{align-items:center;
  align-self:center;padding:0;margin:0 14px 0 0;row-gap:6px}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-dock .dockbtn{margin:0;
  align-self:center;position:relative;top:0}

/* ② LES LIGNES SONT NUMÉROTÉES — le lien visuel entre le compteur du filtre et
   la liste (« il faudrait numéroter les lignes »). Compteur CSS : aucun
   changement de grille, le numéro vit en tête de la cellule nom. */
.atl2.cibles .desk-list{counter-reset:ppligne}
.atl2.cibles .desk-list .row{counter-increment:ppligne}
.atl2.cibles .desk-list .row .nd::before{content:counter(ppligne);
  font-family:var(--mono);font-size:9.5px;color:#94A3B8;min-width:20px;
  margin-right:6px;text-align:right;flex:none}

/* ✨ la puce « nouvelle » sur la ligne */
.atl2.cibles .desk-list .row .rfresh{flex:none;margin-right:5px;font-size:11px;
  line-height:1}

/* ⑥ (retour précédent) LA LIGNE PORTE LA COULEUR DE SON ONGLET, comme la V1 :
   écartées rosées, validées vertes pâles, favoris jaunes pâles — la lecture
   d'un coup d'œil. Les fonds restent sous le hover/sélection (déclarés avant
   .on/.sel ? non : même fin de feuille — on redonne donc aussi leurs états). */
.atl2.cibles .desk-list .row.p5{background:#FEF6F6}
.atl2.cibles .desk-list .row.p5:hover,.atl2.cibles .desk-list .row.p5.on{background:#FDEDED}
.atl2.cibles .desk-list .row.p4{background:#F3FAF6}
.atl2.cibles .desk-list .row.p4:hover,.atl2.cibles .desk-list .row.p4.on{background:#E9F6EF}
.atl2.cibles .desk-list .row.fav{background:#FFFBEB}
.atl2.cibles .desk-list .row.fav:hover,.atl2.cibles .desk-list .row.fav.on{background:#FEF3C7}

/* ── PASSE DU 29/08, TROISIEME SERIE ──────────────────────────────────────── */

/* ③ « Parcourir les 171 est trop décalé à droite » : lh-top était en nowrap,
   son groupe d'actions DÉBORDAIT du bandeau (62 % de large) et flottait sur la
   colonne de droite — d'où aussi le « texte tassé » perçu sur le zoom. La
   rangée peut se replier : les actions passent dessous quand la place manque,
   elles ne sortent plus jamais du cadre. */
body.pp-desk .atl2.cibles .listhead .lh-top{flex-wrap:wrap;row-gap:8px}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-acts{margin-left:auto;flex:0 1 auto}

/* ④ OUI / NON directement sur la ligne d'un CALL — le geste de la V1. */
.atl2.cibles .desk-list .rst2{display:inline-flex;gap:5px}
.atl2.cibles .desk-list .rsd{font:inherit;font-size:11px;font-weight:800;
  letter-spacing:.03em;padding:4px 11px;border-radius:7px;cursor:pointer;
  border:1px solid transparent;line-height:1.2}
.atl2.cibles .desk-list .rsd.yes{background:#0E8A4F;border-color:#0E8A4F;color:#fff}
.atl2.cibles .desk-list .rsd.yes:hover{background:#0A6B3D}
.atl2.cibles .desk-list .rsd.no{background:#fff;border-color:#FCA5A5;color:#B91C1C}
.atl2.cibles .desk-list .rsd.no:hover{background:#FEF2F2}
.atl2.cibles .desk-list .rsd.busy{opacity:.5;cursor:default}

/* ── 29/08, dernier retour du soir : « la police de l'édito est trop grande ».
   MESURÉ en prod avant de toucher : le CORPS est déjà à 12-12,5 px — la même
   taille que les lignes de la liste. Ce qui reste GROS, c'est le TITRE du
   panneau : 19 px, posés par la règle '.atl2.cibles .zoom .thesis-brief__title'
   (~661) qui bat le réglage du composant. Il redescend au rang d'un titre de
   colonne, et le kicker/la date suivent. */
.atl2.cibles .zoom .thesis-brief__title{font-size:14.5px;letter-spacing:-.015em}
.atl2.cibles .zoom .thesis-brief__date{font-size:10.5px}

/* ── 29/08, derniere passe du bandeau ────────────────────────────────────────
   ① « quand je clique sur 27 criblees, tout le detail devrait etre EN DESSOUS
   et pas au-dessus » : lh-stats (le pave du matin) etait en ordre 3, avant la
   ligne de titre (5). Il passe apres elle, avant le tunnel (6).
   ② « mets ca sur 2 lignes au meme niveau que LISTE LIGNE TOUT » : la rangee
   ne s enroule plus — les pastilles se replient ENTRE ELLES a gauche, le
   contexte s ellipse, et le groupe d outils reste au meme niveau a droite. */
body.pp-desk .atl2.cibles .listhead .lh-top{order:4;flex-wrap:nowrap}
body.pp-desk .atl2.cibles .listhead .lh-stats{order:5}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-dock{flex:0 1 auto;min-width:0;
  flex-wrap:wrap;row-gap:4px}
body.pp-desk .atl2.cibles .listhead .lh-top .main{flex:none;white-space:nowrap}
body.pp-desk .atl2.cibles .listhead .lh-top .ctx{flex:0 1 auto;min-width:0;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-acts{flex:none}

/* ── LE STATUT COMME EN V1 (29/08, demande repetee) : plus un menu deroulant
   etroit — une RANGEE horizontale, tous les statuts visibles d un coup, un
   clic. Ancree a droite au-dessus de la ligne pour ne rien recouvrir d utile. */
.atl2.cibles .desk-list .rstm{top:auto;bottom:calc(100% + 4px);right:0;
  flex-direction:row;gap:4px;min-width:0;padding:5px 6px;white-space:nowrap}
.atl2.cibles .desk-list .rstm .rsti{padding:6px 10px;font-size:11.5px;
  font-weight:650;white-space:nowrap}

`,Xi=Qi+Ji;function Xa(e){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(e)||""}catch{return""}}function Zi(){const e=Xa("teaser");if(e==="0"||e==="1")return e;try{if(typeof window<"u"&&window.parent&&window.parent!==window){const a=new URL(window.parent.location.href).searchParams.get("teaser");if(a==="0"||a==="1")return a;if(/\/cibles\/[^/]+\/open\/?$/i.test(window.parent.location.pathname||""))return"0"}}catch{}return""}function es(e,a){if(e||a.mode!=="client"||!a.token)return"visiteur";const r=Zi();return r==="0"?"client":r==="1"||Xa("embed")==="1"&&Xa("chrome")==="1"?"apercu":"client"}const ts={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0,showMorning:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0}},as=e=>ts[e];function wa(e){const a=(e||"").trim();return a.length<3?!1:!!(/^[^\p{L}(]/u.test(a)||/[:—]\s|…|\.{3}/.test(a)||a.split(/\s+/).length>=3&&/\b(icymi|round-?up|wrap|weekly|podcast|interview|what|why|how|biggest|watch|inside|according)\b/i.test(a))}const kt=e=>{if(e.noCo===void 0){const a=(e.name||"").trim();(!Lr(a)||wa(a))&&(e.noCo=!0)}return Object.assign(e,{continent:Uo(e.cc)})};function Ia(e){const a=new Set,r=[];for(const n of e){const o=(n.name||"").toLowerCase();!o||a.has(o)||(a.add(o),r.push(n))}return r}const ns=60*60*1e3;function rs(e){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+e)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>ns?null:a}catch{return null}}function la(e,a){try{sessionStorage.setItem("ppmap:swr:"+e,JSON.stringify({...a,ts:Date.now()}))}catch{}}const os=e=>e==="default"?"":e==="ops"?"ops":"research:"+e.research;function is(e,a,r="default"){const n=r!=="default",o=u.useMemo(()=>e||n?{mode:"anon"}:Lo(),[e,n]),i=u.useMemo(()=>n?"visiteur":es(e,o),[e,o,n]),s=u.useMemo(()=>as(i),[i]),d=i!=="visiteur",c=os(r),[g,l]=u.useState([]),[h,p]=u.useState(""),[b,m]=u.useState(null),[v,y]=u.useState(null),[f,j]=u.useState(null),[C,k]=u.useState(()=>new Map),[N,z]=u.useState(()=>new Map),[E,q]=u.useState(""),[A,R]=u.useState(new Set),[P,I]=u.useState(null),[L,F]=u.useState(!0),[x,T]=u.useState(!1),[B,G]=u.useState(0),[H,Q]=u.useState(0),X=u.useRef(0),K=u.useMemo(()=>{var ee;if(i!=="client")return"";try{return((ee=Ro())==null?void 0:ee.email)||""}catch{return""}},[i]);u.useEffect(()=>{const ee=++X.current;let xe=!0;const _=()=>xe&&ee===X.current,se=(d&&o.token?o.token:"pub:"+a)+(c?":"+c:""),me=rs(se);return me?(l(me.objs.map(kt)),me.fund&&p(me.fund),m(me.marketEstimate??null),y(me.criteria??null),j(me.stats??null),q(me.generatedAt||""),F(!1)):F(!0),(async()=>{try{if(r==="ops"){const Le=await Oa(),te=((Le==null?void 0:Le.recent_ops)||[]).map(pe=>{const he=xa(pe.company_name||pe.title?pe:{...pe,title:(pe.headline_fr||pe.headline||"").slice(0,120)},a),de=String(pe.rubrique||"").toLowerCase();return he&&(de==="nominations"||de==="recrutements")&&(he.engine=de),he&&!String(pe.company_name||"").trim()&&(he.noCo=!0),he}).filter(pe=>!!pe).map(pe=>(Lr((pe.name||"").trim())||(pe.noCo=!0),pe));try{const pe=Fo(),he=await Mo(),de=((he==null?void 0:he.date)||"").slice(0,10),Y=pe?pe.doc:he,ne=Oo(Y),ie=((pe==null?void 0:pe.day)||(Y==null?void 0:Y.date)||de||"").slice(0,10);if(ie&&ne.length){const ge=new Set;for(const Ee of te){if((Ee.date||"").slice(0,10)!==ie)continue;const re=qn(ne,ge,Ee.name,"");re>=0&&(ge.add(re),Ee.decryptHtml=ne[re].html)}for(const Ee of te){if(Ee.decryptHtml||(Ee.date||"").slice(0,10)!==ie)continue;const re=qn(ne,ge,"",Ee.headline||Ee.tagline||Ee.name);re>=0&&(ge.add(re),Ee.decryptHtml=ne[re].html)}}if(ie){const ge=((Y==null?void 0:Y.title_fr)||"").trim(),Ee=((Y==null?void 0:Y.lead_fr)||"").trim(),re=Do(Y),ce=((Y==null?void 0:Y.url)||"").trim();ge&&(re||ce)&&te.unshift({id:`edito:${ie}`,kind:"op",name:ge,cc:null,date:ie,engine:"edito",dealKind:"other",headline:ge,tagline:Ee||ge,decryptHtml:re||void 0,url:ce,noCo:!0})}}catch{}if(!_())return;l(te.map(kt)),la(se,{objs:te})}else if(typeof r=="object"){const te=(await Ln()||[]).filter(he=>(he.slug||"")===r.research).map(he=>Rn(he,a)).filter(he=>!!he),pe=Ia(await Fn(te,a));if(!_())return;l(pe.map(kt)),la(se,{objs:pe})}else if(d&&o.token){const Le=Po(o.token),te=Oa(),pe=Io(o.token),he=Bo(o.token),de=_o(o.token),Y=await Le;let ne=Y?Y.targets:[];_()&&Y&&(p(Y.fund||""),m(Y.marketEstimate??null),y(Y.criteria??null),j(Y.stats??null),q(Y.generatedAt||""),l(ne.map(kt)),F(!1),T(!1));const[ie,ge,Ee,re]=await Promise.all([te,pe,he,de]),ce=((ie==null?void 0:ie.recent_ops)||[]).map(qe=>xa(qe,a)).filter(qe=>!!qe);if(ne=[...ne,...ce],!_())return;l(ne.map(kt));const Ie=new Set;for(const qe of ge){const Me=(qe.id||qe.co||"").toString().trim().toLowerCase();Me&&Ie.add(Me.startsWith("t:")?Me:"t:"+Me)}R(Ie),k(Ee),z(re),Y&&la(se,{fund:Y.fund,marketEstimate:Y.marketEstimate,criteria:Y.criteria,stats:Y.stats,generatedAt:Y.generatedAt,objs:ne})}else{const Le=$o(),te=Ln(),pe=Oa(),he=await Le;_()&&he.length&&(l(Ia(he).map(kt)),F(!1),T(!1));const[de,Y]=await Promise.all([te,pe]),ne=(de||[]).map(re=>Rn(re,a)).filter(re=>!!re),ie=await Fn(ne,a),ge=((Y==null?void 0:Y.recent_ops)||[]).map(re=>xa(re,a)).filter(re=>!!re),Ee=Ia([...he,...ie,...ge]);if(!_())return;l(Ee.map(kt)),la(se,{objs:Ee})}_()&&T(!1)}catch{_()&&!me&&T(!0)}finally{_()&&F(!1)}})(),()=>{xe=!1}},[d,o.token,a,B,c]),u.useEffect(()=>{if(!s.showCredits||!K){I(null);return}let ee=!0;return(async()=>{try{const xe=await fetch(`${hn}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:K})});if(!xe.ok)return;const _=await xe.json();ee&&_&&_.ok!==!1&&I(_)}catch{}})(),()=>{ee=!1}},[s.showCredits,K,H]);const ue=u.useCallback(ee=>R(new Set(ee)),[]);return{session:o,mode:i,caps:s,fund:h,email:K,marketEstimate:b,generatedAt:E,criteria:v,stats:f,thumbs:C,stages:N,dossiers:g,favIds:A,setFavIds:ue,credits:P,reloadCredits:()=>Q(ee=>ee+1),loading:L,error:x,refresh:()=>G(ee=>ee+1)}}function Ve(e){return e?e.engine==="edito"||String(e.id||"").startsWith("edito:"):!1}const Br=()=>({win:"all",day:"",status:"all",signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],acquirer:"",search:""}),ss=(e="europe",a=!1,r)=>({continent:e,ptab:(r==null?void 0:r.ptab)??1,dens:(r==null?void 0:r.dens)??"liste",filters:{...Br(),...Object.fromEntries(Object.entries((r==null?void 0:r.filters)||{}).filter(([,n])=>n!==void 0))},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,focusId:null,modal:(r==null?void 0:r.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,memoTab:0,undo:[],mapFolded:a}),ls=new Set(["signal","amount","score","crible","memo"]);function ds(e,a){switch(a.type){case"continent":return{...e,continent:a.key,filters:{...e.filters,country:[]},shown:{},popupId:null,focusId:null,openFacet:null};case"ptab":return{...e,ptab:a.tab,shown:{},popupId:null,focusId:null};case"dens":return{...e,dens:a.dens,shown:{}};case"filters":return{...e,filters:{...e.filters,...a.patch},shown:{}};case"toggleFacet":{const r=e.filters[a.facet],n=r.includes(a.value)?r.filter(o=>o!==a.value):[...r,a.value];return{...e,filters:{...e.filters,[a.facet]:n},shown:{}}}case"toggleMemoLevel":{const r=e.filters.memoLevel,n=r.includes(a.value)?r.filter(o=>o!==a.value):[...r,a.value];return{...e,filters:{...e.filters,memoLevel:n},shown:{}}}case"acquirer":return{...e,filters:{...e.filters,acquirer:a.value,day:"",win:"all"},shown:{}};case"clearFacet":return{...e,filters:{...e.filters,[a.facet]:[]},shown:{}};case"reset":return{...e,filters:Br(),shown:{},openFacet:null};case"sort":return{...e,sort:e.sort.key===a.key?{key:a.key,dir:e.sort.dir*-1}:{key:a.key,dir:ls.has(a.key)?-1:1}};case"groupBy":return{...e,groupBy:a.groupBy};case"more":return{...e,shown:{...e.shown,[a.group]:(e.shown[a.group]??a.base??_r)+a.by}};case"pile":return{...e,pileMode:a.on,popupId:null};case"openFacet":return{...e,openFacet:e.openFacet===a.facet?null:a.facet};case"popup":return{...e,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"focus":return{...e,focusId:a.id,popupId:a.id?null:e.popupId};case"modal":return{...e,modal:a.modal,popupId:a.modal?null:e.popupId};case"chainStart":return{...e,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...e,chain:{...e.chain,idx:e.chain.idx+1}};case"spaceTab":return{...e,spaceTab:a.tab};case"memoConsole":return{...e,memoConsole:a.id,memoTab:0};case"memoTab":return{...e,memoTab:a.tab};case"undoPush":return{...e,undo:[...e.undo,a.entry].slice(-50)};case"undoPop":return{...e,undo:e.undo.slice(0,-1)};case"mapFold":return{...e,mapFolded:a.folded,openFacet:null};default:return e}}const _r=80;function ka(e,a,r,n){var o;if(n!=="signal"&&a.signalOnly&&(!Fe(e)||a.signalEngines.length&&!a.signalEngines.includes(e.engine||""))||n!=="dealKind"&&((o=a.dealKind)!=null&&o.length)&&!a.dealKind.includes(e.dealKind||"")||n!=="sector"&&a.sector.length&&!a.sector.includes(e.sector||"")||n!=="acquirer"&&a.acquirer.trim()&&(e.acquirer||"").trim().toLowerCase()!==a.acquirer.trim().toLowerCase()||n!=="engine"&&a.engine.length&&!a.engine.includes(e.engine||"")||n!=="stage"&&a.stage.length&&!a.stage.includes(e.stage||"")||n!=="angle"&&r&&a.angle.length&&!a.angle.includes(e.angle||"")||n!=="memoLevel"&&r&&a.memoLevel.length&&!a.memoLevel.includes(xn(e)))return!1;if(n!=="win"){if(a.day){if((e.date||"").slice(0,10)!==a.day)return!1}else if(a.win!=="all"){const i=a.win==="1"?0:a.win==="7"?7:30;if(ct(e.date)>i)return!1}}if(n!=="status"&&!r&&a.status!=="all"&&Et(e)!==a.status)return!1;if(n!=="search"&&a.search.trim()){const i=a.search.trim().toLowerCase();if(!`${e.name||""} ${e.tagline||""} ${e.sector||""} ${e.acquirer||""}`.toLowerCase().includes(i))return!1}return!0}function ja(e,a,r){return Ve(e)?ka(e,a.filters,r):a.continent!=="monde"&&e.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(e.cc||"")?!1:ka(e,a.filters,r)}function cs(e,a,r,n){return!(!ja(e,a,r)||r&&!Ho(e,a.ptab,n))}function vn(e,a){const r=a.key,n=o=>{switch(r){case"name":return(o.name||"").toLowerCase();case"country":return o.countryLabel||o.cc||"";case"stage":return o.stage||"";case"amount":return o.amountEur||-1;case"age":return-ct(o.date);case"score":return typeof o.score=="number"?o.score:-1;case"crible":return Wo(o);case"memo":return Vo(o);case"signal":{const i=Fe(o);return i?100-(i.left??0):-1}}};return[...e].sort((o,i)=>{const s=n(o),d=n(i);return s<d?-a.dir:s>d?a.dir:(o.name||"").localeCompare(i.name||"")})}const Ba={},Hn=(Ba==null?void 0:Ba.VITE_API_BASE)||"https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function Vn(){return new Date().toISOString().slice(0,10)}const yn=u.createContext(null);function $r(){return u.useContext(yn)}function ps(e){if(!e||typeof DOMParser>"u")return[];const a=[];try{const r=new DOMParser().parseFromString(e,"text/html");for(const n of[...r.querySelectorAll("p")]){if((n.textContent||"").replace(/\s+/g," ").trim().length<40)continue;const i=n.querySelector("strong,b"),s=((i==null?void 0:i.textContent)||"").replace(/\s+/g," ").trim();if(!s||s.length<2||s.length>60)continue;const d=n.cloneNode(!0);d.querySelectorAll("script,style,iframe").forEach(c=>c.remove()),d.querySelectorAll("*").forEach(c=>{const g=c.tagName==="A"?c.getAttribute("href"):null;[...c.attributes].forEach(l=>c.removeAttribute(l.name)),g&&/^https?:\/\//i.test(g)&&(c.setAttribute("href",g),c.setAttribute("target","_blank"),c.setAttribute("rel","nofollow noopener"))}),a.push({t:s.toLowerCase(),html:d.outerHTML})}}catch{}return a}function us(e){if(!e||typeof DOMParser>"u")return e;try{const r=new DOMParser().parseFromString(`<div id="ed">${e}</div>`,"text/html").getElementById("ed");return r?(r.querySelectorAll("script,style,iframe,object,embed,link,meta,form,input,button").forEach(n=>n.remove()),r.querySelectorAll("*").forEach(n=>{[...n.attributes].forEach(o=>{const i=o.name.toLowerCase(),s=o.value,d=i==="class"||i==="alt"||i==="width"||i==="height"||i.startsWith("data-"),c=(i==="href"||i==="src")&&/^https?:\/\//i.test(s);!d&&!c&&n.removeAttribute(o.name)}),n.tagName==="A"&&n.getAttribute("href")&&(n.setAttribute("target","_blank"),n.setAttribute("rel","nofollow noopener"))}),r.innerHTML):e}catch{return e}}function Wn(e){if(!e||typeof DOMParser>"u")return e;try{const r=new DOMParser().parseFromString(`<div id="tb">${e}</div>`,"text/html").getElementById("tb");if(!r)return e;r.querySelectorAll("script,style,iframe").forEach(n=>n.remove()),r.querySelectorAll("*").forEach(n=>{const o=n.tagName==="A"?n.getAttribute("href"):null,i=n.getAttribute("class"),s=i==="tb-geo"||i==="tb-these"||i==="tb-sec"?i:"";[...n.attributes].forEach(d=>n.removeAttribute(d.name)),s&&n.setAttribute("class",s),o&&/^https?:\/\//i.test(o)&&(n.setAttribute("href",o),n.setAttribute("target","_blank"),n.setAttribute("rel","nofollow noopener"))});for(const n of[...r.querySelectorAll("p")]){const o=(n.textContent||"").replace(/\s+/g," ").trim();o&&o.length<=28&&!n.querySelector("a,ul,li,strong")&&!/[.:;!?]$/.test(o)&&o.split(" ").length<=3&&n.setAttribute("class","tb-geo")}for(const n of[...r.querySelectorAll("p")]){const o=(n.textContent||"").replace(/\s+/g," ").trim();o&&o.length<=64&&/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(o)&&!n.querySelector("a,ul")&&n.setAttribute("class","tb-sec")}for(const n of[...r.querySelectorAll("b,strong")]){const o=(n.textContent||"").replace(/\s+/g," ").trim().toLowerCase();/^[^a-zà-ÿ]*(pour votre th|for your thesis)/.test(o)&&n.setAttribute("class","tb-these")}for(const n of[...r.querySelectorAll("div,section,p")]){const o=(n.textContent||"").replace(/\s+/g," ").trim();if(/^en bref|^in brief/i.test(o)&&n.querySelector("li,p,ul")){n.classList.add("ed-lead");break}}return r.innerHTML}catch{return e}}function Gn(e,a=!1){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||"");if(!r)return e;const i=(a?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||"",s=String(Number(r[3]));return a?`${i} ${s}, ${r[1]}`:`${s==="1"?"1ᵉʳ":s} ${i} ${r[1]}`}function Ur(){const e=u.useContext(yn);if(!e)throw new Error("ThesisEdition* must be under ThesisEditionProvider");return e}function ms({token:e,children:a}){const{dispatch:r,st:n,lang:o}=V(),[i,s]=u.useState(()=>n.filters.day||Vn()),[d,c]=u.useState(null),[g,l]=u.useState(!1),h=u.useCallback(v=>{if(/^\d{4}-\d{2}-\d{2}$/.test(v)){s(v);try{r({type:"filters",patch:{day:v,win:"all"}})}catch{}}},[r]),p=u.useCallback(()=>{s(Vn());try{r({type:"filters",patch:{day:"",win:"all"}})}catch{}},[r]);u.useEffect(()=>{const v=y=>{var j;const f=(j=y.detail)==null?void 0:j.day;typeof f=="string"&&h(f)};return window.addEventListener("pp-edition-day",v),()=>window.removeEventListener("pp-edition-day",v)},[h]),u.useEffect(()=>{n.filters.day&&n.filters.day!==i&&s(n.filters.day)},[n.filters.day]),u.useEffect(()=>{if(!e||!i)return;let v=!1;l(!0);const y=new URLSearchParams({token:e,date:i});return fetch(`${Hn}/cibles/edition.json?${y}`).then(f=>f.json()).then(f=>{v||c(f)}).catch(()=>{v||c({ok:!1,error:"network"})}).finally(()=>{v||l(!1)}),()=>{v=!0}},[e,i]);const b=u.useMemo(()=>`${Hn}/cibles/editions.json?token=${encodeURIComponent(e)}`,[e]),m=u.useMemo(()=>({token:e,day:i,ed:d,loading:g,pickDay:h,pickWindow:p,dayPicked:!!n.filters.day,daysUrl:b,isEn:o==="en"}),[e,i,d,g,h,p,n.filters.day,b,o]);return t.jsx(yn.Provider,{value:m,children:a})}function fs(){const{day:e,daysUrl:a,pickDay:r,dayPicked:n}=Ur(),[o,i]=u.useState(()=>n||Rr());return u.useEffect(()=>{n&&i(!0)},[n]),u.useEffect(()=>{const s=d=>{var c;return i(!!((c=d.detail)!=null&&c.open))};return window.addEventListener(ya,s),()=>window.removeEventListener(ya,s)},[]),o?t.jsx("div",{className:"thesis-days",children:t.jsx(Go,{mode:"local",theme:"dark",month:e.slice(0,7),current:n?e:"",windowDays:0,daysUrl:a,onPick:r})}):null}async function hs(e){try{const a=await fetch("https://proplace.co/actualites/today.json",{cache:"no-store"});if(!a.ok)return null;const r=await a.json(),n=String((r==null?void 0:r.date)||"").slice(0,10);if(!n||e&&n!==e.slice(0,10))return null;const o=String((r==null?void 0:r.html_fr)||(r==null?void 0:r.html_en)||"");return o.trim()?{date:n,title:String((r==null?void 0:r.title_fr)||(r==null?void 0:r.title_en)||""),html:o}:null}catch{return null}}function Yn(e){if(!e)return!1;const a=new Date,r=n=>String(n).padStart(2,"0");return e.slice(0,10)===`${a.getFullYear()}-${r(a.getMonth()+1)}-${r(a.getDate())}`}function Kn(e){const a=(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(a)?`https://proplace.co/actualites/operations-${a}/`:"https://proplace.co/actualites/"}function xs(){const{day:e,ed:a,loading:r,pickWindow:n,dayPicked:o,isEn:i}=Ur(),s=!!(a!=null&&a.ok&&(a.html||a.acquirers_html)),d=(a==null?void 0:a.ok)&&!s,c=a&&!a.ok,g=u.useRef(null),[l,h]=u.useState("fonds"),[p,b]=u.useState(null),[m,v]=u.useState("idle"),y=u.useRef(!1);u.useEffect(()=>{b(null),v("idle"),y.current=!1,h("fonds")},[e]),u.useEffect(()=>{if(l!=="jour"||y.current)return;y.current=!0;let N=!0;return v("load"),hs(e).then(z=>{N&&(b(z),v("fait"))}),()=>{N=!1}},[l,e]);const f=u.useMemo(()=>us((p==null?void 0:p.html)||""),[p==null?void 0:p.html]),j=u.useRef(null);u.useEffect(()=>{const N=j.current;if(!N||!f)return;let z=!1;return Ga(()=>import("./fit-BnaWm7z_.js"),[]).then(async E=>{await E.ensureEditoCss(),!(z||!N.isConnected)&&(E.beautifyEditoRows(N),E.mountCardFits(N))}),()=>{z=!0}},[f]);const C=u.useMemo(()=>Wn((a==null?void 0:a.html)||""),[a==null?void 0:a.html]),k=u.useMemo(()=>Wn((a==null?void 0:a.acquirers_html)||""),[a==null?void 0:a.acquirers_html]);return u.useEffect(()=>{const N=g.current;if(!N||!C)return;let z=!1;return Ga(()=>import("./fit-BnaWm7z_.js"),[]).then(async E=>{await E.ensureEditoCss(),!(z||!N.isConnected)&&(E.beautifyEditoRows(N),E.mountCardFits(N))}),()=>{z=!0}},[C]),t.jsxs("section",{className:"thesis-brief","data-day":(a==null?void 0:a.date)||e,"data-fund":(a==null?void 0:a.fund)||"",children:[t.jsx("style",{children:`
        .thesis-brief{margin:0;padding:18px 16px 22px;background:transparent;border:none;
          border-top:1px solid var(--line,#e2e8f0)}
        .thesis-brief__hd{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin:0 0 8px}
        .thesis-brief__kicker{font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.14em;
          text-transform:uppercase;color:var(--muted,#64748b);font-weight:700}
        .thesis-brief__title{margin:0;font-size:14.5px;font-weight:700;letter-spacing:-.015em;color:#0f172a}
        .thesis-brief__date{margin-left:auto;font-family:ui-monospace,monospace;font-size:11px;color:#94a3b8}
        .thesis-brief__hint{margin:0 0 12px;font-size:12.5px;color:#64748b;line-height:1.45;max-width:62ch}
        /* PLUS PETIT, PLUS AÉRÉ (29/08 : « la police de l'édito est trop grande,
           la présentation n'est pas assez aérée »). Le corps passe de 14 à
           13,5 px, l'interligne de 1,6 à 1,72, et chaque opération gagne de
           l'air au lieu d'un filet serré. */
        .thesis-brief__body,.thesis-brief__acq{font-size:12.5px;line-height:1.6;color:#1e293b}
        .thesis-brief__body p{margin:0 0 16px}
        .thesis-brief__body .tb-these{display:block;margin:12px 0 3px;font-size:10px;
          font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:#0A6B3D}
        /* « EN BREF » : LE MÊME STYLE QUE LE RESTE (29/08, second retour :
           « ton EN BREF devrait avoir la même police et le même style que le
           reste »). Ma première version stylait TOUS les gras du bloc en
           petites capitales sur leur propre ligne — donc « ALAN / lève /
           480 M€ / auprès de Prosus… », une phrase hachée en morceaux. C'était
           mon erreur : la règle visait le titre et attrapait chaque emphase.
           Il ne reste que ce qui manquait vraiment : l'alignement à gauche
           (la feuille de /actualites centre ce bloc, ce qui marche en pleine
           page mais pas dans une colonne de 600 px) et un filet de séparation. */
        .thesis-brief__body .ed-lead{text-align:left!important;margin:0 0 20px;
          padding:0 0 14px;background:none;border:0;border-bottom:1px solid #e2e8f0}
        .thesis-brief__body .ed-lead *{text-align:left!important}
        .thesis-brief__body .ed-lead p,.thesis-brief__body .ed-lead li{
          margin:0 0 10px}
        .thesis-brief__body .ed-lead :last-child{margin-bottom:0}
        /* ⑤ (29/08) : le contenu d'« En bref » est une LISTE — son padding-left
           hérité le décalait par rapport aux textes des sections. Au fer, comme
           le reste. */
        .thesis-brief__body .ed-lead ul,.thesis-brief__body .ed-lead ol{
          margin:0;padding-left:0;list-style:none}
        .thesis-brief__body .ed-lead li{padding-left:0}
        .thesis-brief__body .tb-geo{font-size:10px;font-weight:700;letter-spacing:.12em;
          text-transform:uppercase;color:#94a3b8;margin:18px 0 6px}
        .thesis-brief__body a{color:#0E8A4F;font-weight:600}
        .thesis-brief__body h2,.thesis-brief__body h3{font-size:12.5px;font-weight:700;
          margin:24px 0 9px;letter-spacing:.01em;text-transform:uppercase;color:#334155}
        .thesis-brief__body .ed-sec{margin:26px 0 0}
        .thesis-brief__body .ed-sec-h,.thesis-brief__body .mk-sec h2{font-size:14px;font-weight:700;
          letter-spacing:-.01em;margin:0 0 8px;padding-bottom:6px;border-bottom:1px solid #e2e8f0;color:#0f172a}
        .thesis-brief__body .ed-ops,.thesis-brief__body .mk-ops{list-style:none;margin:0;padding:0}
        .thesis-brief__body .ed-op,.thesis-brief__body .mk-op{padding:15px 0;
          border-bottom:1px solid #f1f5f9}
        .thesis-brief__body .ed-op:last-child,.thesis-brief__body .mk-op:last-child{border-bottom:0}
        .thesis-brief__body .ed-op-t,.thesis-brief__body .mk-op-t{font-size:13.5px;
          line-height:1.5;color:#0f172a}
        .thesis-brief__body .ed-op-m,.thesis-brief__body .mk-op-m{margin-top:5px;
          font-size:12px;line-height:1.55;color:#64748b}
        .thesis-brief__body ul{margin:0 0 14px;padding-left:1.25em}
        .thesis-brief__body li{margin:0 0 7px}
        .thesis-brief__loading,.thesis-brief__empty,.thesis-brief__err{
          margin:0;font-size:13px;color:#64748b;line-height:1.5}
        .thesis-brief__empty b{color:#0f172a}
        .thesis-brief__err{color:#b91c1c}
        .thesis-brief__clear{margin-top:12px;font-size:12.5px;font-weight:700;color:#0E8A4F;
          background:none;border:none;cursor:pointer;padding:0;text-decoration:underline}
        /* -- UNE SEULE TAILLE (29/08 : "unifie et reduis cette police") --
           Le brief melangeait 14/13,5/13/12,5/12 px selon que le bloc venait
           du LLM, du repli ou de mes passes successives. Fin des exceptions :
           TOUT le corps a 12 px / 1,62, TOUS les intertitres a 11 px en
           petites capitales, les reperes (pays, "pour votre these") a 10 px.
           Pose en dernier : il bat tout ce qui precede. */
        /* 29/08, un cran au-dessus (« augmente d'un cran la police de tout
           Édito · winhealthgroup pour qu'elle soit comme Édito du jour ») :
           corps 13 px — la taille de l'article partagé. Toujours UNE seule. */
        .thesis-brief__body,.thesis-brief__body p,.thesis-brief__body li,
        .thesis-brief__body .ed-lead p,.thesis-brief__body .ed-lead li,
        .thesis-brief__body .ed-op-t,.thesis-brief__body .ed-op-m,
        .thesis-brief__acq{font-size:13px;line-height:1.65}
        .thesis-brief__body p{margin:0 0 13px}
        /* et TOUT au fer à gauche — plus aucun héritage centré possible,
           d'où qu'arrive le HTML (« aligne ça à gauche », 3ᵉ fois). */
        .thesis-brief__body,.thesis-brief__body *{text-align:left!important}
        .thesis-brief__body h2,.thesis-brief__body h3,
        .thesis-brief__body .tb-sec{font-size:11.5px;font-weight:700;
          letter-spacing:.06em;text-transform:uppercase;color:#334155;
          margin:22px 0 8px;line-height:1.5}
        .thesis-brief__body .tb-geo,.thesis-brief__body .tb-these{font-size:10px}
        .thesis-brief__all{display:inline-block;margin-top:10px;font-size:12.5px;font-weight:700;
          color:#0E8A4F;text-decoration:none;border-bottom:1px solid #BBF7D0;padding-bottom:1px}
        .thesis-brief__all:hover{border-bottom-color:#0E8A4F}
        .thesis-brief__sw{display:flex;gap:6px;margin:0 0 12px;flex-wrap:wrap}
        .thesis-brief__sw button{font:inherit;font-size:12px;font-weight:700;letter-spacing:.01em;
          padding:6px 12px;border-radius:999px;border:1px solid #e2e8f0;background:#fff;
          color:#475569;cursor:pointer;white-space:nowrap}
        .thesis-brief__sw button:hover{border-color:#0E8A4F;color:#0f172a}
        .thesis-brief__sw button[aria-selected="true"]{background:#0E8A4F;border-color:#0E8A4F;color:#fff}
      `}),t.jsxs("header",{className:"thesis-brief__hd",children:[t.jsx("span",{className:"thesis-brief__kicker",children:i?"Daily brief":"Brief du jour"}),t.jsxs("h2",{className:"thesis-brief__title",children:[i?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",(a==null?void 0:a.count)!=null&&a.count>0?` · ${a.count}`:""]}),((a==null?void 0:a.date)||e)&&t.jsx("time",{className:"thesis-brief__date",dateTime:(a==null?void 0:a.date)||e,children:(a==null?void 0:a.date)||e})]}),t.jsxs("div",{className:"thesis-brief__sw",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":l==="fonds",onClick:()=>h("fonds"),children:(i?"Editorial · ":"Édito · ")+((a==null?void 0:a.fund)||(i?"your thesis":"votre thèse"))}),t.jsx("button",{type:"button",role:"tab","aria-selected":l==="jour",onClick:()=>h("jour"),children:i?"Editorial of the day":"Édito du jour"})]}),l==="fonds"&&t.jsx("p",{className:"thesis-brief__hint",children:i?"Same content as your daily email for this fund. Pick a day above the map to change this brief and the LIVE ticker.":"Même contenu que l’email quotidien de ce fonds. Choisir un jour au-dessus de la carte change ce brief et le LIVE."}),l==="fonds"&&r&&!s&&t.jsx("p",{className:"thesis-brief__loading",children:i?"Loading your thesis brief…":"Chargement de votre brief de thèse…"}),l==="fonds"&&c&&t.jsxs("p",{className:"thesis-brief__err",children:[i?"Could not load this brief.":"Impossible de charger ce brief.",a!=null&&a.error?` (${a.error})`:""]}),l==="fonds"&&d&&!r&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"thesis-brief__empty",children:i?Yn(e)?t.jsxs(t.Fragment,{children:["No operation relevant to your thesis was found ",t.jsx("b",{children:"today"}),"."]}):t.jsxs(t.Fragment,{children:["No operation relevant to your thesis was found on ",t.jsx("b",{children:Gn(e,!0)}),"."]}):Yn(e)?t.jsxs(t.Fragment,{children:["Aucune opération pertinente pour votre thèse n’a été relevée ",t.jsx("b",{children:"aujourd’hui"}),"."]}):t.jsxs(t.Fragment,{children:["Aucune opération pertinente pour votre thèse n’a été relevée le ",t.jsx("b",{children:Gn(e)}),"."]})}),t.jsx("button",{type:"button",className:"thesis-brief__all",onClick:()=>h("jour"),children:i?"See all of the day’s operations →":"Voir toutes les opérations du jour →"})]}),l==="fonds"&&s&&C?t.jsx("div",{ref:g,className:"thesis-brief__body zoom-body ppart",dangerouslySetInnerHTML:{__html:C}}):null,l==="fonds"&&s&&k?t.jsx("div",{className:"thesis-brief__acq zoom-body",dangerouslySetInnerHTML:{__html:k}}):null,l==="jour"&&(f?t.jsxs(t.Fragment,{children:[(p==null?void 0:p.title)&&t.jsx("h3",{className:"thesis-brief__title",style:{margin:"0 0 10px"},children:p.title}),t.jsx("div",{ref:j,className:"thesis-brief__body zoom-body ppart",dangerouslySetInnerHTML:{__html:f}})]}):t.jsx("p",{className:m==="fait"?"thesis-brief__empty":"thesis-brief__loading",children:m!=="fait"?i?"Loading the daily editorial…":"Chargement de l’édito du jour…":i?t.jsxs(t.Fragment,{children:["No shared editorial for this day. ",t.jsx("a",{className:"thesis-brief__all",href:Kn(e),target:"_blank",rel:"noopener noreferrer",children:"Open the day’s page →"})]}):t.jsxs(t.Fragment,{children:["Pas d’édito partagé pour ce jour. ",t.jsx("a",{className:"thesis-brief__all",href:Kn(e),target:"_blank",rel:"noopener noreferrer",children:"Ouvrir la page du jour →"})]})})),o&&t.jsx("button",{type:"button",className:"thesis-brief__clear",onClick:n,children:i?"← See all":"← Voir tout"})]})}const gs=300,da=7,bs={fr:{ma:"🤝 M&A",levees:"🚀 Levées de fonds",nominations:"👤 Nominations",recrutements:"💼 Offres d'emploi",actualites:"📰 Autres actualités"},en:{ma:"🤝 M&A",levees:"🚀 Fundraising",nominations:"👤 Appointments",recrutements:"💼 Job offers",actualites:"📰 Other news"}},Hr={fr:{hiring:"💼 Recrute",raised:"💰 Lève des fonds",news:"📰 Presse",posting:"📣 Publie",building:"💻 Construit",community:"💬 Communauté",registry:"🆕 Nouveau",exodus:"👋 Départs",other:"🔔 Signal"},en:{hiring:"💼 Hiring",raised:"💰 Raising",news:"📰 Press",posting:"📣 Posting",building:"💻 Building",community:"💬 Community",registry:"🆕 New",exodus:"👋 Exodus",other:"🔔 Signal"}},vs=["hiring","raised","news","posting","building","community","registry","exodus","other"];function _a(e){const a=(e.rubrique||"").toLowerCase();if(a==="ma"||a==="levees"||a==="nominations"||a==="recrutements")return a;if(e.dealKind==="ma")return"ma";if(e.dealKind==="levee")return"levees";const r=(e.engine||"").toLowerCase();if(r==="nominations")return"nominations";if(r==="recrutements")return"recrutements";if(Jo(r)&&r!=="media")return"news:"+r;const n=Fe(e);return n?"sig:"+(n.theme&&Hr.fr[n.theme]?n.theme:"other"):"actualites"}function ys(){const{dossiers:e,st:a,t:r,dispatch:n,contName:o,pipe:i,lang:s,fund:d}=V(),c=$r(),g=s==="en",[l,h]=u.useState("all"),[p,b]=u.useState(!1),m=u.useMemo(()=>{var xe;const x=(a.filters.day||"").slice(0,10),T=_=>!(!i&&a.continent!=="monde"&&_.continent!==a.continent||x&&(_.date||"").slice(0,10)!==x),B=e.filter(_=>T(_)&&Fe(_)&&(!i||_.kind!=="target"||ze(_)!==5)),G=i&&(((xe=c==null?void 0:c.ed)==null?void 0:xe.ops)||[]).length?c.ed.ops.map(_=>xa(_,s)).filter(_=>!!_).map(_=>(_.briefOnly=!0,_)).filter(_=>!x||(_.date||"").slice(0,10)===x):[],H=e.filter(_=>T(_)&&_.kind==="op"&&(x?!0:ct(_.date)<=da)),Q=i?G.length?G:H.filter(_=>{const se=(d||"").trim().toLowerCase();if(!se)return!1;const me=_.match||null;return me?Object.keys(me).map(Le=>Le.trim().toLowerCase()).includes(se):!1}):H,X=x||new Date().toISOString().slice(0,10),K=_=>{const se=_a(_);return se==="ma"?0:se==="levees"?1:2};Q.sort((_,se)=>{const me=K(_)-K(se);if(me)return me;const Le=(_.date||"").slice(0,10)===X?0:1,te=(se.date||"").slice(0,10)===X?0:1;return Le!==te?Le-te:(se.amountEur||0)-(_.amountEur||0)});const ue=new Set,ee=[];for(const _ of[...Q,...vn(B,{key:"signal",dir:-1})]){const se=_.id||_.name;!se||ue.has(se)||(ue.add(se),ee.push(_))}return i&&ee.length===0?e.filter(se=>T(se)&&ct(se.date)<=da).sort((se,me)=>(me.date||"").localeCompare(se.date||"")).slice(0,80):ee},[e,a.continent,a.filters.day,i,d,s,c]),v=u.useMemo(()=>{const x={};for(const T of m){const B=_a(T);x[B]=(x[B]||0)+1}return x},[m]),y=u.useMemo(()=>l==="all"?m:m.filter(x=>_a(x)===l),[m,l]),f=u.useMemo(()=>y.slice(0,gs),[y]),j=y.length-f.length,C=u.useRef(null);u.useEffect(()=>{var Q,X;const x=C.current;if(!x)return;const T=()=>{const K=x.scrollWidth;K<200||(x.style.animationDuration=Math.max(18,Math.round(K/130))+"s")};T();const B=requestAnimationFrame(T),G=window.setTimeout(T,1200);let H=!0;return(X=(Q=document.fonts)==null?void 0:Q.ready)==null||X.then(()=>{H&&T()}),()=>{H=!1,cancelAnimationFrame(B),window.clearTimeout(G)}},[f.length,l]);const k=x=>x==="all"?m.length:v[x]||0,N=x=>{if(x==="all")return g?"All":"Tout";if(x.startsWith("sig:"))return Hr[g?"en":"fr"][x.slice(4)]||"🔔";if(x.startsWith("news:")){const T=x.slice(5);return Ko[T]?Qo(T,g?"en":"fr"):x}return bs[g?"en":"fr"][x]},z=[{k:"all"}],E=["ma","levees"].filter(x=>k(x)>0||x===l);if(E.length){z.push({g:g?"Deals":"Opérations"});for(const x of E)z.push({k:x})}const q=["nominations","recrutements"].filter(x=>k(x)>0||x===l),A=Yo.filter(x=>x!=="media").map(x=>"news:"+x).filter(x=>k(x)>0||x===l),R=k("actualites")>0||l==="actualites"?["actualites"]:[];if(q.length||A.length||R.length){z.push({g:g?"News":"Actualités"});for(const x of q)z.push({k:x});for(const x of A)z.push({k:x});for(const x of R)z.push({k:x})}const P=vs.map(x=>"sig:"+x).filter(x=>k(x)>0||x===l);if(P.length){z.push({g:g?"Signals (your engines)":"Signaux (vos moteurs)"});for(const x of P)z.push({k:x})}const I=x=>{try{return new Date(x+"T12:00:00Z").toLocaleDateString(g?"en-GB":"fr-FR",{day:"numeric",month:"long"})}catch{return x}},L=(()=>{const x=(a.filters.day||"").slice(0,10),T=!i&&a.continent!=="monde"&&o?g?` Scope: ${o}.`:` Périmètre : ${o}.`:"";return x?(g?`LIVE covers the events of ${I(x)}.`:`Le LIVE regroupe les événements du ${I(x)}.`)+T:(g?`LIVE covers the still-open signals and the deals of the last ${da} days.`:`Le LIVE regroupe les signaux encore ouverts et les opérations des ${da} derniers jours.`)+T})(),F=x=>f.map(T=>t.jsxs("button",{type:"button",className:"tk"+(_e(T)?" spent":""),onClick:B=>{const G=T.briefOnly===!0;try{window.dispatchEvent(new CustomEvent("ppmap:focus",{detail:{id:G?"":T.id,name:T.name,url:T.url||"",text:T.tagline||T.headline||"",card:T.card}}))}catch{}if(G||n({type:"focus",id:T.id}),a.dens!=="liste"){const H=B.currentTarget.getBoundingClientRect();n({type:"popup",id:T.id,anchor:{x:H.left+H.width/2,y:H.bottom}})}},title:T.name+(T.tagline?" — "+T.tagline:""),children:[t.jsx(ht,{o:T}),t.jsxs("span",{className:"who",children:[t.jsx(No,{o:T}),t.jsx("span",{className:"co",children:T.name})]}),typeof T.amountEur=="number"&&T.amountEur>0&&t.jsx("span",{className:"am",children:Gd(T.amountEur)}),T.sector&&t.jsx("span",{className:"mt",children:T.sector}),t.jsx(Fa,{o:T}),t.jsx("span",{className:"tkgo",children:"→"})]},x+(T.id||T.name))).concat(j>0?[t.jsx("span",{className:"tk quiet",children:g?`+ ${j} more — filter by section to see them`:`+ ${j} autres — filtrez par rubrique pour les voir`},x+":more")]:[]);return t.jsxs("div",{className:"ticker",children:[t.jsxs("span",{className:"lbl",children:[t.jsx("i",{}),r.live]}),t.jsxs("span",{className:"tkfil",onBlur:x=>{x.currentTarget.contains(x.relatedTarget)||b(!1)},children:[t.jsxs("button",{type:"button",className:"tkfilb","aria-expanded":p,onClick:()=>b(x=>!x),children:[N(l),t.jsx("b",{children:k(l)}),t.jsx("span",{"aria-hidden":"true",children:"▾"})]}),t.jsxs("div",{className:"tkfilm",hidden:!p,children:[t.jsx("span",{className:"tkfilscope",children:L}),z.map(x=>"g"in x?t.jsx("span",{className:"tkfilg",children:x.g},x.g):t.jsxs("button",{type:"button","aria-pressed":x.k===l,onClick:()=>{h(x.k),b(!1)},children:[N(x.k),t.jsx("b",{children:k(x.k)})]},x.k))]})]}),t.jsx("div",{className:"win",children:f.length?t.jsxs("div",{className:"run",ref:C,children:[F(0),F(1)]}):t.jsx("div",{className:"run",style:{animation:"none"},children:t.jsx("span",{className:"tk quiet",children:r.liveQuiet(o)})})}),!!c&&t.jsxs("button",{type:"button",className:"tk-edito",title:g?"Show today's editorial":"Afficher Edito du jour",onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:edito"))}catch{}},children:["📖 ",g?"Today's editorial":"Edito du jour"]}),!!c&&t.jsx(ks,{isEn:g})]})}const ws=t.jsxs("svg",{viewBox:"0 0 16 16",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"1.4","aria-hidden":"true",children:[t.jsx("rect",{x:"2",y:"3.5",width:"12",height:"10.5",rx:"1.5"}),t.jsx("path",{d:"M2 6.5h12M5.5 2v3M10.5 2v3"})]});function ks({isEn:e}){const[a,r]=u.useState(()=>Rr());u.useEffect(()=>{const o=i=>{var s;return r(!!((s=i.detail)!=null&&s.open))};return window.addEventListener(ya,o),()=>window.removeEventListener(ya,o)},[]);const n=a?e?"Hide the days":"Masquer les jours":e?"Show the days":"Voir les jours";return t.jsx("button",{type:"button",className:"dytog","aria-pressed":a,title:n,"aria-label":n,onClick:()=>Xo(!a),children:ws})}const wn="+33 6 83 10 72 86",Na="alexandre@proplace.co",Vr=`tel:${wn.replace(/[^\d+]/g,"")}`;function js(){return null}class at extends u.Component{constructor(){super(...arguments);An(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(r,n){console.error(`[atl2] bandeau « ${this.props.name} » en échec :`,r,n.componentStack)}render(){return this.state.dead?this.props.fallback??null:this.props.children}}const Wr=[["Retenu","csKept"],["Analysé","csAnalysed"],["À trancher","csPending"],["Validé","csValidated"],["Écarté","csOut"]];function Qn(e,a){if((xt(e)||"").startsWith("CALL")&&ze(e)===3)return[["Validé",a.csYes],["Écarté",a.csNo]];const n=ze(e)>=2;return Wr.filter(([o])=>!(n&&o==="Retenu")).map(([o,i])=>[o,a[i]])}function Ns({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:o,doAnalyse:i,memoQueued:s}=V(),[d,c]=u.useState(!1),[g,l]=u.useState(""),[h,p]=u.useState(!1),b=u.useRef(null);if(!r.pipe||!n||r.lockActions)return null;const m=(e.ceoStatus||"").trim(),v=async f=>{if(g)return;if(f==="Analysé"&&!e.memoUrl){p(!0);return}l(f);const j=(Qn(e,a).find(([k])=>k===f)||[f,f])[1],C=await o(e,f,{msg:a.csMoved(e.name,j)});l(""),C&&(c(!1),p(!1))},y=Qn(e,a);return y.length===2?t.jsx("span",{className:"rstat rst2",onClick:f=>f.stopPropagation(),children:y.map(([f,j])=>t.jsx("button",{type:"button",className:"rsd "+(f==="Validé"?"yes":"no")+(g===f?" busy":""),disabled:!!g,onClick:()=>{v(f)},children:j},f))}):t.jsxs("span",{className:"rstat",onClick:f=>f.stopPropagation(),onMouseEnter:()=>{b.current&&(window.clearTimeout(b.current),b.current=null),c(!0)},onMouseLeave:()=>{g||(b.current=window.setTimeout(()=>{c(!1),p(!1),b.current=null},350))},children:[t.jsxs("button",{type:"button",className:"rstb",title:a.csLabel,onClick:()=>{c(!0),p(!1)},children:[m||a.csNone,t.jsx("i",{children:"▾"})]}),d&&t.jsx("span",{className:"rstm",children:h?t.jsxs("span",{className:"rstask",children:[t.jsx("b",{children:a.csAnaNeedMemo}),t.jsx("button",{type:"button",className:"rsta pri",disabled:s.has(e.id),onClick:()=>{i(e),p(!1),c(!1)},children:s.has(e.id)?a.actMemoQueue:a.csAnaRun}),t.jsx("button",{type:"button",className:"rsta",onClick:()=>{(async()=>{l("Analysé");const f=await o(e,"Analysé");l(""),f&&(c(!1),p(!1))})()},children:a.csAnaAnyway})]}):y.map(([f,j])=>t.jsx("button",{type:"button",className:"rsti"+(m===f?" on":"")+(g===f?" busy":""),disabled:!!g,onClick:()=>{v(f)},children:j},f))})]})}function Es({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:o}=V(),[i,s]=u.useState(""),[d,c]=u.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const g=(e.ceoStatus||"").trim(),l=(xt(e)||"").startsWith("CALL")&&ze(e)===3,h=ze(e)>=2,p=async m=>{if(i||m==="Analysé"&&!e.memoUrl&&!window.confirm(a.csAnaConfirm))return;s(m);const v=await o(e,m);s(""),v&&(c(!0),setTimeout(()=>c(!1),2200))},b=l?[["Validé",a.csYes],["Écarté",a.csNo]]:Wr.filter(([m])=>!(h&&m==="Retenu")).map(([m,v])=>[m,a[v]]);return t.jsxs("div",{className:"csp",onClick:m=>m.stopPropagation(),children:[t.jsxs("div",{className:"csrow",children:[t.jsx("span",{className:"cslb",children:a.csLabel}),b.map(([m,v])=>t.jsx("button",{type:"button",className:"csb"+(g===m?" on":"")+(i===m?" busy":""),disabled:!!i,onClick:()=>{p(m)},children:v},m)),d&&t.jsx("span",{className:"csok",children:a.csSaved})]}),t.jsx(Ss,{o:e})]})}function Ss({o:e}){const{t:a,saveNote:r,flash:n}=V(),[o,i]=u.useState(e.ceoNote||""),[s,d]=u.useState(!1),[c,g]=u.useState(!1),l=o.trim()!==(e.ceoNote||"").trim(),h=async()=>{if(s||!l)return;d(!0);const p=await r(e,o.trim());d(!1),p&&(g(!0),setTimeout(()=>g(!1),2200),n(a.csNoteSaved))};return t.jsxs("div",{className:"csnote",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:a.csNotePh,value:o,disabled:s,onChange:p=>i(p.target.value),onKeyDown:p=>{p.key==="Enter"&&h()}}),t.jsx("button",{type:"button",disabled:s||!l,onClick:()=>{h()},children:c?a.csNoteSaved:a.csNoteOk})]})}function Cs({placeholder:e,onDone:a}){const{t:r}=V(),[n,o]=u.useState("");return t.jsxs("div",{className:"csnote why",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:e,value:n,autoFocus:!0,onChange:i=>o(i.target.value),onKeyDown:i=>{i.key==="Enter"&&a(n.trim()),i.key==="Escape"&&a("")},onBlur:()=>{n.trim()||a("")}}),t.jsx("button",{type:"button",onClick:()=>a(n.trim()),children:r.whySend})]})}function zs({o:e}){var y;const{t:a,token:r,caps:n,canWrite:o,stageOf:i,setStage:s,flashErr:d}=V(),[c,g]=u.useState(!1);if(!n.pipe||!o||n.lockActions||ze(e)!==4)return null;const l=i(e),h=(l==null?void 0:l.stage)||"todo",p=async f=>{if(c||f===h)return;g(!0);const j=l;s(e,{stage:f,stamps:(l==null?void 0:l.stamps)||{}});const C=Math.max(Date.now(),Jn+=1);Jn=C;const k=await Zo(r,{company:e.name||"",stage:f,cts:C,deal_id:e.airtableId,check_id:e.checkId});g(!1),!k.stale&&(k.ok||(s(e,j),d(a.actErr)))},b=(y=l==null?void 0:l.stamps)==null?void 0:y.sent,m=b?Math.floor((Date.now()-Date.parse(b))/864e5):0,v=h==="sent"&&b&&m>=4;return t.jsxs("div",{className:"stg",onClick:f=>f.stopPropagation(),children:[t.jsx("span",{className:"stglb",children:a.stgLabel}),a.stg.map(([f,j])=>t.jsx("button",{type:"button",className:"stgb"+(h===f?" on":""),disabled:c,onClick:()=>{p(f)},children:j},f)),v&&t.jsx("span",{className:"stgj4",children:a.j4Badge(m)})]})}let Jn=0;const Vt=8,ft=360;function Xn({text:e}){const a=e.split(/\*\*(.+?)\*\*/g);return t.jsx(t.Fragment,{children:a.map((r,n)=>n%2?t.jsx("b",{children:r},n):t.jsx("span",{children:r},n))})}function Zn({text:e}){const a=(e||"").split(`
`).map(n=>n.trim()).filter(Boolean),r=a.filter(n=>n.startsWith("·"));return t.jsxs(t.Fragment,{children:[a.filter(n=>!n.startsWith("·")).map((n,o)=>t.jsx("p",{children:t.jsx(Xn,{text:n})},"p"+o)),r.length>0&&t.jsx("ul",{className:"tour-ul",children:r.map((n,o)=>t.jsx("li",{children:t.jsx(Xn,{text:n.replace(/^·\s*/,"")})},"l"+o))})]})}function As({steps:e,onClose:a}){const{t:r,dispatch:n,counts:o,st:i}=V(),[s,d]=u.useState(0),[c,g]=u.useState(null),[l,h]=u.useState([]),p=u.useRef(!1),b=u.useRef({ptab:i.ptab,dens:i.dens,modal:i.modal}),m=u.useRef(!1);u.useEffect(()=>{const E=b.current;return()=>{m.current||(n({type:"ptab",tab:E.ptab}),n({type:"dens",dens:E.dens}),n({type:"modal",modal:E.modal}))}},[]),u.useEffect(()=>{p.current||(p.current=!0,h(e.filter(E=>!!document.querySelector(E.need||E.sel))))},[e]);const v=l[s],y=s>=l.length;u.useEffect(()=>{if(v&&(v.ptab!==void 0&&i.ptab!==v.ptab&&n({type:"ptab",tab:v.ptab}),v.dens&&i.dens!==v.dens&&n({type:"dens",dens:v.dens}),i.modal!==(v.modal??null)&&n({type:"modal",modal:v.modal??null}),v.click)){const E=v.click,q=window.setTimeout(()=>{const A=document.querySelector(E);A&&A.getAttribute("aria-selected")!=="true"&&A.click()},60);return()=>window.clearTimeout(q)}},[s,v]);const f=u.useRef(-1),j=u.useCallback(()=>{if(!v){g(null);return}const E=R=>{if(!R)return null;for(const P of document.querySelectorAll(R)){const I=P.getBoundingClientRect();if(I.width>1&&I.height>1)return P}return null},q=E(v.sel)||E(v.need);if(!q){g(null);return}f.current!==s&&(f.current=s,q.scrollIntoView({block:"nearest",behavior:"smooth"}));const A=q.getBoundingClientRect();g(R=>R&&Math.abs(R.top-A.top)<1&&Math.abs(R.left-A.left)<1&&Math.abs(R.width-A.width)<1&&Math.abs(R.height-A.height)<1?R:A)},[v,s]);u.useLayoutEffect(()=>{j();const E=[90,300,700,1300].map(R=>window.setTimeout(j,R)),q=window.setInterval(j,400),A=()=>j();return window.addEventListener("scroll",A,!0),window.addEventListener("resize",A),()=>{E.forEach(R=>window.clearTimeout(R)),window.clearInterval(q),window.removeEventListener("scroll",A,!0),window.removeEventListener("resize",A)}},[j]);const C=u.useRef(a);if(C.current=a,u.useEffect(()=>{const E=q=>{q.key==="Escape"?(q.preventDefault(),q.stopPropagation(),C.current()):q.key==="ArrowRight"?d(A=>A+1):q.key==="ArrowLeft"&&d(A=>Math.max(0,A-1))};return document.addEventListener("keydown",E,!0),()=>document.removeEventListener("keydown",E,!0)},[]),!l.length)return null;let k=null;const N=E=>()=>{m.current=!0,n({type:"modal",modal:null}),E()};if(y){const E=o[3]||0;E>0?k={title:E===1?r.ahaATitle1:r.ahaATitleN(E),body:r.ahaABody,btn:r.ahaABtn,go:N(()=>{n({type:"ptab",tab:3}),a()})}:(o[1]||0)>0?k={title:r.ahaRetTitle(o[1]||0),body:r.ahaRetBody,btn:r.ahaRetBtn,go:N(()=>{n({type:"ptab",tab:1}),a()})}:(o[0]||0)>0?k={title:r.ahaEvalTitle(o[0]||0),body:r.ahaEvalBody,btn:r.ahaEvalBtn,go:N(()=>{n({type:"ptab",tab:0}),a()})}:k={title:r.ahaCTitle,body:r.ahaCBody,btn:r.ahaCBtn,go:N(()=>{n({type:"modal",modal:"crit"}),a()})}}let z={left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:ft};if(!y&&c){const E=c.bottom+14,q=window.innerHeight-E;let A=q>190?E:Math.max(12,c.top-200),R=Math.min(Math.max(12,c.left+c.width/2-ft/2),window.innerWidth-ft-12);q<=190&&c.top<212&&(window.innerWidth-c.right>=ft+40?R=Math.min(c.right+26,window.innerWidth-ft-12):c.left>=ft+40&&(R=Math.max(12,c.left-ft-26)),A=Math.max(12,c.top-Vt)),z={left:R,top:A,width:ft}}return Pt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"tour",role:"dialog","aria-modal":"true",children:[!y&&c&&t.jsx("div",{className:"tour-hole",style:{left:c.left-Vt,top:c.top-Vt,width:c.width+Vt*2,height:c.height+Vt*2}}),(y||!c)&&t.jsx("div",{className:"tour-veil"}),t.jsxs("div",{className:"tour-card"+(y?" fin":""),style:z,children:[y&&k?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:k.title}),t.jsx(Zn,{text:k.body}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",onClick:()=>d(l.length-1),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:k.go,children:k.btn})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"tour-n",children:[r.tourStep(s+1,l.length),t.jsx("span",{className:"tour-bar",children:t.jsx("i",{style:{width:(s+1)/l.length*100+"%"}})})]}),t.jsx("h3",{children:v==null?void 0:v.title}),t.jsx(Zn,{text:(v==null?void 0:v.body)||""}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",disabled:s===0,onClick:()=>d(E=>Math.max(0,E-1)),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:()=>d(E=>E+1),children:s===l.length-1?r.tourDone:r.tourNext})]})]}),t.jsx("button",{type:"button",className:"tour-x","aria-label":r.tourClose,title:r.tourClose,onClick:a,children:"×"})]})]})}),document.body)}function Gr(e){let a="";for(const r of e){const n=(r.date||"").slice(0,10);n&&n>a&&(a=n)}return a}function Yr(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(e||"");return r?a==="en"?`${r[2]}/${r[3]}`:`${r[3]}/${r[2]}`:""}function Ts(){var q,A;const{dossiers:e,scopedAll:a,pipe:r,mode:n,t:o,st:i,lang:s,data:d,dispatch:c}=V(),g=r?a:e,l=u.useMemo(()=>g.filter(R=>ct(R.date)===0&&R.kind==="target"),[g]),h=u.useMemo(()=>r?a.filter(R=>R.kind==="target"&&ze(R)===0).slice().sort((R,P)=>(P.date||"").localeCompare(R.date||"")):[],[a,r]),p=u.useMemo(()=>l.filter(R=>r?ze(R)===0:!_e(R)),[l,r]),b=r?h:p,m=r?a.length-h.length:l.length-p.length,v=r?a.length:l.length,y=v?Math.min(100,m/v*100):100,f=u.useMemo(()=>Gr(g),[g]),j=!!f&&ct(f)>0,C=u.useMemo(()=>j?g.filter(R=>(R.date||"").slice(0,10)===f):[],[g,f,j]),k=typeof((q=d.stats)==null?void 0:q.kept_today)=="number"?d.stats.kept_today:null,N=typeof((A=d.stats)==null?void 0:A.screened_today)=="number"?d.stats.screened_today:l.length;let z;j?z=o.morningLast(C.length,h.length,Yr(f,s)):r?z=o.morningThesis(N,h.length,k):l.length?m===0?z=o.goalSourced(l.length):m>=l.length?z=o.goalCleared:z=o.goalDone(m,l.length):z=o.goalSourced(0);const E=()=>{if(!r){c({type:"pile",on:!0});return}c({type:"ptab",tab:0}),n==="client"&&h.length&&c({type:"chainStart",queue:h.map(R=>R.id)})};return t.jsxs("div",{className:"goal",children:[t.jsx("span",{className:"gtxt",title:r?o.morningEnginesTitle:void 0,dangerouslySetInnerHTML:{__html:z}}),t.jsx("div",{className:"pbar",children:t.jsx("i",{style:{width:y+"%"}})}),b.length>0&&t.jsx("button",{type:"button",className:"pilebtn",onClick:E,children:r?o.morningEval(b.length):i.pileMode?o.goalContinue(b.length):o.goalTreat}),t.jsx("span",{className:"gspace"})]})}function qs(){var B,G;const{t:e,lang:a,st:r,dispatch:n,token:o,fund:i,data:s,dossiers:d,mode:c,doSync:g,startTour:l,flash:h,flashErr:p}=V(),[b,m]=u.useState(null),[v,y]=u.useState(!0),[f,j]=u.useState([]),C=c==="client";u.useEffect(()=>{if(!o||!i)return;let H=!0;return y(!0),(async()=>{const[Q,X]=await Promise.all([gn(i),Fr(o)]);H&&(Q&&m(Q),y(!1),j(X))})(),()=>{H=!1}},[o,i]);const[k,N]=u.useState(!1),z=()=>{!C||k||!i||(N(!0),ei(i).then(H=>{N(!1),H?h(e.identRepubDone):p(e.actErr)}))},E=(b==null?void 0:b.per_day)??null,q=((B=b==null?void 0:b.pool_order)==null?void 0:B.length)??0,A=f.filter(H=>H.status==="running").length,R=u.useMemo(()=>d.filter(H=>H.kind==="target"&&_e(H)).length,[d]),P=s.marketEstimate,I=typeof((G=s.stats)==null?void 0:G.screened)=="number"?s.stats.screened:R,L=P&&P>0?Math.min(100,Math.round(I/P*100)):null,F=H=>H.toLocaleString(a==="en"?"en-US":"fr-FR"),x=(i||"P").split(/\s+/).map(H=>H[0]).join("").slice(0,2).toUpperCase(),T=(()=>{const H=Date.parse(s.generatedAt||"");if(Number.isNaN(H))return"";const Q=new Date(H),X=K=>String(K).padStart(2,"0");return`${X(Q.getDate())}/${X(Q.getMonth()+1)} à ${X(Q.getHours())}:${X(Q.getMinutes())}`})();return t.jsxs("div",{className:"ident",children:[t.jsxs("div",{className:"idtop",children:[t.jsxs("span",{className:"brand",children:[t.jsx("b",{children:i?x:t.jsx("span",{className:"skt sk-ini"})}),t.jsx("i",{children:i||t.jsx("span",{className:"skt sk-nm"})})]}),t.jsx("h1",{children:i?e.identTitle(i):t.jsx("span",{className:"skt sk-h1","aria-label":e.loadingV2})}),t.jsx("span",{className:"idsp"}),T?t.jsx("span",{className:"idupd",children:e.identUpdatedAt(T)}):t.jsx("span",{className:"skt sk-upd"}),t.jsx("button",{type:"button",className:"ic",title:e.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),t.jsx("button",{type:"button",className:"ic",title:e.tourPlayTitle,onClick:l,children:"▶"})]}),t.jsxs("div",{className:"idmain",children:[L===null&&I>0&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsx("span",{className:"ev",children:t.jsx("b",{children:F(I)})})]}),L!==null&&P&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsxs("span",{className:"ev",children:[t.jsx("span",{className:"bar",children:t.jsx("i",{style:{width:L+"%"}})}),t.jsxs("b",{children:[L," %"]})]}),t.jsx("span",{className:"edv"}),t.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:e.identCoverageOf(I,P)}})]}),t.jsxs("span",{className:"engine",title:e.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[t.jsx("span",{className:"el",children:e.identEngine}),E!==null&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"ev",children:[t.jsx("b",{className:"q",children:E})," ",e.identPerDay]}),t.jsx("span",{className:"edv"})]}),E===0&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"epause",title:e.identPauseTitle,children:e.identPause}),t.jsx("span",{className:"edv"})]}),A>0&&t.jsxs("span",{className:"ev",children:["⏳ ",A]}),t.jsx("span",{className:"ego",children:v?e.identPendingWait:e.identPending(q)}),t.jsx("button",{type:"button",className:"ebell",title:e.memoAlertBtn,onClick:H=>{H.stopPropagation(),n({type:"modal",modal:"memoalert"})},children:"🔔"})]}),t.jsx("span",{className:"idsp"}),t.jsxs("span",{className:"icgrp",children:[t.jsx("button",{type:"button",className:"ic","data-tour":"export",title:e.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),t.jsx("button",{type:"button",className:"ic","data-tour":"plug",title:e.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),t.jsx("button",{type:"button",className:"ic","data-tour":"alert",title:e.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),t.jsx("button",{type:"button",className:"ic",title:e.identRepub,disabled:!C||k,onClick:z,children:k?"⏳":"📰"}),t.jsx("button",{type:"button",className:"ic",title:e.identSync,disabled:!C,onClick:g,children:"🔄"})]}),t.jsxs("span",{className:"isrch",children:["🔍",t.jsx("input",{placeholder:e.identSearch,value:r.filters.search,onChange:H=>n({type:"filters",patch:{search:H.target.value}})})]})]})]})}class Ct{constructor(){this._partials=new Float64Array(32),this._n=0}add(a){const r=this._partials;let n=0;for(let o=0;o<this._n&&o<32;o++){const i=r[o],s=a+i,d=Math.abs(a)<Math.abs(i)?a-(s-i):i-(s-a);d&&(r[n++]=d),a=s}return r[n]=a,this._n=n+1,this}valueOf(){const a=this._partials;let r=this._n,n,o,i,s=0;if(r>0){for(s=a[--r];r>0&&(n=s,o=a[--r],s=n+o,i=o-(s-n),!i););r>0&&(i<0&&a[r-1]<0||i>0&&a[r-1]>0)&&(o=i*2,n=s+o,o==n-s&&(s=n))}return s}}function*Ls(e){for(const a of e)yield*a}function Kr(e){return Array.from(Ls(e))}var je=1e-6,fe=Math.PI,Ye=fe/2,er=fe/4,Qe=fe*2,lt=180/fe,He=fe/180,Se=Math.abs,Rs=Math.atan,Zt=Math.atan2,Ae=Math.cos,Te=Math.sin,Fs=Math.sign||function(e){return e>0?1:e<0?-1:0},Tt=Math.sqrt;function Ms(e){return e>1?0:e<-1?fe:Math.acos(e)}function ea(e){return e>1?Ye:e<-1?-Ye:Math.asin(e)}function Ke(){}function Ea(e,a){e&&ar.hasOwnProperty(e.type)&&ar[e.type](e,a)}var tr={Feature:function(e,a){Ea(e.geometry,a)},FeatureCollection:function(e,a){for(var r=e.features,n=-1,o=r.length;++n<o;)Ea(r[n].geometry,a)}},ar={Sphere:function(e,a){a.sphere()},Point:function(e,a){e=e.coordinates,a.point(e[0],e[1],e[2])},MultiPoint:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)e=r[n],a.point(e[0],e[1],e[2])},LineString:function(e,a){Za(e.coordinates,a,0)},MultiLineString:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)Za(r[n],a,0)},Polygon:function(e,a){nr(e.coordinates,a)},MultiPolygon:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)nr(r[n],a)},GeometryCollection:function(e,a){for(var r=e.geometries,n=-1,o=r.length;++n<o;)Ea(r[n],a)}};function Za(e,a,r){var n=-1,o=e.length-r,i;for(a.lineStart();++n<o;)i=e[n],a.point(i[0],i[1],i[2]);a.lineEnd()}function nr(e,a){var r=-1,n=e.length;for(a.polygonStart();++r<n;)Za(e[r],a,1);a.polygonEnd()}function Lt(e,a){e&&tr.hasOwnProperty(e.type)?tr[e.type](e,a):Ea(e,a)}function en(e){return[Zt(e[1],e[0]),ea(e[2])]}function Ot(e){var a=e[0],r=e[1],n=Ae(r);return[n*Ae(a),n*Te(a),Te(r)]}function ca(e,a){return e[0]*a[0]+e[1]*a[1]+e[2]*a[2]}function Sa(e,a){return[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]]}function $a(e,a){e[0]+=a[0],e[1]+=a[1],e[2]+=a[2]}function pa(e,a){return[e[0]*a,e[1]*a,e[2]*a]}function tn(e){var a=Tt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=a,e[1]/=a,e[2]/=a}function an(e,a){function r(n,o){return n=e(n,o),a(n[0],n[1])}return e.invert&&a.invert&&(r.invert=function(n,o){return n=a.invert(n,o),n&&e.invert(n[0],n[1])}),r}function nn(e,a){return Se(e)>fe&&(e-=Math.round(e/Qe)*Qe),[e,a]}nn.invert=nn;function Os(e,a,r){return(e%=Qe)?a||r?an(or(e),ir(a,r)):or(e):a||r?ir(a,r):nn}function rr(e){return function(a,r){return a+=e,Se(a)>fe&&(a-=Math.round(a/Qe)*Qe),[a,r]}}function or(e){var a=rr(e);return a.invert=rr(-e),a}function ir(e,a){var r=Ae(e),n=Te(e),o=Ae(a),i=Te(a);function s(d,c){var g=Ae(c),l=Ae(d)*g,h=Te(d)*g,p=Te(c),b=p*r+l*n;return[Zt(h*o-b*i,l*r-p*n),ea(b*o+h*i)]}return s.invert=function(d,c){var g=Ae(c),l=Ae(d)*g,h=Te(d)*g,p=Te(c),b=p*o-h*i;return[Zt(h*o+p*i,l*r+b*n),ea(b*r-l*n)]},s}function Ds(e,a,r,n,o,i){if(r){var s=Ae(a),d=Te(a),c=n*r;o==null?(o=a+n*Qe,i=a-c/2):(o=sr(s,o),i=sr(s,i),(n>0?o<i:o>i)&&(o+=n*Qe));for(var g,l=o;n>0?l>i:l<i;l-=c)g=en([s,-d*Ae(l),-d*Te(l)]),e.point(g[0],g[1])}}function sr(e,a){a=Ot(a),a[0]-=e,tn(a);var r=Ms(-a[1]);return((-a[2]<0?-r:r)+Qe-je)%Qe}function Qr(){var e=[],a;return{point:function(r,n,o){a.push([r,n,o])},lineStart:function(){e.push(a=[])},lineEnd:Ke,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],a=null,r}}}function ga(e,a){return Se(e[0]-a[0])<je&&Se(e[1]-a[1])<je}function ua(e,a,r,n){this.x=e,this.z=a,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function Jr(e,a,r,n,o){var i=[],s=[],d,c;if(e.forEach(function(m){if(!((v=m.length-1)<=0)){var v,y=m[0],f=m[v],j;if(ga(y,f)){if(!y[2]&&!f[2]){for(o.lineStart(),d=0;d<v;++d)o.point((y=m[d])[0],y[1]);o.lineEnd();return}f[0]+=2*je}i.push(j=new ua(y,m,null,!0)),s.push(j.o=new ua(y,null,j,!1)),i.push(j=new ua(f,m,null,!1)),s.push(j.o=new ua(f,null,j,!0))}}),!!i.length){for(s.sort(a),lr(i),lr(s),d=0,c=s.length;d<c;++d)s[d].e=r=!r;for(var g=i[0],l,h;;){for(var p=g,b=!0;p.v;)if((p=p.n)===g)return;l=p.z,o.lineStart();do{if(p.v=p.o.v=!0,p.e){if(b)for(d=0,c=l.length;d<c;++d)o.point((h=l[d])[0],h[1]);else n(p.x,p.n.x,1,o);p=p.n}else{if(b)for(l=p.p.z,d=l.length-1;d>=0;--d)o.point((h=l[d])[0],h[1]);else n(p.x,p.p.x,-1,o);p=p.p}p=p.o,l=p.z,b=!b}while(!p.v);o.lineEnd()}}}function lr(e){if(a=e.length){for(var a,r=0,n=e[0],o;++r<a;)n.n=o=e[r],o.p=n,n=o;n.n=o=e[0],o.p=n}}function Ua(e){return Se(e[0])<=fe?e[0]:Fs(e[0])*((Se(e[0])+fe)%Qe-fe)}function Ps(e,a){var r=Ua(a),n=a[1],o=Te(n),i=[Te(r),-Ae(r),0],s=0,d=0,c=new Ct;o===1?n=Ye+je:o===-1&&(n=-Ye-je);for(var g=0,l=e.length;g<l;++g)if(p=(h=e[g]).length)for(var h,p,b=h[p-1],m=Ua(b),v=b[1]/2+er,y=Te(v),f=Ae(v),j=0;j<p;++j,m=k,y=z,f=E,b=C){var C=h[j],k=Ua(C),N=C[1]/2+er,z=Te(N),E=Ae(N),q=k-m,A=q>=0?1:-1,R=A*q,P=R>fe,I=y*z;if(c.add(Zt(I*A*Te(R),f*E+I*Ae(R))),s+=P?q+A*Qe:q,P^m>=r^k>=r){var L=Sa(Ot(b),Ot(C));tn(L);var F=Sa(i,L);tn(F);var x=(P^q>=0?-1:1)*ea(F[2]);(n>x||n===x&&(L[0]||L[1]))&&(d+=P^q>=0?1:-1)}}return(s<-je||s<je&&c<-1e-12)^d&1}function Xr(e,a,r,n){return function(o){var i=a(o),s=Qr(),d=a(s),c=!1,g,l,h,p={point:b,lineStart:v,lineEnd:y,polygonStart:function(){p.point=f,p.lineStart=j,p.lineEnd=C,l=[],g=[]},polygonEnd:function(){p.point=b,p.lineStart=v,p.lineEnd=y,l=Kr(l);var k=Ps(g,n);l.length?(c||(o.polygonStart(),c=!0),Jr(l,Bs,k,r,o)):k&&(c||(o.polygonStart(),c=!0),o.lineStart(),r(null,null,1,o),o.lineEnd()),c&&(o.polygonEnd(),c=!1),l=g=null},sphere:function(){o.polygonStart(),o.lineStart(),r(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function b(k,N){e(k,N)&&o.point(k,N)}function m(k,N){i.point(k,N)}function v(){p.point=m,i.lineStart()}function y(){p.point=b,i.lineEnd()}function f(k,N){h.push([k,N]),d.point(k,N)}function j(){d.lineStart(),h=[]}function C(){f(h[0][0],h[0][1]),d.lineEnd();var k=d.clean(),N=s.result(),z,E=N.length,q,A,R;if(h.pop(),g.push(h),h=null,!!E){if(k&1){if(A=N[0],(q=A.length-1)>0){for(c||(o.polygonStart(),c=!0),o.lineStart(),z=0;z<q;++z)o.point((R=A[z])[0],R[1]);o.lineEnd()}return}E>1&&k&2&&N.push(N.pop().concat(N.shift())),l.push(N.filter(Is))}}return p}}function Is(e){return e.length>1}function Bs(e,a){return((e=e.x)[0]<0?e[1]-Ye-je:Ye-e[1])-((a=a.x)[0]<0?a[1]-Ye-je:Ye-a[1])}const dr=Xr(function(){return!0},_s,Us,[-fe,-Ye]);function _s(e){var a=NaN,r=NaN,n=NaN,o;return{lineStart:function(){e.lineStart(),o=1},point:function(i,s){var d=i>0?fe:-fe,c=Se(i-a);Se(c-fe)<je?(e.point(a,r=(r+s)/2>0?Ye:-Ye),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(d,r),e.point(i,r),o=0):n!==d&&c>=fe&&(Se(a-n)<je&&(a-=n*je),Se(i-d)<je&&(i-=d*je),r=$s(a,r,i,s),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(d,r),o=0),e.point(a=i,r=s),n=d},lineEnd:function(){e.lineEnd(),a=r=NaN},clean:function(){return 2-o}}}function $s(e,a,r,n){var o,i,s=Te(e-r);return Se(s)>je?Rs((Te(a)*(i=Ae(n))*Te(r)-Te(n)*(o=Ae(a))*Te(e))/(o*i*s)):(a+n)/2}function Us(e,a,r,n){var o;if(e==null)o=r*Ye,n.point(-fe,o),n.point(0,o),n.point(fe,o),n.point(fe,0),n.point(fe,-o),n.point(0,-o),n.point(-fe,-o),n.point(-fe,0),n.point(-fe,o);else if(Se(e[0]-a[0])>je){var i=e[0]<a[0]?fe:-fe;o=r*i/2,n.point(-i,o),n.point(0,o),n.point(i,o)}else n.point(a[0],a[1])}function Hs(e){var a=Ae(e),r=2*He,n=a>0,o=Se(a)>je;function i(l,h,p,b){Ds(b,e,r,p,l,h)}function s(l,h){return Ae(l)*Ae(h)>a}function d(l){var h,p,b,m,v;return{lineStart:function(){m=b=!1,v=1},point:function(y,f){var j=[y,f],C,k=s(y,f),N=n?k?0:g(y,f):k?g(y+(y<0?fe:-fe),f):0;if(!h&&(m=b=k)&&l.lineStart(),k!==b&&(C=c(h,j),(!C||ga(h,C)||ga(j,C))&&(j[2]=1)),k!==b)v=0,k?(l.lineStart(),C=c(j,h),l.point(C[0],C[1])):(C=c(h,j),l.point(C[0],C[1],2),l.lineEnd()),h=C;else if(o&&h&&n^k){var z;!(N&p)&&(z=c(j,h,!0))&&(v=0,n?(l.lineStart(),l.point(z[0][0],z[0][1]),l.point(z[1][0],z[1][1]),l.lineEnd()):(l.point(z[1][0],z[1][1]),l.lineEnd(),l.lineStart(),l.point(z[0][0],z[0][1],3)))}k&&(!h||!ga(h,j))&&l.point(j[0],j[1]),h=j,b=k,p=N},lineEnd:function(){b&&l.lineEnd(),h=null},clean:function(){return v|(m&&b)<<1}}}function c(l,h,p){var b=Ot(l),m=Ot(h),v=[1,0,0],y=Sa(b,m),f=ca(y,y),j=y[0],C=f-j*j;if(!C)return!p&&l;var k=a*f/C,N=-a*j/C,z=Sa(v,y),E=pa(v,k),q=pa(y,N);$a(E,q);var A=z,R=ca(E,A),P=ca(A,A),I=R*R-P*(ca(E,E)-1);if(!(I<0)){var L=Tt(I),F=pa(A,(-R-L)/P);if($a(F,E),F=en(F),!p)return F;var x=l[0],T=h[0],B=l[1],G=h[1],H;T<x&&(H=x,x=T,T=H);var Q=T-x,X=Se(Q-fe)<je,K=X||Q<je;if(!X&&G<B&&(H=B,B=G,G=H),K?X?B+G>0^F[1]<(Se(F[0]-x)<je?B:G):B<=F[1]&&F[1]<=G:Q>fe^(x<=F[0]&&F[0]<=T)){var ue=pa(A,(-R+L)/P);return $a(ue,E),[F,en(ue)]}}}function g(l,h){var p=n?e:fe-e,b=0;return l<-p?b|=1:l>p&&(b|=2),h<-p?b|=4:h>p&&(b|=8),b}return Xr(s,d,i,n?[0,-e]:[-fe,e-fe])}function Vs(e,a,r,n,o,i){var s=e[0],d=e[1],c=a[0],g=a[1],l=0,h=1,p=c-s,b=g-d,m;if(m=r-s,!(!p&&m>0)){if(m/=p,p<0){if(m<l)return;m<h&&(h=m)}else if(p>0){if(m>h)return;m>l&&(l=m)}if(m=o-s,!(!p&&m<0)){if(m/=p,p<0){if(m>h)return;m>l&&(l=m)}else if(p>0){if(m<l)return;m<h&&(h=m)}if(m=n-d,!(!b&&m>0)){if(m/=b,b<0){if(m<l)return;m<h&&(h=m)}else if(b>0){if(m>h)return;m>l&&(l=m)}if(m=i-d,!(!b&&m<0)){if(m/=b,b<0){if(m>h)return;m>l&&(l=m)}else if(b>0){if(m<l)return;m<h&&(h=m)}return l>0&&(e[0]=s+l*p,e[1]=d+l*b),h<1&&(a[0]=s+h*p,a[1]=d+h*b),!0}}}}}var Wt=1e9,ma=-Wt;function Ws(e,a,r,n){function o(g,l){return e<=g&&g<=r&&a<=l&&l<=n}function i(g,l,h,p){var b=0,m=0;if(g==null||(b=s(g,h))!==(m=s(l,h))||c(g,l)<0^h>0)do p.point(b===0||b===3?e:r,b>1?n:a);while((b=(b+h+4)%4)!==m);else p.point(l[0],l[1])}function s(g,l){return Se(g[0]-e)<je?l>0?0:3:Se(g[0]-r)<je?l>0?2:1:Se(g[1]-a)<je?l>0?1:0:l>0?3:2}function d(g,l){return c(g.x,l.x)}function c(g,l){var h=s(g,1),p=s(l,1);return h!==p?h-p:h===0?l[1]-g[1]:h===1?g[0]-l[0]:h===2?g[1]-l[1]:l[0]-g[0]}return function(g){var l=g,h=Qr(),p,b,m,v,y,f,j,C,k,N,z,E={point:q,lineStart:I,lineEnd:L,polygonStart:R,polygonEnd:P};function q(x,T){o(x,T)&&l.point(x,T)}function A(){for(var x=0,T=0,B=b.length;T<B;++T)for(var G=b[T],H=1,Q=G.length,X=G[0],K,ue,ee=X[0],xe=X[1];H<Q;++H)K=ee,ue=xe,X=G[H],ee=X[0],xe=X[1],ue<=n?xe>n&&(ee-K)*(n-ue)>(xe-ue)*(e-K)&&++x:xe<=n&&(ee-K)*(n-ue)<(xe-ue)*(e-K)&&--x;return x}function R(){l=h,p=[],b=[],z=!0}function P(){var x=A(),T=z&&x,B=(p=Kr(p)).length;(T||B)&&(g.polygonStart(),T&&(g.lineStart(),i(null,null,1,g),g.lineEnd()),B&&Jr(p,d,x,i,g),g.polygonEnd()),l=g,p=b=m=null}function I(){E.point=F,b&&b.push(m=[]),N=!0,k=!1,j=C=NaN}function L(){p&&(F(v,y),f&&k&&h.rejoin(),p.push(h.result())),E.point=q,k&&l.lineEnd()}function F(x,T){var B=o(x,T);if(b&&m.push([x,T]),N)v=x,y=T,f=B,N=!1,B&&(l.lineStart(),l.point(x,T));else if(B&&k)l.point(x,T);else{var G=[j=Math.max(ma,Math.min(Wt,j)),C=Math.max(ma,Math.min(Wt,C))],H=[x=Math.max(ma,Math.min(Wt,x)),T=Math.max(ma,Math.min(Wt,T))];Vs(G,H,e,a,r,n)?(k||(l.lineStart(),l.point(G[0],G[1])),l.point(H[0],H[1]),B||l.lineEnd(),z=!1):B&&(l.lineStart(),l.point(x,T),z=!1)}j=x,C=T,k=B}return E}}const rn=e=>e;var Ha=new Ct,on=new Ct,Zr,eo,sn,ln,dt={point:Ke,lineStart:Ke,lineEnd:Ke,polygonStart:function(){dt.lineStart=Gs,dt.lineEnd=Ks},polygonEnd:function(){dt.lineStart=dt.lineEnd=dt.point=Ke,Ha.add(Se(on)),on=new Ct},result:function(){var e=Ha/2;return Ha=new Ct,e}};function Gs(){dt.point=Ys}function Ys(e,a){dt.point=to,Zr=sn=e,eo=ln=a}function to(e,a){on.add(ln*e-sn*a),sn=e,ln=a}function Ks(){to(Zr,eo)}var Dt=1/0,Ca=Dt,ta=-Dt,za=ta,Aa={point:Qs,lineStart:Ke,lineEnd:Ke,polygonStart:Ke,polygonEnd:Ke,result:function(){var e=[[Dt,Ca],[ta,za]];return ta=za=-(Ca=Dt=1/0),e}};function Qs(e,a){e<Dt&&(Dt=e),e>ta&&(ta=e),a<Ca&&(Ca=a),a>za&&(za=a)}var dn=0,cn=0,Gt=0,Ta=0,qa=0,Rt=0,pn=0,un=0,Yt=0,ao,no,ot,it,Ge={point:zt,lineStart:cr,lineEnd:pr,polygonStart:function(){Ge.lineStart=Zs,Ge.lineEnd=el},polygonEnd:function(){Ge.point=zt,Ge.lineStart=cr,Ge.lineEnd=pr},result:function(){var e=Yt?[pn/Yt,un/Yt]:Rt?[Ta/Rt,qa/Rt]:Gt?[dn/Gt,cn/Gt]:[NaN,NaN];return dn=cn=Gt=Ta=qa=Rt=pn=un=Yt=0,e}};function zt(e,a){dn+=e,cn+=a,++Gt}function cr(){Ge.point=Js}function Js(e,a){Ge.point=Xs,zt(ot=e,it=a)}function Xs(e,a){var r=e-ot,n=a-it,o=Tt(r*r+n*n);Ta+=o*(ot+e)/2,qa+=o*(it+a)/2,Rt+=o,zt(ot=e,it=a)}function pr(){Ge.point=zt}function Zs(){Ge.point=tl}function el(){ro(ao,no)}function tl(e,a){Ge.point=ro,zt(ao=ot=e,no=it=a)}function ro(e,a){var r=e-ot,n=a-it,o=Tt(r*r+n*n);Ta+=o*(ot+e)/2,qa+=o*(it+a)/2,Rt+=o,o=it*e-ot*a,pn+=o*(ot+e),un+=o*(it+a),Yt+=o*3,zt(ot=e,it=a)}function oo(e){this._context=e}oo.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,a){switch(this._point){case 0:{this._context.moveTo(e,a),this._point=1;break}case 1:{this._context.lineTo(e,a);break}default:{this._context.moveTo(e+this._radius,a),this._context.arc(e,a,this._radius,0,Qe);break}}},result:Ke};var mn=new Ct,Va,io,so,Kt,Qt,aa={point:Ke,lineStart:function(){aa.point=al},lineEnd:function(){Va&&lo(io,so),aa.point=Ke},polygonStart:function(){Va=!0},polygonEnd:function(){Va=null},result:function(){var e=+mn;return mn=new Ct,e}};function al(e,a){aa.point=lo,io=Kt=e,so=Qt=a}function lo(e,a){Kt-=e,Qt-=a,mn.add(Tt(Kt*Kt+Qt*Qt)),Kt=e,Qt=a}let ur,La,mr,fr;class hr{constructor(a){this._append=a==null?co:nl(a),this._radius=4.5,this._=""}pointRadius(a){return this._radius=+a,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(a,r){switch(this._point){case 0:{this._append`M${a},${r}`,this._point=1;break}case 1:{this._append`L${a},${r}`;break}default:{if(this._append`M${a},${r}`,this._radius!==mr||this._append!==La){const n=this._radius,o=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,mr=n,La=this._append,fr=this._,this._=o}this._+=fr;break}}}result(){const a=this._;return this._="",a.length?a:null}}function co(e){let a=1;this._+=e[0];for(const r=e.length;a<r;++a)this._+=arguments[a]+e[a]}function nl(e){const a=Math.floor(e);if(!(a>=0))throw new RangeError(`invalid digits: ${e}`);if(a>15)return co;if(a!==ur){const r=10**a;ur=a,La=function(o){let i=1;this._+=o[0];for(const s=o.length;i<s;++i)this._+=Math.round(arguments[i]*r)/r+o[i]}}return La}function rl(e,a){let r=3,n=4.5,o,i;function s(d){return d&&(typeof n=="function"&&i.pointRadius(+n.apply(this,arguments)),Lt(d,o(i))),i.result()}return s.area=function(d){return Lt(d,o(dt)),dt.result()},s.measure=function(d){return Lt(d,o(aa)),aa.result()},s.bounds=function(d){return Lt(d,o(Aa)),Aa.result()},s.centroid=function(d){return Lt(d,o(Ge)),Ge.result()},s.projection=function(d){return arguments.length?(o=d==null?(e=null,rn):(e=d).stream,s):e},s.context=function(d){return arguments.length?(i=d==null?(a=null,new hr(r)):new oo(a=d),typeof n!="function"&&i.pointRadius(n),s):a},s.pointRadius=function(d){return arguments.length?(n=typeof d=="function"?d:(i.pointRadius(+d),+d),s):n},s.digits=function(d){if(!arguments.length)return r;if(d==null)r=null;else{const c=Math.floor(d);if(!(c>=0))throw new RangeError(`invalid digits: ${d}`);r=c}return a===null&&(i=new hr(r)),s},s.projection(e).digits(r).context(a)}function kn(e){return function(a){var r=new fn;for(var n in e)r[n]=e[n];return r.stream=a,r}}function fn(){}fn.prototype={constructor:fn,point:function(e,a){this.stream.point(e,a)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function jn(e,a,r){var n=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),n!=null&&e.clipExtent(null),Lt(r,e.stream(Aa)),a(Aa.result()),n!=null&&e.clipExtent(n),e}function po(e,a,r){return jn(e,function(n){var o=a[1][0]-a[0][0],i=a[1][1]-a[0][1],s=Math.min(o/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),d=+a[0][0]+(o-s*(n[1][0]+n[0][0]))/2,c=+a[0][1]+(i-s*(n[1][1]+n[0][1]))/2;e.scale(150*s).translate([d,c])},r)}function ol(e,a,r){return po(e,[[0,0],a],r)}function il(e,a,r){return jn(e,function(n){var o=+a,i=o/(n[1][0]-n[0][0]),s=(o-i*(n[1][0]+n[0][0]))/2,d=-i*n[0][1];e.scale(150*i).translate([s,d])},r)}function sl(e,a,r){return jn(e,function(n){var o=+a,i=o/(n[1][1]-n[0][1]),s=-i*n[0][0],d=(o-i*(n[1][1]+n[0][1]))/2;e.scale(150*i).translate([s,d])},r)}var xr=16,ll=Ae(30*He);function gr(e,a){return+a?cl(e,a):dl(e)}function dl(e){return kn({point:function(a,r){a=e(a,r),this.stream.point(a[0],a[1])}})}function cl(e,a){function r(n,o,i,s,d,c,g,l,h,p,b,m,v,y){var f=g-n,j=l-o,C=f*f+j*j;if(C>4*a&&v--){var k=s+p,N=d+b,z=c+m,E=Tt(k*k+N*N+z*z),q=ea(z/=E),A=Se(Se(z)-1)<je||Se(i-h)<je?(i+h)/2:Zt(N,k),R=e(A,q),P=R[0],I=R[1],L=P-n,F=I-o,x=j*L-f*F;(x*x/C>a||Se((f*L+j*F)/C-.5)>.3||s*p+d*b+c*m<ll)&&(r(n,o,i,s,d,c,P,I,A,k/=E,N/=E,z,v,y),y.point(P,I),r(P,I,A,k,N,z,g,l,h,p,b,m,v,y))}}return function(n){var o,i,s,d,c,g,l,h,p,b,m,v,y={point:f,lineStart:j,lineEnd:k,polygonStart:function(){n.polygonStart(),y.lineStart=N},polygonEnd:function(){n.polygonEnd(),y.lineStart=j}};function f(q,A){q=e(q,A),n.point(q[0],q[1])}function j(){h=NaN,y.point=C,n.lineStart()}function C(q,A){var R=Ot([q,A]),P=e(q,A);r(h,p,l,b,m,v,h=P[0],p=P[1],l=q,b=R[0],m=R[1],v=R[2],xr,n),n.point(h,p)}function k(){y.point=f,n.lineEnd()}function N(){j(),y.point=z,y.lineEnd=E}function z(q,A){C(o=q,A),i=h,s=p,d=b,c=m,g=v,y.point=C}function E(){r(h,p,l,b,m,v,i,s,o,d,c,g,xr,n),y.lineEnd=k,k()}return y}}var pl=kn({point:function(e,a){this.stream.point(e*He,a*He)}});function ul(e){return kn({point:function(a,r){var n=e(a,r);return this.stream.point(n[0],n[1])}})}function ml(e,a,r,n,o){function i(s,d){return s*=n,d*=o,[a+e*s,r-e*d]}return i.invert=function(s,d){return[(s-a)/e*n,(r-d)/e*o]},i}function br(e,a,r,n,o,i){if(!i)return ml(e,a,r,n,o);var s=Ae(i),d=Te(i),c=s*e,g=d*e,l=s/e,h=d/e,p=(d*r-s*a)/e,b=(d*a+s*r)/e;function m(v,y){return v*=n,y*=o,[c*v-g*y+a,r-g*v-c*y]}return m.invert=function(v,y){return[n*(l*v-h*y+p),o*(b-h*v-l*y)]},m}function fl(e){return hl(function(){return e})()}function hl(e){var a,r=150,n=480,o=250,i=0,s=0,d=0,c=0,g=0,l,h=0,p=1,b=1,m=null,v=dr,y=null,f,j,C,k=rn,N=.5,z,E,q,A,R;function P(x){return q(x[0]*He,x[1]*He)}function I(x){return x=q.invert(x[0],x[1]),x&&[x[0]*lt,x[1]*lt]}P.stream=function(x){return A&&R===x?A:A=pl(ul(l)(v(z(k(R=x)))))},P.preclip=function(x){return arguments.length?(v=x,m=void 0,F()):v},P.postclip=function(x){return arguments.length?(k=x,y=f=j=C=null,F()):k},P.clipAngle=function(x){return arguments.length?(v=+x?Hs(m=x*He):(m=null,dr),F()):m*lt},P.clipExtent=function(x){return arguments.length?(k=x==null?(y=f=j=C=null,rn):Ws(y=+x[0][0],f=+x[0][1],j=+x[1][0],C=+x[1][1]),F()):y==null?null:[[y,f],[j,C]]},P.scale=function(x){return arguments.length?(r=+x,L()):r},P.translate=function(x){return arguments.length?(n=+x[0],o=+x[1],L()):[n,o]},P.center=function(x){return arguments.length?(i=x[0]%360*He,s=x[1]%360*He,L()):[i*lt,s*lt]},P.rotate=function(x){return arguments.length?(d=x[0]%360*He,c=x[1]%360*He,g=x.length>2?x[2]%360*He:0,L()):[d*lt,c*lt,g*lt]},P.angle=function(x){return arguments.length?(h=x%360*He,L()):h*lt},P.reflectX=function(x){return arguments.length?(p=x?-1:1,L()):p<0},P.reflectY=function(x){return arguments.length?(b=x?-1:1,L()):b<0},P.precision=function(x){return arguments.length?(z=gr(E,N=x*x),F()):Tt(N)},P.fitExtent=function(x,T){return po(P,x,T)},P.fitSize=function(x,T){return ol(P,x,T)},P.fitWidth=function(x,T){return il(P,x,T)},P.fitHeight=function(x,T){return sl(P,x,T)};function L(){var x=br(r,0,0,p,b,h).apply(null,a(i,s)),T=br(r,n-x[0],o-x[1],p,b,h);return l=Os(d,c,g),E=an(a,T),q=an(l,E),z=gr(E,N),F()}function F(){return A=R=null,P}return function(){return a=e.apply(this,arguments),P.invert=a.invert&&I,L()}}function uo(e,a){var r=a*a,n=r*r;return[e*(.8707-.131979*r+n*(-.013791+n*(.003971*r-.001529*n))),a*(1.007226+r*(.015085+n*(-.044475+.028874*r-.005916*n)))]}uo.invert=function(e,a){var r=a,n=25,o;do{var i=r*r,s=i*i;r-=o=(r*(1.007226+i*(.015085+s*(-.044475+.028874*i-.005916*s)))-a)/(1.007226+i*(.015085*3+s*(-.044475*7+.028874*9*i-.005916*11*s)))}while(Se(o)>je&&--n>0);return[e/(.8707+(i=r*r)*(-.131979+i*(-.013791+i*i*i*(.003971-.001529*i)))),r]};function xl(){return fl(uo).scale(175.295)}function gl(e){return e}function bl(e){if(e==null)return gl;var a,r,n=e.scale[0],o=e.scale[1],i=e.translate[0],s=e.translate[1];return function(d,c){c||(a=r=0);var g=2,l=d.length,h=new Array(l);for(h[0]=(a+=d[0])*n+i,h[1]=(r+=d[1])*o+s;g<l;)h[g]=d[g],++g;return h}}function vl(e,a){for(var r,n=e.length,o=n-a;o<--n;)r=e[o],e[o++]=e[n],e[n]=r}function yl(e,a){return typeof a=="string"&&(a=e.objects[a]),a.type==="GeometryCollection"?{type:"FeatureCollection",features:a.geometries.map(function(r){return vr(e,r)})}:vr(e,a)}function vr(e,a){var r=a.id,n=a.bbox,o=a.properties==null?{}:a.properties,i=wl(e,a);return r==null&&n==null?{type:"Feature",properties:o,geometry:i}:n==null?{type:"Feature",id:r,properties:o,geometry:i}:{type:"Feature",id:r,bbox:n,properties:o,geometry:i}}function wl(e,a){var r=bl(e.transform),n=e.arcs;function o(l,h){h.length&&h.pop();for(var p=n[l<0?~l:l],b=0,m=p.length;b<m;++b)h.push(r(p[b],b));l<0&&vl(h,m)}function i(l){return r(l)}function s(l){for(var h=[],p=0,b=l.length;p<b;++p)o(l[p],h);return h.length<2&&h.push(h[0]),h}function d(l){for(var h=s(l);h.length<4;)h.push(h[0]);return h}function c(l){return l.map(d)}function g(l){var h=l.type,p;switch(h){case"GeometryCollection":return{type:h,geometries:l.geometries.map(g)};case"Point":p=i(l.coordinates);break;case"MultiPoint":p=l.coordinates.map(i);break;case"LineString":p=s(l.arcs);break;case"MultiLineString":p=l.arcs.map(s);break;case"Polygon":p=c(l.arcs);break;case"MultiPolygon":p=l.arcs.map(c);break;default:return null}return{type:h,coordinates:p}}return g(a)}const mo={US:[{k:["new york","nyc","brooklyn","manhattan"],ll:[-74,40.7]},{k:["san francisco","sf","palo alto","mountain view","menlo park","san jose","oakland"],ll:[-122.3,37.6]},{k:["los angeles","santa monica","irvine"],ll:[-118.2,34.1]},{k:["seattle","bellevue","redmond"],ll:[-122.3,47.6]},{k:["austin"],ll:[-97.7,30.3]},{k:["boston","cambridge"],ll:[-71.1,42.4]},{k:["chicago"],ll:[-87.6,41.9]},{k:["miami"],ll:[-80.2,25.8]},{k:["denver","boulder"],ll:[-105,39.7]},{k:["atlanta"],ll:[-84.4,33.7]},{k:["washington","arlington","dc"],ll:[-77,38.9]},{k:["dallas","houston"],ll:[-96.8,31.5]},{k:["salt lake","provo"],ll:[-111.9,40.8]},{k:["phoenix","tempe"],ll:[-112.1,33.4]}],CA:[{k:["toronto","waterloo"],ll:[-79.4,43.7]},{k:["montreal"],ll:[-73.6,45.5]},{k:["vancouver"],ll:[-123.1,49.3]},{k:["calgary"],ll:[-114.1,51]},{k:["ottawa"],ll:[-75.7,45.4]}],AU:[{k:["sydney"],ll:[151.2,-33.9]},{k:["melbourne"],ll:[145,-37.8]},{k:["brisbane"],ll:[153,-27.5]},{k:["perth"],ll:[115.9,-32]}],BR:[{k:["sao paulo"],ll:[-46.6,-23.5]},{k:["rio"],ll:[-43.2,-22.9]}],IN:[{k:["bengaluru","bangalore"],ll:[77.6,13]},{k:["mumbai"],ll:[72.9,19.1]},{k:["delhi","gurgaon","gurugram","noida"],ll:[77.2,28.6]},{k:["hyderabad"],ll:[78.5,17.4]},{k:["chennai"],ll:[80.3,13.1]}],CN:[{k:["beijing","pekin"],ll:[116.4,39.9]},{k:["shanghai"],ll:[121.5,31.2]},{k:["shenzhen","canton","guangzhou"],ll:[113.9,22.7]}],RU:[{k:["moscou","moscow"],ll:[37.6,55.8]},{k:["saint petersbourg","saint petersburg"],ll:[30.3,59.9]}]},kl=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim();function jl(e,a,r){const n=mo[e];if(!n||!n.length)return-1;const o=kl(a||"");if(o){for(let i=0;i<n.length;i++)if(n[i].k.some(s=>o.includes(s)))return i}return Math.floor(r*n.length)%n.length}let fa=null;function Nl(){return fa||(fa=(async()=>{var e;try{const a=await fetch("/world/countries-110m.json");if(!a.ok)return null;const r=await a.json(),n=(e=r==null?void 0:r.objects)==null?void 0:e.countries;if(!n)return null;const o=yl(r,n),i=xl().fitExtent([[8,8],[992,492]],{type:"Sphere"}),s=rl(i),d=(o.features||[]).filter(l=>{var h;return(((h=l.properties)==null?void 0:h.name)||"")!=="Antarctica"}).map(l=>{var b;const h=((b=l.properties)==null?void 0:b.name)||"",p=s(l)||"";return p?{i2:ti(h)||null,n:h,d:p}:null}).filter(l=>!!l);if(!d.length)return null;const c={};for(const[l,h]of Object.entries(ai)){const p=i(h);p&&(c[l]={x:p[0],y:p[1]})}const g={};for(const[l,h]of Object.entries(mo)){const p=h.map(b=>i(b.ll)).filter(b=>!!b).map(([b,m])=>({x:b,y:m}));p.length&&(g[l]=p)}return{key:"monde",viewBox:"40 48 920 360",fr:"Monde",en:"World",countries:d,anchors:c,metros:g}}catch{return null}})(),fa)}function El(e){const[a,r]=u.useState(null);return u.useEffect(()=>{if(!e||a)return;let n=!1;return Nl().then(o=>{!n&&o&&r(o)}),()=>{n=!0}},[e,a]),a}const Sl="8 40 984 210",Cl={"northam:US":{fx:.64,fy:.68,sx:.44,sy:.28},"northam:CA":{fx:.58,fy:.86,sx:.34,sy:.1},"oceania:AU":{fx:.72,fy:.62,sx:.34,sy:.3},"europe:RU":{fx:.18,fy:.62,sx:.14,sy:.3}},yr=["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"];function wr(e){let a=2166136261;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function zl(e,a){const[r,n]=u.useState(1);return u.useEffect(()=>{let o=!0,i=0;const s=()=>{var g;if(!o)return;const c=(g=e.current)==null?void 0:g.getScreenCTM();c&&c.a>0?n(c.a):i=requestAnimationFrame(s)};s();const d=new ResizeObserver(()=>s());return e.current&&d.observe(e.current),window.addEventListener("resize",s),()=>{o=!1,cancelAnimationFrame(i),d.disconnect(),window.removeEventListener("resize",s)}},[e,a]),r}function kr({msgs:e}){const[a,r]=u.useState(0);u.useEffect(()=>{const o=window.setInterval(()=>r(i=>i+1),2400);return()=>window.clearInterval(o)},[]);const n=[[46,34],[52,41],[41,46],[57,30],[49,52],[36,38],[61,45],[44,27]];return t.jsxs("div",{className:"mapskel","aria-hidden":"true",children:[n.map(([o,i],s)=>t.jsx("i",{style:{left:o+"%",top:i+"%","--d":s*.18+"s"}},s)),t.jsx("span",{className:"mskm",children:e[a%e.length]})]})}function Al(){const{st:e,dispatch:a,scoped:r,pipe:n,markRow:o,markedId:i,byId:s,lang:d,t:c,data:g,dossiers:l,source:h}=V(),p=g.loading&&!l.length,b=u.useRef(null),m=u.useRef(null),v=El(e.continent==="monde"),y=e.continent==="monde"?v:bn.find(x=>x.key===e.continent)||null,f=zl(b,e.continent+":"+e.mapFolded+":"+!!y),[j,C]=u.useState(new Map),[k,N]=u.useState(null);u.useEffect(()=>{const x=b.current;if(!x)return;const T=new Map;x.querySelectorAll("path[data-i2]").forEach(B=>{const G=B.dataset.i2;if(G)try{const H=B.getBBox();H.width>0&&T.set(G,{x:H.x,y:H.y,w:H.width,h:H.height})}catch{}}),C(T)},[e.continent,f,y]);const z=u.useMemo(()=>r.filter(x=>x.cc),[r]),E=u.useMemo(()=>{const x=new Map;return z.forEach(T=>x.set(T.cc,(x.get(T.cc)||0)+1)),x},[z]),q=e.continent==="monde"&&v?v.anchors:null,A=e.continent==="monde"&&v?v.metros:null,R=u.useMemo(()=>z.map(x=>{const T=wr(x.name||x.id||""),B=wr((x.id||x.name||"")+"·y");if(q&&x.cc){const K=A?A[x.cc]:void 0;if(K&&K.length){const ee=jl(x.cc,x.city,T);if(ee>=0&&K[ee])return{d:x,x:K[ee].x+(T-.5)*5,y:K[ee].y+(B-.5)*5}}const ue=q[x.cc];if(ue)return{d:x,x:ue.x+(T-.5)*10,y:ue.y+(B-.5)*10}}const G=x.cc?j.get(x.cc):void 0;if(!G)return null;const H=Cl[`${e.continent}:${x.cc||""}`];if(H)return{d:x,x:G.x+G.w*(H.fx+(T-.5)*H.sx),y:G.y+G.h*(H.fy+(B-.5)*H.sy)};const Q=(T-.5)*Math.min(G.w*.55,60),X=(B-.5)*Math.min(G.h*.55,60);return{d:x,x:G.x+G.w/2+Q,y:G.y+G.h/2+X}}).filter(x=>!!x),[z,j,q,A,e.continent]),P=x=>f>0?x/f:x,I=u.useMemo(()=>n?[0,1,2,3,4,5].map(x=>({c:yr[x],fr:c.plabels[x].toUpperCase(),en:c.plabels[x].toUpperCase(),n:r.filter(T=>T.kind==="target"&&ze(T)===x).length})).filter(x=>x.n>0):Mn.map((x,T)=>({...x,n:r.filter(B=>On(B)===T).length})),[r,n,c.plabels]),L=i?s.get(i):null,F=L?R.find(x=>x.d.id===L.id):null;return y?t.jsxs("div",{className:"mapzone"+(p?" waiting":""),ref:m,children:[p&&t.jsx(kr,{msgs:c.loadMsgs}),t.jsxs("svg",{ref:b,viewBox:e.continent==="monde"?Sl:y.viewBox,preserveAspectRatio:e.continent==="monde"?"xMidYMin slice":"xMidYMid meet",role:"img","aria-label":d==="fr"?y.fr:y.en,onMouseLeave:()=>{N(null),o(null)},children:[t.jsx("g",{children:y.countries.map((x,T)=>t.jsx("g",{className:"ct"+(x.i2&&E.get(x.i2)?"":" empty"),children:t.jsx("path",{d:x.d,"data-i2":x.i2||void 0})},T))}),t.jsx("g",{children:R.map(x=>{const T=Mn[On(x.d)],B=!!Fe(x.d),G=x.d.kind==="target",H=n&&G?yr[ze(x.d)]:T.c,Q=!n&&_e(x.d);return t.jsxs("g",{className:"co"+(Q?" done":""),onMouseEnter:()=>{var ue,ee;const X=(ue=m.current)==null?void 0:ue.getBoundingClientRect(),K=(ee=b.current)==null?void 0:ee.createSVGPoint();if(K&&b.current&&X){K.x=x.x,K.y=x.y;const xe=K.matrixTransform(b.current.getScreenCTM());N({x:xe.x-X.left,y:xe.y-X.top,label:x.d.name+" · "+(It(x.d.cc,d)||x.d.countryLabel||"")})}o(x.d.id)},onMouseLeave:()=>{N(null),o(null)},onClick:()=>{var ue;if(h==="ops"){window.dispatchEvent(new CustomEvent("ppmap:reveal")),a({type:"focus",id:x.d.id}),(x.d.noCo||["media","nominations","recrutements"].includes(x.d.engine||""))&&(x.d.url||x.d.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:x.d.url||"",text:[x.d.headline,x.d.tagline].filter(Boolean).join(`
`)}})):x.d.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:x.d.name,url:x.d.url||"",website:x.d.website||"",domain:x.d.domain||""}}));return}const X=(ue=b.current)==null?void 0:ue.createSVGPoint();let K=null;if(X&&b.current){X.x=x.x,X.y=x.y;const ee=X.matrixTransform(b.current.getScreenCTM());K={x:ee.x,y:ee.y}}a({type:"popup",id:x.d.id,anchor:K})},children:[t.jsx("circle",{className:"h",cx:x.x,cy:x.y,r:P(Math.max(11,T.px+7))}),t.jsx("circle",{className:"v",cx:x.x,cy:x.y,r:P(T.px),fill:H,stroke:B?"#DC2626":"#ffffff",strokeWidth:P(B?2.2:1.3)})]},x.d.id||x.d.name)})}),F&&t.jsx("circle",{className:"ring on",cx:F.x,cy:F.y,r:P(13),fill:"none",stroke:"#0F172A",strokeWidth:P(2)})]}),t.jsx("div",{className:"hov"+(k?" on":""),style:k?{left:k.x,top:k.y}:void 0,children:k==null?void 0:k.label}),t.jsx("div",{className:"legend",children:I.map((x,T)=>t.jsxs("span",{children:[t.jsx("i",{style:{"--c":x.c}}),d==="fr"?x.fr:x.en," ",t.jsx("b",{children:x.n})]},T))}),r.some(x=>!x.cc)&&t.jsx("div",{className:"legend",style:{left:"auto",right:10},children:t.jsxs("span",{children:["🌐 ",c.notLocated," ",t.jsx("b",{children:r.filter(x=>!x.cc).length})]})})]}):t.jsx("div",{className:"mapzone"+(p?" waiting":""),ref:m,children:t.jsx(kr,{msgs:c.loadMsgs})})}function Tl(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!r)return e;const o=(a==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||r[2],i=Number(r[3]);return a==="en"?`${o} ${i}, ${r[1]}`:`${i} ${o} ${r[1]}`}function fo({compact:e=!1}){const{st:a,dispatch:r,dossiers:n,t:o,pipe:i,contName:s,lang:d}=V(),c=a.filters,[g,l]=u.useState(!1),[h,p]=u.useState(!1),b=u.useRef(null),m=u.useRef(null),v=u.useMemo(()=>a.continent==="monde"?n:n.filter(F=>F.continent===a.continent),[n,a.continent]),y=F=>v.filter(x=>F!=="country"&&c.country.length&&!c.country.includes(x.cc||"")?!1:ka(x,c,i,F==="country"?void 0:F)),f=F=>!i||F.kind!=="op",j=u.useMemo(()=>{const F=y("win").filter(f),x=T=>F.filter(B=>(B.date?Math.max(0,Math.floor((Date.now()-Date.parse(B.date))/864e5)):9999)<=T).length;return[x(0),x(7),x(30),F.length]},[v,c,i]),C=u.useMemo(()=>c.day?y("win").filter(f).filter(F=>(F.date||"").slice(0,10)===c.day).length:0,[v,c,i]),k=(c.signalOnly?1:0)+c.sector.length+c.country.length+c.engine.length+c.stage.length+c.angle.length+c.memoLevel.length,N=k+(c.acquirer.trim()?1:0)+(c.day||c.win!=="all"?1:0)+(c.search.trim()?1:0);u.useEffect(()=>{a.openFacet&&l(!1)},[a.openFacet]),u.useEffect(()=>{if(!g&&!h)return;const F=T=>{var G,H;const B=T.target;g&&!((G=b.current)!=null&&G.contains(B))&&l(!1),h&&!((H=m.current)!=null&&H.contains(B))&&p(!1)},x=T=>{T.key==="Escape"&&(l(!1),p(!1))};return document.addEventListener("mousedown",F),document.addEventListener("keydown",x),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("keydown",x)}},[g,h]);const z=(F,x,T,B="fbtn")=>t.jsxs("button",{type:"button",className:B,"aria-expanded":a.openFacet===F,onClick:()=>r({type:"openFacet",facet:F}),children:[t.jsx("span",{className:"fl",children:x}),T>0&&t.jsx("span",{className:"n",children:T}),t.jsx("span",{className:"cv",children:"▾"})]},F),E=["1","7","30","all"],q=Math.max(0,E.indexOf(c.win||"all")),A=c.day?t.jsxs("div",{className:"seg",children:[t.jsxs("button",{type:"button","aria-pressed":!0,children:[t.jsx("span",{className:"sl",children:o.fDay(Tl(c.day,d))}),t.jsx("b",{children:C})]}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{day:"",win:"all"}}),children:o.fDayOff})]}):e?t.jsxs("div",{className:"winpick",ref:m,children:[t.jsxs("button",{type:"button",className:"winpick-btn","aria-expanded":h,"aria-haspopup":"listbox",onClick:()=>p(F=>!F),children:[t.jsx("span",{className:"winpick-k",children:o.winMenu}),t.jsx("span",{className:"winpick-v",children:o.datesShort[q]}),t.jsx("b",{children:j[q]}),t.jsx("i",{children:h?"▴":"▾"})]}),h&&t.jsx("div",{className:"winpick-pop",role:"listbox",children:E.map((F,x)=>t.jsxs("button",{type:"button",role:"option","aria-selected":c.win===F,onClick:()=>{r({type:"filters",patch:{win:F}}),p(!1)},children:[o.datesShort[x],t.jsx("span",{className:"n",children:j[x]})]},F))})]}):t.jsx("div",{className:"seg",children:E.map((F,x)=>t.jsxs("button",{type:"button","aria-pressed":c.win===F,onClick:()=>r({type:"filters",patch:{win:F}}),children:[t.jsx("span",{className:"sl",children:o.dates[x]}),t.jsx("b",{children:j[x]})]},F))}),R=t.jsxs("span",{className:"fsrch",children:["🔍",t.jsx("input",{placeholder:o.identSearch,value:c.search,onChange:F=>r({type:"filters",patch:{search:F.target.value}})})]}),P=t.jsxs("div",{className:"facets",children:[t.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":a.openFacet==="sig",onClick:()=>r({type:"openFacet",facet:"sig"}),children:[t.jsx("span",{className:"fl",children:o.fSignal}),c.signalOnly&&t.jsx("span",{className:"n",children:c.signalEngines.length||"✓"}),t.jsx("span",{className:"cv",children:"▾"})]}),c.sector.length===1?t.jsxs("button",{type:"button",className:"fbtn on","aria-expanded":a.openFacet==="sec",onClick:()=>r({type:"openFacet",facet:"sec"}),title:c.sector[0],children:[t.jsx("span",{className:"fl",children:o.fSector}),t.jsx("span",{className:"n",style:{maxWidth:"16ch",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c.sector[0]}),t.jsx("span",{className:"cv",children:"▾"})]}):z("sec",o.fSector,c.sector.length),z("pay",o.fCountry,c.country.length),z("det",o.fEngine,c.engine.length),z("sta",o.fStage,c.stage.length),i&&z("ang","Angle",c.angle.length),i&&z("mem","Mémo",c.memoLevel.length)]}),I=(F=!1)=>t.jsxs("div",{className:"frow2",children:[N>0&&t.jsxs("button",{type:"button",className:"resetbtn on",title:o.clearTitle(v.length,s),onClick:()=>r({type:"reset"}),children:[t.jsx("span",{className:"rot",children:"↺"}),t.jsx("span",{children:o.clear(N)})]}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:o.alertBtn}),F&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>r({type:"mapFold",folded:!1}),children:o.showMap})]}),L=t.jsxs("div",{className:"fmenu",ref:b,children:[t.jsxs("button",{type:"button",className:"fbtn fmenu-btn"+(k?" on":""),"aria-expanded":g,"aria-haspopup":"true",onClick:()=>{l(F=>!F),a.openFacet&&r({type:"openFacet",facet:null})},children:[t.jsx("span",{className:"fl",children:o.fMenu}),k>0&&t.jsx("span",{className:"n",children:k}),t.jsx("span",{className:"cv",children:g?"▴":"▾"})]}),g&&t.jsx("div",{className:"fmenu-pop",role:"menu",children:P})]});return e?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"fstrip"+(c.day?" noday":""),children:[t.jsx("div",{className:"fstrip-a",children:A}),t.jsxs("div",{className:"fstrip-b",children:[R,L,I(!1)]})]}),a.openFacet&&t.jsx(jr,{poolFor:y})]}):t.jsxs(t.Fragment,{children:[t.jsxs("aside",{className:"fbar",children:[A,R,P,t.jsx("span",{className:"fgrow"}),I()]}),a.openFacet&&t.jsx(jr,{poolFor:y})]})}function jr({poolFor:e}){const{st:a,dispatch:r,t:n,lang:o}=V(),i=a.filters,s=a.openFacet,{title:d,cols:c,options:g}=u.useMemo(()=>{if(s==="sig"){const m=e("signal").filter(f=>Fe(f)),v=new Map;m.forEach(f=>{const j=f.engine||"";v.set(j,(v.get(j)||0)+1)});const y=[{v:"*",label:n.fpSigAll,n:m.length,html:!0,on:i.signalOnly&&!i.signalEngines.length},...Ya([...v.keys()],o).map(f=>({v:f,label:St(f)+" "+We(f,o),n:v.get(f)||0,html:!1,on:i.signalOnly&&i.signalEngines.includes(f)}))];return{title:n.fpSigTitle,cols:2,options:y}}if(s==="sec"){const m=e("sector"),v=new Map;return m.forEach(y=>{y.sector&&v.set(y.sector,(v.get(y.sector)||0)+1)}),{title:n.fSector.toUpperCase(),cols:3,options:[...v.entries()].sort((y,f)=>f[1]-y[1]).map(([y,f])=>({v:y,label:y,n:f,html:!1,on:i.sector.includes(y)}))}}if(s==="pay"){const m=e("country"),v=new Map;return m.forEach(y=>{y.cc&&v.set(y.cc,(v.get(y.cc)||0)+1)}),{title:n.fCountry.toUpperCase(),cols:3,options:[...v.entries()].sort((y,f)=>f[1]-y[1]).map(([y,f])=>({v:y,label:It(y,o)||y,n:f,html:!1,on:i.country.includes(y)}))}}if(s==="det"){const m=e("engine"),v=new Map;return m.forEach(y=>{y.engine&&v.set(y.engine,(v.get(y.engine)||0)+1)}),{title:n.fEngine.toUpperCase(),cols:2,options:Ya([...v.keys()],o).map(y=>({v:y,label:St(y)+" "+We(y,o)+' <span style="color:var(--dim);font-size:10px">· '+ni(ri(y),o)+"</span>",n:v.get(y)||0,html:!0,on:i.engine.includes(y)}))}}if(s==="ang"){const m=e("angle"),v=new Map;return m.forEach(y=>{y.angle&&v.set(y.angle,(v.get(y.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...v.entries()].sort((y,f)=>f[1]-y[1]).map(([y,f])=>({v:y,label:y.replace(/[_-]+/g," "),n:f,html:!1,on:i.angle.includes(y)}))}}if(s==="mem"){const m=e("memoLevel"),v=new Map;m.forEach(f=>{if(f.kind==="target"){const j=xn(f);v.set(j,(v.get(j)||0)+1)}});const y=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(f=>({v:String(f),label:y[f],n:v.get(f)||0,html:!1,on:i.memoLevel.includes(f)}))}}const p=e("stage"),b=new Map;return p.forEach(m=>{m.stage&&b.set(m.stage,(b.get(m.stage)||0)+1)}),{title:n.fStage.toUpperCase(),cols:2,options:[...b.entries()].sort((m,v)=>v[1]-m[1]).map(([m,v])=>({v:m,label:m,n:v,html:!1,on:i.stage.includes(m)}))}},[s,a,o]),l=p=>{if(s==="sig"){if(p==="*")r({type:"filters",patch:{signalOnly:!(i.signalOnly&&!i.signalEngines.length),signalEngines:[]}});else{const m=i.signalEngines.includes(p)?i.signalEngines.filter(v=>v!==p):[...i.signalEngines,p];r({type:"filters",patch:{signalOnly:!0,signalEngines:m}})}return}if(s==="mem"){r({type:"toggleMemoLevel",value:Number(p)});return}r({type:"toggleFacet",facet:s==="sec"?"sector":s==="pay"?"country":s==="det"?"engine":s==="ang"?"angle":"stage",value:p})},h=()=>{r(s==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:s==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:s==="sec"?"sector":s==="pay"?"country":s==="det"?"engine":s==="ang"?"angle":"stage"})};return t.jsxs("div",{className:"fpanel on",children:[t.jsxs("div",{className:"ph",children:[t.jsx("b",{children:d}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",onClick:h,children:n.fpNone}),t.jsx("button",{type:"button",onClick:()=>r({type:"openFacet",facet:null}),children:n.fpClose})]}),t.jsx("div",{className:"fcols"+(c===2?" two":""),children:g.map(p=>t.jsxs("button",{type:"button",className:"opt","aria-pressed":p.on,onClick:()=>l(p.v),children:[t.jsx("span",{className:"bx"}),p.html?t.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:p.label}}):t.jsx("span",{className:"l",children:p.label}),t.jsx("span",{className:"n",children:p.n})]},p.v))}),t.jsxs("div",{className:"pf",children:[t.jsx("span",{className:"t",children:n.alertReady}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:n.alertCreate})]})]})}function ho({mapToggle:e=!0,variant:a="tabs"}){const{dossiers:r,st:n,dispatch:o,pipe:i,lang:s,t:d}=V(),c=u.useMemo(()=>{const b={};return r.forEach(m=>{ka(m,n.filters,i)&&(b.monde=(b.monde||0)+1,m.continent&&(b[m.continent]=(b[m.continent]||0)+1))}),b},[r,n.filters,i]),[g,l]=u.useState(!1),h=u.useRef(null);u.useEffect(()=>{if(!g)return;const b=v=>{var y;(y=h.current)!=null&&y.contains(v.target)||l(!1)},m=v=>{v.key==="Escape"&&l(!1)};return document.addEventListener("mousedown",b),document.addEventListener("keydown",m),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",m)}},[g]);const p=b=>{const m=bn.find(v=>v.key===b);return b==="monde"?d.contWorld:s==="fr"?m.fr:m.en};return a==="compact"?t.jsxs("div",{className:"contpick",ref:h,children:[t.jsxs("button",{type:"button",className:"contpick-btn","aria-expanded":g,"aria-haspopup":"listbox",onClick:()=>l(b=>!b),children:[p(n.continent),t.jsx("span",{className:"n",children:c[n.continent]||0}),t.jsx("i",{children:g?"▴":"▾"})]}),g&&t.jsx("div",{className:"contpick-pop",role:"listbox",children:Dn.map(b=>t.jsxs("button",{type:"button",role:"option","aria-selected":n.continent===b,onClick:()=>{o({type:"continent",key:b}),l(!1)},children:[p(b),t.jsx("span",{className:"n",children:c[b]||0})]},b))}),e&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>o({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?d.showMap:d.hideMap})]}):t.jsxs("div",{className:"conts",children:[Dn.map(b=>t.jsxs("button",{type:"button",className:"cbtn","aria-selected":n.continent===b,onClick:()=>o({type:"continent",key:b}),children:[p(b),t.jsx("span",{className:"n",children:c[b]||0})]},b)),e&&t.jsx("span",{className:"side",children:t.jsx("button",{type:"button",onClick:()=>o({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?d.showMap:d.hideMap})})]})}function xo(e){return String(e||"").split(`
`).map(a=>a.replace(/^#{1,6}\s*/,"").replace(/[*_`>]/g,"").trimEnd()).filter(a=>a.trim().length>0)}function ql(e){var o;const a=[],r=new Set,n=i=>{const s=(i||"").trim();!s||r.has(s.toLowerCase())||(r.add(s.toLowerCase()),a.push(s))};return((e==null?void 0:e.companies_cited)||[]).forEach(i=>n(i==null?void 0:i.name)),(((o=e==null?void 0:e.prospective)==null?void 0:o.companies_to_evaluate)||[]).forEach(i=>n(i==null?void 0:i.name)),a}function Nr({icon:e,title:a,hint:r,rows:n,addLabel:o,onEvaluate:i,onAddAll:s}){const{t:d}=V();return n.length?t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:[e," ",a]}),t.jsx("span",{className:"n",children:n.length}),s&&t.jsx("button",{type:"button",className:"rsblk-all",onClick:()=>s(n.map(c=>c.name)),children:o})]}),t.jsx("p",{className:"rsblk-hint",children:r}),t.jsx("div",{className:"rsblk-rows",children:n.map(c=>t.jsxs("div",{className:"rsrow",children:[t.jsxs("div",{className:"rsrow-t",children:[t.jsxs("div",{className:"rsrow-h",children:[t.jsx("span",{className:"nm",children:c.name}),c.chips.map(g=>t.jsx("span",{className:"ch",children:g},g))]}),c.line1&&t.jsx("p",{className:"w",children:c.line1}),c.line2&&t.jsx("p",{className:"r",children:c.line2})]}),t.jsx("button",{type:"button",className:"rsrow-go",onClick:()=>i(c.name),children:d.rsEvalOne})]},c.name))})]}):null}function go({card:e,onEvaluate:a,onAddAll:r}){var s;const{t:n}=V(),o=((e==null?void 0:e.companies_cited)||[]).filter(d=>d&&(d.name||"").trim()).map(d=>({name:(d.name||"").trim(),line1:(d.what||"").trim(),line2:(d.role||"").trim(),chips:[(d.country||"").trim()].filter(Boolean)})),i=(((s=e==null?void 0:e.prospective)==null?void 0:s.companies_to_evaluate)||[]).filter(d=>d&&(d.name||"").trim()).map(d=>({name:(d.name||"").trim(),line1:(d.why||"").trim(),chips:[(d.country||"").trim(),(d.stage||"").trim()].filter(Boolean)}));return!o.length&&!i.length?t.jsx("p",{className:"rsblk-none",children:n.rsNoCompanies}):t.jsxs(t.Fragment,{children:[t.jsx(Nr,{icon:"🏷",title:n.rsCited,hint:n.rsCitedHint,rows:o,addLabel:n.rsAddAll(o.length),onEvaluate:a,onAddAll:r}),t.jsx(Nr,{icon:"🎯",title:n.rsMatch,hint:n.rsMatchHint,rows:i,addLabel:n.rsAddAll(i.length),onEvaluate:a,onAddAll:r})]})}function Ll({card:e,onEvaluate:a,onAddAll:r}){var d,c,g;const{t:n}=V(),o=[e.industry,...e.market_tags||[],e.author].map(l=>(l||"").trim()).filter(Boolean),i=(((d=e.prospective)==null?void 0:d.criteria)||[]).filter(Boolean),s=(e.sources||[]).filter(l=>l&&l.url);return t.jsxs("div",{className:"rsdet",children:[e.market&&t.jsx("p",{className:"rsmk",children:e.market}),o.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:n.rsTags}),o.map(l=>t.jsx("span",{children:l},l))]}),t.jsxs("div",{className:"rsbody",children:[e.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${e.mindmap_png_b64}`,alt:n.rsMindmap}),t.jsx("figcaption",{children:n.rsMindmap})]}),t.jsx("div",{className:"rssum",children:xo(e.summary_md||"").map((l,h)=>t.jsx("p",{children:l},h))})]}),t.jsx(go,{card:e,onEvaluate:a,onAddAll:r}),(((c=e.prospective)==null?void 0:c.conclusion)||i.length>0)&&t.jsxs("section",{className:"rsblk rspro",children:[t.jsx("div",{className:"rsblk-h",children:t.jsxs("b",{children:["🔮 ",n.rsConclusion]})}),((g=e.prospective)==null?void 0:g.conclusion)&&t.jsx("p",{className:"rspro-c",children:e.prospective.conclusion}),i.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"rsblk-hint",children:n.rsCriteria}),t.jsx("ul",{className:"rspro-l",children:i.map(l=>t.jsx("li",{children:l},l))})]})]}),s.length>0&&t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:["🔗 ",n.rsSources]}),t.jsx("span",{className:"n",children:s.length})]}),t.jsx("div",{className:"rssrc",children:s.map(l=>t.jsx("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",children:l.label||l.url},l.url))})]})]})}function Rl(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{day:"2-digit",month:"short"})}function Fl({onClose:e,onEvaluate:a,onAddAll:r,bump:n,cbToken:o}){const{t:i,email:s}=V(),d=o,[c,g]=u.useState(null),[l,h]=u.useState(null),[p,b]=u.useState(null),[m,v]=u.useState(!1);u.useEffect(()=>{let f=!0;return(async()=>{const j=await Mr({email:s,cbToken:d});f&&g(j)})(),()=>{f=!1}},[s,d,n]);const y=f=>{h(f),b(null),v(!0),(async()=>{const j=await oi(f.id);b(j),v(!1)})()};return t.jsxs("div",{className:"rsarch",children:[t.jsxs("div",{className:"rsarch-h",children:[l?t.jsx("button",{type:"button",className:"rsarch-back",onClick:()=>{h(null),b(null)},children:i.rsArchBack}):t.jsxs("b",{children:["🗂 ",i.rsArchTitle]}),l&&t.jsx("span",{className:"ti",children:l.title}),!l&&c&&t.jsx("span",{className:"n",children:c.length}),t.jsx("button",{type:"button",className:"rsx",title:i.rsClose,onClick:e,children:"×"})]}),!l&&t.jsxs("div",{className:"rsarch-list",children:[c===null&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchLoading}),c!==null&&c.length===0&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchEmpty}),(c||[]).map(f=>t.jsxs("button",{type:"button",className:"rsarch-row",onClick:()=>y(f),children:[t.jsx("span",{className:"ti",children:f.title}),t.jsxs("span",{className:"me",children:[Rl(f.created_at),f.industry?` · ${f.industry}`:"",f.author?` · ${f.author}`:""]}),t.jsx("span",{className:"cn",children:i.rsRowCounts(f.cited_n||0,f.evaluate_n||0)}),t.jsx("span",{className:"st"+(f.published?" on":""),children:f.published?i.rsPub:i.rsPriv})]},f.id))]}),l&&t.jsxs("div",{className:"rsarch-one",children:[t.jsxs("div",{className:"rsarch-sub",children:[l.source_url&&t.jsx("a",{href:l.source_url,target:"_blank",rel:"noopener noreferrer",children:i.rsSource}),l.published&&l.page_url&&t.jsx("a",{href:l.page_url,target:"_blank",rel:"noopener noreferrer",children:i.rsLink}),t.jsx("span",{className:"st"+(l.published?" on":""),children:l.published?i.rsPub:i.rsPriv})]}),m&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchLoading}),!m&&!p&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchGone}),!m&&p&&t.jsx(Ll,{card:p,onEvaluate:a,onAddAll:r})]})]})}const ba=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function Jt(e){return/^https?:\/\//i.test((e||"").trim())}function nt(e){const a=(e||"").trim();return a?Jt(a)?a:ba.test(a)&&!/\s/.test(a)?"https://"+a.replace(/^\/+/,""):"":""}function Ml(){return t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]})}function Ol(){const{t:e,mode:a,token:r,email:n,askEvaluate:o,sessTally:i,dispatch:s,evalBusy:d,evalCards:c,caps:g,data:l,canWrite:h,source:p,dossiers:b,doAnalyse:m,liveMemos:v,pipe:y}=V(),f=a==="client",j=u.useMemo(()=>r||(p!=="default"?ii():""),[r,p]),[C,k]=u.useState(""),[N,z]=u.useState(!1),[E,q]=u.useState(""),[A,R]=u.useState(""),[P,I]=u.useState(""),[L,F]=u.useState(!1),[x,T]=u.useState(!1),[B,G]=u.useState(""),[H,Q]=u.useState(!1),[X,K]=u.useState(""),[ue,ee]=u.useState([]),xe=u.useRef(!1),[_,se]=u.useState(!1),[me,Le]=u.useState(!1),[te,pe]=u.useState(!1),he=u.useRef(!1),[de,Y]=u.useState(""),[ne,ie]=u.useState(""),[ge,Ee]=u.useState(!1),[re,ce]=u.useState(!1),[Ie,qe]=u.useState(0),[Me,Ce]=u.useState(""),[ye,Ue]=u.useState(null),[Re,st]=u.useState(null),[pt,gt]=u.useState(!1),[tt,bt]=u.useState(null),[vt,Je]=u.useState(0),ut=u.useRef(!1),yt=C.trim()?ba.test(C.trim())?e.evalUrl:e.evalName:e.evalWaiting,S=u.useMemo(()=>B.split(`
`).map(O=>O.trim()).filter(Boolean).slice(0,15),[B]);u.useEffect(()=>{if(typeof window>"u")return;const O=new URLSearchParams(window.location.search),J=(O.get("rs")||"").trim(),oe=(O.get("rstext")||"").trim();J&&/^https?:\/\//i.test(J)&&Y(J),oe&&ie(oe),(J&&/^https?:\/\//i.test(J)||oe)&&se(!0)},[]),u.useEffect(()=>{const O=J=>{const oe=J.detail||{},w=String(oe.url||"").trim(),D=String(oe.text||"").trim();w&&/^https?:\/\//i.test(w)&&Y(w),D&&ie(D),(w&&/^https?:\/\//i.test(w)||D)&&(se(!0),k(""),q(""),Ee(!0),window.setTimeout(()=>Ee(!1),900))};return window.addEventListener("ppmap:research",O),()=>window.removeEventListener("ppmap:research",O)},[]),u.useEffect(()=>{const O=J=>{const oe=J.detail||{},w=String(oe.name||"").trim();if(!w)return;se(!1),k(w),q(w);const D=nt(String(oe.website||oe.domain||""));R(D),I(nt(String(oe.url||""))),F(!D),z(!0),window.setTimeout(()=>z(!1),900)};return window.addEventListener("ppmap:prefill",O),()=>window.removeEventListener("ppmap:prefill",O)},[]),u.useEffect(()=>{const O=(E||"").trim();if(!O||_||A){(A||!O||_)&&F(!1);return}const J=b.find(D=>Pe(D.name)===Pe(O)),oe=nt((J==null?void 0:J.website)||"")||nt((J==null?void 0:J.domain)||"");if(oe){R(oe),F(!1);return}let w=!0;return F(!0),Or(O).then(D=>{var U,Z;if(!w)return;const M=nt(D.website||"")||nt(((Z=(U=D.candidates)==null?void 0:U[0])==null?void 0:Z.url)||"");M&&R(M)}).catch(()=>{}).finally(()=>{w&&F(!1)}),()=>{w=!1}},[E,_,A,b]),u.useEffect(()=>{const O=J=>{var w;const oe=String(((w=J.detail)==null?void 0:w.url)||"").trim();Jt(oe)&&window.open(oe,"_blank","noopener,noreferrer")};return window.addEventListener("ppmap:view",O),()=>window.removeEventListener("ppmap:view",O)},[]),u.useEffect(()=>{if(he.current===_)return;he.current=_,pe(!0);const O=window.setTimeout(()=>pe(!1),560);return()=>window.clearTimeout(O)},[_]),u.useEffect(()=>{if(typeof window>"u")return;const O=document.querySelector(".atl2 .eval-stick")||document.querySelector(".atl2 .demand"),J=document.querySelector(".atl2.ops, .atl2.cibles");if(!O||!J)return;const oe=()=>J.style.setProperty("--demand-h",`${O.offsetHeight}px`);oe();const w=new ResizeObserver(oe);return w.observe(O),()=>w.disconnect()},[p,N,ge,x,_,te,L]),u.useEffect(()=>{if(!h&&!j){bt(null);return}let O=!0;return(async()=>{const J=await Mr({email:n,cbToken:j});O&&bt(J.length)})(),()=>{O=!1}},[h,j,n,vt]);const W=ue.length?ue:c,$=l.credits,ae=u.useCallback(O=>{const J=O.map(oe=>(oe||"").trim()).filter(Boolean);J.length&&(G(oe=>{const w=oe.split(`
`).map(U=>U.trim()).filter(Boolean),D=new Set(w.map(U=>U.toLowerCase())),M=J.filter(U=>!D.has(U.toLowerCase()));return[...w,...M].slice(0,15).join(`
`)}),T(!0))},[]);u.useEffect(()=>{if(!re)return;qe(0);const O=window.setInterval(()=>qe(J=>J+1),1e3);return()=>window.clearInterval(O)},[re]);const be=u.useMemo(()=>{const O=C.trim().toLowerCase();return!O||!y?null:b.find(J=>Pe(J.name)===O&&ze(J)===1)||null},[C,b,y]),le=()=>{const O=C.trim();if(O){if(be){m(be);return}o(null,O),f&&k("")}},ke=async()=>{if(!f){o(null,S[0]||"");return}if(!S.length||H)return;Q(!0),xe.current=!1;const O=[];for(let J=0;J<S.length&&!xe.current;J++){K(e.evaluating(J+1,S.length,S[J]));const oe=await Dr(r,S[J],"atelier2");if(O.unshift({name:oe.company||S[J],verdict:oe.verdict,reason:oe.reason||"",remaining:oe.remaining??null}),ee([...O]),oe.verdict==="quota"){O.unshift({name:"",verdict:"quota",reason:e.quota(S.length-J-1),remaining:0}),ee([...O]),G(S.slice(J+1).join(`
`)),K(""),Q(!1);return}}K(""),G(xe.current?S.slice(O.length).join(`
`):""),Q(!1)},Xe=async()=>{var oe,w,D;if(ut.current)return;const O=de.trim().replace(/\s+/g,""),J=ne.trim();if(!O&&!J){Ce(e.rsNeed);return}if(!f&&!j){o(null,O||J.slice(0,80));return}ut.current=!0,Ce(""),Ue(null),st(null),ce(!0);try{const M=await li({url:O,text:J,email:n,cbToken:j});if(ce(!1),!M||M.status!=="success"){Ce((M==null?void 0:M.message)||"Erreur");return}Ue(M),se(!1),ae((((oe=M.prospective)==null?void 0:oe.companies_to_evaluate)||[]).map(Z=>(Z==null?void 0:Z.name)||"")),st({state:"pending"});const U=await di(M,{email:n,cbToken:j});st(U.ok?{state:"ok",scopeLabel:((w=U.summary)==null?void 0:w.scope_label)||"",scope:((D=U.summary)==null?void 0:D.scope)||""}:{state:"fail",msg:U.error||""}),U.ok&&Je(Z=>Z+1)}finally{ut.current=!1,ce(!1)}},wt=[ye==null?void 0:ye.industry,...(ye==null?void 0:ye.market_tags)||[],ye==null?void 0:ye.author].map(O=>(O||"").trim()).filter(Boolean),mt=(Re==null?void 0:Re.state)==="pending",_t=Re&&(mt?t.jsx("span",{className:"rslink pend",children:e.rsSaving}):Re.state==="ok"?t.jsx("span",{className:"rslink ok",children:Re.scope&&Re.scope!=="public"?e.rsSavedIn(Re.scopeLabel||Re.scope.replace(/^fund:/,"")):e.rsSaved}):t.jsx("span",{className:"rslink fail",title:Re.msg,children:e.rsSaveFail})),qt=ql(ye).length,Oe=_,De=(E||C).trim(),Ze=b.find(O=>Pe(O.name)===Pe(De)),$t=nt(C)||A||nt((Ze==null?void 0:Ze.website)||"")||nt((Ze==null?void 0:Ze.domain)||""),Ut=P||nt((Ze==null?void 0:Ze.url)||""),ia=be?e.actAnalyse:De?e.evalGoOn(De.length>22?De.slice(0,21)+"…":De):e.evalGo,Ma=re?`${si(de.trim())==="youtube"&&de.trim()?e.rsRunningVid:e.rsRunning} ${e.rsElapsed(Ie)}`:mt?e.rsSaving:e.rowExtract;return t.jsxs("div",{className:"demand"+(Oe?" rs-mode":"")+(E&&C.trim()===E||N||ge?" pair":"")+(N||ge||te?" echo":"")+(te?" swap":""),children:[t.jsxs("div",{className:"drow"+((Oe?ge:N)||te?" flash":"")+((Oe?de.trim():ba.test(C.trim()))?" has-url":""),children:[t.jsxs("span",{className:"dfield",children:[t.jsx("input",{value:Oe?de:C,placeholder:Oe?e.rsUrlPh:e.evalPh,autoComplete:"off",maxLength:Oe?600:200,spellCheck:Oe?!1:void 0,inputMode:Oe?"url":void 0,onChange:O=>{if(Oe){Y(O.target.value);return}k(O.target.value),E&&O.target.value.trim()!==E&&(q(""),R(""),I(""),F(!1))},onKeyDown:O=>{O.key==="Enter"&&(Oe?Xe():le())}}),t.jsx("span",{className:"detect"+(Oe?" off":"")+(ba.test(C.trim())?" url":""),children:yt})]}),t.jsx("span",{className:"dacts",children:Oe?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn"+(re?" loading":""),disabled:re||mt||!de.trim()&&!ne.trim(),onClick:()=>{Xe()},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"elab",children:Ma})]}),t.jsxs("a",{className:"viewbtn"+(Jt(de)?"":" off"),href:Jt(de)?de.trim():void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewLinkHint,onClick:O=>{Jt(de)||O.preventDefault()},children:[t.jsx(Ml,{}),e.viewLink]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn"+(be?" analyse":"")+(d?" loading":""),disabled:d,onClick:le,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"elab",children:ia})]}),t.jsxs("a",{className:"viewbtn sm"+(L?" searching":$t?"":" off"),href:$t||void 0,target:"_blank",rel:"noopener noreferrer","aria-busy":L||void 0,title:L?e.viewSiteBusyHint:e.viewSiteHint,onClick:O=>{$t||O.preventDefault()},children:[L&&t.jsx("span",{className:"sitespin","aria-hidden":"true"}),L?e.viewSiteBusy:e.viewSite]}),t.jsx("a",{className:"viewbtn sm"+(Ut?"":" off"),href:Ut||void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewSrcHint,onClick:O=>{Ut||O.preventDefault()},children:e.viewSrc})]})}),g.showCredits&&$&&t.jsxs("button",{type:"button",className:"credits"+($.total_available<=0&&!$.unlimited?" empty":""),onClick:()=>s({type:"modal",modal:"recharge"}),children:[t.jsx("span",{className:"cl",children:e.creditsCap}),t.jsx("b",{children:$.unlimited?"∞":$.total_available}),!$.unlimited&&t.jsxs("span",{className:"cm",children:["/ ",$.daily_grant+$.purchased]}),$.total_available<=0&&!$.unlimited?t.jsx("span",{className:"rc",children:e.creditsRecharge}):t.jsx("span",{className:"cd",children:e.creditsToday})]})]}),v.items.filter(O=>O.status==="boot"||O.status==="running").map(O=>t.jsxs("div",{className:"result on memolive",children:[t.jsx("span",{className:"vv",children:t.jsxs("span",{className:"vp",children:["⚡ ",e.actAnalyse]})}),t.jsx("span",{className:"rn",children:O.name}),t.jsx(Xt,{item:O,serverOff:v.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),t.jsxs("button",{type:"button",className:"go",onClick:()=>s({type:"modal",modal:"queue"}),children:[e.liveOpenQueue," →"]})]},"live-"+O.name)),t.jsxs("div",{className:"dunder",children:[t.jsx("button",{type:"button",className:"dmulti",onClick:()=>T(!x),children:e.evalMulti}),t.jsx("button",{type:"button",className:"dmulti dsearch"+(_?" on":""),onClick:()=>se(!_),children:e.rsOpen}),tt!==null&&tt>0&&t.jsx("button",{type:"button",className:"dmulti darch"+(pt?" on":""),onClick:()=>gt(!pt),children:e.rsArchOpen(tt)})]}),pt&&t.jsx(Fl,{bump:vt,cbToken:j,onClose:()=>gt(!1),onEvaluate:O=>o(null,O),onAddAll:ae}),t.jsx("div",{className:"rsp slim"+(_?" on":" off"),"aria-hidden":!_,children:t.jsxs("div",{className:"rsp-in",children:[t.jsxs("button",{type:"button",className:"rspaste",tabIndex:_?void 0:-1,onClick:()=>Le(O=>!O),children:[e.rsOr," · ",e.rsTextPh,t.jsx("i",{children:me?"▴":"▾"})]}),me&&t.jsx("textarea",{className:"rstext",value:ne,placeholder:e.rsTextPh,tabIndex:_?void 0:-1,onChange:O=>ie(O.target.value)})]})}),Me&&t.jsx("div",{className:"rserr",children:Me}),ye&&t.jsxs("div",{className:"rscard",children:[t.jsxs("div",{className:"rsh",children:[t.jsx("b",{children:ye.title}),ye.source_url&&t.jsx("a",{href:ye.source_url,target:"_blank",rel:"noopener noreferrer",children:e.rsSource}),t.jsx("button",{type:"button",className:"rsx",title:e.rsClose,onClick:()=>{Ue(null),st(null)},children:"×"})]}),ye.market&&t.jsx("p",{className:"rsmk",children:ye.market}),wt.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:e.rsTags}),wt.map(O=>t.jsx("span",{children:O},O))]}),t.jsxs("div",{className:"rsbody",children:[ye.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${ye.mindmap_png_b64}`,alt:e.rsMindmap}),t.jsx("figcaption",{children:e.rsMindmap})]}),t.jsx("div",{className:"rssum",children:xo(ye.summary_md||"").map((O,J)=>t.jsx("p",{children:O},J))})]}),t.jsx(go,{card:ye,onEvaluate:O=>o(null,O),onAddAll:ae}),t.jsxs("div",{className:"rsfoot",children:[t.jsx("span",{children:e.rsFound(qt)}),_t]})]}),x&&t.jsxs("div",{className:"bulk on",children:[t.jsx("textarea",{value:B,placeholder:e.bulkPh,onChange:O=>G(O.target.value.split(`
`).slice(0,15).join(`
`))}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+(H?" loading":""),style:{justifyContent:"center"},disabled:H||!S.length,onClick:()=>{ke()},children:[t.jsx("span",{className:"fill"}),H&&X?X:e.evalList]}),t.jsx("span",{className:"hint",children:e.bulkCount(S.length)})]})]}),W.slice(0,1).map((O,J)=>{const oe=O.verdict==="kept",w=O.verdict==="quota",D=oe?"var(--brand)":w?"var(--bolt)":"var(--red)",M=oe?"var(--brand-l)":w?"#FEF3C7":"#FEF2F2";return t.jsxs("div",{className:"result on",style:{"--c":D,"--bgc":M},children:[t.jsx("span",{className:"vv",children:t.jsx("span",{className:"vp",children:oe?"✓ "+e.kept:w?"⏳":"✗ "+e.dropped})}),O.name&&t.jsx("span",{className:"rn",children:O.name}),t.jsx("span",{className:"rr",children:O.reason?t.jsxs(t.Fragment,{children:[t.jsx("b",{children:e.why})," ",O.reason]}):null}),!!(O.candidates&&O.candidates.length)&&t.jsx("span",{className:"sitepick",children:O.candidates.map(U=>t.jsxs("span",{className:"sp1",children:[t.jsxs("a",{href:U.url.startsWith("http")?U.url:`https://${U.url}`,target:"_blank",rel:"nofollow noopener",children:[(U.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,34)," ↗"]}),t.jsx("button",{type:"button",onClick:()=>o(null,U.url),children:e.evalPickGo})]},U.url))}),!w&&t.jsx("button",{type:"button",className:"go",onClick:()=>{s({type:"ptab",tab:oe?1:5});const U=(O.name||"").trim().toLowerCase();window.setTimeout(()=>{const Z=[...document.querySelectorAll(".atl2 .list .row")].find(Ne=>{var ve;return(((ve=Ne.querySelector(".rnm"))==null?void 0:ve.textContent)||"").trim().toLowerCase().includes(U)});Z&&(Z.scrollIntoView({behavior:"smooth",block:"center"}),Z.classList.add("flashrow"),window.setTimeout(()=>Z.classList.remove("flashrow"),2200))},260)},children:e.seeSpace(oe?e.statusKeep.replace("✅ ",""):e.statusDrop.replace("❌ ",""))})]},J)}),f&&(i.kept+i.dropped>0||W.length>0)&&t.jsxs("div",{className:"tally",children:[t.jsx("span",{dangerouslySetInnerHTML:{__html:e.session(i.kept,i.dropped)}})," ","·"," ",t.jsx("a",{onClick:()=>s({type:"modal",modal:"space"}),children:e.seeMySpace})]})]})}function Dl(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Pl(){const{st:e,dispatch:a,byId:r,t:n,doDeep:o}=V(),i=e.memoConsole?r.get(e.memoConsole):null,s=u.useMemo(()=>i?[i.reasoning||"",Dl(i.summary||"")].filter(Boolean).join(`

`):"",[i]);if(!i)return null;const d=xt(i),c=xn(i);return t.jsx("div",{className:"demand",style:{paddingTop:0},children:t.jsxs("div",{className:"memo",style:{marginTop:0},children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"nm",children:i.name}),d&&t.jsx("span",{className:"vv",children:d}),typeof i.score=="number"&&t.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[i.score,"/100"]}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),t.jsx("div",{className:"tabs2",children:t.jsx("button",{type:"button","aria-selected":"true",children:n.memoSynth})}),t.jsx("div",{className:"mb2",children:s?s.split(`

`).map((g,l)=>t.jsx("p",{style:{margin:"0 0 10px"},children:g},l)):t.jsx("p",{children:n.memoNone})}),t.jsxs("div",{className:"mf",children:[Mt(i)?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"t",children:n.memoDeepHint}),t.jsx("button",{type:"button",className:"deep",onClick:()=>o(i),children:n.memoDeep})]}):t.jsx("span",{className:"t",children:c===2?n.critMemoKinds:""}),i.memoUrl&&t.jsx("a",{className:"go",href:i.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:n.memoOpenFull})]})]})})}function Nn({name:e}){const{t:a,token:r,caps:n,mode:o,flashErr:i}=V(),[s,d]=u.useState(!1),[c,g]=u.useState(null),l=n.pipe&&o==="client"&&!n.lockActions,h=async()=>{if(!l||s)return;d(!0);const p=await ci(r,e);if(d(!1),!p){i(a.actErr);return}g(p.results||[])};return u.useEffect(()=>{if(!l)return;const p=b=>{var v;const m=String(((v=b.detail)==null?void 0:v.name)||"").trim();m&&m.toLowerCase()===e.toLowerCase()&&h()};return window.addEventListener("ppmap:similar",p),()=>window.removeEventListener("ppmap:similar",p)},[e,l]),u.useEffect(()=>{if(l)try{const p=(sessionStorage.getItem("pp:similar")||"").trim();p&&p.toLowerCase()===e.toLowerCase()&&(sessionStorage.removeItem("pp:similar"),h())}catch{}},[e,l]),l?t.jsxs("div",{className:"simb",onClick:p=>p.stopPropagation(),children:[t.jsx("button",{type:"button",className:"abtn",disabled:s,onClick:()=>{h()},children:s?a.similarBusy:a.similar}),c&&(c.length===0?t.jsx("p",{className:"mnote",children:a.similarNone}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"siml",children:c.map(p=>t.jsxs("li",{children:[t.jsx("b",{className:p.verdict==="kept"?"ok":"ko",children:p.company}),p.reason&&t.jsx("span",{children:p.reason})]},p.company))}),t.jsx("p",{className:"mnote dim",children:a.similarNote})]}))]}):null}const Il=new Set(["b","strong","i","em","u","br","p","ul","ol","li","h4","h5"]),ha=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Bl(e){const a=String(e||"");if(!a)return"";let r="",n=0;for(;n<a.length;){const o=a.indexOf("<",n);if(o<0){r+=ha(a.slice(n));break}r+=ha(a.slice(n,o));const i=a.indexOf(">",o);if(i<0){r+=ha(a.slice(o));break}const s=a.slice(o+1,i).trim(),d=/^(\/?)([a-zA-Z0-9]+)/.exec(s),c=d?d[2].toLowerCase():"";d&&Il.has(c)?r+=`<${d[1]}${c}>`:r+=ha(a.slice(o,i+1)),n=i+1}return r}const Er=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function Be({k:e,v:a,href:r}){return a==null||a===""?null:t.jsxs("div",{className:"cdl",children:[t.jsx("span",{className:"cdk",children:e}),r?t.jsx("a",{className:"cdv",href:r,target:"_blank",rel:"noopener noreferrer",children:String(a)}):t.jsx("span",{className:"cdv",children:String(a)})]})}function _l(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function $l({o:e}){const{t:a,doDeep:r}=V(),[n,o]=u.useState(!1),i=xt(e),s=[e.reasoning||"",_l(e.summary||"")].filter(Boolean);return t.jsxs("div",{className:"cdmemo",children:[i&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:i}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),s.length?s.join(`

`).split(`

`).map((d,c)=>t.jsx("p",{className:"cdtxt",children:d},c)):t.jsx("p",{className:"cdtxt",children:a.memoNone}),t.jsxs("div",{className:"cdacts",children:[Mt(e)&&t.jsx("button",{type:"button",className:"btn p",onClick:d=>{d.stopPropagation(),r(e)},children:a.memoDeep}),e.memoUrl&&t.jsx("button",{type:"button",className:"btn b",onClick:d=>{d.stopPropagation(),o(c=>!c)},children:n?a.memoHideHere:a.memoReadHere}),e.memoUrl&&t.jsx("a",{className:"btn d",href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",onClick:d=>d.stopPropagation(),children:a.memoOpenFull})]}),n&&e.memoUrl&&t.jsx("iframe",{className:"cdembed",src:e.memoUrl,loading:"lazy",title:a.cdMemoTab,referrerPolicy:"no-referrer-when-downgrade",onClick:d=>d.stopPropagation()})]})}function En({o:e}){const{t:a,lang:r,dispatch:n,caps:o}=V(),i=ra(e),s=xt(e),d=(e.cribleStatus||"").trim().toUpperCase()||(i==="NO MATCH"?"NO MATCH":i==="MATCH"?"MATCH":""),c=[e.sector,e.stage,e.countryLabel,e.city,e.website,e.domain,e.linkedinCompany,e.angle,e.date].filter(Boolean).length,g=[e.contactName,e.contactEmail,e.contactLinkedin].filter(Boolean).length,l=[e.ceoStatus,e.ceoNote,o.pipe?e.memoUrl:"",o.pipe?e.memoPdfUrl:""].filter(Boolean).length+(typeof e.engagement=="number"&&e.engagement>0?1:0),h=u.useMemo(()=>[{k:"conv",lib:a.cdConviction,n:(d?1:0)+(e.reasoning?1:0)+(s?1:0)},{k:"ana",lib:a.cdAnalyse,n:(e.summary?1:0)+(o.pipe&&!o.lockActions?1:0)},{k:"soc",lib:a.cdSociete,n:c},{k:"ctc",lib:a.cdContact,n:g},{k:"suivi",lib:a.cdSuivi,n:l},{k:"memo",lib:a.cdMemoTab,n:e.memoUrl||e.summary||Mt(e)?1:0}].filter(v=>v.n>0),[e,a,d,s,c,g,l]),[p,b]=u.useState("");if(!h.length)return null;const m=h.some(v=>v.k===p)?p:h[0].k;return t.jsxs("div",{className:"cdtabs",children:[t.jsx("div",{className:"cdnav",role:"tablist",children:h.map(v=>t.jsx("button",{type:"button",role:"tab","aria-selected":m===v.k,"data-tour":"tab-"+v.k,className:m===v.k?"on":"",onClick:y=>{y.stopPropagation(),b(v.k)},children:v.lib},v.k))}),t.jsxs("div",{className:"cdbody",onClick:v=>v.stopPropagation(),children:[m==="conv"&&t.jsxs(t.Fragment,{children:[d&&t.jsxs("div",{className:"cdv1"+(d==="NO MATCH"?" out":""),children:[t.jsx("b",{children:d==="NO MATCH"?a.vOut:a.vKept}),t.jsx("span",{className:"cdw",children:a.cdCrible})]}),e.reasoning&&t.jsx("p",{className:"cdtxt",children:e.reasoning}),s&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:s}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"cdgrid",children:[t.jsx(Be,{k:a.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(Be,{k:a.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(Be,{k:a.cdVerdictDate,v:Er(e.verdictDate,r)})]})]}),m==="ana"&&t.jsxs(t.Fragment,{children:[e.summary&&t.jsx("div",{className:"cdrich",dangerouslySetInnerHTML:{__html:Bl(e.summary)}}),o.pipe&&!o.lockActions&&t.jsx(Ul,{o:e})]}),m==="soc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Be,{k:a.cdSector,v:e.sector}),t.jsx(Be,{k:a.cdStage,v:e.stage}),t.jsx(Be,{k:a.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(Be,{k:a.cdSite,v:e.domain||e.website,href:e.website||void 0}),t.jsx(Be,{k:a.cdLinkedin,v:e.linkedinCompany?"LinkedIn":"",href:e.linkedinCompany}),t.jsx(Be,{k:a.cdAngle,v:e.angle}),t.jsx(Be,{k:a.cdDetected,v:Er(e.date,r)})]}),m==="ctc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Be,{k:a.cdName,v:e.contactName}),t.jsx(Be,{k:a.cdEmail,v:e.contactEmail,href:e.contactEmail?`mailto:${e.contactEmail}`:void 0}),t.jsx(Be,{k:a.cdLinkedin,v:e.contactLinkedin?"LinkedIn":"",href:e.contactLinkedin})]}),m==="memo"&&t.jsx($l,{o:e}),m==="suivi"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"cdgrid",children:[t.jsx(Be,{k:a.cdCeoStatus,v:e.ceoStatus}),t.jsx(Be,{k:a.cdEngagement,v:typeof e.engagement=="number"&&e.engagement>0?e.engagement:""})]}),e.ceoNote&&t.jsxs("p",{className:"cdtxt",children:["💬 ",e.ceoNote]}),o.pipe&&(e.memoUrl||e.memoPdfUrl)&&t.jsxs("div",{className:"cdacts",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"abtn",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemo," →"]}),e.memoPdfUrl&&t.jsx("a",{className:"abtn",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"})]})]})]})]})}function Ul({o:e}){const{t:a,token:r}=V(),[n,o]=u.useState(!1),[i,s]=u.useState(null),d=async()=>{n||(o(!0),s(await pi(r,e.name,e.website||e.domain||"")),o(!1))},c=(i==null?void 0:i.blocs)||{},g=[[a.qaVP,c.value_prop],[a.qaProduct,c.produit],[a.qaModel,c.modele],[a.qaSummary,c.synthese]],l=g.some(([,h])=>h);return t.jsxs("div",{className:"qab",children:[!i&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mnote dim",children:a.qaHint}),t.jsx("button",{type:"button",className:"abtn",disabled:n,onClick:()=>{d()},children:n?a.qaBusy:a.qaRun})]}),i&&l&&t.jsxs(t.Fragment,{children:[g.filter(([,h])=>h).map(([h,p])=>t.jsxs("div",{className:"qal",children:[t.jsx("span",{className:"qak",children:h}),t.jsx("p",{children:p})]},h)),!!(i.pages||[]).length&&t.jsx("p",{className:"mnote dim",children:a.qaSources((i.pages||[]).length)})]}),i&&!l&&t.jsx("p",{className:"mnote warn",children:i.quota?a.qaQuota:a.qaEmpty})]})}function oa({spec:e}){const a=u.useRef(null),r=u.useRef(null),[n,o]=u.useState(!1);return u.useEffect(()=>{const i=a.current;if(!i)return;let s=!1;const d=()=>{const g=Math.max(280,Math.min(560,i.clientWidth||320));Pn({kind:"op",card:e},g).then(l=>{!s&&l&&i.isConnected&&i.replaceChildren(l)})},c=window.requestAnimationFrame(d);return()=>{s=!0,window.cancelAnimationFrame(c),i.replaceChildren()}},[e]),u.useEffect(()=>{if(!n)return;const i=r.current;if(!i)return;let s=!1;Pn({kind:"op",card:e},Math.min(1100,Math.floor(window.innerWidth*.92))).then(c=>{!s&&c&&i.isConnected&&i.replaceChildren(c)});const d=c=>{c.key==="Escape"&&o(!1)};return document.addEventListener("keydown",d),()=>{s=!0,document.removeEventListener("keydown",d)}},[n,e]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:a,className:"zoom-card-host",title:"Agrandir",onClick:()=>o(!0)}),n&&Pt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"atl2-lb",onClick:()=>o(!1),children:[t.jsx("div",{ref:r,style:{lineHeight:0}}),t.jsx("button",{type:"button",className:"atl2-lb-x","aria-label":"Fermer",onClick:()=>o(!1),children:"×"})]})}),document.body)]})}const Hl=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function Vl(e,a=!1){if(!e||typeof window>"u")return;const r=352,n=a?620:430,o=window.innerWidth,i=window.innerHeight,s=Math.min(Math.max(e.x-r/2,8),Math.max(8,o-r-8));let d=e.y+10;return d+n>i-8&&(d=Math.max(8,e.y-n-14)),d<8&&(d=8),{left:s,top:d}}function Wl(){const{st:e,dispatch:a,byId:r,t:n,lang:o,caps:i,mode:s,askEvaluate:d,doAnalyse:c,doDecide:g,doPromote:l,doRepeche:h,doApproach:p,doDeep:b,doOnboard:m,outbound:v,evalBusy:y}=V(),f=e.popupId?r.get(e.popupId):null;if(!f)return null;const j=Fe(f),C=ze(f),k=xt(f),N=ra(f),z=f.kind==="target",E=q=>{a({type:"filters",patch:q}),a({type:"popup",id:null})};return Pt.createPortal(t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:Hl}),t.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),t.jsxs("div",{className:"pop on "+(e.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:Vl(e.popupAnchor,!!f.card),onClick:q=>q.stopPropagation(),children:[t.jsxs("div",{className:"ph",children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h3",{children:f.name}),t.jsx("span",{className:"id",children:n.detected(n.daysAgo(ct(f.date)),We(f.engine,o))})]}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),t.jsxs("div",{className:"pb",children:[t.jsxs("div",{className:"tags",children:[f.cc&&t.jsx("button",{type:"button",className:"hi",onClick:()=>E({country:[f.cc]}),children:(It(f.cc,o)||f.countryLabel||"").toUpperCase()}),f.sector&&t.jsx("button",{type:"button",onClick:()=>E({sector:[f.sector]}),children:f.sector.toUpperCase()}),f.stage&&t.jsx("button",{type:"button",onClick:()=>E({stage:[f.stage]}),children:f.stage.toUpperCase()}),typeof f.amountEur=="number"&&f.amountEur>0&&t.jsx("span",{className:"am2",children:Bt(f.amountEur,o)})]}),i.pipe&&z&&t.jsxs("div",{className:"pstat",children:[N&&t.jsx("span",{className:"vd "+(N==="MATCH"?"v-ok":"v-no"),title:n.vt[N],children:N}),k&&t.jsx("span",{className:"vd v-cons",title:n.vt[k],children:k}),t.jsx("span",{className:"pstep",children:n.plabels[C]}),f.ceoStatus&&t.jsx("span",{className:"pstep own",children:f.ceoStatus})]}),(f.tagline||f.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:f.tagline||f.headline})]}),t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.how}),t.jsxs("p",{children:[St(f.engine)," ",t.jsx("b",{children:We(f.engine,o)})," — ",ui(f.engine,o),f.noteTitle&&t.jsxs(t.Fragment,{children:[" · ",f.noteTitle]})]}),j?t.jsxs("p",{className:"psig",style:{marginTop:9},children:[t.jsx(ht,{o:f,lg:!0})," ",t.jsx(Fa,{o:f,src:!0}),t.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[n.signaledOn(Pr(j,o))," · ",n.win7(Ir(j,o))]})]}):t.jsx("p",{className:"pnos",style:{marginTop:5},children:n.noSignal})]}),f.card?t.jsx(oa,{spec:f.card}):null,f.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:i.pipe&&C>=1?n.verdictCap:n.memo}),t.jsx("p",{className:"memo",children:f.reasoning})]}),i.pipe&&z&&k&&t.jsx("div",{className:"fld",children:t.jsxs("p",{style:{fontWeight:700},children:[k,typeof f.score=="number"&&f.score>0?" · "+n.score(f.score):""]})}),i.pipe&&z&&t.jsx(En,{o:f})]}),t.jsx(Nn,{name:f.name}),t.jsxs("div",{className:"pf",children:[i.lockActions||s!=="client"&&i.pipe?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[t.jsx("span",{className:"fill"}),"🔒 ",n.lockbarCta]}):i.pipe?t.jsxs(t.Fragment,{children:[C===0&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:y,onClick:()=>d(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)]}),C===1&&t.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{c(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actAnalyse]}),C===2&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{l(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actPromote]}),C===3&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{g(f,!0),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actYes]}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{g(f,!1),a({type:"popup",id:null})},children:n.actNo}),Mt(f)&&t.jsx("button",{type:"button",className:"abtn",title:n.memoDeepHint,onClick:()=>{b(f),a({type:"popup",id:null})},children:n.memoDeep})]}),C===4&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{p(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actApproach]}),C===5&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{h(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actRepeche]}),f.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:f.id}),a({type:"popup",id:null})},children:"📄"}),v&&t.jsx("button",{type:"button",className:"abtn",title:n.actOnboardTitle,onClick:()=>{m(f),a({type:"popup",id:null})},children:"🚀"})]}):f.engine==="media"&&f.url&&i.showDemand?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{var q;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:f.url}}))}catch{}a({type:"popup",id:null}),(q=document.querySelector(".atl2 .demand"))==null||q.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rsOpen]}),t.jsx("button",{type:"button",className:"abtn",disabled:y,title:n.evalGoOn(f.name),onClick:()=>d(f),children:"⚡"})]}):t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:y,onClick:()=>d(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)," →"]}),f.website&&t.jsx("a",{className:"psite",href:f.website.startsWith("http")?f.website:"https://"+f.website,target:"_blank",rel:"noopener noreferrer",title:f.website,children:"🌐"})]})]})]}),document.body)}function Gl(){const{lang:e,token:a,dossiers:r,caps:n}=V(),o=a||"home",{names:i,verdicts:s}=u.useMemo(()=>{const c=[],g={};return r.forEach(l=>{l.kind!=="target"||!l.name||(c.push(l.name),g[l.name]=mi(l)||"")}),{names:c,verdicts:g}},[r]);return{diff:u.useMemo(()=>i.length?fi(o,i,s,e):null,[o,i.length]),names:i,verdicts:s,scope:o,caps:n}}function Yl(){const{st:e,dispatch:a,counts:r,t:n,doUndo:o,data:i,dossiers:s}=V(),d=i.loading&&!s.length,c=u.useRef({});u.useEffect(()=>{c.current={...r}},[r]);const g=p=>{const b=c.current[p],m=b!==void 0?r[p]-b:0;return t.jsxs("button",{type:"button",className:"step"+(p===3&&r[3]>0?" wait":""),style:{"--c":`var(${Ka[p]})`,"--tc":p<=3?"var(--ink)":"#fff"},"aria-selected":e.ptab===p,title:n.phelp[p],onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}a({type:"ptab",tab:p})},children:[t.jsxs("span",{className:"l",children:[n.plabels[p].toUpperCase(),p===3&&r[3]>0&&t.jsx("i",{className:"wd"})]}),t.jsxs("span",{className:"n"+(m>0?" up":m<0?" down":""),children:[r[p],m!==0&&t.jsxs("em",{className:"delta",children:[m>0?"+":"−",Math.abs(m)]})]})]},p)},l=(p,b,m)=>t.jsxs("button",{type:"button",className:"off"+(b?" view":""),style:{"--c":`var(${Ka[p]})`},"aria-selected":e.ptab===p,title:n.phelp[p],onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}a({type:"ptab",tab:p})},children:[t.jsx("span",{className:"l",children:m.toUpperCase()}),t.jsx("span",{className:"n",children:r[p]})]},p),h=(p,b,m,v=!1)=>t.jsx("button",{type:"button",className:"tool",title:b,disabled:v,onClick:m,children:p},b);return t.jsxs("div",{className:"funnel"+(d?" waiting":""),children:[t.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(g)}),t.jsxs("div",{className:"offtrack",children:[l(5,!1,n.plabels[5]),l(7,!0,n.plabels[7]),l(6,!0,"★ "+n.plabels[6])]}),t.jsxs("span",{className:"ftools",style:{marginLeft:"auto"},children:[h("↩",n.toolUndo,o,e.undo.length===0),h("↺",n.toolReset,()=>{a({type:"reset"})}),h("⇅",n.toolSort,()=>a({type:"sort",key:e.sort.key})),h("▶",n.toolTuto,()=>a({type:"modal",modal:"tuto"})),h("⚙",n.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}function Kl(){const{st:e,dispatch:a,t:r,scoped:n,memoQueued:o,doAnalyse:i,mode:s}=V(),d=u.useRef(null),[c,g]=u.useState(60);u.useEffect(()=>{let m=0;const v=()=>{var k;const y=d.current;if(!y)return;const f=(k=y.parentElement)==null?void 0:k.querySelector('.funnel [aria-selected="true"]');if(!f)return;const j=f.getBoundingClientRect(),C=y.getBoundingClientRect();g(Math.max(20,Math.min(j.left+j.width/2-C.left,C.width-30)))};return m=requestAnimationFrame(v),window.addEventListener("resize",v),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",v)}},[e.ptab]);const l=e.ptab;let h=r.tuto[l].p;if(l===3){const m=n.filter(f=>f.kind==="target"&&ze(f)===3),v=m.filter(f=>Qa(f)==="auto").length,y=m.filter(f=>Qa(f)==="cd").length;h=r.tutoPending(v,y,m.length)}const p=(()=>{if(s!=="client")return null;if(l===0&&n.length)return{label:r.tuto[0].a,run:()=>a({type:"chainStart",queue:n.map(m=>m.id)})};if(l===1){const m=n.filter(v=>v.kind==="target"&&ze(v)===1&&!o.has(v.id)).slice(0,10);if(m.length)return{label:r.tuto[1].a,run:()=>a({type:"chainStart",queue:m.map(v=>v.id)})}}return null})(),b=hi(l);return t.jsxs("div",{ref:d,className:"tuto mini"+(b?"":" on-dark"),style:{"--bg":`var(${Ka[l]})`,"--ax":c+"px","--stc":b?"var(--ink)":"#fff","--stt":b?"#fff":"var(--ink)","--tc":b?"var(--ink)":"#fff"},children:[t.jsx("span",{className:"txt",children:t.jsxs("p",{children:[t.jsx("b",{className:"tstep",children:r.plabels[l].toUpperCase()}),t.jsx("span",{className:"tbody",dangerouslySetInnerHTML:{__html:h}})]})}),p&&t.jsx("button",{type:"button",className:"tprim",onClick:p.run,children:p.label})]})}const Wa=600,jt=62,Sr="atl2:fstats";function Ql(){const{t:e,lang:a,data:r,caps:n,st:o,dispatch:i}=V(),[s,d]=u.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem(Sr)==="on"}catch{return!1}}),c=r.stats,g=u.useMemo(()=>((c==null?void 0:c.by_day)||[]).slice(-30),[c]),l=(c==null?void 0:c.since)||"";if(!n.showFunnel||!c||typeof c.screened!="number")return null;const h=N=>a==="en"?N.slice(5,10):`${N.slice(8,10)}/${N.slice(5,7)}`,p=N=>N.toLocaleString(a==="en"?"en-US":"fr-FR"),b=g.reduce((N,z)=>Math.max(N,z.s||0),0),m=g.length?Wa/g.length:0,v=Math.max(4,m-4),y=g.length>=5&&b>0,f=r.marketEstimate||0,j=h(new Date().toISOString().slice(0,10)),C=N=>[...typeof N=="number"?[[N,e.funScreened("","")]]:[],...typeof c.kept=="number"?[[c.kept,e.funKept]]:[],...typeof c.analyzed=="number"?[[c.analyzed,e.funAnalyzed]]:[],...typeof c.shown=="number"?[[c.shown,e.funShown]]:[]],k=[];return typeof c.screened_window=="number"&&l&&k.push({cle:"fenetre",periode:e.funPerWindow(h(l),j),etapes:[[c.screened_window,e.funScreened("","")]]}),typeof c.screened=="number"&&k.push({cle:"total",periode:e.funPerAll,etapes:C(c.screened)}),t.jsxs("div",{className:"fstats"+(s?" on":""),children:[k.map(N=>t.jsxs("div",{className:"fst-row fst-lab",title:e.funScope,children:[t.jsx("span",{className:"fst-per",children:N.periode}),N.etapes.map(([z,E],q)=>t.jsxs("span",{className:"fst-t",children:[q>0&&t.jsx("span",{className:"fst-ar",children:"→"}),t.jsx("b",{children:p(z)}),t.jsx("i",{children:E})]},N.cle+E)),N.cle==="total"&&f>0&&t.jsxs("span",{className:"fst-t fst-mkt",children:[t.jsx("span",{className:"fst-ar",children:"·"}),t.jsx("i",{children:e.funOfMarket(p(f),Math.min(100,Math.round((c.screened||0)/f*100)))})]}),N.cle===k[k.length-1].cle&&y&&t.jsx("button",{type:"button",className:"fst-x","aria-expanded":s,title:s?e.fstatsHide:e.fstatsShow,onClick:()=>{const z=!s;d(z),z&&!o.mapFolded&&i({type:"mapFold",folded:!0});try{localStorage.setItem(Sr,z?"on":"off")}catch{}},children:s?"⌃":"⌄"})]},N.cle)),s&&y&&t.jsxs("div",{className:"fst-act",children:[t.jsxs("div",{className:"fst-ah",children:[t.jsx("span",{children:e.actTitle}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#185c38"}}),e.actKept]}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#cfe0d6"}}),e.actScreened]})]}),t.jsxs("svg",{viewBox:`0 0 ${Wa} ${jt}`,preserveAspectRatio:"none",role:"img","aria-label":e.actTitle,children:[g.map((N,z)=>{const E=(N.s||0)/b*(jt-4),q=(N.m||0)/b*(jt-4),A=z*m+(m-v)/2;return t.jsxs("g",{children:[t.jsx("title",{children:`${h(N.d)} — ${N.s} ${e.actScreened} · ${N.m} ${e.actKept}`}),t.jsx("rect",{x:A,y:jt-2-E,width:v,height:E,fill:"#cfe0d6"}),t.jsx("rect",{x:A,y:jt-2-q,width:v,height:q,fill:"#185c38"})]},N.d)}),t.jsx("line",{x1:0,y1:jt-1.5,x2:Wa,y2:jt-1.5,stroke:"#dbe5df",strokeWidth:1})]}),t.jsxs("div",{className:"fst-ax",children:[t.jsx("span",{children:h(g[0].d)}),t.jsx("span",{children:e.actToday})]})]})]})}const bo={"CALL PENDING":"call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function Sn({o:e,locked:a=!1}){const{t:r}=V(),n=ra(e),o=xt(e),i=ze(e),s=Qa(e),d=xi(e);return t.jsxs("span",{className:"c-vd",children:[n?t.jsx("span",{className:"vd "+(n==="MATCH"?"v-ok":"v-no"),title:r.vt[n],children:n}):t.jsx("span",{className:"vd wait",children:r.actToEval}),o?t.jsx("span",{className:"vd "+(bo[o]||"v-cons"),title:r.vt[o],children:o}):i===1?t.jsx("span",{className:"vd wait",children:r.actMemoQueue}):null,i===3&&s==="auto"&&t.jsx("span",{className:"org au",title:r.orgAutoTitle,children:r.orgAuto}),i===3&&s==="cd"&&t.jsx("span",{className:"org cd",title:r.orgCdTitle,children:r.orgCd}),i===3&&d!==null&&t.jsx("span",{className:"wait2 "+(d>10?"hot":d>=5?"warm":""),title:r.waitTitle(d),children:r.waitChip(d)}),!a&&t.jsx(Ns,{o:e})]})}const At=e=>e.length>22?e.slice(0,21)+"…":e,va=new Set(["media","nominations","recrutements","tribunes","listes","evenements","partenariats","produits","regul","marche"]);function Ra(e){return va.has(e.engine||"")}function Nt(e){return!!e.noCo||Ra(e)&&!!e.url}function na(e){const a=(e.url||"").trim(),r=[e.headline,e.tagline].filter(n=>n&&n!==e.name).join(`
`);if(!(!a&&!r))try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:a,text:r}}))}catch{}}function vo(){let e=0;return document.querySelectorAll("body.pp-desk .pph, body.pp-desk .pp-nav, body.pp-desk .pp-band, .atl2.ops .eval-stick, .atl2.ops .listhead, .atl2.cibles .eval-stick, .atl2.cibles .listhead").forEach(a=>{const r=a.getBoundingClientRect();r.height<4||r.top<window.innerHeight*.55&&r.bottom>e&&(e=r.bottom)}),e}function Jl({on:e,rev:a}){const[r,n]=u.useState(null),[o,i]=u.useState({top:0,left:0,width:0});return u.useEffect(()=>{if(!e){n(null);return}const s=()=>{var m,v,y;const d=document.querySelector(".atl2.ops .desk-list"),c=document.querySelector(".atl2.ops .listhead");if(!d){n(null);return}const g=d.getBoundingClientRect(),l=c?c.getBoundingClientRect().bottom:g.top;i({top:Math.round(l),left:Math.round(g.left),width:Math.round(g.width)});const h=[...d.querySelectorAll(":scope .grp")];let p=null;for(const f of h){const j=f.querySelector(".grp-h");j&&j.getBoundingClientRect().bottom<=l+2&&(p=f)}if(!p){n(null);return}const b=p.querySelector(".grp-h");if(!b){n(null);return}n({ic:(((m=b.querySelector(".ic"))==null?void 0:m.textContent)||"").trim(),t:(((v=b.querySelector(".t"))==null?void 0:v.textContent)||"").trim(),s:(((y=b.querySelector(".s"))==null?void 0:y.textContent)||"").trim()})};return s(),window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}},[e,a]),!e||!r||o.width<80?null:t.jsxs("div",{className:"grp-pin",style:{top:o.top,left:o.left,width:o.width},children:[t.jsx("span",{className:"ic",children:r.ic}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:r.t}),t.jsx("div",{className:"s",children:r.s})]})]})}function Xl(e){const r=()=>{const n=vo(),o=e.getBoundingClientRect().top-n-8;Math.abs(o)<2||window.scrollBy({top:o,left:0,behavior:"auto"})};r(),requestAnimationFrame(()=>requestAnimationFrame(r))}function Cr({o:e}){const{t:a,askEvaluate:r,evalBusy:n,lang:o}=V(),[i,s]=u.useState(!1);if(u.useEffect(()=>{n||s(!1)},[n]),_e(e)){const g=(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("span",{className:"verdict",style:{"--c":g?"var(--brand)":"var(--red)"},title:e.reasoning||"",children:[g?"✓":"✗"," ",t.jsx("b",{children:g?a.kept:a.dropped}),typeof e.score=="number"&&e.score>0?" "+e.score:""]})}const c=i&&n;return t.jsxs("button",{type:"button",className:"rev"+(c?" loading":""),disabled:n,title:a.evalGoOn(e.name),onClick:g=>{g.stopPropagation(),s(!0),r(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(At(e.name))})]})}function Cn({o:e}){const{t:a,caps:r,memoQueued:n,approachDone:o,doAnalyse:i,doDecide:s,doPromote:d,doRepeche:c,doApproach:g,dispatch:l,liveMemos:h}=V(),p=m=>v=>{v.stopPropagation(),m()};if(r.lockActions){const m=p(()=>l({type:"modal",modal:"rdv"}));if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",onClick:m,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});const v=ze(e);return v===0?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",onClick:m,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(At(e.name))})]})}):v===1?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",onClick:m,children:a.actAnalyse})}):v===3?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",onClick:m,children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",onClick:m,children:a.actNo})]})}):v===2?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"promo",onClick:m,children:a.actPromote})}):v===4?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",onClick:m,children:a.actApproach})}):v===5?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"promo",onClick:m,children:a.actRepeche})}):t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn read",onClick:m,children:a.actMemo})})}if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:m=>{m.stopPropagation(),na(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});if(!r.pipe)return Ra(e)&&e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:m=>{m.stopPropagation(),na(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):e.noCo?t.jsx("span",{className:"cell"}):t.jsx("span",{className:"cell",children:t.jsx(Cr,{o:e})});const b=ze(e);if(b===0)return t.jsx("span",{className:"cell",children:t.jsx(Cr,{o:e})});if(b===1){const m=h.liveOf(e.name);if(m&&(m.status==="boot"||m.status==="running"))return t.jsx("span",{className:"cell",children:t.jsx(Xt,{item:m,serverOff:h.serverOff,bootLbl:a.liveBoot,endLabel:a.liveEnd})});const v=n.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",disabled:v,onClick:p(()=>i(e)),children:v?a.actAnalyseQueued:a.actAnalyse})})}if(b===3)return t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:p(()=>s(e,!0)),children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:p(()=>s(e,!1)),children:a.actNo}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:p(()=>l({type:"memoConsole",id:e.id})),children:"📄"})]})});if(b===4){const m=o.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",disabled:m,onClick:p(()=>g(e)),children:m?a.actApproachSent:a.actApproach})})}return b===2?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:p(()=>d(e)),children:a.actPromote}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:p(()=>l({type:"memoConsole",id:e.id})),children:"📄"})]})}):b===5?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:p(()=>c(e)),children:a.actRepeche}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:p(()=>l({type:"memoConsole",id:e.id})),children:"📄"})]})}):t.jsx("span",{className:"cell",children:e.memoUrl?t.jsx("button",{type:"button",className:"memobtn read",onClick:p(()=>l({type:"memoConsole",id:e.id})),children:a.actMemo}):t.jsx("span",{className:"rc",children:"—"})})}function Zl({o:e}){const{t:a,doThumb:r,thumbOf:n}=V(),o=n(e);return t.jsxs("span",{className:"thu",children:[t.jsx("button",{type:"button",className:"tb up"+(o==="yes"?" on":""),title:a.thumbUp,onClick:i=>{i.stopPropagation(),r(e,!0)},children:"👍"}),t.jsx("button",{type:"button",className:"tb dn"+(o==="no"?" on":""),title:a.thumbDn,onClick:i=>{i.stopPropagation(),r(e,!1)},children:"👎"})]})}function ed({o:e}){const{lang:a}=V();return Fe(e)?t.jsxs("span",{className:"c-sig",children:[t.jsx(ht,{o:e}),t.jsx(Fa,{o:e,src:!0})]}):t.jsx("span",{className:"c-sig",children:t.jsxs("span",{className:"mo",children:[St(e.engine||"")," ",We(e.engine||"",a)]})})}function td({o:e,locked:a,open:r,onToggle:n,selected:o,echo:i,onSelect:s,fresh:d}){const{dispatch:c,caps:g,markRow:l,markedId:h,favIds:p,toggleFav:b,t:m}=V(),v=ze(e),y=["#0F172A","#475C6E","#8798A8","#B9C6D2"],f=e.date?Math.max(0,Math.floor((Date.now()-Date.parse(e.date))/864e5)):9999,j=f<=0?0:f<=7?1:f<=30?2:3,C=g.pipe&&e.kind==="target"?["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"][v]:y[j],k=p.has(e.id),N=z=>{if(a)return;if(s){s(e.id);return}if(g.pipe||e.kind==="op"){n();return}const E=z.currentTarget.getBoundingClientRect();c({type:"popup",id:e.id,anchor:{x:E.left+Math.min(280,E.width/3),y:E.bottom}})};return t.jsxs(u.Fragment,{children:[t.jsxs("div",{className:"row"+(h===e.id||r||o?" on":"")+(r?" open":"")+(o?" sel":"")+(i?" echo":"")+(g.pipe&&e.kind==="target"?" p"+v:"")+(k?" fav":"")+(a?" tzr":""),"aria-selected":o||void 0,onMouseEnter:()=>l(e.id),onMouseLeave:()=>l(null),onClick:N,children:[t.jsx("span",{className:"pt",style:{"--c":C}}),t.jsx(No,{o:e}),t.jsxs("span",{className:"nd",children:[d&&t.jsx("span",{className:"rfresh",children:"✨"}),Fe(e)&&t.jsx(ht,{o:e}),t.jsxs("span",{className:"rnm"+(a?" nmx":""),title:a?void 0:e.name,children:[g.pipe&&t.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:k?1:.35,padding:0,marginRight:4},onClick:z=>{z.stopPropagation(),b(e)},children:k?"★":"☆"}),e.name]}),t.jsx("span",{className:"rds",title:e.tagline||e.headline||"",children:[e.tagline,e.headline,e.reasoning].find(z=>z&&z!==e.name)||""}),e.acquirer&&t.jsxs("button",{type:"button",className:"racq",title:m.acqSee(e.acquirer),onClick:z=>{z.stopPropagation(),c({type:"acquirer",value:e.acquirer||""})},children:["← ",At(e.acquirer)]}),Ve(e)?t.jsx("span",{className:"rdec",title:m.doEdito,children:"📖"}):e.decryptHtml?t.jsx("span",{className:"rdec",title:m.zoomNewsMark,children:"📰"}):null]}),t.jsx(ad,{o:e}),t.jsx("span",{className:"c-stade",children:e.stage||""}),t.jsx(ed,{o:e}),g.pipe&&t.jsx(Sn,{o:e,locked:a}),g.pipe&&t.jsxs("span",{className:"c-sc",children:[typeof e.score=="number"?e.score:"",typeof e.score=="number"&&t.jsx("s",{children:"/100"})]}),t.jsx(Cn,{o:e}),g.showThumbs&&t.jsx(Zl,{o:e})]}),r&&!a&&!s&&t.jsx(od,{o:e})]})}function ad({o:e}){const{lang:a,caps:r}=V();if(r.pipe&&e.kind==="target")return t.jsx("span",{className:"c-amt none",children:"—"});const n=Bt(e.amountEur,a);return t.jsx("span",{className:"c-amt"+(n?"":" none"),children:n||"—"})}function nd({o:e}){const{t:a,lang:r,askEvaluate:n,evalBusy:o,dispatch:i}=V(),s=(p,b=!1)=>m=>{m.stopPropagation(),b&&i({type:"continent",key:"monde"}),i({type:"filters",patch:p})},d=(()=>{const p=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return p?p[1].slice(0,40):""})(),c=Bt(e.amountEur,r),g=(e.date||"").slice(0,10).split("-").reverse().join("/"),l=_e(e),h=l&&(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("div",{className:"card ops-open",children:[t.jsxs("div",{className:"oc-main",children:[e.decryptHtml?t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}):t.jsx("p",{className:"oc-head",children:e.headline||e.tagline||e.name}),t.jsxs("div",{className:"oc-meta",children:[e.sector&&t.jsx("button",{type:"button",onClick:s({sector:[e.sector]}),children:e.sector}),e.countryLabel&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:s({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:s({stage:[e.stage]}),children:e.stage}),c&&t.jsx("span",{className:"oc-amt",children:c}),g&&t.jsx("span",{children:g})]}),t.jsxs("div",{className:"oc-acts",children:[l?t.jsxs("span",{className:"verdict",style:{"--c":h?"var(--brand)":"var(--red)"},children:[h?"✓":"✗"," ",t.jsx("b",{children:h?a.kept:a.dropped})]}):Nt(e)?t.jsxs(t.Fragment,{children:[e.url&&t.jsx("button",{type:"button",className:"oc-cta",onClick:p=>{p.stopPropagation(),na(e)},children:a.rowExtract}),!e.noCo&&t.jsx("button",{type:"button",className:"oc-ghost",disabled:o,onClick:p=>{p.stopPropagation(),n(e)},children:a.evalGoOn(At(e.name))})]}):t.jsx("button",{type:"button",className:"oc-cta",disabled:o,onClick:p=>{p.stopPropagation(),n(e)},children:a.evalGoOn(At(e.name))}),e.url&&t.jsxs("a",{className:"oc-src",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:p=>p.stopPropagation(),children:[(r==="fr"?"lire la source":"read the source")+(d?` · ${d}`:"")," ↗"]})]})]}),e.card&&t.jsx("div",{className:"oc-side",children:t.jsx(oa,{spec:e.card})})]})}function rd({o:e}){const{t:a,lang:r,caps:n,dispatch:o}=V();if(!e)return t.jsx("p",{className:"readpane-empty",children:r==="fr"?"Cliquez une ligne — le dossier s’ouvre ici, sans quitter la liste.":"Click a row — the file opens here, without leaving the list."});const i=(e.date||"").slice(0,10).split("-").reverse().join("/");return t.jsxs("div",{className:"zoom zoom-pipe",children:[t.jsxs("div",{className:"zoom-k",children:[We(e.engine||"",r),i?` · ${i}`:""]}),t.jsx("h3",{className:"zoom-h",children:e.name}),(e.sector||e.countryLabel||e.stage)&&t.jsxs("div",{className:"zoom-meta",children:[e.sector?t.jsx("span",{children:e.sector}):null,e.countryLabel?t.jsx("span",{children:e.countryLabel}):null,e.stage?t.jsx("span",{children:e.stage}):null]}),t.jsx("div",{className:"zoom-cta",children:n.lockActions?t.jsx("button",{type:"button",className:"oc-cta",onClick:()=>o({type:"modal",modal:"rdv"}),children:a.lockbarCta}):t.jsx(Cn,{o:e})}),t.jsx(En,{o:e})]})}function yo({o:e,extra:a}){const{t:r,lang:n,askEvaluate:o,evalBusy:i,dispatch:s,caps:d,dossiers:c}=V(),g=u.useRef(null),l=Ve(e);if(u.useEffect(()=>{if(!l||!(e!=null&&e.decryptHtml))return;const x=g.current;if(!x)return;let T=!1;return Ga(()=>import("./fit-BnaWm7z_.js"),[]).then(async B=>{await B.ensureEditoCss(),!(T||!x.isConnected)&&(B.beautifyEditoRows(x),B.mountCardFits(x))}),()=>{T=!0}},[l,e==null?void 0:e.decryptHtml]),!e&&!a){const x=c.find(Ve);if(x)return t.jsx(yo,{o:x})}const h=((e==null?void 0:e.name)||(a==null?void 0:a.name)||"").trim(),p=((e==null?void 0:e.url)||(a==null?void 0:a.url)||"").trim(),b=(e==null?void 0:e.headline)||(e==null?void 0:e.tagline)||(a==null?void 0:a.headline)||h,m=(e==null?void 0:e.card)||(a==null?void 0:a.card),v=e?!!e.noCo:!h||wa(h),y=(e==null?void 0:e.engine)||"",f=Ve(e),j=e?Bt(e.amountEur,n):"",C=((e==null?void 0:e.date)||"").slice(0,10).split("-").reverse().join("/"),k=(()=>{const x=/https?:\/\/(?:www\.)?([^/]+)/.exec(p);return x?x[1].replace(/^www\./,"").slice(0,40):""})(),N=c.find(Ve),z=((N==null?void 0:N.url)||"").trim(),E=!!p&&!!z&&(p===z||p.endsWith(z)||z.endsWith(p)),q=(x,T=!1)=>B=>{B.stopPropagation(),T&&s({type:"continent",key:"monde"}),s({type:"filters",patch:x})};if(!e&&!a)return t.jsx("p",{className:"readpane-empty",children:n==="fr"?"Cliquez une ligne, un pin ou le ticker — le dossier s’ouvre ici.":"Click a row, a pin or the ticker — the file opens here."});const A=()=>{h&&(s({type:"continent",key:"monde"}),s({type:"filters",patch:{search:h}}))},R=()=>{e!=null&&e.sector&&s({type:"filters",patch:{sector:[e.sector]}})},P=()=>{na({url:p,headline:b,tagline:e==null?void 0:e.tagline,name:h})},I=e?_e(e):!1,L=I&&e&&(e.verdict||"").toUpperCase()!=="NO MATCH",F=f?r.doEdito.replace(/^📖\s*/,""):y?We(y,n):n==="fr"?"Dossier":"File";return t.jsxs("div",{className:"zoom",children:[t.jsxs("div",{className:"zoom-k",children:[F,C?` · ${C}`:""]}),t.jsx("h3",{className:"zoom-h",children:b}),p&&!f&&(v||Ra({engine:y}))&&t.jsxs("a",{className:"zoom-ext",href:p,target:"_blank",rel:"noopener noreferrer",title:r.viewLinkHint,onClick:x=>x.stopPropagation(),children:[t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]}),r.viewLink,k?t.jsx("em",{children:k}):null]}),(e==null?void 0:e.decryptHtml)&&t.jsx("div",{ref:g,className:"ed-decrypt-b zoom-body"+(f?" ppart":""),dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsxs("div",{className:"zoom-meta",children:[(e==null?void 0:e.sector)&&t.jsx("button",{type:"button",onClick:q({sector:[e.sector]}),children:e.sector}),(e==null?void 0:e.countryLabel)&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:q({country:[e.cc]},!0),children:e.countryLabel}):e!=null&&e.countryLabel?t.jsx("span",{children:e.countryLabel}):null),(e==null?void 0:e.stage)&&t.jsx("button",{type:"button",onClick:q({stage:[e.stage]}),children:e.stage}),j&&t.jsx("span",{className:"oc-amt",children:j})]}),m&&t.jsx("div",{className:"zoom-card",children:t.jsx(oa,{spec:m})}),(p&&!E&&!f||N&&!f)&&t.jsxs("div",{className:"zoom-srcbox",children:[p&&!E&&!f&&t.jsxs("a",{className:"zoom-src",href:p,target:"_blank",rel:"nofollow noopener",onClick:x=>x.stopPropagation(),children:[r.zoomSrc,k?` · ${k}`:""," ↗"]}),N&&!f&&t.jsxs("button",{type:"button",className:"zoom-src zoom-src-art",onClick:x=>{x.stopPropagation(),s({type:"focus",id:N.id})},children:[r.doEdito," →"]})]}),t.jsxs("div",{className:"zoom-acts",children:[I?t.jsxs("span",{className:"verdict",style:{"--c":L?"var(--brand)":"var(--red)"},children:[L?"✓":"✗"," ",t.jsx("b",{children:L?r.kept:r.dropped})]}):!v&&h?t.jsxs("button",{type:"button",className:"zp-go",disabled:i,onClick:x=>{x.stopPropagation(),o(e,h)},children:[t.jsx("span",{className:"zp-ico",children:"⚡"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.evalGoOn(At(h))}),t.jsx("em",{children:r.zoomEvalHint})]})]}):null,p&&!f&&(v||Ra({engine:y}))&&t.jsxs("button",{type:"button",className:"zp-go"+(!v&&h?" ghost":""),onClick:x=>{x.stopPropagation(),P()},children:[t.jsx("span",{className:"zp-ico",children:"🔎"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.rowExtract}),t.jsx("em",{children:r.rsOpen})]})]}),!v&&h&&t.jsxs("div",{className:"zp-row",children:[(e==null?void 0:e.sector)&&!d.pipe&&t.jsxs("button",{type:"button",className:"zp-sec",onClick:x=>{x.stopPropagation(),R()},children:[t.jsx("span",{className:"zp-k",children:r.zoomSimilar}),t.jsx("span",{className:"zp-v",children:e.sector}),t.jsx("em",{children:r.zoomSimilarHint})]}),t.jsxs("button",{type:"button",className:"zp-sec",onClick:x=>{x.stopPropagation(),A()},children:[t.jsx("span",{className:"zp-k",children:r.zoomInCockpit}),t.jsx("span",{className:"zp-v",children:At(h)}),t.jsx("em",{children:r.zoomIsolateHint})]})]}),!v&&h&&d.pipe&&t.jsx(Nn,{name:h})]})]})}function od({o:e}){const{t:a,lang:r,dispatch:n,caps:o,outbound:i,doOnboard:s}=V();return!o.pipe&&e.kind==="op"?t.jsx(nd,{o:e}):t.jsxs("div",{className:"card",style:{display:"grid"},children:[t.jsxs("div",{children:[e.tagline&&t.jsx("p",{className:"lead",children:e.tagline}),e.decryptHtml&&t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsx(En,{o:e}),t.jsx(Es,{o:e}),t.jsx(zs,{o:e}),t.jsx(Nn,{name:e.name}),t.jsxs("div",{className:"tg",children:[e.sector&&t.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),n({type:"filters",patch:{sector:[e.sector]}})},children:e.sector}),e.stage&&t.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),n({type:"filters",patch:{stage:[e.stage]}})},children:e.stage}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),n({type:"continent",key:"monde"}),n({type:"filters",patch:{country:[e.cc]}})},children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.city&&t.jsx("span",{children:e.city})]})]}),t.jsxs("div",{className:"cside",children:[t.jsxs("div",{className:"top",children:[typeof e.score=="number"&&t.jsx("span",{className:"sc3",children:e.score}),t.jsx("span",{className:"vv",children:t.jsx(Sn,{o:e})})]}),e.card&&t.jsx(oa,{spec:e.card}),t.jsxs("div",{className:"sec2",children:[t.jsxs("div",{className:"k2",children:[St(e.engine||"")," ",We(e.engine||"",r)]}),Fe(e)&&t.jsx("div",{style:{marginTop:8},children:t.jsx(ht,{o:e})})]}),o.pipe&&(e.memoUrl||i)&&t.jsx("div",{className:"sec2 acts2",children:i&&t.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>s(e),children:a.actOnboard})})]})]})}function id({o:e,locked:a,selected:r,onSelect:n}){const{t:o,dispatch:i,caps:s,doDecide:d,lang:c}=V();if(!s.pipe&&e.kind==="op"){const h=Bt(e.amountEur,c),p=(()=>{const m=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return m?m[1].slice(0,32):""})(),b=(m,v=!1)=>y=>{y.stopPropagation(),v&&i({type:"continent",key:"monde"}),i({type:"filters",patch:m})};return t.jsxs("div",{className:"dcard dops"+(a?" tzr":"")+(r?" sel":""),onClick:()=>{!a&&n&&n(e.id)},children:[e.card&&t.jsx("div",{className:"dimg",children:t.jsx(oa,{spec:e.card})}),t.jsxs("div",{className:"dh",children:[t.jsx("span",{className:"dnm",title:e.name,children:e.name}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial",children:"📖"})]}),e.headline&&e.headline!==e.name&&t.jsx("div",{className:"ddesc",children:e.headline}),t.jsxs("div",{className:"dtags",children:[e.sector&&t.jsx("button",{type:"button",onClick:b({sector:[e.sector]}),children:e.sector}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:b({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:b({stage:[e.stage]}),children:e.stage}),h&&t.jsx("span",{className:"damt",children:h})]}),t.jsxs("div",{className:"dsig",children:[t.jsxs("span",{className:"dmo",children:[St(e.engine||"")," ",We(e.engine||"",c)]}),Fe(e)&&t.jsx(ht,{o:e})]}),e.url&&t.jsxs("a",{className:"dsrc",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:m=>m.stopPropagation(),children:[(c==="fr"?"lire la source":"read the source")+(p?` · ${p}`:"")," ↗"]}),!a&&t.jsx("div",{className:"dact",children:t.jsx(Cn,{o:e})})]})}const g=ze(e),l=["#E7EBF0","#E7F3EC","#C4E0D0","#7FC0A0","#0E8A4F","#DC2626"][g];return t.jsxs("div",{className:"dcard"+(a?" tzr":"")+(r?" sel":""),style:{"--c":l},onClick:()=>{!a&&n&&n(e.id)},children:[t.jsxs("div",{className:"dh",children:[typeof e.score=="number"&&t.jsx("span",{className:"dsc",children:e.score}),t.jsx("span",{className:"dnm",title:e.name,children:e.name})]}),t.jsxs("div",{className:"dv",children:[t.jsx(Sn,{o:e}),Fe(e)&&t.jsx(ht,{o:e})]}),t.jsx("div",{className:"dmeta",children:[e.countryLabel,e.stage,e.sector].filter(Boolean).join(" · ").toUpperCase()}),(e.tagline||e.reasoning)&&t.jsx("div",{className:"ddesc",children:e.tagline||e.reasoning}),!a&&s.pipe&&g===3&&t.jsxs("div",{className:"dyn",children:[t.jsx("button",{type:"button",style:{"--c3":"#0A6B3D"},onClick:()=>d(e,!0),children:o.actYes}),t.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>d(e,!1),children:o.actNo})]}),!a&&e.memoUrl&&t.jsxs("button",{type:"button",className:"dmemo",onClick:()=>i({type:"memoConsole",id:e.id}),children:[o.actMemo," →"]})]})}function sd(){const{t:e}=V(),[a,r]=u.useState(0);return u.useEffect(()=>{const n=window.setInterval(()=>r(o=>o+1),2400);return()=>window.clearInterval(n)},[]),t.jsxs("div",{className:"loadwait","aria-live":"polite",children:[t.jsxs("div",{className:"lw-top",children:[t.jsx("span",{className:"lw-dot"}),t.jsx("span",{className:"lw-msg",children:e.loadMsgs[a%e.loadMsgs.length]})]}),[0,1,2,3,4,5].map(n=>t.jsxs("div",{className:"lw-row",style:{"--d":`${n*.12}s`},children:[t.jsx("span",{className:"lw-c lw-c1"}),t.jsx("span",{className:"lw-c lw-c2"}),t.jsx("span",{className:"lw-c lw-c3"})]},n))]})}function ld({counts:e}){const{st:a,dispatch:r,t:n,lang:o}=V(),i=o==="en",s=l=>n.plabels[l]||"",d=[0,1,2,3,4,5,6,7].filter(l=>l!==a.ptab&&(e[l]||0)>0),c=d.includes(0)?0:d.sort((l,h)=>(e[h]||0)-(e[l]||0))[0];if(c===void 0)return t.jsx("div",{className:"void",children:n.emptyTab});const g=e[c]||0;return t.jsxs("div",{className:"void void-empty",children:[t.jsx("b",{children:i?`No “${s(a.ptab)}” for now.`:`0 ${s(a.ptab).toLowerCase().replace(/s$/,"")} pour l’instant.`}),t.jsx("span",{children:c===0?i?`${g} ${g>1?"files are":"file is"} waiting for your screening`:`${g} dossier${g>1?"s":""} attende${g>1?"nt":""} votre évaluation`:i?`${g} ${g>1?"files":"file"} in “${s(c)}”`:`${g} dossier${g>1?"s":""} dans « ${s(c)} »`}),t.jsxs("button",{type:"button",className:"abtn",onClick:()=>r({type:"ptab",tab:c}),children:[(i?"Open ":"Ouvrir ")+s(c)," →"]})]})}function dd(){var bt,vt,Je,ut,yt;const e=V(),{st:a,dispatch:r,t:n,caps:o,counts:i,scoped:s,scopedAll:d,markRow:c,lang:g,sessTally:l,data:h,dossiers:p,source:b,focusExtra:m,byId:v,token:y}=e,f=$r(),j=u.useMemo(()=>{var $,ae,be,le;if(!y||b==="ops")return null;const S=((($=f==null?void 0:f.ed)==null?void 0:$.date)||(f==null?void 0:f.day)||"").slice(0,10),W=[(ae=f==null?void 0:f.ed)==null?void 0:ae.html,(be=f==null?void 0:f.ed)==null?void 0:be.acquirers_html].filter(Boolean).join("");return{id:"edito:brief",kind:"op",name:g==="en"?"Today's brief":"Brief du jour",headline:g==="en"?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",tagline:((le=f==null?void 0:f.ed)==null?void 0:le.date)||S,decryptHtml:W||void 0,date:S,engine:"edito",dealKind:"other",noCo:!0,cc:null,continent:null}},[y,b,g,(bt=f==null?void 0:f.ed)==null?void 0:bt.html,(vt=f==null?void 0:f.ed)==null?void 0:vt.acquirers_html,(Je=f==null?void 0:f.ed)==null?void 0:Je.date,f==null?void 0:f.day]),C=S=>o.lockRowsAfter!==null||b==="ops"||o.pipe?Number.MAX_SAFE_INTEGER:_r,[k,N]=u.useState(new Set);u.useEffect(()=>{N(new Set)},[a.ptab,a.continent]);const[z,E]=u.useState(null);u.useEffect(()=>{E(null)},[a.ptab,a.continent]);const[q,A]=u.useState(!a.mapFolded);u.useEffect(()=>{if(a.mapFolded){A(!1);return}const S=document.getElementById("atl2-stage");if(!S){A(!1);return}const W=new IntersectionObserver(([$])=>A(!!$&&$.isIntersecting),{root:null,rootMargin:"-120px 0px 0px 0px",threshold:0});return W.observe(S),()=>W.disconnect()},[a.mapFolded]);const R=a.mapFolded||!q,P=S=>N(W=>{const $=new Set(W);return $.has(S)?$.delete(S):$.add(S),$}),I=b==="ops"||o.pipe,[L,F]=u.useState("all"),[x,T]=u.useState(null),[B,G]=u.useState(!1),H=u.useRef(!0);u.useEffect(()=>{if(H.current){H.current=!1;return}F("all"),G(!1)},[a.ptab,a.continent]),u.useEffect(()=>{if(!B)return;const S=W=>{var $,ae;(ae=($=W.target)==null?void 0:$.closest)!=null&&ae.call($,".atl2 .doable")||G(!1)};return document.addEventListener("click",S),()=>document.removeEventListener("click",S)},[B]);const Q=u.useMemo(()=>{var W;const S=new Map;for(const $ of ps(((W=f==null?void 0:f.ed)==null?void 0:W.html)||""))S.has($.t)||S.set($.t,$.html);return S},[(ut=f==null?void 0:f.ed)==null?void 0:ut.html]),X=u.useCallback(S=>{if(S.decryptHtml)return S.decryptHtml;if(!Q.size)return;const W=(S.name||"").trim().toLowerCase();if(W.length<3)return;const $=Q.get(W);if($)return $;for(const[ae,be]of Q)if(ae.includes(W)||W.includes(ae))return be},[Q]),{diff:K}=Gl(),[ue,ee]=u.useState(!1),xe=a.filters.win==="1"&&!a.filters.day,[_,se]=u.useState(!1),me=u.useMemo(()=>new Set(((K==null?void 0:K.added)||[]).map(S=>S.trim().toLowerCase()).filter(Boolean)),[K]),Le=u.useMemo(()=>{if(!me.size)return 0;const S={...a,filters:{...a.filters,win:"all",day:"",signalOnly:!1,signalEngines:[]}};return p.filter(W=>!Ve(W)&&me.has((W.name||"").trim().toLowerCase())&&ja(W,S,o.pipe)).length},[p,me,a,o.pipe]);u.useEffect(()=>{const S=()=>{se(!1),r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})};return window.addEventListener("ppmap:tunnel",S),()=>window.removeEventListener("ppmap:tunnel",S)},[]),u.useEffect(()=>{se(!1),a.filters.signalOnly&&r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})},[a.ptab]);const te=u.useMemo(()=>{const W=_&&me.size>0||a.filters.signalOnly||L!=="all"?d:s;let $=vn(W,a.sort);return $=$.filter(ae=>!Ve(ae)),_&&me.size&&($=$.filter(ae=>me.has((ae.name||"").trim().toLowerCase()))),L==="explore"?$=$.filter(Nt):L==="eval"&&($=$.filter(ae=>!Nt(ae)&&!ae.noCo)),$},[s,d,a.sort,L,_,me]),he=u.useMemo(()=>o.pipe?p.filter(S=>S.kind==="target"&&!Ve(S)&&Fe(S)&&(a.continent==="monde"||S.continent===a.continent)):te.filter(S=>Fe(S)&&!_e(S)),[o.pipe,p,te,a.continent]).length,de=u.useMemo(()=>o.pipe?te:te.filter(S=>!_e(S)&&!S.noCo),[te,o.pipe]),Y=b==="ops"?te.filter(Nt).length:0,ne=_?"":o.pipe?n.plabels[a.ptab].toLowerCase():b==="ops"?n.edLabel:a.filters.status==="retenu"?n.keptByStan:a.filters.status==="ecarte"?n.droppedByStan:n.toSend,ie=a.filters,ge=[];if(ie.day)ge.push({k:"day",lib:n.fDay(ie.day.slice(8,10)+"/"+ie.day.slice(5,7)),off:()=>r({type:"filters",patch:{day:"",win:"all"}})});else if(ie.win&&ie.win!=="all"){const S=["1","7","30"].indexOf(ie.win);S>=0&&ge.push({k:"win",lib:n.dates[S],off:()=>r({type:"filters",patch:{win:"all"}})})}const Ee=S=>S.length<=2?S.join(", "):`${S.length} ${n.fSelected}`;for(const S of["sector","country","engine"]){const W=ie[S];W&&W.length&&ge.push({k:S,lib:Ee(W),off:()=>r({type:"clearFacet",facet:S})})}ie.search&&ge.push({k:"search",lib:"🔍 "+ie.search,off:()=>r({type:"filters",patch:{search:""}})}),_&&me.size&&ge.push({k:"since",lib:"✨ "+n.sinceChip,off:()=>se(!1)}),ie.signalOnly&&ge.push({k:"sig",lib:"🔴 "+n.sigDock(he||ie.signalEngines.length||0),off:()=>r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})});const re=(S,W,$="",ae=!1)=>t.jsxs("button",{type:"button","data-s":S,className:$,"aria-sort":a.sort.key===S?a.sort.dir===1?"ascending":"descending":"none",style:ae?{justifyContent:"flex-end"}:void 0,onClick:()=>r({type:"sort",key:S}),children:[W,t.jsx("span",{className:"ar",children:a.sort.key===S&&a.sort.dir===1?"▴":"▾"})]},S),ce=u.useMemo(()=>{if(o.pipe||a.groupBy==="none")return null;const S=new Map;te.forEach(ae=>{const be=ae.engine||"?";S.has(be)||S.set(be,[]),S.get(be).push(ae)});const W={ma:0,fundraising:1,partenariats:2,produits:3,regul:4,marche:5,nominations:6,recrutements:7,evenements:8,listes:9,tribunes:10,media:11,edito:12},$=Ya([...S.keys()],g);return[...S.entries()].sort((ae,be)=>{const le=W[ae[0]]??10+$.indexOf(ae[0]),ke=W[be[0]]??10+$.indexOf(be[0]);return le-ke})},[te,o.pipe,a.groupBy,g]),Ie=ce?ce.filter(([S])=>va.has(S)).length:0,qe=(()=>{var W;return((W=(ce?ce.flatMap(([,$])=>$):te)[0])==null?void 0:W.id)??null})(),Me=u.useRef(!1),Ce=u.useMemo(()=>p.find(Ve)||j,[p,j]);u.useEffect(()=>{const S=()=>{Me.current=!0,se(!1)};return window.addEventListener("ppmap:reveal",S),window.addEventListener("ppmap:focus",S),()=>{window.removeEventListener("ppmap:reveal",S),window.removeEventListener("ppmap:focus",S)}},[]),u.useEffect(()=>{const S=()=>{Ce&&r({type:"focus",id:Ce.id})};return window.addEventListener("ppmap:edito",S),()=>window.removeEventListener("ppmap:edito",S)},[Ce,r]),u.useEffect(()=>{if(!a.focusId)return;T(a.focusId);const S=window.setTimeout(()=>T(null),900);return()=>window.clearTimeout(S)},[a.focusId]),u.useEffect(()=>{if(I&&!(a.focusId&&(te.some(S=>S.id===a.focusId)||p.some(S=>S.id===a.focusId)||a.focusId===(Ce==null?void 0:Ce.id)))&&!m){if(Ce){r({type:"focus",id:Ce.id});return}qe&&r({type:"focus",id:qe})}},[I,a.focusId,te,qe,m,r,p,b,Ce]),u.useEffect(()=>{if(!(!I||!a.focusId)&&L!=="all"&&!(Ce&&a.focusId===Ce.id)&&!te.some(S=>S.id===a.focusId)&&p.some(S=>S.id===a.focusId)){if(Me.current){F("all");return}qe&&r({type:"focus",id:qe})}},[I,a.focusId,L,te,p,qe,r]),u.useEffect(()=>{if(!I||!a.focusId||!Me.current)return;const S=document.querySelector(".atl2.ops .row.sel, .atl2.ops .dcard.sel, .atl2.cibles .row.sel, .atl2.cibles .dcard.sel");if(!S){const be=te.findIndex(le=>le.id===a.focusId);if(be>=0){const le=ce?"":"pt"+a.ptab;if(le){const ke=a.shown[le]||C();be>=ke&&r({type:"more",group:le,by:be-ke+8})}}return}Me.current=!1;const W=vo(),$=S.getBoundingClientRect();$.top>=W-2&&$.bottom<=window.innerHeight-4||Xl(S)},[I,a.focusId,a.ptab,te,a.shown,ce,r]),u.useEffect(()=>{if(typeof window>"u")return;const S=document.querySelector(".atl2.ops .listhead, .atl2.cibles .listhead"),W=document.querySelector(".atl2.ops, .atl2.cibles");if(!S||!W)return;const $=()=>W.style.setProperty("--listhead-h",`${S.offsetHeight}px`);$();const ae=new ResizeObserver($);return ae.observe(S),()=>ae.disconnect()},[R,a.dens,a.mapFolded]);const ye=u.useMemo(()=>{if(!I||!a.focusId)return null;if(j&&a.focusId===j.id)return j;const S=te.find($=>$.id===a.focusId)||p.find($=>$.id===a.focusId)||null;if(!S)return null;const W=X(S);return W&&W!==S.decryptHtml?{...S,decryptHtml:W}:S},[I,a.focusId,te,p,X,j]),Ue=o.lockRowsAfter;let Re=0;const st=(S,W)=>{let $=a.shown[W]||C();return S.length-$<=4&&($=S.length),S.slice(0,$).map(le=>{const ke=Ue!==null&&Re>=Ue;Re++;const Xe=X(le),wt=Xe&&Xe!==le.decryptHtml?{...le,decryptHtml:Xe}:le,mt=!I&&a.dens!=="maxi"&&(a.dens==="deplie"||(z?z==="open":!!Xe)),_t=k.has(le.id)?!mt:mt,qt=I?Oe=>{Me.current=!0,r({type:"focus",id:Oe});const De=v.get(Oe);De&&(Nt(De)?na(De):De.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:De.name,url:De.url||"",website:De.website||"",domain:De.domain||""}})))}:void 0;return a.dens==="maxi"?t.jsx(id,{o:wt,locked:ke,selected:I&&a.focusId===le.id,onSelect:qt},le.id):t.jsx(td,{o:wt,locked:ke,open:_t,onToggle:()=>P(le.id),selected:I&&a.focusId===le.id,echo:x===le.id,fresh:me.has((le.name||"").trim().toLowerCase()),onSelect:qt},le.id)})},pt="list"+(a.dens==="maxi"?" maxi":a.dens==="ligne"||a.dens==="deplie"?" ligne":"")+(b==="ops"?" opsl":"")+(te.length?"":" list-empty"),gt=t.jsxs(t.Fragment,{children:[ce?ce.map(([S,W])=>t.jsxs("div",{className:"grp",children:[t.jsxs("div",{className:"grp-h",children:[t.jsx("span",{className:"ic",children:St(S)}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:S==="ma"?n.grpMa:S==="fundraising"?n.grpLev:va.has(S)&&Ie<=1?n.grpNews:S==="nominations"?n.grpNom:S==="media"?n.grpNewsOther:S==="recrutements"?n.grpHire:va.has(S)?n.grpNews+" · "+We(S,g):We(S,g)}),t.jsx("div",{className:"s",children:n.grpCount(W.filter($=>!_e($)).length,W.length)})]})]}),st(W,S)]},S)):st(te,"pt"+a.ptab),h.loading&&!p.length&&t.jsx(sd,{}),!te.length&&!(h.loading&&!p.length)&&(o.pipe?t.jsx(ld,{counts:i}):t.jsx("div",{className:"void",children:n.emptyScope}))]}),tt=t.jsxs("div",{className:"listhead"+(R?" mapoff":""),children:[R&&t.jsx("div",{className:"lh-tools",children:t.jsx(fo,{compact:!0})}),o.showFunnel&&ue&&xe&&t.jsxs("div",{className:"lh-stats",children:[t.jsx(Ts,{}),t.jsx(Ql,{})]}),o.showFunnel&&t.jsxs("div",{className:"lh-funnel",children:[t.jsx(Yl,{}),t.jsx(Kl,{})]}),t.jsxs("div",{className:"lh-top",children:[o.showFunnel&&t.jsxs("div",{className:"lh-dock",children:[t.jsxs("button",{type:"button",className:"dockbtn"+(xe?" on":""),"aria-pressed":xe,title:n.morningDockTitle,onClick:()=>{if(xe){r({type:"filters",patch:{win:"all",day:""}}),ee(!1);return}se(!1),r({type:"filters",patch:{win:"1",day:"",signalOnly:!1,signalEngines:[]}}),r({type:"ptab",tab:7}),ee(!0)},children:["📊 ",n.morningDock(typeof((yt=h.stats)==null?void 0:yt.screened_today)=="number"?h.stats.screened_today:0)]}),K&&!K.firstVisit&&(K.added.length>0||K.gone.length>0)&&t.jsxs("button",{type:"button",className:"dockbtn since"+(_?" on":""),"aria-pressed":_,title:n.sinceSub,onClick:()=>{const S=!_;se(S),ee(!1),S&&r({type:"filters",patch:{win:"all",day:"",signalOnly:!1,signalEngines:[]}})},children:["✨ ",n.sinceDock(Le),K!=null&&K.lastDate?` · ${n.sinceSince(K.lastDate)}`:""]}),he>0&&t.jsxs("button",{type:"button",className:"dockbtn sig"+(a.filters.signalOnly?" on":""),"aria-pressed":a.filters.signalOnly,onClick:()=>{se(!1),ee(!1),r({type:"filters",patch:{signalOnly:!a.filters.signalOnly,signalEngines:[],win:"all",day:""}})},children:["🔴 ",n.sigDock(he)]})]}),!_&&t.jsxs("span",{className:"main",children:[t.jsx("b",{children:te.length})," ",ne]}),t.jsx("span",{className:"dot",children:"·"}),R&&t.jsx(ho,{variant:"compact",mapToggle:!!a.mapFolded}),t.jsxs("span",{className:"ctx",children:[R?o.pipe&&e.fund?e.fund:null:t.jsxs(t.Fragment,{children:[e.contName,o.pipe&&e.fund?" · "+e.fund:""]}),ge.map(S=>t.jsxs("button",{type:"button",className:"fpuce",title:n.filterOff,onClick:W=>{W.stopPropagation(),S.off()},children:[S.lib,t.jsx("i",{children:"×"})]},S.k)),b==="ops"&&te.length>0&&!R&&t.jsxs("span",{className:"edsplit",children:[" — ","⚡ ",te.length-Y," ",n.zoomPulseEval,Y>0?t.jsxs(t.Fragment,{children:[" · 🔎 ",Y," ",n.zoomPulseExplore]}):null]})]}),a.filters.acquirer.trim()&&t.jsxs("span",{className:"acqchip",children:["🏢 ",n.acqOn(a.filters.acquirer),t.jsx("button",{type:"button",title:n.acqClear,onClick:()=>r({type:"acquirer",value:""}),children:"✕"})]}),o.showGroupBar&&t.jsxs("span",{className:"groupbar",children:[t.jsx("span",{className:"gl",children:n.groupBy}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>r({type:"groupBy",groupBy:"engine"}),children:n.groupEngine}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>r({type:"groupBy",groupBy:"none"}),children:n.groupNone})]}),a.pileMode&&t.jsx("button",{type:"button",className:"exitpile",onClick:()=>r({type:"pile",on:!1}),children:n.exitPile}),t.jsxs("span",{className:"lh-acts",children:[(o.showFunnel||b==="ops")&&t.jsx("span",{className:"dens",children:[["liste",n.densList],["ligne",n.densLigne],["maxi",n.densMaxi]].map(([S,W])=>t.jsxs("button",{type:"button","data-d":S,"aria-pressed":a.dens===S||S==="ligne"&&a.dens==="deplie",onClick:()=>r({type:"dens",dens:S}),children:[t.jsx("i",{children:t.jsx("em",{})}),t.jsx("b",{children:W})]},S))}),!I&&o.showFunnel&&a.dens!=="maxi"&&t.jsxs("span",{className:"foldall",children:[t.jsx("button",{type:"button","aria-pressed":z==="open",onClick:()=>{E("open"),N(new Set)},children:n.unfoldAll}),t.jsx("button",{type:"button","aria-pressed":z==="closed",onClick:()=>{E("closed"),N(new Set)},children:n.foldAllLbl})]}),(o.showFunnel||b==="ops")&&(()=>{var le;const S=d.filter(ke=>!Ve(ke)),W=S.filter(ke=>!Nt(ke)&&!ke.noCo).length,$=S.filter(Nt).length,ae=[["all",n.doAll],["eval",`${n.doEval}${W?` ${W}`:""}`],["explore",`${n.doExplore}${$?` ${$}`:""}`]],be=((le=ae.find(([ke])=>ke===L))==null?void 0:le[1])||n.doAll;return t.jsxs("span",{className:"doable",children:[t.jsxs("button",{type:"button",className:"dobtn","aria-expanded":B,onClick:()=>G(ke=>!ke),children:[be,t.jsx("i",{children:"▾"})]}),B&&t.jsx("div",{className:"dolist",children:ae.map(([ke,Xe])=>t.jsx("button",{type:"button","aria-pressed":L===ke,onClick:()=>{F(ke),G(!1)},children:Xe},ke))})]})})(),a.dens==="maxi"&&t.jsxs("label",{className:"sortsel",children:[t.jsx("span",{children:n.sortBy}),t.jsx("select",{value:a.sort.key,onChange:S=>r({type:"sort",key:S.target.value}),children:[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage],...o.pipe?[["crible",n.sortCrible],["memo",n.sortMemo],["score",n.sortScore]]:[]].map(([S,W])=>t.jsx("option",{value:S,children:W},S))})]}),o.showChain&&de.length>0&&t.jsxs("span",{className:"chainwrap",children:[t.jsxs("button",{type:"button",className:"chain",title:n.chainHint,onClick:()=>r({type:"chainStart",queue:de.map(S=>S.id)}),children:[t.jsx("span",{className:"b",children:"▶"})," ",o.pipe?n.browse(de.length):n.chainAll(de.length)]}),t.jsx("em",{className:"chainhint",children:n.chainHint})]})]})]})]});return t.jsxs(t.Fragment,{children:[!I&&tt,a.dens!=="maxi"&&!I&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),re("country",n.colCountry),re("name",n.colCompany),re("amount",n.colAmount,"h-amt",!0),re("stage",n.colStage,"h-stade"),re("signal",n.colSignal,"h-sig"),o.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[re("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),re("memo",n.colMemo)]}),o.pipe&&re("score",n.colScore,"h-sc",!0),t.jsx("span",{}),o.showThumbs&&t.jsx("span",{className:"h-thu",children:n.colThumbs})]}),I?t.jsxs("div",{className:"desk",children:[t.jsxs("div",{className:"desk-list",children:[tt,a.dens==="liste"&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),re("country",n.colCountry),re("name",n.colCompany),o.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[re("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),re("memo",n.colMemo)]}),t.jsx("span",{})]}),t.jsx("div",{className:pt,children:gt})]}),t.jsxs("aside",{className:"readpane"+((ye?Ve(ye):!m&&Ce)?" is-edito":""),"aria-label":g==="fr"?"Dossier":"File",children:[Ce&&t.jsx("button",{type:"button",className:"edito-go pane-edito","aria-pressed":a.focusId===Ce.id,onClick:()=>r({type:"focus",id:Ce.id}),children:n.doEdito}),j&&a.focusId===j.id?t.jsx("div",{className:"zoom",children:t.jsx(xs,{})}):ye&&o.pipe?t.jsx(rd,{o:ye}):t.jsx(yo,{o:ye,extra:ye?null:m})]})]}):t.jsx("div",{className:pt,children:gt}),(()=>{const S=ce||[["pt"+a.ptab,te]];let W=0,$=0;for(const[be,le]of S){$+=le.length;let ke=a.shown[be]||C();le.length-ke<=4&&(ke=le.length),W+=Math.min(le.length,ke)}const ae=$-W;return ae<=0?null:t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>S.forEach(([be,le])=>r({type:"more",group:be,by:le.length,base:C()})),children:[t.jsx("span",{className:"more-label",children:n.more(ae,ae)}),t.jsx("span",{className:"more-meta",children:n.moreMeta(W,$)})]})})(),o.showThumbs&&t.jsxs("p",{className:"learn",children:[n.learnLine,t.jsx("button",{type:"button",onClick:()=>r({type:"modal",modal:"crit"}),children:n.learnLink})]}),(l.kept>0||l.dropped>0)&&t.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:n.session(l.kept,l.dropped)}}),I&&b==="ops"&&a.dens!=="maxi"&&t.jsx(Jl,{on:!!ce,rev:(ce||[]).map(([S,W])=>S+W.length).join("|")})]})}function zr(e){let a=e==null?"":String(e);return/^[=+\-@\t]/.test(a)&&(a=`'${a}`),/[";\n\r]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}function cd(e,a){const r=gi(e);return a[{retenu:1,ana:2,pending:3,valide:4,ecarte:5}[r]??1]||""}function pd(e,a){const n=[a.head.split("|").map(zr).join(";")];for(const o of e){const i=a.stageOf(o);n.push([o.name||"",cd(o,a.plabels),ra(o)||o.verdict||"",typeof o.score=="number"?o.score:"",o.countryLabel||o.cc||"",o.sector||"",i?a.stageLabel(i.stage):"",o.contactName||"",o.contactEmail||"",o.memoUrl||"",(o.date||"").slice(0,10),(o.reasoning||"").replace(/\s+/g," ").trim().slice(0,280)].map(zr).join(";"))}return`\uFEFF${n.join(`\r
`)}`}function ud(e){const a=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=`cibles_vue_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(n),n.click(),window.setTimeout(()=>{URL.revokeObjectURL(r);try{document.body.removeChild(n)}catch{}},400)}const md=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function rt({k:e,v:a}){return a==null||a===""?null:t.jsxs("div",{className:"dsl",children:[t.jsx("span",{children:e}),t.jsx("b",{children:String(a)})]})}function fd({o:e,qa:a}){const{t:r,lang:n,fund:o}=V(),i=(e.cribleStatus||"").trim().toUpperCase()||(ra(e)==="NO MATCH"?"NO MATCH":"MATCH"),s=xt(e),d=(a==null?void 0:a.blocs)||{},c=[[r.qaVP,d.value_prop],[r.qaProduct,d.produit],[r.qaModel,d.modele],[r.qaSummary,d.synthese]];return t.jsxs("article",{className:"dspage",children:[t.jsxs("header",{className:"dsh",children:[t.jsxs("div",{children:[t.jsx("b",{children:e.name}),e.tagline&&t.jsx("p",{children:e.tagline})]}),t.jsxs("span",{className:"dsv"+(i==="NO MATCH"?" out":""),children:[i==="NO MATCH"?r.vOut:r.vKept,s&&t.jsx("em",{children:s})]})]}),e.reasoning&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsWhy}),t.jsx("p",{className:"dstxt",children:e.reasoning})]}),t.jsxs("section",{className:"dsgrid",children:[t.jsx(rt,{k:r.cdSector,v:e.sector}),t.jsx(rt,{k:r.cdStage,v:e.stage}),t.jsx(rt,{k:r.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(rt,{k:r.cdSite,v:e.domain||e.website}),t.jsx(rt,{k:r.cdName,v:e.contactName}),t.jsx(rt,{k:r.cdEmail,v:e.contactEmail}),t.jsx(rt,{k:r.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(rt,{k:r.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(rt,{k:r.cdAngle,v:e.angle}),t.jsx(rt,{k:r.cdDetected,v:md(e.date,n)})]}),c.some(([,g])=>g)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsAnalysis}),c.filter(([,g])=>g).map(([g,l])=>t.jsxs("div",{className:"dsb",children:[t.jsx("span",{children:g}),t.jsx("p",{children:l})]},g))]}),(e.ceoStatus||e.ceoNote)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsDecision}),e.ceoStatus&&t.jsx("p",{className:"dstxt",children:t.jsx("b",{children:e.ceoStatus})}),e.ceoNote&&t.jsxs("p",{className:"dstxt",children:["« ",e.ceoNote," »"]})]}),t.jsx("footer",{className:"dsf",children:r.dsFoot(o)})]})}function hd(){const{t:e,lang:a,token:r,scoped:n,fund:o,data:i,dispatch:s}=V(),[d,c]=u.useState({}),g=25,l=u.useMemo(()=>n.slice(0,g),[n]);u.useEffect(()=>{l.length&&bi(r,l.map(b=>b.name)).then(c)},[r,l]);const h=i.stats,p=b=>b.toLocaleString(a==="en"?"en-US":"fr-FR");return t.jsxs("div",{className:"dossier",children:[t.jsxs("div",{className:"dsbar",children:[t.jsx("b",{children:e.dsTitle(l.length)}),n.length>g&&t.jsx("span",{className:"mnote dim",children:e.dsCap(g,n.length)}),t.jsx("span",{className:"dssp"}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{s({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)},children:e.printBtn})]}),t.jsxs("div",{className:"dscover",children:[t.jsx("b",{children:o}),h&&typeof h.screened=="number"&&t.jsxs("p",{children:[p(h.screened)," ",e.funScreened(""),typeof h.kept=="number"&&t.jsxs(t.Fragment,{children:[" · ",p(h.kept)," ",e.covKept]}),typeof i.marketEstimate=="number"&&i.marketEstimate>0&&t.jsxs(t.Fragment,{children:[" · ",e.covOf(p(i.marketEstimate)),", ",Math.round(h.screened/i.marketEstimate*100)," %"]})]})]}),l.map(b=>t.jsx(fd,{o:b,qa:d[b.name]},b.id)),!l.length&&t.jsx("p",{className:"mnote",children:e.dsEmpty})]})}const xd=50;function zn({label:e,onPreview:a,onTest:r,readOnly:n}){const{t:o}=V(),[i,s]=u.useState(null),[d,c]=u.useState(!1),[g,l]=u.useState(""),[h,p]=u.useState(0),[b,m]=u.useState(""),[v,y]=u.useState(!1),[f,j]=u.useState(0),C=u.useRef(null),k=u.useRef(null),N=()=>{j(0),k.current&&window.clearInterval(k.current),k.current=window.setInterval(()=>j(A=>A+1),1e3)},z=()=>{k.current&&(window.clearInterval(k.current),k.current=null)};u.useEffect(()=>()=>{C.current&&window.clearInterval(C.current),k.current&&window.clearInterval(k.current)},[]);const E=async A=>{c(!0),l(""),N();const R=await a();if(c(!1),z(),R.ok){s(R);return}if(R.busy){l(o.alertPreviewBusy);return}if(!A){l(o.alertPreviewFail);return}p(xd),z(),C.current=window.setInterval(()=>{p(P=>P>1?P-1:(C.current&&window.clearInterval(C.current),E(!1),0))},1e3)},q=async()=>{if(n||v||d)return;y(!0),m(""),N();const A=await r();y(!1),z(),m(A.ok?o.alertTestOk(A.sentTo||""):A.error||o.actErr)};return t.jsxs("div",{className:"mailp",children:[t.jsxs("div",{className:"mailp-row",children:[t.jsx("button",{type:"button",className:"abtn",disabled:d||v||h>0,onClick:()=>{E(!0)},children:d?o.alertBtnPrevBusy:e}),t.jsx("button",{type:"button",className:"abtn",disabled:n||v||d,onClick:()=>{q()},children:v?o.alertBtnTestBusy:o.alertTest})]}),d&&t.jsxs("p",{className:"mnote qwait",children:[t.jsx("i",{className:"qwd"}),o.alertPreviewWait(f)]}),v&&t.jsxs("p",{className:"mnote qwait",children:[t.jsx("i",{className:"qwd"}),o.alertTestWait(f)]}),h>0&&t.jsx("p",{className:"mnote",children:o.alertPreviewRetry(h)}),g&&t.jsx("p",{className:"mnote warn",children:g}),b&&t.jsx("p",{className:"mnote",children:b}),!b&&t.jsx("p",{className:"mnote dim",children:o.alertTestHint}),(i==null?void 0:i.ok)&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mnote",children:[t.jsx("b",{children:o.alertSubject})," ",i.subject]}),i.pending===0&&t.jsx("p",{className:"mnote warn",children:o.alertPreviewEmpty}),t.jsx("iframe",{className:"mailp-frame",sandbox:"",srcDoc:i.html,title:e})]})]})}const Ft="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function $e({title:e,icon:a,children:r,wide:n}){const{dispatch:o}=V();return Pt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:i=>{i.target===i.currentTarget&&o({type:"modal",modal:null})},children:t.jsxs("div",{className:"mcard",style:n?{width:"min(760px,100%)"}:void 0,children:[t.jsxs("div",{className:"mh",children:[a&&t.jsx("span",{className:"no g",children:a}),t.jsx("h2",{children:e}),t.jsx("button",{type:"button",className:"x",onClick:()=>o({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"mb",children:r})]})})}),document.body)}function gd(){const{st:e}=V();switch(e.modal){case"chain":return t.jsx(vd,{});case"space":return t.jsx(yd,{});case"alert":return t.jsx(wd,{});case"queue":return t.jsx(Sd,{});case"export":return t.jsx(Cd,{});case"plug":return t.jsx(Td,{});case"recharge":return t.jsx(Ld,{});case"cover":return t.jsx(Fd,{});case"dossier":return t.jsx(Rd,{});case"crit":return t.jsx(Md,{});case"tuto":return t.jsx(Od,{});case"rdv":return t.jsx(bd,{});case"memoalert":return t.jsx(zd,{});default:return null}}function bd(){const{dispatch:e,fund:a,t:r}=V(),n=a||r.rdvCoFallback;return Pt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:()=>e({type:"modal",modal:null}),children:t.jsxs("div",{className:"mcard rdvcard",onClick:o=>o.stopPropagation(),children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"no g",children:"📅"}),t.jsx("h2",{children:r.rdvHeading}),t.jsx("button",{type:"button",className:"x",onClick:()=>e({type:"modal",modal:null}),children:"×"})]}),t.jsxs("div",{className:"mb",children:[t.jsxs("p",{className:"mnote",children:[r.rdvSubBefore,t.jsx("a",{href:Vr,children:wn}),r.rdvSubMid,t.jsx("a",{href:`mailto:${Na}`,children:Na})]}),t.jsx("div",{className:"rdv-unlocks",children:r.rdvUnlocks(n).map(([o,i],s)=>t.jsxs("div",{className:"rdv-u",children:[t.jsx("em",{children:r.rdvUnlockLabel(s+1)}),t.jsx("b",{children:o}),t.jsx("span",{children:i})]},o))}),t.jsx("div",{className:"rdv-emb",children:t.jsx($i,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0})})]})]})})}),document.body)}function vd(){const{st:e,dispatch:a,byId:r,t:n,lang:o,mode:i,askEvaluate:s,evalBusy:d,caps:c,memoQueued:g,doAnalyse:l}=V(),h=i==="client",p=e.chain.queue.map(y=>r.get(y)).filter(y=>!!y),b=e.chain.idx,m=p[b],v=b>=p.length;return Pt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",children:t.jsxs("div",{className:"fcard",children:[t.jsxs("div",{className:"fh",children:[t.jsx("span",{className:"c",children:v?n.finished:`${b+1} / ${p.length}`}),t.jsx("span",{className:"p",children:t.jsx("i",{style:{width:(v?100:b/Math.max(1,p.length)*100)+"%"}})}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"fb",children:v||!m?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🏁"}),t.jsx("div",{className:"t",children:n.chainDone}),t.jsx("div",{className:"s",children:n.chainDoneSub(p.length)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:m.name}),t.jsx("div",{className:"sub",children:[It(m.cc,o)||m.countryLabel,m.sector,m.stage,n.daysAgo(ct(m.date))].filter(Boolean).map(y=>String(y).toUpperCase()).join(" · ")}),t.jsxs("div",{className:"tags",children:[t.jsx("span",{className:"hi",children:We(m.engine,o).toUpperCase()}),typeof m.amountEur=="number"&&m.amountEur>0&&t.jsx("span",{children:Bt(m.amountEur,o)})]}),Fe(m)&&t.jsxs("div",{style:{marginBottom:12},children:[t.jsx(ht,{o:m,lg:!0})," ",t.jsx(Fa,{o:m,src:!0})]}),(m.tagline||m.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:m.tagline||m.headline})]}),m.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.memo}),t.jsx("p",{className:"memo",children:m.reasoning})]}),h&&_e(m)&&t.jsxs("div",{className:"vbox",style:{"--c":Et(m)==="retenu"?"var(--brand)":Et(m)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[t.jsx("span",{className:"vt",children:Et(m)==="retenu"?"✓ "+n.kept:Et(m)==="pending"?"📞 "+n.pending:"✗ "+n.dropped}),t.jsx("span",{className:"vd",children:m.reasoning||""})]})]})}),t.jsxs("div",{className:"ff",children:[!v&&m&&c.pipe&&ze(m)===1&&!g.has(m.id)?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{l(m),a({type:"chainNext"})},children:[t.jsx("span",{className:"fill"}),n.chainMemoGo]}):!v&&m&&!(h&&_e(m))&&(m.noCo&&m.url?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{var y;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:m.url}}))}catch{}a({type:"modal",modal:null}),(y=document.querySelector(".atl2 .demand"))==null||y.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rowExtract]}):t.jsxs("button",{type:"button",className:"evalbtn"+(d?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:d,onClick:()=>{s(m)},children:[t.jsx("span",{className:"fill"}),n.launchEval]})),t.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(v?{type:"modal",modal:null}:{type:"chainNext"}),children:v?n.closeBtn:n.skip})]})]})})}),document.body)}function yd(){const{st:e,dispatch:a,dossiers:r,t:n,mode:o}=V(),i=o==="client",s=u.useMemo(()=>i?r.filter(h=>_e(h)):[],[r,i]),d=u.useMemo(()=>vn(s.filter(h=>Et(h)==="retenu"),{key:"signal",dir:-1}),[s]),c=u.useMemo(()=>s.filter(h=>Et(h)==="ecarte"),[s]),g=e.spaceTab==="retenu"?d:c,l=e.spaceTab==="retenu"?"var(--brand)":"var(--red)";return t.jsxs($e,{title:n.spaceTitle,children:[t.jsxs("div",{className:"sp-tabs",children:[t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":e.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",n.statusKeep.replace("✅ ","")," ",t.jsx("b",{children:d.length})]}),t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":e.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",n.statusDrop.replace("❌ ","")," ",t.jsx("b",{children:c.length})]})]}),g.length===0&&t.jsx("div",{className:"sp-empty",children:n.spEmpty}),g.slice(0,40).map(h=>t.jsxs("div",{className:"sp-row",children:[t.jsx("span",{className:"sc",style:{"--c":l},children:typeof h.score=="number"&&h.score>0?h.score:"—"}),t.jsxs("span",{children:[t.jsx("div",{className:"nm",children:h.name}),t.jsx("div",{className:"rr",children:h.reasoning||h.tagline||""})]})]},h.id)),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:n.spNote}})]})}function wd(){const{mode:e}=V();return e==="client"||e==="apercu"?t.jsx(kd,{}):t.jsx(Ed,{})}function kd(){const{t:e,token:a,flash:r,flashErr:n,mode:o}=V(),[i,s]=u.useState("d"),d=o!=="client";return t.jsxs($e,{title:e.alertTitle,icon:"🔔",children:[t.jsxs("div",{className:"ntabs",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":i==="d",className:i==="d"?"on":"",onClick:()=>s("d"),children:e.alertTabDaily}),t.jsx("button",{type:"button",role:"tab","aria-selected":i==="w",className:i==="w"?"on":"",onClick:()=>s("w"),children:e.alertTabWeekly}),t.jsx("button",{type:"button",role:"tab","aria-selected":i==="m",className:i==="m"?"on":"",onClick:()=>s("m"),children:e.alertTabMarket})]}),i==="d"&&t.jsx(jd,{t:e,token:a,readOnly:d,flash:r,flashErr:n}),i==="w"&&t.jsx(Nd,{t:e,token:a,readOnly:d,flash:r,flashErr:n}),i==="m"&&t.jsx(wo,{})]})}function jd({t:e,token:a,readOnly:r,flash:n,flashErr:o}){const[i,s]=u.useState(null),[d,c]=u.useState(!1),[g,l]=u.useState(0);u.useEffect(()=>{let q=!0;return c(!1),_n(a).then(A=>{q&&(A?s(A):c(!0))}),()=>{q=!1}},[a,g]);const h=u.useRef({}),[p,b]=u.useState({}),[m,v]=u.useState(!1),[y,f]=u.useState(!1),j=u.useRef(null);u.useEffect(()=>()=>{j.current&&window.clearTimeout(j.current)},[]);const C=q=>{const A=h.current;Object.keys(A).length&&(v(!0),_n(a,A).then(R=>{if(!R){v(!1),o(e.actErr);return}if(R.throttled&&q<3){j.current=window.setTimeout(()=>C(q+1),5400);return}if(h.current={},b({}),s(R),v(!1),R.throttled){o(e.alertThrottled);return}f(!0),window.setTimeout(()=>f(!1),2e3),n(e.alertSaved)}))},k=q=>{r||(h.current={...h.current,...q},b(A=>({...A,...q})),j.current&&window.clearTimeout(j.current),j.current=window.setTimeout(()=>C(1),700))};if(d)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>l(q=>q+1),children:e.retry})]});if(!i)return t.jsx("div",{className:"sp-empty",children:"…"});const N={...i,...p},z=q=>!N.sections||N.sections.includes(q),E=q=>{const A=N.sections||e.alertSec.map(([R])=>R);k({sections:z(q)?A.filter(R=>R!==q):[...A,q]})};return t.jsxs(t.Fragment,{children:[r&&t.jsx("p",{className:"mnote warn",children:e.alertReadOnly}),t.jsxs("div",{className:"qrow",children:[t.jsxs("span",{children:[t.jsx("b",{children:e.alertDaily}),t.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:e.alertDailyHint})]}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":N.enabled===!0,disabled:r,style:N.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>k({enabled:!N.enabled}),children:N.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertHour}),t.jsxs("span",{className:"qset",children:[t.jsx("button",{type:"button",onClick:()=>k({hour:Math.max(6,(N.hour??7)-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[N.hour??7," h"]}),t.jsx("button",{type:"button",onClick:()=>k({hour:Math.min(21,(N.hour??7)+1)}),disabled:r,children:"+"})]})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertDays}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("button",{type:"button",className:"abtn",disabled:r,style:N.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>k({days:"weekdays"}),children:e.alertWeekdays}),t.jsx("button",{type:"button",className:"abtn",disabled:r,style:N.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>k({days:"daily"}),children:e.alertEveryday})]})]}),t.jsxs("div",{className:"qsec ok",children:[e.alertSections,m&&t.jsx("span",{className:"secsave",children:e.alertSaving}),!m&&y&&t.jsx("span",{className:"secsave done",children:e.alertSavedShort})]}),t.jsx("div",{className:"secl",children:e.alertSec.map(([q,A])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:z(q),disabled:r,onChange:()=>E(q)}),t.jsxs("span",{children:[A,q==="market"&&t.jsxs("i",{children:[" ",e.alertSecSlow]})]})]},q))}),t.jsx("p",{className:"mnote dim",children:e.alertSecNote}),t.jsx(zn,{label:e.alertPreview,readOnly:r,onPreview:()=>zi(a),onTest:()=>Ci(a)}),N.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),N.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",N.email_lead,N.last_sent?` · ${e.updatedAt(N.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function Nd({t:e,token:a,readOnly:r,flash:n,flashErr:o}){const[i,s]=u.useState(null),[d,c]=u.useState(!1),[g,l]=u.useState(0);u.useEffect(()=>{let m=!0;return c(!1),$n(a).then(v=>{m&&(v?s(v):c(!0))}),()=>{m=!1}},[a,g]);const h=m=>{r||$n(a,m).then(v=>{if(!v){o(e.actErr);return}s(v),n(e.alertSaved)})};if(d)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>l(m=>m+1),children:e.retry})]});if(!i)return t.jsx("div",{className:"sp-empty",children:"…"});const p=i.dow??0,b=i.hour??16;return t.jsxs(t.Fragment,{children:[r&&t.jsx("p",{className:"mnote warn",children:e.alertReadOnly}),t.jsx("p",{className:"lead2",children:e.alertWeeklySub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.alertWeeklyOn})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":i.enabled===!0,disabled:r,style:i.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>h({enabled:!i.enabled}),children:i.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertWeeklyWhen}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("select",{value:p,disabled:r,onChange:m=>h({dow:Number(m.target.value)}),children:e.alertDow.map((m,v)=>t.jsx("option",{value:v,children:m},m))}),t.jsx("button",{type:"button",onClick:()=>h({hour:Math.max(6,b-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[b," h"]}),t.jsx("button",{type:"button",onClick:()=>h({hour:Math.min(21,b+1)}),disabled:r,children:"+"})]})]}),t.jsx(zn,{label:e.alertPreviewWeekly,readOnly:r,onPreview:()=>Ti(a),onTest:()=>Ai(a)}),i.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),i.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",i.email_lead,i.last_sent?` · ${e.updatedAt(i.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function wo(){const{st:e,t:a,lang:r,scoped:n,contName:o,email:i}=V(),[s,d]=u.useState(i||""),[c,g]=u.useState(!1),[l,h]=u.useState(!1);u.useEffect(()=>{i&&d(i)},[i]);const p=e.filters,b=u.useMemo(()=>n.filter(f=>Fe(f)).length,[n]),m=p.win==="1"?0:p.win==="7"?1:p.win==="30"?2:3,v=async()=>{if(!(!/.+@.+\..+/.test(s)||l)){h(!0);try{await fetch(`${hn}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.trim(),sectors:p.sector,countries:p.country,source:i?"atelier2-client":"atelier2",website:""})}),g(!0)}finally{h(!1)}}},y=[[a.amRows.continent,o],[a.amRows.since,a.amSince[m]],[a.amRows.signal,p.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,p.engine.length?p.engine.map(f=>We(f,r)).join(", "):a.amAllEngines],[a.amRows.sectors,p.sector.length?p.sector.join(", "):a.amAllSectors],[a.amRows.countries,p.country.length?p.country.map(f=>It(f,r)||f).join(", "):a.amAllCountries],[a.amRows.stages,p.stage.length?p.stage.join(", "):a.amAllStages]];return c?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🔔"}),t.jsx("div",{className:"t",children:a.amOk}),t.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(s)}})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"crit",children:y.map(([f,j])=>t.jsxs("div",{className:"r",children:[t.jsx("span",{className:"k",children:f}),t.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:j}})]},f))}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:s,readOnly:!!i,onChange:f=>d(f.target.value),onKeyDown:f=>{f.key==="Enter"&&v()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(l?" loading":""),style:{padding:"12px 18px"},onClick:()=>void v(),children:[t.jsx("span",{className:"fill"}),a.amActivate]})]}),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(n.length,b)}}),t.jsx("p",{className:"mnote",children:a.amHonest})]})}function Ed(){const{t:e}=V();return t.jsx($e,{title:e.alertTitle,icon:"🔔",children:t.jsx(wo,{})})}function Sd(){var P,I;const{t:e,token:a,fund:r,mode:n,dossiers:o,doAnalyse:i,memoQueued:s,caps:d,dispatch:c,liveMemos:g}=V(),[l,h]=u.useState(()=>Da(r)),[p,b]=u.useState(()=>!Da(r)),[m,v]=u.useState([]),[y,f]=u.useState(0),j=n==="client",C=u.useMemo(()=>{const L=new Map;return o.forEach(F=>{const x=(F.name||"").trim().toLowerCase();x&&!L.has(x)&&L.set(x,F)}),L},[o]);u.useEffect(()=>{let L=!0;return(!Da(r)||y>0)&&b(!0),(async()=>{const[F,x]=await Promise.all([gn(r,y>0),Fr(a)]);L&&(F&&h(F),b(!1),v(x))})(),()=>{L=!1}},[a,r,y]);const k=p&&!l,N=(l==null?void 0:l.per_day)??0,z=((P=l==null?void 0:l.analyzed_today)==null?void 0:P.length)??0,E=l==null?void 0:l.offre,q=(l==null?void 0:l.pool_meta)||[],A=u.useMemo(()=>{const L=new Map;for(const F of(l==null?void 0:l.scheduled)||[])for(const x of F.names||[])L.has(x)||L.set(x,{label:F.day_label,date:F.date});return L},[l==null?void 0:l.scheduled]),R=(l==null?void 0:l.in_progress)||[];return t.jsxs($e,{title:e.queueTitle,wide:!0,children:[E&&t.jsxs("div",{className:"qoffre"+(E.en_retard?" late":""),children:[t.jsx("span",{className:"ol",children:e.qOffer}),t.jsx("b",{children:E.libelle}),t.jsxs("span",{className:"od",children:[e.qDelay," ",t.jsx("b",{children:E.delai})]}),t.jsx("span",{className:"osp"}),E.rythme>0?t.jsx("span",{className:"or",children:e.qRate(E.rythme)}):E.manuel_par_jour?t.jsx("span",{className:"or",children:e.qManual(E.manuel_par_jour)}):t.jsx("span",{className:"or dim",children:e.qPaused})]}),t.jsxs("div",{className:"qbox",children:[t.jsx("div",{className:"qhead",children:k?t.jsxs("span",{className:"qwait",children:[t.jsx("i",{className:"qwd"}),e.qFileWait]}):t.jsx("b",{dangerouslySetInnerHTML:{__html:e.queueDone(z,z+(((I=l==null?void 0:l.pool_order)==null?void 0:I.length)??0))}})}),E&&t.jsxs("div",{className:"qeta",children:[E.file===0?e.qEtaDone:E.rythme<=0?e.qEtaPaused:e.qEta(E.file,E.rythme,E.jours_restants),E.en_retard&&t.jsxs("em",{children:[" ",e.qLate(E.delai,E.plafond)]})]}),!k&&t.jsxs("div",{className:"qrate",children:[e.covRate," — ",t.jsx("b",{children:e.covRateNow(N)}),(E==null?void 0:E.reglage_manuel)&&t.jsxs("span",{className:"dim",children:[" · ",e.qManualSet]})]})]}),(R.length>0||g.items.some(L=>L.status==="boot"||L.status==="running"))&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec run",children:["⌛ ",e.qRunning]}),t.jsxs("div",{className:"qrows",children:[g.items.filter(L=>L.status==="boot"||L.status==="running"||L.status==="error").map(L=>t.jsxs("div",{className:"qr2 qfl",children:[t.jsx("b",{children:L.name}),t.jsx("span",{className:"qd",children:L.memoType||""}),t.jsx(Xt,{item:L,serverOff:g.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd})]},"live-"+L.name)),R.filter(L=>!g.liveOf(L.name)).map(L=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:L.name}),t.jsxs("span",{className:"qd",children:[L.memo_type||"",L.age_min?` · ${Math.round(L.age_min)} min`:""]}),t.jsx("span",{className:"qt",children:L.state||""})]},"ip-"+L.name))]})]}),m.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec ok",children:["⏳ ",e.queueToday]}),t.jsx("div",{className:"qrows",children:m.map(L=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:L.company}),t.jsxs("span",{className:"qd",children:[L.memo_type,typeof L.est_min=="number"?` · ~${L.est_min} min`:""]}),t.jsx("span",{className:"qt",children:L.status}),L.url&&t.jsx("a",{className:"qgo",href:L.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.actMemo}),j&&L.status==="error"&&t.jsx("button",{type:"button",className:"qgo an",onClick:()=>{Bn(a,L.company,"retry").then(()=>f(F=>F+1))},children:e.queueRetry}),j&&L.status!=="done"&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{Bn(a,L.company,"delete").then(()=>f(F=>F+1))},children:e.queueDelete})]},L.company))})]}),t.jsxs("div",{className:"qsec todo",children:["⚡ ",k?e.qUpNextWait:e.qUpNext(q.length)]}),t.jsx("div",{className:"qhedge",children:e.qHedge}),t.jsxs("div",{className:"qrows qfile",children:[k&&t.jsxs("div",{className:"qwait qwrow",children:[t.jsx("i",{className:"qwd"}),e.qFileWait]}),!k&&q.length===0&&t.jsx("div",{className:"sp-empty",children:e.queueEmpty}),q.map((L,F)=>{const x=A.get(L.name),T=C.get((L.name||"").trim().toLowerCase()),B=g.liveOf(L.name),G=!!(T&&s.has(T.id))||!!(B&&(B.status==="boot"||B.status==="running")),H=!!(T&&ze(T)===1&&!T.memoUrl)&&!B;return t.jsxs("div",{className:"qr2 qfl",children:[t.jsxs("span",{className:"qn2",children:["#",F+1]}),x?t.jsx("span",{className:"qwhen"+(x.label==="demain"?" soon":""),children:x.label}):t.jsx("span",{className:"qwhen later",children:e.qLater}),t.jsx("b",{children:L.name}),L.fresh&&t.jsx("span",{className:"qfresh",children:e.qFresh}),typeof L.score=="number"&&t.jsx("span",{className:"qs2",children:L.score}),B&&(B.status==="boot"||B.status==="running")&&t.jsx(Xt,{item:B,serverOff:g.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),H&&(d.lockActions||!j?t.jsx("button",{type:"button",className:"qgo an",onClick:()=>c({type:"modal",modal:"rdv"}),children:e.actLocked}):t.jsx("button",{type:"button",className:"qgo an",disabled:G,onClick:()=>{i(T),f(Q=>Q+1)},children:G?e.actAnalyseQueued:e.actAnalyse})),L.excerpt&&t.jsx("span",{className:"qex",children:L.excerpt})]},L.name+":"+F)})]}),t.jsxs("div",{className:"qsec",children:["🧭 ",e.qVerdictsT]}),t.jsx("ul",{className:"qverd",children:e.qVerdicts.map(([L,F])=>t.jsxs("li",{children:[t.jsx("b",{children:L})," — ",F]},L))})]})}function Cd(){const{t:e,token:a,flash:r,scoped:n,caps:o,stageOf:i,dispatch:s}=V(),d=`${Ft}/cibles/list.csv?token=${a}`,c=`${Ft}/cibles/list.json?token=${a}`,g=`${Ft}/cibles/export.xlsx?token=${a}&scope=full`,l=`=IMPORTDATA("${d}")`,h=y=>{var f;(f=navigator.clipboard)==null||f.writeText(y).then(()=>r(e.exportCopied))},p=[{def:e.exportCsv,value:d,href:d},{def:e.exportSheet,value:l},{def:e.exportLive,value:c,href:c},{def:e.exportXlsx,value:g,href:g}],b=!o.lockActions&&n.length>0,m=()=>{ud(pd(n,{plabels:e.plabels,head:e.exportViewHead,stageOf:i,stageLabel:y=>(e.stg.find(([f])=>f===y)||["",""])[1]})),r(e.exportViewDone(n.length))},v=()=>{s({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)};return t.jsxs($e,{title:e.exportTitle,icon:"📥",children:[t.jsx("p",{className:"lead2",children:e.exportLead}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🖨️"}),t.jsxs("div",{children:[t.jsx("b",{children:e.printTitle}),t.jsx("p",{children:e.printDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb",onClick:v,children:e.printBtn})]})}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🗂"}),t.jsxs("div",{children:[t.jsx("b",{children:e.dsBtn}),t.jsx("p",{children:e.dsHint})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>s({type:"modal",modal:"dossier"}),children:e.exportViewBtn})]})}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"📄"}),t.jsxs("div",{children:[t.jsx("b",{children:e.exportViewTitle}),t.jsx("p",{children:e.exportViewDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb pri",onClick:m,children:e.exportViewBtn})]})}),t.jsx("div",{className:"expl",children:p.map(({def:y,value:f,href:j})=>t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:y[0]}),t.jsxs("div",{children:[t.jsx("b",{children:y[1]}),t.jsx("p",{children:y[2]})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>h(f),children:e.exportCopy}),j&&t.jsx("a",{className:"exb",href:j,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.exportOpen})]},y[1]))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.exportKeyWarning})]})}function zd(){const{t:e,token:a,flash:r,flashErr:n,mode:o}=V(),i=o!=="client",[s,d]=u.useState(null),[c,g]=u.useState(!1),[l,h]=u.useState(0),[p,b]=u.useState(!1);u.useEffect(()=>{let f=!0;return g(!1),In(a).then(j=>{f&&(j?d(j):g(!0))}),()=>{f=!1}},[a,l]);const m=()=>(s==null?void 0:s.sections)||{swot:!0,action:!0,synergies:!0,quadrant:!0,verdict:!0},v=f=>{if(i||!s)return;const j={enabled:f.enabled??!!s.enabled,email:f.email??(s.email||""),sections:f.sections??m()};b(!0),In(a,j).then(C=>{if(b(!1),!C){n(e.memoAlertErr);return}d(C),r(e.memoAlertSaved)})};if(c)return t.jsx($e,{title:e.memoAlertTitle,icon:"🔔",children:t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>h(f=>f+1),children:e.retry})]})});if(!s)return t.jsx($e,{title:e.memoAlertTitle,icon:"🔔",children:t.jsx("div",{className:"sp-empty",children:"…"})});const y=m();return t.jsxs($e,{title:e.memoAlertTitle,icon:"🔔",children:[t.jsx("p",{className:"lead2",children:e.memoAlertSub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.memoAlertToggle})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":s.enabled===!0,disabled:i||p,style:s.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>v({enabled:!s.enabled}),children:s.enabled?"ON":"OFF"})})]}),t.jsx(Ad,{value:s.email||"",readOnly:i||p,label:e.memoAlertEmail,okLabel:e.csNoteOk,onSave:f=>v({email:f})}),t.jsx("div",{className:"qsec ok",children:e.memoAlertSections}),t.jsx("div",{className:"secl",children:e.memoAlertSec.map(([f,j])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:!!y[f],disabled:i||p,onChange:()=>v({sections:{...y,[f]:!y[f]}})}),t.jsx("span",{children:j})]},f))}),t.jsx(zn,{label:e.memoAlertPreview,readOnly:i,onPreview:()=>yi(a,y),onTest:()=>vi(a,y)})]})}function Ad({value:e,readOnly:a,label:r,okLabel:n,onSave:o}){const[i,s]=u.useState(e);u.useEffect(()=>{s(e)},[e]);const d=i.trim()!==e.trim(),c=!i.trim()||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.trim());return t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:r}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("input",{type:"email",className:"mailin",value:i,disabled:a,onChange:g=>s(g.target.value),onKeyDown:g=>{g.key==="Enter"&&d&&c&&o(i.trim())}}),t.jsx("button",{type:"button",className:"abtn",disabled:a||!d||!c,onClick:()=>o(i.trim()),children:n})]})]})}function Td(){const{t:e,token:a,flash:r,flashErr:n,canWrite:o}=V(),[i,s]=u.useState(null),[d,c]=u.useState(!1),[g,l]=u.useState(null),[h,p]=u.useState(""),[b,m]=u.useState(0);u.useEffect(()=>{let C=!0;return c(!1),Ja(a).then(k=>{C&&(k?s({configured:k.configured,url_hint:k.url_hint}):c(!0))}),ji(a).then(k=>{C&&l(k)}),()=>{C=!1}},[a,b]);const v=(C,k)=>{o&&Ja(a,C).then(N=>{if(!N||N.ok===!1){n(e.actErr);return}C.test&&N.sent===!1?n(e.plugTestThrottled):r(k),m(z=>z+1)})},y='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}',f=JSON.stringify({event:"status",company:"Aitona",status:"Validée",note:"très bon fit — introduction chaude possible",score:90,website:"https://aitona.com",memo_url:"https://analysis.proplace.co/…"},null,2),j=`curl -X POST ${Ft}/cibles/evaluate \\
  -H "Content-Type: application/json" \\
  -d '{"token":"${a}","q":"nom ou URL de la société"}'`;return t.jsxs($e,{title:e.plugTitle,icon:"🔌",wide:!0,children:[g&&t.jsx("p",{className:"mnote"+(g.enabled?" warn":""),children:g.enabled?e.plugAutoOn(g.destination||"webhook"):e.plugAutoOff}),d?t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>m(C=>C+1),children:e.retry})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugCrm}),t.jsx("p",{className:"mnote",children:e.plugCrmHint}),t.jsxs("ol",{className:"plughow",children:[t.jsx("li",{children:e.plugHow1}),t.jsx("li",{children:e.plugHow2}),t.jsx("li",{children:e.plugHow3})]}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"url",maxLength:500,placeholder:e.plugUrlPh,value:h,disabled:!o,onChange:C=>p(C.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:!o||!h.trim(),onClick:()=>v({url:h.trim()},e.plugSaved),children:e.plugSave})]}),(i==null?void 0:i.configured)&&t.jsxs("p",{className:"mnote",children:["✓ ",i.url_hint||""," ",t.jsx("button",{type:"button",className:"lk",disabled:!o,onClick:()=>v({test:!0},e.plugTested),children:e.plugTest})," · ",t.jsx("button",{type:"button",className:"lk",disabled:!o,onClick:()=>v({remove:!0},e.plugRemoved),children:e.plugRemove})]}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugExT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:f}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var C;(C=navigator.clipboard)==null||C.writeText(f).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugExResult})]}),t.jsx(qd,{}),t.jsx("div",{className:"qsec ok",children:e.plugApiT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:j}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var C;(C=navigator.clipboard)==null||C.writeText(j).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote dim",children:e.plugQuota}),t.jsx("div",{className:"qsec ok",children:e.plugMcp}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:y}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var C;(C=navigator.clipboard)==null||C.writeText(y).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugFeeds}),t.jsx("p",{className:"mnote warn",children:e.plugTokenNote}),t.jsx("p",{className:"mnote dim",children:t.jsx("a",{href:"https://proplace.co/api/",target:"_blank",rel:"noopener noreferrer",children:e.plugDoc})})]})]})}function qd(){const{t:e,token:a,lang:r}=V(),[n,o]=u.useState("valides"),[i,s]=u.useState(!1),[d,c]=u.useState(null),[g,l]=u.useState(null),[h,p]=u.useState(!1),[b,m]=u.useState(!1),[v,y]=u.useState(null),[f,j]=u.useState(null),[C,k]=u.useState(null),N=`atl2:bulk:${a}:${n}`;u.useEffect(()=>{Ja(a).then(I=>{j(I&&I.configured?I.url_hint||"webhook":null)})},[a]),u.useEffect(()=>{c(null),l(null),p(!1),y(null);try{const I=JSON.parse(localStorage.getItem(N)||"null");k(I&&Date.now()-Date.parse(I.t)<24*3600*1e3?I:null)}catch{k(null)}},[N]);const z=async()=>{s(!0),p(!1),y(null);const I=await Ei(a,n);c(I),l(I.ok?n:null),s(!1)},E=u.useRef(!1),q=async()=>{if(E.current)return;E.current=!0,m(!0);const I=`${a}:${n}:${Date.now()}:${Math.random().toString(36).slice(2,10)}`;let L;try{L=await Si(a,n,"webhook",void 0,I)}finally{E.current=!1}if(m(!1),p(!1),y(L),L.ok&&(L.pushed||0)>0){const F={t:new Date().toISOString(),n:L.pushed||0};k(F);try{localStorage.setItem(N,JSON.stringify(F))}catch{}}},A=d!=null&&d.ok&&d.ready||0,R=!!(d!=null&&d.ok)&&g===n&&A>0&&!!f&&!C,P=C?new Date(C.t).toLocaleString(r==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugBulk}),t.jsx("p",{className:"mnote",children:e.plugBulkHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("select",{value:n,onChange:I=>o(I.target.value),children:e.plugBulkTabs.map(([I,L])=>t.jsx("option",{value:I,children:L},I))}),t.jsx("button",{type:"button",className:"abtn",disabled:i,onClick:()=>{z()},children:i?"…":e.plugBulkPreview})]}),d&&(d.ok?t.jsx("p",{className:"mnote",children:e.plugBulkResult(d.ready||0,d.linkedinReady||0,(d.noContact||[]).length)}):t.jsx("p",{className:"mnote warn",children:e.actErr})),!!(d!=null&&d.ok)&&t.jsx("p",{className:"mnote dim",children:e.bulkScope}),C&&t.jsx("p",{className:"mnote",children:e.bulkLocked(P,C.n)}),!C&&!!(d!=null&&d.ok)&&!f&&t.jsx("p",{className:"mnote warn",children:e.bulkNoDest}),!C&&!d&&t.jsx("p",{className:"mnote dim",children:e.bulkPreviewFirst}),R&&!h&&t.jsx("button",{type:"button",className:"abtn dgr",onClick:()=>p(!0),children:e.bulkArm}),R&&h&&t.jsxs("div",{className:"bulkc",children:[t.jsx("p",{className:"mnote warn",children:e.bulkWarn(A,f||"")}),t.jsx("button",{type:"button",className:"abtn dgr",disabled:b,onClick:()=>{q()},children:b?e.bulkSending:e.bulkConfirm(f||"")}),t.jsx("button",{type:"button",className:"abtn",disabled:b,onClick:()=>p(!1),children:e.bulkCancel})]}),v&&(v.ok?v.replayed?t.jsx("p",{className:"mnote",children:v.pending?e.bulkPending:e.bulkReplayed}):(v.pushed||0)>0?t.jsx("p",{className:"mnote",children:e.bulkDone(v.pushed||0,v.linkedinReady||0,v.skippedNoEmail||0)}):t.jsx("p",{className:"mnote warn",children:e.bulkNone}):t.jsx("p",{className:"mnote warn",children:v.error||e.actErr}))]})}function Ld(){const{t:e,data:a,lang:r}=V(),n=a.credits,o=a.email,i=async s=>{if(!o)return;const d=window.location.href.split("?")[0];try{const g=await(await fetch(`${hn}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,lookup_key:s,success_url:d+"?credits=ok",cancel_url:d+"?credits=cancel"})})).json();g.url&&(window.location.href=g.url)}catch{}};return t.jsxs($e,{title:e.rechargeTitle,icon:"⚡",children:[n&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:e.rechargeHint(n.daily_grant)}}),n.costs&&t.jsxs("p",{className:"mnote",children:["① ",e.creditsCost(n.costs.instant)," · ② ",e.creditsCost(n.costs.detailed)]}),t.jsx("div",{className:"packs",children:(n.packs||[]).map(s=>t.jsxs("div",{className:"pack",children:[t.jsx("div",{className:"pt",children:e.rechargeUnit(s.credits,s.price_eur)}),t.jsx("button",{type:"button",onClick:()=>{i(s.lookup_key)},children:e.rechargeBuy})]},s.lookup_key))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.rechargeNote})]}),!n&&t.jsx("div",{className:"sp-empty",children:e.creditsNone})]})}function Rd(){const{t:e}=V();return t.jsx($e,{title:e.dsBtn,icon:"🗂",wide:!0,children:t.jsx(hd,{})})}function Fd(){const{t:e,lang:a,data:r,dossiers:n,token:o,fund:i,canWrite:s,flash:d}=V(),[c,g]=u.useState(null),[l,h]=u.useState(!1);u.useEffect(()=>{let A=!0;if(i)return gn(i).then(R=>{A&&R&&typeof R.per_day=="number"&&g(R.per_day)}),()=>{A=!1}},[i]);const[p,b]=u.useState(null);u.useEffect(()=>{if(!o)return;let A=!0;return ki(o).then(R=>{A&&b(R)}),()=>{A=!1}},[o]);const m=r.stats,v=typeof(m==null?void 0:m.screened)=="number"?m.screened:n.filter(A=>A.kind==="target"&&_e(A)).length,y=r.marketEstimate||0,f=y>0?Math.min(100,Math.round(v/y*100)):null,j=(m==null?void 0:m.window_days)||30,C=v>0?v/j:0,k=y>0?Math.max(0,y-v):0,z=y>0&&C>0&&v>=100?Math.round(k/C):null,E=A=>Math.round(A).toLocaleString(a==="en"?"en-US":"fr-FR"),q=A=>{l||!s||(h(!0),Ni(o,A).then(R=>{if(h(!1),R===null){d(e.actErr);return}g(R),d(e.alertSaved)}))};return t.jsxs($e,{title:e.coverTitle,icon:"🌍",children:[t.jsxs("div",{className:"covg",children:[t.jsx("b",{children:e.covScreened(E(v))}),y>0&&t.jsx("span",{children:e.covOf(E(y))})]}),f!==null?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"covbar",children:[t.jsx("i",{style:{width:f+"%"}}),t.jsxs("em",{children:[f," %"]})]}),z!==null&&t.jsx("p",{className:"mnote",children:e.covEta(z)})]}):t.jsx("p",{className:"mnote dim",children:e.covNoEst}),C>=1&&t.jsx("p",{className:"mnote",children:e.covPace(E(C))}),m&&t.jsxs("div",{className:"covf",children:[typeof m.kept=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:E(m.kept)})," ",e.covKept]}),typeof m.analyzed=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:E(m.analyzed)})," ",e.covAna]}),typeof m.shown=="number"&&m.shown!==m.kept&&t.jsxs("span",{children:[t.jsx("b",{children:E(m.shown)})," ",e.funShown]})]}),(p==null?void 0:p.ok)&&(p.detail||[]).length>0&&t.jsxs("details",{className:"covcalc",children:[t.jsx("summary",{children:e.covHowT}),p.perimetre&&t.jsx("p",{className:"mnote",children:p.perimetre}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"mkc",children:e.covColCode}),t.jsx("th",{className:"mkn",children:e.covColN}),t.jsx("th",{className:"mks",children:e.covColSource})]})}),t.jsxs("tbody",{children:[(p.detail||[]).map((A,R)=>t.jsxs("tr",{className:A.n?"":"zero",children:[t.jsxs("td",{className:"mkc",children:[A.code,A.geo?` · ${A.geo}`:" · FR"]}),t.jsx("td",{className:"mkn",children:typeof A.n=="number"?E(A.n):"—"}),t.jsxs("td",{className:"mks",children:[t.jsx("span",{children:A.source}),A.elargi&&t.jsx("em",{children:e.covWide(String(A.demande||""))}),A.erreur&&t.jsx("em",{children:e.covMissing})]})]},R)),t.jsxs("tr",{className:"tot",children:[t.jsx("td",{className:"mkc",children:e.covTotal}),t.jsx("td",{className:"mkn",children:t.jsx("b",{children:E(p.total||y)})}),t.jsx("td",{className:"mks"})]})]})]}),(p.rejetes||[]).length>0&&t.jsx("p",{className:"mnote dim",children:e.covRejected((p.rejetes||[]).join(", "))}),t.jsxs("p",{className:"mnote dim",children:[(p.sources||[]).join(" · "),p.calcule_le?` — ${e.covComputedAt(p.calcule_le.slice(0,10).split("-").reverse().join("/"))}`:""]})]}),s&&c!==null&&t.jsxs("div",{className:"covr",children:[t.jsxs("div",{className:"covrh",children:[t.jsx("span",{children:e.covRate}),t.jsx("b",{children:e.covRateNow(c)})]}),t.jsx("div",{className:"covrb",children:[0,1,2,3,5,10].map(A=>t.jsx("button",{type:"button",className:c===A?"on":"",disabled:l,onClick:()=>q(A),children:A===0?"⏸":A},A))}),t.jsx("p",{className:"mnote dim",children:e.covRateHint})]})]})}function Md(){var f,j,C;const{t:e,dossiers:a,token:r,mode:n,flash:o,criteria:i,fund:s,lang:d}=V(),c=n==="client",g=u.useMemo(()=>{const k=new Set;return a.forEach(N=>{N.angle&&k.add(N.angle)}),[...k]},[a]),[l,h]=u.useState(""),[p,b]=u.useState(""),[m,v]=u.useState(!1),y=async()=>{const k=l.trim();if(!(!k||m||!c)){v(!0),b("");try{const z=await(await fetch(`${Ft}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r,message:k,who:"atelier2"})})).json().catch(()=>({}));if(z.reply&&b(String(z.reply)),z.job_id){b(e.critChatRunning);const E=async()=>{const q=await fetch(`${Ft}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:z.job_id})}).then(A=>A.json()).catch(()=>null);if(q&&q.done){b(String(q.reply||q.clarification||q.summary||"✓")),v(!1),q.applied&&o(e.alertSaved);return}setTimeout(()=>{E()},8e3)};setTimeout(()=>{E()},8e3),h("");return}h("")}finally{p.startsWith("⏳")||v(!1)}}};return t.jsxs($e,{title:e.critTitle,icon:"⚙",wide:!0,children:[(i==null?void 0:i.lead)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critHypTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:i.lead}),!!((f=i.points)!=null&&f.length)&&t.jsx("ul",{className:"critpts",children:i.points.map(k=>t.jsx("li",{children:k},k))}),t.jsx("p",{className:"mnote",children:e.critHypSub})]}),!!((j=i==null?void 0:i.angles)!=null&&j.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critProfilsTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:i.method||e.critProfilsSub}),i.angles.map(k=>{var N,z;return t.jsxs("details",{className:"prof",children:[t.jsx("summary",{children:k.title}),k.why&&t.jsx("p",{className:"why",children:k.why}),t.jsxs("div",{className:"lo",children:[!!((N=k.look)!=null&&N.length)&&t.jsxs("div",{children:[t.jsx("em",{children:e.critLookFor}),t.jsx("ul",{children:k.look.map(E=>t.jsx("li",{children:E},E))})]}),!!((z=k.out)!=null&&z.length)&&t.jsxs("div",{className:"ko",children:[t.jsx("em",{children:e.critRuleOut}),t.jsx("ul",{children:k.out.map(E=>t.jsx("li",{children:E},E))})]})]})]},k.title)})]}),!!((C=i==null?void 0:i.gate)!=null&&C.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critGateTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:e.critGateSub}),i.gate.length===1&&!i.gate[0].k?t.jsx("p",{className:"gate1",children:i.gate[0].t}):t.jsx("ol",{className:"gatesteps",children:i.gate.map(k=>t.jsxs("li",{children:[k.k&&t.jsx("b",{children:k.k}),k.t]},k.t))})]}),g.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critAngles}),t.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:g.map(k=>t.jsx("li",{style:{marginBottom:5},children:k.replace(/[_-]+/g," ")},k))})]}),t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.critChatTitle}),t.jsx("p",{children:e.critChatHint}),t.jsxs("div",{className:"mfield",style:{marginTop:10},children:[t.jsx("input",{placeholder:e.critChatPh,value:l,disabled:!c||m,onChange:k=>h(k.target.value),onKeyDown:k=>{k.key==="Enter"&&y()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(m?" loading":""),style:{padding:"12px 18px"},disabled:!c||m||!l.trim(),onClick:()=>void y(),children:[t.jsx("span",{className:"fill"}),e.critChatSend]})]}),p&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:p})]}),t.jsx("div",{style:{marginBottom:14},children:t.jsx(wi,{fund:s,lang:d,limit:30,compact:!0})}),t.jsx("div",{className:"qsec ok",children:e.qvTitle}),t.jsx("div",{className:"vlist",children:e.qv.map(([k,N])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vd "+(bo[k]||"v-cons"),children:k}),t.jsx("span",{children:N})]},k))}),t.jsx("div",{className:"qsec ok",children:e.brTitle}),t.jsx("div",{className:"vlist",children:e.br.map(([k,N])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vtag",children:k}),t.jsxs("span",{children:["← ",N]})]},k))}),t.jsx("p",{className:"mnote",children:e.brNote}),t.jsx("p",{className:"mnote",children:e.critMemoKinds})]})}function Od(){const{t:e,dispatch:a,startTour:r}=V(),n=o=>{var i,s;a({type:"modal",modal:null}),o==="crit"||o==="plug"||o==="alert"?a({type:"modal",modal:o}):o.startsWith("tab")?a({type:"ptab",tab:Number(o.slice(3))}):o==="eval"&&((i=document.querySelector(".atl2 .demand input"))==null||i.scrollIntoView({block:"center",behavior:"smooth"}),(s=document.querySelector(".atl2 .demand input"))==null||s.focus())};return t.jsxs($e,{title:e.tutoTitle,icon:"▶",children:[t.jsxs("div",{className:"howto-go",children:[t.jsx("p",{children:e.tourIntro}),t.jsxs("button",{type:"button",onClick:()=>{a({type:"modal",modal:null}),r()},children:["▶ ",e.tourStart]})]}),t.jsx("ul",{className:"howto",children:e.howto.map(([o,i],s)=>t.jsxs("li",{role:"button",tabIndex:0,onClick:()=>n(i),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),n(i))},children:[t.jsx("span",{className:"n",children:s+1}),t.jsx("span",{dangerouslySetInnerHTML:{__html:o.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}})]},i+s))})]})}const ko="atl2:mapfold",Dd=()=>{if(typeof window>"u")return!1;try{const e=localStorage.getItem(ko);if(e==="on")return!0;if(e==="off")return!1}catch{}try{const e=new URLSearchParams(window.location.search);if(e.get("embed")==="1"&&(e.get("source")||"").toLowerCase()==="ops")return!0}catch{}return window.innerHeight<1e3},Pd=()=>{if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search).get("embed")==="1")return!0}catch{}return window.innerWidth<=760},jo=u.createContext(null),V=()=>{const e=u.useContext(jo);if(!e)throw new Error("AtelierV2Ctx manquant");return e};function ht({o:e,lg:a}){const{lang:r}=V(),n=Fe(e);return n?t.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:Un(n,r),children:[n.emoji," ",Un(n,r)]}):null}function Fa({o:e,src:a}){const{lang:r,t:n}=V(),o=Fe(e);if(!o)return null;const i=Oi(o),s=Di(o);return t.jsxs("em",{className:"sigwin"+(s?" hot":""),title:n.signaledOn(Pr(o,r))+" · "+n.win7(Ir(o,r)),children:[t.jsx("span",{className:"gg",children:Array.from({length:7},(d,c)=>t.jsx("i",{className:c<i?"on":""},c))}),t.jsx("span",{className:"lb",children:s?n.lastDay:n.daysLeft(Math.max(0,o.left??0))}),a&&o.url&&t.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",title:n.seeSource,onClick:d=>d.stopPropagation(),children:"↗"})]})}function Id(e,a,r){const n=(r||"").trim();if(n){const i=e.find(s=>(s.url||"")===n);if(i)return i}const o=Pe(a);if(o)return e.find(i=>Pe(i.name)===o)||e.find(i=>{const s=Pe(i.name);return s.length>=3&&(o.includes(s)||s.includes(o))})}function Bd(){const{scoped:e,t:a,st:r,dispatch:n}=V(),o=u.useRef(r.filters.day);r.filters.day&&(o.current=r.filters.day);const i=!!r.filters.day,s=e.filter(h=>!Ve(h)),d=s.length,c=s.filter(h=>!h.noCo).length,g=s.filter(h=>!!h.noCo).length,l=(r.filters.sector||[]).length>0;return t.jsxs("button",{type:"button",className:"map-pulse"+(i?" on":""),"aria-pressed":i,title:i?a.zoomPulseBtn:a.zoomPulseWeek,onClick:()=>{if(i)n({type:"filters",patch:{day:"",win:l?"7":"all"}});else{const h=o.current||new Date().toISOString().slice(0,10);n({type:"filters",patch:{day:h,win:"all"}})}},children:[t.jsx("em",{children:i?a.zoomPulseBtn:a.zoomPulseWeek}),t.jsx("b",{children:d}),t.jsx("span",{children:i?a.zoomPulseEd:a.zoomPulseWeekEd}),t.jsxs("ul",{children:[t.jsxs("li",{children:["⚡ ",c," ",a.zoomPulseEval]}),t.jsxs("li",{children:["🔎 ",g," ",a.zoomPulseExplore]})]})]})}function _d(){const{t:e,lang:a,data:r,dispatch:n}=V(),o=r.stats,i=d=>d.toLocaleString(a==="en"?"en-US":"fr-FR");if(!o||typeof o.screened!="number"||o.screened<=0)return null;const s=r.marketEstimate||0;return t.jsxs("button",{type:"button",className:"map-pulse",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("em",{children:e.identCoverage}),t.jsx("b",{children:i(o.screened)}),t.jsx("span",{children:s>0?e.covOf(i(s)):e.covScreened("").trim()}),t.jsxs("ul",{children:[typeof o.kept=="number"&&t.jsxs("li",{children:["✅ ",i(o.kept)," ",e.covKept," ",t.jsx("i",{className:"cpscope",children:e.covScopeAll})]}),typeof o.analyzed=="number"&&t.jsxs("li",{children:["⚡ ",i(o.analyzed)," ",e.covAna]})]})]})}function No({o:e}){const{lang:a}=V(),r=Mi(e.cc),n=e.cc?It(e.cc,a)||e.countryLabel||e.cc:e.countryLabel||"—";return t.jsx("span",{className:"c-flag",title:n||void 0,children:r?t.jsx("img",{src:r,width:24,height:18,alt:n||""}):t.jsx("span",{className:"em",children:"🌐"})})}const Ar="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap",$d=!1;function Ud(){const[e,a]=u.useState(!1);return u.useEffect(()=>{const r=document.scrollingElement||document.documentElement,n=()=>a((r.scrollTop||0)>600);return n(),window.addEventListener("scroll",n,!0),()=>window.removeEventListener("scroll",n,!0)},[]),e?t.jsx("button",{type:"button",className:"totop",title:"Remonter en haut",onClick:()=>{(document.scrollingElement||document.documentElement).scrollTo({top:0,behavior:"smooth"})},children:"↑"}):null}const Eo=e=>`atl2:tour:${e||"anon"}`;function Hd(e){try{return localStorage.getItem(Eo(e))==="1"}catch{return!0}}function Tr(e){try{localStorage.setItem(Eo(e),"1")}catch{}}function Vd(e,a,r,n,o,i){const s=e.tourT,d=e.howto;return[{sel:".atl2 .ident",title:s.ident,body:e.fhintIdent},o?{sel:".atl2 .cover",title:s.cover,body:e.fhintCover,need:".atl2 .ident"}:null,{sel:".atl2 .engine",title:s.engine,body:e.fhintEngine},{sel:".atl2 .ticker",title:s.live,body:e.fhintLive},{sel:".atl2 .goal",title:s.goal,body:e.fhintGoalAt(a)},{sel:".atl2 .funnel",title:s.funnel,body:e.fhintFunnel,ptab:n},i>0?{sel:".atl2 .tuto",title:s.tuto,body:d[3][0],ptab:3,need:".atl2 .tuto"}:null,{sel:".atl2 .demand",title:s.demand,body:d[1][0]},{sel:".atl2 .c-vd",need:".atl2 .list",title:s.chips,body:e.fhintChips,ptab:n,dens:"liste"},{sel:".atl2 .card .cdbody",need:".atl2 .list",title:s.dec,body:e.fhintDec,ptab:n,dens:"deplie"},r?{sel:".atl2 .card .cdtabs",need:".atl2 .list",click:'.atl2 [data-tour="tab-memo"]',title:s.memo,body:e.fhintMemo,ptab:n,dens:"deplie"}:null,{sel:".atl2 .csp",need:".atl2 .list",title:s.status,body:e.fhintStatus,ptab:n,dens:"deplie"},{sel:".atl2 .learn",title:s.learn,body:e.learnLine},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=export]",title:s.exportT,body:e.fhintExport,modal:"export"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=plug]",title:s.tools,body:d[6][0],modal:"plug"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=alert]",title:s.alerts,body:e.fhintAlerts,modal:"alert"},{sel:".atl2 .modal.on .mcard",title:s.crit,body:d[0][0],modal:"crit"}].filter(Boolean)}function Qd({demo:e=!1,source:a="default",initialFilters:r,initialUi:n,capsOverride:o,onFiltersChange:i}){var oe;const{lang:s}=qi(),d=Ki[s],c=is(e,s,a),[g,l]=u.useReducer(ds,void 0,()=>ss((n==null?void 0:n.continent)??(a==="ops"?"monde":"europe"),e||(a==="ops"?Pd():Dd()),{ptab:n==null?void 0:n.ptab,dens:(n==null?void 0:n.dens)??"liste",filters:r,modal:n==null?void 0:n.modal})),h=u.useRef(!0);u.useEffect(()=>{if(h.current){h.current=!1;return}if(!(e||a==="ops"))try{localStorage.setItem(ko,g.mapFolded?"on":"off")}catch{}},[g.mapFolded,e,a]),u.useEffect(()=>{if(a!=="ops"||typeof window>"u")return;const w=()=>{window.innerWidth<=760&&l({type:"mapFold",folded:!0})};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[a]);const p=u.useRef(i);p.current=i,u.useEffect(()=>{var w;(w=p.current)==null||w.call(p,g.filters)},[g.filters]);const[b,m]=u.useState(()=>{if(typeof window>"u")return"both";try{const w=localStorage.getItem("atl2:chrome-mode");if(w==="eval"||w==="filt"||w==="both")return w;if(localStorage.getItem("atl2:chrome-min")==="1")return"eval"}catch{}return"both"}),[v,y]=u.useState(null),[f,j]=u.useState(null),[C,k]=u.useState(null),[N,z]=u.useState({kept:0,dropped:0}),[E,q]=u.useState(!1),[A,R]=u.useState(""),[P,I]=u.useState(!1),[L,F]=u.useState(null),[x,T]=u.useState(!1),[B,G]=u.useState(!1),[,H]=u.useState(0),Q=()=>H(w=>w+1),X=u.useRef([]),K=u.useRef(new Set),ue=u.useRef(new Set),[ee,xe]=u.useState([]),[_,se]=u.useState([]),[me,Le]=u.useState(0),te=u.useRef(new Map),pe=u.useRef(null),{mode:he}=c,de=u.useMemo(()=>({...c.caps,...a==="ops"?{showMorning:!1}:null,...o||null}),[c.caps,o,a]),Y=de.pipe,ne=c.session.token||"",ie=he==="client"&&!e;u.useEffect(()=>{if(!ne||!Y)return;let w=!0;const D=async()=>{const Z=await Pi(ne);!w||!Z||(se(Z.runs),Le(Date.now()/1e3-Z.now),xe(Ne=>Ne.filter(ve=>!Z.runs.some(et=>Pe(et.company)===Pe(ve.name)))))};D();const M=ee.length>0||_.some(Z=>Z.status==="running"),U=window.setInterval(()=>{D()},M?8e3:25e3);return()=>{w=!1,window.clearInterval(U)}},[ne,Y,ee.length,_.some(w=>w.status==="running")]);const ge=u.useMemo(()=>{const w=[],D=new Set;for(const M of ee){const U=Pe(M.name);!U||D.has(U)||(D.add(U),w.push({name:M.name,id:M.id,status:"boot",started:M.started,estMin:M.estMin,memoType:"instant"}))}for(const M of _){const U=Pe(M.company);if(!U||D.has(U))continue;D.add(U);const Z=M.status==="error"?"error":M.status==="done"?"done":"running";w.push({name:M.company,status:Z,started:M.started||0,estMin:M.est_min||(M.memo_type==="detailed"?40:15),url:M.url,error:M.error,memoType:M.memo_type})}return w},[ee,_]),Ee=w=>ge.find(D=>Pe(D.name)===Pe(w))||null,re=(w,D)=>{xe(M=>M.some(U=>Pe(U.name)===Pe(w.name))?M:[...M,{name:w.name,id:w.id,started:Date.now()/1e3,estMin:D==="detailed"?40:15}]),K.current.add(w.id),Q()};u.useEffect(()=>{if(document.querySelector(`link[href="${Ar}"]`))return;const w=document.createElement("link");w.rel="stylesheet",w.href=Ar,document.head.appendChild(w)},[]);const ce=(w,D=!1)=>{R(w),I(D),pe.current&&clearTimeout(pe.current),pe.current=setTimeout(()=>R(""),D?4200:2400)},Ie=w=>ce(w,!0),qe=u.useMemo(()=>{const w=new Map;return c.dossiers.forEach(D=>{D.id&&w.set(D.id,D)}),w},[c.dossiers]),Me=u.useMemo(()=>c.dossiers.filter(w=>ja(w,g,Y)),[c.dossiers,g,Y]),Ce=u.useRef(!1);u.useEffect(()=>{if(Ce.current||e||c.loading||!c.dossiers.length)return;if(!de.showFunnel||Hd(c.session.token||"")){Ce.current=!0;return}Ce.current=!0;const w=window.setTimeout(()=>{Tr(c.session.token||""),T(!0)},700);return()=>window.clearTimeout(w)},[e,c.loading,c.dossiers.length,de.showFunnel,c.session.token]);const ye=u.useMemo(()=>c.dossiers.filter(w=>cs(w,g,Y,c.favIds)),[c.dossiers,g,Y,c.favIds]),Ue=u.useMemo(()=>Li(Me,c.favIds),[Me,c.favIds]),Re=u.useRef(!1);u.useEffect(()=>{if(Re.current)return;if(!Y||a==="ops"){Re.current=!0;return}if((n==null?void 0:n.ptab)!==void 0){Re.current=!0;return}if(c.loading)return;Re.current=!0;const w=Ri(Ue);w!==g.ptab&&l({type:"ptab",tab:w})},[Y,a,n==null?void 0:n.ptab,c.loading,Ue,g.ptab]);const st=u.useMemo(()=>{const w=Gr(c.dossiers);return w?ct(w)===0?d.tourToday:Yr(w,s):d.tourNoRun},[c.dossiers,d,s]),pt=u.useMemo(()=>c.dossiers.some(w=>!!w.memoUrl||!!w.summary||Mt(w)),[c.dossiers]),[gt,tt]=u.useState(!1);u.useEffect(()=>{if(c.loading){tt(!1);return}if(c.dossiers.length>0||c.error){tt(!0);return}const w=window.setTimeout(()=>tt(!0),6e3);return()=>window.clearTimeout(w)},[c.loading,c.dossiers.length,c.error]);const bt=(c.marketEstimate||0)>0||typeof((oe=c.stats)==null?void 0:oe.screened)=="number"&&c.stats.screened>0,vt=u.useMemo(()=>[1,0,2,4,5,3].find(w=>(Ue[w]||0)>0)??0,[Ue]),Je=bn.find(w=>w.key===g.continent),ut=g.continent==="monde"?d.contWorld:(s==="fr"?Je==null?void 0:Je.fr:Je==null?void 0:Je.en)||"";u.useEffect(()=>{const w=D=>{var U;const M=(((U=D.detail)==null?void 0:U.name)||"").trim();M&&yt(null,M)};return window.addEventListener("ppmap:evaluate",w),()=>window.removeEventListener("ppmap:evaluate",w)}),u.useEffect(()=>{const w=D=>{const M=D.detail||{},U=String(M.id||"").trim(),Z=String(M.name||"").trim(),Ne=String(M.url||"").trim(),ve=U&&qe.get(U)||Id(c.dossiers,Z,Ne);if(ve){if(j(null),ja(ve,g,Y)||(g.continent!=="monde"&&ve.continent!==g.continent&&l({type:"continent",key:ve.continent||"monde"}),l({type:"reset"})),Y&&ve.kind!=="op"){const we=ze(ve);typeof we=="number"&&we!==g.ptab&&l({type:"ptab",tab:we})}ve.kind!=="op"&&window.dispatchEvent(new CustomEvent("ppmap:reveal")),l({type:"focus",id:ve.id}),(ve.noCo||["media","nominations","recrutements"].includes(ve.engine||""))&&(ve.url||ve.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:ve.url||"",text:[ve.headline,ve.tagline].filter(Boolean).join(`
`)}})):ve.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:ve.name,url:ve.url||"",website:ve.website||"",domain:ve.domain||""}}));return}!Z&&!Ne||(l({type:"focus",id:U||null}),j({name:Z,headline:String(M.text||"").trim()||Z,url:Ne,card:M.card}),Ne&&(wa(Z)||!Z)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:Ne,text:String(M.text||"").trim()}})):Z&&!wa(Z)&&window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:Z}})))};return window.addEventListener("ppmap:focus",w),()=>window.removeEventListener("ppmap:focus",w)}),u.useEffect(()=>{const w=U=>{const Z={},Ne=String((U==null?void 0:U.sector)||"").trim();Ne&&(Z.sector=[Ne]);const ve=String((U==null?void 0:U.day)||"").slice(0,10);/^\d{4}-\d{2}-\d{2}$/.test(ve)&&(Z.day=ve);const et=String((U==null?void 0:U.search)||"").trim();et&&(Z.search=et);const we=String((U==null?void 0:U.dealKind)||"").trim();(we==="ma"||we==="levee"||we==="other")&&(Z.dealKind=[we]),Object.keys(Z).length&&l({type:"filters",patch:Z})},D=U=>w(U.detail),M=U=>{U.data&&U.data.type==="pp-filter"&&w(U.data)};return window.addEventListener("ppmap:filter",D),window.addEventListener("message",M),()=>{window.removeEventListener("ppmap:filter",D),window.removeEventListener("message",M)}},[]),u.useEffect(()=>{const w=D=>{var Z;const M=(((Z=D.detail)==null?void 0:Z.name)||"").trim().toLowerCase();if(!M)return;const U=c.dossiers.find(Ne=>(Ne.name||"").trim().toLowerCase()===M);U&&l(a==="ops"?{type:"focus",id:U.id}:{type:"popup",id:U.id})};return window.addEventListener("ppmap:similar",w),()=>window.removeEventListener("ppmap:similar",w)});const yt=(w,D)=>{const M=((w==null?void 0:w.name)||D||"").trim();if(!ie){k({kicker:M});return}!M||E||(q(!0),(async()=>{try{let U=M;const Z=((w==null?void 0:w.website)||(w==null?void 0:w.domain)||"").trim();if(Z)U=Z;else try{const we=await Or(M);if(we!=null&&we.website)U=we.website;else if(((we==null?void 0:we.candidates)||[]).length===1)U=we.candidates[0].url;else if(((we==null?void 0:we.candidates)||[]).length>1){X.current=[{name:M,verdict:"unresolved",remaining:null,reason:d.evalPickSite,candidates:(we.candidates||[]).slice(0,5)},...X.current].slice(0,8),Q();return}}catch{}const Ne=await Dr(ne,U,"atelier2"),ve={name:Ne.company||M,verdict:Ne.verdict,reason:Ne.reason||"",remaining:Ne.remaining??null};X.current=[ve,...X.current].slice(0,8),Ne.verdict==="kept"&&z(we=>({...we,kept:we.kept+1})),Ne.verdict==="ruled_out"&&z(we=>({...we,dropped:we.dropped+1}));const et=w||c.dossiers.find(we=>(we.name||"").toLowerCase()===M.toLowerCase());et&&(Ne.verdict==="kept"?et.verdict=et.verdict||"MATCH":Ne.verdict==="ruled_out"&&(et.verdict="NO MATCH"),Ne.reason&&(et.reasoning=Ne.reason)),Q()}finally{q(!1)}})())},S=w=>{if(!ie){k({kicker:w.name});return}re(w,"instant"),Ht(ne,"fast_request",w.name||"",""),ce(d.memoInstantSent(w.name))},W=w=>te.current.get(w.id)??c.thumbs.get((w.name||"").trim().toLowerCase()),$=(w,D)=>l({type:"undoPush",entry:{id:w.id,name:w.name,prevCeoStatus:D}}),ae=async(w,D,M)=>{const U=w.ceoStatus||"";w.ceoStatus=D,Q();const Z=await Pa(ne,{status:D,airtable_id:w.airtableId,check_id:w.checkId,company:w.name,...(M==null?void 0:M.note)!==void 0?{note:M.note}:{},...M!=null&&M.via?{via:M.via}:{}});return Z.ok?Z.skipped?(w.ceoStatus=U,Q(),Ie(d.actNotPersisted),!1):((M==null?void 0:M.undo)!==!1&&$(w,U),M!=null&&M.msg&&ce(M.msg),(D==="Validé"||D==="Écarté")&&!w.ceoNote&&(M==null?void 0:M.note)===void 0&&F({o:w,yes:D==="Validé"}),!0):(w.ceoStatus=U,Q(),Ie(d.actErr),!1)},be=async(w,D)=>{const M=await Pa(ne,{status:w.ceoStatus||"Retenu",airtable_id:w.airtableId,check_id:w.checkId,company:w.name,note:D,via:"note"});return!M.ok||M.skipped?(Ie(M.skipped?d.actNotPersisted:d.actErr),!1):(w.ceoNote=D,Q(),!0)},le=u.useRef(new Map),ke=w=>le.current.has(w.id)?le.current.get(w.id):c.stages.get((w.name||"").trim().toLowerCase()),Xe=(w,D)=>{le.current.set(w.id,D),Q()},wt=(w,D)=>{ie&&ae(w,D?"Validé":"Écarté",{msg:D?d.decidedYes(w.name):d.decidedNo(w.name)})},mt=w=>{ie&&ae(w,"À trancher",{msg:d.promoted(w.name)})},_t=w=>{ie&&(async()=>{const D=w.ceoStatus||"";w.ceoStatus="Retenu",Q();const M=await Pa(ne,{status:"Retenu",check_id:w.checkId,company:w.name});if(!M.ok||M.skipped){w.ceoStatus=D,Q(),Ie(M.skipped?d.actNotPersisted:d.actErr);return}$(w,D),ce(d.repeched(w.name))})()},qt=()=>{const w=g.undo[g.undo.length-1];if(!w){ce(d.undoNone);return}const D=qe.get(w.id);if(!D){l({type:"undoPop"}),ce(d.undoNone);return}let M=w.prevCeoStatus;if(!M)if((D.verdict||"").toUpperCase().includes("CALL"))M="À trancher";else{ce(d.undoLockedTitle);return}(async()=>await ae(D,M,{undo:!1})&&(l({type:"undoPop"}),D.ceoStatus=w.prevCeoStatus,Q(),ce(d.undoDone(D.name))))()},Oe=w=>{ie&&(ue.current.add(w.id),Q(),(async()=>{const D=await Ii(ne,w.name,"email");if(!D||D.ok===!1){ue.current.delete(w.id),Q(),Ie(d.actErr);return}Ht(ne,"approach",w.name||"",""),ce(d.actApproachSent)})())},De=(w,D)=>{ie&&(async()=>{if(!(await Ht(ne,D?"yes":"no",w.name||"","")).ok){Ie(d.actErr);return}te.current.set(w.id,D?"yes":"no"),Q(),ce(D?d.thumbUpDone:d.thumbDnDone)})()},Ze=w=>{!ie||!Mt(w)||(re(w,"detailed"),Ht(ne,"detailed_request",w.name||"",""),ce(d.memoDeepSent(w.name)))},$t=w=>{const D=new Set(c.favIds),M=D.has(w.id);M?D.delete(w.id):D.add(w.id),c.setFavIds(D),ie&&Bi(ne,{id:w.id,co:w.name},M)},Ut=()=>{!ie||B||window.confirm(d.identSyncConfirm)&&(G(!0),(async()=>{const w=await _i(ne);G(!1),w?ce(d.identSyncDone):Ie(d.actErr)})())},ia=/proplace/i.test(c.fund||""),Ma=w=>{!ie||!ia||(Ht(ne,"onboard_request",w.name||"",""),ce(d.onboardSent(w.name)))},O={st:g,dispatch:l,t:d,lang:s,mode:he,caps:de,pipe:Y,token:ne,fund:c.fund,email:c.email,criteria:c.criteria,source:a||"default",data:c,doRepeche:_t,thumbOf:W,canWrite:ie,commitStatus:ae,saveNote:be,stageOf:ke,setStage:Xe,flashErr:Ie,startTour:()=>T(!0),dossiers:c.dossiers,scopedAll:Me,scoped:ye,counts:Ue,byId:qe,contName:ut,favIds:c.favIds,toggleFav:$t,askEvaluate:yt,doAnalyse:S,doDecide:wt,doPromote:mt,doApproach:Oe,doThumb:De,doDeep:Ze,doUndo:qt,doSync:Ut,doOnboard:Ma,outbound:ia,memoQueued:K.current,liveMemos:{items:ge,serverOff:me,liveOf:Ee},approachDone:ue.current,sessTally:N,evalCards:X.current,evalBusy:E,markRow:y,markedId:v,flash:ce,focusExtra:f};u.useEffect(()=>{const w=D=>{D.key==="Escape"&&(l({type:"popup",id:null}),l({type:"modal",modal:null}),l({type:"openFacet",facet:null}))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[]);const J=w=>ne?t.jsx(ms,{token:ne,children:w}):t.jsx(t.Fragment,{children:w});return t.jsx(jo.Provider,{value:O,children:t.jsxs("div",{className:"atl2"+(a==="ops"?" ops":"")+(ne?" cibles":"")+" chrome-"+b,children:[t.jsx("style",{children:Xi}),J(t.jsxs("div",{className:"app"+(Y?" pipe":"")+(ne?" has-thesis":""),children:[de.showTicker&&t.jsx(at,{name:"live",children:t.jsxs("div",{className:"live-stack"+(ne?" live-stack--cibles":""),children:[t.jsx(ys,{}),!!ne&&t.jsx(fs,{})]})}),de.showIdent&&t.jsx(at,{name:"identite",children:t.jsx(qs,{})}),!1,$d,de.showFunnel&&t.jsx(at,{name:"entonnoir",children:t.jsx(Wd,{})}),!g.mapFolded&&t.jsx(at,{name:"carte",fallback:t.jsx("div",{className:"void",children:d.loadError}),children:t.jsxs("div",{className:"fzone",children:[t.jsx(ho,{}),t.jsxs("div",{className:"stage",id:"atl2-stage",children:[a==="ops"&&t.jsx(Bd,{}),a!=="ops"&&de.showFunnel&&t.jsx(_d,{}),t.jsx(Al,{}),t.jsx(fo,{})]})]})}),de.showDemand&&Y&&t.jsx(at,{name:"direct",children:t.jsx(Wi,{items:ge,serverOff:me,labels:{strip:d.liveStrip,boot:d.liveBoot,end:d.liveEnd,open:d.liveOpenQueue,memo:d.actMemo},onOpen:()=>l({type:"modal",modal:"queue"})})}),a==="ops"&&t.jsx("div",{className:"chrome-tog",role:"tablist","aria-label":d.chromeBoth,children:[["eval",d.chromeEval],["filt",d.chromeFilt],["both",d.chromeBoth]].map(([w,D])=>t.jsx("button",{type:"button",role:"tab","aria-selected":b===w,onClick:()=>{m(w);try{localStorage.setItem("atl2:chrome-mode",w)}catch{}},children:D},w))}),de.showDemand&&t.jsx(at,{name:"evaluation",children:t.jsx("div",{className:"eval-stick",children:t.jsx(Ol,{})})}),de.showDemand&&g.memoConsole&&t.jsx(at,{name:"console",children:t.jsx(Pl,{})}),t.jsx(at,{name:"liste",fallback:t.jsxs("div",{className:"void",children:[d.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>window.location.reload(),children:d.retry})]}),children:t.jsx(dd,{})}),c.loading&&t.jsx("div",{className:"void",children:d.loadingV2}),c.error&&!c.loading&&t.jsxs("div",{className:"void",children:[d.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:c.refresh,children:d.retry})]})]})),g.popupId&&g.dens!=="liste"&&a!=="ops"&&t.jsx(at,{name:"fiche",children:t.jsx(Wl,{})}),t.jsx(at,{name:"modales",children:t.jsx(gd,{})}),t.jsx(js,{}),L&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:L.o.name}),t.jsx(Cs,{placeholder:L.yes?d.whyYesPh:d.whyNoPh,onDone:w=>{const D=L.o;F(null),w&&be(D,w).then(M=>{M&&ce(d.csNoteSaved)})}})]}),x&&gt&&t.jsx(As,{steps:Vd(d,st,pt,vt,bt,Ue[3]||0),onClose:()=>{T(!1),Tr(ne)}}),t.jsx(Ud,{}),de.showOnb&&t.jsxs("div",{className:"lockbar on",children:[t.jsx("b",{children:d.lockbarText}),t.jsxs("span",{className:"lb-c",children:[d.lockbarContactBefore,t.jsx("a",{href:Vr,children:wn}),d.lockbarContactMid,t.jsx("a",{href:`mailto:${Na}`,children:Na})]}),t.jsx("button",{type:"button",onClick:()=>l({type:"modal",modal:"rdv"}),children:d.lockbarCta})]}),A&&t.jsx("div",{className:"flash on"+(P?" err":""),children:A}),C&&t.jsx(Fi,{variant:"acquirer",initialCompany:qr().co,initialWebsite:qr().site,onClose:()=>k(null)})]})})}function Wd(){const{t:e}=V(),[a,r]=u.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem("atl2:fhint")==="off"}catch{return!1}});return a?null:t.jsxs("p",{className:"fhint",children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:t.jsx("path",{d:"M1 2h10M2.5 5.5h7M4.5 9h3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})}),t.jsx("span",{dangerouslySetInnerHTML:{__html:e.funnelHint}}),t.jsx("button",{type:"button","aria-label":"Fermer",title:e.fhintClose,onClick:()=>{r(!0);try{localStorage.setItem("atl2:fhint","off")}catch{}},children:"✕"})]})}function qr(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function Gd(e){return e>=1e9?(e/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":e>=1e6?Math.round(e/1e6)+" M€":Math.round(e/1e3)+" k€"}export{No as FlagCell,ht as SigBadge,Fa as SigWin,Qd as default,Gd as fmtShort,V as useV2};
;/* deploy-1788022750 */
