import "./RecipeListItem.css";
<<<<<<< HEAD
const RecipeListItem = ({ recipe, clickHandler}) => {
=======
const RecipeListItem = ({ recipe, clickHandler }) => {
>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16
  const onRecipeClick = () => {
    clickHandler(recipe);
  };
  return (
    <section className="recipe-list__item" onClick={onRecipeClick}>
<<<<<<< HEAD
      <img className="recipe-list__image" src={recipe.img}></img>
=======
      <img className="recipe-list__image" src={recipe.image}></img>
>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16
      <div className="recipe-list__user-details">
        <p>{recipe.name}</p>
        <p>Cooking time: {recipe.cooking_time} mins</p>
      </div>
    </section>
  );
};
export default RecipeListItem;
