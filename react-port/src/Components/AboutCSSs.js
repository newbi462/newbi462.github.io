import React, { useState} from "react";

//Tools and Hooks

//Style

//Components
import { LeftBar } from "./NavBar/LeftBar.js";

//Coontext/STATE


export const AboutCSSs = (props) => {
  const [animateState, setAnimateState] = useState("w3-animate-zoom");


  return (
    <>
    <LeftBar {...props} animateState={animateState} setAnimateState={setAnimateState}/>

    <div className="CSScBox">
      <div className={`make23box-img ${animateState}`}>
        <i className="fab fa-css3-alt"></i>
      </div>
      <div className={`make23box ${animateState}`}>
        <h2>CSS | CSS3 | Sass | Less</h2>
        <p>These all are a set of very closely related solutions that make use of CSS (Cascading Style Sheets) to style the look and feel of the end result HTML Mark up regardless of how it is rendered. But while related it is best to think of them like a set of wrenches or ratchets. At times you need metric and at times you need inches. The right tool for the job as it were.</p>
      </div>

      <div className={`make23box ${animateState}`}>
        <p>CSS, and it more modern version CSS3, is the standard or guideline agreed to, but not all browsers interpret this standard the same. And, while CSS3 was a marked improvement to CSS in the same way HTML5 added much to HTML, even today not all browsers fully support this. This is something worth considering when it comes to accessibility, particularly when it comes to compliance with the ADA and other disability laws.</p>
        <p>A true, cross-platform cross-browser solution is about also complying with the arbitrary variations on the guideline to achieve matching results whenever possible.</p>
      </div>
      <div className={`make23box-img ${animateState}`}>
        <i className="fab fa-sass"></i>
      </div>

      <div className={`make23box-img ${animateState}`}>
        <i className="fab fa-less"></i>
      </div>
      <div className={`make23box ${animateState}`}>
        <p>SASS and LESS are competing standards for automating some of the CSS creation using a complied approach, which brings us back to inches Vs metric. The syntax differences between them are minor, to the point that most experienced developers can pick the other one up from the documentation alone. However, they are not interchangeable. Because they are competing standards some other tools such as React simply play nicer with one standard over the other. It is best for this reason when using either that you pick the one that integrates well with the rest of your stack.</p>
        <p>Fortunately, I have experance with all of them and am comfortable using all of them.</p>
      </div>
    </div>
    </>
  );
};
