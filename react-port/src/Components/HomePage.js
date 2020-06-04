import React, { useState, useContext } from "react";

//Tools and Hooks

//Style
// npm install --save-dev @iconify/react @iconify/icons-logos
import { Icon, InlineIcon } from '@iconify/react';
import graphqlIcon from '@iconify/icons-logos/graphql';
//not using right now as filer is hard code hack

//Components

//Coontext/STATE
import { ContextBox } from "./../Context/ContextBox";


export const HomePage = (props) => {
  const [animateState, setAnimateState] = useState("w3-animate-zoom");
  //const [selectedState, setSelectedState] = useState("test42a");
  const { selectedState, setSelectedState } = useContext(ContextBox);
  const [shiftedState, setShiftedState] = useState("");
  //console.log(selectedState);

  let whenClicked = (clicked, shift, route) => {
    console.log(clicked);
    setSelectedState(clicked);
    setShiftedState(shift);
    setAnimateState("animate-zoom-rev");
    //props.history.push("/React-Demos");
    setTimeout(() => {
      setAnimateState("hideImportant");
      setShiftedState("locktop");
      console.log("I ran");
      props.history.push(route);
    }, 599);
  };

  return (
    <>
    <div className="tileBox">
      <div
        onClick={() => whenClicked("react-Selected", "", "/ReactDemos")}
        className={
          (selectedState != "react-Selected")// != for difrent effect
            ? `gridBox hover ${animateState}`
            : `gridBox hover ${animateState}`
            //: `gridBox ${selectedState} ${shiftedState}`
        }
      >
        <i className="fab fa-react"></i>
        <span>React</span>
      </div>
      <div
        onClick={() => whenClicked("html5-Selected", "html5-shift")}
        className={
          (selectedState != "html5-Selected")
            ? `gridBox Odd ${animateState}`
            : `gridBox Odd ${selectedState} ${shiftedState}`
        }
      >
        <i className="fab fa-html5"></i>
        <span>HTML5 </span>
      </div>
      <div className={`gridBox ${animateState}`}>
        <i className="fab fa-github-square"></i>
        <span>GitHub</span>
      </div>
      <div className={`gridBox Odd ${animateState}`}>
        <i className="fab fa-css3-alt"></i>
        <span>CSS</span>
      </div>
      <div className={`gridBox ${animateState}`}>
        <i className="fab fa-less"></i>
        <span>LESS</span>
      </div>
      <div className={`gridBox Odd ${animateState}`}>
        <i className="fab fa-sass"></i>
        <span>SASS</span>
      </div>
      <div className={`gridBox ${animateState}`}>
        <i className="fab fa-js-square"></i>
        <span>JavaScript</span>
      </div>
      <div className={`gridBox Odd ${animateState}`}>
        <i className="fab fa-node"></i>
        <span>node.js</span>
      </div>
      <div className={`gridBox ${animateState}`}>
        <i className="fab fa-php"></i>
        <span>PHP</span>
      </div>
      <div className={`gridBox Odd ${animateState}`}>
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTQu%0D%0AMDUxIDIuNzUxbDQuOTM1IDIuODVjLjgxNi0uODU5IDIuMTczLS44OTMgMy4wMzItLjA3Ny4xNDgu%0D%0AMTQuMjc0LjMwMS4zNzcuNDc3LjU4OSAxLjAyOC4yMzIgMi4zMzktLjc5NiAyLjkyOC0uMTc0LjEt%0D%0ALjM2MS4xNzUtLjU1OC4yMjN2NS42OTljMS4xNDYuMjczIDEuODU0IDEuNDIzIDEuNTggMi41Njkt%0D%0ALjA0OC4yMDQtLjEyNy40LS4yMzIuNTgxLS41OTIgMS4wMjMtMS45MDEgMS4zNzQtMi45MjcuNzgy%0D%0ALS4xOTYtLjExMy0uMzc1LS4yNTktLjUyNi0uNDI5bC00LjkwNSAyLjgzMmMuMzcyIDEuMTI0LS4y%0D%0AMzggMi4zMzUtMS4zNjEgMi43MDYtLjIxNy4wNzEtLjQ0Mi4xMDgtLjY3LjEwOC0xLjE4MS4wMDEt%0D%0AMi4xMzktLjk1NS0yLjE0LTIuMTM2IDAtLjIwNS4wMjktLjQxLjA4OC0uNjA5bC00LjkzNi0yLjg0%0D%0AN2MtLjgxNi44NTQtMi4xNzEuODg3LTMuMDI2LjA3LS44NTQtLjgxNi0uODg2LTIuMTcxLS4wNy0z%0D%0ALjAyNi4yODMtLjI5Ny42NDYtLjUwNiAxLjA0NC0uNjAzbC4wMDEtNS42OTljLTEuMTUtLjI3Ni0x%0D%0ALjg1OC0xLjQzMy0xLjU4MS0yLjU4NC4wNDctLjE5OC4xMjMtLjM4OS4yMjQtLjU2Ni41OTItMS4w%0D%0AMjQgMS45MDItMS4zNzQgMi45MjctLjc4Mi4xNzcuMTAxLjMzOS4yMjguNDguMzc3bDQuOTM4LTIu%0D%0AODVDOS42MTMgMS42MTIgMTAuMjYuNDIzIDExLjM5LjA4OCAxMS41ODcuMDI5IDExLjc5NCAwIDEy%0D%0AIDBjMS4xODEtLjAwMSAyLjEzOS45NTQgMi4xNCAyLjEzNC4wMDEuMjA5LS4wMy40MTgtLjA4OS42%0D%0AMTd6bS0uNTE1Ljg3N2MtLjAxOS4wMjEtLjAzNy4wMzktLjA1OC4wNThsNi40NjEgMTEuMTljLjAy%0D%0ANi0uMDA5LjA1Ni0uMDE2LjA4Mi0uMDIzVjkuMTQ2Yy0xLjE0NS0uMjgzLTEuODQyLTEuNDQyLTEu%0D%0ANTU4LTIuNTg4LjAwNi0uMDI0LjAxMi0uMDQ5LjAxOS0uMDcybC00Ljk0Ni0yLjg1OHptLTMuMDE1%0D%0ALjA1OWwtLjA2LS4wNi00Ljk0NiAyLjg1MmMuMzI3IDEuMTM1LS4zMjcgMi4zMTgtMS40NjEgMi42%0D%0ANDUtLjAyNi4wMDgtLjA1MS4wMTQtLjA3Ni4wMjF2NS43MDhsLjA4NC4wMjMgNi40NjEtMTEuMTkt%0D%0ALjAwMi4wMDF6bTIuMDc2LjUwN2MtLjM5LjExMi0uODAzLjExMi0xLjE5MiAwbC02LjQ2IDExLjE4%0D%0AOWMuMjk0LjI4My41MDIuNjQ1LjYgMS4wNDFoMTIuOTExYy4wOTctLjM5OC4zMDctLjc2MS42MDMt%0D%0AMS4wNDRMMTIuNTk3IDQuMTk0em0uOTg2IDE2LjIyN2w0LjkxMy0yLjgzOGMtLjAxNS0uMDQ3LS4w%0D%0AMjctLjA5NC0uMDM4LS4xNDJINS41NDJsLS4wMjEuMDgzIDQuOTM5IDIuODUyYy4zODgtLjQwNC45%0D%0AMzQtLjY1MyAxLjU0LS42NTMuNjI3IDAgMS4xOS4yNjkgMS41ODMuNjk4eiIvPjwvc3ZnPg=="
          alt="GraphQL"
         />
        <span>GraphQL</span>
      </div>
      <div className={`gridBox ${animateState}`}>
      <i className="fab fa-bootstrap"></i>
      <span>Bootstrap ReactStrap</span>
      </div>
      <div className={`gridBox Odd ${animateState}`}>
      <i className="fab fa-python"></i>
      <span>Python</span>
      </div>
    </div>
    </>
  );
};

/*
  HTML5
  CSS
  LESS
  SASS
  JavaScript
  React


  PHP
  GitHub

  Bootstrap
  ReactStrap
  Component Styles
  Formik
*/
