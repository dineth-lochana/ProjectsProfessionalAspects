import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "./dineth.css"

const Updateopinions = () => {

    const [opinion,setopinions] = useState({

        opiniontext:"",
        customername:"",

    });

    const navigate = useNavigate()

    const location = useLocation()

    const opinonIDupdate = location.pathname.split("/")[2]


    const handlechange = (e) => {

        setopinions(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleclick = async e => {

        e.preventDefault()
        
        try{

            await axios.put("http://localhost:8800/opinions/"+opinonIDupdate,opinion)
            navigate("/projects")

        } catch(err){

            console.log(err)
        }
       
    }

    console.log(opinion)


    const handleCancel = () => {
        navigate("/projects");
    };

    return(
        <div className="form"> 
        <h1>Update Opinion from showcase</h1>

        <input type="text" placeholder="opiniontext" name="opiniontext" onChange={handlechange}></input>
        <input type="text" placeholder="customername" name="customername" onChange={handlechange}></input>


        <button onClick={handleclick}>
            Update Opinion
        </button>

        <button onClick={handleCancel}>Cancel</button>


        </div>
    )
 }

export default Updateopinions
