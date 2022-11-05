import { createSelector } from "reselect";

export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

//reselect selector (arguments, last argument is a function)
export const getIncompletedTodos = createSelector(getTodos, (todos) =>
	todos.filter((todo) => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(getTodos, (todo) =>
	todo.filter((todo) => todo.isCompleted)
);
