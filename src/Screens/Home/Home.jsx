import React, { useEffect, useState } from 'react';
import './Home.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import UserEnquiry from '../../Components/UserEnquiry/UserEnquiry';
import { fetchInstitutes } from '../../Services/collegeFinderService';
import { UniversityCard } from '../CollegeFinder/CollegeFinder';
const Home = () => {
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchInstitutes(1, 10);
        setInstitutes(data.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(institutes)
  return (
    <>
      <div className="home-container">
        <div className="background-image"></div>
        <div className="overlay">
          <UserEnquiry />
          <div className="content">
            <h1>Get your dreams wings</h1>
            <p>Explore thousands of programs, get matched with an advisor.</p>
            <Link to='/all-programs'><button>Explore Programs</button></Link>
          </div>
        </div>
      </div>
      <div className='top-universities'>
        {/* <h2>Explore Popular Universities</h2> */}
        {institutes.map((institute, index) => (
          <UniversityCard key={index} collegeData={institute} />
        ))}
      </div>
    </>
  );
};

export default Home;
