import{r as n,e as E,A as f,f as d,h as e,p as u,t as c,v as p,u as o,k as m,y as g,z as w,j as x,l as A,F as V,q as b,n as y,m as v}from"./entry.026a703f.js";const I=e("h2",null,"創建您的帳號",-1),N={key:0},D={__name:"register",setup(S){const t=n(""),l=n(""),a=n(""),_=E(),h=()=>{b(_,t.value,l.value).then(()=>{y("/example/order")}).catch(i=>{switch(i.message){case"INVALID_EMAIL":a.value="無效的Email帳號";break;case"WEAK_PASSWORD : Password should be at least 6 characters":a.value="密碼至少為6個(含)以上的字符";break;case"EMAIL_EXISTS":a.value="Email帳號已註冊";break;default:a.value="Email帳號或密碼不符合規格!!!";break}})};return(i,s)=>{const k=f("router-link");return v(),d(V,null,[I,e("div",null,[u("Email帳號："),c(e("input",{type:"text",placeholder:"Email","onUpdate:modelValue":s[0]||(s[0]=r=>m(t)?t.value=r:null)},null,512),[[p,o(t)]])]),e("div",null,[u("密碼："),c(e("input",{type:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=r=>m(l)?l.value=r:null)},null,512),[[p,o(l)]])]),o(a)?(v(),d("p",N,g(o(a)),1)):w("",!0),e("div",null,[e("button",{onClick:h},"註冊並登入")]),e("p",null,[x(k,{to:"/example/auth/login"},{default:A(()=>[u("已經註冊帳號了？快去登錄吧！")]),_:1})])],64)}}};export{D as default};