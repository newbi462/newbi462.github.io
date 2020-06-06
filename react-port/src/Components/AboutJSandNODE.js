import React, { useState} from "react";

//Tools and Hooks

//Style

//Components
import { LeftBar } from "./NavBar/LeftBar.js";

//Coontext/STATE


export const AboutJSandNODE = (props) => {
  const [animateState, setAnimateState] = useState("w3-animate-zoom");


  return (
    <>
    <LeftBar {...props} animateState={animateState} setAnimateState={setAnimateState}/>

    <div className="CSScBox">
      <div className={`make23box ${animateState}`}>
        <h2>JS Vs NODE Vs NODE.js VS NodeJS</h2>
        <p>As of late JavaScript has become a bit of a swiss army knife for code, which is both good and bad. Overall the skill sets are very comparable for an experienced developer. Node or NodeJS, as Node and NodeJS are the same thing, allows back-end code to be written using JavaScript Functions. So the only real difference in practice is are you making functions to handle front-end or back-end logic.</p>
      </div>
      <div className={`make23box-img ${animateState}`}>
        <i className="fab fa-js-square"></i>
      </div>

      <div className={`make23box-img ${animateState}`}>
        <i className="fab fa-node"></i>
      </div>
      <div className={`make23box ${animateState}`}>
        <p>Because Node is using JavaScript on the back-end side while the skillsets are comparable they are not 1:1. The logic of a Node Express Kenx SQL server is a little different than a JS or React Axios Frontend. But at the end of the day, both are just JS Functions executing the logic the code needs to.</p>
        <p>In short, most competent NODE developers should also be competent JavaScript developers, but not all JavaScript developers would be good NodeJS developers.</p>
      </div>


      <div className={`make23box ${animateState}`}>
        <p>JavaScript libraries and frameworks such as React, Angular, and Vue are a complementary skill set, but also a different animal altogether. Because these tools are based on JavaScript the more seasoned a developer is with JavaScript the more they can do with a tool like React. A more experienced developer is able to better manipulate the tools of state management and the like with JS Helper Functions. Some of which were used to allow this site to do some of the things it does, while a less skilled developer would be limited to the libraries available to them for the platform used.</p>
        <p>Fortunately, I am skilled in all three areas as a developer, so in my case, JS is a true swiss army knife for me when working as a developer on a stack that makes use of it.</p>
      </div>
      <div className={`make23box-img ${animateState}`}>
        <i className="fab fa-react w3-spin"></i>
      </div>
    </div>
    </>
  );
};
