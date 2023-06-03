export default function palindromeNumber(x: number): boolean {
	return x.toString() === x.toString().split("").reverse().join("");
}
