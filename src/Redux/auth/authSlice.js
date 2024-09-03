import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authService";

const initialState = {
  user: {},
  registerUser: null,
  allUsers: [],
  editUser: { user: {}, isEdit: false },
  verificationMessage: "",
  isError: false,
  isSuccess: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    editUserReducer: (state, action) => {
      return {
        ...state,
        editUser: { user: action.payload, isEdit: true },
      };
    },
  },
  extraReducers: (builder) => {
    builder

      // Login User
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // console.log(action.payload,"login action")
        localStorage.setItem("token", action.payload.token);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })

      // Register User
      .addCase(registerUsers.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(registerUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.registerUser = action.payload;
      })
      .addCase(registerUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })

      // Email Verification
      .addCase(emailVerification.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(emailVerification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.verificationMessage = action.payload;
        state.isError = false;
      })
      .addCase(emailVerification.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.payload;
      })

      // All Users Data
      .addCase(getAllUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.allUsers = action.payload;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })

      // Delete User
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

// Login User
export const loginUser = createAsyncThunk(
  "LOGIN/USER",
  async (formdata, thunkAPI) => {
    try {
      return await authServices.login(formdata);
    } catch (error) {
      const message = error.response.data.message;
      console.log(message, "from slice message");
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Register User
export const registerUsers = createAsyncThunk(
  "REGISTER/USER",
  async (formdata, thunkAPI) => {
    try {
      return await authServices.register(formdata);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Email Verification
export const emailVerification = createAsyncThunk(
  "EMAIL/VERIFICATION",
  async (data, thunkAPI) => {
    console.log(data, "Slice Verification");
    try {
      return await authServices.verification(data);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout User
export const logoutUser = createAsyncThunk("LOGOUT/USER", async () => {
  localStorage.setItem("token", "");
});

// All Users
export const getAllUser = createAsyncThunk("GET/ALLUSERS", async (thunkAPI) => {
  try {
    return await authServices.allUsers();
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete User
export const deleteUser = createAsyncThunk(
  "DELETE/USER",
  async (id, thunkAPI) => {
    try {
      return await authServices.removeUser(id);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update User
export const updateUser = createAsyncThunk(
  "UPDATE/USER",
  async (userdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await authServices.updatedUser(userdata, token);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const { editUserReducer } = authSlice.actions;

export default authSlice.reducer;
