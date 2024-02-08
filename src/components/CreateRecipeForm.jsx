import React, { useState } from 'react';

function CreateRecipeForm({ handleClose }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a request to your backend server to save the new recipe
    // You can use fetch or any other HTTP library like axios
    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful creation
        console.log('New recipe created:', data);
        // You can redirect to the recipe page or update the UI to display the newly created recipe
        handleClose(); // Close the modal after successful submission
      })
      .catch((error) => {
        // Handle error
        console.error('Error creating recipe:', error);
      });
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
            <label>Title:</label>
            <input type="text" name="title" value={recipeData.title} onChange={handleChange} required />
          </div>
          <div>
            <label>Description:</label>
            <textarea name="description" value={recipeData.description} onChange={handleChange} required />
          </div>
          <div>
            <label>Ingredients:</label>
            <textarea name="ingredients" value={recipeData.ingredients} onChange={handleChange} required />
          </div>
          <div>
            <label>Instructions:</label>
            <textarea name="instructions" value={recipeData.instructions} onChange={handleChange} required />
          </div>
          <div>
            <label>Cooking Time:</label>
            <input type="text" name="cookingTime" value={recipeData.cookingTime} onChange={handleChange} required />
          </div>
          <div class="form-group">
            <label class="col-form-label mt-4" for="inputDefault">Title</label>
            <input type="text" className="form-control" placeholder="Title" id="inputDefault"/>
          </div>
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipeForm;
