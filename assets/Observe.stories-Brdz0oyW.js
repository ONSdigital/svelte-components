import{p as g,Q as x,a as h,$ as O,a0 as $,j as b,e as v,h as y,n as k,g as a,m as D,s as M,Z as I,c as C,f as E,t as T}from"./iframe-BD7JyiWe.js";import{i as _,w as S,c as V,d as j}from"./create-runtime-stories-CfzMKkzB.js";import{e as z,i as A}from"./each-BrM-g6W2.js";import{s as B}from"./style-CcY6orqc.js";import{s as N}from"./slot-BP_Qo1ZM.js";import{b as P}from"./this-BDvxx-31.js";import"./attributes-Co-1QMVx.js";var Q=b("<div><!></div>");function m(i,r){g(r,!1);const l=x();let s=h(r,"visible",12,!1),d=h(r,"rootMargin",8,0),t=D(),e;const f=o=>{o.forEach(p=>{let u=p.isIntersecting;!s()&&u&&(l("enter",p),s(!0)),s()&&!u&&(l("exit",p),s(!1))})};O(()=>{let o={root:document,rootMargin:`${d()}px`};e=new IntersectionObserver(f,o),e.observe(a(t))}),$(()=>{var o;return(o=e==null?void 0:e.unobserve)==null?void 0:o.call(e,a(t))}),_();var n=Q(),c=k(n);N(c,r,"default",{},null),P(n,o=>M(t,o),()=>a(t)),v(i,n),y()}m.__docgen={data:[{name:"visible",visibility:"public",description:"Bind to this variable to monitor visiblity (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"rootMargin",visibility:"public",description:'Number of pixels before/after the viewport that component is considered "visible" (default = 0).',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"}],name:"Observe.svelte"};const R=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.\r
\r
This component can be useful for triggering actions such as lazy loading of data/images or scroll-driven interactions.\r
\r
This component has **enter** and **exit** events, triggered when it enters or leaves the viewport. It also has a **visible** binding which has a value of **true** when it is within the viewport.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Observe } from "@onsvisual/svelte-components";\r
\r
  const colors = ["yellow", "green", "blue", "purple", "red", "orange"];\r
<\/script>\r
\r
{#each colors as color}\r
<Observe\r
  on:enter={() => console.log(\`\${color} entered\`)}\r
  on:exit={() => console.log(\`\${color} exited\`)}>\r
  <div class="section" style:background={color} style:height="400px"/>\r
</Observe>\r
{/each}\r
\`\`\`\r
`,W=(i,r=I)=>{var l=C(),s=E(l);z(s,1,()=>Z,A,(d,t)=>{m(d,{$$events:{enter:()=>console.log(`${a(t)} entered`),exit:()=>console.log(`${a(t)} exited`)},children:(e,f)=>{var n=G();let c;T(()=>c=B(n,"",c,{background:a(t),height:"400px"})),v(e,n)},$$slots:{default:!0}})}),v(i,l)},Z=["yellow","green","blue","purple","red","orange"],q={title:"Wrappers/Observe",component:m,tags:["autodocs"],argTypes:{},parameters:S(R)},{Story:F}=j();var G=b("<div></div>");function w(i,r){g(r,!1),_(),F(i,{name:"Default",args:{},get template(){return W},parameters:{__svelteCsf:{rawCode:`{#each colors as color}\r
	<Observe\r
		on:enter={() => console.log(\`\${color} entered\`)}\r
		on:exit={() => console.log(\`\${color} exited\`)}\r
	>\r
		<div style:background={color} style:height="400px"></div>\r
	</Observe>\r
{/each}`}}}),y()}w.__docgen={data:[],name:"Observe.stories.svelte"};const H=V(w,q),te=["Default"],oe={...H.Default,tags:["svelte-csf-v5"]};export{oe as Default,te as __namedExportsOrder,q as default};
