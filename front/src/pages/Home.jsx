import React from 'react'
import {Link} from 'react-router'

const Home = () => {
  const actionCard={
    padding: "5vh" , 
    marginTop: "5vh" , 
    marginBottom: "5vh" , 
    marginRight: "1vw" , 
    marginLeft: "1vw" ,
    height: "30vh",
    width: "97vw",
    borderStyle: "solid",
    borderWidth: "2px"
  }

  const iconCard={
    fontSize: "120%",
    paddingLeft: "2vh",
    paddingRight: "2vh",
  }

  const linker={
    color: "black",
    textDecoration: "none"
  }

  return (
    <div>
        <div style={{display: "flex", margin: "1vw", height: "10vh"}}>
          <h1 style={{marginRight: "60vw", fontSize:"300%", paddingTop: "1vh"}}>TEAM BUILDER</h1>
          <div style={{display: "flex", paddingTop: "3vh"}}>
              <div style={iconCard}>
                  <Link style={linker} to={"/register"}>
                  <span>Register</span>
                  </Link>
              </div>
              <div style={iconCard}>
                  <Link style={linker} to={"/login"}>
                  <span>Login</span>
                  </Link>
              </div>
              <div style={iconCard}>
                  <Link style={linker} to={"/logout"}>
                  <span>Logout</span>
                  </Link>
              </div>
          </div>
        </div>
      <div style={actionCard}>
          <Link to={"/create"}>
              <span>Create</span>
          </Link>
      </div>
      <div style={actionCard}>
          <Link to={"/joinPreview"}>
              <span>Join</span>
          </Link>
      </div>
    </div>
  )
}

export default Home