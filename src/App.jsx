import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeRoute from "./routes/HomeRoute";
import RecipeDetailsModal from "./routes/RecipeDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
function App() {
  const { state, toggleModal, categoryClickHandler, loginHandler, logoutHandler, favClickHandler, myRecipeClickHandler, logoClickHandler, remFavHandler, addFavHandler, addRecipeHandler, recipeDeleteHandler, editRecipeHandler, handleSearch, signupHandler,saveNonLoggedFavHandler,removeNonLoggedFavHandler} = useApplicationData();
  return (
    <div className="App">
      <Navbar categories={state.categories} categoryClickHandler={categoryClickHandler} loginHandler={loginHandler} userId={state.userId} logoutHandler={logoutHandler} favClickHandler={favClickHandler} myRecipeClickHandler={myRecipeClickHandler} logoClickHandler={logoClickHandler} signupHandler={signupHandler}/>
      <HomeRoute recipes={state.recipes} clickHandler={toggleModal} favRecipes={state.favRecipes} addRecipeHandler={addRecipeHandler} userId={state.userId} handleSearch={handleSearch}/>
      {state.modalStatus && (
        <RecipeDetailsModal
          recipeData={state.recipeData}
          clickHandler={toggleModal}
          userId={state.userId}
          favRecipes={state.favRecipes}
          remFavHandler={remFavHandler}
          addFavHandler={addFavHandler}
          recipeDeleteHandler={recipeDeleteHandler}
          editRecipeHandler={editRecipeHandler}
          saveNonLoggedFavHandler={saveNonLoggedFavHandler}
          removeNonLoggedFavHandler={removeNonLoggedFavHandler}
          publicFavs={state.publicFavs}
        />
      )}
    </div>
  );
}

export default App;
