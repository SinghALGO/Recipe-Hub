import React from "react";
import "./RecipeDetailsModal.css";

const RecipeDetailsModal = ({ recipeData, clickHandler }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={clickHandler}>
            X
          </span>
          <h2>{recipeData[0].title}</h2>
          <img src={recipeData[0].image} alt={recipeData[0].title} />
          <p>Cook Time: {recipeData[0].cookTime} minutes</p>
          <h3>Ingredients:</h3>
        </div>
        <button>Save to Favorites</button>
      </div>
    </div>
  );
};

export default RecipeDetailsModal;
