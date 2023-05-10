import React, { useState } from "react"
import { TableWithBrowserPagination, Column, Application, Input } from "react-rainbow-components"
import { useSelector } from "react-redux"
import { toLowerCaseIfString } from "../../utils/utils"

import "./tablewithpagination.css"


/**
 * 
 * @returns {JSX.Element} Retourne un tableau avec les donnée des employés
 */
function TableWithPagination(){

    const store = useSelector(state => state.addEmployee)

    const employeesDataStore = store.employeeData

    const containerStyles = { height: 312 }

    const themeTablePagination = {
        rainbow: {
            palette: {
                brand: "#93AD18",
            },
        },
    }

    const inputStyles = {
        width: 150,
    }


    const [searchInput, setSearchInput] = useState()


    /**
     * Fonction qui retourne le tableau contenant les data des employés et filtre ce tableau si une
     * recherche et effectuer
     * @returns {Array} Retourne un tableau d'object
     */
    function searchEmployeeTable(){

        const filteredData = employeesDataStore.filter(item => {
            const fullName = item.firstName?.toLowerCase() + " " + item.lastName?.toLowerCase()
            + " " + item.dateOfBirth?.toLowerCase() + " " + item.dateStart?.toLowerCase()
            + " " + item.departement?.toLowerCase() + " " + item.street?.toLowerCase()
            + " " + item.city?.toLowerCase() + " " + item.state?.toLowerCase()
            + " " + item.zipCode?.toLowerCase()

            return fullName.includes(toLowerCaseIfString(searchInput))
        })
            // Si le champ de recherche est vide retourne les données du store
            if(typeof searchInput === "undefined"){
                return employeesDataStore
            }else{
            // Sinon retourne le tableau filtrer
                return filteredData
            }
    }


    return(
        <React.Fragment>
            <div>

                <div className="rainbow-p-bottom_xx-large">
                    <h1 className='title-view-employees green-light'>Curent employees</h1>
                    <div style={containerStyles}>
                        <Application theme={themeTablePagination}>
                            <Input
                                id="search-input"
                                name="search-input"
                                placeholder="Search"
                                type="text"
                                style={inputStyles}
                                required
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <TableWithBrowserPagination
                                pageSize={10}
                                data={searchEmployeeTable()}
                                keyField="id"
                            >
                                <Column header="ID" field="id" />
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