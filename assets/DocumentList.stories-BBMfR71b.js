import{p as u,i as _,ah as l,t as k,a,c as s,f as d,b as V,s as z,n as R,g as I,e as Z,h as N,ax as ee,ag as te,ad as ne,af as ie,K as A}from"./iframe-CpnTW6Aq.js";import{c as se,w as ae,i as oe,d as re,a as le}from"./create-runtime-stories-C7cZUBmE.js";import{h as $}from"./html-BFPf_PCX.js";import{s as K}from"./attributes-DMUiWW_Z.js";import{s as j}from"./class-B_F942N2.js";import{e as de}from"./each-fvhRyThL.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var me=d('<img alt="" loading="lazy"/>'),ce=d('<div class="ons-document-list__item-image ons-document-list__item-image--file svelte-1w8s4wv" aria-hidden="true"><a tabindex="-1"><!></a></div>'),q=d('<span class="ons-u-vh"> </span>'),ue=d('<h3 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h3>'),pe=d('<h2 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h2>'),ve=d('<ul class="ons-document-list__item-metadata ons-u-mb-2xs"><li class="ons-document-list__item-attribute" aria-hidden="true"></li></ul>'),he=d('<div class="ons-document-list__item-description"><!> <!></div>'),fe=d('<li><!> <div class="ons-document-list__item-content"><div class="ons-document-list__item-header"><!> <!></div> <!></div></li>');function S(P,t){let h=u(t,"title",3,null),D=u(t,"headingTag",3,"h2"),f=u(t,"href",3,null),p=u(t,"description",3,null),v=u(t,"image",3,!1),o=u(t,"featured",3,!1),m=u(t,"meta",3,null);var x=fe();let C;var w=s(x);{var b=e=>{var n=ce(),i=s(n);let c;var B=s(i);{var F=r=>{var g=me();k(()=>K(g,"src",v())),a(r,g)};_(B,r=>{typeof v()=="string"&&r(F)})}k(()=>{c=j(i,1,"ons-document-list__image-link svelte-1w8s4wv",null,c,{"ons-document-list__image-link--placeholder":v()===!0}),K(i,"href",f())}),a(e,n)};_(w,e=>{v()&&e(b)})}var L=l(w,2),y=s(L),T=s(y);{var H=e=>{var n=ue(),i=s(n),c=s(i),B=l(c);{var F=r=>{var g=q(),E=s(g);k(()=>V(E,m())),a(r,g)};_(B,r=>{m()&&r(F)})}k(()=>{K(i,"href",f()),V(c,`${h()??""} `)}),a(e,n)},J=e=>{var n=pe(),i=s(n),c=s(i),B=l(c);{var F=r=>{var g=q(),E=s(g);k(()=>V(E,m())),a(r,g)};_(B,r=>{m()&&r(F)})}k(()=>{K(i,"href",f()),V(c,`${h()??""} `)}),a(e,n)};_(T,e=>{D()==="h3"?e(H):e(J,-1)})}var Q=l(T,2);{var U=e=>{var n=ve(),i=s(n);$(i,m,!0),a(e,n)};_(Q,e=>{m()&&e(U)})}var X=l(y,2);{var Y=e=>{var n=he(),i=s(n);z(i,()=>t.children??R);var c=l(i,2);$(c,p),a(e,n)};_(X,e=>{p()&&e(Y)})}k(()=>C=j(x,1,"ons-document-list__item",null,C,{"ons-document-list__item--featured":o()})),a(P,x)}S.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"headingTag",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"h2",text:'"h2"'},{kind:"const",type:"string",value:"h3",text:'"h3"'}],text:'"h2" | "h3"'},static:!1,readonly:!1,defaultValue:'"h2"'},{name:"href",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"description",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"image",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"type",type:"string",text:"string"},{kind:"type",type:"boolean",text:"boolean"}],text:"string | boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"featured",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"meta",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Document.svelte"};var ye=d("<ul><!> <!></ul>");function O(P,t){let h=u(t,"items",3,null),D=u(t,"compact",3,!1),f=u(t,"cls",3,null);var p=ye();let v;var o=s(p);z(o,()=>t.children??R);var m=l(o,2);{var x=w=>{var b=Z(),L=N(b);de(L,17,h,y=>y.title,(y,T)=>{S(y,ee(()=>I(T)))}),a(w,b)},C=te(()=>Array.isArray(h()));_(m,w=>{I(C)&&w(x)})}k(()=>v=j(p,1,`ons-document-list ${f()??""}`,"svelte-ge2cn7",v,{"ons-document-list--compact":D()})),a(P,p)}O.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:'{ title?: string | null | undefined; href?: string | null | undefined; description?: string | null | undefined; image?: string | boolean | undefined; featured?: boolean | undefined; meta?: string | ... 1 more ... | undefined; headingTag?: "h2" | ... 1 more ... | undefined; }[]'},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"DocumentList.svelte"};const ge=`A component for defining a list of pages or links. Items can either be defined in an array of objects or as individual \`<Document>\` components.

