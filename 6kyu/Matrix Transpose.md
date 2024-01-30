# [Matrix Transpose](https://www.codewars.com/kata/52fba2a9adcd10b34300094c)

Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

For example, the transpose of:

```
| 1 2 3 |
| 4 5 6 |
```

is

```
| 1 4 |
| 2 5 |
| 3 6 |
```

The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

---

<details><summary>My Solution</summary>

```js
function transpose(matrix) {
  const result = []
  let preRow = matrix.length
  let preCol = matrix[0].length

  // swap row with col, then generate empty []
  for (let i = 0; i < preCol; i++) {
    result.push([])
  }

  for (let col = 0; col < preCol; col++) {
    for (let row = 0; row < preRow; row++) {
      result[col][row] = matrix[row][col]
    }
  }

  return result
}
```

</details>
