import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Sidebar.css";
// import { Button } from "./Button";

function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <span className="icon home" />
        <span className="icon profile" />
        <span className="icon course" />
        <span className="icon microphone" />
        <span className="icon games" />
        <span className="icon videos" />
        <span className="icon exercises" />
      </nav>
    </>
  );
}

export default Sidebar;
