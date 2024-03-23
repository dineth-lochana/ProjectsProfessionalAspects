import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import "./projects.css"

const Projects = () => {
    

    //Login Test

         async function fetchUserTypeAndVerifiedFromLocalStorage() {
          try {
            // Retrieve the user email from localStorage
            const userEmail = localStorage.getItem('useremail');
            if (!userEmail) {
              throw new Error('User email not found in localStorage');
            }

            // Make a request to fetch the user type and verified status using the user email
            const response = await axios.get(`http://localhost:8800/profile/${encodeURIComponent(userEmail)}`);
            console.log("User type is " + response.data.type);
            console.log("User verified status is " + response.data.verified);

            return {
              userType: response.data.type,
              verified: response.data.verified
            };
          } catch (error) {
            console.error('Error fetching user type and verified status:', error);
            throw error; // Rethrow the error to be handled by the caller
          }
        }

        const [userType, setUserType] = useState(null);
        const [verified, setVerified] = useState(null);

        useEffect(() => {
          const getUserTypeAndVerified = async () => {
            try {
              const { userType, verified } = await fetchUserTypeAndVerifiedFromLocalStorage();
              setUserType(userType);
              setVerified(verified);
            } catch (error) {
              console.error('Error fetching user type and verified status:', error);
              // Handle error
            }
          };

          getUserTypeAndVerified();
        }, []);


    const [projects,setprojects] = useState([])


    useEffect(() => {
        const fetchallprojects = async()=>{
            try{
                const response = await axios.get("http://localhost:8800/projects")
            
            
                setprojects(response.data)


            }catch(err){
                console.log(err)
            }
        }
        fetchallprojects()
    },[])


    const handlePrint = () => {
        const input = document.getElementById("printportfolio");
    
        html2canvas(input, { scale: 1, useCORS: true }) // Adjust scale and useCORS option
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/jpeg', 1.0); 
          const pdf = new jsPDF('p', 'px', [1098, 2570 ]); 
          pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
          pdf.save("download.pdf");
        });
    };
    

    const handledelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/projects/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }




    //Code for handling testimionials
    const [opinions,setopinions] = useState([])

    useEffect(() => {
        const fetchallopinions = async()=>{
            try{
                const response = await axios.get("http://localhost:8800/opinions")
            
            
                setopinions(response.data)


            }catch(err){
                console.log(err)
            }
        }
        fetchallopinions()
    },[])


    const handledeleteopinion = async (opinionid)=>{
        try{
            await axios.delete("http://localhost:8800/opinions/"+opinionid)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }





    return(

    <div id="printportfolio">
    <br/>
    <br/>
    <br/>


    <h1 class="centered-heading">Projects Showcase</h1>
    <br/>


    {(userType === 1 && verified === "True") && (

    <button className="add" onClick={handlePrint}>Print Portfolio</button>

    )}

    <div className="projects">

        {projects.map(project=>(

   
            <div className="project" key={project.id}>

                {project.cover && <img src={`http://localhost:8800/${project.cover}`} alt="Cover" />}


                <h2>{project.title}</h2>
                <p>{project.client}</p>


                {/* <p>{project.info}</p> */}
                
                <button className="view"><Link to={`/projectdetails/${project.id}`}>View</Link></button>

                {/* Conditional rendering for Update button */}
                {(userType === 1 && verified === "True") && (
                  <button className="update"><Link to={`/updateprojects/${project.id}`}>Update</Link></button>
                )}

                {/* Conditional rendering for Delete button */}
                {(userType === 1 && verified === "True") && (
                  <button className="delete" onClick={() => handledelete(project.id)}>Delete</button>
                )}

            </div>

        ))}

    </div>

    {(userType === 1 && verified === "True") && (

     <button className="add"><Link to="/addprojects">Add new Project</Link> </button>

    )}


    <br/>
    <br/>
    <br/>
    <br/>






    <div>  
    {/* This is where the opinons section starts! */}
    <h1 class="centered-heading">Testimonial Showcase</h1>

        <div className="projects">

            {opinions.map(opinion=>(


            <div className="project" key={opinions.opinionid}>
                <h2>"{opinion.opiniontext}"</h2>
                <p>-{opinion.customername}</p>
                {/* A JSX comment */}
                {/* A JSX comment */}
                


                {(userType === 0 && verified === "True") && (

                 <button className="update"><Link to={`/updateopinion/${opinion.opinionid}`}>Update</Link></button>
                    
                )}    


                {(userType === 0 && verified === "True") && (

                <button className="delete" onClick={()=>handledeleteopinion(opinion.opinionid)}>Delete</button>

                )}    


        </div>

        ))}

        </div>

        {(userType === 0 && verified === "True") && (

        <button className="add"><Link to="/addopinion">Add new Testimionial</Link> </button>

        )}        

        <br/>
        <br/>

    </div>







    </div>

    )
 }

export default Projects
