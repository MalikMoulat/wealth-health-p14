import React, { useState, useEffect } from "react"
import { Application, DatePicker, Input, Select } from "react-rainbow-components"
import { useDispatch } from "react-redux"

import { states, department } from "../../data/data";
import { formatDate } from "../../utils/utils";

import { addEmployee } from "../../feature/reducer";

import "./createemployeeform.css"


function CreateEmployeeForm(){

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

    const [formValid, setFormValid] = useState(false)

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

    localStorage.setItem('dataEmployee', "[]");


    const items = (() => {
            const fieldValue = localStorage.getItem('dataEmployee');
            return fieldValue === null
            ? []
            : JSON.parse(fieldValue);
        })();


    function addEmployee(){
        console.log(1)
        items.push(employeeData);
        localStorage.setItem('dataEmployee', JSON.stringify(items));
       // dispatch(addEmployee(employeeData))
    }


      
    function checkInputForm(idElement){
        const input = document.getElementById(idElement)

        if(input.value < 1){
            input.style.borderColor = "red"
            setFormValid(false)
            console.log(input.value.length)
        } else if (input.value > 1){
            input.style.borderColor = ""
            console.log("OK")
            console.log(input.value.length)
        }

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


    useEffect(()=>{
   
    },[])



    return(
        <React.Fragment>
            <div className="form-wrap">
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
                                </Application>
                            </div>
                        </div>
                        <div className="date-form">
                            <div className="flex-direction-colum">
                                <label htmlFor="date-of-birth">Date of Birth</label>
                                <Application theme={themeDatePicker}>
                                    <DatePicker className="date-of-birth" value={dateOfBirth} onChange={setDateOfBirth} />
                                </Application>
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="start-date">Start Date</label>
                                <Application theme={themeDatePicker}>
                                    <DatePicker className="date-of-birth" value={dateStart} onChange={setDateStart} />
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
                                </Application>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="create-user-button-wrap">
                    <button className="create-user-btn" onClick={addEmployee}>Add</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
        </React.Fragment>
        
        
    )
}

export default CreateEmployeeForm