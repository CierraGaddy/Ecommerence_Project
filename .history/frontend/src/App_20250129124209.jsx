import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // React Router for navigation
import "./App.css"; // Import global styles
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {" "}
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />{" "}
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />{" "}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App; // Exporting App component
