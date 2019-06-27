import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { isLoggedIn } from "./components/isLoggedIn";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Employeelist from "./components/EmployeeList";

function App() {
  return (
    <Router>
    <React.Fragment>
      <NavBar />
      <Switch />
      <Route
        path="/"
        exact
        render={() => (isLoggedIn() ? <Employeelist /> : <Login />)}
      />
      <Route
        path="/employeelist"
        exact
        render={() => (isLoggedIn() ? <Employeelist /> : <Login />)}
      />
      </React.Fragment>
    </Router>
  );
}

export default App;
