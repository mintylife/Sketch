import React from "react";
import "./Module.css";
import { useState } from "react";
import {
  MdExpandMore as ExpandMoreIcon,
  MdExpandLess as ShrinkIcon,
} from "react-icons/md";

export const Module = ({ indexNumber }) => {
  const [clicked, setClicked] = useState("");
  const toggleClick = () => {
    if (clicked === "") {
      setClicked("expanded");
    } else {
      setClicked("");
    }
  };

  return (
    <div className="module">
      <div className="index-container">
        <div className="circle">
          <h4 className="circle-number">{indexNumber}</h4>
        </div>
      </div>
      <div className={`tab ${clicked}`}>
        <div className="tab-summary">
          Алфавит{" "}
          <ExpandMoreIcon
            className={`more-icon ${clicked}`}
            onClick={toggleClick}
          />
          <ShrinkIcon
            className={`shrink-icon ${clicked}`}
            onClick={toggleClick}
          />
        </div>
        <div className={`tab-details ${clicked}`}>
          Окончания в казахском языке - это отдельный мир и большое путешествие!
          Следует отметить, что окончания являются одной из важных тем в нашем
          невероятном языке. Поэтому приглашаем Вас в интересное приключение!
        </div>
      </div>
    </div>
  );
};

export default Module;
