import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "../actions/types";

const initialState = {
  projects: [],
  project: {}
};

export default function(state = initialState, action) {
  if (action.type === GET_PROJECTS) {
    console.log("GET_PROJECTS reducer");
    return {
      ...state,
      projects: action.payload
    };
  } else if (action.type === GET_PROJECT) {
    console.log("GET_PROJECT reducer");
    return {
      ...state,
      project: action.payload
    };
  } else if (action.type === DELETE_PROJECT) {
    console.log("DELETE_PROJECT reducer");
    return {
      ...state,
      projects: state.projects.filter(
        project => project.projectIdentifier !== action.payload
      )
    };
  }
  return state;
}
