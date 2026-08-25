var oo=Object.defineProperty;var io=(e,a,r)=>a in e?oo(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var en=(e,a,r)=>io(e,typeof a!="symbol"?a+"":a,r);import{r as m,u as so,a as lo,b as co,R as Ot,L as po,j as t,C as tn,c as uo,d as mo,l as sa,o as Ht,i as ga,g as fo,e as xo,f as ho,h as an,k as nn,n as rn,m as on,p as go,q as bo,s as vo,t as yo,v as wo,S as Ia,w as ko,x as jo,y as Te,z as $a,A as at,B as it,D as No,E as So,F as Eo,G as Ae,H as $e,I as Co,J as sn,K as Ao,M as vt,N as nt,O as zo,P as Ba,Q as nr,T as To,U as ba,V as va,W as qo,X as Lo,Y as Ro,Z as _a,_ as ln,$ as cn,a0 as yt,a1 as ya,a2 as st,a3 as Je,a4 as Mo,a5 as Oo,a6 as dn,a7 as rr,a8 as Fo,a9 as Do,aa as Po,ab as or,ac as Io,ad as $o,ae as ht,af as Bo,ag as Lt,ah as _o,ai as Rt,aj as Uo,ak as Ua,al as Yt,am as pn,an as Vo,ao as Ho,ap as Wo,aq as Yo,ar as wa,as as Go,at as Ko,au as Qo,av as un,aw as Jo,ax as Xo,ay as Zo,az as ei,aA as ti,aB as ka,aC as ai,aD as mn,aE as ni,aF as ri,aG as oi,aH as fn,aI as ii,aJ as si,aK as xn,aL as li,aM as ci,aN as di,aO as pi,aP as ui,aQ as mi,aR as fi,aS as xi,aT as hi,aU as gi,aV as wt,aW as la,aX as bi,aY as vi,aZ as yi}from"./index-CMZkt8vz.js";const wi=({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:i,onInit:o,onPageChange:c,onSubmit:s})=>{const[d,x]=m.useState(!0),l=so({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:i});lo(l,{onInit:o,onPageChange:c,onSubmit:s});const[f,u]=m.useState();return co(l,"form_resized",b=>{const p=b.size;typeof p=="number"&&u(p)},{disabled:!i}),Ot.createElement("div",{className:"fillout-standard-embed",style:{height:i?typeof f=="number"?f:256:"100%",transition:i?"height 150ms ease":void 0}},d&&Ot.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},Ot.createElement(po,null)),l&&Ot.createElement("iframe",{src:l.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>x(!1),style:{width:d?0:"100%",height:d?0:"100%",opacity:d?0:1,borderRadius:10,border:0,minHeight:256}}))};function et(e){return(e||"").trim().toLowerCase()}function ki(e,a){const r=Math.max(60,a*60);return Math.max(2,Math.min(97,Math.round(e/r*100)))}function ji(e){const a=Math.max(0,Math.floor(e)),r=Math.floor(a/60),n=a%60;return r+":"+String(n).padStart(2,"0")}function Ni(e){const a=new Date(e);return String(a.getHours()).padStart(2,"0")+":"+String(a.getMinutes()).padStart(2,"0")}function Ct({item:e,serverOff:a,bootLbl:r,endLabel:n}){const[i,o]=m.useState(()=>Date.now()/1e3);if(m.useEffect(()=>{const f=window.setInterval(()=>o(Date.now()/1e3),1e3);return()=>window.clearInterval(f)},[]),e.status==="boot"||!(e.started>0))return t.jsxs("span",{className:"runtrack boot",children:[t.jsx("span",{className:"runchrono",children:r}),t.jsx("span",{className:"runbar",children:t.jsx("i",{className:"ind"})})]});if(e.status==="error")return t.jsx("span",{className:"runerr",children:e.error||"erreur"});if(e.status==="done")return t.jsx("span",{className:"rundone",children:"✓"});const c=i-a-e.started,s=e.estMin||15,d=s*60-c,x=ki(c,s),l=d>0&&n?" · "+n.replace("{t}",Ni((e.started+s*60+a)*1e3)):"";return t.jsxs("span",{className:"runtrack",children:[t.jsx("span",{className:"runchrono",children:"⏱ "+ji(c)+" · "+x+"%"+(d>0?" · ~"+Math.ceil(d/60)+" min":" · …")+l}),t.jsx("span",{className:"runbar",children:t.jsx("i",{style:{width:x+"%"}})})]})}function Si({items:e,serverOff:a,labels:r,onOpen:n}){const i=e.filter(o=>o.status!=="done"||Date.now()/1e3-(o.started||0)<1200);return i.length?t.jsxs("div",{className:"livestrip",role:"button",onClick:n,title:r.open,children:[t.jsx("span",{className:"ls-ico",children:"⚡"}),t.jsx("span",{className:"ls-lab",children:r.strip}),i.slice(0,6).map(o=>t.jsxs("span",{className:"ls-chip"+(o.status==="error"?" err":o.status==="done"?" done":""),children:[t.jsx("b",{children:o.name}),o.status==="done"&&o.url?t.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",onClick:c=>c.stopPropagation(),children:r.memo}):t.jsx(Ct,{item:o,serverOff:a,bootLbl:r.boot,endLabel:r.end})]},o.name)),i.length>6&&t.jsxs("span",{className:"ls-more",children:["+",i.length-6]}),t.jsxs("span",{className:"ls-go",children:[r.open," →"]})]}):null}const Ei={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Tout ce que STAN a passé au crible sur la fenêtre : chaque société évaluée selon vos critères, retenue ou écartée automatiquement.","STAN a retenu ces sociétés selon vos critères, décision justifiée. NOUS vérifions ses choix — écartez, validez, ou lancez une analyse sur les incertaines.","Les mémos de STAN, relus par NOUS : synergies chiffrées, verdict argumenté. Validez celles à contacter, mettez « à trancher » celles où vous hésitez.","À VOUS de jouer : les meilleures cibles, présentées le lundi par votre Corporate Developer. Tranchez OUI ou NON — vos oui passent en Validées.","Vos OUI — la short-list à contacter. NOUS préparons l’approche, ou l’engageons en votre nom (offre Entreprise).","Écartées par STAN ou par VOUS. Chaque NON affine les critères de Stan. Repêchez-en une à tout moment.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(e,a,r)=>`<b>${e} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${r} sans réponse.</b>`,morningThesis:(e,a,r)=>`Ce matin, <b>${e}</b> société${e===1?"":"s"} criblée${e===1?"":"s"} par vos moteurs`+(typeof r=="number"?`, <b>${r}</b> retenue${r===1?"":"s"}.`:".")+(a?` <b>${a}</b> attend${a>1?"ent":""} votre évaluation.`:' <span class="ok">Tout est évalué.</span>'),morningEnginesTitle:"Ces sociétés viennent UNIQUEMENT du sourcing de votre thèse : vos codes d’activité, vos pays, vos angles d’acquisition, vos critères d’exclusion. Aucune société d’un autre fonds n’entre ici. Seule la veille d’actualité part d’un ratissage commun pour des raisons de coût — mais chaque opération qui en sort est ensuite confrontée à vos critères, et n’entre dans votre page que si elle les passe.",morningLast:(e,a,r)=>`Dernier passage des moteurs le <b>${r}</b> : <b>${e}</b> société${e===1?"":"s"} sourcée${e===1?"":"s"}.`+(a?` <b>${a}</b> restante${a>1?"s":""} pas encore évaluée${a>1?"s":""}.`:' <span class="ok">Tout est évalué.</span>'),morningEval:e=>`▶ Les traiter (${e})`,identTitle:e=>`Cibles pour ${e}`,identCoverage:"COUVERTURE DU MARCHÉ",identCoverageOf:(e,a)=>`<b>${e}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"MOTEUR DE MÉMOS",identPerDay:"mémo/jour",identPending:e=>`→ ${e} en attente`,identPendingWait:"→ lecture de la file…",identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Inverser l’ordre de tri",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:e=>`Décision annulée sur ${e}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ OUI",actNo:"✗ NON",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:e=>`${e} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"CRIBLE · MÉMO",colCrible:"CRIBLE",colMemo:"MÉMO",colScore:"SCORE",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:e=>`Depuis le verdict de Stan : ${e} j`,waitChip:e=>`⏱ ${e} j`,densList:"LISTE",densOpen:"DÉPLIÉ",densLigne:"LIGNE",densMaxi:"MAXI",unfoldAll:"Tout déplier",foldAllLbl:"Tout replier",foldArts:"Articles seuls",doAll:"Tout",doEval:"⚡ Évaluables",doExplore:"🔎 À explorer",doTodo:"⚡ À évaluer",doDone:"✓ Déjà évaluées",cdMemoTab:"📖 Mémo",evalPickSite:"plusieurs sites portent ce nom — ouvrez pour vérifier, puis validez celui qui est le bon.",evalPickGo:"✓ C’est celui-ci",chainMemoGo:"⚡ Lancer le mémo (1 crédit)",analyseConfirm:e=>`Lancer ${e} mémo${e>1?"s":""} d’analyse ?

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
· Un mémo = **1 crédit**, une société à la fois : rien ne part jamais en lot.`,tourToday:"ce matin",tourNoRun:"aucun passage enregistré",tourT:{ident:"Le bandeau de votre fonds",cover:"Votre couverture du marché",engine:"Le moteur de mémos",live:"Le direct",goal:"Le dernier sourcing",funnel:"Le tunnel",tuto:"L’étape en cours",demand:"Évaluer une société",chips:"Les statuts, sur la ligne",dec:"Pourquoi cette décision",memo:"Le mémo détaillé",status:"Votre statut",learn:"Vos 👍 / 👎",tools:"Brancher vos outils",exportT:"Exporter en CSV",alerts:"Vos alertes email",crit:"Le paramétrage de Stan"},fhintExport:"Sortez vos cibles au format CSV — la sélection courante, avec ses colonnes, prête pour votre tableur ou votre CRM.",fhintAlerts:"Réglez ce qui vous arrive par email : le brief du matin, le bilan de la semaine, et l’alerte quand un mémo est prêt.",csLabel:"Votre statut :",csKept:"Retenu",csAnalysed:"Analysé",csPending:"À trancher",csValidated:"Validé",csOut:"Écarté",csYes:"✓ Oui",csNo:"✗ Non",csSaved:"✓ enreg.",csNoteSaved:"note ajoutée ✓",csNoteOk:"OK",csNotePh:"Pourquoi ? (une ligne)",csAnaConfirm:"Aucun mémo sur ce dossier — le passer en Analysé quand même ?",whySend:"Envoyer",whyYesPh:"Pourquoi ce OUI ? (une ligne — ça affine votre thèse)",whyNoPh:"Pourquoi ce NON ? (une ligne — ça affine votre thèse)",stgLabel:"Votre avancement :",stg:[["todo","○ À faire"],["sent","✉ Contactée"],["replied","💬 A répondu"],["meeting","🤝 RDV"],["loi","📄 LOI"],["signed","✅ Signée"],["lost","✖ Perdue"]],j4Badge:e=>`⏰ Sans réponse depuis ${e} j — relancer ?`,actRepeche:"↩ Repêcher",actErr:"Envoi impossible — réessayez dans un instant.",actNotPersisted:"Impossible d’enregistrer ce statut sur ce dossier.",decidedYes:e=>`${e} validée — place à l’approche`,decidedNo:e=>`${e} écartée`,repeched:e=>`${e} repêchée — de retour dans Retenues`,critHypTitle:"Notre hypothèse sur votre stratégie",critHypSub:"Toute la sélection en découle. Si elle est à côté, corrigez-la ci-dessous — la recherche est réalignée et vous recevez une sélection corrigée.",critProfilsTitle:"Vos profils de cibles",critProfilsSub:"Les familles de cibles que la machine traque en continu — chaque profil se déplie.",critLookFor:"Ce que nous recherchons",critRuleOut:"Ce que nous écartons",critGateTitle:"Le crible de Stan — comment il décide Retenu / Écarté",critGateSub:"Chaque société est confrontée à ces critères. C’est à eux que renvoient les « STEP A, C… » des raisons affichées sur les lignes.",rubricTitle:"Comment Stan décide l’analyse (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Une fois retenu, Stan approfondit et tranche. Voici ce qui fait pencher la balance.",qvTitle:"Les verdicts de Stan — où va chaque dossier",qv:[["CALL PENDING","le choix n°1 de Stan : à trancher OUI/NON maintenant → onglet « À trancher »."],["CALL YES","vous avez tranché OUI — le dossier rejoint « Validées », place à l’approche."],["CALL NO","vous avez tranché NON — le dossier rejoint « Écartées »."],["CONSIDER","solide, mérite un regard plus attentif → onglet « Analysées »."],["MONITOR","à surveiller, pas prioritaire pour l’instant → onglet « Analysées »."],["PASS","non pertinent pour le moment → onglet « Écartées »."]],brTitle:"Le routage automatique — où le verdict de Stan envoie chaque dossier",br:[["Retenu","MATCH — retenue au sourcing, mémo à venir → onglet « Retenues »"],["Analysé","CONSIDER · MONITOR — mémo fait, pas de call → onglet « Analysées »"],["À trancher","CALL PENDING — Stan propose un call, votre OUI/NON est attendu → onglet « À trancher »"],["Validé","CALL YES — vous avez tranché OUI → onglet « Validées »"],["Écarté","NO MATCH · PASS · CALL NO — refus de Stan, ou votre NON sur un call → onglet « Écartées »"]],brNote:"Un CALL passe par 3 états : CALL PENDING (le mémo est TERMINÉ, Stan propose le call — votre décision est en attente) › CALL YES (vous validez) › CALL NO (vous écartez). PENDING ne veut jamais dire « en cours d’analyse » : l’analyse est déjà faite.",vt:{MATCH:"MATCH — retenu : correspond à vos critères.","NO MATCH":"NO MATCH — écarté par vos critères.","CALL PENDING":"CALL — le choix n°1 de Stan : à trancher OUI/NON maintenant.","CALL YES":"CALL YES — vous avez tranché OUI : le dossier rejoint « Validées ».","CALL NO":"CALL NO — vous avez tranché NON : le dossier rejoint « Écartées ».",CONSIDER:"CONSIDER — solide, mérite un regard plus attentif.",MONITOR:"MONITOR — à surveiller, pas prioritaire pour l’instant.",PASS:"PASS — non pertinent pour le moment."},vKept:"Retenu",vOut:"Écarté",learnLine:"Comme sur Netflix, chaque 👍/👎 affine ce que Stan vous montre ensuite — vous jugez, il apprend.",learnLink:"Ajuster mes critères →",funnelHint:"Retrouvez ici toutes vos cibles sourcées automatiquement dans <b>évaluées</b> puis passez celles que vous souhaitez contacter dans <b>validées</b>.",fhintClose:"Masquer cette aide",queueTitle:"File de traitement",queueDone:(e,a)=>`<b>${e} / ${a}</b> mémos générés`,queueTomorrow:"À VENIR — ORDRE PROJETÉ, RECALCULÉ CHAQUE MATIN",queueToday:"ANALYSÉS AUJOURD’HUI",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugConfigured:"Configuré",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(e,a)=>`<b>${e}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:e=>`${e} passées au crible`,alertTitle:"🔔 Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"VOS ANGLES D’ACQUISITION",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarBusy:"🧬 Recherche…",similarNote:"Les retenues entrent dans votre liste au prochain rafraîchissement.",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:e=>`actualisée le ${e}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:e=>`actualisée le ${e}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:e=>`Onboarding lancé pour ${e} — suivez l’avancement dans le cockpit`,rsOpen:"🔎 Rechercher des sociétés à évaluer",rsUrlPh:"coller l’URL d’un article, d’une vidéo ou d’une note",rsTextPh:"Coller ici l’article complet",rsOr:"ou",rsGo:"🔎 Résumer et rechercher des sociétés",rsHint:"RÉSUMÉ · CARTE MENTALE · SOCIÉTÉS",rsRunning:"Lecture en cours…",rsRunningVid:"Transcription de la vidéo…",rsElapsed:e=>`${e} s`,rsNeed:"Collez une URL, ou le texte complet de l’article.",rsFound:e=>e?`${e} société${e>1?"s":""} trouvée${e>1?"s":""} dans ce contenu.`:"Aucune société nommée dans ce contenu.",rsLink:"Voir la page publiée ↗",rsPublishing:"Publication de la fiche…",rsPublishFail:"Fiche produite, page non publiée",rsTags:"TAGS",rsClose:"Fermer",rsMindmap:"CARTE MENTALE",rsSource:"Source ↗",rsSaving:"Enregistrement…",rsSaved:"✓ Enregistrée dans votre cockpit",rsSavedIn:e=>`✓ Enregistrée dans le carnet de ${e}`,rsSaveFail:"Fiche produite, NON enregistrée",rsArchOpen:e=>`voir les ${e} recherche${e>1?"s":""} déjà lancée${e>1?"s":""}`,rsArchTitle:"Recherches déjà lancées",rsArchBack:"← toutes les recherches",rsArchLoading:"Chargement…",rsArchEmpty:"Aucune recherche enregistrée pour l’instant.",rsArchGone:"Cette recherche n’est plus disponible.",rsRowCounts:(e,a)=>`${e} citée${e>1?"s":""} · ${a} à évaluer`,rsPub:"Publiée",rsPriv:"Non publiée",rsCited:"Sociétés citées",rsCitedHint:"Toutes les sociétés nommées dans ce contenu.",rsMatch:"Sociétés qui pourraient correspondre",rsMatchHint:"Suggérées à partir de la thèse du contenu — elles n’y sont pas forcément nommées.",rsEvalOne:"⚡ Évaluer",rsAddAll:e=>`＋ Ajouter les ${e} à la liste`,rsNoCompanies:"Aucune société dans ce contenu.",rsConclusion:"Ce que ça implique",rsCriteria:"Critères de sourcing",rsSources:"Pour creuser",groupEngine:"Moteur",groupNone:"Rien",browse:e=>`Parcourir les ${e}`,chainAll:e=>`Enchaîner les ${e}`,colCompany:"SOCIÉTÉ & DESCRIPTION",grpCount:(e,a)=>`${e} à envoyer sur ${a} sourcées`,emptyTab:"AUCUNE CIBLE DANS CET ONGLET",emptyScope:"AUCUNE SOCIÉTÉ DANS CE PÉRIMÈTRE",contWorld:"Monde",evalGoOn:e=>`⚡ Évaluer ${e}`,rowExtract:"🔎 Extraire les sociétés",toSendCtx:(e,a)=>`sur ${e} dans l'édition${a>0?` (${a} sans société identifiable)`:""}`,grpCard:"la carte du jour",edLabel:"dans l'édition du jour",edSplit:(e,a)=>`${e} évaluable${e!==1?"s":""} ⚡${a>0?` · ${a} à explorer 🔎`:""}`},Ci={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Everything STAN ran through the screen on this window: every company judged against your criteria, kept or discarded automatically.","STAN kept these companies against your criteria, decisions justified. WE verify its picks — discard, validate, or launch an analysis on the uncertain ones.","STAN’s memos, reviewed by US: quantified synergies, argued verdict. Validate the ones to contact, set “to decide” where you hesitate.","YOUR move: the best targets, presented on Monday by your Corporate Developer. Call YES or NO — your yeses move to Validated.","Your YESES — the shortlist to contact. WE prepare the approach, or engage it on your behalf (Enterprise plan).","Discarded by STAN or by YOU. Every NO sharpens Stan’s criteria. Recover one anytime.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(e,a,r)=>`<b>${e} Stan CALL${e>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${r} awaiting answer.</b>`,morningThesis:(e,a,r)=>`This morning, <b>${e}</b> compan${e===1?"y":"ies"} screened by your engines`+(typeof r=="number"?`, <b>${r}</b> kept.`:".")+(a?` <b>${a}</b> awaiting your evaluation.`:' <span class="ok">All screened.</span>'),morningEnginesTitle:"Your engines are tuned to YOUR thesis: activity codes, countries, acquisition angles, exclusion criteria. Only the news watch starts from a sweep shared across funds — but every deal it surfaces is then screened against your criteria, and only enters here if it passes.",morningLast:(e,a,r)=>`Engines last ran on <b>${r}</b>: <b>${e}</b> compan${e===1?"y":"ies"} sourced.`+(a?` <b>${a}</b> still to screen.`:' <span class="ok">All screened.</span>'),morningEval:e=>`▶ Work through them (${e})`,identTitle:e=>`Targets for ${e}`,identCoverage:"MARKET COVERAGE",identCoverageOf:(e,a)=>`<b>${e}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"MEMO ENGINE",identPerDay:"memo/day",identPending:e=>`→ ${e} queued`,identPendingWait:"→ reading the queue…",identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Reverse sort order",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:e=>`Decision undone on ${e}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ YES",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:e=>`${e} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"SCREEN · MEMO",colCrible:"SCREEN",colMemo:"MEMO",colScore:"SCORE",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:e=>`Since Stan’s verdict: ${e} d`,waitChip:e=>`⏱ ${e} d`,densList:"LIST",densOpen:"OPEN",densLigne:"ROWS",densMaxi:"CARDS",unfoldAll:"Unfold all",foldAllLbl:"Fold all",foldArts:"Articles only",doAll:"All",doEval:"⚡ Evaluable",doExplore:"🔎 To explore",doTodo:"⚡ To evaluate",doDone:"✓ Already evaluated",cdMemoTab:"📖 Memo",evalPickSite:"several sites share this name — open to check, then confirm the right one.",evalPickGo:"✓ This one",chainMemoGo:"⚡ Launch the memo (1 credit)",analyseConfirm:e=>`Launch ${e} analysis memo${e>1?"s":""}?

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
· One memo = **1 credit**, one company at a time: nothing ever goes out in bulk.`,tourToday:"this morning",tourNoRun:"no run recorded",tourT:{ident:"Your fund’s header",cover:"Your market coverage",engine:"The memo engine",live:"Live",goal:"The last sourcing",funnel:"The funnel",tuto:"The current step",demand:"Evaluate a company",chips:"Statuses, on the row",dec:"Why this decision",memo:"The detailed memo",status:"Your status",learn:"Your 👍 / 👎",tools:"Connect your tools",exportT:"Export to CSV",alerts:"Your email alerts",crit:"Stan’s settings"},fhintExport:"Take your targets out as CSV — the current selection with its columns, ready for your spreadsheet or CRM.",fhintAlerts:"Set what reaches your inbox: the morning brief, the weekly recap, and the alert when a memo is ready.",csLabel:"Your status:",csKept:"Kept",csAnalysed:"Analysed",csPending:"To decide",csValidated:"Validated",csOut:"Ruled out",csYes:"✓ Yes",csNo:"✗ No",csSaved:"✓ saved",csNoteSaved:"note added ✓",csNoteOk:"OK",csNotePh:"Why? (one line)",csAnaConfirm:"No memo on this file — mark it Analysed anyway?",whySend:"Send",whyYesPh:"Why this YES? (one line — it sharpens your thesis)",whyNoPh:"Why this NO? (one line — it sharpens your thesis)",stgLabel:"Your progress:",stg:[["todo","○ To do"],["sent","✉ Contacted"],["replied","💬 Replied"],["meeting","🤝 Meeting"],["loi","📄 LOI"],["signed","✅ Signed"],["lost","✖ Lost"]],j4Badge:e=>`⏰ No reply for ${e} days — follow up?`,actRepeche:"↩ Recover",actErr:"Could not save — try again in a moment.",actNotPersisted:"This status cannot be saved on this record.",decidedYes:e=>`${e} validated — on to the approach`,decidedNo:e=>`${e} ruled out`,repeched:e=>`${e} recovered — back in Kept`,critHypTitle:"Our hypothesis about your strategy",critHypSub:"The whole selection follows from it. If it is off, correct it below — the search is realigned and you get a corrected selection.",critProfilsTitle:"Your target profiles",critProfilsSub:"The families of targets the machine tracks continuously — each profile unfolds.",critLookFor:"What we look for",critRuleOut:"What we rule out",critGateTitle:"Stan’s screen — how it decides Kept / Ruled out",critGateSub:"Every company is checked against these criteria. They are what the “STEP A, C…” in the reasons on each row refer to.",rubricTitle:"How Stan decides the analysis (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Once kept, Stan digs deeper and rules. Here’s what tips the balance.",qvTitle:"Stan’s verdicts — where each file goes",qv:[["CALL PENDING","Stan’s top pick: decide YES/NO now → “To decide” tab."],["CALL YES","you decided YES — the file joins “Validated”, on to the approach."],["CALL NO","you decided NO — the file joins “Ruled out”."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],brTitle:"Automatic routing — where Stan’s verdict sends each file",br:[["Kept","MATCH — kept at sourcing, memo to come → “Kept” tab"],["Analysed","CONSIDER · MONITOR — memo done, no call → “Analysed” tab"],["To decide","CALL PENDING — Stan proposes a call, your YES/NO is awaited → “To decide” tab"],["Validated","CALL YES — you ruled YES → “Validated” tab"],["Ruled out","NO MATCH · PASS · CALL NO — Stan’s refusal, or your NO on a call → “Ruled out” tab"]],brNote:"A CALL goes through 3 states: CALL PENDING (the memo is DONE, Stan proposes the call — your decision is awaited) › CALL YES (you validate) › CALL NO (you rule out). PENDING never means “being analysed”: the analysis is already done.",vt:{MATCH:"MATCH — kept: it fits your criteria.","NO MATCH":"NO MATCH — ruled out by your criteria.","CALL PENDING":"CALL — Stan’s top pick: worth a YES/NO decision now.","CALL YES":"CALL YES — you ruled YES: the file joins “Validated”.","CALL NO":"CALL NO — you ruled NO: the file joins “Ruled out”.",CONSIDER:"CONSIDER — solid, worth a closer look.",MONITOR:"MONITOR — keep an eye on it, not a priority yet.",PASS:"PASS — not relevant right now."},vKept:"Kept",vOut:"Ruled out",learnLine:"Like Netflix, every 👍/👎 sharpens what Stan shows you next — you judge, it learns.",learnLink:"Tune my criteria →",funnelHint:"Find here all your automatically sourced targets in <b>evaluated</b>, then move the ones you want to contact into <b>validated</b>.",fhintClose:"Hide this hint",queueTitle:"Processing queue",queueDone:(e,a)=>`<b>${e} / ${a}</b> memos generated`,queueTomorrow:"UP NEXT — PROJECTED ORDER, RECOMPUTED EVERY MORNING",queueToday:"ANALYZED TODAY",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugConfigured:"Configured",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(e,a)=>`<b>${e}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:e=>`${e} screened`,alertTitle:"🔔 Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"YOUR ACQUISITION ANGLES",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarBusy:"🧬 Searching…",similarNote:"The kept ones enter your list at the next refresh.",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:e=>`updated ${e}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:e=>`updated ${e}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:e=>`Onboarding launched for ${e} — track progress in the cockpit`,rsOpen:"🔎 Find companies to evaluate",rsUrlPh:"paste the URL of an article, a video or a note",rsTextPh:"Paste the full article here",rsOr:"or",rsGo:"🔎 Summarize and find companies",rsHint:"SUMMARY · MIND MAP · COMPANIES",rsRunning:"Reading…",rsRunningVid:"Transcribing the video…",rsElapsed:e=>`${e}s`,rsNeed:"Paste a URL, or the full text of the article.",rsFound:e=>e?`${e} compan${e>1?"ies":"y"} found in this content.`:"No company named in this content.",rsLink:"See the published page ↗",rsPublishing:"Publishing the note…",rsPublishFail:"Note produced, page not published",rsTags:"TAGS",rsClose:"Close",rsMindmap:"MIND MAP",rsSource:"Source ↗",rsSaving:"Saving…",rsSaved:"✓ Saved to your cockpit",rsSavedIn:e=>`✓ Saved to ${e}'s notebook`,rsSaveFail:"Note produced, NOT saved",rsArchOpen:e=>`see the ${e} research run${e>1?"s":""} already launched`,rsArchTitle:"Research already launched",rsArchBack:"← all research runs",rsArchLoading:"Loading…",rsArchEmpty:"No research saved yet.",rsArchGone:"This research is no longer available.",rsRowCounts:(e,a)=>`${e} mentioned · ${a} to evaluate`,rsPub:"Published",rsPriv:"Not published",rsCited:"Companies mentioned",rsCitedHint:"Every company named in this content.",rsMatch:"Companies that could match",rsMatchHint:"Suggested from the content’s thesis — they are not necessarily named in it.",rsEvalOne:"⚡ Evaluate",rsAddAll:e=>`＋ Add all ${e} to the list`,rsNoCompanies:"No company in this content.",rsConclusion:"What it implies",rsCriteria:"Sourcing criteria",rsSources:"Dig deeper",groupEngine:"Engine",groupNone:"None",browse:e=>`Browse the ${e}`,chainAll:e=>`Chain the ${e}`,colCompany:"COMPANY & DESCRIPTION",grpCount:(e,a)=>`${e} to send out of ${a} sourced`,emptyTab:"NO TARGET IN THIS TAB",emptyScope:"NO COMPANY IN THIS SCOPE",contWorld:"World",evalGoOn:e=>`⚡ Evaluate ${e}`,rowExtract:"🔎 Extract companies",toSendCtx:(e,a)=>`of ${e} in the edition${a>0?` (${a} without an identifiable company)`:""}`,grpCard:"today's card",edLabel:"in today's edition",edSplit:(e,a)=>`${e} evaluable ⚡${a>0?` · ${a} to explore 🔎`:""}`},Ai={fr:{...tn.fr,...Ei},en:{...tn.en,...Ci}},zi=`.atl2{
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
.atl2 .bulk .side .hint{white-space:nowrap}`,Ti=`
/* coque : hauteur pilotée par le montage (page /carte, iframe onglet ⑤, démo home) */
.atl2{height:var(--atelier-h,calc(100dvh - 60px));display:block;position:relative;overflow:hidden;border-radius:inherit}
.atl2 .app{height:100%}
/* ── LA BARRE D'APERÇU EN HAUT, COLLANTE (17/08). Elle vivait en bas de page,
   dernier enfant : la déplacer en premier enfant est la moitié du correctif,
   l'autre moitié est ici. Le conteneur devient une colonne flex pour que la
   barre garde sa hauteur et que le cockpit prenne le reste. Rang 40 :
   au-dessus de la carte, qui monte à 20. */
.atl2:has(> .lockbar.on){display:flex;flex-direction:column}
.atl2:has(> .lockbar.on) .app{flex:1 1 auto;min-height:0;height:auto}
/* ⚠️ ELLE COLLE SOUS LA NAV, PAS À top:0. Mesuré : la barre collait bien
   (top 0 après 700 px de défilement) — mais la navigation du site, collée au
   même endroit, la RECOUVRAIT : du point de vue d'Antoine elle « n'était pas
   sticky », alors qu'elle était juste invisible. La nav occupe 68 px, 26 quand
   elle est repliée. */
.atl2 .lockbar{position:sticky;top:var(--pp-gap,60px);bottom:auto;z-index:40;
  flex-wrap:wrap;box-shadow:none;margin:0;border-radius:0}
body.pp-navfold .atl2 .lockbar{top:26px}
@media (max-width:760px){.atl2 .lockbar{top:48px}}
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
.atl2:has(> .lockbar.on) .listhead{top:calc(var(--pp-gap,60px) + 44px)}
.atl2 .sigstrip,.atl2 .since{position:relative;z-index:26}
body.pp-navfold .atl2 .listhead{top:26px}
body.pp-navfold .atl2:has(> .lockbar.on) .listhead{top:70px}
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
.atl2.ops .desk{flex:1 1 auto;min-height:0;display:grid;
  grid-template-columns:minmax(380px,1fr) minmax(340px,42%);
  align-items:stretch;border-top:1px solid var(--line);background:var(--panel)}
.atl2.ops .desk-list{min-width:0;min-height:0;display:flex;flex-direction:column}
.atl2.ops .desk-list .list{flex:1 1 auto;min-height:0;overflow-y:auto;
  overscroll-behavior:contain}
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
.atl2.ops .row.sel,.atl2.ops .row.sel.on{background:#EAF6EF;
  box-shadow:inset 3px 0 0 var(--brand,#0E8A4F)}
.atl2.ops .row.sel .rnm{font-weight:700}
.atl2.ops .readpane{min-width:0;min-height:0;overflow-y:auto;overscroll-behavior:contain;
  background:#F7F9FB;border-left:1px solid var(--line)}
.atl2.ops .readpane .card.ops-open{display:flex!important;flex-direction:column;
  grid-template-columns:none;justify-content:stretch;gap:0;
  padding:28px 32px 40px;background:transparent;border-bottom:0}
.atl2.ops .readpane .oc-main{max-width:68ch}
.atl2.ops .readpane .oc-side{margin-top:22px;max-width:340px}
.atl2.ops .readpane-empty{margin:48px 32px;font-size:14.5px;line-height:1.55;color:#64748B;
  max-width:32ch}
/* carte plus basse sur LIVE : la liste+lecture gardent la main */
.atl2.ops .mapzone{height:240px;min-height:240px;max-height:240px}
.atl2.ops .mapzone svg{height:240px!important;max-height:240px!important}
@media (min-height:960px){
  .atl2.ops .mapzone{height:280px;min-height:280px;max-height:280px}
  .atl2.ops .mapzone svg{height:280px!important;max-height:280px!important}}
@media (min-width:1400px){
  .atl2.ops .mapzone{height:260px;min-height:260px;max-height:260px}
  .atl2.ops .mapzone svg{height:260px!important;max-height:260px!important}}
@media (min-width:1400px) and (min-height:960px){
  .atl2.ops .mapzone{height:300px;min-height:300px;max-height:300px}
  .atl2.ops .mapzone svg{height:300px!important;max-height:300px!important}}
@media (max-width:1000px){
  .atl2.ops .desk{grid-template-columns:1fr;grid-template-rows:minmax(220px,1fr) minmax(280px,46%)}
  .atl2.ops .readpane{border-left:0;border-top:1px solid var(--line)}
  .atl2.ops .readpane .card.ops-open{padding:20px 18px 28px}}
/* 📖 sur une ligne : un décryptage éditorial à creuser (clic = dépli) */
.atl2 .nd .rdec{flex:none;font-size:12px;line-height:1;opacity:.85;cursor:help}
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
.atl2:has(> .lockbar.on) .app:has(.stage.folded) .listhead{
  top:calc(var(--pp-gap,60px) + 44px)}
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
.atl2 .listhead.mapoff .ctx{flex:1 1 auto;min-width:0}
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
.atl2 .doable .dolist{position:absolute;z-index:60;top:calc(100% + 5px);right:0;
  display:flex;flex-direction:column;gap:2px;min-width:170px;padding:4px;
  background:#fff;border:1px solid var(--line);border-radius:8px;
  box-shadow:0 14px 34px -18px rgba(15,23,42,.55)}
.atl2 .doable .dolist button{width:100%;text-align:left;border-color:transparent}
.atl2 .doable .dolist button[aria-pressed=true]{color:var(--brand-d);
  border-color:var(--brand);background:var(--brand-l)}
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
   --p0…--pf, plus de teinte maison. Texte via --tc (encre ou blanc). */
.atl2 .tuto{background:var(--bg)}
.atl2 .tuto.mini p,.atl2 .tuto p{color:var(--tc,var(--ink))!important}
.atl2 .tuto.mini p b,.atl2 .tuto p b{color:inherit}
.atl2 .tuto.on-dark .tprim{background:#fff;color:var(--ink)}
.atl2 .tuto.on-dark .tprim:hover{filter:brightness(.96)}

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
}
`,qi=zi+Ti;function ja(e){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(e)||""}catch{return""}}function Li(){const e=ja("teaser");if(e==="0"||e==="1")return e;try{if(typeof window<"u"&&window.parent&&window.parent!==window){const a=new URL(window.parent.location.href).searchParams.get("teaser");if(a==="0"||a==="1")return a;if(/\/cibles\/[^/]+\/open\/?$/i.test(window.parent.location.pathname||""))return"0"}}catch{}return""}function Ri(e,a){if(e||a.mode!=="client"||!a.token)return"visiteur";const r=Li();return r==="0"?"client":r==="1"||ja("embed")==="1"&&ja("chrome")==="1"?"apercu":"client"}const Mi={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0,showMorning:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0}},Oi=e=>Mi[e];function ir(e){const a=(e||"").trim();return a.length<3?!1:!!(/^[^\p{L}(]/u.test(a)||/[:—]\s|…|\.{3}/.test(a)||a.split(/\s+/).length>=3&&/\b(icymi|round-?up|wrap|weekly|podcast|interview|what|why|how|biggest|watch|inside|according)\b/i.test(a))}const rt=e=>{if(e.noCo===void 0){const a=(e.name||"").trim();(!ga(a)||ir(a))&&(e.noCo=!0)}return Object.assign(e,{continent:ko(e.cc)})};function ca(e){const a=new Set,r=[];for(const n of e){const i=(n.name||"").toLowerCase();!i||a.has(i)||(a.add(i),r.push(n))}return r}const Fi=60*60*1e3;function Di(e){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+e)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>Fi?null:a}catch{return null}}function Ft(e,a){try{sessionStorage.setItem("ppmap:swr:"+e,JSON.stringify({...a,ts:Date.now()}))}catch{}}const Pi=e=>e==="default"?"":e==="ops"?"ops":"research:"+e.research;function Ii(e,a,r="default"){const n=r!=="default",i=m.useMemo(()=>e||n?{mode:"anon"}:uo(),[e,n]),o=m.useMemo(()=>n?"visiteur":Ri(e,i),[e,i,n]),c=m.useMemo(()=>Oi(o),[o]),s=o!=="visiteur",d=Pi(r),[x,l]=m.useState([]),[f,u]=m.useState(""),[b,p]=m.useState(null),[g,v]=m.useState(null),[h,N]=m.useState(null),[E,y]=m.useState(()=>new Map),[z,L]=m.useState(()=>new Map),[T,S]=m.useState(""),[C,j]=m.useState(new Set),[M,P]=m.useState(null),[q,w]=m.useState(!0),[A,O]=m.useState(!1),[U,W]=m.useState(0),[H,Q]=m.useState(0),B=m.useRef(0),Y=m.useMemo(()=>{var ne;if(o!=="client")return"";try{return((ne=mo())==null?void 0:ne.email)||""}catch{return""}},[o]);m.useEffect(()=>{const ne=++B.current;let Ee=!0;const je=()=>Ee&&ne===B.current,be=(s&&i.token?i.token:"pub:"+a)+(d?":"+d:""),ee=Di(be);return ee?(l(ee.objs.map(rt)),ee.fund&&u(ee.fund),p(ee.marketEstimate??null),v(ee.criteria??null),N(ee.stats??null),S(ee.generatedAt||""),w(!1)):w(!0),(async()=>{try{if(r==="ops"){const ce=await sa(),G=((ce==null?void 0:ce.recent_ops)||[]).map(_=>{const X=Ht(_.company_name||_.title?_:{..._,title:(_.headline_fr||_.headline||"").slice(0,120)},a),fe=String(_.rubrique||"").toLowerCase();return X&&(fe==="nominations"||fe==="recrutements")&&(X.engine=fe),X&&!String(_.company_name||"").trim()&&(X.noCo=!0),X}).filter(_=>!!_).map(_=>(ga((_.name||"").trim())||(_.noCo=!0),_));try{const _=fo(),X=_&&_.doc||await xo(),fe=ho(X),re=((_==null?void 0:_.day)||(X==null?void 0:X.date)||"").slice(0,10);if(fe.length&&re){const we=new Set;for(const J of G){if(J.noCo||(J.date||"").slice(0,10)!==re)continue;const de=an(fe,we,J.name,"");de>=0&&(we.add(de),J.decryptHtml=fe[de].html)}for(const J of G){if(J.decryptHtml||(J.date||"").slice(0,10)!==re)continue;const de=an(fe,we,"",J.headline||J.tagline||J.name);de>=0&&(we.add(de),J.decryptHtml=fe[de].html)}fe.forEach((J,de)=>{if(we.has(de))return;const ze=(J.t||"").trim(),ve=ze.split(/[:–—]/)[0].trim().slice(0,80)||ze.slice(0,40);if(!ve)return;const xe=ze+" "+J.html,Fe=/\b(acquiert|rachat|rachet|fusion|buyout|offre sur)\b/i.test(xe),pe=/\b(l[eè]ve|lev[ée]e|raises?|funding|s[eé]rie [a-z]|series [a-z])\b/i.test(xe);G.push({id:`edito:${re}:${de}`,kind:"op",name:ve,cc:null,date:re,engine:Fe?"ma":pe?"fundraising":"media",dealKind:Fe?"ma":pe?"levee":"other",headline:ze,decryptHtml:J.html,noCo:!ga(ve)||ir(ve)})})}}catch{}if(!je())return;l(G.map(rt)),Ft(be,{objs:G})}else if(typeof r=="object"){const G=(await nn()||[]).filter(X=>(X.slug||"")===r.research).map(X=>rn(X,a)).filter(X=>!!X),_=ca(await on(G,a));if(!je())return;l(_.map(rt)),Ft(be,{objs:_})}else if(s&&i.token){const ce=go(i.token),G=sa(),_=bo(i.token),X=vo(i.token),fe=yo(i.token),re=await ce;let we=re?re.targets:[];je()&&re&&(u(re.fund||""),p(re.marketEstimate??null),v(re.criteria??null),N(re.stats??null),S(re.generatedAt||""),l(we.map(rt)),w(!1),O(!1));const[J,de,ze,ve]=await Promise.all([G,_,X,fe]),xe=((J==null?void 0:J.recent_ops)||[]).map(pe=>Ht(pe,a)).filter(pe=>!!pe);if(we=[...we,...xe],!je())return;l(we.map(rt));const Fe=new Set;for(const pe of de){const De=(pe.id||pe.co||"").toString().trim().toLowerCase();De&&Fe.add(De.startsWith("t:")?De:"t:"+De)}j(Fe),y(ze),L(ve),re&&Ft(be,{fund:re.fund,marketEstimate:re.marketEstimate,criteria:re.criteria,stats:re.stats,generatedAt:re.generatedAt,objs:we})}else{const ce=wo(),G=nn(),_=sa(),X=await ce;je()&&X.length&&(l(ca(X).map(rt)),w(!1),O(!1));const[fe,re]=await Promise.all([G,_]),we=(fe||[]).map(ve=>rn(ve,a)).filter(ve=>!!ve),J=await on(we,a),de=((re==null?void 0:re.recent_ops)||[]).map(ve=>Ht(ve,a)).filter(ve=>!!ve),ze=ca([...X,...J,...de]);if(!je())return;l(ze.map(rt)),Ft(be,{objs:ze})}je()&&O(!1)}catch{je()&&!ee&&O(!0)}finally{je()&&w(!1)}})(),()=>{Ee=!1}},[s,i.token,a,U,d]),m.useEffect(()=>{if(!c.showCredits||!Y){P(null);return}let ne=!0;return(async()=>{try{const Ee=await fetch(`${Ia}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:Y})});if(!Ee.ok)return;const je=await Ee.json();ne&&je&&je.ok!==!1&&P(je)}catch{}})(),()=>{ne=!1}},[c.showCredits,Y,H]);const ae=m.useCallback(ne=>j(new Set(ne)),[]);return{session:i,mode:o,caps:c,fund:f,email:Y,marketEstimate:b,generatedAt:T,criteria:g,stats:h,thumbs:E,stages:z,dossiers:x,favIds:C,setFavIds:ae,credits:M,reloadCredits:()=>Q(ne=>ne+1),loading:q,error:A,refresh:()=>W(ne=>ne+1)}}const sr=()=>({win:"all",day:"",status:"all",signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],acquirer:"",search:""}),$i=(e="europe",a=!1,r)=>({continent:e,ptab:(r==null?void 0:r.ptab)??1,dens:(r==null?void 0:r.dens)??"ligne",filters:{...sr(),...(r==null?void 0:r.filters)||{}},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,modal:(r==null?void 0:r.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,memoTab:0,undo:[],mapFolded:a}),Bi=new Set(["signal","amount","score","crible","memo"]);function _i(e,a){switch(a.type){case"continent":return{...e,continent:a.key,filters:{...e.filters,country:[]},shown:{},popupId:null,openFacet:null};case"ptab":return{...e,ptab:a.tab,shown:{},popupId:null};case"dens":return{...e,dens:a.dens,shown:{}};case"filters":return{...e,filters:{...e.filters,...a.patch},shown:{}};case"toggleFacet":{const r=e.filters[a.facet],n=r.includes(a.value)?r.filter(i=>i!==a.value):[...r,a.value];return{...e,filters:{...e.filters,[a.facet]:n},shown:{}}}case"toggleMemoLevel":{const r=e.filters.memoLevel,n=r.includes(a.value)?r.filter(i=>i!==a.value):[...r,a.value];return{...e,filters:{...e.filters,memoLevel:n},shown:{}}}case"acquirer":return{...e,filters:{...e.filters,acquirer:a.value,day:"",win:"all"},shown:{}};case"clearFacet":return{...e,filters:{...e.filters,[a.facet]:[]},shown:{}};case"reset":return{...e,filters:sr(),shown:{},openFacet:null};case"sort":return{...e,sort:e.sort.key===a.key?{key:a.key,dir:e.sort.dir*-1}:{key:a.key,dir:Bi.has(a.key)?-1:1}};case"groupBy":return{...e,groupBy:a.groupBy};case"more":return{...e,shown:{...e.shown,[a.group]:(e.shown[a.group]??a.base??lr)+a.by}};case"pile":return{...e,pileMode:a.on,popupId:null};case"openFacet":return{...e,openFacet:e.openFacet===a.facet?null:a.facet};case"popup":return{...e,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"modal":return{...e,modal:a.modal,popupId:a.modal?null:e.popupId};case"chainStart":return{...e,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...e,chain:{...e.chain,idx:e.chain.idx+1}};case"spaceTab":return{...e,spaceTab:a.tab};case"memoConsole":return{...e,memoConsole:a.id,memoTab:0};case"memoTab":return{...e,memoTab:a.tab};case"undoPush":return{...e,undo:[...e.undo,a.entry].slice(-50)};case"undoPop":return{...e,undo:e.undo.slice(0,-1)};case"mapFold":return{...e,mapFolded:a.folded,openFacet:null};default:return e}}const lr=40;function Va(e,a,r,n){if(n!=="signal"&&a.signalOnly&&(!Te(e)||a.signalEngines.length&&!a.signalEngines.includes(e.engine||""))||n!=="dealKind"&&a.dealKind.length&&!a.dealKind.includes(e.dealKind||"")||n!=="sector"&&a.sector.length&&!a.sector.includes(e.sector||"")||n!=="acquirer"&&a.acquirer.trim()&&(e.acquirer||"").trim().toLowerCase()!==a.acquirer.trim().toLowerCase()||n!=="engine"&&a.engine.length&&!a.engine.includes(e.engine||"")||n!=="stage"&&a.stage.length&&!a.stage.includes(e.stage||"")||n!=="angle"&&r&&a.angle.length&&!a.angle.includes(e.angle||"")||n!=="memoLevel"&&r&&a.memoLevel.length&&!a.memoLevel.includes($a(e)))return!1;if(n!=="win"){if(a.day){if((e.date||"").slice(0,10)!==a.day)return!1}else if(a.win!=="all"){const i=a.win==="1"?0:a.win==="7"?7:30;if(at(e.date)>i)return!1}}if(n!=="status"&&!r&&a.status!=="all"&&it(e)!==a.status)return!1;if(n!=="search"&&a.search.trim()){const i=a.search.trim().toLowerCase();if(!`${e.name||""} ${e.tagline||""} ${e.sector||""} ${e.acquirer||""}`.toLowerCase().includes(i))return!1}return!0}function cr(e,a,r){return a.continent!=="monde"&&e.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(e.cc||"")?!1:Va(e,a.filters,r)}function Ui(e,a,r,n){return!(!cr(e,a,r)||r&&!jo(e,a.ptab,n))}function Ha(e,a){const r=a.key,n=i=>{switch(r){case"name":return(i.name||"").toLowerCase();case"country":return i.countryLabel||i.cc||"";case"stage":return i.stage||"";case"amount":return i.amountEur||-1;case"age":return-at(i.date);case"score":return typeof i.score=="number"?i.score:-1;case"crible":return So(i);case"memo":return No(i);case"signal":{const o=Te(i);return o?100-(o.left??0):-1}}};return[...e].sort((i,o)=>{const c=n(i),s=n(o);return c<s?-a.dir:c>s?a.dir:(i.name||"").localeCompare(o.name||"")})}const da={},hn=(da==null?void 0:da.VITE_API_BASE)||"https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function gn(){return new Date().toISOString().slice(0,10)}const Wa=m.createContext(null);function dr(){return m.useContext(Wa)}function Vi(e){if(!e||typeof DOMParser>"u")return[];const a=[];try{const r=new DOMParser().parseFromString(e,"text/html");for(const n of[...r.querySelectorAll("p")]){if((n.textContent||"").replace(/\s+/g," ").trim().length<40)continue;const o=n.querySelector("strong,b"),c=((o==null?void 0:o.textContent)||"").replace(/\s+/g," ").trim();if(!c||c.length<2||c.length>60)continue;const s=n.cloneNode(!0);s.querySelectorAll("script,style,iframe").forEach(d=>d.remove()),s.querySelectorAll("*").forEach(d=>{const x=d.tagName==="A"?d.getAttribute("href"):null;[...d.attributes].forEach(l=>d.removeAttribute(l.name)),x&&/^https?:\/\//i.test(x)&&(d.setAttribute("href",x),d.setAttribute("target","_blank"),d.setAttribute("rel","nofollow noopener"))}),a.push({t:c.toLowerCase(),html:s.outerHTML})}}catch{}return a}function bn(e,a=!1){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||"");if(!r)return e;const o=(a?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||"",c=String(Number(r[3]));return a?`${o} ${c}, ${r[1]}`:`${c==="1"?"1ᵉʳ":c} ${o} ${r[1]}`}function pr(){const e=m.useContext(Wa);if(!e)throw new Error("ThesisEdition* must be under ThesisEditionProvider");return e}function Hi({token:e,children:a}){const{dispatch:r,st:n,lang:i}=I(),[o,c]=m.useState(()=>n.filters.day||gn()),[s,d]=m.useState(null),[x,l]=m.useState(!1),f=m.useCallback(g=>{if(/^\d{4}-\d{2}-\d{2}$/.test(g)){c(g);try{r({type:"filters",patch:{day:g,win:"all"}})}catch{}}},[r]),u=m.useCallback(()=>{c(gn());try{r({type:"filters",patch:{day:"",win:"7"}})}catch{}},[r]);m.useEffect(()=>{if(!n.filters.day)try{r({type:"filters",patch:{day:"",win:"7"}})}catch{}},[]),m.useEffect(()=>{const g=v=>{var N;const h=(N=v.detail)==null?void 0:N.day;typeof h=="string"&&f(h)};return window.addEventListener("pp-edition-day",g),()=>window.removeEventListener("pp-edition-day",g)},[f]),m.useEffect(()=>{n.filters.day&&n.filters.day!==o&&c(n.filters.day)},[n.filters.day]),m.useEffect(()=>{if(!e||!o)return;let g=!1;l(!0);const v=new URLSearchParams({token:e,date:o});return fetch(`${hn}/cibles/edition.json?${v}`).then(h=>h.json()).then(h=>{g||d(h)}).catch(()=>{g||d({ok:!1,error:"network"})}).finally(()=>{g||l(!1)}),()=>{g=!0}},[e,o]);const b=m.useMemo(()=>`${hn}/cibles/editions.json?token=${encodeURIComponent(e)}`,[e]),p=m.useMemo(()=>({token:e,day:o,ed:s,loading:x,pickDay:f,pickWindow:u,dayPicked:!!n.filters.day,daysUrl:b,isEn:i==="en"}),[e,o,s,x,f,u,n.filters.day,b,i]);return t.jsx(Wa.Provider,{value:p,children:a})}function Wi(){const{day:e,daysUrl:a,pickDay:r,dayPicked:n}=pr(),[i,o]=m.useState(n);return m.useEffect(()=>{n&&o(!0)},[n]),t.jsxs("div",{className:"thesis-days",children:[t.jsx("style",{children:`
        .thesis-days{margin:0;padding:0 12px 2px;background:#0B1220;border:none}
        .thesis-days .tdtog{display:flex;align-items:center;gap:7px;width:100%;
          background:none;border:0;cursor:pointer;padding:5px 2px;
          font-family:ui-monospace,monospace;font-size:9.5px;letter-spacing:.12em;
          text-transform:uppercase;color:#7E8CA0}
        .thesis-days .tdtog:hover{color:#C7D5E5}
        .thesis-days .tdtog i{font-style:normal}
      `}),t.jsxs("button",{type:"button",className:"tdtog","aria-expanded":i,onClick:()=>o(c=>!c),children:[t.jsx("i",{children:i?"▾":"▸"}),i?"Masquer les dates":"Voir les autres jours"]}),i&&t.jsx(Eo,{mode:"local",theme:"dark",month:e.slice(0,7),current:e,windowDays:n?0:7,daysUrl:a,onPick:r})]})}function Yi(){const{day:e,ed:a,loading:r,pickWindow:n,dayPicked:i,isEn:o}=pr(),c=!!(a!=null&&a.ok&&(a.html||a.acquirers_html)),s=(a==null?void 0:a.ok)&&!c,d=a&&!a.ok;return t.jsxs("section",{className:"thesis-brief","data-day":(a==null?void 0:a.date)||e,"data-fund":(a==null?void 0:a.fund)||"",children:[t.jsx("style",{children:`
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
      `}),t.jsxs("header",{className:"thesis-brief__hd",children:[t.jsx("span",{className:"thesis-brief__kicker",children:o?"Daily brief":"Brief du jour"}),t.jsxs("h2",{className:"thesis-brief__title",children:[o?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",(a==null?void 0:a.count)!=null&&a.count>0?` · ${a.count}`:""]}),((a==null?void 0:a.date)||e)&&t.jsx("time",{className:"thesis-brief__date",dateTime:(a==null?void 0:a.date)||e,children:(a==null?void 0:a.date)||e})]}),t.jsx("p",{className:"thesis-brief__hint",children:o?"Same content as your daily email for this fund. Pick a day above the map to change this brief and the LIVE ticker.":"Même contenu que l’email quotidien de ce fonds. Choisir un jour au-dessus de la carte change ce brief et le LIVE."}),r&&!c&&t.jsx("p",{className:"thesis-brief__loading",children:o?"Loading your thesis brief…":"Chargement de votre brief de thèse…"}),d&&t.jsxs("p",{className:"thesis-brief__err",children:[o?"Could not load this brief.":"Impossible de charger ce brief.",a!=null&&a.error?` (${a.error})`:""]}),s&&!r&&t.jsx("p",{className:"thesis-brief__empty",children:o?t.jsxs(t.Fragment,{children:["Edition of ",t.jsx("b",{children:bn(e,!0)}),"."]}):t.jsxs(t.Fragment,{children:["Édition du ",t.jsx("b",{children:bn(e)}),"."]})}),c&&(a!=null&&a.html)?t.jsx("div",{className:"thesis-brief__body",dangerouslySetInnerHTML:{__html:a.html}}):null,c&&(a!=null&&a.acquirers_html)?t.jsx("div",{className:"thesis-brief__acq",dangerouslySetInnerHTML:{__html:a.acquirers_html}}):null,i&&t.jsx("button",{type:"button",className:"thesis-brief__clear",onClick:n,children:o?"← Back to the last 7 days":"← Revenir aux 7 derniers jours"})]})}const Gi=300,pa=7,Ki={fr:{ma:"M&A",levees:"Levées de fonds",nominations:"Nominations",recrutements:"Offres d'emploi",actualites:"Presse"},en:{ma:"M&A",levees:"Fundraising",nominations:"Appointments",recrutements:"Job offers",actualites:"Press"}},ur={fr:{hiring:"💼 Recrute",raised:"💰 Lève des fonds",news:"📰 Presse",posting:"📣 Publie",building:"💻 Construit",community:"💬 Communauté",registry:"🆕 Nouveau",exodus:"👋 Départs",other:"🔔 Signal"},en:{hiring:"💼 Hiring",raised:"💰 Raising",news:"📰 Press",posting:"📣 Posting",building:"💻 Building",community:"💬 Community",registry:"🆕 New",exodus:"👋 Exodus",other:"🔔 Signal"}},Qi=["hiring","raised","news","posting","building","community","registry","exodus","other"];function vn(e){const a=Te(e);if(a)return"sig:"+(a.theme&&ur.fr[a.theme]?a.theme:"other");const r=(e.rubrique||"").toLowerCase();return r==="ma"||r==="levees"||r==="nominations"||r==="recrutements"||r==="actualites"?r:e.dealKind==="ma"?"ma":e.dealKind==="levee"?"levees":"actualites"}function Ji(){const{dossiers:e,st:a,t:r,dispatch:n,contName:i,pipe:o,lang:c,fund:s}=I(),d=dr(),x=c==="en",[l,f]=m.useState("all"),[u,b]=m.useState(!1),p=m.useMemo(()=>{var Q;const q=(a.filters.day||"").slice(0,10),w=B=>!(!o&&a.continent!=="monde"&&B.continent!==a.continent||q&&(B.date||"").slice(0,10)!==q),A=e.filter(B=>w(B)&&Te(B)&&(!o||B.kind!=="target"||Ae(B)!==5)),O=o&&(((Q=d==null?void 0:d.ed)==null?void 0:Q.ops)||[]).length?d.ed.ops.map(B=>Ht(B,c)).filter(B=>!!B).filter(B=>!q||(B.date||"").slice(0,10)===q):[],U=e.filter(B=>w(B)&&B.kind==="op"&&!Te(B)&&(q?!0:at(B.date)<=pa)),W=o?O.length?O:U.filter(B=>{const Y=(s||"").trim().toLowerCase();if(!Y)return!1;const ae=B.match||null;return ae?Object.keys(ae).map(ne=>ne.trim().toLowerCase()).includes(Y):!1}):U,H=q||new Date().toISOString().slice(0,10);return W.sort((B,Y)=>{const ae=(B.date||"").slice(0,10)===H?0:1,ne=(Y.date||"").slice(0,10)===H?0:1;return ae!==ne?ae-ne:(Y.amountEur||0)-(B.amountEur||0)}),[...Ha(A,{key:"signal",dir:-1}),...W]},[e,a.continent,a.filters.day,o,s,c,d]),g=m.useMemo(()=>{const q={};for(const w of p){const A=vn(w);q[A]=(q[A]||0)+1}return q},[p]),v=m.useMemo(()=>l==="all"?p:p.filter(q=>vn(q)===l),[p,l]),h=m.useMemo(()=>v.slice(0,Gi),[v]),N=v.length-h.length,E=m.useRef(null);m.useEffect(()=>{var W,H;const q=E.current;if(!q)return;const w=()=>{const Q=q.scrollWidth;Q<200||(q.style.animationDuration=Math.max(18,Math.round(Q/130))+"s")};w();const A=requestAnimationFrame(w),O=window.setTimeout(w,1200);let U=!0;return(H=(W=document.fonts)==null?void 0:W.ready)==null||H.then(()=>{U&&w()}),()=>{U=!1,cancelAnimationFrame(A),window.clearTimeout(O)}},[h.length,l]);const y=q=>q==="all"?p.length:g[q]||0,z=q=>q==="all"?x?"All":"Tout":q.startsWith("sig:")?ur[x?"en":"fr"][q.slice(4)]||"🔔":Ki[x?"en":"fr"][q],L=[{k:"all"}],T=["ma","levees"].filter(q=>y(q)>0||q===l);if(T.length){L.push({g:x?"Recent deals":"Opérations récentes"});for(const q of T)L.push({k:q})}const S=["nominations","recrutements","actualites"].filter(q=>y(q)>0||q===l),C=Qi.map(q=>"sig:"+q).filter(q=>y(q)>0||q===l);if(S.length||C.length){L.push({g:x?"News (incl. wire)":"Actualités (dont fil)"});for(const q of S)L.push({k:q});for(const q of C)L.push({k:q})}const j=q=>{try{return new Date(q+"T12:00:00Z").toLocaleDateString(x?"en-GB":"fr-FR",{day:"numeric",month:"long"})}catch{return q}},M=(()=>{const q=(a.filters.day||"").slice(0,10),w=!o&&a.continent!=="monde"&&i?x?` Scope: ${i}.`:` Périmètre : ${i}.`:"";return q?(x?`LIVE covers the events of ${j(q)}.`:`Le LIVE regroupe les événements du ${j(q)}.`)+w:(x?`LIVE covers the still-open signals and the deals of the last ${pa} days.`:`Le LIVE regroupe les signaux encore ouverts et les opérations des ${pa} derniers jours.`)+w})(),P=q=>h.map(w=>t.jsxs("button",{type:"button",className:"tk"+($e(w)?" spent":""),onClick:A=>{const O=A.currentTarget.getBoundingClientRect();n({type:"popup",id:w.id,anchor:{x:O.left+O.width/2,y:O.bottom}})},title:w.name+(w.tagline?" — "+w.tagline:""),children:[t.jsx(dt,{o:w}),t.jsxs("span",{className:"who",children:[t.jsx(Yr,{o:w}),t.jsx("span",{className:"co",children:w.name})]}),typeof w.amountEur=="number"&&w.amountEur>0&&t.jsx("span",{className:"am",children:wc(w.amountEur)}),w.sector&&t.jsx("span",{className:"mt",children:w.sector}),t.jsx(oa,{o:w}),t.jsx("span",{className:"tkgo",children:"→"})]},q+(w.id||w.name))).concat(N>0?[t.jsx("span",{className:"tk quiet",children:x?`+ ${N} more — filter by section to see them`:`+ ${N} autres — filtrez par rubrique pour les voir`},q+":more")]:[]);return t.jsxs("div",{className:"ticker",children:[t.jsxs("span",{className:"lbl",children:[t.jsx("i",{}),r.live]}),t.jsxs("span",{className:"tkfil",onBlur:q=>{q.currentTarget.contains(q.relatedTarget)||b(!1)},children:[t.jsxs("button",{type:"button",className:"tkfilb","aria-expanded":u,onClick:()=>b(q=>!q),children:[z(l),t.jsx("b",{children:y(l)}),t.jsx("span",{"aria-hidden":"true",children:"▾"})]}),t.jsxs("div",{className:"tkfilm",hidden:!u,children:[t.jsx("span",{className:"tkfilscope",children:M}),L.map(q=>"g"in q?t.jsx("span",{className:"tkfilg",children:q.g},q.g):t.jsxs("button",{type:"button","aria-pressed":q.k===l,onClick:()=>{f(q.k),b(!1)},children:[z(q.k),t.jsx("b",{children:y(q.k)})]},q.k))]})]}),t.jsx("div",{className:"win",children:h.length?t.jsxs("div",{className:"run",ref:E,children:[P(0),P(1)]}):t.jsx("div",{className:"run",style:{animation:"none"},children:t.jsx("span",{className:"tk quiet",children:r.liveQuiet(i)})})}),!!d&&t.jsx(Zi,{isEn:x})]})}const Xi=t.jsxs("svg",{viewBox:"0 0 16 16",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"1.4","aria-hidden":"true",children:[t.jsx("rect",{x:"2",y:"3.5",width:"12",height:"10.5",rx:"1.5"}),t.jsx("path",{d:"M2 6.5h12M5.5 2v3M10.5 2v3"})]});function Zi({isEn:e}){const[a,r]=m.useState(()=>Co());m.useEffect(()=>{const i=o=>{var c;return r(!!((c=o.detail)!=null&&c.open))};return window.addEventListener(sn,i),()=>window.removeEventListener(sn,i)},[]);const n=a?e?"Hide the days":"Masquer les jours":e?"Show the days":"Voir les jours";return t.jsx("button",{type:"button",className:"dytog","aria-pressed":a,title:n,"aria-label":n,onClick:()=>Ao(!a),children:Xi})}const es="aDx8z7Hzksus",Ya="+33 6 83 10 72 86",Gt="alexandre@proplace.co",mr=`tel:${Ya.replace(/[^\d+]/g,"")}`,yn="pp-rdv-slot";function ts(){const e=typeof document<"u"&&document.getElementById("rdv");return e?(e.scrollIntoView({behavior:"smooth",block:"start"}),!0):!1}function as(){const{t:e,caps:a,fund:r}=I();if(!a.showOnb)return null;const n=r||e.rdvCoFallback;return t.jsxs("section",{id:"rdv",className:"pp-rdv is-teaser",children:[t.jsx("style",{children:rs}),t.jsx("h2",{children:e.rdvHeading}),t.jsxs("p",{className:"pp-rdv-sub",children:[e.rdvSubBefore,t.jsx("a",{href:mr,children:Ya}),e.rdvSubMid,t.jsx("a",{href:`mailto:${Gt}`,children:Gt})]}),t.jsx("div",{className:"pp-rdv-unlocks",children:e.rdvUnlocks(n).map(([i,o],c)=>t.jsxs("div",{className:"pp-rdv-u",children:[t.jsx("em",{children:e.rdvUnlockLabel(c+1)}),t.jsx("b",{children:i}),t.jsx("span",{children:o})]},i))}),t.jsx("div",{className:"pp-rdv-emb",children:t.jsx(wi,{filloutId:es,parameters:r?{company_name:r}:void 0})})]})}function ns(){const[e,a]=m.useState(()=>typeof document>"u"?null:document.getElementById(yn));return m.useEffect(()=>{e||a(document.getElementById(yn))},[e]),e?vt.createPortal(t.jsx(as,{}),e):null}const rs=`
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
`;class Re extends m.Component{constructor(){super(...arguments);en(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(r,n){console.error(`[atl2] bandeau « ${this.props.name} » en échec :`,r,n.componentStack)}render(){return this.state.dead?this.props.fallback??null:this.props.children}}const ua=600,ot=62,wn="atl2:fstats";function os(){const{t:e,lang:a,data:r,caps:n,st:i,dispatch:o}=I(),[c,s]=m.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem(wn)==="on"}catch{return!1}}),d=r.stats,x=m.useMemo(()=>((d==null?void 0:d.by_day)||[]).slice(-30),[d]),l=(d==null?void 0:d.since)||"";if(!n.showFunnel||!d||typeof d.screened!="number")return null;const f=z=>a==="en"?z.slice(5,10):`${z.slice(8,10)}/${z.slice(5,7)}`,u=z=>z.toLocaleString(a==="en"?"en-US":"fr-FR"),b=x.reduce((z,L)=>Math.max(z,L.s||0),0),p=x.length?ua/x.length:0,g=Math.max(4,p-4),v=x.length>=5&&b>0,h=r.marketEstimate||0,N=f(new Date().toISOString().slice(0,10)),E=z=>[...typeof z=="number"?[[z,e.funScreened("","")]]:[],...typeof d.kept=="number"?[[d.kept,e.funKept]]:[],...typeof d.analyzed=="number"?[[d.analyzed,e.funAnalyzed]]:[],...typeof d.shown=="number"?[[d.shown,e.funShown]]:[]],y=[];return typeof d.screened_window=="number"&&l&&y.push({cle:"fenetre",periode:e.funPerWindow(f(l),N),etapes:[[d.screened_window,e.funScreened("","")]]}),typeof d.screened=="number"&&y.push({cle:"total",periode:e.funPerAll,etapes:E(d.screened)}),t.jsxs("div",{className:"fstats"+(c?" on":""),children:[y.map(z=>t.jsxs("div",{className:"fst-row fst-lab",title:e.funScope,children:[t.jsx("span",{className:"fst-per",children:z.periode}),z.etapes.map(([L,T],S)=>t.jsxs("span",{className:"fst-t",children:[S>0&&t.jsx("span",{className:"fst-ar",children:"→"}),t.jsx("b",{children:u(L)}),t.jsx("i",{children:T})]},z.cle+T)),z.cle==="total"&&h>0&&t.jsxs("span",{className:"fst-t fst-mkt",children:[t.jsx("span",{className:"fst-ar",children:"·"}),t.jsx("i",{children:e.funOfMarket(u(h),Math.min(100,Math.round((d.screened||0)/h*100)))})]}),z.cle===y[y.length-1].cle&&v&&t.jsx("button",{type:"button",className:"fst-x","aria-expanded":c,title:c?e.fstatsHide:e.fstatsShow,onClick:()=>{const L=!c;s(L),L&&!i.mapFolded&&o({type:"mapFold",folded:!0});try{localStorage.setItem(wn,L?"on":"off")}catch{}},children:c?"⌃":"⌄"})]},z.cle)),c&&v&&t.jsxs("div",{className:"fst-act",children:[t.jsxs("div",{className:"fst-ah",children:[t.jsx("span",{children:e.actTitle}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#185c38"}}),e.actKept]}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#cfe0d6"}}),e.actScreened]})]}),t.jsxs("svg",{viewBox:`0 0 ${ua} ${ot}`,preserveAspectRatio:"none",role:"img","aria-label":e.actTitle,children:[x.map((z,L)=>{const T=(z.s||0)/b*(ot-4),S=(z.m||0)/b*(ot-4),C=L*p+(p-g)/2;return t.jsxs("g",{children:[t.jsx("title",{children:`${f(z.d)} — ${z.s} ${e.actScreened} · ${z.m} ${e.actKept}`}),t.jsx("rect",{x:C,y:ot-2-T,width:g,height:T,fill:"#cfe0d6"}),t.jsx("rect",{x:C,y:ot-2-S,width:g,height:S,fill:"#185c38"})]},z.d)}),t.jsx("line",{x1:0,y1:ot-1.5,x2:ua,y2:ot-1.5,stroke:"#dbe5df",strokeWidth:1})]}),t.jsxs("div",{className:"fst-ax",children:[t.jsx("span",{children:f(x[0].d)}),t.jsx("span",{children:e.actToday})]})]})]})}const fr=[["Retenu","csKept"],["Analysé","csAnalysed"],["À trancher","csPending"],["Validé","csValidated"],["Écarté","csOut"]];function is(e,a){if((nt(e)||"").startsWith("CALL")&&Ae(e)===3)return[["Validé",a.csYes],["Écarté",a.csNo]];const n=Ae(e)>=2;return fr.filter(([i])=>!(n&&i==="Retenu")).map(([i,o])=>[i,a[o]])}function ss({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:i,doAnalyse:o,memoQueued:c}=I(),[s,d]=m.useState(!1),[x,l]=m.useState(""),[f,u]=m.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const b=(e.ceoStatus||"").trim(),p=async g=>{if(x)return;if(g==="Analysé"&&!e.memoUrl){u(!0);return}l(g);const v=await i(e,g);l(""),v&&(d(!1),u(!1))};return t.jsxs("span",{className:"rstat",onClick:g=>g.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"rstb",title:a.csLabel,onClick:()=>{d(g=>!g),u(!1)},children:[b||a.csNone,t.jsx("i",{children:"▾"})]}),s&&t.jsx("span",{className:"rstm",children:f?t.jsxs("span",{className:"rstask",children:[t.jsx("b",{children:a.csAnaNeedMemo}),t.jsx("button",{type:"button",className:"rsta pri",disabled:c.has(e.id),onClick:()=>{o(e),u(!1),d(!1)},children:c.has(e.id)?a.actMemoQueue:a.csAnaRun}),t.jsx("button",{type:"button",className:"rsta",onClick:()=>{(async()=>{l("Analysé");const g=await i(e,"Analysé");l(""),g&&(d(!1),u(!1))})()},children:a.csAnaAnyway})]}):is(e,a).map(([g,v])=>t.jsx("button",{type:"button",className:"rsti"+(b===g?" on":"")+(x===g?" busy":""),disabled:!!x,onClick:()=>{p(g)},children:v},g))})]})}function ls({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:i}=I(),[o,c]=m.useState(""),[s,d]=m.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const x=(e.ceoStatus||"").trim(),l=(nt(e)||"").startsWith("CALL")&&Ae(e)===3,f=Ae(e)>=2,u=async p=>{if(o||p==="Analysé"&&!e.memoUrl&&!window.confirm(a.csAnaConfirm))return;c(p);const g=await i(e,p);c(""),g&&(d(!0),setTimeout(()=>d(!1),2200))},b=l?[["Validé",a.csYes],["Écarté",a.csNo]]:fr.filter(([p])=>!(f&&p==="Retenu")).map(([p,g])=>[p,a[g]]);return t.jsxs("div",{className:"csp",onClick:p=>p.stopPropagation(),children:[t.jsxs("div",{className:"csrow",children:[t.jsx("span",{className:"cslb",children:a.csLabel}),b.map(([p,g])=>t.jsx("button",{type:"button",className:"csb"+(x===p?" on":"")+(o===p?" busy":""),disabled:!!o,onClick:()=>{u(p)},children:g},p)),s&&t.jsx("span",{className:"csok",children:a.csSaved})]}),t.jsx(cs,{o:e})]})}function cs({o:e}){const{t:a,saveNote:r,flash:n}=I(),[i,o]=m.useState(e.ceoNote||""),[c,s]=m.useState(!1),[d,x]=m.useState(!1),l=i.trim()!==(e.ceoNote||"").trim(),f=async()=>{if(c||!l)return;s(!0);const u=await r(e,i.trim());s(!1),u&&(x(!0),setTimeout(()=>x(!1),2200),n(a.csNoteSaved))};return t.jsxs("div",{className:"csnote",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:a.csNotePh,value:i,disabled:c,onChange:u=>o(u.target.value),onKeyDown:u=>{u.key==="Enter"&&f()}}),t.jsx("button",{type:"button",disabled:c||!l,onClick:()=>{f()},children:d?a.csNoteSaved:a.csNoteOk})]})}function ds({placeholder:e,onDone:a}){const{t:r}=I(),[n,i]=m.useState("");return t.jsxs("div",{className:"csnote why",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:e,value:n,autoFocus:!0,onChange:o=>i(o.target.value),onKeyDown:o=>{o.key==="Enter"&&a(n.trim()),o.key==="Escape"&&a("")},onBlur:()=>{n.trim()||a("")}}),t.jsx("button",{type:"button",onClick:()=>a(n.trim()),children:r.whySend})]})}function ps({o:e}){var v;const{t:a,token:r,caps:n,canWrite:i,stageOf:o,setStage:c,flashErr:s}=I(),[d,x]=m.useState(!1);if(!n.pipe||!i||n.lockActions||Ae(e)!==4)return null;const l=o(e),f=(l==null?void 0:l.stage)||"todo",u=async h=>{if(d||h===f)return;x(!0);const N=l;c(e,{stage:h,stamps:(l==null?void 0:l.stamps)||{}});const E=Math.max(Date.now(),kn+=1);kn=E;const y=await zo(r,{company:e.name||"",stage:h,cts:E,deal_id:e.airtableId,check_id:e.checkId});x(!1),!y.stale&&(y.ok||(c(e,N),s(a.actErr)))},b=(v=l==null?void 0:l.stamps)==null?void 0:v.sent,p=b?Math.floor((Date.now()-Date.parse(b))/864e5):0,g=f==="sent"&&b&&p>=4;return t.jsxs("div",{className:"stg",onClick:h=>h.stopPropagation(),children:[t.jsx("span",{className:"stglb",children:a.stgLabel}),a.stg.map(([h,N])=>t.jsx("button",{type:"button",className:"stgb"+(f===h?" on":""),disabled:d,onClick:()=>{u(h)},children:N},h)),g&&t.jsx("span",{className:"stgj4",children:a.j4Badge(p)})]})}let kn=0;const Dt=8,Pt=360;function jn({text:e}){const a=e.split(/\*\*(.+?)\*\*/g);return t.jsx(t.Fragment,{children:a.map((r,n)=>n%2?t.jsx("b",{children:r},n):t.jsx("span",{children:r},n))})}function Nn({text:e}){const a=(e||"").split(`
`).map(n=>n.trim()).filter(Boolean),r=a.filter(n=>n.startsWith("·"));return t.jsxs(t.Fragment,{children:[a.filter(n=>!n.startsWith("·")).map((n,i)=>t.jsx("p",{children:t.jsx(jn,{text:n})},"p"+i)),r.length>0&&t.jsx("ul",{className:"tour-ul",children:r.map((n,i)=>t.jsx("li",{children:t.jsx(jn,{text:n.replace(/^·\s*/,"")})},"l"+i))})]})}function us({steps:e,onClose:a}){const{t:r,dispatch:n,counts:i,st:o}=I(),[c,s]=m.useState(0),[d,x]=m.useState(null),[l,f]=m.useState([]),u=m.useRef(!1),b=m.useRef({ptab:o.ptab,dens:o.dens,modal:o.modal}),p=m.useRef(!1);m.useEffect(()=>{const T=b.current;return()=>{p.current||(n({type:"ptab",tab:T.ptab}),n({type:"dens",dens:T.dens}),n({type:"modal",modal:T.modal}))}},[]),m.useEffect(()=>{u.current||(u.current=!0,f(e.filter(T=>!!document.querySelector(T.need||T.sel))))},[e]);const g=l[c],v=c>=l.length;m.useEffect(()=>{if(g&&(g.ptab!==void 0&&o.ptab!==g.ptab&&n({type:"ptab",tab:g.ptab}),g.dens&&o.dens!==g.dens&&n({type:"dens",dens:g.dens}),o.modal!==(g.modal??null)&&n({type:"modal",modal:g.modal??null}),g.click)){const T=g.click,S=window.setTimeout(()=>{const C=document.querySelector(T);C&&C.getAttribute("aria-selected")!=="true"&&C.click()},60);return()=>window.clearTimeout(S)}},[c,g]);const h=m.useRef(-1),N=m.useCallback(()=>{if(!g){x(null);return}const T=document.querySelector(g.sel)||(g.need?document.querySelector(g.need):null);if(!T){x(null);return}h.current!==c&&(h.current=c,T.scrollIntoView({block:"nearest",behavior:"smooth"}));const S=T.getBoundingClientRect();x(C=>C&&Math.abs(C.top-S.top)<1&&Math.abs(C.left-S.left)<1&&Math.abs(C.width-S.width)<1&&Math.abs(C.height-S.height)<1?C:S)},[g,c]);m.useLayoutEffect(()=>{N();const T=[90,300,700,1300].map(C=>window.setTimeout(N,C)),S=()=>N();return window.addEventListener("scroll",S,!0),window.addEventListener("resize",S),()=>{T.forEach(C=>window.clearTimeout(C)),window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",S)}},[N]);const E=m.useRef(a);if(E.current=a,m.useEffect(()=>{const T=S=>{S.key==="Escape"?(S.preventDefault(),S.stopPropagation(),E.current()):S.key==="ArrowRight"?s(C=>C+1):S.key==="ArrowLeft"&&s(C=>Math.max(0,C-1))};return document.addEventListener("keydown",T,!0),()=>document.removeEventListener("keydown",T,!0)},[]),!l.length)return null;let y=null;const z=T=>()=>{p.current=!0,n({type:"modal",modal:null}),T()};if(v){const T=i[3]||0;T>0?y={title:T===1?r.ahaATitle1:r.ahaATitleN(T),body:r.ahaABody,btn:r.ahaABtn,go:z(()=>{n({type:"ptab",tab:3}),a()})}:(i[1]||0)>0?y={title:r.ahaRetTitle(i[1]||0),body:r.ahaRetBody,btn:r.ahaRetBtn,go:z(()=>{n({type:"ptab",tab:1}),a()})}:(i[0]||0)>0?y={title:r.ahaEvalTitle(i[0]||0),body:r.ahaEvalBody,btn:r.ahaEvalBtn,go:z(()=>{n({type:"ptab",tab:0}),a()})}:y={title:r.ahaCTitle,body:r.ahaCBody,btn:r.ahaCBtn,go:z(()=>{n({type:"modal",modal:"crit"}),a()})}}let L={left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:Pt};if(!v&&d){const T=d.bottom+14,C=window.innerHeight-T>190?T:Math.max(12,d.top-200);L={left:Math.min(Math.max(12,d.left+d.width/2-Pt/2),window.innerWidth-Pt-12),top:C,width:Pt}}return vt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"tour",role:"dialog","aria-modal":"true",children:[!v&&d&&t.jsx("div",{className:"tour-hole",style:{left:d.left-Dt,top:d.top-Dt,width:d.width+Dt*2,height:d.height+Dt*2}}),(v||!d)&&t.jsx("div",{className:"tour-veil"}),t.jsxs("div",{className:"tour-card"+(v?" fin":""),style:L,children:[v&&y?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:y.title}),t.jsx(Nn,{text:y.body}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",onClick:()=>s(l.length-1),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:y.go,children:y.btn})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"tour-n",children:[r.tourStep(c+1,l.length),t.jsx("span",{className:"tour-bar",children:t.jsx("i",{style:{width:(c+1)/l.length*100+"%"}})})]}),t.jsx("h3",{children:g==null?void 0:g.title}),t.jsx(Nn,{text:(g==null?void 0:g.body)||""}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",disabled:c===0,onClick:()=>s(T=>Math.max(0,T-1)),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:()=>s(T=>T+1),children:c===l.length-1?r.tourDone:r.tourNext})]})]}),t.jsx("button",{type:"button",className:"tour-x","aria-label":r.tourClose,title:r.tourClose,onClick:a,children:"×"})]})]})}),document.body)}function xr(e){let a="";for(const r of e){const n=(r.date||"").slice(0,10);n&&n>a&&(a=n)}return a}function hr(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(e||"");return r?a==="en"?`${r[2]}/${r[3]}`:`${r[3]}/${r[2]}`:""}function ms(){var S,C;const{dossiers:e,scopedAll:a,pipe:r,mode:n,t:i,st:o,lang:c,data:s,dispatch:d}=I(),x=r?a:e,l=m.useMemo(()=>x.filter(j=>at(j.date)===0&&j.kind==="target"),[x]),f=m.useMemo(()=>r?a.filter(j=>j.kind==="target"&&Ae(j)===0).slice().sort((j,M)=>(M.date||"").localeCompare(j.date||"")):[],[a,r]),u=m.useMemo(()=>l.filter(j=>r?Ae(j)===0:!$e(j)),[l,r]),b=r?f:u,p=r?a.length-f.length:l.length-u.length,g=r?a.length:l.length,v=g?Math.min(100,p/g*100):100,h=m.useMemo(()=>xr(x),[x]),N=!!h&&at(h)>0,E=m.useMemo(()=>N?x.filter(j=>(j.date||"").slice(0,10)===h):[],[x,h,N]),y=typeof((S=s.stats)==null?void 0:S.kept_today)=="number"?s.stats.kept_today:null,z=typeof((C=s.stats)==null?void 0:C.screened_today)=="number"?s.stats.screened_today:l.length;let L;N?L=i.morningLast(E.length,f.length,hr(h,c)):r?L=i.morningThesis(z,f.length,y):l.length?p===0?L=i.goalSourced(l.length):p>=l.length?L=i.goalCleared:L=i.goalDone(p,l.length):L=i.goalSourced(0);const T=()=>{if(!r){d({type:"pile",on:!0});return}d({type:"ptab",tab:0}),n==="client"&&f.length&&d({type:"chainStart",queue:f.map(j=>j.id)})};return t.jsxs("div",{className:"goal",children:[t.jsx("span",{className:"gtxt",title:r?i.morningEnginesTitle:void 0,dangerouslySetInnerHTML:{__html:L}}),t.jsx("div",{className:"pbar",children:t.jsx("i",{style:{width:v+"%"}})}),b.length>0&&t.jsx("button",{type:"button",className:"pilebtn",onClick:T,children:r?i.morningEval(b.length):o.pileMode?i.goalContinue(b.length):i.goalTreat}),t.jsx("span",{className:"gspace"})]})}function fs(){var U,W;const{t:e,lang:a,st:r,dispatch:n,token:i,fund:o,data:c,dossiers:s,mode:d,doSync:x,startTour:l,flash:f,flashErr:u}=I(),[b,p]=m.useState(null),[g,v]=m.useState(!0),[h,N]=m.useState([]),E=d==="client";m.useEffect(()=>{if(!i||!o)return;let H=!0;return v(!0),(async()=>{const[Q,B]=await Promise.all([Ba(o),nr(i)]);H&&(Q&&p(Q),v(!1),N(B))})(),()=>{H=!1}},[i,o]);const[y,z]=m.useState(!1),L=()=>{!E||y||!o||(z(!0),To(o).then(H=>{z(!1),H?f(e.identRepubDone):u(e.actErr)}))},T=(b==null?void 0:b.per_day)??null,S=((U=b==null?void 0:b.pool_order)==null?void 0:U.length)??0,C=h.filter(H=>H.status==="running").length,j=m.useMemo(()=>s.filter(H=>H.kind==="target"&&$e(H)).length,[s]),M=c.marketEstimate,P=typeof((W=c.stats)==null?void 0:W.screened)=="number"?c.stats.screened:j,q=M&&M>0?Math.min(100,Math.round(P/M*100)):null,w=H=>H.toLocaleString(a==="en"?"en-US":"fr-FR"),A=(o||"P").split(/\s+/).map(H=>H[0]).join("").slice(0,2).toUpperCase(),O=(()=>{const H=Date.parse(c.generatedAt||"");if(Number.isNaN(H))return"";const Q=new Date(H),B=Y=>String(Y).padStart(2,"0");return`${B(Q.getDate())}/${B(Q.getMonth()+1)} à ${B(Q.getHours())}:${B(Q.getMinutes())}`})();return t.jsxs("div",{className:"ident",children:[t.jsxs("div",{className:"idtop",children:[t.jsxs("span",{className:"brand",children:[t.jsx("b",{children:o?A:t.jsx("span",{className:"skt sk-ini"})}),t.jsx("i",{children:o||t.jsx("span",{className:"skt sk-nm"})})]}),t.jsx("h1",{children:o?e.identTitle(o):t.jsx("span",{className:"skt sk-h1","aria-label":e.loadingV2})}),t.jsx("span",{className:"idsp"}),O?t.jsx("span",{className:"idupd",children:e.identUpdatedAt(O)}):t.jsx("span",{className:"skt sk-upd"}),t.jsx("button",{type:"button",className:"ic",title:e.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),t.jsx("button",{type:"button",className:"ic",title:e.tourPlayTitle,onClick:l,children:"▶"})]}),t.jsxs("div",{className:"idmain",children:[q===null&&P>0&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsx("span",{className:"ev",children:t.jsx("b",{children:w(P)})})]}),q!==null&&M&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsxs("span",{className:"ev",children:[t.jsx("span",{className:"bar",children:t.jsx("i",{style:{width:q+"%"}})}),t.jsxs("b",{children:[q," %"]})]}),t.jsx("span",{className:"edv"}),t.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:e.identCoverageOf(P,M)}})]}),t.jsxs("span",{className:"engine",title:e.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[t.jsx("span",{className:"el",children:e.identEngine}),T!==null&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"ev",children:[t.jsx("b",{className:"q",children:T})," ",e.identPerDay]}),t.jsx("span",{className:"edv"})]}),T===0&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"epause",title:e.identPauseTitle,children:e.identPause}),t.jsx("span",{className:"edv"})]}),C>0&&t.jsxs("span",{className:"ev",children:["⏳ ",C]}),t.jsx("span",{className:"ego",children:g?e.identPendingWait:e.identPending(S)}),t.jsx("button",{type:"button",className:"ebell",title:e.memoAlertBtn,onClick:H=>{H.stopPropagation(),n({type:"modal",modal:"memoalert"})},children:"🔔"})]}),t.jsx("span",{className:"idsp"}),t.jsxs("span",{className:"icgrp",children:[t.jsx("button",{type:"button",className:"ic","data-tour":"export",title:e.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),t.jsx("button",{type:"button",className:"ic","data-tour":"plug",title:e.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),t.jsx("button",{type:"button",className:"ic","data-tour":"alert",title:e.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),t.jsx("button",{type:"button",className:"ic",title:e.identRepub,disabled:!E||y,onClick:L,children:y?"⏳":"📰"}),t.jsx("button",{type:"button",className:"ic",title:e.identSync,disabled:!E,onClick:x,children:"🔄"})]}),t.jsxs("span",{className:"isrch",children:["🔍",t.jsx("input",{placeholder:e.identSearch,value:r.filters.search,onChange:H=>n({type:"filters",patch:{search:H.target.value}})})]})]})]})}function xs(){const{st:e,dispatch:a,counts:r,t:n,doUndo:i,data:o,dossiers:c}=I(),s=o.loading&&!c.length,d=m.useRef({});m.useEffect(()=>{d.current={...r}},[r]);const x=u=>{const b=d.current[u],p=b!==void 0?r[u]-b:0;return t.jsxs("button",{type:"button",className:"step"+(u===3&&r[3]>0?" wait":""),style:{"--c":`var(${ba[u]})`,"--tc":u<=3?"var(--ink)":"#fff"},"aria-selected":e.ptab===u,title:n.phelp[u],onClick:()=>a({type:"ptab",tab:u}),children:[t.jsxs("span",{className:"l",children:[n.plabels[u].toUpperCase(),u===3&&r[3]>0&&t.jsx("i",{className:"wd"})]}),t.jsxs("span",{className:"n"+(p>0?" up":p<0?" down":""),children:[r[u],p!==0&&t.jsxs("em",{className:"delta",children:[p>0?"+":"−",Math.abs(p)]})]})]},u)},l=(u,b,p)=>t.jsxs("button",{type:"button",className:"off"+(b?" view":""),style:{"--c":`var(${ba[u]})`},"aria-selected":e.ptab===u,title:n.phelp[u],onClick:()=>a({type:"ptab",tab:u}),children:[t.jsx("span",{className:"l",children:p.toUpperCase()}),t.jsx("span",{className:"n",children:r[u]})]},u),f=(u,b,p,g=!1)=>t.jsx("button",{type:"button",className:"tool",title:b,disabled:g,onClick:p,children:u},b);return t.jsxs("div",{className:"funnel"+(s?" waiting":""),children:[t.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(x)}),t.jsxs("div",{className:"offtrack",children:[l(5,!1,n.plabels[5]),l(7,!0,n.plabels[7]),l(6,!0,"★ "+n.plabels[6])]}),t.jsxs("span",{className:"ftools",children:[f("↩",n.toolUndo,i,e.undo.length===0),f("↺",n.toolReset,()=>{a({type:"reset"})}),f("⇅",n.toolSort,()=>a({type:"sort",key:e.sort.key})),f("▶",n.toolTuto,()=>a({type:"modal",modal:"tuto"})),f("⚙",n.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}function hs(){const{st:e,dispatch:a,t:r,scoped:n,memoQueued:i,doAnalyse:o,mode:c}=I(),s=m.useRef(null),[d,x]=m.useState(60);m.useEffect(()=>{let p=0;const g=()=>{var y;const v=s.current;if(!v)return;const h=(y=v.parentElement)==null?void 0:y.querySelector('.funnel [aria-selected="true"]');if(!h)return;const N=h.getBoundingClientRect(),E=v.getBoundingClientRect();x(Math.max(20,Math.min(N.left+N.width/2-E.left,E.width-30)))};return p=requestAnimationFrame(g),window.addEventListener("resize",g),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",g)}},[e.ptab]);const l=e.ptab;let f=r.tuto[l].p;if(l===3){const p=n.filter(h=>h.kind==="target"&&Ae(h)===3),g=p.filter(h=>va(h)==="auto").length,v=p.filter(h=>va(h)==="cd").length;f=r.tutoPending(g,v,p.length)}const u=(()=>{if(c!=="client")return null;if(l===0&&n.length)return{label:r.tuto[0].a,run:()=>a({type:"chainStart",queue:n.map(p=>p.id)})};if(l===1){const p=n.filter(g=>g.kind==="target"&&Ae(g)===1&&!i.has(g.id)).slice(0,10);if(p.length)return{label:r.tuto[1].a,run:()=>a({type:"chainStart",queue:p.map(g=>g.id)})}}return null})(),b=qo(l);return t.jsxs("div",{ref:s,className:"tuto mini"+(b?"":" on-dark"),style:{"--bg":`var(${ba[l]})`,"--ax":d+"px","--stc":b?"var(--ink)":"#fff","--stt":b?"#fff":"var(--ink)","--tc":b?"var(--ink)":"#fff"},children:[t.jsx("span",{className:"txt",children:t.jsxs("p",{children:[t.jsx("b",{className:"tstep",children:r.plabels[l].toUpperCase()}),t.jsx("span",{dangerouslySetInnerHTML:{__html:f}})]})}),u&&t.jsx("button",{type:"button",className:"tprim",onClick:u.run,children:u.label})]})}class lt{constructor(){this._partials=new Float64Array(32),this._n=0}add(a){const r=this._partials;let n=0;for(let i=0;i<this._n&&i<32;i++){const o=r[i],c=a+o,s=Math.abs(a)<Math.abs(o)?a-(c-o):o-(c-a);s&&(r[n++]=s),a=c}return r[n]=a,this._n=n+1,this}valueOf(){const a=this._partials;let r=this._n,n,i,o,c=0;if(r>0){for(c=a[--r];r>0&&(n=c,i=a[--r],c=n+i,o=i-(c-n),!o););r>0&&(o<0&&a[r-1]<0||o>0&&a[r-1]>0)&&(i=o*2,n=c+i,i==n-c&&(c=n))}return c}}function*gs(e){for(const a of e)yield*a}function gr(e){return Array.from(gs(e))}var ue=1e-6,oe=Math.PI,Ve=oe/2,Sn=oe/4,We=oe*2,Ze=180/oe,Ie=oe/180,ge=Math.abs,bs=Math.atan,At=Math.atan2,Ne=Math.cos,Se=Math.sin,vs=Math.sign||function(e){return e>0?1:e<0?-1:0},pt=Math.sqrt;function ys(e){return e>1?0:e<-1?oe:Math.acos(e)}function zt(e){return e>1?Ve:e<-1?-Ve:Math.asin(e)}function He(){}function Kt(e,a){e&&Cn.hasOwnProperty(e.type)&&Cn[e.type](e,a)}var En={Feature:function(e,a){Kt(e.geometry,a)},FeatureCollection:function(e,a){for(var r=e.features,n=-1,i=r.length;++n<i;)Kt(r[n].geometry,a)}},Cn={Sphere:function(e,a){a.sphere()},Point:function(e,a){e=e.coordinates,a.point(e[0],e[1],e[2])},MultiPoint:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)e=r[n],a.point(e[0],e[1],e[2])},LineString:function(e,a){Na(e.coordinates,a,0)},MultiLineString:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)Na(r[n],a,0)},Polygon:function(e,a){An(e.coordinates,a)},MultiPolygon:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)An(r[n],a)},GeometryCollection:function(e,a){for(var r=e.geometries,n=-1,i=r.length;++n<i;)Kt(r[n],a)}};function Na(e,a,r){var n=-1,i=e.length-r,o;for(a.lineStart();++n<i;)o=e[n],a.point(o[0],o[1],o[2]);a.lineEnd()}function An(e,a){var r=-1,n=e.length;for(a.polygonStart();++r<n;)Na(e[r],a,1);a.polygonEnd()}function mt(e,a){e&&En.hasOwnProperty(e.type)?En[e.type](e,a):Kt(e,a)}function Sa(e){return[At(e[1],e[0]),zt(e[2])]}function gt(e){var a=e[0],r=e[1],n=Ne(r);return[n*Ne(a),n*Se(a),Se(r)]}function It(e,a){return e[0]*a[0]+e[1]*a[1]+e[2]*a[2]}function Qt(e,a){return[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]]}function ma(e,a){e[0]+=a[0],e[1]+=a[1],e[2]+=a[2]}function $t(e,a){return[e[0]*a,e[1]*a,e[2]*a]}function Ea(e){var a=pt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=a,e[1]/=a,e[2]/=a}function Ca(e,a){function r(n,i){return n=e(n,i),a(n[0],n[1])}return e.invert&&a.invert&&(r.invert=function(n,i){return n=a.invert(n,i),n&&e.invert(n[0],n[1])}),r}function Aa(e,a){return ge(e)>oe&&(e-=Math.round(e/We)*We),[e,a]}Aa.invert=Aa;function ws(e,a,r){return(e%=We)?a||r?Ca(Tn(e),qn(a,r)):Tn(e):a||r?qn(a,r):Aa}function zn(e){return function(a,r){return a+=e,ge(a)>oe&&(a-=Math.round(a/We)*We),[a,r]}}function Tn(e){var a=zn(e);return a.invert=zn(-e),a}function qn(e,a){var r=Ne(e),n=Se(e),i=Ne(a),o=Se(a);function c(s,d){var x=Ne(d),l=Ne(s)*x,f=Se(s)*x,u=Se(d),b=u*r+l*n;return[At(f*i-b*o,l*r-u*n),zt(b*i+f*o)]}return c.invert=function(s,d){var x=Ne(d),l=Ne(s)*x,f=Se(s)*x,u=Se(d),b=u*i-f*o;return[At(f*i+u*o,l*r+b*n),zt(b*r-l*n)]},c}function ks(e,a,r,n,i,o){if(r){var c=Ne(a),s=Se(a),d=n*r;i==null?(i=a+n*We,o=a-d/2):(i=Ln(c,i),o=Ln(c,o),(n>0?i<o:i>o)&&(i+=n*We));for(var x,l=i;n>0?l>o:l<o;l-=d)x=Sa([c,-s*Ne(l),-s*Se(l)]),e.point(x[0],x[1])}}function Ln(e,a){a=gt(a),a[0]-=e,Ea(a);var r=ys(-a[1]);return((-a[2]<0?-r:r)+We-ue)%We}function br(){var e=[],a;return{point:function(r,n,i){a.push([r,n,i])},lineStart:function(){e.push(a=[])},lineEnd:He,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],a=null,r}}}function Wt(e,a){return ge(e[0]-a[0])<ue&&ge(e[1]-a[1])<ue}function Bt(e,a,r,n){this.x=e,this.z=a,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function vr(e,a,r,n,i){var o=[],c=[],s,d;if(e.forEach(function(p){if(!((g=p.length-1)<=0)){var g,v=p[0],h=p[g],N;if(Wt(v,h)){if(!v[2]&&!h[2]){for(i.lineStart(),s=0;s<g;++s)i.point((v=p[s])[0],v[1]);i.lineEnd();return}h[0]+=2*ue}o.push(N=new Bt(v,p,null,!0)),c.push(N.o=new Bt(v,null,N,!1)),o.push(N=new Bt(h,p,null,!1)),c.push(N.o=new Bt(h,null,N,!0))}}),!!o.length){for(c.sort(a),Rn(o),Rn(c),s=0,d=c.length;s<d;++s)c[s].e=r=!r;for(var x=o[0],l,f;;){for(var u=x,b=!0;u.v;)if((u=u.n)===x)return;l=u.z,i.lineStart();do{if(u.v=u.o.v=!0,u.e){if(b)for(s=0,d=l.length;s<d;++s)i.point((f=l[s])[0],f[1]);else n(u.x,u.n.x,1,i);u=u.n}else{if(b)for(l=u.p.z,s=l.length-1;s>=0;--s)i.point((f=l[s])[0],f[1]);else n(u.x,u.p.x,-1,i);u=u.p}u=u.o,l=u.z,b=!b}while(!u.v);i.lineEnd()}}}function Rn(e){if(a=e.length){for(var a,r=0,n=e[0],i;++r<a;)n.n=i=e[r],i.p=n,n=i;n.n=i=e[0],i.p=n}}function fa(e){return ge(e[0])<=oe?e[0]:vs(e[0])*((ge(e[0])+oe)%We-oe)}function js(e,a){var r=fa(a),n=a[1],i=Se(n),o=[Se(r),-Ne(r),0],c=0,s=0,d=new lt;i===1?n=Ve+ue:i===-1&&(n=-Ve-ue);for(var x=0,l=e.length;x<l;++x)if(u=(f=e[x]).length)for(var f,u,b=f[u-1],p=fa(b),g=b[1]/2+Sn,v=Se(g),h=Ne(g),N=0;N<u;++N,p=y,v=L,h=T,b=E){var E=f[N],y=fa(E),z=E[1]/2+Sn,L=Se(z),T=Ne(z),S=y-p,C=S>=0?1:-1,j=C*S,M=j>oe,P=v*L;if(d.add(At(P*C*Se(j),h*T+P*Ne(j))),c+=M?S+C*We:S,M^p>=r^y>=r){var q=Qt(gt(b),gt(E));Ea(q);var w=Qt(o,q);Ea(w);var A=(M^S>=0?-1:1)*zt(w[2]);(n>A||n===A&&(q[0]||q[1]))&&(s+=M^S>=0?1:-1)}}return(c<-ue||c<ue&&d<-1e-12)^s&1}function yr(e,a,r,n){return function(i){var o=a(i),c=br(),s=a(c),d=!1,x,l,f,u={point:b,lineStart:g,lineEnd:v,polygonStart:function(){u.point=h,u.lineStart=N,u.lineEnd=E,l=[],x=[]},polygonEnd:function(){u.point=b,u.lineStart=g,u.lineEnd=v,l=gr(l);var y=js(x,n);l.length?(d||(i.polygonStart(),d=!0),vr(l,Ss,y,r,i)):y&&(d||(i.polygonStart(),d=!0),i.lineStart(),r(null,null,1,i),i.lineEnd()),d&&(i.polygonEnd(),d=!1),l=x=null},sphere:function(){i.polygonStart(),i.lineStart(),r(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function b(y,z){e(y,z)&&i.point(y,z)}function p(y,z){o.point(y,z)}function g(){u.point=p,o.lineStart()}function v(){u.point=b,o.lineEnd()}function h(y,z){f.push([y,z]),s.point(y,z)}function N(){s.lineStart(),f=[]}function E(){h(f[0][0],f[0][1]),s.lineEnd();var y=s.clean(),z=c.result(),L,T=z.length,S,C,j;if(f.pop(),x.push(f),f=null,!!T){if(y&1){if(C=z[0],(S=C.length-1)>0){for(d||(i.polygonStart(),d=!0),i.lineStart(),L=0;L<S;++L)i.point((j=C[L])[0],j[1]);i.lineEnd()}return}T>1&&y&2&&z.push(z.pop().concat(z.shift())),l.push(z.filter(Ns))}}return u}}function Ns(e){return e.length>1}function Ss(e,a){return((e=e.x)[0]<0?e[1]-Ve-ue:Ve-e[1])-((a=a.x)[0]<0?a[1]-Ve-ue:Ve-a[1])}const Mn=yr(function(){return!0},Es,As,[-oe,-Ve]);function Es(e){var a=NaN,r=NaN,n=NaN,i;return{lineStart:function(){e.lineStart(),i=1},point:function(o,c){var s=o>0?oe:-oe,d=ge(o-a);ge(d-oe)<ue?(e.point(a,r=(r+c)/2>0?Ve:-Ve),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(s,r),e.point(o,r),i=0):n!==s&&d>=oe&&(ge(a-n)<ue&&(a-=n*ue),ge(o-s)<ue&&(o-=s*ue),r=Cs(a,r,o,c),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(s,r),i=0),e.point(a=o,r=c),n=s},lineEnd:function(){e.lineEnd(),a=r=NaN},clean:function(){return 2-i}}}function Cs(e,a,r,n){var i,o,c=Se(e-r);return ge(c)>ue?bs((Se(a)*(o=Ne(n))*Se(r)-Se(n)*(i=Ne(a))*Se(e))/(i*o*c)):(a+n)/2}function As(e,a,r,n){var i;if(e==null)i=r*Ve,n.point(-oe,i),n.point(0,i),n.point(oe,i),n.point(oe,0),n.point(oe,-i),n.point(0,-i),n.point(-oe,-i),n.point(-oe,0),n.point(-oe,i);else if(ge(e[0]-a[0])>ue){var o=e[0]<a[0]?oe:-oe;i=r*o/2,n.point(-o,i),n.point(0,i),n.point(o,i)}else n.point(a[0],a[1])}function zs(e){var a=Ne(e),r=2*Ie,n=a>0,i=ge(a)>ue;function o(l,f,u,b){ks(b,e,r,u,l,f)}function c(l,f){return Ne(l)*Ne(f)>a}function s(l){var f,u,b,p,g;return{lineStart:function(){p=b=!1,g=1},point:function(v,h){var N=[v,h],E,y=c(v,h),z=n?y?0:x(v,h):y?x(v+(v<0?oe:-oe),h):0;if(!f&&(p=b=y)&&l.lineStart(),y!==b&&(E=d(f,N),(!E||Wt(f,E)||Wt(N,E))&&(N[2]=1)),y!==b)g=0,y?(l.lineStart(),E=d(N,f),l.point(E[0],E[1])):(E=d(f,N),l.point(E[0],E[1],2),l.lineEnd()),f=E;else if(i&&f&&n^y){var L;!(z&u)&&(L=d(N,f,!0))&&(g=0,n?(l.lineStart(),l.point(L[0][0],L[0][1]),l.point(L[1][0],L[1][1]),l.lineEnd()):(l.point(L[1][0],L[1][1]),l.lineEnd(),l.lineStart(),l.point(L[0][0],L[0][1],3)))}y&&(!f||!Wt(f,N))&&l.point(N[0],N[1]),f=N,b=y,u=z},lineEnd:function(){b&&l.lineEnd(),f=null},clean:function(){return g|(p&&b)<<1}}}function d(l,f,u){var b=gt(l),p=gt(f),g=[1,0,0],v=Qt(b,p),h=It(v,v),N=v[0],E=h-N*N;if(!E)return!u&&l;var y=a*h/E,z=-a*N/E,L=Qt(g,v),T=$t(g,y),S=$t(v,z);ma(T,S);var C=L,j=It(T,C),M=It(C,C),P=j*j-M*(It(T,T)-1);if(!(P<0)){var q=pt(P),w=$t(C,(-j-q)/M);if(ma(w,T),w=Sa(w),!u)return w;var A=l[0],O=f[0],U=l[1],W=f[1],H;O<A&&(H=A,A=O,O=H);var Q=O-A,B=ge(Q-oe)<ue,Y=B||Q<ue;if(!B&&W<U&&(H=U,U=W,W=H),Y?B?U+W>0^w[1]<(ge(w[0]-A)<ue?U:W):U<=w[1]&&w[1]<=W:Q>oe^(A<=w[0]&&w[0]<=O)){var ae=$t(C,(-j+q)/M);return ma(ae,T),[w,Sa(ae)]}}}function x(l,f){var u=n?e:oe-e,b=0;return l<-u?b|=1:l>u&&(b|=2),f<-u?b|=4:f>u&&(b|=8),b}return yr(c,s,o,n?[0,-e]:[-oe,e-oe])}function Ts(e,a,r,n,i,o){var c=e[0],s=e[1],d=a[0],x=a[1],l=0,f=1,u=d-c,b=x-s,p;if(p=r-c,!(!u&&p>0)){if(p/=u,u<0){if(p<l)return;p<f&&(f=p)}else if(u>0){if(p>f)return;p>l&&(l=p)}if(p=i-c,!(!u&&p<0)){if(p/=u,u<0){if(p>f)return;p>l&&(l=p)}else if(u>0){if(p<l)return;p<f&&(f=p)}if(p=n-s,!(!b&&p>0)){if(p/=b,b<0){if(p<l)return;p<f&&(f=p)}else if(b>0){if(p>f)return;p>l&&(l=p)}if(p=o-s,!(!b&&p<0)){if(p/=b,b<0){if(p>f)return;p>l&&(l=p)}else if(b>0){if(p<l)return;p<f&&(f=p)}return l>0&&(e[0]=c+l*u,e[1]=s+l*b),f<1&&(a[0]=c+f*u,a[1]=s+f*b),!0}}}}}var kt=1e9,_t=-kt;function qs(e,a,r,n){function i(x,l){return e<=x&&x<=r&&a<=l&&l<=n}function o(x,l,f,u){var b=0,p=0;if(x==null||(b=c(x,f))!==(p=c(l,f))||d(x,l)<0^f>0)do u.point(b===0||b===3?e:r,b>1?n:a);while((b=(b+f+4)%4)!==p);else u.point(l[0],l[1])}function c(x,l){return ge(x[0]-e)<ue?l>0?0:3:ge(x[0]-r)<ue?l>0?2:1:ge(x[1]-a)<ue?l>0?1:0:l>0?3:2}function s(x,l){return d(x.x,l.x)}function d(x,l){var f=c(x,1),u=c(l,1);return f!==u?f-u:f===0?l[1]-x[1]:f===1?x[0]-l[0]:f===2?x[1]-l[1]:l[0]-x[0]}return function(x){var l=x,f=br(),u,b,p,g,v,h,N,E,y,z,L,T={point:S,lineStart:P,lineEnd:q,polygonStart:j,polygonEnd:M};function S(A,O){i(A,O)&&l.point(A,O)}function C(){for(var A=0,O=0,U=b.length;O<U;++O)for(var W=b[O],H=1,Q=W.length,B=W[0],Y,ae,ne=B[0],Ee=B[1];H<Q;++H)Y=ne,ae=Ee,B=W[H],ne=B[0],Ee=B[1],ae<=n?Ee>n&&(ne-Y)*(n-ae)>(Ee-ae)*(e-Y)&&++A:Ee<=n&&(ne-Y)*(n-ae)<(Ee-ae)*(e-Y)&&--A;return A}function j(){l=f,u=[],b=[],L=!0}function M(){var A=C(),O=L&&A,U=(u=gr(u)).length;(O||U)&&(x.polygonStart(),O&&(x.lineStart(),o(null,null,1,x),x.lineEnd()),U&&vr(u,s,A,o,x),x.polygonEnd()),l=x,u=b=p=null}function P(){T.point=w,b&&b.push(p=[]),z=!0,y=!1,N=E=NaN}function q(){u&&(w(g,v),h&&y&&f.rejoin(),u.push(f.result())),T.point=S,y&&l.lineEnd()}function w(A,O){var U=i(A,O);if(b&&p.push([A,O]),z)g=A,v=O,h=U,z=!1,U&&(l.lineStart(),l.point(A,O));else if(U&&y)l.point(A,O);else{var W=[N=Math.max(_t,Math.min(kt,N)),E=Math.max(_t,Math.min(kt,E))],H=[A=Math.max(_t,Math.min(kt,A)),O=Math.max(_t,Math.min(kt,O))];Ts(W,H,e,a,r,n)?(y||(l.lineStart(),l.point(W[0],W[1])),l.point(H[0],H[1]),U||l.lineEnd(),L=!1):U&&(l.lineStart(),l.point(A,O),L=!1)}N=A,E=O,y=U}return T}}const za=e=>e;var xa=new lt,Ta=new lt,wr,kr,qa,La,tt={point:He,lineStart:He,lineEnd:He,polygonStart:function(){tt.lineStart=Ls,tt.lineEnd=Ms},polygonEnd:function(){tt.lineStart=tt.lineEnd=tt.point=He,xa.add(ge(Ta)),Ta=new lt},result:function(){var e=xa/2;return xa=new lt,e}};function Ls(){tt.point=Rs}function Rs(e,a){tt.point=jr,wr=qa=e,kr=La=a}function jr(e,a){Ta.add(La*e-qa*a),qa=e,La=a}function Ms(){jr(wr,kr)}var bt=1/0,Jt=bt,Tt=-bt,Xt=Tt,Zt={point:Os,lineStart:He,lineEnd:He,polygonStart:He,polygonEnd:He,result:function(){var e=[[bt,Jt],[Tt,Xt]];return Tt=Xt=-(Jt=bt=1/0),e}};function Os(e,a){e<bt&&(bt=e),e>Tt&&(Tt=e),a<Jt&&(Jt=a),a>Xt&&(Xt=a)}var Ra=0,Ma=0,jt=0,ea=0,ta=0,ft=0,Oa=0,Fa=0,Nt=0,Nr,Sr,Ke,Qe,Ue={point:ct,lineStart:On,lineEnd:Fn,polygonStart:function(){Ue.lineStart=Ps,Ue.lineEnd=Is},polygonEnd:function(){Ue.point=ct,Ue.lineStart=On,Ue.lineEnd=Fn},result:function(){var e=Nt?[Oa/Nt,Fa/Nt]:ft?[ea/ft,ta/ft]:jt?[Ra/jt,Ma/jt]:[NaN,NaN];return Ra=Ma=jt=ea=ta=ft=Oa=Fa=Nt=0,e}};function ct(e,a){Ra+=e,Ma+=a,++jt}function On(){Ue.point=Fs}function Fs(e,a){Ue.point=Ds,ct(Ke=e,Qe=a)}function Ds(e,a){var r=e-Ke,n=a-Qe,i=pt(r*r+n*n);ea+=i*(Ke+e)/2,ta+=i*(Qe+a)/2,ft+=i,ct(Ke=e,Qe=a)}function Fn(){Ue.point=ct}function Ps(){Ue.point=$s}function Is(){Er(Nr,Sr)}function $s(e,a){Ue.point=Er,ct(Nr=Ke=e,Sr=Qe=a)}function Er(e,a){var r=e-Ke,n=a-Qe,i=pt(r*r+n*n);ea+=i*(Ke+e)/2,ta+=i*(Qe+a)/2,ft+=i,i=Qe*e-Ke*a,Oa+=i*(Ke+e),Fa+=i*(Qe+a),Nt+=i*3,ct(Ke=e,Qe=a)}function Cr(e){this._context=e}Cr.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,a){switch(this._point){case 0:{this._context.moveTo(e,a),this._point=1;break}case 1:{this._context.lineTo(e,a);break}default:{this._context.moveTo(e+this._radius,a),this._context.arc(e,a,this._radius,0,We);break}}},result:He};var Da=new lt,ha,Ar,zr,St,Et,qt={point:He,lineStart:function(){qt.point=Bs},lineEnd:function(){ha&&Tr(Ar,zr),qt.point=He},polygonStart:function(){ha=!0},polygonEnd:function(){ha=null},result:function(){var e=+Da;return Da=new lt,e}};function Bs(e,a){qt.point=Tr,Ar=St=e,zr=Et=a}function Tr(e,a){St-=e,Et-=a,Da.add(pt(St*St+Et*Et)),St=e,Et=a}let Dn,aa,Pn,In;class $n{constructor(a){this._append=a==null?qr:_s(a),this._radius=4.5,this._=""}pointRadius(a){return this._radius=+a,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(a,r){switch(this._point){case 0:{this._append`M${a},${r}`,this._point=1;break}case 1:{this._append`L${a},${r}`;break}default:{if(this._append`M${a},${r}`,this._radius!==Pn||this._append!==aa){const n=this._radius,i=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,Pn=n,aa=this._append,In=this._,this._=i}this._+=In;break}}}result(){const a=this._;return this._="",a.length?a:null}}function qr(e){let a=1;this._+=e[0];for(const r=e.length;a<r;++a)this._+=arguments[a]+e[a]}function _s(e){const a=Math.floor(e);if(!(a>=0))throw new RangeError(`invalid digits: ${e}`);if(a>15)return qr;if(a!==Dn){const r=10**a;Dn=a,aa=function(i){let o=1;this._+=i[0];for(const c=i.length;o<c;++o)this._+=Math.round(arguments[o]*r)/r+i[o]}}return aa}function Us(e,a){let r=3,n=4.5,i,o;function c(s){return s&&(typeof n=="function"&&o.pointRadius(+n.apply(this,arguments)),mt(s,i(o))),o.result()}return c.area=function(s){return mt(s,i(tt)),tt.result()},c.measure=function(s){return mt(s,i(qt)),qt.result()},c.bounds=function(s){return mt(s,i(Zt)),Zt.result()},c.centroid=function(s){return mt(s,i(Ue)),Ue.result()},c.projection=function(s){return arguments.length?(i=s==null?(e=null,za):(e=s).stream,c):e},c.context=function(s){return arguments.length?(o=s==null?(a=null,new $n(r)):new Cr(a=s),typeof n!="function"&&o.pointRadius(n),c):a},c.pointRadius=function(s){return arguments.length?(n=typeof s=="function"?s:(o.pointRadius(+s),+s),c):n},c.digits=function(s){if(!arguments.length)return r;if(s==null)r=null;else{const d=Math.floor(s);if(!(d>=0))throw new RangeError(`invalid digits: ${s}`);r=d}return a===null&&(o=new $n(r)),c},c.projection(e).digits(r).context(a)}function Ga(e){return function(a){var r=new Pa;for(var n in e)r[n]=e[n];return r.stream=a,r}}function Pa(){}Pa.prototype={constructor:Pa,point:function(e,a){this.stream.point(e,a)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Ka(e,a,r){var n=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),n!=null&&e.clipExtent(null),mt(r,e.stream(Zt)),a(Zt.result()),n!=null&&e.clipExtent(n),e}function Lr(e,a,r){return Ka(e,function(n){var i=a[1][0]-a[0][0],o=a[1][1]-a[0][1],c=Math.min(i/(n[1][0]-n[0][0]),o/(n[1][1]-n[0][1])),s=+a[0][0]+(i-c*(n[1][0]+n[0][0]))/2,d=+a[0][1]+(o-c*(n[1][1]+n[0][1]))/2;e.scale(150*c).translate([s,d])},r)}function Vs(e,a,r){return Lr(e,[[0,0],a],r)}function Hs(e,a,r){return Ka(e,function(n){var i=+a,o=i/(n[1][0]-n[0][0]),c=(i-o*(n[1][0]+n[0][0]))/2,s=-o*n[0][1];e.scale(150*o).translate([c,s])},r)}function Ws(e,a,r){return Ka(e,function(n){var i=+a,o=i/(n[1][1]-n[0][1]),c=-o*n[0][0],s=(i-o*(n[1][1]+n[0][1]))/2;e.scale(150*o).translate([c,s])},r)}var Bn=16,Ys=Ne(30*Ie);function _n(e,a){return+a?Ks(e,a):Gs(e)}function Gs(e){return Ga({point:function(a,r){a=e(a,r),this.stream.point(a[0],a[1])}})}function Ks(e,a){function r(n,i,o,c,s,d,x,l,f,u,b,p,g,v){var h=x-n,N=l-i,E=h*h+N*N;if(E>4*a&&g--){var y=c+u,z=s+b,L=d+p,T=pt(y*y+z*z+L*L),S=zt(L/=T),C=ge(ge(L)-1)<ue||ge(o-f)<ue?(o+f)/2:At(z,y),j=e(C,S),M=j[0],P=j[1],q=M-n,w=P-i,A=N*q-h*w;(A*A/E>a||ge((h*q+N*w)/E-.5)>.3||c*u+s*b+d*p<Ys)&&(r(n,i,o,c,s,d,M,P,C,y/=T,z/=T,L,g,v),v.point(M,P),r(M,P,C,y,z,L,x,l,f,u,b,p,g,v))}}return function(n){var i,o,c,s,d,x,l,f,u,b,p,g,v={point:h,lineStart:N,lineEnd:y,polygonStart:function(){n.polygonStart(),v.lineStart=z},polygonEnd:function(){n.polygonEnd(),v.lineStart=N}};function h(S,C){S=e(S,C),n.point(S[0],S[1])}function N(){f=NaN,v.point=E,n.lineStart()}function E(S,C){var j=gt([S,C]),M=e(S,C);r(f,u,l,b,p,g,f=M[0],u=M[1],l=S,b=j[0],p=j[1],g=j[2],Bn,n),n.point(f,u)}function y(){v.point=h,n.lineEnd()}function z(){N(),v.point=L,v.lineEnd=T}function L(S,C){E(i=S,C),o=f,c=u,s=b,d=p,x=g,v.point=E}function T(){r(f,u,l,b,p,g,o,c,i,s,d,x,Bn,n),v.lineEnd=y,y()}return v}}var Qs=Ga({point:function(e,a){this.stream.point(e*Ie,a*Ie)}});function Js(e){return Ga({point:function(a,r){var n=e(a,r);return this.stream.point(n[0],n[1])}})}function Xs(e,a,r,n,i){function o(c,s){return c*=n,s*=i,[a+e*c,r-e*s]}return o.invert=function(c,s){return[(c-a)/e*n,(r-s)/e*i]},o}function Un(e,a,r,n,i,o){if(!o)return Xs(e,a,r,n,i);var c=Ne(o),s=Se(o),d=c*e,x=s*e,l=c/e,f=s/e,u=(s*r-c*a)/e,b=(s*a+c*r)/e;function p(g,v){return g*=n,v*=i,[d*g-x*v+a,r-x*g-d*v]}return p.invert=function(g,v){return[n*(l*g-f*v+u),i*(b-f*g-l*v)]},p}function Zs(e){return el(function(){return e})()}function el(e){var a,r=150,n=480,i=250,o=0,c=0,s=0,d=0,x=0,l,f=0,u=1,b=1,p=null,g=Mn,v=null,h,N,E,y=za,z=.5,L,T,S,C,j;function M(A){return S(A[0]*Ie,A[1]*Ie)}function P(A){return A=S.invert(A[0],A[1]),A&&[A[0]*Ze,A[1]*Ze]}M.stream=function(A){return C&&j===A?C:C=Qs(Js(l)(g(L(y(j=A)))))},M.preclip=function(A){return arguments.length?(g=A,p=void 0,w()):g},M.postclip=function(A){return arguments.length?(y=A,v=h=N=E=null,w()):y},M.clipAngle=function(A){return arguments.length?(g=+A?zs(p=A*Ie):(p=null,Mn),w()):p*Ze},M.clipExtent=function(A){return arguments.length?(y=A==null?(v=h=N=E=null,za):qs(v=+A[0][0],h=+A[0][1],N=+A[1][0],E=+A[1][1]),w()):v==null?null:[[v,h],[N,E]]},M.scale=function(A){return arguments.length?(r=+A,q()):r},M.translate=function(A){return arguments.length?(n=+A[0],i=+A[1],q()):[n,i]},M.center=function(A){return arguments.length?(o=A[0]%360*Ie,c=A[1]%360*Ie,q()):[o*Ze,c*Ze]},M.rotate=function(A){return arguments.length?(s=A[0]%360*Ie,d=A[1]%360*Ie,x=A.length>2?A[2]%360*Ie:0,q()):[s*Ze,d*Ze,x*Ze]},M.angle=function(A){return arguments.length?(f=A%360*Ie,q()):f*Ze},M.reflectX=function(A){return arguments.length?(u=A?-1:1,q()):u<0},M.reflectY=function(A){return arguments.length?(b=A?-1:1,q()):b<0},M.precision=function(A){return arguments.length?(L=_n(T,z=A*A),w()):pt(z)},M.fitExtent=function(A,O){return Lr(M,A,O)},M.fitSize=function(A,O){return Vs(M,A,O)},M.fitWidth=function(A,O){return Hs(M,A,O)},M.fitHeight=function(A,O){return Ws(M,A,O)};function q(){var A=Un(r,0,0,u,b,f).apply(null,a(o,c)),O=Un(r,n-A[0],i-A[1],u,b,f);return l=ws(s,d,x),T=Ca(a,O),S=Ca(l,T),L=_n(T,z),w()}function w(){return C=j=null,M}return function(){return a=e.apply(this,arguments),M.invert=a.invert&&P,q()}}function Rr(e,a){var r=a*a,n=r*r;return[e*(.8707-.131979*r+n*(-.013791+n*(.003971*r-.001529*n))),a*(1.007226+r*(.015085+n*(-.044475+.028874*r-.005916*n)))]}Rr.invert=function(e,a){var r=a,n=25,i;do{var o=r*r,c=o*o;r-=i=(r*(1.007226+o*(.015085+c*(-.044475+.028874*o-.005916*c)))-a)/(1.007226+o*(.015085*3+c*(-.044475*7+.028874*9*o-.005916*11*c)))}while(ge(i)>ue&&--n>0);return[e/(.8707+(o=r*r)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),r]};function tl(){return Zs(Rr).scale(175.295)}function al(e){return e}function nl(e){if(e==null)return al;var a,r,n=e.scale[0],i=e.scale[1],o=e.translate[0],c=e.translate[1];return function(s,d){d||(a=r=0);var x=2,l=s.length,f=new Array(l);for(f[0]=(a+=s[0])*n+o,f[1]=(r+=s[1])*i+c;x<l;)f[x]=s[x],++x;return f}}function rl(e,a){for(var r,n=e.length,i=n-a;i<--n;)r=e[i],e[i++]=e[n],e[n]=r}function ol(e,a){return typeof a=="string"&&(a=e.objects[a]),a.type==="GeometryCollection"?{type:"FeatureCollection",features:a.geometries.map(function(r){return Vn(e,r)})}:Vn(e,a)}function Vn(e,a){var r=a.id,n=a.bbox,i=a.properties==null?{}:a.properties,o=il(e,a);return r==null&&n==null?{type:"Feature",properties:i,geometry:o}:n==null?{type:"Feature",id:r,properties:i,geometry:o}:{type:"Feature",id:r,bbox:n,properties:i,geometry:o}}function il(e,a){var r=nl(e.transform),n=e.arcs;function i(l,f){f.length&&f.pop();for(var u=n[l<0?~l:l],b=0,p=u.length;b<p;++b)f.push(r(u[b],b));l<0&&rl(f,p)}function o(l){return r(l)}function c(l){for(var f=[],u=0,b=l.length;u<b;++u)i(l[u],f);return f.length<2&&f.push(f[0]),f}function s(l){for(var f=c(l);f.length<4;)f.push(f[0]);return f}function d(l){return l.map(s)}function x(l){var f=l.type,u;switch(f){case"GeometryCollection":return{type:f,geometries:l.geometries.map(x)};case"Point":u=o(l.coordinates);break;case"MultiPoint":u=l.coordinates.map(o);break;case"LineString":u=c(l.arcs);break;case"MultiLineString":u=l.arcs.map(c);break;case"Polygon":u=d(l.arcs);break;case"MultiPolygon":u=l.arcs.map(d);break;default:return null}return{type:f,coordinates:u}}return x(a)}const Mr={US:[{k:["new york","nyc","brooklyn","manhattan"],ll:[-74,40.7]},{k:["san francisco","sf","palo alto","mountain view","menlo park","san jose","oakland"],ll:[-122.3,37.6]},{k:["los angeles","santa monica","irvine"],ll:[-118.2,34.1]},{k:["seattle","bellevue","redmond"],ll:[-122.3,47.6]},{k:["austin"],ll:[-97.7,30.3]},{k:["boston","cambridge"],ll:[-71.1,42.4]},{k:["chicago"],ll:[-87.6,41.9]},{k:["miami"],ll:[-80.2,25.8]},{k:["denver","boulder"],ll:[-105,39.7]},{k:["atlanta"],ll:[-84.4,33.7]},{k:["washington","arlington","dc"],ll:[-77,38.9]},{k:["dallas","houston"],ll:[-96.8,31.5]},{k:["salt lake","provo"],ll:[-111.9,40.8]},{k:["phoenix","tempe"],ll:[-112.1,33.4]}],CA:[{k:["toronto","waterloo"],ll:[-79.4,43.7]},{k:["montreal"],ll:[-73.6,45.5]},{k:["vancouver"],ll:[-123.1,49.3]},{k:["calgary"],ll:[-114.1,51]},{k:["ottawa"],ll:[-75.7,45.4]}],AU:[{k:["sydney"],ll:[151.2,-33.9]},{k:["melbourne"],ll:[145,-37.8]},{k:["brisbane"],ll:[153,-27.5]},{k:["perth"],ll:[115.9,-32]}],BR:[{k:["sao paulo"],ll:[-46.6,-23.5]},{k:["rio"],ll:[-43.2,-22.9]}],IN:[{k:["bengaluru","bangalore"],ll:[77.6,13]},{k:["mumbai"],ll:[72.9,19.1]},{k:["delhi","gurgaon","gurugram","noida"],ll:[77.2,28.6]},{k:["hyderabad"],ll:[78.5,17.4]},{k:["chennai"],ll:[80.3,13.1]}],CN:[{k:["beijing","pekin"],ll:[116.4,39.9]},{k:["shanghai"],ll:[121.5,31.2]},{k:["shenzhen","canton","guangzhou"],ll:[113.9,22.7]}],RU:[{k:["moscou","moscow"],ll:[37.6,55.8]},{k:["saint petersbourg","saint petersburg"],ll:[30.3,59.9]}]},sl=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim();function ll(e,a,r){const n=Mr[e];if(!n||!n.length)return-1;const i=sl(a||"");if(i){for(let o=0;o<n.length;o++)if(n[o].k.some(c=>i.includes(c)))return o}return Math.floor(r*n.length)%n.length}let Ut=null;function cl(){return Ut||(Ut=(async()=>{var e;try{const a=await fetch("/world/countries-110m.json");if(!a.ok)return null;const r=await a.json(),n=(e=r==null?void 0:r.objects)==null?void 0:e.countries;if(!n)return null;const i=ol(r,n),o=tl().fitExtent([[8,8],[992,492]],{type:"Sphere"}),c=Us(o),s=(i.features||[]).filter(l=>{var f;return(((f=l.properties)==null?void 0:f.name)||"")!=="Antarctica"}).map(l=>{var b;const f=((b=l.properties)==null?void 0:b.name)||"",u=c(l)||"";return u?{i2:Lo(f)||null,n:f,d:u}:null}).filter(l=>!!l);if(!s.length)return null;const d={};for(const[l,f]of Object.entries(Ro)){const u=o(f);u&&(d[l]={x:u[0],y:u[1]})}const x={};for(const[l,f]of Object.entries(Mr)){const u=f.map(b=>o(b.ll)).filter(b=>!!b).map(([b,p])=>({x:b,y:p}));u.length&&(x[l]=u)}return{key:"monde",viewBox:"0 0 1000 500",fr:"Monde",en:"World",countries:s,anchors:d,metros:x}}catch{return null}})(),Ut)}function dl(e){const[a,r]=m.useState(null);return m.useEffect(()=>{if(!e||a)return;let n=!1;return cl().then(i=>{!n&&i&&r(i)}),()=>{n=!0}},[e,a]),a}const pl={"northam:US":{fx:.64,fy:.68,sx:.44,sy:.28},"northam:CA":{fx:.58,fy:.86,sx:.34,sy:.1},"oceania:AU":{fx:.72,fy:.62,sx:.34,sy:.3},"europe:RU":{fx:.18,fy:.62,sx:.14,sy:.3}},Hn=["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"];function Wn(e){let a=2166136261;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function ul(e,a){const[r,n]=m.useState(1);return m.useEffect(()=>{let i=!0,o=0;const c=()=>{var x;if(!i)return;const d=(x=e.current)==null?void 0:x.getScreenCTM();d&&d.a>0?n(d.a):o=requestAnimationFrame(c)};c();const s=new ResizeObserver(()=>c());return e.current&&s.observe(e.current),window.addEventListener("resize",c),()=>{i=!1,cancelAnimationFrame(o),s.disconnect(),window.removeEventListener("resize",c)}},[e,a]),r}function Yn({msgs:e}){const[a,r]=m.useState(0);m.useEffect(()=>{const i=window.setInterval(()=>r(o=>o+1),2400);return()=>window.clearInterval(i)},[]);const n=[[46,34],[52,41],[41,46],[57,30],[49,52],[36,38],[61,45],[44,27]];return t.jsxs("div",{className:"mapskel","aria-hidden":"true",children:[n.map(([i,o],c)=>t.jsx("i",{style:{left:i+"%",top:o+"%","--d":c*.18+"s"}},c)),t.jsx("span",{className:"mskm",children:e[a%e.length]})]})}function ml(){const{st:e,dispatch:a,scoped:r,pipe:n,markRow:i,markedId:o,byId:c,lang:s,t:d,data:x,dossiers:l}=I(),f=x.loading&&!l.length,u=m.useRef(null),b=m.useRef(null),p=dl(e.continent==="monde"),g=e.continent==="monde"?p:_a.find(w=>w.key===e.continent)||null,v=ul(u,e.continent+":"+e.mapFolded+":"+!!g),[h,N]=m.useState(new Map),[E,y]=m.useState(null);m.useEffect(()=>{const w=u.current;if(!w)return;const A=new Map;w.querySelectorAll("path[data-i2]").forEach(O=>{const U=O.dataset.i2;if(U)try{const W=O.getBBox();W.width>0&&A.set(U,{x:W.x,y:W.y,w:W.width,h:W.height})}catch{}}),N(A)},[e.continent,v,g]);const z=m.useMemo(()=>r.filter(w=>w.cc),[r]),L=m.useMemo(()=>{const w=new Map;return z.forEach(A=>w.set(A.cc,(w.get(A.cc)||0)+1)),w},[z]),T=e.continent==="monde"&&p?p.anchors:null,S=e.continent==="monde"&&p?p.metros:null,C=m.useMemo(()=>z.map(w=>{const A=Wn(w.name||w.id||""),O=Wn((w.id||w.name||"")+"·y");if(T&&w.cc){const B=S?S[w.cc]:void 0;if(B&&B.length){const ae=ll(w.cc,w.city,A);if(ae>=0&&B[ae])return{d:w,x:B[ae].x+(A-.5)*5,y:B[ae].y+(O-.5)*5}}const Y=T[w.cc];if(Y)return{d:w,x:Y.x+(A-.5)*10,y:Y.y+(O-.5)*10}}const U=w.cc?h.get(w.cc):void 0;if(!U)return null;const W=pl[`${e.continent}:${w.cc||""}`];if(W)return{d:w,x:U.x+U.w*(W.fx+(A-.5)*W.sx),y:U.y+U.h*(W.fy+(O-.5)*W.sy)};const H=(A-.5)*Math.min(U.w*.55,60),Q=(O-.5)*Math.min(U.h*.55,60);return{d:w,x:U.x+U.w/2+H,y:U.y+U.h/2+Q}}).filter(w=>!!w),[z,h,T,S,e.continent]),j=w=>v>0?w/v:w,M=m.useMemo(()=>n?[0,1,2,3,4,5].map(w=>({c:Hn[w],fr:d.plabels[w].toUpperCase(),en:d.plabels[w].toUpperCase(),n:r.filter(A=>A.kind==="target"&&Ae(A)===w).length})).filter(w=>w.n>0):ln.map((w,A)=>({...w,n:r.filter(O=>cn(O)===A).length})),[r,n,d.plabels]),P=o?c.get(o):null,q=P?C.find(w=>w.d.id===P.id):null;return g?t.jsxs("div",{className:"mapzone"+(f?" waiting":""),ref:b,children:[f&&t.jsx(Yn,{msgs:d.loadMsgs}),t.jsxs("svg",{ref:u,viewBox:g.viewBox,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":s==="fr"?g.fr:g.en,onMouseLeave:()=>{y(null),i(null)},children:[t.jsx("g",{children:g.countries.map((w,A)=>t.jsx("g",{className:"ct"+(w.i2&&L.get(w.i2)?"":" empty"),children:t.jsx("path",{d:w.d,"data-i2":w.i2||void 0})},A))}),t.jsx("g",{children:C.map(w=>{const A=ln[cn(w.d)],O=!!Te(w.d),U=w.d.kind==="target",W=n&&U?Hn[Ae(w.d)]:A.c,H=!n&&$e(w.d);return t.jsxs("g",{className:"co"+(H?" done":""),onMouseEnter:()=>{var Y,ae;const Q=(Y=b.current)==null?void 0:Y.getBoundingClientRect(),B=(ae=u.current)==null?void 0:ae.createSVGPoint();if(B&&u.current&&Q){B.x=w.x,B.y=w.y;const ne=B.matrixTransform(u.current.getScreenCTM());y({x:ne.x-Q.left,y:ne.y-Q.top,label:w.d.name+" · "+(yt(w.d.cc,s)||w.d.countryLabel||"")})}i(w.d.id)},onMouseLeave:()=>{y(null),i(null)},onClick:()=>{var Y;const Q=(Y=u.current)==null?void 0:Y.createSVGPoint();let B=null;if(Q&&u.current){Q.x=w.x,Q.y=w.y;const ae=Q.matrixTransform(u.current.getScreenCTM());B={x:ae.x,y:ae.y}}a({type:"popup",id:w.d.id,anchor:B})},children:[t.jsx("circle",{className:"h",cx:w.x,cy:w.y,r:j(Math.max(11,A.px+7))}),t.jsx("circle",{className:"v",cx:w.x,cy:w.y,r:j(A.px),fill:W,stroke:O?"#DC2626":"#ffffff",strokeWidth:j(O?2.2:1.3)})]},w.d.id||w.d.name)})}),q&&t.jsx("circle",{className:"ring on",cx:q.x,cy:q.y,r:j(13),fill:"none",stroke:"#0F172A",strokeWidth:j(2)})]}),t.jsx("div",{className:"hov"+(E?" on":""),style:E?{left:E.x,top:E.y}:void 0,children:E==null?void 0:E.label}),t.jsx("div",{className:"legend",children:M.map((w,A)=>t.jsxs("span",{children:[t.jsx("i",{style:{"--c":w.c}}),s==="fr"?w.fr:w.en," ",t.jsx("b",{children:w.n})]},A))}),r.some(w=>!w.cc)&&t.jsx("div",{className:"legend",style:{left:"auto",right:10},children:t.jsxs("span",{children:["🌐 ",d.notLocated," ",t.jsx("b",{children:r.filter(w=>!w.cc).length})]})})]}):t.jsx("div",{className:"mapzone"+(f?" waiting":""),ref:b,children:t.jsx(Yn,{msgs:d.loadMsgs})})}function fl(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!r)return e;const i=(a==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||r[2],o=Number(r[3]);return a==="en"?`${i} ${o}, ${r[1]}`:`${o} ${i} ${r[1]}`}function Or({compact:e=!1}){const{st:a,dispatch:r,dossiers:n,t:i,pipe:o,contName:c,lang:s}=I(),d=a.filters,[x,l]=m.useState(!1),f=m.useRef(null),u=m.useMemo(()=>a.continent==="monde"?n:n.filter(S=>S.continent===a.continent),[n,a.continent]),b=S=>u.filter(C=>S!=="country"&&d.country.length&&!d.country.includes(C.cc||"")?!1:Va(C,d,o,S==="country"?void 0:S)),p=m.useMemo(()=>{const S=b("win"),C=j=>S.filter(M=>(M.date?Math.max(0,Math.floor((Date.now()-Date.parse(M.date))/864e5)):9999)<=j).length;return[C(0),C(7),C(30),S.length]},[u,d,o]),g=m.useMemo(()=>d.day?b("win").filter(S=>(S.date||"").slice(0,10)===d.day).length:0,[u,d,o]),v=(d.signalOnly?1:0)+d.sector.length+d.country.length+d.engine.length+d.stage.length+d.angle.length+d.memoLevel.length,h=v+(d.acquirer.trim()?1:0)+(d.day||d.win!=="all"?1:0)+(d.search.trim()?1:0);m.useEffect(()=>{a.openFacet&&l(!1)},[a.openFacet]),m.useEffect(()=>{if(!x)return;const S=j=>{var M;(M=f.current)!=null&&M.contains(j.target)||l(!1)},C=j=>{j.key==="Escape"&&l(!1)};return document.addEventListener("mousedown",S),document.addEventListener("keydown",C),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("keydown",C)}},[x]);const N=(S,C,j,M="fbtn")=>t.jsxs("button",{type:"button",className:M,"aria-expanded":a.openFacet===S,onClick:()=>r({type:"openFacet",facet:S}),children:[t.jsx("span",{className:"fl",children:C}),j>0&&t.jsx("span",{className:"n",children:j}),t.jsx("span",{className:"cv",children:"▾"})]},S),E=d.day?t.jsxs("div",{className:"seg",children:[t.jsxs("button",{type:"button","aria-pressed":!0,children:[t.jsx("span",{className:"sl",children:i.fDay(fl(d.day,s))}),t.jsx("b",{children:g})]}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{day:"",win:"all"}}),children:i.fDayOff})]}):t.jsx("div",{className:"seg",children:["1","7","30","all"].map((S,C)=>t.jsxs("button",{type:"button","aria-pressed":d.win===S,onClick:()=>r({type:"filters",patch:{win:S}}),children:[t.jsx("span",{className:"sl",children:i.dates[C]}),t.jsx("b",{children:p[C]})]},S))}),y=t.jsxs("span",{className:"fsrch",children:["🔍",t.jsx("input",{placeholder:i.identSearch,value:d.search,onChange:S=>r({type:"filters",patch:{search:S.target.value}})})]}),z=t.jsxs("div",{className:"facets",children:[t.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":a.openFacet==="sig",onClick:()=>r({type:"openFacet",facet:"sig"}),children:[t.jsx("span",{className:"fl",children:i.fSignal}),d.signalOnly&&t.jsx("span",{className:"n",children:d.signalEngines.length||"✓"}),t.jsx("span",{className:"cv",children:"▾"})]}),d.sector.length===1?t.jsxs("button",{type:"button",className:"fbtn on","aria-expanded":a.openFacet==="sec",onClick:()=>r({type:"openFacet",facet:"sec"}),title:d.sector[0],children:[t.jsx("span",{className:"fl",children:i.fSector}),t.jsx("span",{className:"n",style:{maxWidth:"16ch",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:d.sector[0]}),t.jsx("span",{className:"cv",children:"▾"})]}):N("sec",i.fSector,d.sector.length),N("pay",i.fCountry,d.country.length),N("det",i.fEngine,d.engine.length),N("sta",i.fStage,d.stage.length),o&&N("ang","Angle",d.angle.length),o&&N("mem","Mémo",d.memoLevel.length)]}),L=(S=!1)=>t.jsxs("div",{className:"frow2",children:[h>0&&t.jsxs("button",{type:"button",className:"resetbtn on",title:i.clearTitle(u.length,c),onClick:()=>r({type:"reset"}),children:[t.jsx("span",{className:"rot",children:"↺"}),t.jsx("span",{children:i.clear(h)})]}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:i.alertBtn}),S&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>r({type:"mapFold",folded:!1}),children:i.showMap})]}),T=t.jsxs("div",{className:"fmenu",ref:f,children:[t.jsxs("button",{type:"button",className:"fbtn fmenu-btn"+(v?" on":""),"aria-expanded":x,"aria-haspopup":"true",onClick:()=>{l(S=>!S),a.openFacet&&r({type:"openFacet",facet:null})},children:[t.jsx("span",{className:"fl",children:i.fMenu}),v>0&&t.jsx("span",{className:"n",children:v}),t.jsx("span",{className:"cv",children:x?"▴":"▾"})]}),x&&t.jsx("div",{className:"fmenu-pop",role:"menu",children:z})]});return e?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"fstrip"+(d.day?" noday":""),children:[!d.day&&t.jsx("div",{className:"fstrip-a",children:E}),t.jsxs("div",{className:"fstrip-b",children:[y,T,L(!0)]})]}),a.openFacet&&t.jsx(Gn,{poolFor:b})]}):t.jsxs(t.Fragment,{children:[t.jsxs("aside",{className:"fbar",children:[E,y,z,t.jsx("span",{className:"fgrow"}),L()]}),a.openFacet&&t.jsx(Gn,{poolFor:b})]})}function Gn({poolFor:e}){const{st:a,dispatch:r,t:n,lang:i}=I(),o=a.filters,c=a.openFacet,{title:s,cols:d,options:x}=m.useMemo(()=>{if(c==="sig"){const p=e("signal").filter(h=>Te(h)),g=new Map;p.forEach(h=>{const N=h.engine||"";g.set(N,(g.get(N)||0)+1)});const v=[{v:"*",label:n.fpSigAll,n:p.length,html:!0,on:o.signalOnly&&!o.signalEngines.length},...ya([...g.keys()],i).map(h=>({v:h,label:st(h)+" "+Je(h,i),n:g.get(h)||0,html:!1,on:o.signalOnly&&o.signalEngines.includes(h)}))];return{title:n.fpSigTitle,cols:2,options:v}}if(c==="sec"){const p=e("sector"),g=new Map;return p.forEach(v=>{v.sector&&g.set(v.sector,(g.get(v.sector)||0)+1)}),{title:n.fSector.toUpperCase(),cols:3,options:[...g.entries()].sort((v,h)=>h[1]-v[1]).map(([v,h])=>({v,label:v,n:h,html:!1,on:o.sector.includes(v)}))}}if(c==="pay"){const p=e("country"),g=new Map;return p.forEach(v=>{v.cc&&g.set(v.cc,(g.get(v.cc)||0)+1)}),{title:n.fCountry.toUpperCase(),cols:3,options:[...g.entries()].sort((v,h)=>h[1]-v[1]).map(([v,h])=>({v,label:yt(v,i)||v,n:h,html:!1,on:o.country.includes(v)}))}}if(c==="det"){const p=e("engine"),g=new Map;return p.forEach(v=>{v.engine&&g.set(v.engine,(g.get(v.engine)||0)+1)}),{title:n.fEngine.toUpperCase(),cols:2,options:ya([...g.keys()],i).map(v=>({v,label:st(v)+" "+Je(v,i)+' <span style="color:var(--dim);font-size:10px">· '+Mo(Oo(v),i)+"</span>",n:g.get(v)||0,html:!0,on:o.engine.includes(v)}))}}if(c==="ang"){const p=e("angle"),g=new Map;return p.forEach(v=>{v.angle&&g.set(v.angle,(g.get(v.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...g.entries()].sort((v,h)=>h[1]-v[1]).map(([v,h])=>({v,label:v.replace(/[_-]+/g," "),n:h,html:!1,on:o.angle.includes(v)}))}}if(c==="mem"){const p=e("memoLevel"),g=new Map;p.forEach(h=>{if(h.kind==="target"){const N=$a(h);g.set(N,(g.get(N)||0)+1)}});const v=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(h=>({v:String(h),label:v[h],n:g.get(h)||0,html:!1,on:o.memoLevel.includes(h)}))}}const u=e("stage"),b=new Map;return u.forEach(p=>{p.stage&&b.set(p.stage,(b.get(p.stage)||0)+1)}),{title:n.fStage.toUpperCase(),cols:2,options:[...b.entries()].sort((p,g)=>g[1]-p[1]).map(([p,g])=>({v:p,label:p,n:g,html:!1,on:o.stage.includes(p)}))}},[c,a,i]),l=u=>{if(c==="sig"){if(u==="*")r({type:"filters",patch:{signalOnly:!(o.signalOnly&&!o.signalEngines.length),signalEngines:[]}});else{const p=o.signalEngines.includes(u)?o.signalEngines.filter(g=>g!==u):[...o.signalEngines,u];r({type:"filters",patch:{signalOnly:!0,signalEngines:p}})}return}if(c==="mem"){r({type:"toggleMemoLevel",value:Number(u)});return}r({type:"toggleFacet",facet:c==="sec"?"sector":c==="pay"?"country":c==="det"?"engine":c==="ang"?"angle":"stage",value:u})},f=()=>{r(c==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:c==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:c==="sec"?"sector":c==="pay"?"country":c==="det"?"engine":c==="ang"?"angle":"stage"})};return t.jsxs("div",{className:"fpanel on",children:[t.jsxs("div",{className:"ph",children:[t.jsx("b",{children:s}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",onClick:f,children:n.fpNone}),t.jsx("button",{type:"button",onClick:()=>r({type:"openFacet",facet:null}),children:n.fpClose})]}),t.jsx("div",{className:"fcols"+(d===2?" two":""),children:x.map(u=>t.jsxs("button",{type:"button",className:"opt","aria-pressed":u.on,onClick:()=>l(u.v),children:[t.jsx("span",{className:"bx"}),u.html?t.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:u.label}}):t.jsx("span",{className:"l",children:u.label}),t.jsx("span",{className:"n",children:u.n})]},u.v))}),t.jsxs("div",{className:"pf",children:[t.jsx("span",{className:"t",children:n.alertReady}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:n.alertCreate})]})]})}function Fr({mapToggle:e=!0,variant:a="tabs"}){const{dossiers:r,st:n,dispatch:i,pipe:o,lang:c,t:s}=I(),d=m.useMemo(()=>{const b={};return r.forEach(p=>{Va(p,n.filters,o)&&(b.monde=(b.monde||0)+1,p.continent&&(b[p.continent]=(b[p.continent]||0)+1))}),b},[r,n.filters,o]),[x,l]=m.useState(!1),f=m.useRef(null);m.useEffect(()=>{if(!x)return;const b=g=>{var v;(v=f.current)!=null&&v.contains(g.target)||l(!1)},p=g=>{g.key==="Escape"&&l(!1)};return document.addEventListener("mousedown",b),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",p)}},[x]);const u=b=>{const p=_a.find(g=>g.key===b);return b==="monde"?s.contWorld:c==="fr"?p.fr:p.en};return a==="compact"?t.jsxs("div",{className:"contpick",ref:f,children:[t.jsxs("button",{type:"button",className:"contpick-btn","aria-expanded":x,"aria-haspopup":"listbox",onClick:()=>l(b=>!b),children:[u(n.continent),t.jsx("span",{className:"n",children:d[n.continent]||0}),t.jsx("i",{children:x?"▴":"▾"})]}),x&&t.jsx("div",{className:"contpick-pop",role:"listbox",children:dn.map(b=>t.jsxs("button",{type:"button",role:"option","aria-selected":n.continent===b,onClick:()=>{i({type:"continent",key:b}),l(!1)},children:[u(b),t.jsx("span",{className:"n",children:d[b]||0})]},b))}),e&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>i({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?s.showMap:s.hideMap})]}):t.jsxs("div",{className:"conts",children:[dn.map(b=>t.jsxs("button",{type:"button",className:"cbtn","aria-selected":n.continent===b,onClick:()=>i({type:"continent",key:b}),children:[u(b),t.jsx("span",{className:"n",children:d[b]||0})]},b)),e&&t.jsx("span",{className:"side",children:t.jsx("button",{type:"button",onClick:()=>i({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?s.showMap:s.hideMap})})]})}function Dr(e){return String(e||"").split(`
`).map(a=>a.replace(/^#{1,6}\s*/,"").replace(/[*_`>]/g,"").trimEnd()).filter(a=>a.trim().length>0)}function xl(e){var i;const a=[],r=new Set,n=o=>{const c=(o||"").trim();!c||r.has(c.toLowerCase())||(r.add(c.toLowerCase()),a.push(c))};return((e==null?void 0:e.companies_cited)||[]).forEach(o=>n(o==null?void 0:o.name)),(((i=e==null?void 0:e.prospective)==null?void 0:i.companies_to_evaluate)||[]).forEach(o=>n(o==null?void 0:o.name)),a}function Kn({icon:e,title:a,hint:r,rows:n,addLabel:i,onEvaluate:o,onAddAll:c}){const{t:s}=I();return n.length?t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:[e," ",a]}),t.jsx("span",{className:"n",children:n.length}),c&&t.jsx("button",{type:"button",className:"rsblk-all",onClick:()=>c(n.map(d=>d.name)),children:i})]}),t.jsx("p",{className:"rsblk-hint",children:r}),t.jsx("div",{className:"rsblk-rows",children:n.map(d=>t.jsxs("div",{className:"rsrow",children:[t.jsxs("div",{className:"rsrow-t",children:[t.jsxs("div",{className:"rsrow-h",children:[t.jsx("span",{className:"nm",children:d.name}),d.chips.map(x=>t.jsx("span",{className:"ch",children:x},x))]}),d.line1&&t.jsx("p",{className:"w",children:d.line1}),d.line2&&t.jsx("p",{className:"r",children:d.line2})]}),t.jsx("button",{type:"button",className:"rsrow-go",onClick:()=>o(d.name),children:s.rsEvalOne})]},d.name))})]}):null}function Pr({card:e,onEvaluate:a,onAddAll:r}){var c;const{t:n}=I(),i=((e==null?void 0:e.companies_cited)||[]).filter(s=>s&&(s.name||"").trim()).map(s=>({name:(s.name||"").trim(),line1:(s.what||"").trim(),line2:(s.role||"").trim(),chips:[(s.country||"").trim()].filter(Boolean)})),o=(((c=e==null?void 0:e.prospective)==null?void 0:c.companies_to_evaluate)||[]).filter(s=>s&&(s.name||"").trim()).map(s=>({name:(s.name||"").trim(),line1:(s.why||"").trim(),chips:[(s.country||"").trim(),(s.stage||"").trim()].filter(Boolean)}));return!i.length&&!o.length?t.jsx("p",{className:"rsblk-none",children:n.rsNoCompanies}):t.jsxs(t.Fragment,{children:[t.jsx(Kn,{icon:"🏷",title:n.rsCited,hint:n.rsCitedHint,rows:i,addLabel:n.rsAddAll(i.length),onEvaluate:a,onAddAll:r}),t.jsx(Kn,{icon:"🎯",title:n.rsMatch,hint:n.rsMatchHint,rows:o,addLabel:n.rsAddAll(o.length),onEvaluate:a,onAddAll:r})]})}function hl({card:e,onEvaluate:a,onAddAll:r}){var s,d,x;const{t:n}=I(),i=[e.industry,...e.market_tags||[],e.author].map(l=>(l||"").trim()).filter(Boolean),o=(((s=e.prospective)==null?void 0:s.criteria)||[]).filter(Boolean),c=(e.sources||[]).filter(l=>l&&l.url);return t.jsxs("div",{className:"rsdet",children:[e.market&&t.jsx("p",{className:"rsmk",children:e.market}),i.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:n.rsTags}),i.map(l=>t.jsx("span",{children:l},l))]}),t.jsxs("div",{className:"rsbody",children:[e.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${e.mindmap_png_b64}`,alt:n.rsMindmap}),t.jsx("figcaption",{children:n.rsMindmap})]}),t.jsx("div",{className:"rssum",children:Dr(e.summary_md||"").map((l,f)=>t.jsx("p",{children:l},f))})]}),t.jsx(Pr,{card:e,onEvaluate:a,onAddAll:r}),(((d=e.prospective)==null?void 0:d.conclusion)||o.length>0)&&t.jsxs("section",{className:"rsblk rspro",children:[t.jsx("div",{className:"rsblk-h",children:t.jsxs("b",{children:["🔮 ",n.rsConclusion]})}),((x=e.prospective)==null?void 0:x.conclusion)&&t.jsx("p",{className:"rspro-c",children:e.prospective.conclusion}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"rsblk-hint",children:n.rsCriteria}),t.jsx("ul",{className:"rspro-l",children:o.map(l=>t.jsx("li",{children:l},l))})]})]}),c.length>0&&t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:["🔗 ",n.rsSources]}),t.jsx("span",{className:"n",children:c.length})]}),t.jsx("div",{className:"rssrc",children:c.map(l=>t.jsx("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",children:l.label||l.url},l.url))})]})]})}function gl(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{day:"2-digit",month:"short"})}function bl({onClose:e,onEvaluate:a,onAddAll:r,bump:n,cbToken:i}){const{t:o,email:c}=I(),s=i,[d,x]=m.useState(null),[l,f]=m.useState(null),[u,b]=m.useState(null),[p,g]=m.useState(!1);m.useEffect(()=>{let h=!0;return(async()=>{const N=await rr({email:c,cbToken:s});h&&x(N)})(),()=>{h=!1}},[c,s,n]);const v=h=>{f(h),b(null),g(!0),(async()=>{const N=await Fo(h.id);b(N),g(!1)})()};return t.jsxs("div",{className:"rsarch",children:[t.jsxs("div",{className:"rsarch-h",children:[l?t.jsx("button",{type:"button",className:"rsarch-back",onClick:()=>{f(null),b(null)},children:o.rsArchBack}):t.jsxs("b",{children:["🗂 ",o.rsArchTitle]}),l&&t.jsx("span",{className:"ti",children:l.title}),!l&&d&&t.jsx("span",{className:"n",children:d.length}),t.jsx("button",{type:"button",className:"rsx",title:o.rsClose,onClick:e,children:"×"})]}),!l&&t.jsxs("div",{className:"rsarch-list",children:[d===null&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchLoading}),d!==null&&d.length===0&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchEmpty}),(d||[]).map(h=>t.jsxs("button",{type:"button",className:"rsarch-row",onClick:()=>v(h),children:[t.jsx("span",{className:"ti",children:h.title}),t.jsxs("span",{className:"me",children:[gl(h.created_at),h.industry?` · ${h.industry}`:"",h.author?` · ${h.author}`:""]}),t.jsx("span",{className:"cn",children:o.rsRowCounts(h.cited_n||0,h.evaluate_n||0)}),t.jsx("span",{className:"st"+(h.published?" on":""),children:h.published?o.rsPub:o.rsPriv})]},h.id))]}),l&&t.jsxs("div",{className:"rsarch-one",children:[t.jsxs("div",{className:"rsarch-sub",children:[l.source_url&&t.jsx("a",{href:l.source_url,target:"_blank",rel:"noopener noreferrer",children:o.rsSource}),l.published&&l.page_url&&t.jsx("a",{href:l.page_url,target:"_blank",rel:"noopener noreferrer",children:o.rsLink}),t.jsx("span",{className:"st"+(l.published?" on":""),children:l.published?o.rsPub:o.rsPriv})]}),p&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchLoading}),!p&&!u&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchGone}),!p&&u&&t.jsx(hl,{card:u,onEvaluate:a,onAddAll:r})]})]})}const Qn=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function vl(){const{t:e,mode:a,token:r,email:n,askEvaluate:i,sessTally:o,dispatch:c,evalBusy:s,evalCards:d,caps:x,data:l,canWrite:f,source:u,dossiers:b,doAnalyse:p,liveMemos:g,pipe:v}=I(),h=a==="client",N=m.useMemo(()=>r||(u!=="default"?Do():""),[r,u]),[E,y]=m.useState(""),[z,L]=m.useState(!1),[T,S]=m.useState(""),[C,j]=m.useState(!1),[M,P]=m.useState(""),[q,w]=m.useState([]),A=m.useRef(!1),[O,U]=m.useState(!1),[W,H]=m.useState(""),[Q,B]=m.useState(""),[Y,ae]=m.useState(!1),[ne,Ee]=m.useState(0),[je,be]=m.useState(""),[ee,ce]=m.useState(null),[G,_]=m.useState(null),[X,fe]=m.useState(!1),[re,we]=m.useState(null),[J,de]=m.useState(0),ze=m.useRef(!1),ve=E.trim()?Qn.test(E.trim())?e.evalUrl:e.evalName:e.evalWaiting,xe=m.useMemo(()=>T.split(`
`).map(F=>F.trim()).filter(Boolean).slice(0,15),[T]);m.useEffect(()=>{if(typeof window>"u")return;const F=new URLSearchParams(window.location.search),te=(F.get("rs")||"").trim(),le=(F.get("rstext")||"").trim();te&&/^https?:\/\//i.test(te)&&H(te),le&&B(le),(te&&/^https?:\/\//i.test(te)||le)&&U(!0)},[]),m.useEffect(()=>{const F=te=>{const le=te.detail||{},ye=String(le.url||"").trim(),Pe=String(le.text||"").trim();ye&&/^https?:\/\//i.test(ye)&&H(ye),Pe&&B(Pe),(ye&&/^https?:\/\//i.test(ye)||Pe)&&U(!0)};return window.addEventListener("ppmap:research",F),()=>window.removeEventListener("ppmap:research",F)},[]),m.useEffect(()=>{if(!f&&!N){we(null);return}let F=!0;return(async()=>{const te=await rr({email:n,cbToken:N});F&&we(te.length)})(),()=>{F=!1}},[f,N,n,J]);const Fe=q.length?q:d,pe=l.credits,De=m.useCallback(F=>{const te=F.map(le=>(le||"").trim()).filter(Boolean);te.length&&(S(le=>{const ye=le.split(`
`).map(ke=>ke.trim()).filter(Boolean),Pe=new Set(ye.map(ke=>ke.toLowerCase())),Le=te.filter(ke=>!Pe.has(ke.toLowerCase()));return[...ye,...Le].slice(0,15).join(`
`)}),L(!0))},[]);m.useEffect(()=>{if(!Y)return;Ee(0);const F=window.setInterval(()=>Ee(te=>te+1),1e3);return()=>window.clearInterval(F)},[Y]);const R=m.useMemo(()=>{const F=E.trim().toLowerCase();return!F||!v?null:b.find(te=>et(te.name)===F&&Ae(te)===1)||null},[E,b,v]),V=()=>{const F=E.trim();if(F){if(R){p(R);return}i(null,F),y("")}},Z=async()=>{if(!h){i(null,xe[0]||"");return}if(!xe.length||C)return;j(!0),A.current=!1;const F=[];for(let te=0;te<xe.length&&!A.current;te++){P(e.evaluating(te+1,xe.length,xe[te]));const le=await or(r,xe[te],"atelier2");if(F.unshift({name:le.company||xe[te],verdict:le.verdict,reason:le.reason||"",remaining:le.remaining??null}),w([...F]),le.verdict==="quota"){F.unshift({name:"",verdict:"quota",reason:e.quota(xe.length-te-1),remaining:0}),w([...F]),S(xe.slice(te+1).join(`
`)),P(""),j(!1);return}}P(""),S(A.current?xe.slice(F.length).join(`
`):""),j(!1)},ie=async()=>{var le,ye,Pe;if(ze.current)return;const F=W.trim().replace(/\s+/g,""),te=Q.trim();if(!F&&!te){be(e.rsNeed);return}if(!h&&!N){i(null,F||te.slice(0,80));return}ze.current=!0,be(""),ce(null),_(null),ae(!0);try{const Le=await Io({url:F,text:te,email:n,cbToken:N});if(ae(!1),!Le||Le.status!=="success"){be((Le==null?void 0:Le.message)||"Erreur");return}ce(Le),U(!1),De((((le=Le.prospective)==null?void 0:le.companies_to_evaluate)||[]).map(_e=>(_e==null?void 0:_e.name)||"")),_({state:"pending"});const ke=await $o(Le,{email:n,cbToken:N});_(ke.ok?{state:"ok",scopeLabel:((ye=ke.summary)==null?void 0:ye.scope_label)||"",scope:((Pe=ke.summary)==null?void 0:Pe.scope)||""}:{state:"fail",msg:ke.error||""}),ke.ok&&de(_e=>_e+1)}finally{ze.current=!1,ae(!1)}},Ce=[ee==null?void 0:ee.industry,...(ee==null?void 0:ee.market_tags)||[],ee==null?void 0:ee.author].map(F=>(F||"").trim()).filter(Boolean),se=(G==null?void 0:G.state)==="pending",Be=G&&(se?t.jsx("span",{className:"rslink pend",children:e.rsSaving}):G.state==="ok"?t.jsx("span",{className:"rslink ok",children:G.scope&&G.scope!=="public"?e.rsSavedIn(G.scopeLabel||G.scope.replace(/^fund:/,"")):e.rsSaved}):t.jsx("span",{className:"rslink fail",title:G.msg,children:e.rsSaveFail})),Xe=xl(ee).length;return t.jsxs("div",{className:"demand",children:[t.jsxs("div",{className:"drow",children:[t.jsxs("span",{className:"dfield",children:[t.jsx("input",{value:E,placeholder:e.evalPh,autoComplete:"off",maxLength:200,onChange:F=>y(F.target.value),onKeyDown:F=>{F.key==="Enter"&&V()}}),t.jsx("span",{className:"detect"+(Qn.test(E.trim())?" url":""),children:ve})]}),t.jsxs("button",{type:"button",className:"evalbtn"+(R?" analyse":"")+(s?" loading":""),disabled:s,onClick:V,children:[t.jsx("span",{className:"fill"}),R?e.actAnalyse:e.evalGo]}),x.showCredits&&pe&&t.jsxs("button",{type:"button",className:"credits"+(pe.total_available<=0&&!pe.unlimited?" empty":""),onClick:()=>c({type:"modal",modal:"recharge"}),children:[t.jsx("span",{className:"cl",children:e.creditsCap}),t.jsx("b",{children:pe.unlimited?"∞":pe.total_available}),!pe.unlimited&&t.jsxs("span",{className:"cm",children:["/ ",pe.daily_grant+pe.purchased]}),pe.total_available<=0&&!pe.unlimited?t.jsx("span",{className:"rc",children:e.creditsRecharge}):t.jsx("span",{className:"cd",children:e.creditsToday})]})]}),g.items.filter(F=>F.status==="boot"||F.status==="running").map(F=>t.jsxs("div",{className:"result on memolive",children:[t.jsx("span",{className:"vv",children:t.jsxs("span",{className:"vp",children:["⚡ ",e.actAnalyse]})}),t.jsx("span",{className:"rn",children:F.name}),t.jsx(Ct,{item:F,serverOff:g.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),t.jsxs("button",{type:"button",className:"go",onClick:()=>c({type:"modal",modal:"queue"}),children:[e.liveOpenQueue," →"]})]},"live-"+F.name)),t.jsxs("div",{className:"dunder",children:[t.jsx("button",{type:"button",className:"dmulti",onClick:()=>L(!z),children:e.evalMulti}),t.jsx("button",{type:"button",className:"dmulti dsearch"+(O?" on":""),onClick:()=>U(!O),children:e.rsOpen}),re!==null&&re>0&&t.jsx("button",{type:"button",className:"dmulti darch"+(X?" on":""),onClick:()=>fe(!X),children:e.rsArchOpen(re)})]}),X&&t.jsx(bl,{bump:J,cbToken:N,onClose:()=>fe(!1),onEvaluate:F=>i(null,F),onAddAll:De}),O&&t.jsxs("div",{className:"rsp on",children:[t.jsxs("div",{className:"rsf",children:[t.jsx("input",{className:"rsurl",value:W,placeholder:e.rsUrlPh,autoComplete:"off",spellCheck:!1,inputMode:"url",maxLength:600,onChange:F=>H(F.target.value),onKeyDown:F=>{F.key==="Enter"&&ie()}}),t.jsx("span",{className:"rsor",children:e.rsOr}),t.jsx("textarea",{className:"rstext",value:Q,placeholder:e.rsTextPh,onChange:F=>B(F.target.value)})]}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+(Y?" loading":""),style:{justifyContent:"center"},disabled:Y||se||!W.trim()&&!Q.trim(),onClick:()=>{ie()},children:[t.jsx("span",{className:"fill"}),Y?`${Po(W.trim())==="youtube"&&W.trim()?e.rsRunningVid:e.rsRunning} ${e.rsElapsed(ne)}`:se?e.rsSaving:e.rsGo]}),t.jsx("span",{className:"hint",children:e.rsHint})]})]}),je&&t.jsx("div",{className:"rserr",children:je}),ee&&t.jsxs("div",{className:"rscard",children:[t.jsxs("div",{className:"rsh",children:[t.jsx("b",{children:ee.title}),ee.source_url&&t.jsx("a",{href:ee.source_url,target:"_blank",rel:"noopener noreferrer",children:e.rsSource}),t.jsx("button",{type:"button",className:"rsx",title:e.rsClose,onClick:()=>{ce(null),_(null)},children:"×"})]}),ee.market&&t.jsx("p",{className:"rsmk",children:ee.market}),Ce.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:e.rsTags}),Ce.map(F=>t.jsx("span",{children:F},F))]}),t.jsxs("div",{className:"rsbody",children:[ee.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${ee.mindmap_png_b64}`,alt:e.rsMindmap}),t.jsx("figcaption",{children:e.rsMindmap})]}),t.jsx("div",{className:"rssum",children:Dr(ee.summary_md||"").map((F,te)=>t.jsx("p",{children:F},te))})]}),t.jsx(Pr,{card:ee,onEvaluate:F=>i(null,F),onAddAll:De}),t.jsxs("div",{className:"rsfoot",children:[t.jsx("span",{children:e.rsFound(Xe)}),Be]})]}),z&&t.jsxs("div",{className:"bulk on",children:[t.jsx("textarea",{value:T,placeholder:e.bulkPh,onChange:F=>S(F.target.value.split(`
`).slice(0,15).join(`
`))}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+(C?" loading":""),style:{justifyContent:"center"},disabled:C||!xe.length,onClick:()=>{Z()},children:[t.jsx("span",{className:"fill"}),C&&M?M:e.evalList]}),t.jsx("span",{className:"hint",children:e.bulkCount(xe.length)})]})]}),Fe.slice(0,1).map((F,te)=>{const le=F.verdict==="kept",ye=F.verdict==="quota",Pe=le?"var(--brand)":ye?"var(--bolt)":"var(--red)",Le=le?"var(--brand-l)":ye?"#FEF3C7":"#FEF2F2";return t.jsxs("div",{className:"result on",style:{"--c":Pe,"--bgc":Le},children:[t.jsx("span",{className:"vv",children:t.jsx("span",{className:"vp",children:le?"✓ "+e.kept:ye?"⏳":"✗ "+e.dropped})}),F.name&&t.jsx("span",{className:"rn",children:F.name}),t.jsx("span",{className:"rr",children:F.reason?t.jsxs(t.Fragment,{children:[t.jsx("b",{children:e.why})," ",F.reason]}):null}),!!(F.candidates&&F.candidates.length)&&t.jsx("span",{className:"sitepick",children:F.candidates.map(ke=>t.jsxs("span",{className:"sp1",children:[t.jsxs("a",{href:ke.url.startsWith("http")?ke.url:`https://${ke.url}`,target:"_blank",rel:"nofollow noopener",children:[(ke.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,34)," ↗"]}),t.jsx("button",{type:"button",onClick:()=>i(null,ke.url),children:e.evalPickGo})]},ke.url))}),!ye&&t.jsx("button",{type:"button",className:"go",onClick:()=>{c({type:"ptab",tab:le?1:5});const ke=(F.name||"").trim().toLowerCase();window.setTimeout(()=>{const _e=[...document.querySelectorAll(".atl2 .list .row")].find(ia=>{var Mt;return(((Mt=ia.querySelector(".rnm"))==null?void 0:Mt.textContent)||"").trim().toLowerCase().includes(ke)});_e&&(_e.scrollIntoView({behavior:"smooth",block:"center"}),_e.classList.add("flashrow"),window.setTimeout(()=>_e.classList.remove("flashrow"),2200))},260)},children:e.seeSpace(le?e.statusKeep.replace("✅ ",""):e.statusDrop.replace("❌ ",""))})]},te)}),h&&(o.kept+o.dropped>0||Fe.length>0)&&t.jsxs("div",{className:"tally",children:[t.jsx("span",{dangerouslySetInnerHTML:{__html:e.session(o.kept,o.dropped)}})," ","·"," ",t.jsx("a",{onClick:()=>c({type:"modal",modal:"space"}),children:e.seeMySpace})]})]})}function yl(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function wl(){const{st:e,dispatch:a,byId:r,t:n,doDeep:i}=I(),o=e.memoConsole?r.get(e.memoConsole):null,c=m.useMemo(()=>o?[o.reasoning||"",yl(o.summary||"")].filter(Boolean).join(`

`):"",[o]);if(!o)return null;const s=nt(o),d=$a(o);return t.jsx("div",{className:"demand",style:{paddingTop:0},children:t.jsxs("div",{className:"memo",style:{marginTop:0},children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"nm",children:o.name}),s&&t.jsx("span",{className:"vv",children:s}),typeof o.score=="number"&&t.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[o.score,"/100"]}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),t.jsx("div",{className:"tabs2",children:t.jsx("button",{type:"button","aria-selected":"true",children:n.memoSynth})}),t.jsx("div",{className:"mb2",children:c?c.split(`

`).map((x,l)=>t.jsx("p",{style:{margin:"0 0 10px"},children:x},l)):t.jsx("p",{children:n.memoNone})}),t.jsxs("div",{className:"mf",children:[ht(o)?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"t",children:n.memoDeepHint}),t.jsx("button",{type:"button",className:"deep",onClick:()=>i(o),children:n.memoDeep})]}):t.jsx("span",{className:"t",children:d===2?n.critMemoKinds:""}),o.memoUrl&&t.jsx("a",{className:"go",href:o.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:n.memoOpenFull})]})]})})}function Ir({name:e}){const{t:a,token:r,caps:n,mode:i,flashErr:o}=I(),[c,s]=m.useState(!1),[d,x]=m.useState(null),l=n.pipe&&i==="client"&&!n.lockActions,f=async()=>{if(!l||c)return;s(!0);const u=await Bo(r,e);if(s(!1),!u){o(a.actErr);return}x(u.results||[])};return m.useEffect(()=>{if(!l)return;const u=b=>{var g;const p=String(((g=b.detail)==null?void 0:g.name)||"").trim();p&&p.toLowerCase()===e.toLowerCase()&&f()};return window.addEventListener("ppmap:similar",u),()=>window.removeEventListener("ppmap:similar",u)},[e,l]),m.useEffect(()=>{if(l)try{const u=(sessionStorage.getItem("pp:similar")||"").trim();u&&u.toLowerCase()===e.toLowerCase()&&(sessionStorage.removeItem("pp:similar"),f())}catch{}},[e,l]),l?t.jsxs("div",{className:"simb",onClick:u=>u.stopPropagation(),children:[t.jsx("button",{type:"button",className:"abtn",disabled:c,onClick:()=>{f()},children:c?a.similarBusy:a.similar}),d&&(d.length===0?t.jsx("p",{className:"mnote",children:a.similarNone}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"siml",children:d.map(u=>t.jsxs("li",{children:[t.jsx("b",{className:u.verdict==="kept"?"ok":"ko",children:u.company}),u.reason&&t.jsx("span",{children:u.reason})]},u.company))}),t.jsx("p",{className:"mnote dim",children:a.similarNote})]}))]}):null}const kl=new Set(["b","strong","i","em","u","br","p","ul","ol","li","h4","h5"]),Vt=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function jl(e){const a=String(e||"");if(!a)return"";let r="",n=0;for(;n<a.length;){const i=a.indexOf("<",n);if(i<0){r+=Vt(a.slice(n));break}r+=Vt(a.slice(n,i));const o=a.indexOf(">",i);if(o<0){r+=Vt(a.slice(i));break}const c=a.slice(i+1,o).trim(),s=/^(\/?)([a-zA-Z0-9]+)/.exec(c),d=s?s[2].toLowerCase():"";s&&kl.has(d)?r+=`<${s[1]}${d}>`:r+=Vt(a.slice(i,o+1)),n=o+1}return r}const Jn=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function Me({k:e,v:a,href:r}){return a==null||a===""?null:t.jsxs("div",{className:"cdl",children:[t.jsx("span",{className:"cdk",children:e}),r?t.jsx("a",{className:"cdv",href:r,target:"_blank",rel:"noopener noreferrer",children:String(a)}):t.jsx("span",{className:"cdv",children:String(a)})]})}function Nl(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Sl({o:e}){const{t:a,doDeep:r}=I(),[n,i]=m.useState(!1),o=nt(e),c=[e.reasoning||"",Nl(e.summary||"")].filter(Boolean);return t.jsxs("div",{className:"cdmemo",children:[o&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:o}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),c.length?c.join(`

`).split(`

`).map((s,d)=>t.jsx("p",{className:"cdtxt",children:s},d)):t.jsx("p",{className:"cdtxt",children:a.memoNone}),t.jsxs("div",{className:"cdacts",children:[ht(e)&&t.jsx("button",{type:"button",className:"btn p",onClick:s=>{s.stopPropagation(),r(e)},children:a.memoDeep}),e.memoUrl&&t.jsx("button",{type:"button",className:"btn b",onClick:s=>{s.stopPropagation(),i(d=>!d)},children:n?a.memoHideHere:a.memoReadHere}),e.memoUrl&&t.jsx("a",{className:"btn d",href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),children:a.memoOpenFull})]}),n&&e.memoUrl&&t.jsx("iframe",{className:"cdembed",src:e.memoUrl,loading:"lazy",title:a.cdMemoTab,referrerPolicy:"no-referrer-when-downgrade",onClick:s=>s.stopPropagation()})]})}function $r({o:e}){const{t:a,lang:r,dispatch:n,caps:i}=I(),o=Lt(e),c=nt(e),s=(e.cribleStatus||"").trim().toUpperCase()||(o==="NO MATCH"?"NO MATCH":o==="MATCH"?"MATCH":""),d=[e.sector,e.stage,e.countryLabel,e.city,e.website,e.domain,e.linkedinCompany,e.angle,e.date].filter(Boolean).length,x=[e.contactName,e.contactEmail,e.contactLinkedin].filter(Boolean).length,l=[e.ceoStatus,e.ceoNote,i.pipe?e.memoUrl:"",i.pipe?e.memoPdfUrl:""].filter(Boolean).length+(typeof e.engagement=="number"&&e.engagement>0?1:0),f=m.useMemo(()=>[{k:"conv",lib:a.cdConviction,n:(s?1:0)+(e.reasoning?1:0)+(c?1:0)},{k:"ana",lib:a.cdAnalyse,n:(e.summary?1:0)+(i.pipe&&!i.lockActions?1:0)},{k:"soc",lib:a.cdSociete,n:d},{k:"ctc",lib:a.cdContact,n:x},{k:"suivi",lib:a.cdSuivi,n:l},{k:"memo",lib:a.cdMemoTab,n:e.memoUrl||e.summary||ht(e)?1:0}].filter(g=>g.n>0),[e,a,s,c,d,x,l]),[u,b]=m.useState("");if(!f.length)return null;const p=f.some(g=>g.k===u)?u:f[0].k;return t.jsxs("div",{className:"cdtabs",children:[t.jsx("div",{className:"cdnav",role:"tablist",children:f.map(g=>t.jsx("button",{type:"button",role:"tab","aria-selected":p===g.k,"data-tour":"tab-"+g.k,className:p===g.k?"on":"",onClick:v=>{v.stopPropagation(),b(g.k)},children:g.lib},g.k))}),t.jsxs("div",{className:"cdbody",onClick:g=>g.stopPropagation(),children:[p==="conv"&&t.jsxs(t.Fragment,{children:[s&&t.jsxs("div",{className:"cdv1"+(s==="NO MATCH"?" out":""),children:[t.jsx("b",{children:s==="NO MATCH"?a.vOut:a.vKept}),t.jsx("span",{className:"cdw",children:a.cdCrible})]}),e.reasoning&&t.jsx("p",{className:"cdtxt",children:e.reasoning}),c&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:c}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"cdgrid",children:[t.jsx(Me,{k:a.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(Me,{k:a.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(Me,{k:a.cdVerdictDate,v:Jn(e.verdictDate,r)})]})]}),p==="ana"&&t.jsxs(t.Fragment,{children:[e.summary&&t.jsx("div",{className:"cdrich",dangerouslySetInnerHTML:{__html:jl(e.summary)}}),i.pipe&&!i.lockActions&&t.jsx(El,{o:e})]}),p==="soc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Me,{k:a.cdSector,v:e.sector}),t.jsx(Me,{k:a.cdStage,v:e.stage}),t.jsx(Me,{k:a.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(Me,{k:a.cdSite,v:e.domain||e.website,href:e.website||void 0}),t.jsx(Me,{k:a.cdLinkedin,v:e.linkedinCompany?"LinkedIn":"",href:e.linkedinCompany}),t.jsx(Me,{k:a.cdAngle,v:e.angle}),t.jsx(Me,{k:a.cdDetected,v:Jn(e.date,r)})]}),p==="ctc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Me,{k:a.cdName,v:e.contactName}),t.jsx(Me,{k:a.cdEmail,v:e.contactEmail,href:e.contactEmail?`mailto:${e.contactEmail}`:void 0}),t.jsx(Me,{k:a.cdLinkedin,v:e.contactLinkedin?"LinkedIn":"",href:e.contactLinkedin})]}),p==="memo"&&t.jsx(Sl,{o:e}),p==="suivi"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"cdgrid",children:[t.jsx(Me,{k:a.cdCeoStatus,v:e.ceoStatus}),t.jsx(Me,{k:a.cdEngagement,v:typeof e.engagement=="number"&&e.engagement>0?e.engagement:""})]}),e.ceoNote&&t.jsxs("p",{className:"cdtxt",children:["💬 ",e.ceoNote]}),i.pipe&&(e.memoUrl||e.memoPdfUrl)&&t.jsxs("div",{className:"cdacts",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"abtn",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemo," →"]}),e.memoPdfUrl&&t.jsx("a",{className:"abtn",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"})]})]})]})]})}function El({o:e}){const{t:a,token:r}=I(),[n,i]=m.useState(!1),[o,c]=m.useState(null),s=async()=>{n||(i(!0),c(await _o(r,e.name,e.website||e.domain||"")),i(!1))},d=(o==null?void 0:o.blocs)||{},x=[[a.qaVP,d.value_prop],[a.qaProduct,d.produit],[a.qaModel,d.modele],[a.qaSummary,d.synthese]],l=x.some(([,f])=>f);return t.jsxs("div",{className:"qab",children:[!o&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mnote dim",children:a.qaHint}),t.jsx("button",{type:"button",className:"abtn",disabled:n,onClick:()=>{s()},children:n?a.qaBusy:a.qaRun})]}),o&&l&&t.jsxs(t.Fragment,{children:[x.filter(([,f])=>f).map(([f,u])=>t.jsxs("div",{className:"qal",children:[t.jsx("span",{className:"qak",children:f}),t.jsx("p",{children:u})]},f)),!!(o.pages||[]).length&&t.jsx("p",{className:"mnote dim",children:a.qaSources((o.pages||[]).length)})]}),o&&!l&&t.jsx("p",{className:"mnote warn",children:o.quota?a.qaQuota:a.qaEmpty})]})}function ra({spec:e}){const a=m.useRef(null),r=m.useRef(null),[n,i]=m.useState(!1);return m.useEffect(()=>{const o=a.current;if(!o)return;let c=!1;return pn({kind:"op",card:e},Math.max(240,o.clientWidth||320)).then(s=>{!c&&s&&o.isConnected&&o.replaceChildren(s)}),()=>{c=!0,o.replaceChildren()}},[e]),m.useEffect(()=>{if(!n)return;const o=r.current;if(!o)return;let c=!1;pn({kind:"op",card:e},Math.min(1100,Math.floor(window.innerWidth*.92))).then(d=>{!c&&d&&o.isConnected&&o.replaceChildren(d)});const s=d=>{d.key==="Escape"&&i(!1)};return document.addEventListener("keydown",s),()=>{c=!0,document.removeEventListener("keydown",s)}},[n,e]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:a,title:"Agrandir",onClick:()=>i(!0),style:{marginTop:10,lineHeight:0,border:"1px solid #E2E8F0",borderRadius:8,overflow:"hidden",cursor:"zoom-in"}}),n&&vt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"atl2-lb",onClick:()=>i(!1),children:[t.jsx("div",{ref:r,style:{lineHeight:0}}),t.jsx("button",{type:"button",className:"atl2-lb-x","aria-label":"Fermer",onClick:()=>i(!1),children:"×"})]})}),document.body)]})}const Cl=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function Al(e,a=!1){if(!e||typeof window>"u")return;const r=352,n=a?620:430,i=window.innerWidth,o=window.innerHeight,c=Math.min(Math.max(e.x-r/2,8),Math.max(8,i-r-8));let s=e.y+10;return s+n>o-8&&(s=Math.max(8,e.y-n-14)),s<8&&(s=8),{left:c,top:s}}function zl(){const{st:e,dispatch:a,byId:r,t:n,lang:i,caps:o,mode:c,askEvaluate:s,doAnalyse:d,doDecide:x,doPromote:l,doRepeche:f,doApproach:u,doDeep:b,doOnboard:p,outbound:g,evalBusy:v}=I(),h=e.popupId?r.get(e.popupId):null;if(!h)return null;const N=Te(h),E=Ae(h),y=nt(h),z=Lt(h),L=h.kind==="target",T=S=>{a({type:"filters",patch:S}),a({type:"popup",id:null})};return vt.createPortal(t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:Cl}),t.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),t.jsxs("div",{className:"pop on "+(e.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:Al(e.popupAnchor,!!h.card),onClick:S=>S.stopPropagation(),children:[t.jsxs("div",{className:"ph",children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h3",{children:h.name}),t.jsx("span",{className:"id",children:n.detected(n.daysAgo(at(h.date)),Je(h.engine,i))})]}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),t.jsxs("div",{className:"pb",children:[t.jsxs("div",{className:"tags",children:[h.cc&&t.jsx("button",{type:"button",className:"hi",onClick:()=>T({country:[h.cc]}),children:(yt(h.cc,i)||h.countryLabel||"").toUpperCase()}),h.sector&&t.jsx("button",{type:"button",onClick:()=>T({sector:[h.sector]}),children:h.sector.toUpperCase()}),h.stage&&t.jsx("button",{type:"button",onClick:()=>T({stage:[h.stage]}),children:h.stage.toUpperCase()}),typeof h.amountEur=="number"&&h.amountEur>0&&t.jsx("span",{className:"am2",children:Rt(h.amountEur,i)})]}),o.pipe&&L&&t.jsxs("div",{className:"pstat",children:[z&&t.jsx("span",{className:"vd "+(z==="MATCH"?"v-ok":"v-no"),title:n.vt[z],children:z}),y&&t.jsx("span",{className:"vd v-cons",title:n.vt[y],children:y}),t.jsx("span",{className:"pstep",children:n.plabels[E]}),h.ceoStatus&&t.jsx("span",{className:"pstep own",children:h.ceoStatus})]}),(h.tagline||h.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:h.tagline||h.headline})]}),t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.how}),t.jsxs("p",{children:[st(h.engine)," ",t.jsx("b",{children:Je(h.engine,i)})," — ",Uo(h.engine,i),h.noteTitle&&t.jsxs(t.Fragment,{children:[" · ",h.noteTitle]})]}),N?t.jsxs("p",{className:"psig",style:{marginTop:9},children:[t.jsx(dt,{o:h,lg:!0})," ",t.jsx(oa,{o:h,src:!0}),t.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[n.signaledOn(Ua(N,i))," · ",n.win7(Yt(N,i))]})]}):t.jsx("p",{className:"pnos",style:{marginTop:5},children:n.noSignal})]}),h.card?t.jsx(ra,{spec:h.card}):null,h.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:o.pipe&&E>=1?n.verdictCap:n.memo}),t.jsx("p",{className:"memo",children:h.reasoning})]}),o.pipe&&L&&y&&t.jsx("div",{className:"fld",children:t.jsxs("p",{style:{fontWeight:700},children:[y,typeof h.score=="number"&&h.score>0?" · "+n.score(h.score):""]})}),o.pipe&&L&&t.jsx($r,{o:h})]}),t.jsx(Ir,{name:h.name}),t.jsxs("div",{className:"pf",children:[o.lockActions||c!=="client"&&o.pipe?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[t.jsx("span",{className:"fill"}),"🔒 ",n.lockbarCta]}):o.pipe?t.jsxs(t.Fragment,{children:[E===0&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:v,onClick:()=>s(h),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(h.name.length>22?h.name.slice(0,21)+"…":h.name)]}),E===1&&t.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{d(h),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actAnalyse]}),E===2&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{l(h),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actPromote]}),E===3&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{x(h,!0),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actYes]}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{x(h,!1),a({type:"popup",id:null})},children:n.actNo}),ht(h)&&t.jsx("button",{type:"button",className:"abtn",title:n.memoDeepHint,onClick:()=>{b(h),a({type:"popup",id:null})},children:n.memoDeep})]}),E===4&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{u(h),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actApproach]}),E===5&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{f(h),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actRepeche]}),h.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:h.id}),a({type:"popup",id:null})},children:"📄"}),g&&t.jsx("button",{type:"button",className:"abtn",title:n.actOnboardTitle,onClick:()=>{p(h),a({type:"popup",id:null})},children:"🚀"})]}):h.engine==="media"&&h.url&&o.showDemand?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{var S;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:h.url}}))}catch{}a({type:"popup",id:null}),(S=document.querySelector(".atl2 .demand"))==null||S.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rsOpen]}),t.jsx("button",{type:"button",className:"abtn",disabled:v,title:n.evalGoOn(h.name),onClick:()=>s(h),children:"⚡"})]}):t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:v,onClick:()=>s(h),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(h.name.length>22?h.name.slice(0,21)+"…":h.name)," →"]}),h.website&&t.jsx("a",{className:"psite",href:h.website.startsWith("http")?h.website:"https://"+h.website,target:"_blank",rel:"noopener noreferrer",title:h.website,children:"🌐"})]})]})]}),document.body)}const Tl=8;function ql(){const{t:e,lang:a,token:r,dossiers:n,caps:i,markRow:o,dispatch:c}=I(),[s,d]=m.useState(!1),[x,l]=m.useState(!1),[f,u]=m.useState(!1),b=`atl2:sincemini:${r||"home"}`,[p,g]=m.useState(()=>{try{return localStorage.getItem(b)==="1"}catch{return!1}}),v=()=>{g(S=>{try{localStorage.setItem(b,S?"0":"1")}catch{}return!S})},h=r||"home",{names:N,verdicts:E}=m.useMemo(()=>{const S=[],C={};return n.forEach(j=>{j.kind!=="target"||!j.name||(S.push(j.name),C[j.name]=Vo(j)||"")}),{names:S,verdicts:C}},[n]),y=m.useMemo(()=>N.length?Ho(h,N,E,a):null,[h,N.length]);if(!i.pipe||s||!y||y.firstVisit||!y.added.length&&!y.gone.length)return null;const z=x?y.added:y.added.slice(0,Tl),L=y.added.length-z.length,T=S=>{const C=n.find(j=>j.name===S);C&&(o(C.id),c({type:"popup",id:C.id}))};return t.jsxs("div",{className:"since"+(p?" mini":""),children:[t.jsxs("div",{className:"sg-h",children:[t.jsxs("span",{className:"t",children:["✨ ",e.sinceTitle(y.added.length,y.lastDate)]}),t.jsx("span",{className:"s",children:e.sinceSub}),t.jsx("span",{className:"sg-sp"}),t.jsx("button",{type:"button",className:"sg-x","aria-expanded":!p,title:p?e.boxExpand:e.boxCollapse,onClick:v,children:p?"▸":"▾"}),t.jsx("button",{type:"button",className:"sg-x","aria-label":e.tourClose,title:e.tourClose,onClick:()=>{d(!0),Wo(h,N,E,y.fp,a)},children:"×"})]}),!!y.added.length&&t.jsxs("div",{className:"sg-c",children:[z.map(S=>t.jsx("button",{type:"button",className:"sg-chip",onClick:()=>T(S),children:t.jsx("b",{children:S})},S)),L>0&&t.jsx("button",{type:"button",className:"sg-more",onClick:()=>l(!0),children:e.sinceMore(L)})]}),!!y.gone.length&&t.jsxs("div",{className:"sg-c",children:[t.jsx("button",{type:"button",className:"sg-more",onClick:()=>u(S=>!S),children:e.sinceOut(y.gone.length)}),f&&y.gone.slice(0,20).map(S=>t.jsx("span",{className:"gone",children:S},S))]})]})}const Br={"CALL PENDING":"call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function Qa({o:e,locked:a=!1}){const{t:r}=I(),n=Lt(e),i=nt(e),o=Ae(e),c=va(e),s=Go(e);return t.jsxs("span",{className:"c-vd",children:[n?t.jsx("span",{className:"vd "+(n==="MATCH"?"v-ok":"v-no"),title:r.vt[n],children:n}):t.jsx("span",{className:"vd wait",children:r.actToEval}),i?t.jsx("span",{className:"vd "+(Br[i]||"v-cons"),title:r.vt[i],children:i}):o===1?t.jsx("span",{className:"vd wait",children:r.actMemoQueue}):null,o===3&&c==="auto"&&t.jsx("span",{className:"org au",title:r.orgAutoTitle,children:r.orgAuto}),o===3&&c==="cd"&&t.jsx("span",{className:"org cd",title:r.orgCdTitle,children:r.orgCd}),o===3&&s!==null&&t.jsx("span",{className:"wait2 "+(s>10?"hot":s>=5?"warm":""),title:r.waitTitle(s),children:r.waitChip(s)}),!a&&t.jsx(ss,{o:e})]})}const na=e=>e.length>22?e.slice(0,21)+"…":e;function Xn({o:e}){const{t:a,askEvaluate:r,evalBusy:n,lang:i}=I(),[o,c]=m.useState(!1);if(m.useEffect(()=>{n||c(!1)},[n]),$e(e)){const x=(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("span",{className:"verdict",style:{"--c":x?"var(--brand)":"var(--red)"},title:e.reasoning||"",children:[x?"✓":"✗"," ",t.jsx("b",{children:x?a.kept:a.dropped}),typeof e.score=="number"&&e.score>0?" "+e.score:""]})}const d=o&&n;return t.jsxs("button",{type:"button",className:"rev"+(d?" loading":""),disabled:n,title:a.evalGoOn(e.name),onClick:x=>{x.stopPropagation(),c(!0),r(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(na(e.name))})]})}function _r({o:e}){const{t:a,caps:r,memoQueued:n,approachDone:i,doAnalyse:o,doDecide:c,doPromote:s,doRepeche:d,doApproach:x,dispatch:l,liveMemos:f}=I();if(r.lockActions)return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",onClick:p=>{p.stopPropagation(),l({type:"modal",modal:"rdv"})},children:a.actAnalyse})});if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:p=>{var g;p.stopPropagation();try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:e.url}}))}catch{}(g=document.querySelector(".atl2 .demand"))==null||g.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});if(!r.pipe)return e.noCo&&e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:p=>{var g;p.stopPropagation();try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:e.url}}))}catch{}(g=document.querySelector(".atl2 .demand"))==null||g.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):e.noCo?t.jsx("span",{className:"cell"}):t.jsx("span",{className:"cell",children:t.jsx(Xn,{o:e})});const u=Ae(e),b=p=>g=>{g.stopPropagation(),p()};if(u===0)return t.jsx("span",{className:"cell",children:t.jsx(Xn,{o:e})});if(u===1){const p=f.liveOf(e.name);if(p&&(p.status==="boot"||p.status==="running"))return t.jsx("span",{className:"cell",children:t.jsx(Ct,{item:p,serverOff:f.serverOff,bootLbl:a.liveBoot,endLabel:a.liveEnd})});const g=n.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",disabled:g,onClick:b(()=>o(e)),children:g?a.actAnalyseQueued:a.actAnalyse})})}if(u===3)return t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:b(()=>c(e,!0)),children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:b(()=>c(e,!1)),children:a.actNo}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:b(()=>l({type:"memoConsole",id:e.id})),children:"📄"})]})});if(u===4){const p=i.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",disabled:p,onClick:b(()=>x(e)),children:p?a.actApproachSent:a.actApproach})})}return u===2?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:b(()=>s(e)),children:a.actPromote}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:b(()=>l({type:"memoConsole",id:e.id})),children:"📄"})]})}):u===5?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:b(()=>d(e)),children:a.actRepeche}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:b(()=>l({type:"memoConsole",id:e.id})),children:"📄"})]})}):t.jsx("span",{className:"cell",children:e.memoUrl?t.jsx("button",{type:"button",className:"memobtn read",onClick:b(()=>l({type:"memoConsole",id:e.id})),children:a.actMemo}):t.jsx("span",{className:"rc",children:"—"})})}function Ll({o:e}){const{t:a,doThumb:r,thumbOf:n}=I(),i=n(e);return t.jsxs("span",{className:"thu",children:[t.jsx("button",{type:"button",className:"tb up"+(i==="yes"?" on":""),title:a.thumbUp,onClick:o=>{o.stopPropagation(),r(e,!0)},children:"👍"}),t.jsx("button",{type:"button",className:"tb dn"+(i==="no"?" on":""),title:a.thumbDn,onClick:o=>{o.stopPropagation(),r(e,!1)},children:"👎"})]})}function Rl({o:e}){const{lang:a}=I();return Te(e)?t.jsxs("span",{className:"c-sig",children:[t.jsx(dt,{o:e}),t.jsx(oa,{o:e,src:!0})]}):t.jsx("span",{className:"c-sig",children:t.jsxs("span",{className:"mo",children:[st(e.engine||"")," ",Je(e.engine||"",a)]})})}function Ml({o:e,locked:a,open:r,onToggle:n,selected:i,onSelect:o}){const{dispatch:c,caps:s,markRow:d,markedId:x,favIds:l,toggleFav:f,t:u}=I(),b=Ae(e),p=["#0F172A","#475C6E","#8798A8","#B9C6D2"],g=e.date?Math.max(0,Math.floor((Date.now()-Date.parse(e.date))/864e5)):9999,v=g<=0?0:g<=7?1:g<=30?2:3,h=s.pipe&&e.kind==="target"?["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"][b]:p[v],N=l.has(e.id),E=y=>{if(a)return;if(o){o(e.id);return}if(s.pipe||e.kind==="op"){n();return}const z=y.currentTarget.getBoundingClientRect();c({type:"popup",id:e.id,anchor:{x:z.left+Math.min(280,z.width/3),y:z.bottom}})};return t.jsxs(m.Fragment,{children:[t.jsxs("div",{className:"row"+(x===e.id||r||i?" on":"")+(r?" open":"")+(i?" sel":"")+(a?" tzr":""),"aria-selected":i||void 0,onMouseEnter:()=>d(e.id),onMouseLeave:()=>d(null),onClick:E,children:[t.jsx("span",{className:"pt",style:{"--c":h}}),t.jsx(Yr,{o:e}),t.jsxs("span",{className:"nd",children:[t.jsxs("span",{className:"rnm"+(a?" nmx":""),title:a?void 0:e.name,children:[s.pipe&&t.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:N?1:.35,padding:0,marginRight:4},onClick:y=>{y.stopPropagation(),f(e)},children:N?"★":"☆"}),e.name]}),t.jsx("span",{className:"rds",title:e.tagline||e.headline||"",children:[e.tagline,e.headline,e.reasoning].find(y=>y&&y!==e.name)||""}),e.acquirer&&t.jsxs("button",{type:"button",className:"racq",title:u.acqSee(e.acquirer),onClick:y=>{y.stopPropagation(),c({type:"acquirer",value:e.acquirer||""})},children:["← ",na(e.acquirer)]}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial",children:"📖"})]}),t.jsx(Ol,{o:e}),t.jsx("span",{className:"c-stade",children:e.stage||""}),t.jsx(Rl,{o:e}),s.pipe&&t.jsx(Qa,{o:e,locked:a}),s.pipe&&t.jsxs("span",{className:"c-sc",children:[typeof e.score=="number"?e.score:"",typeof e.score=="number"&&t.jsx("s",{children:"/100"})]}),t.jsx(_r,{o:e}),s.showThumbs&&t.jsx(Ll,{o:e})]}),r&&!a&&!o&&t.jsx(Fl,{o:e})]})}function Ol({o:e}){const{lang:a,caps:r}=I();if(r.pipe&&e.kind==="target")return t.jsx("span",{className:"c-amt none",children:"—"});const n=Rt(e.amountEur,a);return t.jsx("span",{className:"c-amt"+(n?"":" none"),children:n||"—"})}function Ur({o:e}){const{t:a,lang:r,askEvaluate:n,evalBusy:i,dispatch:o}=I(),c=(u,b=!1)=>p=>{p.stopPropagation(),b&&o({type:"continent",key:"monde"}),o({type:"filters",patch:u})},s=(()=>{const u=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return u?u[1].slice(0,40):""})(),d=Rt(e.amountEur,r),x=(e.date||"").slice(0,10).split("-").reverse().join("/"),l=$e(e),f=l&&(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("div",{className:"card ops-open",children:[t.jsxs("div",{className:"oc-main",children:[e.decryptHtml?t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}):t.jsx("p",{className:"oc-head",children:e.headline||e.tagline||e.name}),t.jsxs("div",{className:"oc-meta",children:[e.sector&&t.jsx("button",{type:"button",onClick:c({sector:[e.sector]}),children:e.sector}),e.countryLabel&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:c({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:c({stage:[e.stage]}),children:e.stage}),d&&t.jsx("span",{className:"oc-amt",children:d}),x&&t.jsx("span",{children:x})]}),t.jsxs("div",{className:"oc-acts",children:[l?t.jsxs("span",{className:"verdict",style:{"--c":f?"var(--brand)":"var(--red)"},children:[f?"✓":"✗"," ",t.jsx("b",{children:f?a.kept:a.dropped})]}):e.noCo||e.engine==="media"&&e.url?t.jsxs(t.Fragment,{children:[e.url&&t.jsx("button",{type:"button",className:"oc-cta",onClick:u=>{var b;u.stopPropagation();try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:e.url}}))}catch{}(b=document.querySelector(".atl2 .demand"))==null||b.scrollIntoView({behavior:"smooth",block:"center"})},children:a.rowExtract}),!e.noCo&&t.jsx("button",{type:"button",className:"oc-ghost",disabled:i,onClick:u=>{u.stopPropagation(),n(e)},children:a.evalGoOn(na(e.name))})]}):t.jsx("button",{type:"button",className:"oc-cta",disabled:i,onClick:u=>{u.stopPropagation(),n(e)},children:a.evalGoOn(na(e.name))}),e.url&&t.jsxs("a",{className:"oc-src",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:u=>u.stopPropagation(),children:[(r==="fr"?"lire la source":"read the source")+(s?` · ${s}`:"")," ↗"]})]})]}),e.card&&t.jsx("div",{className:"oc-side",children:t.jsx(ra,{spec:e.card})})]})}function Fl({o:e}){const{t:a,lang:r,dispatch:n,caps:i,outbound:o,doOnboard:c}=I();return!i.pipe&&e.kind==="op"?t.jsx(Ur,{o:e}):t.jsxs("div",{className:"card",style:{display:"grid"},children:[t.jsxs("div",{children:[e.tagline&&t.jsx("p",{className:"lead",children:e.tagline}),e.decryptHtml&&t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsx($r,{o:e}),t.jsx(ls,{o:e}),t.jsx(ps,{o:e}),t.jsx(Ir,{name:e.name}),t.jsxs("div",{className:"tg",children:[e.sector&&t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"filters",patch:{sector:[e.sector]}})},children:e.sector}),e.stage&&t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"filters",patch:{stage:[e.stage]}})},children:e.stage}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"continent",key:"monde"}),n({type:"filters",patch:{country:[e.cc]}})},children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.city&&t.jsx("span",{children:e.city})]})]}),t.jsxs("div",{className:"cside",children:[t.jsxs("div",{className:"top",children:[typeof e.score=="number"&&t.jsx("span",{className:"sc3",children:e.score}),t.jsx("span",{className:"vv",children:t.jsx(Qa,{o:e})})]}),e.card&&t.jsx(ra,{spec:e.card}),t.jsxs("div",{className:"sec2",children:[t.jsxs("div",{className:"k2",children:[st(e.engine||"")," ",Je(e.engine||"",r)]}),Te(e)&&t.jsx("div",{style:{marginTop:8},children:t.jsx(dt,{o:e})})]}),i.pipe&&(e.memoUrl||o)&&t.jsx("div",{className:"sec2 acts2",children:o&&t.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>c(e),children:a.actOnboard})})]})]})}function Dl({o:e,locked:a}){const{t:r,dispatch:n,caps:i,doDecide:o,lang:c}=I();if(!i.pipe&&e.kind==="op"){const x=Rt(e.amountEur,c),l=(()=>{const u=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return u?u[1].slice(0,32):""})(),f=(u,b=!1)=>p=>{p.stopPropagation(),b&&n({type:"continent",key:"monde"}),n({type:"filters",patch:u})};return t.jsxs("div",{className:"dcard dops"+(a?" tzr":""),children:[e.card&&t.jsx("div",{className:"dimg",children:t.jsx(ra,{spec:e.card})}),t.jsxs("div",{className:"dh",children:[t.jsx("span",{className:"dnm",title:e.name,children:e.name}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial",children:"📖"})]}),e.headline&&e.headline!==e.name&&t.jsx("div",{className:"ddesc",children:e.headline}),t.jsxs("div",{className:"dtags",children:[e.sector&&t.jsx("button",{type:"button",onClick:f({sector:[e.sector]}),children:e.sector}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:f({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:f({stage:[e.stage]}),children:e.stage}),x&&t.jsx("span",{className:"damt",children:x})]}),t.jsxs("div",{className:"dsig",children:[t.jsxs("span",{className:"dmo",children:[st(e.engine||"")," ",Je(e.engine||"",c)]}),Te(e)&&t.jsx(dt,{o:e})]}),e.url&&t.jsxs("a",{className:"dsrc",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:u=>u.stopPropagation(),children:[(c==="fr"?"lire la source":"read the source")+(l?` · ${l}`:"")," ↗"]}),!a&&t.jsx("div",{className:"dact",children:t.jsx(_r,{o:e})})]})}const s=Ae(e),d=["#E7EBF0","#E7F3EC","#C4E0D0","#7FC0A0","#0E8A4F","#DC2626"][s];return t.jsxs("div",{className:"dcard"+(a?" tzr":""),style:{"--c":d},children:[t.jsxs("div",{className:"dh",children:[typeof e.score=="number"&&t.jsx("span",{className:"dsc",children:e.score}),t.jsx("span",{className:"dnm",title:e.name,children:e.name})]}),t.jsxs("div",{className:"dv",children:[t.jsx(Qa,{o:e}),Te(e)&&t.jsx(dt,{o:e})]}),t.jsx("div",{className:"dmeta",children:[e.countryLabel,e.stage,e.sector].filter(Boolean).join(" · ").toUpperCase()}),(e.tagline||e.reasoning)&&t.jsx("div",{className:"ddesc",children:e.tagline||e.reasoning}),!a&&i.pipe&&s===3&&t.jsxs("div",{className:"dyn",children:[t.jsx("button",{type:"button",style:{"--c3":"#0A6B3D"},onClick:()=>o(e,!0),children:r.actYes}),t.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>o(e,!1),children:r.actNo})]}),!a&&e.memoUrl&&t.jsxs("button",{type:"button",className:"dmemo",onClick:()=>n({type:"memoConsole",id:e.id}),children:[r.actMemo," →"]})]})}function Pl(){const{t:e}=I(),[a,r]=m.useState(0);return m.useEffect(()=>{const n=window.setInterval(()=>r(i=>i+1),2400);return()=>window.clearInterval(n)},[]),t.jsxs("div",{className:"loadwait","aria-live":"polite",children:[t.jsxs("div",{className:"lw-top",children:[t.jsx("span",{className:"lw-dot"}),t.jsx("span",{className:"lw-msg",children:e.loadMsgs[a%e.loadMsgs.length]})]}),[0,1,2,3,4,5].map(n=>t.jsxs("div",{className:"lw-row",style:{"--d":`${n*.12}s`},children:[t.jsx("span",{className:"lw-c lw-c1"}),t.jsx("span",{className:"lw-c lw-c2"}),t.jsx("span",{className:"lw-c lw-c3"})]},n))]})}function Il({counts:e}){const{st:a,dispatch:r,t:n,lang:i}=I(),o=i==="en",c=l=>n.plabels[l]||"",s=[0,1,2,3,4,5,6,7].filter(l=>l!==a.ptab&&(e[l]||0)>0),d=s.includes(0)?0:s.sort((l,f)=>(e[f]||0)-(e[l]||0))[0];if(d===void 0)return t.jsx("div",{className:"void",children:n.emptyTab});const x=e[d]||0;return t.jsxs("div",{className:"void void-empty",children:[t.jsx("b",{children:o?`No “${c(a.ptab)}” for now.`:`0 ${c(a.ptab).toLowerCase().replace(/s$/,"")} pour l’instant.`}),t.jsx("span",{children:d===0?o?`${x} ${x>1?"files are":"file is"} waiting for your screening`:`${x} dossier${x>1?"s":""} attende${x>1?"nt":""} votre évaluation`:o?`${x} ${x>1?"files":"file"} in “${c(d)}”`:`${x} dossier${x>1?"s":""} dans « ${c(d)} »`}),t.jsxs("button",{type:"button",className:"abtn",onClick:()=>r({type:"ptab",tab:d}),children:[(o?"Open ":"Ouvrir ")+c(d)," →"]})]})}function $l(){var ve,xe,Fe,pe,De;const e=I(),{st:a,dispatch:r,t:n,caps:i,counts:o,scoped:c,scopedAll:s,markRow:d,lang:x,sessTally:l,data:f,dossiers:u,source:b}=e,p=R=>i.lockRowsAfter!==null||b==="ops"?Number.MAX_SAFE_INTEGER:lr,[g,v]=m.useState(new Set);m.useEffect(()=>{v(new Set)},[a.ptab,a.continent]);const[h,N]=m.useState(null);m.useEffect(()=>{N(null)},[a.ptab,a.continent]);const E=R=>v(V=>{const Z=new Set(V);return Z.has(R)?Z.delete(R):Z.add(R),Z}),y=b==="ops"&&a.dens==="liste",[z,L]=m.useState(null),[T,S]=m.useState("all"),[C,j]=m.useState(!1);m.useEffect(()=>{S("all"),j(!1)},[a.ptab,a.continent]),m.useEffect(()=>{if(!C)return;const R=V=>{var Z,ie;(ie=(Z=V.target)==null?void 0:Z.closest)!=null&&ie.call(Z,".atl2 .doable")||j(!1)};return document.addEventListener("click",R),()=>document.removeEventListener("click",R)},[C]);const M=dr(),P=m.useMemo(()=>{var V;const R=new Map;for(const Z of Vi(((V=M==null?void 0:M.ed)==null?void 0:V.html)||""))R.has(Z.t)||R.set(Z.t,Z.html);return R},[(ve=M==null?void 0:M.ed)==null?void 0:ve.html]),q=m.useCallback(R=>{if(R.decryptHtml)return R.decryptHtml;if(!P.size)return;const V=(R.name||"").trim().toLowerCase();if(V.length<3)return;const Z=P.get(V);if(Z)return Z;for(const[ie,Ce]of P)if(ie.includes(V)||V.includes(ie))return Ce},[P]),w=m.useMemo(()=>{const R=Ha(c,a.sort);return T==="all"?R:R.filter(V=>T==="explore"?!!V.noCo:!V.noCo)},[c,a.sort,b,T]),A=m.useMemo(()=>i.pipe?s.filter(R=>Te(R)&&Yo(R)):w.filter(R=>Te(R)&&!$e(R)),[i.pipe,s,w]),O=A.length,[U,W]=m.useState(!1),[H,Q]=m.useState(!1),B=`atl2:sigmini:${((xe=f.session)==null?void 0:xe.token)||"home"}`,[Y,ae]=m.useState(()=>{try{return localStorage.getItem(B)==="1"}catch{return!1}}),ne=m.useMemo(()=>i.pipe?w:w.filter(R=>!$e(R)&&!R.noCo),[w,i.pipe]),Ee=b==="ops"?w.filter(R=>R.noCo).length:0,je=i.pipe?n.plabels[a.ptab].toLowerCase():b==="ops"?n.edLabel:a.filters.status==="retenu"?n.keptByStan:a.filters.status==="ecarte"?n.droppedByStan:n.toSend,be=a.filters,ee=[];if(be.day)ee.push({k:"day",lib:n.fDay(be.day.slice(8,10)+"/"+be.day.slice(5,7)),off:()=>r({type:"filters",patch:{day:"",win:"all"}})});else if(be.win&&be.win!=="all"){const R=["1","7","30"].indexOf(be.win);R>=0&&ee.push({k:"win",lib:n.dates[R],off:()=>r({type:"filters",patch:{win:"all"}})})}const ce=R=>R.length<=2?R.join(", "):`${R.length} ${n.fSelected}`;for(const R of["sector","country","engine"]){const V=be[R];V&&V.length&&ee.push({k:R,lib:ce(V),off:()=>r({type:"clearFacet",facet:R})})}be.search&&ee.push({k:"search",lib:"🔍 "+be.search,off:()=>r({type:"filters",patch:{search:""}})});const G=(R,V,Z="",ie=!1)=>t.jsxs("button",{type:"button","data-s":R,className:Z,"aria-sort":a.sort.key===R?a.sort.dir===1?"ascending":"descending":"none",style:ie?{justifyContent:"flex-end"}:void 0,onClick:()=>r({type:"sort",key:R}),children:[V,t.jsx("span",{className:"ar",children:a.sort.key===R&&a.sort.dir===1?"▴":"▾"})]},R),_=m.useMemo(()=>{if(i.pipe||a.groupBy==="none")return null;const R=new Map;w.forEach(ie=>{const Ce=ie.engine||"?";R.has(Ce)||R.set(Ce,[]),R.get(Ce).push(ie)});const V={ma:0,fundraising:1,nominations:2,recrutements:3,media:4},Z=ya([...R.keys()],x);return[...R.entries()].sort((ie,Ce)=>{const se=V[ie[0]]??10+Z.indexOf(ie[0]),Be=V[Ce[0]]??10+Z.indexOf(Ce[0]);return se-Be})},[w,i.pipe,a.groupBy,x]),X=((pe=(Fe=_==null?void 0:_[0])==null?void 0:Fe[1][0])==null?void 0:pe.id)??((De=w[0])==null?void 0:De.id)??null;m.useEffect(()=>{y&&(z&&w.some(R=>R.id===z)||L(X))},[y,z,w,X]);const fe=m.useMemo(()=>{if(!y||!z)return null;const R=w.find(Z=>Z.id===z);if(!R)return null;const V=q(R);return V&&V!==R.decryptHtml?{...R,decryptHtml:V}:R},[y,z,w,q]),re=i.lockRowsAfter;let we=0;const J=(R,V)=>{let Z=a.shown[V]||p();return R.length-Z<=4&&(Z=R.length),R.slice(0,Z).map(se=>{const Be=re!==null&&we>=re;we++;const Xe=q(se),F=Xe&&Xe!==se.decryptHtml?{...se,decryptHtml:Xe}:se,te=se.engine==="ma"||se.engine==="fundraising",le=!y&&a.dens!=="maxi"&&(a.dens==="deplie"||(h?h==="open":!!Xe||b==="ops"&&te)),ye=g.has(se.id)?!le:le;return a.dens==="maxi"?t.jsx(Dl,{o:F,locked:Be},se.id):t.jsx(Ml,{o:F,locked:Be,open:ye,onToggle:()=>E(se.id),selected:y&&z===se.id,onSelect:y?L:void 0},se.id)})},de="list"+(a.dens==="maxi"?" maxi":a.dens==="ligne"||a.dens==="deplie"?" ligne":"")+(b==="ops"?" opsl":"")+(w.length?"":" list-empty"),ze=t.jsxs(t.Fragment,{children:[_?_.map(([R,V])=>t.jsxs(m.Fragment,{children:[a.dens!=="maxi"&&t.jsxs("div",{className:"grp-h",children:[t.jsx("span",{className:"ic",children:st(R)}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:Je(R,x)}),t.jsx("div",{className:"s",children:n.grpCount(V.filter(Z=>!$e(Z)).length,V.length)})]})]}),J(V,R)]},R)):J(w,"pt"+a.ptab),f.loading&&!u.length&&t.jsx(Pl,{}),!w.length&&!(f.loading&&!u.length)&&(i.pipe?t.jsx(Il,{counts:o}):t.jsx("div",{className:"void",children:n.emptyScope}))]});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"listhead"+(a.mapFolded?" mapoff":""),children:[t.jsxs("span",{className:"main",children:[t.jsx("b",{children:w.length})," ",je]}),t.jsx("span",{className:"dot",children:"·"}),a.mapFolded&&t.jsx(Fr,{variant:"compact",mapToggle:!0}),t.jsxs("span",{className:"ctx",children:[a.mapFolded?i.pipe&&e.fund?e.fund:null:t.jsxs(t.Fragment,{children:[e.contName,i.pipe&&e.fund?" · "+e.fund:""]}),ee.map(R=>t.jsxs("button",{type:"button",className:"fpuce",title:n.filterOff,onClick:V=>{V.stopPropagation(),R.off()},children:[R.lib,t.jsx("i",{children:"×"})]},R.k)),b==="ops"&&w.length>0&&" — "+n.edSplit(w.length-Ee,Ee)]}),a.filters.acquirer.trim()&&t.jsxs("span",{className:"acqchip",children:["🏢 ",n.acqOn(a.filters.acquirer),t.jsx("button",{type:"button",title:n.acqClear,onClick:()=>r({type:"acquirer",value:""}),children:"✕"})]}),i.showGroupBar&&t.jsxs("span",{className:"groupbar",children:[t.jsx("span",{className:"gl",children:n.groupBy}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>r({type:"groupBy",groupBy:"engine"}),children:n.groupEngine}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>r({type:"groupBy",groupBy:"none"}),children:n.groupNone})]}),a.pileMode&&t.jsx("button",{type:"button",className:"exitpile",onClick:()=>r({type:"pile",on:!1}),children:n.exitPile}),(i.showFunnel||b==="ops")&&t.jsx("span",{className:"dens",children:[["liste",n.densList],["ligne",n.densLigne],["maxi",n.densMaxi]].map(([R,V])=>t.jsxs("button",{type:"button","data-d":R,"aria-pressed":a.dens===R||R==="ligne"&&a.dens==="deplie",onClick:()=>r({type:"dens",dens:R}),children:[t.jsx("i",{children:t.jsx("em",{})}),t.jsx("b",{children:V})]},R))}),!y&&(i.showFunnel||b==="ops")&&a.dens!=="maxi"&&t.jsxs("span",{className:"foldall",children:[t.jsx("button",{type:"button","aria-pressed":h==="open",onClick:()=>{N("open"),v(new Set)},children:n.unfoldAll}),t.jsx("button",{type:"button","aria-pressed":h==="closed",onClick:()=>{N("closed"),v(new Set)},children:n.foldAllLbl}),b==="ops"&&t.jsxs("button",{type:"button","aria-pressed":h===null,onClick:()=>{N(null),v(new Set)},children:["📖 ",n.foldArts]})]}),(i.showFunnel||b==="ops")&&(()=>{var Z;const R=[["all",n.doAll],["eval",n.doEval],["explore",n.doExplore]],V=((Z=R.find(([ie])=>ie===T))==null?void 0:Z[1])||n.doAll;return t.jsxs("span",{className:"doable",children:[t.jsxs("button",{type:"button",className:"dobtn","aria-expanded":C,onClick:()=>j(ie=>!ie),children:[V,t.jsx("i",{children:"▾"})]}),C&&t.jsx("div",{className:"dolist",children:R.map(([ie,Ce])=>t.jsx("button",{type:"button","aria-pressed":T===ie,onClick:()=>{S(ie),j(!1)},children:Ce},ie))})]})})(),a.dens==="maxi"&&t.jsxs("label",{className:"sortsel",children:[t.jsx("span",{children:n.sortBy}),t.jsx("select",{value:a.sort.key,onChange:R=>r({type:"sort",key:R.target.value}),children:[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage],...i.pipe?[["crible",n.sortCrible],["memo",n.sortMemo],["score",n.sortScore]]:[]].map(([R,V])=>t.jsx("option",{value:R,children:V},R))})]}),i.showChain&&ne.length>0&&t.jsxs("button",{type:"button",className:"chain",onClick:()=>r({type:"chainStart",queue:ne.map(R=>R.id)}),children:[t.jsx("span",{className:"b",children:"▶"})," ",i.pipe?n.browse(ne.length):n.chainAll(ne.length)]}),a.mapFolded&&t.jsx(Or,{compact:!0})]}),t.jsx(ql,{}),O>0&&!a.filters.signalOnly&&!H&&t.jsxs("div",{className:"sigstrip"+(Y?" mini":""),children:[t.jsxs("div",{className:"sg-h",children:[t.jsx("span",{className:"t",dangerouslySetInnerHTML:{__html:n.sigStrip(O)}}),t.jsx("span",{className:"s",children:n.sigStripSub}),t.jsx("span",{className:"sg-sp"}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{signalOnly:!0,signalEngines:[]}}),children:n.sigStripGo}),t.jsx("button",{type:"button",className:"sg-x","aria-expanded":!Y,title:Y?n.boxExpand:n.boxCollapse,onClick:()=>ae(R=>{try{localStorage.setItem(B,R?"0":"1")}catch{}return!R}),children:Y?"▸":"▾"}),t.jsx("button",{type:"button",className:"sg-x",title:n.tourClose,onClick:()=>Q(!0),children:"×"})]}),t.jsxs("div",{className:"sg-c",children:[(U?A:A.slice(0,12)).map(R=>{const V=Te(R);return V?t.jsxs("button",{type:"button",className:"sg-chip",title:n.sigChipTitle(Ua(V,x),Yt(V,x)),onClick:()=>{d(R.id),r({type:"popup",id:R.id})},children:[t.jsx("b",{children:R.name}),t.jsxs("i",{children:[V.emoji," ",wa(V,x)]}),t.jsx("em",{children:Yt(V,x)})]},"sg-"+R.id):null}),!U&&A.length>12&&t.jsx("button",{type:"button",className:"sg-more",onClick:()=>W(!0),children:n.sigStripMore(A.length-12)})]})]}),a.dens!=="maxi"&&!y&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),G("country",n.colCountry),G("name",n.colCompany),G("amount",n.colAmount,"h-amt",!0),G("stage",n.colStage,"h-stade"),G("signal",n.colSignal,"h-sig"),i.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[G("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),G("memo",n.colMemo)]}),i.pipe&&G("score",n.colScore,"h-sc",!0),t.jsx("span",{}),i.showThumbs&&t.jsx("span",{className:"h-thu",children:n.colThumbs})]}),y?t.jsxs("div",{className:"desk",children:[t.jsxs("div",{className:"desk-list",children:[t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),G("country",n.colCountry),G("name",n.colCompany),G("amount",n.colAmount,"h-amt",!0),G("stage",n.colStage,"h-stade"),G("signal",n.colSignal,"h-sig"),t.jsx("span",{})]}),t.jsx("div",{className:de,children:ze})]}),t.jsx("aside",{className:"readpane","aria-label":x==="fr"?"Décryptage":"Briefing",children:fe?t.jsx(Ur,{o:fe}):t.jsx("p",{className:"readpane-empty",children:x==="fr"?"Cliquez une ligne — le décryptage s’ouvre ici.":"Click a row — the briefing opens here."})})]}):t.jsx("div",{className:de,children:ze}),b!=="ops"&&(()=>{const R=_||[["pt"+a.ptab,w]];let V=0,Z=0;for(const[Ce,se]of R){Z+=se.length;let Be=a.shown[Ce]||p();se.length-Be<=4&&(Be=se.length),V+=Math.min(se.length,Be)}const ie=Z-V;return ie<=0?null:t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>R.forEach(([Ce,se])=>r({type:"more",group:Ce,by:se.length,base:p()})),children:[t.jsx("span",{className:"more-label",children:n.more(ie,ie)}),t.jsx("span",{className:"more-meta",children:n.moreMeta(V,Z)})]})})(),i.showThumbs&&t.jsxs("p",{className:"learn",children:[n.learnLine,t.jsx("button",{type:"button",onClick:()=>r({type:"modal",modal:"crit"}),children:n.learnLink})]}),(l.kept>0||l.dropped>0)&&t.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:n.session(l.kept,l.dropped)}})]})}function Zn(e){let a=e==null?"":String(e);return/^[=+\-@\t]/.test(a)&&(a=`'${a}`),/[";\n\r]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}function Bl(e,a){const r=Ko(e);return a[{retenu:1,ana:2,pending:3,valide:4,ecarte:5}[r]??1]||""}function _l(e,a){const n=[a.head.split("|").map(Zn).join(";")];for(const i of e){const o=a.stageOf(i);n.push([i.name||"",Bl(i,a.plabels),Lt(i)||i.verdict||"",typeof i.score=="number"?i.score:"",i.countryLabel||i.cc||"",i.sector||"",o?a.stageLabel(o.stage):"",i.contactName||"",i.contactEmail||"",i.memoUrl||"",(i.date||"").slice(0,10),(i.reasoning||"").replace(/\s+/g," ").trim().slice(0,280)].map(Zn).join(";"))}return`\uFEFF${n.join(`\r
`)}`}function Ul(e){const a=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=`cibles_vue_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(n),n.click(),window.setTimeout(()=>{URL.revokeObjectURL(r);try{document.body.removeChild(n)}catch{}},400)}const Vl=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function Ge({k:e,v:a}){return a==null||a===""?null:t.jsxs("div",{className:"dsl",children:[t.jsx("span",{children:e}),t.jsx("b",{children:String(a)})]})}function Hl({o:e,qa:a}){const{t:r,lang:n,fund:i}=I(),o=(e.cribleStatus||"").trim().toUpperCase()||(Lt(e)==="NO MATCH"?"NO MATCH":"MATCH"),c=nt(e),s=(a==null?void 0:a.blocs)||{},d=[[r.qaVP,s.value_prop],[r.qaProduct,s.produit],[r.qaModel,s.modele],[r.qaSummary,s.synthese]];return t.jsxs("article",{className:"dspage",children:[t.jsxs("header",{className:"dsh",children:[t.jsxs("div",{children:[t.jsx("b",{children:e.name}),e.tagline&&t.jsx("p",{children:e.tagline})]}),t.jsxs("span",{className:"dsv"+(o==="NO MATCH"?" out":""),children:[o==="NO MATCH"?r.vOut:r.vKept,c&&t.jsx("em",{children:c})]})]}),e.reasoning&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsWhy}),t.jsx("p",{className:"dstxt",children:e.reasoning})]}),t.jsxs("section",{className:"dsgrid",children:[t.jsx(Ge,{k:r.cdSector,v:e.sector}),t.jsx(Ge,{k:r.cdStage,v:e.stage}),t.jsx(Ge,{k:r.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(Ge,{k:r.cdSite,v:e.domain||e.website}),t.jsx(Ge,{k:r.cdName,v:e.contactName}),t.jsx(Ge,{k:r.cdEmail,v:e.contactEmail}),t.jsx(Ge,{k:r.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(Ge,{k:r.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(Ge,{k:r.cdAngle,v:e.angle}),t.jsx(Ge,{k:r.cdDetected,v:Vl(e.date,n)})]}),d.some(([,x])=>x)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsAnalysis}),d.filter(([,x])=>x).map(([x,l])=>t.jsxs("div",{className:"dsb",children:[t.jsx("span",{children:x}),t.jsx("p",{children:l})]},x))]}),(e.ceoStatus||e.ceoNote)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsDecision}),e.ceoStatus&&t.jsx("p",{className:"dstxt",children:t.jsx("b",{children:e.ceoStatus})}),e.ceoNote&&t.jsxs("p",{className:"dstxt",children:["« ",e.ceoNote," »"]})]}),t.jsx("footer",{className:"dsf",children:r.dsFoot(i)})]})}function Wl(){const{t:e,lang:a,token:r,scoped:n,fund:i,data:o,dispatch:c}=I(),[s,d]=m.useState({}),x=25,l=m.useMemo(()=>n.slice(0,x),[n]);m.useEffect(()=>{l.length&&Qo(r,l.map(b=>b.name)).then(d)},[r,l]);const f=o.stats,u=b=>b.toLocaleString(a==="en"?"en-US":"fr-FR");return t.jsxs("div",{className:"dossier",children:[t.jsxs("div",{className:"dsbar",children:[t.jsx("b",{children:e.dsTitle(l.length)}),n.length>x&&t.jsx("span",{className:"mnote dim",children:e.dsCap(x,n.length)}),t.jsx("span",{className:"dssp"}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{c({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)},children:e.printBtn})]}),t.jsxs("div",{className:"dscover",children:[t.jsx("b",{children:i}),f&&typeof f.screened=="number"&&t.jsxs("p",{children:[u(f.screened)," ",e.funScreened(""),typeof f.kept=="number"&&t.jsxs(t.Fragment,{children:[" · ",u(f.kept)," ",e.covKept]}),typeof o.marketEstimate=="number"&&o.marketEstimate>0&&t.jsxs(t.Fragment,{children:[" · ",e.covOf(u(o.marketEstimate)),", ",Math.round(f.screened/o.marketEstimate*100)," %"]})]})]}),l.map(b=>t.jsx(Hl,{o:b,qa:s[b.name]},b.id)),!l.length&&t.jsx("p",{className:"mnote",children:e.dsEmpty})]})}const Yl=50;function Ja({label:e,onPreview:a,onTest:r,readOnly:n}){const{t:i}=I(),[o,c]=m.useState(null),[s,d]=m.useState(!1),[x,l]=m.useState(""),[f,u]=m.useState(0),[b,p]=m.useState(""),[g,v]=m.useState(!1),h=m.useRef(null);m.useEffect(()=>()=>{h.current&&window.clearInterval(h.current)},[]);const N=async y=>{d(!0),l("");const z=await a();if(d(!1),z.ok){c(z);return}if(z.busy){l(i.alertPreviewBusy);return}if(!y){l(i.alertPreviewFail);return}u(Yl),h.current=window.setInterval(()=>{u(L=>L>1?L-1:(h.current&&window.clearInterval(h.current),N(!1),0))},1e3)},E=async()=>{if(n||g)return;v(!0),p("");const y=await r();v(!1),p(y.ok?i.alertTestOk(y.sentTo||""):y.error||i.actErr)};return t.jsxs("div",{className:"mailp",children:[t.jsxs("div",{className:"mailp-row",children:[t.jsx("button",{type:"button",className:"abtn",disabled:s||f>0,onClick:()=>{N(!0)},children:s?"…":e}),t.jsx("button",{type:"button",className:"abtn",disabled:n||g,onClick:()=>{E()},children:g?"…":i.alertTest})]}),f>0&&t.jsx("p",{className:"mnote",children:i.alertPreviewRetry(f)}),x&&t.jsx("p",{className:"mnote warn",children:x}),b&&t.jsx("p",{className:"mnote",children:b}),!b&&t.jsx("p",{className:"mnote dim",children:i.alertTestHint}),(o==null?void 0:o.ok)&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mnote",children:[t.jsx("b",{children:i.alertSubject})," ",o.subject]}),o.pending===0&&t.jsx("p",{className:"mnote warn",children:i.alertPreviewEmpty}),t.jsx("iframe",{className:"mailp-frame",sandbox:"",srcDoc:o.html,title:e})]})]})}const xt="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function Oe({title:e,icon:a,children:r,wide:n}){const{dispatch:i}=I();return vt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:o=>{o.target===o.currentTarget&&i({type:"modal",modal:null})},children:t.jsxs("div",{className:"mcard",style:n?{width:"min(760px,100%)"}:void 0,children:[t.jsxs("div",{className:"mh",children:[a&&t.jsx("span",{className:"no g",children:a}),t.jsx("h2",{children:e}),t.jsx("button",{type:"button",className:"x",onClick:()=>i({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"mb",children:r})]})})}),document.body)}function Gl(){const{st:e}=I();switch(e.modal){case"chain":return t.jsx(Ql,{});case"space":return t.jsx(Jl,{});case"alert":return t.jsx(Xl,{});case"queue":return t.jsx(nc,{});case"export":return t.jsx(rc,{});case"plug":return t.jsx(sc,{});case"recharge":return t.jsx(cc,{});case"cover":return t.jsx(pc,{});case"dossier":return t.jsx(dc,{});case"crit":return t.jsx(uc,{});case"tuto":return t.jsx(mc,{});case"rdv":return t.jsx(Kl,{});case"memoalert":return t.jsx(oc,{});default:return null}}function Kl(){const{dispatch:e,fund:a}=I(),r=typeof document<"u"&&!!document.getElementById("rdv");return m.useEffect(()=>{r&&(e({type:"modal",modal:null}),ts())},[r,e]),r?null:t.jsx(Zo,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0,onClose:()=>e({type:"modal",modal:null})})}function Ql(){const{st:e,dispatch:a,byId:r,t:n,lang:i,mode:o,askEvaluate:c,evalBusy:s,caps:d,memoQueued:x,doAnalyse:l}=I(),f=o==="client",u=e.chain.queue.map(v=>r.get(v)).filter(v=>!!v),b=e.chain.idx,p=u[b],g=b>=u.length;return vt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",children:t.jsxs("div",{className:"fcard",children:[t.jsxs("div",{className:"fh",children:[t.jsx("span",{className:"c",children:g?n.finished:`${b+1} / ${u.length}`}),t.jsx("span",{className:"p",children:t.jsx("i",{style:{width:(g?100:b/Math.max(1,u.length)*100)+"%"}})}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"fb",children:g||!p?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🏁"}),t.jsx("div",{className:"t",children:n.chainDone}),t.jsx("div",{className:"s",children:n.chainDoneSub(u.length)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:p.name}),t.jsx("div",{className:"sub",children:[yt(p.cc,i)||p.countryLabel,p.sector,p.stage,n.daysAgo(at(p.date))].filter(Boolean).map(v=>String(v).toUpperCase()).join(" · ")}),t.jsxs("div",{className:"tags",children:[t.jsx("span",{className:"hi",children:Je(p.engine,i).toUpperCase()}),typeof p.amountEur=="number"&&p.amountEur>0&&t.jsx("span",{children:Rt(p.amountEur,i)})]}),Te(p)&&t.jsxs("div",{style:{marginBottom:12},children:[t.jsx(dt,{o:p,lg:!0})," ",t.jsx(oa,{o:p,src:!0})]}),(p.tagline||p.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:p.tagline||p.headline})]}),p.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.memo}),t.jsx("p",{className:"memo",children:p.reasoning})]}),f&&$e(p)&&t.jsxs("div",{className:"vbox",style:{"--c":it(p)==="retenu"?"var(--brand)":it(p)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[t.jsx("span",{className:"vt",children:it(p)==="retenu"?"✓ "+n.kept:it(p)==="pending"?"📞 "+n.pending:"✗ "+n.dropped}),t.jsx("span",{className:"vd",children:p.reasoning||""})]})]})}),t.jsxs("div",{className:"ff",children:[!g&&p&&d.pipe&&Ae(p)===1&&!x.has(p.id)?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{l(p),a({type:"chainNext"})},children:[t.jsx("span",{className:"fill"}),n.chainMemoGo]}):!g&&p&&!(f&&$e(p))&&(p.noCo&&p.url?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{var v;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:p.url}}))}catch{}a({type:"modal",modal:null}),(v=document.querySelector(".atl2 .demand"))==null||v.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rowExtract]}):t.jsxs("button",{type:"button",className:"evalbtn"+(s?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:s,onClick:()=>{c(p)},children:[t.jsx("span",{className:"fill"}),n.launchEval]})),t.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(g?{type:"modal",modal:null}:{type:"chainNext"}),children:g?n.closeBtn:n.skip})]})]})})}),document.body)}function Jl(){const{st:e,dispatch:a,dossiers:r,t:n,mode:i}=I(),o=i==="client",c=m.useMemo(()=>o?r.filter(f=>$e(f)):[],[r,o]),s=m.useMemo(()=>Ha(c.filter(f=>it(f)==="retenu"),{key:"signal",dir:-1}),[c]),d=m.useMemo(()=>c.filter(f=>it(f)==="ecarte"),[c]),x=e.spaceTab==="retenu"?s:d,l=e.spaceTab==="retenu"?"var(--brand)":"var(--red)";return t.jsxs(Oe,{title:n.spaceTitle,children:[t.jsxs("div",{className:"sp-tabs",children:[t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":e.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",n.statusKeep.replace("✅ ","")," ",t.jsx("b",{children:s.length})]}),t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":e.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",n.statusDrop.replace("❌ ","")," ",t.jsx("b",{children:d.length})]})]}),x.length===0&&t.jsx("div",{className:"sp-empty",children:n.spEmpty}),x.slice(0,40).map(f=>t.jsxs("div",{className:"sp-row",children:[t.jsx("span",{className:"sc",style:{"--c":l},children:typeof f.score=="number"&&f.score>0?f.score:"—"}),t.jsxs("span",{children:[t.jsx("div",{className:"nm",children:f.name}),t.jsx("div",{className:"rr",children:f.reasoning||f.tagline||""})]})]},f.id)),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:n.spNote}})]})}function Xl(){const{mode:e}=I();return e==="client"||e==="apercu"?t.jsx(Zl,{}):t.jsx(ac,{})}function Zl(){const{t:e,token:a,flash:r,flashErr:n,mode:i}=I(),[o,c]=m.useState("d"),s=i!=="client";return t.jsxs(Oe,{title:e.alertTitle,icon:"🔔",children:[t.jsxs("div",{className:"ntabs",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":o==="d",className:o==="d"?"on":"",onClick:()=>c("d"),children:e.alertTabDaily}),t.jsx("button",{type:"button",role:"tab","aria-selected":o==="w",className:o==="w"?"on":"",onClick:()=>c("w"),children:e.alertTabWeekly}),t.jsx("button",{type:"button",role:"tab","aria-selected":o==="m",className:o==="m"?"on":"",onClick:()=>c("m"),children:e.alertTabMarket})]}),o==="d"&&t.jsx(ec,{t:e,token:a,readOnly:s,flash:r,flashErr:n}),o==="w"&&t.jsx(tc,{t:e,token:a,readOnly:s,flash:r,flashErr:n}),o==="m"&&t.jsx(Vr,{})]})}function ec({t:e,token:a,readOnly:r,flash:n,flashErr:i}){const[o,c]=m.useState(null),[s,d]=m.useState(!1),[x,l]=m.useState(0);m.useEffect(()=>{let p=!0;return d(!1),fn(a).then(g=>{p&&(g?c(g):d(!0))}),()=>{p=!1}},[a,x]);const f=p=>{r||fn(a,p).then(g=>{if(!g){i(e.actErr);return}c(g),g.throttled?i(e.alertThrottled):n(e.alertSaved)})};if(s)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>l(p=>p+1),children:e.retry})]});if(!o)return t.jsx("div",{className:"sp-empty",children:"…"});const u=p=>!o.sections||o.sections.includes(p),b=p=>{const g=o.sections||e.alertSec.map(([v])=>v);f({sections:u(p)?g.filter(v=>v!==p):[...g,p]})};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qrow",children:[t.jsxs("span",{children:[t.jsx("b",{children:e.alertDaily}),t.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:e.alertDailyHint})]}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":o.enabled===!0,disabled:r,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>f({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertHour}),t.jsxs("span",{className:"qset",children:[t.jsx("button",{type:"button",onClick:()=>f({hour:Math.max(6,(o.hour??7)-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[o.hour??7," h"]}),t.jsx("button",{type:"button",onClick:()=>f({hour:Math.min(21,(o.hour??7)+1)}),disabled:r,children:"＋"})]})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertDays}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("button",{type:"button",className:"abtn",disabled:r,style:o.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>f({days:"weekdays"}),children:e.alertWeekdays}),t.jsx("button",{type:"button",className:"abtn",disabled:r,style:o.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>f({days:"daily"}),children:e.alertEveryday})]})]}),t.jsx("div",{className:"qsec ok",children:e.alertSections}),t.jsx("div",{className:"secl",children:e.alertSec.map(([p,g])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:u(p),disabled:r,onChange:()=>b(p)}),t.jsxs("span",{children:[g,p==="market"&&t.jsxs("i",{children:[" ",e.alertSecSlow]})]})]},p))}),t.jsx("p",{className:"mnote dim",children:e.alertSecNote}),t.jsx(Ja,{label:e.alertPreview,readOnly:r,onPreview:()=>si(a),onTest:()=>ii(a)}),o.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),o.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${e.updatedAt(o.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function tc({t:e,token:a,readOnly:r,flash:n,flashErr:i}){const[o,c]=m.useState(null),[s,d]=m.useState(!1),[x,l]=m.useState(0);m.useEffect(()=>{let p=!0;return d(!1),xn(a).then(g=>{p&&(g?c(g):d(!0))}),()=>{p=!1}},[a,x]);const f=p=>{r||xn(a,p).then(g=>{if(!g){i(e.actErr);return}c(g),n(e.alertSaved)})};if(s)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>l(p=>p+1),children:e.retry})]});if(!o)return t.jsx("div",{className:"sp-empty",children:"…"});const u=o.dow??0,b=o.hour??16;return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"lead2",children:e.alertWeeklySub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.alertWeeklyOn})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":o.enabled===!0,disabled:r,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>f({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertWeeklyWhen}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("select",{value:u,disabled:r,onChange:p=>f({dow:Number(p.target.value)}),children:e.alertDow.map((p,g)=>t.jsx("option",{value:g,children:p},p))}),t.jsx("button",{type:"button",onClick:()=>f({hour:Math.max(6,b-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[b," h"]}),t.jsx("button",{type:"button",onClick:()=>f({hour:Math.min(21,b+1)}),disabled:r,children:"＋"})]})]}),t.jsx(Ja,{label:e.alertPreviewWeekly,readOnly:r,onPreview:()=>ci(a),onTest:()=>li(a)}),o.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),o.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${e.updatedAt(o.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function Vr(){const{st:e,t:a,lang:r,scoped:n,contName:i,email:o}=I(),[c,s]=m.useState(o||""),[d,x]=m.useState(!1),[l,f]=m.useState(!1);m.useEffect(()=>{o&&s(o)},[o]);const u=e.filters,b=m.useMemo(()=>n.filter(h=>Te(h)).length,[n]),p=u.win==="1"?0:u.win==="7"?1:u.win==="30"?2:3,g=async()=>{if(!(!/.+@.+\..+/.test(c)||l)){f(!0);try{await fetch(`${Ia}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.trim(),sectors:u.sector,countries:u.country,source:o?"atelier2-client":"atelier2",website:""})}),x(!0)}finally{f(!1)}}},v=[[a.amRows.continent,i],[a.amRows.since,a.amSince[p]],[a.amRows.signal,u.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,u.engine.length?u.engine.map(h=>Je(h,r)).join(", "):a.amAllEngines],[a.amRows.sectors,u.sector.length?u.sector.join(", "):a.amAllSectors],[a.amRows.countries,u.country.length?u.country.map(h=>yt(h,r)||h).join(", "):a.amAllCountries],[a.amRows.stages,u.stage.length?u.stage.join(", "):a.amAllStages]];return d?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🔔"}),t.jsx("div",{className:"t",children:a.amOk}),t.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(c)}})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"crit",children:v.map(([h,N])=>t.jsxs("div",{className:"r",children:[t.jsx("span",{className:"k",children:h}),t.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:N}})]},h))}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:c,readOnly:!!o,onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&g()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(l?" loading":""),style:{padding:"12px 18px"},onClick:()=>void g(),children:[t.jsx("span",{className:"fill"}),a.amActivate]})]}),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(n.length,b)}}),t.jsx("p",{className:"mnote",children:a.amHonest})]})}function ac(){const{t:e}=I();return t.jsx(Oe,{title:e.alertTitle,icon:"🔔",children:t.jsx(Vr,{})})}function nc(){var S,C;const{t:e,token:a,fund:r,mode:n,dossiers:i,doAnalyse:o,memoQueued:c,caps:s,dispatch:d,liveMemos:x}=I(),[l,f]=m.useState(null),[u,b]=m.useState([]),[p,g]=m.useState(0),v=n==="client",h=m.useMemo(()=>{const j=new Map;return i.forEach(M=>{const P=(M.name||"").trim().toLowerCase();P&&!j.has(P)&&j.set(P,M)}),j},[i]);m.useEffect(()=>{let j=!0;return(async()=>{const[M,P]=await Promise.all([Ba(r),nr(a)]);j&&(M&&f(M),b(P))})(),()=>{j=!1}},[a,r,p]);const N=(l==null?void 0:l.per_day)??0,E=((S=l==null?void 0:l.analyzed_today)==null?void 0:S.length)??0,y=l==null?void 0:l.offre,z=(l==null?void 0:l.pool_meta)||[],L=m.useMemo(()=>{const j=new Map;for(const M of(l==null?void 0:l.scheduled)||[])for(const P of M.names||[])j.has(P)||j.set(P,{label:M.day_label,date:M.date});return j},[l==null?void 0:l.scheduled]),T=(l==null?void 0:l.in_progress)||[];return t.jsxs(Oe,{title:e.queueTitle,wide:!0,children:[y&&t.jsxs("div",{className:"qoffre"+(y.en_retard?" late":""),children:[t.jsx("span",{className:"ol",children:e.qOffer}),t.jsx("b",{children:y.libelle}),t.jsxs("span",{className:"od",children:[e.qDelay," ",t.jsx("b",{children:y.delai})]}),t.jsx("span",{className:"osp"}),y.rythme>0?t.jsx("span",{className:"or",children:e.qRate(y.rythme)}):y.manuel_par_jour?t.jsx("span",{className:"or",children:e.qManual(y.manuel_par_jour)}):t.jsx("span",{className:"or dim",children:e.qPaused})]}),t.jsxs("div",{className:"qbox",children:[t.jsx("div",{className:"qhead",children:t.jsx("b",{dangerouslySetInnerHTML:{__html:e.queueDone(E,E+(((C=l==null?void 0:l.pool_order)==null?void 0:C.length)??0))}})}),y&&t.jsxs("div",{className:"qeta",children:[y.file===0?e.qEtaDone:y.rythme<=0?e.qEtaPaused:e.qEta(y.file,y.rythme,y.jours_restants),y.en_retard&&t.jsxs("em",{children:[" ",e.qLate(y.delai,y.plafond)]})]}),t.jsxs("div",{className:"qrate",children:[e.covRate," — ",t.jsx("b",{children:e.covRateNow(N)}),(y==null?void 0:y.reglage_manuel)&&t.jsxs("span",{className:"dim",children:[" · ",e.qManualSet]})]})]}),(T.length>0||x.items.some(j=>j.status==="boot"||j.status==="running"))&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec run",children:["⌛ ",e.qRunning]}),t.jsxs("div",{className:"qrows",children:[x.items.filter(j=>j.status==="boot"||j.status==="running"||j.status==="error").map(j=>t.jsxs("div",{className:"qr2 qfl",children:[t.jsx("b",{children:j.name}),t.jsx("span",{className:"qd",children:j.memoType||""}),t.jsx(Ct,{item:j,serverOff:x.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd})]},"live-"+j.name)),T.filter(j=>!x.liveOf(j.name)).map(j=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:j.name}),t.jsxs("span",{className:"qd",children:[j.memo_type||"",j.age_min?` · ${Math.round(j.age_min)} min`:""]}),t.jsx("span",{className:"qt",children:j.state||""})]},"ip-"+j.name))]})]}),u.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec ok",children:["⏳ ",e.queueToday]}),t.jsx("div",{className:"qrows",children:u.map(j=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:j.company}),t.jsxs("span",{className:"qd",children:[j.memo_type,typeof j.est_min=="number"?` · ~${j.est_min} min`:""]}),t.jsx("span",{className:"qt",children:j.status}),j.url&&t.jsx("a",{className:"qgo",href:j.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.actMemo}),v&&j.status==="error"&&t.jsx("button",{type:"button",className:"qgo an",onClick:()=>{mn(a,j.company,"retry").then(()=>g(M=>M+1))},children:e.queueRetry}),v&&j.status!=="done"&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{mn(a,j.company,"delete").then(()=>g(M=>M+1))},children:e.queueDelete})]},j.company))})]}),t.jsxs("div",{className:"qsec todo",children:["⚡ ",e.qUpNext(z.length)]}),t.jsx("div",{className:"qhedge",children:e.qHedge}),t.jsxs("div",{className:"qrows qfile",children:[z.length===0&&t.jsx("div",{className:"sp-empty",children:e.queueEmpty}),z.map((j,M)=>{const P=L.get(j.name),q=h.get((j.name||"").trim().toLowerCase()),w=x.liveOf(j.name),A=!!(q&&c.has(q.id))||!!(w&&(w.status==="boot"||w.status==="running")),O=!!(q&&Ae(q)===1&&!q.memoUrl)&&!w;return t.jsxs("div",{className:"qr2 qfl",children:[t.jsxs("span",{className:"qn2",children:["#",M+1]}),P?t.jsx("span",{className:"qwhen"+(P.label==="demain"?" soon":""),children:P.label}):t.jsx("span",{className:"qwhen later",children:e.qLater}),t.jsx("b",{children:j.name}),j.fresh&&t.jsx("span",{className:"qfresh",children:e.qFresh}),typeof j.score=="number"&&t.jsx("span",{className:"qs2",children:j.score}),w&&(w.status==="boot"||w.status==="running")&&t.jsx(Ct,{item:w,serverOff:x.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),O&&(s.lockActions||!v?t.jsx("button",{type:"button",className:"qgo an",onClick:()=>d({type:"modal",modal:"rdv"}),children:e.actLocked}):t.jsx("button",{type:"button",className:"qgo an",disabled:A,onClick:()=>{o(q),g(U=>U+1)},children:A?e.actAnalyseQueued:e.actAnalyse})),j.excerpt&&t.jsx("span",{className:"qex",children:j.excerpt})]},j.name+":"+M)})]}),t.jsxs("div",{className:"qsec",children:["🧭 ",e.qVerdictsT]}),t.jsx("ul",{className:"qverd",children:e.qVerdicts.map(([j,M])=>t.jsxs("li",{children:[t.jsx("b",{children:j})," — ",M]},j))})]})}function rc(){const{t:e,token:a,flash:r,scoped:n,caps:i,stageOf:o,dispatch:c}=I(),s=`${xt}/cibles/list.csv?token=${a}`,d=`${xt}/cibles/list.json?token=${a}`,x=`${xt}/cibles/export.xlsx?token=${a}&scope=full`,l=`=IMPORTDATA("${s}")`,f=v=>{var h;(h=navigator.clipboard)==null||h.writeText(v).then(()=>r(e.exportCopied))},u=[{def:e.exportCsv,value:s,href:s},{def:e.exportSheet,value:l},{def:e.exportLive,value:d,href:d},{def:e.exportXlsx,value:x,href:x}],b=!i.lockActions&&n.length>0,p=()=>{Ul(_l(n,{plabels:e.plabels,head:e.exportViewHead,stageOf:o,stageLabel:v=>(e.stg.find(([h])=>h===v)||["",""])[1]})),r(e.exportViewDone(n.length))},g=()=>{c({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)};return t.jsxs(Oe,{title:e.exportTitle,icon:"📥",children:[t.jsx("p",{className:"lead2",children:e.exportLead}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🖨️"}),t.jsxs("div",{children:[t.jsx("b",{children:e.printTitle}),t.jsx("p",{children:e.printDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb",onClick:g,children:e.printBtn})]})}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🗂"}),t.jsxs("div",{children:[t.jsx("b",{children:e.dsBtn}),t.jsx("p",{children:e.dsHint})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>c({type:"modal",modal:"dossier"}),children:e.exportViewBtn})]})}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"📄"}),t.jsxs("div",{children:[t.jsx("b",{children:e.exportViewTitle}),t.jsx("p",{children:e.exportViewDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb pri",onClick:p,children:e.exportViewBtn})]})}),t.jsx("div",{className:"expl",children:u.map(({def:v,value:h,href:N})=>t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:v[0]}),t.jsxs("div",{children:[t.jsx("b",{children:v[1]}),t.jsx("p",{children:v[2]})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>f(h),children:e.exportCopy}),N&&t.jsx("a",{className:"exb",href:N,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.exportOpen})]},v[1]))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.exportKeyWarning})]})}function oc(){const{t:e,token:a,flash:r,flashErr:n,mode:i}=I(),o=i!=="client",[c,s]=m.useState(null),[d,x]=m.useState(!1),[l,f]=m.useState(0),[u,b]=m.useState(!1);m.useEffect(()=>{let h=!0;return x(!1),un(a).then(N=>{h&&(N?s(N):x(!0))}),()=>{h=!1}},[a,l]);const p=()=>(c==null?void 0:c.sections)||{swot:!0,action:!0,synergies:!0,quadrant:!0,verdict:!0},g=h=>{if(o||!c)return;const N={enabled:h.enabled??!!c.enabled,email:h.email??(c.email||""),sections:h.sections??p()};b(!0),un(a,N).then(E=>{if(b(!1),!E){n(e.memoAlertErr);return}s(E),r(e.memoAlertSaved)})};if(d)return t.jsx(Oe,{title:e.memoAlertTitle,icon:"🔔",children:t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>f(h=>h+1),children:e.retry})]})});if(!c)return t.jsx(Oe,{title:e.memoAlertTitle,icon:"🔔",children:t.jsx("div",{className:"sp-empty",children:"…"})});const v=p();return t.jsxs(Oe,{title:e.memoAlertTitle,icon:"🔔",children:[t.jsx("p",{className:"lead2",children:e.memoAlertSub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.memoAlertToggle})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":c.enabled===!0,disabled:o||u,style:c.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>g({enabled:!c.enabled}),children:c.enabled?"ON":"OFF"})})]}),t.jsx(ic,{value:c.email||"",readOnly:o||u,label:e.memoAlertEmail,okLabel:e.csNoteOk,onSave:h=>g({email:h})}),t.jsx("div",{className:"qsec ok",children:e.memoAlertSections}),t.jsx("div",{className:"secl",children:e.memoAlertSec.map(([h,N])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:!!v[h],disabled:o||u,onChange:()=>g({sections:{...v,[h]:!v[h]}})}),t.jsx("span",{children:N})]},h))}),t.jsx(Ja,{label:e.memoAlertPreview,readOnly:o,onPreview:()=>Xo(a,v),onTest:()=>Jo(a,v)})]})}function ic({value:e,readOnly:a,label:r,okLabel:n,onSave:i}){const[o,c]=m.useState(e);m.useEffect(()=>{c(e)},[e]);const s=o.trim()!==e.trim(),d=!o.trim()||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(o.trim());return t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:r}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("input",{type:"email",className:"mailin",value:o,disabled:a,onChange:x=>c(x.target.value),onKeyDown:x=>{x.key==="Enter"&&s&&d&&i(o.trim())}}),t.jsx("button",{type:"button",className:"abtn",disabled:a||!s||!d,onClick:()=>i(o.trim()),children:n})]})]})}function sc(){const{t:e,token:a,flash:r,flashErr:n,canWrite:i}=I(),[o,c]=m.useState(null),[s,d]=m.useState(!1),[x,l]=m.useState(null),[f,u]=m.useState(""),[b,p]=m.useState(0);m.useEffect(()=>{let E=!0;return d(!1),ka(a).then(y=>{E&&(y?c({configured:y.configured,url_hint:y.url_hint}):d(!0))}),ai(a).then(y=>{E&&l(y)}),()=>{E=!1}},[a,b]);const g=(E,y)=>{i&&ka(a,E).then(z=>{if(!z||z.ok===!1){n(e.actErr);return}E.test&&z.sent===!1?n(e.plugTestThrottled):r(y),p(L=>L+1)})},v='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}',h=JSON.stringify({event:"status",company:"Aitona",status:"Validée",note:"très bon fit — introduction chaude possible",score:90,website:"https://aitona.com",memo_url:"https://analysis.proplace.co/…"},null,2),N=`curl -X POST ${xt}/cibles/evaluate \\
  -H "Content-Type: application/json" \\
  -d '{"token":"${a}","q":"nom ou URL de la société"}'`;return t.jsxs(Oe,{title:e.plugTitle,icon:"🔌",wide:!0,children:[x&&t.jsx("p",{className:"mnote"+(x.enabled?" warn":""),children:x.enabled?e.plugAutoOn(x.destination||"webhook"):e.plugAutoOff}),s?t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>p(E=>E+1),children:e.retry})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugCrm}),t.jsx("p",{className:"mnote",children:e.plugCrmHint}),t.jsxs("ol",{className:"plughow",children:[t.jsx("li",{children:e.plugHow1}),t.jsx("li",{children:e.plugHow2}),t.jsx("li",{children:e.plugHow3})]}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"url",maxLength:500,placeholder:e.plugUrlPh,value:f,disabled:!i,onChange:E=>u(E.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:!i||!f.trim(),onClick:()=>g({url:f.trim()},e.plugSaved),children:e.plugSave})]}),(o==null?void 0:o.configured)&&t.jsxs("p",{className:"mnote",children:["✓ ",o.url_hint||""," ",t.jsx("button",{type:"button",className:"lk",disabled:!i,onClick:()=>g({test:!0},e.plugTested),children:e.plugTest})," · ",t.jsx("button",{type:"button",className:"lk",disabled:!i,onClick:()=>g({remove:!0},e.plugRemoved),children:e.plugRemove})]}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugExT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:h}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var E;(E=navigator.clipboard)==null||E.writeText(h).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugExResult})]}),t.jsx(lc,{}),t.jsx("div",{className:"qsec ok",children:e.plugApiT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:N}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var E;(E=navigator.clipboard)==null||E.writeText(N).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote dim",children:e.plugQuota}),t.jsx("div",{className:"qsec ok",children:e.plugMcp}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:v}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var E;(E=navigator.clipboard)==null||E.writeText(v).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugFeeds}),t.jsx("p",{className:"mnote warn",children:e.plugTokenNote}),t.jsx("p",{className:"mnote dim",children:t.jsx("a",{href:"https://proplace.co/api/",target:"_blank",rel:"noopener noreferrer",children:e.plugDoc})})]})]})}function lc(){const{t:e,token:a,lang:r}=I(),[n,i]=m.useState("valides"),[o,c]=m.useState(!1),[s,d]=m.useState(null),[x,l]=m.useState(null),[f,u]=m.useState(!1),[b,p]=m.useState(!1),[g,v]=m.useState(null),[h,N]=m.useState(null),[E,y]=m.useState(null),z=`atl2:bulk:${a}:${n}`;m.useEffect(()=>{ka(a).then(P=>{N(P&&P.configured?P.url_hint||"webhook":null)})},[a]),m.useEffect(()=>{d(null),l(null),u(!1),v(null);try{const P=JSON.parse(localStorage.getItem(z)||"null");y(P&&Date.now()-Date.parse(P.t)<24*3600*1e3?P:null)}catch{y(null)}},[z]);const L=async()=>{c(!0),u(!1),v(null);const P=await ri(a,n);d(P),l(P.ok?n:null),c(!1)},T=m.useRef(!1),S=async()=>{if(T.current)return;T.current=!0,p(!0);const P=`${a}:${n}:${Date.now()}:${Math.random().toString(36).slice(2,10)}`;let q;try{q=await oi(a,n,"webhook",void 0,P)}finally{T.current=!1}if(p(!1),u(!1),v(q),q.ok&&(q.pushed||0)>0){const w={t:new Date().toISOString(),n:q.pushed||0};y(w);try{localStorage.setItem(z,JSON.stringify(w))}catch{}}},C=s!=null&&s.ok&&s.ready||0,j=!!(s!=null&&s.ok)&&x===n&&C>0&&!!h&&!E,M=E?new Date(E.t).toLocaleString(r==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugBulk}),t.jsx("p",{className:"mnote",children:e.plugBulkHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("select",{value:n,onChange:P=>i(P.target.value),children:e.plugBulkTabs.map(([P,q])=>t.jsx("option",{value:P,children:q},P))}),t.jsx("button",{type:"button",className:"abtn",disabled:o,onClick:()=>{L()},children:o?"…":e.plugBulkPreview})]}),s&&(s.ok?t.jsx("p",{className:"mnote",children:e.plugBulkResult(s.ready||0,s.linkedinReady||0,(s.noContact||[]).length)}):t.jsx("p",{className:"mnote warn",children:e.actErr})),!!(s!=null&&s.ok)&&t.jsx("p",{className:"mnote dim",children:e.bulkScope}),E&&t.jsx("p",{className:"mnote",children:e.bulkLocked(M,E.n)}),!E&&!!(s!=null&&s.ok)&&!h&&t.jsx("p",{className:"mnote warn",children:e.bulkNoDest}),!E&&!s&&t.jsx("p",{className:"mnote dim",children:e.bulkPreviewFirst}),j&&!f&&t.jsx("button",{type:"button",className:"abtn dgr",onClick:()=>u(!0),children:e.bulkArm}),j&&f&&t.jsxs("div",{className:"bulkc",children:[t.jsx("p",{className:"mnote warn",children:e.bulkWarn(C,h||"")}),t.jsx("button",{type:"button",className:"abtn dgr",disabled:b,onClick:()=>{S()},children:b?e.bulkSending:e.bulkConfirm(h||"")}),t.jsx("button",{type:"button",className:"abtn",disabled:b,onClick:()=>u(!1),children:e.bulkCancel})]}),g&&(g.ok?g.replayed?t.jsx("p",{className:"mnote",children:g.pending?e.bulkPending:e.bulkReplayed}):(g.pushed||0)>0?t.jsx("p",{className:"mnote",children:e.bulkDone(g.pushed||0,g.linkedinReady||0,g.skippedNoEmail||0)}):t.jsx("p",{className:"mnote warn",children:e.bulkNone}):t.jsx("p",{className:"mnote warn",children:g.error||e.actErr}))]})}function cc(){const{t:e,data:a,lang:r}=I(),n=a.credits,i=a.email,o=async c=>{if(!i)return;const s=window.location.href.split("?")[0];try{const x=await(await fetch(`${Ia}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,lookup_key:c,success_url:s+"?credits=ok",cancel_url:s+"?credits=cancel"})})).json();x.url&&(window.location.href=x.url)}catch{}};return t.jsxs(Oe,{title:e.rechargeTitle,icon:"⚡",children:[n&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:e.rechargeHint(n.daily_grant)}}),n.costs&&t.jsxs("p",{className:"mnote",children:["① ",e.creditsCost(n.costs.instant)," · ② ",e.creditsCost(n.costs.detailed)]}),t.jsx("div",{className:"packs",children:(n.packs||[]).map(c=>t.jsxs("div",{className:"pack",children:[t.jsx("div",{className:"pt",children:e.rechargeUnit(c.credits,c.price_eur)}),t.jsx("button",{type:"button",onClick:()=>{o(c.lookup_key)},children:e.rechargeBuy})]},c.lookup_key))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.rechargeNote})]}),!n&&t.jsx("div",{className:"sp-empty",children:e.creditsNone})]})}function dc(){const{t:e}=I();return t.jsx(Oe,{title:e.dsBtn,icon:"🗂",wide:!0,children:t.jsx(Wl,{})})}function pc(){const{t:e,lang:a,data:r,dossiers:n,token:i,fund:o,canWrite:c,flash:s}=I(),[d,x]=m.useState(null),[l,f]=m.useState(!1);m.useEffect(()=>{let C=!0;if(o)return Ba(o).then(j=>{C&&j&&typeof j.per_day=="number"&&x(j.per_day)}),()=>{C=!1}},[o]);const[u,b]=m.useState(null);m.useEffect(()=>{if(!i)return;let C=!0;return ti(i).then(j=>{C&&b(j)}),()=>{C=!1}},[i]);const p=r.stats,g=typeof(p==null?void 0:p.screened)=="number"?p.screened:n.filter(C=>C.kind==="target"&&$e(C)).length,v=r.marketEstimate||0,h=v>0?Math.min(100,Math.round(g/v*100)):null,N=(p==null?void 0:p.window_days)||30,E=g>0?g/N:0,y=v>0?Math.max(0,v-g):0,L=v>0&&E>0&&g>=100?Math.round(y/E):null,T=C=>Math.round(C).toLocaleString(a==="en"?"en-US":"fr-FR"),S=C=>{l||!c||(f(!0),ni(i,C).then(j=>{if(f(!1),j===null){s(e.actErr);return}x(j),s(e.alertSaved)}))};return t.jsxs(Oe,{title:e.coverTitle,icon:"🌍",children:[t.jsxs("div",{className:"covg",children:[t.jsx("b",{children:e.covScreened(T(g))}),v>0&&t.jsx("span",{children:e.covOf(T(v))})]}),h!==null?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"covbar",children:[t.jsx("i",{style:{width:h+"%"}}),t.jsxs("em",{children:[h," %"]})]}),L!==null&&t.jsx("p",{className:"mnote",children:e.covEta(L)})]}):t.jsx("p",{className:"mnote dim",children:e.covNoEst}),E>=1&&t.jsx("p",{className:"mnote",children:e.covPace(T(E))}),(u==null?void 0:u.ok)&&(u.detail||[]).length>0&&t.jsxs("div",{className:"covcalc",children:[t.jsx("h3",{children:e.covHowT}),u.perimetre&&t.jsx("p",{className:"mnote",children:u.perimetre}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"cc",children:e.covColCode}),t.jsx("th",{className:"cn",children:e.covColN}),t.jsx("th",{className:"cs",children:e.covColSource})]})}),t.jsxs("tbody",{children:[(u.detail||[]).map((C,j)=>t.jsxs("tr",{className:C.n?"":"zero",children:[t.jsxs("td",{className:"cc",children:[C.code,C.geo?` · ${C.geo}`:" · FR"]}),t.jsx("td",{className:"cn",children:typeof C.n=="number"?T(C.n):"—"}),t.jsxs("td",{className:"cs",children:[t.jsx("span",{children:C.source}),C.elargi&&t.jsx("em",{children:e.covWide(String(C.demande||""))}),C.erreur&&t.jsx("em",{children:e.covMissing})]})]},j)),t.jsxs("tr",{className:"tot",children:[t.jsx("td",{className:"cc",children:e.covTotal}),t.jsx("td",{className:"cn",children:t.jsx("b",{children:T(u.total||v)})}),t.jsx("td",{className:"cs"})]})]})]}),(u.rejetes||[]).length>0&&t.jsx("p",{className:"mnote dim",children:e.covRejected((u.rejetes||[]).join(", "))}),t.jsxs("p",{className:"mnote dim",children:[(u.sources||[]).join(" · "),u.calcule_le?` — ${e.covComputedAt(u.calcule_le.slice(0,10).split("-").reverse().join("/"))}`:""]})]}),p&&t.jsxs("div",{className:"covf",children:[typeof p.kept=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:T(p.kept)})," ",e.covKept]}),typeof p.analyzed=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:T(p.analyzed)})," ",e.covAna]}),typeof p.shown=="number"&&p.shown!==p.kept&&t.jsxs("span",{children:[t.jsx("b",{children:T(p.shown)})," ",e.funShown]})]}),c&&d!==null&&t.jsxs("div",{className:"covr",children:[t.jsxs("div",{className:"covrh",children:[t.jsx("span",{children:e.covRate}),t.jsx("b",{children:e.covRateNow(d)})]}),t.jsx("div",{className:"covrb",children:[0,1,2,3,5,10].map(C=>t.jsx("button",{type:"button",className:d===C?"on":"",disabled:l,onClick:()=>S(C),children:C===0?"⏸":C},C))}),t.jsx("p",{className:"mnote dim",children:e.covRateHint})]})]})}function uc(){var h,N,E;const{t:e,dossiers:a,token:r,mode:n,flash:i,criteria:o,fund:c,lang:s}=I(),d=n==="client",x=m.useMemo(()=>{const y=new Set;return a.forEach(z=>{z.angle&&y.add(z.angle)}),[...y]},[a]),[l,f]=m.useState(""),[u,b]=m.useState(""),[p,g]=m.useState(!1),v=async()=>{const y=l.trim();if(!(!y||p||!d)){g(!0),b("");try{const L=await(await fetch(`${xt}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r,message:y,who:"atelier2"})})).json().catch(()=>({}));if(L.reply&&b(String(L.reply)),L.job_id){b(e.critChatRunning);const T=async()=>{const S=await fetch(`${xt}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:L.job_id})}).then(C=>C.json()).catch(()=>null);if(S&&S.done){b(String(S.reply||S.clarification||S.summary||"✓")),g(!1),S.applied&&i(e.alertSaved);return}setTimeout(()=>{T()},8e3)};setTimeout(()=>{T()},8e3),f("");return}f("")}finally{u.startsWith("⏳")||g(!1)}}};return t.jsxs(Oe,{title:e.critTitle,icon:"⚙",wide:!0,children:[(o==null?void 0:o.lead)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critHypTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:o.lead}),!!((h=o.points)!=null&&h.length)&&t.jsx("ul",{className:"critpts",children:o.points.map(y=>t.jsx("li",{children:y},y))}),t.jsx("p",{className:"mnote",children:e.critHypSub})]}),!!((N=o==null?void 0:o.angles)!=null&&N.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critProfilsTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:o.method||e.critProfilsSub}),o.angles.map(y=>{var z,L;return t.jsxs("details",{className:"prof",children:[t.jsx("summary",{children:y.title}),y.why&&t.jsx("p",{className:"why",children:y.why}),t.jsxs("div",{className:"lo",children:[!!((z=y.look)!=null&&z.length)&&t.jsxs("div",{children:[t.jsx("em",{children:e.critLookFor}),t.jsx("ul",{children:y.look.map(T=>t.jsx("li",{children:T},T))})]}),!!((L=y.out)!=null&&L.length)&&t.jsxs("div",{className:"ko",children:[t.jsx("em",{children:e.critRuleOut}),t.jsx("ul",{children:y.out.map(T=>t.jsx("li",{children:T},T))})]})]})]},y.title)})]}),!!((E=o==null?void 0:o.gate)!=null&&E.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critGateTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:e.critGateSub}),o.gate.length===1&&!o.gate[0].k?t.jsx("p",{className:"gate1",children:o.gate[0].t}):t.jsx("ol",{className:"gatesteps",children:o.gate.map(y=>t.jsxs("li",{children:[y.k&&t.jsx("b",{children:y.k}),y.t]},y.t))})]}),x.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critAngles}),t.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:x.map(y=>t.jsx("li",{style:{marginBottom:5},children:y.replace(/[_-]+/g," ")},y))})]}),t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.critChatTitle}),t.jsx("p",{children:e.critChatHint}),t.jsxs("div",{className:"mfield",style:{marginTop:10},children:[t.jsx("input",{placeholder:e.critChatPh,value:l,disabled:!d||p,onChange:y=>f(y.target.value),onKeyDown:y=>{y.key==="Enter"&&v()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(p?" loading":""),style:{padding:"12px 18px"},disabled:!d||p||!l.trim(),onClick:()=>void v(),children:[t.jsx("span",{className:"fill"}),e.critChatSend]})]}),u&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:u})]}),t.jsx("div",{style:{marginBottom:14},children:t.jsx(ei,{fund:c,lang:s,limit:30,compact:!0})}),t.jsx("div",{className:"qsec ok",children:e.qvTitle}),t.jsx("div",{className:"vlist",children:e.qv.map(([y,z])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vd "+(Br[y]||"v-cons"),children:y}),t.jsx("span",{children:z})]},y))}),t.jsx("div",{className:"qsec ok",children:e.brTitle}),t.jsx("div",{className:"vlist",children:e.br.map(([y,z])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vtag",children:y}),t.jsxs("span",{children:["← ",z]})]},y))}),t.jsx("p",{className:"mnote",children:e.brNote}),t.jsx("p",{className:"mnote",children:e.critMemoKinds})]})}function mc(){const{t:e,dispatch:a,startTour:r}=I(),n=i=>{var o,c;a({type:"modal",modal:null}),i==="crit"||i==="plug"||i==="alert"?a({type:"modal",modal:i}):i.startsWith("tab")?a({type:"ptab",tab:Number(i.slice(3))}):i==="eval"&&((o=document.querySelector(".atl2 .demand input"))==null||o.scrollIntoView({block:"center",behavior:"smooth"}),(c=document.querySelector(".atl2 .demand input"))==null||c.focus())};return t.jsxs(Oe,{title:e.tutoTitle,icon:"▶",children:[t.jsxs("div",{className:"howto-go",children:[t.jsx("p",{children:e.tourIntro}),t.jsxs("button",{type:"button",onClick:()=>{a({type:"modal",modal:null}),r()},children:["▶ ",e.tourStart]})]}),t.jsx("ul",{className:"howto",children:e.howto.map(([i,o],c)=>t.jsxs("li",{role:"button",tabIndex:0,onClick:()=>n(o),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n(o))},children:[t.jsx("span",{className:"n",children:c+1}),t.jsx("span",{dangerouslySetInnerHTML:{__html:i.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}})]},o+c))})]})}const Hr="atl2:mapfold",fc=()=>{if(typeof window>"u")return!1;try{const e=localStorage.getItem(Hr);if(e==="on")return!0;if(e==="off")return!1}catch{}try{const e=new URLSearchParams(window.location.search);if(e.get("embed")==="1"&&(e.get("source")||"").toLowerCase()==="ops")return!0}catch{}return window.innerHeight<1e3},xc=()=>{if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search).get("embed")==="1")return!0}catch{}return!1},Wr=m.createContext(null),I=()=>{const e=m.useContext(Wr);if(!e)throw new Error("AtelierV2Ctx manquant");return e};function dt({o:e,lg:a}){const{lang:r}=I(),n=Te(e);return n?t.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:wa(n,r),children:[n.emoji," ",wa(n,r)]}):null}function oa({o:e,src:a}){const{lang:r,t:n}=I(),i=Te(e);if(!i)return null;const o=fi(i),c=xi(i);return t.jsxs("em",{className:"sigwin"+(c?" hot":""),title:n.signaledOn(Ua(i,r))+" · "+n.win7(Yt(i,r)),children:[t.jsx("span",{className:"gg",children:Array.from({length:7},(s,d)=>t.jsx("i",{className:d<o?"on":""},d))}),t.jsx("span",{className:"lb",children:c?n.lastDay:n.daysLeft(Math.max(0,i.left??0))}),a&&i.url&&t.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",title:n.seeSource,onClick:s=>s.stopPropagation(),children:"↗"})]})}function Yr({o:e}){const{lang:a}=I(),r=mi(e.cc),n=e.cc?yt(e.cc,a)||e.countryLabel||e.cc:e.countryLabel||"—";return t.jsx("span",{className:"c-flag",title:n||void 0,children:r?t.jsx("img",{src:r,width:24,height:18,alt:n||""}):t.jsx("span",{className:"em",children:"🌐"})})}const er="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap",hc=!1;function gc(){const[e,a]=m.useState(!1);return m.useEffect(()=>{const r=document.scrollingElement||document.documentElement,n=()=>a((r.scrollTop||0)>600);return n(),window.addEventListener("scroll",n,!0),()=>window.removeEventListener("scroll",n,!0)},[]),e?t.jsx("button",{type:"button",className:"totop",title:"Remonter en haut",onClick:()=>{(document.scrollingElement||document.documentElement).scrollTo({top:0,behavior:"smooth"})},children:"↑"}):null}const Gr=e=>`atl2:tour:${e||"anon"}`;function bc(e){try{return localStorage.getItem(Gr(e))==="1"}catch{return!0}}function tr(e){try{localStorage.setItem(Gr(e),"1")}catch{}}function vc(e,a,r,n,i){const o=e.tourT,c=e.howto;return[{sel:".atl2 .ident",title:o.ident,body:e.fhintIdent},i?{sel:".atl2 .cover",title:o.cover,body:e.fhintCover,need:".atl2 .ident"}:null,{sel:".atl2 .engine",title:o.engine,body:e.fhintEngine},{sel:".atl2 .ticker",title:o.live,body:e.fhintLive},{sel:".atl2 .goal",title:o.goal,body:e.fhintGoalAt(a)},{sel:".atl2 .funnel",title:o.funnel,body:e.fhintFunnel,ptab:n},{sel:".atl2 .tuto",title:o.tuto,body:c[3][0],ptab:3,need:".atl2 .tuto"},{sel:".atl2 .demand",title:o.demand,body:c[1][0]},{sel:".atl2 .c-vd",need:".atl2 .list",title:o.chips,body:e.fhintChips,ptab:n,dens:"liste"},{sel:".atl2 .card .cdbody",need:".atl2 .list",title:o.dec,body:e.fhintDec,ptab:n,dens:"deplie"},r?{sel:".atl2 .card .cdtabs",need:".atl2 .list",click:'.atl2 [data-tour="tab-memo"]',title:o.memo,body:e.fhintMemo,ptab:n,dens:"deplie"}:null,{sel:".atl2 .csp",need:".atl2 .list",title:o.status,body:e.fhintStatus,ptab:n,dens:"deplie"},{sel:".atl2 .learn",title:o.learn,body:e.learnLine},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=export]",title:o.exportT,body:e.fhintExport,modal:"export"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=plug]",title:o.tools,body:c[6][0],modal:"plug"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=alert]",title:o.alerts,body:e.fhintAlerts,modal:"alert"},{sel:".atl2 .modal.on .mcard",title:o.crit,body:c[0][0],modal:"crit"}].filter(Boolean)}function Nc({demo:e=!1,source:a="default",initialFilters:r,initialUi:n,capsOverride:i,onFiltersChange:o}){var Za;const{lang:c}=di(),s=Ai[c],d=Ii(e,c,a),[x,l]=m.useReducer(_i,void 0,()=>$i((n==null?void 0:n.continent)??(a==="ops"?"monde":"europe"),e||(a==="ops"?xc():fc()),{ptab:n==null?void 0:n.ptab,dens:(n==null?void 0:n.dens)??(a==="ops"?"liste":void 0),filters:r,modal:n==null?void 0:n.modal})),f=m.useRef(!0);m.useEffect(()=>{if(f.current){f.current=!1;return}if(!(e||a==="ops"))try{localStorage.setItem(Hr,x.mapFolded?"on":"off")}catch{}},[x.mapFolded,e,a]);const u=m.useRef(o);u.current=o,m.useEffect(()=>{var k;(k=u.current)==null||k.call(u,x.filters)},[x.filters]);const[b,p]=m.useState(null),[g,v]=m.useState(null),[h,N]=m.useState({kept:0,dropped:0}),[E,y]=m.useState(!1),[z,L]=m.useState(""),[T,S]=m.useState(!1),[C,j]=m.useState(null),[M,P]=m.useState(!1),[q,w]=m.useState(!1),[,A]=m.useState(0),O=()=>A(k=>k+1),U=m.useRef([]),W=m.useRef(new Set),H=m.useRef(new Set),[Q,B]=m.useState([]),[Y,ae]=m.useState([]),[ne,Ee]=m.useState(0),je=m.useRef(new Map),be=m.useRef(null),{mode:ee}=d,ce=m.useMemo(()=>({...d.caps,...a==="ops"?{showMorning:!1}:null,...i||null}),[d.caps,i,a]),G=ce.pipe,_=d.session.token||"",X=ee==="client"&&!e;m.useEffect(()=>{if(!_||!G)return;let k=!0;const $=async()=>{const he=await hi(_);!k||!he||(ae(he.runs),Ee(Date.now()/1e3-he.now),B(qe=>qe.filter(ut=>!he.runs.some(Ye=>et(Ye.company)===et(ut.name)))))};$();const D=Q.length>0||Y.some(he=>he.status==="running"),K=window.setInterval(()=>{$()},D?8e3:25e3);return()=>{k=!1,window.clearInterval(K)}},[_,G,Q.length,Y.some(k=>k.status==="running")]);const fe=m.useMemo(()=>{const k=[],$=new Set;for(const D of Q){const K=et(D.name);!K||$.has(K)||($.add(K),k.push({name:D.name,id:D.id,status:"boot",started:D.started,estMin:D.estMin,memoType:"instant"}))}for(const D of Y){const K=et(D.company);if(!K||$.has(K))continue;$.add(K);const he=D.status==="error"?"error":D.status==="done"?"done":"running";k.push({name:D.company,status:he,started:D.started||0,estMin:D.est_min||(D.memo_type==="detailed"?40:15),url:D.url,error:D.error,memoType:D.memo_type})}return k},[Q,Y]),re=k=>fe.find($=>et($.name)===et(k))||null,we=(k,$)=>{B(D=>D.some(K=>et(K.name)===et(k.name))?D:[...D,{name:k.name,id:k.id,started:Date.now()/1e3,estMin:$==="detailed"?40:15}]),W.current.add(k.id),O()};m.useEffect(()=>{if(document.querySelector(`link[href="${er}"]`))return;const k=document.createElement("link");k.rel="stylesheet",k.href=er,document.head.appendChild(k)},[]);const J=(k,$=!1)=>{L(k),S($),be.current&&clearTimeout(be.current),be.current=setTimeout(()=>L(""),$?4200:2400)},de=k=>J(k,!0),ze=m.useMemo(()=>{const k=new Map;return d.dossiers.forEach($=>{$.id&&k.set($.id,$)}),k},[d.dossiers]),ve=m.useMemo(()=>d.dossiers.filter(k=>cr(k,x,G)),[d.dossiers,x,G]),xe=m.useRef(!1);m.useEffect(()=>{if(xe.current||e||d.loading||!d.dossiers.length)return;if(!ce.showFunnel||bc(d.session.token||"")){xe.current=!0;return}xe.current=!0;const k=window.setTimeout(()=>{tr(d.session.token||""),P(!0)},700);return()=>window.clearTimeout(k)},[e,d.loading,d.dossiers.length,ce.showFunnel,d.session.token]);const Fe=m.useMemo(()=>d.dossiers.filter(k=>Ui(k,x,G,d.favIds)),[d.dossiers,x,G,d.favIds]),pe=m.useMemo(()=>pi(ve,d.favIds),[ve,d.favIds]),De=m.useMemo(()=>{const k=xr(d.dossiers);return k?at(k)===0?s.tourToday:hr(k,c):s.tourNoRun},[d.dossiers,s,c]),R=m.useMemo(()=>d.dossiers.some(k=>!!k.memoUrl||!!k.summary||ht(k)),[d.dossiers]),[V,Z]=m.useState(!1);m.useEffect(()=>{if(d.loading){Z(!1);return}if(d.dossiers.length>0||d.error){Z(!0);return}const k=window.setTimeout(()=>Z(!0),6e3);return()=>window.clearTimeout(k)},[d.loading,d.dossiers.length,d.error]);const ie=(d.marketEstimate||0)>0||typeof((Za=d.stats)==null?void 0:Za.screened)=="number"&&d.stats.screened>0,Ce=m.useMemo(()=>[1,0,2,4,5,3].find(k=>(pe[k]||0)>0)??0,[pe]),se=_a.find(k=>k.key===x.continent),Be=x.continent==="monde"?s.contWorld:(c==="fr"?se==null?void 0:se.fr:se==null?void 0:se.en)||"";m.useEffect(()=>{const k=$=>{var K;const D=(((K=$.detail)==null?void 0:K.name)||"").trim();D&&Xe(null,D)};return window.addEventListener("ppmap:evaluate",k),()=>window.removeEventListener("ppmap:evaluate",k)}),m.useEffect(()=>{const k=K=>{const he={},qe=String((K==null?void 0:K.sector)||"").trim();qe&&(he.sector=[qe]);const ut=String((K==null?void 0:K.day)||"").slice(0,10);/^\d{4}-\d{2}-\d{2}$/.test(ut)&&(he.day=ut);const Ye=String((K==null?void 0:K.search)||"").trim();Ye&&(he.search=Ye);const me=String((K==null?void 0:K.dealKind)||"").trim();(me==="ma"||me==="levee"||me==="other")&&(he.dealKind=[me]),Object.keys(he).length&&l({type:"filters",patch:he})},$=K=>k(K.detail),D=K=>{K.data&&K.data.type==="pp-filter"&&k(K.data)};return window.addEventListener("ppmap:filter",$),window.addEventListener("message",D),()=>{window.removeEventListener("ppmap:filter",$),window.removeEventListener("message",D)}},[]),m.useEffect(()=>{const k=$=>{var he;const D=(((he=$.detail)==null?void 0:he.name)||"").trim().toLowerCase();if(!D)return;const K=dossiers.find(qe=>(qe.name||"").trim().toLowerCase()===D);K&&l({type:"popup",id:K.id})};return window.addEventListener("ppmap:similar",k),()=>window.removeEventListener("ppmap:similar",k)});const Xe=(k,$)=>{const D=((k==null?void 0:k.name)||$||"").trim();if(!X){v({kicker:D});return}!D||E||(y(!0),(async()=>{try{let K=D;const he=((k==null?void 0:k.website)||(k==null?void 0:k.domain)||"").trim();if(he)K=he;else try{const me=await gi(D);if(me!=null&&me.website)K=me.website;else if(((me==null?void 0:me.candidates)||[]).length===1)K=me.candidates[0].url;else if(((me==null?void 0:me.candidates)||[]).length>1){U.current=[{name:D,verdict:"unresolved",remaining:null,reason:s.evalPickSite,candidates:(me.candidates||[]).slice(0,5)},...U.current].slice(0,8),O();return}}catch{}const qe=await or(_,K,"atelier2"),ut={name:qe.company||D,verdict:qe.verdict,reason:qe.reason||"",remaining:qe.remaining??null};U.current=[ut,...U.current].slice(0,8),qe.verdict==="kept"&&N(me=>({...me,kept:me.kept+1})),qe.verdict==="ruled_out"&&N(me=>({...me,dropped:me.dropped+1}));const Ye=k||d.dossiers.find(me=>(me.name||"").toLowerCase()===D.toLowerCase());Ye&&(qe.verdict==="kept"?Ye.verdict=Ye.verdict||"MATCH":qe.verdict==="ruled_out"&&(Ye.verdict="NO MATCH"),qe.reason&&(Ye.reasoning=qe.reason)),O()}finally{y(!1)}})())},F=k=>{if(!X){v({kicker:k.name});return}we(k,"instant"),wt(_,"fast_request",k.name||"",""),J(s.memoInstantSent(k.name))},te=k=>je.current.get(k.id)??d.thumbs.get((k.name||"").trim().toLowerCase()),le=(k,$)=>l({type:"undoPush",entry:{id:k.id,name:k.name,prevCeoStatus:$}}),ye=async(k,$,D)=>{const K=k.ceoStatus||"";k.ceoStatus=$,O();const he=await la(_,{status:$,airtable_id:k.airtableId,check_id:k.checkId,company:k.name,...(D==null?void 0:D.note)!==void 0?{note:D.note}:{},...D!=null&&D.via?{via:D.via}:{}});return he.ok?he.skipped?(k.ceoStatus=K,O(),de(s.actNotPersisted),!1):((D==null?void 0:D.undo)!==!1&&le(k,K),D!=null&&D.msg&&J(D.msg),($==="Validé"||$==="Écarté")&&!k.ceoNote&&(D==null?void 0:D.note)===void 0&&j({o:k,yes:$==="Validé"}),!0):(k.ceoStatus=K,O(),de(s.actErr),!1)},Pe=async(k,$)=>{const D=await la(_,{status:k.ceoStatus||"Retenu",airtable_id:k.airtableId,check_id:k.checkId,company:k.name,note:$,via:"note"});return!D.ok||D.skipped?(de(D.skipped?s.actNotPersisted:s.actErr),!1):(k.ceoNote=$,O(),!0)},Le=m.useRef(new Map),ke=k=>Le.current.has(k.id)?Le.current.get(k.id):d.stages.get((k.name||"").trim().toLowerCase()),_e=(k,$)=>{Le.current.set(k.id,$),O()},ia=(k,$)=>{X&&ye(k,$?"Validé":"Écarté",{msg:$?s.decidedYes(k.name):s.decidedNo(k.name)})},Mt=k=>{X&&ye(k,"À trancher",{msg:s.promoted(k.name)})},Kr=k=>{X&&(async()=>{const $=k.ceoStatus||"";k.ceoStatus="Retenu",O();const D=await la(_,{status:"Retenu",check_id:k.checkId,company:k.name});if(!D.ok||D.skipped){k.ceoStatus=$,O(),de(D.skipped?s.actNotPersisted:s.actErr);return}le(k,$),J(s.repeched(k.name))})()},Qr=()=>{const k=x.undo[x.undo.length-1];if(!k){J(s.undoNone);return}const $=ze.get(k.id);if(!$){l({type:"undoPop"}),J(s.undoNone);return}let D=k.prevCeoStatus;if(!D)if(($.verdict||"").toUpperCase().includes("CALL"))D="À trancher";else{J(s.undoLockedTitle);return}(async()=>await ye($,D,{undo:!1})&&(l({type:"undoPop"}),$.ceoStatus=k.prevCeoStatus,O(),J(s.undoDone($.name))))()},Jr=k=>{X&&(H.current.add(k.id),O(),(async()=>{const $=await bi(_,k.name,"email");if(!$||$.ok===!1){H.current.delete(k.id),O(),de(s.actErr);return}wt(_,"approach",k.name||"",""),J(s.actApproachSent)})())},Xr=(k,$)=>{X&&(async()=>{if(!(await wt(_,$?"yes":"no",k.name||"","")).ok){de(s.actErr);return}je.current.set(k.id,$?"yes":"no"),O(),J($?s.thumbUpDone:s.thumbDnDone)})()},Zr=k=>{!X||!ht(k)||(we(k,"detailed"),wt(_,"detailed_request",k.name||"",""),J(s.memoDeepSent(k.name)))},eo=k=>{const $=new Set(d.favIds),D=$.has(k.id);D?$.delete(k.id):$.add(k.id),d.setFavIds($),X&&vi(_,{id:k.id,co:k.name},D)},to=()=>{!X||q||window.confirm(s.identSyncConfirm)&&(w(!0),(async()=>{const k=await yi(_);w(!1),k?J(s.identSyncDone):de(s.actErr)})())},Xa=/proplace/i.test(d.fund||""),ao=k=>{!X||!Xa||(wt(_,"onboard_request",k.name||"",""),J(s.onboardSent(k.name)))},no={st:x,dispatch:l,t:s,lang:c,mode:ee,caps:ce,pipe:G,token:_,fund:d.fund,email:d.email,criteria:d.criteria,source:a||"default",data:d,doRepeche:Kr,thumbOf:te,canWrite:X,commitStatus:ye,saveNote:Pe,stageOf:ke,setStage:_e,flashErr:de,startTour:()=>P(!0),dossiers:d.dossiers,scopedAll:ve,scoped:Fe,counts:pe,byId:ze,contName:Be,favIds:d.favIds,toggleFav:eo,askEvaluate:Xe,doAnalyse:F,doDecide:ia,doPromote:Mt,doApproach:Jr,doThumb:Xr,doDeep:Zr,doUndo:Qr,doSync:to,doOnboard:ao,outbound:Xa,memoQueued:W.current,liveMemos:{items:fe,serverOff:ne,liveOf:re},approachDone:H.current,sessTally:h,evalCards:U.current,evalBusy:E,markRow:p,markedId:b,flash:J};m.useEffect(()=>{const k=$=>{$.key==="Escape"&&(l({type:"popup",id:null}),l({type:"modal",modal:null}),l({type:"openFacet",facet:null}))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[]);const ro=k=>_?t.jsx(Hi,{token:_,children:k}):t.jsx(t.Fragment,{children:k});return t.jsx(Wr.Provider,{value:no,children:t.jsxs("div",{className:"atl2"+(a==="ops"?" ops":""),children:[t.jsx("style",{children:qi}),ce.showOnb&&t.jsxs("div",{className:"lockbar on",children:[t.jsx("b",{children:s.lockbarText}),t.jsxs("span",{className:"lb-c",children:[s.lockbarContactBefore,t.jsx("a",{href:mr,children:Ya}),s.lockbarContactMid,t.jsx("a",{href:`mailto:${Gt}`,children:Gt})]}),t.jsx("button",{type:"button",onClick:()=>l({type:"modal",modal:"rdv"}),children:s.lockbarCta})]}),ro(t.jsxs("div",{className:"app"+(G?" pipe":"")+(_?" has-thesis":""),children:[ce.showTicker&&t.jsx(Re,{name:"live",children:t.jsxs("div",{className:"live-stack"+(_?" live-stack--cibles":""),children:[t.jsx(Ji,{}),!!_&&t.jsx(Wi,{})]})}),ce.showIdent&&t.jsx(Re,{name:"identite",children:t.jsx(fs,{})}),!1,!!_&&t.jsx(Re,{name:"brief",children:t.jsx(Yi,{})}),hc,ce.showMorning&&t.jsx(Re,{name:"matin",children:t.jsx(ms,{})}),t.jsx(Re,{name:"mesure",children:t.jsx(os,{})}),ce.showFunnel&&t.jsx(Re,{name:"entonnoir",children:t.jsx(yc,{})}),ce.showFunnel&&t.jsx(Re,{name:"tunnel",children:t.jsx(xs,{})}),ce.showFunnel&&t.jsx(Re,{name:"tuto",children:t.jsx(hs,{})}),!x.mapFolded&&t.jsx(Re,{name:"carte",fallback:t.jsx("div",{className:"void",children:s.loadError}),children:t.jsxs("div",{className:"fzone",children:[t.jsx(Fr,{}),t.jsxs("div",{className:"stage",id:"atl2-stage",children:[t.jsx(ml,{}),t.jsx(Or,{})]})]})}),ce.showDemand&&G&&t.jsx(Re,{name:"direct",children:t.jsx(Si,{items:fe,serverOff:ne,labels:{strip:s.liveStrip,boot:s.liveBoot,end:s.liveEnd,open:s.liveOpenQueue,memo:s.actMemo},onOpen:()=>l({type:"modal",modal:"queue"})})}),ce.showDemand&&t.jsx(Re,{name:"evaluation",children:t.jsx(vl,{})}),ce.showDemand&&x.memoConsole&&t.jsx(Re,{name:"console",children:t.jsx(wl,{})}),t.jsx(Re,{name:"liste",fallback:t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>window.location.reload(),children:s.retry})]}),children:t.jsx($l,{})}),d.loading&&t.jsx("div",{className:"void",children:s.loadingV2}),d.error&&!d.loading&&t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:d.refresh,children:s.retry})]})]})),x.popupId&&t.jsx(Re,{name:"fiche",children:t.jsx(zl,{})}),t.jsx(Re,{name:"modales",children:t.jsx(Gl,{})}),t.jsx(ns,{}),C&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:C.o.name}),t.jsx(ds,{placeholder:C.yes?s.whyYesPh:s.whyNoPh,onDone:k=>{const $=C.o;j(null),k&&Pe($,k).then(D=>{D&&J(s.csNoteSaved)})}})]}),M&&V&&t.jsx(us,{steps:vc(s,De,R,Ce,ie),onClose:()=>{P(!1),tr(_)}}),t.jsx(gc,{}),z&&t.jsx("div",{className:"flash on"+(T?" err":""),children:z}),g&&t.jsx(ui,{variant:"acquirer",initialCompany:ar().co,initialWebsite:ar().site,onClose:()=>v(null)})]})})}function yc(){const{t:e}=I(),[a,r]=m.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem("atl2:fhint")==="off"}catch{return!1}});return a?null:t.jsxs("p",{className:"fhint",children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:t.jsx("path",{d:"M1 2h10M2.5 5.5h7M4.5 9h3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})}),t.jsx("span",{dangerouslySetInnerHTML:{__html:e.funnelHint}}),t.jsx("button",{type:"button","aria-label":"Fermer",title:e.fhintClose,onClick:()=>{r(!0);try{localStorage.setItem("atl2:fhint","off")}catch{}},children:"✕"})]})}function ar(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function wc(e){return e>=1e9?(e/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":e>=1e6?Math.round(e/1e6)+" M€":Math.round(e/1e3)+" k€"}export{Yr as FlagCell,dt as SigBadge,oa as SigWin,Nc as default,wc as fmtShort,I as useV2};
