import regularExpressionMatching from "../problems/regularExpressionMatching";

describe("Regular Expression Matching", () => {
	test("aa, a", () => {
		expect(regularExpressionMatching("aa", "a")).toEqual(false);
	});

	test("aa, a*", () => {
		expect(regularExpressionMatching("aa", "a*")).toEqual(true);
	});

	test("ab, .*", () => {
		expect(regularExpressionMatching("ab", ".*")).toEqual(true);
	});
});
