# [Improving Math.round(x)](https://www.codewars.com/kata/56be025f9347a066c7000e4f)

But that is sometimes not enough! What if we wanted to round `3.1415926535` to two decimal places? While some languages (such as PHP) has a `round()` function that supports rounding to a specified number of decimal places (e.g. `<?php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified) */ ?>)`, Javascript does not!

### Task

Your task is to create a method, `Math.roundTo(number, precision)` which rounds a given `number` to `precision` decimal places.

You may find the following `Math` methods useful:

1. `Math.round(x)` (of course)
2. `Math.pow(x,y)` (returns x to the power of y - e.g. `Math.pow(3,4) == 81)`

---

<details><summary>My Solution</summary>

```js
Math.roundTo = function (number, precision) {
  return this.round(number * 10 ** precision) / 10 ** precision
}
```

</details>
