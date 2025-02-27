import React, { useState } from 'react';
import { Clock, Send, Mail, User, MessageSquare, Github, Linkedin, Twitter } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formState);
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        {/* Header Section */}
        <div className="form-header">
          <h1>Let's Create Something Amazing</h1>
          <p>I'm excited to hear about your project!</p>
        </div>

        {/* Main Form Card */}
        <div className="main-card">
          {/* Availability Badge */}
          <div className="availability">
            <Clock size={16} />
            <span>Response time: Within 24 hours</span>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <User className="input-icon" size={18} />
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <MessageSquare className="input-icon" size={18} />
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="form-textarea"
                required
              />
            </div>

            <button 
              type="submit" 
              className={`submit-button ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>
          </form>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com/dobronx06" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tom-bouchard-881b212b2/" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/tom_bchrd_" className="social-link">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default ContactForm;