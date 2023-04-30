import React, { useState } from "react"
import DatePicker from 'react-date-picker'
import Select from 'react-select'

import { states, department } from "../../data/data";

import "./createemployeeform.css"
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';


function CreateEmployeeForm(){

    const [firstName, setFirstName] = useState()
    const [lastName, setLasteName] = useState()
    const [dateOfBirth, setDateOfBirth] = useState()
    const [dateStart, setDateStart] = useState(new Date())
    const [departement, setDepartement] = useState()
    const [street, setStreet] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [zipCode, setZipCode] = useState()

    const employeeData = {
        "firstName": firstName,
        "lastName": lastName,
        "dateOfBirth": dateOfBirth,
        "dateStart": dateStart,
        "departement": departement,
        "street": street,
        "city": city,
        "state": state,
        "zipCode": zipCode,
    }

    console.log(employeeData)

    return(
        <React.Fragment>
            <div className="form-wrap">
                <form className="create-employee" id="create-employee">
                    <div className="name-date-form">
                        <h2 className="form-title green-dark">User infos</h2>
                        <div className="name-form">
                            <div className="flex-direction-colum">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" onChange={(e) => setLasteName(e.target.value)} />
                            </div>
                        </div>
                        <div className="date-form">
                            <div className="flex-direction-colum">
                                <label htmlFor="date-of-birth">Date of Birth</label>
                                {/* <input id="date-of-birth" type="text" /> */}
                                <DatePicker className="date-of-birth" value={dateOfBirth} onChange={setDateOfBirth} />
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="start-date">Start Date</label>
                                {/* <input id="start-date" type="text" /> */}
                                <DatePicker className="date-of-birth" value={dateStart} onChange={setDateStart} />
                            </div>
                        </div>
                        <div className="flex-direction-colum">
                            <label htmlFor="department">Department</label>
                            <Select name="department" id="department" options={department} onChange={setDepartement} />
                        </div>
                    </div>
                    <div className="adress-form-wrap">
                        <h2 className="form-title green-dark">Adress</h2>
                        <div className="adress-form">
                            <div className="flex-direction-colum">
                                <label htmlFor="street">Street</label>
                                <input id="street" type="text" onChange={(e) => setStreet(e.target.value)} />
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="city">City</label>
                                <input id="city" type="text" onChange={(e) => setCity(e.target.value)} />
                            </div>
                        </div>




                        <div className="state-zip-form">
                            <div className="flex-direction-colum">
                                <label htmlFor="state">State</label>
                                <Select name="sate" id="state" options={states} onChange={setState} />
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="zip-code">Zip Code</label>
                                <input id="zip-code" type="number" onChange={(e) => setZipCode(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="create-user-button-wrap">
                    <button className="create-user-btn">Add</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
        </React.Fragment>
        
        
    )
}

export default CreateEmployeeForm