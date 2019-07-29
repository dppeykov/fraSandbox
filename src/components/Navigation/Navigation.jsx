import React from "react";

import logo from "./facial-recognition.png";

import "./Navigation.css";

const Navigation = () => (
  <div className="navigation-container">
    <div>
      <img
        className="logo pointer grow"
        src={logo}
        alt="brain logo"
        height="90px"
      />
    </div>
    <div className="sign-in pointer grow">Sign In</div>
  </div>
);

export default Navigation;
