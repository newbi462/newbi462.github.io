(this["webpackJsonpreact-port"]=this["webpackJsonpreact-port"]||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),o=a.n(c),i=(a(38),a(2)),s=a(9),r=(a(39),Object(n.createContext)());var m=Object(s.e)((function(e){var t=e.history,a=e.children,c=Object(n.useContext)(r),o=c.selectedState;return c.setSelectedState,Object(n.useEffect)((function(){console.log("use effect ran");var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[o]),l.a.createElement(n.Fragment,null,a)})),u=a(29),d=a(8),M=a(15),h=a(32),j=a.n(h);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var E=function(e){var t=Object(n.useState)({name:"",email:"",reason:"",message:""}),a=Object(i.a)(t,2),c=a[0],o=a[1],s=function(e){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){Object(M.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c,Object(M.a)({},e.target.name,e.target.value)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{onClick:function(){e.setSlideUpState("animate-bottom-rev toggleMainBottomHide"),e.setHambugerState("menuBarLeft"),e.setXToggleState("hideit")},className:"fas fa-times xInSlidUp"}),l.a.createElement("div",{className:"flexMe"},l.a.createElement("div",{className:"slideUpLeft"},l.a.createElement("section",null,l.a.createElement("h2",null,"Full Stack Web Developer"),l.a.createElement("p",null,"An experienced old school LAMP developer, and new school MERN developer looking to put their knowledge to work for you. As a more seasoned developer, I have solved problems in many ways over the years."),l.a.createElement("p",null,"End of the day, I like to get something done. It is just my personality type. I do not do idle well. My main objective is always how much was accomplished, less so how hard I had to work to get it done. I prefer to work smart, but there are times one must work hard.")),l.a.createElement("section",{className:"followMe"},l.a.createElement("h2",null,"Follow me on ..."),l.a.createElement("ul",{className:"iconsSlideUp"},l.a.createElement("li",null,l.a.createElement("i",{onClick:function(){return window.open("https://github.com/newbi462","_blank"),null},className:"fab fa-github"})),l.a.createElement("li",null,l.a.createElement("i",{onClick:function(){return window.open("https://www.linkedin.com/in/russell-h-bb049256/","_blank"),null},className:"fab fa-linkedin"}))))),l.a.createElement("section",{className:"slideUpRight"},l.a.createElement("h2",null,"Get in touch"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j.a.post("https://cors-anywhere.herokuapp.com/http://theshowthatsux.com/testcode/test.php",c).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"fields"},l.a.createElement("div",{className:"field half"},l.a.createElement("input",{type:"text",name:"name",value:c.name,placeholder:"Name",onChange:s})),l.a.createElement("div",{className:"field half"},l.a.createElement("input",{type:"text",name:"email",value:c.email,placeholder:"Email",onChange:s})),l.a.createElement("div",{className:"field full"},l.a.createElement("textarea",{name:"message",rows:"4",value:c.message,placeholder:"Message",onChange:s}))),l.a.createElement("div",{className:"actions"},l.a.createElement("input",{type:"submit",value:"Send"}),l.a.createElement("input",{className:"resetButton",type:"reset",value:"Reset"}))))))},g=function(e){var t=Object(n.useState)("hideit"),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)("menuBarLeft"),m=Object(i.a)(s,2),u=m[0],M=m[1],h=Object(n.useState)("hideit"),j=Object(i.a)(h,2),N=j[0],g=j[1],L=Object(n.useContext)(r),S=(L.selectedState,L.setSelectedState);return console.log(e),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:c},l.a.createElement(E,{setSlideUpState:o,setHambugerState:M,setXToggleState:g})),l.a.createElement("nav",null,l.a.createElement("div",{className:"menuBar"},l.a.createElement("div",{className:u},l.a.createElement("i",{onClick:function(){o("w3-animate-bottom toggleMainBottom"),M("hideit"),g("menuBarLeft")},className:"fas fa-bars"}),l.a.createElement("div",{className:"nameBox",onClick:function(){o("w3-animate-bottom  toggleMainBottom"),M("hideit"),g("menuBarLeft")}},"Russ Hacker"),l.a.createElement("div",{onClick:function(){return t="react-Selected",console.log(t),S(t),console.log(e.animateState),void setTimeout((function(){}),599);var t},className:"nameBox"},l.a.createElement(d.b,{to:"/ReactDemos"},"Recent Apps"))),l.a.createElement("div",{className:N},l.a.createElement("i",{onClick:function(){o("animate-bottom-rev toggleMainBottomHide"),M("menuBarLeft"),g("hideit")},className:"fas fa-times"}),l.a.createElement("div",{className:"nameBox",onClick:function(){o("animate-bottom-rev toggleMainBottomHide"),M("menuBarLeft"),g("hideit")}},"Russ Hacker")),l.a.createElement("div",{className:"menuBarRight"},l.a.createElement("i",{onClick:function(){return window.open("https://github.com/newbi462","_blank"),null},className:"fab fa-github"}),l.a.createElement("i",{onClick:function(){return window.open("https://www.linkedin.com/in/russell-h-bb049256/","_blank"),null},className:"fab fa-linkedin"}),l.a.createElement(d.b,{className:"mob-only",to:"/"},l.a.createElement("i",{className:"fas fa-home mob-only"}))))))},L=(a(61),a(62),function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useContext)(r),m=(s.selectedState,s.setSelectedState),u=Object(n.useState)(""),d=Object(i.a)(u,2),M=(d[0],d[1]),h=function(t,a,n){console.log(t),m(t),M(a),o("animate-zoom-rev"),setTimeout((function(){o("hideImportant"),M("locktop"),console.log("I ran"),e.history.push(n)}),599)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"tileBox"},l.a.createElement("div",{onClick:function(){return h("react-Selected","","/ReactDemos")},className:"gridBox hover ".concat(c)},l.a.createElement("i",{className:"fab fa-react"}),l.a.createElement("span",null,"React")),l.a.createElement("div",{onClick:function(){return h("html5-Selected","","/HTMLDemos")},className:"gridBox Odd hover ".concat(c)},l.a.createElement("i",{className:"fab fa-html5"}),l.a.createElement("span",null,"HTML5 ")),l.a.createElement("div",{onClick:function(){return h("github-Selected","","/https://github.com/newbi462")},className:"gridBox hover ".concat(c)},l.a.createElement("i",{className:"fab fa-github-square"}),l.a.createElement("span",null,"GitHub")),l.a.createElement("div",{onClick:function(){return h("css3-Selected","","/AboutCSSs")},className:"gridBox Odd hover ".concat(c)},l.a.createElement("i",{className:"fab fa-css3-alt"}),l.a.createElement("span",null,"CSS")),l.a.createElement("div",{onClick:function(){return h("less-Selected","","/AboutCSSs")},className:"gridBox hover ".concat(c)},l.a.createElement("i",{className:"fab fa-less"}),l.a.createElement("span",null,"LESS")),l.a.createElement("div",{onClick:function(){return h("sass-Selected","","/AboutCSSs")},className:"gridBox Odd hover ".concat(c)},l.a.createElement("i",{className:"fab fa-sass"}),l.a.createElement("span",null,"SASS")),l.a.createElement("div",{onClick:function(){return h("js-Selected","","/AboutJSandNODE")},className:"gridBox hover ".concat(c)},l.a.createElement("i",{className:"fab fa-js-square"}),l.a.createElement("span",null,"JavaScript")),l.a.createElement("div",{onClick:function(){return h("node-Selected","","/AboutJSandNODE")},className:"gridBox Odd hover ".concat(c)},l.a.createElement("i",{className:"fab fa-node"}),l.a.createElement("span",null,"node.js")),l.a.createElement("div",{onClick:function(){return h("php-Selected","","/AboutPHP")},className:"gridBox hover ".concat(c)},l.a.createElement("i",{className:"fab fa-php"}),l.a.createElement("span",null,"PHP")),l.a.createElement("div",{onClick:function(){return h("GraphQL-Selected","","/AboutGraphQL")},className:"gridBox Odd hover ".concat(c)},l.a.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTQu%0D%0AMDUxIDIuNzUxbDQuOTM1IDIuODVjLjgxNi0uODU5IDIuMTczLS44OTMgMy4wMzItLjA3Ny4xNDgu%0D%0AMTQuMjc0LjMwMS4zNzcuNDc3LjU4OSAxLjAyOC4yMzIgMi4zMzktLjc5NiAyLjkyOC0uMTc0LjEt%0D%0ALjM2MS4xNzUtLjU1OC4yMjN2NS42OTljMS4xNDYuMjczIDEuODU0IDEuNDIzIDEuNTggMi41Njkt%0D%0ALjA0OC4yMDQtLjEyNy40LS4yMzIuNTgxLS41OTIgMS4wMjMtMS45MDEgMS4zNzQtMi45MjcuNzgy%0D%0ALS4xOTYtLjExMy0uMzc1LS4yNTktLjUyNi0uNDI5bC00LjkwNSAyLjgzMmMuMzcyIDEuMTI0LS4y%0D%0AMzggMi4zMzUtMS4zNjEgMi43MDYtLjIxNy4wNzEtLjQ0Mi4xMDgtLjY3LjEwOC0xLjE4MS4wMDEt%0D%0AMi4xMzktLjk1NS0yLjE0LTIuMTM2IDAtLjIwNS4wMjktLjQxLjA4OC0uNjA5bC00LjkzNi0yLjg0%0D%0AN2MtLjgxNi44NTQtMi4xNzEuODg3LTMuMDI2LjA3LS44NTQtLjgxNi0uODg2LTIuMTcxLS4wNy0z%0D%0ALjAyNi4yODMtLjI5Ny42NDYtLjUwNiAxLjA0NC0uNjAzbC4wMDEtNS42OTljLTEuMTUtLjI3Ni0x%0D%0ALjg1OC0xLjQzMy0xLjU4MS0yLjU4NC4wNDctLjE5OC4xMjMtLjM4OS4yMjQtLjU2Ni41OTItMS4w%0D%0AMjQgMS45MDItMS4zNzQgMi45MjctLjc4Mi4xNzcuMTAxLjMzOS4yMjguNDguMzc3bDQuOTM4LTIu%0D%0AODVDOS42MTMgMS42MTIgMTAuMjYuNDIzIDExLjM5LjA4OCAxMS41ODcuMDI5IDExLjc5NCAwIDEy%0D%0AIDBjMS4xODEtLjAwMSAyLjEzOS45NTQgMi4xNCAyLjEzNC4wMDEuMjA5LS4wMy40MTgtLjA4OS42%0D%0AMTd6bS0uNTE1Ljg3N2MtLjAxOS4wMjEtLjAzNy4wMzktLjA1OC4wNThsNi40NjEgMTEuMTljLjAy%0D%0ANi0uMDA5LjA1Ni0uMDE2LjA4Mi0uMDIzVjkuMTQ2Yy0xLjE0NS0uMjgzLTEuODQyLTEuNDQyLTEu%0D%0ANTU4LTIuNTg4LjAwNi0uMDI0LjAxMi0uMDQ5LjAxOS0uMDcybC00Ljk0Ni0yLjg1OHptLTMuMDE1%0D%0ALjA1OWwtLjA2LS4wNi00Ljk0NiAyLjg1MmMuMzI3IDEuMTM1LS4zMjcgMi4zMTgtMS40NjEgMi42%0D%0ANDUtLjAyNi4wMDgtLjA1MS4wMTQtLjA3Ni4wMjF2NS43MDhsLjA4NC4wMjMgNi40NjEtMTEuMTkt%0D%0ALjAwMi4wMDF6bTIuMDc2LjUwN2MtLjM5LjExMi0uODAzLjExMi0xLjE5MiAwbC02LjQ2IDExLjE4%0D%0AOWMuMjk0LjI4My41MDIuNjQ1LjYgMS4wNDFoMTIuOTExYy4wOTctLjM5OC4zMDctLjc2MS42MDMt%0D%0AMS4wNDRMMTIuNTk3IDQuMTk0em0uOTg2IDE2LjIyN2w0LjkxMy0yLjgzOGMtLjAxNS0uMDQ3LS4w%0D%0AMjctLjA5NC0uMDM4LS4xNDJINS41NDJsLS4wMjEuMDgzIDQuOTM5IDIuODUyYy4zODgtLjQwNC45%0D%0AMzQtLjY1MyAxLjU0LS42NTMuNjI3IDAgMS4xOS4yNjkgMS41ODMuNjk4eiIvPjwvc3ZnPg==",alt:"GraphQL"}),l.a.createElement("span",null,"GraphQL")),l.a.createElement("div",{className:"gridBox ".concat(c)},l.a.createElement("i",{className:"fab fa-bootstrap"}),l.a.createElement("span",null,"Bootstrap ReactStrap")),l.a.createElement("div",{className:"gridBox Odd ".concat(c)},l.a.createElement("i",{className:"fab fa-python"}),l.a.createElement("span",null,"Python"))))}),S=function(e){var t=Object(n.useContext)(r),a=t.selectedState,c=t.setSelectedState,o=function(t,a,n){console.log(t),c(t),e.setAnimateState("animate-zoom-rev"),console.log(e.animateState),setTimeout((function(){e.history.push(n)}),599)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"leftbar ".concat(e.animateState)},l.a.createElement("i",{onClick:function(){return o("home",0,"/")},className:"fas fa-home"}),l.a.createElement("i",{onClick:function(){return o("react-Selected",0,"/ReactDemos")},className:"react-Selected"===a?"fab fa-react w3-spin active":"fab fa-react"}),l.a.createElement("i",{onClick:function(){return o("html5-Selected",0,"/HTMLDemos")},className:"html5-Selected"===a?"fab fa-html5 active":"fab fa-html5"}),l.a.createElement("i",{onClick:function(){return window.open("https://github.com/newbi462","_blank"),null},className:"github-Selected"===a?"fab fa-github-square active":"fab fa-github-square"}),l.a.createElement("i",{onClick:function(){return o("css3-Selected",0,"/AboutCSSs")},className:"css3-Selected"===a||"less-Selected"===a||"sass-Selected"===a?"fab fa-css3-alt active":"fab fa-css3-alt"}),l.a.createElement("i",{onClick:function(){return o("less-Selected",0,"/AboutCSSs")},className:"css3-Selected"===a||"less-Selected"===a||"sass-Selected"===a?"fab fa-less active":"fab fa-less"}),l.a.createElement("i",{onClick:function(){return o("sass-Selected",0,"/AboutCSSs")},className:"css3-Selected"===a||"less-Selected"===a||"sass-Selected"===a?"fab fa-sass active":"fab fa-sass"}),l.a.createElement("i",{onClick:function(){return o("js-Selected",0,"/AboutJSandNODE")},className:"js-Selected"===a||"node-Selected"===a?"fab fa-js-square active":"fab fa-js-square"}),l.a.createElement("i",{onClick:function(){return o("node-Selected",0,"/AboutJSandNODE")},className:"js-Selected"===a||"node-Selected"===a?"fab fa-node active":"fab fa-node"}),l.a.createElement("i",{onClick:function(){return o("php-Selected",0,"/AboutPHP")},className:"php-Selected"===a?"fab fa-php active":"fab fa-php"}),l.a.createElement("img",{onClick:function(){return o("GraphQL-Selected",0,"/AboutGraphQL")},className:"GraphQL-Selected"===a?"active":"nope",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTQu%0D%0AMDUxIDIuNzUxbDQuOTM1IDIuODVjLjgxNi0uODU5IDIuMTczLS44OTMgMy4wMzItLjA3Ny4xNDgu%0D%0AMTQuMjc0LjMwMS4zNzcuNDc3LjU4OSAxLjAyOC4yMzIgMi4zMzktLjc5NiAyLjkyOC0uMTc0LjEt%0D%0ALjM2MS4xNzUtLjU1OC4yMjN2NS42OTljMS4xNDYuMjczIDEuODU0IDEuNDIzIDEuNTggMi41Njkt%0D%0ALjA0OC4yMDQtLjEyNy40LS4yMzIuNTgxLS41OTIgMS4wMjMtMS45MDEgMS4zNzQtMi45MjcuNzgy%0D%0ALS4xOTYtLjExMy0uMzc1LS4yNTktLjUyNi0uNDI5bC00LjkwNSAyLjgzMmMuMzcyIDEuMTI0LS4y%0D%0AMzggMi4zMzUtMS4zNjEgMi43MDYtLjIxNy4wNzEtLjQ0Mi4xMDgtLjY3LjEwOC0xLjE4MS4wMDEt%0D%0AMi4xMzktLjk1NS0yLjE0LTIuMTM2IDAtLjIwNS4wMjktLjQxLjA4OC0uNjA5bC00LjkzNi0yLjg0%0D%0AN2MtLjgxNi44NTQtMi4xNzEuODg3LTMuMDI2LjA3LS44NTQtLjgxNi0uODg2LTIuMTcxLS4wNy0z%0D%0ALjAyNi4yODMtLjI5Ny42NDYtLjUwNiAxLjA0NC0uNjAzbC4wMDEtNS42OTljLTEuMTUtLjI3Ni0x%0D%0ALjg1OC0xLjQzMy0xLjU4MS0yLjU4NC4wNDctLjE5OC4xMjMtLjM4OS4yMjQtLjU2Ni41OTItMS4w%0D%0AMjQgMS45MDItMS4zNzQgMi45MjctLjc4Mi4xNzcuMTAxLjMzOS4yMjguNDguMzc3bDQuOTM4LTIu%0D%0AODVDOS42MTMgMS42MTIgMTAuMjYuNDIzIDExLjM5LjA4OCAxMS41ODcuMDI5IDExLjc5NCAwIDEy%0D%0AIDBjMS4xODEtLjAwMSAyLjEzOS45NTQgMi4xNCAyLjEzNC4wMDEuMjA5LS4wMy40MTgtLjA4OS42%0D%0AMTd6bS0uNTE1Ljg3N2MtLjAxOS4wMjEtLjAzNy4wMzktLjA1OC4wNThsNi40NjEgMTEuMTljLjAy%0D%0ANi0uMDA5LjA1Ni0uMDE2LjA4Mi0uMDIzVjkuMTQ2Yy0xLjE0NS0uMjgzLTEuODQyLTEuNDQyLTEu%0D%0ANTU4LTIuNTg4LjAwNi0uMDI0LjAxMi0uMDQ5LjAxOS0uMDcybC00Ljk0Ni0yLjg1OHptLTMuMDE1%0D%0ALjA1OWwtLjA2LS4wNi00Ljk0NiAyLjg1MmMuMzI3IDEuMTM1LS4zMjcgMi4zMTgtMS40NjEgMi42%0D%0ANDUtLjAyNi4wMDgtLjA1MS4wMTQtLjA3Ni4wMjF2NS43MDhsLjA4NC4wMjMgNi40NjEtMTEuMTkt%0D%0ALjAwMi4wMDF6bTIuMDc2LjUwN2MtLjM5LjExMi0uODAzLjExMi0xLjE5MiAwbC02LjQ2IDExLjE4%0D%0AOWMuMjk0LjI4My41MDIuNjQ1LjYgMS4wNDFoMTIuOTExYy4wOTctLjM5OC4zMDctLjc2MS42MDMt%0D%0AMS4wNDRMMTIuNTk3IDQuMTk0em0uOTg2IDE2LjIyN2w0LjkxMy0yLjgzOGMtLjAxNS0uMDQ3LS4w%0D%0AMjctLjA5NC0uMDM4LS4xNDJINS41NDJsLS4wMjEuMDgzIDQuOTM5IDIuODUyYy4zODgtLjQwNC45%0D%0AMzQtLjY1MyAxLjU0LS42NTMuNjI3IDAgMS4xOS4yNjkgMS41ODMuNjk4eiIvPjwvc3ZnPg==",alt:"GraphQL"}),l.a.createElement("i",{className:"bootstrap-Selected"===a?"fab fa-bootstrap active":"fab fa-bootstrap"}),l.a.createElement("i",{className:"python-Selected"===a?"fab fa-python active":"fab fa-python"})))},p=function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(i.a)(t,2),c=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,Object.assign({},e,{animateState:c,setAnimateState:o})),l.a.createElement("div",{className:"reactBox"},l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("h2",null,l.a.createElement("a",{href:"https://stage.missionctrl.dev/"},"Mission Control")),l.a.createElement("p",null,"Programs management solution to at a glance know: program, product, and project status."),l.a.createElement("p",null,"React | SASS | JavaScript | PostgreSQL | AWS | GraphQL | Prism | Apollo | Docker | OKTA"),l.a.createElement("ul",{className:"a"},l.a.createElement("li",null,"Worked over 8 weeks to expand the features, in a set of 3 remote cross functional teams, composed of 18+ members"),l.a.createElement("li",null,"Created a user role system making the needed schema and resolvers for GraphQL, Prism, and Apollo"),l.a.createElement("li",null,"Helped set standards for best practices regarding continued development of the project")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/Lambda-School-Labs/mission-control-be"},"Backend Source")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/Lambda-School-Labs/mission-control-fe"},"Frontend Source"))),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/Toggle.png",alt:"Mission Control"})),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/nanny-in-a-flash-app.png",alt:"Nanny in a Flash App"})),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("h2",null,l.a.createElement("a",{href:"https://nanny-scheduler-fe.anthonykizer88.now.sh/"},"Nanny in a Flash App")),l.a.createElement("p",null,"Helps a busy parent select a nanny based on availability, location, or what services they can offer"),l.a.createElement("p",null,"React | SASS | axios | Yup | FORMIK"),l.a.createElement("ul",null,l.a.createElement("li",null,"Worked over the course of a week to provide a front end React app with a team of 5 other developers"),l.a.createElement("li",null,"Used React and SASS to create a matching app with needed user profile functionality")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/Build-Week-Nanny-Scheduler/nanny-scheduler-FE"},"App Source Code"))),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("h2",null,l.a.createElement("a",{href:"https://compassionate-lamarr-da90b8.netlify.app/"},"Lambdi Pet")),l.a.createElement("p",null,"A digital pet that changes based on how a child chooses to eat."),l.a.createElement("p",null,"ContextAPI | axios | SASS | reactstrap | Formik | Yup | styled-components | recharts | React"),l.a.createElement("ul",null,l.a.createElement("li",null,"Over the course of one week, developed an app front end with an international team of 6"),l.a.createElement("li",null,"Mentored 3 more Jr Developers, while providing needed coordination with Back-End Dev and international member")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/Build-Week-Gigapet1/FE"},"Source Code"))),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/l-pet.png",alt:"Lambdi Pet"}))))},b=function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(i.a)(t,2),c=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,Object.assign({},e,{animateState:c,setAnimateState:o})),l.a.createElement("div",{className:"HTMLBox"},l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/junk-car.png",alt:"Junk car"})),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/mob-sites.png",alt:"Nanny in a Flash App"})),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/l-pet.png",alt:"Lambdi Pet"})),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("img",{src:"https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/cr-intl-desktop.png",alt:"Cr-Intl"}))))},f=function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(i.a)(t,2),c=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,Object.assign({},e,{animateState:c,setAnimateState:o})),l.a.createElement("div",{className:"CSScBox"},l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fab fa-css3-alt"})),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("h2",null,"CSS | CSS3 | Sass | Less"),l.a.createElement("p",null,"These all are a set of very closely related solutions that make use of CSS (Cascading Style Sheets) to style the look and feel of the end resulting HTML mark up regardless of how it is rendered. But, while related, it is best to think of them as a set of wrenches or ratchets. At times you need metric and at times you need inches. The right tool for the job as it were.")),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("p",null,"CSS, and it more modern version CSS3, is the standard or guideline agreed to, but not all browsers interpret this standard the same. And, while CSS3 was a marked improvement to CSS in the same way HTML5 added much to HTML, even today not all browsers fully support this. This is something worth considering when it comes to accessibility, particularly when it comes to compliance with the ADA and other disability laws."),l.a.createElement("p",null,"A true, cross-platform cross-browser solution is about also complying with the arbitrary variations on the guideline to achieve matching results whenever possible.")),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fab fa-sass"})),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fab fa-less"})),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("p",null,"SASS and LESS are competing standards for automating some of the CSS creation using a complied approach, which brings us back to inches Vs metric. The syntax differences between them are minor, to the point that most experienced developers can pick the other one up from the documentation alone. However, they are not interchangeable. Because they are competing standards some other tools such as React simply play nicer with one standard over the other. It is best for this reason when using either that you pick the one that integrates well with the rest of your stack."),l.a.createElement("p",null,"Fortunately, I have experience with all of them and am comfortable using all of them."))))},w=function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(i.a)(t,2),c=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,Object.assign({},e,{animateState:c,setAnimateState:o})),l.a.createElement("div",{className:"CSScBox"},l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("h2",null,"JS Vs NODE Vs NODE.js VS NodeJS"),l.a.createElement("p",null,"As of late, JavaScript has become a bit of a swiss army knife for code, which is both good and bad. Overall the skill sets are very comparable for an experienced developer. Node or NodeJS, as Node and NodeJS are the same thing. This allows back-end code to be written using JavaScript Functions. So the only real difference in practice is are you making functions to handle front-end or back-end logic.")),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fab fa-js-square"})),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fab fa-node"})),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("p",null,"Because Node is using JavaScript on the back-end side while the skillsets are comparable they are not 1:1. The logic of a Node Express Knex SQL server is a little different than a JS or React Axios Frontend. But at the end of the day, both are just JS Functions executing the logic the code needs to run."),l.a.createElement("p",null,"In short, most competent NODE developers should also be competent JavaScript developers, but not all JavaScript developers would be good NodeJS developers.")),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("p",null,"JavaScript libraries and frameworks such as React, Angular, and Vue are a complementary skill set, but also a different animal altogether. Because these tools are based on JavaScript, the more seasoned a developer is with JavaScript the more they can do with a tool like React. A more experienced developer is able to better manipulate the tools of state management and the like with JS Helper Functions. Some of which were used to allow this site to do some of the things it does, while a less skilled developer would be limited to the libraries available to them for the platform used."),l.a.createElement("p",null,"Fortunately, I am skilled in all three areas as a developer. So in my case, JS is a true swiss army knife for me when working as a developer on a stack that makes use of it.")),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fab fa-react w3-spin"}))))},D=function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(i.a)(t,2),c=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,Object.assign({},e,{animateState:c,setAnimateState:o})),l.a.createElement("div",{className:"CSScBox"},l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fab fa-php"})),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("h2",null,"PHP, is it still relevant?"),l.a.createElement("p",null,"In the case of TL;DR, the answer is Yes; but with a qualifier of PHP can be overused today in place of more modern tools that do the job PHP is being used for better."),l.a.createElement("p",null,"From a technology POV, this comes down to the legacy of Server-Side Vs Client-Side from the late 90s to the early 2000s. At the time both PHP and JS meant dynamic web sites. But for most at the time, JavaScript was seen as the tool for animations, while PHP was seen as the way to dynamically handle content, given that the path and content from the client POV needed to be persistent for things like SEO.")),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("p",null,"The advantage PHP offered was it was Server-Side; so from an end-client or user POV the HTML it rendered was as if you had a static HTML site with that content. However, this took place at the cost of server-side resources for every dynamic render. This became a problem as the internet grew almost exponentially causing servers to slow down. But at the time it was the best practice to do it all on the back-end because the front-end could not handle this routing well, if at all."),l.a.createElement("p",null,"However, today that is not the case.")),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fas fa-server"})),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fas fa-laptop-code"})),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("p",null,"Today we have Client-Side-Routing that can be as SEO friendly as Server-Side-Routing while being cleaner for the end-user than ASP.NET could have dreamed to be. To put it in scale, a site like this site in the early 2000s would have needed to be PHP, today it is a React Full Page App. The benefit is every time you click you use your system or browser's resources, not the server hosting this site beyond the first main call, or when you use the contact form to have a server call make an email."),l.a.createElement("p",null,"Yes, because the email form passes a JSON instead of a PHP POST, I needed to change the logic of how the PHP Script handles the post a little, but that brings me back to PHP being overused. Today PHP, NodeJS, and Python are pretty much interchangeable when it comes to the backend. In some cases, one may be a better overall match for the particular stack used; and if you have the technical debt of one was used due to legacy the cost to switch can exceed the benefits. What should be avoided is forcing things to run on the server that do not need to; which can be tempting for more seasoned PHP developers who have been doing PHP since the 90s and may not have updated their understanding of what modern JS can do. Instead code things just like they did 10+ years ago."),l.a.createElement("p",null,"Fortunately, I am a Full Stack Developer familiar with both LAMP and MERN, and more importantly how to use the best of both to work well with each other."))))},y=function(e){var t=Object(n.useState)("w3-animate-zoom"),a=Object(i.a)(t,2),c=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,Object.assign({},e,{animateState:c,setAnimateState:o})),l.a.createElement("div",{className:"CSScBox"},l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("h2",null,"GraphQL Vs REST, or RESTful API"),l.a.createElement("p",null,"GraphQL is likely the future of APIs in some form, but it is also overall a more new technology which has some pros and cons to it. Like REST is more a guideline than a hard-fast standard. But it does handle CRUD and end-points a little different."),l.a.createElement("p",null,"The main benefit of GraphQL is the one endpoint can in theory handle all of the CRUD/REST sets, so when done right it is less overall development, or work.")),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTQu%0D%0AMDUxIDIuNzUxbDQuOTM1IDIuODVjLjgxNi0uODU5IDIuMTczLS44OTMgMy4wMzItLjA3Ny4xNDgu%0D%0AMTQuMjc0LjMwMS4zNzcuNDc3LjU4OSAxLjAyOC4yMzIgMi4zMzktLjc5NiAyLjkyOC0uMTc0LjEt%0D%0ALjM2MS4xNzUtLjU1OC4yMjN2NS42OTljMS4xNDYuMjczIDEuODU0IDEuNDIzIDEuNTggMi41Njkt%0D%0ALjA0OC4yMDQtLjEyNy40LS4yMzIuNTgxLS41OTIgMS4wMjMtMS45MDEgMS4zNzQtMi45MjcuNzgy%0D%0ALS4xOTYtLjExMy0uMzc1LS4yNTktLjUyNi0uNDI5bC00LjkwNSAyLjgzMmMuMzcyIDEuMTI0LS4y%0D%0AMzggMi4zMzUtMS4zNjEgMi43MDYtLjIxNy4wNzEtLjQ0Mi4xMDgtLjY3LjEwOC0xLjE4MS4wMDEt%0D%0AMi4xMzktLjk1NS0yLjE0LTIuMTM2IDAtLjIwNS4wMjktLjQxLjA4OC0uNjA5bC00LjkzNi0yLjg0%0D%0AN2MtLjgxNi44NTQtMi4xNzEuODg3LTMuMDI2LjA3LS44NTQtLjgxNi0uODg2LTIuMTcxLS4wNy0z%0D%0ALjAyNi4yODMtLjI5Ny42NDYtLjUwNiAxLjA0NC0uNjAzbC4wMDEtNS42OTljLTEuMTUtLjI3Ni0x%0D%0ALjg1OC0xLjQzMy0xLjU4MS0yLjU4NC4wNDctLjE5OC4xMjMtLjM4OS4yMjQtLjU2Ni41OTItMS4w%0D%0AMjQgMS45MDItMS4zNzQgMi45MjctLjc4Mi4xNzcuMTAxLjMzOS4yMjguNDguMzc3bDQuOTM4LTIu%0D%0AODVDOS42MTMgMS42MTIgMTAuMjYuNDIzIDExLjM5LjA4OCAxMS41ODcuMDI5IDExLjc5NCAwIDEy%0D%0AIDBjMS4xODEtLjAwMSAyLjEzOS45NTQgMi4xNCAyLjEzNC4wMDEuMjA5LS4wMy40MTgtLjA4OS42%0D%0AMTd6bS0uNTE1Ljg3N2MtLjAxOS4wMjEtLjAzNy4wMzktLjA1OC4wNThsNi40NjEgMTEuMTljLjAy%0D%0ANi0uMDA5LjA1Ni0uMDE2LjA4Mi0uMDIzVjkuMTQ2Yy0xLjE0NS0uMjgzLTEuODQyLTEuNDQyLTEu%0D%0ANTU4LTIuNTg4LjAwNi0uMDI0LjAxMi0uMDQ5LjAxOS0uMDcybC00Ljk0Ni0yLjg1OHptLTMuMDE1%0D%0ALjA1OWwtLjA2LS4wNi00Ljk0NiAyLjg1MmMuMzI3IDEuMTM1LS4zMjcgMi4zMTgtMS40NjEgMi42%0D%0ANDUtLjAyNi4wMDgtLjA1MS4wMTQtLjA3Ni4wMjF2NS43MDhsLjA4NC4wMjMgNi40NjEtMTEuMTkt%0D%0ALjAwMi4wMDF6bTIuMDc2LjUwN2MtLjM5LjExMi0uODAzLjExMi0xLjE5MiAwbC02LjQ2IDExLjE4%0D%0AOWMuMjk0LjI4My41MDIuNjQ1LjYgMS4wNDFoMTIuOTExYy4wOTctLjM5OC4zMDctLjc2MS42MDMt%0D%0AMS4wNDRMMTIuNTk3IDQuMTk0em0uOTg2IDE2LjIyN2w0LjkxMy0yLjgzOGMtLjAxNS0uMDQ3LS4w%0D%0AMjctLjA5NC0uMDM4LS4xNDJINS41NDJsLS4wMjEuMDgzIDQuOTM5IDIuODUyYy4zODgtLjQwNC45%0D%0AMzQtLjY1MyAxLjU0LS42NTMuNjI3IDAgMS4xOS4yNjkgMS41ODMuNjk4eiIvPjwvc3ZnPg==",alt:"GraphQL"})),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fas fa-server"})),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("p",null,"The debate at this time is in practice only simple data calls self resolve. So in practice, how scalable a GraphQL API is will come down to how well thought out the schema and data relations were."),l.a.createElement("p",null,"Solutions like Prisma and RedwoodJS use the schema and the relationships defined in it to generate a full set of CRUD endpoints, rather needed or not. This can create extra work that is unneeded in a RESTful approach to address relationships for data sets that will never be used or needed. Aside from this 0% to done, bottleneck, not all data is self-resolve. More complex calls to the data set require a resolver function that will call the related CRUD sets made from the schema to create the target output for the end-user."),l.a.createElement("p",null,"In practice, the overall logic of a resolver, while different in implementation details, is the JOIN and CRUD logic some RESTful APIs require. But, it should be noted in some cases it can actually take more work to maintain a GraphQL API than a RESTful API, which seems a paradox given that the main selling point of this new standard is more maintainability.")),l.a.createElement("div",{className:"make23box ".concat(c)},l.a.createElement("p",null,"However, from the Front-End POV regardless of if GraphQL is more or less work than REST to set up and maintain, the experience is night and day."),l.a.createElement("p",null,"Properly set up and resolved, the resulting GraphQL endpoint is one API to rule them all. Dynamically allowing any call to query any data that could be received in an end form the front-end accessing it seeks as if it was tailor-made for their implementation of this API. There are likely very few long term projects where the long term savings of bandwidth, from not returning unneeded data, would not justify any extra upfront work or investment GraphQL would need."),l.a.createElement("p",null,"But at this time it is a developing technology, and the developer pool is smaller. I am privileged to have experience in what is likely long term the next standard for APIs, but at this time it is very much a pro-con if now is the time to switch your individual API over.")),l.a.createElement("div",{className:"make23box-img ".concat(c)},l.a.createElement("i",{className:"fas fa-laptop-code"}))))};var A=function(){var e=Object(n.useState)("test42a"),t=Object(i.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement(u.a,null,l.a.createElement("title",null,"Russ Hacker")),l.a.createElement("header",{className:"App-header"},l.a.createElement(r.Provider,{value:{selectedState:a,setSelectedState:c}},l.a.createElement(m,null,l.a.createElement(g,null),l.a.createElement(s.a,{exact:!0,path:"/",component:L}),l.a.createElement(s.a,{path:"/ReactDemos",component:p}),l.a.createElement(s.a,{path:"/HTMLDemos",component:b}),l.a.createElement(s.a,{path:"/AboutCSSs",component:f}),l.a.createElement(s.a,{path:"/AboutJSandNODE",component:w}),l.a.createElement(s.a,{path:"/AboutPHP",component:D}),l.a.createElement(s.a,{path:"/AboutGraphQL",component:y}),l.a.createElement(s.a,{path:"/https://github.com/newbi462",component:function(){return window.open("https://github.com/newbi462","_blank"),null}}),l.a.createElement(s.a,{path:"/https://www.linkedin.com/in/russell-h-bb049256/",component:function(){return window.location.href="https://www.linkedin.com/in/russell-h-bb049256/",null}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(d.a,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.472f1e8b.chunk.js.map