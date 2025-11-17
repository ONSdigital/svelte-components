import{p as f,r as w,a as y,$ as x,a0 as O,j as u,e as m,h as g,n as $,g as r,m as D,s as k,Z as I,c as C,f as E,t as T}from"./iframe-B3b0x8CI.js";import{i as b,w as M,c as S,d as j}from"./create-runtime-stories-BDWGkGAJ.js";import{e as z,i as A}from"./each-BB2t4dHV.js";import{s as B}from"./style-CcY6orqc.js";import{s as P}from"./slot-BP_Qo1ZM.js";import{b as R}from"./this-CjIfBv2f.js";import"./attributes-Co-1QMVx.js";var V=u("<div><!></div>");function h(n,s){f(s,!1);const a=w();let i=y(s,"visible",12,!1),o=D(),e;const d=t=>{t.forEach(p=>{let v=p.isIntersecting;!i()&&v&&a("enter",p),i()&&!v&&a("exit",p),i(v)})};x(()=>{let t={};e=new IntersectionObserver(d,t),e.observe(r(o))}),O(()=>{var t;return(t=e==null?void 0:e.unobserve)==null?void 0:t.call(e,r(o))}),b();var l=V(),c=$(l);P(c,s,"default",{},null),R(l,t=>k(o,t),()=>r(o)),m(n,l),g()}h.__docgen={data:[{name:"visible",visibility:"public",description:"Bind to this variable to monitor visiblity (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"Observe.svelte"};const W=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.\r
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
`,Z=(n,s=I)=>{var a=C(),i=E(a);z(i,1,()=>q,A,(o,e)=>{h(o,{$$events:{enter:()=>console.log(`${r(e)} entered`),exit:()=>console.log(`${r(e)} exited`)},children:(d,l)=>{var c=H();let t;T(()=>t=B(c,"",t,{background:r(e),height:"400px"})),m(d,c)},$$slots:{default:!0}})}),m(n,a)},q=["yellow","green","blue","purple","red","orange"],F={title:"Wrappers/Observe",component:h,tags:["autodocs"],argTypes:{},parameters:M(W)},{Story:G}=j();var H=u("<div></div>");function _(n,s){f(s,!1),b(),G(n,{name:"Default",args:{},get template(){return Z},parameters:{__svelteCsf:{rawCode:`{#each colors as color}\r
	<Observe\r
		on:enter={() => console.log(\`\${color} entered\`)}\r
		on:exit={() => console.log(\`\${color} exited\`)}\r
	>\r
		<div style:background={color} style:height="400px"></div>\r
	</Observe>\r
{/each}`}}}),g()}_.__docgen={data:[],name:"Observe.stories.svelte"};const J=S(_,F),ee=["Default"],te={...J.Default,tags:["svelte-csf-v5"]};export{te as Default,ee as __namedExportsOrder,F as default};
