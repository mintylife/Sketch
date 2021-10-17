import "./Filter.css";
import React from "react";
import { useState } from "react";

import Option from "./Option";

import { BiSliderAlt as FilterIcon } from "react-icons/bi";
import OptionIcon1 from "../assets/icons/filter/option1.png";
import OptionIcon2 from "../assets/icons/filter/option2.png";
import OptionIcon3 from "../assets/icons/filter/option3.png";
import OptionIcon4 from "../assets/icons/filter/option4.png";

function Filter() {
  const [hovered, setHovered] = useState("inactive");
  const toggleHover = () => {
    if (hovered === "inactive") {
      setHovered("");
    } else {
      setHovered("inactive");
    }
  };

  return (
    <div
      className="filter"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div class="filter-text">
        <FilterIcon className="filter-icon" />
        Что хотите почитать или послушать?
      </div>
      <div className={`filter-criterias ${hovered}`}>
        <div className="criteria">
          <img
            className="criteria-icon"
            src={OptionIcon1}
            alt="criteria 1 icon"
          />
          <div className="criteria-text">Тип</div>
          <div className="options">
            <Option text="рассказы" id="stories" />
            <Option text="подкасты" id="podcasts" />
            <Option text="рассказы_с_озвучкой" id="stories-with-audio" />
            <Option text="все" id="all" />
          </div>
        </div>

        <div className="criteria">
          <img
            className="criteria-icon"
            src={OptionIcon3}
            alt="criteria 2 icon"
          />
          <div className="criteria-text">Уровень</div>
          <div className="options">
            <Option text="A2" id="a2" />
            <Option text="B1" id="b1" />
            <Option text="B2" id="b2" />
            <Option text="C1" id="c1" />
            <Option text="C2" id="c2" />
            <Option text="для_всех" id="for-everyone" />
          </div>
        </div>

        <div className="criteria">
          <img
            className="criteria-icon"
            src={OptionIcon4}
            alt="criteria 3 icon"
          />
          <div className="criteria-text">Категория</div>
          <div className="options">
            <Option text="новое" id="new" />
            <Option text="популярное" id="popular" />
            <Option text="просмотренное" id="seen" />
            <Option text="непросмотренное" id="not-seen" />
            <Option text="любое" id="any" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
