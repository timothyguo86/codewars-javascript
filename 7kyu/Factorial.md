# [Factorial](https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc)

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 _ 4 _ 3 _ 2 _ 1 = 120. By convention the value of 0! is 1.

Write a function to calculate the factorial for a given input. If the input is below 0 or above 12, throw an exception of type `ArgumentOutOfRangeException` (C#), `IllegalArgumentException` (Java), `RangeException` (PHP), throw a `RangeError` (JavaScript), `ValueError` (Python), or return `-1` (C).

More details about factorial can be found [here](https://www.wikiwand.com/en/Factorial).

<details><summary>My Solution</summary>

```js
function factorial(n) {
  if (n === 0) {
    return 1
  } else if (n < 0 || n > 12) {
    throw new RangeError()
  } else {
    return n * factorial(n - 1)
  }
}
```

</details>
