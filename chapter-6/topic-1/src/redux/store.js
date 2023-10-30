import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

// create the store
export default configureStore({
  reducer: rootReducers,
  devTools: import.meta.env.MODE === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), //Redux thunk
});
