// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';
import Allprograms from './Screens/AllPrograms/Allprograms';
import CollegeFinderPage from './Screens/CollegeFinder/CollegeFinder';
import HomePage from './Screens/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Content">
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/all-programs" element={<Allprograms/>} />
            <Route path="/college-finder" element={<CollegeFinderPage/>} />
            {/* <Route path="/popular-courses" component={PopularCoursesPage} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
