(this["webpackJsonpreact-port"]=this["webpackJsonpreact-port"]||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},24:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),i=a.n(l),s=(a(23),a(2)),o=a(7),r=(a(24),a(5)),m=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{onClick:function(){e.setSlideUpState("animate-bottom-rev toggleMainBottomHide"),e.setHambugerState("menuBarLeft"),e.setXToggleState("hideit")},className:"fas fa-times xInSlidUp"}),c.a.createElement("div",{className:"flexMe"},c.a.createElement("div",{className:"slideUpLeft"},c.a.createElement("section",null,c.a.createElement("h2",null,"Full Stack Web Developer"),c.a.createElement("p",null,"An experienced old school LAMP developer, and new school MERN developer looking to put their knowledge to work for you. As a more seasoned developer, I have solved problems in many ways over the years. End of the day, I like to get something done. It is just my personality type. I do not do idle well. My main objective is always how much was accomplished, less so how hard I had to work to get it done. I prefer to work smart, but there are times one must work hard.")),c.a.createElement("section",{className:"followMe"},c.a.createElement("h2",null,"Follow me on ..."),c.a.createElement("ul",{className:"iconsSlideUp"},c.a.createElement("li",null,c.a.createElement(r.b,{to:"https://github.com/newbi462"},c.a.createElement("i",{className:"fab fa-github"}))),c.a.createElement("li",null,c.a.createElement(r.b,{to:"https://www.linkedin.com/in/russell-h-bb049256/"},c.a.createElement("i",{className:"fab fa-linkedin"})))))),c.a.createElement("section",{className:"slideUpRight"},c.a.createElement("h2",null,"Get in touch"),c.a.createElement("form",null,c.a.createElement("div",{className:"fields"},c.a.createElement("div",{className:"field half"},c.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),c.a.createElement("div",{className:"field half"},c.a.createElement("input",{type:"text",name:"email",id:"email",placeholder:"Email"})),c.a.createElement("div",{className:"field full"},c.a.createElement("textarea",{name:"message",id:"message",rows:"4",placeholder:"Message"}))),c.a.createElement("div",{className:"actions"},c.a.createElement("input",{type:"submit",value:"Send"}),c.a.createElement("input",{className:"resetButton",type:"reset",value:"Reset"}))))))},u=function(e){var t=Object(n.useState)("hideit"),a=Object(s.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)("menuBarLeft"),u=Object(s.a)(o,2),M=u[0],j=u[1],d=Object(n.useState)("hideit"),N=Object(s.a)(d,2),E=N[0],L=N[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:l},c.a.createElement(m,{setSlideUpState:i,setHambugerState:j,setXToggleState:L})),c.a.createElement("nav",null,c.a.createElement("div",{className:"menuBar"},c.a.createElement("div",{className:M},c.a.createElement("i",{onClick:function(){i("w3-animate-bottom toggleMainBottom"),j("hideit"),L("menuBarLeft")},className:"fas fa-bars"}),c.a.createElement("div",{className:"nameBox",onClick:function(){i("w3-animate-bottom  toggleMainBottom"),j("hideit"),L("menuBarLeft")}},"Russ Hacker")),c.a.createElement("div",{className:E},c.a.createElement("i",{onClick:function(){i("animate-bottom-rev toggleMainBottomHide"),j("menuBarLeft"),L("hideit")},className:"fas fa-times"}),c.a.createElement("div",{className:"nameBox",onClick:function(){i("animate-bottom-rev toggleMainBottomHide"),j("menuBarLeft"),L("hideit")}},"Russ Hacker")),c.a.createElement("div",{className:"menuBarRight"},c.a.createElement(r.b,{to:"https://github.com/newbi462"},c.a.createElement("i",{className:"fab fa-github"})),c.a.createElement(r.b,{to:"https://www.linkedin.com/in/russell-h-bb049256/"},c.a.createElement("i",{className:"fab fa-linkedin"}))))))},M=(a(30),a(31),Object(n.createContext)()),j=function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(s.a)(t,2),l=a[0],i=a[1],o=Object(n.useContext)(M),r=(o.selectedState,o.setSelectedState),m=Object(n.useState)(""),u=Object(s.a)(m,2),j=(u[0],u[1]),d=function(t,a,n){console.log(t),r(t),j(a),i("animate-zoom-rev"),setTimeout((function(){i("hideImportant"),j("locktop"),console.log("I ran"),e.history.push(n)}),599)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tileBox"},c.a.createElement("div",{onClick:function(){return d("react-Selected","","/ReactDemos")},className:"gridBox hover ".concat(l)},c.a.createElement("i",{className:"fab fa-react"}),c.a.createElement("span",null,"React")),c.a.createElement("div",{onClick:function(){return d("html5-Selected","","/HTMLDemos")},className:"gridBox Odd hover ".concat(l)},c.a.createElement("i",{className:"fab fa-html5"}),c.a.createElement("span",null,"HTML5 ")),c.a.createElement("div",{onClick:function(){return d("github-Selected","","/https://github.com/newbi462")},className:"gridBox hover ".concat(l)},c.a.createElement("i",{className:"fab fa-github-square"}),c.a.createElement("span",null,"GitHub")),c.a.createElement("div",{onClick:function(){return d("css3-Selected","","/AboutCSSs")},className:"gridBox Odd hover ".concat(l)},c.a.createElement("i",{className:"fab fa-css3-alt"}),c.a.createElement("span",null,"CSS")),c.a.createElement("div",{onClick:function(){return d("less-Selected","","/AboutCSSs")},className:"gridBox hover ".concat(l)},c.a.createElement("i",{className:"fab fa-less"}),c.a.createElement("span",null,"LESS")),c.a.createElement("div",{onClick:function(){return d("sass-Selected","","/AboutCSSs")},className:"gridBox Odd hover ".concat(l)},c.a.createElement("i",{className:"fab fa-sass"}),c.a.createElement("span",null,"SASS")),c.a.createElement("div",{className:"gridBox ".concat(l)},c.a.createElement("i",{className:"fab fa-js-square"}),c.a.createElement("span",null,"JavaScript")),c.a.createElement("div",{className:"gridBox Odd ".concat(l)},c.a.createElement("i",{className:"fab fa-node"}),c.a.createElement("span",null,"node.js")),c.a.createElement("div",{className:"gridBox ".concat(l)},c.a.createElement("i",{className:"fab fa-php"}),c.a.createElement("span",null,"PHP")),c.a.createElement("div",{className:"gridBox Odd ".concat(l)},c.a.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTQu%0D%0AMDUxIDIuNzUxbDQuOTM1IDIuODVjLjgxNi0uODU5IDIuMTczLS44OTMgMy4wMzItLjA3Ny4xNDgu%0D%0AMTQuMjc0LjMwMS4zNzcuNDc3LjU4OSAxLjAyOC4yMzIgMi4zMzktLjc5NiAyLjkyOC0uMTc0LjEt%0D%0ALjM2MS4xNzUtLjU1OC4yMjN2NS42OTljMS4xNDYuMjczIDEuODU0IDEuNDIzIDEuNTggMi41Njkt%0D%0ALjA0OC4yMDQtLjEyNy40LS4yMzIuNTgxLS41OTIgMS4wMjMtMS45MDEgMS4zNzQtMi45MjcuNzgy%0D%0ALS4xOTYtLjExMy0uMzc1LS4yNTktLjUyNi0uNDI5bC00LjkwNSAyLjgzMmMuMzcyIDEuMTI0LS4y%0D%0AMzggMi4zMzUtMS4zNjEgMi43MDYtLjIxNy4wNzEtLjQ0Mi4xMDgtLjY3LjEwOC0xLjE4MS4wMDEt%0D%0AMi4xMzktLjk1NS0yLjE0LTIuMTM2IDAtLjIwNS4wMjktLjQxLjA4OC0uNjA5bC00LjkzNi0yLjg0%0D%0AN2MtLjgxNi44NTQtMi4xNzEuODg3LTMuMDI2LjA3LS44NTQtLjgxNi0uODg2LTIuMTcxLS4wNy0z%0D%0ALjAyNi4yODMtLjI5Ny42NDYtLjUwNiAxLjA0NC0uNjAzbC4wMDEtNS42OTljLTEuMTUtLjI3Ni0x%0D%0ALjg1OC0xLjQzMy0xLjU4MS0yLjU4NC4wNDctLjE5OC4xMjMtLjM4OS4yMjQtLjU2Ni41OTItMS4w%0D%0AMjQgMS45MDItMS4zNzQgMi45MjctLjc4Mi4xNzcuMTAxLjMzOS4yMjguNDguMzc3bDQuOTM4LTIu%0D%0AODVDOS42MTMgMS42MTIgMTAuMjYuNDIzIDExLjM5LjA4OCAxMS41ODcuMDI5IDExLjc5NCAwIDEy%0D%0AIDBjMS4xODEtLjAwMSAyLjEzOS45NTQgMi4xNCAyLjEzNC4wMDEuMjA5LS4wMy40MTgtLjA4OS42%0D%0AMTd6bS0uNTE1Ljg3N2MtLjAxOS4wMjEtLjAzNy4wMzktLjA1OC4wNThsNi40NjEgMTEuMTljLjAy%0D%0ANi0uMDA5LjA1Ni0uMDE2LjA4Mi0uMDIzVjkuMTQ2Yy0xLjE0NS0uMjgzLTEuODQyLTEuNDQyLTEu%0D%0ANTU4LTIuNTg4LjAwNi0uMDI0LjAxMi0uMDQ5LjAxOS0uMDcybC00Ljk0Ni0yLjg1OHptLTMuMDE1%0D%0ALjA1OWwtLjA2LS4wNi00Ljk0NiAyLjg1MmMuMzI3IDEuMTM1LS4zMjcgMi4zMTgtMS40NjEgMi42%0D%0ANDUtLjAyNi4wMDgtLjA1MS4wMTQtLjA3Ni4wMjF2NS43MDhsLjA4NC4wMjMgNi40NjEtMTEuMTkt%0D%0ALjAwMi4wMDF6bTIuMDc2LjUwN2MtLjM5LjExMi0uODAzLjExMi0xLjE5MiAwbC02LjQ2IDExLjE4%0D%0AOWMuMjk0LjI4My41MDIuNjQ1LjYgMS4wNDFoMTIuOTExYy4wOTctLjM5OC4zMDctLjc2MS42MDMt%0D%0AMS4wNDRMMTIuNTk3IDQuMTk0em0uOTg2IDE2LjIyN2w0LjkxMy0yLjgzOGMtLjAxNS0uMDQ3LS4w%0D%0AMjctLjA5NC0uMDM4LS4xNDJINS41NDJsLS4wMjEuMDgzIDQuOTM5IDIuODUyYy4zODgtLjQwNC45%0D%0AMzQtLjY1MyAxLjU0LS42NTMuNjI3IDAgMS4xOS4yNjkgMS41ODMuNjk4eiIvPjwvc3ZnPg==",alt:"GraphQL"}),c.a.createElement("span",null,"GraphQL")),c.a.createElement("div",{className:"gridBox ".concat(l)},c.a.createElement("i",{className:"fab fa-bootstrap"}),c.a.createElement("span",null,"Bootstrap ReactStrap")),c.a.createElement("div",{className:"gridBox Odd ".concat(l)},c.a.createElement("i",{className:"fab fa-python"}),c.a.createElement("span",null,"Python"))))},d=function(e){var t=Object(n.useContext)(M),a=t.selectedState,l=t.setSelectedState,i=function(t,a,n){console.log(t),l(t),e.setAnimateState("animate-zoom-rev"),console.log(e.animateState),setTimeout((function(){e.history.push(n)}),599)};return console.log("left bar"),console.log(e),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"leftbar ".concat(e.animateState)},c.a.createElement("i",{onClick:function(){return i("home",0,"/")},className:"fas fa-home"}),c.a.createElement("i",{onClick:function(){return i("react-Selected",0,"/ReactDemos")},className:"react-Selected"===a?"fab fa-react w3-spin active":"fab fa-react"}),c.a.createElement("i",{onClick:function(){return i("html5-Selected",0,"/HTMLDemos")},className:"html5-Selected"===a?"fab fa-html5 active":"fab fa-html5"}),c.a.createElement("i",{onClick:function(){return i("github-Selected",0,"/https://github.com/newbi462")},className:"github-Selected"===a?"fab fa-github-square active":"fab fa-github-square"}),c.a.createElement("i",{onClick:function(){return i("css3-Selected",0,"/AboutCSSs")},className:"css3-Selected"===a?"fab fa-css3-alt active":"fab fa-css3-alt"}),c.a.createElement("i",{onClick:function(){return i("less-Selected",0,"/AboutCSSs")},className:"less-Selected"===a?"fab fa-less active":"fab fa-less"}),c.a.createElement("i",{onClick:function(){return i("sass-Selected",0,"/AboutCSSs")},className:"sass-Selected"===a?"fab fa-sass active":"fab fa-sass"}),c.a.createElement("i",{className:"js-Selected"===a?"fab fa-js-square active":"fab fa-js-square"}),c.a.createElement("i",{className:"node-Selected"===a?"fab fa-node active":"fab fa-node"}),c.a.createElement("i",{className:"php-Selected"===a?"fab fa-php active":"fab fa-php"}),c.a.createElement("img",{className:"GraphQL-Selected"===a?"active":"nope",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTQu%0D%0AMDUxIDIuNzUxbDQuOTM1IDIuODVjLjgxNi0uODU5IDIuMTczLS44OTMgMy4wMzItLjA3Ny4xNDgu%0D%0AMTQuMjc0LjMwMS4zNzcuNDc3LjU4OSAxLjAyOC4yMzIgMi4zMzktLjc5NiAyLjkyOC0uMTc0LjEt%0D%0ALjM2MS4xNzUtLjU1OC4yMjN2NS42OTljMS4xNDYuMjczIDEuODU0IDEuNDIzIDEuNTggMi41Njkt%0D%0ALjA0OC4yMDQtLjEyNy40LS4yMzIuNTgxLS41OTIgMS4wMjMtMS45MDEgMS4zNzQtMi45MjcuNzgy%0D%0ALS4xOTYtLjExMy0uMzc1LS4yNTktLjUyNi0uNDI5bC00LjkwNSAyLjgzMmMuMzcyIDEuMTI0LS4y%0D%0AMzggMi4zMzUtMS4zNjEgMi43MDYtLjIxNy4wNzEtLjQ0Mi4xMDgtLjY3LjEwOC0xLjE4MS4wMDEt%0D%0AMi4xMzktLjk1NS0yLjE0LTIuMTM2IDAtLjIwNS4wMjktLjQxLjA4OC0uNjA5bC00LjkzNi0yLjg0%0D%0AN2MtLjgxNi44NTQtMi4xNzEuODg3LTMuMDI2LjA3LS44NTQtLjgxNi0uODg2LTIuMTcxLS4wNy0z%0D%0ALjAyNi4yODMtLjI5Ny42NDYtLjUwNiAxLjA0NC0uNjAzbC4wMDEtNS42OTljLTEuMTUtLjI3Ni0x%0D%0ALjg1OC0xLjQzMy0xLjU4MS0yLjU4NC4wNDctLjE5OC4xMjMtLjM4OS4yMjQtLjU2Ni41OTItMS4w%0D%0AMjQgMS45MDItMS4zNzQgMi45MjctLjc4Mi4xNzcuMTAxLjMzOS4yMjguNDguMzc3bDQuOTM4LTIu%0D%0AODVDOS42MTMgMS42MTIgMTAuMjYuNDIzIDExLjM5LjA4OCAxMS41ODcuMDI5IDExLjc5NCAwIDEy%0D%0AIDBjMS4xODEtLjAwMSAyLjEzOS45NTQgMi4xNCAyLjEzNC4wMDEuMjA5LS4wMy40MTgtLjA4OS42%0D%0AMTd6bS0uNTE1Ljg3N2MtLjAxOS4wMjEtLjAzNy4wMzktLjA1OC4wNThsNi40NjEgMTEuMTljLjAy%0D%0ANi0uMDA5LjA1Ni0uMDE2LjA4Mi0uMDIzVjkuMTQ2Yy0xLjE0NS0uMjgzLTEuODQyLTEuNDQyLTEu%0D%0ANTU4LTIuNTg4LjAwNi0uMDI0LjAxMi0uMDQ5LjAxOS0uMDcybC00Ljk0Ni0yLjg1OHptLTMuMDE1%0D%0ALjA1OWwtLjA2LS4wNi00Ljk0NiAyLjg1MmMuMzI3IDEuMTM1LS4zMjcgMi4zMTgtMS40NjEgMi42%0D%0ANDUtLjAyNi4wMDgtLjA1MS4wMTQtLjA3Ni4wMjF2NS43MDhsLjA4NC4wMjMgNi40NjEtMTEuMTkt%0D%0ALjAwMi4wMDF6bTIuMDc2LjUwN2MtLjM5LjExMi0uODAzLjExMi0xLjE5MiAwbC02LjQ2IDExLjE4%0D%0AOWMuMjk0LjI4My41MDIuNjQ1LjYgMS4wNDFoMTIuOTExYy4wOTctLjM5OC4zMDctLjc2MS42MDMt%0D%0AMS4wNDRMMTIuNTk3IDQuMTk0em0uOTg2IDE2LjIyN2w0LjkxMy0yLjgzOGMtLjAxNS0uMDQ3LS4w%0D%0AMjctLjA5NC0uMDM4LS4xNDJINS41NDJsLS4wMjEuMDgzIDQuOTM5IDIuODUyYy4zODgtLjQwNC45%0D%0AMzQtLjY1MyAxLjU0LS42NTMuNjI3IDAgMS4xOS4yNjkgMS41ODMuNjk4eiIvPjwvc3ZnPg==",alt:"GraphQL"}),c.a.createElement("i",{className:"bootstrap-Selected"===a?"fab fa-bootstrap active":"fab fa-bootstrap"}),c.a.createElement("i",{className:"python-Selected"===a?"fab fa-python active":"fab fa-python"})))},N=function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(s.a)(t,2),l=a[0],i=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,Object.assign({},e,{animateState:l,setAnimateState:i})),c.a.createElement("div",{className:"reactBox"},c.a.createElement("div",{className:"make23box ".concat(l)},c.a.createElement("h2",null,c.a.createElement("a",{href:"https://stage.missionctrl.dev/"},"Mission Control")),c.a.createElement("p",null,"Programs management solution to at a glance know: program, product, and project status."),c.a.createElement("p",null,"React | SASS | JavaScript | PostgreSQL | AWS | GraphQL | Prism | Apollo | Docker | OKTA"),c.a.createElement("ul",{className:"a"},c.a.createElement("li",null,"Worked over 8 weeks to expand the features in a set of 3 remote cross functional teams composed of 18+"),c.a.createElement("li",null,"Created a user role system making the need  schema and resolvers for GraphQL, Prism, and Apollo"),c.a.createElement("li",null,"Helped set standards for best practices regarding continued development of the project")),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/Lambda-School-Labs/mission-control-be"},"Backend Source")),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/Lambda-School-Labs/mission-control-fe"},"Frontend Source"))),c.a.createElement("div",{className:"make23box-img ".concat(l)},c.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/Toggle.png",alt:"Mission Control"})),c.a.createElement("div",{className:"make23box-img ".concat(l)},c.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/nanny-in-a-flash-app.png",alt:"Nanny in a Flash App"})),c.a.createElement("div",{className:"make23box ".concat(l)},c.a.createElement("h2",null,c.a.createElement("a",{href:"https://nanny-scheduler-fe.anthonykizer88.now.sh/"},"Nanny in a Flash App")),c.a.createElement("p",null,"Helps a busy parent, select a nanny based on availability, location, or what services they can offer"),c.a.createElement("p",null,"React | SASS | axios | Yup | FORMIK"),c.a.createElement("ul",null,c.a.createElement("li",null,"Worked over the course of a week to provide a front end React app with a team of 5 other developers"),c.a.createElement("li",null,"Used React and SASS to create a matching app with needed user profile functionality")),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/Build-Week-Nanny-Scheduler/nanny-scheduler-FE"},"App Source Code"))),c.a.createElement("div",{className:"make23box ".concat(l)},c.a.createElement("h2",null,c.a.createElement("a",{href:"https://compassionate-lamarr-da90b8.netlify.app/"},"Lambdi Pet")),c.a.createElement("p",null,"A digital pet that changes based on how a child chooses to eat."),c.a.createElement("p",null,"ContextAPI | axios | SASS | reactstrap | Formik | Yup | styled-components | recharts | React"),c.a.createElement("ul",null,c.a.createElement("li",null,"Over the course of one week, coordinated creating an app front end with an international team of 6"),c.a.createElement("li",null,"Mentored 3 more Jr Developers, while providing needed coordination with BE Dev and international member")),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/Build-Week-Gigapet1/FE"},"Source Code"))),c.a.createElement("div",{className:"make23box-img ".concat(l)},c.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/l-pet.png",alt:"Lambdi Pet"}))))},E=function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(s.a)(t,2),l=a[0],i=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,Object.assign({},e,{animateState:l,setAnimateState:i})),c.a.createElement("div",{className:"HTMLBox"},c.a.createElement("div",{className:"make23box-img ".concat(l)},c.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/junk-car.png",alt:"Junk car"})),c.a.createElement("div",{className:"make23box-img ".concat(l)},c.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/mob-sites.png",alt:"Nanny in a Flash App"})),c.a.createElement("div",{className:"make23box-img ".concat(l)},c.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/l-pet.png",alt:"Lambdi Pet"})),c.a.createElement("div",{className:"make23box-img ".concat(l)},c.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/cr-intl-desktop.png",alt:"Cr-Intl"}))))},L=function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(s.a)(t,2),l=a[0],i=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,Object.assign({},e,{animateState:l,setAnimateState:i})),c.a.createElement("div",{className:"CSScBox"},c.a.createElement("div",{className:"make23box-img ".concat(l)},c.a.createElement("i",{className:"fab fa-css3-alt"})),c.a.createElement("div",{className:"make23box ".concat(l)},c.a.createElement("h2",null,"CSS | CSS3 | Sass | Less"),c.a.createElement("p",null,"These all are a set of very closely related solutions that make use of CSS (Cascading Style Sheets) to style the look and feel of the end result HTML Mark up regardless of how it is rendered. But while related it is best to think of them like a set of wrenches or ratchets. At times you need metric and at times you need inches. The right tool for the job as it were.")),c.a.createElement("div",{className:"make23box ".concat(l)},c.a.createElement("p",null,"CSS, and it more modern version CSS3, is the standard or guideline agreed to, but not all browsers interpret this standard the same. And, while CSS3 was a marked improvement to CSS in the same way HTML5 added much to HTML, even today not all browsers fully support this. This is something worth considering when it comes to accessibility, particularly when it comes to compliance with the ADA and other disability laws."),c.a.createElement("p",null,"A true, cross-platform cross-browser solution is about also complying with the arbitrary variations on the guideline to achieve matching results whenever possible.")),c.a.createElement("div",{className:"make23box-img ".concat(l)},c.a.createElement("i",{className:"fab fa-sass"})),c.a.createElement("div",{className:"make23box-img ".concat(l)},c.a.createElement("i",{className:"fab fa-less"})),c.a.createElement("div",{className:"make23box ".concat(l)},c.a.createElement("p",null,"SASS and LESS are competing standards for automating some of the CSS creation using a complied approach, which brings us back to inches Vs metric. The syntax differences between them are minor, to the point that most experienced developers can pick the other one up from the documentation alone. However, they are not interchangeable. Because they are competing standards some other tools such as React simply play nicer with one standard over the other. It is best for this reason when using either that you pick the one that integrates well with the rest of your stack."),c.a.createElement("p",null,"Fortunately, I have experance with all of them and am comfortable using all of them."))))};var g=function(){var e=Object(n.useState)("test42a"),t=Object(s.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(M.Provider,{value:{selectedState:a,setSelectedState:l}},c.a.createElement(u,null),c.a.createElement(o.a,{exact:!0,path:"/",component:j}),c.a.createElement(o.a,{path:"/ReactDemos",component:N}),c.a.createElement(o.a,{path:"/HTMLDemos",component:E}),c.a.createElement(o.a,{path:"/AboutCSSs",component:L}),c.a.createElement(o.a,{path:"/https://github.com/newbi462",component:function(){return window.location.href="https://github.com/newbi462",null}}),c.a.createElement(o.a,{path:"/https://www.linkedin.com/in/russell-h-bb049256/",component:function(){return window.location.href="https://www.linkedin.com/in/russell-h-bb049256/",null}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(r.a,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ad1ac8ac.chunk.js.map