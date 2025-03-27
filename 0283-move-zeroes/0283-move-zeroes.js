/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length === 0) return ;

    let j = -1;

    for(let i = 0 ; i < nums.length; i++){

        if( nums[i] === 0){
            j = i;
            break;
        }

    }

    if(j === -1) return;

    for( let i = j+1 ; i < nums.length ; i++){
        if(nums[i]!== 0 && nums[j] !== -1){
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j++;
        }
    }
};