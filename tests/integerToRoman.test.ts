import integerToRoman from "../problems/integerToRoman";

describe("Integer To Roman", () => {
	test("III", () => {
		expect(integerToRoman(3)).toEqual("III");
	});

	test("LVIII", () => {
		expect(integerToRoman(58)).toEqual("LVIII");
	});

	test("MCMXCIV", () => {
		expect(integerToRoman(1994)).toEqual("MCMXCIV");
	});
});
