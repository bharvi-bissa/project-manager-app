import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/projectActions";

class ProjectItem extends Component {
  onDeleteClick = projectIdentifier => {
    this.props.deleteProject(projectIdentifier);
  };

  render() {
    const {
      projectId,
      projectName,
      projectIdentifier,
      description,
      startDate,
      endDate
    } = this.props.project;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{projectIdentifier}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{projectName}</h3>
              <p>{description}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">Project Board</li>
                </a>
                <Link to={`/updateProject/${projectIdentifier}`}>
                  <li className="list-group-item update">
                    Update Project Info
                  </li>
                </Link>
                <a href="">
                  <li
                    className="list-group-item delete"
                    onClick={this.onDeleteClick.bind(this, projectIdentifier)}
                  >
                    Delete Project
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.protoTypes = {
  deleteProject: PropTypes.func.isRequired
};

export default connect(null, { deleteProject })(ProjectItem);
