import React, { useState, useEffect } from "react";
import { supabase } from "../config/supabaseClient"; // Ensure correct import

const Products = () => {
  // State to store products
  const [products, setProducts] = useState([]); //React Hook useState holds

  // State to store filter options
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  // Fetch products from Supabase with filters
  const fetchProducts = async () => {
    let query = supabase.from("products").select("*"); // Select all columns from "products" table

    // Apply filters if provided
    if (filters.category && filters.category.trim() !== "") {
      query = query.eq("category", filters.category.trim()); // Filter by category
    }
    if (filters.minPrice) {
      query = query.gte("price", parseFloat(filters.minPrice)); // Greater than or equal to minPrice
    }
    if (filters.maxPrice) {
      query = query.lte("price", parseFloat(filters.maxPrice)); // Less than or equal to maxPrice
    }

    const { data, error } = await query; // Execute query

    if (error) {
      console.error("Error fetching products:", error.message);
    } else {
      setProducts(data || []); // Update state with retrieved products
    }
  };

  // Fetch products when filters change
  useEffect(() => {
    fetchProducts();
  }, [filters]); // Runs every time filters are updated

  // Handles filter changes
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

      {/* Display Products */}
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
