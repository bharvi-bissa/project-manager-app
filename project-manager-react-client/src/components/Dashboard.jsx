import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col m12">
              <h1 class="center-align">Projects</h1>
              <br />
              <a href="ProjectForm.html" class="waves-effect waves-light btn">
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
