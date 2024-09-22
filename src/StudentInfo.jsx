import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const StudentInfo = () => {
    const [formData, setFormData] = useState({
        email: '',
        department: '',
        surname: '',
        firstName: '',
        middleName: '',
        gender: '',
        dob: '',
        rollNumber: '',
        prnNumber: '',
        mobile: '',
        altMobile: '',
        tenthPercent: '',
        tenthYear: '',
        tenthBoard: '',
        twelfthPercent: '',
        twelfthYear: '',
        twelfthBoard: '',
        diplomaBranch: '',
        diplomaPercent: '',
        diplomaYear: '',
        firstYearCGPA: '',
        secondYearCGPA: '',
        thirdYearCGPA: '',
        backlogs: '',
        interestedInHigherStudies: '',
        joiningYear: '',
        assistanceForCampus: '',
        interestedHigherStudiesMTechMBA: '',
        interestedHigherStudiesAbroad: '',
        interestedCompetitiveExams: '',
        linkedinProfile: '',
        passportSizePhoto: '',
        resume: '',
        aadharNumber: '',
        uploadAadharCard: '',
        panNumber: '',
        uploadPanCard: '',
        passportNumber: '',
        uploadPassport: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // This will log form data. You can send it to the backend here.
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {/* Card with Shadow and Rounded Corners */}
                    <div className="card shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>

                        {/* Gradient Background for Header */}
                        <div className="card-header text-center" style={{ background: 'linear-gradient(45deg, #007bff, #4a90e2)', color: 'white' }}>
                            <h2>Student Registration For Placement / Internship 2024-2025</h2>
                        </div>

                        {/* Card Body with Form */}
                        <div className="card-body p-5">
                            <form onSubmit={handleSubmit}>

                                {/* Email */}
                                <div className="form-group col-md-6">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                {/* Department */}
                                <div className="form-group col-md-6">
                                    <p></p>
                                    <select name="department" className="form-control" value={formData.department} onChange={handleChange} required style={{ borderRadius: '10px' }}>
                                        <option value="">Department</option>
                                        <option value="Civil Engineering">Civil Engineering</option>
                                        <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                        <option value="Computer Science and Engineering (AIML)">Computer Science and Engineering (AIML)</option>
                                        <option value="Electronics and Telecommunication Engineering">Electronics and Telecommunication Engineering</option>
                                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                                    </select>
                                </div>

                                {/* Name Fields */}
                                <div className="form-row col-md-10">
                                    <p></p>
                                    <div className="form-group col-md-8 d-flex justify-content-start">
                                        <input
                                            type="text"
                                            name="surname"
                                            className="form-control me-2"
                                            placeholder="Surname"
                                            value={formData.surname}
                                            onChange={handleChange}
                                            required
                                            style={{ borderRadius: '10px', marginRight: '10px' }}
                                        />

                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control me-2"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            style={{ borderRadius: '10px', marginRight: '10px' }}
                                        />

                                        <input
                                            type="text"
                                            name="middleName"
                                            className="form-control"
                                            placeholder="Middle Name"
                                            value={formData.middleName}
                                            onChange={handleChange}
                                            style={{ borderRadius: '10px' }}
                                        />
                                    </div>
                                </div>


                                {/* Gender */}
                                <div className="form-group col-md-6">
                                    <p></p>
                                    <select name="gender" className="form-control" value={formData.gender} onChange={handleChange} required style={{ borderRadius: '10px' }}>
                                        <option value="">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                                </div>

                                {/* Date of Birth */}
                                <div className="form-group col-md-6">
                                    <p></p>
                                    <input
                                        type="date"
                                        name="dob"
                                        className="form-control"
                                        placeholder="Date of Birth (MM/DD/YYYY)"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                {/* Roll Number */}
                                <div className="form-group col-md-6">
                                    <p></p>
                                    <input
                                        type="text"
                                        name="rollNumber"
                                        className="form-control"
                                        placeholder="Roll Number (Final Year)"
                                        value={formData.rollNumber}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                {/* College PRN */}
                                <div className="form-group col-md-6">
                                    <p></p>
                                    <input
                                        type="text"
                                        name="prnNumber"
                                        className="form-control"
                                        placeholder="College PRN"
                                        value={formData.prnNumber}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                {/* BATU PRN */}
                                <div className="form-group col-md-6">
                                    <p></p>
                                    <input
                                        type="text"
                                        name="batuPrnNumber"
                                        className="form-control"
                                        placeholder="BATU PRN"
                                        value={formData.batuPrnNumber}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                {/* Contact Information */}
                                <div className="form-group col-md-6">
                                    <p></p>
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="form-control"
                                        placeholder="Mobile Number (WhatsApp)"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <p></p>
                                    <input
                                        type="text"
                                        name="altMobile"
                                        className="form-control"
                                        placeholder="Alternate Mobile Number"
                                        value={formData.altMobile}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                                {/* Next Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                        style={{ borderRadius: '10px', background: 'linear-gradient(45deg, #007bff, #4a90e2)', border: 'none', marginTop: '10px' }}
                                    >
                                        Next
                                    </button>
                                </div>

                                {/* Education Details */}
                                <p></p>
                                <p></p>
                                <h4>Education Details</h4>
                                <p></p>
                                <p></p>

                                {/* 10th Details */}
                                <div className="form-row mb-4">
                                    <div className="form-group col-md-6 d-flex justify-content-start">
                                        <input
                                            type="text"
                                            name="tenthPercent"
                                            className="form-control"
                                            placeholder="10th Percentage: "
                                            value={formData.tenthPercent}
                                            onChange={handleChange}
                                            required
                                            style={{ borderRadius: '10px', marginRight: '10px' }}
                                        />
                                        <input
                                            type="text"
                                            name="tenthYear"
                                            className="form-control"
                                            placeholder="10th Passing Year: "
                                            value={formData.tenthYear}
                                            onChange={handleChange}
                                            required
                                            style={{ borderRadius: '10px' }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            name="tenthBoard"
                                            className="form-control"
                                            placeholder="10th Passing Name of Board: "
                                            value={formData.tenthBoard}
                                            onChange={handleChange}
                                            required
                                            style={{ borderRadius: '10px', marginTop: '10px' }}
                                        />
                                    </div>
                                </div>

                                {/* 12th Details */}
                                <div className="form-row mb-4">
                                    <div className="form-group col-md-6 d-flex justify-content-start">
                                        <input
                                            type="text"
                                            name="twelthPercent"
                                            className="form-control"
                                            placeholder="12th Percentage: "
                                            value={formData.twelthPercent}
                                            onChange={handleChange}
                                            required
                                            style={{ borderRadius: '10px', marginRight: '10px' }}
                                        />
                                        <input
                                            type="text"
                                            name="twelthYear"
                                            className="form-control"
                                            placeholder="12th Passing Year: "
                                            value={formData.twelthYear}
                                            onChange={handleChange}
                                            required
                                            style={{ borderRadius: '10px' }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            name="twelthBoard"
                                            className="form-control"
                                            placeholder="12th Passing Name of Board:"
                                            value={formData.twelthBoard}
                                            onChange={handleChange}
                                            required
                                            style={{ borderRadius: '10px', marginTop: '10px' }}
                                        />
                                    </div>
                                </div>

                                {/* Other details go here similarly */}
                                <div className="form-row mb-4">
                                    <div className="form-group col-md-6 d-flex justify-content-start">
                                        <input type="text"
                                            id="diplomaPercentage"
                                            name="diplomaPercentage"
                                            className="form-control"
                                            placeholder="Diploma Percentage:"
                                            value={formData.diplomaPercentage}
                                            onChange={handleChange}
                                            style={{ borderRadius: '10px', marginRight: '10px' }}
                                        />
                                        <input type="text"
                                            id="diplomaYearOfPassing"
                                            name="diplomaYearOfPassing"
                                            className="form-control"
                                            placeholder="Diploma Passing Year:"
                                            value={formData.diplomaYearOfPassing}
                                            onChange={handleChange}
                                            style={{ borderRadius: '10px' }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="diplomaSpecialization"
                                            name="diplomaSpecialization"
                                            className="form-control"
                                            placeholder="Diploma Specialization (Branch): "
                                            value={formData.diplomaSpecialization}
                                            onChange={handleChange}
                                            style={{ borderRadius: '10px', marginTop: '10px' }}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mb-4"></div>
                                <div className="form-group col-md-6 d-flex justify-content-start">
                                    <input type="text"
                                        id="firstYearCgpa"
                                        name="firstYearCgpa"
                                        className="form-control"
                                        placeholder="First Year CGPA:"
                                        value={formData.firstYearCgpa}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px', marginRight: '10px' }}
                                    />
                                    <input type="text"
                                        id="yearOfFirstYearPassing"
                                        name="yearOfFirstYearPassing"
                                        className="form-control"
                                        placeholder="Passing Year:"
                                        value={formData.yearOfFirstYearPassing}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                                <div className="form-row mb-4"></div>
                                <div className="form-group col-md-6 d-flex justify-content-start">
                                    <label htmlFor="secondYearCgpa"></label>
                                    <input type="text"
                                        id="secondYearCgpa"
                                        name="secondYearCgpa"
                                        className="form-control"
                                        placeholder="Second Year CGPA:"
                                        value={formData.secondYearCgpa}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px', marginRight: '10px' }}
                                    />
                                    <label htmlFor="yearOfSecondYearPassing"></label>
                                    <input type="text"
                                        id="yearOfSecondYearPassing"
                                        name="yearOfSecondYearPassing"
                                        className="form-control"
                                        placeholder="Passing Year:"
                                        value={formData.yearOfSecondYearPassing}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                                <div className="form-row mb-4"></div>
                                <div className="form-group col-md-6 d-flex justify-content-start">
                                    <label htmlFor="thirdYearCgpa"></label>
                                    <input type="text"
                                        id="thirdYearCgpa"
                                        name="thirdYearCgpa"
                                        className="form-control"
                                        placeholder="Third Year CGPA:"
                                        value={formData.thirdYearCgpa}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px', marginRight: '10px' }}
                                    />
                                    <label htmlFor="yearOfThirdYearPassing"></label>
                                    <input type="text"
                                        id="yearOfThirdYearPassing"
                                        name="yearOfThirdYearPassing"
                                        className="form-control"
                                        placeholder="Passing Year:"
                                        value={formData.yearOfThirdYearPassing}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                                <div className="form-row mb-4"></div>
                                <div className="form-group col-md-6 d-flex justify-content-start">
                                    <label htmlFor="fourthYearCgpa"></label>
                                    <input type="text"
                                        id="fourthYearCgpa"
                                        name="fourthYearCgpa"
                                        className="form-control"
                                        placeholder="Final Year CGPA:"
                                        value={formData.finalYearCgpa}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px', marginRight: '10px' }}
                                    />
                                    <label htmlFor="yearOfFinalYearPassing"></label>
                                    <input type="number"
                                        id="yearOfFinalYearPassing"
                                        name="yearOfFinalYearPassing"
                                        className="form-control"
                                        placeholder="Passing Year:"
                                        value={formData.yearOfFinalYearPassing}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                {/* Radio buttons */}
                                <div className="form-group mb-4">
                                    <p></p>
                                    <p></p>
                                    <p>Active Backlogs</p>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="assistanceForCampus"
                                            value="Yes"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">Yes</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="assistanceForCampus"
                                            value="No"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>

                                    {formData.assistanceForCampus === "Yes" && ( // Conditional rendering
                                        <div className="form-group col-md-6">
                                            <label htmlFor="numberOfCurrentBacklogs"></label>
                                            <input
                                                type="number"
                                                id="numberOfCurrentBacklogs"
                                                name="numberOfCurrentBacklogs"
                                                className="form-control"
                                                placeholder="Number of Current Backlogs:"
                                                value={formData.numberOfCurrentBacklogs}
                                                onChange={handleChange}
                                                required
                                                style={{ borderRadius: '10px' }}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Radio buttons */}
                                <div className="form-group mb-4">
                                    <p></p>
                                    <p>Dead Backlogs</p>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="assistanceForCampus"
                                            value="Yes"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">Yes</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="assistanceForCampus"
                                            value="No"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>

                                {/* Next Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                        style={{ borderRadius: '10px', background: 'linear-gradient(45deg, #007bff, #4a90e2)', border: 'none', marginBottom: '10px' }}
                                    >
                                        Next
                                    </button>
                                </div>

                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        name="joiningYear"
                                        className="form-control"
                                        placeholder="Joining Year to DIEMS"
                                        value={formData.joiningYear}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                            
                                <div className="form-group mb-4">
                                    <p></p>
                                    <p>Interested for Assistance from College For Campus Internship/Placements *</p>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="assistanceForCampus"
                                            value="Yes"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">Yes</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="assistanceForCampus"
                                            value="No"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <p>Interested for Higher Studies? (M-Tech/MBA) *</p>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="interestedHigherStudiesMTechMBA"
                                            value="Yes"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">Yes</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="interestedHigherStudiesMTechMBA"
                                            value="No"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <p>Interested for Higher Studies Abroad? (MS) *</p>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="interestedHigherStudiesAbroad"
                                            value="Yes"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">Yes</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="interestedHigherStudiesAbroad"
                                            value="No"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <p>Interested for Competitive Exams? (MPSC/UPSC/GATE/IBPS) *</p>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="interestedCompetitiveExams"
                                            value="Yes"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">Yes</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="interestedCompetitiveExams"
                                            value="No"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>

                                {/* Additional fields */}
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        name="linkedinProfile"
                                        className="form-control"
                                        placeholder="LinkedIn Profile Link"
                                        value={formData.linkedinProfile}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <p></p>
                                    <label htmlFor="passportSizePhoto" className="custom-file-label">Upload Passport Size Photo (JPEG/PNG)</label>
                                    <input
                                        type="file"
                                        id="passportSizePhoto"
                                        name="passportSizePhoto"
                                        className="form-control-file"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <p></p>
                                    <label htmlFor="resume" className="custom-file-label">Upload Updated Resume</label>
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        className="form-control-file"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <p></p>
                                    <label htmlFor="aadharNumber" className="custom-file-label">Aadhar Number</label>
                                    <input
                                        type="text"
                                        id="aadharNumber"
                                        name="aadharNumber"
                                        className="form-control"
                                        placeholder="Enter Aadhar Number"
                                        value={formData.aadharNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <p></p>
                                    <label htmlFor="uploadAadharCard" className="custom-file-label">Upload Updated Aadhar Card (PDF)</label>
                                    <input
                                        type="file"
                                        id="uploadAadharCard"
                                        name="uploadAadharCard"
                                        className="form-control-file"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <p></p>
                                    <label htmlFor="panNumber" className="custom-file-label">Pan Number</label>
                                    <input
                                        type="text"
                                        id="panNumber"
                                        name="panNumber"
                                        className="form-control"
                                        placeholder="Enter Pan Number"
                                        value={formData.panNumber}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <p></p>
                                    <label htmlFor="uploadPanCard" className="custom-file-label">Upload Updated Pan Card (PDF)</label>
                                    <input
                                        type="file"
                                        id="uploadPanCard"
                                        name="uploadPanCard"
                                        className="form-control-file"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <p></p>
                                    <label htmlFor="passportNumber" className="custom-file-label">Passport Number (if available)</label>
                                    <input
                                        type="text"
                                        id="passportNumber"
                                        name="passportNumber"
                                        className="form-control"
                                        placeholder="Enter Passport Number"
                                        value={formData.passportNumber}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                {/* Next Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                        style={{ borderRadius: '10px', background: 'linear-gradient(45deg, #007bff, #4a90e2)', border: 'none', marginTop: '10px' }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};
