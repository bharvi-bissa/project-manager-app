import React, { Component } from "react";
import ProjectTask from "./ProjectTasks/ProjectTask";

class Backlog extends Component {
  render() {
    const { projectTasks } = this.props;
    //TO_DO tasks
    const tasksInTodo = projectTasks
      .filter(projectTask => {
        return projectTask.status === "TO_DO";
      })
      .map(pTask => <ProjectTask key={pTask.id} projectTask={pTask} />);

    //IN_PROGRESS tasks
    const taskInProgress = projectTasks
      .filter(projectTask => {
        return projectTask.status === "IN_PROGRESS";
      })
      .map(pTask => <ProjectTask key={pTask.id} projectTask={pTask} />);

    //DONE tasks
    const tasksDone = projectTasks
      .filter(projectTask => {
        return projectTask.status === "DONE";
      })
      .map(pTask => <ProjectTask key={pTask.id} projectTask={pTask} />);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-secondary text-white">
                <h3>TO DO</h3>
              </div>
            </div>
            {tasksInTodo}
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-primary text-white">
                <h3>In Progress</h3>
              </div>
            </div>
            {taskInProgress}
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-success text-white">
                <h3>Done</h3>
              </div>
              {tasksDone}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Backlog;
