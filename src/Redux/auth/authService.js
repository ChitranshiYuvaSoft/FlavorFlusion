import axios from "axios";
const liveUrl = "https://node-js-wse4.onrender.com/";

// Login User
const login = async (formdata) => {
  const response = await axios.post(
    "https://node-js-wse4.onrender.com/user/login",
    formdata
  );
  console.log(response.data.data);
  localStorage.setItem("user", JSON.stringify(response.data.data));
  return response.data.data;
};

// Register User
const register = async (formdata) => {
  const response = await axios.post(
    "https://node-js-wse4.onrender.com/user",
    formdata
  );
  console.log(response);
  return response;
};

// Get All Users
const allUsers = async (token) => {
  const response = await axios.get(
    "https://node-js-wse4.onrender.com/user?pageNumber=1&pageSize=18",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  console.log(response.data.data);
  return response.data.data;
};

// Delete User
const removeUser = async (id, token) => {
  const response = await axios.delete(
    `https://node-js-wse4.onrender.com/user/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
};

// Update User
const updatedUser = async (userdata, token) => {
  console.log(userdata, "from UserData Service");
  const response = await axios.put(
    `https://node-js-wse4.onrender.com/user/${userdata.id}`, {
      name : userdata.name,
      email : userdata.email
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
};

export default authServices;
