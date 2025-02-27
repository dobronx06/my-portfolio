import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ContactPage.css';

const ContactPage = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null
  });
  
  const [formRef, formVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [infoRef, infoVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set submitting state
    setFormStatus({
      submitting: true,
      submitted: false,
      success: false,
      error: null
    });
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would make an API call here
      // For now, we'll just simulate a successful submission
      
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Set success state
      setFormStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: null
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          submitted: false
        }));
      }, 5000);
      
    } catch (error) {
      // Set error state
      setFormStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: t('contact.error')
      });
    }
  };
  
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">{t('contact.title')}</h1>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </div>
      </section>
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div 
              ref={formRef} 
              className={`contact-form-container animate-on-view ${formVisible ? 'is-visible' : ''}`}
            >
              <div className="contact-card">
                <h2 className="contact-form-title">{t('contact.title')}</h2>
                
                {formStatus.submitted && formStatus.success && (
                  <div className="form-success-message">
                    <p>{t('contact.success')}</p>
                  </div>
                )}
                
                {formStatus.submitted && !formStatus.success && (
                  <div className="form-error-message">
                    <p>{formStatus.error || t('contact.error')}</p>
                  </div>
                )}
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">{t('contact.nameLabel')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.submitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">{t('contact.emailLabel')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.submitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">{t('contact.subjectLabel')}</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.submitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">{t('contact.messageLabel')}</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows="5"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.submitting}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-button button button-primary button-hover-effect"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? (
                      <span className="loading-spinner"></span>
                    ) : (
                      <>
                        {t('contact.submitButton')}
                        <Send size={18} className="button-icon" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            <div 
              ref={infoRef} 
              className={`contact-info-container animate-on-view ${infoVisible ? 'is-visible' : ''}`}
            >
              <div className="contact-card">
                <h2 className="contact-info-title">{t('contact.findMe')}</h2>
                
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="info-icon">
                      <Mail size={20} />
                    </div>
                    <div className="info-content">
                      <h3 className="info-title">Email</h3>
                      <a href="mailto:contact@tombouchard.com" className="info-link">
                        contact@tombouchard.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="info-icon">
                      <Phone size={20} />
                    </div>
                    <div className="info-content">
                      <h3 className="info-title">{t('common.phone')}</h3>
                      <a href="tel:+33600000000" className="info-link">
                        +33 6 00 00 00 00
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="info-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="info-content">
                      <h3 className="info-title">{t('common.location')}</h3>
                      <p className="info-text">Paris, France</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="social-title">{t('contact.social')}</h3>
                <div className="social-links">
                  <a 
                    href="https://github.com/tombouchard" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link-item"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                    <span>GitHub</span>
                    <ExternalLink size={14} className="external-icon" />
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/tombouchard" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link-item"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                    <span>LinkedIn</span>
                    <ExternalLink size={14} className="external-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;