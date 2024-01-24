import{ah as Q,U as R,r as E,C as p,W as X,b as Y,m,ae as h,l as M,t as ee,h as x,I as g,u as a,ai as se,z as T,aj as ne,a8 as te,f as L,y as oe,F as ae,af as re,j as U,a9 as le,aa as ie,ag as O,ak as V,ab as w,al as _}from"./entry.7c31a8c4.js";import{m as ue,u as ce,a as de}from"./input.8247a8fb.js";import{E as pe}from"./index.36181721.js";import{b as me,r as fe,s as D,v as A,x as ge,T as F,a as $,_ as ye,y as ve,z as Ce,A as he,i as be,B as Te,D as Ne}from"./button.d46e449a.js";const H={};const P=["success","info","warning","error"],l=ue({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:A?document.body:void 0}),Se=me({customClass:{type:String,default:l.customClass},center:{type:Boolean,default:l.center},dangerouslyUseHTMLString:{type:Boolean,default:l.dangerouslyUseHTMLString},duration:{type:Number,default:l.duration},icon:{type:fe,default:l.icon},id:{type:String,default:l.id},message:{type:D([String,Object,Function]),default:l.message},onClose:{type:D(Function),required:!1},showClose:{type:Boolean,default:l.showClose},type:{type:String,values:P,default:l.type},offset:{type:Number,default:l.offset},zIndex:{type:Number,default:l.zIndex},grouping:{type:Boolean,default:l.grouping},repeatNum:{type:Number,default:l.repeatNum}}),Ee={destroy:()=>!0},u=Q([]),Me=s=>{const n=u.findIndex(o=>o.id===s),e=u[n];let r;return n>0&&(r=u[n-1]),{current:e,prev:r}},we=s=>{const{prev:n}=Me(s);return n?n.vm.exposed.bottom.value:0},ke=(s,n)=>u.findIndex(r=>r.id===s)>0?20:n,ze=["id"],Be=["innerHTML"],Ie=R({name:"ElMessage"}),xe=R({...Ie,props:Se,emits:Ee,setup(s,{expose:n}){const e=s,{Close:r}=ve,{ns:o,zIndex:c}=ge("message"),{currentZIndex:i,nextZIndex:d}=c,f=E(),v=E(!1),C=E(0);let N;const q=p(()=>e.type?e.type==="error"?"danger":e.type:"info"),Z=p(()=>{const t=e.type;return{[o.bm("icon",t)]:t&&F[t]}}),k=p(()=>e.icon||F[e.type]||""),G=p(()=>we(e.id)),z=p(()=>ke(e.id,e.offset)+G.value),W=p(()=>C.value+z.value),J=p(()=>({top:`${z.value}px`,zIndex:i.value}));function S(){e.duration!==0&&({stop:N}=Ce(()=>{b()},e.duration))}function B(){N==null||N()}function b(){v.value=!1}function K({code:t}){t===he.esc&&b()}return X(()=>{S(),d(),v.value=!0}),Y(()=>e.repeatNum,()=>{B(),S()}),ce(document,"keydown",K),de(f,()=>{C.value=f.value.getBoundingClientRect().height}),n({visible:v,bottom:W,close:b}),(t,I)=>(m(),h(ie,{name:a(o).b("fade"),onBeforeLeave:t.onClose,onAfterLeave:I[0]||(I[0]=$e=>t.$emit("destroy")),persisted:""},{default:M(()=>[ee(x("div",{id:t.id,ref_key:"messageRef",ref:f,class:g([a(o).b(),{[a(o).m(t.type)]:t.type&&!t.icon},a(o).is("center",t.center),a(o).is("closable",t.showClose),t.customClass]),style:se(a(J)),role:"alert",onMouseenter:B,onMouseleave:S},[t.repeatNum>1?(m(),h(a(pe),{key:0,value:t.repeatNum,type:a(q),class:g(a(o).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),a(k)?(m(),h(a($),{key:1,class:g([a(o).e("icon"),a(Z)])},{default:M(()=>[(m(),h(ne(a(k))))]),_:1},8,["class"])):T("v-if",!0),te(t.$slots,"default",{},()=>[t.dangerouslyUseHTMLString?(m(),L(ae,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),x("p",{class:g(a(o).e("content")),innerHTML:t.message},null,10,Be)],2112)):(m(),L("p",{key:0,class:g(a(o).e("content"))},oe(t.message),3))]),t.showClose?(m(),h(a($),{key:2,class:g(a(o).e("closeBtn")),onClick:re(b,["stop"])},{default:M(()=>[U(a(r))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,ze),[[le,v.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Le=ye(xe,[["__file","message.vue"]]);let Oe=1;const j=s=>{const n=!s||O(s)||V(s)||w(s)?{message:s}:s,e={...l,...n};if(!e.appendTo)e.appendTo=document.body;else if(O(e.appendTo)){let r=document.querySelector(e.appendTo);Te(r)||(r=document.body),e.appendTo=r}return e},_e=s=>{const n=u.indexOf(s);if(n===-1)return;u.splice(n,1);const{handler:e}=s;e.close()},De=({appendTo:s,...n},e)=>{const r=`message_${Oe++}`,o=n.onClose,c=document.createElement("div"),i={...n,id:r,onClose:()=>{o==null||o(),_e(C)},onDestroy:()=>{_(null,c)}},d=U(Le,i,w(i.message)||V(i.message)?{default:w(i.message)?i.message:()=>i.message}:null);d.appContext=e||y._context,_(d,c),s.appendChild(c.firstElementChild);const f=d.component,C={id:r,vnode:d,vm:f,handler:{close:()=>{f.exposed.visible.value=!1}},props:d.component.props};return C},y=(s={},n)=>{if(!A)return{close:()=>{}};if(be(H.max)&&u.length>=H.max)return{close:()=>{}};const e=j(s);if(e.grouping&&u.length){const o=u.find(({vnode:c})=>{var i;return((i=c.props)==null?void 0:i.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const r=De(e,n);return u.push(r),r.handler};P.forEach(s=>{y[s]=(n={},e)=>{const r=j(n);return y({...r,type:s},e)}});function Fe(s){for(const n of u)(!s||s===n.props.type)&&n.handler.close()}y.closeAll=Fe;y._context=null;const Ae=Ne(y,"$message");export{Ae as E};
