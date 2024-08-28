import axios from "axios";
const liveUrl = "https://node-js-wse4.onrender.com/";

export const login = async(formdata) => {
    const response = await axios.post("https://node-js-wse4.onrender.com/user/login", formdata);
    console.log(response.data.data);
    localStorage.setItem("user" , JSON.stringify(response.data.data));
    return response.data.data;
}
