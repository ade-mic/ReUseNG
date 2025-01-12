import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroContainer">
      <div className="heroContent">
        <h1 className="heroHeading">Join The Movement</h1>
        <p className="heroText">
          Become a part of promoting sustainable living in Nigeria by selling or giving away your used items instead of discarding them.
          Your used item is someone else’s perfect find!
        </p>
      </div>
      <input type="text" placeholder="Search for items..." />
      <button>Search</button>
    </div>
  );
};

export default HeroSection;
