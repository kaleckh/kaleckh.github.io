import "./App.css";
import { Twitter } from "./media/Twitter";
import { Linkedin } from "./media/Linkedin";
import { Insta } from "./media/Insta";
import Image from "./Image.js";

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
          <Image source={photo1}  />
          <Image source={photo5} />
          <Image source={photo6} />
          <Image source={photo2} new={'hide'}/>
          <Image source={photo3} new={"hide"} />

          <Image source={photo4} new={'hide'}/>
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
          <Image source={firstProject} new={"workCard"}/>

          <img className="projects card smallCard" src={firstProject} alt="" />
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
