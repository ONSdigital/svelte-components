import{A as g,P as x,p as h,f as b,j as m,I as y,k as O,W as k,l as $,m as D,t as I,G as v}from"./iframe-B941gBln.js";import{i as w,w as M,c as C,d as E}from"./create-runtime-stories-CB3f-Q7v.js";import{e as T,i as A}from"./each-DbSs5FBq.js";import{s as P}from"./style-CNURdi_Z.js";import{s as S}from"./slot-BP_Qo1ZM.js";import{a as V}from"./actions-CD5cFAP3.js";import"./attributes-q36Eg1F8.js";var W=b("<div><!></div>");function f(s,o){g(o,!1);const r=x();let n=h(o,"visible",12,!1),p=h(o,"rootMargin",8,0);const i=e=>{e.forEach(l=>{let t=l.isIntersecting;!n()&&t&&(r("enter",l),n(!0)),n()&&!t&&(r("exit",l),n(!1))})};function a(e){let l={root:document,rootMargin:`${p()}px`};const t=new IntersectionObserver(i,l);return t.observe(e),{destroy:()=>{var u;return(u=t==null?void 0:t.unobserve)==null?void 0:u.call(t,e)}}}w();var c=W(),d=O(c);S(d,o,"default",{},null),V(c,e=>a==null?void 0:a(e)),m(s,c),y()}f.__docgen={data:[{name:"visible",visibility:"public",description:"Bind to this variable to monitor visiblity (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"rootMargin",visibility:"public",description:'Number of pixels before/after the viewport that component is considered "visible" (default = 0).',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"}],name:"Observe.svelte"};const j=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.

This component can be useful for triggering actions such as lazy loading of data/images or scroll-driven interactions.

This component has **enter** and **exit** events, triggered when it enters or leaves the viewport. It also has a **visible** binding which has a value of **true** when it is within the viewport.

In this demo, you can open your browser's developer console (**F12**) to see the logs for elements entering and existing the viewport.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Observe } from "@onsvisual/svelte-components";

  let visible;

  const colors = ["yellow", "green", "blue", "purple", "red", "orange"];
<\/script>

{#each colors as color}
<Observe
  bind:visible
  on:enter={() => console.log(\`\${color} entered\`)}
  on:exit={() => console.log(\`\${color} exited\`)}>
  <div class="section" style:background={color} style:height="400px"/>
</Observe>
{/each}
\`\`\`
`,z=(s,o=k)=>{var r=$(),n=D(r);T(n,1,()=>B,A,(p,i)=>{f(p,{$$events:{enter:()=>console.log(`${v(i)} entered`),exit:()=>console.log(`${v(i)} exited`)},children:(a,c)=>{var d=N();let e;I(()=>e=P(d,"",e,{background:v(i),height:"400px"})),m(a,d)},$$slots:{default:!0}})}),m(s,r)},B=["yellow","green","blue","purple","red","orange"],F={title:"Wrappers/Observe",component:f,tags:["autodocs"],argTypes:{},parameters:M(j)},{Story:G}=E();var N=b("<div></div>");function _(s,o){g(o,!1),w(),G(s,{name:"Default",args:{},get template(){return z},parameters:{__svelteCsf:{rawCode:`{#each colors as color}
	<Observe
		on:enter={() => console.log(\`\${color} entered\`)}
		on:exit={() => console.log(\`\${color} exited\`)}
	>
		<div style:background={color} style:height="400px"></div>
	</Observe>
{/each}`}}}),y()}_.__docgen={data:[],name:"Observe.stories.svelte"};const R=C(_,F),X=["Default"],Y={...R.Default,tags:["svelte-csf-v5"]};export{Y as Default,X as __namedExportsOrder,F as default};
