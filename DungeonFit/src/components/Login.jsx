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
            <img src={loginLogo} alt="Logo" className="login-logo"></img>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit} className="login-form">

            <label htmlFor="username">Username: </label>

            <br />

            <input 
            type="text" 
            id="username"
            className="login-userName" 
            placeholder="Enter username..." 
            value={formState.username} 
            onChange={handleChange}
            />

            <br />

            <label htmlFor="password">Password: </label>

            <br />

            <input 
            type="password" 
            id="password"
            className="login-password" 
            placeholder="Enter password..." 
            onChange={handleChange} 
            value={formState.password} 
            />

            <br />

            <button type="submit" className="login-button">Log In</button>
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