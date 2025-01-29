import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // React Router for navigation
import "./App.css"; // Import global styles
import Home from "./components/Home"; // Home page component
import Products from "./components/Products"; // Products page component
import Contact from "./components/Contact"; // Contact page component
import Cart from "./components/Cart"; // Shopping Cart page
import Profile from "./components/Profile"; // User Profile page
import Navbar from "./components/Navbar"; // Navbar component
import Footer from "./components/Footer"; // Footer component

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wraps the entire application with a Router for navigation */}
      <div className="App">
        {/* Navigation Bar (Always visible at the top) */}
        <Navbar />

        {/* Defines all the different pages the app can navigate to */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/products" element={<Products />} />{" "}
          {/* Products Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
          <Route path="/cart" element={<Cart />} /> {/* Shopping Cart Page */}
          <Route path="/profile" element={<Profile />} />{" "}
          {/* User Profile Page */}
        </Routes>

        {/* Footer (Always visible at the bottom) */}
        <Footer />
      </div>
    </Router>
  );
};

export default App; // Exporting App component so it can be used elsewhere
