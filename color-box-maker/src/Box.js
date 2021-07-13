import React from "react";

import "./Box.css";

const Box = ({height, width, color, deleteBox}) => {
    const boxStyles = {
        height: height,
        width: width,
        backgroundColor: color,
    }
    return (
        <div style={boxStyles}><button className="delete" onClick={deleteBox}>X</button></div>
    )
};

export default Box;