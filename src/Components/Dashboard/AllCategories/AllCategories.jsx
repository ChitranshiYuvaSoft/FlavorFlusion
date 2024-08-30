import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import HomeIcon from "@mui/icons-material/Home";
  import styled from "styled-components";
  
  
  const allCategoriesData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Categories ${index + 1}`,
    email: `categories${index + 1}@example.com`,
    createdAt: `2024-01-${(index % 30) + 1}`,
    updatedAt: `2024-01-${(index % 30) + 1}`,
  }));
  
  const AllCategories = () => {
    // Pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(7);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
      "& .css-levciy-MuiTablePagination-displayedRows": {
        fontSize: "1.6rem",
        color: "white",
      },
      "& .MuiTablePagination-selectLabel": {
        fontSize: "1.6rem",
        color: "white",
      },
      "& .MuiTablePagination-select": {
        fontSize: "1.6rem",
      },
      "& .MuiTablePagination-selectIcon": {
        fontSize: "1.6rem",
        color: "white",
      },
      "& .MuiTablePagination-spacer": {
        fontSize: "1.6rem",
      },
      "& .MuiTablePagination-actions": {
        fontSize: "1.6rem",
      },
    }));
  
    const currentPageData = allCategoriesData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  
      
  
  
  
    return (
      <>
        <Box sx={{ width: "100%", height: "10%" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "1.6rem",
              display: "flex",
              alignItems: "end",
              justifyContent: "start",
            }}
          >
            <HomeIcon
              sx={{ color: "white", fontSize: "4rem", marginRight: "1rem" }}
            />{" "}
            / Categories
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "80%",
            overflowY: "scroll",
          }}
        >
          <TableContainer>
            <Table
              sx={{
                width: "100%",
                height: "100%",
                minWidth: 700,
              }}
              aria-label="customized table"
            >
              <TableHead sx={{ width: "100%", height: "10%" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Id
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    CreatedAt
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    UpdatedAt
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
  
              <TableBody>
                {currentPageData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell
                      sx={{
                        fontSize: "1.4rem",
                        color: "#b0bec5",
                        textAlign: "center",
                      }}
                    >
                      {user.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1.4rem",
                        color: "#b0bec5",
                        textAlign: "center",
                      }}
                    >
                      {user.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1.4rem",
                        color: "#b0bec5",
                        textAlign: "center",
                      }}
                    >
                      {user.email}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1.4rem",
                        color: "#b0bec5",
                        textAlign: "center",
                      }}
                    >
                      {user.createdAt}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1.4rem",
                        color: "#b0bec5",
                        textAlign: "center",
                      }}
                    >
                      {user.updatedAt}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.4rem", textAlign: "center" }}>
                      <Button
                        variant="contained"
                        sx={{
                          fontSize: "1.2rem",
                          color: "#0c0a0a",
                          fontWeight: "bold",
                          borderColor: "white",
                          backgroundColor: "#D4AF37",
                          "&:hover": {
                            backgroundColor: "#b0bec5",
                            color: "#0c0a0a",
                          },
                        }}
                      >
                        View All Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ width: "100%", height: "10%" }}>
          <StyledTablePagination
            component="div"
            count={allCategoriesData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </>
    );
  };
  
  export default AllCategories;
  
  
  
  

