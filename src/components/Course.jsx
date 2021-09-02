import React from "react";
import "./Course.css";
import { BiDonateHeart as LikedByIcon } from "react-icons/bi";
import { Button } from "@material-ui/core";
import {
  title,
  subtitle,
  description,
  numOfmodules,
  courseType,
} from "../assets/texts/textForCourseP.js";

export const Course = (props) => {
  return (
    <div className="course-container">
      <div className="header">
        <div id="rectangle">
          <div className="overview">
            <div className="course-title">{title}</div>
            <div className="second-title">{subtitle}</div>
            <div className="heart-ranking">
              <LikedByIcon />
              <span className="people-num">135</span>
            </div>
            <p className="intro-block">{description}</p>
            <div className="info-buttons">
              <Button variant="contained" id="module-num">
                6 курсов
              </Button>
              <Button variant="contained" id="course-type">
                F0TH
              </Button>
              <Button variant="contained" id="video-num">
                13 видео
              </Button>
            </div>
            <Button variant="contained" id="enroll-button">
              Начать курс
            </Button>
          </div>
        </div>
      </div>

      <div className="course-information">
        <div className="bulletpoints-block">
          <h4 id="foryouif-title">Этот курс для Вас, если : </h4>
          <ul className="bulletpoints-list">
            <li className="foryouif-bullet">
              почти или вообще не говорите по-казахски, хотя возможно знаете
              элементарную грамматику и имеете ограниченный словарный запас;
            </li>
            <li className="foryouif-bullet">
              боитесь делать ошибки, стесняетесь акцента и/или своего незнания
              языка;
            </li>
            <li className="foryouif-bullet">
              хотите основательно подойти к изучению и, возможно, найти пробелы
              в уже имеющихся знаниях.
            </li>
          </ul>
        </div>
        <div className="highlights-block">
          <div className="highlight" id="certificate">
            <span className="highlight-icon" id="certificate-icon" />
            <div className="highlight-text">
              <h4>Сертификат</h4>
              <p>При успешном окончании курса Вы получите сертификат</p>
            </div>
          </div>
          <div className="highlight" id="online">
            <span className="highlight-icon" id="online-icon" />
            <div className="highlight-text">
              <h4>Онлайн</h4>
              <p>Весь материал доступен онлайн</p>
            </div>
          </div>
          <div className="highlight" id="schedule">
            <span className="highlight-icon" id="schedule-icon" />
            <div className="highlight-text">
              <h4>Гибкий график</h4>
              <p>Учитесь, когда и где хотите</p>
            </div>
          </div>
          <div className="highlight" id="duration">
            <span className="highlight-icon" id="duration-icon" />
            <div className="highlight-text">
              <h4>Длительность 7-8 месяцев</h4>
              <p>При 3-4 часах обучения в неделю</p>
            </div>
          </div>
        </div>
      </div>

      <div className="course-structure"></div>
    </div>
  );
};

export default Course;
