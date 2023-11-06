// PROFILE

import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function Login() {
    return (
        <div className="Login">
            <img src="#" alt="Login Logo"></img>
            <h1> Sign In</h1>
            <form className="login-form">
                <label htmlFor="login-userName">Username: </label>
                <input type="text" className="login-userName" value="Enter Username..." />
                <label htmlFor="login-password">Password: </label>
                <input type="text" className="login-password" value="Enter Password..." />
            </form>
            <button className="sign-in-button">Sign In</button>
            <div className="Sign-Up">
                <p>Don't have an account? Create one today!</p>
                <button className="create-account-button"><Link to="/signup">Create Account</Link></button>
            </div>
        </div>
    )

}