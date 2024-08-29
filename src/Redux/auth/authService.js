import axios from "axios";
const liveUrl = "https://node-js-wse4.onrender.com/";

const login = async (formdata) => {
  const response = await axios.post(
    "https://node-js-wse4.onrender.com/user/login",
    formdata
  );
  console.log(response.data.data);
  localStorage.setItem("user", JSON.stringify(response.data.data));
  return response.data.data;
};

const register = async (formdata) => {
  const response = await axios.post(
    "https://node-js-wse4.onrender.com/user",
    formdata
  );
  console.log(response);
  return response;
};

const allUsers = async (token) => {
const response = await axios.get("https://node-js-wse4.onrender.com/user?pageNumber=1&pageSize=10",{
    "headers":{
        "Authorization" : "Bearer " + token
    }})
  console.log(response.data.data);
  return response.data.data;
};

const authServices = {
  login,
  register,
  allUsers,
};

export default authServices;
