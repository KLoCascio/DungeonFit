// SIGN UP

import { useEffect, useState } from "react"
// import { useHistory } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
    const signUp = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        valid: 'Passwords must match'
    }

    // const history = useHistory()

    const [formState, setFormState] = useState(signUp)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        // setFormState(signUp)

        if (formState.password === formState.passwordConfirm) {
            setFormState({...formState, ['valid']: 'Success!'})
            // history.push("/")
        } else {
            setFormState({...formState, ['valid']: 'Passwords need to match.'})
        }
    }

    const handleChange = e => {
        const { id, value } = e.target
        setFormState({...formState, [id]: value})
    }

    return (
        <div className="Signup">
        <img src="#" alt="Login Logo"></img>
        <h1> Create Account</h1>
        <form onSubmit={handleSubmit} className="signup-form">

            <label htmlFor="signup-userName">Username: </label>
            <input 
            type="text" 
            id="username"
            className="signup-userName" 
            placeholder="Enter username..." 
            value={formState.username} 
            onChange={handleChange}
            />

            <label htmlFor="signup-email">Email: </label>
            <input 
            type="email" 
            id="email"
            className="signup-email" 
            placeholder="Enter email..." 
            onChange={handleChange} 
            value={formState.email} 
            />

            <label htmlFor="signup-password1">Password: </label>
            <input 
            type="password" 
            id="password"
            className="signup-password1" 
            placeholder="Enter password..." 
            onChange={handleChange} 
            value={formState.password} 
            />

            <label htmlFor="signup-password2">Confirm Password: </label>
            <input 
            type="password" 
            id="passwordConfirm"
            className="signup-password2" 
            placeholder="Confirm password..." 
            onChange={handleChange} 
            value={formState.passwordConfirm} />

        <button type="submit" className="signup-button">Create Account</button>
        <p>{formState.valid}</p>
        </form>
    </div>
    )
} 

export default SignUp