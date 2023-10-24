import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

// it will be make the reducers to be one temporary state database
// Reducer is like table in database
// And here, we will list all the table into one database
export default combineReducers({
  auth: authReducer,
});
