import{p as u,i as _,ah as l,t as k,a,c as s,f as d,b as S,s as H,n as U,g as I,e as Z,h as N,ax as ee,ag as te,ad as ne,af as ie,K as M}from"./iframe-DdiBZH3h.js";import{c as se,w as ae,i as oe,d as re,a as le}from"./create-runtime-stories-AZi_Zqsf.js";import{h as j}from"./html-CfLXfjeM.js";import{s as V}from"./attributes-DFa2Kp7L.js";import{s as O}from"./class-CzCJeWpz.js";import{e as de}from"./each-BVVoInqu.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var me=d('<img alt="" loading="lazy"/>'),ce=d('<div class="ons-document-list__item-image ons-document-list__item-image--file svelte-1w8s4wv" aria-hidden="true"><a tabindex="-1"><!></a></div>'),z=d('<span class="ons-u-vh"> </span>'),ue=d('<h3 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h3>'),pe=d('<h2 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h2>'),he=d('<ul class="ons-document-list__item-metadata ons-u-mb-2xs"><li class="ons-document-list__item-attribute" aria-hidden="true"></li></ul>'),fe=d('<div class="ons-document-list__item-description"><!> <!></div>'),ve=d('<li><!> <div class="ons-document-list__item-content"><div class="ons-document-list__item-header"><!> <!></div> <!></div></li>');function K(P,t){let f=u(t,"title",3,null),D=u(t,"headingTag",3,"h2"),v=u(t,"href",3,null),p=u(t,"description",3,null),h=u(t,"image",3,!1),o=u(t,"featured",3,!1),m=u(t,"meta",3,null);var C=ve();let x;var w=s(C);{var b=e=>{var n=ce(),i=s(n);let c;var B=s(i);{var F=r=>{var g=me();k(()=>V(g,"src",h())),a(r,g)};_(B,r=>{typeof h()=="string"&&r(F)})}k(()=>{c=O(i,1,"ons-document-list__image-link svelte-1w8s4wv",null,c,{"ons-document-list__image-link--placeholder":h()===!0}),V(i,"href",v())}),a(e,n)};_(w,e=>{h()&&e(b)})}var L=l(w,2),y=s(L),T=s(y);{var q=e=>{var n=ue(),i=s(n),c=s(i),B=l(c);{var F=r=>{var g=z(),E=s(g);k(()=>S(E,m())),a(r,g)};_(B,r=>{m()&&r(F)})}k(()=>{V(i,"href",v()),S(c,`${f()??""} `)}),a(e,n)},G=e=>{var n=pe(),i=s(n),c=s(i),B=l(c);{var F=r=>{var g=z(),E=s(g);k(()=>S(E,m())),a(r,g)};_(B,r=>{m()&&r(F)})}k(()=>{V(i,"href",v()),S(c,`${f()??""} `)}),a(e,n)};_(T,e=>{D()==="h3"?e(q):e(G,-1)})}var J=l(T,2);{var Q=e=>{var n=he(),i=s(n);j(i,m,!0),a(e,n)};_(J,e=>{m()&&e(Q)})}var X=l(y,2);{var Y=e=>{var n=fe(),i=s(n);H(i,()=>t.children??U);var c=l(i,2);j(c,p),a(e,n)};_(X,e=>{p()&&e(Y)})}k(()=>x=O(C,1,"ons-document-list__item",null,x,{"ons-document-list__item--featured":o()})),a(P,C)}K.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"title",visibility:"public",description:"The title of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"headingTag",visibility:"public",description:"Set the heading level for the title",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"h2",text:'"h2"'},{kind:"const",type:"string",value:"h3",text:'"h3"'}],text:'"h2" | "h3"'},static:!1,readonly:!1,defaultValue:'"h2"'},{name:"href",visibility:"public",description:"The URL of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"description",visibility:"public",description:"A description of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"image",visibility:"public",description:'Optional: URL of image to represent the document (use "true" for a placeholder)',keywords:[],kind:"let",type:{kind:"union",type:[{kind:"type",type:"string",text:"string"},{kind:"type",type:"boolean",text:"boolean"}],text:"string | boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"featured",visibility:"public",description:"Highlight document as a featured item (inset on grey background)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"meta",visibility:"public",description:"Metadata about the type of document linked to (can include HTML)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Document.svelte"};var ye=d("<ul><!> <!></ul>");function R(P,t){let f=u(t,"items",3,null),D=u(t,"compact",3,!1),v=u(t,"cls",3,null);var p=ye();let h;var o=s(p);H(o,()=>t.children??U);var m=l(o,2);{var C=w=>{var b=Z(),L=N(b);de(L,17,f,y=>y.title,(y,T)=>{K(y,ee(()=>I(T)))}),a(w,b)},x=te(()=>Array.isArray(f()));_(m,w=>{I(x)&&w(C)})}k(()=>h=O(p,1,`ons-document-list ${v()??""}`,"svelte-ge2cn7",h,{"ons-document-list--compact":D()})),a(P,p)}R.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"items",visibility:"public",description:"Optional: Define the documents as an array of {id, title, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:'{ title?: string | null | undefined; href?: string | null | undefined; description?: string | null | undefined; image?: string | boolean | undefined; featured?: boolean | undefined; meta?: string | ... 1 more ... | undefined; headingTag?: "h2" | ... 1 more ... | undefined; }[]'},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode. Removes horizonatal lines between documents",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"DocumentList.svelte"};const ge=`A component for defining a list of pages or links. Items can either be defined in an array of objects or as individual \`<Document>\` components.

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
`,ke={title:"Information and media/DocumentList",component:R,tags:["autodocs"],argTypes:{},parameters:ae(ge)},{Story:A}=re(),we=[{title:"Including everyone in Census",href:"#0",image:!0,meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",image:!0,description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],be=[{title:"Including everyone in Census",href:"#0",featured:!0,image:"https://service-manual.ons.gov.uk/img/large/census-monuments-lights-featured.jpg",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],De=[{title:"Including everyone in Census",href:"#0",meta:"Poster, PDF, 499KB, 1 page"},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages"}];var Ce=d("<!> <!>",1),xe=d("<!> <!> <!> <!>",1);function $(P,t){ne(t,!1),oe();var f=xe(),D=N(f);{let o=M(()=>({items:we}));A(D,{name:"Document list with images",get args(){return I(o)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}})}var v=l(D,2);{let o=M(()=>({items:be}));A(v,{name:"Article list with featured item",get args(){return I(o)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}})}var p=l(v,2);{let o=M(()=>({items:De,compact:!0}));A(p,{name:"Compact list, no description",get args(){return I(o)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}})}var h=l(p,2);{let o=M(()=>le(_e));A(h,{name:"Individually defined documents",asChild:!0,parameters:{...I(o),__svelteCsf:{rawCode:`<DocumentList>
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
</DocumentList>`}},children:(m,C)=>{R(m,{children:(x,w)=>{var b=Ce(),L=N(b);K(L,{href:"#0",title:"Including everyone in Census",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."});var y=l(L,2);K(y,{href:"#0",title:"Community handbook for Census 2021",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}),a(x,b)},$$slots:{default:!0}})},$$slots:{default:!0}})}a(P,f),ie()}$.__docgen={data:[],name:"DocumentList.stories.svelte"};const W=se($,ke),Ve=["DocumentListWithImages","ArticleListWithFeaturedItem","CompactListNoDescription","IndividuallyDefinedDocuments"],Ae={...W.DocumentListWithImages,tags:["svelte-csf-v5"]},Ke={...W.ArticleListWithFeaturedItem,tags:["svelte-csf-v5"]},We={...W.CompactListNoDescription,tags:["svelte-csf-v5"]},Ee={...W.IndividuallyDefinedDocuments,tags:["svelte-csf-v5"]};export{Ke as ArticleListWithFeaturedItem,We as CompactListNoDescription,Ae as DocumentListWithImages,Ee as IndividuallyDefinedDocuments,Ve as __namedExportsOrder,ke as default};
