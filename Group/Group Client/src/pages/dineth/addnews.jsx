import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./dineth.css";

const AddNews = () => {
  const [news, setNews] = useState({
    newstitle: "",
    newstext: "",
    newsdate: new Date().toISOString().split("T")[0], // Automatically set the date
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNews((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/news", news);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  console.log(news);

  return (
    <div>
      <br />
      <br />
      <div className="form">
        <h1>Add New News Item</h1>
        <input
          type="text"
          placeholder="News Title"
          name="newstitle"
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="News Text"
          name="newstext"
          onChange={handleChange}
        ></textarea>

        <button onClick={handleClick}>Add News</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default AddNews;
