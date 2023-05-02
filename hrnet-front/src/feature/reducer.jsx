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
            const newEmployee = action.payload
            state.employeeData.push(newEmployee)
        },


    }
})

export const { addEmployee } = addEmployeeReducers.actions

export default addEmployeeReducers 