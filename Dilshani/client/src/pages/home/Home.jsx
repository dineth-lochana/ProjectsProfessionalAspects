import React from 'react';
import { useState,useEffect } from 'react';
import Posts from '../../components/posts/Posts';
import Share from '../../components/share/Share';
import Navbar from "../../components/navbar/Navbar";
import './home.scss';

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Check if user is admin
  const isAdmin = currentUser && currentUser.role === 'admin';
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="home">
      <div className="navbar-container">
           <Navbar />
          </div>
      <div className="share-container">
      <Share />
      </div>
      <div className="printable-posts">
        <Posts />
      </div>
      <div className='print-button'>
      {isAdmin && <button onClick={handlePrint}>Print Posts</button>}
      </div>
      
    </div>
  );
};

export default Home;
