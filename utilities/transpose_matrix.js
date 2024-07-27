/**
 * Transposes a matrix by swapping its rows and columns.
 * @param {Array<Array<any>>} matrix - The matrix to be transposed.
 * @returns {Array<Array<any>>} - The transposed matrix.
 */
function transposeMatrix(matrix) {
  // Create an empty matrix with swapped dimensions
  const result = Array.from({ length: matrix[0].length }, () => Array.from({ length: matrix.length }))

  // Fill the transposed matrix
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      result[c][r] = matrix[r][c]
    }
  }

  return result
}

export default transposeMatrix
