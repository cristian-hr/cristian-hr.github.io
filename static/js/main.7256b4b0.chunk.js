(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(18),i=a.n(n),o=(a(25),a(26),a(27),a(0));var r=function(){return Object(o.jsx)("div",{className:"about"})},l=a(3),p=a(6),b=a(7),m=a(19),h=a.n(m),j=a(20),u=a.n(j);a(57);var d=function(){var e={name:"",email:"",message:""},t=Object(s.useState)(e),a=Object(b.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)(!1),r=Object(b.a)(i,2),m=r[0],j=r[1];function d(e){"email"===e.target.name&&j(!1),n(Object(p.a)(Object(p.a)({},c),{},Object(l.a)({},e.target.name,e.target.value)))}function f(t){var a;t.preventDefault(),a=c.email,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())?h.a.fire({title:"Submited!",icon:"success",confirmButtonColor:"#353535"}).then((function(){return u.a.post("".concat("https://us-central1-devportfolio-8fb10.cloudfunctions.net/portfolio_back","/sendemail"),{name:c.name,email:c.email,message:c.message})})).then((function(t){console.log(t.data),n(e)})).catch((function(e){console.error(e)})):j(!0)}return Object(o.jsxs)("div",{className:"contact",children:[Object(o.jsx)("span",{className:"titleContact",children:"Contact"}),Object(o.jsxs)("form",{action:"",onSubmit:f,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Name "}),Object(o.jsx)("input",{type:"text",name:"name",value:c.name,onChange:d,required:!0})]}),Object(o.jsxs)("div",{className:"divEmailContact",children:[Object(o.jsx)("span",{children:"Email "}),Object(o.jsx)("input",{type:"text",name:"email",value:c.email,onChange:d,required:!0}),Object(o.jsx)("span",{className:m?"validEmailAlert":"validEmailAlertHide",children:"Insert a valid email"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Message "}),Object(o.jsx)("textarea",{type:"text",name:"message",value:c.message,onChange:d,required:!0})]}),Object(o.jsx)("input",{className:"submitContact",type:"submit",value:"Submit",onSubmit:f})]})]})};a(58);var f=function(){return Object(o.jsx)("div",{className:"home"})};a(59);var g=function(e){return Object(o.jsxs)("div",{className:"navBar",children:[Object(o.jsx)("span",{className:"buttonNavBar",onClick:function(){return e.executeScroll(e.homeRef)},children:"Home"}),Object(o.jsx)("span",{className:"barNB",children:"|"}),Object(o.jsx)("span",{className:"buttonNavBar",onClick:function(){return e.executeScroll(e.projectsRef)},children:"Projects"}),Object(o.jsx)("span",{className:"barNB",children:"|"}),Object(o.jsx)("span",{className:"buttonNavBar",onClick:function(){return e.executeScroll(e.aboutRef)},children:"About"}),Object(o.jsx)("span",{className:"barNB",children:"|"}),Object(o.jsx)("span",{className:"buttonNavBar",onClick:function(){return e.executeScroll(e.contactRef)},children:"Contact"})]})};a(60);var v=function(){return Object(o.jsxs)("div",{className:"projects",children:[Object(o.jsx)("span",{className:"titleProjects",children:"Projects"}),Object(o.jsx)("div",{className:"contProjects",children:[{name:"Henry games",image:"https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/henrygames.jpg?alt=media&token=3ce9e560-597a-4d67-91bb-0e284f6347e4",desc:"Henry Games is a videgames gallery that uses the rawg api. Also have an option to create a videgame that is saved in a database.",link:"https://henry-games.vercel.app",github:"https://github.com/cristian-hr/VideogamesAPP"},{name:"Digital Art",image:"https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/digitalart.jpg?alt=media&token=0da462ba-f37b-48c6-8fe9-3c37092a1dc3",desc:"Digital Art is an e-commerse built from scratch using React, Redux, Express and Sequelize. It has authentication with Firebase and Google, two factor authentication with Authy, emails services with Sendgrid and payments methods with Paypal and Stripe.",link:"https://digitalart-front.vercel.app",github:"https://github.com/cristian-hr/Digital-Art-Ecommerce"},{name:"PostApp",image:"https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/postapp.jpg?alt=media&token=8d9ab899-7eae-41a0-a1ce-4c53c913b966",desc:"PostApp is a simple app that allows you to make a post, search for post and see all the post.",link:"https://post-app-front.vercel.app",github:"https://github.com/cristian-hr/PostAPP"},{name:"ChronoApp",image:"https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/chronoapp.jpg?alt=media&token=bfb35c42-73bb-4c54-b5ec-d8322bbf10dc",desc:"ChronoApp is a stopwatch app that allows you to records a time and also show all the times saved in the database. The project has unitary tests in the front-end and in the back-end. Also it has full Docker implementation.",link:" ",github:"https://github.com/cristian-hr/ChronoAPP"},{name:"ParkingLots App",image:"https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/parkinglotsapp.jpg?alt=media&token=521ab115-e601-42c9-9768-ea9923062229",desc:"ParkingLots App is a searching app that looks for parking lots in the city that the user look for",link:"https://parking-lots-app.vercel.app/",github:"https://github.com/cristian-hr/ParkingLotsAPP"}].map((function(e,t){return Object(o.jsxs)("div",{className:"cardsProject",children:[Object(o.jsx)("span",{className:"nameProject",children:e.name}),Object(o.jsx)("img",{src:e.image,alt:""}),Object(o.jsx)("span",{className:"descProject",children:e.desc}),Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{href:e.link,children:"Link"}),Object(o.jsx)("a",{href:e.github,children:"Github"})]})]})}))})]})};var x=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),a=Object(s.useRef)(null),c=Object(s.useRef)(null);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(g,{homeRef:t,projectsRef:a,aboutRef:c,contactRef:e,executeScroll:function(e){return e.current.scrollIntoView()}}),Object(o.jsx)("div",{ref:t,children:Object(o.jsx)(f,{})}),Object(o.jsx)("div",{ref:a,children:Object(o.jsx)(v,{})}),Object(o.jsx)("div",{ref:c,children:Object(o.jsx)(r,{})}),Object(o.jsx)("div",{ref:e,children:Object(o.jsx)(d,{})})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),O()}},[[61,1,2]]]);
//# sourceMappingURL=main.7256b4b0.chunk.js.map