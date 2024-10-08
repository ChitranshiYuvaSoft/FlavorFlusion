import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Button, Drawer } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import userDefaultImage from "../../assets/Img/userDefaultImage.png";
// import ProductsDashboard from "./Products/ProductsDashboard";
// import UsersDashboard from "./Users/UsersDashboard";
// import CategoriesDashboard from "./Categories/CategoriesDashboard";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/auth/authSlice";
import UsersDashboard from "../../Components/Dashboard/Users/UsersDashboard";
// import { logoutUser } from "../../Redux/auth/authSlice";
import CategoriesDashboard from "../../Components/Dashboard/Categories/CategoriesDashboard";
import ProductsDashboard from "../../Components/Dashboard/Products/ProductsDashboard";

const drawerWidth = 345;

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState(null);
  const { user, isSuccess, registerUser, allUsers } = useSelector(
    (state) => state.auth
  );

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, []);

  const logout = () => {
    console.log("Logout Successfully!");
    dispatch(logoutUser());
    navigate("/login");
  };

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0c0a0a",
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        color={"white"}
        textAlign={"center"}
        sx={{ marginTop: "3rem" }}
      >
        <span style={{ color: "#D4AF37" }}>Flavor</span>Fusion
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ flex: 1 }}>
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
        <List>
          <ListItem
            button
            selected={selectedSection === "products"}
            onClick={() => handleSectionChange("products")}
          >
            <ListItemText
              primary="Products"
              sx={{ color: "white", fontSize: "3rem" }}
            />
            <Button sx={{ color: "white" }}>
              <KeyboardArrowRightIcon fontSize="large" />
            </Button>
          </ListItem>

          <ListItem
            button
            selected={selectedSection === "users"}
            onClick={() => handleSectionChange("users")}
          >
            <ListItemText
              primary="Users"
              sx={{ color: "white", fontSize: "5rem" }}
            />
            <Button sx={{ color: "white" }}>
              <KeyboardArrowRightIcon fontSize="large" />
            </Button>
          </ListItem>

          <ListItem
            button
            selected={selectedSection === "categories"}
            onClick={() => handleSectionChange("categories")}
          >
            <ListItemText
              primary="Categories"
              sx={{ color: "white", fontSize: "5rem" }}
            />
            <Button sx={{ color: "white" }}>
              <KeyboardArrowRightIcon fontSize="large" />
            </Button>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            py: "1.5rem",
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "#D4AF37",
            "&:hover": {
              backgroundColor: "#b0bec5",
              color: "#0c0a0a",
            },
          }}
          onClick={logout}
        >
          LogOut
        </Button>
      </Box>
    </Box>
  );

  const renderContent = () => {
    switch (selectedSection) {
      case "products":
        return <ProductsDashboard />;
      case "users":
        return <UsersDashboard />;
      case "categories":
        return <CategoriesDashboard />;

      default:
        return <UsersDashboard />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            overflow: "hidden",
            height: "auto",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#0c0a0a",
          height: "100vh",
          color: "white",
        }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;
