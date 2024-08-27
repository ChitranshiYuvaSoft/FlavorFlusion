import React from "react";
import { Box } from "@mui/material";
import ResetPasswordForm from "../../Components/Auth/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <>
      <Box className="reset-password-page">
        <Box className="left-reset-password"></Box>
        <Box className="right-reset-password">
          <ResetPasswordForm />
        </Box>
      </Box>
    </>
  );
};

export default ResetPasswordPage;
