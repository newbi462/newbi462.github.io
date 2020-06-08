import React, { useState } from "react";

//Tools and Hooks
import axios from "axios";
import { Link } from "react-router-dom";

//Style

//Components

//Coontext/STATE


export const SlideUp = ( props ) => {
  const [contactForm, setContactForm] = useState(
    {
      name: "",
      email: "",
      reason: "",
      message: ""
    }
  );

  const handleChange = (event) => {
    setContactForm(
      {
        ...contactForm,
        [event.target.name]: event.target.value
      }
    );
  };

  // make a post request to retrieve a token from the api
  const passEmail = (event) => {
    event.preventDefault();
    axios
      .post("https://cors-anywhere.herokuapp.com/http://theshowthatsux.com/testcode/test.php", contactForm)
      .then(responce => {
        console.log(responce);
        //localStorage.setItem("token", responce.data.payload);
        //props.history.push("/protected");
      })
      .catch(error => console.log(error));
  };



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
          <p>An experienced old school LAMP developer, and new school MERN developer looking to put their knowledge to work for you. As a more seasoned developer, I have solved problems in many ways over the years.</p>
          <p>End of the day, I like to get something done. It is just my personality type. I do not do idle well. My main objective is always how much was accomplished, less so how hard I had to work to get it done. I prefer to work smart, but there are times one must work hard.</p>
        </section>

        <section className="followMe">
          <h2>Follow me on ...</h2>
          <ul className="iconsSlideUp">
            {/*<li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-facebook-square"></i></li>
            <li><i className="fab fa-instagram"></i></li>*/}
            <li>
              <i
                onClick={() => {
                  window.open("https://github.com/newbi462", "_blank");
                  return null;
                }}
                className="fab fa-github"
              ></i>
            </li>
            {/*<li>Dribbble</li>*/}
            <li>
              <i
                onClick={() => {
                  window.open("https://www.linkedin.com/in/russell-h-bb049256/", "_blank");
                  return null;
                }}
                className="fab fa-linkedin"
              ></i>
            </li>
          </ul>
        </section>
      </div>

      <section className="slideUpRight">
        <h2>Get in touch</h2>
        {/*<form method="post" action="/">*/}
        <form onSubmit={passEmail}>
          <div className="fields">
            <div className="field half">
              <input
                type="text"
                name="name"
                value={contactForm.name}
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="field half">
              <input
                type="text"
                name="email"
                value={contactForm.email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <div className="field full">
              <textarea
                name="message"
                rows="4"
                value={contactForm.message}
                placeholder="Message"
                onChange={handleChange}
              />
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
