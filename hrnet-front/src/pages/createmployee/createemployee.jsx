import React from "react"
import CreateEmployeeForm from "../../components/createemployeeform/createemployeeform"
import "./createemployee.css"

function CreateEmployee(){
    return(
        <React.Fragment>
            <div className="page-wrapper">
            <CreateEmployeeForm />
            </div>
        </React.Fragment>
    )
}

export default CreateEmployee