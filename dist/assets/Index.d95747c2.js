import{X as R,aa as V,d as E,u as q,ab as x,r as T,e as S,w as D,o as z,a5 as M,ac as P,ad as C,_ as j,j as l,k as c,l as i,A as F,t as h,B as w,L as O,Q as A,x as L,q as N,D as u,W as I,S as U,U as W,V as K,K as Q,ae as X,I as Y,s as G,F as y,C as b,m as k,z as J}from"./index.af0fadc9.js";import{E as Z}from"./el-infinite-scroll.1a188d2e.js";import{_ as B}from"./Loading.31f1f7b0.js";import"./throttle.e6269aa3.js";const ee=R({zIndex:{type:V([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),te={scroll:({scrollTop:e,fixed:s})=>typeof e=="number"&&typeof s=="boolean",change:e=>typeof e=="boolean"},se=E({name:"ElAffix",props:ee,emits:te,setup(e,{emit:s}){const _=q("affix"),n=x(),r=x(),d=x(),t=T({fixed:!1,height:0,width:0,scrollTop:0,clientHeight:0,transform:0}),o=S(()=>({height:t.fixed?`${t.height}px`:"",width:t.fixed?`${t.width}px`:""})),$=S(()=>{if(!t.fixed)return;const a=e.offset?`${e.offset}px`:0,m=t.transform?`translateY(${t.transform}px)`:"";return{height:`${t.height}px`,width:`${t.width}px`,top:e.position==="top"?a:"",bottom:e.position==="bottom"?a:"",transform:m,zIndex:e.zIndex}}),p=()=>{if(!r.value||!n.value||!d.value)return;const a=r.value.getBoundingClientRect(),m=n.value.getBoundingClientRect();if(t.height=a.height,t.width=a.width,t.scrollTop=d.value instanceof Window?document.documentElement.scrollTop:d.value.scrollTop||0,t.clientHeight=document.documentElement.clientHeight,e.position==="top")if(e.target){const v=m.bottom-e.offset-t.height;t.fixed=e.offset>a.top&&m.bottom>0,t.transform=v<0?v:0}else t.fixed=e.offset>a.top;else if(e.target){const v=t.clientHeight-m.top-e.offset-t.height;t.fixed=t.clientHeight-e.offset<a.bottom&&t.clientHeight>m.top,t.transform=v<0?-v:0}else t.fixed=t.clientHeight-e.offset<a.bottom},f=()=>{p(),s("scroll",{scrollTop:t.scrollTop,fixed:t.fixed})};return D(()=>t.fixed,()=>{s("change",t.fixed)}),z(()=>{var a;if(e.target){if(n.value=(a=document.querySelector(e.target))!=null?a:void 0,!n.value)throw new Error(`Target is not existed: ${e.target}`)}else n.value=document.documentElement;d.value=M(r.value,!0)}),P(d,"scroll",f),C(r,()=>p()),C(n,()=>p()),{ns:_,root:r,state:t,rootStyle:o,affixStyle:$,update:p}}});function ae(e,s,_,n,r,d){return l(),c("div",{ref:"root",class:h(e.ns.b()),style:w(e.rootStyle)},[i("div",{class:h({[e.ns.m("fixed")]:e.state.fixed}),style:w(e.affixStyle)},[F(e.$slots,"default")],6)],6)}var ie=j(se,[["render",ae]]);const oe=O(ie);const ne=E({name:"ArtistItem",props:{item:{type:Object,required:!0}}}),g=e=>(W("data-v-4ead20a8"),e=e(),K(),e),le={class:"item"},re=g(()=>i("em",{class:"circle"},null,-1)),ce={class:"faceImg"},de=g(()=>i("div",{slot:"placeholder",class:"image-slot"},[i("i",{class:"iconfont icon-placeholder"})],-1)),fe={class:"info"},me={class:"info-header"},ue={class:"name"},_e={class:"info-num"},pe={class:"albumSize"},he=g(()=>i("em",null,"\u4E13\u8F91",-1)),ve={class:"musicSize"},ge=g(()=>i("em",null,"\u5355\u66F2",-1)),ye={class:"fansSize"},be=g(()=>i("em",null,"\u7C89\u4E1D",-1));function $e(e,s,_,n,r,d){const t=U;return l(),c("div",le,[re,i("div",ce,[L(t,{src:e.item.picUrl+"?param=120y120"},{default:N(()=>[de]),_:1},8,["src"])]),i("div",fe,[i("div",me,[i("div",ue,u(e.item.name),1),i("i",{class:h(["iconfont icon-collect",{active:e.item.followed}])},null,2)]),i("div",_e,[i("span",pe,[he,I(u(e.item.albumSize),1)]),i("span",ve,[ge,I(u(e.item.musicSize),1)]),i("span",ye,[be,I(u(e.$utils.formartNum(e.item.fansCount)),1)])])])])}var H=A(ne,[["render",$e],["__scopeId","data-v-4ead20a8"]]);const xe={name:"Artist",components:{Loading:B,ArtistItem:H},setup(){const{proxy:e}=Q(),s=T({type:[{label:"\u5168\u90E8",val:-1},{label:"\u7537\u6B4C\u624B",val:1},{label:"\u5973\u6B4C\u624B",val:2},{label:"\u4E50\u961F",val:3}],area:[{label:"\u5168\u90E8",val:-1},{label:"\u534E\u8BED",val:7},{label:"\u6B27\u7F8E",val:96},{label:"\u65E5\u672C",val:8},{label:"\u97E9\u56FD",val:16},{label:"\u5176\u4ED6",val:0}],initial:[{label:"\u70ED\u95E8",val:-1},{label:"#",val:0}],typeIndex:0,areaIndex:0,initialIndex:0,params:{area:"",type:"",initial:"",limit:30,offset:0},list:[],isLoading:!0,busy:!0}),_=()=>{const t=[];for(let o=0;o<26;o++)t.push({label:String.fromCharCode(65+o),val:String.fromCharCode(97+o)});s.initial=[s.initial[0],...t,s.initial[1]]},n=(t,o)=>{s[t+"Index"]=o,s.list=[],s.params.offset=0,s.params[t]=s[t][o].val},r=async t=>{const{data:o}=await e.$http.artistList(t);if(o.code!==200)return e.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");s.list=s.params.offset!==0?[...s.list,...o.artists]:o.artists,s.busy=!o.more,s.isLoading=o.more},d=()=>{s.busy=!0,s.params.offset=s.list.length};return z(()=>{s.params.area=s.area[s.areaIndex].val,s.params.type=s.type[s.typeIndex].val,s.params.initial=s.initial[s.initialIndex].val,_()}),X(()=>{r(s.params)}),{...Y(s),selectType:n,getArtist:r,loadMore:d}}},Ie={class:"artist"},Se={class:"artist-container"},Ce={class:"artist-main"},we={class:"list-container","infinite-scroll-disabled":"busy","infinite-scroll-distance":"100"},ke={class:"aside-box"},Ee={class:"aside-menu"},Te={class:"filter"},ze={class:"filter-item"},Ae=["onClick"],Le={class:"filter-item"},Ne=["onClick"],Be={class:"filter-item"},He=["onClick"];function Re(e,s,_,n,r,d){const t=H,o=B,$=oe,p=Z;return l(),c("div",Ie,[i("div",Se,[i("div",Ce,[G((l(),c("div",we,[(l(!0),c(y,null,b(e.list,f=>(l(),k(t,{item:f},null,8,["item"]))),256)),e.isLoading?(l(),k(o,{key:0})):J("",!0)])),[[p,n.loadMore]])]),i("div",ke,[L($,{offset:140},{default:N(()=>[i("div",Ee,[i("div",Te,[i("div",ze,[(l(!0),c(y,null,b(e.initial,(f,a)=>(l(),c("span",{key:a,class:h(a===e.initialIndex?"active":""),onClick:m=>n.selectType("initial",a)},u(f.label),11,Ae))),128))]),i("div",Le,[(l(!0),c(y,null,b(e.area,(f,a)=>(l(),c("span",{key:a,class:h(a===e.areaIndex?"active":""),onClick:m=>n.selectType("area",a)},u(f.label),11,Ne))),128))]),i("div",Be,[(l(!0),c(y,null,b(e.type,(f,a)=>(l(),c("span",{key:a,class:h(a===e.typeIndex?"active":""),onClick:m=>n.selectType("type",a)},u(f.label),11,He))),128))])])])]),_:1})])])])}var Pe=A(xe,[["render",Re],["__scopeId","data-v-de3d5274"]]);export{Pe as default};
