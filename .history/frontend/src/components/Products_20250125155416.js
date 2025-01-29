import React, { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API using Axios
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data); // Update state with fetched products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image_url} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
