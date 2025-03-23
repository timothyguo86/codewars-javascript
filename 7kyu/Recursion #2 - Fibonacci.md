# [Recursion #2 - Fibonacci](https://www.codewars.com/kata/557dd2a061f099504a000088)

Do you know recursion?

This is a kata series that you can only solve using recursion.

##2 - Fibonacci number

In mathematical terms, the sequence `f(n)` of [fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) numbers is
defined by the recurrence relation

`f(n) = f(n-1) + f(n-2)`

with seed values

`f(1) = 1` and `f(2) = 1`

#Your task

You have to create the function `fibonacci` that receives `n` and returns `f(n)`. You have to use recursion.

[Previous (Recursion #1 - Factorial)](http://www.codewars.com/kata/recursion-number-1-factorial)

---

<details><summary>My Solution</summary>

```js
const fibonacci = (n) => {
  return n === 1 || n === 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};
```

</details>
