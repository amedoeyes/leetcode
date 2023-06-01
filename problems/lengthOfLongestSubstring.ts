export default function lengthOfLongestSubstring(s: string): number {
	const seen = new Set<string>();
	let start = 0;
	let max = 0;

	for (let end = 0; end < s.length; end++) {
		while (seen.has(s[end])) {
			seen.delete(s[start]);
			start++;
		}

		seen.add(s[end]);
		max = Math.max(max, seen.size);
	}

	return max;
}
