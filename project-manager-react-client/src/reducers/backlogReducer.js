import {
  DELETE_PROJECT_TASK,
  GET_BACKLOG,
  GET_PROJECT_TASK,
  DELETE_PROJECT
} from "../actions/types";

const initialState = {
  projectTasks: [],
  projecTask: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BACKLOG:
      return {
        ...state,
        projectTasks: action.payload
      };
    case GET_PROJECT_TASK:
      console.log("REDUCER GET_PROJECT_TASK");
      return {
        ...state,
        projectTask: action.payload
      };
    case DELETE_PROJECT_TASK:
      console.log("REDUCER DELETE_PROJECT_TASK");
      return {
        ...state,
        projectTasks: state.projectTasks.filter(
          projectTask => projectTask.projectSequence != action.payload
        )
      };
    default:
      return state;
  }
};
