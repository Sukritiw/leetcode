/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let xor = 0;
    let n = nums.length;
    for(let i = 0 ; i< n ; i++){
        xor ^= nums[i];
    }

    return xor;
};