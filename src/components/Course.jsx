import React from "react";
import "./Course.css";
import { BiDonateHeart as LikedByIcon } from "react-icons/bi";

export const Course = (props) => {
  var description =
    "Полноценный курс казахского, в котором Вы начинаете с азов и постепенно поднимаетесь до  продвинутого уровня владения казахским. Пройдя данный курс, Вы будете комфортно себя чувствовать и сможете свободно выражать свои мысли, а также понимать других на разоличные темы. ";

  var numOfmodules = 6;
  var courseType = "F0TH";
  var numOfVideos = 6;

  var audience = [
    "почти или вообще не говорите по-казахски, хотя возможно знаете элементарную грамматику и имеете ограниченный словарный запас;",
    "боитесь делать ошибки, стесняетесь акцента и/или своего незнания языка;",
    "ываорсифыовиаорфиыва;",
  ];

  var duration = "";

  var courseGoals = [
    "Свободно выражать свои мысли, а также хорошо понимать других в разного рода ситуациях: повседневных, академических, профессиональных и даже литературных.",
    "Начать и не бросить свое обучение!",
  ];

  var courseStructure = "";

  return (
    <div className="course-container">
      <div className="header">
        <div id="rectangle">
          <div className="overview">
            <div className="course-title">Компас. Логика языка.</div>
            <div className="second-title">Бірінші деңгей</div>
            <div className="heart-ranking">
              <LikedByIcon /> <span classname="people-num">135</span>
            </div>
            <div className="intro-block">
              Полноценный курс казахского, в котором Вы начинаете с азов и
              постепенно поднимаетесь до продвинутого уровня владения казахским.
              Пройдя данный курс, Вы будете комфортно себя чувствовать и сможете
              свободно выражать свои мысли, а также понимать других на
              разоличные темы.
            </div>
            <div className="info-buttons">
              <button id="module-num">6 курсов</button>
              <button id="course-type">F0TH</button>
              <button id="module-num">13 видео</button>
            </div>
            <button className="enroll-button">Начать курс</button>
          </div>
        </div>
      </div>

      <div className="course-information">
        <div className="foryouif-block"></div>
        <div className="bulletpoints-block"></div>
        <div className="goals-block"></div>
      </div>

      <div className="course-structure"></div>
    </div>
  );
};

export default Course;
