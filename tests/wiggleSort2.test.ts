import wiggleSort2 from "../problems/wiggleSort2";

describe("Wiggle Sort II", () => {
	test("[1, 5, 1, 1, 6, 4]", () => {
		const nums = [1, 5, 1, 1, 6, 4];
		wiggleSort2(nums);

		expect(nums).toEqual([1, 6, 1, 5, 1, 4]);
	});

	test("[1, 3, 2, 2, 3, 1]", () => {
		const nums = [1, 3, 2, 2, 3, 1];
		wiggleSort2(nums);

		expect(nums).toEqual([2, 3, 1, 3, 1, 2]);
	});
});
