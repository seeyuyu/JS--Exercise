/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var obj= {}
  var res= []
  for(let i of nums1){
    if(obj[i]){
      obj[i]++
    }else{
      obj[i] = 1
    }
  }
  for(let j of nums2){
    if(obj[j] && obj[j]>0){
      res.push(j)
      obj[j]--
    }
  }
  console.log(obj)
  return res
};
// @lc code=end

