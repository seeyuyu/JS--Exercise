/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let value=Math.abs(x)
    let baseNum = 0
    while (value>9) {
        baseNum = baseNum*10+value % 10 * 10
        value = parseInt(value/10)  
    }
    baseNum+=value
    if(Number(baseNum)>Math.pow(2,31)-1 || Number(baseNum)<Math.pow(-2,31)){  
        baseNum=0
    }
    console.log(x>0?baseNum:-baseNum)
    return x>0?baseNum:-baseNum
};
// @lc code=end

