import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectTask extends Component {
  render() {
    const { projectTask } = this.props;
    let priority;
    let priorityString;

    if (projectTask.priority === 1) {
      priority = "bg-danger text-light";
      priorityString = "HIGH";
    }
    if (projectTask.priority === 2) {
      priority = "bg-secondary text-light";
      priorityString = "MEDIUM";
    }
    if (projectTask.priority === 3) {
      priority = "bg-success text-light";
      priorityString = "LOW";
    }
    return (
      <div className="card mb-1 bg-light">
        <div className={`card-header ${priority}`}>
          ID: {projectTask.projectSequence} -- Priority: {priorityString}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{projectTask.summary}</h5>
          <p className="card-text text-truncate ">
            {projectTask.acceptanceCriteria}
          </p>
          <Link to="#" className="btn btn-primary">
            View / Update
          </Link>

          <button className="btn btn-danger ml-4">Delete</button>
        </div>
      </div>
    );
  }
}

export default ProjectTask;
