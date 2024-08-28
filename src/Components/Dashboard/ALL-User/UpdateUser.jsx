import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";

function UpdateUser({ open, handleClickOpen, handleClose }) {
    const CustomLabel = styled("label")(({ theme }) => ({
        fontSize: "1.3rem",
        color: "gray",
        letterSpacing: ".2rem",
      }));
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
            id="email"
            name="email"
            label={<CustomLabel>Email Address</CustomLabel>}
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label={<CustomLabel>Password</CustomLabel>}
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{fontSize:"1.2rem"}}>Cancel</Button>
          <Button type="submit" sx={{fontSize:"1.2rem"}}>Update User</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default UpdateUser;
