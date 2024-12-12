import React, { useState } from 'react';
import AboutUs from './AboutUs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main>
      <section className="contact-us">
        <div className="container">
          <h2>Let's Build a Safer Digital World Together</h2>
          <div className="contact-form-and-about-us">
            <AboutUs />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="cta-button">
                Send Message
              </button>
            </form>
          </div>
          {submitted && (
            <div className="post-submit-message">
              Thank you for reaching out! We'll get back to you shortly.
            </div>
          )}
          <div className="additional-info">
            <p>Email: contact@severityai.com</p>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;