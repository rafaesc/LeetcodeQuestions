/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var fast = head.next;
    var slow = head;
    while(fast && fast.next && slow) {
        if (slow === fast) {
            return true;
        }
        fast = fast.next.next
        slow = slow.next;
    }

    return false;
};

var hasCycleBestPerformance = function(head) {
    let fast=head

    while(fast &&fast.next){
        head=head.next
        fast=fast.next.next
        if(head === fast)return true
    }
    return false
};