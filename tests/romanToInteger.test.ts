import romanToInteger from "../problems/romanToInteger";

describe("Roman to Integer", () => {
	test("3", () => {
		expect(romanToInteger("III")).toEqual(1);
	});

	test("LVIII", () => {
		expect(romanToInteger("LVIII")).toEqual(58);
	});

	test("MCMXCIV", () => {
		expect(romanToInteger("MCMXCIV")).toEqual(1994);
	});
});
