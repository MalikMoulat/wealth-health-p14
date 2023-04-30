import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux"

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import CreateEmployee from "./pages/createmployee/createemployee";
import HomePage from "./pages/home/home";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}/> 
            <Route path="/create-employee" element={<CreateEmployee />}/>  
          </Routes>
          <Footer />
        </Router>
      </React.Fragment>
    </Provider>
  )
}

export default App;
