import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import { useSelector } from "react-redux";

// Define the styled component outside of the functional component
const CustomLabel = styled.label(({ theme }) => ({
  fontSize: "1.3rem",
  color: "gray",
  letterSpacing: ".2rem",
}));

function UpdateUser({ open, handleClose }) {

  const [userUpdate, setUserUpdate] = React.useState({
    name : "", 
    email : "",
    password : ""
  });

  const {name, email, password} = userUpdate;

  const {editUser} = useSelector(state => state.auth);
  // console.log(editUser, "Edit User From User Update");


  React.useEffect(()=>{
    setUserUpdate({
      name : editUser.user.name,
      email : editUser.user.email,
      password : editUser.user.password
    })
  },[editUser]);


  const handleChange = (e) => {
    setUserUpdate({
      ...userUpdate,
      [e.target.name] : e.target.value
    })
  }

  const handleUpdate = (e) => {
    console.log("Update Successfully!!");

  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle sx={{ fontSize: "2rem", fontWeight: "bold" }}>
          Update User
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
            Update User Details Carefully-
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            
            label={<CustomLabel>Email Address</CustomLabel>}
            type="name"
            fullWidth
            variant="standard"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            
            label={<CustomLabel>Email Address</CustomLabel>}
            type="email"
            fullWidth
            variant="standard"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
           
            label={<CustomLabel>Password</CustomLabel>}
            type="password"
            fullWidth
            variant="standard"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{fontSize:"1.2rem"}}>Cancel</Button>
          <Button type="submit" sx={{fontSize:"1.2rem"}} onClick={handleUpdate}>Update User</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default UpdateUser;
