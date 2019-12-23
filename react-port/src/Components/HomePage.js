import React from "react";

export const HomePage = (props) => {
  return (
    <>
    <div className="tileBox">
      <div
        onClick={() => {
          console.log("clicked");
          //props.history.push("/React-Demos");
          setTimeout(() => {
            console.log("I ran");
            props.history.push("/React-Demos");
          }, 1500);
        }}
        className="gridBox w3-animate-zoom"
      >
        <i className="fab fa-react w3-spin"></i>
        <span>React</span>
      </div>
      <div className="gridBox Odd w3-animate-zoom">
        <i className="fab fa-html5"></i>
        <span>HTML5</span>
      </div>
      <div className="gridBox w3-animate-zoom">
        <i className="fab fa-github-square"></i>
        <span>GitHub</span>
      </div>
      <div className="gridBox Odd w3-animate-zoom">
        <i className="fab fa-css3-alt"></i>
        <span>CSS</span>
      </div>
      <div className="gridBox w3-animate-zoom">
        <i className="fab fa-less"></i>
        <span>LESS</span>
      </div>
      <div className="gridBox Odd w3-animate-zoom">
        <i className="fab fa-sass"></i>
        <span>SASS</span>
      </div>
      <div className="gridBox w3-animate-zoom">
        <i className="fab fa-js-square"></i>
        <span>JavaScript</span>
      </div>
      <div className="gridBox Odd w3-animate-zoom">
        <i className="fab fa-php"></i>
        <span>PHP</span>
      </div>
      <div className="gridBox w3-animate-zoom">
        <i className="fab fa-bootstrap"></i>
        <span>Bootstrap</span>
      </div>
      <div className="gridBox Odd w3-animate-zoom">
        Formik
      </div>
      <div className="gridBox w3-animate-zoom">
        ReactStrap
      </div>
      <div className="gridBox Odd w3-animate-zoom">
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
