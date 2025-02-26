import React from 'react';
import './App.css';
import Home from './components/Home';
import Course from './components/Course';
import Carousel from './components/Carousel';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Course />
      <Carousel />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
