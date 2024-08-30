import React from 'react';

const Education = () => {
  const sectionStyle = {
    padding: '50px 20px',
    backgroundColor: '#EA5455', // Light background color
    color: '#333',
  };

  const educationContainerStyle = {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'black', // Heading color
  };

  const subHeadingStyle = {
    fontSize: '18px',
    fontWeight: 'normal',
    marginBottom: '5px',
    color: '#555',
  };

  const dateStyle = {
    fontSize: '16px',
    color: '#777',
  };

  return (
    <section id="education" className="education" style={sectionStyle}>
      <h2 style={headingStyle}>Education</h2>
      <div style={educationContainerStyle}>
        <h3 style={subHeadingStyle}>Poornima Institute of Engineering and Technology</h3>
        <p style={subHeadingStyle}>Bachelor of Technology, Computer Science</p>
        <p style={dateStyle}>2020 - 2024</p>
      </div>
      <div style={educationContainerStyle}>
        <h3 style={subHeadingStyle}>Sharda Vidhya Mandir Public School</h3>
        <p style={subHeadingStyle}>Class XII, CBSE</p>
        <p style={dateStyle}>2019 - 2020</p>
      </div>
      <div style={educationContainerStyle}>
        <h3 style={subHeadingStyle}>Sharda Vidhya Mandir Public School</h3>
        <p style={subHeadingStyle}>Class X, CBSE</p>
        <p style={dateStyle}>2017 - 2018</p>
      </div>
    </section>
  );
}

export default Education;
