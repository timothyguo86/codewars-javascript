# [Mean vs. Median](https://www.codewars.com/kata/5806445c3f1f9c2f72000031)

Your goal is to implement the method **meanVsMedian** which accepts an _odd-length_ array of integers and returns one of
the following:

- 'mean' - in case **mean** value is **larger than** median value
- 'median' - in case **median** value is **larger than** mean value
- 'same' - in case both mean and median share the **same value**

Reminder: [Median](https://en.wikipedia.org/wiki/Median)

Array will always be valid (odd-length >= 3)

---

<details><summary>My Solution</summary>

```js
function meanVsMedian(numbers) {
  const mean = numbers.reduce((total, cur) => total + cur) / numbers.length
  const median = [...numbers].sort((a, b) => a - b)[(numbers.length - 1) / 2]

  if (mean > median) return 'mean'
  else if (mean < median) return 'median'
  else return 'same'
}
```

</details>
