import promisePool from "../config/dbConfig.js";

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

export const getProductById = async (id) => {
  if (!id || isNaN(id)) {
    throw new Error("Invalid product ID");
  }

  try {
    const query = "SELECT * FROM products WHERE id = ?";
    const [results] = await db.execute(query, [parseInt(id, 10)]); // Ensure id is parsed as an integer
    return results[0] || null; // Return the first product or null if not found
  } catch (err) {
    console.error("Error executing query:", err.message);
    throw err; // Rethrow the error to be handled by the calling function
  }
};
