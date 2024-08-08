import { Box, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AuthSider from "../components/AuthSider";

const Main = () => {
  return (
   <Box sx={{ width: "full", display: "flex", padding: "5px" }}>
      <AuthSider />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Main;
