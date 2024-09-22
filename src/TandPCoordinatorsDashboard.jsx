import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const TandPCoordinatorsDashboard = () => {
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row text-white p-2" style={{ background: 'linear-gradient(45deg, #007bff, #4a90e2)' }}>
      <div className="col-md-2">  
          {/* DIEMS Logo */}
          <img src="https://diemsfeedback.auradigital.in/images.png" alt="DIEMS Logo" className="img-fluid" style={{ maxWidth: '180px' }} />
        </div>
        <div className="col-md-10">
          <h2 className="text-center">DIEMS Training and Placement Portal</h2>
        </div>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-light sidebar p-3">
          <h5>Welcome<strong> T&P Coordinators</strong></h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Employers Form</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Manage Drives</a>
            </li>  
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Student Details</a>
            </li>           
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Feedbacks and Reports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Logout</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-4">
          <h4>Placement Cell Statistics</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body bg-primary text-white">
                  <h5 className="card-title">Total Employer Forms</h5>
                  <p className="card-text">2</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
              <div className="card-body bg-primary text-white">
              <h5 className="card-title">Total Drives</h5>
                  <p className="card-text">8</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-3">
              <div className="card-body bg-primary text-white">
              <h5 className="card-title">Total Coordinators and Volunteers</h5>
                  <p className="card-text">10</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
              <div className="card-body bg-primary text-white">
              <h5 className="card-title">Total No. of Students</h5>
                  <p className="card-text">100</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-3">
              <div className="card-body bg-primary text-white">
              <h5 className="card-title">Active Drives</h5>
                  <p className="card-text">4</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
              <div className="card-body bg-primary text-white">
              <h5 className="card-title">No. of Students Placed</h5>
                  <p className="card-text">15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


