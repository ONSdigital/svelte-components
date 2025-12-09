import{p as f,Q as w,a as y,$ as x,a0 as O,j as u,e as m,h as g,n as $,g as n,m as D,s as k,Z as I,c as C,f as E,t as T}from"./iframe-CLJGxL-r.js";import{i as b,w as M,c as S,d as j}from"./create-runtime-stories-CX2JR82U.js";import{e as z,i as A}from"./each-C94s8ouP.js";import{s as B}from"./style-CcY6orqc.js";import{s as P}from"./slot-BP_Qo1ZM.js";import{b as Q}from"./this-CwlgQ3H8.js";import"./attributes-Co-1QMVx.js";var R=u("<div><!></div>");function h(a,s){f(s,!1);const r=w();let i=y(s,"visible",12,!1),o=D(),e;const d=t=>{t.forEach(p=>{let v=p.isIntersecting;!i()&&v&&r("enter",p),i()&&!v&&r("exit",p),i(v)})};x(()=>{let t={};e=new IntersectionObserver(d,t),e.observe(n(o))}),O(()=>{var t;return(t=e==null?void 0:e.unobserve)==null?void 0:t.call(e,n(o))}),b();var l=R(),c=$(l);P(c,s,"default",{},null),Q(l,t=>k(o,t),()=>n(o)),m(a,l),g()}h.__docgen={data:[{name:"visible",visibility:"public",description:"Bind to this variable to monitor visiblity (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"Observe.svelte"};const V=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.

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
`,W=(a,s=I)=>{var r=C(),i=E(r);z(i,1,()=>Z,A,(o,e)=>{h(o,{$$events:{enter:()=>console.log(`${n(e)} entered`),exit:()=>console.log(`${n(e)} exited`)},children:(d,l)=>{var c=G();let t;T(()=>t=B(c,"",t,{background:n(e),height:"400px"})),m(d,c)},$$slots:{default:!0}})}),m(a,r)},Z=["yellow","green","blue","purple","red","orange"],q={title:"Wrappers/Observe",component:h,tags:["autodocs"],argTypes:{},parameters:M(V)},{Story:F}=j();var G=u("<div></div>");function _(a,s){f(s,!1),b(),F(a,{name:"Default",args:{},get template(){return W},parameters:{__svelteCsf:{rawCode:`{#each colors as color}
	<Observe
		on:enter={() => console.log(\`\${color} entered\`)}
		on:exit={() => console.log(\`\${color} exited\`)}
	>
		<div style:background={color} style:height="400px"></div>
	</Observe>
{/each}`}}}),g()}_.__docgen={data:[],name:"Observe.stories.svelte"};const H=S(_,q),ee=["Default"],te={...H.Default,tags:["svelte-csf-v5"]};export{te as Default,ee as __namedExportsOrder,q as default};
