# [Find missing numbers](https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb)

You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

    [-3,-2,1,5] //missing numbers are: -1,0,2,3,4

Your task is to return an array of those missing numbers:

    [-1,0,2,3,4]

---

<details><summary>My Solution</summary>

```js
function findMissingNumbers(arr) {
  const fullArr = Array.from({ length: Math.max(...arr) - Math.min(...arr) }, (_, i) => Math.min(...arr) + i)
  return fullArr.filter(v => !arr.includes(v))
}
```

</details>
