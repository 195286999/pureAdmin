import{d as m,u as p,r as o,a as g,b as e,o as h,c as x,w as b,e as w,f as k,g as R,n as V,_ as y}from"./index.dc8f07af.js";const B=["element-loading-text"],E=["src"],L=m({name:"FrameView"}),S=m({...L,setup(D){var f,_,l;const{t:u}=p(),r=o(!0),t=g(),c=o(""),i=o(null);(f=e(t.meta))!=null&&f.frameSrc&&(c.value=(_=e(t.meta))==null?void 0:_.frameSrc),((l=e(t.meta))==null?void 0:l.frameLoading)===!1&&s();function s(){r.value=!1}function d(){V(()=>{const a=e(i);if(!a)return;const n=a;n.attachEvent?n.attachEvent("onload",()=>{s()}):a.onload=()=>{s()}})}return h(()=>{d()}),(a,n)=>{const v=x("loading");return b((w(),k("div",{class:"frame","element-loading-text":e(u)("status.hsLoad")},[R("iframe",{src:c.value,class:"frame-iframe",ref_key:"frameRef",ref:i},null,8,E)],8,B)),[[v,r.value]])}}});const C=y(S,[["__scopeId","data-v-5003becb"]]);export{C as default};
