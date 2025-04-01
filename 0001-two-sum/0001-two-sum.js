/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ans = [];
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                ans[0] = i;
                ans[1] = j;
                return ans; 
            }
        }
    }
    
    return ans; 
};