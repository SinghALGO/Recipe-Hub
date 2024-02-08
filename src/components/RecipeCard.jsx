// import useApplicationData from '../hooks/useApplicationData'



// function RecipeCard() {

// const { state } = useApplicationData();




// return (
//   <div className="container">
//     <div className="row">
//       {state.recipes.map((recipe) => (
//         <div key={recipe.id} className="col-md-4 mb-4">
//           <div className="card">
//             <img src={recipe.image} className="card-img-top" alt={recipe.title} />
//             <div className="card-body">
//               <h5 className="card-title">{recipe.title}</h5>
//               <p className="card-text">Ready in {recipe.readyInMinutes} minutes</p>
//               <p className="card-text">Ready in {recipe.extendedIngredients} minutes</p>
//               <a href={recipe.sourceUrl} target="_blank" className="btn btn-primary">View Recipe</a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );
// }

// export default RecipeCard;

// return (
//   <div className="container">
//     <div className="row">
//       {state.recipes.map((recipe) => (
//         <div key={recipe.id} className="col-md-4 mb-4">
//           <div className="card">
//             <img src={recipe.image} className="card-img-top" alt={recipe.title} />
//             <div className="card-body">
//               <h5 className="card-title">{recipe.title}</h5>
//               <p className="card-text">Ready in {recipe.readyInMinutes} minutes</p>
//               <h6 className="card-subtitle mb-2 text-muted">Ingredients:</h6>
//               <ul className="list-group">
//                 {recipe.extendedIngredients.map((ingredient, index) => (
//                   <li key={index} className="list-group-item">{ingredient.original}</li>
//                 ))}
//               </ul>
//               <h6 className="card-subtitle mb-2 text-muted">Steps:</h6>
//               <ol className="list-group">
//                 {recipe.analyzedInstructions[0].steps.map((step, index) => (
//                   <li key={index} className="list-group-item">{step.step}</li>
//                 ))}
//               </ol>
//               <a href={recipe.sourceUrl} target="_blank" rel="noreferrer" className="btn btn-primary">View Recipe</a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )

import useApplicationData from '../hooks/useApplicationData';

function RecipeCard() {
  const { state } = useApplicationData();

  return (
    <div className="container">
      <div className="row">
        {state.recipes && state.recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">Ready in {recipe.readyInMinutes} minutes</p>
                <h6 className="card-subtitle mb-2 text-muted">Ingredients:</h6>
                <ul className="list-group list-group-light">
                  {recipe.extendedIngredients.map((ingredient, index) => (
                    <li key={index} className="list-group-item">{ingredient.original}</li>
                  ))}
                </ul>
                <h6 className="card-subtitle mb-2 text-muted">Steps:</h6>
                <ol className="list-group">
                  {recipe.analyzedInstructions[0].steps.map((step, index) => (
                    <li key={index} className="list-group-item">{step.step}</li>
                  ))}
                </ol>
                <a href={recipe.sourceUrl} target="_blank" rel="noreferrer" className="btn btn-primary">View Recipe</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeCard;