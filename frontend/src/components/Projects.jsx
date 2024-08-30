import React from 'react';
import aalayLogo from '../images/alay.png'; // Add your image path here
import carmanLogo from '../images/carman-logo.png'; // Add your image path here

function Projects() {
  const sectionStyle = {
    padding: '50px 20px',
    fontWeight:'bold',
    backgroundColor: '#0396FFf4', // Light background color
    color: '#333',
  };

  const projectListStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', // Space between project items
  };

  const projectItemStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  };

  const logoStyle = {
    width: '60px',
    height: '60px',
    marginRight: '20px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007BFF', // Link color
    fontWeight: 'bold',
    fontSize: '18px',
  };

  const projectHoverStyle = {
    transform: 'scale(1.05)',
  };

  return (
    <section id="projects" style={sectionStyle}>
      <h2>Projects</h2>
      <ul style={projectListStyle}>
        <li 
          style={projectItemStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = projectHoverStyle.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img src={aalayLogo} alt="AALAY Logo" style={logoStyle} />
          <a href="https://play.google.com/store/apps/details?id=com.responseinfoway.alay" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            AALAY - Aditya Guest House Booking System
          </a>
        </li>
        <li 
          style={projectItemStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = projectHoverStyle.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img src={carmanLogo} alt="CARMAN Logo" style={logoStyle} />
          <a href="https://play.google.com/store/apps/details?id=com.responseinfoway.carmanhkd" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            CARMAN - App for booking local and outstation vehicles
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
