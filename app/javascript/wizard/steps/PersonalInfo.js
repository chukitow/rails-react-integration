import React from 'react';

const PersonalInfo = ({
  onNext
}) => (
  <div className="card">
    <div className="card-header">
      Personal Information
    </div>
    <div className="card-body">
      <form>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onNext}>Next</button>
      </form>
    </div>
  </div>
);

export default PersonalInfo;
