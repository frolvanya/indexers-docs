"use strict";(self.webpackChunknear_lake_dock=self.webpackChunknear_lake_dock||[]).push([[6856],{3536:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=(a(8066),["components"]),c={sidebar_position:2,sidebar_label:"Token Transfer"},i="Token Transfer flow",l={unversionedId:"data-flow-and-structures/flow/token-transfer-flow",id:"data-flow-and-structures/flow/token-transfer-flow",title:"Token Transfer flow",description:"This article relies on the assumption you are familiar with the NEAR Data Flow article. We use the same scheme concept for explanations.",source:"@site/docs/data-flow-and-structures/flow/token-transfer-flow.mdx",sourceDirName:"data-flow-and-structures/flow",slug:"/data-flow-and-structures/flow/token-transfer-flow",permalink:"/near-lake-dock/docs/data-flow-and-structures/flow/token-transfer-flow",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-flow-and-structures/flow/token-transfer-flow.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Token Transfer"},sidebar:"tutorialSidebar",previous:{title:"NEAR Data Flow",permalink:"/near-lake-dock/docs/data-flow-and-structures/flow/near-data-flow"},next:{title:"Token Balance",permalink:"/near-lake-dock/docs/data-flow-and-structures/flow/token-balance"}},d={},u=[{value:"Token transfer between the accounts from different shards",id:"token-transfer-between-the-accounts-from-different-shards",level:2},{value:"Token transfer between the accounts from the same shard",id:"token-transfer-between-the-accounts-from-the-same-shard",level:2}],h={toc:u};function p(e){var t=e.components,c=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-transfer-flow"},"Token Transfer flow"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Expactations")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This article relies on the assumption you are familiar with the ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/flow/near-data-flow"},"NEAR Data Flow")," article. We use the same scheme concept for explanations."))),(0,o.kt)("p",null,"In the previous article you've seen the example of token transfer between the accounts from different shards. That example was simplified and a few missed steps in the process. That was intentional to keep the article and the video short yet explanatory in order to give you a big picture for understanding the concept."),(0,o.kt)("p",null,"In this article we're going to have a look at the same data flow, but detailed and we will look at two cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Token transfer between the accounts from different shards"),(0,o.kt)("li",{parentName:"ul"},"Token transfer between the accounts from the same shard")),(0,o.kt)("p",null,"You may be asking what was missing in the previous explanation. Short answer is a ",(0,o.kt)("strong",{parentName:"p"},"Gas Refund")," or simple a ",(0,o.kt)("strong",{parentName:"p"},"Refund"),"."),(0,o.kt)("p",null,"If you don't know what is ",(0,o.kt)("strong",{parentName:"p"},"Gas"),", please ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/concepts/gas"},"read the article Gas")," from NEAR Protocol docs first."),(0,o.kt)("p",null,"As for ",(0,o.kt)("em",{parentName:"p"},"Refunds"),", here's a quote from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/concepts/gas"},"Gas")," article:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Attach extra gas; get refunded!"),(0,o.kt)("p",{parentName:"blockquote"},"..."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"If you attach more gas than needed, you'll get refunded")),(0,o.kt)("p",{parentName:"blockquote"},"..."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"From NEAR Protocol docs ",(0,o.kt)("a",{parentName:"em",href:"https://docs.near.org/docs/concepts/gas#attach-extra-gas-get-refunded"},"Gas. Attach extra gas; get refunded!")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"What refunds mean in terms of data flow")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It means that literally every Transaction process includes the refund flow"))),(0,o.kt)("p",null,"OK, this should be enough for introduction, let's move on to examples."),(0,o.kt)("h2",{id:"token-transfer-between-the-accounts-from-different-shards"},"Token transfer between the accounts from different shards"),(0,o.kt)("p",null,"Basically it is an extention of the example from the ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/flow/near-data-flow"},"NEAR Data Flow")," article."),(0,o.kt)("p",null,"Assuming we have two accounts ",(0,o.kt)("strong",{parentName:"p"},"alice.near")," and ",(0,o.kt)("strong",{parentName:"p"},"bob.near"),". They belong to different ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/shard"},"Shards"),". ",(0,o.kt)("strong",{parentName:"p"},"alice.near")," sends a few tokens to ",(0,o.kt)("strong",{parentName:"p"},"bob.near"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/transaction"},"Transaction")," signed by ",(0,o.kt)("strong",{parentName:"p"},"alice.near")," is sent to the network. It is immediately executed, ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/execution_outcome"},"ExecutionOutcome")," is a result of conversion the transaction into a ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/receipt"},"Receipt"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transaction execution",src:a(6385).Z,width:"1449",height:"700"})),(0,o.kt)("p",null,"During the execution process ",(0,o.kt)("strong",{parentName:"p"},"alice.near")," account as a sender was charged. The ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/receipt"},"Receipt")," appeared in the result of the ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/transaction"},"Transaction")," follows next rules:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It will be executed not earlier than next ",(0,o.kt)("a",{parentName:"li",href:"/near-lake-dock/docs/data-flow-and-structures/structures/block"},"Block")),(0,o.kt)("li",{parentName:"ol"},"It ",(0,o.kt)("strong",{parentName:"li"},"must")," be executed on the receiver's ",(0,o.kt)("a",{parentName:"li",href:"/near-lake-dock/docs/data-flow-and-structures/structures/shard"},"Shard"))),(0,o.kt)("p",null,"So, in our case the receiver is ",(0,o.kt)("strong",{parentName:"p"},"bob.near")," and that account belongs to a different ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/shard"},"Shard")," that's why the ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/receipt"},"Receipt")," moves to the receiver's Shard and is put in the execution queue."),(0,o.kt)("p",null,"In our example the Receipt is executed in the very next Block."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Receipt is executed in the next Block",src:a(3166).Z,width:"1449",height:"700"})),(0,o.kt)("p",null,"Almost done. Remember the refund? So the ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/execution_outcome"},"ExecutionOutcome")," for the Receipt will be another Receipt that is refunding the Gas to the sender. At this moment ",(0,o.kt)("strong",{parentName:"p"},"bob.near")," has received tokens from ",(0,o.kt)("strong",{parentName:"p"},"alice.near"),", and ",(0,o.kt)("strong",{parentName:"p"},"alice.near")," becomes a receiver in the last Receipt (sender in this Receipt is always ",(0,o.kt)("strong",{parentName:"p"},"system"),")."),(0,o.kt)("p",null,"We remind you the rule #2 the Receipt must be executed on the receiver's Shard. So this Receipt moves to the Shard where ",(0,o.kt)("strong",{parentName:"p"},"alice.near")," belongs to. And it is the last execution in this process."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Complete scheme of Token transfer between the accounts from different Shards",src:a(4345).Z,width:"1449",height:"700"})),(0,o.kt)("p",null,"This is it. Tokens has been transfered from the account from one Shard to the account from the different Shard and the initial sender received the refund of Gas."),(0,o.kt)("h2",{id:"token-transfer-between-the-accounts-from-the-same-shard"},"Token transfer between the accounts from the same shard"),(0,o.kt)("p",null,"Let's have a look the example where both accounts belong to the same ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/shard"},"Shard"),". The proces is completely the same as in the previous example, except the Receipts moving from one Shard to another."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/transaction"},"Transaction")," signed by ",(0,o.kt)("strong",{parentName:"p"},"alice.near")," is sent to the network. It is immediately executed, ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/execution_outcome"},"ExecutionOutcome")," is a result of conversion the transaction into a ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/receipt"},"Receipt"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transaction execution",src:a(6385).Z,width:"1449",height:"700"})),(0,o.kt)("p",null,"The Receipt is already on the receiver's Shard, so it is put in the execution queue of the next ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/block"},"Block"),". It is executed in the next Block, and the ",(0,o.kt)("a",{parentName:"p",href:"/near-lake-dock/docs/data-flow-and-structures/structures/execution_outcome"},"ExecutionOutcome")," result is an another Receipt with the refund to the initial sender - ",(0,o.kt)("strong",{parentName:"p"},"alice.near"),". Same rules applied to the last Receipt, it is put to the execution queue and it is executed in the next Block."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Complete scheme of Token transfer between the account from the same Shards",src:a(5553).Z,width:"1337",height:"343"})),(0,o.kt)("p",null,"This is it. You may wonder why the process is overcomplicated for the same Shard case. The answer is ",(0,o.kt)("strong",{parentName:"p"},"the same rules set is applied always"),', and this decision allows to build the NEAR Protocol data flow by only one rules set no matter how many Shard exist at the moment. Also, we avoid a lot of "ifs" and we don\'t have to keep in mind different corner cases because the process follows the same rules.'))}p.isMDXComponent=!0},4345:function(e,t,a){t.Z=a.p+"assets/images/01-diff-shards-complete-7c9b12595c1f681421859628823805a8.png"},5553:function(e,t,a){t.Z=a.p+"assets/images/02-same-shard-complete-44d6ccee87fc7acf076084cdb4c6d46e.png"},6385:function(e,t,a){t.Z=a.p+"assets/images/03-tx-outcome-receipt-0fcb113623aa8f546f29cd413b47a7db.png"},3166:function(e,t,a){t.Z=a.p+"assets/images/04-send-nears-flow-cf058d744907ef8dee67e22c03249add.png"}}]);