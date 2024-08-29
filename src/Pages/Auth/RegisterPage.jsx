import React, { useEffect } from "react";
import { Box } from "@mui/material";
import RegisterForm from "../../Components/Auth/RegisterForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
const RegisterPage = () => {
  const navigate = useNavigate();
  const { user, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/userdashboard");
    }
    if (isError && message) {
      alert("Something Went Wrong!!");
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
      <Box className="register-page">
        <Box className="left-register"></Box>
        <Box className="right-register">
          <RegisterForm/>
        </Box>
      </Box>
    </>
  );
};

export default RegisterPage;
