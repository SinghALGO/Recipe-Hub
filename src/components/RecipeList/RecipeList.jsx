import RecipeListItem from "../RecipeListItem/RecipeListItem";
import "./RecipeList.css";
const RecipeList = ({ recipes, clickHandler }) => {
  const recipeArray = recipes.map((recipe) => {
    const { id, image, name, cooking_time, ingredients,description, user_id } = recipe;
    const recipeObj = {
      id,
      image,
      name,
      cooking_time,
      ingredients,
      description,
      user_id
    };
    return <RecipeListItem key={id} recipe={recipeObj} clickHandler={clickHandler} />;
  });
  return <ul className="recipe-list">{recipeArray}</ul>;
};
export default RecipeList;
