import "./Skills.css";
import frontend from "../../assets/frontend.png";
import dsa from "../../assets/leetcode.png";
import backend from "../../assets/backend.png";
import database from "../../assets/database.png";
import api from "../../assets/api.png";

let skillsList = [
  {
    id: 1,
    image: frontend,
    skillHeading: "Frontend Development",
    skillDesc:
      " Proficient in HTML, CSS, JavaScript, TypeScript, and React.js for building dynamic and responsive interfaces.",
  },
  {
    id: 2,
    image: backend,
    skillHeading: "Backend Development",
    skillDesc:
      "Experienced in Node.js, Java, PHP, and NestJS for developing scalable backend systems and APIs.",
  },
  {
    id: 3,
    image: database,
    skillHeading: "Database Management",
    skillDesc:
      "Skilled in MySQL and MongoDB for efficient data storage and retrieval",
  },
  {
    id: 4,
    image: api,
    skillHeading: "API Development",
    skillDesc:
      "Adept at designing and implementing APIs, including GraphQL and REST, to optimize application performance and functionality.",
  },

  {
    id: 5,
    image: dsa,
    skillHeading: "Data Structures and Algorithms",
    skillDesc:"Competent in implementing essential Data Structures and Algorithms to enhance application efficiency and performance.",
  },
];

function Skills() {
  return (
    <section id="skills">
      <span className="skill-title">Skills and Experience</span>
      <span className="skill-description">
      I am skilled in developing frontend applications using HTML5, CSS3, JavaScript, and TypeScript.
       I have extensive experience with the React.js library and am proficient in working with databases such as MySQL and MongoDB. 
       Additionally, I excel at creating and integrating APIs, including GraphQL and REST. 
      On the backend, I am experienced in Node.js, Java, PHP, NestJS, and the Magento 2 framework, and possess strong problem-solving skills.

      </span>
      <div className="skill-bars">
        {skillsList.map((skills) => {
          return <Skillbars skills={skills} key={skills.id} />;
        })}
      </div>
    </section>
  );
}

function Skillbars(props) {
  return (
    <div className="skill-bar">
      <img
        className="skill-image"
        src={props.skills.image}
        alt="skill bar"
      ></img>
      <div className="skillbar-text">
        <h2>{props.skills.skillHeading}</h2>
        <p>{props.skills.skillDesc}</p>
      </div>
    </div>
  );
}

export default Skills;
