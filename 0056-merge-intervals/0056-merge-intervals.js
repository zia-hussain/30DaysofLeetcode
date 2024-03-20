/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let currentInterval = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = currentInterval;
        const [nextStart, nextEnd] = intervals[i];
        nextStart <= currentEnd ? currentInterval[1] = Math.max(currentEnd, nextEnd) : (merged.push(currentInterval), currentInterval = intervals[i]);
    }
    merged.push(currentInterval);
    return merged;
};