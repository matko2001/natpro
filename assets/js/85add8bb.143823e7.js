"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},903:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=e=>{let{authorName:t,githubUsername:r}=e;return n.createElement("div",{className:"author"},"Autor: ",n.createElement("a",{target:"_blank",href:"https://github.com/"+r},t))}},5884:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const{useState:o}=n,a=e=>{let{text:t}=e;const[r,a]=o(!1);return n.createElement("span",{onClick:()=>a(!r),className:"react-spoiler-"+(r?"shown":"hidden")},t)}},5889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),a=r(903);r(5884);const i={title:"Hash"},c=void 0,s={unversionedId:"stringovi/hash",id:"stringovi/hash",title:"Hash",description:"\u010clanak je u izradi.",source:"@site/docs/stringovi/hash.md",sourceDirName:"stringovi",slug:"/stringovi/hash",permalink:"/docs/stringovi/hash",draft:!1,editUrl:"https://github.com/x-fer/natpro/edit/main/docs/stringovi/hash.md",tags:[],version:"current",frontMatter:{title:"Hash"},sidebar:"materijaliSidebar",previous:{title:"Osnovni pojmovi",permalink:"/docs/stringovi/osnovni-pojmovi"},next:{title:"Trie",permalink:"/docs/stringovi/trie"}},l={},u=[],p={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{authorName:"Ime Prezime",githubUsername:"x-fer",mdxType:"Author"}),(0,o.kt)("p",null,"\u010clanak je u izradi."))}m.isMDXComponent=!0}}]);