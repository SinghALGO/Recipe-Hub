<<<<<<< HEAD
import React, { useState } from "react";
import AddRecipeForm from "../components/AddRecipeForm/AddRecipeForm";
import SearchForm from "../components/SearchForm/SearchForm";
import RecipeList from "../components/RecipeList/RecipeList";
import "./HomeRoute.css";
const HomeRoute = ({ recipes , clickHandler, addRecipeHandler, userId, handleSearch}) => {
  let recipesToShow = recipes;
  let myFlag = false;
  if (recipesToShow.length > 0 && recipesToShow[recipesToShow.length - 1] === "my_recipes") {
    recipesToShow = recipesToShow.slice(0, -1);
    myFlag = true;
  }
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddRecipeClick = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };
  return (
    <div className="home-page">
      <SearchForm handleSearch={handleSearch}/>
      {recipes.length > 0 && recipes[recipes.length - 1] === "my_recipes" && (
        <button onClick={handleAddRecipeClick} className="add-recipe-button">Add a new Recipe</button>
      )}
      <RecipeList recipes={recipesToShow} clickHandler={clickHandler} myFlag={myFlag} />
      {showAddForm && <AddRecipeForm onClose={handleCloseForm} addRecipeHandler={addRecipeHandler} userId={userId} purpose="add" recipeId="add"/>}
    </div>
  );
};




=======
import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RecipeList from "../components/RecipeList/RecipeList";
import "./HomeRoute.css";
const HomeRoute = ({ recipes , clickHandler}) => {
  return (
    <>
      <SearchForm />
      <RecipeList recipes={recipes} clickHandler={clickHandler}/>
    </>
  );
};

>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16
export default HomeRoute;
