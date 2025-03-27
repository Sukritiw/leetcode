/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  
    let n  = nums.length;
    k = k % n;

    let temp = new Array(0);

    for(let i = 0 ; i < k ; i++){
        temp[i] = nums[n - k + i];
    }

     for (let i = k; i < n; i++) {
        temp[i] = nums[i - k];
    }
    
      for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
};