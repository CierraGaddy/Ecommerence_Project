import React from "react";

const Navbar = () => {
  return (
    <nav>
      {/* Logo and Brand Name on the Left */}
      <div className="logo-container">
        <img className="logo" src="/Images/logo-1.png" alt="Brand Logo" />
        <h1>AESTHETICS</h1>
      </div>

      {/* Navigation Links */}
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
    </nav>
  );
};

export default Navbar;
