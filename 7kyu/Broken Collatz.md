# [Broken Collatz](https://www.codewars.com/kata/57e8c68c97a05990b10000c3)

The **Collatz sequence** is a set of numbers formed by taking an arbitrary positive integer and applying an operation to
it: if the number is even, _divide it by two_, and if it's odd, _multiply by three and add one_. Repeat this process,
taking the result as the input for the next step, until the resulting number is one.

The following function is not working. Its purpose is to return the length of any Collatz sequence. Can you fix it?

---

<details><summary>My Solution</summary>

```js
function collatz(n, count = 1) {
  if (n === 1) return count
  n = n % 2 === 0 ? n / 2 : n * 3 + 1

  return collatz(n, count + 1)
}
```

</details>
