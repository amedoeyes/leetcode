import romanToInteger from "../problems/romanToInteger";

describe("Roman to Integer", () => {
	test("III", () => {
		expect(romanToInteger("III")).toEqual(3);
	});

	test("LVIII", () => {
		expect(romanToInteger("LVIII")).toEqual(58);
	});

	test("MCMXCIV", () => {
		expect(romanToInteger("MCMXCIV")).toEqual(1994);
	});
});
