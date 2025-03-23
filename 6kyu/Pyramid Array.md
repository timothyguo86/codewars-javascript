# [Pyramid Array](https://www.codewars.com/kata/515f51d438015969f7000013)

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

```
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
```

## Note:

The subarrays should be filled with `1`s

---

<details><summary>My Solution</summary>

```js
function pyramid(n) {
  const result = []; // Initialize an array to store the pyramid
  for (let i = 0; i < n; i++) {
    result.push(Array(i + 1).fill(1)); // Fill the array with arrays of consecutive '1's based on the row index
  }
  return result; // Return the pyramid as a 2D array
}
```

</details>
