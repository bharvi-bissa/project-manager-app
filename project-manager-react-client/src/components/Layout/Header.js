import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      // navbar starts
      <nav className="navbar navbar-expand-lg text-white">
        <a className="navbar-brand text-white" href="#">
          Personal Goal Management App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav ">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
      //navbar ends
    );
  }
}

export default Header;
