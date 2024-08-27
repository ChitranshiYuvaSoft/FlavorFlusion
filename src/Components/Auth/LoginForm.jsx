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

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  const CustomLabel = styled("label")(({ theme }) => ({
    fontSize: "1.5rem",
    color: "white",
    letterSpacing: ".2rem",
  }));

  return (
    <Card
      className="login-card"
      sx={{ paddingBlock: "1.5rem", paddingInline: "1rem" }}
    >
      <CardContent
        sx={{
          width: "100%",
          height: "60%",
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
          Sing In
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            marginTop: "2rem",
          }}
        >
          <AttachEmailIcon
            sx={{ color: "white", mr: 1, my: 0.5, fontSize: "3rem" }}
          />
          <TextField
            label={<CustomLabel>Email</CustomLabel>}
            variant="standard"
            fullWidth
            sx={{
              backgroundColor: "transparent",
              "& .MuiInputBase-input": {
                // backgroundColor: "transparent",
                color: "white !important",
                fontSize: "1.5rem", // Adjust font size here
              },
            }}
            name="email"
            value={email}
            onChange={handleChange}
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
            label={<CustomLabel>Password</CustomLabel>}
            variant="standard"
            fullWidth
            type={showPassword ? "text" : "password"}
            sx={{
              color: "white",

              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "1.5rem", // Adjust font size here
              },
            }}
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Box>
      </CardContent>
      <CardActions
        sx={{
          width: "100%",
          height: "30%",
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
          type="submit"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Button
          size="small"
          variant="contained"
          fullWidth
          sx={{
            marginLeft: "0rem !important",
            paddingBlock: "1rem",
            fontSize: "1.4rem",
            backgroundColor: "#fff",
            color: "black",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#0c0a0a",
              color: "white",
            },
          }}
        >
          Login With Google
        </Button>
      </CardActions>
      <Box>
        <Typography align="center" variant="h6">
          Don't have an account{" "}
          <Link to={"/register"} className="link">
            Sign Up
          </Link>
        </Typography>
        <Typography align="center" variant="h6">
          <Link to={"/reset-password"} className="link">
            Forget Password
          </Link>
        </Typography>
      </Box>
    </Card>
  );
};

export default LoginForm;
