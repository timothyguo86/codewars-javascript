# [Finding length of the sequence](https://www.codewars.com/kata/5566b0dd450172dfc4000005)

As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

For example, if the array `arr` is `[0, -3, 7, 4, 0, 3, 7, 9]`, finding the length of the sub-array that begins and ends
with `7`s would return `5`.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return `0`.

---

<details><summary>My Solution</summary>

```js
var lengthOfSequence = function (arr, n) {
  const appearanceOfN = arr.filter(v => v === n).length
  if (appearanceOfN === 2) return arr.lastIndexOf(n) - arr.indexOf(n) + 1

  return 0
}
```

</details>
