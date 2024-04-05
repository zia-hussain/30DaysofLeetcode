/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head || !head.next) return head;
    const merge = (left, right) => {
        let dummy = new ListNode();
        let current = dummy;
        while (left && right) {
            if (left.val < right.val) {
                current.next = left;
                left = left.next;
            } else {
                current.next = right;
                right = right.next;
            }
            current = current.next;
        }
        current.next = left || right;
        return dummy.next;
    };
    const findMiddle = (head) => {
        let slow = head;
        let fast = head;
        let prev = null;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (prev) {
            prev.next = null;
        }
        return slow;
    };
    const mergeSort = (head) => {
        if (!head || !head.next) return head;
        const middle = findMiddle(head);
        const left = mergeSort(head);
        const right = mergeSort(middle);
        return merge(left, right);
    };
    return mergeSort(head);
};