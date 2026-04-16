import{A as _,p as h,l as u,m as g,i as A,j as l,I as b,f as L,t as k,W as D,X as M,k as H}from"./iframe-BbbdPRT3.js";import{i as w,w as S,c as I,d as O}from"./create-runtime-stories-BDNKaz6P.js";import{e as C,i as V}from"./each-CQ9gxpab.js";import{s as j}from"./attributes-D2OsbY2h.js";import{s as E}from"./slot-BP_Qo1ZM.js";import{a as T}from"./actions-DFMsxQvl.js";import{s as W}from"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";var B=L("<div></div>");function v(s,o){_(o,!1);let n=h(o,"entered",12,!1),d=h(o,"initialHeight",8,400),p=h(o,"rootMargin",8,200);const m=(t,a)=>{t.forEach(e=>{console.log(e);let i=e.isIntersecting;!n()&&i&&(a.unobserve(e.target),n(!0))})};function r(t){let a={root:document,rootMargin:`${p()}px`};const e=new IntersectionObserver(m,a);return e.observe(t),{destroy:()=>{var i;return(i=e==null?void 0:e.unobserve)==null?void 0:i.call(e,t)}}}w();var f=u(),c=g(f);{var y=t=>{var a=u(),e=g(a);E(e,o,"default",{},null),l(t,a)},z=t=>{var a=B();let e;T(a,i=>r==null?void 0:r(i)),k(()=>e=W(a,"",e,{height:`${+d()||100}px`})),l(t,a)};A(c,t=>{n()?t(y):t(z,!1)})}l(s,f),b()}v.__docgen={data:[{name:"entered",visibility:"public",description:"Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"initialHeight",visibility:"public",description:'Set the initial "placeholder" height of the component in pixels.',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"400"},{name:"rootMargin",visibility:"public",description:"Set how many pixels from the viewport you want lazy loading to kick in.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"200"}],name:"LazyLoad.svelte"};const P=`A wrapper component that uses IntersectionObserver to allow the Svelte components or HTML elements it contains to be lazy loaded, ie. to be added to the page (or DOM) only when they enter the viewport.

Optionally, you can use the **initialHeight** to set a placeholder height in pixels (default 400), and you can use **rootMargin** to set how many pixels before the viewport you want lazy loading to kick in (default 200).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { LazyLoad } from "@onsvisual/svelte-components";
<\/script>

{#each Array.from(Array(20).keys()) as i}
  <LazyLoad>
    <div class="img-container">
      <img src="https://picsum.photos/400/300?random={i}" alt="" />
    </div>
  </LazyLoad>
{/each}

<style>
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: #eee;
    margin-bottom: 10px;
  }
</style>
\`\`\`
`,R=(s,o=D)=>{var n=u(),d=g(n);C(d,0,()=>Array.from(Array(15).keys()),V,(p,m)=>{v(p,M(o,{children:(r,f)=>{var c=F(),y=H(c);k(()=>j(y,"src",`https://picsum.photos/400/300?random=${m??""}`)),l(r,c)},$$slots:{default:!0}}))}),l(s,n)},X={title:"Wrappers/LazyLoad",component:v,tags:["autodocs"],argTypes:{},parameters:S(P)},{Story:q}=O();var F=L('<div class="img-container svelte-rybo60"><img alt=""/></div>');function x(s,o){_(o,!1),w(),q(s,{name:"Default",args:{},get template(){return R},parameters:{__svelteCsf:{rawCode:`{#each Array.from(Array(15).keys()) as i}
	<LazyLoad {...args}>
		<div class="img-container">
			<img src="https://picsum.photos/400/300?random={i}" alt="" />
		</div>
	</LazyLoad>
{/each}`}}}),b()}x.__docgen={data:[],name:"LazyLoad.stories.svelte"};const G=I(x,X),ee=["Default"],te={...G.Default,tags:["svelte-csf-v5"]};export{te as Default,ee as __namedExportsOrder,X as default};
