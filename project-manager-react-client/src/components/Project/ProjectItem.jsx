import React, { Component } from "react";

class ProjectItem extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="card">
          <div className="row">
            <div className="col s2 m2 center-align">
              <h5>React</h5>
            </div>
            <div className="col s5 m5">
              <b>
                <h5>Spring / React Project</h5>
              </b>
              <p>Project to create a Kanban Board with Spring Boot and React</p>
            </div>
            <div className="col s5 m5">
              <ul className="collection">
                <a class="collection-item" href="#">
                  Project Board
                </a>

                <a class="collection-item" href="#">
                  Update Project Info
                </a>

                <a class="collection-item" href="">
                  Delete Project
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
