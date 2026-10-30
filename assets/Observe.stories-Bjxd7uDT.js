import{ab as g,al as _,p as b,af as O,a as u,ad as y,f as x,ag as w,c as E,d as I,e as D,t as M,g as f}from"./iframe-KpSyCse9.js";import{c as S,w as T,i as C,d as V}from"./create-runtime-stories-B9Qx1gAn.js";import{a as z}from"./actions-BH_rrNEt.js";import{e as A,i as F}from"./each-BrzkDhQl.js";import{s as P}from"./style-DJ2HlsXg.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var R=x("<div><!></div>");function m(s,e){g(e,!0);const r=_();let o=b(e,"visible",15,!1),v=b(e,"rootMargin",3,0);const i=t=>{t.forEach(n=>{var p,h;let l=n.isIntersecting;!o()&&l&&((p=e.onEnter)==null||p.call(e,n),r("enter",n),o(!0)),o()&&!l&&((h=e.onExit)==null||h.call(e,n),r("exit",n),o(!1))})};function a(t){if(typeof IntersectionObserver>"u")return;let n={root:document,rootMargin:`${v()}px`};const l=new IntersectionObserver(i,n);return l.observe(t),{destroy:()=>l.disconnect()}}var c=R(),d=E(c);O(d,()=>e.children??w),z(c,t=>a==null?void 0:a(t)),u(s,c),y()}m.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"visible",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."},{name:"rootMargin",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"onEnter",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(entry: IntersectionObserverEntry) => void"},static:!1,readonly:!1},{name:"onExit",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(entry: IntersectionObserverEntry) => void"},static:!1,readonly:!1}],name:"Observe.svelte"};const U=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.

This component can be useful for triggering actions such as lazy loading of data/images or scroll-driven interactions.

This component has **enter** and **exit** events, triggered when it enters or leaves the viewport. It also has a **visible** binding which has a value of **true** when it is within the viewport.

Under Svelte 5, use \`onEnter(entry)\` and \`onExit(entry)\` callback props. Each receives the same \`IntersectionObserverEntry\` as the retained \`on:enter\` and \`on:exit\` event's \`detail\`. The observer disconnects when the component unmounts.

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
`,W=(s,e=w)=>{var r=I(),o=D(r);A(o,1,()=>j,F,(v,i)=>{m(v,{$$events:{enter:()=>console.log(`${f(i)} entered`),exit:()=>console.log(`${f(i)} exited`)},children:(a,c)=>{var d=G();let t;M(()=>t=P(d,"",t,{background:f(i),height:"400px"})),u(a,d)},$$slots:{default:!0}})}),u(s,r)},j=["yellow","green","blue","purple","red","orange"],q={title:"Wrappers/Observe",component:m,tags:["autodocs"],argTypes:{},parameters:T(U)},{Story:B}=V();var G=x("<div></div>");function k(s,e){g(e,!1),C(),B(s,{name:"Default",args:{},get template(){return W},parameters:{__svelteCsf:{rawCode:`{#each colors as color}\r
	<Observe\r
		on:enter={() => console.log(\`\${color} entered\`)}\r
		on:exit={() => console.log(\`\${color} exited\`)}\r
	>\r
		<div style:background={color} style:height="400px"></div>\r
	</Observe>\r
{/each}`}}}),y()}k.__docgen={data:[],name:"Observe.stories.svelte"};const H=S(k,q),Z=["Default"],$={...H.Default,tags:["svelte-csf-v5"]};export{$ as Default,Z as __namedExportsOrder,q as default};
