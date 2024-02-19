import React from "react";
import logo from "../../assets/images/Logo.svg";

function NavigationSection() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={logo}></img>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/home/">Home</a>
          </li>
          <li>
            <a href="/about/">About</a>
          </li>
          <li>
            <a href="/menu/">Menu</a>
          </li>
          <li>
            <a href="/reservations/">Reservations</a>
          </li>
          <li>
            {" "}
            Aw3
            <a href="/orderOnline/">Order Online</a>
          </li>
          <li>
            <a href="/login/">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationSection;
