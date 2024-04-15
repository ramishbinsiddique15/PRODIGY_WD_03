import React from "react";
import "./Home.css";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <div className="pvp">
        <div className="logo-container">
          <img className="logo" width={50} height={50} src={logo} alt="" />
        </div>
        <div className="player">
          <FontAwesomeIcon className="usericon" icon={faUserAlt} />
          <div className="box">
            <div className="sign">O</div>
            <div className="name">Player1</div>
          </div>
        </div>
        <div className="vs">VS</div>
        <div className="player">
          <FontAwesomeIcon className="usericon" icon={faUserAlt} />
          <div className="box">
            <div className="sign">X</div>
            <div className="name">Player2</div>
          </div>
        </div>
        <NavLink to="/pvp">
          <button className="play">Play Now</button>
        </NavLink>
      </div>
      <div className="pvp">
        <div className="logo-container">
          <img className="logo" width={50} height={50} src={logo} alt="" />
        </div>
        <div className="player">
          <FontAwesomeIcon className="usericon" icon={faUserAlt} />
          <div className="box">
            <div className="sign">O</div>
            <div className="name">Player</div>
          </div>
        </div>
        <div className="vs">VS</div>
        <div className="player">
          <FontAwesomeIcon className="usericon" icon={faDesktop} />
          <div className="box">
            <div className="sign">X</div>
            <div className="name">Computer</div>
          </div>
        </div>
       <NavLink to='/pvc'> <button className="play">Play Now</button></NavLink>
      </div>
    </div>
  );
};

export default Home;
