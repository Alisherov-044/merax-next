import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    changeTheme: (state, theme) => {
      return (state = theme);
    },
  },
});

export const { changeTheme } = themeSlice.actions;
