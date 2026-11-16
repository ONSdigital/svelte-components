import{ad as g,al as _,p as b,s as O,a as p,af as y,f as w,n as x,c as E,e as I,h as D,t as C,g as h}from"./iframe-DdiBZH3h.js";import{c as M,w as S,i as T,d as V}from"./create-runtime-stories-AZi_Zqsf.js";import{a as z}from"./actions-8Xo8GlJg.js";import{e as A,i as B}from"./each-BVVoInqu.js";import{s as F}from"./style-CQNhTFCE.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var N=w("<div><!></div>");function f(s,e){g(e,!0);const i=_();let o=b(e,"visible",15,!1),v=b(e,"rootMargin",3,0);const r=t=>{t.forEach(n=>{var u,m;let l=n.isIntersecting;!o()&&l&&((u=e.onEnter)==null||u.call(e,n),i("enter",n),o(!0)),o()&&!l&&((m=e.onExit)==null||m.call(e,n),i("exit",n),o(!1))})};function a(t){if(typeof IntersectionObserver>"u")return;let n={root:document,rootMargin:`${v()}px`};const l=new IntersectionObserver(r,n);return l.observe(t),{destroy:()=>l.disconnect()}}var c=N(),d=E(c);O(d,()=>e.children??x),z(c,t=>a==null?void 0:a(t)),p(s,c),y()}f.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"visible",visibility:"public",description:"Bind to this variable to monitor visiblity (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."},{name:"rootMargin",visibility:"public",description:'Number of pixels before/after the viewport that component is considered "visible" (default = 0).',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"onEnter",visibility:"public",description:"Callback for the `enter` event, called with the same value as the event's `detail`",keywords:[],kind:"let",type:{kind:"function",text:"(entry: IntersectionObserverEntry) => void"},static:!1,readonly:!1},{name:"onExit",visibility:"public",description:"Callback for the `exit` event, called with the same value as the event's `detail`",keywords:[],kind:"let",type:{kind:"function",text:"(entry: IntersectionObserverEntry) => void"},static:!1,readonly:!1}],name:"Observe.svelte"};const P=`A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.

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
`,R=(s,e=x)=>{var i=I(),o=D(i);A(o,1,()=>U,B,(v,r)=>{f(v,{$$events:{enter:()=>console.log(`${h(r)} entered`),exit:()=>console.log(`${h(r)} exited`)},children:(a,c)=>{var d=q();let t;C(()=>t=F(d,"",t,{background:h(r),height:"400px"})),p(a,d)},$$slots:{default:!0}})}),p(s,i)},U=["yellow","green","blue","purple","red","orange"],W={title:"Wrappers/Observe",component:f,tags:["autodocs"],argTypes:{},parameters:S(P)},{Story:j}=V();var q=w("<div></div>");function k(s,e){g(e,!1),T(),j(s,{name:"Default",args:{},get template(){return R},parameters:{__svelteCsf:{rawCode:`{#each colors as color}
	<Observe
		on:enter={() => console.log(\`\${color} entered\`)}
		on:exit={() => console.log(\`\${color} exited\`)}
	>
		<div style:background={color} style:height="400px"></div>
	</Observe>
{/each}`}}}),y()}k.__docgen={data:[],name:"Observe.stories.svelte"};const G=M(k,W),Z=["Default"],$={...G.Default,tags:["svelte-csf-v5"]};export{$ as Default,Z as __namedExportsOrder,W as default};
