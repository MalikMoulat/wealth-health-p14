import React from "react";
import logo from "../../assets/img/logo.png"
import "./header.css"


function Header() {

    return(
        <nav className="header">
            <a href="/">
                <img className="logo" src={logo}></img>
            </a>
            <a href="/create-employee" className="green-light" >Create employee</a>
            <a href="/employee-list" className="green-light" >View current employees</a>
        </nav>
    )
}

export default Header