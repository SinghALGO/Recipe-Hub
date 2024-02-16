import React, { useState } from "react";
import "./Navbar.css";
import CategoryList from "../CategoryList/CategoryList";

const Navbar = ({ categories, categoryClickHandler, loginHandler , userId, logoutHandler, favClickHandler, myRecipeClickHandler , logoClickHandler,signupHandler }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [signup, setSignup] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };
  const handleSignupClick = () => {
    setSignup(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setSignup(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(signup){
        signupHandler({username, email, password});
        handleCloseModal();
    }
    else{
      loginHandler({email, password}); 
    handleCloseModal();
    }
    
  };


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logotext">
          <div className="navbar-brand" onClick={logoClickHandler}>
            RecipesHub
          </div>
        </div>

        <div className="navbar-links">
          <CategoryList categories={categories} categoryClickHandler={categoryClickHandler} />
          {userId !== "" ? (
            <>
              <div className="navbar-link" onClick={favClickHandler}>Favorites</div>
              <div className="navbar-link" onClick={myRecipeClickHandler}>My Recipes</div>
              <div className="navbar-link" onClick={logoutHandler}>Logout</div>
            </>
          ) : (<><div className="navbar-link" onClick={handleLoginClick}>
              Login
            </div>
            <div className="navbar-link" onClick={handleSignupClick}>
              Signup
            </div>
            </>
            
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="nav-modal">
          <div className="nav-modal-content">
            
            <form onSubmit={handleFormSubmit}>
              {signup&& <div className="nav-modal-form-group">
                <label>Username:</label>
                <input type="text" className=".nav-modal-te" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>}
              <div className="nav-modal-form-group">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="nav-modal-form-group">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="nav-modal-button-group">
                {signup?<button type="submit">Signup</button>:<button type="submit">Login</button>}
                
                <button type="button" onClick={handleCloseModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
