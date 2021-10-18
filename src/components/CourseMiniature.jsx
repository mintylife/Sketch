import "./CourseMiniature.css";
import React from "react";
import { IoIosArrowForward as ArrowIcon } from "react-icons/io";

function CourseMiniature({ courseType }) {
  var dashedLine = "";
  if (courseType === "f0th-course") dashedLine = "dashed-line";
  else dashedLine = "";
  return (
    <div class={`${dashedLine}`}>
      <div className={`course-miniature ${courseType}`}>
        <div className="main-container">
          <div className="course-title">Основы казахского языка</div>
          <div className="course-subtitle">Бірінші деңгей</div>
          <div className="course-description">
            Если казахский язык похож на лего-конструктор, то на данном уровне
            мы знакомимся с теми самыми лего-блоками, из которых мы строим
            предложения. Основательное их изучение эффективнее зубрежки
            отдельных фраз и даже по времени займёт намного меньше, а уровня
            владения языком Вы достигнете более высокого.
          </div>
          <div className="course-other-info">
            <div className="course-level">A1</div>
            <div className="course-size">4 урока</div>
          </div>
        </div>
        <ArrowIcon className="learn-more-btn" />
      </div>
    </div>
  );
}

export default CourseMiniature;
