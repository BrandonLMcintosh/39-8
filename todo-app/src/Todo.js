import React from "react";

const Todo = ({ text, id, removeItem }) => {
	return (
		<div>
			<button onClick={() => removeItem(id)}>X</button>
			<span>{text}</span>
		</div>
	);
};

export default Todo;
