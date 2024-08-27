import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/auth/authSlice";

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const CustomLabel = styled("label")(({ theme }) => ({
    fontSize: "1.5rem",
    color: "white",
    letterSpacing: ".2rem",
  }));

  return (
    <Card
      className="reset-password-card"
      sx={{ paddingBlock: "1.5rem", paddingInline: "1rem" }}
    >
      <CardContent
        sx={{
          width: "100%",
          height: "80%",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ letterSpacing: 3 }}
          color="white"
          gutterBottom
          variant="h4"
        >
          Reset Password
        </Typography>
     

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          {showPassword ? (
            <VisibilityOff
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{ color: "white", mr: 1, my: 0.5, fontSize: "3rem" }}
            />
          ) : (
            <Visibility
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{ color: "white", mr: 1, my: 0.5, fontSize: "3rem" }}
            />
          )}

          <TextField
            label={<CustomLabel>Password</CustomLabel>}
            variant="standard"
            fullWidth
            type={showPassword ? "text" : "password"}
            sx={{
              color: "white",

              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "1.5rem"
              },
            }}
              />
        </Box>


        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          {showPassword ? (
            <VisibilityOff
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{ color: "white", mr: 1, my: 0.5, fontSize: "3rem" }}
            />
          ) : (
            <Visibility
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{ color: "white", mr: 1, my: 0.5, fontSize: "3rem" }}
            />
          )}

          <TextField
            label={<CustomLabel>Confirm Password</CustomLabel>}
            variant="standard"
            fullWidth
            type={showPassword ? "text" : "password"}
            sx={{
              color: "white",

              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "1.5rem"
              },
            }}
              />
        </Box>
      </CardContent>
      <CardActions
        sx={{
          width: "100%",
          height: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Button
          size="small"
          variant="contained"
          fullWidth
          sx={{
            paddingBlock: "1rem",
            fontSize: "1.4rem",
            backgroundColor: "#D4AF37",
            color: "black",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#0c0a0a",
              color: "white",
            },
          }}
                >
          Reset Password
        </Button>
      
      </CardActions>
     
    </Card>
  );
};

export default ResetPasswordForm;
