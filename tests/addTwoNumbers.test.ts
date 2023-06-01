import { nodesFromArray } from "../utils/ListNode";
import addTwoNumbers from "../problems/addTwoNumbers";

describe("Add Two Numbers", () => {
	test("[2,4,3] + [5,6,4]", () => {
		const l1 = nodesFromArray([2, 4, 3]);
		const l2 = nodesFromArray([5, 6, 4]);
		const result = addTwoNumbers(l1, l2);
		const expected = nodesFromArray([7, 0, 8]);

		expect(result).toEqual(expected);
	});

	test("[0] + [0]", () => {
		const l1 = nodesFromArray([0]);
		const l2 = nodesFromArray([0]);
		const result = addTwoNumbers(l1, l2);
		const expected = nodesFromArray([0]);

		expect(result).toEqual(expected);
	});

	test("[9,9,9,9,9,9,9] + [9,9,9,9]", () => {
		const l1 = nodesFromArray([9, 9, 9, 9, 9, 9, 9]);
		const l2 = nodesFromArray([9, 9, 9, 9]);
		const result = addTwoNumbers(l1, l2);
		const expected = nodesFromArray([8, 9, 9, 9, 0, 0, 0, 1]);

		expect(result).toEqual(expected);
	});
});
