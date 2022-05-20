import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = async (e) => {
        e.preventDefault();
    }
    return (
        <div style={{ minHeight: '600px' }} className="d-flex align-items-center justify-content-center">
            <div className="login-container">
                <h2 className="text-center">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Name</label>
                        <input type="email" id="form2Example1" className="form-control" placeholder="Enter your username" style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Email address</label>
                        <input type="email" id="form2Example2" className="form-control" placeholder="Enter your email" style={{ backgroundColor: '#F5F5F5' }} />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example3">Password</label>
                        <input type="password" id="form2Example3" className="form-control" placeholder="Password" style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example4">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" id="form2Example4" className="form-control" style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <button type="submit" className="btn btn-dark  btn-block d-block mb-4 mx-auto py-3 px-5">Sign Up</button>

                    <div className="text-center">
                        <p>Already User? <Link to='/login' className="text-decoration-none">Login</Link> Now </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;