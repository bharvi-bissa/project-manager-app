import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post("/api/project", project);
    console.log("createProject :" + res);
    history.push("/dashboard");
    //clear errors everytime we create/update a new project
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProjects = () => async dispatch => {
  try {
    const res = await axios.get("/api/project/all");
    console.log("get projects :" + res.data);
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProject = (projectIdentifier, history) => async dispatch => {
  try {
    const res = await axios.get("/api/project", {
      params: {
        projectIdentifier: projectIdentifier
      }
    });

    console.log("get project :" + res.data);
    dispatch({
      type: GET_PROJECT,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteProject = (projectIdentifier, history) => async dispatch => {
  if (
    window.confirm(
      "Are you sure you want to delete the project and its related data ?"
    )
  ) {
    try {
      const res = axios.delete("/api/project", {
        params: {
          projectIdentifier: projectIdentifier
        }
      });
      dispatch({
        type: DELETE_PROJECT,
        payload: projectIdentifier
      });
    } catch (error) {
      history.push("/dashboard");
    }
  }
};
