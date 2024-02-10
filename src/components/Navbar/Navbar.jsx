import React, { useState } from "react";
import "./Navbar.css";
import CategoryList from "../CategoryList/CategoryList";

const Navbar = ({ categories, categoryClickHandler }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    // Implement your login logic here, interact with backend, etc.
    // For demonstration purposes, setting isLoggedIn to true directly.
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here, interact with backend, etc.
    // For demonstration purposes, setting isLoggedIn to false directly.
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logotext">
          <a href="/" className="navbar-brand">
            RecipesHub
          </a>
        </div>

        <div className="navbar-links">
          <CategoryList categories={categories} categoryClickHandler={categoryClickHandler} />
          {isLoggedIn && <div className="navbar-link">Favorites</div>}
          {isLoggedIn && <div className="navbar-link">My Recipes</div>}
          {!isLoggedIn ? (
            <div className="navbar-link" onClick={handleLogin}>
              Login
            </div>
          ) : (
            <div className="navbar-link" onClick={handleLogout}>
              Logout
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
