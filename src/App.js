import "./App.css";
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
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
        // entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    {
      threshold: 1,
    }
  );
  images.forEach((image) => {
    observer.observe(image);
  });
  return (
    <div className="wholeScreen">
      <header className="header">
        <div className="headerWords">Kaleck</div>
        <div className="headerContainer">
          <div className="divWordContainer">
            <div className="headerWord">Photos</div>
            <div className="headerWord">Projects</div>
            <div className="headerWord">Contact me</div>
          </div>
        </div>
      </header>
      <div className="section one">
        <div className="sectionOneFont">Hi! im Kaleck</div>
        <div className="headerWord">
          I'm a full stack Software Engineer with extensive experience in sales
          and management
        </div>
        <div className="headerWord">React | Javascript | Node.js </div>
      </div>
      <div className="redSection two">
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

      <div className="sectionFour four">
        <div className="workLeftContainer">
          <div className="largerText">Here Is Some Of My Work</div>
          <div className="smallText">
            My GitHub link is{" "}
            <a className="githubLink" href="">
              Here
            </a>
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <div className="workRightContainer">
            <img className="projects" src={firstProject} alt="" />
            <img className="projects" src={firstProject} alt="" />
          </div>
          <div className="bottomProject">
            <img className="projects" src={firstProject} alt="" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="sectionThree three">
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
        </div>
        <div className='contactContainer'>
          <div>Send me a message</div>
        </div>
      </div>
    </div>
  );
}

export default App;
