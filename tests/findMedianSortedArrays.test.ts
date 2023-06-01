import findMedianSortedArrays from "../problems/findMedianSortedArrays";

describe("Find Median Sorted Arrays", () => {
	test("[1, 3], [2]", () => {
		expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
	});

	test("[1, 2], [3, 4]", () => {
		expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
	});
});
