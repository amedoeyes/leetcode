export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const merged = nums1.concat(nums2).sort((a, b) => a - b);

	if (merged.length % 2 === 0) return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;

	return merged[(merged.length - 1) / 2];
}
