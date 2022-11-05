// Require us to define an initial state and an action to test reducers
// Testing selectors only require us to define the relevant parts of the state
// getCompletedTodos.resultFunc(fakeTodos): resultFunc() is a reference to the last function that we passed to createSelector(getCompletedTodos)

import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodos selector", () => {
	it("Returns only completed todos", () => {
		const fakeTodos = [
			{
				text: "Say Hello!",
				isCompleted: true,
			},
			{
				text: "Say Goodbye!",
				isCompleted: false,
			},
			{
				text: "Climb Mount Everest",
				isCompleted: false,
			},
		];
		const expected = [
			{
				text: "Say Hello!",
				isCompleted: true,
			},
		];
		const actual = getCompletedTodos.resultFunc(fakeTodos);

		expect(actual).to.deep.equal(expected);
	});
});
