import React from "react";

import logo from "./facial-recognition.png";

import "./Navigation.css";

const Navigation = ({ display, onRouteChange }) => (
  <div className="navigation-container">
    <div>
      <img
        className="logo pointer grow"
        src={logo}
        alt="brain logo"
        height="90px"
      />
    </div>
    { display === "signin" ? 
    null : 
    <div className="sign-in pointer grow" onClick={() => onRouteChange('signin')}>Sign Out</div>}
  </div>
);

export default Navigation;
