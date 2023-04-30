import React from "react"

import "./employeelist.css"

import TableWithPagination from "../../components/tablewithpagination/tablewithpagination"

function EmployeeList(){
    return(
        <React.Fragment>
            <div className="table-wrap-div">
                <TableWithPagination />
            </div>
        </React.Fragment>
    )
}

export default EmployeeList