import React, { Component } from "react";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {" "}
        <Header />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addProject" component={AddProject} />
      </BrowserRouter>
    );
  }
}

export default App;
