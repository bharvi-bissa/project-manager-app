import React, { Component } from "react";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <fragment>
        <Header />
        <Dashboard />
      </fragment>
    );
  }
}

export default App;
