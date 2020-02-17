import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import AddProject from "./components/Project/AddProject";
import UpdateProject from "./components/Project/UpdateProject";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";

import store from "./Store";

import PrivateRoute from "./components/Commons/PrivateRoute";
import SetAuthToken from "./Utils/SetAuthToken";

// Check for token
if (localStorage.accessToken) {
  // Set auth token header auth
  SetAuthToken(localStorage.accessToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.accessToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/auth/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <Header />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/addProject" component={AddProject} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/addProjectTask/:projectIdentifier"
              component={AddProjectTask}
            />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/updateProjectTask/:projectIdentifier/:taskSequence"
              component={UpdateProjectTask}
            />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/projectBoard/:projectIdentifier"
              component={ProjectBoard}
            />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/updateProject/:projectIdentifier"
              component={UpdateProject}
            />
          </Switch>
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/auth/login" component={Login} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
