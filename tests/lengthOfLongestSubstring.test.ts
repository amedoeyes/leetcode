import lengthOfLongestSubstring from "../problems/lengthOfLongestSubstring";

describe("Length of Longest Substring", () => {
	test("abcabcbb", () => {
		expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
	});

	test("bbbbb", () => {
		expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
	});

	test("pwwkew", () => {
		expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
	});

	test("space", () => {
		expect(lengthOfLongestSubstring(" ")).toEqual(1);
	});

	test("dvdf", () => {
		expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
	});

	test("qrsvbspk", () => {
		expect(lengthOfLongestSubstring("qrsvbspk")).toEqual(5);
	});
});
