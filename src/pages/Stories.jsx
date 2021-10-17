import React from "react";
import "./Stories.css";
import { AiOutlineDownCircle as OptionsIcon } from "react-icons/ai";
import { BiSliderAlt as FilterIcon } from "react-icons/bi";

import StoryMiniature from "../components/StoryMiniature";

function Stories() {
  var language = "Казахском Языке";
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-title">
          Рассказы и Подкасты на{" "}
          <span className="learning-language">{language}</span>
          <OptionsIcon className="options-icon" />
        </div>
        <div className="hero-section">
          <div id="hero-text">
            <div id="quote-author">Вольтер (Франсуа-Мари Аруэ)</div>
            <div id="quote">
              Читая авторов, которые хорошо пишут, привыкаешь хорошо говорить.
            </div>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="stories-list-section">
          <div className="stories-filter">
            <FilterIcon className="filter-icon" />
            Что хотите почитать или послушать?
          </div>
          <div className="stories-list">
            <StoryMiniature />
            <StoryMiniature />
            <StoryMiniature />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
