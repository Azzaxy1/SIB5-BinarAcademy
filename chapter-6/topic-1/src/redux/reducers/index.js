import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import movieReducer from "./movieReducer";

// it will be make the reducers to be one temporary state database
// Reducer is like table in database
// And here, we will list all the table into one database
export default combineReducers({
  auth: authReducer,
  movie: movieReducer,
});
