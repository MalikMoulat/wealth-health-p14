import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux"

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import CreateEmployee from "./pages/createmployee/createemployee";
import HomePage from "./pages/home/home";
import EmployeeList from "./pages/employeelist/employeelist";
import ErrorPage from "./pages/error/error";

import store from "./redux/store";

function App() {

  const dataEmployeeLocalStorage = localStorage.getItem('dataEmployee');

  if(dataEmployeeLocalStorage === null){
    localStorage.setItem('dataEmployee', "[]")
  }else{

  }

  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}/> 
            <Route path="/create-employee" element={<CreateEmployee />}/>
            <Route path="/employee-list" element={<EmployeeList />} /> 
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </React.Fragment>
    </Provider>
  )
}

export default App;
