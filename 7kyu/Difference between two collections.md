# [Difference between two collections](https://www.codewars.com/kata/594093784aafb857f0000122)

Find the difference between two collections. The difference means that either the character is present in one collection
or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

## Example

    A = [a, a, t, e, f, i, j]

    B = [t, g, g, i, k, f]

    difference = [a, e, g, j, k]

---

<details><summary>My Solution</summary>

```js
function diff(a, b) {
  const filteredA = a.filter(v => b.indexOf(v) === -1)
  const filteredB = b.filter(v => a.indexOf(v) === -1)

  return [...new Set([...filteredA, ...filteredB])].sort()
}
```

</details>
