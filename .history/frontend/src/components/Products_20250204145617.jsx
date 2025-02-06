import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../api";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

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
        const data = await fetchProducts(filters);
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
