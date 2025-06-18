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
var reverseList = function(head) {
    var collect = [];
    var ref = head;

    while(ref) {
        collect.push(ref)
        ref = ref.next;
    }
    
    for (var i = collect.length - 1; i >= 1; i--) {
        var current = collect[i];
        var prev = collect[i - 1]
        prev.next = null;
        current.next = prev
    }

    if (collect.length) {
        return collect[collect.length - 1];
    }
    return head;
};


var reverseListGoodPerformance = function(head) {
    let prev=null;
    let current=head;
   // let next=current.next;
    while(current !=null){
        temp=current.next;
        current.next=prev;
        prev=current;
        current=temp;
        //next=current.next;
    }
    return head=prev;
};