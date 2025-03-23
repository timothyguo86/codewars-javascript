# [Sum of Odd Cubed Numbers](https://www.codewars.com/kata/580dda86c40fa6c45f00028a)

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined
if any of the values aren't numbers.

---

<details><summary>My Solution</summary>

```js
function cubeOdd(arr) {
  let sum = 0;
  for (let v of arr) {
    if (isNaN(v)) return undefined;
    if (v % 2) sum += v ** 3;
  }

  return sum;
}
```

</details>
