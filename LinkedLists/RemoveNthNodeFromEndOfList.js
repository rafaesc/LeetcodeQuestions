/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var orders = [head];
    var ref = head

    while(ref.next) {
        var current = ref.next;
        orders.push(current);
        ref = current;
    }

    var prevNthFromEnd = orders[orders.length - 1 - n];

    if (!prevNthFromEnd) {
        return head.next
    }

    prevNthFromEnd.next = prevNthFromEnd.next.next;

    return head;
};