# [Name to Matrix](https://www.codewars.com/kata/5a91e0793e9156ccb0003f6e)

Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the
length of each array).

You will need to add periods (`.`) to the end of the name if necessary, to turn it into a matrix.

If the name has a length of 0, return `"name must be at least one letter"`

### Examples

```
"Bill" ==> [ ["B", "i"],
             ["l", "l"] ]

"Frank" ==> [ ["F", "r", "a"],
              ["n", "k", "."],
              [".", ".", "."] ]
```

---

<details><summary>My Solution</summary>

```js
const matrixfy = str => {
  // Check if the input string is empty
  if (str.length === 0) return 'name must be at least one letter'

  const matrixLength = Math.ceil(Math.sqrt(str.length)) // Calculate the size of the square matrix
  const strForMatrix = str.padEnd(matrixLength * matrixLength, '.') // Pad the string to fit the square matrix
  const result = [] // Initialize an array to store the matrix
  let counter = 0

  // Generate the empty matrix (an array of arrays)
  for (let i = 0; i < matrixLength; i++) {
    result.push([])
  }

  // Fill the matrix by iterating through rows and columns
  for (let row = 0; row < matrixLength; row++) {
    for (let col = 0; col < matrixLength; col++) {
      result[row][col] = strForMatrix[counter] // Assign characters from the padded string to matrix elements
      counter++
    }
  }

  return result // Return the matrix
}
```

</details>
