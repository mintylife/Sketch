import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo/logo-orange.svg";
// import logo from "../assets/logo/logo-blue.svg";
// import logo from "../assets/logo/logo-purple.svg";

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
        <Link to="/landing">
          <div className="logo-container">
            <img className="logo" alt="logo" src={logo} />
            <h1 className={`logo-text ${hovered}`}>QT21</h1>
          </div>
        </Link>
        <div className="half-empty-space" />
        <div className="sidebar-menu content-group">
          <Link className="sidebar-item" to="/home">
            <HomeIcon className="icon home" />
            <p className={hovered}>Главная</p>
          </Link>

          <Link className="sidebar-item" to="/lesson">
            <PersonalPageIcon className="icon profile" />
            <p className={hovered}>Профиль</p>
          </Link>

          <Link className="sidebar-item" to="/courses">
            <span className="icon course" />
            <span className={hovered}>Курс</span>
          </Link>

          <Link className="sidebar-item" to="/course">
            <span className="icon podcasts" />
            <span className={hovered}>Course</span>
          </Link>

          <Link className="sidebar-item" to="/games">
            <span className="icon games" />
            <span className={hovered}>Игры</span>
          </Link>

          <Link className="sidebar-item" to="/videos">
            <span className="icon videos" />
            <span className={hovered}>Видео</span>
          </Link>

          <Link className="sidebar-item" to="/exercises">
            <span className="icon exercises" />
            <span className={hovered}>Упражнения</span>
          </Link>
        </div>
        <div className="empty-space" />

        <div className="sidebar-menu settings-group">
          <div className="sidebar-item">
            <NotificationsIcon className="icon notifications" />
            <p className={hovered}>Уведомления</p>
          </div>

          <div className="sidebar-item">
            <LanguageIcon className="icon language" />
            <p className={hovered}>Язык</p>
          </div>

          <div className="sidebar-item">
            <EmailIcon className="icon email" />
            <span className={hovered}>Обратная Связь</span>
          </div>

          <div className="sidebar-item">
            <SettingsIcon className="icon settings" />
            <span className={hovered}>Настройки</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
