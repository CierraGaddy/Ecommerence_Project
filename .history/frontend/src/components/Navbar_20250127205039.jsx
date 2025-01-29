import React from "react";

const Navbar = () => {
  return (
    <nav>
      <img src="/Images/logo-1.png"></img>
      <h1>AESTHETICS</h1>
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
