import axios from "axios";
import {
  signupRequest,
  signupSuccess,
  signupError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentRequest,
  getCurrentSuccess,
  getCurrentError,
} from "./auth-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signup = (userData) => async (dispatch) => {
  dispatch(signupRequest());

  try {
    const { data } = await axios.post("/users/signup", userData);

    token.set(data.token);
    dispatch(signupSuccess(data));
  } catch (error) {
    dispatch(signupError(error.message));
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post("/users/login", userData);

    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getCurrent = () => async (dispatch, getState) => {
  const { auth } = getState();

  if (!auth.token) {
    return;
  }

  token.set(auth.token);

  dispatch(getCurrentRequest());

  try {
    const { data } = await axios.get("/users/current");

    dispatch(getCurrentSuccess(data));
  } catch (error) {
    dispatch(getCurrentError(error.message));
  }
};
