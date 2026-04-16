import{p as u,f as l,i as y,J as d,k as n,t as g,h as D,j as o,K as V,l as Y,m as j,X as Z,G as T,A as $,I as ee}from"./iframe-BbbdPRT3.js";import{w as te,c as ne,i as se,d as ie,a as ae}from"./create-runtime-stories-BDNKaz6P.js";import{h as H}from"./html-C3umIGRJ.js";import{s as U}from"./slot-BP_Qo1ZM.js";import{s as S}from"./attributes-D2OsbY2h.js";import{s as R}from"./class-B9SFUanI.js";import{e as oe,i as re}from"./each-CQ9gxpab.js";import"./attributes-q36Eg1F8.js";var le=l('<img alt="" loading="lazy"/>'),de=l('<div class="ons-document-list__item-image ons-document-list__item-image--file svelte-17fgguo" aria-hidden="true"><a tabindex="-1"><!></a></div>'),me=l('<span class="ons-u-vh"> </span>'),ce=l('<h3 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h3>'),ue=l('<span class="ons-u-vh"> </span>'),pe=l('<h2 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h2>'),he=l('<ul class="ons-document-list__item-metadata ons-u-mb-2xs"><li class="ons-document-list__item-attribute" aria-hidden="true"><!></li></ul>'),ve=l('<div class="ons-document-list__item-description"><!> <!></div>'),fe=l('<li><!> <div class="ons-document-list__item-content"><div class="ons-document-list__item-header"><!> <!></div> <!></div></li>');function W(C,t){let v=u(t,"title",8,null),x=u(t,"headingTag",8,"h2"),_=u(t,"href",8,null),p=u(t,"description",8,null),h=u(t,"image",8,!1),k=u(t,"featured",8,!1),m=u(t,"meta",8,null);var w=fe();let c;var b=n(w);{var A=e=>{var s=de(),i=n(s);let r;var B=n(i);{var F=a=>{var f=le();g(()=>S(f,"src",h())),o(a,f)};y(B,a=>{typeof h()=="string"&&a(F)})}g(a=>{r=R(i,1,"ons-document-list__image-link svelte-17fgguo",null,r,a),S(i,"href",_())},[()=>({"ons-document-list__image-link--placeholder":h()===!0})],D),o(e,s)};y(b,e=>{h()&&e(A)})}var L=d(b,2),I=n(L),P=n(I);{var M=e=>{var s=ce(),i=n(s),r=n(i),B=d(r);{var F=a=>{var f=me(),O=n(f);g(()=>V(O,m())),o(a,f)};y(B,a=>{m()&&a(F)})}g(()=>{S(i,"href",_()),V(r,`${v()??""} `)}),o(e,s)},N=e=>{var s=pe(),i=n(s),r=n(i),B=d(r);{var F=a=>{var f=ue(),O=n(f);g(()=>V(O,m())),o(a,f)};y(B,a=>{m()&&a(F)})}g(()=>{S(i,"href",_()),V(r,`${v()??""} `)}),o(e,s)};y(P,e=>{x()==="h3"?e(M):e(N,!1)})}var G=d(P,2);{var J=e=>{var s=he(),i=n(s),r=n(i);H(r,m),o(e,s)};y(G,e=>{m()&&e(J)})}var X=d(I,2);{var Q=e=>{var s=ve(),i=n(s);U(i,t,"default",{},null);var r=d(i,2);H(r,p),o(e,s)};y(X,e=>{p()&&e(Q)})}g(e=>c=R(w,1,"ons-document-list__item",null,c,e),[()=>({"ons-document-list__item--featured":k()})],D),o(C,w)}W.__docgen={data:[{name:"title",visibility:"public",description:"The title of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"headingTag",visibility:"public",description:"Set the heading level for the title",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"h2",text:'"h2"'},{kind:"const",type:"string",value:"h3",text:'"h3"'}],text:'"h2" | "h3"'},static:!1,readonly:!1,defaultValue:'"h2"'},{name:"href",visibility:"public",description:"The URL of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"description",visibility:"public",description:"A description of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"image",visibility:"public",description:'Optional: URL of image to represent the document (use "true" for a placeholder)',keywords:[],kind:"let",type:{kind:"union",type:[{kind:"type",type:"string",text:"string"},{kind:"type",type:"boolean",text:"boolean"}],text:"string | boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"featured",visibility:"public",description:"Highlight document as a featured item (inset on grey background)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"meta",visibility:"public",description:"Metadata about the type of document linked to (can include HTML)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Document.svelte"};var ye=l("<ul><!> <!></ul>");function z(C,t){let v=u(t,"items",8,null),x=u(t,"compact",8,!1),_=u(t,"cls",8,null);var p=ye();let h;var k=n(p);U(k,t,"default",{},null);var m=d(k,2);{var w=c=>{var b=Y(),A=j(b);oe(A,1,v,re,(L,I)=>{W(L,Z(()=>T(I)))}),o(c,b)};y(m,c=>{Array.isArray(v())&&c(w)})}g(c=>h=R(p,1,`ons-document-list ${_()??""}`,"svelte-5a3iai",h,c),[()=>({"ons-document-list--compact":x()})],D),o(C,p)}z.__docgen={data:[{name:"items",visibility:"public",description:"Optional: Define the documents as an array of {id, title, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode. Removes horizonatal lines between documents",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"DocumentList.svelte"};const ge=`A component for defining a list of pages or links. Items can either be defined in an array of objects or as individual \`<Document>\` components.

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
`,ke={title:"Information and media/DocumentList",component:z,tags:["autodocs"],argTypes:{},parameters:te(ge)},{Story:K}=ie(),we=[{title:"Including everyone in Census",href:"#0",image:!0,meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",image:!0,description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],be=[{title:"Including everyone in Census",href:"#0",featured:!0,image:"https://service-manual.ons.gov.uk/img/large/census-monuments-lights-featured.jpg",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],De=[{title:"Including everyone in Census",href:"#0",meta:"Poster, PDF, 499KB, 1 page"},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages"}];var xe=l("<!> <!>",1),Ce=l("<!> <!> <!> <!>",1);function q(C,t){$(t,!1),se();var v=Ce(),x=j(v);const _=D(()=>({items:we}));K(x,{name:"Document list with images",get args(){return T(_)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}});var p=d(x,2);const h=D(()=>({items:be}));K(p,{name:"Article list with featured item",get args(){return T(h)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}});var k=d(p,2);const m=D(()=>({items:De,compact:!0}));K(k,{name:"Compact list, no description",get args(){return T(m)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}});var w=d(k,2);const c=D(()=>ae(_e));K(w,{name:"Individually defined documents",asChild:!0,parameters:{...T(c),__svelteCsf:{rawCode:`<DocumentList>
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
</DocumentList>`}},children:(b,A)=>{z(b,{children:(L,I)=>{var P=xe(),M=j(P);W(M,{href:"#0",title:"Including everyone in Census",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."});var N=d(M,2);W(N,{href:"#0",title:"Community handbook for Census 2021",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}),o(L,P)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(C,v),ee()}q.__docgen={data:[],name:"DocumentList.stories.svelte"};const E=ne(q,ke),Ve=["DocumentListWithImages","ArticleListWithFeaturedItem","CompactListNoDescription","IndividuallyDefinedDocuments"],Se={...E.DocumentListWithImages,tags:["svelte-csf-v5"]},Ke={...E.ArticleListWithFeaturedItem,tags:["svelte-csf-v5"]},We={...E.CompactListNoDescription,tags:["svelte-csf-v5"]},Ee={...E.IndividuallyDefinedDocuments,tags:["svelte-csf-v5"]};export{Ke as ArticleListWithFeaturedItem,We as CompactListNoDescription,Se as DocumentListWithImages,Ee as IndividuallyDefinedDocuments,Ve as __namedExportsOrder,ke as default};
