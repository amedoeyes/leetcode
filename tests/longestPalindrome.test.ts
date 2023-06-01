import longestPalindrome from "../problems/longestPalindrome";

describe("Longest Palindrome", () => {
	test("babad", () => {
		expect(longestPalindrome("babad")).toEqual("aba");
	});

	test("cbbd", () => {
		expect(longestPalindrome("cbbd")).toEqual("bb");
	});

	test("a", () => {
		expect(longestPalindrome("a")).toEqual("a");
	});

	test("abb", () => {
		expect(longestPalindrome("abb")).toEqual("bb");
	});
});
