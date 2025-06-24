import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Calculator from './components/concents/Calculator';
import Criteria from './components/concents/Criteria';
import Search from './components/concents/Search';
import Plans from './components/concents/Plans';
import Add from './components/concents/Add';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/criteria" element={<Criteria />} />
        <Route path="/search" element={<Search />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



