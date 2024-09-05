# [Most digits](https://www.codewars.com/kata/58daa7617332e59593000006)

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

---

<details><summary>My Solution</summary>

```js
function findLongest(array) {
  return array.sort((a, b) => b.toString().length - a.toString().length)[0]
}
```

</details>
