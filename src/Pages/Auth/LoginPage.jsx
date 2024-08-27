import React from "react";
// import loginImg from '../../assets/Img/loginImg.png'
import { Box } from "@mui/material";
import LoginForm from "../../Components/Auth/LoginForm";
const LoginPage = () => {
  return (
    <>
      <Box className="login-page">
        <Box className="left-login"></Box>
        <Box className="right-login">
                <LoginForm/>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
