import { configureStore } from "@reduxjs/toolkit"
import addEmployeeReducers from "./reducer"

const store = configureStore({
    reducer: {
        addEmployee : addEmployeeReducers.reducer
    }
})


export default store
