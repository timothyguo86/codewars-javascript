# [Summing a number's digits](https://www.codewars.com/kata/52f3149496de55aded000410)

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

```
10 --> 1
99 --> 18
-32 --> 5
```

Let's assume that all numbers in the input will be integer values.

<details><summary>My Solution</summary>

```js
function sumDigits(number) {
  if (number === 0) return 0
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((a, b) => +a + +b)
}
```

</details>