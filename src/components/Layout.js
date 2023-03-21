import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Header";
import AuthBox from "./AuthBox";
import Landingpage from "./Landingpage";
const Layout =()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Landingpage/>}/>
               <Route path="/login" element={<AuthBox></AuthBox>}/>
               <Route path ="/register" element={<AuthBox register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Layout;