/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    var min = 10000000;
    var max = 0;
    var sum = 0;
    var n = salary.length;
    
    for (let i = 0; i < n; i++) {
        if (min > salary[i]) min = salary[i];
        if (max < salary[i]) max = salary[i];
    }
    // console.log(min, max);
    
    for (let i = 0; i < n; i++) {
        if (!(salary[i] === min || salary[i] === max)) sum += salary[i];
    }
    
    // console.log(sum, n);
    
    return sum / (n - 2);
};
