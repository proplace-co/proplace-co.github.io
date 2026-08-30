var Yo=Object.defineProperty;var Ko=(e,a,r)=>a in e?Yo(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var Bn=(e,a,r)=>Ko(e,typeof a!="symbol"?a+"":a,r);import{r as u,u as Qo,a as Jo,b as Xo,R as da,L as Zo,j as t,P as Ba,p as ze,C as _n,c as ei,d as ti,l as _a,o as va,i as Jr,g as ai,e as ni,f as ri,h as $n,k as oi,m as Un,n as Hn,q as Vn,s as ii,t as si,v as li,w as di,x as ci,S as Da,y as pi,z as ui,A as Me,B as En,D as ht,E as Ct,F as mi,G as fi,H as Xr,I as ja,J as hi,_ as nn,N as xi,K as gi,M as bi,O as Ie,Q as vi,T as yi,U as wt,V as wi,W as _t,X as Sn,Y as Zr,Z as ki,$ as ji,a0 as Ni,a1 as Cn,a2 as Wn,a3 as Gn,a4 as $t,a5 as rn,a6 as zt,a7 as Ke,a8 as Ei,a9 as Si,aa as Yn,ab as zn,ac as eo,ad as to,ae as Ci,af as zi,ag as Ai,ah as Ti,ai as qi,aj as Dt,ak as Li,al as ia,am as Fi,an as ao,ao as Ri,ap as Ut,aq as Mi,ar as no,as as ro,at as Kn,au as Oi,av as Di,aw as Zt,ax as on,ay as Ii,az as Pi,aA as Bi,aB as Qn,aC as _i,aD as $i,aE as Ui,aF as Hi,aG as sn,aH as Vi,aI as $a,aJ as Jn,aK as Wi,aL as Gi,aM as Yi,aN as Xn,aO as Ki,aP as Qi,aQ as Zn,aR as Ji,aS as Xi,aT as Zi,aU as es,aV as ts,aW as as,aX as ns,aY as er,aZ as rs,a_ as os,a$ as is,b0 as Vt,b1 as Ua,b2 as ss,b3 as ls,b4 as ds}from"./index-D-825v4q.js";const cs=({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:o,onInit:i,onPageChange:l,onSubmit:s})=>{const[c,g]=u.useState(!0),d=Qo({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:o});Jo(d,{onInit:i,onPageChange:l,onSubmit:s});const[x,m]=u.useState();return Xo(d,"form_resized",h=>{const p=h.size;typeof p=="number"&&m(p)},{disabled:!o}),da.createElement("div",{className:"fillout-standard-embed",style:{height:o?typeof x=="number"?x:256:"100%",transition:o?"height 150ms ease":void 0}},c&&da.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},da.createElement(Zo,null)),d&&da.createElement("iframe",{src:d.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>g(!1),style:{width:c?0:"100%",height:c?0:"100%",opacity:c?0:1,borderRadius:10,border:0,minHeight:256}}))};function _e(e){return(e||"").trim().toLowerCase()}function ps(e,a){const r=Math.max(60,a*60);return Math.max(2,Math.min(97,Math.round(e/r*100)))}function tr(e){const a=Math.max(0,Math.floor(e)),r=Math.floor(a/60),n=a%60;return r+":"+String(n).padStart(2,"0")}function us(e){const a=new Date(e);return String(a.getHours()).padStart(2,"0")+":"+String(a.getMinutes()).padStart(2,"0")}const ms=300;function Na({item:e,serverOff:a,bootLbl:r,endLabel:n}){const[o,i]=u.useState(()=>Date.now()/1e3);u.useEffect(()=>{const m=window.setInterval(()=>i(Date.now()/1e3),1e3);return()=>window.clearInterval(m)},[]);const l=e.memoType==="detailed"?"mémo détaillé ~"+(e.estMin||40)+" min":"mémo éclair ~"+(e.estMin||15)+" min";if(e.status==="boot"||!(e.started>0)){const m=o-(e.started||o);return m>ms?t.jsx("span",{className:"runerr",children:"⚠ le moteur n'a pas pris le dossier ("+Math.round(m/60)+" min) — relancez l'analyse"}):t.jsxs("span",{className:"runtrack boot",children:[t.jsx("span",{className:"runchrono",children:r+" · "+l+(m>20?" · "+tr(m):"")}),t.jsx("span",{className:"runbar",children:t.jsx("i",{className:"ind"})})]})}if(e.status==="error")return t.jsx("span",{className:"runerr",children:e.error||"erreur"});if(e.status==="done")return t.jsx("span",{className:"rundone",children:"✓"});const s=o-a-e.started,c=e.estMin||15,g=c*60-s,d=ps(s,c),x=g>0&&n?" · "+n.replace("{t}",us((e.started+c*60+a)*1e3)):"";return t.jsxs("span",{className:"runtrack",children:[t.jsx("span",{className:"runchrono",children:l+" · ⏱ "+tr(s)+" · "+d+"%"+(g>0?" · reste ~"+Math.ceil(g/60)+" min":" · …")+x}),!!e.note&&t.jsx("span",{className:"runnote",children:e.note}),t.jsx("span",{className:"runbar",children:t.jsx("i",{style:{width:d+"%"}})})]})}function fs({items:e,serverOff:a,labels:r,onOpen:n}){const o=e.filter(i=>i.status!=="done"||Date.now()/1e3-(i.started||0)<1200);return o.length?t.jsxs("div",{className:"livestrip",role:"button",onClick:n,title:r.open,children:[t.jsx("span",{className:"ls-ico",children:"⚡"}),t.jsx("span",{className:"ls-lab",children:r.strip}),o.slice(0,6).map(i=>t.jsxs("span",{className:"ls-chip"+(i.status==="error"?" err":i.status==="done"?" done":""),children:[t.jsx("b",{children:i.name}),i.status==="done"&&i.url?t.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",onClick:l=>l.stopPropagation(),children:r.memo}):t.jsx(Na,{item:i,serverOff:a,bootLbl:r.boot,endLabel:r.end})]},i.name)),o.length>6&&t.jsxs("span",{className:"ls-more",children:["+",o.length-6]}),t.jsxs("span",{className:"ls-go",children:[r.open," →"]})]}):null}const ar={rss:"RSS",google_news:"Google News",google_alerts:"Google Alerts",pappers_fr:"Pappers FR",crt:"CRT",github:"GitHub",hn:"Hacker News",fundraising:"Fundraising",backfill:"Backfill",websets_engine:"Exa Websets",websets:"Exa Websets",linkedin_posts:"LinkedIn Posts",linkedin_jobs:"LinkedIn Jobs",exa_semantic:"Exa Semantic",exa_similar:"Exa Similar",crunchbase_search:"Crunchbase",other_custom:"Autres (Make sur-mesure)",manual_paste:"Saisie manuelle",find_similar_qualified:"Similaires aux qualifiés",editorial:"Éditorial (médias experts)",daily_news:"Daily news thèse",alumni:"Alumni fondateurs",competitor_exodus:"Départs concurrents",hackernews:"Hacker News",crt_sh:"CRT",pappers:"Pappers FR",pappers_intl:"Pappers International",opencorporates:"OpenCorporates",tavily:"Tavily",registre_gouv:"Registre officiel (gouv)",hunter:"Hunter",sales_nav:"Sales Navigator",sourcing:"Sourcing Proplace",local:"Moteur local (Google Maps + BODACC)"},hs={rss:"Lit chaque matin des centaines de médias et de flux spécialisés pour repérer les sociétés qui bougent dans votre secteur.",editorial:"Suit en continu les médias experts et lettres spécialisées de votre secteur pour repérer les sociétés dont on commence à parler.",google_news:"Balaie l'actualité mondiale en continu pour capter les sociétés qui font parler d'elles (levées, lancements, nominations).",google_alerts:"Surveille des mots-clés précis sur tout le web et remonte chaque société correspondante dès qu'elle apparaît.",pappers_fr:"Interroge les registres officiels français (SIRENE, codes d'activité) pour trouver des sociétés par métier, en temps réel.",crt:"Détecte les toutes nouvelles sociétés dès la mise en ligne de leur site web — un signal très précoce, avant tout le monde.",github:"Détecte les sociétés tech par l'activité de leurs développeurs — un signal très en amont, avant qu'elles ne fassent parler d'elles.",hn:"Scrute Hacker News, le forum de référence des fondateurs tech, pour repérer les projets qui émergent en premier.",fundraising:"Repère les sociétés qui viennent de lever des fonds — le moment précis où elles accélèrent et deviennent intéressantes.",backfill:"Repasse sur les périodes passées pour rattraper les sociétés qui auraient pu passer entre les mailles du filet.",websets:"Construit des listes de sociétés sur mesure à partir d'une simple description, en explorant tout le web.",websets_engine:"Construit des listes de sociétés sur mesure à partir d'une simple description, en explorant tout le web.",linkedin_posts:"Analyse les publications LinkedIn pour repérer les sociétés et dirigeants qui annoncent quelque chose d'intéressant.",linkedin_jobs:"Lit les offres d'emploi LinkedIn : une société qui recrute massivement dans un domaine trahit sa stratégie et sa croissance.",exa_semantic:"Recherche sémantique sur tout le web : vous décrivez ce que vous cherchez en langage naturel, et il trouve les sociétés qui y ressemblent.",exa_similar:"Partez d'une société que vous aimez, et il trouve toutes celles qui lui ressemblent sur le web.",crunchbase_search:"Interroge la base mondiale des startups et de leurs financements pour trouver des sociétés par profil.",other_custom:"Moteurs branchés spécialement pour votre thèse — chaque signal utile peut devenir un moteur sur mesure.",manual_paste:"Les sociétés que vous ajoutez vous-même à la main, évaluées selon vos critères exactement comme les autres.",find_similar_qualified:"Part des sociétés que vous avez déjà retenues pour en trouver d'autres, très proches, partout sur le web.",daily_news:"Relit l'actualité du jour à travers le prisme exact de votre thèse pour n'en garder que ce qui vous concerne.",alumni:"Suit les diplômés des meilleures écoles pour repérer ceux qui viennent de fonder une société.",competitor_exodus:"Détecte les départs de talents des sociétés concurrentes — souvent le signe d'une nouvelle société en création.",hackernews:"Scrute Hacker News, le forum de référence des fondateurs tech, pour repérer les projets qui émergent en premier.",crt_sh:"Détecte les toutes nouvelles sociétés dès la mise en ligne de leur site web — un signal très précoce, avant tout le monde.",pappers:"Interroge les registres officiels français (SIRENE, codes d'activité) pour trouver des sociétés par métier, en temps réel.",pappers_intl:"Interroge les registres d'entreprises internationaux pour trouver des sociétés par pays et par activité, en temps réel.",opencorporates:"Explore la plus grande base mondiale de registres d'entreprises pour retrouver des sociétés officielles partout dans le monde.",tavily:"Recherche web en temps réel : interroge tout le web à la volée pour capter les sociétés qui collent à votre thèse.",registre_gouv:"Interroge le registre officiel des entreprises françaises (recherche-entreprises) pour trouver des sociétés par activité.",local:"Trouve les commerces de proximité de votre métier, ville par ville. Sur Google Maps : les magasins physiques avec leur note, leurs avis et leur site (tri « leaders » ou « à reprendre »). Via le BODACC officiel : les affaires acquérables — liquidations, ventes & cessions de fonds, cessations (locaux à récupérer). Tourne à la demande (Google Maps payant) ; option radar quotidien gratuit via BODACC.",hunter:"Retrouve les coordonnées professionnelles des sociétés (emails, domaines) pour identifier les bons interlocuteurs à contacter."},xs={rss:"Reads hundreds of media outlets and specialist feeds every morning to spot the companies moving in your sector.",editorial:"Continuously follows the expert media and specialist newsletters in your sector to catch companies just starting to get noticed.",google_news:"Sweeps world news in real time to catch companies making headlines (raises, launches, appointments).",google_alerts:"Watches precise keywords across the whole web and surfaces every matching company the moment it appears.",pappers_fr:"Queries the official French registries (SIRENE, activity codes) to find companies by line of business, in real time.",crt:"Detects brand-new companies the moment their website goes live — a very early signal, ahead of everyone else.",github:"Detects tech companies from their developers' activity — a very early signal, before they make any noise.",hn:"Scans Hacker News, the go-to forum for tech founders, to catch the projects emerging first.",fundraising:"Spots companies that have just raised funds — the exact moment they accelerate and become interesting.",backfill:"Re-combs past periods to catch companies that might have slipped through the cracks.",websets:"Builds tailored company lists from a simple description, exploring the whole web.",websets_engine:"Builds tailored company lists from a simple description, exploring the whole web.",linkedin_posts:"Reads LinkedIn posts to spot the companies and executives announcing something worth knowing.",linkedin_jobs:"Reads LinkedIn job ads: a company hiring heavily in one area reveals its strategy and its growth.",exa_semantic:"Semantic search across the whole web: describe what you're looking for in plain language, and it finds the companies that match.",exa_similar:"Start from a company you like, and it finds every similar one across the web.",crunchbase_search:"Queries the global database of startups and their funding to find companies by profile.",other_custom:"Engines wired specifically for your thesis — any useful signal can become a custom engine.",manual_paste:"The companies you add yourself by hand, scored against your criteria exactly like the rest.",find_similar_qualified:"Starts from companies you've already kept to find others, very close to them, across the web.",daily_news:"Re-reads today's news through the exact lens of your thesis, keeping only what concerns you.",alumni:"Tracks graduates of top schools to spot those who have just founded a company.",competitor_exodus:"Detects talent leaving competitor companies — often the sign of a new company being born.",hackernews:"Scans Hacker News, the go-to forum for tech founders, to catch the projects emerging first.",crt_sh:"Detects brand-new companies the moment their website goes live — a very early signal, ahead of everyone else.",pappers:"Queries the official French registries (SIRENE, activity codes) to find companies by line of business, in real time.",pappers_intl:"Queries international company registries to find companies by country and activity, in real time.",opencorporates:"Explores the world's largest database of company registries to surface official companies anywhere in the world.",tavily:"Real-time web search: queries the whole web on the fly to catch companies matching your thesis.",registre_gouv:"Queries the official French company register (recherche-entreprises) to find companies by activity.",local:"Finds the main-street businesses in your trade, town by town. On Google Maps: the physical storefronts with their rating, reviews and website (sort 'leaders' or 'turnaround'). Via the official BODACC bulletin: acquirable businesses — insolvencies, sales & transfers of goodwill, closures (premises to take over). Runs on demand (Google Maps is paid); optional free daily BODACC radar.",hunter:"Finds companies' professional contact details (emails, domains) to identify the right people to reach."};function Ha(e){const a=(e||"").trim().toLowerCase();if(!a)return"";const r=ar[a]||ar[a+"_engine"];return r||a.replace(/_/g," ").split(" ").filter(Boolean).map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")}function gs(e,a){const r=(e||"").trim().toLowerCase(),n=a?xs:hs;return n[r]||n[r+"_engine"]||""}const nr=[["1",1],["3",3],["7",7],["all",365]];function bs(e){return e?(Array.isArray(e)?e.map(r=>Number(r)||0):Object.keys(e).sort().map(r=>Number(e[r])||0)).slice(-14):[]}function vs({vals:e}){if(!e.length||!e.some(l=>l>0))return null;const a=Math.max(...e,1),r=56,n=16,o=r/Math.max(e.length-1,1),i=e.map((l,s)=>`${(s*o).toFixed(1)},${(n-l/a*(n-2)).toFixed(1)}`).join(" ");return t.jsx("svg",{className:"se-spark",viewBox:`0 0 ${r} ${n}`,width:r,height:n,"aria-hidden":"true",children:t.jsx("polyline",{points:i,fill:"none",stroke:"currentColor",strokeWidth:"1.5"})})}function ys(){const{t:e,lang:a,data:r,dossiers:n}=V(),o=a==="en",i=r.session.token||"",l=r.fund||"",[s,c]=u.useState(!1),[g,d]=u.useState("7"),[x,m]=u.useState({}),[h,p]=u.useState(!1),[v,y]=u.useState(""),[f,k]=u.useState(null),[j,w]=u.useState(""),[N,z]=u.useState(!1),[S,q]=u.useState(""),A=u.useRef(null),F=u.useRef(null),D=x[g],P=u.useCallback(async O=>{var Y;const Q=((Y=nr.find(([K])=>K===O))==null?void 0:Y[1])||7;p(!0),y("");try{const K=await fetch(`${Ba}/engines-drilldown-batch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fund_slug:l,days:Q,fund_scoped:!0,token:i})}),J=await K.json();if(!K.ok||J.error)throw new Error(J.error||`HTTP ${K.status}`);m(ge=>({...ge,[O]:J}))}catch(K){y(String(K.message||K))}finally{p(!1)}},[l,i]);u.useEffect(()=>{s&&!x[g]&&!h&&P(g)},[s,g]),u.useEffect(()=>()=>{F.current&&window.clearInterval(F.current)},[]);const L=u.useMemo(()=>{const O=(D==null?void 0:D.engines)||{};return Object.entries(O).map(([Q,Y])=>{const K=Y.summary||{};return{key:Q,sourced:K.sourced||0,matched:K.matched||0,noMatch:K.no_match||0,rate:typeof K.match_rate=="number"?Math.round(K.match_rate*(K.match_rate<=1?100:1)):0,spark:bs(K.by_day),leads:Y.leads||[]}}).sort((Q,Y)=>Y.sourced-Q.sourced)},[D]),R=u.useMemo(()=>L.reduce((O,Q)=>O+Q.sourced,0),[L]),b=u.useMemo(()=>L.filter(O=>O.sourced>0).length,[L]),T=u.useMemo(()=>{const O=new Map;return n.forEach(Q=>{const Y=(Q.name||"").trim().toLowerCase();Y&&!O.has(Y)&&O.set(Y,ze(Q))}),O},[n]),$=O=>O===void 0?o?"not on this page":"pas sur cette page":e.plabels[O]||"",X=O=>{const Q=((D==null?void 0:D.params)||{})[O],Y=Q?JSON.stringify(Q).slice(0,400):"",K=o?`Adjust the "${Ha(O)}" engine`:`Ajuste le moteur « ${Ha(O)} »`,J=Y?o?` (current settings: ${Y})`:` (réglages actuels : ${Y})`:"";return`${K}${J} : `},I=async()=>{var Q;const O=(((Q=A.current)==null?void 0:Q.value)||"").trim();if(!(O.length<8||N)){z(!0),q("");try{const Y=await fetch(`${Ba}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:i,message:O,who:"cockpit-v2"})}),K=await Y.json();if(!Y.ok||K.ok===!1)throw new Error(K.error||`HTTP ${Y.status}`);if(K.reply&&!K.async){q(String(K.reply)),z(!1);return}const J=K.job_id;if(!J){q(o?"Sent.":"Envoyé."),z(!1);return}F.current=window.setInterval(async()=>{try{const W=await(await fetch(`${Ba}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:J})})).json();W.done&&(F.current&&window.clearInterval(F.current),F.current=null,q(String(W.reply||W.error||(o?"Done — settings updated.":"Terminé — réglages mis à jour."))),z(!1))}catch{}},3e3)}catch(Y){q((o?"Error: ":"Erreur : ")+String(Y.message||Y)),z(!1)}}};return i?t.jsxs("div",{className:"srceng"+(s?" on":""),children:[t.jsxs("button",{type:"button",className:"se-head","aria-expanded":s,onClick:()=>c(O=>!O),children:[t.jsx("span",{className:"se-ico",children:"🔎"}),t.jsx("b",{children:o?"Your sourcing engines":"Vos moteurs de sourcing"}),D&&t.jsx("span",{className:"se-sum",children:o?`${b} active · ${R.toLocaleString("en-US")} companies found`:`${b} actifs · ${R.toLocaleString("fr-FR")} sociétés trouvées`}),t.jsx("span",{className:"se-arr",children:s?"▾":"▸"})]}),s&&t.jsxs("div",{className:"se-body",children:[t.jsxs("div",{className:"se-bar",children:[nr.map(([O])=>t.jsx("button",{type:"button",className:"se-win"+(g===O?" on":""),onClick:()=>d(O),children:O==="1"?o?"Today":"Aujourd'hui":O==="all"?o?"All time":"Toujours":`${O} j`},O)),t.jsx("span",{className:"se-note",children:o?"Panel totals = the chosen window; the funnel above counts the screened view.":"Les totaux du panneau = la fenêtre choisie ; le tunnel compte les criblées de la vue."})]}),h&&t.jsx("div",{className:"se-load",children:o?"Reading engines…":"Lecture des moteurs…"}),!!v&&t.jsxs("div",{className:"se-err",children:[v," ",t.jsx("button",{type:"button",onClick:()=>void P(g),children:"↻"})]}),!h&&!v&&D&&t.jsx("div",{className:"se-cards",children:L.map(O=>t.jsxs("div",{className:"se-card"+(O.sourced===0?" idle":""),children:[t.jsxs("div",{className:"se-ct",children:[t.jsx("b",{children:Ha(O.key)}),t.jsx("span",{className:"se-st"+(O.sourced>0?" ok":""),children:O.sourced>0?o?"⚡ actively sourcing":"⚡ source activement":o?"standby":"en veille"}),t.jsx(vs,{vals:O.spark})]}),t.jsx("p",{className:"se-desc",children:gs(O.key,o)||(o?"Engine wired for your thesis.":"Moteur branché pour votre thèse.")}),t.jsxs("div",{className:"se-hero",children:[t.jsx("b",{children:O.sourced.toLocaleString(o?"en-US":"fr-FR")}),t.jsx("span",{children:o?"companies found":"sociétés trouvées"})]}),(O.matched>0||O.noMatch>0)&&t.jsxs("div",{className:"se-split",children:[o?"incl.":"dont"," ",t.jsxs("button",{type:"button",onClick:()=>k({eng:O.key,kind:"kept"}),children:[O.matched," MATCH"]})," · ",t.jsxs("button",{type:"button",onClick:()=>k({eng:O.key,kind:"rej"}),children:[O.noMatch," ",o?"ruled out":"écartées"]}),O.rate>0&&t.jsxs("em",{children:[" · ",O.rate,"%"]})]}),!!(D.params||{})[O.key]&&t.jsxs("div",{className:"se-params",children:[t.jsx("i",{children:o?"Your settings:":"Vos réglages :"})," ",String(JSON.stringify((D.params||{})[O.key])).slice(0,160)]}),t.jsx("div",{className:"se-acts",children:t.jsxs("button",{type:"button",className:"se-adj",onClick:()=>{w(X(O.key)),q(""),window.setTimeout(()=>{A.current&&(A.current.focus(),A.current.setSelectionRange(A.current.value.length,A.current.value.length))},60)},children:["✎ ",o?"Adjust this engine":"Ajuster ce moteur"]})}),f&&f.eng===O.key&&t.jsxs("div",{className:"se-ovl",children:[t.jsxs("div",{className:"se-ovl-h",children:[t.jsx("b",{children:f.kind==="kept"?o?"MATCH via this engine":"MATCH via ce moteur":o?"Ruled out via this engine":"Écartées via ce moteur"}),t.jsx("button",{type:"button",onClick:()=>k(null),children:"×"})]}),t.jsx("ul",{children:O.leads.filter(Q=>{const Y=((Q.verdicts||[])[0]||{}).status||"",K=/match/i.test(Y)&&!/no[\s_-]?match/i.test(Y);return f.kind==="kept"?K:!K}).slice(0,14).map((Q,Y)=>{const K=(Q.company_name||"").trim();return t.jsxs("li",{children:[t.jsx("b",{children:K||"—"}),t.jsx("span",{children:$(T.get(K.toLowerCase()))})]},K+Y)})})]})]},O.key))}),!!j&&t.jsxs("div",{className:"se-nl",children:[t.jsxs("div",{className:"se-nl-h",children:["✎ ",o?"Correct this thesis":"Corriger cette thèse"]}),t.jsx("textarea",{ref:A,rows:3,maxLength:12e3,defaultValue:j,placeholder:o?"Say what to change, in plain words…":"Dites ce qu’il faut changer, en langage naturel…"},j),t.jsxs("div",{className:"se-nl-a",children:[t.jsx("button",{type:"button",disabled:N,onClick:()=>void I(),children:N?o?"⏳ applying…":"⏳ application…":o?"Apply":"Appliquer"}),t.jsx("button",{type:"button",className:"gh",onClick:()=>{w(""),q("")},children:o?"Close":"Fermer"})]}),!!S&&t.jsx("div",{className:"se-nl-r",children:S})]})]})]}):null}const ws={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Tout ce que STAN a passé au crible sur la fenêtre : chaque société évaluée selon vos critères, retenue ou écartée automatiquement.","STAN a retenu ces sociétés selon vos critères, décision justifiée. NOUS vérifions ses choix — écartez, validez, ou lancez une analyse sur les incertaines.","Les mémos de STAN, relus par NOUS : synergies chiffrées, verdict argumenté. Validez celles à contacter, mettez « à trancher » celles où vous hésitez.","À VOUS de jouer : les meilleures cibles, présentées le lundi par votre Corporate Developer. Tranchez OUI ou NON — vos oui passent en Validées.","Vos OUI — la short-list à contacter. NOUS préparons l’approche, ou l’engageons en votre nom (offre Entreprise).","Écartées par STAN ou par VOUS. Chaque NON affine les critères de Stan. Repêchez-en une à tout moment.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(e,a,r)=>`<b>${e} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${r} sans réponse.</b>`,morningThesis:(e,a,r)=>`Ce matin, <b>${e}</b> société${e===1?"":"s"} criblée${e===1?"":"s"} par vos moteurs`+(typeof r=="number"?`, <b>${r}</b> retenue${r===1?"":"s"}.`:".")+(a?` <b>${a}</b> attend${a>1?"ent":""} votre évaluation.`:' <span class="ok">Tout est évalué.</span>'),morningEnginesTitle:"Ces sociétés viennent UNIQUEMENT du sourcing de votre thèse : vos codes d’activité, vos pays, vos angles d’acquisition, vos critères d’exclusion. Aucune société d’un autre fonds n’entre ici. Seule la veille d’actualité part d’un ratissage commun pour des raisons de coût — mais chaque opération qui en sort est ensuite confrontée à vos critères, et n’entre dans votre page que si elle les passe.",morningLast:(e,a,r)=>`Dernier passage des moteurs le <b>${r}</b> : <b>${e}</b> société${e===1?"":"s"} sourcée${e===1?"":"s"}.`+(a?` <b>${a}</b> restante${a>1?"s":""} pas encore évaluée${a>1?"s":""}.`:' <span class="ok">Tout est évalué.</span>'),morningEval:e=>`▶ Les traiter (${e})`,identTitle:e=>`Cibles pour ${e}`,identCoverage:"COUVERTURE DU MARCHÉ",identCoverageOf:(e,a)=>`<b>${e}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"MOTEUR DE MÉMOS",identPerDay:"mémo/jour",identPending:e=>`→ ${e} en attente`,identPendingWait:"→ lecture de la file…",identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Trier la liste",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:e=>`Décision annulée sur ${e}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ OUI",actNo:"✗ NON",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:e=>`${e} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"CRIBLE · MÉMO",colCrible:"CRIBLE",colMemo:"MÉMO",colScore:"SCORE",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:e=>`Depuis le verdict de Stan : ${e} j`,waitChip:e=>`⏱ ${e} j`,densList:"LISTE",densOpen:"DÉPLIÉ",densLigne:"LIGNE",densMaxi:"MAXI",unfoldAll:"Tout déplier",foldAllLbl:"Tout replier",foldArts:"Articles",zoomSrc:"Source",viewLink:"Voir l’article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Site web de la société",viewSiteBusyHint:"Recherche du site web…",viewSrcHint:"Article source",viewLinkClose:"Fermer l’article",viewLinkTab:"Ouvrir dans un onglet",viewLinkHint:"S’ouvre dans une nouvelle fenêtre",zoomSimilar:"Voir les similaires",zoomInCockpit:"Isoler dans la liste",zoomArt:"Edito du jour",zoomEvalHint:"Crible selon vos critères",zoomSimilarHint:"Même secteur dans la liste",zoomIsolateHint:"Ne garder que cette société",zoomNewsMark:"Décryptage de l’édition — le texte s’ouvre à droite",zoomPulseEval:"évaluables",zoomPulseExplore:"à explorer",zoomPulseArts:"actualités",doNews:"📰 Actualités",zoomPulseEd:"dans l’article du jour",zoomPulseBtn:"Édition du jour",zoomPulseWeek:"7 derniers jours",zoomPulseWeekEd:"cette semaine",doAll:"Tout",doEdito:"📖 Edito du jour",doBrief:"📖 Brief du jour",doEval:"⚡ Évaluables",doExplore:"🔎 À explorer",doAna:"⚡ À analyser",doBriefHint:"Afficher le brief du jour",doTodo:"⚡ À évaluer",doDone:"✓ Déjà évaluées",cdMemoTab:"📖 Mémo",evalPickSite:"plusieurs sites portent ce nom — ouvrez pour vérifier, puis validez celui qui est le bon.",evalPickGo:"✓ C’est celui-ci",evalPickChip:"SITE À CONFIRMER",eqNamePh:"Nom de société ou URL…",eqAdd:"Ajouter une ligne",eqNoSite:"aucun site trouvé — le nom sera évalué tel quel",eqReady:"prête",eqPick:"choisir le site →",eqRunning:"⏳ évaluation…",eqGo:e=>`⚡ Évaluer les ${e} lignes`,eqHint:"Vos lignes restent ici — remplissez en déplacement, lancez plus tard.",eqClearDone:"Retirer les évaluées",chainMemoGo:"⚡ Lancer le mémo (1 crédit)",analyseConfirm:e=>`Lancer ${e} mémo${e>1?"s":""} d’analyse ?

Cela consomme ${e} crédit${e>1?"s":""} mémo. Les sociétés partiront en « Analysées » ou « À trancher » une fois le mémo prêt.`,sortBy:"Trier par",sortSig:"Signal",sortAmount:"Montant",sortAge:"Récence",sortName:"Nom",sortCountry:"Pays",sortStage:"Stade",sortCrible:"Crible",sortMemo:"Mémo",sortScore:"Score",fMenu:"Filtres",memoSynth:"SYNTHÈSE",memoOpenFull:"📖 Voir le mémo complet →",memoDeep:"⚡ Mémo détaillé",memoDeepHint:"Pour ce dossier à trancher, vous pouvez lancer l’analyse détaillée : étude de marché, quadrant concurrentiel, scénarios.",memoDeepSent:e=>`Mémo détaillé lancé sur ${e} — prêt dans 35 à 40 minutes`,memoInstantSent:e=>`Analyse lancée sur ${e} — mémo prêt dans ~15 minutes`,liveStrip:"Analyses en direct",liveBoot:"lancement…",liveEnd:"fin {t}",liveOpenQueue:"Voir la file",memoNone:"Aucun mémo pour ce dossier — lancez l’analyse.",creditsCap:"CRÉDITS MÉMO",creditsToday:"aujourd’hui",creditsRecharge:"Recharger →",creditsCost:e=>`−${e} crédit${e>1?"s":""}`,creditsNone:"Crédit épuisé — rechargez ou attendez demain 7 h.",rechargeTitle:"Crédits mémo",rechargeHint:e=>`Votre offre comprend <b>${e} crédits par jour</b>, rechargés chaque matin. Besoin de plus tout de suite ?`,rechargeNote:"Les crédits achetés n’expirent pas. Ils s’utilisent après vos crédits quotidiens.",rechargeBuy:"Ajouter",rechargeUnit:(e,a)=>`${e} crédits — ${a} €`,onbTag:"APERÇU PRIVÉ · LECTURE SEULE",onbTitle:e=>`Votre deal flow est prêt — <b>${e} cibles retenues</b> par Stan`,onbSub:e=>`${e} sociétés passées au crible sur votre thèse. Les dix premières lignes sont ouvertes ; le reste se débloque en trente minutes.`,onbSteps:[["Stan a étudié votre présence en ligne","Site, offres d’emploi, presse — il en a déduit vos angles d’acquisition."],["Il a criblé le marché","Chaque société confrontée à vos critères."],["Il a rédigé des mémos","Analyses chiffrées, synergies, verdicts."],["À vous de trancher","Trente minutes pour régler votre deal flow et tout débloquer."]],onbCta:"Choisir un créneau →",lockbarText:"Paramétrons votre deal flow rêvé en 30 minutes, avec un Corporate Developer",lockbarContactBefore:"Alexandre — ",lockbarContactMid:" · ",lockbarCta:"Choisir un créneau",rdvHeading:"Paramétrons votre deal flow rêvé en 30 minutes",rdvSubBefore:"Choisissez un créneau ci-dessous, ou contactez votre expert Corporate Development directement au ",rdvSubMid:" ou par email à ",rdvCoFallback:"votre société",rdvUnlockLabel:e=>`Déblocage ${e}`,rdvUnlocks:e=>[["Accédez à toutes vos cibles retenues","Mémos d’investissement complets, synergies, contacts, angle d’approche."],["Stratégie d’acquisition construite avec vous","Hypothèse + stratégie d’acquisition recalibrées en live, avec vous."],["Tranchons ensemble les cibles que vous voulez","OUI / NON, sourcing de sociétés similaires, export et synchronisation CRM."],["Votre AI Corporate Developer est lancé",`Stan travaille pour ${e} chaque matin — vous n’avez plus qu’à décider.`]],identRepub:"Republier la page maintenant — re-rend la page avec ce qui est déjà connu. Gratuit : aucun moteur ne repart, aucun modèle n’est appelé si votre thèse n’a pas changé.",identRepubDone:"Republication lancée — vos chiffres se rafraîchissent en une trentaine de secondes. Actualisez la page pour les voir.",plugHow1:"Dans votre outil (Make, Zapier, n8n, HubSpot, Pipedrive…), créez un déclencheur « webhook » et copiez l’URL qu’il vous donne.",plugHow2:"Collez-la ci-dessous, Enregistrez, puis Testez : un message d’exemple part aussitôt dans votre outil.",plugHow3:"C’est fini. Trois moments déclenchent un envoi : vous validez une cible, vous la faites avancer d’un stade, ou une approche est préparée.",plugExT:"Ce que votre outil reçoit, exactement",plugExResult:"Dans votre CRM, vous obtenez une ligne par société validée : son nom, votre note, le score de Stan, son site et le lien du mémo.",plugApiT:"Une seule société, depuis un script ou Make",plugQuota:"Ce raccourci est plafonné à 10 sociétés par jour et par lien — le chemin normal reste la barre d’évaluation de la page.",plugFeeds:"Les flux JSON, CSV, Google Sheets et Excel vivent dans le bouton 📥 Exporter, juste à côté — ils ne sont pas répétés ici.",plugTokenNote:"⚠️ Ces liens portent la clé d’accès de cette page : partout où vous les collez, ils ouvrent vos cibles. Ne les mettez que dans vos propres outils.",plugDoc:"Documentation complète → proplace.co/api/",csNone:"Statut",csAnaNeedMemo:"Pour passer en « Analysée », il faut un mémo.",csAnaRun:"⚡ Lancer le mémo (1 crédit)",csAnaAnyway:"Marquer quand même",qOffer:"VOTRE OFFRE",qDelay:"délai de verdict",qRate:e=>`${e} mémo${e>1?"s":""} par jour`,qManual:e=>`${e} mémo par jour, à votre demande`,qPaused:"aucun mémo automatique",qManualSet:"rythme réglé à la main",qEta:(e,a,r)=>`À ce rythme (${a}/jour), il reste ${e} mémo${e>1?"s":""} à écrire — toute la file est traitée en ${r} jour${r>1?"s":""}.`,qEtaPaused:"Rythme à zéro : rien ne part. Activez une offre pour projeter une date.",qEtaDone:"Toute la file est déjà analysée.",qLate:(e,a)=>`Le délai « ${e} » ne peut pas être tenu : il faudrait dépasser le plafond de ${a} mémos par jour.`,qRunning:"En cours",qUpNext:e=>`À venir — ${e} société${e>1?"s":""} dans la file, dans l’ordre de tirage`,qUpNextWait:"À venir — lecture de la file…",qFileWait:"Lecture de la file en cours — quelques secondes.",qHedge:"Ordre projeté, recalculé chaque matin. Un lead frais tombé dans la nuit passe devant.",qFresh:"frais",qLater:"plus tard",qVerdictsT:"Les verdicts de Stan — où part chaque dossier",qVerdicts:[["CALL","sa meilleure trouvaille : à vous de trancher OUI ou NON → onglet « À trancher »."],["CONSIDER","solide, mérite un regard de plus → onglet « Analysées »."],["MONITOR","à garder à l’œil, pas encore prioritaire → onglet « Analysées »."],["PASS","hors sujet pour l’instant → onglet « Écartées »."]],covHowT:"D’où vient ce chiffre ?",covTotal:"Total du marché",covColCode:"Code · pays",covColN:"Sociétés",covColSource:"Source",covWide:e=>`${e} non publié — élargi au code parent`,covMissing:"aucune donnée publiée",covRejected:e=>`Codes écartés faute de sociétés trouvées : ${e}.`,covComputedAt:e=>`calculé le ${e}`,filterOff:"Retirer ce filtre",fSelected:"sélectionnés",funScreened:(e,a)=>`sociétés criblées${e?a?` du ${e} au ${a}`:` depuis le ${e}`:""}`,funKept:"retenues comme cibles sérieuses",funAnalyzed:"analysées en profondeur",funShown:"publiées sur votre page, tous filtres levés",sigStripMore:e=>`+ voir les ${e} autre${e>1?"s":""}`,boxCollapse:"Réduire",boxExpand:"Agrandir",memoReadHere:"📄 Lire le mémo ici",memoHideHere:"▴ Replier le mémo",sigChipTitle:(e,a)=>`Signalé ${e} · ${a}`,funPerWindow:(e,a)=>`Du ${e} au ${a}`,funPerAll:"Depuis le début",funOfMarket:(e,a)=>`sur ~${e} sociétés de VOTRE marché, soit ${a} %`,funScope:"Sourcing de votre thèse uniquement — vos codes d’activité, vos pays, vos angles. Aucune société d’un autre fonds n’est comptée ici.",funToday:e=>`dont ${e} aujourd’hui`,actTitle:"Activité des 30 derniers jours",actScreened:"criblées",actKept:"retenues",actToday:"aujourd’hui",fstatsShow:"Voir l’activité des 30 derniers jours",fstatsHide:"Masquer l’activité",sinceTitle:(e,a)=>`${e} nouvelle${e>1?"s":""} cible${e>1?"s":""} depuis votre dernière visite (${a})`,sinceSub:"arrivées depuis votre dernier passage — à parcourir en premier",sinceMore:e=>`+${e} autres`,sinceOut:e=>`${e} sortie${e>1?"s":""} de la liste`,morningDock:e=>e?`${e} criblées ce matin`:"Crible du matin",morningDockTitle:"Voir les sociétés criblées aujourd’hui — quel qu’ait été le verdict.",sinceDock:e=>`${e} nouvelle${e>1?"s":""}`,sigDock:e=>`${e} ${e>1?"signaux":"signal"}`,newsDock:e=>`${e} actualité${e>1?"s":""}`,newsSince:e=>`depuis le ${e}`,newsDockHint:"Les articles du flux — tribunes, listes, récaps — sans société évaluable. « Extraire les sociétés » est le pont vers l’évaluation.",newsWord:"actualités — lecture, pas décision",identSyncConfirm:"Relancer le sourcing maintenant ? Un passage des moteurs prend quelques minutes.",plugAutoOn:e=>`⚡ Envoi automatique ACTIF (${e}) — chaque cible que vous validez part toute seule en séquence.`,plugAutoOff:"Envoi automatique inactif — valider une cible ne l’envoie nulle part.",plugCrm:"Créer les dossiers dans mon CRM",plugCrmHint:"Collez l’URL de webhook de votre outil : chaque décision y arrive aussitôt.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Enregistrer",plugSaved:"Webhook enregistré",plugTest:"Tester",plugTested:"Test envoyé",plugTestThrottled:"Déjà testé il y a moins de 5 s — rien n’est reparti.",plugRemove:"Retirer",plugRemoved:"Webhook retiré",plugMcp:"Claude & IA (MCP)",plugBulk:"Contacter mes cibles",plugBulkHint:"Voyez d’abord qui partirait : l’aperçu ne contacte personne.",plugBulkTabs:[["valides","Validées"],["call","À trancher"],["retenus","Retenues"]],plugBulkPreview:"👁 Aperçu",bulkArm:"📤 Envoyer pour de vrai",bulkNoDest:"Aucune destination enregistrée : renseignez d’abord votre outil ci-dessus.",bulkScope:"Ce qui part, c’est l’onglet entier côté serveur — pas la vue filtrée à l’écran.",bulkWarn:(e,a)=>`Vous allez contacter ${e} société${e>1?"s":""} via ${a}. C’est irréversible, et le serveur ne vérifie pas si elles ont déjà été contactées.`,bulkConfirm:e=>`Oui, envoyer via ${e}`,bulkCancel:"Annuler",bulkSending:"Envoi en cours…",bulkDone:(e,a,r)=>`${e} société${e>1?"s":""} envoyée${e>1?"s":""}. ${a} joignable${a>1?"s":""} sur LinkedIn seulement, ${r} sans email.`,bulkNone:"Aucune société n’avait d’email : rien n’a été envoyé.",bulkLocked:(e,a)=>`Envoyé le ${e} — ${a} société${a>1?"s":""}. Nouvel envoi possible dans 24 h.`,bulkPreviewFirst:"Lancez d’abord l’aperçu : il dit exactement qui partirait.",cdEvaluation:"Évaluation",cdConviction:"Conviction",cdAnalyse:"Analyse",cdSociete:"Société",cdContact:"Contact",cdSuivi:"Suivi",actMemoOf:e=>e==="detailed"?"📖 Lire le mémo détaillé":"📖 Lire le mémo éclair",memoLoading:"Lecture du mémo…",memoLoadErr:"Le mémo ne se laisse pas lire ici — ouvrez-le en pleine page.",memoUnfold:e=>`Déplier cette section (${e} Ko)`,cdEngagementHint:"Score d’activité du dossier : vos clics et demandes sur cette page, plus l’avancement de l’approche commerciale. À partir de 20, le dossier est marqué 🔥.",mdMindmap:e=>`Carte mentale — ce que fait ${e}`,mdContactKnown:"Décideur — coordonnées du cockpit",cdCrible:"au crible",cdMemo:e=>e?`après mémo ${e}`:"après mémo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict du",cdSector:"Secteur",cdStage:"Stade",cdCountry:"Où",cdSite:"Site",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Détectée le",cdName:"Dirigeant",cdEmail:"Email",cdCeoStatus:"Votre décision",cdEngagement:"Engagement",qaTitle:"Décrire cette société",qaHint:"Lecture de son site, puis quatre blocs : à qui elle s’adresse, ce qu’elle vend, comment elle gagne de l’argent, et ce qu’il faut en retenir. Aucun verdict — le crible a déjà tranché.",qaRun:"📄 Décrire",qaBusy:"Lecture du site…",qaVP:"À qui, et pour quel problème",qaProduct:"Ce qu’elle vend",qaModel:"Comment elle gagne de l’argent",qaSummary:"À retenir",qaSources:e=>`${e} page${e>1?"s":""} lue${e>1?"s":""}`,qaQuota:"Plafond du jour atteint : réessayez demain.",qaEmpty:"Le site ne dit rien d’exploitable — rien n’a été inventé.",dsBtn:"🗂 Dossier comité",dsHint:"Un A4 par société : le verdict du crible et sa raison, l’identité, l’analyse quand elle a été lancée, et votre décision. Aucun chiffre financier — nous n’en recevons aucun.",dsTitle:e=>`Dossier comité — ${e} société${e>1?"s":""}`,dsCap:(e,a)=>`Les ${e} premières sur ${a} : un comité ne lit pas ${a} pages.`,dsWhy:"Pourquoi cette société est devant vous",dsAnalysis:"Ce qu’elle fait",dsDecision:"Votre décision",dsEmpty:"Aucune société dans la sélection courante.",dsFoot:e=>`Sélection établie par Proplace pour ${e} — document interne, ne pas diffuser.`,covFunnel:"Votre marché, au crible",covScreened:e=>`${e} sociétés passées au crible`,covOf:e=>`sur ~${e} sociétés pertinentes`,covNoEst:"Votre marché adressable n’est pas encore chiffré : la couverture s’affichera dès qu’il le sera.",covPace:e=>`${e} sociétés criblées par jour`,covEta:e=>e<=0?"Votre marché est entièrement couvert.":e<60?`Couverture complète dans ~${e} jours, à ce rythme.`:`Couverture complète dans ~${Math.round(e/30)} mois, à ce rythme.`,covRate:"Rythme d’analyse",covRateHint:"Combien de sociétés retenues reçoivent un verdict argumenté chaque jour. À zéro, l’analyse est en pause.",covRateNow:e=>e<=0?"En pause":`${e} par jour`,covKept:"retenues",covAna:"analysées",covScopeAll:"sur le monde entier",covShown:"présentées ici",bulkReplayed:"Cet envoi avait déjà été enregistré : rien n’est reparti. Vos cibles n’ont été contactées qu’une fois.",bulkPending:"L’envoi précédent est encore en cours : rien n’a été renvoyé.",plugBulkResult:(e,a,r)=>`${e} partiraient par email · ${a} par LinkedIn · ${r} sans contact.`,memoAlertTitle:"Votre alerte mémo",memoAlertSub:"Recevez un email dès qu’un mémo de votre fonds est finalisé — avec son lien direct.",memoAlertToggle:"M’envoyer chaque mémo terminé",memoAlertEmail:"Destinataire",memoAlertSaved:"Enregistré ✓",memoAlertErr:"Échec d’enregistrement — réessayez",memoAlertSections:"Sections de l’email",memoAlertSec:[["swot","SWOT"],["action","Plan d’action"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Verdict de Stan"]],memoAlertPreview:"👁 Prévisualiser",memoAlertBtn:"Votre alerte mémo",alertTabDaily:"Quotidien",alertTabWeekly:"Hebdomadaire",alertTabMarket:"Le marché",alertSections:"Sections de l’email",alertSec:[["pending","Dossiers à trancher"],["stats","Vos chiffres clés"],["autonomous","Décisions automatiques de Stan"],["market","Analyse de marché"],["sourcing","Votre sourcing du jour"]],alertSecSlow:"(plus long à générer)",alertSecNote:"Décocher l’analyse de marché rend l’aperçu instantané.",alertPreview:"👁 Prévisualiser l’email d’aujourd’hui",alertPreviewWeekly:"👁 Prévisualiser le bilan",alertSubject:"Objet :",alertPreviewBusy:"Aperçu en cours de génération, réessayez dans quelques secondes.",alertPreviewRetry:e=>`Génération en cours — nouvel essai dans ${e} s…`,alertPreviewFail:"Aperçu indisponible pour l’instant — décochez « Analyse de marché » pour l’obtenir tout de suite.",alertPreviewEmpty:"À cet instant : rien à trancher — l’email ne partira pas.",alertTest:"✉ M’envoyer un test",alertTestOk:e=>`✓ Envoyé à ${e} — vérifiez aussi vos spams/promotions.`,alertTestHint:"N’affecte pas l’envoi quotidien.",alertBtnPrevBusy:"⏳ Fabrication…",alertBtnTestBusy:"⏳ Envoi…",alertPreviewWait:e=>`Fabrication de votre email — ${e} s. Le premier aperçu de la journée demande jusqu’à 90 s : il est rendu pour de vrai, pas simulé. Vous pouvez laisser la fenêtre ouverte.`,alertTestWait:e=>`Envoi en cours — ${e} s. L’email est d’abord fabriqué, puis expédié dans votre boîte. Ne refermez pas la fenêtre.`,csMoved:(e,a)=>`${e} → ${a} · la ligne rejoint l’onglet correspondant.`,sinceLabel:e=>e?`nouvelles depuis votre visite du ${e}`:"nouvelles depuis votre dernière visite",sinceChip:"nouvelles",sinceSince:e=>`depuis le ${e}`,alertSaving:"Enregistrement…",alertSavedShort:"✓ Enregistré",alertReadOnly:"Vue de démonstration : ces réglages sont en lecture seule.",alertWeeklySub:"Un email par semaine : le bilan de la semaine et ce que votre thèse a appris de vos décisions.",alertWeeklyOn:"📬 Recevoir votre bilan de la semaine",alertWeeklyWhen:"Jour et heure d’envoi (Paris)",alertDow:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],alertLoadError:"Impossible de charger vos préférences.",alertThrottled:"Trop vite — attendez quelques secondes et refaites le réglage.",alertInactive:"Votre accès n’est pas encore actif — parlons-en.",alertNoLead:"Destinataire à définir avec nous.",exportViewTitle:"CSV de la vue filtrée",exportViewDesc:e=>`Les ${e} lignes de votre sélection actuelle — onglet, facettes, recherche et fenêtre comprises. Séparateur « ; », prêt pour Excel.`,exportViewBtn:"Télécharger",exportViewDone:e=>`${e} ligne${e>1?"s":""} exportée${e>1?"s":""}`,printTitle:"Imprimer la sélection",printDesc:e=>`Les ${e} lignes à l'écran, en A4 : pour qui, à quelle date, l'entonnoir chiffré, puis la liste. La carte, les filtres et les boutons ne sont pas imprimés.`,printBtn:"Imprimer",exportViewHead:"Société|Statut|Verdict Stan|Score|Pays|Secteur|Étape post-OUI|Contact|Email|Lien mémo|Date|Raison",tourStart:"Lancer le guide pas à pas",tourIntro:"La visite guidée couvre toute la page de A à Z, sur la vraie page : chaque étape éclaire l’endroit exact — de votre thèse à votre alerte email.",tourStep:(e,a)=>`Étape ${e}/${a}`,tourPrev:"← Précédent",tourNext:"Suivant →",tourDone:"Terminer",tourClose:"Fermer",tourPlayTitle:"Visite guidée",ahaATitle1:"1 dossier attend votre décision",ahaATitleN:e=>`${e} dossiers attendent votre décision`,ahaABody:"OUI = on prépare l’approche ; NON = on affine le tir.",ahaABtn:"Trancher maintenant →",ahaBTitle:"Un mémo complet vous attend",ahaBBody:e=>`${e} a déjà son mémo d’analyse — lisible en 3 minutes.`,ahaBBtn:"Ouvrir le mémo →",ahaRetTitle:e=>e===1?"1 société retenue vous attend":`${e} sociétés retenues vous attendent`,ahaRetBody:"Le tri de Stan est fait — chaque retenue a sa fiche, sa carte et son signal.",ahaRetBtn:"Voir les sociétés retenues →",ahaEvalTitle:e=>e===1?"1 société attend votre évaluation":`${e} sociétés attendent votre évaluation`,ahaEvalBody:"Rien n’est encore retenu : c’est la première pile à dérouler. Une société à la fois, Stan fait le crible.",ahaEvalBtn:"Ouvrir la pile à évaluer →",loadMsgs:["Réveil des moteurs de sourcing…","Chargement de vos cibles…","Les cartes et les signaux arrivent…","Tri selon votre thèse…","Encore un instant — le premier chargement est le plus long."],ahaCTitle:"Vos premières cibles sont là",ahaCBody:"Dites-nous si ça vise juste — chaque retour affine la machine.",ahaCBtn:"Voir mes critères →",howto:[["**Réglez votre ciblage.** Ouvrez « Vos critères » : c’est votre thèse — ce que vous cherchez, ce que vous écartez. Corrigez-la en langage naturel dès que quelque chose cloche ; le sourcing du lendemain matin s’y réaligne tout seul.","crit"],["**Sourcez un maximum de cibles.** Évaluez une société en collant son nom ou son site — ou une liste entière —, et regardez vos moteurs ratisser le web avec vos réglages.","eval"],["**Faites avancer chaque cible dans le tunnel, de gauche à droite** — Évaluées › Retenues › Analysées › À trancher › Validées › Écartées. Sur chaque carte, « Votre statut » la classe en un clic ; votre note « pourquoi » reste visible. Les 👍/👎 ne classent jamais : ils affinent votre thèse.","tab1"],["**Tranchez les « À trancher ».** Stan vous laisse le dernier mot : OUI (Validée) ou NON (Écartée), avec un mot sur le pourquoi.","tab3"],["**Comprenez comment Stan classe vos cibles.** Votre statut prime toujours sur le verdict de Stan. Le pont entre les deux est expliqué dans « Vos critères » : Retenu ↔ MATCH, Analysé ↔ CONSIDER · MONITOR, À trancher ↔ CALL, Écarté ↔ NO MATCH · PASS…","crit"],["**Concentrez-vous sur les Validées** — et menez chaque dossier jusqu’au bout du closing !","tab4"],["**Faites sortir tout ça de la page.** Le bouton 🔌 la branche sur vos outils : envoyer vos cibles dans votre séquence d’emailing, créer les fiches dans votre CRM, enrichir les dossiers que vous y avez déjà.","plug"],["**Ne revenez que si ça vaut le coup.** Le bouton 🔔 règle deux emails : le quotidien des dossiers à trancher, et le bilan de la semaine.","alert"]],fhintLive:"Ce qui bouge en ce moment sur votre marché — cliquez une vignette pour ouvrir la source.",fhintGoal:"Ce que les moteurs ont sourcé au dernier passage, et ce qu’il reste à évaluer.",fhintSrcEng:`Chaque carte est un **moteur** : une requête qui ratisse une source précise — bases de données, presse spécialisée, annonces, signaux — avec vos réglages.
· **Sociétés trouvées** : sa production sur la fenêtre choisie (1, 3, 7 jours ou toujours) — dont MATCH et écartées, deux nombres cliquables qui listent les sociétés.
· **Vos réglages** : ce que votre thèse impose à ce moteur.
· **✎ Ajuster ce moteur** : écrivez la correction en français — le sourcing du lendemain repart réaligné.`,fhintGoalAt:e=>`Dernier passage des moteurs : **${e}**.
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
· Un mémo = **1 crédit**, une société à la fois : rien ne part jamais en lot.`,tourToday:"ce matin",tourNoRun:"aucun passage enregistré",tourT:{ident:"Le bandeau de votre fonds",cover:"Votre couverture du marché",engine:"Le moteur de mémos",live:"Le direct",goal:"Le dernier sourcing",engines:"Vos moteurs de sourcing",funnel:"Le tunnel",tuto:"L’étape en cours",demand:"Évaluer une société",chips:"Les statuts, sur la ligne",dec:"Pourquoi cette décision",memo:"Le mémo détaillé",status:"Votre statut",learn:"Vos 👍 / 👎",tools:"Brancher vos outils",exportT:"Exporter en CSV",alerts:"Vos alertes email",crit:"Le paramétrage de Stan"},fhintExport:"Sortez vos cibles au format CSV — la sélection courante, avec ses colonnes, prête pour votre tableur ou votre CRM.",fhintAlerts:"Réglez ce qui vous arrive par email : le brief du matin, le bilan de la semaine, et l’alerte quand un mémo est prêt.",csLabel:"Votre statut :",csKept:"Retenu",csAnalysed:"Analysé",csPending:"À trancher",csValidated:"Validé",csOut:"Écarté",csYes:"✓ Oui",csNo:"✗ Non",csSaved:"✓ enreg.",csNoteSaved:"note ajoutée ✓",csNoteOk:"OK",csNotePh:"Pourquoi ? (une ligne)",csAnaConfirm:"Aucun mémo sur ce dossier — le passer en Analysé quand même ?",whySend:"Envoyer",whyYesPh:"Pourquoi ce OUI ? (une ligne — ça affine votre thèse)",whyNoPh:"Pourquoi ce NON ? (une ligne — ça affine votre thèse)",stgLabel:"Votre avancement :",stg:[["todo","○ À faire"],["sent","✉ Contactée"],["replied","💬 A répondu"],["meeting","🤝 RDV"],["loi","📄 LOI"],["signed","✅ Signée"],["lost","✖ Perdue"]],j4Badge:e=>`⏰ Sans réponse depuis ${e} j — relancer ?`,actRepeche:"↩ Repêcher",actErr:"Envoi impossible — réessayez dans un instant.",actNotPersisted:"Impossible d’enregistrer ce statut sur ce dossier.",decidedYes:e=>`${e} validée — place à l’approche`,decidedNo:e=>`${e} écartée`,repeched:e=>`${e} repêchée — de retour dans Retenues`,critHypTitle:"Notre hypothèse sur votre stratégie",critHypSub:"Toute la sélection en découle. Si elle est à côté, corrigez-la ci-dessous — la recherche est réalignée et vous recevez une sélection corrigée.",critProfilsTitle:"Vos profils de cibles",critProfilsSub:"Les familles de cibles que la machine traque en continu — chaque profil se déplie.",critLookFor:"Ce que nous recherchons",critRuleOut:"Ce que nous écartons",critGateTitle:"Le crible de Stan — comment il décide Retenu / Écarté",critGateSub:"Chaque société est confrontée à ces critères. C’est à eux que renvoient les « STEP A, C… » des raisons affichées sur les lignes.",rubricTitle:"Comment Stan décide l’analyse (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Une fois retenu, Stan approfondit et tranche. Voici ce qui fait pencher la balance.",qvTitle:"Les verdicts de Stan — où va chaque dossier",qv:[["CALL PENDING","le choix n°1 de Stan : à trancher OUI/NON maintenant → onglet « À trancher »."],["CALL YES","vous avez tranché OUI — le dossier rejoint « Validées », place à l’approche."],["CALL NO","vous avez tranché NON — le dossier rejoint « Écartées »."],["CONSIDER","solide, mérite un regard plus attentif → onglet « Analysées »."],["MONITOR","à surveiller, pas prioritaire pour l’instant → onglet « Analysées »."],["PASS","non pertinent pour le moment → onglet « Écartées »."]],brTitle:"Le routage automatique — où le verdict de Stan envoie chaque dossier",br:[["Retenu","MATCH — retenue au sourcing, mémo à venir → onglet « Retenues »"],["Analysé","CONSIDER · MONITOR — mémo fait, pas de call → onglet « Analysées »"],["À trancher","CALL PENDING — Stan propose un call, votre OUI/NON est attendu → onglet « À trancher »"],["Validé","CALL YES — vous avez tranché OUI → onglet « Validées »"],["Écarté","NO MATCH · PASS · CALL NO — refus de Stan, ou votre NON sur un call → onglet « Écartées »"]],brNote:"Un CALL passe par 3 états : CALL PENDING (le mémo est TERMINÉ, Stan propose le call — votre décision est en attente) › CALL YES (vous validez) › CALL NO (vous écartez). PENDING ne veut jamais dire « en cours d’analyse » : l’analyse est déjà faite.",vt:{MATCH:"MATCH — retenu : correspond à vos critères.","NO MATCH":"NO MATCH — écarté par vos critères.","CALL PENDING":"CALL — le choix n°1 de Stan : à trancher OUI/NON maintenant.","CALL YES":"CALL YES — vous avez tranché OUI : le dossier rejoint « Validées ».","CALL NO":"CALL NO — vous avez tranché NON : le dossier rejoint « Écartées ».",CONSIDER:"CONSIDER — solide, mérite un regard plus attentif.",MONITOR:"MONITOR — à surveiller, pas prioritaire pour l’instant.",PASS:"PASS — non pertinent pour le moment."},vKept:"Retenu",vOut:"Écarté",learnLine:"Comme sur Netflix, chaque 👍/👎 affine ce que Stan vous montre ensuite — vous jugez, il apprend.",learnLink:"Ajuster mes critères →",funnelHint:"Retrouvez ici toutes vos cibles sourcées automatiquement dans <b>évaluées</b> puis passez celles que vous souhaitez contacter dans <b>validées</b>.",fhintClose:"Masquer cette aide",queueTitle:"File de traitement",queueDone:(e,a)=>`<b>${e} / ${a}</b> mémos générés`,queueTomorrow:"À VENIR — ORDRE PROJETÉ, RECALCULÉ CHAQUE MATIN",queueToday:"ANALYSÉS AUJOURD’HUI",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugConfigured:"Configuré",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(e,a)=>`<b>${e}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:e=>`${e} passées au crible`,alertTitle:"Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"VOS ANGLES D’ACQUISITION",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarBusy:"🧬 Recherche…",similarNote:"Les retenues entrent dans votre liste au prochain rafraîchissement.",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:e=>`actualisée le ${e}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:e=>`actualisée le ${e}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:e=>`Onboarding lancé pour ${e} — suivez l’avancement dans le cockpit`,rsOpen:"🔎 Rechercher des sociétés à évaluer",rsUrlPh:"coller l’URL d’un article, d’une vidéo ou d’une note",rsTextPh:"Coller ici l’article complet",rsOr:"ou",rsGo:"🔎 Résumer et rechercher des sociétés",rsHint:"RÉSUMÉ · CARTE MENTALE · SOCIÉTÉS",rsRunning:"Lecture en cours…",rsRunningVid:"Transcription de la vidéo…",rsElapsed:e=>`${e} s`,rsNeed:"Collez une URL, ou le texte complet de l’article.",rsFound:e=>e?`${e} société${e>1?"s":""} trouvée${e>1?"s":""} dans ce contenu.`:"Aucune société nommée dans ce contenu.",rsLink:"Voir la page publiée ↗",rsPublishing:"Publication de la fiche…",rsPublishFail:"Fiche produite, page non publiée",rsTags:"TAGS",rsClose:"Fermer",rsMindmap:"CARTE MENTALE",rsSource:"Source ↗",rsSaving:"Enregistrement…",rsSaved:"✓ Enregistrée dans votre cockpit",rsSavedIn:e=>`✓ Enregistrée dans le carnet de ${e}`,rsSaveFail:"Fiche produite, NON enregistrée",rsArchOpen:e=>`voir les ${e} recherche${e>1?"s":""} déjà lancée${e>1?"s":""}`,rsArchTitle:"Recherches déjà lancées",rsArchBack:"← toutes les recherches",rsArchLoading:"Chargement…",rsArchEmpty:"Aucune recherche enregistrée pour l’instant.",rsArchGone:"Cette recherche n’est plus disponible.",rsRowCounts:(e,a)=>`${e} citée${e>1?"s":""} · ${a} à évaluer`,rsPub:"Publiée",rsPriv:"Non publiée",rsCited:"Sociétés citées",rsCitedHint:"Toutes les sociétés nommées dans ce contenu.",rsMatch:"Sociétés qui pourraient correspondre",rsMatchHint:"Suggérées à partir de la thèse du contenu — elles n’y sont pas forcément nommées.",rsEvalOne:"⚡ Évaluer",rsAddAll:e=>`＋ Ajouter les ${e} à la liste`,rsNoCompanies:"Aucune société dans ce contenu.",rsConclusion:"Ce que ça implique",rsCriteria:"Critères de sourcing",rsSources:"Pour creuser",groupEngine:"Moteur",groupNone:"Rien",browse:e=>`Parcourir les ${e}`,chainAll:e=>`Évaluer les ${e}`,chainHint:"selon votre thèse, l’une après l’autre",winMenu:"Période",datesShort:["Aujourd’hui","7 jours","30 jours","Tout"],colCompany:"SOCIÉTÉ & DESCRIPTION",grpCount:(e,a)=>`${e} à envoyer sur ${a} sourcées`,emptyTab:"AUCUNE CIBLE DANS CET ONGLET",emptyScope:"AUCUNE SOCIÉTÉ DANS CE PÉRIMÈTRE",contWorld:"Monde",evalGoOn:e=>`⚡ Évaluer ${e}`,chromeEval:"Évaluer",chromeFilt:"Filtres",chromeBoth:"Les deux",rowExtract:"🔎 Extraire les sociétés",toSendCtx:(e,a)=>`sur ${e} dans l'édition${a>0?` (${a} sans société identifiable)`:""}`,grpCard:"la carte du jour",grpMa:"Opérations M&A",grpLev:"Levées de fonds",grpNews:"Actualités",grpNom:"Actualités · Nominations",grpNewsOther:"Actualités · Autres",grpHire:"Actualités · Recrutements",edLabel:"dans l'édition du jour",edSplit:(e,a)=>`⚡ ${e} évaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} à explorer`:""}`},ks={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Everything STAN ran through the screen on this window: every company judged against your criteria, kept or discarded automatically.","STAN kept these companies against your criteria, decisions justified. WE verify its picks — discard, validate, or launch an analysis on the uncertain ones.","STAN’s memos, reviewed by US: quantified synergies, argued verdict. Validate the ones to contact, set “to decide” where you hesitate.","YOUR move: the best targets, presented on Monday by your Corporate Developer. Call YES or NO — your yeses move to Validated.","Your YESES — the shortlist to contact. WE prepare the approach, or engage it on your behalf (Enterprise plan).","Discarded by STAN or by YOU. Every NO sharpens Stan’s criteria. Recover one anytime.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(e,a,r)=>`<b>${e} Stan CALL${e>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${r} awaiting answer.</b>`,morningThesis:(e,a,r)=>`This morning, <b>${e}</b> compan${e===1?"y":"ies"} screened by your engines`+(typeof r=="number"?`, <b>${r}</b> kept.`:".")+(a?` <b>${a}</b> awaiting your evaluation.`:' <span class="ok">All screened.</span>'),morningEnginesTitle:"Your engines are tuned to YOUR thesis: activity codes, countries, acquisition angles, exclusion criteria. Only the news watch starts from a sweep shared across funds — but every deal it surfaces is then screened against your criteria, and only enters here if it passes.",morningLast:(e,a,r)=>`Engines last ran on <b>${r}</b>: <b>${e}</b> compan${e===1?"y":"ies"} sourced.`+(a?` <b>${a}</b> still to screen.`:' <span class="ok">All screened.</span>'),morningEval:e=>`▶ Work through them (${e})`,identTitle:e=>`Targets for ${e}`,identCoverage:"MARKET COVERAGE",identCoverageOf:(e,a)=>`<b>${e}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"MEMO ENGINE",identPerDay:"memo/day",identPending:e=>`→ ${e} queued`,identPendingWait:"→ reading the queue…",identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Sort the list",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:e=>`Decision undone on ${e}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ YES",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:e=>`${e} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"SCREEN · MEMO",colCrible:"SCREEN",colMemo:"MEMO",colScore:"SCORE",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:e=>`Since Stan’s verdict: ${e} d`,waitChip:e=>`⏱ ${e} d`,densList:"LIST",densOpen:"OPEN",densLigne:"ROWS",densMaxi:"CARDS",unfoldAll:"Unfold all",foldAllLbl:"Fold all",foldArts:"Articles",zoomSrc:"Source",viewLink:"View article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Company website",viewSiteBusyHint:"Looking up the company website…",viewSrcHint:"Source article",viewLinkClose:"Close article",viewLinkTab:"Open in a tab",viewLinkHint:"Opens in a new window",zoomSimilar:"See similar",zoomInCockpit:"Isolate in the list",zoomArt:"Today's editorial",zoomEvalHint:"Screen against your thesis",zoomSimilarHint:"Same sector in the list",zoomIsolateHint:"Keep only this company",zoomNewsMark:"Edition note — opens on the right",zoomPulseEval:"evaluable",zoomPulseExplore:"to explore",zoomPulseArts:"news",doNews:"📰 News",zoomPulseEd:"in today’s article",zoomPulseBtn:"Today’s edition",zoomPulseWeek:"Last 7 days",zoomPulseWeekEd:"this week",doAll:"All",doEdito:"📖 Today's editorial",doBrief:"📖 Today's brief",doEval:"⚡ Evaluable",doExplore:"🔎 To explore",doAna:"⚡ To analyse",doBriefHint:"Show today's brief",doTodo:"⚡ To evaluate",doDone:"✓ Already evaluated",cdMemoTab:"📖 Memo",evalPickSite:"several sites share this name — open to check, then confirm the right one.",evalPickChip:"SITE TO CONFIRM",eqNamePh:"Company name or URL…",eqAdd:"Add a row",eqNoSite:"no site found — the name will be evaluated as is",eqReady:"ready",eqPick:"pick the site →",eqRunning:"⏳ evaluating…",eqGo:e=>`⚡ Evaluate the ${e} rows`,eqHint:"Your rows stay here — fill on the go, launch later.",eqClearDone:"Clear evaluated",evalPickGo:"✓ This one",chainMemoGo:"⚡ Launch the memo (1 credit)",analyseConfirm:e=>`Launch ${e} analysis memo${e>1?"s":""}?

This uses ${e} memo credit${e>1?"s":""}. Companies move to "Analysed" or "To decide" once the memo is ready.`,sortBy:"Sort by",sortSig:"Signal",sortAmount:"Amount",sortAge:"Recency",sortName:"Name",sortCountry:"Country",sortStage:"Stage",sortCrible:"Screen",sortMemo:"Memo",sortScore:"Score",fMenu:"Filters",memoSynth:"SUMMARY",memoOpenFull:"📖 View the full memo →",memoDeep:"⚡ Detailed memo",memoDeepHint:"For this file to decide, you can launch the detailed analysis: market study, competitive quadrant, scenarios.",memoDeepSent:e=>`Detailed memo launched on ${e} — ready in 35 to 40 minutes`,memoInstantSent:e=>`Analysis launched on ${e} — memo ready in ~15 minutes`,liveStrip:"Live analyses",liveBoot:"starting…",liveEnd:"done {t}",liveOpenQueue:"Open the queue",memoNone:"No memo for this file yet — launch the analysis.",creditsCap:"MEMO CREDITS",creditsToday:"today",creditsRecharge:"Top up →",creditsCost:e=>`−${e} credit${e>1?"s":""}`,creditsNone:"Out of credits — top up or wait for tomorrow 7am.",rechargeTitle:"Memo credits",rechargeHint:e=>`Your plan includes <b>${e} credits per day</b>, refilled every morning. Need more right now?`,rechargeNote:"Purchased credits never expire. They are used after your daily credits.",rechargeBuy:"Add",rechargeUnit:(e,a)=>`${e} credits — €${a}`,onbTag:"PRIVATE PREVIEW · READ ONLY",onbTitle:e=>`Your deal flow is ready — <b>${e} targets kept</b> by Stan`,onbSub:e=>`${e} companies screened against your thesis. The first ten rows are open; the rest unlocks in thirty minutes.`,onbSteps:[["Stan studied your online presence","Website, job posts, press — it inferred your acquisition angles."],["It screened the market","Every company checked against your criteria."],["It wrote memos","Quantified analyses, synergies, verdicts."],["Your turn to decide","Thirty minutes to tune your deal flow and unlock everything."]],onbCta:"Pick a slot →",lockbarText:"Let’s set up your dream deal flow in 30 minutes, with a Corporate Developer",lockbarContactBefore:"Alexandre — ",lockbarContactMid:" · ",lockbarCta:"Pick a slot",rdvHeading:"Let’s set up your ideal deal flow in 30 minutes",rdvSubBefore:"Pick a slot below, or reach your Corporate Development expert directly at ",rdvSubMid:" or by email at ",rdvCoFallback:"your company",rdvUnlockLabel:e=>`Unlock ${e}`,rdvUnlocks:e=>[["Access every target you kept","Full investment memos, synergies, contacts, approach angle."],["Acquisition strategy built with you","Hypothesis + acquisition strategy recalibrated live, with you."],["Let’s decide together on the targets you want","YES / NO, sourcing of similar companies, export and CRM sync."],["Your AI Corporate Developer is live",`Stan works for ${e} every morning — all you have to do is decide.`]],identRepub:"Republish the page now — re-renders it from what is already known. Free: no engine runs, and no model is called if your thesis has not changed.",identRepubDone:"Republish started — your numbers refresh in about thirty seconds. Reload the page to see them.",plugHow1:"In your tool (Make, Zapier, n8n, HubSpot, Pipedrive…), create a “webhook” trigger and copy the URL it gives you.",plugHow2:"Paste it below, Save, then Test: one sample message goes out to your tool right away.",plugHow3:"Done. Three moments trigger a send: you validate a target, you move it a stage, or an approach is prepared.",plugExT:"Exactly what your tool receives",plugExResult:"In your CRM you get one row per validated company: its name, your note, Stan’s score, its website and the memo link.",plugApiT:"One company at a time, from a script or Make",plugQuota:"This shortcut is capped at 10 companies per day per link — the normal path is the page’s evaluation bar.",plugFeeds:"The JSON, CSV, Google Sheets and Excel feeds live in the 📥 Export button next door — they are not repeated here.",plugTokenNote:"⚠️ These links carry this page’s access key: wherever you paste them, they open your targets. Only put them in your own tools.",plugDoc:"Full documentation → proplace.co/api/",csNone:"Status",csAnaNeedMemo:"Moving to “Analysed” needs a memo.",csAnaRun:"⚡ Run the memo (1 credit)",csAnaAnyway:"Mark it anyway",qOffer:"YOUR PLAN",qDelay:"verdict within",qRate:e=>`${e} memo${e>1?"s":""} a day`,qManual:e=>`${e} memo a day, on request`,qPaused:"no automatic memo",qManualSet:"rate set by hand",qEta:(e,a,r)=>`At this rate (${a}/day), ${e} memo${e>1?"s":""} left to write — the whole queue is processed in ${r} day${r>1?"s":""}.`,qEtaPaused:"Rate at zero: nothing goes out. Activate a plan to project a date.",qEtaDone:"The whole queue is already analysed.",qLate:(e,a)=>`The “${e}” promise cannot be met: it would take more than the ${a} memos a day cap.`,qRunning:"In progress",qUpNext:e=>`Coming up — ${e} compan${e>1?"ies":"y"} in the queue, in pick order`,qUpNextWait:"Coming up — reading the queue…",qFileWait:"Reading the queue — a few seconds.",qHedge:"Projected order, recomputed every morning. A fresh lead landing overnight goes first.",qFresh:"fresh",qLater:"later",qVerdictsT:"Stan’s verdicts — where each file goes",qVerdicts:[["CALL","his top pick: decide YES or NO → “To decide” tab."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],covHowT:"Where does this number come from?",covTotal:"Market total",covColCode:"Code · country",covColN:"Companies",covColSource:"Source",covWide:e=>`${e} not published — widened to its parent code`,covMissing:"no data published",covRejected:e=>`Codes dropped, no companies found: ${e}.`,covComputedAt:e=>`computed on ${e}`,filterOff:"Remove this filter",fSelected:"selected",funScreened:(e,a)=>`companies screened${e?a?` from ${e} to ${a}`:` since ${e}`:""}`,funKept:"kept as serious targets",funAnalyzed:"analysed in depth",funShown:"published on your page, all filters cleared",sigStripMore:e=>`+ see the other ${e}`,boxCollapse:"Collapse",boxExpand:"Expand",memoReadHere:"📄 Read the memo here",memoHideHere:"▴ Collapse the memo",sigChipTitle:(e,a)=>`Flagged ${e} · ${a}`,funPerWindow:(e,a)=>`From ${e} to ${a}`,funPerAll:"Since the start",funOfMarket:(e,a)=>`of ~${e} companies on YOUR market, i.e. ${a} %`,funScope:"Sourcing from your thesis only — your activity codes, your countries, your angles. No company from another fund is counted here.",funToday:e=>`incl. ${e} today`,actTitle:"Last 30 days of activity",actScreened:"screened",actKept:"kept",actToday:"today",fstatsShow:"Show the last 30 days of activity",fstatsHide:"Hide activity",sinceTitle:(e,a)=>`${e} new target${e>1?"s":""} since your last visit (${a})`,sinceSub:"arrived since your last visit — start here",sinceMore:e=>`+${e} more`,sinceOut:e=>`${e} left the list`,morningDock:e=>e?`${e} screened this morning`:"Morning screen",morningDockTitle:"See the companies screened today — whatever the verdict.",sinceDock:e=>`${e} new`,sigDock:e=>`${e} signal${e>1?"s":""}`,newsDock:e=>`${e} news item${e>1?"s":""}`,newsSince:e=>`since ${e}`,newsDockHint:'Feed articles — op-eds, lists, recaps — with no evaluable company. "Extract companies" bridges into evaluation.',newsWord:"news — reading, not deciding",identSyncConfirm:"Relaunch sourcing now? An engine pass takes a few minutes.",plugAutoOn:e=>`⚡ Automatic sending ACTIVE (${e}) — every target you validate goes into the sequence on its own.`,plugAutoOff:"Automatic sending off — validating a target sends it nowhere.",plugCrm:"Create the records in my CRM",plugCrmHint:"Paste your tool’s webhook URL: every decision lands there right away.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Save",plugSaved:"Webhook saved",plugTest:"Test",plugTested:"Test sent",plugTestThrottled:"Already tested less than 5s ago — nothing was sent.",plugRemove:"Remove",plugRemoved:"Webhook removed",plugMcp:"Claude & AI (MCP)",plugBulk:"Contact my targets",plugBulkHint:"See who would go out first: the preview contacts nobody.",plugBulkTabs:[["valides","Validated"],["call","To decide"],["retenus","Kept"]],plugBulkPreview:"👁 Preview",bulkArm:"📤 Send for real",bulkNoDest:"No destination saved: set up your tool above first.",bulkScope:"What goes out is the whole server-side tab — not the filtered view on screen.",bulkWarn:(e,a)=>`You are about to contact ${e} compan${e>1?"ies":"y"} via ${a}. This cannot be undone, and the server does not check whether they were already contacted.`,bulkConfirm:e=>`Yes, send via ${e}`,bulkCancel:"Cancel",bulkSending:"Sending…",bulkDone:(e,a,r)=>`${e} compan${e>1?"ies":"y"} sent. ${a} reachable on LinkedIn only, ${r} with no email.`,bulkNone:"No company had an email: nothing was sent.",bulkLocked:(e,a)=>`Sent on ${e} — ${a} compan${a>1?"ies":"y"}. Next send available in 24 h.`,bulkPreviewFirst:"Run the preview first: it says exactly who would go out.",cdEvaluation:"Screening",cdConviction:"Conviction",cdAnalyse:"Analysis",cdSociete:"Company",cdContact:"Contact",cdSuivi:"Follow-up",actMemoOf:e=>e==="detailed"?"📖 Read the detailed memo":"📖 Read the instant memo",memoLoading:"Loading the memo…",memoLoadErr:"The memo will not load here — open it full page.",memoUnfold:e=>`Unfold this section (${e} KB)`,cdEngagementHint:"Activity score for this file: your clicks and requests on this page, plus outreach progress. From 20 up, the file is flagged 🔥.",mdMindmap:e=>`Mind map — what ${e} does`,mdContactKnown:"Decision-maker — cockpit data",cdCrible:"screening",cdMemo:e=>e?`after ${e} memo`:"after memo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict on",cdSector:"Sector",cdStage:"Stage",cdCountry:"Where",cdSite:"Website",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Detected on",cdName:"Decision-maker",cdEmail:"Email",cdCeoStatus:"Your decision",cdEngagement:"Engagement",qaTitle:"Describe this company",qaHint:"Reads its website, then four blocks: who it serves, what it sells, how it makes money, and what to remember. No verdict — the screening already decided.",qaRun:"📄 Describe",qaBusy:"Reading the website…",qaVP:"Who, and for what problem",qaProduct:"What it sells",qaModel:"How it makes money",qaSummary:"Takeaway",qaSources:e=>`${e} page${e>1?"s":""} read`,qaQuota:"Daily cap reached: try again tomorrow.",qaEmpty:"The website says nothing usable — nothing was invented.",dsBtn:"🗂 Committee pack",dsHint:"One A4 per company: the screening verdict and its reason, the identity, the analysis when it was run, and your decision. No financial figures — we receive none.",dsTitle:e=>`Committee pack — ${e} compan${e>1?"ies":"y"}`,dsCap:(e,a)=>`The first ${e} of ${a}: a committee will not read ${a} pages.`,dsWhy:"Why this company is in front of you",dsAnalysis:"What it does",dsDecision:"Your decision",dsEmpty:"No company in the current selection.",dsFoot:e=>`Selection by Proplace for ${e} — internal document, do not circulate.`,covFunnel:"Your market, screened",covScreened:e=>`${e} companies screened`,covOf:e=>`out of ~${e} relevant companies`,covNoEst:"Your addressable market is not sized yet: coverage will show as soon as it is.",covPace:e=>`${e} companies screened per day`,covEta:e=>e<=0?"Your market is fully covered.":e<60?`Full coverage in ~${e} days at this pace.`:`Full coverage in ~${Math.round(e/30)} months at this pace.`,covRate:"Analysis pace",covRateHint:"How many kept companies get a reasoned verdict each day. At zero, analysis is paused.",covRateNow:e=>e<=0?"Paused":`${e} per day`,covKept:"kept",covAna:"analysed",covScopeAll:"worldwide",covShown:"shown here",bulkReplayed:"This send was already recorded: nothing went out again. Your targets were contacted once.",bulkPending:"The previous send is still running: nothing was sent again.",plugBulkResult:(e,a,r)=>`${e} would go by email · ${a} by LinkedIn · ${r} with no contact.`,memoAlertTitle:"Your memo alert",memoAlertSub:"Get an email as soon as one of your fund’s memos is finalised — with its direct link.",memoAlertToggle:"Send me every finished memo",memoAlertEmail:"Recipient",memoAlertSaved:"Saved ✓",memoAlertErr:"Could not save — try again",memoAlertSections:"Sections of the email",memoAlertSec:[["swot","SWOT"],["action","Action plan"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Stan’s verdict"]],memoAlertPreview:"👁 Preview",memoAlertBtn:"Your memo alert",alertTabDaily:"Daily",alertTabWeekly:"Weekly",alertTabMarket:"Market",alertSections:"Sections of the email",alertSec:[["pending","Files to decide on"],["stats","Your key numbers"],["autonomous","Stan’s automatic decisions"],["market","Market analysis"],["sourcing","Your sourcing of the day"]],alertSecSlow:"(slower to generate)",alertSecNote:"Unticking the market analysis makes the preview instant.",alertPreview:"👁 Preview today’s email",alertPreviewWeekly:"👁 Preview the weekly",alertSubject:"Subject:",alertPreviewBusy:"Preview being generated, try again in a few seconds.",alertPreviewRetry:e=>`Generating — new attempt in ${e}s…`,alertPreviewFail:"Preview unavailable right now — untick “Market analysis” to get it immediately.",alertPreviewEmpty:"Right now: nothing to decide on — the email will not go out.",alertTest:"✉ Send me a test",alertTestOk:e=>`✓ Sent to ${e} — check your spam/promotions too.`,alertTestHint:"Does not affect the daily send.",alertBtnPrevBusy:"⏳ Building…",alertBtnTestBusy:"⏳ Sending…",alertPreviewWait:e=>`Building your email — ${e}s. The first preview of the day takes up to 90s: it is rendered for real, not simulated. You can leave this window open.`,alertTestWait:e=>`Sending — ${e}s. The email is built first, then delivered to your inbox. Do not close this window.`,csMoved:(e,a)=>`${e} → ${a} · the row moves to the matching tab.`,sinceLabel:e=>e?`new since your visit of ${e}`:"new since your last visit",sinceChip:"new",sinceSince:e=>`since ${e}`,alertSaving:"Saving…",alertSavedShort:"✓ Saved",alertReadOnly:"Demo view: these settings are read-only.",alertWeeklySub:"One email a week: the week in review and what your thesis learned from your decisions.",alertWeeklyOn:"📬 Receive your week in review",alertWeeklyWhen:"Day and time (Paris)",alertDow:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],alertLoadError:"Could not load your preferences.",alertThrottled:"Too fast — wait a few seconds and set it again.",alertInactive:"Your access is not active yet — let’s talk about it.",alertNoLead:"Recipient to be set with us.",exportViewTitle:"CSV of the filtered view",exportViewDesc:e=>`The ${e} rows of your current selection — tab, facets, search and window included. Semicolon separated, ready for Excel.`,exportViewBtn:"Download",exportViewDone:e=>`${e} row${e>1?"s":""} exported`,printTitle:"Print the selection",printDesc:e=>`The ${e} rows on screen, on A4: who it is for, as of when, the funnel figures, then the list. The map, filters and buttons are not printed.`,printBtn:"Print",exportViewHead:"Company|Status|Stan verdict|Score|Country|Sector|Post-YES stage|Contact|Email|Memo link|Date|Reason",tourStart:"Start the step-by-step guide",tourIntro:"The guided tour covers the whole page A to Z, on the live page: each step spotlights the exact spot — from your thesis to your email alert.",tourStep:(e,a)=>`Step ${e}/${a}`,tourPrev:"← Previous",tourNext:"Next →",tourDone:"Finish",tourClose:"Close",tourPlayTitle:"Guided tour",ahaATitle1:"1 file awaits your decision",ahaATitleN:e=>`${e} files await your decision`,ahaABody:"YES = we prepare the approach; NO = we sharpen the aim.",ahaABtn:"Decide now →",ahaBTitle:"A full memo is waiting for you",ahaBBody:e=>`${e} already has its analysis memo — a 3-minute read.`,ahaBBtn:"Open the memo →",ahaRetTitle:e=>e===1?"1 kept company is waiting for you":`${e} kept companies are waiting for you`,ahaRetBody:"Stan’s sorting is done — every kept company has its sheet, card and signal.",ahaRetBtn:"See the kept companies →",ahaEvalTitle:e=>e===1?"1 company is waiting for your evaluation":`${e} companies are waiting for your evaluation`,ahaEvalBody:"Nothing is kept yet: this is the first pile to work through. One company at a time, Stan does the screening.",ahaEvalBtn:"Open the pile to evaluate →",loadMsgs:["Waking up the sourcing engines…","Loading your targets…","Cards and signals are coming…","Sorting by your thesis…","One more moment — the first load is the longest."],ahaCTitle:"Your first targets are here",ahaCBody:"Tell us if the aim is right — every signal sharpens the machine.",ahaCBtn:"See my criteria →",howto:[["**Set your targeting.** Open “Your criteria”: it’s your thesis — what you look for and what you rule out. Fix it in plain language whenever something is off; the next morning’s sourcing realigns on its own.","crit"],["**Source as many targets as you can.** Evaluate a company by pasting its name or website — or a whole list — and watch your engines comb the web with your settings.","eval"],["**Move every target through the funnel, left to right** — Evaluated › Kept › Analysed › To decide › Validated › Ruled out. On each card, “Your status” files it in one click; your “why” note stays visible. The 👍/👎 never file anything: they sharpen your thesis.","tab1"],["**Settle the “To decide”.** Stan leaves you the final word: YES (Validated) or NO (Ruled out), with a word on the why.","tab3"],["**Understand how Stan sorts your targets.** Your status always overrides Stan’s verdict. The bridge between the two is explained in “Your criteria”: Kept ↔ MATCH, Analysed ↔ CONSIDER · MONITOR, To decide ↔ CALL, Ruled out ↔ NO MATCH · PASS…","crit"],["**Focus on the Validated** — and take every file all the way to closing!","tab4"],["**Push all of this out of the page.** The 🔌 button wires it into your tools: send your targets to your emailing sequence, create the records in your CRM, enrich the files you already have there.","plug"],["**Only come back when it’s worth it.** The 🔔 button sets two emails: the daily one for files to decide on, and the week in review.","alert"]],fhintLive:"What is moving on your market right now — click a tile to open the source.",fhintGoal:"What the engines sourced on the last run, and what is left to evaluate.",fhintSrcEng:`Each card is an **engine**: a query combing one precise source — databases, trade press, announcements, signals — with your settings.
· **Companies found**: its output over the chosen window (1, 3, 7 days or ever) — incl. MATCH and dropped, two clickable numbers listing the companies.
· **Your settings**: what your thesis imposes on this engine.
· **✎ Adjust this engine**: write the correction in plain language — tomorrow’s sourcing runs realigned.`,fhintGoalAt:e=>`Engines last ran: **${e}**.
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
· One memo = **1 credit**, one company at a time: nothing ever goes out in bulk.`,tourToday:"this morning",tourNoRun:"no run recorded",tourT:{ident:"Your fund’s header",cover:"Your market coverage",engine:"The memo engine",live:"Live",goal:"The last sourcing",engines:"Your sourcing engines",funnel:"The funnel",tuto:"The current step",demand:"Evaluate a company",chips:"Statuses, on the row",dec:"Why this decision",memo:"The detailed memo",status:"Your status",learn:"Your 👍 / 👎",tools:"Connect your tools",exportT:"Export to CSV",alerts:"Your email alerts",crit:"Stan’s settings"},fhintExport:"Take your targets out as CSV — the current selection with its columns, ready for your spreadsheet or CRM.",fhintAlerts:"Set what reaches your inbox: the morning brief, the weekly recap, and the alert when a memo is ready.",csLabel:"Your status:",csKept:"Kept",csAnalysed:"Analysed",csPending:"To decide",csValidated:"Validated",csOut:"Ruled out",csYes:"✓ Yes",csNo:"✗ No",csSaved:"✓ saved",csNoteSaved:"note added ✓",csNoteOk:"OK",csNotePh:"Why? (one line)",csAnaConfirm:"No memo on this file — mark it Analysed anyway?",whySend:"Send",whyYesPh:"Why this YES? (one line — it sharpens your thesis)",whyNoPh:"Why this NO? (one line — it sharpens your thesis)",stgLabel:"Your progress:",stg:[["todo","○ To do"],["sent","✉ Contacted"],["replied","💬 Replied"],["meeting","🤝 Meeting"],["loi","📄 LOI"],["signed","✅ Signed"],["lost","✖ Lost"]],j4Badge:e=>`⏰ No reply for ${e} days — follow up?`,actRepeche:"↩ Recover",actErr:"Could not save — try again in a moment.",actNotPersisted:"This status cannot be saved on this record.",decidedYes:e=>`${e} validated — on to the approach`,decidedNo:e=>`${e} ruled out`,repeched:e=>`${e} recovered — back in Kept`,critHypTitle:"Our hypothesis about your strategy",critHypSub:"The whole selection follows from it. If it is off, correct it below — the search is realigned and you get a corrected selection.",critProfilsTitle:"Your target profiles",critProfilsSub:"The families of targets the machine tracks continuously — each profile unfolds.",critLookFor:"What we look for",critRuleOut:"What we rule out",critGateTitle:"Stan’s screen — how it decides Kept / Ruled out",critGateSub:"Every company is checked against these criteria. They are what the “STEP A, C…” in the reasons on each row refer to.",rubricTitle:"How Stan decides the analysis (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Once kept, Stan digs deeper and rules. Here’s what tips the balance.",qvTitle:"Stan’s verdicts — where each file goes",qv:[["CALL PENDING","Stan’s top pick: decide YES/NO now → “To decide” tab."],["CALL YES","you decided YES — the file joins “Validated”, on to the approach."],["CALL NO","you decided NO — the file joins “Ruled out”."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],brTitle:"Automatic routing — where Stan’s verdict sends each file",br:[["Kept","MATCH — kept at sourcing, memo to come → “Kept” tab"],["Analysed","CONSIDER · MONITOR — memo done, no call → “Analysed” tab"],["To decide","CALL PENDING — Stan proposes a call, your YES/NO is awaited → “To decide” tab"],["Validated","CALL YES — you ruled YES → “Validated” tab"],["Ruled out","NO MATCH · PASS · CALL NO — Stan’s refusal, or your NO on a call → “Ruled out” tab"]],brNote:"A CALL goes through 3 states: CALL PENDING (the memo is DONE, Stan proposes the call — your decision is awaited) › CALL YES (you validate) › CALL NO (you rule out). PENDING never means “being analysed”: the analysis is already done.",vt:{MATCH:"MATCH — kept: it fits your criteria.","NO MATCH":"NO MATCH — ruled out by your criteria.","CALL PENDING":"CALL — Stan’s top pick: worth a YES/NO decision now.","CALL YES":"CALL YES — you ruled YES: the file joins “Validated”.","CALL NO":"CALL NO — you ruled NO: the file joins “Ruled out”.",CONSIDER:"CONSIDER — solid, worth a closer look.",MONITOR:"MONITOR — keep an eye on it, not a priority yet.",PASS:"PASS — not relevant right now."},vKept:"Kept",vOut:"Ruled out",learnLine:"Like Netflix, every 👍/👎 sharpens what Stan shows you next — you judge, it learns.",learnLink:"Tune my criteria →",funnelHint:"Find here all your automatically sourced targets in <b>evaluated</b>, then move the ones you want to contact into <b>validated</b>.",fhintClose:"Hide this hint",queueTitle:"Processing queue",queueDone:(e,a)=>`<b>${e} / ${a}</b> memos generated`,queueTomorrow:"UP NEXT — PROJECTED ORDER, RECOMPUTED EVERY MORNING",queueToday:"ANALYZED TODAY",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugConfigured:"Configured",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(e,a)=>`<b>${e}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:e=>`${e} screened`,alertTitle:"Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"YOUR ACQUISITION ANGLES",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarBusy:"🧬 Searching…",similarNote:"The kept ones enter your list at the next refresh.",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:e=>`updated ${e}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:e=>`updated ${e}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:e=>`Onboarding launched for ${e} — track progress in the cockpit`,rsOpen:"🔎 Find companies to evaluate",rsUrlPh:"paste the URL of an article, a video or a note",rsTextPh:"Paste the full article here",rsOr:"or",rsGo:"🔎 Summarize and find companies",rsHint:"SUMMARY · MIND MAP · COMPANIES",rsRunning:"Reading…",rsRunningVid:"Transcribing the video…",rsElapsed:e=>`${e}s`,rsNeed:"Paste a URL, or the full text of the article.",rsFound:e=>e?`${e} compan${e>1?"ies":"y"} found in this content.`:"No company named in this content.",rsLink:"See the published page ↗",rsPublishing:"Publishing the note…",rsPublishFail:"Note produced, page not published",rsTags:"TAGS",rsClose:"Close",rsMindmap:"MIND MAP",rsSource:"Source ↗",rsSaving:"Saving…",rsSaved:"✓ Saved to your cockpit",rsSavedIn:e=>`✓ Saved to ${e}'s notebook`,rsSaveFail:"Note produced, NOT saved",rsArchOpen:e=>`see the ${e} research run${e>1?"s":""} already launched`,rsArchTitle:"Research already launched",rsArchBack:"← all research runs",rsArchLoading:"Loading…",rsArchEmpty:"No research saved yet.",rsArchGone:"This research is no longer available.",rsRowCounts:(e,a)=>`${e} mentioned · ${a} to evaluate`,rsPub:"Published",rsPriv:"Not published",rsCited:"Companies mentioned",rsCitedHint:"Every company named in this content.",rsMatch:"Companies that could match",rsMatchHint:"Suggested from the content’s thesis — they are not necessarily named in it.",rsEvalOne:"⚡ Evaluate",rsAddAll:e=>`＋ Add all ${e} to the list`,rsNoCompanies:"No company in this content.",rsConclusion:"What it implies",rsCriteria:"Sourcing criteria",rsSources:"Dig deeper",groupEngine:"Engine",groupNone:"None",browse:e=>`Browse the ${e}`,chainAll:e=>`Evaluate the ${e}`,chainHint:"against your thesis, one after another",winMenu:"Period",datesShort:["Today","7 days","30 days","All"],colCompany:"COMPANY & DESCRIPTION",grpCount:(e,a)=>`${e} to send out of ${a} sourced`,emptyTab:"NO TARGET IN THIS TAB",emptyScope:"NO COMPANY IN THIS SCOPE",contWorld:"World",evalGoOn:e=>`⚡ Evaluate ${e}`,chromeEval:"Evaluate",chromeFilt:"Filters",chromeBoth:"Both",rowExtract:"🔎 Extract companies",toSendCtx:(e,a)=>`of ${e} in the edition${a>0?` (${a} without an identifiable company)`:""}`,grpCard:"today's card",grpMa:"M&A deals",grpLev:"Fundraising",grpNews:"News",grpNom:"News · Appointments",grpNewsOther:"News · Other",grpHire:"News · Hiring",edLabel:"in today's edition",edSplit:(e,a)=>`⚡ ${e} evaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} to explore`:""}`},js={fr:{..._n.fr,...ws},en:{..._n.en,...ks}},Ns=`.atl2{
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
.atl2 .bulk .side .hint{white-space:nowrap}`,Es=`
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
/* L'étape réelle du mémo (carnet memo-live-notes) — sous le chrono,
   clipée : une phrase de pipeline ne doit pas déformer la ligne. */
.atl2 .runnote{display:block;max-width:340px;overflow:hidden;text-overflow:ellipsis;
  white-space:nowrap;font-size:10.5px;color:#5B6B7F;line-height:1.3}
.atl2 .livestrip .runnote{max-width:230px}
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

/* -- 29/08, nuit -------------------------------------------------------------
   (1) "mets le texte a droite de la pastille (7 evaluees) AU-DESSUS de
   Europe / winhealthgroup" : la rangee de titre devient une grille - pastilles
   a gauche, compteur EMPILE sur son contexte au centre, outils a droite. */
body.pp-desk .atl2.cibles .listhead .lh-top{display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;grid-auto-rows:min-content;
  align-items:center;column-gap:14px;row-gap:1px}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-dock{grid-column:1;grid-row:1 / span 2}
body.pp-desk .atl2.cibles .listhead .lh-top .main{grid-column:2;grid-row:1;align-self:end}
body.pp-desk .atl2.cibles .listhead .lh-top .dot{display:none}
body.pp-desk .atl2.cibles .listhead .lh-top .ctx{grid-column:2;grid-row:2;align-self:start}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-acts{grid-column:3;grid-row:1 / span 2}

/* (2) le select natif du statut - l'outil de la V1 */
.atl2.cibles .desk-list .rsel{font:inherit;font-size:11px;font-weight:650;
  height:24px;padding:0 4px;border:1px solid var(--line);border-radius:6px;
  background:#fff;color:var(--ink);cursor:pointer;max-width:112px}
.atl2.cibles .desk-list .rsel:hover{border-color:#94a3b8}
.atl2.cibles .desk-list .rsel:disabled{opacity:.5;cursor:default}

/* (3) l'encart verdict de la carte Parcourir : la raison ENTIERE, aeree */
.atl2 .vbox.vfull{display:block}
.atl2 .vbox.vfull .vt{display:block;margin-bottom:6px}
.atl2 .vbox.vfull .vd{display:block;white-space:normal;overflow:visible;
  text-overflow:clip;font-size:12.5px;line-height:1.65;color:var(--muted)}

/* -- 29/08, fin de soiree ----------------------------------------------------
   (3) "je t'ai dit de mettre sur une seule ligne : 482 evaluees" : la grille
   a deux etages ne rendait pas — retour a UNE rangee flex, contexte ellipse.
   Ce bloc, plus tardif, bat la grille au-dessus. */
body.pp-desk .atl2.cibles .listhead .lh-top{display:flex;flex-wrap:nowrap;
  align-items:center;gap:10px}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-dock{flex:0 1 auto;min-width:0;
  flex-wrap:wrap;row-gap:4px}
/* align-self : la grille d'avant posait end/start — en flex ils etagent tout,
   on recentre chaque bloc explicitement. */
body.pp-desk .atl2.cibles .listhead .lh-top .main{flex:none;white-space:nowrap;
  align-self:center}
body.pp-desk .atl2.cibles .listhead .lh-top .dot{display:inline;align-self:center}
body.pp-desk .atl2.cibles .listhead .lh-top .ctx{flex:0 1 auto;min-width:0;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;align-self:center}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-acts{flex:none;margin-left:auto;
  align-self:center}

/* (2) "on ne voit plus la separation avec les fleches entre les etapes" :
   tous les compteurs a zero, chaque chevron portait le MEME gris — les
   pointes existaient mais rien ne les dessinait. Chaque etape reprend une
   version pale de SA couleur : la forme redevient lisible. */
.atl2.cibles .listhead .step{background:color-mix(in srgb, var(--c) 16%, #fff)}
.atl2.cibles .listhead .step:hover{background:color-mix(in srgb, var(--c) 30%, #fff)}
.atl2.cibles .listhead .step[aria-selected="true"]{background:var(--c)}

/* (1) le select Statut, habille : chevron dessine, teinte du statut courant,
   focus visible — le navigateur garde toute la mecanique. */
.atl2.cibles .desk-list .rsel{appearance:none;-webkit-appearance:none;
  font:inherit;font-size:11px;font-weight:650;height:24px;padding:0 20px 0 9px;
  border:1px solid var(--line);border-radius:999px;color:var(--ink);
  cursor:pointer;max-width:118px;
  background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='5'%3E%3Cpath d='M1 1l3 3 3-3' stroke='%2364748B' fill='none' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat right 7px center}
.atl2.cibles .desk-list .rsel:hover{border-color:#94a3b8;box-shadow:0 1px 4px rgba(15,23,42,.10)}
.atl2.cibles .desk-list .rsel:focus-visible{outline:2px solid #0E8A4F;outline-offset:1px}
.atl2.cibles .desk-list .rsel.rs-off{color:#64748B;font-weight:600}
.atl2.cibles .desk-list .rsel.rs-ret{background-color:#F1FAF4;border-color:#BBE7CC;color:#0A6B3D}
.atl2.cibles .desk-list .rsel.rs-ana{background-color:#F1F6FE;border-color:#BFD8F9;color:#1E5FCC}
.atl2.cibles .desk-list .rsel.rs-tra{background-color:#FFF8EB;border-color:#F5DFAE;color:#92600A}
.atl2.cibles .desk-list .rsel.rs-val{background-color:#0E8A4F;border-color:#0E8A4F;color:#fff}
.atl2.cibles .desk-list .rsel.rs-eca{background-color:#FDF3F3;border-color:#F3C6C6;color:#B91C1C}

/* (5) les onglets Analyse / Societe du zoom : plus de filet gris sous la
   rangee — l'onglet actif porte deja son soulignement. */
.atl2.cibles .readpane .cdnav{border-bottom:0;padding:0}

/* (29/08 : « dans l'edito du jour il faut que l'image prenne toute la
   largeur ») : la carte marche (.art-mktcard) saute les 28 px de gouttiere
   du zoom edito et file bord a bord ; ses filets lateraux tomberaient sur
   les bords du panneau, on les retire. Les cartes flottantes des sections
   decryptees ne bougent pas. */
.atl2.ops .readpane.is-edito .zoom .opcard.art-mktcard{max-width:none;
  margin-left:-28px;margin-right:-28px}
.atl2.ops .readpane.is-edito .zoom .opcard.art-mktcard .ppcard-fit{
  border-left:0;border-right:0}

/* (29/08 soir : « plus d'espace entre la box verte et le haut de la page,
   la ca fait colle ») */
.atl2 .livestrip{margin-top:12px}

/* Le menu du statut, version carte (29/08 soir : « le menu deroulant fait
   vieux et cheap ») : la pastille .rsel devient un bouton (plus d'anneau de
   focus au clic souris), le deroulant est une carte du cockpit — point de
   couleur par statut, coche implicite via .on. Mecanique du menu
   Tout / Evaluables. */
.atl2.cibles .desk-list .rstat{position:relative}
/* le deroulant DOIT sortir de sa pastille : .atl2 .row .c-vd>* pose
   overflow:hidden sur .rstat, qui est aussi le containing block du menu —
   sans ce reset, le menu est entierement rogne (revue 29/08, bloquant). */
.atl2.cibles .desk-list .c-vd .rstat{overflow:visible!important}
/* ... et DOIT passer au-dessus des pastilles des lignes suivantes : chaque
   .rstat porte z-index:4 — la ligne du menu ouvert prend la main. */
.atl2.cibles .desk-list .c-vd .rstat.rs-open{z-index:240}
.atl2.cibles .desk-list .row:has(.rs-open){position:relative;z-index:10}
.atl2.cibles .desk-list button.rsel{display:inline-flex;align-items:center;
  text-align:left;white-space:nowrap}
.atl2.cibles .desk-list .rsmenu{position:absolute;z-index:230;top:calc(100% + 5px);
  right:0;display:flex;flex-direction:column;gap:2px;min-width:152px;padding:5px;
  background:#fff;border:1px solid var(--line);border-radius:11px;
  box-shadow:0 10px 28px rgba(15,23,42,.16)}
.atl2.cibles .desk-list .rsopt{display:flex;align-items:center;gap:8px;width:100%;
  border:0;background:none;border-radius:7px;padding:7px 9px;font:inherit;
  font-size:12px;font-weight:600;color:var(--ink);cursor:pointer;text-align:left}
.atl2.cibles .desk-list .rsopt:hover{background:#F1F5F9}
.atl2.cibles .desk-list .rsopt.on{background:#EFF8F2;color:#0A6B3D;font-weight:750}
.atl2.cibles .desk-list .rsopt.busy{opacity:.5;cursor:default}
.atl2.cibles .desk-list .rsopt .pt2{width:8px;height:8px;border-radius:50%;flex:none}

`,Ss=`
/* ── 🔎 VOS MOTEURS DE SOURCING (module V1 v55-v72 porté, 29/08) ─────────── */
.atl2 .srceng{margin:0 0 10px;border:1px solid var(--line);border-radius:10px;
  background:var(--panel);overflow:hidden}
.atl2 .se-head{display:flex;align-items:center;gap:9px;width:100%;padding:9px 13px;
  border:0;background:transparent;cursor:pointer;font:inherit;text-align:left}
.atl2 .se-head b{font-size:13px;letter-spacing:-.01em}
.atl2 .se-head .se-sum{font-family:var(--mono);font-size:10px;color:var(--muted)}
.atl2 .se-head .se-arr{margin-left:auto;color:var(--dim)}
.atl2 .se-body{padding:0 13px 13px}
.atl2 .se-bar{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:2px 0 10px}
.atl2 .se-win{font:inherit;font-size:11px;font-weight:650;padding:3px 10px;
  border:1px solid var(--line);border-radius:999px;background:#fff;cursor:pointer}
.atl2 .se-win.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.atl2 .se-note{font-size:10.5px;color:var(--dim);margin-left:4px}
.atl2 .se-load,.atl2 .se-err{font-size:12px;color:var(--muted);padding:8px 0}
.atl2 .se-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:9px}
.atl2 .se-card{position:relative;border:1px solid var(--line);border-radius:9px;
  padding:10px 12px;background:var(--panel2)}
.atl2 .se-card.idle{opacity:.55}
.atl2 .se-ct{display:flex;align-items:center;gap:8px}
.atl2 .se-ct b{font-size:12.5px}
.atl2 .se-st{font-family:var(--mono);font-size:9px;letter-spacing:.05em;color:var(--dim)}
.atl2 .se-st.ok{color:var(--brand-d)}
.atl2 .se-spark{margin-left:auto;color:var(--brand)}
.atl2 .se-desc{margin:5px 0 7px;font-size:11px;line-height:1.5;color:var(--muted)}
.atl2 .se-hero{display:flex;align-items:baseline;gap:6px}
.atl2 .se-hero b{font-size:21px;font-weight:800;letter-spacing:-.03em}
.atl2 .se-hero span{font-size:11px;color:var(--muted)}
.atl2 .se-split{margin-top:3px;font-size:11px;color:var(--muted)}
.atl2 .se-split button{font:inherit;font-weight:700;color:var(--ink);background:none;
  border:0;border-bottom:1px dotted var(--line2);cursor:pointer;padding:0}
.atl2 .se-split em{font-style:normal;color:var(--dim)}
.atl2 .se-params{margin-top:6px;font-size:10px;color:var(--dim);word-break:break-word}
.atl2 .se-params i{font-style:normal;font-weight:700;color:var(--muted)}
.atl2 .se-acts{margin-top:8px}
.atl2 .se-adj{font:inherit;font-size:11px;font-weight:650;padding:4px 10px;
  border:1px solid var(--line);border-radius:7px;background:#fff;cursor:pointer}
.atl2 .se-adj:hover{border-color:var(--brand)}
.atl2 .se-ovl{position:absolute;left:6px;right:6px;top:6px;z-index:5;background:#fff;
  border:1px solid var(--line2);border-radius:9px;box-shadow:0 10px 28px rgba(15,23,42,.16);
  padding:9px 11px;max-height:250px;overflow:auto}
.atl2 .se-ovl-h{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px}
.atl2 .se-ovl-h b{font-size:11.5px}
.atl2 .se-ovl-h button{border:0;background:none;font-size:15px;cursor:pointer;color:var(--dim)}
.atl2 .se-ovl ul{list-style:none;margin:0;padding:0}
.atl2 .se-ovl li{display:flex;justify-content:space-between;gap:8px;padding:3px 0;
  border-top:1px solid var(--panel3);font-size:11px}
.atl2 .se-ovl li span{color:var(--dim);white-space:nowrap}
.atl2 .se-nl{margin-top:11px;border:1px solid var(--brand);border-radius:9px;
  padding:10px 12px;background:var(--brand-l)}
.atl2 .se-nl-h{font-size:12px;font-weight:750;margin-bottom:6px}
.atl2 .se-nl textarea{width:100%;box-sizing:border-box;font:inherit;font-size:12px;
  border:1px solid var(--line);border-radius:7px;padding:7px 9px;resize:vertical}
.atl2 .se-nl-a{display:flex;gap:7px;margin-top:7px}
.atl2 .se-nl-a button{font:inherit;font-size:11.5px;font-weight:700;padding:5px 13px;
  border-radius:7px;border:0;background:var(--brand-d);color:#fff;cursor:pointer}
.atl2 .se-nl-a button.gh{background:#fff;color:var(--ink);border:1px solid var(--line)}
.atl2 .se-nl-r{margin-top:8px;font-size:12px;line-height:1.55;white-space:pre-wrap}

/* montée dans la LISTE (onglet À évaluer) : cadre doux, marges de section */
.atl2 .list .evalq,.atl2 .desk-list .evalq{margin:10px 12px;border:1px dashed var(--line2);
  border-radius:10px;padding:12px;background:var(--panel2);display:flex;gap:14px}
/* ── LA FILE D'ÉVALUATION (+ lignes, 29/08) ─────────────────────────────── */
.atl2 .evalq .eq-rows{flex:1;min-width:0;display:flex;flex-direction:column;gap:5px}
.atl2 .eq-row{display:flex;align-items:center;gap:8px}
.atl2 .eq-row input{flex:0 0 220px;font:inherit;font-size:12.5px;padding:6px 9px;
  border:1px solid var(--line);border-radius:7px}
.atl2 .eq-site{flex:1;min-width:0;display:flex;align-items:center;gap:5px;flex-wrap:wrap;
  font-size:11.5px;overflow:hidden}
.atl2 .eq-site a{color:var(--blue);text-decoration:none;white-space:nowrap}
.atl2 .eq-site em{color:var(--dim);font-style:normal;font-size:10.5px}
.atl2 .eq-spin{color:var(--dim);font-style:normal}
.atl2 .eq-cand{font:inherit;font-size:10.5px;font-weight:650;padding:2px 8px;
  border:1px solid var(--blue);border-radius:999px;background:#fff;color:var(--blue);cursor:pointer}
.atl2 .eq-cand:hover{background:var(--blue);color:#fff}
.atl2 .eq-st{flex:none;font-family:var(--mono);font-size:10px;letter-spacing:.04em;color:var(--dim)}
.atl2 .eq-st.s-kept{color:var(--brand-d);font-weight:700}
.atl2 .eq-st.s-out{color:var(--red);font-weight:700}
.atl2 .eq-st.s-ready{color:var(--ink)}
.atl2 .eq-x{flex:none;border:0;background:none;color:var(--dim);font-size:15px;cursor:pointer;padding:0 3px}
.atl2 .eq-x:hover{color:var(--red)}
.atl2 .eq-add{align-self:flex-start;font:inherit;font-size:11.5px;font-weight:650;
  padding:4px 11px;border:1px dashed var(--line2);border-radius:7px;background:#fff;
  color:var(--muted);cursor:pointer}
.atl2 .eq-add:hover{border-color:var(--brand);color:var(--brand-d)}
/* la date d'une ligne-article (vue 📰) */
.atl2 .rds .rdate{flex:none;font-family:var(--mono);font-size:10px;font-weight:700;
  color:var(--muted);background:var(--panel3);border-radius:5px;padding:1px 5px;margin-right:7px}

/* 📰 la pastille Actualités — même famille que ✨/🔴, teinte neutre lecture */
.atl2 .dockbtn.news.on{background:#0B1220;color:#fff;border-color:#0B1220}

/* ── LA LIGNE DE TITRE, PLUS PETITE ET INCASSABLE (29/08 : « winhealth est
   coupé… mets ce texte et les filtres sur 1 seule et même ligne, écrit plus
   petit ») : corps réduit d'un cran sur toute la rangée, et le NOM DU FONDS ne
   peut plus être la victime du rétrécissement — un minimum lisible lui est
   réservé, les pastilles de gauche cèdent avant lui. Vaut carte ouverte ET
   repliée (même sélecteur, ce bloc tardif gagne la cascade). */
body.pp-desk .atl2.cibles .listhead .lh-top{font-size:11.5px;gap:8px}
body.pp-desk .atl2.cibles .listhead .lh-top .main{font-size:11.5px}
body.pp-desk .atl2.cibles .listhead .lh-top .main b{font-size:12.5px}
body.pp-desk .atl2.cibles .listhead .lh-top .ctx{font-size:11px;min-width:150px;flex:1 1 auto}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-dock{flex:0 1 auto}
body.pp-desk .atl2.cibles .listhead .lh-top .lh-dock .dockbtn{font-size:10.5px;padding:3px 8px}
/* -- 29/08 nuit --------------------------------------------------------------
   (1) LA LIGNE DE TITRE au-dessus du tunnel : « 17 retenues · Europe ·
   winhealthgroup » lisible, et chaque filtre actif en puce fermable. */
.atl2.cibles .listhead .lh-title{display:flex;align-items:center;gap:10px;
  flex-wrap:wrap;padding:8px 0 2px;min-width:0}
/* la colonne desktop ORDONNE ses rangees (outils 1, pastilles 4, stats 5,
   tunnel 6) : sans order, la ligne de titre partait en order:0 — arrachee
   tout en haut du bandeau au lieu d'etre collee au tunnel (revue 29/08).
   5 = apres les stats (egalite tranchee par l'ordre DOM), juste avant le
   tunnel. */
body.pp-desk .atl2.cibles .listhead .lh-title{order:5}
.atl2.cibles .listhead .lh-title .main{font-size:15px;font-weight:750;
  color:var(--ink);white-space:nowrap;display:inline-flex;align-items:center;gap:8px}
.atl2.cibles .listhead .lh-title .dot{display:inline;color:#94A3B8}
.atl2.cibles .listhead .lh-title .ctx{display:inline-flex;align-items:center;
  gap:6px;flex-wrap:wrap;font-size:13px;color:#475569;min-width:0}
.atl2.cibles .listhead .lh-title .ctx .fpuce{font-size:12px}

/* la pastille sombre du compte — cerclee de la couleur de l'etape active,
   identique a celle du chevron selectionne : le lien tunnel → liste. */
.atl2.cibles .listhead .lh-title .main .tn{display:inline-flex;align-items:center;
  justify-content:center;min-width:30px;height:24px;padding:0 9px;
  border-radius:999px;background:#0F172A;color:#fff;font-size:13.5px;
  font-weight:800;box-shadow:0 0 0 2.5px color-mix(in srgb, var(--c) 78%, #64748B)}

/* (2) « on ne voit pas qu'on EST sur Retenues » : l'etape active grossit et
   son compteur passe dans la MEME pastille sombre que le titre. (Pas
   d'ombre : clip-path s'applique APRES filter sur le meme element — un
   drop-shadow y est entierement rogne, mesure en revue.) */
.atl2.cibles .listhead .step, .atl2.cibles .listhead .off{position:relative}
.atl2.cibles .listhead .step[aria-selected="true"],
.atl2.cibles .listhead .off[aria-selected="true"]{
  transform:scale(1.06);z-index:6}
.atl2.cibles .listhead .step[aria-selected="true"] .l,
.atl2.cibles .listhead .off[aria-selected="true"] .l{font-weight:800}
.atl2.cibles .listhead .step[aria-selected="true"] .n,
.atl2.cibles .listhead .off[aria-selected="true"] .n{background:#0F172A;
  color:#fff;border-radius:999px;min-width:26px;height:22px;
  display:inline-flex;align-items:center;justify-content:center;
  padding:0 8px;font-weight:800;
  /* le chevron est une colonne flex en stretch : sans align-self, la
     pastille devenait une barre pleine largeur (revue 29/08) */
  align-self:flex-start}

/* (4) les outils de l'entonnoir repondent : desactive VISIBLEMENT gris,
   pression au clic, menu de tri en carte (meme habillage que le menu
   statut). */
.atl2.cibles .lh-funnel .ftools .tool:disabled{opacity:.35;cursor:default}
.atl2.cibles .lh-funnel .ftools .tool:not(:disabled):active{transform:translateY(1px)}
.atl2.cibles .lh-funnel .fsort{position:relative;display:inline-flex}
.atl2.cibles .lh-funnel .sortmenu{position:absolute;z-index:230;
  top:calc(100% + 5px);right:0;display:flex;flex-direction:column;gap:2px;
  min-width:180px;padding:5px;background:#fff;border:1px solid var(--line);
  border-radius:11px;box-shadow:0 10px 28px rgba(15,23,42,.16)}
.atl2.cibles .lh-funnel .sortopt{display:flex;align-items:center;
  justify-content:space-between;gap:10px;width:100%;border:0;background:none;
  border-radius:7px;padding:7px 9px;font:inherit;font-size:12px;
  font-weight:600;color:var(--ink);cursor:pointer;text-align:left}
.atl2.cibles .lh-funnel .sortopt:hover{background:#F1F5F9}
.atl2.cibles .lh-funnel .sortopt.on{background:#EFF8F2;color:#0A6B3D;font-weight:750}
.atl2.cibles .lh-funnel .sortopt i{font-style:normal;font-weight:800;min-width:12px}
@media (max-width:860px){
  /* la bande funnel defile en x et ROGNE en y (overflow-y:hidden) : un menu
     absolu y est invisible — meme piege que .fpanel, monte hors de la barre.
     position:fixed echappe au rognage (aucun ancetre transforme ici). */
  .atl2.cibles .lh-funnel .sortmenu{position:fixed;top:auto;bottom:14px;
    left:14px;right:14px;z-index:400;box-shadow:0 -6px 30px rgba(15,23,42,.25)}
}

/* ═══ LE MÉMO DANS LA FICHE (29/08) — onglets Évaluation / Conviction / Mémo ═══
   La conviction rend ses <b> en têtes de rubrique (Angle / Market / Timing…),
   et l'onglet Mémo accueille les sections RÉELLES de la page publiée : en-tête
   score+tags, table des matières, sections avec images/tables/barres de score
   re-stylées à l'échelle de la fiche. Bloc AUTONOME, tardif = il gagne la
   cascade à spécificité égale. */
.atl2 .convrich b{display:block;font-size:10.5px;font-weight:800;letter-spacing:.08em;
  text-transform:uppercase;color:var(--dim);margin:14px 0 3px}
.atl2 .convrich b:first-child{margin-top:0}
.atl2 .memodoc{margin-top:6px}
.atl2 .md-head{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:2px 0 8px}
.atl2 .md-score{font-size:13px;font-weight:800;padding:3px 10px;border-radius:999px;
  background:#EEF3FB;color:#1E5FCC;font-variant-numeric:tabular-nums}
.atl2 .md-score.md-green{background:#E8F5EE;color:#0F6E3F}
.atl2 .md-score.md-amber,.atl2 .md-score.md-orange{background:#FDF6E7;color:#92600A}
.atl2 .md-score.md-red{background:#FDF3F3;color:#B3261E}
.atl2 .md-tag{font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;
  color:var(--dim);border:1px solid var(--line);border-radius:999px;padding:2px 8px;
  background:var(--panel2)}
.atl2 .md-tagline{width:100%;margin:2px 0 0;font-size:12px;line-height:1.45;color:var(--dim)}
/* la table des matières COLLE en haut pendant qu'on parcourt le mémo (30/08).
   Dans le popup elle colle au conteneur défilant (top:0) ; dans le panneau,
   c'est la page qui défile → décalage sous l'en-tête du site. */
.atl2 .md-toc{display:flex;flex-wrap:wrap;gap:4px;margin:0 0 4px;padding:8px;
  border:1px solid var(--line);border-radius:var(--r);background:var(--panel2);
  position:sticky;top:calc(var(--pp-gap,60px) + 8px);z-index:8;
  box-shadow:0 4px 10px rgba(15,23,42,.06)}
.atl2.cibles .readpane .md-toc{top:calc(var(--pp-gap,60px) + 50px + var(--demand-h,0px))}
.atl2 .pop .md-toc{top:0}
.atl2 .md-jump{font:inherit;font-size:11px;font-weight:650;color:var(--brand-d);
  background:var(--panel);border:1px solid var(--line);border-radius:999px;
  padding:3px 9px;cursor:pointer;white-space:nowrap}
.atl2 .md-jump:hover{border-color:var(--brand)}
.atl2 .md-grp-h{font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;
  color:var(--dim);margin:16px 0 0;padding-top:10px;border-top:2px solid var(--ink)}
.atl2 .md-sec{padding:10px 0 2px;scroll-margin-top:70px;position:relative}
.atl2 .md-sec + .md-sec{border-top:1px solid var(--line)}
.atl2 .md-h{margin:0 0 6px;font-size:13.5px;font-weight:750;letter-spacing:-.01em;
  color:var(--ink)}
.atl2 .md-more{margin:2px 0 8px}
.atl2 .md-body{font-size:12.5px;line-height:1.6;color:#334155;overflow-wrap:anywhere;
  max-width:72ch}
.atl2 .md-body p{margin:0 0 8px}
.atl2 .md-body ul,.atl2 .md-body ol{margin:0 0 8px;padding-left:18px}
.atl2 .md-body img{max-width:100%;height:auto;display:block;margin:8px 0;
  border:1px solid var(--line);border-radius:8px;background:#fff}
.atl2 .md-body h3{margin:14px 0 4px;font-size:13px;font-weight:750;color:var(--ink)}
.atl2 .md-body h4,.atl2 .md-body .kicker{margin:12px 0 3px;font-size:10.5px;font-weight:800;
  letter-spacing:.07em;text-transform:uppercase;color:var(--dim)}
.atl2 .md-body pre{font-size:11px;background:var(--panel2);border:1px solid var(--line);
  border-radius:6px;padding:8px;white-space:pre-wrap;overflow-x:auto}
/* tables : celles du mémo arrivent stylées inline ou pas du tout — on impose
   une grille sobre et un défilement horizontal DANS la fiche (jamais la page).
   ⚠️ width:max-content!important : la page pose width:100% EN INLINE sur ses
   tableaux financiers ; dans un panneau étroit, leurs 6 colonnes nowrap
   écrasaient la colonne Source (overflow-wrap:anywhere) à quelques pixels —
   une lettre par ligne, des cellules de 500px de haut (capture Antoine,
   30/08). En largeur naturelle, la table défile ; min-width garde les
   petites tables pleine largeur. */
.atl2 .md-body table{width:max-content!important;min-width:100%;max-width:none;
  border-collapse:collapse;font-size:11px;margin:8px 0}
.atl2 .md-body th,.atl2 .md-body td{border:1px solid var(--line);padding:4px 6px;
  text-align:left;vertical-align:top}
.atl2 .md-body th{background:var(--panel2);font-weight:700}
/* la page publiée enveloppe 27 tables sur 34 dans .table-container et confiait
   son overflow à sa feuille de style (retirée au scrub) : sans ces règles, les
   cellules nowrap débordaient de la fiche. .md-body en dernier filet. */
.atl2 .md-body .memo-table-fallback,.atl2 .md-body .table-container{overflow-x:auto}
.atl2 .md-body{overflow-x:auto}
.atl2 .md-body .split-container{display:block}
.atl2 .md-body .img-col img{position:static}
/* les barres de score de la page publiée (score-row / sr-*) — les largeurs
   viennent d'un style inline width:% posé au bake, on ne fournit que le cadre */
.atl2 .md-body .score-row{display:flex;align-items:center;gap:8px;margin:3px 0;
  font-size:11.5px}
.atl2 .md-body .score-row.sr-head{font-weight:700}
.atl2 .md-body .sr-label{flex:1 1 42%;min-width:0}
.atl2 .md-body .sr-bar{flex:1 1 46%;height:7px;border-radius:99px;
  background:var(--panel3);overflow:hidden}
.atl2 .md-body .sr-fill{display:block;height:100%;background:#1E5FCC}
.atl2 .md-body .sr-green .sr-fill{background:#0F6E3F}
.atl2 .md-body .sr-amber .sr-fill{background:#B07D1A}
.atl2 .md-body .sr-red .sr-fill{background:#B3261E}
.atl2 .md-body .sr-val{flex:none;font-weight:700;font-variant-numeric:tabular-nums}
.atl2 .md-body .sr-note,.atl2 .md-body .sr-sub{flex:none;color:var(--dim);font-size:10px}
.atl2 .md-body .metric-row{display:flex;justify-content:space-between;gap:10px;
  font-size:11.5px;margin:2px 0}
.atl2 .md-body .swot-grid{display:grid;grid-template-columns:1fr;gap:8px;margin:8px 0}
.atl2 .md-body .swot-item{border:1px solid var(--line);border-left-width:3px;
  border-radius:8px;padding:8px 10px}
.atl2 .md-body .swot-item h3{margin:0 0 4px;font-size:12px}
.atl2 .md-body .s-green{border-left-color:#0F6E3F}
.atl2 .md-body .s-red{border-left-color:#B3261E}
.atl2 .md-body .s-blue{border-left-color:#1E5FCC}
.atl2 .md-body .s-amber{border-left-color:#B07D1A}
.atl2 .md-body .angle-deep-dive{border-left:3px solid var(--brand);
  padding:2px 0 2px 10px;margin:10px 0}
.atl2 .md-body .conv-badge{display:inline-block;font-size:10px;font-weight:800;
  letter-spacing:.05em;text-transform:uppercase;border:1px solid var(--line);
  border-radius:999px;padding:2px 8px;margin:2px 0}
.atl2 .md-body .disclaimer-box{border:1px dashed var(--line);border-radius:8px;
  padding:8px 10px;background:var(--panel2);font-size:11.5px;color:var(--dim)}
.atl2 .md-body .source-list a{color:var(--brand-d)}
/* le GRAND bouton de pied : « Voir le mémo complet » */
.atl2 .btn.mdfull{display:flex;width:100%;justify-content:center;margin-top:10px;
  padding:11px 14px;font-size:13px;text-decoration:none}
/* la carte mentale interactive, sous son PNG (iframe /cibles/mindmap-view) */
.atl2 .md-mm{width:100%;height:440px;border:1px solid var(--line);border-radius:8px;
  margin:4px 0 8px;background:#fff}
.atl2 .md-mm-h{margin-top:10px}
/* le décideur, données du COCKPIT — quand la carte du mémo dit « unavailable » */
.atl2 .md-ctc{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 12px;
  border:1px solid var(--line);border-left:3px solid var(--brand);border-radius:8px;
  padding:8px 10px;margin:0 0 8px;background:var(--panel2);font-size:12.5px}
.atl2 .md-ctc .cdk{min-width:0;width:100%}
.atl2 .md-ctc a{color:var(--brand-d)}
/* « Décrire » respire : séparé du texte du crible (30/08) */
.atl2 .qab{margin-top:14px;padding-top:12px;border-top:1px dashed var(--line)}
/* les pastilles de chiffres des onglets Évaluation / Conviction / Suivi */
.atl2 .md-head.evalhead{margin:2px 0 10px}
/* le bouton 📄 du grand panneau porte AUSSI son texte ; dans les lignes
   denses, l'icône seule suffit (30/08 : « faut aussi le texte ») */
.atl2 .memobtn.sm .mlbl{display:none}
.atl2 .zoom-cta .memobtn.sm .mlbl{display:inline}
/* dans le panneau de droite, la fiche respire un peu plus — et la MÊME taille
   que la conviction (.cdrich 14px) : une seule échelle de texte (30/08) */
.atl2.cibles .readpane .md-body{font-size:14px}
/* la conviction intégrale hors panneau (ligne dépliée, popup) : une lucarne de
   260px ne suffit plus — on monte la borne, le panneau la lève déjà */
.atl2 .cdrich.convrich{max-height:420px}
/* LE POPUP CARTE (352px, position:fixed, overflow forcé visible par le proto) :
   le document sectionné et la conviction intégrale y défilent DANS la fiche,
   sinon le popup traverse l'écran. Et la barre d'onglets y wrappe : six
   onglets ne tiennent pas sur 352px et l'ascenseur est masqué. */
.atl2 .pop .cdmemo.memodoc{max-height:min(48vh,440px);overflow-y:auto}
.atl2 .pop .cdrich.convrich{max-height:300px}
.atl2 .pop .cdnav{flex-wrap:wrap}
/* à l'impression : pas de table des matières, mais le bouton « Déplier » d'une
   section repliée RESTE — c'est la seule trace que du contenu n'est pas là */
@media print{.atl2 .md-toc{display:none!important}}
`,Cs=Ns+Es+Ss;function ln(e){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(e)||""}catch{return""}}function zs(){const e=ln("teaser");if(e==="0"||e==="1")return e;try{if(typeof window<"u"&&window.parent&&window.parent!==window){const a=new URL(window.parent.location.href).searchParams.get("teaser");if(a==="0"||a==="1")return a;if(/\/cibles\/[^/]+\/open\/?$/i.test(window.parent.location.pathname||""))return"0"}}catch{}return""}function As(e,a){if(e||a.mode!=="client"||!a.token)return"visiteur";const r=zs();return r==="0"?"client":r==="1"||ln("embed")==="1"&&ln("chrome")==="1"?"apercu":"client"}const Ts={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0,showMorning:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0}},qs=e=>Ts[e];function Ea(e){const a=(e||"").trim();return a.length<3?!1:!!(/^[^\p{L}(]/u.test(a)||/[:—]\s|…|\.{3}/.test(a)||a.split(/\s+/).length>=3&&/\b(icymi|round-?up|wrap|weekly|podcast|interview|what|why|how|biggest|watch|inside|according)\b/i.test(a))}const Et=e=>{if(e.noCo===void 0){const a=(e.name||"").trim();(!Jr(a)||Ea(a))&&(e.noCo=!0)}return Object.assign(e,{continent:pi(e.cc)})};function Va(e){const a=new Set,r=[];for(const n of e){const o=(n.name||"").toLowerCase();!o||a.has(o)||(a.add(o),r.push(n))}return r}const Ls=60*60*1e3;function Fs(e){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+e)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>Ls?null:a}catch{return null}}function ca(e,a){try{sessionStorage.setItem("ppmap:swr:"+e,JSON.stringify({...a,ts:Date.now()}))}catch{}}const Rs=e=>e==="default"?"":e==="ops"?"ops":"research:"+e.research;function Ms(e,a,r="default"){const n=r!=="default",o=u.useMemo(()=>e||n?{mode:"anon"}:ei(),[e,n]),i=u.useMemo(()=>n?"visiteur":As(e,o),[e,o,n]),l=u.useMemo(()=>qs(i),[i]),s=i!=="visiteur",c=Rs(r),[g,d]=u.useState([]),[x,m]=u.useState(""),[h,p]=u.useState(null),[v,y]=u.useState(null),[f,k]=u.useState(null),[j,w]=u.useState(()=>new Map),[N,z]=u.useState(()=>new Map),[S,q]=u.useState(""),[A,F]=u.useState(new Set),[D,P]=u.useState(null),[L,R]=u.useState(!0),[b,T]=u.useState(!1),[$,X]=u.useState(0),[I,O]=u.useState(0),Q=u.useRef(0),Y=u.useMemo(()=>{var J;if(i!=="client")return"";try{return((J=ti())==null?void 0:J.email)||""}catch{return""}},[i]);u.useEffect(()=>{const J=++Q.current;let ge=!0;const W=()=>ge&&J===Q.current,ce=(s&&o.token?o.token:"pub:"+a)+(c?":"+c:""),le=Fs(ce);return le?(d(le.objs.map(Et)),le.fund&&m(le.fund),p(le.marketEstimate??null),y(le.criteria??null),k(le.stats??null),q(le.generatedAt||""),R(!1)):R(!0),(async()=>{try{if(r==="ops"){const be=await _a(),me=((be==null?void 0:be.recent_ops)||[]).map(de=>{const pe=va(de.company_name||de.title?de:{...de,title:(de.headline_fr||de.headline||"").slice(0,120)},a),xe=String(de.rubrique||"").toLowerCase();return pe&&(xe==="nominations"||xe==="recrutements")&&(pe.engine=xe),pe&&!String(de.company_name||"").trim()&&(pe.noCo=!0),pe}).filter(de=>!!de).map(de=>(Jr((de.name||"").trim())||(de.noCo=!0),de));try{const de=ai(),pe=await ni(),xe=((pe==null?void 0:pe.date)||"").slice(0,10),H=de?de.doc:pe,re=ri(H),fe=((de==null?void 0:de.day)||(H==null?void 0:H.date)||xe||"").slice(0,10);if(fe&&re.length){const ke=new Set;for(const ne of me){if((ne.date||"").slice(0,10)!==fe)continue;const ve=$n(re,ke,ne.name,"");ve>=0&&(ke.add(ve),ne.decryptHtml=re[ve].html)}for(const ne of me){if(ne.decryptHtml||(ne.date||"").slice(0,10)!==fe)continue;const ve=$n(re,ke,"",ne.headline||ne.tagline||ne.name);ve>=0&&(ke.add(ve),ne.decryptHtml=re[ve].html)}}if(fe){const ke=((H==null?void 0:H.title_fr)||"").trim(),ne=((H==null?void 0:H.lead_fr)||"").trim(),ve=oi(H),oe=((H==null?void 0:H.url)||"").trim();ke&&(ve||oe)&&me.unshift({id:`edito:${fe}`,kind:"op",name:ke,cc:null,date:fe,engine:"edito",dealKind:"other",headline:ke,tagline:ne||ke,decryptHtml:ve||void 0,url:oe,noCo:!0})}}catch{}if(!W())return;d(me.map(Et)),ca(ce,{objs:me})}else if(typeof r=="object"){const me=(await Un()||[]).filter(pe=>(pe.slug||"")===r.research).map(pe=>Hn(pe,a)).filter(pe=>!!pe),de=Va(await Vn(me,a));if(!W())return;d(de.map(Et)),ca(ce,{objs:de})}else if(s&&o.token){const be=ii(o.token),me=_a(),de=si(o.token),pe=li(o.token),xe=di(o.token),H=await be;let re=H?H.targets:[];W()&&H&&(m(H.fund||""),p(H.marketEstimate??null),y(H.criteria??null),k(H.stats??null),q(H.generatedAt||""),d(re.map(Et)),R(!1),T(!1));const[fe,ke,ne,ve]=await Promise.all([me,de,pe,xe]),oe=((fe==null?void 0:fe.recent_ops)||[]).map(he=>va(he,a)).filter(he=>!!he),Ee=new Set(re.map(he=>he.id));if(re=[...re,...oe.filter(he=>!Ee.has(he.id)&&(Ee.add(he.id),!0))],!W())return;d(re.map(Et));const Qe=new Set;for(const he of ke){const Se=(he.id||he.co||"").toString().trim().toLowerCase();Se&&Qe.add(Se.startsWith("t:")?Se:"t:"+Se)}F(Qe),w(ne),z(ve),H&&ca(ce,{fund:H.fund,marketEstimate:H.marketEstimate,criteria:H.criteria,stats:H.stats,generatedAt:H.generatedAt,objs:re})}else{const be=ci(),me=Un(),de=_a(),pe=await be;W()&&pe.length&&(d(Va(pe).map(Et)),R(!1),T(!1));const[xe,H]=await Promise.all([me,de]),re=(xe||[]).map(ve=>Hn(ve,a)).filter(ve=>!!ve),fe=await Vn(re,a),ke=((H==null?void 0:H.recent_ops)||[]).map(ve=>va(ve,a)).filter(ve=>!!ve),ne=Va([...pe,...fe,...ke]);if(!W())return;d(ne.map(Et)),ca(ce,{objs:ne})}W()&&T(!1)}catch{W()&&!le&&T(!0)}finally{W()&&R(!1)}})(),()=>{ge=!1}},[s,o.token,a,$,c]),u.useEffect(()=>{if(!l.showCredits||!Y){P(null);return}let J=!0;return(async()=>{try{const ge=await fetch(`${Da}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:Y})});if(!ge.ok)return;const W=await ge.json();J&&W&&W.ok!==!1&&P(W)}catch{}})(),()=>{J=!1}},[l.showCredits,Y,I]);const K=u.useCallback(J=>F(new Set(J)),[]);return{session:o,mode:i,caps:l,fund:x,email:Y,marketEstimate:h,generatedAt:S,criteria:v,stats:f,thumbs:j,stages:N,dossiers:g,favIds:A,setFavIds:K,credits:D,reloadCredits:()=>O(J=>J+1),loading:L,error:b,refresh:()=>X(J=>J+1)}}function We(e){return e?e.engine==="edito"||String(e.id||"").startsWith("edito:"):!1}const ya=new Set(["media","nominations","recrutements","tribunes","listes","evenements","partenariats","produits","regul","marche"]);function Sa(e){return ya.has(e.engine||"")}function Ve(e){return!!e.noCo||Sa(e)&&!!e.url}const oo=()=>({win:"all",day:"",status:"all",signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],acquirer:"",search:""}),Os=(e="europe",a=!1,r)=>({continent:e,ptab:(r==null?void 0:r.ptab)??1,dens:(r==null?void 0:r.dens)??"liste",filters:{...oo(),...Object.fromEntries(Object.entries((r==null?void 0:r.filters)||{}).filter(([,n])=>n!==void 0))},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,focusId:null,modal:(r==null?void 0:r.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,memoTab:0,undo:[],mapFolded:a}),Ds=new Set(["signal","amount","score","crible","memo"]);function Is(e,a){switch(a.type){case"continent":return{...e,continent:a.key,filters:{...e.filters,country:[]},shown:{},popupId:null,focusId:null,openFacet:null};case"ptab":return{...e,ptab:a.tab,shown:{},popupId:null,focusId:null};case"dens":return{...e,dens:a.dens,shown:{}};case"filters":return{...e,filters:{...e.filters,...a.patch},shown:{}};case"toggleFacet":{const r=e.filters[a.facet],n=r.includes(a.value)?r.filter(o=>o!==a.value):[...r,a.value];return{...e,filters:{...e.filters,[a.facet]:n},shown:{}}}case"toggleMemoLevel":{const r=e.filters.memoLevel,n=r.includes(a.value)?r.filter(o=>o!==a.value):[...r,a.value];return{...e,filters:{...e.filters,memoLevel:n},shown:{}}}case"acquirer":return{...e,filters:{...e.filters,acquirer:a.value,day:"",win:"all"},shown:{}};case"clearFacet":return{...e,filters:{...e.filters,[a.facet]:[]},shown:{}};case"reset":return{...e,filters:oo(),shown:{},openFacet:null};case"sort":return{...e,sort:e.sort.key===a.key?{key:a.key,dir:e.sort.dir*-1}:{key:a.key,dir:Ds.has(a.key)?-1:1}};case"groupBy":return{...e,groupBy:a.groupBy};case"more":return{...e,shown:{...e.shown,[a.group]:(e.shown[a.group]??a.base??io)+a.by}};case"pile":return{...e,pileMode:a.on,popupId:null};case"openFacet":return{...e,openFacet:e.openFacet===a.facet?null:a.facet};case"popup":return{...e,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"focus":return{...e,focusId:a.id,popupId:a.id?null:e.popupId};case"modal":return{...e,modal:a.modal,popupId:a.modal?null:e.popupId};case"chainStart":return{...e,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...e,chain:{...e.chain,idx:e.chain.idx+1}};case"spaceTab":return{...e,spaceTab:a.tab};case"memoConsole":return{...e,memoConsole:a.id,memoTab:0};case"memoTab":return{...e,memoTab:a.tab};case"undoPush":return{...e,undo:[...e.undo,a.entry].slice(-50)};case"undoPop":return{...e,undo:e.undo.slice(0,-1)};case"mapFold":return{...e,mapFolded:a.folded,openFacet:null};default:return e}}const io=80;function Ca(e,a,r,n){var o;if(n!=="signal"&&a.signalOnly&&(!Me(e)||a.signalEngines.length&&!a.signalEngines.includes(e.engine||""))||n!=="dealKind"&&((o=a.dealKind)!=null&&o.length)&&!a.dealKind.includes(e.dealKind||"")||n!=="sector"&&a.sector.length&&!a.sector.includes(e.sector||"")||n!=="acquirer"&&a.acquirer.trim()&&(e.acquirer||"").trim().toLowerCase()!==a.acquirer.trim().toLowerCase()||n!=="engine"&&a.engine.length&&!a.engine.includes(e.engine||"")||n!=="stage"&&a.stage.length&&!a.stage.includes(e.stage||"")||n!=="angle"&&r&&a.angle.length&&!a.angle.includes(e.angle||"")||n!=="memoLevel"&&r&&a.memoLevel.length&&!a.memoLevel.includes(En(e)))return!1;if(n!=="win"){if(a.day){if((e.date||"").slice(0,10)!==a.day)return!1}else if(a.win!=="all"){const i=a.win==="1"?0:a.win==="7"?7:30;if(ht(e.date)>i)return!1}}if(n!=="status"&&!r&&a.status!=="all"&&Ct(e)!==a.status)return!1;if(n!=="search"&&a.search.trim()){const i=a.search.trim().toLowerCase();if(!`${e.name||""} ${e.tagline||""} ${e.sector||""} ${e.acquirer||""}`.toLowerCase().includes(i))return!1}return!0}function ea(e,a,r){return We(e)?Ca(e,a.filters,r):a.continent!=="monde"&&e.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(e.cc||"")?!1:Ca(e,a.filters,r)}function Ps(e,a,r,n){return!(!ea(e,a,r)||r&&!ui(e,a.ptab,n))}function An(e,a){const r=a.key,n=o=>{switch(r){case"name":return(o.name||"").toLowerCase();case"country":return o.countryLabel||o.cc||"";case"stage":return o.stage||"";case"amount":return o.amountEur||-1;case"age":return-ht(o.date);case"score":return typeof o.score=="number"?o.score:-1;case"crible":return fi(o);case"memo":return mi(o);case"signal":{const i=Me(o);return i?100-(i.left??0):-1}}};return[...e].sort((o,i)=>{const l=n(o),s=n(i);return l<s?-a.dir:l>s?a.dir:(o.name||"").localeCompare(i.name||"")})}const Wa={},rr=(Wa==null?void 0:Wa.VITE_API_BASE)||"https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function or(){return new Date().toISOString().slice(0,10)}const Tn=u.createContext(null);function so(){return u.useContext(Tn)}function Bs(e){if(!e||typeof DOMParser>"u")return[];const a=[];try{const r=new DOMParser().parseFromString(e,"text/html");for(const n of[...r.querySelectorAll("p")]){if((n.textContent||"").replace(/\s+/g," ").trim().length<40)continue;const i=n.querySelector("strong,b"),l=((i==null?void 0:i.textContent)||"").replace(/\s+/g," ").trim();if(!l||l.length<2||l.length>60)continue;const s=n.cloneNode(!0);s.querySelectorAll("script,style,iframe").forEach(c=>c.remove()),s.querySelectorAll("*").forEach(c=>{const g=c.tagName==="A"?c.getAttribute("href"):null;[...c.attributes].forEach(d=>c.removeAttribute(d.name)),g&&/^https?:\/\//i.test(g)&&(c.setAttribute("href",g),c.setAttribute("target","_blank"),c.setAttribute("rel","nofollow noopener"))}),a.push({t:l.toLowerCase(),html:s.outerHTML})}}catch{}return a}function _s(e){if(!e||typeof DOMParser>"u")return e;try{const r=new DOMParser().parseFromString(`<div id="ed">${e}</div>`,"text/html").getElementById("ed");return r?(r.querySelectorAll("script,style,iframe,object,embed,link,meta,form,input,button").forEach(n=>n.remove()),r.querySelectorAll("*").forEach(n=>{[...n.attributes].forEach(o=>{const i=o.name.toLowerCase(),l=o.value,s=i==="class"||i==="alt"||i==="width"||i==="height"||i.startsWith("data-"),c=(i==="href"||i==="src")&&/^https?:\/\//i.test(l);!s&&!c&&n.removeAttribute(o.name)}),n.tagName==="A"&&n.getAttribute("href")&&(n.setAttribute("target","_blank"),n.setAttribute("rel","nofollow noopener"))}),r.innerHTML):e}catch{return e}}function ir(e){if(!e||typeof DOMParser>"u")return e;try{const r=new DOMParser().parseFromString(`<div id="tb">${e}</div>`,"text/html").getElementById("tb");if(!r)return e;r.querySelectorAll("script,style,iframe").forEach(n=>n.remove()),r.querySelectorAll("*").forEach(n=>{const o=n.tagName==="A"?n.getAttribute("href"):null,i=n.getAttribute("class"),l=i==="tb-geo"||i==="tb-these"||i==="tb-sec"?i:"";[...n.attributes].forEach(s=>n.removeAttribute(s.name)),l&&n.setAttribute("class",l),o&&/^https?:\/\//i.test(o)&&(n.setAttribute("href",o),n.setAttribute("target","_blank"),n.setAttribute("rel","nofollow noopener"))});for(const n of[...r.querySelectorAll("p")]){const o=(n.textContent||"").replace(/\s+/g," ").trim();o&&o.length<=28&&!n.querySelector("a,ul,li,strong")&&!/[.:;!?]$/.test(o)&&o.split(" ").length<=3&&n.setAttribute("class","tb-geo")}for(const n of[...r.querySelectorAll("p")]){const o=(n.textContent||"").replace(/\s+/g," ").trim();o&&o.length<=64&&/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(o)&&!n.querySelector("a,ul")&&n.setAttribute("class","tb-sec")}for(const n of[...r.querySelectorAll("b,strong")]){const o=(n.textContent||"").replace(/\s+/g," ").trim().toLowerCase();/^[^a-zà-ÿ]*(pour votre th|for your thesis)/.test(o)&&n.setAttribute("class","tb-these")}for(const n of[...r.querySelectorAll("div,section,p")]){const o=(n.textContent||"").replace(/\s+/g," ").trim();if(/^en bref|^in brief/i.test(o)&&n.querySelector("li,p,ul")){n.classList.add("ed-lead");break}}return r.innerHTML}catch{return e}}function sr(e,a=!1){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||"");if(!r)return e;const i=(a?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||"",l=String(Number(r[3]));return a?`${i} ${l}, ${r[1]}`:`${l==="1"?"1ᵉʳ":l} ${i} ${r[1]}`}function lo(){const e=u.useContext(Tn);if(!e)throw new Error("ThesisEdition* must be under ThesisEditionProvider");return e}function $s({token:e,children:a}){const{dispatch:r,st:n,lang:o}=V(),[i,l]=u.useState(()=>n.filters.day||or()),[s,c]=u.useState(null),[g,d]=u.useState(!1),x=u.useCallback(v=>{if(/^\d{4}-\d{2}-\d{2}$/.test(v)){l(v);try{r({type:"filters",patch:{day:v,win:"all"}})}catch{}}},[r]),m=u.useCallback(()=>{l(or());try{r({type:"filters",patch:{day:"",win:"all"}})}catch{}},[r]);u.useEffect(()=>{const v=y=>{var k;const f=(k=y.detail)==null?void 0:k.day;typeof f=="string"&&x(f)};return window.addEventListener("pp-edition-day",v),()=>window.removeEventListener("pp-edition-day",v)},[x]),u.useEffect(()=>{n.filters.day&&n.filters.day!==i&&l(n.filters.day)},[n.filters.day]),u.useEffect(()=>{if(!e||!i)return;let v=!1;d(!0);const y=new URLSearchParams({token:e,date:i});return fetch(`${rr}/cibles/edition.json?${y}`).then(f=>f.json()).then(f=>{v||c(f)}).catch(()=>{v||c({ok:!1,error:"network"})}).finally(()=>{v||d(!1)}),()=>{v=!0}},[e,i]);const h=u.useMemo(()=>`${rr}/cibles/editions.json?token=${encodeURIComponent(e)}`,[e]),p=u.useMemo(()=>({token:e,day:i,ed:s,loading:g,pickDay:x,pickWindow:m,dayPicked:!!n.filters.day,daysUrl:h,isEn:o==="en"}),[e,i,s,g,x,m,n.filters.day,h,o]);return t.jsx(Tn.Provider,{value:p,children:a})}function Us(){const{day:e,daysUrl:a,pickDay:r,dayPicked:n}=lo(),[o,i]=u.useState(()=>n||Xr());return u.useEffect(()=>{n&&i(!0)},[n]),u.useEffect(()=>{const l=s=>{var c;return i(!!((c=s.detail)!=null&&c.open))};return window.addEventListener(ja,l),()=>window.removeEventListener(ja,l)},[]),o?t.jsx("div",{className:"thesis-days",children:t.jsx(hi,{mode:"local",theme:"dark",month:e.slice(0,7),current:n?e:"",windowDays:0,daysUrl:a,onPick:r})}):null}async function Hs(e){try{const a=await fetch("https://proplace.co/actualites/today.json",{cache:"no-store"});if(!a.ok)return null;const r=await a.json(),n=String((r==null?void 0:r.date)||"").slice(0,10);if(!n||e&&n!==e.slice(0,10))return null;const o=String((r==null?void 0:r.html_fr)||(r==null?void 0:r.html_en)||"");return o.trim()?{date:n,title:String((r==null?void 0:r.title_fr)||(r==null?void 0:r.title_en)||""),html:o}:null}catch{return null}}function lr(e){if(!e)return!1;const a=new Date,r=n=>String(n).padStart(2,"0");return e.slice(0,10)===`${a.getFullYear()}-${r(a.getMonth()+1)}-${r(a.getDate())}`}function dr(e){const a=(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(a)?`https://proplace.co/actualites/operations-${a}/`:"https://proplace.co/actualites/"}function Vs(){const{day:e,ed:a,loading:r,pickWindow:n,dayPicked:o,isEn:i}=lo(),l=!!(a!=null&&a.ok&&(a.html||a.acquirers_html)),s=(a==null?void 0:a.ok)&&!l,c=a&&!a.ok,g=u.useRef(null),[d,x]=u.useState("fonds"),[m,h]=u.useState(null),[p,v]=u.useState("idle"),y=u.useRef(!1);u.useEffect(()=>{h(null),v("idle"),y.current=!1,x("fonds")},[e]),u.useEffect(()=>{if(d!=="jour"||y.current)return;y.current=!0;let N=!0;return v("load"),Hs(e).then(z=>{N&&(h(z),v("fait"))}),()=>{N=!1}},[d,e]);const f=u.useMemo(()=>_s((m==null?void 0:m.html)||""),[m==null?void 0:m.html]),k=u.useRef(null);u.useEffect(()=>{const N=k.current;if(!N||!f)return;let z=!1;return nn(()=>import("./fit-BnaWm7z_.js"),[]).then(async S=>{await S.ensureEditoCss(),!(z||!N.isConnected)&&(S.beautifyEditoRows(N),S.mountCardFits(N))}),()=>{z=!0}},[f]);const j=u.useMemo(()=>ir((a==null?void 0:a.html)||""),[a==null?void 0:a.html]),w=u.useMemo(()=>ir((a==null?void 0:a.acquirers_html)||""),[a==null?void 0:a.acquirers_html]);return u.useEffect(()=>{const N=g.current;if(!N||!j)return;let z=!1;return nn(()=>import("./fit-BnaWm7z_.js"),[]).then(async S=>{await S.ensureEditoCss(),!(z||!N.isConnected)&&(S.beautifyEditoRows(N),S.mountCardFits(N))}),()=>{z=!0}},[j]),t.jsxs("section",{className:"thesis-brief","data-day":(a==null?void 0:a.date)||e,"data-fund":(a==null?void 0:a.fund)||"",children:[t.jsx("style",{children:`
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
      `}),t.jsxs("header",{className:"thesis-brief__hd",children:[t.jsx("span",{className:"thesis-brief__kicker",children:i?"Daily brief":"Brief du jour"}),t.jsxs("h2",{className:"thesis-brief__title",children:[i?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",(a==null?void 0:a.count)!=null&&a.count>0?` · ${a.count}`:""]}),((a==null?void 0:a.date)||e)&&t.jsx("time",{className:"thesis-brief__date",dateTime:(a==null?void 0:a.date)||e,children:(a==null?void 0:a.date)||e})]}),t.jsxs("div",{className:"thesis-brief__sw",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":d==="fonds",onClick:()=>x("fonds"),children:(i?"Editorial · ":"Édito · ")+((a==null?void 0:a.fund)||(i?"your thesis":"votre thèse"))}),t.jsx("button",{type:"button",role:"tab","aria-selected":d==="jour",onClick:()=>x("jour"),children:i?"Editorial of the day":"Édito du jour"})]}),d==="fonds"&&t.jsx("p",{className:"thesis-brief__hint",children:i?"Same content as your daily email for this fund. Pick a day above the map to change this brief and the LIVE ticker.":"Même contenu que l’email quotidien de ce fonds. Choisir un jour au-dessus de la carte change ce brief et le LIVE."}),d==="fonds"&&r&&!l&&t.jsx("p",{className:"thesis-brief__loading",children:i?"Loading your thesis brief…":"Chargement de votre brief de thèse…"}),d==="fonds"&&c&&t.jsxs("p",{className:"thesis-brief__err",children:[i?"Could not load this brief.":"Impossible de charger ce brief.",a!=null&&a.error?` (${a.error})`:""]}),d==="fonds"&&s&&!r&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"thesis-brief__empty",children:i?lr(e)?t.jsxs(t.Fragment,{children:["No operation relevant to your thesis was found ",t.jsx("b",{children:"today"}),"."]}):t.jsxs(t.Fragment,{children:["No operation relevant to your thesis was found on ",t.jsx("b",{children:sr(e,!0)}),"."]}):lr(e)?t.jsxs(t.Fragment,{children:["Aucune opération pertinente pour votre thèse n’a été relevée ",t.jsx("b",{children:"aujourd’hui"}),"."]}):t.jsxs(t.Fragment,{children:["Aucune opération pertinente pour votre thèse n’a été relevée le ",t.jsx("b",{children:sr(e)}),"."]})}),t.jsx("button",{type:"button",className:"thesis-brief__all",onClick:()=>x("jour"),children:i?"See all of the day’s operations →":"Voir toutes les opérations du jour →"})]}),d==="fonds"&&l&&j?t.jsx("div",{ref:g,className:"thesis-brief__body zoom-body ppart",dangerouslySetInnerHTML:{__html:j}}):null,d==="fonds"&&l&&w?t.jsx("div",{className:"thesis-brief__acq zoom-body",dangerouslySetInnerHTML:{__html:w}}):null,d==="jour"&&(f?t.jsxs(t.Fragment,{children:[(m==null?void 0:m.title)&&t.jsx("h3",{className:"thesis-brief__title",style:{margin:"0 0 10px"},children:m.title}),t.jsx("div",{ref:k,className:"thesis-brief__body zoom-body ppart",dangerouslySetInnerHTML:{__html:f}})]}):t.jsx("p",{className:p==="fait"?"thesis-brief__empty":"thesis-brief__loading",children:p!=="fait"?i?"Loading the daily editorial…":"Chargement de l’édito du jour…":i?t.jsxs(t.Fragment,{children:["No shared editorial for this day. ",t.jsx("a",{className:"thesis-brief__all",href:dr(e),target:"_blank",rel:"noopener noreferrer",children:"Open the day’s page →"})]}):t.jsxs(t.Fragment,{children:["Pas d’édito partagé pour ce jour. ",t.jsx("a",{className:"thesis-brief__all",href:dr(e),target:"_blank",rel:"noopener noreferrer",children:"Ouvrir la page du jour →"})]})})),o&&t.jsx("button",{type:"button",className:"thesis-brief__clear",onClick:n,children:i?"← See all":"← Voir tout"})]})}const Ws=300,pa=7,Gs={fr:{ma:"🤝 M&A",levees:"🚀 Levées de fonds",nominations:"👤 Nominations",recrutements:"💼 Offres d'emploi",actualites:"📰 Autres actualités"},en:{ma:"🤝 M&A",levees:"🚀 Fundraising",nominations:"👤 Appointments",recrutements:"💼 Job offers",actualites:"📰 Other news"}},co={fr:{hiring:"💼 Recrute",raised:"💰 Lève des fonds",news:"📰 Presse",posting:"📣 Publie",building:"💻 Construit",community:"💬 Communauté",registry:"🆕 Nouveau",exodus:"👋 Départs",other:"🔔 Signal"},en:{hiring:"💼 Hiring",raised:"💰 Raising",news:"📰 Press",posting:"📣 Posting",building:"💻 Building",community:"💬 Community",registry:"🆕 New",exodus:"👋 Exodus",other:"🔔 Signal"}},Ys=["hiring","raised","news","posting","building","community","registry","exodus","other"];function Ga(e){const a=(e.rubrique||"").toLowerCase();if(a==="ma"||a==="levees"||a==="nominations"||a==="recrutements")return a;if(e.dealKind==="ma")return"ma";if(e.dealKind==="levee")return"levees";const r=(e.engine||"").toLowerCase();if(r==="nominations")return"nominations";if(r==="recrutements")return"recrutements";if(vi(r)&&r!=="media")return"news:"+r;const n=Me(e);return n?"sig:"+(n.theme&&co.fr[n.theme]?n.theme:"other"):"actualites"}function Ks(){const{dossiers:e,st:a,t:r,dispatch:n,contName:o,pipe:i,lang:l,fund:s}=V(),c=so(),g=l==="en",[d,x]=u.useState("all"),[m,h]=u.useState(!1),p=u.useMemo(()=>{var ge;const b=(a.filters.day||"").slice(0,10),T=W=>!(!i&&a.continent!=="monde"&&W.continent!==a.continent||b&&(W.date||"").slice(0,10)!==b),$=e.filter(W=>T(W)&&Me(W)&&(!i||W.kind!=="target"||ze(W)!==5)),X=i&&(((ge=c==null?void 0:c.ed)==null?void 0:ge.ops)||[]).length?c.ed.ops.map(W=>va(W,l)).filter(W=>!!W).map(W=>(W.briefOnly=!0,W)).filter(W=>!b||(W.date||"").slice(0,10)===b):[],I=e.filter(W=>T(W)&&W.kind==="op"&&(b?!0:ht(W.date)<=pa)),O=i?X.length?X:I.filter(W=>{const ce=(s||"").trim().toLowerCase();if(!ce)return!1;const le=W.match||null;return le?Object.keys(le).map(be=>be.trim().toLowerCase()).includes(ce):!1}):I,Q=b||new Date().toISOString().slice(0,10),Y=W=>{const ce=Ga(W);return ce==="ma"?0:ce==="levees"?1:2};O.sort((W,ce)=>{const le=Y(W)-Y(ce);if(le)return le;const be=(W.date||"").slice(0,10)===Q?0:1,me=(ce.date||"").slice(0,10)===Q?0:1;return be!==me?be-me:(ce.amountEur||0)-(W.amountEur||0)});const K=new Set,J=[];for(const W of[...O,...An($,{key:"signal",dir:-1})]){const ce=W.id||W.name;!ce||K.has(ce)||(K.add(ce),J.push(W))}return i&&J.length===0?e.filter(ce=>T(ce)&&ht(ce.date)<=pa).sort((ce,le)=>(le.date||"").localeCompare(ce.date||"")).slice(0,80):J},[e,a.continent,a.filters.day,i,s,l,c]),v=u.useMemo(()=>{const b={};for(const T of p){const $=Ga(T);b[$]=(b[$]||0)+1}return b},[p]),y=u.useMemo(()=>d==="all"?p:p.filter(b=>Ga(b)===d),[p,d]),f=u.useMemo(()=>y.slice(0,Ws),[y]),k=y.length-f.length,j=u.useRef(null);u.useEffect(()=>{var O,Q;const b=j.current;if(!b)return;const T=()=>{const Y=b.scrollWidth;Y<200||(b.style.animationDuration=Math.max(18,Math.round(Y/130))+"s")};T();const $=requestAnimationFrame(T),X=window.setTimeout(T,1200);let I=!0;return(Q=(O=document.fonts)==null?void 0:O.ready)==null||Q.then(()=>{I&&T()}),()=>{I=!1,cancelAnimationFrame($),window.clearTimeout(X)}},[f.length,d]);const w=b=>b==="all"?p.length:v[b]||0,N=b=>{if(b==="all")return g?"All":"Tout";if(b.startsWith("sig:"))return co[g?"en":"fr"][b.slice(4)]||"🔔";if(b.startsWith("news:")){const T=b.slice(5);return gi[T]?bi(T,g?"en":"fr"):b}return Gs[g?"en":"fr"][b]},z=[{k:"all"}],S=["ma","levees"].filter(b=>w(b)>0||b===d);if(S.length){z.push({g:g?"Deals":"Opérations"});for(const b of S)z.push({k:b})}const q=["nominations","recrutements"].filter(b=>w(b)>0||b===d),A=xi.filter(b=>b!=="media").map(b=>"news:"+b).filter(b=>w(b)>0||b===d),F=w("actualites")>0||d==="actualites"?["actualites"]:[];if(q.length||A.length||F.length){z.push({g:g?"News":"Actualités"});for(const b of q)z.push({k:b});for(const b of A)z.push({k:b});for(const b of F)z.push({k:b})}const D=Ys.map(b=>"sig:"+b).filter(b=>w(b)>0||b===d);if(D.length){z.push({g:g?"Signals (your engines)":"Signaux (vos moteurs)"});for(const b of D)z.push({k:b})}const P=b=>{try{return new Date(b+"T12:00:00Z").toLocaleDateString(g?"en-GB":"fr-FR",{day:"numeric",month:"long"})}catch{return b}},L=(()=>{const b=(a.filters.day||"").slice(0,10),T=!i&&a.continent!=="monde"&&o?g?` Scope: ${o}.`:` Périmètre : ${o}.`:"";return b?(g?`LIVE covers the events of ${P(b)}.`:`Le LIVE regroupe les événements du ${P(b)}.`)+T:(g?`LIVE covers the still-open signals and the deals of the last ${pa} days.`:`Le LIVE regroupe les signaux encore ouverts et les opérations des ${pa} derniers jours.`)+T})(),R=b=>f.map(T=>t.jsxs("button",{type:"button",className:"tk"+(Ie(T)?" spent":""),onClick:$=>{const X=T.briefOnly===!0;try{window.dispatchEvent(new CustomEvent("ppmap:focus",{detail:{id:X?"":T.id,name:T.name,url:T.url||"",text:T.tagline||T.headline||"",card:T.card}}))}catch{}if(X||n({type:"focus",id:T.id}),a.dens!=="liste"){const I=$.currentTarget.getBoundingClientRect();n({type:"popup",id:T.id,anchor:{x:I.left+I.width/2,y:I.bottom}})}},title:T.name+(T.tagline?" — "+T.tagline:""),children:[t.jsx(yt,{o:T}),t.jsxs("span",{className:"who",children:[t.jsx(Wo,{o:T}),t.jsx("span",{className:"co",children:T.name})]}),typeof T.amountEur=="number"&&T.amountEur>0&&t.jsx("span",{className:"am",children:Ac(T.amountEur)}),T.sector&&t.jsx("span",{className:"mt",children:T.sector}),t.jsx(Ia,{o:T}),t.jsx("span",{className:"tkgo",children:"→"})]},b+(T.id||T.name))).concat(k>0?[t.jsx("span",{className:"tk quiet",children:g?`+ ${k} more — filter by section to see them`:`+ ${k} autres — filtrez par rubrique pour les voir`},b+":more")]:[]);return t.jsxs("div",{className:"ticker",children:[t.jsxs("span",{className:"lbl",children:[t.jsx("i",{}),r.live]}),t.jsxs("span",{className:"tkfil",onBlur:b=>{b.currentTarget.contains(b.relatedTarget)||h(!1)},children:[t.jsxs("button",{type:"button",className:"tkfilb","aria-expanded":m,onClick:()=>h(b=>!b),children:[N(d),t.jsx("b",{children:w(d)}),t.jsx("span",{"aria-hidden":"true",children:"▾"})]}),t.jsxs("div",{className:"tkfilm",hidden:!m,children:[t.jsx("span",{className:"tkfilscope",children:L}),z.map(b=>"g"in b?t.jsx("span",{className:"tkfilg",children:b.g},b.g):t.jsxs("button",{type:"button","aria-pressed":b.k===d,onClick:()=>{x(b.k),h(!1)},children:[N(b.k),t.jsx("b",{children:w(b.k)})]},b.k))]})]}),t.jsx("div",{className:"win",children:f.length?t.jsxs("div",{className:"run",ref:j,children:[R(0),R(1)]}):t.jsx("div",{className:"run",style:{animation:"none"},children:t.jsx("span",{className:"tk quiet",children:r.liveQuiet(o)})})}),!!c&&t.jsxs("button",{type:"button",className:"tk-edito",title:g?"Show today's editorial":"Afficher Edito du jour",onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:edito"))}catch{}},children:["📖 ",g?"Today's editorial":"Edito du jour"]}),!!c&&t.jsx(Js,{isEn:g})]})}const Qs=t.jsxs("svg",{viewBox:"0 0 16 16",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"1.4","aria-hidden":"true",children:[t.jsx("rect",{x:"2",y:"3.5",width:"12",height:"10.5",rx:"1.5"}),t.jsx("path",{d:"M2 6.5h12M5.5 2v3M10.5 2v3"})]});function Js({isEn:e}){const[a,r]=u.useState(()=>Xr());u.useEffect(()=>{const o=i=>{var l;return r(!!((l=i.detail)!=null&&l.open))};return window.addEventListener(ja,o),()=>window.removeEventListener(ja,o)},[]);const n=a?e?"Hide the days":"Masquer les jours":e?"Show the days":"Voir les jours";return t.jsx("button",{type:"button",className:"dytog","aria-pressed":a,title:n,"aria-label":n,onClick:()=>yi(!a),children:Qs})}const qn="+33 6 83 10 72 86",za="alexandre@proplace.co",po=`tel:${qn.replace(/[^\d+]/g,"")}`;function Xs(){return null}class rt extends u.Component{constructor(){super(...arguments);Bn(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(r,n){console.error(`[atl2] bandeau « ${this.props.name} » en échec :`,r,n.componentStack)}render(){return this.state.dead?this.props.fallback??null:this.props.children}}const uo=[["Retenu","csKept"],["Analysé","csAnalysed"],["À trancher","csPending"],["Validé","csValidated"],["Écarté","csOut"]];function cr(e,a){if((wt(e)||"").startsWith("CALL")&&ze(e)===3)return[["Validé",a.csYes],["Écarté",a.csNo]];const n=ze(e)>=2;return uo.filter(([o])=>!(n&&o==="Retenu")).map(([o,i])=>[o,a[i]])}const pr=e=>e==="Retenu"?"ret":e==="Analysé"?"ana":e==="À trancher"?"tra":e==="Validé"?"val":e==="Écarté"?"eca":"off",Zs={ret:"#12A150",ana:"#3B82F6",tra:"#F59E0B",val:"#0E8A4F",eca:"#EF4444",off:"#94A3B8"};function el({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:o,doAnalyse:i,memoQueued:l}=V(),[s,c]=u.useState(""),[g,d]=u.useState(!1),[x,m]=u.useState(!1),h=u.useRef(null);if(u.useEffect(()=>{if(!x)return;const k=j=>{h.current&&!h.current.contains(j.target)&&(m(!1),d(!1))};return document.addEventListener("click",k,!0),()=>document.removeEventListener("click",k,!0)},[x]),!r.pipe||!n||r.lockActions||e.kind==="op")return null;const p=(e.ceoStatus||"").trim(),v=async k=>{if(s)return;if(k==="Analysé"&&!e.memoUrl){d(!0);return}c(k);const j=(cr(e,a).find(([N])=>N===k)||[k,k])[1],w=await o(e,k,{msg:a.csMoved(e.name,j)});c(""),w&&(d(!1),m(!1))},y=cr(e,a),f=k=>(y.find(([j])=>j===k)||[])[1]||k;return y.length===2?t.jsx("span",{className:"rstat rst2",onClick:k=>k.stopPropagation(),children:y.map(([k,j])=>t.jsx("button",{type:"button",className:"rsd "+(k==="Validé"?"yes":"no")+(s===k?" busy":""),disabled:!!s,onClick:()=>{v(k)},children:j},k))}):t.jsxs("span",{className:"rstat"+(x||g?" rs-open":""),ref:h,onClick:k=>k.stopPropagation(),children:[t.jsx("button",{type:"button","aria-expanded":x,disabled:!!s,title:a.csLabel,className:"rsel rs-"+pr(p),onClick:()=>{m(k=>!k),d(!1)},children:s?f(s)+"…":p?f(p):a.csNone}),x&&!g&&t.jsx("span",{className:"rsmenu",role:"listbox",children:y.map(([k,j])=>t.jsxs("button",{type:"button",role:"option","aria-selected":p===k,className:"rsopt"+(p===k?" on":"")+(s===k?" busy":""),disabled:!!s,onClick:()=>{if(k===p){m(!1);return}v(k)},children:[t.jsx("i",{className:"pt2",style:{background:Zs[pr(k)]}}),j]},k))}),g&&t.jsx("span",{className:"rstm",children:t.jsxs("span",{className:"rstask",children:[t.jsx("b",{children:a.csAnaNeedMemo}),t.jsx("button",{type:"button",className:"rsta pri",disabled:l.has(e.id),onClick:()=>{i(e),d(!1),m(!1)},children:l.has(e.id)?a.actMemoQueue:a.csAnaRun}),t.jsx("button",{type:"button",className:"rsta",onClick:()=>{(async()=>{c("Analysé");const k=await o(e,"Analysé");c(""),k&&(d(!1),m(!1))})()},children:a.csAnaAnyway})]})})]})}function tl({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:o}=V(),[i,l]=u.useState(""),[s,c]=u.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const g=(e.ceoStatus||"").trim(),d=(wt(e)||"").startsWith("CALL")&&ze(e)===3,x=ze(e)>=2,m=async p=>{if(i||p==="Analysé"&&!e.memoUrl&&!window.confirm(a.csAnaConfirm))return;l(p);const v=await o(e,p);l(""),v&&(c(!0),setTimeout(()=>c(!1),2200))},h=d?[["Validé",a.csYes],["Écarté",a.csNo]]:uo.filter(([p])=>!(x&&p==="Retenu")).map(([p,v])=>[p,a[v]]);return t.jsxs("div",{className:"csp",onClick:p=>p.stopPropagation(),children:[t.jsxs("div",{className:"csrow",children:[t.jsx("span",{className:"cslb",children:a.csLabel}),h.map(([p,v])=>t.jsx("button",{type:"button",className:"csb"+(g===p?" on":"")+(i===p?" busy":""),disabled:!!i,onClick:()=>{m(p)},children:v},p)),s&&t.jsx("span",{className:"csok",children:a.csSaved})]}),t.jsx(al,{o:e})]})}function al({o:e}){const{t:a,saveNote:r,flash:n}=V(),[o,i]=u.useState(e.ceoNote||""),[l,s]=u.useState(!1),[c,g]=u.useState(!1),d=o.trim()!==(e.ceoNote||"").trim(),x=async()=>{if(l||!d)return;s(!0);const m=await r(e,o.trim());s(!1),m&&(g(!0),setTimeout(()=>g(!1),2200),n(a.csNoteSaved))};return t.jsxs("div",{className:"csnote",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:a.csNotePh,value:o,disabled:l,onChange:m=>i(m.target.value),onKeyDown:m=>{m.key==="Enter"&&x()}}),t.jsx("button",{type:"button",disabled:l||!d,onClick:()=>{x()},children:c?a.csNoteSaved:a.csNoteOk})]})}function nl({placeholder:e,onDone:a}){const{t:r}=V(),[n,o]=u.useState("");return t.jsxs("div",{className:"csnote why",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:e,value:n,autoFocus:!0,onChange:i=>o(i.target.value),onKeyDown:i=>{i.key==="Enter"&&a(n.trim()),i.key==="Escape"&&a("")},onBlur:()=>{n.trim()||a("")}}),t.jsx("button",{type:"button",onClick:()=>a(n.trim()),children:r.whySend})]})}function rl({o:e}){var y;const{t:a,token:r,caps:n,canWrite:o,stageOf:i,setStage:l,flashErr:s}=V(),[c,g]=u.useState(!1);if(!n.pipe||!o||n.lockActions||ze(e)!==4)return null;const d=i(e),x=(d==null?void 0:d.stage)||"todo",m=async f=>{if(c||f===x)return;g(!0);const k=d;l(e,{stage:f,stamps:(d==null?void 0:d.stamps)||{}});const j=Math.max(Date.now(),ur+=1);ur=j;const w=await wi(r,{company:e.name||"",stage:f,cts:j,deal_id:e.airtableId,check_id:e.checkId});g(!1),!w.stale&&(w.ok||(l(e,k),s(a.actErr)))},h=(y=d==null?void 0:d.stamps)==null?void 0:y.sent,p=h?Math.floor((Date.now()-Date.parse(h))/864e5):0,v=x==="sent"&&h&&p>=4;return t.jsxs("div",{className:"stg",onClick:f=>f.stopPropagation(),children:[t.jsx("span",{className:"stglb",children:a.stgLabel}),a.stg.map(([f,k])=>t.jsx("button",{type:"button",className:"stgb"+(x===f?" on":""),disabled:c,onClick:()=>{m(f)},children:k},f)),v&&t.jsx("span",{className:"stgj4",children:a.j4Badge(p)})]})}let ur=0;const Wt=8,vt=360;function mr({text:e}){const a=e.split(/\*\*(.+?)\*\*/g);return t.jsx(t.Fragment,{children:a.map((r,n)=>n%2?t.jsx("b",{children:r},n):t.jsx("span",{children:r},n))})}function fr({text:e}){const a=(e||"").split(`
`).map(n=>n.trim()).filter(Boolean),r=a.filter(n=>n.startsWith("·"));return t.jsxs(t.Fragment,{children:[a.filter(n=>!n.startsWith("·")).map((n,o)=>t.jsx("p",{children:t.jsx(mr,{text:n})},"p"+o)),r.length>0&&t.jsx("ul",{className:"tour-ul",children:r.map((n,o)=>t.jsx("li",{children:t.jsx(mr,{text:n.replace(/^·\s*/,"")})},"l"+o))})]})}function ol({steps:e,onClose:a}){const{t:r,dispatch:n,counts:o,st:i}=V(),[l,s]=u.useState(0),[c,g]=u.useState(null),[d,x]=u.useState([]),m=u.useRef(!1),h=u.useRef({ptab:i.ptab,dens:i.dens,modal:i.modal}),p=u.useRef(!1);u.useEffect(()=>{const S=h.current;return()=>{p.current||(n({type:"ptab",tab:S.ptab}),n({type:"dens",dens:S.dens}),n({type:"modal",modal:S.modal}))}},[]),u.useEffect(()=>{m.current||(m.current=!0,x(e.filter(S=>!!document.querySelector(S.need||S.sel))))},[e]);const v=d[l],y=l>=d.length;u.useEffect(()=>{if(v&&(v.ptab!==void 0&&i.ptab!==v.ptab&&n({type:"ptab",tab:v.ptab}),v.dens&&i.dens!==v.dens&&n({type:"dens",dens:v.dens}),i.modal!==(v.modal??null)&&n({type:"modal",modal:v.modal??null}),v.click)){const S=v.click,q=window.setTimeout(()=>{const A=document.querySelector(S);A&&A.getAttribute("aria-selected")!=="true"&&A.click()},60);return()=>window.clearTimeout(q)}},[l,v]);const f=u.useRef(-1),k=u.useCallback(()=>{if(!v){g(null);return}const S=F=>{if(!F)return null;for(const D of document.querySelectorAll(F)){const P=D.getBoundingClientRect();if(P.width>1&&P.height>1)return D}return null},q=S(v.sel)||S(v.need);if(!q){g(null);return}f.current!==l&&(f.current=l,q.scrollIntoView({block:"nearest",behavior:"smooth"}));const A=q.getBoundingClientRect();g(F=>F&&Math.abs(F.top-A.top)<1&&Math.abs(F.left-A.left)<1&&Math.abs(F.width-A.width)<1&&Math.abs(F.height-A.height)<1?F:A)},[v,l]);u.useLayoutEffect(()=>{k();const S=[90,300,700,1300].map(F=>window.setTimeout(k,F)),q=window.setInterval(k,400),A=()=>k();return window.addEventListener("scroll",A,!0),window.addEventListener("resize",A),()=>{S.forEach(F=>window.clearTimeout(F)),window.clearInterval(q),window.removeEventListener("scroll",A,!0),window.removeEventListener("resize",A)}},[k]);const j=u.useRef(a);if(j.current=a,u.useEffect(()=>{const S=q=>{q.key==="Escape"?(q.preventDefault(),q.stopPropagation(),j.current()):q.key==="ArrowRight"?s(A=>A+1):q.key==="ArrowLeft"&&s(A=>Math.max(0,A-1))};return document.addEventListener("keydown",S,!0),()=>document.removeEventListener("keydown",S,!0)},[]),!d.length)return null;let w=null;const N=S=>()=>{p.current=!0,n({type:"modal",modal:null}),S()};if(y){const S=o[3]||0;S>0?w={title:S===1?r.ahaATitle1:r.ahaATitleN(S),body:r.ahaABody,btn:r.ahaABtn,go:N(()=>{n({type:"ptab",tab:3}),a()})}:(o[1]||0)>0?w={title:r.ahaRetTitle(o[1]||0),body:r.ahaRetBody,btn:r.ahaRetBtn,go:N(()=>{n({type:"ptab",tab:1}),a()})}:(o[0]||0)>0?w={title:r.ahaEvalTitle(o[0]||0),body:r.ahaEvalBody,btn:r.ahaEvalBtn,go:N(()=>{n({type:"ptab",tab:0}),a()})}:w={title:r.ahaCTitle,body:r.ahaCBody,btn:r.ahaCBtn,go:N(()=>{n({type:"modal",modal:"crit"}),a()})}}let z={left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:vt};if(!y&&c){const S=c.bottom+14,q=window.innerHeight-S;let A=q>190?S:Math.max(12,c.top-200),F=Math.min(Math.max(12,c.left+c.width/2-vt/2),window.innerWidth-vt-12);q<=190&&c.top<212&&(window.innerWidth-c.right>=vt+40?F=Math.min(c.right+26,window.innerWidth-vt-12):c.left>=vt+40&&(F=Math.max(12,c.left-vt-26)),A=Math.max(12,c.top-Wt)),z={left:F,top:A,width:vt}}return _t.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"tour",role:"dialog","aria-modal":"true",children:[!y&&c&&t.jsx("div",{className:"tour-hole",style:{left:c.left-Wt,top:c.top-Wt,width:c.width+Wt*2,height:c.height+Wt*2}}),(y||!c)&&t.jsx("div",{className:"tour-veil"}),t.jsxs("div",{className:"tour-card"+(y?" fin":""),style:z,children:[y&&w?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:w.title}),t.jsx(fr,{text:w.body}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",onClick:()=>s(d.length-1),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:w.go,children:w.btn})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"tour-n",children:[r.tourStep(l+1,d.length),t.jsx("span",{className:"tour-bar",children:t.jsx("i",{style:{width:(l+1)/d.length*100+"%"}})})]}),t.jsx("h3",{children:v==null?void 0:v.title}),t.jsx(fr,{text:(v==null?void 0:v.body)||""}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",disabled:l===0,onClick:()=>s(S=>Math.max(0,S-1)),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:()=>s(S=>S+1),children:l===d.length-1?r.tourDone:r.tourNext})]})]}),t.jsx("button",{type:"button",className:"tour-x","aria-label":r.tourClose,title:r.tourClose,onClick:a,children:"×"})]})]})}),document.body)}function mo(e){let a="";for(const r of e){const n=(r.date||"").slice(0,10);n&&n>a&&(a=n)}return a}function fo(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(e||"");return r?a==="en"?`${r[2]}/${r[3]}`:`${r[3]}/${r[2]}`:""}function il(){var q,A;const{dossiers:e,scopedAll:a,pipe:r,mode:n,t:o,st:i,lang:l,data:s,dispatch:c}=V(),g=r?a:e,d=u.useMemo(()=>g.filter(F=>ht(F.date)===0&&F.kind==="target"),[g]),x=u.useMemo(()=>r?a.filter(F=>F.kind==="target"&&ze(F)===0).slice().sort((F,D)=>(D.date||"").localeCompare(F.date||"")):[],[a,r]),m=u.useMemo(()=>d.filter(F=>r?ze(F)===0:!Ie(F)),[d,r]),h=r?x:m,p=r?a.length-x.length:d.length-m.length,v=r?a.length:d.length,y=v?Math.min(100,p/v*100):100,f=u.useMemo(()=>mo(g),[g]),k=!!f&&ht(f)>0,j=u.useMemo(()=>k?g.filter(F=>(F.date||"").slice(0,10)===f):[],[g,f,k]),w=typeof((q=s.stats)==null?void 0:q.kept_today)=="number"?s.stats.kept_today:null,N=typeof((A=s.stats)==null?void 0:A.screened_today)=="number"?s.stats.screened_today:d.length;let z;k?z=o.morningLast(j.length,x.length,fo(f,l)):r?z=o.morningThesis(N,x.length,w):d.length?p===0?z=o.goalSourced(d.length):p>=d.length?z=o.goalCleared:z=o.goalDone(p,d.length):z=o.goalSourced(0);const S=()=>{if(!r){c({type:"pile",on:!0});return}c({type:"ptab",tab:0}),n==="client"&&x.length&&c({type:"chainStart",queue:x.map(F=>F.id)})};return t.jsxs("div",{className:"goal",children:[t.jsx("span",{className:"gtxt",title:r?o.morningEnginesTitle:void 0,dangerouslySetInnerHTML:{__html:z}}),t.jsx("div",{className:"pbar",children:t.jsx("i",{style:{width:y+"%"}})}),h.length>0&&t.jsx("button",{type:"button",className:"pilebtn",onClick:S,children:r?o.morningEval(h.length):i.pileMode?o.goalContinue(h.length):o.goalTreat}),t.jsx("span",{className:"gspace"})]})}function sl(){var $,X;const{t:e,lang:a,st:r,dispatch:n,token:o,fund:i,data:l,dossiers:s,mode:c,doSync:g,startTour:d,flash:x,flashErr:m}=V(),[h,p]=u.useState(null),[v,y]=u.useState(!0),[f,k]=u.useState([]),j=c==="client";u.useEffect(()=>{if(!o||!i)return;let I=!0;return y(!0),(async()=>{const[O,Q]=await Promise.all([Sn(i),Zr(o)]);I&&(O&&p(O),y(!1),k(Q))})(),()=>{I=!1}},[o,i]);const[w,N]=u.useState(!1),z=()=>{!j||w||!i||(N(!0),ki(i).then(I=>{N(!1),I?x(e.identRepubDone):m(e.actErr)}))},S=(h==null?void 0:h.per_day)??null,q=(($=h==null?void 0:h.pool_order)==null?void 0:$.length)??0,A=f.filter(I=>I.status==="running").length,F=u.useMemo(()=>s.filter(I=>I.kind==="target"&&Ie(I)).length,[s]),D=l.marketEstimate,P=typeof((X=l.stats)==null?void 0:X.screened)=="number"?l.stats.screened:F,L=D&&D>0?Math.min(100,Math.round(P/D*100)):null,R=I=>I.toLocaleString(a==="en"?"en-US":"fr-FR"),b=(i||"P").split(/\s+/).map(I=>I[0]).join("").slice(0,2).toUpperCase(),T=(()=>{const I=Date.parse(l.generatedAt||"");if(Number.isNaN(I))return"";const O=new Date(I),Q=Y=>String(Y).padStart(2,"0");return`${Q(O.getDate())}/${Q(O.getMonth()+1)} à ${Q(O.getHours())}:${Q(O.getMinutes())}`})();return t.jsxs("div",{className:"ident",children:[t.jsxs("div",{className:"idtop",children:[t.jsxs("span",{className:"brand",children:[t.jsx("b",{children:i?b:t.jsx("span",{className:"skt sk-ini"})}),t.jsx("i",{children:i||t.jsx("span",{className:"skt sk-nm"})})]}),t.jsx("h1",{children:i?e.identTitle(i):t.jsx("span",{className:"skt sk-h1","aria-label":e.loadingV2})}),t.jsx("span",{className:"idsp"}),T?t.jsx("span",{className:"idupd",children:e.identUpdatedAt(T)}):t.jsx("span",{className:"skt sk-upd"}),t.jsx("button",{type:"button",className:"ic",title:e.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),t.jsx("button",{type:"button",className:"ic",title:e.tourPlayTitle,onClick:d,children:"▶"})]}),t.jsxs("div",{className:"idmain",children:[L===null&&P>0&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsx("span",{className:"ev",children:t.jsx("b",{children:R(P)})})]}),L!==null&&D&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsxs("span",{className:"ev",children:[t.jsx("span",{className:"bar",children:t.jsx("i",{style:{width:L+"%"}})}),t.jsxs("b",{children:[L," %"]})]}),t.jsx("span",{className:"edv"}),t.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:e.identCoverageOf(P,D)}})]}),t.jsxs("span",{className:"engine",title:e.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[t.jsx("span",{className:"el",children:e.identEngine}),S!==null&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"ev",children:[t.jsx("b",{className:"q",children:S})," ",e.identPerDay]}),t.jsx("span",{className:"edv"})]}),S===0&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"epause",title:e.identPauseTitle,children:e.identPause}),t.jsx("span",{className:"edv"})]}),A>0&&t.jsxs("span",{className:"ev",children:["⏳ ",A]}),t.jsx("span",{className:"ego",children:v?e.identPendingWait:e.identPending(q)}),t.jsx("button",{type:"button",className:"ebell",title:e.memoAlertBtn,onClick:I=>{I.stopPropagation(),n({type:"modal",modal:"memoalert"})},children:"🔔"})]}),t.jsx("span",{className:"idsp"}),t.jsxs("span",{className:"icgrp",children:[t.jsx("button",{type:"button",className:"ic","data-tour":"export",title:e.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),t.jsx("button",{type:"button",className:"ic","data-tour":"plug",title:e.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),t.jsx("button",{type:"button",className:"ic","data-tour":"alert",title:e.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),t.jsx("button",{type:"button",className:"ic",title:e.identRepub,disabled:!j||w,onClick:z,children:w?"⏳":"📰"}),t.jsx("button",{type:"button",className:"ic",title:e.identSync,disabled:!j,onClick:g,children:"🔄"})]}),t.jsxs("span",{className:"isrch",children:["🔍",t.jsx("input",{placeholder:e.identSearch,value:r.filters.search,onChange:I=>n({type:"filters",patch:{search:I.target.value}})})]})]})]})}class At{constructor(){this._partials=new Float64Array(32),this._n=0}add(a){const r=this._partials;let n=0;for(let o=0;o<this._n&&o<32;o++){const i=r[o],l=a+i,s=Math.abs(a)<Math.abs(i)?a-(l-i):i-(l-a);s&&(r[n++]=s),a=l}return r[n]=a,this._n=n+1,this}valueOf(){const a=this._partials;let r=this._n,n,o,i,l=0;if(r>0){for(l=a[--r];r>0&&(n=l,o=a[--r],l=n+o,i=o-(l-n),!i););r>0&&(i<0&&a[r-1]<0||i>0&&a[r-1]>0)&&(o=i*2,n=l+o,o==n-l&&(l=n))}return l}}function*ll(e){for(const a of e)yield*a}function ho(e){return Array.from(ll(e))}var we=1e-6,ue=Math.PI,et=ue/2,hr=ue/4,at=ue*2,mt=180/ue,Ye=ue/180,Ce=Math.abs,dl=Math.atan,ta=Math.atan2,qe=Math.cos,Le=Math.sin,cl=Math.sign||function(e){return e>0?1:e<0?-1:0},qt=Math.sqrt;function pl(e){return e>1?0:e<-1?ue:Math.acos(e)}function aa(e){return e>1?et:e<-1?-et:Math.asin(e)}function tt(){}function Aa(e,a){e&&gr.hasOwnProperty(e.type)&&gr[e.type](e,a)}var xr={Feature:function(e,a){Aa(e.geometry,a)},FeatureCollection:function(e,a){for(var r=e.features,n=-1,o=r.length;++n<o;)Aa(r[n].geometry,a)}},gr={Sphere:function(e,a){a.sphere()},Point:function(e,a){e=e.coordinates,a.point(e[0],e[1],e[2])},MultiPoint:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)e=r[n],a.point(e[0],e[1],e[2])},LineString:function(e,a){dn(e.coordinates,a,0)},MultiLineString:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)dn(r[n],a,0)},Polygon:function(e,a){br(e.coordinates,a)},MultiPolygon:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)br(r[n],a)},GeometryCollection:function(e,a){for(var r=e.geometries,n=-1,o=r.length;++n<o;)Aa(r[n],a)}};function dn(e,a,r){var n=-1,o=e.length-r,i;for(a.lineStart();++n<o;)i=e[n],a.point(i[0],i[1],i[2]);a.lineEnd()}function br(e,a){var r=-1,n=e.length;for(a.polygonStart();++r<n;)dn(e[r],a,1);a.polygonEnd()}function Rt(e,a){e&&xr.hasOwnProperty(e.type)?xr[e.type](e,a):Aa(e,a)}function cn(e){return[ta(e[1],e[0]),aa(e[2])]}function It(e){var a=e[0],r=e[1],n=qe(r);return[n*qe(a),n*Le(a),Le(r)]}function ua(e,a){return e[0]*a[0]+e[1]*a[1]+e[2]*a[2]}function Ta(e,a){return[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]]}function Ya(e,a){e[0]+=a[0],e[1]+=a[1],e[2]+=a[2]}function ma(e,a){return[e[0]*a,e[1]*a,e[2]*a]}function pn(e){var a=qt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=a,e[1]/=a,e[2]/=a}function un(e,a){function r(n,o){return n=e(n,o),a(n[0],n[1])}return e.invert&&a.invert&&(r.invert=function(n,o){return n=a.invert(n,o),n&&e.invert(n[0],n[1])}),r}function mn(e,a){return Ce(e)>ue&&(e-=Math.round(e/at)*at),[e,a]}mn.invert=mn;function ul(e,a,r){return(e%=at)?a||r?un(yr(e),wr(a,r)):yr(e):a||r?wr(a,r):mn}function vr(e){return function(a,r){return a+=e,Ce(a)>ue&&(a-=Math.round(a/at)*at),[a,r]}}function yr(e){var a=vr(e);return a.invert=vr(-e),a}function wr(e,a){var r=qe(e),n=Le(e),o=qe(a),i=Le(a);function l(s,c){var g=qe(c),d=qe(s)*g,x=Le(s)*g,m=Le(c),h=m*r+d*n;return[ta(x*o-h*i,d*r-m*n),aa(h*o+x*i)]}return l.invert=function(s,c){var g=qe(c),d=qe(s)*g,x=Le(s)*g,m=Le(c),h=m*o-x*i;return[ta(x*o+m*i,d*r+h*n),aa(h*r-d*n)]},l}function ml(e,a,r,n,o,i){if(r){var l=qe(a),s=Le(a),c=n*r;o==null?(o=a+n*at,i=a-c/2):(o=kr(l,o),i=kr(l,i),(n>0?o<i:o>i)&&(o+=n*at));for(var g,d=o;n>0?d>i:d<i;d-=c)g=cn([l,-s*qe(d),-s*Le(d)]),e.point(g[0],g[1])}}function kr(e,a){a=It(a),a[0]-=e,pn(a);var r=pl(-a[1]);return((-a[2]<0?-r:r)+at-we)%at}function xo(){var e=[],a;return{point:function(r,n,o){a.push([r,n,o])},lineStart:function(){e.push(a=[])},lineEnd:tt,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],a=null,r}}}function wa(e,a){return Ce(e[0]-a[0])<we&&Ce(e[1]-a[1])<we}function fa(e,a,r,n){this.x=e,this.z=a,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function go(e,a,r,n,o){var i=[],l=[],s,c;if(e.forEach(function(p){if(!((v=p.length-1)<=0)){var v,y=p[0],f=p[v],k;if(wa(y,f)){if(!y[2]&&!f[2]){for(o.lineStart(),s=0;s<v;++s)o.point((y=p[s])[0],y[1]);o.lineEnd();return}f[0]+=2*we}i.push(k=new fa(y,p,null,!0)),l.push(k.o=new fa(y,null,k,!1)),i.push(k=new fa(f,p,null,!1)),l.push(k.o=new fa(f,null,k,!0))}}),!!i.length){for(l.sort(a),jr(i),jr(l),s=0,c=l.length;s<c;++s)l[s].e=r=!r;for(var g=i[0],d,x;;){for(var m=g,h=!0;m.v;)if((m=m.n)===g)return;d=m.z,o.lineStart();do{if(m.v=m.o.v=!0,m.e){if(h)for(s=0,c=d.length;s<c;++s)o.point((x=d[s])[0],x[1]);else n(m.x,m.n.x,1,o);m=m.n}else{if(h)for(d=m.p.z,s=d.length-1;s>=0;--s)o.point((x=d[s])[0],x[1]);else n(m.x,m.p.x,-1,o);m=m.p}m=m.o,d=m.z,h=!h}while(!m.v);o.lineEnd()}}}function jr(e){if(a=e.length){for(var a,r=0,n=e[0],o;++r<a;)n.n=o=e[r],o.p=n,n=o;n.n=o=e[0],o.p=n}}function Ka(e){return Ce(e[0])<=ue?e[0]:cl(e[0])*((Ce(e[0])+ue)%at-ue)}function fl(e,a){var r=Ka(a),n=a[1],o=Le(n),i=[Le(r),-qe(r),0],l=0,s=0,c=new At;o===1?n=et+we:o===-1&&(n=-et-we);for(var g=0,d=e.length;g<d;++g)if(m=(x=e[g]).length)for(var x,m,h=x[m-1],p=Ka(h),v=h[1]/2+hr,y=Le(v),f=qe(v),k=0;k<m;++k,p=w,y=z,f=S,h=j){var j=x[k],w=Ka(j),N=j[1]/2+hr,z=Le(N),S=qe(N),q=w-p,A=q>=0?1:-1,F=A*q,D=F>ue,P=y*z;if(c.add(ta(P*A*Le(F),f*S+P*qe(F))),l+=D?q+A*at:q,D^p>=r^w>=r){var L=Ta(It(h),It(j));pn(L);var R=Ta(i,L);pn(R);var b=(D^q>=0?-1:1)*aa(R[2]);(n>b||n===b&&(L[0]||L[1]))&&(s+=D^q>=0?1:-1)}}return(l<-we||l<we&&c<-1e-12)^s&1}function bo(e,a,r,n){return function(o){var i=a(o),l=xo(),s=a(l),c=!1,g,d,x,m={point:h,lineStart:v,lineEnd:y,polygonStart:function(){m.point=f,m.lineStart=k,m.lineEnd=j,d=[],g=[]},polygonEnd:function(){m.point=h,m.lineStart=v,m.lineEnd=y,d=ho(d);var w=fl(g,n);d.length?(c||(o.polygonStart(),c=!0),go(d,xl,w,r,o)):w&&(c||(o.polygonStart(),c=!0),o.lineStart(),r(null,null,1,o),o.lineEnd()),c&&(o.polygonEnd(),c=!1),d=g=null},sphere:function(){o.polygonStart(),o.lineStart(),r(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function h(w,N){e(w,N)&&o.point(w,N)}function p(w,N){i.point(w,N)}function v(){m.point=p,i.lineStart()}function y(){m.point=h,i.lineEnd()}function f(w,N){x.push([w,N]),s.point(w,N)}function k(){s.lineStart(),x=[]}function j(){f(x[0][0],x[0][1]),s.lineEnd();var w=s.clean(),N=l.result(),z,S=N.length,q,A,F;if(x.pop(),g.push(x),x=null,!!S){if(w&1){if(A=N[0],(q=A.length-1)>0){for(c||(o.polygonStart(),c=!0),o.lineStart(),z=0;z<q;++z)o.point((F=A[z])[0],F[1]);o.lineEnd()}return}S>1&&w&2&&N.push(N.pop().concat(N.shift())),d.push(N.filter(hl))}}return m}}function hl(e){return e.length>1}function xl(e,a){return((e=e.x)[0]<0?e[1]-et-we:et-e[1])-((a=a.x)[0]<0?a[1]-et-we:et-a[1])}const Nr=bo(function(){return!0},gl,vl,[-ue,-et]);function gl(e){var a=NaN,r=NaN,n=NaN,o;return{lineStart:function(){e.lineStart(),o=1},point:function(i,l){var s=i>0?ue:-ue,c=Ce(i-a);Ce(c-ue)<we?(e.point(a,r=(r+l)/2>0?et:-et),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(s,r),e.point(i,r),o=0):n!==s&&c>=ue&&(Ce(a-n)<we&&(a-=n*we),Ce(i-s)<we&&(i-=s*we),r=bl(a,r,i,l),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(s,r),o=0),e.point(a=i,r=l),n=s},lineEnd:function(){e.lineEnd(),a=r=NaN},clean:function(){return 2-o}}}function bl(e,a,r,n){var o,i,l=Le(e-r);return Ce(l)>we?dl((Le(a)*(i=qe(n))*Le(r)-Le(n)*(o=qe(a))*Le(e))/(o*i*l)):(a+n)/2}function vl(e,a,r,n){var o;if(e==null)o=r*et,n.point(-ue,o),n.point(0,o),n.point(ue,o),n.point(ue,0),n.point(ue,-o),n.point(0,-o),n.point(-ue,-o),n.point(-ue,0),n.point(-ue,o);else if(Ce(e[0]-a[0])>we){var i=e[0]<a[0]?ue:-ue;o=r*i/2,n.point(-i,o),n.point(0,o),n.point(i,o)}else n.point(a[0],a[1])}function yl(e){var a=qe(e),r=2*Ye,n=a>0,o=Ce(a)>we;function i(d,x,m,h){ml(h,e,r,m,d,x)}function l(d,x){return qe(d)*qe(x)>a}function s(d){var x,m,h,p,v;return{lineStart:function(){p=h=!1,v=1},point:function(y,f){var k=[y,f],j,w=l(y,f),N=n?w?0:g(y,f):w?g(y+(y<0?ue:-ue),f):0;if(!x&&(p=h=w)&&d.lineStart(),w!==h&&(j=c(x,k),(!j||wa(x,j)||wa(k,j))&&(k[2]=1)),w!==h)v=0,w?(d.lineStart(),j=c(k,x),d.point(j[0],j[1])):(j=c(x,k),d.point(j[0],j[1],2),d.lineEnd()),x=j;else if(o&&x&&n^w){var z;!(N&m)&&(z=c(k,x,!0))&&(v=0,n?(d.lineStart(),d.point(z[0][0],z[0][1]),d.point(z[1][0],z[1][1]),d.lineEnd()):(d.point(z[1][0],z[1][1]),d.lineEnd(),d.lineStart(),d.point(z[0][0],z[0][1],3)))}w&&(!x||!wa(x,k))&&d.point(k[0],k[1]),x=k,h=w,m=N},lineEnd:function(){h&&d.lineEnd(),x=null},clean:function(){return v|(p&&h)<<1}}}function c(d,x,m){var h=It(d),p=It(x),v=[1,0,0],y=Ta(h,p),f=ua(y,y),k=y[0],j=f-k*k;if(!j)return!m&&d;var w=a*f/j,N=-a*k/j,z=Ta(v,y),S=ma(v,w),q=ma(y,N);Ya(S,q);var A=z,F=ua(S,A),D=ua(A,A),P=F*F-D*(ua(S,S)-1);if(!(P<0)){var L=qt(P),R=ma(A,(-F-L)/D);if(Ya(R,S),R=cn(R),!m)return R;var b=d[0],T=x[0],$=d[1],X=x[1],I;T<b&&(I=b,b=T,T=I);var O=T-b,Q=Ce(O-ue)<we,Y=Q||O<we;if(!Q&&X<$&&(I=$,$=X,X=I),Y?Q?$+X>0^R[1]<(Ce(R[0]-b)<we?$:X):$<=R[1]&&R[1]<=X:O>ue^(b<=R[0]&&R[0]<=T)){var K=ma(A,(-F+L)/D);return Ya(K,S),[R,cn(K)]}}}function g(d,x){var m=n?e:ue-e,h=0;return d<-m?h|=1:d>m&&(h|=2),x<-m?h|=4:x>m&&(h|=8),h}return bo(l,s,i,n?[0,-e]:[-ue,e-ue])}function wl(e,a,r,n,o,i){var l=e[0],s=e[1],c=a[0],g=a[1],d=0,x=1,m=c-l,h=g-s,p;if(p=r-l,!(!m&&p>0)){if(p/=m,m<0){if(p<d)return;p<x&&(x=p)}else if(m>0){if(p>x)return;p>d&&(d=p)}if(p=o-l,!(!m&&p<0)){if(p/=m,m<0){if(p>x)return;p>d&&(d=p)}else if(m>0){if(p<d)return;p<x&&(x=p)}if(p=n-s,!(!h&&p>0)){if(p/=h,h<0){if(p<d)return;p<x&&(x=p)}else if(h>0){if(p>x)return;p>d&&(d=p)}if(p=i-s,!(!h&&p<0)){if(p/=h,h<0){if(p>x)return;p>d&&(d=p)}else if(h>0){if(p<d)return;p<x&&(x=p)}return d>0&&(e[0]=l+d*m,e[1]=s+d*h),x<1&&(a[0]=l+x*m,a[1]=s+x*h),!0}}}}}var Gt=1e9,ha=-Gt;function kl(e,a,r,n){function o(g,d){return e<=g&&g<=r&&a<=d&&d<=n}function i(g,d,x,m){var h=0,p=0;if(g==null||(h=l(g,x))!==(p=l(d,x))||c(g,d)<0^x>0)do m.point(h===0||h===3?e:r,h>1?n:a);while((h=(h+x+4)%4)!==p);else m.point(d[0],d[1])}function l(g,d){return Ce(g[0]-e)<we?d>0?0:3:Ce(g[0]-r)<we?d>0?2:1:Ce(g[1]-a)<we?d>0?1:0:d>0?3:2}function s(g,d){return c(g.x,d.x)}function c(g,d){var x=l(g,1),m=l(d,1);return x!==m?x-m:x===0?d[1]-g[1]:x===1?g[0]-d[0]:x===2?g[1]-d[1]:d[0]-g[0]}return function(g){var d=g,x=xo(),m,h,p,v,y,f,k,j,w,N,z,S={point:q,lineStart:P,lineEnd:L,polygonStart:F,polygonEnd:D};function q(b,T){o(b,T)&&d.point(b,T)}function A(){for(var b=0,T=0,$=h.length;T<$;++T)for(var X=h[T],I=1,O=X.length,Q=X[0],Y,K,J=Q[0],ge=Q[1];I<O;++I)Y=J,K=ge,Q=X[I],J=Q[0],ge=Q[1],K<=n?ge>n&&(J-Y)*(n-K)>(ge-K)*(e-Y)&&++b:ge<=n&&(J-Y)*(n-K)<(ge-K)*(e-Y)&&--b;return b}function F(){d=x,m=[],h=[],z=!0}function D(){var b=A(),T=z&&b,$=(m=ho(m)).length;(T||$)&&(g.polygonStart(),T&&(g.lineStart(),i(null,null,1,g),g.lineEnd()),$&&go(m,s,b,i,g),g.polygonEnd()),d=g,m=h=p=null}function P(){S.point=R,h&&h.push(p=[]),N=!0,w=!1,k=j=NaN}function L(){m&&(R(v,y),f&&w&&x.rejoin(),m.push(x.result())),S.point=q,w&&d.lineEnd()}function R(b,T){var $=o(b,T);if(h&&p.push([b,T]),N)v=b,y=T,f=$,N=!1,$&&(d.lineStart(),d.point(b,T));else if($&&w)d.point(b,T);else{var X=[k=Math.max(ha,Math.min(Gt,k)),j=Math.max(ha,Math.min(Gt,j))],I=[b=Math.max(ha,Math.min(Gt,b)),T=Math.max(ha,Math.min(Gt,T))];wl(X,I,e,a,r,n)?(w||(d.lineStart(),d.point(X[0],X[1])),d.point(I[0],I[1]),$||d.lineEnd(),z=!1):$&&(d.lineStart(),d.point(b,T),z=!1)}k=b,j=T,w=$}return S}}const fn=e=>e;var Qa=new At,hn=new At,vo,yo,xn,gn,ft={point:tt,lineStart:tt,lineEnd:tt,polygonStart:function(){ft.lineStart=jl,ft.lineEnd=El},polygonEnd:function(){ft.lineStart=ft.lineEnd=ft.point=tt,Qa.add(Ce(hn)),hn=new At},result:function(){var e=Qa/2;return Qa=new At,e}};function jl(){ft.point=Nl}function Nl(e,a){ft.point=wo,vo=xn=e,yo=gn=a}function wo(e,a){hn.add(gn*e-xn*a),xn=e,gn=a}function El(){wo(vo,yo)}var Pt=1/0,qa=Pt,na=-Pt,La=na,Fa={point:Sl,lineStart:tt,lineEnd:tt,polygonStart:tt,polygonEnd:tt,result:function(){var e=[[Pt,qa],[na,La]];return na=La=-(qa=Pt=1/0),e}};function Sl(e,a){e<Pt&&(Pt=e),e>na&&(na=e),a<qa&&(qa=a),a>La&&(La=a)}var bn=0,vn=0,Yt=0,Ra=0,Ma=0,Mt=0,yn=0,wn=0,Kt=0,ko,jo,ct,pt,Ze={point:Tt,lineStart:Er,lineEnd:Sr,polygonStart:function(){Ze.lineStart=Al,Ze.lineEnd=Tl},polygonEnd:function(){Ze.point=Tt,Ze.lineStart=Er,Ze.lineEnd=Sr},result:function(){var e=Kt?[yn/Kt,wn/Kt]:Mt?[Ra/Mt,Ma/Mt]:Yt?[bn/Yt,vn/Yt]:[NaN,NaN];return bn=vn=Yt=Ra=Ma=Mt=yn=wn=Kt=0,e}};function Tt(e,a){bn+=e,vn+=a,++Yt}function Er(){Ze.point=Cl}function Cl(e,a){Ze.point=zl,Tt(ct=e,pt=a)}function zl(e,a){var r=e-ct,n=a-pt,o=qt(r*r+n*n);Ra+=o*(ct+e)/2,Ma+=o*(pt+a)/2,Mt+=o,Tt(ct=e,pt=a)}function Sr(){Ze.point=Tt}function Al(){Ze.point=ql}function Tl(){No(ko,jo)}function ql(e,a){Ze.point=No,Tt(ko=ct=e,jo=pt=a)}function No(e,a){var r=e-ct,n=a-pt,o=qt(r*r+n*n);Ra+=o*(ct+e)/2,Ma+=o*(pt+a)/2,Mt+=o,o=pt*e-ct*a,yn+=o*(ct+e),wn+=o*(pt+a),Kt+=o*3,Tt(ct=e,pt=a)}function Eo(e){this._context=e}Eo.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,a){switch(this._point){case 0:{this._context.moveTo(e,a),this._point=1;break}case 1:{this._context.lineTo(e,a);break}default:{this._context.moveTo(e+this._radius,a),this._context.arc(e,a,this._radius,0,at);break}}},result:tt};var kn=new At,Ja,So,Co,Qt,Jt,ra={point:tt,lineStart:function(){ra.point=Ll},lineEnd:function(){Ja&&zo(So,Co),ra.point=tt},polygonStart:function(){Ja=!0},polygonEnd:function(){Ja=null},result:function(){var e=+kn;return kn=new At,e}};function Ll(e,a){ra.point=zo,So=Qt=e,Co=Jt=a}function zo(e,a){Qt-=e,Jt-=a,kn.add(qt(Qt*Qt+Jt*Jt)),Qt=e,Jt=a}let Cr,Oa,zr,Ar;class Tr{constructor(a){this._append=a==null?Ao:Fl(a),this._radius=4.5,this._=""}pointRadius(a){return this._radius=+a,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(a,r){switch(this._point){case 0:{this._append`M${a},${r}`,this._point=1;break}case 1:{this._append`L${a},${r}`;break}default:{if(this._append`M${a},${r}`,this._radius!==zr||this._append!==Oa){const n=this._radius,o=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,zr=n,Oa=this._append,Ar=this._,this._=o}this._+=Ar;break}}}result(){const a=this._;return this._="",a.length?a:null}}function Ao(e){let a=1;this._+=e[0];for(const r=e.length;a<r;++a)this._+=arguments[a]+e[a]}function Fl(e){const a=Math.floor(e);if(!(a>=0))throw new RangeError(`invalid digits: ${e}`);if(a>15)return Ao;if(a!==Cr){const r=10**a;Cr=a,Oa=function(o){let i=1;this._+=o[0];for(const l=o.length;i<l;++i)this._+=Math.round(arguments[i]*r)/r+o[i]}}return Oa}function Rl(e,a){let r=3,n=4.5,o,i;function l(s){return s&&(typeof n=="function"&&i.pointRadius(+n.apply(this,arguments)),Rt(s,o(i))),i.result()}return l.area=function(s){return Rt(s,o(ft)),ft.result()},l.measure=function(s){return Rt(s,o(ra)),ra.result()},l.bounds=function(s){return Rt(s,o(Fa)),Fa.result()},l.centroid=function(s){return Rt(s,o(Ze)),Ze.result()},l.projection=function(s){return arguments.length?(o=s==null?(e=null,fn):(e=s).stream,l):e},l.context=function(s){return arguments.length?(i=s==null?(a=null,new Tr(r)):new Eo(a=s),typeof n!="function"&&i.pointRadius(n),l):a},l.pointRadius=function(s){return arguments.length?(n=typeof s=="function"?s:(i.pointRadius(+s),+s),l):n},l.digits=function(s){if(!arguments.length)return r;if(s==null)r=null;else{const c=Math.floor(s);if(!(c>=0))throw new RangeError(`invalid digits: ${s}`);r=c}return a===null&&(i=new Tr(r)),l},l.projection(e).digits(r).context(a)}function Ln(e){return function(a){var r=new jn;for(var n in e)r[n]=e[n];return r.stream=a,r}}function jn(){}jn.prototype={constructor:jn,point:function(e,a){this.stream.point(e,a)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Fn(e,a,r){var n=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),n!=null&&e.clipExtent(null),Rt(r,e.stream(Fa)),a(Fa.result()),n!=null&&e.clipExtent(n),e}function To(e,a,r){return Fn(e,function(n){var o=a[1][0]-a[0][0],i=a[1][1]-a[0][1],l=Math.min(o/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),s=+a[0][0]+(o-l*(n[1][0]+n[0][0]))/2,c=+a[0][1]+(i-l*(n[1][1]+n[0][1]))/2;e.scale(150*l).translate([s,c])},r)}function Ml(e,a,r){return To(e,[[0,0],a],r)}function Ol(e,a,r){return Fn(e,function(n){var o=+a,i=o/(n[1][0]-n[0][0]),l=(o-i*(n[1][0]+n[0][0]))/2,s=-i*n[0][1];e.scale(150*i).translate([l,s])},r)}function Dl(e,a,r){return Fn(e,function(n){var o=+a,i=o/(n[1][1]-n[0][1]),l=-i*n[0][0],s=(o-i*(n[1][1]+n[0][1]))/2;e.scale(150*i).translate([l,s])},r)}var qr=16,Il=qe(30*Ye);function Lr(e,a){return+a?Bl(e,a):Pl(e)}function Pl(e){return Ln({point:function(a,r){a=e(a,r),this.stream.point(a[0],a[1])}})}function Bl(e,a){function r(n,o,i,l,s,c,g,d,x,m,h,p,v,y){var f=g-n,k=d-o,j=f*f+k*k;if(j>4*a&&v--){var w=l+m,N=s+h,z=c+p,S=qt(w*w+N*N+z*z),q=aa(z/=S),A=Ce(Ce(z)-1)<we||Ce(i-x)<we?(i+x)/2:ta(N,w),F=e(A,q),D=F[0],P=F[1],L=D-n,R=P-o,b=k*L-f*R;(b*b/j>a||Ce((f*L+k*R)/j-.5)>.3||l*m+s*h+c*p<Il)&&(r(n,o,i,l,s,c,D,P,A,w/=S,N/=S,z,v,y),y.point(D,P),r(D,P,A,w,N,z,g,d,x,m,h,p,v,y))}}return function(n){var o,i,l,s,c,g,d,x,m,h,p,v,y={point:f,lineStart:k,lineEnd:w,polygonStart:function(){n.polygonStart(),y.lineStart=N},polygonEnd:function(){n.polygonEnd(),y.lineStart=k}};function f(q,A){q=e(q,A),n.point(q[0],q[1])}function k(){x=NaN,y.point=j,n.lineStart()}function j(q,A){var F=It([q,A]),D=e(q,A);r(x,m,d,h,p,v,x=D[0],m=D[1],d=q,h=F[0],p=F[1],v=F[2],qr,n),n.point(x,m)}function w(){y.point=f,n.lineEnd()}function N(){k(),y.point=z,y.lineEnd=S}function z(q,A){j(o=q,A),i=x,l=m,s=h,c=p,g=v,y.point=j}function S(){r(x,m,d,h,p,v,i,l,o,s,c,g,qr,n),y.lineEnd=w,w()}return y}}var _l=Ln({point:function(e,a){this.stream.point(e*Ye,a*Ye)}});function $l(e){return Ln({point:function(a,r){var n=e(a,r);return this.stream.point(n[0],n[1])}})}function Ul(e,a,r,n,o){function i(l,s){return l*=n,s*=o,[a+e*l,r-e*s]}return i.invert=function(l,s){return[(l-a)/e*n,(r-s)/e*o]},i}function Fr(e,a,r,n,o,i){if(!i)return Ul(e,a,r,n,o);var l=qe(i),s=Le(i),c=l*e,g=s*e,d=l/e,x=s/e,m=(s*r-l*a)/e,h=(s*a+l*r)/e;function p(v,y){return v*=n,y*=o,[c*v-g*y+a,r-g*v-c*y]}return p.invert=function(v,y){return[n*(d*v-x*y+m),o*(h-x*v-d*y)]},p}function Hl(e){return Vl(function(){return e})()}function Vl(e){var a,r=150,n=480,o=250,i=0,l=0,s=0,c=0,g=0,d,x=0,m=1,h=1,p=null,v=Nr,y=null,f,k,j,w=fn,N=.5,z,S,q,A,F;function D(b){return q(b[0]*Ye,b[1]*Ye)}function P(b){return b=q.invert(b[0],b[1]),b&&[b[0]*mt,b[1]*mt]}D.stream=function(b){return A&&F===b?A:A=_l($l(d)(v(z(w(F=b)))))},D.preclip=function(b){return arguments.length?(v=b,p=void 0,R()):v},D.postclip=function(b){return arguments.length?(w=b,y=f=k=j=null,R()):w},D.clipAngle=function(b){return arguments.length?(v=+b?yl(p=b*Ye):(p=null,Nr),R()):p*mt},D.clipExtent=function(b){return arguments.length?(w=b==null?(y=f=k=j=null,fn):kl(y=+b[0][0],f=+b[0][1],k=+b[1][0],j=+b[1][1]),R()):y==null?null:[[y,f],[k,j]]},D.scale=function(b){return arguments.length?(r=+b,L()):r},D.translate=function(b){return arguments.length?(n=+b[0],o=+b[1],L()):[n,o]},D.center=function(b){return arguments.length?(i=b[0]%360*Ye,l=b[1]%360*Ye,L()):[i*mt,l*mt]},D.rotate=function(b){return arguments.length?(s=b[0]%360*Ye,c=b[1]%360*Ye,g=b.length>2?b[2]%360*Ye:0,L()):[s*mt,c*mt,g*mt]},D.angle=function(b){return arguments.length?(x=b%360*Ye,L()):x*mt},D.reflectX=function(b){return arguments.length?(m=b?-1:1,L()):m<0},D.reflectY=function(b){return arguments.length?(h=b?-1:1,L()):h<0},D.precision=function(b){return arguments.length?(z=Lr(S,N=b*b),R()):qt(N)},D.fitExtent=function(b,T){return To(D,b,T)},D.fitSize=function(b,T){return Ml(D,b,T)},D.fitWidth=function(b,T){return Ol(D,b,T)},D.fitHeight=function(b,T){return Dl(D,b,T)};function L(){var b=Fr(r,0,0,m,h,x).apply(null,a(i,l)),T=Fr(r,n-b[0],o-b[1],m,h,x);return d=ul(s,c,g),S=un(a,T),q=un(d,S),z=Lr(S,N),R()}function R(){return A=F=null,D}return function(){return a=e.apply(this,arguments),D.invert=a.invert&&P,L()}}function qo(e,a){var r=a*a,n=r*r;return[e*(.8707-.131979*r+n*(-.013791+n*(.003971*r-.001529*n))),a*(1.007226+r*(.015085+n*(-.044475+.028874*r-.005916*n)))]}qo.invert=function(e,a){var r=a,n=25,o;do{var i=r*r,l=i*i;r-=o=(r*(1.007226+i*(.015085+l*(-.044475+.028874*i-.005916*l)))-a)/(1.007226+i*(.015085*3+l*(-.044475*7+.028874*9*i-.005916*11*l)))}while(Ce(o)>we&&--n>0);return[e/(.8707+(i=r*r)*(-.131979+i*(-.013791+i*i*i*(.003971-.001529*i)))),r]};function Wl(){return Hl(qo).scale(175.295)}function Gl(e){return e}function Yl(e){if(e==null)return Gl;var a,r,n=e.scale[0],o=e.scale[1],i=e.translate[0],l=e.translate[1];return function(s,c){c||(a=r=0);var g=2,d=s.length,x=new Array(d);for(x[0]=(a+=s[0])*n+i,x[1]=(r+=s[1])*o+l;g<d;)x[g]=s[g],++g;return x}}function Kl(e,a){for(var r,n=e.length,o=n-a;o<--n;)r=e[o],e[o++]=e[n],e[n]=r}function Ql(e,a){return typeof a=="string"&&(a=e.objects[a]),a.type==="GeometryCollection"?{type:"FeatureCollection",features:a.geometries.map(function(r){return Rr(e,r)})}:Rr(e,a)}function Rr(e,a){var r=a.id,n=a.bbox,o=a.properties==null?{}:a.properties,i=Jl(e,a);return r==null&&n==null?{type:"Feature",properties:o,geometry:i}:n==null?{type:"Feature",id:r,properties:o,geometry:i}:{type:"Feature",id:r,bbox:n,properties:o,geometry:i}}function Jl(e,a){var r=Yl(e.transform),n=e.arcs;function o(d,x){x.length&&x.pop();for(var m=n[d<0?~d:d],h=0,p=m.length;h<p;++h)x.push(r(m[h],h));d<0&&Kl(x,p)}function i(d){return r(d)}function l(d){for(var x=[],m=0,h=d.length;m<h;++m)o(d[m],x);return x.length<2&&x.push(x[0]),x}function s(d){for(var x=l(d);x.length<4;)x.push(x[0]);return x}function c(d){return d.map(s)}function g(d){var x=d.type,m;switch(x){case"GeometryCollection":return{type:x,geometries:d.geometries.map(g)};case"Point":m=i(d.coordinates);break;case"MultiPoint":m=d.coordinates.map(i);break;case"LineString":m=l(d.arcs);break;case"MultiLineString":m=d.arcs.map(l);break;case"Polygon":m=c(d.arcs);break;case"MultiPolygon":m=d.arcs.map(c);break;default:return null}return{type:x,coordinates:m}}return g(a)}const Lo={US:[{k:["new york","nyc","brooklyn","manhattan"],ll:[-74,40.7]},{k:["san francisco","sf","palo alto","mountain view","menlo park","san jose","oakland"],ll:[-122.3,37.6]},{k:["los angeles","santa monica","irvine"],ll:[-118.2,34.1]},{k:["seattle","bellevue","redmond"],ll:[-122.3,47.6]},{k:["austin"],ll:[-97.7,30.3]},{k:["boston","cambridge"],ll:[-71.1,42.4]},{k:["chicago"],ll:[-87.6,41.9]},{k:["miami"],ll:[-80.2,25.8]},{k:["denver","boulder"],ll:[-105,39.7]},{k:["atlanta"],ll:[-84.4,33.7]},{k:["washington","arlington","dc"],ll:[-77,38.9]},{k:["dallas","houston"],ll:[-96.8,31.5]},{k:["salt lake","provo"],ll:[-111.9,40.8]},{k:["phoenix","tempe"],ll:[-112.1,33.4]}],CA:[{k:["toronto","waterloo"],ll:[-79.4,43.7]},{k:["montreal"],ll:[-73.6,45.5]},{k:["vancouver"],ll:[-123.1,49.3]},{k:["calgary"],ll:[-114.1,51]},{k:["ottawa"],ll:[-75.7,45.4]}],AU:[{k:["sydney"],ll:[151.2,-33.9]},{k:["melbourne"],ll:[145,-37.8]},{k:["brisbane"],ll:[153,-27.5]},{k:["perth"],ll:[115.9,-32]}],BR:[{k:["sao paulo"],ll:[-46.6,-23.5]},{k:["rio"],ll:[-43.2,-22.9]}],IN:[{k:["bengaluru","bangalore"],ll:[77.6,13]},{k:["mumbai"],ll:[72.9,19.1]},{k:["delhi","gurgaon","gurugram","noida"],ll:[77.2,28.6]},{k:["hyderabad"],ll:[78.5,17.4]},{k:["chennai"],ll:[80.3,13.1]}],CN:[{k:["beijing","pekin"],ll:[116.4,39.9]},{k:["shanghai"],ll:[121.5,31.2]},{k:["shenzhen","canton","guangzhou"],ll:[113.9,22.7]}],RU:[{k:["moscou","moscow"],ll:[37.6,55.8]},{k:["saint petersbourg","saint petersburg"],ll:[30.3,59.9]}]},Xl=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim();function Zl(e,a,r){const n=Lo[e];if(!n||!n.length)return-1;const o=Xl(a||"");if(o){for(let i=0;i<n.length;i++)if(n[i].k.some(l=>o.includes(l)))return i}return Math.floor(r*n.length)%n.length}let xa=null;function ed(){return xa||(xa=(async()=>{var e;try{const a=await fetch("/world/countries-110m.json");if(!a.ok)return null;const r=await a.json(),n=(e=r==null?void 0:r.objects)==null?void 0:e.countries;if(!n)return null;const o=Ql(r,n),i=Wl().fitExtent([[8,8],[992,492]],{type:"Sphere"}),l=Rl(i),s=(o.features||[]).filter(d=>{var x;return(((x=d.properties)==null?void 0:x.name)||"")!=="Antarctica"}).map(d=>{var h;const x=((h=d.properties)==null?void 0:h.name)||"",m=l(d)||"";return m?{i2:ji(x)||null,n:x,d:m}:null}).filter(d=>!!d);if(!s.length)return null;const c={};for(const[d,x]of Object.entries(Ni)){const m=i(x);m&&(c[d]={x:m[0],y:m[1]})}const g={};for(const[d,x]of Object.entries(Lo)){const m=x.map(h=>i(h.ll)).filter(h=>!!h).map(([h,p])=>({x:h,y:p}));m.length&&(g[d]=m)}return{key:"monde",viewBox:"40 48 920 360",fr:"Monde",en:"World",countries:s,anchors:c,metros:g}}catch{return null}})(),xa)}function td(e){const[a,r]=u.useState(null);return u.useEffect(()=>{if(!e||a)return;let n=!1;return ed().then(o=>{!n&&o&&r(o)}),()=>{n=!0}},[e,a]),a}const ad="8 40 984 210",nd={"northam:US":{fx:.64,fy:.68,sx:.44,sy:.28},"northam:CA":{fx:.58,fy:.86,sx:.34,sy:.1},"oceania:AU":{fx:.72,fy:.62,sx:.34,sy:.3},"europe:RU":{fx:.18,fy:.62,sx:.14,sy:.3}},Mr=["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"];function Or(e){let a=2166136261;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function rd(e,a){const[r,n]=u.useState(1);return u.useEffect(()=>{let o=!0,i=0;const l=()=>{var g;if(!o)return;const c=(g=e.current)==null?void 0:g.getScreenCTM();c&&c.a>0?n(c.a):i=requestAnimationFrame(l)};l();const s=new ResizeObserver(()=>l());return e.current&&s.observe(e.current),window.addEventListener("resize",l),()=>{o=!1,cancelAnimationFrame(i),s.disconnect(),window.removeEventListener("resize",l)}},[e,a]),r}function Dr({msgs:e}){const[a,r]=u.useState(0);u.useEffect(()=>{const o=window.setInterval(()=>r(i=>i+1),2400);return()=>window.clearInterval(o)},[]);const n=[[46,34],[52,41],[41,46],[57,30],[49,52],[36,38],[61,45],[44,27]];return t.jsxs("div",{className:"mapskel","aria-hidden":"true",children:[n.map(([o,i],l)=>t.jsx("i",{style:{left:o+"%",top:i+"%","--d":l*.18+"s"}},l)),t.jsx("span",{className:"mskm",children:e[a%e.length]})]})}function od(){const{st:e,dispatch:a,scoped:r,pipe:n,markRow:o,markedId:i,byId:l,lang:s,t:c,data:g,dossiers:d,source:x}=V(),m=g.loading&&!d.length,h=u.useRef(null),p=u.useRef(null),v=td(e.continent==="monde"),y=e.continent==="monde"?v:Cn.find(b=>b.key===e.continent)||null,f=rd(h,e.continent+":"+e.mapFolded+":"+!!y),[k,j]=u.useState(new Map),[w,N]=u.useState(null);u.useEffect(()=>{const b=h.current;if(!b)return;const T=new Map;b.querySelectorAll("path[data-i2]").forEach($=>{const X=$.dataset.i2;if(X)try{const I=$.getBBox();I.width>0&&T.set(X,{x:I.x,y:I.y,w:I.width,h:I.height})}catch{}}),j(T)},[e.continent,f,y]);const z=u.useMemo(()=>r.filter(b=>b.cc),[r]),S=u.useMemo(()=>{const b=new Map;return z.forEach(T=>b.set(T.cc,(b.get(T.cc)||0)+1)),b},[z]),q=e.continent==="monde"&&v?v.anchors:null,A=e.continent==="monde"&&v?v.metros:null,F=u.useMemo(()=>z.map(b=>{const T=Or(b.name||b.id||""),$=Or((b.id||b.name||"")+"·y");if(q&&b.cc){const Y=A?A[b.cc]:void 0;if(Y&&Y.length){const J=Zl(b.cc,b.city,T);if(J>=0&&Y[J])return{d:b,x:Y[J].x+(T-.5)*5,y:Y[J].y+($-.5)*5}}const K=q[b.cc];if(K)return{d:b,x:K.x+(T-.5)*10,y:K.y+($-.5)*10}}const X=b.cc?k.get(b.cc):void 0;if(!X)return null;const I=nd[`${e.continent}:${b.cc||""}`];if(I)return{d:b,x:X.x+X.w*(I.fx+(T-.5)*I.sx),y:X.y+X.h*(I.fy+($-.5)*I.sy)};const O=(T-.5)*Math.min(X.w*.55,60),Q=($-.5)*Math.min(X.h*.55,60);return{d:b,x:X.x+X.w/2+O,y:X.y+X.h/2+Q}}).filter(b=>!!b),[z,k,q,A,e.continent]),D=b=>f>0?b/f:b,P=u.useMemo(()=>n?[0,1,2,3,4,5].map(b=>({c:Mr[b],fr:c.plabels[b].toUpperCase(),en:c.plabels[b].toUpperCase(),n:r.filter(T=>T.kind==="target"&&ze(T)===b).length})).filter(b=>b.n>0):Wn.map((b,T)=>({...b,n:r.filter($=>Gn($)===T).length})),[r,n,c.plabels]),L=i?l.get(i):null,R=L?F.find(b=>b.d.id===L.id):null;return y?t.jsxs("div",{className:"mapzone"+(m?" waiting":""),ref:p,children:[m&&t.jsx(Dr,{msgs:c.loadMsgs}),t.jsxs("svg",{ref:h,viewBox:e.continent==="monde"?ad:y.viewBox,preserveAspectRatio:e.continent==="monde"?"xMidYMin slice":"xMidYMid meet",role:"img","aria-label":s==="fr"?y.fr:y.en,onMouseLeave:()=>{N(null),o(null)},children:[t.jsx("g",{children:y.countries.map((b,T)=>t.jsx("g",{className:"ct"+(b.i2&&S.get(b.i2)?"":" empty"),children:t.jsx("path",{d:b.d,"data-i2":b.i2||void 0})},T))}),t.jsx("g",{children:F.map(b=>{const T=Wn[Gn(b.d)],$=!!Me(b.d),X=b.d.kind==="target",I=n&&X?Mr[ze(b.d)]:T.c,O=!n&&Ie(b.d);return t.jsxs("g",{className:"co"+(O?" done":""),onMouseEnter:()=>{var K,J;const Q=(K=p.current)==null?void 0:K.getBoundingClientRect(),Y=(J=h.current)==null?void 0:J.createSVGPoint();if(Y&&h.current&&Q){Y.x=b.x,Y.y=b.y;const ge=Y.matrixTransform(h.current.getScreenCTM());N({x:ge.x-Q.left,y:ge.y-Q.top,label:b.d.name+" · "+($t(b.d.cc,s)||b.d.countryLabel||"")})}o(b.d.id)},onMouseLeave:()=>{N(null),o(null)},onClick:()=>{var K;if(x==="ops"){window.dispatchEvent(new CustomEvent("ppmap:reveal")),a({type:"focus",id:b.d.id}),(b.d.noCo||["media","nominations","recrutements"].includes(b.d.engine||""))&&(b.d.url||b.d.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:b.d.url||"",text:[b.d.headline,b.d.tagline].filter(Boolean).join(`
`)}})):b.d.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:b.d.name,url:b.d.url||"",website:b.d.website||"",domain:b.d.domain||""}}));return}const Q=(K=h.current)==null?void 0:K.createSVGPoint();let Y=null;if(Q&&h.current){Q.x=b.x,Q.y=b.y;const J=Q.matrixTransform(h.current.getScreenCTM());Y={x:J.x,y:J.y}}a({type:"popup",id:b.d.id,anchor:Y})},children:[t.jsx("circle",{className:"h",cx:b.x,cy:b.y,r:D(Math.max(11,T.px+7))}),t.jsx("circle",{className:"v",cx:b.x,cy:b.y,r:D(T.px),fill:I,stroke:$?"#DC2626":"#ffffff",strokeWidth:D($?2.2:1.3)})]},b.d.id||b.d.name)})}),R&&t.jsx("circle",{className:"ring on",cx:R.x,cy:R.y,r:D(13),fill:"none",stroke:"#0F172A",strokeWidth:D(2)})]}),t.jsx("div",{className:"hov"+(w?" on":""),style:w?{left:w.x,top:w.y}:void 0,children:w==null?void 0:w.label}),t.jsx("div",{className:"legend",children:P.map((b,T)=>t.jsxs("span",{children:[t.jsx("i",{style:{"--c":b.c}}),s==="fr"?b.fr:b.en," ",t.jsx("b",{children:b.n})]},T))}),r.some(b=>!b.cc)&&t.jsx("div",{className:"legend",style:{left:"auto",right:10},children:t.jsxs("span",{children:["🌐 ",c.notLocated," ",t.jsx("b",{children:r.filter(b=>!b.cc).length})]})})]}):t.jsx("div",{className:"mapzone"+(m?" waiting":""),ref:p,children:t.jsx(Dr,{msgs:c.loadMsgs})})}function id(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!r)return e;const o=(a==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||r[2],i=Number(r[3]);return a==="en"?`${o} ${i}, ${r[1]}`:`${i} ${o} ${r[1]}`}function Fo({compact:e=!1}){const{st:a,dispatch:r,dossiers:n,t:o,pipe:i,contName:l,lang:s}=V(),c=a.filters,[g,d]=u.useState(!1),[x,m]=u.useState(!1),h=u.useRef(null),p=u.useRef(null),v=u.useMemo(()=>a.continent==="monde"?n:n.filter(R=>R.continent===a.continent),[n,a.continent]),y=R=>v.filter(b=>R!=="country"&&c.country.length&&!c.country.includes(b.cc||"")?!1:Ca(b,c,i,R==="country"?void 0:R)),f=R=>!i||R.kind!=="op",k=u.useMemo(()=>{const R=y("win").filter(f),b=T=>R.filter($=>($.date?Math.max(0,Math.floor((Date.now()-Date.parse($.date))/864e5)):9999)<=T).length;return[b(0),b(7),b(30),R.length]},[v,c,i]),j=u.useMemo(()=>c.day?y("win").filter(f).filter(R=>(R.date||"").slice(0,10)===c.day).length:0,[v,c,i]),w=(c.signalOnly?1:0)+c.sector.length+c.country.length+c.engine.length+c.stage.length+c.angle.length+c.memoLevel.length,N=w+(c.acquirer.trim()?1:0)+(c.day||c.win!=="all"?1:0)+(c.search.trim()?1:0);u.useEffect(()=>{a.openFacet&&d(!1)},[a.openFacet]),u.useEffect(()=>{if(!g&&!x)return;const R=T=>{var X,I;const $=T.target;g&&!((X=h.current)!=null&&X.contains($))&&d(!1),x&&!((I=p.current)!=null&&I.contains($))&&m(!1)},b=T=>{T.key==="Escape"&&(d(!1),m(!1))};return document.addEventListener("mousedown",R),document.addEventListener("keydown",b),()=>{document.removeEventListener("mousedown",R),document.removeEventListener("keydown",b)}},[g,x]);const z=(R,b,T,$="fbtn")=>t.jsxs("button",{type:"button",className:$,"aria-expanded":a.openFacet===R,onClick:()=>r({type:"openFacet",facet:R}),children:[t.jsx("span",{className:"fl",children:b}),T>0&&t.jsx("span",{className:"n",children:T}),t.jsx("span",{className:"cv",children:"▾"})]},R),S=["1","7","30","all"],q=Math.max(0,S.indexOf(c.win||"all")),A=c.day?t.jsxs("div",{className:"seg",children:[t.jsxs("button",{type:"button","aria-pressed":!0,children:[t.jsx("span",{className:"sl",children:o.fDay(id(c.day,s))}),t.jsx("b",{children:j})]}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{day:"",win:"all"}}),children:o.fDayOff})]}):e?t.jsxs("div",{className:"winpick",ref:p,children:[t.jsxs("button",{type:"button",className:"winpick-btn","aria-expanded":x,"aria-haspopup":"listbox",onClick:()=>m(R=>!R),children:[t.jsx("span",{className:"winpick-k",children:o.winMenu}),t.jsx("span",{className:"winpick-v",children:o.datesShort[q]}),t.jsx("b",{children:k[q]}),t.jsx("i",{children:x?"▴":"▾"})]}),x&&t.jsx("div",{className:"winpick-pop",role:"listbox",children:S.map((R,b)=>t.jsxs("button",{type:"button",role:"option","aria-selected":c.win===R,onClick:()=>{r({type:"filters",patch:{win:R}}),m(!1)},children:[o.datesShort[b],t.jsx("span",{className:"n",children:k[b]})]},R))})]}):t.jsx("div",{className:"seg",children:S.map((R,b)=>t.jsxs("button",{type:"button","aria-pressed":c.win===R,onClick:()=>r({type:"filters",patch:{win:R}}),children:[t.jsx("span",{className:"sl",children:o.dates[b]}),t.jsx("b",{children:k[b]})]},R))}),F=t.jsxs("span",{className:"fsrch",children:["🔍",t.jsx("input",{placeholder:o.identSearch,value:c.search,onChange:R=>r({type:"filters",patch:{search:R.target.value}})})]}),D=t.jsxs("div",{className:"facets",children:[t.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":a.openFacet==="sig",onClick:()=>r({type:"openFacet",facet:"sig"}),children:[t.jsx("span",{className:"fl",children:o.fSignal}),c.signalOnly&&t.jsx("span",{className:"n",children:c.signalEngines.length||"✓"}),t.jsx("span",{className:"cv",children:"▾"})]}),c.sector.length===1?t.jsxs("button",{type:"button",className:"fbtn on","aria-expanded":a.openFacet==="sec",onClick:()=>r({type:"openFacet",facet:"sec"}),title:c.sector[0],children:[t.jsx("span",{className:"fl",children:o.fSector}),t.jsx("span",{className:"n",style:{maxWidth:"16ch",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c.sector[0]}),t.jsx("span",{className:"cv",children:"▾"})]}):z("sec",o.fSector,c.sector.length),z("pay",o.fCountry,c.country.length),z("det",o.fEngine,c.engine.length),z("sta",o.fStage,c.stage.length),i&&z("ang","Angle",c.angle.length),i&&z("mem","Mémo",c.memoLevel.length)]}),P=(R=!1)=>t.jsxs("div",{className:"frow2",children:[N>0&&t.jsxs("button",{type:"button",className:"resetbtn on",title:o.clearTitle(v.length,l),onClick:()=>r({type:"reset"}),children:[t.jsx("span",{className:"rot",children:"↺"}),t.jsx("span",{children:o.clear(N)})]}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:o.alertBtn}),R&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>r({type:"mapFold",folded:!1}),children:o.showMap})]}),L=t.jsxs("div",{className:"fmenu",ref:h,children:[t.jsxs("button",{type:"button",className:"fbtn fmenu-btn"+(w?" on":""),"aria-expanded":g,"aria-haspopup":"true",onClick:()=>{d(R=>!R),a.openFacet&&r({type:"openFacet",facet:null})},children:[t.jsx("span",{className:"fl",children:o.fMenu}),w>0&&t.jsx("span",{className:"n",children:w}),t.jsx("span",{className:"cv",children:g?"▴":"▾"})]}),g&&t.jsx("div",{className:"fmenu-pop",role:"menu",children:D})]});return e?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"fstrip"+(c.day?" noday":""),children:[t.jsx("div",{className:"fstrip-a",children:A}),t.jsxs("div",{className:"fstrip-b",children:[F,L,P(!1)]})]}),a.openFacet&&t.jsx(Ir,{poolFor:y})]}):t.jsxs(t.Fragment,{children:[t.jsxs("aside",{className:"fbar",children:[A,F,D,t.jsx("span",{className:"fgrow"}),P()]}),a.openFacet&&t.jsx(Ir,{poolFor:y})]})}function Ir({poolFor:e}){const{st:a,dispatch:r,t:n,lang:o}=V(),i=a.filters,l=a.openFacet,{title:s,cols:c,options:g}=u.useMemo(()=>{if(l==="sig"){const p=e("signal").filter(f=>Me(f)),v=new Map;p.forEach(f=>{const k=f.engine||"";v.set(k,(v.get(k)||0)+1)});const y=[{v:"*",label:n.fpSigAll,n:p.length,html:!0,on:i.signalOnly&&!i.signalEngines.length},...rn([...v.keys()],o).map(f=>({v:f,label:zt(f)+" "+Ke(f,o),n:v.get(f)||0,html:!1,on:i.signalOnly&&i.signalEngines.includes(f)}))];return{title:n.fpSigTitle,cols:2,options:y}}if(l==="sec"){const p=e("sector"),v=new Map;return p.forEach(y=>{y.sector&&v.set(y.sector,(v.get(y.sector)||0)+1)}),{title:n.fSector.toUpperCase(),cols:3,options:[...v.entries()].sort((y,f)=>f[1]-y[1]).map(([y,f])=>({v:y,label:y,n:f,html:!1,on:i.sector.includes(y)}))}}if(l==="pay"){const p=e("country"),v=new Map;return p.forEach(y=>{y.cc&&v.set(y.cc,(v.get(y.cc)||0)+1)}),{title:n.fCountry.toUpperCase(),cols:3,options:[...v.entries()].sort((y,f)=>f[1]-y[1]).map(([y,f])=>({v:y,label:$t(y,o)||y,n:f,html:!1,on:i.country.includes(y)}))}}if(l==="det"){const p=e("engine"),v=new Map;return p.forEach(y=>{y.engine&&v.set(y.engine,(v.get(y.engine)||0)+1)}),{title:n.fEngine.toUpperCase(),cols:2,options:rn([...v.keys()],o).map(y=>({v:y,label:zt(y)+" "+Ke(y,o)+' <span style="color:var(--dim);font-size:10px">· '+Ei(Si(y),o)+"</span>",n:v.get(y)||0,html:!0,on:i.engine.includes(y)}))}}if(l==="ang"){const p=e("angle"),v=new Map;return p.forEach(y=>{y.angle&&v.set(y.angle,(v.get(y.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...v.entries()].sort((y,f)=>f[1]-y[1]).map(([y,f])=>({v:y,label:y.replace(/[_-]+/g," "),n:f,html:!1,on:i.angle.includes(y)}))}}if(l==="mem"){const p=e("memoLevel"),v=new Map;p.forEach(f=>{if(f.kind==="target"){const k=En(f);v.set(k,(v.get(k)||0)+1)}});const y=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(f=>({v:String(f),label:y[f],n:v.get(f)||0,html:!1,on:i.memoLevel.includes(f)}))}}const m=e("stage"),h=new Map;return m.forEach(p=>{p.stage&&h.set(p.stage,(h.get(p.stage)||0)+1)}),{title:n.fStage.toUpperCase(),cols:2,options:[...h.entries()].sort((p,v)=>v[1]-p[1]).map(([p,v])=>({v:p,label:p,n:v,html:!1,on:i.stage.includes(p)}))}},[l,a,o]),d=m=>{if(l==="sig"){if(m==="*")r({type:"filters",patch:{signalOnly:!(i.signalOnly&&!i.signalEngines.length),signalEngines:[]}});else{const p=i.signalEngines.includes(m)?i.signalEngines.filter(v=>v!==m):[...i.signalEngines,m];r({type:"filters",patch:{signalOnly:!0,signalEngines:p}})}return}if(l==="mem"){r({type:"toggleMemoLevel",value:Number(m)});return}r({type:"toggleFacet",facet:l==="sec"?"sector":l==="pay"?"country":l==="det"?"engine":l==="ang"?"angle":"stage",value:m})},x=()=>{r(l==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:l==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:l==="sec"?"sector":l==="pay"?"country":l==="det"?"engine":l==="ang"?"angle":"stage"})};return t.jsxs("div",{className:"fpanel on",children:[t.jsxs("div",{className:"ph",children:[t.jsx("b",{children:s}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",onClick:x,children:n.fpNone}),t.jsx("button",{type:"button",onClick:()=>r({type:"openFacet",facet:null}),children:n.fpClose})]}),t.jsx("div",{className:"fcols"+(c===2?" two":""),children:g.map(m=>t.jsxs("button",{type:"button",className:"opt","aria-pressed":m.on,onClick:()=>d(m.v),children:[t.jsx("span",{className:"bx"}),m.html?t.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:m.label}}):t.jsx("span",{className:"l",children:m.label}),t.jsx("span",{className:"n",children:m.n})]},m.v))}),t.jsxs("div",{className:"pf",children:[t.jsx("span",{className:"t",children:n.alertReady}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:n.alertCreate})]})]})}function Ro({mapToggle:e=!0,variant:a="tabs"}){const{dossiers:r,st:n,dispatch:o,pipe:i,lang:l,t:s}=V(),c=u.useMemo(()=>{const h={};return r.forEach(p=>{Ca(p,n.filters,i)&&(h.monde=(h.monde||0)+1,p.continent&&(h[p.continent]=(h[p.continent]||0)+1))}),h},[r,n.filters,i]),[g,d]=u.useState(!1),x=u.useRef(null);u.useEffect(()=>{if(!g)return;const h=v=>{var y;(y=x.current)!=null&&y.contains(v.target)||d(!1)},p=v=>{v.key==="Escape"&&d(!1)};return document.addEventListener("mousedown",h),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",h),document.removeEventListener("keydown",p)}},[g]);const m=h=>{const p=Cn.find(v=>v.key===h);return h==="monde"?s.contWorld:l==="fr"?p.fr:p.en};return a==="compact"?t.jsxs("div",{className:"contpick",ref:x,children:[t.jsxs("button",{type:"button",className:"contpick-btn","aria-expanded":g,"aria-haspopup":"listbox",onClick:()=>d(h=>!h),children:[m(n.continent),t.jsx("span",{className:"n",children:c[n.continent]||0}),t.jsx("i",{children:g?"▴":"▾"})]}),g&&t.jsx("div",{className:"contpick-pop",role:"listbox",children:Yn.map(h=>t.jsxs("button",{type:"button",role:"option","aria-selected":n.continent===h,onClick:()=>{o({type:"continent",key:h}),d(!1)},children:[m(h),t.jsx("span",{className:"n",children:c[h]||0})]},h))}),e&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>o({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?s.showMap:s.hideMap})]}):t.jsxs("div",{className:"conts",children:[Yn.map(h=>t.jsxs("button",{type:"button",className:"cbtn","aria-selected":n.continent===h,onClick:()=>o({type:"continent",key:h}),children:[m(h),t.jsx("span",{className:"n",children:c[h]||0})]},h)),e&&t.jsx("span",{className:"side",children:t.jsx("button",{type:"button",onClick:()=>o({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?s.showMap:s.hideMap})})]})}function Nn(e){try{return JSON.parse(localStorage.getItem(e)||"[]")}catch{return[]}}function Mo(e){return"atl2:evalq:"+(e||"anon")}function sd(e,a){const r=Mo(e),n=Nn(r),o=new Set(n.map(s=>(s.name||"").trim().toLowerCase())),i=a.map(s=>(s||"").trim()).filter(s=>s&&!o.has(s.toLowerCase())).map(s=>({name:s,site:"",status:"",auto:!0}));if(!i.length)return 0;const l=[...n,...i].slice(0,30);try{localStorage.setItem(r,JSON.stringify(l)),window.dispatchEvent(new CustomEvent("atl2:evalq"))}catch{}return i.length}function Oo(){const{t:e,data:a}=V(),r=a.session.token||"",n=Mo(r),[o,i]=u.useState(()=>Nn(n)),l=u.useRef(!1);u.useEffect(()=>{try{localStorage.setItem(n,JSON.stringify(o.slice(0,30))),l.current=!0,window.dispatchEvent(new CustomEvent("atl2:evalq")),l.current=!1}catch{}},[o,n]),u.useEffect(()=>{const h=()=>{if(l.current)return;const p=Nn(n);i(v=>JSON.stringify(v)===JSON.stringify(p)?v:p)};return window.addEventListener("atl2:evalq",h),window.addEventListener("storage",h),()=>{window.removeEventListener("atl2:evalq",h),window.removeEventListener("storage",h)}},[n]);const s=u.useCallback((h,p)=>i(v=>v.map((y,f)=>f===h?{...y,...p}:y)),[]),c=u.useCallback((h,p)=>{const v=p.trim();v&&(s(h,{name:v,status:"resolving",site:"",candidates:void 0,auto:!1}),zn(v).then(y=>{const f=y.candidates||[];y.website?s(h,{site:y.website,status:"ready"}):f.length===1?s(h,{site:f[0].url,status:"ready"}):f.length>1?s(h,{status:"pick",candidates:f.slice(0,4)}):s(h,{status:"ready"})}).catch(()=>s(h,{status:"ready"})))},[s]);u.useEffect(()=>{const h=o.findIndex(p=>p.auto&&p.name.trim()&&p.status==="");h>=0&&c(h,o[h].name)},[o,c]);const[g,d]=u.useState(!1),x=async()=>{if(g)return;const h=o.map((p,v)=>({r:p,i:v})).filter(({r:p})=>p.name.trim()&&p.status!=="kept"&&p.status!=="out"&&p.status!=="resolving");if(h.length){d(!0);for(const{r:p,i:v}of h){const y=await eo(r,(p.site||p.name).trim(),"atelier2");if(y.verdict==="quota"){window.dispatchEvent(new CustomEvent("ppmap:evalcard",{detail:{name:"",verdict:"quota",reason:y.reason||"",remaining:0}}));break}s(v,{status:y.verdict==="kept"?"kept":"out",reason:y.reason||""}),window.dispatchEvent(new CustomEvent("ppmap:evalcard",{detail:{name:y.company||p.name,verdict:y.verdict,reason:y.reason||"",remaining:y.remaining??null}}))}d(!1)}},m=o.filter(h=>h.name.trim()&&h.status!=="kept"&&h.status!=="out").length;return t.jsxs("div",{className:"bulk on evalq",children:[t.jsxs("div",{className:"eq-rows",children:[o.map((h,p)=>t.jsxs("div",{className:"eq-row",children:[t.jsx("input",{value:h.name,placeholder:e.eqNamePh,onChange:v=>{const y=v.target.value.split(`
`).map(f=>f.trim()).filter(Boolean);y.length>1?(i(f=>{const k=[...f];return k.splice(p,1,...y.map(j=>({name:j,site:"",status:""}))),k.slice(0,30)}),y.forEach((f,k)=>window.setTimeout(()=>c(p+k,f),80*k))):s(p,{name:v.target.value})},onBlur:()=>{h.name.trim()&&!h.site&&h.status!=="resolving"&&h.status!=="pick"&&c(p,h.name)},onKeyDown:v=>{v.key==="Enter"&&c(p,h.name)}}),t.jsxs("span",{className:"eq-site",children:[h.status==="resolving"&&t.jsx("i",{className:"eq-spin",children:"…"}),h.status==="pick"&&(h.candidates||[]).map(v=>t.jsx("button",{type:"button",className:"eq-cand",onClick:()=>s(p,{site:v.url,status:"ready",candidates:void 0}),children:(v.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,26)},v.url)),h.status!=="resolving"&&h.status!=="pick"&&(h.site?t.jsxs("a",{href:h.site.startsWith("http")?h.site:"https://"+h.site,target:"_blank",rel:"nofollow noopener",children:[h.site.replace(/^https?:\/\/(www\.)?/,"").slice(0,30)," ↗"]}):t.jsx("em",{children:h.name.trim()&&h.status==="ready"?e.eqNoSite:""}))]}),t.jsx("span",{className:"eq-st s-"+(h.status||"vide"),title:h.reason||"",children:h.status==="kept"?"✓ "+e.kept:h.status==="out"?"✗ "+e.dropped:h.status==="ready"?e.eqReady:h.status==="pick"?e.eqPick:""}),t.jsx("button",{type:"button",className:"eq-x",title:"×",onClick:()=>i(v=>v.filter((y,f)=>f!==p)),children:"×"})]},p)),t.jsxs("button",{type:"button",className:"eq-add",onClick:()=>i(h=>[...h,{name:"",site:"",status:""}].slice(0,30)),children:["+ ",e.eqAdd]})]}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+(g?" loading":""),style:{justifyContent:"center"},disabled:g||!m,onClick:()=>{x()},children:[t.jsx("span",{className:"fill"}),g?e.eqRunning:e.eqGo(m)]}),t.jsx("span",{className:"hint",children:e.eqHint}),o.some(h=>h.status==="kept"||h.status==="out")&&t.jsx("button",{type:"button",className:"dmulti",style:{marginTop:6},onClick:()=>i(h=>h.filter(p=>p.status!=="kept"&&p.status!=="out")),children:e.eqClearDone})]})]})}function Do(e){return String(e||"").split(`
`).map(a=>a.replace(/^#{1,6}\s*/,"").replace(/[*_`>]/g,"").trimEnd()).filter(a=>a.trim().length>0)}function ld(e){var o;const a=[],r=new Set,n=i=>{const l=(i||"").trim();!l||r.has(l.toLowerCase())||(r.add(l.toLowerCase()),a.push(l))};return((e==null?void 0:e.companies_cited)||[]).forEach(i=>n(i==null?void 0:i.name)),(((o=e==null?void 0:e.prospective)==null?void 0:o.companies_to_evaluate)||[]).forEach(i=>n(i==null?void 0:i.name)),a}function Pr({icon:e,title:a,hint:r,rows:n,addLabel:o,onEvaluate:i,onAddAll:l}){const{t:s}=V();return n.length?t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:[e," ",a]}),t.jsx("span",{className:"n",children:n.length}),l&&t.jsx("button",{type:"button",className:"rsblk-all",onClick:()=>l(n.map(c=>c.name)),children:o})]}),t.jsx("p",{className:"rsblk-hint",children:r}),t.jsx("div",{className:"rsblk-rows",children:n.map(c=>t.jsxs("div",{className:"rsrow",children:[t.jsxs("div",{className:"rsrow-t",children:[t.jsxs("div",{className:"rsrow-h",children:[t.jsx("span",{className:"nm",children:c.name}),c.chips.map(g=>t.jsx("span",{className:"ch",children:g},g))]}),c.line1&&t.jsx("p",{className:"w",children:c.line1}),c.line2&&t.jsx("p",{className:"r",children:c.line2})]}),t.jsx("button",{type:"button",className:"rsrow-go",onClick:()=>i(c.name),children:s.rsEvalOne})]},c.name))})]}):null}function Io({card:e,onEvaluate:a,onAddAll:r}){var l;const{t:n}=V(),o=((e==null?void 0:e.companies_cited)||[]).filter(s=>s&&(s.name||"").trim()).map(s=>({name:(s.name||"").trim(),line1:(s.what||"").trim(),line2:(s.role||"").trim(),chips:[(s.country||"").trim()].filter(Boolean)})),i=(((l=e==null?void 0:e.prospective)==null?void 0:l.companies_to_evaluate)||[]).filter(s=>s&&(s.name||"").trim()).map(s=>({name:(s.name||"").trim(),line1:(s.why||"").trim(),chips:[(s.country||"").trim(),(s.stage||"").trim()].filter(Boolean)}));return!o.length&&!i.length?t.jsx("p",{className:"rsblk-none",children:n.rsNoCompanies}):t.jsxs(t.Fragment,{children:[t.jsx(Pr,{icon:"🏷",title:n.rsCited,hint:n.rsCitedHint,rows:o,addLabel:n.rsAddAll(o.length),onEvaluate:a,onAddAll:r}),t.jsx(Pr,{icon:"🎯",title:n.rsMatch,hint:n.rsMatchHint,rows:i,addLabel:n.rsAddAll(i.length),onEvaluate:a,onAddAll:r})]})}function dd({card:e,onEvaluate:a,onAddAll:r}){var s,c,g;const{t:n}=V(),o=[e.industry,...e.market_tags||[],e.author].map(d=>(d||"").trim()).filter(Boolean),i=(((s=e.prospective)==null?void 0:s.criteria)||[]).filter(Boolean),l=(e.sources||[]).filter(d=>d&&d.url);return t.jsxs("div",{className:"rsdet",children:[e.market&&t.jsx("p",{className:"rsmk",children:e.market}),o.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:n.rsTags}),o.map(d=>t.jsx("span",{children:d},d))]}),t.jsxs("div",{className:"rsbody",children:[e.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${e.mindmap_png_b64}`,alt:n.rsMindmap}),t.jsx("figcaption",{children:n.rsMindmap})]}),t.jsx("div",{className:"rssum",children:Do(e.summary_md||"").map((d,x)=>t.jsx("p",{children:d},x))})]}),t.jsx(Io,{card:e,onEvaluate:a,onAddAll:r}),(((c=e.prospective)==null?void 0:c.conclusion)||i.length>0)&&t.jsxs("section",{className:"rsblk rspro",children:[t.jsx("div",{className:"rsblk-h",children:t.jsxs("b",{children:["🔮 ",n.rsConclusion]})}),((g=e.prospective)==null?void 0:g.conclusion)&&t.jsx("p",{className:"rspro-c",children:e.prospective.conclusion}),i.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"rsblk-hint",children:n.rsCriteria}),t.jsx("ul",{className:"rspro-l",children:i.map(d=>t.jsx("li",{children:d},d))})]})]}),l.length>0&&t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:["🔗 ",n.rsSources]}),t.jsx("span",{className:"n",children:l.length})]}),t.jsx("div",{className:"rssrc",children:l.map(d=>t.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",children:d.label||d.url},d.url))})]})]})}function cd(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{day:"2-digit",month:"short"})}function pd({onClose:e,onEvaluate:a,onAddAll:r,bump:n,cbToken:o}){const{t:i,email:l}=V(),s=o,[c,g]=u.useState(null),[d,x]=u.useState(null),[m,h]=u.useState(null),[p,v]=u.useState(!1);u.useEffect(()=>{let f=!0;return(async()=>{const k=await to({email:l,cbToken:s});f&&g(k)})(),()=>{f=!1}},[l,s,n]);const y=f=>{x(f),h(null),v(!0),(async()=>{const k=await Ci(f.id);h(k),v(!1)})()};return t.jsxs("div",{className:"rsarch",children:[t.jsxs("div",{className:"rsarch-h",children:[d?t.jsx("button",{type:"button",className:"rsarch-back",onClick:()=>{x(null),h(null)},children:i.rsArchBack}):t.jsxs("b",{children:["🗂 ",i.rsArchTitle]}),d&&t.jsx("span",{className:"ti",children:d.title}),!d&&c&&t.jsx("span",{className:"n",children:c.length}),t.jsx("button",{type:"button",className:"rsx",title:i.rsClose,onClick:e,children:"×"})]}),!d&&t.jsxs("div",{className:"rsarch-list",children:[c===null&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchLoading}),c!==null&&c.length===0&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchEmpty}),(c||[]).map(f=>t.jsxs("button",{type:"button",className:"rsarch-row",onClick:()=>y(f),children:[t.jsx("span",{className:"ti",children:f.title}),t.jsxs("span",{className:"me",children:[cd(f.created_at),f.industry?` · ${f.industry}`:"",f.author?` · ${f.author}`:""]}),t.jsx("span",{className:"cn",children:i.rsRowCounts(f.cited_n||0,f.evaluate_n||0)}),t.jsx("span",{className:"st"+(f.published?" on":""),children:f.published?i.rsPub:i.rsPriv})]},f.id))]}),d&&t.jsxs("div",{className:"rsarch-one",children:[t.jsxs("div",{className:"rsarch-sub",children:[d.source_url&&t.jsx("a",{href:d.source_url,target:"_blank",rel:"noopener noreferrer",children:i.rsSource}),d.published&&d.page_url&&t.jsx("a",{href:d.page_url,target:"_blank",rel:"noopener noreferrer",children:i.rsLink}),t.jsx("span",{className:"st"+(d.published?" on":""),children:d.published?i.rsPub:i.rsPriv})]}),p&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchLoading}),!p&&!m&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchGone}),!p&&m&&t.jsx(dd,{card:m,onEvaluate:a,onAddAll:r})]})]})}const ka=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function Xt(e){return/^https?:\/\//i.test((e||"").trim())}function lt(e){const a=(e||"").trim();return a?Xt(a)?a:ka.test(a)&&!/\s/.test(a)?"https://"+a.replace(/^\/+/,""):"":""}function ud(){return t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]})}function md(){const{t:e,mode:a,token:r,email:n,askEvaluate:o,sessTally:i,dispatch:l,evalBusy:s,evalCards:c,caps:g,data:d,canWrite:x,source:m,dossiers:h,doAnalyse:p,liveMemos:v,pipe:y}=V(),f=a==="client",k=u.useMemo(()=>r||(m!=="default"?zi():""),[r,m]),[j,w]=u.useState(""),[N,z]=u.useState(!1),[S,q]=u.useState(""),[A,F]=u.useState(""),[D,P]=u.useState(""),[L,R]=u.useState(!1),[b,T]=u.useState(!1),[$,X]=u.useState([]);u.useEffect(()=>{const M=ee=>{const ie=ee.detail;ie&&X(Z=>[ie,...Z].slice(0,8))};return window.addEventListener("ppmap:evalcard",M),()=>window.removeEventListener("ppmap:evalcard",M)},[]);const[I,O]=u.useState(!1),[Q,Y]=u.useState(!1),[K,J]=u.useState(!1),ge=u.useRef(!1),[W,ce]=u.useState(""),[le,be]=u.useState(""),[me,de]=u.useState(!1),[pe,xe]=u.useState(!1),[H,re]=u.useState(0),[fe,ke]=u.useState(""),[ne,ve]=u.useState(null),[oe,Ee]=u.useState(null),[Qe,he]=u.useState(!1),[Se,Lt]=u.useState(null),[Pe,Je]=u.useState(0),Te=u.useRef(!1),it=j.trim()?ka.test(j.trim())?e.evalUrl:e.evalName:e.evalWaiting;u.useEffect(()=>{if(typeof window>"u")return;const M=new URLSearchParams(window.location.search),ee=(M.get("rs")||"").trim(),ie=(M.get("rstext")||"").trim();ee&&/^https?:\/\//i.test(ee)&&ce(ee),ie&&be(ie),(ee&&/^https?:\/\//i.test(ee)||ie)&&O(!0)},[]),u.useEffect(()=>{const M=ee=>{const ie=ee.detail||{},Z=String(ie.url||"").trim(),je=String(ie.text||"").trim();Z&&/^https?:\/\//i.test(Z)&&ce(Z),je&&be(je),(Z&&/^https?:\/\//i.test(Z)||je)&&(O(!0),w(""),q(""),de(!0),window.setTimeout(()=>de(!1),900))};return window.addEventListener("ppmap:research",M),()=>window.removeEventListener("ppmap:research",M)},[]),u.useEffect(()=>{const M=ee=>{const ie=ee.detail||{},Z=String(ie.name||"").trim();if(!Z)return;O(!1),w(Z),q(Z);const je=lt(String(ie.website||ie.domain||""));F(je),P(lt(String(ie.url||""))),R(!je),z(!0),window.setTimeout(()=>z(!1),900)};return window.addEventListener("ppmap:prefill",M),()=>window.removeEventListener("ppmap:prefill",M)},[]),u.useEffect(()=>{const M=(S||"").trim();if(!M||I||A){(A||!M||I)&&R(!1);return}const ee=h.find(je=>_e(je.name)===_e(M)),ie=lt((ee==null?void 0:ee.website)||"")||lt((ee==null?void 0:ee.domain)||"");if(ie){F(ie),R(!1);return}let Z=!0;return R(!0),zn(M).then(je=>{var $e,Ae;if(!Z)return;const De=lt(je.website||"")||lt(((Ae=($e=je.candidates)==null?void 0:$e[0])==null?void 0:Ae.url)||"");De&&F(De)}).catch(()=>{}).finally(()=>{Z&&R(!1)}),()=>{Z=!1}},[S,I,A,h]),u.useEffect(()=>{const M=ee=>{var Z;const ie=String(((Z=ee.detail)==null?void 0:Z.url)||"").trim();Xt(ie)&&window.open(ie,"_blank","noopener,noreferrer")};return window.addEventListener("ppmap:view",M),()=>window.removeEventListener("ppmap:view",M)},[]),u.useEffect(()=>{if(ge.current===I)return;ge.current=I,J(!0);const M=window.setTimeout(()=>J(!1),560);return()=>window.clearTimeout(M)},[I]),u.useEffect(()=>{if(typeof window>"u")return;const M=document.querySelector(".atl2 .eval-stick")||document.querySelector(".atl2 .demand"),ee=document.querySelector(".atl2.ops, .atl2.cibles");if(!M||!ee)return;const ie=()=>ee.style.setProperty("--demand-h",`${M.offsetHeight}px`);ie();const Z=new ResizeObserver(ie);return Z.observe(M),()=>Z.disconnect()},[m,N,me,b,I,K,L]),u.useEffect(()=>{if(!x&&!k){Lt(null);return}let M=!0;return(async()=>{const ee=await to({email:n,cbToken:k});M&&Lt(ee.length)})(),()=>{M=!1}},[x,k,n,Pe]);const kt=$.length?$:c,Oe=d.credits,xt=u.useCallback(M=>{sd(r,M)&&T(!0)},[r]);u.useEffect(()=>{if(!pe)return;re(0);const M=window.setInterval(()=>re(ee=>ee+1),1e3);return()=>window.clearInterval(M)},[pe]);const ut=u.useMemo(()=>{const M=j.trim().toLowerCase();return!M||!y?null:h.find(ee=>_e(ee.name)===M&&ze(ee)===1)||null},[j,h,y]),Xe=()=>{const M=j.trim();if(M){if(ut){p(ut);return}o(null,M),f&&w("")}},jt=async()=>{var ie,Z,je;if(Te.current)return;const M=W.trim().replace(/\s+/g,""),ee=le.trim();if(!M&&!ee){ke(e.rsNeed);return}if(!f&&!k){o(null,M||ee.slice(0,80));return}Te.current=!0,ke(""),ve(null),Ee(null),xe(!0);try{const De=await Ti({url:M,text:ee,email:n,cbToken:k});if(xe(!1),!De||De.status!=="success"){ke((De==null?void 0:De.message)||"Erreur");return}ve(De),O(!1),xt((((ie=De.prospective)==null?void 0:ie.companies_to_evaluate)||[]).map(Ae=>(Ae==null?void 0:Ae.name)||"")),Ee({state:"pending"});const $e=await qi(De,{email:n,cbToken:k});Ee($e.ok?{state:"ok",scopeLabel:((Z=$e.summary)==null?void 0:Z.scope_label)||"",scope:((je=$e.summary)==null?void 0:je.scope)||""}:{state:"fail",msg:$e.error||""}),$e.ok&&Je(Ae=>Ae+1)}finally{Te.current=!1,xe(!1)}},gt=[ne==null?void 0:ne.industry,...(ne==null?void 0:ne.market_tags)||[],ne==null?void 0:ne.author].map(M=>(M||"").trim()).filter(Boolean),bt=(oe==null?void 0:oe.state)==="pending",Ft=oe&&(bt?t.jsx("span",{className:"rslink pend",children:e.rsSaving}):oe.state==="ok"?t.jsx("span",{className:"rslink ok",children:oe.scope&&oe.scope!=="public"?e.rsSavedIn(oe.scopeLabel||oe.scope.replace(/^fund:/,"")):e.rsSaved}):t.jsx("span",{className:"rslink fail",title:oe.msg,children:e.rsSaveFail})),Nt=ld(ne).length,Fe=I,nt=(S||j).trim(),C=h.find(M=>_e(M.name)===_e(nt)),B=lt(j)||A||lt((C==null?void 0:C.website)||"")||lt((C==null?void 0:C.domain)||""),U=D||lt((C==null?void 0:C.url)||""),ae=ut?e.actAnalyse:nt?e.evalGoOn(nt.length>22?nt.slice(0,21)+"…":nt):e.evalGo,ye=pe?`${Ai(W.trim())==="youtube"&&W.trim()?e.rsRunningVid:e.rsRunning} ${e.rsElapsed(H)}`:bt?e.rsSaving:e.rowExtract;return t.jsxs("div",{className:"demand"+(Fe?" rs-mode":"")+(S&&j.trim()===S||N||me?" pair":"")+(N||me||K?" echo":"")+(K?" swap":""),children:[t.jsxs("div",{className:"drow"+((Fe?me:N)||K?" flash":"")+((Fe?W.trim():ka.test(j.trim()))?" has-url":""),children:[t.jsxs("span",{className:"dfield",children:[t.jsx("input",{value:Fe?W:j,placeholder:Fe?e.rsUrlPh:e.evalPh,autoComplete:"off",maxLength:Fe?600:200,spellCheck:Fe?!1:void 0,inputMode:Fe?"url":void 0,onChange:M=>{if(Fe){ce(M.target.value);return}w(M.target.value),S&&M.target.value.trim()!==S&&(q(""),F(""),P(""),R(!1))},onKeyDown:M=>{M.key==="Enter"&&(Fe?jt():Xe())}}),t.jsx("span",{className:"detect"+(Fe?" off":"")+(ka.test(j.trim())?" url":""),children:it})]}),t.jsx("span",{className:"dacts",children:Fe?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn"+(pe?" loading":""),disabled:pe||bt||!W.trim()&&!le.trim(),onClick:()=>{jt()},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"elab",children:ye})]}),t.jsxs("a",{className:"viewbtn"+(Xt(W)?"":" off"),href:Xt(W)?W.trim():void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewLinkHint,onClick:M=>{Xt(W)||M.preventDefault()},children:[t.jsx(ud,{}),e.viewLink]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn"+(ut?" analyse":"")+(s?" loading":""),disabled:s,onClick:Xe,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"elab",children:ae})]}),t.jsxs("a",{className:"viewbtn sm"+(L?" searching":B?"":" off"),href:B||void 0,target:"_blank",rel:"noopener noreferrer","aria-busy":L||void 0,title:L?e.viewSiteBusyHint:e.viewSiteHint,onClick:M=>{B||M.preventDefault()},children:[L&&t.jsx("span",{className:"sitespin","aria-hidden":"true"}),L?e.viewSiteBusy:e.viewSite]}),t.jsx("a",{className:"viewbtn sm"+(U?"":" off"),href:U||void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewSrcHint,onClick:M=>{U||M.preventDefault()},children:e.viewSrc})]})}),g.showCredits&&Oe&&t.jsxs("button",{type:"button",className:"credits"+(Oe.total_available<=0&&!Oe.unlimited?" empty":""),onClick:()=>l({type:"modal",modal:"recharge"}),children:[t.jsx("span",{className:"cl",children:e.creditsCap}),t.jsx("b",{children:Oe.unlimited?"∞":Oe.total_available}),!Oe.unlimited&&t.jsxs("span",{className:"cm",children:["/ ",Oe.daily_grant+Oe.purchased]}),Oe.total_available<=0&&!Oe.unlimited?t.jsx("span",{className:"rc",children:e.creditsRecharge}):t.jsx("span",{className:"cd",children:e.creditsToday})]})]}),t.jsxs("div",{className:"dunder",children:[t.jsx("button",{type:"button",className:"dmulti",onClick:()=>T(!b),children:e.evalMulti}),t.jsx("button",{type:"button",className:"dmulti dsearch"+(I?" on":""),onClick:()=>O(!I),children:e.rsOpen}),Se!==null&&Se>0&&t.jsx("button",{type:"button",className:"dmulti darch"+(Qe?" on":""),onClick:()=>he(!Qe),children:e.rsArchOpen(Se)})]}),Qe&&t.jsx(pd,{bump:Pe,cbToken:k,onClose:()=>he(!1),onEvaluate:M=>o(null,M),onAddAll:xt}),t.jsx("div",{className:"rsp slim"+(I?" on":" off"),"aria-hidden":!I,children:t.jsxs("div",{className:"rsp-in",children:[t.jsxs("button",{type:"button",className:"rspaste",tabIndex:I?void 0:-1,onClick:()=>Y(M=>!M),children:[e.rsOr," · ",e.rsTextPh,t.jsx("i",{children:Q?"▴":"▾"})]}),Q&&t.jsx("textarea",{className:"rstext",value:le,placeholder:e.rsTextPh,tabIndex:I?void 0:-1,onChange:M=>be(M.target.value)})]})}),fe&&t.jsx("div",{className:"rserr",children:fe}),ne&&t.jsxs("div",{className:"rscard",children:[t.jsxs("div",{className:"rsh",children:[t.jsx("b",{children:ne.title}),ne.source_url&&t.jsx("a",{href:ne.source_url,target:"_blank",rel:"noopener noreferrer",children:e.rsSource}),t.jsx("button",{type:"button",className:"rsx",title:e.rsClose,onClick:()=>{ve(null),Ee(null)},children:"×"})]}),ne.market&&t.jsx("p",{className:"rsmk",children:ne.market}),gt.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:e.rsTags}),gt.map(M=>t.jsx("span",{children:M},M))]}),t.jsxs("div",{className:"rsbody",children:[ne.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${ne.mindmap_png_b64}`,alt:e.rsMindmap}),t.jsx("figcaption",{children:e.rsMindmap})]}),t.jsx("div",{className:"rssum",children:Do(ne.summary_md||"").map((M,ee)=>t.jsx("p",{children:M},ee))})]}),t.jsx(Io,{card:ne,onEvaluate:M=>o(null,M),onAddAll:xt}),t.jsxs("div",{className:"rsfoot",children:[t.jsx("span",{children:e.rsFound(Nt)}),Ft]})]}),b&&t.jsx(Oo,{}),kt.slice(0,1).map((M,ee)=>{const ie=M.verdict==="kept",Z=M.verdict==="quota",je=M.verdict==="unresolved",De=ie?"var(--brand)":Z?"var(--bolt)":je?"var(--blue)":"var(--red)",$e=ie?"var(--brand-l)":Z?"#FEF3C7":je?"#EEF4FF":"#FEF2F2";return t.jsxs("div",{className:"result on",style:{"--c":De,"--bgc":$e},children:[t.jsx("span",{className:"vv",children:t.jsx("span",{className:"vp",children:ie?"✓ "+e.kept:Z?"⏳":je?"❓ "+e.evalPickChip:"✗ "+e.dropped})}),M.name&&t.jsx("span",{className:"rn",children:M.name}),t.jsx("span",{className:"rr",children:M.reason?t.jsxs(t.Fragment,{children:[t.jsx("b",{children:e.why})," ",M.reason]}):null}),!!(M.candidates&&M.candidates.length)&&t.jsx("span",{className:"sitepick",children:M.candidates.map(Ae=>t.jsxs("span",{className:"sp1",children:[t.jsxs("a",{href:Ae.url.startsWith("http")?Ae.url:`https://${Ae.url}`,target:"_blank",rel:"nofollow noopener",children:[(Ae.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,34)," ↗"]}),t.jsx("button",{type:"button",onClick:()=>o(null,Ae.url,M.name),children:e.evalPickGo})]},Ae.url))}),!Z&&!je&&t.jsx("button",{type:"button",className:"go",onClick:()=>{l({type:"ptab",tab:ie?1:5});const Ae=(M.name||"").trim().toLowerCase();window.setTimeout(()=>{const Ue=[...document.querySelectorAll(".atl2 .list .row")].find(Pa=>{var la;return(((la=Pa.querySelector(".rnm"))==null?void 0:la.textContent)||"").trim().toLowerCase().includes(Ae)});Ue&&(Ue.scrollIntoView({behavior:"smooth",block:"center"}),Ue.classList.add("flashrow"),window.setTimeout(()=>Ue.classList.remove("flashrow"),2200))},260)},children:e.seeSpace(ie?e.statusKeep.replace("✅ ",""):e.statusDrop.replace("❌ ",""))})]},ee)}),f&&(i.kept+i.dropped>0||kt.length>0)&&t.jsxs("div",{className:"tally",children:[t.jsx("span",{dangerouslySetInnerHTML:{__html:e.session(i.kept,i.dropped)}})," ","·"," ",t.jsx("a",{onClick:()=>l({type:"modal",modal:"space"}),children:e.seeMySpace})]})]})}function fd(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function hd(){const{st:e,dispatch:a,byId:r,t:n,doDeep:o}=V(),i=e.memoConsole?r.get(e.memoConsole):null,l=u.useMemo(()=>i?[i.reasoning||"",fd(i.summary||"")].filter(Boolean).join(`

`):"",[i]);if(!i)return null;const s=wt(i),c=En(i);return t.jsx("div",{className:"demand",style:{paddingTop:0},children:t.jsxs("div",{className:"memo",style:{marginTop:0},children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"nm",children:i.name}),s&&t.jsx("span",{className:"vv",children:s}),typeof i.score=="number"&&t.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[i.score,"/100"]}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),t.jsx("div",{className:"tabs2",children:t.jsx("button",{type:"button","aria-selected":"true",children:n.memoSynth})}),t.jsx("div",{className:"mb2",children:l?l.split(`

`).map((g,d)=>t.jsx("p",{style:{margin:"0 0 10px"},children:g},d)):t.jsx("p",{children:n.memoNone})}),t.jsxs("div",{className:"mf",children:[Dt(i)?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"t",children:n.memoDeepHint}),t.jsx("button",{type:"button",className:"deep",onClick:()=>o(i),children:n.memoDeep})]}):t.jsx("span",{className:"t",children:c===2?n.critMemoKinds:""}),i.memoUrl&&t.jsx("a",{className:"go",href:i.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:n.memoOpenFull})]})]})})}function Rn({name:e}){const{t:a,token:r,caps:n,mode:o,flashErr:i}=V(),[l,s]=u.useState(!1),[c,g]=u.useState(null),d=n.pipe&&o==="client"&&!n.lockActions,x=async()=>{if(!d||l)return;s(!0);const m=await Li(r,e);if(s(!1),!m){i(a.actErr);return}g(m.results||[])};return u.useEffect(()=>{if(!d)return;const m=h=>{var v;const p=String(((v=h.detail)==null?void 0:v.name)||"").trim();p&&p.toLowerCase()===e.toLowerCase()&&x()};return window.addEventListener("ppmap:similar",m),()=>window.removeEventListener("ppmap:similar",m)},[e,d]),u.useEffect(()=>{if(d)try{const m=(sessionStorage.getItem("pp:similar")||"").trim();m&&m.toLowerCase()===e.toLowerCase()&&(sessionStorage.removeItem("pp:similar"),x())}catch{}},[e,d]),d?t.jsxs("div",{className:"simb",onClick:m=>m.stopPropagation(),children:[t.jsx("button",{type:"button",className:"abtn",disabled:l,onClick:()=>{x()},children:l?a.similarBusy:a.similar}),c&&(c.length===0?t.jsx("p",{className:"mnote",children:a.similarNone}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"siml",children:c.map(m=>t.jsxs("li",{children:[t.jsx("b",{className:m.verdict==="kept"?"ok":"ko",children:m.company}),m.reason&&t.jsx("span",{children:m.reason})]},m.company))}),t.jsx("p",{className:"mnote dim",children:a.similarNote})]}))]}):null}const xd=new Set(["b","strong","i","em","u","br","p","ul","ol","li","h4","h5"]),ga=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function gd(e){const a=String(e||"");if(!a)return"";let r="",n=0;for(;n<a.length;){const o=a.indexOf("<",n);if(o<0){r+=ga(a.slice(n));break}r+=ga(a.slice(n,o));const i=a.indexOf(">",o);if(i<0){r+=ga(a.slice(o));break}const l=a.slice(o+1,i).trim(),s=/^(\/?)([a-zA-Z0-9]+)/.exec(l),c=s?s[2].toLowerCase():"";s&&xd.has(c)?r+=`<${s[1]}${c}>`:r+=ga(a.slice(o,i+1)),n=i+1}return r}const bd=new Set(["script","noscript","style","link","iframe","object","embed","form","input","select","textarea","button","meta","base","dialog","svg","math","template","video","audio","source"]),Br={"*":new Set(["class","style","title","colspan","rowspan"]),img:new Set(["src","alt","width","height"]),a:new Set(["href"])};function Po(e){var r;const a=Array.from(e.children);for(const n of a){const o=n.tagName.toLowerCase();if(bd.has(o)){n.remove();continue}for(const l of Array.from(n.attributes)){const s=l.name.toLowerCase();(!(Br["*"].has(s)||((r=Br[o])==null?void 0:r.has(s)))||s.startsWith("on"))&&n.removeAttribute(l.name)}const i=n.getAttribute("style")||"";if(i&&/position\s*:\s*(fixed|sticky)/i.test(i))n.removeAttribute("style");else if(i){const l=i.split(";").filter(s=>s.trim()&&!/^\s*(font-size|font-family|line-height|font)\s*:/i.test(s)).join(";");l!==i&&(l?n.setAttribute("style",l):n.removeAttribute("style"))}if(o==="a"){const l=(n.getAttribute("href")||"").trim();/^(https?:|mailto:)/i.test(l)?(n.setAttribute("target","_blank"),n.setAttribute("rel","noopener noreferrer")):n.removeAttribute("href")}if(o==="img"){const l=(n.getAttribute("src")||"").trim();if(!/^https?:/i.test(l)){n.remove();continue}n.setAttribute("loading","lazy")}Po(n)}}function Xa(e){const a=e.cloneNode(!0);return Po(a),a.querySelectorAll("[id]").forEach(r=>r.removeAttribute("id")),a.removeAttribute("id"),a.innerHTML}const Za=new Map;function vd(e){const a=(e||"").trim();if(!/^https?:/i.test(a))return Promise.resolve(null);let r=Za.get(a);return r||(r=yd(a).catch(()=>null),r.then(n=>{n||Za.delete(a)}),Za.set(a,r)),r}async function yd(e){var x,m;const a=await fetch(e,{credentials:"omit"});if(!a.ok)return null;const r=new DOMParser().parseFromString(await a.text(),"text/html"),n=h=>{var p;return(((p=r.querySelector(h))==null?void 0:p.textContent)||"").trim()},o=r.querySelector(".sb-score"),i=((x=Array.from((o==null?void 0:o.classList)||[]).find(h=>h.startsWith("sb-score-")))==null?void 0:x.slice(9))||"",l=[];let s=null;const c=Array.from(r.querySelectorAll(".sidebar .sb-nav-heading, .sidebar a.nav-item"));for(const h of c){if(h.classList.contains("sb-nav-heading")){s={label:(h.textContent||"").trim(),items:[]},l.push(s);continue}const p=h.getAttribute("href")||"";if(!p.startsWith("#"))continue;const v=p.slice(1),y=wd(r,v);y&&(s||(s={label:"",items:[]},l.push(s)),s.items.push({id:v,title:(h.textContent||"").trim(),html:y,poids:y.length}))}const g=((m=/\/([a-z0-9-]+)-v2(?:\.html)?\/?$/i.exec(e))==null?void 0:m[1])||"",d={score:n(".sb-score"),scoreTone:i,tags:Array.from(r.querySelectorAll(".sb-tag")).map(h=>(h.textContent||"").trim()).filter(Boolean),name:n(".sidebar-company-name"),tagline:n(".sidebar-tagline"),desc:n(".meta-desc"),groups:l.filter(h=>h.items.length),mindmapSlug:r.querySelector(".cm-mindmap-png")?g:""};return d.groups.length?d:null}const _r={"fiche-contact":"[data-ct-card]","fiche-attaque":"[data-ct-card]"};function wd(e,a){const r=e.getElementById(a),n=r?$r(e,r):"";if(n)return n;const o=_r[a]?e.querySelector(_r[a]):null;return o&&o!==r?$r(e,o):""}function $r(e,a){var r,n;if(a.classList.contains("section-container")){const o=a.cloneNode(!0);return(r=o.querySelector("h2.section-title"))==null||r.remove(),Xa(o)}if(/^h\d$/i.test(a.tagName)){const o=e.createElement("div"),i=Array.from(((n=a.parentElement)==null?void 0:n.children)||[]);if(i.filter(c=>/^h3$/i.test(c.tagName))[0]===a)for(const c of i){if(c===a)break;/^h2$/i.test(c.tagName)||o.appendChild(c.cloneNode(!0))}let s=a.nextElementSibling;for(;s&&!/^h3$/i.test(s.tagName);)o.appendChild(s.cloneNode(!0)),s=s.nextElementSibling;return o.children.length?Xa(o):""}return Xa(a)}const en=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function ot({k:e,v:a,href:r}){return a==null||a===""?null:t.jsxs("div",{className:"cdl",children:[t.jsx("span",{className:"cdk",children:e}),r?t.jsx("a",{className:"cdv",href:r,target:"_blank",rel:"noopener noreferrer",children:String(a)}):t.jsx("span",{className:"cdv",children:String(a)})]})}function Ur(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Hr({v:e,sur:a,k:r}){const n=e>=80?"green":e>=55?"blue":e>=35?"amber":"red";return t.jsxs("span",{className:`md-score md-${n}`,title:r,children:[Math.round(e*10)/10,a?`/${a}`:""]})}const tn=new Map;function kd(e,a){const{token:r}=V(),[n,o]=u.useState(null);return u.useEffect(()=>{if(!a||!r||!e.name)return;const i=`${r}:${e.id}:${e.checkId||""}`;let l=tn.get(i);l||(l=Fi(r,e.name,e.checkId),tn.set(i,l),l.then(c=>{(!c||!c.reasoning&&!c.summaryHtml)&&tn.delete(i)}));let s=!0;return l.then(c=>{s&&c&&o({id:e.id,d:c})}),()=>{s=!1}},[a,r,e.id,e.name,e.checkId]),n&&n.id===e.id?n.d:null}const jd=6e4;function Nd({o:e}){const{t:a,doDeep:r}=V(),[n,o]=u.useState(null),[i,l]=u.useState(e.memoUrl?"load":"off"),[s,c]=u.useState(()=>new Set),[g,d]=u.useState(!1),x=u.useRef(new Map);u.useEffect(()=>{let v=!0;if(c(new Set),d(!1),x.current=new Map,!e.memoUrl){l("off"),o(null);return}return l("load"),o(null),vd(e.memoUrl).then(y=>{v&&(o(y),l(y?"ok":"err"))}),()=>{v=!1}},[e.memoUrl]);const m=wt(e),h=v=>{var y;return(y=x.current.get(v))==null?void 0:y.scrollIntoView({behavior:"smooth",block:"start"})},p=t.jsxs("div",{className:"cdacts",children:[Dt(e)&&t.jsx("button",{type:"button",className:"btn p",onClick:v=>{v.stopPropagation(),r(e)},children:a.memoDeep}),e.memoPdfUrl&&t.jsx("a",{className:"btn d",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",onClick:v=>v.stopPropagation(),children:"PDF ↗"})]});if(i==="off"){const v=[e.reasoning||"",Ur(e.summary||"")].filter(Boolean);return t.jsxs("div",{className:"cdmemo",children:[v.length?v.join(`

`).split(`

`).map((y,f)=>t.jsx("p",{className:"cdtxt",children:y},f)):t.jsx("p",{className:"cdtxt",children:a.memoNone}),p]})}if(i!=="ok"){const v=[e.reasoning||"",Ur(e.summary||"")].filter(Boolean);return t.jsxs("div",{className:"cdmemo",children:[m&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:m}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsx("p",{className:"mnote dim",children:i==="load"?a.memoLoading:a.memoLoadErr}),v.length>0&&v.join(`

`).split(`

`).map((y,f)=>t.jsx("p",{className:"cdtxt",children:y},f)),i==="err"&&e.memoUrl&&t.jsx("div",{className:"cdacts",children:t.jsx("button",{type:"button",className:"btn b",onClick:y=>{y.stopPropagation(),d(f=>!f)},children:g?a.memoHideHere:a.memoReadHere})}),g&&e.memoUrl&&t.jsx("iframe",{className:"cdembed",src:e.memoUrl,loading:"lazy",title:a.cdMemoTab,referrerPolicy:"no-referrer-when-downgrade",onClick:y=>y.stopPropagation()}),p,e.memoUrl&&t.jsx("a",{className:"btn p mdfull",href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",onClick:y=>y.stopPropagation(),children:a.memoOpenFull})]})}return t.jsxs("div",{className:"cdmemo memodoc",children:[m&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:m}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"md-head",children:[n.score&&t.jsx("span",{className:"md-score"+(n.scoreTone?` md-${n.scoreTone}`:""),children:n.score}),n.tags.map(v=>t.jsx("span",{className:"md-tag",children:v},v)),n.tagline&&t.jsx("p",{className:"md-tagline",children:n.tagline})]}),t.jsx("div",{className:"md-toc",children:n.groups.map(v=>v.items.map(y=>t.jsx("button",{type:"button",className:"md-jump",onClick:f=>{f.stopPropagation(),h(y.id)},children:y.title},y.id)))}),n.groups.map((v,y)=>t.jsxs("div",{className:"md-grp",children:[v.label&&t.jsx("div",{className:"md-grp-h",children:v.label}),v.items.map(f=>{const k=f.poids>jd&&!s.has(f.id),j=f.id==="fiche-contact"||f.id==="fiche-attaque";return t.jsxs("section",{className:"md-sec",ref:w=>{w&&x.current.set(f.id,w)},children:[t.jsx("h4",{className:"md-h",children:f.title}),j&&(e.contactName||e.contactEmail||e.contactLinkedin)&&t.jsxs("div",{className:"md-ctc",children:[t.jsx("span",{className:"cdk",children:a.mdContactKnown}),e.contactName&&t.jsx("b",{children:e.contactName}),e.contactEmail&&t.jsx("a",{href:`mailto:${e.contactEmail}`,onClick:w=>w.stopPropagation(),children:e.contactEmail}),e.contactLinkedin&&t.jsx("a",{href:e.contactLinkedin,target:"_blank",rel:"noopener noreferrer",onClick:w=>w.stopPropagation(),children:"LinkedIn"})]}),k?t.jsx("button",{type:"button",className:"abtn md-more",onClick:w=>{w.stopPropagation(),c(N=>new Set(N).add(f.id))},children:a.memoUnfold(Math.round(f.poids/1024))}):t.jsx("div",{className:"md-body",dangerouslySetInnerHTML:{__html:f.html}}),!k&&n.mindmapSlug&&f.html.includes("cm-mindmap-png")&&t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"md-h md-mm-h",children:a.mdMindmap(n.name||e.name)}),t.jsx("iframe",{className:"md-mm",loading:"lazy",title:a.mdMindmap(n.name||e.name),src:`${Da}/cibles/mindmap-view?slug=${encodeURIComponent(n.mindmapSlug)}`,onClick:w=>w.stopPropagation()})]})]},f.id)})]},v.label||y)),p,e.memoUrl&&t.jsx("a",{className:"btn p mdfull",href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",onClick:v=>v.stopPropagation(),children:a.memoOpenFull})]})}function Mn({o:e}){var j;const{t:a,lang:r,dispatch:n,caps:o}=V(),i=ia(e),l=wt(e),s=(e.cribleStatus||"").trim().toUpperCase()||(i==="NO MATCH"?"NO MATCH":i==="MATCH"?"MATCH":""),c=[e.sector,e.stage,e.countryLabel,e.city,e.website,e.domain,e.linkedinCompany,e.angle,e.date].filter(Boolean).length,g=[e.contactName,e.contactEmail,e.contactLinkedin].filter(Boolean).length,d=[e.ceoStatus,e.ceoNote,o.pipe?e.memoUrl:"",o.pipe?e.memoPdfUrl:""].filter(Boolean).length+(typeof e.engagement=="number"&&e.engagement>0?1:0),x=u.useMemo(()=>[{k:"eval",lib:a.cdEvaluation,n:(s?1:0)+(e.reasoning?1:0)+(o.pipe&&!o.lockActions&&!e.memoUrl?1:0)+(typeof e.engagement=="number"&&e.engagement>0?1:0)},{k:"conv",lib:a.cdConviction,n:(l?1:0)+(e.summary?1:0)+(typeof e.convictionScore=="number"?1:0)},{k:"memo",lib:a.cdMemoTab,n:e.memoUrl||e.summary||Dt(e)?1:0},{k:"soc",lib:a.cdSociete,n:c},{k:"ctc",lib:a.cdContact,n:g},{k:"suivi",lib:a.cdSuivi,n:d}].filter(w=>w.n>0),[e,a,o,s,l,c,g,d]),[m,h]=u.useState(""),p=x.some(w=>w.k===m)?m:((j=x[0])==null?void 0:j.k)||"",v=kd(e,p==="eval"||p==="conv");if(!x.length)return null;const y=((v==null?void 0:v.reasoning)||"").length>(e.reasoning||"").length?v.reasoning:e.reasoning||"",f=((v==null?void 0:v.summaryHtml)||"").length>(e.summary||"").length?v.summaryHtml:e.summary||"",k=(v==null?void 0:v.convictionScore)??e.convictionScore;return t.jsxs("div",{className:"cdtabs",children:[t.jsx("div",{className:"cdnav",role:"tablist",children:x.map(w=>t.jsx("button",{type:"button",role:"tab","aria-selected":p===w.k,"data-tour":"tab-"+w.k,className:p===w.k?"on":"",onClick:N=>{N.stopPropagation(),h(w.k)},children:w.lib},w.k))}),t.jsxs("div",{className:"cdbody",onClick:w=>w.stopPropagation(),children:[p==="eval"&&t.jsxs(t.Fragment,{children:[s&&t.jsxs("div",{className:"cdv1"+(s==="NO MATCH"?" out":""),children:[t.jsx("b",{children:s==="NO MATCH"?a.vOut:a.vKept}),t.jsx("span",{className:"cdw",children:a.cdCrible})]}),t.jsxs("div",{className:"md-head evalhead",children:[typeof e.score=="number"&&t.jsx(Hr,{v:e.score,sur:100,k:a.cdScore}),typeof e.engagement=="number"&&e.engagement>0&&t.jsxs("span",{className:"md-score md-amber",title:a.cdEngagementHint,children:[e.engagement>=20?"🔥 ":"",a.cdEngagement," ",Math.round(e.engagement*10)/10]}),e.angle&&t.jsx("span",{className:"md-tag",children:e.angle})]}),y&&y.split(`

`).map((w,N)=>t.jsx("p",{className:"cdtxt",children:w},N)),typeof e.engagement=="number"&&e.engagement>0&&t.jsx("p",{className:"mnote dim",children:a.cdEngagementHint}),o.pipe&&!o.lockActions&&!e.memoUrl&&t.jsx(Ed,{o:e})]}),p==="conv"&&t.jsxs(t.Fragment,{children:[l&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:l}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"md-head evalhead",children:[typeof k=="number"&&t.jsx(Hr,{v:k,sur:100,k:a.cdConvScore}),en(e.verdictDate,r)&&t.jsxs("span",{className:"md-tag",children:[a.cdVerdictDate," ",en(e.verdictDate,r)]})]}),f&&t.jsx("div",{className:"cdrich convrich",dangerouslySetInnerHTML:{__html:gd(f)}})]}),p==="memo"&&t.jsx(Nd,{o:e}),p==="soc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(ot,{k:a.cdSector,v:e.sector}),t.jsx(ot,{k:a.cdStage,v:e.stage}),t.jsx(ot,{k:a.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(ot,{k:a.cdSite,v:e.domain||e.website,href:e.website||void 0}),t.jsx(ot,{k:a.cdLinkedin,v:e.linkedinCompany?"LinkedIn":"",href:e.linkedinCompany}),t.jsx(ot,{k:a.cdAngle,v:e.angle}),t.jsx(ot,{k:a.cdDetected,v:en(e.date,r)})]}),p==="ctc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(ot,{k:a.cdName,v:e.contactName}),t.jsx(ot,{k:a.cdEmail,v:e.contactEmail,href:e.contactEmail?`mailto:${e.contactEmail}`:void 0}),t.jsx(ot,{k:a.cdLinkedin,v:e.contactLinkedin?"LinkedIn":"",href:e.contactLinkedin})]}),p==="suivi"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"cdgrid",children:t.jsx(ot,{k:a.cdCeoStatus,v:e.ceoStatus})}),typeof e.engagement=="number"&&e.engagement>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"md-head evalhead",children:t.jsxs("span",{className:"md-score md-amber",children:[e.engagement>=20?"🔥 ":"",a.cdEngagement," ",Math.round(e.engagement*10)/10]})}),t.jsx("p",{className:"mnote dim",children:a.cdEngagementHint})]}),e.ceoNote&&t.jsxs("p",{className:"cdtxt",children:["💬 ",e.ceoNote]}),o.pipe&&(e.memoUrl||e.memoPdfUrl)&&t.jsxs("div",{className:"cdacts",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"abtn",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemoOf(e.memoType)," →"]}),e.memoPdfUrl&&t.jsx("a",{className:"abtn",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"})]})]})]})]})}const ba=new Map;function Ed({o:e}){const{t:a,token:r}=V(),[n,o]=u.useState(!1),[i,l]=u.useState(null);u.useEffect(()=>{if(!r||!e.name)return;const x=`${r}:${e.name.toLowerCase()}`;let m=ba.get(x);m||(m=ao(r,[e.name]).then(p=>p[e.name]||Object.values(p)[0]||null).catch(()=>null),ba.set(x,m),m.then(p=>{(!p||!p.ok)&&ba.delete(x)}));let h=!0;return m.then(p=>{h&&p&&p.ok&&l(p)}),()=>{h=!1}},[r,e.id,e.name]);const s=async()=>{if(n)return;o(!0);const x=await Ri(r,e.name,e.website||e.domain||"");l(x),x.ok&&ba.set(`${r}:${e.name.toLowerCase()}`,Promise.resolve(x)),o(!1)},c=(i==null?void 0:i.blocs)||{},g=[[a.qaVP,c.value_prop],[a.qaProduct,c.produit],[a.qaModel,c.modele],[a.qaSummary,c.synthese]],d=g.some(([,x])=>x);return t.jsxs("div",{className:"qab",children:[!i&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mnote dim",children:a.qaHint}),t.jsx("button",{type:"button",className:"abtn",disabled:n,onClick:()=>{s()},children:n?a.qaBusy:a.qaRun})]}),i&&d&&t.jsxs(t.Fragment,{children:[g.filter(([,x])=>x).map(([x,m])=>t.jsxs("div",{className:"qal",children:[t.jsx("span",{className:"qak",children:x}),t.jsx("p",{children:m})]},x)),!!(i.pages||[]).length&&t.jsx("p",{className:"mnote dim",children:a.qaSources((i.pages||[]).length)})]}),i&&!d&&t.jsx("p",{className:"mnote warn",children:i.quota?a.qaQuota:a.qaEmpty})]})}function sa({spec:e}){const a=u.useRef(null),r=u.useRef(null),[n,o]=u.useState(!1);return u.useEffect(()=>{const i=a.current;if(!i)return;let l=!1;const s=()=>{const g=Math.max(280,Math.min(560,i.clientWidth||320));Kn({kind:"op",card:e},g).then(d=>{!l&&d&&i.isConnected&&i.replaceChildren(d)})},c=window.requestAnimationFrame(s);return()=>{l=!0,window.cancelAnimationFrame(c),i.replaceChildren()}},[e]),u.useEffect(()=>{if(!n)return;const i=r.current;if(!i)return;let l=!1;Kn({kind:"op",card:e},Math.min(1100,Math.floor(window.innerWidth*.92))).then(c=>{!l&&c&&i.isConnected&&i.replaceChildren(c)});const s=c=>{c.key==="Escape"&&o(!1)};return document.addEventListener("keydown",s),()=>{l=!0,document.removeEventListener("keydown",s)}},[n,e]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:a,className:"zoom-card-host",title:"Agrandir",onClick:()=>o(!0)}),n&&_t.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"atl2-lb",onClick:()=>o(!1),children:[t.jsx("div",{ref:r,style:{lineHeight:0}}),t.jsx("button",{type:"button",className:"atl2-lb-x","aria-label":"Fermer",onClick:()=>o(!1),children:"×"})]})}),document.body)]})}const Sd=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function Cd(e,a=!1){if(!e||typeof window>"u")return;const r=352,n=a?620:430,o=window.innerWidth,i=window.innerHeight,l=Math.min(Math.max(e.x-r/2,8),Math.max(8,o-r-8));let s=e.y+10;return s+n>i-8&&(s=Math.max(8,e.y-n-14)),s<8&&(s=8),{left:l,top:s}}function zd(){const{st:e,dispatch:a,byId:r,t:n,lang:o,caps:i,mode:l,askEvaluate:s,doAnalyse:c,doDecide:g,doPromote:d,doRepeche:x,doApproach:m,doDeep:h,doOnboard:p,outbound:v,evalBusy:y}=V(),f=e.popupId?r.get(e.popupId):null;if(!f)return null;const k=Me(f),j=ze(f),w=wt(f),N=ia(f),z=f.kind==="target",S=q=>{a({type:"filters",patch:q}),a({type:"popup",id:null})};return _t.createPortal(t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:Sd}),t.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),t.jsxs("div",{className:"pop on "+(e.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:Cd(e.popupAnchor,!!f.card),onClick:q=>q.stopPropagation(),children:[t.jsxs("div",{className:"ph",children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h3",{children:f.name}),t.jsx("span",{className:"id",children:n.detected(n.daysAgo(ht(f.date)),Ke(f.engine,o))})]}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),t.jsxs("div",{className:"pb",children:[t.jsxs("div",{className:"tags",children:[f.cc&&t.jsx("button",{type:"button",className:"hi",onClick:()=>S({country:[f.cc]}),children:($t(f.cc,o)||f.countryLabel||"").toUpperCase()}),f.sector&&t.jsx("button",{type:"button",onClick:()=>S({sector:[f.sector]}),children:f.sector.toUpperCase()}),f.stage&&t.jsx("button",{type:"button",onClick:()=>S({stage:[f.stage]}),children:f.stage.toUpperCase()}),typeof f.amountEur=="number"&&f.amountEur>0&&t.jsx("span",{className:"am2",children:Ut(f.amountEur,o)})]}),i.pipe&&z&&t.jsxs("div",{className:"pstat",children:[N&&t.jsx("span",{className:"vd "+(N==="MATCH"?"v-ok":"v-no"),title:n.vt[N],children:N}),w&&t.jsx("span",{className:"vd v-cons",title:n.vt[w],children:w}),t.jsx("span",{className:"pstep",children:n.plabels[j]}),f.ceoStatus&&t.jsx("span",{className:"pstep own",children:f.ceoStatus})]}),(f.tagline||f.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:f.tagline||f.headline})]}),t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.how}),t.jsxs("p",{children:[zt(f.engine)," ",t.jsx("b",{children:Ke(f.engine,o)})," — ",Mi(f.engine,o),f.noteTitle&&t.jsxs(t.Fragment,{children:[" · ",f.noteTitle]})]}),k?t.jsxs("p",{className:"psig",style:{marginTop:9},children:[t.jsx(yt,{o:f,lg:!0})," ",t.jsx(Ia,{o:f,src:!0}),t.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[n.signaledOn(no(k,o))," · ",n.win7(ro(k,o))]})]}):t.jsx("p",{className:"pnos",style:{marginTop:5},children:n.noSignal})]}),f.card?t.jsx(sa,{spec:f.card}):null,f.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:i.pipe&&j>=1?n.verdictCap:n.memo}),t.jsx("p",{className:"memo",children:f.reasoning})]}),i.pipe&&z&&w&&t.jsx("div",{className:"fld",children:t.jsxs("p",{style:{fontWeight:700},children:[w,typeof f.score=="number"&&f.score>0?" · "+n.score(f.score):""]})}),i.pipe&&z&&t.jsx(Mn,{o:f})]}),t.jsx(Rn,{name:f.name}),t.jsxs("div",{className:"pf",children:[i.lockActions||l!=="client"&&i.pipe?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[t.jsx("span",{className:"fill"}),"🔒 ",n.lockbarCta]}):i.pipe?t.jsxs(t.Fragment,{children:[j===0&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:y,onClick:()=>s(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)]}),j===1&&t.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{c(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actAnalyse]}),j===2&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{d(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actPromote]}),j===3&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{g(f,!0),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actYes]}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{g(f,!1),a({type:"popup",id:null})},children:n.actNo}),Dt(f)&&t.jsx("button",{type:"button",className:"abtn",title:n.memoDeepHint,onClick:()=>{h(f),a({type:"popup",id:null})},children:n.memoDeep})]}),j===4&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{m(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actApproach]}),j===5&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{x(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actRepeche]}),f.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:f.id}),a({type:"popup",id:null})},children:"📄"}),v&&t.jsx("button",{type:"button",className:"abtn",title:n.actOnboardTitle,onClick:()=>{p(f),a({type:"popup",id:null})},children:"🚀"})]}):f.engine==="media"&&f.url&&i.showDemand?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{var q;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:f.url}}))}catch{}a({type:"popup",id:null}),(q=document.querySelector(".atl2 .demand"))==null||q.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rsOpen]}),t.jsx("button",{type:"button",className:"abtn",disabled:y,title:n.evalGoOn(f.name),onClick:()=>s(f),children:"⚡"})]}):t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:y,onClick:()=>s(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)," →"]}),f.website&&t.jsx("a",{className:"psite",href:f.website.startsWith("http")?f.website:"https://"+f.website,target:"_blank",rel:"noopener noreferrer",title:f.website,children:"🌐"})]})]})]}),document.body)}function Ad(){const{lang:e,token:a,dossiers:r,caps:n}=V(),o=a||"home",{names:i,verdicts:l}=u.useMemo(()=>{const c=[],g={};return r.forEach(d=>{d.kind!=="target"||!d.name||(c.push(d.name),g[d.name]=Oi(d)||"")}),{names:c,verdicts:g}},[r]);return{diff:u.useMemo(()=>i.length?Di(o,i,l,e):null,[o,i.length]),names:i,verdicts:l,scope:o,caps:n}}function Td(){const{st:e,dispatch:a,counts:r,t:n,doUndo:o,data:i,dossiers:l,caps:s}=V(),[c,g]=u.useState(!1),[d,x]=u.useState(!1),m=u.useRef(null);u.useEffect(()=>{if(!c)return;const j=w=>{m.current&&!m.current.contains(w.target)&&g(!1)};return document.addEventListener("click",j,!0),()=>document.removeEventListener("click",j,!0)},[c]);const h=[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage],...s.pipe?[["crible",n.sortCrible],["memo",n.sortMemo],["score",n.sortScore]]:[]],p=i.loading&&!l.length,v=u.useRef({});u.useEffect(()=>{v.current={...r}},[r]);const y=j=>{const w=v.current[j],N=w!==void 0?r[j]-w:0;return t.jsxs("button",{type:"button",className:"step"+(j===3&&r[3]>0?" wait":""),style:{"--c":`var(${Zt[j]})`,"--tc":j<=3?"var(--ink)":"#fff"},"aria-selected":e.ptab===j,title:n.phelp[j],onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}a({type:"ptab",tab:j})},children:[t.jsxs("span",{className:"l",children:[n.plabels[j].toUpperCase(),j===3&&r[3]>0&&t.jsx("i",{className:"wd"})]}),t.jsxs("span",{className:"n"+(N>0?" up":N<0?" down":""),children:[r[j],N!==0&&t.jsxs("em",{className:"delta",children:[N>0?"+":"−",Math.abs(N)]})]})]},j)},f=(j,w,N)=>t.jsxs("button",{type:"button",className:"off"+(w?" view":""),style:{"--c":`var(${Zt[j]})`},"aria-selected":e.ptab===j,title:n.phelp[j],onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}a({type:"ptab",tab:j})},children:[t.jsx("span",{className:"l",children:N.toUpperCase()}),t.jsx("span",{className:"n",children:r[j]})]},j),k=(j,w,N,z=!1)=>t.jsx("button",{type:"button",className:"tool",title:w,disabled:z,onClick:N,children:j},w);return t.jsxs("div",{className:"funnel"+(p?" waiting":""),children:[t.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(y)}),t.jsxs("div",{className:"offtrack",children:[f(5,!1,n.plabels[5]),f(7,!0,n.plabels[7]),f(6,!0,"★ "+n.plabels[6])]}),t.jsxs("span",{className:"ftools",style:{marginLeft:"auto"},children:[k("↩",n.toolUndo,o,e.undo.length===0),t.jsx("button",{type:"button",className:"tool"+(d?" spin":""),title:n.toolReset,onClick:()=>{a({type:"reset"});try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}x(!0),window.setTimeout(()=>x(!1),600)},children:"↺"}),t.jsxs("span",{className:"fsort",ref:m,children:[t.jsx("button",{type:"button",className:"tool","aria-pressed":c,title:n.toolSort,onClick:()=>g(j=>!j),children:"⇅"}),c&&t.jsx("span",{className:"sortmenu",role:"listbox",children:h.map(([j,w])=>t.jsxs("button",{type:"button",role:"option","aria-selected":e.sort.key===j,className:"sortopt"+(e.sort.key===j?" on":""),onClick:()=>a({type:"sort",key:j}),children:[w,t.jsx("i",{children:e.sort.key===j?e.sort.dir===1?"↑":"↓":""})]},j))})]}),k("▶",n.toolTuto,()=>a({type:"modal",modal:"tuto"})),k("⚙",n.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}function qd(){const{st:e,dispatch:a,t:r,scoped:n,memoQueued:o,doAnalyse:i,mode:l}=V(),s=u.useRef(null),[c,g]=u.useState(60);u.useEffect(()=>{let p=0;const v=()=>{var w;const y=s.current;if(!y)return;const f=(w=y.parentElement)==null?void 0:w.querySelector('.funnel [aria-selected="true"]');if(!f)return;const k=f.getBoundingClientRect(),j=y.getBoundingClientRect();g(Math.max(20,Math.min(k.left+k.width/2-j.left,j.width-30)))};return p=requestAnimationFrame(v),window.addEventListener("resize",v),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",v)}},[e.ptab]);const d=e.ptab;let x=r.tuto[d].p;if(d===3){const p=n.filter(f=>f.kind==="target"&&ze(f)===3),v=p.filter(f=>on(f)==="auto").length,y=p.filter(f=>on(f)==="cd").length;x=r.tutoPending(v,y,p.length)}const m=(()=>{if(l!=="client")return null;if(d===0&&n.length)return{label:r.tuto[0].a,run:()=>a({type:"chainStart",queue:n.map(p=>p.id)})};if(d===1){const p=n.filter(v=>v.kind==="target"&&ze(v)===1&&!o.has(v.id)).slice(0,10);if(p.length)return{label:r.tuto[1].a,run:()=>a({type:"chainStart",queue:p.map(v=>v.id)})}}return null})(),h=Ii(d);return t.jsxs("div",{ref:s,className:"tuto mini"+(h?"":" on-dark"),style:{"--bg":`var(${Zt[d]})`,"--ax":c+"px","--stc":h?"var(--ink)":"#fff","--stt":h?"#fff":"var(--ink)","--tc":h?"var(--ink)":"#fff"},children:[t.jsx("span",{className:"txt",children:t.jsxs("p",{children:[t.jsx("b",{className:"tstep",children:r.plabels[d].toUpperCase()}),t.jsx("span",{className:"tbody",dangerouslySetInnerHTML:{__html:x}})]})}),m&&t.jsx("button",{type:"button",className:"tprim",onClick:m.run,children:m.label})]})}const an=600,St=62,Vr="atl2:fstats";function Ld(){const{t:e,lang:a,data:r,caps:n,st:o,dispatch:i}=V(),[l,s]=u.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem(Vr)==="on"}catch{return!1}}),c=r.stats,g=u.useMemo(()=>((c==null?void 0:c.by_day)||[]).slice(-30),[c]),d=(c==null?void 0:c.since)||"";if(!n.showFunnel||!c||typeof c.screened!="number")return null;const x=N=>a==="en"?N.slice(5,10):`${N.slice(8,10)}/${N.slice(5,7)}`,m=N=>N.toLocaleString(a==="en"?"en-US":"fr-FR"),h=g.reduce((N,z)=>Math.max(N,z.s||0),0),p=g.length?an/g.length:0,v=Math.max(4,p-4),y=g.length>=5&&h>0,f=r.marketEstimate||0,k=x(new Date().toISOString().slice(0,10)),j=N=>[...typeof N=="number"?[[N,e.funScreened("","")]]:[],...typeof c.kept=="number"?[[c.kept,e.funKept]]:[],...typeof c.analyzed=="number"?[[c.analyzed,e.funAnalyzed]]:[],...typeof c.shown=="number"?[[c.shown,e.funShown]]:[]],w=[];return typeof c.screened_window=="number"&&d&&w.push({cle:"fenetre",periode:e.funPerWindow(x(d),k),etapes:[[c.screened_window,e.funScreened("","")]]}),typeof c.screened=="number"&&w.push({cle:"total",periode:e.funPerAll,etapes:j(c.screened)}),t.jsxs("div",{className:"fstats"+(l?" on":""),children:[w.map(N=>t.jsxs("div",{className:"fst-row fst-lab",title:e.funScope,children:[t.jsx("span",{className:"fst-per",children:N.periode}),N.etapes.map(([z,S],q)=>t.jsxs("span",{className:"fst-t",children:[q>0&&t.jsx("span",{className:"fst-ar",children:"→"}),t.jsx("b",{children:m(z)}),t.jsx("i",{children:S})]},N.cle+S)),N.cle==="total"&&f>0&&t.jsxs("span",{className:"fst-t fst-mkt",children:[t.jsx("span",{className:"fst-ar",children:"·"}),t.jsx("i",{children:e.funOfMarket(m(f),Math.min(100,Math.round((c.screened||0)/f*100)))})]}),N.cle===w[w.length-1].cle&&y&&t.jsx("button",{type:"button",className:"fst-x","aria-expanded":l,title:l?e.fstatsHide:e.fstatsShow,onClick:()=>{const z=!l;s(z),z&&!o.mapFolded&&i({type:"mapFold",folded:!0});try{localStorage.setItem(Vr,z?"on":"off")}catch{}},children:l?"⌃":"⌄"})]},N.cle)),l&&y&&t.jsxs("div",{className:"fst-act",children:[t.jsxs("div",{className:"fst-ah",children:[t.jsx("span",{children:e.actTitle}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#185c38"}}),e.actKept]}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#cfe0d6"}}),e.actScreened]})]}),t.jsxs("svg",{viewBox:`0 0 ${an} ${St}`,preserveAspectRatio:"none",role:"img","aria-label":e.actTitle,children:[g.map((N,z)=>{const S=(N.s||0)/h*(St-4),q=(N.m||0)/h*(St-4),A=z*p+(p-v)/2;return t.jsxs("g",{children:[t.jsx("title",{children:`${x(N.d)} — ${N.s} ${e.actScreened} · ${N.m} ${e.actKept}`}),t.jsx("rect",{x:A,y:St-2-S,width:v,height:S,fill:"#cfe0d6"}),t.jsx("rect",{x:A,y:St-2-q,width:v,height:q,fill:"#185c38"})]},N.d)}),t.jsx("line",{x1:0,y1:St-1.5,x2:an,y2:St-1.5,stroke:"#dbe5df",strokeWidth:1})]}),t.jsxs("div",{className:"fst-ax",children:[t.jsx("span",{children:x(g[0].d)}),t.jsx("span",{children:e.actToday})]})]})]})}const Bo={"CALL PENDING":"call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function On({o:e,locked:a=!1}){const{t:r}=V(),n=ia(e),o=wt(e),i=ze(e),l=on(e),s=Pi(e);return t.jsxs("span",{className:"c-vd",children:[n?t.jsx("span",{className:"vd "+(n==="MATCH"?"v-ok":"v-no"),title:r.vt[n],children:n}):t.jsx("span",{className:"vd wait",children:r.actToEval}),o?t.jsx("span",{className:"vd "+(Bo[o]||"v-cons"),title:r.vt[o],children:o}):i===1?t.jsx("span",{className:"vd wait",children:r.actMemoQueue}):null,i===3&&l==="auto"&&t.jsx("span",{className:"org au",title:r.orgAutoTitle,children:r.orgAuto}),i===3&&l==="cd"&&t.jsx("span",{className:"org cd",title:r.orgCdTitle,children:r.orgCd}),i===3&&s!==null&&t.jsx("span",{className:"wait2 "+(s>10?"hot":s>=5?"warm":""),title:r.waitTitle(s),children:r.waitChip(s)}),!a&&t.jsx(el,{o:e})]})}const Bt=e=>e.length>22?e.slice(0,21)+"…":e;function oa(e){const a=(e.url||"").trim(),r=[e.headline,e.tagline].filter(n=>n&&n!==e.name).join(`
`);if(!(!a&&!r))try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:a,text:r}}))}catch{}}function _o(){let e=0;return document.querySelectorAll("body.pp-desk .pph, body.pp-desk .pp-nav, body.pp-desk .pp-band, .atl2.ops .eval-stick, .atl2.ops .listhead, .atl2.cibles .eval-stick, .atl2.cibles .listhead").forEach(a=>{const r=a.getBoundingClientRect();r.height<4||r.top<window.innerHeight*.55&&r.bottom>e&&(e=r.bottom)}),e}function Fd({on:e,rev:a}){const[r,n]=u.useState(null),[o,i]=u.useState({top:0,left:0,width:0});return u.useEffect(()=>{if(!e){n(null);return}const l=()=>{var p,v,y;const s=document.querySelector(".atl2.ops .desk-list"),c=document.querySelector(".atl2.ops .listhead");if(!s){n(null);return}const g=s.getBoundingClientRect(),d=c?c.getBoundingClientRect().bottom:g.top;i({top:Math.round(d),left:Math.round(g.left),width:Math.round(g.width)});const x=[...s.querySelectorAll(":scope .grp")];let m=null;for(const f of x){const k=f.querySelector(".grp-h");k&&k.getBoundingClientRect().bottom<=d+2&&(m=f)}if(!m){n(null);return}const h=m.querySelector(".grp-h");if(!h){n(null);return}n({ic:(((p=h.querySelector(".ic"))==null?void 0:p.textContent)||"").trim(),t:(((v=h.querySelector(".t"))==null?void 0:v.textContent)||"").trim(),s:(((y=h.querySelector(".s"))==null?void 0:y.textContent)||"").trim()})};return l(),window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}},[e,a]),!e||!r||o.width<80?null:t.jsxs("div",{className:"grp-pin",style:{top:o.top,left:o.left,width:o.width},children:[t.jsx("span",{className:"ic",children:r.ic}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:r.t}),t.jsx("div",{className:"s",children:r.s})]})]})}function Rd(e){const r=()=>{const n=_o(),o=e.getBoundingClientRect().top-n-8;Math.abs(o)<2||window.scrollBy({top:o,left:0,behavior:"auto"})};r(),requestAnimationFrame(()=>requestAnimationFrame(r))}function Wr({o:e}){const{t:a,askEvaluate:r,evalBusy:n,lang:o}=V(),[i,l]=u.useState(!1);if(u.useEffect(()=>{n||l(!1)},[n]),Ie(e)){const g=(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("span",{className:"verdict",style:{"--c":g?"var(--brand)":"var(--red)"},title:e.reasoning||"",children:[g?"✓":"✗"," ",t.jsx("b",{children:g?a.kept:a.dropped}),typeof e.score=="number"&&e.score>0?" "+e.score:""]})}const c=i&&n;return t.jsxs("button",{type:"button",className:"rev"+(c?" loading":""),disabled:n,title:a.evalGoOn(e.name),onClick:g=>{g.stopPropagation(),l(!0),r(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(Bt(e.name))})]})}function Dn({o:e}){const{t:a,caps:r,memoQueued:n,approachDone:o,doAnalyse:i,doDecide:l,doPromote:s,doRepeche:c,doApproach:g,dispatch:d,liveMemos:x}=V(),m=p=>v=>{v.stopPropagation(),p()};if(r.lockActions){const p=m(()=>d({type:"modal",modal:"rdv"}));if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",onClick:p,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});const v=ze(e);return v===0?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",onClick:p,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(Bt(e.name))})]})}):v===1?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",onClick:p,children:a.actAnalyse})}):v===3?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",onClick:p,children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",onClick:p,children:a.actNo})]})}):v===2?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"promo",onClick:p,children:a.actPromote})}):v===4?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",onClick:p,children:a.actApproach})}):v===5?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"promo",onClick:p,children:a.actRepeche})}):t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn read",onClick:p,children:a.actMemoOf(e.memoType)})})}if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:p=>{p.stopPropagation(),oa(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});if(Sa(e)&&e.url)return t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:p=>{p.stopPropagation(),oa(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})});if(!r.pipe)return e.noCo?t.jsx("span",{className:"cell"}):t.jsx("span",{className:"cell",children:t.jsx(Wr,{o:e})});const h=ze(e);if(h===0)return t.jsx("span",{className:"cell",children:t.jsx(Wr,{o:e})});if(h===1){const p=x.liveOf(e.name);if(p&&(p.status==="boot"||p.status==="running"))return t.jsx("span",{className:"cell",children:t.jsx(Na,{item:p,serverOff:x.serverOff,bootLbl:a.liveBoot,endLabel:a.liveEnd})});const v=n.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",disabled:v,onClick:m(()=>i(e)),children:v?a.actAnalyseQueued:a.actAnalyse})})}if(h===3)return t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:m(()=>l(e,!0)),children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:m(()=>l(e,!1)),children:a.actNo}),e.memoUrl&&t.jsxs("button",{type:"button",className:"memobtn read sm",title:a.actMemoOf(e.memoType),onClick:m(()=>d({type:"memoConsole",id:e.id})),children:["📄",t.jsx("span",{className:"mlbl",children:a.actMemoOf(e.memoType).replace("📖 "," ")})]})]})});if(h===4){const p=o.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",disabled:p,onClick:m(()=>g(e)),children:p?a.actApproachSent:a.actApproach})})}return h===2?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:m(()=>s(e)),children:a.actPromote}),e.memoUrl&&t.jsxs("button",{type:"button",className:"memobtn read sm",title:a.actMemoOf(e.memoType),onClick:m(()=>d({type:"memoConsole",id:e.id})),children:["📄",t.jsx("span",{className:"mlbl",children:a.actMemoOf(e.memoType).replace("📖 "," ")})]})]})}):h===5?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:m(()=>c(e)),children:a.actRepeche}),e.memoUrl&&t.jsxs("button",{type:"button",className:"memobtn read sm",title:a.actMemoOf(e.memoType),onClick:m(()=>d({type:"memoConsole",id:e.id})),children:["📄",t.jsx("span",{className:"mlbl",children:a.actMemoOf(e.memoType).replace("📖 "," ")})]})]})}):t.jsx("span",{className:"cell",children:e.memoUrl?t.jsx("button",{type:"button",className:"memobtn read",onClick:m(()=>d({type:"memoConsole",id:e.id})),children:a.actMemoOf(e.memoType)}):t.jsx("span",{className:"rc",children:"—"})})}function Md({o:e}){const{t:a,doThumb:r,thumbOf:n}=V(),o=n(e);return t.jsxs("span",{className:"thu",children:[t.jsx("button",{type:"button",className:"tb up"+(o==="yes"?" on":""),title:a.thumbUp,onClick:i=>{i.stopPropagation(),r(e,!0)},children:"👍"}),t.jsx("button",{type:"button",className:"tb dn"+(o==="no"?" on":""),title:a.thumbDn,onClick:i=>{i.stopPropagation(),r(e,!1)},children:"👎"})]})}function Od({o:e}){const{lang:a}=V();return Me(e)?t.jsxs("span",{className:"c-sig",children:[t.jsx(yt,{o:e}),t.jsx(Ia,{o:e,src:!0})]}):t.jsx("span",{className:"c-sig",children:t.jsxs("span",{className:"mo",children:[zt(e.engine||"")," ",Ke(e.engine||"",a)]})})}function Dd({o:e,locked:a,open:r,onToggle:n,selected:o,echo:i,onSelect:l,fresh:s}){const{dispatch:c,caps:g,markRow:d,markedId:x,favIds:m,toggleFav:h,t:p}=V(),v=ze(e),y=["#0F172A","#475C6E","#8798A8","#B9C6D2"],f=e.date?Math.max(0,Math.floor((Date.now()-Date.parse(e.date))/864e5)):9999,k=f<=0?0:f<=7?1:f<=30?2:3,j=g.pipe&&e.kind==="target"?["#94A3B8","#9BD1B4","#5FB98C","#2E9A66","#0A6B3D","#E2A5A5"][v]:y[k],w=m.has(e.id),N=z=>{if(a)return;if(l){l(e.id);return}if(g.pipe||e.kind==="op"){n();return}const S=z.currentTarget.getBoundingClientRect();c({type:"popup",id:e.id,anchor:{x:S.left+Math.min(280,S.width/3),y:S.bottom}})};return t.jsxs(u.Fragment,{children:[t.jsxs("div",{className:"row"+(x===e.id||r||o?" on":"")+(r?" open":"")+(o?" sel":"")+(i?" echo":"")+(g.pipe&&e.kind==="target"?" p"+v:"")+(w?" fav":"")+(a?" tzr":""),"aria-selected":o||void 0,onMouseEnter:()=>d(e.id),onMouseLeave:()=>d(null),onClick:N,children:[t.jsx("span",{className:"pt",style:{"--c":j}}),t.jsx(Wo,{o:e}),t.jsxs("span",{className:"nd",children:[s&&t.jsx("span",{className:"rfresh",children:"✨"}),Me(e)&&t.jsx(yt,{o:e}),t.jsxs("span",{className:"rnm"+(a?" nmx":""),title:a?void 0:e.name,children:[g.pipe&&t.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:w?1:.35,padding:0,marginRight:4},onClick:z=>{z.stopPropagation(),h(e)},children:w?"★":"☆"}),e.name]}),t.jsxs("span",{className:"rds",title:e.tagline||e.headline||"",children:[Ve(e)&&(e.date||"").slice(0,10)&&t.jsx("b",{className:"rdate",children:(e.date||"").slice(0,10).split("-").reverse().slice(0,2).join("/")}),[e.tagline,e.headline,e.reasoning].find(z=>z&&z!==e.name)||""]}),e.acquirer&&t.jsxs("button",{type:"button",className:"racq",title:p.acqSee(e.acquirer),onClick:z=>{z.stopPropagation(),c({type:"acquirer",value:e.acquirer||""})},children:["← ",Bt(e.acquirer)]}),We(e)?t.jsx("span",{className:"rdec",title:p.doEdito,children:"📖"}):e.decryptHtml?t.jsx("span",{className:"rdec",title:p.zoomNewsMark,children:"📰"}):null]}),t.jsx(Id,{o:e}),t.jsx("span",{className:"c-stade",children:e.stage||""}),t.jsx(Od,{o:e}),g.pipe&&t.jsx(On,{o:e,locked:a}),g.pipe&&t.jsxs("span",{className:"c-sc",children:[typeof e.score=="number"?e.score:"",typeof e.score=="number"&&t.jsx("s",{children:"/100"})]}),t.jsx(Dn,{o:e}),g.showThumbs&&t.jsx(Md,{o:e})]}),r&&!a&&!l&&t.jsx(_d,{o:e})]})}function Id({o:e}){const{lang:a,caps:r}=V();if(r.pipe&&e.kind==="target")return t.jsx("span",{className:"c-amt none",children:"—"});const n=Ut(e.amountEur,a);return t.jsx("span",{className:"c-amt"+(n?"":" none"),children:n||"—"})}function Pd({o:e}){const{t:a,lang:r,askEvaluate:n,evalBusy:o,dispatch:i}=V(),l=(m,h=!1)=>p=>{p.stopPropagation(),h&&i({type:"continent",key:"monde"}),i({type:"filters",patch:m})},s=(()=>{const m=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return m?m[1].slice(0,40):""})(),c=Ut(e.amountEur,r),g=(e.date||"").slice(0,10).split("-").reverse().join("/"),d=Ie(e),x=d&&(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("div",{className:"card ops-open",children:[t.jsxs("div",{className:"oc-main",children:[e.decryptHtml?t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}):t.jsx("p",{className:"oc-head",children:e.headline||e.tagline||e.name}),t.jsxs("div",{className:"oc-meta",children:[e.sector&&t.jsx("button",{type:"button",onClick:l({sector:[e.sector]}),children:e.sector}),e.countryLabel&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:l({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:l({stage:[e.stage]}),children:e.stage}),c&&t.jsx("span",{className:"oc-amt",children:c}),g&&t.jsx("span",{children:g})]}),t.jsxs("div",{className:"oc-acts",children:[d?t.jsxs("span",{className:"verdict",style:{"--c":x?"var(--brand)":"var(--red)"},children:[x?"✓":"✗"," ",t.jsx("b",{children:x?a.kept:a.dropped})]}):Ve(e)?e.url&&t.jsx("button",{type:"button",className:"oc-cta",onClick:m=>{m.stopPropagation(),oa(e)},children:a.rowExtract}):t.jsx("button",{type:"button",className:"oc-cta",disabled:o,onClick:m=>{m.stopPropagation(),n(e)},children:a.evalGoOn(Bt(e.name))}),e.url&&t.jsxs("a",{className:"oc-src",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:m=>m.stopPropagation(),children:[(r==="fr"?"lire la source":"read the source")+(s?` · ${s}`:"")," ↗"]})]})]}),e.card&&t.jsx("div",{className:"oc-side",children:t.jsx(sa,{spec:e.card})})]})}function Bd({o:e}){const{t:a,lang:r,caps:n,dispatch:o}=V();if(!e)return t.jsx("p",{className:"readpane-empty",children:r==="fr"?"Cliquez une ligne — le dossier s’ouvre ici, sans quitter la liste.":"Click a row — the file opens here, without leaving the list."});const i=(e.date||"").slice(0,10).split("-").reverse().join("/");return t.jsxs("div",{className:"zoom zoom-pipe",children:[t.jsxs("div",{className:"zoom-k",children:[Ke(e.engine||"",r),i?` · ${i}`:""]}),t.jsx("h3",{className:"zoom-h",children:e.name}),(e.sector||e.countryLabel||e.stage)&&t.jsxs("div",{className:"zoom-meta",children:[e.sector?t.jsx("span",{children:e.sector}):null,e.countryLabel?t.jsx("span",{children:e.countryLabel}):null,e.stage?t.jsx("span",{children:e.stage}):null]}),t.jsx("div",{className:"zoom-cta",children:n.lockActions?t.jsx("button",{type:"button",className:"oc-cta",onClick:()=>o({type:"modal",modal:"rdv"}),children:a.lockbarCta}):t.jsx(Dn,{o:e})}),t.jsx(Mn,{o:e})]})}function $o({o:e,extra:a}){const{t:r,lang:n,askEvaluate:o,evalBusy:i,dispatch:l,caps:s,dossiers:c}=V(),g=u.useRef(null),d=We(e);if(u.useEffect(()=>{if(!d||!(e!=null&&e.decryptHtml))return;const b=g.current;if(!b)return;let T=!1;return nn(()=>import("./fit-BnaWm7z_.js"),[]).then(async $=>{await $.ensureEditoCss(),!(T||!b.isConnected)&&($.beautifyEditoRows(b),$.mountCardFits(b))}),()=>{T=!0}},[d,e==null?void 0:e.decryptHtml]),!e&&!a){const b=c.find(We);if(b)return t.jsx($o,{o:b})}const x=((e==null?void 0:e.name)||(a==null?void 0:a.name)||"").trim(),m=((e==null?void 0:e.url)||(a==null?void 0:a.url)||"").trim(),h=(e==null?void 0:e.headline)||(e==null?void 0:e.tagline)||(a==null?void 0:a.headline)||x,p=(e==null?void 0:e.card)||(a==null?void 0:a.card),v=e?!!e.noCo:!x||Ea(x),y=(e==null?void 0:e.engine)||"",f=We(e),k=e?Ut(e.amountEur,n):"",j=((e==null?void 0:e.date)||"").slice(0,10).split("-").reverse().join("/"),w=(()=>{const b=/https?:\/\/(?:www\.)?([^/]+)/.exec(m);return b?b[1].replace(/^www\./,"").slice(0,40):""})(),N=c.find(We),z=((N==null?void 0:N.url)||"").trim(),S=!!m&&!!z&&(m===z||m.endsWith(z)||z.endsWith(m)),q=(b,T=!1)=>$=>{$.stopPropagation(),T&&l({type:"continent",key:"monde"}),l({type:"filters",patch:b})};if(!e&&!a)return t.jsx("p",{className:"readpane-empty",children:n==="fr"?"Cliquez une ligne, un pin ou le ticker — le dossier s’ouvre ici.":"Click a row, a pin or the ticker — the file opens here."});const A=()=>{x&&(l({type:"continent",key:"monde"}),l({type:"filters",patch:{search:x}}))},F=()=>{e!=null&&e.sector&&l({type:"filters",patch:{sector:[e.sector]}})},D=()=>{oa({url:m,headline:h,tagline:e==null?void 0:e.tagline,name:x})},P=e?Ie(e):!1,L=P&&e&&(e.verdict||"").toUpperCase()!=="NO MATCH",R=f?r.doEdito.replace(/^📖\s*/,""):y?Ke(y,n):n==="fr"?"Dossier":"File";return t.jsxs("div",{className:"zoom",children:[t.jsxs("div",{className:"zoom-k",children:[R,j?` · ${j}`:""]}),t.jsx("h3",{className:"zoom-h",children:h}),m&&!f&&(v||Sa({engine:y}))&&t.jsxs("a",{className:"zoom-ext",href:m,target:"_blank",rel:"noopener noreferrer",title:r.viewLinkHint,onClick:b=>b.stopPropagation(),children:[t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]}),r.viewLink,w?t.jsx("em",{children:w}):null]}),(e==null?void 0:e.decryptHtml)&&t.jsx("div",{ref:g,className:"ed-decrypt-b zoom-body"+(f?" ppart":""),dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsxs("div",{className:"zoom-meta",children:[(e==null?void 0:e.sector)&&t.jsx("button",{type:"button",onClick:q({sector:[e.sector]}),children:e.sector}),(e==null?void 0:e.countryLabel)&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:q({country:[e.cc]},!0),children:e.countryLabel}):e!=null&&e.countryLabel?t.jsx("span",{children:e.countryLabel}):null),(e==null?void 0:e.stage)&&t.jsx("button",{type:"button",onClick:q({stage:[e.stage]}),children:e.stage}),k&&t.jsx("span",{className:"oc-amt",children:k})]}),p&&t.jsx("div",{className:"zoom-card",children:t.jsx(sa,{spec:p})}),(m&&!S&&!f||N&&!f)&&t.jsxs("div",{className:"zoom-srcbox",children:[m&&!S&&!f&&t.jsxs("a",{className:"zoom-src",href:m,target:"_blank",rel:"nofollow noopener",onClick:b=>b.stopPropagation(),children:[r.zoomSrc,w?` · ${w}`:""," ↗"]}),N&&!f&&t.jsxs("button",{type:"button",className:"zoom-src zoom-src-art",onClick:b=>{b.stopPropagation(),l({type:"focus",id:N.id})},children:[r.doEdito," →"]})]}),t.jsxs("div",{className:"zoom-acts",children:[P?t.jsxs("span",{className:"verdict",style:{"--c":L?"var(--brand)":"var(--red)"},children:[L?"✓":"✗"," ",t.jsx("b",{children:L?r.kept:r.dropped})]}):!v&&x?t.jsxs("button",{type:"button",className:"zp-go",disabled:i,onClick:b=>{b.stopPropagation(),o(e,x)},children:[t.jsx("span",{className:"zp-ico",children:"⚡"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.evalGoOn(Bt(x))}),t.jsx("em",{children:r.zoomEvalHint})]})]}):null,m&&!f&&(v||Sa({engine:y}))&&t.jsxs("button",{type:"button",className:"zp-go"+(!v&&x?" ghost":""),onClick:b=>{b.stopPropagation(),D()},children:[t.jsx("span",{className:"zp-ico",children:"🔎"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.rowExtract}),t.jsx("em",{children:r.rsOpen})]})]}),!v&&x&&t.jsxs("div",{className:"zp-row",children:[(e==null?void 0:e.sector)&&!s.pipe&&t.jsxs("button",{type:"button",className:"zp-sec",onClick:b=>{b.stopPropagation(),F()},children:[t.jsx("span",{className:"zp-k",children:r.zoomSimilar}),t.jsx("span",{className:"zp-v",children:e.sector}),t.jsx("em",{children:r.zoomSimilarHint})]}),t.jsxs("button",{type:"button",className:"zp-sec",onClick:b=>{b.stopPropagation(),A()},children:[t.jsx("span",{className:"zp-k",children:r.zoomInCockpit}),t.jsx("span",{className:"zp-v",children:Bt(x)}),t.jsx("em",{children:r.zoomIsolateHint})]})]}),!v&&x&&s.pipe&&t.jsx(Rn,{name:x})]})]})}function _d({o:e}){const{t:a,lang:r,dispatch:n,caps:o,outbound:i,doOnboard:l}=V();return!o.pipe&&e.kind==="op"?t.jsx(Pd,{o:e}):t.jsxs("div",{className:"card",style:{display:"grid"},children:[t.jsxs("div",{children:[e.tagline&&t.jsx("p",{className:"lead",children:e.tagline}),e.decryptHtml&&t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsx(Mn,{o:e}),t.jsx(tl,{o:e}),t.jsx(rl,{o:e}),t.jsx(Rn,{name:e.name}),t.jsxs("div",{className:"tg",children:[e.sector&&t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"filters",patch:{sector:[e.sector]}})},children:e.sector}),e.stage&&t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"filters",patch:{stage:[e.stage]}})},children:e.stage}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"continent",key:"monde"}),n({type:"filters",patch:{country:[e.cc]}})},children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.city&&t.jsx("span",{children:e.city})]})]}),t.jsxs("div",{className:"cside",children:[t.jsxs("div",{className:"top",children:[typeof e.score=="number"&&t.jsx("span",{className:"sc3",children:e.score}),t.jsx("span",{className:"vv",children:t.jsx(On,{o:e})})]}),e.card&&t.jsx(sa,{spec:e.card}),t.jsxs("div",{className:"sec2",children:[t.jsxs("div",{className:"k2",children:[zt(e.engine||"")," ",Ke(e.engine||"",r)]}),Me(e)&&t.jsx("div",{style:{marginTop:8},children:t.jsx(yt,{o:e})})]}),o.pipe&&(e.memoUrl||i)&&t.jsx("div",{className:"sec2 acts2",children:i&&t.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>l(e),children:a.actOnboard})})]})]})}function $d({o:e,locked:a,selected:r,onSelect:n}){const{t:o,dispatch:i,caps:l,doDecide:s,lang:c}=V();if(!l.pipe&&e.kind==="op"){const x=Ut(e.amountEur,c),m=(()=>{const p=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return p?p[1].slice(0,32):""})(),h=(p,v=!1)=>y=>{y.stopPropagation(),v&&i({type:"continent",key:"monde"}),i({type:"filters",patch:p})};return t.jsxs("div",{className:"dcard dops"+(a?" tzr":"")+(r?" sel":""),onClick:()=>{!a&&n&&n(e.id)},children:[e.card&&t.jsx("div",{className:"dimg",children:t.jsx(sa,{spec:e.card})}),t.jsxs("div",{className:"dh",children:[t.jsx("span",{className:"dnm",title:e.name,children:e.name}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial",children:"📖"})]}),e.headline&&e.headline!==e.name&&t.jsx("div",{className:"ddesc",children:e.headline}),t.jsxs("div",{className:"dtags",children:[e.sector&&t.jsx("button",{type:"button",onClick:h({sector:[e.sector]}),children:e.sector}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:h({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:h({stage:[e.stage]}),children:e.stage}),x&&t.jsx("span",{className:"damt",children:x})]}),t.jsxs("div",{className:"dsig",children:[t.jsxs("span",{className:"dmo",children:[zt(e.engine||"")," ",Ke(e.engine||"",c)]}),Me(e)&&t.jsx(yt,{o:e})]}),e.url&&t.jsxs("a",{className:"dsrc",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:p=>p.stopPropagation(),children:[(c==="fr"?"lire la source":"read the source")+(m?` · ${m}`:"")," ↗"]}),!a&&t.jsx("div",{className:"dact",children:t.jsx(Dn,{o:e})})]})}const g=ze(e),d=["#E7EBF0","#E7F3EC","#C4E0D0","#7FC0A0","#0E8A4F","#DC2626"][g];return t.jsxs("div",{className:"dcard"+(a?" tzr":"")+(r?" sel":""),style:{"--c":d},onClick:()=>{!a&&n&&n(e.id)},children:[t.jsxs("div",{className:"dh",children:[typeof e.score=="number"&&t.jsx("span",{className:"dsc",children:e.score}),t.jsx("span",{className:"dnm",title:e.name,children:e.name})]}),t.jsxs("div",{className:"dv",children:[t.jsx(On,{o:e}),Me(e)&&t.jsx(yt,{o:e})]}),t.jsx("div",{className:"dmeta",children:[e.countryLabel,e.stage,e.sector].filter(Boolean).join(" · ").toUpperCase()}),(e.tagline||e.reasoning)&&t.jsx("div",{className:"ddesc",children:e.tagline||e.reasoning}),!a&&l.pipe&&g===3&&t.jsxs("div",{className:"dyn",children:[t.jsx("button",{type:"button",style:{"--c3":"#0A6B3D"},onClick:()=>s(e,!0),children:o.actYes}),t.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>s(e,!1),children:o.actNo})]}),!a&&e.memoUrl&&t.jsxs("button",{type:"button",className:"dmemo",onClick:()=>i({type:"memoConsole",id:e.id}),children:[o.actMemoOf(e.memoType)," →"]})]})}function Ud(){const{t:e}=V(),[a,r]=u.useState(0);return u.useEffect(()=>{const n=window.setInterval(()=>r(o=>o+1),2400);return()=>window.clearInterval(n)},[]),t.jsxs("div",{className:"loadwait","aria-live":"polite",children:[t.jsxs("div",{className:"lw-top",children:[t.jsx("span",{className:"lw-dot"}),t.jsx("span",{className:"lw-msg",children:e.loadMsgs[a%e.loadMsgs.length]})]}),[0,1,2,3,4,5].map(n=>t.jsxs("div",{className:"lw-row",style:{"--d":`${n*.12}s`},children:[t.jsx("span",{className:"lw-c lw-c1"}),t.jsx("span",{className:"lw-c lw-c2"}),t.jsx("span",{className:"lw-c lw-c3"})]},n))]})}function Hd({counts:e}){const{st:a,dispatch:r,t:n,lang:o}=V(),i=o==="en",l=d=>n.plabels[d]||"",s=[0,1,2,3,4,5,6,7].filter(d=>d!==a.ptab&&(e[d]||0)>0),c=s.includes(0)?0:s.sort((d,x)=>(e[x]||0)-(e[d]||0))[0];if(c===void 0)return t.jsx("div",{className:"void",children:n.emptyTab});const g=e[c]||0;return t.jsxs("div",{className:"void void-empty",children:[t.jsx("b",{children:i?`No “${l(a.ptab)}” for now.`:`0 ${l(a.ptab).toLowerCase().replace(/s$/,"")} pour l’instant.`}),t.jsx("span",{children:c===0?i?`${g} ${g>1?"files are":"file is"} waiting for your screening`:`${g} dossier${g>1?"s":""} attende${g>1?"nt":""} votre évaluation`:i?`${g} ${g>1?"files":"file"} in “${l(c)}”`:`${g} dossier${g>1?"s":""} dans « ${l(c)} »`}),t.jsxs("button",{type:"button",className:"abtn",onClick:()=>r({type:"ptab",tab:c}),children:[(i?"Open ":"Ouvrir ")+l(c)," →"]})]})}function Vd(){var bt,Ft,Nt,Fe,nt;const e=V(),{st:a,dispatch:r,t:n,caps:o,counts:i,scoped:l,scopedAll:s,markRow:c,lang:g,sessTally:d,data:x,dossiers:m,source:h,focusExtra:p,byId:v,token:y}=e,f=so(),k=u.useMemo(()=>{var U,ae,ye,M;if(!y||h==="ops")return null;const C=(((U=f==null?void 0:f.ed)==null?void 0:U.date)||(f==null?void 0:f.day)||"").slice(0,10),B=[(ae=f==null?void 0:f.ed)==null?void 0:ae.html,(ye=f==null?void 0:f.ed)==null?void 0:ye.acquirers_html].filter(Boolean).join("");return{id:"edito:brief",kind:"op",name:g==="en"?"Today's brief":"Brief du jour",headline:g==="en"?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",tagline:((M=f==null?void 0:f.ed)==null?void 0:M.date)||C,decryptHtml:B||void 0,date:C,engine:"edito",dealKind:"other",noCo:!0,cc:null,continent:null}},[y,h,g,(bt=f==null?void 0:f.ed)==null?void 0:bt.html,(Ft=f==null?void 0:f.ed)==null?void 0:Ft.acquirers_html,(Nt=f==null?void 0:f.ed)==null?void 0:Nt.date,f==null?void 0:f.day]),j=C=>o.lockRowsAfter!==null||h==="ops"||o.pipe?Number.MAX_SAFE_INTEGER:io,[w,N]=u.useState(new Set);u.useEffect(()=>{N(new Set)},[a.ptab,a.continent]);const[z,S]=u.useState(null);u.useEffect(()=>{S(null)},[a.ptab,a.continent]);const[q,A]=u.useState(!a.mapFolded);u.useEffect(()=>{if(a.mapFolded){A(!1);return}const C=document.getElementById("atl2-stage");if(!C){A(!1);return}const B=new IntersectionObserver(([U])=>A(!!U&&U.isIntersecting),{root:null,rootMargin:"-120px 0px 0px 0px",threshold:0});return B.observe(C),()=>B.disconnect()},[a.mapFolded]);const F=a.mapFolded||!q,D=C=>N(B=>{const U=new Set(B);return U.has(C)?U.delete(C):U.add(C),U}),P=h==="ops"||o.pipe,[L,R]=u.useState("all"),[b,T]=u.useState(!1),[$,X]=u.useState(null),[I,O]=u.useState(!1),Q=u.useRef(!0);u.useEffect(()=>{if(Q.current){Q.current=!1;return}R("all"),O(!1)},[a.ptab,a.continent]),u.useEffect(()=>{if(!I)return;const C=B=>{var U,ae;(ae=(U=B.target)==null?void 0:U.closest)!=null&&ae.call(U,".atl2 .doable")||O(!1)};return document.addEventListener("click",C,!0),()=>document.removeEventListener("click",C,!0)},[I]);const Y=u.useMemo(()=>{var B;const C=new Map;for(const U of Bs(((B=f==null?void 0:f.ed)==null?void 0:B.html)||""))C.has(U.t)||C.set(U.t,U.html);return C},[(Fe=f==null?void 0:f.ed)==null?void 0:Fe.html]),K=u.useCallback(C=>{if(C.decryptHtml)return C.decryptHtml;if(!Y.size)return;const B=(C.name||"").trim().toLowerCase();if(B.length<3)return;const U=Y.get(B);if(U)return U;for(const[ae,ye]of Y)if(ae.includes(B)||B.includes(ae))return ye},[Y]),{diff:J}=Ad(),[ge,W]=u.useState(!1),ce=a.filters.win==="1"&&!a.filters.day,[le,be]=u.useState(!1),me=u.useMemo(()=>new Set(((J==null?void 0:J.added)||[]).map(C=>C.trim().toLowerCase()).filter(Boolean)),[J]),de=u.useMemo(()=>{if(!me.size)return 0;const C={...a,filters:{...a.filters,win:"all",day:"",signalOnly:!1,signalEngines:[]}};return m.filter(B=>!We(B)&&me.has((B.name||"").trim().toLowerCase())&&ea(B,C,o.pipe)).length},[m,me,a,o.pipe]);u.useEffect(()=>{const C=()=>{be(!1),T(!1),R("all"),O(!1),r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})};return window.addEventListener("ppmap:tunnel",C),()=>window.removeEventListener("ppmap:tunnel",C)},[]),u.useEffect(()=>{be(!1),T(!1),a.filters.signalOnly&&r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})},[a.ptab]);const pe=u.useMemo(()=>{const C=s.filter(U=>!We(U)&&Ve(U));let B="";for(const U of C){const ae=(U.date||"").slice(0,10);ae&&(!B||ae<B)&&(B=ae)}return{n:C.length,since:B?B.split("-").reverse().slice(0,2).join("/"):""}},[s]),xe=pe.n,H=u.useMemo(()=>{const B=le&&me.size>0||a.filters.signalOnly||L!=="all"||b?s:l;let U=An(B,a.sort);return U=U.filter(ae=>!We(ae)),le&&me.size&&(U=U.filter(ae=>me.has((ae.name||"").trim().toLowerCase()))),b||L==="explore"?U=U.filter(Ve):L==="eval"?U=U.filter(ae=>!Ve(ae)&&!ae.noCo&&(ae.kind==="op"||!Ie(ae))):o.pipe&&(U=U.filter(ae=>!Ve(ae))),U},[l,s,a.sort,L,le,me,b,o.pipe]),fe=u.useMemo(()=>o.pipe?m.filter(C=>C.kind==="target"&&!We(C)&&Me(C)&&(a.continent==="monde"||C.continent===a.continent)):H.filter(C=>Me(C)&&!Ie(C)),[o.pipe,m,H,a.continent]).length,ke=u.useMemo(()=>o.pipe?H:H.filter(C=>!Ie(C)&&!C.noCo&&!Ve(C)),[H,o.pipe]),ne=h==="ops"?H.filter(Ve).length:0,ve=le?"":o.pipe?n.plabels[a.ptab].toLowerCase():h==="ops"?n.edLabel:a.filters.status==="retenu"?n.keptByStan:a.filters.status==="ecarte"?n.droppedByStan:n.toSend,oe=a.filters,Ee=[];if(oe.day)Ee.push({k:"day",lib:n.fDay(oe.day.slice(8,10)+"/"+oe.day.slice(5,7)),off:()=>r({type:"filters",patch:{day:"",win:"all"}})});else if(oe.win&&oe.win!=="all"){const C=["1","7","30"].indexOf(oe.win);C>=0&&Ee.push({k:"win",lib:n.dates[C],off:()=>r({type:"filters",patch:{win:"all"}})})}const Qe=C=>C.length<=2?C.join(", "):`${C.length} ${n.fSelected}`;for(const C of["sector","country","engine"]){const B=oe[C];B&&B.length&&Ee.push({k:C,lib:Qe(B),off:()=>r({type:"clearFacet",facet:C})})}oe.search&&Ee.push({k:"search",lib:"🔍 "+oe.search,off:()=>r({type:"filters",patch:{search:""}})}),le&&me.size&&Ee.push({k:"since",lib:"✨ "+n.sinceChip,off:()=>be(!1)}),oe.signalOnly&&Ee.push({k:"sig",lib:"🔴 "+n.sigDock(fe||oe.signalEngines.length||0),off:()=>r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})});const he=(C,B,U="",ae=!1)=>t.jsxs("button",{type:"button","data-s":C,className:U,"aria-sort":a.sort.key===C?a.sort.dir===1?"ascending":"descending":"none",style:ae?{justifyContent:"flex-end"}:void 0,onClick:()=>r({type:"sort",key:C}),children:[B,t.jsx("span",{className:"ar",children:a.sort.key===C&&a.sort.dir===1?"▴":"▾"})]},C),Se=u.useMemo(()=>{if(o.pipe||a.groupBy==="none")return null;const C=new Map;H.forEach(ae=>{const ye=ae.engine||"?";C.has(ye)||C.set(ye,[]),C.get(ye).push(ae)});const B={ma:0,fundraising:1,partenariats:2,produits:3,regul:4,marche:5,nominations:6,recrutements:7,evenements:8,listes:9,tribunes:10,media:11,edito:12},U=rn([...C.keys()],g);return[...C.entries()].sort((ae,ye)=>{const M=B[ae[0]]??10+U.indexOf(ae[0]),ee=B[ye[0]]??10+U.indexOf(ye[0]);return M-ee})},[H,o.pipe,a.groupBy,g]),Lt=Se?Se.filter(([C])=>ya.has(C)).length:0,Pe=(()=>{var B;return((B=(Se?Se.flatMap(([,U])=>U):H)[0])==null?void 0:B.id)??null})(),Je=u.useRef(!1),Te=u.useMemo(()=>m.find(We)||k,[m,k]);u.useEffect(()=>{const C=()=>{Je.current=!0,be(!1)};return window.addEventListener("ppmap:reveal",C),window.addEventListener("ppmap:focus",C),()=>{window.removeEventListener("ppmap:reveal",C),window.removeEventListener("ppmap:focus",C)}},[]),u.useEffect(()=>{const C=()=>{Te&&r({type:"focus",id:Te.id})};return window.addEventListener("ppmap:edito",C),()=>window.removeEventListener("ppmap:edito",C)},[Te,r]),u.useEffect(()=>{if(!a.focusId)return;X(a.focusId);const C=window.setTimeout(()=>X(null),900);return()=>window.clearTimeout(C)},[a.focusId]),u.useEffect(()=>{if(P&&!(a.focusId&&(H.some(C=>C.id===a.focusId)||m.some(C=>C.id===a.focusId)||a.focusId===(Te==null?void 0:Te.id)))&&!p){if(Te){r({type:"focus",id:Te.id});return}Pe&&r({type:"focus",id:Pe})}},[P,a.focusId,H,Pe,p,r,m,h,Te]),u.useEffect(()=>{if(!P||!a.focusId||Te&&a.focusId===Te.id||H.some(B=>B.id===a.focusId))return;const C=m.find(B=>B.id===a.focusId);if(C){if(Je.current){C.kind==="op"?R(Ve(C)?"explore":"eval"):L!=="all"&&R("all");return}L!=="all"&&Pe&&r({type:"focus",id:Pe})}},[P,a.focusId,L,H,m,Pe,r,Te]),u.useEffect(()=>{if(!P||!a.focusId||!Je.current)return;const C=document.querySelector(".atl2.ops .row.sel, .atl2.ops .dcard.sel, .atl2.cibles .row.sel, .atl2.cibles .dcard.sel");if(!C){const ye=H.findIndex(M=>M.id===a.focusId);if(ye>=0){const M=Se?"":"pt"+a.ptab;if(M){const ee=a.shown[M]||j();ye>=ee&&r({type:"more",group:M,by:ye-ee+8})}}return}Je.current=!1;const B=_o(),U=C.getBoundingClientRect();U.top>=B-2&&U.bottom<=window.innerHeight-4||Rd(C)},[P,a.focusId,a.ptab,H,a.shown,Se,r]),u.useEffect(()=>{if(typeof window>"u")return;const C=document.querySelector(".atl2.ops .listhead, .atl2.cibles .listhead"),B=document.querySelector(".atl2.ops, .atl2.cibles");if(!C||!B)return;const U=()=>B.style.setProperty("--listhead-h",`${C.offsetHeight}px`);U();const ae=new ResizeObserver(U);return ae.observe(C),()=>ae.disconnect()},[F,a.dens,a.mapFolded]);const it=u.useMemo(()=>{if(!P||!a.focusId)return null;if(k&&a.focusId===k.id)return k;const C=H.find(U=>U.id===a.focusId)||m.find(U=>U.id===a.focusId)||null;if(!C)return null;const B=K(C);return B&&B!==C.decryptHtml?{...C,decryptHtml:B}:C},[P,a.focusId,H,m,K,k]),kt=o.lockRowsAfter;let Oe=0;const xt=(C,B)=>{let U=a.shown[B]||j();return C.length-U<=4&&(U=C.length),C.slice(0,U).map(M=>{const ee=kt!==null&&Oe>=kt;Oe++;const ie=K(M),Z=ie&&ie!==M.decryptHtml?{...M,decryptHtml:ie}:M,je=!P&&a.dens!=="maxi"&&(a.dens==="deplie"||(z?z==="open":!!ie)),De=w.has(M.id)?!je:je,$e=P?Ae=>{Je.current=!0,r({type:"focus",id:Ae});const Ue=v.get(Ae);Ue&&(Ve(Ue)?oa(Ue):Ue.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:Ue.name,url:Ue.url||"",website:Ue.website||"",domain:Ue.domain||""}})))}:void 0;return a.dens==="maxi"?t.jsx($d,{o:Z,locked:ee,selected:P&&a.focusId===M.id,onSelect:$e},M.id):t.jsx(Dd,{o:Z,locked:ee,open:De,onToggle:()=>D(M.id),selected:P&&a.focusId===M.id,echo:$===M.id,fresh:me.has((M.name||"").trim().toLowerCase()),onSelect:$e},M.id)})},ut="list"+(a.dens==="maxi"?" maxi":a.dens==="ligne"||a.dens==="deplie"?" ligne":"")+(h==="ops"?" opsl":"")+(H.length?"":" list-empty"),Xe=t.jsxs(t.Fragment,{children:[Se?Se.map(([C,B])=>t.jsxs("div",{className:"grp",children:[t.jsxs("div",{className:"grp-h",children:[t.jsx("span",{className:"ic",children:zt(C)}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:C==="ma"?n.grpMa:C==="fundraising"?n.grpLev:ya.has(C)&&Lt<=1?n.grpNews:C==="nominations"?n.grpNom:C==="media"?n.grpNewsOther:C==="recrutements"?n.grpHire:ya.has(C)?n.grpNews+" · "+Ke(C,g):Ke(C,g)}),t.jsx("div",{className:"s",children:n.grpCount(B.filter(U=>!Ie(U)).length,B.length)})]})]}),xt(B,C)]},C)):xt(H,"pt"+a.ptab),x.loading&&!m.length&&t.jsx(Ud,{}),o.pipe&&a.ptab===0&&!b&&!le&&L==="all"&&!a.filters.signalOnly&&!x.loading&&t.jsx(Oo,{}),!H.length&&!(x.loading&&!m.length)&&(o.pipe&&L==="all"?t.jsx(Hd,{counts:i}):t.jsx("div",{className:"void",children:n.emptyScope}))]}),jt=t.jsxs(t.Fragment,{children:[!le&&!b&&t.jsxs("span",{className:"main",children:[t.jsx("b",{className:"tn",style:{"--c":"var("+Zt[a.ptab]+")"},children:H.length})," ",ve]}),b&&t.jsxs("span",{className:"main",children:[t.jsx("b",{className:"tn",style:{"--c":"var("+Zt[a.ptab]+")"},children:H.length})," ",n.newsWord]}),(!le||b)&&t.jsx("span",{className:"dot",children:"·"}),F&&t.jsx(Ro,{variant:"compact",mapToggle:!!a.mapFolded}),t.jsxs("span",{className:"ctx",children:[F?o.pipe&&e.fund?e.fund:null:t.jsxs(t.Fragment,{children:[e.contName,o.pipe&&e.fund?" · "+e.fund:""]}),Ee.map(C=>t.jsxs("button",{type:"button",className:"fpuce",title:n.filterOff,onClick:B=>{B.stopPropagation(),C.off()},children:[C.lib,t.jsx("i",{children:"×"})]},C.k)),h==="ops"&&H.length>0&&!F&&t.jsxs("span",{className:"edsplit",children:[" — ","⚡ ",H.length-ne," ",n.zoomPulseEval,ne>0?t.jsxs(t.Fragment,{children:[" · 🔎 ",ne," ",n.zoomPulseExplore]}):null]})]}),a.filters.acquirer.trim()&&t.jsxs("span",{className:"acqchip",children:["🏢 ",n.acqOn(a.filters.acquirer),t.jsx("button",{type:"button",title:n.acqClear,onClick:()=>r({type:"acquirer",value:""}),children:"✕"})]})]}),gt=t.jsxs("div",{className:"listhead"+(F?" mapoff":""),children:[F&&t.jsx("div",{className:"lh-tools",children:t.jsx(Fo,{compact:!0})}),o.showFunnel&&ge&&ce&&t.jsxs("div",{className:"lh-stats",children:[t.jsx(il,{}),t.jsx(Ld,{})]}),o.showFunnel&&t.jsx("div",{className:"lh-title",children:jt}),o.showFunnel&&t.jsxs("div",{className:"lh-funnel",children:[t.jsx(Td,{}),t.jsx(qd,{})]}),t.jsxs("div",{className:"lh-top",children:[o.showFunnel&&t.jsxs("div",{className:"lh-dock",children:[t.jsxs("button",{type:"button",className:"dockbtn"+(ce?" on":""),"aria-pressed":ce,title:n.morningDockTitle,onClick:()=>{if(ce){r({type:"filters",patch:{win:"all",day:""}}),W(!1);return}be(!1),T(!1),R("all"),r({type:"filters",patch:{win:"1",day:"",signalOnly:!1,signalEngines:[]}}),r({type:"ptab",tab:7}),W(!0)},children:["📊 ",n.morningDock(typeof((nt=x.stats)==null?void 0:nt.screened_today)=="number"?x.stats.screened_today:0)]}),J&&!J.firstVisit&&(J.added.length>0||J.gone.length>0)&&t.jsxs("button",{type:"button",className:"dockbtn since"+(le?" on":""),"aria-pressed":le,title:n.sinceSub,onClick:()=>{const C=!le;be(C),T(!1),W(!1),R("all"),C&&r({type:"filters",patch:{win:"all",day:"",signalOnly:!1,signalEngines:[]}})},children:["✨ ",n.sinceDock(de),J!=null&&J.lastDate?` · ${n.sinceSince(J.lastDate)}`:""]}),fe>0&&t.jsxs("button",{type:"button",className:"dockbtn sig"+(a.filters.signalOnly?" on":""),"aria-pressed":a.filters.signalOnly,onClick:()=>{be(!1),T(!1),W(!1),R("all"),r({type:"filters",patch:{signalOnly:!a.filters.signalOnly,signalEngines:[],win:"all",day:""}})},children:["🔴 ",n.sigDock(fe)]}),o.pipe&&xe>0&&t.jsxs("button",{type:"button",className:"dockbtn news"+(b?" on":""),"aria-pressed":b,title:n.newsDockHint,onClick:()=>{const C=!b;T(C),be(!1),W(!1),R("all"),C&&r({type:"filters",patch:{win:"all",day:"",signalOnly:!1,signalEngines:[]}})},children:["📰 ",n.newsDock(xe),pe.since?` · ${n.newsSince(pe.since)}`:""]})]}),!o.showFunnel&&jt,o.showGroupBar&&t.jsxs("span",{className:"groupbar",children:[t.jsx("span",{className:"gl",children:n.groupBy}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>r({type:"groupBy",groupBy:"engine"}),children:n.groupEngine}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>r({type:"groupBy",groupBy:"none"}),children:n.groupNone})]}),a.pileMode&&t.jsx("button",{type:"button",className:"exitpile",onClick:()=>r({type:"pile",on:!1}),children:n.exitPile}),t.jsxs("span",{className:"lh-acts",children:[(o.showFunnel||h==="ops")&&t.jsx("span",{className:"dens",children:[["liste",n.densList],["ligne",n.densLigne],["maxi",n.densMaxi]].map(([C,B])=>t.jsxs("button",{type:"button","data-d":C,"aria-pressed":a.dens===C||C==="ligne"&&a.dens==="deplie",onClick:()=>r({type:"dens",dens:C}),children:[t.jsx("i",{children:t.jsx("em",{})}),t.jsx("b",{children:B})]},C))}),!P&&o.showFunnel&&a.dens!=="maxi"&&t.jsxs("span",{className:"foldall",children:[t.jsx("button",{type:"button","aria-pressed":z==="open",onClick:()=>{S("open"),N(new Set)},children:n.unfoldAll}),t.jsx("button",{type:"button","aria-pressed":z==="closed",onClick:()=>{S("closed"),N(new Set)},children:n.foldAllLbl})]}),(o.showFunnel||h==="ops")&&(()=>{var ie;const C={...a,filters:{...a.filters,signalOnly:!1,signalEngines:[],...o.pipe?{win:"all",day:""}:{}}},B=m.filter(Z=>ea(Z,C,o.pipe)&&!We(Z)),U=B.filter(Z=>!Ve(Z)&&!Z.noCo&&(Z.kind==="op"||!Ie(Z))).length,ae=B.filter(Ve).length,ye=o.pipe?B.filter(Z=>Z.kind!=="op"&&ze(Z)===1).length:0,M=[["all",n.doAll],...o.pipe?[["analyser",`${n.doAna}${ye?` ${ye}`:""}`]]:[],["eval",`${n.doEval}${U?` ${U}`:""}`],["explore",`${n.doExplore}${ae?` ${ae}`:""}`]],ee=((ie=M.find(([Z])=>Z===L))==null?void 0:ie[1])||n.doAll;return t.jsxs("span",{className:"doable",children:[t.jsxs("button",{type:"button",className:"dobtn","aria-expanded":I,onClick:()=>O(Z=>!Z),children:[ee,t.jsx("i",{children:"▾"})]}),I&&t.jsx("div",{className:"dolist",children:M.map(([Z,je])=>t.jsx("button",{type:"button","aria-pressed":L===Z,onClick:()=>{if(O(!1),Z==="analyser"){window.dispatchEvent(new CustomEvent("ppmap:tunnel")),r({type:"ptab",tab:1});return}R(Z),Z!=="all"&&(be(!1),T(!1),W(!1),r({type:"filters",patch:{signalOnly:!1,signalEngines:[],...o.pipe?{win:"all",day:""}:{}}}))},children:je},Z))})]})})(),a.dens==="maxi"&&t.jsxs("label",{className:"sortsel",children:[t.jsx("span",{children:n.sortBy}),t.jsx("select",{value:a.sort.key,onChange:C=>r({type:"sort",key:C.target.value}),children:[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage],...o.pipe?[["crible",n.sortCrible],["memo",n.sortMemo],["score",n.sortScore]]:[]].map(([C,B])=>t.jsx("option",{value:C,children:B},C))})]}),o.showChain&&ke.length>0&&t.jsxs("span",{className:"chainwrap",children:[t.jsxs("button",{type:"button",className:"chain",title:n.chainHint,onClick:()=>r({type:"chainStart",queue:ke.map(C=>C.id)}),children:[t.jsx("span",{className:"b",children:"▶"})," ",o.pipe?n.browse(ke.length):n.chainAll(ke.length)]}),t.jsx("em",{className:"chainhint",children:n.chainHint})]})]})]})]});return t.jsxs(t.Fragment,{children:[!P&&gt,a.dens!=="maxi"&&!P&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),he("country",n.colCountry),he("name",n.colCompany),he("amount",n.colAmount,"h-amt",!0),he("stage",n.colStage,"h-stade"),he("signal",n.colSignal,"h-sig"),o.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[he("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),he("memo",n.colMemo)]}),o.pipe&&he("score",n.colScore,"h-sc",!0),t.jsx("span",{}),o.showThumbs&&t.jsx("span",{className:"h-thu",children:n.colThumbs})]}),P?t.jsxs("div",{className:"desk",children:[t.jsxs("div",{className:"desk-list",children:[gt,a.dens==="liste"&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),he("country",n.colCountry),he("name",n.colCompany),o.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[he("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),he("memo",n.colMemo)]}),t.jsx("span",{})]}),t.jsx("div",{className:ut,children:Xe})]}),t.jsxs("aside",{className:"readpane"+((it?We(it):!p&&Te)?" is-edito":""),"aria-label":g==="fr"?"Dossier":"File",children:[Te&&t.jsx("button",{type:"button",className:"edito-go pane-edito","aria-pressed":a.focusId===Te.id,onClick:()=>r({type:"focus",id:Te.id}),children:n.doEdito}),k&&a.focusId===k.id?t.jsx("div",{className:"zoom",children:t.jsx(Vs,{})}):it&&o.pipe?t.jsx(Bd,{o:it}):t.jsx($o,{o:it,extra:it?null:p})]})]}):t.jsx("div",{className:ut,children:Xe}),(()=>{const C=Se||[["pt"+a.ptab,H]];let B=0,U=0;for(const[ye,M]of C){U+=M.length;let ee=a.shown[ye]||j();M.length-ee<=4&&(ee=M.length),B+=Math.min(M.length,ee)}const ae=U-B;return ae<=0?null:t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>C.forEach(([ye,M])=>r({type:"more",group:ye,by:M.length,base:j()})),children:[t.jsx("span",{className:"more-label",children:n.more(ae,ae)}),t.jsx("span",{className:"more-meta",children:n.moreMeta(B,U)})]})})(),o.showThumbs&&t.jsxs("p",{className:"learn",children:[n.learnLine,t.jsx("button",{type:"button",onClick:()=>r({type:"modal",modal:"crit"}),children:n.learnLink})]}),(d.kept>0||d.dropped>0)&&t.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:n.session(d.kept,d.dropped)}}),P&&h==="ops"&&a.dens!=="maxi"&&t.jsx(Fd,{on:!!Se,rev:(Se||[]).map(([C,B])=>C+B.length).join("|")})]})}function Gr(e){let a=e==null?"":String(e);return/^[=+\-@\t]/.test(a)&&(a=`'${a}`),/[";\n\r]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}function Wd(e,a){const r=Bi(e);return a[{retenu:1,ana:2,pending:3,valide:4,ecarte:5}[r]??1]||""}function Gd(e,a){const n=[a.head.split("|").map(Gr).join(";")];for(const o of e){const i=a.stageOf(o);n.push([o.name||"",Wd(o,a.plabels),ia(o)||o.verdict||"",typeof o.score=="number"?o.score:"",o.countryLabel||o.cc||"",o.sector||"",i?a.stageLabel(i.stage):"",o.contactName||"",o.contactEmail||"",o.memoUrl||"",(o.date||"").slice(0,10),(o.reasoning||"").replace(/\s+/g," ").trim().slice(0,280)].map(Gr).join(";"))}return`\uFEFF${n.join(`\r
`)}`}function Yd(e){const a=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=`cibles_vue_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(n),n.click(),window.setTimeout(()=>{URL.revokeObjectURL(r);try{document.body.removeChild(n)}catch{}},400)}const Kd=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function dt({k:e,v:a}){return a==null||a===""?null:t.jsxs("div",{className:"dsl",children:[t.jsx("span",{children:e}),t.jsx("b",{children:String(a)})]})}function Qd({o:e,qa:a}){const{t:r,lang:n,fund:o}=V(),i=(e.cribleStatus||"").trim().toUpperCase()||(ia(e)==="NO MATCH"?"NO MATCH":"MATCH"),l=wt(e),s=(a==null?void 0:a.blocs)||{},c=[[r.qaVP,s.value_prop],[r.qaProduct,s.produit],[r.qaModel,s.modele],[r.qaSummary,s.synthese]];return t.jsxs("article",{className:"dspage",children:[t.jsxs("header",{className:"dsh",children:[t.jsxs("div",{children:[t.jsx("b",{children:e.name}),e.tagline&&t.jsx("p",{children:e.tagline})]}),t.jsxs("span",{className:"dsv"+(i==="NO MATCH"?" out":""),children:[i==="NO MATCH"?r.vOut:r.vKept,l&&t.jsx("em",{children:l})]})]}),e.reasoning&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsWhy}),t.jsx("p",{className:"dstxt",children:e.reasoning})]}),t.jsxs("section",{className:"dsgrid",children:[t.jsx(dt,{k:r.cdSector,v:e.sector}),t.jsx(dt,{k:r.cdStage,v:e.stage}),t.jsx(dt,{k:r.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(dt,{k:r.cdSite,v:e.domain||e.website}),t.jsx(dt,{k:r.cdName,v:e.contactName}),t.jsx(dt,{k:r.cdEmail,v:e.contactEmail}),t.jsx(dt,{k:r.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(dt,{k:r.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(dt,{k:r.cdAngle,v:e.angle}),t.jsx(dt,{k:r.cdDetected,v:Kd(e.date,n)})]}),c.some(([,g])=>g)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsAnalysis}),c.filter(([,g])=>g).map(([g,d])=>t.jsxs("div",{className:"dsb",children:[t.jsx("span",{children:g}),t.jsx("p",{children:d})]},g))]}),(e.ceoStatus||e.ceoNote)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsDecision}),e.ceoStatus&&t.jsx("p",{className:"dstxt",children:t.jsx("b",{children:e.ceoStatus})}),e.ceoNote&&t.jsxs("p",{className:"dstxt",children:["« ",e.ceoNote," »"]})]}),t.jsx("footer",{className:"dsf",children:r.dsFoot(o)})]})}function Jd(){const{t:e,lang:a,token:r,scoped:n,fund:o,data:i,dispatch:l}=V(),[s,c]=u.useState({}),g=25,d=u.useMemo(()=>n.slice(0,g),[n]);u.useEffect(()=>{d.length&&ao(r,d.map(h=>h.name)).then(c)},[r,d]);const x=i.stats,m=h=>h.toLocaleString(a==="en"?"en-US":"fr-FR");return t.jsxs("div",{className:"dossier",children:[t.jsxs("div",{className:"dsbar",children:[t.jsx("b",{children:e.dsTitle(d.length)}),n.length>g&&t.jsx("span",{className:"mnote dim",children:e.dsCap(g,n.length)}),t.jsx("span",{className:"dssp"}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{l({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)},children:e.printBtn})]}),t.jsxs("div",{className:"dscover",children:[t.jsx("b",{children:o}),x&&typeof x.screened=="number"&&t.jsxs("p",{children:[m(x.screened)," ",e.funScreened(""),typeof x.kept=="number"&&t.jsxs(t.Fragment,{children:[" · ",m(x.kept)," ",e.covKept]}),typeof i.marketEstimate=="number"&&i.marketEstimate>0&&t.jsxs(t.Fragment,{children:[" · ",e.covOf(m(i.marketEstimate)),", ",Math.round(x.screened/i.marketEstimate*100)," %"]})]})]}),d.map(h=>t.jsx(Qd,{o:h,qa:s[h.name]},h.id)),!d.length&&t.jsx("p",{className:"mnote",children:e.dsEmpty})]})}const Xd=50;function In({label:e,onPreview:a,onTest:r,readOnly:n}){const{t:o}=V(),[i,l]=u.useState(null),[s,c]=u.useState(!1),[g,d]=u.useState(""),[x,m]=u.useState(0),[h,p]=u.useState(""),[v,y]=u.useState(!1),[f,k]=u.useState(0),j=u.useRef(null),w=u.useRef(null),N=()=>{k(0),w.current&&window.clearInterval(w.current),w.current=window.setInterval(()=>k(A=>A+1),1e3)},z=()=>{w.current&&(window.clearInterval(w.current),w.current=null)};u.useEffect(()=>()=>{j.current&&window.clearInterval(j.current),w.current&&window.clearInterval(w.current)},[]);const S=async A=>{c(!0),d(""),N();const F=await a();if(c(!1),z(),F.ok){l(F);return}if(F.busy){d(o.alertPreviewBusy);return}if(!A){d(o.alertPreviewFail);return}m(Xd),z(),j.current=window.setInterval(()=>{m(D=>D>1?D-1:(j.current&&window.clearInterval(j.current),S(!1),0))},1e3)},q=async()=>{if(n||v||s)return;y(!0),p(""),N();const A=await r();y(!1),z(),p(A.ok?o.alertTestOk(A.sentTo||""):A.error||o.actErr)};return t.jsxs("div",{className:"mailp",children:[t.jsxs("div",{className:"mailp-row",children:[t.jsx("button",{type:"button",className:"abtn",disabled:s||v||x>0,onClick:()=>{S(!0)},children:s?o.alertBtnPrevBusy:e}),t.jsx("button",{type:"button",className:"abtn",disabled:n||v||s,onClick:()=>{q()},children:v?o.alertBtnTestBusy:o.alertTest})]}),s&&t.jsxs("p",{className:"mnote qwait",children:[t.jsx("i",{className:"qwd"}),o.alertPreviewWait(f)]}),v&&t.jsxs("p",{className:"mnote qwait",children:[t.jsx("i",{className:"qwd"}),o.alertTestWait(f)]}),x>0&&t.jsx("p",{className:"mnote",children:o.alertPreviewRetry(x)}),g&&t.jsx("p",{className:"mnote warn",children:g}),h&&t.jsx("p",{className:"mnote",children:h}),!h&&t.jsx("p",{className:"mnote dim",children:o.alertTestHint}),(i==null?void 0:i.ok)&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mnote",children:[t.jsx("b",{children:o.alertSubject})," ",i.subject]}),i.pending===0&&t.jsx("p",{className:"mnote warn",children:o.alertPreviewEmpty}),t.jsx("iframe",{className:"mailp-frame",sandbox:"",srcDoc:i.html,title:e})]})]})}const Ot="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function Ge({title:e,icon:a,children:r,wide:n}){const{dispatch:o}=V();return _t.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:i=>{i.target===i.currentTarget&&o({type:"modal",modal:null})},children:t.jsxs("div",{className:"mcard",style:n?{width:"min(760px,100%)"}:void 0,children:[t.jsxs("div",{className:"mh",children:[a&&t.jsx("span",{className:"no g",children:a}),t.jsx("h2",{children:e}),t.jsx("button",{type:"button",className:"x",onClick:()=>o({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"mb",children:r})]})})}),document.body)}function Zd(){const{st:e}=V();switch(e.modal){case"chain":return t.jsx(tc,{});case"space":return t.jsx(ac,{});case"alert":return t.jsx(nc,{});case"queue":return t.jsx(lc,{});case"export":return t.jsx(dc,{});case"plug":return t.jsx(uc,{});case"recharge":return t.jsx(fc,{});case"cover":return t.jsx(xc,{});case"dossier":return t.jsx(hc,{});case"crit":return t.jsx(gc,{});case"tuto":return t.jsx(bc,{});case"rdv":return t.jsx(ec,{});case"memoalert":return t.jsx(cc,{});default:return null}}function ec(){const{dispatch:e,fund:a,t:r}=V(),n=a||r.rdvCoFallback;return _t.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:()=>e({type:"modal",modal:null}),children:t.jsxs("div",{className:"mcard rdvcard",onClick:o=>o.stopPropagation(),children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"no g",children:"📅"}),t.jsx("h2",{children:r.rdvHeading}),t.jsx("button",{type:"button",className:"x",onClick:()=>e({type:"modal",modal:null}),children:"×"})]}),t.jsxs("div",{className:"mb",children:[t.jsxs("p",{className:"mnote",children:[r.rdvSubBefore,t.jsx("a",{href:po,children:qn}),r.rdvSubMid,t.jsx("a",{href:`mailto:${za}`,children:za})]}),t.jsx("div",{className:"rdv-unlocks",children:r.rdvUnlocks(n).map(([o,i],l)=>t.jsxs("div",{className:"rdv-u",children:[t.jsx("em",{children:r.rdvUnlockLabel(l+1)}),t.jsx("b",{children:o}),t.jsx("span",{children:i})]},o))}),t.jsx("div",{className:"rdv-emb",children:t.jsx(cs,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0})})]})]})})}),document.body)}function tc(){const{st:e,dispatch:a,byId:r,t:n,lang:o,mode:i,askEvaluate:l,evalBusy:s,caps:c,memoQueued:g,doAnalyse:d}=V(),x=i==="client",m=e.chain.queue.map(y=>r.get(y)).filter(y=>!!y),h=e.chain.idx,p=m[h],v=h>=m.length;return _t.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",children:t.jsxs("div",{className:"fcard",children:[t.jsxs("div",{className:"fh",children:[t.jsx("span",{className:"c",children:v?n.finished:`${h+1} / ${m.length}`}),t.jsx("span",{className:"p",children:t.jsx("i",{style:{width:(v?100:h/Math.max(1,m.length)*100)+"%"}})}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"fb",children:v||!p?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🏁"}),t.jsx("div",{className:"t",children:n.chainDone}),t.jsx("div",{className:"s",children:n.chainDoneSub(m.length)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:p.name}),t.jsx("div",{className:"sub",children:[$t(p.cc,o)||p.countryLabel,p.sector,p.stage,n.daysAgo(ht(p.date))].filter(Boolean).map(y=>String(y).toUpperCase()).join(" · ")}),t.jsxs("div",{className:"tags",children:[t.jsx("span",{className:"hi",children:Ke(p.engine,o).toUpperCase()}),typeof p.amountEur=="number"&&p.amountEur>0&&t.jsx("span",{children:Ut(p.amountEur,o)})]}),Me(p)&&t.jsxs("div",{style:{marginBottom:12},children:[t.jsx(yt,{o:p,lg:!0})," ",t.jsx(Ia,{o:p,src:!0})]}),(p.tagline||p.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:p.tagline||p.headline})]}),p.reasoning&&!(x&&Ie(p))&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.memo}),t.jsx("p",{className:"memo",children:p.reasoning})]}),x&&Ie(p)&&t.jsxs("div",{className:"vbox vfull",style:{"--c":Ct(p)==="retenu"?"var(--brand)":Ct(p)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[t.jsx("span",{className:"vt",children:Ct(p)==="retenu"?"✓ "+n.kept:Ct(p)==="pending"?"📞 "+n.pending:"✗ "+n.dropped}),t.jsx("span",{className:"vd",children:p.reasoning||""})]})]})}),t.jsxs("div",{className:"ff",children:[!v&&p&&c.pipe&&ze(p)===1&&!g.has(p.id)?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{d(p),a({type:"chainNext"})},children:[t.jsx("span",{className:"fill"}),n.chainMemoGo]}):!v&&p&&!(x&&Ie(p))&&(p.noCo&&p.url?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{var y;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:p.url}}))}catch{}a({type:"modal",modal:null}),(y=document.querySelector(".atl2 .demand"))==null||y.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rowExtract]}):t.jsxs("button",{type:"button",className:"evalbtn"+(s?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:s,onClick:()=>{l(p)},children:[t.jsx("span",{className:"fill"}),n.launchEval]})),t.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(v?{type:"modal",modal:null}:{type:"chainNext"}),children:v?n.closeBtn:n.skip})]})]})})}),document.body)}function ac(){const{st:e,dispatch:a,dossiers:r,t:n,mode:o}=V(),i=o==="client",l=u.useMemo(()=>i?r.filter(x=>Ie(x)):[],[r,i]),s=u.useMemo(()=>An(l.filter(x=>Ct(x)==="retenu"),{key:"signal",dir:-1}),[l]),c=u.useMemo(()=>l.filter(x=>Ct(x)==="ecarte"),[l]),g=e.spaceTab==="retenu"?s:c,d=e.spaceTab==="retenu"?"var(--brand)":"var(--red)";return t.jsxs(Ge,{title:n.spaceTitle,children:[t.jsxs("div",{className:"sp-tabs",children:[t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":e.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",n.statusKeep.replace("✅ ","")," ",t.jsx("b",{children:s.length})]}),t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":e.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",n.statusDrop.replace("❌ ","")," ",t.jsx("b",{children:c.length})]})]}),g.length===0&&t.jsx("div",{className:"sp-empty",children:n.spEmpty}),g.slice(0,40).map(x=>t.jsxs("div",{className:"sp-row",children:[t.jsx("span",{className:"sc",style:{"--c":d},children:typeof x.score=="number"&&x.score>0?x.score:"—"}),t.jsxs("span",{children:[t.jsx("div",{className:"nm",children:x.name}),t.jsx("div",{className:"rr",children:x.reasoning||x.tagline||""})]})]},x.id)),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:n.spNote}})]})}function nc(){const{mode:e}=V();return e==="client"||e==="apercu"?t.jsx(rc,{}):t.jsx(sc,{})}function rc(){const{t:e,token:a,flash:r,flashErr:n,mode:o}=V(),[i,l]=u.useState("d"),s=o!=="client";return t.jsxs(Ge,{title:e.alertTitle,icon:"🔔",children:[t.jsxs("div",{className:"ntabs",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":i==="d",className:i==="d"?"on":"",onClick:()=>l("d"),children:e.alertTabDaily}),t.jsx("button",{type:"button",role:"tab","aria-selected":i==="w",className:i==="w"?"on":"",onClick:()=>l("w"),children:e.alertTabWeekly}),t.jsx("button",{type:"button",role:"tab","aria-selected":i==="m",className:i==="m"?"on":"",onClick:()=>l("m"),children:e.alertTabMarket})]}),i==="d"&&t.jsx(oc,{t:e,token:a,readOnly:s,flash:r,flashErr:n}),i==="w"&&t.jsx(ic,{t:e,token:a,readOnly:s,flash:r,flashErr:n}),i==="m"&&t.jsx(Uo,{})]})}function oc({t:e,token:a,readOnly:r,flash:n,flashErr:o}){const[i,l]=u.useState(null),[s,c]=u.useState(!1),[g,d]=u.useState(0);u.useEffect(()=>{let q=!0;return c(!1),Xn(a).then(A=>{q&&(A?l(A):c(!0))}),()=>{q=!1}},[a,g]);const x=u.useRef({}),[m,h]=u.useState({}),[p,v]=u.useState(!1),[y,f]=u.useState(!1),k=u.useRef(null);u.useEffect(()=>()=>{k.current&&window.clearTimeout(k.current)},[]);const j=q=>{const A=x.current;Object.keys(A).length&&(v(!0),Xn(a,A).then(F=>{if(!F){v(!1),o(e.actErr);return}if(F.throttled&&q<3){k.current=window.setTimeout(()=>j(q+1),5400);return}if(x.current={},h({}),l(F),v(!1),F.throttled){o(e.alertThrottled);return}f(!0),window.setTimeout(()=>f(!1),2e3),n(e.alertSaved)}))},w=q=>{r||(x.current={...x.current,...q},h(A=>({...A,...q})),k.current&&window.clearTimeout(k.current),k.current=window.setTimeout(()=>j(1),700))};if(s)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>d(q=>q+1),children:e.retry})]});if(!i)return t.jsx("div",{className:"sp-empty",children:"…"});const N={...i,...m},z=q=>!N.sections||N.sections.includes(q),S=q=>{const A=N.sections||e.alertSec.map(([F])=>F);w({sections:z(q)?A.filter(F=>F!==q):[...A,q]})};return t.jsxs(t.Fragment,{children:[r&&t.jsx("p",{className:"mnote warn",children:e.alertReadOnly}),t.jsxs("div",{className:"qrow",children:[t.jsxs("span",{children:[t.jsx("b",{children:e.alertDaily}),t.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:e.alertDailyHint})]}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":N.enabled===!0,disabled:r,style:N.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>w({enabled:!N.enabled}),children:N.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertHour}),t.jsxs("span",{className:"qset",children:[t.jsx("button",{type:"button",onClick:()=>w({hour:Math.max(6,(N.hour??7)-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[N.hour??7," h"]}),t.jsx("button",{type:"button",onClick:()=>w({hour:Math.min(21,(N.hour??7)+1)}),disabled:r,children:"+"})]})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertDays}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("button",{type:"button",className:"abtn",disabled:r,style:N.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>w({days:"weekdays"}),children:e.alertWeekdays}),t.jsx("button",{type:"button",className:"abtn",disabled:r,style:N.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>w({days:"daily"}),children:e.alertEveryday})]})]}),t.jsxs("div",{className:"qsec ok",children:[e.alertSections,p&&t.jsx("span",{className:"secsave",children:e.alertSaving}),!p&&y&&t.jsx("span",{className:"secsave done",children:e.alertSavedShort})]}),t.jsx("div",{className:"secl",children:e.alertSec.map(([q,A])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:z(q),disabled:r,onChange:()=>S(q)}),t.jsxs("span",{children:[A,q==="market"&&t.jsxs("i",{children:[" ",e.alertSecSlow]})]})]},q))}),t.jsx("p",{className:"mnote dim",children:e.alertSecNote}),t.jsx(In,{label:e.alertPreview,readOnly:r,onPreview:()=>Qi(a),onTest:()=>Ki(a)}),N.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),N.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",N.email_lead,N.last_sent?` · ${e.updatedAt(N.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function ic({t:e,token:a,readOnly:r,flash:n,flashErr:o}){const[i,l]=u.useState(null),[s,c]=u.useState(!1),[g,d]=u.useState(0);u.useEffect(()=>{let p=!0;return c(!1),Zn(a).then(v=>{p&&(v?l(v):c(!0))}),()=>{p=!1}},[a,g]);const x=p=>{r||Zn(a,p).then(v=>{if(!v){o(e.actErr);return}l(v),n(e.alertSaved)})};if(s)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>d(p=>p+1),children:e.retry})]});if(!i)return t.jsx("div",{className:"sp-empty",children:"…"});const m=i.dow??0,h=i.hour??16;return t.jsxs(t.Fragment,{children:[r&&t.jsx("p",{className:"mnote warn",children:e.alertReadOnly}),t.jsx("p",{className:"lead2",children:e.alertWeeklySub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.alertWeeklyOn})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":i.enabled===!0,disabled:r,style:i.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>x({enabled:!i.enabled}),children:i.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertWeeklyWhen}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("select",{value:m,disabled:r,onChange:p=>x({dow:Number(p.target.value)}),children:e.alertDow.map((p,v)=>t.jsx("option",{value:v,children:p},p))}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.max(6,h-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[h," h"]}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.min(21,h+1)}),disabled:r,children:"+"})]})]}),t.jsx(In,{label:e.alertPreviewWeekly,readOnly:r,onPreview:()=>Xi(a),onTest:()=>Ji(a)}),i.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),i.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",i.email_lead,i.last_sent?` · ${e.updatedAt(i.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function Uo(){const{st:e,t:a,lang:r,scoped:n,contName:o,email:i}=V(),[l,s]=u.useState(i||""),[c,g]=u.useState(!1),[d,x]=u.useState(!1);u.useEffect(()=>{i&&s(i)},[i]);const m=e.filters,h=u.useMemo(()=>n.filter(f=>Me(f)).length,[n]),p=m.win==="1"?0:m.win==="7"?1:m.win==="30"?2:3,v=async()=>{if(!(!/.+@.+\..+/.test(l)||d)){x(!0);try{await fetch(`${Da}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.trim(),sectors:m.sector,countries:m.country,source:i?"atelier2-client":"atelier2",website:""})}),g(!0)}finally{x(!1)}}},y=[[a.amRows.continent,o],[a.amRows.since,a.amSince[p]],[a.amRows.signal,m.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,m.engine.length?m.engine.map(f=>Ke(f,r)).join(", "):a.amAllEngines],[a.amRows.sectors,m.sector.length?m.sector.join(", "):a.amAllSectors],[a.amRows.countries,m.country.length?m.country.map(f=>$t(f,r)||f).join(", "):a.amAllCountries],[a.amRows.stages,m.stage.length?m.stage.join(", "):a.amAllStages]];return c?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🔔"}),t.jsx("div",{className:"t",children:a.amOk}),t.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(l)}})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"crit",children:y.map(([f,k])=>t.jsxs("div",{className:"r",children:[t.jsx("span",{className:"k",children:f}),t.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:k}})]},f))}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:l,readOnly:!!i,onChange:f=>s(f.target.value),onKeyDown:f=>{f.key==="Enter"&&v()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(d?" loading":""),style:{padding:"12px 18px"},onClick:()=>void v(),children:[t.jsx("span",{className:"fill"}),a.amActivate]})]}),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(n.length,h)}}),t.jsx("p",{className:"mnote",children:a.amHonest})]})}function sc(){const{t:e}=V();return t.jsx(Ge,{title:e.alertTitle,icon:"🔔",children:t.jsx(Uo,{})})}function lc(){var D,P;const{t:e,token:a,fund:r,mode:n,dossiers:o,doAnalyse:i,memoQueued:l,caps:s,dispatch:c,liveMemos:g}=V(),[d,x]=u.useState(()=>$a(r)),[m,h]=u.useState(()=>!$a(r)),[p,v]=u.useState([]),[y,f]=u.useState(0),k=n==="client",j=u.useMemo(()=>{const L=new Map;return o.forEach(R=>{const b=(R.name||"").trim().toLowerCase();b&&!L.has(b)&&L.set(b,R)}),L},[o]);u.useEffect(()=>{let L=!0;return(!$a(r)||y>0)&&h(!0),(async()=>{const[R,b]=await Promise.all([Sn(r,y>0),Zr(a)]);L&&(R&&x(R),h(!1),v(b))})(),()=>{L=!1}},[a,r,y]);const w=m&&!d,N=(d==null?void 0:d.per_day)??0,z=((D=d==null?void 0:d.analyzed_today)==null?void 0:D.length)??0,S=d==null?void 0:d.offre,q=(d==null?void 0:d.pool_meta)||[],A=u.useMemo(()=>{const L=new Map;for(const R of(d==null?void 0:d.scheduled)||[])for(const b of R.names||[])L.has(b)||L.set(b,{label:R.day_label,date:R.date});return L},[d==null?void 0:d.scheduled]),F=(d==null?void 0:d.in_progress)||[];return t.jsxs(Ge,{title:e.queueTitle,wide:!0,children:[S&&t.jsxs("div",{className:"qoffre"+(S.en_retard?" late":""),children:[t.jsx("span",{className:"ol",children:e.qOffer}),t.jsx("b",{children:S.libelle}),t.jsxs("span",{className:"od",children:[e.qDelay," ",t.jsx("b",{children:S.delai})]}),t.jsx("span",{className:"osp"}),S.rythme>0?t.jsx("span",{className:"or",children:e.qRate(S.rythme)}):S.manuel_par_jour?t.jsx("span",{className:"or",children:e.qManual(S.manuel_par_jour)}):t.jsx("span",{className:"or dim",children:e.qPaused})]}),t.jsxs("div",{className:"qbox",children:[t.jsx("div",{className:"qhead",children:w?t.jsxs("span",{className:"qwait",children:[t.jsx("i",{className:"qwd"}),e.qFileWait]}):t.jsx("b",{dangerouslySetInnerHTML:{__html:e.queueDone(z,z+(((P=d==null?void 0:d.pool_order)==null?void 0:P.length)??0))}})}),S&&t.jsxs("div",{className:"qeta",children:[S.file===0?e.qEtaDone:S.rythme<=0?e.qEtaPaused:e.qEta(S.file,S.rythme,S.jours_restants),S.en_retard&&t.jsxs("em",{children:[" ",e.qLate(S.delai,S.plafond)]})]}),!w&&t.jsxs("div",{className:"qrate",children:[e.covRate," — ",t.jsx("b",{children:e.covRateNow(N)}),(S==null?void 0:S.reglage_manuel)&&t.jsxs("span",{className:"dim",children:[" · ",e.qManualSet]})]})]}),(F.length>0||g.items.some(L=>L.status==="boot"||L.status==="running"))&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec run",children:["⌛ ",e.qRunning]}),t.jsxs("div",{className:"qrows",children:[g.items.filter(L=>L.status==="boot"||L.status==="running"||L.status==="error").map(L=>t.jsxs("div",{className:"qr2 qfl",children:[t.jsx("b",{children:L.name}),t.jsx("span",{className:"qd",children:L.memoType||""}),t.jsx(Na,{item:L,serverOff:g.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd})]},"live-"+L.name)),F.filter(L=>!g.liveOf(L.name)).map(L=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:L.name}),t.jsxs("span",{className:"qd",children:[L.memo_type||"",L.age_min?` · ${Math.round(L.age_min)} min`:""]}),t.jsx("span",{className:"qt",children:L.state||""})]},"ip-"+L.name))]})]}),p.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec ok",children:["⏳ ",e.queueToday]}),t.jsx("div",{className:"qrows",children:p.map(L=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:L.company}),t.jsxs("span",{className:"qd",children:[L.memo_type,typeof L.est_min=="number"?` · ~${L.est_min} min`:""]}),t.jsx("span",{className:"qt",children:L.status}),L.url&&t.jsx("a",{className:"qgo",href:L.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.actMemoOf(L.memo_type)}),k&&L.status==="error"&&t.jsx("button",{type:"button",className:"qgo an",onClick:()=>{Jn(a,L.company,"retry").then(()=>f(R=>R+1))},children:e.queueRetry}),k&&L.status!=="done"&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{Jn(a,L.company,"delete").then(()=>f(R=>R+1))},children:e.queueDelete})]},L.company))})]}),t.jsxs("div",{className:"qsec todo",children:["⚡ ",w?e.qUpNextWait:e.qUpNext(q.length)]}),t.jsx("div",{className:"qhedge",children:e.qHedge}),t.jsxs("div",{className:"qrows qfile",children:[w&&t.jsxs("div",{className:"qwait qwrow",children:[t.jsx("i",{className:"qwd"}),e.qFileWait]}),!w&&q.length===0&&t.jsx("div",{className:"sp-empty",children:e.queueEmpty}),q.map((L,R)=>{const b=A.get(L.name),T=j.get((L.name||"").trim().toLowerCase()),$=g.liveOf(L.name),X=!!(T&&l.has(T.id))||!!($&&($.status==="boot"||$.status==="running")),I=!!(T&&ze(T)===1&&!T.memoUrl)&&!$;return t.jsxs("div",{className:"qr2 qfl",children:[t.jsxs("span",{className:"qn2",children:["#",R+1]}),b?t.jsx("span",{className:"qwhen"+(b.label==="demain"?" soon":""),children:b.label}):t.jsx("span",{className:"qwhen later",children:e.qLater}),t.jsx("b",{children:L.name}),L.fresh&&t.jsx("span",{className:"qfresh",children:e.qFresh}),typeof L.score=="number"&&t.jsx("span",{className:"qs2",children:L.score}),$&&($.status==="boot"||$.status==="running")&&t.jsx(Na,{item:$,serverOff:g.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),I&&(s.lockActions||!k?t.jsx("button",{type:"button",className:"qgo an",onClick:()=>c({type:"modal",modal:"rdv"}),children:e.actLocked}):t.jsx("button",{type:"button",className:"qgo an",disabled:X,onClick:()=>{i(T),f(O=>O+1)},children:X?e.actAnalyseQueued:e.actAnalyse})),L.excerpt&&t.jsx("span",{className:"qex",children:L.excerpt})]},L.name+":"+R)})]}),t.jsxs("div",{className:"qsec",children:["🧭 ",e.qVerdictsT]}),t.jsx("ul",{className:"qverd",children:e.qVerdicts.map(([L,R])=>t.jsxs("li",{children:[t.jsx("b",{children:L})," — ",R]},L))})]})}function dc(){const{t:e,token:a,flash:r,scoped:n,caps:o,stageOf:i,dispatch:l}=V(),s=`${Ot}/cibles/list.csv?token=${a}`,c=`${Ot}/cibles/list.json?token=${a}`,g=`${Ot}/cibles/export.xlsx?token=${a}&scope=full`,d=`=IMPORTDATA("${s}")`,x=y=>{var f;(f=navigator.clipboard)==null||f.writeText(y).then(()=>r(e.exportCopied))},m=[{def:e.exportCsv,value:s,href:s},{def:e.exportSheet,value:d},{def:e.exportLive,value:c,href:c},{def:e.exportXlsx,value:g,href:g}],h=!o.lockActions&&n.length>0,p=()=>{Yd(Gd(n,{plabels:e.plabels,head:e.exportViewHead,stageOf:i,stageLabel:y=>(e.stg.find(([f])=>f===y)||["",""])[1]})),r(e.exportViewDone(n.length))},v=()=>{l({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)};return t.jsxs(Ge,{title:e.exportTitle,icon:"📥",children:[t.jsx("p",{className:"lead2",children:e.exportLead}),h&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🖨️"}),t.jsxs("div",{children:[t.jsx("b",{children:e.printTitle}),t.jsx("p",{children:e.printDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb",onClick:v,children:e.printBtn})]})}),h&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🗂"}),t.jsxs("div",{children:[t.jsx("b",{children:e.dsBtn}),t.jsx("p",{children:e.dsHint})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>l({type:"modal",modal:"dossier"}),children:e.exportViewBtn})]})}),h&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"📄"}),t.jsxs("div",{children:[t.jsx("b",{children:e.exportViewTitle}),t.jsx("p",{children:e.exportViewDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb pri",onClick:p,children:e.exportViewBtn})]})}),t.jsx("div",{className:"expl",children:m.map(({def:y,value:f,href:k})=>t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:y[0]}),t.jsxs("div",{children:[t.jsx("b",{children:y[1]}),t.jsx("p",{children:y[2]})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>x(f),children:e.exportCopy}),k&&t.jsx("a",{className:"exb",href:k,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.exportOpen})]},y[1]))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.exportKeyWarning})]})}function cc(){const{t:e,token:a,flash:r,flashErr:n,mode:o}=V(),i=o!=="client",[l,s]=u.useState(null),[c,g]=u.useState(!1),[d,x]=u.useState(0),[m,h]=u.useState(!1);u.useEffect(()=>{let f=!0;return g(!1),Qn(a).then(k=>{f&&(k?s(k):g(!0))}),()=>{f=!1}},[a,d]);const p=()=>(l==null?void 0:l.sections)||{swot:!0,action:!0,synergies:!0,quadrant:!0,verdict:!0},v=f=>{if(i||!l)return;const k={enabled:f.enabled??!!l.enabled,email:f.email??(l.email||""),sections:f.sections??p()};h(!0),Qn(a,k).then(j=>{if(h(!1),!j){n(e.memoAlertErr);return}s(j),r(e.memoAlertSaved)})};if(c)return t.jsx(Ge,{title:e.memoAlertTitle,icon:"🔔",children:t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>x(f=>f+1),children:e.retry})]})});if(!l)return t.jsx(Ge,{title:e.memoAlertTitle,icon:"🔔",children:t.jsx("div",{className:"sp-empty",children:"…"})});const y=p();return t.jsxs(Ge,{title:e.memoAlertTitle,icon:"🔔",children:[t.jsx("p",{className:"lead2",children:e.memoAlertSub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.memoAlertToggle})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":l.enabled===!0,disabled:i||m,style:l.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>v({enabled:!l.enabled}),children:l.enabled?"ON":"OFF"})})]}),t.jsx(pc,{value:l.email||"",readOnly:i||m,label:e.memoAlertEmail,okLabel:e.csNoteOk,onSave:f=>v({email:f})}),t.jsx("div",{className:"qsec ok",children:e.memoAlertSections}),t.jsx("div",{className:"secl",children:e.memoAlertSec.map(([f,k])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:!!y[f],disabled:i||m,onChange:()=>v({sections:{...y,[f]:!y[f]}})}),t.jsx("span",{children:k})]},f))}),t.jsx(In,{label:e.memoAlertPreview,readOnly:i,onPreview:()=>$i(a,y),onTest:()=>_i(a,y)})]})}function pc({value:e,readOnly:a,label:r,okLabel:n,onSave:o}){const[i,l]=u.useState(e);u.useEffect(()=>{l(e)},[e]);const s=i.trim()!==e.trim(),c=!i.trim()||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.trim());return t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:r}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("input",{type:"email",className:"mailin",value:i,disabled:a,onChange:g=>l(g.target.value),onKeyDown:g=>{g.key==="Enter"&&s&&c&&o(i.trim())}}),t.jsx("button",{type:"button",className:"abtn",disabled:a||!s||!c,onClick:()=>o(i.trim()),children:n})]})]})}function uc(){const{t:e,token:a,flash:r,flashErr:n,canWrite:o}=V(),[i,l]=u.useState(null),[s,c]=u.useState(!1),[g,d]=u.useState(null),[x,m]=u.useState(""),[h,p]=u.useState(0);u.useEffect(()=>{let j=!0;return c(!1),sn(a).then(w=>{j&&(w?l({configured:w.configured,url_hint:w.url_hint}):c(!0))}),Vi(a).then(w=>{j&&d(w)}),()=>{j=!1}},[a,h]);const v=(j,w)=>{o&&sn(a,j).then(N=>{if(!N||N.ok===!1){n(e.actErr);return}j.test&&N.sent===!1?n(e.plugTestThrottled):r(w),p(z=>z+1)})},y='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}',f=JSON.stringify({event:"status",company:"Aitona",status:"Validée",note:"très bon fit — introduction chaude possible",score:90,website:"https://aitona.com",memo_url:"https://analysis.proplace.co/…"},null,2),k=`curl -X POST ${Ot}/cibles/evaluate \\
  -H "Content-Type: application/json" \\
  -d '{"token":"${a}","q":"nom ou URL de la société"}'`;return t.jsxs(Ge,{title:e.plugTitle,icon:"🔌",wide:!0,children:[g&&t.jsx("p",{className:"mnote"+(g.enabled?" warn":""),children:g.enabled?e.plugAutoOn(g.destination||"webhook"):e.plugAutoOff}),s?t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>p(j=>j+1),children:e.retry})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugCrm}),t.jsx("p",{className:"mnote",children:e.plugCrmHint}),t.jsxs("ol",{className:"plughow",children:[t.jsx("li",{children:e.plugHow1}),t.jsx("li",{children:e.plugHow2}),t.jsx("li",{children:e.plugHow3})]}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"url",maxLength:500,placeholder:e.plugUrlPh,value:x,disabled:!o,onChange:j=>m(j.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:!o||!x.trim(),onClick:()=>v({url:x.trim()},e.plugSaved),children:e.plugSave})]}),(i==null?void 0:i.configured)&&t.jsxs("p",{className:"mnote",children:["✓ ",i.url_hint||""," ",t.jsx("button",{type:"button",className:"lk",disabled:!o,onClick:()=>v({test:!0},e.plugTested),children:e.plugTest})," · ",t.jsx("button",{type:"button",className:"lk",disabled:!o,onClick:()=>v({remove:!0},e.plugRemoved),children:e.plugRemove})]}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugExT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:f}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var j;(j=navigator.clipboard)==null||j.writeText(f).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugExResult})]}),t.jsx(mc,{}),t.jsx("div",{className:"qsec ok",children:e.plugApiT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:k}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var j;(j=navigator.clipboard)==null||j.writeText(k).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote dim",children:e.plugQuota}),t.jsx("div",{className:"qsec ok",children:e.plugMcp}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:y}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var j;(j=navigator.clipboard)==null||j.writeText(y).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugFeeds}),t.jsx("p",{className:"mnote warn",children:e.plugTokenNote}),t.jsx("p",{className:"mnote dim",children:t.jsx("a",{href:"https://proplace.co/api/",target:"_blank",rel:"noopener noreferrer",children:e.plugDoc})})]})]})}function mc(){const{t:e,token:a,lang:r}=V(),[n,o]=u.useState("valides"),[i,l]=u.useState(!1),[s,c]=u.useState(null),[g,d]=u.useState(null),[x,m]=u.useState(!1),[h,p]=u.useState(!1),[v,y]=u.useState(null),[f,k]=u.useState(null),[j,w]=u.useState(null),N=`atl2:bulk:${a}:${n}`;u.useEffect(()=>{sn(a).then(P=>{k(P&&P.configured?P.url_hint||"webhook":null)})},[a]),u.useEffect(()=>{c(null),d(null),m(!1),y(null);try{const P=JSON.parse(localStorage.getItem(N)||"null");w(P&&Date.now()-Date.parse(P.t)<24*3600*1e3?P:null)}catch{w(null)}},[N]);const z=async()=>{l(!0),m(!1),y(null);const P=await Gi(a,n);c(P),d(P.ok?n:null),l(!1)},S=u.useRef(!1),q=async()=>{if(S.current)return;S.current=!0,p(!0);const P=`${a}:${n}:${Date.now()}:${Math.random().toString(36).slice(2,10)}`;let L;try{L=await Yi(a,n,"webhook",void 0,P)}finally{S.current=!1}if(p(!1),m(!1),y(L),L.ok&&(L.pushed||0)>0){const R={t:new Date().toISOString(),n:L.pushed||0};w(R);try{localStorage.setItem(N,JSON.stringify(R))}catch{}}},A=s!=null&&s.ok&&s.ready||0,F=!!(s!=null&&s.ok)&&g===n&&A>0&&!!f&&!j,D=j?new Date(j.t).toLocaleString(r==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugBulk}),t.jsx("p",{className:"mnote",children:e.plugBulkHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("select",{value:n,onChange:P=>o(P.target.value),children:e.plugBulkTabs.map(([P,L])=>t.jsx("option",{value:P,children:L},P))}),t.jsx("button",{type:"button",className:"abtn",disabled:i,onClick:()=>{z()},children:i?"…":e.plugBulkPreview})]}),s&&(s.ok?t.jsx("p",{className:"mnote",children:e.plugBulkResult(s.ready||0,s.linkedinReady||0,(s.noContact||[]).length)}):t.jsx("p",{className:"mnote warn",children:e.actErr})),!!(s!=null&&s.ok)&&t.jsx("p",{className:"mnote dim",children:e.bulkScope}),j&&t.jsx("p",{className:"mnote",children:e.bulkLocked(D,j.n)}),!j&&!!(s!=null&&s.ok)&&!f&&t.jsx("p",{className:"mnote warn",children:e.bulkNoDest}),!j&&!s&&t.jsx("p",{className:"mnote dim",children:e.bulkPreviewFirst}),F&&!x&&t.jsx("button",{type:"button",className:"abtn dgr",onClick:()=>m(!0),children:e.bulkArm}),F&&x&&t.jsxs("div",{className:"bulkc",children:[t.jsx("p",{className:"mnote warn",children:e.bulkWarn(A,f||"")}),t.jsx("button",{type:"button",className:"abtn dgr",disabled:h,onClick:()=>{q()},children:h?e.bulkSending:e.bulkConfirm(f||"")}),t.jsx("button",{type:"button",className:"abtn",disabled:h,onClick:()=>m(!1),children:e.bulkCancel})]}),v&&(v.ok?v.replayed?t.jsx("p",{className:"mnote",children:v.pending?e.bulkPending:e.bulkReplayed}):(v.pushed||0)>0?t.jsx("p",{className:"mnote",children:e.bulkDone(v.pushed||0,v.linkedinReady||0,v.skippedNoEmail||0)}):t.jsx("p",{className:"mnote warn",children:e.bulkNone}):t.jsx("p",{className:"mnote warn",children:v.error||e.actErr}))]})}function fc(){const{t:e,data:a,lang:r}=V(),n=a.credits,o=a.email,i=async l=>{if(!o)return;const s=window.location.href.split("?")[0];try{const g=await(await fetch(`${Da}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,lookup_key:l,success_url:s+"?credits=ok",cancel_url:s+"?credits=cancel"})})).json();g.url&&(window.location.href=g.url)}catch{}};return t.jsxs(Ge,{title:e.rechargeTitle,icon:"⚡",children:[n&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:e.rechargeHint(n.daily_grant)}}),n.costs&&t.jsxs("p",{className:"mnote",children:["① ",e.creditsCost(n.costs.instant)," · ② ",e.creditsCost(n.costs.detailed)]}),t.jsx("div",{className:"packs",children:(n.packs||[]).map(l=>t.jsxs("div",{className:"pack",children:[t.jsx("div",{className:"pt",children:e.rechargeUnit(l.credits,l.price_eur)}),t.jsx("button",{type:"button",onClick:()=>{i(l.lookup_key)},children:e.rechargeBuy})]},l.lookup_key))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.rechargeNote})]}),!n&&t.jsx("div",{className:"sp-empty",children:e.creditsNone})]})}function hc(){const{t:e}=V();return t.jsx(Ge,{title:e.dsBtn,icon:"🗂",wide:!0,children:t.jsx(Jd,{})})}function xc(){const{t:e,lang:a,data:r,dossiers:n,token:o,fund:i,canWrite:l,flash:s}=V(),[c,g]=u.useState(null),[d,x]=u.useState(!1);u.useEffect(()=>{let A=!0;if(i)return Sn(i).then(F=>{A&&F&&typeof F.per_day=="number"&&g(F.per_day)}),()=>{A=!1}},[i]);const[m,h]=u.useState(null);u.useEffect(()=>{if(!o)return;let A=!0;return Hi(o).then(F=>{A&&h(F)}),()=>{A=!1}},[o]);const p=r.stats,v=typeof(p==null?void 0:p.screened)=="number"?p.screened:n.filter(A=>A.kind==="target"&&Ie(A)).length,y=r.marketEstimate||0,f=y>0?Math.min(100,Math.round(v/y*100)):null,k=(p==null?void 0:p.window_days)||30,j=v>0?v/k:0,w=y>0?Math.max(0,y-v):0,z=y>0&&j>0&&v>=100?Math.round(w/j):null,S=A=>Math.round(A).toLocaleString(a==="en"?"en-US":"fr-FR"),q=A=>{d||!l||(x(!0),Wi(o,A).then(F=>{if(x(!1),F===null){s(e.actErr);return}g(F),s(e.alertSaved)}))};return t.jsxs(Ge,{title:e.coverTitle,icon:"🌍",children:[t.jsxs("div",{className:"covg",children:[t.jsx("b",{children:e.covScreened(S(v))}),y>0&&t.jsx("span",{children:e.covOf(S(y))})]}),f!==null?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"covbar",children:[t.jsx("i",{style:{width:f+"%"}}),t.jsxs("em",{children:[f," %"]})]}),z!==null&&t.jsx("p",{className:"mnote",children:e.covEta(z)})]}):t.jsx("p",{className:"mnote dim",children:e.covNoEst}),j>=1&&t.jsx("p",{className:"mnote",children:e.covPace(S(j))}),p&&t.jsxs("div",{className:"covf",children:[typeof p.kept=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:S(p.kept)})," ",e.covKept]}),typeof p.analyzed=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:S(p.analyzed)})," ",e.covAna]}),typeof p.shown=="number"&&p.shown!==p.kept&&t.jsxs("span",{children:[t.jsx("b",{children:S(p.shown)})," ",e.funShown]})]}),(m==null?void 0:m.ok)&&(m.detail||[]).length>0&&t.jsxs("details",{className:"covcalc",children:[t.jsx("summary",{children:e.covHowT}),m.perimetre&&t.jsx("p",{className:"mnote",children:m.perimetre}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"mkc",children:e.covColCode}),t.jsx("th",{className:"mkn",children:e.covColN}),t.jsx("th",{className:"mks",children:e.covColSource})]})}),t.jsxs("tbody",{children:[(m.detail||[]).map((A,F)=>t.jsxs("tr",{className:A.n?"":"zero",children:[t.jsxs("td",{className:"mkc",children:[A.code,A.geo?` · ${A.geo}`:" · FR"]}),t.jsx("td",{className:"mkn",children:typeof A.n=="number"?S(A.n):"—"}),t.jsxs("td",{className:"mks",children:[t.jsx("span",{children:A.source}),A.elargi&&t.jsx("em",{children:e.covWide(String(A.demande||""))}),A.erreur&&t.jsx("em",{children:e.covMissing})]})]},F)),t.jsxs("tr",{className:"tot",children:[t.jsx("td",{className:"mkc",children:e.covTotal}),t.jsx("td",{className:"mkn",children:t.jsx("b",{children:S(m.total||y)})}),t.jsx("td",{className:"mks"})]})]})]}),(m.rejetes||[]).length>0&&t.jsx("p",{className:"mnote dim",children:e.covRejected((m.rejetes||[]).join(", "))}),t.jsxs("p",{className:"mnote dim",children:[(m.sources||[]).join(" · "),m.calcule_le?` — ${e.covComputedAt(m.calcule_le.slice(0,10).split("-").reverse().join("/"))}`:""]})]}),l&&c!==null&&t.jsxs("div",{className:"covr",children:[t.jsxs("div",{className:"covrh",children:[t.jsx("span",{children:e.covRate}),t.jsx("b",{children:e.covRateNow(c)})]}),t.jsx("div",{className:"covrb",children:[0,1,2,3,5,10].map(A=>t.jsx("button",{type:"button",className:c===A?"on":"",disabled:d,onClick:()=>q(A),children:A===0?"⏸":A},A))}),t.jsx("p",{className:"mnote dim",children:e.covRateHint})]})]})}function gc(){var f,k,j;const{t:e,dossiers:a,token:r,mode:n,flash:o,criteria:i,fund:l,lang:s}=V(),c=n==="client",g=u.useMemo(()=>{const w=new Set;return a.forEach(N=>{N.angle&&w.add(N.angle)}),[...w]},[a]),[d,x]=u.useState(""),[m,h]=u.useState(""),[p,v]=u.useState(!1),y=async()=>{const w=d.trim();if(!(!w||p||!c)){v(!0),h("");try{const z=await(await fetch(`${Ot}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r,message:w,who:"atelier2"})})).json().catch(()=>({}));if(z.reply&&h(String(z.reply)),z.job_id){h(e.critChatRunning);const S=async()=>{const q=await fetch(`${Ot}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:z.job_id})}).then(A=>A.json()).catch(()=>null);if(q&&q.done){h(String(q.reply||q.clarification||q.summary||"✓")),v(!1),q.applied&&o(e.alertSaved);return}setTimeout(()=>{S()},8e3)};setTimeout(()=>{S()},8e3),x("");return}x("")}finally{m.startsWith("⏳")||v(!1)}}};return t.jsxs(Ge,{title:e.critTitle,icon:"⚙",wide:!0,children:[(i==null?void 0:i.lead)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critHypTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:i.lead}),!!((f=i.points)!=null&&f.length)&&t.jsx("ul",{className:"critpts",children:i.points.map(w=>t.jsx("li",{children:w},w))}),t.jsx("p",{className:"mnote",children:e.critHypSub})]}),!!((k=i==null?void 0:i.angles)!=null&&k.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critProfilsTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:i.method||e.critProfilsSub}),i.angles.map(w=>{var N,z;return t.jsxs("details",{className:"prof",children:[t.jsx("summary",{children:w.title}),w.why&&t.jsx("p",{className:"why",children:w.why}),t.jsxs("div",{className:"lo",children:[!!((N=w.look)!=null&&N.length)&&t.jsxs("div",{children:[t.jsx("em",{children:e.critLookFor}),t.jsx("ul",{children:w.look.map(S=>t.jsx("li",{children:S},S))})]}),!!((z=w.out)!=null&&z.length)&&t.jsxs("div",{className:"ko",children:[t.jsx("em",{children:e.critRuleOut}),t.jsx("ul",{children:w.out.map(S=>t.jsx("li",{children:S},S))})]})]})]},w.title)})]}),!!((j=i==null?void 0:i.gate)!=null&&j.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critGateTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:e.critGateSub}),i.gate.length===1&&!i.gate[0].k?t.jsx("p",{className:"gate1",children:i.gate[0].t}):t.jsx("ol",{className:"gatesteps",children:i.gate.map(w=>t.jsxs("li",{children:[w.k&&t.jsx("b",{children:w.k}),w.t]},w.t))})]}),g.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critAngles}),t.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:g.map(w=>t.jsx("li",{style:{marginBottom:5},children:w.replace(/[_-]+/g," ")},w))})]}),t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.critChatTitle}),t.jsx("p",{children:e.critChatHint}),t.jsxs("div",{className:"mfield",style:{marginTop:10},children:[t.jsx("input",{placeholder:e.critChatPh,value:d,disabled:!c||p,onChange:w=>x(w.target.value),onKeyDown:w=>{w.key==="Enter"&&y()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(p?" loading":""),style:{padding:"12px 18px"},disabled:!c||p||!d.trim(),onClick:()=>void y(),children:[t.jsx("span",{className:"fill"}),e.critChatSend]})]}),m&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:m})]}),t.jsx("div",{style:{marginBottom:14},children:t.jsx(Ui,{fund:l,lang:s,limit:30,compact:!0})}),t.jsx("div",{className:"qsec ok",children:e.qvTitle}),t.jsx("div",{className:"vlist",children:e.qv.map(([w,N])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vd "+(Bo[w]||"v-cons"),children:w}),t.jsx("span",{children:N})]},w))}),t.jsx("div",{className:"qsec ok",children:e.brTitle}),t.jsx("div",{className:"vlist",children:e.br.map(([w,N])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vtag",children:w}),t.jsxs("span",{children:["← ",N]})]},w))}),t.jsx("p",{className:"mnote",children:e.brNote}),t.jsx("p",{className:"mnote",children:e.critMemoKinds})]})}function bc(){const{t:e,dispatch:a,startTour:r}=V(),n=o=>{var i,l;a({type:"modal",modal:null}),o==="crit"||o==="plug"||o==="alert"?a({type:"modal",modal:o}):o.startsWith("tab")?a({type:"ptab",tab:Number(o.slice(3))}):o==="eval"&&((i=document.querySelector(".atl2 .demand input"))==null||i.scrollIntoView({block:"center",behavior:"smooth"}),(l=document.querySelector(".atl2 .demand input"))==null||l.focus())};return t.jsxs(Ge,{title:e.tutoTitle,icon:"▶",children:[t.jsxs("div",{className:"howto-go",children:[t.jsx("p",{children:e.tourIntro}),t.jsxs("button",{type:"button",onClick:()=>{a({type:"modal",modal:null}),r()},children:["▶ ",e.tourStart]})]}),t.jsx("ul",{className:"howto",children:e.howto.map(([o,i],l)=>t.jsxs("li",{role:"button",tabIndex:0,onClick:()=>n(i),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n(i))},children:[t.jsx("span",{className:"n",children:l+1}),t.jsx("span",{dangerouslySetInnerHTML:{__html:o.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}})]},i+l))})]})}const Ho="atl2:mapfold",vc=()=>{if(typeof window>"u")return!1;try{const e=localStorage.getItem(Ho);if(e==="on")return!0;if(e==="off")return!1}catch{}try{const e=new URLSearchParams(window.location.search);if(e.get("embed")==="1"&&(e.get("source")||"").toLowerCase()==="ops")return!0}catch{}return window.innerHeight<1e3},yc=()=>{if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search).get("embed")==="1")return!0}catch{}return window.innerWidth<=760},Vo=u.createContext(null),V=()=>{const e=u.useContext(Vo);if(!e)throw new Error("AtelierV2Ctx manquant");return e};function yt({o:e,lg:a}){const{lang:r}=V(),n=Me(e);return n?t.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:er(n,r),children:[n.emoji," ",er(n,r)]}):null}function Ia({o:e,src:a}){const{lang:r,t:n}=V(),o=Me(e);if(!o)return null;const i=rs(o),l=os(o);return t.jsxs("em",{className:"sigwin"+(l?" hot":""),title:n.signaledOn(no(o,r))+" · "+n.win7(ro(o,r)),children:[t.jsx("span",{className:"gg",children:Array.from({length:7},(s,c)=>t.jsx("i",{className:c<i?"on":""},c))}),t.jsx("span",{className:"lb",children:l?n.lastDay:n.daysLeft(Math.max(0,o.left??0))}),a&&o.url&&t.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",title:n.seeSource,onClick:s=>s.stopPropagation(),children:"↗"})]})}function wc(e,a,r){const n=(r||"").trim();if(n){const i=e.find(l=>(l.url||"")===n);if(i)return i}const o=_e(a);if(o)return e.find(i=>_e(i.name)===o)||e.find(i=>{const l=_e(i.name);return l.length>=3&&(o.includes(l)||l.includes(o))})}function kc(){const{scoped:e,t:a,st:r,dispatch:n}=V(),o=u.useRef(r.filters.day);r.filters.day&&(o.current=r.filters.day);const i=!!r.filters.day,l=e.filter(x=>!We(x)),s=l.length,c=l.filter(x=>!x.noCo).length,g=l.filter(x=>!!x.noCo).length,d=(r.filters.sector||[]).length>0;return t.jsxs("button",{type:"button",className:"map-pulse"+(i?" on":""),"aria-pressed":i,title:i?a.zoomPulseBtn:a.zoomPulseWeek,onClick:()=>{if(i)n({type:"filters",patch:{day:"",win:d?"7":"all"}});else{const x=o.current||new Date().toISOString().slice(0,10);n({type:"filters",patch:{day:x,win:"all"}})}},children:[t.jsx("em",{children:i?a.zoomPulseBtn:a.zoomPulseWeek}),t.jsx("b",{children:s}),t.jsx("span",{children:i?a.zoomPulseEd:a.zoomPulseWeekEd}),t.jsxs("ul",{children:[t.jsxs("li",{children:["⚡ ",c," ",a.zoomPulseEval]}),t.jsxs("li",{children:["🔎 ",g," ",a.zoomPulseExplore]})]})]})}function jc(){const{t:e,lang:a,data:r,dispatch:n}=V(),o=r.stats,i=s=>s.toLocaleString(a==="en"?"en-US":"fr-FR");if(!o||typeof o.screened!="number"||o.screened<=0)return null;const l=r.marketEstimate||0;return t.jsxs("button",{type:"button",className:"map-pulse",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("em",{children:e.identCoverage}),t.jsx("b",{children:i(o.screened)}),t.jsx("span",{children:l>0?e.covOf(i(l)):e.covScreened("").trim()}),t.jsxs("ul",{children:[typeof o.kept=="number"&&t.jsxs("li",{children:["✅ ",i(o.kept)," ",e.covKept," ",t.jsx("i",{className:"cpscope",children:e.covScopeAll})]}),typeof o.analyzed=="number"&&t.jsxs("li",{children:["⚡ ",i(o.analyzed)," ",e.covAna]})]})]})}function Wo({o:e}){const{lang:a}=V(),r=ns(e.cc),n=e.cc?$t(e.cc,a)||e.countryLabel||e.cc:e.countryLabel||"—";return t.jsx("span",{className:"c-flag",title:n||void 0,children:r?t.jsx("img",{src:r,width:24,height:18,alt:n||""}):t.jsx("span",{className:"em",children:"🌐"})})}const Yr="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap",Nc=!1;function Ec(){const[e,a]=u.useState(!1);return u.useEffect(()=>{const r=document.scrollingElement||document.documentElement,n=()=>a((r.scrollTop||0)>600);return n(),window.addEventListener("scroll",n,!0),()=>window.removeEventListener("scroll",n,!0)},[]),e?t.jsx("button",{type:"button",className:"totop",title:"Remonter en haut",onClick:()=>{(document.scrollingElement||document.documentElement).scrollTo({top:0,behavior:"smooth"})},children:"↑"}):null}const Go=e=>`atl2:tour:${e||"anon"}`;function Sc(e){try{return localStorage.getItem(Go(e))==="1"}catch{return!0}}function Kr(e){try{localStorage.setItem(Go(e),"1")}catch{}}function Cc(e,a,r,n,o,i){const l=e.tourT,s=e.howto;return[{sel:".atl2 .ident",title:l.ident,body:e.fhintIdent},o?{sel:".atl2 .cover",title:l.cover,body:e.fhintCover,need:".atl2 .ident"}:null,{sel:".atl2 .engine",title:l.engine,body:e.fhintEngine},{sel:".atl2 .ticker",title:l.live,body:e.fhintLive},{sel:".atl2 .goal",title:l.goal,body:e.fhintGoalAt(a)},{sel:".atl2 .srceng",click:".atl2 .srceng:not(.on) .se-head",title:l.engines,body:e.fhintSrcEng},{sel:".atl2 .funnel",title:l.funnel,body:e.fhintFunnel,ptab:n},i>0?{sel:".atl2 .tuto",title:l.tuto,body:s[3][0],ptab:3,need:".atl2 .tuto"}:null,{sel:".atl2 .demand",title:l.demand,body:s[1][0]},{sel:".atl2 .c-vd",need:".atl2 .list",title:l.chips,body:e.fhintChips,ptab:n,dens:"liste"},{sel:".atl2 .card .cdbody",need:".atl2 .list",title:l.dec,body:e.fhintDec,ptab:n,dens:"deplie"},r?{sel:".atl2 .card .cdtabs",need:".atl2 .list",click:'.atl2 [data-tour="tab-memo"]',title:l.memo,body:e.fhintMemo,ptab:n,dens:"deplie"}:null,{sel:".atl2 .csp",need:".atl2 .list",title:l.status,body:e.fhintStatus,ptab:n,dens:"deplie"},{sel:".atl2 .learn",title:l.learn,body:e.learnLine},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=export]",title:l.exportT,body:e.fhintExport,modal:"export"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=plug]",title:l.tools,body:s[6][0],modal:"plug"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=alert]",title:l.alerts,body:e.fhintAlerts,modal:"alert"},{sel:".atl2 .modal.on .mcard",title:l.crit,body:s[0][0],modal:"crit"}].filter(Boolean)}function Lc({demo:e=!1,source:a="default",initialFilters:r,initialUi:n,capsOverride:o,onFiltersChange:i}){var Pn;const{lang:l}=Zi(),s=js[l],c=Ms(e,l,a),[g,d]=u.useReducer(Is,void 0,()=>Os((n==null?void 0:n.continent)??(a==="ops"?"monde":"europe"),e||(a==="ops"?yc():vc()),{ptab:n==null?void 0:n.ptab,dens:(n==null?void 0:n.dens)??"liste",filters:r,modal:n==null?void 0:n.modal})),x=u.useRef(!0);u.useEffect(()=>{if(x.current){x.current=!1;return}if(!(e||a==="ops"))try{localStorage.setItem(Ho,g.mapFolded?"on":"off")}catch{}},[g.mapFolded,e,a]),u.useEffect(()=>{if(a!=="ops"||typeof window>"u")return;const E=()=>{window.innerWidth<=760&&d({type:"mapFold",folded:!0})};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[a]);const m=u.useRef(i);m.current=i,u.useEffect(()=>{var E;(E=m.current)==null||E.call(m,g.filters)},[g.filters]);const[h,p]=u.useState(()=>{if(typeof window>"u")return"both";try{const E=localStorage.getItem("atl2:chrome-mode");if(E==="eval"||E==="filt"||E==="both")return E;if(localStorage.getItem("atl2:chrome-min")==="1")return"eval"}catch{}return"both"}),[v,y]=u.useState(null),[f,k]=u.useState(null),[j,w]=u.useState(null),[N,z]=u.useState({kept:0,dropped:0}),[S,q]=u.useState(!1),[A,F]=u.useState(""),[D,P]=u.useState(!1),[L,R]=u.useState(null),[b,T]=u.useState(!1),[$,X]=u.useState(!1),[,I]=u.useState(0),O=()=>I(E=>E+1),Q=u.useRef([]),Y=u.useRef(new Set),K=u.useRef(new Set),[J,ge]=u.useState([]),[W,ce]=u.useState([]),[le,be]=u.useState(0),me=u.useRef(new Map),de=u.useRef(null),{mode:pe}=c,xe=u.useMemo(()=>({...c.caps,...a==="ops"?{showMorning:!1}:null,...o||null}),[c.caps,o,a]),H=xe.pipe,re=c.session.token||"",fe=pe==="client"&&!e;u.useEffect(()=>{if(!re||!H)return;let E=!0;const G=async()=>{const se=await is(re);!E||!se||(ce(se.runs),be(Date.now()/1e3-se.now),ge(He=>He.filter(Ne=>!se.runs.some(Be=>_e(Be.company)===_e(Ne.name)))))};G();const _=J.length>0||W.some(se=>se.status==="running"),te=window.setInterval(()=>{G()},_?8e3:25e3);return()=>{E=!1,window.clearInterval(te)}},[re,H,J.length,W.some(E=>E.status==="running")]);const ke=u.useMemo(()=>{const E=[],G=new Set;for(const _ of J){const te=_e(_.name);!te||G.has(te)||(G.add(te),E.push({name:_.name,id:_.id,status:"boot",started:_.started,estMin:_.estMin,memoType:"instant"}))}for(const _ of W){const te=_e(_.company);if(!te||G.has(te))continue;G.add(te);const se=_.status==="error"?"error":_.status==="done"?"done":"running";E.push({name:_.company,status:se,started:_.started||0,estMin:_.est_min||(_.memo_type==="detailed"?40:15),url:_.url,error:_.error,memoType:_.memo_type,note:_.note})}return E},[J,W]),ne=E=>ke.find(G=>_e(G.name)===_e(E))||null,ve=(E,G)=>{ge(_=>_.some(te=>_e(te.name)===_e(E.name))?_:[..._,{name:E.name,id:E.id,started:Date.now()/1e3,estMin:G==="detailed"?40:15}]),Y.current.add(E.id),O()};u.useEffect(()=>{if(document.querySelector(`link[href="${Yr}"]`))return;const E=document.createElement("link");E.rel="stylesheet",E.href=Yr,document.head.appendChild(E)},[]);const oe=(E,G=!1)=>{F(E),P(G),de.current&&clearTimeout(de.current),de.current=setTimeout(()=>F(""),G?4200:2400)},Ee=E=>oe(E,!0),Qe=u.useMemo(()=>{const E=new Map;return c.dossiers.forEach(G=>{G.id&&E.set(G.id,G)}),E},[c.dossiers]),he=u.useMemo(()=>c.dossiers.filter(E=>ea(E,g,H)),[c.dossiers,g,H]),Se=u.useRef(!1);u.useEffect(()=>{if(Se.current||e||c.loading||!c.dossiers.length)return;if(!xe.showFunnel||Sc(c.session.token||"")){Se.current=!0;return}Se.current=!0;const E=window.setTimeout(()=>{Kr(c.session.token||""),T(!0)},700);return()=>window.clearTimeout(E)},[e,c.loading,c.dossiers.length,xe.showFunnel,c.session.token]);const Lt=u.useMemo(()=>c.dossiers.filter(E=>Ps(E,g,H,c.favIds)),[c.dossiers,g,H,c.favIds]),Pe=u.useMemo(()=>es(he.filter(E=>!Ve(E)),c.favIds),[he,c.favIds]),Je=u.useRef(!1);u.useEffect(()=>{if(Je.current)return;if(!H||a==="ops"){Je.current=!0;return}if((n==null?void 0:n.ptab)!==void 0){Je.current=!0;return}if(c.loading)return;Je.current=!0;const E=ts(Pe);E!==g.ptab&&d({type:"ptab",tab:E})},[H,a,n==null?void 0:n.ptab,c.loading,Pe,g.ptab]);const Te=u.useMemo(()=>{const E=mo(c.dossiers);return E?ht(E)===0?s.tourToday:fo(E,l):s.tourNoRun},[c.dossiers,s,l]),it=u.useMemo(()=>c.dossiers.some(E=>!!E.memoUrl||!!E.summary||Dt(E)),[c.dossiers]),[kt,Oe]=u.useState(!1);u.useEffect(()=>{if(c.loading){Oe(!1);return}if(c.dossiers.length>0||c.error){Oe(!0);return}const E=window.setTimeout(()=>Oe(!0),6e3);return()=>window.clearTimeout(E)},[c.loading,c.dossiers.length,c.error]);const xt=(c.marketEstimate||0)>0||typeof((Pn=c.stats)==null?void 0:Pn.screened)=="number"&&c.stats.screened>0,ut=u.useMemo(()=>[1,0,2,4,5,3].find(E=>(Pe[E]||0)>0)??0,[Pe]),Xe=Cn.find(E=>E.key===g.continent),jt=g.continent==="monde"?s.contWorld:(l==="fr"?Xe==null?void 0:Xe.fr:Xe==null?void 0:Xe.en)||"";u.useEffect(()=>{const E=G=>{var te;const _=(((te=G.detail)==null?void 0:te.name)||"").trim();_&&gt(null,_)};return window.addEventListener("ppmap:evaluate",E),()=>window.removeEventListener("ppmap:evaluate",E)}),u.useEffect(()=>{const E=G=>{const _=G.detail||{},te=String(_.id||"").trim(),se=String(_.name||"").trim(),He=String(_.url||"").trim(),Ne=te&&Qe.get(te)||wc(c.dossiers,se,He);if(Ne){if(k(null),ea(Ne,g,H)||(g.continent!=="monde"&&Ne.continent!==g.continent&&d({type:"continent",key:Ne.continent||"monde"}),d({type:"reset"})),H&&Ne.kind!=="op"){const st=ze(Ne);typeof st=="number"&&st!==g.ptab&&d({type:"ptab",tab:st})}window.dispatchEvent(new CustomEvent("ppmap:reveal")),d({type:"focus",id:Ne.id}),(Ne.noCo||["media","nominations","recrutements"].includes(Ne.engine||""))&&(Ne.url||Ne.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:Ne.url||"",text:[Ne.headline,Ne.tagline].filter(Boolean).join(`
`)}})):Ne.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:Ne.name,url:Ne.url||"",website:Ne.website||"",domain:Ne.domain||""}}));return}!se&&!He||(d({type:"focus",id:te||null}),k({name:se,headline:String(_.text||"").trim()||se,url:He,card:_.card}),He&&(Ea(se)||!se)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:He,text:String(_.text||"").trim()}})):se&&!Ea(se)&&window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:se}})))};return window.addEventListener("ppmap:focus",E),()=>window.removeEventListener("ppmap:focus",E)}),u.useEffect(()=>{const E=te=>{const se={},He=String((te==null?void 0:te.sector)||"").trim();He&&(se.sector=[He]);const Ne=String((te==null?void 0:te.day)||"").slice(0,10);/^\d{4}-\d{2}-\d{2}$/.test(Ne)&&(se.day=Ne);const Be=String((te==null?void 0:te.search)||"").trim();Be&&(se.search=Be);const st=String((te==null?void 0:te.dealKind)||"").trim();(st==="ma"||st==="levee"||st==="other")&&(se.dealKind=[st]),Object.keys(se).length&&d({type:"filters",patch:se})},G=te=>E(te.detail),_=te=>{te.data&&te.data.type==="pp-filter"&&E(te.data)};return window.addEventListener("ppmap:filter",G),window.addEventListener("message",_),()=>{window.removeEventListener("ppmap:filter",G),window.removeEventListener("message",_)}},[]),u.useEffect(()=>{const E=G=>{var se;const _=(((se=G.detail)==null?void 0:se.name)||"").trim().toLowerCase();if(!_)return;const te=c.dossiers.find(He=>(He.name||"").trim().toLowerCase()===_);te&&d(a==="ops"?{type:"focus",id:te.id}:{type:"popup",id:te.id})};return window.addEventListener("ppmap:similar",E),()=>window.removeEventListener("ppmap:similar",E)});const gt=(E,G,_)=>{const te=(_||(E==null?void 0:E.name)||G||"").trim();if(!fe){w({kicker:te});return}!te||S||(q(!0),(async()=>{try{let se=(G||te).trim();const He=((E==null?void 0:E.website)||(E==null?void 0:E.domain)||"").trim();if(!(/^https?:\/\//i.test(se)||/^[a-z0-9.-]+\.[a-z]{2,}(\/|$)/i.test(se)&&!/\s/.test(se)))if(He)se=He;else try{const Re=await zn(te);if(Re!=null&&Re.website)se=Re.website;else if(((Re==null?void 0:Re.candidates)||[]).length===1)se=Re.candidates[0].url;else if(((Re==null?void 0:Re.candidates)||[]).length>1){Q.current=[{name:te,verdict:"unresolved",remaining:null,reason:s.evalPickSite,candidates:(Re.candidates||[]).slice(0,5)},...Q.current].slice(0,8),O();return}}catch{}const Be=await eo(re,se,"atelier2"),st={name:Be.company||te,verdict:Be.verdict,reason:Be.reason||"",remaining:Be.remaining??null};Q.current=[st,...Q.current].slice(0,8),Be.verdict==="kept"&&z(Re=>({...Re,kept:Re.kept+1})),Be.verdict==="ruled_out"&&z(Re=>({...Re,dropped:Re.dropped+1}));const Ht=E||c.dossiers.find(Re=>(Re.name||"").toLowerCase()===te.toLowerCase());Ht&&(Be.verdict==="kept"?Ht.verdict=Ht.verdict||"MATCH":Be.verdict==="ruled_out"&&(Ht.verdict="NO MATCH"),Be.reason&&(Ht.reasoning=Be.reason)),O()}finally{q(!1)}})())},bt=E=>{if(!fe){w({kicker:E.name});return}ve(E,"instant"),Vt(re,"fast_request",E.name||"",""),oe(s.memoInstantSent(E.name))},Ft=E=>me.current.get(E.id)??c.thumbs.get((E.name||"").trim().toLowerCase()),Nt=(E,G)=>d({type:"undoPush",entry:{id:E.id,name:E.name,prevCeoStatus:G}}),Fe=async(E,G,_)=>{const te=E.ceoStatus||"";E.ceoStatus=G,O();const se=await Ua(re,{status:G,airtable_id:E.airtableId,check_id:E.checkId,company:E.name,...(_==null?void 0:_.note)!==void 0?{note:_.note}:{},..._!=null&&_.via?{via:_.via}:{}});return se.ok?se.skipped?(E.ceoStatus=te,O(),Ee(s.actNotPersisted),!1):((_==null?void 0:_.undo)!==!1&&Nt(E,te),_!=null&&_.msg&&oe(_.msg),(G==="Validé"||G==="Écarté")&&!E.ceoNote&&(_==null?void 0:_.note)===void 0&&R({o:E,yes:G==="Validé"}),!0):(E.ceoStatus=te,O(),Ee(s.actErr),!1)},nt=async(E,G)=>{const _=await Ua(re,{status:E.ceoStatus||"Retenu",airtable_id:E.airtableId,check_id:E.checkId,company:E.name,note:G,via:"note"});return!_.ok||_.skipped?(Ee(_.skipped?s.actNotPersisted:s.actErr),!1):(E.ceoNote=G,O(),!0)},C=u.useRef(new Map),B=E=>C.current.has(E.id)?C.current.get(E.id):c.stages.get((E.name||"").trim().toLowerCase()),U=(E,G)=>{C.current.set(E.id,G),O()},ae=(E,G)=>{fe&&Fe(E,G?"Validé":"Écarté",{msg:G?s.decidedYes(E.name):s.decidedNo(E.name)})},ye=E=>{fe&&Fe(E,"À trancher",{msg:s.promoted(E.name)})},M=E=>{fe&&(async()=>{const G=E.ceoStatus||"";E.ceoStatus="Retenu",O();const _=await Ua(re,{status:"Retenu",check_id:E.checkId,company:E.name});if(!_.ok||_.skipped){E.ceoStatus=G,O(),Ee(_.skipped?s.actNotPersisted:s.actErr);return}Nt(E,G),oe(s.repeched(E.name))})()},ee=()=>{const E=g.undo[g.undo.length-1];if(!E){oe(s.undoNone);return}const G=Qe.get(E.id);if(!G){d({type:"undoPop"}),oe(s.undoNone);return}let _=E.prevCeoStatus;if(!_)if((G.verdict||"").toUpperCase().includes("CALL"))_="À trancher";else{oe(s.undoLockedTitle);return}(async()=>await Fe(G,_,{undo:!1})&&(d({type:"undoPop"}),G.ceoStatus=E.prevCeoStatus,O(),oe(s.undoDone(G.name))))()},ie=E=>{fe&&(K.current.add(E.id),O(),(async()=>{const G=await ss(re,E.name,"email");if(!G||G.ok===!1){K.current.delete(E.id),O(),Ee(s.actErr);return}Vt(re,"approach",E.name||"",""),oe(s.actApproachSent)})())},Z=(E,G)=>{fe&&(async()=>{if(!(await Vt(re,G?"yes":"no",E.name||"","")).ok){Ee(s.actErr);return}me.current.set(E.id,G?"yes":"no"),O(),oe(G?s.thumbUpDone:s.thumbDnDone)})()},je=E=>{!fe||!Dt(E)||(ve(E,"detailed"),Vt(re,"detailed_request",E.name||"",""),oe(s.memoDeepSent(E.name)))},De=E=>{const G=new Set(c.favIds),_=G.has(E.id);_?G.delete(E.id):G.add(E.id),c.setFavIds(G),fe&&ls(re,{id:E.id,co:E.name},_)},$e=()=>{!fe||$||window.confirm(s.identSyncConfirm)&&(X(!0),(async()=>{const E=await ds(re);X(!1),E?oe(s.identSyncDone):Ee(s.actErr)})())},Ae=/proplace/i.test(c.fund||""),Ue=E=>{!fe||!Ae||(Vt(re,"onboard_request",E.name||"",""),oe(s.onboardSent(E.name)))},Pa={st:g,dispatch:d,t:s,lang:l,mode:pe,caps:xe,pipe:H,token:re,fund:c.fund,email:c.email,criteria:c.criteria,source:a||"default",data:c,doRepeche:M,thumbOf:Ft,canWrite:fe,commitStatus:Fe,saveNote:nt,stageOf:B,setStage:U,flashErr:Ee,startTour:()=>T(!0),dossiers:c.dossiers,scopedAll:he,scoped:Lt,counts:Pe,byId:Qe,contName:jt,favIds:c.favIds,toggleFav:De,askEvaluate:gt,doAnalyse:bt,doDecide:ae,doPromote:ye,doApproach:ie,doThumb:Z,doDeep:je,doUndo:ee,doSync:$e,doOnboard:Ue,outbound:Ae,memoQueued:Y.current,liveMemos:{items:ke,serverOff:le,liveOf:ne},approachDone:K.current,sessTally:N,evalCards:Q.current,evalBusy:S,markRow:y,markedId:v,flash:oe,focusExtra:f};u.useEffect(()=>{const E=G=>{G.key==="Escape"&&(d({type:"popup",id:null}),d({type:"modal",modal:null}),d({type:"openFacet",facet:null}))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[]);const la=E=>re?t.jsx($s,{token:re,children:E}):t.jsx(t.Fragment,{children:E});return t.jsx(Vo.Provider,{value:Pa,children:t.jsxs("div",{className:"atl2"+(a==="ops"?" ops":"")+(re?" cibles":"")+" chrome-"+h,children:[t.jsx("style",{children:Cs}),la(t.jsxs("div",{className:"app"+(H?" pipe":"")+(re?" has-thesis":""),children:[xe.showTicker&&t.jsx(rt,{name:"live",children:t.jsxs("div",{className:"live-stack"+(re?" live-stack--cibles":""),children:[t.jsx(Ks,{}),!!re&&t.jsx(Us,{})]})}),xe.showIdent&&t.jsx(rt,{name:"identite",children:t.jsx(sl,{})}),!1,Nc,xe.showFunnel&&t.jsx(rt,{name:"entonnoir",children:t.jsx(zc,{})}),!g.mapFolded&&t.jsx(rt,{name:"carte",fallback:t.jsx("div",{className:"void",children:s.loadError}),children:t.jsxs("div",{className:"fzone",children:[t.jsx(Ro,{}),t.jsxs("div",{className:"stage",id:"atl2-stage",children:[a==="ops"&&t.jsx(kc,{}),a!=="ops"&&xe.showFunnel&&t.jsx(jc,{}),t.jsx(od,{}),t.jsx(Fo,{})]})]})}),xe.showDemand&&H&&t.jsx(rt,{name:"direct",children:t.jsx(fs,{items:ke,serverOff:le,labels:{strip:s.liveStrip,boot:s.liveBoot,end:s.liveEnd,open:s.liveOpenQueue,memo:s.actMemo},onOpen:()=>d({type:"modal",modal:"queue"})})}),a==="ops"&&t.jsx("div",{className:"chrome-tog",role:"tablist","aria-label":s.chromeBoth,children:[["eval",s.chromeEval],["filt",s.chromeFilt],["both",s.chromeBoth]].map(([E,G])=>t.jsx("button",{type:"button",role:"tab","aria-selected":h===E,onClick:()=>{p(E);try{localStorage.setItem("atl2:chrome-mode",E)}catch{}},children:G},E))}),xe.showDemand&&t.jsx(rt,{name:"evaluation",children:t.jsx("div",{className:"eval-stick",children:t.jsx(md,{})})}),xe.showDemand&&g.memoConsole&&t.jsx(rt,{name:"console",children:t.jsx(hd,{})}),xe.pipe&&!!re&&t.jsx(rt,{name:"moteurs",children:t.jsx(ys,{})}),t.jsx(rt,{name:"liste",fallback:t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>window.location.reload(),children:s.retry})]}),children:t.jsx(Vd,{})}),c.loading&&t.jsx("div",{className:"void",children:s.loadingV2}),c.error&&!c.loading&&t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:c.refresh,children:s.retry})]})]})),g.popupId&&g.dens!=="liste"&&a!=="ops"&&t.jsx(rt,{name:"fiche",children:t.jsx(zd,{})}),t.jsx(rt,{name:"modales",children:t.jsx(Zd,{})}),t.jsx(Xs,{}),L&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:L.o.name}),t.jsx(nl,{placeholder:L.yes?s.whyYesPh:s.whyNoPh,onDone:E=>{const G=L.o;R(null),E&&nt(G,E).then(_=>{_&&oe(s.csNoteSaved)})}})]}),b&&kt&&t.jsx(ol,{steps:Cc(s,Te,it,ut,xt,Pe[3]||0),onClose:()=>{T(!1),Kr(re)}}),t.jsx(Ec,{}),xe.showOnb&&t.jsxs("div",{className:"lockbar on",children:[t.jsx("b",{children:s.lockbarText}),t.jsxs("span",{className:"lb-c",children:[s.lockbarContactBefore,t.jsx("a",{href:po,children:qn}),s.lockbarContactMid,t.jsx("a",{href:`mailto:${za}`,children:za})]}),t.jsx("button",{type:"button",onClick:()=>d({type:"modal",modal:"rdv"}),children:s.lockbarCta})]}),A&&t.jsx("div",{className:"flash on"+(D?" err":""),children:A}),j&&t.jsx(as,{variant:"acquirer",initialCompany:Qr().co,initialWebsite:Qr().site,onClose:()=>w(null)})]})})}function zc(){const{t:e}=V(),[a,r]=u.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem("atl2:fhint")==="off"}catch{return!1}});return a?null:t.jsxs("p",{className:"fhint",children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:t.jsx("path",{d:"M1 2h10M2.5 5.5h7M4.5 9h3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})}),t.jsx("span",{dangerouslySetInnerHTML:{__html:e.funnelHint}}),t.jsx("button",{type:"button","aria-label":"Fermer",title:e.fhintClose,onClick:()=>{r(!0);try{localStorage.setItem("atl2:fhint","off")}catch{}},children:"✕"})]})}function Qr(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function Ac(e){return e>=1e9?(e/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":e>=1e6?Math.round(e/1e6)+" M€":Math.round(e/1e3)+" k€"}export{Wo as FlagCell,yt as SigBadge,Ia as SigWin,Lc as default,Ac as fmtShort,V as useV2};
