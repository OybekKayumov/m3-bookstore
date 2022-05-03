import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './pages.css';
import { addElement } from '../redux/books/Books';

const Form = () => {
  const initialFormState = {
    title: '', author: '', category: '',
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: [event.target.value],
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    document.querySelector('form').reset();

    const newBook = {
      id: uuidv4(),
      title: formState.title[0],
      author: formState.author[0],
      categories: formState.category[0],
    };

    dispatch(addElement(newBook));
  };

  return (
    <form onSubmit={submitBookToStore} className="form-container">
      <h1>ADD NEW BOOK</h1>
      <div className="form-inputs">
        <input name="title" type="text" placeholder="Book title" onChange={handleChange} required />
        <input name="author" type="text" placeholder="Book author" onChange={handleChange} required />
        <select name="category" id="categories" onChange={handleChange} required>
          <option value="">Category</option>
          <option value="novell">Novell</option>
          <option value="comedy">Comedy</option>
          <option value="fairytale">Fairytale</option>
          <option value="drama">Drama</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;
