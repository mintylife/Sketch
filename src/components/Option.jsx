import "./Option.css";
import React from "react";
import { useState } from "react";

function Option({ text, id }) {
  const [clicked, setClicked] = useState("");
  const toggleClick = () => {
    if (clicked === "") {
      setClicked("clicked");
    } else {
      setClicked("");
    }
  };
  return (
    <div onClick={toggleClick} className={`option ${clicked}`} id={id}>
      #{text}
    </div>
  );
}

export default Option;
