import React from "react";
// import loginImg from '../../assets/Img/loginImg.png'
import { Box } from "@mui/material";
import LoginForm from "../../Components/Auth/Login/LoginForm";
const LoginPage = () => {
  return (
    <>
      <Box className="login-page">
        <Box className="left-login"></Box>
        <Box className="right-login">
            {/* <Box className="login-card"> */}
                <LoginForm/>
            {/* </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
