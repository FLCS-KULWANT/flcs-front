import React from 'react'
import './UserEnquiry.css'
const UserEnquiry = () => {
    const options = [
        "Computer Science",
        "Data Science and Data Analytics",
        "Business Analytics",
        "Mechanical Engineering",
        "Management Information Systems",
        "Electrical and Electronics Engineering",
        "Computer and Information Systems",
        "Electrical and Computer Engineering",
        "Engineering Management Mem",
        "Industrial Engineering",
        "Civil Engineering",
        "Computer Engineering",
        "Information Technology",
        "Cybersecurity",
        "Mba",
        "Software Engineering",
        "Aerospace Engineering",
        "Artificial Intelligence",
        "Construction Management",
        "Finance",
        "Business Administration and Management",
        "Biomedical Engineering",
        "Biotechnology",
        "Human Computer Interaction",
        "Chemical Engineering",
        "Computer and Information Sciences General",
        "Robotics Technology",
        "Management Science",
        "Electrical Engineering",
        "Computational Science",
        "Public Health",
        "Logistics and Supply Chain Management",
        "Civil and Environmental Engineering",
        "Automotive Engineering",
        "Computer Networking and Telecommunications",
        "Information Science",
        "Health Information Technology",
        "Materials Engineering",
        "Human Resources Management",
        "Technology Management and Entrepreneurship",
        "Mechatronics Robotics and Automation Engineering",
        "Project Management",
        "Biological Biosystems Engineering",
        "Architecture",
        "Biomedical Informatics",
        "Marketing",
        "Chemical Petroleum",
        "Construction Engineering",
        "Pharmacy",
        "Manufacturing Engineering",
        "Accounting",
        "Systems Engineering",
        "International Business Management",
        "Economics",
        "Engineering General",
        "Health Administration",
        "Informatics",
        "Psychology",
        "Pharmaceutical Sciences",
        "International Business",
        "Environmental Science",
        "Financial Engineering",
        "Environmental Mining",
        "Energy Systems Engineering",
        "Business General",
        "Mathematics and Statistics",
        "Technology Innovation and Entrepreneurship",
        "Biology General",
        "Econometrics and Quantitative Economics",
        "Embedded Systems",
        "Biomedical Sciences",
        "Computer Systems Engineering",
        "Electrical Electronics and Communications Engineering",
        "Chemistry",
        "Structural Engineering",
        "International Relations",
        "Physics",
        "Product Design and Development",
        "Urban Community and Regional Planning",
        "Sociology",
        "Transportation and Highway Engineering",
        "Nursing",
        "Operations Management",
        "Mathematics",
        "Health Care",
        "Computing Technology Mct",
        "Engineering Science",
        "Game and Interactive Media Design",
        "Biological Science",
        "Sustainable Energy",
        "Cellular and Molecular Biology",
        "Electrical and Power Engineering",
        "Agriculture General",
        "Intelligent Systems",
        "Accounting and Finance",
        "Renewable Energy",
        "Communication General",
        "Modeling Virtual Environments and Simulation",
        "Materials Science",
        "Applied Mathematics",
        "Neuroscience",
        "Engineering and Industrial Management",
        "Digital Communications and Multimedia",
        "Business and Marketing Management",
        "Algorithms and Machine Learning",
        "Management and Business Analytics",
        "Astronomy",
        "Biochemistry and Molecular Biology",
        "Chemical and Biological Engineering",
        "Plant Sciences",
        "English",
        "Sustainability Science",
        "Digital and Social Media Marketing",
        "Data Analytics and Quantitative Analysis",
        "Actuarial Science",
        "Food Technology and Processing",
        "Public Policy Analysis",
        "Forensic Science",
        "Design and Visual Communications",
        "Electronics Engineering",
        "Communications Systems Technology",
        "Astrophysics",
        "Process Engineering",
        "Political Science",
        "International Studies",
        "Integrated Circuit Design",
        "Sports Business and Management",
        "Nanotechnology",
        "Systems and Control",
        "New Media Art",
        "Geomatics and Geographic Information Systems",
        "Manufacturing Engineering Technology",
        "Fine and Studio Art",
        "Computer Aided Drafting and Design",
        "Science Technology and Society",
        "Energy and Environmental Law",
        "Biochemical Engineering",
        "Media Studies",
        "Web Development",
        "Automation Engineer Technology",
        "Journalism",
        "Mathematics and Computer Science",
        "Architectural Engineering",
        "Network and System Administration",
        "Financial Economics",
        "Creative Arts and Practice",
        "Engineering Physics",
        "Water Resources Engineering",
        "Anthropology",
        "Mining and Mineral Engineering",
        "Molecular Biology",
        "Earth Science",
        "Medical Informatics",
        "Geography",
        "Strategic Management",
        "Applied Physics",
        "Laser and Optical Engineering",
        "Transportation Management",
        "Accounting and Business Management",
        "Creative Writing",
        "Environmental Engineering Technology",
        "Philosophy",
        "Knowledge Management",
        "Enterprise Risk Management",
        "Development Economics and International Development",
        "Cognitive Science",
        "Water Wetlands and Marine Resources Management",
        "International Finance",
        "Design Innovation Management",
        "Metallurgical Engineering",
        "Multimedia",
        "Biomedical Technology",
        "Visual and Performing Arts General",
        "Development Studies",
        "Photography",
        "Water Quality and Wastewater Treatment",
        "Machine Tool Technology",
        "Electrical Engineering Technology",
        "Sustainable Business",
        "Power Systems Engineering",
        "Civil Engineering Technology",
        "Cognitive Psychology and Psycholinguistics",
        "Business Teacher Education",
        "Astronautics and Space Engineering",
        "Communications Technologies",
        "Comparative Literature",
        "Hydrology and Water Resources Science",
        "Marine Engineering and Naval Architecture",
        "Theoretical and Mathematical Physics",
        "Sports Studies",
        "Neurobiology and Behavior",
        "Atmospheric Chemistry and Climatology",
        "It Strategy and Digital Transformation",
        "Elementary Particle Physics",
        "Biofabrication and Biomaterials",
        "Biophysics",
        "Biological and Physical Sciences",
        "Embedded Systems and Software",
        "Digital Learning Education",
        "European Studies",
        "Apparel and Accessories Marketing Operations",
        "Directed Energy Systems",
        "Geoinformatics",
      ];
    
  return (
    <div>
        <div className="form-container">
          <h3>Book Your Free Counseling</h3>
          <form>
            <div className="form-group">
              <label>Degree Interested in*</label>
              <div className="degree-buttons">
                <input type="radio" id="masters" name="degree" value="Masters" required />
                <label htmlFor="masters" className="degree-button">Masters</label>
                <input type="radio" id="bachelors" name="degree" value="Bachelors" required />
                <label htmlFor="bachelors" className="degree-button">Bachelors</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="degree">What are you planning to study?*</label>
              <input list="degreeOptions" name="degree" id="degreeInput" placeholder="Select degree..." />
              <datalist id="degreeOptions">
                {options.map((option, index) => (
                  <option key={index} value={option} />
                ))}
              </datalist>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" name="name" required placeholder='Your Name*' />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile*</label>
              <input type="tel" id="mobile" name="mobile" required placeholder='Your Mobile*' />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required placeholder='Your Email*' />
            </div>
            <div className="checkbox">
              <span><input type="checkbox" id="terms" name="terms" required /></span>
              <label htmlFor="terms">By submitting this form, you agree to the Terms of Use and Privacy Policy</label>
            </div>
            <button type="submit">Book Your Free Counseling</button>
          </form>
        </div>
    </div>
  )
}

export default UserEnquiry