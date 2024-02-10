import React from "react";
import "./Navbar.css";
import CategoryList from "../CategoryList/CategoryList";
const Navbar = ({categories, categoryClickHandler}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logotext">
          <a href="#" className="navbar-brand" >
            RecipesHub
          </a>
        </div>

        <div className="navbar-links">
          <CategoryList categories={categories} categoryClickHandler={categoryClickHandler}/>
          <div className="navbar-link">Favorites</div>
          <div className="navbar-link">My Recipes</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
