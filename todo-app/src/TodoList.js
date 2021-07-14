import { React, useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
	const INITIAL_STATE = [];
	const [items, setItems] = useState(INITIAL_STATE);

	const addItem = (itemObj) => {
		const newItemList = [...items, itemObj];
		setItems(newItemList);
	};

	const removeItem = (id) => {
		const newItemList = items.filter((item) => item.id !== id);
		setItems(newItemList);
	};

	return (
		<div>
			<NewTodoForm addItem={addItem} />
			<ul>
				{items.map((item) => (
					<Todo text={item.text} key={item.id} id={item.id} removeItem={removeItem} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
