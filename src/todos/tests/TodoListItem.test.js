import { expect } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe("getBorderStyleForDate", () => {
	it("Returns none when the date is less than five days ago", () => {
		const today = Date.now();
		const recentDate = new Date(Date.now() - 86400000 * 3);

		const expected = "none";
		const actual = getBorderStyleForDate(recentDate, today);

		expect(actual).to.deep.equal(expected);
	});
	it("Returns a border when the date is more than five days ago", () => {
		const today = Date.now();
		const recentDate = new Date(Date.now() - 86400000 * 7);

		const expected = "2px solid red";
		const actual = getBorderStyleForDate(recentDate, today);

		expect(actual).to.deep.equal(expected);
	});
});
