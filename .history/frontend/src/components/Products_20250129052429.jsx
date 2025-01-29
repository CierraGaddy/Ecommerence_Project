import React, { useState, useEffect } from "react";
import { supabase } from "../config/supabaseClient"; // ✅ Import Supabase client

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products") // ✅ Ensure table name is correct
      .select("*")
      .headers({ apikey: import.meta.env.VITE_SUPABASE_ANON_KEY }); // ✅ Explicitly add API key

    if (error) {
      console.error("Error fetching products:", error.message);
    } else {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
