import{ab as g,ai as _,p as h,a as m,ad as b,f as y,c as O,as as $,d as k,e as D,t as I,g as v}from"./iframe-Btj2Y3yR.js";import{i as w,c as M,w as C,d as E}from"./create-runtime-stories-Cj_5ws55.js";import{s as T}from"./slot-BP_Qo1ZM.js";import{a as S}from"./actions-Dx4zpPsb.js";import{e as V,i as z}from"./each-DHuLB8C_.js";import{s as A}from"./style-BwCD9sPd.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var B=y("<div><!></div>");function f(s,o){g(o,!1);const r=_();let n=h(o,"visible",12,!1),p=h(o,"rootMargin",8,0);const a=e=>{e.forEach(l=>{let t=l.isIntersecting;!n()&&t&&(r("enter",l),n(!0)),n()&&!t&&(r("exit",l),n(!1))})};function i(e){let l={root:document,rootMargin:`${p()}px`};const t=new IntersectionObserver(a,l);return t.observe(e),{destroy:()=>{var u;return(u=t==null?void 0:t.unobserve)==null?void 0:u.call(t,e)}}}w();var c=B(),d=O(c);T(d,o,"default",{},null),S(c,e=>i==null?void 0:i(e)),m(s,c),b()}f.__docgen={data:[{name:"visible",visibility:"public",description:"Bind to this variable to monitor visiblity (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"rootMargin",visibility:"public",description:'Number of pixels before/after the viewport that component is considered "visible" (default = 0).',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"}],name:"Observe.svelte"};const F=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.

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
`,N=(s,o=$)=>{var r=k(),n=D(r);V(n,1,()=>P,z,(p,a)=>{f(p,{$$events:{enter:()=>console.log(`${v(a)} entered`),exit:()=>console.log(`${v(a)} exited`)},children:(i,c)=>{var d=j();let e;I(()=>e=A(d,"",e,{background:v(a),height:"400px"})),m(i,d)},$$slots:{default:!0}})}),m(s,r)},P=["yellow","green","blue","purple","red","orange"],R={title:"Wrappers/Observe",component:f,tags:["autodocs"],argTypes:{},parameters:C(F)},{Story:W}=E();var j=y("<div></div>");function x(s,o){g(o,!1),w(),W(s,{name:"Default",args:{},get template(){return N},parameters:{__svelteCsf:{rawCode:`{#each colors as color}
	<Observe
		on:enter={() => console.log(\`\${color} entered\`)}
		on:exit={() => console.log(\`\${color} exited\`)}
	>
		<div style:background={color} style:height="400px"></div>
	</Observe>
{/each}`}}}),b()}x.__docgen={data:[],name:"Observe.stories.svelte"};const q=M(x,R),Y=["Default"],Z={...q.Default,tags:["svelte-csf-v5"]};export{Z as Default,Y as __namedExportsOrder,R as default};
