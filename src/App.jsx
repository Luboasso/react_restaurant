import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reservations from './components/Reservations/Reservations';

const App = () => {
  const dishes = [
    {
      id: 1,
      name: 'plato 1',
      description: 'Este es el plato 1',
      price: 10,
    },
    {
      id: 2,
      name: 'plato 2',
      description: 'Este es el plato 2',
      price: 20,
    },
    {
      id: 3,
      name: 'plato 3',
      description: 'Este es el plato 3',
      price: 15,
    },
  ];

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home dishes={dishes} />} />
          // Parent component or Router setup
          <Route path="/reserve" element={<Reservations />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;


