# [Array comparator](https://www.codewars.com/kata/561046a9f629a8aac000001d)

You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.

---

<details><summary>My Solution</summary>

```js
function matchArrays(v, r) {
  let count = 0

  v.forEach(el => {
    if (r.includes(el)) count++
  })

  return count
}
```

</details>
