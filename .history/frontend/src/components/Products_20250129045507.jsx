import React, { useState, useEffect } from "react";
import { supabase } from "../config/dbConfig.js"; // Import Supabase client

const Products = () => {
  // This state holds the list of products retrieved from Supabase
  const [products, setProducts] = useState([]);

  // This state stores the user's selected filters for category and price range
  const [filters, setFilters] = useState({
    category: "", // Default empty category (means all products)
    minPrice: "", // Default empty minimum price
    maxPrice: "", // Default empty maximum price
  });

  // Function to fetch products from Supabase based on selected filters
  const fetchProducts = async () => {
    let query = supabase.from("ecommerence_db").select("*"); // Ensure correct table name

    if (filters.category) {
      query = query.eq("category", filters.category);
    }
    if (filters.minPrice) {
      query = query.gte("price", filters.minPrice);
    }
    if (filters.maxPrice) {
      query = query.lte("price", filters.maxPrice);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching products:", error.message);
    } else {
      setProducts(data);
    }
  };

  // Fetch products when filters change
  useEffect(() => {
    fetchProducts();
  }, [filters]);

  // Handles changes in the filter inputs and updates the state
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="products-page">
      {/* Filter Section */}
      <div className="filters">
        <select name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="Foundation">Foundation</option>
          <option value="Concealer">Concealer</option>
          <option value="Contouring Palette">Contouring Palette</option>
        </select>

        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          onChange={handleFilterChange}
        />

        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          onChange={handleFilterChange}
        />
      </div>

      {/* Products Display */}
      <div className="products">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image_url} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
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

export default Products;
