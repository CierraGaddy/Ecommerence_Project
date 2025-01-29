import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"; // Added useNavigate
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
        <NavbarWithNavigation />

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

// Higher Order Component to use `useNavigate` inside Navbar
const NavbarWithNavigation = () => {
  const navigate = useNavigate();
  return <Navbar navigate={navigate} />;
};

export default App;
