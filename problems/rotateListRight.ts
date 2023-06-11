import ListNode from "../utils/ListNode";

export default function rotateListRight(head: ListNode | null, k: number): ListNode | null {
	let currentNode = head;
	let length = 0;

	while (currentNode) {
		length++;
		currentNode = currentNode.next;
	}

	let steps = k % length;
	currentNode = head;

	if (steps === 0) return head;

	while (length - steps > 1 && currentNode) {
		currentNode = currentNode.next;
		steps++;
	}

	if (currentNode) {
		const newHead = currentNode.next;
		currentNode.next = null;
		let newTail = newHead;

		while (newTail) {
			if (!newTail.next) {
				newTail.next = head;
				head = newHead;

				break;
			}

			newTail = newTail.next;
		}
	}

	return head;
}
