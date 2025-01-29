import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/api";

const Products = () => {
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data); // Set the fetched products
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        console.error("Error fetching products:", err); // Log error for debugging
        setError("Failed to load products."); // Set error message
        setLoading(false); // Set loading to false
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>; // Loading state
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>; // Display error message
  }

  return (
    <div className="products">
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
