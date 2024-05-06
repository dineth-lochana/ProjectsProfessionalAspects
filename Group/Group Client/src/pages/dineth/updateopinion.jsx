import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "./dineth.css";

const Updateopinions = () => {
  const [opinion, setopinions] = useState({
    opiniontext: "",
    customername: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const opinionIDupdate = location.pathname.split("/")[2];

  const handlechange = (e) => {
    setopinions((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleclick = async (e) => {
    e.preventDefault();

    if (!opinion.opiniontext || !opinion.customername) {
      alert("Both fields are required.");
      return;
    }

    try {
      await axios.put(`http://localhost:8800/opinions/${opinionIDupdate}`, opinion);
      navigate("/projects");
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    navigate("/projects");
  };

  return (
    <div>
      <br />
      <br />
      <div className="form">
        <h1>Update Opinion from showcase</h1>

        <input
          type="text"
          placeholder="opiniontext"
          name="opiniontext"
          onChange={handlechange}
          value={opinion.opiniontext}
          required
        ></input>
        <input
          type="text"
          placeholder="customername"
          name="customername"
          onChange={handlechange}
          value={opinion.customername}
          required
        ></input>

        <button onClick={handleclick}>Update Opinion</button>

        <button onClick={handleCancel}>Cancel</button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Updateopinions;
