import React from "react";
import { FaShoppingBag, FaUser } from "react-icons/fa"; // Import icons from react-icons

const Navbar = () => {
  return (
    <nav>
      {/* Logo on the Left */}
      <div className="logo-container">
        <img className="logo" src="/Images/logo-1.png" alt="Brand Logo" />
        <h1>AESTHETICS</h1>
      </div>

      {/* Centered Navigation Links */}
      <ul>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#/products">Products</a>
        </li>
        <li>
          <a href="#/contact">Contact</a>
        </li>
      </ul>

      {/* Icons on the Right */}
      <div className="nav-icons">
        <a href="#/cart">
          <FaShoppingBag />
        </a>
        <a href="#/profile">
          <FaUser />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
