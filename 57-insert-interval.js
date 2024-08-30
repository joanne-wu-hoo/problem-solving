// https://leetcode.com/problems/insert-interval/


/*
1. either sort OR use binary search to figure out where to insert the array
2. go thru sorted intervals and merge intervals
- merged = [sortedInterval[0]]
- go thru intervals starting at idx 1
- compare with the last entry in merged
- if merged interval's end is >= intervals start, need to merge
    merged = first intervals start, max of second interval end and first interval end
    replace the last entry of merged with this interval
otherwise add interval to merged
*/

var insert = function(intervals, newInterval) {
    const sorted = binarySearchSort(intervals, newInterval)
    return mergeIntervals(sorted)    
};

var mergeIntervals = (intervals) => {
    const merged = [intervals[0]]

    intervals.slice(1).forEach(([secondStart, secondEnd]) => {
        const [firstStart, firstEnd] = merged[merged.length-1]
        if (firstEnd >= secondStart) {
            const mergedInterval = [firstStart, Math.max(firstEnd, secondEnd)]
            merged[merged.length-1] = mergedInterval
        } else {
            merged.push([secondStart, secondEnd])
        }
    })

    return merged
}

var binarySearchSort = (intervals, newInterval) => {
    let left = 0
    let right = intervals.length-1
    let target = newInterval[0]

    // got this wrong - didnt do equal to
    while (left <= right) {
        // got this wrong - did right minus left instead of plus
        let mid = Math.floor((right+left)/2)
        if (target < intervals[mid][0]) {
            // if target is less than mid, eliminate entire right side
            right = mid-1
        } else {
            // if target is greater than mid, eliminate entire left side 
            left = mid+1
        }
    }

    // insert at left
    intervals.splice(left, 0, newInterval)
    return intervals
}

