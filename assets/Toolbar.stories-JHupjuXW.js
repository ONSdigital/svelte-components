import{A as Q,ag as pe,al as ve,au as he,G as s,ah as Le,f as D,j as t,I as q,k as I,ax as Ve,C as Ie,p as v,R as U,J as x,i as H,t as Z,Y as ue,X,av as E,l as R,m as V,Z as me,ay as Me,Q as fe,az as Ee,O as ee,P as Re,ai as Oe,K as xe,V as Ue}from"./iframe-rn-CYE4_.js";import{w as Ge,c as Ne,i as Xe,d as je}from"./create-runtime-stories-DUShD_-p.js";import{e as We,i as Ke}from"./each-CTmPshpe.js";import{h as Qe}from"./html-DutQzZpu.js";import{b as we}from"./this-Du894LZY.js";import{s as K}from"./slot-BP_Qo1ZM.js";import{s as P}from"./attributes-DzjqHavG.js";import{s as ce}from"./class-B9SFUanI.js";import{s as He}from"./style-CNURdi_Z.js";import{C as qe}from"./Checkbox-fowjCmP_.js";import{B as ne}from"./Button-DD_sagWL.js";import{s as Fe}from"./utils-VWytQRnm.js";import"./attributes-q36Eg1F8.js";import"./input-BTvYq71r.js";import"./Icon-_AjArVVV.js";import"./_commonjsHelpers-CqkleIqs.js";var Je=D('<div class="multi-toolbar-container svelte-msokpx"><!></div>');function _e(T,e){Q(e,!0);const o=ve([]);pe("buttonIds",{register:n=>{o.update(i=>[...i,n])},unregister:n=>{o.update(i=>i.filter(d=>d!==n))},buttonIds:o});let y=Ve(!0);he(()=>{const n=sessionStorage.getItem("showHelpModals"),i=localStorage.getItem("showHelpModals");Ie(y,n==="false"?!1:i!=="false",!0)});const a=ve(s(y));pe("showHelpModals",a),he(()=>{a.set(s(y))});const r=ve(null);pe("activeModalId",r),Le(()=>(window.addEventListener("beforeunload",()=>{sessionStorage.removeItem("showHelpModals")}),o.subscribe(i=>{i.length>0&&r.set(i[0])})));function b(){sessionStorage.setItem("showHelpModals","true"),a.set(!0)}var l=Je(),h=I(l);return K(h,e,"default",{},null),t(T,l),q({resetHelp:b})}_e.__docgen={data:[],name:"ToolbarsContainer.svelte"};var Ye=D('<div role="toolbar"><div><!></div> <!></div>');function ke(T,e){Q(e,!0);const[o,y]=ue(),a=()=>X(s(i),"$showHelp",o);let r=v(e,"classes",3,null),b=v(e,"ariaLabel",3,null),l=v(e,"orientation",3,"horizontal");const h=ve(l());pe("orientation",h),he(()=>{h.set(l())});const n=U("showHelpModals"),i=E(()=>n);var d=Ye(),c=I(d),C=I(c);K(C,e,"default",{},null);var w=x(c,2);{var m=u=>{var g=R(),f=V(g);K(f,e,"controls",{},null),t(u,g)};H(w,u=>{a()||u(m)})}Z(()=>{P(d,"aria-label",b()),ce(d,1,`toolbar ${l()==="vertical"?"":"flex-col"} ${r()}`,"svelte-4yb3b5"),ce(c,1,`grid--flex ${l()==="vertical"?"flex-col":""}`,"svelte-4yb3b5")}),t(T,d),q(),y()}ke.__docgen={data:[{name:"classes",visibility:"public",description:"- Additional classes for the button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"ariaLabel",visibility:"public",description:"- aria label for button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"orientation",visibility:"public",description:"- Orientation of the toolbar",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"horizontal",text:'"horizontal"'},{kind:"const",type:"string",value:"vertical",text:'"vertical"'}],text:'"horizontal" | "vertical"'},static:!1,readonly:!1,defaultValue:'"horizontal"'}],name:"Toolbar.svelte"};var et=me('<path opacity="0.2"></path>'),tt=me("<path></path>"),ot=me('<circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"></circle>'),at=me('<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false"><!><!></svg>');function De(T,e){let o=v(e,"type",3,"move"),y=v(e,"marginLeft",3,!1),a=v(e,"marginRight",3,!1),r=v(e,"selected",3,!1),b=v(e,"disabled",3,!1);const l={move:{selected:"M29 16L16 29L3 16L16 3L29 16Z",d:"M11.293 7.707a1 1 0 0 1 0-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1-1.415 1.415L17 5.414V12a1 1 0 0 1-2 0V5.414l-2.293 2.293a1 1 0 0 1-1.415 0m8 16.586L17 26.586V20a1 1 0 0 0-2 0v6.586l-2.293-2.293a1 1 0 1 0-1.415 1.415l4 4a1 1 0 0 0 1.415 0l4-4a1 1 0 0 0-1.415-1.415m10.415-9-4-4a1 1 0 1 0-1.415 1.415L26.586 15H20a1 1 0 0 0 0 2h6.586l-2.293 2.293a1 1 0 1 0 1.415 1.415l4-4a1 1 0 0 0 0-1.415M5.413 17H12a1 1 0 0 0 0-2H5.414l2.293-2.293a1 1 0 1 0-1.415-1.415l-4 4a1 1 0 0 0 0 1.415l4 4a1 1 0 0 0 1.415-1.415z"},polygon:{selected:"M17.5 24L7.5 17V12.5L12.5 8.5L16 9L17.5 7.5L22.5 8.5L25 12.5L21 23L17.5 24Z",d:"M28.83 6.17a4 4 0 0 0-6.302.845L19 6.053a4 4 0 1 0-7.549 1.793L7.21 11.665a4.01 4.01 0 0 0-5.039.506 4 4 0 0 0 5.361 5.927l8.75 6.42a4 4 0 1 0 5.947-1.837l3.423-9.699q.172.015.345.016a4 4 0 0 0 2.829-6.828zM13.58 4.584a2 2 0 1 1-.433 2.18 2 2 0 0 1 .438-2.18zm-10 11.831a2 2 0 1 1 2.826-2.83 2 2 0 0 1-2.826 2.83m17.831 11a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.83 2.828m-1.069-5.398a4 4 0 0 0-2.874.886l-8.75-6.42a4.02 4.02 0 0 0-.168-3.332l4.244-3.818a4 4 0 0 0 5.683-1.352L22 8.945a4 4 0 0 0 1.765 3.375zm7.07-11.604a2 2 0 1 1-2.825-2.828 2 2 0 1 1 2.83 2.829z"},radius:{},erase:{d:"M28.125 10.05 22.95 4.875a3 3 0 0 0-4.242 0L3.874 19.708a3 3 0 0 0 0 4.242l3.758 3.758a1 1 0 0 0 .71.292H27a1 1 0 1 0 0-2H16.413l11.712-11.707a3 3 0 0 0 0-4.243M13.585 26H8.756l-3.465-3.465a1 1 0 0 1 0-1.414L12 14.414 18.586 21zM26.71 12.875 20 19.586 13.414 13l6.711-6.707a1 1 0 0 1 1.415 0l5.172 5.172a1 1 0 0 1 0 1.414z"},zoomin:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},zoomout:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},undo:{selected:"M10 5V17L4 11L10 5Z",d:"M29 18a8.01 8.01 0 0 1-8 8H10a1 1 0 1 1 0-2h11a6 6 0 1 0 0-12H6.414l4.294 4.293a1 1 0 0 1-1.416 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 10H21a8.01 8.01 0 0 1 8 8"},redo:{selected:"M28 11L22 17V5L28 11Z",d:"M21.293 16.293 25.586 12H11a6 6 0 1 0 0 12h11a1 1 0 0 1 0 2H11a8 8 0 1 1 0-16h14.586l-4.293-4.292a1.001 1.001 0 0 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415l-6 6a1 1 0 1 1-1.415-1.415"},search:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"m28.708 27.293-6.26-6.258a11.014 11.014 0 1 0-1.413 1.414l6.258 6.258a1 1 0 0 0 1.415-1.415M5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"},download:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-12.707.707a1 1 0 0 0 1.415 0l5-5a1 1 0 0 0-1.415-1.415L17 15.587V4a1 1 0 0 0-2 0v11.586l-3.293-3.293a1 1 0 1 0-1.415 1.415z"},upload:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0M11.708 9.707 15 6.414V18a1 1 0 0 0 2 0V6.414l3.293 3.293a1 1 0 1 0 1.415-1.415l-5-5a1 1 0 0 0-1.415 0l-5 5a1 1 0 0 0 1.415 1.415"},help:{selected:"M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16",d:"M17.5 22.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 2 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5m13 7A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"},bin:{selected:"M25 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7z",d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M12 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm12 21H8V8h16zM14 13v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0m6 0v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0"}};var h=R(),n=V(h);{var i=d=>{var c=at();let C;var w=I(c);{var m=p=>{var $=et();Z(()=>P($,"d",l[o()].selected)),t(p,$)};H(w,p=>{r()&&p(m)})}var u=x(w);{var g=p=>{var $=tt();Z(()=>P($,"d",l[o()].d)),t(p,$)},f=(p,$)=>{{var A=S=>{var G=ot();Z(()=>{P(G,"fill",r()?"#206095":"none"),P(G,"fill-opacity",r()?"0.2":"0")}),t(S,G)};H(p,S=>{o()=="radius"&&S(A)},$)}};H(u,p=>{o()!="radius"?p(g):p(f,!1)})}Z(p=>{C=ce(c,0,"ons-svg-icon ons-svg-icon--m svelte-bb0877",null,C,p),P(c,"fill",r()?"#206095":b()?"#BCBCBD":"currentColor")},[()=>({"ons-u-ml-xs":y(),"ons-u-mr-xs":a(),selected:r()})]),t(d,c)};H(n,d=>{l[o()]&&d(i)})}t(T,h)}De.__docgen={data:[{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"move"'},{name:"marginLeft",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"marginRight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarIcon.svelte"};var lt=D('<span style="margin-left:auto; margin-right:10px"><!></span>'),nt=D('<div class="help-modal-wrapper svelte-65dccd"><div class="help-modal-notch svelte-65dccd"></div> <div class="help-modal svelte-65dccd" role="dialog" aria-modal="true"><!> <div class="ons-padding-4 svelte-65dccd"><!></div> <div class="ons-grid-flex ons-grid-flex--between ons-grid-flex-vertical-center"><button class="btn-link svelte-65dccd" aria-label="Skip instructions">Skip</button> <!> <!> <!></div></div></div>');function Te(T,e){Q(e,!0);const[o,y]=ue(),a=()=>X(s(c),"$ids",o),r=()=>X(s(C),"$currentActiveId",o),b=()=>X(s(w),"$showHelp",o);let l=v(e,"triggerElement",3,null),h=v(e,"onClose",3,()=>{});const n=U("activeModalId"),i=U("showHelpModals"),{buttonIds:d}=U("buttonIds"),c=E(()=>d),C=E(()=>n),w=E(()=>i);let m=Me({top:50,left:-5}),u=Me({left:17,right:"auto"}),g=Ve(!1);he(()=>{if(!l())return;const _=l().getBoundingClientRect(),N=window.innerWidth-_.right;let F=window.scrollX-10,oe=17,B="auto";N<300&&(F=window.scrollX-325,oe="auto",B=-350),m.left=F,u.left=oe,u.right=B});function f(){localStorage.setItem("showHelpModals","false"),sessionStorage.setItem("showHelpModals","false"),i.set(!1)}function p(){sessionStorage.setItem("showHelpModals","false"),i.set(!1)}function $(){const _=a().indexOf(r());_!==-1&&_<a().length-1&&n.set(a()[_+1]),s(g)&&f()}function A(){s(g)?f():p()}function S(){const _=a().indexOf(r());_>0&&n.set(a()[_-1]),s(g)&&f()}function G(_){_.key==="Escape"&&h()()}var z=R();fe("keydown",Ee,G);var te=V(z);{var ie=_=>{var N=nt(),F=I(N),oe=x(F,2),B=I(oe);K(B,e,"default",{},null);var k=x(B,2),J=I(k);qe(J,{id:"dontShowMeAgain",label:"Don't show me again",compact:!0,get checked(){return s(g)},set checked(L){Ie(g,L,!0)}});var Y=x(k,2),ae=I(Y),M=x(ae,2);{var O=L=>{var W=lt(),ye=I(W);ne(ye,{variant:"secondary",$$events:{click:S},children:(de,kt)=>{var Ze=ee("Back");t(de,Ze)},$$slots:{default:!0}}),t(L,W)};H(M,L=>{a().indexOf(r())>0&&L(O)})}var re=x(M,2);{var j=L=>{ne(L,{$$events:{click:$},children:(W,ye)=>{var de=ee("Next");t(W,de)},$$slots:{default:!0}})};H(re,L=>{a().indexOf(r())!=a().length-1&&L(j)})}var se=x(re,2);{var Ce=L=>{ne(L,{$$events:{click:p},children:(W,ye)=>{var de=ee("Get started");t(W,de)},$$slots:{default:!0}})};H(se,L=>{a().indexOf(r())==a().length-1&&L(Ce)})}Z(()=>{He(N,`top: ${m.top??""}px; left: ${m.left??""}px;`),He(F,`left: ${u.left??""}px;right: ${u.right??""}px;`)}),fe("click",ae,A),t(_,N)};H(te,_=>{b()&&_(ie)})}t(T,z),q(),y()}Te.__docgen={data:[{name:"triggerElement",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"HTMLElement"},static:!1,readonly:!1,defaultValue:"null"},{name:"onClose",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"HelpModal.svelte"};var it=D("<div><!></div>"),rt=D('<button type="button"><!></button>'),st=D("<p> </p>"),dt=D('<div class="toolbar-button-wrapper svelte-9pltb6"><!> <!></div>');function le(T,e){Q(e,!0);const[o,y]=ue(),a=()=>X(s($),"$currentActiveId",o),r=()=>X(p,"$activeModalId",o);let b=v(e,"id",19,Fe),l=v(e,"icon",3,""),h=v(e,"label",3,""),n=v(e,"disabled",3,!1),i=v(e,"classes",3,""),d=v(e,"helpText",3,null);v(e,"selected",3,!1);let c=v(e,"custom",3,!1),C=v(e,"hasAriaControls",3,!1),w=v(e,"sticky",3,!1),m=v(e,"transient",3,!1),u=v(e,"disableHelp",3,!1);const g=Re();let f;const p=U("activeModalId"),$=E(()=>p),A=E(()=>a()===b()),{register:S,unregister:G}=U("buttonIds");Le(()=>{S(b())}),Oe(()=>{G(b())});function z(){if(!n()){if(m()){g("click");return}if(g("click"),r()===b()&&w())return;p.set(s(A)?null:b())}}var te=dt(),ie=I(te);{var _=B=>{var k=it(),J=I(k);K(J,e,"custom",{},null),we(k,Y=>f=Y,()=>f),fe("click",k,z),t(B,k)},N=B=>{var k=rt(),J=I(k);{var Y=M=>{const O=E(()=>m()?!1:!!s(A));De(M,{get type(){return l()},get selected(){return s(O)},get disabled(){return n()}})},ae=M=>{var O=ee();Z(()=>xe(O,h())),t(M,O)};H(J,M=>{l()?M(Y):M(ae,!1)})}we(k,M=>f=M,()=>f),Z(()=>{P(k,"aria-label",h()),ce(k,1,`toolbar-button ${n()?"disabled":""} ${s(A)&&!m()?"selected":""} ${i()}`,"svelte-9pltb6"),k.disabled=n(),P(k,"id",`button-${b()}`),P(k,"aria-controls",C()?`panel-${b()}`:void 0)}),fe("click",k,z),t(B,k)};H(ie,B=>{c()?B(_):B(N,!1)})}var F=x(ie,2);{var oe=B=>{var k=R(),J=V(k);{var Y=M=>{Te(M,{get triggerElement(){return f},onClose:()=>p.set(null),children:(O,re)=>{var j=st(),se=I(j);Z(()=>xe(se,d())),t(O,j)},$$slots:{default:!0}})},ae=(M,O)=>{{var re=j=>{Te(j,{get triggerElement(){return f},onClose:()=>p.set(null),children:(se,Ce)=>{var L=R(),W=V(L);K(W,e,"default",{},null),t(se,L)},$$slots:{default:!0}})};H(M,j=>{!d()&&!u()&&j(re)},O)}};H(J,M=>{d()&&!u()?M(Y):M(ae,!1)})}t(B,k)};H(F,B=>{s(A)&&B(oe)})}t(T,te),q(),y()}le.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"helpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"custom",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasAriaControls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"sticky",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"transient",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disableHelp",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarButton.svelte"};var ct=D('<div aria-hidden="true"></div>');function be(T,e){Q(e,!0);const[o,y]=ue(),a=()=>X(s(l),"$orientation",o);let r=v(e,"classes",3,"");const b=U("orientation"),l=E(()=>b);var h=ct();Z(()=>ce(h,1,`toolbar-divider ${a()} ${r()}`,"svelte-18fvj13")),t(T,h),q(),y()}be.__docgen={data:[{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolbarDivider.svelte"};const ut=""+new URL("movepan-C6QMWXON.png",import.meta.url).href;function ze(T,e){Q(e,!0);const o=U("activeModalId"),y=E(()=>o);var a=R(),r=V(a);{var b=l=>{var h=R(),n=V(h);K(n,e,"default",{},null),t(l,h)};H(r,l=>{s(y)&&l(b)})}t(T,a),q()}ze.__docgen={data:[],name:"ToolControls.svelte"};var pt=D('<div class="tool-control svelte-1taxcu8" role="tabpanel"><!></div>');function Ae(T,e){Q(e,!0);const[o,y]=ue(),a=()=>X(s(h),"$currentModalId",o),r=()=>X(s(n),"$showHelp",o),b=U("activeModalId"),l=U("showHelpModals"),h=E(()=>b),n=E(()=>l);let i=v(e,"id",3,"");var d=R(),c=V(d);{var C=w=>{var m=pt(),u=I(m);K(u,e,"default",{},null),Z(()=>{P(m,"aria-labelledby",`button-${i()}`),P(m,"id",`panel-${i()}`)}),t(w,m)};H(c,w=>{a()===i()&&!r()&&w(C)})}t(T,d),q(),y()}Ae.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolControl.svelte"};const vt=`<span class="ons-warning">This component is experimental</span>

A toolbar component. Use \`ToolbarsContainer\` even if using one toolbar as it contains a store for all the IDs and the activeID.

There's a slot on ToolbarButton if you want to put in custom help text otherwise, there's the prop \`helpText\`.

Each \`ToolControl\` will display content underneath the row of buttons. The \`id\` needs to match the \`id\` of the button.

Use the prop \`hasAriaControls\` on a button to link the controls to the button.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ToolbarsContainer,Toolbar,ToolbarButton, ToolbarDivider,ToolControls,ToolControl, HelpModal } from "@onsvisual/svelte-components";
<\/script>

  <ToolbarsContainer>

    <Toolbar orientation="horizontal">
      <ToolbarButton icon="polygon" label="Draw a polygon" helpText="Draw a polygon on the map" hasAriaControls>
        <HelpModal>
          <h3>Detailed Help</h3>
          <p>More complex help text or even HTML content</p>
          <ul>
            <li>With lists</li>
            <li>Or other elements</li>
          </ul>
        </HelpModal>
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
    <ToolControls>
      <ToolControl id="polygon">
      <p>Text to display when polygon tool is selected, or even an input</p>
      </ToolControl>
    </Toolbar>


    // Second toolbar
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
`,$e=(T,e=Ue)=>{we(_e(T,{children:(o,y)=>{var a=gt(),r=V(a);ke(r,{get orientation(){return e().orientation},get ariaLabel(){return e().ariaLabel},children:(l,h)=>{var n=R(),i=V(n);We(i,1,()=>bt,Ke,(d,c)=>{let C=()=>s(c).type,w=()=>s(c).id,m=()=>s(c).icon,u=()=>s(c).label,g=()=>s(c).helpContent,f=()=>s(c).disabled,p=()=>s(c).hasAriaControls;var $=R(),A=V($);{var S=z=>{le(z,{get id(){return w()},get icon(){return m()},get label(){return u()},get disabled(){return f()},get hasAriaControls(){return p()},children:(te,ie)=>{var _=R(),N=V(_);Qe(N,g),t(te,_)},$$slots:{default:!0}})},G=z=>{be(z,{})};H(A,z=>{C()==="button"?z(S):z(G,!1)})}t(d,$)}),t(l,n)},$$slots:{default:!0,controls:(l,h)=>{ze(l,{slot:"controls",children:(n,i)=>{Ae(n,{id:"polygon",children:(d,c)=>{var C=ft(),w=x(V(C),2);ne(w,{variant:"secondary",disabled:!0,children:(u,g)=>{var f=ee("Clear shape");t(u,f)},$$slots:{default:!0}});var m=x(w,2);ne(m,{variant:"primary",children:(u,g)=>{var f=ee("Apply shape");t(u,f)},$$slots:{default:!0}}),t(d,C)},$$slots:{default:!0}})},$$slots:{default:!0}})}}});var b=x(r,2);ke(b,{get orientation(){return e().orientation},children:(l,h)=>{var n=yt(),i=V(n);le(i,{id:"download",icon:"download",label:"Download area"});var d=x(i,2);le(d,{id:"upload",icon:"upload",label:"Upload a geometry"});var c=x(d,2);be(c,{});var C=x(c,2);le(C,{id:"help",icon:"help",label:"Help",$$events:{click(...u){var g;(g=ge.resetHelp)==null||g.apply(this,u)}}});var w=x(C,2);be(w,{});var m=x(w,2);le(m,{id:"getstarted",custom:!0,label:"Get started",$$slots:{custom:(u,g)=>{var f=mt(),p=I(f);ne(p,{disabled:!0,small:!0,children:($,A)=>{var S=ee("Build profile");t($,S)},$$slots:{default:!0}}),t(u,f)}}}),t(l,n)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0},$$legacy:!0}),o=>ge=o,()=>ge)};let ge;const bt=[{type:"button",id:"move",icon:"move",label:"Move and Pan",helpContent:`<h3>Move and pan</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p><img src='${ut}' alt='Move and pan' />`},{type:"button",id:"polygon",icon:"polygon",label:"Draw a polygon",helpContent:"<h3>Draw a polygon</h3><p>Left-click to add a point to the polygon. Double-click to finish drawing.</p>",hasAriaControls:!0},{type:"button",id:"circle",icon:"radius",label:"Draw a circle",helpContent:"<h3>Draw a circle</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"zoomin",icon:"zoomin",label:"Zoom in",helpContent:"<h3>Zoom in</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"zoomout",icon:"zoomout",label:"Zoom out",helpContent:"<h3>Zoom out</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"undo",icon:"undo",label:"Undo last step",helpContent:"<h3>Undo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"redo",icon:"redo",label:"Redo last step",helpContent:"<h3>Redo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",disabled:!0},{type:"divider"},{type:"button",id:"search",icon:"search",label:"Search for an area",helpContent:"<h3>Search</h3><p>Search for an area by name or postcode.</p>"}],ht={title:"Form elements/Toolbar",component:_e,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}},parameters:Ge(vt)},{Story:Be}=je();var ft=D(`<p>Click or tap an area on the map to add a node to the shape. To apply a shape, close it
						by clicking or tapping on the starting node.</p> <!> <!>`,1),mt=D('<div slot="custom"><!></div>'),yt=D("<!> <!> <!> <!> <!> <!>",1),gt=D("<!> <!>",1),wt=D("<!> <!>",1);function Se(T,e){Q(e,!1),Xe();var o=wt(),y=V(o);Be(y,{name:"Default",args:{ariaLabel:"Toolbar"},get template(){return $e},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
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
		<ToolControls slot="controls">
			<ToolControl id="polygon">
				<p>
					Click or tap an area on the map to add a node to the shape. To apply a shape, close it
					by clicking or tapping on the starting node.
				</p>
				<Button variant="secondary" disabled>Clear shape</Button>
				<Button variant="primary">Apply shape</Button>
			</ToolControl>
		</ToolControls>
	</Toolbar>
	<Toolbar orientation={args.orientation}>
		<ToolbarButton id="download" icon="download" label="Download area" />
		<ToolbarButton id="upload" icon="upload" label="Upload a geometry" />
		<ToolbarDivider />
		<ToolbarButton id="help" icon="help" label="Help" on:click={container.resetHelp} />
		<ToolbarDivider />
		<ToolbarButton id="getstarted" custom label="Get started">
			<div slot="custom">
				<Button disabled small>Build profile</Button>
			</div>
		</ToolbarButton>
	</Toolbar>
</ToolbarsContainer>`}}});var a=x(y,2);Be(a,{name:"Vertical",args:{orientation:"vertical"},get template(){return $e},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
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
		<ToolControls slot="controls">
			<ToolControl id="polygon">
				<p>
					Click or tap an area on the map to add a node to the shape. To apply a shape, close it
					by clicking or tapping on the starting node.
				</p>
				<Button variant="secondary" disabled>Clear shape</Button>
				<Button variant="primary">Apply shape</Button>
			</ToolControl>
		</ToolControls>
	</Toolbar>
	<Toolbar orientation={args.orientation}>
		<ToolbarButton id="download" icon="download" label="Download area" />
		<ToolbarButton id="upload" icon="upload" label="Upload a geometry" />
		<ToolbarDivider />
		<ToolbarButton id="help" icon="help" label="Help" on:click={container.resetHelp} />
		<ToolbarDivider />
		<ToolbarButton id="getstarted" custom label="Get started">
			<div slot="custom">
				<Button disabled small>Build profile</Button>
			</div>
		</ToolbarButton>
	</Toolbar>
</ToolbarsContainer>`}}}),t(T,o),q()}Se.__docgen={data:[],name:"Toolbar.stories.svelte"};const Pe=Ne(Se,ht),Zt=["Default","Vertical"],Et={...Pe.Default,tags:["svelte-csf-v5"]},Rt={...Pe.Vertical,tags:["svelte-csf-v5"]};export{Et as Default,Rt as Vertical,Zt as __namedExportsOrder,ht as default};
