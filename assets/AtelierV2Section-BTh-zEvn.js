var qi=Object.defineProperty;var Ti=(e,a,r)=>a in e?qi(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var Qn=(e,a,r)=>Ti(e,typeof a!="symbol"?a+"":a,r);import{r as c,u as Li,a as Fi,b as Ri,R as fa,L as Oi,j as t,P as Wa,f as Kn,p as Le,c as Mi,d as Di,C as Jn,e as Ii,g as Pi,l as Ga,o as ja,i as go,h as _i,k as Bi,m as $i,n as Xn,q as Ui,s as Zn,t as er,v as tr,w as Hi,x as Vi,y as Wi,z as Gi,A as Yi,S as Ha,B as Qi,D as xo,E as $e,F as Ln,G as jt,H as Lt,I as bo,J as Ki,K as Ji,M as vo,N as Aa,O as Xi,_ as cn,Q as Zi,T as es,U as ts,V as Ge,W as as,X as ns,Y as zt,Z as rs,$ as Gt,a0 as os,a1 as is,a2 as ss,a3 as Fn,a4 as ar,a5 as nr,a6 as Yt,a7 as un,a8 as Ft,a9 as tt,aa as rr,ab as ls,ac as ds,ad as ps,ae as or,af as Rn,ag as wo,ah as yo,ai as ko,aj as cs,ak as us,al as Eo,am as ms,an as fs,ao as hs,ap as gs,aq as xs,ar as Ut,as as ma,at as qa,au as bs,av as jo,aw as ir,ax as Dt,ay as vs,az as No,aA as So,aB as sr,aC as ws,aD as ys,aE as oa,aF as mn,aG as ks,aH as Es,aI as js,aJ as lr,aK as Ns,aL as Ss,aM as Cs,aN as On,aO as zs,aP as As,aQ as dr,aR as qs,aS as Ya,aT as Co,aU as pr,aV as Ts,aW as Ls,aX as zo,aY as yt,aZ as Fs,a_ as cr,a$ as Rs,b0 as Os,b1 as ur,b2 as Ms,b3 as Ds,b4 as mr,b5 as Is,b6 as Ps,b7 as _s,b8 as Bs,b9 as $s,ba as Us,bb as Hs,bc as fr,bd as Vs,be as Ws,bf as Gs,bg as Ys,bh as Qa,bi as Qs,bj as Ks,bk as Js}from"./index-BEAsrm7p.js";const Xs=({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:o,onInit:i,onPageChange:d,onSubmit:l})=>{const[s,h]=c.useState(!0),p=Li({filloutId:e,domain:a,inheritParameters:r,parameters:n,dynamicResize:o});Fi(p,{onInit:i,onPageChange:d,onSubmit:l});const[x,u]=c.useState();return Ri(p,"form_resized",b=>{const m=b.size;typeof m=="number"&&u(m)},{disabled:!o}),fa.createElement("div",{className:"fillout-standard-embed",style:{height:o?typeof x=="number"?x:256:"100%",transition:o?"height 150ms ease":void 0}},s&&fa.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},fa.createElement(Oi,null)),p&&fa.createElement("iframe",{src:p.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>h(!1),style:{width:s?0:"100%",height:s?0:"100%",opacity:s?0:1,borderRadius:10,border:0,minHeight:256}}))};function Ue(e){return(e||"").trim().toLowerCase()}function Zs(e,a){const r=Math.max(60,a*60);return Math.max(2,Math.min(97,Math.round(e/r*100)))}function hr(e){const a=Math.max(0,Math.floor(e)),r=Math.floor(a/60),n=a%60;return r+":"+String(n).padStart(2,"0")}function el(e){const a=new Date(e);return String(a.getHours()).padStart(2,"0")+":"+String(a.getMinutes()).padStart(2,"0")}const tl=300;function Ta({item:e,serverOff:a,bootLbl:r,endLabel:n}){const[o,i]=c.useState(()=>Date.now()/1e3);c.useEffect(()=>{const u=window.setInterval(()=>i(Date.now()/1e3),1e3);return()=>window.clearInterval(u)},[]);const d=e.memoType==="detailed"?"mémo détaillé ~"+(e.estMin||40)+" min":"mémo éclair ~"+(e.estMin||15)+" min";if(e.status==="boot"||!(e.started>0)){const u=o-(e.started||o);return u>tl?t.jsx("span",{className:"runerr",children:"⚠ le moteur n'a pas pris le dossier ("+Math.round(u/60)+" min) — relancez l'analyse"}):t.jsxs("span",{className:"runtrack boot",children:[t.jsx("span",{className:"runchrono",children:r+" · "+d+(u>20?" · "+hr(u):"")}),t.jsx("span",{className:"runbar",children:t.jsx("i",{className:"ind"})})]})}if(e.status==="error")return t.jsx("span",{className:"runerr",children:e.error||"erreur"});if(e.status==="done")return t.jsx("span",{className:"rundone",children:"✓"});const l=o-a-e.started,s=e.estMin||15,h=s*60-l,p=Zs(l,s),x=h>0&&n?" · "+n.replace("{t}",el((e.started+s*60+a)*1e3)):"";return t.jsxs("span",{className:"runtrack",children:[t.jsx("span",{className:"runchrono",children:d+" · ⏱ "+hr(l)+" · "+p+"%"+(h>0?" · reste ~"+Math.ceil(h/60)+" min":" · …")+x}),!!e.note&&t.jsx("span",{className:"runnote",children:e.note}),t.jsx("span",{className:"runbar",children:t.jsx("i",{style:{width:p+"%"}})})]})}function al({items:e,serverOff:a,labels:r,onOpen:n}){const o=e.filter(i=>i.status!=="done"||Date.now()/1e3-(i.started||0)<1200);return o.length?t.jsxs("div",{className:"livestrip",role:"button",onClick:n,title:r.open,children:[t.jsx("span",{className:"ls-ico",children:"⚡"}),t.jsx("span",{className:"ls-lab",children:r.strip}),o.slice(0,6).map(i=>t.jsxs("span",{className:"ls-chip"+(i.status==="error"?" err":i.status==="done"?" done":""),children:[t.jsx("b",{children:i.name}),i.status==="done"&&i.url?t.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",onClick:d=>d.stopPropagation(),children:r.memo}):t.jsx(Ta,{item:i,serverOff:a,bootLbl:r.boot,endLabel:r.end})]},i.name)),o.length>6&&t.jsxs("span",{className:"ls-more",children:["+",o.length-6]}),t.jsxs("span",{className:"ls-go",children:[r.open," →"]})]}):null}const gr={rss:"RSS",google_news:"Google News",google_alerts:"Google Alerts",pappers_fr:"Pappers FR",crt:"CRT",github:"GitHub",hn:"Hacker News",fundraising:"Fundraising",backfill:"Backfill",websets_engine:"Exa Websets",websets:"Exa Websets",linkedin_posts:"LinkedIn Posts",linkedin_jobs:"LinkedIn Jobs",exa_semantic:"Exa Semantic",exa_similar:"Exa Similar",crunchbase_search:"Crunchbase",other_custom:"Autres (Make sur-mesure)",manual_paste:"Saisie manuelle",find_similar_qualified:"Similaires aux qualifiés",editorial:"Éditorial (médias experts)",daily_news:"Daily news thèse",alumni:"Alumni fondateurs",competitor_exodus:"Départs concurrents",hackernews:"Hacker News",crt_sh:"CRT",pappers:"Pappers FR",pappers_intl:"Pappers International",opencorporates:"OpenCorporates",tavily:"Tavily",registre_gouv:"Registre officiel (gouv)",hunter:"Hunter",sales_nav:"Sales Navigator",sourcing:"Sourcing Proplace",local:"Moteur local (Google Maps + BODACC)"},nl={rss:"Lit chaque matin des centaines de médias et de flux spécialisés pour repérer les sociétés qui bougent dans votre secteur.",editorial:"Suit en continu les médias experts et lettres spécialisées de votre secteur pour repérer les sociétés dont on commence à parler.",google_news:"Balaie l'actualité mondiale en continu pour capter les sociétés qui font parler d'elles (levées, lancements, nominations).",google_alerts:"Surveille des mots-clés précis sur tout le web et remonte chaque société correspondante dès qu'elle apparaît.",pappers_fr:"Interroge les registres officiels français (SIRENE, codes d'activité) pour trouver des sociétés par métier, en temps réel.",crt:"Détecte les toutes nouvelles sociétés dès la mise en ligne de leur site web — un signal très précoce, avant tout le monde.",github:"Détecte les sociétés tech par l'activité de leurs développeurs — un signal très en amont, avant qu'elles ne fassent parler d'elles.",hn:"Scrute Hacker News, le forum de référence des fondateurs tech, pour repérer les projets qui émergent en premier.",fundraising:"Repère les sociétés qui viennent de lever des fonds — le moment précis où elles accélèrent et deviennent intéressantes.",backfill:"Repasse sur les périodes passées pour rattraper les sociétés qui auraient pu passer entre les mailles du filet.",websets:"Construit des listes de sociétés sur mesure à partir d'une simple description, en explorant tout le web.",websets_engine:"Construit des listes de sociétés sur mesure à partir d'une simple description, en explorant tout le web.",linkedin_posts:"Analyse les publications LinkedIn pour repérer les sociétés et dirigeants qui annoncent quelque chose d'intéressant.",linkedin_jobs:"Lit les offres d'emploi LinkedIn : une société qui recrute massivement dans un domaine trahit sa stratégie et sa croissance.",exa_semantic:"Recherche sémantique sur tout le web : vous décrivez ce que vous cherchez en langage naturel, et il trouve les sociétés qui y ressemblent.",exa_similar:"Partez d'une société que vous aimez, et il trouve toutes celles qui lui ressemblent sur le web.",crunchbase_search:"Interroge la base mondiale des startups et de leurs financements pour trouver des sociétés par profil.",other_custom:"Moteurs branchés spécialement pour votre thèse — chaque signal utile peut devenir un moteur sur mesure.",manual_paste:"Les sociétés que vous ajoutez vous-même à la main, évaluées selon vos critères exactement comme les autres.",find_similar_qualified:"Part des sociétés que vous avez déjà retenues pour en trouver d'autres, très proches, partout sur le web.",daily_news:"Relit l'actualité du jour à travers le prisme exact de votre thèse pour n'en garder que ce qui vous concerne.",alumni:"Suit les diplômés des meilleures écoles pour repérer ceux qui viennent de fonder une société.",competitor_exodus:"Détecte les départs de talents des sociétés concurrentes — souvent le signe d'une nouvelle société en création.",hackernews:"Scrute Hacker News, le forum de référence des fondateurs tech, pour repérer les projets qui émergent en premier.",crt_sh:"Détecte les toutes nouvelles sociétés dès la mise en ligne de leur site web — un signal très précoce, avant tout le monde.",pappers:"Interroge les registres officiels français (SIRENE, codes d'activité) pour trouver des sociétés par métier, en temps réel.",pappers_intl:"Interroge les registres d'entreprises internationaux pour trouver des sociétés par pays et par activité, en temps réel.",opencorporates:"Explore la plus grande base mondiale de registres d'entreprises pour retrouver des sociétés officielles partout dans le monde.",tavily:"Recherche web en temps réel : interroge tout le web à la volée pour capter les sociétés qui collent à votre thèse.",registre_gouv:"Interroge le registre officiel des entreprises françaises (recherche-entreprises) pour trouver des sociétés par activité.",local:"Trouve les commerces de proximité de votre métier, ville par ville. Sur Google Maps : les magasins physiques avec leur note, leurs avis et leur site (tri « leaders » ou « à reprendre »). Via le BODACC officiel : les affaires acquérables — liquidations, ventes & cessions de fonds, cessations (locaux à récupérer). Tourne à la demande (Google Maps payant) ; option radar quotidien gratuit via BODACC.",hunter:"Retrouve les coordonnées professionnelles des sociétés (emails, domaines) pour identifier les bons interlocuteurs à contacter."},rl={rss:"Reads hundreds of media outlets and specialist feeds every morning to spot the companies moving in your sector.",editorial:"Continuously follows the expert media and specialist newsletters in your sector to catch companies just starting to get noticed.",google_news:"Sweeps world news in real time to catch companies making headlines (raises, launches, appointments).",google_alerts:"Watches precise keywords across the whole web and surfaces every matching company the moment it appears.",pappers_fr:"Queries the official French registries (SIRENE, activity codes) to find companies by line of business, in real time.",crt:"Detects brand-new companies the moment their website goes live — a very early signal, ahead of everyone else.",github:"Detects tech companies from their developers' activity — a very early signal, before they make any noise.",hn:"Scans Hacker News, the go-to forum for tech founders, to catch the projects emerging first.",fundraising:"Spots companies that have just raised funds — the exact moment they accelerate and become interesting.",backfill:"Re-combs past periods to catch companies that might have slipped through the cracks.",websets:"Builds tailored company lists from a simple description, exploring the whole web.",websets_engine:"Builds tailored company lists from a simple description, exploring the whole web.",linkedin_posts:"Reads LinkedIn posts to spot the companies and executives announcing something worth knowing.",linkedin_jobs:"Reads LinkedIn job ads: a company hiring heavily in one area reveals its strategy and its growth.",exa_semantic:"Semantic search across the whole web: describe what you're looking for in plain language, and it finds the companies that match.",exa_similar:"Start from a company you like, and it finds every similar one across the web.",crunchbase_search:"Queries the global database of startups and their funding to find companies by profile.",other_custom:"Engines wired specifically for your thesis — any useful signal can become a custom engine.",manual_paste:"The companies you add yourself by hand, scored against your criteria exactly like the rest.",find_similar_qualified:"Starts from companies you've already kept to find others, very close to them, across the web.",daily_news:"Re-reads today's news through the exact lens of your thesis, keeping only what concerns you.",alumni:"Tracks graduates of top schools to spot those who have just founded a company.",competitor_exodus:"Detects talent leaving competitor companies — often the sign of a new company being born.",hackernews:"Scans Hacker News, the go-to forum for tech founders, to catch the projects emerging first.",crt_sh:"Detects brand-new companies the moment their website goes live — a very early signal, ahead of everyone else.",pappers:"Queries the official French registries (SIRENE, activity codes) to find companies by line of business, in real time.",pappers_intl:"Queries international company registries to find companies by country and activity, in real time.",opencorporates:"Explores the world's largest database of company registries to surface official companies anywhere in the world.",tavily:"Real-time web search: queries the whole web on the fly to catch companies matching your thesis.",registre_gouv:"Queries the official French company register (recherche-entreprises) to find companies by activity.",local:"Finds the main-street businesses in your trade, town by town. On Google Maps: the physical storefronts with their rating, reviews and website (sort 'leaders' or 'turnaround'). Via the official BODACC bulletin: acquirable businesses — insolvencies, sales & transfers of goodwill, closures (premises to take over). Runs on demand (Google Maps is paid); optional free daily BODACC radar.",hunter:"Finds companies' professional contact details (emails, domains) to identify the right people to reach."};function Ka(e){const a=(e||"").trim().toLowerCase();if(!a)return"";const r=gr[a]||gr[a+"_engine"];return r||a.replace(/_/g," ").split(" ").filter(Boolean).map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")}function ol(e,a){const r=(e||"").trim().toLowerCase(),n=a?rl:nl;return n[r]||n[r+"_engine"]||""}const Ao=e=>"cbeng:"+e,il="",sl=()=>{try{return!!new URL(window.location.href).searchParams.get("preview")}catch{return!1}};function qo(e){try{const a=JSON.parse(localStorage.getItem(Ao(e))||"null");return a&&typeof a=="object"&&!Array.isArray(a)?a:{}}catch{return{}}}function To(e,a){if(!sl())try{localStorage.setItem(Ao(e),JSON.stringify(a))}catch{}}const Mn=e=>{const a=new Set,r=[];for(const n of e){const o=(n||"").trim();o&&!a.has(o.toLowerCase())&&(a.add(o.toLowerCase()),r.push(o))}return r};function Lo(e,a){const r=qo(e),n={},o={};let i=!1;for(const[d,l]of Object.entries(a)){const s=Mn(l||[]);if(!s.length)continue;const h=Array.isArray(r[d])?r[d]:null;if(!h||!h.length){o[d]=s,i=!0;continue}const p=new Set(h.map(u=>u.toLowerCase())),x=s.filter(u=>!p.has(u.toLowerCase()));if(x.length===s.length&&s.length>=5){o[d]=s,i=!0;continue}x.length?n[d]={noms:x}:(o[d]=s,i=!0)}return i&&To(e,{...r,...o}),n}function Fo(e,a){const r=qo(e);for(const[n,o]of Object.entries(a)){const i=Mn(o||[]);i.length&&(r[n]=i)}To(e,r)}function ll(e){return Mn(e).map(a=>a.toLowerCase()).sort().join(il)}const xr=e=>(Array.isArray(e)?e:[]).map(a=>String(a??"").trim()).filter(Boolean);function dl(e){if(!e||typeof e!="object"||Array.isArray(e))return null;const a=e,r=xr(a.chips),n=xr(a.more);return!r.length&&!n.length?null:{chips:r,more:n,note:typeof a.note=="string"?a.note.trim():"",shared:!!a.shared,example:!!a.example}}function br(e,a){const r=(e||{})[a]??(e||{})[`${a}_engine`];return dl(r)}function pl(e,a=8){return e?[...e.chips,...e.more].slice(0,a).join(" · "):""}const vr=[["1",1],["7",7],["30",30],["all",90]],cl={exa_semantic:"exa_semantic",exa_similar:"exa_similar",find_similar:"find_similar_qualified",find_similar_qualified:"find_similar_qualified",github:"github",news:"google_news",google_news:"google_news",jobs:"linkedin_jobs",linkedin_jobs:"linkedin_jobs",hn:"hn",hackernews:"hn",crunchbase:"crunchbase_search",crunchbase_search:"crunchbase_search",pappers:"pappers_fr",pappers_fr:"pappers_fr",registre_gouv:"pappers_fr",webset:"websets",websets:"websets",alumni:"alumni",competitor_exodus:"competitor_exodus",backfill:"backfill",manual:"manual_paste",manual_paste:"manual_paste",editorial:"editorial",daily_news:"daily_news",crt:"crt",crt_sh:"crt",rss:"rss",fundraising:"fundraising",local:"local"},ul=e=>cl[String(e||"").toLowerCase().replace(/_engine$/,"")]||"";function ml(e){return e?(Array.isArray(e)?e.map(r=>Number(r)||0):Object.keys(e).sort().map(r=>Number(e[r])||0)).slice(-14):[]}function fl({vals:e}){if(!e.length||!e.some(d=>d>0))return null;const a=Math.max(...e,1),r=56,n=16,o=r/Math.max(e.length-1,1),i=e.map((d,l)=>`${(l*o).toFixed(1)},${(n-d/a*(n-2)).toFixed(1)}`).join(" ");return t.jsx("svg",{className:"se-spark",viewBox:`0 0 ${r} ${n}`,width:r,height:n,"aria-hidden":"true",children:t.jsx("polyline",{points:i,fill:"none",stroke:"currentColor",strokeWidth:"1.5"})})}function hl(){const{t:e,lang:a,data:r,dossiers:n,canWrite:o,flash:i,flashErr:d}=Y(),l=a==="en",s=r.session.token||"",h=r.fund||"",[p,x]=c.useState(!1),[u,b]=c.useState("7"),[m,w]=c.useState({}),[y,f]=c.useState(!1),[v,E]=c.useState(""),[k,j]=c.useState(null),[N,S]=c.useState({}),[L,C]=c.useState(""),[T,O]=c.useState(""),[U,R]=c.useState(""),[D,g]=c.useState(!1),[q,M]=c.useState(""),[J,A]=c.useState({}),B=c.useRef(null),I=c.useRef(null),$=m[u],te=c.useCallback(async _=>{var Z;const V=((Z=vr.find(([le])=>le===_))==null?void 0:Z[1])||7;f(!0),E("");try{const le=await fetch(`${Wa}/engines-drilldown-batch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fund_slug:h,days:V,fund_scoped:!0,token:s,cibles_token:s})}),pe=await le.json();if(!le.ok||pe.error)throw new Error(pe.error||`HTTP ${le.status}`);w(ne=>({...ne,[_]:pe}))}catch(le){E(String(le.message||le))}finally{f(!1)}},[h,s]);c.useEffect(()=>{p&&!m[u]&&!y&&te(u),p&&!Object.keys(N).length&&o&&Kn(s).then(_=>{const V={};_.forEach(Z=>{Z.engine&&(V[Z.engine]=Z)}),S(V)})},[p,u]),c.useEffect(()=>()=>{I.current&&window.clearInterval(I.current)},[]);const K=c.useMemo(()=>{const _=($==null?void 0:$.engines)||{};return Object.entries(_).map(([V,Z])=>{const le=Z.summary||{};return{key:V,sourced:le.sourced||0,matched:le.matched||0,noMatch:le.no_match||0,rate:typeof le.match_rate=="number"?Math.round(le.match_rate*(le.match_rate<=1?100:1)):0,spark:ml(le.by_day),leads:Z.leads||[]}}).sort((V,Z)=>Z.sourced-V.sourced)},[$]),ye=c.useMemo(()=>{const _={};return K.forEach(V=>{_[V.key]=V.leads.map(Z=>{const le=(Z.verdicts||[]).reduce((pe,ne)=>!pe||String(ne.check_date||"")>String(pe.check_date||"")?ne:pe,null);return((le==null?void 0:le.status)||"").trim().toUpperCase()==="MATCH"?(Z.company_name||"").trim():""}).filter(Boolean)}),_},[K]),re=c.useMemo(()=>Object.entries(ye).map(([_,V])=>_+":"+ll(V)).sort().join("|"),[ye]),de=c.useMemo(()=>s?Lo(s,ye):{},[s,re]),ge=c.useMemo(()=>Object.values(de).reduce((_,V)=>_+V.noms.length,0),[de]),ce=c.useMemo(()=>{const _=new Date().toISOString().slice(0,10),V={};return K.forEach(Z=>{V[Z.key]=Z.leads.map(le=>{const pe=(le.verdicts||[]).reduce((ie,ue)=>!ie||String(ue.check_date||"")>String(ie.check_date||"")?ue:ie,null);return String((pe==null?void 0:pe.check_date)||"").slice(0,10)===_?(le.company_name||"").trim():""}).filter(Boolean)}),V},[K]),ve=c.useRef(p);c.useEffect(()=>{ve.current&&!p&&s&&Fo(s,ye),ve.current=p},[p]);const xe=c.useMemo(()=>K.reduce((_,V)=>_+V.sourced,0),[K]),Ne=c.useMemo(()=>K.filter(_=>_.sourced>0).length,[K]),Fe=c.useMemo(()=>{const _=new Map;return n.forEach(V=>{const Z=(V.name||"").trim().toLowerCase();Z&&!_.has(Z)&&_.set(Z,Le(V))}),_},[n]),ae=c.useMemo(()=>{const _=new Map;return n.forEach(V=>{const Z=(V.name||"").trim().toLowerCase();Z&&!_.has(Z)&&_.set(Z,V.id)}),_},[n]),ke=_=>_===void 0?l?"not on this page":"pas sur cette page":e.plabels[_]||"",be=_=>{const V=pl(br($==null?void 0:$.params,_)),Z=l?`Adjust the "${Ka(_)}" engine`:`Ajuste le moteur « ${Ka(_)} »`,le=V?l?` (current settings: ${V})`:` (réglages actuels : ${V})`:"";return`${Z}${le} : `},oe=async()=>{var V;const _=(((V=B.current)==null?void 0:V.value)||"").trim();if(!(_.length<8||D)){g(!0),M("");try{const Z=await fetch(`${Wa}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:s,message:_,who:"cockpit-v2"})}),le=await Z.json();if(!Z.ok||le.ok===!1)throw new Error(le.error||`HTTP ${Z.status}`);if(le.reply&&!le.async){M(String(le.reply)),g(!1);return}const pe=le.job_id;if(!pe){M(l?"Sent.":"Envoyé."),g(!1);return}I.current=window.setInterval(async()=>{try{const ie=await(await fetch(`${Wa}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:pe})})).json();ie.done&&(I.current&&window.clearInterval(I.current),I.current=null,M(String(ie.reply||ie.error||(l?"Done — settings updated.":"Terminé — réglages mis à jour."))),g(!1))}catch{}},3e3)}catch(Z){M((l?"Error: ":"Erreur : ")+String(Z.message||Z)),g(!1)}}};return s?t.jsxs("div",{className:"srceng"+(p?" on":""),children:[t.jsxs("button",{type:"button",className:"se-head","aria-expanded":p,onClick:()=>x(_=>!_),children:[t.jsx("span",{className:"se-ico",children:"🔎"}),t.jsx("b",{children:l?"Your sourcing engines":"Vos moteurs de sourcing"}),$&&t.jsx("span",{className:"se-sum",children:l?`${Ne} active · ${xe.toLocaleString("en-US")} companies found`:`${Ne} actifs · ${xe.toLocaleString("fr-FR")} sociétés trouvées`}),ge>0&&t.jsx("span",{className:"se-newsum",children:e.engFreshAll(ge)}),t.jsx("span",{className:"se-arr",children:p?"▾":"▸"})]}),p&&t.jsxs("div",{className:"se-body",children:[t.jsxs("div",{className:"se-bar",children:[vr.map(([_])=>t.jsx("button",{type:"button",className:"se-win"+(u===_?" on":""),onClick:()=>b(_),children:_==="1"?l?"Today":"Aujourd'hui":_==="all"?l?"All":"Tout":l?`${_} d`:`${_} j`},_)),t.jsx("span",{className:"se-note",children:l?"Panel totals = the chosen window; the funnel above counts the screened view.":"Les totaux du panneau = la fenêtre choisie ; le tunnel compte les criblées de la vue."})]}),y&&t.jsx("div",{className:"se-load",children:l?"Reading engines…":"Lecture des moteurs…"}),!!v&&t.jsxs("div",{className:"se-err",children:[v," ",t.jsx("button",{type:"button",onClick:()=>void te(u),children:"↻"})]}),!y&&!v&&$&&t.jsx("div",{className:"se-cards",children:K.map(_=>{var V,Z,le,pe;return t.jsxs("div",{className:"se-card"+(_.sourced===0?" idle":"")+((V=de[_.key])!=null&&V.noms.length||(Z=ce[_.key])!=null&&Z.length?" has-new":""),children:[t.jsxs("div",{className:"se-ct",children:[t.jsx("b",{children:Ka(_.key)}),(le=de[_.key])!=null&&le.noms.length?t.jsx("button",{type:"button",className:"se-new",title:e.engFreshHint,onClick:ne=>{ne.stopPropagation(),j(k&&k.eng===_.key&&k.kind==="neuf"?null:{eng:_.key,kind:"neuf"})},children:e.engFresh(de[_.key].noms.length)}):!!((pe=ce[_.key])!=null&&pe.length)&&t.jsx("button",{type:"button",className:"se-new today",title:e.engTodayHint,onClick:ne=>{ne.stopPropagation(),j(k&&k.eng===_.key&&k.kind==="today"?null:{eng:_.key,kind:"today"})},children:e.engToday(ce[_.key].length)}),(()=>{const ne=ul(_.key),ie=ne?N[ne]:void 0;if(!ie||!o)return null;const ue=!!ie.opt_in,we=ue?!!ie.fund_on:ie.fund_on!==!1,Ce=!ue&&ie.global_enabled===!1,je=Ce?e.engGlobalOff:we?e.engOn:ue?e.engOptOff:e.engOff;return t.jsx("button",{type:"button",className:"se-sw"+(we?" on":"")+(Ce?" dead":""),disabled:Ce||L===ne,title:ue?e.engHintOpt:e.engHint,onClick:Ee=>{Ee.stopPropagation(),C(ne),Mi(s,ne,!we).then(ht=>{if(C(""),!ht.ok){d(ht.error||e.engToggleFail);return}S(gt=>({...gt,[ne]:{...ie,fund_on:!we}})),i(e.engToggleNote)})},children:L===ne?"…":je})})(),t.jsx("span",{className:"se-st"+(_.sourced>0?" ok":""),children:_.sourced>0?l?"⚡ actively sourcing":"⚡ source activement":l?"standby":"en veille"}),t.jsx(fl,{vals:_.spark})]}),t.jsx("p",{className:"se-desc",children:ol(_.key,l)||(l?"Engine wired for your thesis.":"Moteur branché pour votre thèse.")}),t.jsxs("div",{className:"se-hero",children:[t.jsx("b",{children:_.sourced.toLocaleString(l?"en-US":"fr-FR")}),t.jsx("span",{children:l?"companies found":"sociétés trouvées"})]}),(_.matched>0||_.noMatch>0)&&t.jsxs("div",{className:"se-split",children:[l?"incl.":"dont"," ",t.jsxs("button",{type:"button",onClick:()=>j({eng:_.key,kind:"kept"}),children:[_.matched," MATCH"]})," · ",t.jsxs("button",{type:"button",onClick:()=>j({eng:_.key,kind:"rej"}),children:[_.noMatch," ",l?"ruled out":"écartées"]}),_.rate>0&&t.jsxs("em",{children:[" · ",_.rate,"%"]})]}),(()=>{const ne=br($.params,_.key);if(!ne)return null;const ie=!!J[_.key],ue=ie?[...ne.chips,...ne.more]:ne.chips,we=ne.shared&&e.engParamsShared||ne.example&&e.engParamsExample||ne.note||"";return t.jsxs("div",{className:"se-params",children:[t.jsx("i",{children:e.engParams}),t.jsxs("div",{className:"se-chips",children:[ue.map((Ce,je)=>t.jsx("span",{className:"se-chip"+(ne.shared?" soft":""),children:Ce},Ce+je)),ne.more.length>0&&t.jsx("button",{type:"button",className:"se-chipmore",onClick:Ce=>{Ce.stopPropagation(),A(je=>({...je,[_.key]:!ie}))},children:ie?e.engParamsLess:e.engMore(ne.more.length)})]}),we&&t.jsx("span",{className:"se-pnote",children:we})]})})(),t.jsxs("div",{className:"se-acts",children:[_.key==="local"&&o&&t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:"se-bod",disabled:T==="run",onClick:ne=>{ne.stopPropagation(),O("run"),Di(s,h||"").then(ie=>{if(O(ie.ok?"ok":"ko"),!ie.ok){d(ie.error||e.engBodaccKo);return}i(e.engBodaccOk),Kn(s).then(ue=>{const we={};ue.forEach(Ce=>{Ce.engine&&(we[Ce.engine]=Ce)}),S(we)})})},children:T==="run"?e.engBodaccRun:e.engBodacc}),t.jsx("p",{className:"se-desc",style:{margin:"4px 0 0"},children:e.engBodaccNote})]}),t.jsxs("button",{type:"button",className:"se-adj",onClick:()=>{R(be(_.key)),M(""),window.setTimeout(()=>{B.current&&(B.current.focus(),B.current.setSelectionRange(B.current.value.length,B.current.value.length))},60)},children:["✎ ",l?"Adjust this engine":"Ajuster ce moteur"]})]}),k&&k.eng===_.key&&t.jsxs("div",{className:"se-ovl",children:[t.jsxs("div",{className:"se-ovl-h",children:[t.jsx("b",{children:k.kind==="neuf"?e.engFreshT:k.kind==="today"?e.engTodayT:k.kind==="kept"?l?"MATCH via this engine":"MATCH via ce moteur":l?"Ruled out via this engine":"Écartées via ce moteur"}),t.jsx("button",{type:"button",onClick:()=>j(null),children:"×"})]}),t.jsx("ul",{children:_.leads.map(ne=>{const ie=(ne.verdicts||[]).reduce((ue,we)=>!ue||String(we.check_date||"")>String(ue.check_date||"")?we:ue,null);return{l:ne,dernier:ie}}).filter(({l:ne,dernier:ie})=>{var we;const ue=((ie==null?void 0:ie.status)||"").trim().toUpperCase();if(k.kind==="neuf"){const Ce=new Set((((we=de[_.key])==null?void 0:we.noms)||[]).map(je=>je.toLowerCase()));return ue==="MATCH"&&Ce.has((ne.company_name||"").trim().toLowerCase())}return k.kind==="today"?new Set((ce[_.key]||[]).map(je=>je.toLowerCase())).has((ne.company_name||"").trim().toLowerCase()):ue===(k.kind==="kept"?"MATCH":"NO MATCH")}).slice(0,100).map(({l:ne,dernier:ie},ue)=>{const we=(ne.company_name||"").trim(),Ce=we&&ae.has(we.toLowerCase());return t.jsxs("li",{children:[Ce?t.jsx("button",{type:"button",className:"se-jump",onClick:()=>{const je=ae.get(we.toLowerCase());if(je)try{window.dispatchEvent(new CustomEvent("ppmap:focus",{detail:{id:je,name:we}}))}catch{}},children:we}):t.jsx("b",{children:we||"—"}),t.jsxs("span",{children:[ke(Fe.get(we.toLowerCase())),typeof(ie==null?void 0:ie.score)=="number"&&ie.score>0?` · ${Math.round(ie.score)}`:""]})]},we+ue)})}),(()=>{const ne=_.leads.filter(ie=>{var Ce;const ue=(ie.verdicts||[]).reduce((je,Ee)=>!je||String(Ee.check_date||"")>String(je.check_date||"")?Ee:je,null),we=((ue==null?void 0:ue.status)||"").trim().toUpperCase();if(k.kind==="neuf"){const je=new Set((((Ce=de[_.key])==null?void 0:Ce.noms)||[]).map(Ee=>Ee.toLowerCase()));return we==="MATCH"&&je.has((ie.company_name||"").trim().toLowerCase())}return k.kind==="today"?new Set((ce[_.key]||[]).map(Ee=>Ee.toLowerCase())).has((ie.company_name||"").trim().toLowerCase()):we===(k.kind==="kept"?"MATCH":"NO MATCH")}).length-100;return ne>0?t.jsx("p",{className:"se-more",children:e.engMore(ne)}):null})()]})]},_.key)})}),!!U&&t.jsxs("div",{className:"se-nl",children:[t.jsxs("div",{className:"se-nl-h",children:["✎ ",l?"Correct this thesis":"Corriger cette thèse"]}),t.jsx("textarea",{ref:B,rows:3,maxLength:12e3,defaultValue:U,placeholder:l?"Say what to change, in plain words…":"Dites ce qu’il faut changer, en langage naturel…"},U),t.jsxs("div",{className:"se-nl-a",children:[t.jsx("button",{type:"button",disabled:D,onClick:()=>void oe(),children:D?l?"⏳ applying…":"⏳ application…":l?"Apply":"Appliquer"}),t.jsx("button",{type:"button",className:"gh",onClick:()=>{R(""),M("")},children:l?"Close":"Fermer"})]}),!!q&&t.jsx("div",{className:"se-nl-r",children:q})]})]})]}):null}const gl={plabels:["À évaluer","Retenues","Analysées","À trancher","Validées","Écartées","Favoris","Évaluées"],phelp:["Tout ce que STAN a passé au crible sur la fenêtre : chaque société évaluée selon vos critères, retenue ou écartée automatiquement.","STAN a retenu ces sociétés selon vos critères, décision justifiée. NOUS vérifions ses choix — écartez, validez, ou lancez une analyse sur les incertaines.","Les mémos de STAN, relus par NOUS : synergies chiffrées, verdict argumenté. Validez celles à contacter, mettez « à trancher » celles où vous hésitez.","À VOUS de jouer : les meilleures cibles, présentées le lundi par votre Corporate Developer. Tranchez OUI ou NON — vos oui passent en Validées.","Vos OUI — la short-list à contacter. NOUS préparons l’approche, ou l’engageons en votre nom (offre Entreprise).","Écartées par STAN ou par VOUS. Chaque NON affine les critères de Stan. Repêchez-en une à tout moment.","Vos épingles, tous statuts confondus.","Vue : tout ce que Stan a tranché."],tuto:{0:{p:"Arrivées par les moteurs et pas encore criblées.",a:"⚡ Tout évaluer"},1:{p:"MATCH au crible, sans mémo. Lancez l’analyse : elle les enverra en Analysées ou À trancher.",a:"⚡ Analyser la sélection"},2:{p:"Mémo produit, verdict CONSIDER ou MONITOR. Remontez un dossier pour saisir le dirigeant le jour même.",a:"↑ Remonter en À trancher"},3:{p:"Verdict CALL : votre OUI ou NON est attendu sur chaque dossier.",a:null},4:{p:"Vos OUI. Stan rédige la séquence d’approche, vous validez et vous envoyez.",a:"✉ Préparer l’approche"},5:{p:"Hors crible, ou écartées après mémo. Un dossier reste repêchable à tout moment.",a:"↩ Repêcher la sélection"},6:{p:"Les cibles que vous avez épinglées à la main, tous statuts confondus.",a:null},7:{p:"Tout ce que Stan a tranché, sous-états confondus — le vivier complet des moteurs.",a:null}},tutoPending:(e,a,r)=>`<b>${e} CALL de Stan</b>, <b>${a} remontée${a>1?"s":""} par vous</b>. <b>${r} sans réponse.</b>`,morningThesis:(e,a,r)=>`Ce matin, <b>${e}</b> société${e===1?"":"s"} criblée${e===1?"":"s"} par vos moteurs`+(typeof r=="number"?`, <b>${r}</b> retenue${r===1?"":"s"}.`:".")+(a?` <b>${a}</b> attend${a>1?"ent":""} votre évaluation.`:' <span class="ok">Tout est évalué.</span>'),morningEnginesTitle:"Ces sociétés viennent UNIQUEMENT du sourcing de votre thèse : vos codes d’activité, vos pays, vos angles d’acquisition, vos critères d’exclusion. Aucune société d’un autre fonds n’entre ici. Seule la veille d’actualité part d’un ratissage commun pour des raisons de coût — mais chaque opération qui en sort est ensuite confrontée à vos critères, et n’entre dans votre page que si elle les passe.",morningLast:(e,a,r)=>`Dernier passage des moteurs le <b>${r}</b> : <b>${e}</b> société${e===1?"":"s"} sourcée${e===1?"":"s"}.`+(a?` <b>${a}</b> restante${a>1?"s":""} pas encore évaluée${a>1?"s":""}.`:' <span class="ok">Tout est évalué.</span>'),morningEval:e=>`▶ Les traiter (${e})`,identTitle:e=>`Cibles pour ${e}`,identCoverage:"Couverture du marché",identCoverageOf:(e,a)=>`<b>${e}</b> sur ~${a.toLocaleString("fr-FR")}`,identEngine:"Moteur de mémos",identPerDay:"mémo/jour",identEtaDays:e=>e<=0?"file déjà traitée":`file traitée en ${e} jour${e>1?"s":""}`,analyseLock:"Réservé à l’offre Entreprise",analyseLockHint:"Analyser toute la sélection d’un coup lance plusieurs mémos en parallèle. L’offre Entreprise (verdict sous 24 h) le permet ; en Standard et en essai, on analyse ligne par ligne.",feedToEval:"→ À évaluer",feedToExtract:"Coller l’URL",identPending:e=>`→ ${e} en attente`,identPendingWait:"→ lecture de la file…",identExport:"Exporter — CSV, tableur, lien vivant",identPlug:"Connecter cette page à vos outils",identBell:"Vos alertes email",identSync:"Relancer le sourcing",identSyncDone:"Sourcing relancé — les moteurs repartent sur votre thèse",identSearch:"Rechercher une cible",identHelp:"Aide",identTuto:"Prise en main",toolUndo:"Annuler la dernière décision",toolReset:"Réinitialiser les filtres",toolSort:"Trier la liste",toolTuto:"Prise en main",toolCrit:"Le paramétrage de Stan",undoDone:e=>`Décision annulée sur ${e}`,undoNone:"Rien à annuler",undoLockedTitle:"Annulation impossible : le statut précédent était vide (aucune opération « effacer » côté serveur)",resetDone:"Filtres réinitialisés",actAnalyse:"⚡ Analyser",actAnalyseQueued:"⏳ En file…",actPromote:"↑ À trancher",actYes:"✓ Oui",actNo:"✗ Non",actYesTitle:"Oui : elle passe en Validées, Stan prépare la séquence",actNoTitle:"Non : elle rejoint les Écartées",actApproach:"✉ Préparer l’approche",actApproachSent:"✓ Séquence prête — voir votre email",actMemo:"📄 Voir le mémo",actMemoQueue:"mémo à lancer",actLocked:"🔒 Analyser",actToEval:"à évaluer",promoted:e=>`${e} remontée pour décision`,thumbUp:"Bon choix — Stan en tiendra compte",thumbDn:"Mauvais choix — Stan corrigera",thumbUpDone:"Bon choix enregistré — Stan en tiendra compte",thumbDnDone:"Correction enregistrée — Stan ajustera sa sélection",colThumbs:"STAN",colVerdict:"Crible · mémo",colCrible:"Crible",fVerdict:"Verdict",colMemo:"Mémo",colScore:"Score",orgAuto:"⚡ CALL de Stan",orgAutoTitle:"Verdict CALL PENDING : Stan propose l’appel",orgCd:"👤 remonté par vous",orgCdTitle:"Remonté à la main en À trancher",waitTitle:e=>`Depuis le verdict de Stan : ${e} j`,waitChip:e=>`⏱ ${e} j`,densList:"Liste",densOpen:"Déplié",densLigne:"Ligne",densMaxi:"Maxi",unfoldAll:"Tout déplier",foldAllLbl:"Tout replier",foldArts:"Articles",zoomSrc:"Source",viewLink:"Voir l’article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Site web de la société",viewSiteBusyHint:"Recherche du site web…",viewSrcHint:"Article source",viewLinkClose:"Fermer l’article",viewLinkTab:"Ouvrir dans un onglet",viewLinkHint:"S’ouvre dans une nouvelle fenêtre",zoomSimilar:"Voir les similaires",zoomInCockpit:"Isoler dans la liste",zoomArt:"Edito du jour",zoomEvalHint:"Crible selon vos critères",zoomSimilarHint:"Même secteur dans la liste",zoomIsolateHint:"Ne garder que cette société",zoomNewsMark:"Décryptage de l’édition — le texte s’ouvre à droite",zoomPulseEval:"évaluables",zoomPulseExplore:"à explorer",zoomPulseArts:"actualités",doNews:"📰 Actualités",zoomPulseEd:"dans l’article du jour",zoomPulseBtn:"Édition du jour",zoomPulseWeek:"7 derniers jours",zoomPulseWeekEd:"cette semaine",doAll:"Tout",doEdito:"📖 Edito du jour",doBrief:"📖 Brief du jour",doEval:"⚡ Évaluables",doExplore:"🔎 À explorer",doAna:"⚡ À analyser",doBriefHint:"Afficher le brief du jour",doTodo:"⚡ À évaluer",doDone:"✓ Déjà évaluées",cdMemoTab:"📖 Mémo",evalPickSite:"plusieurs sites portent ce nom — ouvrez pour vérifier, puis validez celui qui est le bon.",evalPickGo:"✓ C’est celui-ci",evalPickChip:"Site à confirmer",eqNamePh:"Nom de société ou URL…",eqAdd:"Ajouter une ligne",eqNoSite:"aucun site trouvé — le nom sera évalué tel quel",eqReady:"prête",eqPick:"choisir le site →",eqRunning:"⏳ évaluation…",eqGo:e=>`⚡ Évaluer les ${e} lignes`,eqHint:"Vos lignes restent ici : remplissez en déplacement, lancez plus tard.",eqColName:"Société",eqColSite:"Site",eqColDesc:"Ce qu’elle fait",eqColState:"État",eqLookup:"recherche du site…",eqDescBusy:"lecture du site…",eqDescNone:"le site ne dit rien d’exploitable",eqDescQuota:"plafond de lecture atteint aujourd’hui",eqRunOne:"Évaluer cette ligne",eqRunOneShort:"Évaluer",sgGo:"💡 Trouver des sociétés proches",sgBusy:e=>`🔎 jumelles de ${e}…`,sgFrom:(e,a)=>`à partir de vos retenues (${e}${a>1?` +${a-1}`:""})`,sgQuota:"plafond du jour atteint (5 recherches) — à demain",sgNone:"rien de neuf : les jumelles trouvées sont déjà dans votre liste",sgVia:e=>`trouvée à partir de ${e}`,pxThesis:"votre thèse",pxGoThesis:"🎯 Chercher sur ma thèse",pxGoFree:"🔎 Chercher",pxPlace:"un mot porteur, ou un code NAF (66.22Z)",eqClearDone:"Retirer les évaluées",chainMemoGo:"⚡ Lancer le mémo (1 crédit)",analyseConfirm:e=>`Lancer ${e} mémo${e>1?"s":""} d’analyse ?

Cela consomme ${e} crédit${e>1?"s":""} mémo. Les sociétés partiront en « Analysées » ou « À trancher » une fois le mémo prêt.`,sortBy:"Trier par",sortSig:"Signal",sortAmount:"Montant",sortAge:"Récence",sortName:"Nom",sortCountry:"Pays",sortStage:"Stade",sortSector:"Secteur",sortCrible:"Crible",sortMemo:"Mémo",sortScore:"Score",fMenu:"Filtres",memoSynth:"Synthèse",memoOpenFull:"📖 Voir le mémo complet →",memoDeep:"⚡ Mémo détaillé",memoDeepHint:"Pour ce dossier à trancher, vous pouvez lancer l’analyse détaillée : étude de marché, quadrant concurrentiel, scénarios.",memoDeepSent:e=>`Mémo détaillé lancé sur ${e} — prêt dans 35 à 40 minutes`,memoInstantSent:e=>`Analyse lancée sur ${e} — mémo prêt dans ~15 minutes`,liveStrip:"Analyses en direct",liveBoot:"lancement…",liveEnd:"fin {t}",liveOpenQueue:"Voir la file",memoNone:"Aucun mémo pour ce dossier — lancez l’analyse.",creditsCap:"Crédits mémo",creditsToday:"aujourd’hui",creditsRecharge:"Recharger →",creditsCost:e=>`−${e} crédit${e>1?"s":""}`,creditsNone:"Crédit épuisé — rechargez ou attendez demain 7 h.",rechargeTitle:"Crédits mémo",rechargeHint:e=>`Votre offre comprend <b>${e} crédits par jour</b>, rechargés chaque matin. Besoin de plus tout de suite ?`,rechargeNote:"Les crédits achetés n’expirent pas. Ils s’utilisent après vos crédits quotidiens.",rechargeBuy:"Ajouter",rechargeUnit:(e,a)=>`${e} crédits — ${a} €`,onbTag:"Aperçu privé · lecture seule",onbTitle:e=>`Votre deal flow est prêt — <b>${e} cibles retenues</b> par Stan`,onbSub:e=>`${e} sociétés passées au crible sur votre thèse. Les dix premières lignes sont ouvertes ; le reste se débloque en trente minutes.`,onbSteps:[["Stan a étudié votre présence en ligne","Site, offres d’emploi, presse — il en a déduit vos angles d’acquisition."],["Il a criblé le marché","Chaque société confrontée à vos critères."],["Il a rédigé des mémos","Analyses chiffrées, synergies, verdicts."],["À vous de trancher","Trente minutes pour régler votre deal flow et tout débloquer."]],onbCta:"Choisir un créneau →",lockbarText:"Paramétrons votre deal flow rêvé en 30 minutes, avec un Corporate Developer",lockbarContactBefore:"Alexandre — ",lockbarContactMid:" · ",lockbarCta:"Choisir un créneau",rdvHeading:"Paramétrons votre deal flow rêvé en 30 minutes",rdvSubBefore:"Choisissez un créneau ci-dessous, ou contactez votre expert Corporate Development directement au ",rdvSubMid:" ou par email à ",rdvCoFallback:"votre société",rdvUnlockLabel:e=>`Déblocage ${e}`,rdvUnlocks:e=>[["Accédez à toutes vos cibles retenues","Mémos d’investissement complets, synergies, contacts, angle d’approche."],["Stratégie d’acquisition construite avec vous","Hypothèse + stratégie d’acquisition recalibrées en live, avec vous."],["Tranchons ensemble les cibles que vous voulez","OUI / NON, sourcing de sociétés similaires, export et synchronisation CRM."],["Votre AI Corporate Developer est lancé",`Stan travaille pour ${e} chaque matin — vous n’avez plus qu’à décider.`]],identRepub:"Republier la page maintenant — re-rend la page avec ce qui est déjà connu. Gratuit : aucun moteur ne repart, aucun modèle n’est appelé si votre thèse n’a pas changé.",identRepubDone:"Republication lancée — vos chiffres se rafraîchissent en une trentaine de secondes. Actualisez la page pour les voir.",plugHow1:"Dans votre outil (Make, Zapier, n8n, HubSpot, Pipedrive…), créez un déclencheur « webhook » et copiez l’URL qu’il vous donne.",plugHow2:"Collez-la ci-dessous, Enregistrez, puis Testez : un message d’exemple part aussitôt dans votre outil.",plugHow3:"C’est fini. Trois moments déclenchent un envoi : vous validez une cible, vous la faites avancer d’un stade, ou une approche est préparée.",plugExT:"Ce que votre outil reçoit, exactement",plugExResult:"Dans votre CRM, vous obtenez une ligne par société validée : son nom, votre note, le score de Stan, son site et le lien du mémo.",plugApiT:"Une seule société, depuis un script ou Make",plugQuota:"Ce raccourci est plafonné à 10 sociétés par jour et par lien — le chemin normal reste la barre d’évaluation de la page.",plugFeeds:"Les flux JSON, CSV, Google Sheets et Excel vivent dans le bouton 📥 Exporter, juste à côté — ils ne sont pas répétés ici.",plugTokenNote:"⚠️ Ces liens portent la clé d’accès de cette page : partout où vous les collez, ils ouvrent vos cibles. Ne les mettez que dans vos propres outils.",plugDoc:"Documentation complète → proplace.co/api/",plugDestLbl:"Destination",plugDestWh:"Mon webhook",plugDestInst:"Instantly (campagne)",plugDestCrm:"Mon CRM",plugDestCrmS:"HubSpot, Pipedrive, Salesforce — via Make, Zapier ou n8n.",plugDestScript:"Script ou tableur",plugDestScriptS:"Un appel HTTP, ou un export Google Sheets et Excel.",plugLead:"Vos décisions partent automatiquement là où vous travaillez. Trois étapes, une fois.",plugStep1:"Où vos décisions doivent-elles arriver ?",plugStep2Wh:"Collez le lien webhook de votre outil",plugStep2Inst:"Indiquez l’ID de campagne Instantly",plugStep2Script:"Utilisez ce point d’entrée",plugStep3:"Quand faut-il envoyer ?",plugPayloadSub:"une ligne par société, 15 champs",plugAideWh:"Dans Make, Zapier ou n8n : créez un déclencheur « webhook », copiez son lien, collez-le ici. Le test envoie une société d’exemple immédiatement.",plugAideInst:"L’ID est dans l’URL de votre campagne Instantly. L’envoi automatique y pousse chaque cible validée.",plugAideScript:"Un POST par société, plafonné à 10 par jour. Pour un volume régulier, préférez le webhook.",plugEtatOn:"Envoi automatique actif — chaque cible validée part toute seule.",plugEtatOff:"Envoi automatique inactif — valider une cible ne l’envoie nulle part.",plugCampPh:"ID de campagne Instantly",plugCampNeed:"Instantly a besoin de l’ID de la campagne qui recevra ces cibles — il est dans l’URL de votre campagne.",plugDestInstOn:e=>`Instantly · campagne ${e}`,plugAutoT:"⚡ Envoi automatique",plugAutoSub:"Activez-le : chaque cible que vous validez entre toute seule dans votre séquence. Vous ne revenez plus ici.",plugAutoOnLbl:"Envoyer automatiquement chaque cible validée",plugAutoNeed:"Enregistrez d’abord un webhook ci-dessus, ou choisissez Instantly.",plugAutoSavedOn:"Envoi automatique activé — chaque cible validée partira toute seule.",plugAutoSavedOff:"Envoi automatique arrêté.",plugAutoBroken:"⚠ Rien ne part : l’envoi automatique vise votre webhook, mais aucun webhook n’est enregistré. Enregistrez-en un ci-dessus, ou arrêtez l’envoi automatique.",notesT:"📝 Carnet de suivi",notesHint:"Vos notes sur ce dossier, datées. Elles vivent dans la fiche du deal — vous et votre équipe les relisez au même endroit.",notesPh:"Ce que vous voulez retenir : un appel, une objection, un chiffre…",notesAdd:"Ajouter",notesAdded:"Note ajoutée ✓",notesEmpty:"Aucune note pour l’instant.",notesErr:"Échec — réessayez.",notesEdit:"Modifier",notesDel:"Supprimer",notesDelAsk:"Supprimer cette note ?",notesSave:"Enregistrer",notesCancel:"Annuler",notesLoading:"Lecture du carnet…",notesCount:e=>`${e} note${e>1?"s":""}`,apprT:e=>`Brouillon d’approche — ${e}`,apprSeqHint:"4 messages espacés : J0, J2, J4, J6.",apprWait:"Rédaction de la séquence sur mesure…",apprFail:"Génération indisponible — réessayez dans un instant.",apprChEmail:"✉ Email",apprChLi:"in LinkedIn",apprSubj:"Objet",apprCopy:"📋 Copier ce message",apprMailto:"✉ Ouvrir dans votre email",apprLiNote:"Demande de connexion : sans note.",apprEdited:"✎ modifié",apprLocal:"Vos retouches restent dans cette fenêtre — elles ne sont pas enregistrées sur le serveur. Copiez le message avant de fermer.",apprSender:e=>`Signé : ${e}`,avisIntro:(e,a)=>`🎯 Stan a remarqué que vous écartez souvent le secteur « ${e} » (${a} refus).`,avisAsk:"Voulez-vous qu’il en source moins ?",avisYes:"Oui, recalibrer",avisNo:"Ignorer",avisRunning:"Recalibrage de votre thèse…",avisDone:"✓ C’est fait — Stan a recalibré votre thèse. Vous en verrez moins.",avisFail:"Recalibrage impossible pour le moment — réessayez bientôt.",propT:"🧠 Ce que vos avis disent de votre thèse",propSub:"Vos 👍/👎 — et surtout ce que vous écrivez en dessous — racontent comment vous choisissez. Stan les relit ensemble et propose les corrections qui rapprocheraient la prochaine sélection de votre propre jugement. Rien n’est appliqué sans vous.",propBtn:"Relire mes avis et proposer des corrections",propWait:"Relecture de vos avis…",propNone:"Rien d’assez solide pour l’instant. Un avis isolé ne déplace jamais une thèse : continuez à juger les cartes (une ligne de « pourquoi » aide énormément) et revenez.",propFew:e=>`Pas encore assez d’avis — ${e} société${e>1?"s":""} jugée${e>1?"s":""}. Continuez, puis revenez.`,propFrom:"D’après :",propApply:"Appliquer cette correction",propSkip:"Pas celle-ci",propApplying:"Application…",propApplied:"Appliqué ✓ — Stan source désormais sur la version corrigée.",propApplyFail:"Application impossible — réessayez.",propKo:"Relecture impossible pour le moment — ce n’est pas vous, c’est le moteur. Réessayez dans un instant.",propSlow:"Stan travaille encore sur cette correction — elle s’appliquera d’elle-même. Le carnet de bord vous le dira.",engOn:"● actif ici",engOff:"○ coupé ici",engOptOff:"○ à activer",engGlobalOff:"⊘ éteint (global)",engHintOpt:"Moteur optionnel (Maps payant + BODACC gratuit) : activez-le pour CE fonds, puis lancez BODACC à la demande.",engHint:"Active ou coupe ce moteur POUR CE FONDS — le pool partagé n’est pas touché.",engToggleFail:"Réglage impossible — réessayez.",engToggleNote:"Le réglage prend effet au prochain passage du sourcing : rien n’est retiré de ce qui est déjà là.",engBodacc:"Lancer BODACC (gratuit) maintenant",engBodaccRun:"Lancement…",engBodaccNote:"Bulletin officiel FR gratuit (liquidations, cessions, radiations). Google Maps reste optionnel et payant.",engBodaccOk:"Radar BODACC lancé pour ce fonds. Actualisez la page dans quelques minutes.",engBodaccKo:"Lancement impossible — réessayez.",engMore:e=>`+ ${e} autre${e>1?"s":""}`,engParams:"Vos réglages",engParamsShared:"Source partagée · filtrée sur vos secteurs",engParamsExample:"exemple de la rotation du jour",engParamsLess:"réduire",engFresh:e=>`${e} nouvelle${e>1?"s":""}`,engFreshHint:"Retenues par ce moteur depuis votre dernière visite — cliquez pour les voir",engFreshT:"Nouvelles depuis votre dernière visite",engFreshAll:e=>`${e} nouvelle${e>1?"s":""} depuis votre dernière visite`,engToday:e=>`${e} aujourd’hui`,engTodayHint:"Sourcés aujourd’hui par ce moteur",engTodayT:"Sourcés aujourd’hui",propSections:{hypothesis:"L’hypothèse",profils:"Les profils visés",gate:"Le crible Retenu / Écarté",rubric:"La décision d’analyse"},plugCrmRecipeT:"Pipedrive, HubSpot, Salesforce — ils n’acceptent pas un lien vivant : il leur faut un scénario, à brancher UNE fois.",plugCrmRecipeOpen:"Voir la recette, en 4 modules",plugCrmR1:"① Dans Make (ou Zapier), planifiez un scénario toutes les heures qui commence par HTTP → « Make a request » sur le lien JSON de 📥 Exporter.",plugCrmR2:"② Ajoutez un « Iterator » sur le tableau reçu : une itération = une société.",plugCrmR3:"③ Pipedrive → « Search organizations », en cherchant sur le domaine (il doit figurer quelque part sur la fiche — site web ou champ personnalisé ; sinon cherchez sur le nom). HubSpot, lui, rapproche nativement ses entreprises sur le domaine : c’est encore plus direct.",plugCrmR4:"④ Pipedrive → « Update an organization » : nos colonnes atterrissent dans les champs personnalisés que vous aurez créés (verdict, conviction, angle, lien mémo). Branchez « Add an organization » sur la sortie « rien trouvé » : les sociétés que vous n’aviez pas encore sont créées au lieu d’être perdues.",plugCrmRNote:"À la main, sans scénario ? Ouvrez le lien CSV (ou Excel) dans votre navigateur pour récupérer le fichier, puis passez-le à l’import de votre CRM. Réservez ce chemin aux sociétés que vous n’avez PAS encore : un import de fichier ne sait pas rapprocher proprement sur le domaine, il crée des doublons.",plugVarsT:"Voir les 15 variables reçues par cible",plugVars:"first_name, last_name, email, company_name, phone, website, linkedin, sector, country · angle, why, verdict, conviction_score, memo_url, memo_pdf_url.",plugRefT:"Voir les réglages du lien et les 26 colonnes",plugOpt:"Deux réglages à coller à la FIN du lien (il contient déjà « ? », on ajoute avec « & ») : « &tab=valides » ne renvoie que vos cibles validées (aussi call, retenus, ecartes, chauds) ; « &since=AAAA-MM-JJ » ne renvoie que ce qui a bougé depuis cette date — c’est ce qu’il faut pour une synchro qui tourne en boucle.",plugCols:"26 colonnes par société : company, domain, first_name, last_name, email, linkedin, phone, website, linkedin_company, country, sector, stage, ceo_status, verdict, conviction_score, engagement, angle, memo_url, memo_pdf_url, memo_type, status, score, tagline, engine, detected, reasoning.",plugEnrichT:"Ces sociétés sont déjà chez vous ?",plugEnrich:"Ne les recréez pas : ajoutez-leur nos colonnes (verdict, conviction, angle, mémos, contact dirigeant). Le rapprochement se fait sur le DOMAINE — acme.co — jamais sur le nom : « Acme » et « Acme SAS » ne se retrouvent pas.",plugEnrich1:"① Copiez le lien de votre outil dans 📥 Exporter.",plugEnrich2:"② Collez-le en suivant la consigne écrite juste au-dessus du lien. Vous obtenez une table d’une ligne par société, qui se met à jour toute seule.",plugEnrich3:"③ Rapprochez sur la colonne « domain » (RECHERCHEV / VLOOKUP). Vos fiches gagnent nos colonnes, sans un seul doublon.",plugAirtable:"Airtable — Ajouter une table → Synchroniser des données → CSV, puis collez l’URL du flux.",plugExcel:"Excel — Données → Obtenir des données → À partir du Web, puis collez l’URL du flux.",plugScoreT:"Faire noter VOS propres sociétés",plugScore:"Collez les sociétés que vous avez déjà dans la barre « Rechercher des sociétés à évaluer », en haut de la page : chacune est vraiment cherchée sur le web, puis jugée par votre thèse — MATCH ou NO MATCH, avec la raison. C’est le meilleur moyen de juger notre grille sur des dossiers que vous connaissez par cœur.",plugCrmQT:"🔗 Et dans votre CRM ?",plugCrmQ1:"Vos fiches HubSpot, Pipedrive ou Airtable portent nos colonnes, MATCH / NO MATCH compris : c’est la recette ci-dessus, branchée une fois.",plugCrmQ2:"Un bouton posé dans la fiche lance le mémo sans revenir ici : le mémo rapide sur n’importe quelle société de votre liste, le mémo complet sur celles que vous avez passées à « À trancher ».",plugCrmQ3:"Le lien du mémo revient dans la fiche à la synchro suivante (colonne memo_url) : un mémo met quelques minutes à s’écrire, il n’est donc jamais prêt dans la seconde.",plugApiMemoLbl:"Lancer le mémo rapide d’une société (« detailed_request » pour le mémo complet) :",csNone:"Statut",csAnaNeedMemo:"Pour passer en « Analysée », il faut un mémo.",csAnaRun:"⚡ Lancer le mémo (1 crédit)",csAnaAnyway:"Marquer quand même",qOffer:"Votre offre",qDelay:"délai de verdict",qRate:e=>`${e} mémo${e>1?"s":""} par jour`,qManual:e=>`${e} mémo par jour, à votre demande`,qPaused:"aucun mémo automatique",qManualSet:"rythme réglé à la main",qEta:(e,a,r)=>`À ce rythme (${a}/jour), il reste ${e} mémo${e>1?"s":""} à écrire — toute la file est traitée en ${r} jour${r>1?"s":""}.`,qEtaPaused:"Rythme à zéro : rien ne part. Activez une offre pour projeter une date.",qEtaDone:"Toute la file est déjà analysée.",qLate:(e,a)=>`Le délai « ${e} » ne peut pas être tenu : il faudrait dépasser le plafond de ${a} mémos par jour.`,qRunning:"En cours",qUpNext:e=>`À venir — ${e} société${e>1?"s":""} dans la file, dans l’ordre de tirage`,qUpNextWait:"À venir — lecture de la file…",qFileWait:"Lecture de la file en cours — quelques secondes.",qHedge:"Ordre projeté, recalculé chaque matin. Un lead frais tombé dans la nuit passe devant.",qFresh:"frais",qLater:"plus tard",qVerdictsT:"Les verdicts de Stan — où part chaque dossier",qVerdicts:[["CALL","sa meilleure trouvaille : à vous de trancher OUI ou NON → onglet « À trancher »."],["CONSIDER","solide, mérite un regard de plus → onglet « Analysées »."],["MONITOR","à garder à l’œil, pas encore prioritaire → onglet « Analysées »."],["PASS","hors sujet pour l’instant → onglet « Écartées »."]],covHowT:"D’où vient ce chiffre ?",covTotal:"Total du marché",covColCode:"Code · pays",covColN:"Sociétés",covColSource:"Source",covWide:e=>`${e} non publié — élargi au code parent`,covMissing:"aucune donnée publiée",covRejected:e=>`Codes écartés faute de sociétés trouvées : ${e}.`,covComputedAt:e=>`calculé le ${e}`,filterOff:"Retirer ce filtre",fSelected:"sélectionnés",funScreened:(e,a)=>`sociétés criblées${e?a?` du ${e} au ${a}`:` depuis le ${e}`:""}`,funKept:"retenues comme cibles sérieuses",funAnalyzed:"analysées en profondeur",funShown:"publiées sur votre page, tous filtres levés",sigStripMore:e=>`+ voir les ${e} autre${e>1?"s":""}`,boxCollapse:"Réduire",boxExpand:"Agrandir",memoReadHere:"📄 Lire le mémo ici",memoHideHere:"▴ Replier le mémo",sigChipTitle:(e,a)=>`Signalé ${e} · ${a}`,funPerWindow:(e,a)=>`Du ${e} au ${a}`,funPerAll:"Depuis le début",funAnalyst:"— l’équivalent d’environ 3 semaines d’un analyste.",funOfMarket:(e,a)=>`sur ~${e} sociétés de votre marché, soit ${a} %`,funScope:"Sourcing de votre thèse uniquement — vos codes d’activité, vos pays, vos angles. Aucune société d’un autre fonds n’est comptée ici.",funToday:e=>`dont ${e} aujourd’hui`,actTitle:"Activité des 30 derniers jours",actScreened:"criblées",actKept:"retenues",actToday:"aujourd’hui",fstatsShow:"Voir l’activité des 30 derniers jours",fstatsHide:"Masquer l’activité",sinceTitle:(e,a)=>`${e} nouvelle${e>1?"s":""} cible${e>1?"s":""} depuis votre dernière visite (${a})`,sinceSub:"arrivées depuis votre dernier passage — à parcourir en premier",sinceMore:e=>`+${e} autres`,sinceOut:e=>`${e} sortie${e>1?"s":""} de la liste`,morningDock:e=>e?`${e} criblées ce matin`:"Crible du matin",morningDockTitle:"Voir les sociétés criblées aujourd’hui — quel qu’ait été le verdict.",sinceDock:e=>`${e} nouvelle${e>1?"s":""}`,sigDock:e=>`${e} ${e>1?"signaux":"signal"}`,newsDock:e=>`${e} actualité${e>1?"s":""}`,newsSince:e=>`depuis le ${e}`,newsDockHint:"Les articles du flux — tribunes, listes, récaps — sans société évaluable. « Extraire les sociétés » est le pont vers l’évaluation.",newsWord:"actualités — lecture, pas décision",identSyncConfirm:"Relancer le sourcing maintenant ? Un passage des moteurs prend quelques minutes.",plugAutoOn:e=>`⚡ Envoi automatique ACTIF (${e}) — chaque cible que vous validez part toute seule en séquence.`,plugAutoOff:"Envoi automatique inactif — valider une cible ne l’envoie nulle part.",plugCrm:"Créer les dossiers dans mon CRM",plugCrmHint:"Collez l’URL de webhook de votre outil : chaque décision y arrive aussitôt.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Enregistrer",plugSaved:"Webhook enregistré",plugTest:"Tester",plugTested:"Test envoyé",plugTestThrottled:"Déjà testé il y a moins de 5 s — rien n’est reparti.",plugRemove:"Retirer",plugRemoved:"Webhook retiré",plugMcp:"Claude & IA (MCP)",plugBulk:"Contacter mes cibles",plugBulkHint:"Voyez d’abord qui partirait : l’aperçu ne contacte personne.",plugBulkTabs:[["valides","Validées"],["call","À trancher"],["retenus","Retenues"]],plugBulkPreview:"👁 Aperçu",bulkArm:"📤 Envoyer pour de vrai",bulkNoDest:"Aucune destination enregistrée : renseignez d’abord votre outil ci-dessus.",bulkScope:"Ce qui part, c’est l’onglet entier côté serveur — pas la vue filtrée à l’écran.",bulkWarn:(e,a)=>`Vous allez contacter ${e} société${e>1?"s":""} via ${a}. C’est irréversible, et le serveur ne vérifie pas si elles ont déjà été contactées.`,bulkConfirm:e=>`Oui, envoyer via ${e}`,bulkCancel:"Annuler",bulkSending:"Envoi en cours…",bulkDone:(e,a,r)=>`${e} société${e>1?"s":""} envoyée${e>1?"s":""}. ${a} joignable${a>1?"s":""} sur LinkedIn seulement, ${r} sans email.`,bulkNone:"Aucune société n’avait d’email : rien n’a été envoyé.",bulkLocked:(e,a)=>`Envoyé le ${e} — ${a} société${a>1?"s":""}. Nouvel envoi possible dans 24 h.`,bulkPreviewFirst:"Lancez d’abord l’aperçu : il dit exactement qui partirait.",cdEvaluation:"Évaluation",cdConviction:"Conviction",cdAnalyse:"Analyse",cdSociete:"Société",cdContact:"Contact",cdSuivi:"Suivi",actMemoOf:e=>e==="detailed"?"📖 Lire le mémo détaillé":"📖 Lire le mémo éclair",memoLoading:"Lecture du mémo…",memoLoadErr:"Le mémo ne se laisse pas lire ici — ouvrez-le en pleine page.",memoUnfold:e=>`Déplier cette section (${e} Ko)`,cdEngagementHint:"Score d’activité du dossier : vos clics et demandes sur cette page, plus l’avancement de l’approche commerciale. À partir de 20, le dossier est marqué 🔥.",mdMindmap:e=>`Carte mentale — ce que fait ${e}`,mdContactKnown:"Décideur — coordonnées du cockpit",cdCrible:"au crible",cdMemo:e=>e?`après mémo ${e}`:"après mémo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict du",cdSector:"Secteur",cdMarket:"Marché",cdTags:"Critères",dsFound:"D’où elle sort",cdQuery:"Recherche",cdSrc:"Source",cdAngleSrc:"Profil recherché",cdStage:"Stade",cdCountry:"Où",cdSite:"Site",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Détectée le",cdName:"Dirigeant",cdEmail:"Email",cdPhone:"Téléphone",cdCeoStatus:"Votre décision",cdEngagement:"Engagement",qaTitle:"Décrire cette société",qaHint:"Lecture de son site, puis quatre blocs : à qui elle s’adresse, ce qu’elle vend, comment elle gagne de l’argent, et ce qu’il faut en retenir. Aucun verdict — le crible a déjà tranché.",qaRun:"📄 Décrire",qaBusy:"Lecture du site…",qaVP:"À qui, et pour quel problème",qaProduct:"Ce qu’elle vend",qaModel:"Comment elle gagne de l’argent",qaSummary:"À retenir",qaSources:e=>`${e} page${e>1?"s":""} lue${e>1?"s":""}`,qaQuota:"Plafond du jour atteint : réessayez demain.",qaEmpty:"Le site ne dit rien d’exploitable — rien n’a été inventé.",dsBtn:"🗂 Dossier comité",dsHint:"Un A4 par société : le verdict, l’identité, et — quand un mémo existe déjà — la synthèse, le SWOT, les chiffres. On ne lance jamais un mémo juste pour imprimer.",dsTitle:e=>`Dossier comité — ${e} société${e>1?"s":""}`,dsCap:(e,a)=>`Les ${e} premières sur ${a} : un comité ne lit pas ${a} pages.`,dsWhy:"Pourquoi cette société est devant vous",dsAnalysis:"Ce qu’elle fait",dsExec:"Synthèse exécutive",dsSwot:"SWOT",dsSwotS:"Forces",dsSwotW:"Faiblesses",dsSwotO:"Opportunités",dsSwotT:"Menaces",dsSyn:"Synergies chiffrées",dsPnl:"P&L — l’essentiel",dsCf:"Flux de trésorerie — l’essentiel",dsRoi:"ROI & sensibilité",dsReco:"La recommandation",dsPlan:"Plan d’action",dsAnnex:"Mémo complet (annexe) :",dsTableNote:"Tableau condensé — le tableau complet vit dans le mémo.",dsDecision:"Votre décision",dsEmpty:"Aucune société dans la sélection courante.",dsFoot:e=>`Sélection établie par Proplace pour ${e} — document interne, ne pas diffuser.`,covFunnel:"Votre marché, au crible",covScreened:e=>`${e} sociétés passées au crible`,covOf:e=>`sur ~${e} sociétés pertinentes`,covNoEst:"Votre marché adressable n’est pas encore chiffré : la couverture s’affichera dès qu’il le sera.",covPace:e=>`${e} sociétés criblées par jour`,covEta:e=>e<=0?"Votre marché est entièrement couvert.":e<60?`Couverture complète dans ~${e} jours, à ce rythme.`:`Couverture complète dans ~${Math.round(e/30)} mois, à ce rythme.`,covRate:"Rythme d’analyse",covRateHint:"Combien de sociétés retenues reçoivent un verdict argumenté chaque jour. À zéro, l’analyse est en pause.",covRateNow:e=>e<=0?"En pause":`${e} par jour`,covKept:"retenues",covAna:"analysées",covScopeAll:"sur le monde entier",covShown:"présentées ici",bulkReplayed:"Cet envoi avait déjà été enregistré : rien n’est reparti. Vos cibles n’ont été contactées qu’une fois.",bulkPending:"L’envoi précédent est encore en cours : rien n’a été renvoyé.",plugBulkResult:(e,a,r)=>`${e} partiraient par email · ${a} par LinkedIn · ${r} sans contact.`,memoAlertTitle:"Votre alerte mémo",memoAlertSub:"Recevez un email dès qu’un mémo de votre fonds est finalisé — avec son lien direct.",memoAlertToggle:"M’envoyer chaque mémo terminé",memoAlertEmail:"Destinataire",memoAlertSaved:"Enregistré ✓",memoAlertErr:"Échec d’enregistrement — réessayez",memoAlertSections:"Sections de l’email",memoAlertSec:[["swot","SWOT"],["action","Plan d’action"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Verdict de Stan"]],memoAlertPreview:"👁 Prévisualiser",memoAlertBtn:"Votre alerte mémo",alertTabDaily:"Quotidien",alertTabWeekly:"Hebdomadaire",alertTabMarket:"Le marché",alertSections:"Sections de l’email",alertSec:[["pending","Dossiers à trancher"],["stats","Vos chiffres clés"],["autonomous","Décisions automatiques de Stan"],["market","Analyse de marché"],["sourcing","Votre sourcing du jour"]],alertSecSlow:"(plus long à générer)",alertSecNote:"Décocher l’analyse de marché rend l’aperçu instantané.",alertPreview:"👁 Prévisualiser l’email d’aujourd’hui",alertPreviewWeekly:"👁 Prévisualiser le bilan",alertSubject:"Objet :",alertPreviewBusy:"Aperçu en cours de génération, réessayez dans quelques secondes.",alertPreviewRetry:e=>`Génération en cours — nouvel essai dans ${e} s…`,alertPreviewFail:"Aperçu indisponible pour l’instant — décochez « Analyse de marché » pour l’obtenir tout de suite.",alertPreviewEmpty:"À cet instant : rien à trancher — l’email ne partira pas.",alertTest:"✉ M’envoyer un test",alertTestOk:e=>`✓ Envoyé à ${e} — vérifiez aussi vos spams/promotions.`,alertTestHint:"N’affecte pas l’envoi quotidien.",alertBtnPrevBusy:"⏳ Fabrication…",alertBtnTestBusy:"⏳ Envoi…",alertPreviewWait:e=>`Fabrication de votre email — ${e} s. Le premier aperçu de la journée demande jusqu’à 90 s : il est rendu pour de vrai, pas simulé. Vous pouvez laisser la fenêtre ouverte.`,alertTestWait:e=>`Envoi en cours — ${e} s. L’email est d’abord fabriqué, puis expédié dans votre boîte. Ne refermez pas la fenêtre.`,csMoved:(e,a)=>`${e} → ${a} · la ligne rejoint l’onglet correspondant.`,sinceLabel:e=>e?`nouvelles depuis votre visite du ${e}`:"nouvelles depuis votre dernière visite",sinceChip:"nouvelles",sinceSince:e=>`depuis le ${e}`,alertSaving:"Enregistrement…",alertSavedShort:"✓ Enregistré",alertReadOnly:"Vue de démonstration : ces réglages sont en lecture seule.",alertWeeklySub:"Un email par semaine : le bilan de la semaine et ce que votre thèse a appris de vos décisions.",alertWeeklyOn:"📬 Recevoir votre bilan de la semaine",alertWeeklyWhen:"Jour et heure d’envoi (Paris)",alertDow:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],alertLoadError:"Impossible de charger vos préférences.",alertThrottled:"Trop vite — attendez quelques secondes et refaites le réglage.",alertInactive:"Votre accès n’est pas encore actif — parlons-en.",alertNoLead:"Destinataire à définir avec nous.",exportViewTitle:"CSV de la vue filtrée",exportViewDesc:e=>`Les ${e} lignes de votre sélection actuelle — onglet, facettes, recherche et fenêtre comprises. Séparateur « ; », prêt pour Excel.`,exportViewBtn:"Télécharger",exportViewDone:e=>`${e} ligne${e>1?"s":""} exportée${e>1?"s":""}`,printTitle:"Imprimer la sélection",printDesc:e=>`Les ${e} lignes à l'écran, en A4 : pour qui, à quelle date, l'entonnoir chiffré, puis la liste. La carte, les filtres et les boutons ne sont pas imprimés.`,printBtn:"Imprimer",exportViewHead:"Société|Statut|Verdict Stan|Score|Pays|Secteur|Étape post-OUI|Contact|Email|Lien mémo|Date|Raison",tourStart:"Lancer le guide pas à pas",tourIntro:"La visite guidée couvre toute la page de A à Z, sur la vraie page : chaque étape éclaire l’endroit exact — de votre thèse à votre alerte email.",tourStep:(e,a)=>`Étape ${e}/${a}`,tourPrev:"← Précédent",tourNext:"Suivant →",tourDone:"Terminer",tourClose:"Fermer",tourPlayTitle:"Visite guidée",ahaATitle1:"1 dossier attend votre décision",ahaATitleN:e=>`${e} dossiers attendent votre décision`,ahaABody:"OUI = on prépare l’approche ; NON = on affine le tir.",ahaABtn:"Trancher maintenant →",ahaBTitle:"Un mémo complet vous attend",ahaBBody:e=>`${e} a déjà son mémo d’analyse — lisible en 3 minutes.`,ahaBBtn:"Ouvrir le mémo →",ahaRetTitle:e=>e===1?"1 société retenue vous attend":`${e} sociétés retenues vous attendent`,ahaRetBody:"Le tri de Stan est fait — chaque retenue a sa fiche, sa carte et son signal.",ahaRetBtn:"Voir les sociétés retenues →",ahaEvalTitle:e=>e===1?"1 société attend votre évaluation":`${e} sociétés attendent votre évaluation`,ahaEvalBody:"Rien n’est encore retenu : c’est la première pile à dérouler. Une société à la fois, Stan fait le crible.",ahaEvalBtn:"Ouvrir la pile à évaluer →",loadMsgs:["Réveil des moteurs de sourcing…","Chargement de vos cibles…","Les cartes et les signaux arrivent…","Tri selon votre thèse…","Encore un instant — le premier chargement est le plus long."],ahaCTitle:"Vos premières cibles sont là",ahaCBody:"Dites-nous si ça vise juste — chaque retour affine la machine.",ahaCBtn:"Voir mes critères →",howto:[["**Réglez votre ciblage.** Ouvrez « Vos critères » : c’est votre thèse — ce que vous cherchez, ce que vous écartez. Corrigez-la en langage naturel dès que quelque chose cloche ; le sourcing du lendemain matin s’y réaligne tout seul.","crit"],["**Sourcez un maximum de cibles.** Évaluez une société en collant son nom ou son site — ou une liste entière —, et regardez vos moteurs ratisser le web avec vos réglages.","eval"],["**Faites avancer chaque cible dans le tunnel, de gauche à droite** — Évaluées › Retenues › Analysées › À trancher › Validées › Écartées. Sur chaque carte, « Votre statut » la classe en un clic ; votre note « pourquoi » reste visible. Les 👍/👎 ne classent jamais : ils affinent votre thèse.","tab1"],["**Tranchez les « À trancher ».** Stan vous laisse le dernier mot : OUI (Validée) ou NON (Écartée), avec un mot sur le pourquoi.","tab3"],["**Comprenez comment Stan classe vos cibles.** Votre statut prime toujours sur le verdict de Stan. Le pont entre les deux est expliqué dans « Vos critères » : Retenu ↔ MATCH, Analysé ↔ CONSIDER · MONITOR, À trancher ↔ CALL, Écarté ↔ NO MATCH · PASS…","crit"],["**Concentrez-vous sur les Validées** — et menez chaque dossier jusqu’au bout du closing !","tab4"],["**Faites sortir tout ça de la page.** Le bouton 🔌 la branche sur vos outils : envoyer vos cibles dans votre séquence d’emailing, créer les fiches dans votre CRM, enrichir les dossiers que vous y avez déjà.","plug"],["**Ne revenez que si ça vaut le coup.** Le bouton 🔔 règle deux emails : le quotidien des dossiers à trancher, et le bilan de la semaine.","alert"]],fhintLive:"Ce qui bouge en ce moment sur votre marché — cliquez une vignette pour ouvrir la source.",fhintGoal:"Ce que les moteurs ont sourcé au dernier passage, et ce qu’il reste à évaluer.",fhintSrcEng:`Chaque carte est un **moteur** : une requête qui ratisse une source précise — bases de données, presse spécialisée, annonces, signaux — avec vos réglages.
· **Sociétés trouvées** : sa production sur la fenêtre choisie (1, 7, 30 jours ou 90 jours) — dont MATCH et écartées, deux nombres cliquables qui listent les sociétés.
· **Vos réglages** : ce que votre thèse impose à ce moteur.
· **✎ Ajuster ce moteur** : écrivez la correction en français — le sourcing du lendemain repart réaligné.`,fhintDecide:`OUI → Validées (à contacter). NON → Écartées.
· Les deux boutons sont sur la ligne : pas besoin de déplier.
· Ajoutez un mot sur le POURQUOI — c’est lui qui affine la thèse, bien plus que le clic.`,fhintMemoDeep:`Stan a classé ce dossier CALL : il pense que ça mérite votre temps.
· Le mémo détaillé (~35-40 min) creuse avant que vous tranchiez.
· Si un mémo est déjà prêt, le bouton dit « Lire » — rien à relancer.`,fhintStage:`Chaque Validée porte son pipeline : Contactée › A répondu › RDV › LOI › Signée.
· Un clic met le stade à jour.
· Sans réponse depuis quatre jours, la ligne vous le signale d’elle-même.`,fhintAppr:`Quatre messages espacés — J0, J2, J4, J6 — écrits sur ce dossier précis, en e-mail ou en LinkedIn.
· Vous les modifiez avant d’envoyer.
· Rien ne part tout seul : vous copiez, ou vous ouvrez votre email.`,fhintCampout:"C’est le point 1 de 🔌 Connecter : chaque Validée part dans votre outil d’emailing avec prénom, email, société, mémo, LinkedIn — prête à lancer une séquence.",fhintAddcrm:"C’est le point 2 de 🔌 Connecter : chaque dossier Validé est poussé dans votre CRM à la seconde du OUI — plus rien à retaper, rien de perdu entre deux exports.",fhintMemoDepths:`Le mémo éclair (~15 min) répond « est-ce que ça vaut mon temps ? » — il est lancé pour vous sur les retenues.
· Le mémo détaillé (~35-40 min) creuse un dossier que vous voulez trancher : marché, concurrence, chiffres, risques.
· Le compteur ci-dessus dit combien partent par jour et ce qui attend.`,fhintMHyp:`C’est ce que Stan a compris de votre stratégie — le crible, les profils et le classement en découlent tous.
· Un mot vous gêne ? Corrigez-la en français plus bas, et tout se réaligne.`,fhintMProf:`Les familles de cibles que vos moteurs traquent en continu.
· Chaque profil se déplie : ce qu’il cherche, ce qu’il écarte.
· C’est le cadre exact que le sourcing ratisse.`,fhintMGate:`Chaque société passe ces critères, dans l’ordre.
· Les raisons « STEP A, C… » que vous lisez sur les lignes renvoient ici.
· Une fois retenue, Stan creuse et tranche : CALL, CONSIDER, MONITOR ou PASS.`,fhintTabAna:`Les dossiers dont le mémo est déjà lancé.
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
· Un mémo = **1 crédit**, une société à la fois : rien ne part jamais en lot.`,tourToday:"ce matin",tourNoRun:"aucun passage enregistré",tourT:{ident:"Le bandeau de votre fonds",cover:"Votre couverture du marché",engine:"Le moteur de mémos",live:"Le direct",goal:"Le dernier sourcing",engines:"Vos moteurs de sourcing",decide:"OUI ou NON — le dernier mot",memoDeep:"Le mémo détaillé, avant de trancher",stage:"Après le OUI, le suivi",appr:"Le premier message, écrit pour vous",campout:"Créer une campagne outbound",addcrm:"Ajouter au CRM",memoDepths:"Deux profondeurs de mémo",mHyp:"Tout part de cette hypothèse",mProf:"Vos profils de cibles",mGate:"Le crible — Retenue ou Écartée",tabAna:"Analysées",tabValid:"Validées",tabRej:"Écartées",rank:"L’ordre de la liste est un classement",improve:"Stan s’améliore tout seul — et vous l’accélérez",funnel:"Le tunnel",tuto:"L’étape en cours",demand:"Évaluer une société",deals:"Les deals du jour",news:"La veille du jour",chips:"Les statuts, sur la ligne",dec:"Pourquoi cette décision",memo:"Le mémo détaillé",status:"Votre statut",learn:"Vos 👍 / 👎",tools:"Brancher vos outils",exportT:"Exporter en CSV",alerts:"Vos alertes email",crit:"Le paramétrage de Stan"},fhintDeals:"Les opérations M&A et levées de vos secteurs, aujourd’hui. Un clic en tire les sociétés à évaluer — le même geste que coller un article.",fhintNews:"Les articles retenus pour VOTRE thèse. Un clic en tire une carte mentale et les sociétés à évaluer.",fhintExport:"Sortez vos cibles au format CSV — la sélection courante, avec ses colonnes, prête pour votre tableur ou votre CRM.",fhintAlerts:"Réglez ce qui vous arrive par email : le brief du matin, le bilan de la semaine, et l’alerte quand un mémo est prêt.",csLabel:"Votre statut :",csKept:"Retenu",csAnalysed:"Analysé",csPending:"À trancher",csValidated:"Validé",csOut:"Écarté",csYes:"✓ Oui",csNo:"✗ Non",csSaved:"✓ enreg.",csNoteSaved:"note ajoutée ✓",csNoteOk:"OK",csNotePh:"Pourquoi ? (une ligne)",csAnaConfirm:"Aucun mémo sur ce dossier — le passer en Analysé quand même ?",whySend:"Envoyer",whyYesPh:"Pourquoi ce OUI ? (une ligne — ça affine votre thèse)",whyNoPh:"Pourquoi ce NON ? (une ligne — ça affine votre thèse)",stgLabel:"Votre avancement :",stg:[["todo","○ À faire"],["sent","✉ Contactée"],["replied","💬 A répondu"],["meeting","🤝 RDV"],["loi","📄 LOI"],["signed","✅ Signée"],["lost","✖ Perdue"]],j4Badge:e=>`⏰ Sans réponse depuis ${e} j — relancer ?`,actRepeche:"↩ Repêcher",actRegen:"↻ Régénérer le mémo",actConn:"🔌 Envoyer",actConnHint:"Mettre cette société en séquence, ou la pousser dans votre CRM.",memoRegenAsk:e=>`Refaire le mémo détaillé de ${e} ? L’actuel sera remplacé, et cela consomme un crédit.`,actErr:"Envoi impossible — réessayez dans un instant.",actNotPersisted:"Impossible d’enregistrer ce statut sur ce dossier.",decidedYes:e=>`${e} validée — place à l’approche`,decidedNo:e=>`${e} écartée`,repeched:e=>`${e} repêchée — de retour dans Retenues`,critHypTitle:"Notre hypothèse sur votre stratégie",critHypSub:"Toute la sélection en découle. Si elle est à côté, corrigez-la ci-dessous — la recherche est réalignée et vous recevez une sélection corrigée.",critProfilsTitle:"Vos profils de cibles",critProfilsSub:"Les familles de cibles que la machine traque en continu — chaque profil se déplie.",critLookFor:"Ce que nous recherchons",critRuleOut:"Ce que nous écartons",critGateTitle:"Le crible de Stan — comment il décide Retenu / Écarté",critGateSub:"Chaque société est confrontée à ces critères. C’est à eux que renvoient les « STEP A, C… » des raisons affichées sur les lignes.",rubricTitle:"Comment Stan décide l’analyse (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Une fois retenu, Stan approfondit et tranche. Voici ce qui fait pencher la balance.",qvTitle:"Les verdicts de Stan — où va chaque dossier",qv:[["CALL PENDING","le choix n°1 de Stan : à trancher OUI/NON maintenant → onglet « À trancher »."],["CALL YES","vous avez tranché OUI — le dossier rejoint « Validées », place à l’approche."],["CALL NO","vous avez tranché NON — le dossier rejoint « Écartées »."],["CONSIDER","solide, mérite un regard plus attentif → onglet « Analysées »."],["MONITOR","à surveiller, pas prioritaire pour l’instant → onglet « Analysées »."],["PASS","non pertinent pour le moment → onglet « Écartées »."]],brTitle:"Le routage automatique — où le verdict de Stan envoie chaque dossier",br:[["Retenu","MATCH — retenue au sourcing, mémo à venir → onglet « Retenues »"],["Analysé","CONSIDER · MONITOR — mémo fait, pas de call → onglet « Analysées »"],["À trancher","CALL PENDING — Stan propose un call, votre OUI/NON est attendu → onglet « À trancher »"],["Validé","CALL YES — vous avez tranché OUI → onglet « Validées »"],["Écarté","NO MATCH · PASS · CALL NO — refus de Stan, ou votre NON sur un call → onglet « Écartées »"]],brNote:"Un CALL passe par 3 états : CALL PENDING (le mémo est TERMINÉ, Stan propose le call — votre décision est en attente) › CALL YES (vous validez) › CALL NO (vous écartez). PENDING ne veut jamais dire « en cours d’analyse » : l’analyse est déjà faite.",vt:{MATCH:"MATCH — retenu : correspond à vos critères.","NO MATCH":"NO MATCH — écarté par vos critères.","CALL PENDING":"CALL — le choix n°1 de Stan : à trancher OUI/NON maintenant.","CALL YES":"CALL YES — vous avez tranché OUI : le dossier rejoint « Validées ».","CALL NO":"CALL NO — vous avez tranché NON : le dossier rejoint « Écartées ».",CONSIDER:"CONSIDER — solide, mérite un regard plus attentif.",MONITOR:"MONITOR — à surveiller, pas prioritaire pour l’instant.",PASS:"PASS — non pertinent pour le moment."},vKept:"Retenu",vOut:"Écarté",learnLine:"Comme sur Netflix, chaque 👍/👎 affine ce que Stan vous montre ensuite — vous jugez, il apprend.",learnLink:"Ajuster mes critères →",funnelHint:"Retrouvez ici toutes vos cibles sourcées automatiquement dans <b>évaluées</b> puis passez celles que vous souhaitez contacter dans <b>validées</b>.",fhintClose:"Masquer cette aide",queueTitle:"File de traitement",queueDone:(e,a)=>`<b>${e} / ${a}</b> mémos générés`,queueTomorrow:"À venir — ordre projeté, recalculé chaque matin",queueToday:"Analysés aujourd’hui",queueRate:"Rythme quotidien — appliqué dès demain matin",queueRetry:"Relancer",queueDelete:"Retirer",queueEmpty:"Aucun mémo en file pour l’instant.",exportTitle:"Exporter votre sélection",exportLead:"L’onglet affiché est la sélection. Aucune case à cocher.",exportCsv:["📄","CSV","Une ligne par société — verdict, angle, mémo, contact."],exportSheet:["📊","Tableur","Formule à coller : la table se met à jour toute seule."],exportLive:["🔗","Lien vivant","Une URL JSON, relue à chaque appel. Jamais d’export figé."],exportXlsx:["📥","Excel","Le classeur complet, contacts inclus."],exportWebhook:["⛓","Webhook","Chaque cible validée part dans votre outil."],exportCopy:"Copier",exportCopied:"Copié !",exportOpen:"Ouvrir",exportKeyWarning:"Ces liens contiennent la clé d’accès de cette page : partagez-les avec la même prudence.",plugTitle:"Connecter cette page à vos outils",plugWebhook:"Webhook CRM sortant",plugWebhookHint:"Chaque changement de statut part vers cette URL (https).",plugConfigured:"Configuré",plugMcpHint:"Ajoutez Proplace à votre client MCP : votre deal flow devient interrogeable en langage naturel.",coverTitle:"Couverture de votre marché",coverBody:(e,a)=>`<b>${e}</b> sociétés passées au crible sur un marché estimé à <b>~${a.toLocaleString("fr-FR")}</b>. L’estimation a été établie avec votre Corporate Developer et reste révisable à tout moment.`,coverScreened:e=>`${e} passées au crible`,alertTitle:"Vos alertes email",alertDaily:"Email du matin (Daily 5)",alertDailyHint:"Chaque matin : les dossiers à trancher, les stats, le marché.",alertHour:"Heure d’envoi (Paris)",alertDays:"Jours",alertWeekdays:"Jours ouvrés",alertEveryday:"Tous les jours",alertSaved:"Préférences enregistrées",critTitle:"Le paramétrage de Stan",critAngles:"Vos angles d’acquisition",critMemoKinds:"① Instantané · ~15 min — analyse, synergies, verdict. ② Détaillé · ~35-40 min — étude de marché, quadrant concurrentiel, scénarios.",tutoTitle:"Prise en main",tutoSteps:[["Votre thèse","Stan a déduit vos angles de votre présence en ligne. Vérifiez-les : tout en découle."],["Le crible","Chaque nuit, il confronte le marché à vos critères : MATCH ou NO MATCH."],["Retenues","Les MATCH atterrissent ici, sans mémo. C’est votre file de travail."],["Analyser","Un clic produit le mémo : synergies chiffrées, angle décisif, verdict."],["À trancher","CALL passe ici. Vous répondez OUI ou NON — vos OUI affinent Stan."],["Le rythme","Réglez le nombre de mémos par jour. La file se vide en ordre de priorité."]],similar:"🧬 Similaires",similarBusy:"🧬 Recherche…",similarNote:"Les retenues entrent dans votre liste au prochain rafraîchissement.",similarNone:"Aucune similaire trouvée (5 recherches par jour).",approachChannel:"Canal",loadingV2:"Chargement du cockpit…",updatedAt:e=>`actualisée le ${e}`,backV1:"← interface classique",identPause:"en pause",identPauseTitle:"Rythme à 0 — aucun mémo ne se lance. Remontez le rythme pour relancer.",identUpdatedAt:e=>`actualisée le ${e}`,critChatTitle:"Corriger la thèse en langage naturel",critChatHint:"Écrivez votre correction — le moteur l’applique ou vous pose sa question. Le sourcing du lendemain est réaligné sans intervention.",critChatPh:"Ex. : « écarte les sociétés de moins de 10 personnes »…",critChatSend:"Appliquer",critChatRunning:"⏳ Le moteur travaille — vous pouvez fermer, la correction survit.",critThumbsTitle:"📊 Journal de vos pouces",critThumbsEmpty:"Aucun pouce pour l’instant — 👍/👎 sur les lignes apprennent à Stan vos goûts.",actOnboard:"🚀 Onboarder ce lead",actOnboardTitle:"Déclenche l’onboarding complet A→Z de ce prospect (page, thèse, sourcing)",onboardSent:e=>`Onboarding lancé pour ${e} — suivez l’avancement dans le cockpit`,rsOpen:"🔎 Rechercher des sociétés à évaluer",feedDeals:"🤝 Deals du jour",feedNews:"📰 Veille du jour",feedDealsH:"Les sociétés issues des opérations M&A et levées récentes de vos secteurs",feedNewsH:"Articles, vidéos et podcasts récents retenus pour VOTRE thèse",feedEmptyDeals:"Aucune opération récente dans vos secteurs aujourd’hui — revenez demain, ou collez un article.",feedEmptyNews:"Aucun article retenu pour votre thèse aujourd’hui — revenez demain, ou collez un lien.",feedAnalyse:"🧠 Analyser",feedNew:e=>`${e} nouveau${e>1?"x":""}`,feedHint:"Nouveau depuis votre dernière visite",feedOpen:"Ouvrir la source ↗",rsUrlPh:"coller l’URL d’un article, d’une vidéo ou d’une note",rsTextPh:"Coller ici l’article complet",rsOr:"ou",rsGo:"🔎 Résumer et rechercher des sociétés",rsHint:"Résumé · carte mentale · sociétés",rsRunning:"Lecture en cours…",rsRunningVid:"Transcription de la vidéo…",rsElapsed:e=>`${e} s`,rsNeed:"Collez une URL, ou le texte complet de l’article.",rsFound:e=>e?`${e} société${e>1?"s":""} trouvée${e>1?"s":""} dans ce contenu.`:"Aucune société nommée dans ce contenu.",rsLink:"Voir la page publiée ↗",rsPublishing:"Publication de la fiche…",rsPublishFail:"Fiche produite, page non publiée",rsTags:"Tags",rsClose:"Fermer",rsMindmap:"Carte mentale",rsSource:"Source ↗",rsSaving:"Enregistrement…",rsSaved:"✓ Enregistrée dans votre cockpit",rsSavedIn:e=>`✓ Enregistrée dans le carnet de ${e}`,rsSaveFail:"Fiche produite, NON enregistrée",rsArchOpen:e=>`voir les ${e} recherche${e>1?"s":""} déjà lancée${e>1?"s":""}`,rsArchTitle:"Recherches déjà lancées",rsArchBack:"← toutes les recherches",rsArchLoading:"Chargement…",rsArchEmpty:"Aucune recherche enregistrée pour l’instant.",rsArchGone:"Cette recherche n’est plus disponible.",rsRowCounts:(e,a)=>`${e} citée${e>1?"s":""} · ${a} à évaluer`,rsPub:"Publiée",rsPriv:"Non publiée",rsCited:"Sociétés citées",rsCitedHint:"Toutes les sociétés nommées dans ce contenu.",rsMatch:"Sociétés qui pourraient correspondre",rsMatchHint:"Suggérées à partir de la thèse du contenu — elles n’y sont pas forcément nommées.",rsEvalOne:"⚡ Évaluer",rsAddAll:e=>`＋ Ajouter les ${e} à la liste`,rsNoCompanies:"Aucune société dans ce contenu.",rsConclusion:"Ce que ça implique",rsCriteria:"Critères de sourcing",rsSources:"Pour creuser",groupEngine:"Moteur",groupNone:"Rien",browse:e=>`Parcourir les ${e}`,chainAll:e=>`Évaluer les ${e}`,chainHint:"selon votre thèse, l’une après l’autre",winMenu:"Période",datesShort:["Aujourd’hui","7 jours","30 jours","Tout"],colCompany:"Société & description",grpCount:(e,a)=>`${e} à envoyer sur ${a} sourcées`,emptyTab:"Aucune cible dans cet onglet",emptyScope:"Aucune société dans ce périmètre",emptyWin:"La fenêtre de dates y est peut-être pour quelque chose.",emptyWinBtn:"Voir sur toute la période",emptyFilters:e=>`${e} filtre${e>1?"s":""} actif${e>1?"s":""}`,emptyFiltersBtn:"↺ Tout effacer",privLink:"🔒 Lien privé — ne le partagez qu’avec votre équipe.",fitTitle:"Cette thèse colle-t-elle à ce que vous voulez ?",fitSub:"Un clic et une phrase. C’est ce qui rend la machine vôtre — plus que n’importe quel avis sur une société.",fitYes:"Oui, c’est ça",fitPartial:"En partie",fitNo:"Pas vraiment",fitPh:"ex. viser 20–200 personnes · retirer le leisure · ajouter les connecteurs ERP…",fitSend:"Envoyer",fitSaved:"Réponse enregistrée ✓",fitDone:"✓ LA RÉPONSE DONNÉE",fitEdit:"Modifier ma réponse",fitKo:"Envoi impossible — réessayez.",refreshRun:"Actualisation en cours…",refreshKo:"Actualisation impossible — réessayez dans un instant.",refreshDone:(e,a)=>`Actualisée ✓ · +${e} nouvelle${e>1?"s":""} · −${a} sortie${a>1?"s":""}`,refreshSame:"Actualisée ✓ — aucun nouveau dossier.",refreshSlow:"La republication prend plus longtemps que prévu — elle continue de son côté, revenez dans quelques minutes.",fitSeen:"Votre réponse est lisible par Proplace et par quiconque ouvre ce lien : elle porte sur la thèse, pas sur vos données.",freshBan:"🆕 Le sourcing a tourné depuis que vous avez ouvert cet écran.",freshGo:"Recharger la liste",thumbWhyUpPh:"Ce qui vous a plu — une ligne suffit (facultatif)",thumbWhyDnPh:"Ce qui n’allait pas — une ligne suffit (facultatif)",alertRules:"Un seul email par jour, et rien du tout les jours sans nouvelle société : pas de mail vide. Il part dans la langue de cette page.",rowSite:"Site",rowLi:"LinkedIn",rowMail:"Écrire",rowTel:"Appeler",contWorld:"Monde",evalGoOn:e=>`⚡ Évaluer ${e}`,chromeEval:"Évaluer",chromeFilt:"Filtres",chromeBoth:"Les deux",rowExtract:"🔎 Extraire les sociétés",toSendCtx:(e,a)=>`sur ${e} dans l'édition${a>0?` (${a} sans société identifiable)`:""}`,grpCard:"la carte du jour",grpMa:"Opérations M&A",grpLev:"Levées de fonds",grpNews:"Actualités",grpNom:"Actualités · Nominations",grpNewsOther:"Actualités · Autres",grpHire:"Actualités · Recrutements",edLabel:"dans l'édition du jour",edSplit:(e,a)=>`⚡ ${e} évaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} à explorer`:""}`},xl={plabels:["To screen","Kept","Analyzed","To decide","Approved","Ruled out","Favorites","Screened"],phelp:["Everything STAN ran through the screen on this window: every company judged against your criteria, kept or discarded automatically.","STAN kept these companies against your criteria, decisions justified. WE verify its picks — discard, validate, or launch an analysis on the uncertain ones.","STAN’s memos, reviewed by US: quantified synergies, argued verdict. Validate the ones to contact, set “to decide” where you hesitate.","YOUR move: the best targets, presented on Monday by your Corporate Developer. Call YES or NO — your yeses move to Validated.","Your YESES — the shortlist to contact. WE prepare the approach, or engage it on your behalf (Enterprise plan).","Discarded by STAN or by YOU. Every NO sharpens Stan’s criteria. Recover one anytime.","Your pins, any status.","View: everything Stan has ruled on."],tuto:{0:{p:"Arrived through the engines, not screened yet.",a:"⚡ Screen all"},1:{p:"MATCH at screening, no memo. Launch the analysis: it routes them to Analyzed or To decide.",a:"⚡ Analyze selection"},2:{p:"Memo produced, CONSIDER or MONITOR verdict. Promote a file to reach the CEO same day.",a:"↑ Promote to To decide"},3:{p:"CALL verdict: your YES or NO is expected on each file.",a:null},4:{p:"Your YES list. Stan drafts the outreach sequence, you approve and send.",a:"✉ Prepare outreach"},5:{p:"Screened out, or PASS after memo. Any file can be rescued at any time.",a:"↩ Rescue selection"},6:{p:"Targets you pinned by hand, any status.",a:null},7:{p:"Everything Stan has ruled on — the full pool.",a:null}},tutoPending:(e,a,r)=>`<b>${e} Stan CALL${e>1?"s":""}</b>, <b>${a} promoted by you</b>. <b>${r} awaiting answer.</b>`,morningThesis:(e,a,r)=>`This morning, <b>${e}</b> compan${e===1?"y":"ies"} screened by your engines`+(typeof r=="number"?`, <b>${r}</b> kept.`:".")+(a?` <b>${a}</b> awaiting your evaluation.`:' <span class="ok">All screened.</span>'),morningEnginesTitle:"Your engines are tuned to YOUR thesis: activity codes, countries, acquisition angles, exclusion criteria. Only the news watch starts from a sweep shared across funds — but every deal it surfaces is then screened against your criteria, and only enters here if it passes.",morningLast:(e,a,r)=>`Engines last ran on <b>${r}</b>: <b>${e}</b> compan${e===1?"y":"ies"} sourced.`+(a?` <b>${a}</b> still to screen.`:' <span class="ok">All screened.</span>'),morningEval:e=>`▶ Work through them (${e})`,identTitle:e=>`Targets for ${e}`,identCoverage:"Market coverage",identCoverageOf:(e,a)=>`<b>${e}</b> of ~${a.toLocaleString("en-US")}`,identEngine:"Memo engine",identPerDay:"memo/day",identEtaDays:e=>e<=0?"queue already cleared":`queue cleared in ${e} day${e>1?"s":""}`,analyseLock:"Enterprise plan only",analyseLockHint:"Analysing the whole selection at once fires several memos in parallel. The Enterprise plan (verdict within 24h) allows it; on Standard and trial, analyse one row at a time.",feedToEval:"→ To evaluate",feedToExtract:"Paste URL",identPending:e=>`→ ${e} queued`,identPendingWait:"→ reading the queue…",identExport:"Export — CSV, spreadsheet, live link",identPlug:"Connect this page to your tools",identBell:"Your email alerts",identSync:"Re-run sourcing",identSyncDone:"Sourcing relaunched — engines are back on your thesis",identSearch:"Search a target",identHelp:"Help",identTuto:"Getting started",toolUndo:"Undo last decision",toolReset:"Reset filters",toolSort:"Sort the list",toolTuto:"Getting started",toolCrit:"Stan’s configuration",undoDone:e=>`Decision undone on ${e}`,undoNone:"Nothing to undo",undoLockedTitle:"Cannot undo: previous status was empty (no server-side “clear” operation)",resetDone:"Filters reset",actAnalyse:"⚡ Analyze",actAnalyseQueued:"⏳ Queued…",actPromote:"↑ To decide",actYes:"✓ Yes",actNo:"✗ NO",actYesTitle:"Yes: moves to Approved, Stan prepares the sequence",actNoTitle:"No: joins Ruled out",actApproach:"✉ Prepare outreach",actApproachSent:"✓ Sequence ready — check your email",actMemo:"📄 View memo",actMemoQueue:"memo to launch",actLocked:"🔒 Analyze",actToEval:"to screen",promoted:e=>`${e} promoted for decision`,thumbUp:"Good pick — Stan will learn from it",thumbDn:"Bad pick — Stan will correct",thumbUpDone:"Good pick recorded — Stan will learn from it",thumbDnDone:"Correction recorded — Stan will adjust its selection",colThumbs:"STAN",colVerdict:"Screen · memo",colCrible:"Screen",fVerdict:"Verdict",colMemo:"Memo",colScore:"Score",orgAuto:"⚡ Stan CALL",orgAutoTitle:"CALL PENDING verdict: Stan recommends the call",orgCd:"👤 promoted by you",orgCdTitle:"Promoted by hand to To decide",waitTitle:e=>`Since Stan’s verdict: ${e} d`,waitChip:e=>`⏱ ${e} d`,densList:"List",densOpen:"Open",densLigne:"Rows",densMaxi:"Cards",unfoldAll:"Unfold all",foldAllLbl:"Fold all",foldArts:"Articles",zoomSrc:"Source",viewLink:"View article",viewSite:"Site",viewSrc:"Source",viewSiteBusy:"Site…",viewSiteHint:"Company website",viewSiteBusyHint:"Looking up the company website…",viewSrcHint:"Source article",viewLinkClose:"Close article",viewLinkTab:"Open in a tab",viewLinkHint:"Opens in a new window",zoomSimilar:"See similar",zoomInCockpit:"Isolate in the list",zoomArt:"Today's editorial",zoomEvalHint:"Screen against your thesis",zoomSimilarHint:"Same sector in the list",zoomIsolateHint:"Keep only this company",zoomNewsMark:"Edition note — opens on the right",zoomPulseEval:"evaluable",zoomPulseExplore:"to explore",zoomPulseArts:"news",doNews:"📰 News",zoomPulseEd:"in today’s article",zoomPulseBtn:"Today’s edition",zoomPulseWeek:"Last 7 days",zoomPulseWeekEd:"this week",doAll:"All",doEdito:"📖 Today's editorial",doBrief:"📖 Today's brief",doEval:"⚡ Evaluable",doExplore:"🔎 To explore",doAna:"⚡ To analyse",doBriefHint:"Show today's brief",doTodo:"⚡ To evaluate",doDone:"✓ Already evaluated",cdMemoTab:"📖 Memo",evalPickSite:"several sites share this name — open to check, then confirm the right one.",evalPickChip:"Site to confirm",eqNamePh:"Company name or URL…",eqAdd:"Add a row",eqNoSite:"no site found — the name will be evaluated as is",eqReady:"ready",eqPick:"pick the site →",eqRunning:"⏳ evaluating…",eqGo:e=>`⚡ Evaluate the ${e} rows`,eqHint:"Your rows stay here: fill on the go, launch later.",eqColName:"Company",eqColSite:"Site",eqColDesc:"What it does",eqColState:"State",eqLookup:"finding the site…",eqDescBusy:"reading the site…",eqDescNone:"the site says nothing usable",eqDescQuota:"daily reading cap reached",eqRunOne:"Evaluate this row",eqRunOneShort:"Evaluate",sgGo:"💡 Find similar companies",sgBusy:e=>`🔎 twins of ${e}…`,sgFrom:(e,a)=>`from your kept companies (${e}${a>1?` +${a-1}`:""})`,sgQuota:"daily cap reached (5 searches) — try tomorrow",sgNone:"nothing new: the twins found are already in your list",sgVia:e=>`found from ${e}`,pxThesis:"your thesis",pxGoThesis:"🎯 Search on my thesis",pxGoFree:"🔎 Search",pxPlace:"a strong keyword, or a French NAF code (66.22Z)",eqClearDone:"Clear evaluated",evalPickGo:"✓ This one",chainMemoGo:"⚡ Launch the memo (1 credit)",analyseConfirm:e=>`Launch ${e} analysis memo${e>1?"s":""}?

This uses ${e} memo credit${e>1?"s":""}. Companies move to "Analysed" or "To decide" once the memo is ready.`,sortBy:"Sort by",sortSig:"Signal",sortAmount:"Amount",sortAge:"Recency",sortName:"Name",sortCountry:"Country",sortStage:"Stage",sortSector:"Sector",sortCrible:"Screen",sortMemo:"Memo",sortScore:"Score",fMenu:"Filters",memoSynth:"Summary",memoOpenFull:"📖 View the full memo →",memoDeep:"⚡ Detailed memo",memoDeepHint:"For this file to decide, you can launch the detailed analysis: market study, competitive quadrant, scenarios.",memoDeepSent:e=>`Detailed memo launched on ${e} — ready in 35 to 40 minutes`,memoInstantSent:e=>`Analysis launched on ${e} — memo ready in ~15 minutes`,liveStrip:"Live analyses",liveBoot:"starting…",liveEnd:"done {t}",liveOpenQueue:"Open the queue",memoNone:"No memo for this file yet — launch the analysis.",creditsCap:"Memo credits",creditsToday:"today",creditsRecharge:"Top up →",creditsCost:e=>`−${e} credit${e>1?"s":""}`,creditsNone:"Out of credits — top up or wait for tomorrow 7am.",rechargeTitle:"Memo credits",rechargeHint:e=>`Your plan includes <b>${e} credits per day</b>, refilled every morning. Need more right now?`,rechargeNote:"Purchased credits never expire. They are used after your daily credits.",rechargeBuy:"Add",rechargeUnit:(e,a)=>`${e} credits — €${a}`,onbTag:"Private preview · read only",onbTitle:e=>`Your deal flow is ready — <b>${e} targets kept</b> by Stan`,onbSub:e=>`${e} companies screened against your thesis. The first ten rows are open; the rest unlocks in thirty minutes.`,onbSteps:[["Stan studied your online presence","Website, job posts, press — it inferred your acquisition angles."],["It screened the market","Every company checked against your criteria."],["It wrote memos","Quantified analyses, synergies, verdicts."],["Your turn to decide","Thirty minutes to tune your deal flow and unlock everything."]],onbCta:"Pick a slot →",lockbarText:"Let’s set up your dream deal flow in 30 minutes, with a Corporate Developer",lockbarContactBefore:"Alexandre — ",lockbarContactMid:" · ",lockbarCta:"Pick a slot",rdvHeading:"Let’s set up your ideal deal flow in 30 minutes",rdvSubBefore:"Pick a slot below, or reach your Corporate Development expert directly at ",rdvSubMid:" or by email at ",rdvCoFallback:"your company",rdvUnlockLabel:e=>`Unlock ${e}`,rdvUnlocks:e=>[["Access every target you kept","Full investment memos, synergies, contacts, approach angle."],["Acquisition strategy built with you","Hypothesis + acquisition strategy recalibrated live, with you."],["Let’s decide together on the targets you want","YES / NO, sourcing of similar companies, export and CRM sync."],["Your AI Corporate Developer is live",`Stan works for ${e} every morning — all you have to do is decide.`]],identRepub:"Republish the page now — re-renders it from what is already known. Free: no engine runs, and no model is called if your thesis has not changed.",identRepubDone:"Republish started — your numbers refresh in about thirty seconds. Reload the page to see them.",plugHow1:"In your tool (Make, Zapier, n8n, HubSpot, Pipedrive…), create a “webhook” trigger and copy the URL it gives you.",plugHow2:"Paste it below, Save, then Test: one sample message goes out to your tool right away.",plugHow3:"Done. Three moments trigger a send: you validate a target, you move it a stage, or an approach is prepared.",plugExT:"Exactly what your tool receives",plugExResult:"In your CRM you get one row per validated company: its name, your note, Stan’s score, its website and the memo link.",plugApiT:"One company at a time, from a script or Make",plugQuota:"This shortcut is capped at 10 companies per day per link — the normal path is the page’s evaluation bar.",plugFeeds:"The JSON, CSV, Google Sheets and Excel feeds live in the 📥 Export button next door — they are not repeated here.",plugTokenNote:"⚠️ These links carry this page’s access key: wherever you paste them, they open your targets. Only put them in your own tools.",plugDoc:"Full documentation → proplace.co/api/",plugDestLbl:"Destination",plugDestWh:"My webhook",plugDestInst:"Instantly (campaign)",plugDestCrm:"My CRM",plugDestCrmS:"HubSpot, Pipedrive, Salesforce — via Make, Zapier or n8n.",plugDestScript:"Script or spreadsheet",plugDestScriptS:"One HTTP call, or a Google Sheets and Excel export.",plugLead:"Your decisions go automatically where you work. Three steps, once.",plugStep1:"Where should your decisions land?",plugStep2Wh:"Paste your tool’s webhook link",plugStep2Inst:"Enter the Instantly campaign id",plugStep2Script:"Use this endpoint",plugStep3:"When should we send?",plugPayloadSub:"one row per company, 15 fields",plugAideWh:"In Make, Zapier or n8n: create a “webhook” trigger, copy its link, paste it here. The test sends a sample company immediately.",plugAideInst:"The id is in your Instantly campaign URL. Automatic sending pushes every validated target there.",plugAideScript:"One POST per company, capped at 10 a day. For a regular volume, prefer the webhook.",plugEtatOn:"Automatic sending is on — every validated target goes out by itself.",plugEtatOff:"Automatic sending is off — validating a target sends it nowhere.",plugCampPh:"Instantly campaign id",plugCampNeed:"Instantly needs the id of the campaign that will receive these targets — it is in your campaign URL.",plugDestInstOn:e=>`Instantly · campaign ${e}`,plugAutoT:"⚡ Automatic sending",plugAutoSub:"Turn it on: every target you validate enters your sequence by itself. You never come back here.",plugAutoOnLbl:"Automatically send every validated target",plugAutoNeed:"First save a webhook above, or pick Instantly.",plugAutoSavedOn:"Automatic sending is on — every validated target will go out by itself.",plugAutoSavedOff:"Automatic sending stopped.",plugAutoBroken:"⚠ Nothing is going out: automatic sending targets your webhook, but no webhook is saved. Save one above, or stop automatic sending.",notesT:"📝 Deal log",notesHint:"Your dated notes on this file. They live on the deal record — you and your team read them in the same place.",notesPh:"What you want to remember: a call, an objection, a figure…",notesAdd:"Add",notesAdded:"Note added ✓",notesEmpty:"No notes yet.",notesErr:"Failed — try again.",notesEdit:"Edit",notesDel:"Delete",notesDelAsk:"Delete this note?",notesSave:"Save",notesCancel:"Cancel",notesLoading:"Reading the log…",notesCount:e=>`${e} note${e>1?"s":""}`,apprT:e=>`Approach draft — ${e}`,apprSeqHint:"4 messages spaced out: D0, D2, D4, D6.",apprWait:"Writing the tailored sequence…",apprFail:"Generation unavailable — try again in a moment.",apprChEmail:"✉ Email",apprChLi:"in LinkedIn",apprSubj:"Subject",apprCopy:"📋 Copy this message",apprMailto:"✉ Open in your email",apprLiNote:"Connection request: no note.",apprEdited:"✎ edited",apprLocal:"Your edits stay in this window — they are not saved on the server. Copy the message before closing.",apprSender:e=>`Signed: ${e}`,avisIntro:(e,a)=>`🎯 Stan noticed you often rule out the “${e}” sector (${a} rejections).`,avisAsk:"Would you like him to source less of it?",avisYes:"Yes, recalibrate",avisNo:"Ignore",avisRunning:"Recalibrating your thesis…",avisDone:"✓ Done — Stan recalibrated your thesis. You will see fewer of them.",avisFail:"Recalibration unavailable right now — try again soon.",propT:"🧠 What your calls say about your thesis",propSub:"Your 👍/👎 — and above all what you write underneath — tell how you choose. Stan reads them together and proposes the corrections that would bring the next selection closer to your own judgement. Nothing is applied without you.",propBtn:"Re-read my calls and propose corrections",propWait:"Re-reading your calls…",propNone:"Nothing solid enough yet. A single call never moves a thesis: keep judging the cards (one line of “why” helps a lot) and come back.",propFew:e=>`Not enough calls yet — ${e} compan${e===1?"y":"ies"} judged. Keep going, then come back.`,propFrom:"Based on:",propApply:"Apply this correction",propSkip:"Not this one",propApplying:"Applying…",propApplied:"Applied ✓ — Stan now sources on the corrected version.",propApplyFail:"Could not apply — try again.",propKo:"Cannot re-read right now — this is the engine, not you. Try again in a moment.",propSlow:"Stan is still working on this correction — it will apply by itself. The logbook will tell you.",engOn:"● on here",engOff:"○ off here",engOptOff:"○ to enable",engGlobalOff:"⊘ off (global)",engHintOpt:"Optional engine (paid Maps + free BODACC): enable it for THIS fund, then run BODACC on demand.",engHint:"Turns this engine on or off FOR THIS FUND — the shared pool is untouched.",engToggleFail:"Could not change the setting — try again.",engToggleNote:"The setting applies on the next sourcing run: nothing already here is removed.",engBodacc:"Run free BODACC now",engBodaccRun:"Starting…",engBodaccNote:"Free official FR bulletin (insolvencies, sales, closures). Google Maps stays optional and paid.",engBodaccOk:"BODACC radar started for this fund. Refresh the page in a few minutes.",engBodaccKo:"Could not start — try again.",engMore:e=>`+ ${e} more`,engParams:"Your settings",engParamsShared:"Shared source · filtered on your sectors",engParamsExample:"sample of the daily rotation",engParamsLess:"show less",engFresh:e=>`${e} new`,engFreshHint:"Kept by this engine since your last visit — click to see them",engFreshT:"New since your last visit",engFreshAll:e=>`${e} new since your last visit`,engToday:e=>`${e} today`,engTodayHint:"Sourced today by this engine",engTodayT:"Sourced today",propSections:{hypothesis:"The hypothesis",profils:"The target profiles",gate:"The Kept / Ruled-out screen",rubric:"The analysis decision"},plugCrmRecipeT:"Pipedrive, HubSpot, Salesforce — they do not accept a live link: they need a scenario, wired ONCE.",plugCrmRecipeOpen:"See the recipe, in 4 modules",plugCrmR1:"① In Make (or Zapier), schedule an hourly scenario starting with HTTP → “Make a request” on the JSON link in 📥 Export.",plugCrmR2:"② Add an “Iterator” on the returned array: one iteration = one company.",plugCrmR3:"③ Pipedrive → “Search organizations”, searching on the domain (it must appear somewhere on the record — website or custom field; otherwise search on the name). HubSpot natively matches its companies on domain: even more direct.",plugCrmR4:"④ Pipedrive → “Update an organization”: our columns land in the custom fields you created (verdict, conviction, angle, memo link). Wire “Add an organization” on the “nothing found” branch: companies you did not have yet get created instead of being lost.",plugCrmRNote:"By hand, without a scenario? Open the CSV (or Excel) link in your browser to get the file, then feed it to your CRM’s importer. Keep that path for companies you do NOT have yet: a file import cannot match cleanly on domain, it creates duplicates.",plugVarsT:"See the 15 variables received per target",plugVars:"first_name, last_name, email, company_name, phone, website, linkedin, sector, country · angle, why, verdict, conviction_score, memo_url, memo_pdf_url.",plugRefT:"See the link settings and the 26 columns",plugOpt:"Two settings to paste at the END of the link (it already contains “?”, so append with “&”): “&tab=valides” returns only your validated targets (also call, retenus, ecartes, chauds); “&since=YYYY-MM-DD” returns only what moved since that date — what you want for a sync running on a loop.",plugCols:"26 columns per company: company, domain, first_name, last_name, email, linkedin, phone, website, linkedin_company, country, sector, stage, ceo_status, verdict, conviction_score, engagement, angle, memo_url, memo_pdf_url, memo_type, status, score, tagline, engine, detected, reasoning.",plugEnrichT:"These companies are already yours?",plugEnrich:"Don’t recreate them: add our columns (verdict, conviction, angle, memos, decision-maker contact). Matching runs on the DOMAIN — acme.co — never on the name: “Acme” and “Acme Ltd” never meet.",plugEnrich1:"① Copy your tool’s link from 📥 Export.",plugEnrich2:"② Paste it following the instruction written just above the link. You get a table with one row per company, updating by itself.",plugEnrich3:"③ Match on the “domain” column (VLOOKUP). Your records gain our columns, without a single duplicate.",plugAirtable:"Airtable — Add a table → Sync data → CSV, then paste the feed URL.",plugExcel:"Excel — Data → Get data → From Web, then paste the feed URL.",plugScoreT:"Have YOUR OWN companies scored",plugScore:"Paste the companies you already have into the “Search companies to evaluate” bar at the top of the page: each one is genuinely researched on the web, then judged by your thesis — MATCH or NO MATCH, with the reason. It is the best way to judge our screen on files you know by heart.",plugCrmQT:"🔗 And inside your CRM?",plugCrmQ1:"Your HubSpot, Pipedrive or Airtable records carry our columns, MATCH / NO MATCH included: that is the recipe above, wired once.",plugCrmQ2:"A button placed on the record triggers the memo without coming back here: the quick memo on any company in your list, the full memo on those you moved to “To decide”.",plugCrmQ3:"The memo link comes back into the record at the next sync (memo_url column): a memo takes a few minutes to write, so it is never ready within the second.",plugApiMemoLbl:"Trigger a company’s quick memo (“detailed_request” for the full memo):",csNone:"Status",csAnaNeedMemo:"Moving to “Analysed” needs a memo.",csAnaRun:"⚡ Run the memo (1 credit)",csAnaAnyway:"Mark it anyway",qOffer:"Your plan",qDelay:"verdict within",qRate:e=>`${e} memo${e>1?"s":""} a day`,qManual:e=>`${e} memo a day, on request`,qPaused:"no automatic memo",qManualSet:"rate set by hand",qEta:(e,a,r)=>`At this rate (${a}/day), ${e} memo${e>1?"s":""} left to write — the whole queue is processed in ${r} day${r>1?"s":""}.`,qEtaPaused:"Rate at zero: nothing goes out. Activate a plan to project a date.",qEtaDone:"The whole queue is already analysed.",qLate:(e,a)=>`The “${e}” promise cannot be met: it would take more than the ${a} memos a day cap.`,qRunning:"In progress",qUpNext:e=>`Coming up — ${e} compan${e>1?"ies":"y"} in the queue, in pick order`,qUpNextWait:"Coming up — reading the queue…",qFileWait:"Reading the queue — a few seconds.",qHedge:"Projected order, recomputed every morning. A fresh lead landing overnight goes first.",qFresh:"fresh",qLater:"later",qVerdictsT:"Stan’s verdicts — where each file goes",qVerdicts:[["CALL","his top pick: decide YES or NO → “To decide” tab."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],covHowT:"Where does this number come from?",covTotal:"Market total",covColCode:"Code · country",covColN:"Companies",covColSource:"Source",covWide:e=>`${e} not published — widened to its parent code`,covMissing:"no data published",covRejected:e=>`Codes dropped, no companies found: ${e}.`,covComputedAt:e=>`computed on ${e}`,filterOff:"Remove this filter",fSelected:"selected",funScreened:(e,a)=>`companies screened${e?a?` from ${e} to ${a}`:` since ${e}`:""}`,funKept:"kept as serious targets",funAnalyzed:"analysed in depth",funShown:"published on your page, all filters cleared",sigStripMore:e=>`+ see the other ${e}`,boxCollapse:"Collapse",boxExpand:"Expand",memoReadHere:"📄 Read the memo here",memoHideHere:"▴ Collapse the memo",sigChipTitle:(e,a)=>`Flagged ${e} · ${a}`,funPerWindow:(e,a)=>`From ${e} to ${a}`,funPerAll:"Since the start",funAnalyst:"— roughly the equivalent of 3 weeks of an analyst’s work.",funOfMarket:(e,a)=>`of ~${e} companies on your market, i.e. ${a} %`,funScope:"Sourcing from your thesis only — your activity codes, your countries, your angles. No company from another fund is counted here.",funToday:e=>`incl. ${e} today`,actTitle:"Last 30 days of activity",actScreened:"screened",actKept:"kept",actToday:"today",fstatsShow:"Show the last 30 days of activity",fstatsHide:"Hide activity",sinceTitle:(e,a)=>`${e} new target${e>1?"s":""} since your last visit (${a})`,sinceSub:"arrived since your last visit — start here",sinceMore:e=>`+${e} more`,sinceOut:e=>`${e} left the list`,morningDock:e=>e?`${e} screened this morning`:"Morning screen",morningDockTitle:"See the companies screened today — whatever the verdict.",sinceDock:e=>`${e} new`,sigDock:e=>`${e} signal${e>1?"s":""}`,newsDock:e=>`${e} news item${e>1?"s":""}`,newsSince:e=>`since ${e}`,newsDockHint:'Feed articles — op-eds, lists, recaps — with no evaluable company. "Extract companies" bridges into evaluation.',newsWord:"news — reading, not deciding",identSyncConfirm:"Relaunch sourcing now? An engine pass takes a few minutes.",plugAutoOn:e=>`⚡ Automatic sending ACTIVE (${e}) — every target you validate goes into the sequence on its own.`,plugAutoOff:"Automatic sending off — validating a target sends it nowhere.",plugCrm:"Create the records in my CRM",plugCrmHint:"Paste your tool’s webhook URL: every decision lands there right away.",plugUrlPh:"https://hook.eu1.make.com/…",plugSave:"Save",plugSaved:"Webhook saved",plugTest:"Test",plugTested:"Test sent",plugTestThrottled:"Already tested less than 5s ago — nothing was sent.",plugRemove:"Remove",plugRemoved:"Webhook removed",plugMcp:"Claude & AI (MCP)",plugBulk:"Contact my targets",plugBulkHint:"See who would go out first: the preview contacts nobody.",plugBulkTabs:[["valides","Validated"],["call","To decide"],["retenus","Kept"]],plugBulkPreview:"👁 Preview",bulkArm:"📤 Send for real",bulkNoDest:"No destination saved: set up your tool above first.",bulkScope:"What goes out is the whole server-side tab — not the filtered view on screen.",bulkWarn:(e,a)=>`You are about to contact ${e} compan${e>1?"ies":"y"} via ${a}. This cannot be undone, and the server does not check whether they were already contacted.`,bulkConfirm:e=>`Yes, send via ${e}`,bulkCancel:"Cancel",bulkSending:"Sending…",bulkDone:(e,a,r)=>`${e} compan${e>1?"ies":"y"} sent. ${a} reachable on LinkedIn only, ${r} with no email.`,bulkNone:"No company had an email: nothing was sent.",bulkLocked:(e,a)=>`Sent on ${e} — ${a} compan${a>1?"ies":"y"}. Next send available in 24 h.`,bulkPreviewFirst:"Run the preview first: it says exactly who would go out.",cdEvaluation:"Screening",cdConviction:"Conviction",cdAnalyse:"Analysis",cdSociete:"Company",cdContact:"Contact",cdSuivi:"Follow-up",actMemoOf:e=>e==="detailed"?"📖 Read the detailed memo":"📖 Read the instant memo",memoLoading:"Loading the memo…",memoLoadErr:"The memo will not load here — open it full page.",memoUnfold:e=>`Unfold this section (${e} KB)`,cdEngagementHint:"Activity score for this file: your clicks and requests on this page, plus outreach progress. From 20 up, the file is flagged 🔥.",mdMindmap:e=>`Mind map — what ${e} does`,mdContactKnown:"Decision-maker — cockpit data",cdCrible:"screening",cdMemo:e=>e?`after ${e} memo`:"after memo",cdScore:"Score",cdConvScore:"Conviction",cdVerdictDate:"Verdict on",cdSector:"Sector",cdMarket:"Market",cdTags:"Criteria",dsFound:"How we found it",cdQuery:"Search",cdSrc:"Source",cdAngleSrc:"Target profile",cdStage:"Stage",cdCountry:"Where",cdSite:"Website",cdLinkedin:"LinkedIn",cdAngle:"Angle",cdDetected:"Detected on",cdName:"Decision-maker",cdEmail:"Email",cdPhone:"Phone",cdCeoStatus:"Your decision",cdEngagement:"Engagement",qaTitle:"Describe this company",qaHint:"Reads its website, then four blocks: who it serves, what it sells, how it makes money, and what to remember. No verdict — the screening already decided.",qaRun:"📄 Describe",qaBusy:"Reading the website…",qaVP:"Who, and for what problem",qaProduct:"What it sells",qaModel:"How it makes money",qaSummary:"Takeaway",qaSources:e=>`${e} page${e>1?"s":""} read`,qaQuota:"Daily cap reached: try again tomorrow.",qaEmpty:"The website says nothing usable — nothing was invented.",dsBtn:"🗂 Committee pack",dsHint:"One A4 per company: the verdict, the identity, and — when a memo already exists — the summary, SWOT and figures. We never launch a memo just to print.",dsTitle:e=>`Committee pack — ${e} compan${e>1?"ies":"y"}`,dsCap:(e,a)=>`The first ${e} of ${a}: a committee will not read ${a} pages.`,dsWhy:"Why this company is in front of you",dsAnalysis:"What it does",dsExec:"Executive summary",dsSwot:"SWOT",dsSwotS:"Strengths",dsSwotW:"Weaknesses",dsSwotO:"Opportunities",dsSwotT:"Threats",dsSyn:"Quantified synergies",dsPnl:"P&L — the essentials",dsCf:"Cash flow — the essentials",dsRoi:"ROI & sensitivity",dsReco:"The recommendation",dsPlan:"Action plan",dsAnnex:"Full memo (annex):",dsTableNote:"Condensed table — the full table lives in the memo.",dsDecision:"Your decision",dsEmpty:"No company in the current selection.",dsFoot:e=>`Selection by Proplace for ${e} — internal document, do not circulate.`,covFunnel:"Your market, screened",covScreened:e=>`${e} companies screened`,covOf:e=>`out of ~${e} relevant companies`,covNoEst:"Your addressable market is not sized yet: coverage will show as soon as it is.",covPace:e=>`${e} companies screened per day`,covEta:e=>e<=0?"Your market is fully covered.":e<60?`Full coverage in ~${e} days at this pace.`:`Full coverage in ~${Math.round(e/30)} months at this pace.`,covRate:"Analysis pace",covRateHint:"How many kept companies get a reasoned verdict each day. At zero, analysis is paused.",covRateNow:e=>e<=0?"Paused":`${e} per day`,covKept:"kept",covAna:"analysed",covScopeAll:"worldwide",covShown:"shown here",bulkReplayed:"This send was already recorded: nothing went out again. Your targets were contacted once.",bulkPending:"The previous send is still running: nothing was sent again.",plugBulkResult:(e,a,r)=>`${e} would go by email · ${a} by LinkedIn · ${r} with no contact.`,memoAlertTitle:"Your memo alert",memoAlertSub:"Get an email as soon as one of your fund’s memos is finalised — with its direct link.",memoAlertToggle:"Send me every finished memo",memoAlertEmail:"Recipient",memoAlertSaved:"Saved ✓",memoAlertErr:"Could not save — try again",memoAlertSections:"Sections of the email",memoAlertSec:[["swot","SWOT"],["action","Action plan"],["synergies","Synergies"],["quadrant","Quadrants (images)"],["verdict","Stan’s verdict"]],memoAlertPreview:"👁 Preview",memoAlertBtn:"Your memo alert",alertTabDaily:"Daily",alertTabWeekly:"Weekly",alertTabMarket:"Market",alertSections:"Sections of the email",alertSec:[["pending","Files to decide on"],["stats","Your key numbers"],["autonomous","Stan’s automatic decisions"],["market","Market analysis"],["sourcing","Your sourcing of the day"]],alertSecSlow:"(slower to generate)",alertSecNote:"Unticking the market analysis makes the preview instant.",alertPreview:"👁 Preview today’s email",alertPreviewWeekly:"👁 Preview the weekly",alertSubject:"Subject:",alertPreviewBusy:"Preview being generated, try again in a few seconds.",alertPreviewRetry:e=>`Generating — new attempt in ${e}s…`,alertPreviewFail:"Preview unavailable right now — untick “Market analysis” to get it immediately.",alertPreviewEmpty:"Right now: nothing to decide on — the email will not go out.",alertTest:"✉ Send me a test",alertTestOk:e=>`✓ Sent to ${e} — check your spam/promotions too.`,alertTestHint:"Does not affect the daily send.",alertBtnPrevBusy:"⏳ Building…",alertBtnTestBusy:"⏳ Sending…",alertPreviewWait:e=>`Building your email — ${e}s. The first preview of the day takes up to 90s: it is rendered for real, not simulated. You can leave this window open.`,alertTestWait:e=>`Sending — ${e}s. The email is built first, then delivered to your inbox. Do not close this window.`,csMoved:(e,a)=>`${e} → ${a} · the row moves to the matching tab.`,sinceLabel:e=>e?`new since your visit of ${e}`:"new since your last visit",sinceChip:"new",sinceSince:e=>`since ${e}`,alertSaving:"Saving…",alertSavedShort:"✓ Saved",alertReadOnly:"Demo view: these settings are read-only.",alertWeeklySub:"One email a week: the week in review and what your thesis learned from your decisions.",alertWeeklyOn:"📬 Receive your week in review",alertWeeklyWhen:"Day and time (Paris)",alertDow:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],alertLoadError:"Could not load your preferences.",alertThrottled:"Too fast — wait a few seconds and set it again.",alertInactive:"Your access is not active yet — let’s talk about it.",alertNoLead:"Recipient to be set with us.",exportViewTitle:"CSV of the filtered view",exportViewDesc:e=>`The ${e} rows of your current selection — tab, facets, search and window included. Semicolon separated, ready for Excel.`,exportViewBtn:"Download",exportViewDone:e=>`${e} row${e>1?"s":""} exported`,printTitle:"Print the selection",printDesc:e=>`The ${e} rows on screen, on A4: who it is for, as of when, the funnel figures, then the list. The map, filters and buttons are not printed.`,printBtn:"Print",exportViewHead:"Company|Status|Stan verdict|Score|Country|Sector|Post-YES stage|Contact|Email|Memo link|Date|Reason",tourStart:"Start the step-by-step guide",tourIntro:"The guided tour covers the whole page A to Z, on the live page: each step spotlights the exact spot — from your thesis to your email alert.",tourStep:(e,a)=>`Step ${e}/${a}`,tourPrev:"← Previous",tourNext:"Next →",tourDone:"Finish",tourClose:"Close",tourPlayTitle:"Guided tour",ahaATitle1:"1 file awaits your decision",ahaATitleN:e=>`${e} files await your decision`,ahaABody:"YES = we prepare the approach; NO = we sharpen the aim.",ahaABtn:"Decide now →",ahaBTitle:"A full memo is waiting for you",ahaBBody:e=>`${e} already has its analysis memo — a 3-minute read.`,ahaBBtn:"Open the memo →",ahaRetTitle:e=>e===1?"1 kept company is waiting for you":`${e} kept companies are waiting for you`,ahaRetBody:"Stan’s sorting is done — every kept company has its sheet, card and signal.",ahaRetBtn:"See the kept companies →",ahaEvalTitle:e=>e===1?"1 company is waiting for your evaluation":`${e} companies are waiting for your evaluation`,ahaEvalBody:"Nothing is kept yet: this is the first pile to work through. One company at a time, Stan does the screening.",ahaEvalBtn:"Open the pile to evaluate →",loadMsgs:["Waking up the sourcing engines…","Loading your targets…","Cards and signals are coming…","Sorting by your thesis…","One more moment — the first load is the longest."],ahaCTitle:"Your first targets are here",ahaCBody:"Tell us if the aim is right — every signal sharpens the machine.",ahaCBtn:"See my criteria →",howto:[["**Set your targeting.** Open “Your criteria”: it’s your thesis — what you look for and what you rule out. Fix it in plain language whenever something is off; the next morning’s sourcing realigns on its own.","crit"],["**Source as many targets as you can.** Evaluate a company by pasting its name or website — or a whole list — and watch your engines comb the web with your settings.","eval"],["**Move every target through the funnel, left to right** — Evaluated › Kept › Analysed › To decide › Validated › Ruled out. On each card, “Your status” files it in one click; your “why” note stays visible. The 👍/👎 never file anything: they sharpen your thesis.","tab1"],["**Settle the “To decide”.** Stan leaves you the final word: YES (Validated) or NO (Ruled out), with a word on the why.","tab3"],["**Understand how Stan sorts your targets.** Your status always overrides Stan’s verdict. The bridge between the two is explained in “Your criteria”: Kept ↔ MATCH, Analysed ↔ CONSIDER · MONITOR, To decide ↔ CALL, Ruled out ↔ NO MATCH · PASS…","crit"],["**Focus on the Validated** — and take every file all the way to closing!","tab4"],["**Push all of this out of the page.** The 🔌 button wires it into your tools: send your targets to your emailing sequence, create the records in your CRM, enrich the files you already have there.","plug"],["**Only come back when it’s worth it.** The 🔔 button sets two emails: the daily one for files to decide on, and the week in review.","alert"]],fhintLive:"What is moving on your market right now — click a tile to open the source.",fhintGoal:"What the engines sourced on the last run, and what is left to evaluate.",fhintSrcEng:`Each card is an **engine**: a query combing one precise source — databases, trade press, announcements, signals — with your settings.
· **Companies found**: its output over the chosen window (1, 7, 30 days or 90 days) — incl. MATCH and dropped, two clickable numbers listing the companies.
· **Your settings**: what your thesis imposes on this engine.
· **✎ Adjust this engine**: write the correction in plain language — tomorrow’s sourcing runs realigned.`,fhintDecide:`YES → Validated (to contact). NO → Ruled out.
· Both buttons sit on the row: no need to expand.
· Add a word on the WHY — that is what sharpens the thesis, far more than the click.`,fhintMemoDeep:`Stan ranked this file CALL: he thinks it deserves your time.
· The detailed memo (~35-40 min) digs in before you settle.
· If a memo is already there, the button reads “Read” — nothing to launch.`,fhintStage:`Every Validated card carries its pipeline: Contacted › Replied › Meeting › LOI › Signed.
· One click updates the stage.
· No reply for four days and the row flags it by itself.`,fhintAppr:`Four spaced messages — D0, D2, D4, D6 — written for this very file, by email or LinkedIn.
· You edit them before sending.
· Nothing goes out by itself: you copy, or you open your email.`,fhintCampout:"This is block 1 of 🔌 Connect: every Validated target flows into your emailing stack with first name, email, company, memo, LinkedIn — ready to launch a sequence.",fhintAddcrm:"This is block 2 of 🔌 Connect: each new Validated deal is pushed into your CRM the second you say YES — nothing to retype, nothing lost between exports.",fhintMemoDepths:`The quick memo (~15 min) answers “is this worth my time?” — it runs for you on kept companies.
· The detailed memo (~35-40 min) digs into a file you want to settle: market, competition, figures, risks.
· The counter above says how many go out per day and what is waiting.`,fhintMHyp:`This is what Stan understood of your strategy — the screen, the profiles and the ranking all follow from it.
· One word off? Correct it in plain language below, and everything realigns.`,fhintMProf:`The families of targets your engines track continuously.
· Each profile unfolds: what it looks for, what it rules out.
· This is the exact frame sourcing combs.`,fhintMGate:`Every company goes through these criteria, in order.
· The “STEP A, C…” reasons you read on the rows point back here.
· Once kept, Stan digs in and settles: CALL, CONSIDER, MONITOR or PASS.`,fhintTabAna:`The files whose memo is already running.
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
· One memo = **1 credit**, one company at a time: nothing ever goes out in bulk.`,tourToday:"this morning",tourNoRun:"no run recorded",tourT:{ident:"Your fund’s header",cover:"Your market coverage",engine:"The memo engine",live:"Live",goal:"The last sourcing",engines:"Your sourcing engines",decide:"YES or NO — the final word",memoDeep:"The detailed memo, before you decide",stage:"After the YES, the follow-up",appr:"The first message, written for you",campout:"Create an outbound campaign",addcrm:"Add to CRM",memoDepths:"Two memo depths",mHyp:"It all starts with this hypothesis",mProf:"Your target profiles",mGate:"The screen — Kept or Ruled out",tabAna:"Analysed",tabValid:"Validated",tabRej:"Ruled out",rank:"The list order is a ranking",improve:"Stan improves on its own — and you speed it up",funnel:"The funnel",tuto:"The current step",demand:"Evaluate a company",deals:"Today’s deals",news:"Today’s sector news",chips:"Statuses, on the row",dec:"Why this decision",memo:"The detailed memo",status:"Your status",learn:"Your 👍 / 👎",tools:"Connect your tools",exportT:"Export to CSV",alerts:"Your email alerts",crit:"Stan’s settings"},fhintDeals:"M&A deals and funding rounds in your sectors, today. One click extracts the companies to evaluate — the same gesture as pasting an article.",fhintNews:"Articles kept for YOUR thesis. One click produces a mind map and the companies to evaluate.",fhintExport:"Take your targets out as CSV — the current selection with its columns, ready for your spreadsheet or CRM.",fhintAlerts:"Set what reaches your inbox: the morning brief, the weekly recap, and the alert when a memo is ready.",csLabel:"Your status:",csKept:"Kept",csAnalysed:"Analysed",csPending:"To decide",csValidated:"Validated",csOut:"Ruled out",csYes:"✓ Yes",csNo:"✗ No",csSaved:"✓ saved",csNoteSaved:"note added ✓",csNoteOk:"OK",csNotePh:"Why? (one line)",csAnaConfirm:"No memo on this file — mark it Analysed anyway?",whySend:"Send",whyYesPh:"Why this YES? (one line — it sharpens your thesis)",whyNoPh:"Why this NO? (one line — it sharpens your thesis)",stgLabel:"Your progress:",stg:[["todo","○ To do"],["sent","✉ Contacted"],["replied","💬 Replied"],["meeting","🤝 Meeting"],["loi","📄 LOI"],["signed","✅ Signed"],["lost","✖ Lost"]],j4Badge:e=>`⏰ No reply for ${e} days — follow up?`,actRepeche:"↩ Recover",actRegen:"↻ Regenerate the memo",actConn:"🔌 Send",actConnHint:"Put this company into a sequence, or push it to your CRM.",memoRegenAsk:e=>`Redo the detailed memo for ${e}? The current one will be replaced, and this uses one credit.`,actErr:"Could not save — try again in a moment.",actNotPersisted:"This status cannot be saved on this record.",decidedYes:e=>`${e} validated — on to the approach`,decidedNo:e=>`${e} ruled out`,repeched:e=>`${e} recovered — back in Kept`,critHypTitle:"Our hypothesis about your strategy",critHypSub:"The whole selection follows from it. If it is off, correct it below — the search is realigned and you get a corrected selection.",critProfilsTitle:"Your target profiles",critProfilsSub:"The families of targets the machine tracks continuously — each profile unfolds.",critLookFor:"What we look for",critRuleOut:"What we rule out",critGateTitle:"Stan’s screen — how it decides Kept / Ruled out",critGateSub:"Every company is checked against these criteria. They are what the “STEP A, C…” in the reasons on each row refer to.",rubricTitle:"How Stan decides the analysis (CALL / CONSIDER / MONITOR / PASS)",rubricSub:"Once kept, Stan digs deeper and rules. Here’s what tips the balance.",qvTitle:"Stan’s verdicts — where each file goes",qv:[["CALL PENDING","Stan’s top pick: decide YES/NO now → “To decide” tab."],["CALL YES","you decided YES — the file joins “Validated”, on to the approach."],["CALL NO","you decided NO — the file joins “Ruled out”."],["CONSIDER","solid, worth a closer look → “Analysed” tab."],["MONITOR","keep an eye on it, not a priority yet → “Analysed” tab."],["PASS","not relevant right now → “Ruled out” tab."]],brTitle:"Automatic routing — where Stan’s verdict sends each file",br:[["Kept","MATCH — kept at sourcing, memo to come → “Kept” tab"],["Analysed","CONSIDER · MONITOR — memo done, no call → “Analysed” tab"],["To decide","CALL PENDING — Stan proposes a call, your YES/NO is awaited → “To decide” tab"],["Validated","CALL YES — you ruled YES → “Validated” tab"],["Ruled out","NO MATCH · PASS · CALL NO — Stan’s refusal, or your NO on a call → “Ruled out” tab"]],brNote:"A CALL goes through 3 states: CALL PENDING (the memo is DONE, Stan proposes the call — your decision is awaited) › CALL YES (you validate) › CALL NO (you rule out). PENDING never means “being analysed”: the analysis is already done.",vt:{MATCH:"MATCH — kept: it fits your criteria.","NO MATCH":"NO MATCH — ruled out by your criteria.","CALL PENDING":"CALL — Stan’s top pick: worth a YES/NO decision now.","CALL YES":"CALL YES — you ruled YES: the file joins “Validated”.","CALL NO":"CALL NO — you ruled NO: the file joins “Ruled out”.",CONSIDER:"CONSIDER — solid, worth a closer look.",MONITOR:"MONITOR — keep an eye on it, not a priority yet.",PASS:"PASS — not relevant right now."},vKept:"Kept",vOut:"Ruled out",learnLine:"Like Netflix, every 👍/👎 sharpens what Stan shows you next — you judge, it learns.",learnLink:"Tune my criteria →",funnelHint:"Find here all your automatically sourced targets in <b>evaluated</b>, then move the ones you want to contact into <b>validated</b>.",fhintClose:"Hide this hint",queueTitle:"Processing queue",queueDone:(e,a)=>`<b>${e} / ${a}</b> memos generated`,queueTomorrow:"Up next — projected order, recomputed every morning",queueToday:"Analyzed today",queueRate:"Daily rate — applied from tomorrow morning",queueRetry:"Retry",queueDelete:"Remove",queueEmpty:"No memo queued right now.",exportTitle:"Export your selection",exportLead:"The visible tab is the selection. No checkboxes.",exportCsv:["📄","CSV","One row per company — verdict, angle, memo, contact."],exportSheet:["📊","Spreadsheet","Paste the formula: the table refreshes itself."],exportLive:["🔗","Live link","A JSON URL, re-read on every call. Never a stale export."],exportXlsx:["📥","Excel","The full workbook, contacts included."],exportWebhook:["⛓","Webhook","Every approved target lands in your tool."],exportCopy:"Copy",exportCopied:"Copied!",exportOpen:"Open",exportKeyWarning:"These links contain this page’s access key: share them with the same care.",plugTitle:"Connect this page to your tools",plugWebhook:"Outbound CRM webhook",plugWebhookHint:"Every status change is sent to this URL (https).",plugConfigured:"Configured",plugMcpHint:"Add Proplace to your MCP client: your deal flow becomes queryable in natural language.",coverTitle:"Your market coverage",coverBody:(e,a)=>`<b>${e}</b> companies screened out of an estimated market of <b>~${a.toLocaleString("en-US")}</b>. The estimate was set with your Corporate Developer and can be revised at any time.`,coverScreened:e=>`${e} screened`,alertTitle:"Your email alerts",alertDaily:"Morning email (Daily 5)",alertDailyHint:"Every morning: files to decide, stats, the market.",alertHour:"Send hour (Paris)",alertDays:"Days",alertWeekdays:"Weekdays",alertEveryday:"Every day",alertSaved:"Preferences saved",critTitle:"Stan’s configuration",critAngles:"Your acquisition angles",critMemoKinds:"① Instant · ~15 min — analysis, synergies, verdict. ② Detailed · ~35-40 min — market study, competitive quadrant, scenarios.",tutoTitle:"Getting started",tutoSteps:[["Your thesis","Stan inferred your angles from your online presence. Check them: everything follows."],["The screen","Every night, the market is checked against your criteria: MATCH or NO MATCH."],["Kept","MATCHes land here, memo-less. This is your work queue."],["Analyze","One click produces the memo: quantified synergies, decisive angle, verdict."],["To decide","CALL lands here. You answer YES or NO — your YESes refine Stan."],["The pace","Set memos per day. The queue drains in priority order."]],similar:"🧬 Similar",similarBusy:"🧬 Searching…",similarNote:"The kept ones enter your list at the next refresh.",similarNone:"No similar companies found (5 searches per day).",approachChannel:"Channel",loadingV2:"Loading the cockpit…",updatedAt:e=>`updated ${e}`,backV1:"← classic interface",identPause:"paused",identPauseTitle:"Rate at 0 — no memo launches. Raise the rate to resume.",identUpdatedAt:e=>`updated ${e}`,critChatTitle:"Fix the thesis in natural language",critChatHint:"Write your correction — the engine applies it or asks its question. Tomorrow’s sourcing realigns without intervention.",critChatPh:"E.g.: “rule out companies under 10 people”…",critChatSend:"Apply",critChatRunning:"⏳ The engine is working — you can close, the correction survives.",critThumbsTitle:"📊 Your thumbs journal",critThumbsEmpty:"No thumbs yet — 👍/👎 on rows teach Stan your taste.",actOnboard:"🚀 Onboard this lead",actOnboardTitle:"Triggers the full A→Z onboarding of this prospect (page, thesis, sourcing)",onboardSent:e=>`Onboarding launched for ${e} — track progress in the cockpit`,rsOpen:"🔎 Find companies to evaluate",feedDeals:"🤝 Deals today",feedNews:"📰 Sector news today",feedDealsH:"Companies from recent M&A deals and funding rounds in your sectors",feedNewsH:"Articles, videos and podcasts kept for YOUR thesis",feedEmptyDeals:"No recent deals in your sectors today — come back tomorrow, or paste an article.",feedEmptyNews:"No article kept for your thesis today — come back tomorrow, or paste a link.",feedAnalyse:"🧠 Analyse",feedNew:e=>`${e} new`,feedHint:"New since your last visit",feedOpen:"Open the source ↗",rsUrlPh:"paste the URL of an article, a video or a note",rsTextPh:"Paste the full article here",rsOr:"or",rsGo:"🔎 Summarize and find companies",rsHint:"Summary · mind map · companies",rsRunning:"Reading…",rsRunningVid:"Transcribing the video…",rsElapsed:e=>`${e}s`,rsNeed:"Paste a URL, or the full text of the article.",rsFound:e=>e?`${e} compan${e>1?"ies":"y"} found in this content.`:"No company named in this content.",rsLink:"See the published page ↗",rsPublishing:"Publishing the note…",rsPublishFail:"Note produced, page not published",rsTags:"Tags",rsClose:"Close",rsMindmap:"Mind map",rsSource:"Source ↗",rsSaving:"Saving…",rsSaved:"✓ Saved to your cockpit",rsSavedIn:e=>`✓ Saved to ${e}'s notebook`,rsSaveFail:"Note produced, NOT saved",rsArchOpen:e=>`see the ${e} research run${e>1?"s":""} already launched`,rsArchTitle:"Research already launched",rsArchBack:"← all research runs",rsArchLoading:"Loading…",rsArchEmpty:"No research saved yet.",rsArchGone:"This research is no longer available.",rsRowCounts:(e,a)=>`${e} mentioned · ${a} to evaluate`,rsPub:"Published",rsPriv:"Not published",rsCited:"Companies mentioned",rsCitedHint:"Every company named in this content.",rsMatch:"Companies that could match",rsMatchHint:"Suggested from the content’s thesis — they are not necessarily named in it.",rsEvalOne:"⚡ Evaluate",rsAddAll:e=>`＋ Add all ${e} to the list`,rsNoCompanies:"No company in this content.",rsConclusion:"What it implies",rsCriteria:"Sourcing criteria",rsSources:"Dig deeper",groupEngine:"Engine",groupNone:"None",browse:e=>`Browse the ${e}`,chainAll:e=>`Evaluate the ${e}`,chainHint:"against your thesis, one after another",winMenu:"Period",datesShort:["Today","7 days","30 days","All"],colCompany:"Company & description",grpCount:(e,a)=>`${e} to send out of ${a} sourced`,emptyTab:"No target in this tab",emptyScope:"No company in this scope",emptyWin:"The date window may have something to do with it.",emptyWinBtn:"See the whole period",emptyFilters:e=>`${e} active filter${e>1?"s":""}`,emptyFiltersBtn:"↺ Clear everything",privLink:"🔒 Private link — share it with your team only.",fitTitle:"Does this thesis match what you want?",fitSub:"One click and one sentence. That is what makes the machine yours — far more than any call on a single company.",fitYes:"Yes, that’s it",fitPartial:"Partly",fitNo:"Not really",fitPh:"e.g. aim at 20–200 people · drop leisure · add ERP connectors…",fitSend:"Send",fitSaved:"Answer saved ✓",fitDone:"✓ THE ANSWER GIVEN",fitEdit:"Edit my answer",fitKo:"Could not send — try again.",refreshRun:"Refreshing…",refreshKo:"Refresh failed — try again in a moment.",refreshDone:(e,a)=>`Refreshed ✓ · +${e} new · −${a} gone`,refreshSame:"Refreshed ✓ — no new file.",refreshSlow:"The republish is taking longer than expected — it keeps going on its side, come back in a few minutes.",fitSeen:"Your answer is readable by Proplace and by anyone opening this link: it is about the thesis, not your data.",freshBan:"🆕 Sourcing has run since you opened this screen.",freshGo:"Reload the list",thumbWhyUpPh:"What you liked — one line is enough (optional)",thumbWhyDnPh:"What was off — one line is enough (optional)",alertRules:"One email a day, and nothing at all on days without a new company: no empty mail. It goes out in this page’s language.",rowSite:"Site",rowLi:"LinkedIn",rowMail:"Email",rowTel:"Call",contWorld:"World",evalGoOn:e=>`⚡ Evaluate ${e}`,chromeEval:"Evaluate",chromeFilt:"Filters",chromeBoth:"Both",rowExtract:"🔎 Extract companies",toSendCtx:(e,a)=>`of ${e} in the edition${a>0?` (${a} without an identifiable company)`:""}`,grpCard:"today's card",grpMa:"M&A deals",grpLev:"Fundraising",grpNews:"News",grpNom:"News · Appointments",grpNewsOther:"News · Other",grpHire:"News · Hiring",edLabel:"in today's edition",edSplit:(e,a)=>`⚡ ${e} evaluable${e!==1?"s":""}${a>0?`  ·  🔎 ${a} to explore`:""}`},bl=new Set(["PROSPECTION","OUTBOUND","SALES","B2B","LEADGEN","LEAD_GEN","LEAD-GENERATION","LEAD GENERATION","SDR","PROSPECTING","COMMERCIAL"]);function vl(e){const a=String(e||"").trim().toUpperCase();return a?bl.has(a)?"PROSPECTION":a==="VC"?"VC":"MA":"MA"}const wl={fr:{VC:{identTitle:e=>`Opportunités pour ${e}`,identSearch:"Rechercher une opportunité",emptyScope:"Aucune opportunité dans ce périmètre",colCompany:"Opportunité & description"},PROSPECTION:{identTitle:e=>`Prospects pour ${e}`,identSearch:"Rechercher un prospect",emptyScope:"Aucun prospect dans ce périmètre",colCompany:"Prospect & description"}},en:{VC:{identTitle:e=>`Opportunities for ${e}`,identSearch:"Search an opportunity",emptyScope:"No opportunity in this scope",colCompany:"Opportunity & description"},PROSPECTION:{identTitle:e=>`Prospects for ${e}`,identSearch:"Search a prospect",emptyScope:"No prospect in this scope",colCompany:"Prospect & description"}}};function yl(e,a){var n;const r=vl(a);return r==="MA"?{}:((n=wl[e])==null?void 0:n[r])||{}}const kl={fr:{...Jn.fr,...gl},en:{...Jn.en,...xl}},El=`.atl2{
  
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
.atl2 .bulk .side .hint{white-space:nowrap}`,jl=`
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
/* Édito /cibles = même cadre que /actualites (.zoom + .zoom-body).
   overflow-x:hidden sur le panneau recadrait les cartes 1200 px avant
   qu'elles aient le temps d'être mises à l'échelle. On clippe UNIQUEMENT
   le .ppcard-fit, pas le fil de l'edito. */
.atl2.cibles .readpane.is-edito{overflow-x:clip;min-width:0}
.atl2.cibles .readpane .zoom{padding:22px 26px 48px;max-width:none;min-width:0;
  overflow:visible;box-sizing:border-box}
.atl2.cibles .zoom .thesis-brief{padding:0;margin:0;border:0;background:transparent;
  overflow:visible;max-width:100%}
.atl2.cibles .zoom .thesis-brief__kicker{color:#4B5E78;font-family:inherit;
  font-size:12px;font-weight:600;}
.atl2.cibles .zoom .thesis-brief__title{font-size:14.5px;font-weight:700;letter-spacing:-.015em;
  line-height:1.35}
.atl2.cibles .zoom .thesis-brief__hint{display:none}
.atl2.cibles .thesis-brief__body,.atl2.cibles .thesis-brief__acq{
  margin:14px 0 0;padding-top:14px;border-top:1px solid var(--line);
  overflow-wrap:anywhere;word-break:break-word;max-width:100%}
.atl2.cibles .thesis-brief__body *,.atl2.cibles .thesis-brief__acq *{
  max-width:100%;box-sizing:border-box}
.atl2.cibles .thesis-brief__body .ppcard-fit,
.atl2.cibles .thesis-brief__acq .ppcard-fit{max-width:100%}
.atl2.cibles .thesis-brief__body .ppcard-fit *,
.atl2.cibles .thesis-brief__acq .ppcard-fit *{max-width:none}
.atl2.cibles .thesis-brief__body .ed-lead{
  margin:0 0 20px;padding:0 0 14px;background:none;border:0;
  border-bottom:1px solid #E3E8F0;font-size:13px;line-height:1.65;color:#1B2F4E}
.atl2.cibles .thesis-brief__body .ed-lead p{margin:0 0 10px;font-size:13px;font-weight:400;color:#1B2F4E}
.atl2.cibles .thesis-brief__body .ed-lead ul{margin:0;padding-left:0;list-style:none}
.atl2.cibles .thesis-brief__body .ed-lead li{margin:0 0 8px;color:#1B2F4E;padding-left:0}
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

   Le « Dossier comite » (SWOT, P&L, synergies) ne transite PAS par
   list.json : il est lu, a la demande, sur la page memo deja publiee.
   Ce bloc-ci n'est que la SELECTION imprimable (la liste). */
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
.atl2 .dsswot{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:6px 0 10px}
.atl2 .dssq{border:1px solid var(--line);border-radius:7px;padding:8px 10px;min-width:0}
.atl2 .dssq b{display:block;font-size:11px;font-weight:700;margin-bottom:4px}
.atl2 .dssq ul{margin:0;padding-left:16px;font-size:12px;line-height:1.45;color:var(--ink)}
.atl2 .dssq.s{border-top:3px solid #0E7F3F}
.atl2 .dssq.w{border-top:3px solid #C0353A}
.atl2 .dssq.o{border-top:3px solid #2B6CB0}
.atl2 .dssq.t{border-top:3px solid #C05621}
.atl2 .dsfin{margin-top:8px}
.atl2 .dstbl{overflow-x:auto;max-width:100%;font-size:12px;line-height:1.45}
.atl2 .dstbl table{border-collapse:collapse;width:100%;font-size:11.5px}
.atl2 .dstbl th,.atl2 .dstbl td{border:1px solid var(--line);padding:3px 6px;text-align:left}
.atl2 .dsnote{margin:4px 0 0;font-size:11px;color:var(--dim);font-style:italic}
.atl2 .dsannex{margin:10px 0 0;font-size:11.5px;color:var(--sub);word-break:break-all}
.atl2 .dsannex a{color:var(--brand-d,#0E8A44)}
.atl2 .dsl a{color:var(--brand-d,#0E8A44);text-decoration:none}
.atl2 .dsl a:hover{text-decoration:underline}
@media print{
  /* le dossier est la SEULE chose qui s'imprime quand il est ouvert : la modale
     devient le document, le cockpit dessous disparait. */
  .atl2 .modal.on{position:static!important;background:none!important;padding:0!important}
  .atl2 .modal.on .mcard{width:auto!important;max-width:none!important;border:0!important;
    box-shadow:none!important;border-radius:0!important}
  .atl2 .modal.on .mh, .atl2 .dsbar{display:none!important}
  .atl2 .dossier{max-height:none!important;overflow:visible!important}
  /* v76 : break-inside:avoid sur TOUTE la page renvoyait un P&L plus haut
     qu'une feuille a la page suivante, laissant un grand vide. auto sur la
     page, avoid seulement sur les petits blocs (en-tete, SWOT). */
  .atl2 .dspage{break-inside:auto;page-break-inside:auto;break-after:page;
    page-break-after:always;border:0;padding:0}
  .atl2 .dspage:last-child{break-after:auto;page-break-after:auto}
  .atl2 .dsh, .atl2 .dsswot, .atl2 .dssq{break-inside:avoid;page-break-inside:avoid}
  .atl2 .dstbl{overflow:visible!important}
  .atl2 .dstbl table{font-size:6.8pt;white-space:normal}
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
.atl2 .dmulti.dfbtn{display:inline-flex;align-items:center;gap:6px}
.atl2 .dmulti.dfbtn em{font-style:normal;font-size:10px;font-weight:700;
  background:var(--brand,#12A150);color:#fff;border-radius:8px;padding:0 6px;line-height:16px}
.atl2 .dfpane{flex:1 0 100%;width:100%;margin:6px 0 0}
.atl2 .dfh{margin:0 0 8px;font-size:12px;color:var(--sub);line-height:1.4}
.atl2 .dfload,.atl2 .dferr,.atl2 .dfempty{margin:0;font-size:12.5px;color:var(--muted)}
.atl2 .dferr{color:#C0353A}
.atl2 .dflist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
.atl2 .dflist li{display:flex;align-items:flex-start;justify-content:space-between;
  gap:10px;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:var(--panel2)}
.atl2 .dflist li.new{border-color:var(--brand,#12A150);
  box-shadow:0 0 0 1px var(--brand,#12A150) inset}
.atl2 .dflist b{display:block;font-size:12.5px}
.atl2 .dflist span{display:block;font-size:11px;color:var(--dim);margin-top:2px}
.atl2 .dfacts{display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex:none}
.atl2 .dfacts a{font-size:11px;color:var(--brand-d,#0E8A44)}
.atl2 .dfan{border:0;cursor:pointer;padding:3px 8px;border-radius:7px;
  background:var(--brand,#12A150);color:#fff;font-size:11px;font-weight:700}
.atl2 .dfan:disabled{opacity:.55;cursor:default}
.atl2 .dfrs{margin-top:8px}

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
   largeur ») : la carte marché tient la colonne, mise à l'échelle — plus
   de marges négatives qui la faisaient déborder puis recadrer. */
.atl2.ops .readpane.is-edito .zoom .opcard.art-mktcard{max-width:100%;
  margin-left:0;margin-right:0;width:100%}
.atl2.ops .readpane.is-edito .zoom .opcard.art-mktcard .ppcard-fit{
  width:100%}

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

`,Nl=`
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
/* LA BOITE DE RECEPTION PAR SOURCE : le liseré dit « il y a du neuf ici » de
   loin, la pastille dit combien et s'ouvre d'un clic. Vert de la marque, pas
   une couleur d'alerte — c'est une bonne nouvelle, pas un probleme. */
.atl2 .se-card.has-new{border-color:var(--brand,#12A150);
  box-shadow:0 0 0 1px var(--brand,#12A150) inset}
.atl2 .se-new{border:0;cursor:pointer;padding:1px 8px;border-radius:9px;
  background:var(--brand,#12A150);color:#fff;font-size:11px;font-weight:700;
  line-height:16px;white-space:nowrap}
.atl2 .se-new:hover{background:var(--brand-d,#0E8A44)}
.atl2 .se-newsum{color:var(--brand-d,#0E8A44);font-size:11px;font-weight:700}
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
.atl2 .se-params{margin-top:6px;font-size:10px;color:var(--dim)}
.atl2 .se-params i{display:block;font-style:normal;font-weight:700;color:var(--muted);margin-bottom:4px}
.atl2 .se-chips{display:flex;flex-wrap:wrap;gap:4px;align-items:center}
.atl2 .se-chip{display:inline-block;padding:1px 7px;border-radius:999px;
  background:#fff;border:1px solid var(--line);font-size:10.5px;font-weight:650;
  color:var(--ink);max-width:100%;overflow-wrap:anywhere;word-break:break-word}
.atl2 .se-chip.soft{color:var(--muted);background:var(--panel);font-weight:500}
.atl2 .se-chipmore{font:inherit;font-size:10.5px;font-weight:700;padding:1px 7px;
  border:1px dashed var(--line2);border-radius:999px;background:#fff;cursor:pointer;color:var(--brand-d,#0E8A44)}
.atl2 .se-pnote{display:block;margin-top:4px;font-size:10px;color:var(--dim)}
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
.atl2 .eq-site{flex:1;min-width:0;display:flex;align-items:center;gap:5px;flex-wrap:nowrap;
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

/* un jour du graphe se clique : il faut que ca se voie, et que le jour
   choisi reste reperable. */
/* LES VALEURS LONGUES PRENNENT TOUTE LA LARGEUR (mesure du 30/08 : 8 criteres
   de these = 186 caracteres, une requete de sourcing jusqu'a 196). Les colonnes
   des grilles font 190 px : sans ca, douze lignes empilees. */
.atl2 .cdl.cdw,.atl2 .dsl.dsw{grid-column:1/-1}
.atl2 .cdtags{display:flex;flex-wrap:wrap;gap:4px;min-width:0}
.atl2 .cdtag{display:inline-block;padding:1px 7px;border-radius:9px;
  background:var(--brand-l,#EAF3EE);color:var(--brand-d,#0E7F3F);
  font-size:11px;line-height:16px;white-space:nowrap}

/* l'equivalence en travail humain : discrete, elle commente les chiffres
   sans leur disputer la vedette. */
.atl2 .fst-roi i{opacity:.72;font-style:normal}
.atl2 .fst-day{cursor:pointer}
/* le lien « Source » d'un dossier suit l'encre du dossier — un bleu de
   navigateur serait le seul element colore de la page, a l'ecran comme a
   l'impression. */
.atl2 .dsl a{color:inherit;text-decoration:underline;text-underline-offset:2px}
.atl2 .dsl a:hover{color:var(--brand-d)}
/* ⚠️ nth-of-TYPE, pas nth-child : le 2e ENFANT du <g> est la cible de clic
   transparente (pleine hauteur), le 2e <rect> est la barre « criblées ». Avec
   nth-child, le survol peignait un bloc opaque par-dessus les deux barres. */
.atl2 .fst-day:hover rect:nth-of-type(2){fill:#B9D4C4}
.atl2 .fst-day.on rect:nth-of-type(2){fill:#9CC7AF}
.atl2 .fst-day:focus-visible{outline:2px solid var(--brand);outline-offset:1px}

/* l'etat de la republication, a cote du bouton : il tombe apres plusieurs
   minutes, souvent quand le dirigeant regarde ailleurs — un toast de 2,4 s
   n'etait lu par personne. */
.atl2 .repubst{display:inline-flex;align-items:center;gap:7px;margin-left:8px;
  font-size:11.5px;font-weight:650;color:var(--brand-d,#0A6B3D);
  background:#EFF8F2;border:1px solid #BBE7CC;border-radius:999px;padding:3px 10px}
.atl2 .repubst button{border:0;background:none;padding:0;cursor:pointer;
  color:var(--dim);font-size:13px;line-height:1}

/* 🆕 le bandeau de fraicheur — meme palette que « depuis votre visite », il
   dit la meme chose a l'echelle de l'ecran ouvert. */
.atl2 .freshban{display:flex;align-items:center;gap:12px;flex-wrap:wrap;
  margin:0 14px 10px;padding:9px 13px;border-left:3px solid #2F9E63;
  border-radius:9px;background:#F2FBF5;font-size:12.5px;color:var(--ink)}
.atl2 .freshban span{flex:1 1 auto;min-width:0}

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

/* « Cette these colle-t-elle ? » — trois choix francs, une phrase, et la
   reponse deja donnee qui se relit d'un coup d'oeil. */
.atl2 .fitbox .fitopts{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.atl2 .fitopt{font:inherit;font-size:12.5px;font-weight:650;padding:7px 14px;
  border:1px solid var(--line);border-radius:999px;background:var(--panel);
  color:var(--ink);cursor:pointer}
.atl2 .fitopt:hover{border-color:#94A3B8}
.atl2 .fitopt.on{background:#EFF8F2;border-color:#BBE7CC;color:#0A6B3D}
.atl2 .fitbox .fitrep{margin:8px 0 2px;font-size:13.5px;line-height:1.55;
  color:var(--ink)}

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

`,Sl=`
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
.atl2.cibles .fzone>.conts,.atl2.cibles .fzone>.contpick{
  display:flex;align-items:center;gap:8px;flex-wrap:nowrap;
  overflow:visible;background:transparent;border-bottom:0;
  padding:0 var(--v3-pad) 10px}
.atl2.cibles .fzone>.conts{gap:4px;overflow-x:auto}
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
.atl2.cibles .conts .side,.atl2.cibles .contpick .resetmap,
.atl2.cibles .contpick .mapbtn{margin-left:auto;flex:none;white-space:nowrap}
.atl2.cibles .conts .side{display:flex;align-items:center;gap:12px}
.atl2.cibles .conts .side button,.atl2.cibles .contpick .resetmap,
.atl2.cibles .contpick .mapbtn{font-size:12px;font-weight:600;color:var(--pp-ink-3);
  background:none;border:0;cursor:pointer;white-space:nowrap;padding:0;
  min-width:0}
.atl2.cibles .conts .side .mapbtn,.atl2.cibles .contpick .mapbtn{min-width:132px;
  text-align:right;justify-content:flex-end}
.atl2.cibles .conts .side button:hover,.atl2.cibles .contpick .resetmap:hover,
.atl2.cibles .contpick .mapbtn:hover{color:var(--pp-green-tx)}

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
/* La bande reste COLLANTE (elle l'était déjà) mais devient opaque : avec un
   fond transparent et 16 px de gouttière au-dessus de la carte, la liste
   défilait visiblement dans l'interstice. */
.atl2.cibles .eval-stick{background:var(--pp-bg);box-shadow:none;
  padding-bottom:2px}
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
/* la fiche : cadre blanc, rayon 14. overflow:hidden recadrait les cartes
   1200 px de l'edito du jour — on clippe le .ppcard-fit, pas le zoom. */
.atl2.cibles .readpane .zoom{border:1px solid var(--pp-line);border-radius:14px;
  background:var(--pp-bg);overflow:visible;padding:0;margin:0;min-width:0}
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

/* ═══════════════════════════════════════════════════════════════════════════
   COCKPIT v3 — SECONDE PASSE : ON NE RAPIÈCE PLUS, ON REPREND LA PILE
   « Oublie l'ancienne mise en page dans le cockpit et embrasse entièrement
     la nouvelle — l'encadré de droite, la liste, tout. »

   POURQUOI LA PREMIÈRE PASSE N'A PAS TENU, mesuré au navigateur :
   la feuille porte 213 règles sur .listhead, dont une vingtaine préfixées
   « body.pp-desk » — spécificité (0,6,0). Mes règles v3, en (0,5,0), ne les
   atteignaient jamais. Relevé sur la production :

       .lh-top    order=4  padding=[0 0 8px 0]   border-bottom: 1px #E3E8F0
       .lh-title  order=5  padding=[12px 18px 0]
       .lh-funnel order=6  padding=[6px 0 0 0]
       .tuto.mini          h=0        ← le bandeau d'étape était éteint

   D'où, exactement, ce qu'on voit à l'écran :
     · « 71 criblées ce matin » à 1 px du bord de la carte — la rangée n'a
       AUCUN rembourrage gauche, alors que la ligne de titre juste en dessous
       en a 18 ;
     · un filet sous cette rangée, collé au filet de la carte : deux traits
       parallèles à 1 px l'un de l'autre — les « box collées » ;
     · l'entonnoir à ras du bord, lui aussi sans rembourrage ;
     · cliquer « Écartées » ne raconte rien : le bandeau qui doit nommer
       l'étape et proposer d'en sortir est en display:none depuis
       « body.pp-desk … .lh-funnel .tuto », qu'aucune de mes règles ne battait.

   La réponse n'est pas une retouche de plus. On reprend la pile ENTIÈRE au
   même niveau de spécificité, en dernier : ordre, rembourrages, filets. Une
   seule règle par décision, et plus aucune rangée qui touche un bord.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── ⑮ LA BARRE D'OUTILS : LA PILE REPRISE À ZÉRO ────────────────────────── */
/* Un seul filet dans toute la barre : celui du bas. Les rangées ne portent
   plus le leur — c'est ce qui collait les boîtes deux à deux. */
body.pp-desk .atl2.cibles .desk-list .listhead,
body.pp-desk .atl2.cibles .desk-list .listhead.mapoff{
  display:flex!important;flex-direction:column!important;align-items:stretch!important;
  padding:0!important;margin:0;gap:0;
  background:rgba(255,255,255,.96);
  -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);
  border:0;border-bottom:1px solid var(--pp-line);
  border-radius:var(--pp-r-m) var(--pp-r-m) 0 0}

/* rangée ① — ce qu'on regarde : « 40 retenues · Monde · winhealthgroup » */
body.pp-desk .atl2.cibles .desk-list .listhead .lh-title{
  order:1;display:flex;align-items:center;gap:8px;flex-wrap:wrap;
  padding:12px 18px 0;margin:0;border:0;width:auto}

/* rangée ② — les pastilles de contexte à gauche, les modes d'affichage à
   droite. C'est la rangée qui touchait le bord : 18 px de flanc, comme tout
   le reste de la carte. */
body.pp-desk .atl2.cibles .desk-list .listhead .lh-top,
body.pp-desk .atl2.cibles .desk-list .listhead.mapoff .lh-top{
  order:2;display:flex!important;flex-direction:row;flex-wrap:wrap;
  align-items:center;gap:8px;width:auto;min-width:0;
  padding:10px 18px 0;margin:0;border:0}
body.pp-desk .atl2.cibles .desk-list .listhead .lh-top .lh-dock{
  order:0;display:flex;align-items:center;flex-wrap:wrap;gap:8px;row-gap:8px;
  flex:0 1 auto;width:auto;padding:0;margin:0;border:0}
body.pp-desk .atl2.cibles .desk-list .listhead .lh-top .lh-acts{
  margin-left:auto;flex:none;display:flex;flex-direction:row;flex-wrap:wrap;
  align-items:center;justify-content:flex-end;gap:8px;height:auto;padding:0}

/* rangée ③ — le rabat des filtres, quand la carte est repliée. Il vivait dans
   sa propre boîte à filet : il redevient une rangée de la barre. */
body.pp-desk .atl2.cibles .desk-list .listhead .lh-tools{
  order:3;display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;
  gap:8px;width:auto;padding:10px 18px 0;margin:0;border:0}
body.pp-desk .atl2.cibles .desk-list .listhead .lh-tools .fstrip{
  display:flex;align-items:center;flex-wrap:wrap;gap:8px;width:100%;
  padding:0;margin:0;border:0;background:transparent}
body.pp-desk .atl2.cibles .desk-list .listhead .lh-tools .fstrip-a,
body.pp-desk .atl2.cibles .desk-list .listhead .lh-tools .fstrip-b{
  display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:0;margin:0;
  border:0;background:transparent}
body.pp-desk .atl2.cibles .desk-list .listhead .lh-tools .fstrip-b{flex:1 1 auto;min-width:0}

/* rangée ④ — le pavé du matin : mêmes flancs que les autres */
body.pp-desk .atl2.cibles .desk-list .listhead .lh-stats{
  order:4;width:auto;padding:8px 18px 0;margin:0;border:0}

/* rangée ⑤ — l'entonnoir, séparé des commandes par UN filet pâle */
body.pp-desk .atl2.cibles .desk-list .listhead .lh-funnel{
  order:5;width:auto;padding:12px 18px;margin:12px 0 0;
  border:0;border-top:1px solid var(--pp-line-in)}
body.pp-desk .atl2.cibles .desk-list .listhead .lh-funnel .funnel{
  display:flex;align-items:center;gap:12px;flex-wrap:wrap;
  padding:0;margin:0;border:0;background:transparent}

/* ── ⑯ LE BANDEAU D'ÉTAPE — RALLUMÉ ─────────────────────────────────────── */
/* « Quand je clique sur Écartées, ce n'est pas du tout le même comportement. »
   Et pour cause : la liste changeait bien, mais RIEN ne le disait. La maquette
   met sous l'entonnoir une ligne qui nomme l'étape, l'explique, et propose
   d'en sortir. Elle était éteinte par
       body.pp-desk .atl2.cibles .listhead .lh-funnel .tuto{display:none}
   — six classes. Il en faut sept pour la rallumer. */
body.pp-desk .atl2.cibles .desk-list .listhead .lh-funnel .tuto.mini{
  display:flex!important;align-items:center;gap:12px;flex-wrap:wrap;
  position:relative;left:auto;right:auto;
  width:auto;margin:12px -18px -12px;padding:11px 18px;
  border:0;border-top:1px solid var(--pp-line-in);border-radius:0;
  background:var(--bg,#FBFCFE);color:var(--tc,var(--pp-ink));
  box-shadow:none}
/* la flèche qui pointait le chevron actif : la maquette n'en a pas, et elle
   dépassait du cadre de la carte */
body.pp-desk .atl2.cibles .desk-list .listhead .lh-funnel .tuto.mini::before{display:none}
.atl2.cibles .listhead .tuto.mini .txt{display:flex;align-items:center;gap:12px;
  flex-wrap:wrap;flex:1 1 auto;min-width:0}
.atl2.cibles .listhead .tuto.mini .txt p{display:flex;align-items:center;gap:12px;
  flex-wrap:wrap;margin:0;max-width:none;font-weight:400}
/* ⚠️ le titre d'étape était une PASTILLE SOMBRE en capitales — la feuille pose
   « .atl2 .tuto p b.tstep{color:var(--stt)!important;background:var(--stc)} ».
   La maquette veut un titre en clair, précédé d'une pastille de 8 px. Il faut
   donc défaire le fond ET reprendre la couleur avec la même arme. */
.atl2.cibles .listhead .tuto.mini p b.tstep,
.atl2.cibles .listhead .tuto.mini .tstep{display:inline-flex;align-items:center;gap:8px;
  font-size:13.5px;font-weight:700;letter-spacing:0;text-transform:none;
  background:transparent!important;padding:0;margin:0;border-radius:0;
  line-height:1.35;color:var(--stepfg,var(--pp-ink))!important}
.atl2.cibles .listhead .tuto.mini .tstep::before{content:"";width:8px;height:8px;
  flex:none;border-radius:50%;background:var(--stepdot,var(--pp-line-dash))}
.atl2.cibles .listhead .tuto.mini .tbody{font-size:12.5px;font-weight:400;
  color:var(--pp-ink-3);line-height:1.5}
.atl2.cibles .listhead .tuto.mini .tbody b,
.atl2.cibles .listhead .tuto.mini .tbody strong{font-weight:700;color:var(--pp-ink-2)}
/* l'action de masse garde sa place, à droite, en pilule discrète */
.atl2.cibles .listhead .tuto.mini .tprim{flex:none;margin-left:auto;font:inherit;
  height:28px;box-sizing:border-box;padding:0 14px;border:1px solid var(--pp-line);
  border-radius:var(--pp-r-pill);background:var(--pp-bg);color:var(--pp-ink);
  font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap}
.atl2.cibles .listhead .tuto.mini .tprim:hover{border-color:var(--pp-line-strong)}
/* « Revenir aux retenues ✕ » — le chemin de retour de la maquette */
.atl2.cibles .listhead .tuto.mini .treset{flex:none;margin-left:auto;font:inherit;
  border:0;background:none;padding:0;cursor:pointer;white-space:nowrap;
  font-size:12px;font-weight:600;color:var(--pp-ink-4)}
.atl2.cibles .listhead .tuto.mini .tprim+.treset{margin-left:0}
.atl2.cibles .listhead .tuto.mini .treset:hover{color:var(--pp-ink-2)}
/* LES DEUX SEULES PALETTES DE LA MAQUETTE. Le bandeau prenait la couleur de
   son étape — cinq fonds différents, dont des sombres qui obligeaient à
   retourner le texte en blanc. La maquette n'en connaît que deux : vert pâle
   quand l'étape porte des lignes, blanc cassé sinon. */
body.pp-desk .atl2.cibles .desk-list .listhead .lh-funnel .tuto.mini{
  background:#FBFCFE!important;--stepdot:var(--pp-line-dash);--stepfg:var(--pp-ink);
  --tc:var(--pp-ink)}
body.pp-desk .atl2.cibles .desk-list .listhead .lh-funnel .tuto.mini.etape-on{
  background:#F4FBF7!important;--stepdot:var(--pp-green);--stepfg:var(--pp-green-tx)}
.atl2.cibles .listhead .tuto.mini.on-dark .tprim{background:var(--pp-bg);
  color:var(--pp-ink)}

/* ── ⑰ L'ÉTAT VIDE ──────────────────────────────────────────────────────── */
/* Une étape sans ligne ne doit pas rendre une liste résiduelle : la maquette
   centre un titre, une phrase, et le chemin de retour. */
.atl2.cibles .desk-list .void,
.atl2.cibles .desk-list .emptytab{padding:46px 18px;text-align:center;
  border:0;background:transparent;margin:0}
.atl2.cibles .desk-list .void h4,
.atl2.cibles .desk-list .void .vt,
.atl2.cibles .desk-list .emptytab .vt{margin:0;font-size:15px;font-weight:700;
  color:var(--pp-ink);letter-spacing:0;text-transform:none}
.atl2.cibles .desk-list .void p,
.atl2.cibles .desk-list .emptytab p{margin:6px 0 0;font-size:13px;
  color:var(--pp-ink-4);line-height:1.55}
.atl2.cibles .desk-list .void button,
.atl2.cibles .desk-list .emptytab button{font:inherit;font-size:12.5px;font-weight:700;
  margin-top:16px;background:var(--pp-bg);color:var(--pp-ink);
  border:1px solid var(--pp-line);border-radius:var(--pp-r-pill);
  padding:9px 18px;cursor:pointer}
.atl2.cibles .desk-list .void button:hover,
.atl2.cibles .desk-list .emptytab button:hover{border-color:var(--pp-line-strong)}

/* ── ⑱ LE RABAT DES FILTRES : DES PILULES DE 32 px ──────────────────────── */
/* La maquette : une rangée qui passe à la ligne, tout en pilules de 32 px,
   le champ de recherche compris. */
.atl2.cibles .listhead .lh-tools .fstrip .fsrch,
.atl2.cibles .listhead .lh-tools .fstrip input[type="text"],
.atl2.cibles .listhead .lh-tools .fstrip input:not([type]){
  height:32px;box-sizing:border-box;border-radius:var(--pp-r-pill);
  border:1px solid var(--pp-line);background:var(--pp-bg-page);
  padding:0 14px;font-size:13px;color:var(--pp-ink);outline:none}
.atl2.cibles .listhead .lh-tools .fstrip .fbtn,
.atl2.cibles .listhead .lh-tools .fstrip .dbtn,
.atl2.cibles .listhead .lh-tools .fstrip .wbtn,
.atl2.cibles .listhead .lh-tools .fstrip button{
  display:inline-flex;align-items:center;gap:7px;height:32px;box-sizing:border-box;
  padding:0 13px;border:1px solid var(--pp-line);border-radius:var(--pp-r-pill);
  background:var(--pp-bg);font:inherit;font-size:12.5px;font-weight:600;
  color:var(--pp-ink-2);cursor:pointer;white-space:nowrap;width:auto}
.atl2.cibles .listhead .lh-tools .fstrip button:hover{border-color:var(--pp-line-strong)}
.atl2.cibles .listhead .lh-tools .fstrip button.on,
.atl2.cibles .listhead .lh-tools .fstrip button[aria-pressed="true"]{
  background:var(--pp-green-chip);border-color:var(--pp-green-bd);
  color:var(--pp-green-tx);font-weight:700}
.atl2.cibles .listhead .lh-tools .fstrip .alertbtn{background:var(--pp-green);
  border-color:var(--pp-green);color:#fff;font-weight:700}
.atl2.cibles .listhead .lh-tools .fstrip .alertbtn:hover{background:var(--pp-green-h);
  border-color:var(--pp-green-h)}
.atl2.cibles .listhead .lh-tools .fstrip .fsig,
.atl2.cibles .listhead .lh-tools .fstrip button.sig{border-color:var(--pp-red-bd);
  background:var(--pp-red-bg);color:var(--pp-red-tx)}

/* ── ⑲ LES LIGNES : LA GRILLE DE LA MAQUETTE ────────────────────────────── */
/* pastille d'étape | drapeau | société & description | crible + statut | action.
   La colonne verdict retrouve la largeur qu'il lui faut : c'est elle qui loge
   le badge MATCH ET le menu de statut, et trop serrée elle les superposait
   (le libellé captait le clic à la place du bouton). */
.atl2.cibles .desk-list .row,
.atl2.cibles .desk-list .cols{
  grid-template-columns:11px 34px minmax(140px,1fr) minmax(150px,190px) 92px!important;
  gap:8px;align-items:center;box-sizing:border-box}
.atl2.cibles .desk-list .cols{padding:9px 14px;background:#F9FBFD;
  border-bottom:1px solid var(--pp-line);border-top:0}
.atl2.cibles .desk-list .c-vd{overflow:visible!important;display:flex;
  flex-wrap:nowrap;align-items:center;justify-content:flex-start;gap:7px;min-width:0}
.atl2.cibles .desk-list .c-vd>*{flex:none}
@media (max-width:1240px){
  .atl2.cibles .desk-list .row,
  .atl2.cibles .desk-list .cols{
    grid-template-columns:11px 34px minmax(0,1fr) minmax(120px,150px) 92px!important}
}

/* ── ⑳ LE PANNEAU DE DROITE — LA FICHE DE LA MAQUETTE ───────────────────── */
/* ⚠️ RÉGRESSION QUE J'AI MOI-MÊME POSÉE À LA PASSE 1 : en donnant à .zoom le
   cadre de la maquette, je lui ai retiré le rembourrage que la feuille d'avant
   posait (22px 26px 48px). Mesuré : le corps du brief se retrouvait collé aux
   deux filets de la carte. Le cadre reste sur .zoom ; le rembourrage passe au
   CONTENU, qui seul sait de combien il a besoin. */
.atl2.cibles .readpane{background:transparent;border-left:0;padding:0;
  display:flex;flex-direction:column;gap:14px;overflow:visible}
.atl2.cibles .readpane .zoom{border:1px solid var(--pp-line);border-radius:14px;
  background:var(--pp-bg);overflow:hidden;padding:0;margin:0;min-width:0;
  max-width:none;box-sizing:border-box}
/* l'édito déplié : le rembourrage de la maquette (24 px) */
.atl2.cibles .readpane .zoom>.thesis-brief,
.atl2.cibles .readpane .zoom>.zoom-body{padding:24px;margin:0;border:0;
  background:transparent;box-sizing:border-box}
.atl2.cibles .readpane .zoom .thesis-brief__body{padding:0;margin:14px 0 0}
.atl2.cibles .readpane .zoom .thesis-brief__hd{display:flex;align-items:baseline;
  justify-content:space-between;gap:12px;flex-wrap:wrap}
.atl2.cibles .readpane .zoom .thesis-brief__kicker{font-family:var(--pp-body);
  font-size:12px;font-weight:600;color:var(--pp-ink-4);letter-spacing:0;
  text-transform:none}
.atl2.cibles .readpane .zoom .thesis-brief__title{font-size:16px;font-weight:700;
  letter-spacing:-.01em;color:var(--pp-ink);margin:0}
.atl2.cibles .readpane .zoom .thesis-brief__date{font-size:12px;color:var(--pp-ink-4);
  white-space:nowrap}

/* la barre « Édito du jour », repliée : une ligne, quatre éléments */
.atl2.cibles .readpane .edito-go,
.atl2.cibles .readpane .pane-edito{display:flex;align-items:center;gap:10px;
  width:100%;box-sizing:border-box;margin:0;
  border:1px solid var(--pp-line);border-radius:var(--pp-r-m);
  padding:12px 16px;background:var(--pp-bg);font:inherit;font-size:13px;
  font-weight:700;color:var(--pp-ink);cursor:pointer;text-align:left;
  letter-spacing:0;text-transform:none;white-space:nowrap}
.atl2.cibles .readpane .edito-go::before{content:"";width:8px;height:8px;flex:none;
  border-radius:50%;background:var(--pp-green)}
.atl2.cibles .readpane .edito-go .eg-t{flex:none;font-size:13px;font-weight:700;
  color:inherit;white-space:nowrap}
.atl2.cibles .readpane .edito-go .eg-sub{flex:1 1 auto;font-size:12.5px;font-weight:400;
  color:var(--pp-ink-4);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  min-width:0}
.atl2.cibles .readpane .edito-go .eg-chev{margin-left:auto;font-size:12px;
  font-weight:600;color:var(--pp-ink-4);white-space:nowrap}
.atl2.cibles .readpane .edito-go:hover{border-color:var(--pp-green-bd);background:#FBFDFC}
.atl2.cibles .readpane .edito-go[aria-pressed="true"]{border-color:var(--pp-green-bd);
  background:var(--pp-green-chip);color:var(--pp-green-tx)}

/* la fiche : en-tête, ACTIONS À DROITE DU TITRE, onglets, corps à 20 px.
   Le balisage pose le titre, le sous-titre, puis les actions — l'une sous
   l'autre. La maquette met les actions SUR la ligne du titre. Une grille
   nommée y arrive sans toucher au composant : chaque enfant garde sa place
   dans le DOM et prend la case qu'on lui donne. */
.atl2.cibles .readpane .zoom-pipe{padding:0;display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  grid-template-areas:"k k" "hd hd" "m m" "news news" "tabs tabs";
  align-items:center;row-gap:0;column-gap:10px}
.atl2.cibles .readpane .zoom-pipe>.zoom-k{grid-area:k}
.atl2.cibles .readpane .zoom-pipe>.zoom-hd{grid-area:hd}
.atl2.cibles .readpane .zoom-pipe>.zoom-h{grid-area:h}
.atl2.cibles .readpane .zoom-pipe>.zoom-cta{grid-area:cta;justify-self:end}
.atl2.cibles .readpane .zoom-pipe>.zoom-meta{grid-area:m}
.atl2.cibles .readpane .zoom-pipe>.zoom-news{grid-area:news;margin-left:20px;
  margin-right:20px}
.atl2.cibles .readpane .zoom-pipe>.cdtabs{grid-area:tabs}
.atl2.cibles .readpane .zoom-pipe>.zoom-k,
.atl2.cibles .readpane .zoom-pipe>.zoom-h,
.atl2.cibles .readpane .zoom-pipe>.zoom-meta,
.atl2.cibles .readpane .zoom-pipe>.zoom-cta{margin-left:20px;margin-right:20px}
.atl2.cibles .readpane .zoom-pipe>.zoom-h{margin-right:0}
.atl2.cibles .readpane .zoom-pipe>.zoom-cta{margin-left:0;margin-top:0}
/* les boutons de la fiche : marine plein + un carré à filet, comme la maquette */
.atl2.cibles .readpane .zoom-cta .btn,
.atl2.cibles .readpane .zoom-cta button,
.atl2.cibles .readpane .zoom-cta .memobtn,
.atl2.cibles .readpane .zoom-cta .oc-cta{font:inherit;font-size:12.5px;font-weight:700;
  background:var(--pp-navy);color:#fff;border:0;border-radius:var(--pp-r-s);
  padding:8px 14px;cursor:pointer;white-space:nowrap}
.atl2.cibles .readpane .zoom-cta .btn:hover,
.atl2.cibles .readpane .zoom-cta button:hover,
.atl2.cibles .readpane .zoom-cta .oc-cta:hover{background:var(--pp-navy-h)}
.atl2.cibles .readpane .zoom-cta .btn.g,
.atl2.cibles .readpane .zoom-cta .btn.d,
.atl2.cibles .readpane .zoom-cta .ghost{background:var(--pp-bg);color:var(--pp-ink-2);
  border:1px solid var(--pp-line)}
.atl2.cibles .readpane .zoom-cta .btn.g:hover,
.atl2.cibles .readpane .zoom-cta .btn.d:hover,
.atl2.cibles .readpane .zoom-cta .ghost:hover{background:var(--pp-bg);
  border-color:var(--pp-line-strong)}
.atl2.cibles .readpane .zoom-k{margin-top:20px;font-size:12px;font-weight:600;
  color:var(--pp-ink-4);letter-spacing:0;text-transform:none}
.atl2.cibles .readpane .zoom-h{margin-top:6px;margin-bottom:0;font-size:21px;
  font-weight:700;letter-spacing:-.01em;color:var(--pp-ink);line-height:1.2}
.atl2.cibles .readpane .zoom-meta{margin-top:4px;margin-bottom:0;font-size:13px;
  color:var(--pp-ink-3);display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.atl2.cibles .readpane .zoom-meta span+span::before{content:"·";
  color:var(--pp-line-dash);margin-right:8px}
.atl2.cibles .readpane .zoom-cta{margin-top:14px;margin-bottom:0;display:flex;
  align-items:center;gap:8px;flex-wrap:wrap}
/* la rangée d'onglets mord sur le rayon de la carte : 12 px de flanc, pas 20 */
.atl2.cibles .readpane .cdtabs{margin:14px 0 0}
.atl2.cibles .readpane .cdnav{display:flex;gap:2px;padding:0 12px;overflow-x:auto;
  border-bottom:1px solid var(--pp-line-in);scrollbar-width:none;margin:0}
.atl2.cibles .readpane .cdnav::-webkit-scrollbar{display:none;height:0}
.atl2.cibles .readpane .cdnav button{flex:none;border:0;background:none;font:inherit;
  font-size:13px;font-weight:600;color:var(--pp-ink-4);padding:10px 9px 11px;
  border-bottom:2px solid transparent;margin-bottom:-1px;white-space:nowrap;
  cursor:pointer;letter-spacing:0;text-transform:none;border-radius:0}
.atl2.cibles .readpane .cdnav button:hover{color:var(--pp-ink-2)}
.atl2.cibles .readpane .cdtabs .cdnav button.on,
.atl2.cibles .readpane .cdtabs .cdnav button[aria-selected="true"]{
  color:var(--pp-ink);border-bottom:2px solid var(--pp-green);background:transparent}
.atl2.cibles .readpane .cdbody{padding:20px;margin:0}

/* le corps de l'onglet : la typographie de la maquette */
.atl2.cibles .readpane .cdbody h3,
.atl2.cibles .readpane .cdbody .cdh{margin:22px 0 8px;font-size:14px;font-weight:700;
  color:var(--pp-ink);letter-spacing:0;text-transform:none}
.atl2.cibles .readpane .cdbody>h3:first-child,
.atl2.cibles .readpane .cdbody>.cdh:first-child{margin-top:0}
.atl2.cibles .readpane .cdbody p,
.atl2.cibles .readpane .cdbody .cdtxt{margin:0 0 10px;font-size:13.5px;
  line-height:1.7;color:var(--pp-ink-2)}
.atl2.cibles .readpane .cdbody .cdtxt:last-child{margin-bottom:0}
/* le visuel du mémo : 16/9, rayon 12, 18 px d'air en dessous */
.atl2.cibles .readpane .cdbody img,
.atl2.cibles .readpane .cdbody .cdimg{display:block;width:100%;height:auto;
  aspect-ratio:16/9;object-fit:cover;border-radius:var(--pp-r-m);
  margin:0 0 18px;background:var(--pp-bg-page)}
/* le verdict en tête d'onglet : une pastille, pas une bannière */
.atl2.cibles .readpane .cdv1{display:inline-flex;align-items:center;gap:8px;
  margin:0 0 12px;padding:0;border:0;background:transparent;
  font-size:11.5px;font-weight:700;color:var(--pp-green-tx);
  letter-spacing:0;text-transform:none}
.atl2.cibles .readpane .cdv1.out{color:var(--pp-red-tx)}
.atl2.cibles .readpane .cdv1 .cdw{font-weight:400;color:var(--pp-ink-4)}
/* les chiffres en pastilles */
.atl2.cibles .readpane .md-head{display:flex;align-items:center;gap:8px;
  flex-wrap:wrap;margin:0 0 12px}
.atl2.cibles .readpane .md-score,
.atl2.cibles .readpane .md-tag{display:inline-flex;align-items:center;height:28px;
  box-sizing:border-box;padding:0 12px;border-radius:var(--pp-r-pill);
  border:1px solid var(--pp-green-bd);background:var(--pp-green-chip);
  color:var(--pp-green-tx);font-size:12px;font-weight:700;white-space:nowrap;
  letter-spacing:0;text-transform:none}
.atl2.cibles .readpane .md-tag{border-color:var(--pp-line);
  background:var(--pp-bg-page);color:var(--pp-ink-2);font-weight:600}
.atl2.cibles .readpane .md-amber{border-color:var(--pp-amber-bd);
  background:var(--pp-amber-bg);color:var(--pp-amber-tx)}

/* le ruban de sections du mémo : pastilles de 28 px, l'active en vert plein */
.atl2.cibles .readpane .mdsec,
.atl2.cibles .readpane .cdsecs{display:flex;gap:6px;margin:10px 0 0;
  overflow-x:auto;padding-bottom:2px;scrollbar-width:none}
.atl2.cibles .readpane .mdsec::-webkit-scrollbar,
.atl2.cibles .readpane .cdsecs::-webkit-scrollbar{display:none;height:0}
.atl2.cibles .readpane .mdsec button,
.atl2.cibles .readpane .cdsecs button{flex:none;display:inline-flex;align-items:center;
  height:28px;box-sizing:border-box;border:1px solid var(--pp-line);
  background:var(--pp-bg);color:var(--pp-ink-2);border-radius:var(--pp-r-pill);
  padding:0 13px;font:inherit;font-size:12px;font-weight:600;cursor:pointer;
  white-space:nowrap;letter-spacing:0;text-transform:none}
.atl2.cibles .readpane .mdsec button.on,
.atl2.cibles .readpane .cdsecs button.on{background:var(--pp-green);color:#fff;
  border-color:var(--pp-green)}

/* le tableau financier, la pièce jointe : deux cartes à bandeau */
.atl2.cibles .readpane .cdbody table{width:100%;border-collapse:collapse;
  font-size:12.5px;margin:14px 0 0;
  border:1px solid var(--pp-line-in);border-radius:var(--pp-r-m);overflow:hidden}
.atl2.cibles .readpane .cdbody table th{background:var(--pp-bg-zone);
  color:var(--pp-ink-4);font-size:11px;font-weight:600;letter-spacing:0;
  text-transform:none;padding:8px 14px;text-align:left;
  border-bottom:1px solid var(--pp-line-in)}
.atl2.cibles .readpane .cdbody table td{padding:8px 14px;font-size:12.5px;
  color:var(--pp-ink-3);border-top:1px solid var(--pp-line-in2)}
.atl2.cibles .readpane .cdbody table td:first-child{color:var(--pp-ink)}

/* le panneau vide, avant qu'une ligne soit ouverte */
.atl2.cibles .readpane .readpane-empty{border:1px dashed var(--pp-line);
  border-radius:var(--pp-r-m);padding:28px 20px;text-align:center;font-size:13px;
  color:var(--pp-ink-4);margin:0;background:var(--pp-bg)}

/* ── ㉑ CE QUE LA MAQUETTE NE MONTRE PAS ─────────────────────────────────── */
/* La flèche de la barre d'aperçu dépassait de la carte de liste. */
.atl2.cibles .desk-list .listhead .tuto::before,
.atl2.cibles .desk-list .listhead .tuto::after{display:none!important}

/* ── ㉒ « COLLER UNE URL ET ÉVALUER » : LE TITRE DE SECTION ──────────────── */
/* Le bloc n'avait pas de titre : on tombait sur un champ nu. La maquette le
   nomme et l'explique d'une ligne — c'est ce qui fait la différence entre une
   carte et une barre d'outils. */
.atl2.cibles .demand .dhead{display:flex;align-items:baseline;gap:12px;
  flex-wrap:wrap;margin:0 0 14px}
.atl2.cibles .demand .dhead h2{margin:0;font-size:16px;font-weight:700;
  letter-spacing:-.01em;color:var(--pp-ink)}
.atl2.cibles .demand .dhead .dhint{font-size:12.5px;color:var(--pp-ink-4);
  line-height:1.5}

/* ── ㉓ LA PHRASE DE PIED DE LISTE ───────────────────────────────────────── */
/* « Comme sur Netflix, chaque 👍 / 👎 affine ce que Stan vous montre ensuite »
   — dans la maquette elle vit DANS la carte, au même rembourrage que les
   lignes, pas flottante en dessous. */
.atl2.cibles .desk-list .learn{margin:0;padding:14px 18px;font-size:12.5px;
  line-height:1.55;color:var(--pp-ink-4);border-top:1px solid var(--pp-line-in);
  background:transparent}
.atl2.cibles .desk-list .learn a,
.atl2.cibles .desk-list .learn button{font-weight:600;color:var(--pp-green-tx)}

/* ── ㉔ LA VÉRIFICATION DU SITE : la carte rouge de la maquette ──────────── */
.atl2.cibles .demand .rsp.on{margin:12px 0 0;padding:14px 18px;
  border:1px solid #F3D2D4;border-radius:var(--pp-r-m);background:#FEF8F8}
.atl2.cibles .demand .rsp.on .rsp-in{display:flex;align-items:center;gap:10px;
  flex-wrap:wrap}
.atl2.cibles .demand .rsp.on .rspaste{display:inline-flex;align-items:center;
  height:30px;box-sizing:border-box;padding:0 13px;font:inherit;font-size:12.5px;
  font-weight:600;border:1px solid var(--pp-line);border-radius:var(--pp-r-pill);
  background:var(--pp-bg);color:var(--pp-ink);cursor:pointer;white-space:nowrap}

/* ── ㉕ LE MODE « LIGNE » ET LE MODE « MAXI » ─────────────────────────────── */
/* Ils gardaient l'apparence d'avant : cartes à angles vifs, filets sombres. */
.atl2.cibles .desk-list .list.maxi{padding:16px 18px;gap:12px;
  background:transparent}
.atl2.cibles .desk-list .list.maxi .dcard,
.atl2.cibles .desk-list .list .dcard{border:1px solid var(--pp-line-in);
  border-radius:var(--pp-r-m);padding:16px 18px;background:var(--pp-bg);
  box-shadow:none}
.atl2.cibles .desk-list .list.maxi .dcard:hover,
.atl2.cibles .desk-list .list .dcard:hover{border-color:var(--pp-line-strong)}
.atl2.cibles .desk-list .list.ligne{padding:6px 12px 16px}

/* ═══════════════════════════════════════════════════════════════════════════
   TROISIÈME PASSE — LES POINTS RELEVÉS À L'ÉCRAN (30/08)
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── ③ « LE TEXTE FAIT GRIS SUR VERT FONCÉ ET DEVIENT ILLISIBLE » ────────── */
/* Mesuré : sur l'étape active, le fond passe bien au vert #12A150, mais le
   LIBELLÉ garde l'encre #16233A à 75 % d'opacité — de l'encre sombre sur du
   vert sombre. Seul le nombre passait au blanc. */
body.pp-desk .atl2.cibles .listhead .chain2 .step[aria-selected="true"],
body.pp-desk .atl2.cibles .listhead .chain2 .step[aria-selected="true"] .l,
body.pp-desk .atl2.cibles .listhead .chain2 .step[aria-selected="true"] .n{
  color:#fff!important}
body.pp-desk .atl2.cibles .listhead .chain2 .step[aria-selected="true"] .l{opacity:.8}
body.pp-desk .atl2.cibles .listhead .offtrack .off[aria-selected="true"]{
  border-color:currentColor}

/* ── ④ LA BASCULE DE LA CARTE : le carré de la maquette, et elle ne bouge pas */
/* L'emoji partait avec le libellé, et le libellé changeant de longueur, le lien
   sautait d'une dizaine de pixels à chaque clic. La maquette met un carré de
   15 px à filet, et le texte reste où il est. */
.atl2.cibles .conts .side button{display:inline-flex;align-items:center;gap:7px;
  justify-content:flex-end}
.atl2.cibles .conts .side button::before{content:none}

/* ── ⑤ « PAS D ARRIÈRE-PLAN GRIS NI DE BARRE DE SÉPARATEUR » ─────────────── */
/* La bande d évaluation portait un fond #F9FBFD et une ombre d un pixel qui
   faisait office de filet : deux traits gris autour d une carte blanche. */
body.pp-desk .atl2.cibles .eval-stick,
.atl2.cibles .eval-stick{background:#fff!important;box-shadow:none!important;
  border:0;padding-bottom:0}

/* ── ② L ONGLET « À ÉVALUER » : de vrais boutons, et une seule ligne en bas ── */
.atl2.cibles .evalq{display:flex;flex-direction:column;gap:0;
  margin:14px 18px 18px;padding:0;border:1px solid var(--pp-line-in);
  border-radius:var(--pp-r-m);background:var(--pp-bg)}
.atl2.cibles .evalq .eq-rows{padding:14px 16px 0;gap:6px}
/* ⚠️ la colonne du bouton faisait 26 px : de quoi loger un éclair, pas un mot */
.atl2.cibles .eq-row,.atl2.cibles .eq-head{gap:10px;align-items:center;
  grid-template-columns:minmax(140px,190px) minmax(110px,180px) minmax(0,1fr) 88px 104px 20px}
.atl2.cibles .eq-go{display:inline-flex;align-items:center;justify-content:center;
  gap:6px;height:28px;box-sizing:border-box;width:100%;padding:0 12px;
  border:1px solid var(--pp-green);border-radius:var(--pp-r-pill);
  background:var(--pp-green);color:#fff;font:inherit;font-size:12px;
  font-weight:700;white-space:nowrap;cursor:pointer}
.atl2.cibles .eq-go b{font-weight:700}
.atl2.cibles .eq-go:hover:not(:disabled){background:var(--pp-green-h);
  border-color:var(--pp-green-h)}
.atl2.cibles .eq-go:disabled{background:var(--pp-bg);color:var(--pp-line-dash);
  border-color:var(--pp-line-in);cursor:not-allowed}
.atl2.cibles .evalq .eq-add{display:inline-flex;align-items:center;height:30px;
  box-sizing:border-box;padding:0 14px;margin:12px 0 14px;font:inherit;
  font-size:12.5px;font-weight:600;color:var(--pp-ink-3);
  border:1px dashed var(--pp-line-dash);border-radius:var(--pp-r-pill);
  background:transparent;cursor:pointer;align-self:flex-start}
.atl2.cibles .evalq .eq-add:hover{border-color:var(--pp-green-soft);
  color:var(--pp-green-tx)}
/* la rangée du bas : chercher à gauche, lancer à droite — sur UNE ligne */
/* ⚠️ « flex-wrap:wrap » sur le pied ne suffisait pas : mesure sur la
   production, les recherches finissaient a y=545 et le bouton a y=610 — deux
   lignes, pas une. Les suggestions occupaient toute la largeur disponible et
   poussaient le bouton au tour suivant. C'est « nowrap » qu'il faut, et c'est
   la zone de gauche qui se replie sur elle-meme. */
.atl2.cibles .evalq .eq-foot{display:flex;align-items:center;gap:12px;
  flex-wrap:nowrap;padding:12px 16px;margin:0;
  border-top:1px solid var(--pp-line-in);background:var(--pp-bg-zone);
  border-radius:0 0 var(--pp-r-m) var(--pp-r-m)}
@media (max-width:900px){.atl2.cibles .evalq .eq-foot{flex-wrap:wrap}}
.atl2.cibles .evalq .eq-sugg{display:flex;align-items:center;flex-wrap:wrap;gap:8px;
  flex:1 1 auto;min-width:0;margin:0;padding:0;border:0;background:transparent}
.atl2.cibles .evalq .side{display:flex;flex-direction:row;align-items:center;
  gap:10px;flex:0 0 auto;margin-left:auto;padding:0;width:auto;border:0;
  background:transparent}
/* la phrase d'aide repetait ce que le bouton dit deja, et mangeait 220 px
   de la ligne qu'on cherche a tenir */
.atl2.cibles .evalq .side .hint{display:none}
.atl2.cibles .evalq .side .evalbtn{height:38px;box-sizing:border-box;width:auto;
  padding:0 22px;border-radius:var(--pp-r-pill);font-size:13px;font-weight:700;
  background:var(--pp-navy);color:#fff;border:0;box-shadow:none}
.atl2.cibles .evalq .side .evalbtn:hover:not(:disabled){background:var(--pp-navy-h)}
.atl2.cibles .evalq .side .evalbtn:disabled{background:var(--pp-line-in);
  color:var(--pp-ink-5)}
.atl2.cibles .evalq .side .dmulti{height:30px;padding:0 12px;font-size:12px}
.atl2.cibles .evalq .eq-sugg-go,
.atl2.cibles .evalq .eq-sugg-go2{display:inline-flex;align-items:center;height:30px;
  box-sizing:border-box;padding:0 14px;font:inherit;font-size:12.5px;font-weight:600;
  border:1px solid var(--pp-line);border-radius:var(--pp-r-pill);
  background:var(--pp-bg);color:var(--pp-ink-2);cursor:pointer;white-space:nowrap}
.atl2.cibles .evalq .eq-sugg-go:hover,
.atl2.cibles .evalq .eq-sugg-go2:hover{border-color:var(--pp-line-strong)}

/* ── LA COLONNE ACTION DÉBORDAIT DE LA CARTE ─────────────────────────────── */
/* Mesuré : le bouton « ✗ Non » finissait à 890 px pour une carte qui s'arrête
   à 885. La colonne faisait 92 px et devait loger DEUX boutons de 56 —
   plus, parfois, le bouton mémo. Elle passe à 122 px, et le groupe OUI/NON
   se replie plutôt que de sortir du cadre. */
.atl2.cibles .desk-list .row,
.atl2.cibles .desk-list .cols{
  grid-template-columns:11px 34px minmax(120px,1fr) minmax(150px,190px) 122px!important}
@media (max-width:1240px){
  .atl2.cibles .desk-list .row,
  .atl2.cibles .desk-list .cols{
    grid-template-columns:11px 34px minmax(0,1fr) minmax(120px,150px) 122px!important}
}
.atl2.cibles .desk-list .row>.cell{min-width:0;overflow:hidden}
.atl2.cibles .desk-list .row .yn{flex-wrap:wrap;justify-content:flex-end;
  row-gap:4px;max-width:100%}
.atl2.cibles .desk-list .row .ynb{padding:5px 9px}

/* ── ⑧ LE BRIEF DU JOUR, AUX VALEURS DE LA MAQUETTE ─────────────────────── */
.atl2.cibles .readpane .thesis-brief__hd{display:flex;align-items:baseline;
  justify-content:space-between;gap:12px;flex-wrap:wrap;margin:0 0 4px}
.atl2.cibles .readpane .thesis-brief__kicker{font-size:12px;font-weight:600;
  color:var(--pp-ink-4);letter-spacing:0;text-transform:none;order:-1;
  flex:1 1 100%}
.atl2.cibles .readpane .thesis-brief__title{font-size:16px;font-weight:700;
  letter-spacing:-.01em;color:var(--pp-ink);margin:0;line-height:1.3}
.atl2.cibles .readpane .thesis-brief__date{font-size:12px;color:var(--pp-ink-4);
  white-space:nowrap}
.atl2.cibles .readpane .thesis-brief__sw{display:flex;gap:6px;flex-wrap:wrap;
  margin:14px 0 0}
.atl2.cibles .readpane .thesis-brief__sw button{display:inline-flex;
  align-items:center;height:28px;box-sizing:border-box;padding:0 13px;font:inherit;
  font-size:12px;font-weight:600;border:1px solid var(--pp-line);
  border-radius:var(--pp-r-pill);background:var(--pp-bg);color:var(--pp-ink-2);
  cursor:pointer;white-space:nowrap}
.atl2.cibles .readpane .thesis-brief__sw button[aria-pressed="true"],
.atl2.cibles .readpane .thesis-brief__sw button.on{background:var(--pp-green);
  border-color:var(--pp-green);color:#fff;font-weight:700}
.atl2.cibles .readpane .thesis-brief__body{font-size:14px;line-height:1.7;
  color:var(--pp-ink)}
.atl2.cibles .readpane .thesis-brief__body p{margin:12px 0 0;font-size:14px;
  line-height:1.7}
/* mesure : le chapeau rendait a 15 px parce qu'il n'a pas toujours de <p>
   a l'interieur — la regle doit porter sur le bloc lui-meme */
.atl2.cibles .readpane .ed-lead{margin:16px 0 0;padding-left:14px;font-size:14px;
  line-height:1.7;border-left:2px solid var(--pp-green)}
.atl2.cibles .readpane .ed-lead p{margin:0 0 8px;font-size:14px;line-height:1.7}
.atl2.cibles .readpane .ed-lead ul{margin:0;padding-left:18px}
.atl2.cibles .readpane .ed-lead li{margin:0 0 8px;font-size:14px;line-height:1.7}
/* ⚠️ PIEGE QUE JE ME SUIS POSE MOI-MEME : les intertitres du brief SONT des
   <p>. Ma propre regle « .atl2.cibles .readpane .thesis-brief__body p » —
   quatre classes ET un element — battait « .atl2.cibles .readpane .tb-sec »,
   qui n'en a que quatre. Mesure : 14 px au lieu de 12. Il faut donc que les
   libelles portent le meme parent que le corps. Et « .tb-these » restait a
   10 px, la petite capitale que le kit bannit nommement : je lui donnais une
   couleur et une graisse, jamais une taille. */
.atl2.cibles .readpane .thesis-brief__body .tb-sec,
.atl2.cibles .readpane .tb-sec{margin:22px 0 0;font-size:12px!important;
  font-weight:600;color:var(--pp-ink-4);letter-spacing:0;text-transform:none}
.atl2.cibles .readpane .thesis-brief__body .tb-geo,
.atl2.cibles .readpane .tb-geo{margin:12px 0 0;font-size:12px!important;
  font-weight:600;color:var(--pp-ink-4)}
.atl2.cibles .readpane .thesis-brief__body .tb-these,
.atl2.cibles .readpane .tb-these{font-size:12px!important;
  color:var(--pp-green-tx);font-weight:700}
.atl2.cibles .readpane .thesis-brief__body em{font-style:italic;
  color:var(--pp-ink-3)}
.atl2.cibles .readpane .thesis-brief__body a{font-weight:700;
  color:var(--pp-green-tx);text-underline-offset:3px}
.atl2.cibles .readpane .thesis-brief__body hr{border:0;
  border-top:1px solid var(--pp-line-in);margin:18px 0}
.atl2.cibles .readpane .thesis-brief__body img{display:block;width:100%;
  height:auto;border-radius:var(--pp-r-m);margin:14px 0}

/* ── ⑨ LA FICHE : que rien ne dépasse, que rien ne se chevauche ──────────── */
.atl2.cibles .readpane .cdbody{overflow-wrap:anywhere;word-break:normal}
.atl2.cibles .readpane .cdbody>*{max-width:100%}
.atl2.cibles .readpane .cdbody ul,
.atl2.cibles .readpane .cdbody ol{margin:10px 0;padding-left:18px}
.atl2.cibles .readpane .cdbody li{margin:0 0 6px;font-size:13px;line-height:1.6;
  color:var(--pp-ink-2)}
.atl2.cibles .readpane .cdbody hr{border:0;border-top:1px solid var(--pp-line-in);
  margin:22px 0}
.atl2.cibles .readpane .cdbody pre,
.atl2.cibles .readpane .cdbody code{font-family:var(--pp-mono);font-size:12px;
  background:var(--pp-bg-page);border-radius:6px;padding:2px 6px;
  white-space:pre-wrap;overflow-wrap:anywhere}
.atl2.cibles .readpane .cdbody div:has(>table){overflow-x:auto;
  scrollbar-width:none;border-radius:var(--pp-r-m)}
.atl2.cibles .readpane .cdbody div:has(>table)::-webkit-scrollbar{display:none;height:0}

/* ── ⑨ LA FICHE, LIGNE POUR LIGNE COMME LA MAQUETTE ─────────────────────── */
/* « Jumeaux de vos meilleures cibles · 16/08/2026 » puis, sur UNE ligne, le
   nom et les gestes ; en dessous « secteur · pays · stade » ; puis les
   onglets. Mesuré avant : les trois metadonnees etaient collees sans le
   moindre separateur — « Insurtech de Mobilite InternationaleFranceSeed ». */
.atl2.cibles .readpane .zoom-pipe{padding:20px 20px 0}
.atl2.cibles .readpane .zoom-k{font-size:12px;font-weight:600;
  color:var(--pp-ink-4);letter-spacing:0;text-transform:none;margin:0}
.atl2.cibles .readpane .zoom-hd{display:flex;align-items:center;gap:10px;
  margin-top:6px}
.atl2.cibles .readpane .zoom-hd .zoom-h{margin:0;font-size:21px;font-weight:700;
  letter-spacing:-.01em;line-height:1.2;min-width:0;overflow-wrap:anywhere}
.atl2.cibles .readpane .zoom-hd .zoom-cta{margin:0 0 0 auto;display:flex;gap:8px;
  flex:none;align-items:center}
.atl2.cibles .readpane .zoom-meta{margin:4px 0 0;font-size:13px;
  color:var(--pp-ink-3);display:flex;flex-wrap:wrap;align-items:baseline;gap:0}
.atl2.cibles .readpane .zoom-meta span+span::before{content:"·";
  color:var(--pp-line-dash);margin:0 7px}
/* les deux gestes de l'en-tete : la pastille de statut et le carre du memo */
.atl2.cibles .readpane .zoom-cta .oc-cta,
.atl2.cibles .readpane .zoom-cta .stbtn,
.atl2.cibles .readpane .zoom-cta .memobtn{font:inherit;font-size:12.5px;
  font-weight:700;border-radius:var(--pp-r-s);padding:8px 14px;height:auto;
  white-space:nowrap;cursor:pointer}
.atl2.cibles .readpane .zoom-cta .oc-cta{background:var(--pp-navy);color:#fff;
  border:0}
.atl2.cibles .readpane .zoom-cta .oc-cta:hover{background:var(--pp-navy-h)}
/* les onglets : filet clair, soulignement de 2 px sur l'onglet courant */
.atl2.cibles .readpane .cdnav{display:flex;gap:2px;padding:0 12px;
  border-bottom:1px solid var(--pp-line-in);margin-top:14px;overflow-x:auto;
  scrollbar-width:none}
.atl2.cibles .readpane .cdnav::-webkit-scrollbar{display:none;height:0}
.atl2.cibles .readpane .cdnav button{font-size:13px;font-weight:600;
  color:var(--pp-ink-4);padding:10px 9px 11px;margin-bottom:-1px;
  border:0;border-bottom:2px solid transparent;background:transparent;
  white-space:nowrap;cursor:pointer}
.atl2.cibles .readpane .cdnav button.on{color:var(--pp-ink);
  border-bottom-color:var(--pp-green)}
.atl2.cibles .readpane .cdbody{padding:20px}
.atl2.cibles .readpane .cdbody h3{margin:22px 0 8px;font-size:14px;font-weight:700;
  color:var(--pp-ink)}
.atl2.cibles .readpane .cdbody h3:first-child{margin-top:0}
.atl2.cibles .readpane .cdtxt,.atl2.cibles .readpane .cdbody p{font-size:13.5px;
  line-height:1.7;color:var(--pp-ink-2)}
/* le visuel du memo : 16/9, rayon 12, jamais deforme */
.atl2.cibles .readpane .cdbody img{display:block;width:100%;height:auto;
  border-radius:12px;margin:0 0 18px}

/* ── PASSE 30/08 (14 points) ─────────────────────────────────────────────── */

/* 1. Site | Source : un segment joint, plus deux liens écartés de 10 px. */
.atl2.cibles .demand .dacts{gap:10px}
.atl2.cibles .demand .dacts .sitepair{display:inline-flex;align-items:stretch;
  height:42px;box-sizing:border-box;border:1px solid var(--pp-line);
  border-radius:999px;overflow:hidden;background:var(--pp-bg);flex:none}
.atl2.cibles .demand .dacts .sitepair .viewbtn.sm{height:100%;border:0;border-radius:0;
  padding:0 16px;font-size:12.5px;font-weight:600;color:var(--pp-ink-3);
  background:transparent;gap:6px}
.atl2.cibles .demand .dacts .sitepair .viewbtn.sm + .viewbtn.sm{
  border-left:1px solid var(--pp-line)}
.atl2.cibles .demand .dacts .sitepair .viewbtn.sm:not(.off){background:var(--pp-navy);
  color:#fff;border-color:transparent}
.atl2.cibles .demand .dacts .sitepair .viewbtn.sm.off{opacity:.4}
.atl2.cibles .demand .dacts .sitepair .viewbtn.sm{flex-wrap:nowrap;white-space:nowrap}
.atl2.cibles .demand .dacts .sitepair .xwin{font-size:9px;line-height:1;margin-left:3px;
  opacity:.7}
.atl2.cibles .demand .dacts .viewbtn.sm:first-of-type,
.atl2.cibles .demand .dacts .viewbtn.sm:last-of-type{border-radius:0;border:0}

/* 2. Le menu de facettes passait SOUS la carte couverture (z-index 5 vs 6). */
.atl2.cibles .stage:not(.folded) .map-pulse{z-index:4}
.atl2.cibles .stage:not(.folded) .fbar{z-index:8}
.atl2.cibles .stage:not(.folded) .fpanel{z-index:18;max-height:calc(100% - 24px);
  border-radius:12px;overflow:auto;box-shadow:0 16px 40px rgba(15,29,51,.16)}
.atl2.cibles .listhead{overflow:visible;z-index:40}
.atl2.cibles .listhead .fmenu-pop,
.atl2.cibles .listhead .winpick-pop,
.atl2.cibles .listhead .fpanel,
.atl2.cibles .listhead .sortmenu,
.atl2.cibles .listhead .dolist,
.atl2.cibles .contpick-pop{z-index:420}

/* 4-6. File + rythme rentrent dans Moteur de mémos. Plus de 3e carte. */
.atl2.cibles .idmain>.filec{display:none}
.atl2.cibles .idmain>.engine{flex:1.8 1 380px;min-width:280px;flex-wrap:wrap;
  row-gap:8px}
.atl2.cibles .idmain .erate{margin:0}
.atl2.cibles .idmain .erate button{min-width:28px;height:26px;padding:0 8px;
  font-size:11px;border-radius:7px}
.atl2.cibles .idmain .engine .ego{margin-left:auto}

/* 8. Modale Connecter — coque de la maquette v3. */
.atl2 .mh-txt{min-width:0;flex:1}
.atl2 .mh-txt h2{margin:0}
.atl2 .mh-lead{margin:4px 0 0;font-size:13.5px;line-height:1.45;color:#61708A;
  font-weight:400}
.atl2 .mcard.m-plug{border-radius:18px;overflow:hidden}
.atl2 .mcard.m-plug .mh{align-items:flex-start;gap:14px;padding:22px 26px 18px;
  border-bottom:1px solid #EEF2F7}
.atl2 .mcard.m-plug .mh .no{display:none}
.atl2 .mcard.m-plug .mh h2{font-size:19px;font-weight:700}
.atl2 .mcard.m-plug .mb{padding:22px 26px 26px}
.atl2 .mcard.m-plug .plugetat{display:flex;align-items:center;gap:10px;
  background:#F9FBFD;border:1px solid #E3E8F0;border-radius:12px;
  padding:12px 16px;margin:0 0 22px}
.atl2 .mcard.m-plug .plugetat.on{background:#EAF6EF;border-color:#BFE6CF}
.atl2 .mcard.m-plug .plugetat i{width:8px;height:8px;border-radius:50%;
  background:#8FA0B8;flex:none}
.atl2 .mcard.m-plug .plugetat.on i{background:#12A150}
.atl2 .mcard.m-plug .plugetat b{font-size:13px;font-weight:700;color:#16233A}
.atl2 .mcard.m-plug .plugstep{display:flex;align-items:baseline;gap:10px;
  margin:0 0 12px}
.atl2 .mcard.m-plug .plugstep + .plugstep,
.atl2 .mcard.m-plug .mfield + .plugstep,
.atl2 .mcard.m-plug .cpy + .plugstep,
.atl2 .mcard.m-plug .mnote + .plugstep{margin-top:24px}
.atl2 .mcard.m-plug .pnum{width:22px;height:22px;flex:none;display:grid;
  place-items:center;border-radius:50%;background:#0F1D33;color:#fff;
  font-size:11.5px;font-weight:700}
.atl2 .mcard.m-plug .plugstep h4{margin:0;font-size:15px;font-weight:700;color:#16233A}
.atl2 .mcard.m-plug .plugdests{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));
  gap:10px;margin:0 0 8px}
.atl2 .mcard.m-plug .plugdest{display:block;text-align:left;border:1.5px solid #E3E8F0;
  background:#fff;border-radius:14px;padding:14px 16px;cursor:pointer;font:inherit}
.atl2 .mcard.m-plug .plugdest:hover{border-color:#9ED9B8}
.atl2 .mcard.m-plug .plugdest.on{border-color:#12A150;background:#F7FCF9}
.atl2 .mcard.m-plug .plugdest .pradio{width:16px;height:16px;display:inline-grid;
  place-items:center;border-radius:50%;border:1.5px solid #C9D6E6;vertical-align:middle;
  margin-right:8px}
.atl2 .mcard.m-plug .plugdest.on .pradio{border-color:#12A150;background:#12A150;
  box-shadow:inset 0 0 0 3px #fff}
.atl2 .mcard.m-plug .plugdest b{display:inline;font-size:13.5px;font-weight:700;color:#16233A}
.atl2 .mcard.m-plug .plugdest em{display:block;margin-top:6px;font-style:normal;
  font-size:12.5px;line-height:1.55;color:#61708A}
.atl2 .mcard.m-plug .mfield.pill{display:flex;align-items:center;gap:10px;
  flex-wrap:wrap}
.atl2 .mcard.m-plug .mfield.pill input{flex:1 1 260px;border:1px solid #E3E8F0;
  border-radius:999px;background:#F9FBFD;padding:12px 18px;font:inherit;font-size:13.5px}
.atl2 .mcard.m-plug .mfield.pill .abtn{border:0;border-radius:999px;padding:12px 22px;
  font-weight:700;background:#12A150;color:#fff}
.atl2 .mcard.m-plug .plugpay{margin-top:22px;border:1px solid #EEF2F7;border-radius:12px;
  overflow:hidden}
.atl2 .mcard.m-plug .plugpay > summary{display:flex;align-items:center;gap:10px;
  padding:11px 16px;background:#F9FBFD;cursor:pointer;list-style:none}
.atl2 .mcard.m-plug .plugpay > summary b{font-size:13px;font-weight:700}
.atl2 .mcard.m-plug .plugpay > summary span{font-size:12px;color:#8FA0B8}

/* 9. LISTE | LIGNE | MAXI : segment de la maquette, sans pictos. */
.atl2.cibles .listhead .dens button i{display:none}
.atl2.cibles .listhead .dens button{letter-spacing:.02em;text-transform:uppercase}

/* 10. Nom + description + news sur UNE ligne. */
.atl2.cibles .desk-list .row .nd{display:flex;align-items:center;gap:8px;
  min-width:0;overflow:hidden;flex-wrap:nowrap}
.atl2.cibles .desk-list .row .rnm{display:inline-flex;flex:0 1 auto;max-width:42%;
  margin:0}
.atl2.cibles .desk-list .row .rds{display:inline-block;margin-left:0;flex:1 1 8em;
  min-width:0}

/* 11-12. Drapeaux alignés, OUI/NON dans la carte. */
.atl2.cibles .desk-list .row,
.atl2.cibles .desk-list .cols{
  grid-template-columns:11px 20px minmax(0,1fr) minmax(140px,1fr) auto!important;
  gap:10px}
.atl2.cibles .desk-list .row .c-flag{width:20px;height:14px;justify-self:center;
  align-self:center}
.atl2.cibles .desk-list .row .c-flag img{display:block;width:20px;height:14px;
  object-fit:cover}
.atl2.cibles .desk-list .row>.cell{min-width:0;justify-self:end;width:auto;
  max-width:100%;overflow:visible}
.atl2.cibles .desk-list .row .yn{display:inline-flex;flex-wrap:nowrap;gap:4px;
  justify-content:flex-end;max-width:100%}
.atl2.cibles .desk-list .row .ynb{padding:5px 8px;font-size:11.5px;white-space:nowrap}
.atl2.cibles .desk-list .row .yn .memobtn.sm{padding:5px 7px;width:auto}
.atl2.cibles .desk-list .row .yn .memobtn.sm .mlbl{display:none}
@media (max-width:1240px){
  .atl2.cibles .desk-list .row,
  .atl2.cibles .desk-list .cols{
    grid-template-columns:11px 20px minmax(0,1fr) minmax(110px,150px) auto!important}
}
@media (max-width:860px){
  .atl2.cibles .desk-list .row,
  .atl2.cibles .desk-list .cols{
    grid-template-columns:11px 20px minmax(0,1fr) auto!important}
}

/* 13. Écartées / Évaluées / Favoris : chips de la maquette. */
.atl2.cibles .listhead .offtrack .off{border-radius:8px}
.atl2.cibles .listhead .offtrack .off[data-off="5"]{background:#FDECEC;
  border-color:#F5C6C8;color:#C0353A}
.atl2.cibles .listhead .offtrack .off[data-off="7"]{background:#EAF0F6;
  border-color:#DCE4F0;color:#4B5E78}
.atl2.cibles .listhead .offtrack .off[data-off="6"]{background:#FFF3D6;
  border-color:#F0E3BC;color:#96690E}
.atl2.cibles .listhead .offtrack .off[aria-selected="true"]{
  box-shadow:0 0 0 2px rgba(15,29,51,.12);font-weight:700}

/* 14. Édito du jour = même grammaire que Édito · fonds.
   object-fit:cover recadrait les visuels ; contain les montre entiers. */
.atl2.cibles .readpane .thesis-brief__body img,
.atl2.cibles .readpane .zoom-body img,
.atl2.cibles .readpane .thesis-brief__body figure,
.atl2.cibles .readpane .zoom-body figure{display:block;width:100%;max-width:100%;
  height:auto;border-radius:12px;margin:14px 0;object-fit:contain}
.atl2.cibles .readpane .thesis-brief__body figure img,
.atl2.cibles .readpane .zoom-body figure img{margin:0}
.atl2.cibles .readpane .thesis-brief__sw button[aria-selected="true"]{
  background:var(--pp-green);border-color:var(--pp-green);color:#fff}
.atl2.cibles .readpane .art-mktcard,.atl2.cibles .readpane .opcard{
  max-width:100%;width:100%;margin:16px 0;box-sizing:border-box}
.atl2.cibles .readpane .ppcard-fit{border-radius:12px;overflow:hidden;width:100%;
  max-width:100%}
.atl2.cibles .readpane .ed-ops,.atl2.cibles .readpane .mk-ops{list-style:none;
  margin:0;padding:0}
.atl2.cibles .readpane .ed-op,.atl2.cibles .readpane .mk-op{padding:15px 0;
  border-bottom:1px solid var(--pp-line-in)}

/* ── PASSE 31/08 ─────────────────────────────────────────────────────────── */
.atl2.cibles .mapzone,.atl2.ops .mapzone{--sea:#B7C9D8;--land:#F7FBFE;
  --landline:#6F879C;--empty:#C9D6E3;--emptyline:#7E93A6}
.atl2.cibles .ct path,.atl2.ops .ct path{stroke-width:.85}

.atl2.cibles .idmain>.cover{flex-wrap:wrap;row-gap:8px;align-items:center}
.atl2.cibles .idmain .eeta{flex:1 1 100%;font-size:12px;line-height:1.4;
  color:var(--pp-ink-4);font-weight:500}
.atl2.cibles .idmain .erate{flex:1 1 100%;margin:0}
.atl2.cibles .idmain>.engine{flex-wrap:nowrap;align-items:center;min-width:240px}
.atl2.cibles .idmain>.engine .el{flex:none}
.atl2.cibles .idmain>.engine .ev,.atl2.cibles .idmain>.engine .ego,
.atl2.cibles .idmain>.engine .epause{align-items:center}

.atl2 .conts .side{display:flex;align-items:center;gap:14px;margin-left:auto}
.atl2 .conts .side .resetmap{border-left:0!important;padding:0 4px!important;
  color:var(--pp-ink-3);font-size:12px;font-weight:600;height:auto!important}
.atl2 .conts .side .resetmap:hover{color:var(--pp-ink)}

.atl2.cibles .fbar .fsrch input,
.atl2.cibles .listhead .lh-tools .fstrip .fsrch input,
.atl2.cibles .listhead .lh-tools .fstrip .fsrch input[type="text"],
.atl2.ops .fsrch input{border:0!important;box-shadow:none!important;
  background:transparent!important;height:auto!important;padding:0!important;
  border-radius:0!important}

.atl2.cibles .listhead .dens{align-items:stretch}
.atl2.cibles .listhead .dens button{align-items:center;justify-content:center;
  height:100%;line-height:1;padding:0 12px}
.atl2.cibles .listhead .dens button b{line-height:1;display:block;padding:0;
  font-size:10.5px;letter-spacing:.04em}

.atl2.cibles .listhead .funnel{background:#F9FBFD;border:1px solid #E3E8F0;
  border-radius:12px;padding:10px 12px}
.atl2.cibles .listhead .offtrack .off{border-radius:10px}
.atl2.cibles .tprim.lock,.atl2.cibles .tprim:disabled{background:#FFF8EB;
  color:#96690E;border:1px solid #F0E3BC;cursor:not-allowed;opacity:1}

body.pp-desk .atl2.cibles .eval-stick,
body.pp-desk .atl2.ops .eval-stick{position:sticky;z-index:42;width:100%;
  top:var(--pp-gap,60px);background:#fff;
  box-shadow:0 1px 0 var(--pp-line,#E3E8F0)}
body.pp-desk .atl2.cibles .fzone:has(.stage.folded),
body.pp-desk .atl2.ops .fzone:has(.stage.folded){position:sticky;z-index:40;
  top:calc(var(--pp-gap,60px) + var(--demand-h,72px));background:#fff;
  padding-bottom:8px}

.atl2 .readpane .ppart,
.atl2 .thesis-brief__body,
.atl2 .zoom-body.ppart{font-family:"Instrument Sans",var(--pp-body),system-ui,sans-serif;
  font-size:14px;line-height:1.7;color:#16233A}
.atl2 .readpane .ppart h1,.atl2 .readpane .ppart h2{font-size:16px!important;
  line-height:1.3!important;letter-spacing:-.01em!important;margin:22px 0 8px!important;
  padding:0!important;font-weight:700}
.atl2 .readpane .ppart p,.atl2 .readpane .ppart li{font-size:14px!important;
  line-height:1.7!important;color:#16233A!important;margin:12px 0 0!important}
.atl2 .readpane .ppart .lead,.atl2 .readpane .ppart .ed-lead,
.atl2 .readpane .ppart > p:first-child{font-size:14px!important;line-height:1.7!important;
  border-left:2px solid #12A150;padding-left:14px;margin:16px 0 0!important;
  color:#16233A!important;font-weight:400!important}
.atl2 .readpane .ppart .tb-sec,.atl2 .readpane .ppart h3{font-size:12px!important;
  font-weight:600!important;color:#0F1D33!important;margin:22px 0 0!important}
.atl2 .readpane .ppart img{display:block;width:100%;height:auto;border-radius:12px;
  margin:14px 0}
.atl2.ops .readpane .thesis-brief__kicker{font-size:12px;font-weight:600;color:#8FA0B8}
.atl2.ops .readpane .thesis-brief__title{font-size:16px;font-weight:700;color:#16233A}
.atl2.ops .readpane .ed-lead{border-left:2px solid #12A150;padding-left:14px;
  font-size:14px;line-height:1.7}
.atl2 .readpane .ppart h4{font-size:16px!important;line-height:1.35!important;
  margin:16px 0 6px!important;letter-spacing:-.01em!important}
.atl2 .readpane .ppart .art-srcline{font-size:12px!important;margin:0 0 10px!important}
.atl2 .readpane .ppart .art-secviz,.atl2 .readpane .ppart .art-viz2{margin:14px 0!important;
  border-radius:12px;overflow:hidden}
.atl2 .readpane .ppart .art-secviz:hover{transform:none}
.atl2 .eq-pick{max-width:100%;min-width:0;font:inherit;font-size:12px;
  border:1px solid var(--pp-line);border-radius:8px;padding:5px 8px;background:#fff;
  color:var(--pp-ink);cursor:pointer}
.atl2.cibles .fzone>.contpick .contpick-btn{flex:none}
.atl2.cibles .fzone>.contpick .resetmap{margin-left:auto}
.atl2.cibles .fzone>.contpick .mapbtn{margin-left:0;min-width:132px;text-align:right}
body.pp-desk .atl2.cibles .eval-stick{background:#fff!important}

/* ═══════════════════════════════════════════════════════════════════════════
   STICKY UNIFIÉ + TUNNEL MAQUETTE (31/08)
   Plus de bande transparente entre « Évaluer plusieurs à la fois » et
   « N retenues » : eval, rabat carte repliée et listhead collent d'une seule
   pièce opaque. Les chips Écartées / Évaluées / Favoris reprennent le fill
   de Cockpit.html (blanc au repos, teinte au clic — jamais de pastille marine
   ni de scale).
   ═══════════════════════════════════════════════════════════════════════════ */
.atl2.cibles,.atl2.ops{--fold-h:0px}
body.pp-desk .atl2.cibles .eval-stick,
body.pp-desk .atl2.ops .eval-stick{
  position:sticky;z-index:42;width:100%;display:flow-root;
  top:var(--pp-gap,60px);
  background:#fff!important;
  box-shadow:none!important;
  border:0!important;
  padding-bottom:0!important;
  margin-bottom:0!important}
body.pp-desk .atl2.cibles .fzone:has(.stage.folded),
body.pp-desk .atl2.ops .fzone:has(.stage.folded){
  position:sticky;z-index:41;
  top:calc(var(--pp-gap,60px) + var(--demand-h,72px));
  background:#fff!important;
  padding-bottom:0!important;
  margin-bottom:0!important;
  box-shadow:none}
body.pp-desk .atl2.cibles .desk-list .listhead,
body.pp-desk .atl2.cibles .desk-list .listhead.mapoff,
body.pp-desk .atl2.cibles .listhead,
body.pp-desk .atl2.cibles .listhead.mapoff,
body.pp-desk .atl2.ops .listhead,
body.pp-desk .atl2.ops .listhead.mapoff,
body.pp-desk .atl2.ops .desk-list .listhead,
body.pp-desk .atl2.ops .desk-list .listhead.mapoff,
body.pp-desk .atl2.ops .app:has(.stage.folded) .listhead,
body.pp-desk .atl2.ops .app:has(> .fzone:has(.stage.folded)) .listhead{
  top:calc(var(--pp-gap,60px) + var(--demand-h,72px) + var(--fold-h,0px))!important;
  background:#fff!important;
  -webkit-backdrop-filter:none;backdrop-filter:none;
  z-index:40}

/* Tunnel : chevrons maquette (clip 12px, recouvrement -8px). Étape active
   = vert plein + texte blanc, sans scale ni pastille sombre sur le chiffre. */
body.pp-desk .atl2.cibles .desk-list .listhead .funnel,
.atl2.cibles .listhead .funnel{
  background:transparent!important;border:0!important;border-radius:0!important;
  padding:0!important}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step,
.atl2.cibles .listhead .chain2 .step{
  margin-left:-8px;padding:8px 16px 8px 26px;gap:2px;
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 50%,calc(100% - 12px) 100%,0 100%,12px 50%);
  transform:none!important}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step:first-child,
.atl2.cibles .listhead .chain2 .step:first-child{
  margin-left:0;padding-left:14px;
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 50%,calc(100% - 12px) 100%,0 100%)}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step:nth-child(1){z-index:5}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step:nth-child(2){z-index:4}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step:nth-child(3){z-index:3}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step:nth-child(4){z-index:2}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step:nth-child(5){z-index:1}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step .l,
.atl2.cibles .listhead .chain2 .step .l{
  display:block;font-family:inherit!important;font-size:12px;font-weight:600;
  opacity:.75;letter-spacing:0;text-transform:none;line-height:1.3;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step .n,
.atl2.cibles .listhead .chain2 .step .n,
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step[aria-selected="true"] .n,
.atl2.cibles .listhead .chain2 .step[aria-selected="true"] .n{
  display:block!important;margin-top:2px;font-size:17px!important;font-weight:700!important;
  letter-spacing:-.01em;line-height:1.1;background:none!important;border-radius:0!important;
  min-width:0!important;height:auto!important;padding:0!important;align-self:auto!important;
  color:inherit!important;box-shadow:none!important}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step:not([aria-selected="true"]),
.atl2.cibles .listhead .chain2 .step:not([aria-selected="true"]){
  background:#EEF2F7;color:#61708A}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step[aria-selected="true"],
.atl2.cibles .listhead .chain2 .step[aria-selected="true"]{
  background:#12A150!important;color:#fff!important;z-index:6;transform:none!important}
body.pp-desk .atl2.cibles .desk-list .listhead .chain2 .step[aria-selected="true"] .l,
.atl2.cibles .listhead .chain2 .step[aria-selected="true"] .l{color:#fff!important;opacity:.8}

/* Compteurs : blanc au repos, teinte au clic — chiffres 17px, pas de pastille. */
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off,
.atl2.cibles .listhead .offtrack .off{
  display:block;box-sizing:border-box;border-radius:8px!important;padding:7px 14px;
  text-align:left;cursor:pointer;background:#fff;border:1px solid #EEF2F7;
  transform:none!important}
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off .l,
.atl2.cibles .listhead .offtrack .off .l{
  display:block;font-family:inherit!important;font-size:12px;font-weight:600;
  opacity:.8;white-space:nowrap;letter-spacing:0;text-transform:none}
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off .n,
.atl2.cibles .listhead .offtrack .off .n,
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[aria-selected="true"] .n,
.atl2.cibles .listhead .offtrack .off[aria-selected="true"] .n{
  display:block!important;margin-top:2px;font-size:17px!important;font-weight:700!important;
  letter-spacing:-.01em;line-height:1.1;background:none!important;border-radius:0!important;
  min-width:0!important;height:auto!important;padding:0!important;align-self:auto!important;
  color:inherit!important;box-shadow:none!important}
.atl2.cibles .listhead .offtrack .off[data-off="5"]{background:#fff;border-color:#EEF2F7;color:#C0353A}
.atl2.cibles .listhead .offtrack .off[data-off="5"][aria-selected="true"]{
  background:#FDECEC;border-color:#F5C6C8;color:#C0353A}
.atl2.cibles .listhead .offtrack .off[data-off="7"]{background:#fff;border-color:#EEF2F7;color:#4B5E78}
.atl2.cibles .listhead .offtrack .off[data-off="7"][aria-selected="true"]{
  background:#EAF0F6;border-color:#DCE4F0;color:#4B5E78}
.atl2.cibles .listhead .offtrack .off[data-off="6"]{background:#fff;border-color:#EEF2F7;color:#96690E}
.atl2.cibles .listhead .offtrack .off[data-off="6"][aria-selected="true"]{
  background:#FFF3D6;border-color:#F0E3BC;color:#96690E}
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[aria-selected="true"],
.atl2.cibles .listhead .offtrack .off[aria-selected="true"]{
  transform:none!important;box-shadow:none}

/* ═══════════════════════════════════════════════════════════════════════════
   /actualites = MÊME LANGAGE QUE LE COCKPIT (31/08)
   Planisphère trop haut et plein cadre, Replier/Réinit en mono, édito en
   barre verte collée : on reprend le cadre, les pastilles et le brief
   winhealth (Instrument Sans, 16/14, images 12 px, tableaux gris).
   ═══════════════════════════════════════════════════════════════════════════ */
.atl2.ops{--v3-pad:28px}
@media (max-width:860px){.atl2.ops{--v3-pad:14px}}

/* Continents + Replier / Réinitialiser : pastilles marine, liens 12px. */
.atl2.ops .fzone{background:transparent}
.atl2.ops .fzone>.conts,.atl2.ops .fzone>.contpick{
  display:flex;align-items:center;gap:8px;flex-wrap:nowrap;
  overflow:visible;background:transparent;border-bottom:0;
  padding:0 var(--v3-pad) 10px}
.atl2.ops .fzone>.conts{gap:4px;overflow-x:auto}
.atl2.ops .conts .cbtn{display:inline-flex;align-items:center;gap:8px;
  border:0;border-bottom:0;background:transparent;color:#61708A;
  padding:7px 14px;border-radius:8px;font-size:13px;font-weight:600;
  letter-spacing:0;text-transform:none;cursor:pointer;white-space:nowrap;
  font-family:inherit}
.atl2.ops .conts .cbtn:hover{background:#F5F7FA;color:#16233A}
.atl2.ops .conts .cbtn[aria-selected="true"]{background:#0F1D33;color:#fff}
.atl2.ops .conts .cbtn .n{font-family:inherit;font-size:11px;font-weight:700;
  background:#EAF0F6;color:#61708A;border-radius:999px;padding:1px 8px;
  letter-spacing:0}
.atl2.ops .conts .cbtn[aria-selected="true"] .n{background:rgba(255,255,255,.16);color:#fff}
.atl2.ops .fzone>.conts,.atl2.ops .fzone>.contpick{width:100%;box-sizing:border-box}
.atl2.ops .conts .side{display:flex;align-items:center;gap:14px;margin-left:auto}
.atl2.ops .contpick .resetmap{margin-left:auto}
.atl2.ops .conts .side button,.atl2.ops .contpick .resetmap,
.atl2.ops .contpick .mapbtn,.atl2.ops .conts .side .mapbtn{font-family:inherit;
  font-size:12px;font-weight:600;color:#61708A;background:none;border:0;
  border-left:0;cursor:pointer;white-space:nowrap;padding:0 4px;height:auto}
.atl2.ops .conts .side .mapbtn,.atl2.ops .contpick .mapbtn{min-width:158px;
  width:158px;text-align:right;flex:none;margin-left:0}
.atl2.ops .conts .side button:hover,.atl2.ops .contpick .resetmap:hover,
.atl2.ops .contpick .mapbtn:hover,.atl2.ops .conts .side .mapbtn:hover{color:#0E7F3F}

/* Même cadre et même grain que /cibles — plus de 360 px ni de trait .55. */
.atl2.ops .stage:not(.folded){position:relative;display:block!important;
  margin:0 var(--v3-pad);border:1px solid #E3E8F0;border-radius:12px;
  background:#F2F6FA;overflow:visible}
.atl2.ops .stage:not(.folded) .mapzone{position:relative;inset:auto;width:auto;
  height:auto!important;min-height:440px!important;max-height:none!important;
  background:transparent;border-radius:12px;overflow:hidden}
.atl2.ops .stage:not(.folded) .mapzone svg{height:440px!important;max-height:440px!important}
.atl2.ops .ct path{stroke-width:.85}
.atl2.ops .stage:not(.folded) .fbar{right:16px;top:16px;bottom:auto;
  max-height:calc(100% - 32px);border-radius:12px}
.atl2.ops .map-pulse{left:16px;top:16px;border-radius:12px}
.atl2.ops .map-pulse em,.atl2.ops .map-pulse>span{font-family:inherit}

/* Coller une URL : carte comme winhealth, plus un bandeau collé aux bords. */
.atl2.ops .eval-stick{padding:0 var(--v3-pad) 8px;box-sizing:border-box}
.atl2.ops .demand,.atl2.ops .demand.pair{margin:8px 0 0;padding:18px;
  border:1px solid #E3E8F0;border-radius:14px;background:#fff}
.atl2.ops .demand .dhead{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px;
  margin:0 0 12px}
.atl2.ops .demand .dhead h2{margin:0;font-size:14px;font-weight:700;color:#16233A}
.atl2.ops .demand .dhint{font-size:12.5px;color:#8FA0B8;line-height:1.4}
.atl2.ops .demand .dfield{display:flex;align-items:center;gap:10px;
  flex:1 1 260px;min-width:0;box-sizing:border-box;border:1px solid #E3E8F0;
  border-radius:999px;padding:0 8px 0 18px;background:#F9FBFD}
.atl2.ops .demand .dfield:focus-within{border-color:#9ED9B8;
  box-shadow:0 0 0 4px rgba(18,161,80,.14);background:#fff}
.atl2.ops .demand .evalbtn{border-radius:999px;font-weight:700}

/* LISTE / LIGNE / MAXI = cockpit. */
.atl2.ops .listhead .dens{display:inline-flex;align-items:stretch;height:30px;
  box-sizing:border-box;border:1px solid #E3E8F0;border-radius:8px;
  overflow:hidden;background:#fff;gap:0}
.atl2.ops .listhead .dens button{display:inline-flex;align-items:center;
  justify-content:center;border:0;border-radius:0;background:transparent;
  padding:0 10px;font:inherit;font-size:10.5px;font-weight:700;
  letter-spacing:.02em;text-transform:uppercase;color:#8FA0B8;
  cursor:pointer;white-space:nowrap;height:100%}
.atl2.ops .listhead .dens button i{display:none}
.atl2.ops .listhead .dens button[aria-pressed="true"],
.atl2.ops .listhead .dens button.on{background:#0F1D33;color:#fff}
.atl2.ops .listhead .dens button b{font-size:10.5px;font-weight:700;line-height:1}

/* Barre « Édito du jour » : ligne à pastille, plus de pavé vert collé. */
.atl2.ops .readpane{display:flex;flex-direction:column;gap:14px;
  padding:0 4px 24px;box-sizing:border-box}
.atl2.ops .readpane .edito-go,
.atl2.ops .readpane .pane-edito{display:flex!important;align-items:center;gap:10px;
  width:100%!important;box-sizing:border-box;margin:0!important;
  border:1px solid #E3E8F0;border-radius:12px;padding:12px 16px;
  background:#fff!important;font:inherit;font-size:13px;font-weight:700;
  color:#16233A!important;cursor:pointer;text-align:left;
  letter-spacing:0;text-transform:none;white-space:nowrap}
.atl2.ops .readpane .edito-go::before{content:"";width:8px;height:8px;flex:none;
  border-radius:50%;background:#12A150}
.atl2.ops .readpane .edito-go .eg-t{flex:none;font-size:13px;font-weight:700;
  color:inherit;white-space:nowrap}
.atl2.ops .readpane .edito-go .eg-sub{flex:1 1 auto;font-size:12.5px;font-weight:400;
  color:#8FA0B8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
.atl2.ops .readpane .edito-go .eg-chev{margin-left:auto;font-size:12px;
  font-weight:600;color:#8FA0B8;white-space:nowrap}
.atl2.ops .readpane .edito-go:hover{border-color:#BFE6CF;background:#FBFDFC}
.atl2.ops .readpane .edito-go[aria-pressed="true"]{border-color:#BFE6CF;
  background:#EAF6EF!important;color:#0E7F3F!important}

/* Brief : mêmes 16 / 14 qu'édito winhealth, plus de mono ni de 19 px. */
.atl2.ops .readpane.is-edito .zoom{padding:22px 22px 28px;margin:0;
  border:1px solid #E3E8F0;border-radius:14px;background:#fff;max-width:none}
.atl2.ops .readpane.is-edito .zoom-k{font-family:"Instrument Sans",system-ui,sans-serif!important;
  font-size:12px!important;font-weight:600;color:#8FA0B8!important;
  letter-spacing:0;text-transform:none;margin:0 0 4px}
.atl2.ops .readpane.is-edito .zoom-h{font-size:16px!important;font-weight:700;
  letter-spacing:-.01em;line-height:1.3;color:#16233A;margin:0}
.atl2.ops .readpane.is-edito .zoom-body{margin:14px 0 0;padding-top:14px;
  border-top:1px solid #EEF2F7;font-family:"Instrument Sans",system-ui,sans-serif;
  font-size:14px;line-height:1.7;color:#16233A}
.atl2.ops .readpane.is-edito .zoom-body .mk-lead,
.atl2.ops .readpane.is-edito .zoom-body .ed-lead,
.atl2.ops .readpane.is-edito .ppart .lead,
.atl2.ops .readpane.is-edito .ppart > p:first-child{font-size:14px!important;
  line-height:1.7!important;color:#16233A!important;font-weight:400!important;
  border-left:2px solid #12A150;padding-left:14px;margin:16px 0 0!important}
.atl2.ops .readpane.is-edito .zoom-body .mk-sec h2,
.atl2.ops .readpane.is-edito .ppart h2{font-size:12px!important;font-weight:600!important;
  color:#0F1D33!important;letter-spacing:0!important;border:0!important;
  padding:0!important;margin:22px 0 8px!important}
.atl2.ops .readpane.is-edito .zoom-body p,
.atl2.ops .readpane.is-edito .ppart p,
.atl2.ops .readpane.is-edito .ppart li{font-size:14px!important;line-height:1.7!important;
  color:#16233A!important}
.atl2.ops .readpane.is-edito .zoom-meta button,
.atl2.ops .readpane.is-edito .zoom-meta span{font-family:inherit;font-size:12px}
.atl2.ops .readpane.is-edito table{width:100%;border-collapse:collapse;font-size:13px;
  margin:14px 0}
.atl2.ops .readpane.is-edito th{font-size:12px;font-weight:600;color:#8FA0B8;
  background:#F9FBFD;text-align:left;padding:8px 10px;border-bottom:1px solid #E3E8F0}
.atl2.ops .readpane.is-edito td{padding:8px 10px;border-bottom:1px solid #EEF2F7;
  color:#16233A}

/* Cartes / visuels : plus de débordement -28 px, rayon 12.
   max-height:200px recadrait la carte LIVE (retour 05/09) : on laisse
   l'échelle 1200/675 remplir la colonne. */
.atl2.ops .readpane.is-edito .zoom .opcard.art-mktcard{max-width:100%;
  margin:14px 0!important;border-radius:12px;overflow:hidden}
.atl2.ops .readpane.is-edito .zoom .opcard.art-mktcard .ppcard-fit{border-left:1px solid #E3E8F0;
  border-right:1px solid #E3E8F0;max-height:none!important;overflow:hidden;
  border-radius:12px}
.atl2.ops .readpane.is-edito .ppart img,
.atl2.ops .readpane.is-edito .art-secviz,
.atl2.ops .readpane.is-edito .art-viz2{max-width:100%;border-radius:12px;
  overflow:hidden;margin:14px 0}
.atl2.ops .readpane.is-edito .art-secviz:hover{transform:none}

/* Carte repliée : filtres sous le planisphère, rabat sticky. */
.atl2.ops .stage.folded{display:flex;align-items:center;gap:8px;flex-wrap:wrap;
  margin:0 var(--v3-pad);padding:12px 16px;height:auto;min-height:0;
  border:1px solid #E3E8F0;border-radius:12px;background:#fff}
.atl2.ops .stage.folded .map-pulse{display:none}
.atl2.ops .stage.folded .fbar,
.atl2.ops .stage.folded .fstrip{position:static;width:100%;flex:1 1 100%;
  min-width:0;border:0;padding:0;margin:0;background:transparent;box-shadow:none;
  backdrop-filter:none;-webkit-backdrop-filter:none;border-radius:0;
  display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;gap:8px;
  max-height:none;height:auto!important}
.atl2.ops .stage.folded .fbar .seg button,
.atl2.ops .stage.folded .fbar .fbtn,
.atl2.ops .stage.folded .fstrip .fbtn{height:32px;box-sizing:border-box;
  width:auto;border-radius:999px;padding:0 13px;font-size:12.5px;font-weight:600}
body.pp-desk .atl2.ops .fzone:has(.stage.folded){position:sticky;z-index:41;
  top:calc(var(--pp-gap,60px) + var(--demand-h,72px));background:#fff;
  padding-bottom:8px}
@media (max-width:860px){
  .atl2.ops .stage:not(.folded) .mapzone,
  .atl2.ops .stage:not(.folded) .mapzone svg{height:300px!important;
    min-height:300px!important;max-height:300px!important}
}

/* ═══════════════════════════════════════════════════════════════════════════
   COMPTEURS HORS TUNNEL = MÊME GESTE QUE LE CHEVRON VERT (05/09)
   Le remplissage perdait contre body.pp-desk … .off { background:#fff }.
   Écartées rouge, Évaluées marine, Favoris ambre : fond saturé, libellé
   plus clair, chiffre blanc — bandeau teinté dessous.
   ═══════════════════════════════════════════════════════════════════════════ */
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[data-off="5"][aria-selected="true"],
.atl2.cibles .listhead .offtrack .off[data-off="5"][aria-selected="true"]{
  background:#E5484D!important;border-color:#E5484D!important;color:#fff!important;
  box-shadow:0 2px 10px rgba(229,72,77,.30)}
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[data-off="7"][aria-selected="true"],
.atl2.cibles .listhead .offtrack .off[data-off="7"][aria-selected="true"]{
  background:#0F1D33!important;border-color:#0F1D33!important;color:#fff!important;
  box-shadow:0 2px 10px rgba(15,29,51,.28)}
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[data-off="6"][aria-selected="true"],
.atl2.cibles .listhead .offtrack .off[data-off="6"][aria-selected="true"]{
  background:#E0A81E!important;border-color:#E0A81E!important;color:#fff!important;
  box-shadow:0 2px 10px rgba(224,168,30,.35)}
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[data-off="5"][aria-selected="true"] .l,
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[data-off="7"][aria-selected="true"] .l,
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[data-off="6"][aria-selected="true"] .l,
.atl2.cibles .listhead .offtrack .off[data-off="5"][aria-selected="true"] .l,
.atl2.cibles .listhead .offtrack .off[data-off="7"][aria-selected="true"] .l,
.atl2.cibles .listhead .offtrack .off[data-off="6"][aria-selected="true"] .l{
  color:rgba(255,255,255,.85)!important;opacity:1}
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[data-off="5"][aria-selected="true"] .n,
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[data-off="7"][aria-selected="true"] .n,
body.pp-desk .atl2.cibles .desk-list .listhead .offtrack .off[data-off="6"][aria-selected="true"] .n,
.atl2.cibles .listhead .offtrack .off[data-off="5"][aria-selected="true"] .n,
.atl2.cibles .listhead .offtrack .off[data-off="7"][aria-selected="true"] .n,
.atl2.cibles .listhead .offtrack .off[data-off="6"][aria-selected="true"] .n{
  color:#fff!important;background:none!important}

body.pp-desk .atl2.cibles .desk-list .listhead .lh-funnel .tuto.mini.etape-out{
  background:#FDECEC!important;--stepdot:#E5484D;--stepfg:#C0353A;--tc:#16233A}
.atl2.cibles .listhead .tuto.mini.etape-out .tstep{color:#C0353A!important}
.atl2.cibles .listhead .tuto.mini.etape-out .tbody{color:#9A6B6E}
body.pp-desk .atl2.cibles .desk-list .listhead .lh-funnel .tuto.mini.etape-view{
  background:#EAF0F6!important;--stepdot:#0F1D33;--stepfg:#0F1D33;--tc:#16233A}
.atl2.cibles .listhead .tuto.mini.etape-view .tstep{color:#0F1D33!important}
.atl2.cibles .listhead .tuto.mini.etape-view .tbody{color:#4B5E78}
body.pp-desk .atl2.cibles .desk-list .listhead .lh-funnel .tuto.mini.etape-fav{
  background:#FFF8EB!important;--stepdot:#E0A81E;--stepfg:#96690E;--tc:#16233A}
.atl2.cibles .listhead .tuto.mini.etape-fav .tstep{color:#96690E!important}
.atl2.cibles .listhead .tuto.mini.etape-fav .tbody{color:#A6842A}

body.pp-desk .atl2.cibles .desk-list .listhead .lh-funnel .tuto.mini{
  flex-wrap:nowrap!important}
.atl2.cibles .listhead .tuto.mini .txt,
.atl2.cibles .listhead .tuto.mini .txt p{flex-wrap:nowrap;min-width:0;overflow:hidden}
.atl2.cibles .listhead .tuto.mini .tbody{overflow:hidden;text-overflow:ellipsis;
  white-space:nowrap}

/* Parcourir : emplacement réservé, une ligne, pas d'accroche. Vide = invisible
   mais la place reste : LISTE/LIGNE/MAXI ne saute plus d'un onglet à l'autre. */
body.pp-desk .atl2.cibles .desk-list .listhead .lh-top .lh-acts,
.atl2.cibles .listhead .lh-top .lh-acts{flex-wrap:nowrap!important;flex:none;
  align-items:center}
body.pp-desk .atl2.cibles .desk-list .listhead .lh-top .chainwrap,
.atl2.cibles .listhead .lh-top .chainwrap{display:inline-flex!important;
  flex-direction:row;align-items:center;min-width:168px;margin-left:0;
  flex:none}
.atl2.cibles .listhead .lh-top .chainhint{display:none!important}
.atl2.cibles .listhead .lh-top .chain{height:30px;box-sizing:border-box;
  padding:0 14px;font-size:12.5px;white-space:nowrap;border-radius:8px}
.atl2.cibles .listhead .lh-top .chainwrap.empty{visibility:hidden;
  pointer-events:none}

/* Drapeaux ronds, sans filet ni ombre : le 1 px de box-shadow faisait
   l'encadré clair. Pastille 16×16, recadrage cover, rien autour. */
body.pp-desk .atl2.cibles .desk-list .row .c-flag,
.atl2.cibles .desk-list .row .c-flag{width:16px;height:16px;padding:0;border:0;
  border-radius:50%;overflow:hidden;background:transparent;
  box-shadow:none!important;outline:none;display:block;line-height:0;
  justify-self:center;align-self:center}
body.pp-desk .atl2.cibles .desk-list .row .c-flag img,
.atl2.cibles .desk-list .row .c-flag img{width:16px!important;height:16px!important;
  border:0!important;border-radius:50%!important;box-shadow:none!important;
  outline:none;object-fit:cover;display:block}

/* ── EDITO COCKPIT : source unique = Edito · fonds (winhealth) ───────────
   L'edito du jour (today.json) et l'edito these partagent la meme police,
   la meme echelle, le meme air. Les cartes 1200x675 se reduisent a la
   largeur du panneau — plus jamais coupees (y compris le max-height:200px
   pose le 31/08, qui recadrait le LIVE). */
.atl2 .readpane .ppart,
.atl2 .thesis-brief__body,
.atl2 .zoom-body.ppart{font-family:"Instrument Sans",var(--pp-body),system-ui,sans-serif;
  font-size:13px;line-height:1.65;color:#1B2F4E}
.atl2 .readpane .thesis-brief__body,
.atl2 .readpane .thesis-brief__body.ppart,
.atl2 .readpane.is-edito .zoom-body,
.atl2 .readpane.is-edito .zoom-body.ppart{font-size:13px!important;line-height:1.65!important;
  color:#1B2F4E;text-align:left}
.atl2 .readpane .thesis-brief__body p,
.atl2 .readpane .thesis-brief__body li,
.atl2 .readpane.is-edito .zoom-body p,
.atl2 .readpane.is-edito .zoom-body li,
.atl2 .readpane .ppart p,
.atl2 .readpane .ppart li{font-size:13px!important;line-height:1.65!important;
  color:#1B2F4E!important;margin:0 0 13px!important;font-weight:400!important}
.atl2 .readpane .thesis-brief__body h2,
.atl2 .readpane .thesis-brief__body h3,
.atl2 .readpane .thesis-brief__body .tb-sec,
.atl2 .readpane.is-edito .zoom-body h2,
.atl2 .readpane.is-edito .zoom-body h3,
.atl2 .readpane .ppart h1,
.atl2 .readpane .ppart h2,
.atl2 .readpane .ppart h3,
.atl2 .readpane .ppart .tb-sec{font-size:12px!important;font-weight:600!important;
  color:#0F1D33!important;margin:22px 0 8px!important;padding:0 0 6px!important;
  line-height:1.5!important;letter-spacing:0!important;background:none!important;
  border:0!important;border-bottom:1px solid #E3E8F0!important;display:block}
.atl2 .readpane .ppart h2 .ct,.atl2 .readpane.is-edito .zoom-body h2 .ct{display:none}
.atl2 .readpane .ppart h2 .ic,.atl2 .readpane.is-edito .zoom-body h2 .ic,
.atl2 .readpane .thesis-brief__body h2 .ic{display:inline;background:none;width:auto;
  height:auto;border-radius:0;color:inherit;font-size:inherit;line-height:1}
.atl2 .readpane .ppart h2 .tw,.atl2 .readpane.is-edito .zoom-body h2 .tw{display:inline}
.atl2 .readpane .ppart h2 .tt,.atl2 .readpane.is-edito .zoom-body h2 .tt{font-size:inherit;
  font-weight:inherit;letter-spacing:inherit}
.atl2 .readpane .ed-chapeau,.atl2 .readpane .ed-plus{margin:0 0 20px!important;
  padding:0 0 14px!important;border:0!important;border-bottom:1px solid #E3E8F0!important;
  background:none!important}
.atl2 .readpane .ed-chapeau p,.atl2 .readpane .ed-plus p{font-size:13px!important;
  line-height:1.65!important;color:#1B2F4E!important;border:0!important;padding:0!important;
  margin:0 0 13px!important;max-width:none!important}
.atl2 .readpane .ppart .lead,.atl2 .readpane .ppart > p:first-child{font-size:13px!important;
  line-height:1.65!important;border-left:0!important;padding-left:0!important;
  margin:0 0 13px!important;color:#1B2F4E!important;font-weight:400!important}
.atl2 .readpane .aa-n{font-size:13px!important;font-weight:700!important;
  letter-spacing:-.01em!important;line-height:1.5!important;color:#16233A!important}
.atl2 .readpane .aa-d{font-size:13px!important;line-height:1.65!important;
  color:#1B2F4E!important;margin:2px 0 0!important}
.atl2 .readpane .aa-tags{margin:8px 0 0;gap:4px}
.atl2 .readpane .aa-tag{font-size:10px;padding:2px 7px}
.atl2 .readpane .ed-decrypt,.atl2 .readpane .ed-decrypt-solo{margin:10px 0 0!important;
  padding:0!important;background:none!important;border:0!important;border-radius:0!important;
  overflow:visible!important}
.atl2 .readpane .ed-decrypt h4,.atl2 .readpane .ed-decrypt-solo h4,
.atl2 .readpane .ppart h4,.atl2 .readpane.is-edito .zoom-body h4{font-size:13px!important;
  font-weight:700!important;line-height:1.5!important;letter-spacing:-.01em!important;
  margin:12px 0 4px!important;color:#16233A!important}
.atl2 .readpane .art-srcline,.atl2 .readpane .ppart .art-srcline{font-size:12px!important;
  margin:0 0 10px!important}
.atl2 .readpane .art-allops ul,.atl2 .readpane .ed-ops,.atl2 .readpane .mk-ops{list-style:none;
  margin:0;padding:0}
.atl2 .readpane .art-allops li,.atl2 .readpane .ed-op{padding:15px 0!important;
  border-bottom:1px solid #F5F7FA!important}
.atl2 .readpane .ed-decrypt .opcard,.atl2 .readpane .ed-decrypt-solo .opcard{float:none!important;
  width:100%!important;margin:12px 0!important;max-width:100%}
.atl2 .readpane .ppart img,.atl2 .readpane .thesis-brief__body img,
.atl2 .readpane .zoom-body img{display:block;width:100%;max-width:100%;height:auto;
  border-radius:12px;margin:14px 0;object-fit:contain}
.atl2 .readpane.is-edito .zoom-h,.atl2.cibles .zoom .thesis-brief__title{font-size:14.5px!important;
  font-weight:700;letter-spacing:-.015em;line-height:1.35}
.atl2 .readpane.is-edito .zoom-k,.atl2.ops .readpane .thesis-brief__kicker{font-size:12px;
  font-weight:600;color:#4B5E78;font-family:inherit;letter-spacing:0}
.atl2.ops .readpane .thesis-brief__title{font-size:14.5px;font-weight:700;color:#16233A}
.atl2 .readpane .thesis-brief__body .ed-lead{text-align:left;margin:0 0 20px;
  padding:0 0 14px;background:none;border:0;border-bottom:1px solid #E3E8F0;
  border-left:0!important;font-size:13px!important;line-height:1.65!important}

.atl2 .readpane .opcard,.atl2 .readpane .art-mktcard,
.atl2 .thesis-brief__body .opcard,.atl2 .thesis-brief__body .art-mktcard{
  max-width:100%;width:100%;margin:14px 0 18px;box-sizing:border-box}
.atl2 .readpane .ppcard-fit,.atl2 .thesis-brief__body .ppcard-fit{
  width:100%;max-width:100%;container-type:inline-size;overflow:hidden;
  line-height:0;border-radius:12px;box-sizing:border-box;max-height:none!important}
.atl2 .readpane .ppcard-fit:has(> .ppcard.f-x),
.atl2 .thesis-brief__body .ppcard-fit:has(> .ppcard.f-x){aspect-ratio:1200/675;
  height:auto!important;max-height:none!important}
.atl2 .readpane .ppcard-fit:has(> .ppcard.f-li),
.atl2 .thesis-brief__body .ppcard-fit:has(> .ppcard.f-li){aspect-ratio:1080/1350;
  height:auto!important;max-height:none!important}
.atl2 .readpane .ppcard-fit > .ppcard,
.atl2 .thesis-brief__body .ppcard-fit > .ppcard{max-width:none!important;
  transform-origin:top left!important;width:1200px!important;height:675px!important;
  transform:scale(calc(100cqw / 1200px))}
.atl2 .readpane .ppcard-fit > .ppcard.f-x,
.atl2 .thesis-brief__body .ppcard-fit > .ppcard.f-x{width:1200px!important;
  height:675px!important;transform:scale(calc(100cqw / 1200px))}
.atl2 .readpane .ppcard-fit > .ppcard.f-li,
.atl2 .thesis-brief__body .ppcard-fit > .ppcard.f-li{width:1080px!important;
  height:1350px!important;transform:scale(calc(100cqw / 1080px))}
.atl2 .readpane .ppcard-fit *,.atl2 .thesis-brief__body .ppcard-fit *{max-width:none!important}
.atl2.cibles .readpane.is-edito,.atl2.cibles .readpane .zoom,
.atl2.cibles .zoom .thesis-brief{overflow-x:clip;overflow-y:visible}

/* Monde : le viewBox 984x210 (slice) agrandit le trait 0.85 ~5x vs un
   continent (viewBox ~1000x765). On ramene l'epaisseur ecran a celle
   d'Amerique du Nord. */
.atl2.cibles .mapzone[data-cont="monde"] .ct path,
.atl2.ops .mapzone[data-cont="monde"] .ct path{stroke-width:.22}

/* La fiche /cibles reprend la phrase de la ligne (titre de l'actu). */
.atl2.cibles .readpane .zoom-news{margin:12px 0 0;padding:12px 0 0;
  border-top:1px solid var(--pp-line,#E3E8F0);min-width:0}
.atl2.cibles .readpane .zoom-news .zoom-lead{margin:0 0 10px;font-size:14px;
  line-height:1.5;font-weight:600;color:#16233A}
.atl2.cibles .readpane .zoom-news .ed-decrypt-b{font-size:13px;line-height:1.65;
  color:#1B2F4E}
.atl2.cibles .readpane .zoom-news .zoom-src{display:inline-block;margin-top:8px;
  font-size:12.5px;font-weight:600;color:#0E8A44;text-decoration:none}
.atl2.cibles .readpane .zoom-news .zoom-card{margin:12px 0;max-width:100%}
.atl2 .ticker .tk .what{max-width:36ch;overflow:hidden;text-overflow:ellipsis;
  white-space:nowrap}

/* Espace sous l onglet Edito du jour, avant le titre de l article. */
.atl2 .readpane .thesis-brief__jour-h,
.atl2.cibles .readpane .thesis-brief__jour-h{display:block;margin:22px 0 14px!important;
  padding-top:4px}

/* Plus de cartes Couverture / Moteur sous le titre : le titre respire. */
.atl2.cibles .idmain{display:none!important}
.atl2.cibles .idtop{margin-bottom:8px}

/* Filet sous le planisphere : le stage a deja son cadre. */
.atl2.cibles .fzone{border-bottom:0}

/* HUD planisphere : couverture, moteur colle dessous. */
.atl2.cibles .stage:not(.folded) .map-hud{position:absolute;left:20px;top:20px;z-index:6;
  display:flex;flex-direction:column;gap:8px;width:230px;box-sizing:border-box;
  pointer-events:none}
.atl2.cibles .stage:not(.folded) .map-hud > *{pointer-events:auto}
.atl2.cibles .stage:not(.folded) .map-hud .map-pulse{position:static!important;
  left:auto;top:auto;width:100%;z-index:auto;box-sizing:border-box}
.atl2.cibles .map-engine{cursor:default}
.atl2.cibles .map-engine-hit{display:block;width:100%;margin:0;padding:0;border:0;
  background:transparent;text-align:left;font:inherit;color:inherit;cursor:pointer}
.atl2.cibles .map-engine .map-engine-rate{display:flex;flex-wrap:wrap;align-items:center;
  gap:4px;margin-top:10px;padding-top:10px;border-top:1px solid #EAF0F6}
.atl2.cibles .map-engine .map-engine-rate button{min-width:26px;height:24px;padding:0 6px;
  font-size:11px;box-sizing:border-box}
.atl2.cibles .map-engine .ebell{margin-left:auto;border:0;background:none;cursor:pointer;
  font-size:13px;line-height:1;padding:0 2px;min-width:0;height:auto}
.atl2.cibles .map-engine .epause{display:inline-flex;align-items:center;height:20px;
  box-sizing:border-box;background:var(--pp-amber-bg,#FFF4D6);color:var(--pp-amber-tx,#8A5A00);
  font-size:11px;font-weight:700;border-radius:999px;padding:0 8px}
@media (max-width:860px){
  .atl2.cibles .stage:not(.folded) .map-hud{left:14px;top:14px;width:190px}
}
@media (max-width:1000px){
  .atl2.cibles .stage:not(.folded) .map-hud{position:static;width:auto;left:auto;top:auto;
    pointer-events:auto}
}

/* Sticky : Coller une URL et 59 retenues s emboitent pile.
   3 px de blanc sous eval-stick = dans le padding du titre (12 px), jamais
   sur le texte. listhead remonte de 2 px sous la barre (z-index plus bas). */
.atl2.cibles{--pp-live-h:44px}
.atl2.cibles .eval-stick{padding-bottom:0}
.atl2.cibles .demand{margin:8px var(--v3-pad) 0;border-radius:14px 14px 0 0;
  border-bottom:0}
body.pp-desk .atl2.cibles .eval-stick{top:calc(var(--pp-gap,60px) + var(--pp-live-h,0px))!important;
  z-index:42;background:#fff!important;margin-bottom:0!important;
  padding-bottom:0!important;overflow:visible;
  box-shadow:0 3px 0 0 #fff!important}
body.pp-desk .atl2.cibles .eval-stick::after{content:none;display:none}
body.pp-desk .atl2.cibles .desk-list .listhead,
body.pp-desk .atl2.cibles .desk-list .listhead.mapoff,
body.pp-desk .atl2.cibles .listhead,
body.pp-desk .atl2.cibles .listhead.mapoff{top:calc(var(--pp-gap,60px) + var(--pp-live-h,0px) + var(--demand-h,0px) - 2px)!important;
  background:#fff!important;-webkit-backdrop-filter:none;backdrop-filter:none;
  border-radius:0!important;box-shadow:none!important;margin-top:0!important;
  border-top:0}
body.pp-desk .atl2.cibles .readpane{top:calc(var(--pp-gap,60px) + var(--pp-live-h,0px) + var(--demand-h,0px) - 2px)!important}
`,Cl=El+jl+Nl+Sl;function fn(e){if(typeof window>"u")return"";try{return new URLSearchParams(window.location.search).get(e)||""}catch{return""}}function zl(){const e=fn("teaser");if(e==="0"||e==="1")return e;try{if(typeof window<"u"&&window.parent&&window.parent!==window){const a=new URL(window.parent.location.href).searchParams.get("teaser");if(a==="0"||a==="1")return a;if(/\/cibles\/[^/]+\/open\/?$/i.test(window.parent.location.pathname||""))return"0"}}catch{}return""}function Al(e,a){if(e||a.mode!=="client"||!a.token)return"visiteur";const r=zl();return r==="0"?"client":r==="1"||fn("embed")==="1"&&fn("chrome")==="1"?"apercu":"client"}const ql={visiteur:{pipe:!1,showIdent:!1,showOnb:!1,showFunnel:!1,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!0,showGroupBar:!0,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0},apercu:{pipe:!0,showIdent:!0,showOnb:!0,showFunnel:!0,showDemand:!0,showThumbs:!1,showCredits:!1,showChain:!1,showGroupBar:!1,lockRowsAfter:10,lockActions:!0,showTicker:!0,showMorning:!0},client:{pipe:!0,showIdent:!0,showOnb:!1,showFunnel:!0,showDemand:!0,showThumbs:!0,showCredits:!0,showChain:!0,showGroupBar:!1,lockRowsAfter:null,lockActions:!1,showTicker:!0,showMorning:!0}},Tl=e=>ql[e];function La(e){const a=(e||"").trim();return a.length<3?!1:!!(/^[^\p{L}(]/u.test(a)||/[:—]\s|…|\.{3}/.test(a)||a.split(/\s+/).length>=3&&/\b(icymi|round-?up|wrap|weekly|podcast|interview|what|why|how|biggest|watch|inside|according)\b/i.test(a))}const Tt=e=>{if(e.noCo===void 0){const a=(e.name||"").trim();(!go(a)||La(a))&&(e.noCo=!0)}return Object.assign(e,{continent:Qi(e.cc)})};function Ja(e){const a=new Set,r=[];for(const n of e){const o=(n.name||"").toLowerCase();!o||a.has(o)||(a.add(o),r.push(n))}return r}const Ll=60*60*1e3;function Fl(e){try{const a=JSON.parse(sessionStorage.getItem("ppmap:swr:"+e)||"null");return!a||!Array.isArray(a.objs)||Date.now()-(a.ts||0)>Ll?null:a}catch{return null}}function ha(e,a){try{sessionStorage.setItem("ppmap:swr:"+e,JSON.stringify({...a,ts:Date.now()}))}catch{}}const Rl=e=>e==="default"?"":e==="ops"?"ops":"research:"+e.research;function Ol(e,a,r="default"){const n=r!=="default",o=c.useMemo(()=>e||n?{mode:"anon"}:Ii(),[e,n]),i=c.useMemo(()=>n?"visiteur":Al(e,o),[e,o,n]),d=c.useMemo(()=>Tl(i),[i]),l=i!=="visiteur",s=Rl(r),[h,p]=c.useState([]),[x,u]=c.useState(""),[b,m]=c.useState(null),[w,y]=c.useState(null),[f,v]=c.useState(null),[E,k]=c.useState(()=>new Map),[j,N]=c.useState(()=>new Map),[S,L]=c.useState(""),[C,T]=c.useState(new Set),[O,U]=c.useState(null),[R,D]=c.useState(!0),[g,q]=c.useState(!1),[M,J]=c.useState(0),[A,B]=c.useState(0),I=c.useRef(0),$=c.useMemo(()=>{var K;if(i!=="client")return"";try{return((K=Pi())==null?void 0:K.email)||""}catch{return""}},[i]);c.useEffect(()=>{const K=++I.current;let ye=!0;const re=()=>ye&&K===I.current,de=(l&&o.token?o.token:"pub:"+a)+(s?":"+s:""),ge=Fl(de);return ge?(p(ge.objs.map(Tt)),ge.fund&&u(ge.fund),m(ge.marketEstimate??null),y(ge.criteria??null),v(ge.stats??null),L(ge.generatedAt||""),D(!1)):D(!0),(async()=>{try{if(r==="ops"){const ce=await Ga(),ve=((ce==null?void 0:ce.recent_ops)||[]).map(xe=>{const Ne=ja(xe.company_name||xe.title?xe:{...xe,title:(xe.headline_fr||xe.headline||"").slice(0,120)},a),Fe=String(xe.rubrique||"").toLowerCase();return Ne&&(Fe==="nominations"||Fe==="recrutements")&&(Ne.engine=Fe),Ne&&!String(xe.company_name||"").trim()&&(Ne.noCo=!0),Ne}).filter(xe=>!!xe).map(xe=>(go((xe.name||"").trim())||(xe.noCo=!0),xe));try{const xe=_i(),Ne=await Bi(),Fe=((Ne==null?void 0:Ne.date)||"").slice(0,10),ae=xe?xe.doc:Ne,ke=$i(ae),be=((xe==null?void 0:xe.day)||(ae==null?void 0:ae.date)||Fe||"").slice(0,10);if(be&&ke.length){const oe=new Set;for(const _ of ve){if((_.date||"").slice(0,10)!==be)continue;const V=Xn(ke,oe,_.name,"");V>=0&&(oe.add(V),_.decryptHtml=ke[V].html)}for(const _ of ve){if(_.decryptHtml||(_.date||"").slice(0,10)!==be)continue;const V=Xn(ke,oe,"",_.headline||_.tagline||_.name);V>=0&&(oe.add(V),_.decryptHtml=ke[V].html)}}if(be){const oe=((ae==null?void 0:ae.title_fr)||"").trim(),_=((ae==null?void 0:ae.lead_fr)||"").trim(),V=Ui(ae),Z=((ae==null?void 0:ae.url)||"").trim();oe&&(V||Z)&&ve.unshift({id:`edito:${be}`,kind:"op",name:oe,cc:null,date:be,engine:"edito",dealKind:"other",headline:oe,tagline:_||oe,decryptHtml:V||void 0,url:Z,noCo:!0})}}catch{}if(!re())return;p(ve.map(Tt)),ha(de,{objs:ve})}else if(typeof r=="object"){const ve=(await Zn()||[]).filter(Ne=>(Ne.slug||"")===r.research).map(Ne=>er(Ne,a)).filter(Ne=>!!Ne),xe=Ja(await tr(ve,a));if(!re())return;p(xe.map(Tt)),ha(de,{objs:xe})}else if(l&&o.token){const ce=Hi(o.token),ve=Ga(),xe=Vi(o.token),Ne=Wi(o.token),Fe=Gi(o.token),ae=await ce;let ke=ae?ae.targets:[];re()&&ae&&(u(ae.fund||""),m(ae.marketEstimate??null),y(ae.criteria??null),v(ae.stats??null),L(ae.generatedAt||""),p(ke.map(Tt)),D(!1),q(!1));const[be,oe,_,V]=await Promise.all([ve,xe,Ne,Fe]),Z=((be==null?void 0:be.recent_ops)||[]).map(ne=>ja(ne,a)).filter(ne=>!!ne),le=new Set(ke.map(ne=>ne.id));if(ke=[...ke,...Z.filter(ne=>!le.has(ne.id)&&(le.add(ne.id),!0))],!re())return;p(ke.map(Tt));const pe=new Set;for(const ne of oe){const ie=(ne.id||ne.co||"").toString().trim().toLowerCase();ie&&pe.add(ie.startsWith("t:")?ie:"t:"+ie)}T(pe),k(_),N(V),ae&&ha(de,{fund:ae.fund,marketEstimate:ae.marketEstimate,criteria:ae.criteria,stats:ae.stats,generatedAt:ae.generatedAt,objs:ke})}else{const ce=Yi(),ve=Zn(),xe=Ga(),Ne=await ce;re()&&Ne.length&&(p(Ja(Ne).map(Tt)),D(!1),q(!1));const[Fe,ae]=await Promise.all([ve,xe]),ke=(Fe||[]).map(V=>er(V,a)).filter(V=>!!V),be=await tr(ke,a),oe=((ae==null?void 0:ae.recent_ops)||[]).map(V=>ja(V,a)).filter(V=>!!V),_=Ja([...Ne,...be,...oe]);if(!re())return;p(_.map(Tt)),ha(de,{objs:_})}re()&&q(!1)}catch{re()&&!ge&&q(!0)}finally{re()&&D(!1)}})(),()=>{ye=!1}},[l,o.token,a,M,s]),c.useEffect(()=>{if(!d.showCredits||!$){U(null);return}let K=!0;return(async()=>{try{const ye=await fetch(`${Ha}/inbound/credits`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:$})});if(!ye.ok)return;const re=await ye.json();K&&re&&re.ok!==!1&&U(re)}catch{}})(),()=>{K=!1}},[d.showCredits,$,A]);const te=c.useCallback(K=>T(new Set(K)),[]);return{session:o,mode:i,caps:d,fund:x,email:$,marketEstimate:b,generatedAt:S,criteria:w,thesisMode:String((w==null?void 0:w.mode)||""),stats:f,thumbs:E,stages:j,dossiers:h,patchStatuses:(K,ye)=>{p(re=>{let de=!1;const ge=re.map(ce=>{if(!ce.checkId)return ce;const ve=K.get(ce.checkId);return!ve||ve===(ce.ceoStatus||"")||!ye(ce.id)?ce:(de=!0,{...ce,ceoStatus:ve})});return de?ge:re})},favIds:C,setFavIds:te,credits:O,reloadCredits:()=>B(K=>K+1),loading:R,error:g,refresh:()=>J(K=>K+1)}}function We(e){return e?e.engine==="edito"||String(e.id||"").startsWith("edito:"):!1}const Na=new Set(["media","nominations","recrutements","tribunes","listes","evenements","partenariats","produits","regul","marche"]);function Fa(e){return Na.has(e.engine||"")}function Je(e){return!!e.noCo||Fa(e)&&!!e.url}const Ro=()=>({win:"all",day:"",status:"all",crible:[],signalOnly:!1,signalEngines:[],sector:[],market:[],country:[],engine:[],stage:[],angle:[],memoLevel:[],dealKind:[],acquirer:"",search:""}),Ml=(e="europe",a=!1,r)=>({continent:e,ptab:(r==null?void 0:r.ptab)??1,dens:(r==null?void 0:r.dens)??"liste",filters:{...Ro(),...Object.fromEntries(Object.entries((r==null?void 0:r.filters)||{}).filter(([,n])=>n!==void 0))},sort:{key:"signal",dir:-1},groupBy:"engine",shown:{},pileMode:!1,openFacet:null,popupId:null,popupAnchor:null,focusId:null,modal:(r==null?void 0:r.modal)??null,chain:{queue:[],idx:0},spaceTab:"retenu",memoConsole:null,approachId:null,dossierId:null,memoTab:0,undo:[],mapFolded:a}),Dl=new Set(["signal","amount","score","crible","memo"]);function Il(e,a){switch(a.type){case"continent":return{...e,continent:a.key,filters:{...e.filters,country:[]},shown:{},popupId:null,focusId:null,openFacet:null};case"ptab":return{...e,ptab:a.tab,shown:{},popupId:null,focusId:null};case"dens":return{...e,dens:a.dens,shown:{}};case"filters":return{...e,filters:{...e.filters,...a.patch},shown:{}};case"toggleFacet":{const r=e.filters[a.facet],n=r.includes(a.value)?r.filter(o=>o!==a.value):[...r,a.value];return{...e,filters:{...e.filters,[a.facet]:n},shown:{}}}case"toggleMemoLevel":{const r=e.filters.memoLevel,n=r.includes(a.value)?r.filter(o=>o!==a.value):[...r,a.value];return{...e,filters:{...e.filters,memoLevel:n},shown:{}}}case"acquirer":return{...e,filters:{...e.filters,acquirer:a.value,day:"",win:"all"},shown:{}};case"clearFacet":return{...e,filters:{...e.filters,[a.facet]:[]},shown:{}};case"reset":return{...e,filters:Ro(),shown:{},openFacet:null,popupId:null,focusId:null,dens:"liste",sort:{key:"signal",dir:-1}};case"sort":return{...e,sort:e.sort.key===a.key?{key:a.key,dir:e.sort.dir*-1}:{key:a.key,dir:Dl.has(a.key)?-1:1}};case"groupBy":return{...e,groupBy:a.groupBy};case"more":return{...e,shown:{...e.shown,[a.group]:(e.shown[a.group]??a.base??Oo)+a.by}};case"pile":return{...e,pileMode:a.on,popupId:null};case"openFacet":return{...e,openFacet:e.openFacet===a.facet?null:a.facet};case"popup":return{...e,popupId:a.id,popupAnchor:a.id?a.anchor??null:null};case"focus":return{...e,focusId:a.id,popupId:a.id?null:e.popupId};case"modal":return{...e,modal:a.modal,popupId:a.modal?null:e.popupId,dossierId:a.modal==="dossier"?null:a.modal?e.dossierId:null};case"chainStart":return{...e,modal:"chain",chain:{queue:a.queue,idx:0},popupId:null};case"chainNext":return{...e,chain:{...e.chain,idx:e.chain.idx+1}};case"spaceTab":return{...e,spaceTab:a.tab};case"approachOpen":return{...e,approachId:a.id,modal:a.id?"approach":null};case"dossierOpen":return{...e,dossierId:a.id,modal:a.id?"dossier":null};case"memoConsole":return{...e,memoConsole:a.id,memoTab:0};case"memoTab":return{...e,memoTab:a.tab};case"undoPush":return{...e,undo:[...e.undo,a.entry].slice(-50)};case"undoPop":return{...e,undo:e.undo.slice(0,-1)};case"mapFold":return{...e,mapFolded:a.folded,openFacet:null};default:return e}}const Oo=80;function Ra(e,a,r,n){var o;if(n!=="signal"&&a.signalOnly&&(!$e(e)||a.signalEngines.length&&!a.signalEngines.includes(e.engine||""))||n!=="dealKind"&&((o=a.dealKind)!=null&&o.length)&&!a.dealKind.includes(e.dealKind||"")||n!=="sector"&&a.sector.length&&!a.sector.includes(e.sector||"")||n!=="market"&&a.market.length&&!a.market.includes(e.market||"")||n!=="acquirer"&&a.acquirer.trim()&&(e.acquirer||"").trim().toLowerCase()!==a.acquirer.trim().toLowerCase()||n!=="engine"&&a.engine.length&&!a.engine.includes(e.engine||"")||n!=="stage"&&a.stage.length&&!a.stage.includes(e.stage||"")||n!=="angle"&&r&&a.angle.length&&!a.angle.includes(e.angle||"")||n!=="memoLevel"&&r&&a.memoLevel.length&&!a.memoLevel.includes(Ln(e)))return!1;if(n!=="win"){if(a.day){if((e.date||"").slice(0,10)!==a.day)return!1}else if(a.win!=="all"){const i=a.win==="1"?0:a.win==="7"?7:30;if(jt(e.date)>i)return!1}}if(n!=="status"&&!r&&a.status!=="all"&&Lt(e)!==a.status||n!=="crible"&&a.crible.length&&!a.crible.includes(bo(e)))return!1;if(n!=="search"&&a.search.trim()){const i=a.search.trim().toLowerCase();if(![e.name,e.tagline,e.sector,e.market,...e.tags||[],e.acquirer,e.domain,e.website,e.city,e.countryLabel,e.contactName,e.angle,e.angleId,e.provQuery].filter(Boolean).join(" ").toLowerCase().includes(i))return!1}return!0}function ia(e,a,r){return We(e)?Ra(e,a.filters,r):a.continent!=="monde"&&e.continent!==a.continent||a.filters.country.length&&!a.filters.country.includes(e.cc||"")?!1:Ra(e,a.filters,r)}function Pl(e,a,r,n){return!(!ia(e,a,r)||r&&!xo(e,a.ptab,n))}function Dn(e,a){const r=a.key,n=o=>{switch(r){case"name":return(o.name||"").toLowerCase()||null;case"country":return o.countryLabel||o.cc||null;case"stage":return o.stage||null;case"sector":return(o.sector||"").toLowerCase()||null;case"market":return(o.market||"").toLowerCase()||null;case"amount":return typeof o.amountEur=="number"&&o.amountEur>0?o.amountEur:null;case"age":return-jt(o.date);case"score":return typeof o.score=="number"?o.score:null;case"crible":return Ji(o)||null;case"memo":return Ki(o)||null;case"signal":{const i=$e(o);return i?100-(i.left??0):null}}};return[...e].sort((o,i)=>{const d=n(o),l=n(i);return d===null||l===null?d===l?(o.name||"").localeCompare(i.name||""):d===null?1:-1:d<l?-a.dir:d>l?a.dir:(o.name||"").localeCompare(i.name||"")})}const Xa={},wr=(Xa==null?void 0:Xa.VITE_API_BASE)||"https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function yr(){return new Date().toISOString().slice(0,10)}const In=c.createContext(null);function Mo(){return c.useContext(In)}function _l(e){if(!e||typeof DOMParser>"u")return[];const a=[];try{const r=new DOMParser().parseFromString(e,"text/html");for(const n of[...r.querySelectorAll("p")]){if((n.textContent||"").replace(/\s+/g," ").trim().length<40)continue;const i=n.querySelector("strong,b"),d=((i==null?void 0:i.textContent)||"").replace(/\s+/g," ").trim();if(!d||d.length<2||d.length>60)continue;const l=n.cloneNode(!0);l.querySelectorAll("script,style,iframe").forEach(s=>s.remove()),l.querySelectorAll("*").forEach(s=>{const h=s.tagName==="A"?s.getAttribute("href"):null;[...s.attributes].forEach(p=>s.removeAttribute(p.name)),h&&/^https?:\/\//i.test(h)&&(s.setAttribute("href",h),s.setAttribute("target","_blank"),s.setAttribute("rel","nofollow noopener"))}),a.push({t:d.toLowerCase(),html:l.outerHTML})}}catch{}return a}function Do(e){for(const a of[...e.querySelectorAll("p")]){const r=(a.textContent||"").replace(/\s+/g," ").trim();r&&r.length<=28&&!a.querySelector("a,ul,li,strong")&&!/[.:;!?]$/.test(r)&&r.split(" ").length<=3&&a.classList.add("tb-geo")}for(const a of[...e.querySelectorAll("p,h2,h3")]){const r=(a.textContent||"").replace(/\s+/g," ").trim();r&&r.length<=64&&/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(r)&&!a.querySelector("a,ul")&&a.classList.add("tb-sec")}for(const a of[...e.querySelectorAll("b,strong")]){const r=(a.textContent||"").replace(/\s+/g," ").trim().toLowerCase();/^[^a-zà-ÿ]*(pour votre th|for your thesis)/.test(r)&&a.classList.add("tb-these")}for(const a of[...e.querySelectorAll("div,section,p")]){const r=(a.textContent||"").replace(/\s+/g," ").trim();if(/^en bref|^in brief/i.test(r)&&a.querySelector("li,p,ul")){a.classList.add("ed-lead");break}}}function Bl(e){if(!e||typeof DOMParser>"u")return e;try{const r=new DOMParser().parseFromString(`<div id="ed">${e}</div>`,"text/html").getElementById("ed");return r?(r.querySelectorAll("script,style,iframe,object,embed,link,meta,form,input,button").forEach(n=>n.remove()),r.querySelectorAll("*").forEach(n=>{[...n.attributes].forEach(o=>{const i=o.name.toLowerCase(),d=o.value,l=i==="class"||i==="alt"||i==="width"||i==="height"||i.startsWith("data-"),s=(i==="href"||i==="src")&&/^https?:\/\//i.test(d);!l&&!s&&n.removeAttribute(o.name)}),n.tagName==="A"&&n.getAttribute("href")&&(n.setAttribute("target","_blank"),n.setAttribute("rel","nofollow noopener"))}),Do(r),r.innerHTML):e}catch{return e}}function kr(e){if(!e||typeof DOMParser>"u")return e;try{const r=new DOMParser().parseFromString(`<div id="tb">${e}</div>`,"text/html").getElementById("tb");return r?(r.querySelectorAll("script,style,iframe").forEach(n=>n.remove()),r.querySelectorAll("*").forEach(n=>{const o=n.tagName==="A"?n.getAttribute("href"):null,i=n.getAttribute("class"),d=i==="tb-geo"||i==="tb-these"||i==="tb-sec"?i:"";[...n.attributes].forEach(l=>n.removeAttribute(l.name)),d&&n.setAttribute("class",d),o&&/^https?:\/\//i.test(o)&&(n.setAttribute("href",o),n.setAttribute("target","_blank"),n.setAttribute("rel","nofollow noopener"))}),Do(r),r.innerHTML):e}catch{return e}}function Er(e,a=!1){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||"");if(!r)return e;const i=(a?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||"",d=String(Number(r[3]));return a?`${i} ${d}, ${r[1]}`:`${d==="1"?"1ᵉʳ":d} ${i} ${r[1]}`}function Io(){const e=c.useContext(In);if(!e)throw new Error("ThesisEdition* must be under ThesisEditionProvider");return e}function $l({token:e,children:a}){const{dispatch:r,st:n,lang:o}=Y(),[i,d]=c.useState(()=>n.filters.day||yr()),[l,s]=c.useState(null),[h,p]=c.useState(!1),x=c.useCallback(w=>{if(/^\d{4}-\d{2}-\d{2}$/.test(w)){d(w);try{r({type:"filters",patch:{day:w,win:"all"}})}catch{}}},[r]),u=c.useCallback(()=>{d(yr());try{r({type:"filters",patch:{day:"",win:"all"}})}catch{}},[r]);c.useEffect(()=>{const w=y=>{var v;const f=(v=y.detail)==null?void 0:v.day;typeof f=="string"&&x(f)};return window.addEventListener("pp-edition-day",w),()=>window.removeEventListener("pp-edition-day",w)},[x]),c.useEffect(()=>{n.filters.day&&n.filters.day!==i&&d(n.filters.day)},[n.filters.day]),c.useEffect(()=>{if(!e||!i)return;let w=!1;p(!0);const y=new URLSearchParams({token:e,date:i});return fetch(`${wr}/cibles/edition.json?${y}`).then(f=>f.json()).then(f=>{w||s(f)}).catch(()=>{w||s({ok:!1,error:"network"})}).finally(()=>{w||p(!1)}),()=>{w=!0}},[e,i]);const b=c.useMemo(()=>`${wr}/cibles/editions.json?token=${encodeURIComponent(e)}`,[e]),m=c.useMemo(()=>({token:e,day:i,ed:l,loading:h,pickDay:x,pickWindow:u,dayPicked:!!n.filters.day,daysUrl:b,isEn:o==="en"}),[e,i,l,h,x,u,n.filters.day,b,o]);return t.jsx(In.Provider,{value:m,children:a})}function Ul(){const{day:e,daysUrl:a,pickDay:r,dayPicked:n}=Io(),[o,i]=c.useState(()=>n||vo());return c.useEffect(()=>{n&&i(!0)},[n]),c.useEffect(()=>{const d=l=>{var s;return i(!!((s=l.detail)!=null&&s.open))};return window.addEventListener(Aa,d),()=>window.removeEventListener(Aa,d)},[]),o?t.jsx("div",{className:"thesis-days",children:t.jsx(Xi,{mode:"local",theme:"dark",month:e.slice(0,7),current:n?e:"",windowDays:0,daysUrl:a,onPick:r})}):null}async function Hl(e){try{const a=await fetch("https://proplace.co/actualites/today.json",{cache:"no-store"});if(!a.ok)return null;const r=await a.json(),n=String((r==null?void 0:r.date)||"").slice(0,10);if(!n||e&&n!==e.slice(0,10))return null;const o=String((r==null?void 0:r.html_fr)||(r==null?void 0:r.html_en)||"");return o.trim()?{date:n,title:String((r==null?void 0:r.title_fr)||(r==null?void 0:r.title_en)||""),html:o}:null}catch{return null}}function jr(e){if(!e)return!1;const a=new Date,r=n=>String(n).padStart(2,"0");return e.slice(0,10)===`${a.getFullYear()}-${r(a.getMonth()+1)}-${r(a.getDate())}`}function Nr(e){const a=(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(a)?`https://proplace.co/actualites/operations-${a}/`:"https://proplace.co/actualites/"}function Vl(){const{day:e,ed:a,loading:r,pickWindow:n,dayPicked:o,isEn:i}=Io(),d=!!(a!=null&&a.ok&&(a.html||a.acquirers_html)),l=(a==null?void 0:a.ok)&&!d,s=a&&!a.ok,h=c.useRef(null),[p,x]=c.useState("fonds"),[u,b]=c.useState(null),[m,w]=c.useState("idle"),y=c.useRef(!1);c.useEffect(()=>{b(null),w("idle"),y.current=!1,x("fonds")},[e]),c.useEffect(()=>{if(p!=="jour"||y.current)return;y.current=!0;let j=!0;return w("load"),Hl(e).then(N=>{j&&(b(N),w("fait"))}),()=>{j=!1}},[p,e]);const f=c.useMemo(()=>Bl((u==null?void 0:u.html)||""),[u==null?void 0:u.html]),v=c.useRef(null);c.useEffect(()=>{const j=v.current;if(!j||!f)return;let N=!1;return cn(()=>import("./fit-DX-mzLKR.js"),[]).then(async S=>{await S.ensureEditoCss(),!(N||!j.isConnected)&&(S.beautifyEditoRows(j),S.mountCardFits(j))}),()=>{N=!0}},[f]);const E=c.useMemo(()=>kr((a==null?void 0:a.html)||""),[a==null?void 0:a.html]),k=c.useMemo(()=>kr((a==null?void 0:a.acquirers_html)||""),[a==null?void 0:a.acquirers_html]);return c.useEffect(()=>{const j=h.current;if(!j||!E)return;let N=!1;return cn(()=>import("./fit-DX-mzLKR.js"),[]).then(async S=>{await S.ensureEditoCss(),!(N||!j.isConnected)&&(S.beautifyEditoRows(j),S.mountCardFits(j))}),()=>{N=!0}},[E]),t.jsxs("section",{className:"thesis-brief","data-day":(a==null?void 0:a.date)||e,"data-fund":(a==null?void 0:a.fund)||"",children:[t.jsx("style",{children:`
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
      `}),t.jsxs("header",{className:"thesis-brief__hd",children:[t.jsx("span",{className:"thesis-brief__kicker",children:i?"Daily brief":"Brief du jour"}),t.jsxs("h2",{className:"thesis-brief__title",children:[i?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",(a==null?void 0:a.count)!=null&&a.count>0?` · ${a.count}`:""]}),((a==null?void 0:a.date)||e)&&t.jsx("time",{className:"thesis-brief__date",dateTime:(a==null?void 0:a.date)||e,children:(()=>{const j=(a==null?void 0:a.date)||e,N=/^(\d{4})-(\d{2})-(\d{2})/.exec(j);return N?i?`${N[2]}/${N[3]}/${N[1]}`:`${N[3]}/${N[2]}/${N[1]}`:j})()})]}),t.jsxs("div",{className:"thesis-brief__sw",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":p==="fonds",onClick:()=>x("fonds"),children:(i?"Editorial · ":"Édito · ")+((a==null?void 0:a.fund)||(i?"your thesis":"votre thèse"))}),t.jsx("button",{type:"button",role:"tab","aria-selected":p==="jour",onClick:()=>x("jour"),children:i?"Editorial of the day":"Édito du jour"})]}),p==="fonds"&&t.jsx("p",{className:"thesis-brief__hint",children:i?"Same content as your daily email for this fund. Pick a day above the map to change this brief and the LIVE ticker.":"Même contenu que l’email quotidien de ce fonds. Choisir un jour au-dessus de la carte change ce brief et le LIVE."}),p==="fonds"&&r&&!d&&t.jsx("p",{className:"thesis-brief__loading",children:i?"Loading your thesis brief…":"Chargement de votre brief de thèse…"}),p==="fonds"&&s&&t.jsxs("p",{className:"thesis-brief__err",children:[i?"Could not load this brief.":"Impossible de charger ce brief.",a!=null&&a.error?` (${a.error})`:""]}),p==="fonds"&&l&&!r&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"thesis-brief__empty",children:i?jr(e)?t.jsxs(t.Fragment,{children:["No operation relevant to your thesis was found ",t.jsx("b",{children:"today"}),"."]}):t.jsxs(t.Fragment,{children:["No operation relevant to your thesis was found on ",t.jsx("b",{children:Er(e,!0)}),"."]}):jr(e)?t.jsxs(t.Fragment,{children:["Aucune opération pertinente pour votre thèse n’a été relevée ",t.jsx("b",{children:"aujourd’hui"}),"."]}):t.jsxs(t.Fragment,{children:["Aucune opération pertinente pour votre thèse n’a été relevée le ",t.jsx("b",{children:Er(e)}),"."]})}),t.jsx("button",{type:"button",className:"thesis-brief__all",onClick:()=>x("jour"),children:i?"See all of the day’s operations →":"Voir toutes les opérations du jour →"})]}),p==="fonds"&&d&&E?t.jsx("div",{ref:h,className:"thesis-brief__body zoom-body ppart",dangerouslySetInnerHTML:{__html:E}}):null,p==="fonds"&&d&&k?t.jsx("div",{className:"thesis-brief__acq zoom-body",dangerouslySetInnerHTML:{__html:k}}):null,p==="jour"&&(f?t.jsxs(t.Fragment,{children:[(u==null?void 0:u.title)&&t.jsx("h3",{className:"thesis-brief__title thesis-brief__jour-h",children:u.title}),t.jsx("div",{ref:v,className:"thesis-brief__body zoom-body ppart",dangerouslySetInnerHTML:{__html:f}})]}):t.jsx("p",{className:m==="fait"?"thesis-brief__empty":"thesis-brief__loading",children:m!=="fait"?i?"Loading the daily editorial…":"Chargement de l’édito du jour…":i?t.jsxs(t.Fragment,{children:["No shared editorial for this day. ",t.jsx("a",{className:"thesis-brief__all",href:Nr(e),target:"_blank",rel:"noopener noreferrer",children:"Open the day’s page →"})]}):t.jsxs(t.Fragment,{children:["Pas d’édito partagé pour ce jour. ",t.jsx("a",{className:"thesis-brief__all",href:Nr(e),target:"_blank",rel:"noopener noreferrer",children:"Ouvrir la page du jour →"})]})})),o&&t.jsx("button",{type:"button",className:"thesis-brief__clear",onClick:n,children:i?"← See all":"← Voir tout"})]})}const Wl=300,ga=7,Gl={fr:{ma:"🤝 M&A",levees:"🚀 Levées de fonds",nominations:"👤 Nominations",recrutements:"💼 Offres d'emploi",actualites:"📰 Autres actualités"},en:{ma:"🤝 M&A",levees:"🚀 Fundraising",nominations:"👤 Appointments",recrutements:"💼 Job offers",actualites:"📰 Other news"}},Po={fr:{hiring:"💼 Recrute",raised:"💰 Lève des fonds",news:"📰 Presse",posting:"📣 Publie",building:"💻 Construit",community:"💬 Communauté",registry:"🆕 Nouveau",exodus:"👋 Départs",other:"🔔 Signal"},en:{hiring:"💼 Hiring",raised:"💰 Raising",news:"📰 Press",posting:"📣 Posting",building:"💻 Building",community:"💬 Community",registry:"🆕 New",exodus:"👋 Exodus",other:"🔔 Signal"}},Yl=["hiring","raised","news","posting","building","community","registry","exodus","other"];function Za(e){const a=(e.rubrique||"").toLowerCase();if(a==="ma"||a==="levees"||a==="nominations"||a==="recrutements")return a;if(e.dealKind==="ma")return"ma";if(e.dealKind==="levee")return"levees";const r=(e.engine||"").toLowerCase();if(r==="nominations")return"nominations";if(r==="recrutements")return"recrutements";if(as(r)&&r!=="media")return"news:"+r;const n=$e(e);return n?"sig:"+(n.theme&&Po.fr[n.theme]?n.theme:"other"):"actualites"}function Ql(){const{dossiers:e,st:a,t:r,dispatch:n,contName:o,pipe:i,lang:d,fund:l}=Y(),s=Mo(),h=d==="en",[p,x]=c.useState("all"),[u,b]=c.useState(!1),m=c.useMemo(()=>{var ye;const g=(a.filters.day||"").slice(0,10),q=re=>!(!i&&a.continent!=="monde"&&re.continent!==a.continent||g&&(re.date||"").slice(0,10)!==g),M=e.filter(re=>q(re)&&$e(re)&&(!i||re.kind!=="target"||Le(re)!==5)),J=i&&(((ye=s==null?void 0:s.ed)==null?void 0:ye.ops)||[]).length?s.ed.ops.map(re=>ja(re,d)).filter(re=>!!re).map(re=>(re.briefOnly=!0,re)).filter(re=>!g||(re.date||"").slice(0,10)===g):[],A=e.filter(re=>q(re)&&re.kind==="op"&&(g?!0:jt(re.date)<=ga)),B=i?J.length?J:A.filter(re=>{const de=(l||"").trim().toLowerCase();if(!de)return!1;const ge=re.match||null;return ge?Object.keys(ge).map(ce=>ce.trim().toLowerCase()).includes(de):!1}):A,I=g||new Date().toISOString().slice(0,10),$=re=>{const de=Za(re);return de==="ma"?0:de==="levees"?1:2};B.sort((re,de)=>{const ge=$(re)-$(de);if(ge)return ge;const ce=(re.date||"").slice(0,10)===I?0:1,ve=(de.date||"").slice(0,10)===I?0:1;return ce!==ve?ce-ve:(de.amountEur||0)-(re.amountEur||0)});const te=new Set,K=[];for(const re of[...B,...Dn(M,{key:"signal",dir:-1})]){const de=re.id||re.name;!de||te.has(de)||(te.add(de),K.push(re))}return i&&K.length===0?e.filter(de=>q(de)&&jt(de.date)<=ga).sort((de,ge)=>(ge.date||"").localeCompare(de.date||"")).slice(0,80):K},[e,a.continent,a.filters.day,i,l,d,s]),w=c.useMemo(()=>{const g={};for(const q of m){const M=Za(q);g[M]=(g[M]||0)+1}return g},[m]),y=c.useMemo(()=>p==="all"?m:m.filter(g=>Za(g)===p),[m,p]),f=c.useMemo(()=>y.slice(0,Wl),[y]),v=y.length-f.length,E=c.useRef(null);c.useEffect(()=>{var B,I;const g=E.current;if(!g)return;const q=()=>{const $=g.scrollWidth;$<200||(g.style.animationDuration=Math.max(18,Math.round($/130))+"s")};q();const M=requestAnimationFrame(q),J=window.setTimeout(q,1200);let A=!0;return(I=(B=document.fonts)==null?void 0:B.ready)==null||I.then(()=>{A&&q()}),()=>{A=!1,cancelAnimationFrame(M),window.clearTimeout(J)}},[f.length,p]);const k=g=>g==="all"?m.length:w[g]||0,j=g=>{if(g==="all")return h?"All":"Tout";if(g.startsWith("sig:"))return Po[h?"en":"fr"][g.slice(4)]||"🔔";if(g.startsWith("news:")){const q=g.slice(5);return es[q]?ts(q,h?"en":"fr"):g}return Gl[h?"en":"fr"][g]},N=[{k:"all"}],S=["ma","levees"].filter(g=>k(g)>0||g===p);if(S.length){N.push({g:h?"Deals":"Opérations"});for(const g of S)N.push({k:g})}const L=["nominations","recrutements"].filter(g=>k(g)>0||g===p),C=Zi.filter(g=>g!=="media").map(g=>"news:"+g).filter(g=>k(g)>0||g===p),T=k("actualites")>0||p==="actualites"?["actualites"]:[];if(L.length||C.length||T.length){N.push({g:h?"News":"Actualités"});for(const g of L)N.push({k:g});for(const g of C)N.push({k:g});for(const g of T)N.push({k:g})}const O=Yl.map(g=>"sig:"+g).filter(g=>k(g)>0||g===p);if(O.length){N.push({g:h?"Signals (your engines)":"Signaux (vos moteurs)"});for(const g of O)N.push({k:g})}const U=g=>{try{return new Date(g+"T12:00:00Z").toLocaleDateString(h?"en-GB":"fr-FR",{day:"numeric",month:"long"})}catch{return g}},R=(()=>{const g=(a.filters.day||"").slice(0,10),q=!i&&a.continent!=="monde"&&o?h?` Scope: ${o}.`:` Périmètre : ${o}.`:"";return g?(h?`LIVE covers the events of ${U(g)}.`:`Le LIVE regroupe les événements du ${U(g)}.`)+q:(h?`LIVE covers the still-open signals and the deals of the last ${ga} days.`:`Le LIVE regroupe les signaux encore ouverts et les opérations des ${ga} derniers jours.`)+q})(),D=g=>f.map(q=>t.jsxs("button",{type:"button",className:"tk"+(Ge(q)?" spent":""),onClick:M=>{const J=q.briefOnly===!0;try{window.dispatchEvent(new CustomEvent("ppmap:focus",{detail:{id:J?"":q.id,name:q.name,url:q.url||"",text:q.tagline||q.headline||"",card:q.card}}))}catch{}if(J||n({type:"focus",id:q.id}),a.dens!=="liste"){const A=M.currentTarget.getBoundingClientRect();n({type:"popup",id:q.id,anchor:{x:A.left+A.width/2,y:A.bottom}})}},title:q.name+(q.tagline?" — "+q.tagline:""),children:[t.jsx(Ct,{o:q}),t.jsxs("span",{className:"who",children:[t.jsx(Ei,{o:q}),t.jsx("span",{className:"co",children:q.name})]}),(()=>{const M=(q.tagline||q.headline||"").trim();return M&&M!==q.name?t.jsx("span",{className:"what",children:M}):null})(),typeof q.amountEur=="number"&&q.amountEur>0&&t.jsx("span",{className:"am",children:Jc(q.amountEur)}),q.sector&&t.jsx("span",{className:"mt",children:q.sector}),t.jsx(Va,{o:q}),t.jsx("span",{className:"tkgo",children:"→"})]},g+(q.id||q.name))).concat(v>0?[t.jsx("span",{className:"tk quiet",children:h?`+ ${v} more — filter by section to see them`:`+ ${v} autres — filtrez par rubrique pour les voir`},g+":more")]:[]);return t.jsxs("div",{className:"ticker",children:[t.jsxs("span",{className:"lbl",children:[t.jsx("i",{}),r.live]}),t.jsxs("span",{className:"tkfil",onBlur:g=>{g.currentTarget.contains(g.relatedTarget)||b(!1)},children:[t.jsxs("button",{type:"button",className:"tkfilb","aria-expanded":u,onClick:()=>b(g=>!g),children:[j(p),t.jsx("b",{children:k(p)}),t.jsx("span",{"aria-hidden":"true",children:"▾"})]}),t.jsxs("div",{className:"tkfilm",hidden:!u,children:[t.jsx("span",{className:"tkfilscope",children:R}),N.map(g=>"g"in g?t.jsx("span",{className:"tkfilg",children:g.g},g.g):t.jsxs("button",{type:"button","aria-pressed":g.k===p,onClick:()=>{x(g.k),b(!1)},children:[j(g.k),t.jsx("b",{children:k(g.k)})]},g.k))]})]}),t.jsx("div",{className:"win",children:f.length?t.jsxs("div",{className:"run",ref:E,children:[D(0),D(1)]}):t.jsx("div",{className:"run",style:{animation:"none"},children:t.jsx("span",{className:"tk quiet",children:r.liveQuiet(o)})})}),!!s&&t.jsxs("button",{type:"button",className:"tk-edito",title:h?"Show today's editorial":"Afficher Edito du jour",onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:edito"))}catch{}},children:["📖 ",h?"Today's editorial":"Edito du jour"]}),!!s&&t.jsx(Jl,{isEn:h})]})}const Kl=t.jsxs("svg",{viewBox:"0 0 16 16",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"1.4","aria-hidden":"true",children:[t.jsx("rect",{x:"2",y:"3.5",width:"12",height:"10.5",rx:"1.5"}),t.jsx("path",{d:"M2 6.5h12M5.5 2v3M10.5 2v3"})]});function Jl({isEn:e}){const[a,r]=c.useState(()=>vo());c.useEffect(()=>{const o=i=>{var d;return r(!!((d=i.detail)!=null&&d.open))};return window.addEventListener(Aa,o),()=>window.removeEventListener(Aa,o)},[]);const n=a?e?"Hide the days":"Masquer les jours":e?"Show the days":"Voir les jours";return t.jsx("button",{type:"button",className:"dytog","aria-pressed":a,title:n,"aria-label":n,onClick:()=>ns(!a),children:Kl})}const Pn="+33 6 83 10 72 86",Oa="alexandre@proplace.co",_o=`tel:${Pn.replace(/[^\d+]/g,"")}`;function Xl(){return null}class dt extends c.Component{constructor(){super(...arguments);Qn(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(r,n){console.error(`[atl2] bandeau « ${this.props.name} » en échec :`,r,n.componentStack)}render(){return this.state.dead?this.props.fallback??null:this.props.children}}const Bo=[["Retenu","csKept"],["Analysé","csAnalysed"],["À trancher","csPending"],["Validé","csValidated"],["Écarté","csOut"]];function Sr(e,a){if((zt(e)||"").startsWith("CALL")&&Le(e)===3)return[["Validé",a.csYes],["Écarté",a.csNo]];const n=Le(e)>=2;return Bo.filter(([o])=>!(n&&o==="Retenu")).map(([o,i])=>[o,a[i]])}const Cr=e=>e==="Retenu"?"ret":e==="Analysé"?"ana":e==="À trancher"?"tra":e==="Validé"?"val":e==="Écarté"?"eca":"off",Zl={ret:"#12A150",ana:"#3B82F6",tra:"#F59E0B",val:"#0E8A4F",eca:"#EF4444",off:"#94A3B8"};function ed({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:o,doAnalyse:i,memoQueued:d}=Y(),[l,s]=c.useState(""),[h,p]=c.useState(!1),[x,u]=c.useState(!1),b=c.useRef(null);if(c.useEffect(()=>{if(!x)return;const v=E=>{b.current&&!b.current.contains(E.target)&&(u(!1),p(!1))};return document.addEventListener("click",v,!0),()=>document.removeEventListener("click",v,!0)},[x]),!r.pipe||!n||r.lockActions||e.kind==="op")return null;const m=(e.ceoStatus||"").trim(),w=async v=>{if(l)return;if(v==="Analysé"&&!e.memoUrl){p(!0);return}s(v);const E=(Sr(e,a).find(([j])=>j===v)||[v,v])[1],k=await o(e,v,{msg:a.csMoved(e.name,E)});s(""),k&&(p(!1),u(!1))},y=Sr(e,a),f=v=>(y.find(([E])=>E===v)||[])[1]||v;return y.length===2?t.jsx("span",{className:"rstat rst2",onClick:v=>v.stopPropagation(),children:y.map(([v,E])=>t.jsx("button",{type:"button",className:"rsd "+(v==="Validé"?"yes":"no")+(l===v?" busy":""),disabled:!!l,onClick:()=>{w(v)},children:E},v))}):t.jsxs("span",{className:"rstat"+(x||h?" rs-open":""),ref:b,onClick:v=>v.stopPropagation(),children:[t.jsx("button",{type:"button","aria-expanded":x,disabled:!!l,title:a.csLabel,className:"rsel rs-"+Cr(m),onClick:()=>{u(v=>!v),p(!1)},children:l?f(l)+"…":m?f(m):a.csNone}),x&&!h&&t.jsx("span",{className:"rsmenu",role:"listbox",children:y.map(([v,E])=>t.jsxs("button",{type:"button",role:"option","aria-selected":m===v,className:"rsopt"+(m===v?" on":"")+(l===v?" busy":""),disabled:!!l,onClick:()=>{if(v===m){u(!1);return}w(v)},children:[t.jsx("i",{className:"pt2",style:{background:Zl[Cr(v)]}}),E]},v))}),h&&t.jsx("span",{className:"rstm",children:t.jsxs("span",{className:"rstask",children:[t.jsx("b",{children:a.csAnaNeedMemo}),t.jsx("button",{type:"button",className:"rsta pri",disabled:d.has(e.id),onClick:()=>{i(e),p(!1),u(!1)},children:d.has(e.id)?a.actMemoQueue:a.csAnaRun}),t.jsx("button",{type:"button",className:"rsta",onClick:()=>{(async()=>{s("Analysé");const v=await o(e,"Analysé");s(""),v&&(p(!1),u(!1))})()},children:a.csAnaAnyway})]})})]})}function td({o:e}){const{t:a,caps:r,canWrite:n,commitStatus:o}=Y(),[i,d]=c.useState(""),[l,s]=c.useState(!1);if(!r.pipe||!n||r.lockActions)return null;const h=(e.ceoStatus||"").trim(),p=(zt(e)||"").startsWith("CALL")&&Le(e)===3,x=Le(e)>=2,u=async m=>{if(i||m==="Analysé"&&!e.memoUrl&&!window.confirm(a.csAnaConfirm))return;d(m);const w=await o(e,m);d(""),w&&(s(!0),setTimeout(()=>s(!1),2200))},b=p?[["Validé",a.csYes],["Écarté",a.csNo]]:Bo.filter(([m])=>!(x&&m==="Retenu")).map(([m,w])=>[m,a[w]]);return t.jsxs("div",{className:"csp",onClick:m=>m.stopPropagation(),children:[t.jsxs("div",{className:"csrow",children:[t.jsx("span",{className:"cslb",children:a.csLabel}),b.map(([m,w])=>t.jsx("button",{type:"button",className:"csb"+(h===m?" on":"")+(i===m?" busy":""),disabled:!!i,onClick:()=>{u(m)},children:w},m)),l&&t.jsx("span",{className:"csok",children:a.csSaved})]}),t.jsx(ad,{o:e})]})}function ad({o:e}){const{t:a,saveNote:r,flash:n}=Y(),[o,i]=c.useState(e.ceoNote||""),[d,l]=c.useState(!1),[s,h]=c.useState(!1),p=o.trim()!==(e.ceoNote||"").trim(),x=async()=>{if(d||!p)return;l(!0);const u=await r(e,o.trim());l(!1),u&&(h(!0),setTimeout(()=>h(!1),2200),n(a.csNoteSaved))};return t.jsxs("div",{className:"csnote",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:a.csNotePh,value:o,disabled:d,onChange:u=>i(u.target.value),onKeyDown:u=>{u.key==="Enter"&&x()}}),t.jsx("button",{type:"button",disabled:d||!p,onClick:()=>{x()},children:s?a.csNoteSaved:a.csNoteOk})]})}function zr({placeholder:e,onDone:a}){const{t:r}=Y(),[n,o]=c.useState("");return t.jsxs("div",{className:"csnote why",children:[t.jsx("input",{type:"text",maxLength:200,placeholder:e,value:n,autoFocus:!0,onChange:i=>o(i.target.value),onKeyDown:i=>{i.key==="Enter"&&a(n.trim()),i.key==="Escape"&&a("")},onBlur:()=>{n.trim()||a("")}}),t.jsx("button",{type:"button",onClick:()=>a(n.trim()),children:r.whySend})]})}function nd({o:e}){var y;const{t:a,token:r,caps:n,canWrite:o,stageOf:i,setStage:d,flashErr:l}=Y(),[s,h]=c.useState(!1);if(!n.pipe||!o||n.lockActions||Le(e)!==4)return null;const p=i(e),x=(p==null?void 0:p.stage)||"todo",u=async f=>{if(s||f===x)return;h(!0);const v=p;d(e,{stage:f,stamps:(p==null?void 0:p.stamps)||{}});const E=Math.max(Date.now(),Ar+=1);Ar=E;const k=await rs(r,{company:e.name||"",stage:f,cts:E,deal_id:e.airtableId,check_id:e.checkId});h(!1),!k.stale&&(k.ok||(d(e,v),l(a.actErr)))},b=(y=p==null?void 0:p.stamps)==null?void 0:y.sent,m=b?Math.floor((Date.now()-Date.parse(b))/864e5):0,w=x==="sent"&&b&&m>=4;return t.jsxs("div",{className:"stg",onClick:f=>f.stopPropagation(),children:[t.jsx("span",{className:"stglb",children:a.stgLabel}),a.stg.map(([f,v])=>t.jsx("button",{type:"button",className:"stgb"+(x===f?" on":""),disabled:s,onClick:()=>{u(f)},children:v},f)),w&&t.jsx("span",{className:"stgj4",children:a.j4Badge(m)})]})}let Ar=0;const Jt=8,Nt=360;function qr({text:e}){const a=e.split(/\*\*(.+?)\*\*/g);return t.jsx(t.Fragment,{children:a.map((r,n)=>n%2?t.jsx("b",{children:r},n):t.jsx("span",{children:r},n))})}function Tr({text:e}){const a=(e||"").split(`
`).map(n=>n.trim()).filter(Boolean),r=a.filter(n=>n.startsWith("·"));return t.jsxs(t.Fragment,{children:[a.filter(n=>!n.startsWith("·")).map((n,o)=>t.jsx("p",{children:t.jsx(qr,{text:n})},"p"+o)),r.length>0&&t.jsx("ul",{className:"tour-ul",children:r.map((n,o)=>t.jsx("li",{children:t.jsx(qr,{text:n.replace(/^·\s*/,"")})},"l"+o))})]})}function rd({steps:e,onClose:a}){const{t:r,dispatch:n,counts:o,st:i}=Y(),[d,l]=c.useState(0),[s,h]=c.useState(null),[p,x]=c.useState([]),u=c.useRef(!1),b=c.useRef({ptab:i.ptab,dens:i.dens,modal:i.modal}),m=c.useRef(!1);c.useEffect(()=>{const S=b.current;return()=>{m.current||(n({type:"ptab",tab:S.ptab}),n({type:"dens",dens:S.dens}),n({type:"modal",modal:S.modal}))}},[]),c.useEffect(()=>{u.current||(u.current=!0,x(e.filter(S=>!!document.querySelector(S.need||S.sel))))},[e]);const w=p[d],y=d>=p.length;c.useEffect(()=>{if(w&&(w.ptab!==void 0&&i.ptab!==w.ptab&&n({type:"ptab",tab:w.ptab}),w.dens&&i.dens!==w.dens&&n({type:"dens",dens:w.dens}),i.modal!==(w.modal??null)&&n({type:"modal",modal:w.modal??null}),w.click)){const S=w.click,L=window.setTimeout(()=>{const C=document.querySelector(S);C&&C.getAttribute("aria-selected")!=="true"&&C.click()},60);return()=>window.clearTimeout(L)}},[d,w]);const f=c.useRef(-1),v=c.useCallback(()=>{if(!w){h(null);return}const S=T=>{if(!T)return null;for(const O of document.querySelectorAll(T)){const U=O.getBoundingClientRect();if(U.width>1&&U.height>1)return O}return null},L=S(w.sel)||S(w.need);if(!L){h(null);return}f.current!==d&&(f.current=d,L.scrollIntoView({block:"nearest",behavior:"smooth"}));const C=L.getBoundingClientRect();h(T=>T&&Math.abs(T.top-C.top)<1&&Math.abs(T.left-C.left)<1&&Math.abs(T.width-C.width)<1&&Math.abs(T.height-C.height)<1?T:C)},[w,d]);c.useLayoutEffect(()=>{v();const S=[90,300,700,1300].map(T=>window.setTimeout(v,T)),L=window.setInterval(v,400),C=()=>v();return window.addEventListener("scroll",C,!0),window.addEventListener("resize",C),()=>{S.forEach(T=>window.clearTimeout(T)),window.clearInterval(L),window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",C)}},[v]);const E=c.useRef(a);if(E.current=a,c.useEffect(()=>{const S=L=>{L.key==="Escape"?(L.preventDefault(),L.stopPropagation(),E.current()):L.key==="ArrowRight"?l(C=>C+1):L.key==="ArrowLeft"&&l(C=>Math.max(0,C-1))};return document.addEventListener("keydown",S,!0),()=>document.removeEventListener("keydown",S,!0)},[]),!p.length)return null;let k=null;const j=S=>()=>{m.current=!0,n({type:"modal",modal:null}),S()};if(y){const S=o[3]||0;S>0?k={title:S===1?r.ahaATitle1:r.ahaATitleN(S),body:r.ahaABody,btn:r.ahaABtn,go:j(()=>{n({type:"ptab",tab:3}),a()})}:(o[1]||0)>0?k={title:r.ahaRetTitle(o[1]||0),body:r.ahaRetBody,btn:r.ahaRetBtn,go:j(()=>{n({type:"ptab",tab:1}),a()})}:(o[0]||0)>0?k={title:r.ahaEvalTitle(o[0]||0),body:r.ahaEvalBody,btn:r.ahaEvalBtn,go:j(()=>{n({type:"ptab",tab:0}),a()})}:k={title:r.ahaCTitle,body:r.ahaCBody,btn:r.ahaCBtn,go:j(()=>{n({type:"modal",modal:"crit"}),a()})}}let N={left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:Nt};if(!y&&s){const S=s.bottom+14,L=window.innerHeight-S;let C=L>190?S:Math.max(12,s.top-200),T=Math.min(Math.max(12,s.left+s.width/2-Nt/2),window.innerWidth-Nt-12);L<=190&&s.top<212&&(window.innerWidth-s.right>=Nt+40?T=Math.min(s.right+26,window.innerWidth-Nt-12):s.left>=Nt+40&&(T=Math.max(12,s.left-Nt-26)),C=Math.max(12,s.top-Jt)),N={left:T,top:C,width:Nt}}return Gt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"tour",role:"dialog","aria-modal":"true",children:[!y&&s&&t.jsx("div",{className:"tour-hole",style:{left:s.left-Jt,top:s.top-Jt,width:s.width+Jt*2,height:s.height+Jt*2}}),(y||!s)&&t.jsx("div",{className:"tour-veil"}),t.jsxs("div",{className:"tour-card"+(y?" fin":""),style:N,children:[y&&k?t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:k.title}),t.jsx(Tr,{text:k.body}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",onClick:()=>l(p.length-1),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:k.go,children:k.btn})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"tour-n",children:[r.tourStep(d+1,p.length),t.jsx("span",{className:"tour-bar",children:t.jsx("i",{style:{width:(d+1)/p.length*100+"%"}})})]}),t.jsx("h3",{children:w==null?void 0:w.title}),t.jsx(Tr,{text:(w==null?void 0:w.body)||""}),t.jsxs("div",{className:"tour-nav",children:[t.jsx("button",{type:"button",className:"gh",disabled:d===0,onClick:()=>l(S=>Math.max(0,S-1)),children:r.tourPrev}),t.jsx("button",{type:"button",className:"pri",onClick:()=>l(S=>S+1),children:d===p.length-1?r.tourDone:r.tourNext})]})]}),t.jsx("button",{type:"button",className:"tour-x","aria-label":r.tourClose,title:r.tourClose,onClick:a,children:"×"})]})]})}),document.body)}function $o(e){let a="";for(const r of e){const n=(r.date||"").slice(0,10);n&&n>a&&(a=n)}return a}function Uo(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(e||"");return r?a==="en"?`${r[2]}/${r[3]}`:`${r[3]}/${r[2]}`:""}function od(){var L,C;const{dossiers:e,scopedAll:a,pipe:r,mode:n,t:o,st:i,lang:d,data:l,dispatch:s}=Y(),h=r?a:e,p=c.useMemo(()=>h.filter(T=>jt(T.date)===0&&T.kind==="target"),[h]),x=c.useMemo(()=>r?a.filter(T=>T.kind==="target"&&Le(T)===0).slice().sort((T,O)=>(O.date||"").localeCompare(T.date||"")):[],[a,r]),u=c.useMemo(()=>p.filter(T=>r?Le(T)===0:!Ge(T)),[p,r]),b=r?x:u,m=r?a.length-x.length:p.length-u.length,w=r?a.length:p.length,y=w?Math.min(100,m/w*100):100,f=c.useMemo(()=>$o(h),[h]),v=!!f&&jt(f)>0,E=c.useMemo(()=>v?h.filter(T=>(T.date||"").slice(0,10)===f):[],[h,f,v]),k=typeof((L=l.stats)==null?void 0:L.kept_today)=="number"?l.stats.kept_today:null,j=typeof((C=l.stats)==null?void 0:C.screened_today)=="number"?l.stats.screened_today:p.length;let N;v?N=o.morningLast(E.length,x.length,Uo(f,d)):r?N=o.morningThesis(j,x.length,k):p.length?m===0?N=o.goalSourced(p.length):m>=p.length?N=o.goalCleared:N=o.goalDone(m,p.length):N=o.goalSourced(0);const S=()=>{if(!r){s({type:"pile",on:!0});return}s({type:"ptab",tab:0}),n==="client"&&x.length&&s({type:"chainStart",queue:x.map(T=>T.id)})};return t.jsxs("div",{className:"goal",children:[t.jsx("span",{className:"gtxt",title:r?o.morningEnginesTitle:void 0,dangerouslySetInnerHTML:{__html:N}}),t.jsx("div",{className:"pbar",children:t.jsx("i",{style:{width:y+"%"}})}),b.length>0&&t.jsx("button",{type:"button",className:"pilebtn",onClick:S,children:r?o.morningEval(b.length):i.pileMode?o.goalContinue(b.length):o.goalTreat}),t.jsx("span",{className:"gspace"})]})}function id(){const{t:e,st:a,dispatch:r,fund:n,data:o,mode:i,doSync:d,startTour:l}=Y(),s=i==="client",[h,p]=c.useState(!1),[x,u]=c.useState(""),b=()=>{!s||h||!n||(p(!0),u(""),os(n).then(y=>{if(p(!1),y.pending){u(e.refreshSlow);return}if(!y.ok){y.error&&console.warn("[republish]",y.error),u(e.refreshKo);return}const f=y.entered??0,v=y.left??0;u(y.unchanged||!f&&!v?e.refreshSame:e.refreshDone(f,v)),o.refresh()}))},m=(n||"P").split(/\s+/).map(y=>y[0]).join("").slice(0,2).toUpperCase(),w=(()=>{const y=Date.parse(o.generatedAt||"");if(Number.isNaN(y))return"";const f=new Date(y),v=E=>String(E).padStart(2,"0");return`${v(f.getDate())}/${v(f.getMonth()+1)} à ${v(f.getHours())}:${v(f.getMinutes())}`})();return t.jsx("div",{className:"ident",children:t.jsxs("div",{className:"idtop",children:[t.jsxs("span",{className:"brand",children:[t.jsx("b",{children:n?m:t.jsx("span",{className:"skt sk-ini"})}),t.jsx("i",{children:n||t.jsx("span",{className:"skt sk-nm"})})]}),t.jsx("h1",{children:n?e.identTitle(n):t.jsx("span",{className:"skt sk-h1","aria-label":e.loadingV2})}),t.jsx("span",{className:"idsp"}),w?t.jsx("span",{className:"idupd",children:e.identUpdatedAt(w)}):t.jsx("span",{className:"skt sk-upd"}),t.jsxs("span",{className:"icgrp",children:[t.jsx("button",{type:"button",className:"ic","data-tour":"export",title:e.identExport,onClick:()=>r({type:"modal",modal:"export"}),children:"📥"}),t.jsx("button",{type:"button",className:"ic","data-tour":"plug",title:e.identPlug,onClick:()=>r({type:"modal",modal:"plug"}),children:"🔌"}),t.jsx("button",{type:"button",className:"ic","data-tour":"alert",title:e.identBell,onClick:()=>r({type:"modal",modal:"alert"}),children:"🔔"}),t.jsx("button",{type:"button",className:"ic",title:e.identRepub,disabled:!s||h,onClick:b,children:h?"⏳":"📰"}),(h||!!x)&&t.jsxs("span",{className:"repubst",children:[h?e.refreshRun:x,!h&&t.jsx("button",{type:"button",onClick:()=>u(""),"aria-label":"×",children:"×"})]}),t.jsx("button",{type:"button",className:"ic",title:e.identSync,disabled:!s,onClick:d,children:"🔄"})]}),t.jsx("button",{type:"button",className:"ic",title:e.identHelp,onClick:()=>r({type:"modal",modal:"tuto"}),children:"?"}),t.jsx("button",{type:"button",className:"ic",title:e.tourPlayTitle,onClick:l,children:"▶"}),t.jsxs("span",{className:"isrch",children:["🔍",t.jsx("input",{placeholder:e.identSearch,value:a.filters.search,onChange:y=>r({type:"filters",patch:{search:y.target.value}})})]})]})})}class Rt{constructor(){this._partials=new Float64Array(32),this._n=0}add(a){const r=this._partials;let n=0;for(let o=0;o<this._n&&o<32;o++){const i=r[o],d=a+i,l=Math.abs(a)<Math.abs(i)?a-(d-i):i-(d-a);l&&(r[n++]=l),a=d}return r[n]=a,this._n=n+1,this}valueOf(){const a=this._partials;let r=this._n,n,o,i,d=0;if(r>0){for(d=a[--r];r>0&&(n=d,o=a[--r],d=n+o,i=o-(d-n),!i););r>0&&(i<0&&a[r-1]<0||i>0&&a[r-1]>0)&&(o=i*2,n=d+o,o==n-d&&(d=n))}return d}}function*sd(e){for(const a of e)yield*a}function Ho(e){return Array.from(sd(e))}var qe=1e-6,Se=Math.PI,ot=Se/2,Lr=Se/4,st=Se*2,wt=180/Se,et=Se/180,Re=Math.abs,ld=Math.atan,sa=Math.atan2,Ie=Math.cos,Pe=Math.sin,dd=Math.sign||function(e){return e>0?1:e<0?-1:0},It=Math.sqrt;function pd(e){return e>1?0:e<-1?Se:Math.acos(e)}function la(e){return e>1?ot:e<-1?-ot:Math.asin(e)}function it(){}function Ma(e,a){e&&Rr.hasOwnProperty(e.type)&&Rr[e.type](e,a)}var Fr={Feature:function(e,a){Ma(e.geometry,a)},FeatureCollection:function(e,a){for(var r=e.features,n=-1,o=r.length;++n<o;)Ma(r[n].geometry,a)}},Rr={Sphere:function(e,a){a.sphere()},Point:function(e,a){e=e.coordinates,a.point(e[0],e[1],e[2])},MultiPoint:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)e=r[n],a.point(e[0],e[1],e[2])},LineString:function(e,a){hn(e.coordinates,a,0)},MultiLineString:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)hn(r[n],a,0)},Polygon:function(e,a){Or(e.coordinates,a)},MultiPolygon:function(e,a){for(var r=e.coordinates,n=-1,o=r.length;++n<o;)Or(r[n],a)},GeometryCollection:function(e,a){for(var r=e.geometries,n=-1,o=r.length;++n<o;)Ma(r[n],a)}};function hn(e,a,r){var n=-1,o=e.length-r,i;for(a.lineStart();++n<o;)i=e[n],a.point(i[0],i[1],i[2]);a.lineEnd()}function Or(e,a){var r=-1,n=e.length;for(a.polygonStart();++r<n;)hn(e[r],a,1);a.polygonEnd()}function Bt(e,a){e&&Fr.hasOwnProperty(e.type)?Fr[e.type](e,a):Ma(e,a)}function gn(e){return[sa(e[1],e[0]),la(e[2])]}function Ht(e){var a=e[0],r=e[1],n=Ie(r);return[n*Ie(a),n*Pe(a),Pe(r)]}function xa(e,a){return e[0]*a[0]+e[1]*a[1]+e[2]*a[2]}function Da(e,a){return[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]]}function en(e,a){e[0]+=a[0],e[1]+=a[1],e[2]+=a[2]}function ba(e,a){return[e[0]*a,e[1]*a,e[2]*a]}function xn(e){var a=It(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=a,e[1]/=a,e[2]/=a}function bn(e,a){function r(n,o){return n=e(n,o),a(n[0],n[1])}return e.invert&&a.invert&&(r.invert=function(n,o){return n=a.invert(n,o),n&&e.invert(n[0],n[1])}),r}function vn(e,a){return Re(e)>Se&&(e-=Math.round(e/st)*st),[e,a]}vn.invert=vn;function cd(e,a,r){return(e%=st)?a||r?bn(Dr(e),Ir(a,r)):Dr(e):a||r?Ir(a,r):vn}function Mr(e){return function(a,r){return a+=e,Re(a)>Se&&(a-=Math.round(a/st)*st),[a,r]}}function Dr(e){var a=Mr(e);return a.invert=Mr(-e),a}function Ir(e,a){var r=Ie(e),n=Pe(e),o=Ie(a),i=Pe(a);function d(l,s){var h=Ie(s),p=Ie(l)*h,x=Pe(l)*h,u=Pe(s),b=u*r+p*n;return[sa(x*o-b*i,p*r-u*n),la(b*o+x*i)]}return d.invert=function(l,s){var h=Ie(s),p=Ie(l)*h,x=Pe(l)*h,u=Pe(s),b=u*o-x*i;return[sa(x*o+u*i,p*r+b*n),la(b*r-p*n)]},d}function ud(e,a,r,n,o,i){if(r){var d=Ie(a),l=Pe(a),s=n*r;o==null?(o=a+n*st,i=a-s/2):(o=Pr(d,o),i=Pr(d,i),(n>0?o<i:o>i)&&(o+=n*st));for(var h,p=o;n>0?p>i:p<i;p-=s)h=gn([d,-l*Ie(p),-l*Pe(p)]),e.point(h[0],h[1])}}function Pr(e,a){a=Ht(a),a[0]-=e,xn(a);var r=pd(-a[1]);return((-a[2]<0?-r:r)+st-qe)%st}function Vo(){var e=[],a;return{point:function(r,n,o){a.push([r,n,o])},lineStart:function(){e.push(a=[])},lineEnd:it,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],a=null,r}}}function Sa(e,a){return Re(e[0]-a[0])<qe&&Re(e[1]-a[1])<qe}function va(e,a,r,n){this.x=e,this.z=a,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function Wo(e,a,r,n,o){var i=[],d=[],l,s;if(e.forEach(function(m){if(!((w=m.length-1)<=0)){var w,y=m[0],f=m[w],v;if(Sa(y,f)){if(!y[2]&&!f[2]){for(o.lineStart(),l=0;l<w;++l)o.point((y=m[l])[0],y[1]);o.lineEnd();return}f[0]+=2*qe}i.push(v=new va(y,m,null,!0)),d.push(v.o=new va(y,null,v,!1)),i.push(v=new va(f,m,null,!1)),d.push(v.o=new va(f,null,v,!0))}}),!!i.length){for(d.sort(a),_r(i),_r(d),l=0,s=d.length;l<s;++l)d[l].e=r=!r;for(var h=i[0],p,x;;){for(var u=h,b=!0;u.v;)if((u=u.n)===h)return;p=u.z,o.lineStart();do{if(u.v=u.o.v=!0,u.e){if(b)for(l=0,s=p.length;l<s;++l)o.point((x=p[l])[0],x[1]);else n(u.x,u.n.x,1,o);u=u.n}else{if(b)for(p=u.p.z,l=p.length-1;l>=0;--l)o.point((x=p[l])[0],x[1]);else n(u.x,u.p.x,-1,o);u=u.p}u=u.o,p=u.z,b=!b}while(!u.v);o.lineEnd()}}}function _r(e){if(a=e.length){for(var a,r=0,n=e[0],o;++r<a;)n.n=o=e[r],o.p=n,n=o;n.n=o=e[0],o.p=n}}function tn(e){return Re(e[0])<=Se?e[0]:dd(e[0])*((Re(e[0])+Se)%st-Se)}function md(e,a){var r=tn(a),n=a[1],o=Pe(n),i=[Pe(r),-Ie(r),0],d=0,l=0,s=new Rt;o===1?n=ot+qe:o===-1&&(n=-ot-qe);for(var h=0,p=e.length;h<p;++h)if(u=(x=e[h]).length)for(var x,u,b=x[u-1],m=tn(b),w=b[1]/2+Lr,y=Pe(w),f=Ie(w),v=0;v<u;++v,m=k,y=N,f=S,b=E){var E=x[v],k=tn(E),j=E[1]/2+Lr,N=Pe(j),S=Ie(j),L=k-m,C=L>=0?1:-1,T=C*L,O=T>Se,U=y*N;if(s.add(sa(U*C*Pe(T),f*S+U*Ie(T))),d+=O?L+C*st:L,O^m>=r^k>=r){var R=Da(Ht(b),Ht(E));xn(R);var D=Da(i,R);xn(D);var g=(O^L>=0?-1:1)*la(D[2]);(n>g||n===g&&(R[0]||R[1]))&&(l+=O^L>=0?1:-1)}}return(d<-qe||d<qe&&s<-1e-12)^l&1}function Go(e,a,r,n){return function(o){var i=a(o),d=Vo(),l=a(d),s=!1,h,p,x,u={point:b,lineStart:w,lineEnd:y,polygonStart:function(){u.point=f,u.lineStart=v,u.lineEnd=E,p=[],h=[]},polygonEnd:function(){u.point=b,u.lineStart=w,u.lineEnd=y,p=Ho(p);var k=md(h,n);p.length?(s||(o.polygonStart(),s=!0),Wo(p,hd,k,r,o)):k&&(s||(o.polygonStart(),s=!0),o.lineStart(),r(null,null,1,o),o.lineEnd()),s&&(o.polygonEnd(),s=!1),p=h=null},sphere:function(){o.polygonStart(),o.lineStart(),r(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function b(k,j){e(k,j)&&o.point(k,j)}function m(k,j){i.point(k,j)}function w(){u.point=m,i.lineStart()}function y(){u.point=b,i.lineEnd()}function f(k,j){x.push([k,j]),l.point(k,j)}function v(){l.lineStart(),x=[]}function E(){f(x[0][0],x[0][1]),l.lineEnd();var k=l.clean(),j=d.result(),N,S=j.length,L,C,T;if(x.pop(),h.push(x),x=null,!!S){if(k&1){if(C=j[0],(L=C.length-1)>0){for(s||(o.polygonStart(),s=!0),o.lineStart(),N=0;N<L;++N)o.point((T=C[N])[0],T[1]);o.lineEnd()}return}S>1&&k&2&&j.push(j.pop().concat(j.shift())),p.push(j.filter(fd))}}return u}}function fd(e){return e.length>1}function hd(e,a){return((e=e.x)[0]<0?e[1]-ot-qe:ot-e[1])-((a=a.x)[0]<0?a[1]-ot-qe:ot-a[1])}const Br=Go(function(){return!0},gd,bd,[-Se,-ot]);function gd(e){var a=NaN,r=NaN,n=NaN,o;return{lineStart:function(){e.lineStart(),o=1},point:function(i,d){var l=i>0?Se:-Se,s=Re(i-a);Re(s-Se)<qe?(e.point(a,r=(r+d)/2>0?ot:-ot),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(l,r),e.point(i,r),o=0):n!==l&&s>=Se&&(Re(a-n)<qe&&(a-=n*qe),Re(i-l)<qe&&(i-=l*qe),r=xd(a,r,i,d),e.point(n,r),e.lineEnd(),e.lineStart(),e.point(l,r),o=0),e.point(a=i,r=d),n=l},lineEnd:function(){e.lineEnd(),a=r=NaN},clean:function(){return 2-o}}}function xd(e,a,r,n){var o,i,d=Pe(e-r);return Re(d)>qe?ld((Pe(a)*(i=Ie(n))*Pe(r)-Pe(n)*(o=Ie(a))*Pe(e))/(o*i*d)):(a+n)/2}function bd(e,a,r,n){var o;if(e==null)o=r*ot,n.point(-Se,o),n.point(0,o),n.point(Se,o),n.point(Se,0),n.point(Se,-o),n.point(0,-o),n.point(-Se,-o),n.point(-Se,0),n.point(-Se,o);else if(Re(e[0]-a[0])>qe){var i=e[0]<a[0]?Se:-Se;o=r*i/2,n.point(-i,o),n.point(0,o),n.point(i,o)}else n.point(a[0],a[1])}function vd(e){var a=Ie(e),r=2*et,n=a>0,o=Re(a)>qe;function i(p,x,u,b){ud(b,e,r,u,p,x)}function d(p,x){return Ie(p)*Ie(x)>a}function l(p){var x,u,b,m,w;return{lineStart:function(){m=b=!1,w=1},point:function(y,f){var v=[y,f],E,k=d(y,f),j=n?k?0:h(y,f):k?h(y+(y<0?Se:-Se),f):0;if(!x&&(m=b=k)&&p.lineStart(),k!==b&&(E=s(x,v),(!E||Sa(x,E)||Sa(v,E))&&(v[2]=1)),k!==b)w=0,k?(p.lineStart(),E=s(v,x),p.point(E[0],E[1])):(E=s(x,v),p.point(E[0],E[1],2),p.lineEnd()),x=E;else if(o&&x&&n^k){var N;!(j&u)&&(N=s(v,x,!0))&&(w=0,n?(p.lineStart(),p.point(N[0][0],N[0][1]),p.point(N[1][0],N[1][1]),p.lineEnd()):(p.point(N[1][0],N[1][1]),p.lineEnd(),p.lineStart(),p.point(N[0][0],N[0][1],3)))}k&&(!x||!Sa(x,v))&&p.point(v[0],v[1]),x=v,b=k,u=j},lineEnd:function(){b&&p.lineEnd(),x=null},clean:function(){return w|(m&&b)<<1}}}function s(p,x,u){var b=Ht(p),m=Ht(x),w=[1,0,0],y=Da(b,m),f=xa(y,y),v=y[0],E=f-v*v;if(!E)return!u&&p;var k=a*f/E,j=-a*v/E,N=Da(w,y),S=ba(w,k),L=ba(y,j);en(S,L);var C=N,T=xa(S,C),O=xa(C,C),U=T*T-O*(xa(S,S)-1);if(!(U<0)){var R=It(U),D=ba(C,(-T-R)/O);if(en(D,S),D=gn(D),!u)return D;var g=p[0],q=x[0],M=p[1],J=x[1],A;q<g&&(A=g,g=q,q=A);var B=q-g,I=Re(B-Se)<qe,$=I||B<qe;if(!I&&J<M&&(A=M,M=J,J=A),$?I?M+J>0^D[1]<(Re(D[0]-g)<qe?M:J):M<=D[1]&&D[1]<=J:B>Se^(g<=D[0]&&D[0]<=q)){var te=ba(C,(-T+R)/O);return en(te,S),[D,gn(te)]}}}function h(p,x){var u=n?e:Se-e,b=0;return p<-u?b|=1:p>u&&(b|=2),x<-u?b|=4:x>u&&(b|=8),b}return Go(d,l,i,n?[0,-e]:[-Se,e-Se])}function wd(e,a,r,n,o,i){var d=e[0],l=e[1],s=a[0],h=a[1],p=0,x=1,u=s-d,b=h-l,m;if(m=r-d,!(!u&&m>0)){if(m/=u,u<0){if(m<p)return;m<x&&(x=m)}else if(u>0){if(m>x)return;m>p&&(p=m)}if(m=o-d,!(!u&&m<0)){if(m/=u,u<0){if(m>x)return;m>p&&(p=m)}else if(u>0){if(m<p)return;m<x&&(x=m)}if(m=n-l,!(!b&&m>0)){if(m/=b,b<0){if(m<p)return;m<x&&(x=m)}else if(b>0){if(m>x)return;m>p&&(p=m)}if(m=i-l,!(!b&&m<0)){if(m/=b,b<0){if(m>x)return;m>p&&(p=m)}else if(b>0){if(m<p)return;m<x&&(x=m)}return p>0&&(e[0]=d+p*u,e[1]=l+p*b),x<1&&(a[0]=d+x*u,a[1]=l+x*b),!0}}}}}var Zt=1e9,wa=-Zt;function yd(e,a,r,n){function o(h,p){return e<=h&&h<=r&&a<=p&&p<=n}function i(h,p,x,u){var b=0,m=0;if(h==null||(b=d(h,x))!==(m=d(p,x))||s(h,p)<0^x>0)do u.point(b===0||b===3?e:r,b>1?n:a);while((b=(b+x+4)%4)!==m);else u.point(p[0],p[1])}function d(h,p){return Re(h[0]-e)<qe?p>0?0:3:Re(h[0]-r)<qe?p>0?2:1:Re(h[1]-a)<qe?p>0?1:0:p>0?3:2}function l(h,p){return s(h.x,p.x)}function s(h,p){var x=d(h,1),u=d(p,1);return x!==u?x-u:x===0?p[1]-h[1]:x===1?h[0]-p[0]:x===2?h[1]-p[1]:p[0]-h[0]}return function(h){var p=h,x=Vo(),u,b,m,w,y,f,v,E,k,j,N,S={point:L,lineStart:U,lineEnd:R,polygonStart:T,polygonEnd:O};function L(g,q){o(g,q)&&p.point(g,q)}function C(){for(var g=0,q=0,M=b.length;q<M;++q)for(var J=b[q],A=1,B=J.length,I=J[0],$,te,K=I[0],ye=I[1];A<B;++A)$=K,te=ye,I=J[A],K=I[0],ye=I[1],te<=n?ye>n&&(K-$)*(n-te)>(ye-te)*(e-$)&&++g:ye<=n&&(K-$)*(n-te)<(ye-te)*(e-$)&&--g;return g}function T(){p=x,u=[],b=[],N=!0}function O(){var g=C(),q=N&&g,M=(u=Ho(u)).length;(q||M)&&(h.polygonStart(),q&&(h.lineStart(),i(null,null,1,h),h.lineEnd()),M&&Wo(u,l,g,i,h),h.polygonEnd()),p=h,u=b=m=null}function U(){S.point=D,b&&b.push(m=[]),j=!0,k=!1,v=E=NaN}function R(){u&&(D(w,y),f&&k&&x.rejoin(),u.push(x.result())),S.point=L,k&&p.lineEnd()}function D(g,q){var M=o(g,q);if(b&&m.push([g,q]),j)w=g,y=q,f=M,j=!1,M&&(p.lineStart(),p.point(g,q));else if(M&&k)p.point(g,q);else{var J=[v=Math.max(wa,Math.min(Zt,v)),E=Math.max(wa,Math.min(Zt,E))],A=[g=Math.max(wa,Math.min(Zt,g)),q=Math.max(wa,Math.min(Zt,q))];wd(J,A,e,a,r,n)?(k||(p.lineStart(),p.point(J[0],J[1])),p.point(A[0],A[1]),M||p.lineEnd(),N=!1):M&&(p.lineStart(),p.point(g,q),N=!1)}v=g,E=q,k=M}return S}}const wn=e=>e;var an=new Rt,yn=new Rt,Yo,Qo,kn,En,kt={point:it,lineStart:it,lineEnd:it,polygonStart:function(){kt.lineStart=kd,kt.lineEnd=jd},polygonEnd:function(){kt.lineStart=kt.lineEnd=kt.point=it,an.add(Re(yn)),yn=new Rt},result:function(){var e=an/2;return an=new Rt,e}};function kd(){kt.point=Ed}function Ed(e,a){kt.point=Ko,Yo=kn=e,Qo=En=a}function Ko(e,a){yn.add(En*e-kn*a),kn=e,En=a}function jd(){Ko(Yo,Qo)}var Vt=1/0,Ia=Vt,da=-Vt,Pa=da,_a={point:Nd,lineStart:it,lineEnd:it,polygonStart:it,polygonEnd:it,result:function(){var e=[[Vt,Ia],[da,Pa]];return da=Pa=-(Ia=Vt=1/0),e}};function Nd(e,a){e<Vt&&(Vt=e),e>da&&(da=e),a<Ia&&(Ia=a),a>Pa&&(Pa=a)}var jn=0,Nn=0,ea=0,Ba=0,$a=0,$t=0,Sn=0,Cn=0,ta=0,Jo,Xo,mt,ft,rt={point:Ot,lineStart:$r,lineEnd:Ur,polygonStart:function(){rt.lineStart=zd,rt.lineEnd=Ad},polygonEnd:function(){rt.point=Ot,rt.lineStart=$r,rt.lineEnd=Ur},result:function(){var e=ta?[Sn/ta,Cn/ta]:$t?[Ba/$t,$a/$t]:ea?[jn/ea,Nn/ea]:[NaN,NaN];return jn=Nn=ea=Ba=$a=$t=Sn=Cn=ta=0,e}};function Ot(e,a){jn+=e,Nn+=a,++ea}function $r(){rt.point=Sd}function Sd(e,a){rt.point=Cd,Ot(mt=e,ft=a)}function Cd(e,a){var r=e-mt,n=a-ft,o=It(r*r+n*n);Ba+=o*(mt+e)/2,$a+=o*(ft+a)/2,$t+=o,Ot(mt=e,ft=a)}function Ur(){rt.point=Ot}function zd(){rt.point=qd}function Ad(){Zo(Jo,Xo)}function qd(e,a){rt.point=Zo,Ot(Jo=mt=e,Xo=ft=a)}function Zo(e,a){var r=e-mt,n=a-ft,o=It(r*r+n*n);Ba+=o*(mt+e)/2,$a+=o*(ft+a)/2,$t+=o,o=ft*e-mt*a,Sn+=o*(mt+e),Cn+=o*(ft+a),ta+=o*3,Ot(mt=e,ft=a)}function ei(e){this._context=e}ei.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,a){switch(this._point){case 0:{this._context.moveTo(e,a),this._point=1;break}case 1:{this._context.lineTo(e,a);break}default:{this._context.moveTo(e+this._radius,a),this._context.arc(e,a,this._radius,0,st);break}}},result:it};var zn=new Rt,nn,ti,ai,aa,na,pa={point:it,lineStart:function(){pa.point=Td},lineEnd:function(){nn&&ni(ti,ai),pa.point=it},polygonStart:function(){nn=!0},polygonEnd:function(){nn=null},result:function(){var e=+zn;return zn=new Rt,e}};function Td(e,a){pa.point=ni,ti=aa=e,ai=na=a}function ni(e,a){aa-=e,na-=a,zn.add(It(aa*aa+na*na)),aa=e,na=a}let Hr,Ua,Vr,Wr;class Gr{constructor(a){this._append=a==null?ri:Ld(a),this._radius=4.5,this._=""}pointRadius(a){return this._radius=+a,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(a,r){switch(this._point){case 0:{this._append`M${a},${r}`,this._point=1;break}case 1:{this._append`L${a},${r}`;break}default:{if(this._append`M${a},${r}`,this._radius!==Vr||this._append!==Ua){const n=this._radius,o=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,Vr=n,Ua=this._append,Wr=this._,this._=o}this._+=Wr;break}}}result(){const a=this._;return this._="",a.length?a:null}}function ri(e){let a=1;this._+=e[0];for(const r=e.length;a<r;++a)this._+=arguments[a]+e[a]}function Ld(e){const a=Math.floor(e);if(!(a>=0))throw new RangeError(`invalid digits: ${e}`);if(a>15)return ri;if(a!==Hr){const r=10**a;Hr=a,Ua=function(o){let i=1;this._+=o[0];for(const d=o.length;i<d;++i)this._+=Math.round(arguments[i]*r)/r+o[i]}}return Ua}function Fd(e,a){let r=3,n=4.5,o,i;function d(l){return l&&(typeof n=="function"&&i.pointRadius(+n.apply(this,arguments)),Bt(l,o(i))),i.result()}return d.area=function(l){return Bt(l,o(kt)),kt.result()},d.measure=function(l){return Bt(l,o(pa)),pa.result()},d.bounds=function(l){return Bt(l,o(_a)),_a.result()},d.centroid=function(l){return Bt(l,o(rt)),rt.result()},d.projection=function(l){return arguments.length?(o=l==null?(e=null,wn):(e=l).stream,d):e},d.context=function(l){return arguments.length?(i=l==null?(a=null,new Gr(r)):new ei(a=l),typeof n!="function"&&i.pointRadius(n),d):a},d.pointRadius=function(l){return arguments.length?(n=typeof l=="function"?l:(i.pointRadius(+l),+l),d):n},d.digits=function(l){if(!arguments.length)return r;if(l==null)r=null;else{const s=Math.floor(l);if(!(s>=0))throw new RangeError(`invalid digits: ${l}`);r=s}return a===null&&(i=new Gr(r)),d},d.projection(e).digits(r).context(a)}function _n(e){return function(a){var r=new An;for(var n in e)r[n]=e[n];return r.stream=a,r}}function An(){}An.prototype={constructor:An,point:function(e,a){this.stream.point(e,a)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Bn(e,a,r){var n=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),n!=null&&e.clipExtent(null),Bt(r,e.stream(_a)),a(_a.result()),n!=null&&e.clipExtent(n),e}function oi(e,a,r){return Bn(e,function(n){var o=a[1][0]-a[0][0],i=a[1][1]-a[0][1],d=Math.min(o/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),l=+a[0][0]+(o-d*(n[1][0]+n[0][0]))/2,s=+a[0][1]+(i-d*(n[1][1]+n[0][1]))/2;e.scale(150*d).translate([l,s])},r)}function Rd(e,a,r){return oi(e,[[0,0],a],r)}function Od(e,a,r){return Bn(e,function(n){var o=+a,i=o/(n[1][0]-n[0][0]),d=(o-i*(n[1][0]+n[0][0]))/2,l=-i*n[0][1];e.scale(150*i).translate([d,l])},r)}function Md(e,a,r){return Bn(e,function(n){var o=+a,i=o/(n[1][1]-n[0][1]),d=-i*n[0][0],l=(o-i*(n[1][1]+n[0][1]))/2;e.scale(150*i).translate([d,l])},r)}var Yr=16,Dd=Ie(30*et);function Qr(e,a){return+a?Pd(e,a):Id(e)}function Id(e){return _n({point:function(a,r){a=e(a,r),this.stream.point(a[0],a[1])}})}function Pd(e,a){function r(n,o,i,d,l,s,h,p,x,u,b,m,w,y){var f=h-n,v=p-o,E=f*f+v*v;if(E>4*a&&w--){var k=d+u,j=l+b,N=s+m,S=It(k*k+j*j+N*N),L=la(N/=S),C=Re(Re(N)-1)<qe||Re(i-x)<qe?(i+x)/2:sa(j,k),T=e(C,L),O=T[0],U=T[1],R=O-n,D=U-o,g=v*R-f*D;(g*g/E>a||Re((f*R+v*D)/E-.5)>.3||d*u+l*b+s*m<Dd)&&(r(n,o,i,d,l,s,O,U,C,k/=S,j/=S,N,w,y),y.point(O,U),r(O,U,C,k,j,N,h,p,x,u,b,m,w,y))}}return function(n){var o,i,d,l,s,h,p,x,u,b,m,w,y={point:f,lineStart:v,lineEnd:k,polygonStart:function(){n.polygonStart(),y.lineStart=j},polygonEnd:function(){n.polygonEnd(),y.lineStart=v}};function f(L,C){L=e(L,C),n.point(L[0],L[1])}function v(){x=NaN,y.point=E,n.lineStart()}function E(L,C){var T=Ht([L,C]),O=e(L,C);r(x,u,p,b,m,w,x=O[0],u=O[1],p=L,b=T[0],m=T[1],w=T[2],Yr,n),n.point(x,u)}function k(){y.point=f,n.lineEnd()}function j(){v(),y.point=N,y.lineEnd=S}function N(L,C){E(o=L,C),i=x,d=u,l=b,s=m,h=w,y.point=E}function S(){r(x,u,p,b,m,w,i,d,o,l,s,h,Yr,n),y.lineEnd=k,k()}return y}}var _d=_n({point:function(e,a){this.stream.point(e*et,a*et)}});function Bd(e){return _n({point:function(a,r){var n=e(a,r);return this.stream.point(n[0],n[1])}})}function $d(e,a,r,n,o){function i(d,l){return d*=n,l*=o,[a+e*d,r-e*l]}return i.invert=function(d,l){return[(d-a)/e*n,(r-l)/e*o]},i}function Kr(e,a,r,n,o,i){if(!i)return $d(e,a,r,n,o);var d=Ie(i),l=Pe(i),s=d*e,h=l*e,p=d/e,x=l/e,u=(l*r-d*a)/e,b=(l*a+d*r)/e;function m(w,y){return w*=n,y*=o,[s*w-h*y+a,r-h*w-s*y]}return m.invert=function(w,y){return[n*(p*w-x*y+u),o*(b-x*w-p*y)]},m}function Ud(e){return Hd(function(){return e})()}function Hd(e){var a,r=150,n=480,o=250,i=0,d=0,l=0,s=0,h=0,p,x=0,u=1,b=1,m=null,w=Br,y=null,f,v,E,k=wn,j=.5,N,S,L,C,T;function O(g){return L(g[0]*et,g[1]*et)}function U(g){return g=L.invert(g[0],g[1]),g&&[g[0]*wt,g[1]*wt]}O.stream=function(g){return C&&T===g?C:C=_d(Bd(p)(w(N(k(T=g)))))},O.preclip=function(g){return arguments.length?(w=g,m=void 0,D()):w},O.postclip=function(g){return arguments.length?(k=g,y=f=v=E=null,D()):k},O.clipAngle=function(g){return arguments.length?(w=+g?vd(m=g*et):(m=null,Br),D()):m*wt},O.clipExtent=function(g){return arguments.length?(k=g==null?(y=f=v=E=null,wn):yd(y=+g[0][0],f=+g[0][1],v=+g[1][0],E=+g[1][1]),D()):y==null?null:[[y,f],[v,E]]},O.scale=function(g){return arguments.length?(r=+g,R()):r},O.translate=function(g){return arguments.length?(n=+g[0],o=+g[1],R()):[n,o]},O.center=function(g){return arguments.length?(i=g[0]%360*et,d=g[1]%360*et,R()):[i*wt,d*wt]},O.rotate=function(g){return arguments.length?(l=g[0]%360*et,s=g[1]%360*et,h=g.length>2?g[2]%360*et:0,R()):[l*wt,s*wt,h*wt]},O.angle=function(g){return arguments.length?(x=g%360*et,R()):x*wt},O.reflectX=function(g){return arguments.length?(u=g?-1:1,R()):u<0},O.reflectY=function(g){return arguments.length?(b=g?-1:1,R()):b<0},O.precision=function(g){return arguments.length?(N=Qr(S,j=g*g),D()):It(j)},O.fitExtent=function(g,q){return oi(O,g,q)},O.fitSize=function(g,q){return Rd(O,g,q)},O.fitWidth=function(g,q){return Od(O,g,q)},O.fitHeight=function(g,q){return Md(O,g,q)};function R(){var g=Kr(r,0,0,u,b,x).apply(null,a(i,d)),q=Kr(r,n-g[0],o-g[1],u,b,x);return p=cd(l,s,h),S=bn(a,q),L=bn(p,S),N=Qr(S,j),D()}function D(){return C=T=null,O}return function(){return a=e.apply(this,arguments),O.invert=a.invert&&U,R()}}function ii(e,a){var r=a*a,n=r*r;return[e*(.8707-.131979*r+n*(-.013791+n*(.003971*r-.001529*n))),a*(1.007226+r*(.015085+n*(-.044475+.028874*r-.005916*n)))]}ii.invert=function(e,a){var r=a,n=25,o;do{var i=r*r,d=i*i;r-=o=(r*(1.007226+i*(.015085+d*(-.044475+.028874*i-.005916*d)))-a)/(1.007226+i*(.015085*3+d*(-.044475*7+.028874*9*i-.005916*11*d)))}while(Re(o)>qe&&--n>0);return[e/(.8707+(i=r*r)*(-.131979+i*(-.013791+i*i*i*(.003971-.001529*i)))),r]};function Vd(){return Ud(ii).scale(175.295)}function Wd(e){return e}function Gd(e){if(e==null)return Wd;var a,r,n=e.scale[0],o=e.scale[1],i=e.translate[0],d=e.translate[1];return function(l,s){s||(a=r=0);var h=2,p=l.length,x=new Array(p);for(x[0]=(a+=l[0])*n+i,x[1]=(r+=l[1])*o+d;h<p;)x[h]=l[h],++h;return x}}function Yd(e,a){for(var r,n=e.length,o=n-a;o<--n;)r=e[o],e[o++]=e[n],e[n]=r}function Qd(e,a){return typeof a=="string"&&(a=e.objects[a]),a.type==="GeometryCollection"?{type:"FeatureCollection",features:a.geometries.map(function(r){return Jr(e,r)})}:Jr(e,a)}function Jr(e,a){var r=a.id,n=a.bbox,o=a.properties==null?{}:a.properties,i=Kd(e,a);return r==null&&n==null?{type:"Feature",properties:o,geometry:i}:n==null?{type:"Feature",id:r,properties:o,geometry:i}:{type:"Feature",id:r,bbox:n,properties:o,geometry:i}}function Kd(e,a){var r=Gd(e.transform),n=e.arcs;function o(p,x){x.length&&x.pop();for(var u=n[p<0?~p:p],b=0,m=u.length;b<m;++b)x.push(r(u[b],b));p<0&&Yd(x,m)}function i(p){return r(p)}function d(p){for(var x=[],u=0,b=p.length;u<b;++u)o(p[u],x);return x.length<2&&x.push(x[0]),x}function l(p){for(var x=d(p);x.length<4;)x.push(x[0]);return x}function s(p){return p.map(l)}function h(p){var x=p.type,u;switch(x){case"GeometryCollection":return{type:x,geometries:p.geometries.map(h)};case"Point":u=i(p.coordinates);break;case"MultiPoint":u=p.coordinates.map(i);break;case"LineString":u=d(p.arcs);break;case"MultiLineString":u=p.arcs.map(d);break;case"Polygon":u=s(p.arcs);break;case"MultiPolygon":u=p.arcs.map(s);break;default:return null}return{type:x,coordinates:u}}return h(a)}const si={US:[{k:["new york","nyc","brooklyn","manhattan"],ll:[-74,40.7]},{k:["san francisco","sf","palo alto","mountain view","menlo park","san jose","oakland"],ll:[-122.3,37.6]},{k:["los angeles","santa monica","irvine"],ll:[-118.2,34.1]},{k:["seattle","bellevue","redmond"],ll:[-122.3,47.6]},{k:["austin"],ll:[-97.7,30.3]},{k:["boston","cambridge"],ll:[-71.1,42.4]},{k:["chicago"],ll:[-87.6,41.9]},{k:["miami"],ll:[-80.2,25.8]},{k:["denver","boulder"],ll:[-105,39.7]},{k:["atlanta"],ll:[-84.4,33.7]},{k:["washington","arlington","dc"],ll:[-77,38.9]},{k:["dallas","houston"],ll:[-96.8,31.5]},{k:["salt lake","provo"],ll:[-111.9,40.8]},{k:["phoenix","tempe"],ll:[-112.1,33.4]}],CA:[{k:["toronto","waterloo"],ll:[-79.4,43.7]},{k:["montreal"],ll:[-73.6,45.5]},{k:["vancouver"],ll:[-123.1,49.3]},{k:["calgary"],ll:[-114.1,51]},{k:["ottawa"],ll:[-75.7,45.4]}],AU:[{k:["sydney"],ll:[151.2,-33.9]},{k:["melbourne"],ll:[145,-37.8]},{k:["brisbane"],ll:[153,-27.5]},{k:["perth"],ll:[115.9,-32]}],BR:[{k:["sao paulo"],ll:[-46.6,-23.5]},{k:["rio"],ll:[-43.2,-22.9]}],IN:[{k:["bengaluru","bangalore"],ll:[77.6,13]},{k:["mumbai"],ll:[72.9,19.1]},{k:["delhi","gurgaon","gurugram","noida"],ll:[77.2,28.6]},{k:["hyderabad"],ll:[78.5,17.4]},{k:["chennai"],ll:[80.3,13.1]}],CN:[{k:["beijing","pekin"],ll:[116.4,39.9]},{k:["shanghai"],ll:[121.5,31.2]},{k:["shenzhen","canton","guangzhou"],ll:[113.9,22.7]}],RU:[{k:["moscou","moscow"],ll:[37.6,55.8]},{k:["saint petersbourg","saint petersburg"],ll:[30.3,59.9]}]},Jd=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim();function Xd(e,a,r){const n=si[e];if(!n||!n.length)return-1;const o=Jd(a||"");if(o){for(let i=0;i<n.length;i++)if(n[i].k.some(d=>o.includes(d)))return i}return Math.floor(r*n.length)%n.length}let ya=null;function Zd(){return ya||(ya=(async()=>{var e;try{const a=await fetch("/world/countries-110m.json");if(!a.ok)return null;const r=await a.json(),n=(e=r==null?void 0:r.objects)==null?void 0:e.countries;if(!n)return null;const o=Qd(r,n),i=Vd().fitExtent([[8,8],[992,492]],{type:"Sphere"}),d=Fd(i),l=(o.features||[]).filter(p=>{var x;return(((x=p.properties)==null?void 0:x.name)||"")!=="Antarctica"}).map(p=>{var b;const x=((b=p.properties)==null?void 0:b.name)||"",u=d(p)||"";return u?{i2:is(x)||null,n:x,d:u}:null}).filter(p=>!!p);if(!l.length)return null;const s={};for(const[p,x]of Object.entries(ss)){const u=i(x);u&&(s[p]={x:u[0],y:u[1]})}const h={};for(const[p,x]of Object.entries(si)){const u=x.map(b=>i(b.ll)).filter(b=>!!b).map(([b,m])=>({x:b,y:m}));u.length&&(h[p]=u)}return{key:"monde",viewBox:"40 48 920 360",fr:"Monde",en:"World",countries:l,anchors:s,metros:h}}catch{return null}})(),ya)}function ep(e){const[a,r]=c.useState(null);return c.useEffect(()=>{if(!e||a)return;let n=!1;return Zd().then(o=>{!n&&o&&r(o)}),()=>{n=!0}},[e,a]),a}const tp="8 40 984 210",ap={"northam:US":{fx:.64,fy:.68,sx:.44,sy:.28},"northam:CA":{fx:.58,fy:.86,sx:.34,sy:.1},"oceania:AU":{fx:.72,fy:.62,sx:.34,sy:.3},"europe:RU":{fx:.18,fy:.62,sx:.14,sy:.3}},Xr=["#8FA0B8","#9BD1B4","#5FB98C","#2E9A66","#0E8A44","#E2A5A5"];function Zr(e){let a=2166136261;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,16777619);return(a>>>0)/4294967295}function np(e,a){const[r,n]=c.useState(1);return c.useEffect(()=>{let o=!0,i=0;const d=()=>{var h;if(!o)return;const s=(h=e.current)==null?void 0:h.getScreenCTM();s&&s.a>0?n(s.a):i=requestAnimationFrame(d)};d();const l=new ResizeObserver(()=>d());return e.current&&l.observe(e.current),window.addEventListener("resize",d),()=>{o=!1,cancelAnimationFrame(i),l.disconnect(),window.removeEventListener("resize",d)}},[e,a]),r}function eo({msgs:e}){const[a,r]=c.useState(0);c.useEffect(()=>{const o=window.setInterval(()=>r(i=>i+1),2400);return()=>window.clearInterval(o)},[]);const n=[[46,34],[52,41],[41,46],[57,30],[49,52],[36,38],[61,45],[44,27]];return t.jsxs("div",{className:"mapskel","aria-hidden":"true",children:[n.map(([o,i],d)=>t.jsx("i",{style:{left:o+"%",top:i+"%","--d":d*.18+"s"}},d)),t.jsx("span",{className:"mskm",children:e[a%e.length]})]})}function rp(){const{st:e,dispatch:a,scoped:r,pipe:n,markRow:o,markedId:i,byId:d,lang:l,t:s,data:h,dossiers:p,source:x}=Y(),u=h.loading&&!p.length,b=c.useRef(null),m=c.useRef(null),w=ep(e.continent==="monde"),y=e.continent==="monde"?w:Fn.find(g=>g.key===e.continent)||null,f=np(b,e.continent+":"+e.mapFolded+":"+!!y),[v,E]=c.useState(new Map),[k,j]=c.useState(null);c.useEffect(()=>{const g=b.current;if(!g)return;const q=new Map;g.querySelectorAll("path[data-i2]").forEach(M=>{const J=M.dataset.i2;if(J)try{const A=M.getBBox();A.width>0&&q.set(J,{x:A.x,y:A.y,w:A.width,h:A.height})}catch{}}),E(q)},[e.continent,f,y]);const N=c.useMemo(()=>r.filter(g=>g.cc),[r]),S=c.useMemo(()=>{const g=new Map;return N.forEach(q=>g.set(q.cc,(g.get(q.cc)||0)+1)),g},[N]),L=e.continent==="monde"&&w?w.anchors:null,C=e.continent==="monde"&&w?w.metros:null,T=c.useMemo(()=>N.map(g=>{const q=Zr(g.name||g.id||""),M=Zr((g.id||g.name||"")+"·y");if(L&&g.cc){const $=C?C[g.cc]:void 0;if($&&$.length){const K=Xd(g.cc,g.city,q);if(K>=0&&$[K])return{d:g,x:$[K].x+(q-.5)*5,y:$[K].y+(M-.5)*5}}const te=L[g.cc];if(te)return{d:g,x:te.x+(q-.5)*10,y:te.y+(M-.5)*10}}const J=g.cc?v.get(g.cc):void 0;if(!J)return null;const A=ap[`${e.continent}:${g.cc||""}`];if(A)return{d:g,x:J.x+J.w*(A.fx+(q-.5)*A.sx),y:J.y+J.h*(A.fy+(M-.5)*A.sy)};const B=(q-.5)*Math.min(J.w*.55,60),I=(M-.5)*Math.min(J.h*.55,60);return{d:g,x:J.x+J.w/2+B,y:J.y+J.h/2+I}}).filter(g=>!!g),[N,v,L,C,e.continent]),O=g=>f>0?g/f:g,U=c.useMemo(()=>n?[0,1,2,3,4,5].map(g=>({c:Xr[g],fr:s.plabels[g],en:s.plabels[g],n:r.filter(q=>q.kind==="target"&&Le(q)===g).length})).filter(g=>g.n>0):ar.map((g,q)=>({...g,n:r.filter(M=>nr(M)===q).length})),[r,n,s.plabels]),R=i?d.get(i):null,D=R?T.find(g=>g.d.id===R.id):null;return y?t.jsxs("div",{className:"mapzone"+(u?" waiting":""),"data-cont":e.continent,ref:m,children:[u&&t.jsx(eo,{msgs:s.loadMsgs}),t.jsxs("svg",{ref:b,viewBox:e.continent==="monde"?tp:y.viewBox,preserveAspectRatio:e.continent==="monde"?"xMidYMin slice":"xMidYMid meet",role:"img","aria-label":l==="fr"?y.fr:y.en,onMouseLeave:()=>{j(null),o(null)},children:[t.jsx("g",{children:y.countries.map((g,q)=>t.jsx("g",{className:"ct"+(g.i2&&S.get(g.i2)?"":" empty"),children:t.jsx("path",{d:g.d,"data-i2":g.i2||void 0})},q))}),t.jsx("g",{children:T.map(g=>{const q=ar[nr(g.d)],M=!!$e(g.d),J=g.d.kind==="target",A=n&&J?Xr[Le(g.d)]:q.c,B=!n&&Ge(g.d);return t.jsxs("g",{className:"co"+(B?" done":""),onMouseEnter:()=>{var te,K;const I=(te=m.current)==null?void 0:te.getBoundingClientRect(),$=(K=b.current)==null?void 0:K.createSVGPoint();if($&&b.current&&I){$.x=g.x,$.y=g.y;const ye=$.matrixTransform(b.current.getScreenCTM());j({x:ye.x-I.left,y:ye.y-I.top,label:g.d.name+" · "+(Yt(g.d.cc,l)||g.d.countryLabel||"")})}o(g.d.id)},onMouseLeave:()=>{j(null),o(null)},onClick:()=>{var te;if(x==="ops"){window.dispatchEvent(new CustomEvent("ppmap:reveal")),a({type:"focus",id:g.d.id}),(g.d.noCo||["media","nominations","recrutements"].includes(g.d.engine||""))&&(g.d.url||g.d.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:g.d.url||"",text:[g.d.headline,g.d.tagline].filter(Boolean).join(`
`)}})):g.d.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:g.d.name,url:g.d.url||"",website:g.d.website||"",domain:g.d.domain||""}}));return}const I=(te=b.current)==null?void 0:te.createSVGPoint();let $=null;if(I&&b.current){I.x=g.x,I.y=g.y;const K=I.matrixTransform(b.current.getScreenCTM());$={x:K.x,y:K.y}}a({type:"popup",id:g.d.id,anchor:$})},children:[t.jsx("circle",{className:"h",cx:g.x,cy:g.y,r:O(Math.max(11,q.px+7))}),t.jsx("circle",{className:"v",cx:g.x,cy:g.y,r:O(q.px),fill:A,stroke:M?"#E5484D":"#ffffff",strokeWidth:O(M?2.2:1.3)})]},g.d.id||g.d.name)})}),D&&t.jsx("circle",{className:"ring on",cx:D.x,cy:D.y,r:O(13),fill:"none",stroke:"#16233A",strokeWidth:O(2)})]}),t.jsx("div",{className:"hov"+(k?" on":""),style:k?{left:k.x,top:k.y}:void 0,children:k==null?void 0:k.label}),t.jsx("div",{className:"legend",children:U.map((g,q)=>t.jsxs("span",{children:[t.jsx("i",{style:{"--c":g.c}}),l==="fr"?g.fr:g.en," ",t.jsx("b",{children:g.n})]},q))}),r.some(g=>!g.cc)&&t.jsx("div",{className:"legend",style:{left:"auto",right:10},children:t.jsxs("span",{children:["🌐 ",s.notLocated," ",t.jsx("b",{children:r.filter(g=>!g.cc).length})]})})]}):t.jsx("div",{className:"mapzone"+(u?" waiting":""),"data-cont":e.continent,ref:m,children:t.jsx(eo,{msgs:s.loadMsgs})})}function op(e,a){const r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!r)return e;const o=(a==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"])[Number(r[2])-1]||r[2],i=Number(r[3]);return a==="en"?`${o} ${i}, ${r[1]}`:`${i} ${o} ${r[1]}`}function li({compact:e=!1}){const{st:a,dispatch:r,dossiers:n,t:o,pipe:i,contName:d,lang:l}=Y(),s=a.filters,[h,p]=c.useState(!1),[x,u]=c.useState(!1),b=c.useRef(null),m=c.useRef(null),w=c.useMemo(()=>a.continent==="monde"?n:n.filter(D=>D.continent===a.continent),[n,a.continent]),y=D=>w.filter(g=>D!=="country"&&s.country.length&&!s.country.includes(g.cc||"")?!1:Ra(g,s,i,D==="country"?void 0:D)),f=D=>!i||D.kind!=="op",v=c.useMemo(()=>{const D=y("win").filter(f),g=q=>D.filter(M=>(M.date?Math.max(0,Math.floor((Date.now()-Date.parse(M.date))/864e5)):9999)<=q).length;return[g(0),g(7),g(30),D.length]},[w,s,i]),E=c.useMemo(()=>s.day?y("win").filter(f).filter(D=>(D.date||"").slice(0,10)===s.day).length:0,[w,s,i]),k=(s.signalOnly?1:0)+s.sector.length+s.market.length+s.country.length+s.engine.length+s.stage.length+s.angle.length+s.memoLevel.length+s.crible.length,j=k+(s.acquirer.trim()?1:0)+(s.day||s.win!=="all"?1:0)+(s.search.trim()?1:0);c.useEffect(()=>{a.openFacet&&p(!1)},[a.openFacet]),c.useEffect(()=>{if(!h&&!x)return;const D=q=>{var J,A;const M=q.target;h&&!((J=b.current)!=null&&J.contains(M))&&p(!1),x&&!((A=m.current)!=null&&A.contains(M))&&u(!1)},g=q=>{q.key==="Escape"&&(p(!1),u(!1))};return document.addEventListener("mousedown",D),document.addEventListener("keydown",g),()=>{document.removeEventListener("mousedown",D),document.removeEventListener("keydown",g)}},[h,x]);const N=(D,g,q,M="fbtn")=>t.jsxs("button",{type:"button",className:M,"aria-expanded":a.openFacet===D,onClick:()=>r({type:"openFacet",facet:D}),children:[t.jsx("span",{className:"fl",children:g}),q>0&&t.jsx("span",{className:"n",children:q}),t.jsx("span",{className:"cv",children:"▾"})]},D),S=["1","7","30","all"],L=Math.max(0,S.indexOf(s.win||"all")),C=s.day?t.jsxs("div",{className:"seg",children:[t.jsxs("button",{type:"button","aria-pressed":!0,children:[t.jsx("span",{className:"sl",children:o.fDay(op(s.day,l))}),t.jsx("b",{children:E})]}),t.jsx("button",{type:"button",onClick:()=>r({type:"filters",patch:{day:"",win:"all"}}),children:o.fDayOff})]}):e?t.jsxs("div",{className:"winpick",ref:m,children:[t.jsxs("button",{type:"button",className:"winpick-btn","aria-expanded":x,"aria-haspopup":"listbox",onClick:()=>u(D=>!D),children:[t.jsx("span",{className:"winpick-k",children:o.winMenu}),t.jsx("span",{className:"winpick-v",children:o.datesShort[L]}),t.jsx("b",{children:v[L]}),t.jsx("i",{children:x?"▴":"▾"})]}),x&&t.jsx("div",{className:"winpick-pop",role:"listbox",children:S.map((D,g)=>t.jsxs("button",{type:"button",role:"option","aria-selected":s.win===D,onClick:()=>{r({type:"filters",patch:{win:D}}),u(!1)},children:[o.datesShort[g],t.jsx("span",{className:"n",children:v[g]})]},D))})]}):t.jsx("div",{className:"seg",children:S.map((D,g)=>t.jsxs("button",{type:"button","aria-pressed":s.win===D,onClick:()=>r({type:"filters",patch:{win:D}}),children:[t.jsx("span",{className:"sl",children:o.dates[g]}),t.jsx("b",{children:v[g]})]},D))}),T=t.jsxs("span",{className:"fsrch",children:["🔍",t.jsx("input",{placeholder:o.identSearch,value:s.search,onChange:D=>r({type:"filters",patch:{search:D.target.value}})})]}),O=t.jsxs("div",{className:"facets",children:[t.jsxs("button",{type:"button",className:"fbtn fsig","aria-expanded":a.openFacet==="sig",onClick:()=>r({type:"openFacet",facet:"sig"}),children:[t.jsx("span",{className:"fl",children:o.fSignal}),s.signalOnly&&t.jsx("span",{className:"n",children:s.signalEngines.length||"✓"}),t.jsx("span",{className:"cv",children:"▾"})]}),s.sector.length===1?t.jsxs("button",{type:"button",className:"fbtn on","aria-expanded":a.openFacet==="sec",onClick:()=>r({type:"openFacet",facet:"sec"}),title:s.sector[0],children:[t.jsx("span",{className:"fl",children:o.fSector}),t.jsx("span",{className:"n",style:{maxWidth:"16ch",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.sector[0]}),t.jsx("span",{className:"cv",children:"▾"})]}):N("sec",o.fSector,s.sector.length),(n.some(D=>!!D.market)||s.market.length>0)&&N("mar",o.fMarket,s.market.length),N("pay",o.fCountry,s.country.length),N("det",o.fEngine,s.engine.length),N("sta",o.fStage,s.stage.length),i&&N("crib",o.fVerdict,s.crible.length),i&&N("ang","Angle",s.angle.length),i&&N("mem","Mémo",s.memoLevel.length)]}),U=(D=!1)=>t.jsxs("div",{className:"frow2",children:[j>0&&t.jsxs("button",{type:"button",className:"resetbtn on",title:o.clearTitle(w.length,d),onClick:()=>r({type:"reset"}),children:[t.jsx("span",{className:"rot",children:"↺"}),t.jsx("span",{children:o.clear(j)})]}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:o.alertBtn}),D&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>r({type:"mapFold",folded:!1}),children:o.showMap})]}),R=t.jsxs("div",{className:"fmenu",ref:b,children:[t.jsxs("button",{type:"button",className:"fbtn fmenu-btn"+(k?" on":""),"aria-expanded":h,"aria-haspopup":"true",onClick:()=>{p(D=>!D),a.openFacet&&r({type:"openFacet",facet:null})},children:[t.jsx("span",{className:"fl",children:o.fMenu}),k>0&&t.jsx("span",{className:"n",children:k}),t.jsx("span",{className:"cv",children:h?"▴":"▾"})]}),h&&t.jsx("div",{className:"fmenu-pop",role:"menu",children:O})]});return e?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"fstrip"+(s.day?" noday":""),children:[t.jsx("div",{className:"fstrip-a",children:C}),t.jsxs("div",{className:"fstrip-b",children:[T,R,U(!1)]})]}),a.openFacet&&t.jsx(to,{poolFor:y})]}):t.jsxs(t.Fragment,{children:[t.jsxs("aside",{className:"fbar",children:[C,T,O,t.jsx("span",{className:"fgrow"}),U()]}),a.openFacet&&t.jsx(to,{poolFor:y})]})}function to({poolFor:e}){const{st:a,dispatch:r,t:n,lang:o,pipe:i,data:d}=Y(),l=a.filters,s=a.openFacet,{title:h,cols:p,options:x}=c.useMemo(()=>{if(s==="sig"){const y=e("signal").filter(E=>$e(E)),f=new Map;y.forEach(E=>{const k=E.engine||"";f.set(k,(f.get(k)||0)+1)});const v=[{v:"*",label:n.fpSigAll,n:y.length,html:!0,on:l.signalOnly&&!l.signalEngines.length},...un([...f.keys()],o).map(E=>({v:E,label:Ft(E)+" "+tt(E,o),n:f.get(E)||0,html:!1,on:l.signalOnly&&l.signalEngines.includes(E)}))];return{title:n.fpSigTitle,cols:2,options:v}}if(s==="crib"){const y=e("crible").filter(v=>!i||xo(v,a.ptab,d.favIds)),f=new Map;return y.forEach(v=>{const E=bo(v);E&&E!=="NEW"&&f.set(E,(f.get(E)||0)+1)}),{title:n.fVerdict.toUpperCase(),cols:2,options:[...f.entries()].sort((v,E)=>(rr[v[0]]??9)-(rr[E[0]]??9)||E[1]-v[1]).map(([v,E])=>({v,label:'<span class="fdot" style="background:'+(ls[v]||"#94A3B8")+'"></span>'+v,n:E,html:!0,on:l.crible.includes(v)}))}}if(s==="sec"){const y=e("sector"),f=new Map;return y.forEach(v=>{v.sector&&f.set(v.sector,(f.get(v.sector)||0)+1)}),{title:n.fSector,cols:3,options:[...f.entries()].sort((v,E)=>E[1]-v[1]).map(([v,E])=>({v,label:v,n:E,html:!1,on:l.sector.includes(v)}))}}if(s==="mar"){const y=e("market"),f=new Map;return y.forEach(v=>{v.market&&f.set(v.market,(f.get(v.market)||0)+1)}),{title:n.fMarket,cols:3,options:[...f.entries()].sort((v,E)=>E[1]-v[1]).map(([v,E])=>({v,label:v,n:E,html:!1,on:l.market.includes(v)}))}}if(s==="pay"){const y=e("country"),f=new Map;return y.forEach(v=>{v.cc&&f.set(v.cc,(f.get(v.cc)||0)+1)}),{title:n.fCountry,cols:3,options:[...f.entries()].sort((v,E)=>E[1]-v[1]).map(([v,E])=>({v,label:Yt(v,o)||v,n:E,html:!1,on:l.country.includes(v)}))}}if(s==="det"){const y=e("engine"),f=new Map;return y.forEach(v=>{v.engine&&f.set(v.engine,(f.get(v.engine)||0)+1)}),{title:n.fEngine,cols:2,options:un([...f.keys()],o).map(v=>({v,label:Ft(v)+" "+tt(v,o)+' <span style="color:var(--dim);font-size:10px">· '+ds(ps(v),o)+"</span>",n:f.get(v)||0,html:!0,on:l.engine.includes(v)}))}}if(s==="ang"){const y=e("angle"),f=new Map;return y.forEach(v=>{v.angle&&f.set(v.angle,(f.get(v.angle)||0)+1)}),{title:"ANGLE",cols:2,options:[...f.entries()].sort((v,E)=>E[1]-v[1]).map(([v,E])=>({v,label:v.replace(/[_-]+/g," "),n:E,html:!1,on:l.angle.includes(v)}))}}if(s==="mem"){const y=e("memoLevel"),f=new Map;y.forEach(E=>{if(E.kind==="target"){const k=Ln(E);f.set(k,(f.get(k)||0)+1)}});const v=["Aucun mémo","Mémo instantané","Mémo détaillé"];return{title:"MÉMO",cols:2,options:[0,1,2].map(E=>({v:String(E),label:v[E],n:f.get(E)||0,html:!1,on:l.memoLevel.includes(E)}))}}const m=e("stage"),w=new Map;return m.forEach(y=>{y.stage&&w.set(y.stage,(w.get(y.stage)||0)+1)}),{title:n.fStage,cols:2,options:[...w.entries()].sort((y,f)=>f[1]-y[1]).map(([y,f])=>({v:y,label:y,n:f,html:!1,on:l.stage.includes(y)}))}},[s,a,o]),u=m=>{if(s==="sig"){if(m==="*")r({type:"filters",patch:{signalOnly:!(l.signalOnly&&!l.signalEngines.length),signalEngines:[]}});else{const y=l.signalEngines.includes(m)?l.signalEngines.filter(f=>f!==m):[...l.signalEngines,m];r({type:"filters",patch:{signalOnly:!0,signalEngines:y}})}return}if(s==="mem"){r({type:"toggleMemoLevel",value:Number(m)});return}r({type:"toggleFacet",facet:s==="sec"?"sector":s==="mar"?"market":s==="pay"?"country":s==="det"?"engine":s==="ang"?"angle":s==="crib"?"crible":"stage",value:m})},b=()=>{r(s==="sig"?{type:"filters",patch:{signalOnly:!1,signalEngines:[]}}:s==="mem"?{type:"clearFacet",facet:"memoLevel"}:{type:"clearFacet",facet:s==="sec"?"sector":s==="mar"?"market":s==="pay"?"country":s==="det"?"engine":s==="ang"?"angle":s==="crib"?"crible":"stage"})};return t.jsxs("div",{className:"fpanel on",children:[t.jsxs("div",{className:"ph",children:[t.jsx("b",{children:h}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",onClick:b,children:n.fpNone}),t.jsx("button",{type:"button",onClick:()=>r({type:"openFacet",facet:null}),children:n.fpClose})]}),t.jsx("div",{className:"fcols"+(p===2?" two":""),children:x.map(m=>t.jsxs("button",{type:"button",className:"opt","aria-pressed":m.on,onClick:()=>u(m.v),children:[t.jsx("span",{className:"bx"}),m.html?t.jsx("span",{className:"l",dangerouslySetInnerHTML:{__html:m.label}}):t.jsx("span",{className:"l",children:m.label}),t.jsx("span",{className:"n",children:m.n})]},m.v))}),t.jsxs("div",{className:"pf",children:[t.jsx("span",{className:"t",children:n.alertReady}),t.jsx("button",{type:"button",className:"alertbtn",onClick:()=>r({type:"modal",modal:"alert"}),children:n.alertCreate})]})]})}function di({mapToggle:e=!0,variant:a="tabs"}){const{dossiers:r,st:n,dispatch:o,pipe:i,lang:d,t:l}=Y(),s=c.useMemo(()=>{const b={};return r.forEach(m=>{Ra(m,n.filters,i)&&(b.monde=(b.monde||0)+1,m.continent&&(b[m.continent]=(b[m.continent]||0)+1))}),b},[r,n.filters,i]),[h,p]=c.useState(!1),x=c.useRef(null);c.useEffect(()=>{if(!h)return;const b=w=>{var y;(y=x.current)!=null&&y.contains(w.target)||p(!1)},m=w=>{w.key==="Escape"&&p(!1)};return document.addEventListener("mousedown",b),document.addEventListener("keydown",m),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",m)}},[h]);const u=b=>{const m=Fn.find(w=>w.key===b);return b==="monde"?l.contWorld:d==="fr"?m.fr:m.en};return a==="compact"?t.jsxs("div",{className:"contpick",ref:x,children:[t.jsxs("button",{type:"button",className:"contpick-btn","aria-expanded":h,"aria-haspopup":"listbox",onClick:()=>p(b=>!b),children:[u(n.continent),t.jsx("span",{className:"n",children:s[n.continent]||0}),t.jsx("i",{children:h?"▴":"▾"})]}),h&&t.jsx("div",{className:"contpick-pop",role:"listbox",children:or.map(b=>t.jsxs("button",{type:"button",role:"option","aria-selected":n.continent===b,onClick:()=>{o({type:"continent",key:b}),p(!1)},children:[u(b),t.jsx("span",{className:"n",children:s[b]||0})]},b))}),t.jsx("button",{type:"button",className:"resetmap",title:l.toolReset,onClick:()=>{o({type:"reset"}),o({type:"ptab",tab:1}),o({type:"continent",key:i?"europe":"monde"}),o({type:"dens",dens:"liste"});try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}},children:l.toolReset}),e&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>o({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?l.showMap:l.hideMap})]}):t.jsxs("div",{className:"conts",children:[or.map(b=>t.jsxs("button",{type:"button",className:"cbtn","aria-selected":n.continent===b,onClick:()=>o({type:"continent",key:b}),children:[u(b),t.jsx("span",{className:"n",children:s[b]||0})]},b)),t.jsxs("span",{className:"side",children:[t.jsx("button",{type:"button",className:"resetmap",title:l.toolReset,onClick:()=>{o({type:"reset"}),o({type:"ptab",tab:1}),o({type:"continent",key:i?"europe":"monde"}),o({type:"dens",dens:"liste"});try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}},children:l.toolReset}),e&&t.jsx("button",{type:"button",className:"mapbtn",onClick:()=>o({type:"mapFold",folded:!n.mapFolded}),children:n.mapFolded?l.showMap:l.hideMap})]})]})}function qn(e){try{return JSON.parse(localStorage.getItem(e)||"[]")}catch{return[]}}function pi(e){return"atl2:evalq:"+(e||"anon")}function ip(e,a){const r=pi(e),n=qn(r),o=new Set(n.map(l=>(l.name||"").trim().toLowerCase())),i=a.map(l=>(l||"").trim()).filter(l=>l&&!o.has(l.toLowerCase())).map(l=>({name:l,site:"",status:"",auto:!0}));if(!i.length)return 0;const d=[...n,...i].slice(0,30);try{localStorage.setItem(r,JSON.stringify(d)),window.dispatchEvent(new CustomEvent("atl2:evalq"))}catch{}return i.length}function sp(){const{t:e,data:a,dossiers:r}=Y(),n=a.session.token||"",o=pi(n),[i,d]=c.useState(()=>qn(o)),l=c.useRef(!1),[s,h]=c.useState(!1);c.useEffect(()=>{try{const A=i.slice(0,30).map(({descBusy:B,evalBusy:I,...$})=>$);localStorage.setItem(o,JSON.stringify(A)),l.current=!0,window.dispatchEvent(new CustomEvent("atl2:evalq")),l.current=!1}catch{}},[i,o]),c.useEffect(()=>{const A=()=>{if(l.current)return;const B=qn(o);d(I=>JSON.stringify(I.map(({descBusy:$,evalBusy:te,...K})=>K))===JSON.stringify(B)?I:B)};return window.addEventListener("atl2:evalq",A),window.addEventListener("storage",A),()=>{window.removeEventListener("atl2:evalq",A),window.removeEventListener("storage",A)}},[o]);const[p,x]=c.useState([]),[u,b]=c.useState(""),[m,w]=c.useState(!1),[y,f]=c.useState(!1),[v,E]=c.useState(""),k=c.useCallback((A,B)=>d(I=>I.map(($,te)=>te===A?{...$,...B}:$)),[]),j=c.useCallback((A,B)=>{const I=B.trim();I&&(k(A,{name:I,status:"resolving",site:"",candidates:void 0,auto:!1,desc:"",descDone:!1}),Rn(I).then($=>{const te=$.candidates||[];$.website?k(A,{site:$.website,status:"ready"}):te.length===1?k(A,{site:te[0].url,status:"ready"}):te.length>1?k(A,{status:"pick",candidates:te.slice(0,6)}):k(A,{status:"ready"})}).catch(()=>k(A,{status:"ready"})))},[k]),N=c.useCallback((A,B,I)=>{k(A,{descBusy:!0}),wo(n,B,I).then($=>{if($.quota){h(!0),k(A,{descBusy:!1,descDone:!0});return}const te=$.blocs||{},K=(te.synthese||te.value_prop||te.produit||te.modele||"").trim();k(A,{descBusy:!1,descDone:!0,desc:K})}).catch(()=>k(A,{descBusy:!1,descDone:!0}))},[k,n]);c.useEffect(()=>{const A=i.findIndex(I=>I.auto&&I.name.trim()&&I.status==="");if(A>=0){j(A,i[A].name);return}if(s)return;const B=i.findIndex(I=>I.status==="ready"&&I.site&&!I.descDone&&!I.descBusy);B>=0&&N(B,i[B].name,i[B].site)},[i,j,N,s]);const[S,L]=c.useState(!1),C=c.useCallback(async(A,B)=>{k(A,{evalBusy:!0});const I=await yo(n,(B.site||B.name).trim(),"atelier2");return I.verdict==="quota"?(k(A,{evalBusy:!1}),window.dispatchEvent(new CustomEvent("ppmap:evalcard",{detail:{name:"",verdict:"quota",reason:I.reason||"",remaining:0}})),!1):(k(A,{evalBusy:!1,status:I.verdict==="kept"?"kept":"out",reason:I.reason||""}),window.dispatchEvent(new CustomEvent("ppmap:evalcard",{detail:{name:I.company||B.name,verdict:I.verdict,reason:I.reason||"",remaining:I.remaining??null}})),!0)},[k,n]),T=async()=>{if(S)return;const A=i.map((B,I)=>({r:B,i:I})).filter(({r:B})=>B.name.trim()&&B.status!=="kept"&&B.status!=="out"&&B.status!=="resolving");if(A.length){L(!0);for(const{r:B,i:I}of A)if(!await C(I,B))break;L(!1)}},O=c.useMemo(()=>{const A=new Set,B=[];return i.filter(I=>I.status==="kept").forEach(I=>{const $=I.name.trim().toLowerCase();$&&!A.has($)&&(A.add($),B.push(I.name.trim()))}),r.filter(I=>Le(I)>=1&&Le(I)<=4&&(I.website||I.domain)).forEach(I=>{const $=(I.name||"").trim().toLowerCase();$&&!A.has($)&&(A.add($),B.push((I.name||"").trim()))}),B},[i,r]),U=c.useMemo(()=>{const A=new Set;return r.forEach(B=>{const I=(B.name||"").trim().toLowerCase();I&&A.add(I)}),i.forEach(B=>{const I=B.name.trim().toLowerCase();I&&A.add(I)}),A},[r,i]),R=async()=>{if(u||!O.length)return;f(!1);const A=[];for(const B of O.slice(0,2)){b(B);const I=await ko(n,B);if(I){if(I.verdict==="quota"){w(!0);break}(I.results||[]).forEach($=>{const te=($.company||"").trim().toLowerCase();!te||U.has(te)||A.some(K=>K.name.toLowerCase()===te)||A.push({name:($.company||"").trim(),verdict:$.verdict||"",reason:$.reason,from:B})})}}b(""),f(!0),x(B=>[...A,...B].slice(0,24))},D=async(A,B)=>{if(u)return;f(!1),b(A==="thesis"?e.pxThesis:B);const I=await cs(n,A,B,6);if(b(""),f(!0),!I)return;if(I.verdict==="quota"){w(!0);return}const $=[];(I.results||[]).forEach(te=>{const K=(te.company||"").trim().toLowerCase();!K||U.has(K)||$.some(ye=>ye.name.toLowerCase()===K)||$.push({name:(te.company||"").trim(),verdict:te.verdict||"",reason:te.reason,from:A==="thesis"?e.pxThesis:B})}),x(te=>[...$,...te].slice(0,24))},g=()=>{const A=v.trim();A.length<3||D(/^\d{2}\.?\d{2}[A-Za-z]?$/.test(A)?"registry":"keyword",A)},q=A=>{d(B=>[...B,{name:A.name,site:"",status:"",auto:!0}].slice(0,30)),x(B=>B.filter(I=>I.name!==A.name))},M=i.filter(A=>A.name.trim()&&A.status!=="kept"&&A.status!=="out").length,J=A=>A.name.trim()&&A.status!=="kept"&&A.status!=="out"&&A.status!=="resolving"&&!A.evalBusy;return t.jsxs("div",{className:"bulk on evalq",children:[t.jsxs("div",{className:"eq-rows",children:[t.jsxs("div",{className:"eq-head",children:[t.jsx("span",{children:e.eqColName}),t.jsx("span",{children:e.eqColSite}),t.jsx("span",{children:e.eqColDesc}),t.jsx("span",{children:e.eqColState}),t.jsx("span",{}),t.jsx("span",{})]}),i.map((A,B)=>t.jsxs("div",{className:"eq-row"+(A.status==="kept"?" r-kept":A.status==="out"?" r-out":""),children:[t.jsx("input",{value:A.name,placeholder:e.eqNamePh,onChange:I=>{const $=I.target.value.split(`
`).map(te=>te.trim()).filter(Boolean);$.length>1?d(te=>{const K=[...te];return K.splice(B,1,...$.map(ye=>({name:ye,site:"",status:"",auto:!0}))),K.slice(0,30)}):k(B,{name:I.target.value})},onBlur:()=>{A.name.trim()&&!A.site&&A.status!=="resolving"&&A.status!=="pick"&&j(B,A.name)},onKeyDown:I=>{I.key==="Enter"&&j(B,A.name)}}),t.jsxs("span",{className:"eq-site",children:[A.status==="resolving"&&t.jsx("i",{className:"eq-spin",children:e.eqLookup}),A.status==="pick"&&t.jsxs("select",{className:"eq-pick",defaultValue:"",onChange:I=>{const $=I.target.value;$&&k(B,{site:$,status:"ready",candidates:void 0})},children:[t.jsx("option",{value:"",disabled:!0,children:e.eqPick}),(A.candidates||[]).map(I=>t.jsx("option",{value:I.url,children:(I.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,40)},I.url))]}),A.status!=="resolving"&&A.status!=="pick"&&(A.site?t.jsxs("a",{href:A.site.startsWith("http")?A.site:"https://"+A.site,target:"_blank",rel:"nofollow noopener",children:[A.site.replace(/^https?:\/\/(www\.)?/,"").slice(0,28)," ↗"]}):t.jsx("em",{children:A.name.trim()&&A.status==="ready"?e.eqNoSite:""}))]}),t.jsx("span",{className:"eq-desc",title:A.desc||"",children:A.descBusy?t.jsx("i",{children:e.eqDescBusy}):A.desc?A.desc:t.jsx("em",{children:A.descDone?s?e.eqDescQuota:e.eqDescNone:""})}),t.jsx("span",{className:"eq-st s-"+(A.status||"vide"),title:A.reason||"",children:A.status==="kept"?"✓ "+e.kept:A.status==="out"?"✗ "+e.dropped:A.status==="ready"?e.eqReady:A.status==="pick"?e.eqPick:""}),t.jsxs("button",{type:"button",className:"eq-go",title:e.eqRunOne,disabled:!J(A)||S,onClick:()=>{C(B,A)},children:[A.evalBusy?"⏳":"⚡",t.jsx("b",{children:e.eqRunOneShort})]}),t.jsx("button",{type:"button",className:"eq-x",title:"×",onClick:()=>d(I=>I.filter(($,te)=>te!==B)),children:"×"})]},B)),t.jsxs("button",{type:"button",className:"eq-add",onClick:()=>d(A=>[...A,{name:"",site:"",status:""}].slice(0,30)),children:["+ ",e.eqAdd]})]}),t.jsxs("div",{className:"eq-foot",children:[t.jsxs("div",{className:"eq-sugg",children:[t.jsx("button",{type:"button",className:"eq-sugg-go",disabled:!!u,onClick:()=>{D("thesis","")},children:u===e.pxThesis?e.sgBusy(u):e.pxGoThesis}),t.jsx("input",{className:"eq-sugg-in",value:v,placeholder:e.pxPlace,onChange:A=>E(A.target.value),onKeyDown:A=>{A.key==="Enter"&&g()}}),t.jsx("button",{type:"button",className:"eq-sugg-go2",disabled:!!u||v.trim().length<3,onClick:g,children:e.pxGoFree}),!!O.length&&t.jsx("button",{type:"button",className:"eq-sugg-go2",disabled:!!u,onClick:()=>{R()},children:u&&u!==e.pxThesis&&u!==v?e.sgBusy(u):e.sgGo}),!!O.length&&t.jsx("span",{className:"eq-sugg-note",children:e.sgFrom(O[0],O.length)}),m&&t.jsx("span",{className:"eq-sugg-q",children:e.sgQuota}),y&&!p.length&&!m&&t.jsx("span",{className:"eq-sugg-q",children:e.sgNone}),p.map(A=>t.jsxs("span",{className:"eq-sc"+(A.verdict==="kept"?" ok":""),title:(A.reason||"")+" — "+e.sgVia(A.from),children:[t.jsx("b",{children:A.name}),A.verdict==="kept"&&t.jsx("i",{children:"✓"}),t.jsx("button",{type:"button",onClick:()=>q(A),children:"+"})]},A.name))]}),t.jsxs("div",{className:"side",children:[t.jsx("span",{className:"hint",children:e.eqHint}),i.some(A=>A.status==="kept"||A.status==="out")&&t.jsx("button",{type:"button",className:"dmulti",onClick:()=>d(A=>A.filter(B=>B.status!=="kept"&&B.status!=="out")),children:e.eqClearDone}),t.jsxs("button",{type:"button",className:"evalbtn"+(S?" loading":""),style:{justifyContent:"center"},disabled:S||!M,onClick:()=>{T()},children:[t.jsx("span",{className:"fill"}),S?e.eqRunning:e.eqGo(M)]})]})]})]})}const lp={deals:"ma-deals",news:"veille"};function ao(e){return(e.url||e.title||"").trim()}function dp(e){const a=(e.title||"").replace(/\s+/g," ").trim();if(!a)return(e.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,40);const r=/^(.{2,72}?)[:–—|]/.exec(a);return r?r[1].trim():(a.split(/ (?:in talks|acquiert|acquires|raises|lève|reports)\b/i)[0]||a).slice(0,72).trim()}function pp({pageToken:e,onAddNames:a}){const{t:r,lang:n,token:o,canWrite:i}=Y(),[d,l]=c.useState(null),[s,h]=c.useState({deals:[],news:[]}),[p,x]=c.useState({deals:!1,news:!1}),[u,b]=c.useState(null),[m,w]=c.useState(""),y=c.useRef(!1),f=c.useCallback(async C=>{if(!o)return[];if(p[C])return s[C];b(C),w("");const T=await us(lp[C],o,n);return b(null),!T.ok&&T.error?(w(T.error),[]):(h(O=>({...O,[C]:T.items})),x(O=>({...O,[C]:!0})),T.items)},[o,n,p,s]);c.useEffect(()=>{d&&f(d)},[d,f]);const v=c.useCallback(C=>s[C].map(ao).filter(Boolean),[s]),E=c.useMemo(()=>{var O,U;if(!o)return{deals:[],news:[]};const C={deals:v("deals"),news:v("news")},T=Lo("feed:"+o,C);return{deals:((O=T.deals)==null?void 0:O.noms)||[],news:((U=T.news)==null?void 0:U.noms)||[]}},[o,v]),k=c.useRef(null);c.useEffect(()=>{k.current&&!d&&o&&Fo("feed:"+o,{deals:v("deals"),news:v("news")}),k.current=d},[d,o,v]);const j=C=>{const T=C.map(dp).filter(Boolean);T.length&&(a(T),l(null))},N=(C,T)=>{const O=(C.url||"").trim();if(T==="news"&&O&&/^https?:\/\//i.test(O)){window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:O}})),l(null);return}j([C])},S=async C=>{if(d===C){l(null);return}if(y.current)return;y.current=!0;const T=await f(C);if(y.current=!1,C==="deals"&&T.length){j(T);return}l(C)},L=C=>{const T=s[C],O=new Set(E[C].map(U=>U.toLowerCase()));return t.jsxs("div",{className:"dfpane"+(d===C?" on":""),hidden:d!==C,children:[t.jsx("p",{className:"dfh",children:C==="deals"?r.feedDealsH:r.feedNewsH}),u===C&&t.jsx("p",{className:"dfload",children:n==="en"?"Loading…":"Chargement…"}),d===C&&!!m&&t.jsx("p",{className:"dferr",children:m}),p[C]&&!T.length&&!u&&t.jsx("p",{className:"dfempty",children:C==="deals"?r.feedEmptyDeals:r.feedEmptyNews}),!!T.length&&t.jsx("ul",{className:"dflist",children:T.map((U,R)=>{const D=ao(U),g=O.has(D.toLowerCase()),q=(U.url||"").trim();return t.jsxs("li",{className:g?"new":void 0,children:[t.jsxs("div",{children:[t.jsx("b",{children:U.title||q}),t.jsx("span",{children:[U.source,U.sector_fr,(U.published_at||"").slice(0,10)].filter(Boolean).join(" · ")})]}),t.jsxs("span",{className:"dfacts",children:[q&&t.jsx("a",{href:q,target:"_blank",rel:"noopener noreferrer",children:r.feedOpen}),i&&t.jsx("button",{type:"button",className:"dfan",onClick:()=>N(U,C),children:C==="deals"?r.feedToEval:r.feedToExtract})]})]},D||R)})})]})};return t.jsxs(t.Fragment,{children:[["deals","news"].map(C=>{const T=E[C].length;return t.jsxs("button",{type:"button",className:"dmulti dfbtn "+(C==="deals"?"ddeals":"dnews")+(d===C?" on":""),onClick:()=>{S(C)},children:[C==="deals"?r.feedDeals:r.feedNews,T>0&&t.jsx("em",{title:r.feedHint,children:r.feedNew(T)})]},C)}),d&&L(d)]})}function ci(e){return String(e||"").split(`
`).map(a=>a.replace(/^#{1,6}\s*/,"").replace(/[*_`>]/g,"").trimEnd()).filter(a=>a.trim().length>0)}function cp(e){var o;const a=[],r=new Set,n=i=>{const d=(i||"").trim();!d||r.has(d.toLowerCase())||(r.add(d.toLowerCase()),a.push(d))};return((e==null?void 0:e.companies_cited)||[]).forEach(i=>n(i==null?void 0:i.name)),(((o=e==null?void 0:e.prospective)==null?void 0:o.companies_to_evaluate)||[]).forEach(i=>n(i==null?void 0:i.name)),a}function no({icon:e,title:a,hint:r,rows:n,addLabel:o,onEvaluate:i,onAddAll:d}){const{t:l}=Y();return n.length?t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:[e," ",a]}),t.jsx("span",{className:"n",children:n.length}),d&&t.jsx("button",{type:"button",className:"rsblk-all",onClick:()=>d(n.map(s=>s.name)),children:o})]}),t.jsx("p",{className:"rsblk-hint",children:r}),t.jsx("div",{className:"rsblk-rows",children:n.map(s=>t.jsxs("div",{className:"rsrow",children:[t.jsxs("div",{className:"rsrow-t",children:[t.jsxs("div",{className:"rsrow-h",children:[t.jsx("span",{className:"nm",children:s.name}),s.chips.map(h=>t.jsx("span",{className:"ch",children:h},h))]}),s.line1&&t.jsx("p",{className:"w",children:s.line1}),s.line2&&t.jsx("p",{className:"r",children:s.line2})]}),t.jsx("button",{type:"button",className:"rsrow-go",onClick:()=>i(s.name),children:l.rsEvalOne})]},s.name))})]}):null}function ui({card:e,onEvaluate:a,onAddAll:r}){var d;const{t:n}=Y(),o=((e==null?void 0:e.companies_cited)||[]).filter(l=>l&&(l.name||"").trim()).map(l=>({name:(l.name||"").trim(),line1:(l.what||"").trim(),line2:(l.role||"").trim(),chips:[(l.country||"").trim()].filter(Boolean)})),i=(((d=e==null?void 0:e.prospective)==null?void 0:d.companies_to_evaluate)||[]).filter(l=>l&&(l.name||"").trim()).map(l=>({name:(l.name||"").trim(),line1:(l.why||"").trim(),chips:[(l.country||"").trim(),(l.stage||"").trim()].filter(Boolean)}));return!o.length&&!i.length?t.jsx("p",{className:"rsblk-none",children:n.rsNoCompanies}):t.jsxs(t.Fragment,{children:[t.jsx(no,{icon:"🏷",title:n.rsCited,hint:n.rsCitedHint,rows:o,addLabel:n.rsAddAll(o.length),onEvaluate:a,onAddAll:r}),t.jsx(no,{icon:"🎯",title:n.rsMatch,hint:n.rsMatchHint,rows:i,addLabel:n.rsAddAll(i.length),onEvaluate:a,onAddAll:r})]})}function up({card:e,onEvaluate:a,onAddAll:r}){var l,s,h;const{t:n}=Y(),o=[e.industry,...e.market_tags||[],e.author].map(p=>(p||"").trim()).filter(Boolean),i=(((l=e.prospective)==null?void 0:l.criteria)||[]).filter(Boolean),d=(e.sources||[]).filter(p=>p&&p.url);return t.jsxs("div",{className:"rsdet",children:[e.market&&t.jsx("p",{className:"rsmk",children:e.market}),o.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:n.rsTags}),o.map(p=>t.jsx("span",{children:p},p))]}),t.jsxs("div",{className:"rsbody",children:[e.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${e.mindmap_png_b64}`,alt:n.rsMindmap}),t.jsx("figcaption",{children:n.rsMindmap})]}),t.jsx("div",{className:"rssum",children:ci(e.summary_md||"").map((p,x)=>t.jsx("p",{children:p},x))})]}),t.jsx(ui,{card:e,onEvaluate:a,onAddAll:r}),(((s=e.prospective)==null?void 0:s.conclusion)||i.length>0)&&t.jsxs("section",{className:"rsblk rspro",children:[t.jsx("div",{className:"rsblk-h",children:t.jsxs("b",{children:["🔮 ",n.rsConclusion]})}),((h=e.prospective)==null?void 0:h.conclusion)&&t.jsx("p",{className:"rspro-c",children:e.prospective.conclusion}),i.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"rsblk-hint",children:n.rsCriteria}),t.jsx("ul",{className:"rspro-l",children:i.map(p=>t.jsx("li",{children:p},p))})]})]}),d.length>0&&t.jsxs("section",{className:"rsblk",children:[t.jsxs("div",{className:"rsblk-h",children:[t.jsxs("b",{children:["🔗 ",n.rsSources]}),t.jsx("span",{className:"n",children:d.length})]}),t.jsx("div",{className:"rssrc",children:d.map(p=>t.jsx("a",{href:p.url,target:"_blank",rel:"noopener noreferrer",children:p.label||p.url},p.url))})]})]})}function mp(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{day:"2-digit",month:"short"})}function fp({onClose:e,onEvaluate:a,onAddAll:r,bump:n,cbToken:o}){const{t:i,email:d}=Y(),l=o,[s,h]=c.useState(null),[p,x]=c.useState(null),[u,b]=c.useState(null),[m,w]=c.useState(!1);c.useEffect(()=>{let f=!0;return(async()=>{const v=await Eo({email:d,cbToken:l});f&&h(v)})(),()=>{f=!1}},[d,l,n]);const y=f=>{x(f),b(null),w(!0),(async()=>{const v=await ms(f.id);b(v),w(!1)})()};return t.jsxs("div",{className:"rsarch",children:[t.jsxs("div",{className:"rsarch-h",children:[p?t.jsx("button",{type:"button",className:"rsarch-back",onClick:()=>{x(null),b(null)},children:i.rsArchBack}):t.jsxs("b",{children:["🗂 ",i.rsArchTitle]}),p&&t.jsx("span",{className:"ti",children:p.title}),!p&&s&&t.jsx("span",{className:"n",children:s.length}),t.jsx("button",{type:"button",className:"rsx",title:i.rsClose,onClick:e,children:"×"})]}),!p&&t.jsxs("div",{className:"rsarch-list",children:[s===null&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchLoading}),s!==null&&s.length===0&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchEmpty}),(s||[]).map(f=>t.jsxs("button",{type:"button",className:"rsarch-row",onClick:()=>y(f),children:[t.jsx("span",{className:"ti",children:f.title}),t.jsxs("span",{className:"me",children:[mp(f.created_at),f.industry?` · ${f.industry}`:"",f.author?` · ${f.author}`:""]}),t.jsx("span",{className:"cn",children:i.rsRowCounts(f.cited_n||0,f.evaluate_n||0)}),t.jsx("span",{className:"st"+(f.published?" on":""),children:f.published?i.rsPub:i.rsPriv})]},f.id))]}),p&&t.jsxs("div",{className:"rsarch-one",children:[t.jsxs("div",{className:"rsarch-sub",children:[p.source_url&&t.jsx("a",{href:p.source_url,target:"_blank",rel:"noopener noreferrer",children:i.rsSource}),p.published&&p.page_url&&t.jsx("a",{href:p.page_url,target:"_blank",rel:"noopener noreferrer",children:i.rsLink}),t.jsx("span",{className:"st"+(p.published?" on":""),children:p.published?i.rsPub:i.rsPriv})]}),m&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchLoading}),!m&&!u&&t.jsx("p",{className:"rsarch-msg",children:i.rsArchGone}),!m&&u&&t.jsx(up,{card:u,onEvaluate:a,onAddAll:r})]})]})}const Ca=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;function ra(e){return/^https?:\/\//i.test((e||"").trim())}function pt(e){const a=(e||"").trim();return a?ra(a)?a:Ca.test(a)&&!/\s/.test(a)?"https://"+a.replace(/^\/+/,""):"":""}function hp(){return t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]})}function gp(){const{t:e,lang:a,mode:r,token:n,email:o,askEvaluate:i,sessTally:d,dispatch:l,evalBusy:s,evalCards:h,caps:p,data:x,canWrite:u,source:b,dossiers:m,doAnalyse:w,liveMemos:y,pipe:f}=Y(),v=r==="client",E=c.useMemo(()=>n||(b!=="default"?fs():""),[n,b]),[k,j]=c.useState(""),[N,S]=c.useState(!1),[L,C]=c.useState(""),[T,O]=c.useState(""),[U,R]=c.useState(""),[D,g]=c.useState(!1),[q,M]=c.useState(!1),[J,A]=c.useState([]);c.useEffect(()=>{const P=ee=>{const Q=ee.detail;Q&&A(me=>[Q,...me].slice(0,8))};return window.addEventListener("ppmap:evalcard",P),()=>window.removeEventListener("ppmap:evalcard",P)},[]);const[B,I]=c.useState(!1),[$,te]=c.useState(!1),[K,ye]=c.useState(!1),re=c.useRef(!1),[de,ge]=c.useState(""),[ce,ve]=c.useState(""),[xe,Ne]=c.useState(!1),[Fe,ae]=c.useState(!1),[ke,be]=c.useState(0),[oe,_]=c.useState(""),[V,Z]=c.useState(null),[le,pe]=c.useState(null),[ne,ie]=c.useState(!1),[ue,we]=c.useState(null),[Ce,je]=c.useState(0),Ee=c.useRef(!1),ht=k.trim()?Ca.test(k.trim())?e.evalUrl:e.evalName:e.evalWaiting;c.useEffect(()=>{if(typeof window>"u")return;const P=new URLSearchParams(window.location.search),ee=(P.get("rs")||"").trim(),Q=(P.get("rstext")||"").trim();ee&&/^https?:\/\//i.test(ee)&&ge(ee),Q&&ve(Q),(ee&&/^https?:\/\//i.test(ee)||Q)&&I(!0)},[]),c.useEffect(()=>{const P=ee=>{const Q=ee.detail||{},me=String(Q.url||"").trim(),ze=String(Q.text||"").trim();me&&/^https?:\/\//i.test(me)&&ge(me),ze&&ve(ze),(me&&/^https?:\/\//i.test(me)||ze)&&(I(!0),j(""),C(""),Ne(!0),window.setTimeout(()=>Ne(!1),900))};return window.addEventListener("ppmap:research",P),()=>window.removeEventListener("ppmap:research",P)},[]),c.useEffect(()=>{const P=ee=>{const Q=ee.detail||{},me=String(Q.name||"").trim();if(!me)return;I(!1),j(me),C(me);const ze=pt(String(Q.website||Q.domain||""));O(ze),R(pt(String(Q.url||""))),g(!ze),S(!0),window.setTimeout(()=>S(!1),900)};return window.addEventListener("ppmap:prefill",P),()=>window.removeEventListener("ppmap:prefill",P)},[]),c.useEffect(()=>{const P=(L||"").trim();if(!P||B||T){(T||!P||B)&&g(!1);return}const ee=Ue(P),Q=m.find(Oe=>Ue(Oe.name)===ee)||m.find(Oe=>{const Te=Ue(Oe.name);return Te.length>=3&&(ee.includes(Te)||Te.includes(ee))}),me=pt((Q==null?void 0:Q.website)||"")||pt((Q==null?void 0:Q.domain)||""),ze=pt((Q==null?void 0:Q.url)||"");if(ze&&R(Oe=>Oe||ze),me){O(me),g(!1);return}let fe=!0;return g(!0),Rn(P).then(Oe=>{var nt,vt;if(!fe)return;const Te=pt(Oe.website||"")||pt(((vt=(nt=Oe.candidates)==null?void 0:nt[0])==null?void 0:vt.url)||"");Te&&O(Te)}).catch(()=>{}).finally(()=>{fe&&g(!1)}),()=>{fe=!1}},[L,B,T,m]),c.useEffect(()=>{const P=ee=>{var me;const Q=String(((me=ee.detail)==null?void 0:me.url)||"").trim();ra(Q)&&window.open(Q,"_blank","noopener,noreferrer")};return window.addEventListener("ppmap:view",P),()=>window.removeEventListener("ppmap:view",P)},[]),c.useEffect(()=>{if(re.current===B)return;re.current=B,ye(!0);const P=window.setTimeout(()=>ye(!1),560);return()=>window.clearTimeout(P)},[B]),c.useEffect(()=>{if(typeof window>"u")return;const P=document.querySelector(".atl2 .eval-stick")||document.querySelector(".atl2 .demand"),ee=document.querySelector(".atl2.ops, .atl2.cibles");if(!P||!ee)return;const Q=ee.classList.contains("cibles")?document.querySelector(".atl2.cibles .live-stack"):null,me=()=>{const fe=Math.floor(P.getBoundingClientRect().height);ee.style.setProperty("--demand-h",`${fe}px`),Q&&ee.style.setProperty("--pp-live-h",`${Math.round(Q.getBoundingClientRect().height)}px`)};me();const ze=new ResizeObserver(me);return ze.observe(P),Q&&ze.observe(Q),()=>ze.disconnect()},[b,N,xe,q,B,K,D]),c.useEffect(()=>{if(!u&&!E){we(null);return}let P=!0;return(async()=>{const ee=await Eo({email:o,cbToken:E});P&&we(ee.length)})(),()=>{P=!1}},[u,E,o,Ce]);const gt=J.length?J:h,Me=x.credits,lt=c.useCallback(P=>{ip(n,P)&&(M(!1),l({type:"ptab",tab:0}),requestAnimationFrame(()=>{const ee=document.querySelector(".atl2 .desk-list .evalq, .atl2.cibles .desk-list");if(!ee)return;const Q=window.scrollY+ee.getBoundingClientRect().top-120;window.scrollTo({top:Math.max(0,Q),behavior:"smooth"})}))},[n,l]);c.useEffect(()=>{if(!Fe)return;be(0);const P=window.setInterval(()=>be(ee=>ee+1),1e3);return()=>window.clearInterval(P)},[Fe]);const xt=c.useMemo(()=>{const P=k.trim().toLowerCase();return!P||!f?null:m.find(ee=>Ue(ee.name)===P&&Le(ee)===1)||null},[k,m,f]),At=()=>{const P=k.trim();if(P){if(xt){w(xt);return}i(null,P),v&&j("")}},at=async()=>{var Q,me,ze;if(Ee.current)return;const P=de.trim().replace(/\s+/g,""),ee=ce.trim();if(!P&&!ee){_(e.rsNeed);return}if(!v&&!E){i(null,P||ee.slice(0,80));return}Ee.current=!0,_(""),Z(null),pe(null),ae(!0);try{const fe=await gs({url:P,text:ee,email:o,cbToken:E});if(ae(!1),!fe||fe.status!=="success"){_((fe==null?void 0:fe.message)||"Erreur");return}Z(fe),I(!1),lt((((Q=fe.prospective)==null?void 0:Q.companies_to_evaluate)||[]).map(Te=>(Te==null?void 0:Te.name)||"")),pe({state:"pending"});const Oe=await xs(fe,{email:o,cbToken:E});pe(Oe.ok?{state:"ok",scopeLabel:((me=Oe.summary)==null?void 0:me.scope_label)||"",scope:((ze=Oe.summary)==null?void 0:ze.scope)||""}:{state:"fail",msg:Oe.error||""}),Oe.ok&&je(Te=>Te+1)}finally{Ee.current=!1,ae(!1)}},qt=[V==null?void 0:V.industry,...(V==null?void 0:V.market_tags)||[],V==null?void 0:V.author].map(P=>(P||"").trim()).filter(Boolean),bt=(le==null?void 0:le.state)==="pending",Pt=le&&(bt?t.jsx("span",{className:"rslink pend",children:e.rsSaving}):le.state==="ok"?t.jsx("span",{className:"rslink ok",children:le.scope&&le.scope!=="public"?e.rsSavedIn(le.scopeLabel||le.scope.replace(/^fund:/,"")):e.rsSaved}):t.jsx("span",{className:"rslink fail",title:le.msg,children:e.rsSaveFail})),_t=cp(V).length,Be=B,Xe=(L||k).trim(),Ye=m.find(P=>Ue(P.name)===Ue(Xe)),ct=pt(k)||T||pt((Ye==null?void 0:Ye.website)||"")||pt((Ye==null?void 0:Ye.domain)||""),F=U||pt((Ye==null?void 0:Ye.url)||""),W=xt?e.actAnalyse:Xe?e.evalGoOn(Xe.length>22?Xe.slice(0,21)+"…":Xe):e.evalGo,X=Fe?`${hs(de.trim())==="youtube"&&de.trim()?e.rsRunningVid:e.rsRunning} ${e.rsElapsed(ke)}`:bt?e.rsSaving:e.rowExtract;return t.jsxs("div",{className:"demand"+(Be?" rs-mode":"")+(L&&k.trim()===L||N||xe?" pair":"")+(N||xe||K?" echo":"")+(K?" swap":""),children:[t.jsxs("div",{className:"dhead",children:[t.jsx("h2",{children:a==="en"?"Paste a URL and screen it":"Coller une URL et évaluer"}),t.jsx("span",{className:"dhint",children:a==="en"?"A name is enough — Stan fills in the domain, the country and the sector, then runs the screen.":"Un nom suffit — Stan complète le domaine, le pays et le secteur, puis lance le crible."})]}),t.jsxs("div",{className:"drow"+((Be?xe:N)||K?" flash":"")+((Be?de.trim():Ca.test(k.trim()))?" has-url":""),children:[t.jsxs("span",{className:"dfield",children:[t.jsx("input",{value:Be?de:k,placeholder:Be?e.rsUrlPh:e.evalPh,autoComplete:"off",maxLength:Be?600:200,spellCheck:Be?!1:void 0,inputMode:Be?"url":void 0,onChange:P=>{if(Be){ge(P.target.value);return}j(P.target.value),L&&P.target.value.trim()!==L&&(C(""),O(""),R(""),g(!1))},onKeyDown:P=>{P.key==="Enter"&&(Be?at():At())}}),t.jsx("span",{className:"detect"+(Be?" off":"")+(Ca.test(k.trim())?" url":""),children:ht})]}),t.jsx("span",{className:"dacts",children:Be?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn"+(Fe?" loading":""),disabled:Fe||bt||!de.trim()&&!ce.trim(),onClick:()=>{at()},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"elab",children:X})]}),t.jsxs("a",{className:"viewbtn"+(ra(de)?"":" off"),href:ra(de)?de.trim():void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewLinkHint,onClick:P=>{ra(de)||P.preventDefault()},children:[t.jsx(hp,{}),e.viewLink]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn"+(xt?" analyse":"")+(s?" loading":""),disabled:s,onClick:At,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"elab",children:W})]}),t.jsxs("span",{className:"sitepair",children:[t.jsxs("a",{className:"viewbtn sm"+(D?" searching":ct?"":" off"),href:ct||void 0,target:"_blank",rel:"noopener noreferrer","aria-busy":D||void 0,title:D?e.viewSiteBusyHint:e.viewSiteHint,onClick:P=>{ct||P.preventDefault()},children:[D&&t.jsx("span",{className:"sitespin","aria-hidden":"true"}),D?e.viewSiteBusy:e.viewSite,!D&&t.jsx("span",{className:"xwin","aria-hidden":"true",children:"↗"})]}),t.jsxs("a",{className:"viewbtn sm"+(F?"":" off"),href:F||void 0,target:"_blank",rel:"noopener noreferrer",title:e.viewSrcHint,onClick:P=>{F||P.preventDefault()},children:[e.viewSrc,t.jsx("span",{className:"xwin","aria-hidden":"true",children:"↗"})]})]})]})}),p.showCredits&&Me&&t.jsxs("button",{type:"button",className:"credits"+(Me.total_available<=0&&!Me.unlimited?" empty":""),onClick:()=>l({type:"modal",modal:"recharge"}),children:[t.jsx("span",{className:"cl",children:e.creditsCap}),t.jsx("b",{children:Me.unlimited?"∞":Me.total_available}),!Me.unlimited&&t.jsxs("span",{className:"cm",children:["/ ",Me.daily_grant+Me.purchased]}),Me.total_available<=0&&!Me.unlimited?t.jsx("span",{className:"rc",children:e.creditsRecharge}):t.jsx("span",{className:"cd",children:e.creditsToday})]})]}),t.jsxs("div",{className:"dunder",children:[t.jsx("button",{type:"button",className:"dmulti",onClick:()=>{l({type:"ptab",tab:0}),M(!1),requestAnimationFrame(()=>{const P=document.querySelector(".atl2.cibles .desk-list");if(!P)return;const ee=window.scrollY+P.getBoundingClientRect().top-110;window.scrollTo({top:Math.max(0,ee),behavior:"smooth"})})},children:e.evalMulti}),t.jsx("button",{type:"button",className:"dmulti dsearch"+(B?" on":""),onClick:()=>I(!B),children:e.rsOpen}),ue!==null&&ue>0&&t.jsx("button",{type:"button",className:"dmulti darch"+(ne?" on":""),onClick:()=>ie(!ne),children:e.rsArchOpen(ue)}),p.pipe&&!!n&&t.jsx(pp,{pageToken:E,onAddNames:lt})]}),ne&&t.jsx(fp,{bump:Ce,cbToken:E,onClose:()=>ie(!1),onEvaluate:P=>i(null,P),onAddAll:lt}),t.jsx("div",{className:"rsp slim"+(B?" on":" off"),"aria-hidden":!B,children:t.jsxs("div",{className:"rsp-in",children:[t.jsxs("button",{type:"button",className:"rspaste",tabIndex:B?void 0:-1,onClick:()=>te(P=>!P),children:[e.rsOr," · ",e.rsTextPh,t.jsx("i",{children:$?"▴":"▾"})]}),$&&t.jsx("textarea",{className:"rstext",value:ce,placeholder:e.rsTextPh,tabIndex:B?void 0:-1,onChange:P=>ve(P.target.value)})]})}),oe&&t.jsx("div",{className:"rserr",children:oe}),V&&t.jsxs("div",{className:"rscard",children:[t.jsxs("div",{className:"rsh",children:[t.jsx("b",{children:V.title}),V.source_url&&t.jsx("a",{href:V.source_url,target:"_blank",rel:"noopener noreferrer",children:e.rsSource}),t.jsx("button",{type:"button",className:"rsx",title:e.rsClose,onClick:()=>{Z(null),pe(null)},children:"×"})]}),V.market&&t.jsx("p",{className:"rsmk",children:V.market}),qt.length>0&&t.jsxs("div",{className:"rstags",children:[t.jsx("em",{children:e.rsTags}),qt.map(P=>t.jsx("span",{children:P},P))]}),t.jsxs("div",{className:"rsbody",children:[V.mindmap_png_b64&&t.jsxs("figure",{className:"rsmm",children:[t.jsx("img",{src:`data:image/png;base64,${V.mindmap_png_b64}`,alt:e.rsMindmap}),t.jsx("figcaption",{children:e.rsMindmap})]}),t.jsx("div",{className:"rssum",children:ci(V.summary_md||"").map((P,ee)=>t.jsx("p",{children:P},ee))})]}),t.jsx(ui,{card:V,onEvaluate:P=>i(null,P),onAddAll:lt}),t.jsxs("div",{className:"rsfoot",children:[t.jsx("span",{children:e.rsFound(_t)}),Pt]})]}),gt.slice(0,1).map((P,ee)=>{const Q=P.verdict==="kept",me=P.verdict==="quota",ze=P.verdict==="unresolved",fe=Q?"var(--brand)":me?"var(--bolt)":ze?"var(--blue)":"var(--red)",Oe=Q?"var(--brand-l)":me?"#FFF3D6":ze?"#EEF4FF":"#FDECEC";return t.jsxs("div",{className:"result on",style:{"--c":fe,"--bgc":Oe},children:[t.jsx("span",{className:"vv",children:t.jsx("span",{className:"vp",children:Q?"✓ "+e.kept:me?"⏳":ze?"❓ "+e.evalPickChip:"✗ "+e.dropped})}),P.name&&t.jsx("span",{className:"rn",children:P.name}),t.jsx("span",{className:"rr",children:P.reason?t.jsxs(t.Fragment,{children:[t.jsx("b",{children:e.why})," ",P.reason]}):null}),!!(P.candidates&&P.candidates.length)&&t.jsx("span",{className:"sitepick",children:P.candidates.map(Te=>t.jsxs("span",{className:"sp1",children:[t.jsxs("a",{href:Te.url.startsWith("http")?Te.url:`https://${Te.url}`,target:"_blank",rel:"nofollow noopener",children:[(Te.url||"").replace(/^https?:\/\/(www\.)?/,"").slice(0,34)," ↗"]}),t.jsx("button",{type:"button",onClick:()=>i(null,Te.url,P.name),children:e.evalPickGo})]},Te.url))}),!me&&!ze&&t.jsx("button",{type:"button",className:"go",onClick:()=>{l({type:"ptab",tab:Q?1:5});const Te=(P.name||"").trim().toLowerCase();window.setTimeout(()=>{const nt=[...document.querySelectorAll(".atl2 .list .row")].find(vt=>{var Ze;return(((Ze=vt.querySelector(".rnm"))==null?void 0:Ze.textContent)||"").trim().toLowerCase().includes(Te)});nt&&(nt.scrollIntoView({behavior:"smooth",block:"center"}),nt.classList.add("flashrow"),window.setTimeout(()=>nt.classList.remove("flashrow"),2200))},260)},children:e.seeSpace(Q?e.statusKeep.replace("✅ ",""):e.statusDrop.replace("❌ ",""))})]},ee)}),v&&(d.kept+d.dropped>0||gt.length>0)&&t.jsxs("div",{className:"tally",children:[t.jsx("span",{dangerouslySetInnerHTML:{__html:e.session(d.kept,d.dropped)}})," ","·"," ",t.jsx("a",{onClick:()=>l({type:"modal",modal:"space"}),children:e.seeMySpace})]})]})}function xp(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function bp(){const{st:e,dispatch:a,byId:r,t:n,doDeep:o}=Y(),i=e.memoConsole?r.get(e.memoConsole):null,d=c.useMemo(()=>i?[i.reasoning||"",xp(i.summary||"")].filter(Boolean).join(`

`):"",[i]);if(!i)return null;const l=zt(i),s=Ln(i);return t.jsx("div",{className:"demand",style:{paddingTop:0},children:t.jsxs("div",{className:"memo",style:{marginTop:0},children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"nm",children:i.name}),l&&t.jsx("span",{className:"vv",children:l}),typeof i.score=="number"&&t.jsxs("span",{className:"vv",style:{background:"var(--panel3)",color:"var(--muted)"},children:[i.score,"/100"]}),t.jsx("span",{className:"sp"}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"memoConsole",id:null}),children:"×"})]}),t.jsx("div",{className:"tabs2",children:t.jsx("button",{type:"button","aria-selected":"true",children:n.memoSynth})}),t.jsx("div",{className:"mb2",children:d?d.split(`

`).map((h,p)=>t.jsx("p",{style:{margin:"0 0 10px"},children:h},p)):t.jsx("p",{children:n.memoNone})}),t.jsxs("div",{className:"mf",children:[Ut(i)?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"t",children:n.memoDeepHint}),t.jsx("button",{type:"button",className:"deep",onClick:()=>o(i),children:n.memoDeep})]}):t.jsx("span",{className:"t",children:s===2?n.critMemoKinds:""}),i.memoUrl&&t.jsx("a",{className:"go",href:i.memoUrl,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:n.memoOpenFull})]})]})})}function $n({name:e}){const{t:a,token:r,caps:n,mode:o,flashErr:i}=Y(),[d,l]=c.useState(!1),[s,h]=c.useState(null),p=n.pipe&&o==="client"&&!n.lockActions,x=async()=>{if(!p||d)return;l(!0);const u=await ko(r,e);if(l(!1),!u){i(a.actErr);return}h(u.results||[])};return c.useEffect(()=>{if(!p)return;const u=b=>{var w;const m=String(((w=b.detail)==null?void 0:w.name)||"").trim();m&&m.toLowerCase()===e.toLowerCase()&&x()};return window.addEventListener("ppmap:similar",u),()=>window.removeEventListener("ppmap:similar",u)},[e,p]),c.useEffect(()=>{if(p)try{const u=(sessionStorage.getItem("pp:similar")||"").trim();u&&u.toLowerCase()===e.toLowerCase()&&(sessionStorage.removeItem("pp:similar"),x())}catch{}},[e,p]),p?t.jsxs("div",{className:"simb",onClick:u=>u.stopPropagation(),children:[t.jsx("button",{type:"button",className:"abtn",disabled:d,onClick:()=>{x()},children:d?a.similarBusy:a.similar}),s&&(s.length===0?t.jsx("p",{className:"mnote",children:a.similarNone}):t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"siml",children:s.map(u=>t.jsxs("li",{children:[t.jsx("b",{className:u.verdict==="kept"?"ok":"ko",children:u.company}),u.reason&&t.jsx("span",{children:u.reason})]},u.company))}),t.jsx("p",{className:"mnote dim",children:a.similarNote})]}))]}):null}const vp=new Set(["b","strong","i","em","u","br","p","ul","ol","li","h4","h5"]),ka=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function ca(e){const a=(e||"").trim();return a?/^https?:\/\//i.test(a)?a:/^[a-z][a-z0-9+.-]*:/i.test(a)?"":`https://${a.replace(/^\/+/,"")}`:""}function Tn(e){const a=ca(e);if(!a)return"";try{return new URL(a).hostname.replace(/^www\./,"")}catch{return""}}function wp(e){const a=String(e||"");if(!a)return"";let r="",n=0;for(;n<a.length;){const o=a.indexOf("<",n);if(o<0){r+=ka(a.slice(n));break}r+=ka(a.slice(n,o));const i=a.indexOf(">",o);if(i<0){r+=ka(a.slice(o));break}const d=a.slice(o+1,i).trim(),l=/^(\/?)([a-zA-Z0-9]+)/.exec(d),s=l?l[2].toLowerCase():"";l&&vp.has(s)?r+=`<${l[1]}${s}>`:r+=ka(a.slice(o,i+1)),n=i+1}return r}const yp=new Set(["script","noscript","style","link","iframe","object","embed","form","input","select","textarea","button","meta","base","dialog","svg","math","template","video","audio","source"]),ro={"*":new Set(["class","style","title","colspan","rowspan"]),img:new Set(["src","alt","width","height"]),a:new Set(["href"])};function mi(e){var r;const a=Array.from(e.children);for(const n of a){const o=n.tagName.toLowerCase();if(yp.has(o)){n.remove();continue}for(const d of Array.from(n.attributes)){const l=d.name.toLowerCase();(!(ro["*"].has(l)||((r=ro[o])==null?void 0:r.has(l)))||l.startsWith("on"))&&n.removeAttribute(d.name)}const i=n.getAttribute("style")||"";if(i&&/position\s*:\s*(fixed|sticky)/i.test(i))n.removeAttribute("style");else if(i){const d=i.split(";").filter(l=>l.trim()&&!/^\s*(font-size|font-family|line-height|font)\s*:/i.test(l)).join(";");d!==i&&(d?n.setAttribute("style",d):n.removeAttribute("style"))}if(o==="a"){const d=(n.getAttribute("href")||"").trim();/^(https?:|mailto:)/i.test(d)?(n.setAttribute("target","_blank"),n.setAttribute("rel","noopener noreferrer")):n.removeAttribute("href")}if(o==="img"){const d=(n.getAttribute("src")||"").trim();if(!/^https?:/i.test(d)){n.remove();continue}n.setAttribute("loading","lazy")}mi(n)}}function za(e){const a=e.cloneNode(!0);return mi(a),a.querySelectorAll("[id]").forEach(r=>r.removeAttribute("id")),a.removeAttribute("id"),a.innerHTML}const kp={swot:null,summary:"",syn:"",pnl:"",cf:"",roi:"",reco:"",plan:"",pruned:[]},Ep=/chiffre|revenu|revenue|\barr\b|ebitda|marge|gross|fcf|free cash|net|total|r[ée]sultat|cash|capex|nopat|moic|irr|\btri\b|roi|entry|\bev\b|invested|synerg/i,jp=[["syn",/synerg/i],["pnl",/compte de r[ée]sultat|p\s*&\s*l|profit\s*(?:and|&)\s*loss|income statement/i],["cf",/flux de tr[ée]sorerie|cash\s*-?\s*flow/i],["roi",/\broi\b|return on investment|retour sur investissement/i],["reco",/verdict post|post[- ]model verdict|conviction quantitative/i]];function Mt(e){return String(e||"").replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g," ").trim()}function fi(e,a){const r=e.slice(a),n=/<div\b|<\/div\s*>/gi;let o=0,i;for(;i=n.exec(r);)if(i[0][1]!=="/")o+=1;else if(o-=1,o===0)return e.slice(a,a+i.index+i[0].length);return""}function rn(e,a){const n=new RegExp(`<div\\b[^>]*\\bid="${a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}"`,"i").exec(e);return n?fi(e,n.index):""}function Np(e,a=14){const r=e.match(/<tr\b[\s\S]*?<\/tr\s*>/gi)||[];if(r.length<=a)return{html:e,pruned:!1};const n=[];for(let d=0;d<r.length-1;d+=1){const l=r[d],s=/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]\s*>/i.exec(l),h=s?Mt(s[1]):"";if((d<2||/<th/i.test(l)||Ep.test(h))&&n.push(l),n.length>=a-1)break}n.push(r[r.length-1]);const o=n.length<3?r.slice(0,a):n;return{html:(/^\s*<table\b[^>]*>/i.exec(e)||["<table>"])[0]+o.join("")+"</table>",pruned:!0}}function Sp(e,a=14){let r=!1;return{html:e.replace(/<table\b[\s\S]*?<\/table\s*>/gi,o=>{const i=Np(o,a);return r=r||i.pruned,i.html}),pruned:r}}function Cp(e){const a={s:[],w:[],o:[],t:[]},r=[["s","s-green"],["w","s-red"],["o","s-blue"],["t","s-orange"]];for(const[n,o]of r){const i=new RegExp(`<div\\b[^>]*class="[^"]*swot-item[^"]*\\b${o}\\b[^"]*"`,"i").exec(e);if(!i)return null;const d=fi(e,i.index);let l=(d.match(/<li\b[^>]*>([\s\S]*?)<\/li\s*>/gi)||[]).map(s=>Mt(s));if(!l.length){const s=/<p\b[^>]*>([\s\S]*?)<\/p\s*>/i.exec(d);s&&(l=[Mt(s[1])])}if(l=l.filter(s=>s&&!/not available/i.test(s)&&!/non disponible/i.test(s)).map(s=>s.slice(0,260)).slice(0,4),!l.length)return null;a[n]=l}return a}function zp(e){const a=e.search(/id=["']company-summary["']/i);if(a<0)return"";const r=e.slice(a,a+9e3),n=/(?:EN R[ÉE]SUM[ÉE]|EN QUELQUES MOTS|IN SUMMARY|IN A FEW WORDS|IN A NUTSHELL|TL;DR)[\s:]*(?:<\/?span[^>]*>[\s:]*)*([\s\S]+?)(?=<br|<hr|<\/div|<h[23]|⚠|✅|🚀|❓|$)/i.exec(r);return n?Mt(n[1]).slice(0,600):""}function Ap(e,a,r){if(r<0)return"";const n=/<h3\b[^>]*>([\s\S]*?)<\/h3\s*>/gi;n.lastIndex=r;let o;for(;o=n.exec(e);){if(!a.test(Mt(o[1])))continue;const i=/<h3\b[^>]*>/i.exec(e.slice(o.index+o[0].length));return i?e.slice(o.index,o.index+o[0].length+i.index):e.slice(o.index,Math.min(e.length,o.index+o[0].length+6e4))}return""}function oo(e){let a=e.replace(/^\s*<div\b[^>]*>/i,"").replace(/<\/div\s*>\s*$/i,"");return a=a.replace(/<h2\b[^>]*class="[^"]*section-title[^"]*"[^>]*>[\s\S]*?<\/h2\s*>/gi,""),a=a.replace(/<details\b[\s\S]*?<\/details\s*>/gi,""),a.trim()}function on(e,a){if(e.length<=a)return e;const r=e.slice(0,a),n=r.lastIndexOf(">");return n>=0?r.slice(0,n+1):r}function qp(e){const a={...kp,pruned:[]};if(!e)return a;try{const n=rn(e,"swot");n&&(a.swot=Cp(n))}catch{}try{a.summary=zp(e)}catch{}try{const n=rn(e,"action-plan");if(n){const o=oo(n);a.plan=on(o,12e3)}}catch{}const r=e.search(/id=["']financial-forecast["']/i);for(const[n,o]of jp)try{let i=Ap(e,o,r);if(!i)continue;const d=Sp(i);i=on(d.html,45e3),Mt(i)&&(a[n]=i,d.pruned&&a.pruned.push(n))}catch{}if(!a.reco)try{const n=rn(e,"conviction");if(n){const o=on(oo(n),8e3);Mt(o)&&(a.reco=o)}}catch{}return a}function Tp(e){return e?!!(e.swot||e.summary||e.syn||e.pnl||e.cf||e.roi||e.reco||e.plan):!1}const sn=new Map;function hi(e){const a=(e||"").trim();if(!/^https?:/i.test(a))return Promise.resolve(null);let r=sn.get(a);return r||(r=Lp(a).catch(()=>null),r.then(n=>{n||sn.delete(a)}),sn.set(a,r)),r}async function Lp(e){var u,b;const a=await fetch(e,{credentials:"omit"});if(!a.ok)return null;const r=await a.text(),n=new DOMParser().parseFromString(r,"text/html"),o=m=>{var w;return(((w=n.querySelector(m))==null?void 0:w.textContent)||"").trim()},i=n.querySelector(".sb-score"),d=((u=Array.from((i==null?void 0:i.classList)||[]).find(m=>m.startsWith("sb-score-")))==null?void 0:u.slice(9))||"",l=[];let s=null;const h=Array.from(n.querySelectorAll(".sidebar .sb-nav-heading, .sidebar a.nav-item"));for(const m of h){if(m.classList.contains("sb-nav-heading")){s={label:(m.textContent||"").trim(),items:[]},l.push(s);continue}const w=m.getAttribute("href")||"";if(!w.startsWith("#"))continue;const y=w.slice(1),f=Rp(n,y);f&&(s||(s={label:"",items:[]},l.push(s)),s.items.push({id:y,title:(m.textContent||"").trim(),html:f,poids:f.length}))}const p=((b=/\/([a-z0-9-]+)-v2(?:\.html)?\/?$/i.exec(e))==null?void 0:b[1])||"",x={score:o(".sb-score"),scoreTone:d,tags:Array.from(n.querySelectorAll(".sb-tag")).map(m=>(m.textContent||"").trim()).filter(Boolean),name:o(".sidebar-company-name"),tagline:o(".sidebar-tagline"),desc:o(".meta-desc"),groups:l.filter(m=>m.items.length),mindmapSlug:n.querySelector(".cm-mindmap-png")?p:"",comite:Fp(n,qp(r))};return x.groups.length?x:null}function Fp(e,a){const r=n=>{if(!n)return"";const o=e.createElement("div");return o.innerHTML=n,za(o)};return{...a,syn:r(a.syn),pnl:r(a.pnl),cf:r(a.cf),roi:r(a.roi),reco:r(a.reco),plan:r(a.plan)}}const io={"fiche-contact":"[data-ct-card]","fiche-attaque":"[data-ct-card]"};function Rp(e,a){const r=e.getElementById(a),n=r?so(e,r):"";if(n)return n;const o=io[a]?e.querySelector(io[a]):null;return o&&o!==r?so(e,o):""}function so(e,a){var r,n;if(a.classList.contains("section-container")){const o=a.cloneNode(!0);return(r=o.querySelector("h2.section-title"))==null||r.remove(),za(o)}if(/^h\d$/i.test(a.tagName)){const o=e.createElement("div"),i=Array.from(((n=a.parentElement)==null?void 0:n.children)||[]);if(i.filter(s=>/^h3$/i.test(s.tagName))[0]===a)for(const s of i){if(s===a)break;/^h2$/i.test(s.tagName)||o.appendChild(s.cloneNode(!0))}let l=a.nextElementSibling;for(;l&&!/^h3$/i.test(l.tagName);)o.appendChild(l.cloneNode(!0)),l=l.nextElementSibling;return o.children.length?za(o):""}return za(a)}const ln=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function Ve({k:e,v:a,href:r,wide:n}){return a==null||a===""?null:t.jsxs("div",{className:"cdl"+(n?" cdw":""),children:[t.jsx("span",{className:"cdk",children:e}),r?t.jsx("a",{className:"cdv",href:r,target:"_blank",rel:"noopener noreferrer",children:String(a)}):t.jsx("span",{className:"cdv",children:String(a)})]})}function Op({k:e,vals:a}){const r=(a||[]).filter(Boolean);return r.length?t.jsxs("div",{className:"cdl cdw",children:[t.jsx("span",{className:"cdk",children:e}),t.jsx("span",{className:"cdtags",children:r.map(n=>t.jsx("span",{className:"cdtag",children:n},n))})]}):null}function lo(e){return e.replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s{2,}/g," ").trim()}function po({v:e,sur:a,k:r}){const n=e>=80?"green":e>=55?"blue":e>=35?"amber":"red";return t.jsxs("span",{className:`md-score md-${n}`,title:r,children:[Math.round(e*10)/10,a?`/${a}`:""]})}const dn=new Map;function Mp(e,a){const{token:r}=Y(),[n,o]=c.useState(null);return c.useEffect(()=>{if(!a||!r||!e.name)return;const i=`${r}:${e.id}:${e.checkId||""}`;let d=dn.get(i);d||(d=bs(r,e.name,e.checkId),dn.set(i,d),d.then(s=>{(!s||!s.reasoning&&!s.summaryHtml)&&dn.delete(i)}));let l=!0;return d.then(s=>{l&&s&&o({id:e.id,d:s})}),()=>{l=!1}},[a,r,e.id,e.name,e.checkId]),n&&n.id===e.id?n.d:null}const Dp=6e4;function Ip({o:e}){const{t:a,doDeep:r}=Y(),[n,o]=c.useState(null),[i,d]=c.useState(e.memoUrl?"load":"off"),[l,s]=c.useState(()=>new Set),[h,p]=c.useState(!1),x=c.useRef(new Map);c.useEffect(()=>{let w=!0;if(s(new Set),p(!1),x.current=new Map,!e.memoUrl){d("off"),o(null);return}return d("load"),o(null),hi(e.memoUrl).then(y=>{w&&(o(y),d(y?"ok":"err"))}),()=>{w=!1}},[e.memoUrl]);const u=zt(e),b=w=>{var y;return(y=x.current.get(w))==null?void 0:y.scrollIntoView({behavior:"smooth",block:"start"})},m=t.jsxs("div",{className:"cdacts",children:[Ut(e)&&t.jsx("button",{type:"button",className:"btn p",onClick:w=>{w.stopPropagation(),r(e)},children:a.memoDeep}),e.memoPdfUrl&&t.jsx("a",{className:"btn d",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",onClick:w=>w.stopPropagation(),children:"PDF ↗"})]});if(i==="off"){const w=[e.reasoning||"",lo(e.summary||"")].filter(Boolean);return t.jsxs("div",{className:"cdmemo",children:[w.length?w.join(`

`).split(`

`).map((y,f)=>t.jsx("p",{className:"cdtxt",children:y},f)):t.jsx("p",{className:"cdtxt",children:a.memoNone}),m]})}if(i!=="ok"){const w=[e.reasoning||"",lo(e.summary||"")].filter(Boolean);return t.jsxs("div",{className:"cdmemo",children:[u&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:u}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsx("p",{className:"mnote dim",children:i==="load"?a.memoLoading:a.memoLoadErr}),w.length>0&&w.join(`

`).split(`

`).map((y,f)=>t.jsx("p",{className:"cdtxt",children:y},f)),i==="err"&&e.memoUrl&&t.jsx("div",{className:"cdacts",children:t.jsx("button",{type:"button",className:"btn b",onClick:y=>{y.stopPropagation(),p(f=>!f)},children:h?a.memoHideHere:a.memoReadHere})}),h&&e.memoUrl&&t.jsx("iframe",{className:"cdembed",src:e.memoUrl,loading:"lazy",title:a.cdMemoTab,referrerPolicy:"no-referrer-when-downgrade",onClick:y=>y.stopPropagation()}),m,e.memoUrl&&t.jsx("a",{className:"btn p mdfull",href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",onClick:y=>y.stopPropagation(),children:a.memoOpenFull})]})}return t.jsxs("div",{className:"cdmemo memodoc",children:[u&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:u}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"md-head",children:[n.score&&t.jsx("span",{className:"md-score"+(n.scoreTone?` md-${n.scoreTone}`:""),children:n.score}),n.tags.map(w=>t.jsx("span",{className:"md-tag",children:w},w)),n.tagline&&t.jsx("p",{className:"md-tagline",children:n.tagline})]}),t.jsx("div",{className:"md-toc",children:n.groups.map(w=>w.items.map(y=>t.jsx("button",{type:"button",className:"md-jump",onClick:f=>{f.stopPropagation(),b(y.id)},children:y.title},y.id)))}),n.groups.map((w,y)=>t.jsxs("div",{className:"md-grp",children:[w.label&&t.jsx("div",{className:"md-grp-h",children:w.label}),w.items.map(f=>{const v=f.poids>Dp&&!l.has(f.id),E=f.id==="fiche-contact"||f.id==="fiche-attaque";return t.jsxs("section",{className:"md-sec",ref:k=>{k&&x.current.set(f.id,k)},children:[t.jsx("h4",{className:"md-h",children:f.title}),E&&(e.contactName||e.contactEmail||e.contactLinkedin)&&t.jsxs("div",{className:"md-ctc",children:[t.jsx("span",{className:"cdk",children:a.mdContactKnown}),e.contactName&&t.jsx("b",{children:e.contactName}),e.contactEmail&&t.jsx("a",{href:`mailto:${e.contactEmail}`,onClick:k=>k.stopPropagation(),children:e.contactEmail}),e.contactLinkedin&&t.jsx("a",{href:e.contactLinkedin,target:"_blank",rel:"noopener noreferrer",onClick:k=>k.stopPropagation(),children:"LinkedIn"})]}),v?t.jsx("button",{type:"button",className:"abtn md-more",onClick:k=>{k.stopPropagation(),s(j=>new Set(j).add(f.id))},children:a.memoUnfold(Math.round(f.poids/1024))}):t.jsx("div",{className:"md-body",dangerouslySetInnerHTML:{__html:f.html}}),!v&&n.mindmapSlug&&f.html.includes("cm-mindmap-png")&&t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"md-h md-mm-h",children:a.mdMindmap(n.name||e.name)}),t.jsx("iframe",{className:"md-mm",loading:"lazy",title:a.mdMindmap(n.name||e.name),src:`${Ha}/cibles/mindmap-view?slug=${encodeURIComponent(n.mindmapSlug)}`,onClick:k=>k.stopPropagation()})]})]},f.id)})]},w.label||y)),m,e.memoUrl&&t.jsx("a",{className:"btn p mdfull",href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",onClick:w=>w.stopPropagation(),children:a.memoOpenFull})]})}function Pp({o:e}){const{t:a,token:r,caps:n,canWrite:o,flash:i,flashErr:d,lang:l}=Y(),[s,h]=c.useState(!1),[p,x]=c.useState(!1),[u,b]=c.useState(!1),[m,w]=c.useState(null),[y,f]=c.useState(""),[v,E]=c.useState(null),[k,j]=c.useState(""),N={airtableId:e.airtableId,checkId:e.checkId},S=!!(e.airtableId||e.checkId),L=m&&m.id===e.id?m.entries:[],C=!!m&&m.id===e.id;if(c.useEffect(()=>{f(""),E(null),b(!1)},[e.id]),c.useEffect(()=>{if(!s||C||!S||!o)return;let O=!0;x(!0),b(!1);const U=e.id;return ir(r,"list",N).then(R=>{if(!(!O||U!==e.id)){if(x(!1),!R.ok){b(!0);return}w({id:U,entries:R.entries})}}),()=>{O=!1}},[s,C,S,r,e.id,o]),!n.pipe||!o||!S)return null;const T=(O,U)=>{x(!0);const R=e.id;ir(r,O,N,U).then(D=>{if(R===e.id){if(x(!1),!D.ok){d(a.notesErr);return}w({id:R,entries:D.entries}),b(!1),O==="add"&&(f(""),i(a.notesAdded)),O==="edit"&&E(null)}})};return t.jsxs("div",{className:"dnotes",children:[t.jsxs("button",{type:"button",className:"dn-h","aria-expanded":s,onClick:O=>{O.stopPropagation(),h(U=>!U)},children:[t.jsx("b",{children:a.notesT}),L.length>0&&t.jsx("span",{className:"dn-n",children:a.notesCount(L.length)}),t.jsx("i",{children:s?"▾":"▸"})]}),s&&t.jsxs("div",{className:"dn-b",onClick:O=>O.stopPropagation(),children:[t.jsx("p",{className:"mnote dim",children:a.notesHint}),p&&!L.length&&t.jsx("p",{className:"mnote",children:a.notesLoading}),u&&t.jsx("p",{className:"mnote warn",children:a.notesErr}),!p&&!u&&C&&!L.length&&t.jsx("p",{className:"mnote dim",children:a.notesEmpty}),L.map(O=>t.jsxs("div",{className:"dn-e",children:[t.jsx("span",{className:"dn-d",children:l==="fr"?O.date.split("-").reverse().join("/"):O.date}),v===O.id?t.jsxs(t.Fragment,{children:[t.jsx("textarea",{maxLength:4e3,value:k,rows:3,onChange:U=>j(U.target.value)}),t.jsxs("div",{className:"dn-a",children:[t.jsx("button",{type:"button",className:"abtn",disabled:p||!k.trim(),onClick:()=>T("edit",{entryId:O.id,text:k.trim()}),children:a.notesSave}),t.jsx("button",{type:"button",className:"lk",onClick:()=>E(null),children:a.notesCancel})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"dn-t",children:O.text}),o&&t.jsxs("div",{className:"dn-a",children:[t.jsx("button",{type:"button",className:"lk",onClick:()=>{E(O.id),j(O.text)},children:a.notesEdit}),t.jsx("button",{type:"button",className:"lk",disabled:p,onClick:()=>{window.confirm(a.notesDelAsk)&&T("delete",{entryId:O.id})},children:a.notesDel})]})]})]},O.id)),o&&t.jsxs("div",{className:"dn-new",children:[t.jsx("textarea",{maxLength:4e3,rows:2,placeholder:a.notesPh,value:y,onChange:O=>f(O.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:p||!y.trim(),onClick:()=>T("add",{text:y.trim()}),children:a.notesAdd})]})]})]})}function Un({o:e}){var j;const{t:a,lang:r,dispatch:n,caps:o,canWrite:i,doRegen:d}=Y(),l=ma(e),s=zt(e),h=(e.cribleStatus||"").trim().toUpperCase()||(l==="NO MATCH"?"NO MATCH":l==="MATCH"?"MATCH":""),p=[e.sector,e.market,(e.tags||[]).filter(Boolean).length?"1":"",e.stage,e.countryLabel,e.city,e.website,e.domain,e.linkedinCompany,e.angle,e.provQuery,Tn(e.provUrl||""),qa(e),e.date].filter(Boolean).length,x=[e.contactName,e.contactEmail,e.contactLinkedin,e.contactPhone].filter(Boolean).length,u=[e.ceoStatus,e.ceoNote,o.pipe?e.memoUrl:"",o.pipe?e.memoPdfUrl:""].filter(Boolean).length+(typeof e.engagement=="number"&&e.engagement>0?1:0)+(i&&o.pipe&&(e.airtableId||e.checkId)?1:0),b=c.useMemo(()=>[{k:"eval",lib:a.cdEvaluation,n:(h?1:0)+(e.reasoning?1:0)+(o.pipe&&!o.lockActions&&!e.memoUrl?1:0)+(typeof e.engagement=="number"&&e.engagement>0?1:0)},{k:"conv",lib:a.cdConviction,n:(s?1:0)+(e.summary?1:0)+(typeof e.convictionScore=="number"?1:0)},{k:"memo",lib:a.cdMemoTab,n:e.memoUrl||e.summary||Ut(e)?1:0},{k:"soc",lib:a.cdSociete,n:p},{k:"ctc",lib:a.cdContact,n:x},{k:"suivi",lib:a.cdSuivi,n:u}].filter(N=>N.n>0),[e,a,o,h,s,p,x,u]),[m,w]=c.useState(""),y=b.some(N=>N.k===m)?m:((j=b[0])==null?void 0:j.k)||"",f=Mp(e,y==="eval"||y==="conv");if(!b.length)return null;const v=((f==null?void 0:f.reasoning)||"").length>(e.reasoning||"").length?f.reasoning:e.reasoning||"",E=((f==null?void 0:f.summaryHtml)||"").length>(e.summary||"").length?f.summaryHtml:e.summary||"",k=(f==null?void 0:f.convictionScore)??e.convictionScore;return t.jsxs("div",{className:"cdtabs",children:[t.jsx("div",{className:"cdnav",role:"tablist",children:b.map(N=>t.jsx("button",{type:"button",role:"tab","aria-selected":y===N.k,"data-tour":"tab-"+N.k,className:y===N.k?"on":"",onClick:S=>{S.stopPropagation(),w(N.k)},children:N.lib},N.k))}),t.jsxs("div",{className:"cdbody",onClick:N=>N.stopPropagation(),children:[y==="eval"&&t.jsxs(t.Fragment,{children:[h&&t.jsxs("div",{className:"cdv1"+(h==="NO MATCH"?" out":""),children:[t.jsx("b",{children:h==="NO MATCH"?a.vOut:a.vKept}),t.jsx("span",{className:"cdw",children:a.cdCrible})]}),t.jsxs("div",{className:"md-head evalhead",children:[typeof e.score=="number"&&t.jsx(po,{v:e.score,sur:100,k:a.cdScore}),typeof e.engagement=="number"&&e.engagement>0&&t.jsxs("span",{className:"md-score md-amber",title:a.cdEngagementHint,children:[e.engagement>=20?"🔥 ":"",a.cdEngagement," ",Math.round(e.engagement*10)/10]}),e.angle&&t.jsx("span",{className:"md-tag",children:e.angle})]}),v&&v.split(`

`).map((N,S)=>t.jsx("p",{className:"cdtxt",children:N},S)),typeof e.engagement=="number"&&e.engagement>0&&t.jsx("p",{className:"mnote dim",children:a.cdEngagementHint}),o.pipe&&!o.lockActions&&!e.memoUrl&&t.jsx(_p,{o:e})]}),y==="conv"&&t.jsxs(t.Fragment,{children:[s&&t.jsxs("div",{className:"cdv1 memo",children:[t.jsx("b",{children:s}),t.jsx("span",{className:"cdw",children:a.cdMemo(e.memoType||"")})]}),t.jsxs("div",{className:"md-head evalhead",children:[typeof k=="number"&&t.jsx(po,{v:k,sur:100,k:a.cdConvScore}),ln(e.verdictDate,r)&&t.jsxs("span",{className:"md-tag",children:[a.cdVerdictDate," ",ln(e.verdictDate,r)]})]}),E&&t.jsx("div",{className:"cdrich convrich",dangerouslySetInnerHTML:{__html:wp(E)}})]}),y==="memo"&&t.jsx(Ip,{o:e}),y==="soc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Ve,{k:a.cdSector,v:e.sector}),t.jsx(Ve,{k:a.cdMarket,v:e.market,wide:!0}),t.jsx(Op,{k:a.cdTags,vals:e.tags}),t.jsx(Ve,{k:a.cdStage,v:e.stage}),t.jsx(Ve,{k:a.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(Ve,{k:a.cdSite,v:e.domain||e.website,href:e.website||void 0}),t.jsx(Ve,{k:a.cdLinkedin,v:e.linkedinCompany?"LinkedIn":"",href:e.linkedinCompany}),t.jsx(Ve,{k:a.cdAngle,v:e.angle}),t.jsx(Ve,{k:a.cdDetected,v:ln(e.date,r)}),t.jsx(Ve,{k:a.cdQuery,v:e.provQuery,wide:!0}),t.jsx(Ve,{k:a.cdSrc,v:Tn(e.provUrl||""),href:ca(e.provUrl||"")}),t.jsx(Ve,{k:a.cdAngleSrc,v:qa(e)})]}),y==="ctc"&&t.jsxs("div",{className:"cdgrid",children:[t.jsx(Ve,{k:a.cdName,v:e.contactName}),t.jsx(Ve,{k:a.cdEmail,v:e.contactEmail,href:e.contactEmail?`mailto:${e.contactEmail}`:void 0}),t.jsx(Ve,{k:a.cdLinkedin,v:e.contactLinkedin?"LinkedIn":"",href:e.contactLinkedin}),t.jsx(Ve,{k:a.cdPhone,v:e.contactPhone,href:e.contactPhone?`tel:${e.contactPhone.replace(/[^+0-9]/g,"")}`:void 0})]}),y==="suivi"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"cdgrid",children:t.jsx(Ve,{k:a.cdCeoStatus,v:e.ceoStatus})}),typeof e.engagement=="number"&&e.engagement>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"md-head evalhead",children:t.jsxs("span",{className:"md-score md-amber",children:[e.engagement>=20?"🔥 ":"",a.cdEngagement," ",Math.round(e.engagement*10)/10]})}),t.jsx("p",{className:"mnote dim",children:a.cdEngagementHint})]}),e.ceoNote&&t.jsxs("p",{className:"cdtxt",children:["💬 ",e.ceoNote]}),t.jsx(Pp,{o:e}),o.pipe&&(e.memoUrl||e.memoPdfUrl)&&t.jsxs("div",{className:"cdacts",children:[e.memoUrl&&t.jsxs("button",{type:"button",className:"abtn",onClick:()=>n({type:"memoConsole",id:e.id}),children:[a.actMemoOf(e.memoType)," →"]}),e.memoPdfUrl&&t.jsx("a",{className:"abtn",href:e.memoPdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF ↗"}),i&&e.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>d(e),children:a.actRegen})]})]})]})]})}const Ea=new Map;function _p({o:e}){const{t:a,token:r}=Y(),[n,o]=c.useState(!1),[i,d]=c.useState(null);c.useEffect(()=>{if(!r||!e.name)return;const x=`${r}:${e.name.toLowerCase()}`;let u=Ea.get(x);u||(u=jo(r,[e.name]).then(m=>m[e.name]||Object.values(m)[0]||null).catch(()=>null),Ea.set(x,u),u.then(m=>{(!m||!m.ok)&&Ea.delete(x)}));let b=!0;return u.then(m=>{b&&m&&m.ok&&d(m)}),()=>{b=!1}},[r,e.id,e.name]);const l=async()=>{if(n)return;o(!0);const x=await wo(r,e.name,e.website||e.domain||"");d(x),x.ok&&Ea.set(`${r}:${e.name.toLowerCase()}`,Promise.resolve(x)),o(!1)},s=(i==null?void 0:i.blocs)||{},h=[[a.qaVP,s.value_prop],[a.qaProduct,s.produit],[a.qaModel,s.modele],[a.qaSummary,s.synthese]],p=h.some(([,x])=>x);return t.jsxs("div",{className:"qab",children:[!i&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"mnote dim",children:a.qaHint}),t.jsx("button",{type:"button",className:"abtn",disabled:n,onClick:()=>{l()},children:n?a.qaBusy:a.qaRun})]}),i&&p&&t.jsxs(t.Fragment,{children:[h.filter(([,x])=>x).map(([x,u])=>t.jsxs("div",{className:"qal",children:[t.jsx("span",{className:"qak",children:x}),t.jsx("p",{children:u})]},x)),!!(i.pages||[]).length&&t.jsx("p",{className:"mnote dim",children:a.qaSources((i.pages||[]).length)})]}),i&&!p&&t.jsx("p",{className:"mnote warn",children:i.quota?a.qaQuota:a.qaEmpty})]})}function Qt({spec:e}){const a=c.useRef(null),r=c.useRef(null),[n,o]=c.useState(!1);return c.useEffect(()=>{const i=a.current;if(!i)return;let d=!1;const l=()=>{const h=Math.max(280,Math.min(560,i.clientWidth||320));sr({kind:"op",card:e},h).then(p=>{!d&&p&&i.isConnected&&i.replaceChildren(p)})},s=window.requestAnimationFrame(l);return()=>{d=!0,window.cancelAnimationFrame(s),i.replaceChildren()}},[e]),c.useEffect(()=>{if(!n)return;const i=r.current;if(!i)return;let d=!1;sr({kind:"op",card:e},Math.min(1100,Math.floor(window.innerWidth*.92))).then(s=>{!d&&s&&i.isConnected&&i.replaceChildren(s)});const l=s=>{s.key==="Escape"&&o(!1)};return document.addEventListener("keydown",l),()=>{d=!0,document.removeEventListener("keydown",l)}},[n,e]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:a,className:"zoom-card-host",title:"Agrandir",onClick:()=>o(!0)}),n&&Gt.createPortal(t.jsx("div",{className:"atl2",children:t.jsxs("div",{className:"atl2-lb",onClick:()=>o(!1),children:[t.jsx("div",{ref:r,style:{lineHeight:0}}),t.jsx("button",{type:"button",className:"atl2-lb-x","aria-label":"Fermer",onClick:()=>o(!1),children:"×"})]})}),document.body)]})}const Bp=`
.atl2-pop-veil{position:fixed;inset:0;z-index:59;background:transparent}
.atl2 .pop.atl2-pop-fix{position:fixed;z-index:60;width:min(352px,calc(100vw - 24px))}
.atl2 .pop.atl2-pop-center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;width:min(352px,calc(100vw - 24px))}
`;function $p(e,a=!1){if(!e||typeof window>"u")return;const r=352,n=a?620:430,o=window.innerWidth,i=window.innerHeight,d=Math.min(Math.max(e.x-r/2,8),Math.max(8,o-r-8));let l=e.y+10;return l+n>i-8&&(l=Math.max(8,e.y-n-14)),l<8&&(l=8),{left:d,top:l}}function Up(){const{st:e,dispatch:a,byId:r,t:n,lang:o,caps:i,mode:d,askEvaluate:l,doAnalyse:s,doDecide:h,doPromote:p,doRepeche:x,doApproach:u,doDeep:b,doOnboard:m,outbound:w,evalBusy:y}=Y(),f=e.popupId?r.get(e.popupId):null;if(!f)return null;const v=$e(f),E=Le(f),k=zt(f),j=ma(f),N=f.kind==="target",S=L=>{a({type:"filters",patch:L}),a({type:"popup",id:null})};return Gt.createPortal(t.jsxs("div",{className:"atl2",children:[t.jsx("style",{children:Bp}),t.jsx("div",{className:"atl2-pop-veil",onClick:()=>a({type:"popup",id:null})}),t.jsxs("div",{className:"pop on "+(e.popupAnchor?"atl2-pop-fix":"atl2-pop-center"),style:$p(e.popupAnchor,!!f.card),onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{className:"ph",children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h3",{children:f.name}),t.jsx("span",{className:"id",children:n.detected(n.daysAgo(jt(f.date)),tt(f.engine,o))})]}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"popup",id:null}),children:"×"})]}),t.jsxs("div",{className:"pb",children:[t.jsxs("div",{className:"tags",children:[f.cc&&t.jsx("button",{type:"button",className:"hi",onClick:()=>S({country:[f.cc]}),children:(Yt(f.cc,o)||f.countryLabel||"").toUpperCase()}),f.sector&&t.jsx("button",{type:"button",onClick:()=>S({sector:[f.sector]}),children:f.sector.toUpperCase()}),f.stage&&t.jsx("button",{type:"button",onClick:()=>S({stage:[f.stage]}),children:f.stage.toUpperCase()}),typeof f.amountEur=="number"&&f.amountEur>0&&t.jsx("span",{className:"am2",children:Dt(f.amountEur,o)})]}),i.pipe&&N&&t.jsxs("div",{className:"pstat",children:[j&&t.jsx("span",{className:"vd "+(j==="MATCH"?"v-ok":"v-no"),title:n.vt[j],children:j}),k&&t.jsx("span",{className:"vd v-cons",title:n.vt[k],children:k}),t.jsx("span",{className:"pstep",children:n.plabels[E]}),f.ceoStatus&&t.jsx("span",{className:"pstep own",children:f.ceoStatus})]}),(f.tagline||f.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:f.tagline||f.headline})]}),t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.how}),t.jsxs("p",{children:[Ft(f.engine)," ",t.jsx("b",{children:tt(f.engine,o)})," — ",vs(f.engine,o),f.noteTitle&&t.jsxs(t.Fragment,{children:[" · ",f.noteTitle]})]}),v?t.jsxs("p",{className:"psig",style:{marginTop:9},children:[t.jsx(Ct,{o:f,lg:!0})," ",t.jsx(Va,{o:f,src:!0}),t.jsxs("span",{className:"pdate",style:{display:"block",marginTop:5},children:[n.signaledOn(No(v,o))," · ",n.win7(So(v,o))]})]}):t.jsx("p",{className:"pnos",style:{marginTop:5},children:n.noSignal})]}),f.card?t.jsx(Qt,{spec:f.card}):null,f.reasoning&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:i.pipe&&E>=1?n.verdictCap:n.memo}),t.jsx("p",{className:"memo",children:f.reasoning})]}),i.pipe&&N&&k&&t.jsx("div",{className:"fld",children:t.jsxs("p",{style:{fontWeight:700},children:[k,typeof f.score=="number"&&f.score>0?" · "+n.score(f.score):""]})}),i.pipe&&N&&t.jsx(Un,{o:f})]}),t.jsx($n,{name:f.name}),t.jsxs("div",{className:"pf",children:[i.lockActions||d!=="client"&&i.pipe?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>a({type:"modal",modal:"rdv"}),children:[t.jsx("span",{className:"fill"}),"🔒 ",n.lockbarCta]}):i.pipe?t.jsxs(t.Fragment,{children:[E===0&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:y,onClick:()=>l(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)]}),E===1&&t.jsxs("button",{type:"button",className:"evalbtn memo",style:{flex:1,justifyContent:"center"},onClick:()=>{s(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actAnalyse]}),E===2&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{p(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actPromote]}),E===3&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{h(f,!0),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actYes]}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{h(f,!1),a({type:"popup",id:null})},children:n.actNo}),Ut(f)&&t.jsx("button",{type:"button",className:"abtn",title:n.memoDeepHint,onClick:()=>{b(f),a({type:"popup",id:null})},children:n.memoDeep})]}),E===4&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{u(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actApproach]}),E===5&&t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{x(f),a({type:"popup",id:null})},children:[t.jsx("span",{className:"fill"}),n.actRepeche]}),f.memoUrl&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{a({type:"memoConsole",id:f.id}),a({type:"popup",id:null})},children:"📄"}),w&&t.jsx("button",{type:"button",className:"abtn",title:n.actOnboardTitle,onClick:()=>{m(f),a({type:"popup",id:null})},children:"🚀"})]}):f.engine==="media"&&f.url&&i.showDemand?t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},onClick:()=>{var L;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:f.url}}))}catch{}a({type:"popup",id:null}),(L=document.querySelector(".atl2 .demand"))==null||L.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rsOpen]}),t.jsx("button",{type:"button",className:"abtn",disabled:y,title:n.evalGoOn(f.name),onClick:()=>l(f),children:"⚡"})]}):t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center"},disabled:y,onClick:()=>l(f),children:[t.jsx("span",{className:"fill"}),n.evalGoOn(f.name.length>22?f.name.slice(0,21)+"…":f.name)," →"]}),f.website&&t.jsx("a",{className:"psite",href:f.website.startsWith("http")?f.website:"https://"+f.website,target:"_blank",rel:"noopener noreferrer",title:f.website,children:"🌐"})]})]})]}),document.body)}function Hp(){const{lang:e,token:a,dossiers:r,caps:n}=Y(),o=a||"home",{names:i,verdicts:d}=c.useMemo(()=>{const s=[],h={};return r.forEach(p=>{p.kind!=="target"||!p.name||(s.push(p.name),h[p.name]=ws(p)||"")}),{names:s,verdicts:h}},[r]);return{diff:c.useMemo(()=>i.length?ys(o,i,d,e):null,[o,i.length]),names:i,verdicts:d,scope:o,caps:n}}function Vp(){const{st:e,dispatch:a,counts:r,t:n,doUndo:o,data:i,dossiers:d,caps:l}=Y(),[s,h]=c.useState(!1),[p,x]=c.useState(!1),u=c.useRef(null);c.useEffect(()=>{if(!s)return;const E=k=>{u.current&&!u.current.contains(k.target)&&h(!1)};return document.addEventListener("click",E,!0),()=>document.removeEventListener("click",E,!0)},[s]);const b=[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage],["sector",n.sortSector],...l.pipe?[["crible",n.sortCrible],["memo",n.sortMemo],["score",n.sortScore]]:[]],m=i.loading&&!d.length,w=c.useRef({});c.useEffect(()=>{w.current={...r}},[r]);const y=E=>{const k=w.current[E],j=k!==void 0?r[E]-k:0;return t.jsxs("button",{type:"button",className:"step"+(E===3&&r[3]>0?" wait":""),style:{"--c":`var(${oa[E]})`,"--tc":E<=3?"var(--ink)":"#fff"},"aria-selected":e.ptab===E,title:n.phelp[E],onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}a({type:"ptab",tab:E})},children:[t.jsxs("span",{className:"l",children:[n.plabels[E],E===3&&r[3]>0&&t.jsx("i",{className:"wd"})]}),t.jsxs("span",{className:"n"+(j>0?" up":j<0?" down":""),children:[r[E],j!==0&&t.jsxs("em",{className:"delta",children:[j>0?"+":"−",Math.abs(j)]})]})]},E)},f=(E,k,j)=>t.jsxs("button",{type:"button",className:"off"+(k?" view":""),"data-off":E,style:{"--c":`var(${oa[E]})`},"aria-selected":e.ptab===E,title:n.phelp[E],onClick:()=>{try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}a({type:"ptab",tab:E})},children:[t.jsx("span",{className:"l",children:j}),t.jsx("span",{className:"n",children:r[E]})]},E),v=(E,k,j,N=!1)=>t.jsx("button",{type:"button",className:"tool",title:k,disabled:N,onClick:j,children:E},k);return t.jsxs("div",{className:"funnel"+(m?" waiting":""),children:[t.jsx("div",{className:"chain2",children:[0,1,2,3,4].map(y)}),t.jsxs("div",{className:"offtrack",children:[f(5,!1,n.plabels[5]),f(7,!0,n.plabels[7]),f(6,!0,"★ "+n.plabels[6])]}),t.jsxs("span",{className:"ftools",style:{marginLeft:"auto"},children:[v("↩",n.toolUndo,o,e.undo.length===0),t.jsx("button",{type:"button",className:"tool"+(p?" spin":""),title:n.toolReset,onClick:()=>{a({type:"reset"}),a({type:"ptab",tab:1}),a({type:"continent",key:l.pipe?"europe":"monde"}),a({type:"dens",dens:"liste"});try{window.dispatchEvent(new CustomEvent("ppmap:tunnel"))}catch{}x(!0),window.setTimeout(()=>x(!1),600)},children:"↺"}),t.jsxs("span",{className:"fsort",ref:u,children:[t.jsx("button",{type:"button",className:"tool","aria-pressed":s,title:n.toolSort,onClick:()=>h(E=>!E),children:"⇅"}),s&&t.jsx("span",{className:"sortmenu",role:"listbox",children:b.map(([E,k])=>t.jsxs("button",{type:"button",role:"option","aria-selected":e.sort.key===E,className:"sortopt"+(e.sort.key===E?" on":""),onClick:()=>a({type:"sort",key:E}),children:[k,t.jsx("i",{children:e.sort.key===E?e.sort.dir===1?"↑":"↓":""})]},E))})]}),v("▶",n.toolTuto,()=>a({type:"modal",modal:"tuto"})),v("⚙",n.toolCrit,()=>a({type:"modal",modal:"crit"}))]})]})}function Wp(){const{st:e,dispatch:a,t:r,lang:n,counts:o,scoped:i,memoQueued:d,mode:l,data:s}=Y(),h=c.useRef(null),[p,x]=c.useState(60);c.useEffect(()=>{let S=0;const L=()=>{var R;const C=h.current;if(!C)return;const T=(R=C.parentElement)==null?void 0:R.querySelector('.funnel [aria-selected="true"]');if(!T)return;const O=T.getBoundingClientRect(),U=C.getBoundingClientRect();x(Math.max(20,Math.min(O.left+O.width/2-U.left,U.width-30)))};return S=requestAnimationFrame(L),window.addEventListener("resize",L),()=>{cancelAnimationFrame(S),window.removeEventListener("resize",L)}},[e.ptab]);const u=e.ptab;let b=r.tuto[u].p;if(u===3){const S=i.filter(T=>T.kind==="target"&&Le(T)===3),L=S.filter(T=>mn(T)==="auto").length,C=S.filter(T=>mn(T)==="cd").length;b=r.tutoPending(L,C,S.length)}const m=(()=>{var S;if(l!=="client")return null;if(u===0&&i.length)return{label:r.tuto[0].a,locked:!1,run:()=>a({type:"chainStart",queue:i.map(L=>L.id)})};if(u===1){const L=i.filter(C=>C.kind==="target"&&Le(C)===1&&!d.has(C.id)).slice(0,10);if(L.length){const C=String(((S=s.credits)==null?void 0:S.plan)||"").toLowerCase(),T=C==="enterprise"||C==="entreprise";return{label:r.tuto[1].a,locked:!T,run:()=>{T&&a({type:"chainStart",queue:L.map(O=>O.id)})}}}}return null})(),w=ks(u),y=u===1||u===2,f=u===5,v=u===7,E=u===6,k=w||f||v,j=r.plabels[u]+" · "+(o[u]??0),N=n==="en"?"Back to Kept ✕":"Revenir aux retenues ✕";return t.jsxs("div",{ref:h,className:"tuto mini"+(k?"":" on-dark")+(y?" etape-on":"")+(f?" etape-out":"")+(v?" etape-view":"")+(E?" etape-fav":""),style:{"--bg":`var(${oa[u]})`,"--ax":p+"px","--stc":k?"var(--ink)":"#fff","--stt":k?"#fff":"var(--ink)","--tc":k?"var(--ink)":"#fff"},children:[t.jsx("span",{className:"txt",children:t.jsxs("p",{children:[t.jsx("b",{className:"tstep",children:j}),t.jsx("span",{className:"tbody",dangerouslySetInnerHTML:{__html:b}})]})}),m&&t.jsx("button",{type:"button",className:"tprim"+(m.locked?" lock":""),disabled:!!m.locked,title:m.locked?r.analyseLockHint:void 0,onClick:m.run,children:m.locked?"🔒 "+r.analyseLock:m.label}),u!==1&&t.jsx("button",{type:"button",className:"treset",onClick:()=>a({type:"ptab",tab:1}),children:N})]})}const pn=600,St=62,co="atl2:fstats";function Gp(){const{t:e,lang:a,data:r,caps:n,st:o,dispatch:i}=Y(),[d,l]=c.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem(co)==="on"}catch{return!1}}),s=r.stats,h=c.useMemo(()=>((s==null?void 0:s.by_day)||[]).slice(-30),[s]),p=(s==null?void 0:s.since)||"";if(!n.showFunnel||!s||typeof s.screened!="number")return null;const x=j=>a==="en"?j.slice(5,10):`${j.slice(8,10)}/${j.slice(5,7)}`,u=j=>j.toLocaleString(a==="en"?"en-US":"fr-FR"),b=h.reduce((j,N)=>Math.max(j,N.s||0),0),m=h.length?pn/h.length:0,w=Math.max(4,m-4),y=h.length>=5&&b>0,f=r.marketEstimate||0,v=x(new Date().toISOString().slice(0,10)),E=j=>[...typeof j=="number"?[[j,e.funScreened("","")]]:[],...typeof s.kept=="number"?[[s.kept,e.funKept]]:[],...typeof s.analyzed=="number"?[[s.analyzed,e.funAnalyzed]]:[],...typeof s.shown=="number"?[[s.shown,e.funShown]]:[]],k=[];return typeof s.screened_window=="number"&&p&&k.push({cle:"fenetre",periode:e.funPerWindow(x(p),v),etapes:[[s.screened_window,e.funScreened("","")]]}),typeof s.screened=="number"&&k.push({cle:"total",periode:e.funPerAll,etapes:E(s.screened)}),t.jsxs("div",{className:"fstats"+(d?" on":""),children:[k.map(j=>t.jsxs("div",{className:"fst-row fst-lab",title:e.funScope,children:[t.jsx("span",{className:"fst-per",children:j.periode}),j.etapes.map(([N,S],L)=>t.jsxs("span",{className:"fst-t",children:[L>0&&t.jsx("span",{className:"fst-ar",children:"→"}),t.jsx("b",{children:u(N)}),t.jsx("i",{children:S})]},j.cle+S)),j.cle==="total"&&f>0&&t.jsxs("span",{className:"fst-t fst-mkt",children:[t.jsx("span",{className:"fst-ar",children:"·"}),t.jsx("i",{children:e.funOfMarket(u(f),Math.min(100,Math.round((s.screened||0)/f*100)))})]}),j.cle==="total"&&(s.screened||0)>=50&&t.jsx("span",{className:"fst-t fst-roi",children:t.jsx("i",{children:e.funAnalyst})}),j.cle===k[k.length-1].cle&&y&&t.jsx("button",{type:"button",className:"fst-x","aria-expanded":d,title:d?e.fstatsHide:e.fstatsShow,onClick:()=>{const N=!d;l(N),N&&!o.mapFolded&&i({type:"mapFold",folded:!0});try{localStorage.setItem(co,N?"on":"off")}catch{}},children:d?"⌃":"⌄"})]},j.cle)),d&&y&&t.jsxs("div",{className:"fst-act",children:[t.jsxs("div",{className:"fst-ah",children:[t.jsx("span",{children:e.actTitle}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#0E7F3F"}}),e.actKept]}),t.jsxs("span",{className:"fst-lg",children:[t.jsx("i",{style:{background:"#cfe0d6"}}),e.actScreened]})]}),t.jsxs("svg",{viewBox:`0 0 ${pn} ${St}`,preserveAspectRatio:"none",role:"img","aria-label":e.actTitle,children:[h.map((j,N)=>{const S=(j.s||0)/b*(St-4),L=(j.m||0)/b*(St-4),C=N*m+(m-w)/2;return t.jsxs("g",{className:"fst-day"+(o.filters.day===j.d?" on":""),role:"button",tabIndex:0,onClick:()=>i({type:"filters",patch:o.filters.day===j.d?{day:"",win:"all"}:{day:j.d,win:"all"}}),onKeyDown:T=>{T.key!=="Enter"&&T.key!==" "||(T.preventDefault(),i({type:"filters",patch:o.filters.day===j.d?{day:"",win:"all"}:{day:j.d,win:"all"}}))},children:[t.jsx("title",{children:`${x(j.d)} — ${j.s} ${e.actScreened} · ${j.m} ${e.actKept}`}),t.jsx("rect",{x:C-1,y:0,width:w+2,height:St,fill:"transparent"}),t.jsx("rect",{x:C,y:St-2-S,width:w,height:S,fill:"#cfe0d6"}),t.jsx("rect",{x:C,y:St-2-L,width:w,height:L,fill:"#0E7F3F"})]},j.d)}),t.jsx("line",{x1:0,y1:St-1.5,x2:pn,y2:St-1.5,stroke:"#dbe5df",strokeWidth:1})]}),t.jsxs("div",{className:"fst-ax",children:[t.jsx("span",{children:x(h[0].d)}),t.jsx("span",{children:e.actToday})]})]})]})}const gi={"CALL PENDING":"call","CALL YES":"v-yes","CALL NO":"v-no2",CONSIDER:"v-cons",MONITOR:"v-mon",PASS:"v-pass"};function Hn({o:e,locked:a=!1}){const{t:r}=Y(),n=ma(e),o=zt(e),i=Le(e),d=mn(e),l=Es(e);return t.jsxs("span",{className:"c-vd",children:[n?t.jsx("span",{className:"vd "+(n==="MATCH"?"v-ok":"v-no"),title:r.vt[n],children:n}):t.jsx("span",{className:"vd wait",children:r.actToEval}),o?t.jsx("span",{className:"vd "+(gi[o]||"v-cons"),title:r.vt[o],children:o}):i===1?t.jsx("span",{className:"vd wait",children:r.actMemoQueue}):null,i===3&&d==="auto"&&t.jsx("span",{className:"org au",title:r.orgAutoTitle,children:r.orgAuto}),i===3&&d==="cd"&&t.jsx("span",{className:"org cd",title:r.orgCdTitle,children:r.orgCd}),i===3&&l!==null&&t.jsx("span",{className:"wait2 "+(l>10?"hot":l>=5?"warm":""),title:r.waitTitle(l),children:r.waitChip(l)}),!a&&t.jsx(ed,{o:e})]})}const Wt=e=>e.length>22?e.slice(0,21)+"…":e;function ua(e){const a=(e.url||"").trim(),r=[e.headline,e.tagline].filter(n=>n&&n!==e.name).join(`
`);if(!(!a&&!r))try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:a,text:r}}))}catch{}}function xi(){let e=0;return document.querySelectorAll("body.pp-desk .pph, body.pp-desk .pp-nav, body.pp-desk .pp-band, .atl2.ops .eval-stick, .atl2.ops .fzone:has(.stage.folded), .atl2.ops .listhead, .atl2.cibles .eval-stick, .atl2.cibles .fzone:has(.stage.folded), .atl2.cibles .listhead").forEach(a=>{const r=a.getBoundingClientRect();r.height<4||r.top<window.innerHeight*.55&&r.bottom>e&&(e=r.bottom)}),e}function Yp({on:e,rev:a}){const[r,n]=c.useState(null),[o,i]=c.useState({top:0,left:0,width:0});return c.useEffect(()=>{if(!e){n(null);return}const d=()=>{var m,w,y;const l=document.querySelector(".atl2.ops .desk-list"),s=document.querySelector(".atl2.ops .listhead");if(!l){n(null);return}const h=l.getBoundingClientRect(),p=s?s.getBoundingClientRect().bottom:h.top;i({top:Math.round(p),left:Math.round(h.left),width:Math.round(h.width)});const x=[...l.querySelectorAll(":scope .grp")];let u=null;for(const f of x){const v=f.querySelector(".grp-h");v&&v.getBoundingClientRect().bottom<=p+2&&(u=f)}if(!u){n(null);return}const b=u.querySelector(".grp-h");if(!b){n(null);return}n({ic:(((m=b.querySelector(".ic"))==null?void 0:m.textContent)||"").trim(),t:(((w=b.querySelector(".t"))==null?void 0:w.textContent)||"").trim(),s:(((y=b.querySelector(".s"))==null?void 0:y.textContent)||"").trim()})};return d(),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),()=>{window.removeEventListener("scroll",d),window.removeEventListener("resize",d)}},[e,a]),!e||!r||o.width<80?null:t.jsxs("div",{className:"grp-pin",style:{top:o.top,left:o.left,width:o.width},children:[t.jsx("span",{className:"ic",children:r.ic}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:r.t}),t.jsx("div",{className:"s",children:r.s})]})]})}function Qp(e){const r=()=>{const n=xi(),o=e.getBoundingClientRect().top-n-8;Math.abs(o)<2||window.scrollBy({top:o,left:0,behavior:"auto"})};r(),requestAnimationFrame(()=>requestAnimationFrame(r))}function uo({o:e}){const{t:a,askEvaluate:r,evalBusy:n,lang:o}=Y(),[i,d]=c.useState(!1);if(c.useEffect(()=>{n||d(!1)},[n]),Ge(e)){const h=(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("span",{className:"verdict",style:{"--c":h?"var(--brand)":"var(--red)"},title:e.reasoning||"",children:[h?"✓":"✗"," ",t.jsx("b",{children:h?a.kept:a.dropped}),typeof e.score=="number"&&e.score>0?" "+e.score:""]})}const s=i&&n;return t.jsxs("button",{type:"button",className:"rev"+(s?" loading":""),disabled:n,title:a.evalGoOn(e.name),onClick:h=>{h.stopPropagation(),d(!0),r(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(Wt(e.name))})]})}function Vn({o:e}){const{t:a,caps:r,memoQueued:n,approachDone:o,doAnalyse:i,doDecide:d,doPromote:l,doRepeche:s,doApproach:h,dispatch:p,liveMemos:x}=Y(),u=m=>w=>{w.stopPropagation(),m()};if(r.lockActions){const m=u(()=>p({type:"modal",modal:"rdv"}));if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",onClick:m,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});const w=Le(e);return w===0?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",onClick:m,children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.evalGoOn(Wt(e.name))})]})}):w===1?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",onClick:m,children:a.actAnalyse})}):w===3?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",onClick:m,children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",onClick:m,children:a.actNo})]})}):w===2?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"promo",onClick:m,children:a.actPromote})}):w===4?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"approach",onClick:m,children:a.actApproach})}):w===5?t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"promo",onClick:m,children:a.actRepeche})}):t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn read",onClick:m,children:a.actMemoOf(e.memoType)})})}if(e.noCo)return e.url?t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:m=>{m.stopPropagation(),ua(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})}):t.jsx("span",{className:"cell"});if(Fa(e)&&e.url)return t.jsx("span",{className:"cell",children:t.jsxs("button",{type:"button",className:"rev",title:a.rsOpen,onClick:m=>{m.stopPropagation(),ua(e)},children:[t.jsx("span",{className:"fill"}),t.jsx("span",{className:"lbl",children:a.rowExtract})]})});if(!r.pipe)return e.noCo?t.jsx("span",{className:"cell"}):t.jsx("span",{className:"cell",children:t.jsx(uo,{o:e})});const b=Le(e);if(b===0)return t.jsx("span",{className:"cell",children:t.jsx(uo,{o:e})});if(b===1){const m=x.liveOf(e.name);if(m&&(m.status==="boot"||m.status==="running"))return t.jsx("span",{className:"cell",children:t.jsx(Ta,{item:m,serverOff:x.serverOff,bootLbl:a.liveBoot,endLabel:a.liveEnd})});const w=n.has(e.id);return t.jsx("span",{className:"cell",children:t.jsx("button",{type:"button",className:"memobtn",disabled:w,onClick:u(()=>i(e)),children:w?a.actAnalyseQueued:a.actAnalyse})})}if(b===3)return t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"ynb oui",title:a.actYesTitle,onClick:u(()=>d(e,!0)),children:a.actYes}),t.jsx("button",{type:"button",className:"ynb non",title:a.actNoTitle,onClick:u(()=>d(e,!1)),children:a.actNo}),e.memoUrl&&t.jsxs("button",{type:"button",className:"memobtn read sm",title:a.actMemoOf(e.memoType),onClick:u(()=>p({type:"focus",id:e.id})),children:["📄",t.jsx("span",{className:"mlbl",children:a.actMemoOf(e.memoType).replace("📖 "," ")})]})]})});if(b===4){const m=o.has(e.id);return t.jsxs("span",{className:"cell",children:[t.jsx("button",{type:"button",className:"approach",disabled:m,onClick:u(()=>h(e)),children:m?a.actApproachSent:a.actApproach}),t.jsx("button",{type:"button",className:"lk sm",title:a.actConnHint,onClick:u(()=>p({type:"modal",modal:"plug"})),children:a.actConn}),t.jsx("button",{type:"button",className:"lk sm dsrow",title:a.dsBtn,onClick:u(()=>p({type:"dossierOpen",id:e.id})),children:a.dsBtn})]})}return b===2?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:u(()=>l(e)),children:a.actPromote}),e.memoUrl&&t.jsxs("button",{type:"button",className:"memobtn read sm",title:a.actMemoOf(e.memoType),onClick:u(()=>p({type:"focus",id:e.id})),children:["📄",t.jsx("span",{className:"mlbl",children:a.actMemoOf(e.memoType).replace("📖 "," ")})]})]})}):b===5?t.jsx("span",{className:"cell",children:t.jsxs("span",{className:"yn",children:[t.jsx("button",{type:"button",className:"promo",onClick:u(()=>s(e)),children:a.actRepeche}),e.memoUrl&&t.jsxs("button",{type:"button",className:"memobtn read sm",title:a.actMemoOf(e.memoType),onClick:u(()=>p({type:"focus",id:e.id})),children:["📄",t.jsx("span",{className:"mlbl",children:a.actMemoOf(e.memoType).replace("📖 "," ")})]})]})}):t.jsx("span",{className:"cell",children:e.memoUrl?t.jsx("button",{type:"button",className:"memobtn read",onClick:u(()=>p({type:"focus",id:e.id})),children:a.actMemoOf(e.memoType)}):t.jsx("span",{className:"rc",children:"—"})})}function Kp({o:e}){const{t:a,doThumb:r,thumbOf:n}=Y(),o=n(e);return t.jsxs("span",{className:"thu",children:[t.jsx("button",{type:"button",className:"tb up"+(o==="yes"?" on":""),title:a.thumbUp,onClick:i=>{i.stopPropagation(),r(e,!0)},children:"👍"}),t.jsx("button",{type:"button",className:"tb dn"+(o==="no"?" on":""),title:a.thumbDn,onClick:i=>{i.stopPropagation(),r(e,!1)},children:"👎"})]})}function Jp({o:e}){const{lang:a}=Y();return $e(e)?t.jsxs("span",{className:"c-sig",children:[t.jsx(Ct,{o:e}),t.jsx(Va,{o:e,src:!0})]}):t.jsx("span",{className:"c-sig",children:t.jsxs("span",{className:"mo",children:[Ft(e.engine||"")," ",tt(e.engine||"",a)]})})}function Xp({o:e,locked:a,open:r,onToggle:n,selected:o,echo:i,onSelect:d,fresh:l}){const{dispatch:s,caps:h,markRow:p,markedId:x,favIds:u,toggleFav:b,t:m}=Y(),w=Le(e),y=["#16233A","#475C6E","#8798A8","#B9C6D2"],f=e.date?Math.max(0,Math.floor((Date.now()-Date.parse(e.date))/864e5)):9999,v=f<=0?0:f<=7?1:f<=30?2:3,E=h.pipe&&e.kind==="target"?["#8FA0B8","#9BD1B4","#5FB98C","#2E9A66","#0E8A44","#E2A5A5"][w]:y[v],k=u.has(e.id),j=N=>{if(a)return;if(d){d(e.id);return}if(h.pipe||e.kind==="op"){n();return}const S=N.currentTarget.getBoundingClientRect();s({type:"popup",id:e.id,anchor:{x:S.left+Math.min(280,S.width/3),y:S.bottom}})};return t.jsxs(c.Fragment,{children:[t.jsxs("div",{className:"row"+(x===e.id||r||o?" on":"")+(r?" open":"")+(o?" sel":"")+(i?" echo":"")+(h.pipe&&e.kind==="target"?" p"+w:"")+(k?" fav":"")+(a?" tzr":""),"aria-selected":o||void 0,onMouseEnter:()=>p(e.id),onMouseLeave:()=>p(null),onClick:j,children:[t.jsx("span",{className:"pt",style:{"--c":E}}),t.jsx(Ei,{o:e}),t.jsxs("span",{className:"nd",children:[l&&t.jsx("span",{className:"rfresh",children:"✨"}),typeof e.engagement=="number"&&e.engagement>=20&&t.jsx("span",{className:"rhot",title:`${m.cdEngagement} ${Math.round(e.engagement*10)/10} · ${m.cdEngagementHint}`,children:"🔥"}),$e(e)&&t.jsx(Ct,{o:e}),t.jsxs("span",{className:"rnm"+(a?" nmx":""),title:a?void 0:e.name,children:[h.pipe&&t.jsx("button",{type:"button",className:"tb",title:"★",style:{border:0,background:"none",cursor:"pointer",opacity:k?1:.35,padding:0,marginRight:4},onClick:N=>{N.stopPropagation(),b(e)},children:k?"★":"☆"}),e.name]}),t.jsxs("span",{className:"rds",title:e.tagline||e.headline||"",children:[Je(e)&&(e.date||"").slice(0,10)&&t.jsx("b",{className:"rdate",children:(e.date||"").slice(0,10).split("-").reverse().slice(0,2).join("/")}),[e.tagline,e.headline,e.reasoning].find(N=>N&&N!==e.name)||""]}),h.pipe&&!h.lockActions&&!a&&(e.website||e.contactLinkedin||e.contactEmail||e.contactPhone)&&t.jsxs("span",{className:"rlnk",onClick:N=>N.stopPropagation(),children:[e.website&&t.jsx("a",{href:ca(e.website),target:"_blank",rel:"noopener noreferrer","aria-label":m.rowSite,title:m.rowSite,children:"🌐"}),e.contactLinkedin&&t.jsx("a",{href:ca(e.contactLinkedin),target:"_blank",rel:"noopener noreferrer","aria-label":m.rowLi,title:m.rowLi,children:"in"}),e.contactEmail&&t.jsx("a",{href:`mailto:${e.contactEmail}`,"aria-label":m.rowMail,title:m.rowMail,children:"✉"}),e.contactPhone&&t.jsx("a",{href:`tel:${e.contactPhone.replace(/[^+0-9]/g,"")}`,"aria-label":m.rowTel,title:m.rowTel,children:"☎"})]}),e.acquirer&&t.jsxs("button",{type:"button",className:"racq",title:m.acqSee(e.acquirer),onClick:N=>{N.stopPropagation(),s({type:"acquirer",value:e.acquirer||""})},children:["← ",Wt(e.acquirer)]}),We(e)?t.jsx("span",{className:"rdec",title:m.doEdito,children:"📖"}):e.decryptHtml?t.jsx("span",{className:"rdec",title:m.zoomNewsMark,children:"📰"}):null]}),t.jsx(Zp,{o:e}),t.jsx("span",{className:"c-stade",children:e.stage||""}),t.jsx(Jp,{o:e}),h.pipe&&t.jsx(Hn,{o:e,locked:a}),h.pipe&&t.jsxs("span",{className:"c-sc",children:[typeof e.score=="number"?e.score:"",typeof e.score=="number"&&t.jsx("s",{children:"/100"})]}),t.jsx(Vn,{o:e}),h.showThumbs&&t.jsx(Kp,{o:e})]}),r&&!a&&!d&&t.jsx(ac,{o:e})]})}function Zp({o:e}){const{lang:a,caps:r}=Y();if(r.pipe&&e.kind==="target")return t.jsx("span",{className:"c-amt none",children:"—"});const n=Dt(e.amountEur,a);return t.jsx("span",{className:"c-amt"+(n?"":" none"),children:n||"—"})}function ec({o:e}){const{t:a,lang:r,askEvaluate:n,evalBusy:o,dispatch:i}=Y(),d=(u,b=!1)=>m=>{m.stopPropagation(),b&&i({type:"continent",key:"monde"}),i({type:"filters",patch:u})},l=(()=>{const u=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return u?u[1].slice(0,40):""})(),s=Dt(e.amountEur,r),h=(e.date||"").slice(0,10).split("-").reverse().join("/"),p=Ge(e),x=p&&(e.verdict||"").toUpperCase()!=="NO MATCH";return t.jsxs("div",{className:"card ops-open",children:[t.jsxs("div",{className:"oc-main",children:[e.decryptHtml?t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}):t.jsx("p",{className:"oc-head",children:e.headline||e.tagline||e.name}),t.jsxs("div",{className:"oc-meta",children:[e.sector&&t.jsx("button",{type:"button",onClick:d({sector:[e.sector]}),children:e.sector}),e.countryLabel&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:d({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:d({stage:[e.stage]}),children:e.stage}),s&&t.jsx("span",{className:"oc-amt",children:s}),h&&t.jsx("span",{children:h})]}),t.jsxs("div",{className:"oc-acts",children:[p?t.jsxs("span",{className:"verdict",style:{"--c":x?"var(--brand)":"var(--red)"},children:[x?"✓":"✗"," ",t.jsx("b",{children:x?a.kept:a.dropped})]}):Je(e)?e.url&&t.jsx("button",{type:"button",className:"oc-cta",onClick:u=>{u.stopPropagation(),ua(e)},children:a.rowExtract}):t.jsx("button",{type:"button",className:"oc-cta",disabled:o,onClick:u=>{u.stopPropagation(),n(e)},children:a.evalGoOn(Wt(e.name))}),e.url&&t.jsxs("a",{className:"oc-src",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:u=>u.stopPropagation(),children:[(r==="fr"?"lire la source":"read the source")+(l?` · ${l}`:"")," ↗"]})]})]}),e.card&&t.jsx("div",{className:"oc-side",children:t.jsx(Qt,{spec:e.card})})]})}function tc({o:e}){const{t:a,lang:r,caps:n,dispatch:o}=Y();if(!e)return t.jsx("p",{className:"readpane-empty",children:r==="fr"?"Cliquez une ligne — le dossier s’ouvre ici, sans quitter la liste.":"Click a row — the file opens here, without leaving the list."});const i=(e.date||"").slice(0,10).split("-").reverse().join("/"),d=[e.tagline,e.headline,e.reasoning].find(h=>h&&h!==e.name)||"",l=Dt(e.amountEur,r),s=(()=>{const h=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return h?h[1].replace(/^www\./,"").slice(0,40):""})();return t.jsxs("div",{className:"zoom zoom-pipe",children:[t.jsxs("div",{className:"zoom-k",children:[tt(e.engine||"",r),i?` · ${i}`:"",l?` · ${l}`:""]}),t.jsxs("div",{className:"zoom-hd",children:[t.jsx("h3",{className:"zoom-h",children:e.name}),t.jsx("div",{className:"zoom-cta",children:n.lockActions?t.jsx("button",{type:"button",className:"oc-cta",onClick:()=>o({type:"modal",modal:"rdv"}),children:a.lockbarCta}):t.jsx(Vn,{o:e})})]}),(e.sector||e.countryLabel||e.stage||e.acquirer)&&t.jsxs("div",{className:"zoom-meta",children:[e.sector?t.jsx("span",{children:e.sector}):null,e.countryLabel?t.jsx("span",{children:e.countryLabel}):null,e.stage?t.jsx("span",{children:e.stage}):null,e.acquirer?t.jsxs("span",{children:["← ",e.acquirer]}):null]}),(d||e.decryptHtml||e.url||e.card)&&t.jsxs("div",{className:"zoom-news",children:[d?t.jsx("p",{className:"zoom-lead",children:d}):null,e.decryptHtml?t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}):null,e.card?t.jsx("div",{className:"zoom-card",children:t.jsx(Qt,{spec:e.card})}):null,e.url?t.jsxs("a",{className:"zoom-src",href:e.url,target:"_blank",rel:"nofollow noopener",children:[a.zoomSrc,s?` · ${s}`:""," ↗"]}):null]}),t.jsx(Un,{o:e})]})}function bi({o:e,extra:a}){const{t:r,lang:n,askEvaluate:o,evalBusy:i,dispatch:d,caps:l,dossiers:s}=Y(),h=c.useRef(null),p=We(e);if(c.useEffect(()=>{if(!p||!(e!=null&&e.decryptHtml))return;const g=h.current;if(!g)return;let q=!1;return cn(()=>import("./fit-DX-mzLKR.js"),[]).then(async M=>{await M.ensureEditoCss(),!(q||!g.isConnected)&&(M.beautifyEditoRows(g),M.mountCardFits(g))}),()=>{q=!0}},[p,e==null?void 0:e.decryptHtml]),!e&&!a){const g=s.find(We);if(g)return t.jsx(bi,{o:g})}const x=((e==null?void 0:e.name)||(a==null?void 0:a.name)||"").trim(),u=((e==null?void 0:e.url)||(a==null?void 0:a.url)||"").trim(),b=(e==null?void 0:e.headline)||(e==null?void 0:e.tagline)||(a==null?void 0:a.headline)||x,m=(e==null?void 0:e.card)||(a==null?void 0:a.card),w=e?!!e.noCo:!x||La(x),y=(e==null?void 0:e.engine)||"",f=We(e),v=e?Dt(e.amountEur,n):"",E=((e==null?void 0:e.date)||"").slice(0,10).split("-").reverse().join("/"),k=(()=>{const g=/https?:\/\/(?:www\.)?([^/]+)/.exec(u);return g?g[1].replace(/^www\./,"").slice(0,40):""})(),j=s.find(We),N=((j==null?void 0:j.url)||"").trim(),S=!!u&&!!N&&(u===N||u.endsWith(N)||N.endsWith(u)),L=(g,q=!1)=>M=>{M.stopPropagation(),q&&d({type:"continent",key:"monde"}),d({type:"filters",patch:g})};if(!e&&!a)return t.jsx("p",{className:"readpane-empty",children:n==="fr"?"Cliquez une ligne, un pin ou le ticker — le dossier s’ouvre ici.":"Click a row, a pin or the ticker — the file opens here."});const C=()=>{x&&(d({type:"continent",key:"monde"}),d({type:"filters",patch:{search:x}}))},T=()=>{e!=null&&e.sector&&d({type:"filters",patch:{sector:[e.sector]}})},O=()=>{ua({url:u,headline:b,tagline:e==null?void 0:e.tagline,name:x})},U=e?Ge(e):!1,R=U&&e&&(e.verdict||"").toUpperCase()!=="NO MATCH",D=f?r.doEdito.replace(/^📖\s*/,""):y?tt(y,n):n==="fr"?"Dossier":"File";return t.jsxs("div",{className:"zoom",children:[t.jsxs("div",{className:"zoom-k",children:[D,E?` · ${E}`:""]}),t.jsx("h3",{className:"zoom-h",children:b}),u&&!f&&(w||Fa({engine:y}))&&t.jsxs("a",{className:"zoom-ext",href:u,target:"_blank",rel:"noopener noreferrer",title:r.viewLinkHint,onClick:g=>g.stopPropagation(),children:[t.jsxs("svg",{className:"extico",width:"13",height:"13",viewBox:"0 0 16 16","aria-hidden":"true",children:[t.jsx("path",{fill:"currentColor",d:"M6.2 3H3.8A1.8 1.8 0 0 0 2 4.8v7.4C2 13.2 2.8 14 3.8 14h7.4c1 0 1.8-.8 1.8-1.8V9.2h-1.5v3a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V4.8a.3.3 0 0 1 .3-.3h2.4V3Z"}),t.jsx("path",{fill:"currentColor",d:"M9 2h5v5h-1.5V4.56L7.78 9.28 6.72 8.22 11.44 3.5H9V2Z"})]}),r.viewLink,k?t.jsx("em",{children:k}):null]}),(e==null?void 0:e.decryptHtml)&&t.jsx("div",{ref:h,className:"ed-decrypt-b zoom-body"+(f?" ppart":""),dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsxs("div",{className:"zoom-meta",children:[(e==null?void 0:e.sector)&&t.jsx("button",{type:"button",onClick:L({sector:[e.sector]}),children:e.sector}),(e==null?void 0:e.countryLabel)&&e.countryLabel!=="Europe"&&(e.cc?t.jsx("button",{type:"button",onClick:L({country:[e.cc]},!0),children:e.countryLabel}):e!=null&&e.countryLabel?t.jsx("span",{children:e.countryLabel}):null),(e==null?void 0:e.stage)&&t.jsx("button",{type:"button",onClick:L({stage:[e.stage]}),children:e.stage}),v&&t.jsx("span",{className:"oc-amt",children:v})]}),m&&t.jsx("div",{className:"zoom-card",children:t.jsx(Qt,{spec:m})}),(u&&!S&&!f||j&&!f)&&t.jsxs("div",{className:"zoom-srcbox",children:[u&&!S&&!f&&t.jsxs("a",{className:"zoom-src",href:u,target:"_blank",rel:"nofollow noopener",onClick:g=>g.stopPropagation(),children:[r.zoomSrc,k?` · ${k}`:""," ↗"]}),j&&!f&&t.jsxs("button",{type:"button",className:"zoom-src zoom-src-art",onClick:g=>{g.stopPropagation(),d({type:"focus",id:j.id})},children:[r.doEdito," →"]})]}),t.jsxs("div",{className:"zoom-acts",children:[U?t.jsxs("span",{className:"verdict",style:{"--c":R?"var(--brand)":"var(--red)"},children:[R?"✓":"✗"," ",t.jsx("b",{children:R?r.kept:r.dropped})]}):!w&&x?t.jsxs("button",{type:"button",className:"zp-go",disabled:i,onClick:g=>{g.stopPropagation(),o(e,x)},children:[t.jsx("span",{className:"zp-ico",children:"⚡"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.evalGoOn(Wt(x))}),t.jsx("em",{children:r.zoomEvalHint})]})]}):null,u&&!f&&(w||Fa({engine:y}))&&t.jsxs("button",{type:"button",className:"zp-go"+(!w&&x?" ghost":""),onClick:g=>{g.stopPropagation(),O()},children:[t.jsx("span",{className:"zp-ico",children:"🔎"}),t.jsxs("span",{className:"zp-txt",children:[t.jsx("b",{children:r.rowExtract}),t.jsx("em",{children:r.rsOpen})]})]}),!w&&x&&t.jsxs("div",{className:"zp-row",children:[(e==null?void 0:e.sector)&&!l.pipe&&t.jsxs("button",{type:"button",className:"zp-sec",onClick:g=>{g.stopPropagation(),T()},children:[t.jsx("span",{className:"zp-k",children:r.zoomSimilar}),t.jsx("span",{className:"zp-v",children:e.sector}),t.jsx("em",{children:r.zoomSimilarHint})]}),t.jsxs("button",{type:"button",className:"zp-sec",onClick:g=>{g.stopPropagation(),C()},children:[t.jsx("span",{className:"zp-k",children:r.zoomInCockpit}),t.jsx("span",{className:"zp-v",children:Wt(x)}),t.jsx("em",{children:r.zoomIsolateHint})]})]}),!w&&x&&l.pipe&&t.jsx($n,{name:x})]})]})}function ac({o:e}){const{t:a,lang:r,dispatch:n,caps:o,outbound:i,doOnboard:d}=Y();return!o.pipe&&e.kind==="op"?t.jsx(ec,{o:e}):t.jsxs("div",{className:"card",style:{display:"grid"},children:[t.jsxs("div",{children:[e.tagline&&t.jsx("p",{className:"lead",children:e.tagline}),e.decryptHtml&&t.jsx("div",{className:"ed-decrypt-b",dangerouslySetInnerHTML:{__html:e.decryptHtml}}),t.jsx(Un,{o:e}),t.jsx(td,{o:e}),t.jsx(nd,{o:e}),t.jsx($n,{name:e.name}),t.jsxs("div",{className:"tg",children:[e.sector&&t.jsx("button",{type:"button",onClick:l=>{l.stopPropagation(),n({type:"filters",patch:{sector:[e.sector]}})},children:e.sector}),e.stage&&t.jsx("button",{type:"button",onClick:l=>{l.stopPropagation(),n({type:"filters",patch:{stage:[e.stage]}})},children:e.stage}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:l=>{l.stopPropagation(),n({type:"continent",key:"monde"}),n({type:"filters",patch:{country:[e.cc]}})},children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.city&&t.jsx("span",{children:e.city})]})]}),t.jsxs("div",{className:"cside",children:[t.jsxs("div",{className:"top",children:[typeof e.score=="number"&&t.jsx("span",{className:"sc3",children:e.score}),t.jsx("span",{className:"vv",children:t.jsx(Hn,{o:e})})]}),e.card&&t.jsx(Qt,{spec:e.card}),t.jsxs("div",{className:"sec2",children:[t.jsxs("div",{className:"k2",children:[Ft(e.engine||"")," ",tt(e.engine||"",r)]}),$e(e)&&t.jsx("div",{style:{marginTop:8},children:t.jsx(Ct,{o:e})})]}),o.pipe&&(e.memoUrl||i)&&t.jsx("div",{className:"sec2 acts2",children:i&&t.jsx("button",{type:"button",className:"btn d",title:a.actOnboardTitle,onClick:()=>d(e),children:a.actOnboard})})]})]})}function nc({o:e,locked:a,selected:r,onSelect:n}){const{t:o,dispatch:i,caps:d,doDecide:l,lang:s}=Y();if(!d.pipe&&e.kind==="op"){const x=Dt(e.amountEur,s),u=(()=>{const m=/https?:\/\/(?:www\.)?([^/]+)/.exec(e.url||"");return m?m[1].slice(0,32):""})(),b=(m,w=!1)=>y=>{y.stopPropagation(),w&&i({type:"continent",key:"monde"}),i({type:"filters",patch:m})};return t.jsxs("div",{className:"dcard dops"+(a?" tzr":"")+(r?" sel":""),onClick:()=>{!a&&n&&n(e.id)},children:[e.card&&t.jsx("div",{className:"dimg",children:t.jsx(Qt,{spec:e.card})}),t.jsxs("div",{className:"dh",children:[t.jsx("span",{className:"dnm",title:e.name,children:e.name}),e.decryptHtml&&t.jsx("span",{className:"rdec",title:"Décryptage éditorial",children:"📖"})]}),e.headline&&e.headline!==e.name&&t.jsx("div",{className:"ddesc",children:e.headline}),t.jsxs("div",{className:"dtags",children:[e.sector&&t.jsx("button",{type:"button",onClick:b({sector:[e.sector]}),children:e.sector}),e.countryLabel&&(e.cc?t.jsx("button",{type:"button",onClick:b({country:[e.cc]},!0),children:e.countryLabel}):t.jsx("span",{children:e.countryLabel})),e.stage&&t.jsx("button",{type:"button",onClick:b({stage:[e.stage]}),children:e.stage}),x&&t.jsx("span",{className:"damt",children:x})]}),t.jsxs("div",{className:"dsig",children:[t.jsxs("span",{className:"dmo",children:[Ft(e.engine||"")," ",tt(e.engine||"",s)]}),$e(e)&&t.jsx(Ct,{o:e})]}),e.url&&t.jsxs("a",{className:"dsrc",href:e.url,target:"_blank",rel:"nofollow noopener",onClick:m=>m.stopPropagation(),children:[(s==="fr"?"lire la source":"read the source")+(u?` · ${u}`:"")," ↗"]}),!a&&t.jsx("div",{className:"dact",children:t.jsx(Vn,{o:e})})]})}const h=Le(e),p=["#E3E8F0","#E7F3EC","#C4E0D0","#7FC0A0","#12A150","#E5484D"][h];return t.jsxs("div",{className:"dcard"+(a?" tzr":"")+(r?" sel":""),style:{"--c":p},onClick:()=>{!a&&n&&n(e.id)},children:[t.jsxs("div",{className:"dh",children:[typeof e.score=="number"&&t.jsx("span",{className:"dsc",children:e.score}),t.jsx("span",{className:"dnm",title:e.name,children:e.name})]}),t.jsxs("div",{className:"dv",children:[t.jsx(Hn,{o:e}),$e(e)&&t.jsx(Ct,{o:e})]}),t.jsx("div",{className:"dmeta",children:[e.countryLabel,e.stage,e.sector].filter(Boolean).join(" · ")}),(e.tagline||e.reasoning)&&t.jsx("div",{className:"ddesc",children:e.tagline||e.reasoning}),!a&&d.pipe&&h===3&&t.jsxs("div",{className:"dyn",children:[t.jsx("button",{type:"button",style:{"--c3":"#0E8A44"},onClick:()=>l(e,!0),children:o.actYes}),t.jsx("button",{type:"button",style:{"--c3":"var(--red)"},onClick:()=>l(e,!1),children:o.actNo})]}),!a&&e.memoUrl&&t.jsxs("button",{type:"button",className:"dmemo",onClick:()=>i({type:"focus",id:e.id}),children:[o.actMemoOf(e.memoType)," →"]})]})}function rc(){const{t:e}=Y(),[a,r]=c.useState(0);return c.useEffect(()=>{const n=window.setInterval(()=>r(o=>o+1),2400);return()=>window.clearInterval(n)},[]),t.jsxs("div",{className:"loadwait","aria-live":"polite",children:[t.jsxs("div",{className:"lw-top",children:[t.jsx("span",{className:"lw-dot"}),t.jsx("span",{className:"lw-msg",children:e.loadMsgs[a%e.loadMsgs.length]})]}),[0,1,2,3,4,5].map(n=>t.jsxs("div",{className:"lw-row",style:{"--d":`${n*.12}s`},children:[t.jsx("span",{className:"lw-c lw-c1"}),t.jsx("span",{className:"lw-c lw-c2"}),t.jsx("span",{className:"lw-c lw-c3"})]},n))]})}function oc({counts:e}){const{st:a,dispatch:r,t:n,lang:o}=Y(),i=o==="en",d=p=>n.plabels[p]||"",l=[0,1,2,3,4,5,6,7].filter(p=>p!==a.ptab&&(e[p]||0)>0),s=l.includes(0)?0:l.sort((p,x)=>(e[x]||0)-(e[p]||0))[0];if(s===void 0)return t.jsx("div",{className:"void",children:n.emptyTab});const h=e[s]||0;return t.jsxs("div",{className:"void void-empty",children:[t.jsx("b",{children:i?`No “${d(a.ptab)}” for now.`:`0 ${d(a.ptab).toLowerCase().replace(/s$/,"")} pour l’instant.`}),t.jsx("span",{children:s===0?i?`${h} ${h>1?"files are":"file is"} waiting for your screening`:`${h} dossier${h>1?"s":""} attende${h>1?"nt":""} votre évaluation`:i?`${h} ${h>1?"files":"file"} in “${d(s)}”`:`${h} dossier${h>1?"s":""} dans « ${d(s)} »`}),t.jsxs("button",{type:"button",className:"abtn",onClick:()=>r({type:"ptab",tab:s}),children:[(i?"Open ":"Ouvrir ")+d(s)," →"]})]})}function ic(){var _t,Be,Xe,Ye,ct;const e=Y(),{st:a,dispatch:r,t:n,caps:o,counts:i,scoped:d,scopedAll:l,markRow:s,lang:h,sessTally:p,data:x,dossiers:u,source:b,focusExtra:m,byId:w,token:y}=e,f=Mo(),v=c.useMemo(()=>{var X,P,ee,Q;if(!y||b==="ops")return null;const F=(((X=f==null?void 0:f.ed)==null?void 0:X.date)||(f==null?void 0:f.day)||"").slice(0,10),W=[(P=f==null?void 0:f.ed)==null?void 0:P.html,(ee=f==null?void 0:f.ed)==null?void 0:ee.acquirers_html].filter(Boolean).join("");return{id:"edito:brief",kind:"op",name:h==="en"?"Today's brief":"Brief du jour",headline:h==="en"?"Operations relevant to your thesis":"Opérations pertinentes pour votre thèse",tagline:((Q=f==null?void 0:f.ed)==null?void 0:Q.date)||F,decryptHtml:W||void 0,date:F,engine:"edito",dealKind:"other",noCo:!0,cc:null,continent:null}},[y,b,h,(_t=f==null?void 0:f.ed)==null?void 0:_t.html,(Be=f==null?void 0:f.ed)==null?void 0:Be.acquirers_html,(Xe=f==null?void 0:f.ed)==null?void 0:Xe.date,f==null?void 0:f.day]),E=F=>o.lockRowsAfter!==null||b==="ops"||o.pipe?Number.MAX_SAFE_INTEGER:Oo,[k,j]=c.useState(new Set);c.useEffect(()=>{j(new Set)},[a.ptab,a.continent]);const[N,S]=c.useState(null);c.useEffect(()=>{S(null)},[a.ptab,a.continent]);const[L,C]=c.useState(!a.mapFolded);c.useEffect(()=>{if(a.mapFolded){C(!1);return}const F=document.getElementById("atl2-stage");if(!F){C(!1);return}const W=new IntersectionObserver(([X])=>C(!!X&&X.isIntersecting),{root:null,rootMargin:"-120px 0px 0px 0px",threshold:0});return W.observe(F),()=>W.disconnect()},[a.mapFolded]);const T=!a.mapFolded&&!L,O=F=>j(W=>{const X=new Set(W);return X.has(F)?X.delete(F):X.add(F),X}),U=b==="ops"||o.pipe,[R,D]=c.useState("all"),[g,q]=c.useState(!1),[M,J]=c.useState(null),[A,B]=c.useState(!1),I=c.useRef(!0);c.useEffect(()=>{if(I.current){I.current=!1;return}D("all"),B(!1)},[a.ptab,a.continent]),c.useEffect(()=>{if(!A)return;const F=W=>{var X,P;(P=(X=W.target)==null?void 0:X.closest)!=null&&P.call(X,".atl2 .doable")||B(!1)};return document.addEventListener("click",F,!0),()=>document.removeEventListener("click",F,!0)},[A]);const $=c.useMemo(()=>{var W;const F=new Map;for(const X of _l(((W=f==null?void 0:f.ed)==null?void 0:W.html)||""))F.has(X.t)||F.set(X.t,X.html);return F},[(Ye=f==null?void 0:f.ed)==null?void 0:Ye.html]),te=c.useCallback(F=>{if(F.decryptHtml)return F.decryptHtml;if(!$.size)return;const W=(F.name||"").trim().toLowerCase();if(W.length<3)return;const X=$.get(W);if(X)return X;for(const[P,ee]of $)if(P.includes(W)||W.includes(P))return ee},[$]),{diff:K}=Hp(),[ye,re]=c.useState(!1),de=a.filters.win==="1"&&!a.filters.day,[ge,ce]=c.useState(!1),ve=c.useMemo(()=>new Set(((K==null?void 0:K.added)||[]).map(F=>F.trim().toLowerCase()).filter(Boolean)),[K]),xe=c.useMemo(()=>{if(!ve.size)return 0;const F={...a,filters:{...a.filters,win:"all",day:"",signalOnly:!1,signalEngines:[]}};return u.filter(W=>!We(W)&&ve.has((W.name||"").trim().toLowerCase())&&ia(W,F,o.pipe)).length},[u,ve,a,o.pipe]);c.useEffect(()=>{const F=()=>{ce(!1),q(!1),D("all"),B(!1),r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})};return window.addEventListener("ppmap:tunnel",F),()=>window.removeEventListener("ppmap:tunnel",F)},[]),c.useEffect(()=>{ce(!1),q(!1),a.filters.signalOnly&&r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})},[a.ptab]);const Ne=c.useMemo(()=>{const F=l.filter(X=>!We(X)&&Je(X));let W="";for(const X of F){const P=(X.date||"").slice(0,10);P&&(!W||P<W)&&(W=P)}return{n:F.length,since:W?W.split("-").reverse().slice(0,2).join("/"):""}},[l]),Fe=Ne.n,ae=c.useMemo(()=>{const W=ge&&ve.size>0||a.filters.signalOnly||R!=="all"||g?l:d;let X=Dn(W,a.sort);return X=X.filter(P=>!We(P)),ge&&ve.size&&(X=X.filter(P=>ve.has((P.name||"").trim().toLowerCase()))),g||R==="explore"?X=X.filter(Je):R==="eval"?X=X.filter(P=>!Je(P)&&!P.noCo&&(P.kind==="op"||!Ge(P))):o.pipe&&(X=X.filter(P=>!Je(P))),X},[d,l,a.sort,R,ge,ve,g,o.pipe]),be=c.useMemo(()=>o.pipe?u.filter(F=>F.kind==="target"&&!We(F)&&$e(F)&&(a.continent==="monde"||F.continent===a.continent)):ae.filter(F=>$e(F)&&!Ge(F)),[o.pipe,u,ae,a.continent]).length,oe=c.useMemo(()=>o.pipe?ae:ae.filter(F=>!Ge(F)&&!F.noCo&&!Je(F)),[ae,o.pipe]),_=b==="ops"?ae.filter(Je).length:0,V=ge?"":o.pipe?n.plabels[a.ptab].toLowerCase():b==="ops"?n.edLabel:a.filters.status==="retenu"?n.keptByStan:a.filters.status==="ecarte"?n.droppedByStan:n.toSend,Z=a.filters,le=Z.sector.length+Z.market.length+Z.country.length+Z.engine.length+Z.stage.length+Z.crible.length+Z.angle.length+Z.memoLevel.length+Z.dealKind.length+(Z.signalOnly?1:0)+(Z.acquirer.trim()?1:0)+(Z.search.trim()?1:0),pe=[];if(Z.day)pe.push({k:"day",lib:n.fDay(Z.day.slice(8,10)+"/"+Z.day.slice(5,7)),off:()=>r({type:"filters",patch:{day:"",win:"all"}})});else if(Z.win&&Z.win!=="all"){const F=["1","7","30"].indexOf(Z.win);F>=0&&pe.push({k:"win",lib:n.dates[F],off:()=>r({type:"filters",patch:{win:"all"}})})}const ne=F=>F.length<=2?F.join(", "):`${F.length} ${n.fSelected}`;for(const F of["sector","market","country","engine","crible"]){const W=Z[F];W&&W.length&&pe.push({k:F,lib:ne(W),off:()=>r({type:"clearFacet",facet:F})})}Z.search&&pe.push({k:"search",lib:"🔍 "+Z.search,off:()=>r({type:"filters",patch:{search:""}})}),ge&&ve.size&&pe.push({k:"since",lib:"✨ "+n.sinceChip,off:()=>ce(!1)}),Z.signalOnly&&pe.push({k:"sig",lib:"🔴 "+n.sigDock(be||Z.signalEngines.length||0),off:()=>r({type:"filters",patch:{signalOnly:!1,signalEngines:[]}})});const ie=(F,W,X="",P=!1)=>t.jsxs("button",{type:"button","data-s":F,className:X,"aria-sort":a.sort.key===F?a.sort.dir===1?"ascending":"descending":"none",style:P?{justifyContent:"flex-end"}:void 0,onClick:()=>r({type:"sort",key:F}),children:[W,t.jsx("span",{className:"ar",children:a.sort.key===F&&a.sort.dir===1?"▴":"▾"})]},F),ue=c.useMemo(()=>{if(o.pipe||a.groupBy==="none")return null;const F=new Map;ae.forEach(P=>{const ee=P.engine||"?";F.has(ee)||F.set(ee,[]),F.get(ee).push(P)});const W={ma:0,fundraising:1,partenariats:2,produits:3,regul:4,marche:5,nominations:6,recrutements:7,evenements:8,listes:9,tribunes:10,media:11,edito:12},X=un([...F.keys()],h);return[...F.entries()].sort((P,ee)=>{const Q=W[P[0]]??10+X.indexOf(P[0]),me=W[ee[0]]??10+X.indexOf(ee[0]);return Q-me})},[ae,o.pipe,a.groupBy,h]),we=ue?ue.filter(([F])=>Na.has(F)).length:0,Ce=(()=>{var W;return((W=(ue?ue.flatMap(([,X])=>X):ae)[0])==null?void 0:W.id)??null})(),je=c.useRef(!1),Ee=c.useMemo(()=>u.find(We)||v,[u,v]),[ht,gt]=c.useState(!1);c.useEffect(()=>{const F=()=>{je.current=!0,ce(!1)};return window.addEventListener("ppmap:reveal",F),window.addEventListener("ppmap:focus",F),()=>{window.removeEventListener("ppmap:reveal",F),window.removeEventListener("ppmap:focus",F)}},[]),c.useEffect(()=>{const F=()=>{Ee&&r({type:"focus",id:Ee.id})};return window.addEventListener("ppmap:edito",F),()=>window.removeEventListener("ppmap:edito",F)},[Ee,r]),c.useEffect(()=>{if(!a.focusId)return;J(a.focusId);const F=window.setTimeout(()=>J(null),900);return()=>window.clearTimeout(F)},[a.focusId]),c.useEffect(()=>{if(U&&!(a.focusId&&(ae.some(F=>F.id===a.focusId)||u.some(F=>F.id===a.focusId)||a.focusId===(Ee==null?void 0:Ee.id)))&&!m){if(Ee){r({type:"focus",id:Ee.id});return}Ce&&r({type:"focus",id:Ce})}},[U,a.focusId,ae,Ce,m,r,u,b,Ee]),c.useEffect(()=>{if(!U||!a.focusId||Ee&&a.focusId===Ee.id||ae.some(W=>W.id===a.focusId))return;const F=u.find(W=>W.id===a.focusId);if(F){if(je.current){F.kind==="op"?D(Je(F)?"explore":"eval"):R!=="all"&&D("all");return}R!=="all"&&Ce&&r({type:"focus",id:Ce})}},[U,a.focusId,R,ae,u,Ce,r,Ee]),c.useEffect(()=>{if(!U||!a.focusId||!je.current)return;const F=document.querySelector(".atl2.ops .row.sel, .atl2.ops .dcard.sel, .atl2.cibles .row.sel, .atl2.cibles .dcard.sel");if(!F){const ee=ae.findIndex(Q=>Q.id===a.focusId);if(ee>=0){const Q=ue?"":"pt"+a.ptab;if(Q){const me=a.shown[Q]||E();ee>=me&&r({type:"more",group:Q,by:ee-me+8})}}return}je.current=!1;const W=xi(),X=F.getBoundingClientRect();X.top>=W-2&&X.bottom<=window.innerHeight-4||Qp(F)},[U,a.focusId,a.ptab,ae,a.shown,ue,r]),c.useEffect(()=>{if(typeof window>"u")return;const F=document.querySelector(".atl2.ops .listhead, .atl2.cibles .listhead"),W=document.querySelector(".atl2.ops, .atl2.cibles");if(!F||!W)return;const X=document.querySelector(".atl2 .fzone"),P=()=>{W.style.setProperty("--listhead-h",`${F.offsetHeight}px`);const Q=!!(X&&X.querySelector(".stage.folded"));W.style.setProperty("--fold-h",Q&&X?`${X.offsetHeight}px`:"0px")};P();const ee=new ResizeObserver(P);return ee.observe(F),X&&ee.observe(X),()=>ee.disconnect()},[T,a.dens,a.mapFolded]);const Me=c.useMemo(()=>{if(!U||!a.focusId)return null;if(v&&a.focusId===v.id)return v;const F=ae.find(X=>X.id===a.focusId)||u.find(X=>X.id===a.focusId)||null;if(!F)return null;const W=te(F);return W&&W!==F.decryptHtml?{...F,decryptHtml:W}:F},[U,a.focusId,ae,u,te,v]),lt=o.lockRowsAfter;let xt=0;const At=(F,W)=>{let X=a.shown[W]||E();return F.length-X<=4&&(X=F.length),F.slice(0,X).map(Q=>{const me=lt!==null&&xt>=lt;xt++;const ze=te(Q),fe=ze&&ze!==Q.decryptHtml?{...Q,decryptHtml:ze}:Q,Oe=!U&&a.dens!=="maxi"&&(a.dens==="deplie"||(N?N==="open":!!ze)),Te=k.has(Q.id)?!Oe:Oe,nt=U?vt=>{je.current=!0,r({type:"focus",id:vt});const Ze=w.get(vt);Ze&&(Je(Ze)?ua(Ze):Ze.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:Ze.name,url:Ze.url||"",website:Ze.website||"",domain:Ze.domain||""}})))}:void 0;return a.dens==="maxi"?t.jsx(nc,{o:fe,locked:me,selected:U&&a.focusId===Q.id,onSelect:nt},Q.id):t.jsx(Xp,{o:fe,locked:me,open:Te,onToggle:()=>O(Q.id),selected:U&&a.focusId===Q.id,echo:M===Q.id,fresh:ve.has((Q.name||"").trim().toLowerCase()),onSelect:nt},Q.id)})},at="list"+(a.dens==="maxi"?" maxi":a.dens==="ligne"||a.dens==="deplie"?" ligne":"")+(b==="ops"?" opsl":"")+(ae.length?"":" list-empty"),qt=t.jsxs(t.Fragment,{children:[ue?ue.map(([F,W])=>t.jsxs("div",{className:"grp",children:[t.jsxs("div",{className:"grp-h",children:[t.jsx("span",{className:"ic",children:Ft(F)}),t.jsxs("span",{children:[t.jsx("span",{className:"t",children:F==="ma"?n.grpMa:F==="fundraising"?n.grpLev:Na.has(F)&&we<=1?n.grpNews:F==="nominations"?n.grpNom:F==="media"?n.grpNewsOther:F==="recrutements"?n.grpHire:Na.has(F)?n.grpNews+" · "+tt(F,h):tt(F,h)}),t.jsx("div",{className:"s",children:n.grpCount(W.filter(X=>!Ge(X)).length,W.length)})]})]}),At(W,F)]},F)):At(ae,"pt"+a.ptab),x.loading&&!u.length&&t.jsx(rc,{}),o.pipe&&a.ptab===0&&!g&&!ge&&R==="all"&&!a.filters.signalOnly&&!x.loading&&t.jsx(sp,{}),!ae.length&&!(x.loading&&!u.length)&&(o.pipe&&R==="all"?t.jsx(oc,{counts:i}):t.jsxs("div",{className:"void",children:[n.emptyScope,(Z.win!=="all"||!!Z.day)&&t.jsxs("p",{className:"voidb",children:[n.emptyWin," ",t.jsx("button",{type:"button",className:"lk",onClick:()=>r({type:"filters",patch:{win:"all",day:""}}),children:n.emptyWinBtn})]}),le>0&&t.jsxs("p",{className:"voidb",children:[n.emptyFilters(le)," ",t.jsx("button",{type:"button",className:"lk",onClick:()=>r({type:"reset"}),children:n.emptyFiltersBtn})]})]}))]}),bt=t.jsxs(t.Fragment,{children:[!ge&&!g&&t.jsxs("span",{className:"main",children:[t.jsx("b",{className:"tn",style:{"--c":"var("+oa[a.ptab]+")"},children:ae.length})," ",V]}),g&&t.jsxs("span",{className:"main",children:[t.jsx("b",{className:"tn",style:{"--c":"var("+oa[a.ptab]+")"},children:ae.length})," ",n.newsWord]}),(!ge||g)&&t.jsx("span",{className:"dot",children:"·"}),T&&t.jsx(di,{variant:"compact",mapToggle:!!a.mapFolded}),t.jsxs("span",{className:"ctx",children:[T?o.pipe&&e.fund?e.fund:null:t.jsxs(t.Fragment,{children:[e.contName,o.pipe&&e.fund?" · "+e.fund:""]}),pe.map(F=>t.jsxs("button",{type:"button",className:"fpuce",title:n.filterOff,onClick:W=>{W.stopPropagation(),F.off()},children:[F.lib,t.jsx("i",{children:"×"})]},F.k)),b==="ops"&&ae.length>0&&!T&&t.jsxs("span",{className:"edsplit",children:[" — ","⚡ ",ae.length-_," ",n.zoomPulseEval,_>0?t.jsxs(t.Fragment,{children:[" · 🔎 ",_," ",n.zoomPulseExplore]}):null]})]}),a.filters.acquirer.trim()&&t.jsxs("span",{className:"acqchip",children:["🏢 ",n.acqOn(a.filters.acquirer),t.jsx("button",{type:"button",title:n.acqClear,onClick:()=>r({type:"acquirer",value:""}),children:"✕"})]})]}),Pt=t.jsxs("div",{className:"listhead"+(T?" mapoff":""),children:[T&&t.jsx("div",{className:"lh-tools",children:t.jsx(li,{compact:!0})}),o.showFunnel&&ye&&de&&t.jsxs("div",{className:"lh-stats",children:[t.jsx(od,{}),t.jsx(Gp,{})]}),o.showFunnel&&t.jsx("div",{className:"lh-title",children:bt}),o.showFunnel&&t.jsxs("div",{className:"lh-funnel",children:[t.jsx(Vp,{}),t.jsx(Wp,{})]}),t.jsxs("div",{className:"lh-top",children:[o.showFunnel&&t.jsxs("div",{className:"lh-dock",children:[t.jsxs("button",{type:"button",className:"dockbtn"+(de?" on":""),"aria-pressed":de,title:n.morningDockTitle,onClick:()=>{if(de){r({type:"filters",patch:{win:"all",day:""}}),re(!1);return}ce(!1),q(!1),D("all"),r({type:"filters",patch:{win:"1",day:"",signalOnly:!1,signalEngines:[]}}),r({type:"ptab",tab:7}),re(!0)},children:["📊 ",n.morningDock(typeof((ct=x.stats)==null?void 0:ct.screened_today)=="number"?x.stats.screened_today:0)]}),K&&!K.firstVisit&&(K.added.length>0||K.gone.length>0)&&t.jsxs("button",{type:"button",className:"dockbtn since"+(ge?" on":""),"aria-pressed":ge,title:n.sinceSub,onClick:()=>{const F=!ge;ce(F),q(!1),re(!1),D("all"),F&&r({type:"filters",patch:{win:"all",day:"",signalOnly:!1,signalEngines:[]}})},children:["✨ ",n.sinceDock(xe),K!=null&&K.lastDate?` · ${n.sinceSince(K.lastDate)}`:""]}),be>0&&t.jsxs("button",{type:"button",className:"dockbtn sig"+(a.filters.signalOnly?" on":""),"aria-pressed":a.filters.signalOnly,onClick:()=>{ce(!1),q(!1),re(!1),D("all"),r({type:"filters",patch:{signalOnly:!a.filters.signalOnly,signalEngines:[],win:"all",day:""}})},children:["🔴 ",n.sigDock(be)]}),o.pipe&&Fe>0&&t.jsxs("button",{type:"button",className:"dockbtn news"+(g?" on":""),"aria-pressed":g,title:n.newsDockHint,onClick:()=>{const F=!g;q(F),ce(!1),re(!1),D("all"),F&&r({type:"filters",patch:{win:"all",day:"",signalOnly:!1,signalEngines:[]}})},children:["📰 ",n.newsDock(Fe),Ne.since?` · ${n.newsSince(Ne.since)}`:""]})]}),!o.showFunnel&&bt,o.showGroupBar&&t.jsxs("span",{className:"groupbar",children:[t.jsx("span",{className:"gl",children:n.groupBy}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="engine",onClick:()=>r({type:"groupBy",groupBy:"engine"}),children:n.groupEngine}),t.jsx("button",{type:"button","aria-pressed":a.groupBy==="none",onClick:()=>r({type:"groupBy",groupBy:"none"}),children:n.groupNone})]}),a.pileMode&&t.jsx("button",{type:"button",className:"exitpile",onClick:()=>r({type:"pile",on:!1}),children:n.exitPile}),t.jsxs("span",{className:"lh-acts",children:[(o.showFunnel||b==="ops")&&t.jsx("span",{className:"dens",children:[["liste",n.densList],["ligne",n.densLigne],["maxi",n.densMaxi]].map(([F,W])=>t.jsxs("button",{type:"button","data-d":F,"aria-pressed":a.dens===F||F==="ligne"&&a.dens==="deplie",onClick:()=>r({type:"dens",dens:F}),children:[t.jsx("i",{children:t.jsx("em",{})}),t.jsx("b",{children:W})]},F))}),!U&&o.showFunnel&&a.dens!=="maxi"&&t.jsxs("span",{className:"foldall",children:[t.jsx("button",{type:"button","aria-pressed":N==="open",onClick:()=>{S("open"),j(new Set)},children:n.unfoldAll}),t.jsx("button",{type:"button","aria-pressed":N==="closed",onClick:()=>{S("closed"),j(new Set)},children:n.foldAllLbl})]}),(o.showFunnel||b==="ops")&&(()=>{var ze;const F={...a,filters:{...a.filters,signalOnly:!1,signalEngines:[],...o.pipe?{win:"all",day:""}:{}}},W=u.filter(fe=>ia(fe,F,o.pipe)&&!We(fe)),X=W.filter(fe=>!Je(fe)&&!fe.noCo&&(fe.kind==="op"||!Ge(fe))).length,P=W.filter(Je).length,ee=o.pipe?W.filter(fe=>fe.kind!=="op"&&Le(fe)===1).length:0,Q=[["all",n.doAll],...o.pipe?[["analyser",`${n.doAna}${ee?` ${ee}`:""}`]]:[],["eval",`${n.doEval}${X?` ${X}`:""}`],["explore",`${n.doExplore}${P?` ${P}`:""}`]],me=((ze=Q.find(([fe])=>fe===R))==null?void 0:ze[1])||n.doAll;return t.jsxs("span",{className:"doable",children:[t.jsxs("button",{type:"button",className:"dobtn","aria-expanded":A,onClick:()=>B(fe=>!fe),children:[me,t.jsx("i",{children:"▾"})]}),A&&t.jsx("div",{className:"dolist",children:Q.map(([fe,Oe])=>t.jsx("button",{type:"button","aria-pressed":R===fe,onClick:()=>{if(B(!1),fe==="analyser"){window.dispatchEvent(new CustomEvent("ppmap:tunnel")),r({type:"ptab",tab:1});return}D(fe),fe!=="all"&&(ce(!1),q(!1),re(!1),r({type:"filters",patch:{signalOnly:!1,signalEngines:[],...o.pipe?{win:"all",day:""}:{}}}))},children:Oe},fe))})]})})(),a.dens==="maxi"&&t.jsxs("label",{className:"sortsel",children:[t.jsx("span",{children:n.sortBy}),t.jsx("select",{value:a.sort.key,onChange:F=>r({type:"sort",key:F.target.value}),children:[["signal",n.sortSig],["amount",n.sortAmount],["age",n.sortAge],["name",n.sortName],["country",n.sortCountry],["stage",n.sortStage],["sector",n.sortSector],...o.pipe?[["crible",n.sortCrible],["memo",n.sortMemo],["score",n.sortScore]]:[]].map(([F,W])=>t.jsx("option",{value:F,children:W},F))})]}),o.showChain&&t.jsxs("span",{className:"chainwrap"+(oe.length===0?" empty":""),children:[t.jsxs("button",{type:"button",className:"chain",disabled:oe.length===0,title:n.chainHint,onClick:()=>{oe.length&&r({type:"chainStart",queue:oe.map(F=>F.id)})},children:[t.jsx("span",{className:"b",children:"▶"})," ",o.pipe?n.browse(oe.length):n.chainAll(oe.length)]}),!o.pipe&&t.jsx("em",{className:"chainhint",children:n.chainHint})]})]})]})]});return t.jsxs(t.Fragment,{children:[!U&&Pt,a.dens!=="maxi"&&!U&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),ie("country",n.colCountry),ie("name",n.colCompany),ie("amount",n.colAmount,"h-amt",!0),ie("stage",n.colStage,"h-stade"),ie("signal",n.colSignal,"h-sig"),o.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[ie("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),ie("memo",n.colMemo)]}),o.pipe&&ie("score",n.colScore,"h-sc",!0),t.jsx("span",{}),o.showThumbs&&t.jsx("span",{className:"h-thu",children:n.colThumbs})]}),U?t.jsxs("div",{className:"desk",children:[t.jsxs("div",{className:"desk-list",children:[Pt,a.dens==="liste"&&t.jsxs("div",{className:"cols",children:[t.jsx("span",{}),ie("country",n.colCountry),ie("name",n.colCompany),o.pipe&&t.jsxs("span",{className:"h-vd h-vd-sort",children:[ie("crible",n.colCrible),t.jsx("i",{"aria-hidden":"true",children:"·"}),ie("memo",n.colMemo)]}),t.jsx("span",{})]}),t.jsx("div",{className:at,children:qt})]}),t.jsxs("aside",{className:"readpane"+((Me?We(Me):!m&&Ee)?" is-edito":""),"aria-label":h==="fr"?"Dossier":"File",children:[Ee&&(()=>{const F=a.focusId===Ee.id&&!ht,W=(Ee.headline||Ee.tagline||"").trim();return t.jsxs("button",{type:"button",className:"edito-go pane-edito","aria-pressed":F,onClick:()=>{if(F){gt(!0);return}gt(!1),r({type:"focus",id:Ee.id})},children:[t.jsx("span",{className:"eg-t",children:h==="en"?"Today’s editorial":"Édito du jour"}),W&&t.jsx("span",{className:"eg-sub",children:W}),t.jsx("span",{className:"eg-chev",children:F?h==="en"?"Collapse ▴":"Replier ▴":h==="en"?"Read ▾":"Lire ▾"})]})})(),!!(Ee&&(Me?We(Me):!m))&&ht?null:v&&a.focusId===v.id?t.jsx("div",{className:"zoom",children:t.jsx(Vl,{})}):Me&&o.pipe?t.jsx(tc,{o:Me}):t.jsx(bi,{o:Me,extra:Me?null:m})]})]}):t.jsx("div",{className:at,children:qt}),(()=>{const F=ue||[["pt"+a.ptab,ae]];let W=0,X=0;for(const[ee,Q]of F){X+=Q.length;let me=a.shown[ee]||E();Q.length-me<=4&&(me=Q.length),W+=Math.min(Q.length,me)}const P=X-W;return P<=0?null:t.jsxs("button",{type:"button",className:"moregrp",onClick:()=>F.forEach(([ee,Q])=>r({type:"more",group:ee,by:Q.length,base:E()})),children:[t.jsx("span",{className:"more-label",children:n.more(P,P)}),t.jsx("span",{className:"more-meta",children:n.moreMeta(W,X)})]})})(),o.showThumbs&&t.jsxs("p",{className:"learn",children:[n.learnLine,t.jsx("button",{type:"button",onClick:()=>r({type:"modal",modal:"crit"}),children:n.learnLink})]}),(p.kept>0||p.dropped>0)&&t.jsx("div",{className:"tally",style:{padding:"6px 14px"},dangerouslySetInnerHTML:{__html:n.session(p.kept,p.dropped)}}),U&&b==="ops"&&a.dens!=="maxi"&&t.jsx(Yp,{on:!!ue,rev:(ue||[]).map(([F,W])=>F+W.length).join("|")})]})}function mo(e){let a=e==null?"":String(e);return/^[=+\-@\t]/.test(a)&&(a=`'${a}`),/[";\n\r]/.test(a)?`"${a.replace(/"/g,'""')}"`:a}function sc(e,a){const r=js(e);return a[{retenu:1,ana:2,pending:3,valide:4,ecarte:5}[r]??1]||""}function lc(e,a){const n=[a.head.split("|").map(mo).join(";")];for(const o of e){const i=a.stageOf(o);n.push([o.name||"",sc(o,a.plabels),ma(o)||o.verdict||"",typeof o.score=="number"?o.score:"",o.countryLabel||o.cc||"",o.sector||"",i?a.stageLabel(i.stage):"",o.contactName||"",o.contactEmail||"",o.memoUrl||"",(o.date||"").slice(0,10),(o.reasoning||"").replace(/\s+/g," ").trim().slice(0,280)].map(mo).join(";"))}return`\uFEFF${n.join(`\r
`)}`}function dc(e){const a=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=`cibles_vue_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(n),n.click(),window.setTimeout(()=>{URL.revokeObjectURL(r);try{document.body.removeChild(n)}catch{}},400)}const pc=(e,a)=>{const r=String(e||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(r)?a==="en"?r:`${r.slice(8,10)}/${r.slice(5,7)}/${r.slice(0,4)}`:""};function Qe({k:e,v:a,href:r,title:n,wide:o}){return a==null||a===""?null:t.jsxs("div",{className:"dsl"+(o?" dsw":""),children:[t.jsx("span",{children:e}),r?t.jsx("b",{children:t.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",title:n,children:String(a)})}):t.jsx("b",{title:n,children:String(a)})]})}function Xt({titre:e,html:a,note:r}){return a?t.jsxs("section",{className:"dsfin",children:[t.jsx("h3",{children:e}),t.jsx("div",{className:"dstbl",dangerouslySetInnerHTML:{__html:a}}),r&&t.jsx("p",{className:"dsnote",children:r})]}):null}function cc({o:e,qa:a,comite:r}){const{t:n,lang:o,fund:i}=Y(),d=(e.cribleStatus||"").trim().toUpperCase()||(ma(e)==="NO MATCH"?"NO MATCH":"MATCH"),l=zt(e),s=(a==null?void 0:a.blocs)||{},h=[[n.qaVP,s.value_prop],[n.qaProduct,s.produit],[n.qaModel,s.modele],[n.qaSummary,s.synthese]];return t.jsxs("article",{className:"dspage",children:[t.jsxs("header",{className:"dsh",children:[t.jsxs("div",{children:[t.jsx("b",{children:e.name}),e.tagline&&t.jsx("p",{children:e.tagline})]}),t.jsxs("span",{className:"dsv"+(d==="NO MATCH"?" out":""),children:[d==="NO MATCH"?n.vOut:n.vKept,l&&t.jsx("em",{children:l})]})]}),e.reasoning&&t.jsxs("section",{children:[t.jsx("h3",{children:n.dsWhy}),t.jsx("p",{className:"dstxt",children:e.reasoning})]}),t.jsxs("section",{className:"dsgrid",children:[t.jsx(Qe,{k:n.cdSector,v:e.sector}),t.jsx(Qe,{k:n.cdMarket,v:e.market,wide:!0}),t.jsx(Qe,{k:n.cdTags,v:(e.tags||[]).join(" · "),wide:!0}),t.jsx(Qe,{k:n.cdStage,v:e.stage}),t.jsx(Qe,{k:n.cdCountry,v:[e.city,e.countryLabel].filter(Boolean).join(", ")}),t.jsx(Qe,{k:n.cdSite,v:e.domain||e.website}),t.jsx(Qe,{k:n.cdName,v:e.contactName}),t.jsx(Qe,{k:n.cdEmail,v:e.contactEmail}),t.jsx(Qe,{k:n.cdScore,v:typeof e.score=="number"?`${e.score}/100`:""}),t.jsx(Qe,{k:n.cdConvScore,v:typeof e.convictionScore=="number"?Math.round(e.convictionScore):""}),t.jsx(Qe,{k:n.cdAngle,v:e.angle}),t.jsx(Qe,{k:n.cdDetected,v:pc(e.date,o)})]}),!!(e.provQuery||e.provUrl||qa(e))&&t.jsxs("section",{children:[t.jsx("h3",{children:n.dsFound}),t.jsxs("div",{className:"dsgrid",children:[t.jsx(Qe,{k:n.cdQuery,v:e.provQuery,title:e.provQuery,wide:!0}),t.jsx(Qe,{k:n.cdSrc,v:Tn(e.provUrl||""),href:ca(e.provUrl||"")||void 0,title:e.provUrl}),t.jsx(Qe,{k:n.cdAngleSrc,v:qa(e)})]})]}),h.some(([,p])=>p)&&t.jsxs("section",{children:[t.jsx("h3",{children:n.dsAnalysis}),h.filter(([,p])=>p).map(([p,x])=>t.jsxs("div",{className:"dsb",children:[t.jsx("span",{children:p}),t.jsx("p",{children:x})]},p))]}),(r==null?void 0:r.summary)&&t.jsxs("section",{children:[t.jsx("h3",{children:n.dsExec}),t.jsx("p",{className:"dstxt",children:r.summary})]}),(r==null?void 0:r.swot)&&t.jsxs("section",{className:"dsswot-wrap",children:[t.jsx("h3",{children:n.dsSwot}),t.jsx("div",{className:"dsswot",children:[["s",n.dsSwotS,r.swot.s],["w",n.dsSwotW,r.swot.w],["o",n.dsSwotO,r.swot.o],["t",n.dsSwotT,r.swot.t]].map(([p,x,u])=>t.jsxs("div",{className:"dssq "+p,children:[t.jsx("b",{children:x}),t.jsx("ul",{children:u.map(b=>t.jsx("li",{children:b},b))})]},p))})]}),t.jsx(Xt,{titre:n.dsSyn,html:r==null?void 0:r.syn,note:r!=null&&r.pruned.includes("syn")?n.dsTableNote:""}),t.jsx(Xt,{titre:n.dsPnl,html:r==null?void 0:r.pnl,note:r!=null&&r.pruned.includes("pnl")?n.dsTableNote:""}),t.jsx(Xt,{titre:n.dsCf,html:r==null?void 0:r.cf,note:r!=null&&r.pruned.includes("cf")?n.dsTableNote:""}),t.jsx(Xt,{titre:n.dsRoi,html:r==null?void 0:r.roi,note:r!=null&&r.pruned.includes("roi")?n.dsTableNote:""}),t.jsx(Xt,{titre:n.dsReco,html:r==null?void 0:r.reco}),(r==null?void 0:r.plan)&&t.jsxs("section",{className:"dsfin",children:[t.jsx("h3",{children:n.dsPlan}),t.jsx("div",{className:"dstbl",dangerouslySetInnerHTML:{__html:r.plan}})]}),e.memoUrl&&t.jsxs("p",{className:"dsannex",children:[n.dsAnnex," ",t.jsx("a",{href:e.memoUrl,target:"_blank",rel:"noopener noreferrer",children:e.memoUrl})]}),(e.ceoStatus||e.ceoNote)&&t.jsxs("section",{children:[t.jsx("h3",{children:n.dsDecision}),e.ceoStatus&&t.jsx("p",{className:"dstxt",children:t.jsx("b",{children:e.ceoStatus})}),e.ceoNote&&t.jsxs("p",{className:"dstxt",children:["« ",e.ceoNote," »"]})]}),t.jsx("footer",{className:"dsf",children:n.dsFoot(i)})]})}function uc(){const{t:e,lang:a,token:r,scoped:n,fund:o,data:i,dispatch:d,st:l}=Y(),[s,h]=c.useState({}),[p,x]=c.useState({}),u=25,b=12,m=c.useMemo(()=>{if(l.dossierId){const f=n.find(v=>v.id===l.dossierId)||i.dossiers.find(v=>v.id===l.dossierId);return f?[f]:n.slice(0,u)}return n.slice(0,u)},[n,l.dossierId,i.dossiers]);c.useEffect(()=>{m.length&&jo(r,m.map(f=>f.name)).then(h)},[r,m]),c.useEffect(()=>{const f=m.filter(k=>!!k.memoUrl).slice(0,b);if(!f.length){x({});return}let v=!1;const E={};return(async()=>{for(const k of f){if(v)return;try{const j=await hi(k.memoUrl||"");if(v)return;j&&Tp(j.comite)&&(E[k.id]=j.comite,x({...E}))}catch{}}})(),()=>{v=!0}},[m]);const w=i.stats,y=f=>f.toLocaleString(a==="en"?"en-US":"fr-FR");return t.jsxs("div",{className:"dossier",children:[t.jsxs("div",{className:"dsbar",children:[t.jsx("b",{children:e.dsTitle(m.length)}),!l.dossierId&&n.length>u&&t.jsx("span",{className:"mnote dim",children:e.dsCap(u,n.length)}),t.jsx("span",{className:"dssp"}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{d({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)},children:e.printBtn})]}),t.jsxs("div",{className:"dscover",children:[t.jsx("b",{children:o}),w&&typeof w.screened=="number"&&t.jsxs("p",{children:[y(w.screened)," ",e.funScreened(""),typeof w.kept=="number"&&t.jsxs(t.Fragment,{children:[" · ",y(w.kept)," ",e.covKept]}),typeof i.marketEstimate=="number"&&i.marketEstimate>0&&t.jsxs(t.Fragment,{children:[" · ",e.covOf(y(i.marketEstimate)),", ",Math.round(w.screened/i.marketEstimate*100)," %"]})]})]}),m.map(f=>t.jsx(cc,{o:f,qa:s[f.name],comite:p[f.id]},f.id)),!m.length&&t.jsx("p",{className:"mnote",children:e.dsEmpty})]})}const mc=50;function Wn({label:e,onPreview:a,onTest:r,readOnly:n}){const{t:o}=Y(),[i,d]=c.useState(null),[l,s]=c.useState(!1),[h,p]=c.useState(""),[x,u]=c.useState(0),[b,m]=c.useState(""),[w,y]=c.useState(!1),[f,v]=c.useState(0),E=c.useRef(null),k=c.useRef(null),j=()=>{v(0),k.current&&window.clearInterval(k.current),k.current=window.setInterval(()=>v(C=>C+1),1e3)},N=()=>{k.current&&(window.clearInterval(k.current),k.current=null)};c.useEffect(()=>()=>{E.current&&window.clearInterval(E.current),k.current&&window.clearInterval(k.current)},[]);const S=async C=>{s(!0),p(""),j();const T=await a();if(s(!1),N(),T.ok){d(T);return}if(T.busy){p(o.alertPreviewBusy);return}if(!C){p(o.alertPreviewFail);return}u(mc),N(),E.current=window.setInterval(()=>{u(O=>O>1?O-1:(E.current&&window.clearInterval(E.current),S(!1),0))},1e3)},L=async()=>{if(n||w||l)return;y(!0),m(""),j();const C=await r();y(!1),N(),m(C.ok?o.alertTestOk(C.sentTo||""):C.error||o.actErr)};return t.jsxs("div",{className:"mailp",children:[t.jsxs("div",{className:"mailp-row",children:[t.jsx("button",{type:"button",className:"abtn",disabled:l||w||x>0,onClick:()=>{S(!0)},children:l?o.alertBtnPrevBusy:e}),t.jsx("button",{type:"button",className:"abtn",disabled:n||w||l,onClick:()=>{L()},children:w?o.alertBtnTestBusy:o.alertTest})]}),l&&t.jsxs("p",{className:"mnote qwait",children:[t.jsx("i",{className:"qwd"}),o.alertPreviewWait(f)]}),w&&t.jsxs("p",{className:"mnote qwait",children:[t.jsx("i",{className:"qwd"}),o.alertTestWait(f)]}),x>0&&t.jsx("p",{className:"mnote",children:o.alertPreviewRetry(x)}),h&&t.jsx("p",{className:"mnote warn",children:h}),b&&t.jsx("p",{className:"mnote",children:b}),!b&&t.jsx("p",{className:"mnote dim",children:o.alertTestHint}),(i==null?void 0:i.ok)&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mnote",children:[t.jsx("b",{children:o.alertSubject})," ",i.subject]}),i.pending===0&&t.jsx("p",{className:"mnote warn",children:o.alertPreviewEmpty}),t.jsx("iframe",{className:"mailp-frame",sandbox:"",srcDoc:i.html,title:e})]})]})}const Et="https://alexandre-79537--proplace-chat-proxy-fastapi-app.modal.run";function Ke({title:e,icon:a,children:r,wide:n,kind:o,lead:i}){const{dispatch:d}=Y(),l=o==="plug"?"min(720px,100%)":"min(760px,100%)";return Gt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:s=>{s.target===s.currentTarget&&d({type:"modal",modal:null})},children:t.jsxs("div",{className:"mcard"+(o?" m-"+o:""),style:n?{width:l}:void 0,children:[t.jsxs("div",{className:"mh",children:[a&&t.jsx("span",{className:"no g",children:a}),t.jsxs("div",{className:"mh-txt",children:[t.jsx("h2",{children:e}),i&&t.jsx("p",{className:"mh-lead",children:i})]}),t.jsx("button",{type:"button",className:"x",onClick:()=>d({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"mb",children:r})]})})}),document.body)}function fc(){const{st:e}=Y();switch(e.modal){case"chain":return t.jsx(gc,{});case"space":return t.jsx(xc,{});case"alert":return t.jsx(bc,{});case"queue":return t.jsx(Ec,{});case"export":return t.jsx(jc,{});case"plug":return t.jsx(Cc,{});case"approach":return t.jsx(zc,{});case"recharge":return t.jsx(Tc,{});case"cover":return t.jsx(Fc,{});case"dossier":return t.jsx(Lc,{});case"crit":return t.jsx(Dc,{});case"tuto":return t.jsx(Ic,{});case"rdv":return t.jsx(hc,{});case"memoalert":return t.jsx(Nc,{});default:return null}}function hc(){const{dispatch:e,fund:a,t:r}=Y(),n=a||r.rdvCoFallback;return Gt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",onClick:()=>e({type:"modal",modal:null}),children:t.jsxs("div",{className:"mcard rdvcard",onClick:o=>o.stopPropagation(),children:[t.jsxs("div",{className:"mh",children:[t.jsx("span",{className:"no g",children:"📅"}),t.jsx("h2",{children:r.rdvHeading}),t.jsx("button",{type:"button",className:"x",onClick:()=>e({type:"modal",modal:null}),children:"×"})]}),t.jsxs("div",{className:"mb",children:[t.jsxs("p",{className:"mnote",children:[r.rdvSubBefore,t.jsx("a",{href:_o,children:Pn}),r.rdvSubMid,t.jsx("a",{href:`mailto:${Oa}`,children:Oa})]}),t.jsx("div",{className:"rdv-unlocks",children:r.rdvUnlocks(n).map(([o,i],d)=>t.jsxs("div",{className:"rdv-u",children:[t.jsx("em",{children:r.rdvUnlockLabel(d+1)}),t.jsx("b",{children:o}),t.jsx("span",{children:i})]},o))}),t.jsx("div",{className:"rdv-emb",children:t.jsx(Xs,{filloutId:"aDx8z7Hzksus",parameters:a?{company_name:a}:void 0})})]})]})})}),document.body)}function gc(){const{st:e,dispatch:a,byId:r,t:n,lang:o,mode:i,askEvaluate:d,evalBusy:l,caps:s,memoQueued:h,doAnalyse:p}=Y(),x=i==="client",u=e.chain.queue.map(y=>r.get(y)).filter(y=>!!y),b=e.chain.idx,m=u[b],w=b>=u.length;return Gt.createPortal(t.jsx("div",{className:"atl2",children:t.jsx("div",{className:"modal on",children:t.jsxs("div",{className:"fcard",children:[t.jsxs("div",{className:"fh",children:[t.jsx("span",{className:"c",children:w?n.finished:`${b+1} / ${u.length}`}),t.jsx("span",{className:"p",children:t.jsx("i",{style:{width:(w?100:b/Math.max(1,u.length)*100)+"%"}})}),t.jsx("button",{type:"button",className:"x",onClick:()=>a({type:"modal",modal:null}),children:"×"})]}),t.jsx("div",{className:"fb",children:w||!m?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🏁"}),t.jsx("div",{className:"t",children:n.chainDone}),t.jsx("div",{className:"s",children:n.chainDoneSub(u.length)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:m.name}),t.jsx("div",{className:"sub",children:[Yt(m.cc,o)||m.countryLabel,m.sector,m.stage,n.daysAgo(jt(m.date))].filter(Boolean).map(y=>String(y)).join(" · ")}),t.jsxs("div",{className:"tags",children:[t.jsx("span",{className:"hi",children:tt(m.engine,o)}),typeof m.amountEur=="number"&&m.amountEur>0&&t.jsx("span",{children:Dt(m.amountEur,o)})]}),$e(m)&&t.jsxs("div",{style:{marginBottom:12},children:[t.jsx(Ct,{o:m,lg:!0})," ",t.jsx(Va,{o:m,src:!0})]}),(m.tagline||m.headline)&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.desc}),t.jsx("p",{children:m.tagline||m.headline})]}),m.reasoning&&!(x&&Ge(m))&&t.jsxs("div",{className:"fld",children:[t.jsx("span",{className:"l",children:n.memo}),t.jsx("p",{className:"memo",children:m.reasoning})]}),x&&Ge(m)&&t.jsxs("div",{className:"vbox vfull",style:{"--c":Lt(m)==="retenu"?"var(--brand)":Lt(m)==="pending"?"var(--bolt)":"var(--red)",marginTop:12},children:[t.jsx("span",{className:"vt",children:Lt(m)==="retenu"?"✓ "+n.kept:Lt(m)==="pending"?"📞 "+n.pending:"✗ "+n.dropped}),t.jsx("span",{className:"vd",children:m.reasoning||""})]})]})}),t.jsxs("div",{className:"ff",children:[!w&&m&&s.pipe&&Le(m)===1&&!h.has(m.id)?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{p(m),a({type:"chainNext"})},children:[t.jsx("span",{className:"fill"}),n.chainMemoGo]}):!w&&m&&!(x&&Ge(m))&&(m.noCo&&m.url?t.jsxs("button",{type:"button",className:"evalbtn",style:{flex:1,justifyContent:"center",padding:15,fontSize:15},onClick:()=>{var y;try{window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:m.url}}))}catch{}a({type:"modal",modal:null}),(y=document.querySelector(".atl2 .demand"))==null||y.scrollIntoView({behavior:"smooth",block:"center"})},children:[t.jsx("span",{className:"fill"}),n.rowExtract]}):t.jsxs("button",{type:"button",className:"evalbtn"+(l?" loading":""),style:{flex:1,justifyContent:"center",padding:15,fontSize:15},disabled:l,onClick:()=>{d(m)},children:[t.jsx("span",{className:"fill"}),n.launchEval]})),t.jsx("button",{type:"button",className:"abtn",style:{flex:"0 0 130px"},onClick:()=>a(w?{type:"modal",modal:null}:{type:"chainNext"}),children:w?n.closeBtn:n.skip})]})]})})}),document.body)}function xc(){const{st:e,dispatch:a,dossiers:r,t:n,mode:o}=Y(),i=o==="client",d=c.useMemo(()=>i?r.filter(x=>Ge(x)):[],[r,i]),l=c.useMemo(()=>Dn(d.filter(x=>Lt(x)==="retenu"),{key:"signal",dir:-1}),[d]),s=c.useMemo(()=>d.filter(x=>Lt(x)==="ecarte"),[d]),h=e.spaceTab==="retenu"?l:s,p=e.spaceTab==="retenu"?"var(--brand)":"var(--red)";return t.jsxs(Ke,{title:n.spaceTitle,children:[t.jsxs("div",{className:"sp-tabs",children:[t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--brand)"},"aria-selected":e.spaceTab==="retenu",onClick:()=>a({type:"spaceTab",tab:"retenu"}),children:["✓ ",n.statusKeep.replace("✅ ","")," ",t.jsx("b",{children:l.length})]}),t.jsxs("button",{type:"button",className:"sp-tab",style:{"--c":"var(--red)"},"aria-selected":e.spaceTab==="ecarte",onClick:()=>a({type:"spaceTab",tab:"ecarte"}),children:["✗ ",n.statusDrop.replace("❌ ","")," ",t.jsx("b",{children:s.length})]})]}),h.length===0&&t.jsx("div",{className:"sp-empty",children:n.spEmpty}),h.slice(0,40).map(x=>t.jsxs("div",{className:"sp-row",children:[t.jsx("span",{className:"sc",style:{"--c":p},children:typeof x.score=="number"&&x.score>0?x.score:"—"}),t.jsxs("span",{children:[t.jsx("div",{className:"nm",children:x.name}),t.jsx("div",{className:"rr",children:x.reasoning||x.tagline||""})]})]},x.id)),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:n.spNote}})]})}function bc(){const{mode:e}=Y();return e==="client"||e==="apercu"?t.jsx(vc,{}):t.jsx(kc,{})}function vc(){const{t:e,token:a,flash:r,flashErr:n,mode:o}=Y(),[i,d]=c.useState("d"),l=o!=="client";return t.jsxs(Ke,{title:e.alertTitle,icon:"🔔",children:[t.jsxs("div",{className:"ntabs",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":i==="d",className:i==="d"?"on":"",onClick:()=>d("d"),children:e.alertTabDaily}),t.jsx("button",{type:"button",role:"tab","aria-selected":i==="w",className:i==="w"?"on":"",onClick:()=>d("w"),children:e.alertTabWeekly}),t.jsx("button",{type:"button",role:"tab","aria-selected":i==="m",className:i==="m"?"on":"",onClick:()=>d("m"),children:e.alertTabMarket})]}),i==="d"&&t.jsx(wc,{t:e,token:a,readOnly:l,flash:r,flashErr:n}),i==="w"&&t.jsx(yc,{t:e,token:a,readOnly:l,flash:r,flashErr:n}),i==="m"&&t.jsx(vi,{})]})}function wc({t:e,token:a,readOnly:r,flash:n,flashErr:o}){const[i,d]=c.useState(null),[l,s]=c.useState(!1),[h,p]=c.useState(0);c.useEffect(()=>{let L=!0;return s(!1),ur(a).then(C=>{L&&(C?d(C):s(!0))}),()=>{L=!1}},[a,h]);const x=c.useRef({}),[u,b]=c.useState({}),[m,w]=c.useState(!1),[y,f]=c.useState(!1),v=c.useRef(null);c.useEffect(()=>()=>{v.current&&window.clearTimeout(v.current)},[]);const E=L=>{const C=x.current;Object.keys(C).length&&(w(!0),ur(a,C).then(T=>{if(!T){w(!1),o(e.actErr);return}if(T.throttled&&L<3){v.current=window.setTimeout(()=>E(L+1),5400);return}if(x.current={},b({}),d(T),w(!1),T.throttled){o(e.alertThrottled);return}f(!0),window.setTimeout(()=>f(!1),2e3),n(e.alertSaved)}))},k=L=>{r||(x.current={...x.current,...L},b(C=>({...C,...L})),v.current&&window.clearTimeout(v.current),v.current=window.setTimeout(()=>E(1),700))};if(l)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>p(L=>L+1),children:e.retry})]});if(!i)return t.jsx("div",{className:"sp-empty",children:"…"});const j={...i,...u},N=L=>!j.sections||j.sections.includes(L),S=L=>{const C=j.sections||e.alertSec.map(([T])=>T);k({sections:N(L)?C.filter(T=>T!==L):[...C,L]})};return t.jsxs(t.Fragment,{children:[r&&t.jsx("p",{className:"mnote warn",children:e.alertReadOnly}),t.jsxs("div",{className:"qrow",children:[t.jsxs("span",{children:[t.jsx("b",{children:e.alertDaily}),t.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:e.alertDailyHint})]}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":j.enabled===!0,disabled:r,style:j.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>k({enabled:!j.enabled}),children:j.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertHour}),t.jsxs("span",{className:"qset",children:[t.jsx("button",{type:"button",onClick:()=>k({hour:Math.max(6,(j.hour??7)-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[j.hour??7," h"]}),t.jsx("button",{type:"button",onClick:()=>k({hour:Math.min(21,(j.hour??7)+1)}),disabled:r,children:"+"})]})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertDays}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("button",{type:"button",className:"abtn",disabled:r,style:j.days!=="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>k({days:"weekdays"}),children:e.alertWeekdays}),t.jsx("button",{type:"button",className:"abtn",disabled:r,style:j.days==="daily"?{background:"var(--ink)",color:"#fff"}:void 0,onClick:()=>k({days:"daily"}),children:e.alertEveryday})]})]}),t.jsx("p",{className:"mnote dim",children:e.alertRules}),t.jsxs("div",{className:"qsec ok",children:[e.alertSections,m&&t.jsx("span",{className:"secsave",children:e.alertSaving}),!m&&y&&t.jsx("span",{className:"secsave done",children:e.alertSavedShort})]}),t.jsx("div",{className:"secl",children:e.alertSec.map(([L,C])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:N(L),disabled:r,onChange:()=>S(L)}),t.jsxs("span",{children:[C,L==="market"&&t.jsxs("i",{children:[" ",e.alertSecSlow]})]})]},L))}),t.jsx("p",{className:"mnote dim",children:e.alertSecNote}),t.jsx(Wn,{label:e.alertPreview,readOnly:r,onPreview:()=>Ds(a),onTest:()=>Ms(a)}),j.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),j.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",j.email_lead,j.last_sent?` · ${e.updatedAt(j.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function yc({t:e,token:a,readOnly:r,flash:n,flashErr:o}){const[i,d]=c.useState(null),[l,s]=c.useState(!1),[h,p]=c.useState(0);c.useEffect(()=>{let m=!0;return s(!1),mr(a).then(w=>{m&&(w?d(w):s(!0))}),()=>{m=!1}},[a,h]);const x=m=>{r||mr(a,m).then(w=>{if(!w){o(e.actErr);return}d(w),n(e.alertSaved)})};if(l)return t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>p(m=>m+1),children:e.retry})]});if(!i)return t.jsx("div",{className:"sp-empty",children:"…"});const u=i.dow??0,b=i.hour??16;return t.jsxs(t.Fragment,{children:[r&&t.jsx("p",{className:"mnote warn",children:e.alertReadOnly}),t.jsx("p",{className:"lead2",children:e.alertWeeklySub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.alertWeeklyOn})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn onoff","aria-pressed":i.enabled===!0,disabled:r,style:i.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>x({enabled:!i.enabled}),children:i.enabled?"ON":"OFF"})})]}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:e.alertWeeklyWhen}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("select",{value:u,disabled:r,onChange:m=>x({dow:Number(m.target.value)}),children:e.alertDow.map((m,w)=>t.jsx("option",{value:w,children:m},m))}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.max(6,b-1)}),disabled:r,children:"−"}),t.jsxs("b",{children:[b," h"]}),t.jsx("button",{type:"button",onClick:()=>x({hour:Math.min(21,b+1)}),disabled:r,children:"+"})]})]}),t.jsx(Wn,{label:e.alertPreviewWeekly,readOnly:r,onPreview:()=>Ps(a),onTest:()=>Is(a)}),i.active===!1&&t.jsx("p",{className:"mnote warn",children:e.alertInactive}),i.email_lead?t.jsxs("p",{className:"mnote",children:["→ ",i.email_lead,i.last_sent?` · ${e.updatedAt(i.last_sent.slice(0,10))}`:""]}):t.jsx("p",{className:"mnote",children:e.alertNoLead})]})}function vi(){const{st:e,t:a,lang:r,scoped:n,contName:o,email:i}=Y(),[d,l]=c.useState(i||""),[s,h]=c.useState(!1),[p,x]=c.useState(!1);c.useEffect(()=>{i&&l(i)},[i]);const u=e.filters,b=c.useMemo(()=>n.filter(f=>$e(f)).length,[n]),m=u.win==="1"?0:u.win==="7"?1:u.win==="30"?2:3,w=async()=>{if(!(!/.+@.+\..+/.test(d)||p)){x(!0);try{await fetch(`${Ha}/mes-secteurs/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d.trim(),sectors:u.sector,countries:u.country,source:i?"atelier2-client":"atelier2",website:""})}),h(!0)}finally{x(!1)}}},y=[[a.amRows.continent,o],[a.amRows.since,a.amSince[m]],[a.amRows.signal,u.signalOnly?a.amOnlyOpen:a.amAnySignal],[a.amRows.engines,u.engine.length?u.engine.map(f=>tt(f,r)).join(", "):a.amAllEngines],[a.amRows.sectors,u.sector.length?u.sector.join(", "):a.amAllSectors],[a.amRows.countries,u.country.length?u.country.map(f=>Yt(f,r)||f).join(", "):a.amAllCountries],[a.amRows.stages,u.stage.length?u.stage.join(", "):a.amAllStages]];return s?t.jsxs("div",{className:"fin",children:[t.jsx("div",{className:"em",children:"🔔"}),t.jsx("div",{className:"t",children:a.amOk}),t.jsx("div",{className:"s",dangerouslySetInnerHTML:{__html:a.amOkSub(d)}})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"crit",children:y.map(([f,v])=>t.jsxs("div",{className:"r",children:[t.jsx("span",{className:"k",children:f}),t.jsx("span",{className:"v",dangerouslySetInnerHTML:{__html:v}})]},f))}),t.jsxs("div",{className:"mfield",children:[t.jsx("input",{type:"email",placeholder:a.amMail,autoComplete:"email",value:d,readOnly:!!i,onChange:f=>l(f.target.value),onKeyDown:f=>{f.key==="Enter"&&w()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(p?" loading":""),style:{padding:"12px 18px"},onClick:()=>void w(),children:[t.jsx("span",{className:"fill"}),a.amActivate]})]}),t.jsx("p",{className:"mnote",dangerouslySetInnerHTML:{__html:a.amNote(n.length,b)}}),t.jsx("p",{className:"mnote",children:a.amHonest})]})}function kc(){const{t:e}=Y();return t.jsx(Ke,{title:e.alertTitle,icon:"🔔",children:t.jsx(vi,{})})}function Ec(){var O,U;const{t:e,token:a,fund:r,mode:n,dossiers:o,doAnalyse:i,memoQueued:d,caps:l,dispatch:s,liveMemos:h}=Y(),[p,x]=c.useState(()=>Ya(r)),[u,b]=c.useState(()=>!Ya(r)),[m,w]=c.useState([]),[y,f]=c.useState(0),v=n==="client",E=c.useMemo(()=>{const R=new Map;return o.forEach(D=>{const g=(D.name||"").trim().toLowerCase();g&&!R.has(g)&&R.set(g,D)}),R},[o]);c.useEffect(()=>{let R=!0;return(!Ya(r)||y>0)&&b(!0),(async()=>{const[D,g]=await Promise.all([On(r,y>0),Co(a)]);R&&(D&&x(D),b(!1),w(g))})(),()=>{R=!1}},[a,r,y]);const k=u&&!p,j=(p==null?void 0:p.per_day)??0,N=((O=p==null?void 0:p.analyzed_today)==null?void 0:O.length)??0,S=p==null?void 0:p.offre,L=(p==null?void 0:p.pool_meta)||[],C=c.useMemo(()=>{const R=new Map;for(const D of(p==null?void 0:p.scheduled)||[])for(const g of D.names||[])R.has(g)||R.set(g,{label:D.day_label,date:D.date});return R},[p==null?void 0:p.scheduled]),T=(p==null?void 0:p.in_progress)||[];return t.jsxs(Ke,{title:e.queueTitle,wide:!0,children:[S&&t.jsxs("div",{className:"qoffre"+(S.en_retard?" late":""),children:[t.jsx("span",{className:"ol",children:e.qOffer}),t.jsx("b",{children:S.libelle}),t.jsxs("span",{className:"od",children:[e.qDelay," ",t.jsx("b",{children:S.delai})]}),t.jsx("span",{className:"osp"}),S.rythme>0?t.jsx("span",{className:"or",children:e.qRate(S.rythme)}):S.manuel_par_jour?t.jsx("span",{className:"or",children:e.qManual(S.manuel_par_jour)}):t.jsx("span",{className:"or dim",children:e.qPaused})]}),t.jsxs("div",{className:"qbox",children:[t.jsx("div",{className:"qhead",children:k?t.jsxs("span",{className:"qwait",children:[t.jsx("i",{className:"qwd"}),e.qFileWait]}):t.jsx("b",{dangerouslySetInnerHTML:{__html:e.queueDone(N,N+(((U=p==null?void 0:p.pool_order)==null?void 0:U.length)??0))}})}),S&&t.jsxs("div",{className:"qeta",children:[S.file===0?e.qEtaDone:S.rythme<=0?e.qEtaPaused:e.qEta(S.file,S.rythme,S.jours_restants),S.en_retard&&t.jsxs("em",{children:[" ",e.qLate(S.delai,S.plafond)]})]}),!k&&t.jsxs("div",{className:"qrate",children:[e.covRate," — ",t.jsx("b",{children:e.covRateNow(j)}),(S==null?void 0:S.reglage_manuel)&&t.jsxs("span",{className:"dim",children:[" · ",e.qManualSet]})]})]}),(T.length>0||h.items.some(R=>R.status==="boot"||R.status==="running"))&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec run",children:["⌛ ",e.qRunning]}),t.jsxs("div",{className:"qrows",children:[h.items.filter(R=>R.status==="boot"||R.status==="running"||R.status==="error").map(R=>t.jsxs("div",{className:"qr2 qfl",children:[t.jsx("b",{children:R.name}),t.jsx("span",{className:"qd",children:R.memoType||""}),t.jsx(Ta,{item:R,serverOff:h.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd})]},"live-"+R.name)),T.filter(R=>!h.liveOf(R.name)).map(R=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:R.name}),t.jsxs("span",{className:"qd",children:[R.memo_type||"",R.age_min?` · ${Math.round(R.age_min)} min`:""]}),t.jsx("span",{className:"qt",children:R.state||""})]},"ip-"+R.name))]})]}),m.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qsec ok",children:["⏳ ",e.queueToday]}),t.jsx("div",{className:"qrows",children:m.map(R=>t.jsxs("div",{className:"qr2",children:[t.jsx("b",{children:R.company}),t.jsxs("span",{className:"qd",children:[R.memo_type,typeof R.est_min=="number"?` · ~${R.est_min} min`:""]}),t.jsx("span",{className:"qt",children:R.status}),R.url&&t.jsx("a",{className:"qgo",href:R.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.actMemoOf(R.memo_type)}),v&&R.status==="error"&&t.jsx("button",{type:"button",className:"qgo an",onClick:()=>{pr(a,R.company,"retry").then(()=>f(D=>D+1))},children:e.queueRetry}),v&&R.status!=="done"&&t.jsx("button",{type:"button",className:"abtn",onClick:()=>{pr(a,R.company,"delete").then(()=>f(D=>D+1))},children:e.queueDelete})]},R.company))})]}),t.jsxs("div",{className:"qsec todo",children:["⚡ ",k?e.qUpNextWait:e.qUpNext(L.length)]}),t.jsx("div",{className:"qhedge",children:e.qHedge}),t.jsxs("div",{className:"qrows qfile",children:[k&&t.jsxs("div",{className:"qwait qwrow",children:[t.jsx("i",{className:"qwd"}),e.qFileWait]}),!k&&L.length===0&&t.jsx("div",{className:"sp-empty",children:e.queueEmpty}),L.map((R,D)=>{const g=C.get(R.name),q=E.get((R.name||"").trim().toLowerCase()),M=h.liveOf(R.name),J=!!(q&&d.has(q.id))||!!(M&&(M.status==="boot"||M.status==="running")),A=!!(q&&Le(q)===1&&!q.memoUrl)&&!M;return t.jsxs("div",{className:"qr2 qfl",children:[t.jsxs("span",{className:"qn2",children:["#",D+1]}),g?t.jsx("span",{className:"qwhen"+(g.label==="demain"?" soon":""),children:g.label}):t.jsx("span",{className:"qwhen later",children:e.qLater}),t.jsx("b",{children:R.name}),R.fresh&&t.jsx("span",{className:"qfresh",children:e.qFresh}),typeof R.score=="number"&&t.jsx("span",{className:"qs2",children:R.score}),M&&(M.status==="boot"||M.status==="running")&&t.jsx(Ta,{item:M,serverOff:h.serverOff,bootLbl:e.liveBoot,endLabel:e.liveEnd}),A&&(l.lockActions||!v?t.jsx("button",{type:"button",className:"qgo an",onClick:()=>s({type:"modal",modal:"rdv"}),children:e.actLocked}):t.jsx("button",{type:"button",className:"qgo an",disabled:J,onClick:()=>{i(q),f(B=>B+1)},children:J?e.actAnalyseQueued:e.actAnalyse})),R.excerpt&&t.jsx("span",{className:"qex",children:R.excerpt})]},R.name+":"+D)})]}),t.jsxs("div",{className:"qsec",children:["🧭 ",e.qVerdictsT]}),t.jsx("ul",{className:"qverd",children:e.qVerdicts.map(([R,D])=>t.jsxs("li",{children:[t.jsx("b",{children:R})," — ",D]},R))})]})}function jc(){const{t:e,token:a,flash:r,scoped:n,caps:o,stageOf:i,dispatch:d}=Y(),l=`${Et}/cibles/list.csv?token=${a}`,s=`${Et}/cibles/list.json?token=${a}`,h=`${Et}/cibles/export.xlsx?token=${a}&scope=full`,p=`=IMPORTDATA("${l}")`,x=y=>{var f;(f=navigator.clipboard)==null||f.writeText(y).then(()=>r(e.exportCopied))},u=[{def:e.exportCsv,value:l,href:l},{def:e.exportSheet,value:p},{def:e.exportLive,value:s,href:s},{def:e.exportXlsx,value:h,href:h}],b=!o.lockActions&&n.length>0,m=()=>{dc(lc(n,{plabels:e.plabels,head:e.exportViewHead,stageOf:i,stageLabel:y=>(e.stg.find(([f])=>f===y)||["",""])[1]})),r(e.exportViewDone(n.length))},w=()=>{d({type:"modal",modal:null}),setTimeout(()=>{try{window.print()}catch{}},120)};return t.jsxs(Ke,{title:e.exportTitle,icon:"📥",children:[t.jsx("p",{className:"lead2",children:e.exportLead}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🖨️"}),t.jsxs("div",{children:[t.jsx("b",{children:e.printTitle}),t.jsx("p",{children:e.printDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb",onClick:w,children:e.printBtn})]})}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"🗂"}),t.jsxs("div",{children:[t.jsx("b",{children:e.dsBtn}),t.jsx("p",{children:e.dsHint})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>d({type:"modal",modal:"dossier"}),children:e.exportViewBtn})]})}),b&&t.jsx("div",{className:"expl",style:{marginBottom:10},children:t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:"📄"}),t.jsxs("div",{children:[t.jsx("b",{children:e.exportViewTitle}),t.jsx("p",{children:e.exportViewDesc(n.length)})]}),t.jsx("button",{type:"button",className:"exb pri",onClick:m,children:e.exportViewBtn})]})}),t.jsx("div",{className:"expl",children:u.map(({def:y,value:f,href:v})=>t.jsxs("div",{className:"exi",children:[t.jsx("span",{className:"exic",children:y[0]}),t.jsxs("div",{children:[t.jsx("b",{children:y[1]}),t.jsx("p",{children:y[2]})]}),t.jsx("button",{type:"button",className:"exb",onClick:()=>x(f),children:e.exportCopy}),v&&t.jsx("a",{className:"exb",href:v,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.exportOpen})]},y[1]))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.exportKeyWarning})]})}function Nc(){const{t:e,token:a,flash:r,flashErr:n,mode:o}=Y(),i=o!=="client",[d,l]=c.useState(null),[s,h]=c.useState(!1),[p,x]=c.useState(0),[u,b]=c.useState(!1);c.useEffect(()=>{let f=!0;return h(!1),lr(a).then(v=>{f&&(v?l(v):h(!0))}),()=>{f=!1}},[a,p]);const m=()=>(d==null?void 0:d.sections)||{swot:!0,action:!0,synergies:!0,quadrant:!0,verdict:!0},w=f=>{if(i||!d)return;const v={enabled:f.enabled??!!d.enabled,email:f.email??(d.email||""),sections:f.sections??m()};b(!0),lr(a,v).then(E=>{if(b(!1),!E){n(e.memoAlertErr);return}l(E),r(e.memoAlertSaved)})};if(s)return t.jsx(Ke,{title:e.memoAlertTitle,icon:"🔔",children:t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>x(f=>f+1),children:e.retry})]})});if(!d)return t.jsx(Ke,{title:e.memoAlertTitle,icon:"🔔",children:t.jsx("div",{className:"sp-empty",children:"…"})});const y=m();return t.jsxs(Ke,{title:e.memoAlertTitle,icon:"🔔",children:[t.jsx("p",{className:"lead2",children:e.memoAlertSub}),t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:t.jsx("b",{children:e.memoAlertToggle})}),t.jsx("span",{className:"qset",children:t.jsx("button",{type:"button",className:"abtn","aria-pressed":d.enabled===!0,disabled:i||u,style:d.enabled?{background:"var(--brand)",color:"#fff",borderColor:"var(--brand)"}:void 0,onClick:()=>w({enabled:!d.enabled}),children:d.enabled?"ON":"OFF"})})]}),t.jsx(Sc,{value:d.email||"",readOnly:i||u,label:e.memoAlertEmail,okLabel:e.csNoteOk,onSave:f=>w({email:f})}),t.jsx("div",{className:"qsec ok",children:e.memoAlertSections}),t.jsx("div",{className:"secl",children:e.memoAlertSec.map(([f,v])=>t.jsxs("label",{className:"secli",children:[t.jsx("input",{type:"checkbox",checked:!!y[f],disabled:i||u,onChange:()=>w({sections:{...y,[f]:!y[f]}})}),t.jsx("span",{children:v})]},f))}),t.jsx(Wn,{label:e.memoAlertPreview,readOnly:i,onPreview:()=>Ss(a,y),onTest:()=>Ns(a,y)})]})}function Sc({value:e,readOnly:a,label:r,okLabel:n,onSave:o}){const[i,d]=c.useState(e);c.useEffect(()=>{d(e)},[e]);const l=i.trim()!==e.trim(),s=!i.trim()||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.trim());return t.jsxs("div",{className:"qrow",children:[t.jsx("span",{children:r}),t.jsxs("span",{className:"qset",style:{gap:6},children:[t.jsx("input",{type:"email",className:"mailin",value:i,disabled:a,onChange:h=>d(h.target.value),onKeyDown:h=>{h.key==="Enter"&&l&&s&&o(i.trim())}}),t.jsx("button",{type:"button",className:"abtn",disabled:a||!l||!s,onClick:()=>o(i.trim()),children:n})]})]})}function Cc(){const{t:e,token:a,flash:r,flashErr:n,canWrite:o}=Y(),[i,d]=c.useState(null),[l,s]=c.useState(!1),[h,p]=c.useState(null),[x,u]=c.useState(!1),[b,m]=c.useState(""),[w,y]=c.useState(0),[f,v]=c.useState("webhook"),[E,k]=c.useState("webhook"),[j,N]=c.useState(""),S=c.useRef(!1);c.useEffect(()=>{let M=!0;return s(!1),dr(a).then(J=>{M&&(J?d({configured:J.configured,url_hint:J.url_hint}):s(!0))}),qs(a).then(J=>{if(M){if(!J){u(!0);return}u(!1),p(J),S.current||(S.current=!0,J.destination==="instantly"&&(v(A=>A==="webhook"?"instantly":A),k(A=>A==="webhook"?"instantly":A)),J.campaign_id&&N(A=>A||J.campaign_id||""))}}),()=>{M=!1}},[a,w]);const L=(M,J)=>{o&&dr(a,M).then(A=>{if(!A||A.ok===!1){n(e.actErr);return}M.test&&A.sent===!1?n(e.plugTestThrottled):r(J),y(B=>B+1)})},C='{"mcpServers":{"proplace":{"url":"https://api.proplace.co/mcp"}}}',T=JSON.stringify({event:"status",company:"Aitona",status:"Validée",note:"très bon fit — introduction chaude possible",score:90,website:"https://aitona.com",memo_url:"https://analysis.proplace.co/…"},null,2),O=`curl -X POST ${Et}/cibles/evaluate \\
  -H "Content-Type: application/json" \\
  -d '{"token":"${a}","q":"nom ou URL de la société"}'`,U=`curl -X POST ${Et}/cibles/react \\
  -H "Content-Type: application/json" \\
  -d '{"token":"${a}","kind":"fast_request","target":"Acme Group"}'`,R=[{k:"webhook",t:e.plugDestCrm,s:e.plugDestCrmS},{k:"instantly",t:e.plugDestInst,s:e.plugAideInst},{k:"script",t:e.plugDestScript,s:e.plugDestScriptS}],D=E==="instantly"?e.plugStep2Inst:E==="script"?e.plugStep2Script:e.plugStep2Wh,g=E==="instantly"?e.plugAideInst:E==="script"?e.plugAideScript:e.plugAideWh,q=M=>{k(M),M!=="script"&&v(M)};return t.jsxs(Ke,{title:e.plugTitle,icon:"🔌",wide:!0,kind:"plug",lead:e.plugLead,children:[h&&t.jsxs("div",{className:"plugetat"+(h.enabled?" on":""),children:[t.jsx("i",{}),t.jsx("b",{children:h.enabled?e.plugEtatOn:e.plugEtatOff})]}),l?t.jsxs("div",{className:"sp-empty",children:[e.alertLoadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>y(M=>M+1),children:e.retry})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"plugstep",children:[t.jsx("span",{className:"pnum",children:"1"}),t.jsx("h4",{children:e.plugStep1})]}),t.jsx("div",{className:"plugdests",children:R.map(M=>{const J=E===M.k;return t.jsxs("button",{type:"button",className:"plugdest"+(J?" on":""),onClick:()=>q(M.k),children:[t.jsx("span",{className:"pradio","aria-hidden":"true"}),t.jsx("b",{children:M.t}),t.jsx("em",{children:M.s})]},M.k)})}),t.jsxs("div",{className:"plugstep",children:[t.jsx("span",{className:"pnum",children:"2"}),t.jsx("h4",{children:D})]}),E==="script"?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:O}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var M;(M=navigator.clipboard)==null||M.writeText(O).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote dim",children:e.plugQuota})]}):E==="instantly"?t.jsx("div",{className:"mfield pill",children:t.jsx("input",{type:"text",maxLength:80,placeholder:e.plugCampPh,value:j,disabled:!o,onChange:M=>N(M.target.value)})}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mfield pill",children:[t.jsx("input",{type:"url",maxLength:500,placeholder:e.plugUrlPh,value:b,disabled:!o,onChange:M=>m(M.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:!o||!b.trim(),onClick:()=>L({url:b.trim()},e.plugSaved),children:e.plugSave})]}),(i==null?void 0:i.configured)&&t.jsxs("p",{className:"mnote",children:["✓ ",i.url_hint||""," ",t.jsx("button",{type:"button",className:"lk",disabled:!o,onClick:()=>L({test:!0},e.plugTested),children:e.plugTest})," · ",t.jsx("button",{type:"button",className:"lk",disabled:!o,onClick:()=>L({remove:!0},e.plugRemoved),children:e.plugRemove})]})]}),t.jsx("p",{className:"mnote dim",children:g}),t.jsxs("div",{className:"plugstep",children:[t.jsx("span",{className:"pnum",children:"3"}),t.jsx("h4",{children:e.plugStep3})]}),t.jsx(Ac,{auto:h,autoKo:x,destKind:f,camp:j,onRetry:()=>y(M=>M+1),onDone:M=>{p(M),u(!1)}}),t.jsx("p",{className:"mnote dim",children:e.plugHow3}),t.jsxs("details",{className:"plugex plugpay",children:[t.jsxs("summary",{children:[t.jsx("b",{children:e.plugExT}),t.jsx("span",{children:e.plugPayloadSub})]}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:T}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var M;(M=navigator.clipboard)==null||M.writeText(T).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote",children:e.plugExResult}),t.jsx("p",{className:"mnote dim",children:e.plugVars})]}),t.jsx("div",{"data-tour":"plug-bulk",children:t.jsx(qc,{destKind:f,setDestKind:M=>{v(M),k(M)},camp:j,setCamp:N,whHint:i!=null&&i.configured?i.url_hint||"webhook":null})}),E!=="script"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.plugApiT}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:O}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var M;(M=navigator.clipboard)==null||M.writeText(O).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsx("p",{className:"mnote dim",children:e.plugQuota})]}),t.jsx("div",{className:"qsec ok",children:e.plugMcp}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:C}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var M;(M=navigator.clipboard)==null||M.writeText(C).then(()=>r(e.exportCopied))},children:e.exportCopy})]}),t.jsxs("div",{className:"plugcrm","data-tour":"plug-crm",children:[t.jsx("p",{className:"mnote",children:e.plugCrmRecipeT}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugCrmRecipeOpen}),t.jsx("p",{className:"mnote",children:e.plugCrmR1}),t.jsx("p",{className:"mnote",children:e.plugCrmR2}),t.jsx("p",{className:"mnote",children:e.plugCrmR3}),t.jsx("p",{className:"mnote",children:e.plugCrmR4}),t.jsx("p",{className:"mnote dim",children:e.plugCrmRNote})]}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugRefT}),t.jsx("p",{className:"mnote",children:e.plugOpt}),t.jsx("p",{className:"mnote dim",children:e.plugCols})]})]}),t.jsxs("div",{className:"plugcrmq",children:[t.jsx("p",{className:"mnote",children:t.jsx("b",{children:e.plugCrmQT})}),t.jsx("p",{className:"mnote",children:e.plugCrmQ1}),t.jsx("p",{className:"mnote",children:e.plugCrmQ2}),t.jsx("p",{className:"mnote",children:e.plugCrmQ3}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugApiMemoLbl}),t.jsxs("div",{className:"cpy",children:[t.jsx("code",{children:U}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var M;(M=navigator.clipboard)==null||M.writeText(U).then(()=>r(e.exportCopied))},children:e.exportCopy})]})]})]}),t.jsxs("div",{className:"plugcrm",children:[t.jsx("p",{className:"mnote",children:t.jsx("b",{children:e.plugEnrichT})}),t.jsx("p",{className:"mnote",children:e.plugEnrich}),t.jsxs("details",{className:"plugex",children:[t.jsx("summary",{children:e.plugEnrich1}),t.jsx("p",{className:"mnote",children:e.plugEnrich2}),t.jsx("p",{className:"mnote",children:e.plugEnrich3}),t.jsx("p",{className:"mnote dim",children:e.plugAirtable}),t.jsx("p",{className:"mnote dim",children:e.plugExcel})]})]}),t.jsxs("div",{className:"plugcrm",children:[t.jsx("p",{className:"mnote",children:t.jsx("b",{children:e.plugScoreT})}),t.jsx("p",{className:"mnote",children:e.plugScore})]}),t.jsx("p",{className:"mnote",children:e.plugFeeds}),t.jsx("p",{className:"mnote warn",children:e.plugTokenNote}),t.jsx("p",{className:"mnote dim",children:t.jsx("a",{href:"https://proplace.co/api/",target:"_blank",rel:"noopener noreferrer",children:e.plugDoc})})]})]})}function zc(){const{t:e,token:a,dossiers:r,st:n,dispatch:o,flash:i,flashErr:d,lang:l}=Y(),s=c.useMemo(()=>r.find(g=>g.id===n.approachId)||null,[r,n.approachId]),[h,p]=c.useState("email"),[x,u]=c.useState(0),[b,m]=c.useState({}),[w,y]=c.useState(!1),[f,v]=c.useState(""),[E,k]=c.useState({});if(c.useEffect(()=>{!s||b[h]||w||(y(!0),v(""),As(a,s.name,h).then(g=>{if(y(!1),!g||g.ok===!1){v((g==null?void 0:g.error)||e.apprFail);return}m(q=>({...q,[h]:g}))}))},[s,h,a]),!s)return null;const j=b[h],N=(j==null?void 0:j.sequence)||[],S=N[x],L=g=>`${h}|${x}|${g}`,C=g=>{const q=L(g);return q in E?E[q]:String(((S==null?void 0:S[g])??"")||"")},T=(g,q)=>k(M=>({...M,[L(g)]:q})),O=L("subject")in E||L("body")in E||L("message")in E,U=C(h==="email"?"body":"message"),R=C("subject"),D=h==="email"&&R?`${R}

${U}`:U;return t.jsxs(Ke,{title:e.apprT(s.name),icon:"✉",wide:!0,children:[t.jsxs("div",{className:"apnav",children:[["email","linkedin"].map(g=>t.jsx("button",{type:"button",className:"apch"+(h===g?" on":""),"aria-pressed":h===g,onClick:()=>{p(g),u(0)},children:g==="email"?e.apprChEmail:e.apprChLi},g)),t.jsx("span",{className:"sp"}),N.map((g,q)=>t.jsxs("button",{type:"button",className:"apday"+(x===q?" on":""),"aria-pressed":x===q,onClick:()=>u(q),children:[g.day||`J${q}`,[`${h}|${q}|subject`,`${h}|${q}|body`,`${h}|${q}|message`].some(M=>M in E)&&t.jsx("i",{children:"✎"})]},g.day||q))]}),t.jsxs("p",{className:"mnote dim",children:[e.apprSeqHint,j!=null&&j.sender?" · "+e.apprSender(j.sender):""]}),w&&t.jsx("p",{className:"mnote",children:e.apprWait}),!!f&&!w&&t.jsxs("p",{className:"mnote warn",children:[f," ",t.jsx("button",{type:"button",className:"lk",onClick:()=>{m(g=>{const q={...g};return delete q[h],q}),v("")},children:e.retry})]}),!w&&!f&&!S&&t.jsx("p",{className:"mnote dim",children:e.apprFail}),S&&t.jsxs(t.Fragment,{children:[h==="email"&&t.jsxs("div",{className:"apfield",children:[t.jsx("label",{children:e.apprSubj}),t.jsx("input",{type:"text",maxLength:160,value:R,onChange:g=>T("subject",g.target.value)})]}),h==="linkedin"&&x===0&&(j==null?void 0:j.connection_request)&&t.jsx("p",{className:"mnote dim",children:e.apprLiNote}),t.jsx("textarea",{className:"apta",maxLength:4e3,rows:12,value:U,onChange:g=>T(h==="email"?"body":"message",g.target.value)}),t.jsxs("div",{className:"apacts",children:[t.jsx("button",{type:"button",className:"abtn",onClick:()=>{var g;(g=navigator.clipboard)==null||g.writeText(D).then(()=>i(e.exportCopied)).catch(()=>d(e.actErr))},children:e.apprCopy}),h==="email"&&t.jsx("a",{className:"abtn",href:`mailto:${encodeURIComponent(s.contactEmail||"")}?subject=${encodeURIComponent(R)}&body=${encodeURIComponent(U)}`,children:e.apprMailto}),O&&t.jsx("span",{className:"apedit",children:e.apprEdited})]}),t.jsx("p",{className:"mnote warn",children:e.apprLocal})]}),t.jsx("p",{className:"mnote dim",children:""})]})}function Ac({auto:e,autoKo:a,destKind:r,camp:n,onDone:o,onRetry:i}){const{t:d,token:l,flash:s,flashErr:h,canWrite:p}=Y(),[x,u]=c.useState(!1);if(!e)return a?t.jsxs("div",{className:"plugauto",children:[t.jsx("p",{className:"mnote",children:t.jsx("b",{children:d.plugAutoT})}),t.jsxs("p",{className:"mnote warn",children:[d.alertLoadError," ",t.jsx("button",{type:"button",className:"lk",onClick:i,children:d.retry})]})]}):null;const b=!!e.enabled,m=!b&&(r==="webhook"?e.webhook_ready===!1?d.plugAutoNeed:"":n.trim()?"":d.plugCampNeed),w=b&&(e.destination||"webhook")==="webhook"&&e.webhook_ready===!1,y=()=>{if(x||!p||m)return;u(!0),(b?cr(l,!1):cr(l,!0,r,n.trim()||void 0)).then(v=>{if(u(!1),!v){h(d.actErr);return}o(v),s(v.enabled?d.plugAutoSavedOn:d.plugAutoSavedOff)})};return t.jsxs("div",{className:"plugauto",children:[t.jsx("p",{className:"mnote",children:t.jsx("b",{children:d.plugAutoT})}),t.jsx("p",{className:"mnote dim",children:d.plugAutoSub}),t.jsxs("button",{type:"button",role:"switch","aria-checked":b,className:"apsw"+(b?" on":""),disabled:x||!p||!!m,title:m||void 0,onClick:y,children:[t.jsx("span",{className:"apr","aria-hidden":"true"}),t.jsx("span",{children:d.plugAutoOnLbl})]}),m===d.plugAutoNeed&&t.jsx("p",{className:"mnote warn",children:m}),w&&t.jsx("p",{className:"mnote warn",children:d.plugAutoBroken})]})}function qc({destKind:e,setDestKind:a,camp:r,setCamp:n,whHint:o}){const{t:i,token:d,lang:l,canWrite:s}=Y(),[h,p]=c.useState("valides"),[x,u]=c.useState(!1),[b,m]=c.useState(null),[w,y]=c.useState(null),[f,v]=c.useState(!1),[E,k]=c.useState(!1),[j,N]=c.useState(null),[S,L]=c.useState(null),C=`atl2:bulk:${d}:${h}:${e}`;c.useEffect(()=>{m(null),y(null),v(!1),N(null);try{const B=localStorage.getItem(C)||localStorage.getItem(`atl2:bulk:${d}:${h}`),I=JSON.parse(B||"null");L(I&&Date.now()-Date.parse(I.t)<24*3600*1e3?I:null)}catch{L(null)}},[C,h,d]);const T=e==="instantly"&&!r.trim(),O=`${h}|${e}|${r.trim()}`,U=async()=>{if(T||!s)return;u(!0),v(!1),N(null);const B=await Rs(d,h,e,r.trim()||void 0);m(B),y(B.ok?O:null),u(!1)},R=c.useRef(!1);if(!s)return null;const D=async()=>{if(R.current||!s)return;R.current=!0,k(!0);const B=`${d}:${h}:${Date.now()}:${Math.random().toString(36).slice(2,10)}`;let I;try{I=await Os(d,h,e,r.trim()||void 0,B)}finally{R.current=!1}if(k(!1),v(!1),N(I),I.ok&&(I.pushed||0)>0){const $={t:new Date().toISOString(),n:I.pushed||0};L($);try{localStorage.setItem(C,JSON.stringify($))}catch{}}};f&&w!==null&&w!==O&&v(!1);const g=o,q=b!=null&&b.ok&&b.ready||0,M=e==="instantly"?r.trim()?i.plugDestInstOn(r.trim()):"":g||"",J=!!(b!=null&&b.ok)&&w===O&&q>0&&!!M&&!S,A=S?new Date(S.t).toLocaleString(l==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:i.plugBulk}),t.jsx("p",{className:"mnote",children:i.plugBulkHint}),t.jsxs("div",{className:"mfield",children:[t.jsx("select",{value:h,onChange:B=>p(B.target.value),children:i.plugBulkTabs.map(([B,I])=>t.jsx("option",{value:B,children:I},B))}),t.jsxs("select",{value:e,"aria-label":i.plugDestLbl,onChange:B=>a(B.target.value),children:[t.jsx("option",{value:"webhook",children:i.plugDestWh}),t.jsx("option",{value:"instantly",children:i.plugDestInst})]}),e==="instantly"&&t.jsx("input",{type:"text",maxLength:80,placeholder:i.plugCampPh,value:r,onChange:B=>n(B.target.value)}),t.jsx("button",{type:"button",className:"abtn",disabled:x||T,onClick:()=>{U()},children:x?"…":i.plugBulkPreview})]}),T&&t.jsx("p",{className:"mnote warn",children:i.plugCampNeed}),b&&(b.ok?t.jsx("p",{className:"mnote",children:i.plugBulkResult(b.ready||0,b.linkedinReady||0,(b.noContact||[]).length)}):t.jsx("p",{className:"mnote warn",children:i.actErr})),!!(b!=null&&b.ok)&&t.jsx("p",{className:"mnote dim",children:i.bulkScope}),S&&t.jsx("p",{className:"mnote",children:i.bulkLocked(A,S.n)}),!S&&!!(b!=null&&b.ok)&&!M&&e==="webhook"&&t.jsx("p",{className:"mnote warn",children:i.bulkNoDest}),!S&&!b&&t.jsx("p",{className:"mnote dim",children:i.bulkPreviewFirst}),J&&!f&&t.jsx("button",{type:"button",className:"abtn dgr",onClick:()=>v(!0),children:i.bulkArm}),J&&f&&t.jsxs("div",{className:"bulkc",children:[t.jsx("p",{className:"mnote warn",children:i.bulkWarn(q,M)}),t.jsx("button",{type:"button",className:"abtn dgr",disabled:E,onClick:()=>{D()},children:E?i.bulkSending:i.bulkConfirm(M)}),t.jsx("button",{type:"button",className:"abtn",disabled:E,onClick:()=>v(!1),children:i.bulkCancel})]}),j&&(j.ok?j.replayed?t.jsx("p",{className:"mnote",children:j.pending?i.bulkPending:i.bulkReplayed}):(j.pushed||0)>0?t.jsx("p",{className:"mnote",children:i.bulkDone(j.pushed||0,j.linkedinReady||0,j.skippedNoEmail||0)}):t.jsx("p",{className:"mnote warn",children:i.bulkNone}):t.jsx("p",{className:"mnote warn",children:j.error||i.actErr}))]})}function Tc(){const{t:e,data:a,lang:r}=Y(),n=a.credits,o=a.email,i=async d=>{if(!o)return;const l=window.location.href.split("?")[0];try{const h=await(await fetch(`${Ha}/inbound/credits/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,lookup_key:d,success_url:l+"?credits=ok",cancel_url:l+"?credits=cancel"})})).json();h.url&&(window.location.href=h.url)}catch{}};return t.jsxs(Ke,{title:e.rechargeTitle,icon:"⚡",children:[n&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"hint",style:{marginTop:0},dangerouslySetInnerHTML:{__html:e.rechargeHint(n.daily_grant)}}),n.costs&&t.jsxs("p",{className:"mnote",children:["① ",e.creditsCost(n.costs.instant)," · ② ",e.creditsCost(n.costs.detailed)]}),t.jsx("div",{className:"packs",children:(n.packs||[]).map(d=>t.jsxs("div",{className:"pack",children:[t.jsx("div",{className:"pt",children:e.rechargeUnit(d.credits,d.price_eur)}),t.jsx("button",{type:"button",onClick:()=>{i(d.lookup_key)},children:e.rechargeBuy})]},d.lookup_key))}),t.jsx("p",{className:"hint",style:{fontSize:12,color:"var(--muted)"},children:e.rechargeNote})]}),!n&&t.jsx("div",{className:"sp-empty",children:e.creditsNone})]})}function Lc(){const{t:e}=Y();return t.jsx(Ke,{title:e.dsBtn,icon:"🗂",wide:!0,children:t.jsx(uc,{})})}function Fc(){const{t:e,lang:a,data:r,dossiers:n,token:o,fund:i,canWrite:d,flash:l}=Y(),[s,h]=c.useState(null),[p,x]=c.useState(!1);c.useEffect(()=>{let C=!0;if(i)return On(i).then(T=>{C&&T&&typeof T.per_day=="number"&&h(T.per_day)}),()=>{C=!1}},[i]);const[u,b]=c.useState(null);c.useEffect(()=>{if(!o)return;let C=!0;return zs(o).then(T=>{C&&b(T)}),()=>{C=!1}},[o]);const m=r.stats,w=typeof(m==null?void 0:m.screened)=="number"?m.screened:n.filter(C=>C.kind==="target"&&Ge(C)).length,y=r.marketEstimate||0,f=y>0?Math.min(100,Math.round(w/y*100)):null,v=(m==null?void 0:m.window_days)||30,E=w>0?w/v:0,k=y>0?Math.max(0,y-w):0,N=y>0&&E>0&&w>=100?Math.round(k/E):null,S=C=>Math.round(C).toLocaleString(a==="en"?"en-US":"fr-FR"),L=C=>{p||!d||(x(!0),zo(o,C).then(T=>{if(x(!1),T===null){l(e.actErr);return}h(T),l(e.alertSaved)}))};return t.jsxs(Ke,{title:e.coverTitle,icon:"🌍",children:[t.jsxs("div",{className:"covg",children:[t.jsx("b",{children:e.covScreened(S(w))}),y>0&&t.jsx("span",{children:e.covOf(S(y))})]}),f!==null?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"covbar",children:[t.jsx("i",{style:{width:f+"%"}}),t.jsxs("em",{children:[f," %"]})]}),N!==null&&t.jsx("p",{className:"mnote",children:e.covEta(N)})]}):t.jsx("p",{className:"mnote dim",children:e.covNoEst}),E>=1&&t.jsx("p",{className:"mnote",children:e.covPace(S(E))}),m&&t.jsxs("div",{className:"covf",children:[typeof m.kept=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:S(m.kept)})," ",e.covKept]}),typeof m.analyzed=="number"&&t.jsxs("span",{children:[t.jsx("b",{children:S(m.analyzed)})," ",e.covAna]}),typeof m.shown=="number"&&m.shown!==m.kept&&t.jsxs("span",{children:[t.jsx("b",{children:S(m.shown)})," ",e.funShown]})]}),(u==null?void 0:u.ok)&&(u.detail||[]).length>0&&t.jsxs("details",{className:"covcalc",children:[t.jsx("summary",{children:e.covHowT}),u.perimetre&&t.jsx("p",{className:"mnote",children:u.perimetre}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"mkc",children:e.covColCode}),t.jsx("th",{className:"mkn",children:e.covColN}),t.jsx("th",{className:"mks",children:e.covColSource})]})}),t.jsxs("tbody",{children:[(u.detail||[]).map((C,T)=>t.jsxs("tr",{className:C.n?"":"zero",children:[t.jsxs("td",{className:"mkc",children:[C.code,C.geo?` · ${C.geo}`:" · FR"]}),t.jsx("td",{className:"mkn",children:typeof C.n=="number"?S(C.n):"—"}),t.jsxs("td",{className:"mks",children:[t.jsx("span",{children:C.source}),C.elargi&&t.jsx("em",{children:e.covWide(String(C.demande||""))}),C.erreur&&t.jsx("em",{children:e.covMissing})]})]},T)),t.jsxs("tr",{className:"tot",children:[t.jsx("td",{className:"mkc",children:e.covTotal}),t.jsx("td",{className:"mkn",children:t.jsx("b",{children:S(u.total||y)})}),t.jsx("td",{className:"mks"})]})]})]}),(u.rejetes||[]).length>0&&t.jsx("p",{className:"mnote dim",children:e.covRejected((u.rejetes||[]).join(", "))}),t.jsxs("p",{className:"mnote dim",children:[(u.sources||[]).join(" · "),u.calcule_le?` — ${e.covComputedAt(u.calcule_le.slice(0,10).split("-").reverse().join("/"))}`:""]})]}),d&&s!==null&&t.jsxs("div",{className:"covr",children:[t.jsxs("div",{className:"covrh",children:[t.jsx("span",{children:e.covRate}),t.jsx("b",{children:e.covRateNow(s)})]}),t.jsx("div",{className:"covrb",children:[0,1,2,3,5,10].map(C=>t.jsx("button",{type:"button",className:s===C?"on":"",disabled:p,onClick:()=>L(C),children:C===0?"⏸":C},C))}),t.jsx("p",{className:"mnote dim",children:e.covRateHint})]})]})}async function wi(e,a,r){const n=await fetch(`${Et}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,message:a,who:r})}).then(o=>o.json().catch(()=>({}))).catch(()=>null);if(!n)return{applied:!1,reply:""};if(n.applied===!0)return{applied:!0,reply:String(n.reply||"")};if(!n.job_id)return{applied:!1,reply:String(n.reply||n.clarification||"")};for(let o=0;o<60;o++){await new Promise(d=>window.setTimeout(d,5e3));const i=await fetch(`${Et}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,job_id:n.job_id})}).then(d=>d.json().catch(()=>({}))).catch(()=>null);if(i){if(i.applied===!0)return{applied:!0,reply:String(i.reply||"")};if(i.done===!0||i.status==="done"||i.status==="error"||i.clarification||i.error)return{applied:!1,reply:String(i.reply||i.clarification||i.error||"")}}}return{applied:!1,reply:"",encours:!0}}function Rc(){const{t:e,token:a,canWrite:r}=Y(),[n,o]=c.useState(null),[i,d]=c.useState(""),[l,s]=c.useState(""),[h,p]=c.useState(!1),x=`atl2:avis:${a}:${((n==null?void 0:n.sector)||(n==null?void 0:n.pattern)||"").toLowerCase()}`,u=c.useMemo(()=>{if(!(n!=null&&n.pattern))return!1;try{const m=JSON.parse(localStorage.getItem(x)||"null");return!!m&&Date.now()-(m.t||0)<14*24*3600*1e3}catch{return!1}},[x,n==null?void 0:n.pattern]);if(c.useEffect(()=>{if(!r)return;let m=!0;return Ls(a).then(w=>{m&&o(w)}),()=>{m=!1}},[a,r]),!r||h||u||!n||!n.pattern||!n.instruction)return null;if(i==="ok")return t.jsx("p",{className:"mnote",children:e.avisDone});const b=()=>{d("run"),wi(a,n.instruction||"","atelier2-avis").then(m=>{if(d(m.applied?"ok":"ko"),m.applied||s(m.encours?e.propSlow:m.reply),m.applied)try{localStorage.setItem(x,JSON.stringify({t:Date.now(),fait:!0}))}catch{}})};return t.jsxs("div",{className:"avisp",children:[t.jsx("p",{className:"mnote",children:t.jsx("b",{children:e.avisIntro(n.sector||n.pattern||"",n.no||0)})}),t.jsx("p",{className:"mnote dim",children:e.avisAsk}),i==="run"&&t.jsx("p",{className:"mnote",children:e.avisRunning}),i==="ko"&&t.jsx("p",{className:"mnote warn",children:l||e.avisFail}),i!=="run"&&t.jsxs("div",{className:"avisa",children:[t.jsx("button",{type:"button",className:"abtn",onClick:b,children:e.avisYes}),t.jsx("button",{type:"button",className:"lk",onClick:()=>{p(!0);try{localStorage.setItem(x,JSON.stringify({t:Date.now()}))}catch{}},children:e.avisNo})]})]})}function Oc(){var j;const{t:e,token:a,canWrite:r,flash:n,flashErr:o}=Y(),[i,d]=c.useState(!1),[l,s]=c.useState(null),[h,p]=c.useState(!1),[x,u]=c.useState([]),[b,m]=c.useState(null),[w,y]=c.useState([]);if(!r)return null;const f=()=>{d(!0),p(!1),u([]),y([]),Fs(a).then(N=>{if(d(!1),!N){p(!0),s(null);return}s(N)})},v=N=>{b||(m(N.title),wi(a,N.instruction,"atelier2-prop").then(S=>{m(null),S.applied?(y(L=>[...L,N.title]),n(e.propApplied)):S.encours?n(e.propSlow):o(S.reply||e.propApplyFail)}))},E=((l==null?void 0:l.proposals)||[]).filter(N=>!x.includes(N.title)&&!w.includes(N.title)),k=((j=l==null?void 0:l.counts)==null?void 0:j.judged)??0;return t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.propT}),t.jsx("p",{children:e.propSub}),t.jsx("button",{type:"button",className:"abtn"+(i?" loading":""),disabled:i,style:{marginTop:8},onClick:f,children:i?e.propWait:e.propBtn}),!i&&h&&t.jsx("p",{className:"mnote warn",style:{marginTop:10},children:e.propKo}),!i&&!h&&l&&!(l.proposals||[]).length&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:l.reason==="not_enough_signals"?e.propFew(k):e.propNone}),E.map(N=>t.jsxs("div",{className:"propc",children:[t.jsx("span",{className:"props",children:e.propSections[N.section]||N.section}),t.jsx("p",{className:"propt",children:N.title}),N.why&&t.jsx("p",{className:"mnote dim",children:N.why}),N.evidence.length>0&&t.jsxs("p",{className:"mnote dim",children:[e.propFrom," ",N.evidence.join(" · ")]}),t.jsxs("div",{className:"avisa",children:[t.jsx("button",{type:"button",className:"abtn",disabled:!!b,onClick:()=>v(N),children:b===N.title?e.propApplying:e.propApply}),t.jsx("button",{type:"button",className:"lk",onClick:()=>u(S=>[...S,N.title]),children:e.propSkip})]})]},N.title))]})}function Mc(){const{t:e,token:a,canWrite:r,flash:n,flashErr:o,lang:i,data:d}=Y(),[l,s]=c.useState(null),[h,p]=c.useState(!1),[x,u]=c.useState(!1),[b,m]=c.useState(""),[w,y]=c.useState(""),[f,v]=c.useState(!1),E=c.useRef(!1);if(c.useEffect(()=>{if(!a||!r)return;let N=!0;return Ts(a).then(S=>{N&&(p(!0),!(!S||E.current)&&(s(S),m(S.fit),y(S.note)))}),()=>{N=!1}},[a,r]),!r)return null;const k=()=>{if(!(!b||f)){if(l&&l.fit===b&&l.note===w.trim()){u(!1);return}v(!0),yt(a,"thesis_fit",b,w.trim(),"",d.email||"").then(N=>{if(v(!1),!N.ok){o(e.fitKo);return}s({fit:b,note:w.trim(),ts:new Date().toISOString()}),u(!1),n(e.fitSaved)})}},j=N=>N==="yes"?e.fitYes:N==="partial"?e.fitPartial:e.fitNo;if(l&&!x){const N=new Date(String(l.ts||"")),S=Number.isNaN(N.getTime())?"":N.toLocaleDateString(i==="en"?"en-US":"fr-FR",{day:"2-digit",month:"2-digit"});return t.jsxs("div",{className:"rule fitbox",children:[t.jsx("b",{children:e.fitDone}),t.jsxs("p",{className:"fitrep",children:[t.jsx("b",{children:j(l.fit)}),l.note?` — ${l.note}`:""]}),!!S&&t.jsx("p",{className:"mnote dim",children:S}),t.jsx("button",{type:"button",className:"lk",onClick:()=>u(!0),children:e.fitEdit})]})}return t.jsxs("div",{className:"rule fitbox",children:[t.jsx("b",{children:e.fitTitle}),t.jsx("p",{children:e.fitSub}),t.jsx("div",{className:"fitopts",children:["yes","partial","no"].map(N=>t.jsx("button",{type:"button","aria-pressed":b===N,className:"fitopt"+(b===N?" on":""),onClick:()=>{E.current=!0,m(N)},children:j(N)},N))}),t.jsxs("div",{className:"mfield",style:{marginTop:10},children:[t.jsx("input",{type:"text",maxLength:400,placeholder:e.fitPh,value:w,onChange:N=>{E.current=!0,y(N.target.value)},onKeyDown:N=>{N.key==="Enter"&&k()}}),t.jsx("button",{type:"button",className:"abtn",disabled:!b||f,onClick:k,children:f?"…":e.fitSend})]}),t.jsx("p",{className:"mnote dim",children:e.fitSeen}),!h&&t.jsx("p",{className:"mnote dim",children:"…"})]})}function Dc(){var f,v,E;const{t:e,dossiers:a,token:r,mode:n,flash:o,criteria:i,fund:d,lang:l}=Y(),s=n==="client",h=c.useMemo(()=>{const k=new Set;return a.forEach(j=>{j.angle&&k.add(j.angle)}),[...k]},[a]),[p,x]=c.useState(""),[u,b]=c.useState(""),[m,w]=c.useState(!1),y=async()=>{const k=p.trim();if(!(!k||m||!s)){w(!0),b("");try{const N=await(await fetch(`${Et}/cibles/thesis-chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r,message:k,who:"atelier2"})})).json().catch(()=>({}));if(N.reply&&b(String(N.reply)),N.job_id){b(e.critChatRunning);const S=async()=>{const L=await fetch(`${Et}/cibles/thesis-chat-status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({job_id:N.job_id})}).then(C=>C.json()).catch(()=>null);if(L&&L.done){b(String(L.reply||L.clarification||L.summary||"✓")),w(!1),L.applied&&o(e.alertSaved);return}setTimeout(()=>{S()},8e3)};setTimeout(()=>{S()},8e3),x("");return}x("")}finally{u.startsWith("⏳")||w(!1)}}};return t.jsxs(Ke,{title:e.critTitle,icon:"⚙",wide:!0,children:[(i==null?void 0:i.lead)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok","data-tour":"crit-hyp",children:e.critHypTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:i.lead}),!!((f=i.points)!=null&&f.length)&&t.jsx("ul",{className:"critpts",children:i.points.map(k=>t.jsx("li",{children:k},k))}),t.jsx("p",{className:"mnote",children:e.critHypSub})]}),!!((v=i==null?void 0:i.angles)!=null&&v.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok","data-tour":"crit-prof",children:e.critProfilsTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:i.method||e.critProfilsSub}),i.angles.map(k=>{var j,N;return t.jsxs("details",{className:"prof",children:[t.jsx("summary",{children:k.title}),k.why&&t.jsx("p",{className:"why",children:k.why}),t.jsxs("div",{className:"lo",children:[!!((j=k.look)!=null&&j.length)&&t.jsxs("div",{children:[t.jsx("em",{children:e.critLookFor}),t.jsx("ul",{children:k.look.map(S=>t.jsx("li",{children:S},S))})]}),!!((N=k.out)!=null&&N.length)&&t.jsxs("div",{className:"ko",children:[t.jsx("em",{children:e.critRuleOut}),t.jsx("ul",{children:k.out.map(S=>t.jsx("li",{children:S},S))})]})]})]},k.title)})]}),!!((E=i==null?void 0:i.gate)!=null&&E.length)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok","data-tour":"crit-gate",children:e.critGateTitle}),t.jsx("p",{className:"mnote",style:{marginTop:0},children:e.critGateSub}),i.gate.length===1&&!i.gate[0].k?t.jsx("p",{className:"gate1",children:i.gate[0].t}):t.jsx("ol",{className:"gatesteps",children:i.gate.map(k=>t.jsxs("li",{children:[k.k&&t.jsx("b",{children:k.k}),k.t]},k.t))})]}),h.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"qsec ok",children:e.critAngles}),t.jsx("ul",{style:{margin:"0 0 16px",paddingLeft:18},children:h.map(k=>t.jsx("li",{style:{marginBottom:5},children:k.replace(/[_-]+/g," ")},k))})]}),t.jsx(Mc,{}),t.jsx(Rc,{}),t.jsxs("div",{className:"rule",children:[t.jsx("b",{children:e.critChatTitle}),t.jsx("p",{children:e.critChatHint}),t.jsxs("div",{className:"mfield",style:{marginTop:10},children:[t.jsx("input",{placeholder:e.critChatPh,value:p,disabled:!s||m,onChange:k=>x(k.target.value),onKeyDown:k=>{k.key==="Enter"&&y()}}),t.jsxs("button",{type:"button",className:"evalbtn"+(m?" loading":""),style:{padding:"12px 18px"},disabled:!s||m||!p.trim(),onClick:()=>void y(),children:[t.jsx("span",{className:"fill"}),e.critChatSend]})]}),u&&t.jsx("p",{className:"mnote",style:{marginTop:10},children:u})]}),t.jsx(Oc,{}),t.jsx("div",{style:{marginBottom:14},children:t.jsx(Cs,{fund:d,lang:l,limit:30,compact:!0})}),t.jsx("div",{className:"qsec ok",children:e.qvTitle}),t.jsx("div",{className:"vlist",children:e.qv.map(([k,j])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vd "+(gi[k]||"v-cons"),children:k}),t.jsx("span",{children:j})]},k))}),t.jsx("div",{className:"qsec ok",children:e.brTitle}),t.jsx("div",{className:"vlist",children:e.br.map(([k,j])=>t.jsxs("div",{className:"vrow",children:[t.jsx("span",{className:"vtag",children:k}),t.jsxs("span",{children:["← ",j]})]},k))}),t.jsx("p",{className:"mnote",children:e.brNote}),t.jsx("p",{className:"mnote",children:e.critMemoKinds})]})}function Ic(){const{t:e,dispatch:a,startTour:r}=Y(),n=o=>{var i,d;a({type:"modal",modal:null}),o==="crit"||o==="plug"||o==="alert"?a({type:"modal",modal:o}):o.startsWith("tab")?a({type:"ptab",tab:Number(o.slice(3))}):o==="eval"&&((i=document.querySelector(".atl2 .demand input"))==null||i.scrollIntoView({block:"center",behavior:"smooth"}),(d=document.querySelector(".atl2 .demand input"))==null||d.focus())};return t.jsxs(Ke,{title:e.tutoTitle,icon:"▶",children:[t.jsxs("div",{className:"howto-go",children:[t.jsx("p",{children:e.tourIntro}),t.jsxs("button",{type:"button",onClick:()=>{a({type:"modal",modal:null}),r()},children:["▶ ",e.tourStart]})]}),t.jsx("ul",{className:"howto",children:e.howto.map(([o,i],d)=>t.jsxs("li",{role:"button",tabIndex:0,onClick:()=>n(i),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),n(i))},children:[t.jsx("span",{className:"n",children:d+1}),t.jsx("span",{dangerouslySetInnerHTML:{__html:o.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}})]},i+d))})]})}const yi="atl2:mapfold",Pc=()=>{if(typeof window>"u")return!1;try{const e=localStorage.getItem(yi);if(e==="on")return!0;if(e==="off")return!1}catch{}try{const e=new URLSearchParams(window.location.search);if(e.get("embed")==="1"&&(e.get("source")||"").toLowerCase()==="ops")return!0}catch{}return window.innerHeight<1e3},_c=()=>{if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search).get("embed")==="1")return!0}catch{}return window.innerWidth<=760},ki=c.createContext(null),Y=()=>{const e=c.useContext(ki);if(!e)throw new Error("AtelierV2Ctx manquant");return e};function Ct({o:e,lg:a}){const{lang:r}=Y(),n=$e(e);return n?t.jsxs("span",{className:"sig"+(a?" sig-lg":""),title:fr(n,r),children:[n.emoji," ",fr(n,r)]}):null}function Va({o:e,src:a}){const{lang:r,t:n}=Y(),o=$e(e);if(!o)return null;const i=Vs(o),d=Ws(o);return t.jsxs("em",{className:"sigwin"+(d?" hot":""),title:n.signaledOn(No(o,r))+" · "+n.win7(So(o,r)),children:[t.jsx("span",{className:"gg",children:Array.from({length:7},(l,s)=>t.jsx("i",{className:s<i?"on":""},s))}),t.jsx("span",{className:"lb",children:d?n.lastDay:n.daysLeft(Math.max(0,o.left??0))}),a&&o.url&&t.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",title:n.seeSource,onClick:l=>l.stopPropagation(),children:"↗"})]})}function Bc(e,a,r){const n=(r||"").trim();if(n){const i=e.find(d=>(d.url||"")===n);if(i)return i}const o=Ue(a);if(o)return e.find(i=>Ue(i.name)===o)||e.find(i=>{const d=Ue(i.name);return d.length>=3&&(o.includes(d)||d.includes(o))})}function $c(){const{scoped:e,t:a,st:r,dispatch:n}=Y(),o=c.useRef(r.filters.day);r.filters.day&&(o.current=r.filters.day);const i=!!r.filters.day,d=e.filter(x=>!We(x)),l=d.length,s=d.filter(x=>!x.noCo).length,h=d.filter(x=>!!x.noCo).length,p=(r.filters.sector||[]).length>0;return t.jsxs("button",{type:"button",className:"map-pulse"+(i?" on":""),"aria-pressed":i,title:i?a.zoomPulseBtn:a.zoomPulseWeek,onClick:()=>{if(i)n({type:"filters",patch:{day:"",win:p?"7":"all"}});else{const x=o.current||new Date().toISOString().slice(0,10);n({type:"filters",patch:{day:x,win:"all"}})}},children:[t.jsx("em",{children:i?a.zoomPulseBtn:a.zoomPulseWeek}),t.jsx("b",{children:l}),t.jsx("span",{children:i?a.zoomPulseEd:a.zoomPulseWeekEd}),t.jsxs("ul",{children:[t.jsxs("li",{children:["⚡ ",s," ",a.zoomPulseEval]}),t.jsxs("li",{children:["🔎 ",h," ",a.zoomPulseExplore]})]})]})}function Uc(){var x;const{t:e,lang:a,data:r,dispatch:n,scopedAll:o,counts:i}=Y(),d=u=>u.toLocaleString(a==="en"?"en-US":"fr-FR"),s=o.filter(u=>!We(u)).length,h=typeof((x=r.stats)==null?void 0:x.screened)=="number"?r.stats.screened:0;if(s<=0&&h<=0)return null;const p=r.marketEstimate||0;return t.jsxs("button",{type:"button",className:"map-pulse",title:e.coverTitle,onClick:()=>n({type:"modal",modal:"cover"}),children:[t.jsx("em",{children:e.identCoverage}),t.jsx("b",{children:d(s)}),t.jsx("span",{children:p>0?e.covOf(d(p)):e.covScreened("").trim()}),t.jsxs("ul",{children:[t.jsxs("li",{children:["✅ ",d(i[1]||0)," ",e.covKept]}),t.jsxs("li",{children:["⚡ ",d(i[2]||0)," ",e.covAna]})]})]})}const Hc=[0,1,2,3,5,10];function Vc(){var k;const{t:e,token:a,fund:r,mode:n,dispatch:o,flash:i,flashErr:d}=Y(),[l,s]=c.useState(null),[h,p]=c.useState(!0),[x,u]=c.useState([]),[b,m]=c.useState(!1),w=n==="client";c.useEffect(()=>{if(!a||!r)return;let j=!0;return p(!0),(async()=>{const[N,S]=await Promise.all([On(r),Co(a)]);j&&(N&&s(N),p(!1),u(S))})(),()=>{j=!1}},[a,r]);const y=(l==null?void 0:l.per_day)??null,f=((k=l==null?void 0:l.pool_order)==null?void 0:k.length)??0,v=x.filter(j=>j.status==="running").length,E=j=>{!w||b||!a||(m(!0),zo(a,j).then(N=>{if(m(!1),N===null){d(e.actErr);return}s(S=>S&&{...S,per_day:N}),i(e.alertSaved)}))};return t.jsxs("div",{className:"map-pulse map-engine",children:[t.jsxs("button",{type:"button",className:"map-engine-hit",title:e.queueTitle,onClick:()=>o({type:"modal",modal:"queue"}),children:[t.jsx("em",{children:e.identEngine}),t.jsx("b",{children:y===null?"—":y}),t.jsx("span",{children:e.identPerDay}),t.jsxs("ul",{children:[y===0&&t.jsx("li",{children:t.jsx("span",{className:"epause",title:e.identPauseTitle,children:e.identPause})}),v>0&&t.jsxs("li",{children:["⏳ ",v]}),t.jsx("li",{children:h?e.identPendingWait:e.identPending(f)})]})]}),y!==null&&t.jsxs("div",{className:"map-engine-rate covrb",role:"group","aria-label":e.covRate,children:[Hc.map(j=>t.jsx("button",{type:"button",className:y===j?"on":"",disabled:!w||b,title:j===0?e.identPauseTitle:e.covRateNow(j),onClick:()=>E(j),children:j===0?"⏸":j},j)),t.jsx("button",{type:"button",className:"ebell",title:e.memoAlertBtn,onClick:()=>o({type:"modal",modal:"memoalert"}),children:"🔔"})]})]})}function Ei({o:e}){const{lang:a}=Y(),r=Hs(e.cc),n=e.cc?Yt(e.cc,a)||e.countryLabel||e.cc:e.countryLabel||"—";return t.jsx("span",{className:"c-flag",title:n||void 0,children:r?t.jsx("img",{src:r,width:16,height:16,alt:n||""}):t.jsx("span",{className:"em",children:"🌐"})})}const Wc=!1;function Gc(){const[e,a]=c.useState(!1);return c.useEffect(()=>{const r=document.scrollingElement||document.documentElement,n=()=>a((r.scrollTop||0)>600);return n(),window.addEventListener("scroll",n,!0),()=>window.removeEventListener("scroll",n,!0)},[]),e?t.jsx("button",{type:"button",className:"totop",title:"Remonter en haut",onClick:()=>{(document.scrollingElement||document.documentElement).scrollTo({top:0,behavior:"smooth"})},children:"↑"}):null}const ji=e=>`atl2:tour:${e||"anon"}`;function Yc(e){try{return localStorage.getItem(ji(e))==="1"}catch{return!0}}function fo(e){try{localStorage.setItem(ji(e),"1")}catch{}}function Qc(e,a,r,n,o,i,d,l){const s=e.tourT,h=e.howto;return[{sel:".atl2 .ident",title:s.ident,body:e.fhintIdent},o?{sel:".atl2 .map-pulse",title:s.cover,body:e.fhintCover,need:".atl2 .map-hud"}:null,{sel:".atl2 .map-engine",title:s.engine,body:`${e.fhintEngine}
${e.fhintMemoDepths}`},{sel:".atl2 .ticker",title:s.live,body:e.fhintLive},{sel:".atl2 .goal",title:s.goal,body:e.fhintGoalAt(a)},{sel:".atl2 .srceng",click:".atl2 .srceng:not(.on) .se-head",title:s.engines,body:e.fhintSrcEng},{sel:".atl2 .funnel",title:s.funnel,body:e.fhintFunnel,ptab:n},i>0?{sel:".atl2 .tuto",title:s.tuto,body:h[3][0],ptab:3,need:".atl2 .tuto"}:null,{sel:".atl2 .demand",title:s.demand,body:h[1][0]},{sel:".atl2 .dmulti.ddeals",title:s.deals,body:e.fhintDeals},{sel:".atl2 .dmulti.dnews",title:s.news,body:e.fhintNews},{sel:".atl2 .c-vd",need:".atl2 .list",title:s.chips,body:e.fhintChips,ptab:n,dens:"liste"},{sel:".atl2 .card .cdbody",need:".atl2 .list",title:s.dec,body:e.fhintDec,ptab:n,dens:"deplie"},r?{sel:".atl2 .card .cdtabs",need:".atl2 .list",click:'.atl2 [data-tour="tab-memo"]',title:s.memo,body:e.fhintMemo,ptab:n,dens:"deplie"}:null,{sel:".atl2 .csp",need:".atl2 .list",title:s.status,body:e.fhintStatus,ptab:n,dens:"deplie"},i>0?{sel:".atl2 .rst2",need:".atl2 .list",title:s.decide,body:e.fhintDecide,ptab:3,dens:"liste"}:null,i>0?{sel:".atl2 .memobtn",need:".atl2 .list",title:s.memoDeep,body:e.fhintMemoDeep,ptab:3,dens:"liste"}:null,d>0?{sel:".atl2 .stg",need:".atl2 .list",title:s.stage,body:e.fhintStage,ptab:4,dens:"liste"}:null,d>0?{sel:".atl2 .approach",need:".atl2 .list",title:s.appr,body:e.fhintAppr,ptab:4,dens:"liste"}:null,d>0?{sel:'.atl2 .modal.on [data-tour="plug-bulk"]',need:".atl2 .ic[data-tour=plug]",title:s.campout,body:e.fhintCampout,modal:"plug"}:null,d>0?{sel:'.atl2 .modal.on [data-tour="plug-crm"]',need:".atl2 .ic[data-tour=plug]",title:s.addcrm,body:e.fhintAddcrm,modal:"plug"}:null,...[2,4,5].filter(p=>(l[p]||0)>0).map(p=>({sel:'.atl2 .listhead .step[aria-selected="true"], .atl2 .listhead .off[aria-selected="true"]',need:".atl2 .funnel",title:p===2?s.tabAna:p===4?s.tabValid:s.tabRej,body:p===2?e.fhintTabAna:p===4?e.fhintTabValid:e.fhintTabRej,ptab:p})),{sel:".atl2 .listhead .lh-title .main",need:".atl2 .listhead",title:s.rank,body:e.fhintRank},{sel:".atl2 .learn",title:s.learn,body:e.learnLine},{sel:".atl2 .modal.on .mcard",title:s.improve,body:e.fhintImprove,modal:"crit"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=export]",title:s.exportT,body:e.fhintExport,modal:"export"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=plug]",title:s.tools,body:h[6][0],modal:"plug"},{sel:".atl2 .modal.on .mcard",need:".atl2 .ic[data-tour=alert]",title:s.alerts,body:e.fhintAlerts,modal:"alert"},{sel:".atl2 .modal.on .mcard",title:s.crit,body:h[0][0],modal:"crit"},{sel:'.atl2 [data-tour="crit-hyp"]',title:s.mHyp,body:e.fhintMHyp,modal:"crit"},{sel:'.atl2 [data-tour="crit-prof"]',title:s.mProf,body:e.fhintMProf,modal:"crit"},{sel:'.atl2 [data-tour="crit-gate"]',title:s.mGate,body:e.fhintMGate,modal:"crit"}].filter(Boolean)}function eu({demo:e=!1,source:a="default",initialFilters:r,initialUi:n,capsOverride:o,onFiltersChange:i}){var Yn;const{lang:d}=_s(),l=Ol(e,d,a),s=c.useMemo(()=>({...kl[d],...yl(d,l.thesisMode)}),[d,l.thesisMode]),[h,p]=c.useReducer(Il,void 0,()=>Ml((n==null?void 0:n.continent)??(a==="ops"?"monde":"europe"),e||(a==="ops"?_c():Pc()),{ptab:n==null?void 0:n.ptab,dens:(n==null?void 0:n.dens)??"liste",filters:r,modal:n==null?void 0:n.modal})),x=c.useRef(!0);c.useEffect(()=>{if(x.current){x.current=!1;return}if(!(e||a==="ops"))try{localStorage.setItem(yi,h.mapFolded?"on":"off")}catch{}},[h.mapFolded,e,a]),c.useEffect(()=>{if(a!=="ops"||typeof window>"u")return;const z=()=>{window.innerWidth<=760&&p({type:"mapFold",folded:!0})};return z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[a]);const u=c.useRef(i);u.current=i,c.useEffect(()=>{var z;(z=u.current)==null||z.call(u,h.filters)},[h.filters]);const[b,m]=c.useState(()=>{if(typeof window>"u")return"both";try{const z=localStorage.getItem("atl2:chrome-mode");if(z==="eval"||z==="filt"||z==="both")return z;if(localStorage.getItem("atl2:chrome-min")==="1")return"eval"}catch{}return"both"}),[w,y]=c.useState(null),[f,v]=c.useState(null),[E,k]=c.useState(null),[j,N]=c.useState({kept:0,dropped:0}),[S,L]=c.useState(!1),[C,T]=c.useState(""),[O,U]=c.useState(!1),[R,D]=c.useState(null),[g,q]=c.useState(null),[M,J]=c.useState(!1),[A,B]=c.useState(!1),[,I]=c.useState(0),$=()=>I(z=>z+1),te=c.useRef([]),K=c.useRef(new Set),ye=c.useRef(new Set),[re,de]=c.useState([]),[ge,ce]=c.useState([]),[ve,xe]=c.useState(0),Ne=c.useRef(new Map),Fe=c.useRef(null),{mode:ae}=l,ke=c.useMemo(()=>({...l.caps,...a==="ops"?{showMorning:!1}:null,...o||null}),[l.caps,o,a]),be=ke.pipe,oe=l.session.token||"",_=ae==="client"&&!e;c.useEffect(()=>{if(!oe||!be)return;let z=!0;const G=async()=>{const he=await Gs(oe);!z||!he||(ce(he.runs),xe(Date.now()/1e3-he.now),de(De=>De.filter(Ae=>!he.runs.some(He=>Ue(He.company)===Ue(Ae.name)))))};G();const H=re.length>0||ge.some(he=>he.status==="running"),se=window.setInterval(()=>{G()},H?8e3:25e3);return()=>{z=!1,window.clearInterval(se)}},[oe,be,re.length,ge.some(z=>z.status==="running")]),c.useEffect(()=>{if(!oe||!be||!_)return;let z=!0;const G=async()=>{const se=await Ys(oe);if(!z||!se.length)return;const he=new Map;se.forEach(De=>{const Ae=String(De.ceo_status||"").trim();Ae&&De.check_id&&he.set(String(De.check_id),Ae)}),l.patchStatuses(he,De=>Date.now()-(ze.current.get(De)||0)>9e4)};G();const H=window.setInterval(()=>{G()},6e4);return()=>{z=!1,window.clearInterval(H)}},[oe,be,_]);const V=c.useMemo(()=>{const z=[],G=new Set;for(const H of re){const se=Ue(H.name);!se||G.has(se)||(G.add(se),z.push({name:H.name,id:H.id,status:"boot",started:H.started,estMin:H.estMin,memoType:"instant"}))}for(const H of ge){const se=Ue(H.company);if(!se||G.has(se))continue;G.add(se);const he=H.status==="error"?"error":H.status==="done"?"done":"running";z.push({name:H.company,status:he,started:H.started||0,estMin:H.est_min||(H.memo_type==="detailed"?40:15),url:H.url,error:H.error,memoType:H.memo_type,note:H.note})}return z},[re,ge]),Z=z=>V.find(G=>Ue(G.name)===Ue(z))||null,le=(z,G)=>{de(H=>H.some(se=>Ue(se.name)===Ue(z.name))?H:[...H,{name:z.name,id:z.id,started:Date.now()/1e3,estMin:G==="detailed"?40:15}]),K.current.add(z.id),$()},pe=(z,G=!1)=>{T(z),U(G),Fe.current&&clearTimeout(Fe.current),Fe.current=setTimeout(()=>T(""),G?4200:2400)},ne=z=>pe(z,!0),ie=c.useMemo(()=>{const z=new Map;return l.dossiers.forEach(G=>{G.id&&z.set(G.id,G)}),z},[l.dossiers]),ue=c.useMemo(()=>l.dossiers.filter(z=>ia(z,h,be)),[l.dossiers,h,be]),we=c.useRef(!1);c.useEffect(()=>{if(we.current||l.loading||!l.dossiers.length)return;if(e&&!l.session.token){we.current=!0;return}if(!ke.showFunnel||Yc(l.session.token||"")){we.current=!0;return}we.current=!0;const z=window.setTimeout(()=>{fo(l.session.token||""),J(!0)},700);return()=>window.clearTimeout(z)},[e,l.loading,l.dossiers.length,ke.showFunnel,l.session.token]);const Ce=c.useMemo(()=>l.dossiers.filter(z=>Pl(z,h,be,l.favIds)),[l.dossiers,h,be,l.favIds]),je=c.useMemo(()=>Bs(ue.filter(z=>!Je(z)),l.favIds),[ue,l.favIds]),Ee=c.useRef(!1);c.useEffect(()=>{if(Ee.current)return;if(!be||a==="ops"){Ee.current=!0;return}if((n==null?void 0:n.ptab)!==void 0){Ee.current=!0;return}if(l.loading)return;Ee.current=!0;const z=$s(je);z!==h.ptab&&p({type:"ptab",tab:z})},[be,a,n==null?void 0:n.ptab,l.loading,je,h.ptab]);const ht=c.useMemo(()=>{const z=$o(l.dossiers);return z?jt(z)===0?s.tourToday:Uo(z,d):s.tourNoRun},[l.dossiers,s,d]),gt=c.useMemo(()=>l.dossiers.some(z=>!!z.memoUrl||!!z.summary||Ut(z)),[l.dossiers]),[Me,lt]=c.useState(!1);c.useEffect(()=>{if(l.loading){lt(!1);return}if(l.dossiers.length>0||l.error){lt(!0);return}const z=window.setTimeout(()=>lt(!0),6e3);return()=>window.clearTimeout(z)},[l.loading,l.dossiers.length,l.error]);const xt=(l.marketEstimate||0)>0||typeof((Yn=l.stats)==null?void 0:Yn.screened)=="number"&&l.stats.screened>0,At=c.useMemo(()=>[1,0,2,4,5,3].find(z=>(je[z]||0)>0)??0,[je]),at=Fn.find(z=>z.key===h.continent),qt=h.continent==="monde"?s.contWorld:(d==="fr"?at==null?void 0:at.fr:at==null?void 0:at.en)||"";c.useEffect(()=>{const z=G=>{var se;const H=(((se=G.detail)==null?void 0:se.name)||"").trim();H&&bt(null,H)};return window.addEventListener("ppmap:evaluate",z),()=>window.removeEventListener("ppmap:evaluate",z)}),c.useEffect(()=>{const z=G=>{const H=G.detail||{},se=String(H.id||"").trim(),he=String(H.name||"").trim(),De=String(H.url||"").trim(),Ae=se&&ie.get(se)||Bc(l.dossiers,he,De);if(Ae){if(v(null),ia(Ae,h,be)||(h.continent!=="monde"&&Ae.continent!==h.continent&&p({type:"continent",key:Ae.continent||"monde"}),p({type:"reset"})),be&&Ae.kind!=="op"){const ut=Le(Ae);typeof ut=="number"&&ut!==h.ptab&&p({type:"ptab",tab:ut})}window.dispatchEvent(new CustomEvent("ppmap:reveal")),p({type:"focus",id:Ae.id}),(Ae.noCo||["media","nominations","recrutements"].includes(Ae.engine||""))&&(Ae.url||Ae.headline)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:Ae.url||"",text:[Ae.headline,Ae.tagline].filter(Boolean).join(`
`)}})):Ae.noCo||window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:Ae.name,url:Ae.url||"",website:Ae.website||"",domain:Ae.domain||""}}));return}!he&&!De||(p({type:"focus",id:se||null}),v({name:he,headline:String(H.text||"").trim()||he,url:De,card:H.card}),De&&(La(he)||!he)?window.dispatchEvent(new CustomEvent("ppmap:research",{detail:{url:De,text:String(H.text||"").trim()}})):he&&!La(he)&&window.dispatchEvent(new CustomEvent("ppmap:prefill",{detail:{name:he}})))};return window.addEventListener("ppmap:focus",z),()=>window.removeEventListener("ppmap:focus",z)}),c.useEffect(()=>{const z=se=>{const he={},De=String((se==null?void 0:se.sector)||"").trim();De&&(he.sector=[De]);const Ae=String((se==null?void 0:se.day)||"").slice(0,10);/^\d{4}-\d{2}-\d{2}$/.test(Ae)&&(he.day=Ae);const He=String((se==null?void 0:se.search)||"").trim();He&&(he.search=He);const ut=String((se==null?void 0:se.dealKind)||"").trim();(ut==="ma"||ut==="levee"||ut==="other")&&(he.dealKind=[ut]),Object.keys(he).length&&p({type:"filters",patch:he})},G=se=>z(se.detail),H=se=>{se.data&&se.data.type==="pp-filter"&&z(se.data)};return window.addEventListener("ppmap:filter",G),window.addEventListener("message",H),()=>{window.removeEventListener("ppmap:filter",G),window.removeEventListener("message",H)}},[]),c.useEffect(()=>{const z=G=>{var he;const H=(((he=G.detail)==null?void 0:he.name)||"").trim().toLowerCase();if(!H)return;const se=l.dossiers.find(De=>(De.name||"").trim().toLowerCase()===H);se&&p(a==="ops"?{type:"focus",id:se.id}:{type:"popup",id:se.id})};return window.addEventListener("ppmap:similar",z),()=>window.removeEventListener("ppmap:similar",z)});const bt=(z,G,H)=>{const se=(H||(z==null?void 0:z.name)||G||"").trim();if(!_){k({kicker:se});return}!se||S||(L(!0),(async()=>{try{let he=(G||se).trim();const De=((z==null?void 0:z.website)||(z==null?void 0:z.domain)||"").trim();if(!(/^https?:\/\//i.test(he)||/^[a-z0-9.-]+\.[a-z]{2,}(\/|$)/i.test(he)&&!/\s/.test(he)))if(De)he=De;else try{const _e=await Rn(se);if(_e!=null&&_e.website)he=_e.website;else if(((_e==null?void 0:_e.candidates)||[]).length===1)he=_e.candidates[0].url;else if(((_e==null?void 0:_e.candidates)||[]).length>1){te.current=[{name:se,verdict:"unresolved",remaining:null,reason:s.evalPickSite,candidates:(_e.candidates||[]).slice(0,5)},...te.current].slice(0,8),$();return}}catch{}const He=await yo(oe,he,"atelier2"),ut={name:He.company||se,verdict:He.verdict,reason:He.reason||"",remaining:He.remaining??null};te.current=[ut,...te.current].slice(0,8),He.verdict==="kept"&&N(_e=>({..._e,kept:_e.kept+1})),He.verdict==="ruled_out"&&N(_e=>({..._e,dropped:_e.dropped+1}));const Kt=z||l.dossiers.find(_e=>(_e.name||"").toLowerCase()===se.toLowerCase());Kt&&(He.verdict==="kept"?Kt.verdict=Kt.verdict||"MATCH":He.verdict==="ruled_out"&&(Kt.verdict="NO MATCH"),He.reason&&(Kt.reasoning=He.reason)),$()}finally{L(!1)}})())},Pt=z=>{if(!_){k({kicker:z.name});return}le(z,"instant"),yt(oe,"fast_request",z.name||"",""),pe(s.memoInstantSent(z.name))},_t=z=>Ne.current.get(z.id)??l.thumbs.get((z.name||"").trim().toLowerCase()),Be=(z,G)=>p({type:"undoPush",entry:{id:z.id,name:z.name,prevCeoStatus:G}}),Xe=async(z,G,H)=>{const se=z.ceoStatus||"";ze.current.set(z.id,Date.now()),z.ceoStatus=G,$();const he=await Qa(oe,{status:G,airtable_id:z.airtableId,check_id:z.checkId,company:z.name,...(H==null?void 0:H.note)!==void 0?{note:H.note}:{},...H!=null&&H.via?{via:H.via}:{}});return he.ok?he.skipped?(z.ceoStatus=se,$(),ne(s.actNotPersisted),!1):((H==null?void 0:H.undo)!==!1&&Be(z,se),H!=null&&H.msg&&pe(H.msg),(G==="Validé"||G==="Écarté")&&!z.ceoNote&&(H==null?void 0:H.note)===void 0&&D({o:z,yes:G==="Validé"}),!0):(z.ceoStatus=se,$(),ne(s.actErr),!1)},Ye=async(z,G)=>{const H=await Qa(oe,{status:z.ceoStatus||"Retenu",airtable_id:z.airtableId,check_id:z.checkId,company:z.name,note:G,via:"note"});return!H.ok||H.skipped?(ne(H.skipped?s.actNotPersisted:s.actErr),!1):(z.ceoNote=G,$(),!0)},ct=c.useRef(new Map),F=z=>ct.current.has(z.id)?ct.current.get(z.id):l.stages.get((z.name||"").trim().toLowerCase()),W=(z,G)=>{ct.current.set(z.id,G),$()},X=(z,G)=>{_&&Xe(z,G?"Validé":"Écarté",{msg:G?s.decidedYes(z.name):s.decidedNo(z.name)})},P=z=>{_&&Xe(z,"À trancher",{msg:s.promoted(z.name)})},ee=z=>{_&&(async()=>{const G=z.ceoStatus||"";z.ceoStatus="Retenu",$();const H=await Qa(oe,{status:"Retenu",check_id:z.checkId,company:z.name});if(!H.ok||H.skipped){z.ceoStatus=G,$(),ne(H.skipped?s.actNotPersisted:s.actErr);return}Be(z,G),pe(s.repeched(z.name))})()},Q=()=>{const z=h.undo[h.undo.length-1];if(!z){pe(s.undoNone);return}const G=ie.get(z.id);if(!G){p({type:"undoPop"}),pe(s.undoNone);return}let H=z.prevCeoStatus;if(!H)if((G.verdict||"").toUpperCase().includes("CALL"))H="À trancher";else{pe(s.undoLockedTitle);return}(async()=>await Xe(G,H,{undo:!1})&&(p({type:"undoPop"}),G.ceoStatus=z.prevCeoStatus,$(),pe(s.undoDone(G.name))))()},me=z=>{_&&(ye.current.add(z.id),$(),p({type:"approachOpen",id:z.id}),yt(oe,"approach",z.name||"","","",l.email||""))},ze=c.useRef(new Map),fe=c.useRef(!1),[Oe,Te]=c.useState(0);c.useEffect(()=>{if(!oe||e||!_||fe.current)return;fe.current=!0;const z=new Date().toISOString().slice(0,10),G=l.email||"",H=`cbv_${oe}_${G}_${z}`,se=`atl2:vue:${oe}:${z}`;try{if(localStorage.getItem(H)||localStorage.getItem(se))return}catch{}yt(oe,"view","","","",G).then(he=>{if(!he.ok){fe.current=!1;return}try{localStorage.setItem(H,"1")}catch{}})},[oe,e,_,l.email]),c.useEffect(()=>{if(!oe||!be||e||!_||!l.generatedAt)return;let z=!0;const G=()=>{document.hidden||Qs(oe,l.generatedAt||"").then(se=>{z&&Te(se)})};G();const H=window.setInterval(G,6e4);return()=>{z=!1,window.clearInterval(H)}},[oe,be,e,l.generatedAt]);const nt=(z,G)=>{_&&(async()=>{if(!(await yt(oe,G?"yes":"no",z.name||"",(z.ceoNote||"").slice(0,400),z.sector||"",l.email||"")).ok){ne(s.actErr);return}Ne.current.set(z.id,G?"yes":"no"),$(),pe(G?s.thumbUpDone:s.thumbDnDone),q({o:z,up:G})})()},vt=z=>{!_||!Ut(z)||(le(z,"detailed"),yt(oe,"detailed_request",z.name||"","","",l.email||""),pe(s.memoDeepSent(z.name)))},Ze=z=>{!_||!z.memoUrl||window.confirm(s.memoRegenAsk(z.name))&&(le(z,"detailed"),yt(oe,"detailed_regen",z.name||"","","",l.email||""),pe(s.memoDeepSent(z.name)))},Ni=z=>{const G=new Set(l.favIds),H=G.has(z.id);H?G.delete(z.id):G.add(z.id),l.setFavIds(G),_&&Ks(oe,{id:z.id,co:z.name},H)},Si=()=>{!_||A||window.confirm(s.identSyncConfirm)&&(B(!0),(async()=>{const z=await Js(oe);B(!1),z?pe(s.identSyncDone):ne(s.actErr)})())},Gn=/proplace/i.test(l.fund||""),Ci=z=>{!_||!Gn||(yt(oe,"onboard_request",z.name||"",""),pe(s.onboardSent(z.name)))},zi={st:h,dispatch:p,t:s,lang:d,mode:ae,caps:ke,pipe:be,token:oe,fund:l.fund,email:l.email,criteria:l.criteria,source:a||"default",data:l,doRepeche:ee,thumbOf:_t,canWrite:_,commitStatus:Xe,saveNote:Ye,stageOf:F,setStage:W,flashErr:ne,startTour:()=>J(!0),dossiers:l.dossiers,scopedAll:ue,scoped:Ce,counts:je,byId:ie,contName:qt,favIds:l.favIds,toggleFav:Ni,askEvaluate:bt,doAnalyse:Pt,doDecide:X,doPromote:P,doApproach:me,doThumb:nt,doDeep:vt,doRegen:Ze,doUndo:Q,doSync:Si,doOnboard:Ci,outbound:Gn,memoQueued:K.current,liveMemos:{items:V,serverOff:ve,liveOf:Z},approachDone:ye.current,sessTally:j,evalCards:te.current,evalBusy:S,markRow:y,markedId:w,flash:pe,focusExtra:f};c.useEffect(()=>{const z=G=>{G.key==="Escape"&&(p({type:"popup",id:null}),p({type:"modal",modal:null}),p({type:"openFacet",facet:null}))};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[]);const Ai=z=>oe?t.jsx($l,{token:oe,children:z}):t.jsx(t.Fragment,{children:z});return t.jsx(ki.Provider,{value:zi,children:t.jsxs("div",{className:"atl2"+(a==="ops"?" ops":"")+(oe?" cibles":"")+" chrome-"+b,children:[t.jsx("style",{children:Cl}),Ai(t.jsxs("div",{className:"app"+(be?" pipe":"")+(oe?" has-thesis":""),children:[ke.showTicker&&t.jsx(dt,{name:"live",children:t.jsxs("div",{className:"live-stack"+(oe?" live-stack--cibles":""),children:[t.jsx(Ql,{}),!!oe&&t.jsx(Ul,{})]})}),ke.showIdent&&t.jsx(dt,{name:"identite",children:t.jsx(id,{})}),!1,Wc,ke.showFunnel&&t.jsx(dt,{name:"entonnoir",children:t.jsx(Kc,{})}),t.jsx(dt,{name:"carte",fallback:t.jsx("div",{className:"void",children:s.loadError}),children:t.jsxs("div",{className:"fzone",children:[t.jsx(di,{variant:h.mapFolded?"compact":"tabs"}),t.jsxs("div",{className:"stage"+(h.mapFolded?" folded":""),id:"atl2-stage",children:[!h.mapFolded&&a==="ops"&&t.jsx($c,{}),!h.mapFolded&&a!=="ops"&&(ke.showFunnel||ke.showIdent)&&t.jsxs("div",{className:"map-hud",children:[ke.showFunnel&&t.jsx(Uc,{}),ke.showIdent&&t.jsx(Vc,{})]}),!h.mapFolded&&t.jsx(rp,{}),t.jsx(li,{compact:!!h.mapFolded})]})]})}),ke.showDemand&&be&&t.jsx(dt,{name:"direct",children:t.jsx(al,{items:V,serverOff:ve,labels:{strip:s.liveStrip,boot:s.liveBoot,end:s.liveEnd,open:s.liveOpenQueue,memo:s.actMemo},onOpen:()=>p({type:"modal",modal:"queue"})})}),a==="ops"&&t.jsx("div",{className:"chrome-tog",role:"tablist","aria-label":s.chromeBoth,children:[["eval",s.chromeEval],["filt",s.chromeFilt],["both",s.chromeBoth]].map(([z,G])=>t.jsx("button",{type:"button",role:"tab","aria-selected":b===z,onClick:()=>{m(z);try{localStorage.setItem("atl2:chrome-mode",z)}catch{}},children:G},z))}),ke.showDemand&&t.jsx(dt,{name:"evaluation",children:t.jsx("div",{className:"eval-stick",children:t.jsx(gp,{})})}),ke.showDemand&&h.memoConsole&&t.jsx(dt,{name:"console",children:t.jsx(bp,{})}),ke.pipe&&!!oe&&t.jsx(dt,{name:"moteurs",children:t.jsx(hl,{})}),Oe>0&&t.jsxs("div",{className:"freshban",children:[t.jsx("span",{children:s.freshBan}),t.jsx("button",{type:"button",className:"abtn",onClick:()=>{Te(0),l.refresh()},children:s.freshGo})]}),t.jsx(dt,{name:"liste",fallback:t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:()=>window.location.reload(),children:s.retry})]}),children:t.jsx(ic,{})}),ke.pipe&&!!oe&&t.jsx("p",{className:"privnote",children:s.privLink}),l.loading&&t.jsx("div",{className:"void",children:s.loadingV2}),l.error&&!l.loading&&t.jsxs("div",{className:"void",children:[s.loadError," ",t.jsx("button",{type:"button",className:"abtn",onClick:l.refresh,children:s.retry})]})]})),h.popupId&&h.dens!=="liste"&&a!=="ops"&&t.jsx(dt,{name:"fiche",children:t.jsx(Up,{})}),t.jsx(dt,{name:"modales",children:t.jsx(fc,{})}),t.jsx(Xl,{}),g&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:g.o.name}),t.jsx(zr,{placeholder:g.up?s.thumbWhyUpPh:s.thumbWhyDnPh,onDone:z=>{const G=g.o;q(null),z&&yt(oe,"note",G.name||"",z,G.sector||"",l.email||"").then(H=>{H.ok&&pe(s.csNoteSaved)})}})]}),R&&t.jsxs("div",{className:"whydock",children:[t.jsx("b",{children:R.o.name}),t.jsx(zr,{placeholder:R.yes?s.whyYesPh:s.whyNoPh,onDone:z=>{const G=R.o;D(null),z&&Ye(G,z).then(H=>{H&&pe(s.csNoteSaved)})}})]}),M&&Me&&t.jsx(rd,{steps:Qc(s,ht,gt,At,xt,je[3]||0,je[4]||0,je),onClose:()=>{J(!1),fo(oe)}}),t.jsx(Gc,{}),ke.showOnb&&t.jsxs("div",{className:"lockbar on",children:[t.jsx("b",{children:s.lockbarText}),t.jsxs("span",{className:"lb-c",children:[s.lockbarContactBefore,t.jsx("a",{href:_o,children:Pn}),s.lockbarContactMid,t.jsx("a",{href:`mailto:${Oa}`,children:Oa})]}),t.jsx("button",{type:"button",onClick:()=>p({type:"modal",modal:"rdv"}),children:s.lockbarCta})]}),C&&t.jsx("div",{className:"flash on"+(O?" err":""),children:C}),E&&t.jsx(Us,{variant:"acquirer",initialCompany:ho().co,initialWebsite:ho().site,onClose:()=>k(null)})]})})}function Kc(){const{t:e}=Y(),[a,r]=c.useState(()=>{if(typeof window>"u")return!1;try{return localStorage.getItem("atl2:fhint")==="off"}catch{return!1}});return a?null:t.jsxs("p",{className:"fhint",children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:t.jsx("path",{d:"M1 2h10M2.5 5.5h7M4.5 9h3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})}),t.jsx("span",{dangerouslySetInnerHTML:{__html:e.funnelHint}}),t.jsx("button",{type:"button","aria-label":"Fermer",title:e.fhintClose,onClick:()=>{r(!0);try{localStorage.setItem("atl2:fhint","off")}catch{}},children:"✕"})]})}function ho(){try{return{co:localStorage.getItem("ppmap:acquirer")||"",site:localStorage.getItem("ppmap:acquirerSite")||""}}catch{return{co:"",site:""}}}function Jc(e){return e>=1e9?(e/1e9).toFixed(1).replace(".0","").replace(".",",")+" Md€":e>=1e6?Math.round(e/1e6)+" M€":Math.round(e/1e3)+" k€"}export{Ei as FlagCell,Ct as SigBadge,Va as SigWin,eu as default,Jc as fmtShort,Y as useV2};
