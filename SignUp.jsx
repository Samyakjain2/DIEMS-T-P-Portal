import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SignUp = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    {/* Card with Shadow and Rounded Corners */}
                    <div className="card shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>

                        {/* Gradient Background for Header */}
                        <div className="card-header text-center" style={{ background: 'linear-gradient(45deg, #007bff, #4a90e2)', color: 'white' }}>
                            <img
                                src="https://diemsfeedback.auradigital.in/images.png"
                                alt="Deogiri Institute Logo"
                                className="img-fluid my-3"
                                style={{ maxHeight: '100px' }}
                            />
                            <h3>Training and Placement Portal</h3>
                        </div>

                        {/* Card Body with Form */}
                        <div className="card-body p-5 text-left">
                            {/* Login Form */}
                            <form>
                                {/* Email Input */}
                                <div className="form-group mb-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                {/* Password Input */}
                                <div className="form-group mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                 {/* Password Input */}
                                 <div className="form-group mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Confirm Password"
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                {/* "Login As" Dropdown with Left Aligned Label */}
                                <div className="form-group mb-4">
                                    <label htmlFor="role" className="font-weight-bold"><b>Sign Up As</b></label>
                                    <p></p>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="role"
                                            value="Student"
                                            readOnly
                                            style={{ borderRadius: '10px', backgroundColor: '#e9ecef', cursor: 'not-allowed' }}
                                        />

                                    </div> </div>

                                {/* Sign In Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                        style={{ borderRadius: '10px', background: 'linear-gradient(45deg, #007bff, #4a90e2)', border: 'none' }}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

