// PROFILE

import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import loginLogo from '../assets/logo/signInLogo.svg'

import axios from 'axios'

const Login = () => {
    const login = {
        username: '',
        password: '',
        // valid: 'Password must match'
    }

    const [formState, setFormState] = useState(login)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        // setFormState(login)
    }

    const handleChange = e => {
        const { id, value } = e.target
        setFormState({...formState, [id]: value})
    }

    return (
        <div className="Login">
            <img src={loginLogo} alt="Logo"></img>
            <h1> Sign In</h1>
            <form onSubmit={handleSubmit} className="login-form">

            <label htmlFor="userLogin">Username: </label>
            <input 
            type="text" 
            id="login"
            className="signup-userName" 
            placeholder="Enter username..." 
            value={formState.username} 
            onChange={handleChange}
            />

            <label htmlFor="loginPassword">Password: </label>
            <input 
            type="password" 
            id="loginPassword"
            className="signup-password1" 
            placeholder="Enter password..." 
            onChange={handleChange} 
            value={formState.password} 
            />

            <button type="submit" className="sign-in-button">Sign In</button>
            {/* <p>{formState.valid}</p> */}
            </form>
            <div className="Sign-Up">
                <p>Don't have an account? Create one today!</p>
                <button className="create-account-button"><Link to="/signup">Create Account</Link></button>
            </div>
        </div>
    )

}

export default Login