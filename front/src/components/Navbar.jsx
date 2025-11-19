import React from 'react'
import {Link} from 'react-router'

const Navbar = () => {
  return (
    <header>
        <div>
            <h1>Logo</h1>
            <div className="subNavbar">
                <div className="navbarItem">
                <Link to={"/register"}>
                    <span>Register</span>
                </Link>
            </div>
            <div className="navbarItem">
                <Link to={"/login"}>
                    <span>Login</span>
                </Link>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar