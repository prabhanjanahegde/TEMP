import React, { useEffect, useState } from "react";
import axios from "axios";

function TeamMembers({ teamIn }) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/join/${teamIn}`);
        setMembers(res.data.TeamMembers || []);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, [teamIn]);

  console.log(members);

  if (loading) return <p>Loading team members...</p>;
  return (
    <div style={{ padding: "20px" }}>
      <h2>Team: {teamIn}</h2>
      <h3>Members:</h3>

      {members.length === 0 ? (
        <p>No members found.</p>
      ) : (
        <ul>
          {members.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TeamMembers;
