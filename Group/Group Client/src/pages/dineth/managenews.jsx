import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import "./dineth.css";

const ManageNews = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState("");
    const [newsContent, setNewsContent] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get("http://localhost:8800/news");
                setNews(response.data);
            } catch (error) {
                console.error('Error fetching news:', error);
                setError("An error occurred while fetching news.");
            }
        };

        fetchNews();
    }, []);

    const handleUpdate = (newsId) => {
        navigate(`/UpdateNews/${newsId}`);
    };

    const handleDelete = async (newsId) => {
        try {
            await axios.delete("http://localhost:8800/news/" + newsId);
            // Update state to remove the deleted news item
            setNews(news.filter(newsItem => newsItem.newsid !== newsId));
        } catch (error) {
            console.error('Error deleting news:', error);
            setError("An error occurred while deleting news.");
        }
    };



    const handleSendToAll = async () => {
      if (newsContent.trim() === "") {
        alert("Please enter the news content.");
        return;
      }

      try {
        await axios.post("http://localhost:8800/send-email-to-all-users", { emailText: newsContent });
        alert("News content sent to all users successfully!");
        setNewsContent(""); // Clear the news content input
      } catch (error) {
        console.error("Error sending news content:", error);
        alert("Error sending news content. Please try again.");
      }
    };

    const handleNewsContentChange = (e) => {
      setNewsContent(e.target.value);
    };


    return (
        <div>
            <br />
            <br />
            <br />
            <h1 className="centered-heading">Manage News</h1>
            <br />

            <div className="projects">
                {news.map(newsItem => (
                    <div className="project" key={newsItem.newsid}>
                        <h2>{newsItem.newstitle}</h2>
                        <p>{newsItem.newstext}</p>
                        <p>Published Date: {newsItem.newsdate}</p>
                        <div className="actions">
                            <button className="update" onClick={() => handleUpdate(newsItem.newsid)}>Update</button>
                            <button className="delete" onClick={() => handleDelete(newsItem.newsid)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            <br />

           <div className="add-news-button" align="center">
              <Link to="/AddNews">
                <button>Add New News</button>
              </Link>
              <div>
                <textarea
                  placeholder="Enter news content"
                  value={newsContent}
                  onChange={handleNewsContentChange}
                />
                <button onClick={handleSendToAll}>Send News to All</button>
              </div>
            </div>



            <br />
            {error && <p>{error}</p>}
        </div>
    );
}

export default ManageNews;
