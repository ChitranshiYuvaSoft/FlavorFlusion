import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
const reducer = combineReducers({
    auth : authReducer,
});

export default reducer;