In Svelte 5, nested \`<Document>\` elements are rendered through the \`children\` snippet; the \`items\` array form is unchanged.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/document-list).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { DocumentList } from "@onsvisual/svelte-components";

  const items = [
		{
			title: "Including everyone in Census",
			href: "#0",
			meta: "Poster, PDF, 499KB, 1 page",
			description: "Empty belly poster, aimed at advertising census events."
		},
		{
			title: "Community handbook for Census 2021",
			href: "#0",
			meta: "Booklet,PDF, 3.3MB, 16 pages",
			description:
				"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."
		}
	];
<\/script>

<DocumentList {items}>
\`\`\`
`,_e=`In this example, the individual documents are defined explicitly.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { DocumentList, Document } from "@onsvisual/svelte-components";
<\/script>

<DocumentList>
  <Document
    href="#0"
    title="Including everyone in Census"
    meta="Poster, PDF, 499KB, 1 page"
    description="Empty belly poster, aimed at advertising census events."
  />
  <Document
    href="#0"
    title="Community handbook for Census 2021"
    meta="Booklet,PDF, 3.3MB, 16 pages"
    description="This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."
  />
</DocumentList>
\`\`\`
`,ke={title:"Information and media/DocumentList",component:O,tags:["autodocs"],argTypes:{},parameters:ae(ge)},{Story:M}=re(),we=[{title:"Including everyone in Census",href:"#0",image:!0,meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",image:!0,description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],be=[{title:"Including everyone in Census",href:"#0",featured:!0,image:"https://service-manual.ons.gov.uk/img/large/census-monuments-lights-featured.jpg",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],De=[{title:"Including everyone in Census",href:"#0",meta:"Poster, PDF, 499KB, 1 page"},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages"}];var xe=d("<!> <!>",1),Ce=d("<!> <!> <!> <!>",1);function G(P,t){ne(t,!1),oe();var h=Ce(),D=N(h);{let o=A(()=>({items:we}));M(D,{name:"Document list with images",get args(){return I(o)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}})}var f=l(D,2);{let o=A(()=>({items:be}));M(f,{name:"Article list with featured item",get args(){return I(o)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}})}var p=l(f,2);{let o=A(()=>({items:De,compact:!0}));M(p,{name:"Compact list, no description",get args(){return I(o)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}})}var v=l(p,2);{let o=A(()=>le(_e));M(v,{name:"Individually defined documents",asChild:!0,parameters:{...I(o),__svelteCsf:{rawCode:`<DocumentList>
	<Document
		href="#0"
		title="Including everyone in Census"
		meta="Poster, PDF, 499KB, 1 page"
		description="Empty belly poster, aimed at advertising census events."
	/>
	<Document
		href="#0"
		title="Community handbook for Census 2021"
		meta="Booklet,PDF, 3.3MB, 16 pages"
		description="This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."
	/>
</DocumentList>`}},children:(m,x)=>{O(m,{children:(C,w)=>{var b=xe(),L=N(b);S(L,{href:"#0",title:"Including everyone in Census",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."});var y=l(L,2);S(y,{href:"#0",title:"Community handbook for Census 2021",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}),a(C,b)},$$slots:{default:!0}})},$$slots:{default:!0}})}a(P,h),ie()}G.__docgen={data:[],name:"DocumentList.stories.svelte"};const W=se(G,ke),Ke=["DocumentListWithImages","ArticleListWithFeaturedItem","CompactListNoDescription","IndividuallyDefinedDocuments"],Me={...W.DocumentListWithImages,tags:["svelte-csf-v5"]},Se={...W.ArticleListWithFeaturedItem,tags:["svelte-csf-v5"]},We={...W.CompactListNoDescription,tags:["svelte-csf-v5"]},Ee={...W.IndividuallyDefinedDocuments,tags:["svelte-csf-v5"]};export{Se as ArticleListWithFeaturedItem,We as CompactListNoDescription,Me as DocumentListWithImages,Ee as IndividuallyDefinedDocuments,Ke as __namedExportsOrder,ke as default};
