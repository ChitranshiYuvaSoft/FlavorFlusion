import React, { useEffect } from "react";
// import loginImg from '../../assets/Img/loginImg.png'
import { Box } from "@mui/material";
import LoginForm from "../../Components/Auth/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const { user, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/userdashboard");
    }
    if (isError && message) {
      alert("Something Went Wrong!!");
    }
  }, [user, isSuccess, isError, message]);


  if(isLoading){
    return (
      <h1>Loading....</h1>
    )
  }


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
