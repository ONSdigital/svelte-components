import{p as u,i as g,ae as l,t as _,a,c as i,f as d,s as M,g as I,d as Y,e as N,at as Z,an as ee,q as te,u as ne,ab as se,ad as ie,H as V}from"./iframe-BXhLknc8.js";import{c as ae,w as oe,i as re,d as le,a as de}from"./create-runtime-stories-Dqy-MK43.js";import{h as j}from"./html-BbSZWl3K.js";import{s as q}from"./slot-BP_Qo1ZM.js";import{s as A}from"./attributes-DxUDVNkB.js";import{s as O}from"./class-B_H6VdUK.js";import{e as me,i as ce}from"./each-CkIz-BVB.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var ue=d('<img alt="" loading="lazy"/>'),pe=d('<div class="ons-document-list__item-image ons-document-list__item-image--file svelte-1w8s4wv" aria-hidden="true"><a tabindex="-1"><!></a></div>'),H=d('<span class="ons-u-vh"> </span>'),he=d('<h3 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h3>'),ve=d('<h2 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs"><a> <!></a></h2>'),fe=d('<ul class="ons-document-list__item-metadata ons-u-mb-2xs"><li class="ons-document-list__item-attribute" aria-hidden="true"></li></ul>'),ye=d('<div class="ons-document-list__item-description"><!> <!></div>'),ge=d('<li><!> <div class="ons-document-list__item-content"><div class="ons-document-list__item-header"><!> <!></div> <!></div></li>');function W(P,t){let p=u(t,"title",8,null),b=u(t,"headingTag",8,"h2"),f=u(t,"href",8,null),h=u(t,"description",8,null),v=u(t,"image",8,!1),o=u(t,"featured",8,!1),m=u(t,"meta",8,null);var D=ge();let C;var k=i(D);{var w=e=>{var n=pe(),s=i(n);let c;var B=i(s);{var F=r=>{var y=ue();_(()=>A(y,"src",v())),a(r,y)};g(B,r=>{typeof v()=="string"&&r(F)})}_(()=>{c=O(s,1,"ons-document-list__image-link svelte-1w8s4wv",null,c,{"ons-document-list__image-link--placeholder":v()===!0}),A(s,"href",f())}),a(e,n)};g(k,e=>{v()&&e(w)})}var x=l(k,2),L=i(x),T=i(L);{var U=e=>{var n=he(),s=i(n),c=i(s),B=l(c);{var F=r=>{var y=H(),K=i(y);_(()=>M(K,m())),a(r,y)};g(B,r=>{m()&&r(F)})}_(()=>{A(s,"href",f()),M(c,`${p()??""} `)}),a(e,n)},$=e=>{var n=ve(),s=i(n),c=i(s),B=l(c);{var F=r=>{var y=H(),K=i(y);_(()=>M(K,m())),a(r,y)};g(B,r=>{m()&&r(F)})}_(()=>{A(s,"href",f()),M(c,`${p()??""} `)}),a(e,n)};g(T,e=>{b()==="h3"?e(U):e($,-1)})}var G=l(T,2);{var J=e=>{var n=fe(),s=i(n);j(s,m,!0),a(e,n)};g(G,e=>{m()&&e(J)})}var Q=l(L,2);{var X=e=>{var n=ye(),s=i(n);q(s,t,"default",{},null);var c=l(s,2);j(c,h),a(e,n)};g(Q,e=>{h()&&e(X)})}_(()=>C=O(D,1,"ons-document-list__item",null,C,{"ons-document-list__item--featured":o()})),a(P,D)}W.__docgen={data:[{name:"title",visibility:"public",description:"The title of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"headingTag",visibility:"public",description:"Set the heading level for the title",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"h2",text:'"h2"'},{kind:"const",type:"string",value:"h3",text:'"h3"'}],text:'"h2" | "h3"'},static:!1,readonly:!1,defaultValue:'"h2"'},{name:"href",visibility:"public",description:"The URL of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"description",visibility:"public",description:"A description of the document",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"image",visibility:"public",description:'Optional: URL of image to represent the document (use "true" for a placeholder)',keywords:[],kind:"let",type:{kind:"union",type:[{kind:"type",type:"string",text:"string"},{kind:"type",type:"boolean",text:"boolean"}],text:"string | boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"featured",visibility:"public",description:"Highlight document as a featured item (inset on grey background)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"meta",visibility:"public",description:"Metadata about the type of document linked to (can include HTML)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Document.svelte"};var _e=d("<ul><!> <!></ul>");function R(P,t){let p=u(t,"items",8,null),b=u(t,"compact",8,!1),f=u(t,"cls",8,null);var h=_e();let v;var o=i(h);q(o,t,"default",{},null);var m=l(o,2);{var D=k=>{var w=Y(),x=N(w);me(x,1,p,ce,(L,T)=>{W(L,Z(()=>I(T)))}),a(k,w)},C=ee(()=>(te(p()),ne(()=>Array.isArray(p()))));g(m,k=>{I(C)&&k(D)})}_(()=>v=O(h,1,`ons-document-list ${f()??""}`,"svelte-ge2cn7",v,{"ons-document-list--compact":b()})),a(P,h)}R.__docgen={data:[{name:"items",visibility:"public",description:"Optional: Define the documents as an array of {id, title, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode. Removes horizonatal lines between documents",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"DocumentList.svelte"};const ke=`A component for defining a list of pages or links. Items can either be defined in an array of objects or as individual \`<Document>\` components.

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
`,we=`In this example, the individual documents are defined explicitly.

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
`,be={title:"Information and media/DocumentList",component:R,tags:["autodocs"],argTypes:{},parameters:oe(ke)},{Story:S}=le(),De=[{title:"Including everyone in Census",href:"#0",image:!0,meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",image:!0,description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],Ce=[{title:"Including everyone in Census",href:"#0",featured:!0,image:"https://service-manual.ons.gov.uk/img/large/census-monuments-lights-featured.jpg",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}],xe=[{title:"Including everyone in Census",href:"#0",meta:"Poster, PDF, 499KB, 1 page"},{title:"Community handbook for Census 2021",href:"#0",meta:"Booklet,PDF, 3.3MB, 16 pages"}];var Le=d("<!> <!>",1),Ie=d("<!> <!> <!> <!>",1);function z(P,t){se(t,!1),re();var p=Ie(),b=N(p);{let o=V(()=>({items:De}));S(b,{name:"Document list with images",get args(){return I(o)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}})}var f=l(b,2);{let o=V(()=>({items:Ce}));S(f,{name:"Article list with featured item",get args(){return I(o)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}})}var h=l(f,2);{let o=V(()=>({items:xe,compact:!0}));S(h,{name:"Compact list, no description",get args(){return I(o)},parameters:{__svelteCsf:{rawCode:"<DocumentList {...args} />"}}})}var v=l(h,2);{let o=V(()=>de(we));S(v,{name:"Individually defined documents",asChild:!0,parameters:{...I(o),__svelteCsf:{rawCode:`<DocumentList>
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
</DocumentList>`}},children:(m,D)=>{R(m,{children:(C,k)=>{var w=Le(),x=N(w);W(x,{href:"#0",title:"Including everyone in Census",meta:"Poster, PDF, 499KB, 1 page",description:"Empty belly poster, aimed at advertising census events."});var L=l(x,2);W(L,{href:"#0",title:"Community handbook for Census 2021",meta:"Booklet,PDF, 3.3MB, 16 pages",description:"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."}),a(C,w)},$$slots:{default:!0}})},$$slots:{default:!0}})}a(P,p),ie()}z.__docgen={data:[],name:"DocumentList.stories.svelte"};const E=ae(z,be),Ee=["DocumentListWithImages","ArticleListWithFeaturedItem","CompactListNoDescription","IndividuallyDefinedDocuments"],Ke={...E.DocumentListWithImages,tags:["svelte-csf-v5"]},Ne={...E.ArticleListWithFeaturedItem,tags:["svelte-csf-v5"]},Oe={...E.CompactListNoDescription,tags:["svelte-csf-v5"]},Re={...E.IndividuallyDefinedDocuments,tags:["svelte-csf-v5"]};export{Ne as ArticleListWithFeaturedItem,Oe as CompactListNoDescription,Ke as DocumentListWithImages,Re as IndividuallyDefinedDocuments,Ee as __namedExportsOrder,be as default};
