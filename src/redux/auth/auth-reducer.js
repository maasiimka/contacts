import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  // signupRequest,
  signupSuccess,
  signupError,
  // loginRequest,
  loginSuccess,
  loginError,
  // logoutRequest,
  logoutSuccess,
  logoutError,
  //   getCurrentRequest,
  getCurrentSuccess,
  getCurrentError,
} from "./auth-actions";

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [signupSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialState,
  [getCurrentSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [signupSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [signupSuccess]: () => null,
  [loginSuccess]: () => null,
  [logoutSuccess]: () => null,
  [getCurrentSuccess]: () => null,
  [signupError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [signupSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentSuccess]: () => true,
  [logoutSuccess]: () => false,
  [signupError]: () => false,
  [loginError]: () => false,
  [getCurrentError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
