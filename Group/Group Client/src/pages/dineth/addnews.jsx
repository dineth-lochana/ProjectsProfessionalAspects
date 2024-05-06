import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import "./dineth.css";

const AddNews = () => {
  const [news, setNews] = useState({
    newstitle: "",
    newstext: "",
    newsdate: new Date().toISOString().split("T")[0],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNews((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!news.newstitle || !news.newstext) {
      swal("UH OH...", "Both News Title and News Text are required!", "error");
      return;
    }

    try {
      await axios.post("http://localhost:8800/news", news);

      const emailText = `New News: ${news.newstitle}\n\n${news.newstext}`;
      await axios.post("http://localhost:8800/send-email-to-all-users", { emailText });

      swal("Success", "News added successfully!", "success").then(() => {
        navigate("/ManageNews");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    navigate("/ManageNews");
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
        />
        <textarea
          placeholder="News Text"
          name="newstext"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add News</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default AddNews;
