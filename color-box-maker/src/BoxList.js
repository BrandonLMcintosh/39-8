import { useState, React } from "react";

import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

import "./BoxList.css";

const BoxList = () => {
	const INITIAL_STATE = [];
	const [boxes, setBoxes] = useState(INITIAL_STATE);
	const addBox = (boxObj) => {
		setBoxes((boxes) => [...boxes, boxObj]);
	};

	const deleteBox = (id) => {
		console.log(id);
		const newBoxes = boxes.filter((box) => box.key !== id);
		setBoxes(newBoxes);
	};

	return (
		<div className="box-list">
			<NewBoxForm addBox={addBox} />
			{boxes.map((box) => (
				<Box
					height={box.height}
					width={box.width}
					color={box.color}
					key={box.key}
					deleteBox={deleteBox}
					id={box.key}
				/>
			))}
		</div>
	);
};

export default BoxList;
