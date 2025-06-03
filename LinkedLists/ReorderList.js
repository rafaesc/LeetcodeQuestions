/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var arr = [];
    iterateLinkedList(head, arr) /// [1,2,3,4,5,6]

    var ref = head
    var leftPoint = 0;
    var index = 1
    var rightPoint = arr.length;



    while (leftPoint < rightPoint || index < arr.length ) {
        if (index % 2 === 0) {
            var newRef = arr[leftPoint + 1]
            ref.next = newRef
            ref = newRef
            leftPoint++;
            arr[leftPoint].next = null
        } else {
            var newRef = arr[rightPoint - 1]
            ref.next = newRef
            ref = newRef
            rightPoint--
            arr[rightPoint].next = null
        }

        index++;
    }
};

function iterateLinkedList(head, arr) {
    arr.push(head)
    if (head.next) {
        iterateLinkedList(head.next, hashMap)
    }
}