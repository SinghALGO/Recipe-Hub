import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeRoute from "./routes/HomeRoute";
import RecipeDetailsModal from "./routes/RecipeDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
function App() {
  const { state, toggleModal } = useApplicationData();
  return (
    <div className="App">
      <Navbar />
      <HomeRoute recipes={state.recipes} clickHandler={toggleModal} />
      {state.modalStatus && (
        <RecipeDetailsModal
          recipeData={state.recipeData}
          clickHandler={toggleModal}
        />
      )}
    </div>
  );
}

export default App;
