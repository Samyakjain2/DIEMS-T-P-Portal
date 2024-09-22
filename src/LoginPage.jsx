import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginPage = () => {
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

                {/* "Login As" Dropdown with Left Aligned Label */}
                <div className="form-group mb-4">
                  <label htmlFor="role" className="font-weight-bold"><b>Login As</b></label>
                  <p></p>
                  <select className="form-control" id="role" style={{ borderRadius: '10px' }}>
                    <option>Please select here</option>
                    <option>Dean Academics</option>
                    <option>Dean T&P</option>
                    <option>TPO</option>
                    <option>T&P Co-ordinators</option>
                    <option>HOD</option>
                    <option>Student</option>
                  </select>
                </div>

                {/* Sign In Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ borderRadius: '10px', background: 'linear-gradient(45deg, #007bff, #4a90e2)', border: 'none' }}
                  >
                    Log In
                  </button>
                </div>
              </form>

              {/* Forgot Password Link */}
              <div className="mt-4 text-center">
                <a href="/forgot-password" className="text-muted">Forgot Password?</a>
              </div>
              <div className='mt-4 text-center'>
                <a href="/signup" className="text"> Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

