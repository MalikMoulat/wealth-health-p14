import React from "react";
import logo from "../../assets/img/logo.png"
import "./header.css"

function Header() {

    console.log(logo)

    return(
        <nav className="header">
            <img className="logo" src={logo}></img>
            <a className="green-light" >Create employee</a>
            <a className="green-light" >View current employees</a>
        </nav>
    )
}

export default Header