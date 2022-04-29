import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation';
import Books from './components/appBook';
import Categories from './components/PageCateg';

const App = () => (
  <Router>
    <Navbar />
    <section className="content">
      <Routes>
        <Route path="/*" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </section>
  </Router>
);

export default App;
