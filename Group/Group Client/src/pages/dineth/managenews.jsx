import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import jsPDF from 'jspdf';
import swal from 'sweetalert';

import "./dineth.css";

const ManageNews = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState("");
    const [newsContent, setNewsContent] = useState("");
    const [emails, setEmails] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get("http://localhost:8800/news");
                setNews(response.data);

                const emailResponse = await axios.get("http://localhost:8800/all-emails");
                setEmails(emailResponse.data);

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



    const handleGenerateReport = () => {
        const pdf = new jsPDF();
        const pageWidth = pdf.internal.pageSize.getWidth();

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(18);
        pdf.setTextColor(64, 64, 64);
        pdf.text("Latest News and User Emails Report", 20, 20);

        pdf.setFontSize(14);
        pdf.setTextColor(0, 0, 0);
        pdf.text("News", 20, 40);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(12);
        pdf.setTextColor(33, 33, 33);

        let y = 50; 
        news.forEach((item, index) => {
            pdf.setTextColor(33, 33, 33);

            pdf.setFillColor(240, 240, 240);
            pdf.rect(10, y - 6, pageWidth - 15, 20, 'F');

            const textLines = pdf.splitTextToSize(`${index + 1}. ${item.newstitle} (Published on: ${item.newsdate})`, pageWidth - 40);
            pdf.text(textLines, 20, y);

            pdf.setTextColor(33, 33, 33);
            pdf.setFontSize(10);
            pdf.text(`Text: ${item.newstext}`, 20, y + 10);

            y += (textLines.length * 5) + 20; 
        });

        y += 10; 
        pdf.setTextColor(0, 0, 0);
        pdf.text("Emails", 20, y);

        pdf.setFontSize(10);
        pdf.setTextColor(33, 33, 33);
;

        y += 10; 
        emails.forEach((email, index) => {
            pdf.text(`${index + 1}. ${email}`, 20, y);
            y += 10;
            if (y > 280) {
                pdf.addPage();
                y = 20;
            }
        });

        pdf.save('news_and_emails_report.pdf');
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
              <br/>
              <br/>
              <div className="form">
                <br/>
                <textarea
                  placeholder="Enter news content"
                  value={newsContent}
                  onChange={handleNewsContentChange}
                />
                <br/>
                <button onClick={handleSendToAll}>Send News to All</button>
              </div>

              <br/>
              <button onClick={handleGenerateReport}>Download Report</button>
              <br/>
            </div>



            <br />
            {error && <p>{error}</p>}
        </div>
    );
}

export default ManageNews;
