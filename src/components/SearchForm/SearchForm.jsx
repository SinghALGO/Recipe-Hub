<<<<<<< HEAD
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
=======
import heroImage from "../../assets/hero-image.jpg";
import "./SearchForm.css";
const SearchForm = () => {
  return (
    <section className="main-hero-form">
      <div className="search-container">
        <form className="search-form">
          <div className="form-group">
            <label htmlFor="category-select">Category:</label>
            <select id="category-select" name="category">
              <option value="">Select a category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="recipe-name">Recipe Name:</label>
            <input
              type="text"
              id="recipe-name"
              name="recipe"
<<<<<<< HEAD
              value={formData.recipe}
              onChange={handleChange}
=======
>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16
              placeholder="Enter recipe name"
            />
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
<<<<<<< HEAD
           {formEmpty && (
          <p className="search-error-message">Please enter either category or recipe name for search.</p>
        )}
        </form>
       
=======
        </form>
>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16
      </div>
      <img
        src={heroImage}
        alt="Hero image of logo and dishes"
        className="hero-image"
      />
<<<<<<< HEAD
      
=======
>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16
    </section>
  );
};
export default SearchForm;
