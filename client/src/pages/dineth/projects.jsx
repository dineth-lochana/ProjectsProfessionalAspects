import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import "./projects.css";

const Projects = () => {
    const navigate = useNavigate();

    // Function to fetch user type and verified status from local storage
    async function fetchUserTypeAndVerifiedFromLocalStorage() {
        try {
            const userEmail = localStorage.getItem('useremail');
            if (!userEmail) {
                throw new Error('User email not found in localStorage');
            }
            const response = await axios.get(`http://localhost:8800/profile/${encodeURIComponent(userEmail)}`);
            console.log("User type is " + response.data.type);
            console.log("User verified status is " + response.data.verified);
            return {
                userType: response.data.type,
                verified: response.data.verified
            };
        } catch (error) {
            console.error('Error fetching user type and verified status:', error);
            throw error;
        }
    }

    const [userType, setUserType] = useState(null);
    const [verified, setVerified] = useState(null);
    const [projects, setProjects] = useState([]);
    const [opinions, setOpinions] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { userType, verified } = await fetchUserTypeAndVerifiedFromLocalStorage();
                setUserType(userType);
                setVerified(verified);

                const projectsResponse = await axios.get("http://localhost:8800/projects");
                setProjects(projectsResponse.data);

                const opinionsResponse = await axios.get("http://localhost:8800/opinions");
                setOpinions(opinionsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError("An error occurred while fetching data.");
            }
        };

        fetchData();
    }, []);

    const handlePrint = () => {
        const input = document.getElementById("printportfolio");
        html2canvas(input, { scale: 1, useCORS: true })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/jpeg', 1.0);
                const pdf = new jsPDF('p', 'px', [1098, 2570]);
                pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
                pdf.save("download.pdf");
            });
    };

    const handleDeleteProject = async (id) => {
        try {
            await axios.delete("http://localhost:8800/projects/" + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteOpinion = async (opinionid) => {
        try {
            await axios.delete("http://localhost:8800/opinions/" + opinionid);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateProject = async (id) => {
        navigate(`/updateprojects/${id}`);
    };

    const handleUpdateOpinion = async (opinionid) => {
        navigate(`/updateopinion/${opinionid}`);
    };

    const handleViewProject = async (id) => {
        navigate(`/projectdetails/${id}`);
    };

    return (
        <div id="printportfolio">
            <br />
            <br />
            <br />
            <h1 className="centered-heading">Projects Showcase</h1>
            <br />

            {(userType === 1 && verified === "True") && (
                <button className="add" onClick={handlePrint}>Print Portfolio</button>
            )}

            <div className="projects">
                {projects.map(project => (
                    <div className="project" key={project.id}>
                        {project.cover && <img src={`http://localhost:8800/${project.cover}`} alt="Cover" />}
                        <h2>{project.title}</h2>
                        <p>{project.client}</p>
                        <button className="view" onClick={() => handleViewProject(project.id)}>View</button>
                        {(userType === 1 && verified === "True") && (
                            <>
                                <button className="update" onClick={() => handleUpdateProject(project.id)}>Update</button>
                                <button className="delete" onClick={() => handleDeleteProject(project.id)}>Delete</button>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {(userType === 1 && verified === "True") && (
                <button className="add"><Link to="/addprojects">Add new Project</Link> </button>
            )}

            <br />
            <br />
            <br />
            <br />

            <div>
                <h1 className="centered-heading">Testimonial Showcase</h1>
                <div className="projects">
                    {opinions.map(opinion => (
                        <div className="project" key={opinion.opinionid}>
                            <h2>"{opinion.opiniontext}"</h2>
                            <p>-{opinion.customername}</p>
                            {(userType === 0 && verified === "True") && (
                                <>
                                    <button className="update" onClick={() => handleUpdateOpinion(opinion.opinionid)}>Update</button>
                                    <button className="delete" onClick={() => handleDeleteOpinion(opinion.opinionid)}>Delete</button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                {(userType === 0 && verified === "True") && (
                    <button className="add"><Link to="/addopinion">Add new Testimonial</Link> </button>
                )}
                <br />
                <br />
            </div>
        </div>
    );
}

export default Projects;
