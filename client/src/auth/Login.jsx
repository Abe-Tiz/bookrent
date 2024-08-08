import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Link,
} from "@mui/material";
import axios from "axios";
import { FaBookOpen } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email,
        password,
      });
      console.log("Token:", response.data.token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        marginX: 10,
      }}
    >
      <Box sx={{ display: "flex", gap: 7, marginTop: 2 }}>
        <FaBookOpen color="#00ABFF" size={30} />
        <Typography variant="h6">Book Rent</Typography>
      </Box>
      <Typography variant="h6" mb={2}>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid sx={{ alignItems: "center" }} container spacing={2}>
          <Grid item xs={12} sm={12}>
            {" "}
            {/* Full width on extra-small devices, half width on small and larger */}
            <TextField
              label="Email:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              label="Password:"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                // evaluatePasswordStrength(e.target.value); // Uncomment if you have this function
              }}
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            type="submit"
            sx={{ backgroundColor: "#00ABFF", color: "white", mt: 2 }}
          >
             LOGIN
          </Button>
          <Link href="#">Login</Link>
        </Box>
      </form>
    </Container>
  );
}

export default Login;
