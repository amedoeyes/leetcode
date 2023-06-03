export default function stringToInteger(s: string): number {
	const result = parseInt(s) || 0;

	if (result < Math.pow(-2, 31)) return Math.pow(-2, 31);
	if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

	return result;
}
