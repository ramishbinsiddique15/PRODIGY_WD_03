import React from "react";
import logo from ".././assets/img/logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handlePopup = () => {
    const popup = document.querySelector('.popup');
    popup.style.top = (popup.style.top === '-120%') ? '7%' : '-120%';
  }
  return (
    <>
      <nav>
        <div className="title">
          <img width={50} height={50} src={logo} alt="" />
          <h1>Tic Tac Toe</h1>
        </div>
        <div className="menu">
          <ul>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/pvp" style={{ textDecoration: 'none' }}>
              <li>Player vs Player</li>
            </NavLink>
            <NavLink to="/pvc" style={{ textDecoration: 'none' }}>
              <li>Player vs Computer</li>
            </NavLink>
          <svg
          onClick={handlePopup}
            className="hamburger"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
          >
            <path
              d="M4 5L20 5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12L20 12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 19L20 19"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          </ul>
        </div>
      </nav>
      <div className="popup">
      <ul>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <li onClick={handlePopup}>Home</li>
            </NavLink>
            <NavLink to="/pvp" style={{ textDecoration: 'none' }}>
              <li onClick={handlePopup}>Player vs Player</li>
            </NavLink>
            <NavLink to="/pvc" style={{ textDecoration: 'none' }}>
              <li onClick={handlePopup}>Player vs Computer</li>
            </NavLink>
      </ul>
      </div>
    </>
  );
};

export default Navbar;