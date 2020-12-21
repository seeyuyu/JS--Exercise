/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let hA = headA;
    while(hA){
        let hB = headB
        while(hB){
            if(hA == hB){
                return hA
            }
            hB = hB.next
        }
        hA = hA.next
    }
};
// @lc code=end

