(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{126:function(e,t,a){},202:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(41),i=a.n(s),r=(a(202),a(46)),o=Object(r.b)({name:"todoData",initialState:{value:[]},reducers:{updateTodoData:function(e,t){e.value=t.payload}}}),l=o.actions.updateTodoData,d=function(e){return e.todoData.value},j=o.reducer,u=Object(r.b)({name:"profileData",initialState:{value:[]},reducers:{updateProfileData:function(e,t){e.value=t.payload[0]}}}),b=u.actions.updateProfileData,h=function(e){return e.profileData.value},x=u.reducer,O=Object(r.b)({name:"userAuthData",initialState:{value:!1},reducers:{updateUserAuthData:function(e,t){e.value=t.payload}}}),p=O.actions.updateUserAuthData,f=function(e){return e.userAuthData.value},g=O.reducer,m=Object(r.b)({name:"isLoadingData",initialState:{value:!0},reducers:{updateIsLoadingData:function(e,t){e.value=t.payload}}}),v=m.actions.updateIsLoadingData,y=function(e){return e.isLoadingData.value},w=m.reducer,N=Object(r.b)({name:"userData",initialState:{value:!0},reducers:{updateUserData:function(e,t){e.value=t.payload}}}),S=(N.actions.updateUserData,N.reducer),C=Object(r.a)({reducer:{todoData:j,profileData:x,userAuthData:g,isLoadingData:w,userData:S}}),k=a(31),D=a(0),A=a.n(D),I=a(4),T=(a(126),a(134)),P=a.n(T),L=a(107),U={apiKey:"AIzaSyDjriWqAwlwma04rJXXfZW8_3RaRQHzs8w",authDomain:"succulent-bfbf4.firebaseapp.com",projectId:"succulent-bfbf4",storageBucket:"succulent-bfbf4.appspot.com",messagingSenderId:"372415741597",appId:"1:372415741597:web:dfa6f76a475b3ca6855e74",measurementId:"G-YX5RDN8G4W"};Object(L.a)(U);var E=a(30),F=a(27),W=a(28),M=a(73),R=a(118),z=a(307),J=a(304),B=a(308),Y=a(111),_=a.n(Y),G=a(112),V=a.n(G),K=a(113),X=a.n(K),H=a(2);function q(){return Object(H.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},children:[1,2].map((function(e){return Object(H.jsxs)(z.a,{style:{margin:"10px",padding:"10px 20px",height:"200px",width:"350px",position:"relative"},children:[Object(H.jsx)(B.a,{className:"preview-edit-delete-button",style:{position:"absolute",right:"75px"},children:Object(H.jsx)(_.a,{})}),Object(H.jsx)(B.a,{className:"preview-edit-delete-button",style:{position:"absolute",right:"42px"},children:Object(H.jsx)(V.a,{})}),Object(H.jsx)(B.a,{className:"preview-edit-delete-button",style:{position:"absolute",right:"10px"},children:Object(H.jsx)(X.a,{})}),Object(H.jsx)(J.a,{height:30,width:"60%"}),Object(H.jsx)(J.a,{height:20,width:"100%",style:{marginTop:17}}),Object(H.jsx)(J.a,{height:20,width:"100%"}),Object(H.jsx)(J.a,{height:20,width:"50%"}),Object(H.jsx)(J.a,{height:20,width:"40%",style:{marginTop:45}})]},e)}))})}function Q(){return Object(H.jsx)("div",{children:Object(H.jsx)(z.a,{style:{padding:"40px 40px",height:"auto",position:"relative"},children:Object(H.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"center"},children:[Object(H.jsx)("div",{children:Object(H.jsx)(J.a,{variant:"circular",width:200,height:200,style:{marginBottom:"40px"}})}),Object(H.jsx)("div",{style:{marginLeft:"40px"},children:Object(H.jsxs)("div",{style:{minWidth:"200px"},children:[Object(H.jsx)(J.a,{height:20,width:"100%"}),Object(H.jsx)(J.a,{height:20,width:"100%"}),Object(H.jsx)(J.a,{height:20,width:"80%"})]})})]})})})}var Z=a(309);function $(){return Object(H.jsx)("div",{style:{width:"100%",textAlign:"center",margin:"100px auto"},children:Object(H.jsx)(Z.a,{})})}var ee=a(6),te=a(13),ae=a(311),ne=a(315),ce=a(313),se=a(314),ie=a(312),re=a(168),oe=a.n(re),le=a(299),de=a(319),je=a(320);function ue(){var e=Object(n.useState)(!1),t=Object(te.a)(e,2),a=t[0],c=t[1],s=Object(E.b)(),i=Object(W.g)(),r=function(){var e=Object(I.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!1),i.push("/signin"),e.next=4,Object(E.e)(s).then((function(){console.log("Sign-out successful.")})).catch((function(e){console.log("Sign-out failed: ".concat(e))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(H.jsxs)("div",{children:[Object(H.jsxs)(le.a,{button:!0,onClick:function(){c(!0)},style:{padding:"10px 30px"},children:[Object(H.jsx)(de.a,{children:Object(H.jsx)(oe.a,{})}),Object(H.jsx)(je.a,{primary:"Logout"})]}),Object(H.jsxs)(ae.a,{open:a,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(H.jsx)(ie.a,{id:"alert-dialog-title",children:"Confirm logout"}),Object(H.jsx)(ce.a,{children:Object(H.jsx)(se.a,{id:"alert-dialog-description",children:"Are you sure you logout?"})}),Object(H.jsx)(ne.a,{children:Object(H.jsx)(B.a,{onClick:r,autoFocus:!0,children:"Logout"})})]})]})}var be=a(317),he=a(305),xe=a(316),Oe=a(321),pe=a(322),fe=a(169),ge=a.n(fe),me=a(170),ve=a.n(me),ye=a(303);function we(){var e=Object(k.c)(h),t=Object(k.c)(y);return Object(H.jsxs)(he.a,{variant:"permanent",sx:Object(ee.a)({width:240,flexShrink:0},"& .MuiDrawer-paper",{width:240,boxSizing:"border-box"}),children:[Object(H.jsx)(xe.a,{}),Object(H.jsxs)(be.a,{sx:{overflow:"auto"},children:[Object(H.jsx)(Oe.a,{children:Object(H.jsx)(le.a,{style:{padding:"30px 0px 0px 0px",display:"inline-flex",justifyContent:"center"},children:Object(H.jsx)("div",{children:t?Object(H.jsx)(J.a,{variant:"circular",width:100,height:100}):Object(H.jsx)(ye.a,{alt:"Avatar",sx:{width:100,height:100},children:"M"})})})}),Object(H.jsx)(Oe.a,{children:Object(H.jsx)(le.a,{button:!0,style:{padding:"10px 20px",textAlign:"center"},children:Object(H.jsx)(je.a,{primary:t?Object(H.jsx)(J.a,{variant:"text",height:20,width:"70%",style:{textAlign:"center",margin:"-2px auto 0px auto"}}):"".concat(e.firstName," ").concat(e.lastName)})})}),Object(H.jsx)(pe.a,{}),Object(H.jsxs)(Oe.a,{children:[Object(H.jsx)(F.b,{to:"/create",children:Object(H.jsxs)(le.a,{button:!0,style:{padding:"10px 30px"},children:[Object(H.jsx)(de.a,{children:Object(H.jsx)(ge.a,{})}),Object(H.jsx)(je.a,{primary:"Create Todo"})]})}),Object(H.jsx)(F.b,{to:"/profile",children:Object(H.jsxs)(le.a,{button:!0,style:{padding:"10px 30px"},children:[Object(H.jsx)(de.a,{children:Object(H.jsx)(ve.a,{})}),Object(H.jsx)(je.a,{primary:"Profile"})]})}),Object(H.jsx)(ue,{})]})]})]})}var Ne=a(318),Se=a(296),Ce=a(310);function ke(e){var t=e.children;return Object(H.jsx)("div",{children:Object(H.jsxs)(be.a,{sx:{display:"flex"},children:[Object(H.jsx)(Se.a,{}),Object(H.jsx)(Ne.a,{position:"fixed",sx:{zIndex:function(e){return e.zIndex.drawer+1}},style:{backgroundColor:"#1976d2",color:"#ffffff"},children:Object(H.jsx)(xe.a,{children:Object(H.jsx)(F.b,{to:"/dashboard",children:Object(H.jsx)(Ce.a,{variant:"h6",noWrap:!0,component:"div",style:{color:"#ffffff"},children:"Todo List"})})})}),Object(H.jsx)(we,{}),Object(H.jsxs)(be.a,{component:"main",sx:{flexGrow:1,p:3},children:[Object(H.jsx)(xe.a,{}),t]})]})})}var De=["component"],Ae=function(e){var t,a=e.component,n=Object(R.a)(e,De),c=Object(k.c)(f),s=Object(k.c)(y);return"/dashboard"===n.path?t=Object(H.jsx)(q,{}):"/profile"===n.path?t=Object(H.jsx)(Q,{}):("/create"===n.path||"/update/:todoId"===n.path)&&(t=Object(H.jsx)($,{})),Object(H.jsx)(ke,{children:Object(H.jsx)(W.b,Object(M.a)(Object(M.a)({},n),{},{render:function(e){return s?t:c?Object(H.jsx)(a,Object(M.a)({},e)):Object(H.jsx)(W.a,{to:"/signin"})}}))})},Ie=["component"],Te=function(e){var t=e.component,a=Object(R.a)(e,Ie),n=Object(k.c)(f);return Object(H.jsx)(W.b,Object(M.a)(Object(M.a)({},a),{},{render:function(e){return n?Object(H.jsx)(W.a,{to:"/dashboard"}):Object(H.jsx)(t,Object(M.a)({},e))}}))},Pe=a(77);function Le(e){var t=e.passwordShown,a=e.setPasswordShown;return Object(H.jsx)("div",{onClick:function(){a(!t)},type:"button",className:"password-toggle-button",children:"Show Password"})}var Ue=a(171),Ee=a.n(Ue);function Fe(e){var t=e.children,a=e.disabled;return Object(H.jsx)("div",{style:{margin:"0 auto",textAlign:"center"},children:Object(H.jsxs)(B.a,{type:"submit",variant:"contained",disabled:a,style:a?{padding:"10px 14px 10px 25px",borderRadius:"25px"}:{backgroundColor:"#1976d2",padding:"10px 14px 10px 25px",borderRadius:"25px"},children:[t,Object(H.jsx)(Ee.a,{className:"arrowIcon"})]})})}var We=a(172),Me=a.n(We);function Re(){return Object(H.jsx)("div",{style:{textAlign:"center",margin:"20px auto"},children:Object(H.jsx)(Me.a,{style:{fontSize:"50px",color:"#1976d2"}})})}var ze=a(297),Je=a(119);function Be(){var e=Object(n.useState)(""),t=Object(te.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(te.a)(s,2),r=i[0],o=i[1],l=Object(n.useState)(""),d=Object(te.a)(l,2),j=d[0],u=d[1],b=Object(n.useState)(""),h=Object(te.a)(b,2),x=h[0],O=h[1],p=Object(n.useState)(""),f=Object(te.a)(p,2),g=f[0],m=f[1],v=Object(n.useState)(!1),y=Object(te.a)(v,2),w=y[0],N=y[1],S=Object(n.useState)(!1),C=Object(te.a)(S,2),k=C[0],D=C[1];var T=Object(Je.a)(8),P=new Date,L=P.getFullYear()+"-"+(P.getMonth()+1)+"-"+P.getDate(),U=Object(n.useState)(null),M=Object(te.a)(U,2),R=M[0],z=M[1],J=Object(E.b)(),B=Object(Pe.b)(),Y=Object(W.g)();return Object(H.jsxs)("div",{className:"Login",children:[Object(H.jsx)(Re,{}),Object(H.jsx)("div",{className:"login-title",children:"Sign up"}),Object(H.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),x===g?Object(E.a)(J,j,x).then(function(){var e=Object(I.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user,console.log("user ".concat(n.uid," is created")),e.prev=2,e.next=5,Object(Pe.c)(Object(Pe.a)(B,n.uid,"userInfo"),{userUid:n.uid,firstName:a,lastName:r,email:n.email});case 5:return e.next=7,Object(Pe.c)(Object(Pe.a)(B,n.uid,"todos","active",T),{todoId:T,title:"Test",body:"This is where you can write contents.",createdAt:L});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error adding document: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()).then((function(){Y.push("/dashboard")})).catch((function(e){var t=e.code,a=e.message;console.log(t),console.log(a),z(a)})):z("Your password and confirmation password do not match.")},children:[Object(H.jsx)("div",{className:"register-error-message",children:R}),Object(H.jsx)("div",{className:"title",children:"First Name"}),Object(H.jsx)("div",{className:"textfield-title",children:Object(H.jsx)(ze.a,{autoFocus:!0,variant:"outlined",name:"firstName",style:{width:"100%"},value:a,onChange:function(e){return c(e.target.value)}})}),Object(H.jsx)("div",{className:"body",children:"Last Name"}),Object(H.jsx)("div",{className:"textfield-title",children:Object(H.jsx)(ze.a,{variant:"outlined",name:"lastName",style:{width:"100%"},value:r,onChange:function(e){return o(e.target.value)}})}),Object(H.jsx)("div",{className:"body",children:"Email"}),Object(H.jsx)("div",{className:"textfield-title",children:Object(H.jsx)(ze.a,{variant:"outlined",name:"email",style:{width:"100%"},value:j,onChange:function(e){return u(e.target.value)}})}),Object(H.jsxs)("div",{className:"password-text-container",children:[Object(H.jsx)("div",{children:"Password"}),Object(H.jsx)(Le,{passwordShown:w,setPasswordShown:N})]}),Object(H.jsx)("div",{className:"textfield-title",children:Object(H.jsx)(ze.a,{variant:"outlined",name:"password",type:w?"text":"password",style:{width:"100%"},value:x,onChange:function(e){return O(e.target.value)}})}),Object(H.jsxs)("div",{className:"password-text-container",children:[Object(H.jsx)("div",{children:"Confirm Password"}),Object(H.jsx)(Le,{passwordShown:k,setPasswordShown:D})]}),Object(H.jsx)("div",{className:"textfield-title",children:Object(H.jsx)(ze.a,{variant:"outlined",name:"confirmPassword",type:k?"text":"password",style:{width:"100%"},value:g,onChange:function(e){return m(e.target.value)}})}),Object(H.jsx)("div",{className:"login-button",children:Object(H.jsx)(Fe,{type:"submit",disabled:!(a.length>0&&r.length>0&&j.length>0&&x.length>0),children:"Signup"})}),Object(H.jsx)(F.b,{to:"/signin",children:Object(H.jsx)("div",{className:"toggle-signin-signup",children:"Already have an account? Sign in"})})]})]})}function Ye(){var e=Object(n.useState)(""),t=Object(te.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(te.a)(s,2),r=i[0],o=i[1],l=Object(n.useState)(!1),d=Object(te.a)(l,2),j=d[0],u=d[1];var b=Object(n.useState)(null),h=Object(te.a)(b,2),x=h[0],O=h[1],p=Object(E.b)(),f=Object(W.g)();function g(){return(g=Object(I.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Object(E.d)(p,a,r).then((function(e){var t=e.user;console.log(t)})).then((function(){f.push("/dashboard")})).catch((function(e){O(e.message)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(H.jsxs)("div",{className:"Login",children:[Object(H.jsx)(Re,{}),Object(H.jsx)("div",{className:"login-title",children:"Sign in"}),Object(H.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){return g.apply(this,arguments)},children:[Object(H.jsx)("div",{className:"register-error-message",children:x}),Object(H.jsx)("div",{className:"title",children:"Email"}),Object(H.jsx)("div",{className:"textfield-title",children:Object(H.jsx)(ze.a,{autoFocus:!0,variant:"outlined",name:"email",style:{width:"100%"},value:a,onChange:function(e){return c(e.target.value)}})}),Object(H.jsxs)("div",{className:"password-text-container",children:[Object(H.jsx)("div",{children:"Password"}),Object(H.jsx)(Le,{passwordShown:j,setPasswordShown:u})]}),Object(H.jsx)("div",{className:"textfield-title",children:Object(H.jsx)(ze.a,{variant:"outlined",name:"password",type:j?"text":"password",style:{width:"100%"},value:r,onChange:function(e){return o(e.target.value)}})}),Object(H.jsx)("div",{className:"login-button",children:Object(H.jsx)(Fe,{type:"submit",disabled:!(a.length>0&&r.length>0),children:"Login"})}),Object(H.jsx)(F.b,{to:"/signup",children:Object(H.jsx)("div",{className:"toggle-signin-signup",children:"Don't have an account? Sign up"})})]})]})}function _e(e){var t=e.todoId,a=e.title,c=e.body,s=e.createdAt,i=e.updatedAt,r=Object(n.useState)(!1),o=Object(te.a)(r,2),l=o[0],d=o[1],j=function(){d(!1)},u=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(l){var e=u.current;null!==e&&e.focus()}}),[l]),Object(H.jsxs)("div",{children:[Object(H.jsx)(B.a,{onClick:function(){d(!0)},className:"preview-edit-delete-button",style:{position:"absolute",right:"75px"},children:Object(H.jsx)(_.a,{})}),Object(H.jsxs)(ae.a,{open:l,onClose:j,scroll:"paper",fullWidth:!0,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[Object(H.jsx)(ie.a,{className:"title-dialog",children:a}),Object(H.jsx)(ce.a,{dividers:!0,children:Object(H.jsxs)(se.a,{className:"body-dialog",ref:u,tabIndex:-1,component:"div",children:[c,Object(H.jsxs)("div",{className:"created-dialog",children:["Created: ",s,i&&Object(H.jsxs)("span",{className:"updated-dialog",children:["Updated: ",i]})]})]})}),Object(H.jsxs)(ne.a,{children:[Object(H.jsx)(F.b,{to:"/update/".concat(t),children:Object(H.jsx)(B.a,{onClick:j,children:"Modify"})}),Object(H.jsx)(B.a,{onClick:j,children:"Close"})]})]})]})}var Ge=a(301);function Ve(e){var t=e.todoId;return Object(H.jsx)(F.b,{to:"/update/".concat(t),children:Object(H.jsx)(Ge.a,{className:"preview-edit-delete-button",style:{position:"absolute",right:"42px"},children:Object(H.jsx)(V.a,{})})})}function Ke(e){var t=e.todoId,a=e.setOpen,n=Object(E.b)().currentUser.uid,c=function(e){try{fetch("".concat("https://fullstack-todo-backend-misako.herokuapp.com","/delete/").concat(n,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"},mode:"cors"}),console.log("Success")}catch(t){console.log(t)}finally{a(!1)}};return Object(H.jsx)(Ge.a,{onClick:function(){return c(t)},autoFocus:!0,className:"delete-button",children:"Delete"})}function Xe(e){var t=e.todoId,a=e.title,c=Object(n.useState)(!1),s=Object(te.a)(c,2),i=s[0],r=s[1],o=function(){r(!1)};return Object(H.jsxs)("div",{children:[Object(H.jsx)(B.a,{onClick:function(){r(!0)},className:"preview-edit-delete-button",style:{position:"absolute",right:"10px"},children:Object(H.jsx)(X.a,{})}),Object(H.jsxs)(ae.a,{open:i,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(H.jsx)(ie.a,{id:"alert-dialog-title",children:"Confirm delete"}),Object(H.jsx)(ce.a,{children:Object(H.jsxs)(se.a,{id:"alert-dialog-description",children:['Are you sure you want to delete "',a,'"?']})}),Object(H.jsxs)(ne.a,{children:[Object(H.jsx)(B.a,{onClick:o,children:"Cancel"}),Object(H.jsx)(Ke,{todoId:t,setOpen:r})]})]})]})}function He(e){var t=e.title,a=e.body,n=e.createdAt,c=e.updatedAt;return Object(H.jsxs)("div",{children:[Object(H.jsxs)("div",{className:"todo-createdAt",children:["Created: ",n]}),c&&Object(H.jsxs)("div",{className:"todo-updatedAt",children:["Updated: ",c]}),Object(H.jsx)("div",{className:"todo-title",children:t}),Object(H.jsx)("div",{className:"todo-body",children:a})]})}function qe(){var e=Object(k.c)(d);return Object(H.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},children:e.map((function(e,t){return Object(H.jsxs)(z.a,{style:{margin:"10px",padding:"10px 20px",height:"200px",width:"350px",position:"relative"},children:[Object(H.jsx)(_e,{todoId:e.todoId,title:e.title,body:e.body,createdAt:e.createdAt,updatedAt:e.updatedAt}),Object(H.jsx)(Ve,{todoId:e.todoId}),Object(H.jsx)(Xe,{todoId:e.todoId,title:e.title}),Object(H.jsx)(He,{title:e.title,body:e.body,createdAt:e.createdAt,updatedAt:e.updatedAt})]},t)}))})}function Qe(){var e=Object(k.c)(h);if(e)return Object(H.jsx)("div",{children:Object(H.jsx)(z.a,{style:{padding:"40px 40px",height:"auto",position:"relative"},children:Object(H.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"center"},children:[Object(H.jsxs)("div",{children:[Object(H.jsx)(ye.a,{alt:"Avatar",sx:{width:200,height:200},children:"M"}),Object(H.jsx)("div",{style:{textAlign:"center",marginTop:"20px"},children:"Upload picture"})]}),Object(H.jsxs)("div",{style:{marginLeft:"40px"},children:[Object(H.jsxs)("div",{children:["First Name: ",e.firstName]}),Object(H.jsxs)("div",{children:["Last Name: ",e.lastName]}),Object(H.jsxs)("div",{children:["Email: ",e.email]}),Object(H.jsx)("div",{children:"Edit"})]})]})})})}function Ze(){var e=Object(n.useState)(""),t=Object(te.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(te.a)(s,2),r=i[0],o=i[1],l=Object(n.useState)(""),d=Object(te.a)(l,2),j=d[0],u=d[1],b=Object(n.useState)(""),h=Object(te.a)(b,2),x=h[0],O=h[1],p=Object(E.b)().currentUser.uid;console.log(p);var f=Object(Je.a)(8),g=new Date,m=g.getFullYear()+"-"+(g.getMonth()+1)+"-"+g.getDate(),v={userUid:p,todoId:f,title:a,body:r,createdAt:m},y=Object(W.g)();return Object(H.jsx)("div",{children:Object(H.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),""===a&&""===r)u("Please type something"),O("Please type something");else if(""===a)u("Please type something");else if(""===r)O("Please type something");else try{fetch("".concat("https://fullstack-todo-backend-misako.herokuapp.com","/push_data_to_db"),{method:"POST",body:JSON.stringify(v),headers:{"Content-Type":"application/json"},mode:"cors"}),console.log("Success"),c(""),o(""),u(""),O(""),y.push("/dashboard")}catch(t){console.log(t)}},children:[Object(H.jsxs)("div",{className:"title",children:["Title:",Object(H.jsx)("span",{className:"error-message",children:j})]}),Object(H.jsx)("div",{className:"textfield-title",children:Object(H.jsx)(ze.a,{placeholder:"Type here ...",variant:"outlined",multiline:!0,rows:1,name:"letter",style:{width:"100%"},value:a||"",onChange:function(e){return c(e.target.value)}})}),Object(H.jsxs)("div",{className:"body",children:["Body:",Object(H.jsx)("span",{className:"error-message",children:x})]}),Object(H.jsx)("div",{className:"textfield-body",children:Object(H.jsx)(ze.a,{placeholder:"Type here ...",variant:"outlined",multiline:!0,rows:18,name:"letter",style:{width:"100%"},value:r||"",onChange:function(e){return o(e.target.value)}})}),Object(H.jsx)(Fe,{children:"Add"})]})})}function $e(){var e=Object(W.h)().todoId,t=Object(k.c)(d),a=Object(n.useState)(""),c=Object(te.a)(a,2),s=c[0],i=c[1],r=Object(n.useState)(""),o=Object(te.a)(r,2),l=o[0],j=o[1];Object(n.useEffect)((function(){var a=function(){var a=Object(I.a)(A.a.mark((function a(){var n;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.find((function(t){return t.todoId===e}));case 2:(n=a.sent)&&(i(n.title),j(n.body));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();a()}),[t,e]);var u=Object(n.useState)(""),b=Object(te.a)(u,2),h=b[0],x=b[1],O=Object(n.useState)(""),p=Object(te.a)(O,2),f=p[0],g=p[1],m=Object(E.b)().currentUser.uid,v=new Date,y=v.getFullYear()+"-"+(v.getMonth()+1)+"-"+v.getDate(),w={userUid:m,title:s,body:l,updatedAt:y},N=Object(W.g)();return t?Object(H.jsx)("div",{children:Object(H.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(t){if(t.preventDefault(),""===s&&""===l)x("Please type something"),g("Please type something");else if(""===s)x("Please type something"),N.push("/update/".concat(e));else if(""===l)g("Please type something");else try{fetch("".concat("https://fullstack-todo-backend-misako.herokuapp.com","/update/").concat(e),{method:"PUT",body:JSON.stringify(w),headers:{"Content-Type":"application/json"},mode:"cors"})}catch(a){console.log(a)}finally{N.push("/dashboard")}},children:[Object(H.jsxs)("div",{className:"title",children:["Title:",Object(H.jsx)("span",{className:"error-message",children:h})]}),Object(H.jsx)("div",{className:"textfield-title",children:Object(H.jsx)(ze.a,{variant:"outlined",multiline:!0,rows:1,name:"title",style:{width:"100%"},value:s,onChange:function(e){return i(e.target.value)}})}),Object(H.jsxs)("div",{className:"body",children:["Body:",Object(H.jsx)("span",{className:"error-message",children:f})]}),Object(H.jsx)("div",{className:"textfield-body",children:Object(H.jsx)(ze.a,{variant:"outlined",multiline:!0,rows:18,name:"body",style:{width:"100%"},value:l,onChange:function(e){return j(e.target.value)}})}),Object(H.jsx)(Fe,{children:"Update"})]})}):null}var et=function(){return Object(H.jsxs)("div",{style:{textAlign:"center",margin:"100px auto 100px auto",color:"#383838"},children:[Object(H.jsx)("h1",{children:"404 - Not Found :("}),Object(H.jsx)(F.b,{to:"/signin",children:"Go Home"})]})},tt="https://fullstack-todo-backend-misako.herokuapp.com";function at(){Object(L.a)(U);var e=Object(k.b)(),t=Object(E.b)();return Object(n.useEffect)((function(){var a=Object(E.c)(t,function(){var a=Object(I.a)(A.a.mark((function a(n){var c,s,i;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c=null,!n){a.next=22;break}return e(p(!0)),s=n.uid,i={uid:s},console.log("Auth OK, user logged in ".concat(s)),P()(tt).on("newChangesInTodos",(function(t){e(l(t))})),P()(tt).on("newChangesInProfile",(function(t){e(b(t)),e(v(!1)),console.log("Loading OK")})),console.log("Socket opened"),a.prev=11,a.next=14,fetch("".concat(tt,"/catch-user-uid"),{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"},mode:"cors"}).then((function(e){e.json().then((function(e){console.log(e)}))}));case 14:a.next=19;break;case 16:a.prev=16,a.t0=a.catch(11),console.log(a.t0);case 19:n.getIdTokenResult().then((function(e){var a=1e3*e.claims.auth_time,n=36e5-(Date.now()-a);c=setTimeout((function(){return Object(E.e)(t).then((function(){console.log("Session timeout. Sign-out successful.")})).catch((function(e){console.log("Session timeout. Sign-out failed: ".concat(e))}))}),n)})),a.next=26;break;case 22:e(p(!1)),e(v(!1)),clearTimeout(c),c=null;case 26:case"end":return a.stop()}}),a,null,[[11,16]])})));return function(e){return a.apply(this,arguments)}}());return function(){return a((function(){}))}}),[t,e]),Object(H.jsx)("div",{className:"App",children:Object(H.jsx)(F.a,{children:Object(H.jsxs)(W.d,{children:[Object(H.jsx)(Te,{exact:!0,path:"/signup",component:Be}),Object(H.jsx)(Te,{exact:!0,path:"/signin",component:Ye}),Object(H.jsx)(Ae,{exact:!0,path:"/dashboard",component:qe}),Object(H.jsx)(Ae,{exact:!0,path:"/profile",component:Qe}),Object(H.jsx)(Ae,{exact:!0,path:"/create",component:Ze}),Object(H.jsx)(Ae,{exact:!0,path:"/update/:todoId",component:$e}),Object(H.jsx)(W.b,{component:et})]})})})}i.a.render(Object(H.jsx)(c.a.StrictMode,{children:Object(H.jsx)(k.a,{store:C,children:Object(H.jsx)(at,{})})}),document.getElementById("root"))}},[[240,1,2]]]);
//# sourceMappingURL=main.374ec027.chunk.js.map