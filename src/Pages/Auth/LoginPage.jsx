import React, { useEffect } from "react";
// import loginImg from '../../assets/Img/loginImg.png'
import { Box } from "@mui/material";
import LoginForm from "../../Components/Auth/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { toast } from "react-toastify";
import { errorMessage } from "../../Components/Cases/Cases";
const LoginPage = () => {


 


  return (
    <>
      <Box className="login-page">
        <Box className="left-login"></Box>
        <Box className="right-login">
          <LoginForm />
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
