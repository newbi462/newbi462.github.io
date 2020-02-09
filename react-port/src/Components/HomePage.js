import React, { useState } from "react";

export const HomePage = (props) => {
  const [animateState, setAnimateState] = useState("w3-animate-zoom");
  const [selectedState, setSelectedState] = useState("test42a");
  const [shiftedState, setShiftedState] = useState("");

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
          (selectedState != "react-Selected")
            ? `gridBox hover ${animateState}`
            : `gridBox ${selectedState} ${shiftedState}`
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
        <span>HTML5</span>
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
        Formik
      </div>
      <div className={`gridBox ${animateState}`}>
      <i className="fab fa-bootstrap"></i>
      <span>Bootstrap ReactStrap</span>
      </div>
      <div className={`gridBox Odd ${animateState}`}>
        Component Styles
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
