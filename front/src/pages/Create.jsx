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

  return (
    <div>
      <h2>Create Team</h2>
      <form onSubmit={handleSubmit}>
        <div className="formElement">
          <label>Team Name</label>
          <br />
          <input type="text" name="teamName" placeholder='team1' value={teamName} onChange={(e)=>setTeamName(e.target.value)} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Create