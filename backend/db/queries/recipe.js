const db = require('../db/connection');

// Get all recipes
const getAllRecipes = () => {
  return db.query('SELECT * FROM recipes')
    .then(result => result.rows)
    .catch(error => {
      console.error('Error fetching all recipes:', error);
      throw error;
    });
};

// Get recipes by category ID
const getRecipesByCategory = (categoryId) => {
  return db.query('SELECT * FROM recipes WHERE category_id = $1', [categoryId])
    .then(result => result.rows)
    .catch(error => {
      console.error('Error fetching recipes by category ID:', error);
      throw error;
    });
};

// Get favorite recipes
const getFavoriteRecipes = (id) => {
  return db.query(`SELECT * FROM favorite_recipe JOIN recipe ON favorite_recipe.recipe_id = recipe.recipe_id WHERE users_id='${id}';`) 
    .then(result => result.rows)
    .catch(error => {
      console.error('Error fetching favorite recipes:', error);
      throw error;
    });
};

// Add a new recipe
const addRecipe = (recipeData) => {
  const { name, description, categoryId } = recipeData;
  return db.query('INSERT INTO recipes (name, description, category_id) VALUES ($1, $2, $3) RETURNING *', [name, description, categoryId])
    .then(result => result.rows[0])
    .catch(error => {
      console.error('Error adding new recipe:', error);
      throw error;
    });
};

// Get categories list
const getCategoriesList = () => {
  return db.query('SELECT * FROM categories')
    .then(result => result.rows)
    .catch(error => {
      console.error('Error fetching categories list:', error);
      throw error;
    });
};


// Edit an existing recipe
const editRecipe = (recipeId, updatedRecipeData) => {
  const { name, description, categoryId } = updatedRecipeData;
  return db.query('UPDATE recipes SET name = $1, description = $2, category_id = $3 WHERE id = $4 RETURNING *', [name, description, categoryId, recipeId])
    .then(result => {
      if (result.rowCount === 0) {
        throw new Error('Recipe not found');
      }
      return result.rows[0];
    })
    .catch(error => {
      console.error('Error editing recipe:', error);
      throw error;
    });
};

// Delete a recipe
const deleteRecipe = (recipeId) => {
  return db.query('DELETE FROM recipes WHERE id = $1 RETURNING *', [recipeId])
    .then(result => {
      if (result.rowCount === 0) {
        throw new Error('Recipe not found');
      }
    })
    .catch(error => {
      console.error('Error deleting recipe:', error);
      throw error;
    });
};

module.exports = {
  getAllRecipes,
  getRecipesByCategory,
  getFavoriteRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
  getCategoriesList
};