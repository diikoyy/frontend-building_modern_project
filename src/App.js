import React from "react";
import TodoList from "./todos/TodoList";
import { hot } from "react-hot-loader";
import styled from "styled-components";

const AppContainer = styled.div`
	margin: 1rem;
	font-family: Arial, Helvetica, sans-serif;
	color: #222222;
	${
		"" /* width: 100vw;
	height: 100vh; */
	}
`;

const App = () => (
	<AppContainer>
		<TodoList />
	</AppContainer>
);

export default hot(module)(App);
//hot(module)(App) to change directly after edited by user (not necessary to refresh the page)
