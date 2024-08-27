import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const CustomLabel = styled("label")(({ theme }) => ({
    fontSize: "1.5rem", // Adjust the font size here
    color: "white",
    letterSpacing: ".2rem",
  }));

  return (
    <Card
      className="register-card"
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
          <AccountCircleIcon
            sx={{ color: "white", mr: 1, my: 0.5, fontSize: "3rem" }}
          />
          <TextField
            label={<CustomLabel>Name</CustomLabel>}
            variant="standard"
            fullWidth
            sx={{ color: "white" }}
          />
        </Box>
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
            sx={{ color: "white" }}
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
            sx={{
              color: "white",
              fontSize: "60rem",
              "& .MuiOutlinedInput-root": {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "green", // Change border color on hover
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "1.5rem", // Adjust font size here
              },
            }}
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
        >
          Learn More
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
          Sign Up With Google
        </Button>
      </CardActions>
      <Box sx={{width:"100%", height:"10%"}}>
        <Typography align="center" variant="h6">
          You have already account <Link to={"/"} className="link">Sign In</Link>
        </Typography>
      </Box>
    </Card>
  );
};

export default RegisterForm;
