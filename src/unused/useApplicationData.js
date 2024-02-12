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
// ADD SWITCH CASE
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_RECIPES:
      return { ...state, recipes: action.payload }
    case ACTIONS.ADD_RECIPE:
      return { ...state, recipes: action.payload }
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

  const addRecipe = (recipe) => {
    dispatch({ type: ACTIONS.ADD_RECIPE, payload: recipe })
  }
  const handleAddRecipe = async (recipe) => {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
      const data = await api.json();
      console.log(data);
      addRecipe(data.recipes);
    } catch (error) {
      console.error('Error fetching popular recipes:', error);
    }
  };

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