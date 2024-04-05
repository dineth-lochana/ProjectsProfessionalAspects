import React, { useState, useEffect } from "react";
import axios from "axios";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await axios.get("http://localhost:8800/news");
        const sortedNews = response.data.sort((a, b) => new Date(b.newsdate) - new Date(a.newsdate));
        const latestFiveNews = sortedNews.slice(0, 5);
        setLatestNews(latestFiveNews);
      } catch (error) {
        console.error("Error fetching latest news:", error);
      }
    };

    fetchLatestNews();
  }, []);

  // Function to format date in "day, month, year" format
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "100px", fontSize: "50px" }}>
        Latest News
      </h1>
      <div>
        {latestNews.map((newsItem) => (
          <div key={newsItem.newsid}>
            <h2>{newsItem.newstitle}</h2>
            <p>{newsItem.newstext}</p>
            <p>Published Date: {formatDate(newsItem.newsdate)}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
