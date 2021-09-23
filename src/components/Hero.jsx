import React from "react";
import "./Hero.css";
import { BiDonateHeart as LikedByIcon } from "react-icons/bi";
import { Button } from "@material-ui/core";
import {
  title,
  subtitle,
  description,
  numOfmodules,
  courseType,
} from "../assets/texts/textForCourseP.js";

export const Hero = () => {
  return (
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
  );
};

export default Hero;
