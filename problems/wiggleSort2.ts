export default function wiggleSort2(nums: number[]): void {
	let end = nums.length - 1;
	let middle = Math.floor((nums.length - 1) / 2);
	const copy = [...nums].sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) nums[i] = copy[middle--];
		else nums[i] = copy[end--];
	}
}
