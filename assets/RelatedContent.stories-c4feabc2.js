import{S as x,i as S,s as M,x as m,Q as A,w as v,L as _,a as w,P as p,R as P,z as R,d as b,p as H,j as u,m as f,k as I,l as L,b as $,t as g,n as h}from"./index-93ed49d9.js";import{p as j,w as k,M as q,T as B,S as E}from"./collect-stories-46e6ba01.js";const C=`Displays related content

Based on this [ONS Design System component(https://service-manual.ons.gov.uk/design-system/components/related-content) for related content.

WORK IN PROGRESS

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { RelatedContent } from "@onsvisual/svelte-components";
<\/script>

<PhaseBanner />
<!-- page header -->
<!-- page contents -->
\`\`\`
`;function G(c){let t,a,n,o,s,i,r,d;return{c(){t=m("aside"),a=m("div"),n=m("h2"),o=A(c[0]),s=v(),i=m("div"),i.innerHTML=`<nav class="ons-related-content__navigation" aria-labelledby="related-help-with-the-census"><ul class="ons-list ons-list--bare"><li class="ons-list__item"><a href="#0" class="ons-list__link">I’m moving house</a></li> 
          <li class="ons-list__item"><a href="#0" class="ons-list__link">What if I’m away or abroad on Census Day?</a></li> 
          <li class="ons-list__item"><a href="#0" class="ons-list__link">Get an access code or paper census</a></li> 
          <li class="ons-list__item"><a href="#0" class="ons-list__link">Find a census support centre</a></li> 
          <li class="ons-list__item"><a href="#0" class="ons-list__link">Languages</a></li> 
          <li class="ons-list__item"><a href="#0" class="ons-list__link">Accessibility</a></li></ul></nav>`,r=v(),d=m("div"),d.innerHTML=`<h2 class="ons-related-content__title ons-u-fs-r--b ons-u-mb-xs" id="related-content">Related content</h2> 
    <div class="ons-related-content__content"><nav class="ons-related-content__navigation" aria-labelledby="related-content"><ul class="ons-list ons-list--bare"><li class="ons-list__item"><a href="#0" class="ons-list__link">How we will contact or visit you</a></li> 
          <li class="ons-list__item"><a href="#0" class="ons-list__link">Media enquiries</a></li></ul></nav></div>`,_(n,"class","ons-related-content__title ons-u-fs-r--b ons-u-mb-xs"),_(n,"id","related-help-with-the-census"),_(i,"class","ons-related-content__content"),_(a,"class","ons-related-content__section"),_(d,"class","ons-related-content__section"),_(t,"class","ons-related-content"),_(t,"aria-label","Related content")},m(e,l){w(e,t,l),p(t,a),p(a,n),p(n,o),p(a,s),p(a,i),p(t,r),p(t,d)},p(e,[l]){l&1&&P(o,e[0])},i:R,o:R,d(e){e&&b(t)}}}function N(c,t,a){let{title:n="Help with the census"}=t;return c.$$set=o=>{"title"in o&&a(0,n=o.title)},[n]}class y extends x{constructor(t){super(),S(this,t,N,G,M,{title:0})}}y.__docgen={version:3,name:"RelatedContent.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"H2 title",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Help with the census"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function W(c){let t,a;const n=[c[0]];let o={};for(let s=0;s<n.length;s+=1)o=H(o,n[s]);return t=new y({props:o}),{c(){u(t.$$.fragment)},m(s,i){f(t,s,i),a=!0},p(s,i){const r=i&1?I(n,[L(s[0])]):{};t.$set(r)},i(s){a||($(t.$$.fragment,s),a=!0)},o(s){g(t.$$.fragment,s),a=!1},d(s){h(t,s)}}}function z(c){let t,a,n,o,s,i;const r=[{title:"Layout/RelatedContent"},{component:y},{argTypes:{}},k(C)];let d={};for(let e=0;e<r.length;e+=1)d=H(d,r[e]);return t=new q({props:d}),n=new B({props:{$$slots:{default:[W,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:c}}}),s=new E({props:{name:"Default",args:{title:"Default title"}}}),{c(){u(t.$$.fragment),a=v(),u(n.$$.fragment),o=v(),u(s.$$.fragment)},m(e,l){f(t,e,l),w(e,a,l),f(n,e,l),w(e,o,l),f(s,e,l),i=!0},p(e,[l]){const O=l&0?I(r,[r[0],l&0&&{component:y},r[2],l&0&&L(k(C))]):{};t.$set(O);const D={};l&3&&(D.$$scope={dirty:l,ctx:e}),n.$set(D)},i(e){i||($(t.$$.fragment,e),$(n.$$.fragment,e),$(s.$$.fragment,e),i=!0)},o(e){g(t.$$.fragment,e),g(n.$$.fragment,e),g(s.$$.fragment,e),i=!1},d(e){h(t,e),e&&b(a),h(n,e),e&&b(o),h(s,e)}}}class F extends x{constructor(t){super(),S(this,t,null,z,M,{})}}const T=j(F,{meta:{title:"Layout/RelatedContent"},stories:{"tpl:default":{storyId:"layout-relatedcontent--default",name:"default",template:!0,source:"<RelatedContent {...args} />",hasArgs:!0},Default:{storyId:"layout-relatedcontent--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","RelatedContent","withComponentDocs"]}),V=T.meta,J=["Default"],U=T.stories.Default;export{U as Default,J as __namedExportsOrder,V as default};
//# sourceMappingURL=RelatedContent.stories-c4feabc2.js.map
