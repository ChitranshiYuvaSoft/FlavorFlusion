import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    category : {},
    allCategories : [],
    editCategory : {category : {}, isEdit : false},
    isLoading : false,
    isSuccess : false,
    isError : false
}

const categoriesSlice = createSlice({
    name : "categories",
    initialState,
    reducers : {},
    extraReducers : builder => {}
});

export default categoriesSlice.reducer;