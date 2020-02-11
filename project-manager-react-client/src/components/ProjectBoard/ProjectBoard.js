import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import { getBacklog } from "../../actions/backlogActions";

class ProjectBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backlog: "",
      errors: {}
    };
  }
  componentDidMount() {
    const { projectIdentifier } = this.props.match.params;
    this.props.getBacklog(projectIdentifier, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { projectIdentifier } = this.props.match.params;
    const { projectTasks } = this.props.backlog;
    const { errors } = this.state;
    let notFound = false;
    const projectBoard = (projectTasks, errors) => {
      if (projectTasks.length === 0) {
        if (
          errors.projectNotFound &&
          errors.projectNotFound ===
            `No tasks found with identifier ${projectIdentifier}`
        ) {
          notFound = true;
          console.log("NOT FOUND WITH IDT" + notFound);
          return (
            <div>
              <Link
                to={`/addProjectTask/${projectIdentifier}`}
                className="btn btn-green mb-3"
              >
                <i className="fas fa-plus-circle"> Create Project Task</i>
              </Link>
              <div className="alert alert-danger text-center" role="alert">
                {errors.projectNotFound}
              </div>
            </div>
          );
        } else {
          return (
            <div className="alert alert-danger text-center" role="alert">
              No project tasks present on this board.
            </div>
          );
        }
      } else {
        console.log("OUTER ELSE" + notFound);
        return <Backlog projectTasks={projectTasks} />;
      }
    };

    const renderButton = () => {
      if (notFound === false) {
        return (
          <Link
            to={`/addProjectTask/${projectIdentifier}`}
            className="btn btn-green mb-3"
          >
            <i className="fas fa-plus-circle"> Create Project Task</i>
          </Link>
        );
      } else {
        return "";
      }
    };
    const boardContent = projectBoard(projectTasks, errors);
    const btn = renderButton();
    console.log(btn);
    return (
      <div className="container">
        {btn}
        <br />
        <hr />

        {boardContent}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  backlog: state.backlog,
  errors: state.errors
});
export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
