# [Double Trouble](https://www.codewars.com/kata/53d32bea2f2a21f666000256)

Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.

---

<details><summary>My Solution</summary>

```js
function trouble(x, t) {
  return x.reduce(
    (obj, cur, i) => {
      if (obj.prevNum + cur !== t && i > 0) {
        obj.result.push(cur)
        obj.prevNum = cur
      }

      return obj
    },
    { result: [x[0]], prevNum: x[0] }
  ).result
}
```

</details>
