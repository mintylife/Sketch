import React from "react";
import "./Text.css";
import EmoticonRating from "../components/EmoticonRating";

import { text } from "../assets/texts/12_разгневанных_судей.js";
import image from "../assets/images/Суд_присяжных.png";
import LevelsIcon from "../assets/icons/texts/levels.png";

import { AiOutlineDownCircle as OptionsIcon } from "react-icons/ai";
import { BiSliderAlt as LevelSelectionIcon } from "react-icons/bi";
import { FiHeadphones as VoiceOverTextIcon } from "react-icons/fi";
import { BsThreeDotsVertical as InformUsIcon } from "react-icons/bs";
import { BsBookmark as BookmarkIcon } from "react-icons/bs";

function Text() {
  var language = "Казахскому Языку";
  return (
    <div className="main-container">
      <div className="text-illustration-container">
        <img
          className="text-illustration"
          src={image}
          alt="this is car image"
        />
      </div>
      <div class="text-container">
        <div class="text-container-header">
          <div className="text-title">12 разгневанных судей</div>
          <div>
            <VoiceOverTextIcon className="voice-over-text-icon" />
            <img
              className="levels-icon"
              src={LevelsIcon}
              alt="this is car image"
            />
          </div>
        </div>
        <div className="text-author">Авторство: Баймурат Данияр </div>
        <div className="level-selection">
          <LevelSelectionIcon className="level-selection-icon" />
          Эта история адоптирована под разные уровни : ) Поменять с А2 на
          другой?
        </div>
        <div className="tags">Tags</div>
        <div className="text-body">{text}</div>

        <div class="text-footer">
          <div class="grouped-icons">
            <InformUsIcon className="inform-us-btn" />
            <BookmarkIcon />
          </div>
          <EmoticonRating />
        </div>
      </div>
    </div>
  );
}

export default Text;
