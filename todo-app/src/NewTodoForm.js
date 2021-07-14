import { React, useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addItem }) => {
	const INITIAL_STATE = {
		text: "",
	};
	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((data) => ({ ...data, [name]: value }));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addItem({ ...formData, id: uuid() });
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="text">
				text:{" "}
				<input
					type="text"
					name="text"
					value={formData.text}
					onChange={handleChange}
					placeholder="enter todo here"
					id="text"
				></input>
			</label>
			<button>Add!</button>
		</form>
	);
};

export default NewTodoForm;
