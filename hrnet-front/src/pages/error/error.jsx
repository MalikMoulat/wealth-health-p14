import React from "react"
import { Link } from "react-router-dom"

import "./error.css"

function ErrorPage(){
    return(
        <React.Fragment>
            <div className="error_container">
                <h1>404</h1>
                <Link to="/">Back to main page</Link>
            </div>
        </React.Fragment>
    )
}

export default ErrorPage