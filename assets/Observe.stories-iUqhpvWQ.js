import{p as f,r as w,a as y,$ as x,a0 as O,j as u,e as m,h as g,n as $,g as n,m as D,s as k,Z as I,c as C,f as E,t as T}from"./iframe-kaTzlrrs.js";import{i as b,w as M,c as S,d as j}from"./create-runtime-stories-3AedxPmw.js";import{e as z,i as A}from"./each-D0DDHHF7.js";import{s as B}from"./style-CcY6orqc.js";import{s as P}from"./slot-BP_Qo1ZM.js";import{b as R}from"./this-BGCrOjS5.js";import"./attributes-Co-1QMVx.js";var V=u("<div><!></div>");function h(r,s){f(s,!1);const a=w();let i=y(s,"visible",12,!1),o=D(),t;const d=e=>{e.forEach(p=>{let v=p.isIntersecting;!i()&&v&&a("enter",p),i()&&!v&&a("exit",p),i(v)})};x(()=>{let e={};t=new IntersectionObserver(d,e),t.observe(n(o))}),O(()=>t.unobserve(n(o))),b();var l=V(),c=$(l);P(c,s,"default",{},null),R(l,e=>k(o,e),()=>n(o)),m(r,l),g()}h.__docgen={data:[{name:"visible",visibility:"public",description:"Bind to this variable to monitor visiblity (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"Observe.svelte"};const W=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.

This component can be useful for triggering actions such as lazy loading of data/images or scroll-driven interactions.

This component has **enter** and **exit** events, triggered when it enters or leaves the viewport. It also has a **visible** binding which has a value of **true** when it is within the viewport.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Observe } from "@onsvisual/svelte-components";

  const colors = ["yellow", "green", "blue", "purple", "red", "orange"];
<\/script>

{#each colors as color}
<Observe
  on:enter={() => console.log(\`\${color} entered\`)}
  on:exit={() => console.log(\`\${color} exited\`)}>
  <div class="section" style:background={color} style:height="400px"/>
</Observe>
{/each}
\`\`\`
`,Z=(r,s=I)=>{var a=C(),i=E(a);z(i,1,()=>q,A,(o,t)=>{h(o,{$$events:{enter:()=>console.log(`${n(t)} entered`),exit:()=>console.log(`${n(t)} exited`)},children:(d,l)=>{var c=H();let e;T(()=>e=B(c,"",e,{background:n(t),height:"400px"})),m(d,c)},$$slots:{default:!0}})}),m(r,a)},q=["yellow","green","blue","purple","red","orange"],F={title:"Wrappers/Observe",component:h,tags:["autodocs"],argTypes:{},parameters:M(W)},{Story:G}=j();var H=u("<div></div>");function _(r,s){f(s,!1),b(),G(r,{name:"Default",args:{},get template(){return Z},parameters:{__svelteCsf:{rawCode:`{#each colors as color}
	<Observe
		on:enter={() => console.log(\`\${color} entered\`)}
		on:exit={() => console.log(\`\${color} exited\`)}
	>
		<div style:background={color} style:height="400px"></div>
	</Observe>
{/each}`}}}),g()}_.__docgen={data:[],name:"Observe.stories.svelte"};const J=S(_,F),ee=["Default"],te={...J.Default,tags:["svelte-csf-v5"]};export{te as Default,ee as __namedExportsOrder,F as default};
