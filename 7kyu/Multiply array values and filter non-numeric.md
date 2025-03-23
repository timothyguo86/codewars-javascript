# [Multiply array values and filter non-numeric](https://www.codewars.com/kata/55ed875819ae85ca8b00005c)

Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of
values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given
multiplier.

---

<details><summary>My Solution</summary>

```js
function multiplyAndFilter(array, multiplier) {
  return array.filter(v => typeof v === 'number').map(v => v * multiplier)
}
```

</details>
