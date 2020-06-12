import React, { useState} from "react";

//Tools and Hooks

//Style

//Components
import { LeftBar } from "./NavBar/LeftBar.js";

//Coontext/STATE


export const AboutPHP = (props) => {
  const [animateState, setAnimateState] = useState("w3-animate-zoom");


  return (
    <>
    <LeftBar {...props} animateState={animateState} setAnimateState={setAnimateState}/>

    <div className="CSScBox">
      <div className={`make23box-img ${animateState}`}>
        <i className="fab fa-php"></i>
      </div>
      <div className={`make23box ${animateState}`}>
        <h2>PHP, is it still relevant?</h2>
        <p>In the case of TL;DR, the answer is Yes; but with a qualifier of PHP can be overused today in place of more modern tools that do the job PHP is being used for better.</p>
        <p>From a technology POV, this comes down to the legacy of Server-Side Vs Client-Side from the late 90s to the early 2000s. At the time both PHP and JS meant dynamic web sites. But for most at the time, JavaScript was seen as the tool for animations, while PHP was seen as the way to dynamically handle content, given that the path and content from the client POV needed to be persistent for things like SEO.</p>
      </div>

      <div className={`make23box ${animateState}`}>
        <p>The advantage PHP offered was it was Server-Side; so from an end-client or user POV the HTML it rendered was as if you had a static HTML site with that content. However, this took place at the cost of server-side resources for every dynamic render. This became a problem as the internet grew almost exponentially causing servers to slow down. But at the time it was the best practice to do it all on the back-end because the front-end could not handle this routing well, if at all.</p>
        <p>However, today that is not the case.</p>
      </div>
      <div className={`make23box-img ${animateState}`}>
        <i className="fas fa-server"></i>
      </div>

      <div className={`make23box-img ${animateState}`}>
        <i className="fas fa-laptop-code"></i>
      </div>
      <div className={`make23box ${animateState}`}>
        <p>Today we have Client-Side-Routing that can be as SEO friendly as Server-Side-Routing while being cleaner for the end-user than ASP.NET could have dreamed to be. To put it in scale, a site like this site in the early 2000s would have needed to be PHP, today it is a React Full Page App. The benefit is every time you click you use your system or browser's resources, not the server hosting this site beyond the first main call, or when you use the contact form to have a server call make an email.</p>
        <p>Yes, because the email form passes a JSON instead of a PHP POST, I needed to change the logic of how the PHP Script handles the post a little, but that brings me back to PHP being overused. Today PHP, NodeJS, and Python are pretty much interchangeable when it comes to the backend. In some cases, one may be a better overall match for the particular stack used; and if you have the technical debt of one was used due to legacy the cost to switch can exceed the benefits. What should be avoided is forcing things to run on the server that do not need to; which can be tempting for more seasoned PHP developers who have been doing PHP since the 90s and may not have updated their understanding of what modern JS can do. Instead they code things just like they did 10+ years ago.</p>
        <p>Fortunately, I am a Full Stack Developer familiar with both LAMP and MERN, and more importantly how to use the best of both to work well with each other.</p>
      </div>
    </div>
    </>
  );
};
