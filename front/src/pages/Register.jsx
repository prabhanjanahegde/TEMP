import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'


const Register = () => {
  const [name, setName]= useState("");
  const [password, setPassword]= useState("");
  const navigate= useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/register",{name,password})
      navigate("/");
    } catch(err){
      console.log("post reg user error", err)
    }
  }

  const container={
    padding: "2vw" , 
    marginTop: "20vh" , 
    marginBottom: "40vh" , 
    marginRight: "35vw" , 
    marginLeft: "35vw" ,
    height: "45vh",
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
    marginBottom:"1vh" 
  }

  return (
    <div style={container} >
      <h2 style={{fontSize:"180%", paddingLeft:"1vh", paddingBottom: "2vh"}}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={formElement}>
          <label style={formSubElement}>Enter Name :</label>
          <br />
          <br />
          <input style={formSubElement} type="text" name="name" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div style={formElement}>
          <label style={formSubElement}>Enter Password :</label>
          <br />
          <br />
          <input style={formSubElement} type="text" name="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <button style={formSubElement} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register