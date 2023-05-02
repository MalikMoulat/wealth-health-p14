import React from "react";
import logo from "../../assets/img/logo.png"
import { Link } from 'react-router-dom';
import "./header.css"


function Header() {

    return(
        <nav className="header">
            <Link to="/">
                <img className="logo" src={logo}></img>
            </Link>
            <Link to="/create-employee">Create employee</Link>
            <Link to="/employee-list">View current employees</Link>
        </nav>
    )
}

export default Header