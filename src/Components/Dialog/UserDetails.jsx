import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const UserDetailDialog = ({ open, handleClose }) => (
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
      sx: {
        width: '35rem',  
        height: '30rem', 
        maxWidth: '100%', 
        maxHeight: '80vh',
        overflow: 'hidden',
        borderRadius:"0rem"
      },
    }}
  >
    <DialogTitle sx={{ fontSize: "2rem", fontWeight: "bold" }}>
      User Details
    </DialogTitle>
    <DialogContent sx={{width:"100%", height:"80%", display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"space-between"}}>
      <DialogContentText
        sx={{ fontSize: "1.6rem", fontWeight: "bold" }}
      >
        Carefully Read User Details
      </DialogContentText>
      <Typography variant="h5"><span style={{fontWeight:"bold"}}>UserId : </span>1234567890</Typography>
      <Typography variant="h5"><span style={{fontWeight:"bold"}}>Name : </span> Radhe</Typography>
      <Typography variant="h5"><span style={{fontWeight:"bold"}}>Email Address : </span> radhe@gmail.com</Typography>
      <Typography variant="h5"><span style={{fontWeight:"bold"}}>CreatedAt : </span> 12/05/23</Typography>
      <Typography variant="h5"><span style={{fontWeight:"bold"}}>UpdatedAt : </span> 30/06/24</Typography>
    </DialogContent>
    <DialogActions>
      <Button variant='contained' color='warning' onClick={handleClose} sx={{ fontSize: "1.2rem" }}>
        Edit
      </Button>
      <Button variant='contained' color='error' sx={{ fontSize: "1.2rem" }}>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);

export default UserDetailDialog;
