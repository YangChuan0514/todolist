var R=Object.defineProperty,w=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var $=(e,t,s)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,E=(e,t)=>{for(var s in t||(t={}))D.call(t,s)&&$(e,s,t[s]);if(g)for(var s of g(t))K.call(t,s)&&$(e,s,t[s]);return e},F=(e,t)=>w(e,I(t));import{d as L,q as f,z as N,A as U,c as i,s as n,a,B as j,w as u,F as V,t as b,u as T,v as q,C as z,D as H,r as C,o as p,y as m,x as v}from"./vendor.ed5caf5c.js";import{_ as G}from"./index.3abc0404.js";const J=L({setup(){const e=T(),t=q(),s=f(()=>e.state.todoList),B=f(()=>s.value.filter(l=>!l.done)),A=f(()=>s.value.filter(l=>l.done)),r=N({title:"",dialogVisible:!1}),h=()=>{const{title:l}=r;if(l){const y=s.value[s.value.length-1],S=(y==null?void 0:y.id)||0;e.dispatch("addTodo",{title:l,id:S+1}),r.title=""}},d=l=>{e.dispatch("removeTodo",l)},c=l=>{l.done=!0,e.dispatch("updateTodoStatus",l)},o=()=>{e.dispatch("clearTodo")},_=()=>{t.push({name:"Home"})};return F(E({},U(r)),{handleAdd:h,handleRemove:d,handleUpdate:c,handleClear:o,goBack:_,undoTodos:B,doneTodos:A})}}),k=e=>(z("data-v-30161796"),e=e(),H(),e),M=k(()=>n("h1",null,"TodoList",-1)),O={class:"add-content"},P=v("\u65B0\u589E"),Q=k(()=>n("p",null,"\u8BA1\u5212\u4EFB\u52A1",-1)),W=v("\u5B8C\u6210"),X=k(()=>n("p",null,[n("span",null,"\u5B8C\u6210\u4EFB\u52A1")],-1)),Y={class:"tasks-type"},Z=v("\u56DE\u5230\u9996\u9875"),x=v("\u6E05\u7A7A\u6240\u6709\u4EFB\u52A1");function ee(e,t,s,B,A,r){const h=C("el-input"),d=C("el-button"),c=C("el-tag");return p(),i("div",null,[M,n("div",O,[a(h,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=o=>e.title=o),placeholder:"\u8BF7\u8F93\u5165todolist\u5185\u5BB9",onKeyup:j(e.handleAdd,["enter"])},null,8,["modelValue","onKeyup"]),a(d,{type:"primary",onClick:e.handleAdd},{default:u(()=>[P]),_:1},8,["onClick"])]),n("div",null,[Q,(p(!0),i(V,null,b(e.undoTodos,o=>(p(),i("p",{key:o.id,class:"tasks-type"},[a(c,{type:"primary",closable:"",onClose:_=>e.handleRemove(o.id),class:"task"},{default:u(()=>[n("span",null,m(o.id)+"-",1),n("span",null,m(o.title),1)]),_:2},1032,["onClose"]),a(d,{type:"primary",onClick:_=>e.handleUpdate(o)},{default:u(()=>[W]),_:2},1032,["onClick"])]))),128))]),n("div",null,[X,(p(!0),i(V,null,b(e.doneTodos,o=>(p(),i("p",{key:o.id},[a(c,{type:"success",onClose:_=>e.handleRemove(o.id),closable:"",class:"tasks-type"},{default:u(()=>[n("span",null,m(o.id)+"-",1),n("span",null,m(o.title),1)]),_:2},1032,["onClose"])]))),128))]),n("p",Y,[a(d,{type:"primary",onClick:t[1]||(t[1]=o=>e.goBack())},{default:u(()=>[Z]),_:1}),a(d,{type:"primary",onClick:t[2]||(t[2]=o=>e.handleClear())},{default:u(()=>[x]),_:1})])])}var ne=G(J,[["render",ee],["__scopeId","data-v-30161796"]]);export{ne as default};