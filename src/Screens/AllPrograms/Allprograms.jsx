
import React, { useState, useEffect } from 'react';
import { fetchPrograms } from '../../Services/programsService';
import './Allprograms.css';
import { Skeleton } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import ProgramCard from '../../Components/ProgramsCard/ProgramsCard';
import PreferenceFilter from '../../Components/PreferenceFilter/PreferenceFilter';

const Allprograms = () => {
  const [programs, setprograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const limit =10;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchPrograms(page, limit);
        setprograms(data.data);
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
        <h1>All Programs</h1>
        <div className="all-universities">
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} variant="rect" height={100} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;
  // console.log(programs,'programs')
  return (
    <div className='programs-container'>
      <h1>All Programs</h1>
      <PreferenceFilter/>
      <div className="all-programs">
        {programs.map((program, index) => (
          <ProgramCard key={index} programData={program} />
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

export default Allprograms;

// const UniversityCard = ({ programData }) => {
//   const { name, about, country, email, image } = programData;

//   return (
//     <div className="university-card">
//       <div className="card-image">
//         <img src={image} alt={`${name} Logo`} className="logo" />
//       </div>
//       <div className='card-down'>
//       <div className="university-info">
//         <h2>{name}</h2>
//         <p>{about}</p>
//         <p>
//           <strong>Location:</strong> {country}
//         </p>
//         <p>
//           <strong>Email:</strong> {email}
//         </p>
//       </div>
//       <div className="card-footer">
//         <button className="explore-button">Connect with Free Mentor</button>
//       </div>
//       </div>
//     </div>
//   );
// };
