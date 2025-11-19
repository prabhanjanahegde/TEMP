import React from 'react'
import {Link} from 'react-router'

const Home = () => {
  const actionCard={
    padding: "5vh" , 
    margin: "1vh" , 
    height: "20vh",
    width: "49vw",
    borderStyle: "solid",
    borderWidth: "2px",
    backgroundColor:"grey"
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

  const txt={
    fontSize:"200%",
    textAlign:"center",
    marginTop:"3vh",
    color:"white"
  }

  return (
    <div>
        <div style={{display: "flex", margin: "1vw", height: "10vh"}}>
          <h1 style={{marginRight: "60vw", fontSize:"300%", paddingTop: "1vh"}}>TEAM BUILDER</h1>
          <div style={{display: "flex", paddingTop: "3vh"}}>
              <div style={iconCard}>
                  <Link style={linker} to={"/register"}>
                  <p>Register</p>
                  </Link>
              </div>
              <div style={iconCard}>
                  <Link style={linker} to={"/login"}>
                  <p>Login</p>
                  </Link>
              </div>
              <div style={iconCard}>
                  <Link style={linker} to={"/logout"}>
                  <p>Logout</p>
                  </Link>
              </div>
          </div>
        </div>
      <div style={{display:"flex", flexDirection: "row"}}>
        <div style={actionCard}>
          <Link style={linker} to={"/create"}>
              <p style={txt}>Create</p>
          </Link>
        </div>
        <div style={actionCard}>
            <Link style={linker} to={"/joinPreview"}>
                <p style={txt}>Join</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Home