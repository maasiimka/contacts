import { createAction } from "@reduxjs/toolkit";

export const signupRequest = createAction("auth/signupRequest");
export const signupSuccess = createAction("auth/signupSuccess");
export const signupError = createAction("auth/signupError");

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

export const logoutRequest = createAction("auth/logoutRequest");
export const logoutSuccess = createAction("auth/logoutSuccess");
export const logoutError = createAction("auth/logoutError");

export const getCurrentRequest = createAction("auth/getCurrentRequest");
export const getCurrentSuccess = createAction("auth/getCurrentSuccess");
export const getCurrentError = createAction("auth/getCurrentError");
