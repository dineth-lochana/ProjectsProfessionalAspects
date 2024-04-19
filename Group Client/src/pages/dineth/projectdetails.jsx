import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './dineth.css'; // Importing CSS file

const Slideshow = ({ images }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="slideshow-container"> 
            <img className="slideshow-img" src={`http://localhost:8800/${images[index]}`} alt="Slideshow" /> 
        </div>
    );
};

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/projects/${id}`);
                setProject(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProjectDetails();
    }, [id]);

    const handleProjectDetailReturn = () => {
        navigate("/projects");
    };

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="project-detail-container"> {/* Current container for project details */}
                <div className="project-detail-header">
                    {project.cover && <img className="project-detail-cover" src={`http://localhost:8800/${project.cover}`} alt="Cover" />}
                </div>
    
                <div className="project-detail-info">
                    <div className="project-detail-header-info">
                        <h2 className="project-detail-title">{project.title}</h2>
                        <p className="project-detail-client">Client: {project.client}</p>
                    </div>
                    <div className="project-detail-description">
                        <p>{project.info}</p>
                    </div>

                </div>
    
         
            </div>

            <div className="project-detail-button">
                    <button onClick={handleProjectDetailReturn}>Return to Projects</button>
                    <br/>
                    <br/>
                    <br/>

            </div>

            <div>
            <div className="centered-heading">Images</div>
            <div className="slideshow-container"> 
                <Slideshow images={[project.img1, project.img2, project.img3]} /> 

            </div>
            </div>
            
            <br/>
            <br/>
            <br/>
        </div>
    );
    
};

export default ProjectDetail;
