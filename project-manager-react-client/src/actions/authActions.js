import axios from "axios";
import { REGISTER_USER, GET_ERRORS } from "./types";

export const registerUser = (user, history) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signup", user);
    history.push("/dashboard");
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
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
