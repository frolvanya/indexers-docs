"use strict";(self.webpackChunknear_lake_dock=self.webpackChunknear_lake_dock||[]).push([[114],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9400:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={slug:"2022-02-04-updates",title:"Feb 4, 2022 Updates",authors:["khorolets","telezhnaya","frol"],tags:["updates"]},p=void 0,u={permalink:"/blog/2022-02-04-updates",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-02-04-updates.md",source:"@site/blog/2022-02-04-updates.md",title:"Feb 4, 2022 Updates",description:"Indexer Team is focused on NEAR Indexer microframework and Indexer for Explorer",date:"2022-02-04T00:00:00.000Z",formattedDate:"February 4, 2022",tags:[{label:"updates",permalink:"/blog/tags/updates"}],readingTime:.57,truncated:!1,authors:[{name:"Bohdan Khorolets",title:"Indexer Wizard",url:"https://github.com/khorolets",imageURL:"https://github.com/khorolets.png",key:"khorolets"},{name:"Olga Telezhnaya",title:"Data Wizard",url:"https://github.com/telezhnaya",imageURL:"https://github.com/telezhnaya.png",key:"telezhnaya"},{name:"Vlad Frolov",title:"Data Platform Guru",url:"https://github.com/frol",imageURL:"https://github.com/frol.png",key:"frol"}],frontMatter:{slug:"2022-02-04-updates",title:"Feb 4, 2022 Updates",authors:["khorolets","telezhnaya","frol"],tags:["updates"]},prevItem:{title:"Feb 11, 2022 Updates",permalink:"/blog/2022-02-11-updates"}},c={authorsImageUrls:[void 0,void 0,void 0]},s=[],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Indexer Team is focused on NEAR Indexer microframework and Indexer for Explorer"),(0,o.kt)("p",null,"Updates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improved Indexer DB configuration: all the queries should run faster (@telezhnaya)"),(0,o.kt)("li",{parentName:"ul"},"Added the info about all contract deployments into Analytics DB ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-analytics/pull/42"},"https://github.com/near/near-analytics/pull/42")," (@telezhnaya)"),(0,o.kt)("li",{parentName:"ul"},"Added support of FT events in Indexer ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-indexer-for-explorer/pull/224"},"https://github.com/near/near-indexer-for-explorer/pull/224")," (@telezhnaya)"),(0,o.kt)("li",{parentName:"ul"},"Added some indexes into Indexer DB. Be careful, applying migration could take some time ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-indexer-for-explorer/pull/243"},"https://github.com/near/near-indexer-for-explorer/pull/243")," (@telezhnaya)"),(0,o.kt)("li",{parentName:"ul"},"Introduced ",(0,o.kt)("inlineCode",{parentName:"li"},"ReceiptsCache")," for Indexer for Explorer to avoid unnecessary SELECT queries to Indexer DB ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-indexer-for-explorer/pull/234"},"https://github.com/near/near-indexer-for-explorer/pull/234")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-indexer-for-explorer/pull/244"},"https://github.com/near/near-indexer-for-explorer/pull/244")," (@khorolets)"),(0,o.kt)("li",{parentName:"ul"},"Prepared a release of Indexer for Explorer compatible with 1.24.0 nearcore (@khorolets)"),(0,o.kt)("li",{parentName:"ul"},"Made first steps in the complete remake of Indexer for Explorer - NEAR Lake ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-lake"},"https://github.com/near/near-lake")," (@khorolets)")))}m.isMDXComponent=!0}}]);