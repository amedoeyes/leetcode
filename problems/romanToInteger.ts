export default function romanToInteger(s: string): number {
	const roman = new Map<number, string>([
		[1000, "M"],
		[900, "CM"],
		[500, "D"],
		[400, "CD"],
		[100, "C"],
		[90, "XC"],
		[50, "L"],
		[40, "XL"],
		[10, "X"],
		[9, "IX"],
		[5, "V"],
		[4, "IV"],
		[1, "I"],
	]);
	let result = 0;

	for (const [key, value] of roman) {
		while (s.startsWith(value)) {
			result += key;
			s = s.slice(value.length);
		}
	}

	return result;
}
