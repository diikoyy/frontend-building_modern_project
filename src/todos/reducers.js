import {
	CREATE_TODO,
	LOAD_TODOS_FAILURE,
	LOAD_TODOS_IN_PROGRESS,
	LOAD_TODOS_SUCCESS,
	MARK_TODO_AS_COMPLETED,
	REMOVE_TODO,
} from "./actions";

/*
	state.todos: {
		isLoading: true,
		data: [...]
	}
*/

const initialState = { isLoading: false, data: [] };

//reducers take 2 arguments, 1st one is called state, 2nd one is called action
export const todos = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case CREATE_TODO: {
			const { todo } = payload;
			return { ...state, data: state.data.concat(todo) };
		}
		//Array.prototype.filter(). The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
		case REMOVE_TODO: {
			const { todo: todoToRemove } = payload;
			return {
				...state,
				data: state.data.filter((todo) => todo.id !== todoToRemove.id),
			};
		}
		// Array.prototype.map(). The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
		//Each todo will display a Text of Todo compare with the Text of payload
		// Spread operator (...). Pass all elements of object to the function
		case MARK_TODO_AS_COMPLETED: {
			const { todo: updatedTodo } = payload;
			return {
				...state,
				data: state.data.map((todo) => {
					if (todo.id === updatedTodo.id) {
						// return { ...todo, isCompleted: true };
						return updatedTodo;
					}
					return todo;
				}),
			};
		}
		case LOAD_TODOS_SUCCESS: {
			const { todos } = payload;
			return { ...state, isLoading: false, data: todos };
		}
		case LOAD_TODOS_IN_PROGRESS:
			return { ...state, isLoading: true };
		case LOAD_TODOS_FAILURE:
			return { ...state, isLoading: false };
		default:
			return state;
	}
};
