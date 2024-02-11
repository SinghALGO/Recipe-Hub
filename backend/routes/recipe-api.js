const express = require('express');
const router = express.Router();

const {
  getAllRecipes,
  getRecipesByCategory,
  getFavoriteRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
  getCategoriesList
} = require("../db/database");

// Get all recipes
router.get('/', (req, res) => {
  getAllRecipes()
    .then(recipes => res.json(recipes))
    .catch(error => {
      console.error('Error fetching all recipes:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Get all categories
router.get('/categories', (req, res) => {
  getCategoriesList()
    .then(categories => res.json(categories))
    .catch(error => {
      console.error('Error fetching all categories:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Get recipes by category ID
router.get('/category/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  getRecipesByCategory(categoryId)
    .then(recipes => res.json(recipes))
    .catch(error => {
      console.error('Error fetching recipes by category ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

//TODO: create add fav recipe endpoint

// Get favorite recipes
//TODO: add user auth
router.get('/favorites/:userId', (req, res) => {
  getFavoriteRecipes()
    .then(favoriteRecipes => res.json(favoriteRecipes))
    .catch(error => {
      console.error('Error fetching favorite recipes:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Add a new recipe 
//TODO: add user auth
router.post('/', (req, res) => {
  const recipeData = req.body;
  addRecipe(recipeData)
    .then(newRecipe => res.status(201).json(newRecipe))
    .catch(error => {
      console.error('Error adding new recipe:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Edit an existing recipe
//TODO: add user auth
router.put('/:id', (req, res) => {
  const recipeId = req.params.id;
  const updatedRecipeData = req.body;
  editRecipe(recipeId, updatedRecipeData)
    .then(updatedRecipe => res.json(updatedRecipe))
    .catch(error => {
      console.error('Error editing recipe:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Delete an existing recipe
//TODO: add user auth
router.delete('/:id', (req, res) => {
  const recipeId = req.params.id;
  deleteRecipe(recipeId)
    .then(() => res.json({ message: 'Recipe deleted successfully' }))
    .catch(error => {
      console.error('Error deleting recipe:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;