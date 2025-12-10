import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call/Email sending
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({ from_name: '', from_email: '', message: '' });
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Contact Us</h2>
        <p className="modal-description">
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </p>

        <form onSubmit={sendEmail} className="modal-form">

          <div className="form-field">
            <label htmlFor="from_name" aria-label="Name *">Name *</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Name *"
            />
          </div>


          <div className="form-field">
            <label htmlFor="from_email" aria-label="Email Address *">Email Address *</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Email Address *"
            />
          </div>


          <div className="form-field">
            <label htmlFor="message" aria-label="Message *">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Message *"
              rows="4"
              style={{ resize: 'vertical', minHeight: '100px' }}
            />
          </div>

          <div className="modal-actions">
            <button
              type="button"
              onClick={onClose}
              className="btn-cancel"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-subscribe"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Contact Us'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
