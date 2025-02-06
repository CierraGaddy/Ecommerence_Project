import React from "react";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // React Router navigation

  return (
    <nav>
      {/* Logo on the Left */}
      <div className="logo-container">
        <img className="logo" src="/Images/logo-1.png" alt="Brand Logo" />
        <h1>
          <a href="#/">AESTHETICS</a>
        </h1>
      </div>

      {/* Centered Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#/api/products" className="nav-link">
            Products
          </a>
        </li>
        <li>
          <a href="#/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <FaShoppingBag
          className="nav-icon"
          onClick={() => navigate("/cart")}
          aria-label="Shopping Bag"
        />
        <FaUser
          className="nav-icon"
          onClick={() => navigate("/profile")}
          aria-label="User Profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;
