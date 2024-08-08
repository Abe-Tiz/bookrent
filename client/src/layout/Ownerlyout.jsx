import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import OwnerSidebar from "../pages/owner/OwnerSidebar";
import Header from '../pages/owner/Header';

const OwnerLayout = () => {
  const [currentRoute, setCurrentRoute] = useState("Dashboard");

  const handleRouteChange = (route) => {
    setCurrentRoute(route);
  };

  return (
    <Box sx={{ width: "full", display: "flex", flexDirection: "column" }}>
      <Header currentRoute={currentRoute} />
      <Box sx={{ width: "full", display: "flex" }}>
        <OwnerSidebar handleRouteChange={handleRouteChange} />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default OwnerLayout;
