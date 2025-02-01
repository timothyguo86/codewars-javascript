# ['x' marks the spot](https://www.codewars.com/kata/555de49a04b7d1c13c00000e)

### Task:

Given a two dimensional array, return the co-ordinates of `x`.

If `x` is not inside the array, or if `x` appears multiple times, return `[]`.

The co-ordinates should be zero indexed in row-major order.  
You should assume you will always get an array as input. The array will only contain `'x'`s and `'o'`s.

### Examples

    Input: []

Return an empty array if input is an empty array => \[\]

    Input: [
      ['o', 'o'],
      ['o', 'o']
    ]

Return an empty array if no x found => \[\]

    Input: [
      ['x', 'o'],
      ['o', 'x']
    ]

Return an empty array if more than one x found => \[\]

    Input: [
      ['x', 'o'],
      ['o', 'o']
    ]
    Return [0,0] when x at top left => [0, 0]

    Input: [
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ]
    Return [4,6] for the example above => [4, 6]

---

<details><summary>My Solution</summary>

```js
function xMarksTheSpot(matrix) {
  let ordinates = []
  let count = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 'x') {
        count++
        if (count === 2) return []
        ordinates = [i, j]
      }
    }
  }

  return ordinates
}
```

</details>
