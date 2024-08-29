import { Box, Button, TableCell, TableRow } from '@mui/material'
import React from 'react'

const AllUserData = () => {
  return (
    <TableRow>
                <TableCell sx={{ fontSize: "1.4rem",fontWeight:"bold", textAlign: "center" }}>
                  1
                </TableCell>
                <TableCell sx={{ fontSize: "1.4rem",fontWeight:"bold", textAlign: "center" }}>
                  Vibha
                </TableCell>
                <TableCell sx={{ fontSize: "1.4rem",fontWeight:"bold", textAlign: "center" }}>
                  vibha@gmail.com
                </TableCell>
                <TableCell sx={{ fontSize: "1.4rem", textAlign: "center" }}>
                  12/04/2024
                </TableCell>
                <TableCell sx={{ fontSize: "1.4rem", textAlign: "center" }}>
                  12/07/2024
                </TableCell>
                <TableCell
                  sx={{ fontSize: "1. 5rem", textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center" }}
                >
                  <Box sx={{ width:"60%", height:"100%", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                    <Button variant="contained" color="warning" sx={{ fontSize: "1.2rem"}}>Edit</Button>
                    <Button variant="contained" color="error"  sx={{ fontSize: "1.2rem"}}>Delete</Button>
                  </Box>
                </TableCell>
              </TableRow>
  )
}

export default AllUserData
