import React, { useState, useEffect } from "react"
import { Application, DatePicker, Input, Select } from "react-rainbow-components"
import { useDispatch, useSelector } from "react-redux"


import { states, department } from "../../data/data";
import { formatDate } from "../../utils/utils";

import { addEmployee } from "../../feature/reducer";

import ModalMessage from "../modalmessage/modalmessage";

import "./createemployeeform.css"


function CreateEmployeeForm(){

    const employeesDataStore = useSelector(state => state.addEmployee)

    console.log('Redux Store', employeesDataStore.employeeData)

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState()
    const [lastName, setLasteName] = useState()
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [dateStart, setDateStart] = useState(new Date())
    const [departement, setDepartement] = useState()
    const [street, setStreet] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [zipCode, setZipCode] = useState()

    const [firstNameErr, setFirstNameErr] = useState()
    const [lastNameErr, setLastNameErr] = useState()
    const [dateOfBirthErr, setDateOfBirthErr] = useState()
    const [dateStartErr, setDateStartErr] = useState()
    const [departementErr, setDepartementErr] = useState()
    const [streetErr, setStreetErr] = useState()
    const [cityErr, setCityErr] = useState()
    const [stateErr, setStateErr] = useState()
    const [zipCodeErr, setZipCodeErr] = useState()

    const [formValid, setFormValid] = useState(true)
    const [modal, setModal] = useState(false)

    const employeeData = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: formatDate(dateOfBirth),
        dateStart: formatDate(dateStart),
        departement: departement,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
    }


    const themeDatePicker = {
        rainbow: {
            palette: {
                brand: '#93AD18',
            },
        },
    }

    const inputStyles = {
        width: 150,
    }



    const items = (() => {
            const fieldValue = localStorage.getItem('dataEmployee');
            return fieldValue === null
            ? "[]"
            : JSON.parse(fieldValue);
        })();


    async function addEmployeeForm(){

        const erreurForm = checkInputForm()

        console.log(checkInputForm("input-4"))
        
        if( erreurForm === false){

            console.log('True : ', formValid)
            items.push(employeeData);
            localStorage.setItem('dataEmployee', JSON.stringify(items));
            dispatch(addEmployee(employeeData))
            setModal(true)
            return
            
        }
        
        setFormValid(false)

    }


      
    function checkInputForm(){

        let isError = false;

        if (!firstName) {
            setFirstNameErr("Please enter a first name.");
            isError = true;
        } else {
            setFirstNameErr("");
        }

        if (!lastName) {
            setLastNameErr("Please enter a last name.");
            isError = true;
        } else {
            setLastNameErr("");
        }

        if (!lastName) {
            setLastNameErr("Please enter a last name.");
            isError = true;
        } else {
            setLastNameErr("");
        }

        if (!dateOfBirth) {
            setDateOfBirthErr("Please enter a birth date.");
            isError = true;
        } else {
            setDateOfBirthErr("");
        }

        if (!dateStart) {
            setDateStartErr("Please enter a date.");
            isError = true;
        } else {
            setDateStartErr("");
        }

        if (!departement) {
            setDepartementErr("Please enter a department.");
            isError = true;
        } else {
            setDepartementErr("");
        }

        if (!street) {
            setStreetErr("Please enter a street.");
            isError = true;
        } else {
            setStreetErr("");
        }

        if (!city) {
            setCityErr("Please enter a city.");
            isError = true;
        } else {
            setCityErr("");
        }

        if (!state) {
            setStateErr("Please enter a state.");
            isError = true;
        } else {
            setStateErr("");
        }

        if (!zipCode) {
            setZipCodeErr("Please enter a zip code.");
            isError = true;
        } else {
            setZipCodeErr("");
        }

        return isError

    }
    


    const idFormInput = [
        "input-4",
        "input-10",
        "input-16",
        "input-26",
        "select-34",
        "input-38",
        "input-44",
        "select-48",
        "input-52"
    ]



    function displayModal(setvar){
        if (modal === true){
            return (
                <ModalMessage setVar={setModal} message={"Employee Created!"}/>
            )
        }
        return(
            ""
        )
    }


    return(
        <React.Fragment>
            <div className="form-wrap">
                {displayModal(modal)}
                <h1 className="form-title green-light">Create employee</h1>
                <form className="create-employee" id="create-employee">
                    <div className="name-date-form">
                        <h2 className="form-title green-dark">User infos</h2>
                        <div className="name-form">
                            <div className="flex-direction-colum">
                                <label htmlFor="first-name">First Name</label>
                                <Application theme={themeDatePicker}>
                                    <Input
                                        id="first-name"
                                        name="first-name"
                                        placeholder="First name"
                                        type="text"
                                        style={inputStyles}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                    {firstNameErr && <p className="error-message">{firstNameErr}</p>}
                                </Application>
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="last-name">Last Name</label>
                                <Application theme={themeDatePicker}>
                                    <Input
                                        name="last-name"
                                        placeholder="Last name"
                                        type="text"
                                        style={inputStyles}
                                        onChange={(e) => setLasteName(e.target.value)}
                                    />
                                    {lastNameErr && <p className="error-message">{lastNameErr}</p>}
                                </Application>
                            </div>
                        </div>
                        <div className="date-form">
                            <div className="flex-direction-colum">
                                <label htmlFor="date-of-birth">Date of Birth</label>
                                <Application theme={themeDatePicker}>
                                    <DatePicker className="date-of-birth" value={dateOfBirth} onChange={setDateOfBirth} />
                                    {dateOfBirthErr && <p className="error-message">{dateOfBirthErr}</p>}
                                </Application>
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="start-date">Start Date</label>
                                <Application theme={themeDatePicker}>
                                    <DatePicker className="date-of-start" value={dateStart} onChange={setDateStart} />
                                    {dateStartErr && <p className="error-message">{dateStartErr}</p>}
                                </Application>
                            </div>
                        </div>
                        <div className="flex-direction-colum">
                            <label htmlFor="department">Department</label>
                            <Application theme={themeDatePicker}>
                                <Select
                                    name="department"
                                    options={department}
                                    id="example-select-1"
                                    style={themeDatePicker}
                                    // className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                                    borderRadius="rounded"
                                    onChange={(e) => setDepartement(e.target.value)}
                                />
                                {departementErr && <p className="error-message">{departementErr}</p>}
                            </Application>
                        </div>
                    </div>
                    <div className="adress-form-wrap">
                        <h2 className="form-title green-dark">Adress</h2>
                        <div className="adress-form">
                            <div className="flex-direction-colum">
                                <label htmlFor="street">Street</label>
                                <Application theme={themeDatePicker}>
                                    <Input
                                        name="street"
                                        placeholder="street"
                                        type="text"
                                        style={inputStyles}
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                    {streetErr && <p className="error-message">{streetErr}</p>}
                                </Application>
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="city">City</label>
                                <Application theme={themeDatePicker}>
                                    <Input
                                        name="city"
                                        placeholder="City"
                                        type="text"
                                        style={inputStyles}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                    {cityErr && <p className="error-message">{cityErr}</p>}
                                </Application>
                            </div>
                        </div>


                        <div className="state-zip-form">
                            <div className="flex-direction-colum">
                                <label htmlFor="state">State</label>
                                <Application theme={themeDatePicker}>
                                    <Select
                                        name="state"
                                        options={states}
                                        id="example-select-1"
                                        style={themeDatePicker}
                                        // className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                                        borderRadius="rounded"
                                        onChange={(e) => setState(e.target.value)}
                                    />
                                    {stateErr && <p className="error-message">{stateErr}</p>}
                                </Application>                            
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="zip-code">Zip Code</label>
                                <Application theme={themeDatePicker}>
                                    <Input
                                        name="zip-code"
                                        placeholder="Zip-code"
                                        type="text"
                                        style={inputStyles}
                                        onChange={(e) => setZipCode(e.target.value)}
                                    />
                                    {zipCodeErr && <p className="error-message">{zipCodeErr}</p>}
                                </Application>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="create-user-button-wrap">
                    <button className="create-user-btn" onClick={() => addEmployeeForm()}>Add</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
        </React.Fragment>
        
        
    )
}

export default CreateEmployeeForm