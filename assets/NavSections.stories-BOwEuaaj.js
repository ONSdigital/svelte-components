import{p as ut,a as p,aj as at,ao as ht,$ as kt,l as Et,b as Mt,h as ft,X as wt,j as r,f as z,n as a,i as h,k as v,e as o,a1 as rt,s as ct,m as dt,W as nt,g as i,c as vt,t as b,o as g,q as S,T as lt,a0 as Rt,Z as Ut}from"./iframe--x4qF4Cz.js";import{i as pt,w as Wt,c as Xt,d as Yt}from"./create-runtime-stories-BnfwZkSc.js";import{e as gt,i as St}from"./each-Df_4uaNX.js";import{s as I}from"./slot-BP_Qo1ZM.js";import{s as U}from"./attributes-DUgS1wvt.js";import{s as F}from"./class-Dzh9Da8g.js";import{C as Zt}from"./Container-Ril63Z3a.js";import{c as zt}from"./attributes-Co-1QMVx.js";import{b as Ft}from"./this-4olsutoS.js";import{s as Gt,l as Z}from"./utils-B8WOfuUY.js";import{B as Ht}from"./BackLink-Bebaup4L.js";import"./style-CcY6orqc.js";import"./Theme-BgEiTc1S.js";import"./svelte-head-DACCs42k.js";import"./html-zSkhiqJs.js";import"./_commonjsHelpers-CqkleIqs.js";var Jt=r('<h2 class="ons-table-of-contents__title ons-u-fs-r--b ons-u-mb-s">Contents</h2>'),Kt=r("<a> </a>"),Qt=r('<li class="ons-list__item"><a> </a></li>'),te=r('<ol class="ons-list ons-u-mb-no ons-list--dashed"></ol>'),ee=r('<li class="ons-list__item"><!> <!></li>'),ne=r('<nav class="ons-table-of-contents" aria-label="Sections in this page"><!> <ol class="ons-list ons-u-mb-l ons-list--dashed"><!></ol></nav>'),se=r('<div class="ons-grid ons-grid--spaced ons-grid--loose ons-js-toc-container"><div class="ons-grid__col ons-grid__col--sticky@m ons-col-4@m"><aside class="ons-table-of-contents-container" role="complementary"><!> <!> <!></aside></div> <div class="ons-grid__col ons-col-8@m"><!> <!> <!></div></div> <!>',1);function mt(w,t){ut(t,!1);const[x,G]=wt(),N=()=>nt(m,"$sections",x),$=()=>nt(q,"$observer",x),u=dt();let C=p(t,"id",8,"toc"),L=p(t,"cls",8,""),j=p(t,"width",8,"wide"),c=p(t,"contentsLabel",8,"Page contents"),f=p(t,"noContents",8,!1),n=p(t,"marginTop",8,!1),d=p(t,"marginBottom",8,!0),s=dt();at("tocId",C());const m=ht([]);at("sections",m);const q=ht();at("observer",q);function st(_){const O=[];let l={subsections:[]};for(const e of _)e.dataset.subsection!=="true"?((l.title||l.subsections.length>0)&&O.push(l),l={id:e.id,title:e.dataset.title,subsections:[]}):l.subsections.push({id:e.id,title:e.dataset.title});return[...O,l]}kt(()=>{f()||rt(q,new IntersectionObserver((_,O)=>{for(let l=0;l<_.length;l++)if(_[l].isIntersecting){ct(s,_[l].target.id);break}},{root:null,rootMargin:"-20% 0px -80%",threshold:0}))}),Et(()=>N(),()=>{ct(u,st(N()))}),Mt(),pt(),Zt(w,{get cls(){return L()},get width(){return j()},get marginTop(){return n()},get marginBottom(){return d()},children:(_,O)=>{var l=se(),e=z(l),W=a(e),ot=a(W),H=a(ot);I(H,t,"before-nav",{},null);var J=v(H,2);{var k=V=>{var X=ne(),K=a(X);{var Tt=D=>{var Q=Jt();o(D,Q)};h(K,D=>{c()&&D(Tt)})}var Vt=v(K,2),Dt=a(Vt);{var Bt=D=>{var Q=vt(),Pt=z(Q);gt(Pt,1,()=>i(u),St,(At,B)=>{var _t=ee(),bt=a(_t);{var It=P=>{var A=Kt();let tt;var Y=a(A);b(et=>{U(A,"href",`#${i(B).id??""}`),tt=F(A,1,"ons-list__link",null,tt,et),S(Y,i(B).title)},[()=>({"ons-table-of-contents__link-active":i(B).id===i(s)})],g),o(P,A)};h(bt,P=>{i(B).id&&i(B).title&&P(It)})}var Lt=v(bt,2);{var jt=P=>{var A=te();gt(A,5,()=>i(B).subsections,St,(tt,Y)=>{var et=Qt(),it=a(et);let yt;var qt=a(it);b(Ot=>{U(it,"href",`#${i(Y).id??""}`),yt=F(it,1,"ons-list__link",null,yt,Ot),S(qt,i(Y).title)},[()=>({"ons-table-of-contents__link-active":i(Y).id===i(s)})],g),o(tt,et)}),o(P,A)};h(Lt,P=>{i(B).subsections.length>0&&P(jt)})}o(At,_t)}),o(D,Q)};h(Dt,D=>{i(u)&&D(Bt)})}o(V,X)};h(J,V=>{f()||V(k)})}var y=v(J,2);I(y,t,"after-nav",{},null);var T=v(W,2),E=a(T);I(E,t,"before",{},null);var M=v(E,2);{var Nt=V=>{var X=vt(),K=z(X);I(K,t,"default",{},null),o(V,X)};h(M,V=>{$()&&V(Nt)})}var $t=v(M,2);I($t,t,"after",{},null);var Ct=v(e,2);I(Ct,t,"footer",{},null),o(_,l)},$$slots:{default:!0}}),ft(),G()}mt.__docgen={data:[{name:"id",visibility:"public",description:"ID for back-linking to table of contents",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"toc"'},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the section",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"width",visibility:"public",description:"Sets the width of the container",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"narrow",text:'"narrow"'},{kind:"const",type:"string",value:"medium",text:'"medium"'},{kind:"const",type:"string",value:"wide",text:'"wide"'},{kind:"const",type:"string",value:"wider",text:'"wider"'},{kind:"const",type:"string",value:"full",text:'"full"'}],text:'"narrow" | "medium" | "wide" | "wider" | "full"'},static:!1,readonly:!1,defaultValue:'"wide"'},{name:"contentsLabel",visibility:"public",description:"A label for the page contents nav",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Page contents"'},{name:"noContents",visibility:"public",description:"Don't include table of contents (allows for custom uses of nav panel)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"marginTop",visibility:"public",description:"Adds margin above section",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"marginBottom",visibility:"public",description:"Adds margin below section",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"}],name:"NavSections.svelte"};var oe=r("<h3> </h3>"),ie=r("<h2> </h2>"),ae=r('<section data-type="NavSection"><!> <!> <!></section>');function R(w,t){ut(t,!1);const[x,G]=wt(),N=()=>nt(f,"$sections",x),$=()=>nt(n,"$observer",x);let u=p(t,"title",8,"Section title"),C=p(t,"id",24,()=>Gt(u())),L=p(t,"cls",8,""),j=p(t,"hideTitle",8,!1),c=p(t,"subsection",8,!1);const f=lt("sections"),n=lt("observer"),d=lt("tocId");let s=dt();kt(()=>{f&&n&&(rt(f,[...i(s).parentElement.getElementsByTagName("section")].filter(e=>e.dataset.type==="NavSection")),$().observe(i(s)))}),Rt(()=>{f&&n&&(rt(f,N().filter(e=>e.id!==C())),$().unobserve(i(s)))}),pt();var m=ae(),q=a(m);{var st=e=>{var W=vt(),ot=z(W);{var H=k=>{var y=oe();let T;var E=a(y);b(M=>{T=F(y,1,"subsection-title",null,T,M),S(E,u())},[()=>({"ons-u-vh":j()})],g),o(k,y)},J=k=>{var y=ie();let T;var E=a(y);b(M=>{T=F(y,1,"section-title",null,T,M),S(E,u())},[()=>({"ons-u-vh":j()})],g),o(k,y)};h(ot,k=>{c()?k(H):k(J,!1)})}o(e,W)};h(q,e=>{u()&&e(st)})}var _=v(q,2);I(_,t,"default",{},null);var O=v(_,2);{var l=e=>{Ht(e,{get href(){return`#${d??""}`},cls:"ons-u-d-no@m"})};h(O,e=>{d&&e(l)})}Ft(m,e=>ct(s,e),()=>i(s)),b(()=>{U(m,"id",C()),U(m,"data-title",u()),U(m,"data-subsection",c()),F(m,1,zt(L())),U(m,"aria-label",u())}),o(w,m),ft(),G()}R.__docgen={data:[{name:"title",visibility:"public",description:"Sets the title of the section",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Section title"'},{name:"id",visibility:"public",description:"Sets the unique ID of the section (if not set, this will be slugified from the title)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the section",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"hideTitle",visibility:"public",description:"Allows the h2 title tag for the section to be visually hidden",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"subsection",visibility:"public",description:"Treat a section as sub-section. It will have an h3 title, and will be indented in the contents table",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"NavSection.svelte"};const le=`Use this layou component to allow users to quickly jump to sections of a long page of content.

As the user scrolls down the page, the table of contents will remain accessible at the top of the viewport and will highlight the subheading of the section in view.

Note: These examples will not preview correctly in the iframes on this page. You can select the examples from the menu instead.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { NavSections, NavSection } from "@onsvisual/svelte-components";
<\/script>

<NavSections>
  <NavSection title="Section one">
    <p>Contents of first section.</p>
  </NavSection>
  <NavSection title="Subsection A" subsection>
    <p>Contents of subsection.</p>
  </NavSection>
  <NavSection title="Subsection B" subsection>
    <p>Contents of subsection.</p>
  </NavSection>
  <NavSection title="Section two">
    <p>Contents of third section.</p>
  </NavSection>
</NavSections>
\`\`\`
`,re=(w,t=Ut)=>{mt(w,{children:(x,G)=>{var N=_e(),$=z(N);R($,{title:"Section one",children:(c,f)=>{var n=ve(),d=a(n);b(s=>S(d,s),[Z],g),o(c,n)},$$slots:{default:!0}});var u=v($,2);R(u,{title:"Subsection A",subsection:!0,children:(c,f)=>{var n=ue(),d=a(n);b(s=>S(d,s),[()=>Z(4,1)],g),o(c,n)},$$slots:{default:!0}});var C=v(u,2);R(C,{title:"Subsection B",subsection:!0,children:(c,f)=>{var n=fe(),d=a(n);b(s=>S(d,s),[()=>Z(4,2)],g),o(c,n)},$$slots:{default:!0}});var L=v(C,2);R(L,{title:"Section two",children:(c,f)=>{var n=pe(),d=a(n);b(s=>S(d,s),[()=>Z(4,3)],g),o(c,n)},$$slots:{default:!0}});var j=v(L,2);R(j,{title:"Section three",children:(c,f)=>{var n=me(),d=a(n);b(s=>S(d,s),[Z],g),o(c,n)},$$slots:{default:!0}}),o(x,N)},$$slots:{default:!0}})},ce={title:"Layout/NavSections",component:mt,tags:["autodocs"],argTypes:{},parameters:Wt(le)},{Story:de}=Yt();var ve=r("<p> </p>"),ue=r("<p> </p>"),fe=r("<p> </p>"),pe=r("<p> </p>"),me=r("<p> </p>"),_e=r("<!> <!> <!> <!> <!>",1);function xt(w,t){ut(t,!1),pt(),de(w,{name:"Default",args:{},get template(){return re},parameters:{__svelteCsf:{rawCode:`<NavSections>
	<NavSection title="Section one">
		<p>
			{lipsum()}
		</p>
	</NavSection>
	<NavSection title="Subsection A" subsection>
		<p>
			{lipsum(4, 1)}
		</p>
	</NavSection>
	<NavSection title="Subsection B" subsection>
		<p>
			{lipsum(4, 2)}
		</p>
	</NavSection>
	<NavSection title="Section two">
		<p>
			{lipsum(4, 3)}
		</p>
	</NavSection>
	<NavSection title="Section three">
		<p>
			{lipsum()}
		</p>
	</NavSection>
</NavSections>`}}}),ft()}xt.__docgen={data:[],name:"NavSections.stories.svelte"};const be=Xt(xt,ce),Ie=["Default"],Le={...be.Default,tags:["svelte-csf-v5"]};export{Le as Default,Ie as __namedExportsOrder,ce as default};
