import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';

const Join = () => {
  const { teamIn } = useParams();
  const navigate = useNavigate();

  const [teamMembers, setTeamMembers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/join/${teamIn}`);
        setTeamMembers(res.data.teamMembers || []);
      } catch (err) {
        console.error("Error fetching members:", err);
      }
    };

    fetchTeamMembers();
  }, [teamIn]);

  const handleJoin = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/join/${teamIn}`);
      setMessage(res.data.message);
      navigate("/");

    } catch (err) {
      console.log("join error",err);
    }
  };

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
    <div style={container}>
      <h2 style={{fontSize:"180%", paddingLeft:"1vh", paddingBottom: "2vh"}}>Team: {teamIn}</h2>

      <h3 style={{fontSize:"125%",width: "24vw",marginLeft:"1vh",  marginBottom:"1vh" ,padding: "2px"}}>Members :</h3>

      {teamMembers.length > 0 ? (
        <div>
          {teamMembers.map((m) => (
            <div style={teamElement}>{m}</div>
          ))}
        </div>
      ) : (
        <p>No members</p>
      )}

      <button style={teamElement} onClick={handleJoin} >Join Team</button>
      <p>{message}</p>
    </div>
  );
};

export default Join;
