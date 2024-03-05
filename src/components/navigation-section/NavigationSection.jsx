import React from "react";
import "./NavigationSection.scss";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

function NavigationSection() {
  return (
    <div className="nav-container section-container">
      <div className="logo-container">
        <img src={logo}></img>
      </div>
      <nav className="nav-links">
        <ul className="list-of-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/orderOnline">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationSection;
