export default function longestPalindrome(s: string): string {
	let longestPalindrome = "";

	for (let i = 0; i < s.length; i++) {
		let left = i;
		let right = i;

		while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
			const currentStr = s.slice(left, right + 1);

			if (currentStr.length >= longestPalindrome.length) {
				longestPalindrome = currentStr;
			}

			left--;
			right++;
		}

		left = i;
		right = i + 1;

		while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
			const currentStr = s.slice(left, right + 1);

			if (currentStr.length >= longestPalindrome.length) {
				longestPalindrome = currentStr;
			}

			left--;
			right++;
		}
	}

	return longestPalindrome;
}
