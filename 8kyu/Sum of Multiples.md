# [Sum of Multiples](https://www.codewars.com/kata/57241e0f440cd279b5000829/)

### Your Job

Find the sum of all multiples of `n` below `m`

### Keep in Mind

- `n` and `m` are natural numbers (positive integers)
- `m` is excluded from the multiples

### Examples

```js
sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7) ==> "INVALID"
```

---

<details><summary>My Solution</summary>

```js
function sumMul(n, m) {
  // Check if m is less than or equal to n, or if n is 0
  if (m <= n || n === 0) return 'INVALID'

  // Calculate the number of multiples of n within the range [1, m]
  const multiple = m % n === 0 ? m / n - 1 : Math.floor(m / n)

  // Calculate the sum of multiples using the arithmetic series formula
  return ((n + multiple * n) * multiple) / 2
}
```

</details>
