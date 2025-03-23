# [Number Pairs](https://www.codewars.com/kata/563b1f55a5f2079dc100008a)

In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

#### Example:

    arr1 = new int[] { 13, 64, 15, 17, 88 };
    arr2 = new int[] { 23, 14, 53, 17, 80 };

    Kata.getLargerNumbers(arr1, arr2); // Returns {23, 64, 53, 17, 88}

---

<details><summary>My Solution</summary>

```js
function getLargerNumbers(a, b) {
  return a.map((v, i) => Math.max(a[i], b[i]));
}
```

</details>
