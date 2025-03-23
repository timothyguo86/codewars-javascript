# [Evens times last](https://www.codewars.com/kata/5a1a9e5032b8b98477000004)

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL),
multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

---

<details><summary>My Solution</summary>

```js
function evenLast(numbers) {
  return (
    numbers.reduce((total, cur, i) => {
      if (i % 2 === 0) {
        total += cur;
      }

      return total;
    }, 0) * numbers.slice(-1)
  );
}
```

</details>
