import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriesServices from "./categoriesService";


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
    extraReducers : builder => {
    builder
    .addCase(getAllCategories.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
    })
    .addCase(getAllCategories.fulfilled, (state,action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allCategories = action.payload;
        state.isError = false;
    })
    .addCase(getAllCategories.rejected, (state,action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
    })
    }
});

// Get All Categories
export const getAllCategories = createAsyncThunk("ALL/CATEGORIES", async(thunkAPI) => {
    try {
        return await categoriesServices.allCategories();
    } catch (error) {
        console.log(error.message);
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }
})

// Create Category
export const createCategory = createAsyncThunk("CREATE/CATEGORY", async(categoryData, thunkAPI) => {
    try {
        return await categoriesServices.addCategory(categoryData)
    } catch (error) {
        // console.log(error.message);
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }
})

export default categoriesSlice.reducer;