import axios from "axios";
import { GET_ERRORS, GET_BACKLOG } from "./types";

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

export const getBacklog = projectIdentifier => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${projectIdentifier}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
