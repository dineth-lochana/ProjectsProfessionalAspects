import React from 'react';
import { Link } from 'react-router-dom';

const ManageAcounts = () => {
  const commonStyle = {
    color: 'rgb(2, 2, 2)',
    textAlign: 'center',
  };

  const tableStyle = {
    fontFamily: 'arial, sans-serif',
    borderCollapse: 'collapse',
    width: '100%',
    padding: '50px',
    fontSize: '20px'
  };

  const cellStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '12px',
  };

  const evenRowStyle = {
    backgroundColor: '#D0F5C0',
  };

  const accountNoCellStyle = {
    ...cellStyle,
    width: '100px', 
  };

  const dropdownCellStyle = {
    ...cellStyle,
    fontSize: '16px',
    
  };

  return (
    <div>
      <p style={{ ...commonStyle, paddingTop: '100px', fontSize: '50px' }}>
        Manage Accounts
      </p>
      <div style={{ paddingBottom: '400px', paddingTop: '150px', padding: '50px' }}>
        <table style={tableStyle}>
          <tr>
            <th style={accountNoCellStyle}>Account No</th>
            <th style={cellStyle}>Username</th>
            <th style={cellStyle}>E-mail Address</th>
            <th style={cellStyle}>Validation</th>
          </tr>
          <tr style={evenRowStyle}>
            <td style={accountNoCellStyle}>1</td>
            <td style={cellStyle}>Maria Anders</td>
            <td style={cellStyle}>maria@example.com</td>
            <td style={dropdownCellStyle}>
              <select style={{ fontSize: '20px' }}>
              <option value="validated">Validated</option>
                <option value="rejected">Rejected</option>
                
              </select>
            </td>
          </tr>
          <tr >
            <td style={accountNoCellStyle}>1</td>
            <td style={cellStyle}>Maria Anders</td>
            <td style={cellStyle}>maria@example.com</td>
            <td style={dropdownCellStyle}>
              <select style={{ fontSize: '20px' }}>
              <option value="validated">Validated</option>
                <option value="rejected">Rejected</option>
                
              </select>
            </td>
          </tr>
          <tr style={evenRowStyle}>
            <td style={accountNoCellStyle}>1</td>
            <td style={cellStyle}>Maria Anders</td>
            <td style={cellStyle}>maria@example.com</td>
            <td style={dropdownCellStyle}>
              <select style={{ fontSize: '20px' }}>
              <option value="validated">Validated</option>
                <option value="rejected">Rejected</option>
                
              </select>
            </td>
          </tr>
          <tr >
            <td style={accountNoCellStyle}>1</td>
            <td style={cellStyle}>Maria Anders</td>
            <td style={cellStyle}>maria@example.com</td>
            <td style={dropdownCellStyle}>
              <select style={{ fontSize: '20px' }}>
                <option value="validated">Validated</option>
                <option value="rejected">Rejected</option>
              </select>
            </td>
          </tr>
         
        </table>
      </div>
    </div>
  );
};

export default ManageAcounts;
