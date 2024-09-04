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
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  editCategory,
  getAllCategories,
  updateCategory,
} from "../../../../Redux/Categories/categoriesSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const allCategoriesData = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Categories ${index + 1}`,
  email: `categories${index + 1}@example.com`,
  createdAt: `2024-01-${(index % 30) + 1}`,
  updatedAt: `2024-01-${(index % 30) + 1}`,
}));




const AllCategories = () => {
  const { allCategories, isSuccess, edit } = useSelector(
    (state) => state.category
  );
  const token = localStorage.getItem("token");

  // API Fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories(token));
  }, []);

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const currentPageData = allCategories.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Create Categary

  const [categoryData, setCategoryData] = useState({
    name: "",
    status: "",
  });
  const { name, status } = categoryData;

  const handleChange = (e) => {
    setCategoryData({
      ...categoryData,
      [e.target.name]: e.target.value,
    });
  };

  // Create and Update Category

  const handleCreateCategory = (e) => {
    e.preventDefault();
    console.log("Create Category");
    if (edit.isEdit) {
      dispatch(
        updateCategory({
          _id: edit.category._id,
          name: name,
          status: status,
        })
      );
      alert("Successfully Update Category!!");
    } else {
      dispatch(createCategory(categoryData));
      alert("Successfully Create Category!!");
    }
    setCategoryData({
      name : "",
      status : ""
    });
  };

  const handleEditCategory = (category) => {
    alert("edit Category");
    console.log(category);
    dispatch(editCategory(category));
  };

  useEffect(() => {
    setCategoryData({
      name: edit.category.name,
      status: edit.category.status,
    });
  }, [edit]);
console.log(allCategories)
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
        <Box
          sx={{
            width: "30%",
            height: "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <TextField
            placeholder="Create Category"
            sx={{
              padding: "0rem",
              borderRadius: "0rem",
              fontSize: "2rem",
              backgroundColor: "white",
            }}
            name="name"
            value={name}
            onChange={handleChange}
          />
          <select
            className="category-dropdown"
            name="status"
            value={status}
            onChange={handleChange}
            // placeholder="Select Category"
          >
            <option >Select Category</option>
            <option value="true">True</option>
            <option value="false">Flase</option>
          </select>
          <Button
            variant="contained"
            color="success"
            sx={{
              fontSize: "1.2rem",
              paddingBlock: "0.9rem",
              borderRadius: "0rem",
            }}
            type="submit"
            onClick={handleCreateCategory}
          >
            <PlaylistAddIcon sx={{ fontSize: "3rem" }} />
          </Button>
        </Box>
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
                {/* <TableCell
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Email
                  </TableCell> */}
                {/* <TableCell
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
                  </TableCell> */}
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
              {currentPageData.map((category) => (
                <TableRow key={category.id}>
                  <TableCell
                    sx={{
                      fontSize: "1.4rem",
                      color: "#b0bec5",
                      textAlign: "center",
                    }}
                  >
                    {category._id}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.4rem",
                      color: "#b0bec5",
                      textAlign: "center",
                    }}
                  >
                    {category.name}
                  </TableCell>
                  {/* <TableCell
                      sx={{
                        fontSize: "1.4rem",
                        color: "#b0bec5",
                        textAlign: "center",
                      }}
                    >
                      {category.email}
                    </TableCell> */}
                  {/* <TableCell
                      sx={{
                        fontSize: "1.4rem",
                        color: "#b0bec5",
                        textAlign: "center",
                      }}
                    >
                      {category.createdAt}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1.4rem",
                        color: "#b0bec5",
                        textAlign: "center",
                      }}
                    >
                      {category.updatedAt}
                    </TableCell> */}
                  <TableCell
                    sx={{
                      fontSize: "1.4rem",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "60%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{ fontSize: "1.2rem", paddingBlock: "0.95rem" }}
                        onClick={() => handleEditCategory(category)}
                      >
                        <EditIcon />
                      </Button>
                      {/* <UpdateUser open={open} handleClose={handleClose} /> */}
                      {/* <Button
                          variant="contained"
                          color="error"
                          sx={{ fontSize: "1.2rem" ,  paddingBlock:"0.95rem"}}
                          // onClick={() => handleUserDelete(user.id)}
                        >
                          <DeleteIcon />
                        </Button> */}
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ fontSize: "1.2rem" }}
                        // onClick={() => handleUserDelete(user.id)}
                      >
                        View
                      </Button>
                    </Box>
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
