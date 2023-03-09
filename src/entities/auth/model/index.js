import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    setUserFriends: (state, action) => {
      state.user.friends = action.payload.friends;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    setLogout: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const {
  setLogin, setLogout, setUser, setUserFriends,
} = authSlice.actions;
export const getState = (state) => state.auth;
export const getUserId = (state) => state.auth.user._id;
export const isAuth = (state) => Boolean(state.auth.accessToken && state.auth.user);
export const { reducer } = authSlice;
