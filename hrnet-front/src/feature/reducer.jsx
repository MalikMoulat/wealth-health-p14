import { configureStore, createSlice } from "@reduxjs/toolkit"

const addEmployeeReducers = createSlice({
    name: "addEmployee",
    initialState: {
        employeeData: [{
            firstName: "Malik",
            lastName: "Moulat",
            dateOfBirth: "22-05-1995",
            dateStart: "30-04-2023",
            departement: "test",
            street: "street",
            city: "city",
            state: "state",
            zipCode: "31100",
        }
        ],
    },
    reducers: {
        addEmployee: (state, action) => {

            const newEmployee = {
                firstName: action.payload.firstName,
                // lastName: action.payload.lastName,
                // dateOfBirth: action.payload.dateOfBirth,
                // dateStart: action.payload.dateStart,
                // departement: action.payload.departement,
                // street: action.payload.street,
                // city: action.payload.city,
                // state: action.payload.state,
                // zipCode: action.payload.zipCode,
            }

            state.push(newEmployee)
        },


    }
})

export const { addEmployee } = addEmployeeReducers.actions

export default addEmployeeReducers 