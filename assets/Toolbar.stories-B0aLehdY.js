import{A as ne,ag as Te,al as xe,au as He,G as r,ah as je,f as $,j as t,I as ie,k as B,ax as Pe,C as R,p as u,R as K,J as g,i as C,t as P,Y as me,X as ee,av as q,l as Q,m as I,Z as Be,ay as Ze,Q as oe,az as Qe,O as ae,P as Fe,ai as Je,aw as Ye,K as pe,V as et}from"./iframe-BxoMNL7n.js";import{w as tt,c as ot,i as at,d as lt}from"./create-runtime-stories-Bei6bClT.js";import{e as nt,i as it}from"./each-C-V79iSj.js";import{h as rt}from"./html-DjFgT_JR.js";import{b as Ce}from"./this-B7k1NkGN.js";import{s as le}from"./slot-BP_Qo1ZM.js";import{s as G,c as st}from"./attributes-DAWIBzZZ.js";import{s as ce}from"./class-B9SFUanI.js";import{s as Ee}from"./style-CNURdi_Z.js";import{C as dt}from"./Checkbox-BLy58aRV.js";import{B as be}from"./Button-1F5Ac6LM.js";import{s as ct}from"./utils-VWytQRnm.js";import"./attributes-q36Eg1F8.js";import"./input-BhOiWYOB.js";import"./Icon-XAjE7vfB.js";import"./_commonjsHelpers-CqkleIqs.js";var ut=$('<div class="multi-toolbar-container svelte-msokpx"><!></div>');function Oe(p,e){ne(e,!0);const a=xe([]);Te("buttonIds",{register:l=>{a.update(i=>[...i,l])},unregister:l=>{a.update(i=>i.filter(b=>b!==l))},buttonIds:a});let _=Pe(!0);He(()=>{const l=sessionStorage.getItem("showHelpModals"),i=localStorage.getItem("showHelpModals");R(_,l==="false"?!1:i!=="false",!0)});const n=xe(r(_));Te("showHelpModals",n),He(()=>{n.set(r(_))});const c=xe(null);Te("activeModalId",c),je(()=>(window.addEventListener("beforeunload",()=>{sessionStorage.removeItem("showHelpModals")}),a.subscribe(i=>{i.length>0&&c.set(i[0])})));function D(){sessionStorage.setItem("showHelpModals","true"),n.set(!0)}var o=ut(),v=B(o);return le(v,e,"default",{},null),t(p,o),ie({resetHelp:D})}Oe.__docgen={data:[],name:"ToolbarsContainer.svelte"};var pt=$('<div role="toolbar"><div><!></div> <!></div>');function ze(p,e){ne(e,!0);const[a,_]=me(),n=()=>ee(r(i),"$showHelp",a);let c=u(e,"classes",3,null),D=u(e,"ariaLabel",3,null),o=u(e,"orientation",3,"horizontal");const v=xe(o());Te("orientation",v),He(()=>{v.set(o())});const l=K("showHelpModals"),i=q(()=>l);var b=pt(),d=B(b),h=B(d);le(h,e,"default",{},null);var k=g(d,2);{var T=m=>{var x=Q(),L=I(x);le(L,e,"controls",{},null),t(m,x)};C(k,m=>{n()||m(T)})}P(()=>{G(b,"aria-label",D()),ce(b,1,`toolbar ${o()==="vertical"?"":"flex-col"} ${c()}`,"svelte-4yb3b5"),ce(d,1,`grid--flex ${o()==="vertical"?"flex-col":""}`,"svelte-4yb3b5")}),t(p,b),ie(),_()}ze.__docgen={data:[{name:"classes",visibility:"public",description:"- Additional classes for the button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"ariaLabel",visibility:"public",description:"- aria label for button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"orientation",visibility:"public",description:"- Orientation of the toolbar",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"horizontal",text:'"horizontal"'},{kind:"const",type:"string",value:"vertical",text:'"vertical"'}],text:'"horizontal" | "vertical"'},static:!1,readonly:!1,defaultValue:'"horizontal"'}],name:"Toolbar.svelte"};var vt=Be('<path opacity="0.2"></path>'),bt=Be("<path></path>"),ft=Be('<circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"></circle>'),ht=Be('<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false"><!><!></svg>');function Ae(p,e){let a=u(e,"type",3,"move"),_=u(e,"marginLeft",3,!1),n=u(e,"marginRight",3,!1),c=u(e,"selected",3,!1),D=u(e,"disabled",3,!1);const o={move:{selected:"M29 16L16 29L3 16L16 3L29 16Z",d:"M11.293 7.707a1 1 0 0 1 0-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1-1.415 1.415L17 5.414V12a1 1 0 0 1-2 0V5.414l-2.293 2.293a1 1 0 0 1-1.415 0m8 16.586L17 26.586V20a1 1 0 0 0-2 0v6.586l-2.293-2.293a1 1 0 1 0-1.415 1.415l4 4a1 1 0 0 0 1.415 0l4-4a1 1 0 0 0-1.415-1.415m10.415-9-4-4a1 1 0 1 0-1.415 1.415L26.586 15H20a1 1 0 0 0 0 2h6.586l-2.293 2.293a1 1 0 1 0 1.415 1.415l4-4a1 1 0 0 0 0-1.415M5.413 17H12a1 1 0 0 0 0-2H5.414l2.293-2.293a1 1 0 1 0-1.415-1.415l-4 4a1 1 0 0 0 0 1.415l4 4a1 1 0 0 0 1.415-1.415z"},polygon:{selected:"M17.5 24L7.5 17V12.5L12.5 8.5L16 9L17.5 7.5L22.5 8.5L25 12.5L21 23L17.5 24Z",d:"M28.83 6.17a4 4 0 0 0-6.302.845L19 6.053a4 4 0 1 0-7.549 1.793L7.21 11.665a4.01 4.01 0 0 0-5.039.506 4 4 0 0 0 5.361 5.927l8.75 6.42a4 4 0 1 0 5.947-1.837l3.423-9.699q.172.015.345.016a4 4 0 0 0 2.829-6.828zM13.58 4.584a2 2 0 1 1-.433 2.18 2 2 0 0 1 .438-2.18zm-10 11.831a2 2 0 1 1 2.826-2.83 2 2 0 0 1-2.826 2.83m17.831 11a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.83 2.828m-1.069-5.398a4 4 0 0 0-2.874.886l-8.75-6.42a4.02 4.02 0 0 0-.168-3.332l4.244-3.818a4 4 0 0 0 5.683-1.352L22 8.945a4 4 0 0 0 1.765 3.375zm7.07-11.604a2 2 0 1 1-2.825-2.828 2 2 0 1 1 2.83 2.829z"},radius:{},erase:{d:"M28.125 10.05 22.95 4.875a3 3 0 0 0-4.242 0L3.874 19.708a3 3 0 0 0 0 4.242l3.758 3.758a1 1 0 0 0 .71.292H27a1 1 0 1 0 0-2H16.413l11.712-11.707a3 3 0 0 0 0-4.243M13.585 26H8.756l-3.465-3.465a1 1 0 0 1 0-1.414L12 14.414 18.586 21zM26.71 12.875 20 19.586 13.414 13l6.711-6.707a1 1 0 0 1 1.415 0l5.172 5.172a1 1 0 0 1 0 1.414z"},zoomin:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},zoomout:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},undo:{selected:"M10 5V17L4 11L10 5Z",d:"M29 18a8.01 8.01 0 0 1-8 8H10a1 1 0 1 1 0-2h11a6 6 0 1 0 0-12H6.414l4.294 4.293a1 1 0 0 1-1.416 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 10H21a8.01 8.01 0 0 1 8 8"},redo:{selected:"M28 11L22 17V5L28 11Z",d:"M21.293 16.293 25.586 12H11a6 6 0 1 0 0 12h11a1 1 0 0 1 0 2H11a8 8 0 1 1 0-16h14.586l-4.293-4.292a1.001 1.001 0 0 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415l-6 6a1 1 0 1 1-1.415-1.415"},search:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"m28.708 27.293-6.26-6.258a11.014 11.014 0 1 0-1.413 1.414l6.258 6.258a1 1 0 0 0 1.415-1.415M5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"},download:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-12.707.707a1 1 0 0 0 1.415 0l5-5a1 1 0 0 0-1.415-1.415L17 15.587V4a1 1 0 0 0-2 0v11.586l-3.293-3.293a1 1 0 1 0-1.415 1.415z"},upload:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0M11.708 9.707 15 6.414V18a1 1 0 0 0 2 0V6.414l3.293 3.293a1 1 0 1 0 1.415-1.415l-5-5a1 1 0 0 0-1.415 0l-5 5a1 1 0 0 0 1.415 1.415"},help:{selected:"M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16",d:"M17.5 22.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 2 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5m13 7A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"},bin:{selected:"M25 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7z",d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M12 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm12 21H8V8h16zM14 13v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0m6 0v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0"}};var v=Q(),l=I(v);{var i=b=>{var d=ht();let h;var k=B(d);{var T=f=>{var z=vt();P(()=>G(z,"d",o[a()].selected)),t(f,z)};C(k,f=>{c()&&f(T)})}var m=g(k);{var x=f=>{var z=bt();P(()=>G(z,"d",o[a()].d)),t(f,z)},L=(f,z)=>{{var F=V=>{var U=ft();P(()=>{G(U,"fill",c()?"#206095":"none"),G(U,"fill-opacity",c()?"0.2":"0")}),t(V,U)};C(f,V=>{a()=="radius"&&V(F)},z)}};C(m,f=>{a()!="radius"?f(x):f(L,!1)})}P(f=>{h=ce(d,0,"ons-svg-icon ons-svg-icon--m svelte-bb0877",null,h,f),G(d,"fill",c()?"#206095":D()?"#BCBCBD":"currentColor")},[()=>({"ons-u-ml-xs":_(),"ons-u-mr-xs":n(),selected:c()})]),t(b,d)};C(l,b=>{o[a()]&&b(i)})}t(p,v)}Ae.__docgen={data:[{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"move"'},{name:"marginLeft",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"marginRight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarIcon.svelte"};var mt=$('<span style="margin-left:auto; margin-right:10px"><!></span>'),yt=$('<div class="help-modal-wrapper svelte-1q2vmfj"><div class="help-modal-notch svelte-1q2vmfj"></div> <div class="help-modal svelte-1q2vmfj" role="dialog" aria-modal="true"><!> <div class="ons-padding-4 svelte-1q2vmfj"><!></div> <div class="ons-grid-flex ons-grid-flex--between ons-grid-flex-vertical-center"><button class="btn-link svelte-1q2vmfj" aria-label="Skip instructions">Skip</button> <!> <!> <!></div></div></div>');function Se(p,e){ne(e,!0);const[a,_]=me(),n=()=>ee(r(d),"$ids",a),c=()=>ee(r(h),"$currentActiveId",a),D=()=>ee(r(k),"$showHelp",a);let o=u(e,"triggerElement",3,null),v=u(e,"onClose",3,()=>{});const l=K("activeModalId"),i=K("showHelpModals"),{buttonIds:b}=K("buttonIds"),d=q(()=>b),h=q(()=>l),k=q(()=>i);let T=Ze({top:50,left:-5}),m=Ze({left:17,right:"auto"}),x=Pe(!1);He(()=>{if(!o())return;const M=o().getBoundingClientRect(),w=window.innerWidth-M.right;let re=window.scrollX-10,ue=17,te="auto";w<300&&(re=window.scrollX-325,ue="auto",te=-350),T.left=re,m.left=ue,m.right=te});function L(){localStorage.setItem("showHelpModals","false"),sessionStorage.setItem("showHelpModals","false"),i.set(!1)}function f(){sessionStorage.setItem("showHelpModals","false"),i.set(!1)}function z(){const M=n().indexOf(c());M!==-1&&M<n().length-1&&l.set(n()[M+1]),r(x)&&L()}function F(){r(x)?L():f()}function V(){const M=n().indexOf(c());M>0&&l.set(n()[M-1]),r(x)&&L()}function U(M){M.key==="Escape"&&v()()}var X=Q();oe("keydown",Qe,U);var J=I(X);{var ye=M=>{var w=yt(),re=B(w),ue=g(re,2),te=B(ue);le(te,e,"default",{},null);var fe=g(te,2),ge=B(fe);dt(ge,{id:"dontShowMeAgain",label:"Don't show me again",compact:!0,get checked(){return r(x)},set checked(y){R(x,y,!0)}});var $e=g(fe,2),_e=B($e),he=g(_e,2);{var Le=y=>{var Z=mt(),E=B(Z);be(E,{variant:"secondary",$$events:{click:V},children:(s,S)=>{var N=ae("Back");t(s,N)},$$slots:{default:!0}}),t(y,Z)};C(he,y=>{n().indexOf(c())>0&&y(Le)})}var ke=g(he,2);{var Ve=y=>{be(y,{$$events:{click:z},children:(Z,E)=>{var s=ae("Next");t(Z,s)},$$slots:{default:!0}})};C(ke,y=>{n().indexOf(c())!=n().length-1&&y(Ve)})}var A=g(ke,2);{var H=y=>{be(y,{$$events:{click:f},children:(Z,E)=>{var s=ae("Get started");t(Z,s)},$$slots:{default:!0}})};C(A,y=>{n().indexOf(c())==n().length-1&&y(H)})}P(()=>{Ee(w,`top: ${T.top??""}px; left: ${T.left??""}px;`),Ee(re,`left: ${m.left??""}px;right: ${m.right??""}px;`)}),oe("click",_e,F),t(M,w)};C(J,M=>{D()&&M(ye)})}t(p,X),ie(),_()}Se.__docgen={data:[{name:"triggerElement",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"HTMLElement"},static:!1,readonly:!1,defaultValue:"null"},{name:"onClose",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"HelpModal.svelte"};var gt=(p,e)=>R(e,!0),_t=(p,e)=>R(e,!1),kt=$('<div tabindex="0"><!></div>'),wt=(p,e)=>R(e,!0),Tt=(p,e)=>R(e,!1),xt=$('<!><span class="ons-u-vh"> </span>',1),Ct=$('<input type="checkbox" class="ons-u-vh svelte-1pyas8u"/> <label><!></label>',1),Mt=(p,e)=>R(e,!0),Ht=(p,e)=>R(e,!1),Bt=$('<!><span class="ons-u-vh"> </span>',1),$t=$('<button type="button"><!></button>'),Lt=$("<p> </p>"),Vt=$("<div> </div>"),It=$('<div class="toolbar-button-wrapper svelte-1pyas8u"><!> <!> <!></div>');function ve(p,e){ne(e,!0);const[a,_]=me(),n=()=>ee(r(X),"$currentActiveId",a),c=()=>ee(U,"$activeModalId",a),D=()=>ee(r(M),"$currentOrientation",a);let o=u(e,"id",19,ct),v=u(e,"icon",3,""),l=u(e,"label",3,""),i=u(e,"disabled",3,!1),b=u(e,"classes",3,""),d=u(e,"helpText",3,null),h=u(e,"selected",15,!1),k=u(e,"toggle",3,!1),T=u(e,"custom",3,!1),m=u(e,"hasAriaControls",3,!1),x=u(e,"hasTooltip",3,!0),L=u(e,"sticky",3,!1),f=u(e,"transient",3,!1),z=u(e,"disableHelp",3,!1);const F=Fe();let V;const U=K("activeModalId"),X=q(()=>U),J=q(()=>n()===o()),ye=K("orientation"),M=q(()=>ye);let w=Pe(!1);const{register:re,unregister:ue}=K("buttonIds");je(()=>{re(o())}),Je(()=>{ue(o())});function te(){if(!i()){if(f()){F("click");return}else if(k()){h(!h()),F("click");return}if(F("click"),c()===o()&&L())return;U.set(r(J)?null:o())}}var fe=It(),ge=B(fe);{var $e=A=>{var H=kt();H.__click=te,H.__mouseover=[gt,w],H.__mouseout=[_t,w];var y=B(H);le(y,e,"custom",{},null),Ce(H,Z=>V=Z,()=>V),oe("focus",H,()=>R(w,!0)),oe("blur",H,()=>R(w,!1)),t(A,H)},_e=(A,H)=>{{var y=E=>{var s=Ct(),S=I(s);S.__click=te,Ce(S,O=>V=O,()=>V);var N=g(S,2);let W;N.__mouseover=[wt,w],N.__mouseout=[Tt,w];var se=B(N);{var j=O=>{var de=xt(),we=I(de);const Ie=q(()=>h()||r(J)&&!f());Ae(we,{get type(){return v()},get selected(){return r(Ie)},get disabled(){return i()}});var We=g(we),Ke=B(We);P(()=>pe(Ke,l())),t(O,de)},Y=O=>{var de=ae();P(()=>pe(de,l())),t(O,de)};C(se,O=>{v()?O(j):O(Y,!1)})}P(O=>{S.disabled=i(),G(S,"id",`button-${o()}`),st(S,h()),G(N,"for",`button-${o()}`),W=ce(N,1,`toolbar-button ${b()??""}`,"svelte-1pyas8u",W,O)},[()=>({selected:h()||r(J)&&!f()})]),oe("focus",S,()=>R(w,!0)),oe("blur",S,()=>R(w,!1)),t(E,s)},Z=E=>{var s=$t();let S;s.__click=te,s.__mouseover=[Mt,w],s.__mouseout=[Ht,w];var N=B(s);{var W=j=>{var Y=Bt(),O=I(Y);const de=q(()=>h()||r(J)&&!f());Ae(O,{get type(){return v()},get selected(){return r(de)},get disabled(){return i()}});var we=g(O),Ie=B(we);P(()=>pe(Ie,l())),t(j,Y)},se=j=>{var Y=ae();P(()=>pe(Y,l())),t(j,Y)};C(N,j=>{v()?j(W):j(se,!1)})}Ce(s,j=>V=j,()=>V),P(j=>{G(s,"aria-label",l()),S=ce(s,1,`toolbar-button ${b()??""}`,"svelte-1pyas8u",S,j),s.disabled=i(),G(s,"id",`button-${o()}`),G(s,"aria-controls",m()?`panel-${o()}`:void 0)},[()=>({selected:h()||r(J)&&!f()})]),oe("focus",s,()=>R(w,!0)),oe("blur",s,()=>R(w,!1)),t(E,s)};C(A,E=>{k()?E(y):E(Z,!1)},H)}};C(ge,A=>{T()?A($e):A(_e,!1)})}var he=g(ge,2);{var Le=A=>{var H=Q(),y=I(H);{var Z=s=>{Se(s,{get triggerElement(){return V},onClose:()=>U.set(null),children:(S,N)=>{var W=Lt(),se=B(W);P(()=>pe(se,d())),t(S,W)},$$slots:{default:!0}})},E=(s,S)=>{{var N=W=>{Se(W,{get triggerElement(){return V},onClose:()=>U.set(null),children:(se,j)=>{var Y=Q(),O=I(Y);le(O,e,"default",{},null),t(se,Y)},$$slots:{default:!0}})};C(s,W=>{!d()&&!z()&&W(N)},S)}};C(y,s=>{d()&&!z()?s(Z):s(E,!1)})}t(A,H)};C(he,A=>{r(J)&&A(Le)})}var ke=g(he,2);{var Ve=A=>{var H=Vt();let y;var Z=B(H);P(E=>{y=ce(H,1,"toolbar-tooltip ons-u-fs-s svelte-1pyas8u",null,y,E),pe(Z,l())},[()=>({"toolbar-tooltip-vertical":D()==="vertical"})]),t(A,H)};C(ke,A=>{x()&&r(w)&&A(Ve)})}t(p,fe),ie(),_()}Ye(["click","mouseover","mouseout"]);ve.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"helpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."},{name:"toggle",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"custom",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasAriaControls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasTooltip",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"sticky",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"transient",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disableHelp",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarButton.svelte"};var Dt=$('<div aria-hidden="true"></div>');function Me(p,e){ne(e,!0);const[a,_]=me(),n=()=>ee(r(o),"$orientation",a);let c=u(e,"classes",3,"");const D=K("orientation"),o=q(()=>D);var v=Dt();P(()=>ce(v,1,`toolbar-divider ${n()} ${c()}`,"svelte-18fvj13")),t(p,v),ie(),_()}Me.__docgen={data:[{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolbarDivider.svelte"};const zt=""+new URL("movepan-C6QMWXON.png",import.meta.url).href;function qe(p,e){ne(e,!0);const a=K("activeModalId"),_=q(()=>a);var n=Q(),c=I(n);{var D=o=>{var v=Q(),l=I(v);le(l,e,"default",{},null),t(o,v)};C(c,o=>{r(_)&&o(D)})}t(p,n),ie()}qe.__docgen={data:[],name:"ToolControls.svelte"};var At=$('<div class="tool-control svelte-1taxcu8" role="tabpanel"><!></div>');function Ge(p,e){ne(e,!0);const[a,_]=me(),n=()=>ee(r(v),"$currentModalId",a),c=()=>ee(r(l),"$showHelp",a),D=K("activeModalId"),o=K("showHelpModals"),v=q(()=>D),l=q(()=>o);let i=u(e,"id",3,"");var b=Q(),d=I(b);{var h=k=>{var T=At(),m=B(T);le(m,e,"default",{},null),P(()=>{G(T,"aria-labelledby",`button-${i()}`),G(T,"id",`panel-${i()}`)}),t(k,T)};C(d,k=>{n()===i()&&!c()&&k(h)})}t(p,b),ie(),_()}Ge.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolControl.svelte"};const St=`<span class="ons-warning">This component is experimental</span>

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
`,Re=(p,e=et)=>{Ce(Oe(p,{children:(a,_)=>{var n=Ut(),c=I(n);ze(c,{get orientation(){return e().orientation},get ariaLabel(){return e().ariaLabel},children:(o,v)=>{var l=Q(),i=I(l);nt(i,1,()=>Pt,it,(b,d)=>{let h=()=>r(d).type,k=()=>r(d).id,T=()=>r(d).icon,m=()=>r(d).label,x=()=>r(d).helpContent,L=()=>r(d).disabled,f=()=>r(d).hasAriaControls;var z=Q(),F=I(z);{var V=X=>{ve(X,{get id(){return k()},get icon(){return T()},get label(){return m()},get disabled(){return L()},get hasAriaControls(){return f()},children:(J,ye)=>{var M=Q(),w=I(M);rt(w,x),t(J,M)},$$slots:{default:!0}})},U=X=>{Me(X,{})};C(F,X=>{h()==="button"?X(V):X(U,!1)})}t(b,z)}),t(o,l)},$$slots:{default:!0,controls:(o,v)=>{qe(o,{slot:"controls",children:(l,i)=>{Ge(l,{id:"polygon",children:(b,d)=>{var h=Zt(),k=g(I(h),2);be(k,{variant:"secondary",disabled:!0,children:(m,x)=>{var L=ae("Clear shape");t(m,L)},$$slots:{default:!0}});var T=g(k,2);be(T,{variant:"primary",children:(m,x)=>{var L=ae("Apply shape");t(m,L)},$$slots:{default:!0}}),t(b,h)},$$slots:{default:!0}})},$$slots:{default:!0}})}}});var D=g(c,2);ze(D,{get orientation(){return e().orientation},children:(o,v)=>{var l=Rt(),i=I(l);ve(i,{id:"download",icon:"download",label:"Download area"});var b=g(i,2);ve(b,{id:"upload",icon:"upload",label:"Upload a geometry"});var d=g(b,2);Me(d,{});var h=g(d,2);ve(h,{id:"help",icon:"help",label:"Help",$$events:{click(...m){var x;(x=De.resetHelp)==null||x.apply(this,m)}}});var k=g(h,2);Me(k,{});var T=g(k,2);ve(T,{id:"getstarted",custom:!0,label:"Get started",$$slots:{custom:(m,x)=>{var L=Et(),f=B(L);be(f,{disabled:!0,small:!0,children:(z,F)=>{var V=ae("Build profile");t(z,V)},$$slots:{default:!0}}),t(m,L)}}}),t(o,l)},$$slots:{default:!0}}),t(a,n)},$$slots:{default:!0},$$legacy:!0}),a=>De=a,()=>De)};let De;const Pt=[{type:"button",id:"move",icon:"move",label:"Move and Pan",helpContent:`<h3>Move and pan</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p><img src='${zt}' alt='Move and pan' />`},{type:"button",id:"polygon",icon:"polygon",label:"Draw a polygon",helpContent:"<h3>Draw a polygon</h3><p>Left-click to add a point to the polygon. Double-click to finish drawing.</p>",hasAriaControls:!0},{type:"button",id:"circle",icon:"radius",label:"Draw a circle",helpContent:"<h3>Draw a circle</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"zoomin",icon:"zoomin",label:"Zoom in",helpContent:"<h3>Zoom in</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"zoomout",icon:"zoomout",label:"Zoom out",helpContent:"<h3>Zoom out</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"undo",icon:"undo",label:"Undo last step",helpContent:"<h3>Undo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"redo",icon:"redo",label:"Redo last step",helpContent:"<h3>Redo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",disabled:!0},{type:"divider"},{type:"button",id:"search",icon:"search",label:"Search for an area",helpContent:"<h3>Search</h3><p>Search for an area by name or postcode.</p>"}],Ot={title:"Form elements/Toolbar",component:Oe,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}},parameters:tt(St)},{Story:Ue}=lt();var Zt=$(`<p>Click or tap an area on the map to add a node to the shape. To apply a shape, close it
						by clicking or tapping on the starting node.</p> <!> <!>`,1),Et=$('<div slot="custom"><!></div>'),Rt=$("<!> <!> <!> <!> <!> <!>",1),Ut=$("<!> <!>",1),jt=$("<!> <!>",1);function Ne(p,e){ne(e,!1),at();var a=jt(),_=I(a);Ue(_,{name:"Default",args:{ariaLabel:"Toolbar"},get template(){return Re},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
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
</ToolbarsContainer>`}}});var n=g(_,2);Ue(n,{name:"Vertical",args:{orientation:"vertical"},get template(){return Re},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
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
</ToolbarsContainer>`}}}),t(p,a),ie()}Ne.__docgen={data:[],name:"Toolbar.stories.svelte"};const Xe=ot(Ne,Ot),io=["Default","Vertical"],ro={...Xe.Default,tags:["svelte-csf-v5"]},so={...Xe.Vertical,tags:["svelte-csf-v5"]};export{ro as Default,so as Vertical,io as __namedExportsOrder,Ot as default};
