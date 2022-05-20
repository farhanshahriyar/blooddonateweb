import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = async (e) => {
        e.preventDefault()
    }
    return (
        <div style={{ minHeight: '600px' }} className="d-flex align-items-center justify-content-center">
            <div className="login-container">
                <h2 className="text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input type="email" placeholder="Enter your email" id="form2Example1" className="form-control" style={{ backgroundColor: '#F5F5F5' }} />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control" placeholder="Password" style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <button type="submit" className="btn btn-dark  btn-block d-block mb-4 mx-auto py-3 px-5">Login</button>

                    <div className="text-center">
                        <p>New user? <Link to='/signup' className="text-decoration-none">Signup</Link> Now </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;