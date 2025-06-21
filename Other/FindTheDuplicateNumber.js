/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var s = new Set();
    var i = 0;
    while(!s.has(nums[i])) {
        s.add(nums[i])
        i++;
    }
    return nums[i]
};




var findDuplicateBetterSolution = function(nums) {
    let hash = Array(nums.length).fill(0)
   for(let i=0;i<nums.length;i++){
     hash[nums[i]]++ ;
   }

   for(let i=0;i<hash.length;i++){
    if(hash[i]>1) return i
   }
    return -1
};