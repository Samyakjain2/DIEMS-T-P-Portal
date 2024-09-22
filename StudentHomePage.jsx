import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';

export const StudentHomePage = () => {
  return (
    <div>
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
          <div className="col-md-2 bg-light sidebar p-3">
            <h5>Welcome <strong>Student</strong></h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Manage Drives</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Update Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Notification and Reminders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Logout</a>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-md-10">
            <Container className="mt-4">
              {/* Summary Cards */}
              <Row className="text-center">
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Applied Jobs</Card.Title>
                      <Card.Subtitle>1</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Active Drives</Card.Title>
                      <Card.Subtitle>2</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Short listed</Card.Title>
                      <Card.Subtitle>1</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Notication</Card.Title>
                      <Card.Subtitle>2</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Recommended Jobs Table */}
              <Row className="mt-4">
                <Col md={12}>
                  <h4>Drives</h4>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Job Title</th>
                        <th>Description</th>
                        <th>Company Name</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Software Developer</td>
                        <td>Experienced in python,sql</td>
                        <td>Pharetra Sed Hendrerit Foundation</td>
                        <td>
                          <Button variant="primary">Apply Now</Button>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>Frontend Devloper</td>
                        <td>Experienced in Node js</td>
                        <td>AuraDigital</td>
                        <td>
                          <Button variant="primary">Apply Now</Button>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>DevOps</td>
                        <td>Experienced in Containerization</td>
                        <td>Redhat</td>
                        <td>
                          <Button variant="primary">Applied</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};


