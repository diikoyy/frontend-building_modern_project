import React, { useState } from "react";

import { addTodoRequest } from "./thunks";
import { connect } from "react-redux";
import { getTodos } from "./selectors";
import styled from "styled-components";

const FormContainer = styled.div`
	border-radius: 8px;
	padding: 16px;
	text-align: center;
	box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
	border: 1px solid black;
	padding: 3px;
	font-size: 16px;
	padding: 8px;
	border: none;
	border-bottom: 2px solid #ddd;
	border-radius: 8px;
	width: 70%;
	outline: none;
	border-color: teal;
	color: purple;
	font-style: italic;
`;

const NewTodoButton = styled.button`
	font-size: 16px;
	padding: 8px;
	border: none;
	border-radius: 8px;
	outline: none;
	cursor: pointer;
	margin-left: 8px;
	width: 20%;
	background-color: #22ee22;
`;
const NewTodoForm = ({ todos, onCreatePressed }) => {
	const [inputValue, setInputValue] = useState("");

	return (
		<FormContainer>
			<NewTodoInput
				className="new-todo-input"
				type="text"
				placeholder="Type your new todo here"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<NewTodoButton
				onClick={() => {
					const isDuplicateText = todos.some(
						(todo) => todo.text === inputValue
					);
					if (!isDuplicateText) {
						onCreatePressed(inputValue);
						setInputValue("");
					}
				}}
				className="new-todo-button">
				Create Todo
			</NewTodoButton>
		</FormContainer>
	);
};

const mapStateToProps = (state) => ({
	todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
	onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
