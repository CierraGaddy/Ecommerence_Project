import db from "../config/dbConfig.js";

export const getProducts = (filters) => {
  let query = "SELECT * FROM products WHERE 1=1";
  const params = [];

  if (filters.category && filters.category.trim() !== "") {
    query += " AND category = ?";
    params.push(filters.category.trim());
  }
  if (filters.minPrice) {
    query += " AND price >= ?";
    params.push(parseFloat(filters.minPrice));
  }
  if (filters.maxPrice) {
    query += " AND price <= ?";
    params.push(parseFloat(filters.maxPrice));
  }

  return new Promise((resolve, reject) => {
    db.query(query, params, (err, results) => {
      if (err) {
        console.error("Error executing query:", err.message);
        return reject(err);
      }
      resolve(results);
    });
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
      if (err) {
        console.error("Error executing query:", err.message);
        return reject(err);
      }
      resolve(results[0]);
    });
  });
};
