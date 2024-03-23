import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const QuotationForm_Update = ({ item, onClose, onUpdate }) => {
  const [updatedItem, setUpdatedItem] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    setUpdatedItem(item);
  }, [item]);

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (id) => {
    try {      
      const response = await axios.put(`http://localhost:8800/msg/${id}`, updatedItem);
      console.log('Server Response:', response.data);
      onUpdate(updatedItem);
      onClose();
    } catch (err) {
      console.log(err);      
    }
  };

  return (
    <div className="quotation-form-update">
      <h2>Update Quotation Form</h2>
      <div>
        <label>Full Name:</label>
        <input type="text" name="Full_Name" value={updatedItem.Full_Name || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Subject:</label>
        <input type="text" name="Subject" value={updatedItem.Subject || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Company Name:</label>
        <input type="text" name="Company_Name" value={updatedItem.Company_Name || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Email Address:</label>
        <input type="text" name="Email_Address" value={updatedItem.Email_Address || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Contact Number:</label>
        <input type="text" name="Contact_Number" value={updatedItem.Contact_Number || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Details:</label>
        <textarea name="Details" value={updatedItem.Details || ''} onChange={handleChange}></textarea>
      </div>
      <button onClick={() => handleUpdate(updatedItem.idmsg)}>Update</button>
      <button onClick={onClose}>Cancel</button>      
    </div>
  );
};

export default QuotationForm_Update;
