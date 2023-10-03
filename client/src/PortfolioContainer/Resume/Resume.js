
import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  
  const resumeBullets = [
    { label: "Education" },
    { label: "Work History"},
    { label: "Projects" },
  ];

  
  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      description:
        " A personal portfolio website to showcase all my details and projects at one place.",
      subheading: "React.js, bootstrap.",
    },
    {
      title: "Fly, ducks...Fly!",
      description:
        "A Canvas 2D Game that consists in a target shooting game with some bonus features, inspired in Duck Hunt by nintendo®.",
      subheading: "HTML, CSS and JavaScrpit ",
    },
    {
      title: "reMeals",
      description:
        "It is a platform that helps you plan your weekly meals, see recipes and create new ones. Every user has its own profile and is able to modify it and also save its planner.",
      subheading:
        "Handlebars, Bootstrap, pure CSS, JavaScript, MongoDB, Cloudinary, and Cyclic.",
    },
    {
      title: "Buyable",
      description:
        "Buyable is a shopping platform that allow users to buy and sell products, have a profile, have a wishlist, a shopping cart that allows to see the bought products and also leave reviews (comments and ratings).",
      subheading:
        " React.js, React-Bootstrap, Cyclic, Netlify, Cloudinary and MongoDB Atlas.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Ironhack Tech Bootcamps Lisbon"}
        subHeading={"Web Development bootcamp"}
        fromDate={"2023"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"Highschool"}
        subHeading={"Languages and humanities"}
        fromDate={2013}
        toDate={2016}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Jaime Freitas Dental Clinic"}
          subHeading={"Receptionist"}
          fromDate={2021}
          toDate={2022}
        />
        <ResumeHeading
          heading={"Santa Madalena Dental Clinic"}
          subHeading={"Receptionist & Dental Nurse"}
          fromDate={2019}
          toDate={2021}
        />
        <ResumeHeading
          heading={"José de Mello Saúde CUF"}
          subHeading={"Dental Nurse"}
          fromDate={2016}
          toDate={2020}
        />
      </div>
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subheading}
          description={projectsDetails.description}
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
