import React from 'react';
import './App.css';

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification-container">
      <div className="notification-content">
        <span className="notification-message">{message}</span>
        <button className="notification-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Notification;
