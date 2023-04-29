import React from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import HomePage from "./pages/home/home";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HomePage />
      <Footer />
    </React.Fragment>
  )
}

export default App;
