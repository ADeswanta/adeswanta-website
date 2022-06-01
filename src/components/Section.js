import React from "react";

export default function Section(props) {
    props = {
        type: "normal",
        title: "Title",
        subtitle: "Subtitle",
        child: null,
        ...props
    };
    let className = "section";
    className += (props.type !== "normal") ? ` ${props.type}` : "";

    let titleElement = (props.type !== "normal") ? <h3>{props.title}</h3> : <h1>{props.title}</h1>;

    return (
        <div className={className}>
            {titleElement}
            <p>{props.subtitle}</p>
            {props.child}
        </div>
    );
}