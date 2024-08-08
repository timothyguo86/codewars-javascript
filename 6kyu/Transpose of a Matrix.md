# [Matrix Transpose](https://www.codewars.com/kata/52fba2a9adcd10b34300094c)

Transpose means is to interchange rows and columns of a two-dimensional array matrix.

ie: Formally, the i th row, j th column element of AT is the j th row, i th column element of A:

![matrix transpose](/images/matrix_transpose.gif)

### Example:

```
[[1,2,3],[4,5,6]].transpose() //should return [[1,4],[2,5],[3,6]]
```

Write a prototype transpose to array in JS or add a .transpose method in Ruby or create a transpose function in Python so that any matrix of order ixj 2-D array returns transposed Matrix of jxi.

---

<details><summary>My Solution</summary>

```js
Array.prototype.transpose = function () {
  // Catch edge cases: return an empty array for an empty matrix, or a matrix with empty arrays for a matrix with no columns
  if (this.length === 0) return []
  if (this.length !== 0 && this[0].length === 0) return [[]]

  const result = [] // Initialize an array to store the transposed matrix
  let preRow = this.length // Number of rows in the original matrix
  let preCol = this[0].length // Number of columns in the original matrix

  // Generate empty arrays in the result for each column in the transposed matrix
  for (let i = 0; i < preCol; i++) {
    result.push([])
  }

  // Fill the transposed matrix by swapping rows with columns
  for (let col = 0; col < preCol; col++) {
    for (let row = 0; row < preRow; row++) {
      result[col][row] = this[row][col]
    }
  }

  return result // Return the transposed matrix
}
```

</details>
