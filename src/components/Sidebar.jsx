import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo/logo-orange.svg";
import { AiOutlineHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { MdEmail, MdLanguage } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

// import { Button } from "./Button";

function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <img className="logo" alt="logo" src={logo} />
        <ul className="content-links">
          <AiOutlineHome className="icon home" />
          <BsPersonFill className="icon profile" />
          <span className="icon course" />
          <span className="icon podcasts" />
          <span className="icon games" />
          <span className="icon videos" />
          <span className="icon exercises" />
        </ul>
        <ul className="settings-links">
          <IoMdNotifications className="icon notifications" />
          <MdEmail className="icon email" />
          <MdLanguage className="icon language" />
          <FiSettings className="icon settings" />
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
