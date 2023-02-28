import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch('http://localhost:5000/api/auth/login', {
        const response = await fetch('https://i-notebook-server-j4q3.onrender.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            // Saving the auth-token redirecting to home page after successful login
            localStorage.setItem('token', json.authToken);
            console.log(json.authtoken)
            props.showAlert("Logged in successfully", "success")
            navigate('/')

        } else {
            props.showAlert("Invalid credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h2>Login to iNoteBook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' />
                </div>

                <div className="d-flex align-items-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <p className='mx-2 my-0'>New to iNoteBook - <Link to="/signup">Create a Account</Link></p>
                    {/* <p className='mx-2 my-0'>New to iNoteBook - <Link to="/signup">Create a Account</Link></p> */}
                </div>
            </form>
        </div>
    )
}

export default Login
