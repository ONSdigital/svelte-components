import{s as c,a as o,f as r,n as i,c as l,ad as f,af as m,ax as _}from"./iframe-DgBBsZ9Q.js";import{c as u,w as v,i as g,d as h}from"./create-runtime-stories-DfDjLEdu.js";import"./preload-helper-Dp1pzeXC.js";var I=r('<div class="ons-text-indent"><!></div>');function s(t,e){var n=I(),a=l(n);c(a,()=>e.children??i),o(t,n)}s.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"Indent.svelte"};const x=`An indented block of text.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Indent } from "@onsvisual/svelte-components";
<\/script>

<Indent>{indented_text}</Indent>
\`\`\`
`,D=(t,e=i)=>{s(t,_(e,{children:(n,a)=>{var p=k();o(n,p)},$$slots:{default:!0}}))},$={title:"Decorators/Indent",component:s,tags:["autodocs"],argTypes:{},parameters:v(x)},{Story:y}=h();var k=r("<p>An indented paragraph of text.</p>");function d(t,e){f(e,!1),g(),y(t,{name:"Default",args:{},get template(){return D},parameters:{__svelteCsf:{rawCode:`<Indent {...args}>
	<p>An indented paragraph of text.</p>
</Indent>`}}}),m()}d.__docgen={data:[],name:"Indent.stories.svelte"};const w=u(d,$),S=["Default"],E={...w.Default,tags:["svelte-csf-v5"]};export{E as Default,S as __namedExportsOrder,$ as default};
