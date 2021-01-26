/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sortedArr = [...nums].sort((a, b) => a - b);
    
    return nums.map((num) => sortedArr.indexOf(num));
};
