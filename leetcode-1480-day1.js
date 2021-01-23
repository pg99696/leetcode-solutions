/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // method 1 using for loop
    
    
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
    
    
    // method 2 using reduce method
    
    /*
      return nums.reduce((acc, num) => {
          acc.length > 0 ? acc.push(acc[acc.length - 1] + num) : acc.push(num);
          return acc;
      }, []); 
    */
};
