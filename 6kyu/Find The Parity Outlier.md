# [Find The Parity Outlier](https://www.codewars.com/kata/5526fc09a1bbd946250002dc)

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer `N`. Write a method that takes the array as an argument and returns this "outlier" `N`.

### Examples

```
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
```

---

<details><summary>My Solution</summary>

```js
function findOutlier(integers) {
  let evenCount = 0
  let oddCount = 0
  let isEvenArray = false

  // Count the first 3 integers
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) evenCount++
    else oddCount++
  }

  // Check if the majority is even or odd
  isEvenArray = evenCount > oddCount

  // Filter the array based on the majority parity and return the first element
  return integers.filter(integer => (isEvenArray ? integer % 2 !== 0 : integer % 2 === 0))[0]
}
```

</details>
