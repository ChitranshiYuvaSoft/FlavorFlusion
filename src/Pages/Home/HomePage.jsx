import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Box className="home-page">
        <Box className="home">
          <Card sx={{backgroundColor:"transparent", width:"60%", height:"60%", display:"flex", alignItems:"center", justifyContent:"space-around", flexDirection:"column"}}>
          <Typography variant="h2" sx={{color:"white"}}>
            Welcome to <span style={{ color: "#D4AF37" }}>Flavor</span>Fusion
          </Typography>
          <Box sx={{ width:"100%", height:"40%", display:"flex", alignItems:"center", justifyContent:"space-around", flexDirection:"column"}}>
            <Button variant="contained" color="info" fullWidth sx={{paddingBlock:"1rem", fontSize:"1.4rem"}}>Admin</Button>
            <Button variant="contained" color="info" fullWidth  sx={{paddingBlock:"1rem", fontSize:"1.4rem"}}>Shop Product</Button>
          </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
