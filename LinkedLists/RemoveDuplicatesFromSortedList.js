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
var deleteDuplicates = function(head) {
    var ref = head;
    var prev = null
    while(ref) {
        if (prev && prev.val === ref.val) {
            prev.next = ref.next;
            ref = prev.next;
            continue;
        }

        prev = ref;
        ref= ref.next;
    }

    return head;
};