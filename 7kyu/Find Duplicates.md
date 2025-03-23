# [Find Duplicates](https://www.codewars.com/kata/5558cc216a7a231ac9000022)

Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the
returned array should appear in the order when they first appeared as duplicates.

**_Note_**: numbers and their corresponding string representations should not be treated as duplicates (i.e.,
`"1" != 1`).

## Examples

    [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
    [0, 1, 2, 3, 4, 5]                ==>  []

---

<details><summary>My Solution</summary>

```js
function duplicates(arr) {
  const noDups = new Set()
  const dups = new Set()

  for (let v of arr) {
    if (noDups.has(v)) {
      dups.add(v)
    } else {
      noDups.add(v)
    }
  }

  return [...dups]
}
```

</details>
