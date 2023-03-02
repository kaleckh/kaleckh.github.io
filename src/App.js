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
import { useInView } from "react-intersection-observer";
import firstProject from "./photos/firstProject.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Github } from "./media/Github";
import { useState, useEffect } from "react";

function App() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
  });
  const { ref: refTop, inView: inViewTop } = useInView({
    /* Optional options */
    threshold: 0.7,
  });
  const { ref: refPhoto, inView: inViewPhoto } = useInView({
    /* Optional options */
    threshold: 0.7,
  });
  const [cssClass, setCssClass] = useState("");
  const [cssTopClass, setCssTopClass] = useState("");
  const [cssPhoto, setCssPhoto] = useState("");
  // const [cssTopClass, setCssTopClass] = useState("");
  useEffect(() => {
    if (inView) {
      setCssClass("showTrans");
    } else if (inViewTop) {
      setCssTopClass("showTrans");
    } else if (inViewPhoto) {
      setCssPhoto("showTrans");
    }
  }, [inView, inViewTop]);
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

          <div className="headerWord">I'm a full stack Software Engineer</div>
          <div className="intro">
            Hi, I'm Kaleck Hamm, a full-stack web developer based in Orem, Utah.
            With a passion for creating intuitive and visually appealing
            websites and applications, I've honed my skills in technologies such
            as JavaScript, React, Node.js, and PostgreSQL. I'm a quick learner,
            an excellent problem solver, and I'm always looking for
            opportunities to grow and expand my skill set. When I'm not coding,
            you can find me hiking in the mountains or enjoying a good book.
          </div>
        </div>
      </div>
      <div id="section-2" className="redSection two">
        <div className="twoTitle sticky">
          <div className="photoTitle">I Like To Take Photos And Travel</div>
        </div>
        <div className="sectionTwoPhotoContainer">
          <Image source={photo1} />
          <Image source={photo5} />
          <Image source={photo6} />
          <Image source={photo2} new={"hide"} />
          <Image source={photo3} new={"hide"} />

          <Image source={photo4} new={"hide"} />
        </div>
      </div>

      <div id="section-3" className="sectionFour four">
        <div
          className={`workLeftContainer hideTransLeft ${cssClass}`}
          ref={ref}
        >
          <div className="acontainer">
            <div className="largerText text">Some things i've built</div>
            <div className="smallText hide">
              My GitHub link is
              <a className="githubLink" href="https://github.com/kaleckh">
                Here
              </a>
            </div>
            <div className="small">Click the photos to see projects</div>
          </div>
        </div>

        <div ref={refPhoto} className={`workRightContainer  ${cssPhoto}`}>
          <div className="center">
            <a href="https://63fe8cd0ec7fd050744f4b5a--verdant-meerkat-e709d5.netlify.app/">
              <img src={firstProject} new={"workCard"} className="project" />
            </a>
          </div>
        </div>
      </div>
      <div className="sectionFive">
        <div id="skills" className="skills">
          Skills
        </div>
        <div className="skillsNameContainer">
          <div
            className={`frontContainer hideTransBottom ${cssTopClass}`}
            ref={refTop}
          >
            <div className="frontend">Frontend</div>
            <div className="listContainer">
              <div className={`leftList`}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </div>
              <div className="rightList">
                <li>Git</li>
                <li>React</li>
                <li>Bootstrap</li>
              </div>
            </div>
          </div>
          <div
            className={`frontContainer hideTransTop ${cssTopClass}`}
            ref={refTop}
          >
            <div className="frontend">Backend</div>
            <div className="listContainer">
              <div className="leftList">
                <li>Node.Js</li>
                <li>MySQL</li>
                <li>SQL</li>
              </div>
              <div className="rightList">
                <li>Docker</li>
                <li>Postgres</li>
                <li className="none"></li>
              </div>
            </div>
          </div>
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
        <button
          onClick={() => {
            setSent(true);
          }}
          type="submit"
          className="conactP"
        >
          Send it
        </button>
        {sent && <div className="contactP">Message Sent!</div>}
      </form>
      <div className="footer">
        <div className="name">Kaleck</div>
        <div className="footerSections">
          <a href="#section-2" className="footerSection">
            Photos
          </a>
          <a href="#skills" className="footerSection">
            Skills
          </a>
          <a href="#section-3" className="footerSection">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
