# [ind the next perfect square!](https://www.codewars.com/kata/56269eb78ad2e4ced1000013)

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the `findNextSquare` method that finds the next integral perfect square after the one passed as a parameter.
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then `-1` should be returned. You may assume the parameter is
non-negative.

### Examples:(Input --> Output)

```
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
```

---

<details><summary>My Solution</summary>

```js
function stray(numbers) {
  // Check if the first two numbers are equal
  if (numbers[0] === numbers[1]) {
    // If true, find the number that is different from the first two
    return numbers.find((v) => v !== numbers[0]);
  }

  // If the first two numbers are not equal, check if the first and third numbers are equal
  return numbers[0] === numbers[2] ? numbers[1] : numbers[0];
}
```

</details>
