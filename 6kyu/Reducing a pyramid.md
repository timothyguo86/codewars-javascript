# [Reducing a pyramid](https://www.codewars.com/kata/5cc2cd9628b4200020880248)

## Number pyramid

Number pyramid is a recursive structure where each next row is constructed by adding adjacent values of the current row.
For example:

    Row 1     [1     2     3     4]
    Row 2        [3     5     7]
    Row 3           [8    12]
    Row 4             [20]

---

## Task

Given the first row of the number pyramid, find the value stored in its last row.

---

## Performance tests

    Number of tests: 5
    Array size: 10,000

---

<details><summary>My Solution</summary>

```js
// Observing the example: For an input array [a, b, c, d], the recursive process works as follows:
// First iteration: a+b, b+c, c+d → [a+b, b+c, c+d]
// Second iteration: (a+b)+(b+c)=a+2b+c, (b+c)+(c+d)=b+2c+d → [a+2b+c, b+2c+d]
// Third iteration: (a+2b+c)+(b+2c+d)=a+3b+3c+d → ['a+3b+3c+d]
// The final result is a+3b+3c+d, which demonstrates binomial coefficient patterns. For an array of length 4, the result equals:
// aC(3,0) + bC(3,1) + cC(3,2) + dC(3,3) = a1 + b3 + c3 + d1
// Here, the combination numbers C(n-1, k) correspond to binomial coefficients from the (n-1)th level, where:
// - n = original array length
// - k = element position (0-indexed)
// Thus, the final result is essentially the sum of each original element multiplied by its corresponding binomial coefficient.
function reducePyramid(base) {
  const n = base.length;
  if (n === 0) return 0;

  let result = 0n;

  // C(n-1, k) = C(n-1, k-1) * (n - k) / k
  for (let k = 0; k < n; k++) {
    if (k === 0) {
      combination = 1n; // C(n-1, 0) = 1
    } else {
      combination = (combination * BigInt(n - k)) / BigInt(k);
    }
    result += base[k] * combination;
  }

  return result;
}
```

</details>
