var oa=Object.defineProperty;var sa=(t,a,r)=>a in t?oa(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;var mt=(t,a,r)=>sa(t,typeof a!="symbol"?a+"":a,r);import{r as p,u as ia,a as la,b as da,R as Ie,L as ca,C as ft,c as pa,d as ua,l as Ke,o as Qe,e as xt,n as gt,f as ht,g as ma,h as fa,i as xa,j as ga,k as ha,S as at,m as ba,p as va,q as ne,s as rt,t as Te,v as Ee,w as e,x as de,y as Me,z as ya,A as wa,B as ka,D as Ae,E as se,F as ja,G as nt,H as Bt,I as et,J as ot,K as bt,M as vt,N as Le,O as yt,P as ze,Q as ge,T as Na,U as Sa,V as Ca,W as $t,X as Ea,Y as za,Z as st,_ as He,$ as Ta,a0 as Aa,a1 as La,a2 as it,a3 as qa,a4 as Ut,a5 as Vt,a6 as Ra,a7 as Oa,a8 as wt,a9 as Fa,aa as Ma,ab as Da,ac as Pa,ad as tt,ae as Ia,af as kt,ag as Ba,ah as $a,ai as Ua,aj as jt,ak as Va,al as _a,am as Nt,an as Ha,ao as Ya,ap as Wa,aq as Ga,ar as Ka,as as Qa,at as St,au as Ja,av as Xa,aw as Oe,ax as Je,ay as Za,az as er,aA as tr,aB as ar}from"./index-BVyVutSW.js";const rr=({filloutId:t,domain:a,inheritParameters:r,parameters:n,dynamicResize:s,onInit:o,onPageChange:c,onSubmit:i})=>{const[d,m]=p.useState(!0),h=ia({filloutId:t,domain:a,inheritParameters:r,parameters:n,dynamicResize:s});la(h,{onInit:o,onPageChange:c,onSubmit:i});const[l,b]=p.useState();return da(h,"form_resized",v=>{const x=v.size;typeof x=="number"&&b(x)},{disabled:!s}),Ie.createElement("div",{className:"fillout-standard-embed",style:{height:s?typeof l=="number"?l:256:"100%",transition:s?"height 150ms ease":void 0}},d&&Ie.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},Ie.createElement(ca,null)),h&&Ie.createElement("iframe",{src:h.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>m(!1),style:{width:d?0:"100%",height:d?0:"100%",opacity:d?0:1,borderRadius:10,border:0,minHeight:256}}))},nr={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Tout ce que STAN a passé au crible sur la fenêtre : chaque société évaluée selon vos critères, retenue ou écartée automatiquement.","STAN a retenu ces sociétés selon vos critères, décision justifiée. NOUS vérifions ses choix — écartez, validez, ou lancez une analyse sur les incertaines.","Les mémos de STAN, relus par NOUS : synergies chiffrées, verdict argumenté. Validez celles à contacter, mettez « à trancher » celles où vous hésitez.","À VOUS de jouer : les meilleures cibles, présentées le lundi par votre Corporate Developer. Tranchez OUI ou NON — vos oui passent en Validées.","Vos OUI — la short-list à contacter. NOUS préparons l’approche, ou l’engageons en votre nom (offre Entreprise).","Écartées par STAN ou par VOUS. Chaque NON affine les critères de Stan. Repêchez-en une à tout moment.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(t,a,r)=>`<b>${t} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${r} sans réponse.</b>`,morningThesis:(t,a)=>`<b>${t}</b> société${t===1?" a":"s ont"} été sourcée${t===1?"":"s"} ce matin par nos moteurs.`+(a?` <b>${a}</b> restante${a>1?"s":""} pas encore évaluée${a>1?"s":""}.`:' <span class="ok">Tout est évalué.</span>'),morningEval:t=>`▶ Les traiter (${t})`,identTitle:t=>`Cibles pour ${t}`,identCoverage:"COUVERTURE DU MARCHÉ",identCoverageOf:(t,a)=>`<b>${t}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"MOTEUR DE MÉMOS",identPerDay:"mémo/jour",identPending:t=>`→ ${t} en attente`,identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Inverser l’ordre de tri",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:t=>`Décision annulée sur ${t}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ OUI",actNo:"✗ NON",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:t=>`${t} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"CRIBLE · MÉMO",colScore:"SCORE",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:t=>`Depuis le verdict de Stan : ${t} j`,waitChip:t=>`⏱ ${t} j`,densList:"LISTE",densOpen:"DÉPLIÉ",densMaxi:"MAXI",memoSynth:"SYNTHÈSE",memoOpenFull:"📖 Lire le mémo complet →",memoDeep:"⚡ Mémo détaillé",memoDeepHint:"Pour ce dossier à trancher, vous pouvez lancer l’analyse détaillée : étude de marché, quadrant concurrentiel, scénarios.",memoDeepSent:t=>`Mémo détaillé lancé sur ${t} — prêt dans 35 à 40 minutes`,memoInstantSent:t=>`Analyse lancée sur ${t} — mémo prêt dans ~15 minutes`,memoNone:"Aucun mémo pour ce dossier — lancez l’analyse.",creditsCap:"CRÉDITS MÉMO",creditsToday:"aujourd’hui",creditsRecharge:"Recharger →",creditsCost:t=>`−${t} crédit${t>1?"s":""}`,creditsNone:"Crédit épuisé — rechargez ou attendez demain 7 h.",rechargeTitle:"Crédits mémo",rechargeHint:t=>`Votre offre comprend <b>${t} crédits par jour</b>, rechargés chaque matin. Besoin de plus tout de suite ?`,rechargeNote:"Les crédits achetés n’expirent pas. Ils s’utilisent après vos crédits quotidiens.",rechargeBuy:"Ajouter",rechargeUnit:(t,a)=>`${t} crédits — ${a} €`,onbTag:"APERÇU PRIVÉ · LECTURE SEULE",onbTitle:t=>`Votre deal flow est prêt — <b>${t} cibles retenues</b> par Stan`,onbSub:t=>`${t} sociétés passées au crible sur votre thèse. Les dix premières lignes sont ouvertes ; le reste se débloque en trente minutes.`,onbSteps:[["Stan a étudié votre présence en ligne","Site, offres d’emploi, presse — il en a déduit vos angles d’acquisition."],["Il a criblé le marché","Chaque société confrontée à vos critères."],["Il a rédigé des mémos","Analyses chiffrées, synergies, verdicts."],["À vous de trancher","Trente minutes pour régler votre deal flow et tout débloquer."]],onbCta:"Choisir un créneau →",lockbarText:"Paramétrons votre deal flow rêvé en 30 minutes",lockbarCta:"Choisir un créneau",rdvHeading:"Paramétrons votre deal flow rêvé en 30 minutes",rdvSubBefore:"Choisissez un créneau ci-dessous, ou contactez votre expert Corporate Development directement au ",rdvSubMid:" ou par email à ",rdvCoFallback:"votre société",rdvUnlockLabel:t=>`Déblocage ${t}`,rdvUnlocks:t=>[["Accédez à toutes vos cibles retenues","Mémos d’investissement complets, synergies, contacts, angle d’approche."],["Stratégie d’acquisition construite avec vous","Hypothèse + stratégie d’acquisition recalibrées en live, avec vous."],["Tranchons ensemble les cibles que vous voulez","OUI / NON, sourcing de sociétés similaires, export et synchronisation CRM."],["Votre AI Corporate Developer est lancé",`Stan travaille pour ${t} chaque matin — vous n’avez plus qu’à décider.`]],funScreened:t=>`sociétés passées au crible${t?` depuis le ${t}`:""}`,funKept:"retenues comme cibles sérieuses",funAnalyzed:"analysées en profondeur",funShown:"présentées ici pour recueillir votre avis",funToday:t=>`dont ${t} aujourd’hui`,actTitle:"Activité des 30 derniers jours",actScreened:"criblées",actKept:"retenues",actToday:"aujourd’hui",fstatsShow:"Voir l’activité des 30 derniers jours",fstatsHide:"Masquer l’activité",sinceTitle:(t,a)=>`${t} nouvelle${t>1?"s":""} cible${t>1?"s":""} depuis votre dernière visite (${a})`,sinceMore:t=>`+${t} autres`,sinceOut:t=>`${t} sortie${t>1?"s":""} de la liste`,identSyncConfirm:"Relancer le sourcing maintenant ? Un passage des moteurs prend quelques minutes.",plugAutoOn:t=>`⚡ Envoi automatique ACTIF (${t}) — chaque cible que vous validez part toute seule en séquence.`,plugAutoOff:"Envoi automatique inactif — valider une cible ne l’envoie nulle part.",plugCrm:"Créer les dossiers dans mon CRM",plugCrmHint:"Collez l’URL de webhook de votre outil : chaque décision y arrive aussitôt.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Enregistrer",plugSaved:"Webhook enregistré",plugTest:"Tester",plugTested:"Test envoyé",plugTestThrottled:"Déjà testé il y a moins de 5 s — rien n’est reparti.",plugRemove:"Retirer",plugRemoved:"Webhook retiré",plugMcp:"Claude & IA (MCP)",plugBulk:"Contacter mes cibles",plugBulkHint:"Voyez d’abord qui partirait : l’aperçu ne contacte personne.",plugBulkTabs:[["valides","Validées"],["call","À trancher"],["retenus","Retenues"]],plugBulkPreview:"👁 Aperçu",bulkArm:"📤 Envoyer pour de vrai",bulkNoDest:"Aucune destination enregistrée : renseignez d’abord votre outil ci-dessus.",bulkScope:"Ce qui part, c’est l’onglet entier côté serveur — pas la vue filtrée à l’écran.",bulkWarn:(t,a)=>`Vous allez contacter ${t} société${t>1?"s":""} via ${a}. C’est irréversible, et le serveur ne vérifie pas si elles ont déjà été contactées.`,bulkConfirm:t=>`Oui, envoyer via ${t}`,bulkCancel:"Annuler",bulkSending:"Envoi en cours…",bulkDone:(t,a,r)=>`${t} société${t>1?"s":""} envoyée${t>1?"s":""}. ${a} joignable${a>1?"s":""} sur LinkedIn seulement, ${r} sans email.`,bulkNone:"Aucune société n’avait d’email : rien n’a été envoyé.",bulkLocked:(t,a)=>`Envoyé le ${t} — ${a} société${a>1?"s":""}. Nouvel envoi possible dans 24 h.`,bulkPreviewFirst:"Lancez d’abord l’aperçu : il dit exactement qui partirait.",cdConviction:"Conviction",cdAnalyse:"Analyse",cdSociete:"Société",cdContact:"Contact",cdSuivi:"Suivi",cdCrible:"au crible",cdMemo:t=>t?`après mémo ${t}`:"après mémo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict du",cdSector:"Secteur",cdStage:"Stade",cdCountry:"Où",cdSite:"Site",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Détectée le",cdName:"Dirigeant",cdEmail:"Email",cdCeoStatus:"Votre décision",cdEngagement:"Engagement",qaTitle:"Décrire cette société",qaHint:"Lecture de son site, puis quatre blocs : à qui elle s’adresse, ce qu’elle vend, comment elle gagne de l’argent, et ce qu’il faut en retenir. Aucun verdict — le crible a déjà tranché.",qaRun:"📄 Décrire",qaBusy:"Lecture du site…",qaVP:"À qui, et pour quel problème",qaProduct:"Ce qu’elle vend",qaModel:"Comment elle gagne de l’argent",qaSummary:"À retenir",qaSources:t=>`${t} page${t>1?"s":""} lue${t>1?"s":""}`,qaQuota:"Plafond du jour atteint : réessayez demain.",qaEmpty:"Le site ne dit rien d’exploitable — rien n’a été inventé.",dsBtn:"🗂 Dossier comité",dsHint:"Un A4 par société : le verdict du crible et sa raison, l’identité, l’analyse quand elle a été lancée, et votre décision. Aucun chiffre financier — nous n’en recevons aucun.",dsTitle:t=>`Dossier comité — ${t} société${t>1?"s":""}`,dsCap:(t,a)=>`Les ${t} premières sur ${a} : un comité ne lit pas ${a} pages.`,dsWhy:"Pourquoi cette société est devant vous",dsAnalysis:"Ce qu’elle fait",dsDecision:"Votre décision",dsEmpty:"Aucune société dans la sélection courante.",dsFoot:t=>`Sélection établie par Proplace pour ${t} — document interne, ne pas diffuser.`,covFunnel:"Votre marché, au crible",covScreened:t=>`${t} sociétés passées au crible`,covOf:t=>`sur ~${t} sociétés pertinentes`,covNoEst:"Votre marché adressable n’est pas encore chiffré : la couverture s’affichera dès qu’il le sera.",covPace:t=>`${t} sociétés criblées par jour`,covEta:t=>t<=0?"Votre marché est entièrement couvert.":t<60?`Couverture complète dans ~${t} jours, à ce rythme.`:`Couverture complète dans ~${Math.round(t/30)} mois, à ce rythme.`,covRate:"Rythme d’analyse",covRateHint:"Combien de sociétés retenues reçoivent un verdict argumenté chaque jour. À zéro, l’analyse est en pause.",covRateNow:t=>t<=0?"En pause":`${t} par jour`,covKept:"retenues",covAna:"analysées",covShown:"présentées ici",bulkReplayed:"Cet envoi avait déjà été enregistré : rien n’est reparti. Vos cibles n’ont été contactées qu’une fois.",bulkPending:"L’envoi précédent est encore en cours : rien n’a été renvoyé.",plugBulkResult:(t,a,r)=>`${t} partiraient par email · ${a} par LinkedIn · ${r} sans contact.`,memoAlertTitle:"🔔 Votre alerte mémo",memoAlertSub:"Recevez un email dès qu’un mémo de votre fonds est finalisé — avec son lien direct.",memoAlertToggle:"M’envoyer chaque mémo terminé",memoAlertEmail:"Destinataire",memoAlertSaved:"Enregistré ✓",memoAlertErr:"Échec d’enregistrement — réessayez",memoAlertSections:"Sections de l’email",memoAlertSec:[["swot","SWOT"],["action","Plan d’action"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Verdict de Stan"]],memoAlertPreview:"👁 Prévisualiser",memoAlertBtn:"Votre alerte mémo",alertTabDaily:"Quotidien",alertTabWeekly:"Hebdomadaire",alertSections:"Sections de l’email",alertSec:[["pending","Dossiers à trancher"],["stats","Vos chiffres clés"],["autonomous","Décisions automatiques de Stan"],["market","Analyse de marché"],["sourcing","Votre sourcing du jour"]],alertSecSlow:"(plus long à générer)",alertSecNote:"Décocher l’analyse de marché rend l’aperçu instantané.",alertPreview:"👁 Prévisualiser l’email d’aujourd’hui",alertPreviewWeekly:"👁 Prévisualiser le bilan",alertSubject:"Objet :",alertPreviewBusy:"Aperçu en cours de génération, réessayez dans quelques secondes.",alertPreviewRetry:t=>`Génération en cours — nouvel essai dans ${t} s…`,alertPreviewFail:"Aperçu indisponible pour l’instant — décochez « Analyse de marché » pour l’obtenir tout de suite.",alertPreviewEmpty:"À cet instant : rien à trancher — l’email ne partira pas.",alertTest:"✉ M’envoyer un test",alertTestOk:t=>`✓ Envoyé à ${t} — vérifiez aussi vos spams/promotions.`,alertTestHint:"N’affecte pas l’envoi quotidien.",alertWeeklySub:"Un email par semaine : le bilan de la semaine et ce que votre thèse a appris de vos décisions.",alertWeeklyOn:"📬 Recevoir votre bilan de la semaine",alertWeeklyWhen:"Jour et heure d’envoi (Paris)",alertDow:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],alertLoadError:"Impossible de charger vos préférences.",alertThrottled:"Trop vite — attendez quelques secondes et refaites le réglage.",alertInactive:"Votre accès n’est pas encore actif — parlons-en.",alertNoLead:"Destinataire à définir avec nous.",exportViewTitle:"CSV de la vue filtrée",exportViewDesc:t=>`Les ${t} lignes de votre sélection actuelle — onglet, facettes, recherche et fenêtre comprises. Séparateur « ; », prêt pour Excel.`,exportViewBtn:"Télécharger",exportViewDone:t=>`${t} ligne${t>1?"s":""} exportée${t>1?"s":""}`,printTitle:"Imprimer la sélection",printDesc:t=>`Les ${t} lignes à l'écran, en A4 : pour qui, à quelle date, l'entonnoir chiffré, puis la liste. La carte, les filtres et les boutons ne sont pas imprimés.`,printBtn:"Imprimer",exportViewHead:"Société|Statut|Verdict Stan|Score|Pays|Secteur|Étape post-OUI|Contact|Email|Lien mémo|Date|Raison",tourStart:"Lancer le guide pas à pas",tourIntro:"La visite guidée couvre toute la page de A à Z, sur la vraie page : chaque étape éclaire l’endroit exact — de votre thèse à votre alerte email.",tourStep:(t,a)=>`Étape ${t}/${a}`,tourPrev:"← Précédent",tourNext:"Suivant →",tourDone:"Terminer",tourClose:"Fermer",tourPlayTitle:"Visite guidée",ahaATitle1:"1 dossier attend votre décision",ahaATitleN:t=>`${t} dossiers attendent votre décision`,ahaABody:"OUI = on prépare l’approche ; NON = on affine le tir.",ahaABtn:"Trancher maintenant →",ahaBTitle:"Un mémo complet vous attend",ahaBBody:t=>`${t} a déjà son mémo d’analyse — lisible en 3 minutes.`,ahaBBtn:"Ouvrir le mémo →",ahaCTitle:"Vos premières cibles sont là",ahaCBody:"Dites-nous si ça vise juste — chaque retour affine la machine.",ahaCBtn:"Voir mes critères →",howto:[["**Réglez votre ciblage.** Ouvrez « Vos critères » : c’est votre thèse — ce que vous cherchez, ce que vous écartez. Corrigez-la en langage naturel dès que quelque chose cloche ; le sourcing du lendemain matin s’y réaligne tout seul.","crit"],["**Sourcez un maximum de cibles.** Évaluez une société en collant son nom ou son site — ou une liste entière —, et regardez vos moteurs ratisser le web avec vos réglages.","eval"],["**Faites avancer chaque cible dans le tunnel, de gauche à droite** — Évaluées › Retenues › Analysées › À trancher › Validées › Écartées. Sur chaque carte, « Votre statut » la classe en un clic ; votre note « pourquoi » reste visible. Les 👍/👎 ne classent jamais : ils affinent votre thèse.","tab1"],["**Tranchez les « À trancher ».** Stan vous laisse le dernier mot : OUI (Validée) ou NON (Écartée), avec un mot sur le pourquoi.","tab3"],["**Comprenez comment Stan classe vos cibles.** Votre statut prime toujours sur le verdict de Stan. Le pont entre les deux est expliqué dans « Vos critères » : Retenu ↔ MATCH, Analysé ↔ CONSIDER · MONITOR, À trancher ↔ CALL, Écarté ↔ NO MATCH · PASS…","crit"],["**Concentrez-vous sur les Validées** — et menez chaque dossier jusqu’au bout du closing !","tab4"],["**Faites sortir tout ça de la page.** Le bouton 🔌 la branche sur vos outils : envoyer vos cibles dans votre séquence d’emailing, créer les fiches dans votre CRM, enrichir les dossiers que vous y avez déjà.","plug"],["**Ne revenez que si ça vaut le coup.** Le bouton 🔔 règle deux emails : le quotidien des dossiers à trancher, et le bilan de la semaine.","alert"]],fhintLive:"Ce qui bouge en ce moment sur votre marché — cliquez une vignette pour ouvrir la source.",fhintGoal:"Ce que les moteurs ont sourcé cette nuit, et ce qu’il reste à évaluer.",fhintDec:"La décision de Stan, dite et justifiée : c’est à quoi renvoient les « STEP A, C… ».",fhintStatus:"Votre statut prime toujours sur le verdict de Stan — et il s’enregistre aussitôt.",tourT:{ident:"Votre page",live:"Le direct",goal:"Le sourcing du matin",funnel:"Le tunnel",tuto:"L’étape en cours",demand:"Évaluer une société",dec:"Pourquoi cette décision",status:"Votre statut",learn:"Vos 👍 / 👎",tools:"Sortir de la page",crit:"Le paramétrage de Stan"},csLabel:"Votre statut :",csKept:"Retenu",csAnalysed:"Analysé",csPending:"À trancher",csValidated:"Validé",csOut:"Écarté",csYes:"✓ Oui",csNo:"✗ Non",csSaved:"✓ enreg.",csNoteSaved:"note ajoutée ✓",csNoteOk:"OK",csNotePh:"Pourquoi ? (une ligne)",csAnaConfirm:"Aucun mémo sur ce dossier — le passer en Analysé quand même ?",whySend:"Envoyer",whyYesPh:"Pourquoi ce OUI ? (une ligne — ça affine votre thèse)",whyNoPh:"Pourquoi ce NON ? (une ligne — ça affine votre thèse)",stgLabel:"Votre avancement :",stg:[["todo","○ À faire"],["sent","✉ Contactée"],["replied","💬 A répondu"],["meeting","🤝 RDV"],["loi","📄 LOI"],["signed","✅ Signée"],["lost","✖ Perdue"]],j4Badge:t=>`⏰ Sans réponse depuis ${t} j — relancer ?`,actRepeche:"↩ Repêcher",actErr:"Envoi impossible — réessayez dans un instant.",actNotPersisted:"Impossible d’enregistrer ce statut sur ce dossier.",decidedYes:t=>`${t} validée — place à l’approche`,decidedNo:t=>`${t} écartée`,repeched:t=>`${t} repêchée — de retour dans Retenues`,critHypTitle:"Notre hypothèse sur votre stratégie",critHypSub:"Toute la sélection en découle. Si elle est à côté, corrigez-la ci-dessous — la recherche est réalignée et vous recevez une sélection corrigée.",critProfilsTitle:"Vos profils de cibles",critProfilsSub:"Les familles de cibles que la machine traque en continu — chaque profil se déplie.",critLookFor:"Ce que nous recherchons",critRuleOut:"Ce que nous écartons",critGateTitle:"Le crible de Stan — comment il décide Retenu / Écarté",critGateSub:"Chaque société est confrontée à ces critères. C’est à eux que renvoient les « STEP A, C… » des raisons affichées sur les lignes.",rubricTitle:"Comment Stan décide l’analyse (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Une fois retenu, Stan approfondit et tranche. Voici ce qui fait pencher la balance.",qvTitle:"Les verdicts de Stan — où va chaque dossier",qv:[["CALL PENDING","le choix n°1 de Stan : à trancher OUI/NON maintenant → onglet « À trancher »."],["CALL YES","vous avez tranché OUI — le dossier rejoint « Validées », place à l’approche."],["CALL NO","vous avez tranché NON — le dossier rejoint « Écartées »."],["CONSIDER","solide, mérite un regard plus attentif → onglet « Analysées »."],["MONITOR","à surveiller, pas prioritaire pour l’instant → onglet « Analysées »."],["PASS","non pertinent pour le moment → onglet « Écartées »."]],brTitle:"Le routage automatique — où le verdict de Stan envoie chaque dossier",br:[["Retenu","MATCH — retenue au sourcing, mémo à venir → onglet « Retenues »"],["Analysé","CONSIDER · MONITOR — mémo fait, pas de call → onglet « Analysées »"],["À trancher","CALL PENDING — Stan propose un call, votre OUI/NON est attendu → onglet « À trancher »"],["Validé","CALL YES — vous avez tranché OUI → onglet « Validées »"],["Écarté","NO MATCH · PASS · CALL NO — refus de Stan, ou votre NON sur un call → onglet « Écartées »"]],brNote:"Un CALL passe par 3 états : CALL PENDING (le mémo est TERMINÉ, Stan propose le call — votre décision est en attente) › CALL YES (vous validez) › CALL NO (vous écartez). PENDING ne veut jamais dire « en cours d’analyse » : l’analyse est déjà faite.",vt:{MATCH:"MATCH — retenu : correspond à vos critères.","NO MATCH":"NO MATCH — écarté par vos critères.","CALL PENDING":"CALL — le choix n°1 de Stan : à trancher OUI/NON maintenant.","CALL YES":"CALL YES — vous avez tranché OUI : le dossier rejoint « Validées ».","CALL NO":"CALL NO — vous avez tranché NON : le dossier rejoint « Écartées ».",CONSIDER:"CONSIDER — solide, mérite un regard plus attentif.",MONITOR:"MONITOR — à surveiller, pas prioritaire pour l’instant.",PASS:"PASS — non pertinent pour le moment."},vKept:"Retenu",vOut:"Écarté",learnLine:"Comme sur Netflix, chaque 👍/👎 affine ce que Stan vous montre ensuite — vous jugez, il apprend.",learnLink:"Ajuster mes critères →",funnelHint:"Retrouvez ici toutes vos cibles sourcées automatiquement dans <b>évaluées</b> puis passez celles que vous souhaitez contacter dans <b>validées</b>.",fhintClose:"Masquer cette aide",queueTitle:"File de traitement",queueDone:(t,a)=>`<b>${t} / ${a}</b> mémos générés`,queueTomorrow:"À VENIR — ORDRE PROJETÉ, RECALCULÉ CHAQUE MATIN",queueToday:"ANALYSÉS AUJOURD’HUI",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugConfigured:"Configuré",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(t,a)=>`<b>${t}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:t=>`${t} passées au crible`,alertTitle:"🔔 Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"VOS ANGLES D’ACQUISITION",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarBusy:"🧬 Recherche…",similarNote:"Les retenues entrent dans votre liste au prochain rafraîchissement.",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:t=>`actualisée le ${t}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:t=>`actualisée le ${t}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:t=>`Onboarding lancé pour ${t} — suivez l’avancement dans le cockpit`,rsOpen:"🔎 Rechercher des sociétés à évaluer",rsUrlPh:"coller l’URL d’un article, d’une vidéo ou d’une note",rsTextPh:"Coller ici l’article complet",rsOr:"ou",rsGo:"🔎 Résumer et rechercher des sociétés",rsHint:"RÉSUMÉ · CARTE MENTALE · SOCIÉTÉS",rsRunning:"Lecture en cours…",rsRunningVid:"Transcription de la vidéo…",rsElapsed:t=>`${t} s`,rsNeed:"Collez une URL, ou le texte complet de l’article.",rsFound:t=>t?`${t} société${t>1?"s":""} à évaluer — déjà dans la liste ci-dessous.`:"Aucune société nommée dans ce contenu.",rsLink:"Voir la recherche ↗",rsPublishing:"Publication de la fiche…",rsPublishFail:"Fiche produite, page non publiée",rsTags:"TAGS",rsClose:"Fermer",rsMindmap:"CARTE MENTALE",rsSource:"Source ↗",groupEngine:"Moteur",groupNone:"Rien",browse:t=>`Parcourir les ${t}`,chainAll:t=>`Enchaîner les ${t}`,colCompany:"SOCIÉTÉ & DESCRIPTION",grpCount:(t,a)=>`${t} à envoyer sur ${a} sourcées`,emptyTab:"AUCUNE CIBLE DANS CET ONGLET",emptyScope:"AUCUNE SOCIÉTÉ DANS CE PÉRIMÈTRE"},or={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Everything STAN ran through the screen on this window: every company judged against your criteria, kept or discarded automatically.","STAN kept these companies against your criteria, decisions justified. WE verify its picks — discard, validate, or launch an analysis on the uncertain ones.","STAN’s memos, reviewed by US: quantified synergies, argued verdict. Validate the ones to contact, set “to decide” where you hesitate.","YOUR move: the best targets, presented on Monday by your Corporate Developer. Call YES or NO — your yeses move to Validated.","Your YESES — the shortlist to contact. WE prepare the approach, or engage it on your behalf (Enterprise plan).","Discarded by STAN or by YOU. Every NO sharpens Stan’s criteria. Recover one anytime.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(t,a,r)=>`<b>${t} Stan CALL${t>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${r} awaiting answer.</b>`,morningThesis:(t,a)=>`<b>${t}</b> compan${t===1?"y was":"ies were"} sourced this morning by our engines.`+(a?` <b>${a}</b> still to screen.`:' <span class="ok">All screened.</span>'),morningEval:t=>`▶ Work through them (${t})`,identTitle:t=>`Targets for ${t}`,identCoverage:"MARKET COVERAGE",identCoverageOf:(t,a)=>`<b>${t}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"MEMO ENGINE",identPerDay:"memo/day",identPending:t=>`→ ${t} queued`,identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Reverse sort order",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:t=>`Decision undone on ${t}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ YES",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:t=>`${t} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"SCREEN · MEMO",colScore:"SCORE",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:t=>`Since Stan’s verdict: ${t} d`,waitChip:t=>`⏱ ${t} d`,densList:"LIST",densOpen:"OPEN",densMaxi:"CARDS",memoSynth:"SUMMARY",memoOpenFull:"📖 Read the full memo →",memoDeep:"⚡ Detailed memo",memoDeepHint:"For this file to decide, you can launch the detailed analysis: market study, competitive quadrant, scenarios.",memoDeepSent:t=>`Detailed memo launched on ${t} — ready in 35 to 40 minutes`,memoInstantSent:t=>`Analysis launched on ${t} — memo ready in ~15 minutes`,memoNone:"No memo for this file yet — launch the analysis.",creditsCap:"MEMO CREDITS",creditsToday:"today",creditsRecharge:"Top up →",creditsCost:t=>`−${t} credit${t>1?"s":""}`,creditsNone:"Out of credits — top up or wait for tomorrow 7am.",rechargeTitle:"Memo credits",rechargeHint:t=>`Your plan includes <b>${t} credits per day</b>, refilled every morning. Need more right now?`,rechargeNote:"Purchased credits never expire. They are used after your daily credits.",rechargeBuy:"Add",rechargeUnit:(t,a)=>`${t} credits — €${a}`,onbTag:"PRIVATE PREVIEW · READ ONLY",onbTitle:t=>`Your deal flow is ready — <b>${t} targets kept</b> by Stan`,onbSub:t=>`${t} companies screened against your thesis. The first ten rows are open; the rest unlocks in thirty minutes.`,onbSteps:[["Stan studied your online presence","Website, job posts, press — it inferred your acquisition angles."],["It screened the market","Every company checked against your criteria."],["It wrote memos","Quantified analyses, synergies, verdicts."],["Your turn to decide","Thirty minutes to tune your deal flow and unlock everything."]],onbCta:"Pick a slot →",lockbarText:"Let’s set up your dream deal flow in 30 minutes",lockbarCta:"Pick a slot",rdvHeading:"Let’s set up your ideal deal flow in 30 minutes",rdvSubBefore:"Pick a slot below, or reach your Corporate Development expert directly at ",rdvSubMid:" or by email at ",rdvCoFallback:"your company",rdvUnlockLabel:t=>`Unlock ${t}`,rdvUnlocks:t=>[["Access every target you kept","Full investment memos, synergies, contacts, approach angle."],["Acquisition strategy built with you","Hypothesis + acquisition strategy recalibrated live, with you."],["Let’s decide together on the targets you want","YES / NO, sourcing of similar companies, export and CRM sync."],["Your AI Corporate Developer is live",`Stan works for ${t} every morning — all you have to do is decide.`]],funScreened:t=>`companies screened${t?` since ${t}`:""}`,funKept:"kept as serious targets",funAnalyzed:"analysed in depth",funShown:"presented here to gather your view",funToday:t=>`incl. ${t} today`,actTitle:"Last 30 days of activity",actScreened:"screened",actKept:"kept",actToday:"today",fstatsShow:"Show the last 30 days of activity",fstatsHide:"Hide activity",sinceTitle:(t,a)=>`${t} new target${t>1?"s":""} since your last visit (${a})`,sinceMore:t=>`+${t} more`,sinceOut:t=>`${t} left the list`,identSyncConfirm:"Relaunch sourcing now? An engine pass takes a few minutes.",plugAutoOn:t=>`⚡ Automatic sending ACTIVE (${t}) — every target you validate goes into the sequence on its own.`,plugAutoOff:"Automatic sending off — validating a target sends it nowhere.",plugCrm:"Create the records in my CRM",plugCrmHint:"Paste your tool’s webhook URL: every decision lands there right away.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Save",plugSaved:"Webhook saved",plugTest:"Test",plugTested:"Test sent",plugTestThrottled:"Already tested less than 5s ago — nothing was sent.",plugRemove:"Remove",plugRemoved:"Webhook removed",plugMcp:"Claude & AI (MCP)",plugBulk:"Contact my targets",plugBulkHint:"See who would go out first: the preview contacts nobody.",plugBulkTabs:[["valides","Validated"],["call","To decide"],["retenus","Kept"]],plugBulkPreview:"👁 Preview",bulkArm:"📤 Send for real",bulkNoDest:"No destination saved: set up your tool above first.",bulkScope:"What goes out is the whole server-side tab — not the filtered view on screen.",bulkWarn:(t,a)=>`You are about to contact ${t} compan${t>1?"ies":"y"} via ${a}. This cannot be undone, and the server does not check whether they were already contacted.`,bulkConfirm:t=>`Yes, send via ${t}`,bulkCancel:"Cancel",bulkSending:"Sending…",bulkDone:(t,a,r)=>`${t} compan${t>1?"ies":"y"} sent. ${a} reachable on LinkedIn only, ${r} with no email.`,bulkNone:"No company had an email: nothing was sent.",bulkLocked:(t,a)=>`Sent on ${t} — ${a} compan${a>1?"ies":"y"}. Next send available in 24 h.`,bulkPreviewFirst:"Run the preview first: it says exactly who would go out.",cdConviction:"Conviction",cdAnalyse:"Analysis",cdSociete:"Company",cdContact:"Contact",cdSuivi:"Follow-up",cdCrible:"screening",cdMemo:t=>t?`after ${t} memo`:"after memo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict on",cdSector:"Sector",cdStage:"Stage",cdCountry:"Where",cdSite:"Website",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Detected on",cdName:"Decision-maker",cdEmail:"Email",cdCeoStatus:"Your decision",cdEngagement:"Engagement",qaTitle:"Describe this company",qaHint:"Reads its website, then four blocks: who it serves, what it sells, how it makes money, and what to remember. No verdict — the screening already decided.",qaRun:"📄 Describe",qaBusy:"Reading the website…",qaVP:"Who, and for what problem",qaProduct:"What it sells",qaModel:"How it makes money",qaSummary:"Takeaway",qaSources:t=>`${t} page${t>1?"s":""} read`,qaQuota:"Daily cap reached: try again tomorrow.",qaEmpty:"The website says nothing usable — nothing was invented.",dsBtn:"🗂 Committee pack",dsHint:"One A4 per company: the screening verdict and its reason, the identity, the analysis when it was run, and your decision. No financial figures — we receive none.",dsTitle:t=>`Committee pack — ${t} compan${t>1?"ies":"y"}`,dsCap:(t,a)=>`The first ${t} of ${a}: a committee will not read ${a} pages.`,dsWhy:"Why this company is in front of you",dsAnalysis:"What it does",dsDecision:"Your decision",dsEmpty:"No company in the current selection.",dsFoot:t=>`Selection by Proplace for ${t} — internal document, do not circulate.`,covFunnel:"Your market, screened",covScreened:t=>`${t} companies screened`,covOf:t=>`out of ~${t} relevant companies`,covNoEst:"Your addressable market is not sized yet: coverage will show as soon as it is.",covPace:t=>`${t} companies screened per day`,covEta:t=>t<=0?"Your market is fully covered.":t<60?`Full coverage in ~${t} days at this pace.`:`Full coverage in ~${Math.round(t/30)} months at this pace.`,covRate:"Analysis pace",covRateHint:"How many kept companies get a reasoned verdict each day. At zero, analysis is paused.",covRateNow:t=>t<=0?"Paused":`${t} per day`,covKept:"kept",covAna:"analysed",covShown:"shown here",bulkReplayed:"This send was already recorded: nothing went out again. Your targets were contacted once.",bulkPending:"The previous send is still running: nothing was sent again.",plugBulkResult:(t,a,r)=>`${t} would go by email · ${a} by LinkedIn · ${r} with no contact.`,memoAlertTitle:"🔔 Your memo alert",memoAlertSub:"Get an email as soon as one of your fund’s memos is finalised — with its direct link.",memoAlertToggle:"Send me every finished memo",memoAlertEmail:"Recipient",memoAlertSaved:"Saved ✓",memoAlertErr:"Could not save — try again",memoAlertSections:"Sections of the email",memoAlertSec:[["swot","SWOT"],["action","Action plan"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Stan’s verdict"]],memoAlertPreview:"👁 Preview",memoAlertBtn:"Your memo alert",alertTabDaily:"Daily",alertTabWeekly:"Weekly",alertSections:"Sections of the email",alertSec:[["pending","Files to decide on"],["stats","Your key numbers"],["autonomous","Stan’s automatic decisions"],["market","Market analysis"],["sourcing","Your sourcing of the day"]],alertSecSlow:"(slower to generate)",alertSecNote:"Unticking the market analysis makes the preview instant.",alertPreview:"👁 Preview today’s email",alertPreviewWeekly:"👁 Preview the weekly",alertSubject:"Subject:",alertPreviewBusy:"Preview being generated, try again in a few seconds.",alertPreviewRetry:t=>`Generating — new attempt in ${t}s…`,alertPreviewFail:"Preview unavailable right now — untick “Market analysis” to get it immediately.",alertPreviewEmpty:"Right now: nothing to decide on — the email will not go out.",alertTest:"✉ Send me a test",alertTestOk:t=>`✓ Sent to ${t} — check your spam/promotions too.`,alertTestHint:"Does not affect the daily send.",alertWeeklySub:"One email a week: the week in review and what your thesis learned from your decisions.",alertWeeklyOn:"📬 Receive your week in review",alertWeeklyWhen:"Day and time (Paris)",alertDow:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],alertLoadError:"Could not load your preferences.",alertThrottled:"Too fast — wait a few seconds and set it again.",alertInactive:"Your access is not active yet — let’s talk about it.",alertNoLead:"Recipient to be set with us.",exportViewTitle:"CSV of the filtered view",exportViewDesc:t=>`The ${t} rows of your current selection — tab, facets, search and window included. Semicolon separated, ready for Excel.`,exportViewBtn:"Download",exportViewDone:t=>`${t} row${t>1?"s":""} exported`,printTitle:"Print the selection",printDesc:t=>`The ${t} rows on screen, on A4: who it is for, as of when, the funnel figures, then the list. The map, filters and buttons are not printed.`,printBtn:"Print",exportViewHead:"Company|Status|Stan verdict|Score|Country|Sector|Post-YES stage|Contact|Email|Memo link|Date|Reason",tourStart:"Start the step-by-step guide",tourIntro:"The guided tour covers the whole page A to Z, on the live page: each step spotlights the exact spot — from your thesis to your email alert.",tourStep:(t,a)=>`Step ${t}/${a}`,tourPrev:"← Previous",tourNext:"Next →",tourDone:"Finish",tourClose:"Close",tourPlayTitle:"Guided tour",ahaATitle1:"1 file awaits your decision",ahaATitleN:t=>`${t} files await your decision`,ahaABody:"YES = we prepare the approach; NO = we sharpen the aim.",ahaABtn:"Decide now →",ahaBTitle:"A full memo is waiting for you",ahaBBody:t=>`${t} already has its analysis memo — a 3-minute read.`,ahaBBtn:"Open the memo →",ahaCTitle:"Your first targets are here",ahaCBody:"Tell us if the aim is right — every signal sharpens the machine.",ahaCBtn:"See my criteria →",howto:[["**Set your targeting.** Open “Your criteria”: it’s your thesis — what you look for and what you rule out. Fix it in plain language whenever something is off; the next morning’s sourcing realigns on its own.","crit"],["**Source as many targets as you can.** Evaluate a company by pasting its name or website — or a whole list — and watch your engines comb the web with your settings.","eval"],["**Move every target through the funnel, left to right** — Evaluated › Kept › Analysed › To decide › Validated › Ruled out. On each card, “Your status” files it in one click; your “why” note stays visible. The 👍/👎 never file anything: they sharpen your thesis.","tab1"],["**Settle the “To decide”.** Stan leaves you the final word: YES (Validated) or NO (Ruled out), with a word on the why.","tab3"],["**Understand how Stan sorts your targets.** Your status always overrides Stan’s verdict. The bridge between the two is explained in “Your criteria”: Kept ↔ MATCH, Analysed ↔ CONSIDER · MONITOR, To decide ↔ CALL, Ruled out ↔ NO MATCH · PASS…","crit"],["**Focus on the Validated** — and take every file all the way to closing!","tab4"],["**Push all of this out of the page.** The 🔌 button wires it into your tools: send your targets to your emailing sequence, create the records in your CRM, enrich the files you already have there.","plug"],["**Only come back when it’s worth it.** The 🔔 button sets two emails: the daily one for files to decide on, and the week in review.","alert"]],fhintLive:"What is moving on your market right now — click a tile to open the source.",fhintGoal:"What the engines sourced overnight, and what is left to evaluate.",fhintDec:"Stan’s decision, stated and justified: this is what the “STEP A, C…” refer to.",fhintStatus:"Your status always overrides Stan’s verdict — and it is saved right away.",tourT:{ident:"Your page",live:"Live",goal:"This morning’s sourcing",funnel:"The funnel",tuto:"The current step",demand:"Evaluate a company",dec:"Why this decision",status:"Your status",learn:"Your 👍 / 👎",tools:"Out of the page",crit:"Stan’s settings"},csLabel:"Your status:",csKept:"Kept",csAnalysed:"Analysed",csPending:"To decide",csValidated:"Validated",csOut:"Ruled out",csYes:"✓ Yes",csNo:"✗ No",csSaved:"✓ saved",csNoteSaved:"note added ✓",csNoteOk:"OK",csNotePh:"Why? (one line)",csAnaConfirm:"No memo on this file — mark it Analysed anyway?",whySend:"Send",whyYesPh:"Why this YES? (one line — it sharpens your thesis)",whyNoPh:"Why this NO? (one line — it sharpens your thesis)",stgLabel:"Your progress:",stg:[["todo","○ To do"],["sent","✉ Contacted"],["replied","💬 Replied"],["meeting","🤝 Meeting"],["loi","📄 LOI"],["signed","✅ Signed"],["lost","✖ Lost"]],j4Badge:t=>`⏰ No reply for ${t} days — follow up?`,actRepeche:"↩ Recover",actErr:"Could not save — try again in a moment.",actNotPersisted:"This status cannot be saved on this record.",decidedYes:t=>`${t} validated — on to the approach`,decidedNo:t=>`${t} ruled out`,repeched:t=>`${t} recovered — back in Kept`,critHypTitle:"Our hypothesis about your strategy",critHypSub:"The whole selection follows from it. If it is off, correct it below — the search is realigned and you get a corrected selection.",critProfilsTitle:"Your target profiles",critProfilsSub:"The families of targets the machine tracks continuously — each profile unfolds.",critLookFor:"What we look for",critRuleOut:"What we rule out",critGateTitle:"Stan’s screen — how it decides Kept / Ruled out",critGateSub:"Every company is checked against these criteria. They are what the “STEP A, C…” in the reasons on each row refer to.",rubricTitle:"How Stan decides the analysis (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Once kept, Stan digs deeper and rules. Here’s what tips the balance.",qvTitle:"Stan’s verdicts — where each file goes",qv:[["CALL PENDING","Stan’s top pick: decide YES/NO now → “To decide” tab."],["CALL YES","you decided YES — the file joins “Validated”, on to the approach."],["CALL NO","you decided NO — the file joins “Ruled out”."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],brTitle:"Automatic routing — where Stan’s verdict sends each file",br:[["Kept","MATCH — kept at sourcing, memo to come → “Kept” tab"],["Analysed","CONSIDER · MONITOR — memo done, no call → “Analysed” tab"],["To decide","CALL PENDING — Stan proposes a call, your YES/NO is awaited → “To decide” tab"],["Validated","CALL YES — you ruled YES → “Validated” tab"],["Ruled out","NO MATCH · PASS · CALL NO — Stan’s refusal, or your NO on a call → “Ruled out” tab"]],brNote:"A CALL goes through 3 states: CALL PENDING (the memo is DONE, Stan proposes the call — your decision is awaited) › CALL YES (you validate) › CALL NO (you rule out). PENDING never means “being analysed”: the analysis is already done.",vt:{MATCH:"MATCH — kept: it fits your criteria.","NO MATCH":"NO MATCH — ruled out by your criteria.","CALL PENDING":"CALL — Stan’s top pick: worth a YES/NO decision now.","CALL YES":"CALL YES — you ruled YES: the file joins “Validated”.","CALL NO":"CALL NO — you ruled NO: the file joins “Ruled out”.",CONSIDER:"CONSIDER — solid, worth a closer look.",MONITOR:"MONITOR — keep an eye on it, not a priority yet.",PASS:"PASS — not relevant right now."},vKept:"Kept",vOut:"Ruled out",learnLine:"Like Netflix, every 👍/👎 sharpens what Stan shows you next — you judge, it learns.",learnLink:"Tune my criteria →",funnelHint:"Find here all your automatically sourced targets in <b>evaluated</b>, then move the ones you want to contact into <b>validated</b>.",fhintClose:"Hide this hint",queueTitle:"Processing queue",queueDone:(t,a)=>`<b>${t} / ${a}</b> memos generated`,queueTomorrow:"UP NEXT — PROJECTED ORDER, RECOMPUTED EVERY MORNING",queueToday:"ANALYZED TODAY",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugConfigured:"Configured",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(t,a)=>`<b>${t}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:t=>`${t} screened`,alertTitle:"🔔 Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"YOUR ACQUISITION ANGLES",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarBusy:"🧬 Searching…",similarNote:"The kept ones enter your list at the next refresh.",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:t=>`updated ${t}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:t=>`updated ${t}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:t=>`Onboarding launched for ${t} — track progress in the cockpit`,rsOpen:"🔎 Find companies to evaluate",rsUrlPh:"paste the URL of an article, a video or a note",rsTextPh:"Paste the full article here",rsOr:"or",rsGo:"🔎 Summarize and find companies",rsHint:"SUMMARY · MIND MAP · COMPANIES",rsRunning:"Reading…",rsRunningVid:"Transcribing the video…",rsElapsed:t=>`${t}s`,rsNeed:"Paste a URL, or the full text of the article.",rsFound:t=>t?`${t} compan${t>1?"ies":"y"} to evaluate — already in the list below.`:"No company named in this content.",rsLink:"See the research ↗",rsPublishing:"Publishing the note…",rsPublishFail:"Note produced, page not published",rsTags:"TAGS",rsClose:"Close",rsMindmap:"MIND MAP",rsSource:"Source ↗",groupEngine:"Engine",groupNone:"None",browse:t=>`Browse the ${t}`,chainAll:t=>`Chain the ${t}`,colCompany:"COMPANY & DESCRIPTION",grpCount:(t,a)=>`${t} to send out of ${a} sourced`,emptyTab:"NO TARGET IN THIS TAB",emptyScope:"NO COMPANY IN THIS SCOPE"},sr={fr:{...ft.fr,...nr},en:{...ft.en,...or}},ir=`.atl2{
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
.atl2 .bulk .side .hint{white-space:nowrap}`,lr=`
/* coque : hauteur pilotée par le montage (page /carte, iframe onglet ⑤, démo home) */
.atl2{height:var(--atelier-h,calc(100dvh - 60px));display:block;position:relative;overflow:hidden;border-radius:inherit}
.atl2 .app{height:100%}

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
  .atl2 .app > .ticker{order:10}
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
.atl2 .dmulti.dsearch{color:var(--brand-d)}
.atl2 .dmulti.dsearch.on{font-weight:700}

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

@media (max-width:760px){
  .atl2 .rsp{flex-direction:column}
  .atl2 .rsp .side{width:100%}
  .atl2 .rscard .rsbody{flex-direction:column;max-height:300px}
  .atl2 .rscard .rsmm{width:100%;max-width:none}
}
`,dr=ir+lr;function cr(t){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(t)||""}catch{return""}}function pr(t,a){return t||a.mode!=="client"||!a.token?"visiteur":cr("teaser")==="1"?"apercu":"client"}const ur={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!1,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0,showMorning:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0}},mr=t=>ur[t],Se=t=>Object.assign(t,{continent:ba(t.cc)});function Xe(t){const a=new Set,r=[];for(const n of t){const s=(n.name||"").toLowerCase();!s||a.has(s)||(a.add(s),r.push(n))}return r}const fr=60*60*1e3;function xr(t){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+t)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>fr?null:a}catch{return null}}function Be(t,a){try{sessionStorage.setItem("ppmap:swr:"+t,JSON.stringify({...a,ts:Date.now()}))}catch{}}const gr=t=>t==="default"?"":t==="ops"?"ops":"research:"+t.research;function hr(t,a,r="default"){const n=r!=="default",s=p.useMemo(()=>t||n?{mode:"anon"}:pa(),[t,n]),o=p.useMemo(()=>n?"visiteur":pr(t,s),[t,s,n]),c=p.useMemo(()=>mr(o),[o]),i=o!=="visiteur",d=gr(r),[m,h]=p.useState([]),[l,b]=p.useState(""),[v,x]=p.useState(null),[f,g]=p.useState(null),[u,y]=p.useState(null),[S,w]=p.useState(()=>new Map),[C,j]=p.useState(()=>new Map),[E,N]=p.useState(""),[q,B]=p.useState(new Set),[M,T]=p.useState(null),[$,F]=p.useState(!0),[Q,D]=p.useState(!1),[ie,me]=p.useState(0),[he,be]=p.useState(0),P=p.useRef(0),ce=p.useMemo(()=>{var U;if(o!=="client")return"";try{return((U=ua())==null?void 0:U.email)||""}catch{return""}},[o]);p.useEffect(()=>{const U=++P.current;let _=!0;const I=()=>_&&U===P.current,O=(i&&s.token?s.token:"pub:"+a)+(d?":"+d:""),K=xr(O);return K?(h(K.objs.map(Se)),K.fund&&b(K.fund),x(K.marketEstimate??null),g(K.criteria??null),y(K.stats??null),N(K.generatedAt||""),F(!1)):F(!0),(async()=>{try{if(r==="ops"){const G=await Ke(),te=((G==null?void 0:G.recent_ops)||[]).map(Z=>Qe(Z,a)).filter(Z=>!!Z);if(!I())return;h(te.map(Se)),Be(O,{objs:te})}else if(typeof r=="object"){const te=(await xt()||[]).filter(ee=>(ee.slug||"")===r.research).map(ee=>gt(ee,a)).filter(ee=>!!ee),Z=Xe(await ht(te,a));if(!I())return;h(Z.map(Se)),Be(O,{objs:Z})}else if(i&&s.token){const G=ma(s.token),te=Ke(),Z=fa(s.token),ee=xa(s.token),ve=ga(s.token),H=await G;let le=H?H.targets:[];I()&&H&&(b(H.fund||""),x(H.marketEstimate??null),g(H.criteria??null),y(H.stats??null),N(H.generatedAt||""),h(le.map(Se)),F(!1),D(!1));const[pe,ye,xe,A]=await Promise.all([te,Z,ee,ve]),Y=((pe==null?void 0:pe.recent_ops)||[]).map(W=>Qe(W,a)).filter(W=>!!W);if(le=[...le,...Y],!I())return;h(le.map(Se));const J=new Set;for(const W of ye){const ue=(W.id||W.co||"").toString().trim().toLowerCase();ue&&J.add(ue.startsWith("t:")?ue:"t:"+ue)}B(J),w(xe),j(A),H&&Be(O,{fund:H.fund,marketEstimate:H.marketEstimate,criteria:H.criteria,stats:H.stats,generatedAt:H.generatedAt,objs:le})}else{const G=ha(),te=xt(),Z=Ke(),ee=await G;I()&&ee.length&&(h(Xe(ee).map(Se)),F(!1),D(!1));const[ve,H]=await Promise.all([te,Z]),le=(ve||[]).map(A=>gt(A,a)).filter(A=>!!A),pe=await ht(le,a),ye=((H==null?void 0:H.recent_ops)||[]).map(A=>Qe(A,a)).filter(A=>!!A),xe=Xe([...ee,...pe,...ye]);if(!I())return;h(xe.map(Se)),Be(O,{objs:xe})}I()&&D(!1)}catch{I()&&!K&&D(!0)}finally{I()&&F(!1)}})(),()=>{_=!1}},[i,s.token,a,ie,d]),p.useEffect(()=>{if(!c.showCredits||!ce){T(null);return}let U=!0;return(async()=>{try{const _=await fetch(`${at}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:ce})});if(!_.ok)return;const I=await _.json();U&&I&&I.ok!==!1&&T(I)}catch{}})(),()=>{U=!1}},[c.showCredits,ce,he]);const V=p.useCallback(U=>B(new Set(U)),[]);return{session:s,mode:o,caps:c,fund:l,email:ce,marketEstimate:v,generatedAt:E,criteria:f,stats:u,thumbs:S,stages:C,dossiers:m,favIds:q,setFavIds:V,credits:M,reloadCredits:()=>be(U=>U+1),loading:$,error:Q,refresh:()=>me(U=>U+1)}}const _t=()=>({win:"all",day:"",status:"all",signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],search:""}),br=(t="europe",a=!1,r)=>({continent:t,ptab:(r==null?void 0:r.ptab)??1,dens:(r==null?void 0:r.dens)??"liste",filters:{..._t(),...(r==null?void 0:r.filters)||{}},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,modal:(r==null?void 0:r.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,memoTab:0,undo:[],mapFolded:a});function vr(t,a){switch(a.type){case"continent":return{...t,continent:a.key,filters:{...t.filters,country:[]},shown:{},popupId:null,openFacet:null};case"ptab":return{...t,ptab:a.tab,shown:{},popupId:null};case"dens":return{...t,dens:a.dens,shown:{}};case"filters":return{...t,filters:{...t.filters,...a.patch},shown:{}};case"toggleFacet":{const r=t.filters[a.facet],n=r.includes(a.value)?r.filter(s=>s!==a.value):[...r,a.value];return{...t,filters:{...t.filters,[a.facet]:n},shown:{}}}case"toggleMemoLevel":{const r=t.filters.memoLevel,n=r.includes(a.value)?r.filter(s=>s!==a.value):[...r,a.value];return{...t,filters:{...t.filters,memoLevel:n},shown:{}}}case"clearFacet":return{...t,filters:{...t.filters,[a.facet]:[]},shown:{}};case"reset":return{...t,filters:_t(),shown:{},openFacet:null};case"sort":return{...t,sort:t.sort.key===a.key?{key:a.key,dir:t.sort.dir*-1}:{key:a.key,dir:a.key==="signal"||a.key==="amount"||a.key==="score"?-1:1}};case"groupBy":return{...t,groupBy:a.groupBy};case"more":return{...t,shown:{...t.shown,[a.group]:(t.shown[a.group]||_e)+a.by}};case"pile":return{...t,pileMode:a.on,popupId:null};case"openFacet":return{...t,openFacet:t.openFacet===a.facet?null:a.facet};case"popup":return{...t,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"modal":return{...t,modal:a.modal,popupId:a.modal?null:t.popupId};case"chainStart":return{...t,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...t,chain:{...t.chain,idx:t.chain.idx+1}};case"spaceTab":return{...t,spaceTab:a.tab};case"memoConsole":return{...t,memoConsole:a.id,memoTab:0};case"memoTab":return{...t,memoTab:a.tab};case"undoPush":return{...t,undo:[...t.undo,a.entry].slice(-50)};case"undoPop":return{...t,undo:t.undo.slice(0,-1)};case"mapFold":return{...t,mapFolded:a.folded,openFacet:null};default:return t}}const _e=60;function lt(t,a,r,n){if(n!=="signal"&&a.signalOnly&&(!ne(t)||a.signalEngines.length&&!a.signalEngines.includes(t.engine||""))||n!=="dealKind"&&a.dealKind.length&&!a.dealKind.includes(t.dealKind||"")||n!=="sector"&&a.sector.length&&!a.sector.includes(t.sector||"")||n!=="engine"&&a.engine.length&&!a.engine.includes(t.engine||"")||n!=="stage"&&a.stage.length&&!a.stage.includes(t.stage||"")||n!=="angle"&&r&&a.angle.length&&!a.angle.includes(t.angle||"")||n!=="memoLevel"&&r&&a.memoLevel.length&&!a.memoLevel.includes(rt(t)))return!1;if(n!=="win"){if(a.day){if((t.date||"").slice(0,10)!==a.day)return!1}else if(a.win!=="all"){const s=a.win==="1"?0:a.win==="7"?7:30;if(Te(t.date)>s)return!1}}if(n!=="status"&&!r&&a.status!=="all"&&Ee(t)!==a.status)return!1;if(n!=="search"&&a.search.trim()){const s=a.search.trim().toLowerCase();if(!`${t.name||""} ${t.tagline||""} ${t.sector||""}`.toLowerCase().includes(s))return!1}return!0}function Ht(t,a,r){return t.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(t.cc||"")?!1:lt(t,a.filters,r)}function yr(t,a,r,n){return!(!Ht(t,a,r)||r&&!va(t,a.ptab,n))}function dt(t,a){const r=a.key,n=s=>{switch(r){case"name":return(s.name||"").toLowerCase();case"country":return s.countryLabel||s.cc||"";case"stage":return s.stage||"";case"amount":return s.amountEur||-1;case"age":return-Te(s.date);case"score":return typeof s.score=="number"?s.score:-1;case"signal":{const o=ne(s);return o?100-(o.left??0):-1}}};return[...t].sort((s,o)=>{const c=n(s),i=n(o);return c<i?-a.dir:c>i?a.dir:(s.name||"").localeCompare(o.name||"")})}function wr(){const{dossiers:t,st:a,t:r,dispatch:n,contName:s,pipe:o}=z(),c=p.useMemo(()=>{const d=l=>o?!0:l.continent===a.continent,m=t.filter(l=>d(l)&&ne(l)),h=t.filter(l=>d(l)&&l.kind==="op"&&!ne(l)&&(l.dealKind==="ma"||l.dealKind==="levee")&&Te(l.date)<=2);return h.sort((l,b)=>(b.amountEur||0)-(l.amountEur||0)),[...dt(m,{key:"signal",dir:-1}),...h].slice(0,40)},[t,a.continent,o]),i=d=>c.map(m=>e.jsxs("button",{type:"button",className:"tk"+(de(m)?" spent":""),onClick:h=>{const l=h.currentTarget.getBoundingClientRect();n({type:"popup",id:m.id,anchor:{x:l.left+l.width/2,y:l.bottom}})},title:m.name+(m.tagline?" — "+m.tagline:""),children:[e.jsx(qe,{o:m}),e.jsxs("span",{className:"who",children:[e.jsx(Jt,{o:m}),e.jsx("span",{className:"co",children:m.name})]}),typeof m.amountEur=="number"&&m.amountEur>0&&e.jsx("span",{className:"am",children:Wn(m.amountEur)}),m.sector&&e.jsx("span",{className:"mt",children:m.sector}),e.jsx(Ye,{o:m}),e.jsx("span",{className:"tkgo",children:"→"})]},d+(m.id||m.name)));return e.jsxs("div",{className:"ticker",children:[e.jsxs("span",{className:"lbl",children:[e.jsx("i",{}),r.live,e.jsx("span",{className:"cnt",children:c.length})]}),e.jsx("div",{className:"win",children:c.length?e.jsxs("div",{className:"run",children:[i(0),i(1)]}):e.jsx("div",{className:"run",style:{animation:"none"},children:e.jsx("span",{className:"tk quiet",children:r.liveQuiet(s)})})})]})}const kr="aDx8z7Hzksus",Yt="+33 6 83 10 72 86",Ct="alexandre@proplace.co",jr=`tel:${Yt.replace(/[^\d+]/g,"")}`,Et="pp-rdv-slot";function Nr(){const t=typeof document<"u"&&document.getElementById("rdv");return t?(t.scrollIntoView({behavior:"smooth",block:"start"}),!0):!1}function Sr(){const{t,caps:a,fund:r}=z(),n=a.showOnb,s=r||t.rdvCoFallback;return e.jsxs("section",{id:"rdv",className:`pp-rdv${n?" is-teaser":""}`,children:[e.jsx("style",{children:Er}),e.jsx("h2",{children:t.rdvHeading}),e.jsxs("p",{className:"pp-rdv-sub",children:[t.rdvSubBefore,e.jsx("a",{href:jr,children:Yt}),t.rdvSubMid,e.jsx("a",{href:`mailto:${Ct}`,children:Ct})]}),n&&e.jsx("div",{className:"pp-rdv-unlocks",children:t.rdvUnlocks(s).map(([o,c],i)=>e.jsxs("div",{className:"pp-rdv-u",children:[e.jsx("em",{children:t.rdvUnlockLabel(i+1)}),e.jsx("b",{children:o}),e.jsx("span",{children:c})]},o))}),e.jsx("div",{className:"pp-rdv-emb",children:e.jsx(rr,{filloutId:kr,parameters:r?{company_name:r}:void 0})})]})}function Cr(){const[t,a]=p.useState(()=>typeof document>"u"?null:document.getElementById(Et));return p.useEffect(()=>{t||a(document.getElementById(Et))},[t]),t?Me.createPortal(e.jsx(Sr,{}),t):null}const Er=`
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
`;class ae extends p.Component{constructor(){super(...arguments);mt(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(r,n){console.error(`[atl2] bandeau « ${this.props.name} » en échec :`,r,n.componentStack)}render(){return this.state.dead?this.props.fallback??null:this.props.children}}const zr=8;function Tr(){const{t,lang:a,token:r,dossiers:n,caps:s,markRow:o,dispatch:c}=z(),[i,d]=p.useState(!1),[m,h]=p.useState(!1),[l,b]=p.useState(!1),v=r||"home",{names:x,verdicts:f}=p.useMemo(()=>{const w=[],C={};return n.forEach(j=>{j.kind!=="target"||!j.name||(w.push(j.name),C[j.name]=ya(j)||"")}),{names:w,verdicts:C}},[n]),g=p.useMemo(()=>x.length?wa(v,x,f,a):null,[v,x.length]);if(!s.pipe||i||!g||g.firstVisit||!g.added.length&&!g.gone.length)return null;const u=m?g.added:g.added.slice(0,zr),y=g.added.length-u.length,S=w=>{const C=n.find(j=>j.name===w);C&&(o(C.id),c({type:"popup",id:C.id}))};return e.jsxs("div",{className:"since",children:[e.jsxs("div",{className:"since-h",children:[e.jsxs("b",{children:["✨ ",t.sinceTitle(g.added.length,g.lastDate)]}),e.jsx("button",{type:"button",className:"x","aria-label":t.tourClose,title:t.tourClose,onClick:()=>{d(!0),ka(v,x,f,g.fp,a)},children:"×"})]}),!!g.added.length&&e.jsxs("div",{className:"since-c",children:[u.map(w=>e.jsx("button",{type:"button",onClick:()=>S(w),children:w},w)),y>0&&e.jsx("button",{type:"button",className:"mr",onClick:()=>h(!0),children:t.sinceMore(y)})]}),!!g.gone.length&&e.jsxs("div",{className:"since-c",children:[e.jsx("button",{type:"button",className:"mr",onClick:()=>b(w=>!w),children:t.sinceOut(g.gone.length)}),l&&g.gone.slice(0,20).map(w=>e.jsx("span",{className:"gone",children:w},w))]})]})}const Ze=600,Ce=62,zt="atl2:fstats";function Ar(){const{t,lang:a,data:r,caps:n,st:s,dispatch:o}=z(),[c,i]=p.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem(zt)==="on"}catch{return!1}}),d=r.stats,m=p.useMemo(()=>((d==null?void 0:d.by_day)||[]).slice(-30),[d]),h=p.useMemo(()=>{if(d!=null&&d.since)return d.since;const y=new Date;return y.setDate(y.getDate()-((d==null?void 0:d.window_days)||30)),y.toISOString().slice(0,10)},[d==null?void 0:d.since,d==null?void 0:d.window_days]);if(!n.showFunnel||!d||typeof d.screened!="number")return null;const l=y=>a==="en"?y.slice(5,10):`${y.slice(8,10)}/${y.slice(5,7)}`,b=y=>y.toLocaleString(a==="en"?"en-US":"fr-FR"),v=m.reduce((y,S)=>Math.max(y,S.s||0),0),x=m.length?Ze/m.length:0,f=Math.max(4,x-4),g=m.length>=5&&v>0,u=[[d.screened,t.funScreened(l(h)),d.screened_today],...typeof d.kept=="number"?[[d.kept,t.funKept,d.kept_today]]:[],...typeof d.analyzed=="number"?[[d.analyzed,t.funAnalyzed,d.analyzed_today]]:[],...typeof d.shown=="number"?[[d.shown,t.funShown,void 0]]:[]];return e.jsxs("div",{className:"fstats"+(c?" on":""),children:[e.jsxs("div",{className:"fst-row",children:[u.map(([y,S,w],C)=>e.jsxs("span",{className:"fst-t",children:[C>0&&e.jsx("span",{className:"fst-ar",children:"→"}),e.jsx("b",{children:b(y)}),e.jsx("i",{children:S}),c&&typeof w=="number"&&w>0&&e.jsx("em",{children:t.funToday(w)})]},S)),g&&e.jsx("button",{type:"button",className:"fst-x","aria-expanded":c,title:c?t.fstatsHide:t.fstatsShow,onClick:()=>{const y=!c;i(y),y&&!s.mapFolded&&o({type:"mapFold",folded:!0});try{localStorage.setItem(zt,y?"on":"off")}catch{}},children:c?"⌃":"⌄"})]}),c&&g&&e.jsxs("div",{className:"fst-act",children:[e.jsxs("div",{className:"fst-ah",children:[e.jsx("span",{children:t.actTitle}),e.jsxs("span",{className:"fst-lg",children:[e.jsx("i",{style:{background:"#185c38"}}),t.actKept]}),e.jsxs("span",{className:"fst-lg",children:[e.jsx("i",{style:{background:"#cfe0d6"}}),t.actScreened]})]}),e.jsxs("svg",{viewBox:`0 0 ${Ze} ${Ce}`,preserveAspectRatio:"none",role:"img","aria-label":t.actTitle,children:[m.map((y,S)=>{const w=(y.s||0)/v*(Ce-4),C=(y.m||0)/v*(Ce-4),j=S*x+(x-f)/2;return e.jsxs("g",{children:[e.jsx("title",{children:`${l(y.d)} — ${y.s} ${t.actScreened} · ${y.m} ${t.actKept}`}),e.jsx("rect",{x:j,y:Ce-2-w,width:f,height:w,fill:"#cfe0d6"}),e.jsx("rect",{x:j,y:Ce-2-C,width:f,height:C,fill:"#185c38"})]},y.d)}),e.jsx("line",{x1:0,y1:Ce-1.5,x2:Ze,y2:Ce-1.5,stroke:"#dbe5df",strokeWidth:1})]}),e.jsxs("div",{className:"fst-ax",children:[e.jsx("span",{children:l(m[0].d)}),e.jsx("span",{children:t.actToday})]})]})]})}const Lr=[["Retenu","csKept"],["Analysé","csAnalysed"],["À trancher","csPending"],["Validé","csValidated"],["Écarté","csOut"]];function qr({o:t}){const{t:a,caps:r,canWrite:n,commitStatus:s}=z(),[o,c]=p.useState(""),[i,d]=p.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const m=(t.ceoStatus||"").trim(),h=(Ae(t)||"").startsWith("CALL")&&se(t)===3,l=se(t)>=2,b=async x=>{if(o||x==="Analysé"&&!t.memoUrl&&!window.confirm(a.csAnaConfirm))return;c(x);const f=await s(t,x);c(""),f&&(d(!0),setTimeout(()=>d(!1),2200))},v=h?[["Validé",a.csYes],["Écarté",a.csNo]]:Lr.filter(([x])=>!(l&&x==="Retenu")).map(([x,f])=>[x,a[f]]);return e.jsxs("div",{className:"csp",onClick:x=>x.stopPropagation(),children:[e.jsxs("div",{className:"csrow",children:[e.jsx("span",{className:"cslb",children:a.csLabel}),v.map(([x,f])=>e.jsx("button",{type:"button",className:"csb"+(m===x?" on":"")+(o===x?" busy":""),disabled:!!o,onClick:()=>{b(x)},children:f},x)),i&&e.jsx("span",{className:"csok",children:a.csSaved})]}),e.jsx(Rr,{o:t})]})}function Rr({o:t}){const{t:a,saveNote:r,flash:n}=z(),[s,o]=p.useState(t.ceoNote||""),[c,i]=p.useState(!1),[d,m]=p.useState(!1),h=s.trim()!==(t.ceoNote||"").trim(),l=async()=>{if(c||!h)return;i(!0);const b=await r(t,s.trim());i(!1),b&&(m(!0),setTimeout(()=>m(!1),2200),n(a.csNoteSaved))};return e.jsxs("div",{className:"csnote",children:[e.jsx("input",{type:"text",maxLength:200,placeholder:a.csNotePh,value:s,disabled:c,onChange:b=>o(b.target.value),onKeyDown:b=>{b.key==="Enter"&&l()}}),e.jsx("button",{type:"button",disabled:c||!h,onClick:()=>{l()},children:d?a.csNoteSaved:a.csNoteOk})]})}function Or({placeholder:t,onDone:a}){const{t:r}=z(),[n,s]=p.useState("");return e.jsxs("div",{className:"csnote why",children:[e.jsx("input",{type:"text",maxLength:200,placeholder:t,value:n,autoFocus:!0,onChange:o=>s(o.target.value),onKeyDown:o=>{o.key==="Enter"&&a(n.trim()),o.key==="Escape"&&a("")},onBlur:()=>{n.trim()||a("")}}),e.jsx("button",{type:"button",onClick:()=>a(n.trim()),children:r.whySend})]})}function Fr({o:t}){var g;const{t:a,token:r,caps:n,canWrite:s,stageOf:o,setStage:c,flashErr:i}=z(),[d,m]=p.useState(!1);if(!n.pipe||!s||n.lockActions||se(t)!==4)return null;const h=o(t),l=(h==null?void 0:h.stage)||"todo",b=async u=>{if(d||u===l)return;m(!0);const y=h;c(t,{stage:u,stamps:(h==null?void 0:h.stamps)||{}});const S=Math.max(Date.now(),Tt+=1);Tt=S;const w=await ja(r,{company:t.name||"",stage:u,cts:S,deal_id:t.airtableId,check_id:t.checkId});m(!1),!w.stale&&(w.ok||(c(t,y),i(a.actErr)))},v=(g=h==null?void 0:h.stamps)==null?void 0:g.sent,x=v?Math.floor((Date.now()-Date.parse(v))/864e5):0,f=l==="sent"&&v&&x>=4;return e.jsxs("div",{className:"stg",onClick:u=>u.stopPropagation(),children:[e.jsx("span",{className:"stglb",children:a.stgLabel}),a.stg.map(([u,y])=>e.jsx("button",{type:"button",className:"stgb"+(l===u?" on":""),disabled:d,onClick:()=>{b(u)},children:y},u)),f&&e.jsx("span",{className:"stgj4",children:a.j4Badge(x)})]})}let Tt=0;const $e=8,Ue=340;function At({text:t}){const a=t.split(/\*\*(.+?)\*\*/g);return e.jsx(e.Fragment,{children:a.map((r,n)=>n%2?e.jsx("b",{children:r},n):e.jsx("span",{children:r},n))})}function Mr({steps:t,onClose:a}){const{t:r,dispatch:n,counts:s,scoped:o,byId:c,st:i}=z(),[d,m]=p.useState(0),[h,l]=p.useState(null),[b,v]=p.useState([]),x=p.useRef(!1);p.useEffect(()=>{x.current||(x.current=!0,v(t.filter(C=>!!document.querySelector(C.need||C.sel))))},[t]);const f=b[d],g=d>=b.length;p.useEffect(()=>{f&&(f.ptab!==void 0&&i.ptab!==f.ptab&&n({type:"ptab",tab:f.ptab}),f.dens&&i.dens!==f.dens&&n({type:"dens",dens:f.dens}))},[d,f]);const u=p.useCallback(()=>{if(!f){l(null);return}const C=document.querySelector(f.sel);if(!C){l(null);return}C.scrollIntoView({block:"nearest",behavior:"smooth"}),l(C.getBoundingClientRect())},[f]);p.useLayoutEffect(()=>{u();const C=window.setTimeout(u,260),j=()=>u();return window.addEventListener("scroll",j,!0),window.addEventListener("resize",j),()=>{window.clearTimeout(C),window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j)}},[u]);const y=p.useRef(a);if(y.current=a,p.useEffect(()=>{const C=j=>{j.key==="Escape"?(j.preventDefault(),j.stopPropagation(),y.current()):j.key==="ArrowRight"?m(E=>E+1):j.key==="ArrowLeft"&&m(E=>Math.max(0,E-1))};return document.addEventListener("keydown",C,!0),()=>document.removeEventListener("keydown",C,!0)},[]),!b.length)return null;let S=null;if(g){const C=s[3]||0,j=o.find(E=>E.memoUrl)||[...c.values()].find(E=>E.memoUrl);C>0?S={title:C===1?r.ahaATitle1:r.ahaATitleN(C),body:r.ahaABody,btn:r.ahaABtn,go:()=>{n({type:"ptab",tab:3}),a()}}:j?S={title:r.ahaBTitle,body:r.ahaBBody(j.name),btn:r.ahaBBtn,go:()=>{n({type:"memoConsole",id:j.id}),a()}}:S={title:r.ahaCTitle,body:r.ahaCBody,btn:r.ahaCBtn,go:()=>{n({type:"modal",modal:"crit"}),a()}}}let w={left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:Ue};if(!g&&h){const C=h.bottom+14,E=window.innerHeight-C>190?C:Math.max(12,h.top-200);w={left:Math.min(Math.max(12,h.left+h.width/2-Ue/2),window.innerWidth-Ue-12),top:E,width:Ue}}return Me.createPortal(e.jsx("div",{className:"atl2",children:e.jsxs("div",{className:"tour",role:"dialog","aria-modal":"true",children:[!g&&h&&e.jsx("div",{className:"tour-hole",style:{left:h.left-$e,top:h.top-$e,width:h.width+$e*2,height:h.height+$e*2}}),(g||!h)&&e.jsx("div",{className:"tour-veil"}),e.jsxs("div",{className:"tour-card"+(g?" fin":""),style:w,children:[g&&S?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:S.title}),e.jsx("p",{children:e.jsx(At,{text:S.body})}),e.jsxs("div",{className:"tour-nav",children:[e.jsx("button",{type:"button",className:"gh",onClick:()=>m(b.length-1),children:r.tourPrev}),e.jsx("button",{type:"button",className:"pri",onClick:S.go,children:S.btn})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"tour-n",children:r.tourStep(d+1,b.length)}),e.jsx("h3",{children:f==null?void 0:f.title}),e.jsx("p",{children:e.jsx(At,{text:(f==null?void 0:f.body)||""})}),e.jsxs("div",{className:"tour-nav",children:[e.jsx("button",{type:"button",className:"gh",disabled:d===0,onClick:()=>m(C=>Math.max(0,C-1)),children:r.tourPrev}),e.jsx("button",{type:"button",className:"pri",onClick:()=>m(C=>C+1),children:d===b.length-1?r.tourDone:r.tourNext})]})]}),e.jsx("button",{type:"button",className:"tour-x","aria-label":r.tourClose,title:r.tourClose,onClick:a,children:"×"})]})]})}),document.body)}function Dr(){const{dossiers:t,scopedAll:a,pipe:r,mode:n,t:s,st:o,dispatch:c}=z(),i=r?a:t,d=p.useMemo(()=>i.filter(u=>Te(u.date)===0&&u.kind==="target"),[i]),m=p.useMemo(()=>r?a.filter(u=>se(u)===0).slice().sort((u,y)=>(y.date||"").localeCompare(u.date||"")):[],[a,r]),h=p.useMemo(()=>d.filter(u=>r?se(u)===0:!de(u)),[d,r]),l=r?m:h,b=r?a.length-m.length:d.length-h.length,v=r?a.length:d.length,x=v?Math.min(100,b/v*100):100;let f;r?f=s.morningThesis(d.length,m.length):d.length?b===0?f=s.goalSourced(d.length):b>=d.length?f=s.goalCleared:f=s.goalDone(b,d.length):f=s.goalSourced(0);const g=()=>{if(!r){c({type:"pile",on:!0});return}c({type:"ptab",tab:0}),n==="client"&&m.length&&c({type:"chainStart",queue:m.map(u=>u.id)})};return e.jsxs("div",{className:"goal",children:[e.jsx("span",{className:"gtxt",dangerouslySetInnerHTML:{__html:f}}),e.jsx("div",{className:"pbar",children:e.jsx("i",{style:{width:x+"%"}})}),l.length>0&&e.jsx("button",{type:"button",className:"pilebtn",onClick:g,children:r?s.morningEval(l.length):o.pileMode?s.goalContinue(l.length):s.goalTreat}),e.jsx("span",{className:"gspace"})]})}function Pr(){var B,M;const{t,lang:a,st:r,dispatch:n,token:s,fund:o,data:c,dossiers:i,mode:d,doSync:m,startTour:h}=z(),[l,b]=p.useState(null),[v,x]=p.useState([]),f=d==="client";p.useEffect(()=>{if(!s||!o)return;let T=!0;return(async()=>{const[$,F]=await Promise.all([nt(o),Bt(s)]);T&&($&&b($),x(F))})(),()=>{T=!1}},[s,o]);const g=(l==null?void 0:l.per_day)??null,u=((B=l==null?void 0:l.pool_order)==null?void 0:B.length)??0,y=v.filter(T=>T.status==="running").length,S=p.useMemo(()=>i.filter(T=>T.kind==="target"&&de(T)).length,[i]),w=c.marketEstimate,C=typeof((M=c.stats)==null?void 0:M.screened)=="number"?c.stats.screened:S,j=w&&w>0?Math.min(100,Math.round(C/w*100)):null,E=T=>T.toLocaleString(a==="en"?"en-US":"fr-FR"),N=(o||"P").split(/\s+/).map(T=>T[0]).join("").slice(0,2).toUpperCase(),q=(()=>{const T=Date.parse(c.generatedAt||"");if(Number.isNaN(T))return"";const $=new Date(T),F=Q=>String(Q).padStart(2,"0");return`${F($.getDate())}/${F($.getMonth()+1)} à ${F($.getHours())}:${F($.getMinutes())}`})();return e.jsxs("div",{className:"ident",children:[e.jsxs("div",{className:"idtop",children:[e.jsxs("span",{className:"brand",children:[e.jsx("b",{children:N}),e.jsx("i",{children:o})]}),e.jsx("h1",{children:t.identTitle(o||"…")}),e.jsx("span",{className:"idsp"}),q&&e.jsx("span",{className:"idupd",children:t.identUpdatedAt(q)}),e.jsx("button",{type:"button",className:"ic",title:t.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),e.jsx("button",{type:"button",className:"ic",title:t.tourPlayTitle,onClick:h,children:"▶"})]}),e.jsxs("div",{className:"idmain",children:[j===null&&C>0&&e.jsxs("span",{className:"cover",title:t.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[e.jsx("span",{className:"el",children:t.identCoverage}),e.jsx("span",{className:"ev",children:e.jsx("b",{children:E(C)})})]}),j!==null&&w&&e.jsxs("span",{className:"cover",title:t.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[e.jsx("span",{className:"el",children:t.identCoverage}),e.jsxs("span",{className:"ev",children:[e.jsx("span",{className:"bar",children:e.jsx("i",{style:{width:j+"%"}})}),e.jsxs("b",{children:[j," %"]})]}),e.jsx("span",{className:"edv"}),e.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:t.identCoverageOf(C,w)}})]}),e.jsxs("span",{className:"engine",title:t.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[e.jsx("span",{className:"el",children:t.identEngine}),g!==null&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"ev",children:[e.jsx("b",{className:"q",children:g})," ",t.identPerDay]}),e.jsx("span",{className:"edv"})]}),g===0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"epause",title:t.identPauseTitle,children:t.identPause}),e.jsx("span",{className:"edv"})]}),y>0&&e.jsxs("span",{className:"ev",children:["⏳ ",y]}),e.jsx("span",{className:"ego",children:t.identPending(u)}),e.jsx("button",{type:"button",className:"ebell",title:t.memoAlertBtn,onClick:T=>{T.stopPropagation(),n({type:"modal",modal:"memoalert"})},children:"🔔"})]}),e.jsx("span",{className:"idsp"}),e.jsxs("span",{className:"icgrp",children:[e.jsx("button",{type:"button",className:"ic",title:t.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),e.jsx("button",{type:"button",className:"ic",title:t.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),e.jsx("button",{type:"button",className:"ic",title:t.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),e.jsx("button",{type:"button",className:"ic",title:t.identSync,disabled:!f,onClick:m,children:"🔄"})]}),e.jsxs("span",{className:"isrch",children:["🔍",e.jsx("input",{placeholder:t.identSearch,value:r.filters.search,onChange:T=>n({type:"filters",patch:{search:T.target.value}})})]})]})]})}function Ir(){const{t,counts:a,dispatch:r}=z();return e.jsxs("div",{className:"onb",children:[e.jsxs("div",{className:"onbh",children:[e.jsxs("span",{className:"tag",children:[e.jsx("i",{}),t.onbTag]}),e.jsx("h2",{dangerouslySetInnerHTML:{__html:t.onbTitle(a[1]+a[2]+a[3])}}),e.jsx("div",{className:"sub",children:t.onbSub(a[7])})]}),e.jsx("div",{className:"steps4",children:t.onbSteps.map(([n,s],o)=>{const c=o===t.onbSteps.length-1;return e.jsxs("div",{className:"s4"+(c?" go":""),children:[e.jsx("span",{className:"s4n",children:o+1}),e.jsx("div",{className:"s4t",children:n}),e.jsx("div",{className:"s4d",children:s}),c&&e.jsx("button",{type:"button",className:"s4b p",onClick:()=>r({type:"modal",modal:"rdv"}),children:t.onbCta})]},o)})})]})}const Br=["--p0","--p1","--p2","--p3","--p4"];function $r(){const{st:t,dispatch:a,counts:r,t:n,doUndo:s}=z(),o=p.useRef({});p.useEffect(()=>{o.current={...r}},[r]);const c=m=>{const h=o.current[m],l=h!==void 0?r[m]-h:0;return e.jsxs("button",{type:"button",className:"step"+(m===3&&r[3]>0?" wait":""),style:{"--c":`var(${Br[m]})`,"--tc":m<=3?"var(--ink)":"#fff"},"aria-selected":t.ptab===m,title:n.phelp[m],onClick:()=>a({type:"ptab",tab:m}),children:[e.jsxs("span",{className:"l",children:[n.plabels[m].toUpperCase(),m===3&&r[3]>0&&e.jsx("i",{className:"wd"})]}),e.jsxs("span",{className:"n"+(l>0?" up":l<0?" down":""),children:[r[m],l!==0&&e.jsxs("em",{className:"delta",children:[l>0?"+":"−",Math.abs(l)]})]})]},m)},i=(m,h,l)=>e.jsxs("button",{type:"button",className:"off"+(h?" view":""),style:{"--c":m===5?"var(--p5)":m===6?"var(--pf)":"var(--pv)"},"aria-selected":t.ptab===m,title:n.phelp[m],onClick:()=>a({type:"ptab",tab:m}),children:[e.jsx("span",{className:"l",children:l.toUpperCase()}),e.jsx("span",{className:"n",children:r[m]})]},m),d=(m,h,l,b=!1)=>e.jsx("button",{type:"button",className:"tool",title:h,disabled:b,onClick:l,children:m},h);return e.jsxs("div",{className:"funnel",children:[e.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(c)}),e.jsxs("div",{className:"offtrack",children:[i(5,!1,n.plabels[5]),i(7,!0,n.plabels[7]),i(6,!0,"★ "+n.plabels[6])]}),e.jsxs("span",{className:"ftools",children:[d("↩",n.toolUndo,s,t.undo.length===0),d("↺",n.toolReset,()=>{a({type:"reset"})}),d("⇅",n.toolSort,()=>a({type:"sort",key:t.sort.key})),d("▶",n.toolTuto,()=>a({type:"modal",modal:"tuto"})),d("⚙",n.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}const Ur=["#eef1f5","#eaf6ef","#e2f0e8","#fdf3e2","#e2efe7","#fdeaea","#fdf6de","#e8eaee"];function Vr(){const{st:t,dispatch:a,t:r,scoped:n,memoQueued:s,doAnalyse:o,mode:c}=z(),i=p.useRef(null),[d,m]=p.useState(60);p.useEffect(()=>{let v=0;const x=()=>{var S;const f=i.current;if(!f)return;const g=(S=f.parentElement)==null?void 0:S.querySelector('.funnel [aria-selected="true"]');if(!g)return;const u=g.getBoundingClientRect(),y=f.getBoundingClientRect();m(Math.max(20,Math.min(u.left+u.width/2-y.left,y.width-30)))};return v=requestAnimationFrame(x),window.addEventListener("resize",x),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",x)}},[t.ptab]);const h=t.ptab;let l=r.tuto[h].p;if(h===3){const v=n.filter(g=>g.kind==="target"&&se(g)===3),x=v.filter(g=>et(g)==="auto").length,f=v.filter(g=>et(g)==="cd").length;l=r.tutoPending(x,f,v.length)}const b=(()=>{if(c!=="client")return null;if(h===0&&n.length)return{label:r.tuto[0].a,run:()=>a({type:"chainStart",queue:n.map(v=>v.id)})};if(h===1){const v=n.filter(x=>x.kind==="target"&&se(x)===1&&!s.has(x.id)).slice(0,10);if(v.length)return{label:r.tuto[1].a,run:()=>v.forEach(x=>o(x))}}return null})();return e.jsxs("div",{ref:i,className:"tuto mini",style:{"--bg":Ur[h],"--ax":d+"px","--stc":"var(--ink)"},children:[e.jsx("span",{className:"txt",children:e.jsxs("p",{children:[e.jsx("b",{className:"tstep",children:r.plabels[h].toUpperCase()}),e.jsx("span",{dangerouslySetInnerHTML:{__html:l}})]})}),b&&e.jsx("button",{type:"button",className:"tprim",onClick:b.run,children:b.label})]})}const Lt=["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"];function qt(t){let a=2166136261;for(let r=0;r<t.length;r++)a^=t.charCodeAt(r),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function _r(t,a){const[r,n]=p.useState(1);return p.useEffect(()=>{let s=!0,o=0;const c=()=>{var m;if(!s)return;const d=(m=t.current)==null?void 0:m.getScreenCTM();d&&d.a>0?n(d.a):o=requestAnimationFrame(c)};c();const i=new ResizeObserver(()=>c());return t.current&&i.observe(t.current),window.addEventListener("resize",c),()=>{s=!1,cancelAnimationFrame(o),i.disconnect(),window.removeEventListener("resize",c)}},[t,a]),r}function Hr(){const{st:t,dispatch:a,scoped:r,pipe:n,markRow:s,markedId:o,byId:c,lang:i,t:d}=z(),m=p.useRef(null),h=p.useRef(null),l=ot.find(N=>N.key===t.continent),b=_r(m,t.continent+":"+t.mapFolded),[v,x]=p.useState(new Map),[f,g]=p.useState(null);p.useEffect(()=>{const N=m.current;if(!N)return;const q=new Map;N.querySelectorAll("path[data-i2]").forEach(B=>{const M=B.dataset.i2;if(M)try{const T=B.getBBox();T.width>0&&q.set(M,{x:T.x,y:T.y,w:T.width,h:T.height})}catch{}}),x(q)},[t.continent,b]);const u=p.useMemo(()=>r.filter(N=>N.cc),[r]),y=p.useMemo(()=>{const N=new Map;return u.forEach(q=>N.set(q.cc,(N.get(q.cc)||0)+1)),N},[u]),S=p.useMemo(()=>u.map(N=>{const q=N.cc?v.get(N.cc):void 0;if(!q)return null;const B=qt(N.name||N.id||""),M=qt((N.id||N.name||"")+"·y"),T=(B-.5)*Math.min(q.w*.55,60),$=(M-.5)*Math.min(q.h*.55,60);return{d:N,x:q.x+q.w/2+T,y:q.y+q.h/2+$}}).filter(N=>!!N),[u,v]),w=N=>b>0?N/b:N,C=p.useMemo(()=>n?[0,1,2,3,4,5].map(N=>({c:Lt[N],fr:d.plabels[N].toUpperCase(),en:d.plabels[N].toUpperCase(),n:r.filter(q=>q.kind==="target"&&se(q)===N).length})).filter(N=>N.n>0):bt.map((N,q)=>({...N,n:r.filter(B=>vt(B)===q).length})),[r,n,d.plabels]),j=o?c.get(o):null,E=j?S.find(N=>N.d.id===j.id):null;return e.jsxs("div",{className:"mapzone",ref:h,children:[e.jsxs("svg",{ref:m,viewBox:l.viewBox,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":i==="fr"?l.fr:l.en,onMouseLeave:()=>{g(null),s(null)},children:[e.jsx("g",{children:l.countries.map((N,q)=>e.jsx("g",{className:"ct"+(N.i2&&y.get(N.i2)?"":" empty"),children:e.jsx("path",{d:N.d,"data-i2":N.i2||void 0})},q))}),e.jsx("g",{children:S.map(N=>{const q=bt[vt(N.d)],B=!!ne(N.d),M=N.d.kind==="target",T=n&&M?Lt[se(N.d)]:q.c,$=!n&&de(N.d);return e.jsxs("g",{className:"co"+($?" done":""),onMouseEnter:()=>{var D,ie;const F=(D=h.current)==null?void 0:D.getBoundingClientRect(),Q=(ie=m.current)==null?void 0:ie.createSVGPoint();if(Q&&m.current&&F){Q.x=N.x,Q.y=N.y;const me=Q.matrixTransform(m.current.getScreenCTM());g({x:me.x-F.left,y:me.y-F.top,label:N.d.name+" · "+(Le(N.d.cc,i)||N.d.countryLabel||"")})}s(N.d.id)},onMouseLeave:()=>{g(null),s(null)},onClick:()=>{var D;const F=(D=m.current)==null?void 0:D.createSVGPoint();let Q=null;if(F&&m.current){F.x=N.x,F.y=N.y;const ie=F.matrixTransform(m.current.getScreenCTM());Q={x:ie.x,y:ie.y}}a({type:"popup",id:N.d.id,anchor:Q})},children:[e.jsx("circle",{className:"h",cx:N.x,cy:N.y,r:w(Math.max(11,q.px+7))}),e.jsx("circle",{className:"v",cx:N.x,cy:N.y,r:w(q.px),fill:T,stroke:B?"#DC2626":"#ffffff",strokeWidth:w(B?2.2:1.3)})]},N.d.id||N.d.name)})}),E&&e.jsx("circle",{className:"ring on",cx:E.x,cy:E.y,r:w(13),fill:"none",stroke:"#0F172A",strokeWidth:w(2)})]}),e.jsx("div",{className:"hov"+(f?" on":""),style:f?{left:f.x,top:f.y}:void 0,children:f==null?void 0:f.label}),e.jsx("div",{className:"legend",children:C.map((N,q)=>e.jsxs("span",{children:[e.jsx("i",{style:{"--c":N.c}}),i==="fr"?N.fr:N.en," ",e.jsx("b",{children:N.n})]},q))}),r.some(N=>!N.cc)&&e.jsx("div",{className:"legend",style:{left:"auto",right:10},children:e.jsxs("span",{children:["🌐 ",d.notLocated," ",e.jsx("b",{children:r.filter(N=>!N.cc).length})]})})]})}function Yr(t,a){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!r)return t;const s=(a==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||r[2],o=Number(r[3]);return a==="en"?`${s} ${o}, ${r[1]}`:`${o} ${s} ${r[1]}`}function Wr(){const{st:t,dispatch:a,dossiers:r,t:n,pipe:s,contName:o,lang:c}=z(),i=t.filters,d=p.useMemo(()=>r.filter(x=>x.continent===t.continent),[r,t.continent]),m=x=>d.filter(f=>x!=="country"&&i.country.length&&!i.country.includes(f.cc||"")?!1:lt(f,i,s,x==="country"?void 0:x)),h=p.useMemo(()=>{const x=m("win"),f=g=>x.filter(u=>(u.date?Math.max(0,Math.floor((Date.now()-Date.parse(u.date))/864e5)):9999)<=g).length;return[f(0),f(7),f(30),x.length]},[d,i,s]),l=p.useMemo(()=>i.day?m("win").filter(x=>(x.date||"").slice(0,10)===i.day).length:0,[d,i,s]),b=i.sector.length+i.country.length+i.engine.length+i.stage.length+i.angle.length+i.memoLevel.length+(i.signalOnly?1:0)+(i.day||i.win!=="all"?1:0)+(i.search.trim()?1:0),v=(x,f,g,u="fbtn")=>e.jsxs("button",{type:"button",className:u,"aria-expanded":t.openFacet===x,onClick:()=>a({type:"openFacet",facet:x}),children:[e.jsx("span",{className:"fl",children:f}),g>0&&e.jsx("span",{className:"n",children:g}),e.jsx("span",{className:"cv",children:"▾"})]},x);return e.jsxs(e.Fragment,{children:[e.jsxs("aside",{className:"fbar",children:[i.day?e.jsxs("div",{className:"seg",children:[e.jsxs("button",{type:"button","aria-pressed":!0,children:[n.fDay(Yr(i.day,c)),e.jsx("b",{children:l})]}),e.jsx("button",{type:"button",onClick:()=>a({type:"filters",patch:{day:"",win:"all"}}),children:n.fDayOff})]}):e.jsx("div",{className:"seg",children:["1","7","30","all"].map((x,f)=>e.jsxs("button",{type:"button","aria-pressed":i.win===x,onClick:()=>a({type:"filters",patch:{win:x}}),children:[n.dates[f],e.jsx("b",{children:h[f]})]},x))}),e.jsxs("span",{className:"fsrch",children:["🔍",e.jsx("input",{placeholder:n.identSearch,value:i.search,onChange:x=>a({type:"filters",patch:{search:x.target.value}})})]}),e.jsxs("div",{className:"facets",children:[e.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":t.openFacet==="sig",onClick:()=>a({type:"openFacet",facet:"sig"}),children:[e.jsx("span",{className:"fl",children:n.fSignal}),i.signalOnly&&e.jsx("span",{className:"n",children:i.signalEngines.length||"✓"}),e.jsx("span",{className:"cv",children:"▾"})]}),v("sec",n.fSector,i.sector.length),v("pay",n.fCountry,i.country.length),v("det",n.fEngine,i.engine.length),v("sta",n.fStage,i.stage.length),s&&v("ang","Angle",i.angle.length),s&&v("mem","Mémo",i.memoLevel.length)]}),e.jsx("span",{className:"fgrow"}),e.jsxs("div",{className:"frow2",children:[t.mapFolded&&e.jsxs("button",{type:"button",className:"mapbtn",onClick:()=>a({type:"mapFold",folded:!1}),children:["🗺 ",n.showMap.replace("🗺 ","")]}),b>0&&e.jsxs("button",{type:"button",className:"resetbtn on",title:n.clearTitle(d.length,o),onClick:()=>a({type:"reset"}),children:[e.jsx("span",{className:"rot",children:"↺"}),e.jsx("span",{children:n.clear(b)})]}),e.jsx("button",{type:"button",className:"alertbtn",onClick:()=>a({type:"modal",modal:"alert"}),children:n.alertBtn})]})]}),t.openFacet&&e.jsx(Gr,{poolFor:m})]})}function Gr({poolFor:t}){const{st:a,dispatch:r,t:n,lang:s}=z(),o=a.filters,c=a.openFacet,{title:i,cols:d,options:m}=p.useMemo(()=>{if(c==="sig"){const x=t("signal").filter(u=>ne(u)),f=new Map;x.forEach(u=>{const y=u.engine||"";f.set(y,(f.get(y)||0)+1)});const g=[{v:"*",label:n.fpSigAll,n:x.length,html:!0,on:o.signalOnly&&!o.signalEngines.length},...yt([...f.keys()],s).map(u=>({v:u,label:ze(u)+" "+ge(u,s),n:f.get(u)||0,html:!1,on:o.signalOnly&&o.signalEngines.includes(u)}))];return{title:n.fpSigTitle,cols:2,options:g}}if(c==="sec"){const x=t("sector"),f=new Map;return x.forEach(g=>{g.sector&&f.set(g.sector,(f.get(g.sector)||0)+1)}),{title:n.fSector.toUpperCase(),cols:3,options:[...f.entries()].sort((g,u)=>u[1]-g[1]).map(([g,u])=>({v:g,label:g,n:u,html:!1,on:o.sector.includes(g)}))}}if(c==="pay"){const x=t("country"),f=new Map;return x.forEach(g=>{g.cc&&f.set(g.cc,(f.get(g.cc)||0)+1)}),{title:n.fCountry.toUpperCase(),cols:3,options:[...f.entries()].sort((g,u)=>u[1]-g[1]).map(([g,u])=>({v:g,label:Le(g,s)||g,n:u,html:!1,on:o.country.includes(g)}))}}if(c==="det"){const x=t("engine"),f=new Map;return x.forEach(g=>{g.engine&&f.set(g.engine,(f.get(g.engine)||0)+1)}),{title:n.fEngine.toUpperCase(),cols:2,options:yt([...f.keys()],s).map(g=>({v:g,label:ze(g)+" "+ge(g,s)+' <span style="color:var(--dim);font-size:10px">· '+Na(Sa(g),s)+"</span>",n:f.get(g)||0,html:!0,on:o.engine.includes(g)}))}}if(c==="ang"){const x=t("angle"),f=new Map;return x.forEach(g=>{g.angle&&f.set(g.angle,(f.get(g.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...f.entries()].sort((g,u)=>u[1]-g[1]).map(([g,u])=>({v:g,label:g.replace(/[_-]+/g," "),n:u,html:!1,on:o.angle.includes(g)}))}}if(c==="mem"){const x=t("memoLevel"),f=new Map;x.forEach(u=>{if(u.kind==="target"){const y=rt(u);f.set(y,(f.get(y)||0)+1)}});const g=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(u=>({v:String(u),label:g[u],n:f.get(u)||0,html:!1,on:o.memoLevel.includes(u)}))}}const b=t("stage"),v=new Map;return b.forEach(x=>{x.stage&&v.set(x.stage,(v.get(x.stage)||0)+1)}),{title:n.fStage.toUpperCase(),cols:2,options:[...v.entries()].sort((x,f)=>f[1]-x[1]).map(([x,f])=>({v:x,label:x,n:f,html:!1,on:o.stage.includes(x)}))}},[c,a,s]),h=b=>{if(c==="sig"){if(b==="*")r({type:"filters",patch:{signalOnly:!(o.signalOnly&&!o.signalEngines.length),signalEngines:[]}});else{const x=o.signalEngines.includes(b)?o.signalEngines.filter(f=>f!==b):[...o.signalEngines,b];r({type:"filters",patch:{signalOnly:!0,signalEngines:x}})}return}if(c==="mem"){r({type:"toggleMemoLevel",value:Number(b)});return}r({type:"toggleFacet",facet:c==="sec"?"sector":c==="pay"?"country":c==="det"?"engine":c==="ang"?"angle":"stage",value:b})},l=()=>{r(c==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:c==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:c==="sec"?"sector":c==="pay"?"country":c==="det"?"engine":c==="ang"?"angle":"stage"})};return e.jsxs("div",{className:"fpanel on",children:[e.jsxs("div",{className:"ph",children:[e.jsx("b",{children:i}),e.jsx("span",{className:"sp"}),e.jsx("button",{type:"button",onClick:l,children:n.fpNone}),e.jsx("button",{type:"button",onClick:()=>r({type:"openFacet",facet:null}),children:n.fpClose})]}),e.jsx("div",{className:"fcols"+(d===2?" two":""),children:m.map(b=>e.jsxs("button",{type:"button",className:"opt","aria-pressed":b.on,onClick:()=>h(b.v),children:[e.jsx("span",{className:"bx"}),b.html?e.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:b.label}}):e.jsx("span",{className:"l",children:b.label}),e.jsx("span",{className:"n",children:b.n})]},b.v))}),e.jsxs("div",{className:"pf",children:[e.jsx("span",{className:"t",children:n.alertReady}),e.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:n.alertCreate})]})]})}const Rt=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function Kr(t){return String(t||"").split(`
`).map(a=>a.replace(/^#{1,6}\s*/,"").replace(/[*_`>]/g,"").trimEnd()).filter(a=>a.trim().length>0)}function Qr(){var xe;const{t,mode:a,token:r,email:n,askEvaluate:s,sessTally:o,dispatch:c,evalBusy:i,evalCards:d,caps:m,data:h}=z(),l=a==="client",[b,v]=p.useState(""),[x,f]=p.useState(!1),[g,u]=p.useState(""),[y,S]=p.useState(!1),[w,C]=p.useState(""),[j,E]=p.useState([]),N=p.useRef(!1),[q,B]=p.useState(!1),[M,T]=p.useState(""),[$,F]=p.useState(""),[Q,D]=p.useState(!1),[ie,me]=p.useState(0),[he,be]=p.useState(""),[P,ce]=p.useState(null),[V,U]=p.useState(null),_=p.useRef(!1),I=b.trim()?Rt.test(b.trim())?t.evalUrl:t.evalName:t.evalWaiting,O=p.useMemo(()=>g.split(`
`).map(A=>A.trim()).filter(Boolean).slice(0,15),[g]),K=j.length?j:d,G=h.credits;p.useEffect(()=>{if(!Q)return;me(0);const A=window.setInterval(()=>me(Y=>Y+1),1e3);return()=>window.clearInterval(A)},[Q]);const te=()=>{const A=b.trim();A&&(s(null,A),v(""))},Z=async()=>{if(!l){s(null,O[0]||"");return}if(!O.length||y)return;S(!0),N.current=!1;const A=[];for(let Y=0;Y<O.length&&!N.current;Y++){C(t.evaluating(Y+1,O.length,O[Y]));const J=await $t(r,O[Y],"atelier2");if(A.unshift({name:J.company||O[Y],verdict:J.verdict,reason:J.reason||"",remaining:J.remaining??null}),E([...A]),J.verdict==="quota"){A.unshift({name:"",verdict:"quota",reason:t.quota(O.length-Y-1),remaining:0}),E([...A]),u(O.slice(Y+1).join(`
`)),C(""),S(!1);return}}C(""),u(N.current?O.slice(A.length).join(`
`):""),S(!1)},ee=async()=>{var J;if(_.current)return;const A=M.trim().replace(/\s+/g,""),Y=$.trim();if(!A&&!Y){be(t.rsNeed);return}_.current=!0,be(""),ce(null),U(null),D(!0);try{const W=await Ea({url:A,text:Y,email:n,cbToken:r});if(D(!1),!W||W.status!=="success"){be((W==null?void 0:W.message)||"Erreur");return}ce(W),B(!1);const ue=(((J=W.prospective)==null?void 0:J.companies_to_evaluate)||[]).map(ke=>((ke==null?void 0:ke.name)||"").trim()).filter(Boolean);ue.length&&(u(ke=>{const De=ke.split(`
`).map(je=>je.trim()).filter(Boolean),We=new Set(De.map(je=>je.toLowerCase())),Ge=ue.filter(je=>!We.has(je.toLowerCase()));return[...De,...Ge].slice(0,15).join(`
`)}),f(!0)),U({state:"pending"});const we=await za(W,{email:n,cbToken:r});U(we.ok&&we.url?{state:"ok",url:we.url}:{state:"fail",msg:we.error||""})}finally{_.current=!1,D(!1)}},ve=(((xe=P==null?void 0:P.prospective)==null?void 0:xe.companies_to_evaluate)||[]).filter(A=>A&&A.name),H=[P==null?void 0:P.industry,...(P==null?void 0:P.market_tags)||[],P==null?void 0:P.author].map(A=>(A||"").trim()).filter(Boolean),le=(V==null?void 0:V.state)==="pending",pe=V&&(le?e.jsx("span",{className:"rslink pend",children:t.rsPublishing}):V.state==="ok"?e.jsx("a",{className:"rslink",href:V.url,target:"_blank",rel:"noopener noreferrer",children:t.rsLink}):e.jsx("span",{className:"rslink fail",title:V.msg,children:t.rsPublishFail})),ye=x&&ve.length>0;return e.jsxs("div",{className:"demand",children:[e.jsxs("div",{className:"drow",children:[e.jsxs("span",{className:"dfield",children:[e.jsx("input",{value:b,placeholder:t.evalPh,autoComplete:"off",maxLength:200,onChange:A=>v(A.target.value),onKeyDown:A=>{A.key==="Enter"&&te()}}),e.jsx("span",{className:"detect"+(Rt.test(b.trim())?" url":""),children:I})]}),e.jsxs("button",{type:"button",className:"evalbtn"+(i?" loading":""),disabled:i,onClick:te,children:[e.jsx("span",{className:"fill"}),t.evalGo]}),m.showCredits&&G&&e.jsxs("button",{type:"button",className:"credits"+(G.total_available<=0&&!G.unlimited?" empty":""),onClick:()=>c({type:"modal",modal:"recharge"}),children:[e.jsx("span",{className:"cl",children:t.creditsCap}),e.jsx("b",{children:G.unlimited?"∞":G.total_available}),!G.unlimited&&e.jsxs("span",{className:"cm",children:["/ ",G.daily_grant+G.purchased]}),G.total_available<=0&&!G.unlimited?e.jsx("span",{className:"rc",children:t.creditsRecharge}):e.jsx("span",{className:"cd",children:t.creditsToday})]})]}),e.jsxs("div",{className:"dunder",children:[e.jsx("button",{type:"button",className:"dmulti",onClick:()=>f(!x),children:t.evalMulti}),e.jsx("button",{type:"button",className:"dmulti dsearch"+(q?" on":""),onClick:()=>B(!q),children:t.rsOpen})]}),q&&e.jsxs("div",{className:"rsp on",children:[e.jsxs("div",{className:"rsf",children:[e.jsx("input",{className:"rsurl",value:M,placeholder:t.rsUrlPh,autoComplete:"off",spellCheck:!1,inputMode:"url",maxLength:600,onChange:A=>T(A.target.value),onKeyDown:A=>{A.key==="Enter"&&ee()}}),e.jsx("span",{className:"rsor",children:t.rsOr}),e.jsx("textarea",{className:"rstext",value:$,placeholder:t.rsTextPh,onChange:A=>F(A.target.value)})]}),e.jsxs("div",{className:"side",children:[e.jsxs("button",{type:"button",className:"evalbtn"+(Q?" loading":""),style:{justifyContent:"center"},disabled:Q||le||!M.trim()&&!$.trim(),onClick:()=>{ee()},children:[e.jsx("span",{className:"fill"}),Q?`${Ca(M.trim())==="youtube"&&M.trim()?t.rsRunningVid:t.rsRunning} ${t.rsElapsed(ie)}`:le?t.rsPublishing:t.rsGo]}),e.jsx("span",{className:"hint",children:t.rsHint})]})]}),he&&e.jsx("div",{className:"rserr",children:he}),P&&e.jsxs("div",{className:"rscard",children:[e.jsxs("div",{className:"rsh",children:[e.jsx("b",{children:P.title}),P.source_url&&e.jsx("a",{href:P.source_url,target:"_blank",rel:"noopener noreferrer",children:t.rsSource}),e.jsx("button",{type:"button",className:"rsx",title:t.rsClose,onClick:()=>{ce(null),U(null)},children:"×"})]}),P.market&&e.jsx("p",{className:"rsmk",children:P.market}),H.length>0&&e.jsxs("div",{className:"rstags",children:[e.jsx("em",{children:t.rsTags}),H.map(A=>e.jsx("span",{children:A},A))]}),e.jsxs("div",{className:"rsbody",children:[P.mindmap_png_b64&&e.jsxs("figure",{className:"rsmm",children:[e.jsx("img",{src:`data:image/png;base64,${P.mindmap_png_b64}`,alt:t.rsMindmap}),e.jsx("figcaption",{children:t.rsMindmap})]}),e.jsx("div",{className:"rssum",children:Kr(P.summary_md||"").map((A,Y)=>e.jsx("p",{children:A},Y))})]}),e.jsxs("div",{className:"rsfoot",children:[e.jsx("span",{children:t.rsFound(ve.length)}),!ye&&pe]})]}),x&&e.jsxs("div",{className:"bulk on",children:[e.jsx("textarea",{value:g,placeholder:t.bulkPh,onChange:A=>u(A.target.value.split(`
`).slice(0,15).join(`
`))}),e.jsxs("div",{className:"side",children:[e.jsxs("button",{type:"button",className:"evalbtn"+(y?" loading":""),style:{justifyContent:"center"},disabled:y||!O.length,onClick:()=>{Z()},children:[e.jsx("span",{className:"fill"}),y&&w?w:t.evalList]}),e.jsx("span",{className:"hint",children:t.bulkCount(O.length)}),ye&&pe]})]}),K.slice(0,1).map((A,Y)=>{const J=A.verdict==="kept",W=A.verdict==="quota",ue=J?"var(--brand)":W?"var(--bolt)":"var(--red)",we=J?"var(--brand-l)":W?"#FEF3C7":"#FEF2F2";return e.jsxs("div",{className:"result on",style:{"--c":ue,"--bgc":we},children:[e.jsx("span",{className:"vv",children:e.jsx("span",{className:"vp",children:J?"✓ "+t.kept:W?"⏳":"✗ "+t.dropped})}),A.name&&e.jsx("span",{className:"rn",children:A.name}),e.jsx("span",{className:"rr",children:A.reason?e.jsxs(e.Fragment,{children:[e.jsx("b",{children:t.why})," ",A.reason]}):null}),!W&&e.jsx("button",{type:"button",className:"go",onClick:()=>c({type:"modal",modal:"space"}),children:t.seeSpace(J?t.statusKeep.replace("✅ ",""):t.statusDrop.replace("❌ ",""))})]},Y)}),l&&(o.kept+o.dropped>0||K.length>0)&&e.jsxs("div",{className:"tally",children:[e.jsx("span",{dangerouslySetInnerHTML:{__html:t.session(o.kept,o.dropped)}})," ","·"," ",e.jsx("a",{onClick:()=>c({type:"modal",modal:"space"}),children:t.seeMySpace})]})]})}function Jr(t){return t.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Xr(){const{st:t,dispatch:a,byId:r,t:n,doDeep:s}=z(),o=t.memoConsole?r.get(t.memoConsole):null,c=p.useMemo(()=>o?[o.reasoning||"",Jr(o.summary||"")].filter(Boolean).join(`

`):"",[o]);if(!o)return null;const i=Ae(o),d=rt(o);return e.jsx("div",{className:"demand",style:{paddingTop:0},children:e.jsxs("div",{className:"memo",style:{marginTop:0},children:[e.jsxs("div",{className:"mh",children:[e.jsx("span",{className:"nm",children:o.name}),i&&e.jsx("span",{className:"vv",children:i}),typeof o.score=="number"&&e.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[o.score,"/100"]}),e.jsx("span",{className:"sp"}),e.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),e.jsx("div",{className:"tabs2",children:e.jsx("button",{type:"button","aria-selected":"true",children:n.memoSynth})}),e.jsx("div",{className:"mb2",children:c?c.split(`

`).map((m,h)=>e.jsx("p",{style:{margin:"0 0 10px"},children:m},h)):e.jsx("p",{children:n.memoNone})}),e.jsxs("div",{className:"mf",children:[st(o)?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"t",children:n.memoDeepHint}),e.jsx("button",{type:"button",className:"deep",onClick:()=>s(o),children:n.memoDeep})]}):e.jsx("span",{className:"t",children:d===2?n.critMemoKinds:""}),o.memoUrl&&e.jsx("a",{className:"go",href:o.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:n.memoOpenFull})]})]})})}const Zr=new Set(["b","strong","i","em","u","br","p","ul","ol","li","h4","h5"]),Ve=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function en(t){const a=String(t||"");if(!a)return"";let r="",n=0;for(;n<a.length;){const s=a.indexOf("<",n);if(s<0){r+=Ve(a.slice(n));break}r+=Ve(a.slice(n,s));const o=a.indexOf(">",s);if(o<0){r+=Ve(a.slice(s));break}const c=a.slice(s+1,o).trim(),i=/^(\/?)([a-zA-Z0-9]+)/.exec(c),d=i?i[2].toLowerCase():"";i&&Zr.has(d)?r+=`<${i[1]}${d}>`:r+=Ve(a.slice(s,o+1)),n=o+1}return r}const Ot=(t,a)=>{const r=String(t||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function re({k:t,v:a,href:r}){return a==null||a===""?null:e.jsxs("div",{className:"cdl",children:[e.jsx("span",{className:"cdk",children:t}),r?e.jsx("a",{className:"cdv",href:r,target:"_blank",rel:"noopener noreferrer",children:String(a)}):e.jsx("span",{className:"cdv",children:String(a)})]})}function tn({o:t}){const{t:a,lang:r,dispatch:n,caps:s}=z(),o=He(t),c=Ae(t),i=(t.cribleStatus||"").trim().toUpperCase()||(o==="NO MATCH"?"NO MATCH":o==="MATCH"?"MATCH":""),d=[t.sector,t.stage,t.countryLabel,t.city,t.website,t.domain,t.linkedinCompany,t.angle,t.date].filter(Boolean).length,m=[t.contactName,t.contactEmail,t.contactLinkedin].filter(Boolean).length,h=[t.ceoStatus,t.ceoNote,s.pipe?t.memoUrl:"",s.pipe?t.memoPdfUrl:""].filter(Boolean).length+(typeof t.engagement=="number"&&t.engagement>0?1:0),l=p.useMemo(()=>[{k:"conv",lib:a.cdConviction,n:(i?1:0)+(t.reasoning?1:0)+(c?1:0)},{k:"ana",lib:a.cdAnalyse,n:(t.summary?1:0)+(s.pipe&&!s.lockActions?1:0)},{k:"soc",lib:a.cdSociete,n:d},{k:"ctc",lib:a.cdContact,n:m},{k:"suivi",lib:a.cdSuivi,n:h}].filter(f=>f.n>0),[t,a,i,c,d,m,h]),[b,v]=p.useState("");if(!l.length)return null;const x=l.some(f=>f.k===b)?b:l[0].k;return e.jsxs("div",{className:"cdtabs",children:[e.jsx("div",{className:"cdnav",role:"tablist",children:l.map(f=>e.jsx("button",{type:"button",role:"tab","aria-selected":x===f.k,className:x===f.k?"on":"",onClick:g=>{g.stopPropagation(),v(f.k)},children:f.lib},f.k))}),e.jsxs("div",{className:"cdbody",onClick:f=>f.stopPropagation(),children:[x==="conv"&&e.jsxs(e.Fragment,{children:[i&&e.jsxs("div",{className:"cdv1"+(i==="NO MATCH"?" out":""),children:[e.jsx("b",{children:i==="NO MATCH"?a.vOut:a.vKept}),e.jsx("span",{className:"cdw",children:a.cdCrible})]}),t.reasoning&&e.jsx("p",{className:"cdtxt",children:t.reasoning}),c&&e.jsxs("div",{className:"cdv1 memo",children:[e.jsx("b",{children:c}),e.jsx("span",{className:"cdw",children:a.cdMemo(t.memoType||"")})]}),e.jsxs("div",{className:"cdgrid",children:[e.jsx(re,{k:a.cdScore,v:typeof t.score=="number"?`${t.score}/100`:""}),e.jsx(re,{k:a.cdConvScore,v:typeof t.convictionScore=="number"?Math.round(t.convictionScore):""}),e.jsx(re,{k:a.cdVerdictDate,v:Ot(t.verdictDate,r)})]})]}),x==="ana"&&e.jsxs(e.Fragment,{children:[t.summary&&e.jsx("div",{className:"cdrich",dangerouslySetInnerHTML:{__html:en(t.summary)}}),s.pipe&&!s.lockActions&&e.jsx(an,{o:t})]}),x==="soc"&&e.jsxs("div",{className:"cdgrid",children:[e.jsx(re,{k:a.cdSector,v:t.sector}),e.jsx(re,{k:a.cdStage,v:t.stage}),e.jsx(re,{k:a.cdCountry,v:[t.city,t.countryLabel].filter(Boolean).join(", ")}),e.jsx(re,{k:a.cdSite,v:t.domain||t.website,href:t.website||void 0}),e.jsx(re,{k:a.cdLinkedin,v:t.linkedinCompany?"LinkedIn":"",href:t.linkedinCompany}),e.jsx(re,{k:a.cdAngle,v:t.angle}),e.jsx(re,{k:a.cdDetected,v:Ot(t.date,r)})]}),x==="ctc"&&e.jsxs("div",{className:"cdgrid",children:[e.jsx(re,{k:a.cdName,v:t.contactName}),e.jsx(re,{k:a.cdEmail,v:t.contactEmail,href:t.contactEmail?`mailto:${t.contactEmail}`:void 0}),e.jsx(re,{k:a.cdLinkedin,v:t.contactLinkedin?"LinkedIn":"",href:t.contactLinkedin})]}),x==="suivi"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cdgrid",children:[e.jsx(re,{k:a.cdCeoStatus,v:t.ceoStatus}),e.jsx(re,{k:a.cdEngagement,v:typeof t.engagement=="number"&&t.engagement>0?t.engagement:""})]}),t.ceoNote&&e.jsxs("p",{className:"cdtxt",children:["💬 ",t.ceoNote]}),s.pipe&&(t.memoUrl||t.memoPdfUrl)&&e.jsxs("div",{className:"cdacts",children:[t.memoUrl&&e.jsxs("button",{type:"button",className:"abtn",onClick:()=>n({type:"memoConsole",id:t.id}),children:[a.actMemo," →"]}),t.memoPdfUrl&&e.jsx("a",{className:"abtn",href:t.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"})]})]})]})]})}function an({o:t}){const{t:a,token:r}=z(),[n,s]=p.useState(!1),[o,c]=p.useState(null),i=async()=>{n||(s(!0),c(await Ta(r,t.name,t.website||t.domain||"")),s(!1))},d=(o==null?void 0:o.blocs)||{},m=[[a.qaVP,d.value_prop],[a.qaProduct,d.produit],[a.qaModel,d.modele],[a.qaSummary,d.synthese]],h=m.some(([,l])=>l);return e.jsxs("div",{className:"qab",children:[!o&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mnote dim",children:a.qaHint}),e.jsx("button",{type:"button",className:"abtn",disabled:n,onClick:()=>{i()},children:n?a.qaBusy:a.qaRun})]}),o&&h&&e.jsxs(e.Fragment,{children:[m.filter(([,l])=>l).map(([l,b])=>e.jsxs("div",{className:"qal",children:[e.jsx("span",{className:"qak",children:l}),e.jsx("p",{children:b})]},l)),!!(o.pages||[]).length&&e.jsx("p",{className:"mnote dim",children:a.qaSources((o.pages||[]).length)})]}),o&&!h&&e.jsx("p",{className:"mnote warn",children:o.quota?a.qaQuota:a.qaEmpty})]})}function Wt({name:t}){const{t:a,token:r,caps:n,mode:s,flashErr:o}=z(),[c,i]=p.useState(!1),[d,m]=p.useState(null);if(!n.pipe||s!=="client"||n.lockActions)return null;const h=async()=>{if(c)return;i(!0);const l=await Aa(r,t);if(i(!1),!l){o(a.actErr);return}m(l.results||[])};return e.jsxs("div",{className:"simb",onClick:l=>l.stopPropagation(),children:[e.jsx("button",{type:"button",className:"abtn",disabled:c,onClick:()=>{h()},children:c?a.similarBusy:a.similar}),d&&(d.length===0?e.jsx("p",{className:"mnote",children:a.similarNone}):e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"siml",children:d.map(l=>e.jsxs("li",{children:[e.jsx("b",{className:l.verdict==="kept"?"ok":"ko",children:l.company}),l.reason&&e.jsx("span",{children:l.reason})]},l.company))}),e.jsx("p",{className:"mnote dim",children:a.similarNote})]}))]})}const Gt={"CALL PENDING":"call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function ct({o:t}){const{t:a}=z(),r=He(t),n=Ae(t),s=se(t),o=et(t),c=La(t);return e.jsxs("span",{className:"c-vd",children:[r?e.jsx("span",{className:"vd "+(r==="MATCH"?"v-ok":"v-no"),title:a.vt[r],children:r}):e.jsx("span",{className:"vd wait",children:a.actToEval}),n?e.jsx("span",{className:"vd "+(Gt[n]||"v-cons"),title:a.vt[n],children:n}):s===1?e.jsx("span",{className:"vd wait",children:a.actMemoQueue}):null,s===3&&o==="auto"&&e.jsx("span",{className:"org au",title:a.orgAutoTitle,children:a.orgAuto}),s===3&&o==="cd"&&e.jsx("span",{className:"org cd",title:a.orgCdTitle,children:a.orgCd}),s===3&&c!==null&&e.jsx("span",{className:"wait2 "+(c>10?"hot":c>=5?"warm":""),title:a.waitTitle(c),children:a.waitChip(c)})]})}function Ft({o:t}){const{t:a,askEvaluate:r,evalBusy:n,lang:s}=z(),[o,c]=p.useState(!1);if(p.useEffect(()=>{n||c(!1)},[n]),de(t)){const m=(t.verdict||"").toUpperCase()!=="NO MATCH";return e.jsxs("span",{className:"verdict",style:{"--c":m?"var(--brand)":"var(--red)"},title:t.reasoning||"",children:[m?"✓":"✗"," ",e.jsx("b",{children:m?a.kept:a.dropped}),typeof t.score=="number"&&t.score>0?" "+t.score:""]})}const d=o&&n;return e.jsxs("button",{type:"button",className:"rev"+(d?" loading":""),disabled:n,onClick:m=>{m.stopPropagation(),c(!0),r(t)},children:[e.jsx("span",{className:"fill"}),a.evalGo]})}function rn({o:t}){const{t:a,caps:r,memoQueued:n,approachDone:s,doAnalyse:o,doDecide:c,doPromote:i,doRepeche:d,doApproach:m,dispatch:h}=z();if(r.lockActions)return e.jsx("span",{className:"cell",children:e.jsxs("button",{type:"button",className:"stbtn",style:{"--c":"var(--line2)","--tc":"var(--dim)"},onClick:v=>{v.stopPropagation(),h({type:"modal",modal:"rdv"})},children:[e.jsx("span",{className:"lk",children:"🔒"}),a.actLocked.replace("🔒 ","")]})});if(!r.pipe)return e.jsx("span",{className:"cell",children:e.jsx(Ft,{o:t})});const l=se(t),b=v=>x=>{x.stopPropagation(),v()};if(l===0)return e.jsx("span",{className:"cell",children:e.jsx(Ft,{o:t})});if(l===1){const v=n.has(t.id);return e.jsx("span",{className:"cell",children:e.jsx("button",{type:"button",className:"memobtn",disabled:v,onClick:b(()=>o(t)),children:v?a.actAnalyseQueued:a.actAnalyse})})}if(l===3)return e.jsx("span",{className:"cell",children:e.jsxs("span",{className:"yn",children:[e.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:b(()=>c(t,!0)),children:a.actYes}),e.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:b(()=>c(t,!1)),children:a.actNo}),t.memoUrl&&e.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:b(()=>h({type:"memoConsole",id:t.id})),children:"📄"})]})});if(l===4){const v=s.has(t.id);return e.jsx("span",{className:"cell",children:e.jsx("button",{type:"button",className:"approach",disabled:v,onClick:b(()=>m(t)),children:v?a.actApproachSent:a.actApproach})})}return l===2?e.jsx("span",{className:"cell",children:e.jsxs("span",{className:"yn",children:[e.jsx("button",{type:"button",className:"promo",onClick:b(()=>i(t)),children:a.actPromote}),t.memoUrl&&e.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:b(()=>h({type:"memoConsole",id:t.id})),children:"📄"})]})}):l===5?e.jsx("span",{className:"cell",children:e.jsxs("span",{className:"yn",children:[e.jsx("button",{type:"button",className:"promo",onClick:b(()=>d(t)),children:a.actRepeche}),t.memoUrl&&e.jsx("button",{type:"button",className:"memobtn read sm",title:a.actMemo,onClick:b(()=>h({type:"memoConsole",id:t.id})),children:"📄"})]})}):e.jsx("span",{className:"cell",children:t.memoUrl?e.jsx("button",{type:"button",className:"memobtn read",onClick:b(()=>h({type:"memoConsole",id:t.id})),children:a.actMemo}):e.jsx("span",{className:"rc",children:"—"})})}function nn({o:t}){const{t:a,doThumb:r,thumbOf:n}=z(),s=n(t);return e.jsxs("span",{className:"thu",children:[e.jsx("button",{type:"button",className:"tb up"+(s==="yes"?" on":""),title:a.thumbUp,onClick:o=>{o.stopPropagation(),r(t,!0)},children:"👍"}),e.jsx("button",{type:"button",className:"tb dn"+(s==="no"?" on":""),title:a.thumbDn,onClick:o=>{o.stopPropagation(),r(t,!1)},children:"👎"})]})}function on({o:t}){const{lang:a}=z();return ne(t)?e.jsxs("span",{className:"c-sig",children:[e.jsx(qe,{o:t}),e.jsx(Ye,{o:t,src:!0})]}):e.jsx("span",{className:"c-sig",children:e.jsxs("span",{className:"mo",children:[ze(t.engine||"")," ",ge(t.engine||"",a)]})})}function sn({o:t,locked:a,open:r,onToggle:n}){const{st:s,dispatch:o,caps:c,markRow:i,markedId:d,favIds:m,toggleFav:h}=z(),l=se(t),b=["#0F172A","#475C6E","#8798A8","#B9C6D2"],v=t.date?Math.max(0,Math.floor((Date.now()-Date.parse(t.date))/864e5)):9999,x=v<=0?0:v<=7?1:v<=30?2:3,f=c.pipe&&t.kind==="target"?["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"][l]:b[x],g=m.has(t.id),u=y=>{if(a)return;if(c.pipe){n();return}const S=y.currentTarget.getBoundingClientRect();o({type:"popup",id:t.id,anchor:{x:S.left+Math.min(280,S.width/3),y:S.bottom}})};return e.jsxs(p.Fragment,{children:[e.jsxs("div",{className:"row"+(d===t.id||r?" on":"")+(a?" locked":""),onMouseEnter:()=>i(t.id),onMouseLeave:()=>i(null),onClick:u,children:[e.jsx("span",{className:"pt",style:{"--c":f}}),e.jsx(Jt,{o:t}),e.jsxs("span",{className:"nd",children:[e.jsxs("span",{className:"rnm",title:t.name,children:[c.pipe&&e.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:g?1:.35,padding:0,marginRight:4},onClick:y=>{y.stopPropagation(),h(t)},children:g?"★":"☆"}),t.name]}),e.jsx("span",{className:"rds",title:t.tagline||t.headline||"",children:[t.tagline,t.headline,t.reasoning].find(y=>y&&y!==t.name)||""})]}),e.jsx(ln,{o:t}),e.jsx("span",{className:"c-stade",children:t.stage||""}),e.jsx(on,{o:t}),c.pipe&&e.jsx(ct,{o:t}),c.pipe&&e.jsxs("span",{className:"c-sc",children:[typeof t.score=="number"?t.score:"",typeof t.score=="number"&&e.jsx("s",{children:"/100"})]}),e.jsx(rn,{o:t}),c.showThumbs&&e.jsx(nn,{o:t})]}),(r||s.dens==="deplie")&&!a&&e.jsx(dn,{o:t})]})}function ln({o:t}){const{lang:a,caps:r}=z();if(r.pipe&&t.kind==="target")return e.jsx("span",{className:"c-amt none",children:"—"});const n=it(t.amountEur,a);return e.jsx("span",{className:"c-amt"+(n?"":" none"),children:n||"—"})}function dn({o:t}){const{t:a,lang:r,dispatch:n,caps:s,outbound:o,doOnboard:c}=z();return e.jsxs("div",{className:"card",style:{display:"grid"},children:[e.jsxs("div",{children:[t.tagline&&e.jsx("p",{className:"lead",children:t.tagline}),e.jsx(tn,{o:t}),e.jsx(qr,{o:t}),e.jsx(Fr,{o:t}),e.jsx(Wt,{name:t.name}),e.jsxs("div",{className:"tg",children:[t.sector&&e.jsx("span",{children:t.sector}),t.stage&&e.jsx("span",{children:t.stage}),t.countryLabel&&e.jsx("span",{children:t.countryLabel}),t.city&&e.jsx("span",{children:t.city})]})]}),e.jsxs("div",{className:"cside",children:[e.jsxs("div",{className:"top",children:[typeof t.score=="number"&&e.jsx("span",{className:"sc3",children:t.score}),e.jsx("span",{className:"vv",children:e.jsx(ct,{o:t})})]}),e.jsxs("div",{className:"sec2",children:[e.jsxs("div",{className:"k2",children:[ze(t.engine||"")," ",ge(t.engine||"",r)]}),ne(t)&&e.jsx("div",{style:{marginTop:8},children:e.jsx(qe,{o:t})})]}),s.pipe&&(t.memoUrl||o)&&e.jsxs("div",{className:"sec2 acts2",children:[t.memoUrl&&e.jsxs("button",{type:"button",className:"btn p",onClick:()=>n({type:"memoConsole",id:t.id}),children:[a.actMemo," →"]}),o&&e.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>c(t),children:a.actOnboard})]})]})]})}function cn({o:t,locked:a}){const{t:r,dispatch:n,caps:s,doDecide:o}=z(),c=se(t),i=["#E7EBF0","#E7F3EC","#C4E0D0","#7FC0A0","#0E8A4F","#DC2626"][c];return e.jsxs("div",{className:"dcard"+(a?" locked":""),style:{"--c":i},children:[e.jsxs("div",{className:"dh",children:[typeof t.score=="number"&&e.jsx("span",{className:"dsc",children:t.score}),e.jsx("span",{className:"dnm",title:t.name,children:t.name})]}),e.jsxs("div",{className:"dv",children:[e.jsx(ct,{o:t}),ne(t)&&e.jsx(qe,{o:t})]}),e.jsx("div",{className:"dmeta",children:[t.countryLabel,t.stage,t.sector].filter(Boolean).join(" · ").toUpperCase()}),(t.tagline||t.reasoning)&&e.jsx("div",{className:"ddesc",children:t.tagline||t.reasoning}),!a&&s.pipe&&c===3&&e.jsxs("div",{className:"dyn",children:[e.jsx("button",{type:"button",style:{"--c3":"#0A6B3D"},onClick:()=>o(t,!0),children:r.actYes}),e.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>o(t,!1),children:r.actNo})]}),!a&&t.memoUrl&&e.jsxs("button",{type:"button",className:"dmemo",onClick:()=>n({type:"memoConsole",id:t.id}),children:[r.actMemo," →"]})]})}function pn(){const t=z(),{st:a,dispatch:r,t:n,caps:s,scoped:o,lang:c,sessTally:i,data:d,dossiers:m}=t,[h,l]=p.useState(new Set);p.useEffect(()=>{l(new Set)},[a.ptab,a.continent]);const b=j=>l(E=>{const N=new Set(E);return N.has(j)?N.delete(j):N.add(j),N}),v=p.useMemo(()=>dt(o,a.sort),[o,a.sort]),x=p.useMemo(()=>v.filter(j=>ne(j)&&!de(j)).length,[v]),f=p.useMemo(()=>s.pipe?v:v.filter(j=>!de(j)),[v,s.pipe]),g=s.pipe?n.plabels[a.ptab].toLowerCase():a.filters.status==="retenu"?n.keptByStan:a.filters.status==="ecarte"?n.droppedByStan:n.toSend,u=(j,E,N="",q=!1)=>e.jsxs("button",{type:"button","data-s":j,className:N,"aria-sort":a.sort.key===j?a.sort.dir===1?"ascending":"descending":"none",style:q?{justifyContent:"flex-end"}:void 0,onClick:()=>r({type:"sort",key:j}),children:[E,e.jsx("span",{className:"ar",children:a.sort.key===j&&a.sort.dir===1?"▴":"▾"})]},j),y=p.useMemo(()=>{if(s.pipe||a.groupBy==="none")return null;const j=new Map;return v.forEach(E=>{const N=E.engine||"?";j.has(N)||j.set(N,[]),j.get(N).push(E)}),[...j.entries()]},[v,s.pipe,a.groupBy]),S=s.lockRowsAfter;let w=0;const C=(j,E)=>{const N=a.shown[E]||_e,B=j.slice(0,N).map(M=>{const T=S!==null&&w>=S;return w++,a.dens==="maxi"?e.jsx(cn,{o:M,locked:T},M.id):e.jsx(sn,{o:M,locked:T,open:h.has(M.id),onToggle:()=>b(M.id)},M.id)});return j.length>N&&B.push(e.jsx("button",{type:"button",className:"moregrp",onClick:()=>r({type:"more",group:E,by:_e}),children:n.more(Math.min(_e,j.length-N),j.length-N)},E+":more")),B};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"listhead",children:[e.jsxs("span",{className:"main",children:[e.jsx("b",{children:v.length})," ",g]}),e.jsx("span",{className:"dot",children:"·"}),e.jsxs("span",{className:"ctx",children:[t.contName,s.pipe&&t.fund?" · "+t.fund:""]}),s.showGroupBar&&e.jsxs("span",{className:"groupbar",children:[e.jsx("span",{className:"gl",children:n.groupBy}),e.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>r({type:"groupBy",groupBy:"engine"}),children:n.groupEngine}),e.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>r({type:"groupBy",groupBy:"none"}),children:n.groupNone})]}),a.pileMode&&e.jsx("button",{type:"button",className:"exitpile",onClick:()=>r({type:"pile",on:!1}),children:n.exitPile}),s.showFunnel&&e.jsx("span",{className:"dens",children:[["liste",n.densList],["deplie",n.densOpen],["maxi",n.densMaxi]].map(([j,E])=>e.jsxs("button",{type:"button","data-d":j,"aria-pressed":a.dens===j,onClick:()=>r({type:"dens",dens:j}),children:[e.jsx("i",{children:e.jsx("em",{})}),e.jsx("b",{children:E})]},j))}),s.showChain&&f.length>0&&e.jsxs("button",{type:"button",className:"chain",onClick:()=>r({type:"chainStart",queue:f.map(j=>j.id)}),children:[e.jsx("span",{className:"b",children:"▶"})," ",s.pipe?n.browse(f.length):n.chainAll(f.length)]})]}),x>0&&!a.filters.signalOnly&&e.jsxs("div",{className:"sigstrip",children:[e.jsx("span",{className:"t",dangerouslySetInnerHTML:{__html:n.sigStrip(x)}}),e.jsx("span",{className:"s",children:n.sigStripSub}),e.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{signalOnly:!0,signalEngines:[]}}),children:n.sigStripGo})]}),a.dens!=="maxi"&&e.jsxs("div",{className:"cols",children:[e.jsx("span",{}),u("country",n.colCountry),u("name",n.colCompany),u("amount",n.colAmount,"h-amt",!0),u("stage",n.colStage,"h-stade"),u("signal",n.colSignal,"h-sig"),s.pipe&&e.jsx("span",{className:"h-vd",children:n.colVerdict}),s.pipe&&u("score",n.colScore,"h-sc",!0),e.jsx("span",{}),s.showThumbs&&e.jsx("span",{className:"h-thu",children:n.colThumbs})]}),e.jsxs("div",{className:"list"+(a.dens!=="liste"?" "+a.dens:""),children:[y?y.map(([j,E])=>e.jsxs(p.Fragment,{children:[e.jsxs("div",{className:"grp-h",children:[e.jsx("span",{className:"ic",children:ze(j)}),e.jsxs("span",{children:[e.jsx("span",{className:"t",children:ge(j,c)}),e.jsx("div",{className:"s",children:n.grpCount(E.filter(N=>!de(N)).length,E.length)})]})]}),C(E,j)]},j)):C(v,"pt"+a.ptab),!v.length&&!(d.loading&&!m.length)&&e.jsx("div",{className:"void",children:s.pipe?n.emptyTab:n.emptyScope})]}),s.showThumbs&&e.jsxs("p",{className:"learn",children:[n.learnLine,e.jsx("button",{type:"button",onClick:()=>r({type:"modal",modal:"crit"}),children:n.learnLink})]}),(i.kept>0||i.dropped>0)&&e.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:n.session(i.kept,i.dropped)}})]})}const un=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function mn(t){if(!t||typeof window>"u")return;const a=352,r=430,n=window.innerWidth,s=window.innerHeight,o=Math.min(Math.max(t.x-a/2,8),Math.max(8,n-a-8));let c=t.y+10;return c+r>s-8&&(c=Math.max(8,t.y-r-14)),c<8&&(c=8),{left:o,top:c}}function fn(){const{st:t,dispatch:a,byId:r,t:n,lang:s,caps:o,mode:c,askEvaluate:i,doAnalyse:d,doDecide:m,doPromote:h,doRepeche:l,doApproach:b,doDeep:v,doOnboard:x,outbound:f,evalBusy:g}=z(),u=t.popupId?r.get(t.popupId):null;if(!u)return null;const y=ne(u),S=se(u),w=Ae(u),C=u.kind==="target",j=E=>{a({type:"filters",patch:E}),a({type:"popup",id:null})};return Me.createPortal(e.jsxs("div",{className:"atl2",children:[e.jsx("style",{children:un}),e.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),e.jsxs("div",{className:"pop on "+(t.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:mn(t.popupAnchor),onClick:E=>E.stopPropagation(),children:[e.jsxs("div",{className:"ph",children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{children:u.name}),e.jsx("span",{className:"id",children:n.detected(n.daysAgo(Te(u.date)),ge(u.engine,s))})]}),e.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),e.jsxs("div",{className:"pb",children:[e.jsxs("div",{className:"tags",children:[u.cc&&e.jsx("button",{type:"button",className:"hi",onClick:()=>j({country:[u.cc]}),children:(Le(u.cc,s)||u.countryLabel||"").toUpperCase()}),u.sector&&e.jsx("button",{type:"button",onClick:()=>j({sector:[u.sector]}),children:u.sector.toUpperCase()}),u.stage&&e.jsx("button",{type:"button",onClick:()=>j({stage:[u.stage]}),children:u.stage.toUpperCase()}),typeof u.amountEur=="number"&&u.amountEur>0&&e.jsx("span",{className:"am2",children:it(u.amountEur,s)})]}),(u.tagline||u.headline)&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:n.desc}),e.jsx("p",{children:u.tagline||u.headline})]}),e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:n.how}),e.jsxs("p",{children:[ze(u.engine)," ",e.jsx("b",{children:ge(u.engine,s)})," — ",qa(u.engine,s),u.noteTitle&&e.jsxs(e.Fragment,{children:[" · ",u.noteTitle]})]}),y?e.jsxs("p",{className:"psig",style:{marginTop:9},children:[e.jsx(qe,{o:u,lg:!0})," ",e.jsx(Ye,{o:u,src:!0}),e.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[n.signaledOn(Ut(y,s))," · ",n.win7(Vt(y,s))]})]}):e.jsx("p",{className:"pnos",style:{marginTop:5},children:n.noSignal})]}),u.reasoning&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:o.pipe&&S>=1?n.verdictCap:n.memo}),e.jsx("p",{className:"memo",children:u.reasoning})]}),o.pipe&&C&&w&&e.jsx("div",{className:"fld",children:e.jsxs("p",{style:{fontWeight:700},children:[w,typeof u.score=="number"&&u.score>0?" · "+n.score(u.score):""]})})]}),e.jsx(Wt,{name:u.name}),e.jsxs("div",{className:"pf",children:[o.lockActions||c!=="client"&&o.pipe?e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[e.jsx("span",{className:"fill"}),"🔒 ",n.lockbarCta]}):o.pipe?e.jsxs(e.Fragment,{children:[S===0&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:g,onClick:()=>i(u),children:[e.jsx("span",{className:"fill"}),n.evalGo]}),S===1&&e.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{d(u),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),n.actAnalyse]}),S===2&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{h(u),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),n.actPromote]}),S===3&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{m(u,!0),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),n.actYes]}),e.jsx("button",{type:"button",className:"abtn",onClick:()=>{m(u,!1),a({type:"popup",id:null})},children:n.actNo}),st(u)&&e.jsx("button",{type:"button",className:"abtn",title:n.memoDeepHint,onClick:()=>{v(u),a({type:"popup",id:null})},children:n.memoDeep})]}),S===4&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{b(u),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),n.actApproach]}),S===5&&e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{l(u),a({type:"popup",id:null})},children:[e.jsx("span",{className:"fill"}),n.actRepeche]}),u.memoUrl&&e.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:u.id}),a({type:"popup",id:null})},children:"📄"}),f&&e.jsx("button",{type:"button",className:"abtn",title:n.actOnboardTitle,onClick:()=>{x(u),a({type:"popup",id:null})},children:"🚀"})]}):e.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:g,onClick:()=>i(u),children:[e.jsx("span",{className:"fill"}),n.evalGo," →"]}),u.website&&e.jsx("a",{className:"psite",href:u.website.startsWith("http")?u.website:"https://"+u.website,target:"_blank",rel:"noopener noreferrer",title:u.website,children:"🌐"})]})]})]}),document.body)}function Mt(t){let a=t==null?"":String(t);return/^[=+\-@\t]/.test(a)&&(a=`'${a}`),/[";\n\r]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}function xn(t,a){const r=Ra(t);return a[{retenu:1,ana:2,pending:3,valide:4,ecarte:5}[r]??1]||""}function gn(t,a){const n=[a.head.split("|").map(Mt).join(";")];for(const s of t){const o=a.stageOf(s);n.push([s.name||"",xn(s,a.plabels),He(s)||s.verdict||"",typeof s.score=="number"?s.score:"",s.countryLabel||s.cc||"",s.sector||"",o?a.stageLabel(o.stage):"",s.contactName||"",s.contactEmail||"",s.memoUrl||"",(s.date||"").slice(0,10),(s.reasoning||"").replace(/\s+/g," ").trim().slice(0,280)].map(Mt).join(";"))}return`\uFEFF${n.join(`\r
`)}`}function hn(t){const a=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=`cibles_vue_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(n),n.click(),window.setTimeout(()=>{URL.revokeObjectURL(r);try{document.body.removeChild(n)}catch{}},400)}const bn=(t,a)=>{const r=String(t||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function fe({k:t,v:a}){return a==null||a===""?null:e.jsxs("div",{className:"dsl",children:[e.jsx("span",{children:t}),e.jsx("b",{children:String(a)})]})}function vn({o:t,qa:a}){const{t:r,lang:n,fund:s}=z(),o=(t.cribleStatus||"").trim().toUpperCase()||(He(t)==="NO MATCH"?"NO MATCH":"MATCH"),c=Ae(t),i=(a==null?void 0:a.blocs)||{},d=[[r.qaVP,i.value_prop],[r.qaProduct,i.produit],[r.qaModel,i.modele],[r.qaSummary,i.synthese]];return e.jsxs("article",{className:"dspage",children:[e.jsxs("header",{className:"dsh",children:[e.jsxs("div",{children:[e.jsx("b",{children:t.name}),t.tagline&&e.jsx("p",{children:t.tagline})]}),e.jsxs("span",{className:"dsv"+(o==="NO MATCH"?" out":""),children:[o==="NO MATCH"?r.vOut:r.vKept,c&&e.jsx("em",{children:c})]})]}),t.reasoning&&e.jsxs("section",{children:[e.jsx("h3",{children:r.dsWhy}),e.jsx("p",{className:"dstxt",children:t.reasoning})]}),e.jsxs("section",{className:"dsgrid",children:[e.jsx(fe,{k:r.cdSector,v:t.sector}),e.jsx(fe,{k:r.cdStage,v:t.stage}),e.jsx(fe,{k:r.cdCountry,v:[t.city,t.countryLabel].filter(Boolean).join(", ")}),e.jsx(fe,{k:r.cdSite,v:t.domain||t.website}),e.jsx(fe,{k:r.cdName,v:t.contactName}),e.jsx(fe,{k:r.cdEmail,v:t.contactEmail}),e.jsx(fe,{k:r.cdScore,v:typeof t.score=="number"?`${t.score}/100`:""}),e.jsx(fe,{k:r.cdConvScore,v:typeof t.convictionScore=="number"?Math.round(t.convictionScore):""}),e.jsx(fe,{k:r.cdAngle,v:t.angle}),e.jsx(fe,{k:r.cdDetected,v:bn(t.date,n)})]}),d.some(([,m])=>m)&&e.jsxs("section",{children:[e.jsx("h3",{children:r.dsAnalysis}),d.filter(([,m])=>m).map(([m,h])=>e.jsxs("div",{className:"dsb",children:[e.jsx("span",{children:m}),e.jsx("p",{children:h})]},m))]}),(t.ceoStatus||t.ceoNote)&&e.jsxs("section",{children:[e.jsx("h3",{children:r.dsDecision}),t.ceoStatus&&e.jsx("p",{className:"dstxt",children:e.jsx("b",{children:t.ceoStatus})}),t.ceoNote&&e.jsxs("p",{className:"dstxt",children:["« ",t.ceoNote," »"]})]}),e.jsx("footer",{className:"dsf",children:r.dsFoot(s)})]})}function yn(){const{t,lang:a,token:r,scoped:n,fund:s,data:o,dispatch:c}=z(),[i,d]=p.useState({}),m=25,h=p.useMemo(()=>n.slice(0,m),[n]);p.useEffect(()=>{h.length&&Oa(r,h.map(v=>v.name)).then(d)},[r,h]);const l=o.stats,b=v=>v.toLocaleString(a==="en"?"en-US":"fr-FR");return e.jsxs("div",{className:"dossier",children:[e.jsxs("div",{className:"dsbar",children:[e.jsx("b",{children:t.dsTitle(h.length)}),n.length>m&&e.jsx("span",{className:"mnote dim",children:t.dsCap(m,n.length)}),e.jsx("span",{className:"dssp"}),e.jsx("button",{type:"button",className:"abtn",onClick:()=>{c({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)},children:t.printBtn})]}),e.jsxs("div",{className:"dscover",children:[e.jsx("b",{children:s}),l&&typeof l.screened=="number"&&e.jsxs("p",{children:[b(l.screened)," ",t.funScreened(""),typeof l.kept=="number"&&e.jsxs(e.Fragment,{children:[" · ",b(l.kept)," ",t.covKept]}),typeof o.marketEstimate=="number"&&o.marketEstimate>0&&e.jsxs(e.Fragment,{children:[" · ",t.covOf(b(o.marketEstimate)),", ",Math.round(l.screened/o.marketEstimate*100)," %"]})]})]}),h.map(v=>e.jsx(vn,{o:v,qa:i[v.name]},v.id)),!h.length&&e.jsx("p",{className:"mnote",children:t.dsEmpty})]})}const wn=50;function pt({label:t,onPreview:a,onTest:r,readOnly:n}){const{t:s}=z(),[o,c]=p.useState(null),[i,d]=p.useState(!1),[m,h]=p.useState(""),[l,b]=p.useState(0),[v,x]=p.useState(""),[f,g]=p.useState(!1),u=p.useRef(null);p.useEffect(()=>()=>{u.current&&window.clearInterval(u.current)},[]);const y=async w=>{d(!0),h("");const C=await a();if(d(!1),C.ok){c(C);return}if(C.busy){h(s.alertPreviewBusy);return}if(!w){h(s.alertPreviewFail);return}b(wn),u.current=window.setInterval(()=>{b(j=>j>1?j-1:(u.current&&window.clearInterval(u.current),y(!1),0))},1e3)},S=async()=>{if(n||f)return;g(!0),x("");const w=await r();g(!1),x(w.ok?s.alertTestOk(w.sentTo||""):w.error||s.actErr)};return e.jsxs("div",{className:"mailp",children:[e.jsxs("div",{className:"mailp-row",children:[e.jsx("button",{type:"button",className:"abtn",disabled:i||l>0,onClick:()=>{y(!0)},children:i?"…":t}),e.jsx("button",{type:"button",className:"abtn",disabled:n||f,onClick:()=>{S()},children:f?"…":s.alertTest})]}),l>0&&e.jsx("p",{className:"mnote",children:s.alertPreviewRetry(l)}),m&&e.jsx("p",{className:"mnote warn",children:m}),v&&e.jsx("p",{className:"mnote",children:v}),!v&&e.jsx("p",{className:"mnote dim",children:s.alertTestHint}),(o==null?void 0:o.ok)&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"mnote",children:[e.jsx("b",{children:s.alertSubject})," ",o.subject]}),o.pending===0&&e.jsx("p",{className:"mnote warn",children:s.alertPreviewEmpty}),e.jsx("iframe",{className:"mailp-frame",sandbox:"",srcDoc:o.html,title:t})]})]})}const Fe="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function oe({title:t,icon:a,children:r,wide:n}){const{dispatch:s}=z();return Me.createPortal(e.jsx("div",{className:"atl2",children:e.jsx("div",{className:"modal on",onClick:o=>{o.target===o.currentTarget&&s({type:"modal",modal:null})},children:e.jsxs("div",{className:"mcard",style:n?{width:"min(760px,100%)"}:void 0,children:[e.jsxs("div",{className:"mh",children:[a&&e.jsx("span",{className:"no g",children:a}),e.jsx("h2",{children:t}),e.jsx("button",{type:"button",className:"x",onClick:()=>s({type:"modal",modal:null}),children:"×"})]}),e.jsx("div",{className:"mb",children:r})]})})}),document.body)}function kn(){const{st:t}=z();switch(t.modal){case"chain":return e.jsx(Nn,{});case"space":return e.jsx(Sn,{});case"alert":return e.jsx(Cn,{});case"queue":return e.jsx(Ln,{});case"export":return e.jsx(qn,{});case"plug":return e.jsx(Fn,{});case"recharge":return e.jsx(Dn,{});case"cover":return e.jsx(In,{});case"dossier":return e.jsx(Pn,{});case"crit":return e.jsx(Bn,{});case"tuto":return e.jsx($n,{});case"rdv":return e.jsx(jn,{});case"memoalert":return e.jsx(Rn,{});default:return null}}function jn(){const{dispatch:t,fund:a}=z(),r=typeof document<"u"&&!!document.getElementById("rdv");return p.useEffect(()=>{r&&(t({type:"modal",modal:null}),Nr())},[r,t]),r?null:e.jsx(Da,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0,onClose:()=>t({type:"modal",modal:null})})}function Nn(){const{st:t,dispatch:a,byId:r,t:n,lang:s,mode:o,askEvaluate:c,evalBusy:i}=z(),d=o==="client",m=t.chain.queue.map(v=>r.get(v)).filter(v=>!!v),h=t.chain.idx,l=m[h],b=h>=m.length;return Me.createPortal(e.jsx("div",{className:"atl2",children:e.jsx("div",{className:"modal on",children:e.jsxs("div",{className:"fcard",children:[e.jsxs("div",{className:"fh",children:[e.jsx("span",{className:"c",children:b?n.finished:`${h+1} / ${m.length}`}),e.jsx("span",{className:"p",children:e.jsx("i",{style:{width:(b?100:h/Math.max(1,m.length)*100)+"%"}})}),e.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),e.jsx("div",{className:"fb",children:b||!l?e.jsxs("div",{className:"fin",children:[e.jsx("div",{className:"em",children:"🏁"}),e.jsx("div",{className:"t",children:n.chainDone}),e.jsx("div",{className:"s",children:n.chainDoneSub(m.length)})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:l.name}),e.jsx("div",{className:"sub",children:[Le(l.cc,s)||l.countryLabel,l.sector,l.stage,n.daysAgo(Te(l.date))].filter(Boolean).map(v=>String(v).toUpperCase()).join(" · ")}),e.jsxs("div",{className:"tags",children:[e.jsx("span",{className:"hi",children:ge(l.engine,s).toUpperCase()}),typeof l.amountEur=="number"&&l.amountEur>0&&e.jsx("span",{children:it(l.amountEur,s)})]}),ne(l)&&e.jsxs("div",{style:{marginBottom:12},children:[e.jsx(qe,{o:l,lg:!0})," ",e.jsx(Ye,{o:l,src:!0})]}),(l.tagline||l.headline)&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:n.desc}),e.jsx("p",{children:l.tagline||l.headline})]}),l.reasoning&&e.jsxs("div",{className:"fld",children:[e.jsx("span",{className:"l",children:n.memo}),e.jsx("p",{className:"memo",children:l.reasoning})]}),d&&de(l)&&e.jsxs("div",{className:"vbox",style:{"--c":Ee(l)==="retenu"?"var(--brand)":Ee(l)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[e.jsx("span",{className:"vt",children:Ee(l)==="retenu"?"✓ "+n.kept:Ee(l)==="pending"?"📞 "+n.pending:"✗ "+n.dropped}),e.jsx("span",{className:"vd",children:l.reasoning||""})]})]})}),e.jsxs("div",{className:"ff",children:[!b&&l&&!(d&&de(l))&&e.jsxs("button",{type:"button",className:"evalbtn"+(i?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:i,onClick:()=>{c(l)},children:[e.jsx("span",{className:"fill"}),n.launchEval]}),e.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(b?{type:"modal",modal:null}:{type:"chainNext"}),children:b?n.closeBtn:n.skip})]})]})})}),document.body)}function Sn(){const{st:t,dispatch:a,dossiers:r,t:n,mode:s}=z(),o=s==="client",c=p.useMemo(()=>o?r.filter(l=>de(l)):[],[r,o]),i=p.useMemo(()=>dt(c.filter(l=>Ee(l)==="retenu"),{key:"signal",dir:-1}),[c]),d=p.useMemo(()=>c.filter(l=>Ee(l)==="ecarte"),[c]),m=t.spaceTab==="retenu"?i:d,h=t.spaceTab==="retenu"?"var(--brand)":"var(--red)";return e.jsxs(oe,{title:n.spaceTitle,children:[e.jsxs("div",{className:"sp-tabs",children:[e.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":t.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",n.statusKeep.replace("✅ ","")," ",e.jsx("b",{children:i.length})]}),e.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":t.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",n.statusDrop.replace("❌ ","")," ",e.jsx("b",{children:d.length})]})]}),m.length===0&&e.jsx("div",{className:"sp-empty",children:n.spEmpty}),m.slice(0,40).map(l=>e.jsxs("div",{className:"sp-row",children:[e.jsx("span",{className:"sc",style:{"--c":h},children:typeof l.score=="number"&&l.score>0?l.score:"—"}),e.jsxs("span",{children:[e.jsx("div",{className:"nm",children:l.name}),e.jsx("div",{className:"rr",children:l.reasoning||l.tagline||""})]})]},l.id)),e.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:n.spNote}})]})}function Cn(){const{mode:t}=z();return t==="client"||t==="apercu"?e.jsx(En,{}):e.jsx(An,{})}function En(){const{t,token:a,flash:r,flashErr:n,mode:s}=z(),[o,c]=p.useState("d"),i=s!=="client";return e.jsxs(oe,{title:t.alertTitle,icon:"🔔",children:[e.jsxs("div",{className:"ntabs",role:"tablist",children:[e.jsx("button",{type:"button",role:"tab","aria-selected":o==="d",className:o==="d"?"on":"",onClick:()=>c("d"),children:t.alertTabDaily}),e.jsx("button",{type:"button",role:"tab","aria-selected":o==="w",className:o==="w"?"on":"",onClick:()=>c("w"),children:t.alertTabWeekly})]}),o==="d"?e.jsx(zn,{t,token:a,readOnly:i,flash:r,flashErr:n}):e.jsx(Tn,{t,token:a,readOnly:i,flash:r,flashErr:n})]})}function zn({t,token:a,readOnly:r,flash:n,flashErr:s}){const[o,c]=p.useState(null),[i,d]=p.useState(!1),[m,h]=p.useState(0);p.useEffect(()=>{let x=!0;return d(!1),jt(a).then(f=>{x&&(f?c(f):d(!0))}),()=>{x=!1}},[a,m]);const l=x=>{r||jt(a,x).then(f=>{if(!f){s(t.actErr);return}c(f),f.throttled?s(t.alertThrottled):n(t.alertSaved)})};if(i)return e.jsxs("div",{className:"sp-empty",children:[t.alertLoadError," ",e.jsx("button",{type:"button",className:"abtn",onClick:()=>h(x=>x+1),children:t.retry})]});if(!o)return e.jsx("div",{className:"sp-empty",children:"…"});const b=x=>!o.sections||o.sections.includes(x),v=x=>{const f=o.sections||t.alertSec.map(([g])=>g);l({sections:b(x)?f.filter(g=>g!==x):[...f,x]})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"qrow",children:[e.jsxs("span",{children:[e.jsx("b",{children:t.alertDaily}),e.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:t.alertDailyHint})]}),e.jsx("span",{className:"qset",children:e.jsx("button",{type:"button",className:"abtn","aria-pressed":o.enabled===!0,disabled:r,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>l({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),e.jsxs("div",{className:"qrow",children:[e.jsx("span",{children:t.alertHour}),e.jsxs("span",{className:"qset",children:[e.jsx("button",{type:"button",onClick:()=>l({hour:Math.max(6,(o.hour??7)-1)}),disabled:r,children:"−"}),e.jsxs("b",{children:[o.hour??7," h"]}),e.jsx("button",{type:"button",onClick:()=>l({hour:Math.min(21,(o.hour??7)+1)}),disabled:r,children:"＋"})]})]}),e.jsxs("div",{className:"qrow",children:[e.jsx("span",{children:t.alertDays}),e.jsxs("span",{className:"qset",style:{gap:6},children:[e.jsx("button",{type:"button",className:"abtn",disabled:r,style:o.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>l({days:"weekdays"}),children:t.alertWeekdays}),e.jsx("button",{type:"button",className:"abtn",disabled:r,style:o.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>l({days:"daily"}),children:t.alertEveryday})]})]}),e.jsx("div",{className:"qsec ok",children:t.alertSections}),e.jsx("div",{className:"secl",children:t.alertSec.map(([x,f])=>e.jsxs("label",{className:"secli",children:[e.jsx("input",{type:"checkbox",checked:b(x),disabled:r,onChange:()=>v(x)}),e.jsxs("span",{children:[f,x==="market"&&e.jsxs("i",{children:[" ",t.alertSecSlow]})]})]},x))}),e.jsx("p",{className:"mnote dim",children:t.alertSecNote}),e.jsx(pt,{label:t.alertPreview,readOnly:r,onPreview:()=>_a(a),onTest:()=>Va(a)}),o.active===!1&&e.jsx("p",{className:"mnote warn",children:t.alertInactive}),o.email_lead?e.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${t.updatedAt(o.last_sent.slice(0,10))}`:""]}):e.jsx("p",{className:"mnote",children:t.alertNoLead})]})}function Tn({t,token:a,readOnly:r,flash:n,flashErr:s}){const[o,c]=p.useState(null),[i,d]=p.useState(!1),[m,h]=p.useState(0);p.useEffect(()=>{let x=!0;return d(!1),Nt(a).then(f=>{x&&(f?c(f):d(!0))}),()=>{x=!1}},[a,m]);const l=x=>{r||Nt(a,x).then(f=>{if(!f){s(t.actErr);return}c(f),n(t.alertSaved)})};if(i)return e.jsxs("div",{className:"sp-empty",children:[t.alertLoadError," ",e.jsx("button",{type:"button",className:"abtn",onClick:()=>h(x=>x+1),children:t.retry})]});if(!o)return e.jsx("div",{className:"sp-empty",children:"…"});const b=o.dow??0,v=o.hour??16;return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"lead2",children:t.alertWeeklySub}),e.jsxs("div",{className:"qrow",children:[e.jsx("span",{children:e.jsx("b",{children:t.alertWeeklyOn})}),e.jsx("span",{className:"qset",children:e.jsx("button",{type:"button",className:"abtn","aria-pressed":o.enabled===!0,disabled:r,style:o.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>l({enabled:!o.enabled}),children:o.enabled?"ON":"OFF"})})]}),e.jsxs("div",{className:"qrow",children:[e.jsx("span",{children:t.alertWeeklyWhen}),e.jsxs("span",{className:"qset",style:{gap:6},children:[e.jsx("select",{value:b,disabled:r,onChange:x=>l({dow:Number(x.target.value)}),children:t.alertDow.map((x,f)=>e.jsx("option",{value:f,children:x},x))}),e.jsx("button",{type:"button",onClick:()=>l({hour:Math.max(6,v-1)}),disabled:r,children:"−"}),e.jsxs("b",{children:[v," h"]}),e.jsx("button",{type:"button",onClick:()=>l({hour:Math.min(21,v+1)}),disabled:r,children:"＋"})]})]}),e.jsx(pt,{label:t.alertPreviewWeekly,readOnly:r,onPreview:()=>Ya(a),onTest:()=>Ha(a)}),o.active===!1&&e.jsx("p",{className:"mnote warn",children:t.alertInactive}),o.email_lead?e.jsxs("p",{className:"mnote",children:["→ ",o.email_lead,o.last_sent?` · ${t.updatedAt(o.last_sent.slice(0,10))}`:""]}):e.jsx("p",{className:"mnote",children:t.alertNoLead})]})}function An(){const{st:t,t:a,lang:r,scoped:n,contName:s}=z(),[o,c]=p.useState(""),[i,d]=p.useState(!1),[m,h]=p.useState(!1),l=t.filters,b=p.useMemo(()=>n.filter(g=>ne(g)).length,[n]),v=l.win==="1"?0:l.win==="7"?1:l.win==="30"?2:3,x=async()=>{if(!(!/.+@.+\..+/.test(o)||m)){h(!0);try{await fetch(`${at}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.trim(),sectors:l.sector,countries:l.country,source:"atelier2",website:""})}),d(!0)}finally{h(!1)}}},f=[[a.amRows.continent,s],[a.amRows.since,a.amSince[v]],[a.amRows.signal,l.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,l.engine.length?l.engine.map(g=>ge(g,r)).join(", "):a.amAllEngines],[a.amRows.sectors,l.sector.length?l.sector.join(", "):a.amAllSectors],[a.amRows.countries,l.country.length?l.country.map(g=>Le(g,r)||g).join(", "):a.amAllCountries],[a.amRows.stages,l.stage.length?l.stage.join(", "):a.amAllStages]];return e.jsx(oe,{title:a.alertTitle,icon:"🔔",children:i?e.jsxs("div",{className:"fin",children:[e.jsx("div",{className:"em",children:"🔔"}),e.jsx("div",{className:"t",children:a.amOk}),e.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(o)}})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"crit",children:f.map(([g,u])=>e.jsxs("div",{className:"r",children:[e.jsx("span",{className:"k",children:g}),e.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:u}})]},g))}),e.jsxs("div",{className:"mfield",children:[e.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:o,onChange:g=>c(g.target.value),onKeyDown:g=>{g.key==="Enter"&&x()}}),e.jsxs("button",{type:"button",className:"evalbtn"+(m?" loading":""),style:{padding:"12px 18px"},onClick:()=>void x(),children:[e.jsx("span",{className:"fill"}),a.amActivate]})]}),e.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(n.length,b)}}),e.jsx("p",{className:"mnote",children:a.amHonest})]})})}function Ln(){var f,g,u;const{t,token:a,fund:r,mode:n,flash:s}=z(),[o,c]=p.useState(null),[i,d]=p.useState([]),[m,h]=p.useState(0),l=n==="client";p.useEffect(()=>{let y=!0;return(async()=>{const[S,w]=await Promise.all([nt(r),Bt(a)]);y&&(S&&c(S),d(w))})(),()=>{y=!1}},[a,r,m]);const b=(o==null?void 0:o.per_day)??2,v=((f=o==null?void 0:o.analyzed_today)==null?void 0:f.length)??0,x=(g=o==null?void 0:o.tomorrow)!=null&&g.length?o.tomorrow:((o==null?void 0:o.pool_meta)||[]).slice(0,10);return e.jsxs(oe,{title:t.queueTitle,wide:!0,children:[e.jsxs("div",{className:"qbox",children:[e.jsx("div",{className:"qhead",children:e.jsx("b",{dangerouslySetInnerHTML:{__html:t.queueDone(v,v+(((u=o==null?void 0:o.pool_order)==null?void 0:u.length)??0))}})}),e.jsxs("div",{className:"qrate",children:[t.covRate," — ",e.jsx("b",{children:t.covRateNow(b)})]})]}),i.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"qsec ok",children:["⏳ ",t.queueToday]}),e.jsx("div",{className:"qrows",children:i.map(y=>e.jsxs("div",{className:"qr2",children:[e.jsx("b",{children:y.company}),e.jsxs("span",{className:"qd",children:[y.memo_type,typeof y.est_min=="number"?` · ~${y.est_min} min`:""]}),e.jsx("span",{className:"qt",children:y.status}),y.url&&e.jsx("a",{className:"qgo",href:y.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:t.actMemo}),l&&y.status==="error"&&e.jsx("button",{type:"button",className:"qgo an",onClick:()=>{kt(a,y.company,"retry").then(()=>h(S=>S+1))},children:t.queueRetry}),l&&y.status!=="done"&&e.jsx("button",{type:"button",className:"abtn",onClick:()=>{kt(a,y.company,"delete").then(()=>h(S=>S+1))},children:t.queueDelete})]},y.company))})]}),e.jsxs("div",{className:"qsec todo",children:["⚡ ",t.queueTomorrow]}),e.jsxs("div",{className:"qrows",children:[x.length===0&&e.jsx("div",{className:"sp-empty",children:t.queueEmpty}),x.slice(0,10).map((y,S)=>e.jsxs("div",{className:"qr2",children:[e.jsxs("span",{className:"qn2",children:["#",S+1]}),e.jsx("b",{children:y.name}),typeof y.score=="number"&&e.jsx("span",{className:"qs2",children:y.score})]},y.name))]})]})}function qn(){const{t,token:a,flash:r,scoped:n,caps:s,stageOf:o,dispatch:c}=z(),i=`${Fe}/cibles/list.csv?token=${a}`,d=`${Fe}/cibles/list.json?token=${a}`,m=`${Fe}/cibles/export.xlsx?token=${a}&scope=full`,h=`=IMPORTDATA("${i}")`,l=g=>{var u;(u=navigator.clipboard)==null||u.writeText(g).then(()=>r(t.exportCopied))},b=[{def:t.exportCsv,value:i,href:i},{def:t.exportSheet,value:h},{def:t.exportLive,value:d,href:d},{def:t.exportXlsx,value:m,href:m}],v=!s.lockActions&&n.length>0,x=()=>{hn(gn(n,{plabels:t.plabels,head:t.exportViewHead,stageOf:o,stageLabel:g=>(t.stg.find(([u])=>u===g)||["",""])[1]})),r(t.exportViewDone(n.length))},f=()=>{c({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)};return e.jsxs(oe,{title:t.exportTitle,icon:"📥",children:[e.jsx("p",{className:"lead2",children:t.exportLead}),v&&e.jsx("div",{className:"expl",style:{marginBottom:10},children:e.jsxs("div",{className:"exi",children:[e.jsx("span",{className:"exic",children:"🖨️"}),e.jsxs("div",{children:[e.jsx("b",{children:t.printTitle}),e.jsx("p",{children:t.printDesc(n.length)})]}),e.jsx("button",{type:"button",className:"exb",onClick:f,children:t.printBtn})]})}),v&&e.jsx("div",{className:"expl",style:{marginBottom:10},children:e.jsxs("div",{className:"exi",children:[e.jsx("span",{className:"exic",children:"🗂"}),e.jsxs("div",{children:[e.jsx("b",{children:t.dsBtn}),e.jsx("p",{children:t.dsHint})]}),e.jsx("button",{type:"button",className:"exb",onClick:()=>c({type:"modal",modal:"dossier"}),children:t.exportViewBtn})]})}),v&&e.jsx("div",{className:"expl",style:{marginBottom:10},children:e.jsxs("div",{className:"exi",children:[e.jsx("span",{className:"exic",children:"📄"}),e.jsxs("div",{children:[e.jsx("b",{children:t.exportViewTitle}),e.jsx("p",{children:t.exportViewDesc(n.length)})]}),e.jsx("button",{type:"button",className:"exb pri",onClick:x,children:t.exportViewBtn})]})}),e.jsx("div",{className:"expl",children:b.map(({def:g,value:u,href:y})=>e.jsxs("div",{className:"exi",children:[e.jsx("span",{className:"exic",children:g[0]}),e.jsxs("div",{children:[e.jsx("b",{children:g[1]}),e.jsx("p",{children:g[2]})]}),e.jsx("button",{type:"button",className:"exb",onClick:()=>l(u),children:t.exportCopy}),y&&e.jsx("a",{className:"exb",href:y,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:t.exportOpen})]},g[1]))}),e.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:t.exportKeyWarning})]})}function Rn(){const{t,token:a,flash:r,flashErr:n,mode:s}=z(),o=s!=="client",[c,i]=p.useState(null),[d,m]=p.useState(!1),[h,l]=p.useState(0),[b,v]=p.useState(!1);p.useEffect(()=>{let u=!0;return m(!1),wt(a).then(y=>{u&&(y?i(y):m(!0))}),()=>{u=!1}},[a,h]);const x=()=>(c==null?void 0:c.sections)||{swot:!0,action:!0,synergies:!0,quadrant:!0,verdict:!0},f=u=>{if(o||!c)return;const y={enabled:u.enabled??!!c.enabled,email:u.email??(c.email||""),sections:u.sections??x()};v(!0),wt(a,y).then(S=>{if(v(!1),!S){n(t.memoAlertErr);return}i(S),r(t.memoAlertSaved)})};if(d)return e.jsx(oe,{title:t.memoAlertTitle,icon:"🔔",children:e.jsxs("div",{className:"sp-empty",children:[t.alertLoadError," ",e.jsx("button",{type:"button",className:"abtn",onClick:()=>l(u=>u+1),children:t.retry})]})});if(!c)return e.jsx(oe,{title:t.memoAlertTitle,icon:"🔔",children:e.jsx("div",{className:"sp-empty",children:"…"})});const g=x();return e.jsxs(oe,{title:t.memoAlertTitle,icon:"🔔",children:[e.jsx("p",{className:"lead2",children:t.memoAlertSub}),e.jsxs("div",{className:"qrow",children:[e.jsx("span",{children:e.jsx("b",{children:t.memoAlertToggle})}),e.jsx("span",{className:"qset",children:e.jsx("button",{type:"button",className:"abtn","aria-pressed":c.enabled===!0,disabled:o||b,style:c.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>f({enabled:!c.enabled}),children:c.enabled?"ON":"OFF"})})]}),e.jsx(On,{value:c.email||"",readOnly:o||b,label:t.memoAlertEmail,okLabel:t.csNoteOk,onSave:u=>f({email:u})}),e.jsx("div",{className:"qsec ok",children:t.memoAlertSections}),e.jsx("div",{className:"secl",children:t.memoAlertSec.map(([u,y])=>e.jsxs("label",{className:"secli",children:[e.jsx("input",{type:"checkbox",checked:!!g[u],disabled:o||b,onChange:()=>f({sections:{...g,[u]:!g[u]}})}),e.jsx("span",{children:y})]},u))}),e.jsx(pt,{label:t.memoAlertPreview,readOnly:o,onPreview:()=>Ma(a,g),onTest:()=>Fa(a,g)})]})}function On({value:t,readOnly:a,label:r,okLabel:n,onSave:s}){const[o,c]=p.useState(t);p.useEffect(()=>{c(t)},[t]);const i=o.trim()!==t.trim(),d=!o.trim()||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(o.trim());return e.jsxs("div",{className:"qrow",children:[e.jsx("span",{children:r}),e.jsxs("span",{className:"qset",style:{gap:6},children:[e.jsx("input",{type:"email",className:"mailin",value:o,disabled:a,onChange:m=>c(m.target.value),onKeyDown:m=>{m.key==="Enter"&&i&&d&&s(o.trim())}}),e.jsx("button",{type:"button",className:"abtn",disabled:a||!i||!d,onClick:()=>s(o.trim()),children:n})]})]})}function Fn(){const{t,token:a,flash:r,flashErr:n,canWrite:s}=z(),[o,c]=p.useState(null),[i,d]=p.useState(!1),[m,h]=p.useState(null),[l,b]=p.useState(""),[v,x]=p.useState(0);p.useEffect(()=>{let u=!0;return d(!1),tt(a).then(y=>{u&&(y?c({configured:y.configured,url_hint:y.url_hint}):d(!0))}),Ia(a).then(y=>{u&&h(y)}),()=>{u=!1}},[a,v]);const f=(u,y)=>{s&&tt(a,u).then(S=>{if(!S||S.ok===!1){n(t.actErr);return}u.test&&S.sent===!1?n(t.plugTestThrottled):r(y),x(w=>w+1)})},g='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}';return e.jsxs(oe,{title:t.plugTitle,icon:"🔌",wide:!0,children:[m&&e.jsx("p",{className:"mnote"+(m.enabled?" warn":""),children:m.enabled?t.plugAutoOn(m.destination||"webhook"):t.plugAutoOff}),i?e.jsxs("div",{className:"sp-empty",children:[t.alertLoadError," ",e.jsx("button",{type:"button",className:"abtn",onClick:()=>x(u=>u+1),children:t.retry})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"qsec ok",children:t.plugCrm}),e.jsx("p",{className:"mnote",children:t.plugCrmHint}),e.jsxs("div",{className:"mfield",children:[e.jsx("input",{type:"url",maxLength:500,placeholder:t.plugUrlPh,value:l,disabled:!s,onChange:u=>b(u.target.value)}),e.jsx("button",{type:"button",className:"abtn",disabled:!s||!l.trim(),onClick:()=>f({url:l.trim()},t.plugSaved),children:t.plugSave})]}),(o==null?void 0:o.configured)&&e.jsxs("p",{className:"mnote",children:["✓ ",o.url_hint||""," ",e.jsx("button",{type:"button",className:"lk",disabled:!s,onClick:()=>f({test:!0},t.plugTested),children:t.plugTest})," · ",e.jsx("button",{type:"button",className:"lk",disabled:!s,onClick:()=>f({remove:!0},t.plugRemoved),children:t.plugRemove})]}),e.jsx(Mn,{}),e.jsx("div",{className:"qsec ok",children:t.plugMcp}),e.jsxs("div",{className:"cpy",children:[e.jsx("code",{children:g}),e.jsx("button",{type:"button",className:"abtn",onClick:()=>{var u;(u=navigator.clipboard)==null||u.writeText(g).then(()=>r(t.exportCopied))},children:t.exportCopy})]})]})]})}function Mn(){const{t,token:a,lang:r}=z(),[n,s]=p.useState("valides"),[o,c]=p.useState(!1),[i,d]=p.useState(null),[m,h]=p.useState(null),[l,b]=p.useState(!1),[v,x]=p.useState(!1),[f,g]=p.useState(null),[u,y]=p.useState(null),[S,w]=p.useState(null),C=`atl2:bulk:${a}:${n}`;p.useEffect(()=>{tt(a).then(T=>{y(T&&T.configured?T.url_hint||"webhook":null)})},[a]),p.useEffect(()=>{d(null),h(null),b(!1),g(null);try{const T=JSON.parse(localStorage.getItem(C)||"null");w(T&&Date.now()-Date.parse(T.t)<24*3600*1e3?T:null)}catch{w(null)}},[C]);const j=async()=>{c(!0),b(!1),g(null);const T=await $a(a,n);d(T),h(T.ok?n:null),c(!1)},E=p.useRef(!1),N=async()=>{if(E.current)return;E.current=!0,x(!0);const T=`${a}:${n}:${Date.now()}:${Math.random().toString(36).slice(2,10)}`;let $;try{$=await Ua(a,n,"webhook",void 0,T)}finally{E.current=!1}if(x(!1),b(!1),g($),$.ok&&($.pushed||0)>0){const F={t:new Date().toISOString(),n:$.pushed||0};w(F);try{localStorage.setItem(C,JSON.stringify(F))}catch{}}},q=i!=null&&i.ok&&i.ready||0,B=!!(i!=null&&i.ok)&&m===n&&q>0&&!!u&&!S,M=S?new Date(S.t).toLocaleString(r==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"qsec ok",children:t.plugBulk}),e.jsx("p",{className:"mnote",children:t.plugBulkHint}),e.jsxs("div",{className:"mfield",children:[e.jsx("select",{value:n,onChange:T=>s(T.target.value),children:t.plugBulkTabs.map(([T,$])=>e.jsx("option",{value:T,children:$},T))}),e.jsx("button",{type:"button",className:"abtn",disabled:o,onClick:()=>{j()},children:o?"…":t.plugBulkPreview})]}),i&&(i.ok?e.jsx("p",{className:"mnote",children:t.plugBulkResult(i.ready||0,i.linkedinReady||0,(i.noContact||[]).length)}):e.jsx("p",{className:"mnote warn",children:t.actErr})),!!(i!=null&&i.ok)&&e.jsx("p",{className:"mnote dim",children:t.bulkScope}),S&&e.jsx("p",{className:"mnote",children:t.bulkLocked(M,S.n)}),!S&&!!(i!=null&&i.ok)&&!u&&e.jsx("p",{className:"mnote warn",children:t.bulkNoDest}),!S&&!i&&e.jsx("p",{className:"mnote dim",children:t.bulkPreviewFirst}),B&&!l&&e.jsx("button",{type:"button",className:"abtn dgr",onClick:()=>b(!0),children:t.bulkArm}),B&&l&&e.jsxs("div",{className:"bulkc",children:[e.jsx("p",{className:"mnote warn",children:t.bulkWarn(q,u||"")}),e.jsx("button",{type:"button",className:"abtn dgr",disabled:v,onClick:()=>{N()},children:v?t.bulkSending:t.bulkConfirm(u||"")}),e.jsx("button",{type:"button",className:"abtn",disabled:v,onClick:()=>b(!1),children:t.bulkCancel})]}),f&&(f.ok?f.replayed?e.jsx("p",{className:"mnote",children:f.pending?t.bulkPending:t.bulkReplayed}):(f.pushed||0)>0?e.jsx("p",{className:"mnote",children:t.bulkDone(f.pushed||0,f.linkedinReady||0,f.skippedNoEmail||0)}):e.jsx("p",{className:"mnote warn",children:t.bulkNone}):e.jsx("p",{className:"mnote warn",children:f.error||t.actErr}))]})}function Dn(){const{t,data:a,lang:r}=z(),n=a.credits,s=a.email,o=async c=>{if(!s)return;const i=window.location.href.split("?")[0];try{const m=await(await fetch(`${at}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,lookup_key:c,success_url:i+"?credits=ok",cancel_url:i+"?credits=cancel"})})).json();m.url&&(window.location.href=m.url)}catch{}};return e.jsxs(oe,{title:t.rechargeTitle,icon:"⚡",children:[n&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:t.rechargeHint(n.daily_grant)}}),n.costs&&e.jsxs("p",{className:"mnote",children:["① ",t.creditsCost(n.costs.instant)," · ② ",t.creditsCost(n.costs.detailed)]}),e.jsx("div",{className:"packs",children:(n.packs||[]).map(c=>e.jsxs("div",{className:"pack",children:[e.jsx("div",{className:"pt",children:t.rechargeUnit(c.credits,c.price_eur)}),e.jsx("button",{type:"button",onClick:()=>{o(c.lookup_key)},children:t.rechargeBuy})]},c.lookup_key))}),e.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:t.rechargeNote})]}),!n&&e.jsx("div",{className:"sp-empty",children:t.creditsNone})]})}function Pn(){const{t}=z();return e.jsx(oe,{title:t.dsBtn,icon:"🗂",wide:!0,children:e.jsx(yn,{})})}function In(){const{t,lang:a,data:r,dossiers:n,token:s,canWrite:o,flash:c}=z(),[i,d]=p.useState(null),[m,h]=p.useState(!1);p.useEffect(()=>{let j=!0;return nt(s).then(E=>{j&&E&&typeof E.per_day=="number"&&d(E.per_day)}),()=>{j=!1}},[s]);const l=r.stats,b=typeof(l==null?void 0:l.screened)=="number"?l.screened:n.filter(j=>j.kind==="target"&&de(j)).length,v=r.marketEstimate||0,x=v>0?Math.min(100,Math.round(b/v*100)):null,f=(l==null?void 0:l.window_days)||30,g=b>0?b/f:0,u=v>0?Math.max(0,v-b):0,S=v>0&&g>0&&b>=100?Math.round(u/g):null,w=j=>Math.round(j).toLocaleString(a==="en"?"en-US":"fr-FR"),C=j=>{m||!o||(h(!0),Ba(s,j).then(E=>{if(h(!1),E===null){c(t.actErr);return}d(E),c(t.alertSaved)}))};return e.jsxs(oe,{title:t.coverTitle,icon:"🌍",children:[e.jsxs("div",{className:"covg",children:[e.jsx("b",{children:t.covScreened(w(b))}),v>0&&e.jsx("span",{children:t.covOf(w(v))})]}),x!==null?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"covbar",children:[e.jsx("i",{style:{width:x+"%"}}),e.jsxs("em",{children:[x," %"]})]}),S!==null&&e.jsx("p",{className:"mnote",children:t.covEta(S)})]}):e.jsx("p",{className:"mnote dim",children:t.covNoEst}),g>=1&&e.jsx("p",{className:"mnote",children:t.covPace(w(g))}),l&&e.jsxs("div",{className:"covf",children:[typeof l.kept=="number"&&e.jsxs("span",{children:[e.jsx("b",{children:w(l.kept)})," ",t.covKept]}),typeof l.analyzed=="number"&&e.jsxs("span",{children:[e.jsx("b",{children:w(l.analyzed)})," ",t.covAna]}),typeof l.shown=="number"&&e.jsxs("span",{children:[e.jsx("b",{children:w(l.shown)})," ",t.covShown]})]}),o&&i!==null&&e.jsxs("div",{className:"covr",children:[e.jsxs("div",{className:"covrh",children:[e.jsx("span",{children:t.covRate}),e.jsx("b",{children:t.covRateNow(i)})]}),e.jsx("div",{className:"covrb",children:[0,1,2,3,5,10].map(j=>e.jsx("button",{type:"button",className:i===j?"on":"",disabled:m,onClick:()=>C(j),children:j===0?"⏸":j},j))}),e.jsx("p",{className:"mnote dim",children:t.covRateHint})]})]})}function Bn(){var u,y,S;const{t,dossiers:a,token:r,mode:n,flash:s,criteria:o}=z(),c=n==="client",i=p.useMemo(()=>{const w=new Set;return a.forEach(C=>{C.angle&&w.add(C.angle)}),[...w]},[a]),[d,m]=p.useState(null);p.useEffect(()=>{let w=!0;return Pa(r).then(C=>{w&&m(C.thumbs)}),()=>{w=!1}},[r]);const[h,l]=p.useState(""),[b,v]=p.useState(""),[x,f]=p.useState(!1),g=async()=>{const w=h.trim();if(!(!w||x||!c)){f(!0),v("");try{const j=await(await fetch(`${Fe}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r,message:w,who:"atelier2"})})).json().catch(()=>({}));if(j.reply&&v(String(j.reply)),j.job_id){v(t.critChatRunning);const E=async()=>{const N=await fetch(`${Fe}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:j.job_id})}).then(q=>q.json()).catch(()=>null);if(N&&N.done){v(String(N.reply||N.clarification||N.summary||"✓")),f(!1),N.applied&&s(t.alertSaved);return}setTimeout(()=>{E()},8e3)};setTimeout(()=>{E()},8e3),l("");return}l("")}finally{b.startsWith("⏳")||f(!1)}}};return e.jsxs(oe,{title:t.critTitle,icon:"⚙",wide:!0,children:[(o==null?void 0:o.lead)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"qsec ok",children:t.critHypTitle}),e.jsx("p",{className:"mnote",style:{marginTop:0},children:o.lead}),!!((u=o.points)!=null&&u.length)&&e.jsx("ul",{className:"critpts",children:o.points.map(w=>e.jsx("li",{children:w},w))}),e.jsx("p",{className:"mnote",children:t.critHypSub})]}),!!((y=o==null?void 0:o.angles)!=null&&y.length)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"qsec ok",children:t.critProfilsTitle}),e.jsx("p",{className:"mnote",style:{marginTop:0},children:o.method||t.critProfilsSub}),o.angles.map(w=>{var C,j;return e.jsxs("details",{className:"prof",children:[e.jsx("summary",{children:w.title}),w.why&&e.jsx("p",{className:"why",children:w.why}),e.jsxs("div",{className:"lo",children:[!!((C=w.look)!=null&&C.length)&&e.jsxs("div",{children:[e.jsx("em",{children:t.critLookFor}),e.jsx("ul",{children:w.look.map(E=>e.jsx("li",{children:E},E))})]}),!!((j=w.out)!=null&&j.length)&&e.jsxs("div",{className:"ko",children:[e.jsx("em",{children:t.critRuleOut}),e.jsx("ul",{children:w.out.map(E=>e.jsx("li",{children:E},E))})]})]})]},w.title)})]}),!!((S=o==null?void 0:o.gate)!=null&&S.length)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"qsec ok",children:t.critGateTitle}),e.jsx("p",{className:"mnote",style:{marginTop:0},children:t.critGateSub}),o.gate.length===1&&!o.gate[0].k?e.jsx("p",{className:"gate1",children:o.gate[0].t}):e.jsx("ol",{className:"gatesteps",children:o.gate.map(w=>e.jsxs("li",{children:[w.k&&e.jsx("b",{children:w.k}),w.t]},w.t))})]}),i.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"qsec ok",children:t.critAngles}),e.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:i.map(w=>e.jsx("li",{style:{marginBottom:5},children:w.replace(/[_-]+/g," ")},w))})]}),e.jsxs("div",{className:"rule",children:[e.jsx("b",{children:t.critChatTitle}),e.jsx("p",{children:t.critChatHint}),e.jsxs("div",{className:"mfield",style:{marginTop:10},children:[e.jsx("input",{placeholder:t.critChatPh,value:h,disabled:!c||x,onChange:w=>l(w.target.value),onKeyDown:w=>{w.key==="Enter"&&g()}}),e.jsxs("button",{type:"button",className:"evalbtn"+(x?" loading":""),style:{padding:"12px 18px"},disabled:!c||x||!h.trim(),onClick:()=>void g(),children:[e.jsx("span",{className:"fill"}),t.critChatSend]})]}),b&&e.jsx("p",{className:"mnote",style:{marginTop:10},children:b})]}),e.jsx("div",{className:"qsec ok",children:t.critThumbsTitle}),d===null?e.jsx("div",{className:"sp-empty",children:"…"}):d.length===0?e.jsx("p",{className:"mnote",children:t.critThumbsEmpty}):e.jsx("div",{className:"qrows",style:{marginBottom:14},children:d.slice(0,12).map((w,C)=>e.jsxs("div",{className:"qr2",children:[e.jsx("span",{className:"qn2",children:w.kind==="YES"?"👍":"👎"}),e.jsx("b",{children:w.company}),e.jsx("span",{className:"qd",children:(w.ts||"").slice(0,10)})]},C))}),e.jsx("div",{className:"qsec ok",children:t.qvTitle}),e.jsx("div",{className:"vlist",children:t.qv.map(([w,C])=>e.jsxs("div",{className:"vrow",children:[e.jsx("span",{className:"vd "+(Gt[w]||"v-cons"),children:w}),e.jsx("span",{children:C})]},w))}),e.jsx("div",{className:"qsec ok",children:t.brTitle}),e.jsx("div",{className:"vlist",children:t.br.map(([w,C])=>e.jsxs("div",{className:"vrow",children:[e.jsx("span",{className:"vtag",children:w}),e.jsxs("span",{children:["← ",C]})]},w))}),e.jsx("p",{className:"mnote",children:t.brNote}),e.jsx("p",{className:"mnote",children:t.critMemoKinds})]})}function $n(){const{t,dispatch:a,startTour:r}=z(),n=s=>{var o,c;a({type:"modal",modal:null}),s==="crit"||s==="plug"||s==="alert"?a({type:"modal",modal:s}):s.startsWith("tab")?a({type:"ptab",tab:Number(s.slice(3))}):s==="eval"&&((o=document.querySelector(".atl2 .demand input"))==null||o.scrollIntoView({block:"center",behavior:"smooth"}),(c=document.querySelector(".atl2 .demand input"))==null||c.focus())};return e.jsxs(oe,{title:t.tutoTitle,icon:"▶",children:[e.jsxs("div",{className:"howto-go",children:[e.jsx("p",{children:t.tourIntro}),e.jsxs("button",{type:"button",onClick:()=>{a({type:"modal",modal:null}),r()},children:["▶ ",t.tourStart]})]}),e.jsx("ul",{className:"howto",children:t.howto.map(([s,o],c)=>e.jsxs("li",{role:"button",tabIndex:0,onClick:()=>n(o),onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),n(o))},children:[e.jsx("span",{className:"n",children:c+1}),e.jsx("span",{dangerouslySetInnerHTML:{__html:s.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}})]},o+c))})]})}const Kt="atl2:mapfold",Un=()=>{if(typeof window>"u")return!1;try{const t=localStorage.getItem(Kt);if(t==="on")return!0;if(t==="off")return!1}catch{}return window.innerHeight<1e3},Qt=p.createContext(null),z=()=>{const t=p.useContext(Qt);if(!t)throw new Error("AtelierV2Ctx manquant");return t};function qe({o:t,lg:a}){const{lang:r}=z(),n=ne(t);return n?e.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:St(n,r),children:[n.emoji," ",St(n,r)]}):null}function Ye({o:t,src:a}){const{lang:r,t:n}=z(),s=ne(t);if(!s)return null;const o=Ja(s),c=Xa(s);return e.jsxs("em",{className:"sigwin"+(c?" hot":""),title:n.signaledOn(Ut(s,r))+" · "+n.win7(Vt(s,r)),children:[e.jsx("span",{className:"gg",children:Array.from({length:7},(i,d)=>e.jsx("i",{className:d<o?"on":""},d))}),e.jsx("span",{className:"lb",children:c?n.lastDay:n.daysLeft(Math.max(0,s.left??0))}),a&&s.url&&e.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",title:n.seeSource,onClick:i=>i.stopPropagation(),children:"↗"})]})}function Jt({o:t}){const{lang:a}=z(),r=Qa(t.cc),n=t.cc?Le(t.cc,a)||t.countryLabel||t.cc:t.countryLabel||"—";return e.jsx("span",{className:"c-flag",title:n||void 0,children:r?e.jsx("img",{src:r,width:24,height:18,alt:n||""}):e.jsx("span",{className:"em",children:"🌐"})})}const Dt="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap",Xt=t=>`atl2:tour:${t||"anon"}`;function Vn(t){try{return localStorage.getItem(Xt(t))==="1"}catch{return!0}}function Pt(t){try{localStorage.setItem(Xt(t),"1")}catch{}}function _n(t){const a=t.tourT,r=t.howto;return[{sel:".atl2 .ident",title:a.ident,body:t.tourIntro},{sel:".atl2 .ticker",title:a.live,body:t.fhintLive},{sel:".atl2 .goal",title:a.goal,body:t.fhintGoal},{sel:".atl2 .funnel",title:a.funnel,body:r[2][0],ptab:1},{sel:".atl2 .tuto",title:a.tuto,body:r[3][0],ptab:3},{sel:".atl2 .demand",title:a.demand,body:r[1][0]},{sel:".atl2 .card .dec",need:".atl2 .list",title:a.dec,body:t.fhintDec,ptab:1,dens:"deplie"},{sel:".atl2 .csp",need:".atl2 .list",title:a.status,body:t.fhintStatus,ptab:1,dens:"deplie"},{sel:".atl2 .learn",title:a.learn,body:t.learnLine},{sel:".atl2 .ftools",title:a.tools,body:r[6][0]},{sel:".atl2 .tool",title:a.crit,body:r[0][0]}]}function Qn({demo:t=!1,source:a="default",initialFilters:r,initialUi:n,capsOverride:s,onFiltersChange:o}){const{lang:c}=Wa(),i=sr[c],d=hr(t,c,a),[m,h]=p.useReducer(vr,void 0,()=>br((n==null?void 0:n.continent)??"europe",t||Un(),{ptab:n==null?void 0:n.ptab,dens:n==null?void 0:n.dens,filters:r,modal:n==null?void 0:n.modal})),l=p.useRef(!0);p.useEffect(()=>{if(l.current){l.current=!1;return}if(!t)try{localStorage.setItem(Kt,m.mapFolded?"on":"off")}catch{}},[m.mapFolded,t]);const b=p.useRef(o);b.current=o,p.useEffect(()=>{var k;(k=b.current)==null||k.call(b,m.filters)},[m.filters]);const[v,x]=p.useState(null),[f,g]=p.useState(null),[u,y]=p.useState({kept:0,dropped:0}),[S,w]=p.useState(!1),[C,j]=p.useState(""),[E,N]=p.useState(!1),[q,B]=p.useState(null),[M,T]=p.useState(!1),[$,F]=p.useState(!1),[,Q]=p.useState(0),D=()=>Q(k=>k+1),ie=p.useRef([]),me=p.useRef(new Set),he=p.useRef(new Set),be=p.useRef(new Map),P=p.useRef(null),{mode:ce}=d,V=p.useMemo(()=>({...d.caps,...a==="ops"?{showMorning:!1}:null,...s||null}),[d.caps,s,a]),U=V.pipe,_=d.session.token||"",I=ce==="client"&&!t;p.useEffect(()=>{if(document.querySelector(`link[href="${Dt}"]`))return;const k=document.createElement("link");k.rel="stylesheet",k.href=Dt,document.head.appendChild(k)},[]);const O=(k,L=!1)=>{j(k),N(L),P.current&&clearTimeout(P.current),P.current=setTimeout(()=>j(""),L?4200:2400)},K=k=>O(k,!0),G=p.useMemo(()=>{const k=new Map;return d.dossiers.forEach(L=>{L.id&&k.set(L.id,L)}),k},[d.dossiers]),te=p.useMemo(()=>d.dossiers.filter(k=>Ht(k,m,U)),[d.dossiers,m,U]),Z=p.useRef(!1);p.useEffect(()=>{if(Z.current||t||d.loading||!d.dossiers.length)return;if(!V.showFunnel||Vn(d.session.token||"")){Z.current=!0;return}Z.current=!0;const k=window.setTimeout(()=>{Pt(d.session.token||""),T(!0)},700);return()=>window.clearTimeout(k)},[t,d.loading,d.dossiers.length,V.showFunnel,d.session.token]);const ee=p.useMemo(()=>d.dossiers.filter(k=>yr(k,m,U,d.favIds)),[d.dossiers,m,U,d.favIds]),ve=p.useMemo(()=>Ga(te,d.favIds),[te,d.favIds]),H=ot.find(k=>k.key===m.continent),le=c==="fr"?H.fr:H.en;p.useEffect(()=>{const k=L=>{var X;const R=(((X=L.detail)==null?void 0:X.name)||"").trim();R&&pe(null,R)};return window.addEventListener("ppmap:evaluate",k),()=>window.removeEventListener("ppmap:evaluate",k)});const pe=(k,L)=>{const R=((k==null?void 0:k.name)||L||"").trim();if(!I){g({kicker:R});return}!R||S||(w(!0),(async()=>{try{const X=await $t(_,R,"atelier2"),Pe={name:X.company||R,verdict:X.verdict,reason:X.reason||"",remaining:X.remaining??null};ie.current=[Pe,...ie.current].slice(0,8),X.verdict==="kept"&&y(Ne=>({...Ne,kept:Ne.kept+1})),X.verdict==="ruled_out"&&y(Ne=>({...Ne,dropped:Ne.dropped+1}));const Re=k||d.dossiers.find(Ne=>(Ne.name||"").toLowerCase()===R.toLowerCase());Re&&(X.verdict==="kept"?Re.verdict=Re.verdict||"MATCH":X.verdict==="ruled_out"&&(Re.verdict="NO MATCH"),X.reason&&(Re.reasoning=X.reason)),D()}finally{w(!1)}})())},ye=k=>{if(!I){g({kicker:k.name});return}me.current.add(k.id),Oe(_,"fast_request",k.name||"",""),O(i.memoInstantSent(k.name)),D()},xe=k=>be.current.get(k.id)??d.thumbs.get((k.name||"").trim().toLowerCase()),A=(k,L)=>h({type:"undoPush",entry:{id:k.id,name:k.name,prevCeoStatus:L}}),Y=async(k,L,R)=>{const X=k.ceoStatus||"";k.ceoStatus=L,D();const Pe=await Je(_,{status:L,airtable_id:k.airtableId,check_id:k.checkId,company:k.name,...(R==null?void 0:R.note)!==void 0?{note:R.note}:{},...R!=null&&R.via?{via:R.via}:{}});return Pe.ok?Pe.skipped?(k.ceoStatus=X,D(),K(i.actNotPersisted),!1):((R==null?void 0:R.undo)!==!1&&A(k,X),R!=null&&R.msg&&O(R.msg),(L==="Validé"||L==="Écarté")&&!k.ceoNote&&(R==null?void 0:R.note)===void 0&&B({o:k,yes:L==="Validé"}),!0):(k.ceoStatus=X,D(),K(i.actErr),!1)},J=async(k,L)=>{const R=await Je(_,{status:k.ceoStatus||"Retenu",airtable_id:k.airtableId,check_id:k.checkId,company:k.name,note:L,via:"note"});return!R.ok||R.skipped?(K(R.skipped?i.actNotPersisted:i.actErr),!1):(k.ceoNote=L,D(),!0)},W=p.useRef(new Map),ue=k=>W.current.has(k.id)?W.current.get(k.id):d.stages.get((k.name||"").trim().toLowerCase()),we=(k,L)=>{W.current.set(k.id,L),D()},ke=(k,L)=>{I&&Y(k,L?"Validé":"Écarté",{msg:L?i.decidedYes(k.name):i.decidedNo(k.name)})},De=k=>{I&&Y(k,"À trancher",{msg:i.promoted(k.name)})},We=k=>{I&&(async()=>{const L=k.ceoStatus||"";k.ceoStatus="Retenu",D();const R=await Je(_,{status:"Retenu",check_id:k.checkId,company:k.name});if(!R.ok||R.skipped){k.ceoStatus=L,D(),K(R.skipped?i.actNotPersisted:i.actErr);return}A(k,L),O(i.repeched(k.name))})()},Ge=()=>{const k=m.undo[m.undo.length-1];if(!k){O(i.undoNone);return}const L=G.get(k.id);if(!L){h({type:"undoPop"}),O(i.undoNone);return}let R=k.prevCeoStatus;if(!R)if((L.verdict||"").toUpperCase().includes("CALL"))R="À trancher";else{O(i.undoLockedTitle);return}(async()=>await Y(L,R,{undo:!1})&&(h({type:"undoPop"}),L.ceoStatus=k.prevCeoStatus,D(),O(i.undoDone(L.name))))()},je=k=>{I&&(he.current.add(k.id),D(),(async()=>{const L=await Za(_,k.name,"email");if(!L||L.ok===!1){he.current.delete(k.id),D(),K(i.actErr);return}Oe(_,"approach",k.name||"",""),O(i.actApproachSent)})())},Zt=(k,L)=>{I&&(async()=>{if(!(await Oe(_,L?"yes":"no",k.name||"","")).ok){K(i.actErr);return}be.current.set(k.id,L?"yes":"no"),D(),O(L?i.thumbUpDone:i.thumbDnDone)})()},ea=k=>{!I||!st(k)||(Oe(_,"detailed_request",k.name||"",""),O(i.memoDeepSent(k.name)))},ta=k=>{const L=new Set(d.favIds),R=L.has(k.id);R?L.delete(k.id):L.add(k.id),d.setFavIds(L),I&&er(_,{id:k.id,co:k.name},R)},aa=()=>{!I||$||window.confirm(i.identSyncConfirm)&&(F(!0),(async()=>{const k=await tr(_);F(!1),k?O(i.identSyncDone):K(i.actErr)})())},ut=/proplace/i.test(d.fund||""),ra=k=>{!I||!ut||(Oe(_,"onboard_request",k.name||"",""),O(i.onboardSent(k.name)))},na={st:m,dispatch:h,t:i,lang:c,mode:ce,caps:V,pipe:U,token:_,fund:d.fund,email:d.email,criteria:d.criteria,data:d,doRepeche:We,thumbOf:xe,canWrite:I,commitStatus:Y,saveNote:J,stageOf:ue,setStage:we,flashErr:K,startTour:()=>T(!0),dossiers:d.dossiers,scopedAll:te,scoped:ee,counts:ve,byId:G,contName:le,favIds:d.favIds,toggleFav:ta,askEvaluate:pe,doAnalyse:ye,doDecide:ke,doPromote:De,doApproach:je,doThumb:Zt,doDeep:ea,doUndo:Ge,doSync:aa,doOnboard:ra,outbound:ut,memoQueued:me.current,approachDone:he.current,sessTally:u,evalCards:ie.current,evalBusy:S,markRow:x,markedId:v,flash:O};return p.useEffect(()=>{const k=L=>{L.key==="Escape"&&(h({type:"popup",id:null}),h({type:"modal",modal:null}),h({type:"openFacet",facet:null}))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[]),e.jsx(Qt.Provider,{value:na,children:e.jsxs("div",{className:"atl2",children:[e.jsx("style",{children:dr}),e.jsxs("div",{className:"app"+(U?" pipe":""),children:[V.showTicker&&e.jsx(ae,{name:"live",children:e.jsx(wr,{})}),V.showIdent&&e.jsx(ae,{name:"identite",children:e.jsx(Pr,{})}),V.showOnb&&e.jsx(ae,{name:"onboarding",children:e.jsx(Ir,{})}),V.showMorning&&e.jsx(ae,{name:"matin",children:e.jsx(Dr,{})}),e.jsx(ae,{name:"fraicheur",children:e.jsx(Tr,{})}),e.jsx(ae,{name:"mesure",children:e.jsx(Ar,{})}),V.showFunnel&&e.jsx(ae,{name:"entonnoir",children:e.jsx(Hn,{})}),V.showFunnel&&e.jsx(ae,{name:"tunnel",children:e.jsx($r,{})}),V.showFunnel&&e.jsx(ae,{name:"tuto",children:e.jsx(Vr,{})}),e.jsx(ae,{name:"carte",fallback:e.jsx("div",{className:"void",children:i.loadError}),children:e.jsxs("div",{className:"fzone",children:[e.jsx(Yn,{}),e.jsxs("div",{className:"stage"+(m.mapFolded?" folded":""),id:"atl2-stage",children:[e.jsx(Hr,{}),e.jsx(Wr,{})]})]})}),V.showDemand&&e.jsx(ae,{name:"evaluation",children:e.jsx(Qr,{})}),V.showDemand&&m.memoConsole&&e.jsx(ae,{name:"console",children:e.jsx(Xr,{})}),e.jsx(ae,{name:"liste",fallback:e.jsxs("div",{className:"void",children:[i.loadError," ",e.jsx("button",{type:"button",className:"abtn",onClick:()=>window.location.reload(),children:i.retry})]}),children:e.jsx(pn,{})}),d.loading&&e.jsx("div",{className:"void",children:i.loadingV2}),d.error&&!d.loading&&e.jsxs("div",{className:"void",children:[i.loadError," ",e.jsx("button",{type:"button",className:"abtn",onClick:d.refresh,children:i.retry})]})]}),V.showOnb&&e.jsxs("div",{className:"lockbar on",children:[e.jsx("b",{children:i.lockbarText}),e.jsx("button",{type:"button",onClick:()=>h({type:"modal",modal:"rdv"}),children:i.lockbarCta})]}),m.popupId&&e.jsx(ae,{name:"fiche",children:e.jsx(fn,{})}),e.jsx(ae,{name:"modales",children:e.jsx(kn,{})}),e.jsx(Cr,{}),q&&e.jsxs("div",{className:"whydock",children:[e.jsx("b",{children:q.o.name}),e.jsx(Or,{placeholder:q.yes?i.whyYesPh:i.whyNoPh,onDone:k=>{const L=q.o;B(null),k&&J(L,k).then(R=>{R&&O(i.csNoteSaved)})}})]}),M&&e.jsx(Mr,{steps:_n(i),onClose:()=>{T(!1),Pt(_)}}),C&&e.jsx("div",{className:"flash on"+(E?" err":""),children:C}),f&&e.jsx(Ka,{variant:"acquirer",initialCompany:It().co,initialWebsite:It().site,onClose:()=>g(null)})]})})}function Hn(){const{t}=z(),[a,r]=p.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem("atl2:fhint")==="off"}catch{return!1}});return a?null:e.jsxs("p",{className:"fhint",children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:e.jsx("path",{d:"M1 2h10M2.5 5.5h7M4.5 9h3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})}),e.jsx("span",{dangerouslySetInnerHTML:{__html:t.funnelHint}}),e.jsx("button",{type:"button","aria-label":"Fermer",title:t.fhintClose,onClick:()=>{r(!0);try{localStorage.setItem("atl2:fhint","off")}catch{}},children:"✕"})]})}function Yn(){const{dossiers:t,st:a,dispatch:r,pipe:n,lang:s,t:o}=z(),c=p.useMemo(()=>{const i={};return t.forEach(d=>{d.continent&&lt(d,a.filters,n)&&(i[d.continent]=(i[d.continent]||0)+1)}),i},[t,a.filters,n]);return e.jsxs("div",{className:"conts",children:[ar.map(i=>{const d=ot.find(m=>m.key===i);return e.jsxs("button",{type:"button",className:"cbtn","aria-selected":a.continent===i,onClick:()=>r({type:"continent",key:i}),children:[s==="fr"?d.fr:d.en,e.jsx("span",{className:"n",children:c[i]||0})]},i)}),e.jsx("span",{className:"side",children:e.jsx("button",{type:"button",onClick:()=>r({type:"mapFold",folded:!a.mapFolded}),children:a.mapFolded?o.showMap:o.hideMap})})]})}function It(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function Wn(t){return t>=1e9?(t/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":t>=1e6?Math.round(t/1e6)+" M€":Math.round(t/1e3)+" k€"}export{Jt as FlagCell,qe as SigBadge,Ye as SigWin,Qn as default,Wn as fmtShort,z as useV2};
