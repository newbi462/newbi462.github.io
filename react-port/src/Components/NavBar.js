import React, { useState } from "react";
import { Link } from "react-router-dom";

//import { TweenLite, TweenMax, TimelineLite, TimelineMax,  } from "gsap";
//import { Tween, Timeline } from 'react-gsap';
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fas } from '@fortawesome/free-solid-svg-icons'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {
  let [animationState, setAnimationState] = useState("hideit");

  return (
    <>
    <nav >
      <div className="menuBar">
        <div className="menuBarLeft">
          <i onClick=
            {() => {
              console.log(animationState);
              setAnimationState(animationState = "w3-animate-bottom");
              console.log(animationState);
            }}
            class={"fas fa-bars"}
          ></i>
          <div
            onClick=
              {() => {
                console.log(animationState);
                setAnimationState(animationState = "w3-animate-bottom");
                console.log(animationState);
              }}
            >
            Click Me
          </div>
        </div>
        <div className="menuBarRight">
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>

      <div className={animationState}>
        <p>Show Me</p>
      </div>
    </nav>
    </>
  );
};








// SCREW IT DO THE ANIMATION WITH SASS AND ROUTE
// WONT ALLOW TOGGLE BY STATE
/*WAS THE JS
  var menu = new TimelineMax({paused:true, reversed:true})

      menu
      .to("#burger1", .5, {rotation: 45, transformOrigin: "left 50%", ease:Power2.easeInOut}, "cross")
      .to("#burger2", .5, {autoAlpha: 0}, "cross")
      .to("#burger3", .5, {rotation: -45, transformOrigin: "left 50%", ease:Power2.easeInOut}, "cross")
      .to("#main", 0.75, {x: "-300px", ease:Power2.easeInOut})

      function menuIn() {
  menu.reversed() ? menu.play() : menu.reverse();
      }
*/



/*
<Tween from={{ x: '100px', rotation: -360 }}>
  <div>This element gets tweened</div>
</Tween>

<Timeline
  target={
    <div>Target element which will be visible and gets tweened</div>
  }
>
  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
  <Tween
    to={{
      x: '0px',
      y: '0px'
    }}
    duration={0.5}
    rotation={45}
    ease="Power2.easeInOut"
  />
</Timeline>

<Timeline
  target={
    <div>Target element which will be visible and gets tweened</div>
  }
>
  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
  <Tween
    to={{
      x: '0px',
      y: '0px'
    }}
    duration={0.5}
    autoAlpha={0}
  />
</Timeline>

<Timeline
  target={
    <div>Target element which will be visible and gets tweened</div>
  }
>
  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
  <Tween
    to={{
      x: '0px',
      y: '0px'
    }}
    duration={0.5}
    rotation={-45}
    ease="Power2.easeInOut"
  />
</Timeline>

*/


/*
<div id="main">
    <svg version="1.1" id="nav" onclick="menuIn()" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="85.387 0 671.116 595.281" enable-background="new 85.387 0 671.116 595.281" xml:space="preserve">
    <rect id="burger1" x="85.387" y="0" fill="#333333" width="671.116" height="119.459"/>
    <rect id="burger2" x="85.387" y="236.233" fill="#333333" width="671.116" height="119.459"/>
    <rect id="burger3" x="85.387" y="475.822" fill="#333333" width="671.116" height="119.459"/>
    </svg>
</div>
<div id="menu">OUT FROM UNDER</div>

*/
