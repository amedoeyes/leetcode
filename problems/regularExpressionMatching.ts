export default function regularExpressionMatching(s: string, p: string): boolean {
	return new RegExp(`^${p}$`).test(s);
}
