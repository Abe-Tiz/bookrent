 
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "book_rent",
  password: "12345",
  port: 5432,
});

// Check the PostgreSQL connection
const checkConnection = async () => {
  try {
    await pool.connect();
    console.log("PostgreSQL connected successfully.");
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
  }
};

module.exports = {
  pool,
  checkConnection,
};
