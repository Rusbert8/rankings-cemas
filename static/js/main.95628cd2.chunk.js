(this["webpackJsonpranking-cemas"]=this["webpackJsonpranking-cemas"]||[]).push([[0],{27:function(e,n,c){},28:function(e,n,c){"use strict";c.r(n);var t=c(4),a=c.n(t),r=c(17),s=c.n(r),i=c(7);var o=function(e){var n=Object(t.useState)(!0),c=Object(i.a)(n,2),a=c[0],r=c[1],s=Object(t.useState)(!0),o=Object(i.a)(s,2),l=o[0],u=o[1];return Object(t.useEffect)((function(){return e.onAuthStateChanged((function(e){u(e||!1),a&&r(!1)}))}),[e,a]),{user:l,initializing:a}},l=c(12);c(22),c(29);l.a.initializeApp({apiKey:"AIzaSyB_WMkXgz1VGadOYztJs7OY30aSEZTuGIg",authDomain:"rankings-cemas.firebaseapp.com",projectId:"rankings-cemas",storageBucket:"rankings-cemas.appspot.com",messagingSenderId:"193263297303",appId:"1:193263297303:web:f285432a75d975d8944d52",measurementId:"G-V17NRJM8LM"});l.a.firestore();var u=new l.a.auth.GoogleAuthProvider,d=c(10),j=c.n(d),b=c(13),h=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.a.auth().useDeviceLanguage(),e.prev=1,e.next=4,l.a.auth().signInWithPopup(u);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),O=c(1),p=function(e){var n=e.onClick,c=void 0===n?null:n,t=e.children,a=void 0===t?null:t;return Object(O.jsx)("div",{className:"container_center",children:Object(O.jsxs)("button",{className:"log_in",onClick:c,children:[" ",a," "]})})},x=c(11),g=function(e){var n=e.estudiante,c=Object(t.useState)("");Object(i.a)(c,1)[0];return Object(O.jsxs)("article",{children:[Object(O.jsxs)("h3",{className:"nombre",children:[n.nombre_estudiante," ",Object(O.jsx)("span",{className:"numero",children:n.numero_estudiante})]}),Object(O.jsxs)("div",{className:"datos",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:"Asignaturas :"})," ",n.asignaturas.map((function(e){return Object(O.jsxs)("span",{children:[e.codigo_asignatura," "]})}))]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:"M\xf3dulos :"})," ",n.modulos.map((function(e){return Object(O.jsxs)("span",{children:[e.codigo_asignatura," "]})}))]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:"Promedio Ac\xe1demico :"})," ","".concat(n.idx_academico)]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:"Promedio T\xe9cnico :"})," ","".concat(n.idx_tecnico)]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:"Promedio General :"})," ","".concat(n.idx_general)]})]})]})},f=function(e){var n=0,c=0;return e?(e.forEach((function(e,t){n+=parseFloat(e.cf),c=t})),n/(c+1)):0},v=function(e,n){return e&&n?(n+e)/2:e&&!n?e:0},N=function(e,n){var c=0,t=0;switch(n[0]){case"4":case"5":return e.forEach((function(e,n){c+=parseFloat(e.acumulado),t=n})),c/(t+1);case"6":return e.forEach((function(e,n){if("MF0000_FCT"===e.codigo_asignatura){var a=100*parseFloat(e.acumulado)/e.total;c+=a}else c+=parseFloat(e.acumulado);t=n})),c/(t+1);default:return null}};function _(e){var n=e.url;console.log("Lista Boletines URL: ",n);var c=function(e){var n=Object(t.useRef)(!0),c=Object(t.useState)({data:null,loading:!0,error:null}),a=Object(i.a)(c,2),r=a[0],s=a[1];return Object(t.useEffect)((function(){return function(){n.current=!1}}),[]),Object(t.useEffect)((function(){s({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){n.current&&s({loading:!1,error:null,data:e})})).catch((function(){s({data:null,loading:!1,error:"No se pudo cargar la info"})}))}),[e]),r}(n),a=c.data,r=c.loading,s=c.error;if(r&&n)return Object(O.jsx)("h1",{className:"load",children:"Loading.."});if(s)return console.log(s),Object(O.jsx)("h3",{children:s});console.log("Datos: ",a);var o=function(e){return e.sort((function(e,n){return e.idx_general<n.idx_general?1:e.idx_general>n.idx_general?-1:0}))}(a.data.filter((function(e){return e.asignaturas.length>2})).map((function(e){var n=f(e.asignaturas),c=N(null===e||void 0===e?void 0:e.modulos,null===e||void 0===e?void 0:e.curso),t=v(n,c),a=e.curso,r=e.periodo;return console.log("Print.. Curso, Periodo:"+a,r),Object(x.a)(Object(x.a)({},e),{},{idx_academico:n,idx_tecnico:c,idx_general:t,curso:a,periodo:r})})));return Object(O.jsxs)("main",{children:[Object(O.jsxs)("h2",{children:["Lista de boletines de los estudiantes de ",Object(O.jsxs)("span",{className:"grado",children:[o[0].curso," ("]}),Object(O.jsx)("span",{children:o[0].periodo}),Object(O.jsx)("span",{children:")"}),":"]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"list-group",children:o.map((function(e){return Object(O.jsx)(g,{estudiante:e},e._id)}))})]})}var k=function(e,n){var c="/boletin/".concat(e,":").concat(n,":");return"".concat("https://cemasapi.herokuapp.com").concat("/reportes").concat(encodeURI(c))},C=c(14);function w(e){var n=e.handleUrl,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(t.useState)(e),c=Object(i.a)(n,2),a=c[0],r=c[1];return[a,function(e){var n=e.target;r(Object(x.a)(Object(x.a)({},a),{},Object(C.a)({},n.name,n.value)))},function(){r(e)}]}({curso:"",periodo:""}),a=Object(i.a)(c,3),r=a[0],s=a[1],o=a[2],l=r.curso,u=r.periodo;return Object(O.jsx)("nav",{children:Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.info("Form Values: ",l,u);var c=k(l,u);console.info("URL: ",c),n(c),o()},children:Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsxs)("label",{className:"col-md-3 col-sm-6",children:[Object(O.jsx)("span",{children:"Curso"}),Object(O.jsx)("input",{type:"text",className:"curso",placeholder:"6D",required:!0,name:"curso",value:l,onChange:s})]}),Object(O.jsxs)("label",{className:"col-md-3 col-sm-6",children:[Object(O.jsx)("span",{children:"Periodo"}),Object(O.jsx)("input",{type:"text",className:"periodo",placeholder:"2020-2021",required:!0,name:"periodo",value:u,onChange:s})]}),Object(O.jsxs)("label",{className:"col-md-4 col-sm-6",children:[Object(O.jsx)("span",{children:"Ordenar"}),Object(O.jsxs)("select",{id:"filter",className:"dropdown",children:[Object(O.jsx)("option",{value:"num-lista",selected:!0,children:"N\xfamero (Defecto)"}),Object(O.jsx)("option",{value:"idx-academico",children:"Indice Acad\xe9mico"}),Object(O.jsx)("option",{value:"idx-tecnico",children:"Indice T\xe9cnico"}),Object(O.jsx)("option",{value:"idx-general",children:"Indice General"})]})]}),Object(O.jsx)("div",{className:"container-button col-md-2 col-sm-6",children:Object(O.jsx)("button",{className:"buscar",type:"submit",children:"Buscar"})})]})})})}var S=function(e){var n=e.onClick,c=void 0===n?null:n,t=e.children,a=void 0===t?null:t;return Object(O.jsxs)("button",{className:"log_out",onClick:c,children:[" ",a," "]})},I=function(){return Object(O.jsx)("div",{className:"menu container-fluid",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("header",{className:"col-lg-12",children:[Object(O.jsxs)("div",{className:"cemas",children:[Object(O.jsx)("img",{className:"logo",src:"https://i.imgur.com/KT8UtmZ.png",alt:""}),Object(O.jsx)("h1",{className:"title",children:"Ranking Cemas"})]}),Object(O.jsx)(S,{onClick:m,children:" Salir "})]})})})};var F=function(){var e=Object(t.useState)(null),n=Object(i.a)(e,2),c=n[0],a=n[1];console.log(c);var r=o(l.a.auth()),s=r.user,u=r.itializing;return Object(O.jsxs)("div",{children:[function(){if(u)return Object(O.jsx)("div",{children:Object(O.jsx)("h3",{children:"Loading..."})})}(),s?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(I,{}),Object(O.jsxs)("div",{className:"container",id:"ranking",children:[Object(O.jsx)(w,{handleUrl:function(e){a(e)}}),c&&Object(O.jsx)(_,{url:c})]})]}):Object(O.jsxs)(p,{onClick:h,children:[Object(O.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png",alt:""}),"Sign in with Google"]})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;c(e),t(e),a(e),r(e),s(e)}))};c(27);s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),L()}},[[28,1,2]]]);
//# sourceMappingURL=main.95628cd2.chunk.js.map