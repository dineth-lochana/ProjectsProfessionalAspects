import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/////////////////////////////new
const ManageAcounts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8800/users'); 
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleVerificationChange = async (userId, newValue) => {
    try {
      await axios.put(`http://localhost:8800/users/${userId}/verification`, { verified: newValue }); 

      setUsers(users.map(user => user.id === userId ? { ...user, verified: newValue } : user));
    } catch (error) {
      console.error('Error updating verification status:', error);
    }
  };

  return (
    <div>
      <p style={{ paddingTop: '100px', fontSize: '50px', textAlign: 'center' }}>
        Manage Accounts
      </p>
      <div style={{ paddingBottom: '400px', paddingTop: '150px', padding: '50px' }}>
        <table style={{ fontFamily: 'arial, sans-serif', borderCollapse: 'collapse', width: '100%', padding: '50px', fontSize: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '12px', width: '100px' }}>Account No</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '12px' }}>Full Name</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '12px' }}>E-mail Address</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '12px' }}>Validation</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} style={{ backgroundColor: user.verified ? '#00000' : 'inherit' }}>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '12px' }}>{user.id}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '12px' }}>{user.fullname}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '12px' }}>{user.email}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '12px' }}>
                  <select
                    style={{ fontSize: '20px' }}
                    value={user.verified} 
                    onChange={(e) => handleVerificationChange(user.id, e.target.value)}
                  >
                    <option value="false">False</option>
                    <option value="true">True</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAcounts;
