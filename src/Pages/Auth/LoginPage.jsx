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
  const navigate = useNavigate();
  const { user, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );
  console.log(user, "from login")

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/userdashboard");
    }
    if (isError && message) {
      errorMessage();
    }
  }, [user, isSuccess, isError, message]);


  if(isLoading){
    return (
      <>
      <Loading/>
      </>
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
