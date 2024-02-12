const express = require('express');
const router = express.Router();

const {
  addFavoriteRecipe,
  getAllRecipes,
  getRecipesByCategory,
  getFavoriteRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
  getCategoriesList 
} = require('../db/queries/recipe');

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

// Add a new favorite recipe 
router.post('/favorites', (req, res) => {
  const recipeData = req.body;
  const userId = req.session.user_id;
  const data = { ...recipeData, user_id: userId }
  addFavoriteRecipe(data)
    .then(newFavoriteRecipe => res.status(201).json(newFavoriteRecipe))
    .catch(error => {
      console.error('Error adding new Favorite recipe:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});


// Get favorite recipes
router.get('/favorites', (req, res) => {
  const userId = req.session.user_id;
  getFavoriteRecipes(userId)
    .then(favoriteRecipes => res.json(favoriteRecipes))
    .catch(error => {
      console.error('Error fetching favorite recipes:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Add a new recipe 
router.post('/', (req, res) => {
  const recipeData = req.body;
  const userId = req.session.user_id;
  const data = { ...recipeData, user_id: userId }
  addRecipe(data)
    .then(newRecipe => res.status(201).json(newRecipe))
    .catch(error => {
      console.error('Error adding new recipe:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Edit an existing recipe
router.put('/:id', (req, res) => {
  const recipeId = req.params.id;
  const userId = req.session.user_id;
  const updatedRecipeData = req.body;
  editRecipe(recipeId, updatedRecipeData, userId)
    .then(updatedRecipe => res.json(updatedRecipe))
    .catch(error => {
      console.error('Error editing recipe:', error);
      res.status(400).json({ error: 'bad request' });
    });
});

// Delete an existing recipe
router.delete('/:id', (req, res) => {
  const recipeId = req.params.id;
  const userId = req.session.user_id;
  deleteRecipe(recipeId, userId)
    .then(() => res.json({ message: 'Recipe deleted successfully' }))
    .catch(error => {
      console.error('Error deleting recipe:', error);
      res.status(403).json({ error: 'forbidden' });
    });
});

module.exports = router;