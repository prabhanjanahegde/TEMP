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

  return (
    <div>
      <h2>Team: {teamIn}</h2>

      <h3>Members</h3>

      {teamMembers.length > 0 ? (
        <div>
          {teamMembers.map((m, index) => (
            <div key={index}>{m}</div>
          ))}
        </div>
      ) : (
        <p>No members</p>
      )}

      <button onClick={handleJoin} >Join Team</button>
      <p>{message}</p>
    </div>
  );
};

export default Join;
