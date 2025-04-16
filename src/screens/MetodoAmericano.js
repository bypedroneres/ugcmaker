import React from 'react';
import Course from '../components/Course';
import Carousel from '../components/Carousel';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Home from '../components/Home';
import "../App.css"

export default function HomeScreen() {
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
