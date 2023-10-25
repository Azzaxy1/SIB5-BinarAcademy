import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
};

const movieSclice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export const { setPopular } = movieSclice.actions;

export default movieSclice.reducer;
