import convertToTitle from "../problems/convertToTitle";

describe(" Excel Sheet Column Title ", () => {
	test("1", () => {
		expect(convertToTitle(1)).toEqual("A");
	});

	test("26", () => {
		expect(convertToTitle(26)).toEqual("Z");
	});

	test("27", () => {
		expect(convertToTitle(27)).toEqual("AA");
	});

	test("52", () => {
		expect(convertToTitle(52)).toEqual("AZ");
	});

	test("701", () => {
		expect(convertToTitle(701)).toEqual("ZY");
	});

	test("702", () => {
		expect(convertToTitle(702)).toEqual("ZZ");
	});

	test("703", () => {
		expect(convertToTitle(703)).toEqual("AAA");
	});
});
