import RecipeListItem from "../RecipeListItem/RecipeListItem";
import "./RecipeList.css";
const RecipeList = ({ recipes, clickHandler }) => {
  const recipeArray = recipes.map((recipe) => {
    const { id, image, title, readyInMinutes, extendedIngredients } = recipe;
    const recipeObj = {
      id,
      image,
      title,
      cookTime: readyInMinutes,
      extendedIngredients,
    };
    return <RecipeListItem key={id} recipe={recipeObj} clickHandler={clickHandler} />;
  });
  return <ul className="recipe-list">{recipeArray}</ul>;
};
export default RecipeList;
