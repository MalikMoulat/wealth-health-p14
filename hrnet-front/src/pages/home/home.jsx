import React from "react";
import './home.css'

import logo from "../../assets/img/logo.png"
import bannerImg from "../../assets/img/banner-home-page.jpg"


function HomePage() {
    return(
        <React.Fragment>
            <div className="banner page-wrapper">
                <div className="banner-wrap-infos">
                    <img className="logo-banner" src={logo}></img>
                    <h2 className="green-dark">Menage your employees</h2>
                    <div className="banner-home-buttons">
                        <button className="create-button">+ Create</button>
                        <button className="view-button">View</button>
                    </div>
                </div>
                <div className="banner-wrap-img">
                    <img className="banner-img" src={bannerImg}></img>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage