import { useReducer, useEffect } from "react";

// 1. ADD RECIPE ACTION,
// 2. THEN ADD THE SWITCH CASE IN REDUCER FUNCTION,
// 3. ADD RECIPE FUNCTION TO ADD RECIPE addRecipe()
const ACTIONS = {
  SET_RECIPES: "SET_RECIPES",
  ADD_RECIPE: "ADD_RECIPE",
  EDIT_RECIPE: "EDIT_RECIPE",
  UPDATE_FAVORITE_RECIPE: "UPDATE_FAVORITE_RECIPE",
};

const initialState = {
  recipes: [],
  recipeData: "",
  categories:[],
  categoryId:"",
  modalStatus: false,
};
// ADD SWITCH CASE
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_RECIPES:
      return { ...state, recipes: action.payload };
    case ACTIONS.SET_CATEGORIES:
      return { ...state, categories: action.payload };//This case sets state for the topicId
    case "SET_CATEGORY_ID":
      return {
        ...state,
        categoryId: action.payload,
      };
    case ACTIONS.ADD_RECIPE:
      return { ...state, recipes: action.payload };
    //This case will send photo data to modal and toggle modal status(true or false)
    case "SET_MODAL_DATA":
      return {
        ...state,
        recipeData: action.payload,
        modalStatus: !state.modalStatus,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getRecipes();
    getCategories();
  }, []);

  //useEffect runs when categoryId state changes. It checks if categoryId state is defined and is not null,empty or undefined, this way it wont run on intial render.
  useEffect(() => {
    if (state.categoryId) {
       getCategoryRecipe();
    }
  }, [state.categoryId]);

  const setRecipes = (recipes) => {
    dispatch({ type: ACTIONS.SET_RECIPES, payload: recipes });
  };
  const setCategories = (categories) => {
    dispatch({ type: ACTIONS.SET_CATEGORIES, payload: categories });
  };

  const addRecipe = (recipe) => {
    dispatch({ type: ACTIONS.ADD_RECIPE, payload: recipe });
  };
  const handleAddRecipe = async (recipe) => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
      );
      const data = await api.json();
      console.log(data);
      addRecipe(data.recipes);
    } catch (error) {
      console.error("Error fetching popular recipes:", error);
    }
  };

  const getRecipes = async () => {
    try {
      const api = await fetch(
        `http://localhost:3008/api/recipes`
      );
      const data = await api.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching popular recipes:", error);
    }
  };
  const getCategories = async () => {
    try {
      const api = await fetch(
        `http://localhost:3008/api/recipes/categories`
      );
      const data = await api.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const getCategoryRecipe = async () => {
    try {
      const api = await fetch(
        `http://localhost:3008/api/recipes/category/${state.categoryId}`
      );
      const data = await api.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const toggleModal = (recipe) => {
    let data;
    //checking if recipe argument is non empty as no argument is sent to toggleModal function when modal is closed.
    if (recipe) {
      data = state.recipes.filter((recipeEle) => recipeEle.id === recipe.id);
    }
    dispatch({ type: "SET_MODAL_DATA", payload: data });
  };
  //function to handle category being clicked in the navigation bar
  const categoryClickHandler = (categoryId) => {
    dispatch({ type: "SET_CATEGORY_ID", payload: categoryId });
  };

  return {
    state,
    handleAddRecipe,
    toggleModal,
    categoryClickHandler
  };
};

export default useApplicationData;
