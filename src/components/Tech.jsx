import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "./Tech.css";

const Tech = () => {
  return (
    <>
      <div className="skills-and-videos">
        <div className="skills-container">
          {technologies.map((tech, index) => (
            <div className="skill-card" key={index}>
              <div className="icon-container">
                <img src={tech.icon} alt={tech.name} className="icon" />
              </div>
              <div className="skill-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
