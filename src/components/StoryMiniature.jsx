import React from "react";
import "./StoryMiniature.css";

import { FiHeadphones as VoiceOverTextIcon } from "react-icons/fi";
import { BsFileText as TextIcon } from "react-icons/bs";
import storyImage from "../assets/images/Суд_присяжных.png";

function StoryMiniature() {
  return (
    <div className="story-miniature">
      <div className="story-image"></div>
      <div className="story-intro">
        <div className="story-title">Красивая петля</div>
        <div className="story-description">
          Разве мода не об индивидуальности? Разве мода не про самовыражение
          через одежду?
        </div>
        <div className="story-tags">
          <TextIcon className="story-tag text-story" />
          <VoiceOverTextIcon className="story-tag audio-available" />
        </div>
      </div>
    </div>
  );
}

export default StoryMiniature;
