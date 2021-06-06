// https://leetcode.com/problems/container-with-most-water/

// Area = height * width
// Height = min of values
// Width = dif in indices

// Initialize left pointer at 0 and right pointer at end of array
// While left < right
// Calc area, get maxArea
// If the left value is smaller, left++
// If the right value is smaller, right--


var maxArea = (nums) => {
    if (nums.length <= 1) return 0;
    
    let left = 0;
    let right = nums.length-1;
    let maxArea = 0;
    
    while (left < right){
        let width = right - left;
        let height = Math.min(nums[left], nums[right]);
        let area = width * height;
        maxArea = Math.max(area, maxArea);
           
        nums[left] <= nums[right] ? left++  : right--;
    }
    
    return maxArea;
}
