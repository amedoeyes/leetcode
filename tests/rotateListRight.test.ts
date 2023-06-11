import rotateListRight from "../problems/rotateListRight";
import { nodesFromArray } from "../utils/ListNode";

describe("Rotate List Right", () => {
	test("[1, 2, 3, 4, 5]", () => {
		expect(rotateListRight(nodesFromArray([1, 2, 3, 4, 5]), 2)).toEqual(nodesFromArray([4, 5, 1, 2, 3]));
	});

	test("[0, 1, 2]", () => {
		expect(rotateListRight(nodesFromArray([0, 1, 2]), 1)).toEqual(nodesFromArray([2, 0, 1]));
	});
});
