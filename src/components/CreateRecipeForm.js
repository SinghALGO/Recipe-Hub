import React, { useState } from 'react';
import useApplicationData  from '../hooks/useApplicationData';

function CreateRecipeForm({ handleClose }) {
  const { handleAddRecipe } = useApplicationData();

  const [recipeData, setRecipeData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    cookingTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Send a request to your backend server to save the new recipe
  //   // You can use fetch or any other HTTP library like axios
  //   fetch('/api/recipes', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(recipeData)
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle successful creation
  //       console.log('New recipe created:', data);
  //       // You can redirect to the recipe page or update the UI to display the newly created recipe
  //       handleClose(); // Close the modal after successful submission
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error('Error creating recipe:', error);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddRecipe(); // Call the handleAddRecipe function to add the new recipe
    handleClose(); // Close the modal after successful submission
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Create New Recipe</h5>
        <button type="button" className="btn-close" onClick={handleClose}></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={recipeData.title} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={recipeData.description} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea id="ingredients" name="ingredients" value={recipeData.ingredients} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="instructions">Instructions:</label>
            <textarea id="instructions" name="instructions" value={recipeData.instructions} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="cookingTime">Cooking Time:</label>
            <input type="text" id="cookingTime" name="cookingTime" value={recipeData.cookingTime} onChange={handleChange} required />
          </div>

          <div class="form-group">
            <label class="col-form-label mt-4" for="inputDefault">Title</label>
            <input type="text" className="form-control" placeholder="Title" id="inputDefault" />
          </div>
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipeForm;
