import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
const HomePage = () => {
  const navigate = useNavigate();
  const { user, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!user && !isSuccess) {
      navigate("/login");
    }
    if (isError && message) {
      alert("Something Went Wrong!!");
    }
  }, [user, isSuccess, isError, message]);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Box className="home-page">
        <Box className="home"></Box>
      </Box>
    </>
  );
};

export default HomePage;
