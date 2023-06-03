import stringToInteger from "../problems/stringToInteger";

describe("String to Integer", () => {
	test("42", () => {
		expect(stringToInteger("42")).toEqual(42);
	});

	test("   -42", () => {
		expect(stringToInteger("   -42")).toEqual(-42);
	});

	test("4193 with words", () => {
		expect(stringToInteger("4193 with words")).toEqual(4193);
	});

	test("words and 987", () => {
		expect(stringToInteger("words and 987")).toEqual(0);
	});

	test("-91283472332", () => {
		expect(stringToInteger("-91283472332")).toEqual(-2147483648);
	});

	test("3.14159", () => {
		expect(stringToInteger("3.14159")).toEqual(3);
	});

	test("+-12", () => {
		expect(stringToInteger("+-12")).toEqual(0);
	});
});
