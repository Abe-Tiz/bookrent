import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Link,
  Box,
  CircularProgress,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";
import axios from "axios";
import { FaBookOpen } from "react-icons/fa";
import Login from "./Login";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); 
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      setLoading(false);
      return;
    }

    try {
      // Make sure to update the API endpoint and data fields accordingly
      const response = await axios.post("http://localhost:4000/user/signup", {
        email,
        password,
        location,
        phone,
      });
      console.log("User created:", response);
      setShowLogin(true);
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: "full", display: "flex", padding: "5px" }}>
      {/* <Box
        sx={{
          width: "75%",
          backgroundColor: "#171B36",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          // height: "200px",
        }}
      >
        <FaBookOpen color="white" size={150} />
      </Box> */}
     
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            marginX:10
          }}
        >
          <Box sx={{ display: "flex", gap:7, marginTop: 2 }}>
            <FaBookOpen color="#00ABFF" size={30} />
            <Typography variant="h6">Book Rent</Typography>
          </Box>
          <Typography variant="h6" mb={2}>Signup</Typography>
          <form
            // style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
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
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setPasswordsMatch(e.target.value === password); // Check if passwords match
                  }}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Location:"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Phone Number:"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            {!passwordsMatch && (
              <Typography color="red" variant="body2" sx={{ mb: 2 }}>
                Passwords do not match!
              </Typography>
            )}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                type="submit"
                disabled={loading}
                sx={{ backgroundColor: "#00ABFF" , color:"white" , mt:2 }}
              >
                {loading ? <CircularProgress size={24} /> : "Signup"}
              </Button>
              <Link href="#">Login</Link>
            </Box>
          </form>
        </Container>
      
    </Box>
  );
}

export default Signup;
