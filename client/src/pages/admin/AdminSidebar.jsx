import React, { useState } from "react";
import { Drawer, List, ListItem, Link, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const AdminSidebar = ({ handleRouteChange }) => {
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (route) => {
    handleRouteChange(route);
    setActiveLink(route);
  };

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
      }}
      variant="permanent"
      anchor="left"
    >
      <List
        sx={{
          width: "full",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          margin: 2,
          backgroundColor: "#171B36",
          color: "white",
          padding: 5,
          height: "100%",
          borderRadius: 5,
          gap: 1,
        }}
      >
        <Box>
          <ListItem
            sx={{
              backgroundColor:
                activeLink === "Dashboard" ? "#00ABFF" : "transparent",
              color: "white",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#172270",
              },
            }}
            onClick={() => handleLinkClick("Dashboard")}
          >
            <Link
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "black",
                  opacity: 1,
                },
              }}
              component={RouterLink}
              to="/admin"
              color="inherit"
            >
              Dashboard
            </Link>
          </ListItem>
          <ListItem
            sx={{
              backgroundColor:
                activeLink === "Books" ? "#00ABFF" : "transparent",
              color: "white",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#172270",
              },
            }}
            onClick={() => handleLinkClick("Books")}
          >
            <Link
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "black",
                  opacity: 1,
                },
              }}
              component={RouterLink}
              to="/admin/book"
              color="inherit"
            >
              Books
            </Link>
          </ListItem>
        </Box>

        <ListItem
          sx={{
            backgroundColor: activeLink === "login" ? "#00ABFF" : "#45495E",
            color: "white",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#172270",
            },
            position: "relative",
            bottom: 6,
          }}
          onClick={() => handleLinkClick("login")}
        >
          <Link
            sx={{
              textDecoration: "none",
              "&:hover": {
                color: "black",
                opacity: 1,
              },
            }}
            component={RouterLink}
            to="/login"
            color="inherit"
          >
            Login as Owner
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
