import { createSlice } from "@reduxjs/toolkit";

export interface darkModeState {
  darkMode: boolean;
}

const initialState: darkModeState = {
  darkMode: localStorage.getItem("theme") === "dark" ? true : false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.darkMode = !state.darkMode;
      const theme = state.darkMode ? "dark" : "light";
      localStorage.setItem("theme", theme);
      document.querySelector("html")?.setAttribute("data-theme", theme);
    },
  },
});

export const { toggle } = darkModeSlice.actions;
