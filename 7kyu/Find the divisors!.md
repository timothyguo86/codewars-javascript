# [Find the divisors!](https://www.codewars.com/kata/544aed4c4a30184e960010f4/)

Create a function named `divisors/Divisors` that takes an integer `n > 1` and returns an array with all of the integer's
divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(
integer) is prime' (`null` in C#, empty table in COBOL) (use `Either String` a in Haskell and `Result<Vec<u32>`, String>
in Rust).

### Example:

```
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
```

---

<details><summary>My Solution</summary>

```js
function divisors(integer) {
  const result = []

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) result.push(i)
  }

  return result.length === 0 ? `${integer} is prime` : result
}
```

</details>
