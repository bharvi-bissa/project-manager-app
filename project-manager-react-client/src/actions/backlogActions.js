import axios from "axios";
import {
  GET_ERRORS,
  GET_BACKLOG,
  GET_PROJECT_TASK,
  DELETE_PROJECT,
  DELETE_PROJECT_TASK
} from "./types";

export const addProjectTask = (
  projectIdentifier,
  projectTask,
  history
) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/backlog/${projectIdentifier}`,
      projectTask
    );
    history.push(`/projectBoard/${projectIdentifier}`);
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getBacklog = (projectIdentifier, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${projectIdentifier}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProjectTask = (
  projectIdentifier,
  projectSequence
) => async dispatch => {
  try {
    const res = await axios.get(
      `/api/backlog/${projectIdentifier}/${projectSequence}`
    );
    console.log(res.data);
    dispatch({
      type: GET_PROJECT_TASK,
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const deleteProjectTask = (
  projectIdentifier,
  projectSequence,
  history
) => async dispatch => {
  try {
    const res = await axios.delete(
      `/api/backlog/${projectIdentifier}/${projectSequence}`
    );
    console.log("Inside deleteProjectTask action");

    dispatch({
      type: DELETE_PROJECT_TASK,
      payload: projectSequence
    });
    //history.push(`/projectBoard/${projectIdentifier}/${projectSequence}`);
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ERRORS,
      payload: "error"
    });
  }
};
