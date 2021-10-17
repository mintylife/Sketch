import "./Filter.css";
import React from "react";

import { BiSliderAlt as FilterIcon } from "react-icons/bi";
import OptionIcon1 from "../assets/icons/filter/option1.png";
import OptionIcon2 from "../assets/icons/filter/option2.png";
import OptionIcon3 from "../assets/icons/filter/option3.png";
import OptionIcon4 from "../assets/icons/filter/option4.png";

function Filter() {
  return (
    <div className="filter">
      <div class="filter-text">
        <FilterIcon className="filter-icon" />
        Что хотите почитать или послушать?
      </div>
      <div className="filter-criterias">
        <div className="criteria">
          <img
            className="criteria-icon"
            src={OptionIcon1}
            alt="criteria 1 icon"
          />
          <div className="criteria-text">Тип</div>
          <div className="options">
            <div className="option" id="stories">
              #рассказы
            </div>
            <div className="option" id="podcasts">
              #подкасты
            </div>
            <div className="option" id="stories-with-audio">
              #рассказы_с_озвучкой
            </div>
            <div className="option" id="all">
              #всё
            </div>
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
            <div className="option" id="a2">
              #A2
            </div>
            <div className="option" id="b1">
              #B1
            </div>
            <div className="option" id="b2">
              #B2
            </div>
            <div className="option" id="c1">
              #C1
            </div>
            <div className="option" id="c2">
              #C2
            </div>
            <div className="option" id="for-everyone">
              #для_всех
            </div>
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
            <div className="option" id="new">
              #новое
            </div>
            <div className="option" id="popular">
              #популярное
            </div>
            <div className="option" id="seen">
              #просмотренное
            </div>
            <div className="option" id="not-seen">
              #непросмотренное
            </div>
            <div className="option" id="any">
              #любое
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
