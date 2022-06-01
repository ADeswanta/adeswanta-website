import React from "react";

import { Navigation, BannerInfo } from ".";

import Logo from '../assets/images/logo.svg';

export default function Header() {
    let links = [
        { id: "", name: "Home" },
        { id: "typography", name: "Typography Test" }
    ];
    return (
        <div className="header">
            <span className="logo"><object data={Logo}/></span>
            <Navigation links={links}/>
            <BannerInfo type="warn" label="This website is in development"/>
        </div>
    );
}