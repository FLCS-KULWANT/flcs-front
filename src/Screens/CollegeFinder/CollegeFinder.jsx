import React, { useState, useEffect } from 'react';
import { fetchInstitutes } from '../../Services/collegeFinderService';
import './CollegeFinder.css';
import { Skeleton } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const CollegeFinder = () => {
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const limit = 9;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchInstitutes(page, limit);
        setInstitutes(data.data);
        setTotal(data.total)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return (
      <div>
        <h1>College Finder</h1>
        <div className="all-universities">
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} variant="rect" height={100} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='universities-container'>
      <h1>College Finder</h1>
      <div className="all-universities">
        {institutes.map((institute, index) => (
          <UniversityCard key={index} collegeData={institute} />
        ))}
      </div>
      <Pagination
        className='pagination'
        count={Math.floor(total / limit)} 
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CollegeFinder;

export const UniversityCard = ({ collegeData }) => {
  const { name, about, country, email, image } = collegeData;

  return (
    <div className="university-card">
      <div className="card-image">
        <img src={image} alt={`${name} Logo`} className="logo" />
      </div>
      <div className='card-down'>
      <div className="university-info">
        <h2>{name}</h2>
        <p>{about}</p>
        <p>
          <strong>Location:</strong> {country}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
      <div className="card-footer">
        <button className="explore-button">Explore Programs</button>
      </div>
      </div>
    </div>
  );
};
