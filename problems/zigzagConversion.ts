export default function zigzagConversion(s: string, numRows: number): string {
	if (numRows === 1) return s;

	let result = "";

	for (let i = 0; i < numRows; i++) {
		const increment = (numRows - 1) * 2;

		for (let j = i; j < s.length; j += increment) {
			result += s[j];

			if (i > 0 && i < numRows - 1 && j + increment - 2 * i < s.length) {
				result += s[j + increment - 2 * i];
			}
		}
	}

	return result;
}
