# [Matrix creation](https://www.codewars.com/kata/5a34da5dee1aae516d00004a)

Create an identity matrix of the specified size( >= 0).

Some examples:

```
(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]
```

---

<details><summary>My Solution</summary>

```js
function getMatrix(number) {
  // Initialize an empty array to store the matrix.
  const result = []

  // Iterate through each row.
  for (let row = 0; row < number; row++) {
    // Initialize an empty array for the current row.
    const rowArr = []

    // Iterate through each column.
    for (let col = 0; col < number; col++) {
      // Check if the current position is on the main diagonal.
      // If true, push 1; otherwise, push 0.
      if (row === col) rowArr.push(1)
      else rowArr.push(0)
    }

    // Push the current row into the result array.
    result.push(rowArr)
  }

  // Return the generated identity matrix.
  return result
}
```

</details>
