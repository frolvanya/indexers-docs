"use strict";(self.webpackChunknear_lake_dock=self.webpackChunknear_lake_dock||[]).push([[289],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),m=d(a),s=r,c=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return a?n.createElement(c,i(i({ref:e},k),{},{components:a})):n.createElement(c,i({ref:e},k))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8469:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:1},p="Token Balance",d={unversionedId:"data-flow/token-balance",id:"data-flow/token-balance",title:"Token Balance",description:"Examples from our RPC are used. If you want to look at information about archival nodes (more than 2 days ago), please use archival prefix in your URL (e.g. https//archival-rpc.mainnet.near.org. Body:",source:"@site/docs/data-flow/token-balance.mdx",sourceDirName:"data-flow",slug:"/data-flow/token-balance",permalink:"/docs/data-flow/token-balance",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-flow/token-balance.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NEAR Lake Framework",permalink:"/docs/projects/near-lake-framework"}},k={},u=[{value:"Why does my balance change?",id:"why-does-my-balance-change",level:2},{value:"Transfer of tokens",id:"transfer-of-tokens",level:3},{value:"Creating the account",id:"creating-the-account",level:3},{value:"Deleting the account",id:"deleting-the-account",level:3},{value:"Calling a function",id:"calling-a-function",level:3},{value:"Adding the key",id:"adding-the-key",level:3},{value:"Deleting the key",id:"deleting-the-key",level:3},{value:"Deploying the contract",id:"deploying-the-contract",level:3},{value:"Receiving the reward for being validator",id:"receiving-the-reward-for-being-validator",level:3}],m={toc:u};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"token-balance"},"Token Balance"),(0,l.kt)("p",null,"Examples from our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/develop/front-end/rpc"},"RPC")," are used. If you want to look at information about archival nodes (more than 2 days ago), please use ",(0,l.kt)("inlineCode",{parentName:"p"},"archival")," prefix in your URL (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"https://archival-rpc.mainnet.near.org"),") In this article, we always use ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," methods to the same URL ",(0,l.kt)("inlineCode",{parentName:"p"},"https://archival-rpc.mainnet.near.org"),". Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_tx_status",\n  "params": ["8uxq5BAC4zZL4Set7gtraqZSWduYXRUiNggpKhWmBnzK", "nf-finance.near"]\n}\n')),(0,l.kt)("p",null,"Every ",(0,l.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/develop/front-end/rpc#view-account"},"account")," has liquid balance (called ",(0,l.kt)("inlineCode",{parentName:"p"},"amount"),") and stake (called ",(0,l.kt)("inlineCode",{parentName:"p"},"locked"),"). All calculation in tables are in yoctonear."),(0,l.kt)("p",null,"Total supply is the amount of tokens in the whole system. Each example is selected at the moment when no other changes is performed in the blockchain, so the only example could affect total supply."),(0,l.kt)("h2",{id:"why-does-my-balance-change"},"Why does my balance change?"),(0,l.kt)("p",null,"There are different scenarios why the amount of tokens could change on the account. Let's look at it on real examples."),(0,l.kt)("p",null,"Each example (except rewarding) contains fees user pays for the operation. You could read about fees calculation ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Economics/README.html#transaction-fees"},"here"),"."),(0,l.kt)("h3",{id:"transfer-of-tokens"},"Transfer of tokens"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/transactions/6gUVYsdAsStzU5H2AyW7bxAdEL4RvJv5PL3b8DRnPVED"},"https://explorer.mainnet.near.org/transactions/6gUVYsdAsStzU5H2AyW7bxAdEL4RvJv5PL3b8DRnPVED")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pine.near")," sent 1.64234 tokens to ",(0,l.kt)("inlineCode",{parentName:"p"},"taka.near")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"block height"),(0,l.kt)("th",{parentName:"tr",align:null},"pine.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"taka.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"total supply"),(0,l.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32786820"),(0,l.kt)("td",{parentName:"tr",align:null},"1997461904089428600000000"),(0,l.kt)("td",{parentName:"tr",align:null},"17799799178272291100000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1020393325841554327182410255742095"),(0,l.kt)("td",{parentName:"tr",align:null},"initial state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32786821"),(0,l.kt)("td",{parentName:"tr",align:null},"355076598029241100000000"),(0,l.kt)("td",{parentName:"tr",align:null},"17799799178272291100000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1020393325841554327182410255742095"),(0,l.kt)("td",{parentName:"tr",align:null},"pine.near lost some tokens for transferring and fees (with a margin, some tokens will be returned)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32786822"),(0,l.kt)("td",{parentName:"tr",align:null},"355076598029241100000000"),(0,l.kt)("td",{parentName:"tr",align:null},"19442139178272291100000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1020393325841532008926160255742095"),(0,l.kt)("td",{parentName:"tr",align:null},"taka.near received exactly 1.64234 tokens. Total supply was deducted for making receipt from transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32786823"),(0,l.kt)("td",{parentName:"tr",align:null},"355077267576928600000000"),(0,l.kt)("td",{parentName:"tr",align:null},"19442139178272291100000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1020393325841509690669910255742095"),(0,l.kt)("td",{parentName:"tr",align:null},"pine.near received a change. Total supply was deducted for executing receipt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32786824"),(0,l.kt)("td",{parentName:"tr",align:null},"355077267576928600000000"),(0,l.kt)("td",{parentName:"tr",align:null},"19442139178272291100000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1020393325841509690669910255742095"),(0,l.kt)("td",{parentName:"tr",align:null},"final state")))),(0,l.kt)("p",null,"For such kind of transactions, sender pays 2 fees: for making receipt from transaction; for executing receipt."),(0,l.kt)("p",null,"We also have receipt for returning a change: it is made without fee."),(0,l.kt)("p",null,"For this example, final cost of transferring tokens was ",(0,l.kt)("inlineCode",{parentName:"p"},"22318256250000000000 * 2 / 10^24 = 0.0000446365125")," Near Tokens."),(0,l.kt)("h3",{id:"creating-the-account"},"Creating the account"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/transactions/Hant2anxPJHm3sh8ncc5AWn5VpXTmwq6iyEumVoQcUJP"},"https://explorer.mainnet.near.org/transactions/Hant2anxPJHm3sh8ncc5AWn5VpXTmwq6iyEumVoQcUJP")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nearcrowd.near")," created account ",(0,l.kt)("inlineCode",{parentName:"p"},"app.nearcrowd.near"),", gave the access key, transfer some tokens for that account. These 3 actions are usually go together."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"block height"),(0,l.kt)("th",{parentName:"tr",align:null},"nearcrowd.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"app.nearcrowd.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"total supply"),(0,l.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32396638"),(0,l.kt)("td",{parentName:"tr",align:null},"117975002547050142700000000"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"1019767988635277999737307820909366"),(0,l.kt)("td",{parentName:"tr",align:null},"initial state (app.nearcrowd.near does not exist)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32396639"),(0,l.kt)("td",{parentName:"tr",align:null},"17974916362372455200000000"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"1019767988635277999737307820909366"),(0,l.kt)("td",{parentName:"tr",align:null},"nearcrowd.near spent tokens on transfer and fees (with a margin, some tokens will be returned). Total supply is not changed for now: process is not finished")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32396640"),(0,l.kt)("td",{parentName:"tr",align:null},"17974916362372455200000000"),(0,l.kt)("td",{parentName:"tr",align:null},"100000000000000000000000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019767988635235544231057820909366"),(0,l.kt)("td",{parentName:"tr",align:null},"app.nearcrowd.near was created with initial amount of tokens. Total supply was deducted for making receipt from transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32396641"),(0,l.kt)("td",{parentName:"tr",align:null},"17974917636037642700000000"),(0,l.kt)("td",{parentName:"tr",align:null},"100000000000000000000000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019767988635193088724807820909366"),(0,l.kt)("td",{parentName:"tr",align:null},"nearcrowd.near received a change. Total supply was deducted for executing receipt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32396642"),(0,l.kt)("td",{parentName:"tr",align:null},"17974917636037642700000000"),(0,l.kt)("td",{parentName:"tr",align:null},"100000000000000000000000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019767988635193088724807820909366"),(0,l.kt)("td",{parentName:"tr",align:null},"final state")))),(0,l.kt)("p",null,"For such kind of transactions, sender pays 2 fees: for making receipt from transaction; for executing receipt."),(0,l.kt)("p",null,"We also have receipt for returning a change: it is made without fee. For this example, final cost of creating account and transferring tokens were ",(0,l.kt)("inlineCode",{parentName:"p"},"42455506250000000000 * 2 / 10^24 = 0.0000849110125")," Near Tokens."),(0,l.kt)("h3",{id:"deleting-the-account"},"Deleting the account"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/transactions/8nZeedU6RUnj65zxQYHrGx2Urx5sLe6J2T123xSNL2RK"},"https://explorer.mainnet.near.org/transactions/8nZeedU6RUnj65zxQYHrGx2Urx5sLe6J2T123xSNL2RK")),(0,l.kt)("p",null,"It's not possible to delete not your account: user is always deleting their own account. User should provide beneficiary account that receive all tokens. User could provide the account that does not exist, in such case the tokens will burn."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wxx.near")," deleted their account with beneficiary ",(0,l.kt)("inlineCode",{parentName:"p"},"vng.near")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"block height"),(0,l.kt)("th",{parentName:"tr",align:null},"wxx.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"vng.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"total supply"),(0,l.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"31961454"),(0,l.kt)("td",{parentName:"tr",align:null},"456172376354355113240646"),(0,l.kt)("td",{parentName:"tr",align:null},"719560525627200400000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019079411898934110106918776083373"),(0,l.kt)("td",{parentName:"tr",align:null},"initial state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"31961455"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"719560525627200400000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019079411898934110106918776083373"),(0,l.kt)("td",{parentName:"tr",align:null},"wxx.near was deleted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"31961456"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"1175681792281555513240646"),(0,l.kt)("td",{parentName:"tr",align:null},"1019079411898883000406918776083373"),(0,l.kt)("td",{parentName:"tr",align:null},"vng.near received tokens (minus fee), total supply was deducted by fees getting burned")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"31961457"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"1175681792281555513240646"),(0,l.kt)("td",{parentName:"tr",align:null},"1019079411898883000406918776083373"),(0,l.kt)("td",{parentName:"tr",align:null},"final state")))),(0,l.kt)("p",null,"For such kind of transactions, sender pays 2 fees: for making receipt from transaction; for executing receipt."),(0,l.kt)("p",null,"Note: we do not have the change. For this example, final cost of deleting account was ",(0,l.kt)("inlineCode",{parentName:"p"},"25554850000000000000 * 2 / 10^24 = 0.0000511097")," Near Tokens."),(0,l.kt)("h3",{id:"calling-a-function"},"Calling a function"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/transactions/8oBZrKk8jkAzrsYasoL2DW9Yg6K2GznLhvoiXmSm7kHe"},"https://explorer.mainnet.near.org/transactions/8oBZrKk8jkAzrsYasoL2DW9Yg6K2GznLhvoiXmSm7kHe")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"relayer.bridge.near")," invoked a function in the contract of ",(0,l.kt)("inlineCode",{parentName:"p"},"client.bridge.near")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"block height"),(0,l.kt)("th",{parentName:"tr",align:null},"relayer.bridge.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"client.bridge.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"total supply"),(0,l.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32451005"),(0,l.kt)("td",{parentName:"tr",align:null},"927695372457390994900000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1018709186646522709500000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836940956022237114094657887001"),(0,l.kt)("td",{parentName:"tr",align:null},"initial state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32451006"),(0,l.kt)("td",{parentName:"tr",align:null},"927676238135400182753029324"),(0,l.kt)("td",{parentName:"tr",align:null},"1018709186646522709500000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836940956022237114094657887001"),(0,l.kt)("td",{parentName:"tr",align:null},"the function is invoked, relayer.bridge.near spent the tokens on the fees (with a margin)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32451007"),(0,l.kt)("td",{parentName:"tr",align:null},"927676238135400182753029324"),(0,l.kt)("td",{parentName:"tr",align:null},"1018710176966066945800000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836940955771421812122457887001"),(0,l.kt)("td",{parentName:"tr",align:null},"author of the function gets the reward. Total supply was deducted for making receipt from transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32451008"),(0,l.kt)("td",{parentName:"tr",align:null},"927691569761639596000000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1018710176966066945800000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836940953209860906932057887001"),(0,l.kt)("td",{parentName:"tr",align:null},"relayer.bridge.near received a change for fees. Total supply was deducted for executing receipt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32451009"),(0,l.kt)("td",{parentName:"tr",align:null},"927691569761639596000000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1018710176966066945800000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836940953209860906932057887001"),(0,l.kt)("td",{parentName:"tr",align:null},"final state")))),(0,l.kt)("p",null,"For such kind of transactions, sender pays 2 fees: for making receipt from transaction; for executing receipt. Receiver gets part of the fee as a reward for a possibility to invoke their function."),(0,l.kt)("p",null,"For this example, final cost of invoking the function was ",(0,l.kt)("inlineCode",{parentName:"p"},"(250815301972200000000 + 3551880449426700000000) / 10^24 = 0.0038026957513989")," Near Tokens. Reward was ",(0,l.kt)("inlineCode",{parentName:"p"},"0.0009903195442363")," Near Tokens."),(0,l.kt)("p",null,"TODO: add Nomicon link about royalties when ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/NEPs/issues/198"},"this issue")," will be resolved."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The example of calling a function could be more complex.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/transactions/DuGWWTK2sAxjffifJiJBv6hs3Hc8MdhpHnzgRJryV4Be"},"https://explorer.mainnet.near.org/transactions/DuGWWTK2sAxjffifJiJBv6hs3Hc8MdhpHnzgRJryV4Be")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lulukuang.near")," invokes a function in a protocol of ",(0,l.kt)("inlineCode",{parentName:"p"},"berryclub.ek.near"),". It triggers ",(0,l.kt)("inlineCode",{parentName:"p"},"berryclub.ek.near")," to send the money to third account, ",(0,l.kt)("inlineCode",{parentName:"p"},"farm.berryclub.ek.near"),". So we need to analyze 3 accounts in this scenario."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"block height"),(0,l.kt)("th",{parentName:"tr",align:null},"lulukuang.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"berryclub.ek.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"farm.berryclub.ek.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"total supply"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32448898"),(0,l.kt)("td",{parentName:"tr",align:null},"13565822561282329011544599"),(0,l.kt)("td",{parentName:"tr",align:null},"468266310630308773724199697"),(0,l.kt)("td",{parentName:"tr",align:null},"1795104370794561556009708395"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836941925593000345074757887001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32448899"),(0,l.kt)("td",{parentName:"tr",align:null},"13553154814244264373824919"),(0,l.kt)("td",{parentName:"tr",align:null},"468266310630308773724199697"),(0,l.kt)("td",{parentName:"tr",align:null},"1795104370794561556009708395"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836941925593000345074757887001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32448900"),(0,l.kt)("td",{parentName:"tr",align:null},"13553154814244264373824919"),(0,l.kt)("td",{parentName:"tr",align:null},"468011594500695874498002337"),(0,l.kt)("td",{parentName:"tr",align:null},"1795104370794561556009708395"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836941925350190357602757887001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32448901"),(0,l.kt)("td",{parentName:"tr",align:null},"13563348945268324922643655"),(0,l.kt)("td",{parentName:"tr",align:null},"468011594500695874498002337"),(0,l.kt)("td",{parentName:"tr",align:null},"1795359347718068910135905755"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836941924550160945561757887001")))),(0,l.kt)("h3",{id:"adding-the-key"},"Adding the key"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/transactions/A9767GbmRCLdeCpZYfKTQUqe17KyAu5JrZHanoRChMSV"},"https://explorer.mainnet.near.org/transactions/A9767GbmRCLdeCpZYfKTQUqe17KyAu5JrZHanoRChMSV")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"slavon.near")," added the key to their own account."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"block height"),(0,l.kt)("th",{parentName:"tr",align:null},"slavon.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"total supply"),(0,l.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32452281"),(0,l.kt)("td",{parentName:"tr",align:null},"4110095852838015413724607"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836940258537920949718457887001"),(0,l.kt)("td",{parentName:"tr",align:null},"initial state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32452282"),(0,l.kt)("td",{parentName:"tr",align:null},"4110053774694109613724607"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836940258537920949718457887001"),(0,l.kt)("td",{parentName:"tr",align:null},"fees are gone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32452283"),(0,l.kt)("td",{parentName:"tr",align:null},"4110053774694109613724607"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836940258495842805812657887001"),(0,l.kt)("td",{parentName:"tr",align:null},"total supply was deducted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32452284"),(0,l.kt)("td",{parentName:"tr",align:null},"4110053774694109613724607"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836940258495842805812657887001"),(0,l.kt)("td",{parentName:"tr",align:null},"final state")))),(0,l.kt)("p",null,"For such kind of transactions, sender pays 2 fees: for making receipt from transaction; for executing receipt."),(0,l.kt)("p",null,"Note: we do not have the change. For this example, final cost of adding the key was ",(0,l.kt)("inlineCode",{parentName:"p"},"21039071952900000000 * 2 / 10^24 = 0.0000420781439058")," Near Tokens."),(0,l.kt)("h3",{id:"deleting-the-key"},"Deleting the key"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/transactions/CfuXcVPy7vZNVabYKzemSwDdNF9fnhbMLaaDKjAMyw8j"},"https://explorer.mainnet.near.org/transactions/CfuXcVPy7vZNVabYKzemSwDdNF9fnhbMLaaDKjAMyw8j")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"77yen.near")," deleted the key from their own account."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"block height"),(0,l.kt)("th",{parentName:"tr",align:null},"77yen.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"total supply"),(0,l.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32429428"),(0,l.kt)("td",{parentName:"tr",align:null},"350892032360972200000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836950055687104230777157887001"),(0,l.kt)("td",{parentName:"tr",align:null},"initial state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32429429"),(0,l.kt)("td",{parentName:"tr",align:null},"350851431135972200000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836950055687104230777157887001"),(0,l.kt)("td",{parentName:"tr",align:null},"fees are gone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32429430"),(0,l.kt)("td",{parentName:"tr",align:null},"350851431135972200000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836950055646503005777157887001"),(0,l.kt)("td",{parentName:"tr",align:null},"total supply was deducted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32429431"),(0,l.kt)("td",{parentName:"tr",align:null},"350851431135972200000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019836950055646503005777157887001"),(0,l.kt)("td",{parentName:"tr",align:null},"final state")))),(0,l.kt)("p",null,"For such kind of transactions, sender pays 2 fees: for making receipt from transaction; for executing receipt."),(0,l.kt)("p",null,"Note: we do not have the change. For this example, final cost of adding the key was ",(0,l.kt)("inlineCode",{parentName:"p"},"20300612500000000000 * 2 / 10^24 = 0.000040601225")," Near Tokens."),(0,l.kt)("h3",{id:"deploying-the-contract"},"Deploying the contract"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/transactions/3DN4XiQCX2EeSN5sjiaB4WBjJizthbhUfqQhCBcZK57A"},"https://explorer.mainnet.near.org/transactions/3DN4XiQCX2EeSN5sjiaB4WBjJizthbhUfqQhCBcZK57A")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ref-finance.near")," deployed the contract."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"block height"),(0,l.kt)("th",{parentName:"tr",align:null},"ref-finance.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"total supply"),(0,l.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32378845"),(0,l.kt)("td",{parentName:"tr",align:null},"42166443062029468200000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019767995481527182962669020909366"),(0,l.kt)("td",{parentName:"tr",align:null},"initial state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32378846"),(0,l.kt)("td",{parentName:"tr",align:null},"42165929455413658400000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019767995481527182962669020909366"),(0,l.kt)("td",{parentName:"tr",align:null},"fees are gone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32378847"),(0,l.kt)("td",{parentName:"tr",align:null},"42165929455413658400000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019767995481013576346859220909366"),(0,l.kt)("td",{parentName:"tr",align:null},"total supply was deducted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32378848"),(0,l.kt)("td",{parentName:"tr",align:null},"42165929455413658400000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1019767995481013576346859220909366"),(0,l.kt)("td",{parentName:"tr",align:null},"final state")))),(0,l.kt)("p",null,"For such kind of transactions, sender pays 2 fees: for making receipt from transaction; for executing receipt."),(0,l.kt)("p",null,"Note: we do not have the change. For this example, final cost of deploying the contract was ",(0,l.kt)("inlineCode",{parentName:"p"},"256803307904900000000 * 2 / 10^24 = 0.0005136066158098")," Near Tokens."),(0,l.kt)("h3",{id:"receiving-the-reward-for-being-validator"},"Receiving the reward for being validator"),(0,l.kt)("p",null,"NB: No transaction/receipt is associated with such type of balance changing."),(0,l.kt)("p",null,"On the boundary of the epochs, validators receive reward. The platform gives 10% of minted tokens to special account ",(0,l.kt)("inlineCode",{parentName:"p"},"treasury.near"),". You could think about ",(0,l.kt)("inlineCode",{parentName:"p"},"treasury.near")," as about reward to the whole system to keep it in working order. Total sum of the rewards (including ",(0,l.kt)("inlineCode",{parentName:"p"},"treasury.near"),") is the increase of total supply in the system."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"total supply"),(0,l.kt)("th",{parentName:"tr",align:null},"treasury.near"),(0,l.kt)("th",{parentName:"tr",align:null},"comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"block 32716252"),(0,l.kt)("td",{parentName:"tr",align:null},"1020253586314335829144818854680815"),(0,l.kt)("td",{parentName:"tr",align:null},"2047777174062240806436499682917"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"block 32716253"),(0,l.kt)("td",{parentName:"tr",align:null},"1020323466696960098722157540903707"),(0,l.kt)("td",{parentName:"tr",align:null},"2054765212324667764170368305209"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"difference"),(0,l.kt)("td",{parentName:"tr",align:null},"69880382624269577338686222892"),(0,l.kt)("td",{parentName:"tr",align:null},"6988038262426957733868622292"),(0,l.kt)("td",{parentName:"tr",align:null},"treasury received 10% of reward")))),(0,l.kt)("p",null,"If the validator does not change the stake during the epoch, all the reward will go to their stake. Liquid balance will remain the same."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"block height"),(0,l.kt)("th",{parentName:"tr",align:null},"baziliknear.poolv1.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"baziliknear.poolv1.near locked (stake)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32716252"),(0,l.kt)("td",{parentName:"tr",align:null},"87645929417382101548688640817"),(0,l.kt)("td",{parentName:"tr",align:null},"4051739369484142981303684413288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32716253"),(0,l.kt)("td",{parentName:"tr",align:null},"87645929417382101548688640817"),(0,l.kt)("td",{parentName:"tr",align:null},"4052372556336355400023161624996")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"baziliknear.poolv1.near")," had 4M tokens on their locked balance. Their reward for the epoch was ",(0,l.kt)("inlineCode",{parentName:"p"},"633186852212418719477211708 / 10^24 = 633.1868522124187")," tokens."),(0,l.kt)("p",null,"If the validator decrease the stake during the epoch, it will be actually decreased at the boundary between the epochs. The reward will also go to the liquid balance in such case."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"block height"),(0,l.kt)("th",{parentName:"tr",align:null},"astro-stakers.poolv1.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"astro-stakers.poolv1.near locked (stake)"),(0,l.kt)("th",{parentName:"tr",align:null},"d1.poolv1.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"d1.poolv1.near locked (stake)"),(0,l.kt)("th",{parentName:"tr",align:null},"artemis.poolv1.near amount"),(0,l.kt)("th",{parentName:"tr",align:null},"artemis.poolv1.near locked (stake)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"block 32716252"),(0,l.kt)("td",{parentName:"tr",align:null},"75643656264518222662518079298"),(0,l.kt)("td",{parentName:"tr",align:null},"14871875685703104705137979278533"),(0,l.kt)("td",{parentName:"tr",align:null},"39579636061549418675704317463"),(0,l.kt)("td",{parentName:"tr",align:null},"9002215926886116642974675441492"),(0,l.kt)("td",{parentName:"tr",align:null},"195455191635613196116221250"),(0,l.kt)("td",{parentName:"tr",align:null},"3155647821138218410536743286795")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"block 32716253"),(0,l.kt)("td",{parentName:"tr",align:null},"77968865959341187332341390150"),(0,l.kt)("td",{parentName:"tr",align:null},"14871875685703104705137979278533"),(0,l.kt)("td",{parentName:"tr",align:null},"40986873900034981089977167653"),(0,l.kt)("td",{parentName:"tr",align:null},"9002215926314400176270075441492"),(0,l.kt)("td",{parentName:"tr",align:null},"3155843276329854023732859508045"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"diff"),(0,l.kt)("td",{parentName:"tr",align:null},"2325209694822964669823310852"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1407237838485562414272850190"),(0,l.kt)("td",{parentName:"tr",align:null},"-571716466704600000000"),(0,l.kt)("td",{parentName:"tr",align:null},"3155647821138218410536743286795"),(0,l.kt)("td",{parentName:"tr",align:null},"-3155647821138218410536743286795")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"astro-stakers.poolv1.near")," decided to put the reward to liquid balance, so they invoked a command (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"ping"),"). We can see that the stake does not change between the epochs."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"d1.poolv1.near")," decided to slightly decrease the stake size, so the reward and the part of the stake are on the liquid balance."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"artemis.poolv1.near")," received the reward and stopped being validator at that epoch, so all the stake are on the liquid balance, stake becomes zero."),(0,l.kt)("p",null,"The reword value is calculated based on stake size and number of calculated blocks per epoch. Read more about it ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Economics/README.html#rewards-calculation"},"here")),(0,l.kt)("p",null,"If the validator increase the stake during the epoch, stake will be increased in next few blocks, we do not need to wait for the moment of the epoch boundary. For current epoch, blockchain will take into account stake value fixed at the start of the epoch."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/transactions/HajXjY1gSf47jakXP44ERecjFE2hFvF4FgRyQzNdZzDZ"},"https://explorer.mainnet.near.org/transactions/HajXjY1gSf47jakXP44ERecjFE2hFvF4FgRyQzNdZzDZ")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"elecnodo.near")," put 245.7788678019393 tokens from its locked account ",(0,l.kt)("inlineCode",{parentName:"p"},"57bea511f28a9c0d44148c332826a9b9fb14f13c.lockup.near")," to a staking pool ",(0,l.kt)("inlineCode",{parentName:"p"},"staked.poolv1.near")),(0,l.kt)("p",null,"Read more about epochs changing ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/NEPs/tree/master/specs/BlockchainLayer/EpochManager"},"here"),"."))}s.isMDXComponent=!0}}]);