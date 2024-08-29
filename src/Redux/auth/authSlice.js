import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));
console.log(userExist, "slice data")

const initialState = {
  user: userExist ? userExist : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message : ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
    })
    .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false
        state.message = action.payload
    })
  },
});

export const loginUser = createAsyncThunk(
  "LOGIN/USER",
  async (formdata, thunkAPI) => {
    try {
      return await authServices.login(formdata);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerUser = createAsyncThunk("REGISTER/USER", async(formdata, thunkAPI)=>{
  try {
    return await authServices.register(formdata);
  } catch (error) {
   const message = error.response.data.message;
   return thunkAPI.rejectWithValue(message);
  }
})

export const getAllUser = createAsyncThunk("GET/ALLUSERS", async(token) => {
  try {
    return await authServices.allUsers(token);
  } catch (error) {
  //    const message = error.response.data.message;
  //  return thunkAPI.rejectWithValue(message);
  console.log(error.message);
  }
})

export default authSlice.reducer;
