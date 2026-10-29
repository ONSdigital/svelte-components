import{ab as ne,aA as Ce,aB as Be,ay as Ge,af as ae,a as t,ad as le,aN as xe,ar as D,g as o,f as E,az as be,ag as te,c as V,p as b,ac as F,ah as k,i as Z,t as O,aF as fe,aH as J,ae as R,d as K,e as I,aD as Le,aG as Ee,aC as se,b5 as Ye,an as q,b as oe,am as Ne,al as et,aE as tt,s as ce}from"./iframe-DeOGyvCS.js";import{c as ot,w as at,i as nt,d as lt}from"./create-runtime-stories-DjaZoLUh.js";import{s as G,c as it}from"./attributes-BpptJWB1.js";import{s as de}from"./class-BfAGWMkO.js";import{b as Me}from"./this-7SO1usMd.js";import{s as Oe}from"./style-CkrwFcYh.js";import{b as rt}from"./window-CN0I49sc.js";import{C as st}from"./Checkbox-DuIPO-YE.js";import{B as pe}from"./Button-BNihWrlJ.js";import{s as dt}from"./utils-VWytQRnm.js";import{e as ct,i as ut}from"./each-2CpbMCnd.js";import{h as pt}from"./html-CLYtCkyB.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";import"./input-VgFS2Aw_.js";import"./Icon-CteWH8uu.js";import"./_commonjsHelpers-CqkleIqs.js";var vt=E('<div class="multi-toolbar-container svelte-1s0tjgv"><!></div>');function Ze(H,e){ne(e,!0);const a=xe([]);Ce("buttonIds",{register:i=>{a.update(r=>[...r,i])},unregister:i=>{a.update(r=>r.filter(p=>p!==i))},buttonIds:a});let d=be(!0);Be(()=>{const i=sessionStorage.getItem("showHelpModals"),r=localStorage.getItem("showHelpModals");D(d,i==="false"?!1:r!=="false",!0)});const f=xe(!0);Ce("showHelpModals",f),Be(()=>{f.set(o(d))});const u=xe(null);Ce("activeModalId",u),Ge(()=>{const i=()=>{sessionStorage.removeItem("showHelpModals")};window.addEventListener("beforeunload",i);let r=a.subscribe(p=>{p.length>0&&u.set(p[0])});return()=>{r(),window.removeEventListener("beforeunload",i)}});function S(){sessionStorage.setItem("showHelpModals","true"),f.set(!0)}var l={resetHelp:S},c=vt(),v=V(c);return ae(v,()=>e.children??te),t(H,c),le(l)}Ze.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"ToolbarsContainer.svelte"};var bt=E('<div role="toolbar"><div><!></div> <!></div>');function Se(H,e){ne(e,!0);const a=()=>J(o(i),"$showHelp",d),[d,f]=fe();let u=b(e,"classes",3,null),S=b(e,"ariaLabel",3,null),l=b(e,"orientation",3,"horizontal");const c=xe("horizontal");Ce("orientation",c),Be(()=>{c.set(l())});const v=F("showHelpModals"),i=R(()=>v);var r=bt(),p=V(r),s=V(p);ae(s,()=>e.children??te);var w=k(p,2);{var _=y=>{var T=K(),A=I(T);ae(A,()=>e.controls??te),t(y,T)};Z(w,y=>{a()||y(_)})}O(()=>{G(r,"aria-label",S()),de(r,1,`toolbar ${l()==="vertical"?"":"flex-col"} ${u()}`,"svelte-1st7dmr"),de(p,1,`grid--flex ${l()==="vertical"?"flex-col":""}`,"svelte-1st7dmr")}),t(H,r),le(),f()}Se.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"controls",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"classes",visibility:"public",description:"- Additional classes for the button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"ariaLabel",visibility:"public",description:"- aria label for button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"orientation",visibility:"public",description:"- Orientation of the toolbar",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"horizontal",text:'"horizontal"'},{kind:"const",type:"string",value:"vertical",text:'"vertical"'}],text:'"horizontal" | "vertical"'},static:!1,readonly:!1,defaultValue:'"horizontal"'}],name:"Toolbar.svelte"};var ft=Le('<path opacity="0.2"></path>'),ht=Le("<path></path>"),yt=Le('<circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"></circle>'),mt=Le('<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false"><!><!></svg>');function Ae(H,e){let a=b(e,"type",3,"move"),d=b(e,"marginLeft",3,!1),f=b(e,"marginRight",3,!1),u=b(e,"selected",3,!1),S=b(e,"disabled",3,!1);const l={move:{selected:"M29 16L16 29L3 16L16 3L29 16Z",d:"M11.293 7.707a1 1 0 0 1 0-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1-1.415 1.415L17 5.414V12a1 1 0 0 1-2 0V5.414l-2.293 2.293a1 1 0 0 1-1.415 0m8 16.586L17 26.586V20a1 1 0 0 0-2 0v6.586l-2.293-2.293a1 1 0 1 0-1.415 1.415l4 4a1 1 0 0 0 1.415 0l4-4a1 1 0 0 0-1.415-1.415m10.415-9-4-4a1 1 0 1 0-1.415 1.415L26.586 15H20a1 1 0 0 0 0 2h6.586l-2.293 2.293a1 1 0 1 0 1.415 1.415l4-4a1 1 0 0 0 0-1.415M5.413 17H12a1 1 0 0 0 0-2H5.414l2.293-2.293a1 1 0 1 0-1.415-1.415l-4 4a1 1 0 0 0 0 1.415l4 4a1 1 0 0 0 1.415-1.415z"},polygon:{selected:"M17.5 24L7.5 17V12.5L12.5 8.5L16 9L17.5 7.5L22.5 8.5L25 12.5L21 23L17.5 24Z",d:"M28.83 6.17a4 4 0 0 0-6.302.845L19 6.053a4 4 0 1 0-7.549 1.793L7.21 11.665a4.01 4.01 0 0 0-5.039.506 4 4 0 0 0 5.361 5.927l8.75 6.42a4 4 0 1 0 5.947-1.837l3.423-9.699q.172.015.345.016a4 4 0 0 0 2.829-6.828zM13.58 4.584a2 2 0 1 1-.433 2.18 2 2 0 0 1 .438-2.18zm-10 11.831a2 2 0 1 1 2.826-2.83 2 2 0 0 1-2.826 2.83m17.831 11a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.83 2.828m-1.069-5.398a4 4 0 0 0-2.874.886l-8.75-6.42a4.02 4.02 0 0 0-.168-3.332l4.244-3.818a4 4 0 0 0 5.683-1.352L22 8.945a4 4 0 0 0 1.765 3.375zm7.07-11.604a2 2 0 1 1-2.825-2.828 2 2 0 1 1 2.83 2.829z"},radius:{},erase:{d:"M28.125 10.05 22.95 4.875a3 3 0 0 0-4.242 0L3.874 19.708a3 3 0 0 0 0 4.242l3.758 3.758a1 1 0 0 0 .71.292H27a1 1 0 1 0 0-2H16.413l11.712-11.707a3 3 0 0 0 0-4.243M13.585 26H8.756l-3.465-3.465a1 1 0 0 1 0-1.414L12 14.414 18.586 21zM26.71 12.875 20 19.586 13.414 13l6.711-6.707a1 1 0 0 1 1.415 0l5.172 5.172a1 1 0 0 1 0 1.414z"},zoomin:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},zoomout:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},undo:{selected:"M10 5V17L4 11L10 5Z",d:"M29 18a8.01 8.01 0 0 1-8 8H10a1 1 0 1 1 0-2h11a6 6 0 1 0 0-12H6.414l4.294 4.293a1 1 0 0 1-1.416 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 10H21a8.01 8.01 0 0 1 8 8"},redo:{selected:"M28 11L22 17V5L28 11Z",d:"M21.293 16.293 25.586 12H11a6 6 0 1 0 0 12h11a1 1 0 0 1 0 2H11a8 8 0 1 1 0-16h14.586l-4.293-4.292a1.001 1.001 0 0 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415l-6 6a1 1 0 1 1-1.415-1.415"},search:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"m28.708 27.293-6.26-6.258a11.014 11.014 0 1 0-1.413 1.414l6.258 6.258a1 1 0 0 0 1.415-1.415M5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"},save:{selected:"M22.11,5H7.44c-1.36,0-2.44,1.1-2.44,2.44v17.11c0,1.34,1.09,2.44,2.44,2.44h17.11c1.34,0,2.44-1.1,2.44-2.44v-14.67l-4.89-4.89Z",d:"M27.71,9.18l-4.89-4.89c-.19-.19-.44-.29-.71-.29H7.44c-1.9,0-3.44,1.54-3.44,3.44v17.11c0,1.9,1.54,3.44,3.44,3.44h17.11c1.9,0,3.44-1.54,3.44-3.44v-14.67c0-.27-.11-.52-.29-.71ZM18.67,6v4.78h-8.26v-4.78h8.26ZM26,24.56c0,.8-.65,1.44-1.44,1.44H7.44c-.8,0-1.44-.65-1.44-1.44V7.44c0-.8.65-1.44,1.44-1.44h.96v5.78c0,.55.45,1,1,1h10.26c.55,0,1-.45,1-1v-5.78h1.03l4.3,4.3v14.25ZM16,15.65c-2.57,0-4.67,2.09-4.67,4.67s2.09,4.67,4.67,4.67,4.67-2.09,4.67-4.67-2.09-4.67-4.67-4.67ZM16,22.98c-1.47,0-2.67-1.2-2.67-2.67s1.2-2.67,2.67-2.67,2.67,1.2,2.67,2.67-1.2,2.67-2.67,2.67Z"},download:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-12.707.707a1 1 0 0 0 1.415 0l5-5a1 1 0 0 0-1.415-1.415L17 15.587V4a1 1 0 0 0-2 0v11.586l-3.293-3.293a1 1 0 1 0-1.415 1.415z"},upload:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0M11.708 9.707 15 6.414V18a1 1 0 0 0 2 0V6.414l3.293 3.293a1 1 0 1 0 1.415-1.415l-5-5a1 1 0 0 0-1.415 0l-5 5a1 1 0 0 0 1.415 1.415"},help:{selected:"M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16",d:"M17.5 22.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 2 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5m13 7A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"},bin:{selected:"M25 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7z",d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M12 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm12 21H8V8h16zM14 13v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0m6 0v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0"}};var c=K(),v=I(c);{var i=r=>{var p=mt();let s;var w=V(p);{var _=h=>{var B=ft();O(()=>G(B,"d",l[a()].selected)),t(h,B)};Z(w,h=>{u()&&h(_)})}var y=k(w);{var T=h=>{var B=ht();O(()=>G(B,"d",l[a()].d)),t(h,B)},A=h=>{var B=yt();O(()=>{G(B,"fill",u()?"#206095":"none"),G(B,"fill-opacity",u()?"0.2":"0")}),t(h,B)};Z(y,h=>{a()!="radius"?h(T):a()=="radius"&&h(A,1)})}O(()=>{s=de(p,0,"ons-svg-icon ons-svg-icon--m svelte-1tnevp6",null,s,{"ons-u-ml-xs":d(),"ons-u-mr-xs":f(),selected:u()}),G(p,"fill",u()?"#206095":S()?"#BCBCBD":"currentColor")}),t(r,p)};Z(v,r=>{l[a()]&&r(i)})}t(H,c)}Ae.__docgen={data:[{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"move"'},{name:"marginLeft",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"marginRight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarIcon.svelte"};var gt=E('<span style="margin-left:auto; margin-right:10px"><!></span>'),kt=E('<div class="help-modal-wrapper svelte-yxz9gw"><div class="help-modal-notch svelte-yxz9gw"></div> <div class="help-modal svelte-yxz9gw" role="dialog" aria-modal="true"><!> <div class="ons-padding-4 svelte-yxz9gw"><!></div> <div class="ons-grid-flex ons-grid-flex--between ons-grid-flex-vertical-center"><button class="btn-link svelte-yxz9gw" aria-label="Skip instructions">Skip</button> <!> <!> <!></div></div></div>');function Pe(H,e){ne(e,!0);const a=()=>J(o(s),"$currentActiveId",u),d=()=>J(o(p),"$ids",u),f=()=>J(o(w),"$showHelp",u),[u,S]=fe();let l=b(e,"triggerElement",3,null),c=b(e,"onClose",3,()=>{});const v=F("activeModalId"),i=F("showHelpModals"),{buttonIds:r}=F("buttonIds"),p=R(()=>r),s=R(()=>v),w=R(()=>i);let _=Ee({top:50,left:-5}),y=Ee({left:17,right:"auto"}),T=be(!1),A=be(0);Be(()=>{if(!l())return;const m=(l().closest(".toolbar-button-wrapper")??l()).getBoundingClientRect(),re=Math.min(360,(o(A)||window.innerWidth)-48),X=Math.max(16,Math.min(m.left-10,document.documentElement.clientWidth-re-16))-m.left;_.left=X,y.left=Math.max(10,Math.min(re-30,m.width/2-X-10)),y.right="auto"});function h(){localStorage.setItem("showHelpModals","false"),sessionStorage.setItem("showHelpModals","false"),i.set(!1)}function B(){sessionStorage.setItem("showHelpModals","false"),i.set(!1)}function ie(){const C=a()===null?-1:d().indexOf(a());C!==-1&&C<d().length-1&&v.set(d()[C+1]),o(T)&&h()}function Y(){o(T)?h():B()}function N(){const C=a()===null?-1:d().indexOf(a());C>0&&v.set(d()[C-1]),o(T)&&h()}function ee(C){C.key==="Escape"&&c()()}var j=K();se("keydown",Ye,ee);var Q=I(j);{var he=C=>{var m=kt(),re=V(m),ye=k(re,2),X=V(ye);ae(X,()=>e.children??te);var ve=k(X,2),me=V(ve);st(me,{id:"dontShowMeAgain",label:"Don't show me again",compact:!0,get checked(){return o(T)},set checked(M){D(T,M,!0)}});var Ve=k(ve,2),ge=V(Ve),ke=k(ge,2);{var we=M=>{var P=gt(),$=V(P);pe($,{variant:"secondary",$$events:{click:N},children:(U,z)=>{var W=oe("Back");t(U,W)},$$slots:{default:!0}}),t(M,P)},$e=R(()=>a()!==null&&d().indexOf(a())>0);Z(ke,M=>{o($e)&&M(we)})}var Te=k(ke,2);{var ze=M=>{pe(M,{$$events:{click:ie},children:(P,$)=>{var U=oe("Next");t(P,U)},$$slots:{default:!0}})},g=R(()=>a()!==null&&d().indexOf(a())!=d().length-1);Z(Te,M=>{o(g)&&M(ze)})}var n=k(Te,2);{var x=M=>{pe(M,{$$events:{click:B},children:(P,$)=>{var U=oe("Get started");t(P,U)},$$slots:{default:!0}})},L=R(()=>a()!==null&&d().indexOf(a())==d().length-1);Z(n,M=>{o(L)&&M(x)})}O(()=>{Oe(m,`top: ${_.top??""}px; left: ${_.left??""}px;`),Oe(re,`left: ${y.left??""}px;right: ${y.right??""}px;`)}),q("click",ge,Y),t(C,m)};Z(Q,C=>{f()&&C(he)})}rt("innerWidth",C=>D(A,C,!0)),t(H,j),le(),S()}Ne(["click"]);Pe.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"triggerElement",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"HTMLElement"},static:!1,readonly:!1,defaultValue:"null"},{name:"onClose",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"HelpModal.svelte"};var wt=E('<div role="button" tabindex="0"><!></div>'),Re=E('<!><span class="ons-u-vh"> </span>',1),Tt=E('<input type="checkbox" class="ons-u-vh svelte-1m9f2nv"/> <label><!></label>',1),_t=E('<button type="button"><!></button>'),Ct=E("<p> </p>"),xt=E("<div> </div>"),Mt=E('<div class="toolbar-button-wrapper svelte-1m9f2nv"><!> <!> <!></div>');function ue(H,e){ne(e,!0);const a=()=>J(o(j),"$currentActiveId",u),d=()=>J(ee,"$activeModalId",u),f=()=>J(o(C),"$currentOrientation",u),[u,S]=fe();let l=b(e,"id",19,dt),c=b(e,"icon",3,""),v=b(e,"label",3,""),i=b(e,"disabled",3,!1),r=b(e,"classes",3,""),p=b(e,"helpText",3,null),s=b(e,"selected",15,!1),w=b(e,"toggle",3,!1),_=b(e,"custom",3,!1),y=b(e,"hasAriaControls",3,!1),T=b(e,"hasTooltip",3,!0),A=b(e,"sticky",3,!1),h=b(e,"transient",3,!1),B=b(e,"disableHelp",3,!1);const ie=et();function Y(){var g;(g=e.onClick)==null||g.call(e,null),ie("click",null)}let N=be(void 0);const ee=F("activeModalId"),j=R(()=>ee),Q=R(()=>a()===l()),he=F("orientation"),C=R(()=>he);let m=be(!1);const{register:re,unregister:ye}=F("buttonIds");Ge(()=>{re(l())}),tt(()=>{ye(l())});function X(){if(!i()){if(h()){Y();return}else if(w()){s(!s()),Y();return}if(Y(),d()===l()&&A())return;ee.set(o(Q)?null:l())}}var ve=Mt(),me=V(ve);{var Ve=g=>{var n=wt(),x=V(n);ae(x,()=>e.customContent??te),Me(n,L=>D(N,L),()=>o(N)),q("keydown",n,L=>{(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),X())}),q("click",n,X),q("mouseover",n,()=>D(m,!0)),q("mouseout",n,()=>D(m,!1)),se("focus",n,()=>D(m,!0)),se("blur",n,()=>D(m,!1)),t(g,n)},ge=g=>{var n=Tt(),x=I(n);Me(x,z=>D(N,z),()=>o(N));var L=k(x,2);let M;var P=V(L);{var $=z=>{var W=Re(),_e=I(W);{let Je=R(()=>s()||o(Q)&&!h());Ae(_e,{get type(){return c()},get selected(){return o(Je)},get disabled(){return i()}})}var De=k(_e),Xe=V(De);O(()=>ce(Xe,v())),t(z,W)},U=z=>{var W=oe();O(()=>ce(W,v())),t(z,W)};Z(P,z=>{c()?z($):z(U,-1)})}O(()=>{x.disabled=i(),G(x,"id",`button-${l()}`),it(x,s()),G(L,"for",`button-${l()}`),M=de(L,1,`toolbar-button ${r()??""}`,"svelte-1m9f2nv",M,{selected:s()||o(Q)&&!h()})}),q("click",x,X),se("focus",x,()=>D(m,!0)),se("blur",x,()=>D(m,!1)),q("mouseover",L,()=>D(m,!0)),q("mouseout",L,()=>D(m,!1)),t(g,n)},ke=g=>{var n=_t();let x;var L=V(n);{var M=$=>{var U=Re(),z=I(U);{let De=R(()=>s()||o(Q)&&!h());Ae(z,{get type(){return c()},get selected(){return o(De)},get disabled(){return i()}})}var W=k(z),_e=V(W);O(()=>ce(_e,v())),t($,U)},P=$=>{var U=oe();O(()=>ce(U,v())),t($,U)};Z(L,$=>{c()?$(M):$(P,-1)})}Me(n,$=>D(N,$),()=>o(N)),O(()=>{G(n,"aria-label",v()),x=de(n,1,`toolbar-button ${r()??""}`,"svelte-1m9f2nv",x,{selected:s()||o(Q)&&!h()}),n.disabled=i(),G(n,"id",`button-${l()}`),G(n,"aria-controls",y()?`panel-${l()}`:void 0)}),q("click",n,X),q("mouseover",n,()=>D(m,!0)),q("mouseout",n,()=>D(m,!1)),se("focus",n,()=>D(m,!0)),se("blur",n,()=>D(m,!1)),t(g,n)};Z(me,g=>{_()?g(Ve):w()?g(ge,1):g(ke,-1)})}var we=k(me,2);{var $e=g=>{var n=K(),x=I(n);{var L=P=>{Pe(P,{get triggerElement(){return o(N)},onClose:()=>ee.set(null),children:($,U)=>{var z=Ct(),W=V(z);O(()=>ce(W,p())),t($,z)},$$slots:{default:!0}})},M=P=>{Pe(P,{get triggerElement(){return o(N)},onClose:()=>ee.set(null),children:($,U)=>{var z=K(),W=I(z);ae(W,()=>e.children??te),t($,z)},$$slots:{default:!0}})};Z(x,P=>{p()&&!B()?P(L):!p()&&!B()&&P(M,1)})}t(g,n)};Z(we,g=>{o(Q)&&g($e)})}var Te=k(we,2);{var ze=g=>{var n=xt();let x;var L=V(n);O(()=>{x=de(n,1,"toolbar-tooltip ons-u-fs-s svelte-1m9f2nv",null,x,{"toolbar-tooltip-vertical":f()==="vertical"}),ce(L,v())}),t(g,n)};Z(Te,g=>{T()&&o(m)&&g(ze)})}t(H,ve),le(),S()}Ne(["keydown","click","mouseover","mouseout"]);ue.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"customContent",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"onClick",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(detail: null) => void"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"helpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."},{name:"toggle",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"custom",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasAriaControls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasTooltip",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"sticky",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"transient",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disableHelp",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarButton.svelte"};var Ht=E('<div aria-hidden="true"></div>');function He(H,e){ne(e,!0);const a=()=>J(o(l),"$orientation",d),[d,f]=fe();let u=b(e,"classes",3,"");const S=F("orientation"),l=R(()=>S);var c=Ht();O(()=>de(c,1,`toolbar-divider ${a()} ${u()}`,"svelte-1sgnnls")),t(H,c),le(),f()}He.__docgen={data:[{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolbarDivider.svelte"};const Bt=""+new URL("movepan-C6QMWXON.png",import.meta.url).href;function je(H,e){ne(e,!0);const a=F("activeModalId"),d=R(()=>a);var f=K(),u=I(f);{var S=l=>{var c=K(),v=I(c);ae(v,()=>e.children??te),t(l,c)};Z(u,l=>{o(d)&&l(S)})}t(H,f),le()}je.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"ToolControls.svelte"};var Lt=E('<div class="tool-control svelte-1ej7ib3" role="tabpanel"><!></div>');function qe(H,e){ne(e,!0);const a=()=>J(o(c),"$currentModalId",f),d=()=>J(o(v),"$showHelp",f),[f,u]=fe(),S=F("activeModalId"),l=F("showHelpModals"),c=R(()=>S),v=R(()=>l);let i=b(e,"id",3,"");var r=K(),p=I(r);{var s=w=>{var _=Lt(),y=V(_);ae(y,()=>e.children??te),O(()=>{G(_,"aria-labelledby",`button-${i()}`),G(_,"id",`panel-${i()}`)}),t(w,_)};Z(p,w=>{a()===i()&&!d()&&w(s)})}t(H,r),le(),u()}qe.__docgen={data:[{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolControl.svelte"};const Vt=`<span class="ons-warning">This component is experimental</span>

A toolbar component. Use \`ToolbarsContainer\` even if using one toolbar as it contains a store for all the IDs and the activeID.

\`ToolbarButton\` accepts child content for custom help, or the \`helpText\` prop for plain text. In Svelte 5, replace Toolbar's named \`controls\` slot with a \`controls\` snippet. Replace ToolbarButton's named \`custom\` slot with a \`customContent\` snippet; the boolean \`custom\` prop is unchanged. \`onClick(detail)\` receives \`null\`, matching the retained \`on:click\` event's detail.

\`\`\`svelte
<ToolbarsContainer>
	<Toolbar>
		<ToolbarButton id="search" icon="search" label="Search" hasAriaControls />
		{#snippet controls()}
			<ToolControls>
				<ToolControl id="search"><input aria-label="Search query" /></ToolControl>
			</ToolControls>
		{/snippet}
	</Toolbar>
</ToolbarsContainer>
\`\`\`

Each \`ToolControl\` will display content underneath the row of buttons. The \`id\` needs to match the \`id\` of the button.

Use the prop \`hasAriaControls\` on a button to link the controls to the button.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ToolbarsContainer,Toolbar,ToolbarButton, ToolbarDivider,ToolControls,ToolControl, HelpModal } from "@onsvisual/svelte-components";
<\/script>

  <ToolbarsContainer>

    <Toolbar orientation="horizontal">
      <ToolbarButton id="polygon" icon="polygon" label="Draw a polygon" hasAriaControls>
          <h3>Detailed Help</h3>
          <p>More complex help text or even HTML content</p>
          <ul>
            <li>With lists</li>
            <li>Or other elements</li>
          </ul>
      </ToolbarButton>
      <ToolbarButton
        icon="radius"
        label="Draw a circle"
        helpText="Draw a circle using this tool"
      />
      <ToolbarDivider />
      <ToolbarButton
        icon="zoomin"
        label="Zoom in"
      />
      <ToolbarButton icon="zoomout" label="Zoom out" />
      {#snippet controls()}
        <ToolControls>
          <ToolControl id="polygon">
            <p>Text to display when polygon tool is selected, or even an input</p>
          </ToolControl>
        </ToolControls>
      {/snippet}
    </Toolbar>


    <!-- Second toolbar -->
    <Toolbar>
      <ToolbarButton id="upload" icon="upload"/>
      <ToolbarButton id="download" icon="download"/>
    </Toolbar>
  </ToolbarsContainer>
\`\`\`

## Sticky buttons

\`\`\`html
<ToolbarsContainer>
	<Toolbar>
		<ToolbarButton id="move" icon="move" label="Move and Pan" sticky />
		<ToolbarButton id="polygon" icon="polygon" label="Draw a polygon" sticky />
		<ToolbarButton id="circle" icon="radius" label="Draw a circle" sticky />
	</Toolbar>
</ToolbarsContainer>
\`\`\`

## Transient buttons

\`\`\`html
<ToolbarsContainer>
	<Toolbar>
		<ToolbarButton
			id="zoomin"
			icon="zoomin"
			label="Zoom in"
			transient="{true}"
			selected="{false}"
		/>
		<ToolbarButton id="zoomout" icon="zoomout" label="zoom out" transient />
	</Toolbar>
</ToolbarsContainer>
\`\`\`

## No help modal

\`\`\`html
<ToolbarsContainer>
	<Toolbar>
		<ToolbarButton
			id="zoomin"
			icon="zoomin"
			label="Zoom in"
			transient="{true}"
			selected="{false}"
			disableHelp="{true}"
		/>
		<ToolbarButton id="zoomout" icon="zoomout" label="zoom out" disableHelp="{true}" transient />
	</Toolbar>
</ToolbarsContainer>
\`\`\`
`,Ue=(H,e=te)=>{Me(Ze(H,{children:(a,d)=>{var f=Fe(),u=I(f);Se(u,{get orientation(){return e().orientation},get ariaLabel(){return e().ariaLabel},controls:c=>{je(c,{children:(v,i)=>{qe(v,{id:"polygon",children:(r,p)=>{var s=Dt(),w=k(I(s),2);pe(w,{variant:"secondary",disabled:!0,children:(y,T)=>{var A=oe("Clear shape");t(y,A)},$$slots:{default:!0}});var _=k(w,2);pe(_,{variant:"primary",children:(y,T)=>{var A=oe("Apply shape");t(y,A)},$$slots:{default:!0}}),t(r,s)},$$slots:{default:!0}})},$$slots:{default:!0}})},children:(c,v)=>{var i=K(),r=I(i);ct(r,1,()=>$t,ut,(p,s)=>{let w=()=>o(s).type,_=()=>o(s).id,y=()=>o(s).icon,T=()=>o(s).label,A=()=>o(s).helpContent,h=()=>o(s).disabled,B=()=>o(s).hasAriaControls;var ie=K(),Y=I(ie);{var N=j=>{ue(j,{get id(){return _()},get icon(){return y()},get label(){return T()},get disabled(){return h()},get hasAriaControls(){return B()},children:(Q,he)=>{var C=K(),m=I(C);pt(m,A),t(Q,C)},$$slots:{default:!0}})},ee=j=>{He(j,{})};Z(Y,j=>{w()==="button"?j(N):j(ee,-1)})}t(p,ie)}),t(c,i)},$$slots:{controls:!0,default:!0}});var S=k(u,2);Se(S,{get orientation(){return e().orientation},children:(l,c)=>{var v=St(),i=I(v);ue(i,{id:"download",icon:"download",label:"Download area"});var r=k(i,2);ue(r,{id:"upload",icon:"upload",label:"Upload a geometry"});var p=k(r,2);He(p,{});var s=k(p,2);ue(s,{id:"help",icon:"help",label:"Help",$$events:{click(...y){var T;(T=Ie.resetHelp)==null||T.apply(this,y)}}});var w=k(s,2);He(w,{});var _=k(w,2);ue(_,{id:"getstarted",custom:!0,label:"Get started",customContent:T=>{var A=It(),h=V(A);pe(h,{disabled:!0,small:!0,children:(B,ie)=>{var Y=oe("Build profile");t(B,Y)},$$slots:{default:!0}}),t(T,A)},$$slots:{customContent:!0}}),t(l,v)},$$slots:{default:!0}}),t(a,f)},$$slots:{default:!0},$$legacy:!0}),a=>Ie=a,()=>Ie)};let Ie;const $t=[{type:"button",id:"move",icon:"move",label:"Move and Pan",helpContent:`<h3>Move and pan</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p><img src='${Bt}' alt='Move and pan' />`},{type:"button",id:"polygon",icon:"polygon",label:"Draw a polygon",helpContent:"<h3>Draw a polygon</h3><p>Left-click to add a point to the polygon. Double-click to finish drawing.</p>",hasAriaControls:!0},{type:"button",id:"circle",icon:"radius",label:"Draw a circle",helpContent:"<h3>Draw a circle</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"zoomin",icon:"zoomin",label:"Zoom in",helpContent:"<h3>Zoom in</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"zoomout",icon:"zoomout",label:"Zoom out",helpContent:"<h3>Zoom out</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"undo",icon:"undo",label:"Undo last step",helpContent:"<h3>Undo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"redo",icon:"redo",label:"Redo last step",helpContent:"<h3>Redo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",disabled:!0},{type:"divider"},{type:"button",id:"search",icon:"search",label:"Search for an area",helpContent:"<h3>Search</h3><p>Search for an area by name or postcode.</p>"}],zt={title:"Form elements/Toolbar",component:Ze,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}},parameters:at(Vt)},{Story:We}=lt();var Dt=E(`<p>Click or tap an area on the map to add a node to the shape. To apply a shape, close it
							by clicking or tapping on the starting node.</p> <!> <!>`,1),It=E("<div><!></div>"),St=E("<!> <!> <!> <!> <!> <!>",1),Fe=E("<!> <!>",1);function Ke(H,e){ne(e,!1),nt();var a=Fe(),d=I(a);We(d,{name:"Default",args:{ariaLabel:"Toolbar"},get template(){return Ue},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
	<Toolbar orientation={args.orientation} ariaLabel={args.ariaLabel}>
		{#each toolbarContent as { type, id, icon, label, helpContent, disabled, hasAriaControls }}
			{#if type === "button"}
				<ToolbarButton {id} {icon} {label} {disabled} {hasAriaControls}>
					{@html helpContent}
				</ToolbarButton>
			{:else}
				<ToolbarDivider />
			{/if}
		{/each}
		{#snippet controls()}
			<ToolControls>
				<ToolControl id="polygon">
					<p>
						Click or tap an area on the map to add a node to the shape. To apply a shape, close it
						by clicking or tapping on the starting node.
					</p>
					<Button variant="secondary" disabled>Clear shape</Button>
					<Button variant="primary">Apply shape</Button>
				</ToolControl>
			</ToolControls>
		{/snippet}
	</Toolbar>
	<Toolbar orientation={args.orientation}>
		<ToolbarButton id="download" icon="download" label="Download area" />
		<ToolbarButton id="upload" icon="upload" label="Upload a geometry" />
		<ToolbarDivider />
		<ToolbarButton id="help" icon="help" label="Help" on:click={container.resetHelp} />
		<ToolbarDivider />
		<ToolbarButton id="getstarted" custom label="Get started">
			{#snippet customContent()}
				<div>
					<Button disabled small>Build profile</Button>
				</div>
			{/snippet}
		</ToolbarButton>
	</Toolbar>
</ToolbarsContainer>`}}});var f=k(d,2);We(f,{name:"Vertical",args:{orientation:"vertical"},get template(){return Ue},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
	<Toolbar orientation={args.orientation} ariaLabel={args.ariaLabel}>
		{#each toolbarContent as { type, id, icon, label, helpContent, disabled, hasAriaControls }}
			{#if type === "button"}
				<ToolbarButton {id} {icon} {label} {disabled} {hasAriaControls}>
					{@html helpContent}
				</ToolbarButton>
			{:else}
				<ToolbarDivider />
			{/if}
		{/each}
		{#snippet controls()}
			<ToolControls>
				<ToolControl id="polygon">
					<p>
						Click or tap an area on the map to add a node to the shape. To apply a shape, close it
						by clicking or tapping on the starting node.
					</p>
					<Button variant="secondary" disabled>Clear shape</Button>
					<Button variant="primary">Apply shape</Button>
				</ToolControl>
			</ToolControls>
		{/snippet}
	</Toolbar>
	<Toolbar orientation={args.orientation}>
		<ToolbarButton id="download" icon="download" label="Download area" />
		<ToolbarButton id="upload" icon="upload" label="Upload a geometry" />
		<ToolbarDivider />
		<ToolbarButton id="help" icon="help" label="Help" on:click={container.resetHelp} />
		<ToolbarDivider />
		<ToolbarButton id="getstarted" custom label="Get started">
			{#snippet customContent()}
				<div>
					<Button disabled small>Build profile</Button>
				</div>
			{/snippet}
		</ToolbarButton>
	</Toolbar>
</ToolbarsContainer>`}}}),t(H,a),le()}Ke.__docgen={data:[],name:"Toolbar.stories.svelte"};const Qe=ot(Ke,zt),Yt=["Default","Vertical"],eo={...Qe.Default,tags:["svelte-csf-v5"]},to={...Qe.Vertical,tags:["svelte-csf-v5"]};export{eo as Default,to as Vertical,Yt as __namedExportsOrder,zt as default};
