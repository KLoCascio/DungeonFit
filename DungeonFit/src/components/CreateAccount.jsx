import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
    const initialSignUp = {
        userName: '',
        password: '',
        passwordConfirm: '',
        valid: ''
    }

    const navigate = useNavigate()

    const [form, setForm] = useState(initialSignUp)

    console.log(form)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (
            form.userName === "" ||
            form.password === "" ||
            form.passwordConfirm === ""
            ) { 
            setForm({...form, valid: "Tous les champs sont requis(All fields are required)"})
            return
        }
        if (form.password !== form.passwordConfirm) {
            setForm({...form, valid: 'les mots de passe ne correspondent pas(Passwords must match)'})
            return
        }

        try {
            const response = await axios.post('http://localhost:3001/register', {
                userName: form.userName,
                password: form.password,
            })
            console.log(response)
            setForm(initialSignUp)
            navigate("/login")
        } catch (e) {
            console.error("Error during registration:", e.response)
            setForm({ ...form, valid: "Registration failed. Please try again." })
        }
    }
    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value, valid: "" });
      };

    return (
        <div className="Signup">
            <img src="#" alt="Login Logo"></img>
            <h1> Create Account</h1>
            <form onSubmit={handleSubmit} className="signup-form">

            <label htmlFor="userName">username:</label>
            <input
                type="text"
                id="userName"
                placeholder="Enter username..."
                value={form.username}
                onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="Enter password..."
                value={form.password}
                onChange={handleChange}
            />    

            <label htmlFor="passwordConfirm">Confirm Password:</label>
            <input
                type="password"
                id="passwordConfirm"
                placeholder="Confirm password..."
                value={form.passwordConfirm}
                onChange={handleChange}
                />


            <button type="submit" className="signup-button">Create Account</button>
            </form>
        </div>
    )
}

export default SignUp