import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Notification from './Notification';

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    companyName: '',
    emailAddress: localStorage.getItem('useremail'),
    contactNumber: '',
    details: '',
  });

  const [showNotification, setShowNotification] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      subject: '',
      companyName: '',
      emailAddress: localStorage.getItem('useremail'),
      contactNumber: '',
      details: '',
    });
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if required fields are filled
    if (formData.fullName && formData.emailAddress && formData.contactNumber && formData.details && formData.subject) {
      try {
        const response = await axios.post("http://localhost:8800/msg", formData);
        console.log('Server Response:', response.data);
        setShowNotification(true);
        setSendingEmail(true); 
    try {
      await axios.post('http://localhost:8800/sendEmail', formData);

      alert('Email notification sent!');
      setSubmitted(true);
    } catch (error) {
      alert('Error sending email: ' + error.message);
    }
    setSendingEmail(false); 
    setTimeout(() => {
      setSubmitted(false);
    }, 1000);
        
        handleReset();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <div>
      {showNotification && (
        <Notification message="Request Successfully Sent!" onClose={handleNotificationClose} />
      )}
      <div className="quotation-form-container">
        <h2 style={{ textAlign: "center" }}>Request for Quotation/Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email Address:
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Contact Number:
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Details:
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={6}
              required
            />
          </label>
          <div className="button-container">
          {sendingEmail ? ( 
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                <button type="submit">Submit</button>
              )}
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuotationForm;
