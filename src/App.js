import "./App.css";
import emailJs from 'emailjs-com'
import mainPhoto from "./photos/mainPhoto.jpg";
import photo1 from "./photos//photo1.JPG";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.JPG";
import photo4 from "./photos/photo4.JPG";
import photo5 from "./photos/photo5.JPG";
import photo6 from "./photos/photo6.JPG";
import twitter from "./photos/twitter.jpg";
import instagram from "./photos/instagram.jpg";
import linkedin from "./photos/linkedin.jpg";
import firstProject from "./photos/firstProject.png";

function App() {
  const images = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    {
      threshold: 0.5,
    }
  );
  images.forEach((image) => {
    observer.observe(image);
  });
  return (
    <div className="wholeScreen">
      <div className="containerThree">
        <div className="line"></div>
        <div className="socials"> Check out my Socials </div>
        <div className="line"></div>
      </div>
      <div className="socialsContainer">
        <img className="twitter" src={twitter} alt="" />
        <img className="twitter" src={instagram} alt="" />
        <img className="twitter" src={linkedin} alt="" />
      </div>
      <header className="header sticky">
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
        <div className="sectionOneFont">Hi! im Kaleck</div>
        <div className="headerWord">
          I'm a full stack Software Engineer with extensive experience in sales
          and management
        </div>
        <div className="headerWord">React | Javascript | Node.js </div>
      </div>
      <div id="section-2" className="redSection two">
        <div className="twoTitle">
          <div className="photoTitle">I Like To Take Photos And Travel</div>
        </div>
        <div className="sectionTwoPhotoContainer">
          <img className="card" src={photo1} alt="" />
          <img className="card" src={photo2} alt="" />
          <img className="card" src={photo3} alt="" />
          <img className="card" src={photo4} alt="" />
          <img className="card" src={photo5} alt="" />
          <img className="card" src={photo6} alt="" />
        </div>
      </div>

      <div id="section-3" className="sectionFour four">
        <div className="workLeftContainer">
          <div className="largerText">Some things i've built</div>
          <div className="smallText">
            My GitHub link is{" "}
            <a className="githubLink" href="https://github.com/kaleckh">
              Here
            </a>
          </div>
        </div>

        <div className="workRightContainer">
          <img className="projects" src={firstProject} alt="" />
          <img className="projects" src={firstProject} alt="" />
        </div>
      </div>

      <div className="sectionThree three" id="section-4">
        <div className="photoTitle contactTitle">Send me a message!</div>
        <div className="contactInputs">
          <div className="inputContainer">
            <div className="leftSide">
              <div className="contactP">Your Name</div>
            </div>
            <input className="contactInput" type="text" />
          </div>
          <div className="inputContainer">
            <div className="leftSide">
              <div className="contactP">Email Address</div>
            </div>
            <input className="contactInput" type="text" />
          </div>
        </div>
        <div className="messageContainer">
          <div className="leftSide">
            <div className="contactP">Your Message</div>
          </div>
          <input className="bigInput" type="text" />
        </div>
        <button className="conactP">Send it</button>
      </div>
    </div>
  );
}

export default App;
