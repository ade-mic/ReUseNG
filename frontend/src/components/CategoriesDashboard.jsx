import React from "react";
import CategoriesItem from "./CategoriesItem";
import "../styles/CategoriesDashboard.css";

const CategoriesDashboard = () => {
  const categories = [
    {
      name: "Technology",
      number: 100,
      pictureLink: "/categories-images/technology.png",
    },
    {
      name: "Fashion",
      number: 50,
      pictureLink: "/categories-images/fashion.png",
    },
    {
      name: "Furniture",
      number: 30,
      pictureLink: "/categories-images/furniture.png",
    },
    {
      name: "Books",
      number: 20,
      pictureLink: "/categories-images/books.png",
    },
    {
      name: "Home & Garden",
      number: 10,
      pictureLink: "/categories-images/home-garden.jpg",
    },
  ];

  return (
    <div className="categoriesDashboard">
      <h1>Item Categories</h1>
      <p>
        Items are listed for free or for sale across different categories and
        locations.
      </p>
      <div className="categoriesContainer">
        {categories.map((category, index) => (
          <CategoriesItem
            key={index}
            name={category.name}
            number={category.number}
            pictureLink={category.pictureLink}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesDashboard;
