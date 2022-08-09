import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Navbar from './components/Navigation';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
