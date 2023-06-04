export default function containerWithMostWater(height: number[]): number {
	let max = 0;
	let left = 0;
	let right = height.length - 1;

	while (left !== right) {
		const area = right - left;
		const minHeight = Math.min(height[left], height[right]);

		max = Math.max(max, area * minHeight);

		if (height[left] < height[right]) left++;
		else right--;
	}

	return max;
}
