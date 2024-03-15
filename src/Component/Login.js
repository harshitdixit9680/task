import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timesheet from './Timesheet';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [loggedIn, setLoggedIn] = useState(false);
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and set loggedIn to true
            localStorage.setItem('token', json.authtoken);
            setLoggedIn(true);
            history("/"); // Redirect to home page or any other route
            // props.showAlert("Logged In Successfully","success")
            toast.success('Logged In Successfully');
        } else {
            // props.showAlert("Invalid credentials","danger")
            console.log("Invalid credentials");
            toast.error('Invalid credentials');
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div>
            {!loggedIn ? (
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            ) : (
                <div>
                    {/* Render your data or navbar here */}
                    <Timesheet/>
                </div>
            )}
        </div>
    );
};

export default Login;
