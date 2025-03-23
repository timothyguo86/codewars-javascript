# [Check three and two](https://www.codewars.com/kata/5a9e86705ee396d6be000091)

Given an array with exactly 5 strings `"a"`, `"b"` or `"c"` (`char`s in Java, `character`s in Fortran, `Char`s in
Haskell), check if the array contains three and two of the same values.

## Examples

    ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
    ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
    ["a", "a", "a", "a", "a"] ==> false // 5x "a"

---

<details><summary>My Solution</summary>

```js
function checkThreeAndTwo(array) {
  const dict = {}
  array.forEach(v => {
    if (!dict[v]) dict[v] = 1
    else dict[v]++
  })
  const [a, b] = Object.values(dict)
  if ((a === 3 && b === 2) || (a === 2 && b === 3)) return true

  return false
}
```

</details>
