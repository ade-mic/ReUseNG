import React from "react";
import "../styles/CategoriesItem.css";

const CategoriesItem = ({ name, number, pictureLink }) => {
  return (
    <div className="categoriesCard">
      <img src={pictureLink} alt={name} className="cardImage" />
      <div className="cardContent">
        <h3 className="cardTitle">{name}</h3>
        <p className="cardText">
          {number} {number > 1 ? "items" : "item"}
        </p>
      </div>
    </div>
  );
};

export default CategoriesItem;
