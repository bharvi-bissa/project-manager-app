import { GET_PROJECTS } from "../actions/types";

const initialState = {
  projects: [],
  project: {}
};

export default function(state = initialState, action) {
  if (action.type === GET_PROJECTS) {
    return {
      ...state,
      projects: action.payload
    };
  }
  return state;
}
