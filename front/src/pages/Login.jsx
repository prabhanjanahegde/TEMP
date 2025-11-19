import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Login = () => {
  const [name, setName]= useState("");
  const [password, setPassword]= useState("");
  const navigate= useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/login",{name,password})
      navigate("/");
    } catch(err){
      console.log("post log user error", err)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="formElement">
          <label>Enter Name</label>
          <br />
          <input type="text" name="name" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div className="formElement">
          <label>Enter Password</label>
          <br />
          <input type="text" name="password" placeholder='***' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login