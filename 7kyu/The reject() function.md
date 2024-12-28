# [The reject() function](https://www.codewars.com/kata/52988f3f7edba9839c00037d)

Implement a function which filters out array values which satisfy the given predicate.

    reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

---

<details><summary>My Solution</summary>

```js
function reject(array, predicate) {
  return array.filter(v => !predicate(v))
}
```

</details>