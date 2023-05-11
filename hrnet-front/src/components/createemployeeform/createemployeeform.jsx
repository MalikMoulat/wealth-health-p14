import React, { useState } from "react"
import { Application, DatePicker, Input, Select } from "react-rainbow-components"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { states, department } from "../../data/data"
import { formatDate, checkInputFormIfErrorBorderRed } from "../../utils/utils"

import { addEmployee } from "../../redux/reducer"

import ModalMessage from "modal-with-message"

import "./createemployeeform.css"

/**
 * Formulaire d'ajout d'un employé
 * @returns {JSX.Element}
 */
function CreateEmployeeForm(){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [idEmployee, setIdEmployee] = useState(Date.now())
    const [firstName, setFirstName] = useState()
    const [lastName, setLasteName] = useState()
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [dateStart, setDateStart] = useState(new Date())
    const [departement, setDepartement] = useState(department[0].value)
    const [street, setStreet] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState(states[0].value)
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

    const [modal, setModal] = useState(false)

    /**
     * Object qui contiendra les données du formulaire rempli
     */
    const employeeData = {
        id: idEmployee,
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
                brand: "#93AD18",
            },
        },
    }

    /**
     * Ajoute un employé au store
     * @returns 
     */
    function addEmployeeForm(){

        // Contient le return de checkInputForm
        const erreurForm = checkInputForm()

        // Si un champ du formulaire est vide, le champ devient rouge
        checkInputFormIfErrorBorderRed()
        
        // Si le formulaire a tous les champs remplis
        if( erreurForm === false){
            // Ajoute un ID au nouveau employe
            setIdEmployee(Date.now())
            // Ajoute le nouveau employé au store
            dispatch(addEmployee(employeeData))
            // Affiche la modal
            setModal(true)
            // Remonte tout en haut de la page
            window.scrollTo({ top: 0, behavior: "smooth" })
            return
        }
    }

    /**
     * Verifie que les variables contiennent bien les données du formulaire
     * si une des variable est vide la fontion retourne false
     * @returns {boolean}
     */
    function checkInputForm(){

        let isError = false

        if (!firstName) {
            setFirstNameErr("Please enter a first name.")
            isError = true
        } else {
            setFirstNameErr("")
        }

        if (!lastName) {
            setLastNameErr("Please enter a last name.")
            isError = true
        } else {
            setLastNameErr("")
        }

        if (!lastName) {
            setLastNameErr("Please enter a last name.")
            isError = true
        } else {
            setLastNameErr("")
        }

        if (!dateOfBirth) {
            setDateOfBirthErr("Please enter a birth date.")
            isError = true
        } else {
            setDateOfBirthErr("")
        }

        if (!dateStart) {
            setDateStartErr("Please enter a date.")
            isError = true
        } else {
            setDateStartErr("")
        }

        if (!departement) {
            setDepartementErr("Please enter a department.")
            isError = true
        } else {
            setDepartementErr("")
        }

        if (!street) {
            setStreetErr("Please enter a street.")
            isError = true
        } else {
            setStreetErr("")
        }

        if (!city) {
            setCityErr("Please enter a city.")
            isError = true
        } else {
            setCityErr("")
        }

        if (!state) {
            setStateErr("Please enter a state.")
            isError = true
        } else {
            setStateErr("")
        }

        if (!zipCode) {
            setZipCodeErr("Please enter a zip code.")
            isError = true
        } else {
            setZipCodeErr("")
        }

        return isError

    }
       

    /**
     * 
     * @param {function} setvar - useSate() var use boolean. True = display modal, False = modal not display
     * @returns {JSX.Element} Modal avec message
     */
    function displayModal(initVar, setVar){
        if (initVar === true){
            return (
                <ModalMessage setVar={setVar} message={"Employee Created!"}/>
            )
        }
        return(
            ""
        )
    }


    return(
        <React.Fragment>
            <div className="form-wrap">
                {displayModal(modal, setModal)}
                <h1 className="form-title green-dark">Create employee</h1>
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
                                        id="last-name"
                                        name="last-name"
                                        placeholder="Last name"
                                        type="text"
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
                                    <DatePicker 
                                        id="date-of-birth"
                                        name="date-of-birth"
                                        className="date-of-birth" 
                                        value={dateOfBirth} 
                                        onChange={setDateOfBirth}
                                    />
                                    {dateOfBirthErr && <p className="error-message">{dateOfBirthErr}</p>}
                                </Application>
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="start-date">Start Date</label>
                                <Application theme={themeDatePicker}>
                                    <DatePicker
                                        id="start-date"
                                        name="start-date"
                                        className="date-of-start" 
                                        value={dateStart} 
                                        onChange={setDateStart} 
                                    />
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
                                    // id="example-select-1"
                                    id="department"
                                    style={themeDatePicker}
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
                                        id="street"
                                        name="street"
                                        placeholder="street"
                                        type="text"
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                    {streetErr && <p className="error-message">{streetErr}</p>}
                                </Application>
                            </div>
                            <div className="flex-direction-colum">
                                <label htmlFor="city">City</label>
                                <Application theme={themeDatePicker}>
                                    <Input
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                        type="text"
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
                                        // id="example-select-1"
                                        id="state"
                                        style={themeDatePicker}
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
                                        id="zip-code"
                                        name="zip-code"
                                        placeholder="Zip-code"
                                        type="text"
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
                    <button className="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
                </div>
            </div>
        </React.Fragment>
        
        
    )
}

export default CreateEmployeeForm