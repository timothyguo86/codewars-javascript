# [Length and two values](https://www.codewars.com/kata/62a611067274990047f431a8)

Given an integer `n` and two other values, build an array of size `n` filled with these two values alternating.

## Examples

    5, true, false     -->  [true, false, true, false, true]
    10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
    0, "one", "two"    -->  []

Good luck!

---

<details><summary>My Solution</summary>

```js
function alternate(n, firstValue, secondValue) {
  const result = []
  for (let i = 0; i < n; i++) {
    if (i % 2) result.push(secondValue)
    else result.push(firstValue)
  }

  return result
}
```

</details>
