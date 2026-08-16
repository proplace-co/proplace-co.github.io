var wr=Object.defineProperty;var kr=(e,a,r)=>a in e?wr(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var Oa=(e,a,r)=>kr(e,typeof a!="symbol"?a+"":a,r);import{r as h,u as jr,a as Nr,b as Sr,R as wt,L as Cr,C as Ma,c as Er,d as zr,l as Ht,o as Yt,i as Ar,e as Tr,f as Lr,g as qa,h as Fa,n as Pa,j as Da,k as Rr,m as Or,p as Mr,q as qr,s as Fr,S as ka,t as Pr,v as Dr,w as fe,x as ja,y as nt,z as We,A as t,B as ve,D as rt,E as Ir,F as Br,G as $r,H as ot,I as je,J as _r,K as Na,M as Rn,N as aa,O as Ur,P as Vr,Q as Sa,T as Ia,U as Ba,V as it,W as na,X as Ge,Y as qe,Z as Hr,_ as Yr,$ as On,a0 as Wr,a1 as Gr,a2 as Kr,a3 as Mn,a4 as Qr,a5 as Xr,a6 as Ca,a7 as Jr,a8 as yt,a9 as Zr,aa as qn,ab as Fn,ac as $a,ad as Bt,ae as eo,af as to,ag as ao,ah as no,ai as _a,aj as ro,ak as oo,al as io,am as so,an as ra,ao as lo,ap as Ua,aq as co,ar as po,as as uo,at as Va,au as fo,av as mo,aw as Ha,ax as xo,ay as ho,az as go,aA as bo,aB as vo,aC as yo,aD as wo,aE as Ya,aF as ko,aG as jo,aH as dt,aI as Wt,aJ as No,aK as So,aL as Co,aM as Eo}from"./index-Ct86PTKF.js";const zo=({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:i,onInit:o,onPageChange:l,onSubmit:s})=>{const[p,x]=h.useState(!0),c=jr({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:i});Nr(c,{onInit:o,onPageChange:l,onSubmit:s});const[d,u]=h.useState();return Sr(c,"form_resized",g=>{const m=g.size;typeof m=="number"&&u(m)},{disabled:!i}),wt.createElement("div",{className:"fillout-standard-embed",style:{height:i?typeof d=="number"?d:256:"100%",transition:i?"height 150ms ease":void 0}},p&&wt.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},wt.createElement(Cr,null)),c&&wt.createElement("iframe",{src:c.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>x(!1),style:{width:p?0:"100%",height:p?0:"100%",opacity:p?0:1,borderRadius:10,border:0,minHeight:256}}))},Ao={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Tout ce que STAN a passé au crible sur la fenêtre : chaque société évaluée selon vos critères, retenue ou écartée automatiquement.","STAN a retenu ces sociétés selon vos critères, décision justifiée. NOUS vérifions ses choix — écartez, validez, ou lancez une analyse sur les incertaines.","Les mémos de STAN, relus par NOUS : synergies chiffrées, verdict argumenté. Validez celles à contacter, mettez « à trancher » celles où vous hésitez.","À VOUS de jouer : les meilleures cibles, présentées le lundi par votre Corporate Developer. Tranchez OUI ou NON — vos oui passent en Validées.","Vos OUI — la short-list à contacter. NOUS préparons l’approche, ou l’engageons en votre nom (offre Entreprise).","Écartées par STAN ou par VOUS. Chaque NON affine les critères de Stan. Repêchez-en une à tout moment.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(e,a,r)=>`<b>${e} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${r} sans réponse.</b>`,morningThesis:(e,a)=>`<b>${e}</b> société${e===1?" a":"s ont"} été sourcée${e===1?"":"s"} ce matin par nos moteurs.`+(a?` <b>${a}</b> restante${a>1?"s":""} pas encore évaluée${a>1?"s":""}.`:' <span class="ok">Tout est évalué.</span>'),morningEval:e=>`▶ Les traiter (${e})`,identTitle:e=>`Cibles pour ${e}`,identCoverage:"COUVERTURE DU MARCHÉ",identCoverageOf:(e,a)=>`<b>${e}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"MOTEUR DE MÉMOS",identPerDay:"mémo/jour",identPending:e=>`→ ${e} en attente`,identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Inverser l’ordre de tri",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:e=>`Décision annulée sur ${e}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ OUI",actNo:"✗ NON",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:e=>`${e} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"CRIBLE · MÉMO",colScore:"SCORE",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:e=>`Depuis le verdict de Stan : ${e} j`,waitChip:e=>`⏱ ${e} j`,densList:"LISTE",densOpen:"DÉPLIÉ",densLigne:"LIGNE",densMaxi:"MAXI",unfoldAll:"Tout déplier",foldAllLbl:"Tout replier",foldArts:"Articles seuls",doAll:"Tout",doEval:"⚡ Évaluables",doExplore:"🔎 À explorer",doTodo:"⚡ À évaluer",doDone:"✓ Déjà évaluées",sortBy:"Trier par",sortSig:"Signal",sortAmount:"Montant",sortAge:"Récence",sortName:"Nom",sortCountry:"Pays",sortStage:"Stade",memoSynth:"SYNTHÈSE",memoOpenFull:"📖 Lire le mémo complet →",memoDeep:"⚡ Mémo détaillé",memoDeepHint:"Pour ce dossier à trancher, vous pouvez lancer l’analyse détaillée : étude de marché, quadrant concurrentiel, scénarios.",memoDeepSent:e=>`Mémo détaillé lancé sur ${e} — prêt dans 35 à 40 minutes`,memoInstantSent:e=>`Analyse lancée sur ${e} — mémo prêt dans ~15 minutes`,memoNone:"Aucun mémo pour ce dossier — lancez l’analyse.",creditsCap:"CRÉDITS MÉMO",creditsToday:"aujourd’hui",creditsRecharge:"Recharger →",creditsCost:e=>`−${e} crédit${e>1?"s":""}`,creditsNone:"Crédit épuisé — rechargez ou attendez demain 7 h.",rechargeTitle:"Crédits mémo",rechargeHint:e=>`Votre offre comprend <b>${e} crédits par jour</b>, rechargés chaque matin. Besoin de plus tout de suite ?`,rechargeNote:"Les crédits achetés n’expirent pas. Ils s’utilisent après vos crédits quotidiens.",rechargeBuy:"Ajouter",rechargeUnit:(e,a)=>`${e} crédits — ${a} €`,onbTag:"APERÇU PRIVÉ · LECTURE SEULE",onbTitle:e=>`Votre deal flow est prêt — <b>${e} cibles retenues</b> par Stan`,onbSub:e=>`${e} sociétés passées au crible sur votre thèse. Les dix premières lignes sont ouvertes ; le reste se débloque en trente minutes.`,onbSteps:[["Stan a étudié votre présence en ligne","Site, offres d’emploi, presse — il en a déduit vos angles d’acquisition."],["Il a criblé le marché","Chaque société confrontée à vos critères."],["Il a rédigé des mémos","Analyses chiffrées, synergies, verdicts."],["À vous de trancher","Trente minutes pour régler votre deal flow et tout débloquer."]],onbCta:"Choisir un créneau →",lockbarText:"Paramétrons votre deal flow rêvé en 30 minutes",lockbarCta:"Choisir un créneau",rdvHeading:"Paramétrons votre deal flow rêvé en 30 minutes",rdvSubBefore:"Choisissez un créneau ci-dessous, ou contactez votre expert Corporate Development directement au ",rdvSubMid:" ou par email à ",rdvCoFallback:"votre société",rdvUnlockLabel:e=>`Déblocage ${e}`,rdvUnlocks:e=>[["Accédez à toutes vos cibles retenues","Mémos d’investissement complets, synergies, contacts, angle d’approche."],["Stratégie d’acquisition construite avec vous","Hypothèse + stratégie d’acquisition recalibrées en live, avec vous."],["Tranchons ensemble les cibles que vous voulez","OUI / NON, sourcing de sociétés similaires, export et synchronisation CRM."],["Votre AI Corporate Developer est lancé",`Stan travaille pour ${e} chaque matin — vous n’avez plus qu’à décider.`]],funScreened:e=>`sociétés passées au crible${e?` depuis le ${e}`:""}`,funKept:"retenues comme cibles sérieuses",funAnalyzed:"analysées en profondeur",funShown:"présentées ici pour recueillir votre avis",funToday:e=>`dont ${e} aujourd’hui`,actTitle:"Activité des 30 derniers jours",actScreened:"criblées",actKept:"retenues",actToday:"aujourd’hui",fstatsShow:"Voir l’activité des 30 derniers jours",fstatsHide:"Masquer l’activité",sinceTitle:(e,a)=>`${e} nouvelle${e>1?"s":""} cible${e>1?"s":""} depuis votre dernière visite (${a})`,sinceMore:e=>`+${e} autres`,sinceOut:e=>`${e} sortie${e>1?"s":""} de la liste`,identSyncConfirm:"Relancer le sourcing maintenant ? Un passage des moteurs prend quelques minutes.",plugAutoOn:e=>`⚡ Envoi automatique ACTIF (${e}) — chaque cible que vous validez part toute seule en séquence.`,plugAutoOff:"Envoi automatique inactif — valider une cible ne l’envoie nulle part.",plugCrm:"Créer les dossiers dans mon CRM",plugCrmHint:"Collez l’URL de webhook de votre outil : chaque décision y arrive aussitôt.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Enregistrer",plugSaved:"Webhook enregistré",plugTest:"Tester",plugTested:"Test envoyé",plugTestThrottled:"Déjà testé il y a moins de 5 s — rien n’est reparti.",plugRemove:"Retirer",plugRemoved:"Webhook retiré",plugMcp:"Claude & IA (MCP)",plugBulk:"Contacter mes cibles",plugBulkHint:"Voyez d’abord qui partirait : l’aperçu ne contacte personne.",plugBulkTabs:[["valides","Validées"],["call","À trancher"],["retenus","Retenues"]],plugBulkPreview:"👁 Aperçu",bulkArm:"📤 Envoyer pour de vrai",bulkNoDest:"Aucune destination enregistrée : renseignez d’abord votre outil ci-dessus.",bulkScope:"Ce qui part, c’est l’onglet entier côté serveur — pas la vue filtrée à l’écran.",bulkWarn:(e,a)=>`Vous allez contacter ${e} société${e>1?"s":""} via ${a}. C’est irréversible, et le serveur ne vérifie pas si elles ont déjà été contactées.`,bulkConfirm:e=>`Oui, envoyer via ${e}`,bulkCancel:"Annuler",bulkSending:"Envoi en cours…",bulkDone:(e,a,r)=>`${e} société${e>1?"s":""} envoyée${e>1?"s":""}. ${a} joignable${a>1?"s":""} sur LinkedIn seulement, ${r} sans email.`,bulkNone:"Aucune société n’avait d’email : rien n’a été envoyé.",bulkLocked:(e,a)=>`Envoyé le ${e} — ${a} société${a>1?"s":""}. Nouvel envoi possible dans 24 h.`,bulkPreviewFirst:"Lancez d’abord l’aperçu : il dit exactement qui partirait.",cdConviction:"Conviction",cdAnalyse:"Analyse",cdSociete:"Société",cdContact:"Contact",cdSuivi:"Suivi",cdCrible:"au crible",cdMemo:e=>e?`après mémo ${e}`:"après mémo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict du",cdSector:"Secteur",cdStage:"Stade",cdCountry:"Où",cdSite:"Site",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Détectée le",cdName:"Dirigeant",cdEmail:"Email",cdCeoStatus:"Votre décision",cdEngagement:"Engagement",qaTitle:"Décrire cette société",qaHint:"Lecture de son site, puis quatre blocs : à qui elle s’adresse, ce qu’elle vend, comment elle gagne de l’argent, et ce qu’il faut en retenir. Aucun verdict — le crible a déjà tranché.",qaRun:"📄 Décrire",qaBusy:"Lecture du site…",qaVP:"À qui, et pour quel problème",qaProduct:"Ce qu’elle vend",qaModel:"Comment elle gagne de l’argent",qaSummary:"À retenir",qaSources:e=>`${e} page${e>1?"s":""} lue${e>1?"s":""}`,qaQuota:"Plafond du jour atteint : réessayez demain.",qaEmpty:"Le site ne dit rien d’exploitable — rien n’a été inventé.",dsBtn:"🗂 Dossier comité",dsHint:"Un A4 par société : le verdict du crible et sa raison, l’identité, l’analyse quand elle a été lancée, et votre décision. Aucun chiffre financier — nous n’en recevons aucun.",dsTitle:e=>`Dossier comité — ${e} société${e>1?"s":""}`,dsCap:(e,a)=>`Les ${e} premières sur ${a} : un comité ne lit pas ${a} pages.`,dsWhy:"Pourquoi cette société est devant vous",dsAnalysis:"Ce qu’elle fait",dsDecision:"Votre décision",dsEmpty:"Aucune société dans la sélection courante.",dsFoot:e=>`Sélection établie par Proplace pour ${e} — document interne, ne pas diffuser.`,covFunnel:"Votre marché, au crible",covScreened:e=>`${e} sociétés passées au crible`,covOf:e=>`sur ~${e} sociétés pertinentes`,covNoEst:"Votre marché adressable n’est pas encore chiffré : la couverture s’affichera dès qu’il le sera.",covPace:e=>`${e} sociétés criblées par jour`,covEta:e=>e<=0?"Votre marché est entièrement couvert.":e<60?`Couverture complète dans ~${e} jours, à ce rythme.`:`Couverture complète dans ~${Math.round(e/30)} mois, à ce rythme.`,covRate:"Rythme d’analyse",covRateHint:"Combien de sociétés retenues reçoivent un verdict argumenté chaque jour. À zéro, l’analyse est en pause.",covRateNow:e=>e<=0?"En pause":`${e} par jour`,covKept:"retenues",covAna:"analysées",covShown:"présentées ici",bulkReplayed:"Cet envoi avait déjà été enregistré : rien n’est reparti. Vos cibles n’ont été contactées qu’une fois.",bulkPending:"L’envoi précédent est encore en cours : rien n’a été renvoyé.",plugBulkResult:(e,a,r)=>`${e} partiraient par email · ${a} par LinkedIn · ${r} sans contact.`,memoAlertTitle:"🔔 Votre alerte mémo",memoAlertSub:"Recevez un email dès qu’un mémo de votre fonds est finalisé — avec son lien direct.",memoAlertToggle:"M’envoyer chaque mémo terminé",memoAlertEmail:"Destinataire",memoAlertSaved:"Enregistré ✓",memoAlertErr:"Échec d’enregistrement — réessayez",memoAlertSections:"Sections de l’email",memoAlertSec:[["swot","SWOT"],["action","Plan d’action"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Verdict de Stan"]],memoAlertPreview:"👁 Prévisualiser",memoAlertBtn:"Votre alerte mémo",alertTabDaily:"Quotidien",alertTabWeekly:"Hebdomadaire",alertTabMarket:"Le marché",alertSections:"Sections de l’email",alertSec:[["pending","Dossiers à trancher"],["stats","Vos chiffres clés"],["autonomous","Décisions automatiques de Stan"],["market","Analyse de marché"],["sourcing","Votre sourcing du jour"]],alertSecSlow:"(plus long à générer)",alertSecNote:"Décocher l’analyse de marché rend l’aperçu instantané.",alertPreview:"👁 Prévisualiser l’email d’aujourd’hui",alertPreviewWeekly:"👁 Prévisualiser le bilan",alertSubject:"Objet :",alertPreviewBusy:"Aperçu en cours de génération, réessayez dans quelques secondes.",alertPreviewRetry:e=>`Génération en cours — nouvel essai dans ${e} s…`,alertPreviewFail:"Aperçu indisponible pour l’instant — décochez « Analyse de marché » pour l’obtenir tout de suite.",alertPreviewEmpty:"À cet instant : rien à trancher — l’email ne partira pas.",alertTest:"✉ M’envoyer un test",alertTestOk:e=>`✓ Envoyé à ${e} — vérifiez aussi vos spams/promotions.`,alertTestHint:"N’affecte pas l’envoi quotidien.",alertWeeklySub:"Un email par semaine : le bilan de la semaine et ce que votre thèse a appris de vos décisions.",alertWeeklyOn:"📬 Recevoir votre bilan de la semaine",alertWeeklyWhen:"Jour et heure d’envoi (Paris)",alertDow:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],alertLoadError:"Impossible de charger vos préférences.",alertThrottled:"Trop vite — attendez quelques secondes et refaites le réglage.",alertInactive:"Votre accès n’est pas encore actif — parlons-en.",alertNoLead:"Destinataire à définir avec nous.",exportViewTitle:"CSV de la vue filtrée",exportViewDesc:e=>`Les ${e} lignes de votre sélection actuelle — onglet, facettes, recherche et fenêtre comprises. Séparateur « ; », prêt pour Excel.`,exportViewBtn:"Télécharger",exportViewDone:e=>`${e} ligne${e>1?"s":""} exportée${e>1?"s":""}`,printTitle:"Imprimer la sélection",printDesc:e=>`Les ${e} lignes à l'écran, en A4 : pour qui, à quelle date, l'entonnoir chiffré, puis la liste. La carte, les filtres et les boutons ne sont pas imprimés.`,printBtn:"Imprimer",exportViewHead:"Société|Statut|Verdict Stan|Score|Pays|Secteur|Étape post-OUI|Contact|Email|Lien mémo|Date|Raison",tourStart:"Lancer le guide pas à pas",tourIntro:"La visite guidée couvre toute la page de A à Z, sur la vraie page : chaque étape éclaire l’endroit exact — de votre thèse à votre alerte email.",tourStep:(e,a)=>`Étape ${e}/${a}`,tourPrev:"← Précédent",tourNext:"Suivant →",tourDone:"Terminer",tourClose:"Fermer",tourPlayTitle:"Visite guidée",ahaATitle1:"1 dossier attend votre décision",ahaATitleN:e=>`${e} dossiers attendent votre décision`,ahaABody:"OUI = on prépare l’approche ; NON = on affine le tir.",ahaABtn:"Trancher maintenant →",ahaBTitle:"Un mémo complet vous attend",ahaBBody:e=>`${e} a déjà son mémo d’analyse — lisible en 3 minutes.`,ahaBBtn:"Ouvrir le mémo →",ahaRetTitle:e=>e===1?"1 société retenue vous attend":`${e} sociétés retenues vous attendent`,ahaRetBody:"Le tri de Stan est fait — chaque retenue a sa fiche, sa carte et son signal.",ahaRetBtn:"Voir les sociétés retenues →",loadMsgs:["Réveil des moteurs de sourcing…","Chargement de vos cibles…","Les cartes et les signaux arrivent…","Tri selon votre thèse…","Encore un instant — le premier chargement est le plus long."],ahaCTitle:"Vos premières cibles sont là",ahaCBody:"Dites-nous si ça vise juste — chaque retour affine la machine.",ahaCBtn:"Voir mes critères →",howto:[["**Réglez votre ciblage.** Ouvrez « Vos critères » : c’est votre thèse — ce que vous cherchez, ce que vous écartez. Corrigez-la en langage naturel dès que quelque chose cloche ; le sourcing du lendemain matin s’y réaligne tout seul.","crit"],["**Sourcez un maximum de cibles.** Évaluez une société en collant son nom ou son site — ou une liste entière —, et regardez vos moteurs ratisser le web avec vos réglages.","eval"],["**Faites avancer chaque cible dans le tunnel, de gauche à droite** — Évaluées › Retenues › Analysées › À trancher › Validées › Écartées. Sur chaque carte, « Votre statut » la classe en un clic ; votre note « pourquoi » reste visible. Les 👍/👎 ne classent jamais : ils affinent votre thèse.","tab1"],["**Tranchez les « À trancher ».** Stan vous laisse le dernier mot : OUI (Validée) ou NON (Écartée), avec un mot sur le pourquoi.","tab3"],["**Comprenez comment Stan classe vos cibles.** Votre statut prime toujours sur le verdict de Stan. Le pont entre les deux est expliqué dans « Vos critères » : Retenu ↔ MATCH, Analysé ↔ CONSIDER · MONITOR, À trancher ↔ CALL, Écarté ↔ NO MATCH · PASS…","crit"],["**Concentrez-vous sur les Validées** — et menez chaque dossier jusqu’au bout du closing !","tab4"],["**Faites sortir tout ça de la page.** Le bouton 🔌 la branche sur vos outils : envoyer vos cibles dans votre séquence d’emailing, créer les fiches dans votre CRM, enrichir les dossiers que vous y avez déjà.","plug"],["**Ne revenez que si ça vaut le coup.** Le bouton 🔔 règle deux emails : le quotidien des dossiers à trancher, et le bilan de la semaine.","alert"]],fhintLive:"Ce qui bouge en ce moment sur votre marché — cliquez une vignette pour ouvrir la source.",fhintGoal:"Ce que les moteurs ont sourcé cette nuit, et ce qu’il reste à évaluer.",fhintDec:"La décision de Stan, dite et justifiée : c’est à quoi renvoient les « STEP A, C… ».",fhintStatus:"Votre statut prime toujours sur le verdict de Stan — et il s’enregistre aussitôt.",tourT:{ident:"Votre page",live:"Le direct",goal:"Le sourcing du matin",funnel:"Le tunnel",tuto:"L’étape en cours",demand:"Évaluer une société",dec:"Pourquoi cette décision",status:"Votre statut",learn:"Vos 👍 / 👎",tools:"Sortir de la page",crit:"Le paramétrage de Stan"},csLabel:"Votre statut :",csKept:"Retenu",csAnalysed:"Analysé",csPending:"À trancher",csValidated:"Validé",csOut:"Écarté",csYes:"✓ Oui",csNo:"✗ Non",csSaved:"✓ enreg.",csNoteSaved:"note ajoutée ✓",csNoteOk:"OK",csNotePh:"Pourquoi ? (une ligne)",csAnaConfirm:"Aucun mémo sur ce dossier — le passer en Analysé quand même ?",whySend:"Envoyer",whyYesPh:"Pourquoi ce OUI ? (une ligne — ça affine votre thèse)",whyNoPh:"Pourquoi ce NON ? (une ligne — ça affine votre thèse)",stgLabel:"Votre avancement :",stg:[["todo","○ À faire"],["sent","✉ Contactée"],["replied","💬 A répondu"],["meeting","🤝 RDV"],["loi","📄 LOI"],["signed","✅ Signée"],["lost","✖ Perdue"]],j4Badge:e=>`⏰ Sans réponse depuis ${e} j — relancer ?`,actRepeche:"↩ Repêcher",actErr:"Envoi impossible — réessayez dans un instant.",actNotPersisted:"Impossible d’enregistrer ce statut sur ce dossier.",decidedYes:e=>`${e} validée — place à l’approche`,decidedNo:e=>`${e} écartée`,repeched:e=>`${e} repêchée — de retour dans Retenues`,critHypTitle:"Notre hypothèse sur votre stratégie",critHypSub:"Toute la sélection en découle. Si elle est à côté, corrigez-la ci-dessous — la recherche est réalignée et vous recevez une sélection corrigée.",critProfilsTitle:"Vos profils de cibles",critProfilsSub:"Les familles de cibles que la machine traque en continu — chaque profil se déplie.",critLookFor:"Ce que nous recherchons",critRuleOut:"Ce que nous écartons",critGateTitle:"Le crible de Stan — comment il décide Retenu / Écarté",critGateSub:"Chaque société est confrontée à ces critères. C’est à eux que renvoient les « STEP A, C… » des raisons affichées sur les lignes.",rubricTitle:"Comment Stan décide l’analyse (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Une fois retenu, Stan approfondit et tranche. Voici ce qui fait pencher la balance.",qvTitle:"Les verdicts de Stan — où va chaque dossier",qv:[["CALL PENDING","le choix n°1 de Stan : à trancher OUI/NON maintenant → onglet « À trancher »."],["CALL YES","vous avez tranché OUI — le dossier rejoint « Validées », place à l’approche."],["CALL NO","vous avez tranché NON — le dossier rejoint « Écartées »."],["CONSIDER","solide, mérite un regard plus attentif → onglet « Analysées »."],["MONITOR","à surveiller, pas prioritaire pour l’instant → onglet « Analysées »."],["PASS","non pertinent pour le moment → onglet « Écartées »."]],brTitle:"Le routage automatique — où le verdict de Stan envoie chaque dossier",br:[["Retenu","MATCH — retenue au sourcing, mémo à venir → onglet « Retenues »"],["Analysé","CONSIDER · MONITOR — mémo fait, pas de call → onglet « Analysées »"],["À trancher","CALL PENDING — Stan propose un call, votre OUI/NON est attendu → onglet « À trancher »"],["Validé","CALL YES — vous avez tranché OUI → onglet « Validées »"],["Écarté","NO MATCH · PASS · CALL NO — refus de Stan, ou votre NON sur un call → onglet « Écartées »"]],brNote:"Un CALL passe par 3 états : CALL PENDING (le mémo est TERMINÉ, Stan propose le call — votre décision est en attente) › CALL YES (vous validez) › CALL NO (vous écartez). PENDING ne veut jamais dire « en cours d’analyse » : l’analyse est déjà faite.",vt:{MATCH:"MATCH — retenu : correspond à vos critères.","NO MATCH":"NO MATCH — écarté par vos critères.","CALL PENDING":"CALL — le choix n°1 de Stan : à trancher OUI/NON maintenant.","CALL YES":"CALL YES — vous avez tranché OUI : le dossier rejoint « Validées ».","CALL NO":"CALL NO — vous avez tranché NON : le dossier rejoint « Écartées ».",CONSIDER:"CONSIDER — solide, mérite un regard plus attentif.",MONITOR:"MONITOR — à surveiller, pas prioritaire pour l’instant.",PASS:"PASS — non pertinent pour le moment."},vKept:"Retenu",vOut:"Écarté",learnLine:"Comme sur Netflix, chaque 👍/👎 affine ce que Stan vous montre ensuite — vous jugez, il apprend.",learnLink:"Ajuster mes critères →",funnelHint:"Retrouvez ici toutes vos cibles sourcées automatiquement dans <b>évaluées</b> puis passez celles que vous souhaitez contacter dans <b>validées</b>.",fhintClose:"Masquer cette aide",queueTitle:"File de traitement",queueDone:(e,a)=>`<b>${e} / ${a}</b> mémos générés`,queueTomorrow:"À VENIR — ORDRE PROJETÉ, RECALCULÉ CHAQUE MATIN",queueToday:"ANALYSÉS AUJOURD’HUI",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugConfigured:"Configuré",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(e,a)=>`<b>${e}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:e=>`${e} passées au crible`,alertTitle:"🔔 Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"VOS ANGLES D’ACQUISITION",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarBusy:"🧬 Recherche…",similarNote:"Les retenues entrent dans votre liste au prochain rafraîchissement.",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:e=>`actualisée le ${e}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:e=>`actualisée le ${e}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:e=>`Onboarding lancé pour ${e} — suivez l’avancement dans le cockpit`,rsOpen:"🔎 Rechercher des sociétés à évaluer",rsUrlPh:"coller l’URL d’un article, d’une vidéo ou d’une note",rsTextPh:"Coller ici l’article complet",rsOr:"ou",rsGo:"🔎 Résumer et rechercher des sociétés",rsHint:"RÉSUMÉ · CARTE MENTALE · SOCIÉTÉS",rsRunning:"Lecture en cours…",rsRunningVid:"Transcription de la vidéo…",rsElapsed:e=>`${e} s`,rsNeed:"Collez une URL, ou le texte complet de l’article.",rsFound:e=>e?`${e} société${e>1?"s":""} trouvée${e>1?"s":""} dans ce contenu.`:"Aucune société nommée dans ce contenu.",rsLink:"Voir la page publiée ↗",rsPublishing:"Publication de la fiche…",rsPublishFail:"Fiche produite, page non publiée",rsTags:"TAGS",rsClose:"Fermer",rsMindmap:"CARTE MENTALE",rsSource:"Source ↗",rsSaving:"Enregistrement…",rsSaved:"✓ Enregistrée dans votre cockpit",rsSavedIn:e=>`✓ Enregistrée dans le carnet de ${e}`,rsSaveFail:"Fiche produite, NON enregistrée",rsArchOpen:e=>`voir les ${e} recherche${e>1?"s":""} déjà lancée${e>1?"s":""}`,rsArchTitle:"Recherches déjà lancées",rsArchBack:"← toutes les recherches",rsArchLoading:"Chargement…",rsArchEmpty:"Aucune recherche enregistrée pour l’instant.",rsArchGone:"Cette recherche n’est plus disponible.",rsRowCounts:(e,a)=>`${e} citée${e>1?"s":""} · ${a} à évaluer`,rsPub:"Publiée",rsPriv:"Non publiée",rsCited:"Sociétés citées",rsCitedHint:"Toutes les sociétés nommées dans ce contenu.",rsMatch:"Sociétés qui pourraient correspondre",rsMatchHint:"Suggérées à partir de la thèse du contenu — elles n’y sont pas forcément nommées.",rsEvalOne:"⚡ Évaluer",rsAddAll:e=>`＋ Ajouter les ${e} à la liste`,rsNoCompanies:"Aucune société dans ce contenu.",rsConclusion:"Ce que ça implique",rsCriteria:"Critères de sourcing",rsSources:"Pour creuser",groupEngine:"Moteur",groupNone:"Rien",browse:e=>`Parcourir les ${e}`,chainAll:e=>`Enchaîner les ${e}`,colCompany:"SOCIÉTÉ & DESCRIPTION",grpCount:(e,a)=>`${e} à envoyer sur ${a} sourcées`,emptyTab:"AUCUNE CIBLE DANS CET ONGLET",emptyScope:"AUCUNE SOCIÉTÉ DANS CE PÉRIMÈTRE",contWorld:"Monde",evalGoOn:e=>`⚡ Évaluer ${e}`,rowExtract:"🔎 Extraire les sociétés",toSendCtx:(e,a)=>`sur ${e} dans l'édition${a>0?` (${a} sans société identifiable)`:""}`,grpCard:"la carte du jour",edLabel:"dans l'édition du jour",edSplit:(e,a)=>`${e} évaluable${e!==1?"s":""} ⚡${a>0?` · ${a} à explorer 🔎`:""}`},To={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Everything STAN ran through the screen on this window: every company judged against your criteria, kept or discarded automatically.","STAN kept these companies against your criteria, decisions justified. WE verify its picks — discard, validate, or launch an analysis on the uncertain ones.","STAN’s memos, reviewed by US: quantified synergies, argued verdict. Validate the ones to contact, set “to decide” where you hesitate.","YOUR move: the best targets, presented on Monday by your Corporate Developer. Call YES or NO — your yeses move to Validated.","Your YESES — the shortlist to contact. WE prepare the approach, or engage it on your behalf (Enterprise plan).","Discarded by STAN or by YOU. Every NO sharpens Stan’s criteria. Recover one anytime.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(e,a,r)=>`<b>${e} Stan CALL${e>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${r} awaiting answer.</b>`,morningThesis:(e,a)=>`<b>${e}</b> compan${e===1?"y was":"ies were"} sourced this morning by our engines.`+(a?` <b>${a}</b> still to screen.`:' <span class="ok">All screened.</span>'),morningEval:e=>`▶ Work through them (${e})`,identTitle:e=>`Targets for ${e}`,identCoverage:"MARKET COVERAGE",identCoverageOf:(e,a)=>`<b>${e}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"MEMO ENGINE",identPerDay:"memo/day",identPending:e=>`→ ${e} queued`,identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Reverse sort order",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:e=>`Decision undone on ${e}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ YES",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:e=>`${e} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"SCREEN · MEMO",colScore:"SCORE",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:e=>`Since Stan’s verdict: ${e} d`,waitChip:e=>`⏱ ${e} d`,densList:"LIST",densOpen:"OPEN",densLigne:"ROWS",densMaxi:"CARDS",unfoldAll:"Unfold all",foldAllLbl:"Fold all",foldArts:"Articles only",doAll:"All",doEval:"⚡ Evaluable",doExplore:"🔎 To explore",doTodo:"⚡ To evaluate",doDone:"✓ Already evaluated",sortBy:"Sort by",sortSig:"Signal",sortAmount:"Amount",sortAge:"Recency",sortName:"Name",sortCountry:"Country",sortStage:"Stage",memoSynth:"SUMMARY",memoOpenFull:"📖 Read the full memo →",memoDeep:"⚡ Detailed memo",memoDeepHint:"For this file to decide, you can launch the detailed analysis: market study, competitive quadrant, scenarios.",memoDeepSent:e=>`Detailed memo launched on ${e} — ready in 35 to 40 minutes`,memoInstantSent:e=>`Analysis launched on ${e} — memo ready in ~15 minutes`,memoNone:"No memo for this file yet — launch the analysis.",creditsCap:"MEMO CREDITS",creditsToday:"today",creditsRecharge:"Top up →",creditsCost:e=>`−${e} credit${e>1?"s":""}`,creditsNone:"Out of credits — top up or wait for tomorrow 7am.",rechargeTitle:"Memo credits",rechargeHint:e=>`Your plan includes <b>${e} credits per day</b>, refilled every morning. Need more right now?`,rechargeNote:"Purchased credits never expire. They are used after your daily credits.",rechargeBuy:"Add",rechargeUnit:(e,a)=>`${e} credits — €${a}`,onbTag:"PRIVATE PREVIEW · READ ONLY",onbTitle:e=>`Your deal flow is ready — <b>${e} targets kept</b> by Stan`,onbSub:e=>`${e} companies screened against your thesis. The first ten rows are open; the rest unlocks in thirty minutes.`,onbSteps:[["Stan studied your online presence","Website, job posts, press — it inferred your acquisition angles."],["It screened the market","Every company checked against your criteria."],["It wrote memos","Quantified analyses, synergies, verdicts."],["Your turn to decide","Thirty minutes to tune your deal flow and unlock everything."]],onbCta:"Pick a slot →",lockbarText:"Let’s set up your dream deal flow in 30 minutes",lockbarCta:"Pick a slot",rdvHeading:"Let’s set up your ideal deal flow in 30 minutes",rdvSubBefore:"Pick a slot below, or reach your Corporate Development expert directly at ",rdvSubMid:" or by email at ",rdvCoFallback:"your company",rdvUnlockLabel:e=>`Unlock ${e}`,rdvUnlocks:e=>[["Access every target you kept","Full investment memos, synergies, contacts, approach angle."],["Acquisition strategy built with you","Hypothesis + acquisition strategy recalibrated live, with you."],["Let’s decide together on the targets you want","YES / NO, sourcing of similar companies, export and CRM sync."],["Your AI Corporate Developer is live",`Stan works for ${e} every morning — all you have to do is decide.`]],funScreened:e=>`companies screened${e?` since ${e}`:""}`,funKept:"kept as serious targets",funAnalyzed:"analysed in depth",funShown:"presented here to gather your view",funToday:e=>`incl. ${e} today`,actTitle:"Last 30 days of activity",actScreened:"screened",actKept:"kept",actToday:"today",fstatsShow:"Show the last 30 days of activity",fstatsHide:"Hide activity",sinceTitle:(e,a)=>`${e} new target${e>1?"s":""} since your last visit (${a})`,sinceMore:e=>`+${e} more`,sinceOut:e=>`${e} left the list`,identSyncConfirm:"Relaunch sourcing now? An engine pass takes a few minutes.",plugAutoOn:e=>`⚡ Automatic sending ACTIVE (${e}) — every target you validate goes into the sequence on its own.`,plugAutoOff:"Automatic sending off — validating a target sends it nowhere.",plugCrm:"Create the records in my CRM",plugCrmHint:"Paste your tool’s webhook URL: every decision lands there right away.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Save",plugSaved:"Webhook saved",plugTest:"Test",plugTested:"Test sent",plugTestThrottled:"Already tested less than 5s ago — nothing was sent.",plugRemove:"Remove",plugRemoved:"Webhook removed",plugMcp:"Claude & AI (MCP)",plugBulk:"Contact my targets",plugBulkHint:"See who would go out first: the preview contacts nobody.",plugBulkTabs:[["valides","Validated"],["call","To decide"],["retenus","Kept"]],plugBulkPreview:"👁 Preview",bulkArm:"📤 Send for real",bulkNoDest:"No destination saved: set up your tool above first.",bulkScope:"What goes out is the whole server-side tab — not the filtered view on screen.",bulkWarn:(e,a)=>`You are about to contact ${e} compan${e>1?"ies":"y"} via ${a}. This cannot be undone, and the server does not check whether they were already contacted.`,bulkConfirm:e=>`Yes, send via ${e}`,bulkCancel:"Cancel",bulkSending:"Sending…",bulkDone:(e,a,r)=>`${e} compan${e>1?"ies":"y"} sent. ${a} reachable on LinkedIn only, ${r} with no email.`,bulkNone:"No company had an email: nothing was sent.",bulkLocked:(e,a)=>`Sent on ${e} — ${a} compan${a>1?"ies":"y"}. Next send available in 24 h.`,bulkPreviewFirst:"Run the preview first: it says exactly who would go out.",cdConviction:"Conviction",cdAnalyse:"Analysis",cdSociete:"Company",cdContact:"Contact",cdSuivi:"Follow-up",cdCrible:"screening",cdMemo:e=>e?`after ${e} memo`:"after memo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict on",cdSector:"Sector",cdStage:"Stage",cdCountry:"Where",cdSite:"Website",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Detected on",cdName:"Decision-maker",cdEmail:"Email",cdCeoStatus:"Your decision",cdEngagement:"Engagement",qaTitle:"Describe this company",qaHint:"Reads its website, then four blocks: who it serves, what it sells, how it makes money, and what to remember. No verdict — the screening already decided.",qaRun:"📄 Describe",qaBusy:"Reading the website…",qaVP:"Who, and for what problem",qaProduct:"What it sells",qaModel:"How it makes money",qaSummary:"Takeaway",qaSources:e=>`${e} page${e>1?"s":""} read`,qaQuota:"Daily cap reached: try again tomorrow.",qaEmpty:"The website says nothing usable — nothing was invented.",dsBtn:"🗂 Committee pack",dsHint:"One A4 per company: the screening verdict and its reason, the identity, the analysis when it was run, and your decision. No financial figures — we receive none.",dsTitle:e=>`Committee pack — ${e} compan${e>1?"ies":"y"}`,dsCap:(e,a)=>`The first ${e} of ${a}: a committee will not read ${a} pages.`,dsWhy:"Why this company is in front of you",dsAnalysis:"What it does",dsDecision:"Your decision",dsEmpty:"No company in the current selection.",dsFoot:e=>`Selection by Proplace for ${e} — internal document, do not circulate.`,covFunnel:"Your market, screened",covScreened:e=>`${e} companies screened`,covOf:e=>`out of ~${e} relevant companies`,covNoEst:"Your addressable market is not sized yet: coverage will show as soon as it is.",covPace:e=>`${e} companies screened per day`,covEta:e=>e<=0?"Your market is fully covered.":e<60?`Full coverage in ~${e} days at this pace.`:`Full coverage in ~${Math.round(e/30)} months at this pace.`,covRate:"Analysis pace",covRateHint:"How many kept companies get a reasoned verdict each day. At zero, analysis is paused.",covRateNow:e=>e<=0?"Paused":`${e} per day`,covKept:"kept",covAna:"analysed",covShown:"shown here",bulkReplayed:"This send was already recorded: nothing went out again. Your targets were contacted once.",bulkPending:"The previous send is still running: nothing was sent again.",plugBulkResult:(e,a,r)=>`${e} would go by email · ${a} by LinkedIn · ${r} with no contact.`,memoAlertTitle:"🔔 Your memo alert",memoAlertSub:"Get an email as soon as one of your fund’s memos is finalised — with its direct link.",memoAlertToggle:"Send me every finished memo",memoAlertEmail:"Recipient",memoAlertSaved:"Saved ✓",memoAlertErr:"Could not save — try again",memoAlertSections:"Sections of the email",memoAlertSec:[["swot","SWOT"],["action","Action plan"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Stan’s verdict"]],memoAlertPreview:"👁 Preview",memoAlertBtn:"Your memo alert",alertTabDaily:"Daily",alertTabWeekly:"Weekly",alertTabMarket:"Market",alertSections:"Sections of the email",alertSec:[["pending","Files to decide on"],["stats","Your key numbers"],["autonomous","Stan’s automatic decisions"],["market","Market analysis"],["sourcing","Your sourcing of the day"]],alertSecSlow:"(slower to generate)",alertSecNote:"Unticking the market analysis makes the preview instant.",alertPreview:"👁 Preview today’s email",alertPreviewWeekly:"👁 Preview the weekly",alertSubject:"Subject:",alertPreviewBusy:"Preview being generated, try again in a few seconds.",alertPreviewRetry:e=>`Generating — new attempt in ${e}s…`,alertPreviewFail:"Preview unavailable right now — untick “Market analysis” to get it immediately.",alertPreviewEmpty:"Right now: nothing to decide on — the email will not go out.",alertTest:"✉ Send me a test",alertTestOk:e=>`✓ Sent to ${e} — check your spam/promotions too.`,alertTestHint:"Does not affect the daily send.",alertWeeklySub:"One email a week: the week in review and what your thesis learned from your decisions.",alertWeeklyOn:"📬 Receive your week in review",alertWeeklyWhen:"Day and time (Paris)",alertDow:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],alertLoadError:"Could not load your preferences.",alertThrottled:"Too fast — wait a few seconds and set it again.",alertInactive:"Your access is not active yet — let’s talk about it.",alertNoLead:"Recipient to be set with us.",exportViewTitle:"CSV of the filtered view",exportViewDesc:e=>`The ${e} rows of your current selection — tab, facets, search and window included. Semicolon separated, ready for Excel.`,exportViewBtn:"Download",exportViewDone:e=>`${e} row${e>1?"s":""} exported`,printTitle:"Print the selection",printDesc:e=>`The ${e} rows on screen, on A4: who it is for, as of when, the funnel figures, then the list. The map, filters and buttons are not printed.`,printBtn:"Print",exportViewHead:"Company|Status|Stan verdict|Score|Country|Sector|Post-YES stage|Contact|Email|Memo link|Date|Reason",tourStart:"Start the step-by-step guide",tourIntro:"The guided tour covers the whole page A to Z, on the live page: each step spotlights the exact spot — from your thesis to your email alert.",tourStep:(e,a)=>`Step ${e}/${a}`,tourPrev:"← Previous",tourNext:"Next →",tourDone:"Finish",tourClose:"Close",tourPlayTitle:"Guided tour",ahaATitle1:"1 file awaits your decision",ahaATitleN:e=>`${e} files await your decision`,ahaABody:"YES = we prepare the approach; NO = we sharpen the aim.",ahaABtn:"Decide now →",ahaBTitle:"A full memo is waiting for you",ahaBBody:e=>`${e} already has its analysis memo — a 3-minute read.`,ahaBBtn:"Open the memo →",ahaRetTitle:e=>e===1?"1 kept company is waiting for you":`${e} kept companies are waiting for you`,ahaRetBody:"Stan’s sorting is done — every kept company has its sheet, card and signal.",ahaRetBtn:"See the kept companies →",loadMsgs:["Waking up the sourcing engines…","Loading your targets…","Cards and signals are coming…","Sorting by your thesis…","One more moment — the first load is the longest."],ahaCTitle:"Your first targets are here",ahaCBody:"Tell us if the aim is right — every signal sharpens the machine.",ahaCBtn:"See my criteria →",howto:[["**Set your targeting.** Open “Your criteria”: it’s your thesis — what you look for and what you rule out. Fix it in plain language whenever something is off; the next morning’s sourcing realigns on its own.","crit"],["**Source as many targets as you can.** Evaluate a company by pasting its name or website — or a whole list — and watch your engines comb the web with your settings.","eval"],["**Move every target through the funnel, left to right** — Evaluated › Kept › Analysed › To decide › Validated › Ruled out. On each card, “Your status” files it in one click; your “why” note stays visible. The 👍/👎 never file anything: they sharpen your thesis.","tab1"],["**Settle the “To decide”.** Stan leaves you the final word: YES (Validated) or NO (Ruled out), with a word on the why.","tab3"],["**Understand how Stan sorts your targets.** Your status always overrides Stan’s verdict. The bridge between the two is explained in “Your criteria”: Kept ↔ MATCH, Analysed ↔ CONSIDER · MONITOR, To decide ↔ CALL, Ruled out ↔ NO MATCH · PASS…","crit"],["**Focus on the Validated** — and take every file all the way to closing!","tab4"],["**Push all of this out of the page.** The 🔌 button wires it into your tools: send your targets to your emailing sequence, create the records in your CRM, enrich the files you already have there.","plug"],["**Only come back when it’s worth it.** The 🔔 button sets two emails: the daily one for files to decide on, and the week in review.","alert"]],fhintLive:"What is moving on your market right now — click a tile to open the source.",fhintGoal:"What the engines sourced overnight, and what is left to evaluate.",fhintDec:"Stan’s decision, stated and justified: this is what the “STEP A, C…” refer to.",fhintStatus:"Your status always overrides Stan’s verdict — and it is saved right away.",tourT:{ident:"Your page",live:"Live",goal:"This morning’s sourcing",funnel:"The funnel",tuto:"The current step",demand:"Evaluate a company",dec:"Why this decision",status:"Your status",learn:"Your 👍 / 👎",tools:"Out of the page",crit:"Stan’s settings"},csLabel:"Your status:",csKept:"Kept",csAnalysed:"Analysed",csPending:"To decide",csValidated:"Validated",csOut:"Ruled out",csYes:"✓ Yes",csNo:"✗ No",csSaved:"✓ saved",csNoteSaved:"note added ✓",csNoteOk:"OK",csNotePh:"Why? (one line)",csAnaConfirm:"No memo on this file — mark it Analysed anyway?",whySend:"Send",whyYesPh:"Why this YES? (one line — it sharpens your thesis)",whyNoPh:"Why this NO? (one line — it sharpens your thesis)",stgLabel:"Your progress:",stg:[["todo","○ To do"],["sent","✉ Contacted"],["replied","💬 Replied"],["meeting","🤝 Meeting"],["loi","📄 LOI"],["signed","✅ Signed"],["lost","✖ Lost"]],j4Badge:e=>`⏰ No reply for ${e} days — follow up?`,actRepeche:"↩ Recover",actErr:"Could not save — try again in a moment.",actNotPersisted:"This status cannot be saved on this record.",decidedYes:e=>`${e} validated — on to the approach`,decidedNo:e=>`${e} ruled out`,repeched:e=>`${e} recovered — back in Kept`,critHypTitle:"Our hypothesis about your strategy",critHypSub:"The whole selection follows from it. If it is off, correct it below — the search is realigned and you get a corrected selection.",critProfilsTitle:"Your target profiles",critProfilsSub:"The families of targets the machine tracks continuously — each profile unfolds.",critLookFor:"What we look for",critRuleOut:"What we rule out",critGateTitle:"Stan’s screen — how it decides Kept / Ruled out",critGateSub:"Every company is checked against these criteria. They are what the “STEP A, C…” in the reasons on each row refer to.",rubricTitle:"How Stan decides the analysis (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Once kept, Stan digs deeper and rules. Here’s what tips the balance.",qvTitle:"Stan’s verdicts — where each file goes",qv:[["CALL PENDING","Stan’s top pick: decide YES/NO now → “To decide” tab."],["CALL YES","you decided YES — the file joins “Validated”, on to the approach."],["CALL NO","you decided NO — the file joins “Ruled out”."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],brTitle:"Automatic routing — where Stan’s verdict sends each file",br:[["Kept","MATCH — kept at sourcing, memo to come → “Kept” tab"],["Analysed","CONSIDER · MONITOR — memo done, no call → “Analysed” tab"],["To decide","CALL PENDING — Stan proposes a call, your YES/NO is awaited → “To decide” tab"],["Validated","CALL YES — you ruled YES → “Validated” tab"],["Ruled out","NO MATCH · PASS · CALL NO — Stan’s refusal, or your NO on a call → “Ruled out” tab"]],brNote:"A CALL goes through 3 states: CALL PENDING (the memo is DONE, Stan proposes the call — your decision is awaited) › CALL YES (you validate) › CALL NO (you rule out). PENDING never means “being analysed”: the analysis is already done.",vt:{MATCH:"MATCH — kept: it fits your criteria.","NO MATCH":"NO MATCH — ruled out by your criteria.","CALL PENDING":"CALL — Stan’s top pick: worth a YES/NO decision now.","CALL YES":"CALL YES — you ruled YES: the file joins “Validated”.","CALL NO":"CALL NO — you ruled NO: the file joins “Ruled out”.",CONSIDER:"CONSIDER — solid, worth a closer look.",MONITOR:"MONITOR — keep an eye on it, not a priority yet.",PASS:"PASS — not relevant right now."},vKept:"Kept",vOut:"Ruled out",learnLine:"Like Netflix, every 👍/👎 sharpens what Stan shows you next — you judge, it learns.",learnLink:"Tune my criteria →",funnelHint:"Find here all your automatically sourced targets in <b>evaluated</b>, then move the ones you want to contact into <b>validated</b>.",fhintClose:"Hide this hint",queueTitle:"Processing queue",queueDone:(e,a)=>`<b>${e} / ${a}</b> memos generated`,queueTomorrow:"UP NEXT — PROJECTED ORDER, RECOMPUTED EVERY MORNING",queueToday:"ANALYZED TODAY",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugConfigured:"Configured",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(e,a)=>`<b>${e}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:e=>`${e} screened`,alertTitle:"🔔 Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"YOUR ACQUISITION ANGLES",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarBusy:"🧬 Searching…",similarNote:"The kept ones enter your list at the next refresh.",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:e=>`updated ${e}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:e=>`updated ${e}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:e=>`Onboarding launched for ${e} — track progress in the cockpit`,rsOpen:"🔎 Find companies to evaluate",rsUrlPh:"paste the URL of an article, a video or a note",rsTextPh:"Paste the full article here",rsOr:"or",rsGo:"🔎 Summarize and find companies",rsHint:"SUMMARY · MIND MAP · COMPANIES",rsRunning:"Reading…",rsRunningVid:"Transcribing the video…",rsElapsed:e=>`${e}s`,rsNeed:"Paste a URL, or the full text of the article.",rsFound:e=>e?`${e} compan${e>1?"ies":"y"} found in this content.`:"No company named in this content.",rsLink:"See the published page ↗",rsPublishing:"Publishing the note…",rsPublishFail:"Note produced, page not published",rsTags:"TAGS",rsClose:"Close",rsMindmap:"MIND MAP",rsSource:"Source ↗",rsSaving:"Saving…",rsSaved:"✓ Saved to your cockpit",rsSavedIn:e=>`✓ Saved to ${e}'s notebook`,rsSaveFail:"Note produced, NOT saved",rsArchOpen:e=>`see the ${e} research run${e>1?"s":""} already launched`,rsArchTitle:"Research already launched",rsArchBack:"← all research runs",rsArchLoading:"Loading…",rsArchEmpty:"No research saved yet.",rsArchGone:"This research is no longer available.",rsRowCounts:(e,a)=>`${e} mentioned · ${a} to evaluate`,rsPub:"Published",rsPriv:"Not published",rsCited:"Companies mentioned",rsCitedHint:"Every company named in this content.",rsMatch:"Companies that could match",rsMatchHint:"Suggested from the content’s thesis — they are not necessarily named in it.",rsEvalOne:"⚡ Evaluate",rsAddAll:e=>`＋ Add all ${e} to the list`,rsNoCompanies:"No company in this content.",rsConclusion:"What it implies",rsCriteria:"Sourcing criteria",rsSources:"Dig deeper",groupEngine:"Engine",groupNone:"None",browse:e=>`Browse the ${e}`,chainAll:e=>`Chain the ${e}`,colCompany:"COMPANY & DESCRIPTION",grpCount:(e,a)=>`${e} to send out of ${a} sourced`,emptyTab:"NO TARGET IN THIS TAB",emptyScope:"NO COMPANY IN THIS SCOPE",contWorld:"World",evalGoOn:e=>`⚡ Evaluate ${e}`,rowExtract:"🔎 Extract companies",toSendCtx:(e,a)=>`of ${e} in the edition${a>0?` (${a} without an identifiable company)`:""}`,grpCard:"today's card",edLabel:"in today's edition",edSplit:(e,a)=>`${e} evaluable ⚡${a>0?` · ${a} to explore 🔎`:""}`},Lo={fr:{...Ma.fr,...Ao},en:{...Ma.en,...To}},Ro=`.atl2{
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
.atl2 .bulk .side .hint{white-space:nowrap}`,Oo=`
/* coque : hauteur pilotée par le montage (page /carte, iframe onglet ⑤, démo home) */
.atl2{height:var(--atelier-h,calc(100dvh - 60px));display:block;position:relative;overflow:hidden;border-radius:inherit}
.atl2 .app{height:100%}

/* ── LIVE + jours collés (/cibles) ────────────────────────────────────────
   « exactement le même look & feel que les jours collés au LIVE dans
   /actualites » (Antoine, 15/08) : UNE seule surface d'encre, le ticker et la
   bande des jours dedans, un filet entre les deux — le miroir de .pp-band
   (src/live/core.ts). L'ancienne surface claire est ABANDONNÉE : elle faisait
   deux bandeaux différents pour le même objet. */
.atl2 .live-stack{flex:none;display:flex;flex-direction:column;background:#0B1220;
  border-bottom:1px solid var(--line,#e2e8f0)}
.atl2 .live-stack--cibles .ticker{border-bottom:1px solid #1E2C41;height:48px}
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
  gap:26px;align-items:start;padding:20px 22px 22px;background:#FBFCFE;
  border-bottom:1px solid var(--line)}
@media (max-width:1000px){.atl2 .card.ops-open{grid-template-columns:1fr}}
.atl2 .ops-open .oc-main{min-width:0;max-width:72ch}
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
/* le proto dimensionne la scène en vh (viewport) : dans une coque à hauteur fixe
   on raisonne en % du CONTENEUR — leçon v1 : le % se pose sur .fzone, ENFANT
   DIRECT de .app (hauteur définie), jamais sur un descendant en hauteur auto. */
/* PLAFOND 300 px, abaissé de 470 le 10/08 : à 38 % la carte GRANDISSAIT avec
   la fenêtre et reprenait la moitié de la place rendue à la liste, alors que
   l'invariant de cette boîte est « seule .list grandit ». Le plafond ne peut
   que la rétrécir — aucun écran ne voit la carte plus grande qu'avant. */
.atl2 .fzone{flex:0 0 auto;height:38%;min-height:300px;max-height:300px;display:flex;flex-direction:column}
.atl2 .fzone .conts{flex:none}
.atl2 .stage{flex:1;height:auto;min-height:0;max-height:none}
.atl2 .stage.folded{flex:none;height:auto;min-height:0}
.atl2 .fzone:has(.stage.folded){height:auto;min-height:0}
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
.atl2 .since{flex:none;margin:0 14px 6px;padding:8px 11px;border-radius:var(--r);
  background:var(--gp,#F3FAF6);border:1px solid #CFE9DA}
.atl2 .since-h{display:flex;align-items:center;gap:8px}
.atl2 .since-h b{flex:1;font-size:12px;color:#0f6e3f;font-weight:700}
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
  box-shadow:0 18px 46px rgba(11,18,32,.34);padding:16px 18px 14px}
.atl2 .tour-card.fin{width:min(420px,calc(100vw - 32px));text-align:center;padding:26px 24px 20px}
.atl2 .tour-n{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.1em;
  text-transform:uppercase;color:var(--dim);margin-bottom:6px}
.atl2 .tour-card h3{margin:0 0 6px;font-size:15px;font-weight:800;color:var(--ink);line-height:1.3}
.atl2 .tour-card.fin h3{font-size:19px;margin-bottom:8px}
.atl2 .tour-card p{margin:0 0 14px;font-size:12.5px;line-height:1.55;color:var(--sub)}
.atl2 .tour-card p b{color:var(--ink);font-weight:700}
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
.atl2 .list.ligne{background:#F1F5F9;padding:2px 14px 16px}
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
.atl2 .mapzone svg{display:block;width:100%;height:460px;margin:0 auto}
/* ── le segment de dates RENTRE dans le rail (16/08 : « déborde à droite,
   c'est moche ») : grille 2×2 pleine largeur, libellés ellipsés. */
.atl2 .fbar .seg{display:grid;grid-template-columns:1fr 1fr;gap:6px;width:100%;min-width:0}
.atl2 .fbar .seg button{min-width:0;display:flex;align-items:center;gap:5px;
  overflow:hidden;white-space:nowrap;font-size:10.5px;padding:7px 8px}
.atl2 .fbar .seg button b{flex:none;margin-left:auto}
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
`,Mo=Ro+Oo;function oa(e){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(e)||""}catch{return""}}function qo(){const e=oa("teaser");if(e==="0"||e==="1")return e;try{if(typeof window<"u"&&window.parent&&window.parent!==window){const a=new URL(window.parent.location.href).searchParams.get("teaser");if(a==="0"||a==="1")return a;if(/\/cibles\/[^/]+\/open\/?$/i.test(window.parent.location.pathname||""))return"0"}}catch{}return""}function Fo(e,a){if(e||a.mode!=="client"||!a.token)return"visiteur";const r=qo();return r==="0"?"client":r==="1"||oa("embed")==="1"&&oa("chrome")==="1"?"apercu":"client"}const Po={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!1,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0,showMorning:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0}},Do=e=>Po[e],He=e=>Object.assign(e,{continent:Pr(e.cc)});function Gt(e){const a=new Set,r=[];for(const n of e){const i=(n.name||"").toLowerCase();!i||a.has(i)||(a.add(i),r.push(n))}return r}const Io=60*60*1e3;function Bo(e){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+e)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>Io?null:a}catch{return null}}function kt(e,a){try{sessionStorage.setItem("ppmap:swr:"+e,JSON.stringify({...a,ts:Date.now()}))}catch{}}const $o=e=>e==="default"?"":e==="ops"?"ops":"research:"+e.research;function _o(e,a,r="default"){const n=r!=="default",i=h.useMemo(()=>e||n?{mode:"anon"}:Er(),[e,n]),o=h.useMemo(()=>n?"visiteur":Fo(e,i),[e,i,n]),l=h.useMemo(()=>Do(o),[o]),s=o!=="visiteur",p=$o(r),[x,c]=h.useState([]),[d,u]=h.useState(""),[g,m]=h.useState(null),[b,v]=h.useState(null),[f,y]=h.useState(null),[j,w]=h.useState(()=>new Map),[z,E]=h.useState(()=>new Map),[R,D]=h.useState(""),[A,q]=h.useState(new Set),[k,T]=h.useState(null),[P,L]=h.useState(!0),[S,N]=h.useState(!1),[O,M]=h.useState(0),[B,V]=h.useState(0),H=h.useRef(0),ee=h.useMemo(()=>{var _;if(o!=="client")return"";try{return((_=zr())==null?void 0:_.email)||""}catch{return""}},[o]);h.useEffect(()=>{const _=++H.current;let Y=!0;const W=()=>Y&&_===H.current,ne=(s&&i.token?i.token:"pub:"+a)+(p?":"+p:""),le=Bo(ne);return le?(c(le.objs.map(He)),le.fund&&u(le.fund),m(le.marketEstimate??null),v(le.criteria??null),y(le.stats??null),D(le.generatedAt||""),L(!1)):L(!0),(async()=>{try{if(r==="ops"){const ye=await Ht(),pe=((ye==null?void 0:ye.recent_ops)||[]).map(Q=>{const Z=Yt(Q.company_name||Q.title?Q:{...Q,title:(Q.headline_fr||Q.headline||"").slice(0,120)},a),he=String(Q.rubrique||"").toLowerCase();return Z&&(he==="nominations"||he==="recrutements")&&(Z.engine=he),Z&&!String(Q.company_name||"").trim()&&(Z.noCo=!0),Z}).filter(Q=>!!Q).map(Q=>(Ar((Q.name||"").trim())||(Q.noCo=!0),Q));try{const Q=await Tr(),Z=Lr(Q),he=((Q==null?void 0:Q.date)||"").slice(0,10);if(Z.length&&he){const G=new Set;for(const ie of pe){if(ie.noCo||(ie.date||"").slice(0,10)!==he)continue;const J=qa(Z,G,ie.name,"");J>=0&&(G.add(J),ie.decryptHtml=Z[J].html)}for(const ie of pe){if(ie.decryptHtml||(ie.date||"").slice(0,10)!==he)continue;const J=qa(Z,G,"",ie.headline||ie.tagline||ie.name);J>=0&&(G.add(J),ie.decryptHtml=Z[J].html)}}}catch{}if(!W())return;c(pe.map(He)),kt(ne,{objs:pe})}else if(typeof r=="object"){const pe=(await Fa()||[]).filter(Z=>(Z.slug||"")===r.research).map(Z=>Pa(Z,a)).filter(Z=>!!Z),Q=Gt(await Da(pe,a));if(!W())return;c(Q.map(He)),kt(ne,{objs:Q})}else if(s&&i.token){const ye=Rr(i.token),pe=Ht(),Q=Or(i.token),Z=Mr(i.token),he=qr(i.token),G=await ye;let ie=G?G.targets:[];W()&&G&&(u(G.fund||""),m(G.marketEstimate??null),v(G.criteria??null),y(G.stats??null),D(G.generatedAt||""),c(ie.map(He)),L(!1),N(!1));const[J,Be,ue,me]=await Promise.all([pe,Q,Z,he]),Fe=((J==null?void 0:J.recent_ops)||[]).map(Ne=>Yt(Ne,a)).filter(Ne=>!!Ne);if(ie=[...ie,...Fe],!W())return;c(ie.map(He));const Ue=new Set;for(const Ne of Be){const Pe=(Ne.id||Ne.co||"").toString().trim().toLowerCase();Pe&&Ue.add(Pe.startsWith("t:")?Pe:"t:"+Pe)}q(Ue),w(ue),E(me),G&&kt(ne,{fund:G.fund,marketEstimate:G.marketEstimate,criteria:G.criteria,stats:G.stats,generatedAt:G.generatedAt,objs:ie})}else{const ye=Fr(),pe=Fa(),Q=Ht(),Z=await ye;W()&&Z.length&&(c(Gt(Z).map(He)),L(!1),N(!1));const[he,G]=await Promise.all([pe,Q]),ie=(he||[]).map(me=>Pa(me,a)).filter(me=>!!me),J=await Da(ie,a),Be=((G==null?void 0:G.recent_ops)||[]).map(me=>Yt(me,a)).filter(me=>!!me),ue=Gt([...Z,...J,...Be]);if(!W())return;c(ue.map(He)),kt(ne,{objs:ue})}W()&&N(!1)}catch{W()&&!le&&N(!0)}finally{W()&&L(!1)}})(),()=>{Y=!1}},[s,i.token,a,O,p]),h.useEffect(()=>{if(!l.showCredits||!ee){T(null);return}let _=!0;return(async()=>{try{const Y=await fetch(`${ka}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:ee})});if(!Y.ok)return;const W=await Y.json();_&&W&&W.ok!==!1&&T(W)}catch{}})(),()=>{_=!1}},[l.showCredits,ee,B]);const K=h.useCallback(_=>q(new Set(_)),[]);return{session:i,mode:o,caps:l,fund:d,email:ee,marketEstimate:g,generatedAt:R,criteria:b,stats:f,thumbs:j,stages:z,dossiers:x,favIds:A,setFavIds:K,credits:k,reloadCredits:()=>V(_=>_+1),loading:P,error:S,refresh:()=>M(_=>_+1)}}const Pn=()=>({win:"all",day:"",status:"all",signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],search:""}),Uo=(e="europe",a=!1,r)=>({continent:e,ptab:(r==null?void 0:r.ptab)??1,dens:(r==null?void 0:r.dens)??"ligne",filters:{...Pn(),...(r==null?void 0:r.filters)||{}},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,modal:(r==null?void 0:r.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,memoTab:0,undo:[],mapFolded:a});function Vo(e,a){switch(a.type){case"continent":return{...e,continent:a.key,filters:{...e.filters,country:[]},shown:{},popupId:null,openFacet:null};case"ptab":return{...e,ptab:a.tab,shown:{},popupId:null};case"dens":return{...e,dens:a.dens,shown:{}};case"filters":return{...e,filters:{...e.filters,...a.patch},shown:{}};case"toggleFacet":{const r=e.filters[a.facet],n=r.includes(a.value)?r.filter(i=>i!==a.value):[...r,a.value];return{...e,filters:{...e.filters,[a.facet]:n},shown:{}}}case"toggleMemoLevel":{const r=e.filters.memoLevel,n=r.includes(a.value)?r.filter(i=>i!==a.value):[...r,a.value];return{...e,filters:{...e.filters,memoLevel:n},shown:{}}}case"clearFacet":return{...e,filters:{...e.filters,[a.facet]:[]},shown:{}};case"reset":return{...e,filters:Pn(),shown:{},openFacet:null};case"sort":return{...e,sort:e.sort.key===a.key?{key:a.key,dir:e.sort.dir*-1}:{key:a.key,dir:a.key==="signal"||a.key==="amount"||a.key==="score"?-1:1}};case"groupBy":return{...e,groupBy:a.groupBy};case"more":return{...e,shown:{...e.shown,[a.group]:(e.shown[a.group]??a.base??Dn)+a.by}};case"pile":return{...e,pileMode:a.on,popupId:null};case"openFacet":return{...e,openFacet:e.openFacet===a.facet?null:a.facet};case"popup":return{...e,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"modal":return{...e,modal:a.modal,popupId:a.modal?null:e.popupId};case"chainStart":return{...e,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...e,chain:{...e.chain,idx:e.chain.idx+1}};case"spaceTab":return{...e,spaceTab:a.tab};case"memoConsole":return{...e,memoConsole:a.id,memoTab:0};case"memoTab":return{...e,memoTab:a.tab};case"undoPush":return{...e,undo:[...e.undo,a.entry].slice(-50)};case"undoPop":return{...e,undo:e.undo.slice(0,-1)};case"mapFold":return{...e,mapFolded:a.folded,openFacet:null};default:return e}}const Dn=40;function Ea(e,a,r,n){if(n!=="signal"&&a.signalOnly&&(!fe(e)||a.signalEngines.length&&!a.signalEngines.includes(e.engine||""))||n!=="dealKind"&&a.dealKind.length&&!a.dealKind.includes(e.dealKind||"")||n!=="sector"&&a.sector.length&&!a.sector.includes(e.sector||"")||n!=="engine"&&a.engine.length&&!a.engine.includes(e.engine||"")||n!=="stage"&&a.stage.length&&!a.stage.includes(e.stage||"")||n!=="angle"&&r&&a.angle.length&&!a.angle.includes(e.angle||"")||n!=="memoLevel"&&r&&a.memoLevel.length&&!a.memoLevel.includes(ja(e)))return!1;if(n!=="win"){if(a.day){if((e.date||"").slice(0,10)!==a.day)return!1}else if(a.win!=="all"){const i=a.win==="1"?0:a.win==="7"?7:30;if(nt(e.date)>i)return!1}}if(n!=="status"&&!r&&a.status!=="all"&&We(e)!==a.status)return!1;if(n!=="search"&&a.search.trim()){const i=a.search.trim().toLowerCase();if(!`${e.name||""} ${e.tagline||""} ${e.sector||""}`.toLowerCase().includes(i))return!1}return!0}function In(e,a,r){return a.continent!=="monde"&&e.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(e.cc||"")?!1:Ea(e,a.filters,r)}function Ho(e,a,r,n){return!(!In(e,a,r)||r&&!Dr(e,a.ptab,n))}function za(e,a){const r=a.key,n=i=>{switch(r){case"name":return(i.name||"").toLowerCase();case"country":return i.countryLabel||i.cc||"";case"stage":return i.stage||"";case"amount":return i.amountEur||-1;case"age":return-nt(i.date);case"score":return typeof i.score=="number"?i.score:-1;case"signal":{const o=fe(i);return o?100-(o.left??0):-1}}};return[...e].sort((i,o)=>{const l=n(i),s=n(o);return l<s?-a.dir:l>s?a.dir:(i.name||"").localeCompare(o.name||"")})}const Yo=["ma","levees","nominations","recrutements","actualites"],Wo=300,Kt=7,Go={fr:{ma:"🤝 Deals signés",levees:"💰 Levées",nominations:"👤 Nominations",recrutements:"💼 Recrutements",actualites:"📰 Actus"},en:{ma:"🤝 Signed deals",levees:"💰 Raises",nominations:"👤 Appointments",recrutements:"💼 Hirings",actualites:"📰 News"}},Bn={fr:{hiring:"💼 Recrute",raised:"💰 Lève des fonds",news:"📰 Presse",posting:"📣 Publie",building:"💻 Construit",community:"💬 Communauté",registry:"🆕 Nouveau",exodus:"👋 Départs",other:"🔔 Signal"},en:{hiring:"💼 Hiring",raised:"💰 Raising",news:"📰 Press",posting:"📣 Posting",building:"💻 Building",community:"💬 Community",registry:"🆕 New",exodus:"👋 Exodus",other:"🔔 Signal"}},Ko=["hiring","raised","news","posting","building","community","registry","exodus","other"];function Wa(e){const a=fe(e);if(a)return"sig:"+(a.theme&&Bn.fr[a.theme]?a.theme:"other");const r=(e.rubrique||"").toLowerCase();return r==="ma"||r==="levees"||r==="nominations"||r==="recrutements"||r==="actualites"?r:e.dealKind==="ma"?"ma":e.dealKind==="levee"?"levees":"actualites"}function Qo(){const{dossiers:e,st:a,t:r,dispatch:n,contName:i,pipe:o,lang:l}=F(),s=l==="en",[p,x]=h.useState("all"),[c,d]=h.useState(!1),u=h.useMemo(()=>{const A=(a.filters.day||"").slice(0,10),q=L=>!(!o&&a.continent!=="monde"&&L.continent!==a.continent||A&&(L.date||"").slice(0,10)!==A),k=e.filter(L=>q(L)&&fe(L)),T=e.filter(L=>q(L)&&L.kind==="op"&&!fe(L)&&(A?!0:nt(L.date)<=Kt)),P=A||new Date().toISOString().slice(0,10);return T.sort((L,S)=>{const N=(L.date||"").slice(0,10)===P?0:1,O=(S.date||"").slice(0,10)===P?0:1;return N!==O?N-O:(S.amountEur||0)-(L.amountEur||0)}),[...za(k,{key:"signal",dir:-1}),...T]},[e,a.continent,a.filters.day,o]),g=h.useMemo(()=>{const A={};for(const q of u){const k=Wa(q);A[k]=(A[k]||0)+1}return A},[u]),m=h.useMemo(()=>p==="all"?u:u.filter(A=>Wa(A)===p),[u,p]),b=h.useMemo(()=>m.slice(0,Wo),[m]),v=m.length-b.length,f=A=>A==="all"?u.length:g[A]||0,y=A=>A==="all"?s?"All":"Tout":A.startsWith("sig:")?Bn[s?"en":"fr"][A.slice(4)]||"🔔":Go[s?"en":"fr"][A],j=[{k:"all"}],w=Yo.filter(A=>f(A)>0||A===p);if(w.length){j.push({g:s?"DEALS":"OPÉRATIONS"});for(const A of w)j.push({k:A})}const z=Ko.map(A=>"sig:"+A).filter(A=>f(A)>0||A===p);if(z.length){j.push({g:s?"OPEN SIGNALS":"SIGNAUX OUVERTS"});for(const A of z)j.push({k:A})}const E=A=>{try{return new Date(A+"T12:00:00Z").toLocaleDateString(s?"en-GB":"fr-FR",{day:"numeric",month:"long"})}catch{return A}},R=(()=>{const A=(a.filters.day||"").slice(0,10),q=!o&&a.continent!=="monde"&&i?s?` Scope: ${i}.`:` Périmètre : ${i}.`:"";return A?(s?`LIVE covers the events of ${E(A)}.`:`Le LIVE regroupe les événements du ${E(A)}.`)+q:(s?`LIVE covers the still-open signals and the deals of the last ${Kt} days.`:`Le LIVE regroupe les signaux encore ouverts et les opérations des ${Kt} derniers jours.`)+q})(),D=A=>b.map(q=>t.jsxs("button",{type:"button",className:"tk"+(ve(q)?" spent":""),onClick:k=>{const T=k.currentTarget.getBoundingClientRect();n({type:"popup",id:q.id,anchor:{x:T.left+T.width/2,y:T.bottom}})},title:q.name+(q.tagline?" — "+q.tagline:""),children:[t.jsx(Xe,{o:q}),t.jsxs("span",{className:"who",children:[t.jsx(hr,{o:q}),t.jsx("span",{className:"co",children:q.name})]}),typeof q.amountEur=="number"&&q.amountEur>0&&t.jsx("span",{className:"am",children:Nl(q.amountEur)}),q.sector&&t.jsx("span",{className:"mt",children:q.sector}),t.jsx(_t,{o:q}),t.jsx("span",{className:"tkgo",children:"→"})]},A+(q.id||q.name))).concat(v>0?[t.jsx("span",{className:"tk quiet",children:s?`+ ${v} more — filter by section to see them`:`+ ${v} autres — filtrez par rubrique pour les voir`},A+":more")]:[]);return t.jsxs("div",{className:"ticker",children:[t.jsxs("span",{className:"lbl",children:[t.jsx("i",{}),r.live]}),t.jsxs("span",{className:"tkfil",onBlur:A=>{A.currentTarget.contains(A.relatedTarget)||d(!1)},children:[t.jsxs("button",{type:"button",className:"tkfilb","aria-expanded":c,onClick:()=>d(A=>!A),children:[y(p),t.jsx("b",{children:f(p)}),t.jsx("span",{"aria-hidden":"true",children:"▾"})]}),t.jsxs("div",{className:"tkfilm",hidden:!c,children:[t.jsx("span",{className:"tkfilscope",children:R}),j.map(A=>"g"in A?t.jsx("span",{className:"tkfilg",children:A.g},A.g):t.jsxs("button",{type:"button","aria-pressed":A.k===p,onClick:()=>{x(A.k),d(!1)},children:[y(A.k),t.jsx("b",{children:f(A.k)})]},A.k))]})]}),t.jsx("div",{className:"win",children:b.length?t.jsxs("div",{className:"run",children:[D(0),D(1)]}):t.jsx("div",{className:"run",style:{animation:"none"},children:t.jsx("span",{className:"tk quiet",children:r.liveQuiet(i)})})})]})}const Xo="aDx8z7Hzksus",$n="+33 6 83 10 72 86",Ga="alexandre@proplace.co",Jo=`tel:${$n.replace(/[^\d+]/g,"")}`,Ka="pp-rdv-slot";function Zo(){const e=typeof document<"u"&&document.getElementById("rdv");return e?(e.scrollIntoView({behavior:"smooth",block:"start"}),!0):!1}function ei(){const{t:e,caps:a,fund:r}=F();if(!a.showOnb)return null;const n=r||e.rdvCoFallback;return t.jsxs("section",{id:"rdv",className:"pp-rdv is-teaser",children:[t.jsx("style",{children:ai}),t.jsx("h2",{children:e.rdvHeading}),t.jsxs("p",{className:"pp-rdv-sub",children:[e.rdvSubBefore,t.jsx("a",{href:Jo,children:$n}),e.rdvSubMid,t.jsx("a",{href:`mailto:${Ga}`,children:Ga})]}),t.jsx("div",{className:"pp-rdv-unlocks",children:e.rdvUnlocks(n).map(([i,o],l)=>t.jsxs("div",{className:"pp-rdv-u",children:[t.jsx("em",{children:e.rdvUnlockLabel(l+1)}),t.jsx("b",{children:i}),t.jsx("span",{children:o})]},i))}),t.jsx("div",{className:"pp-rdv-emb",children:t.jsx(zo,{filloutId:Xo,parameters:r?{company_name:r}:void 0})})]})}function ti(){const[e,a]=h.useState(()=>typeof document>"u"?null:document.getElementById(Ka));return h.useEffect(()=>{e||a(document.getElementById(Ka))},[e]),e?rt.createPortal(t.jsx(ei,{}),e):null}const ai=`
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
`;class xe extends h.Component{constructor(){super(...arguments);Oa(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(r,n){console.error(`[atl2] bandeau « ${this.props.name} » en échec :`,r,n.componentStack)}render(){return this.state.dead?this.props.fallback??null:this.props.children}}const ni=8;function ri(){const{t:e,lang:a,token:r,dossiers:n,caps:i,markRow:o,dispatch:l}=F(),[s,p]=h.useState(!1),[x,c]=h.useState(!1),[d,u]=h.useState(!1),g=r||"home",{names:m,verdicts:b}=h.useMemo(()=>{const w=[],z={};return n.forEach(E=>{E.kind!=="target"||!E.name||(w.push(E.name),z[E.name]=Ir(E)||"")}),{names:w,verdicts:z}},[n]),v=h.useMemo(()=>m.length?Br(g,m,b,a):null,[g,m.length]);if(!i.pipe||s||!v||v.firstVisit||!v.added.length&&!v.gone.length)return null;const f=x?v.added:v.added.slice(0,ni),y=v.added.length-f.length,j=w=>{const z=n.find(E=>E.name===w);z&&(o(z.id),l({type:"popup",id:z.id}))};return t.jsxs("div",{className:"since",children:[t.jsxs("div",{className:"since-h",children:[t.jsxs("b",{children:["✨ ",e.sinceTitle(v.added.length,v.lastDate)]}),t.jsx("button",{type:"button",className:"x","aria-label":e.tourClose,title:e.tourClose,onClick:()=>{p(!0),$r(g,m,b,v.fp,a)},children:"×"})]}),!!v.added.length&&t.jsxs("div",{className:"since-c",children:[f.map(w=>t.jsx("button",{type:"button",onClick:()=>j(w),children:w},w)),y>0&&t.jsx("button",{type:"button",className:"mr",onClick:()=>c(!0),children:e.sinceMore(y)})]}),!!v.gone.length&&t.jsxs("div",{className:"since-c",children:[t.jsx("button",{type:"button",className:"mr",onClick:()=>u(w=>!w),children:e.sinceOut(v.gone.length)}),d&&v.gone.slice(0,20).map(w=>t.jsx("span",{className:"gone",children:w},w))]})]})}const Qt=600,Ye=62,Qa="atl2:fstats";function oi(){const{t:e,lang:a,data:r,caps:n,st:i,dispatch:o}=F(),[l,s]=h.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem(Qa)==="on"}catch{return!1}}),p=r.stats,x=h.useMemo(()=>((p==null?void 0:p.by_day)||[]).slice(-30),[p]),c=h.useMemo(()=>{if(p!=null&&p.since)return p.since;const y=new Date;return y.setDate(y.getDate()-((p==null?void 0:p.window_days)||30)),y.toISOString().slice(0,10)},[p==null?void 0:p.since,p==null?void 0:p.window_days]);if(!n.showFunnel||!p||typeof p.screened!="number")return null;const d=y=>a==="en"?y.slice(5,10):`${y.slice(8,10)}/${y.slice(5,7)}`,u=y=>y.toLocaleString(a==="en"?"en-US":"fr-FR"),g=x.reduce((y,j)=>Math.max(y,j.s||0),0),m=x.length?Qt/x.length:0,b=Math.max(4,m-4),v=x.length>=5&&g>0,f=[[p.screened,e.funScreened(d(c)),p.screened_today],...typeof p.kept=="number"?[[p.kept,e.funKept,p.kept_today]]:[],...typeof p.analyzed=="number"?[[p.analyzed,e.funAnalyzed,p.analyzed_today]]:[],...typeof p.shown=="number"?[[p.shown,e.funShown,void 0]]:[]];return t.jsxs("div",{className:"fstats"+(l?" on":""),children:[t.jsxs("div",{className:"fst-row",children:[f.map(([y,j,w],z)=>t.jsxs("span",{className:"fst-t",children:[z>0&&t.jsx("span",{className:"fst-ar",children:"→"}),t.jsx("b",{children:u(y)}),t.jsx("i",{children:j}),l&&typeof w=="number"&&w>0&&t.jsx("em",{children:e.funToday(w)})]},j)),v&&t.jsx("button",{type:"button",className:"fst-x","aria-expanded":l,title:l?e.fstatsHide:e.fstatsShow,onClick:()=>{const y=!l;s(y),y&&!i.mapFolded&&o({type:"mapFold",folded:!0});try{localStorage.setItem(Qa,y?"on":"off")}catch{}},children:l?"⌃":"⌄"})]}),l&&v&&t.jsxs("div",{className:"fst-act",children:[t.jsxs("div",{className:"fst-ah",children:[t.jsx("span",{children:e.actTitle}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#185c38"}}),e.actKept]}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#cfe0d6"}}),e.actScreened]})]}),t.jsxs("svg",{viewBox:`0 0 ${Qt} ${Ye}`,preserveAspectRatio:"none",role:"img","aria-label":e.actTitle,children:[x.map((y,j)=>{const w=(y.s||0)/g*(Ye-4),z=(y.m||0)/g*(Ye-4),E=j*m+(m-b)/2;return t.jsxs("g",{children:[t.jsx("title",{children:`${d(y.d)} — ${y.s} ${e.actScreened} · ${y.m} ${e.actKept}`}),t.jsx("rect",{x:E,y:Ye-2-w,width:b,height:w,fill:"#cfe0d6"}),t.jsx("rect",{x:E,y:Ye-2-z,width:b,height:z,fill:"#185c38"})]},y.d)}),t.jsx("line",{x1:0,y1:Ye-1.5,x2:Qt,y2:Ye-1.5,stroke:"#dbe5df",strokeWidth:1})]}),t.jsxs("div",{className:"fst-ax",children:[t.jsx("span",{children:d(x[0].d)}),t.jsx("span",{children:e.actToday})]})]})]})}const ii=[["Retenu","csKept"],["Analysé","csAnalysed"],["À trancher","csPending"],["Validé","csValidated"],["Écarté","csOut"]];function si({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:i}=F(),[o,l]=h.useState(""),[s,p]=h.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const x=(e.ceoStatus||"").trim(),c=(ot(e)||"").startsWith("CALL")&&je(e)===3,d=je(e)>=2,u=async m=>{if(o||m==="Analysé"&&!e.memoUrl&&!window.confirm(a.csAnaConfirm))return;l(m);const b=await i(e,m);l(""),b&&(p(!0),setTimeout(()=>p(!1),2200))},g=c?[["Validé",a.csYes],["Écarté",a.csNo]]:ii.filter(([m])=>!(d&&m==="Retenu")).map(([m,b])=>[m,a[b]]);return t.jsxs("div",{className:"csp",onClick:m=>m.stopPropagation(),children:[t.jsxs("div",{className:"csrow",children:[t.jsx("span",{className:"cslb",children:a.csLabel}),g.map(([m,b])=>t.jsx("button",{type:"button",className:"csb"+(x===m?" on":"")+(o===m?" busy":""),disabled:!!o,onClick:()=>{u(m)},children:b},m)),s&&t.jsx("span",{className:"csok",children:a.csSaved})]}),t.jsx(li,{o:e})]})}function li({o:e}){const{t:a,saveNote:r,flash:n}=F(),[i,o]=h.useState(e.ceoNote||""),[l,s]=h.useState(!1),[p,x]=h.useState(!1),c=i.trim()!==(e.ceoNote||"").trim(),d=async()=>{if(l||!c)return;s(!0);const u=await r(e,i.trim());s(!1),u&&(x(!0),setTimeout(()=>x(!1),2200),n(a.csNoteSaved))};return t.jsxs("div",{className:"csnote",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:a.csNotePh,value:i,disabled:l,onChange:u=>o(u.target.value),onKeyDown:u=>{u.key==="Enter"&&d()}}),t.jsx("button",{type:"button",disabled:l||!c,onClick:()=>{d()},children:p?a.csNoteSaved:a.csNoteOk})]})}function di({placeholder:e,onDone:a}){const{t:r}=F(),[n,i]=h.useState("");return t.jsxs("div",{className:"csnote why",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:e,value:n,autoFocus:!0,onChange:o=>i(o.target.value),onKeyDown:o=>{o.key==="Enter"&&a(n.trim()),o.key==="Escape"&&a("")},onBlur:()=>{n.trim()||a("")}}),t.jsx("button",{type:"button",onClick:()=>a(n.trim()),children:r.whySend})]})}function ci({o:e}){var v;const{t:a,token:r,caps:n,canWrite:i,stageOf:o,setStage:l,flashErr:s}=F(),[p,x]=h.useState(!1);if(!n.pipe||!i||n.lockActions||je(e)!==4)return null;const c=o(e),d=(c==null?void 0:c.stage)||"todo",u=async f=>{if(p||f===d)return;x(!0);const y=c;l(e,{stage:f,stamps:(c==null?void 0:c.stamps)||{}});const j=Math.max(Date.now(),Xa+=1);Xa=j;const w=await _r(r,{company:e.name||"",stage:f,cts:j,deal_id:e.airtableId,check_id:e.checkId});x(!1),!w.stale&&(w.ok||(l(e,y),s(a.actErr)))},g=(v=c==null?void 0:c.stamps)==null?void 0:v.sent,m=g?Math.floor((Date.now()-Date.parse(g))/864e5):0,b=d==="sent"&&g&&m>=4;return t.jsxs("div",{className:"stg",onClick:f=>f.stopPropagation(),children:[t.jsx("span",{className:"stglb",children:a.stgLabel}),a.stg.map(([f,y])=>t.jsx("button",{type:"button",className:"stgb"+(d===f?" on":""),disabled:p,onClick:()=>{u(f)},children:y},f)),b&&t.jsx("span",{className:"stgj4",children:a.j4Badge(m)})]})}let Xa=0;const jt=8,Nt=340;function Ja({text:e}){const a=e.split(/\*\*(.+?)\*\*/g);return t.jsx(t.Fragment,{children:a.map((r,n)=>n%2?t.jsx("b",{children:r},n):t.jsx("span",{children:r},n))})}function pi({steps:e,onClose:a}){const{t:r,dispatch:n,counts:i,st:o}=F(),[l,s]=h.useState(0),[p,x]=h.useState(null),[c,d]=h.useState([]),u=h.useRef(!1);h.useEffect(()=>{u.current||(u.current=!0,d(e.filter(j=>!!document.querySelector(j.need||j.sel))))},[e]);const g=c[l],m=l>=c.length;h.useEffect(()=>{g&&(g.ptab!==void 0&&o.ptab!==g.ptab&&n({type:"ptab",tab:g.ptab}),g.dens&&o.dens!==g.dens&&n({type:"dens",dens:g.dens}))},[l,g]);const b=h.useCallback(()=>{if(!g){x(null);return}const j=document.querySelector(g.sel);if(!j){x(null);return}j.scrollIntoView({block:"nearest",behavior:"smooth"}),x(j.getBoundingClientRect())},[g]);h.useLayoutEffect(()=>{b();const j=window.setTimeout(b,260),w=()=>b();return window.addEventListener("scroll",w,!0),window.addEventListener("resize",w),()=>{window.clearTimeout(j),window.removeEventListener("scroll",w,!0),window.removeEventListener("resize",w)}},[b]);const v=h.useRef(a);if(v.current=a,h.useEffect(()=>{const j=w=>{w.key==="Escape"?(w.preventDefault(),w.stopPropagation(),v.current()):w.key==="ArrowRight"?s(z=>z+1):w.key==="ArrowLeft"&&s(z=>Math.max(0,z-1))};return document.addEventListener("keydown",j,!0),()=>document.removeEventListener("keydown",j,!0)},[]),!c.length)return null;let f=null;if(m){const j=i[3]||0;j>0?f={title:j===1?r.ahaATitle1:r.ahaATitleN(j),body:r.ahaABody,btn:r.ahaABtn,go:()=>{n({type:"ptab",tab:3}),a()}}:(i[1]||0)>0?f={title:r.ahaRetTitle(i[1]||0),body:r.ahaRetBody,btn:r.ahaRetBtn,go:()=>{n({type:"ptab",tab:1}),a()}}:f={title:r.ahaCTitle,body:r.ahaCBody,btn:r.ahaCBtn,go:()=>{n({type:"modal",modal:"crit"}),a()}}}let y={left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:Nt};if(!m&&p){const j=p.bottom+14,z=window.innerHeight-j>190?j:Math.max(12,p.top-200);y={left:Math.min(Math.max(12,p.left+p.width/2-Nt/2),window.innerWidth-Nt-12),top:z,width:Nt}}return rt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"tour",role:"dialog","aria-modal":"true",children:[!m&&p&&t.jsx("div",{className:"tour-hole",style:{left:p.left-jt,top:p.top-jt,width:p.width+jt*2,height:p.height+jt*2}}),(m||!p)&&t.jsx("div",{className:"tour-veil"}),t.jsxs("div",{className:"tour-card"+(m?" fin":""),style:y,children:[m&&f?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:f.title}),t.jsx("p",{children:t.jsx(Ja,{text:f.body})}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",onClick:()=>s(c.length-1),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:f.go,children:f.btn})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"tour-n",children:r.tourStep(l+1,c.length)}),t.jsx("h3",{children:g==null?void 0:g.title}),t.jsx("p",{children:t.jsx(Ja,{text:(g==null?void 0:g.body)||""})}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",disabled:l===0,onClick:()=>s(j=>Math.max(0,j-1)),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:()=>s(j=>j+1),children:l===c.length-1?r.tourDone:r.tourNext})]})]}),t.jsx("button",{type:"button",className:"tour-x","aria-label":r.tourClose,title:r.tourClose,onClick:a,children:"×"})]})]})}),document.body)}function ui(){const{dossiers:e,scopedAll:a,pipe:r,mode:n,t:i,st:o,dispatch:l}=F(),s=r?a:e,p=h.useMemo(()=>s.filter(f=>nt(f.date)===0&&f.kind==="target"),[s]),x=h.useMemo(()=>r?a.filter(f=>je(f)===0).slice().sort((f,y)=>(y.date||"").localeCompare(f.date||"")):[],[a,r]),c=h.useMemo(()=>p.filter(f=>r?je(f)===0:!ve(f)),[p,r]),d=r?x:c,u=r?a.length-x.length:p.length-c.length,g=r?a.length:p.length,m=g?Math.min(100,u/g*100):100;let b;r?b=i.morningThesis(p.length,x.length):p.length?u===0?b=i.goalSourced(p.length):u>=p.length?b=i.goalCleared:b=i.goalDone(u,p.length):b=i.goalSourced(0);const v=()=>{if(!r){l({type:"pile",on:!0});return}l({type:"ptab",tab:0}),n==="client"&&x.length&&l({type:"chainStart",queue:x.map(f=>f.id)})};return t.jsxs("div",{className:"goal",children:[t.jsx("span",{className:"gtxt",dangerouslySetInnerHTML:{__html:b}}),t.jsx("div",{className:"pbar",children:t.jsx("i",{style:{width:m+"%"}})}),d.length>0&&t.jsx("button",{type:"button",className:"pilebtn",onClick:v,children:r?i.morningEval(d.length):o.pileMode?i.goalContinue(d.length):i.goalTreat}),t.jsx("span",{className:"gspace"})]})}function fi(){var q,k;const{t:e,lang:a,st:r,dispatch:n,token:i,fund:o,data:l,dossiers:s,mode:p,doSync:x,startTour:c}=F(),[d,u]=h.useState(null),[g,m]=h.useState([]),b=p==="client";h.useEffect(()=>{if(!i||!o)return;let T=!0;return(async()=>{const[P,L]=await Promise.all([Na(o),Rn(i)]);T&&(P&&u(P),m(L))})(),()=>{T=!1}},[i,o]);const v=(d==null?void 0:d.per_day)??null,f=((q=d==null?void 0:d.pool_order)==null?void 0:q.length)??0,y=g.filter(T=>T.status==="running").length,j=h.useMemo(()=>s.filter(T=>T.kind==="target"&&ve(T)).length,[s]),w=l.marketEstimate,z=typeof((k=l.stats)==null?void 0:k.screened)=="number"?l.stats.screened:j,E=w&&w>0?Math.min(100,Math.round(z/w*100)):null,R=T=>T.toLocaleString(a==="en"?"en-US":"fr-FR"),D=(o||"P").split(/\s+/).map(T=>T[0]).join("").slice(0,2).toUpperCase(),A=(()=>{const T=Date.parse(l.generatedAt||"");if(Number.isNaN(T))return"";const P=new Date(T),L=S=>String(S).padStart(2,"0");return`${L(P.getDate())}/${L(P.getMonth()+1)} à ${L(P.getHours())}:${L(P.getMinutes())}`})();return t.jsxs("div",{className:"ident",children:[t.jsxs("div",{className:"idtop",children:[t.jsxs("span",{className:"brand",children:[t.jsx("b",{children:D}),t.jsx("i",{children:o})]}),t.jsx("h1",{children:e.identTitle(o||"…")}),t.jsx("span",{className:"idsp"}),A&&t.jsx("span",{className:"idupd",children:e.identUpdatedAt(A)}),t.jsx("button",{type:"button",className:"ic",title:e.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),t.jsx("button",{type:"button",className:"ic",title:e.tourPlayTitle,onClick:c,children:"▶"})]}),t.jsxs("div",{className:"idmain",children:[E===null&&z>0&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsx("span",{className:"ev",children:t.jsx("b",{children:R(z)})})]}),E!==null&&w&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsxs("span",{className:"ev",children:[t.jsx("span",{className:"bar",children:t.jsx("i",{style:{width:E+"%"}})}),t.jsxs("b",{children:[E," %"]})]}),t.jsx("span",{className:"edv"}),t.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:e.identCoverageOf(z,w)}})]}),t.jsxs("span",{className:"engine",title:e.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[t.jsx("span",{className:"el",children:e.identEngine}),v!==null&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"ev",children:[t.jsx("b",{className:"q",children:v})," ",e.identPerDay]}),t.jsx("span",{className:"edv"})]}),v===0&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"epause",title:e.identPauseTitle,children:e.identPause}),t.jsx("span",{className:"edv"})]}),y>0&&t.jsxs("span",{className:"ev",children:["⏳ ",y]}),t.jsx("span",{className:"ego",children:e.identPending(f)}),t.jsx("button",{type:"button",className:"ebell",title:e.memoAlertBtn,onClick:T=>{T.stopPropagation(),n({type:"modal",modal:"memoalert"})},children:"🔔"})]}),t.jsx("span",{className:"idsp"}),t.jsxs("span",{className:"icgrp",children:[t.jsx("button",{type:"button",className:"ic",title:e.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),t.jsx("button",{type:"button",className:"ic",title:e.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),t.jsx("button",{type:"button",className:"ic",title:e.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),t.jsx("button",{type:"button",className:"ic",title:e.identSync,disabled:!b,onClick:x,children:"🔄"})]}),t.jsxs("span",{className:"isrch",children:["🔍",t.jsx("input",{placeholder:e.identSearch,value:r.filters.search,onChange:T=>n({type:"filters",patch:{search:T.target.value}})})]})]})]})}function mi(){const{t:e,counts:a,dispatch:r}=F();return t.jsxs("div",{className:"onb",children:[t.jsxs("div",{className:"onbh",children:[t.jsxs("span",{className:"tag",children:[t.jsx("i",{}),e.onbTag]}),t.jsx("h2",{dangerouslySetInnerHTML:{__html:e.onbTitle(a[1]+a[2]+a[3])}}),t.jsx("div",{className:"sub",children:e.onbSub(a[7])})]}),t.jsx("div",{className:"steps4",children:e.onbSteps.map(([n,i],o)=>{const l=o===e.onbSteps.length-1;return t.jsxs("div",{className:"s4"+(l?" go":""),children:[t.jsx("span",{className:"s4n",children:o+1}),t.jsx("div",{className:"s4t",children:n}),t.jsx("div",{className:"s4d",children:i}),l&&t.jsx("button",{type:"button",className:"s4b p",onClick:()=>r({type:"modal",modal:"rdv"}),children:e.onbCta})]},o)})})]})}const xi=["--p0","--p1","--p2","--p3","--p4"];function hi(){const{st:e,dispatch:a,counts:r,t:n,doUndo:i}=F(),o=h.useRef({});h.useEffect(()=>{o.current={...r}},[r]);const l=x=>{const c=o.current[x],d=c!==void 0?r[x]-c:0;return t.jsxs("button",{type:"button",className:"step"+(x===3&&r[3]>0?" wait":""),style:{"--c":`var(${xi[x]})`,"--tc":x<=3?"var(--ink)":"#fff"},"aria-selected":e.ptab===x,title:n.phelp[x],onClick:()=>a({type:"ptab",tab:x}),children:[t.jsxs("span",{className:"l",children:[n.plabels[x].toUpperCase(),x===3&&r[3]>0&&t.jsx("i",{className:"wd"})]}),t.jsxs("span",{className:"n"+(d>0?" up":d<0?" down":""),children:[r[x],d!==0&&t.jsxs("em",{className:"delta",children:[d>0?"+":"−",Math.abs(d)]})]})]},x)},s=(x,c,d)=>t.jsxs("button",{type:"button",className:"off"+(c?" view":""),style:{"--c":x===5?"var(--p5)":x===6?"var(--pf)":"var(--pv)"},"aria-selected":e.ptab===x,title:n.phelp[x],onClick:()=>a({type:"ptab",tab:x}),children:[t.jsx("span",{className:"l",children:d.toUpperCase()}),t.jsx("span",{className:"n",children:r[x]})]},x),p=(x,c,d,u=!1)=>t.jsx("button",{type:"button",className:"tool",title:c,disabled:u,onClick:d,children:x},c);return t.jsxs("div",{className:"funnel",children:[t.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(l)}),t.jsxs("div",{className:"offtrack",children:[s(5,!1,n.plabels[5]),s(7,!0,n.plabels[7]),s(6,!0,"★ "+n.plabels[6])]}),t.jsxs("span",{className:"ftools",children:[p("↩",n.toolUndo,i,e.undo.length===0),p("↺",n.toolReset,()=>{a({type:"reset"})}),p("⇅",n.toolSort,()=>a({type:"sort",key:e.sort.key})),p("▶",n.toolTuto,()=>a({type:"modal",modal:"tuto"})),p("⚙",n.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}const gi=["#eef1f5","#eaf6ef","#e2f0e8","#fdf3e2","#e2efe7","#fdeaea","#fdf6de","#e8eaee"];function bi(){const{st:e,dispatch:a,t:r,scoped:n,memoQueued:i,doAnalyse:o,mode:l}=F(),s=h.useRef(null),[p,x]=h.useState(60);h.useEffect(()=>{let g=0;const m=()=>{var j;const b=s.current;if(!b)return;const v=(j=b.parentElement)==null?void 0:j.querySelector('.funnel [aria-selected="true"]');if(!v)return;const f=v.getBoundingClientRect(),y=b.getBoundingClientRect();x(Math.max(20,Math.min(f.left+f.width/2-y.left,y.width-30)))};return g=requestAnimationFrame(m),window.addEventListener("resize",m),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",m)}},[e.ptab]);const c=e.ptab;let d=r.tuto[c].p;if(c===3){const g=n.filter(v=>v.kind==="target"&&je(v)===3),m=g.filter(v=>aa(v)==="auto").length,b=g.filter(v=>aa(v)==="cd").length;d=r.tutoPending(m,b,g.length)}const u=(()=>{if(l!=="client")return null;if(c===0&&n.length)return{label:r.tuto[0].a,run:()=>a({type:"chainStart",queue:n.map(g=>g.id)})};if(c===1){const g=n.filter(m=>m.kind==="target"&&je(m)===1&&!i.has(m.id)).slice(0,10);if(g.length)return{label:r.tuto[1].a,run:()=>g.forEach(m=>o(m))}}return null})();return t.jsxs("div",{ref:s,className:"tuto mini",style:{"--bg":gi[c],"--ax":p+"px","--stc":"var(--ink)"},children:[t.jsx("span",{className:"txt",children:t.jsxs("p",{children:[t.jsx("b",{className:"tstep",children:r.plabels[c].toUpperCase()}),t.jsx("span",{dangerouslySetInnerHTML:{__html:d}})]})}),u&&t.jsx("button",{type:"button",className:"tprim",onClick:u.run,children:u.label})]})}class Ke{constructor(){this._partials=new Float64Array(32),this._n=0}add(a){const r=this._partials;let n=0;for(let i=0;i<this._n&&i<32;i++){const o=r[i],l=a+o,s=Math.abs(a)<Math.abs(o)?a-(l-o):o-(l-a);s&&(r[n++]=s),a=l}return r[n]=a,this._n=n+1,this}valueOf(){const a=this._partials;let r=this._n,n,i,o,l=0;if(r>0){for(l=a[--r];r>0&&(n=l,i=a[--r],l=n+i,o=i-(l-n),!o););r>0&&(o<0&&a[r-1]<0||o>0&&a[r-1]>0)&&(i=o*2,n=l+i,i==n-l&&(l=n))}return l}}function*vi(e){for(const a of e)yield*a}function _n(e){return Array.from(vi(e))}var ae=1e-6,X=Math.PI,ze=X/2,Za=X/4,Te=X*2,De=180/X,Ce=X/180,oe=Math.abs,yi=Math.atan,ht=Math.atan2,de=Math.cos,ce=Math.sin,wi=Math.sign||function(e){return e>0?1:e<0?-1:0},Je=Math.sqrt;function ki(e){return e>1?0:e<-1?X:Math.acos(e)}function gt(e){return e>1?ze:e<-1?-ze:Math.asin(e)}function Ae(){}function Rt(e,a){e&&tn.hasOwnProperty(e.type)&&tn[e.type](e,a)}var en={Feature:function(e,a){Rt(e.geometry,a)},FeatureCollection:function(e,a){for(var r=e.features,n=-1,i=r.length;++n<i;)Rt(r[n].geometry,a)}},tn={Sphere:function(e,a){a.sphere()},Point:function(e,a){e=e.coordinates,a.point(e[0],e[1],e[2])},MultiPoint:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)e=r[n],a.point(e[0],e[1],e[2])},LineString:function(e,a){ia(e.coordinates,a,0)},MultiLineString:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)ia(r[n],a,0)},Polygon:function(e,a){an(e.coordinates,a)},MultiPolygon:function(e,a){for(var r=e.coordinates,n=-1,i=r.length;++n<i;)an(r[n],a)},GeometryCollection:function(e,a){for(var r=e.geometries,n=-1,i=r.length;++n<i;)Rt(r[n],a)}};function ia(e,a,r){var n=-1,i=e.length-r,o;for(a.lineStart();++n<i;)o=e[n],a.point(o[0],o[1],o[2]);a.lineEnd()}function an(e,a){var r=-1,n=e.length;for(a.polygonStart();++r<n;)ia(e[r],a,1);a.polygonEnd()}function Ze(e,a){e&&en.hasOwnProperty(e.type)?en[e.type](e,a):Rt(e,a)}function sa(e){return[ht(e[1],e[0]),gt(e[2])]}function tt(e){var a=e[0],r=e[1],n=de(r);return[n*de(a),n*ce(a),ce(r)]}function St(e,a){return e[0]*a[0]+e[1]*a[1]+e[2]*a[2]}function Ot(e,a){return[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]]}function Xt(e,a){e[0]+=a[0],e[1]+=a[1],e[2]+=a[2]}function Ct(e,a){return[e[0]*a,e[1]*a,e[2]*a]}function la(e){var a=Je(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=a,e[1]/=a,e[2]/=a}function da(e,a){function r(n,i){return n=e(n,i),a(n[0],n[1])}return e.invert&&a.invert&&(r.invert=function(n,i){return n=a.invert(n,i),n&&e.invert(n[0],n[1])}),r}function ca(e,a){return oe(e)>X&&(e-=Math.round(e/Te)*Te),[e,a]}ca.invert=ca;function ji(e,a,r){return(e%=Te)?a||r?da(rn(e),on(a,r)):rn(e):a||r?on(a,r):ca}function nn(e){return function(a,r){return a+=e,oe(a)>X&&(a-=Math.round(a/Te)*Te),[a,r]}}function rn(e){var a=nn(e);return a.invert=nn(-e),a}function on(e,a){var r=de(e),n=ce(e),i=de(a),o=ce(a);function l(s,p){var x=de(p),c=de(s)*x,d=ce(s)*x,u=ce(p),g=u*r+c*n;return[ht(d*i-g*o,c*r-u*n),gt(g*i+d*o)]}return l.invert=function(s,p){var x=de(p),c=de(s)*x,d=ce(s)*x,u=ce(p),g=u*i-d*o;return[ht(d*i+u*o,c*r+g*n),gt(g*r-c*n)]},l}function Ni(e,a,r,n,i,o){if(r){var l=de(a),s=ce(a),p=n*r;i==null?(i=a+n*Te,o=a-p/2):(i=sn(l,i),o=sn(l,o),(n>0?i<o:i>o)&&(i+=n*Te));for(var x,c=i;n>0?c>o:c<o;c-=p)x=sa([l,-s*de(c),-s*ce(c)]),e.point(x[0],x[1])}}function sn(e,a){a=tt(a),a[0]-=e,la(a);var r=ki(-a[1]);return((-a[2]<0?-r:r)+Te-ae)%Te}function Un(){var e=[],a;return{point:function(r,n,i){a.push([r,n,i])},lineStart:function(){e.push(a=[])},lineEnd:Ae,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],a=null,r}}}function Lt(e,a){return oe(e[0]-a[0])<ae&&oe(e[1]-a[1])<ae}function Et(e,a,r,n){this.x=e,this.z=a,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function Vn(e,a,r,n,i){var o=[],l=[],s,p;if(e.forEach(function(m){if(!((b=m.length-1)<=0)){var b,v=m[0],f=m[b],y;if(Lt(v,f)){if(!v[2]&&!f[2]){for(i.lineStart(),s=0;s<b;++s)i.point((v=m[s])[0],v[1]);i.lineEnd();return}f[0]+=2*ae}o.push(y=new Et(v,m,null,!0)),l.push(y.o=new Et(v,null,y,!1)),o.push(y=new Et(f,m,null,!1)),l.push(y.o=new Et(f,null,y,!0))}}),!!o.length){for(l.sort(a),ln(o),ln(l),s=0,p=l.length;s<p;++s)l[s].e=r=!r;for(var x=o[0],c,d;;){for(var u=x,g=!0;u.v;)if((u=u.n)===x)return;c=u.z,i.lineStart();do{if(u.v=u.o.v=!0,u.e){if(g)for(s=0,p=c.length;s<p;++s)i.point((d=c[s])[0],d[1]);else n(u.x,u.n.x,1,i);u=u.n}else{if(g)for(c=u.p.z,s=c.length-1;s>=0;--s)i.point((d=c[s])[0],d[1]);else n(u.x,u.p.x,-1,i);u=u.p}u=u.o,c=u.z,g=!g}while(!u.v);i.lineEnd()}}}function ln(e){if(a=e.length){for(var a,r=0,n=e[0],i;++r<a;)n.n=i=e[r],i.p=n,n=i;n.n=i=e[0],i.p=n}}function Jt(e){return oe(e[0])<=X?e[0]:wi(e[0])*((oe(e[0])+X)%Te-X)}function Si(e,a){var r=Jt(a),n=a[1],i=ce(n),o=[ce(r),-de(r),0],l=0,s=0,p=new Ke;i===1?n=ze+ae:i===-1&&(n=-ze-ae);for(var x=0,c=e.length;x<c;++x)if(u=(d=e[x]).length)for(var d,u,g=d[u-1],m=Jt(g),b=g[1]/2+Za,v=ce(b),f=de(b),y=0;y<u;++y,m=w,v=E,f=R,g=j){var j=d[y],w=Jt(j),z=j[1]/2+Za,E=ce(z),R=de(z),D=w-m,A=D>=0?1:-1,q=A*D,k=q>X,T=v*E;if(p.add(ht(T*A*ce(q),f*R+T*de(q))),l+=k?D+A*Te:D,k^m>=r^w>=r){var P=Ot(tt(g),tt(j));la(P);var L=Ot(o,P);la(L);var S=(k^D>=0?-1:1)*gt(L[2]);(n>S||n===S&&(P[0]||P[1]))&&(s+=k^D>=0?1:-1)}}return(l<-ae||l<ae&&p<-1e-12)^s&1}function Hn(e,a,r,n){return function(i){var o=a(i),l=Un(),s=a(l),p=!1,x,c,d,u={point:g,lineStart:b,lineEnd:v,polygonStart:function(){u.point=f,u.lineStart=y,u.lineEnd=j,c=[],x=[]},polygonEnd:function(){u.point=g,u.lineStart=b,u.lineEnd=v,c=_n(c);var w=Si(x,n);c.length?(p||(i.polygonStart(),p=!0),Vn(c,Ei,w,r,i)):w&&(p||(i.polygonStart(),p=!0),i.lineStart(),r(null,null,1,i),i.lineEnd()),p&&(i.polygonEnd(),p=!1),c=x=null},sphere:function(){i.polygonStart(),i.lineStart(),r(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function g(w,z){e(w,z)&&i.point(w,z)}function m(w,z){o.point(w,z)}function b(){u.point=m,o.lineStart()}function v(){u.point=g,o.lineEnd()}function f(w,z){d.push([w,z]),s.point(w,z)}function y(){s.lineStart(),d=[]}function j(){f(d[0][0],d[0][1]),s.lineEnd();var w=s.clean(),z=l.result(),E,R=z.length,D,A,q;if(d.pop(),x.push(d),d=null,!!R){if(w&1){if(A=z[0],(D=A.length-1)>0){for(p||(i.polygonStart(),p=!0),i.lineStart(),E=0;E<D;++E)i.point((q=A[E])[0],q[1]);i.lineEnd()}return}R>1&&w&2&&z.push(z.pop().concat(z.shift())),c.push(z.filter(Ci))}}return u}}function Ci(e){return e.length>1}function Ei(e,a){return((e=e.x)[0]<0?e[1]-ze-ae:ze-e[1])-((a=a.x)[0]<0?a[1]-ze-ae:ze-a[1])}const dn=Hn(function(){return!0},zi,Ti,[-X,-ze]);function zi(e){var a=NaN,r=NaN,n=NaN,i;return{lineStart:function(){e.lineStart(),i=1},point:function(o,l){var s=o>0?X:-X,p=oe(o-a);oe(p-X)<ae?(e.point(a,r=(r+l)/2>0?ze:-ze),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(s,r),e.point(o,r),i=0):n!==s&&p>=X&&(oe(a-n)<ae&&(a-=n*ae),oe(o-s)<ae&&(o-=s*ae),r=Ai(a,r,o,l),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(s,r),i=0),e.point(a=o,r=l),n=s},lineEnd:function(){e.lineEnd(),a=r=NaN},clean:function(){return 2-i}}}function Ai(e,a,r,n){var i,o,l=ce(e-r);return oe(l)>ae?yi((ce(a)*(o=de(n))*ce(r)-ce(n)*(i=de(a))*ce(e))/(i*o*l)):(a+n)/2}function Ti(e,a,r,n){var i;if(e==null)i=r*ze,n.point(-X,i),n.point(0,i),n.point(X,i),n.point(X,0),n.point(X,-i),n.point(0,-i),n.point(-X,-i),n.point(-X,0),n.point(-X,i);else if(oe(e[0]-a[0])>ae){var o=e[0]<a[0]?X:-X;i=r*o/2,n.point(-o,i),n.point(0,i),n.point(o,i)}else n.point(a[0],a[1])}function Li(e){var a=de(e),r=2*Ce,n=a>0,i=oe(a)>ae;function o(c,d,u,g){Ni(g,e,r,u,c,d)}function l(c,d){return de(c)*de(d)>a}function s(c){var d,u,g,m,b;return{lineStart:function(){m=g=!1,b=1},point:function(v,f){var y=[v,f],j,w=l(v,f),z=n?w?0:x(v,f):w?x(v+(v<0?X:-X),f):0;if(!d&&(m=g=w)&&c.lineStart(),w!==g&&(j=p(d,y),(!j||Lt(d,j)||Lt(y,j))&&(y[2]=1)),w!==g)b=0,w?(c.lineStart(),j=p(y,d),c.point(j[0],j[1])):(j=p(d,y),c.point(j[0],j[1],2),c.lineEnd()),d=j;else if(i&&d&&n^w){var E;!(z&u)&&(E=p(y,d,!0))&&(b=0,n?(c.lineStart(),c.point(E[0][0],E[0][1]),c.point(E[1][0],E[1][1]),c.lineEnd()):(c.point(E[1][0],E[1][1]),c.lineEnd(),c.lineStart(),c.point(E[0][0],E[0][1],3)))}w&&(!d||!Lt(d,y))&&c.point(y[0],y[1]),d=y,g=w,u=z},lineEnd:function(){g&&c.lineEnd(),d=null},clean:function(){return b|(m&&g)<<1}}}function p(c,d,u){var g=tt(c),m=tt(d),b=[1,0,0],v=Ot(g,m),f=St(v,v),y=v[0],j=f-y*y;if(!j)return!u&&c;var w=a*f/j,z=-a*y/j,E=Ot(b,v),R=Ct(b,w),D=Ct(v,z);Xt(R,D);var A=E,q=St(R,A),k=St(A,A),T=q*q-k*(St(R,R)-1);if(!(T<0)){var P=Je(T),L=Ct(A,(-q-P)/k);if(Xt(L,R),L=sa(L),!u)return L;var S=c[0],N=d[0],O=c[1],M=d[1],B;N<S&&(B=S,S=N,N=B);var V=N-S,H=oe(V-X)<ae,ee=H||V<ae;if(!H&&M<O&&(B=O,O=M,M=B),ee?H?O+M>0^L[1]<(oe(L[0]-S)<ae?O:M):O<=L[1]&&L[1]<=M:V>X^(S<=L[0]&&L[0]<=N)){var K=Ct(A,(-q+P)/k);return Xt(K,R),[L,sa(K)]}}}function x(c,d){var u=n?e:X-e,g=0;return c<-u?g|=1:c>u&&(g|=2),d<-u?g|=4:d>u&&(g|=8),g}return Hn(l,s,o,n?[0,-e]:[-X,e-X])}function Ri(e,a,r,n,i,o){var l=e[0],s=e[1],p=a[0],x=a[1],c=0,d=1,u=p-l,g=x-s,m;if(m=r-l,!(!u&&m>0)){if(m/=u,u<0){if(m<c)return;m<d&&(d=m)}else if(u>0){if(m>d)return;m>c&&(c=m)}if(m=i-l,!(!u&&m<0)){if(m/=u,u<0){if(m>d)return;m>c&&(c=m)}else if(u>0){if(m<c)return;m<d&&(d=m)}if(m=n-s,!(!g&&m>0)){if(m/=g,g<0){if(m<c)return;m<d&&(d=m)}else if(g>0){if(m>d)return;m>c&&(c=m)}if(m=o-s,!(!g&&m<0)){if(m/=g,g<0){if(m>d)return;m>c&&(c=m)}else if(g>0){if(m<c)return;m<d&&(d=m)}return c>0&&(e[0]=l+c*u,e[1]=s+c*g),d<1&&(a[0]=l+d*u,a[1]=s+d*g),!0}}}}}var ct=1e9,zt=-ct;function Oi(e,a,r,n){function i(x,c){return e<=x&&x<=r&&a<=c&&c<=n}function o(x,c,d,u){var g=0,m=0;if(x==null||(g=l(x,d))!==(m=l(c,d))||p(x,c)<0^d>0)do u.point(g===0||g===3?e:r,g>1?n:a);while((g=(g+d+4)%4)!==m);else u.point(c[0],c[1])}function l(x,c){return oe(x[0]-e)<ae?c>0?0:3:oe(x[0]-r)<ae?c>0?2:1:oe(x[1]-a)<ae?c>0?1:0:c>0?3:2}function s(x,c){return p(x.x,c.x)}function p(x,c){var d=l(x,1),u=l(c,1);return d!==u?d-u:d===0?c[1]-x[1]:d===1?x[0]-c[0]:d===2?x[1]-c[1]:c[0]-x[0]}return function(x){var c=x,d=Un(),u,g,m,b,v,f,y,j,w,z,E,R={point:D,lineStart:T,lineEnd:P,polygonStart:q,polygonEnd:k};function D(S,N){i(S,N)&&c.point(S,N)}function A(){for(var S=0,N=0,O=g.length;N<O;++N)for(var M=g[N],B=1,V=M.length,H=M[0],ee,K,_=H[0],Y=H[1];B<V;++B)ee=_,K=Y,H=M[B],_=H[0],Y=H[1],K<=n?Y>n&&(_-ee)*(n-K)>(Y-K)*(e-ee)&&++S:Y<=n&&(_-ee)*(n-K)<(Y-K)*(e-ee)&&--S;return S}function q(){c=d,u=[],g=[],E=!0}function k(){var S=A(),N=E&&S,O=(u=_n(u)).length;(N||O)&&(x.polygonStart(),N&&(x.lineStart(),o(null,null,1,x),x.lineEnd()),O&&Vn(u,s,S,o,x),x.polygonEnd()),c=x,u=g=m=null}function T(){R.point=L,g&&g.push(m=[]),z=!0,w=!1,y=j=NaN}function P(){u&&(L(b,v),f&&w&&d.rejoin(),u.push(d.result())),R.point=D,w&&c.lineEnd()}function L(S,N){var O=i(S,N);if(g&&m.push([S,N]),z)b=S,v=N,f=O,z=!1,O&&(c.lineStart(),c.point(S,N));else if(O&&w)c.point(S,N);else{var M=[y=Math.max(zt,Math.min(ct,y)),j=Math.max(zt,Math.min(ct,j))],B=[S=Math.max(zt,Math.min(ct,S)),N=Math.max(zt,Math.min(ct,N))];Ri(M,B,e,a,r,n)?(w||(c.lineStart(),c.point(M[0],M[1])),c.point(B[0],B[1]),O||c.lineEnd(),E=!1):O&&(c.lineStart(),c.point(S,N),E=!1)}y=S,j=N,w=O}return R}}const pa=e=>e;var Zt=new Ke,ua=new Ke,Yn,Wn,fa,ma,Ie={point:Ae,lineStart:Ae,lineEnd:Ae,polygonStart:function(){Ie.lineStart=Mi,Ie.lineEnd=Fi},polygonEnd:function(){Ie.lineStart=Ie.lineEnd=Ie.point=Ae,Zt.add(oe(ua)),ua=new Ke},result:function(){var e=Zt/2;return Zt=new Ke,e}};function Mi(){Ie.point=qi}function qi(e,a){Ie.point=Gn,Yn=fa=e,Wn=ma=a}function Gn(e,a){ua.add(ma*e-fa*a),fa=e,ma=a}function Fi(){Gn(Yn,Wn)}var at=1/0,Mt=at,bt=-at,qt=bt,Ft={point:Pi,lineStart:Ae,lineEnd:Ae,polygonStart:Ae,polygonEnd:Ae,result:function(){var e=[[at,Mt],[bt,qt]];return bt=qt=-(Mt=at=1/0),e}};function Pi(e,a){e<at&&(at=e),e>bt&&(bt=e),a<Mt&&(Mt=a),a>qt&&(qt=a)}var xa=0,ha=0,pt=0,Pt=0,Dt=0,et=0,ga=0,ba=0,ut=0,Kn,Qn,Oe,Me,Ee={point:Qe,lineStart:cn,lineEnd:pn,polygonStart:function(){Ee.lineStart=Bi,Ee.lineEnd=$i},polygonEnd:function(){Ee.point=Qe,Ee.lineStart=cn,Ee.lineEnd=pn},result:function(){var e=ut?[ga/ut,ba/ut]:et?[Pt/et,Dt/et]:pt?[xa/pt,ha/pt]:[NaN,NaN];return xa=ha=pt=Pt=Dt=et=ga=ba=ut=0,e}};function Qe(e,a){xa+=e,ha+=a,++pt}function cn(){Ee.point=Di}function Di(e,a){Ee.point=Ii,Qe(Oe=e,Me=a)}function Ii(e,a){var r=e-Oe,n=a-Me,i=Je(r*r+n*n);Pt+=i*(Oe+e)/2,Dt+=i*(Me+a)/2,et+=i,Qe(Oe=e,Me=a)}function pn(){Ee.point=Qe}function Bi(){Ee.point=_i}function $i(){Xn(Kn,Qn)}function _i(e,a){Ee.point=Xn,Qe(Kn=Oe=e,Qn=Me=a)}function Xn(e,a){var r=e-Oe,n=a-Me,i=Je(r*r+n*n);Pt+=i*(Oe+e)/2,Dt+=i*(Me+a)/2,et+=i,i=Me*e-Oe*a,ga+=i*(Oe+e),ba+=i*(Me+a),ut+=i*3,Qe(Oe=e,Me=a)}function Jn(e){this._context=e}Jn.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,a){switch(this._point){case 0:{this._context.moveTo(e,a),this._point=1;break}case 1:{this._context.lineTo(e,a);break}default:{this._context.moveTo(e+this._radius,a),this._context.arc(e,a,this._radius,0,Te);break}}},result:Ae};var va=new Ke,ea,Zn,er,ft,mt,vt={point:Ae,lineStart:function(){vt.point=Ui},lineEnd:function(){ea&&tr(Zn,er),vt.point=Ae},polygonStart:function(){ea=!0},polygonEnd:function(){ea=null},result:function(){var e=+va;return va=new Ke,e}};function Ui(e,a){vt.point=tr,Zn=ft=e,er=mt=a}function tr(e,a){ft-=e,mt-=a,va.add(Je(ft*ft+mt*mt)),ft=e,mt=a}let un,It,fn,mn;class xn{constructor(a){this._append=a==null?ar:Vi(a),this._radius=4.5,this._=""}pointRadius(a){return this._radius=+a,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(a,r){switch(this._point){case 0:{this._append`M${a},${r}`,this._point=1;break}case 1:{this._append`L${a},${r}`;break}default:{if(this._append`M${a},${r}`,this._radius!==fn||this._append!==It){const n=this._radius,i=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,fn=n,It=this._append,mn=this._,this._=i}this._+=mn;break}}}result(){const a=this._;return this._="",a.length?a:null}}function ar(e){let a=1;this._+=e[0];for(const r=e.length;a<r;++a)this._+=arguments[a]+e[a]}function Vi(e){const a=Math.floor(e);if(!(a>=0))throw new RangeError(`invalid digits: ${e}`);if(a>15)return ar;if(a!==un){const r=10**a;un=a,It=function(i){let o=1;this._+=i[0];for(const l=i.length;o<l;++o)this._+=Math.round(arguments[o]*r)/r+i[o]}}return It}function Hi(e,a){let r=3,n=4.5,i,o;function l(s){return s&&(typeof n=="function"&&o.pointRadius(+n.apply(this,arguments)),Ze(s,i(o))),o.result()}return l.area=function(s){return Ze(s,i(Ie)),Ie.result()},l.measure=function(s){return Ze(s,i(vt)),vt.result()},l.bounds=function(s){return Ze(s,i(Ft)),Ft.result()},l.centroid=function(s){return Ze(s,i(Ee)),Ee.result()},l.projection=function(s){return arguments.length?(i=s==null?(e=null,pa):(e=s).stream,l):e},l.context=function(s){return arguments.length?(o=s==null?(a=null,new xn(r)):new Jn(a=s),typeof n!="function"&&o.pointRadius(n),l):a},l.pointRadius=function(s){return arguments.length?(n=typeof s=="function"?s:(o.pointRadius(+s),+s),l):n},l.digits=function(s){if(!arguments.length)return r;if(s==null)r=null;else{const p=Math.floor(s);if(!(p>=0))throw new RangeError(`invalid digits: ${s}`);r=p}return a===null&&(o=new xn(r)),l},l.projection(e).digits(r).context(a)}function Aa(e){return function(a){var r=new ya;for(var n in e)r[n]=e[n];return r.stream=a,r}}function ya(){}ya.prototype={constructor:ya,point:function(e,a){this.stream.point(e,a)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Ta(e,a,r){var n=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),n!=null&&e.clipExtent(null),Ze(r,e.stream(Ft)),a(Ft.result()),n!=null&&e.clipExtent(n),e}function nr(e,a,r){return Ta(e,function(n){var i=a[1][0]-a[0][0],o=a[1][1]-a[0][1],l=Math.min(i/(n[1][0]-n[0][0]),o/(n[1][1]-n[0][1])),s=+a[0][0]+(i-l*(n[1][0]+n[0][0]))/2,p=+a[0][1]+(o-l*(n[1][1]+n[0][1]))/2;e.scale(150*l).translate([s,p])},r)}function Yi(e,a,r){return nr(e,[[0,0],a],r)}function Wi(e,a,r){return Ta(e,function(n){var i=+a,o=i/(n[1][0]-n[0][0]),l=(i-o*(n[1][0]+n[0][0]))/2,s=-o*n[0][1];e.scale(150*o).translate([l,s])},r)}function Gi(e,a,r){return Ta(e,function(n){var i=+a,o=i/(n[1][1]-n[0][1]),l=-o*n[0][0],s=(i-o*(n[1][1]+n[0][1]))/2;e.scale(150*o).translate([l,s])},r)}var hn=16,Ki=de(30*Ce);function gn(e,a){return+a?Xi(e,a):Qi(e)}function Qi(e){return Aa({point:function(a,r){a=e(a,r),this.stream.point(a[0],a[1])}})}function Xi(e,a){function r(n,i,o,l,s,p,x,c,d,u,g,m,b,v){var f=x-n,y=c-i,j=f*f+y*y;if(j>4*a&&b--){var w=l+u,z=s+g,E=p+m,R=Je(w*w+z*z+E*E),D=gt(E/=R),A=oe(oe(E)-1)<ae||oe(o-d)<ae?(o+d)/2:ht(z,w),q=e(A,D),k=q[0],T=q[1],P=k-n,L=T-i,S=y*P-f*L;(S*S/j>a||oe((f*P+y*L)/j-.5)>.3||l*u+s*g+p*m<Ki)&&(r(n,i,o,l,s,p,k,T,A,w/=R,z/=R,E,b,v),v.point(k,T),r(k,T,A,w,z,E,x,c,d,u,g,m,b,v))}}return function(n){var i,o,l,s,p,x,c,d,u,g,m,b,v={point:f,lineStart:y,lineEnd:w,polygonStart:function(){n.polygonStart(),v.lineStart=z},polygonEnd:function(){n.polygonEnd(),v.lineStart=y}};function f(D,A){D=e(D,A),n.point(D[0],D[1])}function y(){d=NaN,v.point=j,n.lineStart()}function j(D,A){var q=tt([D,A]),k=e(D,A);r(d,u,c,g,m,b,d=k[0],u=k[1],c=D,g=q[0],m=q[1],b=q[2],hn,n),n.point(d,u)}function w(){v.point=f,n.lineEnd()}function z(){y(),v.point=E,v.lineEnd=R}function E(D,A){j(i=D,A),o=d,l=u,s=g,p=m,x=b,v.point=j}function R(){r(d,u,c,g,m,b,o,l,i,s,p,x,hn,n),v.lineEnd=w,w()}return v}}var Ji=Aa({point:function(e,a){this.stream.point(e*Ce,a*Ce)}});function Zi(e){return Aa({point:function(a,r){var n=e(a,r);return this.stream.point(n[0],n[1])}})}function es(e,a,r,n,i){function o(l,s){return l*=n,s*=i,[a+e*l,r-e*s]}return o.invert=function(l,s){return[(l-a)/e*n,(r-s)/e*i]},o}function bn(e,a,r,n,i,o){if(!o)return es(e,a,r,n,i);var l=de(o),s=ce(o),p=l*e,x=s*e,c=l/e,d=s/e,u=(s*r-l*a)/e,g=(s*a+l*r)/e;function m(b,v){return b*=n,v*=i,[p*b-x*v+a,r-x*b-p*v]}return m.invert=function(b,v){return[n*(c*b-d*v+u),i*(g-d*b-c*v)]},m}function ts(e){return as(function(){return e})()}function as(e){var a,r=150,n=480,i=250,o=0,l=0,s=0,p=0,x=0,c,d=0,u=1,g=1,m=null,b=dn,v=null,f,y,j,w=pa,z=.5,E,R,D,A,q;function k(S){return D(S[0]*Ce,S[1]*Ce)}function T(S){return S=D.invert(S[0],S[1]),S&&[S[0]*De,S[1]*De]}k.stream=function(S){return A&&q===S?A:A=Ji(Zi(c)(b(E(w(q=S)))))},k.preclip=function(S){return arguments.length?(b=S,m=void 0,L()):b},k.postclip=function(S){return arguments.length?(w=S,v=f=y=j=null,L()):w},k.clipAngle=function(S){return arguments.length?(b=+S?Li(m=S*Ce):(m=null,dn),L()):m*De},k.clipExtent=function(S){return arguments.length?(w=S==null?(v=f=y=j=null,pa):Oi(v=+S[0][0],f=+S[0][1],y=+S[1][0],j=+S[1][1]),L()):v==null?null:[[v,f],[y,j]]},k.scale=function(S){return arguments.length?(r=+S,P()):r},k.translate=function(S){return arguments.length?(n=+S[0],i=+S[1],P()):[n,i]},k.center=function(S){return arguments.length?(o=S[0]%360*Ce,l=S[1]%360*Ce,P()):[o*De,l*De]},k.rotate=function(S){return arguments.length?(s=S[0]%360*Ce,p=S[1]%360*Ce,x=S.length>2?S[2]%360*Ce:0,P()):[s*De,p*De,x*De]},k.angle=function(S){return arguments.length?(d=S%360*Ce,P()):d*De},k.reflectX=function(S){return arguments.length?(u=S?-1:1,P()):u<0},k.reflectY=function(S){return arguments.length?(g=S?-1:1,P()):g<0},k.precision=function(S){return arguments.length?(E=gn(R,z=S*S),L()):Je(z)},k.fitExtent=function(S,N){return nr(k,S,N)},k.fitSize=function(S,N){return Yi(k,S,N)},k.fitWidth=function(S,N){return Wi(k,S,N)},k.fitHeight=function(S,N){return Gi(k,S,N)};function P(){var S=bn(r,0,0,u,g,d).apply(null,a(o,l)),N=bn(r,n-S[0],i-S[1],u,g,d);return c=ji(s,p,x),R=da(a,N),D=da(c,R),E=gn(R,z),L()}function L(){return A=q=null,k}return function(){return a=e.apply(this,arguments),k.invert=a.invert&&T,P()}}function rr(e,a){var r=a*a,n=r*r;return[e*(.8707-.131979*r+n*(-.013791+n*(.003971*r-.001529*n))),a*(1.007226+r*(.015085+n*(-.044475+.028874*r-.005916*n)))]}rr.invert=function(e,a){var r=a,n=25,i;do{var o=r*r,l=o*o;r-=i=(r*(1.007226+o*(.015085+l*(-.044475+.028874*o-.005916*l)))-a)/(1.007226+o*(.015085*3+l*(-.044475*7+.028874*9*o-.005916*11*l)))}while(oe(i)>ae&&--n>0);return[e/(.8707+(o=r*r)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),r]};function ns(){return ts(rr).scale(175.295)}function rs(e){return e}function os(e){if(e==null)return rs;var a,r,n=e.scale[0],i=e.scale[1],o=e.translate[0],l=e.translate[1];return function(s,p){p||(a=r=0);var x=2,c=s.length,d=new Array(c);for(d[0]=(a+=s[0])*n+o,d[1]=(r+=s[1])*i+l;x<c;)d[x]=s[x],++x;return d}}function is(e,a){for(var r,n=e.length,i=n-a;i<--n;)r=e[i],e[i++]=e[n],e[n]=r}function ss(e,a){return typeof a=="string"&&(a=e.objects[a]),a.type==="GeometryCollection"?{type:"FeatureCollection",features:a.geometries.map(function(r){return vn(e,r)})}:vn(e,a)}function vn(e,a){var r=a.id,n=a.bbox,i=a.properties==null?{}:a.properties,o=ls(e,a);return r==null&&n==null?{type:"Feature",properties:i,geometry:o}:n==null?{type:"Feature",id:r,properties:i,geometry:o}:{type:"Feature",id:r,bbox:n,properties:i,geometry:o}}function ls(e,a){var r=os(e.transform),n=e.arcs;function i(c,d){d.length&&d.pop();for(var u=n[c<0?~c:c],g=0,m=u.length;g<m;++g)d.push(r(u[g],g));c<0&&is(d,m)}function o(c){return r(c)}function l(c){for(var d=[],u=0,g=c.length;u<g;++u)i(c[u],d);return d.length<2&&d.push(d[0]),d}function s(c){for(var d=l(c);d.length<4;)d.push(d[0]);return d}function p(c){return c.map(s)}function x(c){var d=c.type,u;switch(d){case"GeometryCollection":return{type:d,geometries:c.geometries.map(x)};case"Point":u=o(c.coordinates);break;case"MultiPoint":u=c.coordinates.map(o);break;case"LineString":u=l(c.arcs);break;case"MultiLineString":u=c.arcs.map(l);break;case"Polygon":u=p(c.arcs);break;case"MultiPolygon":u=c.arcs.map(p);break;default:return null}return{type:d,coordinates:u}}return x(a)}const or={US:[{k:["new york","nyc","brooklyn","manhattan"],ll:[-74,40.7]},{k:["san francisco","sf","palo alto","mountain view","menlo park","san jose","oakland"],ll:[-122.3,37.6]},{k:["los angeles","santa monica","irvine"],ll:[-118.2,34.1]},{k:["seattle","bellevue","redmond"],ll:[-122.3,47.6]},{k:["austin"],ll:[-97.7,30.3]},{k:["boston","cambridge"],ll:[-71.1,42.4]},{k:["chicago"],ll:[-87.6,41.9]},{k:["miami"],ll:[-80.2,25.8]},{k:["denver","boulder"],ll:[-105,39.7]},{k:["atlanta"],ll:[-84.4,33.7]},{k:["washington","arlington","dc"],ll:[-77,38.9]},{k:["dallas","houston"],ll:[-96.8,31.5]},{k:["salt lake","provo"],ll:[-111.9,40.8]},{k:["phoenix","tempe"],ll:[-112.1,33.4]}],CA:[{k:["toronto","waterloo"],ll:[-79.4,43.7]},{k:["montreal"],ll:[-73.6,45.5]},{k:["vancouver"],ll:[-123.1,49.3]},{k:["calgary"],ll:[-114.1,51]},{k:["ottawa"],ll:[-75.7,45.4]}],AU:[{k:["sydney"],ll:[151.2,-33.9]},{k:["melbourne"],ll:[145,-37.8]},{k:["brisbane"],ll:[153,-27.5]},{k:["perth"],ll:[115.9,-32]}],BR:[{k:["sao paulo"],ll:[-46.6,-23.5]},{k:["rio"],ll:[-43.2,-22.9]}],IN:[{k:["bengaluru","bangalore"],ll:[77.6,13]},{k:["mumbai"],ll:[72.9,19.1]},{k:["delhi","gurgaon","gurugram","noida"],ll:[77.2,28.6]},{k:["hyderabad"],ll:[78.5,17.4]},{k:["chennai"],ll:[80.3,13.1]}],CN:[{k:["beijing","pekin"],ll:[116.4,39.9]},{k:["shanghai"],ll:[121.5,31.2]},{k:["shenzhen","canton","guangzhou"],ll:[113.9,22.7]}],RU:[{k:["moscou","moscow"],ll:[37.6,55.8]},{k:["saint petersbourg","saint petersburg"],ll:[30.3,59.9]}]},ds=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim();function cs(e,a,r){const n=or[e];if(!n||!n.length)return-1;const i=ds(a||"");if(i){for(let o=0;o<n.length;o++)if(n[o].k.some(l=>i.includes(l)))return o}return Math.floor(r*n.length)%n.length}let At=null;function ps(){return At||(At=(async()=>{var e;try{const a=await fetch("/world/countries-110m.json");if(!a.ok)return null;const r=await a.json(),n=(e=r==null?void 0:r.objects)==null?void 0:e.countries;if(!n)return null;const i=ss(r,n),o=ns().fitExtent([[8,8],[992,492]],{type:"Sphere"}),l=Hi(o),s=(i.features||[]).filter(c=>{var d;return(((d=c.properties)==null?void 0:d.name)||"")!=="Antarctica"}).map(c=>{var g;const d=((g=c.properties)==null?void 0:g.name)||"",u=l(c)||"";return u?{i2:Ur(d)||null,n:d,d:u}:null}).filter(c=>!!c);if(!s.length)return null;const p={};for(const[c,d]of Object.entries(Vr)){const u=o(d);u&&(p[c]={x:u[0],y:u[1]})}const x={};for(const[c,d]of Object.entries(or)){const u=d.map(g=>o(g.ll)).filter(g=>!!g).map(([g,m])=>({x:g,y:m}));u.length&&(x[c]=u)}return{key:"monde",viewBox:"0 0 1000 500",fr:"Monde",en:"World",countries:s,anchors:p,metros:x}}catch{return null}})(),At)}function us(e){const[a,r]=h.useState(null);return h.useEffect(()=>{if(!e||a)return;let n=!1;return ps().then(i=>{!n&&i&&r(i)}),()=>{n=!0}},[e,a]),a}const fs={"northam:US":{fx:.64,fy:.68,sx:.44,sy:.28},"northam:CA":{fx:.58,fy:.86,sx:.34,sy:.1},"oceania:AU":{fx:.72,fy:.62,sx:.34,sy:.3},"europe:RU":{fx:.18,fy:.62,sx:.14,sy:.3}},yn=["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"];function wn(e){let a=2166136261;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function ms(e,a){const[r,n]=h.useState(1);return h.useEffect(()=>{let i=!0,o=0;const l=()=>{var x;if(!i)return;const p=(x=e.current)==null?void 0:x.getScreenCTM();p&&p.a>0?n(p.a):o=requestAnimationFrame(l)};l();const s=new ResizeObserver(()=>l());return e.current&&s.observe(e.current),window.addEventListener("resize",l),()=>{i=!1,cancelAnimationFrame(o),s.disconnect(),window.removeEventListener("resize",l)}},[e,a]),r}function xs(){const{st:e,dispatch:a,scoped:r,pipe:n,markRow:i,markedId:o,byId:l,lang:s,t:p}=F(),x=h.useRef(null),c=h.useRef(null),d=us(e.continent==="monde"),u=e.continent==="monde"?d:Sa.find(k=>k.key===e.continent)||null,g=ms(x,e.continent+":"+e.mapFolded+":"+!!u),[m,b]=h.useState(new Map),[v,f]=h.useState(null);h.useEffect(()=>{const k=x.current;if(!k)return;const T=new Map;k.querySelectorAll("path[data-i2]").forEach(P=>{const L=P.dataset.i2;if(L)try{const S=P.getBBox();S.width>0&&T.set(L,{x:S.x,y:S.y,w:S.width,h:S.height})}catch{}}),b(T)},[e.continent,g,u]);const y=h.useMemo(()=>r.filter(k=>k.cc),[r]),j=h.useMemo(()=>{const k=new Map;return y.forEach(T=>k.set(T.cc,(k.get(T.cc)||0)+1)),k},[y]),w=e.continent==="monde"&&d?d.anchors:null,z=e.continent==="monde"&&d?d.metros:null,E=h.useMemo(()=>y.map(k=>{const T=wn(k.name||k.id||""),P=wn((k.id||k.name||"")+"·y");if(w&&k.cc){const M=z?z[k.cc]:void 0;if(M&&M.length){const V=cs(k.cc,k.city,T);if(V>=0&&M[V])return{d:k,x:M[V].x+(T-.5)*5,y:M[V].y+(P-.5)*5}}const B=w[k.cc];if(B)return{d:k,x:B.x+(T-.5)*10,y:B.y+(P-.5)*10}}const L=k.cc?m.get(k.cc):void 0;if(!L)return null;const S=fs[`${e.continent}:${k.cc||""}`];if(S)return{d:k,x:L.x+L.w*(S.fx+(T-.5)*S.sx),y:L.y+L.h*(S.fy+(P-.5)*S.sy)};const N=(T-.5)*Math.min(L.w*.55,60),O=(P-.5)*Math.min(L.h*.55,60);return{d:k,x:L.x+L.w/2+N,y:L.y+L.h/2+O}}).filter(k=>!!k),[y,m,w,z,e.continent]),R=k=>g>0?k/g:k,D=h.useMemo(()=>n?[0,1,2,3,4,5].map(k=>({c:yn[k],fr:p.plabels[k].toUpperCase(),en:p.plabels[k].toUpperCase(),n:r.filter(T=>T.kind==="target"&&je(T)===k).length})).filter(k=>k.n>0):Ia.map((k,T)=>({...k,n:r.filter(P=>Ba(P)===T).length})),[r,n,p.plabels]),A=o?l.get(o):null,q=A?E.find(k=>k.d.id===A.id):null;return u?t.jsxs("div",{className:"mapzone",ref:c,children:[t.jsxs("svg",{ref:x,viewBox:u.viewBox,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":s==="fr"?u.fr:u.en,onMouseLeave:()=>{f(null),i(null)},children:[t.jsx("g",{children:u.countries.map((k,T)=>t.jsx("g",{className:"ct"+(k.i2&&j.get(k.i2)?"":" empty"),children:t.jsx("path",{d:k.d,"data-i2":k.i2||void 0})},T))}),t.jsx("g",{children:E.map(k=>{const T=Ia[Ba(k.d)],P=!!fe(k.d),L=k.d.kind==="target",S=n&&L?yn[je(k.d)]:T.c,N=!n&&ve(k.d);return t.jsxs("g",{className:"co"+(N?" done":""),onMouseEnter:()=>{var B,V;const O=(B=c.current)==null?void 0:B.getBoundingClientRect(),M=(V=x.current)==null?void 0:V.createSVGPoint();if(M&&x.current&&O){M.x=k.x,M.y=k.y;const H=M.matrixTransform(x.current.getScreenCTM());f({x:H.x-O.left,y:H.y-O.top,label:k.d.name+" · "+(it(k.d.cc,s)||k.d.countryLabel||"")})}i(k.d.id)},onMouseLeave:()=>{f(null),i(null)},onClick:()=>{var B;const O=(B=x.current)==null?void 0:B.createSVGPoint();let M=null;if(O&&x.current){O.x=k.x,O.y=k.y;const V=O.matrixTransform(x.current.getScreenCTM());M={x:V.x,y:V.y}}a({type:"popup",id:k.d.id,anchor:M})},children:[t.jsx("circle",{className:"h",cx:k.x,cy:k.y,r:R(Math.max(11,T.px+7))}),t.jsx("circle",{className:"v",cx:k.x,cy:k.y,r:R(T.px),fill:S,stroke:P?"#DC2626":"#ffffff",strokeWidth:R(P?2.2:1.3)})]},k.d.id||k.d.name)})}),q&&t.jsx("circle",{className:"ring on",cx:q.x,cy:q.y,r:R(13),fill:"none",stroke:"#0F172A",strokeWidth:R(2)})]}),t.jsx("div",{className:"hov"+(v?" on":""),style:v?{left:v.x,top:v.y}:void 0,children:v==null?void 0:v.label}),t.jsx("div",{className:"legend",children:D.map((k,T)=>t.jsxs("span",{children:[t.jsx("i",{style:{"--c":k.c}}),s==="fr"?k.fr:k.en," ",t.jsx("b",{children:k.n})]},T))}),r.some(k=>!k.cc)&&t.jsx("div",{className:"legend",style:{left:"auto",right:10},children:t.jsxs("span",{children:["🌐 ",p.notLocated," ",t.jsx("b",{children:r.filter(k=>!k.cc).length})]})})]}):t.jsx("div",{className:"mapzone",ref:c})}function hs(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!r)return e;const i=(a==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||r[2],o=Number(r[3]);return a==="en"?`${i} ${o}, ${r[1]}`:`${o} ${i} ${r[1]}`}function gs(){const{st:e,dispatch:a,dossiers:r,t:n,pipe:i,contName:o,lang:l}=F(),s=e.filters,p=h.useMemo(()=>e.continent==="monde"?r:r.filter(m=>m.continent===e.continent),[r,e.continent]),x=m=>p.filter(b=>m!=="country"&&s.country.length&&!s.country.includes(b.cc||"")?!1:Ea(b,s,i,m==="country"?void 0:m)),c=h.useMemo(()=>{const m=x("win"),b=v=>m.filter(f=>(f.date?Math.max(0,Math.floor((Date.now()-Date.parse(f.date))/864e5)):9999)<=v).length;return[b(0),b(7),b(30),m.length]},[p,s,i]),d=h.useMemo(()=>s.day?x("win").filter(m=>(m.date||"").slice(0,10)===s.day).length:0,[p,s,i]),u=s.sector.length+s.country.length+s.engine.length+s.stage.length+s.angle.length+s.memoLevel.length+(s.signalOnly?1:0)+(s.day||s.win!=="all"?1:0)+(s.search.trim()?1:0),g=(m,b,v,f="fbtn")=>t.jsxs("button",{type:"button",className:f,"aria-expanded":e.openFacet===m,onClick:()=>a({type:"openFacet",facet:m}),children:[t.jsx("span",{className:"fl",children:b}),v>0&&t.jsx("span",{className:"n",children:v}),t.jsx("span",{className:"cv",children:"▾"})]},m);return t.jsxs(t.Fragment,{children:[t.jsxs("aside",{className:"fbar",children:[s.day?t.jsxs("div",{className:"seg",children:[t.jsxs("button",{type:"button","aria-pressed":!0,children:[n.fDay(hs(s.day,l)),t.jsx("b",{children:d})]}),t.jsx("button",{type:"button",onClick:()=>a({type:"filters",patch:{day:"",win:"all"}}),children:n.fDayOff})]}):t.jsx("div",{className:"seg",children:["1","7","30","all"].map((m,b)=>t.jsxs("button",{type:"button","aria-pressed":s.win===m,onClick:()=>a({type:"filters",patch:{win:m}}),children:[n.dates[b],t.jsx("b",{children:c[b]})]},m))}),t.jsxs("span",{className:"fsrch",children:["🔍",t.jsx("input",{placeholder:n.identSearch,value:s.search,onChange:m=>a({type:"filters",patch:{search:m.target.value}})})]}),t.jsxs("div",{className:"facets",children:[t.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":e.openFacet==="sig",onClick:()=>a({type:"openFacet",facet:"sig"}),children:[t.jsx("span",{className:"fl",children:n.fSignal}),s.signalOnly&&t.jsx("span",{className:"n",children:s.signalEngines.length||"✓"}),t.jsx("span",{className:"cv",children:"▾"})]}),s.sector.length===1?t.jsxs("button",{type:"button",className:"fbtn on","aria-expanded":e.openFacet==="sec",onClick:()=>a({type:"openFacet",facet:"sec"}),title:s.sector[0],children:[t.jsx("span",{className:"fl",children:n.fSector}),t.jsx("span",{className:"n",style:{maxWidth:"16ch",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.sector[0]}),t.jsx("span",{className:"cv",children:"▾"})]}):g("sec",n.fSector,s.sector.length),g("pay",n.fCountry,s.country.length),g("det",n.fEngine,s.engine.length),g("sta",n.fStage,s.stage.length),i&&g("ang","Angle",s.angle.length),i&&g("mem","Mémo",s.memoLevel.length)]}),t.jsx("span",{className:"fgrow"}),t.jsxs("div",{className:"frow2",children:[e.mapFolded&&t.jsxs("button",{type:"button",className:"mapbtn",onClick:()=>a({type:"mapFold",folded:!1}),children:["🗺 ",n.showMap.replace("🗺 ","")]}),u>0&&t.jsxs("button",{type:"button",className:"resetbtn on",title:n.clearTitle(p.length,o),onClick:()=>a({type:"reset"}),children:[t.jsx("span",{className:"rot",children:"↺"}),t.jsx("span",{children:n.clear(u)})]}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>a({type:"modal",modal:"alert"}),children:n.alertBtn})]})]}),e.openFacet&&t.jsx(bs,{poolFor:x})]})}function bs({poolFor:e}){const{st:a,dispatch:r,t:n,lang:i}=F(),o=a.filters,l=a.openFacet,{title:s,cols:p,options:x}=h.useMemo(()=>{if(l==="sig"){const m=e("signal").filter(f=>fe(f)),b=new Map;m.forEach(f=>{const y=f.engine||"";b.set(y,(b.get(y)||0)+1)});const v=[{v:"*",label:n.fpSigAll,n:m.length,html:!0,on:o.signalOnly&&!o.signalEngines.length},...na([...b.keys()],i).map(f=>({v:f,label:Ge(f)+" "+qe(f,i),n:b.get(f)||0,html:!1,on:o.signalOnly&&o.signalEngines.includes(f)}))];return{title:n.fpSigTitle,cols:2,options:v}}if(l==="sec"){const m=e("sector"),b=new Map;return m.forEach(v=>{v.sector&&b.set(v.sector,(b.get(v.sector)||0)+1)}),{title:n.fSector.toUpperCase(),cols:3,options:[...b.entries()].sort((v,f)=>f[1]-v[1]).map(([v,f])=>({v,label:v,n:f,html:!1,on:o.sector.includes(v)}))}}if(l==="pay"){const m=e("country"),b=new Map;return m.forEach(v=>{v.cc&&b.set(v.cc,(b.get(v.cc)||0)+1)}),{title:n.fCountry.toUpperCase(),cols:3,options:[...b.entries()].sort((v,f)=>f[1]-v[1]).map(([v,f])=>({v,label:it(v,i)||v,n:f,html:!1,on:o.country.includes(v)}))}}if(l==="det"){const m=e("engine"),b=new Map;return m.forEach(v=>{v.engine&&b.set(v.engine,(b.get(v.engine)||0)+1)}),{title:n.fEngine.toUpperCase(),cols:2,options:na([...b.keys()],i).map(v=>({v,label:Ge(v)+" "+qe(v,i)+' <span style="color:var(--dim);font-size:10px">· '+Hr(Yr(v),i)+"</span>",n:b.get(v)||0,html:!0,on:o.engine.includes(v)}))}}if(l==="ang"){const m=e("angle"),b=new Map;return m.forEach(v=>{v.angle&&b.set(v.angle,(b.get(v.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...b.entries()].sort((v,f)=>f[1]-v[1]).map(([v,f])=>({v,label:v.replace(/[_-]+/g," "),n:f,html:!1,on:o.angle.includes(v)}))}}if(l==="mem"){const m=e("memoLevel"),b=new Map;m.forEach(f=>{if(f.kind==="target"){const y=ja(f);b.set(y,(b.get(y)||0)+1)}});const v=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(f=>({v:String(f),label:v[f],n:b.get(f)||0,html:!1,on:o.memoLevel.includes(f)}))}}const u=e("stage"),g=new Map;return u.forEach(m=>{m.stage&&g.set(m.stage,(g.get(m.stage)||0)+1)}),{title:n.fStage.toUpperCase(),cols:2,options:[...g.entries()].sort((m,b)=>b[1]-m[1]).map(([m,b])=>({v:m,label:m,n:b,html:!1,on:o.stage.includes(m)}))}},[l,a,i]),c=u=>{if(l==="sig"){if(u==="*")r({type:"filters",patch:{signalOnly:!(o.signalOnly&&!o.signalEngines.length),signalEngines:[]}});else{const m=o.signalEngines.includes(u)?o.signalEngines.filter(b=>b!==u):[...o.signalEngines,u];r({type:"filters",patch:{signalOnly:!0,signalEngines:m}})}return}if(l==="mem"){r({type:"toggleMemoLevel",value:Number(u)});return}r({type:"toggleFacet",facet:l==="sec"?"sector":l==="pay"?"country":l==="det"?"engine":l==="ang"?"angle":"stage",value:u})},d=()=>{r(l==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:l==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:l==="sec"?"sector":l==="pay"?"country":l==="det"?"engine":l==="ang"?"angle":"stage"})};return t.jsxs("div",{className:"fpanel on",children:[t.jsxs("div",{className:"ph",children:[t.jsx("b",{children:s}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",onClick:d,children:n.fpNone}),t.jsx("button",{type:"button",onClick:()=>r({type:"openFacet",facet:null}),children:n.fpClose})]}),t.jsx("div",{className:"fcols"+(p===2?" two":""),children:x.map(u=>t.jsxs("button",{type:"button",className:"opt","aria-pressed":u.on,onClick:()=>c(u.v),children:[t.jsx("span",{className:"bx"}),u.html?t.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:u.label}}):t.jsx("span",{className:"l",children:u.label}),t.jsx("span",{className:"n",children:u.n})]},u.v))}),t.jsxs("div",{className:"pf",children:[t.jsx("span",{className:"t",children:n.alertReady}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:n.alertCreate})]})]})}function ir(e){return String(e||"").split(`
`).map(a=>a.replace(/^#{1,6}\s*/,"").replace(/[*_`>]/g,"").trimEnd()).filter(a=>a.trim().length>0)}function vs(e){var i;const a=[],r=new Set,n=o=>{const l=(o||"").trim();!l||r.has(l.toLowerCase())||(r.add(l.toLowerCase()),a.push(l))};return((e==null?void 0:e.companies_cited)||[]).forEach(o=>n(o==null?void 0:o.name)),(((i=e==null?void 0:e.prospective)==null?void 0:i.companies_to_evaluate)||[]).forEach(o=>n(o==null?void 0:o.name)),a}function kn({icon:e,title:a,hint:r,rows:n,addLabel:i,onEvaluate:o,onAddAll:l}){const{t:s}=F();return n.length?t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:[e," ",a]}),t.jsx("span",{className:"n",children:n.length}),l&&t.jsx("button",{type:"button",className:"rsblk-all",onClick:()=>l(n.map(p=>p.name)),children:i})]}),t.jsx("p",{className:"rsblk-hint",children:r}),t.jsx("div",{className:"rsblk-rows",children:n.map(p=>t.jsxs("div",{className:"rsrow",children:[t.jsxs("div",{className:"rsrow-t",children:[t.jsxs("div",{className:"rsrow-h",children:[t.jsx("span",{className:"nm",children:p.name}),p.chips.map(x=>t.jsx("span",{className:"ch",children:x},x))]}),p.line1&&t.jsx("p",{className:"w",children:p.line1}),p.line2&&t.jsx("p",{className:"r",children:p.line2})]}),t.jsx("button",{type:"button",className:"rsrow-go",onClick:()=>o(p.name),children:s.rsEvalOne})]},p.name))})]}):null}function sr({card:e,onEvaluate:a,onAddAll:r}){var l;const{t:n}=F(),i=((e==null?void 0:e.companies_cited)||[]).filter(s=>s&&(s.name||"").trim()).map(s=>({name:(s.name||"").trim(),line1:(s.what||"").trim(),line2:(s.role||"").trim(),chips:[(s.country||"").trim()].filter(Boolean)})),o=(((l=e==null?void 0:e.prospective)==null?void 0:l.companies_to_evaluate)||[]).filter(s=>s&&(s.name||"").trim()).map(s=>({name:(s.name||"").trim(),line1:(s.why||"").trim(),chips:[(s.country||"").trim(),(s.stage||"").trim()].filter(Boolean)}));return!i.length&&!o.length?t.jsx("p",{className:"rsblk-none",children:n.rsNoCompanies}):t.jsxs(t.Fragment,{children:[t.jsx(kn,{icon:"🏷",title:n.rsCited,hint:n.rsCitedHint,rows:i,addLabel:n.rsAddAll(i.length),onEvaluate:a,onAddAll:r}),t.jsx(kn,{icon:"🎯",title:n.rsMatch,hint:n.rsMatchHint,rows:o,addLabel:n.rsAddAll(o.length),onEvaluate:a,onAddAll:r})]})}function ys({card:e,onEvaluate:a,onAddAll:r}){var s,p,x;const{t:n}=F(),i=[e.industry,...e.market_tags||[],e.author].map(c=>(c||"").trim()).filter(Boolean),o=(((s=e.prospective)==null?void 0:s.criteria)||[]).filter(Boolean),l=(e.sources||[]).filter(c=>c&&c.url);return t.jsxs("div",{className:"rsdet",children:[e.market&&t.jsx("p",{className:"rsmk",children:e.market}),i.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:n.rsTags}),i.map(c=>t.jsx("span",{children:c},c))]}),t.jsxs("div",{className:"rsbody",children:[e.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${e.mindmap_png_b64}`,alt:n.rsMindmap}),t.jsx("figcaption",{children:n.rsMindmap})]}),t.jsx("div",{className:"rssum",children:ir(e.summary_md||"").map((c,d)=>t.jsx("p",{children:c},d))})]}),t.jsx(sr,{card:e,onEvaluate:a,onAddAll:r}),(((p=e.prospective)==null?void 0:p.conclusion)||o.length>0)&&t.jsxs("section",{className:"rsblk rspro",children:[t.jsx("div",{className:"rsblk-h",children:t.jsxs("b",{children:["🔮 ",n.rsConclusion]})}),((x=e.prospective)==null?void 0:x.conclusion)&&t.jsx("p",{className:"rspro-c",children:e.prospective.conclusion}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"rsblk-hint",children:n.rsCriteria}),t.jsx("ul",{className:"rspro-l",children:o.map(c=>t.jsx("li",{children:c},c))})]})]}),l.length>0&&t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:["🔗 ",n.rsSources]}),t.jsx("span",{className:"n",children:l.length})]}),t.jsx("div",{className:"rssrc",children:l.map(c=>t.jsx("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",children:c.label||c.url},c.url))})]})]})}function ws(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{day:"2-digit",month:"short"})}function ks({onClose:e,onEvaluate:a,onAddAll:r,bump:n,cbToken:i}){const{t:o,email:l}=F(),s=i,[p,x]=h.useState(null),[c,d]=h.useState(null),[u,g]=h.useState(null),[m,b]=h.useState(!1);h.useEffect(()=>{let f=!0;return(async()=>{const y=await On({email:l,cbToken:s});f&&x(y)})(),()=>{f=!1}},[l,s,n]);const v=f=>{d(f),g(null),b(!0),(async()=>{const y=await Wr(f.id);g(y),b(!1)})()};return t.jsxs("div",{className:"rsarch",children:[t.jsxs("div",{className:"rsarch-h",children:[c?t.jsx("button",{type:"button",className:"rsarch-back",onClick:()=>{d(null),g(null)},children:o.rsArchBack}):t.jsxs("b",{children:["🗂 ",o.rsArchTitle]}),c&&t.jsx("span",{className:"ti",children:c.title}),!c&&p&&t.jsx("span",{className:"n",children:p.length}),t.jsx("button",{type:"button",className:"rsx",title:o.rsClose,onClick:e,children:"×"})]}),!c&&t.jsxs("div",{className:"rsarch-list",children:[p===null&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchLoading}),p!==null&&p.length===0&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchEmpty}),(p||[]).map(f=>t.jsxs("button",{type:"button",className:"rsarch-row",onClick:()=>v(f),children:[t.jsx("span",{className:"ti",children:f.title}),t.jsxs("span",{className:"me",children:[ws(f.created_at),f.industry?` · ${f.industry}`:"",f.author?` · ${f.author}`:""]}),t.jsx("span",{className:"cn",children:o.rsRowCounts(f.cited_n||0,f.evaluate_n||0)}),t.jsx("span",{className:"st"+(f.published?" on":""),children:f.published?o.rsPub:o.rsPriv})]},f.id))]}),c&&t.jsxs("div",{className:"rsarch-one",children:[t.jsxs("div",{className:"rsarch-sub",children:[c.source_url&&t.jsx("a",{href:c.source_url,target:"_blank",rel:"noopener noreferrer",children:o.rsSource}),c.published&&c.page_url&&t.jsx("a",{href:c.page_url,target:"_blank",rel:"noopener noreferrer",children:o.rsLink}),t.jsx("span",{className:"st"+(c.published?" on":""),children:c.published?o.rsPub:o.rsPriv})]}),m&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchLoading}),!m&&!u&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchGone}),!m&&u&&t.jsx(ys,{card:u,onEvaluate:a,onAddAll:r})]})]})}const jn=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function js(){const{t:e,mode:a,token:r,email:n,askEvaluate:i,sessTally:o,dispatch:l,evalBusy:s,evalCards:p,caps:x,data:c,canWrite:d,source:u}=F(),g=a==="client",m=h.useMemo(()=>r||(u!=="default"?Gr():""),[r,u]),[b,v]=h.useState(""),[f,y]=h.useState(!1),[j,w]=h.useState(""),[z,E]=h.useState(!1),[R,D]=h.useState(""),[A,q]=h.useState([]),k=h.useRef(!1),[T,P]=h.useState(!1),[L,S]=h.useState(""),[N,O]=h.useState(""),[M,B]=h.useState(!1),[V,H]=h.useState(0),[ee,K]=h.useState(""),[_,Y]=h.useState(null),[W,ne]=h.useState(null),[le,ye]=h.useState(!1),[pe,Q]=h.useState(null),[Z,he]=h.useState(0),G=h.useRef(!1),ie=b.trim()?jn.test(b.trim())?e.evalUrl:e.evalName:e.evalWaiting,J=h.useMemo(()=>j.split(`
`).map(I=>I.trim()).filter(Boolean).slice(0,15),[j]);h.useEffect(()=>{if(typeof window>"u")return;const I=(new URLSearchParams(window.location.search).get("rs")||"").trim();!I||!/^https?:\/\//i.test(I)||(S(I),P(!0))},[]),h.useEffect(()=>{const I=te=>{var ge;const se=String(((ge=te.detail)==null?void 0:ge.url)||"").trim();!se||!/^https?:\/\//i.test(se)||(S(se),P(!0))};return window.addEventListener("ppmap:research",I),()=>window.removeEventListener("ppmap:research",I)},[]),h.useEffect(()=>{if(!d&&!m){Q(null);return}let I=!0;return(async()=>{const te=await On({email:n,cbToken:m});I&&Q(te.length)})(),()=>{I=!1}},[d,m,n,Z]);const Be=A.length?A:p,ue=c.credits,me=h.useCallback(I=>{const te=I.map(se=>(se||"").trim()).filter(Boolean);te.length&&(w(se=>{const ge=se.split(`
`).map(Se=>Se.trim()).filter(Boolean),$e=new Set(ge.map(Se=>Se.toLowerCase())),we=te.filter(Se=>!$e.has(Se.toLowerCase()));return[...ge,...we].slice(0,15).join(`
`)}),y(!0))},[]);h.useEffect(()=>{if(!M)return;H(0);const I=window.setInterval(()=>H(te=>te+1),1e3);return()=>window.clearInterval(I)},[M]);const Fe=()=>{const I=b.trim();I&&(i(null,I),v(""))},Ue=async()=>{if(!g){i(null,J[0]||"");return}if(!J.length||z)return;E(!0),k.current=!1;const I=[];for(let te=0;te<J.length&&!k.current;te++){D(e.evaluating(te+1,J.length,J[te]));const se=await Mn(r,J[te],"atelier2");if(I.unshift({name:se.company||J[te],verdict:se.verdict,reason:se.reason||"",remaining:se.remaining??null}),q([...I]),se.verdict==="quota"){I.unshift({name:"",verdict:"quota",reason:e.quota(J.length-te-1),remaining:0}),q([...I]),w(J.slice(te+1).join(`
`)),D(""),E(!1);return}}D(""),w(k.current?J.slice(I.length).join(`
`):""),E(!1)},Ne=async()=>{var se,ge,$e;if(G.current)return;const I=L.trim().replace(/\s+/g,""),te=N.trim();if(!I&&!te){K(e.rsNeed);return}if(!g&&!m){i(null,I||te.slice(0,80));return}G.current=!0,K(""),Y(null),ne(null),B(!0);try{const we=await Qr({url:I,text:te,email:n,cbToken:m});if(B(!1),!we||we.status!=="success"){K((we==null?void 0:we.message)||"Erreur");return}Y(we),P(!1),me((((se=we.prospective)==null?void 0:se.companies_to_evaluate)||[]).map(_e=>(_e==null?void 0:_e.name)||"")),ne({state:"pending"});const Se=await Xr(we,{email:n,cbToken:m});ne(Se.ok?{state:"ok",scopeLabel:((ge=Se.summary)==null?void 0:ge.scope_label)||"",scope:(($e=Se.summary)==null?void 0:$e.scope)||""}:{state:"fail",msg:Se.error||""}),Se.ok&&he(_e=>_e+1)}finally{G.current=!1,B(!1)}},Pe=[_==null?void 0:_.industry,...(_==null?void 0:_.market_tags)||[],_==null?void 0:_.author].map(I=>(I||"").trim()).filter(Boolean),st=(W==null?void 0:W.state)==="pending",Ut=W&&(st?t.jsx("span",{className:"rslink pend",children:e.rsSaving}):W.state==="ok"?t.jsx("span",{className:"rslink ok",children:W.scope&&W.scope!=="public"?e.rsSavedIn(W.scopeLabel||W.scope.replace(/^fund:/,"")):e.rsSaved}):t.jsx("span",{className:"rslink fail",title:W.msg,children:e.rsSaveFail})),Vt=vs(_).length;return t.jsxs("div",{className:"demand",children:[t.jsxs("div",{className:"drow",children:[t.jsxs("span",{className:"dfield",children:[t.jsx("input",{value:b,placeholder:e.evalPh,autoComplete:"off",maxLength:200,onChange:I=>v(I.target.value),onKeyDown:I=>{I.key==="Enter"&&Fe()}}),t.jsx("span",{className:"detect"+(jn.test(b.trim())?" url":""),children:ie})]}),t.jsxs("button",{type:"button",className:"evalbtn"+(s?" loading":""),disabled:s,onClick:Fe,children:[t.jsx("span",{className:"fill"}),e.evalGo]}),x.showCredits&&ue&&t.jsxs("button",{type:"button",className:"credits"+(ue.total_available<=0&&!ue.unlimited?" empty":""),onClick:()=>l({type:"modal",modal:"recharge"}),children:[t.jsx("span",{className:"cl",children:e.creditsCap}),t.jsx("b",{children:ue.unlimited?"∞":ue.total_available}),!ue.unlimited&&t.jsxs("span",{className:"cm",children:["/ ",ue.daily_grant+ue.purchased]}),ue.total_available<=0&&!ue.unlimited?t.jsx("span",{className:"rc",children:e.creditsRecharge}):t.jsx("span",{className:"cd",children:e.creditsToday})]})]}),t.jsxs("div",{className:"dunder",children:[t.jsx("button",{type:"button",className:"dmulti",onClick:()=>y(!f),children:e.evalMulti}),t.jsx("button",{type:"button",className:"dmulti dsearch"+(T?" on":""),onClick:()=>P(!T),children:e.rsOpen}),pe!==null&&pe>0&&t.jsx("button",{type:"button",className:"dmulti darch"+(le?" on":""),onClick:()=>ye(!le),children:e.rsArchOpen(pe)})]}),le&&t.jsx(ks,{bump:Z,cbToken:m,onClose:()=>ye(!1),onEvaluate:I=>i(null,I),onAddAll:me}),T&&t.jsxs("div",{className:"rsp on",children:[t.jsxs("div",{className:"rsf",children:[t.jsx("input",{className:"rsurl",value:L,placeholder:e.rsUrlPh,autoComplete:"off",spellCheck:!1,inputMode:"url",maxLength:600,onChange:I=>S(I.target.value),onKeyDown:I=>{I.key==="Enter"&&Ne()}}),t.jsx("span",{className:"rsor",children:e.rsOr}),t.jsx("textarea",{className:"rstext",value:N,placeholder:e.rsTextPh,onChange:I=>O(I.target.value)})]}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+(M?" loading":""),style:{justifyContent:"center"},disabled:M||st||!L.trim()&&!N.trim(),onClick:()=>{Ne()},children:[t.jsx("span",{className:"fill"}),M?`${Kr(L.trim())==="youtube"&&L.trim()?e.rsRunningVid:e.rsRunning} ${e.rsElapsed(V)}`:st?e.rsSaving:e.rsGo]}),t.jsx("span",{className:"hint",children:e.rsHint})]})]}),ee&&t.jsx("div",{className:"rserr",children:ee}),_&&t.jsxs("div",{className:"rscard",children:[t.jsxs("div",{className:"rsh",children:[t.jsx("b",{children:_.title}),_.source_url&&t.jsx("a",{href:_.source_url,target:"_blank",rel:"noopener noreferrer",children:e.rsSource}),t.jsx("button",{type:"button",className:"rsx",title:e.rsClose,onClick:()=>{Y(null),ne(null)},children:"×"})]}),_.market&&t.jsx("p",{className:"rsmk",children:_.market}),Pe.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:e.rsTags}),Pe.map(I=>t.jsx("span",{children:I},I))]}),t.jsxs("div",{className:"rsbody",children:[_.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${_.mindmap_png_b64}`,alt:e.rsMindmap}),t.jsx("figcaption",{children:e.rsMindmap})]}),t.jsx("div",{className:"rssum",children:ir(_.summary_md||"").map((I,te)=>t.jsx("p",{children:I},te))})]}),t.jsx(sr,{card:_,onEvaluate:I=>i(null,I),onAddAll:me}),t.jsxs("div",{className:"rsfoot",children:[t.jsx("span",{children:e.rsFound(Vt)}),Ut]})]}),f&&t.jsxs("div",{className:"bulk on",children:[t.jsx("textarea",{value:j,placeholder:e.bulkPh,onChange:I=>w(I.target.value.split(`
`).slice(0,15).join(`
`))}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+(z?" loading":""),style:{justifyContent:"center"},disabled:z||!J.length,onClick:()=>{Ue()},children:[t.jsx("span",{className:"fill"}),z&&R?R:e.evalList]}),t.jsx("span",{className:"hint",children:e.bulkCount(J.length)})]})]}),Be.slice(0,1).map((I,te)=>{const se=I.verdict==="kept",ge=I.verdict==="quota",$e=se?"var(--brand)":ge?"var(--bolt)":"var(--red)",we=se?"var(--brand-l)":ge?"#FEF3C7":"#FEF2F2";return t.jsxs("div",{className:"result on",style:{"--c":$e,"--bgc":we},children:[t.jsx("span",{className:"vv",children:t.jsx("span",{className:"vp",children:se?"✓ "+e.kept:ge?"⏳":"✗ "+e.dropped})}),I.name&&t.jsx("span",{className:"rn",children:I.name}),t.jsx("span",{className:"rr",children:I.reason?t.jsxs(t.Fragment,{children:[t.jsx("b",{children:e.why})," ",I.reason]}):null}),!ge&&t.jsx("button",{type:"button",className:"go",onClick:()=>l({type:"modal",modal:"space"}),children:e.seeSpace(se?e.statusKeep.replace("✅ ",""):e.statusDrop.replace("❌ ",""))})]},te)}),g&&(o.kept+o.dropped>0||Be.length>0)&&t.jsxs("div",{className:"tally",children:[t.jsx("span",{dangerouslySetInnerHTML:{__html:e.session(o.kept,o.dropped)}})," ","·"," ",t.jsx("a",{onClick:()=>l({type:"modal",modal:"space"}),children:e.seeMySpace})]})]})}function Ns(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Ss(){const{st:e,dispatch:a,byId:r,t:n,doDeep:i}=F(),o=e.memoConsole?r.get(e.memoConsole):null,l=h.useMemo(()=>o?[o.reasoning||"",Ns(o.summary||"")].filter(Boolean).join(`

`):"",[o]);if(!o)return null;const s=ot(o),p=ja(o);return t.jsx("div",{className:"demand",style:{paddingTop:0},children:t.jsxs("div",{className:"memo",style:{marginTop:0},children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"nm",children:o.name}),s&&t.jsx("span",{className:"vv",children:s}),typeof o.score=="number"&&t.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[o.score,"/100"]}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),t.jsx("div",{className:"tabs2",children:t.jsx("button",{type:"button","aria-selected":"true",children:n.memoSynth})}),t.jsx("div",{className:"mb2",children:l?l.split(`

`).map((x,c)=>t.jsx("p",{style:{margin:"0 0 10px"},children:x},c)):t.jsx("p",{children:n.memoNone})}),t.jsxs("div",{className:"mf",children:[Ca(o)?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"t",children:n.memoDeepHint}),t.jsx("button",{type:"button",className:"deep",onClick:()=>i(o),children:n.memoDeep})]}):t.jsx("span",{className:"t",children:p===2?n.critMemoKinds:""}),o.memoUrl&&t.jsx("a",{className:"go",href:o.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:n.memoOpenFull})]})]})})}function lr({name:e}){const{t:a,token:r,caps:n,mode:i,flashErr:o}=F(),[l,s]=h.useState(!1),[p,x]=h.useState(null);if(!n.pipe||i!=="client"||n.lockActions)return null;const c=async()=>{if(l)return;s(!0);const d=await Jr(r,e);if(s(!1),!d){o(a.actErr);return}x(d.results||[])};return t.jsxs("div",{className:"simb",onClick:d=>d.stopPropagation(),children:[t.jsx("button",{type:"button",className:"abtn",disabled:l,onClick:()=>{c()},children:l?a.similarBusy:a.similar}),p&&(p.length===0?t.jsx("p",{className:"mnote",children:a.similarNone}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"siml",children:p.map(d=>t.jsxs("li",{children:[t.jsx("b",{className:d.verdict==="kept"?"ok":"ko",children:d.company}),d.reason&&t.jsx("span",{children:d.reason})]},d.company))}),t.jsx("p",{className:"mnote dim",children:a.similarNote})]}))]})}function $t({spec:e}){const a=h.useRef(null),r=h.useRef(null),[n,i]=h.useState(!1);return h.useEffect(()=>{const o=a.current;if(!o)return;let l=!1;return $a({kind:"op",card:e},Math.max(240,o.clientWidth||320)).then(s=>{!l&&s&&o.isConnected&&o.replaceChildren(s)}),()=>{l=!0,o.replaceChildren()}},[e]),h.useEffect(()=>{if(!n)return;const o=r.current;if(!o)return;let l=!1;$a({kind:"op",card:e},Math.min(1100,Math.floor(window.innerWidth*.92))).then(p=>{!l&&p&&o.isConnected&&o.replaceChildren(p)});const s=p=>{p.key==="Escape"&&i(!1)};return document.addEventListener("keydown",s),()=>{l=!0,document.removeEventListener("keydown",s)}},[n,e]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:a,title:"Agrandir",onClick:()=>i(!0),style:{marginTop:10,lineHeight:0,border:"1px solid #E2E8F0",borderRadius:8,overflow:"hidden",cursor:"zoom-in"}}),n&&rt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"atl2-lb",onClick:()=>i(!1),children:[t.jsx("div",{ref:r,style:{lineHeight:0}}),t.jsx("button",{type:"button",className:"atl2-lb-x","aria-label":"Fermer",onClick:()=>i(!1),children:"×"})]})}),document.body)]})}const Cs=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function Es(e,a=!1){if(!e||typeof window>"u")return;const r=352,n=a?620:430,i=window.innerWidth,o=window.innerHeight,l=Math.min(Math.max(e.x-r/2,8),Math.max(8,i-r-8));let s=e.y+10;return s+n>o-8&&(s=Math.max(8,e.y-n-14)),s<8&&(s=8),{left:l,top:s}}function zs(){const{st:e,dispatch:a,byId:r,t:n,lang:i,caps:o,mode:l,askEvaluate:s,doAnalyse:p,doDecide:x,doPromote:c,doRepeche:d,doApproach:u,doDeep:g,doOnboard:m,outbound:b,evalBusy:v}=F(),f=e.popupId?r.get(e.popupId):null;if(!f)return null;const y=fe(f),j=je(f),w=ot(f),z=f.kind==="target",E=R=>{a({type:"filters",patch:R}),a({type:"popup",id:null})};return rt.createPortal(t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:Cs}),t.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),t.jsxs("div",{className:"pop on "+(e.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:Es(e.popupAnchor,!!f.card),onClick:R=>R.stopPropagation(),children:[t.jsxs("div",{className:"ph",children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h3",{children:f.name}),t.jsx("span",{className:"id",children:n.detected(n.daysAgo(nt(f.date)),qe(f.engine,i))})]}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),t.jsxs("div",{className:"pb",children:[t.jsxs("div",{className:"tags",children:[f.cc&&t.jsx("button",{type:"button",className:"hi",onClick:()=>E({country:[f.cc]}),children:(it(f.cc,i)||f.countryLabel||"").toUpperCase()}),f.sector&&t.jsx("button",{type:"button",onClick:()=>E({sector:[f.sector]}),children:f.sector.toUpperCase()}),f.stage&&t.jsx("button",{type:"button",onClick:()=>E({stage:[f.stage]}),children:f.stage.toUpperCase()}),typeof f.amountEur=="number"&&f.amountEur>0&&t.jsx("span",{className:"am2",children:yt(f.amountEur,i)})]}),(f.tagline||f.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:f.tagline||f.headline})]}),t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.how}),t.jsxs("p",{children:[Ge(f.engine)," ",t.jsx("b",{children:qe(f.engine,i)})," — ",Zr(f.engine,i),f.noteTitle&&t.jsxs(t.Fragment,{children:[" · ",f.noteTitle]})]}),y?t.jsxs("p",{className:"psig",style:{marginTop:9},children:[t.jsx(Xe,{o:f,lg:!0})," ",t.jsx(_t,{o:f,src:!0}),t.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[n.signaledOn(qn(y,i))," · ",n.win7(Fn(y,i))]})]}):t.jsx("p",{className:"pnos",style:{marginTop:5},children:n.noSignal})]}),f.card?t.jsx($t,{spec:f.card}):null,f.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:o.pipe&&j>=1?n.verdictCap:n.memo}),t.jsx("p",{className:"memo",children:f.reasoning})]}),o.pipe&&z&&w&&t.jsx("div",{className:"fld",children:t.jsxs("p",{style:{fontWeight:700},children:[w,typeof f.score=="number"&&f.score>0?" · "+n.score(f.score):""]})})]}),t.jsx(lr,{name:f.name}),t.jsxs("div",{className:"pf",children:[o.lockActions||l!=="client"&&o.pipe?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[t.jsx("span",{className:"fill"}),"🔒 ",n.lockbarCta]}):o.pipe?t.jsxs(t.Fragment,{children:[j===0&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:v,onClick:()=>s(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)]}),j===1&&t.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{p(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actAnalyse]}),j===2&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{c(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actPromote]}),j===3&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{x(f,!0),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actYes]}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{x(f,!1),a({type:"popup",id:null})},children:n.actNo}),Ca(f)&&t.jsx("button",{type:"button",className:"abtn",title:n.memoDeepHint,onClick:()=>{g(f),a({type:"popup",id:null})},children:n.memoDeep})]}),j===4&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{u(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actApproach]}),j===5&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{d(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actRepeche]}),f.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:f.id}),a({type:"popup",id:null})},children:"📄"}),b&&t.jsx("button",{type:"button",className:"abtn",title:n.actOnboardTitle,onClick:()=>{m(f),a({type:"popup",id:null})},children:"🚀"})]}):f.engine==="media"&&f.url&&o.showDemand?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{var R;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:f.url}}))}catch{}a({type:"popup",id:null}),(R=document.querySelector(".atl2 .demand"))==null||R.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rsOpen]}),t.jsx("button",{type:"button",className:"abtn",disabled:v,title:n.evalGoOn(f.name),onClick:()=>s(f),children:"⚡"})]}):t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:v,onClick:()=>s(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)," →"]}),f.website&&t.jsx("a",{className:"psite",href:f.website.startsWith("http")?f.website:"https://"+f.website,target:"_blank",rel:"noopener noreferrer",title:f.website,children:"🌐"})]})]})]}),document.body)}const As=new Set(["b","strong","i","em","u","br","p","ul","ol","li","h4","h5"]),Tt=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Ts(e){const a=String(e||"");if(!a)return"";let r="",n=0;for(;n<a.length;){const i=a.indexOf("<",n);if(i<0){r+=Tt(a.slice(n));break}r+=Tt(a.slice(n,i));const o=a.indexOf(">",i);if(o<0){r+=Tt(a.slice(i));break}const l=a.slice(i+1,o).trim(),s=/^(\/?)([a-zA-Z0-9]+)/.exec(l),p=s?s[2].toLowerCase():"";s&&As.has(p)?r+=`<${s[1]}${p}>`:r+=Tt(a.slice(i,o+1)),n=o+1}return r}const Nn=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function be({k:e,v:a,href:r}){return a==null||a===""?null:t.jsxs("div",{className:"cdl",children:[t.jsx("span",{className:"cdk",children:e}),r?t.jsx("a",{className:"cdv",href:r,target:"_blank",rel:"noopener noreferrer",children:String(a)}):t.jsx("span",{className:"cdv",children:String(a)})]})}function Ls({o:e}){const{t:a,lang:r,dispatch:n,caps:i}=F(),o=Bt(e),l=ot(e),s=(e.cribleStatus||"").trim().toUpperCase()||(o==="NO MATCH"?"NO MATCH":o==="MATCH"?"MATCH":""),p=[e.sector,e.stage,e.countryLabel,e.city,e.website,e.domain,e.linkedinCompany,e.angle,e.date].filter(Boolean).length,x=[e.contactName,e.contactEmail,e.contactLinkedin].filter(Boolean).length,c=[e.ceoStatus,e.ceoNote,i.pipe?e.memoUrl:"",i.pipe?e.memoPdfUrl:""].filter(Boolean).length+(typeof e.engagement=="number"&&e.engagement>0?1:0),d=h.useMemo(()=>[{k:"conv",lib:a.cdConviction,n:(s?1:0)+(e.reasoning?1:0)+(l?1:0)},{k:"ana",lib:a.cdAnalyse,n:(e.summary?1:0)+(i.pipe&&!i.lockActions?1:0)},{k:"soc",lib:a.cdSociete,n:p},{k:"ctc",lib:a.cdContact,n:x},{k:"suivi",lib:a.cdSuivi,n:c}].filter(b=>b.n>0),[e,a,s,l,p,x,c]),[u,g]=h.useState("");if(!d.length)return null;const m=d.some(b=>b.k===u)?u:d[0].k;return t.jsxs("div",{className:"cdtabs",children:[t.jsx("div",{className:"cdnav",role:"tablist",children:d.map(b=>t.jsx("button",{type:"button",role:"tab","aria-selected":m===b.k,className:m===b.k?"on":"",onClick:v=>{v.stopPropagation(),g(b.k)},children:b.lib},b.k))}),t.jsxs("div",{className:"cdbody",onClick:b=>b.stopPropagation(),children:[m==="conv"&&t.jsxs(t.Fragment,{children:[s&&t.jsxs("div",{className:"cdv1"+(s==="NO MATCH"?" out":""),children:[t.jsx("b",{children:s==="NO MATCH"?a.vOut:a.vKept}),t.jsx("span",{className:"cdw",children:a.cdCrible})]}),e.reasoning&&t.jsx("p",{className:"cdtxt",children:e.reasoning}),l&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:l}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"cdgrid",children:[t.jsx(be,{k:a.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(be,{k:a.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(be,{k:a.cdVerdictDate,v:Nn(e.verdictDate,r)})]})]}),m==="ana"&&t.jsxs(t.Fragment,{children:[e.summary&&t.jsx("div",{className:"cdrich",dangerouslySetInnerHTML:{__html:Ts(e.summary)}}),i.pipe&&!i.lockActions&&t.jsx(Rs,{o:e})]}),m==="soc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(be,{k:a.cdSector,v:e.sector}),t.jsx(be,{k:a.cdStage,v:e.stage}),t.jsx(be,{k:a.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(be,{k:a.cdSite,v:e.domain||e.website,href:e.website||void 0}),t.jsx(be,{k:a.cdLinkedin,v:e.linkedinCompany?"LinkedIn":"",href:e.linkedinCompany}),t.jsx(be,{k:a.cdAngle,v:e.angle}),t.jsx(be,{k:a.cdDetected,v:Nn(e.date,r)})]}),m==="ctc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(be,{k:a.cdName,v:e.contactName}),t.jsx(be,{k:a.cdEmail,v:e.contactEmail,href:e.contactEmail?`mailto:${e.contactEmail}`:void 0}),t.jsx(be,{k:a.cdLinkedin,v:e.contactLinkedin?"LinkedIn":"",href:e.contactLinkedin})]}),m==="suivi"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"cdgrid",children:[t.jsx(be,{k:a.cdCeoStatus,v:e.ceoStatus}),t.jsx(be,{k:a.cdEngagement,v:typeof e.engagement=="number"&&e.engagement>0?e.engagement:""})]}),e.ceoNote&&t.jsxs("p",{className:"cdtxt",children:["💬 ",e.ceoNote]}),i.pipe&&(e.memoUrl||e.memoPdfUrl)&&t.jsxs("div",{className:"cdacts",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"abtn",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemo," →"]}),e.memoPdfUrl&&t.jsx("a",{className:"abtn",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"})]})]})]})]})}function Rs({o:e}){const{t:a,token:r}=F(),[n,i]=h.useState(!1),[o,l]=h.useState(null),s=async()=>{n||(i(!0),l(await eo(r,e.name,e.website||e.domain||"")),i(!1))},p=(o==null?void 0:o.blocs)||{},x=[[a.qaVP,p.value_prop],[a.qaProduct,p.produit],[a.qaModel,p.modele],[a.qaSummary,p.synthese]],c=x.some(([,d])=>d);return t.jsxs("div",{className:"qab",children:[!o&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mnote dim",children:a.qaHint}),t.jsx("button",{type:"button",className:"abtn",disabled:n,onClick:()=>{s()},children:n?a.qaBusy:a.qaRun})]}),o&&c&&t.jsxs(t.Fragment,{children:[x.filter(([,d])=>d).map(([d,u])=>t.jsxs("div",{className:"qal",children:[t.jsx("span",{className:"qak",children:d}),t.jsx("p",{children:u})]},d)),!!(o.pages||[]).length&&t.jsx("p",{className:"mnote dim",children:a.qaSources((o.pages||[]).length)})]}),o&&!c&&t.jsx("p",{className:"mnote warn",children:o.quota?a.qaQuota:a.qaEmpty})]})}const dr={"CALL PENDING":"call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function La({o:e}){const{t:a}=F(),r=Bt(e),n=ot(e),i=je(e),o=aa(e),l=to(e);return t.jsxs("span",{className:"c-vd",children:[r?t.jsx("span",{className:"vd "+(r==="MATCH"?"v-ok":"v-no"),title:a.vt[r],children:r}):t.jsx("span",{className:"vd wait",children:a.actToEval}),n?t.jsx("span",{className:"vd "+(dr[n]||"v-cons"),title:a.vt[n],children:n}):i===1?t.jsx("span",{className:"vd wait",children:a.actMemoQueue}):null,i===3&&o==="auto"&&t.jsx("span",{className:"org au",title:a.orgAutoTitle,children:a.orgAuto}),i===3&&o==="cd"&&t.jsx("span",{className:"org cd",title:a.orgCdTitle,children:a.orgCd}),i===3&&l!==null&&t.jsx("span",{className:"wait2 "+(l>10?"hot":l>=5?"warm":""),title:a.waitTitle(l),children:a.waitChip(l)})]})}const wa=e=>e.length>22?e.slice(0,21)+"…":e;function Sn({o:e}){const{t:a,askEvaluate:r,evalBusy:n,lang:i}=F(),[o,l]=h.useState(!1);if(h.useEffect(()=>{n||l(!1)},[n]),ve(e)){const x=(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("span",{className:"verdict",style:{"--c":x?"var(--brand)":"var(--red)"},title:e.reasoning||"",children:[x?"✓":"✗"," ",t.jsx("b",{children:x?a.kept:a.dropped}),typeof e.score=="number"&&e.score>0?" "+e.score:""]})}const p=o&&n;return t.jsxs("button",{type:"button",className:"rev"+(p?" loading":""),disabled:n,title:a.evalGoOn(e.name),onClick:x=>{x.stopPropagation(),l(!0),r(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(wa(e.name))})]})}function cr({o:e}){const{t:a,caps:r,memoQueued:n,approachDone:i,doAnalyse:o,doDecide:l,doPromote:s,doRepeche:p,doApproach:x,dispatch:c}=F();if(r.lockActions)return t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"stbtn",style:{"--c":"var(--line2)","--tc":"var(--dim)"},onClick:g=>{g.stopPropagation(),c({type:"modal",modal:"rdv"})},children:[t.jsx("span",{className:"lk",children:"🔒"}),a.actLocked.replace("🔒 ","")]})});if(!r.pipe)return e.noCo&&e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:g=>{var m;g.stopPropagation();try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:e.url}}))}catch{}(m=document.querySelector(".atl2 .demand"))==null||m.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):e.noCo?t.jsx("span",{className:"cell"}):t.jsx("span",{className:"cell",children:t.jsx(Sn,{o:e})});const d=je(e),u=g=>m=>{m.stopPropagation(),g()};if(d===0)return t.jsx("span",{className:"cell",children:t.jsx(Sn,{o:e})});if(d===1){const g=n.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",disabled:g,onClick:u(()=>o(e)),children:g?a.actAnalyseQueued:a.actAnalyse})})}if(d===3)return t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:u(()=>l(e,!0)),children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:u(()=>l(e,!1)),children:a.actNo}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:u(()=>c({type:"memoConsole",id:e.id})),children:"📄"})]})});if(d===4){const g=i.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",disabled:g,onClick:u(()=>x(e)),children:g?a.actApproachSent:a.actApproach})})}return d===2?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:u(()=>s(e)),children:a.actPromote}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:u(()=>c({type:"memoConsole",id:e.id})),children:"📄"})]})}):d===5?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:u(()=>p(e)),children:a.actRepeche}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:u(()=>c({type:"memoConsole",id:e.id})),children:"📄"})]})}):t.jsx("span",{className:"cell",children:e.memoUrl?t.jsx("button",{type:"button",className:"memobtn read",onClick:u(()=>c({type:"memoConsole",id:e.id})),children:a.actMemo}):t.jsx("span",{className:"rc",children:"—"})})}function Os({o:e}){const{t:a,doThumb:r,thumbOf:n}=F(),i=n(e);return t.jsxs("span",{className:"thu",children:[t.jsx("button",{type:"button",className:"tb up"+(i==="yes"?" on":""),title:a.thumbUp,onClick:o=>{o.stopPropagation(),r(e,!0)},children:"👍"}),t.jsx("button",{type:"button",className:"tb dn"+(i==="no"?" on":""),title:a.thumbDn,onClick:o=>{o.stopPropagation(),r(e,!1)},children:"👎"})]})}function Ms({o:e}){const{lang:a}=F();return fe(e)?t.jsxs("span",{className:"c-sig",children:[t.jsx(Xe,{o:e}),t.jsx(_t,{o:e,src:!0})]}):t.jsx("span",{className:"c-sig",children:t.jsxs("span",{className:"mo",children:[Ge(e.engine||"")," ",qe(e.engine||"",a)]})})}function qs({o:e,locked:a,open:r,onToggle:n}){const{st:i,dispatch:o,caps:l,markRow:s,markedId:p,favIds:x,toggleFav:c}=F(),d=je(e),u=["#0F172A","#475C6E","#8798A8","#B9C6D2"],g=e.date?Math.max(0,Math.floor((Date.now()-Date.parse(e.date))/864e5)):9999,m=g<=0?0:g<=7?1:g<=30?2:3,b=l.pipe&&e.kind==="target"?["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"][d]:u[m],v=x.has(e.id),f=y=>{if(a)return;if(l.pipe||e.kind==="op"){n();return}const j=y.currentTarget.getBoundingClientRect();o({type:"popup",id:e.id,anchor:{x:j.left+Math.min(280,j.width/3),y:j.bottom}})};return t.jsxs(h.Fragment,{children:[t.jsxs("div",{className:"row"+(p===e.id||r?" on":"")+(r?" open":"")+(a?" locked":""),onMouseEnter:()=>s(e.id),onMouseLeave:()=>s(null),onClick:f,children:[t.jsx("span",{className:"pt",style:{"--c":b}}),t.jsx(hr,{o:e}),t.jsxs("span",{className:"nd",children:[t.jsxs("span",{className:"rnm",title:e.name,children:[l.pipe&&t.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:v?1:.35,padding:0,marginRight:4},onClick:y=>{y.stopPropagation(),c(e)},children:v?"★":"☆"}),e.name]}),t.jsx("span",{className:"rds",title:e.tagline||e.headline||"",children:[e.tagline,e.headline,e.reasoning].find(y=>y&&y!==e.name)||""}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial — cliquez pour déplier",children:"📖"})]}),t.jsx(Fs,{o:e}),t.jsx("span",{className:"c-stade",children:e.stage||""}),t.jsx(Ms,{o:e}),l.pipe&&t.jsx(La,{o:e}),l.pipe&&t.jsxs("span",{className:"c-sc",children:[typeof e.score=="number"?e.score:"",typeof e.score=="number"&&t.jsx("s",{children:"/100"})]}),t.jsx(cr,{o:e}),l.showThumbs&&t.jsx(Os,{o:e})]}),r&&!a&&t.jsx(Ds,{o:e})]})}function Fs({o:e}){const{lang:a,caps:r}=F();if(r.pipe&&e.kind==="target")return t.jsx("span",{className:"c-amt none",children:"—"});const n=yt(e.amountEur,a);return t.jsx("span",{className:"c-amt"+(n?"":" none"),children:n||"—"})}function Ps({o:e}){const{t:a,lang:r,askEvaluate:n,evalBusy:i,dispatch:o}=F(),l=(u,g=!1)=>m=>{m.stopPropagation(),g&&o({type:"continent",key:"monde"}),o({type:"filters",patch:u})},s=(()=>{const u=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return u?u[1].slice(0,40):""})(),p=yt(e.amountEur,r),x=(e.date||"").slice(0,10).split("-").reverse().join("/"),c=ve(e),d=c&&(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("div",{className:"card ops-open",children:[t.jsxs("div",{className:"oc-main",children:[e.decryptHtml?t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}):t.jsx("p",{className:"oc-head",children:e.headline||e.tagline||e.name}),t.jsxs("div",{className:"oc-meta",children:[e.sector&&t.jsx("button",{type:"button",onClick:l({sector:[e.sector]}),children:e.sector}),e.countryLabel&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:l({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:l({stage:[e.stage]}),children:e.stage}),p&&t.jsx("span",{className:"oc-amt",children:p}),x&&t.jsx("span",{children:x})]}),t.jsxs("div",{className:"oc-acts",children:[c?t.jsxs("span",{className:"verdict",style:{"--c":d?"var(--brand)":"var(--red)"},children:[d?"✓":"✗"," ",t.jsx("b",{children:d?a.kept:a.dropped})]}):e.noCo||e.engine==="media"&&e.url?t.jsxs(t.Fragment,{children:[e.url&&t.jsx("button",{type:"button",className:"oc-cta",onClick:u=>{var g;u.stopPropagation();try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:e.url}}))}catch{}(g=document.querySelector(".atl2 .demand"))==null||g.scrollIntoView({behavior:"smooth",block:"center"})},children:a.rowExtract}),!e.noCo&&t.jsx("button",{type:"button",className:"oc-ghost",disabled:i,onClick:u=>{u.stopPropagation(),n(e)},children:a.evalGoOn(wa(e.name))})]}):t.jsx("button",{type:"button",className:"oc-cta",disabled:i,onClick:u=>{u.stopPropagation(),n(e)},children:a.evalGoOn(wa(e.name))}),e.url&&t.jsxs("a",{className:"oc-src",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:u=>u.stopPropagation(),children:[(r==="fr"?"lire la source":"read the source")+(s?` · ${s}`:"")," ↗"]})]})]}),e.card&&t.jsx("div",{className:"oc-side",children:t.jsx($t,{spec:e.card})})]})}function Ds({o:e}){const{t:a,lang:r,dispatch:n,caps:i,outbound:o,doOnboard:l}=F();return!i.pipe&&e.kind==="op"?t.jsx(Ps,{o:e}):t.jsxs("div",{className:"card",style:{display:"grid"},children:[t.jsxs("div",{children:[e.tagline&&t.jsx("p",{className:"lead",children:e.tagline}),e.decryptHtml&&t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsx(Ls,{o:e}),t.jsx(si,{o:e}),t.jsx(ci,{o:e}),t.jsx(lr,{name:e.name}),t.jsxs("div",{className:"tg",children:[e.sector&&t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"filters",patch:{sector:[e.sector]}})},children:e.sector}),e.stage&&t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"filters",patch:{stage:[e.stage]}})},children:e.stage}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"continent",key:"monde"}),n({type:"filters",patch:{country:[e.cc]}})},children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.city&&t.jsx("span",{children:e.city})]})]}),t.jsxs("div",{className:"cside",children:[t.jsxs("div",{className:"top",children:[typeof e.score=="number"&&t.jsx("span",{className:"sc3",children:e.score}),t.jsx("span",{className:"vv",children:t.jsx(La,{o:e})})]}),e.card&&t.jsx($t,{spec:e.card}),t.jsxs("div",{className:"sec2",children:[t.jsxs("div",{className:"k2",children:[Ge(e.engine||"")," ",qe(e.engine||"",r)]}),fe(e)&&t.jsx("div",{style:{marginTop:8},children:t.jsx(Xe,{o:e})})]}),i.pipe&&(e.memoUrl||o)&&t.jsxs("div",{className:"sec2 acts2",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"btn p",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemo," →"]}),o&&t.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>l(e),children:a.actOnboard})]})]})]})}function Is({o:e,locked:a}){const{t:r,dispatch:n,caps:i,doDecide:o,lang:l}=F();if(!i.pipe&&e.kind==="op"){const x=yt(e.amountEur,l),c=(()=>{const u=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return u?u[1].slice(0,32):""})(),d=(u,g=!1)=>m=>{m.stopPropagation(),g&&n({type:"continent",key:"monde"}),n({type:"filters",patch:u})};return t.jsxs("div",{className:"dcard dops"+(a?" locked":""),children:[e.card&&t.jsx("div",{className:"dimg",children:t.jsx($t,{spec:e.card})}),t.jsxs("div",{className:"dh",children:[t.jsx("span",{className:"dnm",title:e.name,children:e.name}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial",children:"📖"})]}),e.headline&&e.headline!==e.name&&t.jsx("div",{className:"ddesc",children:e.headline}),t.jsxs("div",{className:"dtags",children:[e.sector&&t.jsx("button",{type:"button",onClick:d({sector:[e.sector]}),children:e.sector}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:d({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:d({stage:[e.stage]}),children:e.stage}),x&&t.jsx("span",{className:"damt",children:x})]}),t.jsxs("div",{className:"dsig",children:[t.jsxs("span",{className:"dmo",children:[Ge(e.engine||"")," ",qe(e.engine||"",l)]}),fe(e)&&t.jsx(Xe,{o:e})]}),e.url&&t.jsxs("a",{className:"dsrc",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:u=>u.stopPropagation(),children:[(l==="fr"?"lire la source":"read the source")+(c?` · ${c}`:"")," ↗"]}),!a&&t.jsx("div",{className:"dact",children:t.jsx(cr,{o:e})})]})}const s=je(e),p=["#E7EBF0","#E7F3EC","#C4E0D0","#7FC0A0","#0E8A4F","#DC2626"][s];return t.jsxs("div",{className:"dcard"+(a?" locked":""),style:{"--c":p},children:[t.jsxs("div",{className:"dh",children:[typeof e.score=="number"&&t.jsx("span",{className:"dsc",children:e.score}),t.jsx("span",{className:"dnm",title:e.name,children:e.name})]}),t.jsxs("div",{className:"dv",children:[t.jsx(La,{o:e}),fe(e)&&t.jsx(Xe,{o:e})]}),t.jsx("div",{className:"dmeta",children:[e.countryLabel,e.stage,e.sector].filter(Boolean).join(" · ").toUpperCase()}),(e.tagline||e.reasoning)&&t.jsx("div",{className:"ddesc",children:e.tagline||e.reasoning}),!a&&i.pipe&&s===3&&t.jsxs("div",{className:"dyn",children:[t.jsx("button",{type:"button",style:{"--c3":"#0A6B3D"},onClick:()=>o(e,!0),children:r.actYes}),t.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>o(e,!1),children:r.actNo})]}),!a&&e.memoUrl&&t.jsxs("button",{type:"button",className:"dmemo",onClick:()=>n({type:"memoConsole",id:e.id}),children:[r.actMemo," →"]})]})}function Bs(){const{t:e}=F(),[a,r]=h.useState(0);return h.useEffect(()=>{const n=window.setInterval(()=>r(i=>i+1),2400);return()=>window.clearInterval(n)},[]),t.jsxs("div",{className:"loadwait","aria-live":"polite",children:[t.jsxs("div",{className:"lw-top",children:[t.jsx("span",{className:"lw-dot"}),t.jsx("span",{className:"lw-msg",children:e.loadMsgs[a%e.loadMsgs.length]})]}),[0,1,2,3,4,5].map(n=>t.jsxs("div",{className:"lw-row",style:{"--d":`${n*.12}s`},children:[t.jsx("span",{className:"lw-c lw-c1"}),t.jsx("span",{className:"lw-c lw-c2"}),t.jsx("span",{className:"lw-c lw-c3"})]},n))]})}function $s({counts:e}){const{st:a,dispatch:r,t:n,lang:i}=F(),o=i==="en",l=c=>n.plabels[c]||"",s=[0,1,2,3,4,5,6,7].filter(c=>c!==a.ptab&&(e[c]||0)>0),p=s.includes(0)?0:s.sort((c,d)=>(e[d]||0)-(e[c]||0))[0];if(p===void 0)return t.jsx("div",{className:"void",children:n.emptyTab});const x=e[p]||0;return t.jsxs("div",{className:"void void-empty",children:[t.jsx("b",{children:o?`No “${l(a.ptab)}” for now.`:`0 ${l(a.ptab).toLowerCase().replace(/s$/,"")} pour l’instant.`}),t.jsx("span",{children:p===0?o?`${x} ${x>1?"files are":"file is"} waiting for your screening`:`${x} dossier${x>1?"s":""} attende${x>1?"nt":""} votre évaluation`:o?`${x} ${x>1?"files":"file"} in “${l(p)}”`:`${x} dossier${x>1?"s":""} dans « ${l(p)} »`}),t.jsxs("button",{type:"button",className:"abtn",onClick:()=>r({type:"ptab",tab:p}),children:[(o?"Open ":"Ouvrir ")+l(p)," →"]})]})}function _s(){const e=F(),{st:a,dispatch:r,t:n,caps:i,counts:o,scoped:l,lang:s,sessTally:p,data:x,dossiers:c,source:d}=e,u=d==="ops"?8:Dn,[g,m]=h.useState(new Set);h.useEffect(()=>{m(new Set)},[a.ptab,a.continent]);const[b,v]=h.useState(null);h.useEffect(()=>{v(null)},[a.ptab,a.continent]);const f=N=>m(O=>{const M=new Set(O);return M.has(N)?M.delete(N):M.add(N),M}),[y,j]=h.useState("all"),[w,z]=h.useState(!1);h.useEffect(()=>{j("all"),z(!1)},[a.ptab,a.continent]),h.useEffect(()=>{if(!w)return;const N=O=>{var M,B;(B=(M=O.target)==null?void 0:M.closest)!=null&&B.call(M,".atl2 .doable")||z(!1)};return document.addEventListener("click",N),()=>document.removeEventListener("click",N)},[w]);const E=h.useMemo(()=>{const N=za(l,a.sort);return y==="all"?N:d==="ops"?N.filter(O=>y==="explore"?!!O.noCo:!O.noCo):N.filter(O=>y==="explore"?ve(O):!ve(O))},[l,a.sort,d,y]),R=h.useMemo(()=>E.filter(N=>fe(N)&&!ve(N)).length,[E]),D=h.useMemo(()=>i.pipe?E:E.filter(N=>!ve(N)&&!N.noCo),[E,i.pipe]),A=d==="ops"?E.filter(N=>N.noCo).length:0,q=i.pipe?n.plabels[a.ptab].toLowerCase():d==="ops"?n.edLabel:a.filters.status==="retenu"?n.keptByStan:a.filters.status==="ecarte"?n.droppedByStan:n.toSend,k=(N,O,M="",B=!1)=>t.jsxs("button",{type:"button","data-s":N,className:M,"aria-sort":a.sort.key===N?a.sort.dir===1?"ascending":"descending":"none",style:B?{justifyContent:"flex-end"}:void 0,onClick:()=>r({type:"sort",key:N}),children:[O,t.jsx("span",{className:"ar",children:a.sort.key===N&&a.sort.dir===1?"▴":"▾"})]},N),T=h.useMemo(()=>{if(i.pipe||a.groupBy==="none")return null;const N=new Map;E.forEach(B=>{const V=B.engine||"?";N.has(V)||N.set(V,[]),N.get(V).push(B)});const O={ma:0,fundraising:1,nominations:2,recrutements:3,media:4},M=na([...N.keys()],s);return[...N.entries()].sort((B,V)=>{const H=O[B[0]]??10+M.indexOf(B[0]),ee=O[V[0]]??10+M.indexOf(V[0]);return H-ee})},[E,i.pipe,a.groupBy,s]),P=i.lockRowsAfter;let L=0;const S=(N,O)=>{let M=a.shown[O]||u;d==="ops"&&N.length-M<=4&&(M=N.length);const V=N.slice(0,M).map(H=>{const ee=P!==null&&L>=P;L++;const K=a.dens!=="maxi"&&(a.dens==="deplie"||(b?b==="open":d==="ops"&&!!H.decryptHtml)),_=g.has(H.id)?!K:K;return a.dens==="maxi"?t.jsx(Is,{o:H,locked:ee},H.id):t.jsx(qs,{o:H,locked:ee,open:_,onToggle:()=>f(H.id)},H.id)});if(N.length>M&&d!=="ops"){const H=Math.min(u,N.length-M),ee=N.length-M;V.push(t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>r({type:"more",group:O,by:u,base:u}),children:[t.jsx("span",{className:"more-label",children:n.more(H,ee)}),t.jsxs("span",{className:"more-meta",children:[n.moreMeta(M,N.length)," · ",ee," ",s==="en"?"remaining":ee>1?"restantes":"restante"]})]},O+":more"))}return V};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"listhead",children:[t.jsxs("span",{className:"main",children:[t.jsx("b",{children:E.length})," ",q]}),t.jsx("span",{className:"dot",children:"·"}),t.jsxs("span",{className:"ctx",children:[e.contName,i.pipe&&e.fund?" · "+e.fund:"",d==="ops"&&E.length>0&&" — "+n.edSplit(E.length-A,A)]}),i.showGroupBar&&t.jsxs("span",{className:"groupbar",children:[t.jsx("span",{className:"gl",children:n.groupBy}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>r({type:"groupBy",groupBy:"engine"}),children:n.groupEngine}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>r({type:"groupBy",groupBy:"none"}),children:n.groupNone})]}),a.pileMode&&t.jsx("button",{type:"button",className:"exitpile",onClick:()=>r({type:"pile",on:!1}),children:n.exitPile}),(i.showFunnel||d==="ops")&&t.jsx("span",{className:"dens",children:[["liste",n.densList],["ligne",n.densLigne],["maxi",n.densMaxi]].map(([N,O])=>t.jsxs("button",{type:"button","data-d":N,"aria-pressed":a.dens===N||N==="ligne"&&a.dens==="deplie",onClick:()=>r({type:"dens",dens:N}),children:[t.jsx("i",{children:t.jsx("em",{})}),t.jsx("b",{children:O})]},N))}),(i.showFunnel||d==="ops")&&a.dens!=="maxi"&&t.jsxs("span",{className:"foldall",children:[t.jsx("button",{type:"button","aria-pressed":b==="open",onClick:()=>{v("open"),m(new Set)},children:n.unfoldAll}),t.jsx("button",{type:"button","aria-pressed":b==="closed",onClick:()=>{v("closed"),m(new Set)},children:n.foldAllLbl}),d==="ops"&&t.jsxs("button",{type:"button","aria-pressed":b===null,onClick:()=>{v(null),m(new Set)},children:["📖 ",n.foldArts]})]}),(i.showFunnel||d==="ops")&&(()=>{var M;const N=[["all",n.doAll],["eval",d==="ops"?n.doEval:n.doTodo],["explore",d==="ops"?n.doExplore:n.doDone]],O=((M=N.find(([B])=>B===y))==null?void 0:M[1])||n.doAll;return t.jsxs("span",{className:"doable",children:[t.jsxs("button",{type:"button",className:"dobtn","aria-expanded":w,onClick:()=>z(B=>!B),children:[O,t.jsx("i",{children:"▾"})]}),w&&t.jsx("div",{className:"dolist",children:N.map(([B,V])=>t.jsx("button",{type:"button","aria-pressed":y===B,onClick:()=>{j(B),z(!1)},children:V},B))})]})})(),a.dens==="maxi"&&t.jsxs("label",{className:"sortsel",children:[t.jsx("span",{children:n.sortBy}),t.jsx("select",{value:a.sort.key,onChange:N=>r({type:"sort",key:N.target.value}),children:[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage]].map(([N,O])=>t.jsx("option",{value:N,children:O},N))})]}),i.showChain&&D.length>0&&t.jsxs("button",{type:"button",className:"chain",onClick:()=>r({type:"chainStart",queue:D.map(N=>N.id)}),children:[t.jsx("span",{className:"b",children:"▶"})," ",i.pipe?n.browse(D.length):n.chainAll(D.length)]})]}),R>0&&!a.filters.signalOnly&&t.jsxs("div",{className:"sigstrip",children:[t.jsx("span",{className:"t",dangerouslySetInnerHTML:{__html:n.sigStrip(R)}}),t.jsx("span",{className:"s",children:n.sigStripSub}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{signalOnly:!0,signalEngines:[]}}),children:n.sigStripGo})]}),a.dens!=="maxi"&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),k("country",n.colCountry),k("name",n.colCompany),k("amount",n.colAmount,"h-amt",!0),k("stage",n.colStage,"h-stade"),k("signal",n.colSignal,"h-sig"),i.pipe&&t.jsx("span",{className:"h-vd",children:n.colVerdict}),i.pipe&&k("score",n.colScore,"h-sc",!0),t.jsx("span",{}),i.showThumbs&&t.jsx("span",{className:"h-thu",children:n.colThumbs})]}),t.jsxs("div",{className:"list"+(a.dens==="maxi"?" maxi":a.dens==="ligne"||a.dens==="deplie"?" ligne":"")+(d==="ops"?" opsl":"")+(E.length?"":" list-empty"),children:[T?T.map(([N,O])=>t.jsxs(h.Fragment,{children:[a.dens!=="maxi"&&t.jsxs("div",{className:"grp-h",children:[t.jsx("span",{className:"ic",children:Ge(N)}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:qe(N,s)}),t.jsx("div",{className:"s",children:n.grpCount(O.filter(M=>!ve(M)).length,O.length)})]})]}),S(O,N)]},N)):S(E,"pt"+a.ptab),x.loading&&!c.length&&t.jsx(Bs,{}),!E.length&&!(x.loading&&!c.length)&&(i.pipe?t.jsx($s,{counts:o}):t.jsx("div",{className:"void",children:n.emptyScope}))]}),d==="ops"&&T&&(()=>{let N=0,O=0;for(const[B,V]of T){O+=V.length;let H=a.shown[B]||u;V.length-H<=4&&(H=V.length),N+=Math.min(V.length,H)}const M=O-N;return M<=0?null:t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>T.forEach(([B,V])=>r({type:"more",group:B,by:V.length,base:u})),children:[t.jsx("span",{className:"more-label",children:n.more(M,M)}),t.jsx("span",{className:"more-meta",children:n.moreMeta(N,O)})]})})(),i.showThumbs&&t.jsxs("p",{className:"learn",children:[n.learnLine,t.jsx("button",{type:"button",onClick:()=>r({type:"modal",modal:"crit"}),children:n.learnLink})]}),(p.kept>0||p.dropped>0)&&t.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:n.session(p.kept,p.dropped)}})]})}function Cn(e){let a=e==null?"":String(e);return/^[=+\-@\t]/.test(a)&&(a=`'${a}`),/[";\n\r]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}function Us(e,a){const r=ao(e);return a[{retenu:1,ana:2,pending:3,valide:4,ecarte:5}[r]??1]||""}function Vs(e,a){const n=[a.head.split("|").map(Cn).join(";")];for(const i of e){const o=a.stageOf(i);n.push([i.name||"",Us(i,a.plabels),Bt(i)||i.verdict||"",typeof i.score=="number"?i.score:"",i.countryLabel||i.cc||"",i.sector||"",o?a.stageLabel(o.stage):"",i.contactName||"",i.contactEmail||"",i.memoUrl||"",(i.date||"").slice(0,10),(i.reasoning||"").replace(/\s+/g," ").trim().slice(0,280)].map(Cn).join(";"))}return`\uFEFF${n.join(`\r
`)}`}function Hs(e){const a=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=`cibles_vue_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(n),n.click(),window.setTimeout(()=>{URL.revokeObjectURL(r);try{document.body.removeChild(n)}catch{}},400)}const Ys=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function Re({k:e,v:a}){return a==null||a===""?null:t.jsxs("div",{className:"dsl",children:[t.jsx("span",{children:e}),t.jsx("b",{children:String(a)})]})}function Ws({o:e,qa:a}){const{t:r,lang:n,fund:i}=F(),o=(e.cribleStatus||"").trim().toUpperCase()||(Bt(e)==="NO MATCH"?"NO MATCH":"MATCH"),l=ot(e),s=(a==null?void 0:a.blocs)||{},p=[[r.qaVP,s.value_prop],[r.qaProduct,s.produit],[r.qaModel,s.modele],[r.qaSummary,s.synthese]];return t.jsxs("article",{className:"dspage",children:[t.jsxs("header",{className:"dsh",children:[t.jsxs("div",{children:[t.jsx("b",{children:e.name}),e.tagline&&t.jsx("p",{children:e.tagline})]}),t.jsxs("span",{className:"dsv"+(o==="NO MATCH"?" out":""),children:[o==="NO MATCH"?r.vOut:r.vKept,l&&t.jsx("em",{children:l})]})]}),e.reasoning&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsWhy}),t.jsx("p",{className:"dstxt",children:e.reasoning})]}),t.jsxs("section",{className:"dsgrid",children:[t.jsx(Re,{k:r.cdSector,v:e.sector}),t.jsx(Re,{k:r.cdStage,v:e.stage}),t.jsx(Re,{k:r.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(Re,{k:r.cdSite,v:e.domain||e.website}),t.jsx(Re,{k:r.cdName,v:e.contactName}),t.jsx(Re,{k:r.cdEmail,v:e.contactEmail}),t.jsx(Re,{k:r.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(Re,{k:r.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(Re,{k:r.cdAngle,v:e.angle}),t.jsx(Re,{k:r.cdDetected,v:Ys(e.date,n)})]}),p.some(([,x])=>x)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsAnalysis}),p.filter(([,x])=>x).map(([x,c])=>t.jsxs("div",{className:"dsb",children:[t.jsx("span",{children:x}),t.jsx("p",{children:c})]},x))]}),(e.ceoStatus||e.ceoNote)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsDecision}),e.ceoStatus&&t.jsx("p",{className:"dstxt",children:t.jsx("b",{children:e.ceoStatus})}),e.ceoNote&&t.jsxs("p",{className:"dstxt",children:["« ",e.ceoNote," »"]})]}),t.jsx("footer",{className:"dsf",children:r.dsFoot(i)})]})}function Gs(){const{t:e,lang:a,token:r,scoped:n,fund:i,data:o,dispatch:l}=F(),[s,p]=h.useState({}),x=25,c=h.useMemo(()=>n.slice(0,x),[n]);h.useEffect(()=>{c.length&&no(r,c.map(g=>g.name)).then(p)},[r,c]);const d=o.stats,u=g=>g.toLocaleString(a==="en"?"en-US":"fr-FR");return t.jsxs("div",{className:"dossier",children:[t.jsxs("div",{className:"dsbar",children:[t.jsx("b",{children:e.dsTitle(c.length)}),n.length>x&&t.jsx("span",{className:"mnote dim",children:e.dsCap(x,n.length)}),t.jsx("span",{className:"dssp"}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{l({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)},children:e.printBtn})]}),t.jsxs("div",{className:"dscover",children:[t.jsx("b",{children:i}),d&&typeof d.screened=="number"&&t.jsxs("p",{children:[u(d.screened)," ",e.funScreened(""),typeof d.kept=="number"&&t.jsxs(t.Fragment,{children:[" · ",u(d.kept)," ",e.covKept]}),typeof o.marketEstimate=="number"&&o.marketEstimate>0&&t.jsxs(t.Fragment,{children:[" · ",e.covOf(u(o.marketEstimate)),", ",Math.round(d.screened/o.marketEstimate*100)," %"]})]})]}),c.map(g=>t.jsx(Ws,{o:g,qa:s[g.name]},g.id)),!c.length&&t.jsx("p",{className:"mnote",children:e.dsEmpty})]})}const Ks=50;function Ra({label:e,onPreview:a,onTest:r,readOnly:n}){const{t:i}=F(),[o,l]=h.useState(null),[s,p]=h.useState(!1),[x,c]=h.useState(""),[d,u]=h.useState(0),[g,m]=h.useState(""),[b,v]=h.useState(!1),f=h.useRef(null);h.useEffect(()=>()=>{f.current&&window.clearInterval(f.current)},[]);const y=async w=>{p(!0),c("");const z=await a();if(p(!1),z.ok){l(z);return}if(z.busy){c(i.alertPreviewBusy);return}if(!w){c(i.alertPreviewFail);return}u(Ks),f.current=window.setInterval(()=>{u(E=>E>1?E-1:(f.current&&window.clearInterval(f.current),y(!1),0))},1e3)},j=async()=>{if(n||b)return;v(!0),m("");const w=await r();v(!1),m(w.ok?i.alertTestOk(w.sentTo||""):w.error||i.actErr)};return t.jsxs("div",{className:"mailp",children:[t.jsxs("div",{className:"mailp-row",children:[t.jsx("button",{type:"button",className:"abtn",disabled:s||d>0,onClick:()=>{y(!0)},children:s?"…":e}),t.jsx("button",{type:"button",className:"abtn",disabled:n||b,onClick:()=>{j()},children:b?"…":i.alertTest})]}),d>0&&t.jsx("p",{className:"mnote",children:i.alertPreviewRetry(d)}),x&&t.jsx("p",{className:"mnote warn",children:x}),g&&t.jsx("p",{className:"mnote",children:g}),!g&&t.jsx("p",{className:"mnote dim",children:i.alertTestHint}),(o==null?void 0:o.ok)&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mnote",children:[t.jsx("b",{children:i.alertSubject})," ",o.subject]}),o.pending===0&&t.jsx("p",{className:"mnote warn",children:i.alertPreviewEmpty}),t.jsx("iframe",{className:"mailp-frame",sandbox:"",srcDoc:o.html,title:e})]})]})}const xt="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function ke({title:e,icon:a,children:r,wide:n}){const{dispatch:i}=F();return rt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:o=>{o.target===o.currentTarget&&i({type:"modal",modal:null})},children:t.jsxs("div",{className:"mcard",style:n?{width:"min(760px,100%)"}:void 0,children:[t.jsxs("div",{className:"mh",children:[a&&t.jsx("span",{className:"no g",children:a}),t.jsx("h2",{children:e}),t.jsx("button",{type:"button",className:"x",onClick:()=>i({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"mb",children:r})]})})}),document.body)}function Qs(){const{st:e}=F();switch(e.modal){case"chain":return t.jsx(Js,{});case"space":return t.jsx(Zs,{});case"alert":return t.jsx(el,{});case"queue":return t.jsx(ol,{});case"export":return t.jsx(il,{});case"plug":return t.jsx(dl,{});case"recharge":return t.jsx(pl,{});case"cover":return t.jsx(fl,{});case"dossier":return t.jsx(ul,{});case"crit":return t.jsx(ml,{});case"tuto":return t.jsx(xl,{});case"rdv":return t.jsx(Xs,{});case"memoalert":return t.jsx(sl,{});default:return null}}function Xs(){const{dispatch:e,fund:a}=F(),r=typeof document<"u"&&!!document.getElementById("rdv");return h.useEffect(()=>{r&&(e({type:"modal",modal:null}),Zo())},[r,e]),r?null:t.jsx(io,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0,onClose:()=>e({type:"modal",modal:null})})}function Js(){const{st:e,dispatch:a,byId:r,t:n,lang:i,mode:o,askEvaluate:l,evalBusy:s}=F(),p=o==="client",x=e.chain.queue.map(g=>r.get(g)).filter(g=>!!g),c=e.chain.idx,d=x[c],u=c>=x.length;return rt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",children:t.jsxs("div",{className:"fcard",children:[t.jsxs("div",{className:"fh",children:[t.jsx("span",{className:"c",children:u?n.finished:`${c+1} / ${x.length}`}),t.jsx("span",{className:"p",children:t.jsx("i",{style:{width:(u?100:c/Math.max(1,x.length)*100)+"%"}})}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"fb",children:u||!d?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🏁"}),t.jsx("div",{className:"t",children:n.chainDone}),t.jsx("div",{className:"s",children:n.chainDoneSub(x.length)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:d.name}),t.jsx("div",{className:"sub",children:[it(d.cc,i)||d.countryLabel,d.sector,d.stage,n.daysAgo(nt(d.date))].filter(Boolean).map(g=>String(g).toUpperCase()).join(" · ")}),t.jsxs("div",{className:"tags",children:[t.jsx("span",{className:"hi",children:qe(d.engine,i).toUpperCase()}),typeof d.amountEur=="number"&&d.amountEur>0&&t.jsx("span",{children:yt(d.amountEur,i)})]}),fe(d)&&t.jsxs("div",{style:{marginBottom:12},children:[t.jsx(Xe,{o:d,lg:!0})," ",t.jsx(_t,{o:d,src:!0})]}),(d.tagline||d.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:d.tagline||d.headline})]}),d.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.memo}),t.jsx("p",{className:"memo",children:d.reasoning})]}),p&&ve(d)&&t.jsxs("div",{className:"vbox",style:{"--c":We(d)==="retenu"?"var(--brand)":We(d)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[t.jsx("span",{className:"vt",children:We(d)==="retenu"?"✓ "+n.kept:We(d)==="pending"?"📞 "+n.pending:"✗ "+n.dropped}),t.jsx("span",{className:"vd",children:d.reasoning||""})]})]})}),t.jsxs("div",{className:"ff",children:[!u&&d&&!(p&&ve(d))&&t.jsxs("button",{type:"button",className:"evalbtn"+(s?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:s,onClick:()=>{l(d)},children:[t.jsx("span",{className:"fill"}),n.launchEval]}),t.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(u?{type:"modal",modal:null}:{type:"chainNext"}),children:u?n.closeBtn:n.skip})]})]})})}),document.body)}function Zs(){const{st:e,dispatch:a,dossiers:r,t:n,mode:i}=F(),o=i==="client",l=h.useMemo(()=>o?r.filter(d=>ve(d)):[],[r,o]),s=h.useMemo(()=>za(l.filter(d=>We(d)==="retenu"),{key:"signal",dir:-1}),[l]),p=h.useMemo(()=>l.filter(d=>We(d)==="ecarte"),[l]),x=e.spaceTab==="retenu"?s:p,c=e.spaceTab==="retenu"?"var(--brand)":"var(--red)";return t.jsxs(ke,{title:n.spaceTitle,children:[t.jsxs("div",{className:"sp-tabs",children:[t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":e.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",n.statusKeep.replace("✅ ","")," ",t.jsx("b",{children:s.length})]}),t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":e.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",n.statusDrop.replace("❌ ","")," ",t.jsx("b",{children:p.length})]})]}),x.length===0&&t.jsx("div",{className:"sp-empty",children:n.spEmpty}),x.slice(0,40).map(d=>t.jsxs("div",{className:"sp-row",children:[t.jsx("span",{className:"sc",style:{"--c":c},children:typeof d.score=="number"&&d.score>0?d.score:"—"}),t.jsxs("span",{children:[t.jsx("div",{className:"nm",children:d.name}),t.jsx("div",{className:"rr",children:d.reasoning||d.tagline||""})]})]},d.id)),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:n.spNote}})]})}function el(){const{mode:e}=F();return e==="client"||e==="apercu"?t.jsx(tl,{}):t.jsx(rl,{})}function tl(){const{t:e,token:a,flash:r,flashErr:n,mode:i}=F(),[o,l]=h.useState("d"),s=i!=="client";return t.jsxs(ke,{title:e.alertTitle,icon:"🔔",children:[t.jsxs("div",{className:"ntabs",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":o==="d",className:o==="d"?"on":"",onClick:()=>l("d"),children:e.alertTabDaily}),t.jsx("button",{type:"button",role:"tab","aria-selected":o==="w",className:o==="w"?"on":"",onClick:()=>l("w"),children:e.alertTabWeekly}),t.jsx("button",{type:"button",role:"tab","aria-selected":o==="m",className:o==="m"?"on":"",onClick:()=>l("m"),children:e.alertTabMarket})]}),o==="d"&&t.jsx(al,{t:e,token:a,readOnly:s,flash:r,flashErr:n}),o==="w"&&t.jsx(nl,{t:e,token:a,readOnly:s,flash:r,flashErr:n}),o==="m"&&t.jsx(pr,{})]})}function al({t:e,token:a,readOnly:r,flash:n,flashErr:i}){const[o,l]=h.useState(null),[s,p]=h.useState(!1),[x,c]=h.useState(0);h.useEffect(()=>{let m=!0;return p(!1),Va(a).then(b=>{m&&(b?l(b):p(!0))}),()=>{m=!1}},[a,x]);const d=m=>{r||Va(a,m).then(b=>{if(!b){i(e.actErr);return}l(b),b.throttled?i(e.alertThrottled):n(e.alertSaved)})};if(s)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>c(m=>m+1),children:e.retry})]});if(!o)return t.jsx("div",{className:"sp-empty",children:"…"});const u=m=>!o.sections||o.sections.includes(m),g=m=>{const b=o.sections||e.alertSec.map(([v])=>v);d({sections:u(m)?b.filter(v=>v!==m):[...b,m]})};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qrow",children:[t.jsxs("span",{children:[t.jsx("b",{children:e.alertDaily}),t.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:e.alertDailyHint})]}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":o.enabled===!0,disabled:r,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>d({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertHour}),t.jsxs("span",{className:"qset",children:[t.jsx("button",{type:"button",onClick:()=>d({hour:Math.max(6,(o.hour??7)-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[o.hour??7," h"]}),t.jsx("button",{type:"button",onClick:()=>d({hour:Math.min(21,(o.hour??7)+1)}),disabled:r,children:"＋"})]})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertDays}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("button",{type:"button",className:"abtn",disabled:r,style:o.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>d({days:"weekdays"}),children:e.alertWeekdays}),t.jsx("button",{type:"button",className:"abtn",disabled:r,style:o.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>d({days:"daily"}),children:e.alertEveryday})]})]}),t.jsx("div",{className:"qsec ok",children:e.alertSections}),t.jsx("div",{className:"secl",children:e.alertSec.map(([m,b])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:u(m),disabled:r,onChange:()=>g(m)}),t.jsxs("span",{children:[b,m==="market"&&t.jsxs("i",{children:[" ",e.alertSecSlow]})]})]},m))}),t.jsx("p",{className:"mnote dim",children:e.alertSecNote}),t.jsx(Ra,{label:e.alertPreview,readOnly:r,onPreview:()=>mo(a),onTest:()=>fo(a)}),o.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),o.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${e.updatedAt(o.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function nl({t:e,token:a,readOnly:r,flash:n,flashErr:i}){const[o,l]=h.useState(null),[s,p]=h.useState(!1),[x,c]=h.useState(0);h.useEffect(()=>{let m=!0;return p(!1),Ha(a).then(b=>{m&&(b?l(b):p(!0))}),()=>{m=!1}},[a,x]);const d=m=>{r||Ha(a,m).then(b=>{if(!b){i(e.actErr);return}l(b),n(e.alertSaved)})};if(s)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>c(m=>m+1),children:e.retry})]});if(!o)return t.jsx("div",{className:"sp-empty",children:"…"});const u=o.dow??0,g=o.hour??16;return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"lead2",children:e.alertWeeklySub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.alertWeeklyOn})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":o.enabled===!0,disabled:r,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>d({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertWeeklyWhen}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("select",{value:u,disabled:r,onChange:m=>d({dow:Number(m.target.value)}),children:e.alertDow.map((m,b)=>t.jsx("option",{value:b,children:m},m))}),t.jsx("button",{type:"button",onClick:()=>d({hour:Math.max(6,g-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[g," h"]}),t.jsx("button",{type:"button",onClick:()=>d({hour:Math.min(21,g+1)}),disabled:r,children:"＋"})]})]}),t.jsx(Ra,{label:e.alertPreviewWeekly,readOnly:r,onPreview:()=>ho(a),onTest:()=>xo(a)}),o.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),o.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${e.updatedAt(o.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function pr(){const{st:e,t:a,lang:r,scoped:n,contName:i,email:o}=F(),[l,s]=h.useState(o||""),[p,x]=h.useState(!1),[c,d]=h.useState(!1);h.useEffect(()=>{o&&s(o)},[o]);const u=e.filters,g=h.useMemo(()=>n.filter(f=>fe(f)).length,[n]),m=u.win==="1"?0:u.win==="7"?1:u.win==="30"?2:3,b=async()=>{if(!(!/.+@.+\..+/.test(l)||c)){d(!0);try{await fetch(`${ka}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.trim(),sectors:u.sector,countries:u.country,source:o?"atelier2-client":"atelier2",website:""})}),x(!0)}finally{d(!1)}}},v=[[a.amRows.continent,i],[a.amRows.since,a.amSince[m]],[a.amRows.signal,u.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,u.engine.length?u.engine.map(f=>qe(f,r)).join(", "):a.amAllEngines],[a.amRows.sectors,u.sector.length?u.sector.join(", "):a.amAllSectors],[a.amRows.countries,u.country.length?u.country.map(f=>it(f,r)||f).join(", "):a.amAllCountries],[a.amRows.stages,u.stage.length?u.stage.join(", "):a.amAllStages]];return p?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🔔"}),t.jsx("div",{className:"t",children:a.amOk}),t.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(l)}})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"crit",children:v.map(([f,y])=>t.jsxs("div",{className:"r",children:[t.jsx("span",{className:"k",children:f}),t.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:y}})]},f))}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:l,readOnly:!!o,onChange:f=>s(f.target.value),onKeyDown:f=>{f.key==="Enter"&&b()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(c?" loading":""),style:{padding:"12px 18px"},onClick:()=>void b(),children:[t.jsx("span",{className:"fill"}),a.amActivate]})]}),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(n.length,g)}}),t.jsx("p",{className:"mnote",children:a.amHonest})]})}function rl(){const{t:e}=F();return t.jsx(ke,{title:e.alertTitle,icon:"🔔",children:t.jsx(pr,{})})}function ol(){var b,v,f;const{t:e,token:a,fund:r,mode:n,flash:i}=F(),[o,l]=h.useState(null),[s,p]=h.useState([]),[x,c]=h.useState(0),d=n==="client";h.useEffect(()=>{let y=!0;return(async()=>{const[j,w]=await Promise.all([Na(r),Rn(a)]);y&&(j&&l(j),p(w))})(),()=>{y=!1}},[a,r,x]);const u=(o==null?void 0:o.per_day)??2,g=((b=o==null?void 0:o.analyzed_today)==null?void 0:b.length)??0,m=(v=o==null?void 0:o.tomorrow)!=null&&v.length?o.tomorrow:((o==null?void 0:o.pool_meta)||[]).slice(0,10);return t.jsxs(ke,{title:e.queueTitle,wide:!0,children:[t.jsxs("div",{className:"qbox",children:[t.jsx("div",{className:"qhead",children:t.jsx("b",{dangerouslySetInnerHTML:{__html:e.queueDone(g,g+(((f=o==null?void 0:o.pool_order)==null?void 0:f.length)??0))}})}),t.jsxs("div",{className:"qrate",children:[e.covRate," — ",t.jsx("b",{children:e.covRateNow(u)})]})]}),s.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec ok",children:["⏳ ",e.queueToday]}),t.jsx("div",{className:"qrows",children:s.map(y=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:y.company}),t.jsxs("span",{className:"qd",children:[y.memo_type,typeof y.est_min=="number"?` · ~${y.est_min} min`:""]}),t.jsx("span",{className:"qt",children:y.status}),y.url&&t.jsx("a",{className:"qgo",href:y.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.actMemo}),d&&y.status==="error"&&t.jsx("button",{type:"button",className:"qgo an",onClick:()=>{Ua(a,y.company,"retry").then(()=>c(j=>j+1))},children:e.queueRetry}),d&&y.status!=="done"&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{Ua(a,y.company,"delete").then(()=>c(j=>j+1))},children:e.queueDelete})]},y.company))})]}),t.jsxs("div",{className:"qsec todo",children:["⚡ ",e.queueTomorrow]}),t.jsxs("div",{className:"qrows",children:[m.length===0&&t.jsx("div",{className:"sp-empty",children:e.queueEmpty}),m.slice(0,10).map((y,j)=>t.jsxs("div",{className:"qr2",children:[t.jsxs("span",{className:"qn2",children:["#",j+1]}),t.jsx("b",{children:y.name}),typeof y.score=="number"&&t.jsx("span",{className:"qs2",children:y.score})]},y.name))]})]})}function il(){const{t:e,token:a,flash:r,scoped:n,caps:i,stageOf:o,dispatch:l}=F(),s=`${xt}/cibles/list.csv?token=${a}`,p=`${xt}/cibles/list.json?token=${a}`,x=`${xt}/cibles/export.xlsx?token=${a}&scope=full`,c=`=IMPORTDATA("${s}")`,d=v=>{var f;(f=navigator.clipboard)==null||f.writeText(v).then(()=>r(e.exportCopied))},u=[{def:e.exportCsv,value:s,href:s},{def:e.exportSheet,value:c},{def:e.exportLive,value:p,href:p},{def:e.exportXlsx,value:x,href:x}],g=!i.lockActions&&n.length>0,m=()=>{Hs(Vs(n,{plabels:e.plabels,head:e.exportViewHead,stageOf:o,stageLabel:v=>(e.stg.find(([f])=>f===v)||["",""])[1]})),r(e.exportViewDone(n.length))},b=()=>{l({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)};return t.jsxs(ke,{title:e.exportTitle,icon:"📥",children:[t.jsx("p",{className:"lead2",children:e.exportLead}),g&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🖨️"}),t.jsxs("div",{children:[t.jsx("b",{children:e.printTitle}),t.jsx("p",{children:e.printDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb",onClick:b,children:e.printBtn})]})}),g&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🗂"}),t.jsxs("div",{children:[t.jsx("b",{children:e.dsBtn}),t.jsx("p",{children:e.dsHint})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>l({type:"modal",modal:"dossier"}),children:e.exportViewBtn})]})}),g&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"📄"}),t.jsxs("div",{children:[t.jsx("b",{children:e.exportViewTitle}),t.jsx("p",{children:e.exportViewDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb pri",onClick:m,children:e.exportViewBtn})]})}),t.jsx("div",{className:"expl",children:u.map(({def:v,value:f,href:y})=>t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:v[0]}),t.jsxs("div",{children:[t.jsx("b",{children:v[1]}),t.jsx("p",{children:v[2]})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>d(f),children:e.exportCopy}),y&&t.jsx("a",{className:"exb",href:y,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.exportOpen})]},v[1]))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.exportKeyWarning})]})}function sl(){const{t:e,token:a,flash:r,flashErr:n,mode:i}=F(),o=i!=="client",[l,s]=h.useState(null),[p,x]=h.useState(!1),[c,d]=h.useState(0),[u,g]=h.useState(!1);h.useEffect(()=>{let f=!0;return x(!1),_a(a).then(y=>{f&&(y?s(y):x(!0))}),()=>{f=!1}},[a,c]);const m=()=>(l==null?void 0:l.sections)||{swot:!0,action:!0,synergies:!0,quadrant:!0,verdict:!0},b=f=>{if(o||!l)return;const y={enabled:f.enabled??!!l.enabled,email:f.email??(l.email||""),sections:f.sections??m()};g(!0),_a(a,y).then(j=>{if(g(!1),!j){n(e.memoAlertErr);return}s(j),r(e.memoAlertSaved)})};if(p)return t.jsx(ke,{title:e.memoAlertTitle,icon:"🔔",children:t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>d(f=>f+1),children:e.retry})]})});if(!l)return t.jsx(ke,{title:e.memoAlertTitle,icon:"🔔",children:t.jsx("div",{className:"sp-empty",children:"…"})});const v=m();return t.jsxs(ke,{title:e.memoAlertTitle,icon:"🔔",children:[t.jsx("p",{className:"lead2",children:e.memoAlertSub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.memoAlertToggle})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":l.enabled===!0,disabled:o||u,style:l.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>b({enabled:!l.enabled}),children:l.enabled?"ON":"OFF"})})]}),t.jsx(ll,{value:l.email||"",readOnly:o||u,label:e.memoAlertEmail,okLabel:e.csNoteOk,onSave:f=>b({email:f})}),t.jsx("div",{className:"qsec ok",children:e.memoAlertSections}),t.jsx("div",{className:"secl",children:e.memoAlertSec.map(([f,y])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:!!v[f],disabled:o||u,onChange:()=>b({sections:{...v,[f]:!v[f]}})}),t.jsx("span",{children:y})]},f))}),t.jsx(Ra,{label:e.memoAlertPreview,readOnly:o,onPreview:()=>oo(a,v),onTest:()=>ro(a,v)})]})}function ll({value:e,readOnly:a,label:r,okLabel:n,onSave:i}){const[o,l]=h.useState(e);h.useEffect(()=>{l(e)},[e]);const s=o.trim()!==e.trim(),p=!o.trim()||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(o.trim());return t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:r}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("input",{type:"email",className:"mailin",value:o,disabled:a,onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&s&&p&&i(o.trim())}}),t.jsx("button",{type:"button",className:"abtn",disabled:a||!s||!p,onClick:()=>i(o.trim()),children:n})]})]})}function dl(){const{t:e,token:a,flash:r,flashErr:n,canWrite:i}=F(),[o,l]=h.useState(null),[s,p]=h.useState(!1),[x,c]=h.useState(null),[d,u]=h.useState(""),[g,m]=h.useState(0);h.useEffect(()=>{let f=!0;return p(!1),ra(a).then(y=>{f&&(y?l({configured:y.configured,url_hint:y.url_hint}):p(!0))}),lo(a).then(y=>{f&&c(y)}),()=>{f=!1}},[a,g]);const b=(f,y)=>{i&&ra(a,f).then(j=>{if(!j||j.ok===!1){n(e.actErr);return}f.test&&j.sent===!1?n(e.plugTestThrottled):r(y),m(w=>w+1)})},v='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}';return t.jsxs(ke,{title:e.plugTitle,icon:"🔌",wide:!0,children:[x&&t.jsx("p",{className:"mnote"+(x.enabled?" warn":""),children:x.enabled?e.plugAutoOn(x.destination||"webhook"):e.plugAutoOff}),s?t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>m(f=>f+1),children:e.retry})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugCrm}),t.jsx("p",{className:"mnote",children:e.plugCrmHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"url",maxLength:500,placeholder:e.plugUrlPh,value:d,disabled:!i,onChange:f=>u(f.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:!i||!d.trim(),onClick:()=>b({url:d.trim()},e.plugSaved),children:e.plugSave})]}),(o==null?void 0:o.configured)&&t.jsxs("p",{className:"mnote",children:["✓ ",o.url_hint||""," ",t.jsx("button",{type:"button",className:"lk",disabled:!i,onClick:()=>b({test:!0},e.plugTested),children:e.plugTest})," · ",t.jsx("button",{type:"button",className:"lk",disabled:!i,onClick:()=>b({remove:!0},e.plugRemoved),children:e.plugRemove})]}),t.jsx(cl,{}),t.jsx("div",{className:"qsec ok",children:e.plugMcp}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:v}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var f;(f=navigator.clipboard)==null||f.writeText(v).then(()=>r(e.exportCopied))},children:e.exportCopy})]})]})]})}function cl(){const{t:e,token:a,lang:r}=F(),[n,i]=h.useState("valides"),[o,l]=h.useState(!1),[s,p]=h.useState(null),[x,c]=h.useState(null),[d,u]=h.useState(!1),[g,m]=h.useState(!1),[b,v]=h.useState(null),[f,y]=h.useState(null),[j,w]=h.useState(null),z=`atl2:bulk:${a}:${n}`;h.useEffect(()=>{ra(a).then(T=>{y(T&&T.configured?T.url_hint||"webhook":null)})},[a]),h.useEffect(()=>{p(null),c(null),u(!1),v(null);try{const T=JSON.parse(localStorage.getItem(z)||"null");w(T&&Date.now()-Date.parse(T.t)<24*3600*1e3?T:null)}catch{w(null)}},[z]);const E=async()=>{l(!0),u(!1),v(null);const T=await po(a,n);p(T),c(T.ok?n:null),l(!1)},R=h.useRef(!1),D=async()=>{if(R.current)return;R.current=!0,m(!0);const T=`${a}:${n}:${Date.now()}:${Math.random().toString(36).slice(2,10)}`;let P;try{P=await uo(a,n,"webhook",void 0,T)}finally{R.current=!1}if(m(!1),u(!1),v(P),P.ok&&(P.pushed||0)>0){const L={t:new Date().toISOString(),n:P.pushed||0};w(L);try{localStorage.setItem(z,JSON.stringify(L))}catch{}}},A=s!=null&&s.ok&&s.ready||0,q=!!(s!=null&&s.ok)&&x===n&&A>0&&!!f&&!j,k=j?new Date(j.t).toLocaleString(r==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugBulk}),t.jsx("p",{className:"mnote",children:e.plugBulkHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("select",{value:n,onChange:T=>i(T.target.value),children:e.plugBulkTabs.map(([T,P])=>t.jsx("option",{value:T,children:P},T))}),t.jsx("button",{type:"button",className:"abtn",disabled:o,onClick:()=>{E()},children:o?"…":e.plugBulkPreview})]}),s&&(s.ok?t.jsx("p",{className:"mnote",children:e.plugBulkResult(s.ready||0,s.linkedinReady||0,(s.noContact||[]).length)}):t.jsx("p",{className:"mnote warn",children:e.actErr})),!!(s!=null&&s.ok)&&t.jsx("p",{className:"mnote dim",children:e.bulkScope}),j&&t.jsx("p",{className:"mnote",children:e.bulkLocked(k,j.n)}),!j&&!!(s!=null&&s.ok)&&!f&&t.jsx("p",{className:"mnote warn",children:e.bulkNoDest}),!j&&!s&&t.jsx("p",{className:"mnote dim",children:e.bulkPreviewFirst}),q&&!d&&t.jsx("button",{type:"button",className:"abtn dgr",onClick:()=>u(!0),children:e.bulkArm}),q&&d&&t.jsxs("div",{className:"bulkc",children:[t.jsx("p",{className:"mnote warn",children:e.bulkWarn(A,f||"")}),t.jsx("button",{type:"button",className:"abtn dgr",disabled:g,onClick:()=>{D()},children:g?e.bulkSending:e.bulkConfirm(f||"")}),t.jsx("button",{type:"button",className:"abtn",disabled:g,onClick:()=>u(!1),children:e.bulkCancel})]}),b&&(b.ok?b.replayed?t.jsx("p",{className:"mnote",children:b.pending?e.bulkPending:e.bulkReplayed}):(b.pushed||0)>0?t.jsx("p",{className:"mnote",children:e.bulkDone(b.pushed||0,b.linkedinReady||0,b.skippedNoEmail||0)}):t.jsx("p",{className:"mnote warn",children:e.bulkNone}):t.jsx("p",{className:"mnote warn",children:b.error||e.actErr}))]})}function pl(){const{t:e,data:a,lang:r}=F(),n=a.credits,i=a.email,o=async l=>{if(!i)return;const s=window.location.href.split("?")[0];try{const x=await(await fetch(`${ka}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,lookup_key:l,success_url:s+"?credits=ok",cancel_url:s+"?credits=cancel"})})).json();x.url&&(window.location.href=x.url)}catch{}};return t.jsxs(ke,{title:e.rechargeTitle,icon:"⚡",children:[n&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:e.rechargeHint(n.daily_grant)}}),n.costs&&t.jsxs("p",{className:"mnote",children:["① ",e.creditsCost(n.costs.instant)," · ② ",e.creditsCost(n.costs.detailed)]}),t.jsx("div",{className:"packs",children:(n.packs||[]).map(l=>t.jsxs("div",{className:"pack",children:[t.jsx("div",{className:"pt",children:e.rechargeUnit(l.credits,l.price_eur)}),t.jsx("button",{type:"button",onClick:()=>{o(l.lookup_key)},children:e.rechargeBuy})]},l.lookup_key))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.rechargeNote})]}),!n&&t.jsx("div",{className:"sp-empty",children:e.creditsNone})]})}function ul(){const{t:e}=F();return t.jsx(ke,{title:e.dsBtn,icon:"🗂",wide:!0,children:t.jsx(Gs,{})})}function fl(){const{t:e,lang:a,data:r,dossiers:n,token:i,canWrite:o,flash:l}=F(),[s,p]=h.useState(null),[x,c]=h.useState(!1);h.useEffect(()=>{let E=!0;return Na(i).then(R=>{E&&R&&typeof R.per_day=="number"&&p(R.per_day)}),()=>{E=!1}},[i]);const d=r.stats,u=typeof(d==null?void 0:d.screened)=="number"?d.screened:n.filter(E=>E.kind==="target"&&ve(E)).length,g=r.marketEstimate||0,m=g>0?Math.min(100,Math.round(u/g*100)):null,b=(d==null?void 0:d.window_days)||30,v=u>0?u/b:0,f=g>0?Math.max(0,g-u):0,j=g>0&&v>0&&u>=100?Math.round(f/v):null,w=E=>Math.round(E).toLocaleString(a==="en"?"en-US":"fr-FR"),z=E=>{x||!o||(c(!0),co(i,E).then(R=>{if(c(!1),R===null){l(e.actErr);return}p(R),l(e.alertSaved)}))};return t.jsxs(ke,{title:e.coverTitle,icon:"🌍",children:[t.jsxs("div",{className:"covg",children:[t.jsx("b",{children:e.covScreened(w(u))}),g>0&&t.jsx("span",{children:e.covOf(w(g))})]}),m!==null?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"covbar",children:[t.jsx("i",{style:{width:m+"%"}}),t.jsxs("em",{children:[m," %"]})]}),j!==null&&t.jsx("p",{className:"mnote",children:e.covEta(j)})]}):t.jsx("p",{className:"mnote dim",children:e.covNoEst}),v>=1&&t.jsx("p",{className:"mnote",children:e.covPace(w(v))}),d&&t.jsxs("div",{className:"covf",children:[typeof d.kept=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:w(d.kept)})," ",e.covKept]}),typeof d.analyzed=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:w(d.analyzed)})," ",e.covAna]}),typeof d.shown=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:w(d.shown)})," ",e.covShown]})]}),o&&s!==null&&t.jsxs("div",{className:"covr",children:[t.jsxs("div",{className:"covrh",children:[t.jsx("span",{children:e.covRate}),t.jsx("b",{children:e.covRateNow(s)})]}),t.jsx("div",{className:"covrb",children:[0,1,2,3,5,10].map(E=>t.jsx("button",{type:"button",className:s===E?"on":"",disabled:x,onClick:()=>z(E),children:E===0?"⏸":E},E))}),t.jsx("p",{className:"mnote dim",children:e.covRateHint})]})]})}function ml(){var f,y,j;const{t:e,dossiers:a,token:r,mode:n,flash:i,criteria:o}=F(),l=n==="client",s=h.useMemo(()=>{const w=new Set;return a.forEach(z=>{z.angle&&w.add(z.angle)}),[...w]},[a]),[p,x]=h.useState(null);h.useEffect(()=>{let w=!0;return so(r).then(z=>{w&&x(z.thumbs)}),()=>{w=!1}},[r]);const[c,d]=h.useState(""),[u,g]=h.useState(""),[m,b]=h.useState(!1),v=async()=>{const w=c.trim();if(!(!w||m||!l)){b(!0),g("");try{const E=await(await fetch(`${xt}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r,message:w,who:"atelier2"})})).json().catch(()=>({}));if(E.reply&&g(String(E.reply)),E.job_id){g(e.critChatRunning);const R=async()=>{const D=await fetch(`${xt}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:E.job_id})}).then(A=>A.json()).catch(()=>null);if(D&&D.done){g(String(D.reply||D.clarification||D.summary||"✓")),b(!1),D.applied&&i(e.alertSaved);return}setTimeout(()=>{R()},8e3)};setTimeout(()=>{R()},8e3),d("");return}d("")}finally{u.startsWith("⏳")||b(!1)}}};return t.jsxs(ke,{title:e.critTitle,icon:"⚙",wide:!0,children:[(o==null?void 0:o.lead)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critHypTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:o.lead}),!!((f=o.points)!=null&&f.length)&&t.jsx("ul",{className:"critpts",children:o.points.map(w=>t.jsx("li",{children:w},w))}),t.jsx("p",{className:"mnote",children:e.critHypSub})]}),!!((y=o==null?void 0:o.angles)!=null&&y.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critProfilsTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:o.method||e.critProfilsSub}),o.angles.map(w=>{var z,E;return t.jsxs("details",{className:"prof",children:[t.jsx("summary",{children:w.title}),w.why&&t.jsx("p",{className:"why",children:w.why}),t.jsxs("div",{className:"lo",children:[!!((z=w.look)!=null&&z.length)&&t.jsxs("div",{children:[t.jsx("em",{children:e.critLookFor}),t.jsx("ul",{children:w.look.map(R=>t.jsx("li",{children:R},R))})]}),!!((E=w.out)!=null&&E.length)&&t.jsxs("div",{className:"ko",children:[t.jsx("em",{children:e.critRuleOut}),t.jsx("ul",{children:w.out.map(R=>t.jsx("li",{children:R},R))})]})]})]},w.title)})]}),!!((j=o==null?void 0:o.gate)!=null&&j.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critGateTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:e.critGateSub}),o.gate.length===1&&!o.gate[0].k?t.jsx("p",{className:"gate1",children:o.gate[0].t}):t.jsx("ol",{className:"gatesteps",children:o.gate.map(w=>t.jsxs("li",{children:[w.k&&t.jsx("b",{children:w.k}),w.t]},w.t))})]}),s.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critAngles}),t.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:s.map(w=>t.jsx("li",{style:{marginBottom:5},children:w.replace(/[_-]+/g," ")},w))})]}),t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.critChatTitle}),t.jsx("p",{children:e.critChatHint}),t.jsxs("div",{className:"mfield",style:{marginTop:10},children:[t.jsx("input",{placeholder:e.critChatPh,value:c,disabled:!l||m,onChange:w=>d(w.target.value),onKeyDown:w=>{w.key==="Enter"&&v()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(m?" loading":""),style:{padding:"12px 18px"},disabled:!l||m||!c.trim(),onClick:()=>void v(),children:[t.jsx("span",{className:"fill"}),e.critChatSend]})]}),u&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:u})]}),t.jsx("div",{className:"qsec ok",children:e.critThumbsTitle}),p===null?t.jsx("div",{className:"sp-empty",children:"…"}):p.length===0?t.jsx("p",{className:"mnote",children:e.critThumbsEmpty}):t.jsx("div",{className:"qrows",style:{marginBottom:14},children:p.slice(0,12).map((w,z)=>t.jsxs("div",{className:"qr2",children:[t.jsx("span",{className:"qn2",children:w.kind==="YES"?"👍":"👎"}),t.jsx("b",{children:w.company}),t.jsx("span",{className:"qd",children:(w.ts||"").slice(0,10)})]},z))}),t.jsx("div",{className:"qsec ok",children:e.qvTitle}),t.jsx("div",{className:"vlist",children:e.qv.map(([w,z])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vd "+(dr[w]||"v-cons"),children:w}),t.jsx("span",{children:z})]},w))}),t.jsx("div",{className:"qsec ok",children:e.brTitle}),t.jsx("div",{className:"vlist",children:e.br.map(([w,z])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vtag",children:w}),t.jsxs("span",{children:["← ",z]})]},w))}),t.jsx("p",{className:"mnote",children:e.brNote}),t.jsx("p",{className:"mnote",children:e.critMemoKinds})]})}function xl(){const{t:e,dispatch:a,startTour:r}=F(),n=i=>{var o,l;a({type:"modal",modal:null}),i==="crit"||i==="plug"||i==="alert"?a({type:"modal",modal:i}):i.startsWith("tab")?a({type:"ptab",tab:Number(i.slice(3))}):i==="eval"&&((o=document.querySelector(".atl2 .demand input"))==null||o.scrollIntoView({block:"center",behavior:"smooth"}),(l=document.querySelector(".atl2 .demand input"))==null||l.focus())};return t.jsxs(ke,{title:e.tutoTitle,icon:"▶",children:[t.jsxs("div",{className:"howto-go",children:[t.jsx("p",{children:e.tourIntro}),t.jsxs("button",{type:"button",onClick:()=>{a({type:"modal",modal:null}),r()},children:["▶ ",e.tourStart]})]}),t.jsx("ul",{className:"howto",children:e.howto.map(([i,o],l)=>t.jsxs("li",{role:"button",tabIndex:0,onClick:()=>n(o),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n(o))},children:[t.jsx("span",{className:"n",children:l+1}),t.jsx("span",{dangerouslySetInnerHTML:{__html:i.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}})]},o+l))})]})}const ta={},En=(ta==null?void 0:ta.VITE_API_BASE)||"https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function zn(){return new Date().toISOString().slice(0,10)}const ur=h.createContext(null);function fr(){const e=h.useContext(ur);if(!e)throw new Error("ThesisEdition* must be under ThesisEditionProvider");return e}function hl({token:e,children:a}){const{dispatch:r,st:n,lang:i}=F(),[o,l]=h.useState(()=>n.filters.day||zn()),[s,p]=h.useState(null),[x,c]=h.useState(!1),d=h.useCallback(b=>{if(/^\d{4}-\d{2}-\d{2}$/.test(b)){l(b);try{r({type:"filters",patch:{day:b,win:"all"}})}catch{}}},[r]),u=h.useCallback(()=>{l(zn());try{r({type:"filters",patch:{day:"",win:"7"}})}catch{}},[r]);h.useEffect(()=>{if(!n.filters.day)try{r({type:"filters",patch:{day:"",win:"7"}})}catch{}},[]),h.useEffect(()=>{const b=v=>{var y;const f=(y=v.detail)==null?void 0:y.day;typeof f=="string"&&d(f)};return window.addEventListener("pp-edition-day",b),()=>window.removeEventListener("pp-edition-day",b)},[d]),h.useEffect(()=>{n.filters.day&&n.filters.day!==o&&l(n.filters.day)},[n.filters.day]),h.useEffect(()=>{if(!e||!o)return;let b=!1;c(!0);const v=new URLSearchParams({token:e,date:o});return fetch(`${En}/cibles/edition.json?${v}`).then(f=>f.json()).then(f=>{b||p(f)}).catch(()=>{b||p({ok:!1,error:"network"})}).finally(()=>{b||c(!1)}),()=>{b=!0}},[e,o]);const g=h.useMemo(()=>`${En}/cibles/editions.json?token=${encodeURIComponent(e)}`,[e]),m=h.useMemo(()=>({token:e,day:o,ed:s,loading:x,pickDay:d,pickWindow:u,dayPicked:!!n.filters.day,daysUrl:g,isEn:i==="en"}),[e,o,s,x,d,u,n.filters.day,g,i]);return t.jsx(ur.Provider,{value:m,children:a})}function gl(){const{day:e,daysUrl:a,pickDay:r,dayPicked:n}=fr();return t.jsxs("div",{className:"thesis-days",children:[t.jsx("style",{children:`
        .thesis-days{margin:0;padding:0 12px 2px;background:#0B1220;border:none}
      `}),t.jsx(go,{mode:"local",theme:"dark",month:e.slice(0,7),current:e,windowDays:n?0:7,daysUrl:a,onPick:r})]})}function bl(){const{day:e,ed:a,loading:r,pickWindow:n,dayPicked:i,isEn:o}=fr(),l=!!(a!=null&&a.ok&&(a.html||a.acquirers_html)),s=(a==null?void 0:a.ok)&&!l,p=a&&!a.ok;return t.jsxs("section",{className:"thesis-brief","data-day":(a==null?void 0:a.date)||e,"data-fund":(a==null?void 0:a.fund)||"",children:[t.jsx("style",{children:`
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
      `}),t.jsxs("header",{className:"thesis-brief__hd",children:[t.jsx("span",{className:"thesis-brief__kicker",children:o?"Daily brief":"Brief du jour"}),t.jsxs("h2",{className:"thesis-brief__title",children:[o?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",(a==null?void 0:a.count)!=null&&a.count>0?` · ${a.count}`:""]}),((a==null?void 0:a.date)||e)&&t.jsx("time",{className:"thesis-brief__date",dateTime:(a==null?void 0:a.date)||e,children:(a==null?void 0:a.date)||e})]}),t.jsx("p",{className:"thesis-brief__hint",children:o?"Same content as your daily email for this fund. Pick a day above the map to change this brief and the LIVE ticker.":"Même contenu que l’email quotidien de ce fonds. Choisir un jour au-dessus de la carte change ce brief et le LIVE."}),r&&!l&&t.jsx("p",{className:"thesis-brief__loading",children:o?"Loading your thesis brief…":"Chargement de votre brief de thèse…"}),p&&t.jsxs("p",{className:"thesis-brief__err",children:[o?"Could not load this brief.":"Impossible de charger ce brief.",a!=null&&a.error?` (${a.error})`:""]}),s&&!r&&t.jsx("p",{className:"thesis-brief__empty",children:o?t.jsxs(t.Fragment,{children:["No thesis brief for ",t.jsx("b",{children:e})," yet. Pick another day on the strip under LIVE, or check back after the morning run."]}):t.jsxs(t.Fragment,{children:["Pas encore de brief de thèse pour le ",t.jsx("b",{children:e}),". Choisissez un autre jour sous le LIVE, ou revenez après le run du matin."]})}),l&&(a!=null&&a.html)?t.jsx("div",{className:"thesis-brief__body",dangerouslySetInnerHTML:{__html:a.html}}):null,l&&(a!=null&&a.acquirers_html)?t.jsx("div",{className:"thesis-brief__acq",dangerouslySetInnerHTML:{__html:a.acquirers_html}}):null,i&&t.jsx("button",{type:"button",className:"thesis-brief__clear",onClick:n,children:o?"← Back to the last 7 days":"← Revenir aux 7 derniers jours"})]})}const mr="atl2:mapfold",vl=()=>{if(typeof window>"u")return!1;try{const e=localStorage.getItem(mr);if(e==="on")return!0;if(e==="off")return!1}catch{}try{const e=new URLSearchParams(window.location.search);if(e.get("embed")==="1"&&(e.get("source")||"").toLowerCase()==="ops")return!0}catch{}return window.innerHeight<1e3},xr=h.createContext(null),F=()=>{const e=h.useContext(xr);if(!e)throw new Error("AtelierV2Ctx manquant");return e};function Xe({o:e,lg:a}){const{lang:r}=F(),n=fe(e);return n?t.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:Ya(n,r),children:[n.emoji," ",Ya(n,r)]}):null}function _t({o:e,src:a}){const{lang:r,t:n}=F(),i=fe(e);if(!i)return null;const o=ko(i),l=jo(i);return t.jsxs("em",{className:"sigwin"+(l?" hot":""),title:n.signaledOn(qn(i,r))+" · "+n.win7(Fn(i,r)),children:[t.jsx("span",{className:"gg",children:Array.from({length:7},(s,p)=>t.jsx("i",{className:p<o?"on":""},p))}),t.jsx("span",{className:"lb",children:l?n.lastDay:n.daysLeft(Math.max(0,i.left??0))}),a&&i.url&&t.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",title:n.seeSource,onClick:s=>s.stopPropagation(),children:"↗"})]})}function hr({o:e}){const{lang:a}=F(),r=wo(e.cc),n=e.cc?it(e.cc,a)||e.countryLabel||e.cc:e.countryLabel||"—";return t.jsx("span",{className:"c-flag",title:n||void 0,children:r?t.jsx("img",{src:r,width:24,height:18,alt:n||""}):t.jsx("span",{className:"em",children:"🌐"})})}const An="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap",gr=e=>`atl2:tour:${e||"anon"}`;function yl(e){try{return localStorage.getItem(gr(e))==="1"}catch{return!0}}function Tn(e){try{localStorage.setItem(gr(e),"1")}catch{}}function wl(e){const a=e.tourT,r=e.howto;return[{sel:".atl2 .ident",title:a.ident,body:e.tourIntro},{sel:".atl2 .ticker",title:a.live,body:e.fhintLive},{sel:".atl2 .goal",title:a.goal,body:e.fhintGoal},{sel:".atl2 .funnel",title:a.funnel,body:r[2][0],ptab:1},{sel:".atl2 .tuto",title:a.tuto,body:r[3][0],ptab:3},{sel:".atl2 .demand",title:a.demand,body:r[1][0]},{sel:".atl2 .card .dec",need:".atl2 .list",title:a.dec,body:e.fhintDec,ptab:1,dens:"deplie"},{sel:".atl2 .csp",need:".atl2 .list",title:a.status,body:e.fhintStatus,ptab:1,dens:"deplie"},{sel:".atl2 .learn",title:a.learn,body:e.learnLine},{sel:".atl2 .ftools",title:a.tools,body:r[6][0]},{sel:".atl2 .tool",title:a.crit,body:r[0][0]}]}function El({demo:e=!1,source:a="default",initialFilters:r,initialUi:n,capsOverride:i,onFiltersChange:o}){const{lang:l}=bo(),s=Lo[l],p=_o(e,l,a),[x,c]=h.useReducer(Vo,void 0,()=>Uo((n==null?void 0:n.continent)??(a==="ops"?"monde":"europe"),e||vl(),{ptab:n==null?void 0:n.ptab,dens:n==null?void 0:n.dens,filters:r,modal:n==null?void 0:n.modal})),d=h.useRef(!0);h.useEffect(()=>{if(d.current){d.current=!1;return}if(!e)try{localStorage.setItem(mr,x.mapFolded?"on":"off")}catch{}},[x.mapFolded,e]);const u=h.useRef(o);u.current=o,h.useEffect(()=>{var C;(C=u.current)==null||C.call(u,x.filters)},[x.filters]);const[g,m]=h.useState(null),[b,v]=h.useState(null),[f,y]=h.useState({kept:0,dropped:0}),[j,w]=h.useState(!1),[z,E]=h.useState(""),[R,D]=h.useState(!1),[A,q]=h.useState(null),[k,T]=h.useState(!1),[P,L]=h.useState(!1),[,S]=h.useState(0),N=()=>S(C=>C+1),O=h.useRef([]),M=h.useRef(new Set),B=h.useRef(new Set),V=h.useRef(new Map),H=h.useRef(null),{mode:ee}=p,K=h.useMemo(()=>({...p.caps,...a==="ops"?{showMorning:!1}:null,...i||null}),[p.caps,i,a]),_=K.pipe,Y=p.session.token||"",W=ee==="client"&&!e;h.useEffect(()=>{if(document.querySelector(`link[href="${An}"]`))return;const C=document.createElement("link");C.rel="stylesheet",C.href=An,document.head.appendChild(C)},[]);const ne=(C,$=!1)=>{E(C),D($),H.current&&clearTimeout(H.current),H.current=setTimeout(()=>E(""),$?4200:2400)},le=C=>ne(C,!0),ye=h.useMemo(()=>{const C=new Map;return p.dossiers.forEach($=>{$.id&&C.set($.id,$)}),C},[p.dossiers]),pe=h.useMemo(()=>p.dossiers.filter(C=>In(C,x,_)),[p.dossiers,x,_]),Q=h.useRef(!1);h.useEffect(()=>{if(Q.current||e||p.loading||!p.dossiers.length)return;if(!K.showFunnel||yl(p.session.token||"")){Q.current=!0;return}Q.current=!0;const C=window.setTimeout(()=>{Tn(p.session.token||""),T(!0)},700);return()=>window.clearTimeout(C)},[e,p.loading,p.dossiers.length,K.showFunnel,p.session.token]);const Z=h.useMemo(()=>p.dossiers.filter(C=>Ho(C,x,_,p.favIds)),[p.dossiers,x,_,p.favIds]),he=h.useMemo(()=>vo(pe,p.favIds),[pe,p.favIds]),G=Sa.find(C=>C.key===x.continent),ie=x.continent==="monde"?s.contWorld:(l==="fr"?G==null?void 0:G.fr:G==null?void 0:G.en)||"";h.useEffect(()=>{const C=$=>{var re;const U=(((re=$.detail)==null?void 0:re.name)||"").trim();U&&J(null,U)};return window.addEventListener("ppmap:evaluate",C),()=>window.removeEventListener("ppmap:evaluate",C)}),h.useEffect(()=>{const C=re=>{const Le=String(re||"").trim();Le&&c({type:"filters",patch:{sector:[Le]}})},$=re=>{var Le;return C((Le=re.detail)==null?void 0:Le.sector)},U=re=>{re.data&&re.data.type==="pp-filter"&&C(re.data.sector)};return window.addEventListener("ppmap:filter",$),window.addEventListener("message",U),()=>{window.removeEventListener("ppmap:filter",$),window.removeEventListener("message",U)}},[]);const J=(C,$)=>{const U=((C==null?void 0:C.name)||$||"").trim();if(!W){v({kicker:U});return}!U||j||(w(!0),(async()=>{try{const re=await Mn(Y,U,"atelier2"),Le={name:re.company||U,verdict:re.verdict,reason:re.reason||"",remaining:re.remaining??null};O.current=[Le,...O.current].slice(0,8),re.verdict==="kept"&&y(Ve=>({...Ve,kept:Ve.kept+1})),re.verdict==="ruled_out"&&y(Ve=>({...Ve,dropped:Ve.dropped+1}));const lt=C||p.dossiers.find(Ve=>(Ve.name||"").toLowerCase()===U.toLowerCase());lt&&(re.verdict==="kept"?lt.verdict=lt.verdict||"MATCH":re.verdict==="ruled_out"&&(lt.verdict="NO MATCH"),re.reason&&(lt.reasoning=re.reason)),N()}finally{w(!1)}})())},Be=C=>{if(!W){v({kicker:C.name});return}M.current.add(C.id),dt(Y,"fast_request",C.name||"",""),ne(s.memoInstantSent(C.name)),N()},ue=C=>V.current.get(C.id)??p.thumbs.get((C.name||"").trim().toLowerCase()),me=(C,$)=>c({type:"undoPush",entry:{id:C.id,name:C.name,prevCeoStatus:$}}),Fe=async(C,$,U)=>{const re=C.ceoStatus||"";C.ceoStatus=$,N();const Le=await Wt(Y,{status:$,airtable_id:C.airtableId,check_id:C.checkId,company:C.name,...(U==null?void 0:U.note)!==void 0?{note:U.note}:{},...U!=null&&U.via?{via:U.via}:{}});return Le.ok?Le.skipped?(C.ceoStatus=re,N(),le(s.actNotPersisted),!1):((U==null?void 0:U.undo)!==!1&&me(C,re),U!=null&&U.msg&&ne(U.msg),($==="Validé"||$==="Écarté")&&!C.ceoNote&&(U==null?void 0:U.note)===void 0&&q({o:C,yes:$==="Validé"}),!0):(C.ceoStatus=re,N(),le(s.actErr),!1)},Ue=async(C,$)=>{const U=await Wt(Y,{status:C.ceoStatus||"Retenu",airtable_id:C.airtableId,check_id:C.checkId,company:C.name,note:$,via:"note"});return!U.ok||U.skipped?(le(U.skipped?s.actNotPersisted:s.actErr),!1):(C.ceoNote=$,N(),!0)},Ne=h.useRef(new Map),Pe=C=>Ne.current.has(C.id)?Ne.current.get(C.id):p.stages.get((C.name||"").trim().toLowerCase()),st=(C,$)=>{Ne.current.set(C.id,$),N()},Ut=(C,$)=>{W&&Fe(C,$?"Validé":"Écarté",{msg:$?s.decidedYes(C.name):s.decidedNo(C.name)})},Vt=C=>{W&&Fe(C,"À trancher",{msg:s.promoted(C.name)})},I=C=>{W&&(async()=>{const $=C.ceoStatus||"";C.ceoStatus="Retenu",N();const U=await Wt(Y,{status:"Retenu",check_id:C.checkId,company:C.name});if(!U.ok||U.skipped){C.ceoStatus=$,N(),le(U.skipped?s.actNotPersisted:s.actErr);return}me(C,$),ne(s.repeched(C.name))})()},te=()=>{const C=x.undo[x.undo.length-1];if(!C){ne(s.undoNone);return}const $=ye.get(C.id);if(!$){c({type:"undoPop"}),ne(s.undoNone);return}let U=C.prevCeoStatus;if(!U)if(($.verdict||"").toUpperCase().includes("CALL"))U="À trancher";else{ne(s.undoLockedTitle);return}(async()=>await Fe($,U,{undo:!1})&&(c({type:"undoPop"}),$.ceoStatus=C.prevCeoStatus,N(),ne(s.undoDone($.name))))()},se=C=>{W&&(B.current.add(C.id),N(),(async()=>{const $=await No(Y,C.name,"email");if(!$||$.ok===!1){B.current.delete(C.id),N(),le(s.actErr);return}dt(Y,"approach",C.name||"",""),ne(s.actApproachSent)})())},ge=(C,$)=>{W&&(async()=>{if(!(await dt(Y,$?"yes":"no",C.name||"","")).ok){le(s.actErr);return}V.current.set(C.id,$?"yes":"no"),N(),ne($?s.thumbUpDone:s.thumbDnDone)})()},$e=C=>{!W||!Ca(C)||(dt(Y,"detailed_request",C.name||"",""),ne(s.memoDeepSent(C.name)))},we=C=>{const $=new Set(p.favIds),U=$.has(C.id);U?$.delete(C.id):$.add(C.id),p.setFavIds($),W&&So(Y,{id:C.id,co:C.name},U)},Se=()=>{!W||P||window.confirm(s.identSyncConfirm)&&(L(!0),(async()=>{const C=await Co(Y);L(!1),C?ne(s.identSyncDone):le(s.actErr)})())},_e=/proplace/i.test(p.fund||""),br=C=>{!W||!_e||(dt(Y,"onboard_request",C.name||"",""),ne(s.onboardSent(C.name)))},vr={st:x,dispatch:c,t:s,lang:l,mode:ee,caps:K,pipe:_,token:Y,fund:p.fund,email:p.email,criteria:p.criteria,source:a||"default",data:p,doRepeche:I,thumbOf:ue,canWrite:W,commitStatus:Fe,saveNote:Ue,stageOf:Pe,setStage:st,flashErr:le,startTour:()=>T(!0),dossiers:p.dossiers,scopedAll:pe,scoped:Z,counts:he,byId:ye,contName:ie,favIds:p.favIds,toggleFav:we,askEvaluate:J,doAnalyse:Be,doDecide:Ut,doPromote:Vt,doApproach:se,doThumb:ge,doDeep:$e,doUndo:te,doSync:Se,doOnboard:br,outbound:_e,memoQueued:M.current,approachDone:B.current,sessTally:f,evalCards:O.current,evalBusy:j,markRow:m,markedId:g,flash:ne};h.useEffect(()=>{const C=$=>{$.key==="Escape"&&(c({type:"popup",id:null}),c({type:"modal",modal:null}),c({type:"openFacet",facet:null}))};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[]);const yr=C=>Y?t.jsx(hl,{token:Y,children:C}):t.jsx(t.Fragment,{children:C});return t.jsx(xr.Provider,{value:vr,children:t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:Mo}),yr(t.jsxs("div",{className:"app"+(_?" pipe":"")+(Y?" has-thesis":""),children:[K.showTicker&&t.jsx(xe,{name:"live",children:t.jsxs("div",{className:"live-stack"+(Y?" live-stack--cibles":""),children:[t.jsx(Qo,{}),!!Y&&t.jsx(gl,{})]})}),K.showIdent&&t.jsx(xe,{name:"identite",children:t.jsx(fi,{})}),K.showOnb&&t.jsx(xe,{name:"onboarding",children:t.jsx(mi,{})}),K.showMorning&&t.jsx(xe,{name:"matin",children:t.jsx(ui,{})}),t.jsx(xe,{name:"fraicheur",children:t.jsx(ri,{})}),t.jsx(xe,{name:"mesure",children:t.jsx(oi,{})}),K.showFunnel&&t.jsx(xe,{name:"entonnoir",children:t.jsx(kl,{})}),K.showFunnel&&t.jsx(xe,{name:"tunnel",children:t.jsx(hi,{})}),K.showFunnel&&t.jsx(xe,{name:"tuto",children:t.jsx(bi,{})}),t.jsx(xe,{name:"carte",fallback:t.jsx("div",{className:"void",children:s.loadError}),children:t.jsxs("div",{className:"fzone",children:[t.jsx(jl,{}),t.jsxs("div",{className:"stage"+(x.mapFolded?" folded":""),id:"atl2-stage",children:[t.jsx(xs,{}),t.jsx(gs,{})]})]})}),K.showDemand&&t.jsx(xe,{name:"evaluation",children:t.jsx(js,{})}),K.showDemand&&x.memoConsole&&t.jsx(xe,{name:"console",children:t.jsx(Ss,{})}),t.jsx(xe,{name:"liste",fallback:t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>window.location.reload(),children:s.retry})]}),children:t.jsx(_s,{})}),!!Y&&t.jsx(xe,{name:"edition",children:t.jsx(bl,{})}),p.loading&&t.jsx("div",{className:"void",children:s.loadingV2}),p.error&&!p.loading&&t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:p.refresh,children:s.retry})]})]})),K.showOnb&&t.jsxs("div",{className:"lockbar on",children:[t.jsx("b",{children:s.lockbarText}),t.jsx("button",{type:"button",onClick:()=>c({type:"modal",modal:"rdv"}),children:s.lockbarCta})]}),x.popupId&&t.jsx(xe,{name:"fiche",children:t.jsx(zs,{})}),t.jsx(xe,{name:"modales",children:t.jsx(Qs,{})}),t.jsx(ti,{}),A&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:A.o.name}),t.jsx(di,{placeholder:A.yes?s.whyYesPh:s.whyNoPh,onDone:C=>{const $=A.o;q(null),C&&Ue($,C).then(U=>{U&&ne(s.csNoteSaved)})}})]}),k&&t.jsx(pi,{steps:wl(s),onClose:()=>{T(!1),Tn(Y)}}),z&&t.jsx("div",{className:"flash on"+(R?" err":""),children:z}),b&&t.jsx(yo,{variant:"acquirer",initialCompany:Ln().co,initialWebsite:Ln().site,onClose:()=>v(null)})]})})}function kl(){const{t:e}=F(),[a,r]=h.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem("atl2:fhint")==="off"}catch{return!1}});return a?null:t.jsxs("p",{className:"fhint",children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:t.jsx("path",{d:"M1 2h10M2.5 5.5h7M4.5 9h3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})}),t.jsx("span",{dangerouslySetInnerHTML:{__html:e.funnelHint}}),t.jsx("button",{type:"button","aria-label":"Fermer",title:e.fhintClose,onClick:()=>{r(!0);try{localStorage.setItem("atl2:fhint","off")}catch{}},children:"✕"})]})}function jl(){const{dossiers:e,st:a,dispatch:r,pipe:n,lang:i,t:o}=F(),l=h.useMemo(()=>{const s={};return e.forEach(p=>{Ea(p,a.filters,n)&&(s.monde=(s.monde||0)+1,p.continent&&(s[p.continent]=(s[p.continent]||0)+1))}),s},[e,a.filters,n]);return t.jsxs("div",{className:"conts",children:[Eo.map(s=>{const p=Sa.find(c=>c.key===s),x=s==="monde"?o.contWorld:i==="fr"?p.fr:p.en;return t.jsxs("button",{type:"button",className:"cbtn"+(s==="monde"?" hint":""),"aria-selected":a.continent===s,onClick:()=>r({type:"continent",key:s}),children:[x,t.jsx("span",{className:"n",children:l[s]||0})]},s)}),t.jsx("span",{className:"side",children:t.jsx("button",{type:"button",onClick:()=>r({type:"mapFold",folded:!a.mapFolded}),children:a.mapFolded?o.showMap:o.hideMap})})]})}function Ln(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function Nl(e){return e>=1e9?(e/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":e>=1e6?Math.round(e/1e6)+" M€":Math.round(e/1e3)+" k€"}export{hr as FlagCell,Xe as SigBadge,_t as SigWin,El as default,Nl as fmtShort,F as useV2};
