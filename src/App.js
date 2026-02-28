import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Free2play from './Free2play';
import Gamepage from './Gamepage';
import Transaction from './Transaction';
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"><img src="/shop logo.png" alt="Shop Logo" width="70" height="70" className="logo" /></Link>
            </li>
            <li>
              <Link to="/" className="navlink fw-light">Home</Link>
            </li>
            <li>
              <Link to="/about" className="navlink fw-light">About</Link>
            </li>
            <li>
              <Link to="/contact" className="navlink fw-light">Contact</Link>
            </li>
            <li>
              <Link to="/free2play" className="navlink fw-light">Free2play</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/free2play" element={<Free2play />} />
          <Route path="/game/:id" element={<Gamepage />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;