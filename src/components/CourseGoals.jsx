import React from "react";
import "./CourseGoals.css";

export const CourseGoals = () => {
  return (
    <div className="course-goals">
      <div id="goals-title-container">
        <svg id="goals-icon" />
        <h1 id="goals-title">Цели</h1>
      </div>
      <div className="goals-container">
        <ol className="goals-list">
          <li className="goal">
            Понять механизмы работы казахского языка и его логику.
          </li>
          <li className="goal">
            Заложить хорошую основу знаний, которая в последующем поможет
            эффективней и легче изучать казахский язык.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CourseGoals;
