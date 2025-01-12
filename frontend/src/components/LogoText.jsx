import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ReUseLogo.svg";
import "../styles/LogoText.css";

const LogoText = () => {
  return (
    <Link to={'/'} className="logo">
      <img src={logo} alt="ReUse Logo" />
      <h5 className="logoText">ReUseNG</h5>
    </Link>
  );
}

export default LogoText;