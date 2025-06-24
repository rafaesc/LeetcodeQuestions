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
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }

    var flag = true;
    var init = head.next;
    var prev = head;
    var nodePrev;
    var current = head.next;

    while(current) {
        if (flag) {
            var temp = current.next;
            current.next = null;
            current.next = prev;
            prev.next = temp;
            if (nodePrev) {
                nodePrev.next = current;
            }
            current = temp;
            flag = false
        } else{
            nodePrev = prev;
            prev = current;
            current = current.next;
            
            flag = true;
        }
    }

    return init;
};