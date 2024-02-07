import useApplicationData from '../hooks/useApplicationData'



function RecipeCard() {

const { state } = useApplicationData();




return (
  <div className="container">
    <div className="row">
      {state.recipes.map((recipe) => (
        <div key={recipe.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={recipe.image} className="card-img-top" alt={recipe.title} />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">Ready in {recipe.readyInMinutes} minutes</p>
              <a href={recipe.sourceUrl} target="_blank" className="btn btn-primary">View Recipe</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default RecipeCard;