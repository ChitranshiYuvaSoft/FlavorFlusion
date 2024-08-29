import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
 const {user} = useSelector(state => state.auth)
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    setDarkMode(event.target.checked);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box sx={{ width: 250, height:"100%" }} className="drawer" role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
     <Box><Typography variant="h4" sx={{ width:"100%", height:"10vh", color:"white", display:"flex", alignItems:"center", justifyContent:"start", marginLeft:"3rem"}}><span style={{ color: "#D4AF37" }}>Flavor</span>Fusion</Typography></Box>
      <List>
        <ListItem to="/register">
          <ListItemText primary="Register" />
        </ListItem>
        <ListItem to="/login">
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 , width:"100%", height:"10vh"}}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ fontSize: "2rem", color: "white" }} />
            </IconButton>
          )}
          <Typography
            variant="h4"
            component="div"
            onClick={() => navigate("/")}
            sx={{ flexGrow: 1, fontWeight: "900", cursor: 'pointer' }}
          >
            <span style={{ color: "#D4AF37" }}>Flavor</span>Fusion
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              width: "auto",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {user ? (
             
               <>
                <Link to={"/userdashboard"} style={{ color: "white" }}>
                <Button color="inherit" sx={{ fontSize: "1.2rem" }}>
                 Dashboard
                </Button>
               </Link>
               {/* <Link to={"/userdashboard"} style={{ color: "white" }}>
                <Button color="inherit" sx={{ fontSize: "1.2rem" }}>
                 Products
                </Button>
               </Link> */}
               </>
            ) : (
              <>
                <Link to={"/register"} style={{ color: "white" }}>
                  <Button color="inherit" sx={{ fontSize: "1.2rem" }}>
                    Register
                  </Button>
                </Link>
                <Link to={"/"} style={{ color: "white" }}>
                  <Button color="inherit" sx={{ fontSize: "1.2rem" }}>
                    Login
                  </Button>
                </Link>
              </>
            )}
          </Box>
          {/* <FormControlLabel
            control={<Switch checked={darkMode} onChange={handleChange} />}
            label="Dark Mode"
            sx={{ ml: 2, display: { xs: 'none', sm: 'block' } }}
          /> */}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
