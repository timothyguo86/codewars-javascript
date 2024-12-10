# [Replace all items](https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a)

Write function `replaceAll` (Python: `replace_all`) that will replace all occurrences of an item with another.

**Python / JavaScript**: The function has to work for strings and lists.

Example: replaceAll \[1,2,2\] 1 2 -> in list \[1,2,2\] we replace 1 with 2 to get new list \[2,2,2\]

    replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

---

<details><summary>My Solution</summary>

```js
function replaceAll(seq, find, replace) {
  return typeof seq === 'string'
    ? [...seq].map(v => (v === find ? replace : v)).join('')
    : [...seq].map(v => (v === find ? replace : v))
}
```

</details>
