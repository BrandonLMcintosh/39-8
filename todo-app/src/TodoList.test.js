import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

it("renders without crashing", () => {
	render(<TodoList />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it("should add new item", () => {
	const { queryByText, getByLabelText } = render(<TodoList />);
	const input = getByLabelText("text:");
	const button = queryByText("Add!");
	expect(queryByText("test1")).not.toBeInTheDocument();
	fireEvent.change(input, { target: { value: "test1" } });
	fireEvent.click(button);
	expect(queryByText("test1")).toBeInTheDocument();
});

it("should remove item", () => {
	const { queryByText, getByLabelText } = render(<TodoList />);
	const input = getByLabelText("text:");
	const addButton = queryByText("Add!");
	fireEvent.change(input, { target: { value: "test1" } });
	fireEvent.click(addButton);
	const button = queryByText("X");
	expect(queryByText("test1")).toBeInTheDocument();
	fireEvent.click(button);
	expect(queryByText("test1")).not.toBeInTheDocument();
});
