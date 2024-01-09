import{S as O,i as q,s as B,p as A,j as u,w as v,m as f,a as x,k as M,l as T,b as h,t as b,n as $,d as _,x as E,y as d}from"./index-8607ceaf.js";import{p as N,w as I,M as z,T as F,S as y}from"./collect-stories-45ecfa9a.js";import{C as D}from"./Checkbox-0d567972.js";const G=`A checkbox element with various styling and labelling options. Its "checked" attribute can be bound to a Svelte boolean (true/false) variable.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Checkbox } from "@onsvisual/svelte-components";

  let checked = false;
<\/script>

<Checkbox id="checkbox" label="Select this" bind:checked />
\`\`\`
`;function H(i){let s,r,a;const p=[i[0]];let l={};for(let t=0;t<p.length;t+=1)l=A(l,p[t]);return r=new D({props:l}),{c(){var t,o;s=E("div"),u(r.$$.fragment),d(s,"padding","12px"),d(s,"background",((t=i[0])==null?void 0:t.variant)==="ghost"?"var(--ons-color-ocean-blue)":null),d(s,"color",((o=i[0])==null?void 0:o.variant)==="ghost"?"white":null)},m(t,o){x(t,s,o),f(r,s,null),a=!0},p(t,o){var c,m;const g=o&1?M(p,[T(t[0])]):{};r.$set(g),o&1&&d(s,"background",((c=t[0])==null?void 0:c.variant)==="ghost"?"var(--ons-color-ocean-blue)":null),o&1&&d(s,"color",((m=t[0])==null?void 0:m.variant)==="ghost"?"white":null)},i(t){a||(h(r.$$.fragment,t),a=!0)},o(t){b(r.$$.fragment,t),a=!1},d(t){t&&_(s),$(r)}}}function J(i){let s,r,a,p,l,t,o,g,c,m;const k=[{title:"Inputs/Checkbox"},{component:D},{argTypes:{}},I(G)];let w={};for(let e=0;e<k.length;e+=1)w=A(w,k[e]);return s=new z({props:w}),a=new F({props:{$$slots:{default:[H,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:i}}}),l=new y({props:{name:"Default",args:{id:"checkbox1",label:"Select this"}}}),o=new y({props:{name:"Compact",args:{id:"checkbox2",label:"Select this",compact:!0}}}),c=new y({props:{name:"Ghost checkbox",args:{id:"checkbox3",label:"Select this",variant:"ghost"}}}),{c(){u(s.$$.fragment),r=v(),u(a.$$.fragment),p=v(),u(l.$$.fragment),t=v(),u(o.$$.fragment),g=v(),u(c.$$.fragment)},m(e,n){f(s,e,n),x(e,r,n),f(a,e,n),x(e,p,n),f(l,e,n),x(e,t,n),f(o,e,n),x(e,g,n),f(c,e,n),m=!0},p(e,[n]){const j=n&0?M(k,[k[0],n&0&&{component:D},k[2],n&0&&T(I(G))]):{};s.$set(j);const S={};n&3&&(S.$$scope={dirty:n,ctx:e}),a.$set(S)},i(e){m||(h(s.$$.fragment,e),h(a.$$.fragment,e),h(l.$$.fragment,e),h(o.$$.fragment,e),h(c.$$.fragment,e),m=!0)},o(e){b(s.$$.fragment,e),b(a.$$.fragment,e),b(l.$$.fragment,e),b(o.$$.fragment,e),b(c.$$.fragment,e),m=!1},d(e){$(s,e),e&&_(r),$(a,e),e&&_(p),$(l,e),e&&_(t),$(o,e),e&&_(g),$(c,e)}}}class K extends O{constructor(s){super(),q(this,s,null,J,B,{})}}const C=N(K,{meta:{title:"Inputs/Checkbox"},stories:{"tpl:default":{storyId:"inputs-checkbox--default",name:"default",template:!0,source:`<div
  style:padding="12px"
  style:background="{args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}"
  style:color="{args?.variant === "ghost" ? "white" : null}"
>
  <Checkbox {...args} />
</div>`,hasArgs:!0},Default:{storyId:"inputs-checkbox--default",name:"Default",template:!1,hasArgs:!1},Compact:{storyId:"inputs-checkbox--compact",name:"Compact",template:!1,hasArgs:!1},GhostCheckbox:{storyId:"inputs-checkbox--ghost-checkbox",name:"Ghost checkbox",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Checkbox","withComponentDocs"]}),R=C.meta,U=["Default","Compact","GhostCheckbox"],V=C.stories.Default,W=C.stories.Compact,X=C.stories.GhostCheckbox;export{W as Compact,V as Default,X as GhostCheckbox,U as __namedExportsOrder,R as default};
//# sourceMappingURL=Checkbox.stories-357c5f48.js.map
