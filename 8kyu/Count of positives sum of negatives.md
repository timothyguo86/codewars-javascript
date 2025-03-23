# [Count of positives / sum of negatives](https://www.codewars.com/kata/576bb71bbbcf0951d5000044)

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative
numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

### Example

For input `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]`, you should return `[10, -65]`.

---

<details><summary>My Solution</summary>

```js
function countPositivesSumNegatives(input) {
  // Check if the input array is null or empty, and return an empty array in such cases
  if (input == null || input.length < 1) {
    return []
  }

  // Count the number of positive elements and calculate the sum of negative elements
  let positiveCount = input.filter(v => v > 0).length
  let negativeSum = input.reduce((a, b) => {
    if (b < 0) {
      a += b
    }

    return a
  }, 0)

  return [positiveCount, negativeSum]
}
```

</details>
