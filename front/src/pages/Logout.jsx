import React from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';

const Logout = () => {
    const navigate= useNavigate();
    async function handleSubmit(){
        try{
        await axios.post("http://localhost:5000/logout")
        navigate("/");
        } catch(err){
        console.log("post reg user error", err)
        }
    }

  const formSubElement={
    fontSize:"150%",
    width: "24vw",
    marginLeft:"1vh"   
  }

  return (
    handleSubmit()
  )
}

export default Logout