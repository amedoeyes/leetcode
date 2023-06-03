import reverseInteger from "../problems/reverseInteger";

describe("Reverse Integer", () => {
	test("321", () => {
		expect(reverseInteger(123)).toEqual(321);
	});

	test("-321", () => {
		expect(reverseInteger(-123)).toEqual(-321);
	});

	test("21", () => {
		expect(reverseInteger(120)).toEqual(21);
	});

	test("0", () => {
		expect(reverseInteger(1534236469)).toEqual(0);
	});
});
