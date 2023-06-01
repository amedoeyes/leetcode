export default class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function nodesFromArray(arr: number[]): ListNode | null {
	if (arr.length === 0) return null;
	return new ListNode(arr[0], nodesFromArray(arr.slice(1)));
}
