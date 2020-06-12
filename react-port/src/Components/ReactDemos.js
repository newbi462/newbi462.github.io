import React, { useState} from "react";

//Tools and Hooks

//Style

//Components
import { LeftBar } from "./NavBar/LeftBar.js";

//Coontext/STATE


export const ReactDemos = (props) => {
  const [animateState, setAnimateState] = useState("w3-animate-zoom");



  return (
    <>
    <LeftBar {...props} animateState={animateState} setAnimateState={setAnimateState}/>

    <div className="reactBox">
      <div className={`make23box ${animateState}`}>
        <h2
          onClick={() => {
            window.open("https://stage.missionctrl.dev/", "_blank");
            return null;
          }}
          className="active"
        >Mission Control</h2>
        <p>Programs management solution to at a glance know: program, product, and project status.</p>
        <p>React | SASS | JavaScript | PostgreSQL | AWS | GraphQL | Prism | Apollo | Docker | OKTA</p>
        <ul className="a">
          <li>Worked over 8 weeks to expand the features, in a set of 3 remote cross functional teams, composed of 18+ members</li>
          <li>Created a user role system making the needed schema and resolvers for GraphQL, Prism, and Apollo</li>
          <li>Helped set standards for best practices regarding continued development of the project</li>
        </ul>
        <p
          onClick={() => {
            window.open("https://github.com/Lambda-School-Labs/mission-control-be", "_blank");
            return null;
          }}
          className="active"
        >Backend Source</p>
        <p
          onClick={() => {
            window.open("https://github.com/Lambda-School-Labs/mission-control-fe", "_blank");
            return null;
          }}
          className="active"
        >Frontend Source</p>
      </div>
      <div className={`make23box-img ${animateState}`}>
        <img src="https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/Toggle.png" alt="Mission Control" />
      </div>
      <div className={`make23box-img ${animateState}`}>
        <img src="https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/nanny-in-a-flash-app.png" alt="Nanny in a Flash App" />
      </div>
      <div className={`make23box ${animateState}`}>
        <h2
          onClick={() => {
            window.open("https://nanny-scheduler-fe.anthonykizer88.now.sh/", "_blank");
            return null;
          }}
          className="active"
        >Nanny in a Flash App</h2>
        <p>Helps a busy parent select a nanny based on availability, location, or what services they can offer</p>
        <p>React | SASS | axios | Yup | FORMIK</p>
        <ul>
          <li>Worked over the course of a week to provide a front end React app with a team of 5 other developers</li>
          <li>Used React and SASS to create a matching app with needed user profile functionality</li>
        </ul>
        <p
          onClick={() => {
            window.open("https://github.com/Build-Week-Nanny-Scheduler/nanny-scheduler-FE", "_blank");
            return null;
          }}
          className="active"
        >App Source Code</p>
      </div>
      <div className={`make23box ${animateState}`}>
        <h2
          onClick={() => {
            window.open("https://compassionate-lamarr-da90b8.netlify.app/", "_blank");
            return null;
          }}
          className="active"
        >Lambdi Pet</h2>
        <p>A digital pet that changes based on how a child chooses to eat.</p>
        <p>ContextAPI | axios | SASS | reactstrap | Formik | Yup | styled-components | recharts | React</p>
        <ul>
          <li>Over the course of one week, developed an app front end with an international team of 6</li>
          <li>Mentored 3 more Jr Developers, while providing needed coordination with Back-End Dev and international member</li>
        </ul>
        <p
          onClick={() => {
            window.open("https://github.com/Build-Week-Gigapet1/FE", "_blank");
            return null;
          }}
          className="active"
        >Source Code</p>
      </div>
      <div className={`make23box-img ${animateState}`}>
        <img src="https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/l-pet.png" alt="Lambdi Pet" />
      </div>
    </div>
    </>
  );
};
