import React from "react";

import { NavLink } from "react-router-dom";

export default function Header(props) {
    const elements = props.links.map(link =>
        <li key={link.name}><NavLink to={`/${link.id}`}>{link.name}</NavLink></li>
    );

    return (
        <ul className="navbar">
            {elements}
        </ul>
    );
}