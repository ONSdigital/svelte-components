import{A as ee,ag as he,al as me,au as ge,G as r,ah as Se,f as I,j as t,I as te,k as V,ax as $e,C as re,p as u,R as j,J as T,i as $,t as A,Y as ce,X as N,av as O,l as q,m as D,Z as we,ay as Ie,Q as _e,az as je,O as ne,P as qe,ai as Ge,aw as Ne,K as fe,V as Xe}from"./iframe-ECOrwogc.js";import{w as We,c as Ke,i as Qe,d as Fe}from"./create-runtime-stories-C7FKDz7V.js";import{e as Je,i as Ye}from"./each-lDqeF4i9.js";import{h as et}from"./html-DCxFWSDM.js";import{b as xe}from"./this-BDZ7_eDc.js";import{s as Y}from"./slot-BP_Qo1ZM.js";import{s as U}from"./attributes-B89Yj83W.js";import{s as se}from"./class-B9SFUanI.js";import{s as De}from"./style-CNURdi_Z.js";import{C as tt}from"./Checkbox-Ju54To4Y.js";import{B as ie}from"./Button-DslkO0tc.js";import{s as ot}from"./utils-VWytQRnm.js";import"./attributes-q36Eg1F8.js";import"./input-5LbsD5kQ.js";import"./Icon-Dd-aKTKC.js";import"./_commonjsHelpers-CqkleIqs.js";var at=I('<div class="multi-toolbar-container svelte-msokpx"><!></div>');function Be(y,e){ee(e,!0);const a=me([]);he("buttonIds",{register:l=>{a.update(i=>[...i,l])},unregister:l=>{a.update(i=>i.filter(p=>p!==l))},buttonIds:a});let g=$e(!0);ge(()=>{const l=sessionStorage.getItem("showHelpModals"),i=localStorage.getItem("showHelpModals");re(g,l==="false"?!1:i!=="false",!0)});const n=me(r(g));he("showHelpModals",n),ge(()=>{n.set(r(g))});const d=me(null);he("activeModalId",d),Se(()=>(window.addEventListener("beforeunload",()=>{sessionStorage.removeItem("showHelpModals")}),a.subscribe(i=>{i.length>0&&d.set(i[0])})));function B(){sessionStorage.setItem("showHelpModals","true"),n.set(!0)}var o=at(),b=V(o);return Y(b,e,"default",{},null),t(y,o),te({resetHelp:B})}Be.__docgen={data:[],name:"ToolbarsContainer.svelte"};var nt=I('<div role="toolbar"><div><!></div> <!></div>');function Me(y,e){ee(e,!0);const[a,g]=ce(),n=()=>N(r(i),"$showHelp",a);let d=u(e,"classes",3,null),B=u(e,"ariaLabel",3,null),o=u(e,"orientation",3,"horizontal");const b=me(o());he("orientation",b),ge(()=>{b.set(o())});const l=j("showHelpModals"),i=O(()=>l);var p=nt(),s=V(p),H=V(s);Y(H,e,"default",{},null);var w=T(s,2);{var k=v=>{var f=q(),C=D(f);Y(C,e,"controls",{},null),t(v,f)};$(w,v=>{n()||v(k)})}A(()=>{U(p,"aria-label",B()),se(p,1,`toolbar ${o()==="vertical"?"":"flex-col"} ${d()}`,"svelte-4yb3b5"),se(s,1,`grid--flex ${o()==="vertical"?"flex-col":""}`,"svelte-4yb3b5")}),t(y,p),te(),g()}Me.__docgen={data:[{name:"classes",visibility:"public",description:"- Additional classes for the button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"ariaLabel",visibility:"public",description:"- aria label for button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"orientation",visibility:"public",description:"- Orientation of the toolbar",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"horizontal",text:'"horizontal"'},{kind:"const",type:"string",value:"vertical",text:'"vertical"'}],text:'"horizontal" | "vertical"'},static:!1,readonly:!1,defaultValue:'"horizontal"'}],name:"Toolbar.svelte"};var lt=we('<path opacity="0.2"></path>'),it=we("<path></path>"),rt=we('<circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"></circle>'),st=we('<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false"><!><!></svg>');function Pe(y,e){let a=u(e,"type",3,"move"),g=u(e,"marginLeft",3,!1),n=u(e,"marginRight",3,!1),d=u(e,"selected",3,!1),B=u(e,"disabled",3,!1);const o={move:{selected:"M29 16L16 29L3 16L16 3L29 16Z",d:"M11.293 7.707a1 1 0 0 1 0-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1-1.415 1.415L17 5.414V12a1 1 0 0 1-2 0V5.414l-2.293 2.293a1 1 0 0 1-1.415 0m8 16.586L17 26.586V20a1 1 0 0 0-2 0v6.586l-2.293-2.293a1 1 0 1 0-1.415 1.415l4 4a1 1 0 0 0 1.415 0l4-4a1 1 0 0 0-1.415-1.415m10.415-9-4-4a1 1 0 1 0-1.415 1.415L26.586 15H20a1 1 0 0 0 0 2h6.586l-2.293 2.293a1 1 0 1 0 1.415 1.415l4-4a1 1 0 0 0 0-1.415M5.413 17H12a1 1 0 0 0 0-2H5.414l2.293-2.293a1 1 0 1 0-1.415-1.415l-4 4a1 1 0 0 0 0 1.415l4 4a1 1 0 0 0 1.415-1.415z"},polygon:{selected:"M17.5 24L7.5 17V12.5L12.5 8.5L16 9L17.5 7.5L22.5 8.5L25 12.5L21 23L17.5 24Z",d:"M28.83 6.17a4 4 0 0 0-6.302.845L19 6.053a4 4 0 1 0-7.549 1.793L7.21 11.665a4.01 4.01 0 0 0-5.039.506 4 4 0 0 0 5.361 5.927l8.75 6.42a4 4 0 1 0 5.947-1.837l3.423-9.699q.172.015.345.016a4 4 0 0 0 2.829-6.828zM13.58 4.584a2 2 0 1 1-.433 2.18 2 2 0 0 1 .438-2.18zm-10 11.831a2 2 0 1 1 2.826-2.83 2 2 0 0 1-2.826 2.83m17.831 11a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.83 2.828m-1.069-5.398a4 4 0 0 0-2.874.886l-8.75-6.42a4.02 4.02 0 0 0-.168-3.332l4.244-3.818a4 4 0 0 0 5.683-1.352L22 8.945a4 4 0 0 0 1.765 3.375zm7.07-11.604a2 2 0 1 1-2.825-2.828 2 2 0 1 1 2.83 2.829z"},radius:{},erase:{d:"M28.125 10.05 22.95 4.875a3 3 0 0 0-4.242 0L3.874 19.708a3 3 0 0 0 0 4.242l3.758 3.758a1 1 0 0 0 .71.292H27a1 1 0 1 0 0-2H16.413l11.712-11.707a3 3 0 0 0 0-4.243M13.585 26H8.756l-3.465-3.465a1 1 0 0 1 0-1.414L12 14.414 18.586 21zM26.71 12.875 20 19.586 13.414 13l6.711-6.707a1 1 0 0 1 1.415 0l5.172 5.172a1 1 0 0 1 0 1.414z"},zoomin:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},zoomout:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},undo:{selected:"M10 5V17L4 11L10 5Z",d:"M29 18a8.01 8.01 0 0 1-8 8H10a1 1 0 1 1 0-2h11a6 6 0 1 0 0-12H6.414l4.294 4.293a1 1 0 0 1-1.416 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 10H21a8.01 8.01 0 0 1 8 8"},redo:{selected:"M28 11L22 17V5L28 11Z",d:"M21.293 16.293 25.586 12H11a6 6 0 1 0 0 12h11a1 1 0 0 1 0 2H11a8 8 0 1 1 0-16h14.586l-4.293-4.292a1.001 1.001 0 0 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415l-6 6a1 1 0 1 1-1.415-1.415"},search:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"m28.708 27.293-6.26-6.258a11.014 11.014 0 1 0-1.413 1.414l6.258 6.258a1 1 0 0 0 1.415-1.415M5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"},download:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-12.707.707a1 1 0 0 0 1.415 0l5-5a1 1 0 0 0-1.415-1.415L17 15.587V4a1 1 0 0 0-2 0v11.586l-3.293-3.293a1 1 0 1 0-1.415 1.415z"},upload:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0M11.708 9.707 15 6.414V18a1 1 0 0 0 2 0V6.414l3.293 3.293a1 1 0 1 0 1.415-1.415l-5-5a1 1 0 0 0-1.415 0l-5 5a1 1 0 0 0 1.415 1.415"},help:{selected:"M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16",d:"M17.5 22.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 2 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5m13 7A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"},bin:{selected:"M25 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7z",d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M12 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm12 21H8V8h16zM14 13v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0m6 0v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0"}};var b=q(),l=D(b);{var i=p=>{var s=st();let H;var w=V(s);{var k=h=>{var _=lt();A(()=>U(_,"d",o[a()].selected)),t(h,_)};$(w,h=>{d()&&h(k)})}var v=T(w);{var f=h=>{var _=it();A(()=>U(_,"d",o[a()].d)),t(h,_)},C=(h,_)=>{{var S=Z=>{var P=rt();A(()=>{U(P,"fill",d()?"#206095":"none"),U(P,"fill-opacity",d()?"0.2":"0")}),t(Z,P)};$(h,Z=>{a()=="radius"&&Z(S)},_)}};$(v,h=>{a()!="radius"?h(f):h(C,!1)})}A(h=>{H=se(s,0,"ons-svg-icon ons-svg-icon--m svelte-bb0877",null,H,h),U(s,"fill",d()?"#206095":B()?"#BCBCBD":"currentColor")},[()=>({"ons-u-ml-xs":g(),"ons-u-mr-xs":n(),selected:d()})]),t(p,s)};$(l,p=>{o[a()]&&p(i)})}t(y,b)}Pe.__docgen={data:[{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"move"'},{name:"marginLeft",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"marginRight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarIcon.svelte"};var dt=I('<span style="margin-left:auto; margin-right:10px"><!></span>'),ct=I('<div class="help-modal-wrapper svelte-1q2vmfj"><div class="help-modal-notch svelte-1q2vmfj"></div> <div class="help-modal svelte-1q2vmfj" role="dialog" aria-modal="true"><!> <div class="ons-padding-4 svelte-1q2vmfj"><!></div> <div class="ons-grid-flex ons-grid-flex--between ons-grid-flex-vertical-center"><button class="btn-link svelte-1q2vmfj" aria-label="Skip instructions">Skip</button> <!> <!> <!></div></div></div>');function He(y,e){ee(e,!0);const[a,g]=ce(),n=()=>N(r(s),"$ids",a),d=()=>N(r(H),"$currentActiveId",a),B=()=>N(r(w),"$showHelp",a);let o=u(e,"triggerElement",3,null),b=u(e,"onClose",3,()=>{});const l=j("activeModalId"),i=j("showHelpModals"),{buttonIds:p}=j("buttonIds"),s=O(()=>p),H=O(()=>l),w=O(()=>i);let k=Ie({top:50,left:-5}),v=Ie({left:17,right:"auto"}),f=$e(!1);ge(()=>{if(!o())return;const x=o().getBoundingClientRect(),X=window.innerWidth-x.right;let F=window.scrollX-10,oe=17,J="auto";X<300&&(F=window.scrollX-325,oe="auto",J=-350),k.left=F,v.left=oe,v.right=J});function C(){localStorage.setItem("showHelpModals","false"),sessionStorage.setItem("showHelpModals","false"),i.set(!1)}function h(){sessionStorage.setItem("showHelpModals","false"),i.set(!1)}function _(){const x=n().indexOf(d());x!==-1&&x<n().length-1&&l.set(n()[x+1]),r(f)&&C()}function S(){r(f)?C():h()}function Z(){const x=n().indexOf(d());x>0&&l.set(n()[x-1]),r(f)&&C()}function P(x){x.key==="Escape"&&b()()}var E=q();_e("keydown",je,P);var de=D(E);{var Q=x=>{var X=ct(),F=V(X),oe=T(F,2),J=V(oe);Y(J,e,"default",{},null);var ue=T(J,2),ke=V(ue);tt(ke,{id:"dontShowMeAgain",label:"Don't show me again",compact:!0,get checked(){return r(f)},set checked(M){re(f,M,!0)}});var pe=T(ue,2),ve=V(pe),be=T(ve,2);{var Te=M=>{var m=dt(),z=V(m);ie(z,{variant:"secondary",$$events:{click:Z},children:(R,K)=>{var ae=ne("Back");t(R,ae)},$$slots:{default:!0}}),t(M,m)};$(be,M=>{n().indexOf(d())>0&&M(Te)})}var L=T(be,2);{var c=M=>{ie(M,{$$events:{click:_},children:(m,z)=>{var R=ne("Next");t(m,R)},$$slots:{default:!0}})};$(L,M=>{n().indexOf(d())!=n().length-1&&M(c)})}var G=T(L,2);{var W=M=>{ie(M,{$$events:{click:h},children:(m,z)=>{var R=ne("Get started");t(m,R)},$$slots:{default:!0}})};$(G,M=>{n().indexOf(d())==n().length-1&&M(W)})}A(()=>{De(X,`top: ${k.top??""}px; left: ${k.left??""}px;`),De(F,`left: ${v.left??""}px;right: ${v.right??""}px;`)}),_e("click",ve,S),t(x,X)};$(de,x=>{B()&&x(Q)})}t(y,E),te(),g()}He.__docgen={data:[{name:"triggerElement",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"HTMLElement"},static:!1,readonly:!1,defaultValue:"null"},{name:"onClose",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"HelpModal.svelte"};var ut=I("<div><!></div>"),pt=(y,e)=>re(e,!0),vt=(y,e)=>re(e,!1),bt=I('<!><span class="ons-u-vh"> </span>',1),ft=I('<button type="button"><!></button>'),ht=I("<p> </p>"),mt=I("<div> </div>"),yt=I('<div class="toolbar-button-wrapper svelte-1cbon03"><!> <!> <!></div>');function le(y,e){ee(e,!0);const[a,g]=ce(),n=()=>N(r(Z),"$currentActiveId",a),d=()=>N(S,"$activeModalId",a),B=()=>N(r(de),"$currentOrientation",a);let o=u(e,"id",19,ot),b=u(e,"icon",3,""),l=u(e,"label",3,""),i=u(e,"disabled",3,!1),p=u(e,"classes",3,""),s=u(e,"helpText",3,null);u(e,"selected",3,!1);let H=u(e,"custom",3,!1),w=u(e,"hasAriaControls",3,!1),k=u(e,"hasTooltip",3,!0),v=u(e,"sticky",3,!1),f=u(e,"transient",3,!1),C=u(e,"disableHelp",3,!1);const h=qe();let _;const S=j("activeModalId"),Z=O(()=>S),P=O(()=>n()===o()),E=j("orientation"),de=O(()=>E);let Q=$e(!1);const{register:x,unregister:X}=j("buttonIds");Se(()=>{x(o())}),Ge(()=>{X(o())});function F(){if(!i()){if(f()){h("click");return}if(h("click"),d()===o()&&v())return;S.set(r(P)?null:o())}}var oe=yt(),J=V(oe);{var ue=L=>{var c=ut();c.__click=F;var G=V(c);Y(G,e,"custom",{},null),xe(c,W=>_=W,()=>_),t(L,c)},ke=L=>{var c=ft();c.__click=F,c.__mouseover=[pt,Q],c.__mouseout=[vt,Q];var G=V(c);{var W=m=>{var z=bt(),R=D(z);const K=O(()=>f()?!1:!!r(P));Pe(R,{get type(){return b()},get selected(){return r(K)},get disabled(){return i()}});var ae=T(R),Le=V(ae);A(()=>fe(Le,l())),t(m,z)},M=m=>{var z=ne();A(()=>fe(z,l())),t(m,z)};$(G,m=>{b()?m(W):m(M,!1)})}xe(c,m=>_=m,()=>_),A(()=>{U(c,"aria-label",l()),se(c,1,`toolbar-button ${i()?"disabled":""} ${r(P)&&!f()?"selected":""} ${p()}`,"svelte-1cbon03"),c.disabled=i(),U(c,"id",`button-${o()}`),U(c,"aria-controls",w()?`panel-${o()}`:void 0)}),_e("focus",c,()=>re(Q,!0)),_e("blur",c,()=>re(Q,!1)),t(L,c)};$(J,L=>{H()?L(ue):L(ke,!1)})}var pe=T(J,2);{var ve=L=>{var c=q(),G=D(c);{var W=m=>{He(m,{get triggerElement(){return _},onClose:()=>S.set(null),children:(z,R)=>{var K=ht(),ae=V(K);A(()=>fe(ae,s())),t(z,K)},$$slots:{default:!0}})},M=(m,z)=>{{var R=K=>{He(K,{get triggerElement(){return _},onClose:()=>S.set(null),children:(ae,Le)=>{var Ve=q(),Ue=D(Ve);Y(Ue,e,"default",{},null),t(ae,Ve)},$$slots:{default:!0}})};$(m,K=>{!s()&&!C()&&K(R)},z)}};$(G,m=>{s()&&!C()?m(W):m(M,!1)})}t(L,c)};$(pe,L=>{r(P)&&L(ve)})}var be=T(pe,2);{var Te=L=>{var c=mt();let G;var W=V(c);A(M=>{G=se(c,1,"toolbar-tooltip ons-u-fs-s svelte-1cbon03",null,G,M),fe(W,l())},[()=>({"toolbar-tooltip-vertical":B()==="vertical"})]),t(L,c)};$(be,L=>{k()&&r(Q)&&L(Te)})}t(y,oe),te(),g()}Ne(["click","mouseover","mouseout"]);le.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"helpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"custom",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasAriaControls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasTooltip",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"sticky",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"transient",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disableHelp",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarButton.svelte"};var gt=I('<div aria-hidden="true"></div>');function ye(y,e){ee(e,!0);const[a,g]=ce(),n=()=>N(r(o),"$orientation",a);let d=u(e,"classes",3,"");const B=j("orientation"),o=O(()=>B);var b=gt();A(()=>se(b,1,`toolbar-divider ${n()} ${d()}`,"svelte-18fvj13")),t(y,b),te(),g()}ye.__docgen={data:[{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolbarDivider.svelte"};const _t=""+new URL("movepan-C6QMWXON.png",import.meta.url).href;function Oe(y,e){ee(e,!0);const a=j("activeModalId"),g=O(()=>a);var n=q(),d=D(n);{var B=o=>{var b=q(),l=D(b);Y(l,e,"default",{},null),t(o,b)};$(d,o=>{r(g)&&o(B)})}t(y,n),te()}Oe.__docgen={data:[],name:"ToolControls.svelte"};var wt=I('<div class="tool-control svelte-1taxcu8" role="tabpanel"><!></div>');function Ze(y,e){ee(e,!0);const[a,g]=ce(),n=()=>N(r(b),"$currentModalId",a),d=()=>N(r(l),"$showHelp",a),B=j("activeModalId"),o=j("showHelpModals"),b=O(()=>B),l=O(()=>o);let i=u(e,"id",3,"");var p=q(),s=D(p);{var H=w=>{var k=wt(),v=V(k);Y(v,e,"default",{},null),A(()=>{U(k,"aria-labelledby",`button-${i()}`),U(k,"id",`panel-${i()}`)}),t(w,k)};$(s,w=>{n()===i()&&!d()&&w(H)})}t(y,p),te(),g()}Ze.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolControl.svelte"};const kt=`<span class="ons-warning">This component is experimental</span>

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
`,ze=(y,e=Xe)=>{xe(Be(y,{children:(a,g)=>{var n=$t(),d=D(n);Me(d,{get orientation(){return e().orientation},get ariaLabel(){return e().ariaLabel},children:(o,b)=>{var l=q(),i=D(l);Je(i,1,()=>Tt,Ye,(p,s)=>{let H=()=>r(s).type,w=()=>r(s).id,k=()=>r(s).icon,v=()=>r(s).label,f=()=>r(s).helpContent,C=()=>r(s).disabled,h=()=>r(s).hasAriaControls;var _=q(),S=D(_);{var Z=E=>{le(E,{get id(){return w()},get icon(){return k()},get label(){return v()},get disabled(){return C()},get hasAriaControls(){return h()},children:(de,Q)=>{var x=q(),X=D(x);et(X,f),t(de,x)},$$slots:{default:!0}})},P=E=>{ye(E,{})};$(S,E=>{H()==="button"?E(Z):E(P,!1)})}t(p,_)}),t(o,l)},$$slots:{default:!0,controls:(o,b)=>{Oe(o,{slot:"controls",children:(l,i)=>{Ze(l,{id:"polygon",children:(p,s)=>{var H=xt(),w=T(D(H),2);ie(w,{variant:"secondary",disabled:!0,children:(v,f)=>{var C=ne("Clear shape");t(v,C)},$$slots:{default:!0}});var k=T(w,2);ie(k,{variant:"primary",children:(v,f)=>{var C=ne("Apply shape");t(v,C)},$$slots:{default:!0}}),t(p,H)},$$slots:{default:!0}})},$$slots:{default:!0}})}}});var B=T(d,2);Me(B,{get orientation(){return e().orientation},children:(o,b)=>{var l=Ht(),i=D(l);le(i,{id:"download",icon:"download",label:"Download area"});var p=T(i,2);le(p,{id:"upload",icon:"upload",label:"Upload a geometry"});var s=T(p,2);ye(s,{});var H=T(s,2);le(H,{id:"help",icon:"help",label:"Help",$$events:{click(...v){var f;(f=Ce.resetHelp)==null||f.apply(this,v)}}});var w=T(H,2);ye(w,{});var k=T(w,2);le(k,{id:"getstarted",custom:!0,label:"Get started",$$slots:{custom:(v,f)=>{var C=Mt(),h=V(C);ie(h,{disabled:!0,small:!0,children:(_,S)=>{var Z=ne("Build profile");t(_,Z)},$$slots:{default:!0}}),t(v,C)}}}),t(o,l)},$$slots:{default:!0}}),t(a,n)},$$slots:{default:!0},$$legacy:!0}),a=>Ce=a,()=>Ce)};let Ce;const Tt=[{type:"button",id:"move",icon:"move",label:"Move and Pan",helpContent:`<h3>Move and pan</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p><img src='${_t}' alt='Move and pan' />`},{type:"button",id:"polygon",icon:"polygon",label:"Draw a polygon",helpContent:"<h3>Draw a polygon</h3><p>Left-click to add a point to the polygon. Double-click to finish drawing.</p>",hasAriaControls:!0},{type:"button",id:"circle",icon:"radius",label:"Draw a circle",helpContent:"<h3>Draw a circle</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"zoomin",icon:"zoomin",label:"Zoom in",helpContent:"<h3>Zoom in</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"zoomout",icon:"zoomout",label:"Zoom out",helpContent:"<h3>Zoom out</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"undo",icon:"undo",label:"Undo last step",helpContent:"<h3>Undo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"redo",icon:"redo",label:"Redo last step",helpContent:"<h3>Redo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",disabled:!0},{type:"divider"},{type:"button",id:"search",icon:"search",label:"Search for an area",helpContent:"<h3>Search</h3><p>Search for an area by name or postcode.</p>"}],Ct={title:"Form elements/Toolbar",component:Be,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}},parameters:We(kt)},{Story:Ae}=Fe();var xt=I(`<p>Click or tap an area on the map to add a node to the shape. To apply a shape, close it
						by clicking or tapping on the starting node.</p> <!> <!>`,1),Mt=I('<div slot="custom"><!></div>'),Ht=I("<!> <!> <!> <!> <!> <!>",1),$t=I("<!> <!>",1),Bt=I("<!> <!>",1);function Ee(y,e){ee(e,!1),Qe();var a=Bt(),g=D(a);Ae(g,{name:"Default",args:{ariaLabel:"Toolbar"},get template(){return ze},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
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
</ToolbarsContainer>`}}});var n=T(g,2);Ae(n,{name:"Vertical",args:{orientation:"vertical"},get template(){return ze},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
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
</ToolbarsContainer>`}}}),t(y,a),te()}Ee.__docgen={data:[],name:"Toolbar.stories.svelte"};const Re=Ke(Ee,Ct),Nt=["Default","Vertical"],Xt={...Re.Default,tags:["svelte-csf-v5"]},Wt={...Re.Vertical,tags:["svelte-csf-v5"]};export{Xt as Default,Wt as Vertical,Nt as __namedExportsOrder,Ct as default};
