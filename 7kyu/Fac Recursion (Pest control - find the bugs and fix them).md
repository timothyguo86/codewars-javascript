# [Fac Recursion (Pest control - find the bugs and fix them)](https://www.codewars.com/kata/57fa92b25c9910e7bc0001df)

The code is a recursive attempt in calculating the result of a factorial function.
I.e. the result of 3! (Factorial of 3) is **3x2x1 = 6**.
In case of 0! the result is 1 and in case of a negative factorial the result should be 0.

The goal is to find the bugs in the sourcecode and fix them (play a little pest control).

---

<details><summary>My Solution</summary>

```js
function facRecursion(value) {
  if (value < 0) return 0;
  if ((value === 1) | (value === 0)) return 1;
  return value * facRecursion(value - 1);
}
```

</details>
