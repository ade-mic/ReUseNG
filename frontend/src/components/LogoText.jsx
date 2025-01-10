import React from "react";
import logo from "../assets/ReUseLogo.svg";
import "../styles/LogoText.css";

const LogoText = () => {
  return (
    <div className="logo">
      <img src={logo} alt="ReUse Logo" />
      <h5 className="logoText">ReUseNG</h5>
    </div>
  );
}

export default LogoText;