import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header, Footer } from "./components";

import { Home, Typography } from "./pages";

export default function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/typography" element={<Typography/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}