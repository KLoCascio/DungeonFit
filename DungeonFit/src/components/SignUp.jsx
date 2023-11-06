// SIGN UP

import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function SignUp() {
    return (
        <div className="Signup">
        <img src="#" alt="Login Logo"></img>
        <h1> Create Account</h1>
        <form className="signup-form">
            <label htmlFor="signup-userName">Username: </label>
            <input type="text" className="signup-userName" value="Enter Username..." />
            <label htmlFor="signup-email">Email: </label>
            <input type="text" className="signup-email" value="Enter Email..." />
            <label htmlFor="signup-password1">Password: </label>
            <input type="text" className="signup-password1" value="Enter Password..." />
            <label htmlFor="signup-password2">Confirm Password: </label>
            <input type="text" className="signup-password2" value="Enter Password..." />
        </form>
        <button className="signup-button">Create Account</button>
    </div>
    )
    
}