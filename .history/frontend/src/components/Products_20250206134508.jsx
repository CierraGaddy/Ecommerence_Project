import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/api"; // Uses Supabase API function
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
        const data = await fetchProducts(filters); // Fetch from Supabase
        console.log("Received products:", data);
        setProducts(data || []);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };
    getProducts();
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="products-page">
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <div className="products">
        {products.length === 0 ? (
          <p>No products found. Try adjusting filters.</p>
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
