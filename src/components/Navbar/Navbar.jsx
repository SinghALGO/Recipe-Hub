import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logotext">
          <a href="#" className="navbar-brand">
            RecipesHub
          </a>
        </div>

        <div className="navbar-links">
          <div className="navbar-link">Category1</div>
          <div className="navbar-link">Category2</div>
          <div className="navbar-link">Category3</div>
          <div className="navbar-link">Favorites</div>
          <div className="navbar-link">My Recipes</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
