import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Create = () => {
  const [teamName, setTeamName]= useState("");
  const navigate= useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/create",{teamName})
      navigate("/");
    } catch(err){
      console.log("post Team error", err)
    }
  }

  const container={
    padding: "2vw" , 
    marginTop: "20vh" , 
    marginBottom: "40vh" , 
    marginRight: "35vw" , 
    marginLeft: "35vw" ,
    height: "35vh",
    width: "30vw",
    borderStyle: "solid",
    borderWidth: "2px"
  }

  const formElement={
    paddingBottom: "2vh"
  }


  const formSubElement={
    fontSize:"150%",
    width: "24vw",
    marginLeft:"1vh",
    marginBottom:"3vh"   
  }

  return (
    <div style={container}>
      <h2  style={{fontSize:"180%", paddingLeft:"1vh", paddingBottom: "2vh"}}>Create Team</h2>
      <form onSubmit={handleSubmit}>
        <div style={formElement}>
          <label style={formSubElement}>Team Name :</label>
          <br />
          <br />
          <input style={formSubElement} type="text" name="teamName" placeholder='team1' value={teamName} onChange={(e)=>setTeamName(e.target.value)} required/>
        </div>
        <button style={formSubElement} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Create