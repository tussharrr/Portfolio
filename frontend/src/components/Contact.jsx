import React, { useState } from 'react';
import '../components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    mobile: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          company: '',
          mobile: '',
          email: '',
        }); // Reset form fields
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:roytushar98@gmail.com">roytushar98@gmail.com</a> |{' '}
        <a href="mailto:tushar.sethi1685@yahoo.com">tushar.sethi1685@yahoo.com</a>
      </p>
      <p>Phone: +91 8107333952</p>

      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile No."
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
