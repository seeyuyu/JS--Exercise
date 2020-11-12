var hammingWeight = function(n) {
    var arr = n.toString(2).split('')
    var count=0;
    // console.log(n.length)
    if(arr.length>0){
        for(var i=0;i<arr.length;i++){
            if(arr[i]==1){
                count++
            }
        }
    }
    // console.log(count)
    return count;
};
var uu = hammingWeight(00000000000000000000000000001011)
console.log(uu)