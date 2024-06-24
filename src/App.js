import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Past from './components/Past';
import Present from './components/Present';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/past" element={<Past />} />
          <Route path="/present" element={<Present />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
