import React from 'react'

import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "90px",
        backgroundColor: "#009639",
        padding: "5px",
        zIndex: "1",
      }}
    >
      <nav style={{ display: "flex" }}>
        <div className="navi"to="/" style={{ marginRight: "auto" }}>
          <img src="./images/logo 2024 .png" alt="Logo" height="90" style={{ paddingLeft: "20px" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
          <ul className="nav-links"
            style={{
              listStyle: "none",
              margin: 0,
              padding: "10px",
              display: "flex",
              gap: "30px",
              textDecoration: "none",
              fontFamily: "Arial",
              cursor: "pointer",
              fontSize: "18px",
              color: "#d5f796",
            }}
          >
            <li>
              <a to="/">Home</a>
            </li>

            <li className="dropdown">
              <div>
                Products
                <div className="dropdown-content">
                <Link to="/SolarProducts">solar</Link> 
                  <Link to="/FireProducts">Fire detection and protection</Link>
                  <Link to="/ControlsProducts">Controls</Link>
                </div>
              </div>
            </li>
            

            <li>
              <a to="/signup">Projects</a>
            </li>

            <li>
              <a to="/login">LogIn</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;