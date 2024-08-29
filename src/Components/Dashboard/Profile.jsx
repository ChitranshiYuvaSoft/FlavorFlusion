import { Box, List, Typography } from '@mui/material'
import userDefaultImage from "../../assets/Img/userDefaultImage.png";
import React from 'react'

const Profile = ({user}) => {
  return (

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
    <Profile user={user}/>
  </Box>
  
  )
}

export default Profile
