// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userSchema, loginSchema } = require("../zod/Validation");
const { createUser, findUserByUsername, getUserByEmail } = require("../model/User");

// signup
const signup = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ message: "Request body is missing or empty." });
    }

    const { email, password, location, phone } = req.body;
    if (!email || !password || !phone) {
      return res
        .status(400)
        .json({
          message: "Email, password, or phone is missing in the request body.",
        });
    }
    // Validate the incoming data using Zod schema
    const validation = userSchema.safeParse({
      email,
      password,
      location,
      phone,
    });
    if (!validation.success) {
      return res.status(400).json({ message: validation.error.errors });
    }
    // Check if the user already exists
    const existingUser = await getUserByEmail(email); 
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });  
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(email, hashedPassword, location, phone);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error", error: error });
  }
};


// login
const login = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ message: "Request body is missing or empty." });
    }

    const { email, password } = req.body;
    const validation = loginSchema.safeParse({ email, password });

    if (!validation.success) {
      return res.status(400).json(validation.error);
    }

    const user = await getUserByEmail(email);
    //  console.log(user)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user || !user.password) {
      return res.status(400).json({ message: "Invalid user data" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "password is not matched" });
    }

    const token = jwt.sign(
      { id: user.password, email: user.email },
      "aboyejdfvirkjorkvj2356",
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



module.exports = {
  signup,
  login,
};
