# [Only Duplicates](https://www.codewars.com/kata/5389864ec72ce03383000484)

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

---

<details><summary>My Solution</summary>

```js
function onlyDuplicates(str) {
  return str.replace(/./g, v => {
    if (str.indexOf(v) === str.lastIndexOf(v)) return ''
    return v
  })
}
```

</details>
