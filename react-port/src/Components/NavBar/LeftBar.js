import React, { useContext } from "react";

//Tools and Hooks

//Style

//Components

//Coontext/STATE
import { ContextBox } from "./../../Context/ContextBox";

export const LeftBar = (props) => {
  const { selectedState, setSelectedState } = useContext(ContextBox);
  //console.log(selectedState);

  let whenClicked = (clicked, shift, route) => {
    console.log(clicked);
    setSelectedState(clicked);
    //setShiftedState(shift);
    props.setAnimateState("animate-zoom-rev");
    //props.history.push("/React-Demos");
    console.log(props.animateState);
    setTimeout(() => {
      //setAnimateState("hideImportant");
      //setShiftedState("locktop");
      //console.log(props);
      props.history.push(route);
    }, 599);
  };
  console.log("left bar");
  console.log(props);

  return (
    <>
    <div className={`leftbar ${props.animateState}`}>
      <i
        onClick={() => whenClicked("home", "", "/")}
        className="fas fa-home"
      ></i>
      <i
        onClick={() => whenClicked("react-Selected", "", "/ReactDemos")}
        className={
          (selectedState === "react-Selected")// != for difrent effect
            ? `fab fa-react w3-spin active`
            : `fab fa-react`
            //: `gridBox ${selectedState} ${shiftedState}`
      }></i>
      <i
        onClick={() => whenClicked("html5-Selected", "", "/HTMLDemos")}
        className={
            (selectedState === "html5-Selected")// != for difrent effect
              ? `fab fa-html5 active`
              : `fab fa-html5`
              //: `gridBox ${selectedState} ${shiftedState}`
        }
      ></i>
      <i
        onClick={() => {
          window.open("https://github.com/newbi462", "_blank");
          return null;
        }}
        className={
            (selectedState === "github-Selected")// != for difrent effect
              ? `fab fa-github-square active`
              : `fab fa-github-square`
              //: `gridBox ${selectedState} ${shiftedState}`
        }
      ></i>
      <i
        onClick={() => whenClicked("css3-Selected", "", "/AboutCSSs")}
        className={
            (selectedState === "css3-Selected" || selectedState === "less-Selected" || selectedState === "sass-Selected")// != for difrent effect
              ? `fab fa-css3-alt active`
              : `fab fa-css3-alt`
              //: `gridBox ${selectedState} ${shiftedState}`
        }
      ></i>
      <i
        onClick={() => whenClicked("less-Selected", "", "/AboutCSSs")}
        className={
            (selectedState === "css3-Selected" || selectedState === "less-Selected" || selectedState === "sass-Selected")// != for difrent effect
              ? `fab fa-less active`
              : `fab fa-less`
              //: `gridBox ${selectedState} ${shiftedState}`
        }
      ></i>
      <i
        onClick={() => whenClicked("sass-Selected", "", "/AboutCSSs")}
        className={
            (selectedState === "css3-Selected" || selectedState === "less-Selected" || selectedState === "sass-Selected")// != for difrent effect
              ? `fab fa-sass active`
              : `fab fa-sass`
              //: `gridBox ${selectedState} ${shiftedState}`
        }
      ></i>
      <i
        onClick={() => whenClicked("js-Selected", "", "/AboutJSandNODE")}
        className={
            (selectedState === "js-Selected" || selectedState === "node-Selected")// != for difrent effect
              ? `fab fa-js-square active`
              : `fab fa-js-square`
              //: `gridBox ${selectedState} ${shiftedState}`
        }
      ></i>
      <i
        onClick={() => whenClicked("node-Selected", "", "/AboutJSandNODE")}
        className={
            (selectedState === "js-Selected" || selectedState === "node-Selected")// != for difrent effect
              ? `fab fa-node active`
              : `fab fa-node`
              //: `gridBox ${selectedState} ${shiftedState}`
        }
      ></i>
      <i
        onClick={() => whenClicked("php-Selected", "", "/AboutPHP")}
        className={
            (selectedState === "php-Selected")// != for difrent effect
              ? `fab fa-php active`
              : `fab fa-php`
              //: `gridBox ${selectedState} ${shiftedState}`
        }
      ></i>
      <img
        onClick={() => whenClicked("GraphQL-Selected", "", "/AboutGraphQL")}
        className={
            (selectedState === "GraphQL-Selected")// != for difrent effect
              ? `active`
              : `nope`
              //: `gridBox ${selectedState} ${shiftedState}`
        }
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTQu%0D%0AMDUxIDIuNzUxbDQuOTM1IDIuODVjLjgxNi0uODU5IDIuMTczLS44OTMgMy4wMzItLjA3Ny4xNDgu%0D%0AMTQuMjc0LjMwMS4zNzcuNDc3LjU4OSAxLjAyOC4yMzIgMi4zMzktLjc5NiAyLjkyOC0uMTc0LjEt%0D%0ALjM2MS4xNzUtLjU1OC4yMjN2NS42OTljMS4xNDYuMjczIDEuODU0IDEuNDIzIDEuNTggMi41Njkt%0D%0ALjA0OC4yMDQtLjEyNy40LS4yMzIuNTgxLS41OTIgMS4wMjMtMS45MDEgMS4zNzQtMi45MjcuNzgy%0D%0ALS4xOTYtLjExMy0uMzc1LS4yNTktLjUyNi0uNDI5bC00LjkwNSAyLjgzMmMuMzcyIDEuMTI0LS4y%0D%0AMzggMi4zMzUtMS4zNjEgMi43MDYtLjIxNy4wNzEtLjQ0Mi4xMDgtLjY3LjEwOC0xLjE4MS4wMDEt%0D%0AMi4xMzktLjk1NS0yLjE0LTIuMTM2IDAtLjIwNS4wMjktLjQxLjA4OC0uNjA5bC00LjkzNi0yLjg0%0D%0AN2MtLjgxNi44NTQtMi4xNzEuODg3LTMuMDI2LjA3LS44NTQtLjgxNi0uODg2LTIuMTcxLS4wNy0z%0D%0ALjAyNi4yODMtLjI5Ny42NDYtLjUwNiAxLjA0NC0uNjAzbC4wMDEtNS42OTljLTEuMTUtLjI3Ni0x%0D%0ALjg1OC0xLjQzMy0xLjU4MS0yLjU4NC4wNDctLjE5OC4xMjMtLjM4OS4yMjQtLjU2Ni41OTItMS4w%0D%0AMjQgMS45MDItMS4zNzQgMi45MjctLjc4Mi4xNzcuMTAxLjMzOS4yMjguNDguMzc3bDQuOTM4LTIu%0D%0AODVDOS42MTMgMS42MTIgMTAuMjYuNDIzIDExLjM5LjA4OCAxMS41ODcuMDI5IDExLjc5NCAwIDEy%0D%0AIDBjMS4xODEtLjAwMSAyLjEzOS45NTQgMi4xNCAyLjEzNC4wMDEuMjA5LS4wMy40MTgtLjA4OS42%0D%0AMTd6bS0uNTE1Ljg3N2MtLjAxOS4wMjEtLjAzNy4wMzktLjA1OC4wNThsNi40NjEgMTEuMTljLjAy%0D%0ANi0uMDA5LjA1Ni0uMDE2LjA4Mi0uMDIzVjkuMTQ2Yy0xLjE0NS0uMjgzLTEuODQyLTEuNDQyLTEu%0D%0ANTU4LTIuNTg4LjAwNi0uMDI0LjAxMi0uMDQ5LjAxOS0uMDcybC00Ljk0Ni0yLjg1OHptLTMuMDE1%0D%0ALjA1OWwtLjA2LS4wNi00Ljk0NiAyLjg1MmMuMzI3IDEuMTM1LS4zMjcgMi4zMTgtMS40NjEgMi42%0D%0ANDUtLjAyNi4wMDgtLjA1MS4wMTQtLjA3Ni4wMjF2NS43MDhsLjA4NC4wMjMgNi40NjEtMTEuMTkt%0D%0ALjAwMi4wMDF6bTIuMDc2LjUwN2MtLjM5LjExMi0uODAzLjExMi0xLjE5MiAwbC02LjQ2IDExLjE4%0D%0AOWMuMjk0LjI4My41MDIuNjQ1LjYgMS4wNDFoMTIuOTExYy4wOTctLjM5OC4zMDctLjc2MS42MDMt%0D%0AMS4wNDRMMTIuNTk3IDQuMTk0em0uOTg2IDE2LjIyN2w0LjkxMy0yLjgzOGMtLjAxNS0uMDQ3LS4w%0D%0AMjctLjA5NC0uMDM4LS4xNDJINS41NDJsLS4wMjEuMDgzIDQuOTM5IDIuODUyYy4zODgtLjQwNC45%0D%0AMzQtLjY1MyAxLjU0LS42NTMuNjI3IDAgMS4xOS4yNjkgMS41ODMuNjk4eiIvPjwvc3ZnPg=="
        alt="GraphQL"
       />
       <i
         className={
             (selectedState === "bootstrap-Selected")// != for difrent effect
               ? `fab fa-bootstrap active`
               : `fab fa-bootstrap`
               //: `gridBox ${selectedState} ${shiftedState}`
         }
       ></i>
       <i
         className={
             (selectedState === "python-Selected")// != for difrent effect
               ? `fab fa-python active`
               : `fab fa-python`
               //: `gridBox ${selectedState} ${shiftedState}`
         }
       ></i>
    </div>
    </>
  );
};
