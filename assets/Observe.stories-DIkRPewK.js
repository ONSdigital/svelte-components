import{p as f,Q as w,a as y,$ as x,a0 as O,j as u,e as m,h as g,n as $,g as r,m as D,s as k,Z as I,c as C,f as E,t as T}from"./iframe-DI485cCl.js";import{i as b,w as M,c as S,d as j}from"./create-runtime-stories-7vGa3Oc7.js";import{e as z,i as A}from"./each-2gVlA0SD.js";import{s as B}from"./style-CcY6orqc.js";import{s as P}from"./slot-BP_Qo1ZM.js";import{b as Q}from"./this-8dsGcKE8.js";import"./attributes-Co-1QMVx.js";var R=u("<div><!></div>");function h(n,s){f(s,!1);const a=w();let i=y(s,"visible",12,!1),o=D(),e;const d=t=>{t.forEach(p=>{let v=p.isIntersecting;!i()&&v&&a("enter",p),i()&&!v&&a("exit",p),i(v)})};x(()=>{let t={};e=new IntersectionObserver(d,t),e.observe(r(o))}),O(()=>{var t;return(t=e==null?void 0:e.unobserve)==null?void 0:t.call(e,r(o))}),b();var l=R(),c=$(l);P(c,s,"default",{},null),Q(l,t=>k(o,t),()=>r(o)),m(n,l),g()}h.__docgen={data:[{name:"visible",visibility:"public",description:"Bind to this variable to monitor visiblity (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"Observe.svelte"};const V=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.\r
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
`,W=(n,s=I)=>{var a=C(),i=E(a);z(i,1,()=>Z,A,(o,e)=>{h(o,{$$events:{enter:()=>console.log(`${r(e)} entered`),exit:()=>console.log(`${r(e)} exited`)},children:(d,l)=>{var c=G();let t;T(()=>t=B(c,"",t,{background:r(e),height:"400px"})),m(d,c)},$$slots:{default:!0}})}),m(n,a)},Z=["yellow","green","blue","purple","red","orange"],q={title:"Wrappers/Observe",component:h,tags:["autodocs"],argTypes:{},parameters:M(V)},{Story:F}=j();var G=u("<div></div>");function _(n,s){f(s,!1),b(),F(n,{name:"Default",args:{},get template(){return W},parameters:{__svelteCsf:{rawCode:`{#each colors as color}\r
	<Observe\r
		on:enter={() => console.log(\`\${color} entered\`)}\r
		on:exit={() => console.log(\`\${color} exited\`)}\r
	>\r
		<div style:background={color} style:height="400px"></div>\r
	</Observe>\r
{/each}`}}}),g()}_.__docgen={data:[],name:"Observe.stories.svelte"};const H=S(_,q),ee=["Default"],te={...H.Default,tags:["svelte-csf-v5"]};export{te as Default,ee as __namedExportsOrder,q as default};
