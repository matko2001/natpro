"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7247],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},903:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=e=>{let{authorName:t,githubUsername:r}=e;return n.createElement("div",{className:"author"},"Autor: ",n.createElement("a",{target:"_blank",href:"https://github.com/"+r},t))}},5884:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const{useState:o}=n,i=e=>{let{text:t}=e;const[r,i]=o(!1);return n.createElement("span",{onClick:()=>i(!r),className:"react-spoiler-"+(r?"shown":"hidden")},t)}},3003:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),i=r(903);r(5884);const a={title:"Trie"},c=void 0,s={unversionedId:"stringovi/trie",id:"stringovi/trie",title:"Trie",description:"\u010clanak je u izradi.",source:"@site/docs/stringovi/trie.md",sourceDirName:"stringovi",slug:"/stringovi/trie",permalink:"/docs/stringovi/trie",draft:!1,editUrl:"https://github.com/x-fer/natpro/edit/main/docs/stringovi/trie.md",tags:[],version:"current",frontMatter:{title:"Trie"},sidebar:"materijaliSidebar",previous:{title:"Hash",permalink:"/docs/stringovi/hash"}},l={},u=[],p={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{authorName:"Ime Prezime",githubUsername:"x-fer",mdxType:"Author"}),(0,o.kt)("p",null,"\u010clanak je u izradi."))}m.isMDXComponent=!0}}]);