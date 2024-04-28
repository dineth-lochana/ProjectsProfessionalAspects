import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./dineth.css";

const UpdateNews = () => {
  const [news, setNews] = useState({
    newstitle: "",
    newstext: "",
    newsdate: new Date().toISOString().split("T")[0], // Automatically set the date
  });

  const { newsid } = useParams(); // Get the news ID from the URL params
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/news/${newsid}`);
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [newsid]);

  const handleChange = (e) => {
    setNews((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      console.log("Putting new with "+newsid);
      await axios.put(`http://localhost:8800/news/${newsid}`, news);
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
        <h1>Update News</h1>
        <input
          type="text"
          placeholder="News Title"
          name="newstitle"
          value={news.newstitle}
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="News Text"
          name="newstext"
          value={news.newstext}
          onChange={handleChange}
        ></textarea>

        <button onClick={handleClick}>Update News</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default UpdateNews;
