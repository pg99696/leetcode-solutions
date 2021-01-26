/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    // method 1 naive solution
    
    /*
    const map = new Map();
    
    for (let num of nums) {
        const val = map.get(num);
        if (map.has(num)) {
            map.set(num, val + 1);
            continue;
        }
        map.set(num, 1);
    }
    // console.log(map); 
    const mapArr = [];
    for (let [key, value] of map.entries()) {
        mapArr.push({'key': key, 'value': value});
    }
    
    // console.log(mapArr);
    
    mapArr.sort((a, b) => (a.value - b.value) < 0 ? -1 : (a.value - b.value) === 0 ? (b.key - a.key) : 1);
    // console.log('sorted',mapArr);
    let n = 0;
    
    for (let item of mapArr) {
        let freq = item.value;
        
        nums.fill(item.key, n, n + freq);
        n += freq;
    }
    
    // console.log(nums);
    
    return nums;
    */
    
    // method 2
    const map = {};
    
    for (let num of nums) {
        map[num] = map[num] + 1 || 1;
    }
    
    nums.sort((a, b) => map[a] - map[b] || b - a);
    
    return nums;
};
