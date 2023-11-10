// PROFILE

import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import loginLogo from '../assets/logo/signInLogo.svg'

import axios from 'axios'

const Login = () => {
    const login = {
        username: '',
        password: '',
        // valid: 'Password must match'
    }

    const navigate = useNavigate()

    const [formState, setFormState] = useState(login)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        navigate("/")
    }

    const handleChange = e => {
        const { id, value } = e.target
        setFormState({...formState, [id]: value})
    }

    return (
        <div className="Login">
            <img src={loginLogo} alt="Logo"></img>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit} className="login-form">

            <label htmlFor="username">Username: </label>
            <input 
            type="text" 
            id="username"
            className="signup-userName" 
            placeholder="Enter username..." 
            value={formState.username} 
            onChange={handleChange}
            />

            <label htmlFor="password">Password: </label>
            <input 
            type="password" 
            id="password"
            className="signup-password1" 
            placeholder="Enter password..." 
            onChange={handleChange} 
            value={formState.password} 
            />

            <button type="submit" className="sign-in-button">Log In</button>
            {/* <p>{formState.valid}</p> */}
            </form>
            <div className="Create-Account">
                <p>Don't have an account? Create one today!</p>
                <button className="create-account-button"><Link to="/createaccount">Create Account</Link></button>
            </div>
        </div>
    )

}

export default Login