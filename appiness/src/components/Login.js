import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

const formValid = ({formErrors, ...rest}) => {
    let valid = true;
    
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
    
    Object.values(rest).forEach(val => {
      val.length < 1 && (valid = false);
    });
  
    return valid;
  };
  
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
          email: "",
          password: "",
          formErrors: {
            email: '',
            password: '',
          }
        }
    }

    render() {
        return(
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className={this.state.formErrors.email.length>0?"error form-control":"form-control"}
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                      noValidate />
                      {this.state.formErrors.email.length>0 && (
                        <span className="errorMessage">{this.state.formErrors.email}</span>
                      )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className={this.state.formErrors.password.length>0?"error form-control":"form-control"}
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                      noValidate />
                      {this.state.formErrors.password.length>0 && (
                        <span className="errorMessage">{this.state.formErrors.password}</span>
                      )}
                  </div>
                  <div className="login_w">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                  <small>Note: Email: hruday@gmail.com Password: hruday123</small>
                </form>
              </div>
            </div>
        )
    }

    handleChange = (e) => {
        e.preventDefault();
    
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
    
        switch(name){
          case "email":
            formErrors.email = emailRegex.test(value) ? "": "Invalid email address";
            break;
          case "password":
            formErrors.password = value.length < 1 ? "Password requierd": "";
            break;
          default:
            break;
        }
    
        this.setState({formErrors, [name]: value}, () => console.log(this.state))
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.history.push("employeelist");
        if(formValid(this.state)){
          if(this.state.email === 'hruday@gmail.com' && this.state.password === 'hruday123'){
              localStorage.setItem('isLoggedIn', true)
              this.props.history.push("employeelist");
          }
        } else {
          console.log('Form invalid')
        }
      }
}

export default withRouter(Login)