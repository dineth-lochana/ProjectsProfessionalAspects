import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import "./dineth.css";

const UpdateProjects = () => {
    const [project, setProject] = useState({
        title: "",
        info: "",
        cover: null,
        images:"",
        client: "",
        img1: null,
        img2: null,
        img3: null,
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const projectIDupdate = location.pathname.split("/")[2];
    console.log(projectIDupdate)

    useEffect(() => {
        fetchProjectData();
    }, []); 

    const fetchProjectData = async () => {
        try {
            const response = await axios.get("http://localhost:8800/projects/" + projectIDupdate);
            const projectData = response.data;
    
            // Ensure projectData.images is properly handled as an array
            const images = Array.isArray(projectData.images) ? projectData.images : [];
    
            setProject({
                title: projectData.title,
                info: projectData.info,
                cover: projectData.cover,
                images: projectData.images,
                client: projectData.client,
                img1: images[0] || null,
                img2: images[1] || null,
                img3: images[2] || null,
            });
        } catch (err) {
            console.error("Error fetching project data:", err);
            setError("An error occurred while fetching project data.");
        }
    };


    const handleChange = (e) => {
        setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        setProject((prev) => ({ ...prev, [fieldName]: file }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        if (!project.title || !project.info || !project.client) {
            setError("Please fill out all required fields.");
            return;
        }

        try {
            const coverFormData = new FormData();
            coverFormData.append("cover", project.cover);
            const coverResponse = await axios.post("http://localhost:8800/uploadprojectcover", coverFormData);
            const coverUrl = coverResponse.data.url;

            const imagesFormData = new FormData();
            imagesFormData.append("img1", project.img1);
            imagesFormData.append("img2", project.img2);
            imagesFormData.append("img3", project.img3);
            const imagesResponse = await axios.post("http://localhost:8800/uploadprojectimages", imagesFormData);
            const imgUrls = imagesResponse.data.urls;

            await axios.put("http://localhost:8800/projects/" + projectIDupdate, {
                ...project,
                cover: coverUrl,
                img1: imgUrls.img1,
                img2: imgUrls.img2,
                img3: imgUrls.img3
            });

            navigate("/projects");
        } catch (err) {
            console.error("Error updating project:", err);
            setError("An error occurred while updating the project. Please try again later.");
        }
    };

    const handleCancel = () => {
        navigate("/projects");
    };

    return (
        <div className="form">
            <h1>Update Project in Showcase</h1>

            {error && <div className="error">{error}</div>}

            <input type="text" placeholder="Title" name="title" value={project.title} onChange={handleChange} />
            <input type="text" placeholder="Info" name="info" value={project.info} onChange={handleChange} />
            <input type="text" placeholder="Client" name="client" value={project.client} onChange={handleChange} />
            <p>Cover</p>
            <input type="file" name="cover" accept=".png, .jpg" onChange={(e) => handleFileChange(e, "cover")} />
            <p>Images</p>
            <input type="file" name="img1" accept=".png, .jpg" onChange={(e) => handleFileChange(e, "img1")} />
            <input type="file" name="img2" accept=".png, .jpg" onChange={(e) => handleFileChange(e, "img2")} />
            <input type="file" name="img3" accept=".png, .jpg" onChange={(e) => handleFileChange(e, "img3")} />

            <button onClick={handleClick}>Update Project</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default UpdateProjects;
