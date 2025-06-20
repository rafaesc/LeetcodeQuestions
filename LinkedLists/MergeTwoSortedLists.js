/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var refList1 = list1;
    var refList2 = list2;
    var output = new ListNode();
    var outputRef = output;

    while (refList1 || refList2) {
        if (!refList1) {
            outputRef.next = new ListNode(refList2.val);
            refList2 = refList2.next;
            outputRef = outputRef.next
            continue;
        }
        if (!refList2) {
            outputRef.next = new ListNode(refList1.val);
            refList1 = refList1.next;
            outputRef = outputRef.next
            continue;
        }

        if (refList1.val >= refList2.val) {
            outputRef.next = new ListNode(refList2.val);
            refList2 = refList2.next;
        } else {
            outputRef.next = new ListNode(refList1.val);
            refList1 = refList1.next;
        }

        outputRef = outputRef.next

    }
    return output.next;
};