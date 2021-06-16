// https://leetcode.com/problems/merge-intervals/

function merge(intervals){
    
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    
    let output = [intervals[0]];
    
    
    for (let [start, end] of intervals){
        let prev = output[output.length-1];
        let [prevStart, prevEnd] = prev;
        
        if (prevEnd >= start){
            // merge
            let intervalToUpdate = output.pop();
            // update end of interval 
            intervalToUpdate[1] = Math.max(end, prevEnd);
            output.push(intervalToUpdate)
        } else {
            output.push([start,end])
        }
    }
    
    return output
    
}








