import React, { Component } from "react";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import UpdateProject from "./components/Project/UpdateProject";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";

import { Provider } from "react-redux";
import store from "./Store";
import { registerUser } from "./actions/authActions";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          <Route
            exact
            path="/addProjectTask/:projectIdentifier"
            component={AddProjectTask}
          />
          <Route
            exact
            path="/updateProjectTask/:projectIdentifier/:taskSequence"
            component={UpdateProjectTask}
          />
          <Route
            exact
            path="/projectBoard/:projectIdentifier"
            component={ProjectBoard}
          />
          <Route
            exact
            path="/updateProject/:projectIdentifier"
            component={UpdateProject}
          />
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/auth/login" component={Login} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
