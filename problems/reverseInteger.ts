export default function reverseInteger(x: number): number {
	let result = 0;

	while (x) {
		result = result * 10 + (x % 10);
		x = Math.trunc(x / 10);
	}

	if (Math.abs(result) >= Math.pow(2, 31)) return 0;

	return result;
}
