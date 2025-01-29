import React from "react";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
