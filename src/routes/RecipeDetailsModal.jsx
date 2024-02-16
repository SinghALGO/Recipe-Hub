<<<<<<< HEAD
import React, { useState } from "react";
import "./RecipeDetailsModal.css";
import AddRecipeForm from "../components/AddRecipeForm/AddRecipeForm";

const RecipeDetailsModal = ({ recipeData, clickHandler, userId, favRecipes, remFavHandler, addFavHandler, recipeDeleteHandler, editRecipeHandler,saveNonLoggedFavHandler, removeNonLoggedFavHandler,publicFavs}) => {
  let favRecipeIds;
  if(userId !== ""){
    favRecipeIds = favRecipes.map(recipe => recipe.id);
  }
  else{
    favRecipeIds = publicFavs;
  }
   const favFlag = favRecipeIds.includes(recipeData[0].id);
   const myRecipe = recipeData[0].user_id===userId;
  const [showEditForm, setShowEditForm] = useState(false);
  const [showModal, setShowModal] = useState(true); 
   const removeFavHandler = () => {
        remFavHandler({userId,recipeData:recipeData[0].id});
   }
   const saveFavHandler = () => {
     addFavHandler({userId,recipeData:recipeData[0].id});
   }
   const savNonLoggedFavHandler = () => {
      saveNonLoggedFavHandler(recipeData[0].id);
   }
   const remNonLoggedFavHandler = () => {
      removeNonLoggedFavHandler(recipeData[0].id);
   }
   const onRecipeDelete = () => {
    recipeDeleteHandler(recipeData[0].id);
    setShowModal(false); 
   }
  const handleEditClick = () => {
    setShowEditForm(true);
   setShowModal(false); 
    
  };
   const handleCloseForm = () => {
    setShowEditForm(false);
  };
  return (  <>
    {showModal && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={clickHandler}>
              X
            </span>
            <h2>{recipeData[0].name}</h2>
            <div className="modal-img-details">
               <img src={recipeData[0].img} alt={recipeData[0].title} />
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
              {userId !== "" && (
              <>
                {favFlag ? (
                  <button onClick={removeFavHandler}>Remove from Favorites</button>
                ) : (
                  <button onClick={saveFavHandler}>Save to Favorites</button>
                )}
                {/* {!myRecipe && <button>Copy this template</button>} */}
              </>
            )}
            {userId ===""&&(
            <>
            {favFlag?(
            <button onClick={remNonLoggedFavHandler}>Remove from Favorites</button>
            ):(<button onClick={savNonLoggedFavHandler}>Save to Favorites</button>
            )}</>) }
            {recipeData[1]===true?<><button onClick={handleEditClick}>Edit</button><button onClick={onRecipeDelete}>Delete</button></>:<></>}
          </div>
        </div>
      </div>
    )}
    {showEditForm && <AddRecipeForm onClose={handleCloseForm} purpose="edit" userId={userId} recipeId={recipeData[0].id} editRecipeHandler={editRecipeHandler}/>}
    </>
=======
import React from "react";
import "./RecipeDetailsModal.css";

const RecipeDetailsModal = ({ recipeData, clickHandler, userId, favRecipes}) => {
   const favRecipeIds = favRecipes.map(recipe => recipe.id);
   const favFlag = favRecipeIds.includes(recipeData[0].id);
   const myRecipe = recipeData[0].user_id===userId;
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
            {userId !== "" && (
            <>
              {favFlag ? (
                <button>Remove from Favorites</button>
              ) : (
                <button>Save to Favorites</button>
              )}
              {!myRecipe && <button>Copy this template</button>}
            </>
          )}
        </div>
       
      </div>
    </div>
>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16
  );
};

export default RecipeDetailsModal;
