import axios from "axios";

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
    console.log(error);
  }
};
