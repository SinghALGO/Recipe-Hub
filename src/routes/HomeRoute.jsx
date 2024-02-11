import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RecipeList from "../components/RecipeList/RecipeList";
import "./HomeRoute.css";
const HomeRoute = ({ recipes , clickHandler}) => {
  return (
    <>
      <SearchForm />
      <RecipeList recipes={recipes} clickHandler={clickHandler}/>
    </>
  );
};

export default HomeRoute;
