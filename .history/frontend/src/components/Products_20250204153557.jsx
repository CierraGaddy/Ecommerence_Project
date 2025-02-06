import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/api";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log("Fetching products with filters:", filters);
        const data = await fetchProducts(filters);
        console.log("Fetched products:", data); // Log API response
        setProducts(data || []);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };
    getProducts();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="products-page">
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <div className="products">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
