/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
       if (intervals.length === 0) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let prevEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        const currStart = intervals[i][0];
        const currEnd = intervals[i][1];
        if (currStart < prevEnd) {
            count++;
        } else {
            prevEnd = currEnd;
        }
    }
    return count;
};