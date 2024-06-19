import "./Intro.css";
import bg from "../../assets/bg.png";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <span className="intro-text">
          I'm <span className="intro-name">Surabhi</span>
        </span>
        <span>MCA Graduate</span>
        <p className="intro-para">
          Experienced Engineer here, with over a year of hands-on web development experience.I enjoy working with both front-end and back-end technologies and collaborating with teams to create awesome web projects.
          
        </p>
        <Link>
          <button
            className="btn"
            onClick={() => {
              document
                .querySelector("#contact-page")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={contact} alt="Hire me" className="btn-image"></img>Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg"></img>
    </section>
  );
}

export default Intro;
