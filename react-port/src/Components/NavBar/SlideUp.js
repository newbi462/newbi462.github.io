import React from "react";
import { Link } from "react-router-dom";

export const SlideUp = ( props ) => {
  return (
    <>
    <i onClick=
      {() => {
        props.setSlideUpState("animate-bottom-rev toggleMainBottomHide");
        props.setHambugerState("menuBarLeft");
        props.setXToggleState("hideit")
      }}
      className="fas fa-times xInSlidUp"
    ></i>
    <div className="flexMe">
      <div className="slideUpLeft">
        <section>
          <h2>Full Stack Web Developer</h2>
          <p>An experienced old school LAMP developer, and new school MERN developer looking to put their knowledge to work for you. As a more seasoned developer, I have solved problems in many ways over the years. End of the day, I like to get something done. It is just my personality type. I do not do idle well. My main objective is always how much was accomplished, less so how hard I had to work to get it done. I prefer to work smart, but there are times one must work hard.</p>
        </section>

        <section className="followMe">
          <h2>Follow me on ...</h2>
          <ul className="iconsSlideUp">
            {/*<li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-facebook-square"></i></li>
            <li><i className="fab fa-instagram"></i></li>*/}
            <li>
              <Link to="https://github.com/newbi462">
                <i className="fab fa-github"></i>
              </Link>
            </li>
            {/*<li>Dribbble</li>*/}
            <li>
              <Link to="https://www.linkedin.com/in/russell-h-bb049256/">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <section className="slideUpRight">
        <h2>Get in touch</h2>
        {/*<form method="post" action="/">*/}
        <form>
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="text" name="email" id="email" placeholder="Email" />
            </div>

            <div className="field full">
              <textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
            </div>
          </div>
          <div className="actions">
            <input type="submit" value="Send"  />
            <input className="resetButton" type="reset" value="Reset" />
          </div>
        </form>
      </section>
    </div>
    </>
  );
};
