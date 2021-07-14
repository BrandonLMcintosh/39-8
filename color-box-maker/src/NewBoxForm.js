import { useState, React } from "react";

import { v4 as uuid } from "uuid";

import "./NewBoxForm.css";

const colors = ["blue", "green", "yellow", "red", "purple", "orange", "magenta", "black"];

const NewBoxForm = ({ height = 10, width = 10, color = "black", addBox }) => {
	const INITIAL_STATE = {
		height: 10,
		width: 10,
		color: "black",
	};
	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((data) => ({
			...data,
			[name]: value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addBox({ ...formData, key: uuid() });
		setFormData(INITIAL_STATE);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="height">Height (px): </label>
				<input
					type="number"
					name="height"
					placeholder="10"
					value={formData.height}
					onChange={handleChange}
				/>

				<label htmlFor="width">Width (px): </label>
				<input type="number" name="width" placeholder="10" value={formData.width} onChange={handleChange} />

				<label htmlFor="color">Color: </label>
				<select name="color" value={formData.color} onChange={handleChange}>
					{colors.map((color) => (
						<option value={color} key={uuid()}>
							{color}
						</option>
					))}
				</select>

				<button>Add it!</button>
			</form>
		</div>
	);
};

export default NewBoxForm;
