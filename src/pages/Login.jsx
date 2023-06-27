import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="box">
                <form autoComplete="off">
                    <h2>Log in</h2>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <a href="#">Forgot Password ?</a>
                        <Link to='/signup'>
                            <a href="#">Signup</a>
                        </Link>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </React.Fragment>
    )
}

export default Login