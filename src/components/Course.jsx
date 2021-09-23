import "./Course.css";
import React from "react";
import { Hero } from "./Hero.jsx";
import { Module } from "./Module.jsx";
import CourseInfo from "./CourseInfo";
import CourseGoals from "./CourseGoals";

export const Course = (props) => {
  return (
    <div className="course-container">
      <Hero />
      <CourseInfo />
      <CourseGoals />

      <div className="curriculum">
        <h4 id="curriculum-title">Изучим:</h4>
        <div className="module-list">
          <Module indexNumber={1} />
          <Module indexNumber={2} />
        </div>
      </div>
    </div>
  );
};

export default Course;
