import React from 'react';
import './pages.css';

const Form = () => (
  <div className="form-container">
    <h1>ADD NEW BOOK</h1>
    <div className="form-inputs">
      <input type="text" placeholder="Book title" />
      <select name="categories" id="categories">
        <option value="Category 1">Novell</option>
        <option value="Category 2">Comedy</option>
        <option value="Category 3">Fairytale</option>
        <option value="Category 4">Drama</option>
      </select>
      <button type="button">ADD BOOK</button>
    </div>
  </div>
);

export default Form;
