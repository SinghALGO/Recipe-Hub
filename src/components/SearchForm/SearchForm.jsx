import React, { useState } from 'react';
import heroImage from "../../assets/hero-image.jpg";
import "./SearchForm.css";
const SearchForm = ({handleSearch}) => {
  const [formData, setFormData] = useState({ category: '', recipe: '' });
  const [formEmpty , setFormEmpty] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
     if (formData.category === '' && formData.recipe === '') {
      setFormEmpty(true);
    } else {
      setFormEmpty(false);
      handleSearch(formData);
    }
  };

  return (
    <section className="main-hero-form">
      <div className="search-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category-select">Category:</label>
            <select id="category-select" name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select a category</option>
              <option value="1">Breakfast</option>
              <option value="2">Lunch</option>
              <option value="3">Appetizer</option>
              <option value="4">Dessert</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="recipe-name">Recipe Name:</label>
            <input
              type="text"
              id="recipe-name"
              name="recipe"
              value={formData.recipe}
              onChange={handleChange}
              placeholder="Enter recipe name"
            />
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
           {formEmpty && (
          <p className="search-error-message">Please enter either category or recipe name for search.</p>
        )}
        </form>
       
      </div>
      <img
        src={heroImage}
        alt="Hero image of logo and dishes"
        className="hero-image"
      />
    </section>
  );
};
export default SearchForm;
