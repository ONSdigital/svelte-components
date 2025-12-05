import{p as q,ak as ue,ao as pe,au as be,g as d,$ as Le,j as z,e as o,h as Q,n as D,ax as Ve,s as De,a as v,O,k as _,i as x,t as R,X as fe,W as Y,av as Z,c as E,f as V,P as me,ay as xe,R as he,az as Ze,V as ee,Q as Ee,a0 as Ue,q as Me,Z as Oe}from"./iframe-CLrlnsTP.js";import{w as Ne,c as Ge,i as We,d as Xe}from"./create-runtime-stories-B2eo7_kk.js";import{e as je,i as qe}from"./each-Cs4okM3g.js";import{h as Qe}from"./html-B00aVwnn.js";import{b as we}from"./this-JrdOqCcO.js";import{s as j}from"./slot-BP_Qo1ZM.js";import{s as P}from"./attributes-BPiJ-9gJ.js";import{s as ce}from"./class-Dzh9Da8g.js";import{s as He}from"./style-CcY6orqc.js";import{C as Ke}from"./Checkbox-CyM_8i7f.js";import{B as le}from"./Button-Dc1uF2Tp.js";import"./attributes-Co-1QMVx.js";import"./input-Btg7vxk2.js";import"./Icon-BXZ93Rd8.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";var Fe=z('<div class="multi-toolbar-container svelte-msokpx"><!></div>');function _e(m,e){q(e,!0);const t=pe([]);ue("buttonIds",{register:l=>{t.update(r=>[...r,l])},unregister:l=>{t.update(r=>r.filter(i=>i!==l))},buttonIds:t});let y=Ve(!0);be(()=>{const l=sessionStorage.getItem("showHelpModals"),r=localStorage.getItem("showHelpModals");De(y,l==="false"?!1:r!=="false",!0)});const a=pe(d(y));ue("showHelpModals",a),be(()=>{a.set(d(y))});const s=pe(null);ue("activeModalId",s),Le(()=>(window.addEventListener("beforeunload",()=>{sessionStorage.removeItem("showHelpModals")}),t.subscribe(r=>{r.length>0&&s.set(r[0])})));function u(){sessionStorage.setItem("showHelpModals","true"),a.set(!0)}var n=Fe(),b=D(n);return j(b,e,"default",{},null),o(m,n),Q({resetHelp:u})}_e.__docgen={data:[],name:"ToolbarsContainer.svelte"};var Je=z('<div role="toolbar"><div><!></div> <!></div>');function ke(m,e){q(e,!0);const[t,y]=fe(),a=()=>Y(d(r),"$showHelp",t);let s=v(e,"classes",3,null),u=v(e,"ariaLabel",3,null),n=v(e,"orientation",3,"horizontal");const b=pe(n());ue("orientation",b),be(()=>{b.set(n())});const l=O("showHelpModals"),r=Z(()=>l);var i=Je(),c=D(i),M=D(c);j(M,e,"default",{},null);var H=_(c,2);{var C=h=>{var g=E(),f=V(g);j(f,e,"controls",{},null),o(h,g)};x(H,h=>{a()||h(C)})}R(()=>{P(i,"aria-label",u()),ce(i,1,`toolbar ${n()==="vertical"?"":"flex-col"} ${s()}`,"svelte-4yb3b5"),ce(c,1,`grid--flex ${n()==="vertical"?"flex-col":""}`,"svelte-4yb3b5")}),o(m,i),Q(),y()}ke.__docgen={data:[{name:"classes",visibility:"public",description:"- Additional classes for the button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"ariaLabel",visibility:"public",description:"- aria label for button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"orientation",visibility:"public",description:"- Orientation of the toolbar",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"horizontal",text:'"horizontal"'},{kind:"const",type:"string",value:"vertical",text:'"vertical"'}],text:'"horizontal" | "vertical"'},static:!1,readonly:!1,defaultValue:'"horizontal"'}],name:"Toolbar.svelte"};var Ye=me('<path opacity="0.2"></path>'),et=me("<path></path>"),tt=me('<circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"></circle>'),ot=me('<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false"><!><!></svg>');function ze(m,e){let t=v(e,"type",3,"move"),y=v(e,"marginLeft",3,!1),a=v(e,"marginRight",3,!1),s=v(e,"selected",3,!1),u=v(e,"disabled",3,!1);const n={move:{selected:"M29 16L16 29L3 16L16 3L29 16Z",d:"M11.293 7.707a1 1 0 0 1 0-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1-1.415 1.415L17 5.414V12a1 1 0 0 1-2 0V5.414l-2.293 2.293a1 1 0 0 1-1.415 0m8 16.586L17 26.586V20a1 1 0 0 0-2 0v6.586l-2.293-2.293a1 1 0 1 0-1.415 1.415l4 4a1 1 0 0 0 1.415 0l4-4a1 1 0 0 0-1.415-1.415m10.415-9-4-4a1 1 0 1 0-1.415 1.415L26.586 15H20a1 1 0 0 0 0 2h6.586l-2.293 2.293a1 1 0 1 0 1.415 1.415l4-4a1 1 0 0 0 0-1.415M5.413 17H12a1 1 0 0 0 0-2H5.414l2.293-2.293a1 1 0 1 0-1.415-1.415l-4 4a1 1 0 0 0 0 1.415l4 4a1 1 0 0 0 1.415-1.415z"},polygon:{selected:"M17.5 24L7.5 17V12.5L12.5 8.5L16 9L17.5 7.5L22.5 8.5L25 12.5L21 23L17.5 24Z",d:"M28.83 6.17a4 4 0 0 0-6.302.845L19 6.053a4 4 0 1 0-7.549 1.793L7.21 11.665a4.01 4.01 0 0 0-5.039.506 4 4 0 0 0 5.361 5.927l8.75 6.42a4 4 0 1 0 5.947-1.837l3.423-9.699q.172.015.345.016a4 4 0 0 0 2.829-6.828zM13.58 4.584a2 2 0 1 1-.433 2.18 2 2 0 0 1 .438-2.18zm-10 11.831a2 2 0 1 1 2.826-2.83 2 2 0 0 1-2.826 2.83m17.831 11a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.83 2.828m-1.069-5.398a4 4 0 0 0-2.874.886l-8.75-6.42a4.02 4.02 0 0 0-.168-3.332l4.244-3.818a4 4 0 0 0 5.683-1.352L22 8.945a4 4 0 0 0 1.765 3.375zm7.07-11.604a2 2 0 1 1-2.825-2.828 2 2 0 1 1 2.83 2.829z"},radius:{},erase:{d:"M28.125 10.05 22.95 4.875a3 3 0 0 0-4.242 0L3.874 19.708a3 3 0 0 0 0 4.242l3.758 3.758a1 1 0 0 0 .71.292H27a1 1 0 1 0 0-2H16.413l11.712-11.707a3 3 0 0 0 0-4.243M13.585 26H8.756l-3.465-3.465a1 1 0 0 1 0-1.414L12 14.414 18.586 21zM26.71 12.875 20 19.586 13.414 13l6.711-6.707a1 1 0 0 1 1.415 0l5.172 5.172a1 1 0 0 1 0 1.414z"},zoomin:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},zoomout:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},undo:{selected:"M10 5V17L4 11L10 5Z",d:"M29 18a8.01 8.01 0 0 1-8 8H10a1 1 0 1 1 0-2h11a6 6 0 1 0 0-12H6.414l4.294 4.293a1 1 0 0 1-1.416 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 10H21a8.01 8.01 0 0 1 8 8"},redo:{selected:"M28 11L22 17V5L28 11Z",d:"M21.293 16.293 25.586 12H11a6 6 0 1 0 0 12h11a1 1 0 0 1 0 2H11a8 8 0 1 1 0-16h14.586l-4.293-4.292a1.001 1.001 0 0 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415l-6 6a1 1 0 1 1-1.415-1.415"},search:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"m28.708 27.293-6.26-6.258a11.014 11.014 0 1 0-1.413 1.414l6.258 6.258a1 1 0 0 0 1.415-1.415M5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"},download:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-12.707.707a1 1 0 0 0 1.415 0l5-5a1 1 0 0 0-1.415-1.415L17 15.587V4a1 1 0 0 0-2 0v11.586l-3.293-3.293a1 1 0 1 0-1.415 1.415z"},upload:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0M11.708 9.707 15 6.414V18a1 1 0 0 0 2 0V6.414l3.293 3.293a1 1 0 1 0 1.415-1.415l-5-5a1 1 0 0 0-1.415 0l-5 5a1 1 0 0 0 1.415 1.415"},help:{selected:"M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16",d:"M17.5 22.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 2 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5m13 7A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"},bin:{selected:"M25 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7z",d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M12 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm12 21H8V8h16zM14 13v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0m6 0v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0"}};var b=E(),l=V(b);{var r=i=>{var c=ot();let M;var H=D(c);{var C=p=>{var B=Ye();R(()=>P(B,"d",n[t()].selected)),o(p,B)};x(H,p=>{s()&&p(C)})}var h=_(H);{var g=p=>{var B=et();R(()=>P(B,"d",n[t()].d)),o(p,B)},f=(p,B)=>{{var A=S=>{var N=tt();R(()=>{P(N,"fill",s()?"#206095":"none"),P(N,"fill-opacity",s()?"0.2":"0")}),o(S,N)};x(p,S=>{t()=="radius"&&S(A)},B)}};x(h,p=>{t()!="radius"?p(g):p(f,!1)})}R(p=>{M=ce(c,0,"ons-svg-icon ons-svg-icon--m svelte-bb0877",null,M,p),P(c,"fill",s()?"#206095":u()?"#BCBCBD":"currentColor")},[()=>({"ons-u-ml-xs":y(),"ons-u-mr-xs":a(),selected:s()})]),o(i,c)};x(l,i=>{n[t()]&&i(r)})}o(m,b)}ze.__docgen={data:[{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"move"'},{name:"marginLeft",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"marginRight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarIcon.svelte"};var at=z('<span style="margin-left:auto; margin-right:10px"><!></span>'),nt=z('<div class="help-modal-wrapper svelte-65dccd"><div class="help-modal-notch svelte-65dccd"></div> <div class="help-modal svelte-65dccd" role="dialog" aria-modal="true"><!> <div class="ons-padding-4 svelte-65dccd"><!></div> <div class="ons-grid-flex ons-grid-flex--between ons-grid-flex-vertical-center"><button class="btn-link svelte-65dccd" aria-label="Skip instructions">Skip</button> <!> <!> <!></div></div></div>');function Te(m,e){q(e,!0);const[t,y]=fe(),a=()=>Y(d(c),"$ids",t),s=()=>Y(d(M),"$currentActiveId",t),u=()=>Y(d(H),"$showHelp",t);let n=v(e,"triggerElement",3,null),b=v(e,"onClose",3,()=>{});const l=O("activeModalId"),r=O("showHelpModals"),{buttonIds:i}=O("buttonIds"),c=Z(()=>i),M=Z(()=>l),H=Z(()=>r);let C=xe({top:50,left:-5}),h=xe({left:17,right:"auto"}),g=Ve(!1);be(()=>{if(!n())return;const k=n().getBoundingClientRect(),G=window.innerWidth-k.right;let K=window.scrollX-10,oe=17,$="auto";G<300&&(K=window.scrollX-325,oe="auto",$=-350),C.left=K,h.left=oe,h.right=$});function f(){localStorage.setItem("showHelpModals","false"),sessionStorage.setItem("showHelpModals","false"),r.set(!1)}function p(){sessionStorage.setItem("showHelpModals","false"),r.set(!1)}function B(){const k=a().indexOf(s());k!==-1&&k<a().length-1&&l.set(a()[k+1]),d(g)&&f()}function A(){d(g)?f():p()}function S(){const k=a().indexOf(s());k>0&&l.set(a()[k-1]),d(g)&&f()}function N(k){k.key==="Escape"&&b()()}var I=E();he("keydown",Ze,N);var te=V(I);{var re=k=>{var G=nt(),K=D(G),oe=_(K,2),$=D(oe);j($,e,"default",{},null);var w=_($,2),F=D(w);Ke(F,{id:"dontShowMeAgain",label:"Don't show me again",compact:!0,get checked(){return d(g)},set checked(L){De(g,L,!0)}});var J=_(w,2),ae=D(J),T=_(ae,2);{var U=L=>{var X=at(),ye=D(X);le(ye,{variant:"secondary",$$events:{click:S},children:(de,kt)=>{var Re=ee("Back");o(de,Re)},$$slots:{default:!0}}),o(L,X)};x(T,L=>{a().indexOf(s())>0&&L(U)})}var ie=_(T,2);{var W=L=>{le(L,{$$events:{click:B},children:(X,ye)=>{var de=ee("Next");o(X,de)},$$slots:{default:!0}})};x(ie,L=>{a().indexOf(s())!=a().length-1&&L(W)})}var se=_(ie,2);{var Ce=L=>{le(L,{$$events:{click:p},children:(X,ye)=>{var de=ee("Get started");o(X,de)},$$slots:{default:!0}})};x(se,L=>{a().indexOf(s())==a().length-1&&L(Ce)})}R(()=>{He(G,`top: ${C.top??""}px; left: ${C.left??""}px;`),He(K,`left: ${h.left??""}px;right: ${h.right??""}px;`)}),he("click",ae,A),o(k,G)};x(te,k=>{u()&&k(re)})}o(m,I),Q(),y()}Te.__docgen={data:[{name:"triggerElement",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"HTMLElement"},static:!1,readonly:!1,defaultValue:"null"},{name:"onClose",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"HelpModal.svelte"};let lt=(m=21)=>crypto.getRandomValues(new Uint8Array(m)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");var rt=z("<div><!></div>"),it=z('<button type="button"><!></button>'),st=z("<p> </p>"),dt=z('<div class="toolbar-button-wrapper svelte-9pltb6"><!> <!></div>');function ne(m,e){q(e,!0);const[t,y]=fe(),a=()=>Y(d(B),"$currentActiveId",t),s=()=>Y(p,"$activeModalId",t);let u=v(e,"id",19,()=>lt(6)),n=v(e,"icon",3,""),b=v(e,"label",3,""),l=v(e,"disabled",3,!1),r=v(e,"classes",3,""),i=v(e,"helpText",3,null);v(e,"selected",3,!1);let c=v(e,"custom",3,!1),M=v(e,"hasAriaControls",3,!1),H=v(e,"sticky",3,!1),C=v(e,"transient",3,!1),h=v(e,"disableHelp",3,!1);const g=Ee();let f;const p=O("activeModalId"),B=Z(()=>p),A=Z(()=>a()===u()),{register:S,unregister:N}=O("buttonIds");Le(()=>{S(u())}),Ue(()=>{N(u())});function I(){if(!l()){if(C()){g("click");return}if(g("click"),s()===u()&&H())return;p.set(d(A)?null:u())}}var te=dt(),re=D(te);{var k=$=>{var w=rt(),F=D(w);j(F,e,"custom",{},null),we(w,J=>f=J,()=>f),he("click",w,I),o($,w)},G=$=>{var w=it(),F=D(w);{var J=T=>{const U=Z(()=>C()?!1:!!d(A));ze(T,{get type(){return n()},get selected(){return d(U)},get disabled(){return l()}})},ae=T=>{var U=ee();R(()=>Me(U,b())),o(T,U)};x(F,T=>{n()?T(J):T(ae,!1)})}we(w,T=>f=T,()=>f),R(()=>{P(w,"aria-label",b()),ce(w,1,`toolbar-button ${l()?"disabled":""} ${d(A)&&!C()?"selected":""} ${r()}`,"svelte-9pltb6"),w.disabled=l(),P(w,"id",`button-${u()}`),P(w,"aria-controls",M()?`panel-${u()}`:void 0)}),he("click",w,I),o($,w)};x(re,$=>{c()?$(k):$(G,!1)})}var K=_(re,2);{var oe=$=>{var w=E(),F=V(w);{var J=T=>{Te(T,{get triggerElement(){return f},onClose:()=>p.set(null),children:(U,ie)=>{var W=st(),se=D(W);R(()=>Me(se,i())),o(U,W)},$$slots:{default:!0}})},ae=(T,U)=>{{var ie=W=>{Te(W,{get triggerElement(){return f},onClose:()=>p.set(null),children:(se,Ce)=>{var L=E(),X=V(L);j(X,e,"default",{},null),o(se,L)},$$slots:{default:!0}})};x(T,W=>{!i()&&!h()&&W(ie)},U)}};x(F,T=>{i()&&!h()?T(J):T(ae,!1)})}o($,w)};x(K,$=>{d(A)&&$(oe)})}o(m,te),Q(),y()}ne.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"helpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"custom",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasAriaControls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"sticky",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"transient",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disableHelp",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarButton.svelte"};var ct=z('<div aria-hidden="true"></div>');function ve(m,e){q(e,!0);const[t,y]=fe(),a=()=>Y(d(n),"$orientation",t);let s=v(e,"classes",3,"");const u=O("orientation"),n=Z(()=>u);var b=ct();R(()=>ce(b,1,`toolbar-divider ${a()} ${s()}`,"svelte-18fvj13")),o(m,b),Q(),y()}ve.__docgen={data:[{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolbarDivider.svelte"};const ut=""+new URL("movepan-C6QMWXON.png",import.meta.url).href;function Ie(m,e){q(e,!0);const t=O("activeModalId"),y=Z(()=>t);var a=E(),s=V(a);{var u=n=>{var b=E(),l=V(b);j(l,e,"default",{},null),o(n,b)};x(s,n=>{d(y)&&n(u)})}o(m,a),Q()}Ie.__docgen={data:[],name:"ToolControls.svelte"};var pt=z('<div class="tool-control svelte-1taxcu8" role="tabpanel"><!></div>');function Ae(m,e){q(e,!0);const t=O("activeModalId"),y=O("showHelpModals"),a=Z(()=>t),s=Z(()=>y);let u=v(e,"id",3,"");var n=E(),b=V(n);{var l=r=>{var i=pt(),c=D(i);j(c,e,"default",{},null),R(()=>{P(i,"aria-labelledby",`button-${u()}`),P(i,"id",`panel-${u()}`)}),o(r,i)};x(b,r=>{d(a)===u()&&!d(s)&&r(l)})}o(m,n),Q()}Ae.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolControl.svelte"};const vt=`<span class="ons-warning">This component is experimental</span>\r
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
`,Be=(m,e=Oe)=>{we(_e(m,{children:(t,y)=>{var a=gt(),s=V(a);ke(s,{get orientation(){return e().orientation},get ariaLabel(){return e().ariaLabel},children:(n,b)=>{var l=E(),r=V(l);je(r,1,()=>bt,qe,(i,c)=>{let M=()=>d(c).type,H=()=>d(c).id,C=()=>d(c).icon,h=()=>d(c).label,g=()=>d(c).helpContent,f=()=>d(c).disabled,p=()=>d(c).hasAriaControls;var B=E(),A=V(B);{var S=I=>{ne(I,{get id(){return H()},get icon(){return C()},get label(){return h()},get disabled(){return f()},get hasAriaControls(){return p()},children:(te,re)=>{var k=E(),G=V(k);Qe(G,g),o(te,k)},$$slots:{default:!0}})},N=I=>{ve(I,{})};x(A,I=>{M()==="button"?I(S):I(N,!1)})}o(i,B)}),o(n,l)},$$slots:{default:!0,controls:(n,b)=>{Ie(n,{slot:"controls",children:(l,r)=>{Ae(l,{id:"polygon",children:(i,c)=>{var M=ft(),H=_(V(M),2);le(H,{variant:"secondary",disabled:!0,children:(h,g)=>{var f=ee("Clear shape");o(h,f)},$$slots:{default:!0}});var C=_(H,2);le(C,{variant:"primary",children:(h,g)=>{var f=ee("Apply shape");o(h,f)},$$slots:{default:!0}}),o(i,M)},$$slots:{default:!0}})},$$slots:{default:!0}})}}});var u=_(s,2);ke(u,{get orientation(){return e().orientation},children:(n,b)=>{var l=yt(),r=V(l);ne(r,{id:"download",icon:"download",label:"Download area"});var i=_(r,2);ne(i,{id:"upload",icon:"upload",label:"Upload a geometry"});var c=_(i,2);ve(c,{});var M=_(c,2);ne(M,{id:"help",icon:"help",label:"Help",$$events:{click(...h){var g;(g=ge.resetHelp)==null||g.apply(this,h)}}});var H=_(M,2);ve(H,{});var C=_(H,2);ne(C,{id:"getstarted",custom:!0,label:"Get started",$$slots:{custom:(h,g)=>{var f=mt(),p=D(f);le(p,{disabled:!0,small:!0,children:(B,A)=>{var S=ee("Build profile");o(B,S)},$$slots:{default:!0}}),o(h,f)}}}),o(n,l)},$$slots:{default:!0}}),o(t,a)},$$slots:{default:!0},$$legacy:!0}),t=>ge=t,()=>ge)};let ge;const bt=[{type:"button",id:"move",icon:"move",label:"Move and Pan",helpContent:`<h3>Move and pan</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p><img src='${ut}' alt='Move and pan' />`},{type:"button",id:"polygon",icon:"polygon",label:"Draw a polygon",helpContent:"<h3>Draw a polygon</h3><p>Left-click to add a point to the polygon. Double-click to finish drawing.</p>",hasAriaControls:!0},{type:"button",id:"circle",icon:"radius",label:"Draw a circle",helpContent:"<h3>Draw a circle</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"zoomin",icon:"zoomin",label:"Zoom in",helpContent:"<h3>Zoom in</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"zoomout",icon:"zoomout",label:"Zoom out",helpContent:"<h3>Zoom out</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"undo",icon:"undo",label:"Undo last step",helpContent:"<h3>Undo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"redo",icon:"redo",label:"Redo last step",helpContent:"<h3>Redo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",disabled:!0},{type:"divider"},{type:"button",id:"search",icon:"search",label:"Search for an area",helpContent:"<h3>Search</h3><p>Search for an area by name or postcode.</p>"}],ht={title:"Inputs/Toolbar",component:_e,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}},parameters:Ne(vt)},{Story:$e}=Xe();var ft=z(`<p>Click or tap an area on the map to add a node to the shape. To apply a shape, close it
						by clicking or tapping on the starting node.</p> <!> <!>`,1),mt=z('<div slot="custom"><!></div>'),yt=z("<!> <!> <!> <!> <!> <!>",1),gt=z("<!> <!>",1),wt=z("<!> <!>",1);function Se(m,e){q(e,!1),We();var t=wt(),y=V(t);$e(y,{name:"Default",args:{ariaLabel:"Toolbar"},get template(){return Be},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>\r
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
</ToolbarsContainer>`}}});var a=_(y,2);$e(a,{name:"Vertical",args:{orientation:"vertical"},get template(){return Be},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>\r
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
</ToolbarsContainer>`}}}),o(m,t),Q()}Se.__docgen={data:[],name:"Toolbar.stories.svelte"};const Pe=Ge(Se,ht),Rt=["Default","Vertical"],Zt={...Pe.Default,tags:["svelte-csf-v5"]},Et={...Pe.Vertical,tags:["svelte-csf-v5"]};export{Zt as Default,Et as Vertical,Rt as __namedExportsOrder,ht as default};
