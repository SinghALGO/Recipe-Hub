const db = require('../connection');

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

// add favorite recipes
const addFavoriteRecipe = (id) => {
  return db.query('INSERT INTO favorite_recipe (recipe_id, user_id) VALUES ($1, $2) RETURNING *', [recipe_id, user_id]) 
    .then(result => result.rows)
    .catch(error => {
      console.error('Error adding favorite recipe:', error);
      throw error;
    });
};

// Add a new recipe
const addRecipe = (recipeData) => {
  const {ingredients, cooking_time_minutes, description, category_id, user_id, img} = recipeData;
  return db.query('INSERT INTO recipes (ingredients, cooking_time_minutes, description, category_id, user_id, img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [ingredients, cooking_time_minutes, description, category_id, user_id, img])
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
const editRecipe = (recipeId, updatedRecipeData, user_id) => {
  const { ingredients, cooking_time_minutes, description, category_id, img } = updatedRecipeData;
  return db.query('UPDATE recipes SET ingredients = $1, cooking_time_minutes = $2, description = $3, category_id = $4, img = $5 WHERE id = $6 AND user_id = $7  RETURNING *', [ingredients, cooking_time_minutes, description, category_id, img, recipeId, user_id])
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
const deleteRecipe = (recipeId, user_id) => {
  return db.query('DELETE FROM recipes WHERE id = $1 AND user_id = $2 RETURNING *', [recipeId, user_id])
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
  getCategoriesList,
  addFavoriteRecipe
};