import React, { useEffect } from "react";
import {
	getCompletedTodos,
	getIncompletedTodos,
	getTodosLoading,
} from "./selectors";
import {
	loadTodos,
	markTodoAsCompletedRequest,
	removeTodoRequest,
} from "./thunks";

import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import styled from "styled-components";

const ListWrapper = styled.div`
	max-width: 700px;
	margin: auto;
`;

const TodoList = ({
	completedTodos,
	incompletedTodos,
	onRemovedPressed,
	onCompletedPressed,
	isLoading,
	startLoadingTodos,
}) => {
	//adding empty array for preventing it from reloading constantly
	useEffect(() => {
		startLoadingTodos();
	}, []);

	const loadingMessage = <div>Loading todos...</div>;
	const content = (
		<ListWrapper>
			<NewTodoForm />
			<h3>Incompleted: </h3>
			{/* Each todo will display a TodoListItem Component */}
			{incompletedTodos.map((todo) => (
				<TodoListItem
					todo={todo}
					onRemovedPressed={onRemovedPressed}
					onCompletedPressed={onCompletedPressed}
				/>
			))}
			<h3>Completed: </h3>
			{/* Each todo will display a TodoListItem Component */}
			{completedTodos.map((todo) => (
				<TodoListItem
					todo={todo}
					onRemovedPressed={onRemovedPressed}
					onCompletedPressed={onCompletedPressed}
				/>
			))}
		</ListWrapper>
	);
	return isLoading ? loadingMessage : content;
};

//component (NewTodoForm) access to the todos in our state

const mapStateToProps = (state) => ({
	isLoading: getTodosLoading(state),
	completedTodos: getCompletedTodos(state),
	incompletedTodos: getIncompletedTodos(state),
});

// The properties of the object will be returned (will be passed) to our components as props
const mapDispatchToProps = (dispatch) => ({
	onRemovedPressed: (id) => dispatch(removeTodoRequest(id)),
	onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
	startLoadingTodos: () => dispatch(loadTodos()),
	/*As onDisplayAlertClicked is a function so it doesn't take any arguments (text):
		export const displayAlert = () => () => {
		alert("Hello");
	};
	, but if we want to define it with argument we can modify it in thunk.js by:
	export const displayAlert = (text) => () => {
		alert(`You clicked on: ${text}`);
	};*/

	// onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
