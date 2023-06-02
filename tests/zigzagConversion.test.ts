import zigzagConversion from "../problems/zigzagConversion";

describe("Zigzag Conversion", () => {
	test("PAHNAPLSIIGYIR, 3", () => {
		expect(zigzagConversion("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
	});

	test("PINALSIGYAHRPI, 4", () => {
		expect(zigzagConversion("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
	});
});
