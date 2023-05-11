import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
  initialState: {
    mode: "light" | "dark";
    user: any;
    token: any;
    posts: any[];
  };
}

const initialState: StateProps["initialState"] = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload.mode;
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
