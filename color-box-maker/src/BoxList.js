import React from "react";
import { useState } from "react";


import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

import "./BoxList.css";

const BoxList = () => {
    const {boxes, setBoxes} = useState([]);
    const addBox = (boxObj) => {
        setBoxes(boxes => [...boxes, boxObj])
    }

    const deleteBox = evt => {
        if(evt.target.className === "delete"){
            const parentKey = evet.target.parent.key;
            const newBoxes = boxes.filter(box => box.key !== parentKey);
            setBoxes(newBoxes);
        }
    }
    
    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            {boxes.map(box => {
                <Box height={box.height} width={box.width} color={box.color} key={box.key} deleteBox={deleteBox}/>
            })}
        </div>
    )
};

export default BoxList;