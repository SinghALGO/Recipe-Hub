import { useReducer, useEffect } from 'react'


// 1. ADD RECIPE ACTION,
// 2. THEN ADD THE SWITCH CASE IN REDUCER FUNCTION,
// 3. ADD RECIPE FUNCTION TO ADD RECIPE addRecipe()
const ACTIONS = {
  SET_RECIPES: 'SET_RECIPES',
  ADD_RECIPE: 'ADD_RECIPE',
  EDIT_RECIPE: 'EDIT_RECIPE',
  UPDATE_FAVORITE_RECIPE: 'UPDATE_FAVORITE_RECIPE'
}

const initialState = {
  recipes: [],
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.SET_RECIPES:
//       return { ...state, recipes: action.payload }
//     case ACTIONS.ADD_RECIPE:
//       return { ...state, recipes: action.payload }
//     case ACTIONS.EDIT_RECIPE:
//       // Add logic to edit a recipe
//       return state; // Placeholder, you need to implement this
//     case ACTIONS.UPDATE_FAVORITE_RECIPE:
//       // Add logic to update favorite recipe
//       return state; // Placeholder, you need to implement this
//     default:
//       throw new Error(
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

const reducer = (state, action) => {
  console.log("Action:", action);
  switch (action.type) {
    case ACTIONS.SET_RECIPES:
      console.log("Setting recipes with payload:", action.payload);
      return { ...state, recipes: action.payload }
    case ACTIONS.ADD_RECIPE:
      console.log("Adding recipe with payload:", action.payload);
      return { ...state, recipes: action.payload }
    case ACTIONS.EDIT_RECIPE:
      console.log("Editing recipe with payload:", action.payload);
      // Add logic to edit a recipe
      return state; // Placeholder, you need to implement this
    case ACTIONS.UPDATE_FAVORITE_RECIPE:
      console.log("Updating favorite recipe with payload:", action.payload);
      // Add logic to update favorite recipe
      return state; // Placeholder, you need to implement this
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getRecipes();
  }, []);

  const setRecipes = (recipes) => {
    dispatch({ type: ACTIONS.SET_RECIPES, payload: recipes })
  }

  // const addRecipe = (recipe) => {
  //   dispatch({ type: ACTIONS.ADD_RECIPE, payload: recipe })
  // }

  const addRecipe = (recipe) => {
    // Add logic to append the new recipe to the existing list of recipes
    const updatedRecipes = [...state.recipes, recipe];
    dispatch({ type: ACTIONS.SET_RECIPES, payload: updatedRecipes });
  };

  const handleAddRecipe = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();
      console.log(data);
      addRecipe(data.recipes[0]); // Assuming data.recipes is an array containing the new recipe
    } catch (error) {
      console.error('Error fetching popular recipes:', error);
    }
  };

  // const handleAddRecipe = async (recipe) => {
  //   try {
  //     const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
  //     const data = await api.json();
  //     console.log(data);
  //     addRecipe(data.recipes);
  //   } catch (error) {
  //     console.error('Error fetching popular recipes:', error);
  //   }
  // };

  const getRecipes = async () => {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
      const data = await api.json();
      console.log(data);
      setRecipes(data.recipes);
    } catch (error) {
      console.error('Error fetching popular recipes:', error);
    }
  };

  return {
    state,
    handleAddRecipe
  }
}

export default useApplicationData;