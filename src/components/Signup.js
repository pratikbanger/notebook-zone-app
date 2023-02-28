import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = (props) => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    // const response = await fetch('http://localhost:5000/api/auth/createuser', {
    const response = await fetch('https://i-notebook-server-j4q3.onrender.com/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      // redirecting to login page after successful sign up
      localStorage.setItem('token', json.authtoken);
      navigate('/')
      props.showAlert("Account created successfully", "success")
    }
    else {
      props.showAlert("Invalid credentials", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='container'>
        <h2>Create Account - iNoteBook</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required />
          </div>
          <div className="d-flex align-items-center">
            <button type="submit" className="btn btn-primary">Submit</button>
            <p className='mx-2 my-0'>Already member - <Link to="/login">Login to iNotebook</Link></p>
            {/* <p className='mx-2 my-0'>Already member - <Link to="/login">Login to iNotebook</Link></p> */}
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup
