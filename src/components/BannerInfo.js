import React from "react";

export default function BannerInfo(props) {
    return (
        <div className={"banner " + props.type}>{props.label}</div>
    );
}