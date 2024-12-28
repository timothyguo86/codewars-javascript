# [Identical Elements](https://www.codewars.com/kata/57e92812750fcc051800004d)

Given two arrays of integers `m` and `n`, test if they contain _at least_ one identical element. Return `true` if they do; `false` if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a `false` result, as there are no duplicated elements).

---

<details><summary>My Solution</summary>

```js
function duplicateElements(m, n) {
  const setM = new Set(m)
  const setN = new Set(n)

  return [...setM, ...setN].length !== new Set([...setM, ...setN]).size
}
```

</details>
