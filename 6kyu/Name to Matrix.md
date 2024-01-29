# [Name to Matrix](https://www.codewars.com/kata/5a91e0793e9156ccb0003f6e)

Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).

You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.

If the name has a length of 0, return "name must be at least one letter"

Examples

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
  if (str.length === 0) return 'name must be at least one letter'

  const matrixLength = Math.ceil(Math.sqrt(str.length))
  const strForMatrix = str.padEnd(matrixLength * matrixLength, '.')
  const result = []
  let counter = 0

  // generate the empty matrix
  for (let i = 0; i < matrixLength; i++) {
    result.push([])
  }

  // fill the cols
  for (let row = 0; row < matrixLength; row++) {
    // fill the rows
    for (let col = 0; col < matrixLength; col++) {
      result[row][col] = strForMatrix[counter]
      counter++
    }
  }

  return result
}
```

</details>
