import{a as u,j as l,i as y,k as d,n,t as g,o as D,e as o,q as A,c as Y,f as j,_ as Z,g as T,p as $,h as ee}from"./iframe-BXL9GsHe.js";import{w as te,c as ne,i as se,d as ie,a as ae}from"./create-runtime-stories-BndbA_YL.js";import{h as z}from"./html-bU5QB4DO.js";import{s as H}from"./slot-BP_Qo1ZM.js";import{s as S}from"./attributes-keP7PBQf.js";import{s as R}from"./class-Dzh9Da8g.js";import{e as oe,i as re}from"./each-C1-l3CJ_.js";import"./attributes-Co-1QMVx.js";var le=l('<img alt="" loading="lazy"/>'),de=l('<div class="ons-document-list__item-image ons-document-list__item-image--file svelte-17fgguo" aria-hidden="true"><a tabindex="-1"><!></a></div>'),me=l('<span class="ons-u-vh"> </span>'),ce=l('<h3 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h3>'),ue=l('<span class="ons-u-vh"> </span>'),pe=l('<h2 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h2>'),he=l('<ul class="ons-document-list__item-metadata ons-u-mb-2xs"><li class="ons-document-list__item-attribute" aria-hidden="true"><!></li></ul>'),ve=l('<div class="ons-document-list__item-description"><!> <!></div>'),fe=l('<li><!> <div class="ons-document-list__item-content"><div class="ons-document-list__item-header"><!> <!></div> <!></div></li>');function E(C,t){let v=u(t,"title",8,null),x=u(t,"headingTag",8,"h2"),_=u(t,"href",8,null),p=u(t,"description",8,null),h=u(t,"image",8,!1),k=u(t,"featured",8,!1),m=u(t,"meta",8,null);var w=fe();let c;var b=n(w);{var M=e=>{var s=de(),i=n(s);let r;var I=n(i);{var F=a=>{var f=le();g(()=>S(f,"src",h())),o(a,f)};y(I,a=>{typeof h()=="string"&&a(F)})}g(a=>{r=R(i,1,"ons-document-list__image-link svelte-17fgguo",null,r,a),S(i,"href",_())},[()=>({"ons-document-list__image-link--placeholder":h()===!0})],D),o(e,s)};y(b,e=>{h()&&e(M)})}var L=d(b,2),P=n(L),B=n(P);{var V=e=>{var s=ce(),i=n(s),r=n(i),I=d(r);{var F=a=>{var f=me(),O=n(f);g(()=>A(O,m())),o(a,f)};y(I,a=>{m()&&a(F)})}g(()=>{S(i,"href",_()),A(r,`${v()??""} `)}),o(e,s)},N=e=>{var s=pe(),i=n(s),r=n(i),I=d(r);{var F=a=>{var f=ue(),O=n(f);g(()=>A(O,m())),o(a,f)};y(I,a=>{m()&&a(F)})}g(()=>{S(i,"href",_()),A(r,`${v()??""} `)}),o(e,s)};y(B,e=>{x()==="h3"?e(V):e(N,!1)})}var G=d(B,2);{var J=e=>{var s=he(),i=n(s),r=n(i);z(r,m),o(e,s)};y(G,e=>{m()&&e(J)})}var Q=d(P,2);{var X=e=>{var s=ve(),i=n(s);H(i,t,"default",{},null);var r=d(i,2);z(r,p),o(e,s)};y(Q,e=>{p()&&e(X)})}g(e=>c=R(w,1,"ons-document-list__item",null,c,e),[()=>({"ons-document-list__item--featured":k()})],D),o(C,w)}E.__docgen={data:[{name:"title",visibility:"public",description:"The title of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"headingTag",visibility:"public",description:"Set the heading level for the title",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"h2",text:'"h2"'},{kind:"const",type:"string",value:"h3",text:'"h3"'}],text:'"h2" | "h3"'},static:!1,readonly:!1,defaultValue:'"h2"'},{name:"href",visibility:"public",description:"The URL of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"description",visibility:"public",description:"A description of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"image",visibility:"public",description:'Optional: URL of image to represent the document (use "true" for a placeholder)',keywords:[],kind:"let",type:{kind:"union",type:[{kind:"type",type:"string",text:"string"},{kind:"type",type:"boolean",text:"boolean"}],text:"string | boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"featured",visibility:"public",description:"Highlight document as a featured item (inset on grey background)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"meta",visibility:"public",description:"Metadata about the type of document linked to (can include HTML)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Document.svelte"};var ye=l("<ul><!> <!></ul>");function q(C,t){let v=u(t,"items",8,null),x=u(t,"compact",8,!1),_=u(t,"cls",8,null);var p=ye();let h;var k=n(p);H(k,t,"default",{},null);var m=d(k,2);{var w=c=>{var b=Y(),M=j(b);oe(M,1,v,re,(L,P)=>{E(L,Z(()=>T(P)))}),o(c,b)};y(m,c=>{Array.isArray(v())&&c(w)})}g(c=>h=R(p,1,`ons-document-list ${_()??""}`,"svelte-5a3iai",h,c),[()=>({"ons-document-list--compact":x()})],D),o(C,p)}q.__docgen={data:[{name:"items",visibility:"public",description:"Optional: Define the documents as an array of {id, title, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode. Removes horizonatal lines between documents",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"DocumentList.svelte"};const ge=`A component for defining a list of pages or links. Items can either be defined in an array of objects or as individual \`<Document>\` components.\r
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
`,ke={title:"Layout/DocumentList",component:q,tags:["autodocs"],argTypes:{},parameters:te(ge)},{Story:W}=ie(),we=[{title:"Including everyone in Census",href:"#0",image:!0,meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",image:!0,description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],be=[{title:"Including everyone in Census",href:"#0",featured:!0,image:"https://service-manual.ons.gov.uk/img/large/census-monuments-lights-featured.jpg",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],De=[{title:"Including everyone in Census",href:"#0",meta:"Poster, PDF, 499KB, 1 page"},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages"}];var xe=l("<!> <!>",1),Ce=l("<!> <!> <!> <!>",1);function U(C,t){$(t,!1),se();var v=Ce(),x=j(v);const _=D(()=>({items:we}));W(x,{name:"Document list with images",get args(){return T(_)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}});var p=d(x,2);const h=D(()=>({items:be}));W(p,{name:"Article list with featured item",get args(){return T(h)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}});var k=d(p,2);const m=D(()=>({items:De,compact:!0}));W(k,{name:"Compact list, no description",get args(){return T(m)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}});var w=d(k,2);const c=D(()=>ae(_e));W(w,{name:"Individually defined documents",asChild:!0,parameters:{...T(c),__svelteCsf:{rawCode:`<DocumentList>\r
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
</DocumentList>`}},children:(b,M)=>{q(b,{children:(L,P)=>{var B=xe(),V=j(B);E(V,{href:"#0",title:"Including everyone in Census",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."});var N=d(V,2);E(N,{href:"#0",title:"Community handbook for Census 2021",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}),o(L,B)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(C,v),ee()}U.__docgen={data:[],name:"DocumentList.stories.svelte"};const K=ne(U,ke),Ae=["DocumentListWithImages","ArticleListWithFeaturedItem","CompactListNoDescription","IndividuallyDefinedDocuments"],Se={...K.DocumentListWithImages,tags:["svelte-csf-v5"]},We={...K.ArticleListWithFeaturedItem,tags:["svelte-csf-v5"]},Ee={...K.CompactListNoDescription,tags:["svelte-csf-v5"]},Ke={...K.IndividuallyDefinedDocuments,tags:["svelte-csf-v5"]};export{We as ArticleListWithFeaturedItem,Ee as CompactListNoDescription,Se as DocumentListWithImages,Ke as IndividuallyDefinedDocuments,Ae as __namedExportsOrder,ke as default};
