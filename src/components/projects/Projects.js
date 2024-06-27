import "./Projects.css";
import news from "../../assets/news.jpg";
import portfolio from "../../assets/portfolio.jpeg";
import todo from "../../assets/todo.png";
import tour from "../../assets/tour.jpg";
import ecom from "../../assets/ecom.jpg";
import weath from "../../assets/weath.jpeg";
import calc from "../../assets/calc.jpg";
import code from "../../assets/code.png";



function Projects() {
  return (
    <div id="projects">
      <div className="pro-heading">
        <h2 className="works-title">Project Showcase</h2>
        <span className="works-description">
        Showcasing diverse projects from Magento-integrated e-commerce platforms and dynamic tourism websites to watch shop management systems, dynamic to-do planning applications, news apps,
         and robust NestJS projects, my portfolio reflects a commitment to creating customized, user-friendly,
          and efficient solutions tailored to meet varied business needs.
        </span>
      </div>
      <Project
        title="Dynamic To-do Planning and Tracking"
        desc="Developed a dynamic To-Do List application using React and TypeScript, implementing CRUD operations for efficient task management.
        Ensured data persistence across sessions with local storage and improved code quality with thorough testing and TypeScript."
        img={todo}
        git="https://github.com/surabhi-achar/Typescript-react-todo-list"
        link="https://surabhi-achar.github.io/Typescript-react-todo-list/"
      />
       <Project
        title="Magento Integrated E-commerce Platform:"
        desc="Developed a sophisticated e-commerce platform with Magento, integrating Razerpay for secure payments and dynamic invoicing capabilities.
        Implemented Arabic language support and a nearby store functionality to enhance user experience and bridge online and offline retail."
        img={ecom}
        git="https://github.com/surabhi-achar/Jewellary-website-using-Magento-framework"
        link=""
      />

      <Project
        title="News App"
        desc="Developed a React news app focused on personalized content delivery, leveraging APIs to fetch and display news based on user preferences.
        Integrated a robust search feature allowing users to easily find specific articles or topics of interest within the app.
        Designed with a minimalist and user-friendly interface to ensure effortless news browsing, emphasizing readability and ease of navigation."
        img={news}
        git="https://github.com/surabhi-achar/news-app-react"
        link="https://newsapp-react-api.netlify.app/"
      />
      <Project
        title="Portfolio(This Website)"
        desc="Developed a modern React JS portfolio showcasing skill showcases, detailed project descriptions, and a user-friendly Contact Me section.
Integrated direct email functionality to facilitate seamless communication, allowing visitors to easily reach out for inquiries or collaborations.
Ensured the portfolio is responsive and mobile-friendly, optimizing the viewing experience across a wide range of devices."
        img={portfolio}
        git="https://github.com/surabhi-achar/Portfolio-react-website"
        link=""
      />
     <Project
        title="Tourism Website"
        desc="Created a dynamic tourism website showcasing the scenic destinations of Udupi using PHP, HTML, and CSS.
        Enabled users to navigate and explore diverse attractions with ease, featuring a photo gallery to highlight the beauty of each destination.
        Implemented a responsive design to ensure a seamless browsing experience across all devices."
        img={tour}
        git=""
        link=""
      />
    <Project
        title="React Calculator"
        desc="Developed a fully functional calculator application using React, implementing essential arithmetic operations for basic calculations.
        Designed a user-friendly interface with responsive design, ensuring seamless user experience across different devices and screen sizes."
        img={calc}
        git="https://github.com/surabhi-achar/react-calcuclator"
        link="https://surabhi-achar.github.io/react-calcuclator/"
      />
<Project
        title="Product Management System with Code-first approach"
        desc="Developed a product management system using NestJS and GraphQL with a code-first approach. Implemented CRUD operations for products, defined with TypeScript decorators to create a seamless GraphQL schema. Resolvers and services handle business logic for efficient data management. Integrated GraphQL Playground for intuitive API testing and interaction."
        img={code}
        git="https://github.com/surabhi-achar/code-schema-graphql"
        link=""
      />
       <Project
        title="React Weather App"
        desc="Developed a dynamic weather application using React, integrating real-time weather data from external APIs for accurate and up-to-date forecasts.
        Designed a clean and intuitive user interface, providing users with easy access to current weather conditions, forecasts, and location-based weather information."
        img={weath}
        git="https://github.com/surabhi-achar/React-weather-app"
        link="https://surabhi-achar.github.io/React-weather-app/  "
      />
    <Project
        title="Schema-First Approach with NestJS and GraphQL"
        desc="Developed a GraphQL API in NestJS using the schema-first approach, emphasizing clear schema definition in GraphQL SDL for efficient API design. This method ensures clarity and maintainability by defining types, queries, mutations, and subscriptions upfront, facilitating seamless collaboration between frontend and backend development teams."
        img={code}
        git="https://github.com/surabhi-achar/nest-schema-graphql"
        link=""
      />
    </div>
  );
}

function Project(props) {
  return (
    <div className="project">
      <div className="project-image">
        <a href={props.link} className="w-inline-block">
          <img src={props.img} alt="" className="p-img"></img>
        </a>
      </div>
      <div className="div-block">
        <h1 className="heading-2">{props.title}</h1>
        <p className="paragraph">{props.desc}</p>
        <div>
          <a
            href={props.git}
            className="btn-project"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="btn-link"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a href={props.link} className="btn-project">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="btn-link"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
