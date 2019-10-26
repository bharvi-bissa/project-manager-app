import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12">
              <h1 class="display-4 text-center">Projects</h1>
              <br />
              <a href="ProjectForm.html" class="btn btn-lg btn-green">
                Create a Project
              </a>
              <br />
              <hr />
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
