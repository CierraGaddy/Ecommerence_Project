// /backend/models/productModel.js

const db = require("../config/dbConfig");

const getProducts = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getProducts,
};
