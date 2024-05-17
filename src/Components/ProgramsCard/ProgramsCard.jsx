import React from 'react';
import './ProgramsCard.css';

const ProgramCard = ({ programData }) => {
  const { institute, degree, degree_name, duration, fee, language, name: programName, _id: programId } = programData

  return (
    <div className="program-card">
      <div className="program-header">
        <img src={institute?.image} alt='institute' />
        <h3>{programData.institute?.name}</h3>
        <p><strong>Email: </strong>{programData.institute?.email}</p>
      </div>
      <div className="program-info">
        <div className="program-details">
          <div className="grid-container">
            <div>
              <p>Program Name</p>
              <h3>{programName}</h3>
            </div>
            <div>
              <p>Degree</p>
              <h3>{degree}</h3>
            </div>
            <div>
              <p>Duration</p>
              <h3>{duration} Years</h3>
            </div>
            <div>
              <p>Degree Name</p>
              <h3>{degree_name}</h3>
            </div>
            <div>
              <p>Language</p>
              <h3>{language}</h3>
            </div>
            <div>
              <p>Fee</p>
              <h3>{fee} €</h3>
            </div>
          </div>
        </div>
        <div className="program-actions">
          <button className="check-eligibility">CHECK ELIGIBILITY</button>
          <button className="know-more-btn">KNOW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
