import containerWithMostWater from "../problems/containerWithMostWater";

describe("Container With Most Water", () => {
	test("[1,8,6,2,5,4,8,3,7]", () => {
		expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
	});

	test("[1,1]", () => {
		expect(containerWithMostWater([1, 1])).toEqual(1);
	});

	test("[1,2,1]", () => {
		expect(containerWithMostWater([1, 2, 1])).toEqual(2);
	});
});
