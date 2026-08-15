var hr=Object.defineProperty;var gr=(e,a,r)=>a in e?hr(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var Ra=(e,a,r)=>gr(e,typeof a!="symbol"?a+"":a,r);import{r as h,u as br,a as vr,b as yr,R as bt,L as wr,C as Ma,c as kr,d as jr,l as _t,o as Ut,i as Nr,e as Sr,f as Cr,g as Oa,n as qa,h as Fa,j as Er,k as zr,m as Ar,p as Tr,q as Lr,S as va,s as Rr,t as Mr,v as xe,w as ya,x as et,y as He,z as t,A as Ne,B as tt,D as Or,E as qr,F as Fr,G as at,H as ke,I as Pr,J as wa,K as zn,M as Zt,N as Dr,O as Ir,P as ka,Q as Pa,T as Da,U as nt,V as ea,W as Xe,X as De,Y as Br,Z as $r,_ as An,$ as _r,a0 as Ur,a1 as Tn,a2 as Vr,a3 as Hr,a4 as ja,a5 as Yr,a6 as Dt,a7 as Wr,a8 as Ln,a9 as Rn,aa as Ia,ab as It,ac as Gr,ad as Kr,ae as Qr,af as Xr,ag as Ba,ah as Jr,ai as Zr,aj as eo,ak as to,al as ta,am as ao,an as $a,ao as no,ap as ro,aq as oo,ar as _a,as as io,at as so,au as Ua,av as lo,aw as co,ax as po,ay as uo,az as fo,aA as mo,aB as xo,aC as Va,aD as ho,aE as go,aF as it,aG as Vt,aH as bo,aI as vo,aJ as yo,aK as wo}from"./index-5F1QRvy-.js";const ko=({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:o,onInit:i,onPageChange:l,onSubmit:s})=>{const[p,u]=h.useState(!0),c=br({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:o});vr(c,{onInit:i,onPageChange:l,onSubmit:s});const[d,f]=h.useState();return yr(c,"form_resized",v=>{const x=v.size;typeof x=="number"&&f(x)},{disabled:!o}),bt.createElement("div",{className:"fillout-standard-embed",style:{height:o?typeof d=="number"?d:256:"100%",transition:o?"height 150ms ease":void 0}},p&&bt.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},bt.createElement(wr,null)),c&&bt.createElement("iframe",{src:c.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>u(!1),style:{width:p?0:"100%",height:p?0:"100%",opacity:p?0:1,borderRadius:10,border:0,minHeight:256}}))},jo={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Tout ce que STAN a passé au crible sur la fenêtre : chaque société évaluée selon vos critères, retenue ou écartée automatiquement.","STAN a retenu ces sociétés selon vos critères, décision justifiée. NOUS vérifions ses choix — écartez, validez, ou lancez une analyse sur les incertaines.","Les mémos de STAN, relus par NOUS : synergies chiffrées, verdict argumenté. Validez celles à contacter, mettez « à trancher » celles où vous hésitez.","À VOUS de jouer : les meilleures cibles, présentées le lundi par votre Corporate Developer. Tranchez OUI ou NON — vos oui passent en Validées.","Vos OUI — la short-list à contacter. NOUS préparons l’approche, ou l’engageons en votre nom (offre Entreprise).","Écartées par STAN ou par VOUS. Chaque NON affine les critères de Stan. Repêchez-en une à tout moment.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(e,a,r)=>`<b>${e} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${r} sans réponse.</b>`,morningThesis:(e,a)=>`<b>${e}</b> société${e===1?" a":"s ont"} été sourcée${e===1?"":"s"} ce matin par nos moteurs.`+(a?` <b>${a}</b> restante${a>1?"s":""} pas encore évaluée${a>1?"s":""}.`:' <span class="ok">Tout est évalué.</span>'),morningEval:e=>`▶ Les traiter (${e})`,identTitle:e=>`Cibles pour ${e}`,identCoverage:"COUVERTURE DU MARCHÉ",identCoverageOf:(e,a)=>`<b>${e}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"MOTEUR DE MÉMOS",identPerDay:"mémo/jour",identPending:e=>`→ ${e} en attente`,identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Inverser l’ordre de tri",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:e=>`Décision annulée sur ${e}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ OUI",actNo:"✗ NON",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:e=>`${e} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"CRIBLE · MÉMO",colScore:"SCORE",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:e=>`Depuis le verdict de Stan : ${e} j`,waitChip:e=>`⏱ ${e} j`,densList:"LISTE",densOpen:"DÉPLIÉ",densMaxi:"MAXI",memoSynth:"SYNTHÈSE",memoOpenFull:"📖 Lire le mémo complet →",memoDeep:"⚡ Mémo détaillé",memoDeepHint:"Pour ce dossier à trancher, vous pouvez lancer l’analyse détaillée : étude de marché, quadrant concurrentiel, scénarios.",memoDeepSent:e=>`Mémo détaillé lancé sur ${e} — prêt dans 35 à 40 minutes`,memoInstantSent:e=>`Analyse lancée sur ${e} — mémo prêt dans ~15 minutes`,memoNone:"Aucun mémo pour ce dossier — lancez l’analyse.",creditsCap:"CRÉDITS MÉMO",creditsToday:"aujourd’hui",creditsRecharge:"Recharger →",creditsCost:e=>`−${e} crédit${e>1?"s":""}`,creditsNone:"Crédit épuisé — rechargez ou attendez demain 7 h.",rechargeTitle:"Crédits mémo",rechargeHint:e=>`Votre offre comprend <b>${e} crédits par jour</b>, rechargés chaque matin. Besoin de plus tout de suite ?`,rechargeNote:"Les crédits achetés n’expirent pas. Ils s’utilisent après vos crédits quotidiens.",rechargeBuy:"Ajouter",rechargeUnit:(e,a)=>`${e} crédits — ${a} €`,onbTag:"APERÇU PRIVÉ · LECTURE SEULE",onbTitle:e=>`Votre deal flow est prêt — <b>${e} cibles retenues</b> par Stan`,onbSub:e=>`${e} sociétés passées au crible sur votre thèse. Les dix premières lignes sont ouvertes ; le reste se débloque en trente minutes.`,onbSteps:[["Stan a étudié votre présence en ligne","Site, offres d’emploi, presse — il en a déduit vos angles d’acquisition."],["Il a criblé le marché","Chaque société confrontée à vos critères."],["Il a rédigé des mémos","Analyses chiffrées, synergies, verdicts."],["À vous de trancher","Trente minutes pour régler votre deal flow et tout débloquer."]],onbCta:"Choisir un créneau →",lockbarText:"Paramétrons votre deal flow rêvé en 30 minutes",lockbarCta:"Choisir un créneau",rdvHeading:"Paramétrons votre deal flow rêvé en 30 minutes",rdvSubBefore:"Choisissez un créneau ci-dessous, ou contactez votre expert Corporate Development directement au ",rdvSubMid:" ou par email à ",rdvCoFallback:"votre société",rdvUnlockLabel:e=>`Déblocage ${e}`,rdvUnlocks:e=>[["Accédez à toutes vos cibles retenues","Mémos d’investissement complets, synergies, contacts, angle d’approche."],["Stratégie d’acquisition construite avec vous","Hypothèse + stratégie d’acquisition recalibrées en live, avec vous."],["Tranchons ensemble les cibles que vous voulez","OUI / NON, sourcing de sociétés similaires, export et synchronisation CRM."],["Votre AI Corporate Developer est lancé",`Stan travaille pour ${e} chaque matin — vous n’avez plus qu’à décider.`]],funScreened:e=>`sociétés passées au crible${e?` depuis le ${e}`:""}`,funKept:"retenues comme cibles sérieuses",funAnalyzed:"analysées en profondeur",funShown:"présentées ici pour recueillir votre avis",funToday:e=>`dont ${e} aujourd’hui`,actTitle:"Activité des 30 derniers jours",actScreened:"criblées",actKept:"retenues",actToday:"aujourd’hui",fstatsShow:"Voir l’activité des 30 derniers jours",fstatsHide:"Masquer l’activité",sinceTitle:(e,a)=>`${e} nouvelle${e>1?"s":""} cible${e>1?"s":""} depuis votre dernière visite (${a})`,sinceMore:e=>`+${e} autres`,sinceOut:e=>`${e} sortie${e>1?"s":""} de la liste`,identSyncConfirm:"Relancer le sourcing maintenant ? Un passage des moteurs prend quelques minutes.",plugAutoOn:e=>`⚡ Envoi automatique ACTIF (${e}) — chaque cible que vous validez part toute seule en séquence.`,plugAutoOff:"Envoi automatique inactif — valider une cible ne l’envoie nulle part.",plugCrm:"Créer les dossiers dans mon CRM",plugCrmHint:"Collez l’URL de webhook de votre outil : chaque décision y arrive aussitôt.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Enregistrer",plugSaved:"Webhook enregistré",plugTest:"Tester",plugTested:"Test envoyé",plugTestThrottled:"Déjà testé il y a moins de 5 s — rien n’est reparti.",plugRemove:"Retirer",plugRemoved:"Webhook retiré",plugMcp:"Claude & IA (MCP)",plugBulk:"Contacter mes cibles",plugBulkHint:"Voyez d’abord qui partirait : l’aperçu ne contacte personne.",plugBulkTabs:[["valides","Validées"],["call","À trancher"],["retenus","Retenues"]],plugBulkPreview:"👁 Aperçu",bulkArm:"📤 Envoyer pour de vrai",bulkNoDest:"Aucune destination enregistrée : renseignez d’abord votre outil ci-dessus.",bulkScope:"Ce qui part, c’est l’onglet entier côté serveur — pas la vue filtrée à l’écran.",bulkWarn:(e,a)=>`Vous allez contacter ${e} société${e>1?"s":""} via ${a}. C’est irréversible, et le serveur ne vérifie pas si elles ont déjà été contactées.`,bulkConfirm:e=>`Oui, envoyer via ${e}`,bulkCancel:"Annuler",bulkSending:"Envoi en cours…",bulkDone:(e,a,r)=>`${e} société${e>1?"s":""} envoyée${e>1?"s":""}. ${a} joignable${a>1?"s":""} sur LinkedIn seulement, ${r} sans email.`,bulkNone:"Aucune société n’avait d’email : rien n’a été envoyé.",bulkLocked:(e,a)=>`Envoyé le ${e} — ${a} société${a>1?"s":""}. Nouvel envoi possible dans 24 h.`,bulkPreviewFirst:"Lancez d’abord l’aperçu : il dit exactement qui partirait.",cdConviction:"Conviction",cdAnalyse:"Analyse",cdSociete:"Société",cdContact:"Contact",cdSuivi:"Suivi",cdCrible:"au crible",cdMemo:e=>e?`après mémo ${e}`:"après mémo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict du",cdSector:"Secteur",cdStage:"Stade",cdCountry:"Où",cdSite:"Site",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Détectée le",cdName:"Dirigeant",cdEmail:"Email",cdCeoStatus:"Votre décision",cdEngagement:"Engagement",qaTitle:"Décrire cette société",qaHint:"Lecture de son site, puis quatre blocs : à qui elle s’adresse, ce qu’elle vend, comment elle gagne de l’argent, et ce qu’il faut en retenir. Aucun verdict — le crible a déjà tranché.",qaRun:"📄 Décrire",qaBusy:"Lecture du site…",qaVP:"À qui, et pour quel problème",qaProduct:"Ce qu’elle vend",qaModel:"Comment elle gagne de l’argent",qaSummary:"À retenir",qaSources:e=>`${e} page${e>1?"s":""} lue${e>1?"s":""}`,qaQuota:"Plafond du jour atteint : réessayez demain.",qaEmpty:"Le site ne dit rien d’exploitable — rien n’a été inventé.",dsBtn:"🗂 Dossier comité",dsHint:"Un A4 par société : le verdict du crible et sa raison, l’identité, l’analyse quand elle a été lancée, et votre décision. Aucun chiffre financier — nous n’en recevons aucun.",dsTitle:e=>`Dossier comité — ${e} société${e>1?"s":""}`,dsCap:(e,a)=>`Les ${e} premières sur ${a} : un comité ne lit pas ${a} pages.`,dsWhy:"Pourquoi cette société est devant vous",dsAnalysis:"Ce qu’elle fait",dsDecision:"Votre décision",dsEmpty:"Aucune société dans la sélection courante.",dsFoot:e=>`Sélection établie par Proplace pour ${e} — document interne, ne pas diffuser.`,covFunnel:"Votre marché, au crible",covScreened:e=>`${e} sociétés passées au crible`,covOf:e=>`sur ~${e} sociétés pertinentes`,covNoEst:"Votre marché adressable n’est pas encore chiffré : la couverture s’affichera dès qu’il le sera.",covPace:e=>`${e} sociétés criblées par jour`,covEta:e=>e<=0?"Votre marché est entièrement couvert.":e<60?`Couverture complète dans ~${e} jours, à ce rythme.`:`Couverture complète dans ~${Math.round(e/30)} mois, à ce rythme.`,covRate:"Rythme d’analyse",covRateHint:"Combien de sociétés retenues reçoivent un verdict argumenté chaque jour. À zéro, l’analyse est en pause.",covRateNow:e=>e<=0?"En pause":`${e} par jour`,covKept:"retenues",covAna:"analysées",covShown:"présentées ici",bulkReplayed:"Cet envoi avait déjà été enregistré : rien n’est reparti. Vos cibles n’ont été contactées qu’une fois.",bulkPending:"L’envoi précédent est encore en cours : rien n’a été renvoyé.",plugBulkResult:(e,a,r)=>`${e} partiraient par email · ${a} par LinkedIn · ${r} sans contact.`,memoAlertTitle:"🔔 Votre alerte mémo",memoAlertSub:"Recevez un email dès qu’un mémo de votre fonds est finalisé — avec son lien direct.",memoAlertToggle:"M’envoyer chaque mémo terminé",memoAlertEmail:"Destinataire",memoAlertSaved:"Enregistré ✓",memoAlertErr:"Échec d’enregistrement — réessayez",memoAlertSections:"Sections de l’email",memoAlertSec:[["swot","SWOT"],["action","Plan d’action"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Verdict de Stan"]],memoAlertPreview:"👁 Prévisualiser",memoAlertBtn:"Votre alerte mémo",alertTabDaily:"Quotidien",alertTabWeekly:"Hebdomadaire",alertTabMarket:"Le marché",alertSections:"Sections de l’email",alertSec:[["pending","Dossiers à trancher"],["stats","Vos chiffres clés"],["autonomous","Décisions automatiques de Stan"],["market","Analyse de marché"],["sourcing","Votre sourcing du jour"]],alertSecSlow:"(plus long à générer)",alertSecNote:"Décocher l’analyse de marché rend l’aperçu instantané.",alertPreview:"👁 Prévisualiser l’email d’aujourd’hui",alertPreviewWeekly:"👁 Prévisualiser le bilan",alertSubject:"Objet :",alertPreviewBusy:"Aperçu en cours de génération, réessayez dans quelques secondes.",alertPreviewRetry:e=>`Génération en cours — nouvel essai dans ${e} s…`,alertPreviewFail:"Aperçu indisponible pour l’instant — décochez « Analyse de marché » pour l’obtenir tout de suite.",alertPreviewEmpty:"À cet instant : rien à trancher — l’email ne partira pas.",alertTest:"✉ M’envoyer un test",alertTestOk:e=>`✓ Envoyé à ${e} — vérifiez aussi vos spams/promotions.`,alertTestHint:"N’affecte pas l’envoi quotidien.",alertWeeklySub:"Un email par semaine : le bilan de la semaine et ce que votre thèse a appris de vos décisions.",alertWeeklyOn:"📬 Recevoir votre bilan de la semaine",alertWeeklyWhen:"Jour et heure d’envoi (Paris)",alertDow:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],alertLoadError:"Impossible de charger vos préférences.",alertThrottled:"Trop vite — attendez quelques secondes et refaites le réglage.",alertInactive:"Votre accès n’est pas encore actif — parlons-en.",alertNoLead:"Destinataire à définir avec nous.",exportViewTitle:"CSV de la vue filtrée",exportViewDesc:e=>`Les ${e} lignes de votre sélection actuelle — onglet, facettes, recherche et fenêtre comprises. Séparateur « ; », prêt pour Excel.`,exportViewBtn:"Télécharger",exportViewDone:e=>`${e} ligne${e>1?"s":""} exportée${e>1?"s":""}`,printTitle:"Imprimer la sélection",printDesc:e=>`Les ${e} lignes à l'écran, en A4 : pour qui, à quelle date, l'entonnoir chiffré, puis la liste. La carte, les filtres et les boutons ne sont pas imprimés.`,printBtn:"Imprimer",exportViewHead:"Société|Statut|Verdict Stan|Score|Pays|Secteur|Étape post-OUI|Contact|Email|Lien mémo|Date|Raison",tourStart:"Lancer le guide pas à pas",tourIntro:"La visite guidée couvre toute la page de A à Z, sur la vraie page : chaque étape éclaire l’endroit exact — de votre thèse à votre alerte email.",tourStep:(e,a)=>`Étape ${e}/${a}`,tourPrev:"← Précédent",tourNext:"Suivant →",tourDone:"Terminer",tourClose:"Fermer",tourPlayTitle:"Visite guidée",ahaATitle1:"1 dossier attend votre décision",ahaATitleN:e=>`${e} dossiers attendent votre décision`,ahaABody:"OUI = on prépare l’approche ; NON = on affine le tir.",ahaABtn:"Trancher maintenant →",ahaBTitle:"Un mémo complet vous attend",ahaBBody:e=>`${e} a déjà son mémo d’analyse — lisible en 3 minutes.`,ahaBBtn:"Ouvrir le mémo →",ahaCTitle:"Vos premières cibles sont là",ahaCBody:"Dites-nous si ça vise juste — chaque retour affine la machine.",ahaCBtn:"Voir mes critères →",howto:[["**Réglez votre ciblage.** Ouvrez « Vos critères » : c’est votre thèse — ce que vous cherchez, ce que vous écartez. Corrigez-la en langage naturel dès que quelque chose cloche ; le sourcing du lendemain matin s’y réaligne tout seul.","crit"],["**Sourcez un maximum de cibles.** Évaluez une société en collant son nom ou son site — ou une liste entière —, et regardez vos moteurs ratisser le web avec vos réglages.","eval"],["**Faites avancer chaque cible dans le tunnel, de gauche à droite** — Évaluées › Retenues › Analysées › À trancher › Validées › Écartées. Sur chaque carte, « Votre statut » la classe en un clic ; votre note « pourquoi » reste visible. Les 👍/👎 ne classent jamais : ils affinent votre thèse.","tab1"],["**Tranchez les « À trancher ».** Stan vous laisse le dernier mot : OUI (Validée) ou NON (Écartée), avec un mot sur le pourquoi.","tab3"],["**Comprenez comment Stan classe vos cibles.** Votre statut prime toujours sur le verdict de Stan. Le pont entre les deux est expliqué dans « Vos critères » : Retenu ↔ MATCH, Analysé ↔ CONSIDER · MONITOR, À trancher ↔ CALL, Écarté ↔ NO MATCH · PASS…","crit"],["**Concentrez-vous sur les Validées** — et menez chaque dossier jusqu’au bout du closing !","tab4"],["**Faites sortir tout ça de la page.** Le bouton 🔌 la branche sur vos outils : envoyer vos cibles dans votre séquence d’emailing, créer les fiches dans votre CRM, enrichir les dossiers que vous y avez déjà.","plug"],["**Ne revenez que si ça vaut le coup.** Le bouton 🔔 règle deux emails : le quotidien des dossiers à trancher, et le bilan de la semaine.","alert"]],fhintLive:"Ce qui bouge en ce moment sur votre marché — cliquez une vignette pour ouvrir la source.",fhintGoal:"Ce que les moteurs ont sourcé cette nuit, et ce qu’il reste à évaluer.",fhintDec:"La décision de Stan, dite et justifiée : c’est à quoi renvoient les « STEP A, C… ».",fhintStatus:"Votre statut prime toujours sur le verdict de Stan — et il s’enregistre aussitôt.",tourT:{ident:"Votre page",live:"Le direct",goal:"Le sourcing du matin",funnel:"Le tunnel",tuto:"L’étape en cours",demand:"Évaluer une société",dec:"Pourquoi cette décision",status:"Votre statut",learn:"Vos 👍 / 👎",tools:"Sortir de la page",crit:"Le paramétrage de Stan"},csLabel:"Votre statut :",csKept:"Retenu",csAnalysed:"Analysé",csPending:"À trancher",csValidated:"Validé",csOut:"Écarté",csYes:"✓ Oui",csNo:"✗ Non",csSaved:"✓ enreg.",csNoteSaved:"note ajoutée ✓",csNoteOk:"OK",csNotePh:"Pourquoi ? (une ligne)",csAnaConfirm:"Aucun mémo sur ce dossier — le passer en Analysé quand même ?",whySend:"Envoyer",whyYesPh:"Pourquoi ce OUI ? (une ligne — ça affine votre thèse)",whyNoPh:"Pourquoi ce NON ? (une ligne — ça affine votre thèse)",stgLabel:"Votre avancement :",stg:[["todo","○ À faire"],["sent","✉ Contactée"],["replied","💬 A répondu"],["meeting","🤝 RDV"],["loi","📄 LOI"],["signed","✅ Signée"],["lost","✖ Perdue"]],j4Badge:e=>`⏰ Sans réponse depuis ${e} j — relancer ?`,actRepeche:"↩ Repêcher",actErr:"Envoi impossible — réessayez dans un instant.",actNotPersisted:"Impossible d’enregistrer ce statut sur ce dossier.",decidedYes:e=>`${e} validée — place à l’approche`,decidedNo:e=>`${e} écartée`,repeched:e=>`${e} repêchée — de retour dans Retenues`,critHypTitle:"Notre hypothèse sur votre stratégie",critHypSub:"Toute la sélection en découle. Si elle est à côté, corrigez-la ci-dessous — la recherche est réalignée et vous recevez une sélection corrigée.",critProfilsTitle:"Vos profils de cibles",critProfilsSub:"Les familles de cibles que la machine traque en continu — chaque profil se déplie.",critLookFor:"Ce que nous recherchons",critRuleOut:"Ce que nous écartons",critGateTitle:"Le crible de Stan — comment il décide Retenu / Écarté",critGateSub:"Chaque société est confrontée à ces critères. C’est à eux que renvoient les « STEP A, C… » des raisons affichées sur les lignes.",rubricTitle:"Comment Stan décide l’analyse (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Une fois retenu, Stan approfondit et tranche. Voici ce qui fait pencher la balance.",qvTitle:"Les verdicts de Stan — où va chaque dossier",qv:[["CALL PENDING","le choix n°1 de Stan : à trancher OUI/NON maintenant → onglet « À trancher »."],["CALL YES","vous avez tranché OUI — le dossier rejoint « Validées », place à l’approche."],["CALL NO","vous avez tranché NON — le dossier rejoint « Écartées »."],["CONSIDER","solide, mérite un regard plus attentif → onglet « Analysées »."],["MONITOR","à surveiller, pas prioritaire pour l’instant → onglet « Analysées »."],["PASS","non pertinent pour le moment → onglet « Écartées »."]],brTitle:"Le routage automatique — où le verdict de Stan envoie chaque dossier",br:[["Retenu","MATCH — retenue au sourcing, mémo à venir → onglet « Retenues »"],["Analysé","CONSIDER · MONITOR — mémo fait, pas de call → onglet « Analysées »"],["À trancher","CALL PENDING — Stan propose un call, votre OUI/NON est attendu → onglet « À trancher »"],["Validé","CALL YES — vous avez tranché OUI → onglet « Validées »"],["Écarté","NO MATCH · PASS · CALL NO — refus de Stan, ou votre NON sur un call → onglet « Écartées »"]],brNote:"Un CALL passe par 3 états : CALL PENDING (le mémo est TERMINÉ, Stan propose le call — votre décision est en attente) › CALL YES (vous validez) › CALL NO (vous écartez). PENDING ne veut jamais dire « en cours d’analyse » : l’analyse est déjà faite.",vt:{MATCH:"MATCH — retenu : correspond à vos critères.","NO MATCH":"NO MATCH — écarté par vos critères.","CALL PENDING":"CALL — le choix n°1 de Stan : à trancher OUI/NON maintenant.","CALL YES":"CALL YES — vous avez tranché OUI : le dossier rejoint « Validées ».","CALL NO":"CALL NO — vous avez tranché NON : le dossier rejoint « Écartées ».",CONSIDER:"CONSIDER — solide, mérite un regard plus attentif.",MONITOR:"MONITOR — à surveiller, pas prioritaire pour l’instant.",PASS:"PASS — non pertinent pour le moment."},vKept:"Retenu",vOut:"Écarté",learnLine:"Comme sur Netflix, chaque 👍/👎 affine ce que Stan vous montre ensuite — vous jugez, il apprend.",learnLink:"Ajuster mes critères →",funnelHint:"Retrouvez ici toutes vos cibles sourcées automatiquement dans <b>évaluées</b> puis passez celles que vous souhaitez contacter dans <b>validées</b>.",fhintClose:"Masquer cette aide",queueTitle:"File de traitement",queueDone:(e,a)=>`<b>${e} / ${a}</b> mémos générés`,queueTomorrow:"À VENIR — ORDRE PROJETÉ, RECALCULÉ CHAQUE MATIN",queueToday:"ANALYSÉS AUJOURD’HUI",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugConfigured:"Configuré",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(e,a)=>`<b>${e}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:e=>`${e} passées au crible`,alertTitle:"🔔 Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"VOS ANGLES D’ACQUISITION",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarBusy:"🧬 Recherche…",similarNote:"Les retenues entrent dans votre liste au prochain rafraîchissement.",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:e=>`actualisée le ${e}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:e=>`actualisée le ${e}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:e=>`Onboarding lancé pour ${e} — suivez l’avancement dans le cockpit`,rsOpen:"🔎 Rechercher des sociétés à évaluer",rsUrlPh:"coller l’URL d’un article, d’une vidéo ou d’une note",rsTextPh:"Coller ici l’article complet",rsOr:"ou",rsGo:"🔎 Résumer et rechercher des sociétés",rsHint:"RÉSUMÉ · CARTE MENTALE · SOCIÉTÉS",rsRunning:"Lecture en cours…",rsRunningVid:"Transcription de la vidéo…",rsElapsed:e=>`${e} s`,rsNeed:"Collez une URL, ou le texte complet de l’article.",rsFound:e=>e?`${e} société${e>1?"s":""} trouvée${e>1?"s":""} dans ce contenu.`:"Aucune société nommée dans ce contenu.",rsLink:"Voir la page publiée ↗",rsPublishing:"Publication de la fiche…",rsPublishFail:"Fiche produite, page non publiée",rsTags:"TAGS",rsClose:"Fermer",rsMindmap:"CARTE MENTALE",rsSource:"Source ↗",rsSaving:"Enregistrement…",rsSaved:"✓ Enregistrée dans votre cockpit",rsSaveFail:"Fiche produite, NON enregistrée",rsArchOpen:e=>`voir les ${e} recherche${e>1?"s":""} déjà lancée${e>1?"s":""}`,rsArchTitle:"Recherches déjà lancées",rsArchBack:"← toutes les recherches",rsArchLoading:"Chargement…",rsArchEmpty:"Aucune recherche enregistrée pour l’instant.",rsArchGone:"Cette recherche n’est plus disponible.",rsRowCounts:(e,a)=>`${e} citée${e>1?"s":""} · ${a} à évaluer`,rsPub:"Publiée",rsPriv:"Non publiée",rsCited:"Sociétés citées",rsCitedHint:"Toutes les sociétés nommées dans ce contenu.",rsMatch:"Sociétés qui pourraient correspondre",rsMatchHint:"Suggérées à partir de la thèse du contenu — elles n’y sont pas forcément nommées.",rsEvalOne:"⚡ Évaluer",rsAddAll:e=>`＋ Ajouter les ${e} à la liste`,rsNoCompanies:"Aucune société dans ce contenu.",rsConclusion:"Ce que ça implique",rsCriteria:"Critères de sourcing",rsSources:"Pour creuser",groupEngine:"Moteur",groupNone:"Rien",browse:e=>`Parcourir les ${e}`,chainAll:e=>`Enchaîner les ${e}`,colCompany:"SOCIÉTÉ & DESCRIPTION",grpCount:(e,a)=>`${e} à envoyer sur ${a} sourcées`,emptyTab:"AUCUNE CIBLE DANS CET ONGLET",emptyScope:"AUCUNE SOCIÉTÉ DANS CE PÉRIMÈTRE",contWorld:"Monde",evalGoOn:e=>`⚡ Évaluer ${e}`,rowExtract:"🔎 Extraire les sociétés",toSendCtx:(e,a)=>`sur ${e} dans l'édition${a>0?` (${a} sans société identifiable)`:""}`,grpCard:"la carte du jour",edLabel:"dans l'édition du jour",edSplit:(e,a)=>`${e} évaluable${e!==1?"s":""} ⚡${a>0?` · ${a} à explorer 🔎`:""}`},No={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Everything STAN ran through the screen on this window: every company judged against your criteria, kept or discarded automatically.","STAN kept these companies against your criteria, decisions justified. WE verify its picks — discard, validate, or launch an analysis on the uncertain ones.","STAN’s memos, reviewed by US: quantified synergies, argued verdict. Validate the ones to contact, set “to decide” where you hesitate.","YOUR move: the best targets, presented on Monday by your Corporate Developer. Call YES or NO — your yeses move to Validated.","Your YESES — the shortlist to contact. WE prepare the approach, or engage it on your behalf (Enterprise plan).","Discarded by STAN or by YOU. Every NO sharpens Stan’s criteria. Recover one anytime.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(e,a,r)=>`<b>${e} Stan CALL${e>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${r} awaiting answer.</b>`,morningThesis:(e,a)=>`<b>${e}</b> compan${e===1?"y was":"ies were"} sourced this morning by our engines.`+(a?` <b>${a}</b> still to screen.`:' <span class="ok">All screened.</span>'),morningEval:e=>`▶ Work through them (${e})`,identTitle:e=>`Targets for ${e}`,identCoverage:"MARKET COVERAGE",identCoverageOf:(e,a)=>`<b>${e}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"MEMO ENGINE",identPerDay:"memo/day",identPending:e=>`→ ${e} queued`,identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Reverse sort order",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:e=>`Decision undone on ${e}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ YES",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:e=>`${e} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"SCREEN · MEMO",colScore:"SCORE",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:e=>`Since Stan’s verdict: ${e} d`,waitChip:e=>`⏱ ${e} d`,densList:"LIST",densOpen:"OPEN",densMaxi:"CARDS",memoSynth:"SUMMARY",memoOpenFull:"📖 Read the full memo →",memoDeep:"⚡ Detailed memo",memoDeepHint:"For this file to decide, you can launch the detailed analysis: market study, competitive quadrant, scenarios.",memoDeepSent:e=>`Detailed memo launched on ${e} — ready in 35 to 40 minutes`,memoInstantSent:e=>`Analysis launched on ${e} — memo ready in ~15 minutes`,memoNone:"No memo for this file yet — launch the analysis.",creditsCap:"MEMO CREDITS",creditsToday:"today",creditsRecharge:"Top up →",creditsCost:e=>`−${e} credit${e>1?"s":""}`,creditsNone:"Out of credits — top up or wait for tomorrow 7am.",rechargeTitle:"Memo credits",rechargeHint:e=>`Your plan includes <b>${e} credits per day</b>, refilled every morning. Need more right now?`,rechargeNote:"Purchased credits never expire. They are used after your daily credits.",rechargeBuy:"Add",rechargeUnit:(e,a)=>`${e} credits — €${a}`,onbTag:"PRIVATE PREVIEW · READ ONLY",onbTitle:e=>`Your deal flow is ready — <b>${e} targets kept</b> by Stan`,onbSub:e=>`${e} companies screened against your thesis. The first ten rows are open; the rest unlocks in thirty minutes.`,onbSteps:[["Stan studied your online presence","Website, job posts, press — it inferred your acquisition angles."],["It screened the market","Every company checked against your criteria."],["It wrote memos","Quantified analyses, synergies, verdicts."],["Your turn to decide","Thirty minutes to tune your deal flow and unlock everything."]],onbCta:"Pick a slot →",lockbarText:"Let’s set up your dream deal flow in 30 minutes",lockbarCta:"Pick a slot",rdvHeading:"Let’s set up your ideal deal flow in 30 minutes",rdvSubBefore:"Pick a slot below, or reach your Corporate Development expert directly at ",rdvSubMid:" or by email at ",rdvCoFallback:"your company",rdvUnlockLabel:e=>`Unlock ${e}`,rdvUnlocks:e=>[["Access every target you kept","Full investment memos, synergies, contacts, approach angle."],["Acquisition strategy built with you","Hypothesis + acquisition strategy recalibrated live, with you."],["Let’s decide together on the targets you want","YES / NO, sourcing of similar companies, export and CRM sync."],["Your AI Corporate Developer is live",`Stan works for ${e} every morning — all you have to do is decide.`]],funScreened:e=>`companies screened${e?` since ${e}`:""}`,funKept:"kept as serious targets",funAnalyzed:"analysed in depth",funShown:"presented here to gather your view",funToday:e=>`incl. ${e} today`,actTitle:"Last 30 days of activity",actScreened:"screened",actKept:"kept",actToday:"today",fstatsShow:"Show the last 30 days of activity",fstatsHide:"Hide activity",sinceTitle:(e,a)=>`${e} new target${e>1?"s":""} since your last visit (${a})`,sinceMore:e=>`+${e} more`,sinceOut:e=>`${e} left the list`,identSyncConfirm:"Relaunch sourcing now? An engine pass takes a few minutes.",plugAutoOn:e=>`⚡ Automatic sending ACTIVE (${e}) — every target you validate goes into the sequence on its own.`,plugAutoOff:"Automatic sending off — validating a target sends it nowhere.",plugCrm:"Create the records in my CRM",plugCrmHint:"Paste your tool’s webhook URL: every decision lands there right away.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Save",plugSaved:"Webhook saved",plugTest:"Test",plugTested:"Test sent",plugTestThrottled:"Already tested less than 5s ago — nothing was sent.",plugRemove:"Remove",plugRemoved:"Webhook removed",plugMcp:"Claude & AI (MCP)",plugBulk:"Contact my targets",plugBulkHint:"See who would go out first: the preview contacts nobody.",plugBulkTabs:[["valides","Validated"],["call","To decide"],["retenus","Kept"]],plugBulkPreview:"👁 Preview",bulkArm:"📤 Send for real",bulkNoDest:"No destination saved: set up your tool above first.",bulkScope:"What goes out is the whole server-side tab — not the filtered view on screen.",bulkWarn:(e,a)=>`You are about to contact ${e} compan${e>1?"ies":"y"} via ${a}. This cannot be undone, and the server does not check whether they were already contacted.`,bulkConfirm:e=>`Yes, send via ${e}`,bulkCancel:"Cancel",bulkSending:"Sending…",bulkDone:(e,a,r)=>`${e} compan${e>1?"ies":"y"} sent. ${a} reachable on LinkedIn only, ${r} with no email.`,bulkNone:"No company had an email: nothing was sent.",bulkLocked:(e,a)=>`Sent on ${e} — ${a} compan${a>1?"ies":"y"}. Next send available in 24 h.`,bulkPreviewFirst:"Run the preview first: it says exactly who would go out.",cdConviction:"Conviction",cdAnalyse:"Analysis",cdSociete:"Company",cdContact:"Contact",cdSuivi:"Follow-up",cdCrible:"screening",cdMemo:e=>e?`after ${e} memo`:"after memo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict on",cdSector:"Sector",cdStage:"Stage",cdCountry:"Where",cdSite:"Website",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Detected on",cdName:"Decision-maker",cdEmail:"Email",cdCeoStatus:"Your decision",cdEngagement:"Engagement",qaTitle:"Describe this company",qaHint:"Reads its website, then four blocks: who it serves, what it sells, how it makes money, and what to remember. No verdict — the screening already decided.",qaRun:"📄 Describe",qaBusy:"Reading the website…",qaVP:"Who, and for what problem",qaProduct:"What it sells",qaModel:"How it makes money",qaSummary:"Takeaway",qaSources:e=>`${e} page${e>1?"s":""} read`,qaQuota:"Daily cap reached: try again tomorrow.",qaEmpty:"The website says nothing usable — nothing was invented.",dsBtn:"🗂 Committee pack",dsHint:"One A4 per company: the screening verdict and its reason, the identity, the analysis when it was run, and your decision. No financial figures — we receive none.",dsTitle:e=>`Committee pack — ${e} compan${e>1?"ies":"y"}`,dsCap:(e,a)=>`The first ${e} of ${a}: a committee will not read ${a} pages.`,dsWhy:"Why this company is in front of you",dsAnalysis:"What it does",dsDecision:"Your decision",dsEmpty:"No company in the current selection.",dsFoot:e=>`Selection by Proplace for ${e} — internal document, do not circulate.`,covFunnel:"Your market, screened",covScreened:e=>`${e} companies screened`,covOf:e=>`out of ~${e} relevant companies`,covNoEst:"Your addressable market is not sized yet: coverage will show as soon as it is.",covPace:e=>`${e} companies screened per day`,covEta:e=>e<=0?"Your market is fully covered.":e<60?`Full coverage in ~${e} days at this pace.`:`Full coverage in ~${Math.round(e/30)} months at this pace.`,covRate:"Analysis pace",covRateHint:"How many kept companies get a reasoned verdict each day. At zero, analysis is paused.",covRateNow:e=>e<=0?"Paused":`${e} per day`,covKept:"kept",covAna:"analysed",covShown:"shown here",bulkReplayed:"This send was already recorded: nothing went out again. Your targets were contacted once.",bulkPending:"The previous send is still running: nothing was sent again.",plugBulkResult:(e,a,r)=>`${e} would go by email · ${a} by LinkedIn · ${r} with no contact.`,memoAlertTitle:"🔔 Your memo alert",memoAlertSub:"Get an email as soon as one of your fund’s memos is finalised — with its direct link.",memoAlertToggle:"Send me every finished memo",memoAlertEmail:"Recipient",memoAlertSaved:"Saved ✓",memoAlertErr:"Could not save — try again",memoAlertSections:"Sections of the email",memoAlertSec:[["swot","SWOT"],["action","Action plan"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Stan’s verdict"]],memoAlertPreview:"👁 Preview",memoAlertBtn:"Your memo alert",alertTabDaily:"Daily",alertTabWeekly:"Weekly",alertTabMarket:"Market",alertSections:"Sections of the email",alertSec:[["pending","Files to decide on"],["stats","Your key numbers"],["autonomous","Stan’s automatic decisions"],["market","Market analysis"],["sourcing","Your sourcing of the day"]],alertSecSlow:"(slower to generate)",alertSecNote:"Unticking the market analysis makes the preview instant.",alertPreview:"👁 Preview today’s email",alertPreviewWeekly:"👁 Preview the weekly",alertSubject:"Subject:",alertPreviewBusy:"Preview being generated, try again in a few seconds.",alertPreviewRetry:e=>`Generating — new attempt in ${e}s…`,alertPreviewFail:"Preview unavailable right now — untick “Market analysis” to get it immediately.",alertPreviewEmpty:"Right now: nothing to decide on — the email will not go out.",alertTest:"✉ Send me a test",alertTestOk:e=>`✓ Sent to ${e} — check your spam/promotions too.`,alertTestHint:"Does not affect the daily send.",alertWeeklySub:"One email a week: the week in review and what your thesis learned from your decisions.",alertWeeklyOn:"📬 Receive your week in review",alertWeeklyWhen:"Day and time (Paris)",alertDow:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],alertLoadError:"Could not load your preferences.",alertThrottled:"Too fast — wait a few seconds and set it again.",alertInactive:"Your access is not active yet — let’s talk about it.",alertNoLead:"Recipient to be set with us.",exportViewTitle:"CSV of the filtered view",exportViewDesc:e=>`The ${e} rows of your current selection — tab, facets, search and window included. Semicolon separated, ready for Excel.`,exportViewBtn:"Download",exportViewDone:e=>`${e} row${e>1?"s":""} exported`,printTitle:"Print the selection",printDesc:e=>`The ${e} rows on screen, on A4: who it is for, as of when, the funnel figures, then the list. The map, filters and buttons are not printed.`,printBtn:"Print",exportViewHead:"Company|Status|Stan verdict|Score|Country|Sector|Post-YES stage|Contact|Email|Memo link|Date|Reason",tourStart:"Start the step-by-step guide",tourIntro:"The guided tour covers the whole page A to Z, on the live page: each step spotlights the exact spot — from your thesis to your email alert.",tourStep:(e,a)=>`Step ${e}/${a}`,tourPrev:"← Previous",tourNext:"Next →",tourDone:"Finish",tourClose:"Close",tourPlayTitle:"Guided tour",ahaATitle1:"1 file awaits your decision",ahaATitleN:e=>`${e} files await your decision`,ahaABody:"YES = we prepare the approach; NO = we sharpen the aim.",ahaABtn:"Decide now →",ahaBTitle:"A full memo is waiting for you",ahaBBody:e=>`${e} already has its analysis memo — a 3-minute read.`,ahaBBtn:"Open the memo →",ahaCTitle:"Your first targets are here",ahaCBody:"Tell us if the aim is right — every signal sharpens the machine.",ahaCBtn:"See my criteria →",howto:[["**Set your targeting.** Open “Your criteria”: it’s your thesis — what you look for and what you rule out. Fix it in plain language whenever something is off; the next morning’s sourcing realigns on its own.","crit"],["**Source as many targets as you can.** Evaluate a company by pasting its name or website — or a whole list — and watch your engines comb the web with your settings.","eval"],["**Move every target through the funnel, left to right** — Evaluated › Kept › Analysed › To decide › Validated › Ruled out. On each card, “Your status” files it in one click; your “why” note stays visible. The 👍/👎 never file anything: they sharpen your thesis.","tab1"],["**Settle the “To decide”.** Stan leaves you the final word: YES (Validated) or NO (Ruled out), with a word on the why.","tab3"],["**Understand how Stan sorts your targets.** Your status always overrides Stan’s verdict. The bridge between the two is explained in “Your criteria”: Kept ↔ MATCH, Analysed ↔ CONSIDER · MONITOR, To decide ↔ CALL, Ruled out ↔ NO MATCH · PASS…","crit"],["**Focus on the Validated** — and take every file all the way to closing!","tab4"],["**Push all of this out of the page.** The 🔌 button wires it into your tools: send your targets to your emailing sequence, create the records in your CRM, enrich the files you already have there.","plug"],["**Only come back when it’s worth it.** The 🔔 button sets two emails: the daily one for files to decide on, and the week in review.","alert"]],fhintLive:"What is moving on your market right now — click a tile to open the source.",fhintGoal:"What the engines sourced overnight, and what is left to evaluate.",fhintDec:"Stan’s decision, stated and justified: this is what the “STEP A, C…” refer to.",fhintStatus:"Your status always overrides Stan’s verdict — and it is saved right away.",tourT:{ident:"Your page",live:"Live",goal:"This morning’s sourcing",funnel:"The funnel",tuto:"The current step",demand:"Evaluate a company",dec:"Why this decision",status:"Your status",learn:"Your 👍 / 👎",tools:"Out of the page",crit:"Stan’s settings"},csLabel:"Your status:",csKept:"Kept",csAnalysed:"Analysed",csPending:"To decide",csValidated:"Validated",csOut:"Ruled out",csYes:"✓ Yes",csNo:"✗ No",csSaved:"✓ saved",csNoteSaved:"note added ✓",csNoteOk:"OK",csNotePh:"Why? (one line)",csAnaConfirm:"No memo on this file — mark it Analysed anyway?",whySend:"Send",whyYesPh:"Why this YES? (one line — it sharpens your thesis)",whyNoPh:"Why this NO? (one line — it sharpens your thesis)",stgLabel:"Your progress:",stg:[["todo","○ To do"],["sent","✉ Contacted"],["replied","💬 Replied"],["meeting","🤝 Meeting"],["loi","📄 LOI"],["signed","✅ Signed"],["lost","✖ Lost"]],j4Badge:e=>`⏰ No reply for ${e} days — follow up?`,actRepeche:"↩ Recover",actErr:"Could not save — try again in a moment.",actNotPersisted:"This status cannot be saved on this record.",decidedYes:e=>`${e} validated — on to the approach`,decidedNo:e=>`${e} ruled out`,repeched:e=>`${e} recovered — back in Kept`,critHypTitle:"Our hypothesis about your strategy",critHypSub:"The whole selection follows from it. If it is off, correct it below — the search is realigned and you get a corrected selection.",critProfilsTitle:"Your target profiles",critProfilsSub:"The families of targets the machine tracks continuously — each profile unfolds.",critLookFor:"What we look for",critRuleOut:"What we rule out",critGateTitle:"Stan’s screen — how it decides Kept / Ruled out",critGateSub:"Every company is checked against these criteria. They are what the “STEP A, C…” in the reasons on each row refer to.",rubricTitle:"How Stan decides the analysis (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Once kept, Stan digs deeper and rules. Here’s what tips the balance.",qvTitle:"Stan’s verdicts — where each file goes",qv:[["CALL PENDING","Stan’s top pick: decide YES/NO now → “To decide” tab."],["CALL YES","you decided YES — the file joins “Validated”, on to the approach."],["CALL NO","you decided NO — the file joins “Ruled out”."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],brTitle:"Automatic routing — where Stan’s verdict sends each file",br:[["Kept","MATCH — kept at sourcing, memo to come → “Kept” tab"],["Analysed","CONSIDER · MONITOR — memo done, no call → “Analysed” tab"],["To decide","CALL PENDING — Stan proposes a call, your YES/NO is awaited → “To decide” tab"],["Validated","CALL YES — you ruled YES → “Validated” tab"],["Ruled out","NO MATCH · PASS · CALL NO — Stan’s refusal, or your NO on a call → “Ruled out” tab"]],brNote:"A CALL goes through 3 states: CALL PENDING (the memo is DONE, Stan proposes the call — your decision is awaited) › CALL YES (you validate) › CALL NO (you rule out). PENDING never means “being analysed”: the analysis is already done.",vt:{MATCH:"MATCH — kept: it fits your criteria.","NO MATCH":"NO MATCH — ruled out by your criteria.","CALL PENDING":"CALL — Stan’s top pick: worth a YES/NO decision now.","CALL YES":"CALL YES — you ruled YES: the file joins “Validated”.","CALL NO":"CALL NO — you ruled NO: the file joins “Ruled out”.",CONSIDER:"CONSIDER — solid, worth a closer look.",MONITOR:"MONITOR — keep an eye on it, not a priority yet.",PASS:"PASS — not relevant right now."},vKept:"Kept",vOut:"Ruled out",learnLine:"Like Netflix, every 👍/👎 sharpens what Stan shows you next — you judge, it learns.",learnLink:"Tune my criteria →",funnelHint:"Find here all your automatically sourced targets in <b>evaluated</b>, then move the ones you want to contact into <b>validated</b>.",fhintClose:"Hide this hint",queueTitle:"Processing queue",queueDone:(e,a)=>`<b>${e} / ${a}</b> memos generated`,queueTomorrow:"UP NEXT — PROJECTED ORDER, RECOMPUTED EVERY MORNING",queueToday:"ANALYZED TODAY",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugConfigured:"Configured",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(e,a)=>`<b>${e}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:e=>`${e} screened`,alertTitle:"🔔 Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"YOUR ACQUISITION ANGLES",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarBusy:"🧬 Searching…",similarNote:"The kept ones enter your list at the next refresh.",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:e=>`updated ${e}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:e=>`updated ${e}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:e=>`Onboarding launched for ${e} — track progress in the cockpit`,rsOpen:"🔎 Find companies to evaluate",rsUrlPh:"paste the URL of an article, a video or a note",rsTextPh:"Paste the full article here",rsOr:"or",rsGo:"🔎 Summarize and find companies",rsHint:"SUMMARY · MIND MAP · COMPANIES",rsRunning:"Reading…",rsRunningVid:"Transcribing the video…",rsElapsed:e=>`${e}s`,rsNeed:"Paste a URL, or the full text of the article.",rsFound:e=>e?`${e} compan${e>1?"ies":"y"} found in this content.`:"No company named in this content.",rsLink:"See the published page ↗",rsPublishing:"Publishing the note…",rsPublishFail:"Note produced, page not published",rsTags:"TAGS",rsClose:"Close",rsMindmap:"MIND MAP",rsSource:"Source ↗",rsSaving:"Saving…",rsSaved:"✓ Saved to your cockpit",rsSaveFail:"Note produced, NOT saved",rsArchOpen:e=>`see the ${e} research run${e>1?"s":""} already launched`,rsArchTitle:"Research already launched",rsArchBack:"← all research runs",rsArchLoading:"Loading…",rsArchEmpty:"No research saved yet.",rsArchGone:"This research is no longer available.",rsRowCounts:(e,a)=>`${e} mentioned · ${a} to evaluate`,rsPub:"Published",rsPriv:"Not published",rsCited:"Companies mentioned",rsCitedHint:"Every company named in this content.",rsMatch:"Companies that could match",rsMatchHint:"Suggested from the content’s thesis — they are not necessarily named in it.",rsEvalOne:"⚡ Evaluate",rsAddAll:e=>`＋ Add all ${e} to the list`,rsNoCompanies:"No company in this content.",rsConclusion:"What it implies",rsCriteria:"Sourcing criteria",rsSources:"Dig deeper",groupEngine:"Engine",groupNone:"None",browse:e=>`Browse the ${e}`,chainAll:e=>`Chain the ${e}`,colCompany:"COMPANY & DESCRIPTION",grpCount:(e,a)=>`${e} to send out of ${a} sourced`,emptyTab:"NO TARGET IN THIS TAB",emptyScope:"NO COMPANY IN THIS SCOPE",contWorld:"World",evalGoOn:e=>`⚡ Evaluate ${e}`,rowExtract:"🔎 Extract companies",toSendCtx:(e,a)=>`of ${e} in the edition${a>0?` (${a} without an identifiable company)`:""}`,grpCard:"today's card",edLabel:"in today's edition",edSplit:(e,a)=>`${e} evaluable ⚡${a>0?` · ${a} to explore 🔎`:""}`},So={fr:{...Ma.fr,...jo},en:{...Ma.en,...No}},Co=`.atl2{
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
.atl2 .bulk .side .hint{white-space:nowrap}`,Eo=`
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
/* elle reste sur téléphone : c'est le seul compteur de la barre */
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
.atl2 .ops-open .oc-meta span{font-family:var(--mono);font-size:9px;
  letter-spacing:.08em;text-transform:uppercase;color:#64748B;background:#F1F5F9;
  border:1px solid var(--line);border-radius:5px;padding:4px 8px}
.atl2 .ops-open .oc-meta .oc-amt{color:var(--ink);font-weight:700;background:#fff}
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
`,zo=Co+Eo;function aa(e){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(e)||""}catch{return""}}function Ao(){const e=aa("teaser");if(e==="0"||e==="1")return e;try{if(typeof window<"u"&&window.parent&&window.parent!==window){const a=new URL(window.parent.location.href).searchParams.get("teaser");if(a==="0"||a==="1")return a;if(/\/cibles\/[^/]+\/open\/?$/i.test(window.parent.location.pathname||""))return"0"}}catch{}return""}function To(e,a){if(e||a.mode!=="client"||!a.token)return"visiteur";const r=Ao();return r==="0"?"client":r==="1"||aa("embed")==="1"&&aa("chrome")==="1"?"apercu":"client"}const Lo={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!1,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0,showMorning:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0}},Ro=e=>Lo[e],Ue=e=>Object.assign(e,{continent:Rr(e.cc)});function Ht(e){const a=new Set,r=[];for(const n of e){const o=(n.name||"").toLowerCase();!o||a.has(o)||(a.add(o),r.push(n))}return r}const Mo=60*60*1e3;function Oo(e){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+e)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>Mo?null:a}catch{return null}}function vt(e,a){try{sessionStorage.setItem("ppmap:swr:"+e,JSON.stringify({...a,ts:Date.now()}))}catch{}}const qo=e=>e==="default"?"":e==="ops"?"ops":"research:"+e.research;function Fo(e,a,r="default"){const n=r!=="default",o=h.useMemo(()=>e||n?{mode:"anon"}:kr(),[e,n]),i=h.useMemo(()=>n?"visiteur":To(e,o),[e,o,n]),l=h.useMemo(()=>Ro(i),[i]),s=i!=="visiteur",p=qo(r),[u,c]=h.useState([]),[d,f]=h.useState(""),[v,x]=h.useState(null),[b,g]=h.useState(null),[m,w]=h.useState(null),[N,y]=h.useState(()=>new Map),[k,S]=h.useState(()=>new Map),[L,F]=h.useState(""),[E,j]=h.useState(new Set),[A,T]=h.useState(null),[O,R]=h.useState(!0),[z,M]=h.useState(!1),[$,K]=h.useState(0),[X,pe]=h.useState(0),le=h.useRef(0),U=h.useMemo(()=>{var H;if(i!=="client")return"";try{return((H=jr())==null?void 0:H.email)||""}catch{return""}},[i]);h.useEffect(()=>{const H=++le.current;let _=!0;const G=()=>_&&H===le.current,ee=(s&&o.token?o.token:"pub:"+a)+(p?":"+p:""),ne=Oo(ee);return ne?(c(ne.objs.map(Ue)),ne.fund&&f(ne.fund),x(ne.marketEstimate??null),g(ne.criteria??null),w(ne.stats??null),F(ne.generatedAt||""),R(!1)):R(!0),(async()=>{try{if(r==="ops"){const ge=await _t(),ue=((ge==null?void 0:ge.recent_ops)||[]).map(Y=>{const Q=Ut(Y.company_name||Y.title?Y:{...Y,title:(Y.headline_fr||Y.headline||"").slice(0,120)},a),be=String(Y.rubrique||"").toLowerCase();return Q&&(be==="nominations"||be==="recrutements")&&(Q.engine=be),Q&&!String(Y.company_name||"").trim()&&(Q.noCo=!0),Q}).filter(Y=>!!Y).map(Y=>(Nr((Y.name||"").trim())||(Y.noCo=!0),Y));try{const Y=await Sr(),Q=Cr(Y),be=((Y==null?void 0:Y.date)||"").slice(0,10);if(Q.length&&be){const B=new Set;for(const de of ue){if(de.noCo||(de.date||"").slice(0,10)!==be)continue;const re=(de.name||"").trim().toLowerCase();if(!(re.length<3)){for(let fe=0;fe<Q.length;fe++)if(!B.has(fe)&&Q[fe].t.includes(re)){B.add(fe),de.decryptHtml=Q[fe].html;break}}}}}catch{}if(!G())return;c(ue.map(Ue)),vt(ee,{objs:ue})}else if(typeof r=="object"){const ue=(await Oa()||[]).filter(Q=>(Q.slug||"")===r.research).map(Q=>qa(Q,a)).filter(Q=>!!Q),Y=Ht(await Fa(ue,a));if(!G())return;c(Y.map(Ue)),vt(ee,{objs:Y})}else if(s&&o.token){const ge=Er(o.token),ue=_t(),Y=zr(o.token),Q=Ar(o.token),be=Tr(o.token),B=await ge;let de=B?B.targets:[];G()&&B&&(f(B.fund||""),x(B.marketEstimate??null),g(B.criteria??null),w(B.stats??null),F(B.generatedAt||""),c(de.map(Ue)),R(!1),M(!1));const[re,fe,Me,ve]=await Promise.all([ue,Y,Q,be]),Oe=((re==null?void 0:re.recent_ops)||[]).map(ye=>Ut(ye,a)).filter(ye=>!!ye);if(de=[...de,...Oe],!G())return;c(de.map(Ue));const Ie=new Set;for(const ye of fe){const Be=(ye.id||ye.co||"").toString().trim().toLowerCase();Be&&Ie.add(Be.startsWith("t:")?Be:"t:"+Be)}j(Ie),y(Me),S(ve),B&&vt(ee,{fund:B.fund,marketEstimate:B.marketEstimate,criteria:B.criteria,stats:B.stats,generatedAt:B.generatedAt,objs:de})}else{const ge=Lr(),ue=Oa(),Y=_t(),Q=await ge;G()&&Q.length&&(c(Ht(Q).map(Ue)),R(!1),M(!1));const[be,B]=await Promise.all([ue,Y]),de=(be||[]).map(ve=>qa(ve,a)).filter(ve=>!!ve),re=await Fa(de,a),fe=((B==null?void 0:B.recent_ops)||[]).map(ve=>Ut(ve,a)).filter(ve=>!!ve),Me=Ht([...Q,...re,...fe]);if(!G())return;c(Me.map(Ue)),vt(ee,{objs:Me})}G()&&M(!1)}catch{G()&&!ne&&M(!0)}finally{G()&&R(!1)}})(),()=>{_=!1}},[s,o.token,a,$,p]),h.useEffect(()=>{if(!l.showCredits||!U){T(null);return}let H=!0;return(async()=>{try{const _=await fetch(`${va}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:U})});if(!_.ok)return;const G=await _.json();H&&G&&G.ok!==!1&&T(G)}catch{}})(),()=>{H=!1}},[l.showCredits,U,X]);const W=h.useCallback(H=>j(new Set(H)),[]);return{session:o,mode:i,caps:l,fund:d,email:U,marketEstimate:v,generatedAt:L,criteria:b,stats:m,thumbs:N,stages:k,dossiers:u,favIds:E,setFavIds:W,credits:A,reloadCredits:()=>pe(H=>H+1),loading:O,error:z,refresh:()=>K(H=>H+1)}}const Mn=()=>({win:"all",day:"",status:"all",signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],search:""}),Po=(e="europe",a=!1,r)=>({continent:e,ptab:(r==null?void 0:r.ptab)??1,dens:(r==null?void 0:r.dens)??"liste",filters:{...Mn(),...(r==null?void 0:r.filters)||{}},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,modal:(r==null?void 0:r.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,memoTab:0,undo:[],mapFolded:a});function Do(e,a){switch(a.type){case"continent":return{...e,continent:a.key,filters:{...e.filters,country:[]},shown:{},popupId:null,openFacet:null};case"ptab":return{...e,ptab:a.tab,shown:{},popupId:null};case"dens":return{...e,dens:a.dens,shown:{}};case"filters":return{...e,filters:{...e.filters,...a.patch},shown:{}};case"toggleFacet":{const r=e.filters[a.facet],n=r.includes(a.value)?r.filter(o=>o!==a.value):[...r,a.value];return{...e,filters:{...e.filters,[a.facet]:n},shown:{}}}case"toggleMemoLevel":{const r=e.filters.memoLevel,n=r.includes(a.value)?r.filter(o=>o!==a.value):[...r,a.value];return{...e,filters:{...e.filters,memoLevel:n},shown:{}}}case"clearFacet":return{...e,filters:{...e.filters,[a.facet]:[]},shown:{}};case"reset":return{...e,filters:Mn(),shown:{},openFacet:null};case"sort":return{...e,sort:e.sort.key===a.key?{key:a.key,dir:e.sort.dir*-1}:{key:a.key,dir:a.key==="signal"||a.key==="amount"||a.key==="score"?-1:1}};case"groupBy":return{...e,groupBy:a.groupBy};case"more":return{...e,shown:{...e.shown,[a.group]:(e.shown[a.group]??a.base??On)+a.by}};case"pile":return{...e,pileMode:a.on,popupId:null};case"openFacet":return{...e,openFacet:e.openFacet===a.facet?null:a.facet};case"popup":return{...e,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"modal":return{...e,modal:a.modal,popupId:a.modal?null:e.popupId};case"chainStart":return{...e,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...e,chain:{...e.chain,idx:e.chain.idx+1}};case"spaceTab":return{...e,spaceTab:a.tab};case"memoConsole":return{...e,memoConsole:a.id,memoTab:0};case"memoTab":return{...e,memoTab:a.tab};case"undoPush":return{...e,undo:[...e.undo,a.entry].slice(-50)};case"undoPop":return{...e,undo:e.undo.slice(0,-1)};case"mapFold":return{...e,mapFolded:a.folded,openFacet:null};default:return e}}const On=40;function Na(e,a,r,n){if(n!=="signal"&&a.signalOnly&&(!xe(e)||a.signalEngines.length&&!a.signalEngines.includes(e.engine||""))||n!=="dealKind"&&a.dealKind.length&&!a.dealKind.includes(e.dealKind||"")||n!=="sector"&&a.sector.length&&!a.sector.includes(e.sector||"")||n!=="engine"&&a.engine.length&&!a.engine.includes(e.engine||"")||n!=="stage"&&a.stage.length&&!a.stage.includes(e.stage||"")||n!=="angle"&&r&&a.angle.length&&!a.angle.includes(e.angle||"")||n!=="memoLevel"&&r&&a.memoLevel.length&&!a.memoLevel.includes(ya(e)))return!1;if(n!=="win"){if(a.day){if((e.date||"").slice(0,10)!==a.day)return!1}else if(a.win!=="all"){const o=a.win==="1"?0:a.win==="7"?7:30;if(et(e.date)>o)return!1}}if(n!=="status"&&!r&&a.status!=="all"&&He(e)!==a.status)return!1;if(n!=="search"&&a.search.trim()){const o=a.search.trim().toLowerCase();if(!`${e.name||""} ${e.tagline||""} ${e.sector||""}`.toLowerCase().includes(o))return!1}return!0}function qn(e,a,r){return a.continent!=="monde"&&e.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(e.cc||"")?!1:Na(e,a.filters,r)}function Io(e,a,r,n){return!(!qn(e,a,r)||r&&!Mr(e,a.ptab,n))}function Sa(e,a){const r=a.key,n=o=>{switch(r){case"name":return(o.name||"").toLowerCase();case"country":return o.countryLabel||o.cc||"";case"stage":return o.stage||"";case"amount":return o.amountEur||-1;case"age":return-et(o.date);case"score":return typeof o.score=="number"?o.score:-1;case"signal":{const i=xe(o);return i?100-(i.left??0):-1}}};return[...e].sort((o,i)=>{const l=n(o),s=n(i);return l<s?-a.dir:l>s?a.dir:(o.name||"").localeCompare(i.name||"")})}const Bo=["ma","levees","nominations","recrutements","actualites"],$o=300,_o={fr:{ma:"🤝 Deals signés",levees:"💰 Levées",nominations:"👤 Nominations",recrutements:"💼 Recrutements",actualites:"📰 Actus"},en:{ma:"🤝 Signed deals",levees:"💰 Raises",nominations:"👤 Appointments",recrutements:"💼 Hirings",actualites:"📰 News"}};function Ha(e){const a=(e.rubrique||"").toLowerCase();if(a==="ma"||a==="levees"||a==="nominations"||a==="recrutements"||a==="actualites")return a;const r=xe(e);return r?r.theme==="raised"?"levees":r.theme==="hiring"?"recrutements":"actualites":e.dealKind==="ma"?"ma":e.dealKind==="levee"?"levees":"actualites"}function Uo(){const{dossiers:e,st:a,t:r,dispatch:n,contName:o,pipe:i,lang:l}=q(),s=l==="en",[p,u]=h.useState("all"),[c,d]=h.useState(!1),f=h.useMemo(()=>{const y=(a.filters.day||"").slice(0,10),k=E=>!(!i&&a.continent!=="monde"&&E.continent!==a.continent||y&&(E.date||"").slice(0,10)!==y),S=e.filter(E=>k(E)&&xe(E)),L=e.filter(E=>k(E)&&E.kind==="op"&&!xe(E)&&(y?!0:et(E.date)<=7)),F=y||new Date().toISOString().slice(0,10);return L.sort((E,j)=>{const A=(E.date||"").slice(0,10)===F?0:1,T=(j.date||"").slice(0,10)===F?0:1;return A!==T?A-T:(j.amountEur||0)-(E.amountEur||0)}),[...Sa(S,{key:"signal",dir:-1}),...L]},[e,a.continent,a.filters.day,i]),v=h.useMemo(()=>{const y={ma:0,levees:0,nominations:0,recrutements:0,actualites:0};for(const k of f)y[Ha(k)]+=1;return y},[f]),x=h.useMemo(()=>p==="all"?f:f.filter(y=>Ha(y)===p),[f,p]),b=h.useMemo(()=>x.slice(0,$o),[x]),g=x.length-b.length,m=y=>y==="all"?f.length:v[y],w=y=>y==="all"?s?"All":"Tout":_o[s?"en":"fr"][y],N=y=>b.map(k=>t.jsxs("button",{type:"button",className:"tk"+(Ne(k)?" spent":""),onClick:S=>{const L=S.currentTarget.getBoundingClientRect();n({type:"popup",id:k.id,anchor:{x:L.left+L.width/2,y:L.bottom}})},title:k.name+(k.tagline?" — "+k.tagline:""),children:[t.jsx(rt,{o:k}),t.jsxs("span",{className:"who",children:[t.jsx(cr,{o:k}),t.jsx("span",{className:"co",children:k.name})]}),typeof k.amountEur=="number"&&k.amountEur>0&&t.jsx("span",{className:"am",children:fl(k.amountEur)}),k.sector&&t.jsx("span",{className:"mt",children:k.sector}),t.jsx(Bt,{o:k}),t.jsx("span",{className:"tkgo",children:"→"})]},y+(k.id||k.name))).concat(g>0?[t.jsx("span",{className:"tk quiet",children:s?`+ ${g} more — filter by section to see them`:`+ ${g} autres — filtrez par rubrique pour les voir`},y+":more")]:[]);return t.jsxs("div",{className:"ticker",children:[t.jsxs("span",{className:"lbl",children:[t.jsx("i",{}),r.live]}),t.jsxs("span",{className:"tkfil",onBlur:y=>{y.currentTarget.contains(y.relatedTarget)||d(!1)},children:[t.jsxs("button",{type:"button",className:"tkfilb","aria-expanded":c,onClick:()=>d(y=>!y),children:[w(p),t.jsx("b",{children:m(p)}),t.jsx("span",{"aria-hidden":"true",children:"▾"})]}),t.jsx("div",{className:"tkfilm",hidden:!c,children:["all",...Bo].filter(y=>y==="all"||y===p||m(y)>0).map(y=>t.jsxs("button",{type:"button","aria-pressed":y===p,onClick:()=>{u(y),d(!1)},children:[w(y),t.jsx("b",{children:m(y)})]},y))})]}),t.jsx("div",{className:"win",children:b.length?t.jsxs("div",{className:"run",children:[N(0),N(1)]}):t.jsx("div",{className:"run",style:{animation:"none"},children:t.jsx("span",{className:"tk quiet",children:r.liveQuiet(o)})})})]})}const Vo="aDx8z7Hzksus",Fn="+33 6 83 10 72 86",Ya="alexandre@proplace.co",Ho=`tel:${Fn.replace(/[^\d+]/g,"")}`,Wa="pp-rdv-slot";function Yo(){const e=typeof document<"u"&&document.getElementById("rdv");return e?(e.scrollIntoView({behavior:"smooth",block:"start"}),!0):!1}function Wo(){const{t:e,caps:a,fund:r}=q();if(!a.showOnb)return null;const n=r||e.rdvCoFallback;return t.jsxs("section",{id:"rdv",className:"pp-rdv is-teaser",children:[t.jsx("style",{children:Ko}),t.jsx("h2",{children:e.rdvHeading}),t.jsxs("p",{className:"pp-rdv-sub",children:[e.rdvSubBefore,t.jsx("a",{href:Ho,children:Fn}),e.rdvSubMid,t.jsx("a",{href:`mailto:${Ya}`,children:Ya})]}),t.jsx("div",{className:"pp-rdv-unlocks",children:e.rdvUnlocks(n).map(([o,i],l)=>t.jsxs("div",{className:"pp-rdv-u",children:[t.jsx("em",{children:e.rdvUnlockLabel(l+1)}),t.jsx("b",{children:o}),t.jsx("span",{children:i})]},o))}),t.jsx("div",{className:"pp-rdv-emb",children:t.jsx(ko,{filloutId:Vo,parameters:r?{company_name:r}:void 0})})]})}function Go(){const[e,a]=h.useState(()=>typeof document>"u"?null:document.getElementById(Wa));return h.useEffect(()=>{e||a(document.getElementById(Wa))},[e]),e?tt.createPortal(t.jsx(Wo,{}),e):null}const Ko=`
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
`;class me extends h.Component{constructor(){super(...arguments);Ra(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(r,n){console.error(`[atl2] bandeau « ${this.props.name} » en échec :`,r,n.componentStack)}render(){return this.state.dead?this.props.fallback??null:this.props.children}}const Qo=8;function Xo(){const{t:e,lang:a,token:r,dossiers:n,caps:o,markRow:i,dispatch:l}=q(),[s,p]=h.useState(!1),[u,c]=h.useState(!1),[d,f]=h.useState(!1),v=r||"home",{names:x,verdicts:b}=h.useMemo(()=>{const y=[],k={};return n.forEach(S=>{S.kind!=="target"||!S.name||(y.push(S.name),k[S.name]=Or(S)||"")}),{names:y,verdicts:k}},[n]),g=h.useMemo(()=>x.length?qr(v,x,b,a):null,[v,x.length]);if(!o.pipe||s||!g||g.firstVisit||!g.added.length&&!g.gone.length)return null;const m=u?g.added:g.added.slice(0,Qo),w=g.added.length-m.length,N=y=>{const k=n.find(S=>S.name===y);k&&(i(k.id),l({type:"popup",id:k.id}))};return t.jsxs("div",{className:"since",children:[t.jsxs("div",{className:"since-h",children:[t.jsxs("b",{children:["✨ ",e.sinceTitle(g.added.length,g.lastDate)]}),t.jsx("button",{type:"button",className:"x","aria-label":e.tourClose,title:e.tourClose,onClick:()=>{p(!0),Fr(v,x,b,g.fp,a)},children:"×"})]}),!!g.added.length&&t.jsxs("div",{className:"since-c",children:[m.map(y=>t.jsx("button",{type:"button",onClick:()=>N(y),children:y},y)),w>0&&t.jsx("button",{type:"button",className:"mr",onClick:()=>c(!0),children:e.sinceMore(w)})]}),!!g.gone.length&&t.jsxs("div",{className:"since-c",children:[t.jsx("button",{type:"button",className:"mr",onClick:()=>f(y=>!y),children:e.sinceOut(g.gone.length)}),d&&g.gone.slice(0,20).map(y=>t.jsx("span",{className:"gone",children:y},y))]})]})}const Yt=600,Ve=62,Ga="atl2:fstats";function Jo(){const{t:e,lang:a,data:r,caps:n,st:o,dispatch:i}=q(),[l,s]=h.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem(Ga)==="on"}catch{return!1}}),p=r.stats,u=h.useMemo(()=>((p==null?void 0:p.by_day)||[]).slice(-30),[p]),c=h.useMemo(()=>{if(p!=null&&p.since)return p.since;const w=new Date;return w.setDate(w.getDate()-((p==null?void 0:p.window_days)||30)),w.toISOString().slice(0,10)},[p==null?void 0:p.since,p==null?void 0:p.window_days]);if(!n.showFunnel||!p||typeof p.screened!="number")return null;const d=w=>a==="en"?w.slice(5,10):`${w.slice(8,10)}/${w.slice(5,7)}`,f=w=>w.toLocaleString(a==="en"?"en-US":"fr-FR"),v=u.reduce((w,N)=>Math.max(w,N.s||0),0),x=u.length?Yt/u.length:0,b=Math.max(4,x-4),g=u.length>=5&&v>0,m=[[p.screened,e.funScreened(d(c)),p.screened_today],...typeof p.kept=="number"?[[p.kept,e.funKept,p.kept_today]]:[],...typeof p.analyzed=="number"?[[p.analyzed,e.funAnalyzed,p.analyzed_today]]:[],...typeof p.shown=="number"?[[p.shown,e.funShown,void 0]]:[]];return t.jsxs("div",{className:"fstats"+(l?" on":""),children:[t.jsxs("div",{className:"fst-row",children:[m.map(([w,N,y],k)=>t.jsxs("span",{className:"fst-t",children:[k>0&&t.jsx("span",{className:"fst-ar",children:"→"}),t.jsx("b",{children:f(w)}),t.jsx("i",{children:N}),l&&typeof y=="number"&&y>0&&t.jsx("em",{children:e.funToday(y)})]},N)),g&&t.jsx("button",{type:"button",className:"fst-x","aria-expanded":l,title:l?e.fstatsHide:e.fstatsShow,onClick:()=>{const w=!l;s(w),w&&!o.mapFolded&&i({type:"mapFold",folded:!0});try{localStorage.setItem(Ga,w?"on":"off")}catch{}},children:l?"⌃":"⌄"})]}),l&&g&&t.jsxs("div",{className:"fst-act",children:[t.jsxs("div",{className:"fst-ah",children:[t.jsx("span",{children:e.actTitle}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#185c38"}}),e.actKept]}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#cfe0d6"}}),e.actScreened]})]}),t.jsxs("svg",{viewBox:`0 0 ${Yt} ${Ve}`,preserveAspectRatio:"none",role:"img","aria-label":e.actTitle,children:[u.map((w,N)=>{const y=(w.s||0)/v*(Ve-4),k=(w.m||0)/v*(Ve-4),S=N*x+(x-b)/2;return t.jsxs("g",{children:[t.jsx("title",{children:`${d(w.d)} — ${w.s} ${e.actScreened} · ${w.m} ${e.actKept}`}),t.jsx("rect",{x:S,y:Ve-2-y,width:b,height:y,fill:"#cfe0d6"}),t.jsx("rect",{x:S,y:Ve-2-k,width:b,height:k,fill:"#185c38"})]},w.d)}),t.jsx("line",{x1:0,y1:Ve-1.5,x2:Yt,y2:Ve-1.5,stroke:"#dbe5df",strokeWidth:1})]}),t.jsxs("div",{className:"fst-ax",children:[t.jsx("span",{children:d(u[0].d)}),t.jsx("span",{children:e.actToday})]})]})]})}const Zo=[["Retenu","csKept"],["Analysé","csAnalysed"],["À trancher","csPending"],["Validé","csValidated"],["Écarté","csOut"]];function ei({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:o}=q(),[i,l]=h.useState(""),[s,p]=h.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const u=(e.ceoStatus||"").trim(),c=(at(e)||"").startsWith("CALL")&&ke(e)===3,d=ke(e)>=2,f=async x=>{if(i||x==="Analysé"&&!e.memoUrl&&!window.confirm(a.csAnaConfirm))return;l(x);const b=await o(e,x);l(""),b&&(p(!0),setTimeout(()=>p(!1),2200))},v=c?[["Validé",a.csYes],["Écarté",a.csNo]]:Zo.filter(([x])=>!(d&&x==="Retenu")).map(([x,b])=>[x,a[b]]);return t.jsxs("div",{className:"csp",onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{className:"csrow",children:[t.jsx("span",{className:"cslb",children:a.csLabel}),v.map(([x,b])=>t.jsx("button",{type:"button",className:"csb"+(u===x?" on":"")+(i===x?" busy":""),disabled:!!i,onClick:()=>{f(x)},children:b},x)),s&&t.jsx("span",{className:"csok",children:a.csSaved})]}),t.jsx(ti,{o:e})]})}function ti({o:e}){const{t:a,saveNote:r,flash:n}=q(),[o,i]=h.useState(e.ceoNote||""),[l,s]=h.useState(!1),[p,u]=h.useState(!1),c=o.trim()!==(e.ceoNote||"").trim(),d=async()=>{if(l||!c)return;s(!0);const f=await r(e,o.trim());s(!1),f&&(u(!0),setTimeout(()=>u(!1),2200),n(a.csNoteSaved))};return t.jsxs("div",{className:"csnote",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:a.csNotePh,value:o,disabled:l,onChange:f=>i(f.target.value),onKeyDown:f=>{f.key==="Enter"&&d()}}),t.jsx("button",{type:"button",disabled:l||!c,onClick:()=>{d()},children:p?a.csNoteSaved:a.csNoteOk})]})}function ai({placeholder:e,onDone:a}){const{t:r}=q(),[n,o]=h.useState("");return t.jsxs("div",{className:"csnote why",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:e,value:n,autoFocus:!0,onChange:i=>o(i.target.value),onKeyDown:i=>{i.key==="Enter"&&a(n.trim()),i.key==="Escape"&&a("")},onBlur:()=>{n.trim()||a("")}}),t.jsx("button",{type:"button",onClick:()=>a(n.trim()),children:r.whySend})]})}function ni({o:e}){var g;const{t:a,token:r,caps:n,canWrite:o,stageOf:i,setStage:l,flashErr:s}=q(),[p,u]=h.useState(!1);if(!n.pipe||!o||n.lockActions||ke(e)!==4)return null;const c=i(e),d=(c==null?void 0:c.stage)||"todo",f=async m=>{if(p||m===d)return;u(!0);const w=c;l(e,{stage:m,stamps:(c==null?void 0:c.stamps)||{}});const N=Math.max(Date.now(),Ka+=1);Ka=N;const y=await Pr(r,{company:e.name||"",stage:m,cts:N,deal_id:e.airtableId,check_id:e.checkId});u(!1),!y.stale&&(y.ok||(l(e,w),s(a.actErr)))},v=(g=c==null?void 0:c.stamps)==null?void 0:g.sent,x=v?Math.floor((Date.now()-Date.parse(v))/864e5):0,b=d==="sent"&&v&&x>=4;return t.jsxs("div",{className:"stg",onClick:m=>m.stopPropagation(),children:[t.jsx("span",{className:"stglb",children:a.stgLabel}),a.stg.map(([m,w])=>t.jsx("button",{type:"button",className:"stgb"+(d===m?" on":""),disabled:p,onClick:()=>{f(m)},children:w},m)),b&&t.jsx("span",{className:"stgj4",children:a.j4Badge(x)})]})}let Ka=0;const yt=8,wt=340;function Qa({text:e}){const a=e.split(/\*\*(.+?)\*\*/g);return t.jsx(t.Fragment,{children:a.map((r,n)=>n%2?t.jsx("b",{children:r},n):t.jsx("span",{children:r},n))})}function ri({steps:e,onClose:a}){const{t:r,dispatch:n,counts:o,scoped:i,byId:l,st:s}=q(),[p,u]=h.useState(0),[c,d]=h.useState(null),[f,v]=h.useState([]),x=h.useRef(!1);h.useEffect(()=>{x.current||(x.current=!0,v(e.filter(k=>!!document.querySelector(k.need||k.sel))))},[e]);const b=f[p],g=p>=f.length;h.useEffect(()=>{b&&(b.ptab!==void 0&&s.ptab!==b.ptab&&n({type:"ptab",tab:b.ptab}),b.dens&&s.dens!==b.dens&&n({type:"dens",dens:b.dens}))},[p,b]);const m=h.useCallback(()=>{if(!b){d(null);return}const k=document.querySelector(b.sel);if(!k){d(null);return}k.scrollIntoView({block:"nearest",behavior:"smooth"}),d(k.getBoundingClientRect())},[b]);h.useLayoutEffect(()=>{m();const k=window.setTimeout(m,260),S=()=>m();return window.addEventListener("scroll",S,!0),window.addEventListener("resize",S),()=>{window.clearTimeout(k),window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",S)}},[m]);const w=h.useRef(a);if(w.current=a,h.useEffect(()=>{const k=S=>{S.key==="Escape"?(S.preventDefault(),S.stopPropagation(),w.current()):S.key==="ArrowRight"?u(L=>L+1):S.key==="ArrowLeft"&&u(L=>Math.max(0,L-1))};return document.addEventListener("keydown",k,!0),()=>document.removeEventListener("keydown",k,!0)},[]),!f.length)return null;let N=null;if(g){const k=o[3]||0,S=i.find(L=>L.memoUrl)||[...l.values()].find(L=>L.memoUrl);k>0?N={title:k===1?r.ahaATitle1:r.ahaATitleN(k),body:r.ahaABody,btn:r.ahaABtn,go:()=>{n({type:"ptab",tab:3}),a()}}:S?N={title:r.ahaBTitle,body:r.ahaBBody(S.name),btn:r.ahaBBtn,go:()=>{n({type:"memoConsole",id:S.id}),a()}}:N={title:r.ahaCTitle,body:r.ahaCBody,btn:r.ahaCBtn,go:()=>{n({type:"modal",modal:"crit"}),a()}}}let y={left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:wt};if(!g&&c){const k=c.bottom+14,L=window.innerHeight-k>190?k:Math.max(12,c.top-200);y={left:Math.min(Math.max(12,c.left+c.width/2-wt/2),window.innerWidth-wt-12),top:L,width:wt}}return tt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"tour",role:"dialog","aria-modal":"true",children:[!g&&c&&t.jsx("div",{className:"tour-hole",style:{left:c.left-yt,top:c.top-yt,width:c.width+yt*2,height:c.height+yt*2}}),(g||!c)&&t.jsx("div",{className:"tour-veil"}),t.jsxs("div",{className:"tour-card"+(g?" fin":""),style:y,children:[g&&N?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:N.title}),t.jsx("p",{children:t.jsx(Qa,{text:N.body})}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",onClick:()=>u(f.length-1),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:N.go,children:N.btn})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"tour-n",children:r.tourStep(p+1,f.length)}),t.jsx("h3",{children:b==null?void 0:b.title}),t.jsx("p",{children:t.jsx(Qa,{text:(b==null?void 0:b.body)||""})}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",disabled:p===0,onClick:()=>u(k=>Math.max(0,k-1)),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:()=>u(k=>k+1),children:p===f.length-1?r.tourDone:r.tourNext})]})]}),t.jsx("button",{type:"button",className:"tour-x","aria-label":r.tourClose,title:r.tourClose,onClick:a,children:"×"})]})]})}),document.body)}function oi(){const{dossiers:e,scopedAll:a,pipe:r,mode:n,t:o,st:i,dispatch:l}=q(),s=r?a:e,p=h.useMemo(()=>s.filter(m=>et(m.date)===0&&m.kind==="target"),[s]),u=h.useMemo(()=>r?a.filter(m=>ke(m)===0).slice().sort((m,w)=>(w.date||"").localeCompare(m.date||"")):[],[a,r]),c=h.useMemo(()=>p.filter(m=>r?ke(m)===0:!Ne(m)),[p,r]),d=r?u:c,f=r?a.length-u.length:p.length-c.length,v=r?a.length:p.length,x=v?Math.min(100,f/v*100):100;let b;r?b=o.morningThesis(p.length,u.length):p.length?f===0?b=o.goalSourced(p.length):f>=p.length?b=o.goalCleared:b=o.goalDone(f,p.length):b=o.goalSourced(0);const g=()=>{if(!r){l({type:"pile",on:!0});return}l({type:"ptab",tab:0}),n==="client"&&u.length&&l({type:"chainStart",queue:u.map(m=>m.id)})};return t.jsxs("div",{className:"goal",children:[t.jsx("span",{className:"gtxt",dangerouslySetInnerHTML:{__html:b}}),t.jsx("div",{className:"pbar",children:t.jsx("i",{style:{width:x+"%"}})}),d.length>0&&t.jsx("button",{type:"button",className:"pilebtn",onClick:g,children:r?o.morningEval(d.length):i.pileMode?o.goalContinue(d.length):o.goalTreat}),t.jsx("span",{className:"gspace"})]})}function ii(){var j,A;const{t:e,lang:a,st:r,dispatch:n,token:o,fund:i,data:l,dossiers:s,mode:p,doSync:u,startTour:c}=q(),[d,f]=h.useState(null),[v,x]=h.useState([]),b=p==="client";h.useEffect(()=>{if(!o||!i)return;let T=!0;return(async()=>{const[O,R]=await Promise.all([wa(i),zn(o)]);T&&(O&&f(O),x(R))})(),()=>{T=!1}},[o,i]);const g=(d==null?void 0:d.per_day)??null,m=((j=d==null?void 0:d.pool_order)==null?void 0:j.length)??0,w=v.filter(T=>T.status==="running").length,N=h.useMemo(()=>s.filter(T=>T.kind==="target"&&Ne(T)).length,[s]),y=l.marketEstimate,k=typeof((A=l.stats)==null?void 0:A.screened)=="number"?l.stats.screened:N,S=y&&y>0?Math.min(100,Math.round(k/y*100)):null,L=T=>T.toLocaleString(a==="en"?"en-US":"fr-FR"),F=(i||"P").split(/\s+/).map(T=>T[0]).join("").slice(0,2).toUpperCase(),E=(()=>{const T=Date.parse(l.generatedAt||"");if(Number.isNaN(T))return"";const O=new Date(T),R=z=>String(z).padStart(2,"0");return`${R(O.getDate())}/${R(O.getMonth()+1)} à ${R(O.getHours())}:${R(O.getMinutes())}`})();return t.jsxs("div",{className:"ident",children:[t.jsxs("div",{className:"idtop",children:[t.jsxs("span",{className:"brand",children:[t.jsx("b",{children:F}),t.jsx("i",{children:i})]}),t.jsx("h1",{children:e.identTitle(i||"…")}),t.jsx("span",{className:"idsp"}),E&&t.jsx("span",{className:"idupd",children:e.identUpdatedAt(E)}),t.jsx("button",{type:"button",className:"ic",title:e.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),t.jsx("button",{type:"button",className:"ic",title:e.tourPlayTitle,onClick:c,children:"▶"})]}),t.jsxs("div",{className:"idmain",children:[S===null&&k>0&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsx("span",{className:"ev",children:t.jsx("b",{children:L(k)})})]}),S!==null&&y&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsxs("span",{className:"ev",children:[t.jsx("span",{className:"bar",children:t.jsx("i",{style:{width:S+"%"}})}),t.jsxs("b",{children:[S," %"]})]}),t.jsx("span",{className:"edv"}),t.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:e.identCoverageOf(k,y)}})]}),t.jsxs("span",{className:"engine",title:e.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[t.jsx("span",{className:"el",children:e.identEngine}),g!==null&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"ev",children:[t.jsx("b",{className:"q",children:g})," ",e.identPerDay]}),t.jsx("span",{className:"edv"})]}),g===0&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"epause",title:e.identPauseTitle,children:e.identPause}),t.jsx("span",{className:"edv"})]}),w>0&&t.jsxs("span",{className:"ev",children:["⏳ ",w]}),t.jsx("span",{className:"ego",children:e.identPending(m)}),t.jsx("button",{type:"button",className:"ebell",title:e.memoAlertBtn,onClick:T=>{T.stopPropagation(),n({type:"modal",modal:"memoalert"})},children:"🔔"})]}),t.jsx("span",{className:"idsp"}),t.jsxs("span",{className:"icgrp",children:[t.jsx("button",{type:"button",className:"ic",title:e.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),t.jsx("button",{type:"button",className:"ic",title:e.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),t.jsx("button",{type:"button",className:"ic",title:e.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),t.jsx("button",{type:"button",className:"ic",title:e.identSync,disabled:!b,onClick:u,children:"🔄"})]}),t.jsxs("span",{className:"isrch",children:["🔍",t.jsx("input",{placeholder:e.identSearch,value:r.filters.search,onChange:T=>n({type:"filters",patch:{search:T.target.value}})})]})]})]})}function si(){const{t:e,counts:a,dispatch:r}=q();return t.jsxs("div",{className:"onb",children:[t.jsxs("div",{className:"onbh",children:[t.jsxs("span",{className:"tag",children:[t.jsx("i",{}),e.onbTag]}),t.jsx("h2",{dangerouslySetInnerHTML:{__html:e.onbTitle(a[1]+a[2]+a[3])}}),t.jsx("div",{className:"sub",children:e.onbSub(a[7])})]}),t.jsx("div",{className:"steps4",children:e.onbSteps.map(([n,o],i)=>{const l=i===e.onbSteps.length-1;return t.jsxs("div",{className:"s4"+(l?" go":""),children:[t.jsx("span",{className:"s4n",children:i+1}),t.jsx("div",{className:"s4t",children:n}),t.jsx("div",{className:"s4d",children:o}),l&&t.jsx("button",{type:"button",className:"s4b p",onClick:()=>r({type:"modal",modal:"rdv"}),children:e.onbCta})]},i)})})]})}const li=["--p0","--p1","--p2","--p3","--p4"];function ci(){const{st:e,dispatch:a,counts:r,t:n,doUndo:o}=q(),i=h.useRef({});h.useEffect(()=>{i.current={...r}},[r]);const l=u=>{const c=i.current[u],d=c!==void 0?r[u]-c:0;return t.jsxs("button",{type:"button",className:"step"+(u===3&&r[3]>0?" wait":""),style:{"--c":`var(${li[u]})`,"--tc":u<=3?"var(--ink)":"#fff"},"aria-selected":e.ptab===u,title:n.phelp[u],onClick:()=>a({type:"ptab",tab:u}),children:[t.jsxs("span",{className:"l",children:[n.plabels[u].toUpperCase(),u===3&&r[3]>0&&t.jsx("i",{className:"wd"})]}),t.jsxs("span",{className:"n"+(d>0?" up":d<0?" down":""),children:[r[u],d!==0&&t.jsxs("em",{className:"delta",children:[d>0?"+":"−",Math.abs(d)]})]})]},u)},s=(u,c,d)=>t.jsxs("button",{type:"button",className:"off"+(c?" view":""),style:{"--c":u===5?"var(--p5)":u===6?"var(--pf)":"var(--pv)"},"aria-selected":e.ptab===u,title:n.phelp[u],onClick:()=>a({type:"ptab",tab:u}),children:[t.jsx("span",{className:"l",children:d.toUpperCase()}),t.jsx("span",{className:"n",children:r[u]})]},u),p=(u,c,d,f=!1)=>t.jsx("button",{type:"button",className:"tool",title:c,disabled:f,onClick:d,children:u},c);return t.jsxs("div",{className:"funnel",children:[t.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(l)}),t.jsxs("div",{className:"offtrack",children:[s(5,!1,n.plabels[5]),s(7,!0,n.plabels[7]),s(6,!0,"★ "+n.plabels[6])]}),t.jsxs("span",{className:"ftools",children:[p("↩",n.toolUndo,o,e.undo.length===0),p("↺",n.toolReset,()=>{a({type:"reset"})}),p("⇅",n.toolSort,()=>a({type:"sort",key:e.sort.key})),p("▶",n.toolTuto,()=>a({type:"modal",modal:"tuto"})),p("⚙",n.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}const di=["#eef1f5","#eaf6ef","#e2f0e8","#fdf3e2","#e2efe7","#fdeaea","#fdf6de","#e8eaee"];function pi(){const{st:e,dispatch:a,t:r,scoped:n,memoQueued:o,doAnalyse:i,mode:l}=q(),s=h.useRef(null),[p,u]=h.useState(60);h.useEffect(()=>{let v=0;const x=()=>{var N;const b=s.current;if(!b)return;const g=(N=b.parentElement)==null?void 0:N.querySelector('.funnel [aria-selected="true"]');if(!g)return;const m=g.getBoundingClientRect(),w=b.getBoundingClientRect();u(Math.max(20,Math.min(m.left+m.width/2-w.left,w.width-30)))};return v=requestAnimationFrame(x),window.addEventListener("resize",x),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",x)}},[e.ptab]);const c=e.ptab;let d=r.tuto[c].p;if(c===3){const v=n.filter(g=>g.kind==="target"&&ke(g)===3),x=v.filter(g=>Zt(g)==="auto").length,b=v.filter(g=>Zt(g)==="cd").length;d=r.tutoPending(x,b,v.length)}const f=(()=>{if(l!=="client")return null;if(c===0&&n.length)return{label:r.tuto[0].a,run:()=>a({type:"chainStart",queue:n.map(v=>v.id)})};if(c===1){const v=n.filter(x=>x.kind==="target"&&ke(x)===1&&!o.has(x.id)).slice(0,10);if(v.length)return{label:r.tuto[1].a,run:()=>v.forEach(x=>i(x))}}return null})();return t.jsxs("div",{ref:s,className:"tuto mini",style:{"--bg":di[c],"--ax":p+"px","--stc":"var(--ink)"},children:[t.jsx("span",{className:"txt",children:t.jsxs("p",{children:[t.jsx("b",{className:"tstep",children:r.plabels[c].toUpperCase()}),t.jsx("span",{dangerouslySetInnerHTML:{__html:d}})]})}),f&&t.jsx("button",{type:"button",className:"tprim",onClick:f.run,children:f.label})]})}class Ye{constructor(){this._partials=new Float64Array(32),this._n=0}add(a){const r=this._partials;let n=0;for(let o=0;o<this._n&&o<32;o++){const i=r[o],l=a+i,s=Math.abs(a)<Math.abs(i)?a-(l-i):i-(l-a);s&&(r[n++]=s),a=l}return r[n]=a,this._n=n+1,this}valueOf(){const a=this._partials;let r=this._n,n,o,i,l=0;if(r>0){for(l=a[--r];r>0&&(n=l,o=a[--r],l=n+o,i=o-(l-n),!i););r>0&&(i<0&&a[r-1]<0||i>0&&a[r-1]>0)&&(o=i*2,n=l+o,o==n-l&&(l=n))}return l}}function*ui(e){for(const a of e)yield*a}function Pn(e){return Array.from(ui(e))}var Z=1e-6,V=Math.PI,Ce=V/2,Xa=V/4,ze=V*2,Fe=180/V,je=V/180,te=Math.abs,fi=Math.atan,ft=Math.atan2,ie=Math.cos,se=Math.sin,mi=Math.sign||function(e){return e>0?1:e<0?-1:0},Ge=Math.sqrt;function xi(e){return e>1?0:e<-1?V:Math.acos(e)}function mt(e){return e>1?Ce:e<-1?-Ce:Math.asin(e)}function Ee(){}function Tt(e,a){e&&Za.hasOwnProperty(e.type)&&Za[e.type](e,a)}var Ja={Feature:function(e,a){Tt(e.geometry,a)},FeatureCollection:function(e,a){for(var r=e.features,n=-1,o=r.length;++n<o;)Tt(r[n].geometry,a)}},Za={Sphere:function(e,a){a.sphere()},Point:function(e,a){e=e.coordinates,a.point(e[0],e[1],e[2])},MultiPoint:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)e=r[n],a.point(e[0],e[1],e[2])},LineString:function(e,a){na(e.coordinates,a,0)},MultiLineString:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)na(r[n],a,0)},Polygon:function(e,a){en(e.coordinates,a)},MultiPolygon:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)en(r[n],a)},GeometryCollection:function(e,a){for(var r=e.geometries,n=-1,o=r.length;++n<o;)Tt(r[n],a)}};function na(e,a,r){var n=-1,o=e.length-r,i;for(a.lineStart();++n<o;)i=e[n],a.point(i[0],i[1],i[2]);a.lineEnd()}function en(e,a){var r=-1,n=e.length;for(a.polygonStart();++r<n;)na(e[r],a,1);a.polygonEnd()}function Ke(e,a){e&&Ja.hasOwnProperty(e.type)?Ja[e.type](e,a):Tt(e,a)}function ra(e){return[ft(e[1],e[0]),mt(e[2])]}function Je(e){var a=e[0],r=e[1],n=ie(r);return[n*ie(a),n*se(a),se(r)]}function kt(e,a){return e[0]*a[0]+e[1]*a[1]+e[2]*a[2]}function Lt(e,a){return[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]]}function Wt(e,a){e[0]+=a[0],e[1]+=a[1],e[2]+=a[2]}function jt(e,a){return[e[0]*a,e[1]*a,e[2]*a]}function oa(e){var a=Ge(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=a,e[1]/=a,e[2]/=a}function ia(e,a){function r(n,o){return n=e(n,o),a(n[0],n[1])}return e.invert&&a.invert&&(r.invert=function(n,o){return n=a.invert(n,o),n&&e.invert(n[0],n[1])}),r}function sa(e,a){return te(e)>V&&(e-=Math.round(e/ze)*ze),[e,a]}sa.invert=sa;function hi(e,a,r){return(e%=ze)?a||r?ia(an(e),nn(a,r)):an(e):a||r?nn(a,r):sa}function tn(e){return function(a,r){return a+=e,te(a)>V&&(a-=Math.round(a/ze)*ze),[a,r]}}function an(e){var a=tn(e);return a.invert=tn(-e),a}function nn(e,a){var r=ie(e),n=se(e),o=ie(a),i=se(a);function l(s,p){var u=ie(p),c=ie(s)*u,d=se(s)*u,f=se(p),v=f*r+c*n;return[ft(d*o-v*i,c*r-f*n),mt(v*o+d*i)]}return l.invert=function(s,p){var u=ie(p),c=ie(s)*u,d=se(s)*u,f=se(p),v=f*o-d*i;return[ft(d*o+f*i,c*r+v*n),mt(v*r-c*n)]},l}function gi(e,a,r,n,o,i){if(r){var l=ie(a),s=se(a),p=n*r;o==null?(o=a+n*ze,i=a-p/2):(o=rn(l,o),i=rn(l,i),(n>0?o<i:o>i)&&(o+=n*ze));for(var u,c=o;n>0?c>i:c<i;c-=p)u=ra([l,-s*ie(c),-s*se(c)]),e.point(u[0],u[1])}}function rn(e,a){a=Je(a),a[0]-=e,oa(a);var r=xi(-a[1]);return((-a[2]<0?-r:r)+ze-Z)%ze}function Dn(){var e=[],a;return{point:function(r,n,o){a.push([r,n,o])},lineStart:function(){e.push(a=[])},lineEnd:Ee,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],a=null,r}}}function At(e,a){return te(e[0]-a[0])<Z&&te(e[1]-a[1])<Z}function Nt(e,a,r,n){this.x=e,this.z=a,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function In(e,a,r,n,o){var i=[],l=[],s,p;if(e.forEach(function(x){if(!((b=x.length-1)<=0)){var b,g=x[0],m=x[b],w;if(At(g,m)){if(!g[2]&&!m[2]){for(o.lineStart(),s=0;s<b;++s)o.point((g=x[s])[0],g[1]);o.lineEnd();return}m[0]+=2*Z}i.push(w=new Nt(g,x,null,!0)),l.push(w.o=new Nt(g,null,w,!1)),i.push(w=new Nt(m,x,null,!1)),l.push(w.o=new Nt(m,null,w,!0))}}),!!i.length){for(l.sort(a),on(i),on(l),s=0,p=l.length;s<p;++s)l[s].e=r=!r;for(var u=i[0],c,d;;){for(var f=u,v=!0;f.v;)if((f=f.n)===u)return;c=f.z,o.lineStart();do{if(f.v=f.o.v=!0,f.e){if(v)for(s=0,p=c.length;s<p;++s)o.point((d=c[s])[0],d[1]);else n(f.x,f.n.x,1,o);f=f.n}else{if(v)for(c=f.p.z,s=c.length-1;s>=0;--s)o.point((d=c[s])[0],d[1]);else n(f.x,f.p.x,-1,o);f=f.p}f=f.o,c=f.z,v=!v}while(!f.v);o.lineEnd()}}}function on(e){if(a=e.length){for(var a,r=0,n=e[0],o;++r<a;)n.n=o=e[r],o.p=n,n=o;n.n=o=e[0],o.p=n}}function Gt(e){return te(e[0])<=V?e[0]:mi(e[0])*((te(e[0])+V)%ze-V)}function bi(e,a){var r=Gt(a),n=a[1],o=se(n),i=[se(r),-ie(r),0],l=0,s=0,p=new Ye;o===1?n=Ce+Z:o===-1&&(n=-Ce-Z);for(var u=0,c=e.length;u<c;++u)if(f=(d=e[u]).length)for(var d,f,v=d[f-1],x=Gt(v),b=v[1]/2+Xa,g=se(b),m=ie(b),w=0;w<f;++w,x=y,g=S,m=L,v=N){var N=d[w],y=Gt(N),k=N[1]/2+Xa,S=se(k),L=ie(k),F=y-x,E=F>=0?1:-1,j=E*F,A=j>V,T=g*S;if(p.add(ft(T*E*se(j),m*L+T*ie(j))),l+=A?F+E*ze:F,A^x>=r^y>=r){var O=Lt(Je(v),Je(N));oa(O);var R=Lt(i,O);oa(R);var z=(A^F>=0?-1:1)*mt(R[2]);(n>z||n===z&&(O[0]||O[1]))&&(s+=A^F>=0?1:-1)}}return(l<-Z||l<Z&&p<-1e-12)^s&1}function Bn(e,a,r,n){return function(o){var i=a(o),l=Dn(),s=a(l),p=!1,u,c,d,f={point:v,lineStart:b,lineEnd:g,polygonStart:function(){f.point=m,f.lineStart=w,f.lineEnd=N,c=[],u=[]},polygonEnd:function(){f.point=v,f.lineStart=b,f.lineEnd=g,c=Pn(c);var y=bi(u,n);c.length?(p||(o.polygonStart(),p=!0),In(c,yi,y,r,o)):y&&(p||(o.polygonStart(),p=!0),o.lineStart(),r(null,null,1,o),o.lineEnd()),p&&(o.polygonEnd(),p=!1),c=u=null},sphere:function(){o.polygonStart(),o.lineStart(),r(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function v(y,k){e(y,k)&&o.point(y,k)}function x(y,k){i.point(y,k)}function b(){f.point=x,i.lineStart()}function g(){f.point=v,i.lineEnd()}function m(y,k){d.push([y,k]),s.point(y,k)}function w(){s.lineStart(),d=[]}function N(){m(d[0][0],d[0][1]),s.lineEnd();var y=s.clean(),k=l.result(),S,L=k.length,F,E,j;if(d.pop(),u.push(d),d=null,!!L){if(y&1){if(E=k[0],(F=E.length-1)>0){for(p||(o.polygonStart(),p=!0),o.lineStart(),S=0;S<F;++S)o.point((j=E[S])[0],j[1]);o.lineEnd()}return}L>1&&y&2&&k.push(k.pop().concat(k.shift())),c.push(k.filter(vi))}}return f}}function vi(e){return e.length>1}function yi(e,a){return((e=e.x)[0]<0?e[1]-Ce-Z:Ce-e[1])-((a=a.x)[0]<0?a[1]-Ce-Z:Ce-a[1])}const sn=Bn(function(){return!0},wi,ji,[-V,-Ce]);function wi(e){var a=NaN,r=NaN,n=NaN,o;return{lineStart:function(){e.lineStart(),o=1},point:function(i,l){var s=i>0?V:-V,p=te(i-a);te(p-V)<Z?(e.point(a,r=(r+l)/2>0?Ce:-Ce),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(s,r),e.point(i,r),o=0):n!==s&&p>=V&&(te(a-n)<Z&&(a-=n*Z),te(i-s)<Z&&(i-=s*Z),r=ki(a,r,i,l),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(s,r),o=0),e.point(a=i,r=l),n=s},lineEnd:function(){e.lineEnd(),a=r=NaN},clean:function(){return 2-o}}}function ki(e,a,r,n){var o,i,l=se(e-r);return te(l)>Z?fi((se(a)*(i=ie(n))*se(r)-se(n)*(o=ie(a))*se(e))/(o*i*l)):(a+n)/2}function ji(e,a,r,n){var o;if(e==null)o=r*Ce,n.point(-V,o),n.point(0,o),n.point(V,o),n.point(V,0),n.point(V,-o),n.point(0,-o),n.point(-V,-o),n.point(-V,0),n.point(-V,o);else if(te(e[0]-a[0])>Z){var i=e[0]<a[0]?V:-V;o=r*i/2,n.point(-i,o),n.point(0,o),n.point(i,o)}else n.point(a[0],a[1])}function Ni(e){var a=ie(e),r=2*je,n=a>0,o=te(a)>Z;function i(c,d,f,v){gi(v,e,r,f,c,d)}function l(c,d){return ie(c)*ie(d)>a}function s(c){var d,f,v,x,b;return{lineStart:function(){x=v=!1,b=1},point:function(g,m){var w=[g,m],N,y=l(g,m),k=n?y?0:u(g,m):y?u(g+(g<0?V:-V),m):0;if(!d&&(x=v=y)&&c.lineStart(),y!==v&&(N=p(d,w),(!N||At(d,N)||At(w,N))&&(w[2]=1)),y!==v)b=0,y?(c.lineStart(),N=p(w,d),c.point(N[0],N[1])):(N=p(d,w),c.point(N[0],N[1],2),c.lineEnd()),d=N;else if(o&&d&&n^y){var S;!(k&f)&&(S=p(w,d,!0))&&(b=0,n?(c.lineStart(),c.point(S[0][0],S[0][1]),c.point(S[1][0],S[1][1]),c.lineEnd()):(c.point(S[1][0],S[1][1]),c.lineEnd(),c.lineStart(),c.point(S[0][0],S[0][1],3)))}y&&(!d||!At(d,w))&&c.point(w[0],w[1]),d=w,v=y,f=k},lineEnd:function(){v&&c.lineEnd(),d=null},clean:function(){return b|(x&&v)<<1}}}function p(c,d,f){var v=Je(c),x=Je(d),b=[1,0,0],g=Lt(v,x),m=kt(g,g),w=g[0],N=m-w*w;if(!N)return!f&&c;var y=a*m/N,k=-a*w/N,S=Lt(b,g),L=jt(b,y),F=jt(g,k);Wt(L,F);var E=S,j=kt(L,E),A=kt(E,E),T=j*j-A*(kt(L,L)-1);if(!(T<0)){var O=Ge(T),R=jt(E,(-j-O)/A);if(Wt(R,L),R=ra(R),!f)return R;var z=c[0],M=d[0],$=c[1],K=d[1],X;M<z&&(X=z,z=M,M=X);var pe=M-z,le=te(pe-V)<Z,U=le||pe<Z;if(!le&&K<$&&(X=$,$=K,K=X),U?le?$+K>0^R[1]<(te(R[0]-z)<Z?$:K):$<=R[1]&&R[1]<=K:pe>V^(z<=R[0]&&R[0]<=M)){var W=jt(E,(-j+O)/A);return Wt(W,L),[R,ra(W)]}}}function u(c,d){var f=n?e:V-e,v=0;return c<-f?v|=1:c>f&&(v|=2),d<-f?v|=4:d>f&&(v|=8),v}return Bn(l,s,i,n?[0,-e]:[-V,e-V])}function Si(e,a,r,n,o,i){var l=e[0],s=e[1],p=a[0],u=a[1],c=0,d=1,f=p-l,v=u-s,x;if(x=r-l,!(!f&&x>0)){if(x/=f,f<0){if(x<c)return;x<d&&(d=x)}else if(f>0){if(x>d)return;x>c&&(c=x)}if(x=o-l,!(!f&&x<0)){if(x/=f,f<0){if(x>d)return;x>c&&(c=x)}else if(f>0){if(x<c)return;x<d&&(d=x)}if(x=n-s,!(!v&&x>0)){if(x/=v,v<0){if(x<c)return;x<d&&(d=x)}else if(v>0){if(x>d)return;x>c&&(c=x)}if(x=i-s,!(!v&&x<0)){if(x/=v,v<0){if(x>d)return;x>c&&(c=x)}else if(v>0){if(x<c)return;x<d&&(d=x)}return c>0&&(e[0]=l+c*f,e[1]=s+c*v),d<1&&(a[0]=l+d*f,a[1]=s+d*v),!0}}}}}var st=1e9,St=-st;function Ci(e,a,r,n){function o(u,c){return e<=u&&u<=r&&a<=c&&c<=n}function i(u,c,d,f){var v=0,x=0;if(u==null||(v=l(u,d))!==(x=l(c,d))||p(u,c)<0^d>0)do f.point(v===0||v===3?e:r,v>1?n:a);while((v=(v+d+4)%4)!==x);else f.point(c[0],c[1])}function l(u,c){return te(u[0]-e)<Z?c>0?0:3:te(u[0]-r)<Z?c>0?2:1:te(u[1]-a)<Z?c>0?1:0:c>0?3:2}function s(u,c){return p(u.x,c.x)}function p(u,c){var d=l(u,1),f=l(c,1);return d!==f?d-f:d===0?c[1]-u[1]:d===1?u[0]-c[0]:d===2?u[1]-c[1]:c[0]-u[0]}return function(u){var c=u,d=Dn(),f,v,x,b,g,m,w,N,y,k,S,L={point:F,lineStart:T,lineEnd:O,polygonStart:j,polygonEnd:A};function F(z,M){o(z,M)&&c.point(z,M)}function E(){for(var z=0,M=0,$=v.length;M<$;++M)for(var K=v[M],X=1,pe=K.length,le=K[0],U,W,H=le[0],_=le[1];X<pe;++X)U=H,W=_,le=K[X],H=le[0],_=le[1],W<=n?_>n&&(H-U)*(n-W)>(_-W)*(e-U)&&++z:_<=n&&(H-U)*(n-W)<(_-W)*(e-U)&&--z;return z}function j(){c=d,f=[],v=[],S=!0}function A(){var z=E(),M=S&&z,$=(f=Pn(f)).length;(M||$)&&(u.polygonStart(),M&&(u.lineStart(),i(null,null,1,u),u.lineEnd()),$&&In(f,s,z,i,u),u.polygonEnd()),c=u,f=v=x=null}function T(){L.point=R,v&&v.push(x=[]),k=!0,y=!1,w=N=NaN}function O(){f&&(R(b,g),m&&y&&d.rejoin(),f.push(d.result())),L.point=F,y&&c.lineEnd()}function R(z,M){var $=o(z,M);if(v&&x.push([z,M]),k)b=z,g=M,m=$,k=!1,$&&(c.lineStart(),c.point(z,M));else if($&&y)c.point(z,M);else{var K=[w=Math.max(St,Math.min(st,w)),N=Math.max(St,Math.min(st,N))],X=[z=Math.max(St,Math.min(st,z)),M=Math.max(St,Math.min(st,M))];Si(K,X,e,a,r,n)?(y||(c.lineStart(),c.point(K[0],K[1])),c.point(X[0],X[1]),$||c.lineEnd(),S=!1):$&&(c.lineStart(),c.point(z,M),S=!1)}w=z,N=M,y=$}return L}}const la=e=>e;var Kt=new Ye,ca=new Ye,$n,_n,da,pa,Pe={point:Ee,lineStart:Ee,lineEnd:Ee,polygonStart:function(){Pe.lineStart=Ei,Pe.lineEnd=Ai},polygonEnd:function(){Pe.lineStart=Pe.lineEnd=Pe.point=Ee,Kt.add(te(ca)),ca=new Ye},result:function(){var e=Kt/2;return Kt=new Ye,e}};function Ei(){Pe.point=zi}function zi(e,a){Pe.point=Un,$n=da=e,_n=pa=a}function Un(e,a){ca.add(pa*e-da*a),da=e,pa=a}function Ai(){Un($n,_n)}var Ze=1/0,Rt=Ze,xt=-Ze,Mt=xt,Ot={point:Ti,lineStart:Ee,lineEnd:Ee,polygonStart:Ee,polygonEnd:Ee,result:function(){var e=[[Ze,Rt],[xt,Mt]];return xt=Mt=-(Rt=Ze=1/0),e}};function Ti(e,a){e<Ze&&(Ze=e),e>xt&&(xt=e),a<Rt&&(Rt=a),a>Mt&&(Mt=a)}var ua=0,fa=0,lt=0,qt=0,Ft=0,Qe=0,ma=0,xa=0,ct=0,Vn,Hn,Le,Re,Se={point:We,lineStart:ln,lineEnd:cn,polygonStart:function(){Se.lineStart=Mi,Se.lineEnd=Oi},polygonEnd:function(){Se.point=We,Se.lineStart=ln,Se.lineEnd=cn},result:function(){var e=ct?[ma/ct,xa/ct]:Qe?[qt/Qe,Ft/Qe]:lt?[ua/lt,fa/lt]:[NaN,NaN];return ua=fa=lt=qt=Ft=Qe=ma=xa=ct=0,e}};function We(e,a){ua+=e,fa+=a,++lt}function ln(){Se.point=Li}function Li(e,a){Se.point=Ri,We(Le=e,Re=a)}function Ri(e,a){var r=e-Le,n=a-Re,o=Ge(r*r+n*n);qt+=o*(Le+e)/2,Ft+=o*(Re+a)/2,Qe+=o,We(Le=e,Re=a)}function cn(){Se.point=We}function Mi(){Se.point=qi}function Oi(){Yn(Vn,Hn)}function qi(e,a){Se.point=Yn,We(Vn=Le=e,Hn=Re=a)}function Yn(e,a){var r=e-Le,n=a-Re,o=Ge(r*r+n*n);qt+=o*(Le+e)/2,Ft+=o*(Re+a)/2,Qe+=o,o=Re*e-Le*a,ma+=o*(Le+e),xa+=o*(Re+a),ct+=o*3,We(Le=e,Re=a)}function Wn(e){this._context=e}Wn.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,a){switch(this._point){case 0:{this._context.moveTo(e,a),this._point=1;break}case 1:{this._context.lineTo(e,a);break}default:{this._context.moveTo(e+this._radius,a),this._context.arc(e,a,this._radius,0,ze);break}}},result:Ee};var ha=new Ye,Qt,Gn,Kn,dt,pt,ht={point:Ee,lineStart:function(){ht.point=Fi},lineEnd:function(){Qt&&Qn(Gn,Kn),ht.point=Ee},polygonStart:function(){Qt=!0},polygonEnd:function(){Qt=null},result:function(){var e=+ha;return ha=new Ye,e}};function Fi(e,a){ht.point=Qn,Gn=dt=e,Kn=pt=a}function Qn(e,a){dt-=e,pt-=a,ha.add(Ge(dt*dt+pt*pt)),dt=e,pt=a}let dn,Pt,pn,un;class fn{constructor(a){this._append=a==null?Xn:Pi(a),this._radius=4.5,this._=""}pointRadius(a){return this._radius=+a,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(a,r){switch(this._point){case 0:{this._append`M${a},${r}`,this._point=1;break}case 1:{this._append`L${a},${r}`;break}default:{if(this._append`M${a},${r}`,this._radius!==pn||this._append!==Pt){const n=this._radius,o=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,pn=n,Pt=this._append,un=this._,this._=o}this._+=un;break}}}result(){const a=this._;return this._="",a.length?a:null}}function Xn(e){let a=1;this._+=e[0];for(const r=e.length;a<r;++a)this._+=arguments[a]+e[a]}function Pi(e){const a=Math.floor(e);if(!(a>=0))throw new RangeError(`invalid digits: ${e}`);if(a>15)return Xn;if(a!==dn){const r=10**a;dn=a,Pt=function(o){let i=1;this._+=o[0];for(const l=o.length;i<l;++i)this._+=Math.round(arguments[i]*r)/r+o[i]}}return Pt}function Di(e,a){let r=3,n=4.5,o,i;function l(s){return s&&(typeof n=="function"&&i.pointRadius(+n.apply(this,arguments)),Ke(s,o(i))),i.result()}return l.area=function(s){return Ke(s,o(Pe)),Pe.result()},l.measure=function(s){return Ke(s,o(ht)),ht.result()},l.bounds=function(s){return Ke(s,o(Ot)),Ot.result()},l.centroid=function(s){return Ke(s,o(Se)),Se.result()},l.projection=function(s){return arguments.length?(o=s==null?(e=null,la):(e=s).stream,l):e},l.context=function(s){return arguments.length?(i=s==null?(a=null,new fn(r)):new Wn(a=s),typeof n!="function"&&i.pointRadius(n),l):a},l.pointRadius=function(s){return arguments.length?(n=typeof s=="function"?s:(i.pointRadius(+s),+s),l):n},l.digits=function(s){if(!arguments.length)return r;if(s==null)r=null;else{const p=Math.floor(s);if(!(p>=0))throw new RangeError(`invalid digits: ${s}`);r=p}return a===null&&(i=new fn(r)),l},l.projection(e).digits(r).context(a)}function Ca(e){return function(a){var r=new ga;for(var n in e)r[n]=e[n];return r.stream=a,r}}function ga(){}ga.prototype={constructor:ga,point:function(e,a){this.stream.point(e,a)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Ea(e,a,r){var n=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),n!=null&&e.clipExtent(null),Ke(r,e.stream(Ot)),a(Ot.result()),n!=null&&e.clipExtent(n),e}function Jn(e,a,r){return Ea(e,function(n){var o=a[1][0]-a[0][0],i=a[1][1]-a[0][1],l=Math.min(o/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),s=+a[0][0]+(o-l*(n[1][0]+n[0][0]))/2,p=+a[0][1]+(i-l*(n[1][1]+n[0][1]))/2;e.scale(150*l).translate([s,p])},r)}function Ii(e,a,r){return Jn(e,[[0,0],a],r)}function Bi(e,a,r){return Ea(e,function(n){var o=+a,i=o/(n[1][0]-n[0][0]),l=(o-i*(n[1][0]+n[0][0]))/2,s=-i*n[0][1];e.scale(150*i).translate([l,s])},r)}function $i(e,a,r){return Ea(e,function(n){var o=+a,i=o/(n[1][1]-n[0][1]),l=-i*n[0][0],s=(o-i*(n[1][1]+n[0][1]))/2;e.scale(150*i).translate([l,s])},r)}var mn=16,_i=ie(30*je);function xn(e,a){return+a?Vi(e,a):Ui(e)}function Ui(e){return Ca({point:function(a,r){a=e(a,r),this.stream.point(a[0],a[1])}})}function Vi(e,a){function r(n,o,i,l,s,p,u,c,d,f,v,x,b,g){var m=u-n,w=c-o,N=m*m+w*w;if(N>4*a&&b--){var y=l+f,k=s+v,S=p+x,L=Ge(y*y+k*k+S*S),F=mt(S/=L),E=te(te(S)-1)<Z||te(i-d)<Z?(i+d)/2:ft(k,y),j=e(E,F),A=j[0],T=j[1],O=A-n,R=T-o,z=w*O-m*R;(z*z/N>a||te((m*O+w*R)/N-.5)>.3||l*f+s*v+p*x<_i)&&(r(n,o,i,l,s,p,A,T,E,y/=L,k/=L,S,b,g),g.point(A,T),r(A,T,E,y,k,S,u,c,d,f,v,x,b,g))}}return function(n){var o,i,l,s,p,u,c,d,f,v,x,b,g={point:m,lineStart:w,lineEnd:y,polygonStart:function(){n.polygonStart(),g.lineStart=k},polygonEnd:function(){n.polygonEnd(),g.lineStart=w}};function m(F,E){F=e(F,E),n.point(F[0],F[1])}function w(){d=NaN,g.point=N,n.lineStart()}function N(F,E){var j=Je([F,E]),A=e(F,E);r(d,f,c,v,x,b,d=A[0],f=A[1],c=F,v=j[0],x=j[1],b=j[2],mn,n),n.point(d,f)}function y(){g.point=m,n.lineEnd()}function k(){w(),g.point=S,g.lineEnd=L}function S(F,E){N(o=F,E),i=d,l=f,s=v,p=x,u=b,g.point=N}function L(){r(d,f,c,v,x,b,i,l,o,s,p,u,mn,n),g.lineEnd=y,y()}return g}}var Hi=Ca({point:function(e,a){this.stream.point(e*je,a*je)}});function Yi(e){return Ca({point:function(a,r){var n=e(a,r);return this.stream.point(n[0],n[1])}})}function Wi(e,a,r,n,o){function i(l,s){return l*=n,s*=o,[a+e*l,r-e*s]}return i.invert=function(l,s){return[(l-a)/e*n,(r-s)/e*o]},i}function hn(e,a,r,n,o,i){if(!i)return Wi(e,a,r,n,o);var l=ie(i),s=se(i),p=l*e,u=s*e,c=l/e,d=s/e,f=(s*r-l*a)/e,v=(s*a+l*r)/e;function x(b,g){return b*=n,g*=o,[p*b-u*g+a,r-u*b-p*g]}return x.invert=function(b,g){return[n*(c*b-d*g+f),o*(v-d*b-c*g)]},x}function Gi(e){return Ki(function(){return e})()}function Ki(e){var a,r=150,n=480,o=250,i=0,l=0,s=0,p=0,u=0,c,d=0,f=1,v=1,x=null,b=sn,g=null,m,w,N,y=la,k=.5,S,L,F,E,j;function A(z){return F(z[0]*je,z[1]*je)}function T(z){return z=F.invert(z[0],z[1]),z&&[z[0]*Fe,z[1]*Fe]}A.stream=function(z){return E&&j===z?E:E=Hi(Yi(c)(b(S(y(j=z)))))},A.preclip=function(z){return arguments.length?(b=z,x=void 0,R()):b},A.postclip=function(z){return arguments.length?(y=z,g=m=w=N=null,R()):y},A.clipAngle=function(z){return arguments.length?(b=+z?Ni(x=z*je):(x=null,sn),R()):x*Fe},A.clipExtent=function(z){return arguments.length?(y=z==null?(g=m=w=N=null,la):Ci(g=+z[0][0],m=+z[0][1],w=+z[1][0],N=+z[1][1]),R()):g==null?null:[[g,m],[w,N]]},A.scale=function(z){return arguments.length?(r=+z,O()):r},A.translate=function(z){return arguments.length?(n=+z[0],o=+z[1],O()):[n,o]},A.center=function(z){return arguments.length?(i=z[0]%360*je,l=z[1]%360*je,O()):[i*Fe,l*Fe]},A.rotate=function(z){return arguments.length?(s=z[0]%360*je,p=z[1]%360*je,u=z.length>2?z[2]%360*je:0,O()):[s*Fe,p*Fe,u*Fe]},A.angle=function(z){return arguments.length?(d=z%360*je,O()):d*Fe},A.reflectX=function(z){return arguments.length?(f=z?-1:1,O()):f<0},A.reflectY=function(z){return arguments.length?(v=z?-1:1,O()):v<0},A.precision=function(z){return arguments.length?(S=xn(L,k=z*z),R()):Ge(k)},A.fitExtent=function(z,M){return Jn(A,z,M)},A.fitSize=function(z,M){return Ii(A,z,M)},A.fitWidth=function(z,M){return Bi(A,z,M)},A.fitHeight=function(z,M){return $i(A,z,M)};function O(){var z=hn(r,0,0,f,v,d).apply(null,a(i,l)),M=hn(r,n-z[0],o-z[1],f,v,d);return c=hi(s,p,u),L=ia(a,M),F=ia(c,L),S=xn(L,k),R()}function R(){return E=j=null,A}return function(){return a=e.apply(this,arguments),A.invert=a.invert&&T,O()}}function Zn(e,a){var r=a*a,n=r*r;return[e*(.8707-.131979*r+n*(-.013791+n*(.003971*r-.001529*n))),a*(1.007226+r*(.015085+n*(-.044475+.028874*r-.005916*n)))]}Zn.invert=function(e,a){var r=a,n=25,o;do{var i=r*r,l=i*i;r-=o=(r*(1.007226+i*(.015085+l*(-.044475+.028874*i-.005916*l)))-a)/(1.007226+i*(.015085*3+l*(-.044475*7+.028874*9*i-.005916*11*l)))}while(te(o)>Z&&--n>0);return[e/(.8707+(i=r*r)*(-.131979+i*(-.013791+i*i*i*(.003971-.001529*i)))),r]};function Qi(){return Gi(Zn).scale(175.295)}function Xi(e){return e}function Ji(e){if(e==null)return Xi;var a,r,n=e.scale[0],o=e.scale[1],i=e.translate[0],l=e.translate[1];return function(s,p){p||(a=r=0);var u=2,c=s.length,d=new Array(c);for(d[0]=(a+=s[0])*n+i,d[1]=(r+=s[1])*o+l;u<c;)d[u]=s[u],++u;return d}}function Zi(e,a){for(var r,n=e.length,o=n-a;o<--n;)r=e[o],e[o++]=e[n],e[n]=r}function es(e,a){return typeof a=="string"&&(a=e.objects[a]),a.type==="GeometryCollection"?{type:"FeatureCollection",features:a.geometries.map(function(r){return gn(e,r)})}:gn(e,a)}function gn(e,a){var r=a.id,n=a.bbox,o=a.properties==null?{}:a.properties,i=ts(e,a);return r==null&&n==null?{type:"Feature",properties:o,geometry:i}:n==null?{type:"Feature",id:r,properties:o,geometry:i}:{type:"Feature",id:r,bbox:n,properties:o,geometry:i}}function ts(e,a){var r=Ji(e.transform),n=e.arcs;function o(c,d){d.length&&d.pop();for(var f=n[c<0?~c:c],v=0,x=f.length;v<x;++v)d.push(r(f[v],v));c<0&&Zi(d,x)}function i(c){return r(c)}function l(c){for(var d=[],f=0,v=c.length;f<v;++f)o(c[f],d);return d.length<2&&d.push(d[0]),d}function s(c){for(var d=l(c);d.length<4;)d.push(d[0]);return d}function p(c){return c.map(s)}function u(c){var d=c.type,f;switch(d){case"GeometryCollection":return{type:d,geometries:c.geometries.map(u)};case"Point":f=i(c.coordinates);break;case"MultiPoint":f=c.coordinates.map(i);break;case"LineString":f=l(c.arcs);break;case"MultiLineString":f=c.arcs.map(l);break;case"Polygon":f=p(c.arcs);break;case"MultiPolygon":f=c.arcs.map(p);break;default:return null}return{type:d,coordinates:f}}return u(a)}let Ct=null;function as(){return Ct||(Ct=(async()=>{var e;try{const a=await fetch("/world/countries-110m.json");if(!a.ok)return null;const r=await a.json(),n=(e=r==null?void 0:r.objects)==null?void 0:e.countries;if(!n)return null;const o=es(r,n),i=Qi().fitExtent([[8,8],[992,492]],{type:"Sphere"}),l=Di(i),s=(o.features||[]).filter(u=>{var c;return(((c=u.properties)==null?void 0:c.name)||"")!=="Antarctica"}).map(u=>{var f;const c=((f=u.properties)==null?void 0:f.name)||"",d=l(u)||"";return d?{i2:Dr(c)||null,n:c,d}:null}).filter(u=>!!u);if(!s.length)return null;const p={};for(const[u,c]of Object.entries(Ir)){const d=i(c);d&&(p[u]={x:d[0],y:d[1]})}return{key:"monde",viewBox:"0 0 1000 500",fr:"Monde",en:"World",countries:s,anchors:p}}catch{return null}})(),Ct)}function ns(e){const[a,r]=h.useState(null);return h.useEffect(()=>{if(!e||a)return;let n=!1;return as().then(o=>{!n&&o&&r(o)}),()=>{n=!0}},[e,a]),a}const bn=["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"];function Et(e){let a=2166136261;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function rs(e,a){const[r,n]=h.useState(1);return h.useEffect(()=>{let o=!0,i=0;const l=()=>{var u;if(!o)return;const p=(u=e.current)==null?void 0:u.getScreenCTM();p&&p.a>0?n(p.a):i=requestAnimationFrame(l)};l();const s=new ResizeObserver(()=>l());return e.current&&s.observe(e.current),window.addEventListener("resize",l),()=>{o=!1,cancelAnimationFrame(i),s.disconnect(),window.removeEventListener("resize",l)}},[e,a]),r}function os(){const{st:e,dispatch:a,scoped:r,pipe:n,markRow:o,markedId:i,byId:l,lang:s,t:p}=q(),u=h.useRef(null),c=h.useRef(null),d=ns(e.continent==="monde"),f=e.continent==="monde"?d:ka.find(j=>j.key===e.continent)||null,v=rs(u,e.continent+":"+e.mapFolded+":"+!!f),[x,b]=h.useState(new Map),[g,m]=h.useState(null);h.useEffect(()=>{const j=u.current;if(!j)return;const A=new Map;j.querySelectorAll("path[data-i2]").forEach(T=>{const O=T.dataset.i2;if(O)try{const R=T.getBBox();R.width>0&&A.set(O,{x:R.x,y:R.y,w:R.width,h:R.height})}catch{}}),b(A)},[e.continent,v,f]);const w=h.useMemo(()=>r.filter(j=>j.cc),[r]),N=h.useMemo(()=>{const j=new Map;return w.forEach(A=>j.set(A.cc,(j.get(A.cc)||0)+1)),j},[w]),y=e.continent==="monde"&&d?d.anchors:null,k=h.useMemo(()=>w.map(j=>{const A=y&&j.cc?y[j.cc]:void 0;if(A){const $=Et(j.name||j.id||""),K=Et((j.id||j.name||"")+"·y");return{d:j,x:A.x+($-.5)*10,y:A.y+(K-.5)*10}}const T=j.cc?x.get(j.cc):void 0;if(!T)return null;const O=Et(j.name||j.id||""),R=Et((j.id||j.name||"")+"·y"),z=(O-.5)*Math.min(T.w*.55,60),M=(R-.5)*Math.min(T.h*.55,60);return{d:j,x:T.x+T.w/2+z,y:T.y+T.h/2+M}}).filter(j=>!!j),[w,x,y]),S=j=>v>0?j/v:j,L=h.useMemo(()=>n?[0,1,2,3,4,5].map(j=>({c:bn[j],fr:p.plabels[j].toUpperCase(),en:p.plabels[j].toUpperCase(),n:r.filter(A=>A.kind==="target"&&ke(A)===j).length})).filter(j=>j.n>0):Pa.map((j,A)=>({...j,n:r.filter(T=>Da(T)===A).length})),[r,n,p.plabels]),F=i?l.get(i):null,E=F?k.find(j=>j.d.id===F.id):null;return f?t.jsxs("div",{className:"mapzone",ref:c,children:[t.jsxs("svg",{ref:u,viewBox:f.viewBox,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":s==="fr"?f.fr:f.en,onMouseLeave:()=>{m(null),o(null)},children:[t.jsx("g",{children:f.countries.map((j,A)=>t.jsx("g",{className:"ct"+(j.i2&&N.get(j.i2)?"":" empty"),children:t.jsx("path",{d:j.d,"data-i2":j.i2||void 0})},A))}),t.jsx("g",{children:k.map(j=>{const A=Pa[Da(j.d)],T=!!xe(j.d),O=j.d.kind==="target",R=n&&O?bn[ke(j.d)]:A.c,z=!n&&Ne(j.d);return t.jsxs("g",{className:"co"+(z?" done":""),onMouseEnter:()=>{var K,X;const M=(K=c.current)==null?void 0:K.getBoundingClientRect(),$=(X=u.current)==null?void 0:X.createSVGPoint();if($&&u.current&&M){$.x=j.x,$.y=j.y;const pe=$.matrixTransform(u.current.getScreenCTM());m({x:pe.x-M.left,y:pe.y-M.top,label:j.d.name+" · "+(nt(j.d.cc,s)||j.d.countryLabel||"")})}o(j.d.id)},onMouseLeave:()=>{m(null),o(null)},onClick:()=>{var K;const M=(K=u.current)==null?void 0:K.createSVGPoint();let $=null;if(M&&u.current){M.x=j.x,M.y=j.y;const X=M.matrixTransform(u.current.getScreenCTM());$={x:X.x,y:X.y}}a({type:"popup",id:j.d.id,anchor:$})},children:[t.jsx("circle",{className:"h",cx:j.x,cy:j.y,r:S(Math.max(11,A.px+7))}),t.jsx("circle",{className:"v",cx:j.x,cy:j.y,r:S(A.px),fill:R,stroke:T?"#DC2626":"#ffffff",strokeWidth:S(T?2.2:1.3)})]},j.d.id||j.d.name)})}),E&&t.jsx("circle",{className:"ring on",cx:E.x,cy:E.y,r:S(13),fill:"none",stroke:"#0F172A",strokeWidth:S(2)})]}),t.jsx("div",{className:"hov"+(g?" on":""),style:g?{left:g.x,top:g.y}:void 0,children:g==null?void 0:g.label}),t.jsx("div",{className:"legend",children:L.map((j,A)=>t.jsxs("span",{children:[t.jsx("i",{style:{"--c":j.c}}),s==="fr"?j.fr:j.en," ",t.jsx("b",{children:j.n})]},A))}),r.some(j=>!j.cc)&&t.jsx("div",{className:"legend",style:{left:"auto",right:10},children:t.jsxs("span",{children:["🌐 ",p.notLocated," ",t.jsx("b",{children:r.filter(j=>!j.cc).length})]})})]}):t.jsx("div",{className:"mapzone",ref:c})}function is(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!r)return e;const o=(a==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||r[2],i=Number(r[3]);return a==="en"?`${o} ${i}, ${r[1]}`:`${i} ${o} ${r[1]}`}function ss(){const{st:e,dispatch:a,dossiers:r,t:n,pipe:o,contName:i,lang:l}=q(),s=e.filters,p=h.useMemo(()=>e.continent==="monde"?r:r.filter(x=>x.continent===e.continent),[r,e.continent]),u=x=>p.filter(b=>x!=="country"&&s.country.length&&!s.country.includes(b.cc||"")?!1:Na(b,s,o,x==="country"?void 0:x)),c=h.useMemo(()=>{const x=u("win"),b=g=>x.filter(m=>(m.date?Math.max(0,Math.floor((Date.now()-Date.parse(m.date))/864e5)):9999)<=g).length;return[b(0),b(7),b(30),x.length]},[p,s,o]),d=h.useMemo(()=>s.day?u("win").filter(x=>(x.date||"").slice(0,10)===s.day).length:0,[p,s,o]),f=s.sector.length+s.country.length+s.engine.length+s.stage.length+s.angle.length+s.memoLevel.length+(s.signalOnly?1:0)+(s.day||s.win!=="all"?1:0)+(s.search.trim()?1:0),v=(x,b,g,m="fbtn")=>t.jsxs("button",{type:"button",className:m,"aria-expanded":e.openFacet===x,onClick:()=>a({type:"openFacet",facet:x}),children:[t.jsx("span",{className:"fl",children:b}),g>0&&t.jsx("span",{className:"n",children:g}),t.jsx("span",{className:"cv",children:"▾"})]},x);return t.jsxs(t.Fragment,{children:[t.jsxs("aside",{className:"fbar",children:[s.day?t.jsxs("div",{className:"seg",children:[t.jsxs("button",{type:"button","aria-pressed":!0,children:[n.fDay(is(s.day,l)),t.jsx("b",{children:d})]}),t.jsx("button",{type:"button",onClick:()=>a({type:"filters",patch:{day:"",win:"all"}}),children:n.fDayOff})]}):t.jsx("div",{className:"seg",children:["1","7","30","all"].map((x,b)=>t.jsxs("button",{type:"button","aria-pressed":s.win===x,onClick:()=>a({type:"filters",patch:{win:x}}),children:[n.dates[b],t.jsx("b",{children:c[b]})]},x))}),t.jsxs("span",{className:"fsrch",children:["🔍",t.jsx("input",{placeholder:n.identSearch,value:s.search,onChange:x=>a({type:"filters",patch:{search:x.target.value}})})]}),t.jsxs("div",{className:"facets",children:[t.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":e.openFacet==="sig",onClick:()=>a({type:"openFacet",facet:"sig"}),children:[t.jsx("span",{className:"fl",children:n.fSignal}),s.signalOnly&&t.jsx("span",{className:"n",children:s.signalEngines.length||"✓"}),t.jsx("span",{className:"cv",children:"▾"})]}),s.sector.length===1?t.jsxs("button",{type:"button",className:"fbtn on","aria-expanded":e.openFacet==="sec",onClick:()=>a({type:"openFacet",facet:"sec"}),title:s.sector[0],children:[t.jsx("span",{className:"fl",children:n.fSector}),t.jsx("span",{className:"n",style:{maxWidth:"16ch",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.sector[0]}),t.jsx("span",{className:"cv",children:"▾"})]}):v("sec",n.fSector,s.sector.length),v("pay",n.fCountry,s.country.length),v("det",n.fEngine,s.engine.length),v("sta",n.fStage,s.stage.length),o&&v("ang","Angle",s.angle.length),o&&v("mem","Mémo",s.memoLevel.length)]}),t.jsx("span",{className:"fgrow"}),t.jsxs("div",{className:"frow2",children:[e.mapFolded&&t.jsxs("button",{type:"button",className:"mapbtn",onClick:()=>a({type:"mapFold",folded:!1}),children:["🗺 ",n.showMap.replace("🗺 ","")]}),f>0&&t.jsxs("button",{type:"button",className:"resetbtn on",title:n.clearTitle(p.length,i),onClick:()=>a({type:"reset"}),children:[t.jsx("span",{className:"rot",children:"↺"}),t.jsx("span",{children:n.clear(f)})]}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>a({type:"modal",modal:"alert"}),children:n.alertBtn})]})]}),e.openFacet&&t.jsx(ls,{poolFor:u})]})}function ls({poolFor:e}){const{st:a,dispatch:r,t:n,lang:o}=q(),i=a.filters,l=a.openFacet,{title:s,cols:p,options:u}=h.useMemo(()=>{if(l==="sig"){const x=e("signal").filter(m=>xe(m)),b=new Map;x.forEach(m=>{const w=m.engine||"";b.set(w,(b.get(w)||0)+1)});const g=[{v:"*",label:n.fpSigAll,n:x.length,html:!0,on:i.signalOnly&&!i.signalEngines.length},...ea([...b.keys()],o).map(m=>({v:m,label:Xe(m)+" "+De(m,o),n:b.get(m)||0,html:!1,on:i.signalOnly&&i.signalEngines.includes(m)}))];return{title:n.fpSigTitle,cols:2,options:g}}if(l==="sec"){const x=e("sector"),b=new Map;return x.forEach(g=>{g.sector&&b.set(g.sector,(b.get(g.sector)||0)+1)}),{title:n.fSector.toUpperCase(),cols:3,options:[...b.entries()].sort((g,m)=>m[1]-g[1]).map(([g,m])=>({v:g,label:g,n:m,html:!1,on:i.sector.includes(g)}))}}if(l==="pay"){const x=e("country"),b=new Map;return x.forEach(g=>{g.cc&&b.set(g.cc,(b.get(g.cc)||0)+1)}),{title:n.fCountry.toUpperCase(),cols:3,options:[...b.entries()].sort((g,m)=>m[1]-g[1]).map(([g,m])=>({v:g,label:nt(g,o)||g,n:m,html:!1,on:i.country.includes(g)}))}}if(l==="det"){const x=e("engine"),b=new Map;return x.forEach(g=>{g.engine&&b.set(g.engine,(b.get(g.engine)||0)+1)}),{title:n.fEngine.toUpperCase(),cols:2,options:ea([...b.keys()],o).map(g=>({v:g,label:Xe(g)+" "+De(g,o)+' <span style="color:var(--dim);font-size:10px">· '+Br($r(g),o)+"</span>",n:b.get(g)||0,html:!0,on:i.engine.includes(g)}))}}if(l==="ang"){const x=e("angle"),b=new Map;return x.forEach(g=>{g.angle&&b.set(g.angle,(b.get(g.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...b.entries()].sort((g,m)=>m[1]-g[1]).map(([g,m])=>({v:g,label:g.replace(/[_-]+/g," "),n:m,html:!1,on:i.angle.includes(g)}))}}if(l==="mem"){const x=e("memoLevel"),b=new Map;x.forEach(m=>{if(m.kind==="target"){const w=ya(m);b.set(w,(b.get(w)||0)+1)}});const g=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(m=>({v:String(m),label:g[m],n:b.get(m)||0,html:!1,on:i.memoLevel.includes(m)}))}}const f=e("stage"),v=new Map;return f.forEach(x=>{x.stage&&v.set(x.stage,(v.get(x.stage)||0)+1)}),{title:n.fStage.toUpperCase(),cols:2,options:[...v.entries()].sort((x,b)=>b[1]-x[1]).map(([x,b])=>({v:x,label:x,n:b,html:!1,on:i.stage.includes(x)}))}},[l,a,o]),c=f=>{if(l==="sig"){if(f==="*")r({type:"filters",patch:{signalOnly:!(i.signalOnly&&!i.signalEngines.length),signalEngines:[]}});else{const x=i.signalEngines.includes(f)?i.signalEngines.filter(b=>b!==f):[...i.signalEngines,f];r({type:"filters",patch:{signalOnly:!0,signalEngines:x}})}return}if(l==="mem"){r({type:"toggleMemoLevel",value:Number(f)});return}r({type:"toggleFacet",facet:l==="sec"?"sector":l==="pay"?"country":l==="det"?"engine":l==="ang"?"angle":"stage",value:f})},d=()=>{r(l==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:l==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:l==="sec"?"sector":l==="pay"?"country":l==="det"?"engine":l==="ang"?"angle":"stage"})};return t.jsxs("div",{className:"fpanel on",children:[t.jsxs("div",{className:"ph",children:[t.jsx("b",{children:s}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",onClick:d,children:n.fpNone}),t.jsx("button",{type:"button",onClick:()=>r({type:"openFacet",facet:null}),children:n.fpClose})]}),t.jsx("div",{className:"fcols"+(p===2?" two":""),children:u.map(f=>t.jsxs("button",{type:"button",className:"opt","aria-pressed":f.on,onClick:()=>c(f.v),children:[t.jsx("span",{className:"bx"}),f.html?t.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:f.label}}):t.jsx("span",{className:"l",children:f.label}),t.jsx("span",{className:"n",children:f.n})]},f.v))}),t.jsxs("div",{className:"pf",children:[t.jsx("span",{className:"t",children:n.alertReady}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:n.alertCreate})]})]})}function er(e){return String(e||"").split(`
`).map(a=>a.replace(/^#{1,6}\s*/,"").replace(/[*_`>]/g,"").trimEnd()).filter(a=>a.trim().length>0)}function cs(e){var o;const a=[],r=new Set,n=i=>{const l=(i||"").trim();!l||r.has(l.toLowerCase())||(r.add(l.toLowerCase()),a.push(l))};return((e==null?void 0:e.companies_cited)||[]).forEach(i=>n(i==null?void 0:i.name)),(((o=e==null?void 0:e.prospective)==null?void 0:o.companies_to_evaluate)||[]).forEach(i=>n(i==null?void 0:i.name)),a}function vn({icon:e,title:a,hint:r,rows:n,addLabel:o,onEvaluate:i,onAddAll:l}){const{t:s}=q();return n.length?t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:[e," ",a]}),t.jsx("span",{className:"n",children:n.length}),l&&t.jsx("button",{type:"button",className:"rsblk-all",onClick:()=>l(n.map(p=>p.name)),children:o})]}),t.jsx("p",{className:"rsblk-hint",children:r}),t.jsx("div",{className:"rsblk-rows",children:n.map(p=>t.jsxs("div",{className:"rsrow",children:[t.jsxs("div",{className:"rsrow-t",children:[t.jsxs("div",{className:"rsrow-h",children:[t.jsx("span",{className:"nm",children:p.name}),p.chips.map(u=>t.jsx("span",{className:"ch",children:u},u))]}),p.line1&&t.jsx("p",{className:"w",children:p.line1}),p.line2&&t.jsx("p",{className:"r",children:p.line2})]}),t.jsx("button",{type:"button",className:"rsrow-go",onClick:()=>i(p.name),children:s.rsEvalOne})]},p.name))})]}):null}function tr({card:e,onEvaluate:a,onAddAll:r}){var l;const{t:n}=q(),o=((e==null?void 0:e.companies_cited)||[]).filter(s=>s&&(s.name||"").trim()).map(s=>({name:(s.name||"").trim(),line1:(s.what||"").trim(),line2:(s.role||"").trim(),chips:[(s.country||"").trim()].filter(Boolean)})),i=(((l=e==null?void 0:e.prospective)==null?void 0:l.companies_to_evaluate)||[]).filter(s=>s&&(s.name||"").trim()).map(s=>({name:(s.name||"").trim(),line1:(s.why||"").trim(),chips:[(s.country||"").trim(),(s.stage||"").trim()].filter(Boolean)}));return!o.length&&!i.length?t.jsx("p",{className:"rsblk-none",children:n.rsNoCompanies}):t.jsxs(t.Fragment,{children:[t.jsx(vn,{icon:"🏷",title:n.rsCited,hint:n.rsCitedHint,rows:o,addLabel:n.rsAddAll(o.length),onEvaluate:a,onAddAll:r}),t.jsx(vn,{icon:"🎯",title:n.rsMatch,hint:n.rsMatchHint,rows:i,addLabel:n.rsAddAll(i.length),onEvaluate:a,onAddAll:r})]})}function ds({card:e,onEvaluate:a,onAddAll:r}){var s,p,u;const{t:n}=q(),o=[e.industry,...e.market_tags||[],e.author].map(c=>(c||"").trim()).filter(Boolean),i=(((s=e.prospective)==null?void 0:s.criteria)||[]).filter(Boolean),l=(e.sources||[]).filter(c=>c&&c.url);return t.jsxs("div",{className:"rsdet",children:[e.market&&t.jsx("p",{className:"rsmk",children:e.market}),o.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:n.rsTags}),o.map(c=>t.jsx("span",{children:c},c))]}),t.jsxs("div",{className:"rsbody",children:[e.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${e.mindmap_png_b64}`,alt:n.rsMindmap}),t.jsx("figcaption",{children:n.rsMindmap})]}),t.jsx("div",{className:"rssum",children:er(e.summary_md||"").map((c,d)=>t.jsx("p",{children:c},d))})]}),t.jsx(tr,{card:e,onEvaluate:a,onAddAll:r}),(((p=e.prospective)==null?void 0:p.conclusion)||i.length>0)&&t.jsxs("section",{className:"rsblk rspro",children:[t.jsx("div",{className:"rsblk-h",children:t.jsxs("b",{children:["🔮 ",n.rsConclusion]})}),((u=e.prospective)==null?void 0:u.conclusion)&&t.jsx("p",{className:"rspro-c",children:e.prospective.conclusion}),i.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"rsblk-hint",children:n.rsCriteria}),t.jsx("ul",{className:"rspro-l",children:i.map(c=>t.jsx("li",{children:c},c))})]})]}),l.length>0&&t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:["🔗 ",n.rsSources]}),t.jsx("span",{className:"n",children:l.length})]}),t.jsx("div",{className:"rssrc",children:l.map(c=>t.jsx("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",children:c.label||c.url},c.url))})]})]})}function ps(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{day:"2-digit",month:"short"})}function us({onClose:e,onEvaluate:a,onAddAll:r,bump:n}){const{t:o,token:i,email:l}=q(),[s,p]=h.useState(null),[u,c]=h.useState(null),[d,f]=h.useState(null),[v,x]=h.useState(!1);h.useEffect(()=>{let g=!0;return(async()=>{const m=await An({email:l,cbToken:i});g&&p(m)})(),()=>{g=!1}},[l,i,n]);const b=g=>{c(g),f(null),x(!0),(async()=>{const m=await _r(g.id);f(m),x(!1)})()};return t.jsxs("div",{className:"rsarch",children:[t.jsxs("div",{className:"rsarch-h",children:[u?t.jsx("button",{type:"button",className:"rsarch-back",onClick:()=>{c(null),f(null)},children:o.rsArchBack}):t.jsxs("b",{children:["🗂 ",o.rsArchTitle]}),u&&t.jsx("span",{className:"ti",children:u.title}),!u&&s&&t.jsx("span",{className:"n",children:s.length}),t.jsx("button",{type:"button",className:"rsx",title:o.rsClose,onClick:e,children:"×"})]}),!u&&t.jsxs("div",{className:"rsarch-list",children:[s===null&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchLoading}),s!==null&&s.length===0&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchEmpty}),(s||[]).map(g=>t.jsxs("button",{type:"button",className:"rsarch-row",onClick:()=>b(g),children:[t.jsx("span",{className:"ti",children:g.title}),t.jsxs("span",{className:"me",children:[ps(g.created_at),g.industry?` · ${g.industry}`:"",g.author?` · ${g.author}`:""]}),t.jsx("span",{className:"cn",children:o.rsRowCounts(g.cited_n||0,g.evaluate_n||0)}),t.jsx("span",{className:"st"+(g.published?" on":""),children:g.published?o.rsPub:o.rsPriv})]},g.id))]}),u&&t.jsxs("div",{className:"rsarch-one",children:[t.jsxs("div",{className:"rsarch-sub",children:[u.source_url&&t.jsx("a",{href:u.source_url,target:"_blank",rel:"noopener noreferrer",children:o.rsSource}),u.published&&u.page_url&&t.jsx("a",{href:u.page_url,target:"_blank",rel:"noopener noreferrer",children:o.rsLink}),t.jsx("span",{className:"st"+(u.published?" on":""),children:u.published?o.rsPub:o.rsPriv})]}),v&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchLoading}),!v&&!d&&t.jsx("p",{className:"rsarch-msg",children:o.rsArchGone}),!v&&d&&t.jsx(ds,{card:d,onEvaluate:a,onAddAll:r})]})]})}const yn=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function fs(){const{t:e,mode:a,token:r,email:n,askEvaluate:o,sessTally:i,dispatch:l,evalBusy:s,evalCards:p,caps:u,data:c,canWrite:d}=q(),f=a==="client",[v,x]=h.useState(""),[b,g]=h.useState(!1),[m,w]=h.useState(""),[N,y]=h.useState(!1),[k,S]=h.useState(""),[L,F]=h.useState([]),E=h.useRef(!1),[j,A]=h.useState(!1),[T,O]=h.useState(""),[R,z]=h.useState(""),[M,$]=h.useState(!1),[K,X]=h.useState(0),[pe,le]=h.useState(""),[U,W]=h.useState(null),[H,_]=h.useState(null),[G,ee]=h.useState(!1),[ne,ge]=h.useState(null),[ue,Y]=h.useState(0),Q=h.useRef(!1),be=v.trim()?yn.test(v.trim())?e.evalUrl:e.evalName:e.evalWaiting,B=h.useMemo(()=>m.split(`
`).map(P=>P.trim()).filter(Boolean).slice(0,15),[m]);h.useEffect(()=>{if(typeof window>"u")return;const P=(new URLSearchParams(window.location.search).get("rs")||"").trim();!P||!/^https?:\/\//i.test(P)||(O(P),A(!0))},[]),h.useEffect(()=>{const P=J=>{var oe;const ae=String(((oe=J.detail)==null?void 0:oe.url)||"").trim();!ae||!/^https?:\/\//i.test(ae)||(O(ae),A(!0))};return window.addEventListener("ppmap:research",P),()=>window.removeEventListener("ppmap:research",P)},[]),h.useEffect(()=>{if(!d){ge(null);return}let P=!0;return(async()=>{const J=await An({email:n,cbToken:r});P&&ge(J.length)})(),()=>{P=!1}},[d,n,r,ue]);const de=L.length?L:p,re=c.credits,fe=h.useCallback(P=>{const J=P.map(ae=>(ae||"").trim()).filter(Boolean);J.length&&(w(ae=>{const oe=ae.split(`
`).map($e=>$e.trim()).filter(Boolean),qe=new Set(oe.map($e=>$e.toLowerCase())),Ae=J.filter($e=>!qe.has($e.toLowerCase()));return[...oe,...Ae].slice(0,15).join(`
`)}),g(!0))},[]);h.useEffect(()=>{if(!M)return;X(0);const P=window.setInterval(()=>X(J=>J+1),1e3);return()=>window.clearInterval(P)},[M]);const Me=()=>{const P=v.trim();P&&(o(null,P),x(""))},ve=async()=>{if(!f){o(null,B[0]||"");return}if(!B.length||N)return;y(!0),E.current=!1;const P=[];for(let J=0;J<B.length&&!E.current;J++){S(e.evaluating(J+1,B.length,B[J]));const ae=await Tn(r,B[J],"atelier2");if(P.unshift({name:ae.company||B[J],verdict:ae.verdict,reason:ae.reason||"",remaining:ae.remaining??null}),F([...P]),ae.verdict==="quota"){P.unshift({name:"",verdict:"quota",reason:e.quota(B.length-J-1),remaining:0}),F([...P]),w(B.slice(J+1).join(`
`)),S(""),y(!1);return}}S(""),w(E.current?B.slice(P.length).join(`
`):""),y(!1)},Oe=async()=>{var ae;if(Q.current)return;const P=T.trim().replace(/\s+/g,""),J=R.trim();if(!P&&!J){le(e.rsNeed);return}if(!f){o(null,P||J.slice(0,80));return}Q.current=!0,le(""),W(null),_(null),$(!0);try{const oe=await Vr({url:P,text:J,email:n,cbToken:r});if($(!1),!oe||oe.status!=="success"){le((oe==null?void 0:oe.message)||"Erreur");return}W(oe),A(!1),fe((((ae=oe.prospective)==null?void 0:ae.companies_to_evaluate)||[]).map(Ae=>(Ae==null?void 0:Ae.name)||"")),_({state:"pending"});const qe=await Hr(oe,{email:n,cbToken:r});_(qe.ok?{state:"ok"}:{state:"fail",msg:qe.error||""}),qe.ok&&Y(Ae=>Ae+1)}finally{Q.current=!1,$(!1)}},Ie=[U==null?void 0:U.industry,...(U==null?void 0:U.market_tags)||[],U==null?void 0:U.author].map(P=>(P||"").trim()).filter(Boolean),ye=(H==null?void 0:H.state)==="pending",Be=H&&(ye?t.jsx("span",{className:"rslink pend",children:e.rsSaving}):H.state==="ok"?t.jsx("span",{className:"rslink ok",children:e.rsSaved}):t.jsx("span",{className:"rslink fail",title:H.msg,children:e.rsSaveFail})),$t=cs(U).length;return t.jsxs("div",{className:"demand",children:[t.jsxs("div",{className:"drow",children:[t.jsxs("span",{className:"dfield",children:[t.jsx("input",{value:v,placeholder:e.evalPh,autoComplete:"off",maxLength:200,onChange:P=>x(P.target.value),onKeyDown:P=>{P.key==="Enter"&&Me()}}),t.jsx("span",{className:"detect"+(yn.test(v.trim())?" url":""),children:be})]}),t.jsxs("button",{type:"button",className:"evalbtn"+(s?" loading":""),disabled:s,onClick:Me,children:[t.jsx("span",{className:"fill"}),e.evalGo]}),u.showCredits&&re&&t.jsxs("button",{type:"button",className:"credits"+(re.total_available<=0&&!re.unlimited?" empty":""),onClick:()=>l({type:"modal",modal:"recharge"}),children:[t.jsx("span",{className:"cl",children:e.creditsCap}),t.jsx("b",{children:re.unlimited?"∞":re.total_available}),!re.unlimited&&t.jsxs("span",{className:"cm",children:["/ ",re.daily_grant+re.purchased]}),re.total_available<=0&&!re.unlimited?t.jsx("span",{className:"rc",children:e.creditsRecharge}):t.jsx("span",{className:"cd",children:e.creditsToday})]})]}),t.jsxs("div",{className:"dunder",children:[t.jsx("button",{type:"button",className:"dmulti",onClick:()=>g(!b),children:e.evalMulti}),t.jsx("button",{type:"button",className:"dmulti dsearch"+(j?" on":""),onClick:()=>A(!j),children:e.rsOpen}),ne!==null&&ne>0&&t.jsx("button",{type:"button",className:"dmulti darch"+(G?" on":""),onClick:()=>ee(!G),children:e.rsArchOpen(ne)})]}),G&&t.jsx(us,{bump:ue,onClose:()=>ee(!1),onEvaluate:P=>o(null,P),onAddAll:fe}),j&&t.jsxs("div",{className:"rsp on",children:[t.jsxs("div",{className:"rsf",children:[t.jsx("input",{className:"rsurl",value:T,placeholder:e.rsUrlPh,autoComplete:"off",spellCheck:!1,inputMode:"url",maxLength:600,onChange:P=>O(P.target.value),onKeyDown:P=>{P.key==="Enter"&&Oe()}}),t.jsx("span",{className:"rsor",children:e.rsOr}),t.jsx("textarea",{className:"rstext",value:R,placeholder:e.rsTextPh,onChange:P=>z(P.target.value)})]}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+(M?" loading":""),style:{justifyContent:"center"},disabled:M||ye||!T.trim()&&!R.trim(),onClick:()=>{Oe()},children:[t.jsx("span",{className:"fill"}),M?`${Ur(T.trim())==="youtube"&&T.trim()?e.rsRunningVid:e.rsRunning} ${e.rsElapsed(K)}`:ye?e.rsSaving:e.rsGo]}),t.jsx("span",{className:"hint",children:e.rsHint})]})]}),pe&&t.jsx("div",{className:"rserr",children:pe}),U&&t.jsxs("div",{className:"rscard",children:[t.jsxs("div",{className:"rsh",children:[t.jsx("b",{children:U.title}),U.source_url&&t.jsx("a",{href:U.source_url,target:"_blank",rel:"noopener noreferrer",children:e.rsSource}),t.jsx("button",{type:"button",className:"rsx",title:e.rsClose,onClick:()=>{W(null),_(null)},children:"×"})]}),U.market&&t.jsx("p",{className:"rsmk",children:U.market}),Ie.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:e.rsTags}),Ie.map(P=>t.jsx("span",{children:P},P))]}),t.jsxs("div",{className:"rsbody",children:[U.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${U.mindmap_png_b64}`,alt:e.rsMindmap}),t.jsx("figcaption",{children:e.rsMindmap})]}),t.jsx("div",{className:"rssum",children:er(U.summary_md||"").map((P,J)=>t.jsx("p",{children:P},J))})]}),t.jsx(tr,{card:U,onEvaluate:P=>o(null,P),onAddAll:fe}),t.jsxs("div",{className:"rsfoot",children:[t.jsx("span",{children:e.rsFound($t)}),Be]})]}),b&&t.jsxs("div",{className:"bulk on",children:[t.jsx("textarea",{value:m,placeholder:e.bulkPh,onChange:P=>w(P.target.value.split(`
`).slice(0,15).join(`
`))}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+(N?" loading":""),style:{justifyContent:"center"},disabled:N||!B.length,onClick:()=>{ve()},children:[t.jsx("span",{className:"fill"}),N&&k?k:e.evalList]}),t.jsx("span",{className:"hint",children:e.bulkCount(B.length)})]})]}),de.slice(0,1).map((P,J)=>{const ae=P.verdict==="kept",oe=P.verdict==="quota",qe=ae?"var(--brand)":oe?"var(--bolt)":"var(--red)",Ae=ae?"var(--brand-l)":oe?"#FEF3C7":"#FEF2F2";return t.jsxs("div",{className:"result on",style:{"--c":qe,"--bgc":Ae},children:[t.jsx("span",{className:"vv",children:t.jsx("span",{className:"vp",children:ae?"✓ "+e.kept:oe?"⏳":"✗ "+e.dropped})}),P.name&&t.jsx("span",{className:"rn",children:P.name}),t.jsx("span",{className:"rr",children:P.reason?t.jsxs(t.Fragment,{children:[t.jsx("b",{children:e.why})," ",P.reason]}):null}),!oe&&t.jsx("button",{type:"button",className:"go",onClick:()=>l({type:"modal",modal:"space"}),children:e.seeSpace(ae?e.statusKeep.replace("✅ ",""):e.statusDrop.replace("❌ ",""))})]},J)}),f&&(i.kept+i.dropped>0||de.length>0)&&t.jsxs("div",{className:"tally",children:[t.jsx("span",{dangerouslySetInnerHTML:{__html:e.session(i.kept,i.dropped)}})," ","·"," ",t.jsx("a",{onClick:()=>l({type:"modal",modal:"space"}),children:e.seeMySpace})]})]})}function ms(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function xs(){const{st:e,dispatch:a,byId:r,t:n,doDeep:o}=q(),i=e.memoConsole?r.get(e.memoConsole):null,l=h.useMemo(()=>i?[i.reasoning||"",ms(i.summary||"")].filter(Boolean).join(`

`):"",[i]);if(!i)return null;const s=at(i),p=ya(i);return t.jsx("div",{className:"demand",style:{paddingTop:0},children:t.jsxs("div",{className:"memo",style:{marginTop:0},children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"nm",children:i.name}),s&&t.jsx("span",{className:"vv",children:s}),typeof i.score=="number"&&t.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[i.score,"/100"]}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),t.jsx("div",{className:"tabs2",children:t.jsx("button",{type:"button","aria-selected":"true",children:n.memoSynth})}),t.jsx("div",{className:"mb2",children:l?l.split(`

`).map((u,c)=>t.jsx("p",{style:{margin:"0 0 10px"},children:u},c)):t.jsx("p",{children:n.memoNone})}),t.jsxs("div",{className:"mf",children:[ja(i)?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"t",children:n.memoDeepHint}),t.jsx("button",{type:"button",className:"deep",onClick:()=>o(i),children:n.memoDeep})]}):t.jsx("span",{className:"t",children:p===2?n.critMemoKinds:""}),i.memoUrl&&t.jsx("a",{className:"go",href:i.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:n.memoOpenFull})]})]})})}function ar({name:e}){const{t:a,token:r,caps:n,mode:o,flashErr:i}=q(),[l,s]=h.useState(!1),[p,u]=h.useState(null);if(!n.pipe||o!=="client"||n.lockActions)return null;const c=async()=>{if(l)return;s(!0);const d=await Yr(r,e);if(s(!1),!d){i(a.actErr);return}u(d.results||[])};return t.jsxs("div",{className:"simb",onClick:d=>d.stopPropagation(),children:[t.jsx("button",{type:"button",className:"abtn",disabled:l,onClick:()=>{c()},children:l?a.similarBusy:a.similar}),p&&(p.length===0?t.jsx("p",{className:"mnote",children:a.similarNone}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"siml",children:p.map(d=>t.jsxs("li",{children:[t.jsx("b",{className:d.verdict==="kept"?"ok":"ko",children:d.company}),d.reason&&t.jsx("span",{children:d.reason})]},d.company))}),t.jsx("p",{className:"mnote dim",children:a.similarNote})]}))]})}function za({spec:e}){const a=h.useRef(null),r=h.useRef(null),[n,o]=h.useState(!1);return h.useEffect(()=>{const i=a.current;if(!i)return;let l=!1;return Ia({kind:"op",card:e},Math.max(240,i.clientWidth||320)).then(s=>{!l&&s&&i.isConnected&&i.replaceChildren(s)}),()=>{l=!0,i.replaceChildren()}},[e]),h.useEffect(()=>{if(!n)return;const i=r.current;if(!i)return;let l=!1;Ia({kind:"op",card:e},Math.min(1100,Math.floor(window.innerWidth*.92))).then(p=>{!l&&p&&i.isConnected&&i.replaceChildren(p)});const s=p=>{p.key==="Escape"&&o(!1)};return document.addEventListener("keydown",s),()=>{l=!0,document.removeEventListener("keydown",s)}},[n,e]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:a,title:"Agrandir",onClick:()=>o(!0),style:{marginTop:10,lineHeight:0,border:"1px solid #E2E8F0",borderRadius:8,overflow:"hidden",cursor:"zoom-in"}}),n&&tt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"atl2-lb",onClick:()=>o(!1),children:[t.jsx("div",{ref:r,style:{lineHeight:0}}),t.jsx("button",{type:"button",className:"atl2-lb-x","aria-label":"Fermer",onClick:()=>o(!1),children:"×"})]})}),document.body)]})}const hs=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function gs(e,a=!1){if(!e||typeof window>"u")return;const r=352,n=a?620:430,o=window.innerWidth,i=window.innerHeight,l=Math.min(Math.max(e.x-r/2,8),Math.max(8,o-r-8));let s=e.y+10;return s+n>i-8&&(s=Math.max(8,e.y-n-14)),s<8&&(s=8),{left:l,top:s}}function bs(){const{st:e,dispatch:a,byId:r,t:n,lang:o,caps:i,mode:l,askEvaluate:s,doAnalyse:p,doDecide:u,doPromote:c,doRepeche:d,doApproach:f,doDeep:v,doOnboard:x,outbound:b,evalBusy:g}=q(),m=e.popupId?r.get(e.popupId):null;if(!m)return null;const w=xe(m),N=ke(m),y=at(m),k=m.kind==="target",S=L=>{a({type:"filters",patch:L}),a({type:"popup",id:null})};return tt.createPortal(t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:hs}),t.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),t.jsxs("div",{className:"pop on "+(e.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:gs(e.popupAnchor,!!m.card),onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{className:"ph",children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h3",{children:m.name}),t.jsx("span",{className:"id",children:n.detected(n.daysAgo(et(m.date)),De(m.engine,o))})]}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),t.jsxs("div",{className:"pb",children:[t.jsxs("div",{className:"tags",children:[m.cc&&t.jsx("button",{type:"button",className:"hi",onClick:()=>S({country:[m.cc]}),children:(nt(m.cc,o)||m.countryLabel||"").toUpperCase()}),m.sector&&t.jsx("button",{type:"button",onClick:()=>S({sector:[m.sector]}),children:m.sector.toUpperCase()}),m.stage&&t.jsx("button",{type:"button",onClick:()=>S({stage:[m.stage]}),children:m.stage.toUpperCase()}),typeof m.amountEur=="number"&&m.amountEur>0&&t.jsx("span",{className:"am2",children:Dt(m.amountEur,o)})]}),(m.tagline||m.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:m.tagline||m.headline})]}),t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.how}),t.jsxs("p",{children:[Xe(m.engine)," ",t.jsx("b",{children:De(m.engine,o)})," — ",Wr(m.engine,o),m.noteTitle&&t.jsxs(t.Fragment,{children:[" · ",m.noteTitle]})]}),w?t.jsxs("p",{className:"psig",style:{marginTop:9},children:[t.jsx(rt,{o:m,lg:!0})," ",t.jsx(Bt,{o:m,src:!0}),t.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[n.signaledOn(Ln(w,o))," · ",n.win7(Rn(w,o))]})]}):t.jsx("p",{className:"pnos",style:{marginTop:5},children:n.noSignal})]}),m.card?t.jsx(za,{spec:m.card}):null,m.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:i.pipe&&N>=1?n.verdictCap:n.memo}),t.jsx("p",{className:"memo",children:m.reasoning})]}),i.pipe&&k&&y&&t.jsx("div",{className:"fld",children:t.jsxs("p",{style:{fontWeight:700},children:[y,typeof m.score=="number"&&m.score>0?" · "+n.score(m.score):""]})})]}),t.jsx(ar,{name:m.name}),t.jsxs("div",{className:"pf",children:[i.lockActions||l!=="client"&&i.pipe?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[t.jsx("span",{className:"fill"}),"🔒 ",n.lockbarCta]}):i.pipe?t.jsxs(t.Fragment,{children:[N===0&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:g,onClick:()=>s(m),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(m.name.length>22?m.name.slice(0,21)+"…":m.name)]}),N===1&&t.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{p(m),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actAnalyse]}),N===2&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{c(m),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actPromote]}),N===3&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{u(m,!0),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actYes]}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{u(m,!1),a({type:"popup",id:null})},children:n.actNo}),ja(m)&&t.jsx("button",{type:"button",className:"abtn",title:n.memoDeepHint,onClick:()=>{v(m),a({type:"popup",id:null})},children:n.memoDeep})]}),N===4&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{f(m),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actApproach]}),N===5&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{d(m),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actRepeche]}),m.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:m.id}),a({type:"popup",id:null})},children:"📄"}),b&&t.jsx("button",{type:"button",className:"abtn",title:n.actOnboardTitle,onClick:()=>{x(m),a({type:"popup",id:null})},children:"🚀"})]}):m.engine==="media"&&m.url&&i.showDemand?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{var L;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:m.url}}))}catch{}a({type:"popup",id:null}),(L=document.querySelector(".atl2 .demand"))==null||L.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rsOpen]}),t.jsx("button",{type:"button",className:"abtn",disabled:g,title:n.evalGoOn(m.name),onClick:()=>s(m),children:"⚡"})]}):t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:g,onClick:()=>s(m),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(m.name.length>22?m.name.slice(0,21)+"…":m.name)," →"]}),m.website&&t.jsx("a",{className:"psite",href:m.website.startsWith("http")?m.website:"https://"+m.website,target:"_blank",rel:"noopener noreferrer",title:m.website,children:"🌐"})]})]})]}),document.body)}const vs=new Set(["b","strong","i","em","u","br","p","ul","ol","li","h4","h5"]),zt=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function ys(e){const a=String(e||"");if(!a)return"";let r="",n=0;for(;n<a.length;){const o=a.indexOf("<",n);if(o<0){r+=zt(a.slice(n));break}r+=zt(a.slice(n,o));const i=a.indexOf(">",o);if(i<0){r+=zt(a.slice(o));break}const l=a.slice(o+1,i).trim(),s=/^(\/?)([a-zA-Z0-9]+)/.exec(l),p=s?s[2].toLowerCase():"";s&&vs.has(p)?r+=`<${s[1]}${p}>`:r+=zt(a.slice(o,i+1)),n=i+1}return r}const wn=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function he({k:e,v:a,href:r}){return a==null||a===""?null:t.jsxs("div",{className:"cdl",children:[t.jsx("span",{className:"cdk",children:e}),r?t.jsx("a",{className:"cdv",href:r,target:"_blank",rel:"noopener noreferrer",children:String(a)}):t.jsx("span",{className:"cdv",children:String(a)})]})}function ws({o:e}){const{t:a,lang:r,dispatch:n,caps:o}=q(),i=It(e),l=at(e),s=(e.cribleStatus||"").trim().toUpperCase()||(i==="NO MATCH"?"NO MATCH":i==="MATCH"?"MATCH":""),p=[e.sector,e.stage,e.countryLabel,e.city,e.website,e.domain,e.linkedinCompany,e.angle,e.date].filter(Boolean).length,u=[e.contactName,e.contactEmail,e.contactLinkedin].filter(Boolean).length,c=[e.ceoStatus,e.ceoNote,o.pipe?e.memoUrl:"",o.pipe?e.memoPdfUrl:""].filter(Boolean).length+(typeof e.engagement=="number"&&e.engagement>0?1:0),d=h.useMemo(()=>[{k:"conv",lib:a.cdConviction,n:(s?1:0)+(e.reasoning?1:0)+(l?1:0)},{k:"ana",lib:a.cdAnalyse,n:(e.summary?1:0)+(o.pipe&&!o.lockActions?1:0)},{k:"soc",lib:a.cdSociete,n:p},{k:"ctc",lib:a.cdContact,n:u},{k:"suivi",lib:a.cdSuivi,n:c}].filter(b=>b.n>0),[e,a,s,l,p,u,c]),[f,v]=h.useState("");if(!d.length)return null;const x=d.some(b=>b.k===f)?f:d[0].k;return t.jsxs("div",{className:"cdtabs",children:[t.jsx("div",{className:"cdnav",role:"tablist",children:d.map(b=>t.jsx("button",{type:"button",role:"tab","aria-selected":x===b.k,className:x===b.k?"on":"",onClick:g=>{g.stopPropagation(),v(b.k)},children:b.lib},b.k))}),t.jsxs("div",{className:"cdbody",onClick:b=>b.stopPropagation(),children:[x==="conv"&&t.jsxs(t.Fragment,{children:[s&&t.jsxs("div",{className:"cdv1"+(s==="NO MATCH"?" out":""),children:[t.jsx("b",{children:s==="NO MATCH"?a.vOut:a.vKept}),t.jsx("span",{className:"cdw",children:a.cdCrible})]}),e.reasoning&&t.jsx("p",{className:"cdtxt",children:e.reasoning}),l&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:l}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"cdgrid",children:[t.jsx(he,{k:a.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(he,{k:a.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(he,{k:a.cdVerdictDate,v:wn(e.verdictDate,r)})]})]}),x==="ana"&&t.jsxs(t.Fragment,{children:[e.summary&&t.jsx("div",{className:"cdrich",dangerouslySetInnerHTML:{__html:ys(e.summary)}}),o.pipe&&!o.lockActions&&t.jsx(ks,{o:e})]}),x==="soc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(he,{k:a.cdSector,v:e.sector}),t.jsx(he,{k:a.cdStage,v:e.stage}),t.jsx(he,{k:a.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(he,{k:a.cdSite,v:e.domain||e.website,href:e.website||void 0}),t.jsx(he,{k:a.cdLinkedin,v:e.linkedinCompany?"LinkedIn":"",href:e.linkedinCompany}),t.jsx(he,{k:a.cdAngle,v:e.angle}),t.jsx(he,{k:a.cdDetected,v:wn(e.date,r)})]}),x==="ctc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(he,{k:a.cdName,v:e.contactName}),t.jsx(he,{k:a.cdEmail,v:e.contactEmail,href:e.contactEmail?`mailto:${e.contactEmail}`:void 0}),t.jsx(he,{k:a.cdLinkedin,v:e.contactLinkedin?"LinkedIn":"",href:e.contactLinkedin})]}),x==="suivi"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"cdgrid",children:[t.jsx(he,{k:a.cdCeoStatus,v:e.ceoStatus}),t.jsx(he,{k:a.cdEngagement,v:typeof e.engagement=="number"&&e.engagement>0?e.engagement:""})]}),e.ceoNote&&t.jsxs("p",{className:"cdtxt",children:["💬 ",e.ceoNote]}),o.pipe&&(e.memoUrl||e.memoPdfUrl)&&t.jsxs("div",{className:"cdacts",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"abtn",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemo," →"]}),e.memoPdfUrl&&t.jsx("a",{className:"abtn",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"})]})]})]})]})}function ks({o:e}){const{t:a,token:r}=q(),[n,o]=h.useState(!1),[i,l]=h.useState(null),s=async()=>{n||(o(!0),l(await Gr(r,e.name,e.website||e.domain||"")),o(!1))},p=(i==null?void 0:i.blocs)||{},u=[[a.qaVP,p.value_prop],[a.qaProduct,p.produit],[a.qaModel,p.modele],[a.qaSummary,p.synthese]],c=u.some(([,d])=>d);return t.jsxs("div",{className:"qab",children:[!i&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mnote dim",children:a.qaHint}),t.jsx("button",{type:"button",className:"abtn",disabled:n,onClick:()=>{s()},children:n?a.qaBusy:a.qaRun})]}),i&&c&&t.jsxs(t.Fragment,{children:[u.filter(([,d])=>d).map(([d,f])=>t.jsxs("div",{className:"qal",children:[t.jsx("span",{className:"qak",children:d}),t.jsx("p",{children:f})]},d)),!!(i.pages||[]).length&&t.jsx("p",{className:"mnote dim",children:a.qaSources((i.pages||[]).length)})]}),i&&!c&&t.jsx("p",{className:"mnote warn",children:i.quota?a.qaQuota:a.qaEmpty})]})}const nr={"CALL PENDING":"call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function Aa({o:e}){const{t:a}=q(),r=It(e),n=at(e),o=ke(e),i=Zt(e),l=Kr(e);return t.jsxs("span",{className:"c-vd",children:[r?t.jsx("span",{className:"vd "+(r==="MATCH"?"v-ok":"v-no"),title:a.vt[r],children:r}):t.jsx("span",{className:"vd wait",children:a.actToEval}),n?t.jsx("span",{className:"vd "+(nr[n]||"v-cons"),title:a.vt[n],children:n}):o===1?t.jsx("span",{className:"vd wait",children:a.actMemoQueue}):null,o===3&&i==="auto"&&t.jsx("span",{className:"org au",title:a.orgAutoTitle,children:a.orgAuto}),o===3&&i==="cd"&&t.jsx("span",{className:"org cd",title:a.orgCdTitle,children:a.orgCd}),o===3&&l!==null&&t.jsx("span",{className:"wait2 "+(l>10?"hot":l>=5?"warm":""),title:a.waitTitle(l),children:a.waitChip(l)})]})}const ba=e=>e.length>22?e.slice(0,21)+"…":e;function Xt({o:e}){const{t:a,askEvaluate:r,evalBusy:n,lang:o}=q(),[i,l]=h.useState(!1);if(h.useEffect(()=>{n||l(!1)},[n]),Ne(e)){const u=(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("span",{className:"verdict",style:{"--c":u?"var(--brand)":"var(--red)"},title:e.reasoning||"",children:[u?"✓":"✗"," ",t.jsx("b",{children:u?a.kept:a.dropped}),typeof e.score=="number"&&e.score>0?" "+e.score:""]})}const p=i&&n;return t.jsxs("button",{type:"button",className:"rev"+(p?" loading":""),disabled:n,title:a.evalGoOn(e.name),onClick:u=>{u.stopPropagation(),l(!0),r(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(ba(e.name))})]})}function js({o:e}){const{t:a,caps:r,memoQueued:n,approachDone:o,doAnalyse:i,doDecide:l,doPromote:s,doRepeche:p,doApproach:u,dispatch:c}=q();if(r.lockActions)return t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"stbtn",style:{"--c":"var(--line2)","--tc":"var(--dim)"},onClick:v=>{v.stopPropagation(),c({type:"modal",modal:"rdv"})},children:[t.jsx("span",{className:"lk",children:"🔒"}),a.actLocked.replace("🔒 ","")]})});if(!r.pipe)return(e.engine==="media"||e.noCo)&&e.url?t.jsxs("span",{className:"cell cell-duo",children:[t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:v=>{var x;v.stopPropagation();try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:e.url}}))}catch{}(x=document.querySelector(".atl2 .demand"))==null||x.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]}),!e.noCo&&t.jsx(Xt,{o:e})]}):e.noCo?t.jsx("span",{className:"cell"}):t.jsx("span",{className:"cell",children:t.jsx(Xt,{o:e})});const d=ke(e),f=v=>x=>{x.stopPropagation(),v()};if(d===0)return t.jsx("span",{className:"cell",children:t.jsx(Xt,{o:e})});if(d===1){const v=n.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",disabled:v,onClick:f(()=>i(e)),children:v?a.actAnalyseQueued:a.actAnalyse})})}if(d===3)return t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:f(()=>l(e,!0)),children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:f(()=>l(e,!1)),children:a.actNo}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:f(()=>c({type:"memoConsole",id:e.id})),children:"📄"})]})});if(d===4){const v=o.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",disabled:v,onClick:f(()=>u(e)),children:v?a.actApproachSent:a.actApproach})})}return d===2?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:f(()=>s(e)),children:a.actPromote}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:f(()=>c({type:"memoConsole",id:e.id})),children:"📄"})]})}):d===5?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:f(()=>p(e)),children:a.actRepeche}),e.memoUrl&&t.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:f(()=>c({type:"memoConsole",id:e.id})),children:"📄"})]})}):t.jsx("span",{className:"cell",children:e.memoUrl?t.jsx("button",{type:"button",className:"memobtn read",onClick:f(()=>c({type:"memoConsole",id:e.id})),children:a.actMemo}):t.jsx("span",{className:"rc",children:"—"})})}function Ns({o:e}){const{t:a,doThumb:r,thumbOf:n}=q(),o=n(e);return t.jsxs("span",{className:"thu",children:[t.jsx("button",{type:"button",className:"tb up"+(o==="yes"?" on":""),title:a.thumbUp,onClick:i=>{i.stopPropagation(),r(e,!0)},children:"👍"}),t.jsx("button",{type:"button",className:"tb dn"+(o==="no"?" on":""),title:a.thumbDn,onClick:i=>{i.stopPropagation(),r(e,!1)},children:"👎"})]})}function Ss({o:e}){const{lang:a}=q();return xe(e)?t.jsxs("span",{className:"c-sig",children:[t.jsx(rt,{o:e}),t.jsx(Bt,{o:e,src:!0})]}):t.jsx("span",{className:"c-sig",children:t.jsxs("span",{className:"mo",children:[Xe(e.engine||"")," ",De(e.engine||"",a)]})})}function Cs({o:e,locked:a,open:r,onToggle:n}){const{st:o,dispatch:i,caps:l,markRow:s,markedId:p,favIds:u,toggleFav:c}=q(),d=ke(e),f=["#0F172A","#475C6E","#8798A8","#B9C6D2"],v=e.date?Math.max(0,Math.floor((Date.now()-Date.parse(e.date))/864e5)):9999,x=v<=0?0:v<=7?1:v<=30?2:3,b=l.pipe&&e.kind==="target"?["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"][d]:f[x],g=u.has(e.id),m=w=>{if(a)return;if(l.pipe||e.kind==="op"){n();return}const N=w.currentTarget.getBoundingClientRect();i({type:"popup",id:e.id,anchor:{x:N.left+Math.min(280,N.width/3),y:N.bottom}})};return t.jsxs(h.Fragment,{children:[t.jsxs("div",{className:"row"+(p===e.id||r?" on":"")+(r?" open":"")+(a?" locked":""),onMouseEnter:()=>s(e.id),onMouseLeave:()=>s(null),onClick:m,children:[t.jsx("span",{className:"pt",style:{"--c":b}}),t.jsx(cr,{o:e}),t.jsxs("span",{className:"nd",children:[t.jsxs("span",{className:"rnm",title:e.name,children:[l.pipe&&t.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:g?1:.35,padding:0,marginRight:4},onClick:w=>{w.stopPropagation(),c(e)},children:g?"★":"☆"}),e.name]}),t.jsx("span",{className:"rds",title:e.tagline||e.headline||"",children:[e.tagline,e.headline,e.reasoning].find(w=>w&&w!==e.name)||""}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial — cliquez pour déplier",children:"📖"})]}),t.jsx(Es,{o:e}),t.jsx("span",{className:"c-stade",children:e.stage||""}),t.jsx(Ss,{o:e}),l.pipe&&t.jsx(Aa,{o:e}),l.pipe&&t.jsxs("span",{className:"c-sc",children:[typeof e.score=="number"?e.score:"",typeof e.score=="number"&&t.jsx("s",{children:"/100"})]}),t.jsx(js,{o:e}),l.showThumbs&&t.jsx(Ns,{o:e})]}),(r||o.dens==="deplie")&&!a&&t.jsx(As,{o:e})]})}function Es({o:e}){const{lang:a,caps:r}=q();if(r.pipe&&e.kind==="target")return t.jsx("span",{className:"c-amt none",children:"—"});const n=Dt(e.amountEur,a);return t.jsx("span",{className:"c-amt"+(n?"":" none"),children:n||"—"})}function zs({o:e}){const{t:a,lang:r,askEvaluate:n,evalBusy:o}=q(),i=(()=>{const c=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return c?c[1].slice(0,40):""})(),l=Dt(e.amountEur,r),s=(e.date||"").slice(0,10).split("-").reverse().join("/"),p=Ne(e),u=p&&(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("div",{className:"card ops-open",children:[t.jsxs("div",{className:"oc-main",children:[e.decryptHtml?t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}):t.jsx("p",{className:"oc-head",children:e.headline||e.tagline||e.name}),t.jsxs("div",{className:"oc-meta",children:[e.sector&&t.jsx("span",{children:e.sector}),e.countryLabel&&e.countryLabel!=="Europe"&&t.jsx("span",{children:e.countryLabel}),e.stage&&t.jsx("span",{children:e.stage}),l&&t.jsx("span",{className:"oc-amt",children:l}),s&&t.jsx("span",{children:s})]}),t.jsxs("div",{className:"oc-acts",children:[p?t.jsxs("span",{className:"verdict",style:{"--c":u?"var(--brand)":"var(--red)"},children:[u?"✓":"✗"," ",t.jsx("b",{children:u?a.kept:a.dropped})]}):e.noCo||e.engine==="media"&&e.url?t.jsxs(t.Fragment,{children:[e.url&&t.jsx("button",{type:"button",className:"oc-cta",onClick:c=>{var d;c.stopPropagation();try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:e.url}}))}catch{}(d=document.querySelector(".atl2 .demand"))==null||d.scrollIntoView({behavior:"smooth",block:"center"})},children:a.rowExtract}),!e.noCo&&t.jsx("button",{type:"button",className:"oc-ghost",disabled:o,onClick:c=>{c.stopPropagation(),n(e)},children:a.evalGoOn(ba(e.name))})]}):t.jsx("button",{type:"button",className:"oc-cta",disabled:o,onClick:c=>{c.stopPropagation(),n(e)},children:a.evalGoOn(ba(e.name))}),e.url&&t.jsxs("a",{className:"oc-src",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:c=>c.stopPropagation(),children:[(r==="fr"?"lire la source":"read the source")+(i?` · ${i}`:"")," ↗"]})]})]}),e.card&&t.jsx("div",{className:"oc-side",children:t.jsx(za,{spec:e.card})})]})}function As({o:e}){const{t:a,lang:r,dispatch:n,caps:o,outbound:i,doOnboard:l}=q();return!o.pipe&&e.kind==="op"?t.jsx(zs,{o:e}):t.jsxs("div",{className:"card",style:{display:"grid"},children:[t.jsxs("div",{children:[e.tagline&&t.jsx("p",{className:"lead",children:e.tagline}),e.decryptHtml&&t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsx(ws,{o:e}),t.jsx(ei,{o:e}),t.jsx(ni,{o:e}),t.jsx(ar,{name:e.name}),t.jsxs("div",{className:"tg",children:[e.sector&&t.jsx("span",{children:e.sector}),e.stage&&t.jsx("span",{children:e.stage}),e.countryLabel&&t.jsx("span",{children:e.countryLabel}),e.city&&t.jsx("span",{children:e.city})]})]}),t.jsxs("div",{className:"cside",children:[t.jsxs("div",{className:"top",children:[typeof e.score=="number"&&t.jsx("span",{className:"sc3",children:e.score}),t.jsx("span",{className:"vv",children:t.jsx(Aa,{o:e})})]}),e.card&&t.jsx(za,{spec:e.card}),t.jsxs("div",{className:"sec2",children:[t.jsxs("div",{className:"k2",children:[Xe(e.engine||"")," ",De(e.engine||"",r)]}),xe(e)&&t.jsx("div",{style:{marginTop:8},children:t.jsx(rt,{o:e})})]}),o.pipe&&(e.memoUrl||i)&&t.jsxs("div",{className:"sec2 acts2",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"btn p",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemo," →"]}),i&&t.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>l(e),children:a.actOnboard})]})]})]})}function Ts({o:e,locked:a}){const{t:r,dispatch:n,caps:o,doDecide:i}=q(),l=ke(e),s=["#E7EBF0","#E7F3EC","#C4E0D0","#7FC0A0","#0E8A4F","#DC2626"][l];return t.jsxs("div",{className:"dcard"+(a?" locked":""),style:{"--c":s},children:[t.jsxs("div",{className:"dh",children:[typeof e.score=="number"&&t.jsx("span",{className:"dsc",children:e.score}),t.jsx("span",{className:"dnm",title:e.name,children:e.name})]}),t.jsxs("div",{className:"dv",children:[t.jsx(Aa,{o:e}),xe(e)&&t.jsx(rt,{o:e})]}),t.jsx("div",{className:"dmeta",children:[e.countryLabel,e.stage,e.sector].filter(Boolean).join(" · ").toUpperCase()}),(e.tagline||e.reasoning)&&t.jsx("div",{className:"ddesc",children:e.tagline||e.reasoning}),!a&&o.pipe&&l===3&&t.jsxs("div",{className:"dyn",children:[t.jsx("button",{type:"button",style:{"--c3":"#0A6B3D"},onClick:()=>i(e,!0),children:r.actYes}),t.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>i(e,!1),children:r.actNo})]}),!a&&e.memoUrl&&t.jsxs("button",{type:"button",className:"dmemo",onClick:()=>n({type:"memoConsole",id:e.id}),children:[r.actMemo," →"]})]})}function Ls(){const e=q(),{st:a,dispatch:r,t:n,caps:o,scoped:i,lang:l,sessTally:s,data:p,dossiers:u,source:c}=e,d=c==="ops"?8:On,[f,v]=h.useState(new Set);h.useEffect(()=>{v(new Set)},[a.ptab,a.continent]);const x=E=>v(j=>{const A=new Set(j);return A.has(E)?A.delete(E):A.add(E),A}),b=h.useMemo(()=>Sa(i,a.sort),[i,a.sort]),g=h.useMemo(()=>b.filter(E=>xe(E)&&!Ne(E)).length,[b]),m=h.useMemo(()=>o.pipe?b:b.filter(E=>!Ne(E)&&!E.noCo),[b,o.pipe]),w=c==="ops"?b.filter(E=>E.noCo).length:0,N=o.pipe?n.plabels[a.ptab].toLowerCase():c==="ops"?n.edLabel:a.filters.status==="retenu"?n.keptByStan:a.filters.status==="ecarte"?n.droppedByStan:n.toSend,y=(E,j,A="",T=!1)=>t.jsxs("button",{type:"button","data-s":E,className:A,"aria-sort":a.sort.key===E?a.sort.dir===1?"ascending":"descending":"none",style:T?{justifyContent:"flex-end"}:void 0,onClick:()=>r({type:"sort",key:E}),children:[j,t.jsx("span",{className:"ar",children:a.sort.key===E&&a.sort.dir===1?"▴":"▾"})]},E),k=h.useMemo(()=>{if(o.pipe||a.groupBy==="none")return null;const E=new Map;b.forEach(T=>{const O=T.engine||"?";E.has(O)||E.set(O,[]),E.get(O).push(T)});const j={ma:0,fundraising:1,nominations:2,recrutements:3,media:4},A=ea([...E.keys()],l);return[...E.entries()].sort((T,O)=>{const R=j[T[0]]??10+A.indexOf(T[0]),z=j[O[0]]??10+A.indexOf(O[0]);return R-z})},[b,o.pipe,a.groupBy,l]),S=o.lockRowsAfter;let L=0;const F=(E,j)=>{const A=a.shown[j]||d,O=E.slice(0,A).map(R=>{const z=S!==null&&L>=S;return L++,a.dens==="maxi"?t.jsx(Ts,{o:R,locked:z},R.id):t.jsx(Cs,{o:R,locked:z,open:f.has(R.id),onToggle:()=>x(R.id)},R.id)});if(E.length>A&&c!=="ops"){const R=Math.min(d,E.length-A),z=E.length-A;O.push(t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>r({type:"more",group:j,by:d,base:d}),children:[t.jsx("span",{className:"more-label",children:n.more(R,z)}),t.jsxs("span",{className:"more-meta",children:[n.moreMeta(A,E.length)," · ",z," ",l==="en"?"remaining":z>1?"restantes":"restante"]})]},j+":more"))}return O};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"listhead",children:[t.jsxs("span",{className:"main",children:[t.jsx("b",{children:b.length})," ",N]}),t.jsx("span",{className:"dot",children:"·"}),t.jsxs("span",{className:"ctx",children:[e.contName,o.pipe&&e.fund?" · "+e.fund:"",c==="ops"&&b.length>0&&" — "+n.edSplit(b.length-w,w)]}),o.showGroupBar&&t.jsxs("span",{className:"groupbar",children:[t.jsx("span",{className:"gl",children:n.groupBy}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>r({type:"groupBy",groupBy:"engine"}),children:n.groupEngine}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>r({type:"groupBy",groupBy:"none"}),children:n.groupNone})]}),a.pileMode&&t.jsx("button",{type:"button",className:"exitpile",onClick:()=>r({type:"pile",on:!1}),children:n.exitPile}),(o.showFunnel||c==="ops")&&t.jsx("span",{className:"dens",children:[["liste",n.densList],["deplie",n.densOpen],["maxi",n.densMaxi]].map(([E,j])=>t.jsxs("button",{type:"button","data-d":E,"aria-pressed":a.dens===E,onClick:()=>r({type:"dens",dens:E}),children:[t.jsx("i",{children:t.jsx("em",{})}),t.jsx("b",{children:j})]},E))}),o.showChain&&m.length>0&&t.jsxs("button",{type:"button",className:"chain",onClick:()=>r({type:"chainStart",queue:m.map(E=>E.id)}),children:[t.jsx("span",{className:"b",children:"▶"})," ",o.pipe?n.browse(m.length):n.chainAll(m.length)]})]}),g>0&&!a.filters.signalOnly&&t.jsxs("div",{className:"sigstrip",children:[t.jsx("span",{className:"t",dangerouslySetInnerHTML:{__html:n.sigStrip(g)}}),t.jsx("span",{className:"s",children:n.sigStripSub}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{signalOnly:!0,signalEngines:[]}}),children:n.sigStripGo})]}),a.dens!=="maxi"&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),y("country",n.colCountry),y("name",n.colCompany),y("amount",n.colAmount,"h-amt",!0),y("stage",n.colStage,"h-stade"),y("signal",n.colSignal,"h-sig"),o.pipe&&t.jsx("span",{className:"h-vd",children:n.colVerdict}),o.pipe&&y("score",n.colScore,"h-sc",!0),t.jsx("span",{}),o.showThumbs&&t.jsx("span",{className:"h-thu",children:n.colThumbs})]}),t.jsxs("div",{className:"list"+(a.dens!=="liste"?" "+a.dens:""),children:[k?k.map(([E,j])=>t.jsxs(h.Fragment,{children:[t.jsxs("div",{className:"grp-h",children:[t.jsx("span",{className:"ic",children:Xe(E)}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:De(E,l)}),t.jsx("div",{className:"s",children:n.grpCount(j.filter(A=>!Ne(A)).length,j.length)})]})]}),F(j,E)]},E)):F(b,"pt"+a.ptab),!b.length&&!(p.loading&&!u.length)&&t.jsx("div",{className:"void",children:o.pipe?n.emptyTab:n.emptyScope})]}),c==="ops"&&k&&(()=>{let E=0,j=0;for(const[T,O]of k)j+=O.length,E+=Math.min(O.length,a.shown[T]||d);const A=j-E;return A<=0?null:t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>k.forEach(([T,O])=>r({type:"more",group:T,by:O.length,base:d})),children:[t.jsx("span",{className:"more-label",children:n.more(A,A)}),t.jsx("span",{className:"more-meta",children:n.moreMeta(E,j)})]})})(),o.showThumbs&&t.jsxs("p",{className:"learn",children:[n.learnLine,t.jsx("button",{type:"button",onClick:()=>r({type:"modal",modal:"crit"}),children:n.learnLink})]}),(s.kept>0||s.dropped>0)&&t.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:n.session(s.kept,s.dropped)}})]})}function kn(e){let a=e==null?"":String(e);return/^[=+\-@\t]/.test(a)&&(a=`'${a}`),/[";\n\r]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}function Rs(e,a){const r=Qr(e);return a[{retenu:1,ana:2,pending:3,valide:4,ecarte:5}[r]??1]||""}function Ms(e,a){const n=[a.head.split("|").map(kn).join(";")];for(const o of e){const i=a.stageOf(o);n.push([o.name||"",Rs(o,a.plabels),It(o)||o.verdict||"",typeof o.score=="number"?o.score:"",o.countryLabel||o.cc||"",o.sector||"",i?a.stageLabel(i.stage):"",o.contactName||"",o.contactEmail||"",o.memoUrl||"",(o.date||"").slice(0,10),(o.reasoning||"").replace(/\s+/g," ").trim().slice(0,280)].map(kn).join(";"))}return`\uFEFF${n.join(`\r
`)}`}function Os(e){const a=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=`cibles_vue_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(n),n.click(),window.setTimeout(()=>{URL.revokeObjectURL(r);try{document.body.removeChild(n)}catch{}},400)}const qs=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function Te({k:e,v:a}){return a==null||a===""?null:t.jsxs("div",{className:"dsl",children:[t.jsx("span",{children:e}),t.jsx("b",{children:String(a)})]})}function Fs({o:e,qa:a}){const{t:r,lang:n,fund:o}=q(),i=(e.cribleStatus||"").trim().toUpperCase()||(It(e)==="NO MATCH"?"NO MATCH":"MATCH"),l=at(e),s=(a==null?void 0:a.blocs)||{},p=[[r.qaVP,s.value_prop],[r.qaProduct,s.produit],[r.qaModel,s.modele],[r.qaSummary,s.synthese]];return t.jsxs("article",{className:"dspage",children:[t.jsxs("header",{className:"dsh",children:[t.jsxs("div",{children:[t.jsx("b",{children:e.name}),e.tagline&&t.jsx("p",{children:e.tagline})]}),t.jsxs("span",{className:"dsv"+(i==="NO MATCH"?" out":""),children:[i==="NO MATCH"?r.vOut:r.vKept,l&&t.jsx("em",{children:l})]})]}),e.reasoning&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsWhy}),t.jsx("p",{className:"dstxt",children:e.reasoning})]}),t.jsxs("section",{className:"dsgrid",children:[t.jsx(Te,{k:r.cdSector,v:e.sector}),t.jsx(Te,{k:r.cdStage,v:e.stage}),t.jsx(Te,{k:r.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(Te,{k:r.cdSite,v:e.domain||e.website}),t.jsx(Te,{k:r.cdName,v:e.contactName}),t.jsx(Te,{k:r.cdEmail,v:e.contactEmail}),t.jsx(Te,{k:r.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(Te,{k:r.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(Te,{k:r.cdAngle,v:e.angle}),t.jsx(Te,{k:r.cdDetected,v:qs(e.date,n)})]}),p.some(([,u])=>u)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsAnalysis}),p.filter(([,u])=>u).map(([u,c])=>t.jsxs("div",{className:"dsb",children:[t.jsx("span",{children:u}),t.jsx("p",{children:c})]},u))]}),(e.ceoStatus||e.ceoNote)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsDecision}),e.ceoStatus&&t.jsx("p",{className:"dstxt",children:t.jsx("b",{children:e.ceoStatus})}),e.ceoNote&&t.jsxs("p",{className:"dstxt",children:["« ",e.ceoNote," »"]})]}),t.jsx("footer",{className:"dsf",children:r.dsFoot(o)})]})}function Ps(){const{t:e,lang:a,token:r,scoped:n,fund:o,data:i,dispatch:l}=q(),[s,p]=h.useState({}),u=25,c=h.useMemo(()=>n.slice(0,u),[n]);h.useEffect(()=>{c.length&&Xr(r,c.map(v=>v.name)).then(p)},[r,c]);const d=i.stats,f=v=>v.toLocaleString(a==="en"?"en-US":"fr-FR");return t.jsxs("div",{className:"dossier",children:[t.jsxs("div",{className:"dsbar",children:[t.jsx("b",{children:e.dsTitle(c.length)}),n.length>u&&t.jsx("span",{className:"mnote dim",children:e.dsCap(u,n.length)}),t.jsx("span",{className:"dssp"}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{l({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)},children:e.printBtn})]}),t.jsxs("div",{className:"dscover",children:[t.jsx("b",{children:o}),d&&typeof d.screened=="number"&&t.jsxs("p",{children:[f(d.screened)," ",e.funScreened(""),typeof d.kept=="number"&&t.jsxs(t.Fragment,{children:[" · ",f(d.kept)," ",e.covKept]}),typeof i.marketEstimate=="number"&&i.marketEstimate>0&&t.jsxs(t.Fragment,{children:[" · ",e.covOf(f(i.marketEstimate)),", ",Math.round(d.screened/i.marketEstimate*100)," %"]})]})]}),c.map(v=>t.jsx(Fs,{o:v,qa:s[v.name]},v.id)),!c.length&&t.jsx("p",{className:"mnote",children:e.dsEmpty})]})}const Ds=50;function Ta({label:e,onPreview:a,onTest:r,readOnly:n}){const{t:o}=q(),[i,l]=h.useState(null),[s,p]=h.useState(!1),[u,c]=h.useState(""),[d,f]=h.useState(0),[v,x]=h.useState(""),[b,g]=h.useState(!1),m=h.useRef(null);h.useEffect(()=>()=>{m.current&&window.clearInterval(m.current)},[]);const w=async y=>{p(!0),c("");const k=await a();if(p(!1),k.ok){l(k);return}if(k.busy){c(o.alertPreviewBusy);return}if(!y){c(o.alertPreviewFail);return}f(Ds),m.current=window.setInterval(()=>{f(S=>S>1?S-1:(m.current&&window.clearInterval(m.current),w(!1),0))},1e3)},N=async()=>{if(n||b)return;g(!0),x("");const y=await r();g(!1),x(y.ok?o.alertTestOk(y.sentTo||""):y.error||o.actErr)};return t.jsxs("div",{className:"mailp",children:[t.jsxs("div",{className:"mailp-row",children:[t.jsx("button",{type:"button",className:"abtn",disabled:s||d>0,onClick:()=>{w(!0)},children:s?"…":e}),t.jsx("button",{type:"button",className:"abtn",disabled:n||b,onClick:()=>{N()},children:b?"…":o.alertTest})]}),d>0&&t.jsx("p",{className:"mnote",children:o.alertPreviewRetry(d)}),u&&t.jsx("p",{className:"mnote warn",children:u}),v&&t.jsx("p",{className:"mnote",children:v}),!v&&t.jsx("p",{className:"mnote dim",children:o.alertTestHint}),(i==null?void 0:i.ok)&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mnote",children:[t.jsx("b",{children:o.alertSubject})," ",i.subject]}),i.pending===0&&t.jsx("p",{className:"mnote warn",children:o.alertPreviewEmpty}),t.jsx("iframe",{className:"mailp-frame",sandbox:"",srcDoc:i.html,title:e})]})]})}const ut="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function we({title:e,icon:a,children:r,wide:n}){const{dispatch:o}=q();return tt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:i=>{i.target===i.currentTarget&&o({type:"modal",modal:null})},children:t.jsxs("div",{className:"mcard",style:n?{width:"min(760px,100%)"}:void 0,children:[t.jsxs("div",{className:"mh",children:[a&&t.jsx("span",{className:"no g",children:a}),t.jsx("h2",{children:e}),t.jsx("button",{type:"button",className:"x",onClick:()=>o({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"mb",children:r})]})})}),document.body)}function Is(){const{st:e}=q();switch(e.modal){case"chain":return t.jsx($s,{});case"space":return t.jsx(_s,{});case"alert":return t.jsx(Us,{});case"queue":return t.jsx(Gs,{});case"export":return t.jsx(Ks,{});case"plug":return t.jsx(Js,{});case"recharge":return t.jsx(el,{});case"cover":return t.jsx(al,{});case"dossier":return t.jsx(tl,{});case"crit":return t.jsx(nl,{});case"tuto":return t.jsx(rl,{});case"rdv":return t.jsx(Bs,{});case"memoalert":return t.jsx(Qs,{});default:return null}}function Bs(){const{dispatch:e,fund:a}=q(),r=typeof document<"u"&&!!document.getElementById("rdv");return h.useEffect(()=>{r&&(e({type:"modal",modal:null}),Yo())},[r,e]),r?null:t.jsx(eo,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0,onClose:()=>e({type:"modal",modal:null})})}function $s(){const{st:e,dispatch:a,byId:r,t:n,lang:o,mode:i,askEvaluate:l,evalBusy:s}=q(),p=i==="client",u=e.chain.queue.map(v=>r.get(v)).filter(v=>!!v),c=e.chain.idx,d=u[c],f=c>=u.length;return tt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",children:t.jsxs("div",{className:"fcard",children:[t.jsxs("div",{className:"fh",children:[t.jsx("span",{className:"c",children:f?n.finished:`${c+1} / ${u.length}`}),t.jsx("span",{className:"p",children:t.jsx("i",{style:{width:(f?100:c/Math.max(1,u.length)*100)+"%"}})}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"fb",children:f||!d?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🏁"}),t.jsx("div",{className:"t",children:n.chainDone}),t.jsx("div",{className:"s",children:n.chainDoneSub(u.length)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:d.name}),t.jsx("div",{className:"sub",children:[nt(d.cc,o)||d.countryLabel,d.sector,d.stage,n.daysAgo(et(d.date))].filter(Boolean).map(v=>String(v).toUpperCase()).join(" · ")}),t.jsxs("div",{className:"tags",children:[t.jsx("span",{className:"hi",children:De(d.engine,o).toUpperCase()}),typeof d.amountEur=="number"&&d.amountEur>0&&t.jsx("span",{children:Dt(d.amountEur,o)})]}),xe(d)&&t.jsxs("div",{style:{marginBottom:12},children:[t.jsx(rt,{o:d,lg:!0})," ",t.jsx(Bt,{o:d,src:!0})]}),(d.tagline||d.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:d.tagline||d.headline})]}),d.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.memo}),t.jsx("p",{className:"memo",children:d.reasoning})]}),p&&Ne(d)&&t.jsxs("div",{className:"vbox",style:{"--c":He(d)==="retenu"?"var(--brand)":He(d)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[t.jsx("span",{className:"vt",children:He(d)==="retenu"?"✓ "+n.kept:He(d)==="pending"?"📞 "+n.pending:"✗ "+n.dropped}),t.jsx("span",{className:"vd",children:d.reasoning||""})]})]})}),t.jsxs("div",{className:"ff",children:[!f&&d&&!(p&&Ne(d))&&t.jsxs("button",{type:"button",className:"evalbtn"+(s?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:s,onClick:()=>{l(d)},children:[t.jsx("span",{className:"fill"}),n.launchEval]}),t.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(f?{type:"modal",modal:null}:{type:"chainNext"}),children:f?n.closeBtn:n.skip})]})]})})}),document.body)}function _s(){const{st:e,dispatch:a,dossiers:r,t:n,mode:o}=q(),i=o==="client",l=h.useMemo(()=>i?r.filter(d=>Ne(d)):[],[r,i]),s=h.useMemo(()=>Sa(l.filter(d=>He(d)==="retenu"),{key:"signal",dir:-1}),[l]),p=h.useMemo(()=>l.filter(d=>He(d)==="ecarte"),[l]),u=e.spaceTab==="retenu"?s:p,c=e.spaceTab==="retenu"?"var(--brand)":"var(--red)";return t.jsxs(we,{title:n.spaceTitle,children:[t.jsxs("div",{className:"sp-tabs",children:[t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":e.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",n.statusKeep.replace("✅ ","")," ",t.jsx("b",{children:s.length})]}),t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":e.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",n.statusDrop.replace("❌ ","")," ",t.jsx("b",{children:p.length})]})]}),u.length===0&&t.jsx("div",{className:"sp-empty",children:n.spEmpty}),u.slice(0,40).map(d=>t.jsxs("div",{className:"sp-row",children:[t.jsx("span",{className:"sc",style:{"--c":c},children:typeof d.score=="number"&&d.score>0?d.score:"—"}),t.jsxs("span",{children:[t.jsx("div",{className:"nm",children:d.name}),t.jsx("div",{className:"rr",children:d.reasoning||d.tagline||""})]})]},d.id)),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:n.spNote}})]})}function Us(){const{mode:e}=q();return e==="client"||e==="apercu"?t.jsx(Vs,{}):t.jsx(Ws,{})}function Vs(){const{t:e,token:a,flash:r,flashErr:n,mode:o}=q(),[i,l]=h.useState("d"),s=o!=="client";return t.jsxs(we,{title:e.alertTitle,icon:"🔔",children:[t.jsxs("div",{className:"ntabs",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":i==="d",className:i==="d"?"on":"",onClick:()=>l("d"),children:e.alertTabDaily}),t.jsx("button",{type:"button",role:"tab","aria-selected":i==="w",className:i==="w"?"on":"",onClick:()=>l("w"),children:e.alertTabWeekly}),t.jsx("button",{type:"button",role:"tab","aria-selected":i==="m",className:i==="m"?"on":"",onClick:()=>l("m"),children:e.alertTabMarket})]}),i==="d"&&t.jsx(Hs,{t:e,token:a,readOnly:s,flash:r,flashErr:n}),i==="w"&&t.jsx(Ys,{t:e,token:a,readOnly:s,flash:r,flashErr:n}),i==="m"&&t.jsx(rr,{})]})}function Hs({t:e,token:a,readOnly:r,flash:n,flashErr:o}){const[i,l]=h.useState(null),[s,p]=h.useState(!1),[u,c]=h.useState(0);h.useEffect(()=>{let x=!0;return p(!1),_a(a).then(b=>{x&&(b?l(b):p(!0))}),()=>{x=!1}},[a,u]);const d=x=>{r||_a(a,x).then(b=>{if(!b){o(e.actErr);return}l(b),b.throttled?o(e.alertThrottled):n(e.alertSaved)})};if(s)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>c(x=>x+1),children:e.retry})]});if(!i)return t.jsx("div",{className:"sp-empty",children:"…"});const f=x=>!i.sections||i.sections.includes(x),v=x=>{const b=i.sections||e.alertSec.map(([g])=>g);d({sections:f(x)?b.filter(g=>g!==x):[...b,x]})};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qrow",children:[t.jsxs("span",{children:[t.jsx("b",{children:e.alertDaily}),t.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:e.alertDailyHint})]}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":i.enabled===!0,disabled:r,style:i.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>d({enabled:!i.enabled}),children:i.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertHour}),t.jsxs("span",{className:"qset",children:[t.jsx("button",{type:"button",onClick:()=>d({hour:Math.max(6,(i.hour??7)-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[i.hour??7," h"]}),t.jsx("button",{type:"button",onClick:()=>d({hour:Math.min(21,(i.hour??7)+1)}),disabled:r,children:"＋"})]})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertDays}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("button",{type:"button",className:"abtn",disabled:r,style:i.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>d({days:"weekdays"}),children:e.alertWeekdays}),t.jsx("button",{type:"button",className:"abtn",disabled:r,style:i.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>d({days:"daily"}),children:e.alertEveryday})]})]}),t.jsx("div",{className:"qsec ok",children:e.alertSections}),t.jsx("div",{className:"secl",children:e.alertSec.map(([x,b])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:f(x),disabled:r,onChange:()=>v(x)}),t.jsxs("span",{children:[b,x==="market"&&t.jsxs("i",{children:[" ",e.alertSecSlow]})]})]},x))}),t.jsx("p",{className:"mnote dim",children:e.alertSecNote}),t.jsx(Ta,{label:e.alertPreview,readOnly:r,onPreview:()=>so(a),onTest:()=>io(a)}),i.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),i.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",i.email_lead,i.last_sent?` · ${e.updatedAt(i.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function Ys({t:e,token:a,readOnly:r,flash:n,flashErr:o}){const[i,l]=h.useState(null),[s,p]=h.useState(!1),[u,c]=h.useState(0);h.useEffect(()=>{let x=!0;return p(!1),Ua(a).then(b=>{x&&(b?l(b):p(!0))}),()=>{x=!1}},[a,u]);const d=x=>{r||Ua(a,x).then(b=>{if(!b){o(e.actErr);return}l(b),n(e.alertSaved)})};if(s)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>c(x=>x+1),children:e.retry})]});if(!i)return t.jsx("div",{className:"sp-empty",children:"…"});const f=i.dow??0,v=i.hour??16;return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"lead2",children:e.alertWeeklySub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.alertWeeklyOn})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":i.enabled===!0,disabled:r,style:i.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>d({enabled:!i.enabled}),children:i.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertWeeklyWhen}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("select",{value:f,disabled:r,onChange:x=>d({dow:Number(x.target.value)}),children:e.alertDow.map((x,b)=>t.jsx("option",{value:b,children:x},x))}),t.jsx("button",{type:"button",onClick:()=>d({hour:Math.max(6,v-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[v," h"]}),t.jsx("button",{type:"button",onClick:()=>d({hour:Math.min(21,v+1)}),disabled:r,children:"＋"})]})]}),t.jsx(Ta,{label:e.alertPreviewWeekly,readOnly:r,onPreview:()=>co(a),onTest:()=>lo(a)}),i.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),i.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",i.email_lead,i.last_sent?` · ${e.updatedAt(i.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function rr(){const{st:e,t:a,lang:r,scoped:n,contName:o,email:i}=q(),[l,s]=h.useState(i||""),[p,u]=h.useState(!1),[c,d]=h.useState(!1);h.useEffect(()=>{i&&s(i)},[i]);const f=e.filters,v=h.useMemo(()=>n.filter(m=>xe(m)).length,[n]),x=f.win==="1"?0:f.win==="7"?1:f.win==="30"?2:3,b=async()=>{if(!(!/.+@.+\..+/.test(l)||c)){d(!0);try{await fetch(`${va}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.trim(),sectors:f.sector,countries:f.country,source:i?"atelier2-client":"atelier2",website:""})}),u(!0)}finally{d(!1)}}},g=[[a.amRows.continent,o],[a.amRows.since,a.amSince[x]],[a.amRows.signal,f.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,f.engine.length?f.engine.map(m=>De(m,r)).join(", "):a.amAllEngines],[a.amRows.sectors,f.sector.length?f.sector.join(", "):a.amAllSectors],[a.amRows.countries,f.country.length?f.country.map(m=>nt(m,r)||m).join(", "):a.amAllCountries],[a.amRows.stages,f.stage.length?f.stage.join(", "):a.amAllStages]];return p?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🔔"}),t.jsx("div",{className:"t",children:a.amOk}),t.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(l)}})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"crit",children:g.map(([m,w])=>t.jsxs("div",{className:"r",children:[t.jsx("span",{className:"k",children:m}),t.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:w}})]},m))}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:l,readOnly:!!i,onChange:m=>s(m.target.value),onKeyDown:m=>{m.key==="Enter"&&b()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(c?" loading":""),style:{padding:"12px 18px"},onClick:()=>void b(),children:[t.jsx("span",{className:"fill"}),a.amActivate]})]}),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(n.length,v)}}),t.jsx("p",{className:"mnote",children:a.amHonest})]})}function Ws(){const{t:e}=q();return t.jsx(we,{title:e.alertTitle,icon:"🔔",children:t.jsx(rr,{})})}function Gs(){var b,g,m;const{t:e,token:a,fund:r,mode:n,flash:o}=q(),[i,l]=h.useState(null),[s,p]=h.useState([]),[u,c]=h.useState(0),d=n==="client";h.useEffect(()=>{let w=!0;return(async()=>{const[N,y]=await Promise.all([wa(r),zn(a)]);w&&(N&&l(N),p(y))})(),()=>{w=!1}},[a,r,u]);const f=(i==null?void 0:i.per_day)??2,v=((b=i==null?void 0:i.analyzed_today)==null?void 0:b.length)??0,x=(g=i==null?void 0:i.tomorrow)!=null&&g.length?i.tomorrow:((i==null?void 0:i.pool_meta)||[]).slice(0,10);return t.jsxs(we,{title:e.queueTitle,wide:!0,children:[t.jsxs("div",{className:"qbox",children:[t.jsx("div",{className:"qhead",children:t.jsx("b",{dangerouslySetInnerHTML:{__html:e.queueDone(v,v+(((m=i==null?void 0:i.pool_order)==null?void 0:m.length)??0))}})}),t.jsxs("div",{className:"qrate",children:[e.covRate," — ",t.jsx("b",{children:e.covRateNow(f)})]})]}),s.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec ok",children:["⏳ ",e.queueToday]}),t.jsx("div",{className:"qrows",children:s.map(w=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:w.company}),t.jsxs("span",{className:"qd",children:[w.memo_type,typeof w.est_min=="number"?` · ~${w.est_min} min`:""]}),t.jsx("span",{className:"qt",children:w.status}),w.url&&t.jsx("a",{className:"qgo",href:w.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.actMemo}),d&&w.status==="error"&&t.jsx("button",{type:"button",className:"qgo an",onClick:()=>{$a(a,w.company,"retry").then(()=>c(N=>N+1))},children:e.queueRetry}),d&&w.status!=="done"&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{$a(a,w.company,"delete").then(()=>c(N=>N+1))},children:e.queueDelete})]},w.company))})]}),t.jsxs("div",{className:"qsec todo",children:["⚡ ",e.queueTomorrow]}),t.jsxs("div",{className:"qrows",children:[x.length===0&&t.jsx("div",{className:"sp-empty",children:e.queueEmpty}),x.slice(0,10).map((w,N)=>t.jsxs("div",{className:"qr2",children:[t.jsxs("span",{className:"qn2",children:["#",N+1]}),t.jsx("b",{children:w.name}),typeof w.score=="number"&&t.jsx("span",{className:"qs2",children:w.score})]},w.name))]})]})}function Ks(){const{t:e,token:a,flash:r,scoped:n,caps:o,stageOf:i,dispatch:l}=q(),s=`${ut}/cibles/list.csv?token=${a}`,p=`${ut}/cibles/list.json?token=${a}`,u=`${ut}/cibles/export.xlsx?token=${a}&scope=full`,c=`=IMPORTDATA("${s}")`,d=g=>{var m;(m=navigator.clipboard)==null||m.writeText(g).then(()=>r(e.exportCopied))},f=[{def:e.exportCsv,value:s,href:s},{def:e.exportSheet,value:c},{def:e.exportLive,value:p,href:p},{def:e.exportXlsx,value:u,href:u}],v=!o.lockActions&&n.length>0,x=()=>{Os(Ms(n,{plabels:e.plabels,head:e.exportViewHead,stageOf:i,stageLabel:g=>(e.stg.find(([m])=>m===g)||["",""])[1]})),r(e.exportViewDone(n.length))},b=()=>{l({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)};return t.jsxs(we,{title:e.exportTitle,icon:"📥",children:[t.jsx("p",{className:"lead2",children:e.exportLead}),v&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🖨️"}),t.jsxs("div",{children:[t.jsx("b",{children:e.printTitle}),t.jsx("p",{children:e.printDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb",onClick:b,children:e.printBtn})]})}),v&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🗂"}),t.jsxs("div",{children:[t.jsx("b",{children:e.dsBtn}),t.jsx("p",{children:e.dsHint})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>l({type:"modal",modal:"dossier"}),children:e.exportViewBtn})]})}),v&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"📄"}),t.jsxs("div",{children:[t.jsx("b",{children:e.exportViewTitle}),t.jsx("p",{children:e.exportViewDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb pri",onClick:x,children:e.exportViewBtn})]})}),t.jsx("div",{className:"expl",children:f.map(({def:g,value:m,href:w})=>t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:g[0]}),t.jsxs("div",{children:[t.jsx("b",{children:g[1]}),t.jsx("p",{children:g[2]})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>d(m),children:e.exportCopy}),w&&t.jsx("a",{className:"exb",href:w,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.exportOpen})]},g[1]))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.exportKeyWarning})]})}function Qs(){const{t:e,token:a,flash:r,flashErr:n,mode:o}=q(),i=o!=="client",[l,s]=h.useState(null),[p,u]=h.useState(!1),[c,d]=h.useState(0),[f,v]=h.useState(!1);h.useEffect(()=>{let m=!0;return u(!1),Ba(a).then(w=>{m&&(w?s(w):u(!0))}),()=>{m=!1}},[a,c]);const x=()=>(l==null?void 0:l.sections)||{swot:!0,action:!0,synergies:!0,quadrant:!0,verdict:!0},b=m=>{if(i||!l)return;const w={enabled:m.enabled??!!l.enabled,email:m.email??(l.email||""),sections:m.sections??x()};v(!0),Ba(a,w).then(N=>{if(v(!1),!N){n(e.memoAlertErr);return}s(N),r(e.memoAlertSaved)})};if(p)return t.jsx(we,{title:e.memoAlertTitle,icon:"🔔",children:t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>d(m=>m+1),children:e.retry})]})});if(!l)return t.jsx(we,{title:e.memoAlertTitle,icon:"🔔",children:t.jsx("div",{className:"sp-empty",children:"…"})});const g=x();return t.jsxs(we,{title:e.memoAlertTitle,icon:"🔔",children:[t.jsx("p",{className:"lead2",children:e.memoAlertSub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.memoAlertToggle})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":l.enabled===!0,disabled:i||f,style:l.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>b({enabled:!l.enabled}),children:l.enabled?"ON":"OFF"})})]}),t.jsx(Xs,{value:l.email||"",readOnly:i||f,label:e.memoAlertEmail,okLabel:e.csNoteOk,onSave:m=>b({email:m})}),t.jsx("div",{className:"qsec ok",children:e.memoAlertSections}),t.jsx("div",{className:"secl",children:e.memoAlertSec.map(([m,w])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:!!g[m],disabled:i||f,onChange:()=>b({sections:{...g,[m]:!g[m]}})}),t.jsx("span",{children:w})]},m))}),t.jsx(Ta,{label:e.memoAlertPreview,readOnly:i,onPreview:()=>Zr(a,g),onTest:()=>Jr(a,g)})]})}function Xs({value:e,readOnly:a,label:r,okLabel:n,onSave:o}){const[i,l]=h.useState(e);h.useEffect(()=>{l(e)},[e]);const s=i.trim()!==e.trim(),p=!i.trim()||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.trim());return t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:r}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("input",{type:"email",className:"mailin",value:i,disabled:a,onChange:u=>l(u.target.value),onKeyDown:u=>{u.key==="Enter"&&s&&p&&o(i.trim())}}),t.jsx("button",{type:"button",className:"abtn",disabled:a||!s||!p,onClick:()=>o(i.trim()),children:n})]})]})}function Js(){const{t:e,token:a,flash:r,flashErr:n,canWrite:o}=q(),[i,l]=h.useState(null),[s,p]=h.useState(!1),[u,c]=h.useState(null),[d,f]=h.useState(""),[v,x]=h.useState(0);h.useEffect(()=>{let m=!0;return p(!1),ta(a).then(w=>{m&&(w?l({configured:w.configured,url_hint:w.url_hint}):p(!0))}),ao(a).then(w=>{m&&c(w)}),()=>{m=!1}},[a,v]);const b=(m,w)=>{o&&ta(a,m).then(N=>{if(!N||N.ok===!1){n(e.actErr);return}m.test&&N.sent===!1?n(e.plugTestThrottled):r(w),x(y=>y+1)})},g='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}';return t.jsxs(we,{title:e.plugTitle,icon:"🔌",wide:!0,children:[u&&t.jsx("p",{className:"mnote"+(u.enabled?" warn":""),children:u.enabled?e.plugAutoOn(u.destination||"webhook"):e.plugAutoOff}),s?t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>x(m=>m+1),children:e.retry})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugCrm}),t.jsx("p",{className:"mnote",children:e.plugCrmHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"url",maxLength:500,placeholder:e.plugUrlPh,value:d,disabled:!o,onChange:m=>f(m.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:!o||!d.trim(),onClick:()=>b({url:d.trim()},e.plugSaved),children:e.plugSave})]}),(i==null?void 0:i.configured)&&t.jsxs("p",{className:"mnote",children:["✓ ",i.url_hint||""," ",t.jsx("button",{type:"button",className:"lk",disabled:!o,onClick:()=>b({test:!0},e.plugTested),children:e.plugTest})," · ",t.jsx("button",{type:"button",className:"lk",disabled:!o,onClick:()=>b({remove:!0},e.plugRemoved),children:e.plugRemove})]}),t.jsx(Zs,{}),t.jsx("div",{className:"qsec ok",children:e.plugMcp}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:g}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var m;(m=navigator.clipboard)==null||m.writeText(g).then(()=>r(e.exportCopied))},children:e.exportCopy})]})]})]})}function Zs(){const{t:e,token:a,lang:r}=q(),[n,o]=h.useState("valides"),[i,l]=h.useState(!1),[s,p]=h.useState(null),[u,c]=h.useState(null),[d,f]=h.useState(!1),[v,x]=h.useState(!1),[b,g]=h.useState(null),[m,w]=h.useState(null),[N,y]=h.useState(null),k=`atl2:bulk:${a}:${n}`;h.useEffect(()=>{ta(a).then(T=>{w(T&&T.configured?T.url_hint||"webhook":null)})},[a]),h.useEffect(()=>{p(null),c(null),f(!1),g(null);try{const T=JSON.parse(localStorage.getItem(k)||"null");y(T&&Date.now()-Date.parse(T.t)<24*3600*1e3?T:null)}catch{y(null)}},[k]);const S=async()=>{l(!0),f(!1),g(null);const T=await ro(a,n);p(T),c(T.ok?n:null),l(!1)},L=h.useRef(!1),F=async()=>{if(L.current)return;L.current=!0,x(!0);const T=`${a}:${n}:${Date.now()}:${Math.random().toString(36).slice(2,10)}`;let O;try{O=await oo(a,n,"webhook",void 0,T)}finally{L.current=!1}if(x(!1),f(!1),g(O),O.ok&&(O.pushed||0)>0){const R={t:new Date().toISOString(),n:O.pushed||0};y(R);try{localStorage.setItem(k,JSON.stringify(R))}catch{}}},E=s!=null&&s.ok&&s.ready||0,j=!!(s!=null&&s.ok)&&u===n&&E>0&&!!m&&!N,A=N?new Date(N.t).toLocaleString(r==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugBulk}),t.jsx("p",{className:"mnote",children:e.plugBulkHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("select",{value:n,onChange:T=>o(T.target.value),children:e.plugBulkTabs.map(([T,O])=>t.jsx("option",{value:T,children:O},T))}),t.jsx("button",{type:"button",className:"abtn",disabled:i,onClick:()=>{S()},children:i?"…":e.plugBulkPreview})]}),s&&(s.ok?t.jsx("p",{className:"mnote",children:e.plugBulkResult(s.ready||0,s.linkedinReady||0,(s.noContact||[]).length)}):t.jsx("p",{className:"mnote warn",children:e.actErr})),!!(s!=null&&s.ok)&&t.jsx("p",{className:"mnote dim",children:e.bulkScope}),N&&t.jsx("p",{className:"mnote",children:e.bulkLocked(A,N.n)}),!N&&!!(s!=null&&s.ok)&&!m&&t.jsx("p",{className:"mnote warn",children:e.bulkNoDest}),!N&&!s&&t.jsx("p",{className:"mnote dim",children:e.bulkPreviewFirst}),j&&!d&&t.jsx("button",{type:"button",className:"abtn dgr",onClick:()=>f(!0),children:e.bulkArm}),j&&d&&t.jsxs("div",{className:"bulkc",children:[t.jsx("p",{className:"mnote warn",children:e.bulkWarn(E,m||"")}),t.jsx("button",{type:"button",className:"abtn dgr",disabled:v,onClick:()=>{F()},children:v?e.bulkSending:e.bulkConfirm(m||"")}),t.jsx("button",{type:"button",className:"abtn",disabled:v,onClick:()=>f(!1),children:e.bulkCancel})]}),b&&(b.ok?b.replayed?t.jsx("p",{className:"mnote",children:b.pending?e.bulkPending:e.bulkReplayed}):(b.pushed||0)>0?t.jsx("p",{className:"mnote",children:e.bulkDone(b.pushed||0,b.linkedinReady||0,b.skippedNoEmail||0)}):t.jsx("p",{className:"mnote warn",children:e.bulkNone}):t.jsx("p",{className:"mnote warn",children:b.error||e.actErr}))]})}function el(){const{t:e,data:a,lang:r}=q(),n=a.credits,o=a.email,i=async l=>{if(!o)return;const s=window.location.href.split("?")[0];try{const u=await(await fetch(`${va}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,lookup_key:l,success_url:s+"?credits=ok",cancel_url:s+"?credits=cancel"})})).json();u.url&&(window.location.href=u.url)}catch{}};return t.jsxs(we,{title:e.rechargeTitle,icon:"⚡",children:[n&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:e.rechargeHint(n.daily_grant)}}),n.costs&&t.jsxs("p",{className:"mnote",children:["① ",e.creditsCost(n.costs.instant)," · ② ",e.creditsCost(n.costs.detailed)]}),t.jsx("div",{className:"packs",children:(n.packs||[]).map(l=>t.jsxs("div",{className:"pack",children:[t.jsx("div",{className:"pt",children:e.rechargeUnit(l.credits,l.price_eur)}),t.jsx("button",{type:"button",onClick:()=>{i(l.lookup_key)},children:e.rechargeBuy})]},l.lookup_key))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.rechargeNote})]}),!n&&t.jsx("div",{className:"sp-empty",children:e.creditsNone})]})}function tl(){const{t:e}=q();return t.jsx(we,{title:e.dsBtn,icon:"🗂",wide:!0,children:t.jsx(Ps,{})})}function al(){const{t:e,lang:a,data:r,dossiers:n,token:o,canWrite:i,flash:l}=q(),[s,p]=h.useState(null),[u,c]=h.useState(!1);h.useEffect(()=>{let S=!0;return wa(o).then(L=>{S&&L&&typeof L.per_day=="number"&&p(L.per_day)}),()=>{S=!1}},[o]);const d=r.stats,f=typeof(d==null?void 0:d.screened)=="number"?d.screened:n.filter(S=>S.kind==="target"&&Ne(S)).length,v=r.marketEstimate||0,x=v>0?Math.min(100,Math.round(f/v*100)):null,b=(d==null?void 0:d.window_days)||30,g=f>0?f/b:0,m=v>0?Math.max(0,v-f):0,N=v>0&&g>0&&f>=100?Math.round(m/g):null,y=S=>Math.round(S).toLocaleString(a==="en"?"en-US":"fr-FR"),k=S=>{u||!i||(c(!0),no(o,S).then(L=>{if(c(!1),L===null){l(e.actErr);return}p(L),l(e.alertSaved)}))};return t.jsxs(we,{title:e.coverTitle,icon:"🌍",children:[t.jsxs("div",{className:"covg",children:[t.jsx("b",{children:e.covScreened(y(f))}),v>0&&t.jsx("span",{children:e.covOf(y(v))})]}),x!==null?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"covbar",children:[t.jsx("i",{style:{width:x+"%"}}),t.jsxs("em",{children:[x," %"]})]}),N!==null&&t.jsx("p",{className:"mnote",children:e.covEta(N)})]}):t.jsx("p",{className:"mnote dim",children:e.covNoEst}),g>=1&&t.jsx("p",{className:"mnote",children:e.covPace(y(g))}),d&&t.jsxs("div",{className:"covf",children:[typeof d.kept=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:y(d.kept)})," ",e.covKept]}),typeof d.analyzed=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:y(d.analyzed)})," ",e.covAna]}),typeof d.shown=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:y(d.shown)})," ",e.covShown]})]}),i&&s!==null&&t.jsxs("div",{className:"covr",children:[t.jsxs("div",{className:"covrh",children:[t.jsx("span",{children:e.covRate}),t.jsx("b",{children:e.covRateNow(s)})]}),t.jsx("div",{className:"covrb",children:[0,1,2,3,5,10].map(S=>t.jsx("button",{type:"button",className:s===S?"on":"",disabled:u,onClick:()=>k(S),children:S===0?"⏸":S},S))}),t.jsx("p",{className:"mnote dim",children:e.covRateHint})]})]})}function nl(){var m,w,N;const{t:e,dossiers:a,token:r,mode:n,flash:o,criteria:i}=q(),l=n==="client",s=h.useMemo(()=>{const y=new Set;return a.forEach(k=>{k.angle&&y.add(k.angle)}),[...y]},[a]),[p,u]=h.useState(null);h.useEffect(()=>{let y=!0;return to(r).then(k=>{y&&u(k.thumbs)}),()=>{y=!1}},[r]);const[c,d]=h.useState(""),[f,v]=h.useState(""),[x,b]=h.useState(!1),g=async()=>{const y=c.trim();if(!(!y||x||!l)){b(!0),v("");try{const S=await(await fetch(`${ut}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r,message:y,who:"atelier2"})})).json().catch(()=>({}));if(S.reply&&v(String(S.reply)),S.job_id){v(e.critChatRunning);const L=async()=>{const F=await fetch(`${ut}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:S.job_id})}).then(E=>E.json()).catch(()=>null);if(F&&F.done){v(String(F.reply||F.clarification||F.summary||"✓")),b(!1),F.applied&&o(e.alertSaved);return}setTimeout(()=>{L()},8e3)};setTimeout(()=>{L()},8e3),d("");return}d("")}finally{f.startsWith("⏳")||b(!1)}}};return t.jsxs(we,{title:e.critTitle,icon:"⚙",wide:!0,children:[(i==null?void 0:i.lead)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critHypTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:i.lead}),!!((m=i.points)!=null&&m.length)&&t.jsx("ul",{className:"critpts",children:i.points.map(y=>t.jsx("li",{children:y},y))}),t.jsx("p",{className:"mnote",children:e.critHypSub})]}),!!((w=i==null?void 0:i.angles)!=null&&w.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critProfilsTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:i.method||e.critProfilsSub}),i.angles.map(y=>{var k,S;return t.jsxs("details",{className:"prof",children:[t.jsx("summary",{children:y.title}),y.why&&t.jsx("p",{className:"why",children:y.why}),t.jsxs("div",{className:"lo",children:[!!((k=y.look)!=null&&k.length)&&t.jsxs("div",{children:[t.jsx("em",{children:e.critLookFor}),t.jsx("ul",{children:y.look.map(L=>t.jsx("li",{children:L},L))})]}),!!((S=y.out)!=null&&S.length)&&t.jsxs("div",{className:"ko",children:[t.jsx("em",{children:e.critRuleOut}),t.jsx("ul",{children:y.out.map(L=>t.jsx("li",{children:L},L))})]})]})]},y.title)})]}),!!((N=i==null?void 0:i.gate)!=null&&N.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critGateTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:e.critGateSub}),i.gate.length===1&&!i.gate[0].k?t.jsx("p",{className:"gate1",children:i.gate[0].t}):t.jsx("ol",{className:"gatesteps",children:i.gate.map(y=>t.jsxs("li",{children:[y.k&&t.jsx("b",{children:y.k}),y.t]},y.t))})]}),s.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critAngles}),t.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:s.map(y=>t.jsx("li",{style:{marginBottom:5},children:y.replace(/[_-]+/g," ")},y))})]}),t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.critChatTitle}),t.jsx("p",{children:e.critChatHint}),t.jsxs("div",{className:"mfield",style:{marginTop:10},children:[t.jsx("input",{placeholder:e.critChatPh,value:c,disabled:!l||x,onChange:y=>d(y.target.value),onKeyDown:y=>{y.key==="Enter"&&g()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(x?" loading":""),style:{padding:"12px 18px"},disabled:!l||x||!c.trim(),onClick:()=>void g(),children:[t.jsx("span",{className:"fill"}),e.critChatSend]})]}),f&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:f})]}),t.jsx("div",{className:"qsec ok",children:e.critThumbsTitle}),p===null?t.jsx("div",{className:"sp-empty",children:"…"}):p.length===0?t.jsx("p",{className:"mnote",children:e.critThumbsEmpty}):t.jsx("div",{className:"qrows",style:{marginBottom:14},children:p.slice(0,12).map((y,k)=>t.jsxs("div",{className:"qr2",children:[t.jsx("span",{className:"qn2",children:y.kind==="YES"?"👍":"👎"}),t.jsx("b",{children:y.company}),t.jsx("span",{className:"qd",children:(y.ts||"").slice(0,10)})]},k))}),t.jsx("div",{className:"qsec ok",children:e.qvTitle}),t.jsx("div",{className:"vlist",children:e.qv.map(([y,k])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vd "+(nr[y]||"v-cons"),children:y}),t.jsx("span",{children:k})]},y))}),t.jsx("div",{className:"qsec ok",children:e.brTitle}),t.jsx("div",{className:"vlist",children:e.br.map(([y,k])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vtag",children:y}),t.jsxs("span",{children:["← ",k]})]},y))}),t.jsx("p",{className:"mnote",children:e.brNote}),t.jsx("p",{className:"mnote",children:e.critMemoKinds})]})}function rl(){const{t:e,dispatch:a,startTour:r}=q(),n=o=>{var i,l;a({type:"modal",modal:null}),o==="crit"||o==="plug"||o==="alert"?a({type:"modal",modal:o}):o.startsWith("tab")?a({type:"ptab",tab:Number(o.slice(3))}):o==="eval"&&((i=document.querySelector(".atl2 .demand input"))==null||i.scrollIntoView({block:"center",behavior:"smooth"}),(l=document.querySelector(".atl2 .demand input"))==null||l.focus())};return t.jsxs(we,{title:e.tutoTitle,icon:"▶",children:[t.jsxs("div",{className:"howto-go",children:[t.jsx("p",{children:e.tourIntro}),t.jsxs("button",{type:"button",onClick:()=>{a({type:"modal",modal:null}),r()},children:["▶ ",e.tourStart]})]}),t.jsx("ul",{className:"howto",children:e.howto.map(([o,i],l)=>t.jsxs("li",{role:"button",tabIndex:0,onClick:()=>n(i),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n(i))},children:[t.jsx("span",{className:"n",children:l+1}),t.jsx("span",{dangerouslySetInnerHTML:{__html:o.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}})]},i+l))})]})}const Jt={},jn=(Jt==null?void 0:Jt.VITE_API_BASE)||"https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function Nn(){return new Date().toISOString().slice(0,10)}const or=h.createContext(null);function ir(){const e=h.useContext(or);if(!e)throw new Error("ThesisEdition* must be under ThesisEditionProvider");return e}function ol({token:e,children:a}){const{dispatch:r,st:n,lang:o}=q(),[i,l]=h.useState(()=>n.filters.day||Nn()),[s,p]=h.useState(null),[u,c]=h.useState(!1),d=h.useCallback(b=>{if(/^\d{4}-\d{2}-\d{2}$/.test(b)){l(b);try{r({type:"filters",patch:{day:b,win:"all"}})}catch{}}},[r]),f=h.useCallback(()=>{l(Nn());try{r({type:"filters",patch:{day:"",win:"7"}})}catch{}},[r]);h.useEffect(()=>{if(!n.filters.day)try{r({type:"filters",patch:{day:"",win:"7"}})}catch{}},[]),h.useEffect(()=>{const b=g=>{var w;const m=(w=g.detail)==null?void 0:w.day;typeof m=="string"&&d(m)};return window.addEventListener("pp-edition-day",b),()=>window.removeEventListener("pp-edition-day",b)},[d]),h.useEffect(()=>{n.filters.day&&n.filters.day!==i&&l(n.filters.day)},[n.filters.day]),h.useEffect(()=>{if(!e||!i)return;let b=!1;c(!0);const g=new URLSearchParams({token:e,date:i});return fetch(`${jn}/cibles/edition.json?${g}`).then(m=>m.json()).then(m=>{b||p(m)}).catch(()=>{b||p({ok:!1,error:"network"})}).finally(()=>{b||c(!1)}),()=>{b=!0}},[e,i]);const v=h.useMemo(()=>`${jn}/cibles/editions.json?token=${encodeURIComponent(e)}`,[e]),x=h.useMemo(()=>({token:e,day:i,ed:s,loading:u,pickDay:d,pickWindow:f,dayPicked:!!n.filters.day,daysUrl:v,isEn:o==="en"}),[e,i,s,u,d,f,n.filters.day,v,o]);return t.jsx(or.Provider,{value:x,children:a})}function il(){const{day:e,daysUrl:a,pickDay:r,dayPicked:n}=ir();return t.jsxs("div",{className:"thesis-days",children:[t.jsx("style",{children:`
        .thesis-days{margin:0;padding:0 12px 2px;background:#0B1220;border:none}
      `}),t.jsx(po,{mode:"local",theme:"dark",month:e.slice(0,7),current:e,windowDays:n?0:7,daysUrl:a,onPick:r})]})}function sl(){const{day:e,ed:a,loading:r,pickWindow:n,dayPicked:o,isEn:i}=ir(),l=!!(a!=null&&a.ok&&(a.html||a.acquirers_html)),s=(a==null?void 0:a.ok)&&!l,p=a&&!a.ok;return t.jsxs("section",{className:"thesis-brief","data-day":(a==null?void 0:a.date)||e,"data-fund":(a==null?void 0:a.fund)||"",children:[t.jsx("style",{children:`
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
      `}),t.jsxs("header",{className:"thesis-brief__hd",children:[t.jsx("span",{className:"thesis-brief__kicker",children:i?"Daily brief":"Brief du jour"}),t.jsxs("h2",{className:"thesis-brief__title",children:[i?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",(a==null?void 0:a.count)!=null&&a.count>0?` · ${a.count}`:""]}),((a==null?void 0:a.date)||e)&&t.jsx("time",{className:"thesis-brief__date",dateTime:(a==null?void 0:a.date)||e,children:(a==null?void 0:a.date)||e})]}),t.jsx("p",{className:"thesis-brief__hint",children:i?"Same content as your daily email for this fund. Pick a day above the map to change this brief and the LIVE ticker.":"Même contenu que l’email quotidien de ce fonds. Choisir un jour au-dessus de la carte change ce brief et le LIVE."}),r&&!l&&t.jsx("p",{className:"thesis-brief__loading",children:i?"Loading your thesis brief…":"Chargement de votre brief de thèse…"}),p&&t.jsxs("p",{className:"thesis-brief__err",children:[i?"Could not load this brief.":"Impossible de charger ce brief.",a!=null&&a.error?` (${a.error})`:""]}),s&&!r&&t.jsx("p",{className:"thesis-brief__empty",children:i?t.jsxs(t.Fragment,{children:["No thesis brief for ",t.jsx("b",{children:e})," yet. Pick another day on the strip under LIVE, or check back after the morning run."]}):t.jsxs(t.Fragment,{children:["Pas encore de brief de thèse pour le ",t.jsx("b",{children:e}),". Choisissez un autre jour sous le LIVE, ou revenez après le run du matin."]})}),l&&(a!=null&&a.html)?t.jsx("div",{className:"thesis-brief__body",dangerouslySetInnerHTML:{__html:a.html}}):null,l&&(a!=null&&a.acquirers_html)?t.jsx("div",{className:"thesis-brief__acq",dangerouslySetInnerHTML:{__html:a.acquirers_html}}):null,o&&t.jsx("button",{type:"button",className:"thesis-brief__clear",onClick:n,children:i?"← Back to the last 7 days":"← Revenir aux 7 derniers jours"})]})}const sr="atl2:mapfold",ll=()=>{if(typeof window>"u")return!1;try{const e=localStorage.getItem(sr);if(e==="on")return!0;if(e==="off")return!1}catch{}try{const e=new URLSearchParams(window.location.search);if(e.get("embed")==="1"&&(e.get("source")||"").toLowerCase()==="ops")return!0}catch{}return window.innerHeight<1e3},lr=h.createContext(null),q=()=>{const e=h.useContext(lr);if(!e)throw new Error("AtelierV2Ctx manquant");return e};function rt({o:e,lg:a}){const{lang:r}=q(),n=xe(e);return n?t.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:Va(n,r),children:[n.emoji," ",Va(n,r)]}):null}function Bt({o:e,src:a}){const{lang:r,t:n}=q(),o=xe(e);if(!o)return null;const i=ho(o),l=go(o);return t.jsxs("em",{className:"sigwin"+(l?" hot":""),title:n.signaledOn(Ln(o,r))+" · "+n.win7(Rn(o,r)),children:[t.jsx("span",{className:"gg",children:Array.from({length:7},(s,p)=>t.jsx("i",{className:p<i?"on":""},p))}),t.jsx("span",{className:"lb",children:l?n.lastDay:n.daysLeft(Math.max(0,o.left??0))}),a&&o.url&&t.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",title:n.seeSource,onClick:s=>s.stopPropagation(),children:"↗"})]})}function cr({o:e}){const{lang:a}=q(),r=xo(e.cc),n=e.cc?nt(e.cc,a)||e.countryLabel||e.cc:e.countryLabel||"—";return t.jsx("span",{className:"c-flag",title:n||void 0,children:r?t.jsx("img",{src:r,width:24,height:18,alt:n||""}):t.jsx("span",{className:"em",children:"🌐"})})}const Sn="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap",dr=e=>`atl2:tour:${e||"anon"}`;function cl(e){try{return localStorage.getItem(dr(e))==="1"}catch{return!0}}function Cn(e){try{localStorage.setItem(dr(e),"1")}catch{}}function dl(e){const a=e.tourT,r=e.howto;return[{sel:".atl2 .ident",title:a.ident,body:e.tourIntro},{sel:".atl2 .ticker",title:a.live,body:e.fhintLive},{sel:".atl2 .goal",title:a.goal,body:e.fhintGoal},{sel:".atl2 .funnel",title:a.funnel,body:r[2][0],ptab:1},{sel:".atl2 .tuto",title:a.tuto,body:r[3][0],ptab:3},{sel:".atl2 .demand",title:a.demand,body:r[1][0]},{sel:".atl2 .card .dec",need:".atl2 .list",title:a.dec,body:e.fhintDec,ptab:1,dens:"deplie"},{sel:".atl2 .csp",need:".atl2 .list",title:a.status,body:e.fhintStatus,ptab:1,dens:"deplie"},{sel:".atl2 .learn",title:a.learn,body:e.learnLine},{sel:".atl2 .ftools",title:a.tools,body:r[6][0]},{sel:".atl2 .tool",title:a.crit,body:r[0][0]}]}function hl({demo:e=!1,source:a="default",initialFilters:r,initialUi:n,capsOverride:o,onFiltersChange:i}){const{lang:l}=uo(),s=So[l],p=Fo(e,l,a),[u,c]=h.useReducer(Do,void 0,()=>Po((n==null?void 0:n.continent)??(a==="ops"?"monde":"europe"),e||ll(),{ptab:n==null?void 0:n.ptab,dens:(n==null?void 0:n.dens)??(a==="ops"?"deplie":void 0),filters:r,modal:n==null?void 0:n.modal})),d=h.useRef(!0);h.useEffect(()=>{if(d.current){d.current=!1;return}if(!e)try{localStorage.setItem(sr,u.mapFolded?"on":"off")}catch{}},[u.mapFolded,e]);const f=h.useRef(i);f.current=i,h.useEffect(()=>{var C;(C=f.current)==null||C.call(f,u.filters)},[u.filters]);const[v,x]=h.useState(null),[b,g]=h.useState(null),[m,w]=h.useState({kept:0,dropped:0}),[N,y]=h.useState(!1),[k,S]=h.useState(""),[L,F]=h.useState(!1),[E,j]=h.useState(null),[A,T]=h.useState(!1),[O,R]=h.useState(!1),[,z]=h.useState(0),M=()=>z(C=>C+1),$=h.useRef([]),K=h.useRef(new Set),X=h.useRef(new Set),pe=h.useRef(new Map),le=h.useRef(null),{mode:U}=p,W=h.useMemo(()=>({...p.caps,...a==="ops"?{showMorning:!1}:null,...o||null}),[p.caps,o,a]),H=W.pipe,_=p.session.token||"",G=U==="client"&&!e;h.useEffect(()=>{if(document.querySelector(`link[href="${Sn}"]`))return;const C=document.createElement("link");C.rel="stylesheet",C.href=Sn,document.head.appendChild(C)},[]);const ee=(C,D=!1)=>{S(C),F(D),le.current&&clearTimeout(le.current),le.current=setTimeout(()=>S(""),D?4200:2400)},ne=C=>ee(C,!0),ge=h.useMemo(()=>{const C=new Map;return p.dossiers.forEach(D=>{D.id&&C.set(D.id,D)}),C},[p.dossiers]),ue=h.useMemo(()=>p.dossiers.filter(C=>qn(C,u,H)),[p.dossiers,u,H]),Y=h.useRef(!1);h.useEffect(()=>{if(Y.current||e||p.loading||!p.dossiers.length)return;if(!W.showFunnel||cl(p.session.token||"")){Y.current=!0;return}Y.current=!0;const C=window.setTimeout(()=>{Cn(p.session.token||""),T(!0)},700);return()=>window.clearTimeout(C)},[e,p.loading,p.dossiers.length,W.showFunnel,p.session.token]);const Q=h.useMemo(()=>p.dossiers.filter(C=>Io(C,u,H,p.favIds)),[p.dossiers,u,H,p.favIds]),be=h.useMemo(()=>fo(ue,p.favIds),[ue,p.favIds]),B=ka.find(C=>C.key===u.continent),de=u.continent==="monde"?s.contWorld:(l==="fr"?B==null?void 0:B.fr:B==null?void 0:B.en)||"";h.useEffect(()=>{const C=D=>{var ce;const I=(((ce=D.detail)==null?void 0:ce.name)||"").trim();I&&re(null,I)};return window.addEventListener("ppmap:evaluate",C),()=>window.removeEventListener("ppmap:evaluate",C)});const re=(C,D)=>{const I=((C==null?void 0:C.name)||D||"").trim();if(!G){g({kicker:I});return}!I||N||(y(!0),(async()=>{try{const ce=await Tn(_,I,"atelier2"),gt={name:ce.company||I,verdict:ce.verdict,reason:ce.reason||"",remaining:ce.remaining??null};$.current=[gt,...$.current].slice(0,8),ce.verdict==="kept"&&w(_e=>({..._e,kept:_e.kept+1})),ce.verdict==="ruled_out"&&w(_e=>({..._e,dropped:_e.dropped+1}));const ot=C||p.dossiers.find(_e=>(_e.name||"").toLowerCase()===I.toLowerCase());ot&&(ce.verdict==="kept"?ot.verdict=ot.verdict||"MATCH":ce.verdict==="ruled_out"&&(ot.verdict="NO MATCH"),ce.reason&&(ot.reasoning=ce.reason)),M()}finally{y(!1)}})())},fe=C=>{if(!G){g({kicker:C.name});return}K.current.add(C.id),it(_,"fast_request",C.name||"",""),ee(s.memoInstantSent(C.name)),M()},Me=C=>pe.current.get(C.id)??p.thumbs.get((C.name||"").trim().toLowerCase()),ve=(C,D)=>c({type:"undoPush",entry:{id:C.id,name:C.name,prevCeoStatus:D}}),Oe=async(C,D,I)=>{const ce=C.ceoStatus||"";C.ceoStatus=D,M();const gt=await Vt(_,{status:D,airtable_id:C.airtableId,check_id:C.checkId,company:C.name,...(I==null?void 0:I.note)!==void 0?{note:I.note}:{},...I!=null&&I.via?{via:I.via}:{}});return gt.ok?gt.skipped?(C.ceoStatus=ce,M(),ne(s.actNotPersisted),!1):((I==null?void 0:I.undo)!==!1&&ve(C,ce),I!=null&&I.msg&&ee(I.msg),(D==="Validé"||D==="Écarté")&&!C.ceoNote&&(I==null?void 0:I.note)===void 0&&j({o:C,yes:D==="Validé"}),!0):(C.ceoStatus=ce,M(),ne(s.actErr),!1)},Ie=async(C,D)=>{const I=await Vt(_,{status:C.ceoStatus||"Retenu",airtable_id:C.airtableId,check_id:C.checkId,company:C.name,note:D,via:"note"});return!I.ok||I.skipped?(ne(I.skipped?s.actNotPersisted:s.actErr),!1):(C.ceoNote=D,M(),!0)},ye=h.useRef(new Map),Be=C=>ye.current.has(C.id)?ye.current.get(C.id):p.stages.get((C.name||"").trim().toLowerCase()),$t=(C,D)=>{ye.current.set(C.id,D),M()},P=(C,D)=>{G&&Oe(C,D?"Validé":"Écarté",{msg:D?s.decidedYes(C.name):s.decidedNo(C.name)})},J=C=>{G&&Oe(C,"À trancher",{msg:s.promoted(C.name)})},ae=C=>{G&&(async()=>{const D=C.ceoStatus||"";C.ceoStatus="Retenu",M();const I=await Vt(_,{status:"Retenu",check_id:C.checkId,company:C.name});if(!I.ok||I.skipped){C.ceoStatus=D,M(),ne(I.skipped?s.actNotPersisted:s.actErr);return}ve(C,D),ee(s.repeched(C.name))})()},oe=()=>{const C=u.undo[u.undo.length-1];if(!C){ee(s.undoNone);return}const D=ge.get(C.id);if(!D){c({type:"undoPop"}),ee(s.undoNone);return}let I=C.prevCeoStatus;if(!I)if((D.verdict||"").toUpperCase().includes("CALL"))I="À trancher";else{ee(s.undoLockedTitle);return}(async()=>await Oe(D,I,{undo:!1})&&(c({type:"undoPop"}),D.ceoStatus=C.prevCeoStatus,M(),ee(s.undoDone(D.name))))()},qe=C=>{G&&(X.current.add(C.id),M(),(async()=>{const D=await bo(_,C.name,"email");if(!D||D.ok===!1){X.current.delete(C.id),M(),ne(s.actErr);return}it(_,"approach",C.name||"",""),ee(s.actApproachSent)})())},Ae=(C,D)=>{G&&(async()=>{if(!(await it(_,D?"yes":"no",C.name||"","")).ok){ne(s.actErr);return}pe.current.set(C.id,D?"yes":"no"),M(),ee(D?s.thumbUpDone:s.thumbDnDone)})()},$e=C=>{!G||!ja(C)||(it(_,"detailed_request",C.name||"",""),ee(s.memoDeepSent(C.name)))},pr=C=>{const D=new Set(p.favIds),I=D.has(C.id);I?D.delete(C.id):D.add(C.id),p.setFavIds(D),G&&vo(_,{id:C.id,co:C.name},I)},ur=()=>{!G||O||window.confirm(s.identSyncConfirm)&&(R(!0),(async()=>{const C=await yo(_);R(!1),C?ee(s.identSyncDone):ne(s.actErr)})())},La=/proplace/i.test(p.fund||""),fr=C=>{!G||!La||(it(_,"onboard_request",C.name||"",""),ee(s.onboardSent(C.name)))},mr={st:u,dispatch:c,t:s,lang:l,mode:U,caps:W,pipe:H,token:_,fund:p.fund,email:p.email,criteria:p.criteria,source:a||"default",data:p,doRepeche:ae,thumbOf:Me,canWrite:G,commitStatus:Oe,saveNote:Ie,stageOf:Be,setStage:$t,flashErr:ne,startTour:()=>T(!0),dossiers:p.dossiers,scopedAll:ue,scoped:Q,counts:be,byId:ge,contName:de,favIds:p.favIds,toggleFav:pr,askEvaluate:re,doAnalyse:fe,doDecide:P,doPromote:J,doApproach:qe,doThumb:Ae,doDeep:$e,doUndo:oe,doSync:ur,doOnboard:fr,outbound:La,memoQueued:K.current,approachDone:X.current,sessTally:m,evalCards:$.current,evalBusy:N,markRow:x,markedId:v,flash:ee};h.useEffect(()=>{const C=D=>{D.key==="Escape"&&(c({type:"popup",id:null}),c({type:"modal",modal:null}),c({type:"openFacet",facet:null}))};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[]);const xr=C=>_?t.jsx(ol,{token:_,children:C}):t.jsx(t.Fragment,{children:C});return t.jsx(lr.Provider,{value:mr,children:t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:zo}),xr(t.jsxs("div",{className:"app"+(H?" pipe":"")+(_?" has-thesis":""),children:[W.showTicker&&t.jsx(me,{name:"live",children:t.jsxs("div",{className:"live-stack"+(_?" live-stack--cibles":""),children:[t.jsx(Uo,{}),!!_&&t.jsx(il,{})]})}),W.showIdent&&t.jsx(me,{name:"identite",children:t.jsx(ii,{})}),W.showOnb&&t.jsx(me,{name:"onboarding",children:t.jsx(si,{})}),W.showMorning&&t.jsx(me,{name:"matin",children:t.jsx(oi,{})}),t.jsx(me,{name:"fraicheur",children:t.jsx(Xo,{})}),t.jsx(me,{name:"mesure",children:t.jsx(Jo,{})}),W.showFunnel&&t.jsx(me,{name:"entonnoir",children:t.jsx(pl,{})}),W.showFunnel&&t.jsx(me,{name:"tunnel",children:t.jsx(ci,{})}),W.showFunnel&&t.jsx(me,{name:"tuto",children:t.jsx(pi,{})}),t.jsx(me,{name:"carte",fallback:t.jsx("div",{className:"void",children:s.loadError}),children:t.jsxs("div",{className:"fzone",children:[t.jsx(ul,{}),t.jsxs("div",{className:"stage"+(u.mapFolded?" folded":""),id:"atl2-stage",children:[t.jsx(os,{}),t.jsx(ss,{})]})]})}),W.showDemand&&t.jsx(me,{name:"evaluation",children:t.jsx(fs,{})}),W.showDemand&&u.memoConsole&&t.jsx(me,{name:"console",children:t.jsx(xs,{})}),t.jsx(me,{name:"liste",fallback:t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>window.location.reload(),children:s.retry})]}),children:t.jsx(Ls,{})}),!!_&&t.jsx(me,{name:"edition",children:t.jsx(sl,{})}),p.loading&&t.jsx("div",{className:"void",children:s.loadingV2}),p.error&&!p.loading&&t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:p.refresh,children:s.retry})]})]})),W.showOnb&&t.jsxs("div",{className:"lockbar on",children:[t.jsx("b",{children:s.lockbarText}),t.jsx("button",{type:"button",onClick:()=>c({type:"modal",modal:"rdv"}),children:s.lockbarCta})]}),u.popupId&&t.jsx(me,{name:"fiche",children:t.jsx(bs,{})}),t.jsx(me,{name:"modales",children:t.jsx(Is,{})}),t.jsx(Go,{}),E&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:E.o.name}),t.jsx(ai,{placeholder:E.yes?s.whyYesPh:s.whyNoPh,onDone:C=>{const D=E.o;j(null),C&&Ie(D,C).then(I=>{I&&ee(s.csNoteSaved)})}})]}),A&&t.jsx(ri,{steps:dl(s),onClose:()=>{T(!1),Cn(_)}}),k&&t.jsx("div",{className:"flash on"+(L?" err":""),children:k}),b&&t.jsx(mo,{variant:"acquirer",initialCompany:En().co,initialWebsite:En().site,onClose:()=>g(null)})]})})}function pl(){const{t:e}=q(),[a,r]=h.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem("atl2:fhint")==="off"}catch{return!1}});return a?null:t.jsxs("p",{className:"fhint",children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:t.jsx("path",{d:"M1 2h10M2.5 5.5h7M4.5 9h3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})}),t.jsx("span",{dangerouslySetInnerHTML:{__html:e.funnelHint}}),t.jsx("button",{type:"button","aria-label":"Fermer",title:e.fhintClose,onClick:()=>{r(!0);try{localStorage.setItem("atl2:fhint","off")}catch{}},children:"✕"})]})}function ul(){const{dossiers:e,st:a,dispatch:r,pipe:n,lang:o,t:i}=q(),l=h.useMemo(()=>{const s={};return e.forEach(p=>{Na(p,a.filters,n)&&(s.monde=(s.monde||0)+1,p.continent&&(s[p.continent]=(s[p.continent]||0)+1))}),s},[e,a.filters,n]);return t.jsxs("div",{className:"conts",children:[wo.map(s=>{const p=ka.find(c=>c.key===s),u=s==="monde"?i.contWorld:o==="fr"?p.fr:p.en;return t.jsxs("button",{type:"button",className:"cbtn"+(s==="monde"?" hint":""),"aria-selected":a.continent===s,onClick:()=>r({type:"continent",key:s}),children:[u,t.jsx("span",{className:"n",children:l[s]||0})]},s)}),t.jsx("span",{className:"side",children:t.jsx("button",{type:"button",onClick:()=>r({type:"mapFold",folded:!a.mapFolded}),children:a.mapFolded?i.showMap:i.hideMap})})]})}function En(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function fl(e){return e>=1e9?(e/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":e>=1e6?Math.round(e/1e6)+" M€":Math.round(e/1e3)+" k€"}export{cr as FlagCell,rt as SigBadge,Bt as SigWin,hl as default,fl as fmtShort,q as useV2};
