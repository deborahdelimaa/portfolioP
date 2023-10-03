import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://m.facebook.com/deborahdelima939">
                <i className="fa fa-facebook-square"/>
              </a>

              <a href="www.linkedin.com/in/deborahdelima">
                <i className="fa fa-instagram"/>
              </a>

              <a href="www.linkedin.com/in/deborahdelima

">
                <i className="fa fa-linkedin"/>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Déborah</span>{" "}
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer ",
                    1000,
                    "MERN Stack Developer ",
                    1000,
                    "Full Stack Developer ",
                    1000,
                    "React Developer ",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and backend
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
          <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="deborahResume.pdf" download="Déborah's Resume.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
