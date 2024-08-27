import React from "react";
import { Box } from "@mui/material";
import RegisterForm from "../../Components/Auth/RegisterForm";
const RegisterPage = () => {
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
