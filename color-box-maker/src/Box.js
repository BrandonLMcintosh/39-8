import React from "react";

import "./Box.css";

const Box = ({ height, width, color, deleteBox, id }) => {
	const boxStyles = {
		height: `${height}px`,
		width: `${width}px`,
		backgroundColor: color,
	};
	return (
		<div style={boxStyles} className="box">
			<button className="delete" onClick={() => deleteBox(id)}>
				X
			</button>
		</div>
	);
};

export default Box;
