import React from "react"
import "./home.css"

import { useNavigate } from "react-router-dom"

import logo from "../../assets/img/logo.png"
import bannerImg from "../../assets/img/banner-home-page.jpg"


function HomePage() {

    const navigate = useNavigate()

    function navigateToCreateEmployee(){
        navigate("/create-employee")
    }

    function viewEmployeeList(){
        navigate("/employee-list")
    }


    return(
        <React.Fragment>
            <div className="banner page-wrapper">
                <div className="banner-wrap-infos">
                    <img className="logo-banner" src={logo} alt="logo"></img>
                    <h2 className="green-dark">Menage your employees</h2>
                    <div className="banner-home-buttons">
                        <button onClick={navigateToCreateEmployee} className="create-button">+ Create</button>
                        <button onClick={viewEmployeeList} className="view-button">View</button>
                    </div>
                </div>
                <div className="banner-wrap-img">
                    <img className="banner-img" src={bannerImg} alt="image banner"></img>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage