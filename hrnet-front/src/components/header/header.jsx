import React from "react"
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom"
import "./header.css"

const linkStyle = {
    outline: "none",
    textDecoration: "none"
  }

  const linkStyle1 = {
    outline: "none",
    textDecoration: "none"
  }

function Header() {

    return(
        <nav className="header">
            <Link to="/" id="logo-wrap">
                <img className="logo" alt="logo Hrnet" src={logo}></img>
            </Link>
            <Link style={linkStyle1} to="/create-employee">Create employee</Link>
            <Link style={linkStyle} to="/employee-list">View current employees</Link>
            
        </nav>
    )
}

export default Header