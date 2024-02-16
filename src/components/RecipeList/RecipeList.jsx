import RecipeListItem from "../RecipeListItem/RecipeListItem";
import "./RecipeList.css";
<<<<<<< HEAD
const RecipeList = ({ recipes, clickHandler, myFlag }) => {
  const recipeArray = recipes.map((recipe) => {
    const { id, img, name, cooking_time, ingredients,description, user_id } = recipe;
    const recipeObj = {
      id,
      img,
=======
const RecipeList = ({ recipes, clickHandler }) => {
  const recipeArray = recipes.map((recipe) => {
    const { id, image, name, cooking_time, ingredients,description, user_id } = recipe;
    const recipeObj = {
      id,
      image,
>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16
      name,
      cooking_time,
      ingredients,
      description,
<<<<<<< HEAD
      user_id,
      myFlag
=======
      user_id
>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16
    };
    return <RecipeListItem key={id} recipe={recipeObj} clickHandler={clickHandler} />;
  });
  return <ul className="recipe-list">{recipeArray}</ul>;
};
export default RecipeList;
