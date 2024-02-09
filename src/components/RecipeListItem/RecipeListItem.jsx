import "./RecipeListItem.css";
const RecipeListItem = ({ recipe, clickHandler }) => {
  const onRecipeClick = () => {
    clickHandler(recipe);
  };
  return (
    <section className="recipe-list__item" onClick={onRecipeClick}>
      <img className="recipe-list__image" src={recipe.image}></img>
      <div className="recipe-list__user-details">
        <p>{recipe.title}</p>
      </div>
    </section>
  );
};
export default RecipeListItem;
