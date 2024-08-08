import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import OwnerSidebar from "../pages/admin/AdminSidebar";
import Header from "../pages/admin/Header";
import AdminSidebar from "../pages/admin/AdminSidebar";

const AdminLayout = () => {
  const [currentRoute, setCurrentRoute] = useState("Dashboard");

  const handleRouteChange = (route) => {
    setCurrentRoute(route);
  };

  return (
    <Box sx={{ width: "full", display: "flex", flexDirection: "column" }}>
      <Header currentRoute={currentRoute} />
      <Box sx={{ width: "full", display: "flex" }}>
        <AdminSidebar handleRouteChange={handleRouteChange} />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
