/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let currentInterval = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const currentStart = currentInterval[0];
        const currentEnd = currentInterval[1];
        const nextStart = intervals[i][0];
        const nextEnd = intervals[i][1];
        if (nextStart <= currentEnd) {
            currentInterval[1] = Math.max(currentEnd, nextEnd);
        } else {
            merged.push(currentInterval);
            currentInterval = intervals[i];
        }}
        merged.push(currentInterval);
    return merged;
};