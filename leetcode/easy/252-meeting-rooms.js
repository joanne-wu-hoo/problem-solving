// https://leetcode.com/problems/meeting-rooms/

var canAttendMeetings = function(intervals) {
    // sort intervals
    intervals = intervals.sort((a,b) => a[0]-b[0])
    
    // cannot attend all meetings if the previous meeting ends before the next meeting begins
    for (let i=1; i < intervals.length; i++){
        let [prevStart, prevEnd] = intervals[i-1];
        let [currentStart, currentEnd] = intervals[i];
        
        if (prevEnd > currentStart) return false;
    }
    
    return true;
};

