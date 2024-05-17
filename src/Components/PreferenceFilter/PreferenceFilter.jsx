import React from 'react';
import './PreferenceFilter.css';

const PreferenceFilter = () => {
  const degree = ['Bachlors', 'Masters']
  const Universities = ['Milan', 'Marche', 'Pisa', 'Trento', 'Milano','Parma', 'Padua', 'Cassino', 'Turin', 'Naples', 'Verona', 'Genoa', 'Palermo', 'Sapienza', 'Florence', 'Rome', 'Salerno', 'Insubria', 'Tusica',]
  const Domains = [
    "MBA",
    "Management",
    "Data Science",
    "Business Analytics",
    "AI & ML",
    "Computer Science",
    "Information Technology",
    "Cybersecurity",
    "Healthcare",
    "Finance & Accounting",
    "Bachelors Management",
    "Bachelors Technology",
    "Project Management",
    "Doctorate",
    "Marketing",
    "Entreprenuership",
    "Hospitality",
    "Engineering",
    "Supply Chain"
  ];
  
  return (
    <div className="preference-card">
      <div >
        <h4>Search by Degree</h4>
        <div className='degree-filter'>
        {degree.map((degree, index) => (
            <div key={index} className="options">
              <h4>{degree}</h4>
            </div>
          ))
        }
        </div>
      </div>
      <div>
        <h4>Search by Top University</h4>
        <div className='degree-filter'>
        {Universities.map((University, index) => (
            <div key={index} className="options">
              <h4>{University}</h4>
            </div>
          ))
        }
        </div>
      </div>
      <div>
        <h4>Search by Top Domains</h4>
        <div className='degree-filter'>
        {Domains.map((domain, index) => (
            <div key={index} className="options">
              <h4>{domain}</h4>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default PreferenceFilter;
