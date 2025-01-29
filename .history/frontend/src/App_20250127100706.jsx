// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import Products from "./components/Products";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar"; // Navigation bar component
// import Footer from "./components/Footer"; // Footer component
// import axios from "axios";

// const App = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <h1>Hello from App.jsx</h1>
//         {/* Navigation Bar */}
//         <Navbar />

//         {/* Main content with routing */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products products={products} />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

const App = () => {
  return (
    <div>
      <h1>Hello, React is working!</h1>
    </div>
  );
};

export default App;
