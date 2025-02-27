import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import Button from '../ui/Button';
import './ContactForm.css';

const ContactForm = () => {
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
      // In a real application, you would make an API call here
      // For now, let's simulate a form submission with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate a successful submission
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
    <div className="contact-form-wrapper">
      <h2 className="contact-form-title">{t('contact.title')}</h2>
      <p className="contact-form-subtitle">{t('contact.subtitle')}</p>
      
      {formStatus.submitted && formStatus.success && (
        <div className="form-message success">
          <p>{t('contact.success')}</p>
        </div>
      )}
      
      {formStatus.submitted && !formStatus.success && (
        <div className="form-message error">
          <p>{formStatus.error || t('contact.error')}</p>
        </div>
      )}
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
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
              placeholder={t('contact.namePlaceholder')}
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
              placeholder={t('contact.emailPlaceholder')}
            />
          </div>
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
            placeholder={t('contact.subjectPlaceholder')}
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
            placeholder={t('contact.messagePlaceholder')}
          ></textarea>
        </div>
        
        <Button 
          type="submit" 
          variant="primary"
          size="lg"
          icon={formStatus.submitting ? null : <Send size={18} />}
          fullWidth
          disabled={formStatus.submitting}
          className="submit-button"
        >
          {formStatus.submitting ? (
            <span className="loading-spinner"></span>
          ) : t('contact.submitButton')}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;