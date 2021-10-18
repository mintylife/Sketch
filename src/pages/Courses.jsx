import "./Courses.css";
import React from "react";

import CourseMiniature from "../components/CourseMiniature";

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
        <div className="course-description">
          <CourseMiniature courseType="f0th-course" />
          <CourseMiniature courseType="a-course" />
          <CourseMiniature courseType="a-course" />
          <CourseMiniature courseType="b-course" />
          <CourseMiniature courseType="b-course" />
          <CourseMiniature courseType="c-course" />
          <CourseMiniature courseType="c-course" />
        </div>
      </div>
    </div>
  );
}

export default Courses;
