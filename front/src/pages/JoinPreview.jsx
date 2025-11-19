import React from 'react'
import { useState , useEffect } from 'react'
import axios from "axios"

const JoinPreview = () => {
  const [teams, setTeams]= useState([]);
  useEffect(()=>{
    const fetchTeams= async ()=>{
      try{
        const res= await axios.get("http://localhost:5000/join");
        console.log(res.data);
        setTeams(res.data)
      } catch(err){
        console.log("fetch Teams error",err);
      }
    };
    fetchTeams();
  },[])

  return (
    <div>
      <h2>Teams</h2>
      <div id="teamContainer">
        {teams.map(team=>(
          <a href={`http://localhost:5173/join/${team.teamName}`}>{team.teamName}</a>
        ))}
      </div>
    </div>
  )
}

export default JoinPreview