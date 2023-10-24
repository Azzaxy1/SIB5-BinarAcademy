import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

// create the store
export default configureStore({
  reducer: rootReducers,
  devTools: import.meta.env.MODE === "development",
});
