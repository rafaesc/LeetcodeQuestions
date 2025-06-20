/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var output = new ListNode(null, head);
    var pointer = output;
    while(pointer && pointer.next) {
        if (pointer.next.val === val) {
            pointer.next = pointer.next.next;
            continue;
        }

        pointer = pointer.next;
    }

    return output.next;
};