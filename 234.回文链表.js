/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var arr = []
    while(head){
        arr.push(head.val)
        head = head.next;
    }
    for(let i = 0,j = arr.length - 1;i<j;i++,j--){
        if (arr[i] !== arr[j]) {
            // console.log("false")
            return false;
        }
    }
    // console.log("true")
    // console.log(arr)
    return true
};
// @lc code=end

