# [Matrix Transpose](https://www.codewars.com/kata/52fba2a9adcd10b34300094c)

Transpose means is to interchange rows and columns of a two-dimensional array matrix.

ie: Formally, the i th row, j th column element of AT is the j th row, i th column element of A:

![matrix transpose](/images/Matrix_transpose.gif)

### Example:

```
[[1,2,3],[4,5,6]].transpose() //should return [[1,4],[2,5],[3,6]]
```

Write a prototype transpose to array in JS or add a .transpose method in Ruby or create a transpose function in Python so that any matrix of order ixj 2-D array returns transposed Matrix of jxi.

---

<details><summary>My Solution</summary>

```js
Array.prototype.transpose = function () {
  // catch edge cases
  if (this.length === 0) return []
  if (this.length !== 0 && this[0].length === 0) return [[]]

  const result = []
  let preRow = this.length
  let preCol = this[0].length

  // generate empty array with previous column
  for (let i = 0; i < preCol; i++) {
    result.push([])
  }

  // fill the empty array
  for (let col = 0; col < preCol; col++) {
    for (let row = 0; row < preRow; row++) {
      result[col][row] = this[row][col]
    }
  }

  return result
}
```

</details>
