import React from "react";
import "./Courses.css";
import { AiOutlineDownCircle as OptionsIcon } from "react-icons/ai";

function Courses() {
  var language = "Казахскому Языку";
  return (
    <div className="courses-container">
      <div className="title">
        Курсы по <span className="learning-language">{language}</span>
        <OptionsIcon className="options-icon" />
      </div>

      <div className="courses-list">
        <div className="course-description"></div>
      </div>
    </div>
  );
}

export default Courses;
