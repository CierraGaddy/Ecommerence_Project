import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"; // Navigation bar component
import Footer from "./components/Footer"; // Footer component

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
