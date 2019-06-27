import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { isLoggedIn } from "./isLoggedIn";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="./" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {isLoggedIn() ? (
            <ul className="navbar-nav">
              <li className="nav-item active">
                <span onClick={this.logout} className="nav-link">
                  Logout
                </span>
              </li>
            </ul>
          ) : null}
        </div>
      </nav>
    );
  }

  logout = () => {
    //   CLEAR LOCALSTORAGE ON LOGOUT
    console.log("CLEAR LOCALSTORAGE ON LOGOUT");
    localStorage.removeItem("isLoggedIn");
    this.props.history.push("./");
  };
}

export default withRouter(Navbar);
