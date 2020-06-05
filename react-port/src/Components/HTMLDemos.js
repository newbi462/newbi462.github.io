import React, { useState} from "react";

//Tools and Hooks

//Style

//Components
import { LeftBar } from "./NavBar/LeftBar.js";

//Coontext/STATE


export const HTMLDemos = (props) => {
  const [animateState, setAnimateState] = useState("w3-animate-zoom");



  return (
    <>
    <LeftBar {...props} animateState={animateState} setAnimateState={setAnimateState}/>

    <div className="HTMLBox">
      <div className={`make23box-img ${animateState}`}>
        <img src="https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/junk-car.png" alt="Junk car" />
      </div>
      <div className={`make23box-img ${animateState}`}>
        <img src="https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/mob-sites.png" alt="Nanny in a Flash App" />
      </div>
      <div className={`make23box-img ${animateState}`}>
        <img src="https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/l-pet.png" alt="Lambdi Pet" />
      </div>
      <div className={`make23box-img ${animateState}`}>
        <img src="https://raw.githubusercontent.com/newbi462/newbi462.github.io/Build-On/react-port/src/img/cr-intl-desktop.png" alt="Cr-Intl" />
      </div>
    </div>


    </>
  );
};
