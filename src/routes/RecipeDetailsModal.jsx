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
          <h2>{recipeData[0].name}</h2>
          <div className="modal-img-details">
             <img src={recipeData[0].image} alt={recipeData[0].title} />
             <div className="modal-para">
              <h3>Cook time:</h3>
               <p>{recipeData[0].cooking_time} minutes</p>
          <h3>Ingredients:</h3>
          <p>{recipeData[0].ingredients}</p>
          <h3>Instructions:</h3>
          <p>{recipeData[0].description}</p> 
             </div>
          </div>
         
          
        </div>
        <div className="modal-buttons">
           <button>Save to Favorites</button>
           <button>Copy this template</button>
        </div>
       
      </div>
    </div>
  );
};

export default RecipeDetailsModal;
