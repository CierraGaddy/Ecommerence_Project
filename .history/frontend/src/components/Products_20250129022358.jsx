import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  // This state holds the list of products retrieved from the API
  const [products, setProducts] = useState([]);

  // This state stores the user's selected filters for category and price range
  const [filters, setFilters] = useState({
    category: "", // Default empty category (means all products)
    minPrice: "", // Default empty minimum price
    maxPrice: "", // Default empty maximum price
  });

  // Function to fetch products from the backend API based on the selected filters
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/products/filter", // API endpoint to get filtered products
        {
          params: filters, // Sends selected filters as query parameters
        }
      );
      setProducts(data); // Updates the products list with the API response
    } catch (err) {
      console.error("Error fetching products:", err.message); // Logs error if request fails
    }
  };

  // useEffect runs fetchProducts whenever the filters state changes
  useEffect(() => {
    fetchProducts();
  }, [filters]); // Runs every time filters are updated

  // Handles changes in the filter inputs and updates the state
  const handleFilterChange = (e) => {
    const { name, value } = e.target; // Gets the name and value of the changed input
    setFilters((prev) => ({ ...prev, [name]: value })); // Updates only the changed filter
  };

  return (
    <div className="products-page">
      {/* Filter Section */}
      <div className="filters">
        {/* Category Dropdown */}
        <select name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option> {/* Default option */}
          <option value="Foundation">Foundation</option>
          <option value="Concealer">Concealer</option>
          <option value="Contouring Palette">Contouring Palette</option>
        </select>

        {/* Minimum Price Input */}
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          onChange={handleFilterChange}
        />

        {/* Maximum Price Input */}
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          onChange={handleFilterChange}
        />
      </div>

      {/* Products Display */}
      <div className="products">
        {/* If no products are found, display a message */}
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          // Loop through the products list and display each product
          products.map((product) => (
            <div className="product-card" key={product.id}>
              {/* Product Image */}
              <img src={product.image_url} alt={product.name} />

              {/* Product Name */}
              <h2>{product.name}</h2>

              {/* Product Description */}
              <p>{product.description}</p>

              {/* Product Price */}
              <p>${product.price}</p>

              {/* Add to Cart Button */}
              <button
                className="add-to-cart"
                onClick={() => alert(`Added ${product.name} to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products; // Exports the component so it can be used in the app
