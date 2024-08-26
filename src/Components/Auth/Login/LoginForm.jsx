import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from '@mui/material/styles';

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


const CustomLabel = styled('label')(({ theme }) => ({
  fontSize: '1.5rem', // Adjust the font size here
  color: 'white'
}));

  return (
    <Card
      className="login-card"
      sx={{ paddingBlock: "1.5rem", paddingInline: "1rem" }}
    >
      <CardContent sx={{width:"100%", height:"80%", display:"flex", alignItems:"center", justifyContent:"space-around", flexDirection:"column"}}>
        <Typography
          sx={{ fontSize: 14 }}
          color="white"
          gutterBottom
          variant="h2"
        >
          Sing In
        </Typography>
        <Box
          sx={{width:"100%", display: "flex", alignItems: "flex-end", marginTop: "2rem" }}
        >
          <AccountCircle
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
            width:"100%", 
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
            sx={{ color: "white" , fontSize:"1.6rem",
              '& .MuiOutlinedInput-root': {
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'green', // Change border color on hover
                },
              },
              // "&:hover": {
              //   backgroundColor:"white",
              //              color: "white"}
      }}
      
            
          />
        </Box>

        {/* <FormControl variant="standard" fullWidth>
          <InputLabel
            htmlFor="standard-adornment-password"
            sx={{ color: "white" }}
          >
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            startAdornment={
              <InputAdornment position="end">
                <IconButton
                  fullWidth
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          fullWidth
          sx={{
            paddingBlock: "1rem",
            fontSize: "1.4rem",
            backgroundColor: "#D4AF37",
            color:"black",
            fontWeight: "bold",
            "&:hover": {
                    backgroundColor: "#0c0a0a",
                    color: "white"}
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default LoginForm;
