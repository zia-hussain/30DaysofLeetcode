/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
     if (!matrix || matrix.length === 0) return [];

    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])}
        top++;
        // Traverse right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])}
        right--;
        // Check if top has not crossed bottom
        if (top <= bottom) {
            // Traverse bottom row
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])}
            bottom--;
        }
        // Check if left has not crossed right
        if (left <= right) {
            // Traverse left column
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])}
            left++;
        }}
    return result;
};