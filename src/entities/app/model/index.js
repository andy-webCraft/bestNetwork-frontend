import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  mode: "light",
  isMobile: false,
  notifications: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    modeToggle: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    addNotification: (state, action) => {
      state.notifications.push({ id: uuidv4(), ...action.payload });
    },
    deleteNotification: (state, action) => {
      const targetIndex = state.notifications.findIndex((item) => item.id === action.payload.id);
      state.notifications.splice(targetIndex, 1);
    },
  },
});

export const {
  modeToggle, setMobile, addNotification, deleteNotification,
} = appSlice.actions;
export const getState = (state) => state.app;
export const getNotifications = (state) => state.app.notifications;
export const isMobile = (state) => state.app.isMobile;
export const { reducer } = appSlice;
