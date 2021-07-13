import React from "react";

import {v4 as uuid} from "uuid";

import "./NewBoxForm.css";

const colors = ["blue", "green", "yellow", "red", "purple", "orange", "magenta", "black"]

const NewBoxForm = ({height, width, color = "black", addBox}) => {
    const INITIAL_STATE = {
        height: 10,
        width: 10, 
        color: "black"
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        evt.preventDefault();
        addBox({...formData, key: uuid()})
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="height">Height (px): <input type="text" name="height" placeholder="10" value={formData.height} onChange={handleChange}/></label>
                
                <label htmlFor="width">Width (px): <input type="text" name="width" placeholder="10" value={formData.width} onChange={handleChange}/></label>
                
                <label htmlFor="color">Color: <input type="select" name="color" placeholder="black" value={formData.color} onChange={handleChange}>
                    {colors.map(color => {
                        <option value={color}>{color}</option>
                    })}
                    </input></label>

                <button>Add it!</button>
                
            </form>
        </div>
    )
};

export default NewBoxForm;