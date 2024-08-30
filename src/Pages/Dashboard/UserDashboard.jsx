import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import AllUser from "../../Components/Dashboard/ALL-User/AllUser";
import PersonIcon from "@mui/icons-material/Person";
// import Profile from "../../Components/Dashboard/Profile";
import userDefaultImage from "../../assets/Img/userDefaultImage.png";

const drawerWidth = 300;

const UserDashboard = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { user, isSuccess } = useSelector((state) => state.auth);
  console.log(user, "from dashboard");

  const token = user.token;
  console.log(token, "userDashboard");

  useEffect(() => {
    if (!user && !isSuccess) {
      navigate("/login");
    } else {
      navigate("/userdashboard");
    }
  }, [user, isSuccess]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Divider />
      <Box
        sx={{
          width: "100%",
          height: "99.9vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "#0c0a0a",
          // paddingTop: "5rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight={"bold"} color={"white"}>
            <span style={{ color: "#D4AF37" }}>Flavor</span>Fusion
          </Typography>
        </Box>


        <Box
    sx={{
      width: "100%",
      height: "40%",
      display: "flex",
      alignItems: "start",
      justifyContent: "start",
      flexDirection: "column",
    }}
  >
              {/* <UserProfile />++++++++++++++++++++++++ */}

      <List
    sx={{
      width: "100%",
      height: "8.5rem",
      paddingLeft: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Box
      sx={{
        width: "30%",
        height: "94%",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={userDefaultImage}
        alt="noImg"
        width={"80%"}
        height={"100%"}
        style={{ borderRadius: "50%" }}
      />
    </Box>
    <Box
      sx={{
        width: "65%",
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginLeft: "1rem",
          color: "#B1BDC7",
        }}
      >
        {user.name}
        <Typography variant="h6" sx={{ color: "#B1BDC7" }}>
          <span style={{ fontWeight: "550" }}></span> {user.email}
        </Typography>
      </Typography>
    </Box>
  </List>
    {/* <UserProfile />++++++++++++++++++++++++ */}
    {/* <Profile user={user}/> */}
  </Box>



        <Box
          sx={{
            width: "100%",
            height: "33%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <List
            sx={{
              width: "100%",
              height: "70%",
              display: "flex",
              alignItems: "end",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <ListItem
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ListItemText
                sx={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  sx={{ color: "#B1BDC7" }}
                >
                  {" "}
                  User
                </Typography>
              </ListItemText>
              <Button sx={{ color: "white" }}>
                <KeyboardArrowRightIcon fontSize="large" />
              </Button>
            </ListItem>
            <ListItem
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ListItemText
                sx={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  sx={{ color: "#B1BDC7" }}
                >
                  Products
                </Typography>
              </ListItemText>
              <Button sx={{ color: "white" }}>
                <KeyboardArrowRightIcon fontSize="large" />
              </Button>
            </ListItem>
            <ListItem
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ListItemText
                sx={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  sx={{ color: "#B1BDC7" }}
                >
                  {" "}
                  categories
                </Typography>
              </ListItemText>
              <Button sx={{ color: "white" }}>
                <KeyboardArrowRightIcon fontSize="large" />
              </Button>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "7%",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <List
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              padding: "0rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "100%",
                fontSize: "1.4rem",
                borderRadius: "0",
                backgroundColor: "#031D36",
                color: "black",
                backgroundColor: "#D4AF37",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#b0bec5",
                  color: "#0c0a0a",
                },
              }}
            >
              LogOut
            </Button>
          </List>
        </Box>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: "flex", backgroundColor: "#0c0a0a" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: {
            sm: `${drawerWidth}px`,
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
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
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
        {/* <DashboardUser +++++++++++++++++++/> */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            // flexDirection: {
            //   xl: "column",
            //   lg: "column",
            //   md: "column",
            //   sm: "column",
            //   xs: "column",
            // },
            flexDirection: "column",
            backgroundColor: "#0c0a0a",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <AllUser token={token} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;
