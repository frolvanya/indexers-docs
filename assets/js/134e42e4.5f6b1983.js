"use strict";(self.webpackChunknear_lake_dock=self.webpackChunknear_lake_dock||[]).push([[168],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1677:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return N},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return x}});var n=r(7462),a=r(3366),o=r(7294),i=r(3905),l=r(2389),s=r(5979),c=r(6010),u="tabItem_LplD";function p(e){var t,r,a,i=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.UB)(),g=x.tabGroupChoices,N=x.setTabGroupChoices,y=(0,o.useState)(k),w=y[0],E=y[1],O=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=g[m];null!=T&&T!==w&&h.some((function(e){return e.value===T}))&&E(T)}var I=function(e){var t=e.currentTarget,r=O.indexOf(t),n=h[r].value;n!==w&&(j(t),E(n),null!=m&&N(m,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},f)},h.map((function(e){var t=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:I,onClick:I},a,{className:(0,c.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,l.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}function m(e){var t=e.children,r=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}var f=["components"],v={sidebar_position:3},h="NEAR Indexer for Explorer",b={unversionedId:"projects/near-indexer-for-explorer",id:"projects/near-indexer-for-explorer",title:"NEAR Indexer for Explorer",description:"https://github.com/near/near-indexer-for-explorer",source:"@site/docs/projects/near-indexer-for-explorer.mdx",sourceDirName:"projects",slug:"/projects/near-indexer-for-explorer",permalink:"/docs/projects/near-indexer-for-explorer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/near-indexer-for-explorer.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"NEAR Indexer Framework",permalink:"/docs/projects/near-indexer-framework"},next:{title:"NEAR Lake",permalink:"/docs/projects/near-lake"}},k={},x=[{value:"Description",id:"description",level:2},{value:"Shared read-only access to the databases",id:"shared-read-only-access-to-the-databases",level:2}],g={toc:x};function N(e){var t=e.components,r=(0,a.Z)(e,f);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"near-indexer-for-explorer"},"NEAR Indexer for Explorer"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"GitHub repo")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-indexer-for-explorer"},"https://github.com/near/near-indexer-for-explorer")))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"NEAR Indexer for Explorer is an indexer built on top of ",(0,i.kt)("a",{parentName:"p",href:"./near-indexer-framework"},"NEAR Indexer microframework"),". It watches the network and stores all the data from the blockchain in the PostgreSQL database."),(0,i.kt)("p",null,"This projects serves the needs of ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.near.org/"},"NEAR Explorer")," (it's obvious from the project name though)."),(0,i.kt)("p",null,"We run instances of the project for both testnet and mainnet and feeling the PostgreSQL databases with all the data from the network starting from the genesis as ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.near.org/"},"Explorer")," required."),(0,i.kt)("h2",{id:"shared-read-only-access-to-the-databases"},"Shared read-only access to the databases"),(0,i.kt)("p",null,"We run the indexer and maintain it for ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.near.org/"},"NEAR Explorer"),", ",(0,i.kt)("a",{parentName:"p",href:"https://wallet.near.org"},"NEAR Wallet"),", and some other internal services. It proved to be a great source of data for various analysis and services, so we decided to give a shared read-only public access to the data:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"NOTE")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please, keep in mind that the access to the database is shared across everyone in the world, so it is better to make sure you limit the amount of queris and individual queries are efficient."))),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(m,{value:"testnet",label:"testnet",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"postgres://public_readonly:nearprotocol@testnet.db.explorer.indexer.near.dev/testnet_explorer\n"))),(0,i.kt)(m,{value:"mainnet",label:"mainnet",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"postgres://public_readonly:nearprotocol@mainnet.db.explorer.indexer.near.dev/mainnet_explorer\n")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WARNING")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We may evolve the data schemas, so make sure you follow the release notes of this repository."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/near/near-indexer-for-explorer/blob/master/docs/near-indexer-for-explorer-db.png?raw=true",alt:"Data Schema"})))}N.isMDXComponent=!0}}]);