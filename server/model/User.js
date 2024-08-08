// models/User.js
const { pool } = require("../config/Connection");

const createUser = async (email, password, location, phone) => {
  const query ="INSERT INTO users (email, password, location, phone) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [email, password, location, phone];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error inserting user: ${error.message}`);
  }
};


const getUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];  
};


module.exports = { createUser, getUserByEmail};
