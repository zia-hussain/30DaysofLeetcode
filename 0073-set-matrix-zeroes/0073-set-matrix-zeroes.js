/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let firstRow = false;
    let firstCol = false;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) firstRow = true;
                if (j === 0) firstCol = true;
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (firstRow) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }
    if (firstCol) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
};