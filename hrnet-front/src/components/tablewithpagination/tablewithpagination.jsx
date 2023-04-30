import React from 'react';
import { TableWithBrowserPagination, Column, Application } from 'react-rainbow-components';
import styled from 'styled-components';

import "./tablewithpagination.css"

import { useSelector } from 'react-redux';

function TableWithPagination(){

    const employeesDataStore = useSelector(state => state.addEmployee)

    var employeeDataLocaleStorage = localStorage.getItem('dataEmployee');

    console.log(JSON.parse(employeeDataLocaleStorage))

    const containerStyles = { height: 312 };

    const Users = JSON.parse(employeeDataLocaleStorage);


    const themeTablePagination = {
        rainbow: {
            palette: {
                brand: '#93AD18',
            },
        },
    }

    return(
        <React.Fragment>
            <div>
                <div className="rainbow-p-bottom_xx-large">
                    <div style={containerStyles}>
                        <Application theme={themeTablePagination}>
                            <TableWithBrowserPagination
                                pageSize={10}
                                data={Users}
                                keyField="id"
                            >
                                <Column header="First Name" field="firstName" />
                                <Column header="Last Name" field="lastName" />
                                <Column header="Date of Birth" field="dateOfBirth" />
                                <Column header="Start Date" field="dateStart" />
                                <Column header="Department" field="departement" />
                                <Column header="Street" field="street" />
                                <Column header="City" field="city" />
                                <Column header="State" field="state" />
                                <Column header="Zip Code" field="zipCode" />


                            </TableWithBrowserPagination>
                        </Application>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TableWithPagination