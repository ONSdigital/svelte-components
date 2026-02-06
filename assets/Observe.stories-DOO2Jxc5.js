import{p as g,Q as x,a as h,j as b,e as m,h as y,n as O,Z as k,c as $,f as D,t as I,g as v}from"./iframe-BBQ72IkI.js";import{i as w,w as M,c as C,d as E}from"./create-runtime-stories-DkoCa4Fo.js";import{e as T,i as S}from"./each-BPiKXt3s.js";import{s as V}from"./style-CcY6orqc.js";import{s as j}from"./slot-BP_Qo1ZM.js";import{a as z}from"./actions-C65pmnzq.js";import"./attributes-Co-1QMVx.js";var A=b("<div><!></div>");function f(s,o){g(o,!1);const r=x();let n=h(o,"visible",12,!1),p=h(o,"rootMargin",8,0);const i=e=>{e.forEach(l=>{let t=l.isIntersecting;!n()&&t&&(r("enter",l),n(!0)),n()&&!t&&(r("exit",l),n(!1))})};function a(e){let l={root:document,rootMargin:`${p()}px`};const t=new IntersectionObserver(i,l);return t.observe(e),{destroy:()=>{var u;return(u=t==null?void 0:t.unobserve)==null?void 0:u.call(t,e)}}}w();var c=A(),d=O(c);j(d,o,"default",{},null),z(c,e=>a==null?void 0:a(e)),m(s,c),y()}f.__docgen={data:[{name:"visible",visibility:"public",description:"Bind to this variable to monitor visiblity (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"rootMargin",visibility:"public",description:'Number of pixels before/after the viewport that component is considered "visible" (default = 0).',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"}],name:"Observe.svelte"};const B=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.

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
`,F=(s,o=k)=>{var r=$(),n=D(r);T(n,1,()=>N,S,(p,i)=>{f(p,{$$events:{enter:()=>console.log(`${v(i)} entered`),exit:()=>console.log(`${v(i)} exited`)},children:(a,c)=>{var d=R();let e;I(()=>e=V(d,"",e,{background:v(i),height:"400px"})),m(a,d)},$$slots:{default:!0}})}),m(s,r)},N=["yellow","green","blue","purple","red","orange"],P={title:"Wrappers/Observe",component:f,tags:["autodocs"],argTypes:{},parameters:M(B)},{Story:Q}=E();var R=b("<div></div>");function _(s,o){g(o,!1),w(),Q(s,{name:"Default",args:{},get template(){return F},parameters:{__svelteCsf:{rawCode:`{#each colors as color}
	<Observe
		on:enter={() => console.log(\`\${color} entered\`)}
		on:exit={() => console.log(\`\${color} exited\`)}
	>
		<div style:background={color} style:height="400px"></div>
	</Observe>
{/each}`}}}),y()}_.__docgen={data:[],name:"Observe.stories.svelte"};const W=C(_,P),U=["Default"],X={...W.Default,tags:["svelte-csf-v5"]};export{X as Default,U as __namedExportsOrder,P as default};
