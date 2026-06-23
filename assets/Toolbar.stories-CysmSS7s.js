import{ab as le,av as ke,aL as Ce,aF as _e,g as l,au as Ue,a as t,ad as ne,aW as Ae,f as P,c as B,al as N,p,ac as X,ae as y,i as S,t as O,ay as ve,aA as K,an as E,d as F,e as D,aw as Me,aU as Pe,aj as te,b1 as Ke,b as oe,ai as Qe,ax as Je,aO as Ye,aN as Y,s as de,as as et}from"./iframe-B4K7cUj-.js";import{c as tt,w as ot,i as at,d as lt}from"./create-runtime-stories-BdGEnlCl.js";import{s as ae}from"./slot-BP_Qo1ZM.js";import{s as G,c as nt}from"./attributes-LJJ5MVcB.js";import{s as re}from"./class-BEflrp73.js";import{b as Te}from"./this-Bl8JnL27.js";import{s as Oe}from"./style-hC12NnFz.js";import{C as it}from"./Checkbox-ChjzaChe.js";import{B as ue}from"./Button-D38sccFp.js";import{s as rt}from"./utils-VWytQRnm.js";import{e as st,i as dt}from"./each-DacldYj1.js";import{h as ct}from"./html-BO1ncVX2.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";import"./input-BAFOoZ3d.js";import"./Icon-BfylarCs.js";import"./_commonjsHelpers-CqkleIqs.js";var ut=P('<div class="multi-toolbar-container svelte-1s0tjgv"><!></div>');function Se(C,e){le(e,!0);const o=_e([]);ke("buttonIds",{register:r=>{o.update(i=>[...i,r])},unregister:r=>{o.update(i=>i.filter(s=>s!==r))},buttonIds:o});let v=Ae(!0);Ce(()=>{const r=sessionStorage.getItem("showHelpModals"),i=localStorage.getItem("showHelpModals");N(v,r==="false"?!1:i!=="false",!0)});const b=_e(l(v));ke("showHelpModals",b),Ce(()=>{b.set(l(v))});const c=_e(null);ke("activeModalId",c),Ue(()=>(window.addEventListener("beforeunload",()=>{sessionStorage.removeItem("showHelpModals")}),o.subscribe(i=>{i.length>0&&c.set(i[0])})));function I(){sessionStorage.setItem("showHelpModals","true"),b.set(!0)}var a={resetHelp:I},u=ut(),d=B(u);return ae(d,e,"default",{},null),t(C,u),ne(a)}Se.__docgen={data:[],name:"ToolbarsContainer.svelte"};var pt=P('<div role="toolbar"><div><!></div> <!></div>');function ze(C,e){le(e,!0);const o=()=>K(l(r),"$showHelp",v),[v,b]=ve();let c=p(e,"classes",3,null),I=p(e,"ariaLabel",3,null),a=p(e,"orientation",3,"horizontal");const u=_e(a());ke("orientation",u),Ce(()=>{u.set(a())});const d=X("showHelpModals"),r=E(()=>d);var i=pt(),s=B(i),f=B(s);ae(f,e,"default",{},null);var g=y(s,2);{var k=h=>{var _=F(),L=D(_);ae(L,e,"controls",{},null),t(h,_)};S(g,h=>{o()||h(k)})}O(()=>{G(i,"aria-label",I()),re(i,1,`toolbar ${a()==="vertical"?"":"flex-col"} ${c()}`,"svelte-1st7dmr"),re(s,1,`grid--flex ${a()==="vertical"?"flex-col":""}`,"svelte-1st7dmr")}),t(C,i),ne(),b()}ze.__docgen={data:[{name:"classes",visibility:"public",description:"- Additional classes for the button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"ariaLabel",visibility:"public",description:"- aria label for button",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"orientation",visibility:"public",description:"- Orientation of the toolbar",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"horizontal",text:'"horizontal"'},{kind:"const",type:"string",value:"vertical",text:'"vertical"'}],text:'"horizontal" | "vertical"'},static:!1,readonly:!1,defaultValue:'"horizontal"'}],name:"Toolbar.svelte"};var vt=Me('<path opacity="0.2"></path>'),bt=Me("<path></path>"),ft=Me('<circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"></circle>'),ht=Me('<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false"><!><!></svg>');function De(C,e){let o=p(e,"type",3,"move"),v=p(e,"marginLeft",3,!1),b=p(e,"marginRight",3,!1),c=p(e,"selected",3,!1),I=p(e,"disabled",3,!1);const a={move:{selected:"M29 16L16 29L3 16L16 3L29 16Z",d:"M11.293 7.707a1 1 0 0 1 0-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1-1.415 1.415L17 5.414V12a1 1 0 0 1-2 0V5.414l-2.293 2.293a1 1 0 0 1-1.415 0m8 16.586L17 26.586V20a1 1 0 0 0-2 0v6.586l-2.293-2.293a1 1 0 1 0-1.415 1.415l4 4a1 1 0 0 0 1.415 0l4-4a1 1 0 0 0-1.415-1.415m10.415-9-4-4a1 1 0 1 0-1.415 1.415L26.586 15H20a1 1 0 0 0 0 2h6.586l-2.293 2.293a1 1 0 1 0 1.415 1.415l4-4a1 1 0 0 0 0-1.415M5.413 17H12a1 1 0 0 0 0-2H5.414l2.293-2.293a1 1 0 1 0-1.415-1.415l-4 4a1 1 0 0 0 0 1.415l4 4a1 1 0 0 0 1.415-1.415z"},polygon:{selected:"M17.5 24L7.5 17V12.5L12.5 8.5L16 9L17.5 7.5L22.5 8.5L25 12.5L21 23L17.5 24Z",d:"M28.83 6.17a4 4 0 0 0-6.302.845L19 6.053a4 4 0 1 0-7.549 1.793L7.21 11.665a4.01 4.01 0 0 0-5.039.506 4 4 0 0 0 5.361 5.927l8.75 6.42a4 4 0 1 0 5.947-1.837l3.423-9.699q.172.015.345.016a4 4 0 0 0 2.829-6.828zM13.58 4.584a2 2 0 1 1-.433 2.18 2 2 0 0 1 .438-2.18zm-10 11.831a2 2 0 1 1 2.826-2.83 2 2 0 0 1-2.826 2.83m17.831 11a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.83 2.828m-1.069-5.398a4 4 0 0 0-2.874.886l-8.75-6.42a4.02 4.02 0 0 0-.168-3.332l4.244-3.818a4 4 0 0 0 5.683-1.352L22 8.945a4 4 0 0 0 1.765 3.375zm7.07-11.604a2 2 0 1 1-2.825-2.828 2 2 0 1 1 2.83 2.829z"},radius:{},erase:{d:"M28.125 10.05 22.95 4.875a3 3 0 0 0-4.242 0L3.874 19.708a3 3 0 0 0 0 4.242l3.758 3.758a1 1 0 0 0 .71.292H27a1 1 0 1 0 0-2H16.413l11.712-11.707a3 3 0 0 0 0-4.243M13.585 26H8.756l-3.465-3.465a1 1 0 0 1 0-1.414L12 14.414 18.586 21zM26.71 12.875 20 19.586 13.414 13l6.711-6.707a1 1 0 0 1 1.415 0l5.172 5.172a1 1 0 0 1 0 1.414z"},zoomin:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},zoomout:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"M19 14a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m9.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11.014 11.014 0 1 1 1.414-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"},undo:{selected:"M10 5V17L4 11L10 5Z",d:"M29 18a8.01 8.01 0 0 1-8 8H10a1 1 0 1 1 0-2h11a6 6 0 1 0 0-12H6.414l4.294 4.293a1 1 0 0 1-1.416 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 10H21a8.01 8.01 0 0 1 8 8"},redo:{selected:"M28 11L22 17V5L28 11Z",d:"M21.293 16.293 25.586 12H11a6 6 0 1 0 0 12h11a1 1 0 0 1 0 2H11a8 8 0 1 1 0-16h14.586l-4.293-4.292a1.001 1.001 0 0 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415l-6 6a1 1 0 1 1-1.415-1.415"},search:{selected:"M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0",d:"m28.708 27.293-6.26-6.258a11.014 11.014 0 1 0-1.413 1.414l6.258 6.258a1 1 0 0 0 1.415-1.415M5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"},download:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-12.707.707a1 1 0 0 0 1.415 0l5-5a1 1 0 0 0-1.415-1.415L17 15.587V4a1 1 0 0 0-2 0v11.586l-3.293-3.293a1 1 0 1 0-1.415 1.415z"},upload:{selected:"M27 6v20H5V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2",d:"M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0M11.708 9.707 15 6.414V18a1 1 0 0 0 2 0V6.414l3.293 3.293a1 1 0 1 0 1.415-1.415l-5-5a1 1 0 0 0-1.415 0l-5 5a1 1 0 0 0 1.415 1.415"},help:{selected:"M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16",d:"M17.5 22.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 2 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5m13 7A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"},bin:{selected:"M25 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7z",d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M12 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm12 21H8V8h16zM14 13v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0m6 0v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0"}};var u=F(),d=D(u);{var r=i=>{var s=ht();let f;var g=B(s);{var k=m=>{var M=vt();O(()=>G(M,"d",a[o()].selected)),t(m,M)};S(g,m=>{c()&&m(k)})}var h=y(g);{var _=m=>{var M=bt();O(()=>G(M,"d",a[o()].d)),t(m,M)},L=m=>{var M=ft();O(()=>{G(M,"fill",c()?"#206095":"none"),G(M,"fill-opacity",c()?"0.2":"0")}),t(m,M)};S(h,m=>{o()!="radius"?m(_):o()=="radius"&&m(L,1)})}O(()=>{f=re(s,0,"ons-svg-icon ons-svg-icon--m svelte-1tnevp6",null,f,{"ons-u-ml-xs":v(),"ons-u-mr-xs":b(),selected:c()}),G(s,"fill",c()?"#206095":I()?"#BCBCBD":"currentColor")}),t(i,s)};S(d,i=>{a[o()]&&i(r)})}t(C,u)}De.__docgen={data:[{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"move"'},{name:"marginLeft",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"marginRight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarIcon.svelte"};var mt=P('<span style="margin-left:auto; margin-right:10px"><!></span>'),yt=P('<div class="help-modal-wrapper svelte-yxz9gw"><div class="help-modal-notch svelte-yxz9gw"></div> <div class="help-modal svelte-yxz9gw" role="dialog" aria-modal="true"><!> <div class="ons-padding-4 svelte-yxz9gw"><!></div> <div class="ons-grid-flex ons-grid-flex--between ons-grid-flex-vertical-center"><button class="btn-link svelte-yxz9gw" aria-label="Skip instructions">Skip</button> <!> <!> <!></div></div></div>');function Ie(C,e){le(e,!0);const o=()=>K(l(s),"$ids",c),v=()=>K(l(f),"$currentActiveId",c),b=()=>K(l(g),"$showHelp",c),[c,I]=ve();let a=p(e,"triggerElement",3,null),u=p(e,"onClose",3,()=>{});const d=X("activeModalId"),r=X("showHelpModals"),{buttonIds:i}=X("buttonIds"),s=E(()=>i),f=E(()=>d),g=E(()=>r);let k=Pe({top:50,left:-5}),h=Pe({left:17,right:"auto"}),_=Ae(!1);Ce(()=>{if(!a())return;const H=a().getBoundingClientRect(),w=window.innerWidth-H.right;let ie=window.scrollX-10,se=17,J="auto";w<300&&(ie=window.scrollX-325,se="auto",J=-350),k.left=ie,h.left=se,h.right=J});function L(){localStorage.setItem("showHelpModals","false"),sessionStorage.setItem("showHelpModals","false"),r.set(!1)}function m(){sessionStorage.setItem("showHelpModals","false"),r.set(!1)}function M(){const H=o().indexOf(v());H!==-1&&H<o().length-1&&d.set(o()[H+1]),l(_)&&L()}function ee(){l(_)?L():m()}function U(){const H=o().indexOf(v());H>0&&d.set(o()[H-1]),l(_)&&L()}function Q(H){H.key==="Escape"&&u()()}var W=F();te("keydown",Ke,Q);var q=D(W);{var be=H=>{var w=yt(),ie=B(w),se=y(ie,2),J=B(se);ae(J,e,"default",{},null);var pe=y(J,2),fe=B(pe);it(fe,{id:"dontShowMeAgain",label:"Don't show me again",compact:!0,get checked(){return l(_)},set checked(x){N(_,x,!0)}});var He=y(pe,2),he=B(He),me=y(he,2);{var ye=x=>{var A=mt(),V=B(A);ue(V,{variant:"secondary",$$events:{click:U},children:(R,z)=>{var j=oe("Back");t(R,j)},$$slots:{default:!0}}),t(x,A)},$e=E(()=>o().indexOf(v())>0);S(me,x=>{l($e)&&x(ye)})}var ge=y(me,2);{var Be=x=>{ue(x,{$$events:{click:M},children:(A,V)=>{var R=oe("Next");t(A,R)},$$slots:{default:!0}})},$=E(()=>o().indexOf(v())!=o().length-1);S(ge,x=>{l($)&&x(Be)})}var n=y(ge,2);{var T=x=>{ue(x,{$$events:{click:m},children:(A,V)=>{var R=oe("Get started");t(A,R)},$$slots:{default:!0}})},Z=E(()=>o().indexOf(v())==o().length-1);S(n,x=>{l(Z)&&x(T)})}O(()=>{Oe(w,`top: ${k.top??""}px; left: ${k.left??""}px;`),Oe(ie,`left: ${h.left??""}px;right: ${h.right??""}px;`)}),te("click",he,ee),t(H,w)};S(q,H=>{b()&&H(be)})}t(C,W),ne(),I()}Ie.__docgen={data:[{name:"triggerElement",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"HTMLElement"},static:!1,readonly:!1,defaultValue:"null"},{name:"onClose",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"HelpModal.svelte"};var gt=P('<div tabindex="0"><!></div>'),Ee=P('<!><span class="ons-u-vh"> </span>',1),wt=P('<input type="checkbox" class="ons-u-vh svelte-1m9f2nv"/> <label><!></label>',1),kt=P('<button type="button"><!></button>'),_t=P("<p> </p>"),Tt=P("<div> </div>"),xt=P('<div class="toolbar-button-wrapper svelte-1m9f2nv"><!> <!> <!></div>');function ce(C,e){le(e,!0);const o=()=>K(l(W),"$currentActiveId",c),v=()=>K(Q,"$activeModalId",c),b=()=>K(l(H),"$currentOrientation",c),[c,I]=ve();let a=p(e,"id",19,rt),u=p(e,"icon",3,""),d=p(e,"label",3,""),r=p(e,"disabled",3,!1),i=p(e,"classes",3,""),s=p(e,"helpText",3,null),f=p(e,"selected",15,!1),g=p(e,"toggle",3,!1),k=p(e,"custom",3,!1),h=p(e,"hasAriaControls",3,!1),_=p(e,"hasTooltip",3,!0),L=p(e,"sticky",3,!1),m=p(e,"transient",3,!1),M=p(e,"disableHelp",3,!1);const ee=Qe();let U;const Q=X("activeModalId"),W=E(()=>Q),q=E(()=>o()===a()),be=X("orientation"),H=E(()=>be);let w=Ae(!1);const{register:ie,unregister:se}=X("buttonIds");Ue(()=>{ie(a())}),Je(()=>{se(a())});function J(){if(!r()){if(m()){ee("click");return}else if(g()){f(!f()),ee("click");return}if(ee("click"),v()===a()&&L())return;Q.set(l(q)?null:a())}}var pe=xt(),fe=B(pe);{var He=$=>{var n=gt(),T=B(n);ae(T,e,"custom",{},null),Te(n,Z=>U=Z,()=>U),Y("click",n,J),Y("mouseover",n,()=>N(w,!0)),Y("mouseout",n,()=>N(w,!1)),te("focus",n,()=>N(w,!0)),te("blur",n,()=>N(w,!1)),t($,n)},he=$=>{var n=wt(),T=D(n);Te(T,z=>U=z,()=>U);var Z=y(T,2);let x;var A=B(Z);{var V=z=>{var j=Ee(),we=D(j);{let qe=E(()=>f()||l(q)&&!m());De(we,{get type(){return u()},get selected(){return l(qe)},get disabled(){return r()}})}var Le=y(we),Fe=B(Le);O(()=>de(Fe,d())),t(z,j)},R=z=>{var j=oe();O(()=>de(j,d())),t(z,j)};S(A,z=>{u()?z(V):z(R,-1)})}O(()=>{T.disabled=r(),G(T,"id",`button-${a()}`),nt(T,f()),G(Z,"for",`button-${a()}`),x=re(Z,1,`toolbar-button ${i()??""}`,"svelte-1m9f2nv",x,{selected:f()||l(q)&&!m()})}),Y("click",T,J),te("focus",T,()=>N(w,!0)),te("blur",T,()=>N(w,!1)),Y("mouseover",Z,()=>N(w,!0)),Y("mouseout",Z,()=>N(w,!1)),t($,n)},me=$=>{var n=kt();let T;var Z=B(n);{var x=V=>{var R=Ee(),z=D(R);{let Le=E(()=>f()||l(q)&&!m());De(z,{get type(){return u()},get selected(){return l(Le)},get disabled(){return r()}})}var j=y(z),we=B(j);O(()=>de(we,d())),t(V,R)},A=V=>{var R=oe();O(()=>de(R,d())),t(V,R)};S(Z,V=>{u()?V(x):V(A,-1)})}Te(n,V=>U=V,()=>U),O(()=>{G(n,"aria-label",d()),T=re(n,1,`toolbar-button ${i()??""}`,"svelte-1m9f2nv",T,{selected:f()||l(q)&&!m()}),n.disabled=r(),G(n,"id",`button-${a()}`),G(n,"aria-controls",h()?`panel-${a()}`:void 0)}),Y("click",n,J),Y("mouseover",n,()=>N(w,!0)),Y("mouseout",n,()=>N(w,!1)),te("focus",n,()=>N(w,!0)),te("blur",n,()=>N(w,!1)),t($,n)};S(fe,$=>{k()?$(He):g()?$(he,1):$(me,-1)})}var ye=y(fe,2);{var $e=$=>{var n=F(),T=D(n);{var Z=A=>{Ie(A,{get triggerElement(){return U},onClose:()=>Q.set(null),children:(V,R)=>{var z=_t(),j=B(z);O(()=>de(j,s())),t(V,z)},$$slots:{default:!0}})},x=A=>{Ie(A,{get triggerElement(){return U},onClose:()=>Q.set(null),children:(V,R)=>{var z=F(),j=D(z);ae(j,e,"default",{},null),t(V,z)},$$slots:{default:!0}})};S(T,A=>{s()&&!M()?A(Z):!s()&&!M()&&A(x,1)})}t($,n)};S(ye,$=>{l(q)&&$($e)})}var ge=y(ye,2);{var Be=$=>{var n=Tt();let T;var Z=B(n);O(()=>{T=re(n,1,"toolbar-tooltip ons-u-fs-s svelte-1m9f2nv",null,T,{"toolbar-tooltip-vertical":b()==="vertical"}),de(Z,d())}),t($,n)};S(ge,$=>{_()&&l(w)&&$(Be)})}t(C,pe),ne(),I()}Ye(["click","mouseover","mouseout"]);ce.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"helpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."},{name:"toggle",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"custom",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasAriaControls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hasTooltip",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"sticky",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"transient",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disableHelp",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ToolbarButton.svelte"};var Ct=P('<div aria-hidden="true"></div>');function xe(C,e){le(e,!0);const o=()=>K(l(a),"$orientation",v),[v,b]=ve();let c=p(e,"classes",3,"");const I=X("orientation"),a=E(()=>I);var u=Ct();O(()=>re(u,1,`toolbar-divider ${o()} ${c()}`,"svelte-1sgnnls")),t(C,u),ne(),b()}xe.__docgen={data:[{name:"classes",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolbarDivider.svelte"};const Mt=""+new URL("movepan-C6QMWXON.png",import.meta.url).href;function Ne(C,e){le(e,!0);const o=X("activeModalId"),v=E(()=>o);var b=F(),c=D(b);{var I=a=>{var u=F(),d=D(u);ae(d,e,"default",{},null),t(a,u)};S(c,a=>{l(v)&&a(I)})}t(C,b),ne()}Ne.__docgen={data:[],name:"ToolControls.svelte"};var Ht=P('<div class="tool-control svelte-1ej7ib3" role="tabpanel"><!></div>');function je(C,e){le(e,!0);const o=()=>K(l(u),"$currentModalId",b),v=()=>K(l(d),"$showHelp",b),[b,c]=ve(),I=X("activeModalId"),a=X("showHelpModals"),u=E(()=>I),d=E(()=>a);let r=p(e,"id",3,"");var i=F(),s=D(i);{var f=g=>{var k=Ht(),h=B(k);ae(h,e,"default",{},null),O(()=>{G(k,"aria-labelledby",`button-${r()}`),G(k,"id",`panel-${r()}`)}),t(g,k)};S(s,g=>{o()===r()&&!v()&&g(f)})}t(C,i),ne(),c()}je.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ToolControl.svelte"};const $t=`<span class="ons-warning">This component is experimental</span>

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
`,Ze=(C,e=et)=>{Te(Se(C,{children:(o,v)=>{var b=Ge(),c=D(b);ze(c,{get orientation(){return e().orientation},get ariaLabel(){return e().ariaLabel},children:(a,u)=>{var d=F(),r=D(d);st(r,1,()=>Bt,dt,(i,s)=>{let f=()=>l(s).type,g=()=>l(s).id,k=()=>l(s).icon,h=()=>l(s).label,_=()=>l(s).helpContent,L=()=>l(s).disabled,m=()=>l(s).hasAriaControls;var M=F(),ee=D(M);{var U=W=>{ce(W,{get id(){return g()},get icon(){return k()},get label(){return h()},get disabled(){return L()},get hasAriaControls(){return m()},children:(q,be)=>{var H=F(),w=D(H);ct(w,_),t(q,H)},$$slots:{default:!0}})},Q=W=>{xe(W,{})};S(ee,W=>{f()==="button"?W(U):W(Q,-1)})}t(i,M)}),t(a,d)},$$slots:{default:!0,controls:(a,u)=>{Ne(a,{slot:"controls",children:(d,r)=>{je(d,{id:"polygon",children:(i,s)=>{var f=Vt(),g=y(D(f),2);ue(g,{variant:"secondary",disabled:!0,children:(h,_)=>{var L=oe("Clear shape");t(h,L)},$$slots:{default:!0}});var k=y(g,2);ue(k,{variant:"primary",children:(h,_)=>{var L=oe("Apply shape");t(h,L)},$$slots:{default:!0}}),t(i,f)},$$slots:{default:!0}})},$$slots:{default:!0}})}}});var I=y(c,2);ze(I,{get orientation(){return e().orientation},children:(a,u)=>{var d=Dt(),r=D(d);ce(r,{id:"download",icon:"download",label:"Download area"});var i=y(r,2);ce(i,{id:"upload",icon:"upload",label:"Upload a geometry"});var s=y(i,2);xe(s,{});var f=y(s,2);ce(f,{id:"help",icon:"help",label:"Help",$$events:{click(...h){var _;(_=Ve.resetHelp)==null||_.apply(this,h)}}});var g=y(f,2);xe(g,{});var k=y(g,2);ce(k,{id:"getstarted",custom:!0,label:"Get started",$$slots:{custom:(h,_)=>{var L=zt(),m=B(L);ue(m,{disabled:!0,small:!0,children:(M,ee)=>{var U=oe("Build profile");t(M,U)},$$slots:{default:!0}}),t(h,L)}}}),t(a,d)},$$slots:{default:!0}}),t(o,b)},$$slots:{default:!0},$$legacy:!0}),o=>Ve=o,()=>Ve)};let Ve;const Bt=[{type:"button",id:"move",icon:"move",label:"Move and Pan",helpContent:`<h3>Move and pan</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p><img src='${Mt}' alt='Move and pan' />`},{type:"button",id:"polygon",icon:"polygon",label:"Draw a polygon",helpContent:"<h3>Draw a polygon</h3><p>Left-click to add a point to the polygon. Double-click to finish drawing.</p>",hasAriaControls:!0},{type:"button",id:"circle",icon:"radius",label:"Draw a circle",helpContent:"<h3>Draw a circle</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"zoomin",icon:"zoomin",label:"Zoom in",helpContent:"<h3>Zoom in</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"zoomout",icon:"zoomout",label:"Zoom out",helpContent:"<h3>Zoom out</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"divider"},{type:"button",id:"undo",icon:"undo",label:"Undo last step",helpContent:"<h3>Undo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"},{type:"button",id:"redo",icon:"redo",label:"Redo last step",helpContent:"<h3>Redo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",disabled:!0},{type:"divider"},{type:"button",id:"search",icon:"search",label:"Search for an area",helpContent:"<h3>Search</h3><p>Search for an area by name or postcode.</p>"}],Lt={title:"Form elements/Toolbar",component:Se,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}},parameters:ot($t)},{Story:Re}=lt();var Vt=P(`<p>Click or tap an area on the map to add a node to the shape. To apply a shape, close it
						by clicking or tapping on the starting node.</p> <!> <!>`,1),zt=P('<div slot="custom"><!></div>'),Dt=P("<!> <!> <!> <!> <!> <!>",1),Ge=P("<!> <!>",1);function We(C,e){le(e,!1),at();var o=Ge(),v=D(o);Re(v,{name:"Default",args:{ariaLabel:"Toolbar"},get template(){return Ze},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
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
</ToolbarsContainer>`}}});var b=y(v,2);Re(b,{name:"Vertical",args:{orientation:"vertical"},get template(){return Ze},parameters:{__svelteCsf:{rawCode:`<ToolbarsContainer bind:this={container}>
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
</ToolbarsContainer>`}}}),t(C,o),ne()}We.__docgen={data:[],name:"Toolbar.stories.svelte"};const Xe=tt(We,Lt),Qt=["Default","Vertical"],Jt={...Xe.Default,tags:["svelte-csf-v5"]},Yt={...Xe.Vertical,tags:["svelte-csf-v5"]};export{Jt as Default,Yt as Vertical,Qt as __namedExportsOrder,Lt as default};
