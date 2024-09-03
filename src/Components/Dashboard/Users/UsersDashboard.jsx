import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
// import AllUser from "../../../Components/Dashboard/AllUser/AllUser";
import AllUser from "../Users/AllUser/AllUser";

const UsersDashboard = () => {
  const [isClosing, setIsClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#0c0a0a" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          ml: {
            width: "100%",
            height: "7rem",
            backgroundColor: "#0c0a0a",
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              noWrap
              component="div"
              color="white"
              fontWeight="bold"
              sx={{ color: "white" }}
            >
              User Dashboard
            </Typography>

            <Box
              sx={{
                width: "5%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <PersonIcon sx={{ fontSize: "4rem" }} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        ></Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          open
        ></Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: "100%",

          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "none",
          boxShadow: "none",
          backgroundColor: "#0c0a0a",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#0c0a0a",
            alignItems: "center",

            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <AllUser />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UsersDashboard;
