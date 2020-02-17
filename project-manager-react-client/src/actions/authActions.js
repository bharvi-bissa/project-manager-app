import axios from "axios";
import { REGISTER_USER, GET_ERRORS, SET_CURRENT_USER } from "./types";
import SetAuthToken from "../Utils/SetAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (user, history) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signup", user);

    dispatch({
      type: REGISTER_USER,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const loginUser = (user, history) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signin", user);
    console.log(res.data);
    // get token
    const { accessToken } = res.data;
    //set token to LocalStorage
    localStorage.setItem("accessToken", accessToken);
    //set Authorization token in axios request
    SetAuthToken(accessToken);
    //decode jwt access token
    const decoded = jwt_decode(accessToken);
    console.log(decoded);
    // set current user (logged in user)
    dispatch(setCurrentUser(decoded));
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("accessToken");
  // Remove auth header for future requests
  SetAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
