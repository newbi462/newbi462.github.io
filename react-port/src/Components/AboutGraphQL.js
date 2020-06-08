import React, { useState} from "react";

//Tools and Hooks

//Style

//Components
import { LeftBar } from "./NavBar/LeftBar.js";

//Coontext/STATE


export const AboutGraphQL = (props) => {
  const [animateState, setAnimateState] = useState("w3-animate-zoom");


  return (
    <>
    <LeftBar {...props} animateState={animateState} setAnimateState={setAnimateState}/>

    <div className="CSScBox">
      <div className={`make23box ${animateState}`}>
        <h2>GraphQL Vs REST, or RESTful API</h2>
        <p>GraphQL is likely the future of APIs in some form, but it is also overall a more new technology which has some pros and cons to it. Like REST is is more a guideline than a hard-fast standard. But it does handle CRUD and End-Points a little different.</p>
        <p>The main benefit of GraphQL is the one endpoint can in theory handle all of the CRUD/REST sets, so when done right it is less overall development.</p>
      </div>
      <div className={`make23box-img ${animateState}`}>
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTQu%0D%0AMDUxIDIuNzUxbDQuOTM1IDIuODVjLjgxNi0uODU5IDIuMTczLS44OTMgMy4wMzItLjA3Ny4xNDgu%0D%0AMTQuMjc0LjMwMS4zNzcuNDc3LjU4OSAxLjAyOC4yMzIgMi4zMzktLjc5NiAyLjkyOC0uMTc0LjEt%0D%0ALjM2MS4xNzUtLjU1OC4yMjN2NS42OTljMS4xNDYuMjczIDEuODU0IDEuNDIzIDEuNTggMi41Njkt%0D%0ALjA0OC4yMDQtLjEyNy40LS4yMzIuNTgxLS41OTIgMS4wMjMtMS45MDEgMS4zNzQtMi45MjcuNzgy%0D%0ALS4xOTYtLjExMy0uMzc1LS4yNTktLjUyNi0uNDI5bC00LjkwNSAyLjgzMmMuMzcyIDEuMTI0LS4y%0D%0AMzggMi4zMzUtMS4zNjEgMi43MDYtLjIxNy4wNzEtLjQ0Mi4xMDgtLjY3LjEwOC0xLjE4MS4wMDEt%0D%0AMi4xMzktLjk1NS0yLjE0LTIuMTM2IDAtLjIwNS4wMjktLjQxLjA4OC0uNjA5bC00LjkzNi0yLjg0%0D%0AN2MtLjgxNi44NTQtMi4xNzEuODg3LTMuMDI2LjA3LS44NTQtLjgxNi0uODg2LTIuMTcxLS4wNy0z%0D%0ALjAyNi4yODMtLjI5Ny42NDYtLjUwNiAxLjA0NC0uNjAzbC4wMDEtNS42OTljLTEuMTUtLjI3Ni0x%0D%0ALjg1OC0xLjQzMy0xLjU4MS0yLjU4NC4wNDctLjE5OC4xMjMtLjM4OS4yMjQtLjU2Ni41OTItMS4w%0D%0AMjQgMS45MDItMS4zNzQgMi45MjctLjc4Mi4xNzcuMTAxLjMzOS4yMjguNDguMzc3bDQuOTM4LTIu%0D%0AODVDOS42MTMgMS42MTIgMTAuMjYuNDIzIDExLjM5LjA4OCAxMS41ODcuMDI5IDExLjc5NCAwIDEy%0D%0AIDBjMS4xODEtLjAwMSAyLjEzOS45NTQgMi4xNCAyLjEzNC4wMDEuMjA5LS4wMy40MTgtLjA4OS42%0D%0AMTd6bS0uNTE1Ljg3N2MtLjAxOS4wMjEtLjAzNy4wMzktLjA1OC4wNThsNi40NjEgMTEuMTljLjAy%0D%0ANi0uMDA5LjA1Ni0uMDE2LjA4Mi0uMDIzVjkuMTQ2Yy0xLjE0NS0uMjgzLTEuODQyLTEuNDQyLTEu%0D%0ANTU4LTIuNTg4LjAwNi0uMDI0LjAxMi0uMDQ5LjAxOS0uMDcybC00Ljk0Ni0yLjg1OHptLTMuMDE1%0D%0ALjA1OWwtLjA2LS4wNi00Ljk0NiAyLjg1MmMuMzI3IDEuMTM1LS4zMjcgMi4zMTgtMS40NjEgMi42%0D%0ANDUtLjAyNi4wMDgtLjA1MS4wMTQtLjA3Ni4wMjF2NS43MDhsLjA4NC4wMjMgNi40NjEtMTEuMTkt%0D%0ALjAwMi4wMDF6bTIuMDc2LjUwN2MtLjM5LjExMi0uODAzLjExMi0xLjE5MiAwbC02LjQ2IDExLjE4%0D%0AOWMuMjk0LjI4My41MDIuNjQ1LjYgMS4wNDFoMTIuOTExYy4wOTctLjM5OC4zMDctLjc2MS42MDMt%0D%0AMS4wNDRMMTIuNTk3IDQuMTk0em0uOTg2IDE2LjIyN2w0LjkxMy0yLjgzOGMtLjAxNS0uMDQ3LS4w%0D%0AMjctLjA5NC0uMDM4LS4xNDJINS41NDJsLS4wMjEuMDgzIDQuOTM5IDIuODUyYy4zODgtLjQwNC45%0D%0AMzQtLjY1MyAxLjU0LS42NTMuNjI3IDAgMS4xOS4yNjkgMS41ODMuNjk4eiIvPjwvc3ZnPg=="
          alt="GraphQL"
         />
      </div>

      <div className={`make23box-img ${animateState}`}>
        <i className="fas fa-server"></i>
      </div>
      <div className={`make23box ${animateState}`}>
        <p>The debate at this time is in practice only simple data calls self resolve. So in practice how scalable a GraphQL API is will come down to how well thought out the schema and data relations were.</p>
        <p>Solutions like Prisma and RedwoodJS use the schema and the relationships defined in it to generate a full set of CRUD endpoints, rather needed or not. This can create extra work that is unneeded in a RESTful approach to address relationships for data sets that will never be used or needed. Aside from this 0% to Done, bottleneck, not all data is self resolve. More complex calls to the data set require a resolver function that will call the related CRUD sets made from the schema to create the target output for the end-user.</p>
        <p>In practice, the overall logic of a resolver while different in implementation details is the JOIN and CRUD logic some RESTful APIs require. But, it should be noted in some cases it can actually take more work to maintain a GraphQL API than a RESTful API; which seems a paradox given that the main selling point of this new standard is more maintainability.</p>
      </div>


      <div className={`make23box ${animateState}`}>
        <p>However, from the Front-End POV regardless of if GraphQL is more or less work than REST to set up and maintain the experience is night and day.</p>
        <p>Properly set up and resolved, the resulting GraphQL endpoint is one API to rule them all. Dynamically allowing any call to query any data that could be received in the end form the Frontend using it wants it in as if it was tailor-made for their implementation of this API. There are likely very few long term projects where the long term savings of bandwidth from not returning unneeded data would not justify any extra upfront work or investment GraphQL would need.</p>
        <p>But at this time it is a developing technology, and the developer pool is smaller. I am privileged to have experience in what is likely long term the next standard for APIs, but at this time it is very much a pro-con if now is the time to switch your individual API over.</p>
      </div>
      <div className={`make23box-img ${animateState}`}>
        <i className="fas fa-laptop-code"></i>
      </div>
    </div>
    </>
  );
};
