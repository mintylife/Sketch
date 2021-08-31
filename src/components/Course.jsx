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
              <LikedByIcon /> <span classname="people-num">135</span>
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
            <li className="foryouif-bullet">ываорсифыовиаорфиыва</li>
          </ul>
        </div>
        <div className="highlights-block">
          <ul>
            <li id="certificate">
              <h4>
                СЕРТИФИКАТ <p>Вы получите сертификат</p>
              </h4>
            </li>
            <li id="online">
              <h4>
                ОНЛАЙН <p>Курс состоит на 100% из онлайн материала</p>
              </h4>
            </li>
            <li id="schedule">
              <h4>
                ГИБКИЙ ГРАФИК <p>Курс состоит на 100% из онлайн материала</p>
              </h4>
            </li>
            <li id="duration">
              <h4>
                ДЛИТЕЛЬНОСТЬ 7-8 МЕСЯЦЕВ
                <p>При 3-4 часах в неделю</p>
              </h4>
            </li>
          </ul>
        </div>
      </div>

      <div className="course-structure"></div>
    </div>
  );
};

export default Course;
