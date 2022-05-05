import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './pages.css';
import { sentBook } from '../redux/books/Books';

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
      category: formState.category[0],
    };

    dispatch(sentBook(newBook));
  };

  const arrCategories = [
    'Historical',
    'Fantasy',
    'Periodicals',
    'Realistic',
    'Sci-Fi',
    'Thriller',
    'Biography',
    'Comedy',
  ];

  const formBoolean = true;

  return (
    <form onSubmit={submitBookToStore} className="form-container">
      <h1>ADD NEW BOOK</h1>
      <div className="form-inputs">
        <input name="title" type="text" placeholder="Book Title" onChange={handleChange} required />
        <input name="author" type="text" placeholder="Book Author" onChange={handleChange} required />
        <select name="category" onChange={handleChange} required>
          <option value="">Categories</option>
          <option disabled={formBoolean} value="">--------------</option>
          {
            arrCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <button className="btn-b-solid" type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;
