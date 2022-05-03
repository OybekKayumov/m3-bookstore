import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './pages.css';

const Categories = () => {
  const status = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
    // dispatch({ type: 'CHECK_STATUS' });
  };

  return (
    <>
      <h1>{status}</h1>
      <button onClick={handleClick} type="button">Check status</button>
    </>
  );
};

export default Categories;
