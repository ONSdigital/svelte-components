import{ad as at,aA as _t,aB as Bt,ay as Gt,s as nt,a as e,af as lt,aO as Ct,ar as S,g as o,f as E,az as ht,n as et,c as L,p as h,ae as F,ah as k,i as Z,t as O,aF as bt,aG as J,ag as R,e as K,h as I,aD as zt,aR as Et,aC as rt,b6 as Yt,an as q,d as ot,am as jt,al as te,aE as ee,b as ct}from"./iframe-DGWWVtAh.js";import{c as oe,w as ne,i as ae,d as le}from"./create-runtime-stories-DpqZ-Xbz.js";import{s as G,c as ie}from"./attributes-D8IEiTJ3.js";import{s as dt}from"./class-5fErMqfb.js";import{b as Mt}from"./this-DO141c5g.js";import{s as Ot}from"./style-Cmzoymny.js";import{b as se}from"./window-CnLlAwFz.js";import{C as re}from"./Checkbox-B-YXWTOx.js";import{B as ut}from"./Button-Bild9_1J.js";import{s as de}from"./utils-VWytQRnm.js";import{e as ce,i as pe}from"./each-DEHiEDxj.js";import{h as ue}from"./html-CLPjfGOu.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";import"./input-BuCpUmvc.js";import"./Icon-D_lNS_OP.js";import"./_commonjsHelpers-CqkleIqs.js";var ve=E('<div class="multi-toolbar-container svelte-1s0tjgv"><!></div>');function Zt(H,t){at(t,!0);const n=Ct([]);_t("buttonIds",{register:i=>{n.update(r=>[...r,i])},unregister:i=>{n.update(r=>r.filter(u=>u!==i))},buttonIds:n});let d=ht(!0);Bt(()=>{const i=sessionStorage.getItem("showHelpModals"),r=localStorage.getItem("showHelpModals");S(d,i==="false"?!1:r!=="false",!0)});const b=Ct(!0);_t("showHelpModals",b),Bt(()=>{b.set(o(d))});const p=Ct(null);_t("activeModalId",p),Gt(()=>{const i=()=>{sessionStorage.removeItem("showHelpModals")};window.addEventListener("beforeunload",i);let r=n.subscribe(u=>{u.length>0&&p.set(u[0])});return()=>{r(),window.removeEventListener("beforeunload",i)}});function D(){sessionStorage.setItem("showHelpModals","true"),b.set(!0)}var l={resetHelp:D},c=ve(),v=L(c);return nt(v,()=>t.children??et),e(H,c),lt(l)}Zt.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"ToolbarsContainer.svelte"};var he=E('<div role="toolbar"><div><!></div> <!></div>');function Dt(H,t){at(t,!0);const n=()=>J(o(i),"$showHelp",d),[d,b]=bt();let p=h(t,"classes",3,null),D=h(t,"ariaLabel",3,null),l=h(t,"orientation",3,"horizontal");const c=Ct("horizontal");_t("orientation",c),Bt(()=>{c.set(l())});const v=F("showHelpModals"),i=R(()=>v);var r=he(),u=L(r),s=L(u);nt(s,()=>t.children??et);var w=k(u,2);{var x=y=>{var T=K(),A=I(T);nt(A,()=>t.controls??et),e(y,T)};Z(w,y=>{n()||y(x)})}O(()=>{G(r,"aria-label",D()),dt(r,1,`toolbar ${l()==="vertical"?"":"flex-col"} ${p()}`,"svelte-1st7dmr"),dt(u,1,`grid--flex ${l()==="vertical"?"flex-col":""}`,"svelte-1st7dmr")}),e(H,r),lt(),b()}Dt.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"controls",visibility:"public",description:"Toolbar controls (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"classes",visibility:"public",description:"Additional CSS classes for the toolbar",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"ariaLabel",visibility:"public",description:"aria label for button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"orientation",visibility:"public",description:"Orientation of the toolbar",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"horizontal",text:'"horizontal"'},{kind:"const",type:"string",value:"vertical",text:'"vertical"'}],text:'"horizontal" | "vertical"'},static:!1,readonly:!1,defaultValue:'"horizontal"'}],name:"Toolbar.svelte"};var be=zt('<path opacity="0.2"></path>'),fe=zt("<path></path>"),ye=zt('<circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"></circle>'),me=zt('<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false"><!><!></svg>');function At(H,t){let n=h(t,"type",3,"move"),d=h(t,"marginLeft",3,!1),b=h(t,"marginRight",3,!1),p=h(t,"selected",3,!1),D=h(t,"disabled",3,!1);const l={move:{selected:"M29 16L16 29L3 16L16 3L29 16Z",d:"M11.293 7.707a1 1 0 0 1 0-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1-1.415 1.415L17 5.414V12a1 1 0 0 1-2 0V5.414l-2.293 2.293a1 1 0 0 1-1.415 0m8 16.586L17 26.586V20a1 1 0 0 0-2 0v6.586l-2.293-2.293a1 1 0 1 0-1.415 1.415l4 4a1 1 0 0 0 1.415 0l4-4a1 1 0 0 0-1.415-1.415m10.415-9-4-4a1 1 0 1 0-1.415 1.415L26.586 15H20a1 1 0 0 0 0 2h6.586l-2.293 2.293a1 1 0 1 0 1.415 1.415l4-4a1 1 0 0 0 0-1.415M5.413 17H12a1 1 0 0 0 0-2H5.414l2.293-2.293a1 1 0 1 0-1.415-1.415l-4 4a1 1 0 0 0 0 1.415l4 4a1 1 0 0 0 1.415-1.415z"},polygon:{selected:"M17.5 24L7.5 17V12.5L12.5 8.5L16 9L17.5 7.5L22.5 8.5L25 12.5L21 23L17.5 24Z",d:"M28.83 6.17a4 4 0 0 0-6.302.845L19 6.053a4 4 0 1 0-7.549 1.793L7.21 11.665a4.01 4.01 0 0 0-5.039.506 4 4 0 0 0 5.361 5.927l8.75 6.42a4 4 0 1 0 5.947-1.837l3.423-9.699q.172.015.345.016a4 4 0 0 0 2.829-6.828zM13.58 4.584a2 2 0 1 1-.433 2.18 2 2 0 0 1 .438-2.18zm-10 11.831a2 2 0 1 1 2.826-2.83 2 2 0 0 1-2.826 2.83m17.831 11a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.83 2.828m-1.069-5.398a4 4 0 0 0-2.874.886l-8.75-6.42a4.02 4.02 0 0 0-.168-3.332l4.244-3.818a4 4 0 0 0 5.683-1.352L22 8.945a4 4 0 0 0 1.765 3.375zm7.07-11.604a2 2 0 1 1-2.825-2.828 2 2 0 1 1 2.83 2.829z"},radius:{},erase:{d:"M28.125 10.05 22.95 4.875a3 3 0 0 0-4.242 0L3.874 19.708a3 3 0 0 0 0 4.242l3.758 3.758a1 1 0 0 0 .71.292H27a1 1 0 1 0 0-2H16.413l11.712-11.707a3 3 0 0 0 0-4.243M13.585 26H8.756l-3.465-3.465a1 1 0 0 1 0-1.414L12 14.414 18.586 21zM26.71 12.875 20 19.586 13.414 13l6.711-6.707a1 1 0 0 1 1.415 0l5.172 5.172a1 1 0 0 1 0 1.414z"},zoomin:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},zoomout:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},undo:{selected:"M10 5V17L4 11L10 5Z",d:"M29 18a8.01 8.01 0 0 1-8 8H10a1 1 0 1 1 0-2h11a6 6 0 1 0 0-12H6.414l4.294 4.293a1 1 0 0 1-1.416 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 10H21a8.01 8.01 0 0 1 8 8"},redo:{selected:"M28 11L22 17V5L28 11Z",d:"M21.293 16.293 25.586 12H11a6 6 0 1 0 0 12h11a1 1 0 0 1 0 2H11a8 8 0 1 1 0-16h14.586l-4.293-4.292a1.001 1.001 0 0 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415l-6 6a1 1 0 1 1-1.415-1.415"},search:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"m28.708 27.293-6.26-6.258a11.014 11.014 0 1 0-1.413 1.414l6.258 6.258a1 1 0 0 0 1.415-1.415M5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"},save:{selected:"M22.11,5H7.44c-1.36,0-2.44,1.1-2.44,2.44v17.11c0,1.34,1.09,2.44,2.44,2.44h17.11c1.34,0,2.44-1.1,2.44-2.44v-14.67l-4.89-4.89Z",d:"M27.71,9.18l-4.89-4.89c-.19-.19-.44-.29-.71-.29H7.44c-1.9,0-3.44,1.54-3.44,3.44v17.11c0,1.9,1.54,3.44,3.44,3.44h17.11c1.9,0,3.44-1.54,3.44-3.44v-14.67c0-.27-.11-.52-.29-.71ZM18.67,6v4.78h-8.26v-4.78h8.26ZM26,24.56c0,.8-.65,1.44-1.44,1.44H7.44c-.8,0-1.44-.65-1.44-1.44V7.44c0-.8.65-1.44,1.44-1.44h.96v5.78c0,.55.45,1,1,1h10.26c.55,0,1-.45,1-1v-5.78h1.03l4.3,4.3v14.25ZM16,15.65c-2.57,0-4.67,2.09-4.67,4.67s2.09,4.67,4.67,4.67,4.67-2.09,4.67-4.67-2.09-4.67-4.67-4.67ZM16,22.98c-1.47,0-2.67-1.2-2.67-2.67s1.2-2.67,2.67-2.67,2.67,1.2,2.67,2.67-1.2,2.67-2.67,2.67Z"},download:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-12.707.707a1 1 0 0 0 1.415 0l5-5a1 1 0 0 0-1.415-1.415L17 15.587V4a1 1 0 0 0-2 0v11.586l-3.293-3.293a1 1 0 1 0-1.415 1.415z"},upload:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0M11.708 9.707 15 6.414V18a1 1 0 0 0 2 0V6.414l3.293 3.293a1 1 0 1 0 1.415-1.415l-5-5a1 1 0 0 0-1.415 0l-5 5a1 1 0 0 0 1.415 1.415"},help:{selected:"M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16",d:"M17.5 22.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 2 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5m13 7A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"},bin:{selected:"M25 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7z",d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M12 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm12 21H8V8h16zM14 13v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0m6 0v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0"}};var c=K(),v=I(c);{var i=r=>{var u=me();let s;var w=L(u);{var x=f=>{var B=be();O(()=>G(B,"d",l[n()].selected)),e(f,B)};Z(w,f=>{p()&&f(x)})}var y=k(w);{var T=f=>{var B=fe();O(()=>G(B,"d",l[n()].d)),e(f,B)},A=f=>{var B=ye();O(()=>{G(B,"fill",p()?"#206095":"none"),G(B,"fill-opacity",p()?"0.2":"0")}),e(f,B)};Z(y,f=>{n()!="radius"?f(T):n()=="radius"&&f(A,1)})}O(()=>{s=dt(u,0,"ons-svg-icon ons-svg-icon--m svelte-1tnevp6",null,s,{"ons-u-ml-xs":d(),"ons-u-mr-xs":b(),selected:p()}),G(u,"fill",p()?"#206095":D()?"#BCBCBD":"currentColor")}),e(r,u)};Z(v,r=>{l[n()]&&r(i)})}e(H,c)}At.__docgen={data:[{name:"type",visibility:"public",description:'Type of icon, eg. "move", "polygon", "zoomin", "undo"',keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"move",text:'"move"'},{kind:"const",type:"string",value:"polygon",text:'"polygon"'},{kind:"const",type:"string",value:"radius",text:'"radius"'},{kind:"const",type:"string",value:"erase",text:'"erase"'},{kind:"const",type:"string",value:"zoomin",text:'"zoomin"'},{kind:"const",type:"string",value:"zoomout",text:'"zoomout"'},{kind:"const",type:"string",value:"undo",text:'"undo"'},{kind:"const",type:"string",value:"redo",text:'"redo"'},{kind:"const",type:"string",value:"search",text:'"search"'},{kind:"const",type:"string",value:"save",text:'"save"'},{kind:"const",type:"string",value:"download",text:'"download"'},{kind:"const",type:"string",value:"upload",text:'"upload"'},{kind:"const",type:"string",value:"help",text:'"help"'},{kind:"const",type:"string",value:"bin",text:'"bin"'}],text:'"move" | "polygon" | "radius" | "erase" | "zoomin" | "zoomout" | "undo" | "redo" | "search" | "save" | "download" | "upload" | "help" | "bin"'},static:!1,readonly:!1,defaultValue:'"move"'},{name:"marginLeft",visibility:"public",description:"Add a small margin on the left of the icon",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"marginRight",visibility:"public",description:"Add a small margin on the right of the icon",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"selected",visibility:"public",description:"Show the icon in its selected style",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",description:"Show the icon as disabled (greyed out)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarIcon.svelte"};var ge=E('<span style="margin-left:auto; margin-right:10px"><!></span>'),ke=E('<div class="help-modal-wrapper svelte-yxz9gw"><div class="help-modal-notch svelte-yxz9gw"></div> <div class="help-modal svelte-yxz9gw" role="dialog" aria-modal="true"><!> <div class="ons-padding-4 svelte-yxz9gw"><!></div> <div class="ons-grid-flex ons-grid-flex--between ons-grid-flex-vertical-center"><button class="btn-link svelte-yxz9gw" aria-label="Skip instructions">Skip</button> <!> <!> <!></div></div></div>');function Pt(H,t){at(t,!0);const n=()=>J(o(s),"$currentActiveId",p),d=()=>J(o(u),"$ids",p),b=()=>J(o(w),"$showHelp",p),[p,D]=bt();let l=h(t,"triggerElement",3,null),c=h(t,"onClose",3,()=>{});const v=F("activeModalId"),i=F("showHelpModals"),{buttonIds:r}=F("buttonIds"),u=R(()=>r),s=R(()=>v),w=R(()=>i);let x=Et({top:50,left:-5}),y=Et({left:17,right:"auto"}),T=ht(!1),A=ht(0);Bt(()=>{if(!l())return;const m=(l().closest(".toolbar-button-wrapper")??l()).getBoundingClientRect(),st=Math.min(360,(o(A)||window.innerWidth)-48),X=Math.max(16,Math.min(m.left-10,document.documentElement.clientWidth-st-16))-m.left;x.left=X,y.left=Math.max(10,Math.min(st-30,m.width/2-X-10)),y.right="auto"});function f(){localStorage.setItem("showHelpModals","false"),sessionStorage.setItem("showHelpModals","false"),i.set(!1)}function B(){sessionStorage.setItem("showHelpModals","false"),i.set(!1)}function it(){const _=n()===null?-1:d().indexOf(n());_!==-1&&_<d().length-1&&v.set(d()[_+1]),o(T)&&f()}function Y(){o(T)?f():B()}function j(){const _=n()===null?-1:d().indexOf(n());_>0&&v.set(d()[_-1]),o(T)&&f()}function tt(_){_.key==="Escape"&&c()()}var N=K();rt("keydown",Yt,tt);var Q=I(N);{var ft=_=>{var m=ke(),st=L(m),yt=k(st,2),X=L(yt);nt(X,()=>t.children??et);var vt=k(X,2),mt=L(vt);re(mt,{id:"dontShowMeAgain",label:"Don't show me again",compact:!0,get checked(){return o(T)},set checked(M){S(T,M,!0)}});var Lt=k(vt,2),gt=L(Lt),kt=k(gt,2);{var wt=M=>{var P=ge(),V=L(P);ut(V,{variant:"secondary",$$events:{click:j},children:(U,$)=>{var W=ot("Back");e(U,W)},$$slots:{default:!0}}),e(M,P)},Vt=R(()=>n()!==null&&d().indexOf(n())>0);Z(kt,M=>{o(Vt)&&M(wt)})}var Tt=k(kt,2);{var $t=M=>{ut(M,{$$events:{click:it},children:(P,V)=>{var U=ot("Next");e(P,U)},$$slots:{default:!0}})},g=R(()=>n()!==null&&d().indexOf(n())!=d().length-1);Z(Tt,M=>{o(g)&&M($t)})}var a=k(Tt,2);{var C=M=>{ut(M,{$$events:{click:B},children:(P,V)=>{var U=ot("Get started");e(P,U)},$$slots:{default:!0}})},z=R(()=>n()!==null&&d().indexOf(n())==d().length-1);Z(a,M=>{o(z)&&M(C)})}O(()=>{Ot(m,`top: ${x.top??""}px; left: ${x.left??""}px;`),Ot(st,`left: ${y.left??""}px;right: ${y.right??""}px;`)}),q("click",gt,Y),e(_,m)};Z(Q,_=>{b()&&_(ft)})}se("innerWidth",_=>S(A,_,!0)),e(H,N),lt(),D()}jt(["click"]);Pt.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"triggerElement",visibility:"public",description:"The element the modal is positioned next to",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"HTMLElement"},static:!1,readonly:!1,defaultValue:"null"},{name:"onClose",visibility:"public",description:"Called when the modal is closed with the Escape key",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"HelpModal.svelte"};var we=E('<div role="button" tabindex="0"><!></div>'),Rt=E('<!><span class="ons-u-vh"> </span>',1),Te=E('<input type="checkbox" class="ons-u-vh svelte-1m9f2nv"/> <label><!></label>',1),xe=E('<button type="button"><!></button>'),_e=E("<p> </p>"),Ce=E("<div> </div>"),Me=E('<div class="toolbar-button-wrapper svelte-1m9f2nv"><!> <!> <!></div>');function pt(H,t){at(t,!0);const n=()=>J(o(N),"$currentActiveId",p),d=()=>J(tt,"$activeModalId",p),b=()=>J(o(_),"$currentOrientation",p),[p,D]=bt();let l=h(t,"id",19,de),c=h(t,"icon",3,""),v=h(t,"label",3,""),i=h(t,"disabled",3,!1),r=h(t,"classes",3,""),u=h(t,"helpText",3,null),s=h(t,"selected",15),w=h(t,"toggle",3,!1),x=h(t,"custom",3,!1),y=h(t,"hasAriaControls",3,!1),T=h(t,"hasTooltip",3,!0),A=h(t,"sticky",3,!1),f=h(t,"transient",3,!1),B=h(t,"disableHelp",3,!1);s()===void 0&&s(!1);const it=te();function Y(){var g;(g=t.onClick)==null||g.call(t,null),it("click",null)}let j=ht(void 0);const tt=F("activeModalId"),N=R(()=>tt),Q=R(()=>n()===l()),ft=F("orientation"),_=R(()=>ft);let m=ht(!1);const{register:st,unregister:yt}=F("buttonIds");Gt(()=>{st(l())}),ee(()=>{yt(l())});function X(){if(!i()){if(f()){Y();return}else if(w()){s(!s()),Y();return}if(Y(),d()===l()&&A())return;tt.set(o(Q)?null:l())}}var vt=Me(),mt=L(vt);{var Lt=g=>{var a=we(),C=L(a);nt(C,()=>t.customContent??et),Mt(a,z=>S(j,z),()=>o(j)),q("keydown",a,z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),X())}),q("click",a,X),q("mouseover",a,()=>S(m,!0)),q("mouseout",a,()=>S(m,!1)),rt("focus",a,()=>S(m,!0)),rt("blur",a,()=>S(m,!1)),e(g,a)},gt=g=>{var a=Te(),C=I(a);Mt(C,$=>S(j,$),()=>o(j));var z=k(C,2);let M;var P=L(z);{var V=$=>{var W=Rt(),xt=I(W);{let Jt=R(()=>s()||o(Q)&&!f());At(xt,{get type(){return c()},get selected(){return o(Jt)},get disabled(){return i()}})}var St=k(xt),Xt=L(St);O(()=>ct(Xt,v())),e($,W)},U=$=>{var W=ot();O(()=>ct(W,v())),e($,W)};Z(P,$=>{c()?$(V):$(U,-1)})}O(()=>{C.disabled=i(),G(C,"id",`button-${l()}`),ie(C,s()),G(z,"for",`button-${l()}`),M=dt(z,1,`toolbar-button ${r()??""}`,"svelte-1m9f2nv",M,{selected:s()||o(Q)&&!f()})}),q("click",C,X),rt("focus",C,()=>S(m,!0)),rt("blur",C,()=>S(m,!1)),q("mouseover",z,()=>S(m,!0)),q("mouseout",z,()=>S(m,!1)),e(g,a)},kt=g=>{var a=xe();let C;var z=L(a);{var M=V=>{var U=Rt(),$=I(U);{let St=R(()=>s()||o(Q)&&!f());At($,{get type(){return c()},get selected(){return o(St)},get disabled(){return i()}})}var W=k($),xt=L(W);O(()=>ct(xt,v())),e(V,U)},P=V=>{var U=ot();O(()=>ct(U,v())),e(V,U)};Z(z,V=>{c()?V(M):V(P,-1)})}Mt(a,V=>S(j,V),()=>o(j)),O(()=>{G(a,"aria-label",v()),C=dt(a,1,`toolbar-button ${r()??""}`,"svelte-1m9f2nv",C,{selected:s()||o(Q)&&!f()}),a.disabled=i(),G(a,"id",`button-${l()}`),G(a,"aria-controls",y()?`panel-${l()}`:void 0)}),q("click",a,X),q("mouseover",a,()=>S(m,!0)),q("mouseout",a,()=>S(m,!1)),rt("focus",a,()=>S(m,!0)),rt("blur",a,()=>S(m,!1)),e(g,a)};Z(mt,g=>{x()?g(Lt):w()?g(gt,1):g(kt,-1)})}var wt=k(mt,2);{var Vt=g=>{var a=K(),C=I(a);{var z=P=>{Pt(P,{get triggerElement(){return o(j)},onClose:()=>tt.set(null),children:(V,U)=>{var $=_e(),W=L($);O(()=>ct(W,u())),e(V,$)},$$slots:{default:!0}})},M=P=>{Pt(P,{get triggerElement(){return o(j)},onClose:()=>tt.set(null),children:(V,U)=>{var $=K(),W=I($);nt(W,()=>t.children??et),e(V,$)},$$slots:{default:!0}})};Z(C,P=>{u()&&!B()?P(z):!u()&&!B()&&P(M,1)})}e(g,a)};Z(wt,g=>{o(Q)&&g(Vt)})}var Tt=k(wt,2);{var $t=g=>{var a=Ce();let C;var z=L(a);O(()=>{C=dt(a,1,"toolbar-tooltip ons-u-fs-s svelte-1m9f2nv",null,C,{"toolbar-tooltip-vertical":b()==="vertical"}),ct(z,v())}),e(g,a)};Z(Tt,g=>{T()&&o(m)&&g($t)})}e(H,vt),lt(),D()}jt(["keydown","click","mouseover","mouseout"]);pt.__docgen={data:[{name:"children",visibility:"public",description:"Content for the help modal, used when `helpText` isn't set (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"customContent",visibility:"public",description:"Custom content for the button, shown when `custom` is true (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"onClick",visibility:"public",description:"Callback for the `click` event, called with the same value as the event's `detail`",keywords:[],kind:"let",type:{kind:"function",text:"(detail: null) => void"},static:!1,readonly:!1},{name:"id",visibility:"public",description:"Links the button to the ToolControl with the same `id` (generated by default)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",description:'Icon on button, eg. "move", "zoomin" (see ToolbarIcon for options)',keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"",text:'""'},{kind:"const",type:"string",value:"move",text:'"move"'},{kind:"const",type:"string",value:"polygon",text:'"polygon"'},{kind:"const",type:"string",value:"radius",text:'"radius"'},{kind:"const",type:"string",value:"erase",text:'"erase"'},{kind:"const",type:"string",value:"zoomin",text:'"zoomin"'},{kind:"const",type:"string",value:"zoomout",text:'"zoomout"'},{kind:"const",type:"string",value:"undo",text:'"undo"'},{kind:"const",type:"string",value:"redo",text:'"redo"'},{kind:"const",type:"string",value:"search",text:'"search"'},{kind:"const",type:"string",value:"save",text:'"save"'},{kind:"const",type:"string",value:"download",text:'"download"'},{kind:"const",type:"string",value:"upload",text:'"upload"'},{kind:"const",type:"string",value:"help",text:'"help"'},{kind:"const",type:"string",value:"bin",text:'"bin"'}],text:'"" | "move" | "polygon" | "radius" | "erase" | "zoomin" | "zoomout" | "undo" | "redo" | "search" | "save" | "download" | "upload" | "help" | "bin"'},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",description:"Button label, shown in the tooltip and used as the aria label",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"disabled",visibility:"public",description:"Show button as disabled",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"classes",visibility:"public",description:"Additional CSS classes for the button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"helpText",visibility:"public",description:"Text shown in the help modal for this button. If not set, the `children` content is used",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"selected",visibility:"public",description:"Whether a toggle button is selected (bindable)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."},{name:"toggle",visibility:"public",description:"Make the button an on/off toggle (the state is in `selected`)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"custom",visibility:"public",description:"Render `customContent` instead of the standard button",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasAriaControls",visibility:"public",description:"Add `aria-controls`, pointing to the ToolControl panel with the same `id`",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasTooltip",visibility:"public",description:"Show the label in a tooltip on hover and focus",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"sticky",visibility:"public",description:"Keep the button's control open when the button is clicked again",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"transient",visibility:"public",description:"Run the click action only, without opening a control or staying selected (eg. undo)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disableHelp",visibility:"public",description:"Don't show a help modal for this button",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarButton.svelte"};var He=E('<div aria-hidden="true"></div>');function Ht(H,t){at(t,!0);const n=()=>J(o(l),"$orientation",d),[d,b]=bt();let p=h(t,"classes",3,"");const D=F("orientation"),l=R(()=>D);var c=He();O(()=>dt(c,1,`toolbar-divider ${n()} ${p()}`,"svelte-1sgnnls")),e(H,c),lt(),b()}Ht.__docgen={data:[{name:"classes",visibility:"public",description:"Additional CSS classes for the divider",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolbarDivider.svelte"};const Be=""+new URL("movepan-C6QMWXON.png",import.meta.url).href;function Nt(H,t){at(t,!0);const n=F("activeModalId"),d=R(()=>n);var b=K(),p=I(b);{var D=l=>{var c=K(),v=I(c);nt(v,()=>t.children??et),e(l,c)};Z(p,l=>{o(d)&&l(D)})}e(H,b),lt()}Nt.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"ToolControls.svelte"};var ze=E('<div class="tool-control svelte-1ej7ib3" role="tabpanel"><!></div>');function qt(H,t){at(t,!0);const n=()=>J(o(c),"$currentModalId",b),d=()=>J(o(v),"$showHelp",b),[b,p]=bt(),D=F("activeModalId"),l=F("showHelpModals"),c=R(()=>D),v=R(()=>l);let i=h(t,"id",3,"");var r=K(),u=I(r);{var s=w=>{var x=ze(),y=L(x);nt(y,()=>t.children??et),O(()=>{G(x,"aria-labelledby",`button-${i()}`),G(x,"id",`panel-${i()}`)}),e(w,x)};Z(u,w=>{n()===i()&&!d()&&w(s)})}e(H,r),lt(),p()}qt.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"id",visibility:"public",description:"The id of the ToolbarButton that shows this control",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolControl.svelte"};const Le=`<span class="ons-warning">This component is experimental</span>

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

<!-- prettier-ignore -->
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

<!-- prettier-ignore -->
\`\`\`html
<ToolbarsContainer>
	<Toolbar>
		<ToolbarButton
			id="zoomin"
			icon="zoomin"
			label="Zoom in"
			transient={true}
			selected={false}
		/>
		<ToolbarButton id="zoomout" icon="zoomout" label="zoom out" transient />
	</Toolbar>
</ToolbarsContainer>
\`\`\`

## No help modal

<!-- prettier-ignore -->
\`\`\`html
<ToolbarsContainer>
	<Toolbar>
		<ToolbarButton
			id="zoomin"
			icon="zoomin"
			label="Zoom in"
			transient={true}
			selected={false}
			disableHelp={true}
		/>
		<ToolbarButton id="zoomout" icon="zoomout" label="zoom out" disableHelp={true} transient />
	</Toolbar>
</ToolbarsContainer>
\`\`\`
`,Ut=(H,t=et)=>{Mt(Zt(H,{children:(n,d)=>{var b=Ft(),p=I(b);Dt(p,{get orientation(){return t().orientation},get ariaLabel(){return t().ariaLabel},controls:c=>{Nt(c,{children:(v,i)=>{qt(v,{id:"polygon",children:(r,u)=>{var s=Se(),w=k(I(s),2);ut(w,{variant:"secondary",disabled:!0,children:(y,T)=>{var A=ot("Clear shape");e(y,A)},$$slots:{default:!0}});var x=k(w,2);ut(x,{variant:"primary",children:(y,T)=>{var A=ot("Apply shape");e(y,A)},$$slots:{default:!0}}),e(r,s)},$$slots:{default:!0}})},$$slots:{default:!0}})},children:(c,v)=>{var i=K(),r=I(i);ce(r,1,()=>Ve,pe,(u,s)=>{let w=()=>o(s).type,x=()=>o(s).id,y=()=>o(s).icon,T=()=>o(s).label,A=()=>o(s).helpContent,f=()=>o(s).disabled,B=()=>o(s).hasAriaControls;var it=K(),Y=I(it);{var j=N=>{pt(N,{get id(){return x()},get icon(){return y()},get label(){return T()},get disabled(){return f()},get hasAriaControls(){return B()},children:(Q,ft)=>{var _=K(),m=I(_);ue(m,A),e(Q,_)},$$slots:{default:!0}})},tt=N=>{Ht(N,{})};Z(Y,N=>{w()==="button"?N(j):N(tt,-1)})}e(u,it)}),e(c,i)},$$slots:{controls:!0,default:!0}});var D=k(p,2);Dt(D,{get orientation(){return t().orientation},children:(l,c)=>{var v=De(),i=I(v);pt(i,{id:"download",icon:"download",label:"Download area"});var r=k(i,2);pt(r,{id:"upload",icon:"upload",label:"Upload a geometry"});var u=k(r,2);Ht(u,{});var s=k(u,2);pt(s,{id:"help",icon:"help",label:"Help",$$events:{click(...y){var T;(T=It.resetHelp)==null||T.apply(this,y)}}});var w=k(s,2);Ht(w,{});var x=k(w,2);pt(x,{id:"getstarted",custom:!0,label:"Get started",customContent:T=>{var A=Ie(),f=L(A);ut(f,{disabled:!0,small:!0,children:(B,it)=>{var Y=ot("Build profile");e(B,Y)},$$slots:{default:!0}}),e(T,A)},$$slots:{customContent:!0}}),e(l,v)},$$slots:{default:!0}}),e(n,b)},$$slots:{default:!0},$$legacy:!0}),n=>It=n,()=>It)};let It;const Ve=[{type:"button",id:"move",icon:"move",label:"Move and Pan",helpContent:`<h3>Move and pan</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p><img src='${Be}' alt='Move and pan' />`},{type:"button",id:"polygon",icon:"polygon",label:"Draw a polygon",helpContent:"<h3>Draw a polygon</h3><p>Left-click to add a point to the polygon. Double-click to finish drawing.</p>",hasAriaControls:!0},{type:"button",id:"circle",icon:"radius",label:"Draw a circle",helpContent:"<h3>Draw a circle</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"zoomin",icon:"zoomin",label:"Zoom in",helpContent:"<h3>Zoom in</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"zoomout",icon:"zoomout",label:"Zoom out",helpContent:"<h3>Zoom out</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"undo",icon:"undo",label:"Undo last step",helpContent:"<h3>Undo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"redo",icon:"redo",label:"Redo last step",helpContent:"<h3>Redo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",disabled:!0},{type:"divider"},{type:"button",id:"search",icon:"search",label:"Search for an area",helpContent:"<h3>Search</h3><p>Search for an area by name or postcode.</p>"}],$e={title:"Form elements/Toolbar",component:Zt,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}},parameters:ne(Le)},{Story:Wt}=le();var Se=E(`<p>Click or tap an area on the map to add a node to the shape. To apply a shape, close it
							by clicking or tapping on the starting node.</p> <!> <!>`,1),Ie=E("<div><!></div>"),De=E("<!> <!> <!> <!> <!> <!>",1),Ft=E("<!> <!>",1);function Kt(H,t){at(t,!1),ae();var n=Ft(),d=I(n);Wt(d,{name:"Default",args:{ariaLabel:"Toolbar"},get template(){return Ut},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
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
</ToolbarsContainer>`}}});var b=k(d,2);Wt(b,{name:"Vertical",args:{orientation:"vertical"},get template(){return Ut},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
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
</ToolbarsContainer>`}}}),e(H,n),lt()}Kt.__docgen={data:[],name:"Toolbar.stories.svelte"};const Qt=oe(Kt,$e),Ye=["Default","Vertical"],to={...Qt.Default,tags:["svelte-csf-v5"]},eo={...Qt.Vertical,tags:["svelte-csf-v5"]};export{to as Default,eo as Vertical,Ye as __namedExportsOrder,$e as default};
