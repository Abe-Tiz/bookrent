import React from "react";
import { Drawer, Typography } from "@mui/material";

const Header = ({ currentRoute }) => {
  return (
    <>
      <Drawer
        sx={{
          flexShrink: 0,
          backgroundColor: "yellow",
        }}
        variant="permanent"
        anchor="top"
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            backgroundColor: "white",
            color: "gray",
            borderRadius: 8,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            p: 2,
            mb: 2,
            mt: 2,
            width: "75%",
            ml:32
          }}
        >
          Admin/{currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)}
        </Typography>
      </Drawer>
    </>
  );
};

export default Header;
