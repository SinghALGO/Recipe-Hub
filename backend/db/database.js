// database.js
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
const getFavoriteRecipes = (userId) => {
  return db.query('SELECT recipes.* FROM recipes JOIN favorites ON recipes.id = favorites.recipe_id WHERE favorites.user_id=$1',[userId])
    .then(result => result.rows)
    .catch(error => {
      console.error('Error fetching favorite recipes:', error);
      throw error;
    });
};

//Search recipes

const searchRecipes = (categoryId, recipeName) => {
 
  let query = 'SELECT * FROM recipes WHERE true'; 
  const values = [];

  if (categoryId !== '') {
   
    query += ` AND category_id = $${(values.length)+1}`;
    values.push(categoryId);
  }

  if (recipeName !== '') {
    const lowercaseRecipeName = recipeName.toLowerCase();
    query += ` AND LOWER(name) LIKE $${(values.length)+1}`;
    values.push(`%${lowercaseRecipeName}%`);
  }

 
  return db.query(query, values)
    .then(result => result.rows)
    .catch(error => {
      console.error('Error searching recipes:', error);
      throw error;
    });
};

// Add a new recipe
const addRecipe = (recipeData) => {
  const { name,ingredients,cookingTime,description,category,userId,imageUrl} = recipeData;
  const query = 'INSERT INTO recipes (name, ingredients,cooking_time,description, category_id,user_id,img) VALUES ($1, $2, $3,$4,$5,$6,$7) RETURNING *';
  const values = [name,ingredients,cookingTime,description,category,userId,imageUrl];
  return db.query(query,values)
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
  const {  name,
        ingredients,
        cookingTime,
        description,
        category,imageUrl } = updatedRecipeData;
  return db.query('UPDATE recipes SET name = $1,ingredients =$2,cooking_time = $3, description = $4, category_id = $5, img = $6 WHERE id = $7 RETURNING *', [name, ingredients,cookingTime,description, category,imageUrl,recipeId])
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

const getUserByEmailAndPassword = async (email, password) => {
  try {
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const values = [email, password];
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Error fetching user');
  }
};

// Function to retrieve a user by email
const getUserByEmail = async (email) => {
  try {
    const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return user;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw new Error('Error fetching user by email');
  }
};

// Function to create a new user
const createUser = async (userData) => {
  
  const { email, password, username } = userData;
  try {
    const newUser = await db.query('INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING *', [email, password, username]);
    return newUser.rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Error creating user');
  }
};

// Add a new favorite
const addNewFavorite = (userId, recipeId) => {
  const query = 'INSERT INTO favorites (user_id, recipe_id) VALUES ($1, $2) RETURNING *';
  const values = [userId, recipeId];

  return db.query(query, values)
    .then(result => {
      return result.rows[0];
    })
    .catch(error => {
      console.error('Error adding new favorite:', error);
      throw new Error('Error adding new favorite');
    });
};

// Remove a favorite
const removeFavorite = (userId, recipeId) => {
  const query = 'DELETE FROM favorites WHERE user_id = $1 AND recipe_id = $2 RETURNING *';
  const values = [userId, recipeId];

  return db.query(query, values)
    .then(result => {
      if (result.rowCount === 0) {
        throw new Error('Favorite not found');
      }
    })
    .catch(error => {
      console.error('Error removing favorite:', error);
      throw new Error('Error removing favorite');
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
  getUserByEmailAndPassword,
  addNewFavorite,
  removeFavorite,
  searchRecipes, 
  getUserByEmail, createUser
};
