import React from "react";
import "./Navbar.css";
import {
  FaHome,
  FaPlay,
  FaBook,
  FaRegBell,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img
            src={logo}
            size={50}
            style={{ height: "10px", width: "10px" }}
          ></img>
          <p className="logo-im">Project Zysec</p>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <FaHome className="icons" />
            <p>Home</p>
          </div>
          <div className="nav-item">
            <FaPlay className="icons" />
            <p>Play</p>
          </div>
          <div className="nav-item">
            <FaBook className="icons" />
            <p>Books</p>
          </div>
          <div className="nav-item">
            <AiFillDatabase className="icons" />
            <p>Library</p>
          </div>
          <div className="nav-item">
            <FaUserCircle className="icons" />
            <p>AI Experts</p>
          </div>
          <div className="nav-item">
          <div className="vertical-line"></div>
          </div>
          <div className="nav-item">
            <FaRegBell size={20} />
          </div>
          <div className="nav-item">
            <FaCog />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
