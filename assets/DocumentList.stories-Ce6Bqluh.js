import{a as c,j as d,i as g,k as m,n as t,t as _,o as P,e as o,q as A,c as Y,f as K,_ as Z,g as S,p as $,h as ee}from"./iframe-B3b0x8CI.js";import{w as te,c as ne,i as se,d as ie,a as ae}from"./create-runtime-stories-BDWGkGAJ.js";import{h as q}from"./html-BVoLQh3I.js";import{s as H}from"./slot-BP_Qo1ZM.js";import{s as M}from"./attributes-BVKlW9hW.js";import{s as O}from"./class-Dzh9Da8g.js";import{e as oe,i as re}from"./each-BB2t4dHV.js";import"./attributes-Co-1QMVx.js";var le=d('<img alt="" loading="lazy"/>'),de=d('<div class="ons-document-list__item-image ons-document-list__item-image--file svelte-17fgguo" aria-hidden="true"><a tabindex="-1"><!></a></div>'),me=d('<span class="ons-u-vh"> </span>'),ue=d('<h3 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h3>'),ce=d('<span class="ons-u-vh"> </span>'),pe=d('<h2 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h2>'),he=d('<ul class="ons-document-list__item-metadata ons-u-mb-2xs"><li class="ons-document-list__item-attribute" aria-hidden="true"><!></li></ul>'),ve=d('<div class="ons-document-list__item-description"><!> <!></div>'),fe=d('<li><!> <div class="ons-document-list__item-content"><div class="ons-document-list__item-header"><!> <!></div> <!></div></li>');function V(b,n){let p=c(n,"title",8,null),k=c(n,"headingTag",8,"h2"),u=c(n,"href",8,null),h=c(n,"description",8,null),v=c(n,"image",8,!1),D=c(n,"featured",8,!1),r=c(n,"meta",8,null);var f=fe();let x;var w=t(f);{var B=e=>{var s=de(),i=t(s);let l;var L=t(i);{var I=a=>{var y=le();_(()=>M(y,"src",v())),o(a,y)};g(L,a=>{typeof v()=="string"&&a(I)})}_(a=>{l=O(i,1,"ons-document-list__image-link svelte-17fgguo",null,l,a),M(i,"href",u())},[()=>({"ons-document-list__image-link--placeholder":v()===!0})],P),o(e,s)};g(w,e=>{v()&&e(B)})}var F=m(w,2),C=t(F),T=t(C);{var z=e=>{var s=ue(),i=t(s),l=t(i),L=m(l);{var I=a=>{var y=me(),W=t(y);_(()=>A(W,r())),o(a,y)};g(L,a=>{r()&&a(I)})}_(()=>{M(i,"href",u()),A(l,`${p()??""} `)}),o(e,s)},N=e=>{var s=pe(),i=t(s),l=t(i),L=m(l);{var I=a=>{var y=ce(),W=t(y);_(()=>A(W,r())),o(a,y)};g(L,a=>{r()&&a(I)})}_(()=>{M(i,"href",u()),A(l,`${p()??""} `)}),o(e,s)};g(T,e=>{k()==="h3"?e(z):e(N,!1)})}var G=m(T,2);{var J=e=>{var s=he(),i=t(s),l=t(i);q(l,r),o(e,s)};g(G,e=>{r()&&e(J)})}var Q=m(C,2);{var X=e=>{var s=ve(),i=t(s);H(i,n,"default",{},null);var l=m(i,2);q(l,h),o(e,s)};g(Q,e=>{h()&&e(X)})}_(e=>x=O(f,1,"ons-document-list__item",null,x,e),[()=>({"ons-document-list__item--featured":D()})],P),o(b,f)}V.__docgen={data:[{name:"title",visibility:"public",description:"The title of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"headingTag",visibility:"public",description:"Set the heading level for the title",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"h2",text:'"h2"'},{kind:"const",type:"string",value:"h3",text:'"h3"'}],text:'"h2" | "h3"'},static:!1,readonly:!1,defaultValue:'"h2"'},{name:"href",visibility:"public",description:"The URL of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"description",visibility:"public",description:"A description of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"image",visibility:"public",description:'Optional: URL of image to represent the document (use "true" for a placeholder)',keywords:[],kind:"let",type:{kind:"union",type:[{kind:"type",type:"string",text:"string"},{kind:"type",type:"boolean",text:"boolean"}],text:"string | boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"featured",visibility:"public",description:"Highlight document as a featured item (inset on grey background)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"meta",visibility:"public",description:"Metadata about the type of document linked to (can include HTML)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Document.svelte"};var ye=d("<ul><!> <!></ul>");function j(b,n){let p=c(n,"items",8,null),k=c(n,"cls",8,null);var u=ye(),h=t(u);H(h,n,"default",{},null);var v=m(h,2);{var D=r=>{var f=Y(),x=K(f);oe(x,1,p,re,(w,B)=>{V(w,Z(()=>S(B)))}),o(r,f)};g(v,r=>{Array.isArray(p())&&r(D)})}_(()=>O(u,1,`ons-document-list ${k()??""}`)),o(b,u)}j.__docgen={data:[{name:"items",visibility:"public",description:"Optional: Define the documents as an array of {id, title, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"DocumentList.svelte"};const ge=`A component for defining a list of pages or links. Items can either be defined in an array of objects or as individual \`<Document>\` components.\r
\r
Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/document-list).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { DocumentList } from "@onsvisual/svelte-components";\r
\r
  const items = [\r
		{\r
			title: "Including everyone in Census",\r
			href: "#0",\r
			meta: "Poster, PDF, 499KB, 1 page",\r
			description: "Empty belly poster, aimed at advertising census events."\r
		},\r
		{\r
			title: "Community handbook for Census 2021",\r
			href: "#0",\r
			meta: "Booklet,PDF, 3.3MB, 16 pages",\r
			description:\r
				"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."\r
		}\r
	];\r
<\/script>\r
\r
<DocumentList {items}>\r
\`\`\`\r
`,_e=`In this example, the individual documents are defined explicitly.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { DocumentList, Document } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<DocumentList>\r
  <Document\r
    href="#0"\r
    title="Including everyone in Census"\r
    meta="Poster, PDF, 499KB, 1 page"\r
    description="Empty belly poster, aimed at advertising census events."\r
  />\r
  <Document\r
    href="#0"\r
    title="Community handbook for Census 2021"\r
    meta="Booklet,PDF, 3.3MB, 16 pages"\r
    description="This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."\r
  />\r
</DocumentList>\r
\`\`\`\r
`,ke={title:"Layout/DocumentList",component:j,tags:["autodocs"],argTypes:{},parameters:te(ge)},{Story:E}=ie(),we=[{title:"Including everyone in Census",href:"#0",image:!0,meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",image:!0,description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],be=[{title:"Including everyone in Census",href:"#0",featured:!0,image:"https://service-manual.ons.gov.uk/img/large/census-monuments-lights-featured.jpg",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}];var De=d("<!> <!>",1),xe=d("<!> <!> <!>",1);function U(b,n){$(n,!1),se();var p=xe(),k=K(p);const u=P(()=>({items:we}));E(k,{name:"Document list with images",get args(){return S(u)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}});var h=m(k,2);const v=P(()=>({items:be}));E(h,{name:"Article list with featured item",get args(){return S(v)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}});var D=m(h,2);const r=P(()=>ae(_e));E(D,{name:"Individually defined documents",asChild:!0,parameters:{...S(r),__svelteCsf:{rawCode:`<DocumentList>\r
	<Document\r
		href="#0"\r
		title="Including everyone in Census"\r
		meta="Poster, PDF, 499KB, 1 page"\r
		description="Empty belly poster, aimed at advertising census events."\r
	/>\r
	<Document\r
		href="#0"\r
		title="Community handbook for Census 2021"\r
		meta="Booklet,PDF, 3.3MB, 16 pages"\r
		description="This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."\r
	/>\r
</DocumentList>`}},children:(f,x)=>{j(f,{children:(w,B)=>{var F=De(),C=K(F);V(C,{href:"#0",title:"Including everyone in Census",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."});var T=m(C,2);V(T,{href:"#0",title:"Community handbook for Census 2021",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}),o(w,F)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(b,p),ee()}U.__docgen={data:[],name:"DocumentList.stories.svelte"};const R=ne(U,ke),Me=["DocumentListWithImages","ArticleListWithFeaturedItem","IndividuallyDefinedDocuments"],Se={...R.DocumentListWithImages,tags:["svelte-csf-v5"]},Ve={...R.ArticleListWithFeaturedItem,tags:["svelte-csf-v5"]},We={...R.IndividuallyDefinedDocuments,tags:["svelte-csf-v5"]};export{Ve as ArticleListWithFeaturedItem,Se as DocumentListWithImages,We as IndividuallyDefinedDocuments,Me as __namedExportsOrder,ke as default};
