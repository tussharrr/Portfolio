import React from 'react';
import '../components/Education.css'
import celebalLogo from '../images/celebal-tech.jpeg';
import responseInfowayLogo from '../images/response-infoway.png';
import backgroundImage from '../images/experience.webp';
import '../components/Experience.css';

const Experience = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 20px',
    color: '#000', // Changed to black for all text
  };

  const logoStyle = {
    height: '50px',
    marginRight: '10px',
    verticalAlign: 'middle',
  };

  const titleStyle = {
    fontWeight: 'bold', // Made the heading bold
    color: '#000', // Set title color to black
  };

  const textStyle = {
    color: 'white', // All text color set to black

  };
  const spanstyle ={
    color:'yellow',
    fontWeight: 'bold',
  };

  return (
    <section id="experience" className="experience" style={sectionStyle}>
      <h2 style={titleStyle}>Experience</h2> {/* Heading made bold */}
      <div>
        <h3 style={titleStyle}>
          <img 
            src={celebalLogo}
            alt="Celebal Technologies Logo" 
            style={logoStyle} 
          />
          <span style={spanstyle}>Cloud Infrastructure Intern</span>
        </h3>
        <p style={textStyle}>Celebal Technologies - Jaipur, India<br /> 
        May 2023 - July 2023
        </p>
        <p style={textStyle}>
          Implemented Azure Privileged Identity Management for root subscription users, ensuring access
          approval by global administrators. Gained insights into managing elevated access rights and
          implementing stringent security measures. Acquired practical expertise in configuring and monitoring
          privileged roles, emphasizing just-in-time access and least-privileged principles within Azure
          environments.
        </p>
      </div>
      <div>
        <h3 style={titleStyle}>
          <img 
            src={responseInfowayLogo} 
            alt="Response Infoway Logo" 
            style={logoStyle} 
          />
         <span style={spanstyle}>Trainee Application Developer </span>
        </h3>
        <p style={textStyle}>Response Infoway - Jaipur, India<br />
        June 2022 - August 2022
        </p>
        <p style={textStyle}>
          Developed a Cab Booking System, an online platform enabling car bookings with just a few clicks.
          Completed a 60-day training session that included exposure to Android Studio using Java and designing.
        </p>
      </div>
    </section>
  );
}

export default Experience;
