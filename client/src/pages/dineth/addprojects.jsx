import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./projects.css";

const AddProjects = () => {
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

    const handleChange = (e) => {
        setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    
    const handleFileChange = (e,fieldName) => {
        console.log("Selected file:", e.target.files[0]);
        console.log("Field name:", e.target.name);
        
        const file = e.target.files[0];
        setProject((prev) => ({ ...prev, [fieldName]: file }));
    };


   const handleClick = async (e) => {
    e.preventDefault();

    if (!project.title || !project.info || !project.client || !project.cover || !project.img1 || !project.img2 || !project.img3) {
        setError("Please fill out all required fields.");
        return;
    }

    try {
        // Upload cover image
        const coverFormData = new FormData();
        coverFormData.append("cover", project.cover);
        const coverResponse = await axios.post("http://localhost:8800/uploadprojectcover", coverFormData);
        const coverUrl = coverResponse.data.url;

        // Upload additional images
        const imagesFormData = new FormData();
        imagesFormData.append("img1", project.img1);
        imagesFormData.append("img2", project.img2);
        imagesFormData.append("img3", project.img3);
        const imagesResponse = await axios.post("http://localhost:8800/uploadprojectimages", imagesFormData);

        const imgUrls = imagesResponse.data.urls;

       
        const updatedProject = {
            ...project,
            cover: coverUrl,
            img1: imgUrls.img1,
            img2: imgUrls.img2,
            img3: imgUrls.img3
        };

        await axios.post("http://localhost:8800/projects", updatedProject);
        navigate("/projects");
    } catch (err) {
        console.error("Error adding project:", err);
        setError("An error occurred while adding the project. Please try again later.");
    }
};

    const handleCancel = () => {
        navigate("/projects");
    };

    return (
        <div className="form">
            <h1>Add New Project to Showcase</h1>

            {error && <div className="error">{error}</div>}

            <p>Details</p>
            <input type="text" placeholder="Title" name="title" onChange={handleChange} />
            <input type="text" placeholder="Info" name="info" onChange={handleChange} />
            <input type="text" placeholder="Client" name="client" onChange={handleChange} />
            <p>Cover</p>
            <input type="file" name="cover" accept=".png, .jpg" onChange={(e) => handleFileChange(e, "cover")} />
            <p>Images</p>
            <input type="file" name="img1" accept=".png, .jpg" onChange={(e) => handleFileChange(e, "img1")} />
            <input type="file" name="img2" accept=".png, .jpg" onChange={(e) => handleFileChange(e, "img2")} />
            <input type="file" name="img3" accept=".png, .jpg" onChange={(e) => handleFileChange(e, "img3")} />

            <button onClick={handleClick}>Add Project</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default AddProjects;
