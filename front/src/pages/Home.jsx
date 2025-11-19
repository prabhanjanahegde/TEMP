import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="actionCard">
          <Link to={"/create"}>
              <span>Create</span>
          </Link>
      </div>
      <div className="actionCard">
          <Link to={"/joinPreview"}>
              <span>Join</span>
          </Link>
      </div>
    </div>
  )
}

export default Home