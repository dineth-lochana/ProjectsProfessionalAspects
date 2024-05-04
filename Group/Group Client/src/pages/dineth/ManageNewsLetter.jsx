import React, { useEffect, useState } from "react";
import axios from 'axios';
import jsPDF from 'jspdf';
import swal from 'sweetalert';

import "./dineth.css";

const ManageNewsLetter = () => {
    const [emails, setEmails] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const emailResponse = await axios.get("http://localhost:8800/newsletter-emails");
                setEmails(emailResponse.data);
            } catch (error) {
                console.error('Error fetching emails:', error);
                setError("An error occurred while fetching emails.");
            }
        };

        fetchEmails();
    }, []);

    const handleDeleteEmail = async (emailId) => {
        try {
            await axios.delete(`http://localhost:8800/newsletter-emails/${emailId}`);
            // Update state to remove the deleted email
            setEmails(emails.filter(email => email.id !== emailId));
        } catch (error) {
            console.error('Error deleting email:', error);
            setError("An error occurred while deleting email.");
        }
    };

    const handleGenerateReport = () => {
        const pdf = new jsPDF();
        const pageWidth = pdf.internal.pageSize.getWidth();

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(18);
        pdf.setTextColor(64, 64, 64);
        pdf.text("Newsletter Emails Report", 20, 20);

        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);

        let y = 40; 
        emails.forEach((email, index) => {
            pdf.setTextColor(33, 33, 33);

            pdf.setFillColor(240, 240, 240);
            pdf.rect(10, y - 6, pageWidth - 15, 20, 'F');

            pdf.text(`${index + 1}. ${email.email}`, 20, y);

            y += 20;
        });

        pdf.save('newsletter_emails_report.pdf');
    };

    return (
        <div>
            <br />
            <br />
            <br />
            <h1 className="centered-heading">Manage Newsletter Emails</h1>
            <br />

            <div className="emails">
                <h2>Emails</h2>
                <button onClick={handleGenerateReport}>Download Report</button>
                <table className="email-table">
                    <tbody>
                        {emails.map(email => (
                            <tr key={email.id}>
                                <td>{email.email}</td>
                                <td>
                                    <button onClick={() => handleDeleteEmail(email.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <br />
            {error && <p>{error}</p>}
        </div>
    );
}

export default ManageNewsLetter;