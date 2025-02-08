# [Reducing a pyramid](https://www.codewars.com/kata/5cc2cd9628b4200020880248)

## Number pyramid

Number pyramid is a recursive structure where each next row is constructed by adding adjacent values of the current row. For example:

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
// Observation:
// n = 1 => a =>                                    [1]
// n = 2 => a + b =>                               [1, 1]
// n = 4 => a + b * 2 + c =>                      [1, 2, 1]
// n = 4 => a + b * 3 + c * 3 + d =>            [1, 3, 3, 1]
// n = 5 => a + b * 4 + c * 6 + d * 4 + e =>  [1, 4, 6, 4, 1]
// n = 6 =>  .............................=>[1, 5, 10, 10, 5, 1]
// So, this question turns out to be calculating the array of counts of each element in the base array
// Get the coefficients for row n-1 of Pascal's triangle
```

</details>
