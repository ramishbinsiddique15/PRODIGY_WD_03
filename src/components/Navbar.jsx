import React from "react";
import logo from ".././assets/img/logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="title">
          <img width={50} height={50} src={logo} alt="" />
          <h1>Tic Tac Toe</h1>
        </div>
        <div className="menu">
          <ul>
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/pvp"><li>Player vs Player</li></NavLink>
          <NavLink to="/pvc"><li>Player vs Computer</li></NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
