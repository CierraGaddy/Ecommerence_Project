import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // replace with your DB username
  password: "", // replace with your DB password
  database: "ecommerce_db", // replace with your DB name
});

export default db;
