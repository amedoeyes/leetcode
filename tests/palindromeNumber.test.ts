import palindromeNumber from "../problems/palindromeNumber";

describe("Palindrome Number", () => {
	test("121", () => {
		expect(palindromeNumber(121)).toEqual(true);
	});

	test("-121", () => {
		expect(palindromeNumber(-121)).toEqual(false);
	});

	test("10", () => {
		expect(palindromeNumber(10)).toEqual(false);
	});
});
