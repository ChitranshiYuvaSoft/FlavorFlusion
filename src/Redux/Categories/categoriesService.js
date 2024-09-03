import axios from "axios";
import axiosInstance from "../Interceptors/axiosInterceptors";

const allCategories = async() => {
    const response = await axiosInstance.get("/category?pageNumber=1&pageSize=20");
    // console.log(response.data.data)
    return response.data.data;
}

const addCategory = async(categoryData) => {
    console.log(categoryData, "service category")
    const response = await axiosInstance.post('/category', categoryData);
    console.log(response.data, "from Category Service")
    return response;
}

const categoriesServices = {
    allCategories,
    addCategory,
}

export default categoriesServices;