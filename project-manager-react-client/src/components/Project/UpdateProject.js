import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProject, createProject } from "../../actions/projectActions";
import classnames from "classnames";

class UpdateProject extends Component {
  constructor() {
    super();

    this.state = {
      projectId: "",
      projectName: "",
      projectIdentifier: "",
      description: "",
      startDate: "",
      endDate: "",
      errors: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { projectIdentifier } = this.props.match.params;
    this.props.getProject(projectIdentifier, this.props.history);
  }

  //life cycle hook
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      projectId,
      projectName,
      projectIdentifier,
      description,
      startDate,
      endDate
    } = nextProps.project;

    this.setState({
      projectId,
      projectName,
      projectIdentifier,
      description,
      startDate,
      endDate
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const updateProject = {
      projectId: this.state.projectId,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };

    this.props.createProject(updateProject, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h2 className=" text-center">Update Project Form</h2>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectName
                      })}
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                    {errors.projectName && (
                      <div className="invalid-feedback">
                        {errors.projectName}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectIdentifier
                      })}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                      disabled
                    />
                    {errors.projectIdentifier && (
                      <div className="invalid-feedback">
                        {errors.projectIdentifier}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.description
                      })}
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.startDate
                      })}
                      name="startDate"
                      value={this.state.startDate}
                      onChange={this.onChange}
                    />
                    {errors.startDate && (
                      <div className="invalid-feedback">{errors.startDate}</div>
                    )}
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.endDate
                      })}
                      name="endDate"
                      value={this.state.endDate}
                      onChange={this.onChange}
                    />
                    {errors.endDate && (
                      <div className="invalid-feedback">{errors.endDate}</div>
                    )}
                  </div>

                  <input
                    type="submit"
                    className="btn btn-green btn-block mt-4"
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
  project: state.project.project,
  errors: state.errors
});

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getProject, createProject })(
  UpdateProject
);
