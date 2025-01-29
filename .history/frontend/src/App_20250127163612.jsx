import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Added missing Routes and Route imports
import "./App.css";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx"; // Navigation bar component
import Footer from "./components/Footer.jsx"; // Footer component

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main content with routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
