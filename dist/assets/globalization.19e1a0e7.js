import{aR as K,aS as ee,aT as te,aU as ae,aV as ne,aW as M,aX as A,aA as oe,aY as ue,aN as re,aP as N,A as m,aZ as H,ae as D,a_ as le,a$ as W,b0 as F,b1 as se,b2 as R,b3 as ie,b4 as de,u as Q,a as fe,y as ce,r as P,b5 as me,e as _,f as E,g as y}from"./index.dc8f07af.js";import{b as he}from"./index.esm.4e0c2904.js";import{u as S}from"./epTheme.f19f44cd.js";function ge(t){return function(e,a,n){var u=Object(e);if(!K(e)){var r=ee(a);e=te(e),a=function(f){return r(u[f],f,u)}}var i=t(e,a,n);return i>-1?u[r?e[i]:i]:void 0}}var ve=ge(ae);const pe=ve,be=ne({id:"pure-app",state:()=>{var t,e,a,n;return{sidebar:{opened:(e=(t=M.getItem("responsive-layout"))==null?void 0:t.sidebarStatus)!=null?e:A().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:(n=(a=M.getItem("responsive-layout"))==null?void 0:a.layout)!=null?n:A().Layout,device:oe()?"mobile":"desktop"}},getters:{getSidebarStatus(){return this.sidebar.opened},getDevice(){return this.device}},actions:{TOGGLE_SIDEBAR(t,e){const a=M.getItem("responsive-layout");t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,a.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,a.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,a.sidebarStatus=this.sidebar.opened),M.setItem("responsive-layout",a)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function $e(){return be(ue)}const j="\u5F53\u524D\u8DEF\u7531\u914D\u7F6E\u4E0D\u6B63\u786E\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E";function Te(){var I;const t=$e(),e=re().options.routes,a=(I=N.getItem("info"))==null?void 0:I.username,n=m(()=>(o,c)=>({background:o===c?S().epThemeColor:"",color:o===c?"#f4f4f5":"#000"})),u=m(()=>(o,c)=>o===c?"":"!dark:hover:color-primary"),r=m(()=>a?{marginRight:"10px"}:""),i=m(()=>!t.getSidebarStatus),f=m(()=>t.getDevice),{$storage:d,$config:h}=H(),g=m(()=>{var o;return(o=d==null?void 0:d.layout)==null?void 0:o.layout}),l=m(()=>h.Title);function s(o){const c=A().Title;c?document.title=`${D(o.title)} | ${c}`:document.title=D(o.title)}function v(){le().handleTags("equal",[...W]),N.removeItem("info"),F.push("/login"),se()}function p(){F.push("/welcome")}function C(){R.emit("openPanel")}function x(){t.toggleSideBar()}function B(o){o==null||o.handleResize()}function X(o){var T;if(!o.children)return console.error(j);const c=/^http(s?):\/\//,b=(T=o.children[0])==null?void 0:T.path;return c.test(b)?o.path+"/"+b:b}function Y(o,c){if(Z(o))return;let b="";const T=o.lastIndexOf("/");T>0&&(b=o.slice(0,T));function k(L,z){return z?z.map($=>{$.path===L?$.redirect?k($.redirect,$.children):R.emit("changLayoutRoute",{indexPath:L,parentPath:b}):$.children&&k(L,$.children)}):console.error(j)}k(o,c)}function Z(o){return ie.includes(o)}function J(o){he(o)}return{title:l,device:f,layout:g,logout:v,routers:e,$storage:d,backHome:p,onPanel:C,changeTitle:s,toggleSideBar:x,menuSelect:Y,handleResize:B,resolvePath:X,isCollapse:i,pureApp:t,username:a,avatarsStyle:r,getDropdownItemStyle:n,getDropdownItemClass:u,changeWangeditorLanguage:J}}function ye(){const{$storage:t,$config:e}=H(),a=()=>{var r,i,f,d,h,g,l,s,v,p,C,x,B;de().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=W),t.locale||(t.locale={locale:(r=e==null?void 0:e.Locale)!=null?r:"zh"},Q().locale.value=(i=e==null?void 0:e.Locale)!=null?i:"zh"),t.layout||(t.layout={layout:(f=e==null?void 0:e.Layout)!=null?f:"vertical",theme:(d=e==null?void 0:e.Theme)!=null?d:"default",darkMode:(h=e==null?void 0:e.DarkMode)!=null?h:!1,sidebarStatus:(g=e==null?void 0:e.SidebarStatus)!=null?g:!0,epThemeColor:(l=e==null?void 0:e.EpThemeColor)!=null?l:"#409EFF"}),t.configure||(t.configure={grey:(s=e==null?void 0:e.Grey)!=null?s:!1,weak:(v=e==null?void 0:e.Weak)!=null?v:!1,hideTabs:(p=e==null?void 0:e.HideTabs)!=null?p:!1,showLogo:(C=e==null?void 0:e.ShowLogo)!=null?C:!0,showModel:(x=e==null?void 0:e.ShowModel)!=null?x:"smart",multiTagsCache:(B=e==null?void 0:e.MultiTagsCache)!=null?B:!1})},n=m(()=>t==null?void 0:t.layout.layout),u=m(()=>t.layout);return{layout:n,layoutTheme:u,initStorage:a}}function Ve(t){const{$storage:e,changeTitle:a,changeWangeditorLanguage:n,handleResize:u}=Te(),{locale:r,t:i}=Q(),f=fe();function d(){e.locale={locale:"zh"},r.value="zh",t&&u(t.value)}function h(){e.locale={locale:"en"},r.value="en",t&&u(t.value)}return ce(()=>r.value,()=>{a(f.meta),r.value==="en"?n(r.value):n("zh-CN")}),{t:i,route:f,locale:r,translationCh:d,translationEn:h}}const w={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"head",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/Users/zhangyi/Desktop/vue-pure-admin/node_modules/.pnpm/@pureadmin+theme@2.4.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $vxe-primary-color: #409EFF !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $navTextColor: #fff !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $vxe-primary-color: #409EFF !default;
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $navTextColor: #7a80b4 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $vxe-primary-color: #f5222d !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $navTextColor: #red !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $vxe-primary-color: #fa541c !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $navTextColor: #fff !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $vxe-primary-color: #fadb14 !default;
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $navTextColor: #fff !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $vxe-primary-color: #13c2c2 !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $navTextColor: #7a80b4 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $vxe-primary-color: #52c41a !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $navTextColor: #7a80b4 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $vxe-primary-color: #eb2f96 !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $navTextColor: #7a80b4 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $vxe-primary-color: #722ed1 !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $navTextColor: #7a80b4 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},Ce="/",xe="assets";function U(t){let e=t.replace("#","").match(/../g);for(let a=0;a<3;a++)e[a]=parseInt(e[a],16);return e}function q(t,e,a){let n=[t.toString(16),e.toString(16),a.toString(16)];for(let u=0;u<3;u++)n[u].length==1&&(n[u]=`0${n[u]}`);return`#${n.join("")}`}function Be(t,e){let a=U(t);for(let n=0;n<3;n++)a[n]=Math.floor(a[n]*(1-e));return q(a[0],a[1],a[2])}function Me(t,e){let a=U(t);for(let n=0;n<3;n++)a[n]=Math.floor((255-a[n])*e+a[n]);return q(a[0],a[1],a[2])}function G(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function O({scopeName:t,multipleScopeVars:e}){const a=Array.isArray(e)&&e.length?e:w.multipleScopeVars;let n=document.documentElement.className;new RegExp(G(t)).test(n)||(a.forEach(u=>{n=n.replace(new RegExp(G(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function V({id:t,href:e}){const a=document.createElement("link");return a.rel="stylesheet",a.href=e,a.id=t,a}function Se(t){const e={scopeName:"theme-default",customLinkHref:r=>r,...t},a=e.themeLinkTagId||w.themeLinkTagId;let n=document.getElementById(a);const u=e.customLinkHref(`/${Ce}/${xe}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,""));if(n){n.id=`${a}_old`;const r=V({id:a,href:u});n.nextSibling?n.parentNode.insertBefore(r,n.nextSibling):n.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),O(e)};return}n=V({id:a,href:u}),O(e),document[(e.themeLinkTagInjectTo||w.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function We(){var g;const{layoutTheme:t,layout:e}=ye(),a=P([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=H(),u=P((g=n==null?void 0:n.layout)==null?void 0:g.darkMode),r=document.documentElement;function i(l="default"){var s,v;if(t.value.theme=l,Se({scopeName:`layout-theme-${l}`}),n.layout={layout:e.value,theme:l,darkMode:u.value,sidebarStatus:(s=n.layout)==null?void 0:s.sidebarStatus,epThemeColor:(v=n.layout)==null?void 0:v.epThemeColor},l==="default"||l==="light")d(A().EpThemeColor);else{const p=pe(a.value,{themeColor:l});d(p.color)}}const f=l=>new me(l).shade(10).toString(),d=l=>{S().setEpThemeColor(l),r.style.setProperty("--el-color-primary-active",f(l)),document.documentElement.style.setProperty("--el-color-primary",l);for(let s=1;s<=9;s++)document.documentElement.style.setProperty(`--el-color-primary-light-${s}`,Me(l,s/10));for(let s=1;s<=2;s++)document.documentElement.style.setProperty(`--el-color-primary-dark-${s}`,Be(l,s/10))};function h(){S().epTheme==="light"&&u.value?i("default"):i(S().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:r,dataTheme:u,layoutTheme:t,themeColors:a,dataThemeChange:h,setEpThemeColor:d,setLayoutThemeColor:i}}const Ae={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16"},ke=y("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Le=y("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),we=[ke,Le];function He(t,e){return _(),E("svg",Ae,we)}const Qe={render:He},_e={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16"},Ee=y("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Ie=y("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),ze=[Ee,Ie];function Ne(t,e){return _(),E("svg",_e,ze)}const Ue={render:Ne},De={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"globalization",width:"1em",height:"1em",viewBox:"0 0 512 512"},Fe=y("path",{d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zM267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"},null,-1),Re=[Fe];function Pe(t,e){return _(),E("svg",De,Re)}const qe={render:Pe};export{We as a,Te as b,Ve as c,Qe as d,Ue as e,$e as f,qe as g,Se as t,ye as u};
