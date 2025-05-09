import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/metodo-americano" element={<HomeScreen />} />
        <Route path="/49" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
