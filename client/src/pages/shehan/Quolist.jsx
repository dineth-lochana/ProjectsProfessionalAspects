import React, { useState } from 'react';
import QuotationForm from './QuotationForm';
import Notification from './Notification'; 
import './App.css';
import QuotationForm_Update from './QuotationForm_Update';
import ItemList from './itemlist';

const Quolist = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container">
      <QuotationForm setShowNotification={setShowNotification} />    
      <ItemList onSelectItem={handleSelectItem} />   
    </div>
  );
};

export default Quolist;
