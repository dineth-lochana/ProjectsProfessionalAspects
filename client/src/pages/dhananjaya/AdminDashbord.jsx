import React from 'react';


import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  
  return (
    <div >
<p style={{ textAlign: 'center', paddingTop: '100px', fontSize: '50px' }}>Admin Dashboard</p>

    <div className='menu' style={{ paddingTop: '00px' ,paddingBottom:'100px'}}>
    

    <div className="products">
    <Link to="/AddProduct">    <div className="mproduct">
      
      <div className="image">
      
        <img src="./images/add.png" alt="T-SHIRTS" />
      </div>
      <div className="name">
        <h3>Add Product</h3>
      </div>
    </div></Link> 
  
    <Link to="/Product">    
      <div className="mproduct">
        <div className="image">
          <img src="./images/view.png" alt="MUGS" style={{ width: '350px', paddingTop: '10px' }} />
        </div>
        <div className="name">
          <h3>View Products</h3>
        </div>
      </div>
      </Link>
      <Link to="/manageAcounts">
      <div className="mproduct">
        <div className="image">
          <img
            src="./images/acounts.png"
            alt="PHONE CASES"
            style={{ width: '320px', paddingTop: '10px', paddingLeft: '10px' }}
          />
        </div>
        <div className="name">
          <br></br>
          <h3>Manage Acounts</h3>
        </div>
      </div>
      </Link>
    </div>
    
    </div>
    </div>
    
  );
};

export default AdminDashboard;
