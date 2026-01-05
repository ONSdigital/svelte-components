import{p as g,Q as x,a as h,$ as O,a0 as $,j as b,e as m,h as y,n as k,g as n,m as D,s as M,Z as I,c as C,f as E,t as T}from"./iframe-DNxkqxAS.js";import{i as _,w as S,c as V,d as j}from"./create-runtime-stories-CizDzvZP.js";import{e as z,i as A}from"./each-CimI5bI2.js";import{s as B}from"./style-CcY6orqc.js";import{s as N}from"./slot-BP_Qo1ZM.js";import{b as P}from"./this-BeWBXb8I.js";import"./attributes-Co-1QMVx.js";var Q=b("<div><!></div>");function f(a,r){g(r,!1);const i=x();let l=h(r,"visible",12,!1),d=h(r,"rootMargin",8,0),t=D(),e;const u=o=>{o.forEach(p=>{let v=p.isIntersecting;!l()&&v&&i("enter",p),l()&&!v&&i("exit",p),l(v)})};O(()=>{let o={root:document,rootMargin:`${d()}px`};e=new IntersectionObserver(u,o),e.observe(n(t))}),$(()=>{var o;return(o=e==null?void 0:e.unobserve)==null?void 0:o.call(e,n(t))}),_();var s=Q(),c=k(s);N(c,r,"default",{},null),P(s,o=>M(t,o),()=>n(t)),m(a,s),y()}f.__docgen={data:[{name:"visible",visibility:"public",description:"Bind to this variable to monitor visiblity (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"rootMargin",visibility:"public",description:'Number of pixels before/after the viewport that component is considered "visible" (default = 0).',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"}],name:"Observe.svelte"};const R=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.\r
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
`,W=(a,r=I)=>{var i=C(),l=E(i);z(l,1,()=>Z,A,(d,t)=>{f(d,{$$events:{enter:()=>console.log(`${n(t)} entered`),exit:()=>console.log(`${n(t)} exited`)},children:(e,u)=>{var s=G();let c;T(()=>c=B(s,"",c,{background:n(t),height:"400px"})),m(e,s)},$$slots:{default:!0}})}),m(a,i)},Z=["yellow","green","blue","purple","red","orange"],q={title:"Wrappers/Observe",component:f,tags:["autodocs"],argTypes:{},parameters:S(R)},{Story:F}=j();var G=b("<div></div>");function w(a,r){g(r,!1),_(),F(a,{name:"Default",args:{},get template(){return W},parameters:{__svelteCsf:{rawCode:`{#each colors as color}\r
	<Observe\r
		on:enter={() => console.log(\`\${color} entered\`)}\r
		on:exit={() => console.log(\`\${color} exited\`)}\r
	>\r
		<div style:background={color} style:height="400px"></div>\r
	</Observe>\r
{/each}`}}}),y()}w.__docgen={data:[],name:"Observe.stories.svelte"};const H=V(w,q),te=["Default"],oe={...H.Default,tags:["svelte-csf-v5"]};export{oe as Default,te as __namedExportsOrder,q as default};
