import React from 'react';

const QuotationForm_View = ({ item, onClose }) => {
  return (
    <div className="quotation-form-update">
      <h2>View Quotation Form</h2>
      <div>
        <label>Full Name:</label>
        <input type="text" name="Full_Name" value={item.Full_Name || ''} readOnly />
      </div>
      <div>
        <label>Subject:</label>
        <input type="text" name="Subject" value={item.Subject || ''} readOnly />
      </div>
      <div>
        <label>Company Name:</label>
        <input type="text" name="Company_Name" value={item.Company_Name || ''} readOnly />
      </div>
      <div>
        <label>Email Address:</label>
        <input type="text" name="Email_Address" value={item.Email_Address || ''} readOnly />
      </div>
      <div>
        <label>Contact Number:</label>
        <input type="text" name="Contact_Number" value={item.Contact_Number || ''} readOnly />
      </div>
      <div>
        <label>Details:</label>
        <textarea name="Details" value={item.Details || ''} readOnly></textarea>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default QuotationForm_View;
