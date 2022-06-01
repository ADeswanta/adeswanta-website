import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Footer } from "./components";

import { Home, Typography } from "./pages";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/typography" element={<Typography/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}