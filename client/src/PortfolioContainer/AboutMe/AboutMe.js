import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import  './AboutMe.css'

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  
  
    const SCREEN_CONSTANT = {
    description:
      "I am a Full-Stack developer with a solid background in dentistry and customer service. Born in Brazil - Rio de Janeiro and raised in Portugal - Lisboa. Recently I have decided to change career paths and take on a new challenge and fully dedicate myself to Web development. Studied at Ironhack Tech Bootcamps in Lisbon, where I did the Web Development Bootcamp which covers several subjects such as Full Stack Web Development, Responsive Front-End Design and Back-End architecture.",
    highlights: {
      bullets: [
        "Front-end: React, JavaScript, HTML, CSS, Handlebars and Bootstrap.",
        "Back-end: MongoDB, Mongoose, SQL, Express.js, Node.js.",
        "Tools: Postman, Visual Studio Code, Git and GitHub.",
        "Methodologies: Agile/Scrum",
      ],
      heading: "What did I study?",
    },
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANT.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why choose me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANT.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span> {SCREEN_CONSTANT.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me</button>
              <a href="deborahResume.pdf" download="Déborah's Resume.pdf">
                <button className="btn highlighted-btn"> Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
