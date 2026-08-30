var di=Object.defineProperty;var ci=(e,a,r)=>a in e?di(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var _n=(e,a,r)=>ci(e,typeof a!="symbol"?a+"":a,r);import{r as p,u as pi,a as ui,b as mi,R as ca,L as fi,j as t,P as _a,f as Bn,p as Ee,c as hi,d as gi,C as $n,e as xi,g as bi,l as Ba,o as ya,i as no,h as vi,k as yi,m as wi,n as Un,q as ki,s as Hn,t as Vn,v as Wn,w as ji,x as Ei,y as Ni,z as Si,A as Ci,S as Ia,B as zi,D as ro,E as De,F as En,G as bt,H as Tt,I as oo,J as Ai,K as qi,M as io,N as Ea,O as Ti,_ as nn,Q as Li,T as Fi,U as Ri,V as _e,W as Oi,X as Mi,Y as Nt,Z as Di,$ as Ut,a0 as Nn,a1 as so,a2 as Ii,a3 as Pi,a4 as _i,a5 as Sn,a6 as Gn,a7 as Yn,a8 as Ht,a9 as rn,aa as Lt,ab as Ke,ac as Qn,ad as Bi,ae as $i,af as Ui,ag as Kn,ah as Cn,ai as lo,aj as co,ak as po,al as Hi,am as uo,an as Vi,ao as Wi,ap as Gi,aq as Yi,ar as Qi,as as Pt,at as sa,au as Ki,av as mo,aw as Jn,ax as Vt,ay as Ji,az as fo,aA as ho,aB as Xn,aC as Xi,aD as Zi,aE as ea,aF as on,aG as es,aH as ts,aI as as,aJ as Zn,aK as ns,aL as rs,aM as os,aN as is,aO as ss,aP as er,aQ as ls,aR as $a,aS as tr,aT as ds,aU as cs,aV as ps,aW as us,aX as ms,aY as ar,aZ as nr,a_ as fs,a$ as hs,b0 as rr,b1 as gs,b2 as xs,b3 as bs,b4 as vs,b5 as ys,b6 as kt,b7 as ws,b8 as ks,b9 as or,ba as js,bb as Es,bc as Ns,bd as Ss,be as Ua,bf as Cs,bg as zs}from"./index-DRpAEtOs.js";const As=({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:o,onInit:i,onPageChange:c,onSubmit:s})=>{const[l,g]=p.useState(!0),d=pi({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:o});ui(d,{onInit:i,onPageChange:c,onSubmit:s});const[x,m]=p.useState();return mi(d,"form_resized",b=>{const u=b.size;typeof u=="number"&&m(u)},{disabled:!o}),ca.createElement("div",{className:"fillout-standard-embed",style:{height:o?typeof x=="number"?x:256:"100%",transition:o?"height 150ms ease":void 0}},l&&ca.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},ca.createElement(fi,null)),d&&ca.createElement("iframe",{src:d.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>g(!1),style:{width:l?0:"100%",height:l?0:"100%",opacity:l?0:1,borderRadius:10,border:0,minHeight:256}}))};function Ue(e){return(e||"").trim().toLowerCase()}function qs(e,a){const r=Math.max(60,a*60);return Math.max(2,Math.min(97,Math.round(e/r*100)))}function ir(e){const a=Math.max(0,Math.floor(e)),r=Math.floor(a/60),n=a%60;return r+":"+String(n).padStart(2,"0")}function Ts(e){const a=new Date(e);return String(a.getHours()).padStart(2,"0")+":"+String(a.getMinutes()).padStart(2,"0")}const Ls=300;function Na({item:e,serverOff:a,bootLbl:r,endLabel:n}){const[o,i]=p.useState(()=>Date.now()/1e3);p.useEffect(()=>{const m=window.setInterval(()=>i(Date.now()/1e3),1e3);return()=>window.clearInterval(m)},[]);const c=e.memoType==="detailed"?"mémo détaillé ~"+(e.estMin||40)+" min":"mémo éclair ~"+(e.estMin||15)+" min";if(e.status==="boot"||!(e.started>0)){const m=o-(e.started||o);return m>Ls?t.jsx("span",{className:"runerr",children:"⚠ le moteur n'a pas pris le dossier ("+Math.round(m/60)+" min) — relancez l'analyse"}):t.jsxs("span",{className:"runtrack boot",children:[t.jsx("span",{className:"runchrono",children:r+" · "+c+(m>20?" · "+ir(m):"")}),t.jsx("span",{className:"runbar",children:t.jsx("i",{className:"ind"})})]})}if(e.status==="error")return t.jsx("span",{className:"runerr",children:e.error||"erreur"});if(e.status==="done")return t.jsx("span",{className:"rundone",children:"✓"});const s=o-a-e.started,l=e.estMin||15,g=l*60-s,d=qs(s,l),x=g>0&&n?" · "+n.replace("{t}",Ts((e.started+l*60+a)*1e3)):"";return t.jsxs("span",{className:"runtrack",children:[t.jsx("span",{className:"runchrono",children:c+" · ⏱ "+ir(s)+" · "+d+"%"+(g>0?" · reste ~"+Math.ceil(g/60)+" min":" · …")+x}),!!e.note&&t.jsx("span",{className:"runnote",children:e.note}),t.jsx("span",{className:"runbar",children:t.jsx("i",{style:{width:d+"%"}})})]})}function Fs({items:e,serverOff:a,labels:r,onOpen:n}){const o=e.filter(i=>i.status!=="done"||Date.now()/1e3-(i.started||0)<1200);return o.length?t.jsxs("div",{className:"livestrip",role:"button",onClick:n,title:r.open,children:[t.jsx("span",{className:"ls-ico",children:"⚡"}),t.jsx("span",{className:"ls-lab",children:r.strip}),o.slice(0,6).map(i=>t.jsxs("span",{className:"ls-chip"+(i.status==="error"?" err":i.status==="done"?" done":""),children:[t.jsx("b",{children:i.name}),i.status==="done"&&i.url?t.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",onClick:c=>c.stopPropagation(),children:r.memo}):t.jsx(Na,{item:i,serverOff:a,bootLbl:r.boot,endLabel:r.end})]},i.name)),o.length>6&&t.jsxs("span",{className:"ls-more",children:["+",o.length-6]}),t.jsxs("span",{className:"ls-go",children:[r.open," →"]})]}):null}const sr={rss:"RSS",google_news:"Google News",google_alerts:"Google Alerts",pappers_fr:"Pappers FR",crt:"CRT",github:"GitHub",hn:"Hacker News",fundraising:"Fundraising",backfill:"Backfill",websets_engine:"Exa Websets",websets:"Exa Websets",linkedin_posts:"LinkedIn Posts",linkedin_jobs:"LinkedIn Jobs",exa_semantic:"Exa Semantic",exa_similar:"Exa Similar",crunchbase_search:"Crunchbase",other_custom:"Autres (Make sur-mesure)",manual_paste:"Saisie manuelle",find_similar_qualified:"Similaires aux qualifiés",editorial:"Éditorial (médias experts)",daily_news:"Daily news thèse",alumni:"Alumni fondateurs",competitor_exodus:"Départs concurrents",hackernews:"Hacker News",crt_sh:"CRT",pappers:"Pappers FR",pappers_intl:"Pappers International",opencorporates:"OpenCorporates",tavily:"Tavily",registre_gouv:"Registre officiel (gouv)",hunter:"Hunter",sales_nav:"Sales Navigator",sourcing:"Sourcing Proplace",local:"Moteur local (Google Maps + BODACC)"},Rs={rss:"Lit chaque matin des centaines de médias et de flux spécialisés pour repérer les sociétés qui bougent dans votre secteur.",editorial:"Suit en continu les médias experts et lettres spécialisées de votre secteur pour repérer les sociétés dont on commence à parler.",google_news:"Balaie l'actualité mondiale en continu pour capter les sociétés qui font parler d'elles (levées, lancements, nominations).",google_alerts:"Surveille des mots-clés précis sur tout le web et remonte chaque société correspondante dès qu'elle apparaît.",pappers_fr:"Interroge les registres officiels français (SIRENE, codes d'activité) pour trouver des sociétés par métier, en temps réel.",crt:"Détecte les toutes nouvelles sociétés dès la mise en ligne de leur site web — un signal très précoce, avant tout le monde.",github:"Détecte les sociétés tech par l'activité de leurs développeurs — un signal très en amont, avant qu'elles ne fassent parler d'elles.",hn:"Scrute Hacker News, le forum de référence des fondateurs tech, pour repérer les projets qui émergent en premier.",fundraising:"Repère les sociétés qui viennent de lever des fonds — le moment précis où elles accélèrent et deviennent intéressantes.",backfill:"Repasse sur les périodes passées pour rattraper les sociétés qui auraient pu passer entre les mailles du filet.",websets:"Construit des listes de sociétés sur mesure à partir d'une simple description, en explorant tout le web.",websets_engine:"Construit des listes de sociétés sur mesure à partir d'une simple description, en explorant tout le web.",linkedin_posts:"Analyse les publications LinkedIn pour repérer les sociétés et dirigeants qui annoncent quelque chose d'intéressant.",linkedin_jobs:"Lit les offres d'emploi LinkedIn : une société qui recrute massivement dans un domaine trahit sa stratégie et sa croissance.",exa_semantic:"Recherche sémantique sur tout le web : vous décrivez ce que vous cherchez en langage naturel, et il trouve les sociétés qui y ressemblent.",exa_similar:"Partez d'une société que vous aimez, et il trouve toutes celles qui lui ressemblent sur le web.",crunchbase_search:"Interroge la base mondiale des startups et de leurs financements pour trouver des sociétés par profil.",other_custom:"Moteurs branchés spécialement pour votre thèse — chaque signal utile peut devenir un moteur sur mesure.",manual_paste:"Les sociétés que vous ajoutez vous-même à la main, évaluées selon vos critères exactement comme les autres.",find_similar_qualified:"Part des sociétés que vous avez déjà retenues pour en trouver d'autres, très proches, partout sur le web.",daily_news:"Relit l'actualité du jour à travers le prisme exact de votre thèse pour n'en garder que ce qui vous concerne.",alumni:"Suit les diplômés des meilleures écoles pour repérer ceux qui viennent de fonder une société.",competitor_exodus:"Détecte les départs de talents des sociétés concurrentes — souvent le signe d'une nouvelle société en création.",hackernews:"Scrute Hacker News, le forum de référence des fondateurs tech, pour repérer les projets qui émergent en premier.",crt_sh:"Détecte les toutes nouvelles sociétés dès la mise en ligne de leur site web — un signal très précoce, avant tout le monde.",pappers:"Interroge les registres officiels français (SIRENE, codes d'activité) pour trouver des sociétés par métier, en temps réel.",pappers_intl:"Interroge les registres d'entreprises internationaux pour trouver des sociétés par pays et par activité, en temps réel.",opencorporates:"Explore la plus grande base mondiale de registres d'entreprises pour retrouver des sociétés officielles partout dans le monde.",tavily:"Recherche web en temps réel : interroge tout le web à la volée pour capter les sociétés qui collent à votre thèse.",registre_gouv:"Interroge le registre officiel des entreprises françaises (recherche-entreprises) pour trouver des sociétés par activité.",local:"Trouve les commerces de proximité de votre métier, ville par ville. Sur Google Maps : les magasins physiques avec leur note, leurs avis et leur site (tri « leaders » ou « à reprendre »). Via le BODACC officiel : les affaires acquérables — liquidations, ventes & cessions de fonds, cessations (locaux à récupérer). Tourne à la demande (Google Maps payant) ; option radar quotidien gratuit via BODACC.",hunter:"Retrouve les coordonnées professionnelles des sociétés (emails, domaines) pour identifier les bons interlocuteurs à contacter."},Os={rss:"Reads hundreds of media outlets and specialist feeds every morning to spot the companies moving in your sector.",editorial:"Continuously follows the expert media and specialist newsletters in your sector to catch companies just starting to get noticed.",google_news:"Sweeps world news in real time to catch companies making headlines (raises, launches, appointments).",google_alerts:"Watches precise keywords across the whole web and surfaces every matching company the moment it appears.",pappers_fr:"Queries the official French registries (SIRENE, activity codes) to find companies by line of business, in real time.",crt:"Detects brand-new companies the moment their website goes live — a very early signal, ahead of everyone else.",github:"Detects tech companies from their developers' activity — a very early signal, before they make any noise.",hn:"Scans Hacker News, the go-to forum for tech founders, to catch the projects emerging first.",fundraising:"Spots companies that have just raised funds — the exact moment they accelerate and become interesting.",backfill:"Re-combs past periods to catch companies that might have slipped through the cracks.",websets:"Builds tailored company lists from a simple description, exploring the whole web.",websets_engine:"Builds tailored company lists from a simple description, exploring the whole web.",linkedin_posts:"Reads LinkedIn posts to spot the companies and executives announcing something worth knowing.",linkedin_jobs:"Reads LinkedIn job ads: a company hiring heavily in one area reveals its strategy and its growth.",exa_semantic:"Semantic search across the whole web: describe what you're looking for in plain language, and it finds the companies that match.",exa_similar:"Start from a company you like, and it finds every similar one across the web.",crunchbase_search:"Queries the global database of startups and their funding to find companies by profile.",other_custom:"Engines wired specifically for your thesis — any useful signal can become a custom engine.",manual_paste:"The companies you add yourself by hand, scored against your criteria exactly like the rest.",find_similar_qualified:"Starts from companies you've already kept to find others, very close to them, across the web.",daily_news:"Re-reads today's news through the exact lens of your thesis, keeping only what concerns you.",alumni:"Tracks graduates of top schools to spot those who have just founded a company.",competitor_exodus:"Detects talent leaving competitor companies — often the sign of a new company being born.",hackernews:"Scans Hacker News, the go-to forum for tech founders, to catch the projects emerging first.",crt_sh:"Detects brand-new companies the moment their website goes live — a very early signal, ahead of everyone else.",pappers:"Queries the official French registries (SIRENE, activity codes) to find companies by line of business, in real time.",pappers_intl:"Queries international company registries to find companies by country and activity, in real time.",opencorporates:"Explores the world's largest database of company registries to surface official companies anywhere in the world.",tavily:"Real-time web search: queries the whole web on the fly to catch companies matching your thesis.",registre_gouv:"Queries the official French company register (recherche-entreprises) to find companies by activity.",local:"Finds the main-street businesses in your trade, town by town. On Google Maps: the physical storefronts with their rating, reviews and website (sort 'leaders' or 'turnaround'). Via the official BODACC bulletin: acquirable businesses — insolvencies, sales & transfers of goodwill, closures (premises to take over). Runs on demand (Google Maps is paid); optional free daily BODACC radar.",hunter:"Finds companies' professional contact details (emails, domains) to identify the right people to reach."};function Ha(e){const a=(e||"").trim().toLowerCase();if(!a)return"";const r=sr[a]||sr[a+"_engine"];return r||a.replace(/_/g," ").split(" ").filter(Boolean).map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")}function Ms(e,a){const r=(e||"").trim().toLowerCase(),n=a?Os:Rs;return n[r]||n[r+"_engine"]||""}const lr=[["1",1],["3",3],["7",7],["all",365]],Ds={exa_semantic:"exa_semantic",exa_similar:"exa_similar",find_similar:"find_similar_qualified",find_similar_qualified:"find_similar_qualified",github:"github",news:"google_news",google_news:"google_news",jobs:"linkedin_jobs",linkedin_jobs:"linkedin_jobs",hn:"hn",hackernews:"hn",crunchbase:"crunchbase_search",crunchbase_search:"crunchbase_search",pappers:"pappers_fr",pappers_fr:"pappers_fr",registre_gouv:"pappers_fr",webset:"websets",websets:"websets",alumni:"alumni",competitor_exodus:"competitor_exodus",backfill:"backfill",manual:"manual_paste",manual_paste:"manual_paste",editorial:"editorial",daily_news:"daily_news",crt:"crt",crt_sh:"crt",rss:"rss",fundraising:"fundraising",local:"local"},Is=e=>Ds[String(e||"").toLowerCase().replace(/_engine$/,"")]||"";function Ps(e){return e?(Array.isArray(e)?e.map(r=>Number(r)||0):Object.keys(e).sort().map(r=>Number(e[r])||0)).slice(-14):[]}function _s({vals:e}){if(!e.length||!e.some(c=>c>0))return null;const a=Math.max(...e,1),r=56,n=16,o=r/Math.max(e.length-1,1),i=e.map((c,s)=>`${(s*o).toFixed(1)},${(n-c/a*(n-2)).toFixed(1)}`).join(" ");return t.jsx("svg",{className:"se-spark",viewBox:`0 0 ${r} ${n}`,width:r,height:n,"aria-hidden":"true",children:t.jsx("polyline",{points:i,fill:"none",stroke:"currentColor",strokeWidth:"1.5"})})}function Bs(){const{t:e,lang:a,data:r,dossiers:n,canWrite:o,flash:i,flashErr:c}=Q(),s=a==="en",l=r.session.token||"",g=r.fund||"",[d,x]=p.useState(!1),[m,b]=p.useState("7"),[u,y]=p.useState({}),[w,f]=p.useState(!1),[v,j]=p.useState(""),[k,N]=p.useState(null),[S,C]=p.useState({}),[L,q]=p.useState(""),[M,R]=p.useState(""),[$,F]=p.useState(""),[O,h]=p.useState(!1),[A,U]=p.useState(""),ee=p.useRef(null),E=p.useRef(null),I=u[m],D=p.useCallback(async _=>{var V;const K=((V=lr.find(([ne])=>ne===_))==null?void 0:V[1])||7;f(!0),j("");try{const ne=await fetch(`${_a}/engines-drilldown-batch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fund_slug:g,days:K,fund_scoped:!0,token:l})}),H=await ne.json();if(!ne.ok||H.error)throw new Error(H.error||`HTTP ${ne.status}`);y(se=>({...se,[_]:H}))}catch(ne){j(String(ne.message||ne))}finally{f(!1)}},[g,l]);p.useEffect(()=>{d&&!u[m]&&!w&&D(m),d&&!Object.keys(S).length&&o&&Bn(l).then(_=>{const K={};_.forEach(V=>{V.engine&&(K[V.engine]=V)}),C(K)})},[d,m]),p.useEffect(()=>()=>{E.current&&window.clearInterval(E.current)},[]);const B=p.useMemo(()=>{const _=(I==null?void 0:I.engines)||{};return Object.entries(_).map(([K,V])=>{const ne=V.summary||{};return{key:K,sourced:ne.sourced||0,matched:ne.matched||0,noMatch:ne.no_match||0,rate:typeof ne.match_rate=="number"?Math.round(ne.match_rate*(ne.match_rate<=1?100:1)):0,spark:Ps(ne.by_day),leads:V.leads||[]}}).sort((K,V)=>V.sourced-K.sourced)},[I]),te=p.useMemo(()=>B.reduce((_,K)=>_+K.sourced,0),[B]),ae=p.useMemo(()=>B.filter(_=>_.sourced>0).length,[B]),be=p.useMemo(()=>{const _=new Map;return n.forEach(K=>{const V=(K.name||"").trim().toLowerCase();V&&!_.has(V)&&_.set(V,Ee(K))}),_},[n]),J=p.useMemo(()=>{const _=new Map;return n.forEach(K=>{const V=(K.name||"").trim().toLowerCase();V&&!_.has(V)&&_.set(V,K.id)}),_},[n]),he=_=>_===void 0?s?"not on this page":"pas sur cette page":e.plabels[_]||"",ue=_=>{const K=((I==null?void 0:I.params)||{})[_],V=K?JSON.stringify(K).slice(0,400):"",ne=s?`Adjust the "${Ha(_)}" engine`:`Ajuste le moteur « ${Ha(_)} »`,H=V?s?` (current settings: ${V})`:` (réglages actuels : ${V})`:"";return`${ne}${H} : `},ge=async()=>{var K;const _=(((K=ee.current)==null?void 0:K.value)||"").trim();if(!(_.length<8||O)){h(!0),U("");try{const V=await fetch(`${_a}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:l,message:_,who:"cockpit-v2"})}),ne=await V.json();if(!V.ok||ne.ok===!1)throw new Error(ne.error||`HTTP ${V.status}`);if(ne.reply&&!ne.async){U(String(ne.reply)),h(!1);return}const H=ne.job_id;if(!H){U(s?"Sent.":"Envoyé."),h(!1);return}E.current=window.setInterval(async()=>{try{const de=await(await fetch(`${_a}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:H})})).json();de.done&&(E.current&&window.clearInterval(E.current),E.current=null,U(String(de.reply||de.error||(s?"Done — settings updated.":"Terminé — réglages mis à jour."))),h(!1))}catch{}},3e3)}catch(V){U((s?"Error: ":"Erreur : ")+String(V.message||V)),h(!1)}}};return l?t.jsxs("div",{className:"srceng"+(d?" on":""),children:[t.jsxs("button",{type:"button",className:"se-head","aria-expanded":d,onClick:()=>x(_=>!_),children:[t.jsx("span",{className:"se-ico",children:"🔎"}),t.jsx("b",{children:s?"Your sourcing engines":"Vos moteurs de sourcing"}),I&&t.jsx("span",{className:"se-sum",children:s?`${ae} active · ${te.toLocaleString("en-US")} companies found`:`${ae} actifs · ${te.toLocaleString("fr-FR")} sociétés trouvées`}),t.jsx("span",{className:"se-arr",children:d?"▾":"▸"})]}),d&&t.jsxs("div",{className:"se-body",children:[t.jsxs("div",{className:"se-bar",children:[lr.map(([_])=>t.jsx("button",{type:"button",className:"se-win"+(m===_?" on":""),onClick:()=>b(_),children:_==="1"?s?"Today":"Aujourd'hui":_==="all"?s?"All time":"Toujours":`${_} j`},_)),t.jsx("span",{className:"se-note",children:s?"Panel totals = the chosen window; the funnel above counts the screened view.":"Les totaux du panneau = la fenêtre choisie ; le tunnel compte les criblées de la vue."})]}),w&&t.jsx("div",{className:"se-load",children:s?"Reading engines…":"Lecture des moteurs…"}),!!v&&t.jsxs("div",{className:"se-err",children:[v," ",t.jsx("button",{type:"button",onClick:()=>void D(m),children:"↻"})]}),!w&&!v&&I&&t.jsx("div",{className:"se-cards",children:B.map(_=>t.jsxs("div",{className:"se-card"+(_.sourced===0?" idle":""),children:[t.jsxs("div",{className:"se-ct",children:[t.jsx("b",{children:Ha(_.key)}),(()=>{const K=Is(_.key),V=K?S[K]:void 0;if(!V||!o)return null;const ne=!!V.opt_in,H=ne?!!V.fund_on:V.fund_on!==!1,se=!ne&&V.global_enabled===!1,de=se?e.engGlobalOff:H?e.engOn:ne?e.engOptOff:e.engOff;return t.jsx("button",{type:"button",className:"se-sw"+(H?" on":"")+(se?" dead":""),disabled:se||L===K,title:ne?e.engHintOpt:e.engHint,onClick:oe=>{oe.stopPropagation(),q(K),hi(l,K,!H).then(re=>{if(q(""),!re.ok){c(re.error||e.engToggleFail);return}C(ye=>({...ye,[K]:{...V,fund_on:!H}})),i(e.engToggleNote)})},children:L===K?"…":de})})(),t.jsx("span",{className:"se-st"+(_.sourced>0?" ok":""),children:_.sourced>0?s?"⚡ actively sourcing":"⚡ source activement":s?"standby":"en veille"}),t.jsx(_s,{vals:_.spark})]}),t.jsx("p",{className:"se-desc",children:Ms(_.key,s)||(s?"Engine wired for your thesis.":"Moteur branché pour votre thèse.")}),t.jsxs("div",{className:"se-hero",children:[t.jsx("b",{children:_.sourced.toLocaleString(s?"en-US":"fr-FR")}),t.jsx("span",{children:s?"companies found":"sociétés trouvées"})]}),(_.matched>0||_.noMatch>0)&&t.jsxs("div",{className:"se-split",children:[s?"incl.":"dont"," ",t.jsxs("button",{type:"button",onClick:()=>N({eng:_.key,kind:"kept"}),children:[_.matched," MATCH"]})," · ",t.jsxs("button",{type:"button",onClick:()=>N({eng:_.key,kind:"rej"}),children:[_.noMatch," ",s?"ruled out":"écartées"]}),_.rate>0&&t.jsxs("em",{children:[" · ",_.rate,"%"]})]}),!!(I.params||{})[_.key]&&t.jsxs("div",{className:"se-params",children:[t.jsx("i",{children:s?"Your settings:":"Vos réglages :"})," ",String(JSON.stringify((I.params||{})[_.key])).slice(0,160)]}),t.jsxs("div",{className:"se-acts",children:[_.key==="local"&&o&&t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:"se-bod",disabled:M==="run",onClick:K=>{K.stopPropagation(),R("run"),gi(l,g||"").then(V=>{if(R(V.ok?"ok":"ko"),!V.ok){c(V.error||e.engBodaccKo);return}i(e.engBodaccOk),Bn(l).then(ne=>{const H={};ne.forEach(se=>{se.engine&&(H[se.engine]=se)}),C(H)})})},children:M==="run"?e.engBodaccRun:e.engBodacc}),t.jsx("p",{className:"se-desc",style:{margin:"4px 0 0"},children:e.engBodaccNote})]}),t.jsxs("button",{type:"button",className:"se-adj",onClick:()=>{F(ue(_.key)),U(""),window.setTimeout(()=>{ee.current&&(ee.current.focus(),ee.current.setSelectionRange(ee.current.value.length,ee.current.value.length))},60)},children:["✎ ",s?"Adjust this engine":"Ajuster ce moteur"]})]}),k&&k.eng===_.key&&t.jsxs("div",{className:"se-ovl",children:[t.jsxs("div",{className:"se-ovl-h",children:[t.jsx("b",{children:k.kind==="kept"?s?"MATCH via this engine":"MATCH via ce moteur":s?"Ruled out via this engine":"Écartées via ce moteur"}),t.jsx("button",{type:"button",onClick:()=>N(null),children:"×"})]}),t.jsx("ul",{children:_.leads.map(K=>{const V=(K.verdicts||[]).reduce((ne,H)=>!ne||String(H.check_date||"")>String(ne.check_date||"")?H:ne,null);return{l:K,dernier:V}}).filter(({dernier:K})=>((K==null?void 0:K.status)||"").trim().toUpperCase()===(k.kind==="kept"?"MATCH":"NO MATCH")).slice(0,100).map(({l:K,dernier:V},ne)=>{const H=(K.company_name||"").trim(),se=H&&J.has(H.toLowerCase());return t.jsxs("li",{children:[se?t.jsx("button",{type:"button",className:"se-jump",onClick:()=>{const de=J.get(H.toLowerCase());if(de)try{window.dispatchEvent(new CustomEvent("ppmap:focus",{detail:{id:de,name:H}}))}catch{}},children:H}):t.jsx("b",{children:H||"—"}),t.jsxs("span",{children:[he(be.get(H.toLowerCase())),typeof(V==null?void 0:V.score)=="number"&&V.score>0?` · ${Math.round(V.score)}`:""]})]},H+ne)})}),(()=>{const K=_.leads.filter(V=>{const ne=(V.verdicts||[]).reduce((se,de)=>!se||String(de.check_date||"")>String(se.check_date||"")?de:se,null);return((ne==null?void 0:ne.status)||"").trim().toUpperCase()===(k.kind==="kept"?"MATCH":"NO MATCH")}).length-100;return K>0?t.jsx("p",{className:"se-more",children:e.engMore(K)}):null})()]})]},_.key))}),!!$&&t.jsxs("div",{className:"se-nl",children:[t.jsxs("div",{className:"se-nl-h",children:["✎ ",s?"Correct this thesis":"Corriger cette thèse"]}),t.jsx("textarea",{ref:ee,rows:3,maxLength:12e3,defaultValue:$,placeholder:s?"Say what to change, in plain words…":"Dites ce qu’il faut changer, en langage naturel…"},$),t.jsxs("div",{className:"se-nl-a",children:[t.jsx("button",{type:"button",disabled:O,onClick:()=>void ge(),children:O?s?"⏳ applying…":"⏳ application…":s?"Apply":"Appliquer"}),t.jsx("button",{type:"button",className:"gh",onClick:()=>{F(""),U("")},children:s?"Close":"Fermer"})]}),!!A&&t.jsx("div",{className:"se-nl-r",children:A})]})]})]}):null}const $s={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Tout ce que STAN a passé au crible sur la fenêtre : chaque société évaluée selon vos critères, retenue ou écartée automatiquement.","STAN a retenu ces sociétés selon vos critères, décision justifiée. NOUS vérifions ses choix — écartez, validez, ou lancez une analyse sur les incertaines.","Les mémos de STAN, relus par NOUS : synergies chiffrées, verdict argumenté. Validez celles à contacter, mettez « à trancher » celles où vous hésitez.","À VOUS de jouer : les meilleures cibles, présentées le lundi par votre Corporate Developer. Tranchez OUI ou NON — vos oui passent en Validées.","Vos OUI — la short-list à contacter. NOUS préparons l’approche, ou l’engageons en votre nom (offre Entreprise).","Écartées par STAN ou par VOUS. Chaque NON affine les critères de Stan. Repêchez-en une à tout moment.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(e,a,r)=>`<b>${e} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${r} sans réponse.</b>`,morningThesis:(e,a,r)=>`Ce matin, <b>${e}</b> société${e===1?"":"s"} criblée${e===1?"":"s"} par vos moteurs`+(typeof r=="number"?`, <b>${r}</b> retenue${r===1?"":"s"}.`:".")+(a?` <b>${a}</b> attend${a>1?"ent":""} votre évaluation.`:' <span class="ok">Tout est évalué.</span>'),morningEnginesTitle:"Ces sociétés viennent UNIQUEMENT du sourcing de votre thèse : vos codes d’activité, vos pays, vos angles d’acquisition, vos critères d’exclusion. Aucune société d’un autre fonds n’entre ici. Seule la veille d’actualité part d’un ratissage commun pour des raisons de coût — mais chaque opération qui en sort est ensuite confrontée à vos critères, et n’entre dans votre page que si elle les passe.",morningLast:(e,a,r)=>`Dernier passage des moteurs le <b>${r}</b> : <b>${e}</b> société${e===1?"":"s"} sourcée${e===1?"":"s"}.`+(a?` <b>${a}</b> restante${a>1?"s":""} pas encore évaluée${a>1?"s":""}.`:' <span class="ok">Tout est évalué.</span>'),morningEval:e=>`▶ Les traiter (${e})`,identTitle:e=>`Cibles pour ${e}`,identCoverage:"Couverture du marché",identCoverageOf:(e,a)=>`<b>${e}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"Moteur de mémos",identPerDay:"mémo/jour",identPending:e=>`→ ${e} en attente`,identPendingWait:"→ lecture de la file…",identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Trier la liste",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:e=>`Décision annulée sur ${e}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ Oui",actNo:"✗ Non",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:e=>`${e} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"Crible · mémo",colCrible:"Crible",fVerdict:"Verdict",colMemo:"Mémo",colScore:"Score",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:e=>`Depuis le verdict de Stan : ${e} j`,waitChip:e=>`⏱ ${e} j`,densList:"Liste",densOpen:"Déplié",densLigne:"Ligne",densMaxi:"Maxi",unfoldAll:"Tout déplier",foldAllLbl:"Tout replier",foldArts:"Articles",zoomSrc:"Source",viewLink:"Voir l’article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Site web de la société",viewSiteBusyHint:"Recherche du site web…",viewSrcHint:"Article source",viewLinkClose:"Fermer l’article",viewLinkTab:"Ouvrir dans un onglet",viewLinkHint:"S’ouvre dans une nouvelle fenêtre",zoomSimilar:"Voir les similaires",zoomInCockpit:"Isoler dans la liste",zoomArt:"Edito du jour",zoomEvalHint:"Crible selon vos critères",zoomSimilarHint:"Même secteur dans la liste",zoomIsolateHint:"Ne garder que cette société",zoomNewsMark:"Décryptage de l’édition — le texte s’ouvre à droite",zoomPulseEval:"évaluables",zoomPulseExplore:"à explorer",zoomPulseArts:"actualités",doNews:"📰 Actualités",zoomPulseEd:"dans l’article du jour",zoomPulseBtn:"Édition du jour",zoomPulseWeek:"7 derniers jours",zoomPulseWeekEd:"cette semaine",doAll:"Tout",doEdito:"📖 Edito du jour",doBrief:"📖 Brief du jour",doEval:"⚡ Évaluables",doExplore:"🔎 À explorer",doAna:"⚡ À analyser",doBriefHint:"Afficher le brief du jour",doTodo:"⚡ À évaluer",doDone:"✓ Déjà évaluées",cdMemoTab:"📖 Mémo",evalPickSite:"plusieurs sites portent ce nom — ouvrez pour vérifier, puis validez celui qui est le bon.",evalPickGo:"✓ C’est celui-ci",evalPickChip:"Site à confirmer",eqNamePh:"Nom de société ou URL…",eqAdd:"Ajouter une ligne",eqNoSite:"aucun site trouvé — le nom sera évalué tel quel",eqReady:"prête",eqPick:"choisir le site →",eqRunning:"⏳ évaluation…",eqGo:e=>`⚡ Évaluer les ${e} lignes`,eqHint:"Vos lignes restent ici : remplissez en déplacement, lancez plus tard.",eqColName:"Société",eqColSite:"Site",eqColDesc:"Ce qu’elle fait",eqColState:"État",eqLookup:"recherche du site…",eqDescBusy:"lecture du site…",eqDescNone:"le site ne dit rien d’exploitable",eqDescQuota:"plafond de lecture atteint aujourd’hui",eqRunOne:"Évaluer cette ligne",sgGo:"💡 Trouver des sociétés proches",sgBusy:e=>`🔎 jumelles de ${e}…`,sgFrom:(e,a)=>`à partir de vos retenues (${e}${a>1?` +${a-1}`:""})`,sgQuota:"plafond du jour atteint (5 recherches) — à demain",sgNone:"rien de neuf : les jumelles trouvées sont déjà dans votre liste",sgVia:e=>`trouvée à partir de ${e}`,pxThesis:"votre thèse",pxGoThesis:"🎯 Chercher sur ma thèse",pxGoFree:"🔎 Chercher",pxPlace:"un mot porteur, ou un code NAF (66.22Z)",eqClearDone:"Retirer les évaluées",chainMemoGo:"⚡ Lancer le mémo (1 crédit)",analyseConfirm:e=>`Lancer ${e} mémo${e>1?"s":""} d’analyse ?

Cela consomme ${e} crédit${e>1?"s":""} mémo. Les sociétés partiront en « Analysées » ou « À trancher » une fois le mémo prêt.`,sortBy:"Trier par",sortSig:"Signal",sortAmount:"Montant",sortAge:"Récence",sortName:"Nom",sortCountry:"Pays",sortStage:"Stade",sortCrible:"Crible",sortMemo:"Mémo",sortScore:"Score",fMenu:"Filtres",memoSynth:"Synthèse",memoOpenFull:"📖 Voir le mémo complet →",memoDeep:"⚡ Mémo détaillé",memoDeepHint:"Pour ce dossier à trancher, vous pouvez lancer l’analyse détaillée : étude de marché, quadrant concurrentiel, scénarios.",memoDeepSent:e=>`Mémo détaillé lancé sur ${e} — prêt dans 35 à 40 minutes`,memoInstantSent:e=>`Analyse lancée sur ${e} — mémo prêt dans ~15 minutes`,liveStrip:"Analyses en direct",liveBoot:"lancement…",liveEnd:"fin {t}",liveOpenQueue:"Voir la file",memoNone:"Aucun mémo pour ce dossier — lancez l’analyse.",creditsCap:"Crédits mémo",creditsToday:"aujourd’hui",creditsRecharge:"Recharger →",creditsCost:e=>`−${e} crédit${e>1?"s":""}`,creditsNone:"Crédit épuisé — rechargez ou attendez demain 7 h.",rechargeTitle:"Crédits mémo",rechargeHint:e=>`Votre offre comprend <b>${e} crédits par jour</b>, rechargés chaque matin. Besoin de plus tout de suite ?`,rechargeNote:"Les crédits achetés n’expirent pas. Ils s’utilisent après vos crédits quotidiens.",rechargeBuy:"Ajouter",rechargeUnit:(e,a)=>`${e} crédits — ${a} €`,onbTag:"Aperçu privé · lecture seule",onbTitle:e=>`Votre deal flow est prêt — <b>${e} cibles retenues</b> par Stan`,onbSub:e=>`${e} sociétés passées au crible sur votre thèse. Les dix premières lignes sont ouvertes ; le reste se débloque en trente minutes.`,onbSteps:[["Stan a étudié votre présence en ligne","Site, offres d’emploi, presse — il en a déduit vos angles d’acquisition."],["Il a criblé le marché","Chaque société confrontée à vos critères."],["Il a rédigé des mémos","Analyses chiffrées, synergies, verdicts."],["À vous de trancher","Trente minutes pour régler votre deal flow et tout débloquer."]],onbCta:"Choisir un créneau →",lockbarText:"Paramétrons votre deal flow rêvé en 30 minutes, avec un Corporate Developer",lockbarContactBefore:"Alexandre — ",lockbarContactMid:" · ",lockbarCta:"Choisir un créneau",rdvHeading:"Paramétrons votre deal flow rêvé en 30 minutes",rdvSubBefore:"Choisissez un créneau ci-dessous, ou contactez votre expert Corporate Development directement au ",rdvSubMid:" ou par email à ",rdvCoFallback:"votre société",rdvUnlockLabel:e=>`Déblocage ${e}`,rdvUnlocks:e=>[["Accédez à toutes vos cibles retenues","Mémos d’investissement complets, synergies, contacts, angle d’approche."],["Stratégie d’acquisition construite avec vous","Hypothèse + stratégie d’acquisition recalibrées en live, avec vous."],["Tranchons ensemble les cibles que vous voulez","OUI / NON, sourcing de sociétés similaires, export et synchronisation CRM."],["Votre AI Corporate Developer est lancé",`Stan travaille pour ${e} chaque matin — vous n’avez plus qu’à décider.`]],identRepub:"Republier la page maintenant — re-rend la page avec ce qui est déjà connu. Gratuit : aucun moteur ne repart, aucun modèle n’est appelé si votre thèse n’a pas changé.",identRepubDone:"Republication lancée — vos chiffres se rafraîchissent en une trentaine de secondes. Actualisez la page pour les voir.",plugHow1:"Dans votre outil (Make, Zapier, n8n, HubSpot, Pipedrive…), créez un déclencheur « webhook » et copiez l’URL qu’il vous donne.",plugHow2:"Collez-la ci-dessous, Enregistrez, puis Testez : un message d’exemple part aussitôt dans votre outil.",plugHow3:"C’est fini. Trois moments déclenchent un envoi : vous validez une cible, vous la faites avancer d’un stade, ou une approche est préparée.",plugExT:"Ce que votre outil reçoit, exactement",plugExResult:"Dans votre CRM, vous obtenez une ligne par société validée : son nom, votre note, le score de Stan, son site et le lien du mémo.",plugApiT:"Une seule société, depuis un script ou Make",plugQuota:"Ce raccourci est plafonné à 10 sociétés par jour et par lien — le chemin normal reste la barre d’évaluation de la page.",plugFeeds:"Les flux JSON, CSV, Google Sheets et Excel vivent dans le bouton 📥 Exporter, juste à côté — ils ne sont pas répétés ici.",plugTokenNote:"⚠️ Ces liens portent la clé d’accès de cette page : partout où vous les collez, ils ouvrent vos cibles. Ne les mettez que dans vos propres outils.",plugDoc:"Documentation complète → proplace.co/api/",plugDestLbl:"Destination",plugDestWh:"Mon webhook",plugDestInst:"Instantly (campagne)",plugCampPh:"ID de campagne Instantly",plugCampNeed:"Instantly a besoin de l’ID de la campagne qui recevra ces cibles — il est dans l’URL de votre campagne.",plugDestInstOn:e=>`Instantly · campagne ${e}`,plugAutoT:"⚡ Envoi automatique",plugAutoSub:"Activez-le : chaque cible que vous validez entre toute seule dans votre séquence. Vous ne revenez plus ici.",plugAutoOnLbl:"Envoyer automatiquement chaque cible validée",plugAutoNeed:"Enregistrez d’abord un webhook ci-dessus, ou choisissez Instantly.",plugAutoSavedOn:"Envoi automatique activé — chaque cible validée partira toute seule.",plugAutoSavedOff:"Envoi automatique arrêté.",plugAutoBroken:"⚠ Rien ne part : l’envoi automatique vise votre webhook, mais aucun webhook n’est enregistré. Enregistrez-en un ci-dessus, ou arrêtez l’envoi automatique.",notesT:"📝 Carnet de suivi",notesHint:"Vos notes sur ce dossier, datées. Elles vivent dans la fiche du deal — vous et votre équipe les relisez au même endroit.",notesPh:"Ce que vous voulez retenir : un appel, une objection, un chiffre…",notesAdd:"Ajouter",notesAdded:"Note ajoutée ✓",notesEmpty:"Aucune note pour l’instant.",notesErr:"Échec — réessayez.",notesEdit:"Modifier",notesDel:"Supprimer",notesDelAsk:"Supprimer cette note ?",notesSave:"Enregistrer",notesCancel:"Annuler",notesLoading:"Lecture du carnet…",notesCount:e=>`${e} note${e>1?"s":""}`,apprT:e=>`Brouillon d’approche — ${e}`,apprSeqHint:"4 messages espacés : J0, J2, J4, J6.",apprWait:"Rédaction de la séquence sur mesure…",apprFail:"Génération indisponible — réessayez dans un instant.",apprChEmail:"✉ Email",apprChLi:"in LinkedIn",apprSubj:"Objet",apprCopy:"📋 Copier ce message",apprMailto:"✉ Ouvrir dans votre email",apprLiNote:"Demande de connexion : sans note.",apprEdited:"✎ modifié",apprLocal:"Vos retouches restent dans cette fenêtre — elles ne sont pas enregistrées sur le serveur. Copiez le message avant de fermer.",apprSender:e=>`Signé : ${e}`,avisIntro:(e,a)=>`🎯 Stan a remarqué que vous écartez souvent le secteur « ${e} » (${a} refus).`,avisAsk:"Voulez-vous qu’il en source moins ?",avisYes:"Oui, recalibrer",avisNo:"Ignorer",avisRunning:"Recalibrage de votre thèse…",avisDone:"✓ C’est fait — Stan a recalibré votre thèse. Vous en verrez moins.",avisFail:"Recalibrage impossible pour le moment — réessayez bientôt.",propT:"🧠 Ce que vos avis disent de votre thèse",propSub:"Vos 👍/👎 — et surtout ce que vous écrivez en dessous — racontent comment vous choisissez. Stan les relit ensemble et propose les corrections qui rapprocheraient la prochaine sélection de votre propre jugement. Rien n’est appliqué sans vous.",propBtn:"Relire mes avis et proposer des corrections",propWait:"Relecture de vos avis…",propNone:"Rien d’assez solide pour l’instant. Un avis isolé ne déplace jamais une thèse : continuez à juger les cartes (une ligne de « pourquoi » aide énormément) et revenez.",propFew:e=>`Pas encore assez d’avis — ${e} société${e>1?"s":""} jugée${e>1?"s":""}. Continuez, puis revenez.`,propFrom:"D’après :",propApply:"Appliquer cette correction",propSkip:"Pas celle-ci",propApplying:"Application…",propApplied:"Appliqué ✓ — Stan source désormais sur la version corrigée.",propApplyFail:"Application impossible — réessayez.",propKo:"Relecture impossible pour le moment — ce n’est pas vous, c’est le moteur. Réessayez dans un instant.",propSlow:"Stan travaille encore sur cette correction — elle s’appliquera d’elle-même. Le carnet de bord vous le dira.",engOn:"● actif ici",engOff:"○ coupé ici",engOptOff:"○ à activer",engGlobalOff:"⊘ éteint (global)",engHintOpt:"Moteur optionnel (Maps payant + BODACC gratuit) : activez-le pour CE fonds, puis lancez BODACC à la demande.",engHint:"Active ou coupe ce moteur POUR CE FONDS — le pool partagé n’est pas touché.",engToggleFail:"Réglage impossible — réessayez.",engToggleNote:"Le réglage prend effet au prochain passage du sourcing : rien n’est retiré de ce qui est déjà là.",engBodacc:"Lancer BODACC (gratuit) maintenant",engBodaccRun:"Lancement…",engBodaccNote:"Bulletin officiel FR gratuit (liquidations, cessions, radiations). Google Maps reste optionnel et payant.",engBodaccOk:"Radar BODACC lancé pour ce fonds. Actualisez la page dans quelques minutes.",engBodaccKo:"Lancement impossible — réessayez.",engMore:e=>`+ ${e} autre${e>1?"s":""}`,propSections:{hypothesis:"L’hypothèse",profils:"Les profils visés",gate:"Le crible Retenu / Écarté",rubric:"La décision d’analyse"},plugCrmRecipeT:"Pipedrive, HubSpot, Salesforce — ils n’acceptent pas un lien vivant : il leur faut un scénario, à brancher UNE fois.",plugCrmRecipeOpen:"Voir la recette, en 4 modules",plugCrmR1:"① Dans Make (ou Zapier), planifiez un scénario toutes les heures qui commence par HTTP → « Make a request » sur le lien JSON de 📥 Exporter.",plugCrmR2:"② Ajoutez un « Iterator » sur le tableau reçu : une itération = une société.",plugCrmR3:"③ Pipedrive → « Search organizations », en cherchant sur le domaine (il doit figurer quelque part sur la fiche — site web ou champ personnalisé ; sinon cherchez sur le nom). HubSpot, lui, rapproche nativement ses entreprises sur le domaine : c’est encore plus direct.",plugCrmR4:"④ Pipedrive → « Update an organization » : nos colonnes atterrissent dans les champs personnalisés que vous aurez créés (verdict, conviction, angle, lien mémo). Branchez « Add an organization » sur la sortie « rien trouvé » : les sociétés que vous n’aviez pas encore sont créées au lieu d’être perdues.",plugCrmRNote:"À la main, sans scénario ? Ouvrez le lien CSV (ou Excel) dans votre navigateur pour récupérer le fichier, puis passez-le à l’import de votre CRM. Réservez ce chemin aux sociétés que vous n’avez PAS encore : un import de fichier ne sait pas rapprocher proprement sur le domaine, il crée des doublons.",plugVarsT:"Voir les 15 variables reçues par cible",plugVars:"first_name, last_name, email, company_name, phone, website, linkedin, sector, country · angle, why, verdict, conviction_score, memo_url, memo_pdf_url.",plugRefT:"Voir les réglages du lien et les 26 colonnes",plugOpt:"Deux réglages à coller à la FIN du lien (il contient déjà « ? », on ajoute avec « & ») : « &tab=valides » ne renvoie que vos cibles validées (aussi call, retenus, ecartes, chauds) ; « &since=AAAA-MM-JJ » ne renvoie que ce qui a bougé depuis cette date — c’est ce qu’il faut pour une synchro qui tourne en boucle.",plugCols:"26 colonnes par société : company, domain, first_name, last_name, email, linkedin, phone, website, linkedin_company, country, sector, stage, ceo_status, verdict, conviction_score, engagement, angle, memo_url, memo_pdf_url, memo_type, status, score, tagline, engine, detected, reasoning.",plugCrmQT:"🔗 Et dans votre CRM ?",plugCrmQ1:"Vos fiches HubSpot, Pipedrive ou Airtable portent nos colonnes, MATCH / NO MATCH compris : c’est la recette ci-dessus, branchée une fois.",plugCrmQ2:"Un bouton posé dans la fiche lance le mémo sans revenir ici : le mémo rapide sur n’importe quelle société de votre liste, le mémo complet sur celles que vous avez passées à « À trancher ».",plugCrmQ3:"Le lien du mémo revient dans la fiche à la synchro suivante (colonne memo_url) : un mémo met quelques minutes à s’écrire, il n’est donc jamais prêt dans la seconde.",plugApiMemoLbl:"Lancer le mémo rapide d’une société (« detailed_request » pour le mémo complet) :",csNone:"Statut",csAnaNeedMemo:"Pour passer en « Analysée », il faut un mémo.",csAnaRun:"⚡ Lancer le mémo (1 crédit)",csAnaAnyway:"Marquer quand même",qOffer:"Votre offre",qDelay:"délai de verdict",qRate:e=>`${e} mémo${e>1?"s":""} par jour`,qManual:e=>`${e} mémo par jour, à votre demande`,qPaused:"aucun mémo automatique",qManualSet:"rythme réglé à la main",qEta:(e,a,r)=>`À ce rythme (${a}/jour), il reste ${e} mémo${e>1?"s":""} à écrire — toute la file est traitée en ${r} jour${r>1?"s":""}.`,qEtaPaused:"Rythme à zéro : rien ne part. Activez une offre pour projeter une date.",qEtaDone:"Toute la file est déjà analysée.",qLate:(e,a)=>`Le délai « ${e} » ne peut pas être tenu : il faudrait dépasser le plafond de ${a} mémos par jour.`,qRunning:"En cours",qUpNext:e=>`À venir — ${e} société${e>1?"s":""} dans la file, dans l’ordre de tirage`,qUpNextWait:"À venir — lecture de la file…",qFileWait:"Lecture de la file en cours — quelques secondes.",qHedge:"Ordre projeté, recalculé chaque matin. Un lead frais tombé dans la nuit passe devant.",qFresh:"frais",qLater:"plus tard",qVerdictsT:"Les verdicts de Stan — où part chaque dossier",qVerdicts:[["CALL","sa meilleure trouvaille : à vous de trancher OUI ou NON → onglet « À trancher »."],["CONSIDER","solide, mérite un regard de plus → onglet « Analysées »."],["MONITOR","à garder à l’œil, pas encore prioritaire → onglet « Analysées »."],["PASS","hors sujet pour l’instant → onglet « Écartées »."]],covHowT:"D’où vient ce chiffre ?",covTotal:"Total du marché",covColCode:"Code · pays",covColN:"Sociétés",covColSource:"Source",covWide:e=>`${e} non publié — élargi au code parent`,covMissing:"aucune donnée publiée",covRejected:e=>`Codes écartés faute de sociétés trouvées : ${e}.`,covComputedAt:e=>`calculé le ${e}`,filterOff:"Retirer ce filtre",fSelected:"sélectionnés",funScreened:(e,a)=>`sociétés criblées${e?a?` du ${e} au ${a}`:` depuis le ${e}`:""}`,funKept:"retenues comme cibles sérieuses",funAnalyzed:"analysées en profondeur",funShown:"publiées sur votre page, tous filtres levés",sigStripMore:e=>`+ voir les ${e} autre${e>1?"s":""}`,boxCollapse:"Réduire",boxExpand:"Agrandir",memoReadHere:"📄 Lire le mémo ici",memoHideHere:"▴ Replier le mémo",sigChipTitle:(e,a)=>`Signalé ${e} · ${a}`,funPerWindow:(e,a)=>`Du ${e} au ${a}`,funPerAll:"Depuis le début",funOfMarket:(e,a)=>`sur ~${e} sociétés de votre marché, soit ${a} %`,funScope:"Sourcing de votre thèse uniquement — vos codes d’activité, vos pays, vos angles. Aucune société d’un autre fonds n’est comptée ici.",funToday:e=>`dont ${e} aujourd’hui`,actTitle:"Activité des 30 derniers jours",actScreened:"criblées",actKept:"retenues",actToday:"aujourd’hui",fstatsShow:"Voir l’activité des 30 derniers jours",fstatsHide:"Masquer l’activité",sinceTitle:(e,a)=>`${e} nouvelle${e>1?"s":""} cible${e>1?"s":""} depuis votre dernière visite (${a})`,sinceSub:"arrivées depuis votre dernier passage — à parcourir en premier",sinceMore:e=>`+${e} autres`,sinceOut:e=>`${e} sortie${e>1?"s":""} de la liste`,morningDock:e=>e?`${e} criblées ce matin`:"Crible du matin",morningDockTitle:"Voir les sociétés criblées aujourd’hui — quel qu’ait été le verdict.",sinceDock:e=>`${e} nouvelle${e>1?"s":""}`,sigDock:e=>`${e} ${e>1?"signaux":"signal"}`,newsDock:e=>`${e} actualité${e>1?"s":""}`,newsSince:e=>`depuis le ${e}`,newsDockHint:"Les articles du flux — tribunes, listes, récaps — sans société évaluable. « Extraire les sociétés » est le pont vers l’évaluation.",newsWord:"actualités — lecture, pas décision",identSyncConfirm:"Relancer le sourcing maintenant ? Un passage des moteurs prend quelques minutes.",plugAutoOn:e=>`⚡ Envoi automatique ACTIF (${e}) — chaque cible que vous validez part toute seule en séquence.`,plugAutoOff:"Envoi automatique inactif — valider une cible ne l’envoie nulle part.",plugCrm:"Créer les dossiers dans mon CRM",plugCrmHint:"Collez l’URL de webhook de votre outil : chaque décision y arrive aussitôt.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Enregistrer",plugSaved:"Webhook enregistré",plugTest:"Tester",plugTested:"Test envoyé",plugTestThrottled:"Déjà testé il y a moins de 5 s — rien n’est reparti.",plugRemove:"Retirer",plugRemoved:"Webhook retiré",plugMcp:"Claude & IA (MCP)",plugBulk:"Contacter mes cibles",plugBulkHint:"Voyez d’abord qui partirait : l’aperçu ne contacte personne.",plugBulkTabs:[["valides","Validées"],["call","À trancher"],["retenus","Retenues"]],plugBulkPreview:"👁 Aperçu",bulkArm:"📤 Envoyer pour de vrai",bulkNoDest:"Aucune destination enregistrée : renseignez d’abord votre outil ci-dessus.",bulkScope:"Ce qui part, c’est l’onglet entier côté serveur — pas la vue filtrée à l’écran.",bulkWarn:(e,a)=>`Vous allez contacter ${e} société${e>1?"s":""} via ${a}. C’est irréversible, et le serveur ne vérifie pas si elles ont déjà été contactées.`,bulkConfirm:e=>`Oui, envoyer via ${e}`,bulkCancel:"Annuler",bulkSending:"Envoi en cours…",bulkDone:(e,a,r)=>`${e} société${e>1?"s":""} envoyée${e>1?"s":""}. ${a} joignable${a>1?"s":""} sur LinkedIn seulement, ${r} sans email.`,bulkNone:"Aucune société n’avait d’email : rien n’a été envoyé.",bulkLocked:(e,a)=>`Envoyé le ${e} — ${a} société${a>1?"s":""}. Nouvel envoi possible dans 24 h.`,bulkPreviewFirst:"Lancez d’abord l’aperçu : il dit exactement qui partirait.",cdEvaluation:"Évaluation",cdConviction:"Conviction",cdAnalyse:"Analyse",cdSociete:"Société",cdContact:"Contact",cdSuivi:"Suivi",actMemoOf:e=>e==="detailed"?"📖 Lire le mémo détaillé":"📖 Lire le mémo éclair",memoLoading:"Lecture du mémo…",memoLoadErr:"Le mémo ne se laisse pas lire ici — ouvrez-le en pleine page.",memoUnfold:e=>`Déplier cette section (${e} Ko)`,cdEngagementHint:"Score d’activité du dossier : vos clics et demandes sur cette page, plus l’avancement de l’approche commerciale. À partir de 20, le dossier est marqué 🔥.",mdMindmap:e=>`Carte mentale — ce que fait ${e}`,mdContactKnown:"Décideur — coordonnées du cockpit",cdCrible:"au crible",cdMemo:e=>e?`après mémo ${e}`:"après mémo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict du",cdSector:"Secteur",cdStage:"Stade",cdCountry:"Où",cdSite:"Site",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Détectée le",cdName:"Dirigeant",cdEmail:"Email",cdPhone:"Téléphone",cdCeoStatus:"Votre décision",cdEngagement:"Engagement",qaTitle:"Décrire cette société",qaHint:"Lecture de son site, puis quatre blocs : à qui elle s’adresse, ce qu’elle vend, comment elle gagne de l’argent, et ce qu’il faut en retenir. Aucun verdict — le crible a déjà tranché.",qaRun:"📄 Décrire",qaBusy:"Lecture du site…",qaVP:"À qui, et pour quel problème",qaProduct:"Ce qu’elle vend",qaModel:"Comment elle gagne de l’argent",qaSummary:"À retenir",qaSources:e=>`${e} page${e>1?"s":""} lue${e>1?"s":""}`,qaQuota:"Plafond du jour atteint : réessayez demain.",qaEmpty:"Le site ne dit rien d’exploitable — rien n’a été inventé.",dsBtn:"🗂 Dossier comité",dsHint:"Un A4 par société : le verdict du crible et sa raison, l’identité, l’analyse quand elle a été lancée, et votre décision. Aucun chiffre financier — nous n’en recevons aucun.",dsTitle:e=>`Dossier comité — ${e} société${e>1?"s":""}`,dsCap:(e,a)=>`Les ${e} premières sur ${a} : un comité ne lit pas ${a} pages.`,dsWhy:"Pourquoi cette société est devant vous",dsAnalysis:"Ce qu’elle fait",dsDecision:"Votre décision",dsEmpty:"Aucune société dans la sélection courante.",dsFoot:e=>`Sélection établie par Proplace pour ${e} — document interne, ne pas diffuser.`,covFunnel:"Votre marché, au crible",covScreened:e=>`${e} sociétés passées au crible`,covOf:e=>`sur ~${e} sociétés pertinentes`,covNoEst:"Votre marché adressable n’est pas encore chiffré : la couverture s’affichera dès qu’il le sera.",covPace:e=>`${e} sociétés criblées par jour`,covEta:e=>e<=0?"Votre marché est entièrement couvert.":e<60?`Couverture complète dans ~${e} jours, à ce rythme.`:`Couverture complète dans ~${Math.round(e/30)} mois, à ce rythme.`,covRate:"Rythme d’analyse",covRateHint:"Combien de sociétés retenues reçoivent un verdict argumenté chaque jour. À zéro, l’analyse est en pause.",covRateNow:e=>e<=0?"En pause":`${e} par jour`,covKept:"retenues",covAna:"analysées",covScopeAll:"sur le monde entier",covShown:"présentées ici",bulkReplayed:"Cet envoi avait déjà été enregistré : rien n’est reparti. Vos cibles n’ont été contactées qu’une fois.",bulkPending:"L’envoi précédent est encore en cours : rien n’a été renvoyé.",plugBulkResult:(e,a,r)=>`${e} partiraient par email · ${a} par LinkedIn · ${r} sans contact.`,memoAlertTitle:"Votre alerte mémo",memoAlertSub:"Recevez un email dès qu’un mémo de votre fonds est finalisé — avec son lien direct.",memoAlertToggle:"M’envoyer chaque mémo terminé",memoAlertEmail:"Destinataire",memoAlertSaved:"Enregistré ✓",memoAlertErr:"Échec d’enregistrement — réessayez",memoAlertSections:"Sections de l’email",memoAlertSec:[["swot","SWOT"],["action","Plan d’action"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Verdict de Stan"]],memoAlertPreview:"👁 Prévisualiser",memoAlertBtn:"Votre alerte mémo",alertTabDaily:"Quotidien",alertTabWeekly:"Hebdomadaire",alertTabMarket:"Le marché",alertSections:"Sections de l’email",alertSec:[["pending","Dossiers à trancher"],["stats","Vos chiffres clés"],["autonomous","Décisions automatiques de Stan"],["market","Analyse de marché"],["sourcing","Votre sourcing du jour"]],alertSecSlow:"(plus long à générer)",alertSecNote:"Décocher l’analyse de marché rend l’aperçu instantané.",alertPreview:"👁 Prévisualiser l’email d’aujourd’hui",alertPreviewWeekly:"👁 Prévisualiser le bilan",alertSubject:"Objet :",alertPreviewBusy:"Aperçu en cours de génération, réessayez dans quelques secondes.",alertPreviewRetry:e=>`Génération en cours — nouvel essai dans ${e} s…`,alertPreviewFail:"Aperçu indisponible pour l’instant — décochez « Analyse de marché » pour l’obtenir tout de suite.",alertPreviewEmpty:"À cet instant : rien à trancher — l’email ne partira pas.",alertTest:"✉ M’envoyer un test",alertTestOk:e=>`✓ Envoyé à ${e} — vérifiez aussi vos spams/promotions.`,alertTestHint:"N’affecte pas l’envoi quotidien.",alertBtnPrevBusy:"⏳ Fabrication…",alertBtnTestBusy:"⏳ Envoi…",alertPreviewWait:e=>`Fabrication de votre email — ${e} s. Le premier aperçu de la journée demande jusqu’à 90 s : il est rendu pour de vrai, pas simulé. Vous pouvez laisser la fenêtre ouverte.`,alertTestWait:e=>`Envoi en cours — ${e} s. L’email est d’abord fabriqué, puis expédié dans votre boîte. Ne refermez pas la fenêtre.`,csMoved:(e,a)=>`${e} → ${a} · la ligne rejoint l’onglet correspondant.`,sinceLabel:e=>e?`nouvelles depuis votre visite du ${e}`:"nouvelles depuis votre dernière visite",sinceChip:"nouvelles",sinceSince:e=>`depuis le ${e}`,alertSaving:"Enregistrement…",alertSavedShort:"✓ Enregistré",alertReadOnly:"Vue de démonstration : ces réglages sont en lecture seule.",alertWeeklySub:"Un email par semaine : le bilan de la semaine et ce que votre thèse a appris de vos décisions.",alertWeeklyOn:"📬 Recevoir votre bilan de la semaine",alertWeeklyWhen:"Jour et heure d’envoi (Paris)",alertDow:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],alertLoadError:"Impossible de charger vos préférences.",alertThrottled:"Trop vite — attendez quelques secondes et refaites le réglage.",alertInactive:"Votre accès n’est pas encore actif — parlons-en.",alertNoLead:"Destinataire à définir avec nous.",exportViewTitle:"CSV de la vue filtrée",exportViewDesc:e=>`Les ${e} lignes de votre sélection actuelle — onglet, facettes, recherche et fenêtre comprises. Séparateur « ; », prêt pour Excel.`,exportViewBtn:"Télécharger",exportViewDone:e=>`${e} ligne${e>1?"s":""} exportée${e>1?"s":""}`,printTitle:"Imprimer la sélection",printDesc:e=>`Les ${e} lignes à l'écran, en A4 : pour qui, à quelle date, l'entonnoir chiffré, puis la liste. La carte, les filtres et les boutons ne sont pas imprimés.`,printBtn:"Imprimer",exportViewHead:"Société|Statut|Verdict Stan|Score|Pays|Secteur|Étape post-OUI|Contact|Email|Lien mémo|Date|Raison",tourStart:"Lancer le guide pas à pas",tourIntro:"La visite guidée couvre toute la page de A à Z, sur la vraie page : chaque étape éclaire l’endroit exact — de votre thèse à votre alerte email.",tourStep:(e,a)=>`Étape ${e}/${a}`,tourPrev:"← Précédent",tourNext:"Suivant →",tourDone:"Terminer",tourClose:"Fermer",tourPlayTitle:"Visite guidée",ahaATitle1:"1 dossier attend votre décision",ahaATitleN:e=>`${e} dossiers attendent votre décision`,ahaABody:"OUI = on prépare l’approche ; NON = on affine le tir.",ahaABtn:"Trancher maintenant →",ahaBTitle:"Un mémo complet vous attend",ahaBBody:e=>`${e} a déjà son mémo d’analyse — lisible en 3 minutes.`,ahaBBtn:"Ouvrir le mémo →",ahaRetTitle:e=>e===1?"1 société retenue vous attend":`${e} sociétés retenues vous attendent`,ahaRetBody:"Le tri de Stan est fait — chaque retenue a sa fiche, sa carte et son signal.",ahaRetBtn:"Voir les sociétés retenues →",ahaEvalTitle:e=>e===1?"1 société attend votre évaluation":`${e} sociétés attendent votre évaluation`,ahaEvalBody:"Rien n’est encore retenu : c’est la première pile à dérouler. Une société à la fois, Stan fait le crible.",ahaEvalBtn:"Ouvrir la pile à évaluer →",loadMsgs:["Réveil des moteurs de sourcing…","Chargement de vos cibles…","Les cartes et les signaux arrivent…","Tri selon votre thèse…","Encore un instant — le premier chargement est le plus long."],ahaCTitle:"Vos premières cibles sont là",ahaCBody:"Dites-nous si ça vise juste — chaque retour affine la machine.",ahaCBtn:"Voir mes critères →",howto:[["**Réglez votre ciblage.** Ouvrez « Vos critères » : c’est votre thèse — ce que vous cherchez, ce que vous écartez. Corrigez-la en langage naturel dès que quelque chose cloche ; le sourcing du lendemain matin s’y réaligne tout seul.","crit"],["**Sourcez un maximum de cibles.** Évaluez une société en collant son nom ou son site — ou une liste entière —, et regardez vos moteurs ratisser le web avec vos réglages.","eval"],["**Faites avancer chaque cible dans le tunnel, de gauche à droite** — Évaluées › Retenues › Analysées › À trancher › Validées › Écartées. Sur chaque carte, « Votre statut » la classe en un clic ; votre note « pourquoi » reste visible. Les 👍/👎 ne classent jamais : ils affinent votre thèse.","tab1"],["**Tranchez les « À trancher ».** Stan vous laisse le dernier mot : OUI (Validée) ou NON (Écartée), avec un mot sur le pourquoi.","tab3"],["**Comprenez comment Stan classe vos cibles.** Votre statut prime toujours sur le verdict de Stan. Le pont entre les deux est expliqué dans « Vos critères » : Retenu ↔ MATCH, Analysé ↔ CONSIDER · MONITOR, À trancher ↔ CALL, Écarté ↔ NO MATCH · PASS…","crit"],["**Concentrez-vous sur les Validées** — et menez chaque dossier jusqu’au bout du closing !","tab4"],["**Faites sortir tout ça de la page.** Le bouton 🔌 la branche sur vos outils : envoyer vos cibles dans votre séquence d’emailing, créer les fiches dans votre CRM, enrichir les dossiers que vous y avez déjà.","plug"],["**Ne revenez que si ça vaut le coup.** Le bouton 🔔 règle deux emails : le quotidien des dossiers à trancher, et le bilan de la semaine.","alert"]],fhintLive:"Ce qui bouge en ce moment sur votre marché — cliquez une vignette pour ouvrir la source.",fhintGoal:"Ce que les moteurs ont sourcé au dernier passage, et ce qu’il reste à évaluer.",fhintSrcEng:`Chaque carte est un **moteur** : une requête qui ratisse une source précise — bases de données, presse spécialisée, annonces, signaux — avec vos réglages.
· **Sociétés trouvées** : sa production sur la fenêtre choisie (1, 3, 7 jours ou toujours) — dont MATCH et écartées, deux nombres cliquables qui listent les sociétés.
· **Vos réglages** : ce que votre thèse impose à ce moteur.
· **✎ Ajuster ce moteur** : écrivez la correction en français — le sourcing du lendemain repart réaligné.`,fhintDecide:`OUI → Validées (à contacter). NON → Écartées.
· Les deux boutons sont sur la ligne : pas besoin de déplier.
· Ajoutez un mot sur le POURQUOI — c’est lui qui affine la thèse, bien plus que le clic.`,fhintMemoDeep:`Stan a classé ce dossier CALL : il pense que ça mérite votre temps.
· Le mémo détaillé (~35-40 min) creuse avant que vous tranchiez.
· Si un mémo est déjà prêt, le bouton dit « Lire » — rien à relancer.`,fhintStage:`Chaque Validée porte son pipeline : Contactée › A répondu › RDV › LOI › Signée.
· Un clic met le stade à jour.
· Sans réponse depuis quatre jours, la ligne vous le signale d’elle-même.`,fhintAppr:`Quatre messages espacés — J0, J2, J4, J6 — écrits sur ce dossier précis, en e-mail ou en LinkedIn.
· Vous les modifiez avant d’envoyer.
· Rien ne part tout seul : vous copiez, ou vous ouvrez votre email.`,fhintTabAna:`Les dossiers dont le mémo est déjà lancé.
· Ouvrez-en un pour lire le mémo et décider la suite.`,fhintTabValid:`Votre OUI.
· Préparez l’approche, faites avancer le pipeline, gardez le suivi en mouvement.`,fhintTabRej:`Mises de côté pour l’instant.
· Changé d’avis ? Repêchez-en une dans le tunnel — rien n’est perdu.`,fhintRank:`Le n°1 est votre priorité du moment.
· D’abord vos CALL à trancher, puis les mémos déjà lancés, puis le reste par conviction.
· Chaque onglet du tunnel dit où en est un dossier.`,fhintImprove:`Chaque semaine, Stan fait évoluer votre thèse — appliquée le lundi.
· Vos 👍/👎 et vos notes OUI / NON affinent la sélection suivante encore plus vite.
· « Vos critères » vous montre ce qu’il a compris, et vous laisse le corriger.`,fhintGoalAt:e=>`Dernier passage des moteurs : **${e}**.
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
· Un mémo = **1 crédit**, une société à la fois : rien ne part jamais en lot.`,tourToday:"ce matin",tourNoRun:"aucun passage enregistré",tourT:{ident:"Le bandeau de votre fonds",cover:"Votre couverture du marché",engine:"Le moteur de mémos",live:"Le direct",goal:"Le dernier sourcing",engines:"Vos moteurs de sourcing",decide:"OUI ou NON — le dernier mot",memoDeep:"Le mémo détaillé, avant de trancher",stage:"Après le OUI, le suivi",appr:"Le premier message, écrit pour vous",tabAna:"Analysées",tabValid:"Validées",tabRej:"Écartées",rank:"L’ordre de la liste est un classement",improve:"Stan s’améliore tout seul — et vous l’accélérez",funnel:"Le tunnel",tuto:"L’étape en cours",demand:"Évaluer une société",chips:"Les statuts, sur la ligne",dec:"Pourquoi cette décision",memo:"Le mémo détaillé",status:"Votre statut",learn:"Vos 👍 / 👎",tools:"Brancher vos outils",exportT:"Exporter en CSV",alerts:"Vos alertes email",crit:"Le paramétrage de Stan"},fhintExport:"Sortez vos cibles au format CSV — la sélection courante, avec ses colonnes, prête pour votre tableur ou votre CRM.",fhintAlerts:"Réglez ce qui vous arrive par email : le brief du matin, le bilan de la semaine, et l’alerte quand un mémo est prêt.",csLabel:"Votre statut :",csKept:"Retenu",csAnalysed:"Analysé",csPending:"À trancher",csValidated:"Validé",csOut:"Écarté",csYes:"✓ Oui",csNo:"✗ Non",csSaved:"✓ enreg.",csNoteSaved:"note ajoutée ✓",csNoteOk:"OK",csNotePh:"Pourquoi ? (une ligne)",csAnaConfirm:"Aucun mémo sur ce dossier — le passer en Analysé quand même ?",whySend:"Envoyer",whyYesPh:"Pourquoi ce OUI ? (une ligne — ça affine votre thèse)",whyNoPh:"Pourquoi ce NON ? (une ligne — ça affine votre thèse)",stgLabel:"Votre avancement :",stg:[["todo","○ À faire"],["sent","✉ Contactée"],["replied","💬 A répondu"],["meeting","🤝 RDV"],["loi","📄 LOI"],["signed","✅ Signée"],["lost","✖ Perdue"]],j4Badge:e=>`⏰ Sans réponse depuis ${e} j — relancer ?`,actRepeche:"↩ Repêcher",actRegen:"↻ Régénérer le mémo",memoRegenAsk:e=>`Refaire le mémo détaillé de ${e} ? L’actuel sera remplacé, et cela consomme un crédit.`,actErr:"Envoi impossible — réessayez dans un instant.",actNotPersisted:"Impossible d’enregistrer ce statut sur ce dossier.",decidedYes:e=>`${e} validée — place à l’approche`,decidedNo:e=>`${e} écartée`,repeched:e=>`${e} repêchée — de retour dans Retenues`,critHypTitle:"Notre hypothèse sur votre stratégie",critHypSub:"Toute la sélection en découle. Si elle est à côté, corrigez-la ci-dessous — la recherche est réalignée et vous recevez une sélection corrigée.",critProfilsTitle:"Vos profils de cibles",critProfilsSub:"Les familles de cibles que la machine traque en continu — chaque profil se déplie.",critLookFor:"Ce que nous recherchons",critRuleOut:"Ce que nous écartons",critGateTitle:"Le crible de Stan — comment il décide Retenu / Écarté",critGateSub:"Chaque société est confrontée à ces critères. C’est à eux que renvoient les « STEP A, C… » des raisons affichées sur les lignes.",rubricTitle:"Comment Stan décide l’analyse (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Une fois retenu, Stan approfondit et tranche. Voici ce qui fait pencher la balance.",qvTitle:"Les verdicts de Stan — où va chaque dossier",qv:[["CALL PENDING","le choix n°1 de Stan : à trancher OUI/NON maintenant → onglet « À trancher »."],["CALL YES","vous avez tranché OUI — le dossier rejoint « Validées », place à l’approche."],["CALL NO","vous avez tranché NON — le dossier rejoint « Écartées »."],["CONSIDER","solide, mérite un regard plus attentif → onglet « Analysées »."],["MONITOR","à surveiller, pas prioritaire pour l’instant → onglet « Analysées »."],["PASS","non pertinent pour le moment → onglet « Écartées »."]],brTitle:"Le routage automatique — où le verdict de Stan envoie chaque dossier",br:[["Retenu","MATCH — retenue au sourcing, mémo à venir → onglet « Retenues »"],["Analysé","CONSIDER · MONITOR — mémo fait, pas de call → onglet « Analysées »"],["À trancher","CALL PENDING — Stan propose un call, votre OUI/NON est attendu → onglet « À trancher »"],["Validé","CALL YES — vous avez tranché OUI → onglet « Validées »"],["Écarté","NO MATCH · PASS · CALL NO — refus de Stan, ou votre NON sur un call → onglet « Écartées »"]],brNote:"Un CALL passe par 3 états : CALL PENDING (le mémo est TERMINÉ, Stan propose le call — votre décision est en attente) › CALL YES (vous validez) › CALL NO (vous écartez). PENDING ne veut jamais dire « en cours d’analyse » : l’analyse est déjà faite.",vt:{MATCH:"MATCH — retenu : correspond à vos critères.","NO MATCH":"NO MATCH — écarté par vos critères.","CALL PENDING":"CALL — le choix n°1 de Stan : à trancher OUI/NON maintenant.","CALL YES":"CALL YES — vous avez tranché OUI : le dossier rejoint « Validées ».","CALL NO":"CALL NO — vous avez tranché NON : le dossier rejoint « Écartées ».",CONSIDER:"CONSIDER — solide, mérite un regard plus attentif.",MONITOR:"MONITOR — à surveiller, pas prioritaire pour l’instant.",PASS:"PASS — non pertinent pour le moment."},vKept:"Retenu",vOut:"Écarté",learnLine:"Comme sur Netflix, chaque 👍/👎 affine ce que Stan vous montre ensuite — vous jugez, il apprend.",learnLink:"Ajuster mes critères →",funnelHint:"Retrouvez ici toutes vos cibles sourcées automatiquement dans <b>évaluées</b> puis passez celles que vous souhaitez contacter dans <b>validées</b>.",fhintClose:"Masquer cette aide",queueTitle:"File de traitement",queueDone:(e,a)=>`<b>${e} / ${a}</b> mémos générés`,queueTomorrow:"À venir — ordre projeté, recalculé chaque matin",queueToday:"Analysés aujourd’hui",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugConfigured:"Configuré",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(e,a)=>`<b>${e}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:e=>`${e} passées au crible`,alertTitle:"Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"Vos angles d’acquisition",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarBusy:"🧬 Recherche…",similarNote:"Les retenues entrent dans votre liste au prochain rafraîchissement.",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:e=>`actualisée le ${e}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:e=>`actualisée le ${e}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:e=>`Onboarding lancé pour ${e} — suivez l’avancement dans le cockpit`,rsOpen:"🔎 Rechercher des sociétés à évaluer",rsUrlPh:"coller l’URL d’un article, d’une vidéo ou d’une note",rsTextPh:"Coller ici l’article complet",rsOr:"ou",rsGo:"🔎 Résumer et rechercher des sociétés",rsHint:"Résumé · carte mentale · sociétés",rsRunning:"Lecture en cours…",rsRunningVid:"Transcription de la vidéo…",rsElapsed:e=>`${e} s`,rsNeed:"Collez une URL, ou le texte complet de l’article.",rsFound:e=>e?`${e} société${e>1?"s":""} trouvée${e>1?"s":""} dans ce contenu.`:"Aucune société nommée dans ce contenu.",rsLink:"Voir la page publiée ↗",rsPublishing:"Publication de la fiche…",rsPublishFail:"Fiche produite, page non publiée",rsTags:"Tags",rsClose:"Fermer",rsMindmap:"Carte mentale",rsSource:"Source ↗",rsSaving:"Enregistrement…",rsSaved:"✓ Enregistrée dans votre cockpit",rsSavedIn:e=>`✓ Enregistrée dans le carnet de ${e}`,rsSaveFail:"Fiche produite, NON enregistrée",rsArchOpen:e=>`voir les ${e} recherche${e>1?"s":""} déjà lancée${e>1?"s":""}`,rsArchTitle:"Recherches déjà lancées",rsArchBack:"← toutes les recherches",rsArchLoading:"Chargement…",rsArchEmpty:"Aucune recherche enregistrée pour l’instant.",rsArchGone:"Cette recherche n’est plus disponible.",rsRowCounts:(e,a)=>`${e} citée${e>1?"s":""} · ${a} à évaluer`,rsPub:"Publiée",rsPriv:"Non publiée",rsCited:"Sociétés citées",rsCitedHint:"Toutes les sociétés nommées dans ce contenu.",rsMatch:"Sociétés qui pourraient correspondre",rsMatchHint:"Suggérées à partir de la thèse du contenu — elles n’y sont pas forcément nommées.",rsEvalOne:"⚡ Évaluer",rsAddAll:e=>`＋ Ajouter les ${e} à la liste`,rsNoCompanies:"Aucune société dans ce contenu.",rsConclusion:"Ce que ça implique",rsCriteria:"Critères de sourcing",rsSources:"Pour creuser",groupEngine:"Moteur",groupNone:"Rien",browse:e=>`Parcourir les ${e}`,chainAll:e=>`Évaluer les ${e}`,chainHint:"selon votre thèse, l’une après l’autre",winMenu:"Période",datesShort:["Aujourd’hui","7 jours","30 jours","Tout"],colCompany:"Société & description",grpCount:(e,a)=>`${e} à envoyer sur ${a} sourcées`,emptyTab:"Aucune cible dans cet onglet",emptyScope:"Aucune société dans ce périmètre",emptyWin:"La fenêtre de dates y est peut-être pour quelque chose.",emptyWinBtn:"Voir sur toute la période",emptyFilters:e=>`${e} filtre${e>1?"s":""} actif${e>1?"s":""}`,emptyFiltersBtn:"↺ Tout effacer",privLink:"🔒 Lien privé — ne le partagez qu’avec votre équipe.",thumbWhyUpPh:"Ce qui vous a plu — une ligne suffit (facultatif)",thumbWhyDnPh:"Ce qui n’allait pas — une ligne suffit (facultatif)",alertRules:"Un seul email par jour, et rien du tout les jours sans nouvelle société : pas de mail vide. Il part dans la langue de cette page.",rowSite:"Site",rowLi:"LinkedIn",rowMail:"Écrire",rowTel:"Appeler",contWorld:"Monde",evalGoOn:e=>`⚡ Évaluer ${e}`,chromeEval:"Évaluer",chromeFilt:"Filtres",chromeBoth:"Les deux",rowExtract:"🔎 Extraire les sociétés",toSendCtx:(e,a)=>`sur ${e} dans l'édition${a>0?` (${a} sans société identifiable)`:""}`,grpCard:"la carte du jour",grpMa:"Opérations M&A",grpLev:"Levées de fonds",grpNews:"Actualités",grpNom:"Actualités · Nominations",grpNewsOther:"Actualités · Autres",grpHire:"Actualités · Recrutements",edLabel:"dans l'édition du jour",edSplit:(e,a)=>`⚡ ${e} évaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} à explorer`:""}`},Us={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Everything STAN ran through the screen on this window: every company judged against your criteria, kept or discarded automatically.","STAN kept these companies against your criteria, decisions justified. WE verify its picks — discard, validate, or launch an analysis on the uncertain ones.","STAN’s memos, reviewed by US: quantified synergies, argued verdict. Validate the ones to contact, set “to decide” where you hesitate.","YOUR move: the best targets, presented on Monday by your Corporate Developer. Call YES or NO — your yeses move to Validated.","Your YESES — the shortlist to contact. WE prepare the approach, or engage it on your behalf (Enterprise plan).","Discarded by STAN or by YOU. Every NO sharpens Stan’s criteria. Recover one anytime.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(e,a,r)=>`<b>${e} Stan CALL${e>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${r} awaiting answer.</b>`,morningThesis:(e,a,r)=>`This morning, <b>${e}</b> compan${e===1?"y":"ies"} screened by your engines`+(typeof r=="number"?`, <b>${r}</b> kept.`:".")+(a?` <b>${a}</b> awaiting your evaluation.`:' <span class="ok">All screened.</span>'),morningEnginesTitle:"Your engines are tuned to YOUR thesis: activity codes, countries, acquisition angles, exclusion criteria. Only the news watch starts from a sweep shared across funds — but every deal it surfaces is then screened against your criteria, and only enters here if it passes.",morningLast:(e,a,r)=>`Engines last ran on <b>${r}</b>: <b>${e}</b> compan${e===1?"y":"ies"} sourced.`+(a?` <b>${a}</b> still to screen.`:' <span class="ok">All screened.</span>'),morningEval:e=>`▶ Work through them (${e})`,identTitle:e=>`Targets for ${e}`,identCoverage:"Market coverage",identCoverageOf:(e,a)=>`<b>${e}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"Memo engine",identPerDay:"memo/day",identPending:e=>`→ ${e} queued`,identPendingWait:"→ reading the queue…",identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Sort the list",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:e=>`Decision undone on ${e}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ Yes",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:e=>`${e} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"Screen · memo",colCrible:"Screen",fVerdict:"Verdict",colMemo:"Memo",colScore:"Score",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:e=>`Since Stan’s verdict: ${e} d`,waitChip:e=>`⏱ ${e} d`,densList:"List",densOpen:"Open",densLigne:"Rows",densMaxi:"Cards",unfoldAll:"Unfold all",foldAllLbl:"Fold all",foldArts:"Articles",zoomSrc:"Source",viewLink:"View article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Company website",viewSiteBusyHint:"Looking up the company website…",viewSrcHint:"Source article",viewLinkClose:"Close article",viewLinkTab:"Open in a tab",viewLinkHint:"Opens in a new window",zoomSimilar:"See similar",zoomInCockpit:"Isolate in the list",zoomArt:"Today's editorial",zoomEvalHint:"Screen against your thesis",zoomSimilarHint:"Same sector in the list",zoomIsolateHint:"Keep only this company",zoomNewsMark:"Edition note — opens on the right",zoomPulseEval:"evaluable",zoomPulseExplore:"to explore",zoomPulseArts:"news",doNews:"📰 News",zoomPulseEd:"in today’s article",zoomPulseBtn:"Today’s edition",zoomPulseWeek:"Last 7 days",zoomPulseWeekEd:"this week",doAll:"All",doEdito:"📖 Today's editorial",doBrief:"📖 Today's brief",doEval:"⚡ Evaluable",doExplore:"🔎 To explore",doAna:"⚡ To analyse",doBriefHint:"Show today's brief",doTodo:"⚡ To evaluate",doDone:"✓ Already evaluated",cdMemoTab:"📖 Memo",evalPickSite:"several sites share this name — open to check, then confirm the right one.",evalPickChip:"Site to confirm",eqNamePh:"Company name or URL…",eqAdd:"Add a row",eqNoSite:"no site found — the name will be evaluated as is",eqReady:"ready",eqPick:"pick the site →",eqRunning:"⏳ evaluating…",eqGo:e=>`⚡ Evaluate the ${e} rows`,eqHint:"Your rows stay here: fill on the go, launch later.",eqColName:"Company",eqColSite:"Site",eqColDesc:"What it does",eqColState:"State",eqLookup:"finding the site…",eqDescBusy:"reading the site…",eqDescNone:"the site says nothing usable",eqDescQuota:"daily reading cap reached",eqRunOne:"Evaluate this row",sgGo:"💡 Find similar companies",sgBusy:e=>`🔎 twins of ${e}…`,sgFrom:(e,a)=>`from your kept companies (${e}${a>1?` +${a-1}`:""})`,sgQuota:"daily cap reached (5 searches) — try tomorrow",sgNone:"nothing new: the twins found are already in your list",sgVia:e=>`found from ${e}`,pxThesis:"your thesis",pxGoThesis:"🎯 Search on my thesis",pxGoFree:"🔎 Search",pxPlace:"a strong keyword, or a French NAF code (66.22Z)",eqClearDone:"Clear evaluated",evalPickGo:"✓ This one",chainMemoGo:"⚡ Launch the memo (1 credit)",analyseConfirm:e=>`Launch ${e} analysis memo${e>1?"s":""}?

This uses ${e} memo credit${e>1?"s":""}. Companies move to "Analysed" or "To decide" once the memo is ready.`,sortBy:"Sort by",sortSig:"Signal",sortAmount:"Amount",sortAge:"Recency",sortName:"Name",sortCountry:"Country",sortStage:"Stage",sortCrible:"Screen",sortMemo:"Memo",sortScore:"Score",fMenu:"Filters",memoSynth:"Summary",memoOpenFull:"📖 View the full memo →",memoDeep:"⚡ Detailed memo",memoDeepHint:"For this file to decide, you can launch the detailed analysis: market study, competitive quadrant, scenarios.",memoDeepSent:e=>`Detailed memo launched on ${e} — ready in 35 to 40 minutes`,memoInstantSent:e=>`Analysis launched on ${e} — memo ready in ~15 minutes`,liveStrip:"Live analyses",liveBoot:"starting…",liveEnd:"done {t}",liveOpenQueue:"Open the queue",memoNone:"No memo for this file yet — launch the analysis.",creditsCap:"Memo credits",creditsToday:"today",creditsRecharge:"Top up →",creditsCost:e=>`−${e} credit${e>1?"s":""}`,creditsNone:"Out of credits — top up or wait for tomorrow 7am.",rechargeTitle:"Memo credits",rechargeHint:e=>`Your plan includes <b>${e} credits per day</b>, refilled every morning. Need more right now?`,rechargeNote:"Purchased credits never expire. They are used after your daily credits.",rechargeBuy:"Add",rechargeUnit:(e,a)=>`${e} credits — €${a}`,onbTag:"Private preview · read only",onbTitle:e=>`Your deal flow is ready — <b>${e} targets kept</b> by Stan`,onbSub:e=>`${e} companies screened against your thesis. The first ten rows are open; the rest unlocks in thirty minutes.`,onbSteps:[["Stan studied your online presence","Website, job posts, press — it inferred your acquisition angles."],["It screened the market","Every company checked against your criteria."],["It wrote memos","Quantified analyses, synergies, verdicts."],["Your turn to decide","Thirty minutes to tune your deal flow and unlock everything."]],onbCta:"Pick a slot →",lockbarText:"Let’s set up your dream deal flow in 30 minutes, with a Corporate Developer",lockbarContactBefore:"Alexandre — ",lockbarContactMid:" · ",lockbarCta:"Pick a slot",rdvHeading:"Let’s set up your ideal deal flow in 30 minutes",rdvSubBefore:"Pick a slot below, or reach your Corporate Development expert directly at ",rdvSubMid:" or by email at ",rdvCoFallback:"your company",rdvUnlockLabel:e=>`Unlock ${e}`,rdvUnlocks:e=>[["Access every target you kept","Full investment memos, synergies, contacts, approach angle."],["Acquisition strategy built with you","Hypothesis + acquisition strategy recalibrated live, with you."],["Let’s decide together on the targets you want","YES / NO, sourcing of similar companies, export and CRM sync."],["Your AI Corporate Developer is live",`Stan works for ${e} every morning — all you have to do is decide.`]],identRepub:"Republish the page now — re-renders it from what is already known. Free: no engine runs, and no model is called if your thesis has not changed.",identRepubDone:"Republish started — your numbers refresh in about thirty seconds. Reload the page to see them.",plugHow1:"In your tool (Make, Zapier, n8n, HubSpot, Pipedrive…), create a “webhook” trigger and copy the URL it gives you.",plugHow2:"Paste it below, Save, then Test: one sample message goes out to your tool right away.",plugHow3:"Done. Three moments trigger a send: you validate a target, you move it a stage, or an approach is prepared.",plugExT:"Exactly what your tool receives",plugExResult:"In your CRM you get one row per validated company: its name, your note, Stan’s score, its website and the memo link.",plugApiT:"One company at a time, from a script or Make",plugQuota:"This shortcut is capped at 10 companies per day per link — the normal path is the page’s evaluation bar.",plugFeeds:"The JSON, CSV, Google Sheets and Excel feeds live in the 📥 Export button next door — they are not repeated here.",plugTokenNote:"⚠️ These links carry this page’s access key: wherever you paste them, they open your targets. Only put them in your own tools.",plugDoc:"Full documentation → proplace.co/api/",plugDestLbl:"Destination",plugDestWh:"My webhook",plugDestInst:"Instantly (campaign)",plugCampPh:"Instantly campaign id",plugCampNeed:"Instantly needs the id of the campaign that will receive these targets — it is in your campaign URL.",plugDestInstOn:e=>`Instantly · campaign ${e}`,plugAutoT:"⚡ Automatic sending",plugAutoSub:"Turn it on: every target you validate enters your sequence by itself. You never come back here.",plugAutoOnLbl:"Automatically send every validated target",plugAutoNeed:"First save a webhook above, or pick Instantly.",plugAutoSavedOn:"Automatic sending is on — every validated target will go out by itself.",plugAutoSavedOff:"Automatic sending stopped.",plugAutoBroken:"⚠ Nothing is going out: automatic sending targets your webhook, but no webhook is saved. Save one above, or stop automatic sending.",notesT:"📝 Deal log",notesHint:"Your dated notes on this file. They live on the deal record — you and your team read them in the same place.",notesPh:"What you want to remember: a call, an objection, a figure…",notesAdd:"Add",notesAdded:"Note added ✓",notesEmpty:"No notes yet.",notesErr:"Failed — try again.",notesEdit:"Edit",notesDel:"Delete",notesDelAsk:"Delete this note?",notesSave:"Save",notesCancel:"Cancel",notesLoading:"Reading the log…",notesCount:e=>`${e} note${e>1?"s":""}`,apprT:e=>`Approach draft — ${e}`,apprSeqHint:"4 messages spaced out: D0, D2, D4, D6.",apprWait:"Writing the tailored sequence…",apprFail:"Generation unavailable — try again in a moment.",apprChEmail:"✉ Email",apprChLi:"in LinkedIn",apprSubj:"Subject",apprCopy:"📋 Copy this message",apprMailto:"✉ Open in your email",apprLiNote:"Connection request: no note.",apprEdited:"✎ edited",apprLocal:"Your edits stay in this window — they are not saved on the server. Copy the message before closing.",apprSender:e=>`Signed: ${e}`,avisIntro:(e,a)=>`🎯 Stan noticed you often rule out the “${e}” sector (${a} rejections).`,avisAsk:"Would you like him to source less of it?",avisYes:"Yes, recalibrate",avisNo:"Ignore",avisRunning:"Recalibrating your thesis…",avisDone:"✓ Done — Stan recalibrated your thesis. You will see fewer of them.",avisFail:"Recalibration unavailable right now — try again soon.",propT:"🧠 What your calls say about your thesis",propSub:"Your 👍/👎 — and above all what you write underneath — tell how you choose. Stan reads them together and proposes the corrections that would bring the next selection closer to your own judgement. Nothing is applied without you.",propBtn:"Re-read my calls and propose corrections",propWait:"Re-reading your calls…",propNone:"Nothing solid enough yet. A single call never moves a thesis: keep judging the cards (one line of “why” helps a lot) and come back.",propFew:e=>`Not enough calls yet — ${e} compan${e===1?"y":"ies"} judged. Keep going, then come back.`,propFrom:"Based on:",propApply:"Apply this correction",propSkip:"Not this one",propApplying:"Applying…",propApplied:"Applied ✓ — Stan now sources on the corrected version.",propApplyFail:"Could not apply — try again.",propKo:"Cannot re-read right now — this is the engine, not you. Try again in a moment.",propSlow:"Stan is still working on this correction — it will apply by itself. The logbook will tell you.",engOn:"● on here",engOff:"○ off here",engOptOff:"○ to enable",engGlobalOff:"⊘ off (global)",engHintOpt:"Optional engine (paid Maps + free BODACC): enable it for THIS fund, then run BODACC on demand.",engHint:"Turns this engine on or off FOR THIS FUND — the shared pool is untouched.",engToggleFail:"Could not change the setting — try again.",engToggleNote:"The setting applies on the next sourcing run: nothing already here is removed.",engBodacc:"Run free BODACC now",engBodaccRun:"Starting…",engBodaccNote:"Free official FR bulletin (insolvencies, sales, closures). Google Maps stays optional and paid.",engBodaccOk:"BODACC radar started for this fund. Refresh the page in a few minutes.",engBodaccKo:"Could not start — try again.",engMore:e=>`+ ${e} more`,propSections:{hypothesis:"The hypothesis",profils:"The target profiles",gate:"The Kept / Ruled-out screen",rubric:"The analysis decision"},plugCrmRecipeT:"Pipedrive, HubSpot, Salesforce — they do not accept a live link: they need a scenario, wired ONCE.",plugCrmRecipeOpen:"See the recipe, in 4 modules",plugCrmR1:"① In Make (or Zapier), schedule an hourly scenario starting with HTTP → “Make a request” on the JSON link in 📥 Export.",plugCrmR2:"② Add an “Iterator” on the returned array: one iteration = one company.",plugCrmR3:"③ Pipedrive → “Search organizations”, searching on the domain (it must appear somewhere on the record — website or custom field; otherwise search on the name). HubSpot natively matches its companies on domain: even more direct.",plugCrmR4:"④ Pipedrive → “Update an organization”: our columns land in the custom fields you created (verdict, conviction, angle, memo link). Wire “Add an organization” on the “nothing found” branch: companies you did not have yet get created instead of being lost.",plugCrmRNote:"By hand, without a scenario? Open the CSV (or Excel) link in your browser to get the file, then feed it to your CRM’s importer. Keep that path for companies you do NOT have yet: a file import cannot match cleanly on domain, it creates duplicates.",plugVarsT:"See the 15 variables received per target",plugVars:"first_name, last_name, email, company_name, phone, website, linkedin, sector, country · angle, why, verdict, conviction_score, memo_url, memo_pdf_url.",plugRefT:"See the link settings and the 26 columns",plugOpt:"Two settings to paste at the END of the link (it already contains “?”, so append with “&”): “&tab=valides” returns only your validated targets (also call, retenus, ecartes, chauds); “&since=YYYY-MM-DD” returns only what moved since that date — what you want for a sync running on a loop.",plugCols:"26 columns per company: company, domain, first_name, last_name, email, linkedin, phone, website, linkedin_company, country, sector, stage, ceo_status, verdict, conviction_score, engagement, angle, memo_url, memo_pdf_url, memo_type, status, score, tagline, engine, detected, reasoning.",plugCrmQT:"🔗 And inside your CRM?",plugCrmQ1:"Your HubSpot, Pipedrive or Airtable records carry our columns, MATCH / NO MATCH included: that is the recipe above, wired once.",plugCrmQ2:"A button placed on the record triggers the memo without coming back here: the quick memo on any company in your list, the full memo on those you moved to “To decide”.",plugCrmQ3:"The memo link comes back into the record at the next sync (memo_url column): a memo takes a few minutes to write, so it is never ready within the second.",plugApiMemoLbl:"Trigger a company’s quick memo (“detailed_request” for the full memo):",csNone:"Status",csAnaNeedMemo:"Moving to “Analysed” needs a memo.",csAnaRun:"⚡ Run the memo (1 credit)",csAnaAnyway:"Mark it anyway",qOffer:"Your plan",qDelay:"verdict within",qRate:e=>`${e} memo${e>1?"s":""} a day`,qManual:e=>`${e} memo a day, on request`,qPaused:"no automatic memo",qManualSet:"rate set by hand",qEta:(e,a,r)=>`At this rate (${a}/day), ${e} memo${e>1?"s":""} left to write — the whole queue is processed in ${r} day${r>1?"s":""}.`,qEtaPaused:"Rate at zero: nothing goes out. Activate a plan to project a date.",qEtaDone:"The whole queue is already analysed.",qLate:(e,a)=>`The “${e}” promise cannot be met: it would take more than the ${a} memos a day cap.`,qRunning:"In progress",qUpNext:e=>`Coming up — ${e} compan${e>1?"ies":"y"} in the queue, in pick order`,qUpNextWait:"Coming up — reading the queue…",qFileWait:"Reading the queue — a few seconds.",qHedge:"Projected order, recomputed every morning. A fresh lead landing overnight goes first.",qFresh:"fresh",qLater:"later",qVerdictsT:"Stan’s verdicts — where each file goes",qVerdicts:[["CALL","his top pick: decide YES or NO → “To decide” tab."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],covHowT:"Where does this number come from?",covTotal:"Market total",covColCode:"Code · country",covColN:"Companies",covColSource:"Source",covWide:e=>`${e} not published — widened to its parent code`,covMissing:"no data published",covRejected:e=>`Codes dropped, no companies found: ${e}.`,covComputedAt:e=>`computed on ${e}`,filterOff:"Remove this filter",fSelected:"selected",funScreened:(e,a)=>`companies screened${e?a?` from ${e} to ${a}`:` since ${e}`:""}`,funKept:"kept as serious targets",funAnalyzed:"analysed in depth",funShown:"published on your page, all filters cleared",sigStripMore:e=>`+ see the other ${e}`,boxCollapse:"Collapse",boxExpand:"Expand",memoReadHere:"📄 Read the memo here",memoHideHere:"▴ Collapse the memo",sigChipTitle:(e,a)=>`Flagged ${e} · ${a}`,funPerWindow:(e,a)=>`From ${e} to ${a}`,funPerAll:"Since the start",funOfMarket:(e,a)=>`of ~${e} companies on your market, i.e. ${a} %`,funScope:"Sourcing from your thesis only — your activity codes, your countries, your angles. No company from another fund is counted here.",funToday:e=>`incl. ${e} today`,actTitle:"Last 30 days of activity",actScreened:"screened",actKept:"kept",actToday:"today",fstatsShow:"Show the last 30 days of activity",fstatsHide:"Hide activity",sinceTitle:(e,a)=>`${e} new target${e>1?"s":""} since your last visit (${a})`,sinceSub:"arrived since your last visit — start here",sinceMore:e=>`+${e} more`,sinceOut:e=>`${e} left the list`,morningDock:e=>e?`${e} screened this morning`:"Morning screen",morningDockTitle:"See the companies screened today — whatever the verdict.",sinceDock:e=>`${e} new`,sigDock:e=>`${e} signal${e>1?"s":""}`,newsDock:e=>`${e} news item${e>1?"s":""}`,newsSince:e=>`since ${e}`,newsDockHint:'Feed articles — op-eds, lists, recaps — with no evaluable company. "Extract companies" bridges into evaluation.',newsWord:"news — reading, not deciding",identSyncConfirm:"Relaunch sourcing now? An engine pass takes a few minutes.",plugAutoOn:e=>`⚡ Automatic sending ACTIVE (${e}) — every target you validate goes into the sequence on its own.`,plugAutoOff:"Automatic sending off — validating a target sends it nowhere.",plugCrm:"Create the records in my CRM",plugCrmHint:"Paste your tool’s webhook URL: every decision lands there right away.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Save",plugSaved:"Webhook saved",plugTest:"Test",plugTested:"Test sent",plugTestThrottled:"Already tested less than 5s ago — nothing was sent.",plugRemove:"Remove",plugRemoved:"Webhook removed",plugMcp:"Claude & AI (MCP)",plugBulk:"Contact my targets",plugBulkHint:"See who would go out first: the preview contacts nobody.",plugBulkTabs:[["valides","Validated"],["call","To decide"],["retenus","Kept"]],plugBulkPreview:"👁 Preview",bulkArm:"📤 Send for real",bulkNoDest:"No destination saved: set up your tool above first.",bulkScope:"What goes out is the whole server-side tab — not the filtered view on screen.",bulkWarn:(e,a)=>`You are about to contact ${e} compan${e>1?"ies":"y"} via ${a}. This cannot be undone, and the server does not check whether they were already contacted.`,bulkConfirm:e=>`Yes, send via ${e}`,bulkCancel:"Cancel",bulkSending:"Sending…",bulkDone:(e,a,r)=>`${e} compan${e>1?"ies":"y"} sent. ${a} reachable on LinkedIn only, ${r} with no email.`,bulkNone:"No company had an email: nothing was sent.",bulkLocked:(e,a)=>`Sent on ${e} — ${a} compan${a>1?"ies":"y"}. Next send available in 24 h.`,bulkPreviewFirst:"Run the preview first: it says exactly who would go out.",cdEvaluation:"Screening",cdConviction:"Conviction",cdAnalyse:"Analysis",cdSociete:"Company",cdContact:"Contact",cdSuivi:"Follow-up",actMemoOf:e=>e==="detailed"?"📖 Read the detailed memo":"📖 Read the instant memo",memoLoading:"Loading the memo…",memoLoadErr:"The memo will not load here — open it full page.",memoUnfold:e=>`Unfold this section (${e} KB)`,cdEngagementHint:"Activity score for this file: your clicks and requests on this page, plus outreach progress. From 20 up, the file is flagged 🔥.",mdMindmap:e=>`Mind map — what ${e} does`,mdContactKnown:"Decision-maker — cockpit data",cdCrible:"screening",cdMemo:e=>e?`after ${e} memo`:"after memo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict on",cdSector:"Sector",cdStage:"Stage",cdCountry:"Where",cdSite:"Website",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Detected on",cdName:"Decision-maker",cdEmail:"Email",cdPhone:"Phone",cdCeoStatus:"Your decision",cdEngagement:"Engagement",qaTitle:"Describe this company",qaHint:"Reads its website, then four blocks: who it serves, what it sells, how it makes money, and what to remember. No verdict — the screening already decided.",qaRun:"📄 Describe",qaBusy:"Reading the website…",qaVP:"Who, and for what problem",qaProduct:"What it sells",qaModel:"How it makes money",qaSummary:"Takeaway",qaSources:e=>`${e} page${e>1?"s":""} read`,qaQuota:"Daily cap reached: try again tomorrow.",qaEmpty:"The website says nothing usable — nothing was invented.",dsBtn:"🗂 Committee pack",dsHint:"One A4 per company: the screening verdict and its reason, the identity, the analysis when it was run, and your decision. No financial figures — we receive none.",dsTitle:e=>`Committee pack — ${e} compan${e>1?"ies":"y"}`,dsCap:(e,a)=>`The first ${e} of ${a}: a committee will not read ${a} pages.`,dsWhy:"Why this company is in front of you",dsAnalysis:"What it does",dsDecision:"Your decision",dsEmpty:"No company in the current selection.",dsFoot:e=>`Selection by Proplace for ${e} — internal document, do not circulate.`,covFunnel:"Your market, screened",covScreened:e=>`${e} companies screened`,covOf:e=>`out of ~${e} relevant companies`,covNoEst:"Your addressable market is not sized yet: coverage will show as soon as it is.",covPace:e=>`${e} companies screened per day`,covEta:e=>e<=0?"Your market is fully covered.":e<60?`Full coverage in ~${e} days at this pace.`:`Full coverage in ~${Math.round(e/30)} months at this pace.`,covRate:"Analysis pace",covRateHint:"How many kept companies get a reasoned verdict each day. At zero, analysis is paused.",covRateNow:e=>e<=0?"Paused":`${e} per day`,covKept:"kept",covAna:"analysed",covScopeAll:"worldwide",covShown:"shown here",bulkReplayed:"This send was already recorded: nothing went out again. Your targets were contacted once.",bulkPending:"The previous send is still running: nothing was sent again.",plugBulkResult:(e,a,r)=>`${e} would go by email · ${a} by LinkedIn · ${r} with no contact.`,memoAlertTitle:"Your memo alert",memoAlertSub:"Get an email as soon as one of your fund’s memos is finalised — with its direct link.",memoAlertToggle:"Send me every finished memo",memoAlertEmail:"Recipient",memoAlertSaved:"Saved ✓",memoAlertErr:"Could not save — try again",memoAlertSections:"Sections of the email",memoAlertSec:[["swot","SWOT"],["action","Action plan"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Stan’s verdict"]],memoAlertPreview:"👁 Preview",memoAlertBtn:"Your memo alert",alertTabDaily:"Daily",alertTabWeekly:"Weekly",alertTabMarket:"Market",alertSections:"Sections of the email",alertSec:[["pending","Files to decide on"],["stats","Your key numbers"],["autonomous","Stan’s automatic decisions"],["market","Market analysis"],["sourcing","Your sourcing of the day"]],alertSecSlow:"(slower to generate)",alertSecNote:"Unticking the market analysis makes the preview instant.",alertPreview:"👁 Preview today’s email",alertPreviewWeekly:"👁 Preview the weekly",alertSubject:"Subject:",alertPreviewBusy:"Preview being generated, try again in a few seconds.",alertPreviewRetry:e=>`Generating — new attempt in ${e}s…`,alertPreviewFail:"Preview unavailable right now — untick “Market analysis” to get it immediately.",alertPreviewEmpty:"Right now: nothing to decide on — the email will not go out.",alertTest:"✉ Send me a test",alertTestOk:e=>`✓ Sent to ${e} — check your spam/promotions too.`,alertTestHint:"Does not affect the daily send.",alertBtnPrevBusy:"⏳ Building…",alertBtnTestBusy:"⏳ Sending…",alertPreviewWait:e=>`Building your email — ${e}s. The first preview of the day takes up to 90s: it is rendered for real, not simulated. You can leave this window open.`,alertTestWait:e=>`Sending — ${e}s. The email is built first, then delivered to your inbox. Do not close this window.`,csMoved:(e,a)=>`${e} → ${a} · the row moves to the matching tab.`,sinceLabel:e=>e?`new since your visit of ${e}`:"new since your last visit",sinceChip:"new",sinceSince:e=>`since ${e}`,alertSaving:"Saving…",alertSavedShort:"✓ Saved",alertReadOnly:"Demo view: these settings are read-only.",alertWeeklySub:"One email a week: the week in review and what your thesis learned from your decisions.",alertWeeklyOn:"📬 Receive your week in review",alertWeeklyWhen:"Day and time (Paris)",alertDow:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],alertLoadError:"Could not load your preferences.",alertThrottled:"Too fast — wait a few seconds and set it again.",alertInactive:"Your access is not active yet — let’s talk about it.",alertNoLead:"Recipient to be set with us.",exportViewTitle:"CSV of the filtered view",exportViewDesc:e=>`The ${e} rows of your current selection — tab, facets, search and window included. Semicolon separated, ready for Excel.`,exportViewBtn:"Download",exportViewDone:e=>`${e} row${e>1?"s":""} exported`,printTitle:"Print the selection",printDesc:e=>`The ${e} rows on screen, on A4: who it is for, as of when, the funnel figures, then the list. The map, filters and buttons are not printed.`,printBtn:"Print",exportViewHead:"Company|Status|Stan verdict|Score|Country|Sector|Post-YES stage|Contact|Email|Memo link|Date|Reason",tourStart:"Start the step-by-step guide",tourIntro:"The guided tour covers the whole page A to Z, on the live page: each step spotlights the exact spot — from your thesis to your email alert.",tourStep:(e,a)=>`Step ${e}/${a}`,tourPrev:"← Previous",tourNext:"Next →",tourDone:"Finish",tourClose:"Close",tourPlayTitle:"Guided tour",ahaATitle1:"1 file awaits your decision",ahaATitleN:e=>`${e} files await your decision`,ahaABody:"YES = we prepare the approach; NO = we sharpen the aim.",ahaABtn:"Decide now →",ahaBTitle:"A full memo is waiting for you",ahaBBody:e=>`${e} already has its analysis memo — a 3-minute read.`,ahaBBtn:"Open the memo →",ahaRetTitle:e=>e===1?"1 kept company is waiting for you":`${e} kept companies are waiting for you`,ahaRetBody:"Stan’s sorting is done — every kept company has its sheet, card and signal.",ahaRetBtn:"See the kept companies →",ahaEvalTitle:e=>e===1?"1 company is waiting for your evaluation":`${e} companies are waiting for your evaluation`,ahaEvalBody:"Nothing is kept yet: this is the first pile to work through. One company at a time, Stan does the screening.",ahaEvalBtn:"Open the pile to evaluate →",loadMsgs:["Waking up the sourcing engines…","Loading your targets…","Cards and signals are coming…","Sorting by your thesis…","One more moment — the first load is the longest."],ahaCTitle:"Your first targets are here",ahaCBody:"Tell us if the aim is right — every signal sharpens the machine.",ahaCBtn:"See my criteria →",howto:[["**Set your targeting.** Open “Your criteria”: it’s your thesis — what you look for and what you rule out. Fix it in plain language whenever something is off; the next morning’s sourcing realigns on its own.","crit"],["**Source as many targets as you can.** Evaluate a company by pasting its name or website — or a whole list — and watch your engines comb the web with your settings.","eval"],["**Move every target through the funnel, left to right** — Evaluated › Kept › Analysed › To decide › Validated › Ruled out. On each card, “Your status” files it in one click; your “why” note stays visible. The 👍/👎 never file anything: they sharpen your thesis.","tab1"],["**Settle the “To decide”.** Stan leaves you the final word: YES (Validated) or NO (Ruled out), with a word on the why.","tab3"],["**Understand how Stan sorts your targets.** Your status always overrides Stan’s verdict. The bridge between the two is explained in “Your criteria”: Kept ↔ MATCH, Analysed ↔ CONSIDER · MONITOR, To decide ↔ CALL, Ruled out ↔ NO MATCH · PASS…","crit"],["**Focus on the Validated** — and take every file all the way to closing!","tab4"],["**Push all of this out of the page.** The 🔌 button wires it into your tools: send your targets to your emailing sequence, create the records in your CRM, enrich the files you already have there.","plug"],["**Only come back when it’s worth it.** The 🔔 button sets two emails: the daily one for files to decide on, and the week in review.","alert"]],fhintLive:"What is moving on your market right now — click a tile to open the source.",fhintGoal:"What the engines sourced on the last run, and what is left to evaluate.",fhintSrcEng:`Each card is an **engine**: a query combing one precise source — databases, trade press, announcements, signals — with your settings.
· **Companies found**: its output over the chosen window (1, 3, 7 days or ever) — incl. MATCH and dropped, two clickable numbers listing the companies.
· **Your settings**: what your thesis imposes on this engine.
· **✎ Adjust this engine**: write the correction in plain language — tomorrow’s sourcing runs realigned.`,fhintDecide:`YES → Validated (to contact). NO → Ruled out.
· Both buttons sit on the row: no need to expand.
· Add a word on the WHY — that is what sharpens the thesis, far more than the click.`,fhintMemoDeep:`Stan ranked this file CALL: he thinks it deserves your time.
· The detailed memo (~35-40 min) digs in before you settle.
· If a memo is already there, the button reads “Read” — nothing to launch.`,fhintStage:`Every Validated card carries its pipeline: Contacted › Replied › Meeting › LOI › Signed.
· One click updates the stage.
· No reply for four days and the row flags it by itself.`,fhintAppr:`Four spaced messages — D0, D2, D4, D6 — written for this very file, by email or LinkedIn.
· You edit them before sending.
· Nothing goes out by itself: you copy, or you open your email.`,fhintTabAna:`The files whose memo is already running.
· Open one to read the memo and decide what comes next.`,fhintTabValid:`Your YES.
· Prepare the approach, move the pipeline along, keep the follow-up going.`,fhintTabRej:`Set aside for now.
· Changed your mind? Recover one back into the funnel — nothing is lost.`,fhintRank:`N°1 is your priority right now.
· First your CALLs to settle, then the memos already launched, then the rest by conviction.
· Each funnel tab tells you where a file stands.`,fhintImprove:`Every week Stan evolves your thesis — applied on Monday.
· Your 👍/👎 and your YES / NO notes sharpen the next selection even faster.
· “Your criteria” shows what he understood, and lets you correct it.`,fhintGoalAt:e=>`Engines last ran: **${e}**.
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
· One memo = **1 credit**, one company at a time: nothing ever goes out in bulk.`,tourToday:"this morning",tourNoRun:"no run recorded",tourT:{ident:"Your fund’s header",cover:"Your market coverage",engine:"The memo engine",live:"Live",goal:"The last sourcing",engines:"Your sourcing engines",decide:"YES or NO — the final word",memoDeep:"The detailed memo, before you decide",stage:"After the YES, the follow-up",appr:"The first message, written for you",tabAna:"Analysed",tabValid:"Validated",tabRej:"Ruled out",rank:"The list order is a ranking",improve:"Stan improves on its own — and you speed it up",funnel:"The funnel",tuto:"The current step",demand:"Evaluate a company",chips:"Statuses, on the row",dec:"Why this decision",memo:"The detailed memo",status:"Your status",learn:"Your 👍 / 👎",tools:"Connect your tools",exportT:"Export to CSV",alerts:"Your email alerts",crit:"Stan’s settings"},fhintExport:"Take your targets out as CSV — the current selection with its columns, ready for your spreadsheet or CRM.",fhintAlerts:"Set what reaches your inbox: the morning brief, the weekly recap, and the alert when a memo is ready.",csLabel:"Your status:",csKept:"Kept",csAnalysed:"Analysed",csPending:"To decide",csValidated:"Validated",csOut:"Ruled out",csYes:"✓ Yes",csNo:"✗ No",csSaved:"✓ saved",csNoteSaved:"note added ✓",csNoteOk:"OK",csNotePh:"Why? (one line)",csAnaConfirm:"No memo on this file — mark it Analysed anyway?",whySend:"Send",whyYesPh:"Why this YES? (one line — it sharpens your thesis)",whyNoPh:"Why this NO? (one line — it sharpens your thesis)",stgLabel:"Your progress:",stg:[["todo","○ To do"],["sent","✉ Contacted"],["replied","💬 Replied"],["meeting","🤝 Meeting"],["loi","📄 LOI"],["signed","✅ Signed"],["lost","✖ Lost"]],j4Badge:e=>`⏰ No reply for ${e} days — follow up?`,actRepeche:"↩ Recover",actRegen:"↻ Regenerate the memo",memoRegenAsk:e=>`Redo the detailed memo for ${e}? The current one will be replaced, and this uses one credit.`,actErr:"Could not save — try again in a moment.",actNotPersisted:"This status cannot be saved on this record.",decidedYes:e=>`${e} validated — on to the approach`,decidedNo:e=>`${e} ruled out`,repeched:e=>`${e} recovered — back in Kept`,critHypTitle:"Our hypothesis about your strategy",critHypSub:"The whole selection follows from it. If it is off, correct it below — the search is realigned and you get a corrected selection.",critProfilsTitle:"Your target profiles",critProfilsSub:"The families of targets the machine tracks continuously — each profile unfolds.",critLookFor:"What we look for",critRuleOut:"What we rule out",critGateTitle:"Stan’s screen — how it decides Kept / Ruled out",critGateSub:"Every company is checked against these criteria. They are what the “STEP A, C…” in the reasons on each row refer to.",rubricTitle:"How Stan decides the analysis (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Once kept, Stan digs deeper and rules. Here’s what tips the balance.",qvTitle:"Stan’s verdicts — where each file goes",qv:[["CALL PENDING","Stan’s top pick: decide YES/NO now → “To decide” tab."],["CALL YES","you decided YES — the file joins “Validated”, on to the approach."],["CALL NO","you decided NO — the file joins “Ruled out”."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],brTitle:"Automatic routing — where Stan’s verdict sends each file",br:[["Kept","MATCH — kept at sourcing, memo to come → “Kept” tab"],["Analysed","CONSIDER · MONITOR — memo done, no call → “Analysed” tab"],["To decide","CALL PENDING — Stan proposes a call, your YES/NO is awaited → “To decide” tab"],["Validated","CALL YES — you ruled YES → “Validated” tab"],["Ruled out","NO MATCH · PASS · CALL NO — Stan’s refusal, or your NO on a call → “Ruled out” tab"]],brNote:"A CALL goes through 3 states: CALL PENDING (the memo is DONE, Stan proposes the call — your decision is awaited) › CALL YES (you validate) › CALL NO (you rule out). PENDING never means “being analysed”: the analysis is already done.",vt:{MATCH:"MATCH — kept: it fits your criteria.","NO MATCH":"NO MATCH — ruled out by your criteria.","CALL PENDING":"CALL — Stan’s top pick: worth a YES/NO decision now.","CALL YES":"CALL YES — you ruled YES: the file joins “Validated”.","CALL NO":"CALL NO — you ruled NO: the file joins “Ruled out”.",CONSIDER:"CONSIDER — solid, worth a closer look.",MONITOR:"MONITOR — keep an eye on it, not a priority yet.",PASS:"PASS — not relevant right now."},vKept:"Kept",vOut:"Ruled out",learnLine:"Like Netflix, every 👍/👎 sharpens what Stan shows you next — you judge, it learns.",learnLink:"Tune my criteria →",funnelHint:"Find here all your automatically sourced targets in <b>evaluated</b>, then move the ones you want to contact into <b>validated</b>.",fhintClose:"Hide this hint",queueTitle:"Processing queue",queueDone:(e,a)=>`<b>${e} / ${a}</b> memos generated`,queueTomorrow:"Up next — projected order, recomputed every morning",queueToday:"Analyzed today",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugConfigured:"Configured",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(e,a)=>`<b>${e}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:e=>`${e} screened`,alertTitle:"Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"Your acquisition angles",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarBusy:"🧬 Searching…",similarNote:"The kept ones enter your list at the next refresh.",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:e=>`updated ${e}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:e=>`updated ${e}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:e=>`Onboarding launched for ${e} — track progress in the cockpit`,rsOpen:"🔎 Find companies to evaluate",rsUrlPh:"paste the URL of an article, a video or a note",rsTextPh:"Paste the full article here",rsOr:"or",rsGo:"🔎 Summarize and find companies",rsHint:"Summary · mind map · companies",rsRunning:"Reading…",rsRunningVid:"Transcribing the video…",rsElapsed:e=>`${e}s`,rsNeed:"Paste a URL, or the full text of the article.",rsFound:e=>e?`${e} compan${e>1?"ies":"y"} found in this content.`:"No company named in this content.",rsLink:"See the published page ↗",rsPublishing:"Publishing the note…",rsPublishFail:"Note produced, page not published",rsTags:"Tags",rsClose:"Close",rsMindmap:"Mind map",rsSource:"Source ↗",rsSaving:"Saving…",rsSaved:"✓ Saved to your cockpit",rsSavedIn:e=>`✓ Saved to ${e}'s notebook`,rsSaveFail:"Note produced, NOT saved",rsArchOpen:e=>`see the ${e} research run${e>1?"s":""} already launched`,rsArchTitle:"Research already launched",rsArchBack:"← all research runs",rsArchLoading:"Loading…",rsArchEmpty:"No research saved yet.",rsArchGone:"This research is no longer available.",rsRowCounts:(e,a)=>`${e} mentioned · ${a} to evaluate`,rsPub:"Published",rsPriv:"Not published",rsCited:"Companies mentioned",rsCitedHint:"Every company named in this content.",rsMatch:"Companies that could match",rsMatchHint:"Suggested from the content’s thesis — they are not necessarily named in it.",rsEvalOne:"⚡ Evaluate",rsAddAll:e=>`＋ Add all ${e} to the list`,rsNoCompanies:"No company in this content.",rsConclusion:"What it implies",rsCriteria:"Sourcing criteria",rsSources:"Dig deeper",groupEngine:"Engine",groupNone:"None",browse:e=>`Browse the ${e}`,chainAll:e=>`Evaluate the ${e}`,chainHint:"against your thesis, one after another",winMenu:"Period",datesShort:["Today","7 days","30 days","All"],colCompany:"Company & description",grpCount:(e,a)=>`${e} to send out of ${a} sourced`,emptyTab:"No target in this tab",emptyScope:"No company in this scope",emptyWin:"The date window may have something to do with it.",emptyWinBtn:"See the whole period",emptyFilters:e=>`${e} active filter${e>1?"s":""}`,emptyFiltersBtn:"↺ Clear everything",privLink:"🔒 Private link — share it with your team only.",thumbWhyUpPh:"What you liked — one line is enough (optional)",thumbWhyDnPh:"What was off — one line is enough (optional)",alertRules:"One email a day, and nothing at all on days without a new company: no empty mail. It goes out in this page’s language.",rowSite:"Site",rowLi:"LinkedIn",rowMail:"Email",rowTel:"Call",contWorld:"World",evalGoOn:e=>`⚡ Evaluate ${e}`,chromeEval:"Evaluate",chromeFilt:"Filters",chromeBoth:"Both",rowExtract:"🔎 Extract companies",toSendCtx:(e,a)=>`of ${e} in the edition${a>0?` (${a} without an identifiable company)`:""}`,grpCard:"today's card",grpMa:"M&A deals",grpLev:"Fundraising",grpNews:"News",grpNom:"News · Appointments",grpNewsOther:"News · Other",grpHire:"News · Hiring",edLabel:"in today's edition",edSplit:(e,a)=>`⚡ ${e} evaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} to explore`:""}`},Hs={fr:{...$n.fr,...$s},en:{...$n.en,...Us}},Vs=`.atl2{
  
  --brand:var(--pp-green,#12A150); --brand-d:var(--pp-green-h,#0E8A44); --brand-l:var(--pp-green-bg,#E7F6EE);
  --blue:#1E5FCC; --bolt:var(--pp-amber,#E0A81E); --red:var(--pp-red,#E5484D);
  --panel:var(--pp-bg,#FFFFFF); --panel2:var(--pp-bg-zone,#F9FBFD); --panel3:var(--pp-bg-page,#F5F7FA);
  --line:var(--pp-line,#E3E8F0); --line2:var(--pp-line-dash,#C9D6E6);
  --ink:var(--pp-ink,#16233A); --muted:var(--pp-ink-2,#4B5E78); --dim:var(--pp-ink-4,#8FA0B8);
  --sea:#E4EDF3; --land:#FFFFFF; --landline:#B2C2D0; --empty:#F5F7FA; --emptyline:#DCE4EB;
  --rail:240px;
  --r:10px;       
  --rs:8px;       
  --ra:8px;       
  --rb:18px;      
  
  --p0:var(--pp-line-in,#EEF2F7); --p1:var(--pp-p1,#E7F6EE); --p2:var(--pp-p2,#C4E9D3);
  --p3:var(--pp-p3,#7FCDA0); --p4:var(--pp-p4,#12A150);
  --p5:var(--pp-red,#E5484D); --pv:var(--pp-navy,#0F1D33); --pf:var(--pp-amber,#E0A81E);
  
  --d0:var(--pp-ink-4,#8FA0B8); --d1:#9ED9B8; --d2:#5FBF8E; --d3:#2E9F68; --d4:var(--pp-green-p,#0A6432);
  
  --mono:var(--pp-body,"Instrument Sans",system-ui,sans-serif);
  --body:var(--pp-body,"Instrument Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);
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
.atl2 .idrow .eyebrow{font-family:var(--mono);font-size:12px;color:var(--brand-d);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .idrow h1{margin:0;font-size:22px;font-weight:700;letter-spacing:-.02em}
.atl2 .idpill{display:flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:99px;
  padding:4px 11px;font-family:var(--mono);font-size:9.5px;color:var(--muted)}
.atl2 .idpill .bar{width:46px;height:5px;background:var(--panel3);border-radius:99px;overflow:hidden}
.atl2 .idpill .bar i{display:block;height:100%;background:var(--brand)}
.atl2 .idpill.pause{color:#E0A81E;border-color:#FFF3D6;background:#FFF7ED}
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
.atl2 .step .l{font-family:var(--mono);font-size:12px;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .step .n{font-size:17px;font-weight:800;letter-spacing:-.02em;line-height:1}
.atl2 .step .warn{position:absolute;top:5px;right:9px;width:7px;height:7px;border-radius:50%;background:#E0A81E;
  box-shadow:0 0 0 3px rgba(234,124,11,.25);animation:atl2-pulse2 1.8s infinite}
@keyframes atl2-pulse2{0%,100%{opacity:1}50%{opacity:.35}}
.atl2 .offtrack{display:flex;align-items:stretch;gap:5px;flex:none}
.atl2 .ftools{display:flex;align-items:center;gap:4px;flex:none}
.atl2 .tool{background:var(--panel);border:1px solid var(--line);border-radius:var(--r);padding:6px 10px;cursor:pointer;
  font-family:var(--mono);font-size:12px;color:var(--muted);display:flex;align-items:center;gap:6px;white-space:nowrap;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .tool:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .tool[aria-pressed="true"]{background:var(--ink);border-color:var(--ink);color:#fff;font-weight:600}
.atl2 .offtrack .div{width:1px;background:var(--line);margin:3px}
.atl2 .off{display:flex;flex-direction:column;justify-content:center;gap:2px;padding:7px 12px;background:var(--panel);
  border:1px solid var(--line);border-radius:var(--r);cursor:pointer;color:var(--muted);text-align:left}
.atl2 .off:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .off .l{font-family:var(--mono);font-size:12px;white-space:nowrap;font-weight:600;font-variant-numeric:tabular-nums}
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
.atl2 .tuto .fold{background:none;border:0;font-family:var(--mono);font-size:12px;
  color:var(--muted);cursor:pointer;padding:3px 6px;flex:none;align-self:center;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .tuto .fold:hover{color:var(--ink)}
.atl2 .tuto p{margin:0 0 8px;font-size:12.5px;font-weight:600;max-width:90ch;line-height:1.5}
.atl2 .tuto .acts{display:flex;gap:6px;flex-wrap:wrap}
.atl2 .tuto .acts button{font-size:12px;font-weight:600;border:0;border-radius:var(--ra);padding:7px 14px;cursor:pointer;color:#fff;background:var(--ink)}
.atl2 .tuto .acts button.ghost{background:var(--panel);color:var(--ink);border:1px solid var(--line2);font-weight:500}
.atl2 .tuto .goal{flex:none;font-family:var(--mono);font-size:9px;color:var(--muted);border:1px solid var(--line);
  background:var(--panel);border-radius:var(--r);padding:6px 10px}
.atl2 .onb{flex:none;margin:0;background:#0F1D33;color:#fff;padding:18px 20px;border-bottom:1px solid var(--line)}
.atl2 .onb[hidden]{display:none}
.atl2 .onb .tag{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:12px;color:#5FB98C;font-weight:600;margin-bottom:9px;font-variant-numeric:tabular-nums}
.atl2 .onb .tag i{width:7px;height:7px;border-radius:50%;background:#5FB98C}
.atl2 .onb h2{margin:0 0 5px;font-size:21px;font-weight:700;letter-spacing:-.02em}
.atl2 .onb .sub{font-size:13px;color:#A7B6CC;margin-bottom:14px}
.atl2 .onb .steps{display:flex;gap:10px;align-items:stretch;flex-wrap:wrap}
.atl2 .onb .st{flex:1 1 190px;background:#16233A;border-radius:var(--rb);padding:13px 15px;position:relative}
.atl2 .onb .st.go{background:var(--brand)}
.atl2 .onb .st .h{font-size:14.5px;font-weight:700;margin-bottom:3px}
.atl2 .onb .st .d{font-size:12px;color:#A7B6CC;margin-bottom:10px}
.atl2 .onb .st.go .d{color:#E7F6EE}
.atl2 .onb .st button{background:#22334A;color:#fff;border:0;border-radius:99px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer}
.atl2 .onb .st.go button{background:#0F1D33}
.atl2 .onb .foot{margin-top:13px;font-size:12px;color:#A7B6CC}
.atl2 .onb .foot b{color:#fff}
.atl2 .row.locked{filter:blur(4px);pointer-events:none;user-select:none}
.atl2 .lockbar{flex:none;display:none;align-items:center;gap:14px;justify-content:center;padding:11px 14px;
  background:var(--ink);color:#fff;position:sticky;bottom:0;z-index:20}
.atl2 .lockbar.on{display:flex}
.atl2 .lockbar b{font-weight:600;font-size:13px}
.atl2 .lockbar button{background:#fff;color:var(--ink);border:0;border-radius:99px;padding:9px 18px;font-size:13px;font-weight:700;cursor:pointer}
.atl2 .lk{font-size:10px;opacity:.75;margin-right:3px}
.atl2 .c-vd{display:flex;flex-direction:column;gap:3px;align-items:flex-start;min-width:0}
.atl2 .vd{display:inline-flex;align-items:center;font-size:12px;font-weight:600;border-radius:var(--rs);
  padding:3px 8px;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis;}
.atl2 .vd.v-ok{background:var(--brand);color:#fff}
.atl2 .vd.v-no{background:var(--red);color:#fff}
.atl2 .vd.call{background:#E7F6EE;color:#0E8A44;box-shadow:inset 0 0 0 1px #B6DCC6}
.atl2 .vd.v-yes{background:#7C3AED;color:#fff}
.atl2 .vd.v-pass,.atl2 .vd.v-no2{background:#FDECEC;color:#C0353A;box-shadow:inset 0 0 0 1px #F5C2C2}
.atl2 .vd.v-cons{background:#EFF6FF;color:#1D4ED8;box-shadow:inset 0 0 0 1px #C7DDFA}
.atl2 .vd.v-mon{background:var(--panel3);color:var(--muted);box-shadow:inset 0 0 0 1px var(--line)}
.atl2 .vd.wait{background:none;color:var(--dim);font-weight:500;font-style:italic;padding-left:0}
.atl2 .c-sc{font-family:var(--mono);font-size:12px;font-weight:700;text-align:right;font-variant-numeric:tabular-nums}
.atl2 .c-sc s{text-decoration:none;font-size:8.5px;color:var(--dim)}
.atl2 .stbtn{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--c);color:var(--tc,var(--c));
  background:var(--bgc,var(--panel));border-radius:var(--r);padding:5px 10px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .memobtn{background:var(--blue);color:#fff;border:0;border-radius:var(--ra);padding:6px 11px;font-size:11.5px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .memobtn:hover{filter:brightness(1.1)}
.atl2 .yn{display:flex;gap:4px}
.atl2 .ynb{border-radius:var(--ra);padding:5px 10px;font-size:11.5px;font-weight:700;cursor:pointer;
  border:1.5px solid var(--c);background:var(--panel);color:var(--c);white-space:nowrap}
.atl2 .ynb.oui{--c:#0E8A44}
.atl2 .ynb.non{--c:var(--red)}
.atl2 .ynb:hover{background:var(--c);color:#fff}
.atl2 .ticker{flex:none;display:flex;height:46px;background:#0F1D33;color:#fff;border-bottom:1px solid #1B2F4E}
.atl2 .ticker .lbl{flex:none;display:flex;align-items:center;gap:9px;padding:0 17px;background:var(--red);
  font-family:var(--mono);font-size:12px;font-weight:600;
  box-shadow:1px 0 0 rgba(255,255,255,.16);font-variant-numeric:tabular-nums}
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
.atl2 .tk .sigwin{margin:0;font-size:10.5px;color:#A7B6CC}
.atl2 .tk .sigwin .gg i{background:rgba(255,255,255,.18)}
.atl2 .tk .sigwin .gg i.on{background:#A7B6CC}
.atl2 .tk .sigwin.hot{color:#F5C6C8;font-weight:600}
.atl2 .tk .sigwin.hot .gg i.on{background:#F5C6C8}
.atl2 .tk .sigwin a{display:none}
.atl2 .tk .tkfl{width:21px;height:16px;object-fit:cover;border-radius:var(--rs);flex:none;
  box-shadow:0 0 0 1px rgba(255,255,255,.22)}
.atl2 .tk .who{display:flex;align-items:center;gap:7px;flex:none}
.atl2 .tk .co{font-weight:700;font-size:15px;color:#fff;letter-spacing:-.015em}
.atl2 .tk .what{font-size:12.5px;color:#AFC2D3}
.atl2 .tk .am{font-family:var(--mono);font-size:13px;color:#fff;font-weight:600;
  background:rgba(255,255,255,.09);border-radius:var(--rs);padding:3px 8px;font-variant-numeric:tabular-nums}
.atl2 .tk .mt{font-size:12px;color:#B7C9D8;border:1px solid rgba(255,255,255,.2);border-radius:var(--rs);
  padding:2px 8px;font-weight:600}
.atl2 .tk .ang{font-family:var(--mono);font-size:12px;color:#FDBA74;
  border:1px solid rgba(253,186,116,.4);border-radius:var(--rs);padding:2px 7px;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .tk .tkgo{font-size:13px;color:#4A6379;transition:color .12s,transform .12s}
.atl2 .tk:hover .tkgo{color:#fff;transform:translateX(3px)}
.atl2 .tk.spent{opacity:.32}
.atl2 .tk.spent .co{color:#8FA0B8}
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
  font-family:var(--mono);font-size:12px;color:var(--muted);cursor:pointer;font-weight:600;font-variant-numeric:tabular-nums}
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
  transition:opacity .15s;font-family:var(--mono);font-size:12px;color:var(--ink);font-weight:600;font-variant-numeric:tabular-nums}
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
.atl2 .frail .cap{font-family:var(--mono);font-size:12px;color:var(--dim);
  padding:0 1px;line-height:1.4;margin-bottom:7px;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .frail .cap+*{margin-bottom:15px}
.atl2 .frail .fgrid{margin-bottom:0}
.atl2 .sig{display:inline-flex;align-items:center;gap:6px;background:var(--red);color:#fff;border-radius:var(--rs);
  padding:3px 9px;font-size:12px;font-weight:600;white-space:nowrap;line-height:1.5;
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
.atl2 .sigstrip{display:flex;align-items:center;gap:12px;padding:10px 14px;background:#FDECEC;
  border-bottom:1px solid #FCD9D9;flex-wrap:wrap}
.atl2 .sigstrip .t{font-size:13.5px;font-weight:700;color:#C0353A}
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
  border-bottom:1px solid var(--line2);box-shadow:-16px 6px 34px rgba(15,29,51,.16);
  display:none;flex-direction:column;max-height:min(52vh,430px);z-index:30}
.atl2 .fpanel.on{display:flex}
.atl2 .stage.folded ~ .fpanel{right:0;left:0;top:100%;width:auto;border-left:0;border-right:0;
  box-shadow:0 20px 36px rgba(15,29,51,.16)}
.atl2 .fpanel .ph{display:flex;align-items:center;gap:10px;padding:9px 14px;border-bottom:1px solid var(--line);background:var(--panel2)}
.atl2 .fpanel .ph b{font-family:var(--mono);font-size:12px;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .fpanel .ph .sp{flex:1}
.atl2 .fpanel .ph button{background:none;border:0;font-family:var(--mono);font-size:12px;color:var(--muted);cursor:pointer;padding:3px 6px;font-weight:600;font-variant-numeric:tabular-nums}
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
  box-shadow:0 1px 2px rgba(15,29,51,.05)}
.atl2 .dfield input:focus{border-color:var(--brand);box-shadow:0 0 0 3px rgba(22,163,74,.15)}
.atl2 .dfield.pulse input{animation:atl2-pulse .7s ease}
@keyframes atl2-pulse{0%{box-shadow:0 0 0 0 rgba(22,163,74,.45)}100%{box-shadow:0 0 0 12px rgba(22,163,74,0)}}
.atl2 .detect{position:absolute;right:13px;font-family:var(--mono);font-size:12px;background:var(--panel3);
  color:var(--muted);border-radius:var(--rs);padding:3px 8px;pointer-events:none;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .detect.url{background:var(--brand-l);color:var(--brand-d)}
.atl2 .dunder{margin-top:6px;display:flex}
.atl2 .memo{margin-top:12px;background:var(--panel);border:0;border-top:2px solid var(--ink);
  border-radius:0 0 var(--ra) var(--ra);overflow:hidden;box-shadow:0 6px 18px rgba(15,29,51,.07)}
.atl2 .memo[hidden]{display:none}
.atl2 .memo .mh{display:flex;align-items:center;gap:10px;padding:11px 16px 9px;background:var(--panel)}
.atl2 .memo .mh .nm{font-weight:700;font-size:14.5px}
.atl2 .memo .mh .vv{font-family:var(--mono);font-size:12px;background:#EFF6FF;color:#1D4ED8;
  border-radius:var(--rs);padding:3px 8px;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .memo .mh .sp{flex:1}
.atl2 .memo .mh .x{background:none;border:0;font-size:18px;color:var(--dim);cursor:pointer}
.atl2 .memo .tabs2{display:flex;gap:0;border-bottom:1px solid var(--line);overflow-x:auto;background:var(--panel);padding:0 10px}
.atl2 .memo .tabs2 button{flex:none;background:none;border:0;border-bottom:2.5px solid transparent;padding:9px 15px;
  font-family:var(--mono);font-size:12px;color:var(--muted);cursor:pointer;white-space:nowrap;font-weight:600;font-variant-numeric:tabular-nums}
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
  height:46px;padding:0 30px;flex:none;font-size:15px;font-weight:700;box-shadow:0 1px 2px rgba(15,29,51,.08);cursor:pointer;flex:none;display:flex;align-items:center;gap:8px}
.atl2 .evalbtn:hover{background:var(--brand-d)}
.atl2 .evalbtn[disabled]{opacity:.6;cursor:default}
.atl2 .evalbtn .fill{position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,255,255,.28)}
.atl2 .evalbtn.loading .fill{width:100%;transition:width 1.15s linear}
.atl2 .dmulti{background:none;border:0;font-size:12px;color:var(--muted);cursor:pointer;text-decoration:underline;text-underline-offset:3px;flex:none}
.atl2 .dmulti:hover{color:var(--brand-d)}
.atl2 .bulk{display:none;margin-top:10px;gap:9px;align-items:flex-start}
.atl2 .bulk.on{display:flex}
.atl2 .bulk textarea{flex:1;min-height:118px;overflow:hidden;border:1.5px solid var(--line2);border-radius:var(--ra);
  padding:11px 13px;font-size:13.5px;line-height:1.7;resize:none;outline:none;font-family:var(--mono);font-variant-numeric:tabular-nums}
.atl2 .bulk textarea:focus{border-color:var(--brand)}
.atl2 .bulk .side{display:flex;flex-direction:column;gap:6px;flex:none;width:180px}
.atl2 .bulk .hint{font-family:var(--mono);font-size:12px;color:var(--dim);text-align:center;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .result{display:none;margin-top:10px;border-radius:var(--r);border:1.5px solid var(--c);background:var(--bgc);
  padding:11px 14px;align-items:center;gap:14px;flex-wrap:wrap;animation:atl2-pop .22s ease}
.atl2 .result.on{display:flex}
@keyframes atl2-pop{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
.atl2 .result .vv{display:flex;align-items:center;gap:8px;flex:none}
.atl2 .result .vp{font-family:var(--mono);font-size:12px;font-weight:600;color:#fff;
  background:var(--c);border-radius:var(--rs);padding:5px 10px;font-variant-numeric:tabular-nums}
.atl2 .result .vs{font-family:var(--mono);font-size:17px;font-weight:700;color:var(--c);font-variant-numeric:tabular-nums}
.atl2 .result .vs s{text-decoration:none;font-size:10px;color:var(--muted)}
.atl2 .result .rn{font-weight:700;font-size:14px}
.atl2 .result .rr{flex:1;min-width:180px;font-size:12.5px;color:var(--muted)}
.atl2 .result .rr b{color:var(--ink);font-weight:600}
.atl2 .result .go{background:var(--c);color:#fff;border:0;border-radius:var(--ra);padding:8px 13px;font-size:11.5px;
  font-weight:700;cursor:pointer;white-space:nowrap}
.atl2 .tally{display:flex;align-items:center;gap:10px;margin-top:9px;font-family:var(--mono);font-size:12px;color:var(--dim);flex-wrap:wrap;font-weight:600;font-variant-numeric:tabular-nums}
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
.atl2 .groupbar .gl{font-family:var(--mono);font-size:12px;color:var(--dim);margin-right:3px;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .groupbar button{font-size:11.5px;background:var(--panel);border:1px solid var(--line);border-radius:var(--r);
  padding:5px 11px;cursor:pointer;color:var(--muted)}
.atl2 .groupbar button:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .groupbar button[aria-pressed="true"]{background:var(--ink);border-color:var(--ink);color:#fff;font-weight:600}
.atl2 .groupbar[hidden]{display:none}
.atl2 .subh{padding:9px 14px 7px;border-bottom:1px solid var(--line);background:#FBFDFE}
.atl2 .subh b{display:block;font-size:12.5px;font-weight:700}
.atl2 .subh span{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .listhead{flex:none;display:flex;align-items:baseline;gap:9px;padding:6px 14px;background:var(--panel2);
  border-bottom:1px solid var(--line);overflow:hidden}
.atl2 .listhead .main{font-size:13.5px;font-weight:600;color:var(--ink);white-space:nowrap;flex:none}
.atl2 .listhead .main b{font-size:17px;font-weight:700;letter-spacing:-.01em}
.atl2 .listhead .dot{color:var(--line2);flex:none}
.atl2 .listhead .ctx{font-family:var(--mono);font-size:12px;color:var(--dim);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1 1 auto;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .listhead .chain{align-self:center;flex:none;margin-left:9px}
.atl2 .exitpile{background:none;border:1px solid var(--line2);border-radius:var(--r);padding:5px 10px;
  font-family:var(--mono);font-size:12px;color:var(--muted);cursor:pointer;align-self:center;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .exitpile:hover{border-color:var(--red);color:var(--red)}
.atl2 .exitpile[hidden]{display:none}
.atl2 .sp-tabs{display:flex;gap:6px;margin-bottom:14px}
.atl2 .sp-tab{display:flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:var(--ra);padding:8px 13px;
  font-size:12.5px;font-weight:600;background:var(--panel);cursor:pointer}
.atl2 .sp-tab[aria-selected="true"]{background:var(--c);border-color:var(--c);color:#fff}
.atl2 .sp-row{display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--line)}
.atl2 .sp-row:last-child{border-bottom:0}
.atl2 .sp-row .sc{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--c);flex:none;width:34px;font-variant-numeric:tabular-nums}
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
.atl2 .grp-h .s{font-family:var(--mono);font-size:12px;color:var(--muted);font-weight:600;font-variant-numeric:tabular-nums}
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
.atl2 .c-amt{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--ink);text-align:right;font-variant-numeric:tabular-nums}
.atl2 .c-amt.none{color:var(--dim);font-weight:400}
.atl2 .c-flag{display:flex;align-items:center;justify-content:center}
.atl2 .c-flag img{width:24px;height:18px;object-fit:cover;border-radius:var(--rs);box-shadow:0 0 0 1px rgba(15,29,51,.12)}
.atl2 .c-flag .em{font-size:16px}
.atl2 .row{border-bottom:1px solid var(--line);cursor:pointer}
.atl2 .cols{flex:none;padding:0 14px;background:var(--panel2);border-bottom:1px solid var(--line);align-items:stretch}
.atl2 .cols>*{display:flex;align-items:center;font-family:var(--mono);font-size:12px;
  color:var(--dim);background:none;border:0;padding:4px 0;text-align:left;min-width:0;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .cols button{cursor:pointer;gap:4px}
.atl2 .cols button:hover{color:var(--ink)}
.atl2 .cols button .ar{opacity:0;font-size:9px}
.atl2 .cols button[aria-sort]:not([aria-sort="none"]){color:var(--ink);font-weight:700}
.atl2 .cols button[aria-sort]:not([aria-sort="none"]) .ar{opacity:1}
.atl2 .c-flag{display:flex;align-items:center;gap:5px;min-width:0}
.atl2 .c-flag .fl{font-size:15px;line-height:1}
.atl2 .c-flag .cc{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .c-stade{font-family:var(--mono);font-size:12px;color:var(--muted);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600;font-variant-numeric:tabular-nums}
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
.atl2 .card .im{font-family:var(--mono);font-size:12px;color:var(--dim);margin-top:6px;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .card .im b{color:var(--ink);font-weight:600;font-family:var(--body);font-size:12px;letter-spacing:0}
.atl2 .cside{background:var(--panel);border:1px solid var(--line);border-radius:var(--r);padding:13px}
.atl2 .cside .lb{font-family:var(--mono);font-size:12px;color:var(--dim);display:block;margin-bottom:6px;font-weight:600;font-variant-numeric:tabular-nums}
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
  font-family:var(--mono);font-size:12px;color:var(--muted);cursor:pointer;text-align:left;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .moregrp:hover{color:var(--ink);background:var(--panel3)}
.atl2 .c-sig{min-width:0;display:flex;flex-direction:column;gap:0;align-items:flex-start}
.atl2 .c-sig .mo{font-family:var(--mono);font-size:12px;color:var(--muted);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .c-sig .win{display:block;font-style:normal;font-family:var(--mono);font-size:12px;color:var(--dim);margin-top:4px;font-weight:600;font-variant-numeric:tabular-nums}
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
  font-family:var(--mono);font-size:12px;font-weight:600;border:1px solid var(--c);color:var(--c);background:var(--panel);font-variant-numeric:tabular-nums}
.atl2 .verdict b{font-family:var(--body);font-size:11px}
.atl2 .artic{display:flex;gap:12px;align-items:flex-start;padding:12px 14px;border-bottom:1px solid var(--line)}
.atl2 .artic .kind{font-family:var(--mono);font-size:12px;border-radius:var(--rs);padding:3px 7px;flex:none;
  background:var(--panel3);color:var(--muted);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .artic .kind.new{background:var(--brand);color:#fff}
.atl2 .artic .body{flex:1;min-width:0}
.atl2 .artic .ti{font-weight:600;font-size:13.5px;line-height:1.35;margin-bottom:3px}
.atl2 .artic .me{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .artic .acts{display:flex;gap:6px;flex:none;flex-wrap:wrap;justify-content:flex-end}
.atl2 .abtn{background:var(--panel);border:1px solid var(--line2);border-radius:var(--ra);padding:7px 12px;font-size:11.5px;font-weight:600;cursor:pointer;white-space:nowrap}
.atl2 .abtn:hover{background:var(--ink);color:#fff;border-color:var(--ink)}
.atl2 .abtn.p{background:var(--brand);border-color:var(--brand);color:#fff}
.atl2 .abtn.p:hover{background:var(--brand-d)}
.atl2 .void{padding:48px;text-align:center;font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .fin{padding:34px 20px;text-align:center}
.atl2 .fin .em{font-size:30px}
.atl2 .fin .t{font-weight:700;font-size:16px;margin:8px 0 4px}
.atl2 .fin .s{font-size:13px;color:var(--muted)}
.atl2 .pop{position:fixed;width:322px;z-index:60;opacity:0;pointer-events:none;background:var(--panel);border:1px solid var(--line2);
  border-radius:var(--r);box-shadow:0 18px 48px rgba(15,29,51,.24);transition:opacity .11s}
.atl2 .pop.on{opacity:1;pointer-events:auto}
.atl2 .pop .ph{padding:13px 15px 10px;border-bottom:1px solid var(--line);display:flex;gap:9px;align-items:flex-start}
.atl2 .pop .ph h3{margin:0;font-size:17px;font-weight:700;flex:1;letter-spacing:-.01em}
.atl2 .pop .ph .id{display:block;font-family:var(--mono);font-size:12px;color:var(--dim);margin-top:3px;font-weight:400;font-variant-numeric:tabular-nums}
.atl2 .pop .x{background:none;border:0;font-size:19px;color:var(--dim);cursor:pointer;line-height:1}
.atl2 .pop .pb{padding:12px 15px;max-height:min(38vh,320px);overflow:auto}
.atl2 .tags{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:11px}
.atl2 .tags span{font-family:var(--mono);font-size:12px;border:1px solid var(--line);color:var(--muted);padding:4px 7px;border-radius:var(--rs);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .tags span.hi{background:var(--panel3);color:var(--ink);font-weight:600}
.atl2 .fld{margin-bottom:12px}
.atl2 .fld:last-child{margin-bottom:0}
.atl2 .fld .l{font-family:var(--mono);font-size:12px;color:var(--dim);display:block;margin-bottom:5px;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .fld p{margin:0;font-size:12.5px;line-height:1.5}
.atl2 .fld .memo{font-size:12px;color:var(--muted);border-left:2px solid var(--line);padding-left:10px}
.atl2 .pop .pf{padding:11px 15px;border-top:1px solid var(--line);background:var(--panel2)}
.atl2 .modal{position:fixed;inset:0;z-index:80;background:rgba(15,29,51,.55);display:none;align-items:center;justify-content:center;padding:20px}
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
.atl2 .qst{font-size:11px;color:#E0A81E;border:1px solid #FFF3D6;background:#FFF7ED;border-radius:99px;padding:3px 10px}
.atl2 .qlist{border:1px solid var(--line);border-radius:var(--r);overflow:hidden;margin-bottom:12px}
.atl2 .qi{display:flex;align-items:center;gap:11px;padding:9px 13px;border-bottom:1px solid var(--line);font-size:13px}
.atl2 .qi:last-child{border-bottom:0}
.atl2 .qn{width:20px;height:20px;border-radius:50%;background:var(--panel3);display:grid;place-items:center;
  font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--muted)}
.atl2 .qs{margin-left:auto;font-family:var(--mono);font-size:11px;color:var(--muted)}
.atl2 .qe{font-family:var(--mono);font-size:12px;color:var(--dim);width:62px;text-align:right;font-weight:600;font-variant-numeric:tabular-nums}
@media (max-width:660px){
.atl2 .two{grid-template-columns:1fr}}
.atl2 .crit{border:1px solid var(--line);border-radius:var(--r);overflow:hidden;margin-bottom:16px}
.atl2 .crit .r{display:flex;gap:12px;padding:9px 13px;border-bottom:1px solid var(--line);font-size:12.5px}
.atl2 .crit .r:last-child{border-bottom:0}
.atl2 .crit .k{font-family:var(--mono);font-size:12px;color:var(--dim);width:112px;flex:none;padding-top:2px;font-weight:600;font-variant-numeric:tabular-nums}
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
.atl2 .fcard .fh .c{font-family:var(--mono);font-size:12px;color:var(--muted);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .fcard .fh .x{background:none;border:0;font-size:20px;color:var(--dim);cursor:pointer}
.atl2 .fcard .fb{padding:20px 22px;overflow:auto;flex:1}
.atl2 .fcard h2{margin:0 0 4px;font-size:25px;font-weight:700;letter-spacing:-.02em}
.atl2 .fcard .sub{font-family:var(--mono);font-size:12px;color:var(--dim);margin-bottom:14px;font-weight:600;font-variant-numeric:tabular-nums}
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
    box-shadow:0 20px 36px rgba(15,29,51,.18)}
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
  box-shadow:0 20px 36px rgba(15,29,51,.16);display:none;flex-direction:column;max-height:min(54vh,440px);z-index:30}
.atl2 .fpanel.on{display:flex}
.atl2 .fpanel .ph{display:flex;align-items:center;gap:10px;padding:9px 14px;border-bottom:1px solid var(--line);background:var(--panel2)}
.atl2 .fpanel .ph b{font-family:var(--mono);font-size:12px;font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .fpanel .ph .sp{flex:1}
.atl2 .fpanel .ph button{background:none;border:0;font-family:var(--mono);font-size:12px;color:var(--muted);cursor:pointer;padding:3px 6px;font-weight:600;font-variant-numeric:tabular-nums}
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
  box-shadow:-16px 6px 34px rgba(15,29,51,.16);max-height:min(54vh,430px)}
.atl2 .fcols{columns:3}
.atl2 .stage.folded .fbar{width:auto;flex:1;flex-direction:row;flex-wrap:wrap;align-items:center;
  border-left:0;border-top:1px solid var(--line);overflow:visible;padding:9px 12px}
.atl2 .stage.folded .fbar .seg{display:flex;gap:4px}
.atl2 .stage.folded .fbar .fsrch{width:auto;flex:1 1 200px;max-width:280px}
.atl2 .stage.folded .fbar .facets{display:flex;flex-wrap:wrap;gap:5px}
.atl2 .stage.folded .fbar .fbtn{width:auto}
.atl2 .stage.folded .fbar .fgrow{display:none}
.atl2 .stage.folded ~ .fpanel{right:0;left:0;top:100%;width:auto;border-left:0;border-right:0;
  box-shadow:0 20px 36px rgba(15,29,51,.16)}
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
.atl2 .dens button b{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
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
  font-family:var(--mono);font-size:15px;font-weight:800;color:var(--ink);flex:none;font-variant-numeric:tabular-nums}
.atl2 .dcard .dnm{font-size:16px;font-weight:700;letter-spacing:-.01em;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .dcard .dv{display:flex;gap:5px;flex-wrap:wrap}
.atl2 .dcard .dmeta{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
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
.atl2 .dcard .pick{background:#FFFBEB;border-left:3px solid #E0A81E;border-radius:0 var(--r) var(--r) 0;padding:9px 11px}
.atl2 .dcard .pick b{font-size:11.5px;color:#96690E;display:block;margin-bottom:2px}
.atl2 .dcard .pick span{font-size:12px;color:#9A6B1F}
.atl2 .radar{width:100%;height:150px;display:block}
.atl2 .radar .grid{fill:none;stroke:var(--line);stroke-width:.7}
.atl2 .radar .axl{font-family:var(--mono);font-size:12px;fill:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .radar .poly{fill:rgba(22,163,74,.18);stroke:var(--brand);stroke-width:1.6}
.atl2 .ident{padding:8px 14px 10px}
.atl2 .idtop{display:flex;align-items:center;gap:8px;margin-bottom:7px}
.atl2 .idmain{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.atl2 .idmain h1{margin:0;font-size:23px;font-weight:700;letter-spacing:-.025em;margin-right:3px}
.atl2 .eyebrow{font-family:var(--mono);font-size:12px;color:var(--brand-d);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .idsp{flex:1}
.atl2 .idsep{width:1px;height:22px;background:var(--line);margin:0 3px}
.atl2 .idupd{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .idlogo{font-weight:600;font-size:12px;border:1px solid var(--line);
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
.atl2 .idpill.pause{color:#96690E;border-color:#FFF3D6;background:#FFFBEB;font-weight:600}
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
  display:grid;place-items:center;font-family:var(--mono);font-size:18px;font-weight:800;flex:none;font-variant-numeric:tabular-nums}
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
.atl2 .qi{border-bottom:1px solid rgba(15,29,51,.06);padding:9px 9px}
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
  font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .engine .ev{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--muted);white-space:nowrap}
.atl2 .engine .ev b{color:var(--ink);font-weight:700}
.atl2 .engine .bar{width:40px;height:5px;background:var(--panel3);border-radius:99px;overflow:hidden}
.atl2 .engine .bar i{display:block;height:100%;background:var(--brand)}
.atl2 .engine .edv{width:1px;height:16px;background:var(--line)}
.atl2 .engine .mi{width:17px;height:17px;border-radius:var(--rs);background:var(--panel3);display:grid;
  place-items:center;font-size:11px;color:var(--muted);font-weight:600}
.atl2 .engine .q{font-size:13.5px}
.atl2 .engine .epause{font-size:11px;font-weight:600;color:#96690E;background:#FFFBEB;border:1px solid #FFF3D6;
  border-radius:99px;padding:3px 10px}
.atl2 .engine .eic{width:20px;height:20px;border-radius:var(--rs);display:grid;place-items:center;font-size:11px;color:var(--muted)}
.atl2 .engine .eic:hover{background:var(--panel3);color:var(--ink)}
.atl2 .engine .ego{font-size:11.5px;font-weight:600;color:var(--brand-d)}
.atl2 .step .warn{position:absolute;top:0;left:0;right:0;width:auto;height:3px;background:#E0A81E;
  border-radius:0;box-shadow:none;animation:none}
.atl2 .step .wl{position:absolute;top:5px;right:11px;font-family:var(--mono);font-size:12px;color:#96690E;font-weight:600;font-variant-numeric:tabular-nums}
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
  background:var(--panel);border:1px solid var(--line);border-radius:var(--rs);padding:2px 8px;font-variant-numeric:tabular-nums}
.atl2 .qi .qe{font-family:var(--body);font-size:11.5px;color:var(--muted);width:74px;text-align:right;letter-spacing:0}
.atl2 .credits{display:inline-flex;align-items:center;gap:7px;margin-top:8px;font-size:11.5px;color:var(--muted);
  border:1px solid var(--line);border-radius:99px;padding:4px 12px;cursor:pointer;background:var(--panel)}
.atl2 .credits b{color:var(--ink);font-weight:700;font-size:13px}
.atl2 .credits:hover{border-color:var(--line2);color:var(--ink)}
.atl2 .credits.empty{border-color:#FFF3D6;background:#FFFBEB;color:#96690E}
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
.atl2 .qc.ok{background:#E7F6EE;color:#0E8A44}
.atl2 .qc.todo{background:#FFF7ED;color:#96690E}
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
.atl2 .qsec{font-family:var(--mono);font-size:12px;font-weight:600;margin:20px 0 8px;font-variant-numeric:tabular-nums}
.atl2 .qsec.ok{color:#0E8A44}
.atl2 .qsec.todo{color:#96690E}
.atl2 .qrows{display:flex;flex-direction:column}
.atl2 .qr2{display:flex;align-items:center;gap:11px;padding:10px 2px;border-bottom:1px solid var(--line);font-size:13.5px}
.atl2 .qr2:last-child{border-bottom:0}
.atl2 .qr2 b{font-weight:700;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .qn2{font-family:var(--mono);font-size:10px;color:var(--dim);width:22px}
.atl2 .qday{font-size:11px;font-weight:600;color:#0E8A44;background:#E7F6EE;border-radius:99px;padding:3px 10px;white-space:nowrap}
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
.atl2 .credits .cl{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .credits b{color:var(--ink);font-weight:800;font-size:17px;letter-spacing:-.02em}
.atl2 .credits .cm{color:var(--dim);font-size:12px;margin-left:-3px}
.atl2 .credits .cd{font-size:11px;color:var(--dim)}
.atl2 .credits:hover{border-color:var(--line2)}
.atl2 .credits.empty{border-color:#FFF3D6;background:#FFFBEB}
.atl2 .credits.empty b{color:#96690E}
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
.atl2 .step .n.up .delta{background:#E7F6EE;color:#0E8A44}
.atl2 .step .n.down .delta{background:#FDECEC;color:#C0353A}
@keyframes atl2-fade{0%{opacity:0;transform:translateY(4px)}20%{opacity:1;transform:translateY(0)}80%{opacity:1}100%{opacity:0}}
.atl2 .cover{display:flex;align-items:center;gap:9px;cursor:pointer;flex-wrap:wrap}
.atl2 .cover .cl2{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
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
  font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .cover .ev{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--muted);white-space:nowrap}
.atl2 .cover .ev b{color:var(--ink);font-weight:700}
.atl2 .cover .bar{width:52px;height:5px;background:var(--panel3);border-radius:99px;overflow:hidden}
.atl2 .cover .bar i{display:block;height:100%;background:var(--brand)}
.atl2 .cover .edv{width:1px;height:16px;background:var(--line)}
.atl2 .cover .ego{font-size:11.5px;font-weight:600;color:var(--brand-d)}
.atl2 .c-vd .vd{font-size:9.5px;padding:3px 7px}
.atl2 .step .wl{display:none}
.atl2 .step .l{display:flex;align-items:center;gap:6px}
.atl2 .step .wd{width:6px;height:6px;border-radius:50%;background:#E0A81E;flex:none;
  box-shadow:0 0 0 2.5px rgba(245,158,11,.22)}
.atl2 .step[aria-selected="true"] .wd{background:#fff;box-shadow:0 0 0 2.5px rgba(255,255,255,.3)}
.atl2 .step .warn{height:2.5px;background:#E0A81E}
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
.atl2 .step.wait .l,.atl2 .step.wait .n{color:#96690E}
.atl2 .step.wait:hover{background:#FEF0DC}
.atl2 .step.wait[aria-selected="true"]{background:var(--c)}
.atl2 .step.wait[aria-selected="true"] .l,.atl2 .step.wait[aria-selected="true"] .n{color:var(--tc,#fff)}
.atl2 .step .warn{position:absolute;top:0;left:14px;right:14px;width:auto;height:3px;background:#E0A81E;
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
  radial-gradient(farthest-side at 50% 0,rgba(15,29,51,.09),transparent),
  radial-gradient(farthest-side at 50% 100%,rgba(15,29,51,.09),transparent) 0 100%;
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
.atl2 .wait2{display:inline-flex;align-items:center;gap:4px;font-family:var(--mono);font-size:12px;font-weight:600;border-radius:var(--rs);padding:2px 6px;
  background:var(--panel3);color:var(--muted);font-variant-numeric:tabular-nums}
.atl2 .wait2.warm{background:#FFF7ED;color:#96690E}
.atl2 .wait2.hot{background:#FDECEC;color:#C0353A}
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
.atl2 .tuto .fold:hover{background:rgba(15,29,51,.06)}
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
.atl2 .c-sig .sigwin.hot{color:#C0353A;font-weight:600}
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
.atl2 .tstep{display:inline-block;font-family:var(--mono);font-size:12px;font-weight:600;
  color:var(--ink);background:rgba(15,29,51,.07);border-radius:var(--rs);
  padding:3px 8px;margin-right:9px;vertical-align:1px;font-variant-numeric:tabular-nums}
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
.atl2 .tstep{background:var(--stc,rgba(15,29,51,.07));color:var(--stt,#fff)}
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
.atl2 .off .l{font-family:var(--mono);font-size:12px;white-space:nowrap;color:var(--dim);font-weight:600;font-variant-numeric:tabular-nums}
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
.atl2 .pfl{width:20px;height:14px;border-radius:2px;object-fit:cover;box-shadow:0 0 0 1px rgba(15,29,51,.12)}
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
.atl2 .off .l{font-family:var(--mono);font-size:12px;white-space:nowrap;
  color:color-mix(in srgb, var(--c) 78%, #16233A);font-weight:600;font-variant-numeric:tabular-nums}
.atl2 .off .n{font-size:15px;font-weight:700;line-height:1;
  color:color-mix(in srgb, var(--c) 62%, #16233A);text-decoration:none}
.atl2 .off:hover .n{text-decoration:none}
.atl2 .off[aria-selected="true"]{background:var(--c)}
.atl2 .off[aria-selected="true"] .l{color:rgba(255,255,255,.85)}
.atl2 .off[aria-selected="true"] .n{color:#fff}
.atl2 .off .n::after{display:none}
.atl2 .off[style*="--pf"][aria-selected="true"] .l{color:rgba(15,29,51,.6)}
.atl2 .off[style*="--pf"][aria-selected="true"] .n{color:#16233A}
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
.atl2 .pop .tags button{font-family:var(--mono);font-size:12px;border:1px solid var(--line);
  background:var(--panel);color:var(--muted);border-radius:var(--rs);padding:4px 8px;cursor:pointer;font-weight:600;font-variant-numeric:tabular-nums}
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
.atl2 .off.view[style*="--pf"][aria-selected="true"] .l{color:rgba(15,29,51,.62)}
.atl2 .off.view[style*="--pf"][aria-selected="true"] .n{color:#16233A}
.atl2 .off .n::after,.atl2 .off[aria-selected="true"] .n::after,.atl2 .off.view[aria-selected="true"] .n::after{display:none!important;content:none!important}
.atl2 .onb{background:#0F1D33;color:#fff;padding:22px 22px 24px;border-bottom:1px solid var(--line)}
.atl2 .onbh{margin-bottom:20px}
.atl2 .onb .tag{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:12px;color:#5FD39B;font-weight:600;margin-bottom:11px;font-variant-numeric:tabular-nums}
.atl2 .onb .tag i{width:6px;height:6px;border-radius:50%;background:#5FD39B;animation:atl2-blink 1.8s infinite}
.atl2 .onb h2{margin:0 0 7px;font-size:23px;font-weight:700;letter-spacing:-.028em;line-height:1.15}
.atl2 .onb h2 b{color:#5FD39B;font-weight:700}
.atl2 .onb .sub{font-size:13.5px;color:#A7B6CC;line-height:1.55;max-width:76ch}
.atl2 .steps4{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:0;position:relative}
.atl2 .s4{position:relative;padding:0 18px 0 0}
.atl2 .s4+.s4{padding-left:18px;border-left:1px solid #1B2F4E}
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
  font-size:12px;color:var(--dim);font-weight:600}
.atl2 .bulk .side{min-width:210px;flex:none}
.atl2 .bulk .side .evalbtn{width:100%;white-space:nowrap;padding:0 18px;min-width:0}
.atl2 .bulk .side .hint{white-space:nowrap}`,Ws=`
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
  box-shadow:0 -10px 28px -16px rgba(15,29,51,.5)}
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
.atl2 .live-stack{flex:none;display:flex;flex-direction:column;background:#0F1D33;
  border-bottom:1px solid var(--line,#E3E8F0)}
/* /cibles : le LIVE reste sous la main quand on descend (25/08).
   /actualites (.ops) : le fil n'est PAS collant — il se lit une fois. */
.atl2.cibles .live-stack{position:sticky;z-index:27;top:var(--pp-gap,60px)}
body.pp-navfold .atl2.cibles .live-stack{top:26px}
.atl2.cibles .listhead{top:calc(var(--pp-gap,60px) + 44px)}
body.pp-navfold .atl2.cibles .listhead{top:74px}
.atl2 .live-stack--cibles .ticker{border-bottom:1px solid #1B2F4E;height:44px;
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
.atl2 .ticker .dytog{flex:none;width:40px;height:100%;border:0;border-left:1px solid #1B2F4E;
background:transparent;color:#C5D4E3;cursor:pointer;display:grid;place-items:center}
.atl2 .ticker .dytog:hover{background:#16233A;color:#fff}
.atl2 .ticker .dytog[aria-pressed="true"]{color:#7FD8A6;background:#0E1A2C}
.atl2 .live-stack--cibles .thesis-days{border-top:0;padding-top:0}
/* LES PUCES DU LIVE (15/08) — « 48 » vit à côté de « Tout », plus dans un
   bloc « 48 ouverts » qui mangeait la largeur du fil. Même grammaire que le
   bandeau public (.pp-fil / .pp-film de src/live/core.ts). */
.atl2 .ticker .lbl .cnt{display:none}
.atl2 .tkfil{flex:none;position:relative;display:flex;align-items:center;padding:0 10px;
  border-right:1px solid #1B2F4E}
.atl2 .tkfilb{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);
  font-size:12px;font-weight:600;color:#D5E3F0;background:transparent;
  border:1px solid #1B2F4E;border-radius:4px;padding:5px 9px;cursor:pointer;white-space:nowrap}
.atl2 .tkfilb:hover{color:#fff;border-color:#5FD39B}
.atl2 .tkfilb b,.atl2 .tkfilm button b{font-family:var(--mono);font-size:10px;font-weight:700;
  letter-spacing:0;color:#fff;background:rgba(255,255,255,.16);border-radius:3px;padding:1px 6px}
.atl2 .tkfilb b{background:#12A150}
.atl2 .tkfilm{position:absolute;top:calc(100% + 4px);left:0;z-index:60;min-width:180px;
  display:flex;flex-direction:column;background:#0F1D33;border:1px solid #1B2F4E;
  border-radius:8px;padding:4px;box-shadow:0 16px 40px rgba(0,0,0,.45)}
.atl2 .tkfilm[hidden]{display:none!important}
.atl2 .tkfilm button{display:flex;align-items:center;justify-content:space-between;gap:16px;
  text-align:left;font-family:var(--mono);font-size:12px;font-weight:600;
  color:#D5E3F0;background:transparent;border:0;border-radius:5px;padding:8px 10px;
  cursor:pointer;white-space:nowrap}
.atl2 .tkfilm button:hover{background:#16233A;color:#fff}
.atl2 .tkfilm button[aria-pressed="true"]{background:#12A150;color:#fff}
/* Ce que le LIVE regroupe, en tête du menu (16/08) : la SEULE ligne du
   déroulant qui se lit, donc la seule qui revient à la ligne. */
/* L'ACHETEUR sur la ligne (17/08) : discret, mais cliquable — c'est une
   entrée dans le cockpit, pas une décoration. */
.atl2 .racq{margin-left:8px;flex:0 0 auto;font-family:var(--mono);font-size:12px;
  font-weight:600;color:#4B5E78;background:transparent;border:0;
  border-bottom:1px dashed #C9D6E6;padding:0 0 1px;cursor:pointer;white-space:nowrap}
.atl2 .racq:hover{color:#0E8A44;border-bottom-color:#0E8A44}
.atl2 .acqchip{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);
  font-size:12px;font-weight:600;color:#0E8A44;background:#E7F6EE;
  border:1px solid #BBF7D0;border-radius:999px;padding:5px 10px}
.atl2 .acqchip button{border:0;background:none;color:#0E8A44;cursor:pointer;
  font:inherit;padding:0;opacity:.7}
.atl2 .acqchip button:hover{opacity:1}
.atl2 .tkfilscope{display:block;max-width:290px;padding:9px 10px 10px;margin-bottom:3px;
  border-bottom:1px solid #1B2F4E;font-family:var(--mono);font-size:12px;line-height:1.6;font-weight:600;color:#9DB2CA;white-space:normal;text-transform:none}
/* les deux axes : rubriques d'édition, puis signaux ouverts */
.atl2 .tkfilg{font-family:var(--mono);font-size:12px;font-weight:600;
  color:#5A6E85;padding:9px 10px 4px}
/* elle reste sur téléphone : c'est le seul compteur de la barre */
/* UN ONGLET VIDE MÈNE QUELQUE PART : le chiffre, la phrase, la sortie.
   La liste ne doit pas s'effondrer à 0 px quand elle est vide, sinon son
   contenu déborde par-dessus la ligne d'apprentissage et lui donne le clic. */
.atl2 .list.list-empty{flex:none;min-height:190px;overflow:visible}
.atl2 .void.void-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:8px;padding:34px 18px 38px;text-align:center}
.atl2 .void-empty b{font-size:16px;font-weight:700;letter-spacing:-.01em;color:var(--ink,#16233A);
  text-transform:none}
.atl2 .void-empty span{font-size:13.5px;color:var(--muted,#4B5E78);text-transform:none;
  letter-spacing:0}
.atl2 .void-empty .abtn{margin-top:4px;padding:10px 18px;font-size:13px;font-weight:700;
  color:#fff;background:var(--ink,#16233A);border:1.5px solid var(--ink,#16233A);
  border-radius:var(--ra,8px);cursor:pointer}
.atl2 .void-empty .abtn:hover{background:#1B2F4E;border-color:#1B2F4E}
/* brief sous liste : fluide dans le scroll app */
.atl2 .app > .thesis-brief{flex:none}
/* Afficher plus — vrai bouton encre (pas un lien vert) */
.atl2 .moregrp{display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:5px;width:100%;padding:18px 16px 20px;background:var(--panel,#fff);
  border:0;border-top:1px solid var(--line);cursor:pointer;font:inherit}
.atl2 .moregrp .more-label{display:inline-flex;align-items:center;justify-content:center;
  min-width:220px;padding:12px 22px;font-size:13.5px;font-weight:700;letter-spacing:-.01em;
  color:#fff;background:var(--ink,#16233A);border:1.5px solid var(--ink,#16233A);
  border-radius:var(--ra,8px);transition:background .12s,border-color .12s}
.atl2 .moregrp:hover .more-label{background:#1B2F4E;border-color:#1B2F4E}
.atl2 .moregrp .more-meta{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--dim,#8FA0B8)}

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
  font-size:12px;color:var(--dim);font-weight:600}
.atl2 .card .ed-decrypt-b .art-srcline a{color:var(--dim)}
.atl2 .card .ed-decrypt-b p{margin:0 0 11px;font-size:14px;line-height:1.68;
  color:#3F4E61}
.atl2 .card .ed-decrypt-b p:last-child{margin-bottom:0}
.atl2 .card .ed-decrypt-b em{color:#4B5E78}
.atl2 .card .ed-decrypt-b a{color:var(--brand-d,#0E8A44)}
/* pas de décryptage : le titre plein, jamais tronqué */
.atl2 .ops-open .oc-head{margin:2px 0 0;font-size:15.5px;line-height:1.5;
  font-weight:500;color:var(--ink)}
/* UNE rangée de méta — pastilles monospace calmes */
.atl2 .ops-open .oc-meta{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 0}
/* les chips sont des FILTRES (16/08 : « quand je clique sur un tag, ça
   personnalise le cockpit ») — même habit span/button, la main en plus */
.atl2 .ops-open .oc-meta span,.atl2 .ops-open .oc-meta button{
  font:inherit;font-family:var(--mono);font-size:12px;color:#4B5E78;background:#F5F7FA;
  border:1px solid var(--line);border-radius:5px;padding:4px 8px;font-weight:600}
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
.atl2 .ops-open .oc-cta:hover{background:var(--brand-d,#0E8A44)}
.atl2 .ops-open .oc-ghost{background:#fff;border:1px solid var(--line2);
  border-radius:8px;padding:10px 14px;font:inherit;font-size:12.5px;
  font-weight:600;color:var(--ink);cursor:pointer;white-space:nowrap}
.atl2 .ops-open .oc-ghost:hover{border-color:var(--ink)}
.atl2 .ops-open .oc-src{margin-left:auto;font-family:var(--mono);font-size:12px;color:var(--dim);text-decoration:none;white-space:nowrap;font-weight:600}
.atl2 .ops-open .oc-src:hover{color:var(--brand-d,#0E8A44)}
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
  padding:10px 12px 20px;background:#F9FBFD}
@media (min-width:1100px){.atl2.ops .desk-list .list.maxi{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}}
.atl2.ops .desk-list .list.maxi .grp-h{grid-column:1/-1;position:static;background:transparent;
  border:0;padding:12px 2px 0;margin:0}
.atl2.ops .desk-list .dcard.dops .dimg{display:none}
.atl2.ops .desk-list .list.ligne{padding:6px 10px 16px}
.atl2.ops .desk-list .dcard.sel{box-shadow:inset 4px 0 0 #12A150;outline:2px solid #12A150;
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
  box-shadow:inset 4px 0 0 #12A150;outline:none}
.atl2.ops .row.sel .rnm,.atl2.cibles .row.sel .rnm{font-weight:750;color:#0E8A44}
.atl2.ops .row.sel .cell .rev,.atl2.cibles .row.sel .cell .rev{box-shadow:none}
.atl2.ops .demand.pair .dfield input,.atl2.cibles .demand.pair .dfield input{color:#0E8A44;font-weight:700}
.atl2.ops .row.sel.echo,.atl2.ops .demand.pair.echo,
.atl2.cibles .row.sel.echo,.atl2.cibles .demand.pair.echo{
  animation:pp-echo .85s ease}
.atl2.cibles .row,.atl2.cibles .dcard{scroll-margin-top:calc(var(--pp-gap,60px) + 44px + var(--demand-h,56px) + var(--listhead-h,52px) + 8px)}
@keyframes pp-echo{
  0%{background:#B7E6C8;box-shadow:inset 4px 0 0 #12A150,0 0 0 0 rgba(18,161,80,.35)}
  55%{background:#DFF3E6;box-shadow:inset 4px 0 0 #12A150,0 0 0 6px rgba(18,161,80,.12)}
  100%{background:#DFF3E6;box-shadow:inset 4px 0 0 #12A150,0 0 0 0 rgba(18,161,80,0)}}
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
  background:#F9FBFD;border-left:1px solid var(--line);
  box-shadow:-1px 0 0 var(--line,#E3E8F0)}
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
.atl2.ops .readpane-empty{margin:48px 32px;font-size:14.5px;line-height:1.55;color:#4B5E78;
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
  border:1px solid rgba(15,29,51,.10);border-radius:12px;
  box-shadow:0 10px 32px rgba(15,29,51,.10);cursor:pointer;font:inherit;color:inherit}
.atl2.ops .map-pulse:hover{border-color:rgba(18,161,80,.45)}
.atl2.ops .map-pulse.on{border-color:#12A150;box-shadow:0 0 0 2px rgba(18,161,80,.18),
  0 10px 32px rgba(15,29,51,.10)}
.atl2.ops .map-pulse em{display:block;font-style:normal;font-family:var(--mono);
  font-size:12px;font-weight:600;
  color:#12A150;margin:0 0 6px}
.atl2.ops .map-pulse b{font-size:32px;font-weight:800;letter-spacing:-.04em;
  line-height:1;color:var(--ink)}
.atl2.ops .map-pulse>span{display:block;font-family:var(--mono);font-size:12px;color:var(--dim);margin:4px 0 10px;font-weight:600}
.atl2.ops .map-pulse ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:5px}
.atl2.ops .map-pulse li{font-size:12.5px;color:#0F1D33;line-height:1.35}
.atl2.ops .stage:not(.folded) .fbar{position:absolute;z-index:4;right:12px;top:12px;
  bottom:12px;width:min(360px,38%);height:auto!important;max-height:calc(100% - 24px);
  box-sizing:border-box;padding:12px 14px;overflow-y:auto;overscroll-behavior:auto;
  background:rgba(255,255,255,.94);backdrop-filter:blur(12px);
  border:1px solid rgba(15,29,51,.10);border-radius:12px;
  box-shadow:0 10px 32px rgba(15,29,51,.10)}
.atl2.ops .zoom{padding:22px 26px 36px;max-width:40rem}
.atl2.ops .readpane.is-edito .zoom{max-width:none;padding:22px 28px 48px}
.atl2.ops .zoom-k{font-family:var(--mono);font-size:12px;font-weight:600;color:#12A150;margin:0 0 10px}
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
  margin:0 0 22px;font-size:15px;line-height:1.65;color:#4B5E78}
.atl2.ops .zoom-body .mk-sec{margin:26px 0 0}
.atl2.ops .zoom-body .mk-sec:first-child{margin-top:0}
.atl2.ops .zoom-body .mk-sec h2,.atl2.ops .zoom-body .acq-h{
  margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid var(--line,#E3E8F0);
  font-size:14.5px;font-weight:700;letter-spacing:-.02em;line-height:1.3;color:var(--ink)}
.atl2.ops .zoom-body .mk-ops{list-style:none;margin:0;padding:0}
.atl2.ops .zoom-body .mk-op{padding:12px 0;border-bottom:1px solid #F5F7FA}
.atl2.ops .zoom-body .mk-op:last-child{border-bottom:0}
.atl2.ops .zoom-body .mk-op-t{font-size:14.5px;font-weight:650;line-height:1.4;color:var(--ink)}
.atl2.ops .zoom-body .mk-op-t strong{font-weight:750}
.atl2.ops .zoom-body .mk-op-m{margin-top:4px;font-size:12.5px;line-height:1.45;color:#4B5E78}
.atl2.ops .zoom-body .mk-op-m a{color:#0E8A44}
.atl2.ops .zoom-body .mk-empty{margin:8px 0 0;font-size:14px;color:#4B5E78}
.atl2.ops .zoom-body .acq-land{margin:18px 0 4px;padding:14px 14px 8px;background:#F9FBFD;
  border:1px solid #E8EEF4;border-radius:12px}
.atl2.ops .zoom-body .acq-h{font-size:13.5px;margin:0 0 8px;padding-bottom:6px}
.atl2.ops .zoom-body .acq-row{padding:10px 0;border-top:1px solid #E8EEF4}
.atl2.ops .zoom-body .acq-row:first-of-type{border-top:0;padding-top:0}
.atl2.ops .zoom-body .acq-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.atl2.ops .zoom-body .acq-n{font:inherit;font-size:14px;font-weight:750;color:var(--ink);
  background:none;border:0;padding:0;cursor:pointer;text-align:left;
  text-decoration:underline;text-decoration-style:dotted;text-underline-offset:3px}
.atl2.ops .zoom-body .acq-n:hover{color:#0E8A44}
.atl2.ops .zoom-body .acq-c{font-size:12px;color:#4B5E78;font-weight:600}
.atl2.ops .zoom-body .acq-b{display:inline-block;font-size:10.5px;font-weight:700;
  border-radius:5px;padding:1px 7px}
.atl2.ops .zoom-body .acq-b-strat{color:#1d6fb8;background:rgba(29,111,184,.12)}
.atl2.ops .zoom-body .acq-b-fin{color:#9a6b00;background:rgba(214,158,0,.15)}
.atl2.ops .zoom-body .acq-tg{font-size:13px;color:#4B5E78;margin-top:4px;line-height:1.45}
.atl2.ops .zoom-body .acq-tg a{color:#0E8A44}
.atl2.ops .zoom-srcbox{display:flex;flex-direction:column;align-items:flex-start;
  gap:6px;margin:18px 0 0;padding:12px 14px;background:#fff;
  border:1px solid #E8EEF4;border-radius:12px}
.atl2.ops .zoom-src{display:inline-block;margin:0;font-family:var(--mono);
  font-size:12px;color:#4B5E78;text-decoration:none;
  border-bottom:1px solid #E3E8F0;font-weight:600}
.atl2.ops .zoom-src:hover{color:#0E8A44;border-color:#0E8A44}
.atl2.ops .zoom-src-art{color:#0E8A44;font-weight:700;border-color:#BBF7D0}
.atl2.ops .zoom-meta{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 0}
.atl2.ops .zoom-meta button,.atl2.ops .zoom-meta span{
  font:inherit;font-family:var(--mono);font-size:12px;color:#4B5E78;background:#F5F7FA;border:1px solid var(--line);
  border-radius:5px;padding:4px 8px;font-weight:600}
.atl2.ops .zoom-meta button{cursor:pointer}
.atl2.ops .zoom-meta button:hover{color:var(--ink);border-color:var(--ink)}
.atl2.ops .zoom-meta .oc-amt{color:var(--ink);font-weight:700;background:#fff}
.atl2.ops .zoom-card{margin:16px 0 0;width:100%}
.atl2 .zoom-card-host{width:100%;margin:0;line-height:0;border:1px solid #E3E8F0;
  border-radius:10px;overflow:hidden;cursor:zoom-in;background:#fff}
.atl2.ops .zoom-cta,.atl2.ops .zoom-acts{display:flex;flex-direction:column;
  gap:10px;margin:20px 0 0;padding-top:16px;border-top:1px solid var(--line)}
.atl2.ops a.zp-go{text-decoration:none;color:inherit;box-sizing:border-box}
.atl2.ops .zp-go{display:flex;align-items:center;gap:12px;width:100%;
  text-align:left;background:#12A150;color:#fff;border:0;border-radius:12px;
  padding:12px 14px;font:inherit;cursor:pointer}
.atl2.ops .zp-go:hover{background:#0E8A44}
.atl2.ops .zp-go:disabled{opacity:.55;cursor:default}
.atl2.ops .zp-go.ghost{background:#fff;color:var(--ink);border:1px solid #D7E2EC}
.atl2.ops .zp-go.ghost:hover{border-color:#12A150;background:#F4FBF6}
.atl2.ops .zp-ico{flex:none;width:28px;height:28px;border-radius:8px;
  display:grid;place-items:center;background:rgba(255,255,255,.16);font-size:14px}
.atl2.ops .zp-go.ghost .zp-ico{background:#F5F7FA}
.atl2.ops .zp-txt{display:flex;flex-direction:column;gap:1px;min-width:0}
.atl2.ops .zp-txt b{font-size:13.5px;font-weight:700;letter-spacing:-.01em}
.atl2.ops .zp-txt em{font-style:normal;font-size:11.5px;opacity:.78}
.atl2.ops .zp-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
@media (max-width:1100px){.atl2.ops .zp-row{grid-template-columns:1fr}}
.atl2.ops .zp-sec{display:flex;flex-direction:column;align-items:flex-start;gap:2px;
  text-align:left;background:#fff;border:1px solid #E3E8F0;border-radius:12px;
  padding:11px 12px;font:inherit;cursor:pointer;min-width:0}
.atl2.ops .zp-sec:hover{border-color:#12A150;background:#F8FBF9}
.atl2.ops .zp-k{font-family:var(--mono);font-size:12px;font-weight:600;color:#12A150}
.atl2.ops .zp-v{font-size:13px;font-weight:650;color:var(--ink);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}
.atl2.ops .zp-sec em{font-style:normal;font-size:11.5px;color:#4B5E78}
.atl2 .arttog{background:none;border:1px solid var(--line);border-radius:6px;
  font:inherit;font-size:10.5px;font-weight:600;color:var(--muted);
  padding:5px 9px;cursor:pointer;white-space:nowrap;margin-left:8px}
.atl2 .arttog:hover{color:var(--ink);border-color:var(--ink)}
.atl2 .arttog[aria-pressed="true"]{color:var(--brand-d);border-color:var(--brand);
  background:var(--brand-l,#E7F6EE)}
.atl2 .demand .drow.has-url .dfield input{border-color:rgba(18,161,80,.45)!important}
/* Toute la ligne « Collez une URL » colle sous LIVE, pas seulement le champ. */
body.pp-desk .atl2.ops .eval-stick{position:sticky;
  top:calc(var(--pp-gap,60px) + var(--pp-live-h,44px));z-index:36;
  align-self:flex-start;width:100%;background:var(--panel2,#fff);
  box-shadow:0 1px 0 var(--line,#E3E8F0)}
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
.atl2 .demand .drow.flash .dfield input{border-color:rgba(18,161,80,.55)!important}
@keyframes pp-prefill{0%{background:rgba(18,161,80,.10)}100%{background:transparent}}
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
  color:#4B5E78;max-width:62ch}
.atl2.ops .zoom-body .mk-empty{display:none}
.atl2.ops .zoom-body .mk-sec:has(.mk-empty):not(:has(.mk-op,.ed-op,.acq-land,.art-allops li)){display:none}
.atl2.ops .zoom-body .mk-sec{margin:0 0 40px}
.atl2.ops .zoom-body .mk-op{padding:18px 0 20px;border-bottom:1px solid #EEF2F6}
.atl2.ops .zoom-body .mk-op-t{font-size:15.5px;font-weight:700;letter-spacing:-.02em;
  line-height:1.3}
.atl2.ops .zoom-body .mk-op-m{margin-top:8px;font-family:inherit;font-size:13px;
  letter-spacing:0;color:#4B5E78}
.atl2.ops .zoom-body .mk-op-m a{color:#0E8A44}
.atl2.ops .ckdock{flex:none;display:flex;flex-direction:column;gap:0;
  border-top:1px solid var(--line);background:#F9FBFD}
.atl2.ops .ckdock-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;
  padding:14px 28px;border-bottom:1px solid var(--line)}
.atl2.ops .ckdock-row:last-child{border-bottom:0}
.atl2.ops .ckdock-k{flex:1 1 220px;min-width:0}
.atl2.ops .ckdock-k b{display:block;font-size:14px;font-weight:700;letter-spacing:-.01em;
  color:var(--ink)}
.atl2.ops .ckdock-k span{display:block;margin-top:2px;font-size:12.5px;color:#4B5E78}
.atl2.ops .ckdock-act{display:flex;flex-wrap:wrap;align-items:center;gap:8px;flex:1 1 340px}
.atl2.ops .ckdock-act input[type=email]{flex:1 1 200px;min-width:160px;height:40px;
  padding:0 12px;border:1px solid var(--line);border-radius:8px;background:#fff;
  font:inherit;font-size:14px}
.atl2.ops .ckdock-act button{height:40px;padding:0 16px;border:0;border-radius:8px;
  background:var(--brand,#12A150);color:#fff;font:inherit;font-size:13.5px;
  font-weight:700;cursor:pointer}
.atl2.ops .ckdock-act button:hover{background:#0E8A44}
.atl2.ops .ckdock-act a{font-size:12.5px;color:#4B5E78;text-decoration:none;
  border-bottom:1px solid #E3E8F0}
.atl2.ops .ckdock-act a:hover{color:var(--ink)}
.atl2.ops .ckdock-hp{position:absolute;left:-9999px;height:0;width:0;border:0;padding:0}
.atl2.ops .ckdock-msg{flex:1 0 100%;margin:0;font-size:12.5px;color:#0E8A44}
.atl2.ops .ckdock-msg.err{color:#E5484D}
.atl2.ops .ckdock-site .ur{display:flex;gap:8px;margin:0;max-width:none;
  justify-content:flex-start;width:100%}
.atl2.ops .ckdock-site .uf{display:flex;align-items:center;gap:8px;flex:1;height:40px;
  padding:0 12px;background:#fff;border:1px solid var(--line);border-radius:8px}
.atl2.ops .ckdock-site .uf input{flex:1;border:0;outline:none;font:inherit;font-size:14px;
  background:none;min-width:0}
.atl2.ops .ckdock-site .ub{flex:none;height:40px;padding:0 16px;border:0;border-radius:8px;
  background:var(--brand,#12A150);color:#fff;font:inherit;font-size:13.5px;font-weight:700;
  cursor:pointer;white-space:nowrap}
.atl2.ops .ckdock-site .ub:hover{background:#0E8A44}
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
  padding:10px 12px 20px;background:#F9FBFD}
@media (min-width:720px){.atl2.cibles .desk-list .list.maxi{grid-template-columns:1fr 1fr}}
.atl2.cibles .desk-list .list.maxi .grp-h{grid-column:1/-1;position:static;background:transparent;
  border:0;padding:12px 2px 0}
.atl2.cibles .desk-list .list.ligne{padding:6px 10px 16px}
.atl2.cibles .desk-list .dcard.sel{box-shadow:inset 4px 0 0 #12A150;outline:2px solid #12A150;
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
  background:#F9FBFD;border-left:1px solid var(--line);min-width:0}
body.pp-navfold .atl2.cibles .readpane{top:74px}
body.pp-desk .atl2.cibles .eval-stick{position:sticky;z-index:36;
  top:calc(var(--pp-gap,60px) + 44px);align-self:flex-start;width:100%;
  background:var(--panel2,#fff);box-shadow:0 1px 0 var(--line,#E3E8F0)}
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
.atl2.cibles .dockbtn{height:28px;padding:0 10px;border:1px solid var(--line,#E3E8F0);
  border-radius:999px;background:#fff;color:#0F1D33;font:inherit;font-size:12px;
  font-weight:650;cursor:pointer;white-space:nowrap}
.atl2.cibles .dockbtn:hover{border-color:#8FA0B8;background:#F9FBFD}
.atl2.cibles .dockbtn.on{border-color:#12A150;background:#DFF3E6;color:#0E8A44}
.atl2.cibles .dockbtn.since{border-color:#CFE9DA;color:#0E7F3F}
.atl2.cibles .dockbtn.since.on{background:#F3FAF6}
.atl2.cibles .dockbtn.sig{border-color:#FECACA;color:#C0353A}
.atl2.cibles .dockbtn.sig.on{background:#FDECEC}
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
.atl2.cibles .zoom .thesis-brief__kicker{color:#12A150;font-family:var(--mono);
  font-size:12px;font-weight:600;}
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
  font-size:15px;line-height:1.65;color:#4B5E78}
.atl2.cibles .thesis-brief__body .ed-lead p{margin:0 0 8px;font-size:12px;font-weight:600;color:#12A150}
.atl2.cibles .thesis-brief__body .ed-lead ul{margin:0;padding-left:1.15em}
.atl2.cibles .thesis-brief__body .ed-lead li{margin:0 0 8px;color:#0F1D33}
.atl2 .ident .goal{padding:8px 16px 12px;margin:0;border-top:1px solid var(--line);
  background:var(--panel)}
.atl2 .ident .goal .pbar{max-width:200px}
.atl2 .ticker .tk-edito{flex:none;display:inline-flex;align-items:center;justify-content:center;
  align-self:center;height:28px;margin:0 8px;padding:0 10px;border:1px solid #1B2F4E;border-radius:5px;
  background:transparent;color:#E8EEF5;font:inherit;font-size:11.5px;font-weight:650;
  cursor:pointer;white-space:nowrap;line-height:1}
.atl2 .ticker .tk-edito:hover{background:#16233A;color:#fff;border-color:#5FD39B}
.atl2 .live-stack--cibles .thesis-days{padding:0 8px 8px;background:#0F1D33}
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
  padding:10px 0;border-bottom:1px solid #F5F7FA}
.atl2.cibles .readpane .cdk{min-width:0;font-size:10px}
.atl2.cibles .readpane .cdv{white-space:normal;font-size:14px;line-height:1.45}
.atl2.cibles .readpane .cdrich{max-height:none;overflow:visible;font-size:14px;line-height:1.6}
.atl2.cibles .readpane .cdtxt{font-size:14px;line-height:1.6;color:#0F1D33}
@media (max-width:1000px){
  .atl2.cibles .desk{grid-template-columns:1fr}
  .atl2.cibles .readpane{position:relative;top:auto;max-height:none;
    border-left:0;border-top:1px solid var(--line)}}

.atl2 .rdvcard{max-width:720px;width:min(720px,94vw);max-height:90dvh;overflow:auto}
.atl2 .rdv-unlocks{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0 16px}
.atl2 .rdv-u{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--panel2)}
.atl2 .rdv-u em{display:block;font-style:normal;font-size:12px;font-weight:600;color:var(--brand);margin-bottom:4px}
.atl2 .rdv-u b{display:block;font-size:13px;line-height:1.35;margin-bottom:3px}
.atl2 .rdv-u span{display:block;font-size:12px;line-height:1.45;color:var(--muted)}
.atl2 .rdv-emb{min-height:520px}
@media (max-width:640px){.atl2 .rdv-unlocks{grid-template-columns:1fr}}
/* 📖 sur une ligne : un décryptage éditorial à creuser (clic = dépli) */
.atl2 .nd .rdec{flex:none;font-size:12px;line-height:1;opacity:.85;cursor:help}
.atl2 .edito-go{flex:none;font:inherit;font-size:11.5px;font-weight:650;color:#0E8A44;
  background:#F4FBF6;border:1px solid #BBF7D0;border-radius:6px;padding:5px 9px;
  cursor:pointer;white-space:nowrap}
.atl2 .edito-go:hover{border-color:#12A150}
.atl2 .edito-go[aria-pressed="true"]{background:#12A150;color:#fff;border-color:#12A150}
.atl2.ops .readpane .pane-edito{display:block;width:calc(100% - 32px);
  margin:12px 16px 8px;text-align:left}
.atl2 .zoom-src.zoom-src-art{background:none;border:0;border-bottom:1px solid #BBF7D0;
  padding:0;cursor:pointer;font:inherit}
/* LIGHTBOX des images/cartes du cockpit — clic n'importe où pour fermer */
.atl2 .atl2-lb{position:fixed;inset:0;z-index:90;background:rgba(15,29,51,.72);
  display:grid;place-items:center;padding:24px;cursor:zoom-out}
.atl2 .atl2-lb img{max-width:min(1100px,92vw);max-height:88vh;width:auto;
  border-radius:10px;box-shadow:0 30px 80px rgba(15,29,51,.5)}
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
.atl2 .card .dec em{display:block;font-style:normal;font-size:12px;font-weight:600;color:#0E7F3F;margin-bottom:4px}
.atl2 .card .dec.out{background:#fdf1f1;border-left-color:#C0353A;color:#5c2b2b}
.atl2 .card .dec.out em{color:#C0353A}
.atl2 .card .ceonote{margin:-4px 0 11px;font-size:12px;line-height:1.45;color:#56697e}
.atl2 .card .ceonote i{color:#0F1D33}

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
.atl2 .cslb{font-size:12px;font-weight:600;
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
.atl2 .stglb{font-size:12px;font-weight:600;
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
.atl2 .siml b.ok{color:#0E7F3F}
.atl2 .siml b.ko{color:#C0353A}

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
.atl2 .dsv{flex:none;font-size:12px;font-weight:600;color:#0E7F3F;
  text-align:right}
.atl2 .dsv.out{color:#C0353A}
.atl2 .dsv em{display:block;font-style:normal;font-size:10.5px;font-weight:700;
  color:var(--ink);margin-top:2px}
.atl2 .dspage h3{margin:11px 0 5px;font-size:12px;color:var(--dim);font-weight:600}
.atl2 .dstxt{margin:0 0 6px;font-size:12.5px;line-height:1.55;color:var(--sub);max-width:78ch}
.atl2 .dsgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:3px 18px;margin-top:8px}
.atl2 .dsl{display:flex;align-items:baseline;gap:8px;min-width:0}
.atl2 .dsl span{flex:none;font-size:12px;
  color:var(--dim);min-width:74px;font-weight:600}
.atl2 .dsl b{font-size:12.5px;font-weight:600;color:var(--ink);overflow:hidden;
  text-overflow:ellipsis;white-space:nowrap}
.atl2 .dsb{margin-bottom:7px}
.atl2 .dsb span{display:block;font-size:12px;color:var(--dim);font-weight:600}
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
.atl2 .qak{display:block;font-size:12px;
  color:var(--dim);margin-bottom:2px;font-weight:600}
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
  background:linear-gradient(90deg,#2f9e63,#12A150);transition:width .6s cubic-bezier(.2,.8,.2,1)}
.atl2 .covbar em{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  font-style:normal;font-size:12px;font-weight:600;color:var(--ink);}
.atl2 .covf{display:flex;gap:16px;flex-wrap:wrap;margin:10px 0 2px;padding-top:9px;
  border-top:1px solid var(--line)}
.atl2 .covf span{font-size:12px;color:var(--sub)}
.atl2 .covf b{font-family:var(--mono);font-size:14px;color:var(--ink);margin-right:4px;font-variant-numeric:tabular-nums}
.atl2 .covr{margin-top:12px;padding-top:10px;border-top:1px solid var(--line)}
.atl2 .covrh{display:flex;align-items:baseline;justify-content:space-between;gap:10px;
  font-size:12px;color:var(--dim);font-weight:600}
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
.atl2 .cdnav button{flex:none;font:inherit;font-size:12px;font-weight:600;
  color:var(--sub);background:none;border:0;border-bottom:2px solid transparent;
  padding:7px 12px;cursor:pointer;white-space:nowrap}
.atl2 .cdnav button:hover{color:var(--ink)}
.atl2 .cdnav button.on{color:var(--brand-d);border-bottom-color:var(--brand)}
.atl2 .cdbody{padding:10px 12px}
/* les deux niveaux de verdict, l'un sous l'autre : le crible d'abord, le memo
   ensuite — les ecraser ferait perdre l'etape deja payee */
.atl2 .cdv1{display:flex;align-items:baseline;gap:7px;margin-bottom:5px}
.atl2 .cdv1 b{font-size:12px;font-weight:800;letter-spacing:.04em;color:#0E7F3F}
.atl2 .cdv1.out b{color:#C0353A}
.atl2 .cdv1.memo b{color:var(--ink)}
.atl2 .cdw{font-size:12px;color:var(--dim);font-weight:600}
.atl2 .cdtxt{margin:0 0 8px;font-size:12.5px;line-height:1.5;color:var(--sub)}
.atl2 .cdgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:4px 16px}
.atl2 .cdl{display:flex;align-items:baseline;gap:8px;min-width:0}
.atl2 .cdk{flex:none;font-size:12px;
  color:var(--dim);min-width:78px;font-weight:600}
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
.atl2 .abtn.dgr{background:#C0353A;border-color:#C0353A;color:#fff}
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
.atl2 .fst-t b{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--ink);font-variant-numeric:tabular-nums}
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
  background:#F3FAF6;border:1px solid #CFE9DA;border-left:4px solid #12A150}
.atl2 .since-h{display:flex;align-items:center;gap:8px}
.atl2 .since-h b{flex:1;font-size:12.5px;color:#0E7F3F;font-weight:700}
.atl2 .since .sg-x{background:none;border:0;cursor:pointer;font-size:14px;line-height:1;
  color:#5f8f76;padding:1px 5px;border-radius:5px}
.atl2 .since .sg-x:hover{background:#E7F6EE;color:#0b5c34}
.atl2 .since.mini .since-c{display:none}
.atl2 .since-h .x{background:none;border:0;cursor:pointer;font-size:15px;line-height:1;
  color:var(--muted);padding:0 3px}
.atl2 .since-h .x:hover{color:var(--ink)}
.atl2 .since-c{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px}
.atl2 .since-c button{font:inherit;font-size:11px;font-weight:600;color:#0E7F3F;background:#fff;
  border:1px solid #CFE9DA;border-radius:99px;padding:3px 9px;cursor:pointer}
.atl2 .since-c button:hover{background:#EAF6EF}
.atl2 .since-c button.mr{color:var(--sub);border-color:var(--line);font-weight:500}
.atl2 .since-c .gone{font-size:11px;color:var(--dim);text-decoration:line-through;
  padding:3px 7px}

/* VISITE GUIDÉE — voile + anneau projecteur. Le voile ET le trou tiennent en UN
   seul élément : une ombre portée immense autour du rectangle de la cible. */
.atl2 .tour{position:fixed;inset:0;z-index:200}
.atl2 .tour-veil{position:fixed;inset:0;background:rgba(15,29,51,.62)}
.atl2 .tour-hole{position:fixed;border-radius:10px;pointer-events:none;
  box-shadow:0 0 0 9999px rgba(15,29,51,.62),0 0 0 2px var(--brand) inset;
  transition:left .18s ease,top .18s ease,width .18s ease,height .18s ease}
.atl2 .tour-card{position:fixed;z-index:201;background:var(--panel);border-radius:14px;
  box-shadow:0 18px 46px rgba(15,29,51,.34);padding:15px 20px 14px}
.atl2 .tour-card.fin{width:min(420px,calc(100vw - 32px));text-align:center;padding:26px 24px 20px}
/* le compteur ET sa barre sur la même ligne : on sait où on en est sans lire */
.atl2 .tour-n{display:flex;align-items:center;gap:9px;font-family:var(--mono);font-size:12px;color:var(--dim);margin-bottom:7px;font-weight:600}
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
.atl2 .prof .lo em{display:block;font-style:normal;font-size:12px;font-weight:600;color:#0E7F3F;margin-bottom:4px}
.atl2 .prof .lo .ko em{color:#C0353A}
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
.atl2 .vtag{justify-self:start;font-size:12px;font-weight:600;padding:3px 7px;border-radius:5px;white-space:nowrap;
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
.atl2 .rsp .rsor{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600}
.atl2 .rsp .rstext{width:100%;min-height:72px;overflow:auto;border:1.5px solid var(--line2);
  border-radius:var(--ra);padding:9px 11px;font:inherit;font-size:13px;line-height:1.5;
  color:var(--ink);background:var(--panel);outline:none;resize:vertical}
.atl2 .rsp .rstext:focus{border-color:var(--brand)}
.atl2 .rsp .side{display:flex;flex-direction:column;gap:6px;flex:none;width:210px}
.atl2 .rsp .side .evalbtn{width:100%;white-space:normal;line-height:1.25;padding:0 14px;min-width:0}
.atl2 .rsp .hint{font-family:var(--mono);font-size:12px;
  color:var(--dim);text-align:center;font-weight:600}
.atl2 .demand.rs-mode .evalbtn{white-space:nowrap;padding:0 14px;min-width:0}
.atl2 .viewbtn{flex:none;height:42px;padding:0 12px;background:#fff;color:var(--ink);
  border:1.5px solid var(--line2);border-radius:var(--ra);font:inherit;font-weight:650;
  font-size:13px;cursor:pointer;white-space:nowrap;gap:7px}
.atl2 .viewbtn:hover{border-color:var(--ink)}
.atl2 .viewbtn.on{border-color:#12A150;color:#0E8A44;background:#F4FBF6}
.atl2 .viewbtn.off{opacity:.45;pointer-events:none;cursor:default}
.atl2 a.viewbtn{display:inline-flex;align-items:center;text-decoration:none}
.atl2 .viewbtn.sm{padding:0 10px;font-size:12.5px;gap:5px}
.atl2 .viewbtn.searching{
  opacity:1;pointer-events:none;cursor:wait;position:relative;overflow:hidden;
  color:#0E8A44;border-color:#86EFAC;background:#E7F6EE}
.atl2 .viewbtn.searching .sitespin{
  width:11px;height:11px;border:1.6px solid #BBF7D0;border-top-color:#12A150;
  border-radius:50%;flex:none;animation:pp-sitespin .65s linear infinite}
.atl2 .viewbtn.searching::after{
  content:'';position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(90deg,transparent,rgba(18,161,80,.18),transparent);
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
  background:linear-gradient(90deg,transparent,rgba(18,161,80,.18),transparent);
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
  padding:8px 12px;background:#fff;color:#0E8A44;border:1.5px solid #BBF7D0;
  border-radius:10px;font:inherit;font-size:13.5px;font-weight:700;text-decoration:none;
  width:fit-content;max-width:100%}
.atl2.ops .zoom-ext:hover{background:#F4FBF6;border-color:#12A150}
.atl2.ops .zoom-ext em{font-style:normal;font-weight:500;font-size:11.5px;color:#4B5E78;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:18ch}

.atl2 .rserr{margin-top:8px;padding:8px 11px;border-radius:var(--ra);font-size:12px;
  line-height:1.45;color:#9f1239;background:#FDECEC;border:1px solid #FECACA}

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
.atl2 .rscard .rstags em{font-style:normal;font-family:var(--mono);font-size:12px;color:var(--dim);margin-right:2px;font-weight:600}
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
.atl2 .rscard .rsmm figcaption{margin-top:4px;font-family:var(--mono);font-size:12px;color:var(--dim);text-align:center;font-weight:600}
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
.atl2 .rslink.fail{color:#9f1239;border-color:#FECACA;background:#FDECEC}

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
.atl2 .rsrow-h .ch{font-family:var(--mono);font-size:12px;color:var(--dim);border:1px solid var(--line2);
  border-radius:4px;padding:1px 5px;font-weight:600}
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
.atl2 .rsarch-row .st,.atl2 .rsarch-sub .st{flex:none;font-family:var(--mono);font-size:12px;color:var(--dim);
  border:1px solid var(--line2);border-radius:4px;padding:1px 6px;font-weight:600}
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
.atl2 .rsdet .rstags em{font-style:normal;font-family:var(--mono);font-size:12px;color:var(--dim);margin-right:2px;font-weight:600}
.atl2 .rsdet .rstags span{font-size:10.5px;font-weight:700;color:var(--muted);
  background:var(--panel3);border:1px solid var(--line);border-radius:5px;padding:2px 7px}
.atl2 .rsdet .rsbody{display:flex;gap:12px;padding:9px 11px}
.atl2 .rsdet .rsmm{flex:none;width:44%;max-width:340px;margin:0}
.atl2 .rsdet .rsmm img{width:100%;display:block;border:1px solid var(--line);border-radius:6px;
  background:#fff}
.atl2 .rsdet .rsmm figcaption{margin-top:4px;font-family:var(--mono);font-size:12px;color:var(--dim);text-align:center;font-weight:600}
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
  border:1px solid #E3E8F0;border-bottom:0;border-radius:10px 10px 0 0}
.atl2 .list.opsl .row.open + .card,
.atl2 .list.opsl .card{background:#fff;border:1px solid #E3E8F0;
  border-top:0;border-radius:0 0 10px 10px;margin-bottom:12px;
  box-shadow:0 1px 2px rgba(15,29,51,.04)}
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
.atl2 .sortsel span{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600}
.atl2 .sortsel select{font:inherit;font-size:11.5px;border:1px solid var(--line);
  border-radius:6px;padding:4px 6px;background:#fff;color:var(--ink)}
/* ── LIGNE (16/08 : « le déplié de tout à l'heure avec les bords arrondis
   et l'arrière-plan gris, c'était vraiment bien ») : la nappe grise commune,
   CHAQUE ligne devient un bloc blanc arrondi — pliée ou ouverte — et l'air
   sépare. Les en-têtes de groupe flottent sur la nappe. */
.atl2 .list.ligne{background:#F5F7FA;padding:6px 28px 32px}
@media (max-width:760px){.atl2 .list.ligne{padding:4px 12px 20px}}
.atl2 .list.ligne .row{margin-top:10px;background:#fff;
  border:1px solid #E3E8F0;border-radius:10px;
  box-shadow:0 1px 2px rgba(15,29,51,.04)}
.atl2 .list.ligne .row.open{border-radius:10px 10px 0 0;border-bottom:0;
  box-shadow:none;margin-top:12px}
.atl2 .list.ligne .card{background:#fff;border:1px solid #E3E8F0;
  border-top:0;border-radius:0 0 10px 10px;margin-bottom:2px;
  box-shadow:0 1px 2px rgba(15,29,51,.04)}
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
  background:linear-gradient(90deg,#EEF2F6 25%,#E3E8F0 45%,#EEF2F6 65%);
  background-size:200% 100%;border-radius:6px;animation:lws 1.4s linear infinite}
@keyframes lwmap{0%,100%{opacity:1}50%{opacity:.55}}
/* L'ESSENTIEL DU JOUR de la thèse — même grammaire que l'intro /actualites :
   libellé mono, puces légères, pleine largeur. */
.atl2 .thesis-lead{padding:14px 16px 4px;background:var(--panel)}
.atl2 .thesis-lead .tlk{display:block;font-family:var(--mono);font-size:12px;
  font-weight:600;color:var(--dim);
  margin:0 0 7px}
.atl2 .thesis-lead ul{margin:0;padding:0;list-style:none}
.atl2 .thesis-lead li{position:relative;padding-left:16px;margin:0 0 5px;
  font-size:13.5px;line-height:1.6;color:#46566B}
.atl2 .thesis-lead li::before{content:'·';position:absolute;left:4px;top:-1px;
  color:#8FA0B8;font-weight:700}
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
  border-bottom:1px solid var(--line,#E3E8F0);box-shadow:0 1px 0 var(--line,#E3E8F0);
  pointer-events:none}
.atl2.ops .grp-pin .ic{width:24px;height:24px;border-radius:var(--r,6px);background:var(--ink);
  color:#fff;display:grid;place-items:center;font-size:12px;flex:none}
.atl2.ops .grp-pin .t{font-weight:700;font-size:13px}
.atl2.ops .grp-pin .s{font-family:var(--mono);font-size:12px;color:var(--muted);font-weight:600}
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
.atl2 .chainhint{font-style:normal;font-size:12px;line-height:1.2;color:var(--muted);max-width:22ch;text-align:right;font-weight:600}
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
.atl2 .idmain .el{position:static!important;font-family:var(--mono);font-size:12px;color:var(--dim);white-space:nowrap;
  overflow:visible;width:auto;height:auto;clip:auto;flex:none;font-weight:600}
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
.atl2 .fstats .fst-per{flex:none;min-width:132px;font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600}
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
.atl2 .sigstrip .sg-chip b{font-size:12px;color:#C0353A;font-weight:800;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:150px}
.atl2 .sigstrip .sg-chip i{font-style:normal;font-size:11px;color:#C0353A;opacity:.82;
  font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.atl2 .sigstrip .sg-chip em{font-style:normal;font-size:10px;color:#9a6a63;white-space:nowrap}
.atl2 .sigstrip .sg-more{font:inherit;font-size:11.5px;font-weight:800;color:#C0353A;
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
  box-shadow:0 6px 18px rgba(15,29,51,.16)}
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
  box-shadow:0 10px 26px rgba(15,29,51,.16)}
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
.atl2 .qoffre.late{border-color:var(--red);background:#FDECEC}
.atl2 .qoffre .ol{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600}
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
.atl2 .qwhen{font-family:var(--mono);font-size:12px;color:var(--dim);white-space:nowrap;font-weight:600}
.atl2 .qwhen.soon{color:var(--brand);font-weight:700}
.atl2 .qfresh{font-size:12px;font-family:var(--mono);color:#12A150;background:#E7F6EE;border-radius:999px;
  padding:1px 6px;white-space:nowrap;font-weight:600}
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
.atl2 .covcalc > summary::after{content:' ▾';color:#4B5E78;font-weight:500}
.atl2 .covcalc[open] > summary::after{content:' ▴'}
.atl2 .covcalc h3{margin:0 0 8px;font-size:13px;font-weight:800;color:var(--ink);
  letter-spacing:-.01em}
/* ── LE TABLEAU REPRIS (27/08 : « le tableau d'où vient ce chiffre est toujours
   horrible … rends-le propre, aéré, lisible avec une belle police, et retire
   le background du haut du tableau qui marche pas »).
   POURQUOI LE BANDEAU NE MARCHAIT PAS — mesuré, pas supposé : 'thead th'
   posait color:#fff sur un fond #16233A, mais '.cc', '.cn' et '.cs'
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
  font-family:var(--body);font-size:12px;font-weight:600;text-align:left;white-space:nowrap;
  color:#4B5E78;border-bottom:1.5px solid var(--line2)}
.atl2 .covcalc thead th.mkc,
.atl2 .covcalc thead th.mkn,
.atl2 .covcalc thead th.mks{color:#4B5E78;font-family:var(--body);font-size:10.5px;
  font-weight:700}
.atl2 .covcalc thead th.mkn{text-align:right}
.atl2 .covcalc th:first-child,.atl2 .covcalc td:first-child{padding-left:2px}
.atl2 .covcalc th:last-child,.atl2 .covcalc td:last-child{padding-right:2px}
/* de l'air : une ligne de tableau à 8 px de haut se lit comme un mur */
.atl2 .covcalc td{padding:12px;border-bottom:1px solid var(--line);
  vertical-align:baseline;line-height:1.5;background:none}
.atl2 .covcalc td.mkc{font-family:var(--mono);font-size:12px;font-weight:600;
  letter-spacing:.01em;color:var(--ink);white-space:nowrap;font-variant-numeric:tabular-nums}
.atl2 .covcalc td.mkn{text-align:right;font-family:var(--body);font-size:14px;
  font-weight:700;color:var(--ink);width:96px;font-variant-numeric:tabular-nums;
  font-feature-settings:'tnum' 1}
.atl2 .covcalc td.mks{font-size:12.5px;color:#4B5E78}
.atl2 .covcalc td.mks span{display:block}
.atl2 .covcalc td.mks em{display:block;font-style:normal;color:#8FA0B8;
  font-size:11.5px;line-height:1.45;margin-top:3px}
/* une ligne à zéro reste lisible : elle pâlit, elle ne s'efface pas */
.atl2 .covcalc tr.zero td.mkc,.atl2 .covcalc tr.zero td.mkn{color:#8FA0B8}
.atl2 .covcalc tr.zero td.mks{color:#8FA0B8}
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
  box-shadow:0 2px 10px rgba(15,29,51,.06)}
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
  background:linear-gradient(90deg,#EEF2F6 25%,#E3E8F0 45%,#EEF2F6 65%);
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
  font:inherit;font-family:var(--mono);font-size:12px;color:#4B5E78;background:#F5F7FA;
  border:1px solid var(--line);border-radius:5px;padding:3px 7px;font-weight:600}
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
  box-shadow:0 14px 34px -18px rgba(15,29,51,.55)}
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
  background:#E7F6EE;border:0;border-bottom:1px solid #BBF7D0;border-left:0}
.atl2 .since .sg-h{display:flex;align-items:baseline;gap:9px;flex-wrap:wrap}
.atl2 .since .t{font-size:13.5px;font-weight:700;color:#0E7F3F}
.atl2 .since .s{font-size:12.5px;color:#3F8F68}
.atl2 .since .sg-sp{flex:1}
.atl2 .since .sg-c{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.atl2 .since .sg-chip{display:inline-flex;align-items:baseline;gap:6px;
  padding:5px 10px;border:1px solid #86D4A8;border-radius:11px;background:#fff;
  font:inherit;cursor:pointer;text-align:left;max-width:340px}
.atl2 .since .sg-chip:hover{border-color:#12A150}
.atl2 .since .sg-chip b{font-size:12px;color:#0E7F3F;font-weight:800;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:220px}
.atl2 .since .sg-more{font:inherit;font-size:11.5px;font-weight:800;color:#0E7F3F;
  background:#fff;border:1px solid #86D4A8;border-radius:999px;padding:5px 11px;cursor:pointer}
.atl2 .since .sg-x{background:none;border:0;cursor:pointer;font-size:14px;line-height:1;
  color:#5f8f76;padding:1px 5px;border-radius:5px}
.atl2 .since .sg-x:hover{background:#E7F6EE;color:#0b5c34}
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
.atl2 .pstat .pstep{font-family:var(--mono);font-size:12px;color:var(--dim);border:1px solid var(--line);
  border-radius:999px;padding:2px 8px;font-weight:600}
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
.atl2 .modal .qsec.todo{color:#96690E}
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
  flex:none;display:inline-block;font-size:12px;
  color:var(--stt,#fff)!important;background:var(--stc,var(--ink));
  padding:3px 8px;margin-right:0;border-radius:var(--rs);line-height:1.2;font-weight:600}
.atl2 .tuto .tbody{flex:1 1 14em;min-width:0;white-space:normal}
.atl2 .tuto .tprim{flex:none;align-self:center}
.atl2 .tuto.on-dark .tprim{background:#fff;color:var(--ink)}
.atl2 .tuto.on-dark .tprim:hover{filter:brightness(.96)}
.atl2 .step .l{font-size:12px;font-weight:600}

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
    box-shadow:0 1px 0 var(--line,#E3E8F0)}
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
    box-shadow:0 16px 40px rgba(15,29,51,.28)}
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
.atl2 .winpick-k{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--dim)}
.atl2 .winpick-v{font-weight:650}
.atl2 .winpick-btn b{font-family:var(--mono);font-size:11px;color:var(--dim)}
.atl2 .winpick-btn i{font-style:normal;font-size:9px;color:var(--dim)}
.atl2 .winpick-pop{position:absolute;z-index:80;top:calc(100% + 5px);left:0;
  display:flex;flex-direction:column;gap:2px;min-width:180px;padding:4px;
  background:#fff;border:1px solid var(--line);border-radius:8px;
  box-shadow:0 14px 34px -18px rgba(15,29,51,.55)}
.atl2 .winpick-pop button{display:flex;align-items:center;justify-content:space-between;
  gap:16px;width:100%;text-align:left;background:none;border:0;border-radius:5px;
  padding:8px 10px;font:inherit;font-size:12.5px;cursor:pointer;color:var(--ink)}
.atl2 .winpick-pop button:hover{background:#F5F7FA}
.atl2 .winpick-pop button[aria-selected="true"]{background:#E7F6EE;color:#0E8A44;font-weight:650}
.atl2 .winpick-pop .n{font-family:var(--mono);font-size:11px;color:var(--dim)}
.atl2 .listhead .conts + .conts{display:none}

/* Menu continent compact — carte repliée. Même grammaire que « Tout ▾ ». */
.atl2 .contpick{position:relative;display:inline-flex;align-items:center;gap:10px;flex:none}
.atl2 .contpick > .mapbtn{flex:none;font-size:12px;font-weight:600;border:1px solid var(--line);color:var(--ink)}
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
  box-shadow:0 14px 34px -18px rgba(15,29,51,.55)}
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
  box-shadow:0 10px 28px rgba(15,29,51,.14)}
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
.atl2 .livestrip:hover{border-color:#12A150}
.atl2 .ls-ico{font-size:14px}
.atl2 .ls-lab{font-size:12px;font-weight:600;
  color:#0E7F3F}
.atl2 .ls-chip{display:inline-flex;align-items:center;gap:8px;background:#fff;
  border:1px solid #C9D6E6;border-radius:999px;padding:5px 12px;font-size:12px;
  font-weight:600;color:#0F1D33}
.atl2 .ls-chip b{font-weight:800}
.atl2 .ls-chip.err{border-color:#f2c9c6;color:#C0353A}
.atl2 .ls-chip.done{border-color:#bfe3cf;background:#f2fbf6;color:#0E7F3F}
.atl2 .ls-more{font-size:11px;font-weight:800;color:#56697e}
.atl2 .ls-go{margin-left:auto;font-size:12px;font-weight:800;color:#0E7F3F}
.atl2 .runtrack{display:inline-flex;flex-direction:column;gap:3px;min-width:140px}
.atl2 .runchrono{font-size:10.5px;font-weight:700;color:#43536a;white-space:nowrap}
.atl2 .runbar{display:block;width:100%;height:6px;border-radius:999px;background:#e6ecf3;
  overflow:hidden}
.atl2 .runbar i{display:block;height:100%;border-radius:999px;
  background:linear-gradient(90deg,#7cc7ff,#2563eb);transition:width 1s linear}
.atl2 .runbar i.ind{width:35%;animation:runind 1.3s ease-in-out infinite alternate}
@keyframes runind{from{margin-left:0}to{margin-left:65%}}
.atl2 .runerr{font-size:11px;font-weight:700;color:#C0353A}
/* L'étape réelle du mémo (carnet memo-live-notes) — sous le chrono,
   clipée : une phrase de pipeline ne doit pas déformer la ligne. */
.atl2 .runnote{display:block;max-width:340px;overflow:hidden;text-overflow:ellipsis;
  white-space:nowrap;font-size:10.5px;color:#4B5E78;line-height:1.3}
.atl2 .livestrip .runnote{max-width:230px}
.atl2 .rundone{font-size:12px;font-weight:800;color:#0E7F3F}
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
    height:36px;margin:0;padding:3px;border:0;border-bottom:1px solid var(--line,#E3E8F0);
    background:#F5F7FA;top:calc(var(--pp-gap,48px) + var(--pp-live-h,44px))}
  body.pp-desk .atl2.ops .chrome-tog button{
    flex:1;min-width:0;margin:0;padding:0 6px;border:0;border-radius:6px;
    background:transparent;color:#4B5E78;font:inherit;font-size:12px;font-weight:650;
    cursor:pointer}
  body.pp-desk .atl2.ops .chrome-tog button[aria-selected="true"]{
    background:#fff;color:#16233A;box-shadow:0 1px 2px rgba(15,29,51,.12)}
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
  font-size:12.5px;line-height:1.5;color:#4B5E78}
.atl2 .modal .qwait.qwrow{padding:12px 2px}
.atl2 .modal .qwait .qwd{flex:none;width:8px;height:8px;border-radius:50%;
  background:var(--brand);animation:lwp 1.2s ease-in-out infinite}
@media (prefers-reduced-motion:reduce){.atl2 .modal .qwait .qwd{animation:none}}

/* ── L'ÉTAT DE L'ENREGISTREMENT DES SECTIONS (27/08) : discret, à côté du titre,
   il devient vert une fois écrit. Sans lui, cocher une case ne produisait aucun
   signe à l'écran. */
.atl2 .modal .qsec .secsave{margin-left:10px;font-size:12px;font-weight:600;color:#8FA0B8;vertical-align:middle}
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
  border:1px solid rgba(15,29,51,.10);border-radius:12px;
  box-shadow:0 10px 32px rgba(15,29,51,.10)}
.atl2.cibles .map-pulse{position:absolute;z-index:4;left:12px;top:12px;
  width:min(220px,28%);text-align:left;padding:14px 16px 12px;
  background:rgba(255,255,255,.93);backdrop-filter:blur(12px);
  border:1px solid rgba(15,29,51,.10);border-radius:12px;
  box-shadow:0 10px 32px rgba(15,29,51,.10);cursor:pointer;font:inherit;color:inherit}
.atl2.cibles .map-pulse:hover{border-color:rgba(18,161,80,.45)}
.atl2.cibles .map-pulse em{display:block;font-style:normal;font-family:var(--mono);
  font-size:12px;font-weight:600;
  color:#12A150;margin:0 0 6px}
.atl2.cibles .map-pulse b{font-size:32px;font-weight:800;letter-spacing:-.04em;
  line-height:1;color:var(--ink)}
.atl2.cibles .map-pulse>span{display:block;font-family:var(--mono);font-size:12px;color:#8FA0B8;margin:4px 0 10px;font-weight:600}
.atl2.cibles .map-pulse ul{list-style:none;margin:0;padding:0;display:flex;
  flex-direction:column;gap:5px}
.atl2.cibles .map-pulse li{font-size:12.5px;color:#0F1D33;line-height:1.35}
/* Le périmètre de la ligne « retenues » — discret mais présent : l'encadré
   compte le fonds entier, le tunnel d'à côté le seul continent ouvert. */
.atl2.cibles .map-pulse li .cpscope,.atl2.ops .map-pulse li .cpscope{
  font-style:normal;font-family:var(--mono);font-size:12px;color:#8FA0B8;margin-left:5px;font-weight:600}
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
  font-family:var(--mono);font-size:9.5px;color:#8FA0B8;min-width:20px;
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
.atl2.cibles .desk-list .row.fav:hover,.atl2.cibles .desk-list .row.fav.on{background:#FFF3D6}

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
.atl2.cibles .desk-list .rsd{font:inherit;font-size:12px;font-weight:600;padding:4px 11px;border-radius:7px;cursor:pointer;
  border:1px solid transparent;line-height:1.2}
.atl2.cibles .desk-list .rsd.yes{background:#12A150;border-color:#12A150;color:#fff}
.atl2.cibles .desk-list .rsd.yes:hover{background:#0E8A44}
.atl2.cibles .desk-list .rsd.no{background:#fff;border-color:#F5C6C8;color:#C0353A}
.atl2.cibles .desk-list .rsd.no:hover{background:#FDECEC}
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
.atl2.cibles .desk-list .rsel:hover{border-color:#8FA0B8}
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
.atl2.cibles .desk-list .rsel:hover{border-color:#8FA0B8;box-shadow:0 1px 4px rgba(15,29,51,.10)}
.atl2.cibles .desk-list .rsel:focus-visible{outline:2px solid #12A150;outline-offset:1px}
.atl2.cibles .desk-list .rsel.rs-off{color:#4B5E78;font-weight:600}
.atl2.cibles .desk-list .rsel.rs-ret{background-color:#F1FAF4;border-color:#BBE7CC;color:#0E8A44}
.atl2.cibles .desk-list .rsel.rs-ana{background-color:#F1F6FE;border-color:#BFD8F9;color:#1E5FCC}
.atl2.cibles .desk-list .rsel.rs-tra{background-color:#FFF8EB;border-color:#F5DFAE;color:#92600A}
.atl2.cibles .desk-list .rsel.rs-val{background-color:#12A150;border-color:#12A150;color:#fff}
.atl2.cibles .desk-list .rsel.rs-eca{background-color:#FDF3F3;border-color:#F3C6C6;color:#C0353A}

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
  box-shadow:0 10px 28px rgba(15,29,51,.16)}
.atl2.cibles .desk-list .rsopt{display:flex;align-items:center;gap:8px;width:100%;
  border:0;background:none;border-radius:7px;padding:7px 9px;font:inherit;
  font-size:12px;font-weight:600;color:var(--ink);cursor:pointer;text-align:left}
.atl2.cibles .desk-list .rsopt:hover{background:#F5F7FA}
.atl2.cibles .desk-list .rsopt.on{background:#EFF8F2;color:#0E8A44;font-weight:750}
.atl2.cibles .desk-list .rsopt.busy{opacity:.5;cursor:default}
.atl2.cibles .desk-list .rsopt .pt2{width:8px;height:8px;border-radius:50%;flex:none}

`,Gs=`
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
.atl2 .se-st{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600}
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
  border:1px solid var(--line2);border-radius:9px;box-shadow:0 10px 28px rgba(15,29,51,.16);
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
/* LES COLONNES (30/08) : société · site · ce qu'elle fait · état · ⚡ · ×.
   Une grille, pas un flex : les colonnes s'alignent d'une ligne à l'autre —
   sans quoi « un vrai dossier » n'est qu'une suite de bouts collés. */
.atl2 .eq-row,.atl2 .eq-head{display:grid;align-items:center;gap:10px;
  grid-template-columns:minmax(150px,200px) minmax(120px,190px) minmax(0,1fr) 92px 26px 20px}
.atl2 .eq-head{padding:0 0 2px;font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600}
.atl2 .eq-row.r-kept{background:rgba(18,161,80,.05);border-radius:7px}
.atl2 .eq-row.r-out{background:rgba(229,72,77,.04);border-radius:7px}
.atl2 .eq-desc{min-width:0;font-size:11.5px;line-height:1.35;color:var(--muted);
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.atl2 .eq-desc i{font-style:normal;color:var(--dim)}
.atl2 .eq-desc em{font-style:normal;color:var(--dim);font-size:10.5px}
.atl2 .eq-go{border:1px solid var(--line);background:#fff;border-radius:7px;cursor:pointer;
  font-size:12px;line-height:1;padding:4px 6px}
.atl2 .eq-go:hover:not(:disabled){border-color:var(--brand);background:var(--brand-l)}
.atl2 .eq-go:disabled{opacity:.3;cursor:default}
/* LE PAVÉ DE DROITE (30/08 : « le texte apparaît sous le tableau ») : il vit
   dans une colonne de 180 px et sa phrase, en une seule ligne mono, sortait du
   cadre. Elle s'enroule et s'aligne à gauche, comme un texte. */
/* ⚠️ SPÉCIFICITÉ : styles.gen.ts pose « .atl2 .bulk .side .hint{white-space:nowrap} »
   — QUATRE classes. Une règle en trois classes ne la bat pas, même écrite plus
   loin (mesuré : whiteSpace restait nowrap, scrollWidth 391 pour 210 px de
   colonne, la phrase sortait du cadre). On monte à cinq. */
.atl2 .bulk.evalq .side{width:190px;flex:none}
.atl2 .bulk.evalq .side .hint{white-space:normal;text-align:left;line-height:1.5;font-size:12px;font-weight:600}
/* 💡 SUGGESTIONS — les jumelles des retenues, déjà criblées. */
.atl2 .eq-sugg{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-top:8px;
  padding-top:9px;border-top:1px dashed var(--line)}
.atl2 .eq-sugg-go{font:inherit;font-size:11.5px;font-weight:700;padding:5px 12px;
  border:1px solid var(--brand);border-radius:999px;background:var(--brand-l);
  color:var(--brand-d);cursor:pointer}
.atl2 .eq-sugg-go:disabled{opacity:.55;cursor:default}
.atl2 .eq-sugg-go2{font:inherit;font-size:11.5px;font-weight:650;padding:5px 11px;
  border:1px solid var(--line2);border-radius:999px;background:#fff;
  color:var(--ink);cursor:pointer}
.atl2 .eq-sugg-go2:disabled{opacity:.5;cursor:default}
/* La saisie libre : un mot porteur, ou un code NAF. Elle prend la place qui
   reste sur la ligne sans jamais la faire deborder. */
.atl2 .eq-sugg-in{font:inherit;font-size:11.5px;padding:5px 11px;flex:1 1 190px;
  min-width:150px;max-width:320px;border:1px solid var(--line2);
  border-radius:999px;background:#fff;color:var(--ink)}
.atl2 .eq-sugg-in:focus{outline:none;border-color:var(--brand)}
.atl2 .eq-sugg-note{font-size:10.5px;color:var(--dim)}
.atl2 .eq-sugg-q{font-size:10.5px;color:var(--bolt);font-weight:650}
.atl2 .eq-sc{display:inline-flex;align-items:center;gap:5px;padding:3px 4px 3px 10px;
  border:1px solid var(--line2);border-radius:999px;font-size:11.5px;background:#fff}
.atl2 .eq-sc.ok{border-color:var(--brand);background:var(--brand-l)}
.atl2 .eq-sc i{font-style:normal;color:var(--brand-d);font-weight:800}
.atl2 .eq-sc button{border:0;background:var(--ink);color:#fff;width:18px;height:18px;
  border-radius:50%;cursor:pointer;font-size:12px;line-height:1;padding:0}
.atl2 .eq-sc button:hover{background:var(--brand-d)}
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
.atl2 .eq-st{flex:none;font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600}
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
.atl2 .dockbtn.news.on{background:#0F1D33;color:#fff;border-color:#0F1D33}

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
.atl2.cibles .listhead .lh-title .dot{display:inline;color:#8FA0B8}
.atl2.cibles .listhead .lh-title .ctx{display:inline-flex;align-items:center;
  gap:6px;flex-wrap:wrap;font-size:13px;color:#4B5E78;min-width:0}
.atl2.cibles .listhead .lh-title .ctx .fpuce{font-size:12px}

/* la pastille sombre du compte — cerclee de la couleur de l'etape active,
   identique a celle du chevron selectionne : le lien tunnel → liste. */
.atl2.cibles .listhead .lh-title .main .tn{display:inline-flex;align-items:center;
  justify-content:center;min-width:30px;height:24px;padding:0 9px;
  border-radius:999px;background:#16233A;color:#fff;font-size:13.5px;
  font-weight:800;box-shadow:0 0 0 2.5px color-mix(in srgb, var(--c) 78%, #4B5E78)}

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
.atl2.cibles .listhead .off[aria-selected="true"] .n{background:#16233A;
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
  border-radius:11px;box-shadow:0 10px 28px rgba(15,29,51,.16)}
.atl2.cibles .lh-funnel .sortopt{display:flex;align-items:center;
  justify-content:space-between;gap:10px;width:100%;border:0;background:none;
  border-radius:7px;padding:7px 9px;font:inherit;font-size:12px;
  font-weight:600;color:var(--ink);cursor:pointer;text-align:left}
.atl2.cibles .lh-funnel .sortopt:hover{background:#F5F7FA}
.atl2.cibles .lh-funnel .sortopt.on{background:#EFF8F2;color:#0E8A44;font-weight:750}
.atl2.cibles .lh-funnel .sortopt i{font-style:normal;font-weight:800;min-width:12px}
@media (max-width:860px){
  /* la bande funnel defile en x et ROGNE en y (overflow-y:hidden) : un menu
     absolu y est invisible — meme piege que .fpanel, monte hors de la barre.
     position:fixed echappe au rognage (aucun ancetre transforme ici). */
  .atl2.cibles .lh-funnel .sortmenu{position:fixed;top:auto;bottom:14px;
    left:14px;right:14px;z-index:400;box-shadow:0 -6px 30px rgba(15,29,51,.25)}
}

/* ═══ LE MÉMO DANS LA FICHE (29/08) — onglets Évaluation / Conviction / Mémo ═══
   La conviction rend ses <b> en têtes de rubrique (Angle / Market / Timing…),
   et l'onglet Mémo accueille les sections RÉELLES de la page publiée : en-tête
   score+tags, table des matières, sections avec images/tables/barres de score
   re-stylées à l'échelle de la fiche. Bloc AUTONOME, tardif = il gagne la
   cascade à spécificité égale. */
.atl2 .convrich b{display:block;font-size:12px;font-weight:600;color:var(--dim);margin:14px 0 3px}
.atl2 .convrich b:first-child{margin-top:0}
.atl2 .memodoc{margin-top:6px}
.atl2 .md-head{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:2px 0 8px}
.atl2 .md-score{font-size:13px;font-weight:800;padding:3px 10px;border-radius:999px;
  background:#EEF3FB;color:#1E5FCC;font-variant-numeric:tabular-nums}
.atl2 .md-score.md-green{background:#E8F5EE;color:#0E7F3F}
.atl2 .md-score.md-amber,.atl2 .md-score.md-orange{background:#FDF6E7;color:#92600A}
.atl2 .md-score.md-red{background:#FDF3F3;color:#C0353A}
.atl2 .md-tag{font-size:12px;font-weight:600;
  color:var(--dim);border:1px solid var(--line);border-radius:999px;padding:2px 8px;
  background:var(--panel2)}
.atl2 .md-tagline{width:100%;margin:2px 0 0;font-size:12px;line-height:1.45;color:var(--dim)}
/* la table des matières COLLE en haut pendant qu'on parcourt le mémo (30/08).
   Dans le popup elle colle au conteneur défilant (top:0) ; dans le panneau,
   c'est la page qui défile → décalage sous l'en-tête du site. */
/* L'OFFSET DÉPEND DU CONTENEUR QUI DÉFILE, pas du composant : par défaut la
   liste (.list overflow-y:auto du proto) → top:0 ; sur /cibles c'est la PAGE
   qui défile (.desk-list .list{overflow:visible}) → sous l'en-tête du site ;
   le popup défile dans sa propre fiche → top:0. */
.atl2 .md-toc{display:flex;flex-wrap:wrap;gap:4px;margin:0 0 4px;padding:8px;
  border:1px solid var(--line);border-radius:var(--r);background:var(--panel2);
  position:sticky;top:0;z-index:8;box-shadow:0 4px 10px rgba(15,29,51,.06)}
.atl2.cibles .md-toc{top:calc(var(--pp-gap,60px) + 8px)}
.atl2.cibles .readpane .md-toc{top:calc(var(--pp-gap,60px) + 50px + var(--demand-h,0px))}
.atl2.cibles .pop .md-toc{top:0}
.atl2 .md-jump{font:inherit;font-size:11px;font-weight:650;color:var(--brand-d);
  background:var(--panel);border:1px solid var(--line);border-radius:999px;
  padding:3px 9px;cursor:pointer;white-space:nowrap}
.atl2 .md-jump:hover{border-color:var(--brand)}
.atl2 .md-grp-h{font-size:12px;font-weight:600;
  color:var(--dim);margin:16px 0 0;padding-top:10px;border-top:2px solid var(--ink)}
.atl2 .md-sec{padding:10px 0 2px;scroll-margin-top:70px;position:relative}
.atl2 .md-sec + .md-sec{border-top:1px solid var(--line)}
.atl2 .md-h{margin:0 0 6px;font-size:13.5px;font-weight:750;letter-spacing:-.01em;
  color:var(--ink)}
.atl2 .md-more{margin:2px 0 8px}
.atl2 .md-body{font-size:12.5px;line-height:1.6;color:#0F1D33;overflow-wrap:anywhere;
  max-width:72ch}
.atl2 .md-body p{margin:0 0 8px}
.atl2 .md-body ul,.atl2 .md-body ol{margin:0 0 8px;padding-left:18px}
.atl2 .md-body img{max-width:100%;height:auto;display:block;margin:8px 0;
  border:1px solid var(--line);border-radius:8px;background:#fff}
.atl2 .md-body h3{margin:14px 0 4px;font-size:13px;font-weight:750;color:var(--ink)}
.atl2 .md-body h4,.atl2 .md-body .kicker{margin:12px 0 3px;font-size:12px;font-weight:600;color:var(--dim)}
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
.atl2 .md-body .sr-green .sr-fill{background:#0E7F3F}
.atl2 .md-body .sr-amber .sr-fill{background:#B07D1A}
.atl2 .md-body .sr-red .sr-fill{background:#C0353A}
.atl2 .md-body .sr-val{flex:none;font-weight:700;font-variant-numeric:tabular-nums}
.atl2 .md-body .sr-note,.atl2 .md-body .sr-sub{flex:none;color:var(--dim);font-size:10px}
.atl2 .md-body .metric-row{display:flex;justify-content:space-between;gap:10px;
  font-size:11.5px;margin:2px 0}
.atl2 .md-body .swot-grid{display:grid;grid-template-columns:1fr;gap:8px;margin:8px 0}
.atl2 .md-body .swot-item{border:1px solid var(--line);border-left-width:3px;
  border-radius:8px;padding:8px 10px}
.atl2 .md-body .swot-item h3{margin:0 0 4px;font-size:12px}
.atl2 .md-body .s-green{border-left-color:#0E7F3F}
.atl2 .md-body .s-red{border-left-color:#C0353A}
.atl2 .md-body .s-blue{border-left-color:#1E5FCC}
.atl2 .md-body .s-amber{border-left-color:#B07D1A}
.atl2 .md-body .angle-deep-dive{border-left:3px solid var(--brand);
  padding:2px 0 2px 10px;margin:10px 0}
.atl2 .md-body .conv-badge{display:inline-block;font-size:12px;font-weight:600;border:1px solid var(--line);
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
/* -- LOT CONNECTEURS (30/08) -------------------------------------------------
   La bascule d'envoi automatique : le rail de la V1 (cb-notif-sw, 40x22,
   vert 0f6e3f a l'allumage) porte au cockpit. Un interrupteur doit se lire
   allume/eteint d'un coup d'oeil, sans lire le texte a cote. */
/* la rangee d'envoi porte desormais QUATRE controles (onglet, destination,
   campagne, apercu) : .mfield est un flex SANS retour a la ligne (proto) —
   sans ceci le bouton Apercu sortait de la modale (revue 30/08). */
.atl2 .mfield{flex-wrap:wrap}
.atl2 .mfield input[type=text]{min-width:150px;flex:1 1 150px}

/* les liens du contact sur la ligne : discrets au repos, ils s'allument au
   survol de la ligne — presents sans encombrer. */
.atl2.cibles .desk-list .row .rlnk{display:inline-flex;align-items:center;gap:7px;
  flex:none;margin-left:6px;opacity:.7;transition:opacity .12s}
.atl2.cibles .desk-list .row:hover .rlnk,
.atl2.cibles .desk-list .row.sel .rlnk{opacity:1}
/* sans survol (tactile), les liens restent PLEINEMENT lisibles : a .35 ils
   etaient sous le contraste minimal sur toutes les lignes sauf une. */
@media (hover:none){.atl2.cibles .desk-list .row .rlnk{opacity:1}}
.atl2.cibles .desk-list .row .rlnk a{font-size:11px;line-height:1;color:var(--muted);
  text-decoration:none;font-weight:700}
.atl2.cibles .desk-list .row .rlnk a:hover{color:var(--brand-d,#0A6B3D)}

/* l'etat vide qui DIT pourquoi, et la mention du lien prive. */
.atl2 .void .voidb{margin:8px 0 0;font-size:12.5px;color:var(--muted)}
.atl2 .privnote{margin:14px 14px 0;font-size:11.5px;color:var(--dim);text-align:center}

/* ⚙ l'interrupteur d'un moteur POUR CE FONDS : il se lit d'un coup d'oeil,
   comme en V1 (vert = actif ici, rouge = coupe, ambre = eteint globalement). */
.atl2 .se-sw{font:inherit;font-size:10px;font-weight:800;letter-spacing:.02em;
  border-radius:999px;padding:3px 9px;cursor:pointer;margin-left:auto;flex:none;
  background:#FDEAEC;color:#B0344A;border:1px solid #F5C2C7}
.atl2 .se-sw.on{background:#E7F7EE;color:#1A7F46;border-color:#B7E4C7}
.atl2 .se-sw.dead{background:#FEF3C7;color:#92400E;border-color:#FDE68A;
  cursor:not-allowed}
.atl2 .se-sw:disabled{opacity:.55}
.atl2 .se-bod{margin-top:8px;align-self:flex-start;font:inherit;font-size:11.5px;
  font-weight:800;color:#fff;background:#0F1F33;border:1px solid #0F1F33;
  border-radius:8px;padding:6px 12px;cursor:pointer}
.atl2 .se-bod:disabled{opacity:.55;cursor:default}

/* le nom d'une societe du drilldown moteur MENE a sa carte (V1) : il doit se
   voir cliquable, sinon personne n'essaie. */
.atl2 .se-jump{border:0;background:none;padding:0;font:inherit;font-size:inherit;
  font-weight:700;color:var(--brand-d,#0A6B3D);cursor:pointer;text-align:left;
  text-decoration:underline;text-decoration-style:dotted;text-underline-offset:2px}
.atl2 .se-jump:hover{text-decoration-style:solid}
/* le conteneur garde un max-height:250px plus haut dans la feuille : poser la
   hauteur sur le seul <ul> creait DEUX ascenseurs imbriques et n'ouvrait rien
   (revue 30/08). On ouvre la boite, et le ul defile seul. */
.atl2 .se-ovl{max-height:min(56vh,520px);overflow:hidden;display:flex;
  flex-direction:column}
.atl2 .se-ovl ul{flex:1 1 auto;min-height:0;overflow-y:auto;margin:0}
.atl2 .se-more{margin:6px 0 0;font-size:11px;color:var(--dim);flex:none}

/* 🎯 « vous jugez, il apprend » + 🧠 les propositions de correction : deux
   encadres qui PROPOSENT — jamais un ecran qui applique tout seul. */
.atl2 .avisp{margin:12px 0;padding:11px 13px;border:1px solid #F5DFAE;
  border-radius:10px;background:#FFF8EB}
.atl2 .avisp .mnote{margin:0 0 5px}
.atl2 .avisa{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:8px}
.atl2 .propc{margin:10px 0 0;padding:11px 13px;border:1px solid var(--line);
  border-radius:10px;background:var(--panel)}
.atl2 .props{display:inline-block;font-family:var(--mono);font-size:12px;color:var(--brand-d,#0E8A44);
  background:#EFF8F2;border-radius:999px;padding:3px 9px;margin-bottom:6px;font-weight:600}
/* .atl2 .rule p (0-2-1) battait .atl2 .propt (0-2-0) — la carte vit DANS
   .rule : on remonte la specificite au lieu de renommer. */
.atl2 .rule .propc p.propt{margin:0 0 5px;font-size:13.5px;font-weight:700;
  line-height:1.45;color:var(--ink)}
.atl2 .propc .mnote{margin:0 0 4px}

/* ✉ L'OVERLAY D'APPROCHE — canaux, jours, champs. La barre du haut est la
   navigation : le canal a gauche, les quatre touches a droite. */
.atl2 .apnav{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:8px}
.atl2 .apnav .sp{flex:1 1 auto}
.atl2 .apch,.atl2 .apday{font:inherit;font-size:11.5px;font-weight:650;
  border:1px solid var(--line);background:var(--panel);color:var(--ink);
  border-radius:999px;padding:5px 12px;cursor:pointer}
.atl2 .apch:hover,.atl2 .apday:hover{border-color:#8FA0B8}
.atl2 .apch.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.atl2 .apday.on{background:#EFF8F2;border-color:#BBE7CC;color:#0E8A44}
.atl2 .apday i{font-style:normal;margin-left:5px;color:#B25E09}
.atl2 .apfield{display:flex;flex-direction:column;gap:4px;margin:8px 0}
.atl2 .apfield label{font-family:var(--mono);font-size:12px;color:var(--dim);font-weight:600}
.atl2 .apfield input,.atl2 .apta{font:inherit;font-size:13px;line-height:1.55;
  padding:9px 11px;border:1px solid var(--line);border-radius:9px;
  background:var(--panel);color:var(--ink);width:100%}
.atl2 .apta{resize:vertical;white-space:pre-wrap;margin-top:4px}
.atl2 .apfield input:focus-visible,.atl2 .apta:focus-visible{outline:2px solid var(--brand);outline-offset:1px}
.atl2 .apacts{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin:9px 0 4px}
.atl2 .apacts a.abtn{text-decoration:none;display:inline-flex;align-items:center}
.atl2 .apedit{font-size:11px;color:#B25E09;font-weight:650}

/* 📝 LE CARNET DE SUIVI d'un deal, dans la fiche — un fil de notes datees,
   replie par defaut (la lecture ne part qu'au depliage). */
.atl2 .dnotes{margin-top:10px;border-top:1px solid var(--line);padding-top:9px}
.atl2 .dn-h{display:flex;align-items:center;gap:8px;width:100%;border:0;
  background:none;padding:0;font:inherit;font-size:12.5px;color:var(--ink);
  cursor:pointer;text-align:left}
.atl2 .dn-h i{font-style:normal;color:var(--dim);margin-left:auto}
.atl2 .dn-n{font-size:11px;font-weight:650;color:var(--brand-d,#0E8A44);
  background:#EFF8F2;border-radius:999px;padding:2px 8px}
.atl2 .dn-b{margin-top:8px;display:flex;flex-direction:column;gap:8px}
.atl2 .dn-b .mnote{margin:0}
.atl2 .dn-e{border-left:2px solid var(--line);padding:2px 0 2px 10px}
.atl2 .dn-d{font-family:var(--mono);font-size:12px;
  color:var(--dim);font-weight:600}
.atl2 .dn-t{margin:3px 0 0;font-size:12.5px;line-height:1.55;color:var(--ink);
  /* pre-wrap SEUL laisse un mot insecable (une URL collee) sortir de la fiche,
     dont l'ancetre .cdtabs est en overflow:hidden : il etait coupe net. */
  white-space:pre-wrap;overflow-wrap:anywhere}
.atl2 .dn-a{display:flex;gap:10px;margin-top:4px}
.atl2 .dn-a .lk{font-size:11px}
.atl2 .dn-new{display:flex;gap:8px;align-items:flex-end}
.atl2 .dnotes textarea{flex:1 1 auto;width:100%;font:inherit;font-size:12.5px;
  line-height:1.5;padding:7px 9px;border:1px solid var(--line);border-radius:8px;
  background:var(--panel);color:var(--ink);resize:vertical}
.atl2 .dnotes textarea:focus-visible{outline:2px solid var(--brand);outline-offset:1px}

/* la pastille de couleur des options de la facette CRIBLE — reprise des
   .cb-fdot de la V1 : un verdict se reconnait a sa couleur avant son mot. */
.atl2 .fpanel .opt .l .fdot{display:inline-block;width:8px;height:8px;
  border-radius:50%;margin-right:6px;vertical-align:middle;flex:none}

/* 🔥 le lead chaud sur la ligne (engagement >= 20) — meme gabarit que le
   marqueur des nouvelles, il se lit sans elargir la ligne. */
.atl2.cibles .desk-list .row .rhot{flex:none;margin-right:5px;font-size:11px;
  line-height:1;cursor:help}

.atl2 .plugauto{margin:14px 0 4px;padding-top:12px;border-top:1px dashed var(--line)}
.atl2 .plugauto .mnote{margin:0 0 4px}
.atl2 .apsw{display:inline-flex;align-items:center;gap:9px;margin-top:8px;
  border:0;background:none;padding:0;font:inherit;font-size:12.5px;
  font-weight:650;color:var(--ink);cursor:pointer;text-align:left}
.atl2 .apsw .apr{width:40px;height:22px;border-radius:22px;background:#C9D6E4;
  position:relative;flex:none;transition:background .15s}
.atl2 .apsw .apr::after{content:"";position:absolute;top:2px;left:2px;
  width:18px;height:18px;border-radius:50%;background:#fff;transition:left .15s;
  box-shadow:0 1px 2px rgba(15,29,51,.25)}
.atl2 .apsw.on .apr{background:#0E7F3F}
.atl2 .apsw.on .apr::after{left:20px}
.atl2 .apsw:disabled{opacity:.55;cursor:default}
.atl2 .apsw:focus-visible{outline:2px solid var(--brand);outline-offset:3px;border-radius:6px}

/* La recette CRM et « et dans votre CRM ? » : deux encadres, l'un neutre
   (le mode d'emploi), l'autre vert (ce que le dirigeant y gagne) — la V1
   les separait deja ainsi, et le retour CEO disait « la ligne Pipedrive est
   collee » : ils doivent respirer. */
.atl2 .plugcrm,.atl2 .plugcrmq{margin:14px 0 4px;padding:11px 12px;
  border:1px solid var(--line);border-radius:10px;background:var(--panel)}
.atl2 .plugcrmq{border-color:#DBE7E0;background:#F4FAF6}
.atl2 .plugcrm .mnote,.atl2 .plugcrmq .mnote{margin:0 0 6px}
.atl2 .plugcrm .mnote:last-child,.atl2 .plugcrmq .mnote:last-child{margin-bottom:0}
.atl2 .plugcrmq .mnote b{color:#0E7F3F}
.atl2 .plugcrm .plugex,.atl2 .plugcrmq .plugex{margin:8px 0 0}
/* ═════════════════════════════════════════════════════════════════════════
   RESTYLE v3 — dernier bloc du fichier, donc le dernier mot (css = PROTO +
   OVERRIDES). Deux choses vivent ici :
     · les règles de composant du handoff (chips, boutons, focus, modales) ;
     · les RATTRAPAGES de la passe mécanique. Elle a remonté tous les
       micro-libellés à 12px sans savoir lesquels vivaient dans une boîte
       mesurée — trois d'entre eux n'y rentrent pas, et c'est ici qu'on le dit.
   ═════════════════════════════════════════════════════════════════════════ */

/* ── ① Les trois boîtes mesurées ─────────────────────────────────────────── */

/* LE TUNNEL. Cinq chevrons se partagent 440px et chacun perd 37px de rabat :
   il reste ~51px de texte. À 12px, « Détectées » devenait « Déte… ». On rend
   de la place (rabat 25→20px, base 440→520px) et on pose 11px : lisible, et
   entier. La casse normale vient de Funnel.tsx (le .toUpperCase() est parti). */
.atl2 .chain2{flex:1 1 520px}
.atl2 .step{padding:7px 10px 7px 20px}
.atl2 .step:first-child{padding-left:12px}
.atl2 .step .l{font-size:11px;font-weight:600;opacity:1}
.atl2 .step:not([aria-selected="true"]) .l{color:var(--pp-ink-3)}
/* L'ETAPE ACTIVE doit se voir. Le handoff la veut « vert plein » ; mais la
   couleur du chevron porte deja une information — la rampe p0→p4 dit la
   maturite, et l'ecraser en vert ferait mentir les cinq etapes. On garde donc
   la rampe et on ajoute ce qui manquait vraiment : un liseré vert et l'ombre
   portée. L'étape choisie se lit du premier coup, la rampe survit. */
.atl2 .step[aria-selected="true"]{box-shadow:inset 0 0 0 2px var(--pp-green),
  0 2px 10px rgba(18,161,80,.30)}
.atl2 .step[aria-selected="true"] .l{color:var(--pp-green-tx);font-weight:700}
.atl2 .step[aria-selected="true"] .n{color:var(--pp-ink)}
.atl2 .off .l{font-size:11px;font-weight:600}

/* L'EN-TÊTE DE COLONNES n'est pas un libellé de page : c'est une étiquette de
   tableau, prise dans des pistes de 86 et 80px. On garde la règle du handoff
   (600, #8FA0B8, fond #F9FBFD) et on descend à 11px avec une coupe propre —
   le README interdit qu'un libellé déborde autant qu'il interdit la capitale. */
.atl2 .cols{background:var(--pp-bg-zone)}
.atl2 .cols>*{font-size:11px;font-weight:600;color:var(--pp-ink-4);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

/* LES AXES DU RADAR sont posés dans un viewBox SVG : leur taille est une
   COORDONNÉE, pas une typographie. À 12px ils chevauchaient le polygone. */
.atl2 .radar .axl{font-size:5.4px;font-weight:500}

/* ── ② Le chasse-fixe là où il porte du sens ─────────────────────────────── */
/* Le handoff bannit le monospace sur les LIBELLÉS. Il reste juste là où l'on
   relit caractère par caractère : la zone où l'on colle des URL, et le bout de
   code de « Connecter à vos outils ». */
.atl2 .bulk textarea{font-family:var(--pp-mono);font-size:12.5px;line-height:1.6}
.atl2 .modal .cpy code{font-family:var(--pp-mono)}

/* ── ③ Chips : TOUJOURS la même hauteur ──────────────────────────────────── */
/* C'est la règle qui fait qu'une rangée de chips forme une ligne, et pas une
   vague. box-sizing compris : sans lui, la bordure ajoute 2px à certaines. */
.atl2 .fpuce,.atl2 .acqchip,.atl2 .sig,.atl2 .dockbtn{
  height:28px;box-sizing:border-box;display:inline-flex;align-items:center;
  gap:7px;border-radius:var(--pp-r-pill);padding:0 12px;
  font-size:12px;font-weight:600;line-height:1;white-space:nowrap}
.atl2 .sig{background:var(--pp-red);color:#fff;border:0}
.atl2 .acqchip{background:var(--pp-bg-page);border:1px solid var(--pp-line);color:var(--pp-ink)}
.atl2 .fpuce{background:var(--pp-green-chip);border:1px solid var(--pp-green-bd);color:var(--pp-green-tx)}

/* ── ④ Aucun libellé de bouton ne se coupe sur deux lignes ───────────────── */
.atl2 button,.atl2 .cbtn,.atl2 .tool,.atl2 .dockbtn,.atl2 .dens button{white-space:nowrap}

/* ── ⑤ Le débordement horizontal ne s'annonce pas ────────────────────────── */
/* La liste déborde en largeur sur petit écran ; elle ne doit pas afficher de
   barre. Le cockpit en dessinait une de 11px (règle du proto) : on la
   REMPLACE ici, on ne l'empile pas. Le défilement vertical, lui, reste visible. */
.atl2 .list,.atl2 .desk-list{scrollbar-width:none;-ms-overflow-style:none}
.atl2 .list::-webkit-scrollbar:horizontal,
.atl2 .desk-list::-webkit-scrollbar:horizontal{display:none;height:0}

/* ── ⑥ Focus vert, et jamais un rectangle DANS un champ ──────────────────── */
/* C'est le conteneur en pilule qui réagit, pas l'input : sinon on voit deux
   cadres imbriqués. */
.atl2 :focus{outline:none}
.atl2 :focus-visible{outline:2px solid var(--pp-green);outline-offset:2px}
.atl2 input:focus,.atl2 textarea:focus,.atl2 select:focus{outline:none}
.atl2 .bulk:focus-within,.atl2 .srch:focus-within,.atl2 .pill:focus-within{
  border-color:var(--pp-green-soft);box-shadow:0 0 0 4px rgba(18,161,80,.14)}
.atl2 .bulk,.atl2 .srch,.atl2 .pill{transition:border-color .18s,box-shadow .18s}

/* ── ⑦ Modales ───────────────────────────────────────────────────────────── */
.atl2 .modal{background:rgba(15,29,51,.45);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}
.atl2 .modal .mcard{border-radius:var(--pp-r-xl);max-height:86vh;
  box-shadow:var(--pp-sh-modal)}

/* ── ⑧ La barre d'outils collante ────────────────────────────────────────── */
/* Elle était déjà collante et déjà sur plusieurs rangées (ordres 1→5 côté
   /cibles, deux rangées explicites côté /actualites carte repliée) : ce qui
   manquait, c'est qu'elle laisse DEVINER ce qui passe dessous. Surface à 96%
   + flou, comme la maquette — sinon, en descendant, on ne sait plus si la
   liste défile ou si la barre a sauté. */
.atl2 .listhead{background:rgba(255,255,255,.96);
  -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);
  border-bottom:1px solid var(--pp-line)}
/* Le bouton d'action de la barre tombe à l'aplomb de la colonne Action de la
   liste : c'est ce qui fait lire les deux comme une seule grille. */
.atl2 .listhead .lh-acts{margin-left:auto}

/* ── ⑨ Le clignotement d'une ligne qu'on vient de désigner ───────────────── */
/* Rien à écrire ici : le geste du handoff (clic dans le fil → la ligne défile
   et clignote) EXISTE déjà, et mieux que décrit. la classe .row.flashrow
   (styles.ts, 2,2 s, liseré vert intérieur) est posé par EvalBar après une
   évaluation, et pp-echo par DossierList quand le ticker donne le focus —
   avec un recalage en deux passes qui remet la ligne sous le chrome collant,
   ce qu'un scrollIntoView seul ne sait pas faire. On ne réécrit pas. */

/* ── ⑩ L'enrichissement d'une ligne saisie ───────────────────────────────── */
/* Les pastilles que Stan devine (domaine, pays, secteur) apparaissent au lieu
   de surgir : 3px de montée, 280ms. Assez pour dire « ça vient de moi ». */
@keyframes atl2-enrichIn{
  from{opacity:0;transform:translateY(3px)}
  to{opacity:1;transform:none}
}
.atl2 [data-enrich]{animation:atl2-enrichIn .28s ease-out both}
.atl2 .enrichpill{display:inline-flex;align-items:center;height:22px;box-sizing:border-box;
  border-radius:var(--pp-r-pill);padding:0 9px;font-size:11.5px;font-weight:600;
  white-space:nowrap;background:var(--pp-bg-page);border:1px solid var(--pp-line);
  color:var(--pp-ink-3)}

/* ── ⑪ Points de rupture ─────────────────────────────────────────────────── */
/* Les valeurs du handoff, posées sur les classes qui existent — pas sur des
   attributs data-r, qui sont le procédé interne des maquettes. */
@media (max-width:1080px){
  /* le panneau de lecture passe SOUS la liste au lieu de la comprimer */
  .atl2 .stage{flex-direction:column}
  .atl2 .readpane,.atl2 .fiche{order:2;width:100%;max-width:none}
}
@media (max-width:860px){
  .atl2 .listhead{padding-left:14px;padding-right:14px}
  .atl2 .app>.ident,.atl2 .app>.eval-stick{padding-left:14px;padding-right:14px}
  .atl2 .mapzone{min-height:300px}
  .atl2 .fpanel{display:none}          /* les filtres passent par le rabat */
  .atl2 .cols .c-crible,.atl2 .row .c-crible,
  .atl2 .cols .c-vue,.atl2 .row .c-vue{display:none}
  .atl2 .kpi{flex:1 1 100%;min-width:0}
}

/* ── ⑫ Un seul niveau d'accent vert par zone ─────────────────────────────── */
/* Le vert souligne l'action ; il ne remplit pas les fonds. Les surfaces qui le
   prenaient en aplat sans porter d'action repassent en teinte. */
.atl2 .step:not([aria-selected="true"]){background:var(--pp-line-in);color:var(--pp-ink-3)}

`,Ys=`
/* ═══════════════════════════════════════════════════════════════════════════
   COCKPIT v3 — LE CALQUE FINAL
   Source : data/design_handoff_proplace_v3/Cockpit.html, lue trait pour trait.

   Le passage précédent avait repeint les JETONS (vert, encre, filets, police)
   mais laissé la MISE EN PAGE d'avant : bandeaux pleine largeur collés bord à
   bord, aucune marge, aucun cadre. Résultat : les bonnes couleurs sur la
   mauvaise architecture.

   Ce que la maquette impose, et qui n'existait nulle part :
     · 28 px de marge à gauche ET à droite, sur TOUTE section ;
     · chaque bloc est une CARTE — filet 1 px, rayon 10-14 px, fond blanc —
       et non un bandeau qui touche les bords ;
     · les indicateurs du haut sont TROIS cartes cliquables, pas trois phrases
       posées sur une ligne ;
     · les continents sont des pastilles à compteur, pas des onglets soulignés ;
     · la liste et le panneau de lecture sont DEUX cartes séparées par 24 px,
       pas deux colonnes soudées par un filet.

   Ordre : ce bloc est le DERNIER concaténé (voir export css en bas de fichier).
   À spécificité égale, c'est lui qui gagne — d'où l'absence quasi totale de
   !important : il n'en porte que là où le code d'avant en portait déjà.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── ① LE RYTHME DE PAGE ─────────────────────────────────────────────────── */
/* Une seule variable de marge, lue par toutes les sections. La maquette la
   met à 28 px, et à 14 px sous 860 px : deux valeurs, un seul endroit. */
.atl2.cibles{--v3-pad:28px;--v3-gap:16px}
@media (max-width:860px){.atl2.cibles{--v3-pad:14px}}
.atl2.cibles .app{background:var(--pp-bg)}

/* ── ② L'EN-TÊTE : carré d'initiales, titre, actions ─────────────────────── */
.atl2.cibles .ident{background:transparent;border-bottom:0;
  padding:20px var(--v3-pad) 0}
.atl2.cibles .idtop{display:flex;align-items:center;gap:14px;flex-wrap:wrap;
  margin-bottom:16px}
/* le carré marine : 36 px, rayon 9, initiales centrées */
.atl2.cibles .idtop .brand{display:flex;align-items:center;gap:12px;min-width:0;
  flex:0 1 auto}
.atl2.cibles .idtop .brand b{width:36px;height:36px;flex:none;border-radius:9px;
  background:var(--pp-navy);color:#fff;display:grid;place-items:center;
  font-weight:700;font-size:15px;letter-spacing:0}
.atl2.cibles .idtop .brand i{font-style:normal;font-size:12px;font-weight:600;
  color:var(--pp-ink-4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  letter-spacing:0;text-transform:none}
.atl2.cibles .idtop h1{margin:0;font-size:clamp(17px,2.1vw,22px);line-height:1.25;
  font-weight:700;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;
  text-overflow:ellipsis;min-width:0;flex:0 1 auto}
.atl2.cibles .idtop .idsp{flex:1 1 auto}
.atl2.cibles .idtop .idupd{font-size:12px;color:var(--pp-ink-4);white-space:nowrap}
/* les ronds « ? » et « ▶ » : 28 px, filet, rien de plein */
.atl2.cibles .ident .ic{width:28px;height:28px;flex:none;display:grid;
  place-items:center;border:1px solid var(--pp-line);border-radius:50%;
  background:transparent;color:var(--pp-ink-4);font-size:12px;line-height:1;
  cursor:pointer;padding:0}
.atl2.cibles .ident .ic:hover:not(:disabled){border-color:var(--pp-green-soft);
  color:var(--pp-green-tx)}
.atl2.cibles .ident .ic:disabled{opacity:.4;cursor:default}

/* ── ③ LES INDICATEURS, EN CARTES ────────────────────────────────────────── */
/* Avant : des phrases alignées sur une ligne, sans cadre — on ne voyait pas
   qu'elles étaient cliquables. La maquette en fait des cartes à filet, qui
   s'éclairent au survol. */
.atl2.cibles .idmain{display:flex;flex-wrap:wrap;align-items:stretch;gap:12px;
  padding:0 0 16px;min-width:0}
.atl2.cibles .idmain>.cover,
.atl2.cibles .idmain>.engine{display:flex;align-items:center;gap:14px;
  box-sizing:border-box;border:1px solid var(--pp-line);border-radius:10px;
  padding:12px 16px;background:var(--pp-bg);cursor:pointer;
  transition:border-color .16s ease,background .16s ease}
.atl2.cibles .idmain>.cover:hover,
.atl2.cibles .idmain>.engine:hover{border-color:var(--pp-line-strong);
  background:var(--pp-bg-hover)}
.atl2.cibles .idmain>.cover{flex:2 1 320px;min-width:280px}
.atl2.cibles .idmain>.engine{flex:1.4 1 260px;min-width:240px}
/* le libellé de carte : 12 px, 600, encre faible — la règle du handoff */
.atl2.cibles .idmain .el{font-size:12px;font-weight:600;color:var(--pp-ink-4);
  white-space:nowrap;letter-spacing:0;text-transform:none}
.atl2.cibles .idmain .ev{display:flex;align-items:center;gap:8px;font-size:13px;
  color:var(--pp-ink-3);white-space:nowrap}
.atl2.cibles .idmain .ev b{font-size:15px;font-weight:700;color:var(--pp-ink)}
.atl2.cibles .idmain .ev strong{color:var(--pp-ink);font-weight:700}
/* la jauge de couverture : 6 px, pleine largeur restante */
.atl2.cibles .idmain .bar{flex:1 1 auto;height:6px;min-width:80px;border-radius:999px;
  background:#EAF0F6;position:relative;overflow:hidden}
.atl2.cibles .idmain .bar i{position:absolute;inset:0 auto 0 0;border-radius:999px;
  background:var(--pp-green)}
.atl2.cibles .idmain .edv{display:none}
/* « en pause » : pastille ambre, hauteur de chip */
.atl2.cibles .idmain .epause{display:inline-flex;align-items:center;height:22px;
  box-sizing:border-box;background:var(--pp-amber-bg);color:var(--pp-amber-tx);
  font-size:11px;font-weight:700;border-radius:999px;padding:0 10px;
  white-space:nowrap;letter-spacing:0;text-transform:none}
.atl2.cibles .idmain .ego{font-size:13px;color:var(--pp-ink-3);white-space:nowrap}
.atl2.cibles .idmain .ebell{border:0;background:none;cursor:pointer;font-size:13px;
  line-height:1;padding:0 2px}
/* LA TROISIÈME CARTE : la file. Elle sortait du module « moteur de mémos »,
   qui portait trois idées dans une boîte prévue pour une. */
.atl2.cibles .idmain>.filec{display:flex;align-items:center;gap:14px;
  box-sizing:border-box;flex:1 1 200px;min-width:190px;
  border:1px solid var(--pp-line);border-radius:10px;padding:12px 16px;
  background:var(--pp-bg);cursor:pointer;
  transition:border-color .16s ease,background .16s ease}
.atl2.cibles .idmain>.filec:hover{border-color:var(--pp-line-strong);
  background:var(--pp-bg-hover)}
.atl2.cibles .idmain>.idsp{display:none}

/* le groupe d'icônes et la recherche vivent dans la LIGNE DE TITRE — c'est là
   que la maquette les met, à droite de l'horodatage. */
.atl2.cibles .idtop .icgrp{display:flex;align-items:center;gap:6px;flex:none}
.atl2.cibles .idtop .isrch{display:inline-flex;align-items:center;gap:7px;flex:none;
  height:34px;box-sizing:border-box;border:1px solid var(--pp-line);
  border-radius:var(--pp-r-s);padding:0 12px;background:var(--pp-bg-page);
  font-size:13px;color:var(--pp-ink-4);
  transition:border-color .18s ease,box-shadow .18s ease,background .18s ease}
.atl2.cibles .idtop .isrch:focus-within{border-color:var(--pp-green-soft);
  box-shadow:0 0 0 4px rgba(18,161,80,.14);background:var(--pp-bg)}
.atl2.cibles .idtop .isrch input{width:180px;max-width:28vw;border:0;
  background:transparent;font:inherit;font-size:13px;color:var(--pp-ink);
  outline:none;padding:0}

/* ── ④ LES CONTINENTS : pastilles à compteur ─────────────────────────────── */
/* Avant : des onglets soulignés d'un trait de 2,5 px, en typographie
   condensée. La maquette en fait des pastilles rayon 8 px — l'active en
   marine plein, son compteur en pastille translucide. */
.atl2.cibles .fzone{background:transparent}
.atl2.cibles .fzone>.conts{display:flex;align-items:center;gap:4px;row-gap:8px;
  flex-wrap:wrap;overflow:visible;background:transparent;border-bottom:0;
  padding:0 var(--v3-pad) 12px}
.atl2.cibles .conts .cbtn{display:inline-flex;align-items:center;gap:8px;
  border:0;border-bottom:0;background:transparent;color:var(--pp-ink-3);
  padding:7px 14px;border-radius:var(--pp-r-s);font-size:13px;font-weight:600;
  letter-spacing:0;text-transform:none;cursor:pointer;white-space:nowrap}
.atl2.cibles .conts .cbtn:hover{background:var(--pp-bg-page);color:var(--pp-ink)}
.atl2.cibles .conts .cbtn[aria-selected="true"]{background:var(--pp-navy);color:#fff;
  border-bottom-color:transparent}
.atl2.cibles .conts .cbtn .n{font-family:var(--pp-body);font-size:11px;font-weight:700;
  background:#EAF0F6;color:var(--pp-ink-3);border-radius:999px;padding:1px 8px;
  letter-spacing:0}
.atl2.cibles .conts .cbtn[aria-selected="true"] .n{background:rgba(255,255,255,.16);
  color:#fff}
.atl2.cibles .conts .side{margin-left:auto;align-self:center}
.atl2.cibles .conts .side button{font-size:12px;font-weight:600;color:var(--pp-ink-3);
  background:none;border:0;cursor:pointer;white-space:nowrap;padding:0}
.atl2.cibles .conts .side button:hover{color:var(--pp-green-tx)}

/* ── ⑤ LA CARTE : une section encadrée, deux panneaux flottants ──────────── */
/* ⚠️ PIÈGE MESURÉ, DEUX FOIS. La coque des pages /cibles — servie par Python,
   donc invisible depuis ce fichier — impose :
       .atl2 .stage{height:auto!important;min-height:0!important;
                    max-height:none!important;overflow:visible!important}
   Aucune hauteur posée ICI ne peut gagner : le !important d'une autre feuille
   bat n'importe quelle spécificité. Ma première tentative posait height:440px
   sur .stage et sortait le planisphère du flux (position:absolute) : la
   section s'est écrasée à 2 px — les deux filets — et la carte a disparu de
   la page en production.
   La bonne prise est le PLANISPHÈRE : il reste dans le flux et porte la
   hauteur ; la section s'y ajuste toute seule, ce que la coque veut. Les deux
   panneaux, eux, flottent par-dessus. */
.atl2.cibles .stage:not(.folded){position:relative;display:block!important;
  margin:0 var(--v3-pad);border:1px solid var(--pp-line);
  border-radius:var(--pp-r-m);background:#F2F6FA}
.atl2.cibles .stage:not(.folded) .mapzone{position:relative;inset:auto;
  width:auto;height:auto;min-height:440px;background:transparent;
  border-radius:var(--pp-r-m);overflow:hidden}
@media (max-width:860px){
  .atl2.cibles .stage:not(.folded) .mapzone{min-height:300px}}
/* la carte de couverture, en haut à gauche */
.atl2.cibles .stage:not(.folded) .map-pulse{position:absolute;left:20px;top:20px;z-index:6;
  width:230px;box-sizing:border-box;background:var(--pp-bg);
  border:1px solid var(--pp-line);border-radius:var(--pp-r-m);padding:16px 18px;
  box-shadow:0 8px 24px rgba(15,29,51,.08);text-align:left;cursor:pointer}
.atl2.cibles .stage:not(.folded) .map-pulse em{display:block;font-style:normal;font-size:12px;
  font-weight:600;color:var(--pp-green-tx);letter-spacing:0;text-transform:none}
.atl2.cibles .stage:not(.folded) .map-pulse b{display:block;margin:6px 0 0;font-size:38px;
  font-weight:700;line-height:1;letter-spacing:-.02em;color:var(--pp-ink)}
.atl2.cibles .stage:not(.folded) .map-pulse>span{display:block;margin:4px 0 12px;font-size:12px;
  font-weight:600;color:var(--pp-ink-4)}
.atl2.cibles .stage:not(.folded) .map-pulse ul{margin:0;padding:10px 0 0;list-style:none;
  border-top:1px solid #EAF0F6;font-size:13px;color:var(--pp-ink-3)}
@media (max-width:860px){
  .atl2.cibles .stage:not(.folded) .map-pulse{left:14px;top:14px;width:190px;padding:12px 14px}
  .atl2.cibles .stage:not(.folded) .map-pulse b{font-size:28px}
}
/* le panneau de filtres, en haut à droite */
.atl2.cibles .stage:not(.folded) .fbar{position:absolute;right:20px;top:20px;bottom:20px;
  z-index:6;width:330px;box-sizing:border-box;background:var(--pp-bg);
  border:1px solid var(--pp-line);border-radius:var(--pp-r-m);padding:16px;
  display:flex;flex-direction:column;gap:10px;overflow:hidden;
  box-shadow:0 8px 24px rgba(15,29,51,.08)}
@media (max-width:1080px){.atl2.cibles .stage:not(.folded) .fbar{display:none}}
.atl2.cibles .fbar .seg{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.atl2.cibles .fbar .seg button{display:flex;justify-content:space-between;
  align-items:center;gap:8px;box-sizing:border-box;padding:8px 12px;
  border:1px solid var(--pp-line);border-radius:var(--pp-r-s);background:var(--pp-bg);
  font:inherit;font-size:12.5px;font-weight:600;color:var(--pp-ink);cursor:pointer;
  white-space:nowrap}
.atl2.cibles .fbar .seg button[aria-pressed="true"],
.atl2.cibles .fbar .seg button.on{background:var(--pp-navy);color:#fff;
  border-color:var(--pp-navy)}
.atl2.cibles .fbar .fsrch{display:flex;align-items:center;gap:8px;box-sizing:border-box;
  border:1px solid var(--pp-line);border-radius:var(--pp-r-s);padding:0 12px;
  height:38px;background:var(--pp-bg-page);
  transition:border-color .18s ease,box-shadow .18s ease,background .18s ease}
.atl2.cibles .fbar .fsrch:focus-within{border-color:var(--pp-green-soft);
  box-shadow:0 0 0 4px rgba(18,161,80,.14);background:var(--pp-bg)}
.atl2.cibles .fbar .fsrch input{flex:1;min-width:0;border:0;background:transparent;
  font:inherit;font-size:13px;outline:none;color:var(--pp-ink)}
.atl2.cibles .fbar .facets{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.atl2.cibles .fbar .fbtn{display:flex;justify-content:space-between;align-items:center;
  gap:8px;box-sizing:border-box;height:auto;padding:9px 12px;
  border:1px solid var(--pp-line);border-radius:var(--pp-r-s);background:var(--pp-bg);
  font:inherit;font-size:13px;font-weight:600;color:var(--pp-ink);cursor:pointer;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.atl2.cibles .fbar .fbtn:hover{border-color:var(--pp-line-strong)}
/* « Signal actif » traverse les deux colonnes : c'est un état, pas une facette */
.atl2.cibles .fbar .fbtn.fsig{grid-column:1/-1;border-color:var(--pp-red-bd);
  background:var(--pp-red-bg);color:var(--pp-red-tx);border-radius:999px;
  justify-content:flex-start;gap:8px;font-size:12.5px}
.atl2.cibles .fbar .frow2{margin-top:auto}
.atl2.cibles .fbar .alertbtn{width:100%;box-sizing:border-box;font:inherit;
  font-weight:600;font-size:13px;background:var(--pp-green);color:#fff;border:0;
  border-radius:var(--pp-r-s);padding:11px;cursor:pointer}
.atl2.cibles .fbar .alertbtn:hover{background:var(--pp-green-h)}

/* Sous 1000 px la maquette n'a plus de panneaux flottants : les deux cartes
   redeviennent des blocs empilés, et le planisphère reprend sa place dans le
   flux. Sans ça, un panneau de 360 px recouvrirait toute la carte. */
@media (max-width:1000px){
  .atl2.cibles .stage:not(.folded){display:flex!important;flex-direction:column;
    background:var(--pp-bg)}
  .atl2.cibles .stage:not(.folded) .mapzone{min-height:280px;border-radius:0}
  .atl2.cibles .stage:not(.folded) .map-pulse{position:static;width:auto;
    box-shadow:none;border:0;border-bottom:1px solid var(--pp-line-in);
    border-radius:0}
}

/* ── ⑤ bis LA CARTE REPLIÉE : le rabat des filtres ───────────────────────── */
/* Quand on replie la carte, la maquette ne laisse pas un trou : une barre
   compacte reprend la recherche, les six facettes, le signal et la fenêtre —
   tout en pilules de 32 px, sur une ligne qui passe à la ligne. */
.atl2.cibles .stage.folded{display:flex;align-items:center;gap:8px;flex-wrap:wrap;
  margin:0 var(--v3-pad);padding:12px 16px;height:auto;min-height:0;
  border:1px solid var(--pp-line);border-radius:var(--pp-r-m);
  background:var(--pp-bg)}
.atl2.cibles .stage.folded .map-pulse{display:none}
.atl2.cibles .stage.folded .fbar{position:static;width:auto;flex:1 1 auto;
  min-width:0;border:0;padding:0;background:transparent;box-shadow:none;
  backdrop-filter:none;-webkit-backdrop-filter:none;border-radius:0;
  flex-direction:row;flex-wrap:wrap;align-items:center;gap:8px;max-height:none}
.atl2.cibles .stage.folded .fbar .seg{display:flex;gap:6px}
.atl2.cibles .stage.folded .fbar .seg button,
.atl2.cibles .stage.folded .fbar .fbtn{height:32px;box-sizing:border-box;
  width:auto;border-radius:999px;padding:0 13px;font-size:12.5px;font-weight:600;
  border:1px solid var(--pp-line);background:var(--pp-bg);color:var(--pp-ink-2)}
.atl2.cibles .stage.folded .fbar .seg button[aria-pressed="true"],
.atl2.cibles .stage.folded .fbar .seg button.on{background:var(--pp-green-chip);
  border-color:var(--pp-green-bd);color:var(--pp-green-tx);font-weight:700}
.atl2.cibles .stage.folded .fbar .fsrch{height:32px;box-sizing:border-box;
  border-radius:999px;flex:1 1 200px;max-width:280px;padding:0 14px}
.atl2.cibles .stage.folded .fbar .facets{display:flex;flex-wrap:wrap;gap:8px}
.atl2.cibles .stage.folded .fbar .fbtn.fsig{grid-column:auto;
  border-color:var(--pp-red-bd);background:var(--pp-red-bg);
  color:var(--pp-red-tx)}
.atl2.cibles .stage.folded .fbar .frow2{margin-top:0}
.atl2.cibles .stage.folded .fbar .alertbtn{width:auto;height:32px;box-sizing:border-box;
  border-radius:999px;padding:0 16px;font-size:12.5px;font-weight:700}

/* ── ⑤ ter « ANALYSES EN DIRECT » ────────────────────────────────────────── */
/* Le bandeau vert de la maquette : teinte pleine, pas de dégradé, et les
   mêmes 28 px de marge que tout le reste. */
.atl2.cibles .livestrip{margin:var(--v3-gap) var(--v3-pad) 0;padding:12px 18px;
  gap:18px;border:1px solid var(--pp-green-bd);border-radius:var(--pp-r-m);
  background:var(--pp-green-bg);box-shadow:none}
.atl2.cibles .livestrip:hover{border-color:var(--pp-green)}
.atl2.cibles .ls-lab{font-size:12px;font-weight:600;color:var(--pp-green-tx);
  letter-spacing:0;text-transform:none}
.atl2.cibles .ls-chip{height:28px;box-sizing:border-box;padding:0 12px;
  border-color:var(--pp-line);font-size:12px}
.atl2.cibles .ls-go{font-size:13px;font-weight:600;color:var(--pp-green-tx)}

/* ── ⑥ « COLLER UNE URL ET ÉVALUER » : une carte, pas un bandeau ─────────── */
.atl2.cibles .eval-stick{background:transparent;box-shadow:none}
.atl2.cibles .demand{margin:var(--v3-gap) var(--v3-pad) 0;padding:18px;
  border:1px solid var(--pp-line);border-radius:14px;background:var(--pp-bg);
  border-top:1px solid var(--pp-line)}
.atl2.cibles .demand .drow{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
/* le champ « premium » : pilule, point d'état à gauche, bouton collé à droite */
.atl2.cibles .demand .dfield{display:flex;align-items:center;gap:10px;
  flex:1 1 260px;min-width:0;box-sizing:border-box;border:1px solid var(--pp-line);
  border-radius:999px;padding:0 8px 0 18px;background:#F9FBFD;
  transition:border-color .18s ease,box-shadow .18s ease,background .18s ease}
.atl2.cibles .demand .dfield:focus-within{border-color:var(--pp-green-soft);
  box-shadow:0 0 0 4px rgba(18,161,80,.14);background:var(--pp-bg)}
.atl2.cibles .demand .dfield::before{content:"";width:8px;height:8px;flex:none;
  border-radius:50%;background:var(--pp-line-dash)}
.atl2.cibles .demand .dfield:focus-within::before{background:var(--pp-green)}
.atl2.cibles .demand .dfield input{flex:1;min-width:0;border:0;background:transparent;
  font:inherit;font-size:14px;padding:13px 0;color:var(--pp-ink);outline:none}
.atl2.cibles .demand .detect{font-size:12px;font-weight:600;color:var(--pp-ink-5);
  white-space:nowrap;padding-right:6px;letter-spacing:0;text-transform:none}
.atl2.cibles .demand .dacts{display:flex;align-items:center;gap:10px;flex:none}
.atl2.cibles .demand .evalbtn{font:inherit;font-weight:700;font-size:14px;
  background:var(--pp-green);color:#fff;border:0;border-radius:999px;
  padding:13px 26px;cursor:pointer;white-space:nowrap;box-shadow:var(--pp-sh-cta)}
.atl2.cibles .demand .evalbtn:hover:not(:disabled){background:var(--pp-green-h)}
.atl2.cibles .demand .evalbtn:disabled{background:var(--pp-line-in);
  color:var(--pp-ink-5);box-shadow:none;cursor:not-allowed}
/* Site | Source : un segment, pas deux liens posés à côté */
.atl2.cibles .demand .dacts .viewbtn.sm{display:inline-flex;align-items:center;
  border:1px solid var(--pp-line);border-radius:0;padding:8px 14px;font-size:12px;
  font-weight:600;color:var(--pp-ink-3);background:var(--pp-bg);
  text-decoration:none;white-space:nowrap}
.atl2.cibles .demand .dacts .viewbtn.sm:not(.off){background:var(--pp-navy);color:#fff;
  border-color:var(--pp-navy)}
.atl2.cibles .demand .dacts .viewbtn.sm:first-of-type{border-right:0;
  border-radius:999px 0 0 999px}
.atl2.cibles .demand .dacts .viewbtn.sm:last-of-type{border-left:0;
  border-radius:0 999px 999px 0}
.atl2.cibles .demand .dunder{display:flex;align-items:center;gap:16px;flex-wrap:wrap;
  margin-top:12px}
.atl2.cibles .demand .dmulti{font:inherit;font-size:12.5px;color:var(--pp-ink-4);
  background:none;border:0;cursor:pointer;padding:0;text-align:left}
.atl2.cibles .demand .dmulti:hover{color:var(--pp-green-tx)}

/* ── ⑦ LES MOTEURS DE SOURCING ───────────────────────────────────────────── */
.atl2.cibles .srceng{margin:var(--v3-gap) var(--v3-pad) 0;border:1px solid var(--pp-line);
  border-radius:var(--pp-r-m);background:var(--pp-bg);overflow:visible}
.atl2.cibles .se-head{padding:12px 18px;gap:14px}
.atl2.cibles .se-head b{font-size:13.5px;font-weight:700;letter-spacing:0}
.atl2.cibles .se-head .se-sum{font-family:var(--pp-body);font-size:12.5px;
  color:var(--pp-ink-4);letter-spacing:0;text-transform:none}
.atl2.cibles .se-body{padding:0 18px 16px}
.atl2.cibles .se-cards{grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}
.atl2.cibles .se-card{border:1px solid var(--pp-line-in);border-radius:var(--pp-r-m);
  padding:14px 16px;background:#FDFEFE}
.atl2.cibles .se-ct b{font-size:13.5px;font-weight:700}
.atl2.cibles .se-st{font-family:var(--pp-body);font-size:10.5px;font-weight:700;
  letter-spacing:0;text-transform:none}
.atl2.cibles .se-desc{font-size:12px;line-height:1.55;color:var(--pp-ink-4)}
.atl2.cibles .se-hero b{font-size:20px;font-weight:700;letter-spacing:-.02em}
.atl2.cibles .se-hero span{font-size:12px;color:var(--pp-ink-4)}
.atl2.cibles .se-split{font-size:12px;color:var(--pp-ink-3)}
.atl2.cibles .se-adj{font-size:12px;font-weight:700;border-radius:var(--pp-r-s);
  padding:6px 12px;border:1px solid var(--pp-line)}
.atl2.cibles .se-win{height:28px;box-sizing:border-box;display:inline-flex;
  align-items:center;font-size:12.5px;padding:0 13px}

/* ── ⑧ LE POSTE À DEUX COLONNES ──────────────────────────────────────────── */
/* Deux CARTES séparées par 24 px — pas deux colonnes soudées par un filet. */
.atl2.cibles .desk{margin:20px var(--v3-pad) 0;border-top:0;background:transparent;
  grid-template-columns:minmax(0,63fr) minmax(0,37fr);gap:24px;align-items:start}
@media (max-width:1080px){
  .atl2.cibles .desk{grid-template-columns:minmax(0,1fr);gap:16px}
  .atl2.cibles .readpane{order:2}
}
.atl2.cibles .desk-list{border:1px solid var(--pp-line);border-radius:var(--pp-r-m);
  background:var(--pp-bg);overflow:visible}

/* ── ⑨ LA BARRE D'OUTILS COLLANTE, SUR DEUX RANGÉES ──────────────────────── */
/* L'entonnoir passe SOUS les deux rangées d'outils : c'est l'ordre de la
   maquette, et c'est le bon — on règle la vue, puis on lit l'étape. */
body.pp-desk .atl2.cibles .desk-list .listhead,
body.pp-desk .atl2.cibles .desk-list .listhead.mapoff,
.atl2.cibles .desk-list .listhead{padding:0;background:rgba(255,255,255,.96);
  -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);
  border-radius:var(--pp-r-m) var(--pp-r-m) 0 0;border-bottom:1px solid var(--pp-line)}
.atl2.cibles .listhead .lh-title{order:0;display:flex;align-items:center;gap:8px;
  flex-wrap:wrap;padding:12px 18px 0;margin:0}
.atl2.cibles .listhead .lh-top{order:1;display:flex;align-items:center;gap:8px;
  flex-wrap:wrap;padding:10px 18px 12px;margin:0}
.atl2.cibles .listhead .lh-funnel{order:2;padding:12px 18px;margin:0;
  border-top:1px solid var(--pp-line-in)}
.atl2.cibles .listhead .lh-title .main{display:inline-flex;align-items:center;
  font-size:13px;font-weight:700;color:var(--pp-ink);white-space:nowrap}
.atl2.cibles .listhead .lh-title .main b.tn{font-size:13px;font-weight:700}
.atl2.cibles .listhead .lh-title .dot{color:var(--pp-line-dash)}
.atl2.cibles .listhead .lh-title .ctx{font-size:12px;font-weight:600;
  color:var(--pp-ink-4);letter-spacing:0;text-transform:none}
/* les chips de contexte : hauteur UNIQUE de 28 px — la règle qui fait
   qu'une rangée de pastilles s'aligne au lieu de faire des marches */
.atl2.cibles .listhead .lh-dock{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.atl2.cibles .listhead .dockbtn{display:inline-flex;align-items:center;gap:6px;
  height:28px;box-sizing:border-box;background:var(--pp-bg-page);
  border:1px solid var(--pp-line);border-radius:999px;padding:0 12px;
  font:inherit;font-size:12px;font-weight:600;color:var(--pp-ink);cursor:pointer;
  white-space:nowrap;letter-spacing:0;text-transform:none}
.atl2.cibles .listhead .dockbtn:hover{border-color:var(--pp-line-strong)}
.atl2.cibles .listhead .dockbtn.sig{background:var(--pp-red-bg);
  border-color:var(--pp-red-bd);color:var(--pp-red-tx);font-weight:700}
.atl2.cibles .listhead .lh-acts{margin-left:auto;display:flex;align-items:center;
  gap:8px;flex-wrap:wrap;justify-content:flex-end;height:auto}
/* LISTE | LIGNE | MAXI : un segment de 30 px, filet unique */
.atl2.cibles .listhead .dens{display:inline-flex;align-items:stretch;height:30px;
  box-sizing:border-box;border:1px solid var(--pp-line);border-radius:var(--pp-r-s);
  overflow:hidden;background:var(--pp-bg);gap:0}
.atl2.cibles .listhead .dens button{display:inline-flex;align-items:center;gap:5px;
  border:0;border-radius:0;background:transparent;padding:0 10px;font:inherit;
  font-size:10.5px;font-weight:700;letter-spacing:.02em;color:var(--pp-ink-4);
  cursor:pointer;white-space:nowrap}
.atl2.cibles .listhead .dens button[aria-pressed="true"],
.atl2.cibles .listhead .dens button.on{background:var(--pp-navy);color:#fff}
.atl2.cibles .listhead .dens button b{font-size:10.5px;font-weight:700}
.atl2.cibles .listhead .doable .dobtn{display:inline-flex;align-items:center;gap:6px;
  height:30px;box-sizing:border-box;border:1px solid var(--pp-line);
  border-radius:var(--pp-r-s);padding:0 12px;font:inherit;font-size:12px;
  font-weight:600;color:var(--pp-ink-2);background:var(--pp-bg);cursor:pointer;
  white-space:nowrap}
.atl2.cibles .listhead .doable .dobtn:hover{border-color:var(--pp-line-strong)}

/* ── ⑩ L'ENTONNOIR : chevrons à gauche, compteurs à droite ───────────────── */
.atl2.cibles .listhead .funnel{display:flex;align-items:center;gap:12px;
  flex-wrap:wrap;margin:0}
/* MESURÉ : à 451 px pour cinq chevrons, « À évaluer » se coupait en
   « À évalu… ». La maquette leur donne 520 px et fait passer les outils à la
   ligne — un libellé d'étape tronqué ne dit plus quelle étape c'est. */
.atl2.cibles .listhead .chain2{flex:1 1 520px;min-width:420px;align-items:stretch}
@media (max-width:1200px){
  .atl2.cibles .listhead .chain2{flex:1 1 100%;min-width:0}
  .atl2.cibles .listhead .offtrack{flex:1 1 auto}
}
.atl2.cibles .listhead .chain2 .step{padding:8px 8px 8px 20px;gap:2px}
.atl2.cibles .listhead .chain2 .step:first-child{padding-left:14px}
.atl2.cibles .listhead .chain2 .step .l{display:block;font-size:12px;font-weight:600;
  opacity:.75;letter-spacing:0;text-transform:none;line-height:1.3;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.atl2.cibles .listhead .chain2 .step .n{display:block;margin-top:2px;font-size:17px;
  font-weight:700;letter-spacing:-.01em;line-height:1.1}
/* l'étape active en vert PLEIN, avec l'ombre du handoff */
.atl2.cibles .listhead .chain2 .step[aria-selected="true"]{background:var(--pp-green);
  color:#fff;box-shadow:var(--pp-sh-step)}
.atl2.cibles .listhead .chain2 .step:not([aria-selected="true"]){
  background:var(--pp-line-in);color:var(--pp-ink-3)}
/* les compteurs hors tunnel : trois boîtes rayon 8 */
.atl2.cibles .listhead .offtrack{display:flex;gap:8px;flex:none;align-items:stretch}
.atl2.cibles .listhead .offtrack .off{display:block;box-sizing:border-box;
  border:1px solid var(--pp-line-in);border-radius:var(--pp-r-s);padding:7px 11px;
  background:var(--pp-bg);cursor:pointer;text-align:left}
.atl2.cibles .listhead .offtrack .off .l{display:block;font-size:12px;font-weight:600;
  opacity:.8;white-space:nowrap;letter-spacing:0;text-transform:none}
.atl2.cibles .listhead .offtrack .off .n{display:block;margin-top:2px;font-size:17px;
  font-weight:700;letter-spacing:-.01em}
.atl2.cibles .listhead .offtrack .off[aria-selected="true"]{border-color:var(--pp-line)}
/* les outils : carrés de 30 px à filet, comme ⇅ et ⚙ de la maquette */
/* Les outils passent SOUS l'entonnoir, alignés à droite. Dans la maquette ils
   ne sont pas dans la rangée des chevrons du tout — ils vivent avec les modes
   d'affichage. Collés au tunnel, ils lui prenaient 170 px et coupaient
   « À évaluer » en « À évalu… ». */
.atl2.cibles .listhead .ftools{display:flex;align-items:center;gap:6px;
  flex:1 0 100%;justify-content:flex-end;margin:8px 0 0}
.atl2.cibles .listhead .ftools .tool{width:30px;height:30px;box-sizing:border-box;
  display:grid;place-items:center;border:1px solid var(--pp-line);
  border-radius:var(--pp-r-s);background:var(--pp-bg);color:var(--pp-ink-4);
  font-size:13px;cursor:pointer;padding:0}
.atl2.cibles .listhead .ftools .tool:hover{border-color:var(--pp-line-strong);
  color:var(--pp-ink-2)}

/* ── ⑪ LE BANDEAU D'ÉTAPE, sous l'entonnoir ──────────────────────────────── */
.atl2.cibles .listhead .tuto.mini{order:3;display:flex;align-items:center;gap:12px;
  flex-wrap:wrap;padding:11px 18px;margin:0;border-top:1px solid var(--pp-line-in);
  background:#F4FBF7;border-radius:0}
.atl2.cibles .listhead .tuto.mini .tstep{display:inline-flex;align-items:center;gap:8px;
  font-size:13.5px;font-weight:700;color:var(--pp-green-tx);letter-spacing:0;
  text-transform:none}
.atl2.cibles .listhead .tuto.mini .tstep::before{content:"";width:8px;height:8px;
  border-radius:50%;background:var(--pp-green)}
.atl2.cibles .listhead .tuto.mini .tbody{font-size:12.5px;color:var(--pp-ink-3)}

/* ── ⑫ L'EN-TÊTE DE COLONNES ET LES LIGNES ───────────────────────────────── */
.atl2.cibles .desk-list .row,
.atl2.cibles .desk-list .cols{
  grid-template-columns:11px 20px minmax(140px,1fr) minmax(84px,116px) 92px!important;
  gap:8px;align-items:center;box-sizing:border-box}
.atl2.cibles .desk-list .cols{padding:9px 14px;background:#F9FBFD;
  border-bottom:1px solid var(--pp-line)}
.atl2.cibles .desk-list .cols button,
.atl2.cibles .desk-list .cols span{font-family:var(--pp-body);font-size:12px;
  font-weight:600;color:var(--pp-ink-4);letter-spacing:0;text-transform:none}
.atl2.cibles .desk-list .list .row{padding:10px 14px;
  border-bottom:1px solid var(--pp-line-in);cursor:pointer}
.atl2.cibles .desk-list .list .row:hover{background:#F9FBFD}
/* le drapeau : 20×14, rayon 2, cerné d'un filet d'un pixel */
.atl2.cibles .desk-list .row .c-flag{width:20px;height:14px;display:block;
  border-radius:2px;overflow:hidden;box-shadow:0 0 0 1px rgba(15,29,51,.10);
  background-size:cover;background-position:center}
.atl2.cibles .desk-list .row .c-flag .em{font-size:11px;line-height:14px}
.atl2.cibles .desk-list .row .nd{min-width:0;display:block;overflow:hidden}
.atl2.cibles .desk-list .row .rnm{display:flex;align-items:center;gap:7px;min-width:0;
  font-weight:600;font-size:13.5px;color:var(--pp-ink);white-space:nowrap;
  overflow:hidden;text-overflow:ellipsis}
.atl2.cibles .desk-list .row .rds{display:block;margin-left:13px;font-size:12.5px;
  color:var(--pp-ink-4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
/* MATCH : un badge dans SA colonne, jamais posé sur la description */
.atl2.cibles .desk-list .row .c-vd{display:flex;align-items:center;gap:7px;
  flex-wrap:wrap;min-width:0}
.atl2.cibles .desk-list .row .vd.v-ok{background:var(--pp-green-bg);
  color:var(--pp-green-tx);font-size:10px;font-weight:700;border-radius:5px;
  padding:3px 6px;letter-spacing:0;text-transform:none;white-space:nowrap}
.atl2.cibles .desk-list .row .vd.wait{display:inline-flex;align-items:center;gap:7px;
  border:1px solid var(--pp-line);border-radius:999px;padding:4px 9px;
  font-size:11.5px;font-weight:600;color:var(--pp-ink-2);background:var(--pp-bg);
  white-space:nowrap;letter-spacing:0;text-transform:none}
/* le bouton d'action : marine, plein, jamais coupé */
.atl2.cibles .desk-list .row .cell{justify-self:end;width:100%}
.atl2.cibles .desk-list .row .memobtn{width:100%;box-sizing:border-box;font:inherit;
  font-size:11.5px;font-weight:700;background:var(--pp-navy);color:#fff;border:0;
  border-radius:var(--pp-r-s);padding:8px 6px;cursor:pointer;white-space:nowrap}
.atl2.cibles .desk-list .row .memobtn:hover:not(:disabled){background:var(--pp-navy-h)}
@media (max-width:860px){
  .atl2.cibles .desk-list .row,
  .atl2.cibles .desk-list .cols{
    grid-template-columns:11px 20px minmax(0,1fr) 88px!important}
  .atl2.cibles .desk-list .c-vd,.atl2.cibles .desk-list .h-vd{display:none!important}
}

/* ── ⑬ LE PANNEAU DE LECTURE : une carte, détachée de la liste ───────────── */
.atl2.cibles .readpane{background:transparent;border-left:0;padding:0;
  display:flex;flex-direction:column;gap:14px;overflow:visible}
/* « Édito du jour » : une ligne cliquable, pas un bouton perdu */
.atl2.cibles .readpane .edito-go{display:flex;align-items:center;gap:10px;width:100%;
  box-sizing:border-box;border:1px solid var(--pp-line);border-radius:var(--pp-r-m);
  padding:12px 16px;background:var(--pp-bg);font:inherit;font-size:13px;
  font-weight:700;color:var(--pp-ink);cursor:pointer;text-align:left;
  white-space:nowrap;letter-spacing:0;text-transform:none;margin:0}
.atl2.cibles .readpane .edito-go::before{content:"";width:8px;height:8px;flex:none;
  border-radius:50%;background:var(--pp-green)}
.atl2.cibles .readpane .edito-go:hover{border-color:var(--pp-green-bd);
  background:#FBFDFC}
.atl2.cibles .readpane .edito-go[aria-pressed="true"]{border-color:var(--pp-green-bd);
  background:var(--pp-green-chip);color:var(--pp-green-tx)}
/* la fiche : cadre blanc, rayon 14, contenu qui ne déborde jamais */
.atl2.cibles .readpane .zoom{border:1px solid var(--pp-line);border-radius:14px;
  background:var(--pp-bg);overflow:hidden;padding:0;margin:0;min-width:0}
.atl2.cibles .readpane .zoom-pipe{padding:20px 20px 0}
.atl2.cibles .readpane .zoom-k{font-size:12px;font-weight:600;color:var(--pp-ink-4);
  letter-spacing:0;text-transform:none;margin:0}
.atl2.cibles .readpane .zoom-h{margin:6px 0 0;font-size:21px;font-weight:700;
  letter-spacing:-.01em;color:var(--pp-ink);line-height:1.2}
.atl2.cibles .readpane .zoom-meta{margin:4px 0 0;font-size:13px;color:var(--pp-ink-3);
  display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.atl2.cibles .readpane .zoom-cta{margin:14px 0 0}
/* les onglets : soulignés en vert, jamais encadrés */
.atl2.cibles .readpane .cdtabs{margin:14px -20px 0}
.atl2.cibles .readpane .cdnav{display:flex;gap:2px;padding:0 12px;overflow-x:auto;
  border-bottom:1px solid var(--pp-line-in);scrollbar-width:none}
.atl2.cibles .readpane .cdnav::-webkit-scrollbar{display:none;height:0}
.atl2.cibles .readpane .cdnav button{flex:none;border:0;background:none;
  font:inherit;font-size:13px;font-weight:600;color:var(--pp-ink-4);
  padding:10px 9px 11px;border-bottom:2px solid transparent;margin-bottom:-1px;
  white-space:nowrap;cursor:pointer;letter-spacing:0;text-transform:none;
  border-radius:0}
.atl2.cibles .readpane .cdnav button:hover{color:var(--pp-ink-2)}
/* le soulignement de l'onglet actif est VERT — mesuré : la feuille d'avant le
   posait en encre, et l'accent du panneau disparaissait. Un cran de
   spécificité de plus, sinon c'est elle qui gagne. */
.atl2.cibles .readpane .cdtabs .cdnav button.on,
.atl2.cibles .readpane .cdtabs .cdnav button[aria-selected="true"]{
  color:var(--pp-ink);border-bottom:2px solid var(--pp-green);
  background:transparent}
.atl2.cibles .readpane .cdbody{padding:20px}
.atl2.cibles .readpane .readpane-empty{border:1px dashed var(--pp-line);
  border-radius:var(--pp-r-m);padding:28px 20px;text-align:center;font-size:13px;
  color:var(--pp-ink-4);margin:0;background:var(--pp-bg)}
/* l'édito déplié garde le même cadre que la fiche */
.atl2.cibles .readpane .thesis-brief{margin:0;border:0;border-radius:0;
  background:transparent}

/* ── ⑭ CE QU'ON NE VEUT PLUS VOIR ────────────────────────────────────────── */
/* Les barres horizontales : elles existent (on défile), elles ne se dessinent
   plus — la maquette n'en montre aucune. */
.atl2.cibles .desk-list,.atl2.cibles .cdnav,.atl2.cibles .conts,
.atl2.cibles .listhead,.atl2.cibles .readpane{scrollbar-width:none}
.atl2.cibles .desk-list::-webkit-scrollbar,
.atl2.cibles .conts::-webkit-scrollbar,
.atl2.cibles .listhead::-webkit-scrollbar{display:none;height:0}
/* Aucun libellé de bouton court ne doit se couper en deux lignes. */
.atl2.cibles .listhead button,.atl2.cibles .idmain button,
.atl2.cibles .conts button,.atl2.cibles .demand button{white-space:nowrap}
`,Qs=Vs+Ws+Gs+Ys;function sn(e){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(e)||""}catch{return""}}function Ks(){const e=sn("teaser");if(e==="0"||e==="1")return e;try{if(typeof window<"u"&&window.parent&&window.parent!==window){const a=new URL(window.parent.location.href).searchParams.get("teaser");if(a==="0"||a==="1")return a;if(/\/cibles\/[^/]+\/open\/?$/i.test(window.parent.location.pathname||""))return"0"}}catch{}return""}function Js(e,a){if(e||a.mode!=="client"||!a.token)return"visiteur";const r=Ks();return r==="0"?"client":r==="1"||sn("embed")==="1"&&sn("chrome")==="1"?"apercu":"client"}const Xs={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0,showMorning:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0}},Zs=e=>Xs[e];function Sa(e){const a=(e||"").trim();return a.length<3?!1:!!(/^[^\p{L}(]/u.test(a)||/[:—]\s|…|\.{3}/.test(a)||a.split(/\s+/).length>=3&&/\b(icymi|round-?up|wrap|weekly|podcast|interview|what|why|how|biggest|watch|inside|according)\b/i.test(a))}const At=e=>{if(e.noCo===void 0){const a=(e.name||"").trim();(!no(a)||Sa(a))&&(e.noCo=!0)}return Object.assign(e,{continent:zi(e.cc)})};function Va(e){const a=new Set,r=[];for(const n of e){const o=(n.name||"").toLowerCase();!o||a.has(o)||(a.add(o),r.push(n))}return r}const el=60*60*1e3;function tl(e){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+e)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>el?null:a}catch{return null}}function pa(e,a){try{sessionStorage.setItem("ppmap:swr:"+e,JSON.stringify({...a,ts:Date.now()}))}catch{}}const al=e=>e==="default"?"":e==="ops"?"ops":"research:"+e.research;function nl(e,a,r="default"){const n=r!=="default",o=p.useMemo(()=>e||n?{mode:"anon"}:xi(),[e,n]),i=p.useMemo(()=>n?"visiteur":Js(e,o),[e,o,n]),c=p.useMemo(()=>Zs(i),[i]),s=i!=="visiteur",l=al(r),[g,d]=p.useState([]),[x,m]=p.useState(""),[b,u]=p.useState(null),[y,w]=p.useState(null),[f,v]=p.useState(null),[j,k]=p.useState(()=>new Map),[N,S]=p.useState(()=>new Map),[C,L]=p.useState(""),[q,M]=p.useState(new Set),[R,$]=p.useState(null),[F,O]=p.useState(!0),[h,A]=p.useState(!1),[U,ee]=p.useState(0),[E,I]=p.useState(0),D=p.useRef(0),B=p.useMemo(()=>{var ae;if(i!=="client")return"";try{return((ae=bi())==null?void 0:ae.email)||""}catch{return""}},[i]);p.useEffect(()=>{const ae=++D.current;let be=!0;const J=()=>be&&ae===D.current,he=(s&&o.token?o.token:"pub:"+a)+(l?":"+l:""),ue=tl(he);return ue?(d(ue.objs.map(At)),ue.fund&&m(ue.fund),u(ue.marketEstimate??null),w(ue.criteria??null),v(ue.stats??null),L(ue.generatedAt||""),O(!1)):O(!0),(async()=>{try{if(r==="ops"){const ge=await Ba(),_=((ge==null?void 0:ge.recent_ops)||[]).map(K=>{const V=ya(K.company_name||K.title?K:{...K,title:(K.headline_fr||K.headline||"").slice(0,120)},a),ne=String(K.rubrique||"").toLowerCase();return V&&(ne==="nominations"||ne==="recrutements")&&(V.engine=ne),V&&!String(K.company_name||"").trim()&&(V.noCo=!0),V}).filter(K=>!!K).map(K=>(no((K.name||"").trim())||(K.noCo=!0),K));try{const K=vi(),V=await yi(),ne=((V==null?void 0:V.date)||"").slice(0,10),H=K?K.doc:V,se=wi(H),de=((K==null?void 0:K.day)||(H==null?void 0:H.date)||ne||"").slice(0,10);if(de&&se.length){const oe=new Set;for(const re of _){if((re.date||"").slice(0,10)!==de)continue;const ye=Un(se,oe,re.name,"");ye>=0&&(oe.add(ye),re.decryptHtml=se[ye].html)}for(const re of _){if(re.decryptHtml||(re.date||"").slice(0,10)!==de)continue;const ye=Un(se,oe,"",re.headline||re.tagline||re.name);ye>=0&&(oe.add(ye),re.decryptHtml=se[ye].html)}}if(de){const oe=((H==null?void 0:H.title_fr)||"").trim(),re=((H==null?void 0:H.lead_fr)||"").trim(),ye=ki(H),me=((H==null?void 0:H.url)||"").trim();oe&&(ye||me)&&_.unshift({id:`edito:${de}`,kind:"op",name:oe,cc:null,date:de,engine:"edito",dealKind:"other",headline:oe,tagline:re||oe,decryptHtml:ye||void 0,url:me,noCo:!0})}}catch{}if(!J())return;d(_.map(At)),pa(he,{objs:_})}else if(typeof r=="object"){const _=(await Hn()||[]).filter(V=>(V.slug||"")===r.research).map(V=>Vn(V,a)).filter(V=>!!V),K=Va(await Wn(_,a));if(!J())return;d(K.map(At)),pa(he,{objs:K})}else if(s&&o.token){const ge=ji(o.token),_=Ba(),K=Ei(o.token),V=Ni(o.token),ne=Si(o.token),H=await ge;let se=H?H.targets:[];J()&&H&&(m(H.fund||""),u(H.marketEstimate??null),w(H.criteria??null),v(H.stats??null),L(H.generatedAt||""),d(se.map(At)),O(!1),A(!1));const[de,oe,re,ye]=await Promise.all([_,K,V,ne]),me=((de==null?void 0:de.recent_ops)||[]).map(Se=>ya(Se,a)).filter(Se=>!!Se),We=new Set(se.map(Se=>Se.id));if(se=[...se,...me.filter(Se=>!We.has(Se.id)&&(We.add(Se.id),!0))],!J())return;d(se.map(At));const we=new Set;for(const Se of oe){const Ne=(Se.id||Se.co||"").toString().trim().toLowerCase();Ne&&we.add(Ne.startsWith("t:")?Ne:"t:"+Ne)}M(we),k(re),S(ye),H&&pa(he,{fund:H.fund,marketEstimate:H.marketEstimate,criteria:H.criteria,stats:H.stats,generatedAt:H.generatedAt,objs:se})}else{const ge=Ci(),_=Hn(),K=Ba(),V=await ge;J()&&V.length&&(d(Va(V).map(At)),O(!1),A(!1));const[ne,H]=await Promise.all([_,K]),se=(ne||[]).map(ye=>Vn(ye,a)).filter(ye=>!!ye),de=await Wn(se,a),oe=((H==null?void 0:H.recent_ops)||[]).map(ye=>ya(ye,a)).filter(ye=>!!ye),re=Va([...V,...de,...oe]);if(!J())return;d(re.map(At)),pa(he,{objs:re})}J()&&A(!1)}catch{J()&&!ue&&A(!0)}finally{J()&&O(!1)}})(),()=>{be=!1}},[s,o.token,a,U,l]),p.useEffect(()=>{if(!c.showCredits||!B){$(null);return}let ae=!0;return(async()=>{try{const be=await fetch(`${Ia}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:B})});if(!be.ok)return;const J=await be.json();ae&&J&&J.ok!==!1&&$(J)}catch{}})(),()=>{ae=!1}},[c.showCredits,B,E]);const te=p.useCallback(ae=>M(new Set(ae)),[]);return{session:o,mode:i,caps:c,fund:x,email:B,marketEstimate:b,generatedAt:C,criteria:y,stats:f,thumbs:j,stages:N,dossiers:g,patchStatuses:(ae,be)=>{d(J=>{let he=!1;const ue=J.map(ge=>{if(!ge.checkId)return ge;const _=ae.get(ge.checkId);return!_||_===(ge.ceoStatus||"")||!be(ge.id)?ge:(he=!0,{...ge,ceoStatus:_})});return he?ue:J})},favIds:q,setFavIds:te,credits:R,reloadCredits:()=>I(ae=>ae+1),loading:F,error:h,refresh:()=>ee(ae=>ae+1)}}function Ye(e){return e?e.engine==="edito"||String(e.id||"").startsWith("edito:"):!1}const wa=new Set(["media","nominations","recrutements","tribunes","listes","evenements","partenariats","produits","regul","marche"]);function Ca(e){return wa.has(e.engine||"")}function Ge(e){return!!e.noCo||Ca(e)&&!!e.url}const go=()=>({win:"all",day:"",status:"all",crible:[],signalOnly:!1,signalEngines:[],sector:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],acquirer:"",search:""}),rl=(e="europe",a=!1,r)=>({continent:e,ptab:(r==null?void 0:r.ptab)??1,dens:(r==null?void 0:r.dens)??"liste",filters:{...go(),...Object.fromEntries(Object.entries((r==null?void 0:r.filters)||{}).filter(([,n])=>n!==void 0))},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,focusId:null,modal:(r==null?void 0:r.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,approachId:null,memoTab:0,undo:[],mapFolded:a}),ol=new Set(["signal","amount","score","crible","memo"]);function il(e,a){switch(a.type){case"continent":return{...e,continent:a.key,filters:{...e.filters,country:[]},shown:{},popupId:null,focusId:null,openFacet:null};case"ptab":return{...e,ptab:a.tab,shown:{},popupId:null,focusId:null};case"dens":return{...e,dens:a.dens,shown:{}};case"filters":return{...e,filters:{...e.filters,...a.patch},shown:{}};case"toggleFacet":{const r=e.filters[a.facet],n=r.includes(a.value)?r.filter(o=>o!==a.value):[...r,a.value];return{...e,filters:{...e.filters,[a.facet]:n},shown:{}}}case"toggleMemoLevel":{const r=e.filters.memoLevel,n=r.includes(a.value)?r.filter(o=>o!==a.value):[...r,a.value];return{...e,filters:{...e.filters,memoLevel:n},shown:{}}}case"acquirer":return{...e,filters:{...e.filters,acquirer:a.value,day:"",win:"all"},shown:{}};case"clearFacet":return{...e,filters:{...e.filters,[a.facet]:[]},shown:{}};case"reset":return{...e,filters:go(),shown:{},openFacet:null};case"sort":return{...e,sort:e.sort.key===a.key?{key:a.key,dir:e.sort.dir*-1}:{key:a.key,dir:ol.has(a.key)?-1:1}};case"groupBy":return{...e,groupBy:a.groupBy};case"more":return{...e,shown:{...e.shown,[a.group]:(e.shown[a.group]??a.base??xo)+a.by}};case"pile":return{...e,pileMode:a.on,popupId:null};case"openFacet":return{...e,openFacet:e.openFacet===a.facet?null:a.facet};case"popup":return{...e,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"focus":return{...e,focusId:a.id,popupId:a.id?null:e.popupId};case"modal":return{...e,modal:a.modal,popupId:a.modal?null:e.popupId};case"chainStart":return{...e,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...e,chain:{...e.chain,idx:e.chain.idx+1}};case"spaceTab":return{...e,spaceTab:a.tab};case"approachOpen":return{...e,approachId:a.id,modal:a.id?"approach":null};case"memoConsole":return{...e,memoConsole:a.id,memoTab:0};case"memoTab":return{...e,memoTab:a.tab};case"undoPush":return{...e,undo:[...e.undo,a.entry].slice(-50)};case"undoPop":return{...e,undo:e.undo.slice(0,-1)};case"mapFold":return{...e,mapFolded:a.folded,openFacet:null};default:return e}}const xo=80;function za(e,a,r,n){var o;if(n!=="signal"&&a.signalOnly&&(!De(e)||a.signalEngines.length&&!a.signalEngines.includes(e.engine||""))||n!=="dealKind"&&((o=a.dealKind)!=null&&o.length)&&!a.dealKind.includes(e.dealKind||"")||n!=="sector"&&a.sector.length&&!a.sector.includes(e.sector||"")||n!=="acquirer"&&a.acquirer.trim()&&(e.acquirer||"").trim().toLowerCase()!==a.acquirer.trim().toLowerCase()||n!=="engine"&&a.engine.length&&!a.engine.includes(e.engine||"")||n!=="stage"&&a.stage.length&&!a.stage.includes(e.stage||"")||n!=="angle"&&r&&a.angle.length&&!a.angle.includes(e.angle||"")||n!=="memoLevel"&&r&&a.memoLevel.length&&!a.memoLevel.includes(En(e)))return!1;if(n!=="win"){if(a.day){if((e.date||"").slice(0,10)!==a.day)return!1}else if(a.win!=="all"){const i=a.win==="1"?0:a.win==="7"?7:30;if(bt(e.date)>i)return!1}}if(n!=="status"&&!r&&a.status!=="all"&&Tt(e)!==a.status||n!=="crible"&&a.crible.length&&!a.crible.includes(oo(e)))return!1;if(n!=="search"&&a.search.trim()){const i=a.search.trim().toLowerCase();if(![e.name,e.tagline,e.sector,e.acquirer,e.domain,e.website,e.city,e.countryLabel,e.contactName,e.angle].filter(Boolean).join(" ").toLowerCase().includes(i))return!1}return!0}function ta(e,a,r){return Ye(e)?za(e,a.filters,r):a.continent!=="monde"&&e.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(e.cc||"")?!1:za(e,a.filters,r)}function sl(e,a,r,n){return!(!ta(e,a,r)||r&&!ro(e,a.ptab,n))}function zn(e,a){const r=a.key,n=o=>{switch(r){case"name":return(o.name||"").toLowerCase();case"country":return o.countryLabel||o.cc||"";case"stage":return o.stage||"";case"amount":return o.amountEur||-1;case"age":return-bt(o.date);case"score":return typeof o.score=="number"?o.score:-1;case"crible":return qi(o);case"memo":return Ai(o);case"signal":{const i=De(o);return i?100-(i.left??0):-1}}};return[...e].sort((o,i)=>{const c=n(o),s=n(i);return c<s?-a.dir:c>s?a.dir:(o.name||"").localeCompare(i.name||"")})}const Wa={},dr=(Wa==null?void 0:Wa.VITE_API_BASE)||"https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function cr(){return new Date().toISOString().slice(0,10)}const An=p.createContext(null);function bo(){return p.useContext(An)}function ll(e){if(!e||typeof DOMParser>"u")return[];const a=[];try{const r=new DOMParser().parseFromString(e,"text/html");for(const n of[...r.querySelectorAll("p")]){if((n.textContent||"").replace(/\s+/g," ").trim().length<40)continue;const i=n.querySelector("strong,b"),c=((i==null?void 0:i.textContent)||"").replace(/\s+/g," ").trim();if(!c||c.length<2||c.length>60)continue;const s=n.cloneNode(!0);s.querySelectorAll("script,style,iframe").forEach(l=>l.remove()),s.querySelectorAll("*").forEach(l=>{const g=l.tagName==="A"?l.getAttribute("href"):null;[...l.attributes].forEach(d=>l.removeAttribute(d.name)),g&&/^https?:\/\//i.test(g)&&(l.setAttribute("href",g),l.setAttribute("target","_blank"),l.setAttribute("rel","nofollow noopener"))}),a.push({t:c.toLowerCase(),html:s.outerHTML})}}catch{}return a}function dl(e){if(!e||typeof DOMParser>"u")return e;try{const r=new DOMParser().parseFromString(`<div id="ed">${e}</div>`,"text/html").getElementById("ed");return r?(r.querySelectorAll("script,style,iframe,object,embed,link,meta,form,input,button").forEach(n=>n.remove()),r.querySelectorAll("*").forEach(n=>{[...n.attributes].forEach(o=>{const i=o.name.toLowerCase(),c=o.value,s=i==="class"||i==="alt"||i==="width"||i==="height"||i.startsWith("data-"),l=(i==="href"||i==="src")&&/^https?:\/\//i.test(c);!s&&!l&&n.removeAttribute(o.name)}),n.tagName==="A"&&n.getAttribute("href")&&(n.setAttribute("target","_blank"),n.setAttribute("rel","nofollow noopener"))}),r.innerHTML):e}catch{return e}}function pr(e){if(!e||typeof DOMParser>"u")return e;try{const r=new DOMParser().parseFromString(`<div id="tb">${e}</div>`,"text/html").getElementById("tb");if(!r)return e;r.querySelectorAll("script,style,iframe").forEach(n=>n.remove()),r.querySelectorAll("*").forEach(n=>{const o=n.tagName==="A"?n.getAttribute("href"):null,i=n.getAttribute("class"),c=i==="tb-geo"||i==="tb-these"||i==="tb-sec"?i:"";[...n.attributes].forEach(s=>n.removeAttribute(s.name)),c&&n.setAttribute("class",c),o&&/^https?:\/\//i.test(o)&&(n.setAttribute("href",o),n.setAttribute("target","_blank"),n.setAttribute("rel","nofollow noopener"))});for(const n of[...r.querySelectorAll("p")]){const o=(n.textContent||"").replace(/\s+/g," ").trim();o&&o.length<=28&&!n.querySelector("a,ul,li,strong")&&!/[.:;!?]$/.test(o)&&o.split(" ").length<=3&&n.setAttribute("class","tb-geo")}for(const n of[...r.querySelectorAll("p")]){const o=(n.textContent||"").replace(/\s+/g," ").trim();o&&o.length<=64&&/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(o)&&!n.querySelector("a,ul")&&n.setAttribute("class","tb-sec")}for(const n of[...r.querySelectorAll("b,strong")]){const o=(n.textContent||"").replace(/\s+/g," ").trim().toLowerCase();/^[^a-zà-ÿ]*(pour votre th|for your thesis)/.test(o)&&n.setAttribute("class","tb-these")}for(const n of[...r.querySelectorAll("div,section,p")]){const o=(n.textContent||"").replace(/\s+/g," ").trim();if(/^en bref|^in brief/i.test(o)&&n.querySelector("li,p,ul")){n.classList.add("ed-lead");break}}return r.innerHTML}catch{return e}}function ur(e,a=!1){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||"");if(!r)return e;const i=(a?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||"",c=String(Number(r[3]));return a?`${i} ${c}, ${r[1]}`:`${c==="1"?"1ᵉʳ":c} ${i} ${r[1]}`}function vo(){const e=p.useContext(An);if(!e)throw new Error("ThesisEdition* must be under ThesisEditionProvider");return e}function cl({token:e,children:a}){const{dispatch:r,st:n,lang:o}=Q(),[i,c]=p.useState(()=>n.filters.day||cr()),[s,l]=p.useState(null),[g,d]=p.useState(!1),x=p.useCallback(y=>{if(/^\d{4}-\d{2}-\d{2}$/.test(y)){c(y);try{r({type:"filters",patch:{day:y,win:"all"}})}catch{}}},[r]),m=p.useCallback(()=>{c(cr());try{r({type:"filters",patch:{day:"",win:"all"}})}catch{}},[r]);p.useEffect(()=>{const y=w=>{var v;const f=(v=w.detail)==null?void 0:v.day;typeof f=="string"&&x(f)};return window.addEventListener("pp-edition-day",y),()=>window.removeEventListener("pp-edition-day",y)},[x]),p.useEffect(()=>{n.filters.day&&n.filters.day!==i&&c(n.filters.day)},[n.filters.day]),p.useEffect(()=>{if(!e||!i)return;let y=!1;d(!0);const w=new URLSearchParams({token:e,date:i});return fetch(`${dr}/cibles/edition.json?${w}`).then(f=>f.json()).then(f=>{y||l(f)}).catch(()=>{y||l({ok:!1,error:"network"})}).finally(()=>{y||d(!1)}),()=>{y=!0}},[e,i]);const b=p.useMemo(()=>`${dr}/cibles/editions.json?token=${encodeURIComponent(e)}`,[e]),u=p.useMemo(()=>({token:e,day:i,ed:s,loading:g,pickDay:x,pickWindow:m,dayPicked:!!n.filters.day,daysUrl:b,isEn:o==="en"}),[e,i,s,g,x,m,n.filters.day,b,o]);return t.jsx(An.Provider,{value:u,children:a})}function pl(){const{day:e,daysUrl:a,pickDay:r,dayPicked:n}=vo(),[o,i]=p.useState(()=>n||io());return p.useEffect(()=>{n&&i(!0)},[n]),p.useEffect(()=>{const c=s=>{var l;return i(!!((l=s.detail)!=null&&l.open))};return window.addEventListener(Ea,c),()=>window.removeEventListener(Ea,c)},[]),o?t.jsx("div",{className:"thesis-days",children:t.jsx(Ti,{mode:"local",theme:"dark",month:e.slice(0,7),current:n?e:"",windowDays:0,daysUrl:a,onPick:r})}):null}async function ul(e){try{const a=await fetch("https://proplace.co/actualites/today.json",{cache:"no-store"});if(!a.ok)return null;const r=await a.json(),n=String((r==null?void 0:r.date)||"").slice(0,10);if(!n||e&&n!==e.slice(0,10))return null;const o=String((r==null?void 0:r.html_fr)||(r==null?void 0:r.html_en)||"");return o.trim()?{date:n,title:String((r==null?void 0:r.title_fr)||(r==null?void 0:r.title_en)||""),html:o}:null}catch{return null}}function mr(e){if(!e)return!1;const a=new Date,r=n=>String(n).padStart(2,"0");return e.slice(0,10)===`${a.getFullYear()}-${r(a.getMonth()+1)}-${r(a.getDate())}`}function fr(e){const a=(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(a)?`https://proplace.co/actualites/operations-${a}/`:"https://proplace.co/actualites/"}function ml(){const{day:e,ed:a,loading:r,pickWindow:n,dayPicked:o,isEn:i}=vo(),c=!!(a!=null&&a.ok&&(a.html||a.acquirers_html)),s=(a==null?void 0:a.ok)&&!c,l=a&&!a.ok,g=p.useRef(null),[d,x]=p.useState("fonds"),[m,b]=p.useState(null),[u,y]=p.useState("idle"),w=p.useRef(!1);p.useEffect(()=>{b(null),y("idle"),w.current=!1,x("fonds")},[e]),p.useEffect(()=>{if(d!=="jour"||w.current)return;w.current=!0;let N=!0;return y("load"),ul(e).then(S=>{N&&(b(S),y("fait"))}),()=>{N=!1}},[d,e]);const f=p.useMemo(()=>dl((m==null?void 0:m.html)||""),[m==null?void 0:m.html]),v=p.useRef(null);p.useEffect(()=>{const N=v.current;if(!N||!f)return;let S=!1;return nn(()=>import("./fit-BnaWm7z_.js"),[]).then(async C=>{await C.ensureEditoCss(),!(S||!N.isConnected)&&(C.beautifyEditoRows(N),C.mountCardFits(N))}),()=>{S=!0}},[f]);const j=p.useMemo(()=>pr((a==null?void 0:a.html)||""),[a==null?void 0:a.html]),k=p.useMemo(()=>pr((a==null?void 0:a.acquirers_html)||""),[a==null?void 0:a.acquirers_html]);return p.useEffect(()=>{const N=g.current;if(!N||!j)return;let S=!1;return nn(()=>import("./fit-BnaWm7z_.js"),[]).then(async C=>{await C.ensureEditoCss(),!(S||!N.isConnected)&&(C.beautifyEditoRows(N),C.mountCardFits(N))}),()=>{S=!0}},[j]),t.jsxs("section",{className:"thesis-brief","data-day":(a==null?void 0:a.date)||e,"data-fund":(a==null?void 0:a.fund)||"",children:[t.jsx("style",{children:`
        .thesis-brief{margin:0;padding:18px 16px 22px;background:transparent;border:none;
          border-top:1px solid var(--line,#E3E8F0)}
        .thesis-brief__hd{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin:0 0 8px}
        .thesis-brief__kicker{font-family:var(--pp-body);font-size:12px;color:var(--muted,#4B5E78);font-weight:600}
        .thesis-brief__title{margin:0;font-size:14.5px;font-weight:700;letter-spacing:-.015em;color:#16233A}
        .thesis-brief__date{margin-left:auto;font-family:var(--pp-body);font-size:11px;color:#8FA0B8}
        .thesis-brief__hint{margin:0 0 12px;font-size:12.5px;color:#4B5E78;line-height:1.45;max-width:62ch}
        /* PLUS PETIT, PLUS AÉRÉ (29/08 : « la police de l'édito est trop grande,
           la présentation n'est pas assez aérée »). Le corps passe de 14 à
           13,5 px, l'interligne de 1,6 à 1,72, et chaque opération gagne de
           l'air au lieu d'un filet serré. */
        .thesis-brief__body,.thesis-brief__acq{font-size:12.5px;line-height:1.6;color:#1B2F4E}
        .thesis-brief__body p{margin:0 0 16px}
        .thesis-brief__body .tb-these{display:block;margin:12px 0 3px;font-size:12px;
          font-weight:600;color:#0E8A44}
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
          padding:0 0 14px;background:none;border:0;border-bottom:1px solid #E3E8F0}
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
        .thesis-brief__body .tb-geo{font-size:12px;font-weight:600;color:#8FA0B8;margin:18px 0 6px}
        .thesis-brief__body a{color:#12A150;font-weight:600}
        .thesis-brief__body h2,.thesis-brief__body h3{font-size:12.5px;font-weight:600;
          margin:24px 0 9px;color:#0F1D33}
        .thesis-brief__body .ed-sec{margin:26px 0 0}
        .thesis-brief__body .ed-sec-h,.thesis-brief__body .mk-sec h2{font-size:14px;font-weight:700;
          letter-spacing:-.01em;margin:0 0 8px;padding-bottom:6px;border-bottom:1px solid #E3E8F0;color:#16233A}
        .thesis-brief__body .ed-ops,.thesis-brief__body .mk-ops{list-style:none;margin:0;padding:0}
        .thesis-brief__body .ed-op,.thesis-brief__body .mk-op{padding:15px 0;
          border-bottom:1px solid #F5F7FA}
        .thesis-brief__body .ed-op:last-child,.thesis-brief__body .mk-op:last-child{border-bottom:0}
        .thesis-brief__body .ed-op-t,.thesis-brief__body .mk-op-t{font-size:13.5px;
          line-height:1.5;color:#16233A}
        .thesis-brief__body .ed-op-m,.thesis-brief__body .mk-op-m{margin-top:5px;
          font-size:12px;line-height:1.55;color:#4B5E78}
        .thesis-brief__body ul{margin:0 0 14px;padding-left:1.25em}
        .thesis-brief__body li{margin:0 0 7px}
        .thesis-brief__loading,.thesis-brief__empty,.thesis-brief__err{
          margin:0;font-size:13px;color:#4B5E78;line-height:1.5}
        .thesis-brief__empty b{color:#16233A}
        .thesis-brief__err{color:#C0353A}
        .thesis-brief__clear{margin-top:12px;font-size:12.5px;font-weight:700;color:#12A150;
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
        .thesis-brief__body .tb-sec{font-size:12px;font-weight:600;color:#0F1D33;
          margin:22px 0 8px;line-height:1.5}
        .thesis-brief__body .tb-geo,.thesis-brief__body .tb-these{font-size:10px}
        .thesis-brief__all{display:inline-block;margin-top:10px;font-size:12.5px;font-weight:700;
          color:#12A150;text-decoration:none;border-bottom:1px solid #BBF7D0;padding-bottom:1px}
        .thesis-brief__all:hover{border-bottom-color:#12A150}
        .thesis-brief__sw{display:flex;gap:6px;margin:0 0 12px;flex-wrap:wrap}
        .thesis-brief__sw button{font:inherit;font-size:12px;font-weight:700;letter-spacing:.01em;
          padding:6px 12px;border-radius:999px;border:1px solid #E3E8F0;background:#fff;
          color:#4B5E78;cursor:pointer;white-space:nowrap}
        .thesis-brief__sw button:hover{border-color:#12A150;color:#16233A}
        .thesis-brief__sw button[aria-selected="true"]{background:#12A150;border-color:#12A150;color:#fff}
      `}),t.jsxs("header",{className:"thesis-brief__hd",children:[t.jsx("span",{className:"thesis-brief__kicker",children:i?"Daily brief":"Brief du jour"}),t.jsxs("h2",{className:"thesis-brief__title",children:[i?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",(a==null?void 0:a.count)!=null&&a.count>0?` · ${a.count}`:""]}),((a==null?void 0:a.date)||e)&&t.jsx("time",{className:"thesis-brief__date",dateTime:(a==null?void 0:a.date)||e,children:(a==null?void 0:a.date)||e})]}),t.jsxs("div",{className:"thesis-brief__sw",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":d==="fonds",onClick:()=>x("fonds"),children:(i?"Editorial · ":"Édito · ")+((a==null?void 0:a.fund)||(i?"your thesis":"votre thèse"))}),t.jsx("button",{type:"button",role:"tab","aria-selected":d==="jour",onClick:()=>x("jour"),children:i?"Editorial of the day":"Édito du jour"})]}),d==="fonds"&&t.jsx("p",{className:"thesis-brief__hint",children:i?"Same content as your daily email for this fund. Pick a day above the map to change this brief and the LIVE ticker.":"Même contenu que l’email quotidien de ce fonds. Choisir un jour au-dessus de la carte change ce brief et le LIVE."}),d==="fonds"&&r&&!c&&t.jsx("p",{className:"thesis-brief__loading",children:i?"Loading your thesis brief…":"Chargement de votre brief de thèse…"}),d==="fonds"&&l&&t.jsxs("p",{className:"thesis-brief__err",children:[i?"Could not load this brief.":"Impossible de charger ce brief.",a!=null&&a.error?` (${a.error})`:""]}),d==="fonds"&&s&&!r&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"thesis-brief__empty",children:i?mr(e)?t.jsxs(t.Fragment,{children:["No operation relevant to your thesis was found ",t.jsx("b",{children:"today"}),"."]}):t.jsxs(t.Fragment,{children:["No operation relevant to your thesis was found on ",t.jsx("b",{children:ur(e,!0)}),"."]}):mr(e)?t.jsxs(t.Fragment,{children:["Aucune opération pertinente pour votre thèse n’a été relevée ",t.jsx("b",{children:"aujourd’hui"}),"."]}):t.jsxs(t.Fragment,{children:["Aucune opération pertinente pour votre thèse n’a été relevée le ",t.jsx("b",{children:ur(e)}),"."]})}),t.jsx("button",{type:"button",className:"thesis-brief__all",onClick:()=>x("jour"),children:i?"See all of the day’s operations →":"Voir toutes les opérations du jour →"})]}),d==="fonds"&&c&&j?t.jsx("div",{ref:g,className:"thesis-brief__body zoom-body ppart",dangerouslySetInnerHTML:{__html:j}}):null,d==="fonds"&&c&&k?t.jsx("div",{className:"thesis-brief__acq zoom-body",dangerouslySetInnerHTML:{__html:k}}):null,d==="jour"&&(f?t.jsxs(t.Fragment,{children:[(m==null?void 0:m.title)&&t.jsx("h3",{className:"thesis-brief__title",style:{margin:"0 0 10px"},children:m.title}),t.jsx("div",{ref:v,className:"thesis-brief__body zoom-body ppart",dangerouslySetInnerHTML:{__html:f}})]}):t.jsx("p",{className:u==="fait"?"thesis-brief__empty":"thesis-brief__loading",children:u!=="fait"?i?"Loading the daily editorial…":"Chargement de l’édito du jour…":i?t.jsxs(t.Fragment,{children:["No shared editorial for this day. ",t.jsx("a",{className:"thesis-brief__all",href:fr(e),target:"_blank",rel:"noopener noreferrer",children:"Open the day’s page →"})]}):t.jsxs(t.Fragment,{children:["Pas d’édito partagé pour ce jour. ",t.jsx("a",{className:"thesis-brief__all",href:fr(e),target:"_blank",rel:"noopener noreferrer",children:"Ouvrir la page du jour →"})]})})),o&&t.jsx("button",{type:"button",className:"thesis-brief__clear",onClick:n,children:i?"← See all":"← Voir tout"})]})}const fl=300,ua=7,hl={fr:{ma:"🤝 M&A",levees:"🚀 Levées de fonds",nominations:"👤 Nominations",recrutements:"💼 Offres d'emploi",actualites:"📰 Autres actualités"},en:{ma:"🤝 M&A",levees:"🚀 Fundraising",nominations:"👤 Appointments",recrutements:"💼 Job offers",actualites:"📰 Other news"}},yo={fr:{hiring:"💼 Recrute",raised:"💰 Lève des fonds",news:"📰 Presse",posting:"📣 Publie",building:"💻 Construit",community:"💬 Communauté",registry:"🆕 Nouveau",exodus:"👋 Départs",other:"🔔 Signal"},en:{hiring:"💼 Hiring",raised:"💰 Raising",news:"📰 Press",posting:"📣 Posting",building:"💻 Building",community:"💬 Community",registry:"🆕 New",exodus:"👋 Exodus",other:"🔔 Signal"}},gl=["hiring","raised","news","posting","building","community","registry","exodus","other"];function Ga(e){const a=(e.rubrique||"").toLowerCase();if(a==="ma"||a==="levees"||a==="nominations"||a==="recrutements")return a;if(e.dealKind==="ma")return"ma";if(e.dealKind==="levee")return"levees";const r=(e.engine||"").toLowerCase();if(r==="nominations")return"nominations";if(r==="recrutements")return"recrutements";if(Oi(r)&&r!=="media")return"news:"+r;const n=De(e);return n?"sig:"+(n.theme&&yo.fr[n.theme]?n.theme:"other"):"actualites"}function xl(){const{dossiers:e,st:a,t:r,dispatch:n,contName:o,pipe:i,lang:c,fund:s}=Q(),l=bo(),g=c==="en",[d,x]=p.useState("all"),[m,b]=p.useState(!1),u=p.useMemo(()=>{var be;const h=(a.filters.day||"").slice(0,10),A=J=>!(!i&&a.continent!=="monde"&&J.continent!==a.continent||h&&(J.date||"").slice(0,10)!==h),U=e.filter(J=>A(J)&&De(J)&&(!i||J.kind!=="target"||Ee(J)!==5)),ee=i&&(((be=l==null?void 0:l.ed)==null?void 0:be.ops)||[]).length?l.ed.ops.map(J=>ya(J,c)).filter(J=>!!J).map(J=>(J.briefOnly=!0,J)).filter(J=>!h||(J.date||"").slice(0,10)===h):[],E=e.filter(J=>A(J)&&J.kind==="op"&&(h?!0:bt(J.date)<=ua)),I=i?ee.length?ee:E.filter(J=>{const he=(s||"").trim().toLowerCase();if(!he)return!1;const ue=J.match||null;return ue?Object.keys(ue).map(ge=>ge.trim().toLowerCase()).includes(he):!1}):E,D=h||new Date().toISOString().slice(0,10),B=J=>{const he=Ga(J);return he==="ma"?0:he==="levees"?1:2};I.sort((J,he)=>{const ue=B(J)-B(he);if(ue)return ue;const ge=(J.date||"").slice(0,10)===D?0:1,_=(he.date||"").slice(0,10)===D?0:1;return ge!==_?ge-_:(he.amountEur||0)-(J.amountEur||0)});const te=new Set,ae=[];for(const J of[...I,...zn(U,{key:"signal",dir:-1})]){const he=J.id||J.name;!he||te.has(he)||(te.add(he),ae.push(J))}return i&&ae.length===0?e.filter(he=>A(he)&&bt(he.date)<=ua).sort((he,ue)=>(ue.date||"").localeCompare(he.date||"")).slice(0,80):ae},[e,a.continent,a.filters.day,i,s,c,l]),y=p.useMemo(()=>{const h={};for(const A of u){const U=Ga(A);h[U]=(h[U]||0)+1}return h},[u]),w=p.useMemo(()=>d==="all"?u:u.filter(h=>Ga(h)===d),[u,d]),f=p.useMemo(()=>w.slice(0,fl),[w]),v=w.length-f.length,j=p.useRef(null);p.useEffect(()=>{var I,D;const h=j.current;if(!h)return;const A=()=>{const B=h.scrollWidth;B<200||(h.style.animationDuration=Math.max(18,Math.round(B/130))+"s")};A();const U=requestAnimationFrame(A),ee=window.setTimeout(A,1200);let E=!0;return(D=(I=document.fonts)==null?void 0:I.ready)==null||D.then(()=>{E&&A()}),()=>{E=!1,cancelAnimationFrame(U),window.clearTimeout(ee)}},[f.length,d]);const k=h=>h==="all"?u.length:y[h]||0,N=h=>{if(h==="all")return g?"All":"Tout";if(h.startsWith("sig:"))return yo[g?"en":"fr"][h.slice(4)]||"🔔";if(h.startsWith("news:")){const A=h.slice(5);return Fi[A]?Ri(A,g?"en":"fr"):h}return hl[g?"en":"fr"][h]},S=[{k:"all"}],C=["ma","levees"].filter(h=>k(h)>0||h===d);if(C.length){S.push({g:g?"Deals":"Opérations"});for(const h of C)S.push({k:h})}const L=["nominations","recrutements"].filter(h=>k(h)>0||h===d),q=Li.filter(h=>h!=="media").map(h=>"news:"+h).filter(h=>k(h)>0||h===d),M=k("actualites")>0||d==="actualites"?["actualites"]:[];if(L.length||q.length||M.length){S.push({g:g?"News":"Actualités"});for(const h of L)S.push({k:h});for(const h of q)S.push({k:h});for(const h of M)S.push({k:h})}const R=gl.map(h=>"sig:"+h).filter(h=>k(h)>0||h===d);if(R.length){S.push({g:g?"Signals (your engines)":"Signaux (vos moteurs)"});for(const h of R)S.push({k:h})}const $=h=>{try{return new Date(h+"T12:00:00Z").toLocaleDateString(g?"en-GB":"fr-FR",{day:"numeric",month:"long"})}catch{return h}},F=(()=>{const h=(a.filters.day||"").slice(0,10),A=!i&&a.continent!=="monde"&&o?g?` Scope: ${o}.`:` Périmètre : ${o}.`:"";return h?(g?`LIVE covers the events of ${$(h)}.`:`Le LIVE regroupe les événements du ${$(h)}.`)+A:(g?`LIVE covers the still-open signals and the deals of the last ${ua} days.`:`Le LIVE regroupe les signaux encore ouverts et les opérations des ${ua} derniers jours.`)+A})(),O=h=>f.map(A=>t.jsxs("button",{type:"button",className:"tk"+(_e(A)?" spent":""),onClick:U=>{const ee=A.briefOnly===!0;try{window.dispatchEvent(new CustomEvent("ppmap:focus",{detail:{id:ee?"":A.id,name:A.name,url:A.url||"",text:A.tagline||A.headline||"",card:A.card}}))}catch{}if(ee||n({type:"focus",id:A.id}),a.dens!=="liste"){const E=U.currentTarget.getBoundingClientRect();n({type:"popup",id:A.id,anchor:{x:E.left+E.width/2,y:E.bottom}})}},title:A.name+(A.tagline?" — "+A.tagline:""),children:[t.jsx(Et,{o:A}),t.jsxs("span",{className:"who",children:[t.jsx(ni,{o:A}),t.jsx("span",{className:"co",children:A.name})]}),typeof A.amountEur=="number"&&A.amountEur>0&&t.jsx("span",{className:"am",children:tp(A.amountEur)}),A.sector&&t.jsx("span",{className:"mt",children:A.sector}),t.jsx(Pa,{o:A}),t.jsx("span",{className:"tkgo",children:"→"})]},h+(A.id||A.name))).concat(v>0?[t.jsx("span",{className:"tk quiet",children:g?`+ ${v} more — filter by section to see them`:`+ ${v} autres — filtrez par rubrique pour les voir`},h+":more")]:[]);return t.jsxs("div",{className:"ticker",children:[t.jsxs("span",{className:"lbl",children:[t.jsx("i",{}),r.live]}),t.jsxs("span",{className:"tkfil",onBlur:h=>{h.currentTarget.contains(h.relatedTarget)||b(!1)},children:[t.jsxs("button",{type:"button",className:"tkfilb","aria-expanded":m,onClick:()=>b(h=>!h),children:[N(d),t.jsx("b",{children:k(d)}),t.jsx("span",{"aria-hidden":"true",children:"▾"})]}),t.jsxs("div",{className:"tkfilm",hidden:!m,children:[t.jsx("span",{className:"tkfilscope",children:F}),S.map(h=>"g"in h?t.jsx("span",{className:"tkfilg",children:h.g},h.g):t.jsxs("button",{type:"button","aria-pressed":h.k===d,onClick:()=>{x(h.k),b(!1)},children:[N(h.k),t.jsx("b",{children:k(h.k)})]},h.k))]})]}),t.jsx("div",{className:"win",children:f.length?t.jsxs("div",{className:"run",ref:j,children:[O(0),O(1)]}):t.jsx("div",{className:"run",style:{animation:"none"},children:t.jsx("span",{className:"tk quiet",children:r.liveQuiet(o)})})}),!!l&&t.jsxs("button",{type:"button",className:"tk-edito",title:g?"Show today's editorial":"Afficher Edito du jour",onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:edito"))}catch{}},children:["📖 ",g?"Today's editorial":"Edito du jour"]}),!!l&&t.jsx(vl,{isEn:g})]})}const bl=t.jsxs("svg",{viewBox:"0 0 16 16",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"1.4","aria-hidden":"true",children:[t.jsx("rect",{x:"2",y:"3.5",width:"12",height:"10.5",rx:"1.5"}),t.jsx("path",{d:"M2 6.5h12M5.5 2v3M10.5 2v3"})]});function vl({isEn:e}){const[a,r]=p.useState(()=>io());p.useEffect(()=>{const o=i=>{var c;return r(!!((c=i.detail)!=null&&c.open))};return window.addEventListener(Ea,o),()=>window.removeEventListener(Ea,o)},[]);const n=a?e?"Hide the days":"Masquer les jours":e?"Show the days":"Voir les jours";return t.jsx("button",{type:"button",className:"dytog","aria-pressed":a,title:n,"aria-label":n,onClick:()=>Mi(!a),children:bl})}const qn="+33 6 83 10 72 86",Aa="alexandre@proplace.co",wo=`tel:${qn.replace(/[^\d+]/g,"")}`;function yl(){return null}class st extends p.Component{constructor(){super(...arguments);_n(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(r,n){console.error(`[atl2] bandeau « ${this.props.name} » en échec :`,r,n.componentStack)}render(){return this.state.dead?this.props.fallback??null:this.props.children}}const ko=[["Retenu","csKept"],["Analysé","csAnalysed"],["À trancher","csPending"],["Validé","csValidated"],["Écarté","csOut"]];function hr(e,a){if((Nt(e)||"").startsWith("CALL")&&Ee(e)===3)return[["Validé",a.csYes],["Écarté",a.csNo]];const n=Ee(e)>=2;return ko.filter(([o])=>!(n&&o==="Retenu")).map(([o,i])=>[o,a[i]])}const gr=e=>e==="Retenu"?"ret":e==="Analysé"?"ana":e==="À trancher"?"tra":e==="Validé"?"val":e==="Écarté"?"eca":"off",wl={ret:"#12A150",ana:"#3B82F6",tra:"#F59E0B",val:"#0E8A4F",eca:"#EF4444",off:"#94A3B8"};function kl({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:o,doAnalyse:i,memoQueued:c}=Q(),[s,l]=p.useState(""),[g,d]=p.useState(!1),[x,m]=p.useState(!1),b=p.useRef(null);if(p.useEffect(()=>{if(!x)return;const v=j=>{b.current&&!b.current.contains(j.target)&&(m(!1),d(!1))};return document.addEventListener("click",v,!0),()=>document.removeEventListener("click",v,!0)},[x]),!r.pipe||!n||r.lockActions||e.kind==="op")return null;const u=(e.ceoStatus||"").trim(),y=async v=>{if(s)return;if(v==="Analysé"&&!e.memoUrl){d(!0);return}l(v);const j=(hr(e,a).find(([N])=>N===v)||[v,v])[1],k=await o(e,v,{msg:a.csMoved(e.name,j)});l(""),k&&(d(!1),m(!1))},w=hr(e,a),f=v=>(w.find(([j])=>j===v)||[])[1]||v;return w.length===2?t.jsx("span",{className:"rstat rst2",onClick:v=>v.stopPropagation(),children:w.map(([v,j])=>t.jsx("button",{type:"button",className:"rsd "+(v==="Validé"?"yes":"no")+(s===v?" busy":""),disabled:!!s,onClick:()=>{y(v)},children:j},v))}):t.jsxs("span",{className:"rstat"+(x||g?" rs-open":""),ref:b,onClick:v=>v.stopPropagation(),children:[t.jsx("button",{type:"button","aria-expanded":x,disabled:!!s,title:a.csLabel,className:"rsel rs-"+gr(u),onClick:()=>{m(v=>!v),d(!1)},children:s?f(s)+"…":u?f(u):a.csNone}),x&&!g&&t.jsx("span",{className:"rsmenu",role:"listbox",children:w.map(([v,j])=>t.jsxs("button",{type:"button",role:"option","aria-selected":u===v,className:"rsopt"+(u===v?" on":"")+(s===v?" busy":""),disabled:!!s,onClick:()=>{if(v===u){m(!1);return}y(v)},children:[t.jsx("i",{className:"pt2",style:{background:wl[gr(v)]}}),j]},v))}),g&&t.jsx("span",{className:"rstm",children:t.jsxs("span",{className:"rstask",children:[t.jsx("b",{children:a.csAnaNeedMemo}),t.jsx("button",{type:"button",className:"rsta pri",disabled:c.has(e.id),onClick:()=>{i(e),d(!1),m(!1)},children:c.has(e.id)?a.actMemoQueue:a.csAnaRun}),t.jsx("button",{type:"button",className:"rsta",onClick:()=>{(async()=>{l("Analysé");const v=await o(e,"Analysé");l(""),v&&(d(!1),m(!1))})()},children:a.csAnaAnyway})]})})]})}function jl({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:o}=Q(),[i,c]=p.useState(""),[s,l]=p.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const g=(e.ceoStatus||"").trim(),d=(Nt(e)||"").startsWith("CALL")&&Ee(e)===3,x=Ee(e)>=2,m=async u=>{if(i||u==="Analysé"&&!e.memoUrl&&!window.confirm(a.csAnaConfirm))return;c(u);const y=await o(e,u);c(""),y&&(l(!0),setTimeout(()=>l(!1),2200))},b=d?[["Validé",a.csYes],["Écarté",a.csNo]]:ko.filter(([u])=>!(x&&u==="Retenu")).map(([u,y])=>[u,a[y]]);return t.jsxs("div",{className:"csp",onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{className:"csrow",children:[t.jsx("span",{className:"cslb",children:a.csLabel}),b.map(([u,y])=>t.jsx("button",{type:"button",className:"csb"+(g===u?" on":"")+(i===u?" busy":""),disabled:!!i,onClick:()=>{m(u)},children:y},u)),s&&t.jsx("span",{className:"csok",children:a.csSaved})]}),t.jsx(El,{o:e})]})}function El({o:e}){const{t:a,saveNote:r,flash:n}=Q(),[o,i]=p.useState(e.ceoNote||""),[c,s]=p.useState(!1),[l,g]=p.useState(!1),d=o.trim()!==(e.ceoNote||"").trim(),x=async()=>{if(c||!d)return;s(!0);const m=await r(e,o.trim());s(!1),m&&(g(!0),setTimeout(()=>g(!1),2200),n(a.csNoteSaved))};return t.jsxs("div",{className:"csnote",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:a.csNotePh,value:o,disabled:c,onChange:m=>i(m.target.value),onKeyDown:m=>{m.key==="Enter"&&x()}}),t.jsx("button",{type:"button",disabled:c||!d,onClick:()=>{x()},children:l?a.csNoteSaved:a.csNoteOk})]})}function xr({placeholder:e,onDone:a}){const{t:r}=Q(),[n,o]=p.useState("");return t.jsxs("div",{className:"csnote why",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:e,value:n,autoFocus:!0,onChange:i=>o(i.target.value),onKeyDown:i=>{i.key==="Enter"&&a(n.trim()),i.key==="Escape"&&a("")},onBlur:()=>{n.trim()||a("")}}),t.jsx("button",{type:"button",onClick:()=>a(n.trim()),children:r.whySend})]})}function Nl({o:e}){var w;const{t:a,token:r,caps:n,canWrite:o,stageOf:i,setStage:c,flashErr:s}=Q(),[l,g]=p.useState(!1);if(!n.pipe||!o||n.lockActions||Ee(e)!==4)return null;const d=i(e),x=(d==null?void 0:d.stage)||"todo",m=async f=>{if(l||f===x)return;g(!0);const v=d;c(e,{stage:f,stamps:(d==null?void 0:d.stamps)||{}});const j=Math.max(Date.now(),br+=1);br=j;const k=await Di(r,{company:e.name||"",stage:f,cts:j,deal_id:e.airtableId,check_id:e.checkId});g(!1),!k.stale&&(k.ok||(c(e,v),s(a.actErr)))},b=(w=d==null?void 0:d.stamps)==null?void 0:w.sent,u=b?Math.floor((Date.now()-Date.parse(b))/864e5):0,y=x==="sent"&&b&&u>=4;return t.jsxs("div",{className:"stg",onClick:f=>f.stopPropagation(),children:[t.jsx("span",{className:"stglb",children:a.stgLabel}),a.stg.map(([f,v])=>t.jsx("button",{type:"button",className:"stgb"+(x===f?" on":""),disabled:l,onClick:()=>{m(f)},children:v},f)),y&&t.jsx("span",{className:"stgj4",children:a.j4Badge(u)})]})}let br=0;const Gt=8,jt=360;function vr({text:e}){const a=e.split(/\*\*(.+?)\*\*/g);return t.jsx(t.Fragment,{children:a.map((r,n)=>n%2?t.jsx("b",{children:r},n):t.jsx("span",{children:r},n))})}function yr({text:e}){const a=(e||"").split(`
`).map(n=>n.trim()).filter(Boolean),r=a.filter(n=>n.startsWith("·"));return t.jsxs(t.Fragment,{children:[a.filter(n=>!n.startsWith("·")).map((n,o)=>t.jsx("p",{children:t.jsx(vr,{text:n})},"p"+o)),r.length>0&&t.jsx("ul",{className:"tour-ul",children:r.map((n,o)=>t.jsx("li",{children:t.jsx(vr,{text:n.replace(/^·\s*/,"")})},"l"+o))})]})}function Sl({steps:e,onClose:a}){const{t:r,dispatch:n,counts:o,st:i}=Q(),[c,s]=p.useState(0),[l,g]=p.useState(null),[d,x]=p.useState([]),m=p.useRef(!1),b=p.useRef({ptab:i.ptab,dens:i.dens,modal:i.modal}),u=p.useRef(!1);p.useEffect(()=>{const C=b.current;return()=>{u.current||(n({type:"ptab",tab:C.ptab}),n({type:"dens",dens:C.dens}),n({type:"modal",modal:C.modal}))}},[]),p.useEffect(()=>{m.current||(m.current=!0,x(e.filter(C=>!!document.querySelector(C.need||C.sel))))},[e]);const y=d[c],w=c>=d.length;p.useEffect(()=>{if(y&&(y.ptab!==void 0&&i.ptab!==y.ptab&&n({type:"ptab",tab:y.ptab}),y.dens&&i.dens!==y.dens&&n({type:"dens",dens:y.dens}),i.modal!==(y.modal??null)&&n({type:"modal",modal:y.modal??null}),y.click)){const C=y.click,L=window.setTimeout(()=>{const q=document.querySelector(C);q&&q.getAttribute("aria-selected")!=="true"&&q.click()},60);return()=>window.clearTimeout(L)}},[c,y]);const f=p.useRef(-1),v=p.useCallback(()=>{if(!y){g(null);return}const C=M=>{if(!M)return null;for(const R of document.querySelectorAll(M)){const $=R.getBoundingClientRect();if($.width>1&&$.height>1)return R}return null},L=C(y.sel)||C(y.need);if(!L){g(null);return}f.current!==c&&(f.current=c,L.scrollIntoView({block:"nearest",behavior:"smooth"}));const q=L.getBoundingClientRect();g(M=>M&&Math.abs(M.top-q.top)<1&&Math.abs(M.left-q.left)<1&&Math.abs(M.width-q.width)<1&&Math.abs(M.height-q.height)<1?M:q)},[y,c]);p.useLayoutEffect(()=>{v();const C=[90,300,700,1300].map(M=>window.setTimeout(v,M)),L=window.setInterval(v,400),q=()=>v();return window.addEventListener("scroll",q,!0),window.addEventListener("resize",q),()=>{C.forEach(M=>window.clearTimeout(M)),window.clearInterval(L),window.removeEventListener("scroll",q,!0),window.removeEventListener("resize",q)}},[v]);const j=p.useRef(a);if(j.current=a,p.useEffect(()=>{const C=L=>{L.key==="Escape"?(L.preventDefault(),L.stopPropagation(),j.current()):L.key==="ArrowRight"?s(q=>q+1):L.key==="ArrowLeft"&&s(q=>Math.max(0,q-1))};return document.addEventListener("keydown",C,!0),()=>document.removeEventListener("keydown",C,!0)},[]),!d.length)return null;let k=null;const N=C=>()=>{u.current=!0,n({type:"modal",modal:null}),C()};if(w){const C=o[3]||0;C>0?k={title:C===1?r.ahaATitle1:r.ahaATitleN(C),body:r.ahaABody,btn:r.ahaABtn,go:N(()=>{n({type:"ptab",tab:3}),a()})}:(o[1]||0)>0?k={title:r.ahaRetTitle(o[1]||0),body:r.ahaRetBody,btn:r.ahaRetBtn,go:N(()=>{n({type:"ptab",tab:1}),a()})}:(o[0]||0)>0?k={title:r.ahaEvalTitle(o[0]||0),body:r.ahaEvalBody,btn:r.ahaEvalBtn,go:N(()=>{n({type:"ptab",tab:0}),a()})}:k={title:r.ahaCTitle,body:r.ahaCBody,btn:r.ahaCBtn,go:N(()=>{n({type:"modal",modal:"crit"}),a()})}}let S={left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:jt};if(!w&&l){const C=l.bottom+14,L=window.innerHeight-C;let q=L>190?C:Math.max(12,l.top-200),M=Math.min(Math.max(12,l.left+l.width/2-jt/2),window.innerWidth-jt-12);L<=190&&l.top<212&&(window.innerWidth-l.right>=jt+40?M=Math.min(l.right+26,window.innerWidth-jt-12):l.left>=jt+40&&(M=Math.max(12,l.left-jt-26)),q=Math.max(12,l.top-Gt)),S={left:M,top:q,width:jt}}return Ut.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"tour",role:"dialog","aria-modal":"true",children:[!w&&l&&t.jsx("div",{className:"tour-hole",style:{left:l.left-Gt,top:l.top-Gt,width:l.width+Gt*2,height:l.height+Gt*2}}),(w||!l)&&t.jsx("div",{className:"tour-veil"}),t.jsxs("div",{className:"tour-card"+(w?" fin":""),style:S,children:[w&&k?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:k.title}),t.jsx(yr,{text:k.body}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",onClick:()=>s(d.length-1),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:k.go,children:k.btn})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"tour-n",children:[r.tourStep(c+1,d.length),t.jsx("span",{className:"tour-bar",children:t.jsx("i",{style:{width:(c+1)/d.length*100+"%"}})})]}),t.jsx("h3",{children:y==null?void 0:y.title}),t.jsx(yr,{text:(y==null?void 0:y.body)||""}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",disabled:c===0,onClick:()=>s(C=>Math.max(0,C-1)),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:()=>s(C=>C+1),children:c===d.length-1?r.tourDone:r.tourNext})]})]}),t.jsx("button",{type:"button",className:"tour-x","aria-label":r.tourClose,title:r.tourClose,onClick:a,children:"×"})]})]})}),document.body)}function jo(e){let a="";for(const r of e){const n=(r.date||"").slice(0,10);n&&n>a&&(a=n)}return a}function Eo(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(e||"");return r?a==="en"?`${r[2]}/${r[3]}`:`${r[3]}/${r[2]}`:""}function Cl(){var L,q;const{dossiers:e,scopedAll:a,pipe:r,mode:n,t:o,st:i,lang:c,data:s,dispatch:l}=Q(),g=r?a:e,d=p.useMemo(()=>g.filter(M=>bt(M.date)===0&&M.kind==="target"),[g]),x=p.useMemo(()=>r?a.filter(M=>M.kind==="target"&&Ee(M)===0).slice().sort((M,R)=>(R.date||"").localeCompare(M.date||"")):[],[a,r]),m=p.useMemo(()=>d.filter(M=>r?Ee(M)===0:!_e(M)),[d,r]),b=r?x:m,u=r?a.length-x.length:d.length-m.length,y=r?a.length:d.length,w=y?Math.min(100,u/y*100):100,f=p.useMemo(()=>jo(g),[g]),v=!!f&&bt(f)>0,j=p.useMemo(()=>v?g.filter(M=>(M.date||"").slice(0,10)===f):[],[g,f,v]),k=typeof((L=s.stats)==null?void 0:L.kept_today)=="number"?s.stats.kept_today:null,N=typeof((q=s.stats)==null?void 0:q.screened_today)=="number"?s.stats.screened_today:d.length;let S;v?S=o.morningLast(j.length,x.length,Eo(f,c)):r?S=o.morningThesis(N,x.length,k):d.length?u===0?S=o.goalSourced(d.length):u>=d.length?S=o.goalCleared:S=o.goalDone(u,d.length):S=o.goalSourced(0);const C=()=>{if(!r){l({type:"pile",on:!0});return}l({type:"ptab",tab:0}),n==="client"&&x.length&&l({type:"chainStart",queue:x.map(M=>M.id)})};return t.jsxs("div",{className:"goal",children:[t.jsx("span",{className:"gtxt",title:r?o.morningEnginesTitle:void 0,dangerouslySetInnerHTML:{__html:S}}),t.jsx("div",{className:"pbar",children:t.jsx("i",{style:{width:w+"%"}})}),b.length>0&&t.jsx("button",{type:"button",className:"pilebtn",onClick:C,children:r?o.morningEval(b.length):i.pileMode?o.goalContinue(b.length):o.goalTreat}),t.jsx("span",{className:"gspace"})]})}function zl(){var U,ee;const{t:e,lang:a,st:r,dispatch:n,token:o,fund:i,data:c,dossiers:s,mode:l,doSync:g,startTour:d,flash:x,flashErr:m}=Q(),[b,u]=p.useState(null),[y,w]=p.useState(!0),[f,v]=p.useState([]),j=l==="client";p.useEffect(()=>{if(!o||!i)return;let E=!0;return w(!0),(async()=>{const[I,D]=await Promise.all([Nn(i),so(o)]);E&&(I&&u(I),w(!1),v(D))})(),()=>{E=!1}},[o,i]);const[k,N]=p.useState(!1),S=()=>{!j||k||!i||(N(!0),Ii(i).then(E=>{N(!1),E?x(e.identRepubDone):m(e.actErr)}))},C=(b==null?void 0:b.per_day)??null,L=((U=b==null?void 0:b.pool_order)==null?void 0:U.length)??0,q=f.filter(E=>E.status==="running").length,M=p.useMemo(()=>s.filter(E=>E.kind==="target"&&_e(E)).length,[s]),R=c.marketEstimate,$=typeof((ee=c.stats)==null?void 0:ee.screened)=="number"?c.stats.screened:M,F=R&&R>0?Math.min(100,Math.round($/R*100)):null,O=E=>E.toLocaleString(a==="en"?"en-US":"fr-FR"),h=(i||"P").split(/\s+/).map(E=>E[0]).join("").slice(0,2).toUpperCase(),A=(()=>{const E=Date.parse(c.generatedAt||"");if(Number.isNaN(E))return"";const I=new Date(E),D=B=>String(B).padStart(2,"0");return`${D(I.getDate())}/${D(I.getMonth()+1)} à ${D(I.getHours())}:${D(I.getMinutes())}`})();return t.jsxs("div",{className:"ident",children:[t.jsxs("div",{className:"idtop",children:[t.jsxs("span",{className:"brand",children:[t.jsx("b",{children:i?h:t.jsx("span",{className:"skt sk-ini"})}),t.jsx("i",{children:i||t.jsx("span",{className:"skt sk-nm"})})]}),t.jsx("h1",{children:i?e.identTitle(i):t.jsx("span",{className:"skt sk-h1","aria-label":e.loadingV2})}),t.jsx("span",{className:"idsp"}),A?t.jsx("span",{className:"idupd",children:e.identUpdatedAt(A)}):t.jsx("span",{className:"skt sk-upd"}),t.jsxs("span",{className:"icgrp",children:[t.jsx("button",{type:"button",className:"ic","data-tour":"export",title:e.identExport,onClick:()=>n({type:"modal",modal:"export"}),children:"📥"}),t.jsx("button",{type:"button",className:"ic","data-tour":"plug",title:e.identPlug,onClick:()=>n({type:"modal",modal:"plug"}),children:"🔌"}),t.jsx("button",{type:"button",className:"ic","data-tour":"alert",title:e.identBell,onClick:()=>n({type:"modal",modal:"alert"}),children:"🔔"}),t.jsx("button",{type:"button",className:"ic",title:e.identRepub,disabled:!j||k,onClick:S,children:k?"⏳":"📰"}),t.jsx("button",{type:"button",className:"ic",title:e.identSync,disabled:!j,onClick:g,children:"🔄"})]}),t.jsx("button",{type:"button",className:"ic",title:e.identHelp,onClick:()=>n({type:"modal",modal:"tuto"}),children:"?"}),t.jsx("button",{type:"button",className:"ic",title:e.tourPlayTitle,onClick:d,children:"▶"}),t.jsxs("span",{className:"isrch",children:["🔍",t.jsx("input",{placeholder:e.identSearch,value:r.filters.search,onChange:E=>n({type:"filters",patch:{search:E.target.value}})})]})]}),t.jsxs("div",{className:"idmain",children:[F===null&&$>0&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsx("span",{className:"ev",children:t.jsx("b",{children:O($)})})]}),F!==null&&R&&t.jsxs("span",{className:"cover",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("span",{className:"el",children:e.identCoverage}),t.jsxs("span",{className:"ev",children:[t.jsx("span",{className:"bar",children:t.jsx("i",{style:{width:F+"%"}})}),t.jsxs("b",{children:[F," %"]})]}),t.jsx("span",{className:"edv"}),t.jsx("span",{className:"ev",dangerouslySetInnerHTML:{__html:e.identCoverageOf($,R)}})]}),t.jsxs("span",{className:"engine",title:e.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[t.jsx("span",{className:"el",children:e.identEngine}),C!==null&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"ev",children:[t.jsx("b",{className:"q",children:C})," ",e.identPerDay]}),t.jsx("span",{className:"edv"})]}),C===0&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"epause",title:e.identPauseTitle,children:e.identPause}),t.jsx("span",{className:"edv"})]}),q>0&&t.jsxs("span",{className:"ev",children:["⏳ ",q]})]}),t.jsxs("span",{className:"filec",title:e.queueTitle,onClick:()=>n({type:"modal",modal:"queue"}),children:[t.jsx("span",{className:"el",children:a==="en"?"Queue":"File"}),t.jsx("span",{className:"ego",children:y?e.identPendingWait:e.identPending(L)}),t.jsx("button",{type:"button",className:"ebell",title:e.memoAlertBtn,onClick:E=>{E.stopPropagation(),n({type:"modal",modal:"memoalert"})},children:"🔔"})]})]})]})}class Ft{constructor(){this._partials=new Float64Array(32),this._n=0}add(a){const r=this._partials;let n=0;for(let o=0;o<this._n&&o<32;o++){const i=r[o],c=a+i,s=Math.abs(a)<Math.abs(i)?a-(c-i):i-(c-a);s&&(r[n++]=s),a=c}return r[n]=a,this._n=n+1,this}valueOf(){const a=this._partials;let r=this._n,n,o,i,c=0;if(r>0){for(c=a[--r];r>0&&(n=c,o=a[--r],c=n+o,i=o-(c-n),!i););r>0&&(i<0&&a[r-1]<0||i>0&&a[r-1]>0)&&(o=i*2,n=c+o,o==n-c&&(c=n))}return c}}function*Al(e){for(const a of e)yield*a}function No(e){return Array.from(Al(e))}var je=1e-6,ve=Math.PI,tt=ve/2,wr=ve/4,nt=ve*2,ht=180/ve,Qe=ve/180,Ce=Math.abs,ql=Math.atan,aa=Math.atan2,Le=Math.cos,Fe=Math.sin,Tl=Math.sign||function(e){return e>0?1:e<0?-1:0},Ot=Math.sqrt;function Ll(e){return e>1?0:e<-1?ve:Math.acos(e)}function na(e){return e>1?tt:e<-1?-tt:Math.asin(e)}function at(){}function qa(e,a){e&&jr.hasOwnProperty(e.type)&&jr[e.type](e,a)}var kr={Feature:function(e,a){qa(e.geometry,a)},FeatureCollection:function(e,a){for(var r=e.features,n=-1,o=r.length;++n<o;)qa(r[n].geometry,a)}},jr={Sphere:function(e,a){a.sphere()},Point:function(e,a){e=e.coordinates,a.point(e[0],e[1],e[2])},MultiPoint:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)e=r[n],a.point(e[0],e[1],e[2])},LineString:function(e,a){ln(e.coordinates,a,0)},MultiLineString:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)ln(r[n],a,0)},Polygon:function(e,a){Er(e.coordinates,a)},MultiPolygon:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)Er(r[n],a)},GeometryCollection:function(e,a){for(var r=e.geometries,n=-1,o=r.length;++n<o;)qa(r[n],a)}};function ln(e,a,r){var n=-1,o=e.length-r,i;for(a.lineStart();++n<o;)i=e[n],a.point(i[0],i[1],i[2]);a.lineEnd()}function Er(e,a){var r=-1,n=e.length;for(a.polygonStart();++r<n;)ln(e[r],a,1);a.polygonEnd()}function Dt(e,a){e&&kr.hasOwnProperty(e.type)?kr[e.type](e,a):qa(e,a)}function dn(e){return[aa(e[1],e[0]),na(e[2])]}function _t(e){var a=e[0],r=e[1],n=Le(r);return[n*Le(a),n*Fe(a),Fe(r)]}function ma(e,a){return e[0]*a[0]+e[1]*a[1]+e[2]*a[2]}function Ta(e,a){return[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]]}function Ya(e,a){e[0]+=a[0],e[1]+=a[1],e[2]+=a[2]}function fa(e,a){return[e[0]*a,e[1]*a,e[2]*a]}function cn(e){var a=Ot(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=a,e[1]/=a,e[2]/=a}function pn(e,a){function r(n,o){return n=e(n,o),a(n[0],n[1])}return e.invert&&a.invert&&(r.invert=function(n,o){return n=a.invert(n,o),n&&e.invert(n[0],n[1])}),r}function un(e,a){return Ce(e)>ve&&(e-=Math.round(e/nt)*nt),[e,a]}un.invert=un;function Fl(e,a,r){return(e%=nt)?a||r?pn(Sr(e),Cr(a,r)):Sr(e):a||r?Cr(a,r):un}function Nr(e){return function(a,r){return a+=e,Ce(a)>ve&&(a-=Math.round(a/nt)*nt),[a,r]}}function Sr(e){var a=Nr(e);return a.invert=Nr(-e),a}function Cr(e,a){var r=Le(e),n=Fe(e),o=Le(a),i=Fe(a);function c(s,l){var g=Le(l),d=Le(s)*g,x=Fe(s)*g,m=Fe(l),b=m*r+d*n;return[aa(x*o-b*i,d*r-m*n),na(b*o+x*i)]}return c.invert=function(s,l){var g=Le(l),d=Le(s)*g,x=Fe(s)*g,m=Fe(l),b=m*o-x*i;return[aa(x*o+m*i,d*r+b*n),na(b*r-d*n)]},c}function Rl(e,a,r,n,o,i){if(r){var c=Le(a),s=Fe(a),l=n*r;o==null?(o=a+n*nt,i=a-l/2):(o=zr(c,o),i=zr(c,i),(n>0?o<i:o>i)&&(o+=n*nt));for(var g,d=o;n>0?d>i:d<i;d-=l)g=dn([c,-s*Le(d),-s*Fe(d)]),e.point(g[0],g[1])}}function zr(e,a){a=_t(a),a[0]-=e,cn(a);var r=Ll(-a[1]);return((-a[2]<0?-r:r)+nt-je)%nt}function So(){var e=[],a;return{point:function(r,n,o){a.push([r,n,o])},lineStart:function(){e.push(a=[])},lineEnd:at,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],a=null,r}}}function ka(e,a){return Ce(e[0]-a[0])<je&&Ce(e[1]-a[1])<je}function ha(e,a,r,n){this.x=e,this.z=a,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function Co(e,a,r,n,o){var i=[],c=[],s,l;if(e.forEach(function(u){if(!((y=u.length-1)<=0)){var y,w=u[0],f=u[y],v;if(ka(w,f)){if(!w[2]&&!f[2]){for(o.lineStart(),s=0;s<y;++s)o.point((w=u[s])[0],w[1]);o.lineEnd();return}f[0]+=2*je}i.push(v=new ha(w,u,null,!0)),c.push(v.o=new ha(w,null,v,!1)),i.push(v=new ha(f,u,null,!1)),c.push(v.o=new ha(f,null,v,!0))}}),!!i.length){for(c.sort(a),Ar(i),Ar(c),s=0,l=c.length;s<l;++s)c[s].e=r=!r;for(var g=i[0],d,x;;){for(var m=g,b=!0;m.v;)if((m=m.n)===g)return;d=m.z,o.lineStart();do{if(m.v=m.o.v=!0,m.e){if(b)for(s=0,l=d.length;s<l;++s)o.point((x=d[s])[0],x[1]);else n(m.x,m.n.x,1,o);m=m.n}else{if(b)for(d=m.p.z,s=d.length-1;s>=0;--s)o.point((x=d[s])[0],x[1]);else n(m.x,m.p.x,-1,o);m=m.p}m=m.o,d=m.z,b=!b}while(!m.v);o.lineEnd()}}}function Ar(e){if(a=e.length){for(var a,r=0,n=e[0],o;++r<a;)n.n=o=e[r],o.p=n,n=o;n.n=o=e[0],o.p=n}}function Qa(e){return Ce(e[0])<=ve?e[0]:Tl(e[0])*((Ce(e[0])+ve)%nt-ve)}function Ol(e,a){var r=Qa(a),n=a[1],o=Fe(n),i=[Fe(r),-Le(r),0],c=0,s=0,l=new Ft;o===1?n=tt+je:o===-1&&(n=-tt-je);for(var g=0,d=e.length;g<d;++g)if(m=(x=e[g]).length)for(var x,m,b=x[m-1],u=Qa(b),y=b[1]/2+wr,w=Fe(y),f=Le(y),v=0;v<m;++v,u=k,w=S,f=C,b=j){var j=x[v],k=Qa(j),N=j[1]/2+wr,S=Fe(N),C=Le(N),L=k-u,q=L>=0?1:-1,M=q*L,R=M>ve,$=w*S;if(l.add(aa($*q*Fe(M),f*C+$*Le(M))),c+=R?L+q*nt:L,R^u>=r^k>=r){var F=Ta(_t(b),_t(j));cn(F);var O=Ta(i,F);cn(O);var h=(R^L>=0?-1:1)*na(O[2]);(n>h||n===h&&(F[0]||F[1]))&&(s+=R^L>=0?1:-1)}}return(c<-je||c<je&&l<-1e-12)^s&1}function zo(e,a,r,n){return function(o){var i=a(o),c=So(),s=a(c),l=!1,g,d,x,m={point:b,lineStart:y,lineEnd:w,polygonStart:function(){m.point=f,m.lineStart=v,m.lineEnd=j,d=[],g=[]},polygonEnd:function(){m.point=b,m.lineStart=y,m.lineEnd=w,d=No(d);var k=Ol(g,n);d.length?(l||(o.polygonStart(),l=!0),Co(d,Dl,k,r,o)):k&&(l||(o.polygonStart(),l=!0),o.lineStart(),r(null,null,1,o),o.lineEnd()),l&&(o.polygonEnd(),l=!1),d=g=null},sphere:function(){o.polygonStart(),o.lineStart(),r(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function b(k,N){e(k,N)&&o.point(k,N)}function u(k,N){i.point(k,N)}function y(){m.point=u,i.lineStart()}function w(){m.point=b,i.lineEnd()}function f(k,N){x.push([k,N]),s.point(k,N)}function v(){s.lineStart(),x=[]}function j(){f(x[0][0],x[0][1]),s.lineEnd();var k=s.clean(),N=c.result(),S,C=N.length,L,q,M;if(x.pop(),g.push(x),x=null,!!C){if(k&1){if(q=N[0],(L=q.length-1)>0){for(l||(o.polygonStart(),l=!0),o.lineStart(),S=0;S<L;++S)o.point((M=q[S])[0],M[1]);o.lineEnd()}return}C>1&&k&2&&N.push(N.pop().concat(N.shift())),d.push(N.filter(Ml))}}return m}}function Ml(e){return e.length>1}function Dl(e,a){return((e=e.x)[0]<0?e[1]-tt-je:tt-e[1])-((a=a.x)[0]<0?a[1]-tt-je:tt-a[1])}const qr=zo(function(){return!0},Il,_l,[-ve,-tt]);function Il(e){var a=NaN,r=NaN,n=NaN,o;return{lineStart:function(){e.lineStart(),o=1},point:function(i,c){var s=i>0?ve:-ve,l=Ce(i-a);Ce(l-ve)<je?(e.point(a,r=(r+c)/2>0?tt:-tt),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(s,r),e.point(i,r),o=0):n!==s&&l>=ve&&(Ce(a-n)<je&&(a-=n*je),Ce(i-s)<je&&(i-=s*je),r=Pl(a,r,i,c),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(s,r),o=0),e.point(a=i,r=c),n=s},lineEnd:function(){e.lineEnd(),a=r=NaN},clean:function(){return 2-o}}}function Pl(e,a,r,n){var o,i,c=Fe(e-r);return Ce(c)>je?ql((Fe(a)*(i=Le(n))*Fe(r)-Fe(n)*(o=Le(a))*Fe(e))/(o*i*c)):(a+n)/2}function _l(e,a,r,n){var o;if(e==null)o=r*tt,n.point(-ve,o),n.point(0,o),n.point(ve,o),n.point(ve,0),n.point(ve,-o),n.point(0,-o),n.point(-ve,-o),n.point(-ve,0),n.point(-ve,o);else if(Ce(e[0]-a[0])>je){var i=e[0]<a[0]?ve:-ve;o=r*i/2,n.point(-i,o),n.point(0,o),n.point(i,o)}else n.point(a[0],a[1])}function Bl(e){var a=Le(e),r=2*Qe,n=a>0,o=Ce(a)>je;function i(d,x,m,b){Rl(b,e,r,m,d,x)}function c(d,x){return Le(d)*Le(x)>a}function s(d){var x,m,b,u,y;return{lineStart:function(){u=b=!1,y=1},point:function(w,f){var v=[w,f],j,k=c(w,f),N=n?k?0:g(w,f):k?g(w+(w<0?ve:-ve),f):0;if(!x&&(u=b=k)&&d.lineStart(),k!==b&&(j=l(x,v),(!j||ka(x,j)||ka(v,j))&&(v[2]=1)),k!==b)y=0,k?(d.lineStart(),j=l(v,x),d.point(j[0],j[1])):(j=l(x,v),d.point(j[0],j[1],2),d.lineEnd()),x=j;else if(o&&x&&n^k){var S;!(N&m)&&(S=l(v,x,!0))&&(y=0,n?(d.lineStart(),d.point(S[0][0],S[0][1]),d.point(S[1][0],S[1][1]),d.lineEnd()):(d.point(S[1][0],S[1][1]),d.lineEnd(),d.lineStart(),d.point(S[0][0],S[0][1],3)))}k&&(!x||!ka(x,v))&&d.point(v[0],v[1]),x=v,b=k,m=N},lineEnd:function(){b&&d.lineEnd(),x=null},clean:function(){return y|(u&&b)<<1}}}function l(d,x,m){var b=_t(d),u=_t(x),y=[1,0,0],w=Ta(b,u),f=ma(w,w),v=w[0],j=f-v*v;if(!j)return!m&&d;var k=a*f/j,N=-a*v/j,S=Ta(y,w),C=fa(y,k),L=fa(w,N);Ya(C,L);var q=S,M=ma(C,q),R=ma(q,q),$=M*M-R*(ma(C,C)-1);if(!($<0)){var F=Ot($),O=fa(q,(-M-F)/R);if(Ya(O,C),O=dn(O),!m)return O;var h=d[0],A=x[0],U=d[1],ee=x[1],E;A<h&&(E=h,h=A,A=E);var I=A-h,D=Ce(I-ve)<je,B=D||I<je;if(!D&&ee<U&&(E=U,U=ee,ee=E),B?D?U+ee>0^O[1]<(Ce(O[0]-h)<je?U:ee):U<=O[1]&&O[1]<=ee:I>ve^(h<=O[0]&&O[0]<=A)){var te=fa(q,(-M+F)/R);return Ya(te,C),[O,dn(te)]}}}function g(d,x){var m=n?e:ve-e,b=0;return d<-m?b|=1:d>m&&(b|=2),x<-m?b|=4:x>m&&(b|=8),b}return zo(c,s,i,n?[0,-e]:[-ve,e-ve])}function $l(e,a,r,n,o,i){var c=e[0],s=e[1],l=a[0],g=a[1],d=0,x=1,m=l-c,b=g-s,u;if(u=r-c,!(!m&&u>0)){if(u/=m,m<0){if(u<d)return;u<x&&(x=u)}else if(m>0){if(u>x)return;u>d&&(d=u)}if(u=o-c,!(!m&&u<0)){if(u/=m,m<0){if(u>x)return;u>d&&(d=u)}else if(m>0){if(u<d)return;u<x&&(x=u)}if(u=n-s,!(!b&&u>0)){if(u/=b,b<0){if(u<d)return;u<x&&(x=u)}else if(b>0){if(u>x)return;u>d&&(d=u)}if(u=i-s,!(!b&&u<0)){if(u/=b,b<0){if(u>x)return;u>d&&(d=u)}else if(b>0){if(u<d)return;u<x&&(x=u)}return d>0&&(e[0]=c+d*m,e[1]=s+d*b),x<1&&(a[0]=c+x*m,a[1]=s+x*b),!0}}}}}var Yt=1e9,ga=-Yt;function Ul(e,a,r,n){function o(g,d){return e<=g&&g<=r&&a<=d&&d<=n}function i(g,d,x,m){var b=0,u=0;if(g==null||(b=c(g,x))!==(u=c(d,x))||l(g,d)<0^x>0)do m.point(b===0||b===3?e:r,b>1?n:a);while((b=(b+x+4)%4)!==u);else m.point(d[0],d[1])}function c(g,d){return Ce(g[0]-e)<je?d>0?0:3:Ce(g[0]-r)<je?d>0?2:1:Ce(g[1]-a)<je?d>0?1:0:d>0?3:2}function s(g,d){return l(g.x,d.x)}function l(g,d){var x=c(g,1),m=c(d,1);return x!==m?x-m:x===0?d[1]-g[1]:x===1?g[0]-d[0]:x===2?g[1]-d[1]:d[0]-g[0]}return function(g){var d=g,x=So(),m,b,u,y,w,f,v,j,k,N,S,C={point:L,lineStart:$,lineEnd:F,polygonStart:M,polygonEnd:R};function L(h,A){o(h,A)&&d.point(h,A)}function q(){for(var h=0,A=0,U=b.length;A<U;++A)for(var ee=b[A],E=1,I=ee.length,D=ee[0],B,te,ae=D[0],be=D[1];E<I;++E)B=ae,te=be,D=ee[E],ae=D[0],be=D[1],te<=n?be>n&&(ae-B)*(n-te)>(be-te)*(e-B)&&++h:be<=n&&(ae-B)*(n-te)<(be-te)*(e-B)&&--h;return h}function M(){d=x,m=[],b=[],S=!0}function R(){var h=q(),A=S&&h,U=(m=No(m)).length;(A||U)&&(g.polygonStart(),A&&(g.lineStart(),i(null,null,1,g),g.lineEnd()),U&&Co(m,s,h,i,g),g.polygonEnd()),d=g,m=b=u=null}function $(){C.point=O,b&&b.push(u=[]),N=!0,k=!1,v=j=NaN}function F(){m&&(O(y,w),f&&k&&x.rejoin(),m.push(x.result())),C.point=L,k&&d.lineEnd()}function O(h,A){var U=o(h,A);if(b&&u.push([h,A]),N)y=h,w=A,f=U,N=!1,U&&(d.lineStart(),d.point(h,A));else if(U&&k)d.point(h,A);else{var ee=[v=Math.max(ga,Math.min(Yt,v)),j=Math.max(ga,Math.min(Yt,j))],E=[h=Math.max(ga,Math.min(Yt,h)),A=Math.max(ga,Math.min(Yt,A))];$l(ee,E,e,a,r,n)?(k||(d.lineStart(),d.point(ee[0],ee[1])),d.point(E[0],E[1]),U||d.lineEnd(),S=!1):U&&(d.lineStart(),d.point(h,A),S=!1)}v=h,j=A,k=U}return C}}const mn=e=>e;var Ka=new Ft,fn=new Ft,Ao,qo,hn,gn,gt={point:at,lineStart:at,lineEnd:at,polygonStart:function(){gt.lineStart=Hl,gt.lineEnd=Wl},polygonEnd:function(){gt.lineStart=gt.lineEnd=gt.point=at,Ka.add(Ce(fn)),fn=new Ft},result:function(){var e=Ka/2;return Ka=new Ft,e}};function Hl(){gt.point=Vl}function Vl(e,a){gt.point=To,Ao=hn=e,qo=gn=a}function To(e,a){fn.add(gn*e-hn*a),hn=e,gn=a}function Wl(){To(Ao,qo)}var Bt=1/0,La=Bt,ra=-Bt,Fa=ra,Ra={point:Gl,lineStart:at,lineEnd:at,polygonStart:at,polygonEnd:at,result:function(){var e=[[Bt,La],[ra,Fa]];return ra=Fa=-(La=Bt=1/0),e}};function Gl(e,a){e<Bt&&(Bt=e),e>ra&&(ra=e),a<La&&(La=a),a>Fa&&(Fa=a)}var xn=0,bn=0,Qt=0,Oa=0,Ma=0,It=0,vn=0,yn=0,Kt=0,Lo,Fo,ut,mt,et={point:Rt,lineStart:Tr,lineEnd:Lr,polygonStart:function(){et.lineStart=Kl,et.lineEnd=Jl},polygonEnd:function(){et.point=Rt,et.lineStart=Tr,et.lineEnd=Lr},result:function(){var e=Kt?[vn/Kt,yn/Kt]:It?[Oa/It,Ma/It]:Qt?[xn/Qt,bn/Qt]:[NaN,NaN];return xn=bn=Qt=Oa=Ma=It=vn=yn=Kt=0,e}};function Rt(e,a){xn+=e,bn+=a,++Qt}function Tr(){et.point=Yl}function Yl(e,a){et.point=Ql,Rt(ut=e,mt=a)}function Ql(e,a){var r=e-ut,n=a-mt,o=Ot(r*r+n*n);Oa+=o*(ut+e)/2,Ma+=o*(mt+a)/2,It+=o,Rt(ut=e,mt=a)}function Lr(){et.point=Rt}function Kl(){et.point=Xl}function Jl(){Ro(Lo,Fo)}function Xl(e,a){et.point=Ro,Rt(Lo=ut=e,Fo=mt=a)}function Ro(e,a){var r=e-ut,n=a-mt,o=Ot(r*r+n*n);Oa+=o*(ut+e)/2,Ma+=o*(mt+a)/2,It+=o,o=mt*e-ut*a,vn+=o*(ut+e),yn+=o*(mt+a),Kt+=o*3,Rt(ut=e,mt=a)}function Oo(e){this._context=e}Oo.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,a){switch(this._point){case 0:{this._context.moveTo(e,a),this._point=1;break}case 1:{this._context.lineTo(e,a);break}default:{this._context.moveTo(e+this._radius,a),this._context.arc(e,a,this._radius,0,nt);break}}},result:at};var wn=new Ft,Ja,Mo,Do,Jt,Xt,oa={point:at,lineStart:function(){oa.point=Zl},lineEnd:function(){Ja&&Io(Mo,Do),oa.point=at},polygonStart:function(){Ja=!0},polygonEnd:function(){Ja=null},result:function(){var e=+wn;return wn=new Ft,e}};function Zl(e,a){oa.point=Io,Mo=Jt=e,Do=Xt=a}function Io(e,a){Jt-=e,Xt-=a,wn.add(Ot(Jt*Jt+Xt*Xt)),Jt=e,Xt=a}let Fr,Da,Rr,Or;class Mr{constructor(a){this._append=a==null?Po:ed(a),this._radius=4.5,this._=""}pointRadius(a){return this._radius=+a,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(a,r){switch(this._point){case 0:{this._append`M${a},${r}`,this._point=1;break}case 1:{this._append`L${a},${r}`;break}default:{if(this._append`M${a},${r}`,this._radius!==Rr||this._append!==Da){const n=this._radius,o=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,Rr=n,Da=this._append,Or=this._,this._=o}this._+=Or;break}}}result(){const a=this._;return this._="",a.length?a:null}}function Po(e){let a=1;this._+=e[0];for(const r=e.length;a<r;++a)this._+=arguments[a]+e[a]}function ed(e){const a=Math.floor(e);if(!(a>=0))throw new RangeError(`invalid digits: ${e}`);if(a>15)return Po;if(a!==Fr){const r=10**a;Fr=a,Da=function(o){let i=1;this._+=o[0];for(const c=o.length;i<c;++i)this._+=Math.round(arguments[i]*r)/r+o[i]}}return Da}function td(e,a){let r=3,n=4.5,o,i;function c(s){return s&&(typeof n=="function"&&i.pointRadius(+n.apply(this,arguments)),Dt(s,o(i))),i.result()}return c.area=function(s){return Dt(s,o(gt)),gt.result()},c.measure=function(s){return Dt(s,o(oa)),oa.result()},c.bounds=function(s){return Dt(s,o(Ra)),Ra.result()},c.centroid=function(s){return Dt(s,o(et)),et.result()},c.projection=function(s){return arguments.length?(o=s==null?(e=null,mn):(e=s).stream,c):e},c.context=function(s){return arguments.length?(i=s==null?(a=null,new Mr(r)):new Oo(a=s),typeof n!="function"&&i.pointRadius(n),c):a},c.pointRadius=function(s){return arguments.length?(n=typeof s=="function"?s:(i.pointRadius(+s),+s),c):n},c.digits=function(s){if(!arguments.length)return r;if(s==null)r=null;else{const l=Math.floor(s);if(!(l>=0))throw new RangeError(`invalid digits: ${s}`);r=l}return a===null&&(i=new Mr(r)),c},c.projection(e).digits(r).context(a)}function Tn(e){return function(a){var r=new kn;for(var n in e)r[n]=e[n];return r.stream=a,r}}function kn(){}kn.prototype={constructor:kn,point:function(e,a){this.stream.point(e,a)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Ln(e,a,r){var n=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),n!=null&&e.clipExtent(null),Dt(r,e.stream(Ra)),a(Ra.result()),n!=null&&e.clipExtent(n),e}function _o(e,a,r){return Ln(e,function(n){var o=a[1][0]-a[0][0],i=a[1][1]-a[0][1],c=Math.min(o/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),s=+a[0][0]+(o-c*(n[1][0]+n[0][0]))/2,l=+a[0][1]+(i-c*(n[1][1]+n[0][1]))/2;e.scale(150*c).translate([s,l])},r)}function ad(e,a,r){return _o(e,[[0,0],a],r)}function nd(e,a,r){return Ln(e,function(n){var o=+a,i=o/(n[1][0]-n[0][0]),c=(o-i*(n[1][0]+n[0][0]))/2,s=-i*n[0][1];e.scale(150*i).translate([c,s])},r)}function rd(e,a,r){return Ln(e,function(n){var o=+a,i=o/(n[1][1]-n[0][1]),c=-i*n[0][0],s=(o-i*(n[1][1]+n[0][1]))/2;e.scale(150*i).translate([c,s])},r)}var Dr=16,od=Le(30*Qe);function Ir(e,a){return+a?sd(e,a):id(e)}function id(e){return Tn({point:function(a,r){a=e(a,r),this.stream.point(a[0],a[1])}})}function sd(e,a){function r(n,o,i,c,s,l,g,d,x,m,b,u,y,w){var f=g-n,v=d-o,j=f*f+v*v;if(j>4*a&&y--){var k=c+m,N=s+b,S=l+u,C=Ot(k*k+N*N+S*S),L=na(S/=C),q=Ce(Ce(S)-1)<je||Ce(i-x)<je?(i+x)/2:aa(N,k),M=e(q,L),R=M[0],$=M[1],F=R-n,O=$-o,h=v*F-f*O;(h*h/j>a||Ce((f*F+v*O)/j-.5)>.3||c*m+s*b+l*u<od)&&(r(n,o,i,c,s,l,R,$,q,k/=C,N/=C,S,y,w),w.point(R,$),r(R,$,q,k,N,S,g,d,x,m,b,u,y,w))}}return function(n){var o,i,c,s,l,g,d,x,m,b,u,y,w={point:f,lineStart:v,lineEnd:k,polygonStart:function(){n.polygonStart(),w.lineStart=N},polygonEnd:function(){n.polygonEnd(),w.lineStart=v}};function f(L,q){L=e(L,q),n.point(L[0],L[1])}function v(){x=NaN,w.point=j,n.lineStart()}function j(L,q){var M=_t([L,q]),R=e(L,q);r(x,m,d,b,u,y,x=R[0],m=R[1],d=L,b=M[0],u=M[1],y=M[2],Dr,n),n.point(x,m)}function k(){w.point=f,n.lineEnd()}function N(){v(),w.point=S,w.lineEnd=C}function S(L,q){j(o=L,q),i=x,c=m,s=b,l=u,g=y,w.point=j}function C(){r(x,m,d,b,u,y,i,c,o,s,l,g,Dr,n),w.lineEnd=k,k()}return w}}var ld=Tn({point:function(e,a){this.stream.point(e*Qe,a*Qe)}});function dd(e){return Tn({point:function(a,r){var n=e(a,r);return this.stream.point(n[0],n[1])}})}function cd(e,a,r,n,o){function i(c,s){return c*=n,s*=o,[a+e*c,r-e*s]}return i.invert=function(c,s){return[(c-a)/e*n,(r-s)/e*o]},i}function Pr(e,a,r,n,o,i){if(!i)return cd(e,a,r,n,o);var c=Le(i),s=Fe(i),l=c*e,g=s*e,d=c/e,x=s/e,m=(s*r-c*a)/e,b=(s*a+c*r)/e;function u(y,w){return y*=n,w*=o,[l*y-g*w+a,r-g*y-l*w]}return u.invert=function(y,w){return[n*(d*y-x*w+m),o*(b-x*y-d*w)]},u}function pd(e){return ud(function(){return e})()}function ud(e){var a,r=150,n=480,o=250,i=0,c=0,s=0,l=0,g=0,d,x=0,m=1,b=1,u=null,y=qr,w=null,f,v,j,k=mn,N=.5,S,C,L,q,M;function R(h){return L(h[0]*Qe,h[1]*Qe)}function $(h){return h=L.invert(h[0],h[1]),h&&[h[0]*ht,h[1]*ht]}R.stream=function(h){return q&&M===h?q:q=ld(dd(d)(y(S(k(M=h)))))},R.preclip=function(h){return arguments.length?(y=h,u=void 0,O()):y},R.postclip=function(h){return arguments.length?(k=h,w=f=v=j=null,O()):k},R.clipAngle=function(h){return arguments.length?(y=+h?Bl(u=h*Qe):(u=null,qr),O()):u*ht},R.clipExtent=function(h){return arguments.length?(k=h==null?(w=f=v=j=null,mn):Ul(w=+h[0][0],f=+h[0][1],v=+h[1][0],j=+h[1][1]),O()):w==null?null:[[w,f],[v,j]]},R.scale=function(h){return arguments.length?(r=+h,F()):r},R.translate=function(h){return arguments.length?(n=+h[0],o=+h[1],F()):[n,o]},R.center=function(h){return arguments.length?(i=h[0]%360*Qe,c=h[1]%360*Qe,F()):[i*ht,c*ht]},R.rotate=function(h){return arguments.length?(s=h[0]%360*Qe,l=h[1]%360*Qe,g=h.length>2?h[2]%360*Qe:0,F()):[s*ht,l*ht,g*ht]},R.angle=function(h){return arguments.length?(x=h%360*Qe,F()):x*ht},R.reflectX=function(h){return arguments.length?(m=h?-1:1,F()):m<0},R.reflectY=function(h){return arguments.length?(b=h?-1:1,F()):b<0},R.precision=function(h){return arguments.length?(S=Ir(C,N=h*h),O()):Ot(N)},R.fitExtent=function(h,A){return _o(R,h,A)},R.fitSize=function(h,A){return ad(R,h,A)},R.fitWidth=function(h,A){return nd(R,h,A)},R.fitHeight=function(h,A){return rd(R,h,A)};function F(){var h=Pr(r,0,0,m,b,x).apply(null,a(i,c)),A=Pr(r,n-h[0],o-h[1],m,b,x);return d=Fl(s,l,g),C=pn(a,A),L=pn(d,C),S=Ir(C,N),O()}function O(){return q=M=null,R}return function(){return a=e.apply(this,arguments),R.invert=a.invert&&$,F()}}function Bo(e,a){var r=a*a,n=r*r;return[e*(.8707-.131979*r+n*(-.013791+n*(.003971*r-.001529*n))),a*(1.007226+r*(.015085+n*(-.044475+.028874*r-.005916*n)))]}Bo.invert=function(e,a){var r=a,n=25,o;do{var i=r*r,c=i*i;r-=o=(r*(1.007226+i*(.015085+c*(-.044475+.028874*i-.005916*c)))-a)/(1.007226+i*(.015085*3+c*(-.044475*7+.028874*9*i-.005916*11*c)))}while(Ce(o)>je&&--n>0);return[e/(.8707+(i=r*r)*(-.131979+i*(-.013791+i*i*i*(.003971-.001529*i)))),r]};function md(){return pd(Bo).scale(175.295)}function fd(e){return e}function hd(e){if(e==null)return fd;var a,r,n=e.scale[0],o=e.scale[1],i=e.translate[0],c=e.translate[1];return function(s,l){l||(a=r=0);var g=2,d=s.length,x=new Array(d);for(x[0]=(a+=s[0])*n+i,x[1]=(r+=s[1])*o+c;g<d;)x[g]=s[g],++g;return x}}function gd(e,a){for(var r,n=e.length,o=n-a;o<--n;)r=e[o],e[o++]=e[n],e[n]=r}function xd(e,a){return typeof a=="string"&&(a=e.objects[a]),a.type==="GeometryCollection"?{type:"FeatureCollection",features:a.geometries.map(function(r){return _r(e,r)})}:_r(e,a)}function _r(e,a){var r=a.id,n=a.bbox,o=a.properties==null?{}:a.properties,i=bd(e,a);return r==null&&n==null?{type:"Feature",properties:o,geometry:i}:n==null?{type:"Feature",id:r,properties:o,geometry:i}:{type:"Feature",id:r,bbox:n,properties:o,geometry:i}}function bd(e,a){var r=hd(e.transform),n=e.arcs;function o(d,x){x.length&&x.pop();for(var m=n[d<0?~d:d],b=0,u=m.length;b<u;++b)x.push(r(m[b],b));d<0&&gd(x,u)}function i(d){return r(d)}function c(d){for(var x=[],m=0,b=d.length;m<b;++m)o(d[m],x);return x.length<2&&x.push(x[0]),x}function s(d){for(var x=c(d);x.length<4;)x.push(x[0]);return x}function l(d){return d.map(s)}function g(d){var x=d.type,m;switch(x){case"GeometryCollection":return{type:x,geometries:d.geometries.map(g)};case"Point":m=i(d.coordinates);break;case"MultiPoint":m=d.coordinates.map(i);break;case"LineString":m=c(d.arcs);break;case"MultiLineString":m=d.arcs.map(c);break;case"Polygon":m=l(d.arcs);break;case"MultiPolygon":m=d.arcs.map(l);break;default:return null}return{type:x,coordinates:m}}return g(a)}const $o={US:[{k:["new york","nyc","brooklyn","manhattan"],ll:[-74,40.7]},{k:["san francisco","sf","palo alto","mountain view","menlo park","san jose","oakland"],ll:[-122.3,37.6]},{k:["los angeles","santa monica","irvine"],ll:[-118.2,34.1]},{k:["seattle","bellevue","redmond"],ll:[-122.3,47.6]},{k:["austin"],ll:[-97.7,30.3]},{k:["boston","cambridge"],ll:[-71.1,42.4]},{k:["chicago"],ll:[-87.6,41.9]},{k:["miami"],ll:[-80.2,25.8]},{k:["denver","boulder"],ll:[-105,39.7]},{k:["atlanta"],ll:[-84.4,33.7]},{k:["washington","arlington","dc"],ll:[-77,38.9]},{k:["dallas","houston"],ll:[-96.8,31.5]},{k:["salt lake","provo"],ll:[-111.9,40.8]},{k:["phoenix","tempe"],ll:[-112.1,33.4]}],CA:[{k:["toronto","waterloo"],ll:[-79.4,43.7]},{k:["montreal"],ll:[-73.6,45.5]},{k:["vancouver"],ll:[-123.1,49.3]},{k:["calgary"],ll:[-114.1,51]},{k:["ottawa"],ll:[-75.7,45.4]}],AU:[{k:["sydney"],ll:[151.2,-33.9]},{k:["melbourne"],ll:[145,-37.8]},{k:["brisbane"],ll:[153,-27.5]},{k:["perth"],ll:[115.9,-32]}],BR:[{k:["sao paulo"],ll:[-46.6,-23.5]},{k:["rio"],ll:[-43.2,-22.9]}],IN:[{k:["bengaluru","bangalore"],ll:[77.6,13]},{k:["mumbai"],ll:[72.9,19.1]},{k:["delhi","gurgaon","gurugram","noida"],ll:[77.2,28.6]},{k:["hyderabad"],ll:[78.5,17.4]},{k:["chennai"],ll:[80.3,13.1]}],CN:[{k:["beijing","pekin"],ll:[116.4,39.9]},{k:["shanghai"],ll:[121.5,31.2]},{k:["shenzhen","canton","guangzhou"],ll:[113.9,22.7]}],RU:[{k:["moscou","moscow"],ll:[37.6,55.8]},{k:["saint petersbourg","saint petersburg"],ll:[30.3,59.9]}]},vd=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim();function yd(e,a,r){const n=$o[e];if(!n||!n.length)return-1;const o=vd(a||"");if(o){for(let i=0;i<n.length;i++)if(n[i].k.some(c=>o.includes(c)))return i}return Math.floor(r*n.length)%n.length}let xa=null;function wd(){return xa||(xa=(async()=>{var e;try{const a=await fetch("/world/countries-110m.json");if(!a.ok)return null;const r=await a.json(),n=(e=r==null?void 0:r.objects)==null?void 0:e.countries;if(!n)return null;const o=xd(r,n),i=md().fitExtent([[8,8],[992,492]],{type:"Sphere"}),c=td(i),s=(o.features||[]).filter(d=>{var x;return(((x=d.properties)==null?void 0:x.name)||"")!=="Antarctica"}).map(d=>{var b;const x=((b=d.properties)==null?void 0:b.name)||"",m=c(d)||"";return m?{i2:Pi(x)||null,n:x,d:m}:null}).filter(d=>!!d);if(!s.length)return null;const l={};for(const[d,x]of Object.entries(_i)){const m=i(x);m&&(l[d]={x:m[0],y:m[1]})}const g={};for(const[d,x]of Object.entries($o)){const m=x.map(b=>i(b.ll)).filter(b=>!!b).map(([b,u])=>({x:b,y:u}));m.length&&(g[d]=m)}return{key:"monde",viewBox:"40 48 920 360",fr:"Monde",en:"World",countries:s,anchors:l,metros:g}}catch{return null}})(),xa)}function kd(e){const[a,r]=p.useState(null);return p.useEffect(()=>{if(!e||a)return;let n=!1;return wd().then(o=>{!n&&o&&r(o)}),()=>{n=!0}},[e,a]),a}const jd="8 40 984 210",Ed={"northam:US":{fx:.64,fy:.68,sx:.44,sy:.28},"northam:CA":{fx:.58,fy:.86,sx:.34,sy:.1},"oceania:AU":{fx:.72,fy:.62,sx:.34,sy:.3},"europe:RU":{fx:.18,fy:.62,sx:.14,sy:.3}},Br=["#8FA0B8","#9BD1B4","#5FB98C","#2E9A66","#0E8A44","#E2A5A5"];function $r(e){let a=2166136261;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function Nd(e,a){const[r,n]=p.useState(1);return p.useEffect(()=>{let o=!0,i=0;const c=()=>{var g;if(!o)return;const l=(g=e.current)==null?void 0:g.getScreenCTM();l&&l.a>0?n(l.a):i=requestAnimationFrame(c)};c();const s=new ResizeObserver(()=>c());return e.current&&s.observe(e.current),window.addEventListener("resize",c),()=>{o=!1,cancelAnimationFrame(i),s.disconnect(),window.removeEventListener("resize",c)}},[e,a]),r}function Ur({msgs:e}){const[a,r]=p.useState(0);p.useEffect(()=>{const o=window.setInterval(()=>r(i=>i+1),2400);return()=>window.clearInterval(o)},[]);const n=[[46,34],[52,41],[41,46],[57,30],[49,52],[36,38],[61,45],[44,27]];return t.jsxs("div",{className:"mapskel","aria-hidden":"true",children:[n.map(([o,i],c)=>t.jsx("i",{style:{left:o+"%",top:i+"%","--d":c*.18+"s"}},c)),t.jsx("span",{className:"mskm",children:e[a%e.length]})]})}function Sd(){const{st:e,dispatch:a,scoped:r,pipe:n,markRow:o,markedId:i,byId:c,lang:s,t:l,data:g,dossiers:d,source:x}=Q(),m=g.loading&&!d.length,b=p.useRef(null),u=p.useRef(null),y=kd(e.continent==="monde"),w=e.continent==="monde"?y:Sn.find(h=>h.key===e.continent)||null,f=Nd(b,e.continent+":"+e.mapFolded+":"+!!w),[v,j]=p.useState(new Map),[k,N]=p.useState(null);p.useEffect(()=>{const h=b.current;if(!h)return;const A=new Map;h.querySelectorAll("path[data-i2]").forEach(U=>{const ee=U.dataset.i2;if(ee)try{const E=U.getBBox();E.width>0&&A.set(ee,{x:E.x,y:E.y,w:E.width,h:E.height})}catch{}}),j(A)},[e.continent,f,w]);const S=p.useMemo(()=>r.filter(h=>h.cc),[r]),C=p.useMemo(()=>{const h=new Map;return S.forEach(A=>h.set(A.cc,(h.get(A.cc)||0)+1)),h},[S]),L=e.continent==="monde"&&y?y.anchors:null,q=e.continent==="monde"&&y?y.metros:null,M=p.useMemo(()=>S.map(h=>{const A=$r(h.name||h.id||""),U=$r((h.id||h.name||"")+"·y");if(L&&h.cc){const B=q?q[h.cc]:void 0;if(B&&B.length){const ae=yd(h.cc,h.city,A);if(ae>=0&&B[ae])return{d:h,x:B[ae].x+(A-.5)*5,y:B[ae].y+(U-.5)*5}}const te=L[h.cc];if(te)return{d:h,x:te.x+(A-.5)*10,y:te.y+(U-.5)*10}}const ee=h.cc?v.get(h.cc):void 0;if(!ee)return null;const E=Ed[`${e.continent}:${h.cc||""}`];if(E)return{d:h,x:ee.x+ee.w*(E.fx+(A-.5)*E.sx),y:ee.y+ee.h*(E.fy+(U-.5)*E.sy)};const I=(A-.5)*Math.min(ee.w*.55,60),D=(U-.5)*Math.min(ee.h*.55,60);return{d:h,x:ee.x+ee.w/2+I,y:ee.y+ee.h/2+D}}).filter(h=>!!h),[S,v,L,q,e.continent]),R=h=>f>0?h/f:h,$=p.useMemo(()=>n?[0,1,2,3,4,5].map(h=>({c:Br[h],fr:l.plabels[h],en:l.plabels[h],n:r.filter(A=>A.kind==="target"&&Ee(A)===h).length})).filter(h=>h.n>0):Gn.map((h,A)=>({...h,n:r.filter(U=>Yn(U)===A).length})),[r,n,l.plabels]),F=i?c.get(i):null,O=F?M.find(h=>h.d.id===F.id):null;return w?t.jsxs("div",{className:"mapzone"+(m?" waiting":""),ref:u,children:[m&&t.jsx(Ur,{msgs:l.loadMsgs}),t.jsxs("svg",{ref:b,viewBox:e.continent==="monde"?jd:w.viewBox,preserveAspectRatio:e.continent==="monde"?"xMidYMin slice":"xMidYMid meet",role:"img","aria-label":s==="fr"?w.fr:w.en,onMouseLeave:()=>{N(null),o(null)},children:[t.jsx("g",{children:w.countries.map((h,A)=>t.jsx("g",{className:"ct"+(h.i2&&C.get(h.i2)?"":" empty"),children:t.jsx("path",{d:h.d,"data-i2":h.i2||void 0})},A))}),t.jsx("g",{children:M.map(h=>{const A=Gn[Yn(h.d)],U=!!De(h.d),ee=h.d.kind==="target",E=n&&ee?Br[Ee(h.d)]:A.c,I=!n&&_e(h.d);return t.jsxs("g",{className:"co"+(I?" done":""),onMouseEnter:()=>{var te,ae;const D=(te=u.current)==null?void 0:te.getBoundingClientRect(),B=(ae=b.current)==null?void 0:ae.createSVGPoint();if(B&&b.current&&D){B.x=h.x,B.y=h.y;const be=B.matrixTransform(b.current.getScreenCTM());N({x:be.x-D.left,y:be.y-D.top,label:h.d.name+" · "+(Ht(h.d.cc,s)||h.d.countryLabel||"")})}o(h.d.id)},onMouseLeave:()=>{N(null),o(null)},onClick:()=>{var te;if(x==="ops"){window.dispatchEvent(new CustomEvent("ppmap:reveal")),a({type:"focus",id:h.d.id}),(h.d.noCo||["media","nominations","recrutements"].includes(h.d.engine||""))&&(h.d.url||h.d.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:h.d.url||"",text:[h.d.headline,h.d.tagline].filter(Boolean).join(`
`)}})):h.d.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:h.d.name,url:h.d.url||"",website:h.d.website||"",domain:h.d.domain||""}}));return}const D=(te=b.current)==null?void 0:te.createSVGPoint();let B=null;if(D&&b.current){D.x=h.x,D.y=h.y;const ae=D.matrixTransform(b.current.getScreenCTM());B={x:ae.x,y:ae.y}}a({type:"popup",id:h.d.id,anchor:B})},children:[t.jsx("circle",{className:"h",cx:h.x,cy:h.y,r:R(Math.max(11,A.px+7))}),t.jsx("circle",{className:"v",cx:h.x,cy:h.y,r:R(A.px),fill:E,stroke:U?"#E5484D":"#ffffff",strokeWidth:R(U?2.2:1.3)})]},h.d.id||h.d.name)})}),O&&t.jsx("circle",{className:"ring on",cx:O.x,cy:O.y,r:R(13),fill:"none",stroke:"#16233A",strokeWidth:R(2)})]}),t.jsx("div",{className:"hov"+(k?" on":""),style:k?{left:k.x,top:k.y}:void 0,children:k==null?void 0:k.label}),t.jsx("div",{className:"legend",children:$.map((h,A)=>t.jsxs("span",{children:[t.jsx("i",{style:{"--c":h.c}}),s==="fr"?h.fr:h.en," ",t.jsx("b",{children:h.n})]},A))}),r.some(h=>!h.cc)&&t.jsx("div",{className:"legend",style:{left:"auto",right:10},children:t.jsxs("span",{children:["🌐 ",l.notLocated," ",t.jsx("b",{children:r.filter(h=>!h.cc).length})]})})]}):t.jsx("div",{className:"mapzone"+(m?" waiting":""),ref:u,children:t.jsx(Ur,{msgs:l.loadMsgs})})}function Cd(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!r)return e;const o=(a==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||r[2],i=Number(r[3]);return a==="en"?`${o} ${i}, ${r[1]}`:`${i} ${o} ${r[1]}`}function Uo({compact:e=!1}){const{st:a,dispatch:r,dossiers:n,t:o,pipe:i,contName:c,lang:s}=Q(),l=a.filters,[g,d]=p.useState(!1),[x,m]=p.useState(!1),b=p.useRef(null),u=p.useRef(null),y=p.useMemo(()=>a.continent==="monde"?n:n.filter(O=>O.continent===a.continent),[n,a.continent]),w=O=>y.filter(h=>O!=="country"&&l.country.length&&!l.country.includes(h.cc||"")?!1:za(h,l,i,O==="country"?void 0:O)),f=O=>!i||O.kind!=="op",v=p.useMemo(()=>{const O=w("win").filter(f),h=A=>O.filter(U=>(U.date?Math.max(0,Math.floor((Date.now()-Date.parse(U.date))/864e5)):9999)<=A).length;return[h(0),h(7),h(30),O.length]},[y,l,i]),j=p.useMemo(()=>l.day?w("win").filter(f).filter(O=>(O.date||"").slice(0,10)===l.day).length:0,[y,l,i]),k=(l.signalOnly?1:0)+l.sector.length+l.country.length+l.engine.length+l.stage.length+l.angle.length+l.memoLevel.length+l.crible.length,N=k+(l.acquirer.trim()?1:0)+(l.day||l.win!=="all"?1:0)+(l.search.trim()?1:0);p.useEffect(()=>{a.openFacet&&d(!1)},[a.openFacet]),p.useEffect(()=>{if(!g&&!x)return;const O=A=>{var ee,E;const U=A.target;g&&!((ee=b.current)!=null&&ee.contains(U))&&d(!1),x&&!((E=u.current)!=null&&E.contains(U))&&m(!1)},h=A=>{A.key==="Escape"&&(d(!1),m(!1))};return document.addEventListener("mousedown",O),document.addEventListener("keydown",h),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("keydown",h)}},[g,x]);const S=(O,h,A,U="fbtn")=>t.jsxs("button",{type:"button",className:U,"aria-expanded":a.openFacet===O,onClick:()=>r({type:"openFacet",facet:O}),children:[t.jsx("span",{className:"fl",children:h}),A>0&&t.jsx("span",{className:"n",children:A}),t.jsx("span",{className:"cv",children:"▾"})]},O),C=["1","7","30","all"],L=Math.max(0,C.indexOf(l.win||"all")),q=l.day?t.jsxs("div",{className:"seg",children:[t.jsxs("button",{type:"button","aria-pressed":!0,children:[t.jsx("span",{className:"sl",children:o.fDay(Cd(l.day,s))}),t.jsx("b",{children:j})]}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{day:"",win:"all"}}),children:o.fDayOff})]}):e?t.jsxs("div",{className:"winpick",ref:u,children:[t.jsxs("button",{type:"button",className:"winpick-btn","aria-expanded":x,"aria-haspopup":"listbox",onClick:()=>m(O=>!O),children:[t.jsx("span",{className:"winpick-k",children:o.winMenu}),t.jsx("span",{className:"winpick-v",children:o.datesShort[L]}),t.jsx("b",{children:v[L]}),t.jsx("i",{children:x?"▴":"▾"})]}),x&&t.jsx("div",{className:"winpick-pop",role:"listbox",children:C.map((O,h)=>t.jsxs("button",{type:"button",role:"option","aria-selected":l.win===O,onClick:()=>{r({type:"filters",patch:{win:O}}),m(!1)},children:[o.datesShort[h],t.jsx("span",{className:"n",children:v[h]})]},O))})]}):t.jsx("div",{className:"seg",children:C.map((O,h)=>t.jsxs("button",{type:"button","aria-pressed":l.win===O,onClick:()=>r({type:"filters",patch:{win:O}}),children:[t.jsx("span",{className:"sl",children:o.dates[h]}),t.jsx("b",{children:v[h]})]},O))}),M=t.jsxs("span",{className:"fsrch",children:["🔍",t.jsx("input",{placeholder:o.identSearch,value:l.search,onChange:O=>r({type:"filters",patch:{search:O.target.value}})})]}),R=t.jsxs("div",{className:"facets",children:[t.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":a.openFacet==="sig",onClick:()=>r({type:"openFacet",facet:"sig"}),children:[t.jsx("span",{className:"fl",children:o.fSignal}),l.signalOnly&&t.jsx("span",{className:"n",children:l.signalEngines.length||"✓"}),t.jsx("span",{className:"cv",children:"▾"})]}),l.sector.length===1?t.jsxs("button",{type:"button",className:"fbtn on","aria-expanded":a.openFacet==="sec",onClick:()=>r({type:"openFacet",facet:"sec"}),title:l.sector[0],children:[t.jsx("span",{className:"fl",children:o.fSector}),t.jsx("span",{className:"n",style:{maxWidth:"16ch",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l.sector[0]}),t.jsx("span",{className:"cv",children:"▾"})]}):S("sec",o.fSector,l.sector.length),S("pay",o.fCountry,l.country.length),S("det",o.fEngine,l.engine.length),S("sta",o.fStage,l.stage.length),i&&S("crib",o.fVerdict,l.crible.length),i&&S("ang","Angle",l.angle.length),i&&S("mem","Mémo",l.memoLevel.length)]}),$=(O=!1)=>t.jsxs("div",{className:"frow2",children:[N>0&&t.jsxs("button",{type:"button",className:"resetbtn on",title:o.clearTitle(y.length,c),onClick:()=>r({type:"reset"}),children:[t.jsx("span",{className:"rot",children:"↺"}),t.jsx("span",{children:o.clear(N)})]}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:o.alertBtn}),O&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>r({type:"mapFold",folded:!1}),children:o.showMap})]}),F=t.jsxs("div",{className:"fmenu",ref:b,children:[t.jsxs("button",{type:"button",className:"fbtn fmenu-btn"+(k?" on":""),"aria-expanded":g,"aria-haspopup":"true",onClick:()=>{d(O=>!O),a.openFacet&&r({type:"openFacet",facet:null})},children:[t.jsx("span",{className:"fl",children:o.fMenu}),k>0&&t.jsx("span",{className:"n",children:k}),t.jsx("span",{className:"cv",children:g?"▴":"▾"})]}),g&&t.jsx("div",{className:"fmenu-pop",role:"menu",children:R})]});return e?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"fstrip"+(l.day?" noday":""),children:[t.jsx("div",{className:"fstrip-a",children:q}),t.jsxs("div",{className:"fstrip-b",children:[M,F,$(!1)]})]}),a.openFacet&&t.jsx(Hr,{poolFor:w})]}):t.jsxs(t.Fragment,{children:[t.jsxs("aside",{className:"fbar",children:[q,M,R,t.jsx("span",{className:"fgrow"}),$()]}),a.openFacet&&t.jsx(Hr,{poolFor:w})]})}function Hr({poolFor:e}){const{st:a,dispatch:r,t:n,lang:o,pipe:i,data:c}=Q(),s=a.filters,l=a.openFacet,{title:g,cols:d,options:x}=p.useMemo(()=>{if(l==="sig"){const w=e("signal").filter(j=>De(j)),f=new Map;w.forEach(j=>{const k=j.engine||"";f.set(k,(f.get(k)||0)+1)});const v=[{v:"*",label:n.fpSigAll,n:w.length,html:!0,on:s.signalOnly&&!s.signalEngines.length},...rn([...f.keys()],o).map(j=>({v:j,label:Lt(j)+" "+Ke(j,o),n:f.get(j)||0,html:!1,on:s.signalOnly&&s.signalEngines.includes(j)}))];return{title:n.fpSigTitle,cols:2,options:v}}if(l==="crib"){const w=e("crible").filter(v=>!i||ro(v,a.ptab,c.favIds)),f=new Map;return w.forEach(v=>{const j=oo(v);j&&j!=="NEW"&&f.set(j,(f.get(j)||0)+1)}),{title:n.fVerdict.toUpperCase(),cols:2,options:[...f.entries()].sort((v,j)=>(Qn[v[0]]??9)-(Qn[j[0]]??9)||j[1]-v[1]).map(([v,j])=>({v,label:'<span class="fdot" style="background:'+(Bi[v]||"#94A3B8")+'"></span>'+v,n:j,html:!0,on:s.crible.includes(v)}))}}if(l==="sec"){const w=e("sector"),f=new Map;return w.forEach(v=>{v.sector&&f.set(v.sector,(f.get(v.sector)||0)+1)}),{title:n.fSector,cols:3,options:[...f.entries()].sort((v,j)=>j[1]-v[1]).map(([v,j])=>({v,label:v,n:j,html:!1,on:s.sector.includes(v)}))}}if(l==="pay"){const w=e("country"),f=new Map;return w.forEach(v=>{v.cc&&f.set(v.cc,(f.get(v.cc)||0)+1)}),{title:n.fCountry,cols:3,options:[...f.entries()].sort((v,j)=>j[1]-v[1]).map(([v,j])=>({v,label:Ht(v,o)||v,n:j,html:!1,on:s.country.includes(v)}))}}if(l==="det"){const w=e("engine"),f=new Map;return w.forEach(v=>{v.engine&&f.set(v.engine,(f.get(v.engine)||0)+1)}),{title:n.fEngine,cols:2,options:rn([...f.keys()],o).map(v=>({v,label:Lt(v)+" "+Ke(v,o)+' <span style="color:var(--dim);font-size:10px">· '+$i(Ui(v),o)+"</span>",n:f.get(v)||0,html:!0,on:s.engine.includes(v)}))}}if(l==="ang"){const w=e("angle"),f=new Map;return w.forEach(v=>{v.angle&&f.set(v.angle,(f.get(v.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...f.entries()].sort((v,j)=>j[1]-v[1]).map(([v,j])=>({v,label:v.replace(/[_-]+/g," "),n:j,html:!1,on:s.angle.includes(v)}))}}if(l==="mem"){const w=e("memoLevel"),f=new Map;w.forEach(j=>{if(j.kind==="target"){const k=En(j);f.set(k,(f.get(k)||0)+1)}});const v=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(j=>({v:String(j),label:v[j],n:f.get(j)||0,html:!1,on:s.memoLevel.includes(j)}))}}const u=e("stage"),y=new Map;return u.forEach(w=>{w.stage&&y.set(w.stage,(y.get(w.stage)||0)+1)}),{title:n.fStage,cols:2,options:[...y.entries()].sort((w,f)=>f[1]-w[1]).map(([w,f])=>({v:w,label:w,n:f,html:!1,on:s.stage.includes(w)}))}},[l,a,o]),m=u=>{if(l==="sig"){if(u==="*")r({type:"filters",patch:{signalOnly:!(s.signalOnly&&!s.signalEngines.length),signalEngines:[]}});else{const w=s.signalEngines.includes(u)?s.signalEngines.filter(f=>f!==u):[...s.signalEngines,u];r({type:"filters",patch:{signalOnly:!0,signalEngines:w}})}return}if(l==="mem"){r({type:"toggleMemoLevel",value:Number(u)});return}r({type:"toggleFacet",facet:l==="sec"?"sector":l==="pay"?"country":l==="det"?"engine":l==="ang"?"angle":l==="crib"?"crible":"stage",value:u})},b=()=>{r(l==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:l==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:l==="sec"?"sector":l==="pay"?"country":l==="det"?"engine":l==="ang"?"angle":l==="crib"?"crible":"stage"})};return t.jsxs("div",{className:"fpanel on",children:[t.jsxs("div",{className:"ph",children:[t.jsx("b",{children:g}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",onClick:b,children:n.fpNone}),t.jsx("button",{type:"button",onClick:()=>r({type:"openFacet",facet:null}),children:n.fpClose})]}),t.jsx("div",{className:"fcols"+(d===2?" two":""),children:x.map(u=>t.jsxs("button",{type:"button",className:"opt","aria-pressed":u.on,onClick:()=>m(u.v),children:[t.jsx("span",{className:"bx"}),u.html?t.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:u.label}}):t.jsx("span",{className:"l",children:u.label}),t.jsx("span",{className:"n",children:u.n})]},u.v))}),t.jsxs("div",{className:"pf",children:[t.jsx("span",{className:"t",children:n.alertReady}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:n.alertCreate})]})]})}function Ho({mapToggle:e=!0,variant:a="tabs"}){const{dossiers:r,st:n,dispatch:o,pipe:i,lang:c,t:s}=Q(),l=p.useMemo(()=>{const b={};return r.forEach(u=>{za(u,n.filters,i)&&(b.monde=(b.monde||0)+1,u.continent&&(b[u.continent]=(b[u.continent]||0)+1))}),b},[r,n.filters,i]),[g,d]=p.useState(!1),x=p.useRef(null);p.useEffect(()=>{if(!g)return;const b=y=>{var w;(w=x.current)!=null&&w.contains(y.target)||d(!1)},u=y=>{y.key==="Escape"&&d(!1)};return document.addEventListener("mousedown",b),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",u)}},[g]);const m=b=>{const u=Sn.find(y=>y.key===b);return b==="monde"?s.contWorld:c==="fr"?u.fr:u.en};return a==="compact"?t.jsxs("div",{className:"contpick",ref:x,children:[t.jsxs("button",{type:"button",className:"contpick-btn","aria-expanded":g,"aria-haspopup":"listbox",onClick:()=>d(b=>!b),children:[m(n.continent),t.jsx("span",{className:"n",children:l[n.continent]||0}),t.jsx("i",{children:g?"▴":"▾"})]}),g&&t.jsx("div",{className:"contpick-pop",role:"listbox",children:Kn.map(b=>t.jsxs("button",{type:"button",role:"option","aria-selected":n.continent===b,onClick:()=>{o({type:"continent",key:b}),d(!1)},children:[m(b),t.jsx("span",{className:"n",children:l[b]||0})]},b))}),e&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>o({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?s.showMap:s.hideMap})]}):t.jsxs("div",{className:"conts",children:[Kn.map(b=>t.jsxs("button",{type:"button",className:"cbtn","aria-selected":n.continent===b,onClick:()=>o({type:"continent",key:b}),children:[m(b),t.jsx("span",{className:"n",children:l[b]||0})]},b)),e&&t.jsx("span",{className:"side",children:t.jsx("button",{type:"button",onClick:()=>o({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?s.showMap:s.hideMap})})]})}function jn(e){try{return JSON.parse(localStorage.getItem(e)||"[]")}catch{return[]}}function Vo(e){return"atl2:evalq:"+(e||"anon")}function zd(e,a){const r=Vo(e),n=jn(r),o=new Set(n.map(s=>(s.name||"").trim().toLowerCase())),i=a.map(s=>(s||"").trim()).filter(s=>s&&!o.has(s.toLowerCase())).map(s=>({name:s,site:"",status:"",auto:!0}));if(!i.length)return 0;const c=[...n,...i].slice(0,30);try{localStorage.setItem(r,JSON.stringify(c)),window.dispatchEvent(new CustomEvent("atl2:evalq"))}catch{}return i.length}function Wo(){const{t:e,data:a,dossiers:r}=Q(),n=a.session.token||"",o=Vo(n),[i,c]=p.useState(()=>jn(o)),s=p.useRef(!1),[l,g]=p.useState(!1);p.useEffect(()=>{try{const E=i.slice(0,30).map(({descBusy:I,evalBusy:D,...B})=>B);localStorage.setItem(o,JSON.stringify(E)),s.current=!0,window.dispatchEvent(new CustomEvent("atl2:evalq")),s.current=!1}catch{}},[i,o]),p.useEffect(()=>{const E=()=>{if(s.current)return;const I=jn(o);c(D=>JSON.stringify(D.map(({descBusy:B,evalBusy:te,...ae})=>ae))===JSON.stringify(I)?D:I)};return window.addEventListener("atl2:evalq",E),window.addEventListener("storage",E),()=>{window.removeEventListener("atl2:evalq",E),window.removeEventListener("storage",E)}},[o]);const[d,x]=p.useState([]),[m,b]=p.useState(""),[u,y]=p.useState(!1),[w,f]=p.useState(!1),[v,j]=p.useState(""),k=p.useCallback((E,I)=>c(D=>D.map((B,te)=>te===E?{...B,...I}:B)),[]),N=p.useCallback((E,I)=>{const D=I.trim();D&&(k(E,{name:D,status:"resolving",site:"",candidates:void 0,auto:!1,desc:"",descDone:!1}),Cn(D).then(B=>{const te=B.candidates||[];B.website?k(E,{site:B.website,status:"ready"}):te.length===1?k(E,{site:te[0].url,status:"ready"}):te.length>1?k(E,{status:"pick",candidates:te.slice(0,4)}):k(E,{status:"ready"})}).catch(()=>k(E,{status:"ready"})))},[k]),S=p.useCallback((E,I,D)=>{k(E,{descBusy:!0}),lo(n,I,D).then(B=>{if(B.quota){g(!0),k(E,{descBusy:!1,descDone:!0});return}const te=B.blocs||{},ae=(te.synthese||te.value_prop||te.produit||te.modele||"").trim();k(E,{descBusy:!1,descDone:!0,desc:ae})}).catch(()=>k(E,{descBusy:!1,descDone:!0}))},[k,n]);p.useEffect(()=>{const E=i.findIndex(D=>D.auto&&D.name.trim()&&D.status==="");if(E>=0){N(E,i[E].name);return}if(l)return;const I=i.findIndex(D=>D.status==="ready"&&D.site&&!D.descDone&&!D.descBusy);I>=0&&S(I,i[I].name,i[I].site)},[i,N,S,l]);const[C,L]=p.useState(!1),q=p.useCallback(async(E,I)=>{k(E,{evalBusy:!0});const D=await co(n,(I.site||I.name).trim(),"atelier2");return D.verdict==="quota"?(k(E,{evalBusy:!1}),window.dispatchEvent(new CustomEvent("ppmap:evalcard",{detail:{name:"",verdict:"quota",reason:D.reason||"",remaining:0}})),!1):(k(E,{evalBusy:!1,status:D.verdict==="kept"?"kept":"out",reason:D.reason||""}),window.dispatchEvent(new CustomEvent("ppmap:evalcard",{detail:{name:D.company||I.name,verdict:D.verdict,reason:D.reason||"",remaining:D.remaining??null}})),!0)},[k,n]),M=async()=>{if(C)return;const E=i.map((I,D)=>({r:I,i:D})).filter(({r:I})=>I.name.trim()&&I.status!=="kept"&&I.status!=="out"&&I.status!=="resolving");if(E.length){L(!0);for(const{r:I,i:D}of E)if(!await q(D,I))break;L(!1)}},R=p.useMemo(()=>{const E=new Set,I=[];return i.filter(D=>D.status==="kept").forEach(D=>{const B=D.name.trim().toLowerCase();B&&!E.has(B)&&(E.add(B),I.push(D.name.trim()))}),r.filter(D=>Ee(D)>=1&&Ee(D)<=4&&(D.website||D.domain)).forEach(D=>{const B=(D.name||"").trim().toLowerCase();B&&!E.has(B)&&(E.add(B),I.push((D.name||"").trim()))}),I},[i,r]),$=p.useMemo(()=>{const E=new Set;return r.forEach(I=>{const D=(I.name||"").trim().toLowerCase();D&&E.add(D)}),i.forEach(I=>{const D=I.name.trim().toLowerCase();D&&E.add(D)}),E},[r,i]),F=async()=>{if(m||!R.length)return;f(!1);const E=[];for(const I of R.slice(0,2)){b(I);const D=await po(n,I);if(D){if(D.verdict==="quota"){y(!0);break}(D.results||[]).forEach(B=>{const te=(B.company||"").trim().toLowerCase();!te||$.has(te)||E.some(ae=>ae.name.toLowerCase()===te)||E.push({name:(B.company||"").trim(),verdict:B.verdict||"",reason:B.reason,from:I})})}}b(""),f(!0),x(I=>[...E,...I].slice(0,24))},O=async(E,I)=>{if(m)return;f(!1),b(E==="thesis"?e.pxThesis:I);const D=await Hi(n,E,I,6);if(b(""),f(!0),!D)return;if(D.verdict==="quota"){y(!0);return}const B=[];(D.results||[]).forEach(te=>{const ae=(te.company||"").trim().toLowerCase();!ae||$.has(ae)||B.some(be=>be.name.toLowerCase()===ae)||B.push({name:(te.company||"").trim(),verdict:te.verdict||"",reason:te.reason,from:E==="thesis"?e.pxThesis:I})}),x(te=>[...B,...te].slice(0,24))},h=()=>{const E=v.trim();E.length<3||O(/^\d{2}\.?\d{2}[A-Za-z]?$/.test(E)?"registry":"keyword",E)},A=E=>{c(I=>[...I,{name:E.name,site:"",status:"",auto:!0}].slice(0,30)),x(I=>I.filter(D=>D.name!==E.name))},U=i.filter(E=>E.name.trim()&&E.status!=="kept"&&E.status!=="out").length,ee=E=>E.name.trim()&&E.status!=="kept"&&E.status!=="out"&&E.status!=="resolving"&&!E.evalBusy;return t.jsxs("div",{className:"bulk on evalq",children:[t.jsxs("div",{className:"eq-rows",children:[t.jsxs("div",{className:"eq-head",children:[t.jsx("span",{children:e.eqColName}),t.jsx("span",{children:e.eqColSite}),t.jsx("span",{children:e.eqColDesc}),t.jsx("span",{children:e.eqColState}),t.jsx("span",{}),t.jsx("span",{})]}),i.map((E,I)=>t.jsxs("div",{className:"eq-row"+(E.status==="kept"?" r-kept":E.status==="out"?" r-out":""),children:[t.jsx("input",{value:E.name,placeholder:e.eqNamePh,onChange:D=>{const B=D.target.value.split(`
`).map(te=>te.trim()).filter(Boolean);B.length>1?c(te=>{const ae=[...te];return ae.splice(I,1,...B.map(be=>({name:be,site:"",status:"",auto:!0}))),ae.slice(0,30)}):k(I,{name:D.target.value})},onBlur:()=>{E.name.trim()&&!E.site&&E.status!=="resolving"&&E.status!=="pick"&&N(I,E.name)},onKeyDown:D=>{D.key==="Enter"&&N(I,E.name)}}),t.jsxs("span",{className:"eq-site",children:[E.status==="resolving"&&t.jsx("i",{className:"eq-spin",children:e.eqLookup}),E.status==="pick"&&(E.candidates||[]).map(D=>t.jsx("button",{type:"button",className:"eq-cand",onClick:()=>k(I,{site:D.url,status:"ready",candidates:void 0}),children:(D.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,24)},D.url)),E.status!=="resolving"&&E.status!=="pick"&&(E.site?t.jsxs("a",{href:E.site.startsWith("http")?E.site:"https://"+E.site,target:"_blank",rel:"nofollow noopener",children:[E.site.replace(/^https?:\/\/(www\.)?/,"").slice(0,28)," ↗"]}):t.jsx("em",{children:E.name.trim()&&E.status==="ready"?e.eqNoSite:""}))]}),t.jsx("span",{className:"eq-desc",title:E.desc||"",children:E.descBusy?t.jsx("i",{children:e.eqDescBusy}):E.desc?E.desc:t.jsx("em",{children:E.descDone?l?e.eqDescQuota:e.eqDescNone:""})}),t.jsx("span",{className:"eq-st s-"+(E.status||"vide"),title:E.reason||"",children:E.status==="kept"?"✓ "+e.kept:E.status==="out"?"✗ "+e.dropped:E.status==="ready"?e.eqReady:E.status==="pick"?e.eqPick:""}),t.jsx("button",{type:"button",className:"eq-go",title:e.eqRunOne,disabled:!ee(E)||C,onClick:()=>{q(I,E)},children:E.evalBusy?"⏳":"⚡"}),t.jsx("button",{type:"button",className:"eq-x",title:"×",onClick:()=>c(D=>D.filter((B,te)=>te!==I)),children:"×"})]},I)),t.jsxs("button",{type:"button",className:"eq-add",onClick:()=>c(E=>[...E,{name:"",site:"",status:""}].slice(0,30)),children:["+ ",e.eqAdd]}),t.jsxs("div",{className:"eq-sugg",children:[t.jsx("button",{type:"button",className:"eq-sugg-go",disabled:!!m,onClick:()=>{O("thesis","")},children:m===e.pxThesis?e.sgBusy(m):e.pxGoThesis}),t.jsx("input",{className:"eq-sugg-in",value:v,placeholder:e.pxPlace,onChange:E=>j(E.target.value),onKeyDown:E=>{E.key==="Enter"&&h()}}),t.jsx("button",{type:"button",className:"eq-sugg-go2",disabled:!!m||v.trim().length<3,onClick:h,children:e.pxGoFree}),!!R.length&&t.jsx("button",{type:"button",className:"eq-sugg-go2",disabled:!!m,onClick:()=>{F()},children:m&&m!==e.pxThesis&&m!==v?e.sgBusy(m):e.sgGo}),!!R.length&&t.jsx("span",{className:"eq-sugg-note",children:e.sgFrom(R[0],R.length)}),u&&t.jsx("span",{className:"eq-sugg-q",children:e.sgQuota}),w&&!d.length&&!u&&t.jsx("span",{className:"eq-sugg-q",children:e.sgNone}),d.map(E=>t.jsxs("span",{className:"eq-sc"+(E.verdict==="kept"?" ok":""),title:(E.reason||"")+" — "+e.sgVia(E.from),children:[t.jsx("b",{children:E.name}),E.verdict==="kept"&&t.jsx("i",{children:"✓"}),t.jsx("button",{type:"button",onClick:()=>A(E),children:"+"})]},E.name))]})]}),t.jsxs("div",{className:"side",children:[t.jsxs("button",{type:"button",className:"evalbtn"+(C?" loading":""),style:{justifyContent:"center"},disabled:C||!U,onClick:()=>{M()},children:[t.jsx("span",{className:"fill"}),C?e.eqRunning:e.eqGo(U)]}),t.jsx("span",{className:"hint",children:e.eqHint}),i.some(E=>E.status==="kept"||E.status==="out")&&t.jsx("button",{type:"button",className:"dmulti",onClick:()=>c(E=>E.filter(I=>I.status!=="kept"&&I.status!=="out")),children:e.eqClearDone})]})]})}function Go(e){return String(e||"").split(`
`).map(a=>a.replace(/^#{1,6}\s*/,"").replace(/[*_`>]/g,"").trimEnd()).filter(a=>a.trim().length>0)}function Ad(e){var o;const a=[],r=new Set,n=i=>{const c=(i||"").trim();!c||r.has(c.toLowerCase())||(r.add(c.toLowerCase()),a.push(c))};return((e==null?void 0:e.companies_cited)||[]).forEach(i=>n(i==null?void 0:i.name)),(((o=e==null?void 0:e.prospective)==null?void 0:o.companies_to_evaluate)||[]).forEach(i=>n(i==null?void 0:i.name)),a}function Vr({icon:e,title:a,hint:r,rows:n,addLabel:o,onEvaluate:i,onAddAll:c}){const{t:s}=Q();return n.length?t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:[e," ",a]}),t.jsx("span",{className:"n",children:n.length}),c&&t.jsx("button",{type:"button",className:"rsblk-all",onClick:()=>c(n.map(l=>l.name)),children:o})]}),t.jsx("p",{className:"rsblk-hint",children:r}),t.jsx("div",{className:"rsblk-rows",children:n.map(l=>t.jsxs("div",{className:"rsrow",children:[t.jsxs("div",{className:"rsrow-t",children:[t.jsxs("div",{className:"rsrow-h",children:[t.jsx("span",{className:"nm",children:l.name}),l.chips.map(g=>t.jsx("span",{className:"ch",children:g},g))]}),l.line1&&t.jsx("p",{className:"w",children:l.line1}),l.line2&&t.jsx("p",{className:"r",children:l.line2})]}),t.jsx("button",{type:"button",className:"rsrow-go",onClick:()=>i(l.name),children:s.rsEvalOne})]},l.name))})]}):null}function Yo({card:e,onEvaluate:a,onAddAll:r}){var c;const{t:n}=Q(),o=((e==null?void 0:e.companies_cited)||[]).filter(s=>s&&(s.name||"").trim()).map(s=>({name:(s.name||"").trim(),line1:(s.what||"").trim(),line2:(s.role||"").trim(),chips:[(s.country||"").trim()].filter(Boolean)})),i=(((c=e==null?void 0:e.prospective)==null?void 0:c.companies_to_evaluate)||[]).filter(s=>s&&(s.name||"").trim()).map(s=>({name:(s.name||"").trim(),line1:(s.why||"").trim(),chips:[(s.country||"").trim(),(s.stage||"").trim()].filter(Boolean)}));return!o.length&&!i.length?t.jsx("p",{className:"rsblk-none",children:n.rsNoCompanies}):t.jsxs(t.Fragment,{children:[t.jsx(Vr,{icon:"🏷",title:n.rsCited,hint:n.rsCitedHint,rows:o,addLabel:n.rsAddAll(o.length),onEvaluate:a,onAddAll:r}),t.jsx(Vr,{icon:"🎯",title:n.rsMatch,hint:n.rsMatchHint,rows:i,addLabel:n.rsAddAll(i.length),onEvaluate:a,onAddAll:r})]})}function qd({card:e,onEvaluate:a,onAddAll:r}){var s,l,g;const{t:n}=Q(),o=[e.industry,...e.market_tags||[],e.author].map(d=>(d||"").trim()).filter(Boolean),i=(((s=e.prospective)==null?void 0:s.criteria)||[]).filter(Boolean),c=(e.sources||[]).filter(d=>d&&d.url);return t.jsxs("div",{className:"rsdet",children:[e.market&&t.jsx("p",{className:"rsmk",children:e.market}),o.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:n.rsTags}),o.map(d=>t.jsx("span",{children:d},d))]}),t.jsxs("div",{className:"rsbody",children:[e.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${e.mindmap_png_b64}`,alt:n.rsMindmap}),t.jsx("figcaption",{children:n.rsMindmap})]}),t.jsx("div",{className:"rssum",children:Go(e.summary_md||"").map((d,x)=>t.jsx("p",{children:d},x))})]}),t.jsx(Yo,{card:e,onEvaluate:a,onAddAll:r}),(((l=e.prospective)==null?void 0:l.conclusion)||i.length>0)&&t.jsxs("section",{className:"rsblk rspro",children:[t.jsx("div",{className:"rsblk-h",children:t.jsxs("b",{children:["🔮 ",n.rsConclusion]})}),((g=e.prospective)==null?void 0:g.conclusion)&&t.jsx("p",{className:"rspro-c",children:e.prospective.conclusion}),i.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"rsblk-hint",children:n.rsCriteria}),t.jsx("ul",{className:"rspro-l",children:i.map(d=>t.jsx("li",{children:d},d))})]})]}),c.length>0&&t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:["🔗 ",n.rsSources]}),t.jsx("span",{className:"n",children:c.length})]}),t.jsx("div",{className:"rssrc",children:c.map(d=>t.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",children:d.label||d.url},d.url))})]})]})}function Td(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{day:"2-digit",month:"short"})}function Ld({onClose:e,onEvaluate:a,onAddAll:r,bump:n,cbToken:o}){const{t:i,email:c}=Q(),s=o,[l,g]=p.useState(null),[d,x]=p.useState(null),[m,b]=p.useState(null),[u,y]=p.useState(!1);p.useEffect(()=>{let f=!0;return(async()=>{const v=await uo({email:c,cbToken:s});f&&g(v)})(),()=>{f=!1}},[c,s,n]);const w=f=>{x(f),b(null),y(!0),(async()=>{const v=await Vi(f.id);b(v),y(!1)})()};return t.jsxs("div",{className:"rsarch",children:[t.jsxs("div",{className:"rsarch-h",children:[d?t.jsx("button",{type:"button",className:"rsarch-back",onClick:()=>{x(null),b(null)},children:i.rsArchBack}):t.jsxs("b",{children:["🗂 ",i.rsArchTitle]}),d&&t.jsx("span",{className:"ti",children:d.title}),!d&&l&&t.jsx("span",{className:"n",children:l.length}),t.jsx("button",{type:"button",className:"rsx",title:i.rsClose,onClick:e,children:"×"})]}),!d&&t.jsxs("div",{className:"rsarch-list",children:[l===null&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchLoading}),l!==null&&l.length===0&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchEmpty}),(l||[]).map(f=>t.jsxs("button",{type:"button",className:"rsarch-row",onClick:()=>w(f),children:[t.jsx("span",{className:"ti",children:f.title}),t.jsxs("span",{className:"me",children:[Td(f.created_at),f.industry?` · ${f.industry}`:"",f.author?` · ${f.author}`:""]}),t.jsx("span",{className:"cn",children:i.rsRowCounts(f.cited_n||0,f.evaluate_n||0)}),t.jsx("span",{className:"st"+(f.published?" on":""),children:f.published?i.rsPub:i.rsPriv})]},f.id))]}),d&&t.jsxs("div",{className:"rsarch-one",children:[t.jsxs("div",{className:"rsarch-sub",children:[d.source_url&&t.jsx("a",{href:d.source_url,target:"_blank",rel:"noopener noreferrer",children:i.rsSource}),d.published&&d.page_url&&t.jsx("a",{href:d.page_url,target:"_blank",rel:"noopener noreferrer",children:i.rsLink}),t.jsx("span",{className:"st"+(d.published?" on":""),children:d.published?i.rsPub:i.rsPriv})]}),u&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchLoading}),!u&&!m&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchGone}),!u&&m&&t.jsx(qd,{card:m,onEvaluate:a,onAddAll:r})]})]})}const ja=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function Zt(e){return/^https?:\/\//i.test((e||"").trim())}function ct(e){const a=(e||"").trim();return a?Zt(a)?a:ja.test(a)&&!/\s/.test(a)?"https://"+a.replace(/^\/+/,""):"":""}function Fd(){return t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]})}function Rd(){const{t:e,mode:a,token:r,email:n,askEvaluate:o,sessTally:i,dispatch:c,evalBusy:s,evalCards:l,caps:g,data:d,canWrite:x,source:m,dossiers:b,doAnalyse:u,liveMemos:y,pipe:w}=Q(),f=a==="client",v=p.useMemo(()=>r||(m!=="default"?Wi():""),[r,m]),[j,k]=p.useState(""),[N,S]=p.useState(!1),[C,L]=p.useState(""),[q,M]=p.useState(""),[R,$]=p.useState(""),[F,O]=p.useState(!1),[h,A]=p.useState(!1),[U,ee]=p.useState([]);p.useEffect(()=>{const P=Z=>{const le=Z.detail;le&&ee(xe=>[le,...xe].slice(0,8))};return window.addEventListener("ppmap:evalcard",P),()=>window.removeEventListener("ppmap:evalcard",P)},[]);const[E,I]=p.useState(!1),[D,B]=p.useState(!1),[te,ae]=p.useState(!1),be=p.useRef(!1),[J,he]=p.useState(""),[ue,ge]=p.useState(""),[_,K]=p.useState(!1),[V,ne]=p.useState(!1),[H,se]=p.useState(0),[de,oe]=p.useState(""),[re,ye]=p.useState(null),[me,We]=p.useState(null),[we,Se]=p.useState(!1),[Ne,Oe]=p.useState(null),[vt,lt]=p.useState(0),Me=p.useRef(!1),ze=j.trim()?ja.test(j.trim())?e.evalUrl:e.evalName:e.evalWaiting;p.useEffect(()=>{if(typeof window>"u")return;const P=new URLSearchParams(window.location.search),Z=(P.get("rs")||"").trim(),le=(P.get("rstext")||"").trim();Z&&/^https?:\/\//i.test(Z)&&he(Z),le&&ge(le),(Z&&/^https?:\/\//i.test(Z)||le)&&I(!0)},[]),p.useEffect(()=>{const P=Z=>{const le=Z.detail||{},xe=String(le.url||"").trim(),pe=String(le.text||"").trim();xe&&/^https?:\/\//i.test(xe)&&he(xe),pe&&ge(pe),(xe&&/^https?:\/\//i.test(xe)||pe)&&(I(!0),k(""),L(""),K(!0),window.setTimeout(()=>K(!1),900))};return window.addEventListener("ppmap:research",P),()=>window.removeEventListener("ppmap:research",P)},[]),p.useEffect(()=>{const P=Z=>{const le=Z.detail||{},xe=String(le.name||"").trim();if(!xe)return;I(!1),k(xe),L(xe);const pe=ct(String(le.website||le.domain||""));M(pe),$(ct(String(le.url||""))),O(!pe),S(!0),window.setTimeout(()=>S(!1),900)};return window.addEventListener("ppmap:prefill",P),()=>window.removeEventListener("ppmap:prefill",P)},[]),p.useEffect(()=>{const P=(C||"").trim();if(!P||E||q){(q||!P||E)&&O(!1);return}const Z=b.find(pe=>Ue(pe.name)===Ue(P)),le=ct((Z==null?void 0:Z.website)||"")||ct((Z==null?void 0:Z.domain)||"");if(le){M(le),O(!1);return}let xe=!0;return O(!0),Cn(P).then(pe=>{var Be,Ae;if(!xe)return;const qe=ct(pe.website||"")||ct(((Ae=(Be=pe.candidates)==null?void 0:Be[0])==null?void 0:Ae.url)||"");qe&&M(qe)}).catch(()=>{}).finally(()=>{xe&&O(!1)}),()=>{xe=!1}},[C,E,q,b]),p.useEffect(()=>{const P=Z=>{var xe;const le=String(((xe=Z.detail)==null?void 0:xe.url)||"").trim();Zt(le)&&window.open(le,"_blank","noopener,noreferrer")};return window.addEventListener("ppmap:view",P),()=>window.removeEventListener("ppmap:view",P)},[]),p.useEffect(()=>{if(be.current===E)return;be.current=E,ae(!0);const P=window.setTimeout(()=>ae(!1),560);return()=>window.clearTimeout(P)},[E]),p.useEffect(()=>{if(typeof window>"u")return;const P=document.querySelector(".atl2 .eval-stick")||document.querySelector(".atl2 .demand"),Z=document.querySelector(".atl2.ops, .atl2.cibles");if(!P||!Z)return;const le=()=>Z.style.setProperty("--demand-h",`${P.offsetHeight}px`);le();const xe=new ResizeObserver(le);return xe.observe(P),()=>xe.disconnect()},[m,N,_,h,E,te,F]),p.useEffect(()=>{if(!x&&!v){Oe(null);return}let P=!0;return(async()=>{const Z=await uo({email:n,cbToken:v});P&&Oe(Z.length)})(),()=>{P=!1}},[x,v,n,vt]);const rt=U.length?U:l,He=d.credits,yt=p.useCallback(P=>{zd(r,P)&&A(!0)},[r]);p.useEffect(()=>{if(!V)return;se(0);const P=window.setInterval(()=>se(Z=>Z+1),1e3);return()=>window.clearInterval(P)},[V]);const ot=p.useMemo(()=>{const P=j.trim().toLowerCase();return!P||!w?null:b.find(Z=>Ue(Z.name)===P&&Ee(Z)===1)||null},[j,b,w]),St=()=>{const P=j.trim();if(P){if(ot){u(ot);return}o(null,P),f&&k("")}},Ct=async()=>{var le,xe,pe;if(Me.current)return;const P=J.trim().replace(/\s+/g,""),Z=ue.trim();if(!P&&!Z){oe(e.rsNeed);return}if(!f&&!v){o(null,P||Z.slice(0,80));return}Me.current=!0,oe(""),ye(null),We(null),ne(!0);try{const qe=await Yi({url:P,text:Z,email:n,cbToken:v});if(ne(!1),!qe||qe.status!=="success"){oe((qe==null?void 0:qe.message)||"Erreur");return}ye(qe),I(!1),yt((((le=qe.prospective)==null?void 0:le.companies_to_evaluate)||[]).map(Ae=>(Ae==null?void 0:Ae.name)||"")),We({state:"pending"});const Be=await Qi(qe,{email:n,cbToken:v});We(Be.ok?{state:"ok",scopeLabel:((xe=Be.summary)==null?void 0:xe.scope_label)||"",scope:((pe=Be.summary)==null?void 0:pe.scope)||""}:{state:"fail",msg:Be.error||""}),Be.ok&&lt(Ae=>Ae+1)}finally{Me.current=!1,ne(!1)}},Je=[re==null?void 0:re.industry,...(re==null?void 0:re.market_tags)||[],re==null?void 0:re.author].map(P=>(P||"").trim()).filter(Boolean),wt=(me==null?void 0:me.state)==="pending",zt=me&&(wt?t.jsx("span",{className:"rslink pend",children:e.rsSaving}):me.state==="ok"?t.jsx("span",{className:"rslink ok",children:me.scope&&me.scope!=="public"?e.rsSavedIn(me.scopeLabel||me.scope.replace(/^fund:/,"")):e.rsSaved}):t.jsx("span",{className:"rslink fail",title:me.msg,children:e.rsSaveFail})),Mt=Ad(re).length,Ie=E,it=(C||j).trim(),Pe=b.find(P=>Ue(P.name)===Ue(it)),T=ct(j)||q||ct((Pe==null?void 0:Pe.website)||"")||ct((Pe==null?void 0:Pe.domain)||""),G=R||ct((Pe==null?void 0:Pe.url)||""),X=ot?e.actAnalyse:it?e.evalGoOn(it.length>22?it.slice(0,21)+"…":it):e.evalGo,ce=V?`${Gi(J.trim())==="youtube"&&J.trim()?e.rsRunningVid:e.rsRunning} ${e.rsElapsed(H)}`:wt?e.rsSaving:e.rowExtract;return t.jsxs("div",{className:"demand"+(Ie?" rs-mode":"")+(C&&j.trim()===C||N||_?" pair":"")+(N||_||te?" echo":"")+(te?" swap":""),children:[t.jsxs("div",{className:"drow"+((Ie?_:N)||te?" flash":"")+((Ie?J.trim():ja.test(j.trim()))?" has-url":""),children:[t.jsxs("span",{className:"dfield",children:[t.jsx("input",{value:Ie?J:j,placeholder:Ie?e.rsUrlPh:e.evalPh,autoComplete:"off",maxLength:Ie?600:200,spellCheck:Ie?!1:void 0,inputMode:Ie?"url":void 0,onChange:P=>{if(Ie){he(P.target.value);return}k(P.target.value),C&&P.target.value.trim()!==C&&(L(""),M(""),$(""),O(!1))},onKeyDown:P=>{P.key==="Enter"&&(Ie?Ct():St())}}),t.jsx("span",{className:"detect"+(Ie?" off":"")+(ja.test(j.trim())?" url":""),children:ze})]}),t.jsx("span",{className:"dacts",children:Ie?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn"+(V?" loading":""),disabled:V||wt||!J.trim()&&!ue.trim(),onClick:()=>{Ct()},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"elab",children:ce})]}),t.jsxs("a",{className:"viewbtn"+(Zt(J)?"":" off"),href:Zt(J)?J.trim():void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewLinkHint,onClick:P=>{Zt(J)||P.preventDefault()},children:[t.jsx(Fd,{}),e.viewLink]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn"+(ot?" analyse":"")+(s?" loading":""),disabled:s,onClick:St,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"elab",children:X})]}),t.jsxs("a",{className:"viewbtn sm"+(F?" searching":T?"":" off"),href:T||void 0,target:"_blank",rel:"noopener noreferrer","aria-busy":F||void 0,title:F?e.viewSiteBusyHint:e.viewSiteHint,onClick:P=>{T||P.preventDefault()},children:[F&&t.jsx("span",{className:"sitespin","aria-hidden":"true"}),F?e.viewSiteBusy:e.viewSite]}),t.jsx("a",{className:"viewbtn sm"+(G?"":" off"),href:G||void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewSrcHint,onClick:P=>{G||P.preventDefault()},children:e.viewSrc})]})}),g.showCredits&&He&&t.jsxs("button",{type:"button",className:"credits"+(He.total_available<=0&&!He.unlimited?" empty":""),onClick:()=>c({type:"modal",modal:"recharge"}),children:[t.jsx("span",{className:"cl",children:e.creditsCap}),t.jsx("b",{children:He.unlimited?"∞":He.total_available}),!He.unlimited&&t.jsxs("span",{className:"cm",children:["/ ",He.daily_grant+He.purchased]}),He.total_available<=0&&!He.unlimited?t.jsx("span",{className:"rc",children:e.creditsRecharge}):t.jsx("span",{className:"cd",children:e.creditsToday})]})]}),t.jsxs("div",{className:"dunder",children:[t.jsx("button",{type:"button",className:"dmulti",onClick:()=>A(!h),children:e.evalMulti}),t.jsx("button",{type:"button",className:"dmulti dsearch"+(E?" on":""),onClick:()=>I(!E),children:e.rsOpen}),Ne!==null&&Ne>0&&t.jsx("button",{type:"button",className:"dmulti darch"+(we?" on":""),onClick:()=>Se(!we),children:e.rsArchOpen(Ne)})]}),we&&t.jsx(Ld,{bump:vt,cbToken:v,onClose:()=>Se(!1),onEvaluate:P=>o(null,P),onAddAll:yt}),t.jsx("div",{className:"rsp slim"+(E?" on":" off"),"aria-hidden":!E,children:t.jsxs("div",{className:"rsp-in",children:[t.jsxs("button",{type:"button",className:"rspaste",tabIndex:E?void 0:-1,onClick:()=>B(P=>!P),children:[e.rsOr," · ",e.rsTextPh,t.jsx("i",{children:D?"▴":"▾"})]}),D&&t.jsx("textarea",{className:"rstext",value:ue,placeholder:e.rsTextPh,tabIndex:E?void 0:-1,onChange:P=>ge(P.target.value)})]})}),de&&t.jsx("div",{className:"rserr",children:de}),re&&t.jsxs("div",{className:"rscard",children:[t.jsxs("div",{className:"rsh",children:[t.jsx("b",{children:re.title}),re.source_url&&t.jsx("a",{href:re.source_url,target:"_blank",rel:"noopener noreferrer",children:e.rsSource}),t.jsx("button",{type:"button",className:"rsx",title:e.rsClose,onClick:()=>{ye(null),We(null)},children:"×"})]}),re.market&&t.jsx("p",{className:"rsmk",children:re.market}),Je.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:e.rsTags}),Je.map(P=>t.jsx("span",{children:P},P))]}),t.jsxs("div",{className:"rsbody",children:[re.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${re.mindmap_png_b64}`,alt:e.rsMindmap}),t.jsx("figcaption",{children:e.rsMindmap})]}),t.jsx("div",{className:"rssum",children:Go(re.summary_md||"").map((P,Z)=>t.jsx("p",{children:P},Z))})]}),t.jsx(Yo,{card:re,onEvaluate:P=>o(null,P),onAddAll:yt}),t.jsxs("div",{className:"rsfoot",children:[t.jsx("span",{children:e.rsFound(Mt)}),zt]})]}),h&&t.jsx(Wo,{}),rt.slice(0,1).map((P,Z)=>{const le=P.verdict==="kept",xe=P.verdict==="quota",pe=P.verdict==="unresolved",qe=le?"var(--brand)":xe?"var(--bolt)":pe?"var(--blue)":"var(--red)",Be=le?"var(--brand-l)":xe?"#FFF3D6":pe?"#EEF4FF":"#FDECEC";return t.jsxs("div",{className:"result on",style:{"--c":qe,"--bgc":Be},children:[t.jsx("span",{className:"vv",children:t.jsx("span",{className:"vp",children:le?"✓ "+e.kept:xe?"⏳":pe?"❓ "+e.evalPickChip:"✗ "+e.dropped})}),P.name&&t.jsx("span",{className:"rn",children:P.name}),t.jsx("span",{className:"rr",children:P.reason?t.jsxs(t.Fragment,{children:[t.jsx("b",{children:e.why})," ",P.reason]}):null}),!!(P.candidates&&P.candidates.length)&&t.jsx("span",{className:"sitepick",children:P.candidates.map(Ae=>t.jsxs("span",{className:"sp1",children:[t.jsxs("a",{href:Ae.url.startsWith("http")?Ae.url:`https://${Ae.url}`,target:"_blank",rel:"nofollow noopener",children:[(Ae.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,34)," ↗"]}),t.jsx("button",{type:"button",onClick:()=>o(null,Ae.url,P.name),children:e.evalPickGo})]},Ae.url))}),!xe&&!pe&&t.jsx("button",{type:"button",className:"go",onClick:()=>{c({type:"ptab",tab:le?1:5});const Ae=(P.name||"").trim().toLowerCase();window.setTimeout(()=>{const ft=[...document.querySelectorAll(".atl2 .list .row")].find(Xe=>{var da;return(((da=Xe.querySelector(".rnm"))==null?void 0:da.textContent)||"").trim().toLowerCase().includes(Ae)});ft&&(ft.scrollIntoView({behavior:"smooth",block:"center"}),ft.classList.add("flashrow"),window.setTimeout(()=>ft.classList.remove("flashrow"),2200))},260)},children:e.seeSpace(le?e.statusKeep.replace("✅ ",""):e.statusDrop.replace("❌ ",""))})]},Z)}),f&&(i.kept+i.dropped>0||rt.length>0)&&t.jsxs("div",{className:"tally",children:[t.jsx("span",{dangerouslySetInnerHTML:{__html:e.session(i.kept,i.dropped)}})," ","·"," ",t.jsx("a",{onClick:()=>c({type:"modal",modal:"space"}),children:e.seeMySpace})]})]})}function Od(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Md(){const{st:e,dispatch:a,byId:r,t:n,doDeep:o}=Q(),i=e.memoConsole?r.get(e.memoConsole):null,c=p.useMemo(()=>i?[i.reasoning||"",Od(i.summary||"")].filter(Boolean).join(`

`):"",[i]);if(!i)return null;const s=Nt(i),l=En(i);return t.jsx("div",{className:"demand",style:{paddingTop:0},children:t.jsxs("div",{className:"memo",style:{marginTop:0},children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"nm",children:i.name}),s&&t.jsx("span",{className:"vv",children:s}),typeof i.score=="number"&&t.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[i.score,"/100"]}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),t.jsx("div",{className:"tabs2",children:t.jsx("button",{type:"button","aria-selected":"true",children:n.memoSynth})}),t.jsx("div",{className:"mb2",children:c?c.split(`

`).map((g,d)=>t.jsx("p",{style:{margin:"0 0 10px"},children:g},d)):t.jsx("p",{children:n.memoNone})}),t.jsxs("div",{className:"mf",children:[Pt(i)?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"t",children:n.memoDeepHint}),t.jsx("button",{type:"button",className:"deep",onClick:()=>o(i),children:n.memoDeep})]}):t.jsx("span",{className:"t",children:l===2?n.critMemoKinds:""}),i.memoUrl&&t.jsx("a",{className:"go",href:i.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:n.memoOpenFull})]})]})})}function Fn({name:e}){const{t:a,token:r,caps:n,mode:o,flashErr:i}=Q(),[c,s]=p.useState(!1),[l,g]=p.useState(null),d=n.pipe&&o==="client"&&!n.lockActions,x=async()=>{if(!d||c)return;s(!0);const m=await po(r,e);if(s(!1),!m){i(a.actErr);return}g(m.results||[])};return p.useEffect(()=>{if(!d)return;const m=b=>{var y;const u=String(((y=b.detail)==null?void 0:y.name)||"").trim();u&&u.toLowerCase()===e.toLowerCase()&&x()};return window.addEventListener("ppmap:similar",m),()=>window.removeEventListener("ppmap:similar",m)},[e,d]),p.useEffect(()=>{if(d)try{const m=(sessionStorage.getItem("pp:similar")||"").trim();m&&m.toLowerCase()===e.toLowerCase()&&(sessionStorage.removeItem("pp:similar"),x())}catch{}},[e,d]),d?t.jsxs("div",{className:"simb",onClick:m=>m.stopPropagation(),children:[t.jsx("button",{type:"button",className:"abtn",disabled:c,onClick:()=>{x()},children:c?a.similarBusy:a.similar}),l&&(l.length===0?t.jsx("p",{className:"mnote",children:a.similarNone}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"siml",children:l.map(m=>t.jsxs("li",{children:[t.jsx("b",{className:m.verdict==="kept"?"ok":"ko",children:m.company}),m.reason&&t.jsx("span",{children:m.reason})]},m.company))}),t.jsx("p",{className:"mnote dim",children:a.similarNote})]}))]}):null}const Dd=new Set(["b","strong","i","em","u","br","p","ul","ol","li","h4","h5"]),ba=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Id(e){const a=String(e||"");if(!a)return"";let r="",n=0;for(;n<a.length;){const o=a.indexOf("<",n);if(o<0){r+=ba(a.slice(n));break}r+=ba(a.slice(n,o));const i=a.indexOf(">",o);if(i<0){r+=ba(a.slice(o));break}const c=a.slice(o+1,i).trim(),s=/^(\/?)([a-zA-Z0-9]+)/.exec(c),l=s?s[2].toLowerCase():"";s&&Dd.has(l)?r+=`<${s[1]}${l}>`:r+=ba(a.slice(o,i+1)),n=i+1}return r}const Pd=new Set(["script","noscript","style","link","iframe","object","embed","form","input","select","textarea","button","meta","base","dialog","svg","math","template","video","audio","source"]),Wr={"*":new Set(["class","style","title","colspan","rowspan"]),img:new Set(["src","alt","width","height"]),a:new Set(["href"])};function Qo(e){var r;const a=Array.from(e.children);for(const n of a){const o=n.tagName.toLowerCase();if(Pd.has(o)){n.remove();continue}for(const c of Array.from(n.attributes)){const s=c.name.toLowerCase();(!(Wr["*"].has(s)||((r=Wr[o])==null?void 0:r.has(s)))||s.startsWith("on"))&&n.removeAttribute(c.name)}const i=n.getAttribute("style")||"";if(i&&/position\s*:\s*(fixed|sticky)/i.test(i))n.removeAttribute("style");else if(i){const c=i.split(";").filter(s=>s.trim()&&!/^\s*(font-size|font-family|line-height|font)\s*:/i.test(s)).join(";");c!==i&&(c?n.setAttribute("style",c):n.removeAttribute("style"))}if(o==="a"){const c=(n.getAttribute("href")||"").trim();/^(https?:|mailto:)/i.test(c)?(n.setAttribute("target","_blank"),n.setAttribute("rel","noopener noreferrer")):n.removeAttribute("href")}if(o==="img"){const c=(n.getAttribute("src")||"").trim();if(!/^https?:/i.test(c)){n.remove();continue}n.setAttribute("loading","lazy")}Qo(n)}}function Xa(e){const a=e.cloneNode(!0);return Qo(a),a.querySelectorAll("[id]").forEach(r=>r.removeAttribute("id")),a.removeAttribute("id"),a.innerHTML}const Za=new Map;function _d(e){const a=(e||"").trim();if(!/^https?:/i.test(a))return Promise.resolve(null);let r=Za.get(a);return r||(r=Bd(a).catch(()=>null),r.then(n=>{n||Za.delete(a)}),Za.set(a,r)),r}async function Bd(e){var x,m;const a=await fetch(e,{credentials:"omit"});if(!a.ok)return null;const r=new DOMParser().parseFromString(await a.text(),"text/html"),n=b=>{var u;return(((u=r.querySelector(b))==null?void 0:u.textContent)||"").trim()},o=r.querySelector(".sb-score"),i=((x=Array.from((o==null?void 0:o.classList)||[]).find(b=>b.startsWith("sb-score-")))==null?void 0:x.slice(9))||"",c=[];let s=null;const l=Array.from(r.querySelectorAll(".sidebar .sb-nav-heading, .sidebar a.nav-item"));for(const b of l){if(b.classList.contains("sb-nav-heading")){s={label:(b.textContent||"").trim(),items:[]},c.push(s);continue}const u=b.getAttribute("href")||"";if(!u.startsWith("#"))continue;const y=u.slice(1),w=$d(r,y);w&&(s||(s={label:"",items:[]},c.push(s)),s.items.push({id:y,title:(b.textContent||"").trim(),html:w,poids:w.length}))}const g=((m=/\/([a-z0-9-]+)-v2(?:\.html)?\/?$/i.exec(e))==null?void 0:m[1])||"",d={score:n(".sb-score"),scoreTone:i,tags:Array.from(r.querySelectorAll(".sb-tag")).map(b=>(b.textContent||"").trim()).filter(Boolean),name:n(".sidebar-company-name"),tagline:n(".sidebar-tagline"),desc:n(".meta-desc"),groups:c.filter(b=>b.items.length),mindmapSlug:r.querySelector(".cm-mindmap-png")?g:""};return d.groups.length?d:null}const Gr={"fiche-contact":"[data-ct-card]","fiche-attaque":"[data-ct-card]"};function $d(e,a){const r=e.getElementById(a),n=r?Yr(e,r):"";if(n)return n;const o=Gr[a]?e.querySelector(Gr[a]):null;return o&&o!==r?Yr(e,o):""}function Yr(e,a){var r,n;if(a.classList.contains("section-container")){const o=a.cloneNode(!0);return(r=o.querySelector("h2.section-title"))==null||r.remove(),Xa(o)}if(/^h\d$/i.test(a.tagName)){const o=e.createElement("div"),i=Array.from(((n=a.parentElement)==null?void 0:n.children)||[]);if(i.filter(l=>/^h3$/i.test(l.tagName))[0]===a)for(const l of i){if(l===a)break;/^h2$/i.test(l.tagName)||o.appendChild(l.cloneNode(!0))}let s=a.nextElementSibling;for(;s&&!/^h3$/i.test(s.tagName);)o.appendChild(s.cloneNode(!0)),s=s.nextElementSibling;return o.children.length?Xa(o):""}return Xa(a)}const en=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function Ze({k:e,v:a,href:r}){return a==null||a===""?null:t.jsxs("div",{className:"cdl",children:[t.jsx("span",{className:"cdk",children:e}),r?t.jsx("a",{className:"cdv",href:r,target:"_blank",rel:"noopener noreferrer",children:String(a)}):t.jsx("span",{className:"cdv",children:String(a)})]})}function Qr(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function Kr({v:e,sur:a,k:r}){const n=e>=80?"green":e>=55?"blue":e>=35?"amber":"red";return t.jsxs("span",{className:`md-score md-${n}`,title:r,children:[Math.round(e*10)/10,a?`/${a}`:""]})}const tn=new Map;function Ud(e,a){const{token:r}=Q(),[n,o]=p.useState(null);return p.useEffect(()=>{if(!a||!r||!e.name)return;const i=`${r}:${e.id}:${e.checkId||""}`;let c=tn.get(i);c||(c=Ki(r,e.name,e.checkId),tn.set(i,c),c.then(l=>{(!l||!l.reasoning&&!l.summaryHtml)&&tn.delete(i)}));let s=!0;return c.then(l=>{s&&l&&o({id:e.id,d:l})}),()=>{s=!1}},[a,r,e.id,e.name,e.checkId]),n&&n.id===e.id?n.d:null}const Hd=6e4;function Vd({o:e}){const{t:a,doDeep:r}=Q(),[n,o]=p.useState(null),[i,c]=p.useState(e.memoUrl?"load":"off"),[s,l]=p.useState(()=>new Set),[g,d]=p.useState(!1),x=p.useRef(new Map);p.useEffect(()=>{let y=!0;if(l(new Set),d(!1),x.current=new Map,!e.memoUrl){c("off"),o(null);return}return c("load"),o(null),_d(e.memoUrl).then(w=>{y&&(o(w),c(w?"ok":"err"))}),()=>{y=!1}},[e.memoUrl]);const m=Nt(e),b=y=>{var w;return(w=x.current.get(y))==null?void 0:w.scrollIntoView({behavior:"smooth",block:"start"})},u=t.jsxs("div",{className:"cdacts",children:[Pt(e)&&t.jsx("button",{type:"button",className:"btn p",onClick:y=>{y.stopPropagation(),r(e)},children:a.memoDeep}),e.memoPdfUrl&&t.jsx("a",{className:"btn d",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",onClick:y=>y.stopPropagation(),children:"PDF ↗"})]});if(i==="off"){const y=[e.reasoning||"",Qr(e.summary||"")].filter(Boolean);return t.jsxs("div",{className:"cdmemo",children:[y.length?y.join(`

`).split(`

`).map((w,f)=>t.jsx("p",{className:"cdtxt",children:w},f)):t.jsx("p",{className:"cdtxt",children:a.memoNone}),u]})}if(i!=="ok"){const y=[e.reasoning||"",Qr(e.summary||"")].filter(Boolean);return t.jsxs("div",{className:"cdmemo",children:[m&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:m}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsx("p",{className:"mnote dim",children:i==="load"?a.memoLoading:a.memoLoadErr}),y.length>0&&y.join(`

`).split(`

`).map((w,f)=>t.jsx("p",{className:"cdtxt",children:w},f)),i==="err"&&e.memoUrl&&t.jsx("div",{className:"cdacts",children:t.jsx("button",{type:"button",className:"btn b",onClick:w=>{w.stopPropagation(),d(f=>!f)},children:g?a.memoHideHere:a.memoReadHere})}),g&&e.memoUrl&&t.jsx("iframe",{className:"cdembed",src:e.memoUrl,loading:"lazy",title:a.cdMemoTab,referrerPolicy:"no-referrer-when-downgrade",onClick:w=>w.stopPropagation()}),u,e.memoUrl&&t.jsx("a",{className:"btn p mdfull",href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",onClick:w=>w.stopPropagation(),children:a.memoOpenFull})]})}return t.jsxs("div",{className:"cdmemo memodoc",children:[m&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:m}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"md-head",children:[n.score&&t.jsx("span",{className:"md-score"+(n.scoreTone?` md-${n.scoreTone}`:""),children:n.score}),n.tags.map(y=>t.jsx("span",{className:"md-tag",children:y},y)),n.tagline&&t.jsx("p",{className:"md-tagline",children:n.tagline})]}),t.jsx("div",{className:"md-toc",children:n.groups.map(y=>y.items.map(w=>t.jsx("button",{type:"button",className:"md-jump",onClick:f=>{f.stopPropagation(),b(w.id)},children:w.title},w.id)))}),n.groups.map((y,w)=>t.jsxs("div",{className:"md-grp",children:[y.label&&t.jsx("div",{className:"md-grp-h",children:y.label}),y.items.map(f=>{const v=f.poids>Hd&&!s.has(f.id),j=f.id==="fiche-contact"||f.id==="fiche-attaque";return t.jsxs("section",{className:"md-sec",ref:k=>{k&&x.current.set(f.id,k)},children:[t.jsx("h4",{className:"md-h",children:f.title}),j&&(e.contactName||e.contactEmail||e.contactLinkedin)&&t.jsxs("div",{className:"md-ctc",children:[t.jsx("span",{className:"cdk",children:a.mdContactKnown}),e.contactName&&t.jsx("b",{children:e.contactName}),e.contactEmail&&t.jsx("a",{href:`mailto:${e.contactEmail}`,onClick:k=>k.stopPropagation(),children:e.contactEmail}),e.contactLinkedin&&t.jsx("a",{href:e.contactLinkedin,target:"_blank",rel:"noopener noreferrer",onClick:k=>k.stopPropagation(),children:"LinkedIn"})]}),v?t.jsx("button",{type:"button",className:"abtn md-more",onClick:k=>{k.stopPropagation(),l(N=>new Set(N).add(f.id))},children:a.memoUnfold(Math.round(f.poids/1024))}):t.jsx("div",{className:"md-body",dangerouslySetInnerHTML:{__html:f.html}}),!v&&n.mindmapSlug&&f.html.includes("cm-mindmap-png")&&t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"md-h md-mm-h",children:a.mdMindmap(n.name||e.name)}),t.jsx("iframe",{className:"md-mm",loading:"lazy",title:a.mdMindmap(n.name||e.name),src:`${Ia}/cibles/mindmap-view?slug=${encodeURIComponent(n.mindmapSlug)}`,onClick:k=>k.stopPropagation()})]})]},f.id)})]},y.label||w)),u,e.memoUrl&&t.jsx("a",{className:"btn p mdfull",href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",onClick:y=>y.stopPropagation(),children:a.memoOpenFull})]})}function Wd({o:e}){const{t:a,token:r,caps:n,canWrite:o,flash:i,flashErr:c,lang:s}=Q(),[l,g]=p.useState(!1),[d,x]=p.useState(!1),[m,b]=p.useState(!1),[u,y]=p.useState(null),[w,f]=p.useState(""),[v,j]=p.useState(null),[k,N]=p.useState(""),S={airtableId:e.airtableId,checkId:e.checkId},C=!!(e.airtableId||e.checkId),L=u&&u.id===e.id?u.entries:[],q=!!u&&u.id===e.id;if(p.useEffect(()=>{f(""),j(null),b(!1)},[e.id]),p.useEffect(()=>{if(!l||q||!C||!o)return;let R=!0;x(!0),b(!1);const $=e.id;return Jn(r,"list",S).then(F=>{if(!(!R||$!==e.id)){if(x(!1),!F.ok){b(!0);return}y({id:$,entries:F.entries})}}),()=>{R=!1}},[l,q,C,r,e.id,o]),!n.pipe||!o||!C)return null;const M=(R,$)=>{x(!0);const F=e.id;Jn(r,R,S,$).then(O=>{if(F===e.id){if(x(!1),!O.ok){c(a.notesErr);return}y({id:F,entries:O.entries}),b(!1),R==="add"&&(f(""),i(a.notesAdded)),R==="edit"&&j(null)}})};return t.jsxs("div",{className:"dnotes",children:[t.jsxs("button",{type:"button",className:"dn-h","aria-expanded":l,onClick:R=>{R.stopPropagation(),g($=>!$)},children:[t.jsx("b",{children:a.notesT}),L.length>0&&t.jsx("span",{className:"dn-n",children:a.notesCount(L.length)}),t.jsx("i",{children:l?"▾":"▸"})]}),l&&t.jsxs("div",{className:"dn-b",onClick:R=>R.stopPropagation(),children:[t.jsx("p",{className:"mnote dim",children:a.notesHint}),d&&!L.length&&t.jsx("p",{className:"mnote",children:a.notesLoading}),m&&t.jsx("p",{className:"mnote warn",children:a.notesErr}),!d&&!m&&q&&!L.length&&t.jsx("p",{className:"mnote dim",children:a.notesEmpty}),L.map(R=>t.jsxs("div",{className:"dn-e",children:[t.jsx("span",{className:"dn-d",children:s==="fr"?R.date.split("-").reverse().join("/"):R.date}),v===R.id?t.jsxs(t.Fragment,{children:[t.jsx("textarea",{maxLength:4e3,value:k,rows:3,onChange:$=>N($.target.value)}),t.jsxs("div",{className:"dn-a",children:[t.jsx("button",{type:"button",className:"abtn",disabled:d||!k.trim(),onClick:()=>M("edit",{entryId:R.id,text:k.trim()}),children:a.notesSave}),t.jsx("button",{type:"button",className:"lk",onClick:()=>j(null),children:a.notesCancel})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"dn-t",children:R.text}),o&&t.jsxs("div",{className:"dn-a",children:[t.jsx("button",{type:"button",className:"lk",onClick:()=>{j(R.id),N(R.text)},children:a.notesEdit}),t.jsx("button",{type:"button",className:"lk",disabled:d,onClick:()=>{window.confirm(a.notesDelAsk)&&M("delete",{entryId:R.id})},children:a.notesDel})]})]})]},R.id)),o&&t.jsxs("div",{className:"dn-new",children:[t.jsx("textarea",{maxLength:4e3,rows:2,placeholder:a.notesPh,value:w,onChange:R=>f(R.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:d||!w.trim(),onClick:()=>M("add",{text:w.trim()}),children:a.notesAdd})]})]})]})}function Rn({o:e}){var N;const{t:a,lang:r,dispatch:n,caps:o,canWrite:i,doRegen:c}=Q(),s=sa(e),l=Nt(e),g=(e.cribleStatus||"").trim().toUpperCase()||(s==="NO MATCH"?"NO MATCH":s==="MATCH"?"MATCH":""),d=[e.sector,e.stage,e.countryLabel,e.city,e.website,e.domain,e.linkedinCompany,e.angle,e.date].filter(Boolean).length,x=[e.contactName,e.contactEmail,e.contactLinkedin,e.contactPhone].filter(Boolean).length,m=[e.ceoStatus,e.ceoNote,o.pipe?e.memoUrl:"",o.pipe?e.memoPdfUrl:""].filter(Boolean).length+(typeof e.engagement=="number"&&e.engagement>0?1:0)+(i&&o.pipe&&(e.airtableId||e.checkId)?1:0),b=p.useMemo(()=>[{k:"eval",lib:a.cdEvaluation,n:(g?1:0)+(e.reasoning?1:0)+(o.pipe&&!o.lockActions&&!e.memoUrl?1:0)+(typeof e.engagement=="number"&&e.engagement>0?1:0)},{k:"conv",lib:a.cdConviction,n:(l?1:0)+(e.summary?1:0)+(typeof e.convictionScore=="number"?1:0)},{k:"memo",lib:a.cdMemoTab,n:e.memoUrl||e.summary||Pt(e)?1:0},{k:"soc",lib:a.cdSociete,n:d},{k:"ctc",lib:a.cdContact,n:x},{k:"suivi",lib:a.cdSuivi,n:m}].filter(S=>S.n>0),[e,a,o,g,l,d,x,m]),[u,y]=p.useState(""),w=b.some(S=>S.k===u)?u:((N=b[0])==null?void 0:N.k)||"",f=Ud(e,w==="eval"||w==="conv");if(!b.length)return null;const v=((f==null?void 0:f.reasoning)||"").length>(e.reasoning||"").length?f.reasoning:e.reasoning||"",j=((f==null?void 0:f.summaryHtml)||"").length>(e.summary||"").length?f.summaryHtml:e.summary||"",k=(f==null?void 0:f.convictionScore)??e.convictionScore;return t.jsxs("div",{className:"cdtabs",children:[t.jsx("div",{className:"cdnav",role:"tablist",children:b.map(S=>t.jsx("button",{type:"button",role:"tab","aria-selected":w===S.k,"data-tour":"tab-"+S.k,className:w===S.k?"on":"",onClick:C=>{C.stopPropagation(),y(S.k)},children:S.lib},S.k))}),t.jsxs("div",{className:"cdbody",onClick:S=>S.stopPropagation(),children:[w==="eval"&&t.jsxs(t.Fragment,{children:[g&&t.jsxs("div",{className:"cdv1"+(g==="NO MATCH"?" out":""),children:[t.jsx("b",{children:g==="NO MATCH"?a.vOut:a.vKept}),t.jsx("span",{className:"cdw",children:a.cdCrible})]}),t.jsxs("div",{className:"md-head evalhead",children:[typeof e.score=="number"&&t.jsx(Kr,{v:e.score,sur:100,k:a.cdScore}),typeof e.engagement=="number"&&e.engagement>0&&t.jsxs("span",{className:"md-score md-amber",title:a.cdEngagementHint,children:[e.engagement>=20?"🔥 ":"",a.cdEngagement," ",Math.round(e.engagement*10)/10]}),e.angle&&t.jsx("span",{className:"md-tag",children:e.angle})]}),v&&v.split(`

`).map((S,C)=>t.jsx("p",{className:"cdtxt",children:S},C)),typeof e.engagement=="number"&&e.engagement>0&&t.jsx("p",{className:"mnote dim",children:a.cdEngagementHint}),o.pipe&&!o.lockActions&&!e.memoUrl&&t.jsx(Gd,{o:e})]}),w==="conv"&&t.jsxs(t.Fragment,{children:[l&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:l}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"md-head evalhead",children:[typeof k=="number"&&t.jsx(Kr,{v:k,sur:100,k:a.cdConvScore}),en(e.verdictDate,r)&&t.jsxs("span",{className:"md-tag",children:[a.cdVerdictDate," ",en(e.verdictDate,r)]})]}),j&&t.jsx("div",{className:"cdrich convrich",dangerouslySetInnerHTML:{__html:Id(j)}})]}),w==="memo"&&t.jsx(Vd,{o:e}),w==="soc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Ze,{k:a.cdSector,v:e.sector}),t.jsx(Ze,{k:a.cdStage,v:e.stage}),t.jsx(Ze,{k:a.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(Ze,{k:a.cdSite,v:e.domain||e.website,href:e.website||void 0}),t.jsx(Ze,{k:a.cdLinkedin,v:e.linkedinCompany?"LinkedIn":"",href:e.linkedinCompany}),t.jsx(Ze,{k:a.cdAngle,v:e.angle}),t.jsx(Ze,{k:a.cdDetected,v:en(e.date,r)})]}),w==="ctc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Ze,{k:a.cdName,v:e.contactName}),t.jsx(Ze,{k:a.cdEmail,v:e.contactEmail,href:e.contactEmail?`mailto:${e.contactEmail}`:void 0}),t.jsx(Ze,{k:a.cdLinkedin,v:e.contactLinkedin?"LinkedIn":"",href:e.contactLinkedin}),t.jsx(Ze,{k:a.cdPhone,v:e.contactPhone,href:e.contactPhone?`tel:${e.contactPhone.replace(/[^+0-9]/g,"")}`:void 0})]}),w==="suivi"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"cdgrid",children:t.jsx(Ze,{k:a.cdCeoStatus,v:e.ceoStatus})}),typeof e.engagement=="number"&&e.engagement>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"md-head evalhead",children:t.jsxs("span",{className:"md-score md-amber",children:[e.engagement>=20?"🔥 ":"",a.cdEngagement," ",Math.round(e.engagement*10)/10]})}),t.jsx("p",{className:"mnote dim",children:a.cdEngagementHint})]}),e.ceoNote&&t.jsxs("p",{className:"cdtxt",children:["💬 ",e.ceoNote]}),t.jsx(Wd,{o:e}),o.pipe&&(e.memoUrl||e.memoPdfUrl)&&t.jsxs("div",{className:"cdacts",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"abtn",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemoOf(e.memoType)," →"]}),e.memoPdfUrl&&t.jsx("a",{className:"abtn",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"}),i&&e.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>c(e),children:a.actRegen})]})]})]})]})}const va=new Map;function Gd({o:e}){const{t:a,token:r}=Q(),[n,o]=p.useState(!1),[i,c]=p.useState(null);p.useEffect(()=>{if(!r||!e.name)return;const x=`${r}:${e.name.toLowerCase()}`;let m=va.get(x);m||(m=mo(r,[e.name]).then(u=>u[e.name]||Object.values(u)[0]||null).catch(()=>null),va.set(x,m),m.then(u=>{(!u||!u.ok)&&va.delete(x)}));let b=!0;return m.then(u=>{b&&u&&u.ok&&c(u)}),()=>{b=!1}},[r,e.id,e.name]);const s=async()=>{if(n)return;o(!0);const x=await lo(r,e.name,e.website||e.domain||"");c(x),x.ok&&va.set(`${r}:${e.name.toLowerCase()}`,Promise.resolve(x)),o(!1)},l=(i==null?void 0:i.blocs)||{},g=[[a.qaVP,l.value_prop],[a.qaProduct,l.produit],[a.qaModel,l.modele],[a.qaSummary,l.synthese]],d=g.some(([,x])=>x);return t.jsxs("div",{className:"qab",children:[!i&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mnote dim",children:a.qaHint}),t.jsx("button",{type:"button",className:"abtn",disabled:n,onClick:()=>{s()},children:n?a.qaBusy:a.qaRun})]}),i&&d&&t.jsxs(t.Fragment,{children:[g.filter(([,x])=>x).map(([x,m])=>t.jsxs("div",{className:"qal",children:[t.jsx("span",{className:"qak",children:x}),t.jsx("p",{children:m})]},x)),!!(i.pages||[]).length&&t.jsx("p",{className:"mnote dim",children:a.qaSources((i.pages||[]).length)})]}),i&&!d&&t.jsx("p",{className:"mnote warn",children:i.quota?a.qaQuota:a.qaEmpty})]})}function la({spec:e}){const a=p.useRef(null),r=p.useRef(null),[n,o]=p.useState(!1);return p.useEffect(()=>{const i=a.current;if(!i)return;let c=!1;const s=()=>{const g=Math.max(280,Math.min(560,i.clientWidth||320));Xn({kind:"op",card:e},g).then(d=>{!c&&d&&i.isConnected&&i.replaceChildren(d)})},l=window.requestAnimationFrame(s);return()=>{c=!0,window.cancelAnimationFrame(l),i.replaceChildren()}},[e]),p.useEffect(()=>{if(!n)return;const i=r.current;if(!i)return;let c=!1;Xn({kind:"op",card:e},Math.min(1100,Math.floor(window.innerWidth*.92))).then(l=>{!c&&l&&i.isConnected&&i.replaceChildren(l)});const s=l=>{l.key==="Escape"&&o(!1)};return document.addEventListener("keydown",s),()=>{c=!0,document.removeEventListener("keydown",s)}},[n,e]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:a,className:"zoom-card-host",title:"Agrandir",onClick:()=>o(!0)}),n&&Ut.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"atl2-lb",onClick:()=>o(!1),children:[t.jsx("div",{ref:r,style:{lineHeight:0}}),t.jsx("button",{type:"button",className:"atl2-lb-x","aria-label":"Fermer",onClick:()=>o(!1),children:"×"})]})}),document.body)]})}const Yd=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function Qd(e,a=!1){if(!e||typeof window>"u")return;const r=352,n=a?620:430,o=window.innerWidth,i=window.innerHeight,c=Math.min(Math.max(e.x-r/2,8),Math.max(8,o-r-8));let s=e.y+10;return s+n>i-8&&(s=Math.max(8,e.y-n-14)),s<8&&(s=8),{left:c,top:s}}function Kd(){const{st:e,dispatch:a,byId:r,t:n,lang:o,caps:i,mode:c,askEvaluate:s,doAnalyse:l,doDecide:g,doPromote:d,doRepeche:x,doApproach:m,doDeep:b,doOnboard:u,outbound:y,evalBusy:w}=Q(),f=e.popupId?r.get(e.popupId):null;if(!f)return null;const v=De(f),j=Ee(f),k=Nt(f),N=sa(f),S=f.kind==="target",C=L=>{a({type:"filters",patch:L}),a({type:"popup",id:null})};return Ut.createPortal(t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:Yd}),t.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),t.jsxs("div",{className:"pop on "+(e.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:Qd(e.popupAnchor,!!f.card),onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{className:"ph",children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h3",{children:f.name}),t.jsx("span",{className:"id",children:n.detected(n.daysAgo(bt(f.date)),Ke(f.engine,o))})]}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),t.jsxs("div",{className:"pb",children:[t.jsxs("div",{className:"tags",children:[f.cc&&t.jsx("button",{type:"button",className:"hi",onClick:()=>C({country:[f.cc]}),children:(Ht(f.cc,o)||f.countryLabel||"").toUpperCase()}),f.sector&&t.jsx("button",{type:"button",onClick:()=>C({sector:[f.sector]}),children:f.sector.toUpperCase()}),f.stage&&t.jsx("button",{type:"button",onClick:()=>C({stage:[f.stage]}),children:f.stage.toUpperCase()}),typeof f.amountEur=="number"&&f.amountEur>0&&t.jsx("span",{className:"am2",children:Vt(f.amountEur,o)})]}),i.pipe&&S&&t.jsxs("div",{className:"pstat",children:[N&&t.jsx("span",{className:"vd "+(N==="MATCH"?"v-ok":"v-no"),title:n.vt[N],children:N}),k&&t.jsx("span",{className:"vd v-cons",title:n.vt[k],children:k}),t.jsx("span",{className:"pstep",children:n.plabels[j]}),f.ceoStatus&&t.jsx("span",{className:"pstep own",children:f.ceoStatus})]}),(f.tagline||f.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:f.tagline||f.headline})]}),t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.how}),t.jsxs("p",{children:[Lt(f.engine)," ",t.jsx("b",{children:Ke(f.engine,o)})," — ",Ji(f.engine,o),f.noteTitle&&t.jsxs(t.Fragment,{children:[" · ",f.noteTitle]})]}),v?t.jsxs("p",{className:"psig",style:{marginTop:9},children:[t.jsx(Et,{o:f,lg:!0})," ",t.jsx(Pa,{o:f,src:!0}),t.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[n.signaledOn(fo(v,o))," · ",n.win7(ho(v,o))]})]}):t.jsx("p",{className:"pnos",style:{marginTop:5},children:n.noSignal})]}),f.card?t.jsx(la,{spec:f.card}):null,f.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:i.pipe&&j>=1?n.verdictCap:n.memo}),t.jsx("p",{className:"memo",children:f.reasoning})]}),i.pipe&&S&&k&&t.jsx("div",{className:"fld",children:t.jsxs("p",{style:{fontWeight:700},children:[k,typeof f.score=="number"&&f.score>0?" · "+n.score(f.score):""]})}),i.pipe&&S&&t.jsx(Rn,{o:f})]}),t.jsx(Fn,{name:f.name}),t.jsxs("div",{className:"pf",children:[i.lockActions||c!=="client"&&i.pipe?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[t.jsx("span",{className:"fill"}),"🔒 ",n.lockbarCta]}):i.pipe?t.jsxs(t.Fragment,{children:[j===0&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:w,onClick:()=>s(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)]}),j===1&&t.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{l(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actAnalyse]}),j===2&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{d(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actPromote]}),j===3&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{g(f,!0),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actYes]}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{g(f,!1),a({type:"popup",id:null})},children:n.actNo}),Pt(f)&&t.jsx("button",{type:"button",className:"abtn",title:n.memoDeepHint,onClick:()=>{b(f),a({type:"popup",id:null})},children:n.memoDeep})]}),j===4&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{m(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actApproach]}),j===5&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{x(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actRepeche]}),f.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:f.id}),a({type:"popup",id:null})},children:"📄"}),y&&t.jsx("button",{type:"button",className:"abtn",title:n.actOnboardTitle,onClick:()=>{u(f),a({type:"popup",id:null})},children:"🚀"})]}):f.engine==="media"&&f.url&&i.showDemand?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{var L;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:f.url}}))}catch{}a({type:"popup",id:null}),(L=document.querySelector(".atl2 .demand"))==null||L.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rsOpen]}),t.jsx("button",{type:"button",className:"abtn",disabled:w,title:n.evalGoOn(f.name),onClick:()=>s(f),children:"⚡"})]}):t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:w,onClick:()=>s(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)," →"]}),f.website&&t.jsx("a",{className:"psite",href:f.website.startsWith("http")?f.website:"https://"+f.website,target:"_blank",rel:"noopener noreferrer",title:f.website,children:"🌐"})]})]})]}),document.body)}function Jd(){const{lang:e,token:a,dossiers:r,caps:n}=Q(),o=a||"home",{names:i,verdicts:c}=p.useMemo(()=>{const l=[],g={};return r.forEach(d=>{d.kind!=="target"||!d.name||(l.push(d.name),g[d.name]=Xi(d)||"")}),{names:l,verdicts:g}},[r]);return{diff:p.useMemo(()=>i.length?Zi(o,i,c,e):null,[o,i.length]),names:i,verdicts:c,scope:o,caps:n}}function Xd(){const{st:e,dispatch:a,counts:r,t:n,doUndo:o,data:i,dossiers:c,caps:s}=Q(),[l,g]=p.useState(!1),[d,x]=p.useState(!1),m=p.useRef(null);p.useEffect(()=>{if(!l)return;const j=k=>{m.current&&!m.current.contains(k.target)&&g(!1)};return document.addEventListener("click",j,!0),()=>document.removeEventListener("click",j,!0)},[l]);const b=[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage],...s.pipe?[["crible",n.sortCrible],["memo",n.sortMemo],["score",n.sortScore]]:[]],u=i.loading&&!c.length,y=p.useRef({});p.useEffect(()=>{y.current={...r}},[r]);const w=j=>{const k=y.current[j],N=k!==void 0?r[j]-k:0;return t.jsxs("button",{type:"button",className:"step"+(j===3&&r[3]>0?" wait":""),style:{"--c":`var(${ea[j]})`,"--tc":j<=3?"var(--ink)":"#fff"},"aria-selected":e.ptab===j,title:n.phelp[j],onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}a({type:"ptab",tab:j})},children:[t.jsxs("span",{className:"l",children:[n.plabels[j],j===3&&r[3]>0&&t.jsx("i",{className:"wd"})]}),t.jsxs("span",{className:"n"+(N>0?" up":N<0?" down":""),children:[r[j],N!==0&&t.jsxs("em",{className:"delta",children:[N>0?"+":"−",Math.abs(N)]})]})]},j)},f=(j,k,N)=>t.jsxs("button",{type:"button",className:"off"+(k?" view":""),style:{"--c":`var(${ea[j]})`},"aria-selected":e.ptab===j,title:n.phelp[j],onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}a({type:"ptab",tab:j})},children:[t.jsx("span",{className:"l",children:N}),t.jsx("span",{className:"n",children:r[j]})]},j),v=(j,k,N,S=!1)=>t.jsx("button",{type:"button",className:"tool",title:k,disabled:S,onClick:N,children:j},k);return t.jsxs("div",{className:"funnel"+(u?" waiting":""),children:[t.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(w)}),t.jsxs("div",{className:"offtrack",children:[f(5,!1,n.plabels[5]),f(7,!0,n.plabels[7]),f(6,!0,"★ "+n.plabels[6])]}),t.jsxs("span",{className:"ftools",style:{marginLeft:"auto"},children:[v("↩",n.toolUndo,o,e.undo.length===0),t.jsx("button",{type:"button",className:"tool"+(d?" spin":""),title:n.toolReset,onClick:()=>{a({type:"reset"});try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}x(!0),window.setTimeout(()=>x(!1),600)},children:"↺"}),t.jsxs("span",{className:"fsort",ref:m,children:[t.jsx("button",{type:"button",className:"tool","aria-pressed":l,title:n.toolSort,onClick:()=>g(j=>!j),children:"⇅"}),l&&t.jsx("span",{className:"sortmenu",role:"listbox",children:b.map(([j,k])=>t.jsxs("button",{type:"button",role:"option","aria-selected":e.sort.key===j,className:"sortopt"+(e.sort.key===j?" on":""),onClick:()=>a({type:"sort",key:j}),children:[k,t.jsx("i",{children:e.sort.key===j?e.sort.dir===1?"↑":"↓":""})]},j))})]}),v("▶",n.toolTuto,()=>a({type:"modal",modal:"tuto"})),v("⚙",n.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}function Zd(){const{st:e,dispatch:a,t:r,scoped:n,memoQueued:o,doAnalyse:i,mode:c}=Q(),s=p.useRef(null),[l,g]=p.useState(60);p.useEffect(()=>{let u=0;const y=()=>{var k;const w=s.current;if(!w)return;const f=(k=w.parentElement)==null?void 0:k.querySelector('.funnel [aria-selected="true"]');if(!f)return;const v=f.getBoundingClientRect(),j=w.getBoundingClientRect();g(Math.max(20,Math.min(v.left+v.width/2-j.left,j.width-30)))};return u=requestAnimationFrame(y),window.addEventListener("resize",y),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",y)}},[e.ptab]);const d=e.ptab;let x=r.tuto[d].p;if(d===3){const u=n.filter(f=>f.kind==="target"&&Ee(f)===3),y=u.filter(f=>on(f)==="auto").length,w=u.filter(f=>on(f)==="cd").length;x=r.tutoPending(y,w,u.length)}const m=(()=>{if(c!=="client")return null;if(d===0&&n.length)return{label:r.tuto[0].a,run:()=>a({type:"chainStart",queue:n.map(u=>u.id)})};if(d===1){const u=n.filter(y=>y.kind==="target"&&Ee(y)===1&&!o.has(y.id)).slice(0,10);if(u.length)return{label:r.tuto[1].a,run:()=>a({type:"chainStart",queue:u.map(y=>y.id)})}}return null})(),b=es(d);return t.jsxs("div",{ref:s,className:"tuto mini"+(b?"":" on-dark"),style:{"--bg":`var(${ea[d]})`,"--ax":l+"px","--stc":b?"var(--ink)":"#fff","--stt":b?"#fff":"var(--ink)","--tc":b?"var(--ink)":"#fff"},children:[t.jsx("span",{className:"txt",children:t.jsxs("p",{children:[t.jsx("b",{className:"tstep",children:r.plabels[d].toUpperCase()}),t.jsx("span",{className:"tbody",dangerouslySetInnerHTML:{__html:x}})]})}),m&&t.jsx("button",{type:"button",className:"tprim",onClick:m.run,children:m.label})]})}const an=600,qt=62,Jr="atl2:fstats";function ec(){const{t:e,lang:a,data:r,caps:n,st:o,dispatch:i}=Q(),[c,s]=p.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem(Jr)==="on"}catch{return!1}}),l=r.stats,g=p.useMemo(()=>((l==null?void 0:l.by_day)||[]).slice(-30),[l]),d=(l==null?void 0:l.since)||"";if(!n.showFunnel||!l||typeof l.screened!="number")return null;const x=N=>a==="en"?N.slice(5,10):`${N.slice(8,10)}/${N.slice(5,7)}`,m=N=>N.toLocaleString(a==="en"?"en-US":"fr-FR"),b=g.reduce((N,S)=>Math.max(N,S.s||0),0),u=g.length?an/g.length:0,y=Math.max(4,u-4),w=g.length>=5&&b>0,f=r.marketEstimate||0,v=x(new Date().toISOString().slice(0,10)),j=N=>[...typeof N=="number"?[[N,e.funScreened("","")]]:[],...typeof l.kept=="number"?[[l.kept,e.funKept]]:[],...typeof l.analyzed=="number"?[[l.analyzed,e.funAnalyzed]]:[],...typeof l.shown=="number"?[[l.shown,e.funShown]]:[]],k=[];return typeof l.screened_window=="number"&&d&&k.push({cle:"fenetre",periode:e.funPerWindow(x(d),v),etapes:[[l.screened_window,e.funScreened("","")]]}),typeof l.screened=="number"&&k.push({cle:"total",periode:e.funPerAll,etapes:j(l.screened)}),t.jsxs("div",{className:"fstats"+(c?" on":""),children:[k.map(N=>t.jsxs("div",{className:"fst-row fst-lab",title:e.funScope,children:[t.jsx("span",{className:"fst-per",children:N.periode}),N.etapes.map(([S,C],L)=>t.jsxs("span",{className:"fst-t",children:[L>0&&t.jsx("span",{className:"fst-ar",children:"→"}),t.jsx("b",{children:m(S)}),t.jsx("i",{children:C})]},N.cle+C)),N.cle==="total"&&f>0&&t.jsxs("span",{className:"fst-t fst-mkt",children:[t.jsx("span",{className:"fst-ar",children:"·"}),t.jsx("i",{children:e.funOfMarket(m(f),Math.min(100,Math.round((l.screened||0)/f*100)))})]}),N.cle===k[k.length-1].cle&&w&&t.jsx("button",{type:"button",className:"fst-x","aria-expanded":c,title:c?e.fstatsHide:e.fstatsShow,onClick:()=>{const S=!c;s(S),S&&!o.mapFolded&&i({type:"mapFold",folded:!0});try{localStorage.setItem(Jr,S?"on":"off")}catch{}},children:c?"⌃":"⌄"})]},N.cle)),c&&w&&t.jsxs("div",{className:"fst-act",children:[t.jsxs("div",{className:"fst-ah",children:[t.jsx("span",{children:e.actTitle}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#0E7F3F"}}),e.actKept]}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#cfe0d6"}}),e.actScreened]})]}),t.jsxs("svg",{viewBox:`0 0 ${an} ${qt}`,preserveAspectRatio:"none",role:"img","aria-label":e.actTitle,children:[g.map((N,S)=>{const C=(N.s||0)/b*(qt-4),L=(N.m||0)/b*(qt-4),q=S*u+(u-y)/2;return t.jsxs("g",{children:[t.jsx("title",{children:`${x(N.d)} — ${N.s} ${e.actScreened} · ${N.m} ${e.actKept}`}),t.jsx("rect",{x:q,y:qt-2-C,width:y,height:C,fill:"#cfe0d6"}),t.jsx("rect",{x:q,y:qt-2-L,width:y,height:L,fill:"#0E7F3F"})]},N.d)}),t.jsx("line",{x1:0,y1:qt-1.5,x2:an,y2:qt-1.5,stroke:"#dbe5df",strokeWidth:1})]}),t.jsxs("div",{className:"fst-ax",children:[t.jsx("span",{children:x(g[0].d)}),t.jsx("span",{children:e.actToday})]})]})]})}function Xr(e){const a=(e||"").trim();return a?/^https?:\/\//i.test(a)?a:/^[a-z][a-z0-9+.-]*:/i.test(a)?"":`https://${a.replace(/^\/+/,"")}`:""}const Ko={"CALL PENDING":"call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function On({o:e,locked:a=!1}){const{t:r}=Q(),n=sa(e),o=Nt(e),i=Ee(e),c=on(e),s=ts(e);return t.jsxs("span",{className:"c-vd",children:[n?t.jsx("span",{className:"vd "+(n==="MATCH"?"v-ok":"v-no"),title:r.vt[n],children:n}):t.jsx("span",{className:"vd wait",children:r.actToEval}),o?t.jsx("span",{className:"vd "+(Ko[o]||"v-cons"),title:r.vt[o],children:o}):i===1?t.jsx("span",{className:"vd wait",children:r.actMemoQueue}):null,i===3&&c==="auto"&&t.jsx("span",{className:"org au",title:r.orgAutoTitle,children:r.orgAuto}),i===3&&c==="cd"&&t.jsx("span",{className:"org cd",title:r.orgCdTitle,children:r.orgCd}),i===3&&s!==null&&t.jsx("span",{className:"wait2 "+(s>10?"hot":s>=5?"warm":""),title:r.waitTitle(s),children:r.waitChip(s)}),!a&&t.jsx(kl,{o:e})]})}const $t=e=>e.length>22?e.slice(0,21)+"…":e;function ia(e){const a=(e.url||"").trim(),r=[e.headline,e.tagline].filter(n=>n&&n!==e.name).join(`
`);if(!(!a&&!r))try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:a,text:r}}))}catch{}}function Jo(){let e=0;return document.querySelectorAll("body.pp-desk .pph, body.pp-desk .pp-nav, body.pp-desk .pp-band, .atl2.ops .eval-stick, .atl2.ops .listhead, .atl2.cibles .eval-stick, .atl2.cibles .listhead").forEach(a=>{const r=a.getBoundingClientRect();r.height<4||r.top<window.innerHeight*.55&&r.bottom>e&&(e=r.bottom)}),e}function tc({on:e,rev:a}){const[r,n]=p.useState(null),[o,i]=p.useState({top:0,left:0,width:0});return p.useEffect(()=>{if(!e){n(null);return}const c=()=>{var u,y,w;const s=document.querySelector(".atl2.ops .desk-list"),l=document.querySelector(".atl2.ops .listhead");if(!s){n(null);return}const g=s.getBoundingClientRect(),d=l?l.getBoundingClientRect().bottom:g.top;i({top:Math.round(d),left:Math.round(g.left),width:Math.round(g.width)});const x=[...s.querySelectorAll(":scope .grp")];let m=null;for(const f of x){const v=f.querySelector(".grp-h");v&&v.getBoundingClientRect().bottom<=d+2&&(m=f)}if(!m){n(null);return}const b=m.querySelector(".grp-h");if(!b){n(null);return}n({ic:(((u=b.querySelector(".ic"))==null?void 0:u.textContent)||"").trim(),t:(((y=b.querySelector(".t"))==null?void 0:y.textContent)||"").trim(),s:(((w=b.querySelector(".s"))==null?void 0:w.textContent)||"").trim()})};return c(),window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("resize",c),()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",c)}},[e,a]),!e||!r||o.width<80?null:t.jsxs("div",{className:"grp-pin",style:{top:o.top,left:o.left,width:o.width},children:[t.jsx("span",{className:"ic",children:r.ic}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:r.t}),t.jsx("div",{className:"s",children:r.s})]})]})}function ac(e){const r=()=>{const n=Jo(),o=e.getBoundingClientRect().top-n-8;Math.abs(o)<2||window.scrollBy({top:o,left:0,behavior:"auto"})};r(),requestAnimationFrame(()=>requestAnimationFrame(r))}function Zr({o:e}){const{t:a,askEvaluate:r,evalBusy:n,lang:o}=Q(),[i,c]=p.useState(!1);if(p.useEffect(()=>{n||c(!1)},[n]),_e(e)){const g=(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("span",{className:"verdict",style:{"--c":g?"var(--brand)":"var(--red)"},title:e.reasoning||"",children:[g?"✓":"✗"," ",t.jsx("b",{children:g?a.kept:a.dropped}),typeof e.score=="number"&&e.score>0?" "+e.score:""]})}const l=i&&n;return t.jsxs("button",{type:"button",className:"rev"+(l?" loading":""),disabled:n,title:a.evalGoOn(e.name),onClick:g=>{g.stopPropagation(),c(!0),r(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn($t(e.name))})]})}function Mn({o:e}){const{t:a,caps:r,memoQueued:n,approachDone:o,doAnalyse:i,doDecide:c,doPromote:s,doRepeche:l,doApproach:g,dispatch:d,liveMemos:x}=Q(),m=u=>y=>{y.stopPropagation(),u()};if(r.lockActions){const u=m(()=>d({type:"modal",modal:"rdv"}));if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",onClick:u,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});const y=Ee(e);return y===0?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",onClick:u,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn($t(e.name))})]})}):y===1?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",onClick:u,children:a.actAnalyse})}):y===3?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",onClick:u,children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",onClick:u,children:a.actNo})]})}):y===2?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"promo",onClick:u,children:a.actPromote})}):y===4?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",onClick:u,children:a.actApproach})}):y===5?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"promo",onClick:u,children:a.actRepeche})}):t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn read",onClick:u,children:a.actMemoOf(e.memoType)})})}if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:u=>{u.stopPropagation(),ia(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});if(Ca(e)&&e.url)return t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:u=>{u.stopPropagation(),ia(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})});if(!r.pipe)return e.noCo?t.jsx("span",{className:"cell"}):t.jsx("span",{className:"cell",children:t.jsx(Zr,{o:e})});const b=Ee(e);if(b===0)return t.jsx("span",{className:"cell",children:t.jsx(Zr,{o:e})});if(b===1){const u=x.liveOf(e.name);if(u&&(u.status==="boot"||u.status==="running"))return t.jsx("span",{className:"cell",children:t.jsx(Na,{item:u,serverOff:x.serverOff,bootLbl:a.liveBoot,endLabel:a.liveEnd})});const y=n.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",disabled:y,onClick:m(()=>i(e)),children:y?a.actAnalyseQueued:a.actAnalyse})})}if(b===3)return t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:m(()=>c(e,!0)),children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:m(()=>c(e,!1)),children:a.actNo}),e.memoUrl&&t.jsxs("button",{type:"button",className:"memobtn read sm",title:a.actMemoOf(e.memoType),onClick:m(()=>d({type:"memoConsole",id:e.id})),children:["📄",t.jsx("span",{className:"mlbl",children:a.actMemoOf(e.memoType).replace("📖 "," ")})]})]})});if(b===4){const u=o.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",disabled:u,onClick:m(()=>g(e)),children:u?a.actApproachSent:a.actApproach})})}return b===2?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:m(()=>s(e)),children:a.actPromote}),e.memoUrl&&t.jsxs("button",{type:"button",className:"memobtn read sm",title:a.actMemoOf(e.memoType),onClick:m(()=>d({type:"memoConsole",id:e.id})),children:["📄",t.jsx("span",{className:"mlbl",children:a.actMemoOf(e.memoType).replace("📖 "," ")})]})]})}):b===5?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:m(()=>l(e)),children:a.actRepeche}),e.memoUrl&&t.jsxs("button",{type:"button",className:"memobtn read sm",title:a.actMemoOf(e.memoType),onClick:m(()=>d({type:"memoConsole",id:e.id})),children:["📄",t.jsx("span",{className:"mlbl",children:a.actMemoOf(e.memoType).replace("📖 "," ")})]})]})}):t.jsx("span",{className:"cell",children:e.memoUrl?t.jsx("button",{type:"button",className:"memobtn read",onClick:m(()=>d({type:"memoConsole",id:e.id})),children:a.actMemoOf(e.memoType)}):t.jsx("span",{className:"rc",children:"—"})})}function nc({o:e}){const{t:a,doThumb:r,thumbOf:n}=Q(),o=n(e);return t.jsxs("span",{className:"thu",children:[t.jsx("button",{type:"button",className:"tb up"+(o==="yes"?" on":""),title:a.thumbUp,onClick:i=>{i.stopPropagation(),r(e,!0)},children:"👍"}),t.jsx("button",{type:"button",className:"tb dn"+(o==="no"?" on":""),title:a.thumbDn,onClick:i=>{i.stopPropagation(),r(e,!1)},children:"👎"})]})}function rc({o:e}){const{lang:a}=Q();return De(e)?t.jsxs("span",{className:"c-sig",children:[t.jsx(Et,{o:e}),t.jsx(Pa,{o:e,src:!0})]}):t.jsx("span",{className:"c-sig",children:t.jsxs("span",{className:"mo",children:[Lt(e.engine||"")," ",Ke(e.engine||"",a)]})})}function oc({o:e,locked:a,open:r,onToggle:n,selected:o,echo:i,onSelect:c,fresh:s}){const{dispatch:l,caps:g,markRow:d,markedId:x,favIds:m,toggleFav:b,t:u}=Q(),y=Ee(e),w=["#16233A","#475C6E","#8798A8","#B9C6D2"],f=e.date?Math.max(0,Math.floor((Date.now()-Date.parse(e.date))/864e5)):9999,v=f<=0?0:f<=7?1:f<=30?2:3,j=g.pipe&&e.kind==="target"?["#8FA0B8","#9BD1B4","#5FB98C","#2E9A66","#0E8A44","#E2A5A5"][y]:w[v],k=m.has(e.id),N=S=>{if(a)return;if(c){c(e.id);return}if(g.pipe||e.kind==="op"){n();return}const C=S.currentTarget.getBoundingClientRect();l({type:"popup",id:e.id,anchor:{x:C.left+Math.min(280,C.width/3),y:C.bottom}})};return t.jsxs(p.Fragment,{children:[t.jsxs("div",{className:"row"+(x===e.id||r||o?" on":"")+(r?" open":"")+(o?" sel":"")+(i?" echo":"")+(g.pipe&&e.kind==="target"?" p"+y:"")+(k?" fav":"")+(a?" tzr":""),"aria-selected":o||void 0,onMouseEnter:()=>d(e.id),onMouseLeave:()=>d(null),onClick:N,children:[t.jsx("span",{className:"pt",style:{"--c":j}}),t.jsx(ni,{o:e}),t.jsxs("span",{className:"nd",children:[s&&t.jsx("span",{className:"rfresh",children:"✨"}),typeof e.engagement=="number"&&e.engagement>=20&&t.jsx("span",{className:"rhot",title:`${u.cdEngagement} ${Math.round(e.engagement*10)/10} · ${u.cdEngagementHint}`,children:"🔥"}),De(e)&&t.jsx(Et,{o:e}),t.jsxs("span",{className:"rnm"+(a?" nmx":""),title:a?void 0:e.name,children:[g.pipe&&t.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:k?1:.35,padding:0,marginRight:4},onClick:S=>{S.stopPropagation(),b(e)},children:k?"★":"☆"}),e.name]}),t.jsxs("span",{className:"rds",title:e.tagline||e.headline||"",children:[Ge(e)&&(e.date||"").slice(0,10)&&t.jsx("b",{className:"rdate",children:(e.date||"").slice(0,10).split("-").reverse().slice(0,2).join("/")}),[e.tagline,e.headline,e.reasoning].find(S=>S&&S!==e.name)||""]}),g.pipe&&!g.lockActions&&!a&&(e.website||e.contactLinkedin||e.contactEmail||e.contactPhone)&&t.jsxs("span",{className:"rlnk",onClick:S=>S.stopPropagation(),children:[e.website&&t.jsx("a",{href:Xr(e.website),target:"_blank",rel:"noopener noreferrer","aria-label":u.rowSite,title:u.rowSite,children:"🌐"}),e.contactLinkedin&&t.jsx("a",{href:Xr(e.contactLinkedin),target:"_blank",rel:"noopener noreferrer","aria-label":u.rowLi,title:u.rowLi,children:"in"}),e.contactEmail&&t.jsx("a",{href:`mailto:${e.contactEmail}`,"aria-label":u.rowMail,title:u.rowMail,children:"✉"}),e.contactPhone&&t.jsx("a",{href:`tel:${e.contactPhone.replace(/[^+0-9]/g,"")}`,"aria-label":u.rowTel,title:u.rowTel,children:"☎"})]}),e.acquirer&&t.jsxs("button",{type:"button",className:"racq",title:u.acqSee(e.acquirer),onClick:S=>{S.stopPropagation(),l({type:"acquirer",value:e.acquirer||""})},children:["← ",$t(e.acquirer)]}),Ye(e)?t.jsx("span",{className:"rdec",title:u.doEdito,children:"📖"}):e.decryptHtml?t.jsx("span",{className:"rdec",title:u.zoomNewsMark,children:"📰"}):null]}),t.jsx(ic,{o:e}),t.jsx("span",{className:"c-stade",children:e.stage||""}),t.jsx(rc,{o:e}),g.pipe&&t.jsx(On,{o:e,locked:a}),g.pipe&&t.jsxs("span",{className:"c-sc",children:[typeof e.score=="number"?e.score:"",typeof e.score=="number"&&t.jsx("s",{children:"/100"})]}),t.jsx(Mn,{o:e}),g.showThumbs&&t.jsx(nc,{o:e})]}),r&&!a&&!c&&t.jsx(dc,{o:e})]})}function ic({o:e}){const{lang:a,caps:r}=Q();if(r.pipe&&e.kind==="target")return t.jsx("span",{className:"c-amt none",children:"—"});const n=Vt(e.amountEur,a);return t.jsx("span",{className:"c-amt"+(n?"":" none"),children:n||"—"})}function sc({o:e}){const{t:a,lang:r,askEvaluate:n,evalBusy:o,dispatch:i}=Q(),c=(m,b=!1)=>u=>{u.stopPropagation(),b&&i({type:"continent",key:"monde"}),i({type:"filters",patch:m})},s=(()=>{const m=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return m?m[1].slice(0,40):""})(),l=Vt(e.amountEur,r),g=(e.date||"").slice(0,10).split("-").reverse().join("/"),d=_e(e),x=d&&(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("div",{className:"card ops-open",children:[t.jsxs("div",{className:"oc-main",children:[e.decryptHtml?t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}):t.jsx("p",{className:"oc-head",children:e.headline||e.tagline||e.name}),t.jsxs("div",{className:"oc-meta",children:[e.sector&&t.jsx("button",{type:"button",onClick:c({sector:[e.sector]}),children:e.sector}),e.countryLabel&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:c({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:c({stage:[e.stage]}),children:e.stage}),l&&t.jsx("span",{className:"oc-amt",children:l}),g&&t.jsx("span",{children:g})]}),t.jsxs("div",{className:"oc-acts",children:[d?t.jsxs("span",{className:"verdict",style:{"--c":x?"var(--brand)":"var(--red)"},children:[x?"✓":"✗"," ",t.jsx("b",{children:x?a.kept:a.dropped})]}):Ge(e)?e.url&&t.jsx("button",{type:"button",className:"oc-cta",onClick:m=>{m.stopPropagation(),ia(e)},children:a.rowExtract}):t.jsx("button",{type:"button",className:"oc-cta",disabled:o,onClick:m=>{m.stopPropagation(),n(e)},children:a.evalGoOn($t(e.name))}),e.url&&t.jsxs("a",{className:"oc-src",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:m=>m.stopPropagation(),children:[(r==="fr"?"lire la source":"read the source")+(s?` · ${s}`:"")," ↗"]})]})]}),e.card&&t.jsx("div",{className:"oc-side",children:t.jsx(la,{spec:e.card})})]})}function lc({o:e}){const{t:a,lang:r,caps:n,dispatch:o}=Q();if(!e)return t.jsx("p",{className:"readpane-empty",children:r==="fr"?"Cliquez une ligne — le dossier s’ouvre ici, sans quitter la liste.":"Click a row — the file opens here, without leaving the list."});const i=(e.date||"").slice(0,10).split("-").reverse().join("/");return t.jsxs("div",{className:"zoom zoom-pipe",children:[t.jsxs("div",{className:"zoom-k",children:[Ke(e.engine||"",r),i?` · ${i}`:""]}),t.jsx("h3",{className:"zoom-h",children:e.name}),(e.sector||e.countryLabel||e.stage)&&t.jsxs("div",{className:"zoom-meta",children:[e.sector?t.jsx("span",{children:e.sector}):null,e.countryLabel?t.jsx("span",{children:e.countryLabel}):null,e.stage?t.jsx("span",{children:e.stage}):null]}),t.jsx("div",{className:"zoom-cta",children:n.lockActions?t.jsx("button",{type:"button",className:"oc-cta",onClick:()=>o({type:"modal",modal:"rdv"}),children:a.lockbarCta}):t.jsx(Mn,{o:e})}),t.jsx(Rn,{o:e})]})}function Xo({o:e,extra:a}){const{t:r,lang:n,askEvaluate:o,evalBusy:i,dispatch:c,caps:s,dossiers:l}=Q(),g=p.useRef(null),d=Ye(e);if(p.useEffect(()=>{if(!d||!(e!=null&&e.decryptHtml))return;const h=g.current;if(!h)return;let A=!1;return nn(()=>import("./fit-BnaWm7z_.js"),[]).then(async U=>{await U.ensureEditoCss(),!(A||!h.isConnected)&&(U.beautifyEditoRows(h),U.mountCardFits(h))}),()=>{A=!0}},[d,e==null?void 0:e.decryptHtml]),!e&&!a){const h=l.find(Ye);if(h)return t.jsx(Xo,{o:h})}const x=((e==null?void 0:e.name)||(a==null?void 0:a.name)||"").trim(),m=((e==null?void 0:e.url)||(a==null?void 0:a.url)||"").trim(),b=(e==null?void 0:e.headline)||(e==null?void 0:e.tagline)||(a==null?void 0:a.headline)||x,u=(e==null?void 0:e.card)||(a==null?void 0:a.card),y=e?!!e.noCo:!x||Sa(x),w=(e==null?void 0:e.engine)||"",f=Ye(e),v=e?Vt(e.amountEur,n):"",j=((e==null?void 0:e.date)||"").slice(0,10).split("-").reverse().join("/"),k=(()=>{const h=/https?:\/\/(?:www\.)?([^/]+)/.exec(m);return h?h[1].replace(/^www\./,"").slice(0,40):""})(),N=l.find(Ye),S=((N==null?void 0:N.url)||"").trim(),C=!!m&&!!S&&(m===S||m.endsWith(S)||S.endsWith(m)),L=(h,A=!1)=>U=>{U.stopPropagation(),A&&c({type:"continent",key:"monde"}),c({type:"filters",patch:h})};if(!e&&!a)return t.jsx("p",{className:"readpane-empty",children:n==="fr"?"Cliquez une ligne, un pin ou le ticker — le dossier s’ouvre ici.":"Click a row, a pin or the ticker — the file opens here."});const q=()=>{x&&(c({type:"continent",key:"monde"}),c({type:"filters",patch:{search:x}}))},M=()=>{e!=null&&e.sector&&c({type:"filters",patch:{sector:[e.sector]}})},R=()=>{ia({url:m,headline:b,tagline:e==null?void 0:e.tagline,name:x})},$=e?_e(e):!1,F=$&&e&&(e.verdict||"").toUpperCase()!=="NO MATCH",O=f?r.doEdito.replace(/^📖\s*/,""):w?Ke(w,n):n==="fr"?"Dossier":"File";return t.jsxs("div",{className:"zoom",children:[t.jsxs("div",{className:"zoom-k",children:[O,j?` · ${j}`:""]}),t.jsx("h3",{className:"zoom-h",children:b}),m&&!f&&(y||Ca({engine:w}))&&t.jsxs("a",{className:"zoom-ext",href:m,target:"_blank",rel:"noopener noreferrer",title:r.viewLinkHint,onClick:h=>h.stopPropagation(),children:[t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]}),r.viewLink,k?t.jsx("em",{children:k}):null]}),(e==null?void 0:e.decryptHtml)&&t.jsx("div",{ref:g,className:"ed-decrypt-b zoom-body"+(f?" ppart":""),dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsxs("div",{className:"zoom-meta",children:[(e==null?void 0:e.sector)&&t.jsx("button",{type:"button",onClick:L({sector:[e.sector]}),children:e.sector}),(e==null?void 0:e.countryLabel)&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:L({country:[e.cc]},!0),children:e.countryLabel}):e!=null&&e.countryLabel?t.jsx("span",{children:e.countryLabel}):null),(e==null?void 0:e.stage)&&t.jsx("button",{type:"button",onClick:L({stage:[e.stage]}),children:e.stage}),v&&t.jsx("span",{className:"oc-amt",children:v})]}),u&&t.jsx("div",{className:"zoom-card",children:t.jsx(la,{spec:u})}),(m&&!C&&!f||N&&!f)&&t.jsxs("div",{className:"zoom-srcbox",children:[m&&!C&&!f&&t.jsxs("a",{className:"zoom-src",href:m,target:"_blank",rel:"nofollow noopener",onClick:h=>h.stopPropagation(),children:[r.zoomSrc,k?` · ${k}`:""," ↗"]}),N&&!f&&t.jsxs("button",{type:"button",className:"zoom-src zoom-src-art",onClick:h=>{h.stopPropagation(),c({type:"focus",id:N.id})},children:[r.doEdito," →"]})]}),t.jsxs("div",{className:"zoom-acts",children:[$?t.jsxs("span",{className:"verdict",style:{"--c":F?"var(--brand)":"var(--red)"},children:[F?"✓":"✗"," ",t.jsx("b",{children:F?r.kept:r.dropped})]}):!y&&x?t.jsxs("button",{type:"button",className:"zp-go",disabled:i,onClick:h=>{h.stopPropagation(),o(e,x)},children:[t.jsx("span",{className:"zp-ico",children:"⚡"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.evalGoOn($t(x))}),t.jsx("em",{children:r.zoomEvalHint})]})]}):null,m&&!f&&(y||Ca({engine:w}))&&t.jsxs("button",{type:"button",className:"zp-go"+(!y&&x?" ghost":""),onClick:h=>{h.stopPropagation(),R()},children:[t.jsx("span",{className:"zp-ico",children:"🔎"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.rowExtract}),t.jsx("em",{children:r.rsOpen})]})]}),!y&&x&&t.jsxs("div",{className:"zp-row",children:[(e==null?void 0:e.sector)&&!s.pipe&&t.jsxs("button",{type:"button",className:"zp-sec",onClick:h=>{h.stopPropagation(),M()},children:[t.jsx("span",{className:"zp-k",children:r.zoomSimilar}),t.jsx("span",{className:"zp-v",children:e.sector}),t.jsx("em",{children:r.zoomSimilarHint})]}),t.jsxs("button",{type:"button",className:"zp-sec",onClick:h=>{h.stopPropagation(),q()},children:[t.jsx("span",{className:"zp-k",children:r.zoomInCockpit}),t.jsx("span",{className:"zp-v",children:$t(x)}),t.jsx("em",{children:r.zoomIsolateHint})]})]}),!y&&x&&s.pipe&&t.jsx(Fn,{name:x})]})]})}function dc({o:e}){const{t:a,lang:r,dispatch:n,caps:o,outbound:i,doOnboard:c}=Q();return!o.pipe&&e.kind==="op"?t.jsx(sc,{o:e}):t.jsxs("div",{className:"card",style:{display:"grid"},children:[t.jsxs("div",{children:[e.tagline&&t.jsx("p",{className:"lead",children:e.tagline}),e.decryptHtml&&t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsx(Rn,{o:e}),t.jsx(jl,{o:e}),t.jsx(Nl,{o:e}),t.jsx(Fn,{name:e.name}),t.jsxs("div",{className:"tg",children:[e.sector&&t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"filters",patch:{sector:[e.sector]}})},children:e.sector}),e.stage&&t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"filters",patch:{stage:[e.stage]}})},children:e.stage}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),n({type:"continent",key:"monde"}),n({type:"filters",patch:{country:[e.cc]}})},children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.city&&t.jsx("span",{children:e.city})]})]}),t.jsxs("div",{className:"cside",children:[t.jsxs("div",{className:"top",children:[typeof e.score=="number"&&t.jsx("span",{className:"sc3",children:e.score}),t.jsx("span",{className:"vv",children:t.jsx(On,{o:e})})]}),e.card&&t.jsx(la,{spec:e.card}),t.jsxs("div",{className:"sec2",children:[t.jsxs("div",{className:"k2",children:[Lt(e.engine||"")," ",Ke(e.engine||"",r)]}),De(e)&&t.jsx("div",{style:{marginTop:8},children:t.jsx(Et,{o:e})})]}),o.pipe&&(e.memoUrl||i)&&t.jsx("div",{className:"sec2 acts2",children:i&&t.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>c(e),children:a.actOnboard})})]})]})}function cc({o:e,locked:a,selected:r,onSelect:n}){const{t:o,dispatch:i,caps:c,doDecide:s,lang:l}=Q();if(!c.pipe&&e.kind==="op"){const x=Vt(e.amountEur,l),m=(()=>{const u=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return u?u[1].slice(0,32):""})(),b=(u,y=!1)=>w=>{w.stopPropagation(),y&&i({type:"continent",key:"monde"}),i({type:"filters",patch:u})};return t.jsxs("div",{className:"dcard dops"+(a?" tzr":"")+(r?" sel":""),onClick:()=>{!a&&n&&n(e.id)},children:[e.card&&t.jsx("div",{className:"dimg",children:t.jsx(la,{spec:e.card})}),t.jsxs("div",{className:"dh",children:[t.jsx("span",{className:"dnm",title:e.name,children:e.name}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial",children:"📖"})]}),e.headline&&e.headline!==e.name&&t.jsx("div",{className:"ddesc",children:e.headline}),t.jsxs("div",{className:"dtags",children:[e.sector&&t.jsx("button",{type:"button",onClick:b({sector:[e.sector]}),children:e.sector}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:b({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:b({stage:[e.stage]}),children:e.stage}),x&&t.jsx("span",{className:"damt",children:x})]}),t.jsxs("div",{className:"dsig",children:[t.jsxs("span",{className:"dmo",children:[Lt(e.engine||"")," ",Ke(e.engine||"",l)]}),De(e)&&t.jsx(Et,{o:e})]}),e.url&&t.jsxs("a",{className:"dsrc",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:u=>u.stopPropagation(),children:[(l==="fr"?"lire la source":"read the source")+(m?` · ${m}`:"")," ↗"]}),!a&&t.jsx("div",{className:"dact",children:t.jsx(Mn,{o:e})})]})}const g=Ee(e),d=["#E3E8F0","#E7F3EC","#C4E0D0","#7FC0A0","#12A150","#E5484D"][g];return t.jsxs("div",{className:"dcard"+(a?" tzr":"")+(r?" sel":""),style:{"--c":d},onClick:()=>{!a&&n&&n(e.id)},children:[t.jsxs("div",{className:"dh",children:[typeof e.score=="number"&&t.jsx("span",{className:"dsc",children:e.score}),t.jsx("span",{className:"dnm",title:e.name,children:e.name})]}),t.jsxs("div",{className:"dv",children:[t.jsx(On,{o:e}),De(e)&&t.jsx(Et,{o:e})]}),t.jsx("div",{className:"dmeta",children:[e.countryLabel,e.stage,e.sector].filter(Boolean).join(" · ")}),(e.tagline||e.reasoning)&&t.jsx("div",{className:"ddesc",children:e.tagline||e.reasoning}),!a&&c.pipe&&g===3&&t.jsxs("div",{className:"dyn",children:[t.jsx("button",{type:"button",style:{"--c3":"#0E8A44"},onClick:()=>s(e,!0),children:o.actYes}),t.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>s(e,!1),children:o.actNo})]}),!a&&e.memoUrl&&t.jsxs("button",{type:"button",className:"dmemo",onClick:()=>i({type:"memoConsole",id:e.id}),children:[o.actMemoOf(e.memoType)," →"]})]})}function pc(){const{t:e}=Q(),[a,r]=p.useState(0);return p.useEffect(()=>{const n=window.setInterval(()=>r(o=>o+1),2400);return()=>window.clearInterval(n)},[]),t.jsxs("div",{className:"loadwait","aria-live":"polite",children:[t.jsxs("div",{className:"lw-top",children:[t.jsx("span",{className:"lw-dot"}),t.jsx("span",{className:"lw-msg",children:e.loadMsgs[a%e.loadMsgs.length]})]}),[0,1,2,3,4,5].map(n=>t.jsxs("div",{className:"lw-row",style:{"--d":`${n*.12}s`},children:[t.jsx("span",{className:"lw-c lw-c1"}),t.jsx("span",{className:"lw-c lw-c2"}),t.jsx("span",{className:"lw-c lw-c3"})]},n))]})}function uc({counts:e}){const{st:a,dispatch:r,t:n,lang:o}=Q(),i=o==="en",c=d=>n.plabels[d]||"",s=[0,1,2,3,4,5,6,7].filter(d=>d!==a.ptab&&(e[d]||0)>0),l=s.includes(0)?0:s.sort((d,x)=>(e[x]||0)-(e[d]||0))[0];if(l===void 0)return t.jsx("div",{className:"void",children:n.emptyTab});const g=e[l]||0;return t.jsxs("div",{className:"void void-empty",children:[t.jsx("b",{children:i?`No “${c(a.ptab)}” for now.`:`0 ${c(a.ptab).toLowerCase().replace(/s$/,"")} pour l’instant.`}),t.jsx("span",{children:l===0?i?`${g} ${g>1?"files are":"file is"} waiting for your screening`:`${g} dossier${g>1?"s":""} attende${g>1?"nt":""} votre évaluation`:i?`${g} ${g>1?"files":"file"} in “${c(l)}”`:`${g} dossier${g>1?"s":""} dans « ${c(l)} »`}),t.jsxs("button",{type:"button",className:"abtn",onClick:()=>r({type:"ptab",tab:l}),children:[(i?"Open ":"Ouvrir ")+c(l)," →"]})]})}function mc(){var zt,Mt,Ie,it,Pe;const e=Q(),{st:a,dispatch:r,t:n,caps:o,counts:i,scoped:c,scopedAll:s,markRow:l,lang:g,sessTally:d,data:x,dossiers:m,source:b,focusExtra:u,byId:y,token:w}=e,f=bo(),v=p.useMemo(()=>{var X,ce,P,Z;if(!w||b==="ops")return null;const T=(((X=f==null?void 0:f.ed)==null?void 0:X.date)||(f==null?void 0:f.day)||"").slice(0,10),G=[(ce=f==null?void 0:f.ed)==null?void 0:ce.html,(P=f==null?void 0:f.ed)==null?void 0:P.acquirers_html].filter(Boolean).join("");return{id:"edito:brief",kind:"op",name:g==="en"?"Today's brief":"Brief du jour",headline:g==="en"?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",tagline:((Z=f==null?void 0:f.ed)==null?void 0:Z.date)||T,decryptHtml:G||void 0,date:T,engine:"edito",dealKind:"other",noCo:!0,cc:null,continent:null}},[w,b,g,(zt=f==null?void 0:f.ed)==null?void 0:zt.html,(Mt=f==null?void 0:f.ed)==null?void 0:Mt.acquirers_html,(Ie=f==null?void 0:f.ed)==null?void 0:Ie.date,f==null?void 0:f.day]),j=T=>o.lockRowsAfter!==null||b==="ops"||o.pipe?Number.MAX_SAFE_INTEGER:xo,[k,N]=p.useState(new Set);p.useEffect(()=>{N(new Set)},[a.ptab,a.continent]);const[S,C]=p.useState(null);p.useEffect(()=>{C(null)},[a.ptab,a.continent]);const[L,q]=p.useState(!a.mapFolded);p.useEffect(()=>{if(a.mapFolded){q(!1);return}const T=document.getElementById("atl2-stage");if(!T){q(!1);return}const G=new IntersectionObserver(([X])=>q(!!X&&X.isIntersecting),{root:null,rootMargin:"-120px 0px 0px 0px",threshold:0});return G.observe(T),()=>G.disconnect()},[a.mapFolded]);const M=a.mapFolded||!L,R=T=>N(G=>{const X=new Set(G);return X.has(T)?X.delete(T):X.add(T),X}),$=b==="ops"||o.pipe,[F,O]=p.useState("all"),[h,A]=p.useState(!1),[U,ee]=p.useState(null),[E,I]=p.useState(!1),D=p.useRef(!0);p.useEffect(()=>{if(D.current){D.current=!1;return}O("all"),I(!1)},[a.ptab,a.continent]),p.useEffect(()=>{if(!E)return;const T=G=>{var X,ce;(ce=(X=G.target)==null?void 0:X.closest)!=null&&ce.call(X,".atl2 .doable")||I(!1)};return document.addEventListener("click",T,!0),()=>document.removeEventListener("click",T,!0)},[E]);const B=p.useMemo(()=>{var G;const T=new Map;for(const X of ll(((G=f==null?void 0:f.ed)==null?void 0:G.html)||""))T.has(X.t)||T.set(X.t,X.html);return T},[(it=f==null?void 0:f.ed)==null?void 0:it.html]),te=p.useCallback(T=>{if(T.decryptHtml)return T.decryptHtml;if(!B.size)return;const G=(T.name||"").trim().toLowerCase();if(G.length<3)return;const X=B.get(G);if(X)return X;for(const[ce,P]of B)if(ce.includes(G)||G.includes(ce))return P},[B]),{diff:ae}=Jd(),[be,J]=p.useState(!1),he=a.filters.win==="1"&&!a.filters.day,[ue,ge]=p.useState(!1),_=p.useMemo(()=>new Set(((ae==null?void 0:ae.added)||[]).map(T=>T.trim().toLowerCase()).filter(Boolean)),[ae]),K=p.useMemo(()=>{if(!_.size)return 0;const T={...a,filters:{...a.filters,win:"all",day:"",signalOnly:!1,signalEngines:[]}};return m.filter(G=>!Ye(G)&&_.has((G.name||"").trim().toLowerCase())&&ta(G,T,o.pipe)).length},[m,_,a,o.pipe]);p.useEffect(()=>{const T=()=>{ge(!1),A(!1),O("all"),I(!1),r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})};return window.addEventListener("ppmap:tunnel",T),()=>window.removeEventListener("ppmap:tunnel",T)},[]),p.useEffect(()=>{ge(!1),A(!1),a.filters.signalOnly&&r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})},[a.ptab]);const V=p.useMemo(()=>{const T=s.filter(X=>!Ye(X)&&Ge(X));let G="";for(const X of T){const ce=(X.date||"").slice(0,10);ce&&(!G||ce<G)&&(G=ce)}return{n:T.length,since:G?G.split("-").reverse().slice(0,2).join("/"):""}},[s]),ne=V.n,H=p.useMemo(()=>{const G=ue&&_.size>0||a.filters.signalOnly||F!=="all"||h?s:c;let X=zn(G,a.sort);return X=X.filter(ce=>!Ye(ce)),ue&&_.size&&(X=X.filter(ce=>_.has((ce.name||"").trim().toLowerCase()))),h||F==="explore"?X=X.filter(Ge):F==="eval"?X=X.filter(ce=>!Ge(ce)&&!ce.noCo&&(ce.kind==="op"||!_e(ce))):o.pipe&&(X=X.filter(ce=>!Ge(ce))),X},[c,s,a.sort,F,ue,_,h,o.pipe]),de=p.useMemo(()=>o.pipe?m.filter(T=>T.kind==="target"&&!Ye(T)&&De(T)&&(a.continent==="monde"||T.continent===a.continent)):H.filter(T=>De(T)&&!_e(T)),[o.pipe,m,H,a.continent]).length,oe=p.useMemo(()=>o.pipe?H:H.filter(T=>!_e(T)&&!T.noCo&&!Ge(T)),[H,o.pipe]),re=b==="ops"?H.filter(Ge).length:0,ye=ue?"":o.pipe?n.plabels[a.ptab].toLowerCase():b==="ops"?n.edLabel:a.filters.status==="retenu"?n.keptByStan:a.filters.status==="ecarte"?n.droppedByStan:n.toSend,me=a.filters,We=me.sector.length+me.country.length+me.engine.length+me.stage.length+me.crible.length+me.angle.length+me.memoLevel.length+me.dealKind.length+(me.signalOnly?1:0)+(me.acquirer.trim()?1:0)+(me.search.trim()?1:0),we=[];if(me.day)we.push({k:"day",lib:n.fDay(me.day.slice(8,10)+"/"+me.day.slice(5,7)),off:()=>r({type:"filters",patch:{day:"",win:"all"}})});else if(me.win&&me.win!=="all"){const T=["1","7","30"].indexOf(me.win);T>=0&&we.push({k:"win",lib:n.dates[T],off:()=>r({type:"filters",patch:{win:"all"}})})}const Se=T=>T.length<=2?T.join(", "):`${T.length} ${n.fSelected}`;for(const T of["sector","country","engine","crible"]){const G=me[T];G&&G.length&&we.push({k:T,lib:Se(G),off:()=>r({type:"clearFacet",facet:T})})}me.search&&we.push({k:"search",lib:"🔍 "+me.search,off:()=>r({type:"filters",patch:{search:""}})}),ue&&_.size&&we.push({k:"since",lib:"✨ "+n.sinceChip,off:()=>ge(!1)}),me.signalOnly&&we.push({k:"sig",lib:"🔴 "+n.sigDock(de||me.signalEngines.length||0),off:()=>r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})});const Ne=(T,G,X="",ce=!1)=>t.jsxs("button",{type:"button","data-s":T,className:X,"aria-sort":a.sort.key===T?a.sort.dir===1?"ascending":"descending":"none",style:ce?{justifyContent:"flex-end"}:void 0,onClick:()=>r({type:"sort",key:T}),children:[G,t.jsx("span",{className:"ar",children:a.sort.key===T&&a.sort.dir===1?"▴":"▾"})]},T),Oe=p.useMemo(()=>{if(o.pipe||a.groupBy==="none")return null;const T=new Map;H.forEach(ce=>{const P=ce.engine||"?";T.has(P)||T.set(P,[]),T.get(P).push(ce)});const G={ma:0,fundraising:1,partenariats:2,produits:3,regul:4,marche:5,nominations:6,recrutements:7,evenements:8,listes:9,tribunes:10,media:11,edito:12},X=rn([...T.keys()],g);return[...T.entries()].sort((ce,P)=>{const Z=G[ce[0]]??10+X.indexOf(ce[0]),le=G[P[0]]??10+X.indexOf(P[0]);return Z-le})},[H,o.pipe,a.groupBy,g]),vt=Oe?Oe.filter(([T])=>wa.has(T)).length:0,lt=(()=>{var G;return((G=(Oe?Oe.flatMap(([,X])=>X):H)[0])==null?void 0:G.id)??null})(),Me=p.useRef(!1),ze=p.useMemo(()=>m.find(Ye)||v,[m,v]);p.useEffect(()=>{const T=()=>{Me.current=!0,ge(!1)};return window.addEventListener("ppmap:reveal",T),window.addEventListener("ppmap:focus",T),()=>{window.removeEventListener("ppmap:reveal",T),window.removeEventListener("ppmap:focus",T)}},[]),p.useEffect(()=>{const T=()=>{ze&&r({type:"focus",id:ze.id})};return window.addEventListener("ppmap:edito",T),()=>window.removeEventListener("ppmap:edito",T)},[ze,r]),p.useEffect(()=>{if(!a.focusId)return;ee(a.focusId);const T=window.setTimeout(()=>ee(null),900);return()=>window.clearTimeout(T)},[a.focusId]),p.useEffect(()=>{if($&&!(a.focusId&&(H.some(T=>T.id===a.focusId)||m.some(T=>T.id===a.focusId)||a.focusId===(ze==null?void 0:ze.id)))&&!u){if(ze){r({type:"focus",id:ze.id});return}lt&&r({type:"focus",id:lt})}},[$,a.focusId,H,lt,u,r,m,b,ze]),p.useEffect(()=>{if(!$||!a.focusId||ze&&a.focusId===ze.id||H.some(G=>G.id===a.focusId))return;const T=m.find(G=>G.id===a.focusId);if(T){if(Me.current){T.kind==="op"?O(Ge(T)?"explore":"eval"):F!=="all"&&O("all");return}F!=="all"&&lt&&r({type:"focus",id:lt})}},[$,a.focusId,F,H,m,lt,r,ze]),p.useEffect(()=>{if(!$||!a.focusId||!Me.current)return;const T=document.querySelector(".atl2.ops .row.sel, .atl2.ops .dcard.sel, .atl2.cibles .row.sel, .atl2.cibles .dcard.sel");if(!T){const P=H.findIndex(Z=>Z.id===a.focusId);if(P>=0){const Z=Oe?"":"pt"+a.ptab;if(Z){const le=a.shown[Z]||j();P>=le&&r({type:"more",group:Z,by:P-le+8})}}return}Me.current=!1;const G=Jo(),X=T.getBoundingClientRect();X.top>=G-2&&X.bottom<=window.innerHeight-4||ac(T)},[$,a.focusId,a.ptab,H,a.shown,Oe,r]),p.useEffect(()=>{if(typeof window>"u")return;const T=document.querySelector(".atl2.ops .listhead, .atl2.cibles .listhead"),G=document.querySelector(".atl2.ops, .atl2.cibles");if(!T||!G)return;const X=()=>G.style.setProperty("--listhead-h",`${T.offsetHeight}px`);X();const ce=new ResizeObserver(X);return ce.observe(T),()=>ce.disconnect()},[M,a.dens,a.mapFolded]);const rt=p.useMemo(()=>{if(!$||!a.focusId)return null;if(v&&a.focusId===v.id)return v;const T=H.find(X=>X.id===a.focusId)||m.find(X=>X.id===a.focusId)||null;if(!T)return null;const G=te(T);return G&&G!==T.decryptHtml?{...T,decryptHtml:G}:T},[$,a.focusId,H,m,te,v]),He=o.lockRowsAfter;let yt=0;const ot=(T,G)=>{let X=a.shown[G]||j();return T.length-X<=4&&(X=T.length),T.slice(0,X).map(Z=>{const le=He!==null&&yt>=He;yt++;const xe=te(Z),pe=xe&&xe!==Z.decryptHtml?{...Z,decryptHtml:xe}:Z,qe=!$&&a.dens!=="maxi"&&(a.dens==="deplie"||(S?S==="open":!!xe)),Be=k.has(Z.id)?!qe:qe,Ae=$?ft=>{Me.current=!0,r({type:"focus",id:ft});const Xe=y.get(ft);Xe&&(Ge(Xe)?ia(Xe):Xe.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:Xe.name,url:Xe.url||"",website:Xe.website||"",domain:Xe.domain||""}})))}:void 0;return a.dens==="maxi"?t.jsx(cc,{o:pe,locked:le,selected:$&&a.focusId===Z.id,onSelect:Ae},Z.id):t.jsx(oc,{o:pe,locked:le,open:Be,onToggle:()=>R(Z.id),selected:$&&a.focusId===Z.id,echo:U===Z.id,fresh:_.has((Z.name||"").trim().toLowerCase()),onSelect:Ae},Z.id)})},St="list"+(a.dens==="maxi"?" maxi":a.dens==="ligne"||a.dens==="deplie"?" ligne":"")+(b==="ops"?" opsl":"")+(H.length?"":" list-empty"),Ct=t.jsxs(t.Fragment,{children:[Oe?Oe.map(([T,G])=>t.jsxs("div",{className:"grp",children:[t.jsxs("div",{className:"grp-h",children:[t.jsx("span",{className:"ic",children:Lt(T)}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:T==="ma"?n.grpMa:T==="fundraising"?n.grpLev:wa.has(T)&&vt<=1?n.grpNews:T==="nominations"?n.grpNom:T==="media"?n.grpNewsOther:T==="recrutements"?n.grpHire:wa.has(T)?n.grpNews+" · "+Ke(T,g):Ke(T,g)}),t.jsx("div",{className:"s",children:n.grpCount(G.filter(X=>!_e(X)).length,G.length)})]})]}),ot(G,T)]},T)):ot(H,"pt"+a.ptab),x.loading&&!m.length&&t.jsx(pc,{}),o.pipe&&a.ptab===0&&!h&&!ue&&F==="all"&&!a.filters.signalOnly&&!x.loading&&t.jsx(Wo,{}),!H.length&&!(x.loading&&!m.length)&&(o.pipe&&F==="all"?t.jsx(uc,{counts:i}):t.jsxs("div",{className:"void",children:[n.emptyScope,(me.win!=="all"||!!me.day)&&t.jsxs("p",{className:"voidb",children:[n.emptyWin," ",t.jsx("button",{type:"button",className:"lk",onClick:()=>r({type:"filters",patch:{win:"all",day:""}}),children:n.emptyWinBtn})]}),We>0&&t.jsxs("p",{className:"voidb",children:[n.emptyFilters(We)," ",t.jsx("button",{type:"button",className:"lk",onClick:()=>r({type:"reset"}),children:n.emptyFiltersBtn})]})]}))]}),Je=t.jsxs(t.Fragment,{children:[!ue&&!h&&t.jsxs("span",{className:"main",children:[t.jsx("b",{className:"tn",style:{"--c":"var("+ea[a.ptab]+")"},children:H.length})," ",ye]}),h&&t.jsxs("span",{className:"main",children:[t.jsx("b",{className:"tn",style:{"--c":"var("+ea[a.ptab]+")"},children:H.length})," ",n.newsWord]}),(!ue||h)&&t.jsx("span",{className:"dot",children:"·"}),M&&t.jsx(Ho,{variant:"compact",mapToggle:!!a.mapFolded}),t.jsxs("span",{className:"ctx",children:[M?o.pipe&&e.fund?e.fund:null:t.jsxs(t.Fragment,{children:[e.contName,o.pipe&&e.fund?" · "+e.fund:""]}),we.map(T=>t.jsxs("button",{type:"button",className:"fpuce",title:n.filterOff,onClick:G=>{G.stopPropagation(),T.off()},children:[T.lib,t.jsx("i",{children:"×"})]},T.k)),b==="ops"&&H.length>0&&!M&&t.jsxs("span",{className:"edsplit",children:[" — ","⚡ ",H.length-re," ",n.zoomPulseEval,re>0?t.jsxs(t.Fragment,{children:[" · 🔎 ",re," ",n.zoomPulseExplore]}):null]})]}),a.filters.acquirer.trim()&&t.jsxs("span",{className:"acqchip",children:["🏢 ",n.acqOn(a.filters.acquirer),t.jsx("button",{type:"button",title:n.acqClear,onClick:()=>r({type:"acquirer",value:""}),children:"✕"})]})]}),wt=t.jsxs("div",{className:"listhead"+(M?" mapoff":""),children:[M&&t.jsx("div",{className:"lh-tools",children:t.jsx(Uo,{compact:!0})}),o.showFunnel&&be&&he&&t.jsxs("div",{className:"lh-stats",children:[t.jsx(Cl,{}),t.jsx(ec,{})]}),o.showFunnel&&t.jsx("div",{className:"lh-title",children:Je}),o.showFunnel&&t.jsxs("div",{className:"lh-funnel",children:[t.jsx(Xd,{}),t.jsx(Zd,{})]}),t.jsxs("div",{className:"lh-top",children:[o.showFunnel&&t.jsxs("div",{className:"lh-dock",children:[t.jsxs("button",{type:"button",className:"dockbtn"+(he?" on":""),"aria-pressed":he,title:n.morningDockTitle,onClick:()=>{if(he){r({type:"filters",patch:{win:"all",day:""}}),J(!1);return}ge(!1),A(!1),O("all"),r({type:"filters",patch:{win:"1",day:"",signalOnly:!1,signalEngines:[]}}),r({type:"ptab",tab:7}),J(!0)},children:["📊 ",n.morningDock(typeof((Pe=x.stats)==null?void 0:Pe.screened_today)=="number"?x.stats.screened_today:0)]}),ae&&!ae.firstVisit&&(ae.added.length>0||ae.gone.length>0)&&t.jsxs("button",{type:"button",className:"dockbtn since"+(ue?" on":""),"aria-pressed":ue,title:n.sinceSub,onClick:()=>{const T=!ue;ge(T),A(!1),J(!1),O("all"),T&&r({type:"filters",patch:{win:"all",day:"",signalOnly:!1,signalEngines:[]}})},children:["✨ ",n.sinceDock(K),ae!=null&&ae.lastDate?` · ${n.sinceSince(ae.lastDate)}`:""]}),de>0&&t.jsxs("button",{type:"button",className:"dockbtn sig"+(a.filters.signalOnly?" on":""),"aria-pressed":a.filters.signalOnly,onClick:()=>{ge(!1),A(!1),J(!1),O("all"),r({type:"filters",patch:{signalOnly:!a.filters.signalOnly,signalEngines:[],win:"all",day:""}})},children:["🔴 ",n.sigDock(de)]}),o.pipe&&ne>0&&t.jsxs("button",{type:"button",className:"dockbtn news"+(h?" on":""),"aria-pressed":h,title:n.newsDockHint,onClick:()=>{const T=!h;A(T),ge(!1),J(!1),O("all"),T&&r({type:"filters",patch:{win:"all",day:"",signalOnly:!1,signalEngines:[]}})},children:["📰 ",n.newsDock(ne),V.since?` · ${n.newsSince(V.since)}`:""]})]}),!o.showFunnel&&Je,o.showGroupBar&&t.jsxs("span",{className:"groupbar",children:[t.jsx("span",{className:"gl",children:n.groupBy}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>r({type:"groupBy",groupBy:"engine"}),children:n.groupEngine}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>r({type:"groupBy",groupBy:"none"}),children:n.groupNone})]}),a.pileMode&&t.jsx("button",{type:"button",className:"exitpile",onClick:()=>r({type:"pile",on:!1}),children:n.exitPile}),t.jsxs("span",{className:"lh-acts",children:[(o.showFunnel||b==="ops")&&t.jsx("span",{className:"dens",children:[["liste",n.densList],["ligne",n.densLigne],["maxi",n.densMaxi]].map(([T,G])=>t.jsxs("button",{type:"button","data-d":T,"aria-pressed":a.dens===T||T==="ligne"&&a.dens==="deplie",onClick:()=>r({type:"dens",dens:T}),children:[t.jsx("i",{children:t.jsx("em",{})}),t.jsx("b",{children:G})]},T))}),!$&&o.showFunnel&&a.dens!=="maxi"&&t.jsxs("span",{className:"foldall",children:[t.jsx("button",{type:"button","aria-pressed":S==="open",onClick:()=>{C("open"),N(new Set)},children:n.unfoldAll}),t.jsx("button",{type:"button","aria-pressed":S==="closed",onClick:()=>{C("closed"),N(new Set)},children:n.foldAllLbl})]}),(o.showFunnel||b==="ops")&&(()=>{var xe;const T={...a,filters:{...a.filters,signalOnly:!1,signalEngines:[],...o.pipe?{win:"all",day:""}:{}}},G=m.filter(pe=>ta(pe,T,o.pipe)&&!Ye(pe)),X=G.filter(pe=>!Ge(pe)&&!pe.noCo&&(pe.kind==="op"||!_e(pe))).length,ce=G.filter(Ge).length,P=o.pipe?G.filter(pe=>pe.kind!=="op"&&Ee(pe)===1).length:0,Z=[["all",n.doAll],...o.pipe?[["analyser",`${n.doAna}${P?` ${P}`:""}`]]:[],["eval",`${n.doEval}${X?` ${X}`:""}`],["explore",`${n.doExplore}${ce?` ${ce}`:""}`]],le=((xe=Z.find(([pe])=>pe===F))==null?void 0:xe[1])||n.doAll;return t.jsxs("span",{className:"doable",children:[t.jsxs("button",{type:"button",className:"dobtn","aria-expanded":E,onClick:()=>I(pe=>!pe),children:[le,t.jsx("i",{children:"▾"})]}),E&&t.jsx("div",{className:"dolist",children:Z.map(([pe,qe])=>t.jsx("button",{type:"button","aria-pressed":F===pe,onClick:()=>{if(I(!1),pe==="analyser"){window.dispatchEvent(new CustomEvent("ppmap:tunnel")),r({type:"ptab",tab:1});return}O(pe),pe!=="all"&&(ge(!1),A(!1),J(!1),r({type:"filters",patch:{signalOnly:!1,signalEngines:[],...o.pipe?{win:"all",day:""}:{}}}))},children:qe},pe))})]})})(),a.dens==="maxi"&&t.jsxs("label",{className:"sortsel",children:[t.jsx("span",{children:n.sortBy}),t.jsx("select",{value:a.sort.key,onChange:T=>r({type:"sort",key:T.target.value}),children:[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage],...o.pipe?[["crible",n.sortCrible],["memo",n.sortMemo],["score",n.sortScore]]:[]].map(([T,G])=>t.jsx("option",{value:T,children:G},T))})]}),o.showChain&&oe.length>0&&t.jsxs("span",{className:"chainwrap",children:[t.jsxs("button",{type:"button",className:"chain",title:n.chainHint,onClick:()=>r({type:"chainStart",queue:oe.map(T=>T.id)}),children:[t.jsx("span",{className:"b",children:"▶"})," ",o.pipe?n.browse(oe.length):n.chainAll(oe.length)]}),t.jsx("em",{className:"chainhint",children:n.chainHint})]})]})]})]});return t.jsxs(t.Fragment,{children:[!$&&wt,a.dens!=="maxi"&&!$&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),Ne("country",n.colCountry),Ne("name",n.colCompany),Ne("amount",n.colAmount,"h-amt",!0),Ne("stage",n.colStage,"h-stade"),Ne("signal",n.colSignal,"h-sig"),o.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[Ne("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),Ne("memo",n.colMemo)]}),o.pipe&&Ne("score",n.colScore,"h-sc",!0),t.jsx("span",{}),o.showThumbs&&t.jsx("span",{className:"h-thu",children:n.colThumbs})]}),$?t.jsxs("div",{className:"desk",children:[t.jsxs("div",{className:"desk-list",children:[wt,a.dens==="liste"&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),Ne("country",n.colCountry),Ne("name",n.colCompany),o.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[Ne("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),Ne("memo",n.colMemo)]}),t.jsx("span",{})]}),t.jsx("div",{className:St,children:Ct})]}),t.jsxs("aside",{className:"readpane"+((rt?Ye(rt):!u&&ze)?" is-edito":""),"aria-label":g==="fr"?"Dossier":"File",children:[ze&&t.jsx("button",{type:"button",className:"edito-go pane-edito","aria-pressed":a.focusId===ze.id,onClick:()=>r({type:"focus",id:ze.id}),children:n.doEdito}),v&&a.focusId===v.id?t.jsx("div",{className:"zoom",children:t.jsx(ml,{})}):rt&&o.pipe?t.jsx(lc,{o:rt}):t.jsx(Xo,{o:rt,extra:rt?null:u})]})]}):t.jsx("div",{className:St,children:Ct}),(()=>{const T=Oe||[["pt"+a.ptab,H]];let G=0,X=0;for(const[P,Z]of T){X+=Z.length;let le=a.shown[P]||j();Z.length-le<=4&&(le=Z.length),G+=Math.min(Z.length,le)}const ce=X-G;return ce<=0?null:t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>T.forEach(([P,Z])=>r({type:"more",group:P,by:Z.length,base:j()})),children:[t.jsx("span",{className:"more-label",children:n.more(ce,ce)}),t.jsx("span",{className:"more-meta",children:n.moreMeta(G,X)})]})})(),o.showThumbs&&t.jsxs("p",{className:"learn",children:[n.learnLine,t.jsx("button",{type:"button",onClick:()=>r({type:"modal",modal:"crit"}),children:n.learnLink})]}),(d.kept>0||d.dropped>0)&&t.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:n.session(d.kept,d.dropped)}}),$&&b==="ops"&&a.dens!=="maxi"&&t.jsx(tc,{on:!!Oe,rev:(Oe||[]).map(([T,G])=>T+G.length).join("|")})]})}function eo(e){let a=e==null?"":String(e);return/^[=+\-@\t]/.test(a)&&(a=`'${a}`),/[";\n\r]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}function fc(e,a){const r=as(e);return a[{retenu:1,ana:2,pending:3,valide:4,ecarte:5}[r]??1]||""}function hc(e,a){const n=[a.head.split("|").map(eo).join(";")];for(const o of e){const i=a.stageOf(o);n.push([o.name||"",fc(o,a.plabels),sa(o)||o.verdict||"",typeof o.score=="number"?o.score:"",o.countryLabel||o.cc||"",o.sector||"",i?a.stageLabel(i.stage):"",o.contactName||"",o.contactEmail||"",o.memoUrl||"",(o.date||"").slice(0,10),(o.reasoning||"").replace(/\s+/g," ").trim().slice(0,280)].map(eo).join(";"))}return`\uFEFF${n.join(`\r
`)}`}function gc(e){const a=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=`cibles_vue_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(n),n.click(),window.setTimeout(()=>{URL.revokeObjectURL(r);try{document.body.removeChild(n)}catch{}},400)}const xc=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function pt({k:e,v:a}){return a==null||a===""?null:t.jsxs("div",{className:"dsl",children:[t.jsx("span",{children:e}),t.jsx("b",{children:String(a)})]})}function bc({o:e,qa:a}){const{t:r,lang:n,fund:o}=Q(),i=(e.cribleStatus||"").trim().toUpperCase()||(sa(e)==="NO MATCH"?"NO MATCH":"MATCH"),c=Nt(e),s=(a==null?void 0:a.blocs)||{},l=[[r.qaVP,s.value_prop],[r.qaProduct,s.produit],[r.qaModel,s.modele],[r.qaSummary,s.synthese]];return t.jsxs("article",{className:"dspage",children:[t.jsxs("header",{className:"dsh",children:[t.jsxs("div",{children:[t.jsx("b",{children:e.name}),e.tagline&&t.jsx("p",{children:e.tagline})]}),t.jsxs("span",{className:"dsv"+(i==="NO MATCH"?" out":""),children:[i==="NO MATCH"?r.vOut:r.vKept,c&&t.jsx("em",{children:c})]})]}),e.reasoning&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsWhy}),t.jsx("p",{className:"dstxt",children:e.reasoning})]}),t.jsxs("section",{className:"dsgrid",children:[t.jsx(pt,{k:r.cdSector,v:e.sector}),t.jsx(pt,{k:r.cdStage,v:e.stage}),t.jsx(pt,{k:r.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(pt,{k:r.cdSite,v:e.domain||e.website}),t.jsx(pt,{k:r.cdName,v:e.contactName}),t.jsx(pt,{k:r.cdEmail,v:e.contactEmail}),t.jsx(pt,{k:r.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(pt,{k:r.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(pt,{k:r.cdAngle,v:e.angle}),t.jsx(pt,{k:r.cdDetected,v:xc(e.date,n)})]}),l.some(([,g])=>g)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsAnalysis}),l.filter(([,g])=>g).map(([g,d])=>t.jsxs("div",{className:"dsb",children:[t.jsx("span",{children:g}),t.jsx("p",{children:d})]},g))]}),(e.ceoStatus||e.ceoNote)&&t.jsxs("section",{children:[t.jsx("h3",{children:r.dsDecision}),e.ceoStatus&&t.jsx("p",{className:"dstxt",children:t.jsx("b",{children:e.ceoStatus})}),e.ceoNote&&t.jsxs("p",{className:"dstxt",children:["« ",e.ceoNote," »"]})]}),t.jsx("footer",{className:"dsf",children:r.dsFoot(o)})]})}function vc(){const{t:e,lang:a,token:r,scoped:n,fund:o,data:i,dispatch:c}=Q(),[s,l]=p.useState({}),g=25,d=p.useMemo(()=>n.slice(0,g),[n]);p.useEffect(()=>{d.length&&mo(r,d.map(b=>b.name)).then(l)},[r,d]);const x=i.stats,m=b=>b.toLocaleString(a==="en"?"en-US":"fr-FR");return t.jsxs("div",{className:"dossier",children:[t.jsxs("div",{className:"dsbar",children:[t.jsx("b",{children:e.dsTitle(d.length)}),n.length>g&&t.jsx("span",{className:"mnote dim",children:e.dsCap(g,n.length)}),t.jsx("span",{className:"dssp"}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{c({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)},children:e.printBtn})]}),t.jsxs("div",{className:"dscover",children:[t.jsx("b",{children:o}),x&&typeof x.screened=="number"&&t.jsxs("p",{children:[m(x.screened)," ",e.funScreened(""),typeof x.kept=="number"&&t.jsxs(t.Fragment,{children:[" · ",m(x.kept)," ",e.covKept]}),typeof i.marketEstimate=="number"&&i.marketEstimate>0&&t.jsxs(t.Fragment,{children:[" · ",e.covOf(m(i.marketEstimate)),", ",Math.round(x.screened/i.marketEstimate*100)," %"]})]})]}),d.map(b=>t.jsx(bc,{o:b,qa:s[b.name]},b.id)),!d.length&&t.jsx("p",{className:"mnote",children:e.dsEmpty})]})}const yc=50;function Dn({label:e,onPreview:a,onTest:r,readOnly:n}){const{t:o}=Q(),[i,c]=p.useState(null),[s,l]=p.useState(!1),[g,d]=p.useState(""),[x,m]=p.useState(0),[b,u]=p.useState(""),[y,w]=p.useState(!1),[f,v]=p.useState(0),j=p.useRef(null),k=p.useRef(null),N=()=>{v(0),k.current&&window.clearInterval(k.current),k.current=window.setInterval(()=>v(q=>q+1),1e3)},S=()=>{k.current&&(window.clearInterval(k.current),k.current=null)};p.useEffect(()=>()=>{j.current&&window.clearInterval(j.current),k.current&&window.clearInterval(k.current)},[]);const C=async q=>{l(!0),d(""),N();const M=await a();if(l(!1),S(),M.ok){c(M);return}if(M.busy){d(o.alertPreviewBusy);return}if(!q){d(o.alertPreviewFail);return}m(yc),S(),j.current=window.setInterval(()=>{m(R=>R>1?R-1:(j.current&&window.clearInterval(j.current),C(!1),0))},1e3)},L=async()=>{if(n||y||s)return;w(!0),u(""),N();const q=await r();w(!1),S(),u(q.ok?o.alertTestOk(q.sentTo||""):q.error||o.actErr)};return t.jsxs("div",{className:"mailp",children:[t.jsxs("div",{className:"mailp-row",children:[t.jsx("button",{type:"button",className:"abtn",disabled:s||y||x>0,onClick:()=>{C(!0)},children:s?o.alertBtnPrevBusy:e}),t.jsx("button",{type:"button",className:"abtn",disabled:n||y||s,onClick:()=>{L()},children:y?o.alertBtnTestBusy:o.alertTest})]}),s&&t.jsxs("p",{className:"mnote qwait",children:[t.jsx("i",{className:"qwd"}),o.alertPreviewWait(f)]}),y&&t.jsxs("p",{className:"mnote qwait",children:[t.jsx("i",{className:"qwd"}),o.alertTestWait(f)]}),x>0&&t.jsx("p",{className:"mnote",children:o.alertPreviewRetry(x)}),g&&t.jsx("p",{className:"mnote warn",children:g}),b&&t.jsx("p",{className:"mnote",children:b}),!b&&t.jsx("p",{className:"mnote dim",children:o.alertTestHint}),(i==null?void 0:i.ok)&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mnote",children:[t.jsx("b",{children:o.alertSubject})," ",i.subject]}),i.pending===0&&t.jsx("p",{className:"mnote warn",children:o.alertPreviewEmpty}),t.jsx("iframe",{className:"mailp-frame",sandbox:"",srcDoc:i.html,title:e})]})]})}const xt="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function Ve({title:e,icon:a,children:r,wide:n}){const{dispatch:o}=Q();return Ut.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:i=>{i.target===i.currentTarget&&o({type:"modal",modal:null})},children:t.jsxs("div",{className:"mcard",style:n?{width:"min(760px,100%)"}:void 0,children:[t.jsxs("div",{className:"mh",children:[a&&t.jsx("span",{className:"no g",children:a}),t.jsx("h2",{children:e}),t.jsx("button",{type:"button",className:"x",onClick:()=>o({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"mb",children:r})]})})}),document.body)}function wc(){const{st:e}=Q();switch(e.modal){case"chain":return t.jsx(jc,{});case"space":return t.jsx(Ec,{});case"alert":return t.jsx(Nc,{});case"queue":return t.jsx(qc,{});case"export":return t.jsx(Tc,{});case"plug":return t.jsx(Rc,{});case"approach":return t.jsx(Oc,{});case"recharge":return t.jsx(Ic,{});case"cover":return t.jsx(_c,{});case"dossier":return t.jsx(Pc,{});case"crit":return t.jsx(Uc,{});case"tuto":return t.jsx(Hc,{});case"rdv":return t.jsx(kc,{});case"memoalert":return t.jsx(Lc,{});default:return null}}function kc(){const{dispatch:e,fund:a,t:r}=Q(),n=a||r.rdvCoFallback;return Ut.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:()=>e({type:"modal",modal:null}),children:t.jsxs("div",{className:"mcard rdvcard",onClick:o=>o.stopPropagation(),children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"no g",children:"📅"}),t.jsx("h2",{children:r.rdvHeading}),t.jsx("button",{type:"button",className:"x",onClick:()=>e({type:"modal",modal:null}),children:"×"})]}),t.jsxs("div",{className:"mb",children:[t.jsxs("p",{className:"mnote",children:[r.rdvSubBefore,t.jsx("a",{href:wo,children:qn}),r.rdvSubMid,t.jsx("a",{href:`mailto:${Aa}`,children:Aa})]}),t.jsx("div",{className:"rdv-unlocks",children:r.rdvUnlocks(n).map(([o,i],c)=>t.jsxs("div",{className:"rdv-u",children:[t.jsx("em",{children:r.rdvUnlockLabel(c+1)}),t.jsx("b",{children:o}),t.jsx("span",{children:i})]},o))}),t.jsx("div",{className:"rdv-emb",children:t.jsx(As,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0})})]})]})})}),document.body)}function jc(){const{st:e,dispatch:a,byId:r,t:n,lang:o,mode:i,askEvaluate:c,evalBusy:s,caps:l,memoQueued:g,doAnalyse:d}=Q(),x=i==="client",m=e.chain.queue.map(w=>r.get(w)).filter(w=>!!w),b=e.chain.idx,u=m[b],y=b>=m.length;return Ut.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",children:t.jsxs("div",{className:"fcard",children:[t.jsxs("div",{className:"fh",children:[t.jsx("span",{className:"c",children:y?n.finished:`${b+1} / ${m.length}`}),t.jsx("span",{className:"p",children:t.jsx("i",{style:{width:(y?100:b/Math.max(1,m.length)*100)+"%"}})}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"fb",children:y||!u?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🏁"}),t.jsx("div",{className:"t",children:n.chainDone}),t.jsx("div",{className:"s",children:n.chainDoneSub(m.length)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:u.name}),t.jsx("div",{className:"sub",children:[Ht(u.cc,o)||u.countryLabel,u.sector,u.stage,n.daysAgo(bt(u.date))].filter(Boolean).map(w=>String(w)).join(" · ")}),t.jsxs("div",{className:"tags",children:[t.jsx("span",{className:"hi",children:Ke(u.engine,o)}),typeof u.amountEur=="number"&&u.amountEur>0&&t.jsx("span",{children:Vt(u.amountEur,o)})]}),De(u)&&t.jsxs("div",{style:{marginBottom:12},children:[t.jsx(Et,{o:u,lg:!0})," ",t.jsx(Pa,{o:u,src:!0})]}),(u.tagline||u.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:u.tagline||u.headline})]}),u.reasoning&&!(x&&_e(u))&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.memo}),t.jsx("p",{className:"memo",children:u.reasoning})]}),x&&_e(u)&&t.jsxs("div",{className:"vbox vfull",style:{"--c":Tt(u)==="retenu"?"var(--brand)":Tt(u)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[t.jsx("span",{className:"vt",children:Tt(u)==="retenu"?"✓ "+n.kept:Tt(u)==="pending"?"📞 "+n.pending:"✗ "+n.dropped}),t.jsx("span",{className:"vd",children:u.reasoning||""})]})]})}),t.jsxs("div",{className:"ff",children:[!y&&u&&l.pipe&&Ee(u)===1&&!g.has(u.id)?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{d(u),a({type:"chainNext"})},children:[t.jsx("span",{className:"fill"}),n.chainMemoGo]}):!y&&u&&!(x&&_e(u))&&(u.noCo&&u.url?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{var w;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:u.url}}))}catch{}a({type:"modal",modal:null}),(w=document.querySelector(".atl2 .demand"))==null||w.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rowExtract]}):t.jsxs("button",{type:"button",className:"evalbtn"+(s?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:s,onClick:()=>{c(u)},children:[t.jsx("span",{className:"fill"}),n.launchEval]})),t.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(y?{type:"modal",modal:null}:{type:"chainNext"}),children:y?n.closeBtn:n.skip})]})]})})}),document.body)}function Ec(){const{st:e,dispatch:a,dossiers:r,t:n,mode:o}=Q(),i=o==="client",c=p.useMemo(()=>i?r.filter(x=>_e(x)):[],[r,i]),s=p.useMemo(()=>zn(c.filter(x=>Tt(x)==="retenu"),{key:"signal",dir:-1}),[c]),l=p.useMemo(()=>c.filter(x=>Tt(x)==="ecarte"),[c]),g=e.spaceTab==="retenu"?s:l,d=e.spaceTab==="retenu"?"var(--brand)":"var(--red)";return t.jsxs(Ve,{title:n.spaceTitle,children:[t.jsxs("div",{className:"sp-tabs",children:[t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":e.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",n.statusKeep.replace("✅ ","")," ",t.jsx("b",{children:s.length})]}),t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":e.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",n.statusDrop.replace("❌ ","")," ",t.jsx("b",{children:l.length})]})]}),g.length===0&&t.jsx("div",{className:"sp-empty",children:n.spEmpty}),g.slice(0,40).map(x=>t.jsxs("div",{className:"sp-row",children:[t.jsx("span",{className:"sc",style:{"--c":d},children:typeof x.score=="number"&&x.score>0?x.score:"—"}),t.jsxs("span",{children:[t.jsx("div",{className:"nm",children:x.name}),t.jsx("div",{className:"rr",children:x.reasoning||x.tagline||""})]})]},x.id)),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:n.spNote}})]})}function Nc(){const{mode:e}=Q();return e==="client"||e==="apercu"?t.jsx(Sc,{}):t.jsx(Ac,{})}function Sc(){const{t:e,token:a,flash:r,flashErr:n,mode:o}=Q(),[i,c]=p.useState("d"),s=o!=="client";return t.jsxs(Ve,{title:e.alertTitle,icon:"🔔",children:[t.jsxs("div",{className:"ntabs",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":i==="d",className:i==="d"?"on":"",onClick:()=>c("d"),children:e.alertTabDaily}),t.jsx("button",{type:"button",role:"tab","aria-selected":i==="w",className:i==="w"?"on":"",onClick:()=>c("w"),children:e.alertTabWeekly}),t.jsx("button",{type:"button",role:"tab","aria-selected":i==="m",className:i==="m"?"on":"",onClick:()=>c("m"),children:e.alertTabMarket})]}),i==="d"&&t.jsx(Cc,{t:e,token:a,readOnly:s,flash:r,flashErr:n}),i==="w"&&t.jsx(zc,{t:e,token:a,readOnly:s,flash:r,flashErr:n}),i==="m"&&t.jsx(Zo,{})]})}function Cc({t:e,token:a,readOnly:r,flash:n,flashErr:o}){const[i,c]=p.useState(null),[s,l]=p.useState(!1),[g,d]=p.useState(0);p.useEffect(()=>{let L=!0;return l(!1),nr(a).then(q=>{L&&(q?c(q):l(!0))}),()=>{L=!1}},[a,g]);const x=p.useRef({}),[m,b]=p.useState({}),[u,y]=p.useState(!1),[w,f]=p.useState(!1),v=p.useRef(null);p.useEffect(()=>()=>{v.current&&window.clearTimeout(v.current)},[]);const j=L=>{const q=x.current;Object.keys(q).length&&(y(!0),nr(a,q).then(M=>{if(!M){y(!1),o(e.actErr);return}if(M.throttled&&L<3){v.current=window.setTimeout(()=>j(L+1),5400);return}if(x.current={},b({}),c(M),y(!1),M.throttled){o(e.alertThrottled);return}f(!0),window.setTimeout(()=>f(!1),2e3),n(e.alertSaved)}))},k=L=>{r||(x.current={...x.current,...L},b(q=>({...q,...L})),v.current&&window.clearTimeout(v.current),v.current=window.setTimeout(()=>j(1),700))};if(s)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>d(L=>L+1),children:e.retry})]});if(!i)return t.jsx("div",{className:"sp-empty",children:"…"});const N={...i,...m},S=L=>!N.sections||N.sections.includes(L),C=L=>{const q=N.sections||e.alertSec.map(([M])=>M);k({sections:S(L)?q.filter(M=>M!==L):[...q,L]})};return t.jsxs(t.Fragment,{children:[r&&t.jsx("p",{className:"mnote warn",children:e.alertReadOnly}),t.jsxs("div",{className:"qrow",children:[t.jsxs("span",{children:[t.jsx("b",{children:e.alertDaily}),t.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:e.alertDailyHint})]}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":N.enabled===!0,disabled:r,style:N.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>k({enabled:!N.enabled}),children:N.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertHour}),t.jsxs("span",{className:"qset",children:[t.jsx("button",{type:"button",onClick:()=>k({hour:Math.max(6,(N.hour??7)-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[N.hour??7," h"]}),t.jsx("button",{type:"button",onClick:()=>k({hour:Math.min(21,(N.hour??7)+1)}),disabled:r,children:"+"})]})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertDays}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("button",{type:"button",className:"abtn",disabled:r,style:N.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>k({days:"weekdays"}),children:e.alertWeekdays}),t.jsx("button",{type:"button",className:"abtn",disabled:r,style:N.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>k({days:"daily"}),children:e.alertEveryday})]})]}),t.jsx("p",{className:"mnote dim",children:e.alertRules}),t.jsxs("div",{className:"qsec ok",children:[e.alertSections,u&&t.jsx("span",{className:"secsave",children:e.alertSaving}),!u&&w&&t.jsx("span",{className:"secsave done",children:e.alertSavedShort})]}),t.jsx("div",{className:"secl",children:e.alertSec.map(([L,q])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:S(L),disabled:r,onChange:()=>C(L)}),t.jsxs("span",{children:[q,L==="market"&&t.jsxs("i",{children:[" ",e.alertSecSlow]})]})]},L))}),t.jsx("p",{className:"mnote dim",children:e.alertSecNote}),t.jsx(Dn,{label:e.alertPreview,readOnly:r,onPreview:()=>hs(a),onTest:()=>fs(a)}),N.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),N.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",N.email_lead,N.last_sent?` · ${e.updatedAt(N.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function zc({t:e,token:a,readOnly:r,flash:n,flashErr:o}){const[i,c]=p.useState(null),[s,l]=p.useState(!1),[g,d]=p.useState(0);p.useEffect(()=>{let u=!0;return l(!1),rr(a).then(y=>{u&&(y?c(y):l(!0))}),()=>{u=!1}},[a,g]);const x=u=>{r||rr(a,u).then(y=>{if(!y){o(e.actErr);return}c(y),n(e.alertSaved)})};if(s)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>d(u=>u+1),children:e.retry})]});if(!i)return t.jsx("div",{className:"sp-empty",children:"…"});const m=i.dow??0,b=i.hour??16;return t.jsxs(t.Fragment,{children:[r&&t.jsx("p",{className:"mnote warn",children:e.alertReadOnly}),t.jsx("p",{className:"lead2",children:e.alertWeeklySub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.alertWeeklyOn})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":i.enabled===!0,disabled:r,style:i.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>x({enabled:!i.enabled}),children:i.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertWeeklyWhen}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("select",{value:m,disabled:r,onChange:u=>x({dow:Number(u.target.value)}),children:e.alertDow.map((u,y)=>t.jsx("option",{value:y,children:u},u))}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.max(6,b-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[b," h"]}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.min(21,b+1)}),disabled:r,children:"+"})]})]}),t.jsx(Dn,{label:e.alertPreviewWeekly,readOnly:r,onPreview:()=>xs(a),onTest:()=>gs(a)}),i.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),i.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",i.email_lead,i.last_sent?` · ${e.updatedAt(i.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function Zo(){const{st:e,t:a,lang:r,scoped:n,contName:o,email:i}=Q(),[c,s]=p.useState(i||""),[l,g]=p.useState(!1),[d,x]=p.useState(!1);p.useEffect(()=>{i&&s(i)},[i]);const m=e.filters,b=p.useMemo(()=>n.filter(f=>De(f)).length,[n]),u=m.win==="1"?0:m.win==="7"?1:m.win==="30"?2:3,y=async()=>{if(!(!/.+@.+\..+/.test(c)||d)){x(!0);try{await fetch(`${Ia}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.trim(),sectors:m.sector,countries:m.country,source:i?"atelier2-client":"atelier2",website:""})}),g(!0)}finally{x(!1)}}},w=[[a.amRows.continent,o],[a.amRows.since,a.amSince[u]],[a.amRows.signal,m.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,m.engine.length?m.engine.map(f=>Ke(f,r)).join(", "):a.amAllEngines],[a.amRows.sectors,m.sector.length?m.sector.join(", "):a.amAllSectors],[a.amRows.countries,m.country.length?m.country.map(f=>Ht(f,r)||f).join(", "):a.amAllCountries],[a.amRows.stages,m.stage.length?m.stage.join(", "):a.amAllStages]];return l?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🔔"}),t.jsx("div",{className:"t",children:a.amOk}),t.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(c)}})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"crit",children:w.map(([f,v])=>t.jsxs("div",{className:"r",children:[t.jsx("span",{className:"k",children:f}),t.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:v}})]},f))}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:c,readOnly:!!i,onChange:f=>s(f.target.value),onKeyDown:f=>{f.key==="Enter"&&y()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(d?" loading":""),style:{padding:"12px 18px"},onClick:()=>void y(),children:[t.jsx("span",{className:"fill"}),a.amActivate]})]}),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(n.length,b)}}),t.jsx("p",{className:"mnote",children:a.amHonest})]})}function Ac(){const{t:e}=Q();return t.jsx(Ve,{title:e.alertTitle,icon:"🔔",children:t.jsx(Zo,{})})}function qc(){var R,$;const{t:e,token:a,fund:r,mode:n,dossiers:o,doAnalyse:i,memoQueued:c,caps:s,dispatch:l,liveMemos:g}=Q(),[d,x]=p.useState(()=>$a(r)),[m,b]=p.useState(()=>!$a(r)),[u,y]=p.useState([]),[w,f]=p.useState(0),v=n==="client",j=p.useMemo(()=>{const F=new Map;return o.forEach(O=>{const h=(O.name||"").trim().toLowerCase();h&&!F.has(h)&&F.set(h,O)}),F},[o]);p.useEffect(()=>{let F=!0;return(!$a(r)||w>0)&&b(!0),(async()=>{const[O,h]=await Promise.all([Nn(r,w>0),so(a)]);F&&(O&&x(O),b(!1),y(h))})(),()=>{F=!1}},[a,r,w]);const k=m&&!d,N=(d==null?void 0:d.per_day)??0,S=((R=d==null?void 0:d.analyzed_today)==null?void 0:R.length)??0,C=d==null?void 0:d.offre,L=(d==null?void 0:d.pool_meta)||[],q=p.useMemo(()=>{const F=new Map;for(const O of(d==null?void 0:d.scheduled)||[])for(const h of O.names||[])F.has(h)||F.set(h,{label:O.day_label,date:O.date});return F},[d==null?void 0:d.scheduled]),M=(d==null?void 0:d.in_progress)||[];return t.jsxs(Ve,{title:e.queueTitle,wide:!0,children:[C&&t.jsxs("div",{className:"qoffre"+(C.en_retard?" late":""),children:[t.jsx("span",{className:"ol",children:e.qOffer}),t.jsx("b",{children:C.libelle}),t.jsxs("span",{className:"od",children:[e.qDelay," ",t.jsx("b",{children:C.delai})]}),t.jsx("span",{className:"osp"}),C.rythme>0?t.jsx("span",{className:"or",children:e.qRate(C.rythme)}):C.manuel_par_jour?t.jsx("span",{className:"or",children:e.qManual(C.manuel_par_jour)}):t.jsx("span",{className:"or dim",children:e.qPaused})]}),t.jsxs("div",{className:"qbox",children:[t.jsx("div",{className:"qhead",children:k?t.jsxs("span",{className:"qwait",children:[t.jsx("i",{className:"qwd"}),e.qFileWait]}):t.jsx("b",{dangerouslySetInnerHTML:{__html:e.queueDone(S,S+((($=d==null?void 0:d.pool_order)==null?void 0:$.length)??0))}})}),C&&t.jsxs("div",{className:"qeta",children:[C.file===0?e.qEtaDone:C.rythme<=0?e.qEtaPaused:e.qEta(C.file,C.rythme,C.jours_restants),C.en_retard&&t.jsxs("em",{children:[" ",e.qLate(C.delai,C.plafond)]})]}),!k&&t.jsxs("div",{className:"qrate",children:[e.covRate," — ",t.jsx("b",{children:e.covRateNow(N)}),(C==null?void 0:C.reglage_manuel)&&t.jsxs("span",{className:"dim",children:[" · ",e.qManualSet]})]})]}),(M.length>0||g.items.some(F=>F.status==="boot"||F.status==="running"))&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec run",children:["⌛ ",e.qRunning]}),t.jsxs("div",{className:"qrows",children:[g.items.filter(F=>F.status==="boot"||F.status==="running"||F.status==="error").map(F=>t.jsxs("div",{className:"qr2 qfl",children:[t.jsx("b",{children:F.name}),t.jsx("span",{className:"qd",children:F.memoType||""}),t.jsx(Na,{item:F,serverOff:g.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd})]},"live-"+F.name)),M.filter(F=>!g.liveOf(F.name)).map(F=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:F.name}),t.jsxs("span",{className:"qd",children:[F.memo_type||"",F.age_min?` · ${Math.round(F.age_min)} min`:""]}),t.jsx("span",{className:"qt",children:F.state||""})]},"ip-"+F.name))]})]}),u.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec ok",children:["⏳ ",e.queueToday]}),t.jsx("div",{className:"qrows",children:u.map(F=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:F.company}),t.jsxs("span",{className:"qd",children:[F.memo_type,typeof F.est_min=="number"?` · ~${F.est_min} min`:""]}),t.jsx("span",{className:"qt",children:F.status}),F.url&&t.jsx("a",{className:"qgo",href:F.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.actMemoOf(F.memo_type)}),v&&F.status==="error"&&t.jsx("button",{type:"button",className:"qgo an",onClick:()=>{tr(a,F.company,"retry").then(()=>f(O=>O+1))},children:e.queueRetry}),v&&F.status!=="done"&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{tr(a,F.company,"delete").then(()=>f(O=>O+1))},children:e.queueDelete})]},F.company))})]}),t.jsxs("div",{className:"qsec todo",children:["⚡ ",k?e.qUpNextWait:e.qUpNext(L.length)]}),t.jsx("div",{className:"qhedge",children:e.qHedge}),t.jsxs("div",{className:"qrows qfile",children:[k&&t.jsxs("div",{className:"qwait qwrow",children:[t.jsx("i",{className:"qwd"}),e.qFileWait]}),!k&&L.length===0&&t.jsx("div",{className:"sp-empty",children:e.queueEmpty}),L.map((F,O)=>{const h=q.get(F.name),A=j.get((F.name||"").trim().toLowerCase()),U=g.liveOf(F.name),ee=!!(A&&c.has(A.id))||!!(U&&(U.status==="boot"||U.status==="running")),E=!!(A&&Ee(A)===1&&!A.memoUrl)&&!U;return t.jsxs("div",{className:"qr2 qfl",children:[t.jsxs("span",{className:"qn2",children:["#",O+1]}),h?t.jsx("span",{className:"qwhen"+(h.label==="demain"?" soon":""),children:h.label}):t.jsx("span",{className:"qwhen later",children:e.qLater}),t.jsx("b",{children:F.name}),F.fresh&&t.jsx("span",{className:"qfresh",children:e.qFresh}),typeof F.score=="number"&&t.jsx("span",{className:"qs2",children:F.score}),U&&(U.status==="boot"||U.status==="running")&&t.jsx(Na,{item:U,serverOff:g.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),E&&(s.lockActions||!v?t.jsx("button",{type:"button",className:"qgo an",onClick:()=>l({type:"modal",modal:"rdv"}),children:e.actLocked}):t.jsx("button",{type:"button",className:"qgo an",disabled:ee,onClick:()=>{i(A),f(I=>I+1)},children:ee?e.actAnalyseQueued:e.actAnalyse})),F.excerpt&&t.jsx("span",{className:"qex",children:F.excerpt})]},F.name+":"+O)})]}),t.jsxs("div",{className:"qsec",children:["🧭 ",e.qVerdictsT]}),t.jsx("ul",{className:"qverd",children:e.qVerdicts.map(([F,O])=>t.jsxs("li",{children:[t.jsx("b",{children:F})," — ",O]},F))})]})}function Tc(){const{t:e,token:a,flash:r,scoped:n,caps:o,stageOf:i,dispatch:c}=Q(),s=`${xt}/cibles/list.csv?token=${a}`,l=`${xt}/cibles/list.json?token=${a}`,g=`${xt}/cibles/export.xlsx?token=${a}&scope=full`,d=`=IMPORTDATA("${s}")`,x=w=>{var f;(f=navigator.clipboard)==null||f.writeText(w).then(()=>r(e.exportCopied))},m=[{def:e.exportCsv,value:s,href:s},{def:e.exportSheet,value:d},{def:e.exportLive,value:l,href:l},{def:e.exportXlsx,value:g,href:g}],b=!o.lockActions&&n.length>0,u=()=>{gc(hc(n,{plabels:e.plabels,head:e.exportViewHead,stageOf:i,stageLabel:w=>(e.stg.find(([f])=>f===w)||["",""])[1]})),r(e.exportViewDone(n.length))},y=()=>{c({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)};return t.jsxs(Ve,{title:e.exportTitle,icon:"📥",children:[t.jsx("p",{className:"lead2",children:e.exportLead}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🖨️"}),t.jsxs("div",{children:[t.jsx("b",{children:e.printTitle}),t.jsx("p",{children:e.printDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb",onClick:y,children:e.printBtn})]})}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🗂"}),t.jsxs("div",{children:[t.jsx("b",{children:e.dsBtn}),t.jsx("p",{children:e.dsHint})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>c({type:"modal",modal:"dossier"}),children:e.exportViewBtn})]})}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"📄"}),t.jsxs("div",{children:[t.jsx("b",{children:e.exportViewTitle}),t.jsx("p",{children:e.exportViewDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb pri",onClick:u,children:e.exportViewBtn})]})}),t.jsx("div",{className:"expl",children:m.map(({def:w,value:f,href:v})=>t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:w[0]}),t.jsxs("div",{children:[t.jsx("b",{children:w[1]}),t.jsx("p",{children:w[2]})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>x(f),children:e.exportCopy}),v&&t.jsx("a",{className:"exb",href:v,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.exportOpen})]},w[1]))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.exportKeyWarning})]})}function Lc(){const{t:e,token:a,flash:r,flashErr:n,mode:o}=Q(),i=o!=="client",[c,s]=p.useState(null),[l,g]=p.useState(!1),[d,x]=p.useState(0),[m,b]=p.useState(!1);p.useEffect(()=>{let f=!0;return g(!1),Zn(a).then(v=>{f&&(v?s(v):g(!0))}),()=>{f=!1}},[a,d]);const u=()=>(c==null?void 0:c.sections)||{swot:!0,action:!0,synergies:!0,quadrant:!0,verdict:!0},y=f=>{if(i||!c)return;const v={enabled:f.enabled??!!c.enabled,email:f.email??(c.email||""),sections:f.sections??u()};b(!0),Zn(a,v).then(j=>{if(b(!1),!j){n(e.memoAlertErr);return}s(j),r(e.memoAlertSaved)})};if(l)return t.jsx(Ve,{title:e.memoAlertTitle,icon:"🔔",children:t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>x(f=>f+1),children:e.retry})]})});if(!c)return t.jsx(Ve,{title:e.memoAlertTitle,icon:"🔔",children:t.jsx("div",{className:"sp-empty",children:"…"})});const w=u();return t.jsxs(Ve,{title:e.memoAlertTitle,icon:"🔔",children:[t.jsx("p",{className:"lead2",children:e.memoAlertSub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.memoAlertToggle})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":c.enabled===!0,disabled:i||m,style:c.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>y({enabled:!c.enabled}),children:c.enabled?"ON":"OFF"})})]}),t.jsx(Fc,{value:c.email||"",readOnly:i||m,label:e.memoAlertEmail,okLabel:e.csNoteOk,onSave:f=>y({email:f})}),t.jsx("div",{className:"qsec ok",children:e.memoAlertSections}),t.jsx("div",{className:"secl",children:e.memoAlertSec.map(([f,v])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:!!w[f],disabled:i||m,onChange:()=>y({sections:{...w,[f]:!w[f]}})}),t.jsx("span",{children:v})]},f))}),t.jsx(Dn,{label:e.memoAlertPreview,readOnly:i,onPreview:()=>rs(a,w),onTest:()=>ns(a,w)})]})}function Fc({value:e,readOnly:a,label:r,okLabel:n,onSave:o}){const[i,c]=p.useState(e);p.useEffect(()=>{c(e)},[e]);const s=i.trim()!==e.trim(),l=!i.trim()||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.trim());return t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:r}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("input",{type:"email",className:"mailin",value:i,disabled:a,onChange:g=>c(g.target.value),onKeyDown:g=>{g.key==="Enter"&&s&&l&&o(i.trim())}}),t.jsx("button",{type:"button",className:"abtn",disabled:a||!s||!l,onClick:()=>o(i.trim()),children:n})]})]})}function Rc(){const{t:e,token:a,flash:r,flashErr:n,canWrite:o}=Q(),[i,c]=p.useState(null),[s,l]=p.useState(!1),[g,d]=p.useState(null),[x,m]=p.useState(!1),[b,u]=p.useState(""),[y,w]=p.useState(0),[f,v]=p.useState("webhook"),[j,k]=p.useState(""),N=p.useRef(!1);p.useEffect(()=>{let R=!0;return l(!1),er(a).then($=>{R&&($?c({configured:$.configured,url_hint:$.url_hint}):l(!0))}),ls(a).then($=>{if(R){if(!$){m(!0);return}m(!1),d($),N.current||(N.current=!0,$.destination==="instantly"&&v(F=>F==="webhook"?"instantly":F),$.campaign_id&&k(F=>F||$.campaign_id||""))}}),()=>{R=!1}},[a,y]);const S=(R,$)=>{o&&er(a,R).then(F=>{if(!F||F.ok===!1){n(e.actErr);return}R.test&&F.sent===!1?n(e.plugTestThrottled):r($),w(O=>O+1)})},C='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}',L=JSON.stringify({event:"status",company:"Aitona",status:"Validée",note:"très bon fit — introduction chaude possible",score:90,website:"https://aitona.com",memo_url:"https://analysis.proplace.co/…"},null,2),q=`curl -X POST ${xt}/cibles/evaluate \\
  -H "Content-Type: application/json" \\
  -d '{"token":"${a}","q":"nom ou URL de la société"}'`,M=`curl -X POST ${xt}/cibles/react \\
  -H "Content-Type: application/json" \\
  -d '{"token":"${a}","kind":"fast_request","target":"Acme Group"}'`;return t.jsxs(Ve,{title:e.plugTitle,icon:"🔌",wide:!0,children:[g&&t.jsx("p",{className:"mnote"+(g.enabled?" warn":""),children:g.enabled?e.plugAutoOn(g.destination||"webhook"):e.plugAutoOff}),s?t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>w(R=>R+1),children:e.retry})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugCrm}),t.jsx("p",{className:"mnote",children:e.plugCrmHint}),t.jsxs("ol",{className:"plughow",children:[t.jsx("li",{children:e.plugHow1}),t.jsx("li",{children:e.plugHow2}),t.jsx("li",{children:e.plugHow3})]}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"url",maxLength:500,placeholder:e.plugUrlPh,value:b,disabled:!o,onChange:R=>u(R.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:!o||!b.trim(),onClick:()=>S({url:b.trim()},e.plugSaved),children:e.plugSave})]}),(i==null?void 0:i.configured)&&t.jsxs("p",{className:"mnote",children:["✓ ",i.url_hint||""," ",t.jsx("button",{type:"button",className:"lk",disabled:!o,onClick:()=>S({test:!0},e.plugTested),children:e.plugTest})," · ",t.jsx("button",{type:"button",className:"lk",disabled:!o,onClick:()=>S({remove:!0},e.plugRemoved),children:e.plugRemove})]}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugExT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:L}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var R;(R=navigator.clipboard)==null||R.writeText(L).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugExResult})]}),t.jsx(Dc,{destKind:f,setDestKind:v,camp:j,setCamp:k,whHint:i!=null&&i.configured?i.url_hint||"webhook":null}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugVarsT}),t.jsx("p",{className:"mnote",children:e.plugVars})]}),t.jsx(Mc,{auto:g,autoKo:x,destKind:f,camp:j,onRetry:()=>w(R=>R+1),onDone:R=>{d(R),m(!1)}}),t.jsx("div",{className:"qsec ok",children:e.plugApiT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:q}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var R;(R=navigator.clipboard)==null||R.writeText(q).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote dim",children:e.plugQuota}),t.jsx("div",{className:"qsec ok",children:e.plugMcp}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:C}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var R;(R=navigator.clipboard)==null||R.writeText(C).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsxs("div",{className:"plugcrm",children:[t.jsx("p",{className:"mnote",children:e.plugCrmRecipeT}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugCrmRecipeOpen}),t.jsx("p",{className:"mnote",children:e.plugCrmR1}),t.jsx("p",{className:"mnote",children:e.plugCrmR2}),t.jsx("p",{className:"mnote",children:e.plugCrmR3}),t.jsx("p",{className:"mnote",children:e.plugCrmR4}),t.jsx("p",{className:"mnote dim",children:e.plugCrmRNote})]}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugRefT}),t.jsx("p",{className:"mnote",children:e.plugOpt}),t.jsx("p",{className:"mnote dim",children:e.plugCols})]})]}),t.jsxs("div",{className:"plugcrmq",children:[t.jsx("p",{className:"mnote",children:t.jsx("b",{children:e.plugCrmQT})}),t.jsx("p",{className:"mnote",children:e.plugCrmQ1}),t.jsx("p",{className:"mnote",children:e.plugCrmQ2}),t.jsx("p",{className:"mnote",children:e.plugCrmQ3}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugApiMemoLbl}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:M}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var R;(R=navigator.clipboard)==null||R.writeText(M).then(()=>r(e.exportCopied))},children:e.exportCopy})]})]})]}),t.jsx("p",{className:"mnote",children:e.plugFeeds}),t.jsx("p",{className:"mnote warn",children:e.plugTokenNote}),t.jsx("p",{className:"mnote dim",children:t.jsx("a",{href:"https://proplace.co/api/",target:"_blank",rel:"noopener noreferrer",children:e.plugDoc})})]})]})}function Oc(){const{t:e,token:a,dossiers:r,st:n,dispatch:o,flash:i,flashErr:c,lang:s}=Q(),l=p.useMemo(()=>r.find(h=>h.id===n.approachId)||null,[r,n.approachId]),[g,d]=p.useState("email"),[x,m]=p.useState(0),[b,u]=p.useState({}),[y,w]=p.useState(!1),[f,v]=p.useState(""),[j,k]=p.useState({});if(p.useEffect(()=>{!l||b[g]||y||(w(!0),v(""),ss(a,l.name,g).then(h=>{if(w(!1),!h||h.ok===!1){v((h==null?void 0:h.error)||e.apprFail);return}u(A=>({...A,[g]:h}))}))},[l,g,a]),!l)return null;const N=b[g],S=(N==null?void 0:N.sequence)||[],C=S[x],L=h=>`${g}|${x}|${h}`,q=h=>{const A=L(h);return A in j?j[A]:String(((C==null?void 0:C[h])??"")||"")},M=(h,A)=>k(U=>({...U,[L(h)]:A})),R=L("subject")in j||L("body")in j||L("message")in j,$=q(g==="email"?"body":"message"),F=q("subject"),O=g==="email"&&F?`${F}

${$}`:$;return t.jsxs(Ve,{title:e.apprT(l.name),icon:"✉",wide:!0,children:[t.jsxs("div",{className:"apnav",children:[["email","linkedin"].map(h=>t.jsx("button",{type:"button",className:"apch"+(g===h?" on":""),"aria-pressed":g===h,onClick:()=>{d(h),m(0)},children:h==="email"?e.apprChEmail:e.apprChLi},h)),t.jsx("span",{className:"sp"}),S.map((h,A)=>t.jsxs("button",{type:"button",className:"apday"+(x===A?" on":""),"aria-pressed":x===A,onClick:()=>m(A),children:[h.day||`J${A}`,[`${g}|${A}|subject`,`${g}|${A}|body`,`${g}|${A}|message`].some(U=>U in j)&&t.jsx("i",{children:"✎"})]},h.day||A))]}),t.jsxs("p",{className:"mnote dim",children:[e.apprSeqHint,N!=null&&N.sender?" · "+e.apprSender(N.sender):""]}),y&&t.jsx("p",{className:"mnote",children:e.apprWait}),!!f&&!y&&t.jsxs("p",{className:"mnote warn",children:[f," ",t.jsx("button",{type:"button",className:"lk",onClick:()=>{u(h=>{const A={...h};return delete A[g],A}),v("")},children:e.retry})]}),!y&&!f&&!C&&t.jsx("p",{className:"mnote dim",children:e.apprFail}),C&&t.jsxs(t.Fragment,{children:[g==="email"&&t.jsxs("div",{className:"apfield",children:[t.jsx("label",{children:e.apprSubj}),t.jsx("input",{type:"text",maxLength:160,value:F,onChange:h=>M("subject",h.target.value)})]}),g==="linkedin"&&x===0&&(N==null?void 0:N.connection_request)&&t.jsx("p",{className:"mnote dim",children:e.apprLiNote}),t.jsx("textarea",{className:"apta",maxLength:4e3,rows:12,value:$,onChange:h=>M(g==="email"?"body":"message",h.target.value)}),t.jsxs("div",{className:"apacts",children:[t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var h;(h=navigator.clipboard)==null||h.writeText(O).then(()=>i(e.exportCopied)).catch(()=>c(e.actErr))},children:e.apprCopy}),g==="email"&&t.jsx("a",{className:"abtn",href:`mailto:${encodeURIComponent(l.contactEmail||"")}?subject=${encodeURIComponent(F)}&body=${encodeURIComponent($)}`,children:e.apprMailto}),R&&t.jsx("span",{className:"apedit",children:e.apprEdited})]}),t.jsx("p",{className:"mnote warn",children:e.apprLocal})]}),t.jsx("p",{className:"mnote dim",children:""})]})}function Mc({auto:e,autoKo:a,destKind:r,camp:n,onDone:o,onRetry:i}){const{t:c,token:s,flash:l,flashErr:g,canWrite:d}=Q(),[x,m]=p.useState(!1);if(!e)return a?t.jsxs("div",{className:"plugauto",children:[t.jsx("p",{className:"mnote",children:t.jsx("b",{children:c.plugAutoT})}),t.jsxs("p",{className:"mnote warn",children:[c.alertLoadError," ",t.jsx("button",{type:"button",className:"lk",onClick:i,children:c.retry})]})]}):null;const b=!!e.enabled,u=!b&&(r==="webhook"?e.webhook_ready===!1?c.plugAutoNeed:"":n.trim()?"":c.plugCampNeed),y=b&&(e.destination||"webhook")==="webhook"&&e.webhook_ready===!1,w=()=>{if(x||!d||u)return;m(!0),(b?ar(s,!1):ar(s,!0,r,n.trim()||void 0)).then(v=>{if(m(!1),!v){g(c.actErr);return}o(v),l(v.enabled?c.plugAutoSavedOn:c.plugAutoSavedOff)})};return t.jsxs("div",{className:"plugauto",children:[t.jsx("p",{className:"mnote",children:t.jsx("b",{children:c.plugAutoT})}),t.jsx("p",{className:"mnote dim",children:c.plugAutoSub}),t.jsxs("button",{type:"button",role:"switch","aria-checked":b,className:"apsw"+(b?" on":""),disabled:x||!d||!!u,title:u||void 0,onClick:w,children:[t.jsx("span",{className:"apr","aria-hidden":"true"}),t.jsx("span",{children:c.plugAutoOnLbl})]}),u===c.plugAutoNeed&&t.jsx("p",{className:"mnote warn",children:u}),y&&t.jsx("p",{className:"mnote warn",children:c.plugAutoBroken})]})}function Dc({destKind:e,setDestKind:a,camp:r,setCamp:n,whHint:o}){const{t:i,token:c,lang:s,canWrite:l}=Q(),[g,d]=p.useState("valides"),[x,m]=p.useState(!1),[b,u]=p.useState(null),[y,w]=p.useState(null),[f,v]=p.useState(!1),[j,k]=p.useState(!1),[N,S]=p.useState(null),[C,L]=p.useState(null),q=`atl2:bulk:${c}:${g}:${e}`;p.useEffect(()=>{u(null),w(null),v(!1),S(null);try{const I=localStorage.getItem(q)||localStorage.getItem(`atl2:bulk:${c}:${g}`),D=JSON.parse(I||"null");L(D&&Date.now()-Date.parse(D.t)<24*3600*1e3?D:null)}catch{L(null)}},[q,g,c]);const M=e==="instantly"&&!r.trim(),R=`${g}|${e}|${r.trim()}`,$=async()=>{if(M||!l)return;m(!0),v(!1),S(null);const I=await us(c,g,e,r.trim()||void 0);u(I),w(I.ok?R:null),m(!1)},F=p.useRef(!1);if(!l)return null;const O=async()=>{if(F.current||!l)return;F.current=!0,k(!0);const I=`${c}:${g}:${Date.now()}:${Math.random().toString(36).slice(2,10)}`;let D;try{D=await ms(c,g,e,r.trim()||void 0,I)}finally{F.current=!1}if(k(!1),v(!1),S(D),D.ok&&(D.pushed||0)>0){const B={t:new Date().toISOString(),n:D.pushed||0};L(B);try{localStorage.setItem(q,JSON.stringify(B))}catch{}}};f&&y!==null&&y!==R&&v(!1);const h=o,A=b!=null&&b.ok&&b.ready||0,U=e==="instantly"?r.trim()?i.plugDestInstOn(r.trim()):"":h||"",ee=!!(b!=null&&b.ok)&&y===R&&A>0&&!!U&&!C,E=C?new Date(C.t).toLocaleString(s==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:i.plugBulk}),t.jsx("p",{className:"mnote",children:i.plugBulkHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("select",{value:g,onChange:I=>d(I.target.value),children:i.plugBulkTabs.map(([I,D])=>t.jsx("option",{value:I,children:D},I))}),t.jsxs("select",{value:e,"aria-label":i.plugDestLbl,onChange:I=>a(I.target.value),children:[t.jsx("option",{value:"webhook",children:i.plugDestWh}),t.jsx("option",{value:"instantly",children:i.plugDestInst})]}),e==="instantly"&&t.jsx("input",{type:"text",maxLength:80,placeholder:i.plugCampPh,value:r,onChange:I=>n(I.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:x||M,onClick:()=>{$()},children:x?"…":i.plugBulkPreview})]}),M&&t.jsx("p",{className:"mnote warn",children:i.plugCampNeed}),b&&(b.ok?t.jsx("p",{className:"mnote",children:i.plugBulkResult(b.ready||0,b.linkedinReady||0,(b.noContact||[]).length)}):t.jsx("p",{className:"mnote warn",children:i.actErr})),!!(b!=null&&b.ok)&&t.jsx("p",{className:"mnote dim",children:i.bulkScope}),C&&t.jsx("p",{className:"mnote",children:i.bulkLocked(E,C.n)}),!C&&!!(b!=null&&b.ok)&&!U&&e==="webhook"&&t.jsx("p",{className:"mnote warn",children:i.bulkNoDest}),!C&&!b&&t.jsx("p",{className:"mnote dim",children:i.bulkPreviewFirst}),ee&&!f&&t.jsx("button",{type:"button",className:"abtn dgr",onClick:()=>v(!0),children:i.bulkArm}),ee&&f&&t.jsxs("div",{className:"bulkc",children:[t.jsx("p",{className:"mnote warn",children:i.bulkWarn(A,U)}),t.jsx("button",{type:"button",className:"abtn dgr",disabled:j,onClick:()=>{O()},children:j?i.bulkSending:i.bulkConfirm(U)}),t.jsx("button",{type:"button",className:"abtn",disabled:j,onClick:()=>v(!1),children:i.bulkCancel})]}),N&&(N.ok?N.replayed?t.jsx("p",{className:"mnote",children:N.pending?i.bulkPending:i.bulkReplayed}):(N.pushed||0)>0?t.jsx("p",{className:"mnote",children:i.bulkDone(N.pushed||0,N.linkedinReady||0,N.skippedNoEmail||0)}):t.jsx("p",{className:"mnote warn",children:i.bulkNone}):t.jsx("p",{className:"mnote warn",children:N.error||i.actErr}))]})}function Ic(){const{t:e,data:a,lang:r}=Q(),n=a.credits,o=a.email,i=async c=>{if(!o)return;const s=window.location.href.split("?")[0];try{const g=await(await fetch(`${Ia}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,lookup_key:c,success_url:s+"?credits=ok",cancel_url:s+"?credits=cancel"})})).json();g.url&&(window.location.href=g.url)}catch{}};return t.jsxs(Ve,{title:e.rechargeTitle,icon:"⚡",children:[n&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:e.rechargeHint(n.daily_grant)}}),n.costs&&t.jsxs("p",{className:"mnote",children:["① ",e.creditsCost(n.costs.instant)," · ② ",e.creditsCost(n.costs.detailed)]}),t.jsx("div",{className:"packs",children:(n.packs||[]).map(c=>t.jsxs("div",{className:"pack",children:[t.jsx("div",{className:"pt",children:e.rechargeUnit(c.credits,c.price_eur)}),t.jsx("button",{type:"button",onClick:()=>{i(c.lookup_key)},children:e.rechargeBuy})]},c.lookup_key))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.rechargeNote})]}),!n&&t.jsx("div",{className:"sp-empty",children:e.creditsNone})]})}function Pc(){const{t:e}=Q();return t.jsx(Ve,{title:e.dsBtn,icon:"🗂",wide:!0,children:t.jsx(vc,{})})}function _c(){const{t:e,lang:a,data:r,dossiers:n,token:o,fund:i,canWrite:c,flash:s}=Q(),[l,g]=p.useState(null),[d,x]=p.useState(!1);p.useEffect(()=>{let q=!0;if(i)return Nn(i).then(M=>{q&&M&&typeof M.per_day=="number"&&g(M.per_day)}),()=>{q=!1}},[i]);const[m,b]=p.useState(null);p.useEffect(()=>{if(!o)return;let q=!0;return is(o).then(M=>{q&&b(M)}),()=>{q=!1}},[o]);const u=r.stats,y=typeof(u==null?void 0:u.screened)=="number"?u.screened:n.filter(q=>q.kind==="target"&&_e(q)).length,w=r.marketEstimate||0,f=w>0?Math.min(100,Math.round(y/w*100)):null,v=(u==null?void 0:u.window_days)||30,j=y>0?y/v:0,k=w>0?Math.max(0,w-y):0,S=w>0&&j>0&&y>=100?Math.round(k/j):null,C=q=>Math.round(q).toLocaleString(a==="en"?"en-US":"fr-FR"),L=q=>{d||!c||(x(!0),cs(o,q).then(M=>{if(x(!1),M===null){s(e.actErr);return}g(M),s(e.alertSaved)}))};return t.jsxs(Ve,{title:e.coverTitle,icon:"🌍",children:[t.jsxs("div",{className:"covg",children:[t.jsx("b",{children:e.covScreened(C(y))}),w>0&&t.jsx("span",{children:e.covOf(C(w))})]}),f!==null?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"covbar",children:[t.jsx("i",{style:{width:f+"%"}}),t.jsxs("em",{children:[f," %"]})]}),S!==null&&t.jsx("p",{className:"mnote",children:e.covEta(S)})]}):t.jsx("p",{className:"mnote dim",children:e.covNoEst}),j>=1&&t.jsx("p",{className:"mnote",children:e.covPace(C(j))}),u&&t.jsxs("div",{className:"covf",children:[typeof u.kept=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:C(u.kept)})," ",e.covKept]}),typeof u.analyzed=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:C(u.analyzed)})," ",e.covAna]}),typeof u.shown=="number"&&u.shown!==u.kept&&t.jsxs("span",{children:[t.jsx("b",{children:C(u.shown)})," ",e.funShown]})]}),(m==null?void 0:m.ok)&&(m.detail||[]).length>0&&t.jsxs("details",{className:"covcalc",children:[t.jsx("summary",{children:e.covHowT}),m.perimetre&&t.jsx("p",{className:"mnote",children:m.perimetre}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"mkc",children:e.covColCode}),t.jsx("th",{className:"mkn",children:e.covColN}),t.jsx("th",{className:"mks",children:e.covColSource})]})}),t.jsxs("tbody",{children:[(m.detail||[]).map((q,M)=>t.jsxs("tr",{className:q.n?"":"zero",children:[t.jsxs("td",{className:"mkc",children:[q.code,q.geo?` · ${q.geo}`:" · FR"]}),t.jsx("td",{className:"mkn",children:typeof q.n=="number"?C(q.n):"—"}),t.jsxs("td",{className:"mks",children:[t.jsx("span",{children:q.source}),q.elargi&&t.jsx("em",{children:e.covWide(String(q.demande||""))}),q.erreur&&t.jsx("em",{children:e.covMissing})]})]},M)),t.jsxs("tr",{className:"tot",children:[t.jsx("td",{className:"mkc",children:e.covTotal}),t.jsx("td",{className:"mkn",children:t.jsx("b",{children:C(m.total||w)})}),t.jsx("td",{className:"mks"})]})]})]}),(m.rejetes||[]).length>0&&t.jsx("p",{className:"mnote dim",children:e.covRejected((m.rejetes||[]).join(", "))}),t.jsxs("p",{className:"mnote dim",children:[(m.sources||[]).join(" · "),m.calcule_le?` — ${e.covComputedAt(m.calcule_le.slice(0,10).split("-").reverse().join("/"))}`:""]})]}),c&&l!==null&&t.jsxs("div",{className:"covr",children:[t.jsxs("div",{className:"covrh",children:[t.jsx("span",{children:e.covRate}),t.jsx("b",{children:e.covRateNow(l)})]}),t.jsx("div",{className:"covrb",children:[0,1,2,3,5,10].map(q=>t.jsx("button",{type:"button",className:l===q?"on":"",disabled:d,onClick:()=>L(q),children:q===0?"⏸":q},q))}),t.jsx("p",{className:"mnote dim",children:e.covRateHint})]})]})}async function ei(e,a,r){const n=await fetch(`${xt}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,message:a,who:r})}).then(o=>o.json().catch(()=>({}))).catch(()=>null);if(!n)return{applied:!1,reply:""};if(n.applied===!0)return{applied:!0,reply:String(n.reply||"")};if(!n.job_id)return{applied:!1,reply:String(n.reply||n.clarification||"")};for(let o=0;o<60;o++){await new Promise(c=>window.setTimeout(c,5e3));const i=await fetch(`${xt}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,job_id:n.job_id})}).then(c=>c.json().catch(()=>({}))).catch(()=>null);if(i){if(i.applied===!0)return{applied:!0,reply:String(i.reply||"")};if(i.done===!0||i.status==="done"||i.status==="error"||i.clarification||i.error)return{applied:!1,reply:String(i.reply||i.clarification||i.error||"")}}}return{applied:!1,reply:"",encours:!0}}function Bc(){const{t:e,token:a,canWrite:r}=Q(),[n,o]=p.useState(null),[i,c]=p.useState(""),[s,l]=p.useState(""),[g,d]=p.useState(!1),x=`atl2:avis:${a}:${((n==null?void 0:n.sector)||(n==null?void 0:n.pattern)||"").toLowerCase()}`,m=p.useMemo(()=>{if(!(n!=null&&n.pattern))return!1;try{const u=JSON.parse(localStorage.getItem(x)||"null");return!!u&&Date.now()-(u.t||0)<14*24*3600*1e3}catch{return!1}},[x,n==null?void 0:n.pattern]);if(p.useEffect(()=>{if(!r)return;let u=!0;return ds(a).then(y=>{u&&o(y)}),()=>{u=!1}},[a,r]),!r||g||m||!n||!n.pattern||!n.instruction)return null;if(i==="ok")return t.jsx("p",{className:"mnote",children:e.avisDone});const b=()=>{c("run"),ei(a,n.instruction||"","atelier2-avis").then(u=>{if(c(u.applied?"ok":"ko"),u.applied||l(u.encours?e.propSlow:u.reply),u.applied)try{localStorage.setItem(x,JSON.stringify({t:Date.now(),fait:!0}))}catch{}})};return t.jsxs("div",{className:"avisp",children:[t.jsx("p",{className:"mnote",children:t.jsx("b",{children:e.avisIntro(n.sector||n.pattern||"",n.no||0)})}),t.jsx("p",{className:"mnote dim",children:e.avisAsk}),i==="run"&&t.jsx("p",{className:"mnote",children:e.avisRunning}),i==="ko"&&t.jsx("p",{className:"mnote warn",children:s||e.avisFail}),i!=="run"&&t.jsxs("div",{className:"avisa",children:[t.jsx("button",{type:"button",className:"abtn",onClick:b,children:e.avisYes}),t.jsx("button",{type:"button",className:"lk",onClick:()=>{d(!0);try{localStorage.setItem(x,JSON.stringify({t:Date.now()}))}catch{}},children:e.avisNo})]})]})}function $c(){var N;const{t:e,token:a,canWrite:r,flash:n,flashErr:o}=Q(),[i,c]=p.useState(!1),[s,l]=p.useState(null),[g,d]=p.useState(!1),[x,m]=p.useState([]),[b,u]=p.useState(null),[y,w]=p.useState([]);if(!r)return null;const f=()=>{c(!0),d(!1),m([]),w([]),ps(a).then(S=>{if(c(!1),!S){d(!0),l(null);return}l(S)})},v=S=>{b||(u(S.title),ei(a,S.instruction,"atelier2-prop").then(C=>{u(null),C.applied?(w(L=>[...L,S.title]),n(e.propApplied)):C.encours?n(e.propSlow):o(C.reply||e.propApplyFail)}))},j=((s==null?void 0:s.proposals)||[]).filter(S=>!x.includes(S.title)&&!y.includes(S.title)),k=((N=s==null?void 0:s.counts)==null?void 0:N.judged)??0;return t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.propT}),t.jsx("p",{children:e.propSub}),t.jsx("button",{type:"button",className:"abtn"+(i?" loading":""),disabled:i,style:{marginTop:8},onClick:f,children:i?e.propWait:e.propBtn}),!i&&g&&t.jsx("p",{className:"mnote warn",style:{marginTop:10},children:e.propKo}),!i&&!g&&s&&!(s.proposals||[]).length&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:s.reason==="not_enough_signals"?e.propFew(k):e.propNone}),j.map(S=>t.jsxs("div",{className:"propc",children:[t.jsx("span",{className:"props",children:e.propSections[S.section]||S.section}),t.jsx("p",{className:"propt",children:S.title}),S.why&&t.jsx("p",{className:"mnote dim",children:S.why}),S.evidence.length>0&&t.jsxs("p",{className:"mnote dim",children:[e.propFrom," ",S.evidence.join(" · ")]}),t.jsxs("div",{className:"avisa",children:[t.jsx("button",{type:"button",className:"abtn",disabled:!!b,onClick:()=>v(S),children:b===S.title?e.propApplying:e.propApply}),t.jsx("button",{type:"button",className:"lk",onClick:()=>m(C=>[...C,S.title]),children:e.propSkip})]})]},S.title))]})}function Uc(){var f,v,j;const{t:e,dossiers:a,token:r,mode:n,flash:o,criteria:i,fund:c,lang:s}=Q(),l=n==="client",g=p.useMemo(()=>{const k=new Set;return a.forEach(N=>{N.angle&&k.add(N.angle)}),[...k]},[a]),[d,x]=p.useState(""),[m,b]=p.useState(""),[u,y]=p.useState(!1),w=async()=>{const k=d.trim();if(!(!k||u||!l)){y(!0),b("");try{const S=await(await fetch(`${xt}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r,message:k,who:"atelier2"})})).json().catch(()=>({}));if(S.reply&&b(String(S.reply)),S.job_id){b(e.critChatRunning);const C=async()=>{const L=await fetch(`${xt}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:S.job_id})}).then(q=>q.json()).catch(()=>null);if(L&&L.done){b(String(L.reply||L.clarification||L.summary||"✓")),y(!1),L.applied&&o(e.alertSaved);return}setTimeout(()=>{C()},8e3)};setTimeout(()=>{C()},8e3),x("");return}x("")}finally{m.startsWith("⏳")||y(!1)}}};return t.jsxs(Ve,{title:e.critTitle,icon:"⚙",wide:!0,children:[(i==null?void 0:i.lead)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critHypTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:i.lead}),!!((f=i.points)!=null&&f.length)&&t.jsx("ul",{className:"critpts",children:i.points.map(k=>t.jsx("li",{children:k},k))}),t.jsx("p",{className:"mnote",children:e.critHypSub})]}),!!((v=i==null?void 0:i.angles)!=null&&v.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critProfilsTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:i.method||e.critProfilsSub}),i.angles.map(k=>{var N,S;return t.jsxs("details",{className:"prof",children:[t.jsx("summary",{children:k.title}),k.why&&t.jsx("p",{className:"why",children:k.why}),t.jsxs("div",{className:"lo",children:[!!((N=k.look)!=null&&N.length)&&t.jsxs("div",{children:[t.jsx("em",{children:e.critLookFor}),t.jsx("ul",{children:k.look.map(C=>t.jsx("li",{children:C},C))})]}),!!((S=k.out)!=null&&S.length)&&t.jsxs("div",{className:"ko",children:[t.jsx("em",{children:e.critRuleOut}),t.jsx("ul",{children:k.out.map(C=>t.jsx("li",{children:C},C))})]})]})]},k.title)})]}),!!((j=i==null?void 0:i.gate)!=null&&j.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critGateTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:e.critGateSub}),i.gate.length===1&&!i.gate[0].k?t.jsx("p",{className:"gate1",children:i.gate[0].t}):t.jsx("ol",{className:"gatesteps",children:i.gate.map(k=>t.jsxs("li",{children:[k.k&&t.jsx("b",{children:k.k}),k.t]},k.t))})]}),g.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critAngles}),t.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:g.map(k=>t.jsx("li",{style:{marginBottom:5},children:k.replace(/[_-]+/g," ")},k))})]}),t.jsx(Bc,{}),t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.critChatTitle}),t.jsx("p",{children:e.critChatHint}),t.jsxs("div",{className:"mfield",style:{marginTop:10},children:[t.jsx("input",{placeholder:e.critChatPh,value:d,disabled:!l||u,onChange:k=>x(k.target.value),onKeyDown:k=>{k.key==="Enter"&&w()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(u?" loading":""),style:{padding:"12px 18px"},disabled:!l||u||!d.trim(),onClick:()=>void w(),children:[t.jsx("span",{className:"fill"}),e.critChatSend]})]}),m&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:m})]}),t.jsx($c,{}),t.jsx("div",{style:{marginBottom:14},children:t.jsx(os,{fund:c,lang:s,limit:30,compact:!0})}),t.jsx("div",{className:"qsec ok",children:e.qvTitle}),t.jsx("div",{className:"vlist",children:e.qv.map(([k,N])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vd "+(Ko[k]||"v-cons"),children:k}),t.jsx("span",{children:N})]},k))}),t.jsx("div",{className:"qsec ok",children:e.brTitle}),t.jsx("div",{className:"vlist",children:e.br.map(([k,N])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vtag",children:k}),t.jsxs("span",{children:["← ",N]})]},k))}),t.jsx("p",{className:"mnote",children:e.brNote}),t.jsx("p",{className:"mnote",children:e.critMemoKinds})]})}function Hc(){const{t:e,dispatch:a,startTour:r}=Q(),n=o=>{var i,c;a({type:"modal",modal:null}),o==="crit"||o==="plug"||o==="alert"?a({type:"modal",modal:o}):o.startsWith("tab")?a({type:"ptab",tab:Number(o.slice(3))}):o==="eval"&&((i=document.querySelector(".atl2 .demand input"))==null||i.scrollIntoView({block:"center",behavior:"smooth"}),(c=document.querySelector(".atl2 .demand input"))==null||c.focus())};return t.jsxs(Ve,{title:e.tutoTitle,icon:"▶",children:[t.jsxs("div",{className:"howto-go",children:[t.jsx("p",{children:e.tourIntro}),t.jsxs("button",{type:"button",onClick:()=>{a({type:"modal",modal:null}),r()},children:["▶ ",e.tourStart]})]}),t.jsx("ul",{className:"howto",children:e.howto.map(([o,i],c)=>t.jsxs("li",{role:"button",tabIndex:0,onClick:()=>n(i),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n(i))},children:[t.jsx("span",{className:"n",children:c+1}),t.jsx("span",{dangerouslySetInnerHTML:{__html:o.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}})]},i+c))})]})}const ti="atl2:mapfold",Vc=()=>{if(typeof window>"u")return!1;try{const e=localStorage.getItem(ti);if(e==="on")return!0;if(e==="off")return!1}catch{}try{const e=new URLSearchParams(window.location.search);if(e.get("embed")==="1"&&(e.get("source")||"").toLowerCase()==="ops")return!0}catch{}return window.innerHeight<1e3},Wc=()=>{if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search).get("embed")==="1")return!0}catch{}return window.innerWidth<=760},ai=p.createContext(null),Q=()=>{const e=p.useContext(ai);if(!e)throw new Error("AtelierV2Ctx manquant");return e};function Et({o:e,lg:a}){const{lang:r}=Q(),n=De(e);return n?t.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:or(n,r),children:[n.emoji," ",or(n,r)]}):null}function Pa({o:e,src:a}){const{lang:r,t:n}=Q(),o=De(e);if(!o)return null;const i=js(o),c=Es(o);return t.jsxs("em",{className:"sigwin"+(c?" hot":""),title:n.signaledOn(fo(o,r))+" · "+n.win7(ho(o,r)),children:[t.jsx("span",{className:"gg",children:Array.from({length:7},(s,l)=>t.jsx("i",{className:l<i?"on":""},l))}),t.jsx("span",{className:"lb",children:c?n.lastDay:n.daysLeft(Math.max(0,o.left??0))}),a&&o.url&&t.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",title:n.seeSource,onClick:s=>s.stopPropagation(),children:"↗"})]})}function Gc(e,a,r){const n=(r||"").trim();if(n){const i=e.find(c=>(c.url||"")===n);if(i)return i}const o=Ue(a);if(o)return e.find(i=>Ue(i.name)===o)||e.find(i=>{const c=Ue(i.name);return c.length>=3&&(o.includes(c)||c.includes(o))})}function Yc(){const{scoped:e,t:a,st:r,dispatch:n}=Q(),o=p.useRef(r.filters.day);r.filters.day&&(o.current=r.filters.day);const i=!!r.filters.day,c=e.filter(x=>!Ye(x)),s=c.length,l=c.filter(x=>!x.noCo).length,g=c.filter(x=>!!x.noCo).length,d=(r.filters.sector||[]).length>0;return t.jsxs("button",{type:"button",className:"map-pulse"+(i?" on":""),"aria-pressed":i,title:i?a.zoomPulseBtn:a.zoomPulseWeek,onClick:()=>{if(i)n({type:"filters",patch:{day:"",win:d?"7":"all"}});else{const x=o.current||new Date().toISOString().slice(0,10);n({type:"filters",patch:{day:x,win:"all"}})}},children:[t.jsx("em",{children:i?a.zoomPulseBtn:a.zoomPulseWeek}),t.jsx("b",{children:s}),t.jsx("span",{children:i?a.zoomPulseEd:a.zoomPulseWeekEd}),t.jsxs("ul",{children:[t.jsxs("li",{children:["⚡ ",l," ",a.zoomPulseEval]}),t.jsxs("li",{children:["🔎 ",g," ",a.zoomPulseExplore]})]})]})}function Qc(){const{t:e,lang:a,data:r,dispatch:n}=Q(),o=r.stats,i=s=>s.toLocaleString(a==="en"?"en-US":"fr-FR");if(!o||typeof o.screened!="number"||o.screened<=0)return null;const c=r.marketEstimate||0;return t.jsxs("button",{type:"button",className:"map-pulse",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("em",{children:e.identCoverage}),t.jsx("b",{children:i(o.screened)}),t.jsx("span",{children:c>0?e.covOf(i(c)):e.covScreened("").trim()}),t.jsxs("ul",{children:[typeof o.kept=="number"&&t.jsxs("li",{children:["✅ ",i(o.kept)," ",e.covKept," ",t.jsx("i",{className:"cpscope",children:e.covScopeAll})]}),typeof o.analyzed=="number"&&t.jsxs("li",{children:["⚡ ",i(o.analyzed)," ",e.covAna]})]})]})}function ni({o:e}){const{lang:a}=Q(),r=ks(e.cc),n=e.cc?Ht(e.cc,a)||e.countryLabel||e.cc:e.countryLabel||"—";return t.jsx("span",{className:"c-flag",title:n||void 0,children:r?t.jsx("img",{src:r,width:24,height:18,alt:n||""}):t.jsx("span",{className:"em",children:"🌐"})})}const Kc=!1;function Jc(){const[e,a]=p.useState(!1);return p.useEffect(()=>{const r=document.scrollingElement||document.documentElement,n=()=>a((r.scrollTop||0)>600);return n(),window.addEventListener("scroll",n,!0),()=>window.removeEventListener("scroll",n,!0)},[]),e?t.jsx("button",{type:"button",className:"totop",title:"Remonter en haut",onClick:()=>{(document.scrollingElement||document.documentElement).scrollTo({top:0,behavior:"smooth"})},children:"↑"}):null}const ri=e=>`atl2:tour:${e||"anon"}`;function Xc(e){try{return localStorage.getItem(ri(e))==="1"}catch{return!0}}function to(e){try{localStorage.setItem(ri(e),"1")}catch{}}function Zc(e,a,r,n,o,i,c,s){const l=e.tourT,g=e.howto;return[{sel:".atl2 .ident",title:l.ident,body:e.fhintIdent},o?{sel:".atl2 .cover",title:l.cover,body:e.fhintCover,need:".atl2 .ident"}:null,{sel:".atl2 .engine",title:l.engine,body:e.fhintEngine},{sel:".atl2 .ticker",title:l.live,body:e.fhintLive},{sel:".atl2 .goal",title:l.goal,body:e.fhintGoalAt(a)},{sel:".atl2 .srceng",click:".atl2 .srceng:not(.on) .se-head",title:l.engines,body:e.fhintSrcEng},{sel:".atl2 .funnel",title:l.funnel,body:e.fhintFunnel,ptab:n},i>0?{sel:".atl2 .tuto",title:l.tuto,body:g[3][0],ptab:3,need:".atl2 .tuto"}:null,{sel:".atl2 .demand",title:l.demand,body:g[1][0]},{sel:".atl2 .c-vd",need:".atl2 .list",title:l.chips,body:e.fhintChips,ptab:n,dens:"liste"},{sel:".atl2 .card .cdbody",need:".atl2 .list",title:l.dec,body:e.fhintDec,ptab:n,dens:"deplie"},r?{sel:".atl2 .card .cdtabs",need:".atl2 .list",click:'.atl2 [data-tour="tab-memo"]',title:l.memo,body:e.fhintMemo,ptab:n,dens:"deplie"}:null,{sel:".atl2 .csp",need:".atl2 .list",title:l.status,body:e.fhintStatus,ptab:n,dens:"deplie"},i>0?{sel:".atl2 .rst2",need:".atl2 .list",title:l.decide,body:e.fhintDecide,ptab:3,dens:"liste"}:null,i>0?{sel:".atl2 .memobtn",need:".atl2 .list",title:l.memoDeep,body:e.fhintMemoDeep,ptab:3,dens:"liste"}:null,c>0?{sel:".atl2 .stg",need:".atl2 .list",title:l.stage,body:e.fhintStage,ptab:4,dens:"liste"}:null,c>0?{sel:".atl2 .approach",need:".atl2 .list",title:l.appr,body:e.fhintAppr,ptab:4,dens:"liste"}:null,...[2,4,5].filter(d=>(s[d]||0)>0).map(d=>({sel:'.atl2 .listhead .step[aria-selected="true"], .atl2 .listhead .off[aria-selected="true"]',need:".atl2 .funnel",title:d===2?l.tabAna:d===4?l.tabValid:l.tabRej,body:d===2?e.fhintTabAna:d===4?e.fhintTabValid:e.fhintTabRej,ptab:d})),{sel:".atl2 .listhead .lh-title .main",need:".atl2 .listhead",title:l.rank,body:e.fhintRank},{sel:".atl2 .learn",title:l.learn,body:e.learnLine},{sel:".atl2 .modal.on .mcard",title:l.improve,body:e.fhintImprove,modal:"crit"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=export]",title:l.exportT,body:e.fhintExport,modal:"export"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=plug]",title:l.tools,body:g[6][0],modal:"plug"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=alert]",title:l.alerts,body:e.fhintAlerts,modal:"alert"},{sel:".atl2 .modal.on .mcard",title:l.crit,body:g[0][0],modal:"crit"}].filter(Boolean)}function rp({demo:e=!1,source:a="default",initialFilters:r,initialUi:n,capsOverride:o,onFiltersChange:i}){var Pn;const{lang:c}=bs(),s=Hs[c],l=nl(e,c,a),[g,d]=p.useReducer(il,void 0,()=>rl((n==null?void 0:n.continent)??(a==="ops"?"monde":"europe"),e||(a==="ops"?Wc():Vc()),{ptab:n==null?void 0:n.ptab,dens:(n==null?void 0:n.dens)??"liste",filters:r,modal:n==null?void 0:n.modal})),x=p.useRef(!0);p.useEffect(()=>{if(x.current){x.current=!1;return}if(!(e||a==="ops"))try{localStorage.setItem(ti,g.mapFolded?"on":"off")}catch{}},[g.mapFolded,e,a]),p.useEffect(()=>{if(a!=="ops"||typeof window>"u")return;const z=()=>{window.innerWidth<=760&&d({type:"mapFold",folded:!0})};return z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[a]);const m=p.useRef(i);m.current=i,p.useEffect(()=>{var z;(z=m.current)==null||z.call(m,g.filters)},[g.filters]);const[b,u]=p.useState(()=>{if(typeof window>"u")return"both";try{const z=localStorage.getItem("atl2:chrome-mode");if(z==="eval"||z==="filt"||z==="both")return z;if(localStorage.getItem("atl2:chrome-min")==="1")return"eval"}catch{}return"both"}),[y,w]=p.useState(null),[f,v]=p.useState(null),[j,k]=p.useState(null),[N,S]=p.useState({kept:0,dropped:0}),[C,L]=p.useState(!1),[q,M]=p.useState(""),[R,$]=p.useState(!1),[F,O]=p.useState(null),[h,A]=p.useState(null),[U,ee]=p.useState(!1),[E,I]=p.useState(!1),[,D]=p.useState(0),B=()=>D(z=>z+1),te=p.useRef([]),ae=p.useRef(new Set),be=p.useRef(new Set),[J,he]=p.useState([]),[ue,ge]=p.useState([]),[_,K]=p.useState(0),V=p.useRef(new Map),ne=p.useRef(null),{mode:H}=l,se=p.useMemo(()=>({...l.caps,...a==="ops"?{showMorning:!1}:null,...o||null}),[l.caps,o,a]),de=se.pipe,oe=l.session.token||"",re=H==="client"&&!e;p.useEffect(()=>{if(!oe||!de)return;let z=!0;const Y=async()=>{const fe=await Ns(oe);!z||!fe||(ge(fe.runs),K(Date.now()/1e3-fe.now),he(Te=>Te.filter(ke=>!fe.runs.some($e=>Ue($e.company)===Ue(ke.name)))))};Y();const W=J.length>0||ue.some(fe=>fe.status==="running"),ie=window.setInterval(()=>{Y()},W?8e3:25e3);return()=>{z=!1,window.clearInterval(ie)}},[oe,de,J.length,ue.some(z=>z.status==="running")]),p.useEffect(()=>{if(!oe||!de||!re)return;let z=!0;const Y=async()=>{const ie=await Ss(oe);if(!z||!ie.length)return;const fe=new Map;ie.forEach(Te=>{const ke=String(Te.ceo_status||"").trim();ke&&Te.check_id&&fe.set(String(Te.check_id),ke)}),l.patchStatuses(fe,Te=>Date.now()-(qe.current.get(Te)||0)>9e4)};Y();const W=window.setInterval(()=>{Y()},6e4);return()=>{z=!1,window.clearInterval(W)}},[oe,de,re]);const ye=p.useMemo(()=>{const z=[],Y=new Set;for(const W of J){const ie=Ue(W.name);!ie||Y.has(ie)||(Y.add(ie),z.push({name:W.name,id:W.id,status:"boot",started:W.started,estMin:W.estMin,memoType:"instant"}))}for(const W of ue){const ie=Ue(W.company);if(!ie||Y.has(ie))continue;Y.add(ie);const fe=W.status==="error"?"error":W.status==="done"?"done":"running";z.push({name:W.company,status:fe,started:W.started||0,estMin:W.est_min||(W.memo_type==="detailed"?40:15),url:W.url,error:W.error,memoType:W.memo_type,note:W.note})}return z},[J,ue]),me=z=>ye.find(Y=>Ue(Y.name)===Ue(z))||null,We=(z,Y)=>{he(W=>W.some(ie=>Ue(ie.name)===Ue(z.name))?W:[...W,{name:z.name,id:z.id,started:Date.now()/1e3,estMin:Y==="detailed"?40:15}]),ae.current.add(z.id),B()},we=(z,Y=!1)=>{M(z),$(Y),ne.current&&clearTimeout(ne.current),ne.current=setTimeout(()=>M(""),Y?4200:2400)},Se=z=>we(z,!0),Ne=p.useMemo(()=>{const z=new Map;return l.dossiers.forEach(Y=>{Y.id&&z.set(Y.id,Y)}),z},[l.dossiers]),Oe=p.useMemo(()=>l.dossiers.filter(z=>ta(z,g,de)),[l.dossiers,g,de]),vt=p.useRef(!1);p.useEffect(()=>{if(vt.current||e||l.loading||!l.dossiers.length)return;if(!se.showFunnel||Xc(l.session.token||"")){vt.current=!0;return}vt.current=!0;const z=window.setTimeout(()=>{to(l.session.token||""),ee(!0)},700);return()=>window.clearTimeout(z)},[e,l.loading,l.dossiers.length,se.showFunnel,l.session.token]);const lt=p.useMemo(()=>l.dossiers.filter(z=>sl(z,g,de,l.favIds)),[l.dossiers,g,de,l.favIds]),Me=p.useMemo(()=>vs(Oe.filter(z=>!Ge(z)),l.favIds),[Oe,l.favIds]),ze=p.useRef(!1);p.useEffect(()=>{if(ze.current)return;if(!de||a==="ops"){ze.current=!0;return}if((n==null?void 0:n.ptab)!==void 0){ze.current=!0;return}if(l.loading)return;ze.current=!0;const z=ys(Me);z!==g.ptab&&d({type:"ptab",tab:z})},[de,a,n==null?void 0:n.ptab,l.loading,Me,g.ptab]);const rt=p.useMemo(()=>{const z=jo(l.dossiers);return z?bt(z)===0?s.tourToday:Eo(z,c):s.tourNoRun},[l.dossiers,s,c]),He=p.useMemo(()=>l.dossiers.some(z=>!!z.memoUrl||!!z.summary||Pt(z)),[l.dossiers]),[yt,ot]=p.useState(!1);p.useEffect(()=>{if(l.loading){ot(!1);return}if(l.dossiers.length>0||l.error){ot(!0);return}const z=window.setTimeout(()=>ot(!0),6e3);return()=>window.clearTimeout(z)},[l.loading,l.dossiers.length,l.error]);const St=(l.marketEstimate||0)>0||typeof((Pn=l.stats)==null?void 0:Pn.screened)=="number"&&l.stats.screened>0,Ct=p.useMemo(()=>[1,0,2,4,5,3].find(z=>(Me[z]||0)>0)??0,[Me]),Je=Sn.find(z=>z.key===g.continent),wt=g.continent==="monde"?s.contWorld:(c==="fr"?Je==null?void 0:Je.fr:Je==null?void 0:Je.en)||"";p.useEffect(()=>{const z=Y=>{var ie;const W=(((ie=Y.detail)==null?void 0:ie.name)||"").trim();W&&zt(null,W)};return window.addEventListener("ppmap:evaluate",z),()=>window.removeEventListener("ppmap:evaluate",z)}),p.useEffect(()=>{const z=Y=>{const W=Y.detail||{},ie=String(W.id||"").trim(),fe=String(W.name||"").trim(),Te=String(W.url||"").trim(),ke=ie&&Ne.get(ie)||Gc(l.dossiers,fe,Te);if(ke){if(v(null),ta(ke,g,de)||(g.continent!=="monde"&&ke.continent!==g.continent&&d({type:"continent",key:ke.continent||"monde"}),d({type:"reset"})),de&&ke.kind!=="op"){const dt=Ee(ke);typeof dt=="number"&&dt!==g.ptab&&d({type:"ptab",tab:dt})}window.dispatchEvent(new CustomEvent("ppmap:reveal")),d({type:"focus",id:ke.id}),(ke.noCo||["media","nominations","recrutements"].includes(ke.engine||""))&&(ke.url||ke.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:ke.url||"",text:[ke.headline,ke.tagline].filter(Boolean).join(`
`)}})):ke.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:ke.name,url:ke.url||"",website:ke.website||"",domain:ke.domain||""}}));return}!fe&&!Te||(d({type:"focus",id:ie||null}),v({name:fe,headline:String(W.text||"").trim()||fe,url:Te,card:W.card}),Te&&(Sa(fe)||!fe)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:Te,text:String(W.text||"").trim()}})):fe&&!Sa(fe)&&window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:fe}})))};return window.addEventListener("ppmap:focus",z),()=>window.removeEventListener("ppmap:focus",z)}),p.useEffect(()=>{const z=ie=>{const fe={},Te=String((ie==null?void 0:ie.sector)||"").trim();Te&&(fe.sector=[Te]);const ke=String((ie==null?void 0:ie.day)||"").slice(0,10);/^\d{4}-\d{2}-\d{2}$/.test(ke)&&(fe.day=ke);const $e=String((ie==null?void 0:ie.search)||"").trim();$e&&(fe.search=$e);const dt=String((ie==null?void 0:ie.dealKind)||"").trim();(dt==="ma"||dt==="levee"||dt==="other")&&(fe.dealKind=[dt]),Object.keys(fe).length&&d({type:"filters",patch:fe})},Y=ie=>z(ie.detail),W=ie=>{ie.data&&ie.data.type==="pp-filter"&&z(ie.data)};return window.addEventListener("ppmap:filter",Y),window.addEventListener("message",W),()=>{window.removeEventListener("ppmap:filter",Y),window.removeEventListener("message",W)}},[]),p.useEffect(()=>{const z=Y=>{var fe;const W=(((fe=Y.detail)==null?void 0:fe.name)||"").trim().toLowerCase();if(!W)return;const ie=l.dossiers.find(Te=>(Te.name||"").trim().toLowerCase()===W);ie&&d(a==="ops"?{type:"focus",id:ie.id}:{type:"popup",id:ie.id})};return window.addEventListener("ppmap:similar",z),()=>window.removeEventListener("ppmap:similar",z)});const zt=(z,Y,W)=>{const ie=(W||(z==null?void 0:z.name)||Y||"").trim();if(!re){k({kicker:ie});return}!ie||C||(L(!0),(async()=>{try{let fe=(Y||ie).trim();const Te=((z==null?void 0:z.website)||(z==null?void 0:z.domain)||"").trim();if(!(/^https?:\/\//i.test(fe)||/^[a-z0-9.-]+\.[a-z]{2,}(\/|$)/i.test(fe)&&!/\s/.test(fe)))if(Te)fe=Te;else try{const Re=await Cn(ie);if(Re!=null&&Re.website)fe=Re.website;else if(((Re==null?void 0:Re.candidates)||[]).length===1)fe=Re.candidates[0].url;else if(((Re==null?void 0:Re.candidates)||[]).length>1){te.current=[{name:ie,verdict:"unresolved",remaining:null,reason:s.evalPickSite,candidates:(Re.candidates||[]).slice(0,5)},...te.current].slice(0,8),B();return}}catch{}const $e=await co(oe,fe,"atelier2"),dt={name:$e.company||ie,verdict:$e.verdict,reason:$e.reason||"",remaining:$e.remaining??null};te.current=[dt,...te.current].slice(0,8),$e.verdict==="kept"&&S(Re=>({...Re,kept:Re.kept+1})),$e.verdict==="ruled_out"&&S(Re=>({...Re,dropped:Re.dropped+1}));const Wt=z||l.dossiers.find(Re=>(Re.name||"").toLowerCase()===ie.toLowerCase());Wt&&($e.verdict==="kept"?Wt.verdict=Wt.verdict||"MATCH":$e.verdict==="ruled_out"&&(Wt.verdict="NO MATCH"),$e.reason&&(Wt.reasoning=$e.reason)),B()}finally{L(!1)}})())},Mt=z=>{if(!re){k({kicker:z.name});return}We(z,"instant"),kt(oe,"fast_request",z.name||"",""),we(s.memoInstantSent(z.name))},Ie=z=>V.current.get(z.id)??l.thumbs.get((z.name||"").trim().toLowerCase()),it=(z,Y)=>d({type:"undoPush",entry:{id:z.id,name:z.name,prevCeoStatus:Y}}),Pe=async(z,Y,W)=>{const ie=z.ceoStatus||"";qe.current.set(z.id,Date.now()),z.ceoStatus=Y,B();const fe=await Ua(oe,{status:Y,airtable_id:z.airtableId,check_id:z.checkId,company:z.name,...(W==null?void 0:W.note)!==void 0?{note:W.note}:{},...W!=null&&W.via?{via:W.via}:{}});return fe.ok?fe.skipped?(z.ceoStatus=ie,B(),Se(s.actNotPersisted),!1):((W==null?void 0:W.undo)!==!1&&it(z,ie),W!=null&&W.msg&&we(W.msg),(Y==="Validé"||Y==="Écarté")&&!z.ceoNote&&(W==null?void 0:W.note)===void 0&&O({o:z,yes:Y==="Validé"}),!0):(z.ceoStatus=ie,B(),Se(s.actErr),!1)},T=async(z,Y)=>{const W=await Ua(oe,{status:z.ceoStatus||"Retenu",airtable_id:z.airtableId,check_id:z.checkId,company:z.name,note:Y,via:"note"});return!W.ok||W.skipped?(Se(W.skipped?s.actNotPersisted:s.actErr),!1):(z.ceoNote=Y,B(),!0)},G=p.useRef(new Map),X=z=>G.current.has(z.id)?G.current.get(z.id):l.stages.get((z.name||"").trim().toLowerCase()),ce=(z,Y)=>{G.current.set(z.id,Y),B()},P=(z,Y)=>{re&&Pe(z,Y?"Validé":"Écarté",{msg:Y?s.decidedYes(z.name):s.decidedNo(z.name)})},Z=z=>{re&&Pe(z,"À trancher",{msg:s.promoted(z.name)})},le=z=>{re&&(async()=>{const Y=z.ceoStatus||"";z.ceoStatus="Retenu",B();const W=await Ua(oe,{status:"Retenu",check_id:z.checkId,company:z.name});if(!W.ok||W.skipped){z.ceoStatus=Y,B(),Se(W.skipped?s.actNotPersisted:s.actErr);return}it(z,Y),we(s.repeched(z.name))})()},xe=()=>{const z=g.undo[g.undo.length-1];if(!z){we(s.undoNone);return}const Y=Ne.get(z.id);if(!Y){d({type:"undoPop"}),we(s.undoNone);return}let W=z.prevCeoStatus;if(!W)if((Y.verdict||"").toUpperCase().includes("CALL"))W="À trancher";else{we(s.undoLockedTitle);return}(async()=>await Pe(Y,W,{undo:!1})&&(d({type:"undoPop"}),Y.ceoStatus=z.prevCeoStatus,B(),we(s.undoDone(Y.name))))()},pe=z=>{re&&(be.current.add(z.id),B(),d({type:"approachOpen",id:z.id}),kt(oe,"approach",z.name||"",""))},qe=p.useRef(new Map),Be=p.useRef(!1);p.useEffect(()=>{if(!oe||e||!re||Be.current)return;Be.current=!0;const z=new Date().toISOString().slice(0,10),Y=`atl2:vue:${oe}:${z}`;try{if(localStorage.getItem(Y))return}catch{}kt(oe,"view","","").then(W=>{if(!W.ok){Be.current=!1;return}try{localStorage.setItem(Y,"1")}catch{}})},[oe,e]);const Ae=(z,Y)=>{re&&(async()=>{if(!(await kt(oe,Y?"yes":"no",z.name||"",(z.ceoNote||"").slice(0,400),z.sector||"")).ok){Se(s.actErr);return}V.current.set(z.id,Y?"yes":"no"),B(),we(Y?s.thumbUpDone:s.thumbDnDone),A({o:z,up:Y})})()},ft=z=>{!re||!Pt(z)||(We(z,"detailed"),kt(oe,"detailed_request",z.name||"",""),we(s.memoDeepSent(z.name)))},Xe=z=>{!re||!z.memoUrl||window.confirm(s.memoRegenAsk(z.name))&&(We(z,"detailed"),kt(oe,"detailed_regen",z.name||"",""),we(s.memoDeepSent(z.name)))},da=z=>{const Y=new Set(l.favIds),W=Y.has(z.id);W?Y.delete(z.id):Y.add(z.id),l.setFavIds(Y),re&&Cs(oe,{id:z.id,co:z.name},W)},oi=()=>{!re||E||window.confirm(s.identSyncConfirm)&&(I(!0),(async()=>{const z=await zs(oe);I(!1),z?we(s.identSyncDone):Se(s.actErr)})())},In=/proplace/i.test(l.fund||""),ii=z=>{!re||!In||(kt(oe,"onboard_request",z.name||"",""),we(s.onboardSent(z.name)))},si={st:g,dispatch:d,t:s,lang:c,mode:H,caps:se,pipe:de,token:oe,fund:l.fund,email:l.email,criteria:l.criteria,source:a||"default",data:l,doRepeche:le,thumbOf:Ie,canWrite:re,commitStatus:Pe,saveNote:T,stageOf:X,setStage:ce,flashErr:Se,startTour:()=>ee(!0),dossiers:l.dossiers,scopedAll:Oe,scoped:lt,counts:Me,byId:Ne,contName:wt,favIds:l.favIds,toggleFav:da,askEvaluate:zt,doAnalyse:Mt,doDecide:P,doPromote:Z,doApproach:pe,doThumb:Ae,doDeep:ft,doRegen:Xe,doUndo:xe,doSync:oi,doOnboard:ii,outbound:In,memoQueued:ae.current,liveMemos:{items:ye,serverOff:_,liveOf:me},approachDone:be.current,sessTally:N,evalCards:te.current,evalBusy:C,markRow:w,markedId:y,flash:we,focusExtra:f};p.useEffect(()=>{const z=Y=>{Y.key==="Escape"&&(d({type:"popup",id:null}),d({type:"modal",modal:null}),d({type:"openFacet",facet:null}))};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[]);const li=z=>oe?t.jsx(cl,{token:oe,children:z}):t.jsx(t.Fragment,{children:z});return t.jsx(ai.Provider,{value:si,children:t.jsxs("div",{className:"atl2"+(a==="ops"?" ops":"")+(oe?" cibles":"")+" chrome-"+b,children:[t.jsx("style",{children:Qs}),li(t.jsxs("div",{className:"app"+(de?" pipe":"")+(oe?" has-thesis":""),children:[se.showTicker&&t.jsx(st,{name:"live",children:t.jsxs("div",{className:"live-stack"+(oe?" live-stack--cibles":""),children:[t.jsx(xl,{}),!!oe&&t.jsx(pl,{})]})}),se.showIdent&&t.jsx(st,{name:"identite",children:t.jsx(zl,{})}),!1,Kc,se.showFunnel&&t.jsx(st,{name:"entonnoir",children:t.jsx(ep,{})}),!g.mapFolded&&t.jsx(st,{name:"carte",fallback:t.jsx("div",{className:"void",children:s.loadError}),children:t.jsxs("div",{className:"fzone",children:[t.jsx(Ho,{}),t.jsxs("div",{className:"stage",id:"atl2-stage",children:[a==="ops"&&t.jsx(Yc,{}),a!=="ops"&&se.showFunnel&&t.jsx(Qc,{}),t.jsx(Sd,{}),t.jsx(Uo,{})]})]})}),se.showDemand&&de&&t.jsx(st,{name:"direct",children:t.jsx(Fs,{items:ye,serverOff:_,labels:{strip:s.liveStrip,boot:s.liveBoot,end:s.liveEnd,open:s.liveOpenQueue,memo:s.actMemo},onOpen:()=>d({type:"modal",modal:"queue"})})}),a==="ops"&&t.jsx("div",{className:"chrome-tog",role:"tablist","aria-label":s.chromeBoth,children:[["eval",s.chromeEval],["filt",s.chromeFilt],["both",s.chromeBoth]].map(([z,Y])=>t.jsx("button",{type:"button",role:"tab","aria-selected":b===z,onClick:()=>{u(z);try{localStorage.setItem("atl2:chrome-mode",z)}catch{}},children:Y},z))}),se.showDemand&&t.jsx(st,{name:"evaluation",children:t.jsx("div",{className:"eval-stick",children:t.jsx(Rd,{})})}),se.showDemand&&g.memoConsole&&t.jsx(st,{name:"console",children:t.jsx(Md,{})}),se.pipe&&!!oe&&t.jsx(st,{name:"moteurs",children:t.jsx(Bs,{})}),t.jsx(st,{name:"liste",fallback:t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>window.location.reload(),children:s.retry})]}),children:t.jsx(mc,{})}),se.pipe&&!!oe&&t.jsx("p",{className:"privnote",children:s.privLink}),l.loading&&t.jsx("div",{className:"void",children:s.loadingV2}),l.error&&!l.loading&&t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:l.refresh,children:s.retry})]})]})),g.popupId&&g.dens!=="liste"&&a!=="ops"&&t.jsx(st,{name:"fiche",children:t.jsx(Kd,{})}),t.jsx(st,{name:"modales",children:t.jsx(wc,{})}),t.jsx(yl,{}),h&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:h.o.name}),t.jsx(xr,{placeholder:h.up?s.thumbWhyUpPh:s.thumbWhyDnPh,onDone:z=>{const Y=h.o;A(null),z&&kt(oe,"note",Y.name||"",z,Y.sector||"").then(W=>{W.ok&&we(s.csNoteSaved)})}})]}),F&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:F.o.name}),t.jsx(xr,{placeholder:F.yes?s.whyYesPh:s.whyNoPh,onDone:z=>{const Y=F.o;O(null),z&&T(Y,z).then(W=>{W&&we(s.csNoteSaved)})}})]}),U&&yt&&t.jsx(Sl,{steps:Zc(s,rt,He,Ct,St,Me[3]||0,Me[4]||0,Me),onClose:()=>{ee(!1),to(oe)}}),t.jsx(Jc,{}),se.showOnb&&t.jsxs("div",{className:"lockbar on",children:[t.jsx("b",{children:s.lockbarText}),t.jsxs("span",{className:"lb-c",children:[s.lockbarContactBefore,t.jsx("a",{href:wo,children:qn}),s.lockbarContactMid,t.jsx("a",{href:`mailto:${Aa}`,children:Aa})]}),t.jsx("button",{type:"button",onClick:()=>d({type:"modal",modal:"rdv"}),children:s.lockbarCta})]}),q&&t.jsx("div",{className:"flash on"+(R?" err":""),children:q}),j&&t.jsx(ws,{variant:"acquirer",initialCompany:ao().co,initialWebsite:ao().site,onClose:()=>k(null)})]})})}function ep(){const{t:e}=Q(),[a,r]=p.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem("atl2:fhint")==="off"}catch{return!1}});return a?null:t.jsxs("p",{className:"fhint",children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:t.jsx("path",{d:"M1 2h10M2.5 5.5h7M4.5 9h3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})}),t.jsx("span",{dangerouslySetInnerHTML:{__html:e.funnelHint}}),t.jsx("button",{type:"button","aria-label":"Fermer",title:e.fhintClose,onClick:()=>{r(!0);try{localStorage.setItem("atl2:fhint","off")}catch{}},children:"✕"})]})}function ao(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function tp(e){return e>=1e9?(e/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":e>=1e6?Math.round(e/1e6)+" M€":Math.round(e/1e3)+" k€"}export{ni as FlagCell,Et as SigBadge,Pa as SigWin,rp as default,tp as fmtShort,Q as useV2};
