import{Q as O,K as S,a1 as V,R as B,r as E,e as M,o as P,w as C,I as R,a2 as D,j as r,k as n,l as o,F as T,C as b,W as L,D as u,z as w,t as m,s as j,x as I,m as z,q as x,U as F,V as W}from"./index.af0fadc9.js";import{E as K}from"./el-infinite-scroll.1a188d2e.js";import{_ as $}from"./Loading.31f1f7b0.js";import{_ as q}from"./PlayList.bcdeb48c.js";import"./throttle.e6269aa3.js";const Q={name:"PlayListWrap",setup(){const{proxy:s}=S(),c=V(),y=B(),l=c.query.cat,t=E({sub:[],categories:[],curType:"\u5168\u90E8\u6B4C\u5355",moreTxt:{},allList:{name:"\u5168\u90E8\u6B4C\u5355"},playlist_list:[],playlist_count:24,playlist_loading:!0,busy:!0,params:{order:"hot",cat:l,limit:48,offset:0}}),f=async()=>{const{data:e}=await s.$http.catlist();if(t.sub=e.sub,e.code!==200)return s.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");for(const a in e.categories){const d={name:e.categories[a]};d.children=t.sub.filter(k=>k.category===Number(a)),t.categories.push(d)}t.curType=l||e.all.name,t.allList=e.all,_()},_=()=>{const e=t.sub.find(a=>a.name===t.curType);t.moreTxt={},e&&t.categories[e.category].children.indexOf(e)>=8&&(t.moreTxt[e.category]=e)};M(()=>()=>["item-box","filter-more",moreTxt[index]?"active":""]);const h=e=>{y.push({path:"playlist",query:{cat:e.name,order:t.params.order}})},g=()=>{y.push({path:"playlist"})},v=e=>{y.push({path:"playlist",query:{cat:t.params.cat,order:e}})},i=async e=>{const{data:a}=await s.$http.playList(e);if(a.code!==200)return s.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");t.playlist_list=t.params.offset!==0?[...t.playlist_list,...a.playlists]:a.playlists,t.busy=t.playlist_list.length>=a.total,t.playlist_loading=!1},p=()=>{t.busy=!0,t.params.offset=t.playlist_list.length};return P(()=>{f(),i(t.params)}),C(()=>c.query,(e,a)=>{const{cat:d,order:k}=e;t.curType=d||t.allList.name,t.params=Object.assign({},{order:"hot",cat:"",limit:50,offset:0},{cat:d||"",order:k||"hot"}),_()}),C(()=>t.params,(e,a)=>{e.cat!==a.cat&&(t.busy=!0,t.playlist_list=[]),i(e)},{deep:!0}),{...R(t),getCatlist:f,selectType:h,closed:g,loadMore:p,selectOrder:v}},components:{PlayList:q,Loading:$}},N=s=>(F("data-v-43ab4165"),s=s(),W(),s),U={class:"playlist"},A={class:"filter"},G={class:"filter-title"},H={class:"filter-box"},J=["onClick"],X=N(()=>o("i",{class:"iconfont icon-arrow"},null,-1)),Y={key:1},Z={class:"filter-drop"},ee=["onClick"],te={class:"list-container"},se={class:"list-head"},ae=N(()=>o("i",{class:"iconfont icon-closed"},null,-1)),oe=[ae],re={class:"type"},le={class:"wrapper infinite-list","infinite-scroll-disabled":"busy","infinite-scroll-distance":"100"};function ie(s,c,y,l,t,f){const _=D,h=q,g=$,v=K;return r(),n("div",U,[o("div",A,[(r(!0),n(T,null,b(s.categories,(i,p)=>(r(),n("div",{class:"filter-item",key:p},[o("div",G,u(i.name),1),o("div",H,[(r(!0),n(T,null,b(i.children.slice(0,8),e=>(r(),n("span",{class:m(["item-box",s.curType===e.name?"active":""]),key:e.name},[o("em",{onClick:a=>l.selectType(e)},u(e.name),9,J)],2))),128)),I(_,{width:"auto",trigger:"click"},{reference:x(()=>[i.children.length>9?(r(),n("span",{key:0,class:m(["item-box","filter-more",s.moreTxt[p]?"active":""])},[o("em",null,[L(u(s.moreTxt[p]?s.curType:"\u66F4\u591A"),1),X])],2)):(r(),n("span",Y))]),default:x(()=>[o("div",Z,[(r(!0),n(T,null,b(i.children.slice(9),e=>(r(),n("span",{class:m(["item-box",s.curType===e.name?"active":""]),key:e.name},[o("em",{onClick:a=>l.selectType(e,p)},u(e.name),9,ee)],2))),128))])]),_:2},1024)])]))),128))]),o("div",te,[o("div",se,[o("h2",null,[L(u(s.curType)+" ",1),s.curType!==s.allList.name?(r(),n("em",{key:0,class:"filter-close",onClick:c[0]||(c[0]=(...i)=>l.closed&&l.closed(...i))},oe)):w("",!0)]),o("div",re,[o("span",{class:m(s.params.order==="hot"?"active":""),onClick:c[1]||(c[1]=i=>l.selectOrder("hot"))},"\u70ED\u95E8",2),o("span",{class:m(s.params.order==="new"?"active":""),onClick:c[2]||(c[2]=i=>l.selectOrder("new"))},"\u6700\u65B0",2)])]),j((r(),n("div",le,[I(h,{playList:s.playlist_list,loading:s.playlist_loading,num:s.playlist_count},null,8,["playList","loading","num"]),s.busy?(r(),z(g,{key:0})):w("",!0)])),[[v,l.loadMore]])])])}var me=O(Q,[["render",ie],["__scopeId","data-v-43ab4165"]]);export{me as default};
