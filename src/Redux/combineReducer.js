import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import categoryReducer from './Categories/categoriesSlice';
const reducer = combineReducers({
    auth : authReducer,
    category : categoryReducer,
});

export default reducer;