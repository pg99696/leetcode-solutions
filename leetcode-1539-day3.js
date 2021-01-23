/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    var i = 1, current = 0;
    
    while (k !== 0) {
        if (arr[current] === i) current++;
        else k--;
        i++;
    }
    
    return i - 1;
};
