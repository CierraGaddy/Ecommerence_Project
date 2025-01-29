import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]); // State for products
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    const defaultFilters = {
      category: "", // Default to all categories
      minPrice: "", // Default to no minimum price
      maxPrice: "", // Default to no maximum price
    };

    try {
      const response = await axios.get(
        "http://localhost:5000/api/products/filter",
        {
          params: { ...defaultFilters, ...filters },
        }
      );
      console.log("Fetched products:", response.data); // Debugging
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err); // Debugging
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="products-page">
      <h1>Products</h1>

      {/* Filtering UI */}
      <div className="filters">
        <select name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="Foundation">Foundation</option>
          <option value="Concealer">Concealer</option>
          <option value="Palette">Palette</option>
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

      {/* Products Grid */}
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
    </div>
  );
};

export default Products;
