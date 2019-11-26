import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { addProjectTask } from "../../../actions/backlogActions";

class AddProjectTask extends Component {
  constructor(props) {
    super(props);
    const { projectIdentifier } = this.props.match.params;
    this.state = {
      errors: {},
      summary: "",
      acceptanceCriteria: "",
      dueDate: "",
      priority: 0,
      status: "",
      projectIdentifier: projectIdentifier
    };

    //onSubmit = this.onSubmit.bind(this);
    //onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newProjectTask = {
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      dueDate: this.state.dueDate,
      priority: this.state.priority,
      status: this.state.status
    };
    console.log(newProjectTask);
    this.props.addProjectTask(
      this.state.projectIdentifier,
      newProjectTask,
      this.props.history
    );
  };

  render() {
    const { projectIdentifier } = this.props.match.params;
    return (
      <div>
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
                <h4 className="display-4 text-center">Add Project Task</h4>
                <p className="lead text-center">Project Name + Project Code</p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="summary"
                      placeholder="Project Task summary"
                      onChange={this.onChange}
                      value={this.state.summary}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Acceptance Criteria"
                      name="acceptanceCriteria"
                      onChange={this.onChange}
                      value={this.state.acceptanceCriteria}
                    ></textarea>
                  </div>
                  <h6>Due Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="dueDate"
                      onChange={this.onChange}
                      value={this.state.dueDate}
                    />
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
