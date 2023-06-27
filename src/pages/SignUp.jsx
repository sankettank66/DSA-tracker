import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export class SignUp extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar/>
        <div className="box">
            <form autoComplete="off">
                <h2>Sign Up</h2>
                <div className="inputBox ib">
                    <input type="text" required="required" />
                        <span>Username</span>
                        <i></i>
                </div>
                <div className="inputBox ib">
                    <input type="email" required="required" />
                        <span>Email</span>
                        <i></i>
                </div>
                <div className="inputBox ib">
                    <input type="password" required="required" />
                        <span>Password</span>
                        <i></i>
                </div>
                <div className="inputBox ib">
                    <input type="password" required="required" />
                        <span>Confirm Password</span>
                        <i></i>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
            </React.Fragment>
    )
  }
}

export default SignUp