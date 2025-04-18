# [Rotate matrix counter - clockwise N - times!](https://www.codewars.com/kata/5919f3bf6589022915000023)

In this kata your mission is to rotate matrix counter - clockwise N-times.

So, you will have 2 inputs:

```
1)matrix

2)a number, how many times to turn it
And an output is turned matrix.
```

## Example:

```js
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

times_to_turn = 1;
```

It should return this:

```
[
  [4, 8, 12, 16],
  [3, 7, 11, 15],
  [2, 6, 10, 14],
  [1, 5, 9, 13]
]
```

Note: all matrices will be square. Also random tests will have big numbers in input (times to turn)

Happy coding!

---

<details><summary>My Solution</summary>

```js
function rotateAgainstClockwise(matrix, times) {
  // Calculate the effective rotation
  const rotation = times % 4;
  // Function to rotate a matrix counter-clockwise once
  const rotateOnce = (mat) =>
    mat[0].map((_, i) => mat.map((row) => row[i])).reverse();

  // Perform the rotation 'times' times
  for (let i = 0; i < rotation; i++) {
    matrix = rotateOnce(matrix);
  }

  return matrix;
}
```

</details>
