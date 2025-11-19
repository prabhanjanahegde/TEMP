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

  const container={
    padding: "2vw" , 
    marginTop: "20vh" , 
    marginBottom: "40vh" , 
    marginRight: "35vw" , 
    marginLeft: "35vw" ,
    height: "auto",
    width: "30vw",
    borderStyle: "solid",
    borderWidth: "2px"
  }

  const anc={
    textDecoration: "none",
    color: "black"
  }


  const teamElement={
    fontSize:"125%",
    width: "24vw",
    marginLeft:"1vh",  
    marginBottom:"1vh" ,
    borderStyle: "solid",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: "2px"
  }

  return (
    <div  style={container}>
      <h2 style={{fontSize:"180%", paddingLeft:"1vh", paddingBottom: "2vh"}}>Teams :</h2>
      <div>
        {teams.map(team=>(
          <div style={teamElement}>
            <a style={anc} href={`http://localhost:5173/join/${team.teamName}`}>{team.teamName}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JoinPreview