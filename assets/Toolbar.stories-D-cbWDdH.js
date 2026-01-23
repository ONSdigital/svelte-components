import{p as Q,ak as pe,ao as ve,au as he,g as s,$ as Le,j as D,e as o,h as K,n as I,ax as Ve,s as Ie,a as v,O,k as x,i as H,t as R,X as ue,W,av as Z,c as E,f as V,P as me,ay as Me,R as fe,az as Ze,V as ee,Q as Ee,a0 as Ue,q as xe,Z as Oe}from"./iframe-yAvQPCXH.js";import{w as Ne,c as Ge,i as We,d as Xe}from"./create-runtime-stories-C-ZHg9b5.js";import{e as je,i as qe}from"./each-f3xhqABg.js";import{h as Qe}from"./html-cGmXETtv.js";import{b as we}from"./this-p_i7pN6D.js";import{s as q}from"./slot-BP_Qo1ZM.js";import{s as P}from"./attributes-CZ0E5Nqe.js";import{s as ce}from"./class-Dzh9Da8g.js";import{s as He}from"./style-CcY6orqc.js";import{C as Ke}from"./Checkbox-CUMaDVXA.js";import{B as le}from"./Button-KwUmL1nJ.js";import"./attributes-Co-1QMVx.js";import"./input-BGKAs53f.js";import"./Icon-iKuGk3-A.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";var Fe=D('<div class="multi-toolbar-container svelte-msokpx"><!></div>');function _e(y,e){Q(e,!0);const t=ve([]);pe("buttonIds",{register:l=>{t.update(r=>[...r,l])},unregister:l=>{t.update(r=>r.filter(d=>d!==l))},buttonIds:t});let g=Ve(!0);he(()=>{const l=sessionStorage.getItem("showHelpModals"),r=localStorage.getItem("showHelpModals");Ie(g,l==="false"?!1:r!=="false",!0)});const a=ve(s(g));pe("showHelpModals",a),he(()=>{a.set(s(g))});const i=ve(null);pe("activeModalId",i),Le(()=>(window.addEventListener("beforeunload",()=>{sessionStorage.removeItem("showHelpModals")}),t.subscribe(r=>{r.length>0&&i.set(r[0])})));function b(){sessionStorage.setItem("showHelpModals","true"),a.set(!0)}var n=Fe(),h=I(n);return q(h,e,"default",{},null),o(y,n),K({resetHelp:b})}_e.__docgen={data:[],name:"ToolbarsContainer.svelte"};var Je=D('<div role="toolbar"><div><!></div> <!></div>');function ke(y,e){Q(e,!0);const[t,g]=ue(),a=()=>W(s(r),"$showHelp",t);let i=v(e,"classes",3,null),b=v(e,"ariaLabel",3,null),n=v(e,"orientation",3,"horizontal");const h=ve(n());pe("orientation",h),he(()=>{h.set(n())});const l=O("showHelpModals"),r=Z(()=>l);var d=Je(),c=I(d),C=I(c);q(C,e,"default",{},null);var k=x(c,2);{var m=u=>{var w=E(),f=V(w);q(f,e,"controls",{},null),o(u,w)};H(k,u=>{a()||u(m)})}R(()=>{P(d,"aria-label",b()),ce(d,1,`toolbar ${n()==="vertical"?"":"flex-col"} ${i()}`,"svelte-4yb3b5"),ce(c,1,`grid--flex ${n()==="vertical"?"flex-col":""}`,"svelte-4yb3b5")}),o(y,d),K(),g()}ke.__docgen={data:[{name:"classes",visibility:"public",description:"- Additional classes for the button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"ariaLabel",visibility:"public",description:"- aria label for button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"orientation",visibility:"public",description:"- Orientation of the toolbar",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"horizontal",text:'"horizontal"'},{kind:"const",type:"string",value:"vertical",text:'"vertical"'}],text:'"horizontal" | "vertical"'},static:!1,readonly:!1,defaultValue:'"horizontal"'}],name:"Toolbar.svelte"};var Ye=me('<path opacity="0.2"></path>'),et=me("<path></path>"),tt=me('<circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"></circle>'),ot=me('<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false"><!><!></svg>');function De(y,e){let t=v(e,"type",3,"move"),g=v(e,"marginLeft",3,!1),a=v(e,"marginRight",3,!1),i=v(e,"selected",3,!1),b=v(e,"disabled",3,!1);const n={move:{selected:"M29 16L16 29L3 16L16 3L29 16Z",d:"M11.293 7.707a1 1 0 0 1 0-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1-1.415 1.415L17 5.414V12a1 1 0 0 1-2 0V5.414l-2.293 2.293a1 1 0 0 1-1.415 0m8 16.586L17 26.586V20a1 1 0 0 0-2 0v6.586l-2.293-2.293a1 1 0 1 0-1.415 1.415l4 4a1 1 0 0 0 1.415 0l4-4a1 1 0 0 0-1.415-1.415m10.415-9-4-4a1 1 0 1 0-1.415 1.415L26.586 15H20a1 1 0 0 0 0 2h6.586l-2.293 2.293a1 1 0 1 0 1.415 1.415l4-4a1 1 0 0 0 0-1.415M5.413 17H12a1 1 0 0 0 0-2H5.414l2.293-2.293a1 1 0 1 0-1.415-1.415l-4 4a1 1 0 0 0 0 1.415l4 4a1 1 0 0 0 1.415-1.415z"},polygon:{selected:"M17.5 24L7.5 17V12.5L12.5 8.5L16 9L17.5 7.5L22.5 8.5L25 12.5L21 23L17.5 24Z",d:"M28.83 6.17a4 4 0 0 0-6.302.845L19 6.053a4 4 0 1 0-7.549 1.793L7.21 11.665a4.01 4.01 0 0 0-5.039.506 4 4 0 0 0 5.361 5.927l8.75 6.42a4 4 0 1 0 5.947-1.837l3.423-9.699q.172.015.345.016a4 4 0 0 0 2.829-6.828zM13.58 4.584a2 2 0 1 1-.433 2.18 2 2 0 0 1 .438-2.18zm-10 11.831a2 2 0 1 1 2.826-2.83 2 2 0 0 1-2.826 2.83m17.831 11a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.83 2.828m-1.069-5.398a4 4 0 0 0-2.874.886l-8.75-6.42a4.02 4.02 0 0 0-.168-3.332l4.244-3.818a4 4 0 0 0 5.683-1.352L22 8.945a4 4 0 0 0 1.765 3.375zm7.07-11.604a2 2 0 1 1-2.825-2.828 2 2 0 1 1 2.83 2.829z"},radius:{},erase:{d:"M28.125 10.05 22.95 4.875a3 3 0 0 0-4.242 0L3.874 19.708a3 3 0 0 0 0 4.242l3.758 3.758a1 1 0 0 0 .71.292H27a1 1 0 1 0 0-2H16.413l11.712-11.707a3 3 0 0 0 0-4.243M13.585 26H8.756l-3.465-3.465a1 1 0 0 1 0-1.414L12 14.414 18.586 21zM26.71 12.875 20 19.586 13.414 13l6.711-6.707a1 1 0 0 1 1.415 0l5.172 5.172a1 1 0 0 1 0 1.414z"},zoomin:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},zoomout:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},undo:{selected:"M10 5V17L4 11L10 5Z",d:"M29 18a8.01 8.01 0 0 1-8 8H10a1 1 0 1 1 0-2h11a6 6 0 1 0 0-12H6.414l4.294 4.293a1 1 0 0 1-1.416 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 10H21a8.01 8.01 0 0 1 8 8"},redo:{selected:"M28 11L22 17V5L28 11Z",d:"M21.293 16.293 25.586 12H11a6 6 0 1 0 0 12h11a1 1 0 0 1 0 2H11a8 8 0 1 1 0-16h14.586l-4.293-4.292a1.001 1.001 0 0 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415l-6 6a1 1 0 1 1-1.415-1.415"},search:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"m28.708 27.293-6.26-6.258a11.014 11.014 0 1 0-1.413 1.414l6.258 6.258a1 1 0 0 0 1.415-1.415M5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"},download:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-12.707.707a1 1 0 0 0 1.415 0l5-5a1 1 0 0 0-1.415-1.415L17 15.587V4a1 1 0 0 0-2 0v11.586l-3.293-3.293a1 1 0 1 0-1.415 1.415z"},upload:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0M11.708 9.707 15 6.414V18a1 1 0 0 0 2 0V6.414l3.293 3.293a1 1 0 1 0 1.415-1.415l-5-5a1 1 0 0 0-1.415 0l-5 5a1 1 0 0 0 1.415 1.415"},help:{selected:"M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16",d:"M17.5 22.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 2 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5m13 7A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"},bin:{selected:"M25 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7z",d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M12 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm12 21H8V8h16zM14 13v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0m6 0v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0"}};var h=E(),l=V(h);{var r=d=>{var c=ot();let C;var k=I(c);{var m=p=>{var $=Ye();R(()=>P($,"d",n[t()].selected)),o(p,$)};H(k,p=>{i()&&p(m)})}var u=x(k);{var w=p=>{var $=et();R(()=>P($,"d",n[t()].d)),o(p,$)},f=(p,$)=>{{var A=S=>{var N=tt();R(()=>{P(N,"fill",i()?"#206095":"none"),P(N,"fill-opacity",i()?"0.2":"0")}),o(S,N)};H(p,S=>{t()=="radius"&&S(A)},$)}};H(u,p=>{t()!="radius"?p(w):p(f,!1)})}R(p=>{C=ce(c,0,"ons-svg-icon ons-svg-icon--m svelte-bb0877",null,C,p),P(c,"fill",i()?"#206095":b()?"#BCBCBD":"currentColor")},[()=>({"ons-u-ml-xs":g(),"ons-u-mr-xs":a(),selected:i()})]),o(d,c)};H(l,d=>{n[t()]&&d(r)})}o(y,h)}De.__docgen={data:[{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"move"'},{name:"marginLeft",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"marginRight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarIcon.svelte"};var at=D('<span style="margin-left:auto; margin-right:10px"><!></span>'),nt=D('<div class="help-modal-wrapper svelte-65dccd"><div class="help-modal-notch svelte-65dccd"></div> <div class="help-modal svelte-65dccd" role="dialog" aria-modal="true"><!> <div class="ons-padding-4 svelte-65dccd"><!></div> <div class="ons-grid-flex ons-grid-flex--between ons-grid-flex-vertical-center"><button class="btn-link svelte-65dccd" aria-label="Skip instructions">Skip</button> <!> <!> <!></div></div></div>');function Te(y,e){Q(e,!0);const[t,g]=ue(),a=()=>W(s(c),"$ids",t),i=()=>W(s(C),"$currentActiveId",t),b=()=>W(s(k),"$showHelp",t);let n=v(e,"triggerElement",3,null),h=v(e,"onClose",3,()=>{});const l=O("activeModalId"),r=O("showHelpModals"),{buttonIds:d}=O("buttonIds"),c=Z(()=>d),C=Z(()=>l),k=Z(()=>r);let m=Me({top:50,left:-5}),u=Me({left:17,right:"auto"}),w=Ve(!1);he(()=>{if(!n())return;const _=n().getBoundingClientRect(),G=window.innerWidth-_.right;let F=window.scrollX-10,oe=17,B="auto";G<300&&(F=window.scrollX-325,oe="auto",B=-350),m.left=F,u.left=oe,u.right=B});function f(){localStorage.setItem("showHelpModals","false"),sessionStorage.setItem("showHelpModals","false"),r.set(!1)}function p(){sessionStorage.setItem("showHelpModals","false"),r.set(!1)}function $(){const _=a().indexOf(i());_!==-1&&_<a().length-1&&l.set(a()[_+1]),s(w)&&f()}function A(){s(w)?f():p()}function S(){const _=a().indexOf(i());_>0&&l.set(a()[_-1]),s(w)&&f()}function N(_){_.key==="Escape"&&h()()}var z=E();fe("keydown",Ze,N);var te=V(z);{var re=_=>{var G=nt(),F=I(G),oe=x(F,2),B=I(oe);q(B,e,"default",{},null);var T=x(B,2),J=I(T);Ke(J,{id:"dontShowMeAgain",label:"Don't show me again",compact:!0,get checked(){return s(w)},set checked(L){Ie(w,L,!0)}});var Y=x(T,2),ae=I(Y),M=x(ae,2);{var U=L=>{var j=at(),ye=I(j);le(ye,{variant:"secondary",$$events:{click:S},children:(de,kt)=>{var Re=ee("Back");o(de,Re)},$$slots:{default:!0}}),o(L,j)};H(M,L=>{a().indexOf(i())>0&&L(U)})}var ie=x(M,2);{var X=L=>{le(L,{$$events:{click:$},children:(j,ye)=>{var de=ee("Next");o(j,de)},$$slots:{default:!0}})};H(ie,L=>{a().indexOf(i())!=a().length-1&&L(X)})}var se=x(ie,2);{var Ce=L=>{le(L,{$$events:{click:p},children:(j,ye)=>{var de=ee("Get started");o(j,de)},$$slots:{default:!0}})};H(se,L=>{a().indexOf(i())==a().length-1&&L(Ce)})}R(()=>{He(G,`top: ${m.top??""}px; left: ${m.left??""}px;`),He(F,`left: ${u.left??""}px;right: ${u.right??""}px;`)}),fe("click",ae,A),o(_,G)};H(te,_=>{b()&&_(re)})}o(y,z),K(),g()}Te.__docgen={data:[{name:"triggerElement",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"HTMLElement"},static:!1,readonly:!1,defaultValue:"null"},{name:"onClose",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"HelpModal.svelte"};let lt=(y=21)=>crypto.getRandomValues(new Uint8Array(y)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");var rt=D("<div><!></div>"),it=D('<button type="button"><!></button>'),st=D("<p> </p>"),dt=D('<div class="toolbar-button-wrapper svelte-9pltb6"><!> <!></div>');function ne(y,e){Q(e,!0);const[t,g]=ue(),a=()=>W(s($),"$currentActiveId",t),i=()=>W(p,"$activeModalId",t);let b=v(e,"id",19,()=>lt(6)),n=v(e,"icon",3,""),h=v(e,"label",3,""),l=v(e,"disabled",3,!1),r=v(e,"classes",3,""),d=v(e,"helpText",3,null);v(e,"selected",3,!1);let c=v(e,"custom",3,!1),C=v(e,"hasAriaControls",3,!1),k=v(e,"sticky",3,!1),m=v(e,"transient",3,!1),u=v(e,"disableHelp",3,!1);const w=Ee();let f;const p=O("activeModalId"),$=Z(()=>p),A=Z(()=>a()===b()),{register:S,unregister:N}=O("buttonIds");Le(()=>{S(b())}),Ue(()=>{N(b())});function z(){if(!l()){if(m()){w("click");return}if(w("click"),i()===b()&&k())return;p.set(s(A)?null:b())}}var te=dt(),re=I(te);{var _=B=>{var T=rt(),J=I(T);q(J,e,"custom",{},null),we(T,Y=>f=Y,()=>f),fe("click",T,z),o(B,T)},G=B=>{var T=it(),J=I(T);{var Y=M=>{const U=Z(()=>m()?!1:!!s(A));De(M,{get type(){return n()},get selected(){return s(U)},get disabled(){return l()}})},ae=M=>{var U=ee();R(()=>xe(U,h())),o(M,U)};H(J,M=>{n()?M(Y):M(ae,!1)})}we(T,M=>f=M,()=>f),R(()=>{P(T,"aria-label",h()),ce(T,1,`toolbar-button ${l()?"disabled":""} ${s(A)&&!m()?"selected":""} ${r()}`,"svelte-9pltb6"),T.disabled=l(),P(T,"id",`button-${b()}`),P(T,"aria-controls",C()?`panel-${b()}`:void 0)}),fe("click",T,z),o(B,T)};H(re,B=>{c()?B(_):B(G,!1)})}var F=x(re,2);{var oe=B=>{var T=E(),J=V(T);{var Y=M=>{Te(M,{get triggerElement(){return f},onClose:()=>p.set(null),children:(U,ie)=>{var X=st(),se=I(X);R(()=>xe(se,d())),o(U,X)},$$slots:{default:!0}})},ae=(M,U)=>{{var ie=X=>{Te(X,{get triggerElement(){return f},onClose:()=>p.set(null),children:(se,Ce)=>{var L=E(),j=V(L);q(j,e,"default",{},null),o(se,L)},$$slots:{default:!0}})};H(M,X=>{!d()&&!u()&&X(ie)},U)}};H(J,M=>{d()&&!u()?M(Y):M(ae,!1)})}o(B,T)};H(F,B=>{s(A)&&B(oe)})}o(y,te),K(),g()}ne.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"helpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"custom",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasAriaControls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"sticky",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"transient",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disableHelp",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarButton.svelte"};var ct=D('<div aria-hidden="true"></div>');function be(y,e){Q(e,!0);const[t,g]=ue(),a=()=>W(s(n),"$orientation",t);let i=v(e,"classes",3,"");const b=O("orientation"),n=Z(()=>b);var h=ct();R(()=>ce(h,1,`toolbar-divider ${a()} ${i()}`,"svelte-18fvj13")),o(y,h),K(),g()}be.__docgen={data:[{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolbarDivider.svelte"};const ut=""+new URL("movepan-C6QMWXON.png",import.meta.url).href;function ze(y,e){Q(e,!0);const t=O("activeModalId"),g=Z(()=>t);var a=E(),i=V(a);{var b=n=>{var h=E(),l=V(h);q(l,e,"default",{},null),o(n,h)};H(i,n=>{s(g)&&n(b)})}o(y,a),K()}ze.__docgen={data:[],name:"ToolControls.svelte"};var pt=D('<div class="tool-control svelte-1taxcu8" role="tabpanel"><!></div>');function Ae(y,e){Q(e,!0);const[t,g]=ue(),a=()=>W(s(h),"$currentModalId",t),i=()=>W(s(l),"$showHelp",t),b=O("activeModalId"),n=O("showHelpModals"),h=Z(()=>b),l=Z(()=>n);let r=v(e,"id",3,"");var d=E(),c=V(d);{var C=k=>{var m=pt(),u=I(m);q(u,e,"default",{},null),R(()=>{P(m,"aria-labelledby",`button-${r()}`),P(m,"id",`panel-${r()}`)}),o(k,m)};H(c,k=>{a()===r()&&!i()&&k(C)})}o(y,d),K(),g()}Ae.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolControl.svelte"};const vt=`<span class="ons-warning">This component is experimental</span>\r
\r
A toolbar component. Use \`ToolbarsContainer\` even if using one toolbar as it contains a store for all the IDs and the activeID.\r
\r
There's a slot on ToolbarButton if you want to put in custom help text otherwise, there's the prop \`helpText\`.\r
\r
Each \`ToolControl\` will display content underneath the row of buttons. The \`id\` needs to match the \`id\` of the button.\r
\r
Use the prop \`hasAriaControls\` on a button to link the controls to the button.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { ToolbarsContainer,Toolbar,ToolbarButton, ToolbarDivider,ToolControls,ToolControl, HelpModal } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
  <ToolbarsContainer>\r
\r
    <Toolbar orientation="horizontal">\r
      <ToolbarButton icon="polygon" label="Draw a polygon" helpText="Draw a polygon on the map" hasAriaControls>\r
        <HelpModal>\r
          <h3>Detailed Help</h3>\r
          <p>More complex help text or even HTML content</p>\r
          <ul>\r
            <li>With lists</li>\r
            <li>Or other elements</li>\r
          </ul>\r
        </HelpModal>\r
      </ToolbarButton>\r
      <ToolbarButton\r
        icon="radius"\r
        label="Draw a circle"\r
        helpText="Draw a circle using this tool"\r
      />\r
      <ToolbarDivider />\r
      <ToolbarButton\r
        icon="zoomin"\r
        label="Zoom in"\r
      />\r
      <ToolbarButton icon="zoomout" label="Zoom out" />\r
    <ToolControls>\r
      <ToolControl id="polygon">\r
      <p>Text to display when polygon tool is selected, or even an input</p>\r
      </ToolControl>\r
    </Toolbar>\r
\r
\r
    // Second toolbar\r
    <Toolbar>\r
      <ToolbarButton id="upload" icon="upload"/>\r
      <ToolbarButton id="download" icon="download"/>\r
    </Toolbar>\r
  </ToolbarsContainer>\r
\`\`\`\r
\r
## Sticky buttons\r
\r
\`\`\`html\r
<ToolbarsContainer>\r
	<Toolbar>\r
		<ToolbarButton id="move" icon="move" label="Move and Pan" sticky />\r
		<ToolbarButton id="polygon" icon="polygon" label="Draw a polygon" sticky />\r
		<ToolbarButton id="circle" icon="radius" label="Draw a circle" sticky />\r
	</Toolbar>\r
</ToolbarsContainer>\r
\`\`\`\r
\r
## Transient buttons\r
\r
\`\`\`html\r
<ToolbarsContainer>\r
	<Toolbar>\r
		<ToolbarButton\r
			id="zoomin"\r
			icon="zoomin"\r
			label="Zoom in"\r
			transient="{true}"\r
			selected="{false}"\r
		/>\r
		<ToolbarButton id="zoomout" icon="zoomout" label="zoom out" transient />\r
	</Toolbar>\r
</ToolbarsContainer>\r
\`\`\`\r
\r
## No help modal\r
\r
\`\`\`html\r
<ToolbarsContainer>\r
	<Toolbar>\r
		<ToolbarButton\r
			id="zoomin"\r
			icon="zoomin"\r
			label="Zoom in"\r
			transient="{true}"\r
			selected="{false}"\r
			disableHelp="{true}"\r
		/>\r
		<ToolbarButton id="zoomout" icon="zoomout" label="zoom out" disableHelp="{true}" transient />\r
	</Toolbar>\r
</ToolbarsContainer>\r
\`\`\`\r
`,$e=(y,e=Oe)=>{we(_e(y,{children:(t,g)=>{var a=gt(),i=V(a);ke(i,{get orientation(){return e().orientation},get ariaLabel(){return e().ariaLabel},children:(n,h)=>{var l=E(),r=V(l);je(r,1,()=>bt,qe,(d,c)=>{let C=()=>s(c).type,k=()=>s(c).id,m=()=>s(c).icon,u=()=>s(c).label,w=()=>s(c).helpContent,f=()=>s(c).disabled,p=()=>s(c).hasAriaControls;var $=E(),A=V($);{var S=z=>{ne(z,{get id(){return k()},get icon(){return m()},get label(){return u()},get disabled(){return f()},get hasAriaControls(){return p()},children:(te,re)=>{var _=E(),G=V(_);Qe(G,w),o(te,_)},$$slots:{default:!0}})},N=z=>{be(z,{})};H(A,z=>{C()==="button"?z(S):z(N,!1)})}o(d,$)}),o(n,l)},$$slots:{default:!0,controls:(n,h)=>{ze(n,{slot:"controls",children:(l,r)=>{Ae(l,{id:"polygon",children:(d,c)=>{var C=ft(),k=x(V(C),2);le(k,{variant:"secondary",disabled:!0,children:(u,w)=>{var f=ee("Clear shape");o(u,f)},$$slots:{default:!0}});var m=x(k,2);le(m,{variant:"primary",children:(u,w)=>{var f=ee("Apply shape");o(u,f)},$$slots:{default:!0}}),o(d,C)},$$slots:{default:!0}})},$$slots:{default:!0}})}}});var b=x(i,2);ke(b,{get orientation(){return e().orientation},children:(n,h)=>{var l=yt(),r=V(l);ne(r,{id:"download",icon:"download",label:"Download area"});var d=x(r,2);ne(d,{id:"upload",icon:"upload",label:"Upload a geometry"});var c=x(d,2);be(c,{});var C=x(c,2);ne(C,{id:"help",icon:"help",label:"Help",$$events:{click(...u){var w;(w=ge.resetHelp)==null||w.apply(this,u)}}});var k=x(C,2);be(k,{});var m=x(k,2);ne(m,{id:"getstarted",custom:!0,label:"Get started",$$slots:{custom:(u,w)=>{var f=mt(),p=I(f);le(p,{disabled:!0,small:!0,children:($,A)=>{var S=ee("Build profile");o($,S)},$$slots:{default:!0}}),o(u,f)}}}),o(n,l)},$$slots:{default:!0}}),o(t,a)},$$slots:{default:!0},$$legacy:!0}),t=>ge=t,()=>ge)};let ge;const bt=[{type:"button",id:"move",icon:"move",label:"Move and Pan",helpContent:`<h3>Move and pan</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p><img src='${ut}' alt='Move and pan' />`},{type:"button",id:"polygon",icon:"polygon",label:"Draw a polygon",helpContent:"<h3>Draw a polygon</h3><p>Left-click to add a point to the polygon. Double-click to finish drawing.</p>",hasAriaControls:!0},{type:"button",id:"circle",icon:"radius",label:"Draw a circle",helpContent:"<h3>Draw a circle</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"zoomin",icon:"zoomin",label:"Zoom in",helpContent:"<h3>Zoom in</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"zoomout",icon:"zoomout",label:"Zoom out",helpContent:"<h3>Zoom out</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"undo",icon:"undo",label:"Undo last step",helpContent:"<h3>Undo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"redo",icon:"redo",label:"Redo last step",helpContent:"<h3>Redo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",disabled:!0},{type:"divider"},{type:"button",id:"search",icon:"search",label:"Search for an area",helpContent:"<h3>Search</h3><p>Search for an area by name or postcode.</p>"}],ht={title:"Inputs/Toolbar",component:_e,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}},parameters:Ne(vt)},{Story:Be}=Xe();var ft=D(`<p>Click or tap an area on the map to add a node to the shape. To apply a shape, close it
						by clicking or tapping on the starting node.</p> <!> <!>`,1),mt=D('<div slot="custom"><!></div>'),yt=D("<!> <!> <!> <!> <!> <!>",1),gt=D("<!> <!>",1),wt=D("<!> <!>",1);function Se(y,e){Q(e,!1),We();var t=wt(),g=V(t);Be(g,{name:"Default",args:{ariaLabel:"Toolbar"},get template(){return $e},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>\r
	<Toolbar orientation={args.orientation} ariaLabel={args.ariaLabel}>\r
		{#each toolbarContent as { type, id, icon, label, helpContent, disabled, hasAriaControls }}\r
			{#if type === "button"}\r
				<ToolbarButton {id} {icon} {label} {disabled} {hasAriaControls}>\r
					{@html helpContent}\r
				</ToolbarButton>\r
			{:else}\r
				<ToolbarDivider />\r
			{/if}\r
		{/each}\r
		<ToolControls slot="controls">\r
			<ToolControl id="polygon">\r
				<p>\r
					Click or tap an area on the map to add a node to the shape. To apply a shape, close it\r
					by clicking or tapping on the starting node.\r
				</p>\r
				<Button variant="secondary" disabled>Clear shape</Button>\r
				<Button variant="primary">Apply shape</Button>\r
			</ToolControl>\r
		</ToolControls>\r
	</Toolbar>\r
	<Toolbar orientation={args.orientation}>\r
		<ToolbarButton id="download" icon="download" label="Download area" />\r
		<ToolbarButton id="upload" icon="upload" label="Upload a geometry" />\r
		<ToolbarDivider />\r
		<ToolbarButton id="help" icon="help" label="Help" on:click={container.resetHelp} />\r
		<ToolbarDivider />\r
		<ToolbarButton id="getstarted" custom label="Get started">\r
			<div slot="custom">\r
				<Button disabled small>Build profile</Button>\r
			</div>\r
		</ToolbarButton>\r
	</Toolbar>\r
</ToolbarsContainer>`}}});var a=x(g,2);Be(a,{name:"Vertical",args:{orientation:"vertical"},get template(){return $e},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>\r
	<Toolbar orientation={args.orientation} ariaLabel={args.ariaLabel}>\r
		{#each toolbarContent as { type, id, icon, label, helpContent, disabled, hasAriaControls }}\r
			{#if type === "button"}\r
				<ToolbarButton {id} {icon} {label} {disabled} {hasAriaControls}>\r
					{@html helpContent}\r
				</ToolbarButton>\r
			{:else}\r
				<ToolbarDivider />\r
			{/if}\r
		{/each}\r
		<ToolControls slot="controls">\r
			<ToolControl id="polygon">\r
				<p>\r
					Click or tap an area on the map to add a node to the shape. To apply a shape, close it\r
					by clicking or tapping on the starting node.\r
				</p>\r
				<Button variant="secondary" disabled>Clear shape</Button>\r
				<Button variant="primary">Apply shape</Button>\r
			</ToolControl>\r
		</ToolControls>\r
	</Toolbar>\r
	<Toolbar orientation={args.orientation}>\r
		<ToolbarButton id="download" icon="download" label="Download area" />\r
		<ToolbarButton id="upload" icon="upload" label="Upload a geometry" />\r
		<ToolbarDivider />\r
		<ToolbarButton id="help" icon="help" label="Help" on:click={container.resetHelp} />\r
		<ToolbarDivider />\r
		<ToolbarButton id="getstarted" custom label="Get started">\r
			<div slot="custom">\r
				<Button disabled small>Build profile</Button>\r
			</div>\r
		</ToolbarButton>\r
	</Toolbar>\r
</ToolbarsContainer>`}}}),o(y,t),K()}Se.__docgen={data:[],name:"Toolbar.stories.svelte"};const Pe=Ge(Se,ht),Rt=["Default","Vertical"],Zt={...Pe.Default,tags:["svelte-csf-v5"]},Et={...Pe.Vertical,tags:["svelte-csf-v5"]};export{Zt as Default,Et as Vertical,Rt as __namedExportsOrder,ht as default};
