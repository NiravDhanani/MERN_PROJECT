import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { PageRoutes } from "./Pages/PageRoutes";



function App() {

  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Header/>
          <div className="pageContent flex-grow-1">
            <PageRoutes />
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
