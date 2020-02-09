import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  getProjectTask,
  addProjectTask
} from "../../../actions/backlogActions";

class UpdateProjectTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      errors: {},
      summary: "",
      acceptanceCriteria: "",
      dueDate: "",
      priority: "",
      status: ""
      //projectIdentifier: projectIdentifier,
      //projectSequence: taskSequence
    };
  }

  //life cycle hook

  componentDidMount() {
    console.log("componentDidMount called");
    const { projectIdentifier } = this.props.match.params;
    const { taskSequence } = this.props.match.params;
    this.props.getProjectTask(projectIdentifier, taskSequence);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps called");
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    const {
      id,
      projectIdentifier,
      summary,
      acceptanceCriteria,
      dueDate,
      priority,
      status
    } = nextProps.projectTask;

    this.setState({
      id,
      projectIdentifier,
      summary,
      acceptanceCriteria,
      dueDate,
      priority,
      status
    });
    console.log(this.state.projectTask);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const updateProjectTask = {
      id: this.state.id,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      dueDate: this.state.dueDate,
      priority: this.state.priority,
      status: this.state.status
    };
    console.log(updateProjectTask);
    this.props.addProjectTask(
      this.state.projectIdentifier,
      updateProjectTask,
      this.props.history
    );
  };

  render() {
    const { projectIdentifier } = this.props.match.params;
    const { errors } = this.state;
    console.log(this.state);

    return (
      <div className="add-PBI">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link
                to={`/projectBoard/${projectIdentifier}`}
                className="btn btn-green"
              >
                Back to Project Board
              </Link>
              <br />
              <br />
              <h4 className="display-4 text-center">Update Project Task</h4>
              <p className="lead text-center">Project Name + Project Code</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.summary
                    })}
                    name="summary"
                    placeholder="Project Task summary"
                    onChange={this.onChange}
                    value={this.state.summary}
                  />
                  {errors.summary && (
                    <div className="invalid-feedback">{errors.summary}</div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.acceptanceCriteria
                    })}
                    placeholder="Acceptance Criteria"
                    name="acceptanceCriteria"
                    onChange={this.onChange}
                    value={this.state.acceptanceCriteria}
                  ></textarea>
                  {errors.acceptanceCriteria && (
                    <div className="invalid-feedback">
                      {errors.acceptanceCriteria}
                    </div>
                  )}
                </div>
                <h6>Due Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.dueDate
                    })}
                    name="dueDate"
                    onChange={this.onChange}
                    value={this.state.dueDate}
                  />
                  {errors.dueDate && (
                    <div className="invalid-feedback">{errors.dueDate}</div>
                  )}
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="priority"
                    onChange={this.onChange}
                    value={this.state.priority}
                  >
                    <option value={0}>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="status"
                    onChange={this.onChange}
                    value={this.state.status}
                  >
                    <option value="">Select Status</option>
                    <option value="TO_DO">TO DO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projectTask: state.backlog.projectTask,
  errors: state.errors
});

export default connect(mapStateToProps, { getProjectTask, addProjectTask })(
  UpdateProjectTask
);
