import "./App.css";
import { Twitter } from "./media/Twitter";
import { Linkedin } from "./media/Linkedin";
import { Insta } from "./media/Insta";


import photo1 from "./photos//photo1.JPG";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.JPG";
import photo4 from "./photos/photo4.JPG";
import photo5 from "./photos/photo5.JPG";
import photo6 from "./photos/photo6.JPG";



import firstProject from "./photos/firstProject.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Github } from "./media/Github";

function App() {
  const images = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    {
      threshold: 0.8,
    }
  );
  images.forEach((image) => {
    observer.observe(image);
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oax31j8",
        "template_i93h3gc",
        form.current,
        "NIDXoMEDkdLg6tug7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="wholeScreen">
      <header className="header ">
        <div className="headerWords">Kaleck</div>
        <div className="headerContainer">
          <div className="divWordContainer">
            <div className="headerWord">
              <a href="#section-2">Photos</a>
            </div>
            <div className="headerWord">
              <a href="#section-3">Projects</a>
            </div>
            <div className="headerWord">
              <a href="#section-4">Contact Me</a>
            </div>
          </div>
        </div>
      </header>
      <div id="section-1" className="section one">
        <div className="mainScreenLeft">
          <div className="socialsContainer">
            <a href="https://twitter.com/kalehamm">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/kale_hamm/?next=%2F">
              <Insta />
            </a>
            <a href="https://www.linkedin.com/in/kaleck-hamm-692a54a1/">
              <Linkedin />
            </a>
            <a href="https://github.com/kaleckh">
              <Github />
            </a>

            <div className="line"></div>
          </div>
        </div>
        <div className="mainScreenRight">
          <div className="sectionOneFont">Hi! im Kaleck</div>

          <div className="headerWord">
            I'm a full stack Software Engineer with extensive experience in
            sales and management
          </div>

          <div className="headerWord">React | Javascript | Node.js </div>
        </div>
      </div>
      <div id="section-2" className="redSection two">
        <div className="twoTitle sticky">
          <div className="photoTitle">I Like To Take Photos And Travel</div>
        </div>
        <div className="sectionTwoPhotoContainer">
          <img className="card " src={photo1} alt="" />
          <img className="card " src={photo2} alt="" />
          <img className="card hide" src={photo3} alt="" />
          <img className="card  " src={photo4} alt="" />
          <img className="card hide" src={photo5} alt="" />
          <img className="card hide" src={photo6} alt="" />
        </div>
      </div>

      <div id="section-3" className="sectionFour four">
        <div className="workLeftContainer">
          <div className="largerText text">Some things i've built</div>
          <div className="smallText hide">
            My GitHub link is
             <a className="githubLink" href="https://github.com/kaleckh">
              Here
            </a>
          </div>
        </div>

        <div className="workRightContainer">
          <img className="projects card" src={firstProject} alt="" />
          <img className="projects card" src={firstProject} alt="" />
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="sectionThree three"
        id="section-4"
      >
        <div className="photoTitle">Send me a message!</div>
        <div className="smallText margin">
          Always willing to do freelance work
        </div>
        <div className="contactInputs">
          <div className="inputContainer">
            <div className="leftSide">
              <div className="contactP">First name</div>
            </div>
            <input className="contactInput" name="from_name" type="text" />
          </div>
          <div className="inputContainer">
            <div className="leftSide">
              <div className="contactP">Last name </div>
            </div>
            <input className="contactInput" type="text" />
          </div>
        </div>
        <div className="messageContainer">
          <div className="leftSide">
            <div className="contactP">Your Message</div>
          </div>
          <input name="message" className="bigInput" type="text" />
        </div>
        <button type="submit" className="conactP">
          Send it
        </button>
      </form>
    </div>
  );
}

export default App;
