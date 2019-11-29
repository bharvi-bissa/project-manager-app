import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import { getBacklog } from "../../actions/backlogActions";

class ProjectBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backlog: ""
    };
  }
  componentDidMount() {
    const { projectIdentifier } = this.props.match.params;
    this.props.getBacklog(projectIdentifier);
  }
  render() {
    const { projectIdentifier } = this.props.match.params;
    const { projectTasks } = this.props.backlog;
    return (
      <div className="container">
        <Link
          to={`/addProjectTask/${projectIdentifier}`}
          className="btn btn-green mb-3"
        >
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />

        <Backlog projectTasks={projectTasks} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  backlog: state.backlog
});
export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
