(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{115:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),b=n,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return t?r.a.createElement(d,l(l({ref:a},c),{},{components:t})):r.a.createElement(d,l({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},98:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return s}));var n=t(3),r=t(7),o=(t(0),t(115)),i={title:"Kako napisati blog?"},l={unversionedId:"doprinos-ovim-materijalima/kako-napisati-blog",id:"doprinos-ovim-materijalima/kako-napisati-blog",isDocsHomePage:!1,title:"Kako napisati blog?",description:"Proces objavljivanja blog objava je gotovo isti kao i za \u010dlanke.",source:"@site/docs\\doprinos-ovim-materijalima\\kako-napisati-blog.md",slug:"/doprinos-ovim-materijalima/kako-napisati-blog",permalink:"/docs/doprinos-ovim-materijalima/kako-napisati-blog",editUrl:"https://github.com/ivvlspirit/natpro/tree/main/website/docs/doprinos-ovim-materijalima/kako-napisati-blog.md",version:"current",sidebar:"doprinosSidebar",previous:{title:"Kako napisati \u010dlanak?",permalink:"/docs/doprinos-ovim-materijalima/kako-napisati-clanak"},next:{title:"Prijava pogre\u0161ke",permalink:"/docs/doprinos-ovim-materijalima/prijava-pogreske"}},p=[],c={toc:p};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Proces objavljivanja blog objava je gotovo isti kao i za \u010dlanke."),Object(o.b)("p",null,"U svaku blog objavu na po\u010detku treba kopirati sadr\u017eaj datoteke ",Object(o.b)("inlineCode",{parentName:"p"},"sablona-blog.md")," te urediti navedene parametre."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Naslov velikim slovom\nauthor: Ime Prezime\nauthor_title: Titula @ Ustanova\nauthor_url: GitHub ili tako neki URL\nauthor_image_url: URL neke lijepe slike\ntags: [oznake, odvojene, zarezima]\n---\n\nOvdje ide tekst\n")),Object(o.b)("p",null,"Osim toga, imena datoteka moraju biti u obliku ",Object(o.b)("inlineCode",{parentName:"p"},"YYYY-MM-DD-naslov-malim-slovima.md")," s tim da za naslov vrijede ista ograni\u010denja kao i za \u010dlanke. Datoteke blog objava se dodaju u mapu ",Object(o.b)("inlineCode",{parentName:"p"},"blog"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Forkanje"),", ",Object(o.b)("em",{parentName:"p"},"kloniranje")," i ",Object(o.b)("em",{parentName:"p"},"pull requestovi")," se obavljaju na isti na\u010din kao i za \u010dlanke."))}s.isMDXComponent=!0}}]);