import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Employeelist from './components/EmployeeList';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/employeelist" exact component={Employeelist} />
    </Router>
  );
}

export default App;
