import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DishDetailsPage from './pages/DishDetailsPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:id" element={<DishDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
