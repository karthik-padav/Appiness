import React, { Component } from 'react';
import axios from 'axios';

class EmployeeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeList: []
        }
    }

    render() {
        return (
            <div className="employee-list-wrapper">
                <h1>Employee List</h1>
                <table>
                    <tbody>
                {this.state.employeeList.map((user, index)=>
                    <tr key={index}>
                        <td>Name: {user.name}</td>
                        <td>Age: {user.age}</td>
                        <td>email: {user.email}</td>
                        <td>Gender: {user.gender}</td>
                        <td>Phone number: {user.phoneNo}</td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        )
    }

    componentDidMount() {
        this.getEmployeeList();
    }


    getEmployeeList = () => {
        axios.get(`https://raw.githubusercontent.com/karthik-padav/Appiness/master/appiness/src/data/employeeList.json`)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ employeeList: res.data.user }, () => {
                        console.log(this.state.employeeList);
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export default EmployeeList