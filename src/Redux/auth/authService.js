import axios from "axios";
import axiosInstance from "../Interceptors/axiosInterceptors";

// Login User
const login = async (formdata) => {
  const response = await axiosInstance.post("/user/login", formdata);
  return response.data.data;
};

// Register User
const register = async (userData) => {
  const response = await axiosInstance.post("/user", userData);
  return response.data.data;
};

// Email Verification
const verification = async (data) => {
  console.log(data, "service");
  const response = await axiosInstance.get(
    `/user/email/verification?token=${data.token}&userId=${data.id}`
  );
  return response.data;
};

// Get All Users
const allUsers = async () => {
  const response = await axiosInstance.get("/user?pageNumber=1&pageSize=50");
  return response.data.data;
};

// Delete User
const removeUser = async (id) => {
  const response = await axiosInstance.delete(`/user/${id}`);
  console.log(response.data, "delte servicre")
  return response.data;
};

// Update User
const updatedUser = async (userdata, token) => {
  console.log(userdata, "from UserData Service");
  const response = await axios.put(
    `https://node-js-wse4.onrender.com/user/${userdata.id}`,
    {
      name: userdata.name,
      email: userdata.email,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  console.log(response.data, "From response Service");
  return response.data;
};

const authServices = {
  login,
  register,
  allUsers,
  removeUser,
  updatedUser,
  verification,
};

export default authServices;
