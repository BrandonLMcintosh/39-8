import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BoxList from "./BoxList";

it("renders without crashing", () => {
	render(<BoxList />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it("should add new item", () => {
	const { queryByText, getByLabelText } = render(<BoxList />);
	const input = getByLabelText("Width (px):");
	const button = queryByText("Add it!");
	expect(queryByText("X")).not.toBeInTheDocument();
	fireEvent.change(input, { target: { value: "500" } });
	fireEvent.click(button);
	expect(queryByText("X")).toBeInTheDocument();
});

it("should remove item", () => {
	const { queryByText, getByLabelText } = render(<BoxList />);
	const input = getByLabelText("Width (px):");
	const addButton = queryByText("Add it!");
	fireEvent.change(input, { target: { value: "300" } });
	fireEvent.click(addButton);
	const button = queryByText("X");
	expect(queryByText("X")).toBeInTheDocument();
	fireEvent.click(button);
	expect(queryByText("X")).not.toBeInTheDocument();
});
