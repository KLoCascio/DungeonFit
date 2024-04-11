import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginLogo from "../../assets/logo/signInLogo.svg";

import axios from "axios";

const Login = () => {
  const [token, setToken] = useState(null);

  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", form);
      const { token, user } = response.data;

      setToken(token);
      console.log("Logged in user:", user);
    } catch (e) {
      console.error("Login failed:", e);
    }
  };

  return (
    <div className='Login'>
      <img src={loginLogo} alt='Logo' className='login-logo'></img>
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <label htmlFor='userName'>Username: </label>

        <br />

        <input
          type='text'
          id='userName'
          name='userName'
          className='login-userName'
          placeholder='Enter username...'
          value={form.userName}
          onChange={handleChange}
        />

        <br />

        <label htmlFor='password'>Password: </label>

        <br />

        <input
          type='password'
          id='password'
          name='password'
          className='login-password'
          placeholder='Enter password...'
          onChange={handleChange}
          value={form.password}
        />

        <br />

        <button type='submit' className='login-button'>
          Log In
        </button>
        {/* <p>{formState.valid}</p> */}
      </form>
      <div className='Create-Account'>
        <p>Don't have an account? Create one today!</p>
        <button className='create-account-button'>
          <Link to='/createaccount'>Create Account</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
