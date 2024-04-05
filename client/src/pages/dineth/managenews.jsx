import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import "./dineth.css";

const ManageNews = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState("");
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
            </div>

            <br />
            {error && <p>{error}</p>}
        </div>
    );
}

export default ManageNews;
