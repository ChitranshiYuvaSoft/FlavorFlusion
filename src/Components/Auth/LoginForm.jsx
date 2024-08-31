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
import * as yup from "yup";
import { useFormik } from "formik";

// Use Yup Validation On Login Form
const validationSchema = yup.object({
  email: yup
    .string("Enter Your Email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CustomLabel = styled("label")(({ theme }) => ({
    fontSize: "1.5rem",
    color: "white",
    letterSpacing: ".2rem",
  }));

  // Formik Form In Material UI
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginUser(values));
      navigate('/dashboard')
      console.log("Submit Data");
      // alert(JSON.stringify(values, null, 2));
      dispatch(loginUser(values));
    },
  });

  return (
    <Card
      className="register-card"
      sx={{ paddingBlock: "1.5rem", paddingInline: "1rem" }}
    >
      <form
        style={{ width: "100%", height: "90%" }}
        action=""
        onSubmit={formik.handleSubmit}
      >
        <CardContent
          sx={{
            width: "100%",
            height: "70%",
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
            }}
          >
            <AttachEmailIcon
              sx={{ color: "white", mr: "1.5rem", my: 0.5, fontSize: "3rem" }}
            />
            <TextField
              label={<CustomLabel>Email</CustomLabel>}
              variant="standard"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                  fontSize: "1.5rem",
                },
              }}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "flex-center",
              justifyContent: "center",
              // marginTop: "2rem",
            }}
          >
            {showPassword ? (
              <VisibilityOff
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                sx={{ color: "white", mr: "1.5rem", my: 0.5, fontSize: "3rem" }}
              />
            ) : (
              <Visibility
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                sx={{ color: "white", mr: "1.5rem", my: 0.5, fontSize: "3rem" }}
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
                    borderColor: "green",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontSize: "1.4rem",
                },
              }}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
            Sign In With Google
          </Button>
        </CardActions>
      </form>

      <Box sx={{ width: "100%", height: "10%" }}>
        <Typography align="center" variant="h6">
          You have already account{" "}
          <Link to={"/"} className="link">
            Sign In
          </Link>
        </Typography>
      </Box>
    </Card>
  );
};

export default LoginForm;
