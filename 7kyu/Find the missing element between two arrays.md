# [Find the missing element between two arrays](https://www.codewars.com/kata/5a5915b8d39ec5aa18000030)

Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing,
find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is
not a valid solution.

    find_missing([1, 2, 2, 3], [1, 2, 3]) => 2


    find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

The first array will always have at least one element.

---

<details><summary>My Solution</summary>

```js
function findMissing(arr1, arr2) {
  const sorted1 = arr1.sort((a, b) => a - b);
  const sorted2 = arr2.sort((a, b) => a - b);
  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) return sorted1[i];
  }
}
```

</details>
