import axios from "axios";

const allCategories = async() => {
    const response = await axios.get("");
    console.log(response)
    return response;
}

const categoriesServices = {
    allCategories
}

export default categoriesServices;