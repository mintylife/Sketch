import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo/logo-orange.svg";
import { BiHomeHeart as HomeIcon } from "react-icons/bi";
import { BsPersonFill as PersonalPageIcon } from "react-icons/bs";
import { IoMdNotifications as NotificationsIcon } from "react-icons/io";
import {
  MdEmail as EmailIcon,
  MdLanguage as LanguageIcon,
  MdSystemUpdateAlt,
} from "react-icons/md";
import { FiSettings as SettingsIcon } from "react-icons/fi";

// import { Button } from "./Button";

function Sidebar() {
  const [hovered, setHovered] = useState("inactive");
  const toggleHover = () => {
    if (hovered === "inactive") {
      setHovered("text");
    } else {
      setHovered("inactive");
    }
  };

  return (
    <>
      <nav
        className="sidebar"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div className="sidebar-links content-group">
          <div className="sidebar-item">
            <HomeIcon className="icon home" />
            <p className={hovered}>Home</p>
          </div>

          <div className="sidebar-item">
            <PersonalPageIcon className="icon profile" />
            <p className={hovered}>Profile</p>
          </div>

          <div className="sidebar-item">
            <span className="icon course" />
            <span className={hovered}>Course</span>
          </div>

          <div className="sidebar-item">
            <span className="icon podcasts" />
            <span className={hovered}>Podcsts</span>
          </div>

          <div className="sidebar-item">
            <span className="icon games" />
            <span className={hovered}>Games</span>
          </div>

          <div className="sidebar-item">
            <span className="icon videos" />
            <span className={hovered}>Videos</span>
          </div>

          <div className="sidebar-item">
            <span className="icon exercises" />
            <span className={hovered}>Exercises</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
