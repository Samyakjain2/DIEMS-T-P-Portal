import React, { useState } from 'react';

export const CreateNewDrive = () => {
  const [programs, setPrograms] = useState([{ level: 'Bachelor', streams: ['Production', 'Mechanical'] }]);
  const [masterPrograms, setMasterPrograms] = useState([{ level: 'Master', streams: ['Production', 'Mechanical', 'Electronic & Communication'] }]);
  const [jobLocations, setJobLocations] = useState(['Bangalore', 'Hyderabad', 'New Delhi']);
  const [designations, setDesignations] = useState(['Executive Engineer', 'Executive Engineer', 'Executive Engineer']);
  
  const handleAddProgram = () => {
    setPrograms([...programs, { level: 'Bachelor', streams: [] }]);
  };
  
  const handleAddMasterProgram = () => {
    setMasterPrograms([...masterPrograms, { level: 'Master', streams: [] }]);
  };
  
  const handleAddLocation = () => {
    setJobLocations([...jobLocations, '']);
  };
  
  const handleAddDesignation = () => {
    setDesignations([...designations, 'Executive Engineer']);
  };

  return (
    <div className="container mt-4 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <h2>Create New Drive</h2>
      <form>
        {/* College Name and Batch */}
        <div className="form-group row">
          <div className="col-md-6">
            <label>College Name</label>
            <select className="form-control">
              
              <option value="DIEMS">DIEMS</option>
              <option value="MIT">MIT</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Batch</label>
            <select className="form-control">
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>

        {/* General Criteria */}
        <div className="form-group mt-4">
          <h5>General Criteria</h5>
          <div className="form-check-inline">
            <input className="form-check-input" type="checkbox" id="percentage" />
            <label className="form-check-label" htmlFor="percentage">Percentage</label>
          </div>
          <div className="form-check-inline">
            <input className="form-check-input" type="checkbox" id="backlogs" />
            <label className="form-check-label" htmlFor="backlogs">Backlogs</label>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <select className="form-control">
                <option value="Throughout %">Throughout %</option>
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-control">
                <option value="CGPA">CGPA</option>
              </select>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <select className="form-control">
                <option value="Max Backlogs">Max Backlogs</option>
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-control">
                <option value="Previous Backlogs">Previous Backlogs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Programs */}
        <div className="form-group mt-4">
          <h5>Programs</h5>
          {programs.map((program, index) => (
            <div key={index} className="form-row mb-2" style={{ backgroundColor: '#e9ecef', padding: '10px', borderRadius: '5px' }}>
              <div className="col-md-6">
                <label>Program Level</label>
                <select className="form-control">
                  <option value="Bachelor">Bachelor</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>Streams</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={program.streams.join(', ')} 
                  readOnly 
                />
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-secondary mt-2" onClick={handleAddProgram}>Add Custom Criteria</button>
        </div>

        {/* CTC */}
        <div className="form-group mt-4">
          <h5>CTC</h5>
          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name="ctc" value="fix" />
            <label className="form-check-label">Fix</label>
          </div>
          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name="ctc" value="range" />
            <label className="form-check-label">Variable</label>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <select className="form-control">
                <option value="4 lacs">4 lacs</option>
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-control">
                <option value="5 lacs">5 lacs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Master Programs */}
        <div className="form-group mt-4">
          <h5>Master Programs</h5>
          {masterPrograms.map((program, index) => (
            <div key={index} className="form-row mb-2" style={{ backgroundColor: '#e9ecef', padding: '10px', borderRadius: '5px' }}>
              <div className="col-md-6">
                <label>Program Level</label>
                <select className="form-control">
                  <option value="Master">Master</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>Streams</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={program.streams.join(', ')} 
                  readOnly 
                />
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-secondary mt-2" onClick={handleAddMasterProgram}>Add Custom Criteria</button>
        </div>

        {/* Job Locations */}
        <div className="form-group mt-4">
          <h5>Job Locations</h5>
          <div className="input-group">
            <input type="text" className="form-control" value={jobLocations.join(', ')} readOnly />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={handleAddLocation}>Add Location</button>
            </div>
          </div>
        </div>

        {/* Bond */}
        <div className="form-group mt-4">
          <h5>Bond</h5>
          <select className="form-control">
            <option value="No Bond">No Bond</option>
            <option value="Bond">Bond</option>
          </select>
        </div>

        {/* Date and Deadlines */}
        <div className="form-group mt-4">
          <h5>Date of Drive</h5>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group">
          <h5>Last Date of Application</h5>
          <input type="date" className="form-control" />
        </div>

        {/* Designations */}
        <div className="form-group mt-4">
          <h5>Designations</h5>
          <div className="input-group">
            <input type="text" className="form-control" value={designations.join(', ')} readOnly />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={handleAddDesignation}>Add Designation</button>
            </div>
          </div>
        </div>

        {/* Job Description and About Company */}
        <div className="form-group mt-4">
          <label>Job Description</label>
          <textarea className="form-control" rows="3" placeholder="Enter Job Description"></textarea>
        </div>
        <div className="form-group">
          <label>About Company</label>
          <textarea className="form-control" rows="3" placeholder="Enter Company Details"></textarea>
        </div>

        {/* Submit and Cancel */}
        <div className="form-group mt-4">
          <button type="submit" className="btn btn-primary mr-2">Create</button>
          <button type="button" className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
};


