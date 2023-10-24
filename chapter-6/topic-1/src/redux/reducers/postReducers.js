import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  posts: [],
  postDetails: null,
};

// Define the reducers
const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
  },
});

// export the function state to set the state
export const { posts, setPostDetails } = postSlicer.actions;

// Export the reducers (state/ store)
export default createSlice.reducers;
