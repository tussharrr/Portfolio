import React from 'react';
import '../components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
        <span className="email-text">Email:</span><a href="mailto:roytushar98@gmail.com">roytushar98@gmail.com</a> |{' '}
          <a href="mailto:tushar.sethi1685@yahoo.com">tushar.sethi1685@yahoo.com</a>
        </p>
        <p className="phone-number">Phone: +91 8107333952</p>
        <p>&copy; {new Date().getFullYear()} Tushar Sethi <br /> All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
